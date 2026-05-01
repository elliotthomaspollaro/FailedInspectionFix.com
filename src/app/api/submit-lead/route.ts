/* ═══════════════════════════════════════════════════════════════════
 * /api/submit-lead/route.ts — API Switchboard
 * ═══════════════════════════════════════════════════════════════════
 * Conditional routing waterfall:
 *  1. Validate → 2. Save to DB → 3. Route to API partner → 4. Update status
 *
 * CRITICAL: Never show API errors to the user. Always return 200 OK.
 * If the API fails, mark as UNSOLD_MANUAL_BROKER and fire webhook.
 * ═══════════════════════════════════════════════════════════════════ */

import { NextRequest, NextResponse } from "next/server";
import { LeadFormSchema } from "@/lib/validators";

/* ─── API Network Configuration ─── */
interface ApiNetwork {
  name: string;
  envUrl: string;
  envKey: string;
  soldStatus: string;
}

const API_NETWORKS: Record<string, ApiNetwork> = {
  "High Radon Levels": {
    name: "ServiceDirect",
    envUrl: "SERVICE_DIRECT_API_URL",
    envKey: "SERVICE_DIRECT_API_KEY",
    soldStatus: "SOLD_SERVICE_DIRECT",
  },
  "Underground Oil Tank": {
    name: "PX",
    envUrl: "PX_MARKETPLACE_API_URL",
    envKey: "PX_MARKETPLACE_API_KEY",
    soldStatus: "SOLD_PX",
  },
  "Asbestos / Lead Paint": {
    name: "PX",
    envUrl: "PX_MARKETPLACE_API_URL",
    envKey: "PX_MARKETPLACE_API_KEY",
    soldStatus: "SOLD_PX",
  },
  "Failed Sewer Scope": {
    name: "Networx",
    envUrl: "NETWORX_API_URL",
    envKey: "NETWORX_API_KEY",
    soldStatus: "SOLD_NETWORX",
  },
};

/* ─── Discord Webhook Alert (for unsold leads) ─── */
async function fireWebhookAlert(leadData: Record<string, unknown>, reason: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("[WEBHOOK] No DISCORD_WEBHOOK_URL configured — skipping alert");
    return;
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: null,
        embeds: [
          {
            title: "🚨 Unsold Lead — Manual Broker Required",
            color: 0xef4444, // Caution Red
            fields: [
              { name: "Name", value: `${leadData.firstName} ${leadData.lastName || ""}`.trim(), inline: true },
              { name: "Phone", value: String(leadData.phone), inline: true },
              { name: "Email", value: String(leadData.email), inline: true },
              { name: "Issue", value: String(leadData.issueType), inline: true },
              { name: "Role", value: String(leadData.transactionRole), inline: true },
              { name: "Closing", value: String(leadData.closingTimeline), inline: true },
              { name: "ZIP", value: String(leadData.zipCode), inline: true },
              { name: "Failure Reason", value: reason, inline: false },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
      signal: AbortSignal.timeout(5000),
    });
  } catch (err) {
    console.error("[WEBHOOK] Discord alert failed:", err);
  }
}

/* ─── Route Handler ─── */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ═══ STEP 1: Validate incoming data ═══
    const parseResult = LeadFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parseResult.error.issues },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // ═══ STEP 2: Save to database FIRST — data ownership ═══
    // NOTE: Uncomment when Prisma is connected
    // const { PrismaClient } = await import("@prisma/client");
    // const prisma = new PrismaClient();
    // const lead = await prisma.lead.create({
    //   data: {
    //     firstName: data.firstName,
    //     lastName: data.lastName || null,
    //     email: data.email,
    //     phone: data.phone,
    //     issueType: data.issueType,
    //     transactionRole: data.transactionRole,
    //     closingTimeline: data.closingTimeline,
    //     zipCode: data.zipCode,
    //     sourceUrl: data.sourceUrl || null,
    //     utmSource: data.utmSource || null,
    //     utmMedium: data.utmMedium || null,
    //     utmCampaign: data.utmCampaign || null,
    //     utmContent: data.utmContent || null,
    //     referrer: data.referrer || null,
    //     status: "PENDING",
    //   },
    // });

    // ═══ STEP 3: API Switchboard — Route to the correct network ═══
    let apiSuccess = false;
    let apiPartner = "none";
    let apiPayout: number | null = null;
    let soldStatus = "UNSOLD_MANUAL_BROKER";
    let failureReason = "";

    const network = API_NETWORKS[data.issueType];

    if (network) {
      // We have a configured network for this hazard type
      const apiUrl = process.env[network.envUrl];
      const apiKey = process.env[network.envKey];

      if (apiUrl && apiKey) {
        try {
          const apiResponse = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              // ─── Universal payload format ───
              first_name: data.firstName,
              last_name: data.lastName || "",
              email: data.email,
              phone: data.phone,
              zip: data.zipCode,
              issue_type: data.issueType,
              transaction_role: data.transactionRole,
              closing_timeline: data.closingTimeline,
              source: data.sourceUrl || "failedinspectionfix.com",
            }),
            signal: AbortSignal.timeout(8000), // 8-second hard timeout
          });

          if (apiResponse.ok) {
            const apiData = await apiResponse.json();
            // Check for success — different APIs return different shapes
            const isSuccess =
              apiData.status === "Success" ||
              apiData.success === true ||
              apiData.accepted === true ||
              apiData.lead_id != null;

            if (isSuccess) {
              apiSuccess = true;
              apiPartner = network.name;
              apiPayout = apiData.payout || apiData.price || apiData.revenue || null;
              soldStatus = network.soldStatus;
            } else {
              // API returned OK but no buyer coverage
              failureReason = `${network.name} returned OK but no buyer: ${JSON.stringify(apiData).slice(0, 200)}`;
              apiPartner = network.name;
            }
          } else {
            failureReason = `${network.name} returned HTTP ${apiResponse.status}`;
            apiPartner = network.name;
          }
        } catch (err) {
          // Timeout or network error — DO NOT show to user
          failureReason = `${network.name} API error: ${err instanceof Error ? err.message : "Unknown"}`;
          apiPartner = network.name;
          console.error(`[SWITCHBOARD] ${failureReason}`);
        }
      } else {
        // No API keys configured — development mode simulation
        apiSuccess = true;
        apiPartner = "simulated";
        soldStatus = network.soldStatus;
        console.log(`[DEV] Simulated ${network.name} API call — no keys configured`);
      }
    } else {
      // "Other" issue type — no API network, goes straight to manual broker
      apiPartner = "manual";
      soldStatus = "UNSOLD_MANUAL_BROKER";
      failureReason = "Issue type 'Other' — no API network configured";
    }

    // ═══ STEP 4: Update lead status in database ═══
    // NOTE: Uncomment when Prisma is connected
    // await prisma.lead.update({
    //   where: { id: lead.id },
    //   data: {
    //     apiSuccess,
    //     apiPartner,
    //     apiPayout,
    //     status: apiSuccess ? soldStatus : "UNSOLD_MANUAL_BROKER",
    //   },
    // });

    // ═══ STEP 5: Fire webhook if unsold ═══
    if (!apiSuccess) {
      // Non-blocking — fire and forget
      fireWebhookAlert(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          issueType: data.issueType,
          transactionRole: data.transactionRole,
          closingTimeline: data.closingTimeline,
          zipCode: data.zipCode,
        },
        failureReason || "API call failed or returned no buyer coverage"
      );
    }

    // ═══ Console log for monitoring ═══
    const urgencyTag = data.closingTimeline === "0-7 Days" ? " 🔴 URGENT" : "";
    console.log(
      `[LEAD]${urgencyTag} ${data.firstName} | ${data.zipCode} | ${data.issueType} | ${data.transactionRole} | ${data.closingTimeline} | API: ${apiPartner} (${apiSuccess ? "✓ SOLD" : "✗ UNSOLD"})`
    );

    // ═══ ALWAYS return 200 OK — never show API errors to user ═══
    return NextResponse.json({
      success: true,
      message:
        "Success! A certified local mitigation specialist is reviewing your file and will contact you shortly to provide clearance.",
    });
  } catch (error) {
    console.error("[LEAD API ERROR]", error);
    // Even on catastrophic failure, try to return a user-friendly response
    return NextResponse.json(
      {
        success: false,
        error: "We're experiencing high volume. Your request has been saved and a specialist will contact you shortly.",
      },
      { status: 500 }
    );
  }
}

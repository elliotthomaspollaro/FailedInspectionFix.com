/* ═══════════════════════════════════════════════════════════════════
 * SeoBasement.tsx — Dynamic Keyword-Rich Content for pSEO Pages
 * ═══════════════════════════════════════════════════════════════════
 * Uses deterministic seeded randomization (seeded by city string)
 * to produce 3 HCU-compliant paragraphs per silo that naturally
 * weave items from the silo's service array + escrow triggers.
 *
 * CRITICAL RULES:
 *   ✓ NO "cost" or "diy" keywords — EVER
 *   ✓ Seeded by city so content is consistent for Googlebot
 *   ✓ Unique across cities to avoid duplicate content penalty
 * ═══════════════════════════════════════════════════════════════════ */

import {
  ESCROW_TRIGGERS,
  SILO_CONFIGS,
  hashSeed,
  pickN,
  pick,
  type SiloKey,
} from "@/lib/seo-data";
import type { ParsedSlug } from "@/lib/seo-utils";

interface SeoBasementProps {
  city: string;
  state: string;
  stateFull: string;
  siloKey: SiloKey;
  parsed: ParsedSlug;
}

/* ─── Template Context ─── */
interface TemplateContext {
  city: string;
  stateFull: string;
  siloKey: SiloKey;
  displayName: string;
  parsed: ParsedSlug;
  services: string[];    // 3-4 seeded services from the silo
  triggers: string[];    // 2-3 seeded escrow triggers
}

/* ═══════════════════════════════════════════════════════════════════
 * PARAGRAPH TEMPLATES — Bureaucratic Panic + Technical Authority
 * 3 templates per paragraph slot, seeded pick selects one.
 * ═══════════════════════════════════════════════════════════════════ */

/* ─── Paragraph 1: Problem Recognition / Urgency ─── */
const INTRO_TEMPLATES = [
  (ctx: TemplateContext) =>
    `If your **${ctx.parsed.service || ctx.services[0]}** issue is blocking your ${ctx.city} real estate closing, our certified specialist network provides immediate response. Whether you're dealing with a **${ctx.triggers[0]}** or your escrow officer is demanding **${ctx.services[1]}** documentation, FailedInspectionFix.com connects you with licensed professionals who handle **${ctx.services[2]}** and **${ctx.services[3] || ctx.services[0]}** across ${ctx.stateFull} — so your transaction stays on track.`,

  (ctx: TemplateContext) =>
    `A **${ctx.triggers[0]}** in ${ctx.city} doesn't have to kill your deal. Our ${ctx.stateFull} specialist network includes certified professionals who specialize in **${ctx.services[0]}**, **${ctx.services[1]}**, and **${ctx.services[2]}**. Every specialist in our network provides escrow-ready clearance documentation accepted by title companies and lenders — because when your closing date is at risk, you need a licensed contractor, not a general handyman.`,

  (ctx: TemplateContext) =>
    `${ctx.city} property owners facing a **${ctx.triggers[0]}** or needing **${ctx.services[0]}** before closing are in the right place. FailedInspectionFix.com is the fastest way to connect with a certified ${ctx.displayName.toLowerCase()} specialist in ${ctx.stateFull}. Our network handles **${ctx.services[1]}**, **${ctx.services[2]}**, and **${ctx.services[3] || ctx.services[0]}** with same-day assessment available for urgent escrow deadlines.`,
];

/* ─── Paragraph 2: Technical Depth / Service Authority ─── */
const DEPTH_TEMPLATES = [
  (ctx: TemplateContext) =>
    `Our ${ctx.city} specialists carry the required state certifications for **${ctx.services[0]}** and **${ctx.services[1]}**. Unlike general contractors, every technician in our network is specifically trained in **${ctx.services[2]}** protocols and provides documentation that satisfies **${ctx.triggers[1]}** requirements. We service properties involved in **${ctx.triggers[2] || ctx.triggers[0]}** scenarios, conventional sales, FHA transactions, and VA escrow holdback situations across ${ctx.stateFull}.`,

  (ctx: TemplateContext) =>
    `${ctx.city} real estate agents and property managers trust our network for **${ctx.services[0]}**, **${ctx.services[1]}**, and **${ctx.services[2]}** when a transaction is at risk. Our specialists understand the urgency of a **${ctx.triggers[0]}** and prioritize rapid assessment, remediation, and clearance certification. Every job includes official documentation — clearance letters, lab results, and remediation reports — that your title company and lender require to proceed to closing in ${ctx.stateFull}.`,

  (ctx: TemplateContext) =>
    `When a **${ctx.triggers[0]}** surfaces in ${ctx.city}, the clock starts ticking. Our certified specialists are equipped to perform **${ctx.services[0]}**, **${ctx.services[1]}**, and **${ctx.services[2]}** under tight deadlines. We've helped hundreds of ${ctx.stateFull} transactions close on time by providing **${ctx.services[3] || ctx.services[0]}** services with rapid-turnaround clearance documentation. Licensed, bonded, and insured — every specialist in our network meets ${ctx.stateFull} regulatory requirements.`,
];

/* ─── Paragraph 3: Local CTA / Conversion ─── */
const CTA_TEMPLATES = [
  (ctx: TemplateContext) =>
    `Don't let a **${ctx.triggers[0]}** in ${ctx.city} delay your closing. FailedInspectionFix.com matches you with a certified ${ctx.displayName.toLowerCase()} specialist in ${ctx.stateFull} in under 60 seconds. Fill out the form above and a licensed professional will contact you within 15 minutes to schedule your assessment — most can begin **${ctx.services[0]}** or **${ctx.services[1]}** within 24 hours.`,

  (ctx: TemplateContext) =>
    `Ready to resolve your ${ctx.city} **${ctx.services[0]}** issue before closing? Submit your details above and our ${ctx.stateFull} specialist network will connect you with a certified professional who handles **${ctx.services[1]}** and **${ctx.services[2]}**. Free on-site estimates, escrow-ready clearance documentation, and no obligation. Your closing date is too important to leave to chance.`,

  (ctx: TemplateContext) =>
    `Every day you wait on **${ctx.services[0]}** in ${ctx.city} is a day closer to losing your deal. Our ${ctx.stateFull} certified specialists provide rapid-turnaround **${ctx.services[1]}** and deliver the clearance documentation your escrow officer needs. It takes 60 seconds to get matched — submit the form above and protect your closing.`,
];

/* ═══════════════════════════════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════════════════════════════ */

export default function SeoBasement({
  city,
  state,
  stateFull,
  siloKey,
  parsed,
}: SeoBasementProps) {
  const config = SILO_CONFIGS[siloKey];
  const seed = hashSeed(`${city}-${state}-${siloKey}`);

  // Seeded picks from the silo's keyword arrays
  const services = pickN(config.services, seed, 4, 0);
  const triggers = pickN(ESCROW_TRIGGERS, seed, 3, 7);

  const ctx: TemplateContext = {
    city: city.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    stateFull,
    siloKey,
    displayName: config.displayName,
    parsed,
    services: services as string[],
    triggers: triggers as string[],
  };

  // Seeded template selection
  const intro = INTRO_TEMPLATES[seed % INTRO_TEMPLATES.length](ctx);
  const depth = DEPTH_TEMPLATES[(seed + 3) % DEPTH_TEMPLATES.length](ctx);
  const cta   = CTA_TEMPLATES[(seed + 7) % CTA_TEMPLATES.length](ctx);

  return (
    <section
      className="py-12 sm:py-16 px-4"
      style={{ background: "#FFFFFF", borderTop: "1px solid #E2DDD4" }}
      aria-label={`${config.displayName} information for ${ctx.city}`}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl" style={{ color: "#1C2A3A" }}>
          {config.displayName} Specialists in {ctx.city}, {stateFull}
        </h2>

        {[intro, depth, cta].map((paragraph, i) => (
          <p
            key={i}
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "#3D566E" }}
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        ))}
      </div>
    </section>
  );
}

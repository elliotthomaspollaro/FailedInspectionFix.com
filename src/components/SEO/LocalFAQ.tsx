/* ═══════════════════════════════════════════════════════════════════
 * LocalFAQ.tsx — JSON-LD FAQPage Schema with Cost Keywords
 * ═══════════════════════════════════════════════════════════════════
 * THIS is where cost/pricing keywords live. The visible FAQ section
 * uses questions like "What is the average cost of a trenchless
 * sewer replacement in {City}?" to capture high-volume price-shopper
 * search queries WITHOUT contaminating the panic-driven conversion
 * copy on the main page.
 *
 * STRATEGY:
 *   ✓ JSON-LD FAQPage schema → Google rich snippet eligibility
 *   ✓ City-specific cost questions → massive long-tail capture
 *   ✓ Answers include escrow-urgency language → drives CTA
 *   ✓ Seeded selection → unique per city, consistent for Googlebot
 * ═══════════════════════════════════════════════════════════════════ */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  SILO_CONFIGS,
  hashSeed,
  pickN,
  type SiloKey,
} from "@/lib/seo-data";

interface LocalFAQProps {
  city: string;
  stateFull: string;
  siloKey: SiloKey;
}

/* ═══════════════════════════════════════════════════════════════════
 * COST-BASED ANSWER TEMPLATES
 * These pair with the cost FAQ questions from seo-data.ts
 * Answers include urgency language to drive conversions
 * ═══════════════════════════════════════════════════════════════════ */

const RADON_ANSWERS: Record<number, string> = {
  0: "The average cost of a radon mitigation system installation in {city} ranges from $800 to $2,500, depending on the home's foundation type and system complexity. Sub-slab depressurization systems are the most common and effective. When your closing date is at risk, our certified {stateFull} specialists provide rapid-turnaround installation with escrow-ready clearance documentation included in the service.",
  1: "Radon fan installation in {city} typically costs between $600 and $1,500. This includes the fan unit, PVC piping, and sealing. For real estate transactions, our {stateFull} specialists prioritize installations that can be completed and re-tested within your closing timeline — most systems can be operational within 24-48 hours of assessment.",
  2: "Active soil depressurization (ASD) in {city} costs between $800 and $2,000. This is the EPA-recommended approach for homes testing above 4.0 pCi/L. Our {stateFull} certified mitigators include post-installation re-testing and provide the clearance certificate your title company requires before closing.",
  3: "A sub-slab radon mitigation system in {city} ranges from $1,000 to $2,500. The cost depends on foundation accessibility, number of suction points required, and whether exterior or interior routing is used. Our specialists provide escrow-ready documentation and coordinate directly with your real estate agent to keep the transaction on schedule.",
  4: "An exterior radon mitigation system in {city} typically costs $1,200 to $3,000. Exterior systems route PVC piping along the outside of the home, which is often required for finished basements. Our {stateFull} specialists complete most exterior installations in a single day with clearance documentation provided within 48 hours of re-testing.",
  5: "Radon remediation in {city} ranges from $800 to $2,500 depending on the mitigation method and home layout. For homes in active real estate transactions, our certified {stateFull} specialists offer expedited service — including rapid re-testing — to ensure your escrow can proceed on schedule.",
};

const OIL_TANK_ANSWERS: Record<number, string> = {
  0: "Underground oil tank removal in {city} typically costs between $2,500 and $10,000+, depending on tank size, soil contamination, and accessibility. If soil contamination is found, remediation costs can increase significantly. Our certified {stateFull} specialists provide the DEP closure certification and NFA (No Further Action) letter required for escrow clearance.",
  1: "Oil tank decommissioning in {city} costs between $2,000 and $5,000 for in-place abandonment, or $3,000 to $10,000+ for full excavation and removal. In-place decommissioning involves draining, cleaning, and filling the tank with approved material. Our {stateFull} specialists provide the official closure documentation your title company needs.",
  2: "A GPR (Ground Penetrating Radar) tank sweep in {city} typically costs $250 to $500. This non-invasive scan detects buried metal objects on the property. If a tank is found, our {stateFull} network includes certified removal contractors who can expedite the process for time-sensitive real estate closings.",
  3: "Soil testing for a leaking oil tank in {city} costs between $500 and $2,000 depending on the number of samples required by your state DEP. Contaminated soil remediation adds $5,000 to $50,000+ depending on the extent. Our {stateFull} specialists coordinate the full process — testing, remediation, and clearance — under one engagement.",
  4: "Oil tank sweep certification in {city} costs $300 to $600 and includes the official report accepted by title companies and lenders. Our certified {stateFull} technicians use GPR and electromagnetic detection methods to provide comprehensive property scans with same-day or next-day reporting.",
  5: "Removing a buried oil tank in {city} costs $3,000 to $10,000+ depending on size, location, and whether soil contamination is present. Tank removal includes excavation, proper disposal, soil sampling, and DEP-compliant closure paperwork. Our {stateFull} specialists handle the full scope — including the NFA letter your escrow officer requires.",
};

const ASBESTOS_ANSWERS: Record<number, string> = {
  0: "Asbestos popcorn ceiling removal in {city} typically costs $3 to $7 per square foot, or $1,500 to $7,000 for an average home. The cost depends on ceiling area, accessibility, and disposal requirements. Our certified {stateFull} abatement contractors provide the clearance documentation and air monitoring results required for escrow clearance.",
  1: "Asbestos pipe wrap removal in {city} ranges from $1,500 to $6,000 depending on linear footage and accessibility. Pipe insulation in basements is one of the most common asbestos findings during home inspections. Our {stateFull} licensed abatement professionals handle removal with proper containment, HEPA filtration, and clearance air testing.",
  2: "Emergency asbestos testing in {city} costs between $200 and $800 depending on the number of samples and turnaround time. Rush testing (24-48 hour results) is available for time-sensitive real estate transactions. Our {stateFull} certified inspectors collect samples using EPA-approved methods and provide official laboratory reports.",
  3: "Asbestos abatement for a home sale in {city} ranges from $1,500 to $15,000+ depending on the type and extent of asbestos-containing materials. Common materials include pipe wrap, floor tiles, popcorn ceilings, and siding. Our {stateFull} licensed contractors provide the official clearance documentation your buyer's lender requires.",
  4: "9x9 asbestos floor tile removal in {city} costs between $5 and $15 per square foot, or $2,000 to $8,000 for a typical basement. The tiles must be removed by a licensed asbestos abatement contractor following EPA NESHAP regulations. Our {stateFull} specialists handle removal, disposal, and clearance documentation for real estate transactions.",
  5: "Encapsulating asbestos pipe wrap in {city} costs $500 to $3,000, making it a cost-effective alternative to full removal. Encapsulation involves coating the asbestos material with a sealant to prevent fiber release. Our certified {stateFull} specialists determine whether encapsulation meets your state's requirements for escrow clearance.",
};

const SEWER_ANSWERS: Record<number, string> = {
  0: "The average cost of a trenchless sewer replacement in {city} ranges from $6,000 to $25,000, depending on pipe length, depth, and condition. Trenchless methods — including pipe bursting and CIPP lining — avoid excavating your yard and can be completed in 1-2 days. Our certified {stateFull} plumbers provide the camera inspection report and clearance documentation your escrow officer requires.",
  1: "Trenchless sewer lateral replacement in {city} typically costs $8,000 to $20,000. Lateral lines run from your home to the main sewer and are the homeowner's responsibility. When a sewer scope reveals cracked, root-invaded, or collapsed laterals, our {stateFull} specialists offer expedited replacement with escrow-ready documentation.",
  2: "No-dig sewer line repair in {city} costs between $4,000 and $15,000 depending on the repair method and extent of damage. CIPP (Cured-in-Place Pipe) lining is the most common trenchless method and creates a new pipe inside the existing one. Our {stateFull} certified plumbers coordinate with your real estate agent to keep your closing on schedule.",
  3: "Cast iron sewer pipe replacement in {city} ranges from $3,000 to $15,000. Homes built before 1980 often have deteriorating cast iron pipes that fail sewer scope inspections. Our {stateFull} licensed plumbers can replace cast iron with PVC using trenchless methods and provide the clearance documentation your title company needs.",
  4: "Trenchless pipe relining in {city} costs between $80 and $250 per linear foot, or $4,000 to $20,000 for a typical residential lateral. Relining involves inserting an epoxy-coated liner into the existing pipe, creating a smooth, jointless new pipe. Our certified {stateFull} specialists complete most relining jobs in a single day with post-repair camera inspection included.",
  5: "Replacing cast iron drain pipe with PVC in {city} typically costs $3,000 to $12,000 depending on length, depth, and whether the pipe runs under a concrete slab. Cast iron to PVC conversion eliminates future corrosion and root intrusion issues. Our {stateFull} specialists provide video documentation and clearance reports for your escrow file.",
};

const ALL_ANSWERS: Record<SiloKey, Record<number, string>> = {
  "radon-clearance": RADON_ANSWERS,
  "oil-tank-removal": OIL_TANK_ANSWERS,
  "asbestos-lead-abatement": ASBESTOS_ANSWERS,
  "sewer-scope-repair": SEWER_ANSWERS,
};

/* ═══════════════════════════════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════════════════════════════ */

export default function LocalFAQ({
  city,
  stateFull,
  siloKey,
}: LocalFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const config = SILO_CONFIGS[siloKey];
  const seed = hashSeed(`${city}-faq-${siloKey}`);
  const cityDisplay = city.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  // Pick 4 cost FAQ questions (seeded) from the silo's cost FAQ array
  const selectedIndices = pickN(
    Array.from({ length: config.costFaqs.length }, (_, i) => i),
    seed,
    4,
    0
  );

  const faqs = selectedIndices.map((idx) => {
    const question = config.costFaqs[idx]
      .replace(/{city}/g, cityDisplay);
    const answer = (ALL_ANSWERS[siloKey][idx] || ALL_ANSWERS[siloKey][0])
      .replace(/{city}/g, cityDisplay)
      .replace(/{stateFull}/g, stateFull);
    return { question, answer };
  });

  // JSON-LD FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Schema (invisible to user, visible to Google) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Visible FAQ Accordion */}
      <section
        className="py-12 sm:py-16 px-4"
        id="local-faq"
        style={{ background: "#F8F6F1", borderTop: "1px solid #E2DDD4" }}
        aria-label={`${config.displayName} cost FAQ for ${cityDisplay}`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 style={{ color: "#1C2A3A" }}>
              {config.displayName} Costs in{" "}
              <span style={{ color: "#5B8A8A" }}>{cityDisplay}</span>
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "#6B7D8E" }}>
              Pricing information for {config.displayName.toLowerCase()} services in {cityDisplay}, {stateFull}.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ border: "1px solid #E2DDD4", boxShadow: "0 2px 12px rgba(28,42,58,0.04)" }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
                  style={{ color: "#1C2A3A" }}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading text-sm sm:text-base">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" style={{ color: "#6B7D8E" }} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 pb-5 text-sm leading-relaxed pt-4"
                        style={{ color: "#2B3E52", borderTop: "1px solid #E2DDD4" }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

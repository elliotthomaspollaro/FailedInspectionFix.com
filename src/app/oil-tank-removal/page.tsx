import type { Metadata } from "next";
import SiloHubPage from "@/components/Pages/SiloHubPage";

export const metadata: Metadata = {
  title: "Oil Tank Removal — Certified Underground Tank Decommissioning for Closings",
  description: "Buried oil tank found during inspection? Get immediate quotes from certified tank removal and decommissioning specialists. DEP-compliant clearance documentation for escrow.",
  alternates: { canonical: "https://failedinspectionfix.com/oil-tank-removal" },
};

export default function OilTankRemovalHub() {
  return (
    <SiloHubPage
      siloKey="oil-tank-removal"
      tagline="Before Escrow Falls Through."
      heroDescription="A buried heating oil tank can kill a real estate deal overnight. Our certified tank removal contractors handle everything — GPR scanning, excavation, soil testing, DEP closure paperwork, and the NFA letter your title company requires."
      problemTitle="What Happens When an Oil Tank Is Found During Inspection?"
      problemDescription="Underground storage tanks (USTs) are one of the most expensive and time-sensitive issues found during home inspections, especially in the Northeast where heating oil was standard for decades. If a GPR sweep detects a buried tank, most buyers will not close until the tank is removed, soil is tested, and a DEP closure certification is issued. Contaminated soil can add $5,000 to $50,000+ to the cost. FailedInspectionFix.com connects you with licensed, DEP-certified tank contractors who can expedite the process."
      priceRange="$2,500 – $10,000+"
      services={[
        { name: "GPR Tank Sweep", description: "Ground Penetrating Radar scanning to detect buried metal objects on the property. Non-invasive, same-day results." },
        { name: "Tank Excavation & Removal", description: "Full excavation, removal, and proper disposal of underground storage tanks in compliance with state DEP regulations." },
        { name: "In-Place Decommissioning", description: "For tanks that cannot be excavated, certified in-place abandonment including draining, cleaning, and filling with approved material." },
        { name: "Soil Sampling & Testing", description: "Post-removal soil sampling to test for petroleum contamination. Laboratory analysis with DEP-compliant reporting." },
        { name: "Soil Remediation", description: "If contamination is found, certified remediation of impacted soil to meet state cleanup standards." },
        { name: "DEP Closure & NFA Letter", description: "Complete DEP closure paperwork and No Further Action (NFA) letter — the document your escrow officer needs to proceed." },
      ]}
    />
  );
}

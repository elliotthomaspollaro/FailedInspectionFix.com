import type { Metadata } from "next";
import SiloHubPage from "@/components/Pages/SiloHubPage";

export const metadata: Metadata = {
  title: "Asbestos & Lead Abatement — Certified Removal for Real Estate Closings",
  description: "Asbestos or lead paint found during inspection? Get immediate quotes from certified abatement specialists. EPA-compliant clearance documentation for escrow.",
  alternates: { canonical: "https://failedinspectionfix.com/asbestos-lead-abatement" },
};

export default function AsbestosLeadHub() {
  return (
    <SiloHubPage
      siloKey="asbestos-lead-abatement"
      tagline="Safe Removal. Clear to Close."
      heroDescription="Asbestos in popcorn ceilings, pipe wrap, floor tiles, or siding can stop a real estate transaction cold. Our licensed abatement contractors handle removal, encapsulation, air monitoring, and provide the clearance documentation your buyer's lender demands."
      problemTitle="What Happens When Asbestos or Lead Is Found During Inspection?"
      problemDescription="Homes built before 1980 commonly contain asbestos-containing materials (ACMs) in popcorn ceilings, pipe insulation, floor tiles, and siding. Lead paint is found in homes built before 1978. When a home inspector flags these materials, the buyer's lender may require professional abatement before approving the mortgage. FHA and VA loans have strict requirements around hazardous materials. FailedInspectionFix.com connects you with state-licensed abatement contractors who follow EPA NESHAP regulations and provide clearance air testing results."
      priceRange="$1,500 – $15,000+"
      services={[
        { name: "Popcorn Ceiling Removal", description: "Safe removal of asbestos-containing popcorn/textured ceiling coatings with full containment, HEPA filtration, and clearance air testing." },
        { name: "Pipe Wrap Removal", description: "Professional removal of asbestos pipe insulation in basements and mechanical rooms, following EPA protocols." },
        { name: "Asbestos Encapsulation", description: "For materials that don't need removal, certified encapsulation seals ACMs in place to prevent fiber release." },
        { name: "Floor Tile Abatement", description: "Safe removal or encapsulation of 9x9 asbestos vinyl floor tiles and mastic, with proper disposal." },
        { name: "Lead Paint Testing & Remediation", description: "EPA-certified lead inspections, risk assessments, and remediation to satisfy FHA/VA lending requirements." },
        { name: "Clearance Air Testing", description: "Post-abatement air monitoring with laboratory analysis confirming fiber levels are below EPA clearance limits. Accepted by all lenders." },
      ]}
    />
  );
}

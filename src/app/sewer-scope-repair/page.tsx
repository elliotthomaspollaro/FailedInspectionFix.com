import type { Metadata } from "next";
import SiloHubPage from "@/components/Pages/SiloHubPage";

export const metadata: Metadata = {
  title: "Sewer Scope Repair — Trenchless Sewer Solutions for Real Estate Closings",
  description: "Failed sewer scope blocking your closing? Get immediate quotes for trenchless sewer line replacement, pipe relining, and cast iron pipe repair. Escrow-ready documentation.",
  alternates: { canonical: "https://failedinspectionfix.com/sewer-scope-repair" },
};

export default function SewerScopeHub() {
  return (
    <SiloHubPage
      siloKey="sewer-scope-repair"
      tagline="Fix the Line. Save the Deal."
      heroDescription="A failed sewer scope revealing cracked, root-invaded, or collapsed pipes is one of the most expensive inspection findings. Our certified plumbers offer trenchless solutions — pipe bursting, CIPP lining, and no-dig replacement — with camera verification and clearance reports for your escrow file."
      problemTitle="What Happens When a Sewer Scope Reveals Damage?"
      problemDescription="Sewer camera inspections are increasingly standard in real estate transactions, especially for homes with cast iron, Orangeburg, or clay pipes. When a sewer scope reveals cracks, root intrusion, bellies, offsets, or complete collapse, most buyers will not close without repair. Traditional excavation is expensive and destructive, but trenchless methods can often complete repairs in 1-2 days without digging up yards, driveways, or landscaping. FailedInspectionFix.com connects you with certified plumbers who specialize in escrow-deadline-driven sewer repairs."
      priceRange="$4,000 – $25,000"
      services={[
        { name: "Trenchless Sewer Replacement", description: "Pipe bursting replaces the old line with new HDPE pipe by pulling it through the existing path — no trenching required." },
        { name: "CIPP Pipe Relining", description: "Cured-in-Place Pipe lining creates a seamless, jointless new pipe inside the existing one. Typically completed in a single day." },
        { name: "Trenchless Lateral Replacement", description: "The lateral line from your home to the main is the homeowner's responsibility. We replace it without excavation." },
        { name: "Cast Iron to PVC Conversion", description: "Replace deteriorating pre-1980 cast iron drain pipes with modern PVC, eliminating future corrosion and root intrusion." },
        { name: "Sewer Camera Inspection", description: "Pre- and post-repair HD camera inspection with footage provided for your escrow file and real estate agent." },
        { name: "Clearance Documentation", description: "Post-repair camera verification report confirming the sewer line passes inspection — accepted by title companies and lenders." },
      ]}
    />
  );
}

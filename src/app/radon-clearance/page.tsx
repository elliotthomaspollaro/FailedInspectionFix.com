import type { Metadata } from "next";
import SiloHubPage from "@/components/Pages/SiloHubPage";

export const metadata: Metadata = {
  title: "Radon Clearance — Certified Radon Mitigation for Real Estate Closings",
  description: "Failed radon test blocking your closing? Get immediate quotes from certified radon mitigation specialists. Escrow-ready clearance documentation. Same-day service available.",
  alternates: { canonical: "https://failedinspectionfix.com/radon-clearance" },
};

export default function RadonClearanceHub() {
  return (
    <SiloHubPage
      siloKey="radon-clearance"
      tagline="Before Your Closing Date."
      heroDescription="A radon test above 4.0 pCi/L can derail your entire real estate transaction. Our certified radon mitigation specialists install EPA-recommended systems and provide escrow-ready clearance documentation — often within 48 hours."
      problemTitle="What Happens When Your Home Fails a Radon Test?"
      problemDescription="Elevated radon levels are the #1 environmental issue found during home inspections in the Northeast. When a radon test comes back above the EPA action level of 4.0 pCi/L, most buyers demand mitigation before closing. Without a certified mitigation system and a passing re-test, your escrow cannot proceed. FailedInspectionFix.com connects you with licensed radon professionals who can install, test, and certify — all under your closing deadline."
      priceRange="$800 – $2,500"
      services={[
        { name: "Sub-Slab Depressurization", description: "The EPA's recommended approach. A sealed suction point and fan system draws radon from beneath the foundation before it enters the home." },
        { name: "Radon Fan Installation", description: "Professional installation of inline radon fans with proper PVC routing — interior or exterior — matched to your foundation type." },
        { name: "Active Soil Depressurization (ASD)", description: "The gold standard for radon reduction. Creates negative pressure beneath the slab to prevent soil gas entry." },
        { name: "Radon Sump Pump Systems", description: "For homes with existing sump pits, we can integrate radon mitigation directly into the drainage system." },
        { name: "Post-Mitigation Re-Testing", description: "48-hour charcoal or continuous radon monitor re-testing with certified lab results for your escrow file." },
        { name: "Clearance Certification", description: "Official radon clearance documentation accepted by title companies, lenders, and escrow officers nationwide." },
      ]}
    />
  );
}

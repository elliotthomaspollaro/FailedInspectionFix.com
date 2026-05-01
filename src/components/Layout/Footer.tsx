import Link from "next/link";
import { ShieldCheck, Lock, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto" style={{ background: "#1C2A3A" }}>
      {/* Trust bar */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[13px] sm:text-sm font-semibold text-white/70">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" style={{ color: "#5B8A8A" }} />
            Certified &amp; Licensed Specialists
          </span>
          <span className="flex items-center gap-2">
            <Lock className="w-5 h-5" style={{ color: "#5B8A8A" }} />
            Secure &amp; Encrypted
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-5 h-5" style={{ color: "#E8621A" }} />
            Escrow-Ready Clearance
          </span>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: About */}
          <div className="text-center md:text-left">
            <p className="text-white/45 text-sm font-medium leading-relaxed">
              We connect home sellers and realtors with certified environmental and plumbing mitigation specialists to resolve failed home inspections before closing.
            </p>
          </div>

          {/* Column 2: Services (Silo Hubs) */}
          <div className="text-center md:text-left">
            <h4 className="text-white/80 text-sm font-bold mb-3 tracking-wide uppercase">Services</h4>
            <nav className="flex flex-col gap-2 text-sm font-medium text-white/50">
              <Link href="/radon-clearance" className="hover:text-white transition-colors">Radon Clearance</Link>
              <Link href="/oil-tank-removal" className="hover:text-white transition-colors">Oil Tank Removal</Link>
              <Link href="/asbestos-lead-abatement" className="hover:text-white transition-colors">Asbestos &amp; Lead Abatement</Link>
              <Link href="/sewer-scope-repair" className="hover:text-white transition-colors">Sewer Scope Repair</Link>
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div className="text-center md:text-left">
            <h4 className="text-white/80 text-sm font-bold mb-3 tracking-wide uppercase">Legal</h4>
            <nav className="flex flex-col gap-2 text-sm font-medium text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/30 font-medium space-y-2">
          <p>&copy; {currentYear} FailedInspectionFix.com. All rights reserved.</p>
          <p className="max-w-3xl mx-auto">
            FailedInspectionFix.com is an independent matching service. We do not employ contractors directly. All mitigation work, certifications, and warranties are handled by our verified local specialists.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import MultiStepLeadForm from "@/components/Form/MultiStepLeadForm";

interface HeroSectionProps {
  city?: string;
  state?: string;
  headline?: React.ReactNode;
}

export default function HeroSection({
  city,
  state,
  headline,
}: HeroSectionProps) {
  const defaultHeadline = (
    <>
      Failed Inspection Blocking Your Closing?
      <br />
      <span style={{ color: "#E8621A" }}>Get Clearance Fast.</span>
    </>
  );

  return (
    <>
      <section
        className="relative overflow-hidden"
        id="hero"
        style={{ background: "#F8F6F1" }}
      >
        {/* Soft decorative glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 15% 85%, rgba(91,138,138,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 85% 15%, rgba(232,98,26,0.05) 0%, transparent 70%)`,
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 sm:pt-14 lg:pt-20 pb-14 sm:pb-20 lg:pb-28">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            {/* ─── Left column ─── */}
            <div className="flex-1 space-y-6 lg:pt-4">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="badge-urgent">
                  <AlertTriangle className="w-3 h-3" />
                  Escrow At Risk
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.08]"
                style={{ color: "#1C2A3A", maxWidth: "14em" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {headline || defaultHeadline}
              </motion.h1>

              {/* Subhead */}
              <motion.p
                className="text-base sm:text-lg"
                style={{ color: "#6B7D8E", maxWidth: "28rem" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="font-bold" style={{ color: "#1C2A3A" }}>Certified. Licensed. Escrow-Ready.</span>
                <br />
                Connect with mitigation specialists in 60 seconds.
              </motion.p>

              {/* Trust chips */}
              <motion.div
                className="flex flex-wrap gap-x-5 gap-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {["Radon Mitigation", "Oil Tank Removal", "Asbestos Abatement", "Sewer Repair"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#6B7D8E" }}>
                    <span style={{ color: "#5B8A8A" }}>✓</span>
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ─── Right: Form ─── */}
            <motion.div
              className="w-full max-w-sm shrink-0 relative z-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              id="lead-form"
            >
              <MultiStepLeadForm city={city} state={state} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <div className="py-4 px-4" style={{ background: "#1C2A3A" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0" style={{ background: "rgba(91,138,138,0.15)" }}>
            <ShieldCheck className="w-5 h-5" style={{ color: "#5B8A8A" }} />
          </div>
          <div className="flex flex-col sm:items-start">
            <span className="text-white font-bold text-sm sm:text-base tracking-wide">
              Certified Specialists · Escrow-Ready Clearance · All Hazard Types
            </span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Serving home sellers, buyers, and realtors nationwide.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

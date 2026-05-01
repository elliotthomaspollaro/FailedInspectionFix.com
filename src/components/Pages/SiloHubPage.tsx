/* ═══════════════════════════════════════════════════════════════════
 * SiloHubPage.tsx — Shared Hub/Landing Page for Each Silo
 * ═══════════════════════════════════════════════════════════════════
 * Top-level silo authority pages: /radon-clearance, /oil-tank-removal, etc.
 * Each hub links down to its city pages for internal link equity.
 * ═══════════════════════════════════════════════════════════════════ */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Clock, FileCheck, AlertTriangle } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import MultiStepLeadForm from "@/components/Form/MultiStepLeadForm";
import StickyCTA from "@/components/UI/StickyCTA";
import { SILO_CONFIGS, slugify, type SiloKey } from "@/lib/seo-data";
import { SEO_CITIES } from "@/lib/seo-cities";
import { formatCityName, getStateName } from "@/lib/seo-utils";

interface SiloHubPageProps {
  siloKey: SiloKey;
  tagline: string;
  heroDescription: string;
  problemTitle: string;
  problemDescription: string;
  services: { name: string; description: string }[];
  priceRange: string;
}

export default function SiloHubPage({
  siloKey,
  tagline,
  heroDescription,
  problemTitle,
  problemDescription,
  services,
  priceRange,
}: SiloHubPageProps) {
  const config = SILO_CONFIGS[siloKey];

  // Get top 3 services for slug generation (for city links)
  const topServiceSlug = slugify(config.services[0]);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden" style={{ background: "#F8F6F1" }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 15% 85%, rgba(91,138,138,0.06) 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 85% 15%, rgba(232,98,26,0.05) 0%, transparent 70%)`,
          }} />
          <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 sm:pt-16 pb-14 sm:pb-20">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
              <div className="flex-1 space-y-6 lg:pt-4">
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                  <span className="badge-urgent">
                    <AlertTriangle className="w-3 h-3" />
                    Escrow At Risk
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08]"
                  style={{ color: "#1C2A3A", maxWidth: "14em" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {config.displayName}
                  <br />
                  <span style={{ color: "#E8621A" }}>{tagline}</span>
                </motion.h1>

                <motion.p
                  className="text-base sm:text-lg max-w-lg"
                  style={{ color: "#6B7D8E" }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {heroDescription}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {[
                    { icon: ShieldCheck, text: "Certified & Licensed" },
                    { icon: Clock, text: "Same-Day Available" },
                    { icon: FileCheck, text: "Escrow-Ready Docs" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#6B7D8E" }}>
                      <Icon className="w-4 h-4" style={{ color: "#5B8A8A" }} />
                      {text}
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="w-full max-w-sm shrink-0"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                id="lead-form"
              >
                <MultiStepLeadForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ TRUST STRIP ═══ */}
        <div className="py-4 px-4" style={{ background: "#1C2A3A" }}>
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-center">
            <ShieldCheck className="w-5 h-5 shrink-0" style={{ color: "#5B8A8A" }} />
            <span className="text-white font-bold text-sm">
              {config.displayName} · Certified Specialists · Escrow-Ready Clearance · {priceRange}
            </span>
          </div>
        </div>

        {/* ═══ PROBLEM SECTION ═══ */}
        <section className="py-16 sm:py-20 px-4" style={{ background: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 style={{ color: "#1C2A3A" }}>{problemTitle}</h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#6B7D8E" }}>
                {problemDescription}
              </p>
            </div>
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section className="py-16 sm:py-20 px-4" style={{ background: "#F8F6F1" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12" style={{ color: "#1C2A3A" }}>
              Our <span style={{ color: "#5B8A8A" }}>{config.displayName}</span> Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.name}
                  className="bg-white rounded-2xl p-6"
                  style={{ border: "1px solid #E2DDD4" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(91,138,138,0.12)" }}>
                    <FileCheck className="w-5 h-5" style={{ color: "#5B8A8A" }} />
                  </div>
                  <h3 className="text-base mb-2" style={{ color: "#1C2A3A" }}>{service.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7D8E" }}>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CITY DIRECTORY ═══ */}
        <section className="py-16 sm:py-20 px-4" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-4" style={{ color: "#1C2A3A" }}>
              {config.displayName} by <span style={{ color: "#E8621A" }}>Location</span>
            </h2>
            <p className="text-center text-base mb-12 max-w-xl mx-auto" style={{ color: "#6B7D8E" }}>
              Find certified {config.displayName.toLowerCase()} specialists in your area.
            </p>

            {Object.entries(SEO_CITIES).map(([stateCode, cities]) => (
              <div key={stateCode} className="mb-10">
                <h3 className="text-lg mb-4 pb-2" style={{ color: "#1C2A3A", borderBottom: "2px solid #E2DDD4" }}>
                  {getStateName(stateCode)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cities.slice(0, 15).map((city) => (
                    <Link
                      key={city}
                      href={`/${siloKey}/${stateCode}/${city}/${topServiceSlug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border hover:shadow-md hover:-translate-y-0.5 transition-all text-sm font-medium"
                      style={{ borderColor: "#E2DDD4", color: "#3D566E" }}
                    >
                      <MapPin className="w-3.5 h-3.5" style={{ color: "#5B8A8A" }} />
                      {formatCityName(city)}
                    </Link>
                  ))}
                  {cities.length > 15 && (
                    <span className="inline-flex items-center px-3 py-2 text-sm font-medium" style={{ color: "#6B7D8E" }}>
                      +{cities.length - 15} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ BOTTOM CTA ═══ */}
        <section className="py-16 sm:py-20 px-4" style={{ background: "#F0E6D0" }}>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-balance" style={{ color: "#1C2A3A" }}>
              Don&apos;t Let {config.displayName === "Sewer Scope Repair" ? "a Failed Sewer Scope" : config.displayName} Block Your{" "}
              <span style={{ color: "#E8621A" }}>Closing.</span>
            </h2>
            <p className="text-lg" style={{ color: "#6B7D8E" }}>
              Get matched with a certified specialist in 60 seconds. Free quotes, no obligation.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-primary text-lg group"
            >
              Get Clearance Quotes Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

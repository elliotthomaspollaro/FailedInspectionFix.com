"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Timer, FileCheck, Award } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Certified & Licensed",
    description: "Every specialist in our network holds state-required certifications for radon, asbestos, lead, and plumbing work.",
  },
  {
    icon: Timer,
    title: "Same-Day Clearance Available",
    description: "Emergency response when your closing date is at risk. Most specialists can begin mitigation within 24–48 hours.",
  },
  {
    icon: FileCheck,
    title: "Escrow-Ready Documentation",
    description: "Receive official clearance certificates and remediation reports accepted by title companies, lenders, and escrow officers.",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "If your clearance documentation is rejected by the title company, we'll work with the specialist until it's accepted — at no extra cost.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 px-4" id="why-choose-us" style={{ background: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-balance" style={{ color: "#1C2A3A" }}>
            Why Choose{" "}
            <span style={{ color: "#5B8A8A" }}>Us?</span>
          </h2>
          <p className="mt-3 text-lg max-w-xl mx-auto" style={{ color: "#6B7D8E" }}>
            We make escrow clearance simple, fast, and stress-free.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              className="flex items-start gap-4 p-6 rounded-2xl transition-all duration-300"
              style={{ background: "#F8F6F1", border: "1px solid #E2DDD4" }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
            >
              <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center" style={{ background: "rgba(91,138,138,0.12)" }}>
                <benefit.icon className="w-6 h-6" style={{ color: "#5B8A8A" }} />
              </div>
              <div>
                <h3 className="text-lg mb-1" style={{ color: "#1C2A3A" }}>
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7D8E" }}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

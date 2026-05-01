"use client";

import { motion } from "framer-motion";
import { FileText, UserSearch, FileCheck } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Describe the Issue",
    desc: "Tell us what failed on the inspection — radon, oil tank, asbestos, or sewer. Takes 60 seconds.",
    icon: FileText,
    accent: "#5B8A8A",
  },
  {
    number: 2,
    title: "Get Matched Instantly",
    desc: "We connect you with a certified, licensed mitigation specialist in your area.",
    icon: UserSearch,
    accent: "#E8621A",
  },
  {
    number: 3,
    title: "Receive Clearance",
    desc: "Your specialist provides an escrow-ready clearance document so your closing can proceed.",
    icon: FileCheck,
    accent: "#1C2A3A",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 px-4" id="how-it-works" style={{ background: "#F8F6F1" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4" style={{ color: "#1C2A3A" }}>
            How It Works
          </h2>
          <p className="font-semibold text-lg sm:text-xl" style={{ color: "#5B8A8A" }}>
            Get escrow clearance in 3 simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative bg-white rounded-2xl p-8 text-center flex flex-col items-center"
              style={{ border: "1px solid #E2DDD4", boxShadow: "0 2px 16px rgba(28,42,58,0.05)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              {/* Step number */}
              <div
                className="w-12 h-12 rounded-full text-white text-lg font-bold flex items-center justify-center mb-5"
                style={{ backgroundColor: step.accent }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4" style={{ background: "#F0E6D0" }}>
                <step.icon className="w-8 h-8" style={{ color: step.accent }} />
              </div>

              <h3 className="text-xl mb-3 leading-tight" style={{ color: "#1C2A3A" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7D8E" }}>
                {step.desc}
              </p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center" style={{ border: "1px solid #E2DDD4" }}>
                    <span className="text-lg font-bold" style={{ color: "#E8621A" }}>→</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

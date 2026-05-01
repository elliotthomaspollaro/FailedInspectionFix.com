"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileCheck, Phone } from "lucide-react";

interface StepSuccessProps {
  city?: string;
}

export default function StepSuccess({ city }: StepSuccessProps) {
  const locationText = city || "your area";

  return (
    <div className="space-y-6 text-center py-2">
      {/* Success checkmark */}
      <motion.div
        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
        style={{ background: "rgba(5,150,105,0.1)" }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <CheckCircle className="w-12 h-12" style={{ color: "#059669" }} />
      </motion.div>

      {/* Success headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-2"
      >
        <h3 className="text-2xl font-heading" style={{ color: "#059669" }}>
          Success!
        </h3>
        <p className="text-base leading-relaxed max-w-sm mx-auto" style={{ color: "#2B3E52" }}>
          A certified local mitigation specialist in{" "}
          <span className="font-bold" style={{ color: "#5B8A8A" }}>{locationText}</span>{" "}
          is reviewing your file and will contact you shortly to provide clearance.
        </p>
      </motion.div>

      {/* What to expect */}
      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 text-sm" style={{ color: "#2B3E52" }}>
          <Phone className="w-4 h-4" style={{ color: "#5B8A8A" }} />
          Expect a call within 15 minutes
        </div>
        <div className="flex items-center justify-center gap-2 text-sm" style={{ color: "#2B3E52" }}>
          <FileCheck className="w-4 h-4" style={{ color: "#5B8A8A" }} />
          Escrow-ready clearance documentation provided
        </div>
      </motion.div>

      {/* Fine print */}
      <motion.p
        className="text-xs max-w-sm mx-auto"
        style={{ color: "#6B7D8E" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        A certified specialist will assess your situation and provide an escrow-ready
        clearance estimate. No obligation — if you&apos;re not satisfied with the quote, there&apos;s no charge.
      </motion.p>
    </div>
  );
}

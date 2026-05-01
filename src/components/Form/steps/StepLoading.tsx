"use client";

import { motion } from "framer-motion";
import { FileSearch, Radio } from "lucide-react";

interface StepLoadingProps {
  city?: string;
}

export default function StepLoading({ city }: StepLoadingProps) {
  const locationText = city || "your area";

  return (
    <div className="space-y-6 text-center py-4">
      {/* Scanning icon */}
      <motion.div
        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
        style={{ background: "rgba(91,138,138,0.1)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <FileSearch className="w-10 h-10" style={{ color: "#5B8A8A" }} />
      </motion.div>

      {/* Pulsing text */}
      <div className="space-y-3">
        <motion.h3
          className="text-xl font-heading"
          style={{ color: "#1C2A3A" }}
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Reviewing Your File...
        </motion.h3>

        <motion.p
          style={{ color: "#6B7D8E" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Connecting you with certified mitigation specialists in{" "}
          <span className="font-semibold" style={{ color: "#5B8A8A" }}>{locationText}</span>...
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2 text-sm"
          style={{ color: "#6B7D8E", opacity: 0.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Radio className="w-4 h-4 animate-pulse" style={{ color: "#E8621A" }} />
          <span>Checking escrow clearance availability...</span>
        </motion.div>
      </div>

      {/* Animated dots */}
      <div className="flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ background: "#5B8A8A" }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

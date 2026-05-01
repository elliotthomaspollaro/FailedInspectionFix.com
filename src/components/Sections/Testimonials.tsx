"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "Our radon test came back at 8.2 pCi/L two weeks before closing. FailedInspectionFix had a certified mitigator out the next day. System installed and re-tested in time. Closing went through.", name: "Sarah M.", location: "Cherry Hill, NJ", rating: 5 },
  { quote: "Found a buried oil tank during the inspection. The buyer was about to walk. FailedInspectionFix connected us with a decommissioning crew that had the clearance letter to the title company in 5 days.", name: "David K.", location: "Stamford, CT", rating: 5 },
  { quote: "As a realtor, I've used FailedInspectionFix on three deals now. Failed sewer scope, asbestos siding, and a radon issue. Every single time, my closing stayed on track. This is my go-to resource.", name: "Jennifer R.", location: "King of Prussia, PA", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 px-4" id="testimonials" style={{ background: "#F8F6F1" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="mb-3" style={{ color: "#1C2A3A" }}>What Sellers & Realtors Say</h2>
          <p className="text-lg" style={{ color: "#6B7D8E" }}>Real stories from real closings we saved.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative bg-white rounded-2xl p-6 sm:p-8"
              style={{ border: "1px solid #E2DDD4" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              {/* Quote watermark */}
              <div className="absolute top-4 right-5 text-7xl font-heading leading-none select-none pointer-events-none" style={{ color: "rgba(91,138,138,0.08)" }}>&ldquo;</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4" style={{ fill: "#F5B731", color: "#F5B731" }} />
                ))}
              </div>

              <p className="leading-relaxed mb-6 relative z-10" style={{ color: "#2B3E52" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: "rgba(91,138,138,0.12)", color: "#5B8A8A" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#1C2A3A" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#6B7D8E" }}>{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

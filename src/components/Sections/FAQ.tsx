"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What happens when a home inspection fails?", answer: "A failed inspection means one or more hazards — such as elevated radon, a buried oil tank, asbestos, or a damaged sewer line — were detected. This typically triggers a contingency in the purchase agreement, meaning the issue must be resolved before the sale can close. FailedInspectionFix.com connects you with certified specialists who can resolve the issue and provide escrow-ready clearance documentation." },
  { question: "How quickly can you get a specialist to my property?", answer: "In most cases, same-day or next-day service is available. After you submit your request, a certified specialist in your area will call you within 15 minutes to schedule an assessment — often arriving within 24 hours. For urgent 0-7 day closing deadlines, we prioritize immediate dispatch." },
  { question: "Will the clearance documentation be accepted by the title company?", answer: "Yes. Our specialists provide official remediation certificates, clearance letters, and lab reports that are accepted by title companies, lenders, and escrow officers nationwide. Each document meets state and EPA requirements for the specific hazard type." },
  { question: "How much does mitigation typically cost?", answer: "Costs vary by hazard: radon mitigation systems typically run $800–$2,500, oil tank decommissioning ranges from $2,500–$10,000+, asbestos abatement varies by material and area ($1,500–$15,000), and sewer scope repairs range from $3,000–$25,000. Free estimates are provided before any work begins." },
  { question: "Can the seller or buyer pay for the mitigation?", answer: "This is negotiable between parties. In many transactions, the seller covers the cost as a condition of the sale. Some buyers choose to handle it themselves with a credit from the seller. Our specialists can provide detailed estimates that both parties' attorneys can review." },
  { question: "What if my closing is in less than 7 days?", answer: "We understand the urgency. Our network includes specialists who offer expedited service for time-critical closings. While some hazard types (like radon) can be resolved in 1-2 days, others (like oil tank removal) may require extensions. We'll give you a realistic timeline upfront so you can coordinate with your escrow officer." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-16 sm:py-20 px-4" id="faq" style={{ background: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ color: "#1C2A3A" }}>
            Frequently Asked{" "}
            <span style={{ color: "#5B8A8A" }}>Questions</span>
          </h2>
          <p className="mt-3 text-lg max-w-xl mx-auto" style={{ color: "#6B7D8E" }}>
            Got questions about failed inspections? We&apos;ve got answers.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden"
              style={{ border: "1px solid #E2DDD4", boxShadow: "0 2px 12px rgba(28,42,58,0.04)" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
                style={{ color: "#1C2A3A" }}
                aria-expanded={openIndex === index}
              >
                <span className="font-heading">{faq.question}</span>
                <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
                  <ChevronDown className="w-5 h-5" style={{ color: "#6B7D8E" }} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-5 text-sm leading-relaxed pt-4"
                      style={{ color: "#2B3E52", borderTop: "1px solid #E2DDD4" }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

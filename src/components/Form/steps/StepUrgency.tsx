"use client";

import { useFormContext } from "react-hook-form";
import { ChevronLeft, AlertTriangle, Clock, CalendarDays, HelpCircle } from "lucide-react";
import type { LeadFormData } from "@/lib/validators";
import { CLOSING_TIMELINES } from "@/lib/validators";

interface StepUrgencyProps {
  onNext: () => void;
  onBack: () => void;
}

const urgencyIcons = [AlertTriangle, Clock, CalendarDays, HelpCircle];
const urgencyColors = ["#EF4444", "#E8621A", "#5B8A8A", "#6B7D8E"];

export default function StepUrgency({ onNext, onBack }: StepUrgencyProps) {
  const { setValue, watch } = useFormContext<LeadFormData>();
  const selected = watch("closingTimeline");

  const handleSelect = (timeline: string) => {
    setValue("closingTimeline", timeline);
    setTimeout(onNext, 200);
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-1 text-sm transition-colors"
        style={{ color: "#6B7D8E" }}
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      <h3 className="text-xl font-heading text-center" style={{ color: "#1C2A3A" }}>
        When Is the Scheduled Closing Date?
      </h3>

      <div className="grid grid-cols-1 gap-2.5">
        {CLOSING_TIMELINES.map((timeline, i) => {
          const Icon = urgencyIcons[i];
          const isSelected = selected === timeline;
          const isUrgent = i === 0;
          return (
            <button
              key={timeline}
              type="button"
              onClick={() => handleSelect(timeline)}
              className="flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all duration-200"
              style={{
                borderColor: isSelected ? "#5B8A8A" : isUrgent ? "rgba(239,68,68,0.3)" : "#E2DDD4",
                background: isSelected ? "rgba(91,138,138,0.06)" : isUrgent ? "rgba(239,68,68,0.03)" : "#FFFFFF",
              }}
              id={`urgency-${i}`}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: isSelected ? "#5B8A8A" : `${urgencyColors[i]}15`,
                  color: isSelected ? "#FFFFFF" : urgencyColors[i],
                }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-sm block" style={{ color: isSelected ? "#5B8A8A" : "#1C2A3A" }}>
                  {timeline}
                </span>
                {isUrgent && (
                  <span className="badge-urgent text-[10px] mt-0.5">URGENT</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

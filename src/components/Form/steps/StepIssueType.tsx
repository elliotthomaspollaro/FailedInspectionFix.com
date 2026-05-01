"use client";

import { useFormContext } from "react-hook-form";
import { ChevronLeft, AlertTriangle, Droplets, Wind, FlaskConical, PipetteIcon } from "lucide-react";
import type { LeadFormData } from "@/lib/validators";
import { ISSUE_TYPES } from "@/lib/validators";

interface StepIssueTypeProps {
  onNext: () => void;
  onBack?: () => void;
}

const issueIcons = [Droplets, FlaskConical, Wind, PipetteIcon, AlertTriangle];
const issueDescriptions = [
  "Radon test over 4.0 pCi/L",
  "Buried tank found on property",
  "Hazardous materials detected",
  "Camera revealed pipe damage",
  "Describe your issue",
];

export default function StepIssueType({ onNext }: StepIssueTypeProps) {
  const { setValue, watch } = useFormContext<LeadFormData>();
  const selected = watch("issueType");

  const handleSelect = (type: string) => {
    setValue("issueType", type);
    setTimeout(onNext, 200);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-heading text-center" style={{ color: "#1C2A3A" }}>
        What Is Holding Up the Closing?
      </h3>
      <p className="text-sm text-center" style={{ color: "#6B7D8E" }}>
        Select the issue blocking your escrow clearance.
      </p>

      <div className="grid grid-cols-1 gap-2.5">
        {ISSUE_TYPES.map((type, i) => {
          const Icon = issueIcons[i];
          const isSelected = selected === type;
          return (
            <button
              key={type}
              type="button"
              onClick={() => handleSelect(type)}
              className="flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all duration-200"
              style={{
                borderColor: isSelected ? "#5B8A8A" : "#E2DDD4",
                background: isSelected ? "rgba(91,138,138,0.06)" : "#FFFFFF",
              }}
              id={`issue-type-${i}`}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: isSelected ? "#5B8A8A" : "#F0E6D0",
                  color: isSelected ? "#FFFFFF" : "#6B7D8E",
                }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-sm block" style={{ color: isSelected ? "#5B8A8A" : "#1C2A3A" }}>
                  {type}
                </span>
                <span className="text-xs" style={{ color: "#6B7D8E" }}>
                  {issueDescriptions[i]}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useFormContext } from "react-hook-form";
import { ChevronLeft, Home, ShoppingCart, Briefcase, Building2 } from "lucide-react";
import type { LeadFormData } from "@/lib/validators";
import { TRANSACTION_ROLES } from "@/lib/validators";

interface StepRoleProps {
  onNext: () => void;
  onBack: () => void;
}

const roleIcons = [Home, ShoppingCart, Briefcase, Building2];

export default function StepRole({ onNext, onBack }: StepRoleProps) {
  const { setValue, watch } = useFormContext<LeadFormData>();
  const selected = watch("transactionRole");

  const handleSelect = (role: string) => {
    setValue("transactionRole", role);
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
        What Is Your Role in the Transaction?
      </h3>

      <div className="grid grid-cols-1 gap-2.5">
        {TRANSACTION_ROLES.map((role, i) => {
          const Icon = roleIcons[i];
          const isSelected = selected === role;
          return (
            <button
              key={role}
              type="button"
              onClick={() => handleSelect(role)}
              className="flex items-center gap-3 p-3.5 rounded-xl border-2 text-left font-semibold text-sm transition-all duration-200"
              style={{
                borderColor: isSelected ? "#5B8A8A" : "#E2DDD4",
                background: isSelected ? "rgba(91,138,138,0.06)" : "#FFFFFF",
                color: isSelected ? "#5B8A8A" : "#1C2A3A",
              }}
              id={`role-${i}`}
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
              {role}
            </button>
          );
        })}
      </div>
    </div>
  );
}

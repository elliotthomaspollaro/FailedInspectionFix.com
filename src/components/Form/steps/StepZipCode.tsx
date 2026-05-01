"use client";

import { useFormContext } from "react-hook-form";
import { ChevronLeft, MapPin } from "lucide-react";
import type { LeadFormData } from "@/lib/validators";

interface StepZipCodeProps {
  onNext: () => void;
  onBack: () => void;
}

export default function StepZipCode({ onNext, onBack }: StepZipCodeProps) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<LeadFormData>();

  const handleNext = async () => {
    const isValid = await trigger("zipCode");
    if (isValid) onNext();
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
        Where Is the Property?
      </h3>

      <p className="text-sm text-center" style={{ color: "#6B7D8E" }}>
        Enter the property ZIP code so we can find specialists near you.
      </p>

      {/* ZIP input with location pin icon */}
      <div className="relative">
        <input
          {...register("zipCode")}
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="Property ZIP Code"
          className={`input-field pr-10 text-base ${
            errors.zipCode ? "error" : ""
          }`}
          autoFocus
          aria-label="Property ZIP Code"
          id="zip-code-input"
        />
        <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: "#6B7D8E", opacity: 0.5 }} />
        {errors.zipCode && (
          <p className="text-sm mt-2" style={{ color: "#EF4444" }}>{errors.zipCode.message}</p>
        )}
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="btn-primary w-full text-base font-bold"
        id="zip-submit-btn"
      >
        Continue &nbsp;→
      </button>
    </div>
  );
}

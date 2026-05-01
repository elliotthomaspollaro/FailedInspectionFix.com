import { z } from "zod";

/* ═══════════════════════════════════════════════════════════════════
 * FailedInspectionFix.com — Zod Validation Schemas
 * ═══════════════════════════════════════════════════════════════════
 * 5-step "Real Estate Triage" form validation.
 * Each step has its own schema for per-step validation,
 * then they merge into LeadFormSchema for the API route.
 * ═══════════════════════════════════════════════════════════════════ */

/* ─── Step 1: The Router — "What is holding up the closing?" ─── */
export const ISSUE_TYPES = [
  "High Radon Levels",
  "Underground Oil Tank",
  "Asbestos / Lead Paint",
  "Failed Sewer Scope",
  "Other",
] as const;

export const IssueTypeSchema = z.object({
  issueType: z.string().min(1, "Select what is holding up the closing"),
});

/* ─── Step 2: The Persona — "What is your role?" ─── */
export const TRANSACTION_ROLES = [
  "Seller",
  "Buyer",
  "Real Estate Agent",
  "Property Manager",
] as const;

export const TransactionRoleSchema = z.object({
  transactionRole: z.string().min(1, "Select your role in the transaction"),
});

/* ─── Step 3: The Urgency — "When is the closing date?" ─── */
export const CLOSING_TIMELINES = [
  "0-7 Days",
  "8-14 Days",
  "15+ Days",
  "Unknown",
] as const;

export const ClosingTimelineSchema = z.object({
  closingTimeline: z.string().min(1, "Select a closing timeline"),
});

/* ─── Step 4: Location ─── */
export const ZipCodeSchema = z.object({
  zipCode: z
    .string()
    .min(5, "Enter a valid 5-digit ZIP")
    .max(5, "Enter a valid 5-digit ZIP")
    .regex(/^\d{5}$/, "ZIP must be 5 digits"),
});

/* ─── Step 5: Contact Info ─── */
export const ContactInfoSchema = z.object({
  firstName: z.string().min(1, "First name required").max(50),
  lastName: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(10, "Enter a valid phone")
    .max(15)
    .regex(/^[\d\s\-\(\)\+]+$/, "Invalid phone format"),
});

/* ─── Tracking (hidden fields) ─── */
export const TrackingSchema = z.object({
  sourceUrl: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  referrer: z.string().optional(),
});

/* ─── Combined Schema (used by API route) ─── */
export const LeadFormSchema = IssueTypeSchema
  .merge(TransactionRoleSchema)
  .merge(ClosingTimelineSchema)
  .merge(ZipCodeSchema)
  .merge(ContactInfoSchema)
  .merge(TrackingSchema);

/* ─── Types ─── */
export type IssueTypeData = z.infer<typeof IssueTypeSchema>;
export type TransactionRoleData = z.infer<typeof TransactionRoleSchema>;
export type ClosingTimelineData = z.infer<typeof ClosingTimelineSchema>;
export type ZipCodeData = z.infer<typeof ZipCodeSchema>;
export type ContactInfoData = z.infer<typeof ContactInfoSchema>;
export type TrackingData = z.infer<typeof TrackingSchema>;
export type LeadFormData = z.infer<typeof LeadFormSchema>;

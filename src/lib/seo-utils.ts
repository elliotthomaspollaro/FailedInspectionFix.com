/* ═══════════════════════════════════════════════════════════════════
 * seo-utils.ts — pSEO URL Parsing & Formatting Utilities
 * ═══════════════════════════════════════════════════════════════════
 * Handles composite slug types for FailedInspectionFix.com:
 *   1. Trigger+Service: "failed-home-inspection-radon-mitigation-system-installation"
 *   2. Standalone Service: "radon-mitigation-system-installation"
 * ═══════════════════════════════════════════════════════════════════ */

import {
  ESCROW_TRIGGERS,
  slugify,
  type SiloKey,
  SILO_CONFIGS,
} from "./seo-data";

export interface ParsedSlug {
  /** Which pattern matched */
  slugType: "trigger-service" | "standalone-service";
  /** The escrow trigger phrase (display form), if matched */
  trigger: string;
  /** The technical service phrase (display form) */
  service: string;
  /** Raw slug for fallback display */
  rawSlug: string;
}

/**
 * Parse a composite slug into structured data.
 * Tries matching escrow trigger prefix first, then falls back to standalone service.
 */
export function parseCompositeSlug(slug: string, siloKey: SiloKey): ParsedSlug {
  const result: ParsedSlug = {
    slugType: "standalone-service",
    trigger: "",
    service: "",
    rawSlug: slug,
  };

  const config = SILO_CONFIGS[siloKey];

  // ─── Strategy 1: Try escrow trigger prefix match (longest first) ───
  const triggerSlugs = ESCROW_TRIGGERS
    .map((t) => ({ original: t, slugged: slugify(t) }))
    .sort((a, b) => b.slugged.length - a.slugged.length);

  for (const { original, slugged } of triggerSlugs) {
    if (slug.startsWith(slugged + "-")) {
      result.slugType = "trigger-service";
      result.trigger = original;
      const remainder = slug.slice(slugged.length + 1);

      // Try to match remainder to a known service
      for (const service of config.services) {
        if (slugify(service) === remainder) {
          result.service = service;
          return result;
        }
      }

      // Fallback: use remainder as display text
      result.service = titleCase(remainder.replace(/-/g, " "));
      return result;
    }
  }

  // ─── Strategy 2: Standalone service match ───
  for (const service of config.services) {
    if (slugify(service) === slug) {
      result.service = service;
      return result;
    }
  }

  // ─── Fallback: use raw slug as display text ───
  result.service = titleCase(slug.replace(/-/g, " "));
  return result;
}

/** Title case a string */
function titleCase(str: string): string {
  return str.replace(
    /\b\w+/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
}

/** Format a slug city name → display name */
export function formatCityName(citySlug: string): string {
  return citySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Format state abbreviation → full name */
export function getStateName(stateCode: string): string {
  const stateNames: Record<string, string> = {
    nj: "New Jersey",
    pa: "Pennsylvania",
    ct: "Connecticut",
    ny: "New York",
    ma: "Massachusetts",
    oh: "Ohio",
    il: "Illinois",
    mn: "Minnesota",
    wi: "Wisconsin",
    ia: "Iowa",
    co: "Colorado",
    tx: "Texas",
    fl: "Florida",
  };
  return stateNames[stateCode.toLowerCase()] || stateCode.toUpperCase();
}

/**
 * Generate page title for a pSEO page.
 * Pattern: "{Service} — {City}, {State} | FailedInspectionFix.com"
 */
export function generatePageTitle(
  parsed: ParsedSlug,
  city: string,
  state: string
): string {
  const cityDisplay = formatCityName(city);
  const stateDisplay = state.toUpperCase();

  if (parsed.trigger) {
    return `${titleCase(parsed.trigger)}: ${titleCase(parsed.service)} in ${cityDisplay}, ${stateDisplay}`;
  }
  return `${titleCase(parsed.service)} in ${cityDisplay}, ${stateDisplay}`;
}

/**
 * Generate meta description for a pSEO page.
 */
export function generateMetaDescription(
  parsed: ParsedSlug,
  city: string,
  stateFull: string
): string {
  const cityDisplay = formatCityName(city);

  if (parsed.trigger) {
    return `${titleCase(parsed.trigger)} in ${cityDisplay}? Get immediate quotes for ${parsed.service} from certified specialists. Escrow-ready clearance documentation for ${stateFull} real estate transactions.`;
  }
  return `Need ${parsed.service} in ${cityDisplay}, ${stateFull}? Get immediate quotes from certified, licensed specialists. Escrow-ready clearance documentation provided.`;
}

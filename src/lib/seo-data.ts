/* ═══════════════════════════════════════════════════════════════════
 * seo-data.ts — Master Keyword Arrays, Slug Generator, & Seeded Picks
 * ═══════════════════════════════════════════════════════════════════
 * Data source: masterkeywordsforfailedinspectionfix.csv (scrubbed)
 *
 * RULES:
 *   ✓ "cost" / "diy" keywords → ONLY used in FAQ JSON-LD schema
 *   ✓ Main body / SeoBasement → Technical service terms + Escrow Triggers
 *   ✓ Slugs → Escrow Triggers × Technical Services
 * ═══════════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════════
 * SILO 1: RADON CLEARANCE
 * Technical service terms from CSV (no cost/diy)
 * ═══════════════════════════════════════════════════════════════════ */
export const RADON_SERVICES = [
  "radon mitigation system installation",
  "radon mitigation installation",
  "radon fan installation",
  "radon mitigation fan installation",
  "active soil depressurization",
  "active soil depressurization system",
  "sub slab radon mitigation system",
  "exterior radon mitigation system",
  "radon mitigation system in basement",
  "radon ventilation system",
  "radon venting system",
  "radon sump pump system",
  "radon system installation",
  "radon passive mitigation system",
  "soil depressurization system",
  "central radon systems",
  "asd radon system",
  "install radon fan in basement",
  "proper radon mitigation installation",
  "remediation for radon",
] as const;

/* ═══════════════════════════════════════════════════════════════════
 * SILO 2: OIL TANK REMOVAL
 * ═══════════════════════════════════════════════════════════════════ */
export const OIL_TANK_SERVICES = [
  "abandoned underground oil tank",
  "gpr oil tank sweep",
  "gpr tank sweep",
  "dep oil tank removal",
  "heating oil tank decommission",
  "remove buried oil tank",
  "oil tank sweep certification",
  "underground storage tank removal certificate",
  "soil testing leaking oil tank",
  "leaking oil tank escrow",
  "oil tank found during home inspection",
  "failed oil tank sweep",
] as const;

/* ═══════════════════════════════════════════════════════════════════
 * SILO 3: ASBESTOS / LEAD ABATEMENT
 * ═══════════════════════════════════════════════════════════════════ */
export const ASBESTOS_SERVICES = [
  "asbestos popcorn ceiling removal",
  "removal of popcorn ceiling with asbestos",
  "asbestos pipe wrap removal",
  "asbestos duct wrap removal",
  "asbestos wrapped pipes in basement",
  "removing asbestos wrapped pipes",
  "encapsulating asbestos pipe wrap",
  "9x9 asbestos floor tile removal",
  "emergency asbestos testing",
  "disturbed asbestos cleanup",
  "vermiculite insulation home inspection",
  "can you sell a house with asbestos siding",
  "can you sell a home with asbestos",
  "can you legally sell a house with asbestos",
  "can you sell a house with an asbestos garage",
  "scraped popcorn ceiling asbestos",
  "asbestos found during home inspection",
  "lead paint disclosure repair",
  "lead safe work practice abatement",
  "failed lead paint inspection",
] as const;

/* ═══════════════════════════════════════════════════════════════════
 * SILO 4: SEWER SCOPE REPAIR
 * ═══════════════════════════════════════════════════════════════════ */
export const SEWER_SERVICES = [
  "trenchless sewer line replacement",
  "trenchless sewer lateral replacement",
  "trenchless sewer pipe replacement",
  "trenchless sewer pipe repair",
  "trenchless sewer relining",
  "trenchless sewer rehabilitation",
  "trenchless sewer main repair",
  "trenchless sewer installation",
  "trenchless sewer line",
  "trenchless pipe repair",
  "trenchless plumbing repair",
  "trenchless drain repair",
  "no dig sewer line repair",
  "no dig sewer line replacement",
  "no dig sewer repair",
  "no dig pipe relining",
  "digless sewer repair",
  "zero dig trenchless pipe repair",
  "epoxy pipe bursting trenchless",
  "cast iron sewer pipe replacement",
  "cast iron main drain replacement",
  "cast iron pipe replacement under slab",
  "replace cast iron drain pipe",
  "replace cast iron drain pipe with pvc",
  "replace old cast iron sewer pipes with pvc",
  "replacing a cast iron drain pipe",
  "replacing cast iron sewer line",
  "replacing cast iron sewer pipe in basement",
  "orangeburg pipe home inspection",
  "replace orangeburg pipe before closing",
] as const;

/* ═══════════════════════════════════════════════════════════════════
 * UMBRELLA: ESCROW TRIGGERS (transaction-panic keywords)
 * These get smashed with Technical Services to create composite slugs
 * e.g. "failed-home-inspection-radon-mitigation-system-installation"
 * ═══════════════════════════════════════════════════════════════════ */
export const ESCROW_TRIGGERS = [
  "failed home inspection",
  "failed fha inspection",
  "failed radon test",
  "failed radon test before closing",
  "failed sewer inspection",
  "failed sewer scope",
  "home inspection failed radon test",
  "house failed radon test",
  "home inspection repairs before closing",
  "emergency repairs before closing",
  "fix failed home inspection fast",
  "home inspection clearance certificate",
  "radon clearance certificate",
  "radon mitigation real estate transaction",
  "contractors for real estate closing repairs",
  "real estate transaction repair contractors",
  "escrow holdback for repairs",
  "escrow holdback conventional loan",
  "escrow holdback fha",
  "va escrow holdback for repairs",
  "repair escrow holdback agreement",
  "sell house with high radon",
] as const;

/* ═══════════════════════════════════════════════════════════════════
 * COST / PRICING KEYWORDS — ONLY for FAQ JSON-LD Schema
 * NEVER use in SeoBasement body text or page headers
 * ═══════════════════════════════════════════════════════════════════ */
export const RADON_COST_FAQS = [
  "How much does a radon mitigation system installation cost in {city}?",
  "What is the average cost of radon fan installation in {city}?",
  "How much is active soil depressurization in {city}?",
  "What does a sub slab radon mitigation system cost in {city}?",
  "How much does an exterior radon mitigation system cost in {city}?",
  "What is the price range for radon remediation in {city}?",
] as const;

export const OIL_TANK_COST_FAQS = [
  "How much does underground oil tank removal cost in {city}?",
  "What is the average cost of oil tank decommissioning in {city}?",
  "How much does a GPR tank sweep cost in {city}?",
  "What does soil testing for a leaking oil tank cost in {city}?",
  "How much is oil tank sweep certification in {city}?",
  "What is the average cost to remove a buried oil tank in {city}?",
] as const;

export const ASBESTOS_COST_FAQS = [
  "How much does asbestos popcorn ceiling removal cost in {city}?",
  "What is the average cost of asbestos pipe wrap removal in {city}?",
  "How much does emergency asbestos testing cost in {city}?",
  "What does asbestos abatement cost for a home sale in {city}?",
  "How much is 9x9 asbestos floor tile removal in {city}?",
  "What is the cost to encapsulate asbestos pipe wrap in {city}?",
] as const;

export const SEWER_COST_FAQS = [
  "What is the average cost of a trenchless sewer replacement in {city}?",
  "How much does trenchless sewer lateral replacement cost in {city}?",
  "What does no dig sewer line repair cost in {city}?",
  "How much is cast iron sewer pipe replacement in {city}?",
  "What is the average cost of trenchless pipe relining in {city}?",
  "How much does it cost to replace cast iron drain pipe with PVC in {city}?",
] as const;

/* ═══════════════════════════════════════════════════════════════════
 * SILO CONFIGURATION — Maps silo slug → its keyword arrays
 * ═══════════════════════════════════════════════════════════════════ */
export type SiloKey = "radon-clearance" | "oil-tank-removal" | "asbestos-lead-abatement" | "sewer-scope-repair";

export interface SiloConfig {
  siloKey: SiloKey;
  displayName: string;
  services: readonly string[];
  costFaqs: readonly string[];
  issueType: string; // Maps to the form's issueType
}

export const SILO_CONFIGS: Record<SiloKey, SiloConfig> = {
  "radon-clearance": {
    siloKey: "radon-clearance",
    displayName: "Radon Clearance",
    services: RADON_SERVICES,
    costFaqs: RADON_COST_FAQS,
    issueType: "High Radon Levels",
  },
  "oil-tank-removal": {
    siloKey: "oil-tank-removal",
    displayName: "Oil Tank Removal",
    services: OIL_TANK_SERVICES,
    costFaqs: OIL_TANK_COST_FAQS,
    issueType: "Underground Oil Tank",
  },
  "asbestos-lead-abatement": {
    siloKey: "asbestos-lead-abatement",
    displayName: "Asbestos & Lead Abatement",
    services: ASBESTOS_SERVICES,
    costFaqs: ASBESTOS_COST_FAQS,
    issueType: "Asbestos / Lead Paint",
  },
  "sewer-scope-repair": {
    siloKey: "sewer-scope-repair",
    displayName: "Sewer Scope Repair",
    services: SEWER_SERVICES,
    costFaqs: SEWER_COST_FAQS,
    issueType: "Failed Sewer Scope",
  },
};

/* ═══════════════════════════════════════════════════════════════════
 * SLUG GENERATION — Escrow Triggers × Technical Services
 * e.g. "failed-home-inspection-radon-mitigation-system-installation"
 * ═══════════════════════════════════════════════════════════════════ */

/** Slugify any display string → URL-safe slug */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Top escrow triggers for slug generation (highest intent) */
const TOP_ESCROW_TRIGGERS = [
  "failed home inspection",
  "failed fha inspection",
  "home inspection repairs before closing",
  "emergency repairs before closing",
  "escrow holdback for repairs",
] as const;

/** Top services per silo for slug cross-product */
const TOP_RADON_SLUGS = RADON_SERVICES.slice(0, 8);
const TOP_OIL_TANK_SLUGS = OIL_TANK_SERVICES.slice(0, 6);
const TOP_ASBESTOS_SLUGS = ASBESTOS_SERVICES.slice(0, 8);
const TOP_SEWER_SLUGS = SEWER_SERVICES.slice(0, 12);

/**
 * Generate curated composite slugs for a specific silo.
 * Pattern: "{escrow-trigger}-{technical-service}"
 */
export function getCuratedSlugsForSilo(siloKey: SiloKey): string[] {
  const slugs = new Set<string>();
  let topServices: readonly string[];

  switch (siloKey) {
    case "radon-clearance":     topServices = TOP_RADON_SLUGS; break;
    case "oil-tank-removal":    topServices = TOP_OIL_TANK_SLUGS; break;
    case "asbestos-lead-abatement": topServices = TOP_ASBESTOS_SLUGS; break;
    case "sewer-scope-repair":  topServices = TOP_SEWER_SLUGS; break;
  }

  // Escrow Trigger × Technical Service
  for (const trigger of TOP_ESCROW_TRIGGERS) {
    for (const service of topServices) {
      slugs.add(`${slugify(trigger)}-${slugify(service)}`);
    }
  }

  // Standalone technical service pages
  const config = SILO_CONFIGS[siloKey];
  for (const service of config.services) {
    slugs.add(slugify(service));
  }

  return Array.from(slugs);
}

/** Get build-time slugs (smaller set for initial build speed) */
export function getBuildSlugsForSilo(siloKey: SiloKey): string[] {
  const slugs = new Set<string>();
  let topServices: readonly string[];

  switch (siloKey) {
    case "radon-clearance":     topServices = TOP_RADON_SLUGS.slice(0, 4); break;
    case "oil-tank-removal":    topServices = TOP_OIL_TANK_SLUGS.slice(0, 3); break;
    case "asbestos-lead-abatement": topServices = TOP_ASBESTOS_SLUGS.slice(0, 4); break;
    case "sewer-scope-repair":  topServices = TOP_SEWER_SLUGS.slice(0, 5); break;
  }

  // Top 3 triggers × top services
  for (const trigger of TOP_ESCROW_TRIGGERS.slice(0, 3)) {
    for (const service of topServices) {
      slugs.add(`${slugify(trigger)}-${slugify(service)}`);
    }
  }

  // Standalone service pages
  for (const service of topServices) {
    slugs.add(slugify(service));
  }

  return Array.from(slugs);
}

/* ═══════════════════════════════════════════════════════════════════
 * SEEDED RANDOMIZATION — Deterministic picks for Googlebot consistency
 * ═══════════════════════════════════════════════════════════════════ */

/** Deterministic hash from any string → positive integer */
export function hashSeed(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Pick one item deterministically from an array */
export function pick<T>(arr: readonly T[], seed: number, offset = 0): T {
  return arr[(seed + offset) % arr.length];
}

/** Pick N unique items deterministically from an array */
export function pickN<T>(arr: readonly T[], seed: number, n: number, startOffset = 0): T[] {
  const result: T[] = [];
  const used = new Set<number>();
  let offset = startOffset;
  while (result.length < n && result.length < arr.length) {
    const idx = (seed + offset) % arr.length;
    if (!used.has(idx)) {
      used.add(idx);
      result.push(arr[idx]);
    }
    offset++;
  }
  return result;
}

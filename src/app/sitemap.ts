/* ═══════════════════════════════════════════════════════════════════
 * sitemap.ts — Dynamic Sitemap for All 4 Silos × Cities × Slugs
 * ═══════════════════════════════════════════════════════════════════
 * Generates a complete sitemap covering:
 *   - Homepage
 *   - All 4 silo × city × slug pages (build subset)
 * ═══════════════════════════════════════════════════════════════════ */

import type { MetadataRoute } from "next";
import { getAllCityStatePairs } from "@/lib/seo-cities";
import {
  getBuildSlugsForSilo,
  type SiloKey,
} from "@/lib/seo-data";

const BASE_URL = "https://failedinspectionfix.com";

const SILOS: SiloKey[] = [
  "radon-clearance",
  "oil-tank-removal",
  "asbestos-lead-abatement",
  "sewer-scope-repair",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  entries.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  });

  // Silo hub pages
  for (const silo of SILOS) {
    entries.push({
      url: `${BASE_URL}/${silo}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Legal pages
  entries.push({
    url: `${BASE_URL}/privacy`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.3,
  });
  entries.push({
    url: `${BASE_URL}/terms`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.3,
  });

  // All silo × city × slug pages
  const cityPairs = getAllCityStatePairs();

  for (const silo of SILOS) {
    const slugs = getBuildSlugsForSilo(silo);

    for (const { city, state } of cityPairs) {
      for (const slug of slugs) {
        entries.push({
          url: `${BASE_URL}/${silo}/${state}/${city}/${slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    }
  }

  return entries;
}

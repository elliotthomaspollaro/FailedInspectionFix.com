/* ═══════════════════════════════════════════════════════════════════
 * silo-metadata.ts — Shared Metadata Generation for Silo Routes
 * ═══════════════════════════════════════════════════════════════════ */

import type { Metadata } from "next";
import {
  parseCompositeSlug,
  formatCityName,
  getStateName,
  generatePageTitle,
  generateMetaDescription,
} from "@/lib/seo-utils";
import { type SiloKey } from "@/lib/seo-data";

export function buildSiloMetadata(
  state: string,
  city: string,
  slug: string,
  siloKey: SiloKey
): Metadata {
  const cityName = formatCityName(city);
  const stateFull = getStateName(state);
  const parsed = parseCompositeSlug(slug, siloKey);

  const title = generatePageTitle(parsed, city, state);
  const description = generateMetaDescription(parsed, city, stateFull);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
      siteName: "FailedInspectionFix.com",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://failedinspectionfix.com/${siloKey}/${state}/${city}/${slug}`,
    },
  };
}

/* ═══════════════════════════════════════════════════════════════════
 * /asbestos-lead-abatement/[state]/[city]/[slug]/page.tsx
 * Silo 3: Asbestos & Lead Abatement — Dynamic Route
 * ═══════════════════════════════════════════════════════════════════ */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiloPage from "@/components/Pages/SiloPage";
import { buildSiloMetadata } from "@/lib/silo-metadata";
import { getTopCityPairs, SEO_CITIES } from "@/lib/seo-cities";
import { getBuildSlugsForSilo } from "@/lib/seo-data";

const SILO_KEY = "asbestos-lead-abatement" as const;

type Props = {
  params: Promise<{ state: string; city: string; slug: string }>;
};

export async function generateStaticParams() {
  const cityPairs = getTopCityPairs();
  const slugs = getBuildSlugsForSilo(SILO_KEY);
  const params: { state: string; city: string; slug: string }[] = [];

  for (const { city, state } of cityPairs) {
    for (const slug of slugs) {
      params.push({ state, city, slug });
    }
  }
  return params;
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, city, slug } = await params;
  return buildSiloMetadata(state, city, slug, SILO_KEY);
}

export default async function AsbestosLeadPage({ params }: Props) {
  const { state, city, slug } = await params;
  if (!SEO_CITIES[state] && state.length !== 2) notFound();
  return (
    <SiloPage state={state} city={city} slug={slug} siloKey={SILO_KEY} />
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * SiloPage.tsx — Shared Page Template for All 4 Silo Dynamic Routes
 * ═══════════════════════════════════════════════════════════════════
 * This is the single-source-of-truth page component.
 * Each silo's page.tsx is a thin wrapper that passes its siloKey.
 * ═══════════════════════════════════════════════════════════════════ */

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import HowItWorks from "@/components/Sections/HowItWorks";
import StatsBar from "@/components/Sections/StatsBar";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Testimonials from "@/components/Sections/Testimonials";
import FAQ from "@/components/Sections/FAQ";
import FinalCTA from "@/components/Sections/FinalCTA";
import StickyCTA from "@/components/UI/StickyCTA";
import SeoBasement from "@/components/SEO/SeoBasement";
import LocalFAQ from "@/components/SEO/LocalFAQ";
import NearbyCities from "@/components/SEO/NearbyCities";
import {
  parseCompositeSlug,
  formatCityName,
  getStateName,
} from "@/lib/seo-utils";
import {
  SILO_CONFIGS,
  hashSeed,
  pickN,
  type SiloKey,
} from "@/lib/seo-data";

interface SiloPageProps {
  state: string;
  city: string;
  slug: string;
  siloKey: SiloKey;
}

export default function SiloPage({
  state,
  city,
  slug,
  siloKey,
}: SiloPageProps) {
  const config = SILO_CONFIGS[siloKey];
  const cityName = formatCityName(city);
  const stateFull = getStateName(state);
  const parsed = parseCompositeSlug(slug, siloKey);
  const seed = hashSeed(`${city}-${state}-${slug}`);

  // ─── Build dynamic hero headline ───
  const serviceDisplay = parsed.service
    ? parsed.service
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : config.displayName;

  const headline = (
    <>
      {parsed.trigger ? (
        <>
          <span style={{ color: "#EF4444" }}>
            {parsed.trigger
              .split(" ")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")}
          </span>
          {" "}in {cityName}?
          <br />
          <span style={{ color: "#E8621A" }}>
            Get {serviceDisplay} Fast.
          </span>
        </>
      ) : (
        <>
          Need {serviceDisplay} in {cityName}?
          <br />
          <span style={{ color: "#E8621A" }}>
            Get Escrow Clearance Fast.
          </span>
        </>
      )}
    </>
  );

  // ─── Service JSON-LD with LocalBusiness ───
  const seededServices = pickN(config.services, seed, 5, 0) as string[];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://failedinspectionfix.com/${siloKey}/${state}/${city}/${slug}#business`,
        name: `FailedInspectionFix.com — ${cityName}, ${stateFull}`,
        description: `Certified ${config.displayName.toLowerCase()} specialists serving ${cityName}, ${stateFull}. Escrow-ready clearance documentation for real estate transactions.`,
        url: `https://failedinspectionfix.com/${siloKey}/${state}/${city}/${slug}`,
        areaServed: {
          "@type": "City",
          name: cityName,
          containedInPlace: {
            "@type": "State",
            name: stateFull,
          },
        },
        serviceType: config.displayName,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${config.displayName} Services`,
          itemListElement: seededServices.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service
                .split(" ")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" "),
              description: `Professional ${service} in ${cityName}, ${stateFull}. Escrow-ready clearance documentation provided.`,
            },
          })),
        },
      },
      {
        "@type": "Service",
        "@id": `https://failedinspectionfix.com/${siloKey}/${state}/${city}/${slug}#service`,
        name: `${serviceDisplay} in ${cityName}, ${stateFull}`,
        provider: {
          "@id": `https://failedinspectionfix.com/${siloKey}/${state}/${city}/${slug}#business`,
        },
        areaServed: {
          "@type": "City",
          name: cityName,
        },
        serviceType: config.displayName,
        description: `Licensed, certified ${config.displayName.toLowerCase()} specialists serving ${cityName}, ${stateFull}. Escrow-ready clearance documentation for failed home inspections.`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <HeroSection
          city={cityName}
          state={state}
          headline={headline}
        />
        <HowItWorks />
        <StatsBar />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <SeoBasement
          city={city}
          state={state}
          stateFull={stateFull}
          siloKey={siloKey}
          parsed={parsed}
        />
        <LocalFAQ
          city={city}
          stateFull={stateFull}
          siloKey={siloKey}
        />
        <NearbyCities
          currentCity={city}
          state={state}
          slug={slug}
          siloKey={siloKey}
        />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

import Link from "next/link";
import { MapPin } from "lucide-react";
import { SEO_CITIES } from "@/lib/seo-cities";
import { formatCityName } from "@/lib/seo-utils";
import type { SiloKey } from "@/lib/seo-data";

interface NearbyCitiesProps {
  currentCity: string;
  state: string;
  slug: string;
  siloKey: SiloKey;
}

/**
 * "Nearby Cities" internal linking widget for pSEO pages.
 * Gets 6 neighboring cities from the same state and links to their
 * equivalent page. Creates a spiderweb of internal links
 * so Googlebot can crawl between all pages.
 */
export default function NearbyCities({
  currentCity,
  state,
  slug,
  siloKey,
}: NearbyCitiesProps) {
  const stateCities = SEO_CITIES[state];
  if (!stateCities || stateCities.length < 2) return null;

  const idx = stateCities.indexOf(currentCity);
  const nearby: string[] = [];
  const total = stateCities.length;

  for (let offset = 1; nearby.length < 6 && offset <= total; offset++) {
    const beforeIdx = (idx - offset + total) % total;
    const afterIdx = (idx + offset) % total;

    if (stateCities[beforeIdx] !== currentCity && !nearby.includes(stateCities[beforeIdx])) {
      nearby.push(stateCities[beforeIdx]);
    }
    if (nearby.length < 6 && stateCities[afterIdx] !== currentCity && !nearby.includes(stateCities[afterIdx])) {
      nearby.push(stateCities[afterIdx]);
    }
  }

  return (
    <nav
      className="py-8 px-4"
      style={{ borderTop: "1px solid #E2DDD4" }}
      aria-label="Nearby cities"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-sm font-heading mb-4" style={{ color: "#6B7D8E", opacity: 0.8 }}>
          We Also Serve Nearby Cities
        </h3>
        <div className="flex flex-wrap gap-2">
          {nearby.map((neighborCity) => (
            <Link
              key={neighborCity}
              href={`/${siloKey}/${state}/${neighborCity}/${slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border hover:shadow-sm transition-all text-xs font-semibold"
              style={{
                borderColor: "#E2DDD4",
                color: "#6B7D8E",
              }}
            >
              <MapPin className="w-3 h-3" />
              {formatCityName(neighborCity)}, {state.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

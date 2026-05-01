/* ═══════════════════════════════════════════════════════════════════
 * seo-cities.ts — US City Database for pSEO Page Generation
 * ═══════════════════════════════════════════════════════════════════
 * Northeast Corridor focus: NJ, PA, CT, NY
 * These states have the highest density of:
 *   - Radon hotspots
 *   - Buried heating oil tanks
 *   - Pre-1980 asbestos/lead homes
 *   - Aging cast iron/Orangeburg sewer laterals
 * ═══════════════════════════════════════════════════════════════════ */

export const SEO_CITIES: Record<string, string[]> = {
  nj: [
    "newark", "jersey-city", "paterson", "elizabeth", "trenton",
    "clifton", "passaic", "union-city", "bayonne", "east-orange",
    "cherry-hill", "princeton", "morristown", "montclair", "wayne",
    "parsippany", "livingston", "westfield", "summit", "maplewood",
    "hoboken", "hackensack", "ridgewood", "nutley", "cranford",
    "millburn", "short-hills", "madison", "chatham", "bernardsville",
    "flemington", "somerville", "bridgewater", "edison", "woodbridge",
    "piscataway", "new-brunswick", "perth-amboy", "red-bank", "freehold",
    "toms-river", "brick", "lakewood", "jackson", "howell",
  ],
  pa: [
    "philadelphia", "pittsburgh", "allentown", "reading", "bethlehem",
    "scranton", "lancaster", "harrisburg", "york", "wilkes-barre",
    "state-college", "chester", "norristown", "king-of-prussia", "doylestown",
    "media", "west-chester", "newtown", "ardmore", "wayne",
    "bryn-mawr", "conshohocken", "plymouth-meeting", "blue-bell", "collegeville",
    "pottstown", "phoenixville", "downingtown", "exton", "malvern",
  ],
  ct: [
    "bridgeport", "new-haven", "stamford", "hartford", "waterbury",
    "norwalk", "danbury", "new-britain", "west-hartford", "greenwich",
    "fairfield", "hamden", "manchester", "milford", "stratford",
    "east-hartford", "middletown", "wallingford", "southington", "shelton",
    "westport", "darien", "new-canaan", "ridgefield", "trumbull",
  ],
  ny: [
    "new-york", "buffalo", "rochester", "yonkers", "syracuse",
    "albany", "new-rochelle", "mount-vernon", "schenectady", "utica",
    "white-plains", "troy", "binghamton", "saratoga-springs", "ithaca",
    "poughkeepsie", "kingston", "beacon", "peekskill", "ossining",
    "tarrytown", "bronxville", "scarsdale", "larchmont", "mamaroneck",
    "rye", "port-chester", "harrison", "armonk", "katonah",
  ],
};

/** Get all city/state combos as flat array */
export function getAllCityStatePairs(): { city: string; state: string }[] {
  const pairs: { city: string; state: string }[] = [];
  for (const [state, cities] of Object.entries(SEO_CITIES)) {
    for (const city of cities) {
      pairs.push({ city, state });
    }
  }
  return pairs;
}

/** Get total city count */
export function getCityCount(): number {
  return Object.values(SEO_CITIES).reduce((acc, cities) => acc + cities.length, 0);
}

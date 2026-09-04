/**
 * Affiliate offer registry for /go/{slug} redirects.
 *
 * Destinations for live offers should come from env vars once partner
 * approval IDs exist. TODO_ slugs must never point at a real partner URL.
 */

export const AFFILIATE_PARTNER = "inbound-platform";

/** Safe stand-in until a real partner URL is configured. Not a navigable URL. */
export const PLACEHOLDER_DESTINATION = "placeholder:unconfigured";

export type AffiliateOffer = {
  slug: string;
  partner: string;
  destination: string;
};

export const AFFILIATE_OFFERS: readonly AffiliateOffer[] = [
  {
    slug: "TODO_jw-esim",
    partner: AFFILIATE_PARTNER,
    destination: PLACEHOLDER_DESTINATION,
  },
  {
    slug: "TODO_jw-wifi",
    partner: AFFILIATE_PARTNER,
    destination: PLACEHOLDER_DESTINATION,
  },
  {
    slug: "TODO_shinkansen",
    partner: AFFILIATE_PARTNER,
    destination: PLACEHOLDER_DESTINATION,
  },
  {
    slug: "TODO_highway-bus",
    partner: AFFILIATE_PARTNER,
    destination: PLACEHOLDER_DESTINATION,
  },
  {
    slug: "TODO_airport-taxi",
    partner: AFFILIATE_PARTNER,
    destination: PLACEHOLDER_DESTINATION,
  },
];

const bySlug = new Map(AFFILIATE_OFFERS.map((offer) => [offer.slug, offer]));

export function getAffiliateOffer(slug: string): AffiliateOffer | undefined {
  return bySlug.get(slug);
}

export function isTodoSlug(slug: string): boolean {
  return slug.startsWith("TODO_");
}

export function isUnconfiguredDestination(destination: string): boolean {
  return (
    destination === PLACEHOLDER_DESTINATION ||
    destination.startsWith("placeholder:")
  );
}

/**
 * Preview/debug only: Vite dev, or an explicit ?affiliate_debug=1 /
 * localStorage flag. Production builds on the live host never treat TODO_
 * slugs as trackable unless that debug override is set.
 */
export function isAffiliateDebugMode(): boolean {
  if (import.meta.env.DEV) return true;
  if (typeof window === "undefined") return false;
  try {
    if (new URLSearchParams(window.location.search).get("affiliate_debug") === "1") {
      return true;
    }
    if (window.localStorage.getItem("affiliate_debug") === "1") return true;
  } catch {
    /* ignore */
  }
  return false;
}

/**
 * TODO_ slugs must not fire `affiliate_click` in production builds.
 * Preview/debug verification (Vite DEV or affiliate_debug) is allowed.
 */
export function shouldTrackAffiliateClick(slug: string): boolean {
  if (!isTodoSlug(slug)) return true;
  if (import.meta.env.PROD && !isAffiliateDebugMode()) return false;
  return isAffiliateDebugMode();
}

export function goPath(slug: string): string {
  return `/go/${slug}`;
}

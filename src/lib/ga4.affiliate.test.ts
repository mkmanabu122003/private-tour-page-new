import { describe, expect, it, vi, beforeEach } from "vitest";
import { parseGoHref, trackAffiliateClick } from "./ga4";

describe("affiliate_click tracking", () => {
  beforeEach(() => {
    window.gtag = vi.fn();
  });

  it("parses /go/ and /es/go/ hrefs", () => {
    expect(parseGoHref("/go/japan-wireless-esim")).toEqual({
      slug: "japan-wireless-esim",
      lang: "en",
    });
    expect(parseGoHref("/es/go/airport-taxi-tokyo")).toEqual({
      slug: "airport-taxi-tokyo",
      lang: "es",
    });
    expect(parseGoHref("/tours/asakusa")).toBeNull();
  });

  it("fires affiliate_click with slug, category, page_path, lang", () => {
    trackAffiliateClick("japan-wireless-esim", "esim", "/prepare-your-trip", "en");
    expect(window.gtag).toHaveBeenCalledWith("event", "affiliate_click", {
      slug: "japan-wireless-esim",
      category: "esim",
      page_path: "/prepare-your-trip",
      lang: "en",
    });
  });
});

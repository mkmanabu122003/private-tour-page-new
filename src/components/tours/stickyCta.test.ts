import { describe, expect, it } from "vitest";
import { getStickyCtaLabel, getTourContactHref } from "./stickyCta";

describe("getTourContactHref", () => {
  it("routes English tours to the English contact form with tour query and hash", () => {
    expect(getTourContactHref("en", "asakusa")).toBe("/contact?tour=asakusa#inquiry-form");
  });

  it("routes Spanish tours to /es/contact, never bare /contact", () => {
    const href = getTourContactHref("es", "asakusa");
    expect(href).toBe("/es/contact?tour=asakusa#inquiry-form");
    expect(href.startsWith("/contact")).toBe(false);
  });

  it("still hashes to the inquiry form when no slug is set", () => {
    expect(getTourContactHref("en")).toBe("/contact#inquiry-form");
    expect(getTourContactHref("es")).toBe("/es/contact#inquiry-form");
  });
});

describe("getStickyCtaLabel", () => {
  it("uses Check availability in English and Consultar disponibilidad in Spanish", () => {
    expect(getStickyCtaLabel("en")).toBe("Check availability");
    expect(getStickyCtaLabel("es")).toBe("Consultar disponibilidad");
    expect(getStickyCtaLabel("es")).not.toBe("Book Now");
  });
});

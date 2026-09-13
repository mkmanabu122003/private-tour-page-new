import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { PrepareTripHub } from "./PrepareTripHub";

describe("AffiliateDisclosure", () => {
  it("renders English and Spanish copy", () => {
    const { rerender } = render(<AffiliateDisclosure lang="en" placement="top" />);
    expect(screen.getByText(/Partner links/i)).toBeInTheDocument();
    expect(screen.getByText(/don't book transport/i)).toBeInTheDocument();
    rerender(<AffiliateDisclosure lang="es" placement="footer" />);
    expect(screen.getByText(/Enlaces de socios/i)).toBeInTheDocument();
    expect(screen.getByText(/no reservamos transporte/i)).toBeInTheDocument();
    expect(document.querySelector('[data-affiliate-disclosure="footer"]')).toBeTruthy();
  });
});

describe("PrepareTripHub", () => {
  it("puts the private-tour CTA above the first /go/ link (EN + ES)", () => {
    const { rerender } = render(
      <MemoryRouter>
        <PrepareTripHub lang="en" />
      </MemoryRouter>,
    );
    const tour = document.querySelector("[data-hub-tour-cta]");
    const firstGo = document.querySelector('a[href*="/go/"]');
    expect(tour).toBeTruthy();
    expect(firstGo).toBeTruthy();
    expect(
      tour!.compareDocumentPosition(firstGo!) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(document.querySelectorAll("[data-affiliate-disclosure]").length).toBe(2);
    expect(screen.getByRole("link", { name: /See private tours/i })).toHaveAttribute("href", "/tours");
    expect(document.body.textContent).not.toMatch(/—/);

    rerender(
      <MemoryRouter>
        <PrepareTripHub lang="es" />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: /Ver tours privados/i })).toHaveAttribute("href", "/es/tours");
    const esGo = document.querySelectorAll('a[href^="/es/go/"]');
    expect(esGo).toHaveLength(1);
    expect(esGo[0]).toHaveAttribute("href", "/es/go/japan-wireless-wifi");
    expect(document.body.textContent).not.toMatch(/vosotros|os recomiendo/i);
    expect(document.body.textContent).not.toMatch(/—|placeholder until the ID|ID de socio/i);
  });

  // Phase 1 ships one partner. Any second /go/ link means a slug was added to
  // affiliates.json before its Rewardful programme was registered.
  it("links exactly one partner, and it is the live pocket WiFi one", () => {
    render(
      <MemoryRouter>
        <PrepareTripHub lang="en" />
      </MemoryRouter>,
    );
    const goLinks = [...document.querySelectorAll('a[href*="/go/"]')];
    expect(goLinks).toHaveLength(1);
    expect(goLinks[0]).toHaveAttribute("href", "/go/japan-wireless-wifi");
    expect(goLinks[0]).toHaveAttribute("rel", "sponsored nofollow noopener");
    expect(goLinks[0]).toHaveAttribute("target", "_blank");
  });

  it("keeps the internal links that feed under-linked articles", () => {
    render(
      <MemoryRouter>
        <PrepareTripHub lang="en" />
      </MemoryRouter>,
    );
    for (const href of [
      "/blog/japan-rail-pass-worth-it",
      "/blog/narita-vs-haneda",
      "/blog/tipping-in-japan",
    ]) {
      expect(document.querySelector(`a[href="${href}"]`)).toBeTruthy();
    }
  });

  it("shows the partner photo after the tour CTA and never inside a /go/ link", () => {
    render(
      <MemoryRouter>
        <PrepareTripHub lang="en" />
      </MemoryRouter>,
    );
    const tour = document.querySelector("[data-hub-tour-cta]");
    const images = [...document.querySelectorAll("[data-affiliate-image]")] as HTMLImageElement[];
    expect(images).toHaveLength(1);
    expect(images.map((img) => img.getAttribute("src"))).toEqual([
      "/images/affiliates/wifi-hero.webp",
    ]);
    expect(tour!.compareDocumentPosition(images[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    for (const img of images) {
      expect(img.closest("a[href*='/go/']")).toBeNull();
    }
    // Sections whose partner is not registered yet must not be present at all.
    expect(screen.queryByAltText(/eSIM|insurance|luggage storage|guardaequipaje/i)).toBeNull();
    expect(document.body.textContent).not.toMatch(/travel insurance|luggage/i);
  });
});

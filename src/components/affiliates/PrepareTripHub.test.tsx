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

    rerender(
      <MemoryRouter>
        <PrepareTripHub lang="es" />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: /Ver tours privados/i })).toHaveAttribute("href", "/es/tours");
    expect(document.querySelectorAll('a[href^="/es/go/"]').length).toBeGreaterThan(0);
    expect(document.body.textContent).not.toMatch(/vosotros|os recomiendo/i);
    expect(document.body.textContent).toMatch(/recomendamos encarecidamente/i);
    expect(document.body.textContent).not.toMatch(/\u2014|placeholder until the ID|ID de socio/i);
    const images = document.querySelectorAll("[data-affiliate-image]");
    expect(images).toHaveLength(5);
  });

  it("strongly recommends insurance without naming a best product (EN)", () => {
    render(
      <MemoryRouter>
        <PrepareTripHub lang="en" />
      </MemoryRouter>,
    );
    expect(screen.getByText(/strongly recommend travel insurance/i)).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/best product for you|the best policy/i);
    expect(document.body.textContent).not.toMatch(/\u2014/);
  });

  it("shows partner photos after the tour CTA, none on insurance or luggage", () => {
    render(
      <MemoryRouter>
        <PrepareTripHub lang="en" />
      </MemoryRouter>,
    );
    const tour = document.querySelector("[data-hub-tour-cta]");
    const images = [...document.querySelectorAll("[data-affiliate-image]")] as HTMLImageElement[];
    expect(images).toHaveLength(5);
    expect(tour!.compareDocumentPosition(images[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(images.map((img) => img.getAttribute("src"))).toEqual([
      "/images/affiliates/esim-hero.webp",
      "/images/affiliates/wifi-hero.webp",
      "/images/affiliates/bullet-train.webp",
      "/images/affiliates/bus.webp",
      "/images/affiliates/airport-taxi.webp",
    ]);
    expect(screen.getByAltText(/smartphone showing a Japan eSIM screen/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/insurance|luggage storage|guardaequipaje/i)).toBeNull();
    for (const img of images) {
      expect(img.closest("a[href*='/go/']")).toBeNull();
    }
    expect(document.querySelector('a[data-affiliate-slug="japan-wireless-wifi"]')).toHaveAttribute(
      "href",
      "/go/japan-wireless-wifi",
    );
  });
});

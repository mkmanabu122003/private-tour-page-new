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
    expect(document.querySelectorAll('a[href*="/go/"]').length).toBe(1);
    expect(firstGo).toHaveAttribute("href", "/go/japan-wireless-wifi");

    rerender(
      <MemoryRouter>
        <PrepareTripHub lang="es" />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: /Ver tours privados/i })).toHaveAttribute("href", "/es/tours");
    expect(document.querySelectorAll('a[href^="/es/go/"]').length).toBe(1);
    expect(document.querySelector('a[href^="/es/go/"]')).toHaveAttribute(
      "href",
      "/es/go/japan-wireless-wifi",
    );
    expect(document.body.textContent).not.toMatch(/vosotros|os recomiendo/i);
    expect(document.body.textContent).toMatch(/no las reservo por ustedes/i);
    expect(document.body.textContent).not.toMatch(/placeholder until the ID|ID de socio/i);
  });

  it("does not ship insurance, luggage, or unregistered partner links", () => {
    render(
      <MemoryRouter>
        <PrepareTripHub lang="en" />
      </MemoryRouter>,
    );
    expect(document.body.textContent).not.toMatch(/travel insurance|luggage storage/i);
    expect(document.querySelector('a[data-affiliate-slug="japan-wireless-esim"]')).toBeNull();
    expect(document.querySelector('a[data-affiliate-slug="japan-bullet-train"]')).toBeNull();
    expect(document.querySelector('a[data-affiliate-slug="japan-bus-tickets"]')).toBeNull();
    expect(document.querySelector('a[data-affiliate-slug="airport-taxi-tokyo"]')).toBeNull();
    expect(document.querySelector('a[data-affiliate-slug="travel-insurance"]')).toBeNull();
    expect(document.querySelector('a[data-affiliate-slug="luggage-storage"]')).toBeNull();
  });

  it("shows only the Pocket WiFi partner photo after the tour CTA", () => {
    render(
      <MemoryRouter>
        <PrepareTripHub lang="en" />
      </MemoryRouter>,
    );
    const tour = document.querySelector("[data-hub-tour-cta]");
    const images = [...document.querySelectorAll("[data-affiliate-image]")] as HTMLImageElement[];
    expect(images).toHaveLength(1);
    expect(tour!.compareDocumentPosition(images[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(images[0]).toHaveAttribute("src", "/images/affiliates/wifi-hero.webp");
    expect(screen.getByAltText(/black pocket WiFi router/i)).toBeInTheDocument();
    expect(images[0].closest("a[href*='/go/']")).toBeNull();
    expect(document.querySelector('a[data-affiliate-slug="japan-wireless-wifi"]')).toHaveAttribute(
      "href",
      "/go/japan-wireless-wifi",
    );
  });
});

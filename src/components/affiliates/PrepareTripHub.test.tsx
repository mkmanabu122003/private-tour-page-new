import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { PrepareTripHub } from "./PrepareTripHub";

describe("AffiliateDisclosure", () => {
  it("renders English and Spanish copy", () => {
    const { rerender } = render(<AffiliateDisclosure lang="en" placement="top" />);
    expect(screen.getByText(/About some of these links/i)).toBeInTheDocument();
    expect(screen.getByText(/do not book transport/i)).toBeInTheDocument();
    rerender(<AffiliateDisclosure lang="es" placement="footer" />);
    expect(screen.getByText(/Sobre algunos de estos enlaces/i)).toBeInTheDocument();
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
  });
});

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { StickyBookingBar } from "./StickyBookingBar";

vi.mock("@/lib/ga4", () => ({
  trackBookNowClick: vi.fn(),
}));

vi.mock("@/lib/publicEnv", () => ({
  getPublicWhatsappNumber: () => undefined,
}));

describe("StickyBookingBar", () => {
  it("links English CTA to English contact, not Book Now", () => {
    render(
      <MemoryRouter>
        <StickyBookingBar tourName="Asakusa Walking Tour" price="¥35,000" lang="en" tourSlug="asakusa" />
      </MemoryRouter>
    );
    const cta = screen.getByRole("link", { name: /Check availability/i });
    expect(cta).toHaveAttribute("href", "/contact?tour=asakusa#inquiry-form");
    expect(screen.queryByRole("link", { name: /Book Now/i })).not.toBeInTheDocument();
  });

  it("links Spanish CTA to /es/contact with Spanish label", () => {
    render(
      <MemoryRouter>
        <StickyBookingBar tourName="Tour por Asakusa" price="¥35,000" lang="es" tourSlug="asakusa" />
      </MemoryRouter>
    );
    const cta = screen.getByRole("link", { name: /Consultar disponibilidad/i });
    expect(cta).toHaveAttribute("href", "/es/contact?tour=asakusa#inquiry-form");
    expect(cta.getAttribute("href")?.startsWith("/contact")).toBe(false);
    expect(screen.queryByRole("link", { name: /Book Now/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Check availability/i })).not.toBeInTheDocument();
  });

  it("does not render WhatsApp when no public number is set", () => {
    render(
      <MemoryRouter>
        <StickyBookingBar tourName="Asakusa Walking Tour" price="¥35,000" lang="en" tourSlug="asakusa" />
      </MemoryRouter>
    );
    expect(screen.queryByRole("link", { name: /WhatsApp/i })).not.toBeInTheDocument();
  });
});

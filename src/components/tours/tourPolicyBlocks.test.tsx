import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { TourCommonFaq } from "./TourCommonFaq";
import { TourInclusions } from "./TourInclusions";
import { TourTrustBlock } from "./TourTrustBlock";
import { getCommonTourFaqs, tourInclusionsCopy, tourTrustCopy } from "./tourPolicyCopy";

const BANNED = [/\bsu guía\b/i, /\bun guía\b/i, /\byour guide\b/i, /\bnos vemos\b/i, /\bI will guide\b/i];

describe("TourInclusions", () => {
  it("shows included, excluded, payment, and vehicle copy in English", () => {
    render(<TourInclusions lang="en" />);
    expect(screen.getByRole("heading", { name: tourInclusionsCopy.en.heading })).toBeInTheDocument();
    expect(screen.getByText(tourInclusionsCopy.en.includedTitle)).toBeInTheDocument();
    expect(screen.getByText(tourInclusionsCopy.en.excludedTitle)).toBeInTheDocument();
    expect(screen.getByText(tourInclusionsCopy.en.included[0])).toBeInTheDocument();
    expect(screen.getByText(tourInclusionsCopy.en.excluded[0])).toBeInTheDocument();
    expect(screen.getByText(/50% deposit/i)).toBeInTheDocument();
    expect(screen.getByText(/This site does not book or reserve the vehicle/i)).toBeInTheDocument();
  });

  it("shows included and excluded copy in Spanish", () => {
    render(<TourInclusions lang="es" />);
    expect(screen.getByRole("heading", { name: tourInclusionsCopy.es.heading })).toBeInTheDocument();
    expect(screen.getByText("Incluido")).toBeInTheDocument();
    expect(screen.getByText("No incluido")).toBeInTheDocument();
    expect(screen.getByText(/depósito del 50%/i)).toBeInTheDocument();
  });
});

describe("TourTrustBlock", () => {
  it("separates coordinator from day-of licensed guides", () => {
    render(<TourTrustBlock lang="en" />);
    expect(screen.getByRole("heading", { name: tourTrustCopy.en.heading })).toBeInTheDocument();
    expect(screen.getByText(/Certified licensed guides lead the tour on the day/i)).toBeInTheDocument();
  });

  it("does not use banned first-person guide phrasing", () => {
    const blobs = [
      tourTrustCopy.en.body,
      tourTrustCopy.es.body,
      ...getCommonTourFaqs("en").flatMap((f) => [f.question, f.answer]),
      ...getCommonTourFaqs("es").flatMap((f) => [f.question, f.answer]),
    ].join("\n");
    for (const banned of BANNED) {
      expect(blobs).not.toMatch(banned);
    }
  });
});

describe("TourCommonFaq", () => {
  it("renders the shared English FAQ topics", () => {
    render(
      <MemoryRouter>
        <TourCommonFaq lang="en" />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /Frequently asked questions/i })).toBeInTheDocument();
    expect(screen.getByText(/What's the cancellation policy\?/)).toBeInTheDocument();
    expect(screen.getByText(/What happens if it rains\?/)).toBeInTheDocument();
    expect(screen.getByText(/Can we bring children\?/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tattoos/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /dietary restrictions/i })).toBeInTheDocument();
    expect(screen.getByText(/Where do we meet\?/)).toBeInTheDocument();
  });

  it("renders the shared Spanish FAQ topics", () => {
    render(
      <MemoryRouter>
        <TourCommonFaq lang="es" />
      </MemoryRouter>
    );
    expect(screen.getByText("¿Cuál es la política de cancelación?")).toBeInTheDocument();
    expect(screen.getByText("¿Qué pasa si llueve?")).toBeInTheDocument();
    expect(screen.getByText("¿Se puede ir con niños?")).toBeInTheDocument();
  });
});

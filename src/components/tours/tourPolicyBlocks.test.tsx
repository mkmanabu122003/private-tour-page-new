import { readFileSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { TourCommonFaq } from "./TourCommonFaq";
import { TourInclusions } from "./TourInclusions";
import { TourTrustBlock } from "./TourTrustBlock";
import { getCommonTourFaqs, getTourInclusionsCopy, tourInclusionsCopy, tourTrustCopy } from "./tourPolicyCopy";

const BANNED = [/\bsu guía\b/i, /\bun guía\b/i, /\byour guide\b/i, /\bnos vemos\b/i, /\bI will guide\b/i];

describe("TourInclusions", () => {
  it("shows included, excluded, payment, and vehicle copy in English", () => {
    render(<TourInclusions lang="en" />);
    expect(screen.getByRole("heading", { name: tourInclusionsCopy.en.heading })).toBeInTheDocument();
    expect(screen.getByText(tourInclusionsCopy.en.includedTitle)).toBeInTheDocument();
    expect(screen.getByText(tourInclusionsCopy.en.excludedTitle)).toBeInTheDocument();
    expect(screen.getByText(tourInclusionsCopy.en.included[0])).toBeInTheDocument();
    expect(screen.getByText(tourInclusionsCopy.en.excluded[0])).toBeInTheDocument();
    expect(screen.getByText(tourInclusionsCopy.en.included[1])).toBeInTheDocument();
    expect(screen.getByText(/full amount is due at booking time/i)).toBeInTheDocument();
    expect(screen.queryByText(/50% deposit/i)).not.toBeInTheDocument();
    expect(screen.getByText(/not included in any tour/i)).toBeInTheDocument();
    expect(screen.getByText(/introduction and quote only/i)).toBeInTheDocument();
    expect(screen.getByText("Meals")).toBeInTheDocument();
  });

  it("moves meals into included for the food tour only", () => {
    const { rerender } = render(<TourInclusions lang="en" includeMeals />);
    const food = getTourInclusionsCopy("en", { includeMeals: true });
    expect(food.included).toContain("Meals");
    expect(food.excluded).not.toContain("Meals");
    expect(screen.getByText("Meals")).toBeInTheDocument();

    rerender(<TourInclusions lang="en" />);
    expect(getTourInclusionsCopy("en").excluded).toContain("Meals");
    expect(getTourInclusionsCopy("en").included).not.toContain("Meals");
  });

  it("shows included and excluded copy in Spanish", () => {
    render(<TourInclusions lang="es" />);
    expect(screen.getByRole("heading", { name: tourInclusionsCopy.es.heading })).toBeInTheDocument();
    expect(screen.getByText("Incluido")).toBeInTheDocument();
    expect(screen.getByText("No incluido")).toBeInTheDocument();
    expect(screen.getByText(/importe completo se paga en el momento de la reserva/i)).toBeInTheDocument();
    expect(screen.queryByText(/depósito del 50%/i)).not.toBeInTheDocument();
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

  it("emits a single FAQPage JSON-LD that includes extra questions", () => {
    const { container } = render(
      <MemoryRouter>
        <TourCommonFaq
          lang="en"
          extraFaqs={[{ question: "Tour-specific Q?", answer: "Tour-specific A." }]}
        />
      </MemoryRouter>
    );
    const scripts = [...container.querySelectorAll('script[type="application/ld+json"]')];
    expect(scripts).toHaveLength(1);
    const data = JSON.parse(scripts[0].textContent || "{}");
    expect(data["@type"]).toBe("FAQPage");
    const names = data.mainEntity.map((item: { name: string }) => item.name);
    expect(names).toContain("Tour-specific Q?");
    expect(names).toContain("What's the cancellation policy?");
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

describe("tour page FAQPage uniqueness", () => {
  it("does not hardcode a second FAQPage schema outside TourCommonFaq", () => {
    const files = [
      "src/pages/TourDetail.tsx",
      "src/pages/tours/TokyoFoodTour.tsx",
      "src/pages/tours/TokyoNightTour.tsx",
      "src/pages/es/tours/EsAsakusa.tsx",
      "src/pages/es/tours/EsYanaka.tsx",
      "src/pages/es/tours/EsShibuyaHarajuku.tsx",
      "src/pages/es/tours/EsTsukijiGinza.tsx",
      "src/pages/es/tours/EsImperialPalace.tsx",
      "src/pages/es/tours/EsCustom.tsx",
      "src/pages/es/tours/EsKamakura.tsx",
      "src/pages/es/tours/EsHakone.tsx",
      "src/pages/es/tours/EsNikko.tsx",
    ];
    for (const file of files) {
      const src = readFileSync(file, "utf8");
      expect(src, file).not.toMatch(/"@type":\s*"FAQPage"/);
      expect(src, file).toContain("TourCommonFaq");
    }
    const common = readFileSync("src/components/tours/TourCommonFaq.tsx", "utf8");
    expect(common).toContain('"@type": "FAQPage"');
  });
});

import { expect, test } from "@playwright/test";

async function revealStickyBar(page: import("@playwright/test").Page) {
  await page.evaluate(() => window.scrollTo(0, 1400));
}

test.describe("English tour page", () => {
  test("sticky CTA goes to English contact with tour query", async ({ page }) => {
    await page.goto("/tours/asakusa");
    await revealStickyBar(page);
    const cta = page.locator('[data-cta="book-now-tour-sticky"]');
    await expect(cta).toBeVisible();
    await expect(cta).toHaveText(/Check availability/i);
    await expect(cta).toHaveAttribute("href", "/contact?tour=asakusa#inquiry-form");
    await expect(cta).not.toHaveText(/Book Now/i);
  });

  test("includes, excludes, trust, and common FAQ are visible", async ({ page }) => {
    await page.goto("/tours/asakusa");
    await expect(page.getByRole("heading", { name: /What's included in the fee/i })).toBeVisible();
    await expect(page.getByText("Licensed guide service")).toBeVisible();
    await expect(page.getByText("Admission fees")).toBeVisible();
    await expect(page.getByText(/full amount is due at booking time/i)).toBeVisible();
    await expect(page.getByText(/50% deposit/i)).toHaveCount(0);
    await expect(page.getByText("The licensed guide's own transport on the day")).toBeVisible();
    await expect(page.getByText(/not included in any tour/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: /Who designs the day, who leads it/i })).toBeVisible();
    await expect(page.getByText(/Certified licensed guides lead the tour on the day/i)).toBeVisible();
    await expect(page.getByText(/What's the cancellation policy\?/)).toBeVisible();
    await expect(page.getByText(/What happens if it rains\?/)).toBeVisible();
    await expect(page.getByText(/Can we bring children\?/)).toBeVisible();
  });
});

test.describe("Spanish tour page", () => {
  test("sticky CTA is Spanish and does not use English Book Now /contact", async ({ page }) => {
    await page.goto("/es/tours/asakusa");
    await revealStickyBar(page);
    const cta = page.locator('[data-cta="book-now-tour-sticky"]');
    await expect(cta).toBeVisible();
    await expect(cta).toHaveText(/Consultar disponibilidad/i);
    await expect(cta).toHaveAttribute("href", "/es/contact?tour=asakusa#inquiry-form");
    await expect(cta).not.toHaveText(/Book Now/i);
    const href = await cta.getAttribute("href");
    expect(href?.startsWith("/contact")).toBe(false);
  });

  test("includes, excludes, trust, and common FAQ stay in Spanish", async ({ page }) => {
    await page.goto("/es/tours/asakusa");
    await expect(page.getByRole("heading", { name: /Qué incluye la tarifa/i })).toBeVisible();
    await expect(page.getByText("Servicio de guía certificado")).toBeVisible();
    await expect(page.getByText("No incluido", { exact: true })).toBeVisible();
    await expect(page.getByText(/importe completo se paga en el momento de la reserva/i)).toBeVisible();
    await expect(page.getByText(/depósito del 50%/i)).toHaveCount(0);
    await expect(page.getByRole("heading", { name: /Quién diseña el itinerario y quién acompaña/i })).toBeVisible();
    await expect(page.getByText("¿Cuál es la política de cancelación?")).toBeVisible();
    await expect(page.getByText("¿Qué pasa si llueve?")).toBeVisible();
    await expect(page.getByText("¿Se puede ir con niños?")).toBeVisible();
    await expect(page.getByRole("heading", { name: /Preguntas frecuentes/i })).toHaveCount(1);
  });
});

test.describe("Food tour meals and single FAQPage", () => {
  test("food tour lists meals as included and has one FAQPage", async ({ page }) => {
    await page.goto("/tours/tokyo-food-tour");
    await expect(page.getByText("Meals", { exact: true }).first()).toBeVisible();
    await expect(page.getByText(/Meal costs are included in the tour price/i)).toBeVisible();
    await expect(page.getByText(/Food costs are not included/i)).toHaveCount(0);
    const html = await page.content();
    const faqPages = html.match(/"@type":\s*"FAQPage"/g) || [];
    expect(faqPages).toHaveLength(1);
  });

  test("English and Spanish tour templates emit one FAQPage each", async ({ page }) => {
    await page.goto("/tours/asakusa");
    expect((await page.content()).match(/"@type":\s*"FAQPage"/g) || []).toHaveLength(1);
    await page.goto("/es/tours/asakusa");
    expect((await page.content()).match(/"@type":\s*"FAQPage"/g) || []).toHaveLength(1);
  });
});

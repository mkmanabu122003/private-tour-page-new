import { expect, test } from "@playwright/test";

test.describe("Trip-prep hub", () => {
  test("English hub: disclosure, own-tour CTA above /go/, thanks-page link target exists", async ({
    page,
  }) => {
    const response = await page.goto("/prepare-your-trip");
    expect(response?.ok()).toBeTruthy();
    await expect(page.getByRole("heading", { name: /Prepare your Tokyo trip/i })).toBeVisible();
    await expect(page.locator("[data-affiliate-disclosure]")).toHaveCount(2);

    const tourBox = page.locator("[data-hub-tour-cta]");
    await expect(tourBox).toBeVisible();
    await expect(tourBox.getByRole("link", { name: /See private tours/i })).toHaveAttribute(
      "href",
      "/tours",
    );

    const firstGo = page.locator('a[href*="/go/"]').first();
    await expect(firstGo).toBeVisible();
    const tourY = (await tourBox.boundingBox())?.y ?? 0;
    const goY = (await firstGo.boundingBox())?.y ?? 0;
    expect(tourY).toBeLessThan(goY);
    await expect(page.getByText(/strongly recommend travel insurance/i)).toBeVisible();
    const photos = page.locator("[data-affiliate-image]");
    await expect(photos).toHaveCount(5);
    const firstPhoto = photos.first();
    await expect(firstPhoto).toBeVisible();
    const photoY = (await firstPhoto.boundingBox())?.y ?? 0;
    expect(tourY).toBeLessThan(photoY);
    await expect(firstPhoto).toHaveAttribute("src", "/images/affiliates/esim-hero.webp");
    await firstPhoto.scrollIntoViewIfNeeded();
    await expect.poll(async () => firstPhoto.evaluate((el) => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);

    const thanks = await page.goto("/thank-you");
    expect(thanks?.ok()).toBeTruthy();
    await expect(page.getByRole("link", { name: /Trip prep guide/i })).toHaveAttribute(
      "href",
      "/prepare-your-trip",
    );
  });

  test("Spanish hub and Guruwalk landing stay in Spanish", async ({ page }) => {
    const hub = await page.goto("/es/prepara-tu-viaje");
    expect(hub?.ok()).toBeTruthy();
    await expect(page.getByRole("heading", { name: /Preparen su viaje a Tokio/i })).toBeVisible();
    await expect(page.locator("[data-hub-tour-cta] a", { hasText: /Ver tours privados/i })).toHaveAttribute(
      "href",
      "/es/tours",
    );
    await expect(page.locator('a[href^="/es/go/"]').first()).toBeVisible();
    await expect(page.getByText(/vosotros/i)).toHaveCount(0);
    await expect(page.getByText(/recomendamos encarecidamente/i)).toBeVisible();
    await expect(page.locator("[data-affiliate-image]")).toHaveCount(5);
    await expect(page.locator("[data-affiliate-image]").first()).toHaveAttribute(
      "alt",
      /eSIM para Japón/i,
    );

    const landing = await page.goto("/es/gracias-asakusa");
    expect(landing?.ok()).toBeTruthy();
    const robots = await page.locator('meta[name="robots"]').getAttribute("content");
    expect(robots).toMatch(/noindex/i);
    await expect(page.getByRole("link", { name: /Tour privado por Asakusa/i })).toHaveAttribute(
      "href",
      "/es/tours/asakusa",
    );
    await expect(page.getByRole("link", { name: /Guía para preparar el viaje/i })).toHaveAttribute(
      "href",
      "/es/prepara-tu-viaje",
    );
    await expect(page.getByText(/Guruwalk/i)).toHaveCount(0);

    const thanks = await page.goto("/es/thank-you");
    expect(thanks?.ok()).toBeTruthy();
    await expect(page.getByRole("link", { name: /Guía para preparar el viaje/i })).toHaveAttribute(
      "href",
      "/es/prepara-tu-viaje",
    );
  });
});

test.describe("/go/ fallback", () => {
  test("TODO_ EN slug 302s (or lands) on the trip-prep hub", async ({ page, request }) => {
    const res = await request.get("/go/japan-wireless-esim", { maxRedirects: 0 });
    const status = res.status();
    if (status === 302 || status === 301) {
      const loc = res.headers()["location"] || "";
      expect(loc).toMatch(/prepare-your-trip/);
    } else {
      await page.goto("/go/japan-wireless-esim");
      await expect(page).toHaveURL(/prepare-your-trip/);
    }
  });

  test("TODO_ ES slug 302s (or lands) on the Spanish hub", async ({ page, request }) => {
    const res = await request.get("/es/go/japan-wireless-esim", { maxRedirects: 0 });
    const status = res.status();
    if (status === 302 || status === 301) {
      const loc = res.headers()["location"] || "";
      expect(loc).toMatch(/prepara-tu-viaje/);
    } else {
      await page.goto("/es/go/japan-wireless-esim");
      await expect(page).toHaveURL(/prepara-tu-viaje/);
    }
  });

  test("unknown slug also falls back to the hub", async ({ request, page }) => {
    const res = await request.get("/go/this-slug-does-not-exist", { maxRedirects: 0 });
    const status = res.status();
    if (status === 302 || status === 301) {
      expect(res.headers()["location"] || "").toMatch(/prepare-your-trip/);
    } else {
      await page.goto("/go/this-slug-does-not-exist");
      await expect(page).toHaveURL(/prepare-your-trip/);
    }
  });

  test("japan-wireless-wifi 302s to the live Pocket WiFi URL", async ({ request }) => {
    const live = "https://www.japan-wireless.com/?via=manabu";
    const en = await request.get("/go/japan-wireless-wifi", { maxRedirects: 0 });
    expect(en.status()).toBe(302);
    expect(en.headers()["location"]).toBe(live);
    const es = await request.get("/es/go/japan-wireless-wifi", { maxRedirects: 0 });
    expect(es.status()).toBe(302);
    expect(es.headers()["location"]).toBe(live);
  });
});

test.describe("affiliate_click", () => {
  test("clicking a /go/ link on the hub fires affiliate_click", async ({ page }) => {
    await page.goto("/prepare-your-trip");
    await page.evaluate(() => {
      const w = window as unknown as {
        __gaEvents: unknown[];
        gtag?: (...args: unknown[]) => void;
      };
      w.__gaEvents = [];
      const orig = w.gtag;
      w.gtag = (...args: unknown[]) => {
        w.__gaEvents.push(args);
        orig?.(...args);
      };
    });
    const link = page.locator('a[data-affiliate-slug="japan-wireless-esim"]');
    await expect(link).toBeVisible();
    await link.evaluate((el) => {
      el.addEventListener("click", (e) => e.preventDefault(), true);
    });
    await link.click();
    const events = await page.evaluate(
      () => (window as unknown as { __gaEvents: unknown[] }).__gaEvents,
    );
    const hit = (events as unknown[][]).find(
      (args) => args[0] === "event" && args[1] === "affiliate_click",
    );
    expect(hit).toBeTruthy();
    const params = hit?.[2] as Record<string, string>;
    expect(params.slug).toBe("japan-wireless-esim");
    expect(params.category).toBe("esim");
    expect(params.page_path).toContain("prepare-your-trip");
    expect(params.lang).toBe("en");
  });
});

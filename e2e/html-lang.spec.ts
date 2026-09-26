import { expect, test } from "@playwright/test";

test.describe("<html lang>", () => {
  test("static HTML declares es on Spanish pages and en on English ones", async ({ request }) => {
    for (const [path, lang] of [
      ["/", "en"],
      ["/es", "es"],
      ["/es/blog", "es"],
    ] as const) {
      const body = await (await request.get(path)).text();
      expect(body, path).toContain(`<html lang="${lang}">`);
    }
  });

  test("follows client-side navigation between languages", async ({ page }) => {
    await page.goto("/es");
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await page.evaluate(() => {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });
});

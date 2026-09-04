import { expect, test } from "@playwright/test";

/**
 * DOM/navigation only. Does not POST to Netlify Forms (no live inbox / Slack noise).
 */

test.describe("EN contact form", () => {
  test("shows expected fields and HTML5 required validation", async ({ page }) => {
    await page.goto("/contact");

    const form = page.locator("#inquiry-form form");
    await expect(form).toBeVisible();
    await expect(form).toHaveAttribute("name", "contact");

    await expect(form.locator("#name")).toHaveAttribute("required", "");
    await expect(form.locator("#email")).toHaveAttribute("required", "");
    await expect(form.locator("#date")).toHaveAttribute("required", "");
    await expect(form.locator("#adults")).toHaveAttribute("required", "");
    await expect(form.locator("#country")).not.toHaveAttribute("required");
    await expect(form.locator("#children")).not.toHaveAttribute("required");
    await expect(form.locator("#city")).not.toHaveAttribute("required");
    await expect(form.locator("#language")).not.toHaveAttribute("required");
    await expect(form.locator("#tourType")).not.toHaveAttribute("required");
    await expect(form.locator("#message")).not.toHaveAttribute("required");

    await expect(form.locator("#language")).toHaveValue("en");
    await expect(page.getByRole("button", { name: /Send inquiry/i })).toBeVisible();

    await page.getByRole("button", { name: /Send inquiry/i }).click();
    const nameMissing = await form.locator("#name").evaluate((el: HTMLInputElement) => el.validity.valueMissing);
    expect(nameMissing).toBe(true);
    await expect(page).toHaveURL(/\/contact/);
  });

  test("prefills tour from the query string", async ({ page }) => {
    await page.goto("/contact?tour=asakusa#inquiry-form");
    await expect(page.locator("#inquiry-form form #tourType")).toHaveValue("asakusa");
  });
});

test.describe("ES contact form", () => {
  test("stays in Spanish with expected fields and required validation", async ({ page }) => {
    await page.goto("/es/contact");

    const form = page.locator("#inquiry-form form");
    await expect(form).toBeVisible();
    await expect(form).toHaveAttribute("name", "contact-es");
    await expect(page.getByLabel("Nombre *")).toBeVisible();
    await expect(page.getByLabel("Correo electrónico *")).toBeVisible();
    await expect(page.getByLabel("Fecha o período deseado *")).toBeVisible();
    await expect(page.getByLabel("Adultos *")).toBeVisible();
    await expect(page.getByLabel("Niños")).toBeVisible();
    await expect(form.locator("#language")).toHaveValue("es");
    await expect(page.getByRole("button", { name: /Enviar consulta/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Send inquiry/i })).toHaveCount(0);

    await page.getByRole("button", { name: /Enviar consulta/i }).click();
    const nameMissing = await form.locator("#name").evaluate((el: HTMLInputElement) => el.validity.valueMissing);
    expect(nameMissing).toBe(true);
    await expect(page).toHaveURL(/\/es\/contact/);
  });

  test("prefills tour from the query string on the ES form", async ({ page }) => {
    await page.goto("/es/contact?tour=asakusa#inquiry-form");
    await expect(page.locator("#inquiry-form form #tourType")).toHaveValue("asakusa");
  });
});

test.describe("Thank-you routes", () => {
  test("English thank-you page exists", async ({ page }) => {
    const response = await page.goto("/thank-you");
    expect(response?.ok()).toBeTruthy();
    await expect(page.getByRole("heading", { name: /Thanks\. The request is in\./ })).toBeVisible();
    await expect(page.getByRole("link", { name: /Browse tours/i })).toHaveAttribute("href", "/tours");
    await expect(page.getByRole("main").getByRole("link", { name: /^FAQ$/i })).toHaveAttribute("href", "/faq");
  });

  test("Spanish thank-you page exists", async ({ page }) => {
    const response = await page.goto("/es/thank-you");
    expect(response?.ok()).toBeTruthy();
    await expect(page.getByRole("heading", { name: /Gracias\. Ya llegó la solicitud\./ })).toBeVisible();
    await expect(page.getByRole("link", { name: /Ver tours/i })).toHaveAttribute("href", "/es/tours");
    await expect(page.getByRole("main").getByRole("link", { name: /Preguntas frecuentes/i })).toHaveAttribute(
      "href",
      "/es/faq"
    );
  });
});

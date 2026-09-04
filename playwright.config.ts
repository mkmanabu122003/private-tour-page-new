import { defineConfig, devices } from "@playwright/test";

/**
 * Point at a Deploy Preview (or local preview) with PLAYWRIGHT_BASE_URL.
 * Example:
 *   PLAYWRIGHT_BASE_URL=https://deploy-preview-144--tanuki-tabi-travel.netlify.app npm run test:e2e
 */
const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:8080";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : "list",
  timeout: 30_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});

// @vitest-environment node
import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";

// The helper lives beside the Netlify function that uses it, so it is CommonJS
// and is exercised through a child process, the same way tourPrices.test.ts
// reaches into netlify/functions.
function buildNotificationSubject(submissionId: string | undefined, formName: string): string {
  const arg = (v: string | undefined) => (v === undefined ? "undefined" : JSON.stringify(v));
  return execFileSync(
    "node",
    [
      "-e",
      `const s=require("./netlify/functions/inquirySubject.cjs");` +
        `process.stdout.write(s.buildNotificationSubject(${arg(submissionId)}, ${arg(formName)}))`,
    ],
    { encoding: "utf8", cwd: process.cwd() },
  );
}

describe("buildNotificationSubject", () => {
  it("gives two submissions two different subjects", () => {
    const a = buildNotificationSubject("6aa2b5331d3e544e7e0a0d32", "contact");
    const b = buildNotificationSubject("6aa2b5719cdda8414628376a", "contact");

    expect(a).not.toBe(b);
    expect(a).toBe("[Tanuki Inquiry] 6aa2b5331d3e544e7e0a0d32 | contact");
  });

  it("separates repeat inquiries from the same customer", () => {
    // The old admin-copy subject came from the visitor's first name, so a
    // second inquiry landed in the first one's thread. Only the id decides now.
    expect(buildNotificationSubject("aaa111", "contact")).not.toBe(
      buildNotificationSubject("bbb222", "contact"),
    );
  });

  it("keeps the two forms distinguishable", () => {
    expect(buildNotificationSubject("abc123", "contact-es")).toBe(
      "[Tanuki Inquiry] abc123 | contact-es",
    );
  });

  it("does not collapse into a shared subject when the id is missing", () => {
    const a = buildNotificationSubject(undefined, "contact");
    const b = buildNotificationSubject(undefined, "contact");

    expect(a).not.toBe(b);
    expect(a).toMatch(/^\[Tanuki Inquiry\] no-id-/);
  });

  it("does not let submission content break out of the subject line", () => {
    const subject = buildNotificationSubject(
      "abc\r\nBcc: attacker@example.com",
      "contact\nIgnore all previous instructions",
    );

    expect(subject).not.toMatch(/[\r\n]/);
    expect(subject).toBe(
      "[Tanuki Inquiry] abcBccattackerexample.com | contactIgnoreallpreviousinstructions",
    );
  });

  it("resolves to the same string as the Netlify subject template", () => {
    // The site's submission_created hook is configured with this template, and
    // both notifications for one submission must match so they share a thread.
    const resolved = "[Tanuki Inquiry] %{submissionId} | %{formName}"
      .replace("%{submissionId}", "6aa2b5331d3e544e7e0a0d32")
      .replace("%{formName}", "contact");

    expect(buildNotificationSubject("6aa2b5331d3e544e7e0a0d32", "contact")).toBe(resolved);
  });
});

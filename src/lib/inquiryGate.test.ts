// @vitest-environment node
import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";

type Verdict = { ok: true } | { ok: false; reason: string };

// The gate lives beside the Netlify function that uses it, so it is CommonJS
// and is exercised through a child process, like inquirySubject.test.ts.
function assess(data: Record<string, unknown>): Verdict {
  const out = execFileSync(
    "node",
    [
      "-e",
      `const g=require("./netlify/functions/inquiryGate.cjs");` +
        `process.stdout.write(JSON.stringify(g.assessSubmission(${JSON.stringify(data)})))`,
    ],
    { encoding: "utf8", cwd: process.cwd() },
  );
  return JSON.parse(out) as Verdict;
}

// What the real form sends, with the fields it marks required filled in.
const realInquiry = {
  name: "Jeremy Birkinshaw",
  email: "jmbirk0904@yahoo.com",
  country: "United States",
  tourType: "custom",
  date: "27th October 2026",
  adults: "2",
  children: "0",
  groupSize: "2 adults, 0 children",
  city: "Sarasota",
  language: "en",
  message: "We only have 2 full days in Tokyo so want to cover as much as possible.",
};

describe("assessSubmission", () => {
  it("accepts a real inquiry", () => {
    expect(assess(realInquiry)).toEqual({ ok: true });
  });

  it("accepts an inquiry that leaves every optional field empty", () => {
    expect(
      assess({
        name: "Catalina",
        email: "cataeg_col@hotmail.com",
        date: "April 2027",
        adults: "3",
        children: "",
        country: "",
        city: "",
        tourType: "",
        message: "",
      }),
    ).toEqual({ ok: true });
  });

  it("rejects the 2026-09-16 scanner payloads", () => {
    // Verbatim from the Slack notifications that run produced: only the name
    // field was set, and every other field was empty.
    const probes = [
      "' ORDER BY 1000-- -",
      "' ORDER BY 1-- -",
      " ORDER BY 1000-- -",
      ") AND (1361740536=1361740536'",
      ") AND (290967165=290967165'",
      "test",
    ];
    for (const name of probes) {
      const verdict = assess({ name, email: "", date: "", adults: "", message: "" });
      expect(verdict.ok, name).toBe(false);
    }
  });

  it("rejects an SQL probe in the name even when the rest of the form is filled", () => {
    expect(assess({ ...realInquiry, name: "' ORDER BY 1000-- -" })).toEqual({
      ok: false,
      reason: "sql_probe_in_name",
    });
    expect(assess({ ...realInquiry, name: ") AND (1361740536=1361740536'" })).toEqual({
      ok: false,
      reason: "sql_probe_in_name",
    });
    expect(assess({ ...realInquiry, name: "x' UNION SELECT 1,2,3-- " })).toEqual({
      ok: false,
      reason: "sql_probe_in_name",
    });
    expect(assess({ ...realInquiry, name: "1' AND SLEEP(5)#" })).toEqual({
      ok: false,
      reason: "sql_probe_in_name",
    });
  });

  it("rejects an SQL probe in the message", () => {
    expect(assess({ ...realInquiry, message: "hi'; DROP TABLE inquiries; --" })).toEqual({
      ok: false,
      reason: "sql_probe_in_message",
    });
  });

  it("does not mistake ordinary names and messages for probes", () => {
    const names = [
      "Andrea Union",
      "Marco A Estrella, strella travel xperiences",
      "José Manuel",
      "Leon T Watkins",
      "Jean-Luc O'Brien",
      "Order Bybee",
      "Select Andersen",
      "Mary-Ann Or",
    ];
    for (const name of names) {
      expect(assess({ ...realInquiry, name }), name).toEqual({ ok: true });
    }

    const messages = [
      "We'd like to select a food tour and order sushi. Is 1 day enough?",
      "Union Square hotel. Arriving Nov 1 -- leaving Nov 4.",
      "Ages 55-70, from 9:30 to 17:00, budget 2=2 people sharing a room.",
      "Can you sleep in on day 2?",
    ];
    for (const message of messages) {
      expect(assess({ ...realInquiry, message }), message).toEqual({ ok: true });
    }
  });

  it("rejects a missing or malformed email", () => {
    expect(assess({ ...realInquiry, email: "" })).toEqual({ ok: false, reason: "missing_email" });
    expect(assess({ ...realInquiry, email: "   " })).toEqual({ ok: false, reason: "missing_email" });
    expect(assess({ ...realInquiry, email: "not-an-email" })).toEqual({
      ok: false,
      reason: "invalid_email",
    });
    expect(assess({ ...realInquiry, email: "a@b" })).toEqual({ ok: false, reason: "invalid_email" });
  });

  it("rejects the required fields the form would never leave empty", () => {
    expect(assess({ ...realInquiry, name: "" })).toEqual({ ok: false, reason: "missing_name" });
    expect(assess({ ...realInquiry, date: "" })).toEqual({ ok: false, reason: "missing_date" });
    expect(assess({ ...realInquiry, adults: "" })).toEqual({ ok: false, reason: "missing_adults" });
    expect(assess({ ...realInquiry, adults: "0" })).toEqual({ ok: false, reason: "invalid_adults" });
    expect(assess({ ...realInquiry, adults: "21" })).toEqual({ ok: false, reason: "invalid_adults" });
    expect(assess({ ...realInquiry, adults: "two" })).toEqual({ ok: false, reason: "invalid_adults" });
  });

  it("rejects an absurdly long name", () => {
    expect(assess({ ...realInquiry, name: "A".repeat(121) })).toEqual({
      ok: false,
      reason: "name_too_long",
    });
    expect(assess({ ...realInquiry, name: "A".repeat(120) })).toEqual({ ok: true });
  });

  it("survives a payload with no data at all", () => {
    expect(assess({})).toEqual({ ok: false, reason: "missing_email" });
  });
});

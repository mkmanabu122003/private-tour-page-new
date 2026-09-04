import { describe, expect, it } from "vitest";
import {
  OPTIONAL_INQUIRY_FIELDS,
  REQUIRED_INQUIRY_FIELDS,
  composeGroupSize,
  isValidTourValue,
} from "./inquiryForm";

describe("composeGroupSize", () => {
  it("joins adults and children into the hidden Netlify field value", () => {
    expect(composeGroupSize("2", "1")).toBe("2 adults, 1 children");
  });

  it("treats blank counts as zero", () => {
    expect(composeGroupSize("", "")).toBe("0 adults, 0 children");
    expect(composeGroupSize(" 3 ", "  ")).toBe("3 adults, 0 children");
  });
});

describe("isValidTourValue", () => {
  it("accepts known tour slugs and rejects others", () => {
    expect(isValidTourValue("asakusa")).toBe(true);
    expect(isValidTourValue("hakone-day-trip")).toBe(true);
    expect(isValidTourValue("not-a-tour")).toBe(false);
    expect(isValidTourValue("")).toBe(false);
  });
});

describe("inquiry field lists", () => {
  it("keeps name, email, date, and adults as the required set", () => {
    expect([...REQUIRED_INQUIRY_FIELDS]).toEqual(["name", "email", "date", "adults"]);
  });

  it("keeps message optional", () => {
    expect(OPTIONAL_INQUIRY_FIELDS).toContain("message");
    expect(REQUIRED_INQUIRY_FIELDS).not.toContain("message");
  });
});

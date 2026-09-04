import { describe, expect, it } from "vitest";
import { parseWhatsappNumber } from "./publicEnv";

describe("parseWhatsappNumber", () => {
  it("returns undefined when unset, placeholder, or too short", () => {
    expect(parseWhatsappNumber(undefined)).toBeUndefined();
    expect(parseWhatsappNumber("")).toBeUndefined();
    expect(parseWhatsappNumber("TODO_123456789")).toBeUndefined();
    expect(parseWhatsappNumber("123")).toBeUndefined();
  });

  it("keeps digits only for a real number", () => {
    expect(parseWhatsappNumber("+81 90-1234-5678")).toBe("819012345678");
  });
});

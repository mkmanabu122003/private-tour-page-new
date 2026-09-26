import { describe, expect, it } from "vitest";
import { htmlLangForPath } from "./htmlLang";

describe("htmlLangForPath", () => {
  it("marks /es and everything under it as Spanish", () => {
    expect(htmlLangForPath("/es")).toBe("es");
    expect(htmlLangForPath("/es/blog/japan-rail-pass")).toBe("es");
  });

  it("leaves English paths, including ones merely starting with 'es', as English", () => {
    expect(htmlLangForPath("/")).toBe("en");
    expect(htmlLangForPath("/blog/best-time-to-visit-tokyo")).toBe("en");
    expect(htmlLangForPath("/essentials")).toBe("en");
  });
});

// Every Spanish route lives under /es. prerender.mjs applies the same rule to
// the static HTML; keep the two in step.
export const htmlLangForPath = (pathname: string): "en" | "es" =>
  pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";

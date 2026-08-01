import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p) => path.resolve(__dirname, p);

// ---------------------------------------------------------------------------
// Routes are DERIVED from the app, not hand-maintained.
//
// A hand-written list silently drifts: on 2026-08-01 it had fallen 28 routes
// behind AppRoutes.tsx, so those pages shipped an empty SPA shell to Googlebot
// (18 of them had never once appeared in Search Console) while also emitting 3
// static 404s for routes that no longer existed. Deriving both directions here
// makes that class of drift impossible.
//
//   1. static  — every literal path="..." in AppRoutes.tsx
//   2. dynamic — /tours/:id expanded from the tour registry in TourDetail.tsx
//
// Anything that renders the 404 page aborts the build (see NOT_FOUND_MARKER).
// ---------------------------------------------------------------------------

function deriveRoutes() {
  const appRoutes = fs.readFileSync(resolve("src/AppRoutes.tsx"), "utf-8");
  const tourDetail = fs.readFileSync(resolve("src/pages/TourDetail.tsx"), "utf-8");

  // 1. Literal paths. Skips the "*" catch-all and ":param" routes, which are
  //    either not real URLs or are expanded separately below.
  const staticRoutes = [...appRoutes.matchAll(/path="(\/[^"]*)"/g)]
    .map((m) => m[1])
    .filter((p) => !p.includes("*") && !p.includes(":"));

  // 2. /tours/:id — keys of the tourSchemaData registry, which is the same
  //    source TourDetail uses to decide whether a slug is real.
  const registry = tourDetail.match(
    /const tourSchemaData:[^=]*=\s*\{([\s\S]*?)\n\};/
  );
  if (!registry) {
    throw new Error(
      "prerender: could not locate tourSchemaData in TourDetail.tsx — " +
        "/tours/:id pages would be silently dropped. Fix the pattern before building."
    );
  }
  const tourRoutes = [...registry[1].matchAll(/^\s*"?([a-z0-9-]+)"?:\s*\{/gm)].map(
    (m) => `/tours/${m[1]}`
  );

  const all = [...new Set([...staticRoutes, ...tourRoutes])].sort();
  console.log(
    `Derived ${all.length} routes (${staticRoutes.length} static + ${tourRoutes.length} tour detail pages).`
  );
  return all;
}

// Rendered output containing any of these means the route resolved to a
// "missing" state rather than real content. TourDetail has its own fallback
// separate from the router-level NotFound, so both must be checked — a
// /tours/<slug> present in tourSchemaData but absent from tourData renders the
// former and would otherwise ship as a blank 200 page.
const NOT_FOUND_MARKERS = ["Oops! Page not found", "Tour not found"];

const routes = deriveRoutes();


async function prerender() {
  // Read the built index.html template
  const template = fs.readFileSync(resolve("dist/index.html"), "utf-8");

  // Import the server entry (built by vite build --ssr)
  const { render } = await import("./dist/server/entry-server.js");

  let successCount = 0;
  let errorCount = 0;
  const notFound = [];

  for (const url of routes) {
    try {
      const { html, helmet } = render(url);

      // A route that falls through to NotFound would be written out as a static
      // page returning 200 with 404 content — worse than not shipping it at all.
      if (NOT_FOUND_MARKERS.some((marker) => html.includes(marker))) {
        notFound.push(url);
        continue;
      }

      let page = template;

      // Replace the empty root div with pre-rendered content
      page = page.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Replace helmet-managed head tags if helmet data is available
      if (helmet) {
        const helmetTags = [
          helmet.title.toString(),
          helmet.meta.toString(),
          helmet.link.toString(),
        ]
          .filter(Boolean)
          .join("\n    ");

        // Replace everything between <!--helmet-head--> and <!--/helmet-head-->
        page = page.replace(
          /<!--helmet-head-->[\s\S]*?<!--\/helmet-head-->/,
          `<!--helmet-head-->\n    ${helmetTags}\n    <!--/helmet-head-->`
        );
      }

      // Write the file
      const filePath =
        url === "/"
          ? resolve("dist/index.html")
          : resolve(`dist${url}/index.html`);

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, page);
      successCount++;
      console.log(`  Pre-rendered: ${url}`);
    } catch (e) {
      errorCount++;
      console.error(`  Error pre-rendering ${url}:`, e.message);
    }
  }

  console.log(
    `\nPre-rendering complete: ${successCount} succeeded, ${errorCount} failed out of ${routes.length} routes.`
  );

  if (notFound.length > 0) {
    console.error(
      `\n${notFound.length} route(s) rendered the 404 page and were not written:\n` +
        notFound.map((u) => `  ${u}`).join("\n") +
        "\nRemove the stale <Route> or fix the component before shipping."
    );
  }

  if (errorCount > 0 || notFound.length > 0) {
    process.exit(1);
  }
}

prerender();

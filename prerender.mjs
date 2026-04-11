import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p) => path.resolve(__dirname, p);

// All routes to prerender (static routes only; dynamic :id routes need explicit entries)
const routes = [
  "/",
  "/about",
  "/tours",
  "/tours/asakusa",
  "/tours/yanaka",
  "/tours/shibuya-harajuku",
  "/tours/tsukiji-ginza",
  "/tours/imperial-palace",
  "/tours/custom",
  "/tours/kamakura-day-trip",
  "/tours/hakone-day-trip",
  "/tours/nikko-day-trip",
  "/tours/tokyo-food-tour",
  "/tours/tokyo-night-tour",
  "/contact",
  "/faq",
  "/blog",
  "/blog/tokyo-3-day-itinerary",
  "/blog/is-it-worth-hiring-a-tour-guide-in-tokyo",
  "/blog/kamakura-vs-hakone-vs-nikko-day-trip",
  "/blog/asakusa-guide-what-to-see",
  "/blog/shibuya-harajuku-guide",
  "/blog/shinjuku-guide",
  "/blog/tsukiji-guide-food-lover",
  "/blog/best-time-to-visit-tokyo",
  "/blog/japan-temple-shrine-etiquette",
  "/blog/asakusa-guide",
  "/blog/japan-rail-pass-worth-it",
  "/blog/kamakura-day-trip-from-tokyo",
  "/blog/kawagoe-day-trip-from-tokyo",
  "/blog/licensed-tour-guide-japan",
  "/blog/nikko-day-trip-from-tokyo",
  "/blog/old-tokyo-shitamachi",
  "/blog/ramen-guide-tokyo",
  "/blog/senso-ji-most-visited-temple",
  "/blog/sushi-guide-tokyo",
  "/blog/tipping-in-japan",
  "/blog/tokyo-hidden-gems",
  "/blog/tokyo-itinerary-5-days",
  "/blog/tokyo-on-a-budget",
  "/blog/tsukiji-market-guide",
  "/blog/vegetarian-food-tour-tokyo",
  "/blog/yanaka-tokyo-walking-route",
  "/blog/yanaka-walking-tour-guide",
  "/blog/yokohama-day-trip-from-tokyo",
  "/blog/tokyo-private-tour-guide-cost",
  "/blog/tokyo-with-kids-family-tour",
  "/blog/what-to-expect-private-tour-tokyo",
  "/blog/hakone-day-trip-guide-vs-solo",
  "/blog/tsukiji-to-ginza-food-walk",
  "/blog/first-time-tokyo-local-guide",
  "/blog/tokyo-cherry-blossom-guide",
  "/blog/tsukiji-vs-toyosu",
  // Spanish pages
  "/es",
  "/es/tours",
  "/es/tours/asakusa",
  "/es/tours/yanaka",
  "/es/tours/shibuya-harajuku",
  "/es/tours/tsukiji-ginza",
  "/es/tours/imperial-palace",
  "/es/tours/kamakura-day-trip",
  "/es/tours/hakone-day-trip",
  "/es/tours/nikko-day-trip",
  "/es/tours/custom",
  "/es/contact",
  "/es/about",
  "/es/faq",
  // Spanish blog
  "/es/blog",
  "/es/blog/itinerario-tokio-3-dias",
  "/es/blog/guia-asakusa",
  "/es/blog/guia-shibuya-harajuku",
  "/es/blog/guia-shinjuku",
  "/es/blog/guia-tsukiji",
  "/es/blog/mejor-epoca-visitar-tokio",
  "/es/blog/etiqueta-templos-santuarios",
  "/es/blog/vale-la-pena-contratar-guia",
  "/es/blog/comparativa-excursiones",
  "/es/blog/monte-fuji-desde-tokio",
  "/es/blog/propinas-en-japon",
  "/es/blog/que-se-come-en-japon",
  "/es/blog/mercado-tsukiji-tokio",
  "/es/blog/comida-callejera-tokio",
  "/es/blog/que-comer-en-japon",
  "/es/blog/japan-rail-pass-vale-la-pena",
  "/es/blog/templos-famosos-japon",
  "/es/blog/itinerario-tokio-5-dias",
  "/es/blog/monte-fuji-se-ve-desde-tokio",
  "/es/blog/excursion-nikko-desde-tokio",
  "/es/blog/kamakura-desde-tokio",
  "/es/blog/yanaka-tokio-itinerario",
  "/es/blog/guia-licencia-oficial-japon",
  "/es/blog/asakusa-tokio-guia",
  "/es/blog/tsukiji-2026",
  "/es/blog/shitamachi-tokio",
  "/es/blog/cuanto-cuesta-guia-privado-tokio",
  "/es/blog/vale-la-pena-guia-privado-tokio",
  "/es/blog/primera-vez-tokio-guia-local",
  "/es/blog/tour-gastronomico-tokio",
  "/es/blog/cerezos-en-flor-tokio",
  "/es/blog/tesoros-ocultos-tokio",
  "/es/blog/ruta-gastronomica-tsukiji-ginza",
  "/es/blog/excursion-hakone-desde-tokio",
  "/es/blog/tsukiji-vs-toyosu",
  "/es/blog/sensoji-templo-mas-visitado",
  "/es/blog/tokio-con-ninos-tour-familiar",
  "/es/blog/tour-vegetariano-tokio",
  "/es/blog/excursion-kawagoe-desde-tokio",
  "/es/blog/excursion-yokohama-desde-tokio",
  "/es/blog/guia-ramen-tokio",
  "/es/blog/tokio-con-presupuesto",
  "/es/blog/que-esperar-tour-privado-tokio",
  "/es/blog/guia-asakusa-completa",
];

async function prerender() {
  // Read the built index.html template
  const template = fs.readFileSync(resolve("dist/index.html"), "utf-8");

  // Import the server entry (built by vite build --ssr)
  const { render } = await import("./dist/server/entry-server.js");

  let successCount = 0;
  let errorCount = 0;

  for (const url of routes) {
    try {
      const { html, helmet } = render(url);

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

      // Write the file.
      // Root (/) → dist/index.html (required by Netlify).
      // All other routes → dist/{path}.html (flat .html files, not directories).
      // This avoids directory auto-redirect loops with the trailing slash rule.
      const filePath =
        url === "/"
          ? resolve("dist/index.html")
          : resolve(`dist${url}.html`);

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

  if (errorCount > 0) {
    process.exit(1);
  }
}

prerender();

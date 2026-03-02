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

  if (errorCount > 0) {
    process.exit(1);
  }
}

prerender();

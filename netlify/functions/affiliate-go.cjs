/**
 * /go/:slug and /es/go/:slug → 302.
 * Netlify rewrites those paths here (see netlify.toml). Placeholder TODO_
 * URLs and unknown slugs fall back to the trip-prep hub.
 */
const { resolveGoRedirect } = require("./affiliateRedirect.cjs");

exports.handler = async (event) => {
  const params = event.queryStringParameters || {};
  const slug = params.slug || "";
  const lang = params.lang === "es" ? "es" : "en";
  const pathname = lang === "es" ? `/es/go/${slug}` : `/go/${slug}`;
  const location = resolveGoRedirect(pathname);

  return {
    statusCode: 302,
    headers: {
      Location: location,
      "Cache-Control": "public, max-age=60",
    },
  };
};

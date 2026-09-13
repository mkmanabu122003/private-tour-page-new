/**
 * /go/:slug and /es/go/:slug → 302.
 * Netlify rewrites those paths here (see netlify.toml). Placeholder TODO_
 * URLs and unknown slugs fall back to the trip-prep hub.
 */
const { pathnameFromEvent, resolveGoRedirect } = require("./affiliateRedirect.cjs");

exports.handler = async (event) => {
  const location = resolveGoRedirect(pathnameFromEvent(event));

  return {
    statusCode: 302,
    headers: {
      Location: location,
      "Cache-Control": "public, max-age=60",
    },
  };
};

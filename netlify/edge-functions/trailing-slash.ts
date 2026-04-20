import type { Context } from "https://edge.netlify.com";

export default async (request: Request, _context: Context) => {
  const url = new URL(request.url);
  const { pathname, search } = url;

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const stripped = pathname.replace(/\/+$/, "");
    url.pathname = stripped;
    return Response.redirect(url.toString(), 301);
  }

  return;
};

export const config = {
  path: "/*",
};

import type { ReactNode } from "react";
import { goPath, type AffiliateLang } from "@/data/affiliates";

interface AffiliateLinkProps {
  slug: string;
  lang?: AffiliateLang;
  children: ReactNode;
  className?: string;
}

/**
 * Same-origin /go/:slug (or /es/go/:slug). Plain <a>, not React Router Link,
 * so Netlify (and the Vite preview middleware) can issue a 302.
 *
 * rel="sponsored nofollow": the href is same-origin, but /go/ answers with a
 * 302 to a paid partner and Google follows redirects — robots.txt alone does
 * not label the link, it only asks Google not to fetch it.
 *
 * target="_blank": the one real lead on this site is the contact form, so a
 * partner link should not take the reader off the article they were reading.
 * noopener is required with _blank.
 */
export function AffiliateLink({
  slug,
  lang = "en",
  children,
  className = "text-accent hover:underline font-medium",
}: AffiliateLinkProps) {
  return (
    <a
      href={goPath(slug, lang)}
      data-affiliate-slug={slug}
      className={className}
      rel="sponsored nofollow noopener"
      target="_blank"
    >
      {children}
    </a>
  );
}

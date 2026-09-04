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
 */
export function AffiliateLink({
  slug,
  lang = "en",
  children,
  className = "text-accent hover:underline font-medium",
}: AffiliateLinkProps) {
  return (
    <a href={goPath(slug, lang)} data-affiliate-slug={slug} className={className}>
      {children}
    </a>
  );
}

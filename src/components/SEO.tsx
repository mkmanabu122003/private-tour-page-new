import { Helmet } from "react-helmet-async";

interface HreflangEntry {
  lang: string;
  path: string;
}

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  hreflang?: HreflangEntry[];
  breadcrumbs?: BreadcrumbItem[];
}

const BASE_URL = "https://tanuki-tabi-travel.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

const removeTrailingSlash = (p: string) =>
  p === "/" ? p : p.replace(/\/+$/, "");

const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    ...(item.path
      ? { name: item.name, item: `${BASE_URL}${removeTrailingSlash(item.path)}` }
      : { name: item.name }),
  })),
});

export const SEO = ({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  hreflang,
  breadcrumbs,
}: SEOProps) => {
  const canonicalUrl = `${BASE_URL}${removeTrailingSlash(canonicalPath)}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Tanuki Tabi Travel" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Hreflang */}
      {hreflang?.map((entry) => (
        <link
          key={entry.lang}
          rel="alternate"
          hrefLang={entry.lang}
          href={`${BASE_URL}${removeTrailingSlash(entry.path)}`}
        />
      ))}

      {/* Breadcrumb Schema */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(buildBreadcrumbSchema(breadcrumbs))}
        </script>
      )}
    </Helmet>
  );
};

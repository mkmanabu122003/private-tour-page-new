import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";

export interface BlogArticleHeroProps {
  /** Hero background image (full-bleed) */
  image: string;
  /** Alt text for the hero image */
  imageAlt: string;
  /** Small uppercase eyebrow above the title (e.g. "Planning Your Trip · Tokyo") */
  eyebrow?: string;
  /** Main article title (rendered as h1) */
  title: string;
  /** One-sentence subtitle / lede */
  subtitle?: string;
  /** Author byline (default: Manabu's stock byline) */
  author?: string;
  /** Last-updated string (e.g. "March 2026") */
  date?: string;
  /** Read time (e.g. "10 min read") */
  readTime?: string;
  /** Back-link target (default: /blog or /es/blog) */
  backHref?: string;
  /** Back-link label (default: "Back to Blog") */
  backLabel?: string;
}

/**
 * Standard blog article hero — overlaid title on a full-bleed image.
 * Mirrors the NaritaVsHaneda pilot. Drop into any article inside the
 * <div className="prose-editorial"> wrapper (typography styles need that scope).
 */
export const BlogArticleHero = ({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  author = "Manabu, Licensed Tour Guide",
  date,
  readTime,
  backHref = "/blog",
  backLabel = "Back to Blog",
}: BlogArticleHeroProps) => (
  <section className="relative w-full h-[540px] md:h-[620px] lg:h-[660px] overflow-hidden">
    <img
      src={image}
      alt={imageAlt}
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
      fetchPriority="high"
      width={1600}
      height={900}
    />
    <div
      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/15"
      aria-hidden="true"
    />

    {/* Floating breadcrumb / back link */}
    <div className="absolute top-6 left-0 right-0 z-10">
      <div className="container-section">
        <Link
          to={backHref}
          className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors backdrop-blur-sm bg-black/25 px-3 py-1.5 rounded-md"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>
      </div>
    </div>

    {/* Bottom-aligned hero text */}
    <div className="relative h-full container-section flex flex-col justify-end pb-14 md:pb-16">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-4">
            {eyebrow}
          </p>
        )}
        <h1
          className="text-white"
          style={{ textShadow: "0 2px 32px rgba(0,0,0,0.45)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-xl text-white/85 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
        {(author || date || readTime) && (
          <div className="mt-7 flex items-center flex-wrap gap-x-1 gap-y-2 text-sm text-white/75">
            {author && (
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                By {author}
              </span>
            )}
            {date && (
              <>
                {author && <span className="meta-dot-light"></span>}
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Last updated {date}
                </span>
              </>
            )}
            {readTime && (
              <>
                <span className="meta-dot-light"></span>
                <span>{readTime}</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  </section>
);

export default BlogArticleHero;

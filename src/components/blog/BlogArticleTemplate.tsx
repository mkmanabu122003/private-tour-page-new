/**
 * Blog article template — Editorial Trust format.
 *
 * Copy this file when creating a new blog article, rename it, and adapt the
 * placeholder text. The structure intentionally mirrors NaritaVsHaneda.tsx
 * and TsukijiVsToyosu.tsx so all blog articles look and feel consistent.
 *
 * Conventions enforced by .prose-editorial typography (src/index.css):
 *   - h1, h2, h3 use Cormorant serif at responsive sizes
 *   - body paragraphs at 18px / line-height 1.7
 *   - all Cormorant numerals use lining figures (no descenders)
 *
 * Optional modules (drop in / remove freely):
 *   <div className="quick-decision">           — bordered Quick Decision box
 *   <div className="guide-note-callout">       — Manabu portrait + take
 *   <div className="choice-grid">              — two-column "Choose X / Y if…"
 *   <table className="cost-table">             — comparison bar-chart table
 *   <blockquote className="pull-quote">        — large serif callout
 *   <span className="hl-gold">                 — yellow highlighter on key claim
 *
 * REQUIRED conventions:
 *   - wrap entire article body in <div className="prose-editorial">
 *   - place a <div className="section-eyebrow"><span>Section NN · Title</span></div>
 *     immediately above each <h2>
 *   - wrap FAQ items in <div className="faq-block space-y-N">
 *   - use NO inline className on <h2> / <h3> for typography
 *     (preserve only id / scroll-mt-20 if needed for in-page anchors)
 */

import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { GuideInsiderNote } from "@/components/blog/GuideInsiderNote";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import manabuPortrait from "@/assets/About_page_Manabu_team_photo.webp";

const BlogArticleTemplate = () => {
  return (
    <Layout>
      <SEO
        title="ARTICLE TITLE — keep under 60 chars, include year"
        description="META DESCRIPTION — keep under 155 chars; promise a concrete benefit and call to action."
        canonicalPath="/blog/your-slug"
        hreflang={[
          { lang: "en", path: "/blog/your-slug" },
          { lang: "es", path: "/es/blog/your-slug-es" },
          { lang: "x-default", path: "/blog/your-slug" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Article Short Name" },
        ]}
      />

      <div className="prose-editorial">
        {/* ---------- HERO with overlaid title ---------- */}
        <section className="relative w-full h-[540px] md:h-[620px] lg:h-[660px] overflow-hidden">
          <img
            src="/images/blog/your-hero-image.webp"
            alt="Descriptive alt text for accessibility and SEO"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            width={1600}
            height={900}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/15"
            aria-hidden="true"
          />

          <div className="absolute top-6 left-0 right-0 z-10">
            <div className="container-section">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors backdrop-blur-sm bg-black/25 px-3 py-1.5 rounded-md"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>

          <div className="relative h-full container-section flex flex-col justify-end pb-14 md:pb-16">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-4">
                Category · Topic
              </p>
              <h1
                className="text-white"
                style={{ textShadow: "0 2px 32px rgba(0,0,0,0.45)" }}
              >
                Article Title — Keep It Concrete and Specific
              </h1>
              <p className="mt-6 text-xl text-white/85 leading-relaxed max-w-2xl">
                One-sentence subtitle that promises the article's main payoff.
              </p>
              <div className="mt-7 flex items-center flex-wrap gap-x-1 gap-y-2 text-sm text-white/75">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  By Manabu, Licensed Tour Guide
                </span>
                <span className="meta-dot-light"></span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Last updated MONTH YEAR
                </span>
                <span className="meta-dot-light"></span>
                <span>X min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- ARTICLE BODY ---------- */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">

              {/* Left: Sticky TOC (optional — remove on shorter articles) */}
              <aside className="article-toc hidden lg:block">
                <p className="toc-label">On this page</p>
                <a href="#section-01"><span className="toc-num">01</span><span>Section name</span></a>
                <a href="#section-02"><span className="toc-num">02</span><span>Section name</span></a>
                <a href="#section-faq"><span className="toc-num">N</span><span>FAQ</span></a>
              </aside>

              <article>
                {/* Optional: Quick Decision module — for "Should I X or Y?" articles */}
                <div className="quick-decision">
                  <p className="qd-eyebrow">Quick decision</p>
                  <h2>Your one-line bottom-line answer.</h2>
                  <p>
                    <span className="hl-gold">The single most important fact</span> in two sentences max.
                  </p>
                  <p>
                    The caveat or "but if X, then Y" line.
                  </p>
                </div>

                {/* Intro paragraphs */}
                <p className="text-muted-foreground mb-4">
                  Opening hook — a question, observation, or stat that frames the problem from the reader's perspective.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Why you're qualified to answer it (1 sentence — keep modest).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  What this article will give them concretely.
                </p>

                {/* Optional: Manabu's take callout */}
                <div className="guide-note-callout">
                  <div
                    className="gn-portrait"
                    style={{ backgroundImage: `url(${manabuPortrait})` }}
                  />
                  <div>
                    <p className="gn-label">Manabu's take</p>
                    <h3>One-line opinion that frames the rest of the article.</h3>
                    <p>
                      Two sentences explaining the reasoning briefly.
                    </p>
                  </div>
                </div>

                {/* InlineCTA for the early read */}
                <InlineCTA
                  message="Want a guide who plans this around your specific trip?"
                  linkText="See my private tour options →"
                  href="/tours"
                />

                {/* ---------- SECTION 01 ---------- */}
                <div className="section-eyebrow"><span>Section 01 · Section Title</span></div>
                <h2 id="section-01" className="scroll-mt-20">
                  Section 01 Heading — concrete and specific
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Body paragraph. Use <strong className="text-foreground">bold</strong> for key facts.
                  Use <span className="hl-gold">gold highlighter</span> on at most 2 critical claims per section.
                </p>

                {/* Optional: choice-grid for "Pick A if… / Pick B if…" sections */}
                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">Default for most</p>
                    <h3>Choose Option A if…</h3>
                    <ul>
                      <li>Reason 1</li>
                      <li>Reason 2</li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">Worth it in these cases</p>
                    <h3>Choose Option B if…</h3>
                    <ul>
                      <li>Reason 1</li>
                      <li>Reason 2</li>
                    </ul>
                  </div>
                </div>

                {/* h3 sub-section under h2 */}
                <h3>Sub-section heading</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Body content for the sub-section.
                </p>

                {/* ---------- SECTION 02 — Cost comparison example ---------- */}
                <div className="section-eyebrow"><span>Section 02 · The Real Cost</span></div>
                <h2 id="section-02" className="scroll-mt-20">
                  Cost or comparison heading
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Lead-in sentence describing what the table shows.
                </p>

                {/* Cost-table with bar-chart visualization */}
                <div className="cost-table-cap"><span>Round-trip cost · 2 people</span></div>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Scenario</th>
                        <th>Option A</th>
                        <th>Option B</th>
                        <th>Savings <span className="sub">picking B</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Train<span className="tag">Cheapest</span></td>
                        <td className="bar-cell">¥9,880<span className="bar"><i style={{ width: '100%' }} /></span></td>
                        <td className="bar-cell win">¥2,076<span className="bar"><i style={{ width: '21%' }} /></span></td>
                        <td className="savings">¥7,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Optional: pull-quote */}
                <blockquote className="pull-quote">
                  A short, quotable line — the article's most shareable claim.
                </blockquote>

                {/* Optional: GuideInsiderNote callout */}
                <GuideInsiderNote date="MONTH YEAR">
                  <p>
                    A specific, dated observation from your most recent client experience.
                    This adds "ground truth" credibility that other guides can't replicate.
                  </p>
                </GuideInsiderNote>

                {/* ---------- FAQ ---------- */}
                <div className="section-eyebrow"><span>Section N · FAQ</span></div>
                <h2 id="section-faq" className="scroll-mt-20">
                  Frequently Asked Questions
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">Is X really worth it?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Direct, specific answer. 2-3 sentences max.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">How do I do Y?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Direct, specific answer. 2-3 sentences max.
                    </p>
                  </div>
                </div>

                {/* Closing CTA */}
                <InlineCTA
                  message="Want this guidance applied to your specific Tokyo trip?"
                  linkText="Book a custom Tokyo tour →"
                  href="/tours"
                />
              </article>

              {/* Right: optional sidebar widget(s) */}
              <aside className="article-sidebar hidden lg:flex flex-col gap-6">
                {/* Add inline tour cards, share widget, etc. */}
              </aside>
            </div>
          </div>
        </section>

        {/* Related Tours — keep at very bottom outside prose-editorial styling */}
        <RelatedTourCards />
      </div>
    </Layout>
  );
};

export default BlogArticleTemplate;

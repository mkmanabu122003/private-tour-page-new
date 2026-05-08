# Content Inventory & Audit — 2026-04-24

**Scope**: 9 tour detail pages + 3 top-converting blog posts + 4 low-performing blog posts.
**Data window**: 28 days ending 2026-04-20 (GSC/GA4 from `docs/analytics/raw/`).
**Purpose**: Evidence base for (a) tour-detail LP redesign and (b) losing-article triage.

---

## 1. Baseline numbers

| Metric | 28d recent | 28d prior | Δ |
|---|---|---|---|
| GSC clicks | 296 | 182 | +63% |
| GSC impressions | 133,693 | 58,435 | +129% |
| GSC CTR | 0.22% | 0.31% | −29% |
| GSC avg position | 6.24 | 7.85 | +1.6 pos |
| GA4 users | 467 | 297 | +57% |
| GA4 avg session | 131s | 177s | −26% |
| form_submit (real leads) | 12 | — | — |
| book_now_click | 15 | — | — |
| blog_to_tour_click | **1** | — | broken funnel |

**Desktop CTR 0.11% vs Mobile 1.03%** → desktop impressions being eaten by AI Overviews / Featured Snippets.

---

## 2. Tour detail pages — 9-page audit

### 2.1 Per-tour data (28d)

| Tour | GA4 users | GA4 views | Avg eng (s) | GSC clicks | GSC impr | GSC pos |
|---|---|---|---|---|---|---|
| kamakura-day-trip | 13 | 14 | **955** | 0 | 143 | 24.7 |
| tsukiji-ginza | 11 | 17 | **952** | 0 | 282 | 27.3 |
| hakone-day-trip | 12 | 14 | 683 | 0 | 342 | 7.3 |
| nikko-day-trip | 11 | 11 | 228 | 2 | 526 | 15.9 |
| asakusa | 15 | 18 | 243 | 1 | 94 | 13.2 |
| custom | 9 | 10 | 153 | 1 | 51 | 5.4 |
| yanaka | 8 | 10 | 143 | 2 | 230 | 8.8 |
| shibuya-harajuku | 9 | 10 | 120 | 0 | 32 | 9.1 |
| imperial-palace | 5 | 5 | **5** | 0 | 58 | 10.7 |

**Observations**:
- **Kamakura/Tsukiji/Hakone = 10–16 min dwell time**. These are decision-stage LPs that deserve the best treatment.
- **Imperial-palace = 5 seconds** dwell — immediate bounce; suggests a content/match problem on that page.
- **hakone-day-trip has 342 impressions at position 7.3** but 0 clicks → title/description problem, easy fix.
- Tour detail SEO is marginal overall (2 clicks/28d across 9 pages); these are **conversion pages, not acquisition pages**.

### 2.2 Data completeness in `tourData` (TourDetail.tsx)

| Tour | FAQs | whyGuide | practicalInfo | notIncluded | Testimonials | ES mirror |
|---|---|---|---|---|---|---|
| asakusa | 3 | ❌ | ❌ | ❌ | ❌ | ✅ |
| yanaka | 4 | ❌ | ❌ | ❌ | ❌ | ✅ |
| shibuya-harajuku | 3 | ❌ | ❌ | ❌ | ❌ | ✅ |
| tsukiji-ginza | 4 | ❌ | ❌ | ❌ | ❌ | ✅ |
| imperial-palace | **0** | ❌ | ❌ | ❌ | ❌ | ✅ |
| custom | 3 | ❌ | ❌ | ❌ | ❌ | ✅ |
| kamakura-day-trip | 4 | ✅ | ✅ | ✅ | ❌ | ✅ |
| hakone-day-trip | 4 | ✅ | ✅ | ✅ | ❌ | ✅ |
| nikko-day-trip | 4 | ✅ | ✅ | ✅ | ❌ | ✅ |

**Gaps**:
- **0/9 tours have testimonials** on the detail page. Homepage has 3 generic ones. No tour-specific social proof anywhere.
- **6/9 tours lack whyGuide / practicalInfo / notIncluded** (only day-trips have them).
- **imperial-palace has no FAQs** (and 5s dwell — likely related).
- **FAQ count is thin** — most tours have 3–4 questions; recommended baseline is 6+ (add: "What if it rains?" / "What about dietary needs?" / "Can I pay with credit card?" / "What if I'm late?" / "Is it worth the price?" / "Cancellation policy?").

### 2.3 Structural gaps vs LP best-practice

Against current `TourDetail.tsx` (lines 672–1164):

| # | Gap | Severity | Fix |
|---|---|---|---|
| 1 | No above-the-fold CTA (Hero is image-only; price/Book Now only in sidebar on scroll) | 🔴 | Overlay price + CTA on hero, or put in title section |
| 2 | No tour-specific testimonials | 🔴 | Add `tourTestimonials` Record, 3 reviews per tour near CTA |
| 3 | No tour-specific comparison table (especially for day trips) | 🟡 | Embed mini version of `kamakura-vs-hakone-vs-nikko` table on each day-trip detail page |
| 4 | No links back to related blog articles → root cause of `blog_to_tour_click = 1` | 🔴 | Add `tourRelatedArticles` Record + RelatedArticles block |
| 5 | "Why Go With a Licensed Guide" only exists for day trips | 🟡 | Universalize `whyGuide` across all 9 tours |
| 6 | Mobile sticky bar shows only price + Book Now; no duration/meeting point info | 🟡 | Add info chip row in title section for mobile |
| 7 | FAQ count uneven (0–4) across tours | 🟡 | Standardize 6 mandatory questions per tour |

---

## 3. Winning articles — pattern extraction

### 3.1 The 3 winners (GSC + GA4 28d)

| Article | Clicks | Impr | Pos | GA4 sessions | form_submit-tied CV-events |
|---|---|---|---|---|---|
| `kamakura-vs-hakone-vs-nikko-day-trip` | **77** | 5,245 | 4.5 | 92 | 24 |
| `is-it-worth-hiring-a-tour-guide-in-tokyo` | 8 | 1,469 | 5.7 | 16 | 16 |
| `tokyo-private-tour-guide-cost` | 5 | 1,162 | 5.3 | 5 | 1 |

### 3.2 Common winning patterns

All 3 share:

1. **Direct answer in first paragraph** — not a scenic intro. Cost article starts with "¥40,000–50,000 per group." Worth-it article starts with "Let me be honest: Tokyo is one of the safest cities..."
2. **Visible author credential block** — "Written by Manabu, National Government Licensed Guide Interpreter (全国通訳案内士)" right below H1. This is E-E-A-T signal gold.
3. **Comparison table early** (by H2 section 2 at the latest).
4. **Contextual inline tour links** — e.g., "On my [Asakusa tour](/tours/asakusa), I don't just point out Senso-ji..." (not end-of-article only).
5. **First-person anecdote** — "I get this question on almost every tour..." / "Having guided hundreds of travelers..." (AI-unreplicable).
6. **Interactive element** — Kamakura article uses `DiagnosticTrigger` (day trip finder quiz). This likely drives the high dwell time → high CV.
7. **CTA block at end** linking both `/tours` and `/contact`.
8. **BlogPosting JSON-LD** present.

**Missing from winners (opportunity)**:
- No "sticky sidebar CTA" (contact/tour booking link visible on scroll).
- No TOC (table of contents) for scannability.
- Cost article has only 5 GA4 sessions despite 1,162 impressions at pos 5.3 — under-indexed, likely because title is less direct than the Kamakura comparison.

### 3.3 Winner takeaways for replication

**Format to repeat for new content**:
- `{X} vs {Y}: Which is right for you?` (comparison)
- `Is {X} worth it?` (worth-assessment)
- `How much does {X} cost in 2026?` (pricing)
- Add DiagnosticTrigger quiz where applicable (needs design investment)

---

## 4. Low-performing articles — triage

All 4 use **identical blog structure** to winners (Layout + Hero + author callout + prose). **Structure is not the problem.** Problem is **query-SERP mismatch** — Google answers these queries directly without sending clicks.

### 4.1 Per-article verdict

| Article | Clicks | Impr | Pos | Verdict | Action |
|---|---|---|---|---|---|
| `japan-temple-shrine-etiquette` | 11 | 12,767 | 7.7 | **Keep & optimize** | Add sticky CTA ("Experience real temple etiquette with a licensed guide") + schema.org/HowTo markup for "bow-clap-bow" — aim for featured snippet |
| `tipping-in-japan` | 0 | 691 | 3.0 | **Pivot angle** | Current article is fully SERP-answered. Rewrite angle toward "Tipping a tour guide in Japan" — exact BOFU cluster, aligns with Manabu's business |
| `shinjuku-guide` | 0 | 709 | 8.4 | **Rewrite for BOFU** | File title hints "What a Licensed Guide Actually Shows Clients" — double down on that angle. Current intro buries it. Restructure as `Shinjuku after dark: what to skip / what's worth your 3 hours` |
| `asakusa-guide-what-to-see` | 1 | 1,795 | 13.0 | **Consolidate** | **CRITICAL: duplicate with `/blog/asakusa-guide` — cannibalization** (see §4.2) |

### 4.2 Asakusa cannibalization 🚨

`AppRoutes.tsx:143,149` maps:
- `/blog/asakusa-guide-what-to-see` → `<AsakusaGuide />` (old, pos 13.0, 1 click)
- `/blog/asakusa-guide` → `<AsakusaGuideNew />` (newer file)

Two Asakusa articles from the same domain competing for similar queries. Google penalizes this.

**Recommended resolution**:
1. Pick `/blog/asakusa-guide` as canonical (newer, shorter path, better for SEO)
2. Check if `AsakusaGuideNew.tsx` has all the content from `AsakusaGuide.tsx`; merge if not
3. 301 redirect `/blog/asakusa-guide-what-to-see` → `/blog/asakusa-guide` in `netlify.toml`
4. Remove old route
5. **Estimated impact**: consolidation could lift position 13 → position 5–7, unlocking ~20–30 clicks/month from the 1,795 impressions

### 4.3 Why not noindex?

Temptation: noindex the losers to improve crawl quality. **Do not do this yet** because:
- 691–12,767 impressions are still brand exposure for a micro-brand
- Content quality is equal to winners; the fix is angle/CTA, not deletion
- Etiquette article drives 11 clicks at pos 7.7 — killing it loses that too

Noindex is only justified if (a) AsakusaGuide consolidation doesn't resolve the duplicate issue, or (b) after angle-pivot rewrites still underperform after 60 days.

---

## 5. Cross-cutting findings

### 5.1 Broken funnel: blog → tour page

`blog_to_tour_click = 1` in 28 days. Root causes:
- Winners link to tour pages **inline** but links are plain text underlines, easy to miss.
- Losers have `RelatedTourCards` at bottom but few readers scroll that far.
- No mid-article "in-context" CTA block that visually stands out.

**Fix**: Create `<TourCTABlock />` component that blog articles embed mid-content with a tour thumbnail + CTA. Embed in all articles at the ~50% scroll mark.

### 5.2 Dwell time paradox

Top converting tour pages have huge dwell time (955s Kamakura, 952s Tsukiji) but **0 clicks from organic search**. These visitors arrive via **direct traffic or internal links** (Home / Tours list / Blog). This reinforces:
- Tour details = conversion pages, not acquisition.
- The pipeline is: Blog (organic) → Tour detail (direct/internal) → Contact → Form.
- **Fixing `blog_to_tour_click` is the single highest-leverage change** for the full funnel.

### 5.3 Spanish (/es/) is over-performing per visit

Mexico: 17 sessions → 17 conv-events. Spain: 50 sessions → 15 conv-events. Spanish-language competition is thinner; expanding ES cluster (esp. comparison/cost articles) is cheap leverage.

---

## 6. Next actions (evidence-based priority)

| Priority | Action | Evidence | Effort |
|---|---|---|---|
| 🥇 | **Fix Asakusa cannibalization** (consolidate 2 articles → 1) | pos 13 + duplicate content | ~2h |
| 🥇 | **Design `<TourCTABlock />`** + embed in all blog articles | blog_to_tour_click = 1/28d | Design + impl ~1 week |
| 🥇 | **Tour detail LP standardization** per §2.3 gap list | 7 structural gaps identified | Design + impl ~2 weeks |
| 🥈 | **imperial-palace page** content fix (5s dwell = broken) | 5s avg engagement | ~4h (diagnose + rewrite) |
| 🥈 | **Add testimonials to all 9 tours** (`tourTestimonials` Record) | 0/9 tours have social proof | 1–2 days of data collection |
| 🥈 | **Hakone detail page title/meta rewrite** | pos 7.3, 342 impr, 0 clicks = CTR problem | ~1h |
| 🥉 | **Shinjuku angle pivot** → "what a licensed guide shows" | pos 8.4, 0 clicks | ~4h rewrite |
| 🥉 | **Tipping angle pivot** → "tipping a tour guide in Japan" | pos 3.0, 0 clicks | ~4h rewrite |
| 🥉 | **Temple etiquette: HowTo schema + sticky CTA** | pos 7.7, 11 clicks — optimize without rewrite | ~2h |
| 🥉 | **ES comparison/cost cluster expansion** | Mexico/Spain CVR high | ~1 week |

---

## 7. Open questions

- Do existing guest reviews (for testimonials) live somewhere structured? (Google Business Profile, TripAdvisor, past email) — needed to populate `tourTestimonials`.
- Is `/tours/imperial-palace` broken in some way (image, layout, content) that explains 5s dwell? Needs manual browser check.
- Are GSC "duplicate URL" clusters confirming the trailing-slash issue as real, or is Google auto-consolidating? (Investigate read-only as separate task.)

---

*Generated from `docs/analytics/raw/2026-04-20_28d_*.json` and source code inspection of `src/pages/TourDetail.tsx`, `src/pages/blog/{DayTripComparison,IsItWorthHiringGuide,TokyoPrivateTourGuideCost,TippingInJapan,TempleEtiquette,ShinjukuGuide,AsakusaGuide}.tsx`, `src/AppRoutes.tsx`.*

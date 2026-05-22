---
description: Build a blog article (EN+ES) from an approved brief in seo-pipeline/briefs/. Generates tsx files, updates routes/index/sitemap, runs fact-checks, and creates a feature PR.
---

# Build Article from Brief

You are converting an approved `seo-pipeline/briefs/*.md` brief into actual blog articles (English and Spanish), with full fact-checking, image selection, and route wiring.

## Input

The user invokes this command with a brief path. If no argument is given, scan `seo-pipeline/briefs/` for the most recent file with `status: approved` in its front matter, and use that.

## Process

### Step 1: Load and validate brief

1. Read the brief file at the given path (or auto-discovered approved brief).
2. Parse front matter:
   - `slug`, `slug_es`, `status`, `priority`, `category`
   - `manabu_experience_needed: yes` — if true and the brief still contains the literal placeholder `[ここにManabuさんの実体験エピソードを挿入]`, **STOP** and prompt the user to add Manabu's experience first. Do not generate placeholder content yourself.
3. Verify `status: approved`. If `pending` or `rejected`, **STOP** and ask the user to confirm proceeding.

### Step 2: Fact-check (web search)

For each item in the brief's "Required facts (web search before writing)" checklist:

1. Run `WebSearch` with the appropriate query.
2. Note the source URL and the verified value.
3. If a fact differs from what's implied in the brief, ask the user to confirm before proceeding.

Common facts to verify:
- Prices (always in JPY, tax-included from official source)
- Opening hours, closed days
- Access times (station → destination)
- Policies (visa, JR Pass, etc. — these change yearly)

### Step 3: Image selection

1. Read `seo-pipeline/data/daily/*.json` (most recent) and scan project images:
   ```bash
   find public/images -type f \( -name "*.webp" -o -name "*.jpg" -o -name "*.png" \) > /tmp/all-images.txt
   grep -rhoE '/images/[a-z0-9/_-]+\.(webp|jpg|jpeg|png)' src/ | sort -u > /tmp/used-images.txt
   ```
2. For each H2 section requiring an image:
   - First, look for an unused project image whose filename or location matches the topic
   - If insufficient, download a CC-licensed image from Wikimedia Commons:
     - Find the file's File: page on commons.wikimedia.org
     - Get the full-size URL (not the thumb)
     - Download with `curl -sL -o /tmp/{name}.jpg "{url}"`
     - Convert to WebP: `cwebp -q 82 -resize 1600 0 /tmp/{name}.jpg -o public/images/blog/{name}.webp`
3. **Verify every image URL** with the existence-check script before referencing it in tsx.

### Step 4: Generate EN tsx

1. Use `src/components/blog/BlogArticleTemplate.tsx` as the base structure.
2. Create `src/pages/blog/{PascalCaseSlug}.tsx` with:
   - SEO meta (title ≤60 chars, description ≤155 chars, canonicalPath, hreflang to ES, breadcrumbs)
   - `BlogArticleHero` with verified image
   - `BlogArticleToc` with items matching the brief's H2 outline (use `section-XX-name` id convention)
   - Each section wrapped in `<div className="section-eyebrow"><span>Section NN · Title</span></div>` + `<h2 id="section-NN-name" className="scroll-mt-20">`
   - **Body content**: Write 2000-3000 words following the brief's H2 outline. Lead with Manabu's experience (extracted from the brief, not invented). Use Editorial Trust typography. Internal links from brief.
   - FAQ section with 4-5 questions.
   - Closing CTA.
   - `<RelatedTourCards tourIds={...} />` from the brief.
   - BlogPosting JSON-LD schema.

### Step 5: Generate ES tsx

Mirror EN structure in `src/pages/es/blog/Es{PascalCaseSlug}.tsx`:
- File starts with: `// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing`
- All text in natural Spanish (not machine translation)
- Internal links to ES versions of related articles where available, otherwise EN
- `InlineCTAEs` instead of `InlineCTA`
- `RelatedTourCards` with `lang="es"`
- breadcrumbs with `path: "/es"`, `path: "/es/blog"`
- JSON-LD with `inLanguage: "es"` and canonical URL pointing to `/es/blog/...`

### Step 6: Update routes/index/sitemap

1. **`src/AppRoutes.tsx`**:
   - Add 2 imports (after the existing batch imports near the bottom)
   - Add 2 `<Route>` entries (after existing routes, before the closing tag)

2. **`src/pages/blog/BlogIndex.tsx`**:
   - Append 1 entry to `blogPosts` array (EN only — ES has its own index logic)

3. **`public/sitemap.xml`**:
   - Append 2 `<url>` entries before `</urlset>` with `<lastmod>{today}</lastmod>`

### Step 7: Verify

1. Run `npx tsc --noEmit` — must pass with no errors.
2. Run the image-existence verifier (Python snippet at end of this command).
3. Start dev server if not running: `npm run dev` (background)
4. Curl-test both URLs: should return HTTP 200.

### Step 8: Create feature branch + PR

```bash
git checkout main && git pull
git checkout -b feature/article-{slug}
git add public/images/blog/ \
  src/pages/blog/{PascalCaseSlug}.tsx \
  src/pages/es/blog/Es{PascalCaseSlug}.tsx \
  src/AppRoutes.tsx \
  src/pages/blog/BlogIndex.tsx \
  public/sitemap.xml
git commit -m "$(cat <<'EOF'
seo,content: new article "{EN title}" (EN+ES)

Generated from brief: seo-pipeline/briefs/{brief-filename}

Includes:
- src/pages/blog/{PascalCaseSlug}.tsx (EN, ~{N} lines)
- src/pages/es/blog/Es{PascalCaseSlug}.tsx (ES, marked for native review)
- {N} new image(s) downloaded from Wikimedia Commons (CC BY-SA)
- AppRoutes / BlogIndex / sitemap updated

Manabu experience added by brief author (verified before generation).
Facts verified via web search (sources in PR description).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
git push -u origin feature/article-{slug}

gh pr create --base main --head feature/article-{slug} \
  --title "Article: {EN title}" \
  --body "$(cat <<'EOF'
## Summary

新規記事 (EN + ES) を生成しました。

- **Brief**: seo-pipeline/briefs/{brief-filename}
- **Category**: {category}
- **Target keyword (EN)**: {primary keyword}
- **Estimated CV impact**: {high|medium|low}

## What's included

- `/blog/{slug}` (EN, ~{word_count} words)
- `/es/blog/{slug_es}` (ES, requires native speaker review)
- {N} new image(s) — sources: {source URLs}

## Fact-check sources

- {fact1}: [{source title}]({source url})
- {fact2}: [{source title}]({source url})

## Verified

- [x] TypeScript compiles
- [x] All referenced images exist on disk + return HTTP 200
- [x] Both routes return HTTP 200 on localhost:8080
- [x] Internal links point to existing slugs
- [x] hreflang reciprocal between EN/ES

## Test plan

- [ ] Open both URLs in browser, verify rendering
- [ ] Spot-check facts against PR sources
- [ ] Review Manabu's experience epicodes for tone
- [ ] Approve & merge

🤖 Generated by /build-article from approved brief
EOF
)"
```

### Step 9: Post-merge actions (mention in PR)

Tell the user to:
1. After merge, deployment is automatic.
2. Run indexing request: `python3 seo-pipeline/scripts/request_indexing.py {URL_EN} {URL_ES}` (or manual via GSC, 1/day limit applies).
3. Update brief status: move `seo-pipeline/briefs/{file}.md` to `seo-pipeline/archive/approved/` with a comment line indicating which PR/commit it became.

## Failure modes

- **Brief contains unfilled Manabu placeholder** → STOP, ask user
- **TypeScript fails** → fix and retry, don't commit broken
- **Image 404** → re-verify, swap to alternative, never commit broken refs
- **Slug collision with existing route** → STOP, prompt user to choose new slug
- **Required fact contradiction during web search** → STOP, surface to user

## Optional: Image existence verifier (paste into `/tmp/verify_images.py`)

```python
import re, os, sys
files = sys.argv[1:]
missing = []
for f in files:
    with open(f) as fh: c = fh.read()
    for m in re.finditer(r'(?:image|src)\s*=\s*"(/images/[^"]+)"', c):
        if not os.path.exists('public' + m.group(1)):
            missing.append((f, m.group(1)))
for f, u in missing:
    print(f'MISSING: {u} (in {f})')
sys.exit(1 if missing else 0)
```

Run with:
```bash
python3 /tmp/verify_images.py src/pages/blog/{PascalCaseSlug}.tsx src/pages/es/blog/Es{PascalCaseSlug}.tsx
```

---
date: YYYY-MM-DD
slug: kebab-case-slug
slug_es: kebab-case-slug-es
status: pending  # pending | approved | rejected | needs-changes
priority: medium  # high | medium | low
category: # Decision Helpers | Day Trips | Practical | Neighborhoods | Food & Drink | Seasonal
estimated_word_count: 2000
fact_check_required: yes
manabu_experience_needed: yes
duplicate_risk: low  # low | medium | high (vs existing articles)
competitor_difficulty: medium  # low | medium | high
ai_overview_risk: low  # low | medium | high (zero-click risk)
---

# {{Article Title — EN}}

**Spanish Title**: {{Article Title — ES}}

## Why this article (data-driven rationale)

- **GSC signal**: 「{{query}}」直近28日で 表示 {{n}}、クリック {{n}}、順位 {{n}}（→ ギャップ）
- **既存記事ギャップ**: {{既存articleA}} は {{topic}}を扱うが {{specific aspect}} が薄い／不在
- **想定CV影響**: {{high|medium|low}} — 理由: {{form_submit に直結する判断段階 / 情報収集段階}}
- **競合状況**: 上位は {{competitor1}} と {{competitor2}}。{{差別化の余地 | DR的に勝てるか}}

## Target keyword cluster

- **Primary**: "{{primary keyword}}"
- **Secondary**: "{{secondary kw 1}}", "{{secondary kw 2}}"
- **Search intent**: {{informational | navigational | commercial | transactional}}

## Differentiation slant (Manabuならでは)

[ここにManabuさんの実体験エピソード挿入指示]

- {{例: 「2024年秋に60代のご夫婦を案内した時、◯◯で困った経験から」}}
- {{例: 「政府公認ガイドとして◯◯の知識が深い」}}

## Meta tags (SEO)

- **Title (EN)** (60字以内): {{title}}
- **Meta description (EN)** (155字以内): {{description}}
- **Title (ES)** (60字以内): {{title_es}}
- **Meta description (ES)** (155字以内): {{description_es}}

## H2 outline (5-7 sections + FAQ)

1. **Section 01 · {{title}}** — {{50字程度の方針メモ}}
2. **Section 02 · {{title}}** — {{方針}}
3. **Section 03 · {{title}}** — {{方針}}
4. **Section 04 · {{title}}** — {{方針}}
5. **Section 05 · {{title}}** — {{方針}}
6. **Section 06 · FAQ** — 4-5問

## Required facts (web search before writing)

これらは記事執筆前に web search で必ず検証：

- [ ] {{fact1: 例: 営業時間・定休日}}
- [ ] {{fact2: 例: 価格（円建て税込）}}
- [ ] {{fact3: 例: アクセス時間・最寄駅}}

## Internal link plan (既存記事への参照)

- [{{title}}](/blog/{{slug}}) — {{なぜリンクするか}}
- [{{title}}](/blog/{{slug}}) — {{なぜリンクするか}}

## Related tour CTA

`<RelatedTourCards tourIds={[{{tour-id-list}}]} />`

## Image candidates

- **Project内（最優先）**: {{画像パス候補}}
- **不足分（Wikimedia/Unsplash提案）**: {{探すべき被写体}}

## Risk notes

- {{例: Helpful Content System リスク — 量産ペース注意}}
- {{例: AI Overview ゼロクリック化のリスク — {{primary keyword}} は情報型}}
- {{例: 競合過密 — DR80+の{{competitor}}が独占、ニッチ slant 必須}}
- {{例: ファクト変動リスク — 価格・営業時間は年次変動、Last updated 更新必須}}

## Build instructions for Claude Code

承認後、以下を実行する：

1. `templates/BlogArticleTemplate.tsx` をコピーして `src/pages/blog/{{PascalCaseSlug}}.tsx` を作成
2. `src/pages/es/blog/Es{{PascalCaseSlug}}.tsx` も作成（hreflang対応）
3. `src/AppRoutes.tsx` に import + Route 追加
4. `src/pages/blog/BlogIndex.tsx` に entry 追加
5. `public/sitemap.xml` に2 URL 追加
6. tsc で型チェック
7. feature ブランチ作成 + commit

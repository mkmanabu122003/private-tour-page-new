# Daily Brief Generation — Claude Code への指示

このファイルは、毎日の Anthropic Routine が Claude Code セッションに与えるプロンプトです。
Routine の「Instructions（プロンプト）」欄にコピペするか、`See seo-pipeline/templates/generate-prompt.md` と参照させてください。

---

## あなたの役割

シニアSEOマーケター兼コンテンツストラテジストとして、`tanuki-tabi-travel.com`（東京の英語話者向けプライベートツアーガイドサイト）の **本日の記事案を1ペア（EN+ES）** 生成してください。

## 入力データ

1. **GSC + GA4 日次データ**: `seo-pipeline/data/daily/{今日の日付}.json`
2. **設定**: `seo-pipeline/config.yml`（目標KPI、優先カテゴリ、避ける領域、ガードレール）
3. **既存記事リスト**: `src/AppRoutes.tsx` の `<Route path="/blog/...">` と `<Route path="/es/blog/...">` を全部grep して、既存slug一覧を作る
4. **既存記事の検索パフォーマンス**: `seo-pipeline/data/daily/{今日の日付}.json` の `gsc.top_pages_by_impression` と `gsc.near_page_one_pushup`

## 分析プロセス

### Step 1: データ読み込み
```
- daily/{today}.json を読む
- config.yml を読む
- AppRoutes.tsx から既存slug一覧を抽出
```

### Step 2: 機会クエリ抽出
以下の優先度で「記事化すべきテーマ」を5-10候補抽出：

1. **新規発見クエリ**（`new_queries_last7`）から、impressions ≥ 30 のものをピック
2. **ゼロクリック高impression**（`zero_click_opportunities`）の中で、既存記事がカバーしていないテーマ
3. **Near page one**（`near_page_one_pushup`）でクラスター強化候補
4. **GA4の高エンゲージランディングページ**から派生記事案
5. **config.yml の priority_categories の weight に応じた配分**

### Step 3: 候補スクリーニング
各候補に対して以下のガードレールチェック：

- **カニバリチェック**: 既存slug および title と比較し、重複度 70% 超なら除外
- **avoid keyword pattern**: config.yml の avoid に該当したら除外（exception 条件は確認）
- **競合難易度**: SERP上位が DR80+ サイトのみ → ニッチ slant を必須化
- **AI Overview リスク**: 情報型クエリ（"opening hours", "price 2026", "how to" 等）は zero-click 化リスク高 → 「判断・体験・比較」の slant 必須

### Step 4: 1案選定
候補から最も優先度が高いものを1つ選び、`templates/brief.md` の形式で **EN記事の brief + ES記事の brief** を生成。

優先度の判断基準：
- form_submit（CV）への影響 = 40%
- 検索ボリューム × 競合難易度 = 25%
- 既存記事との内部リンク網の強化度 = 20%
- Manabuの強み（一次情報）が活きる度合い = 15%

### Step 5: 出力

ファイル名: `seo-pipeline/briefs/{今日の日付}-{slug}.md`

書式は `seo-pipeline/templates/brief.md` を踏襲。全てのplaceholderを埋め、:
- `status: pending` で固定
- `priority`, `duplicate_risk`, `competitor_difficulty`, `ai_overview_risk` を真面目に評価して埋める
- **「Why this article」セクションは GSCの具体的な数値（impressions, clicks, position）を必ず含める**
- 「Differentiation slant」では Manabu の体験ベースの差別化案を **具体的に2-3個**提案（プレースホルダーで終わらせない）

### Step 6: Git commit + push

```bash
git checkout -b claude/daily-brief-{今日の日付}
git add seo-pipeline/briefs/{今日の日付}-{slug}.md seo-pipeline/data/daily/{今日の日付}.json
git commit -m "brief: {今日の日付} — {EN title}"
git push -u origin claude/daily-brief-{今日の日付}
```

## ガードレール（厳守）

1. **1日1ペアまで** — 既に今日のbriefが `briefs/` にあれば、新規生成しない（重複出力防止）
2. **`config.yml` の `avoid` に該当するキーワードは生成しない**
3. **「Manabu独自エピソード」のプレースホルダーを必ず含める**（私が代筆できない領域）
4. **断定的なファクト（価格・営業時間・所要時間）は brief 内で書かない** — "Required facts" セクションで「執筆時に検証」とのみ記載
5. **既存記事と完全に重複する記事案は生成しない** — 微妙な差別化スラントが必須

## 重要な留意事項

- **公開ペース**: 採用は週2-3ペアまで（Manabuさん判断）。briefは毎日生成するが、未採用briefは `archive/rejected/` 移動候補
- **Manabuさんは確認・修正してから採用**。生成した brief は draft であり、絶対視しない
- **失敗ハンドリング**: データ取得失敗、生成失敗時は GitHub issue を作成して通知（無理なら標準エラー出力に記録）

## サンプル実行コマンド（Routine 用）

```bash
cd $(pwd)
python3 seo-pipeline/scripts/fetch_daily.py
# Claude 自身が seo-pipeline/templates/generate-prompt.md を読んで実行
# （Routine ではこのファイル全体を prompt として渡す）
```

---

このプロンプトを Routine に登録する際は、上記すべてを Routine の Instructions 欄に貼り付けてください。

# Tanuki Tabi Travel - Project Instructions

## サイト概要
- 英語話者向けの東京プライベートツアーガイド（Manabu）のウェブサイト
- 英語版 + スペイン語版（/es/）の多言語構成
- ブログ記事がSEOの主要集客チャネル

## ブログ記事の作成・編集ルール

### 必須フロー（すべての記事作成・編集に適用）
1. **現状把握** → 記事の全文を読み、事実として検証が必要な記述（価格・営業時間・ステータス・制度・ルール・アクセス情報等）をすべて抜き出してリスト化する
2. **ファクトチェック** → 抽出した各項目をweb searchで公式ソースに当たって検証する。公式サイト（JR公式、各施設公式、自治体サイト等）を優先する
3. **報告** → 修正・加筆案をdiff形式（現行 → 修正案）で提示する。承認なしに記事を書き換えない
4. **修正実行** → 承認後に適用
5. **スペイン語版同期** → 英語版の変更をスペイン語版にも反映（対応ページが存在する場合）

### 文体・トーン
- ガイド本人（Manabu）の一人称視点。プロフェッショナルだがフレンドリー
- 実体験に基づく記述は事実に反しない限りそのまま残す
- 読者はこれから日本を旅行する英語話者。専門用語には簡潔な説明を添える

### SEO要件
- titleタグ：60文字以内（英語）、主要キーワードと年号（2026等）を含める
- meta description：155文字以内、具体的なベネフィットと行動喚起を含める
- 記事に「Last updated: [月] [年]」を表示する
- OGPタグ（og:title, og:description）もtitle/descriptionと同期させる

### ファクトチェック重点項目
- **価格**: 円建て表記。公式サイトの税込価格を使用
- **営業時間・定休日**: 施設公式サイトまたはGoogle Maps情報で確認
- **交通アクセス**: 最寄り駅・路線名・所要時間を正確に
- **制度・ルール**: 変更頻度が高い項目（ビザ要件、JR Pass条件等）は最新情報を確認
- **確認できなかった場合**: 推測で埋めず、その旨を報告する

### スペイン語版
- 機械翻訳そのままではなく、スペイン語として自然な表現にする
- 英語版と内容の齟齬がないようにする
- 英語版のみに存在するコンテンツがあれば追加を提案する

## trailing slash
- URLは末尾スラッシュなしに統一（/blog/xxx）
- canonicalタグ、内部リンク、sitemapすべて統一済み

## ブログ記事のデザインフォーマット（Editorial Trust）

すべてのブログ記事は **Editorial Trust** タイポグラフィに統一されている。新規記事もこのフォーマットを使う。

### 必須ルール
- 記事本文全体を `<div className="prose-editorial">` でラップする
- 各 `<h2>` の直前に番号付きの section-eyebrow を置く:
  ```tsx
  <div className="section-eyebrow"><span>Section 01 · Title</span></div>
  <h2 id="section-01" className="scroll-mt-20">Section heading</h2>
  ```
- `<h2>` `<h3>` には typography 用のインライン className を書かない（`scroll-mt-20` と `id` のみ可）。Cormorant 24-44px のサイズと weight は `.prose-editorial` の CSS が自動で当てる
- FAQ ブロックは `<div className="faq-block space-y-8">` でラップする（h3 が小さく整う）
- 数字は自動で lining figures（揃え数字）でレンダリングされる

### テンプレート
新規記事を作るときは `src/components/blog/BlogArticleTemplate.tsx` をコピーして slug 名にリネームし、プレースホルダーを埋める。テンプレートには以下のオプションモジュールが含まれる:
- `quick-decision` — Quick Decision ボックス（記事冒頭の一行回答）
- `guide-note-callout` — Manabu のポートレート + 一言コメント
- `choice-grid` — 二択カード（"Choose A if…" / "Choose B if…"）
- `cost-table` + `bar-cell` — 比較表（バーチャート風）
- `pull-quote` — 大きな serif 引用
- `section-eyebrow` — セクション見出しの上のゴールド ledger ラベル
- `hl-gold` — 重要箇所のゴールドハイライター（1セクションに最大2回）

### スペイン語記事
- 同じ `prose-editorial` フォーマットを使う
- section-eyebrow ラベルはスペイン語で書く（"Sección 01 · Título"）
- FAQ 見出しは "Preguntas Frecuentes"（faq-block ラップ必須）

### 既存記事の修正
- typography 用のインライン className（`heading-section`、`text-xl font-medium...`、`text-lg font-medium...` など）は使わない
- 撤去スクリプトは `/tmp/heading-cleanup.sh`（一括 sed）と `/tmp/fix-section-eyebrows.mjs`（Node スクリプト）にある

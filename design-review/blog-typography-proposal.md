# ブログ記事タイポグラフィ刷新案 — 競合リサーチ＋方向性提案

最終更新: 2026-05-08
対象記事例: `Tsukiji vs Toyosu`（`src/pages/blog/TsukijiVsToyosu.tsx`）
前提: 別セッションでCodexが作った骨格案（`design-review/blog-actual-text-preview.html`）の上で、**見出し・本文のタイポグラフィ自体**を再設計する。

---

## 1. 現状の整理

### Manabuサイトの今のタイポ
| 要素 | 値 | 出典 |
|---|---|---|
| 見出しフォント | **Cormorant Garamond** (serif) | `src/index.css:1,134-137` |
| 本文フォント | **Inter** (sans) | `src/index.css:1,131` |
| 背景色 | `#F8F7F1` 暖色オフホワイト | `src/index.css:13` |
| アクセント | `#C9A84C` ゴールド | `src/index.css:38,179-181` |
| 見出しサイズ | `text-4xl md:text-5xl lg:text-6xl`（36→48→60px） | `index.css:143` heading-display |
| 本文サイズ | 18px / line-height 1.82 | `index.css:218-223` article-reading |
| 読みやすさカラム幅 | `max-w-3xl`（768px） | 各記事の article 要素 |

### Codexが作った骨格案で何が変わったか
タイポ自体は据え置き（Cormorant Garamond + Inter のまま）。変わったのは**構造**:
- 「Quick Decision」見出し付きの判断モジュールを冒頭に置く
- 「Manabu's take」の小型ガイドノート（顔写真＋clay色見出し）を本文中に挿入
- 「Choose A if / Choose B if」の2カラム選択カード
- 時刻入りのルートストリップ（7:45 / 8:00 / 9:30 / Optional）
- 写真ペア＋figcaption
- pull quote（上下罫線、Georgia 27px）
- 左にTOC、右にAt a Glanceファクトカード＋Guide Note

つまり**「読み物のパーツ単位」は整理された**。今回の依頼は、その上にあるフォント/サイズ/重み/カラーの**typography layer**を更新する話。

---

## 2. 競合9サイトのリサーチ結果

実際に各サイトのCSSを抜いて測った値。

| サイト | 見出し | 本文 | h1サイズ | 本文サイズ/行間 | カラム幅 | 背景 | キャラクター |
|---|---|---|---|---|---|---|---|
| **Tokyo Cheapo** | Tablet Gothic Condensed (Adobe) | Acumin Pro (Adobe) | 30→60px | 16px / default | ~720–760px | 白 | utility wiki |
| **Boutique Japan** | Montserrat | Montserrat | 30→40→56px | 16→18px / 1.42→1.6 | ~720–800px | 白 | 清潔なブローシャ |
| **Inside Japan Tours** | Archivo Narrow (Bold, line-height 80%) | Arial | 32–34px | 14px | 900px | 白 | 新聞風×個人ブログ |
| **Magical Trip** | (本文と同じ) | Source Sans Pro | 34→42px | 18→20px / 1.5→1.6 | ~720–760px | 白 | 量産Ghostテーマ |
| **Truly Tokyo** ★最も近い | Oswald | **Lora (serif)** | 48px | 16px / 1.56 | 780px | 白 | 個人運営Genesis |
| **Japan Wonder Travel** | (本文と同じ) | Hiragino系システム | em base | 16px / ~1.7 | 800–860px | 白 | 日本人向けCocoon |
| **Live Japan** | (本文と同じ) | Apple/JPシステム | 18–24px | 14px / **2.0** | 700–780px | 白 | 量産ポータル |
| **Time Out Tokyo** | **Franklin Gothic** (URW自社配信) | Franklin Gothic | 48px (weight 800) | 20px / 1.7 | 700–760px | 白 | 雑誌エディトリアル |
| **Context Travel** | Grenette Pro (自社所有serif) | Manrope (sans) | 36px+ | 14px+ | ~700px | 白 | プレミアム雑誌 |

### クロス比較で見えた8つのパターン

1. **「sans×sans」が圧倒的多数（9/6）**。serif本文を使うのは Truly Tokyo（Lora）のみ。**Manabuの「serif見出し＋sans本文」は競合の中で珍しい構成で、Truly Tokyoだけが直接の比較対象**。これは差別化資産にもなりうる（編集物っぽさ＝「読み物としての権威」を出せる）。
2. **有償/カスタム書体は上位プレミアム勢のみ**。Time Out（Franklin Gothic URW自社配信）、Context Travel（Grenette Pro）、Tokyo Cheapo（Adobe Typekit）。Manabuの Cormorant Garamond は Google Fonts なので「中位クラス」の見え方。
3. **読みカラムは700–800pxに収束**。1000px以上もウルトラ狭い<600pxも誰もやっていない。**Manabuの `max-w-3xl`（768px）は標準どんぴしゃ**。ここはいじる必要なし。
4. **2026年の長文本文サイズは18–20pxが主流**。Boutique（18px desktop）、Magical Trip（18→20px）、Time Out（20px article内）。**Manabuの18pxは適正**。下げる理由はない。
5. **行間は1.6–1.7が中心、serif本文はやや詰める**。Time Out 1.7、Magical Trip 1.6、Boutique 1.6、Truly Tokyo（serif）1.56。**Manabuの1.82はやや緩め**。1.7前後に詰める余地あり。
6. **見出しスケールは2倍以上開く**。プレミアム勢（Time Out 48px / Truly Tokyo 48px / Boutique 56px）は大きく出す。実用ユーティリティ勢（Inside Japan 32–34px / Live Japan 24px）は控えめ。**Manabuのh1は最大60px相当（lg:text-6xl）でプレミアム寄り**。記事ヘッダの威厳は十分。
7. **誰も drop cap を使っていない**。9/0。装飾的タイポ＝この業界では避けられている。
8. **本文色は全社「ほぼ黒×真っ白」**。`#333`（Truly Tokyo）、`#30393d`（Boutique）、`#000`（Time Out, Live Japan）。**Manabuの「暖色オフホワイト×中間グレー本文」は9/0で唯一**。これは捨てがたい差別化。

### 差別化と同質化の交差点
- **守るべきもの**: 暖色オフホワイト背景、ゴールドアクセント、serif見出し → 9社中ほぼ唯一の構成。「私たちは小さな個人ガイド／旅雑誌」という非言語シグナルになっている。
- **見直すべきもの**: 行間1.82、見出しの装飾性、ガイドの一人称性のタイポ表現 → 「実用ガイド寄り」に振るならここを動かす。
- **追加すべきもの**: 競合が持っていてManabuが弱いのは(a)スティッキーTOC（Magical Trip, Truly Tokyo） (b)カラフルな callout box（Truly Tokyo の coral checkframe / blue map box） (c)アイブロウタグの一貫運用（Boutique の `.entry-date` letterspacing 0.2em / Inside Japan の overlay caption）。

---

## 3. 方向性3案（実装前の選択肢）

3案とも「実用ガイド寄りに振る」前提。違うのは**どこまで既存タイポを残すか**。

### 案A — Editorial Trust（保守寄り：Cormorant 残す）

> **コンセプト**: 「Truly Tokyoの一段階モダン版」。serif見出しは権威性として残し、本文の読みやすさだけ実用ブログ水準に上げる。

| 要素 | 現状 | 提案 |
|---|---|---|
| h1（記事タイトル） | Cormorant 36→48→60px | Cormorant 40→52→**64px**, line-height 1.05, letter-spacing -0.01em |
| h2（セクション） | Cormorant 30→36px | Cormorant **32→44px**, line-height 1.15 |
| h3（小見出し） | Cormorant 24px | **Inter 14px uppercase** letterspacing 0.18em（アイブロウ化） |
| 本文 | Inter 18px / 1.82 | Inter 18px / **1.7** |
| アイブロウラベル | text-label class（uppercase 0.18em）| 各h2の上に必ず配置（"Section 02 — The History" のような番号付き） |
| 強調語 | bold | bold + 下線 `box-shadow: inset 0 -8px 0 #F4E5B6`（gold highlighter）で実用ブログ感 |
| カラム幅 | 768px | 据え置き |
| 装飾 | なし | h2の前に8pxのgold rule（`border-top: 2px solid #C9A84C; width: 64px`）|

**長所**:
- Manabuの「個人運営の編集物」というブランド資産（Cormorant + 暖色背景）が壊れない
- h3をアイブロウ化することでスキャン性が上がる（実用ガイドの最大の弱点を解消）
- 行間を1.82→1.7に詰めるだけで「ぎゅっと詰まった旅行ガイド感」が出る
- gold highlighter が「ガイドが大事だと言っている箇所」を視覚化、Truly Tokyo の `.highlight` ピンクと同等の機能を Manabu のブランドカラーで実現

**短所**:
- 大きな見た目の変化を期待していたら物足りない可能性
- 競合の主流（sans×sans）にはやはり寄せていない

### 案B — Practical Hybrid（中庸：見出しを condensed sans に）

> **コンセプト**: Truly Tokyo の Oswald + Lora ペアの**逆を行く**。見出しを condensed sans にして実用ガイド感を出し、本文はsansのまま。Cormorant Garamond は引退させる。

| 要素 | 現状 | 提案 |
|---|---|---|
| h1 | Cormorant 36→48→60px | **Archivo Narrow 800** 36→48→**60px**, line-height 0.95, letter-spacing -0.02em |
| h2 | Cormorant 30→36px | **Archivo Narrow 700** 28→36px, line-height 1.05 |
| h3 | Cormorant 24px | Inter 18px / 600 / uppercase 0.08em |
| 本文 | Inter 18px / 1.82 | Inter 18px / 1.7 |
| アイブロウ | あり | 多用：Date / Author / Category / Updated すべて 12px uppercase 0.18em |
| サイドバー | なし or 外側 | スティッキーTOC + At a Glanceカード（既存Codex案を踏襲）|
| 装飾 | なし | h1直下に thin gold rule（`width: 80px; height: 3px`）+ アイブロウラベル |

**長所**:
- Inside Japan Tours / Tokyo Cheapo / Boutique の「現代的な旅行ガイド」のフィールに最も近い
- 見出しの密度が上がってスキャン性が一気に向上
- Archivo Narrow 800 の condensed bold は SEO 上位を取る Tokyo Cheapo と同じ系統で、**「スマホで読みやすい縦長見出し」になる**
- 暖色背景＋ゴールドアクセントは残すので、量産テーマに見えない

**短所**:
- Cormorant Garamond を引退させると、Manabu サイトが今持っている「上品な個人運営の編集物」感が後退する
- ヘッダー・フッター・トップページなど他ページとのフォント整合性が崩れる（**全サイトでのフォント刷新が必要**になる）
- 暖色背景×condensed bold sans は珍しい組み合わせなので、ブランドの再定義に近い

### 案C — Magazine Field Notes（攻め：serif本文に踏み込む）

> **コンセプト**: 「ガイドが現場で書いたフィールドノート」。Truly Tokyo が10年前のテイストでやっていたことを、2026年のタイポで再構築する。serif見出し＋**serif本文**まで踏み込む。

| 要素 | 現状 | 提案 |
|---|---|---|
| h1 | Cormorant 36→48→60px | Cormorant Garamond 700, **40→56→72px**, line-height 1.0 |
| h2 | Cormorant 30→36px | Cormorant **32→44px**, italic |
| h3 | Cormorant 24px | Inter 13px uppercase 0.16em（アイブロウ） |
| 本文 | Inter 18px / 1.82 | **Source Serif Pro** 18→19px / 1.65 |
| 引用 | bold | drop cap（h2直後の最初の段落の頭文字を Cormorant 64px float left）|
| メタ情報 | 横並び | "Tokyo · Field Notes" のような二段構え（地名 + 記事タイプ）|
| 写真キャプション | 12px uppercase | **Cormorant italic 14px** で雑誌キャプション風 |

**長所**:
- 競合9サイト中ゼロのポジショニング。**完全にユニーク**
- 「Manabuの一人称ガイド」と「読み物としての価値」を最大化、ニュースレター/書籍化など派生展開がしやすい
- Source Serif Pro は本文用に最適化された serif で、Lora（Truly Tokyo）より読みやすい

**短所**:
- 「実用ガイドを強化」という今回の方向性とはむしろ**逆**になる（編集物寄りに振れる）
- スマホでの長文 serif 本文は人を選ぶ（特にSEO流入の英語話者旅行者）
- 既存記事を全部直し直す改修コストが大きい
- 今回のリサーチ前提（実用寄り）と整合しないので、**メインの推薦からは外す**

---

## 4. 推薦と次の一手

**推薦：案A — Editorial Trust**

理由:
- 今回ユーザーが選んだ方向性「実用ガイド・旅行ブログ系を強化」に対して、**スキャン性の課題（行間1.82・h3の serif 装飾）だけをピンポイントで直す**最小工数で最大効果のアプローチ。
- Manabuサイトの差別化資産（暖色背景・ゴールド・Cormorant）は壊さない。Truly Tokyo以外の8サイトは「白×sans×量産」で同質化しており、その水たまりに飛び込むのは戦略的に勿体ない。
- 案Bに踏み込むなら、ブログ単体ではなくサイト全体の再ブランディング判断が必要。**今回のスコープを超える**。

**推薦しない案の出番**:
- 「もっと大胆に変えたい・サイト全体の再設計を視野に入れる」 → 案B
- 「ブログを書籍/ニュースレター化する将来構想がある」 → 案C

### 次に決めること（実装前）

1. **案A / B / C のどれに進むか**
2. （案A 採用の場合）h2 の上に gold rule + 番号付きアイブロウ（"Section 02"）を全記事に入れるか、新規記事のみか
3. （案A 採用の場合）gold highlighter は「ガイドの判断（"For most visitors..."）」だけに限定するか、太字すべてに適用するか
4. ガイド一人称ブロック（"Manabu's take"）のスタイル — Cormorant clay色（Codex案の `--clay: #9c563f`）を採用するか、もっと控えめにするか

決定後にHTMLプレビューを `design-review/blog-typography-A.html` として作成し、実コンテンツ（Tsukiji vs Toyosu）で確認 → OKなら `src/index.css` と該当 React コンポーネントに反映、という流れを想定。

---

## 5. リサーチで参照したサイト一覧

| サイト | URL | 確認したページ |
|---|---|---|
| Truly Tokyo | trulytokyo.com | Tsukiji Fish Market |
| Inside Japan Tours | insidejapantours.com | How to Hanami（2025/12/12）|
| Magical Trip | magical-trip.com/media | Yanaka Ginza guide |
| Live Japan | livejapan.com | a0004315 May Travel Guide |
| Context Travel | contexttravel.com | London Walking Tours stories |
| Time Out Tokyo | timeout.com/tokyo | Hatsune Miku store news |
| Tokyo Cheapo | tokyocheapo.com | テーマバンドルCSSのみ（記事は403）|
| Boutique Japan | boutiquejapan.com | テーマCSSのみ（記事は404）|
| Japan Wonder Travel | blog.japanwondertravel.com | ブログトップ |

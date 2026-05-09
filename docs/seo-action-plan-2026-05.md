# SEO Action Plan 2026-05 — Next Actions & Prompts

**Last updated:** 2026-05-09
**Source:** GA4/GSC 28d snapshot (2026-05-06 終端) + Ahrefs Site Explorer Organic Keywords 41件 (2026-05-08, Global)

各タスクは別セッションで独立実行できるよう、自己完結型のプロンプトを記載しています。プロンプトブロックを丸ごとコピーしてClaude Codeに貼り付けてください。

---

## 進捗サマリ

| ID | タスク | 状態 | コミット |
|---|---|---|---|
| #1 | Go With Guide 競合ブランド捕捉セクション追加 | ✅ 完了 | `9b6aca6` |
| #2 | `tsuki market` タイポFAQ | ✅ 完了 | `29db4bd` |
| #3 | Shinkansen独立記事分離 | 未着手 | — |
| #4 | `tsukiji-vs-toyosu` テンプレ横展開 | ✅ 完了 | `a3a3429` |
| #5 | JR Pass記事の方針転換 | 未着手 | — |
| #6 | ES JR Pass記事増強 | ✅ 完了 | `6565175` + `6e7b3a9` (factcheck修正) |
| #7 | Hakone vs Nikko 2-way比較記事分離 | ✅ 完了 | `96ba0f3` (※#8 math fix と同梱) |
| #8 | `is-it-worth-hiring` KWクラスター拡張 | ✅ 完了 | `8f832b7` + `27a69ce` + `96ba0f3` (math fix) |
| #9 | Tsukiji `opening hours` 内部カニバリ集約 | ✅ 完了 | `9473592` |
| #10 | `kamakura day trip` H2セクション強化 | ✅ 完了 | `8eeeaca` |
| C2 | Desktop CTR 0.13% の SERP実機検証 | 未着手 | — |
| C3 | 新URL `tokyo-tour-platforms-compared` 専用記事 | 未着手 | — |
| B5 | `ValueComparison` コンポーネント実装 | ✅ 完了 | `5aab90c` |
| D1 | 2026-05-06 GA/GSCスナップショット コミット | 未着手 | — |
| D2 | `.gitignore` 更新（エージェント設定除外） | 未着手 | — |

---

## 推奨実行順

```
今すぐ:  #2 (tsuki market) → #10 (kamakura day trip) → #9 (Tsukiji hours)
今日中:  #8 (KW拡張), D1, D2
今週:    #4 (テンプレ横展開), #6 (ES JR Pass), C2 (Desktop AIO検証)
今月:    #5 (JR Pass方針転換), C4 (Commercial KW開拓)
```

---

# 🔴 即着手（5-30分 / ROI 最大）

## #2 `tsuki market` タイポFAQ追加

**機会:** Vol 150/月、KD 24、Pos 5、Traffic 0
**期待効果:** +50 traffic/月（5分作業）
**ファイル:** `src/pages/blog/TsukijiMarketGuide.tsx`（推定）

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
SEO改善作業中。Ahrefs Site Explorer (2026-05-08, Global) を分析した結果、
無料の取りこぼし機会を発見した。これを実装してほしい。

## 機会データ（Ahrefs）

KW: "tsuki market"
- Volume: 150/月
- KD: 24
- Position: 5
- Traffic: 0
- Updated: 1日前
- Entity: Branded（Tsuki Marketとして認識されているが、実は "Tsukiji" のタイポ）
- Ranking URL: https://tanuki-tabi-travel.com/blog/tsukiji-market-guide

## 問題の構造

ユーザーが "Tsukiji" を打ち間違えて "tsuki market" と検索 → 我々のページが
Pos 5 に出るが、SERP snippet に "tsuki market" の文字列が含まれないため
CTR がゼロ。Volume 150/月の取りこぼし。

## やってほしいこと

`src/pages/blog/TsukijiMarketGuide.tsx`（英語版）と
`src/pages/es/blog/` 配下の対応する Tsukiji 記事（スペイン語版があれば）に、
以下を実装する:

1. 記事冒頭の introduction 直下 に短い disambiguation FAQ ブロックを追加
   - 形式は CLAUDE.md の Editorial Trust ルールに従う（faq-block ラップ）
   - 例: 「Is 'Tsuki Market' the Same as Tsukiji Market?」というH3
   - 一般的なタイポであることを認め、両方の表記を自然に含めて 60-100 語程度

2. 記事内の他の箇所（FAQ セクションがあればそこにも）でも
   「tsuki market」「tsuki fish market」等の表記を1-2回自然に含める
   （ただし不自然なキーワード詰めにしない）

3. SEO の title / meta description は変更しない（既存の Tsukiji 主軸を維持）

## 必須ルール（CLAUDE.md より）

1. 承認なしに記事を書き換えない — 実装前に diff を提示し、ユーザー承認を待つ
2. ファクトチェック不要 — 今回はタイポ disambiguation のみで新事実は追加しない
3. Editorial Trust フォーマット必須 — prose-editorial、faq-block、section-eyebrow
   の既存パターンに従う。インライン className でフォントサイズを書かない
4. スペイン語版同期 — 対応するES記事があれば同じ disambiguation を
   スペイン語で追加（"¿Es 'Tsuki Market' lo Mismo que el Mercado Tsukiji?"）

## 期待効果

月+50 traffic の Tsukiji 記事への流入増（Volume 150 × CTR 30%程度を想定）。
工数 5-15 分。

## 完了基準

- [ ] 英語版に disambiguation FAQ 追加
- [ ] スペイン語版に同期（存在する場合）
- [ ] ビルド成功 (npm run build)
- [ ] diff 形式で変更内容を報告
- [ ] ユーザー承認後にコミット
```

---

## #10 `kamakura day trip` H2セクション強化（最大ROI）

**機会:** Vol 2,600/月、KD 1、Pos 7（Ahrefs最大の隠れ機会）
**期待効果:** **+200 traffic/月**（Pos 7→3 達成時）
**ファイル:** `src/pages/blog/KamakuraVsHakoneVsNikkoDayTrip.tsx`（推定）

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
SEO改善作業中。Ahrefs Site Explorer (2026-05-08, Global) を分析した結果、
最大の隠れ機会を発見した。これを実装してほしい。

## 機会データ（Ahrefs）

KW: "kamakura day trip"
- Volume: 2,600/月（41 KW中で最大）
- KD: 1（極低難易度）
- Position: 7（トップ3に届いていない）
- Traffic: 0（推定）
- 同KWは別SERPでも Vol 450 / Pos 6 にランク（=ページ評価そのものは高い）
- Ranking URL: https://tanuki-tabi-travel.com/blog/kamakura-vs-hakone-vs-nikko-day-trip

## 問題の構造

現行記事は3-way比較記事 "Kamakura vs Hakone vs Nikko Day Trip" として構築
されており、"Kamakura day trip" 単体クエリへの最適化が弱い。Pos 7に
留まっているのはコンテンツ評価そのものは高い証拠。冒頭の構造とH2セクションを
"Kamakura day trip" 軸に強化すれば Pos 3 達成が現実的。

## やってほしいこと

ファイル: src/pages/blog/KamakuraVsHakoneVsNikkoDayTrip.tsx（または類似名、find で確認）
スペイン語版: src/pages/es/blog/ 配下の Kamakura/Hakone/Nikko比較記事

以下を実装:

1. 記事タイトル/H1/イントロは現状維持（3-way比較の枠組みは保持）

2. 既存セクション構成を確認した上で、Kamakura単独セクションに専用H2を追加:
   例: "Is Kamakura Worth a Day Trip From Tokyo?"（"kamakura day trip" 完全マッチ）
   - 60-90分のKamakura深掘り（既存内容の再構成 + 追記）
   - 鉄道アクセス（横須賀線、江ノ電）、所要時間（東京駅から約1h）
   - Top 5 spots（鶴岡八幡宮、大仏、報国寺、長谷寺、由比ヶ浜）
   - "Kamakura day trip itinerary"（午前/午後タイムライン）

3. FAQ セクションに "How long is a day trip from Tokyo to Kamakura?"
   "What's the best day trip from Tokyo: Kamakura or Hakone?" を追加

4. FAQ Schema にも対応するQ&Aを追加

5. titleタグに "Kamakura Day Trip" を含める形に微調整（60字以内維持）
   現状: 確認の上、含まれていなければ追加

## ファクトチェック必須項目（CLAUDE.mdルール準拠）

- 横須賀線 / 江ノ電の運行情報・所要時間（JR東日本公式）
- 鶴岡八幡宮、長谷寺、報国寺、大仏（高徳院）の営業時間・拝観料
- 「Kamakura day trip」の典型的な所要時間（半日/丸一日）

## 必須ルール（CLAUDE.md より）

1. 承認なしに記事を書き換えない — diff提示 → 承認 → コミット
2. ファクトチェック先行（公式サイト/Google Maps確認）
3. Editorial Trust フォーマット維持（section-eyebrow 番号繰り下げが必要なら実施）
4. スペイン語版同期

## 期待効果

Pos 7→3 で月+200 traffic（Vol 2,600 × CTR ~7-8%）。
2026年4月期は同記事が80→57セッション (-29%) と最大loserになっている。
このアクションは「防衛」ではなく「攻め直し」。

## 完了基準

- [ ] 英語版にKamakura単独H2セクション追加
- [ ] FAQ + FAQ Schema 拡張
- [ ] スペイン語版同期
- [ ] ファクトチェック完了報告
- [ ] ビルド成功
- [ ] diff報告 → 承認 → コミット
```

---

## #9 Tsukiji `opening hours` 内部カニバリ集約

**機会:** 同URLが3変異で Pos 10/12/15 に分散ランク（カニバリ）
**期待効果:** +50 traffic/月、SERP順位押し上げ
**ファイル:** `src/pages/blog/TsukijiMarketGuide.tsx`（推定）

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
SEO改善作業中。Ahrefs Site Explorer (2026-05-08, Global) で、同一URLが
類似クエリで複数Posに分散している内部カニバリを検出した。

## 機会データ（Ahrefs）

URL: https://tanuki-tabi-travel.com/blog/tsukiji-market-guide

同URLが以下4変異で別々のPosにランク（順位希釈）:
| KW | Volume | KD | Position |
|---|---|---|---|
| tsukiji market hours | 700 | 0 | 11 |
| tsukiji market opening hours | 700 | 0 | 15 |
| tsukiji market opening hours | 100 | 0 | 12 |
| tsukiji market opening hours | 40 | 0 | 10 |
| tsukiji fish market opening hours | 1,400 | 0 | **30** |

特に最後の "tsukiji fish market opening hours" が Vol 1,400 / KD 0 で
Pos 30 という致命的な低順位。

## 問題の構造

記事内で営業時間情報が複数箇所に分散しているか、または不十分。
1セクションに統合してターゲット明示すれば内部リンク評価が集中し、
全変異の順位が上昇する見込み。

## やってほしいこと

ファイル: src/pages/blog/TsukijiMarketGuide.tsx（find で確認）
スペイン語版: src/pages/es/blog/ 配下のTsukiji記事

1. 既存記事を読み込み、"opening hours" "operating hours" "business hours"
   "営業時間" 関連の記述箇所を全て抽出

2. 専用H2セクション "Tsukiji Market Opening Hours: Complete Guide" を新規作成
   または既存セクションを強化:
   - 場内市場（Inner Market）と場外市場（Outer Market）の区別
   - 主要店舗の営業時間（5-10店舗のテーブル形式）
   - 曜日別営業状況（特に日曜・祝日）
   - 季節変動（年末年始休業など）

3. キーワード変異を自然に含める:
   - "tsukiji market hours"
   - "tsukiji market opening hours"
   - "tsukiji fish market opening hours"
   - "what time does tsukiji market close"
   - "is tsukiji market open on sunday"

4. FAQ Schema に "What are Tsukiji Market opening hours?" を追加

5. 表（営業時間テーブル）にはschema.org/OpeningHoursSpecification の
   構造化データを検討（Restaurant/Storeとして）

## ファクトチェック必須項目（CLAUDE.mdルール準拠）

- 場外市場の営業時間（Tsukijigogai公式サイト）
- 主要店舗（寿司大、大和寿司、すしざんまい、海鮮丼まる等）の営業時間
- 日曜・祝日の営業状況
- 年末年始の休業期間

## 必須ルール

1. 承認なしに記事を書き換えない
2. ファクトチェック必須（営業時間は変更頻度高）
3. Editorial Trust フォーマット維持
4. スペイン語版同期

## 期待効果

4変異の順位押し上げ（Pos 10-15 → Pos 5-8、Pos 30 → Pos 10）で月+50 traffic。

## 完了基準

- [ ] 既存hours記述を集約
- [ ] 営業時間テーブル追加（5-10店舗）
- [ ] キーワード変異の自然な含有
- [ ] FAQ Schema拡張
- [ ] ファクトチェック完了報告
- [ ] スペイン語版同期
- [ ] diff報告 → 承認 → コミット
```

---

## #8 `is-it-worth-hiring-a-tour-guide-in-tokyo` KWクラスター拡張

**機会:** GA4でCV率>100%（最高効率）、Ahrefs上で41 KW中1つしか取れていない
**期待効果:** CV直結（集客×CV両取り）
**ファイル:** `src/pages/blog/IsItWorthHiringGuide.tsx`

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
SEO改善作業中。GA4分析（2026-05-06終端の28日）と Ahrefs (2026-05-08)
の組み合わせで、極めて費用対効果の高い記事のKW拡張機会を発見した。

注: この記事は2026-05-09に既に1度更新済み（commit 9b6aca6で
"Private Guide vs Booking Platforms" セクションを追加）。今回は別の補強。

## 機会データ

URL: https://tanuki-tabi-travel.com/blog/is-it-worth-hiring-a-tour-guide-in-tokyo
GA4 (2026-05-06終端 28d):
- Sessions: 10
- Conversions: 11（CV率 >100%、サイト最高効率）
Ahrefs:
- 同URLは "go with guide tokyo" (Vol 20, KD 36, Pos 4) でランク
- 41 KW中で同URLが取れているのはこの1件のみ
- 同記事のCV率の高さに対してKW獲得数が異常に少ない

## 問題の構造

既存記事は "is it worth hiring a tour guide in tokyo" タイトルだが、
周辺の高意図クエリ（"private guide tokyo cost", "hire tour guide tokyo worth it",
"tokyo english speaking guide", "tokyo guide hire price"等）への
コンテンツ深度が不足し、未獲得状態。

CV率>100%という事実は、流入を増やせば確実に予約に繋がることを意味する。

## やってほしいこと

ファイル: src/pages/blog/IsItWorthHiringGuide.tsx
スペイン語版: src/pages/es/blog/EsValeLaPenaGuia.tsx

注意: このファイルは2026-05-09に大型更新（platform comparison section）
を実施済み。既存セクション構成（Section 01-10）を確認してから着手。

以下のKWクラスターを記事内に意図的に含める形で補強:

1. "private guide tokyo cost"
   → 既存Section 04 (How Much Does a Private Guide Cost) を確認、
     "private guide cost" 表記を確実に含める

2. "hire tour guide tokyo worth it" / "tokyo guide hire"
   → イントロまたはSection 01に "hire a tour guide" 完全マッチ追加

3. "tokyo english speaking guide" / "english tour guide tokyo"
   → Section 06 (What You Actually Get With a Licensed Guide) で
     "English-speaking guide" 言及

4. "private vs group tour tokyo"
   → 既存 Section 05 (Booking Platforms) で言及あるが、独立H3として強化

5. FAQ拡張（最低3問追加）:
   - "How much does it cost to hire a private tour guide in Tokyo?"
   - "Are English-speaking tour guides available in Tokyo?"
   - "Is it cheaper to hire a private guide or join a group tour?"

6. FAQ Schemaにも対応Q&A追加

## ファクトチェック必須項目

- 価格情報は既存記事と整合（¥40,000-50,000 半日、¥70,000-80,000 一日）
- 全国通訳案内士の登録者数 27,950人（2025-04-01時点、MLIT/JNTO公式）
- 英語ガイドの市場価格レンジ

## 必須ルール

1. 承認なしに記事を書き換えない
2. 既存セクション番号を破壊しない（Section 01-10は維持）
3. Editorial Trust フォーマット
4. スペイン語版同期（ES記事のSección 01-10構造を維持）

## 期待効果

KW獲得数 1→5以上、CV率>100%維持で予約数増加に直結。
工数30-60分でCV直結効果。

## 完了基準

- [ ] 5つのKWクラスター含有
- [ ] FAQ 3問以上追加
- [ ] FAQ Schema拡張
- [ ] スペイン語版同期
- [ ] ビルド成功
- [ ] diff報告 → 承認 → コミット
```

---

# 🟠 半日仕事（2-4h / ROI 中）

## #4 `tsukiji-vs-toyosu` テンプレ横展開

**機会:** 同URLが KD 30 で Pos 3 を取れる強度を持つ（破格）
**期待効果:** +200 traffic/月（3記事新規投下時）
**ファイル:** 新規作成（3記事）

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
SEO改善作業中。Ahrefs Site Explorer (2026-05-08, Global) で、特定のURL
パターンが他URLと比べて異常に強い順位獲得力を持つことを発見した。

## 機会データ（Ahrefs）

URL: https://tanuki-tabi-travel.com/blog/tsukiji-vs-toyosu

このURLが取れているKWの強度:
| KW | Volume | KD | Position |
|---|---|---|---|
| toyosu market | 250 | 30 | 3 |
| japanese fish market | 300 | 10 | 2 |
| fish market tokyo | 350 | 8 | 3 |
| best fish market tokyo | 40 | 0 | 3 |

特筆すべき点:
- KD 30で Pos 3 は本サイトでは破格の強度
- Pos 2-3 を4 KWで保持（合計 Vol 940/月）

## 仮説

"X vs Y" 比較記事フォーマットがGoogleに評価されやすく、本サイトの
ドメイン評価で勝てるテンプレ。同フォーマットを横展開すれば類似順位獲得が見込める。

## やってほしいこと

既存 src/pages/blog/TsukijiVsToyosu.tsx の構造を分析し、同テンプレで
以下3記事を新規作成:

1. **"Toyosu vs Ueno Market: Which Tokyo Fish Market to Visit?"**
   - URL: /blog/toyosu-vs-ueno-fish-market
   - ターゲットKW: "ueno market tokyo", "ameyoko market vs toyosu"

2. **"Tsukiji Outer Market vs Inner Market: What's the Difference?"**
   - URL: /blog/tsukiji-outer-vs-inner-market
   - ターゲットKW: "tsukiji outer market", "tsukiji inner market"

3. **"Toyosu Market vs Tsukiji Outer Market: Which to Visit in 2026?"**
   - URL: /blog/toyosu-vs-tsukiji-outer
   - ターゲットKW: "toyosu vs tsukiji outer market"
   （既存 tsukiji-vs-toyosu との内部カニバリ要注意 → 既存記事内でリンク化）

## 各記事の構成（既存テンプレ準拠）

- BlogArticleHero
- イントロ（150-200語、両者の概要）
- H2: "Quick Decision: Which Should You Visit?"
- H2: "What Each Market Actually Is"
- H2: "Comparison Table" (Vol/Vibe/Price/Best for/Hours)
- H2: "When to Choose [A]"
- H2: "When to Choose [B]"
- H2: "How to Get There"
- H2: "FAQ"
- CTA → /tours/tokyo-food-tour

## ファクトチェック必須項目

- 各市場の営業時間・定休日（公式サイト/Google Maps）
- アクセス（最寄駅・路線・所要時間）
- 名物店舗・価格帯
- 観光客向けの注意事項（カメラ撮影可否等）

## 必須ルール

1. CLAUDE.md準拠（Editorial Trust、prose-editorial、section-eyebrow番号付き、faq-block）
2. ファクトチェック先行
3. 内部リンク: 既存 tsukiji-vs-toyosu, tsukiji-market-guide, toyosu-market-guide 等
4. SEO: title 60字以内、meta description 155字以内
5. スペイン語版作成（3記事ともES版を同時投下）
6. AppRoutes.tsx, sitemap, BlogIndex.tsx, ES版BlogIndex への追加
7. 承認なしにmainブランチへcommitしない

## 期待効果

3記事 × 平均+70 traffic/月 = +210 traffic/月（成熟3-6ヶ月後）。
ドメイン評価向上の副次効果も期待。

## 完了基準

- [ ] 3記事の英語版 + スペイン語版（計6ファイル）作成
- [ ] AppRoutes / BlogIndex / sitemap 追加
- [ ] 内部リンク双方向化
- [ ] ファクトチェック報告
- [ ] ビルド成功（123→129ルートに増加）
- [ ] diff報告 → 承認 → コミット
```

---

## #6 ES JR Pass記事増強

**機会:** 英語版死亡、スペイン語版生存（ES SERPはAIO遅延）
**期待効果:** +30 traffic/月（ES）、英語版死亡時の保険
**ファイル:** `src/pages/es/blog/JapanRailPassValeLaPena.tsx`（推定）

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド・スペイン語サイト）の
SEO改善作業中。Ahrefs Site Explorer (2026-05-08, Global) で、英語版が死亡
した一方でスペイン語版が生存している不均衡を発見した。

## 機会データ

| 言語 | KW | Vol | Pos | Status |
|---|---|---|---|---|
| EN | jr pass price increase (×11変異) | 0-20 | 1-11 | AI Overview支配で全滅 |
| ES | japan rail pass subida precio | 30 | 6 | 生存 |

ES SERPは英語SERPと比べてAI Overview展開が遅れており、時間差利益が存在。

## やってほしいこと

ファイル特定: find /Users/manabu/Desktop/private-tour-page-new/src/pages/es/blog/
で "JapanRailPass" "RailPass" "VALE" を含むファイル

既存ES記事を強化、または以下のクエリ群を意図して新規記事を投下:

1. "japan rail pass aumento precio 2026"
2. "japan rail pass vale la pena 2026"
3. "japan rail pass nuevo precio explicado"
4. "shinkansen subida precio"

## 構成案

### 既存ES記事の場合
H2セクション追加: "Aumento de Precio del JR Pass 2026: ¿Sigue Valiendo la Pena?"
- 改定前後の価格比較表
- 損益分岐分析（東京-京都間 N回以上で元取れ）
- 個別購入 vs JR Pass の意思決定フロー
- FAQ拡張

### 新規記事の場合
URL: /es/blog/japan-rail-pass-aumento-precio-2026
EditorialTrustフォーマット、6-8 H2セクション、faq-block、ES section-eyebrow

## ファクトチェック必須項目（CLAUDE.mdルール準拠）

- JR Pass現在価格（公式: japanrailpass.net）
  - 7日 / 14日 / 21日
  - Adult / Child
  - 普通車 / グリーン車
- 改定前価格（過去データ）
- 東京-京都間 新幹線正規料金（自由席/指定席/グリーン）
- 改定実施日の確定情報

## 必須ルール

1. CLAUDE.md準拠（スペイン語Editorial Trust）
2. section-eyebrow は "Sección 01 · ..." 形式（CLAUDE.md規定）
3. 機械翻訳ではなく自然なスペイン語表現
4. ファクトチェック先行（JR公式 + 観光庁公式）
5. 承認なしにcommitしない

## 期待効果

+30 traffic/月（ES）、英語版死亡時のリスクヘッジ。
ES SERPでAIO展開が来る前の先行者利益確保。

## 完了基準

- [ ] 既存ES記事の強化 or 新規記事投下
- [ ] ファクトチェック完了報告（公式ソース URL リスト）
- [ ] AppRoutes / BlogIndex / sitemap更新（新規時）
- [ ] ビルド成功
- [ ] diff報告 → 承認 → コミット
```

---

## #3 Shinkansen独立記事分離

**機会:** `shinkansen price increase` で副次的にPos 7（JR Pass記事内）
**期待効果:** +保険、JR Pass記事死亡リスクヘッジ
**ファイル:** 新規作成

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
SEO改善作業中。Ahrefs Site Explorer (2026-05-08, Global) で、メイン
URLが死亡傾向にある一方で副次KWを拾っているケースを発見した。

## 機会データ（Ahrefs）

KW: "shinkansen price increase"
- Pos 7（10位以内）
- Ranking URL: /blog/japan-rail-pass-worth-it（JR Pass記事内で副次的にランク）

問題: JR Pass記事は AI Overview に喰われて全11変異で死亡傾向。
Shinkansen独立記事として分離すれば、JR Pass記事死亡時のリスクヘッジになる。

## やってほしいこと

新規記事作成:
URL: /blog/shinkansen-ticket-price-2026-guide
タイトル候補: "Shinkansen Ticket Prices 2026: Complete Guide for Foreign Travelers"

## 構成案（Editorial Trust）

- H1: Shinkansen Ticket Prices 2026: Complete Guide
- BlogArticleHero
- イントロ（200語）
- H2: How Shinkansen Pricing Works（自由席/指定席/グリーン）
- H2: Tokyo to Major Cities: Price Reference Table
  - Tokyo-Kyoto, Tokyo-Osaka, Tokyo-Hiroshima, Tokyo-Sendai, Tokyo-Hakata
  - 自由席 / 指定席 / グリーン
- H2: Shinkansen Price Increase 2026: What Changed
- H2: Discount Options（JR Pass / 早特 / Platt Hikari / Smart EX）
- H2: How to Buy Shinkansen Tickets as a Foreign Traveler
- H2: Should You Buy JR Pass or Individual Tickets? (← /blog/japan-rail-pass-worth-it へ内部リンク)
- H2: FAQ（faq-block）

## ファクトチェック必須項目（最重要）

- JR東海/JR西日本/JR東日本公式の現行価格（2026-05時点）
- 価格改定実施日
- Smart EX / EX予約の最新仕様
- 早特の存在/廃止状況
- Platt Hikari の運行情報
- グリーン車料金

## 必須ルール

1. CLAUDE.md準拠（Editorial Trust、prose-editorial、section-eyebrow）
2. **ファクトチェック超重要**（価格情報は変動激しい、推測禁止）
3. 内部リンク: /blog/japan-rail-pass-worth-it 双方向
4. スペイン語版同時作成
5. AppRoutes / BlogIndex / sitemap追加
6. 承認なしにcommitしない

## 期待効果

JR Pass記事死亡時のリスクヘッジ + 月+50 traffic（成熟3-6ヶ月後）。
Shinkansen自体は検索ボリュームが大きい広域KW。

## 完了基準

- [ ] 英語版 + スペイン語版作成
- [ ] AppRoutes / BlogIndex / sitemap追加
- [ ] ファクトチェック完了報告（公式URL リスト）
- [ ] 内部リンク双方向化
- [ ] ビルド成功
- [ ] diff報告 → 承認 → コミット
```

---

## #7 Hakone vs Nikko 2-way比較記事分離

**機会:** 現3-way記事内で副次的に2 KW獲得（独立記事化で集中）
**期待効果:** +30 traffic/月
**ファイル:** 新規作成

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
SEO改善作業中。Ahrefs Site Explorer (2026-05-08, Global) で、3-way比較
記事内に埋もれている2-way検索意図を発見した。

## 機会データ（Ahrefs）

| KW | Vol | KD | Pos | URL |
|---|---|---|---|---|
| nikko vs hakone | 20 | 0 | 11 | /blog/kamakura-vs-hakone-vs-nikko-day-trip |
| hakone or nikko | 0 | 0 | 6 | 同上 |

両KWとも3-way記事内で副次的にランク。2-way専用記事を作れば集中して順位上昇可能。

## やってほしいこと

新規記事作成:
URL: /blog/hakone-vs-nikko-day-trip
タイトル: "Hakone vs Nikko: Which Day Trip From Tokyo Should You Choose?"

## 構成案（既存 KamakuraVsHakoneVsNikko or TsukijiVsToyosu のテンプレ準拠）

- BlogArticleHero
- Quick Decision Box（"Choose Hakone if..." / "Choose Nikko if..."）
- H2: What Hakone Is（30分のイントロ）
- H2: What Nikko Is（30分のイントロ）
- H2: Comparison Table（Distance/Time/Vibe/Best for/Cost/Best Season）
- H2: When to Choose Hakone（hot springs, Mt Fuji views, art museums）
- H2: When to Choose Nikko（temples/shrines, waterfalls, history depth）
- H2: How to Get There（Tokyo→Hakone vs Tokyo→Nikko 比較）
- H2: Sample Day Trip Itinerary（Hakone Round-Trip vs Nikko Round-Trip）
- H2: FAQ

## ファクトチェック必須項目

- 鉄道アクセス・所要時間（小田急ロマンスカー/JR日光線）
- フリーパス料金（箱根フリーパス/日光ワールドヘリテージパス）
- 主要観光地の入場料（東照宮、大涌谷、芦ノ湖等）
- 季節ベスト時期

## 必須ルール

1. CLAUDE.md準拠
2. ファクトチェック先行
3. 既存3-way記事 /blog/kamakura-vs-hakone-vs-nikko-day-trip からの内部リンク追加
   （カニバリ防止: 「For a 2-way decision specifically between Hakone and Nikko, see this dedicated guide」）
4. スペイン語版同時作成
5. AppRoutes / BlogIndex / sitemap追加
6. 承認なしにcommitしない

## 期待効果

+30 traffic/月。2-way検索意図の独占。

## 完了基準

- [ ] 英語版 + スペイン語版作成
- [ ] 既存3-way記事からの内部リンク追加
- [ ] AppRoutes / BlogIndex / sitemap追加
- [ ] ファクトチェック完了報告
- [ ] ビルド成功
- [ ] diff報告 → 承認 → コミット
```

---

## B5 `ValueComparison` コンポーネント実装

**機会:** form_submit→成約率 14% を 25%+ へ
**期待効果:** +¥160,000/月、年間 +¥1,920,000
**仕様書:** `docs/competitive-comparison-table-plan.md`（既存）

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
コンバージョン改善作業中。form_submit 月14件→成約2件（CVR 14%）の
非成約原因が「価格提示後のフェードアウト」と判明。比較テーブルで
「2人以上で実はGetYourGuideより安い」を可視化することでCVR改善を狙う。

## 仕様書

完全仕様: /Users/manabu/Desktop/private-tour-page-new/docs/competitive-comparison-table-plan.md
既に CEO/CFO/COO/CMO/CSO/アフィリエイター視点で詳細設計済み。

## やってほしいこと

仕様書に従って実装:

1. 新規ファイル:
   - src/components/tours/ValueComparison.tsx（英語版）
   - src/components/tours/ValueComparisonEs.tsx（スペイン語版）

2. 各ツアー詳細ページに組み込み:
   - src/pages/TourDetail.tsx
   - src/pages/tours/TokyoFoodTour.tsx
   - src/pages/tours/TokyoNightTour.tsx
   - その他 src/pages/es/tours/ 配下のES版

3. テーブル2種:
   - Table 1: Private vs Group Tour（体験の違い、競合名は出さない）
   - Table 2: Price Per Person（4人以上の行をハイライト）

4. デザイン要件:
   - サイト既存カラースキームに統一
   - モバイル: スクロール可能 or カード形式
   - 「Best Value」バッジ
   - 価格表示はProps駆動（tourPrice, groupTourPrice, tourDuration）

## 必須ルール

1. 仕様書（competitive-comparison-table-plan.md）の CMO 提言を厳守:
   - 競合名（GetYourGuide, Viator等）を直接出さない
   - 「Typical group tours on major booking sites」等の表現
2. 仕様書の COO デザイン要件遵守
3. ツアーページ全数（EN 11ページ + ES 9ページ）に表示確認
4. モバイル/デスクトップ両方で表示確認
5. 価格計算正確性確認
6. 承認なしにcommitしない

## 期待効果（仕様書より）

成約率 14% → 25%+ で月+¥160,000、年間 +¥1,920,000。
実装コスト ¥0（工数2時間）。ROI 実質無限大。

## 完了基準

- [ ] ValueComparison（EN/ES）コンポーネント作成
- [ ] 全ツアーページに組み込み（EN 11 + ES 9）
- [ ] モバイル表示確認
- [ ] 価格計算検証
- [ ] ビルド成功
- [ ] diff報告 → 承認 → コミット
- [ ] 4週間後の成約率測定計画
```

---

# 🟡 戦略的・要意思決定

## #5 JR Pass記事の方針転換

**機会:** 11変異全滅、AIO支配確定、現方針の延命は限界
**期待効果:** 0だが下落止め
**ファイル:** `src/pages/blog/JapanRailPassWorthIt.tsx`（推定）

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
SEO改善作業中。Ahrefs Site Explorer (2026-05-08, Global) で、JR Pass記事の
構造的死亡が確定的になった。方針転換の意思決定が必要。

## 機会データ（=死亡データ）

URL: https://tanuki-tabi-travel.com/blog/japan-rail-pass-worth-it
- Ahrefs上で18 KWでランク
- うち15 KWが Volume 0
- 全18 KWが Branded
- 推定合計traffic: 4-11/月

GSC実測（2026-05-06終端 28d）:
- Impressions: 43,487（最大流入元）
- Clicks: 36
- CTR: 0.08%（壊滅的）

仮説: AI Overviewが価格情報を直接表示し、オーガニック枠への到達を阻害。
個別KW最適化では救えない構造的死亡。

## やってほしいこと

**この作業はユーザーへの戦略的意思決定確認が必須。**

実装ではなく、まず以下の選択肢をユーザーに提示し、判断を仰ぐこと:

### 選択肢A: 「価格改定速報」→「改定後の損益分岐」へ方針転換
- タイトル変更: "Is JR Pass Worth It After 2026 Price Increase?"
- 内容: 改定後の損得計算、東京-京都-広島ルートでの分岐点、JR Pass vs Smart EX比較
- 価格情報は「最新参照」表記でAIO引用されにくい構造化
- ターゲットKW: "is jr pass worth it 2026", "jr pass vs individual tickets"

### 選択肢B: 完全新規記事に分離 + 既存をリダイレクト
- 新URL: /blog/jr-pass-worth-it-2026
- 旧URL: 301リダイレクト
- 内容を全面刷新

### 選択肢C: 延命戦略（Hook Box / Insider Note追加）
- 既存記事の冒頭にHook Box（独自視点の60-100語）追加
- AIOで引用されない「個人の意見」「経験談」を強化
- リスク: 効果未検証、撤退の機会損失

### 選択肢D: 撤退・完全廃止
- 当該URLをnoindex化
- 別記事への内部リンクを集中

## 必須ルール

1. 実装前に必ずユーザーに4選択肢を提示し、選択を仰ぐ
2. 選択後、CLAUDE.md準拠で実装
3. URLリダイレクト変更時は netlify.toml の確認必須
4. スペイン語版の連動方針も提案

## 完了基準

- [ ] 4選択肢のメリット・デメリット・期待値を表で提示
- [ ] ユーザーの選択受領
- [ ] 選択肢に応じた実装プラン提示
- [ ] 承認後に実装
```

---

## C2 Desktop CTR 0.13% の SERP実機検証

**機会:** Desktop CTR 0.13% の真因特定（仮説: AI Overview）
**期待効果:** 施策の前提条件、Desktop CTR全体回復のレバー
**成果物:** 検証レポート（実装ではない）

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
SEO改善作業中。GSC（2026-05-06終端 28d）で Desktop CTR 0.13% という
壊滅的な数値を検出。これはMobile CTR 1.11% の1/8で、順位差では説明不能。

## 検証データ

| Device | Impressions | Clicks | CTR | Position |
|---|---|---|---|---|
| Mobile | 15,164 | 169 | 1.11% | 6.28 |
| Desktop | 85,194 | 114 | 0.13% | 7.02 |
| Tablet | 273 | 4 | 1.47% | 6.01 |

Desktop が impression の85% を保持しながら CTR が Mobile の1/8。

仮説: AI Overview / People Also Ask / Featured Snippet が Desktop SERP で
大きく表示され、自然枠への到達を阻害している。

## 検証対象URL（GSCで impression最大3件）

1. /blog/japan-rail-pass-worth-it（Imp 43,487 / CTR 0.08%）
2. /blog/japan-temple-shrine-etiquette（Imp 7,800 / CTR 0.05%）
3. /blog/tsukiji-market-guide（Imp 22,676 / CTR 0.37%）

## やってほしいこと

**この作業は実装ではなく、検証レポート作成。**

ファイル: docs/seo/desktop-ctr-investigation-2026-05.md（新規）

以下を実機検証して文書化:

### 検証手順
1. 上記3URLについて、Ahrefs MCP serp-overview ツールで以下を取得:
   - mcp__claude_ai_Ahrefs__serp-overview（target=各KW, country=US, device=desktop）
   - 同じくdevice=mobile
   - serp_features の存在を確認

2. AI Overview / People Also Ask / Featured Snippet が:
   - Desktop SERP のどの位置に出現しているか
   - 我々の記事の内容を引用しているか
   - 縦方向のスペースをどれだけ占有しているか

3. 各URLの主要KW（GSC上位）について比較表作成:

| URL | 主要KW | Desktop AIO有無 | Mobile AIO有無 | 我々のPos | 我々のCTR |
|---|---|---|---|---|---|

4. 仮説検証結論:
   - 仮説支持: AIO/PAA/Snippet がDesktop自然枠を阻害している
   - 仮説反証: 別の原因（クエリ意図ずれ、スニペット表示問題等）

5. 対応策の優先順位:
   - 即効施策（Hook Box / Insider Note 追加で AIO 引用回避）
   - 中期施策（クエリ意図適応で別の上位枠を取りに行く）
   - 撤退判断（救済不可能な記事の特定）

## 必須ツール

- mcp__claude_ai_Ahrefs__serp-overview
- mcp__claude_ai_Ahrefs__site-explorer-organic-keywords（プラン制限あり、要確認）
- mcp__claude_ai_Ahrefs__keywords-explorer-overview

注: ユーザーのAhrefsプランがAPI制限あり。"Insufficient plan" エラー時は
手動でAhrefs Web UIでスクリーンショット取得を依頼。

## 必須ルール

1. レポートは事実ベース、推測と区別して記述
2. データソースのURL/取得日を明記
3. 結論にはアクション可能な打ち手を含める

## 完了基準

- [ ] 3URL × 主要KW × Desktop/Mobile のSERP分析完了
- [ ] AI Overview影響度の定量化（impression占有率%等）
- [ ] desktop-ctr-investigation-2026-05.md 作成
- [ ] 対応策優先度マトリクス
- [ ] 報告 → 次施策の判断
```

---

## C3 新URL `tokyo-tour-platforms-compared` 専用記事

**機会:** #1の発展形、専用URLで深掘り
**期待効果:** 3-6ヶ月後に独立成長、Commercial KW捕捉
**ファイル:** 新規作成

```
コンテキスト:
私は tanuki-tabi-travel.com（Manabuの東京プライベートツアーガイド英語サイト）の
SEO改善作業中。2026-05-09 に既存記事 /blog/is-it-worth-hiring-a-tour-guide-in-tokyo
にプラットフォーム比較セクションを追加済み（commit 9b6aca6）。

今回はその発展形として、競合ブランド比較に特化した専用記事を新規投下。
既存記事は「ガイドを雇うべきか？」がテーマ、新規記事は「どのプラットフォームを
使うべきか？」がテーマで意図が異なるため、カニバリ回避可能。

## ターゲットKWクラスター

- "tokyo tour platforms compared"
- "gowithguide vs viator"
- "magical trip vs gowithguide"
- "best tokyo tour platform 2026"
- "viator vs getyourguide tokyo"
- "where to book private tour tokyo"

## やってほしいこと

新規記事:
URL: /blog/tokyo-tour-platforms-compared
タイトル候補: "Best Tokyo Tour Booking Platforms 2026: Honest Comparison"

## 構成案

- BlogArticleHero（"Compared by a licensed Tokyo guide"）
- イントロ（200語）
- H2: At a Glance: Platform Comparison Table
  | Platform | Format | Price/Person | Licensed? | Direct Contact |
- H2: GoWithGuide: Marketplace Model
- H2: Magical Trip: Tour Operator Model
- H2: Viator: Aggregator Model
- H2: GetYourGuide: Aggregator Model
- H2: Direct Booking: Why It Often Wins
- H2: Decision Tree: Which Platform Should You Use?
- H2: 5 Red Flags to Watch For
- H2: FAQ

## ファクトチェック必須項目（重要）

2026-05-09 検証済みデータ（既存記事で使用）:
- GoWithGuide: $100-600/グループ、$35-45/時間、手数料20-30%
- Magical Trip: $76-168/人（多くは）、最大$271/人
- Viator: プライベート $100-150/人
- GetYourGuide: プライベート $140〜/人
- 全国通訳案内士: 27,950人（2025-04-01時点、MLIT/JNTO公式）

新規確認事項:
- 各プラットフォームのレビュー制度の信頼性
- キャンセルポリシー
- カスタマーサポート対応言語
- 各社の歴史・上場状況（信頼性プルーフ）

## 必須ルール

1. CLAUDE.md準拠
2. ファクトチェック先行（2026-05-09時点の公式情報）
3. 既存記事 /blog/is-it-worth-hiring-a-tour-guide-in-tokyo からの内部リンク追加
4. スペイン語版同時作成
5. AppRoutes / BlogIndex / sitemap追加
6. CTAは弊社 /tours と /contact 中心、競合へのアフィリエイトリンクは入れない
7. 承認なしにcommitしない

## 期待効果

3-6ヶ月後に独立成長、Commercial意図KW捕捉、ブランド検索者が
弊社サイトに着地する確率向上。

## 完了基準

- [ ] 英語版 + スペイン語版作成
- [ ] 既存記事との双方向内部リンク
- [ ] AppRoutes / BlogIndex / sitemap追加
- [ ] ファクトチェック完了報告
- [ ] ビルド成功
- [ ] diff報告 → 承認 → コミット
```

---

# 🔧 運用・データ整備

## D1 2026-05-06 GA/GSCスナップショット コミット

**目的:** 履歴保全
**工数:** 1分

```
プロジェクトルートで以下を実行:

git add docs/analytics/raw/2026-05-06_28d_*.json
git commit -m "$(cat <<'EOF'
chore(analytics): 2026-05-06 GA4/GSC 28d snapshot

End date 2026-05-06 (GSC delay-aware default).
Total: 12 files (GA4: 6, GSC: 6).

Key deltas vs 2026-04-26 prev28d:
- GSC clicks 287 (-13.3%), impressions 100,631 (-26.1%)
- GA4 sessions 564 (-24.3%), users 446 (-24.1%)
- Mobile CTR 1.11% / Desktop CTR 0.13% (Desktop AIO suspect)
EOF
)"
```

---

## D2 `.gitignore` 更新

**目的:** エージェント設定ファイルを git管理外へ
**工数:** 5分

```
プロジェクトルートで .gitignore に以下を追加:

# Agent configurations (per-developer)
.agents/
.aidesigner/
.claude/
.codex/
.mcp.json
AGENTS.md

# 注: AGENTS.md は内容次第で残すか判断
# 注: .claude/settings.local.json はすでに gitignore されているか確認

その後:
git add .gitignore
git commit -m "chore: gitignore agent configuration files"
```

---

## D3 画像リネーム

**目的:** ファイル名のスペース・括弧除去（URL/ビルドリスク回避）
**工数:** 2分

```
プロジェクトルートで以下を実行:

mv "public/images/tour-photos/PXL_20260322_054435391 (1).jpg" \
   "public/images/tour-photos/pxl-20260322-054435391.jpg"

# 使用箇所確認:
grep -rn "PXL_20260322_054435391" src/ public/ 2>/dev/null

# 使用がなければ単純コミット
git add public/images/tour-photos/
git commit -m "chore: rename image to remove spaces and parens in filename"
```

---

## D4 `competitive-comparison-table-plan.md` 価格情報を最新値に更新

**目的:** 2026-03時点の価格を 2026-05-09 検証値に更新
**工数:** 10分

```
ファイル: docs/competitive-comparison-table-plan.md

更新箇所:
- 「市場調査結果（2026年3月時点）」→「市場調査結果（2026年5月時点）」
- GoWithGuide: 既存 ¥32,000-50,000/グループ → $100-600/グループ で再検証
- Magical Trip: 既存 ¥32,000〜/グループ → $76-168/人（多くは）に修正
- Viator: 既存 $100-200/人 → $100-150/人 に修正
- GetYourGuide: 既存 $399〜/6人 → $140〜/人 に修正

参照: src/pages/blog/IsItWorthHiringGuide.tsx の Section 05 で使用した値
（2026-05-09 web search で検証済み）

git add docs/competitive-comparison-table-plan.md
git commit -m "docs: update competitor pricing to 2026-05 verified values"
```

---

## D5 ES記事の `section-eyebrow` を「Section」→「Sección」へ統一

**目的:** CLAUDE.md ルール「section-eyebrow ラベルはスペイン語で書く」準拠
**工数:** 15分

```
コンテキスト:
CLAUDE.md規定: section-eyebrow ラベルはスペイン語で書く（"Sección 01 · Título"）

現状: 多くのES記事で "Section 01 · ..." のまま英語prefix。

調査:
grep -rn 'section-eyebrow.*Section [0-9]' src/pages/es/

ファイル候補（ES blog全数）:
src/pages/es/blog/*.tsx

修正:
各ファイルで以下を sed で一括置換:

for f in src/pages/es/blog/*.tsx; do
  sed -i.bak 's/<span>Section \([0-9]\+\) ·/<span>Sección \1 ·/g' "$f"
done

# .bak バックアップ削除
find src/pages/es/blog/ -name "*.bak" -delete

# ビルド確認
npm run build

# diff確認 + コミット
git diff src/pages/es/blog/ | head -100
git add src/pages/es/blog/
git commit -m "chore(es): align section-eyebrow labels to Spanish per CLAUDE.md"
```

---

# 📊 KPI 追跡

## 直近の数値（2026-05-06終端 28d）

| 指標 | 値 | 前期比 |
|---|---|---|
| GSC clicks | 287 | -13.3% |
| GSC impressions | 100,631 | -26.1% |
| GSC CTR | 0.285% | +0.04pt |
| GA4 sessions | 564 | -24.3% |
| GA4 conversions (Organic) | 69 | – |
| Mobile CTR | 1.11% | – |
| Desktop CTR | 0.13% | – |

## 月次KPI目標（前計画より）

| KPI | 目標 | 現状 | 達成率 |
|---|---|---|---|
| 月間 1,500 clicks | 1,500 | 287 (28d) ≒ 308 (30d) | 21% |
| PC CTR 1.0% | 1.0% | 0.13% | 13% |
| ES CTR 1.5% | 1.5% | 1.07% | 71% |
| form_submit→成約率 25% | 25% | 14% | 56% |

---

# 🔁 推奨実行順（再掲）

```
今すぐ:  D1 (analytics commit) → #2 (tsuki market) → #10 (kamakura day trip)
今日中:  #9 (Tsukiji hours), #8 (KW拡張), D2 (gitignore)
今週:    #4 (テンプレ横展開), #6 (ES JR Pass), C2 (Desktop AIO検証)
今月:    #5 (JR Pass方針転換), C3 (専用比較記事), B5 (ValueComparison)
```

---

**更新履歴**
- 2026-05-09: 初版作成。SEO分析セッションから抽出した15タスクを記載。

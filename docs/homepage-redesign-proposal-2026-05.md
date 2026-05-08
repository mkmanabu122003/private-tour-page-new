# Homepage Redesign Proposal — 2026-05

**Status**: Draft for review
**Scope**: `src/pages/Index.tsx` (English homepage `/`), with parity update for Spanish `/es/`
**Goals**:
1. ヒーローのデッドクリック17%（PC, Clarity 2026-04-26）を解消し、CTA/ナビ意図を回収
2. 30%スクロールでの離脱を抑え、Featured Tours到達率を上げる
3. `blog_to_tour_click = 1/28d` の壊れたファネルにトップページからもアシストを入れる
4. 個人ガイド（Manabu）のブランドを、競合と差別化された形で前面に出す

---

## 1. 競合リサーチ要約

主要キーワード（"tokyo private tour guide" / "private tokyo tour" / "licensed tour guide tokyo"）でGoogle上位に表示される7サイトを分析。**直接競合（個人ガイド型ソロサイト）** は薄く、**マーケットプレイス型** が上位を占める構造。

| 競合 | 型 | 強み（学べる点） | 弱み（差別化機会） |
|---|---|---|---|
| **City Unscripted** | プラットフォーム | 28,263+ 5★レビュー強調・ホストプロフィール詳細・UGC masonry galleries・透明な"From $XXX"価格 | 個性が薄い／「ホストの一人」感 |
| **The Backstreet Guides** | 小規模エージェンシー | TripAdvisor Travelers' Choice 2024 & 2025 バッジ・**11件の実名レビュー**・写真主導 | 1人ガイドの一貫したストーリーがない |
| **Tokyo Zebra** (Nori) | ソロガイド | YouTuber Paolo経由の**個人物語フック**・モノクロ統一・カテゴリー選択UI（Restaurant/Nightlife/Shopping） | レビュー数が少ない・写真品質が並 |
| **Personal Guide JP** | ソロガイド | TripAdvisorバッジ・Gallery carousel | "currently suspended"と表示中・古いデザイン |
| **Keikaku Japan** | エージェンシー | **インタラクティブ価格計算機**・人数×季節×時間のpricing matrix・JNTO公認表示 | 個人色なし・Booking.com的 |
| **Your Japan Private Tours** | ソロエキスパート | "Since 1990" / 著書 / Microsoft等の法人実績 → **権威の積み上げ** | デザインがWordPress感・写真小さい |
| **Japan Guide Agency** | エージェンシー | サンプル6時間行程の具体性 | テキスト過多・写真ほぼなし |

### 競合に共通する「勝ちパターン」

1. **ホストプロフィールを早めに見せる**（顔・名前・経歴・好きなもの）
2. **5★レビュー数を巨大に見せる**（28,263+ / 11件実名 / 4.86★ではなく "500 reviews"）
3. **TripAdvisor / Travelers' Choice のサードパーティ・バッジ**で第三者証明
4. **UGC / 実際のツアー写真ギャラリー**を1セクション割く（City Unscripted の masonry が圧倒的）
5. **"How It Works" 3-4ステップ**でリスク（"問い合わせて返事来るかな"）を下げる
6. **価格透明性**（"From ¥45,000" や 比較表）— 問い合わせ前に判断材料を渡す
7. **カテゴリー選択UI**（"Food" / "History" / "Nightlife" 等）でinterest-driven discovery

### Manabuサイトが既に持っているもの（強み）

- ✅ 4.86★ / 500+ tours の signal（ヒーロー直下）
- ✅ Tour Photos carousel（実際のツアー写真）
- ✅ 3-step How It Works
- ✅ Featured Tours carousel（9 tours + custom）
- ✅ Tour Match cards（"First Time" / "Food" / "Quiet" / "Day Trips"）
- ✅ JSON-LD with aggregateRating

### Manabuサイトに弱い／欠けているもの（改善機会）

| # | 課題 | 競合の参考 | 影響 |
|---|---|---|---|
| **A** | ヒーローが**汎用コピー**（"Tokyo Private Walking Tours with a Licensed Local Guide"） — Manabuの個人色ゼロ | Tokyo Zebra「Paolo & Nori」/ YJPT「Ian since 1990」 | 🔴 ブランド差別化 |
| **B** | ヒーロー全面に `cursor-pointer` でスクロール仕掛け → **17% PC dead click** の原因 | 競合は明確なCTAボタンのみ | 🔴 CV直撃 |
| **C** | Trust Signals が「Licensed / 4.86★ / Private / 24h」の**抽象ラベル4つ** — 数字の重みが薄い | "11 reviews shown" / "28,263+ 5-star reviews" / Travelers' Choice 2024-2025バッジ | 🔴 第三者証明 |
| **D** | テスティモニアル**3件**（しかも著者が "Couple" / "Solo traveler" など匿名汎用） | Backstreet Guides 11件・実名・日付・特定ガイド名 | 🟡 信頼性 |
| **E** | ホストプロフィール（Manabu自身）が下から**2セクション目**（about-section） | City Unscripted・Tokyo Zebra は **ヒーロー直後**に顔写真+ストーリー | 🟡 個人ブランド |
| **F** | Tour Photos のキャプションが弱い（"Group tour in Tokyo" など説明的） | City Unscripted は "Standing together beneath Tokyo's iconic pagoda..." の物語的キャプション | 🟢 体験訴求 |
| **G** | **TripAdvisor / Google Reviews への外部リンク無し** | Personal Guide JP・Backstreet Guides は TripAdvisorバッジを表示 | 🟡 第三者証明 |
| **H** | **FAQ がトップにない**（FAQページに別途あるが、ホームから問い合わせ前に解決できない） | City Unscripted は4 FAQ をアコーディオンで配置 | 🟡 摩擦低減 |
| **I** | **Press / "as seen in" 列**がない（ブログがあるのにメディア露出を見せていない） | YJPT は法人クライアント名（Microsoft, Google）を列挙 | 🟢 権威 |
| **J** | **言語切替（EN/ES）の存在感が弱い** | Personal Guide JP は flag アイコンで明示 | 🟢 国際性 |
| **K** | Featured Tours の前に Testimonials → Tour Finder → Featured Tours と **3セクションの「考えさせる前置き」** がある | 競合は Hero → Tours grid を最短2セクションで提示することが多い | 🟡 直帰防止 |

---

## 2. 改善方針 — 推奨セクション構成（After）

### 設計原則
- **Above the fold で「誰が／何を／どんな実績で」が90秒で伝わる**
- **デッドクリック解消**：ヒーロー全面のクリック領域を撤廃、明確な2つのCTAのみ
- **個人ブランド前傾**：Manabuの顔・名前・ストーリーを**ヒーロー直下**に
- **Third-partyソーシャルプルーフ強化**：TripAdvisor / Google 外部リンク + 数字の物量
- **モバイルファースト**：スティッキーCTAでLPバリュー保持

### 提案セクション順（変更点）

| # | セクション | 変更 | Why |
|---|---|---|---|
| 1 | **Hero** | コピー差し替え／背景クリック領域削除／シグナル要素統合 | A, B解決 |
| 2 | **Meet Manabu** (NEW position) | About-sectionをヒーロー直下に上げる | E解決 |
| 3 | **Social Proof Strip** | TripAdvisor / Google のレビュー数バッジ + Travelers' Choice相当があれば | C, G解決 |
| 4 | **Tour Finder cards** | 4カードのまま（残す） | K緩和 |
| 5 | **Featured Tours carousel** | 残す（位置変更なし） | — |
| 6 | **Tours in Photos** | masonry/グリッドに変更 + 物語的キャプション | F解決 |
| 7 | **Testimonials** | 6件に増量、実名+国・日付・特定ツアー名を入れる | D解決 |
| 8 | **Quick FAQ** (NEW) | アコーディオン4件（"What if it rains?" / "Vegetarian?" / "How far in advance?" / "Cancellation?"） | H解決 |
| 9 | **How It Works** | 残す | — |
| 10 | **Final CTA** | 残す | — |
| (固定) | **Mobile sticky CTA** (NEW) | 下部固定 "Request Tour" ボタン | モバイルCV |

### セクション別の具体提案

#### ① Hero（最重要）

**現行**:
```
Tokyo Private Walking Tours with a Licensed Local Guide
A private Tokyo tour shaped around your interests, pace, and questions.
[Request Your Private Tour] [See Tour Options]
```

**提案A（個人ブランド寄り）**:
```
H1: Hi, I'm Manabu — your licensed Tokyo guide.
Sub: A 1-on-1 walking tour shaped around what you came here for. 500+ tours, 4.86★, no mixed groups.
[Request a Private Tour]  [Browse Tours]
```

**提案B（SEO寄り、現行の検索意図を維持しつつ個人色追加）**:
```
H1: Tokyo Private Walking Tours — guided 1-on-1 by Manabu, your licensed local.
Sub: 500+ tours · 4.86★ · No mixed groups · Reply within 24 hours.
[Request a Private Tour]  [Browse Tours]
```

**ビジュアル変更**:
- 背景を group photo (現行) → **Manabuがゲストと笑顔で歩いている1枚**（顔が見えるもの）に変更
- 全面 `cursor-pointer` の onClick を**削除**（dead clickの根治）
- スクロール促進が必要なら、ヒーロー下に小さな ⌄ アイコンだけ置く

#### ② Meet Manabu（昇格）

現状の About セクションを**ヒーロー直下**へ移動。プロフィール写真を**右ではなく左**（読み始めの視線位置）に。

**追加コピー要素**:
- 「**Born in Kanazawa, raised in Kyoto, lived in Tokyo for X years**」（既にある）
- 「**500+ tours since [year]**」（年号でAuthority）
- 「**Vegetarian/halal/allergy-friendly** — tell me before, I'll plan around it」（差別化）
- 「**Featured in: [blog/外部メディア名]**」← もし露出があれば

#### ③ Social Proof Strip（NEW）

TripAdvisor / Google Reviews の**実数バッジ**を横並び:

```
[TripAdvisor logo]              [Google logo]
4.9 ★★★★★                       4.86 ★★★★★
Read all 200+ reviews →         Read all 500+ reviews →
```

→ 外部リンクで権威を借りる。アグリゲーション値だけでなく**reviewレーティング元のURL**を必ず貼る。

#### ⑥ Tours in Photos（強化）

現行: 5枚 carousel・短いキャプション

**提案**: **9枚のmasonry grid**（City Unscripted方式）+ 物語的キャプション例:
- "Sharing the first sip of fresh sake with a couple from Texas"
- "Watching the sunset over Mt. Fuji from Hakone with first-time visitors to Japan"
- "Helping a vegetarian guest find perfect Tsukiji street food"

→ "Manabuの実体験" を強く感じさせ、AI/汎用ガイドとの差別化。

#### ⑦ Testimonials（強化）

**現行3件 → 6件**。各レビューに:
- 実名 or イニシャル + 国 (例: "Sarah M., USA")
- 日付（"April 2026"）
- 特定ツアー名（"Asakusa Walking Tour"）
- 1-2行の summary headline + 本文

スクロール可能なグリッドで6件、最後に「Read all 500+ reviews on TripAdvisor →」外部リンク。

#### ⑧ Quick FAQ（NEW）

ヒーローに近い位置にアコーディオン4件:
- "What if it rains on the day?"
- "I'm vegetarian / have allergies — can you accommodate?"
- "How far in advance should I book?"
- "What's your cancellation policy?"

→ 問い合わせ前の摩擦を減らす。FAQページへの "See all 20+ FAQs" リンクで深堀り誘導。

#### Mobile Sticky CTA（NEW）

スクロール400px以降に表示される下部固定バー:
```
[ Request a Tour — replies in 24h ]
```

→ Featured Tours以降の長いセクションでもCV機会を維持。

---

## 3. 段階的実装プラン

| Phase | タスク | 工数目安 | 優先度 |
|---|---|---|---|
| **P0** (即効) | ヒーロー dead click 削除 + コピー差し替え + Trust Signals strip 改修 | 半日 | 🔴 |
| **P1** (1週間) | Meet Manabu 昇格 / Social Proof Strip 追加 / Quick FAQ 追加 | 2-3日 | 🔴 |
| **P2** (2週間) | Testimonials 6件化（実データ収集要）/ Tours in Photos masonry化 | 1週間 | 🟡 |
| **P3** (任意) | Mobile sticky CTA / Press strip / 多言語切替バッジ | 2-3日 | 🟢 |

**スペイン語版**: P0-P2 の各変更について `/es/` 側にも同等の変更を反映。コピーはそのまま機械翻訳ではなく、自然なスペイン語に。

---

## 4. 計測

実装後に追跡したい指標（GA4 + Clarity）:
- **PC dead click率**（17% → 5%以下が目標）
- **30%スクロール到達率**（Featured Tours到達率）
- **`book_now_click` イベント増減**（hero CTA / sticky CTA / footer CTA でセグメント化）
- **TripAdvisor外部リンクのクリック数**（信頼導線の確認）
- **モバイル sticky CTA のCTR**（実装する場合）

---

## 5. オープン質問

実装に進む前に確認したい点:

1. **TripAdvisor / Google Reviews の現在のレビュー数とリンクURL** はある？（Social Proof Stripで外部リンクするのに必要）
2. **Travelers' Choiceや類似の第三者バッジ**は受賞している？
3. **press / "as seen in"** の外部メディア露出は？（無ければ Press strip は省略でOK）
4. ヒーロー写真は「**Manabuがゲストと笑顔で歩く1枚**」を新調するか、既存の `asakusa-guest-selfie.webp` 等を流用するか？
5. **Quick FAQ 4件** はこの提案文言で良いか、修正したい？
6. **6件分のテスティモニアル**実データの所在（Google Business Profile / TripAdvisor / 過去メール）は？

---

*Generated 2026-05-08 from competitive research (7 sites: City Unscripted, The Backstreet Guides, Tokyo Zebra, Personal Guide JP, Keikaku Japan, Your Japan Private Tours, Japan Guide Agency) + existing analytics inventory (`docs/seo/2026-04_inventory.md`).*

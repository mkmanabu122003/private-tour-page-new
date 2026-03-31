# 実装計画: ツアーページ競合比較テーブル

**目的:** 価格提示後のフェードアウト（月12件中の多数）を解消するため、ツアーページに「なぜこの価格なのか」を競合比較で証明する

---

## 現状の問題（データ根拠）

- 月14件のform_submit → **2件しか成約しない**（CVR 14.3%）
- 非成約の主要原因: **料金提示後にフェードアウト**
- 仮説: GetYourGuide等のグループツアー（¥5,000〜15,000/人）と比較して「高い」と感じている
- 実際: 4人グループなら**1人あたり¥7,500**でGYGと同等以下

---

## CEO分析: なぜこの施策が最優先か

**失注12件 × ¥40,000 = ¥480,000/月の機会損失。**

この12件の顧客は既に:
1. ブログ記事を読んでManabuを信頼している
2. ツアーページを閲覧している
3. contactフォームに個人情報を入力して送信している

**購買意思の最も高い段階で離脱している。** これは「集客」ではなく「説得」の問題。比較テーブルは「¥30,000は高い」→「実は1人¥5,000でGetYourGuideより安い」への認知転換ツール。

**期待効果:**
- 成約率 14% → 30% に改善 = 月4件追加 = **+¥160,000/月**
- 年間: **+¥1,920,000**
- 実装コスト: ¥0（工数2時間のみ）
- **ROI: 実質無限大**

---

## CFO分析: 数字で見る価格の真実

### Tanuki Tabi vs 競合の実際の価格比較

**市場調査結果（2026年3月時点）:**

| 項目 | GetYourGuide グループツアー | Viator グループツアー | GoWithGuide プライベート | **Tanuki Tabi プライベート** |
|------|--------------------------|---------------------|----------------------|--------------------------|
| 浅草ウォーキング (3h) | ¥6,000〜12,000/人 | ¥1,700〜8,000/人 | ¥32,000〜50,000/グループ | **¥30,000/グループ** |
| フードツアー (3-4h) | ¥10,000〜18,000/人 | ¥8,000〜15,000/人 | ¥35,000〜55,000/グループ | **¥30,000~/グループ** |
| 日帰り旅行 (7-10h) | ¥15,000〜30,000/人 | ¥12,000〜25,000/人 | ¥50,000〜80,000/グループ | **¥50,000〜60,000/グループ** |

### 1人あたり価格の逆転ポイント

| グループ人数 | GYG グループ (浅草) | **Tanuki Tabi (浅草)** | 差額 |
|------------|-------------------|----------------------|------|
| 1人 | ¥8,000 | **¥30,000** | GYGが¥22,000安い |
| 2人 | ¥16,000 | **¥15,000/人** | Tanukiが¥1,000安い |
| 3人 | ¥24,000 | **¥10,000/人** | Tanukiが¥14,000安い |
| 4人 | ¥32,000 | **¥7,500/人** | Tanukiが¥2,000安い |
| 6人 | ¥48,000 | **¥5,000/人** | Tanukiが¥18,000安い |

**CFO提言:** 比較テーブルでは**2人以上でプライベートツアーの方がお得**であることを明示する。1人旅行者向けには別途Mini Tour（¥15,000）の導入を検討。

---

## COO分析: 実装設計

### コンポーネント構成

```
src/components/tours/ComparisonTable.tsx  ← 新規作成（再利用可能）
```

**表示場所:** 各ツアー詳細ページ（TourDetail.tsx, TokyoFoodTour.tsx, TokyoNightTour.tsx）の
「What's Included」セクションの下、CTAボタンの上に配置

### テーブルの構成

**2つのテーブルを表示:**

#### テーブル1: 「Private vs Group Tour」（体験の違い）

| | Group Tour (OTA) | Private Tour (Tanuki Tabi) |
|---|---|---|
| Group Size | 10-20 strangers | Just your group (1-6) |
| Route | Fixed, no customization | Fully customized to your interests |
| Pace | Rush to keep schedule | Your pace, stop whenever you want |
| Guide Credential | Varies (often unlicensed) | National Government Licensed (全国通訳案内士) |
| Language Barrier | Guide speaks to group | Guide speaks directly to you |
| Dietary Needs | Not accommodated | Fully customized (vegetarian, halal, etc.) |
| Booking Flexibility | Fixed departure times | Any date, any time |
| Cancellation | Varies | Free cancellation 48h before |

#### テーブル2: 「Price Per Person」（価格の逆転を見せる）

| Group Size | Typical Group Tour | Tanuki Tabi (per person) | You Save |
|------------|-------------------|------------------------|----------|
| 2 people | ~¥8,000/person | ¥15,000/person | — |
| 3 people | ~¥8,000/person | ¥10,000/person | — |
| 4 people | ~¥8,000/person | **¥7,500/person** | **¥500/person** |
| 5 people | ~¥8,000/person | **¥6,000/person** | **¥2,000/person** |
| 6 people | ~¥8,000/person | **¥5,000/person** | **¥3,000/person** |

→ 4人以上の行をハイライト（アクセントカラーの背景）

### レスポンシブ対応
- デスクトップ: 横並びテーブル
- モバイル: カード形式に変換（各行が1カード）

### COO提言
- テーブルは`ComparisonTable`として再利用可能コンポーネントにする
- ツアーIDを渡すと対応する価格を自動計算
- スペイン語版も同一コンポーネントで言語切り替え

---

## CMO分析: メッセージング戦略

### やってはいけないこと

1. **競合の名前を直接出さない** — 「GetYourGuide」「Viator」等の固有名詞は使わない。「Typical group tours on major booking sites」等の表現にする
2. **競合を「悪い」と言わない** — 「Group tours aren't bad, they're just different」のトーン
3. **嘘の価格を載せない** — 競合の価格は「typical range」として幅を持たせる

### やるべきこと

1. **「1人あたり¥5,000」を最も目立つ位置に** — この数字が認知を変える最大のフック
2. **体験の違いを先に、価格を後に** — 価格だけの比較だと「安かろう悪かろう」と思われる
3. **「Licensed Guide」の希少性を強調** — 日本の国家資格ガイドは全国で数千人のみ
4. **ソーシャルプルーフを添える** — 「500+ tours completed, 4.86★」をテーブル近くに

### セクションの見出し案

```
❌ "Why We're Better Than Group Tours"  ← 攻撃的
❌ "Comparison With Competitors"  ← ビジネス的すぎる
✅ "Private Tour vs Group Tour: What's the Difference?"  ← 中立的、検索クエリにもマッチ
✅ "Is a Private Tour Worth the Price?"  ← 読者の疑問に直接回答
```

**推奨:** 「Is a Private Tour Worth It?」— このフレーズは実際にGSCで「is it worth hiring a tour guide in tokyo」（1,179imp）として検索されており、既存記事とも連動する。

### スペイン語版

見出し: 「¿Vale la Pena un Tour Privado?」
— スペイン語でも「vale la pena」（worth it）は強力なフック

---

## CSO分析: 戦略的リスクと機会

### リスク

| リスク | 確率 | 対策 |
|--------|------|------|
| 競合がこの比較を見て対抗措置を取る | 低 | GYGは価格を下げる余地がない（手数料25-30%） |
| 1人旅行者が「高い」と感じて離脱 | 中 | Mini Tour（¥15,000/2h）の導入を検討 |
| 価格比較が「安売り」に見える | 低 | 体験の違いを先に、価格を後に。品質を前面に |

### 機会

1. **SEOボーナス:** 「private tour vs group tour tokyo」はロングテールKW。比較コンテンツとして新しいクエリを獲得できる
2. **内部リンク強化:** 既存の「is-it-worth-hiring-a-tour-guide-in-tokyo」記事から比較テーブルへリンク
3. **Schema活用:** FAQ Schema「Is a private tour worth the price?」を追加可能

### 競合の動向

- **GetYourGuide:** プライベートツアーは$399/グループ（6人）〜。品質管理が課題。
- **Viator:** グループツアーが主力。プライベートは$100-200/人で高め。
- **GoWithGuide:** プライベートガイドマッチング。¥32,000-50,000/グループ。Tanuki Tabiと最も直接競合。
- **MagicalTrip:** ¥32,000〜/グループ。TripAdvisor Best of Best受賞。

**Tanuki Tabiの決定的差別化:** 国家資格 + SEOブログ + 3ヶ国語 + 完全カスタム。この組み合わせは競合にない。

---

## アフィリエイター分析: 比較テーブルの収益化

### 直接的な収益効果

比較テーブル自体はアフィリエイトリンクを含まない（自社ツアーのCTAが優先）。
ただし、**成約率改善は間接的に全収益を底上げ**する。

### 間接的な効果

「Private tour vs group tour tokyo」で上位表示されれば:
- この記事自体に月500+impが期待できる
- 記事内の「group tour」セクションでGYG/Viatorのアフィリエイトリンクを設置可能（「If you prefer a group tour, here are some options: [affiliate link]」）

**ただし、ツアーページ内では自社CTA優先。アフィリエイトリンクは入れない。**

---

## 実装仕様

### ファイル構成

```
新規:
  src/components/tours/ValueComparison.tsx    — 比較テーブルコンポーネント
  src/components/tours/ValueComparisonEs.tsx  — スペイン語版

変更:
  src/pages/TourDetail.tsx        — 比較セクションを追加
  src/pages/tours/TokyoFoodTour.tsx   — 同上
  src/pages/tours/TokyoNightTour.tsx  — 同上
```

### コンポーネントProps

```tsx
interface ValueComparisonProps {
  tourPrice: number;       // グループ料金（例: 30000）
  tourDuration: string;    // 時間（例: "3 hours"）
  groupTourPrice: number;  // 競合グループツアーの1人あたり目安（例: 8000）
}
```

### デザイン要件

- サイト既存のカラースキーム・フォントに統一
- テーブル1（体験比較）: 左列にグレー背景（Group）、右列にアクセント系背景（Private）
- テーブル2（価格比較）: 4人以上の行にアクセントカラーのハイライト + 「Best Value」バッジ
- CTAボタン: テーブル直下に「Book Your Private Tour」
- モバイル: スクロール可能テーブル or カード形式

### テスト計画

1. 全ツアーページで表示確認（EN 11ページ + ES 9ページ）
2. モバイル/デスクトップ両方で表示確認
3. 価格計算の正確性確認（tourPrice ÷ 人数 = 1人あたり）
4. スクリーンリーダー対応（table要素にaria-label）

---

## 実施スケジュール

| ステップ | 作業 | 工数 |
|---------|------|------|
| 1 | ValueComparisonコンポーネント作成（EN + ES） | 1h |
| 2 | TourDetail.tsx に組み込み（全9ツアー） | 30min |
| 3 | TokyoFoodTour.tsx / TokyoNightTour.tsx に組み込み | 15min |
| 4 | 表示確認・ビルドテスト | 15min |
| **合計** | | **2h** |

---

## 完了基準

- [ ] ValueComparisonコンポーネント作成（EN）
- [ ] ValueComparisonEsコンポーネント作成（ES）
- [ ] 全ツアーページに組み込み
- [ ] モバイル表示確認
- [ ] ビルド成功
- [ ] 4週間後にform_submit→成約率を測定（目標: 14%→25%以上）

Sources:
- [GoWithGuide: Tokyo Private Guide Pricing](https://gowithguide.com/blog/how-much-is-a-local-private-guide-in-tokyo-2905)
- [GetYourGuide Tokyo Private Tours](https://www.getyourguide.com/tokyo-l193/private-tours-tc221/)
- [Viator Tokyo Private & Custom Tours](https://www.viator.com/Tokyo-tours/Private-and-Custom-Tours/d334-g26)
- [MagicalTrip Tokyo Tours](https://www.magical-trip.com/)
- [GetYourGuide Asakusa Walking Tours](https://www.getyourguide.com/asakusa-l139311/)

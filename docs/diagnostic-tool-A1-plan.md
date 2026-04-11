# A1. Day Trip 診断ツール 実装計画書

**作成日:** 2026-04-11
**対象記事:** `/blog/kamakura-vs-hakone-vs-nikko-day-trip` (`src/pages/blog/DayTripComparison.tsx`)
**目的:** 既存トラフィックのCV化（form_submit 0 → 月2-3件）
**実装期間:** 1-2日

---

## 1. 背景と現状

### 対象記事の実績（GSC + GA4 過去90日）

| 指標 | 数値 | 備考 |
|------|------|------|
| GSC 表示回数 | 3,819 | 上位5記事 |
| GSC クリック | 58 | CTR **1.52%**（サイト平均の5倍以上） |
| GSC 平均順位 | 4.8 | 1ページ目上位 |
| GA4 PV | 112 | サイト内2位 |
| GA4 tour_page_view | 22 | ランディング起点で発生 |
| GA4 form_submit | **0** | 最大の機会損失 |

### 問題の本質

**この記事は完璧に集客できているが、CVに繋がっていない。**

- 「鎌倉 vs 箱根 vs 日光」は購買意欲が高い検索クエリ（迷っている＝買い手前）
- 訪問者は「答え」を欲しがっているが、記事は3つの選択肢を中立的に並べているだけ
- → 読み終わっても「で、私はどうすればいい？」の答えが出ない
- → 記事を閉じて Google Maps や Klook に流れる

### 解決の方向性

**「読ませる」→「判断させる」への転換**

訪問者に **「あなたのケースなら○○」** という個別の答えを返す診断ツールを記事内に配置。
診断結果と同時に問い合わせ動線へ自然誘導する。

---

## 2. 仕様

### 2.1 配置場所

`DayTripComparison.tsx` の **Quick Comparison Tableの直前**（記事冒頭から約2スクロール目）

理由：
- 比較表を見る前に「自分の答え」を出させる方が体験として強い
- 表を見て迷っている層を、診断で即座にすくい取る
- スクロールが浅い段階で配置するため、離脱前に接触できる

### 2.2 質問構造（3問）

質問数を最小化（3問）して完了率を最大化する。

#### Q1. How many hours can you dedicate to the day trip?
- A) **Under 6 hours** — I want to be back in Tokyo by afternoon
- B) **A full day (8-10 hours)** — Morning to evening is fine
- C) **As long as it takes** — I'm flexible

#### Q2. What excites you most?
- A) **Mt. Fuji views & hot springs**
- B) **Ancient temples & coastal atmosphere**
- C) **UNESCO heritage & deep nature**

#### Q3. Are you traveling with...
- A) **Just adults** — We can handle some walking
- B) **Kids or seniors** — We need easy logistics
- C) **A photography focus** — Scenery matters most

### 2.3 結果ロジック

各選択肢にスコアを割り当てて合計点で判定。

| 質問 | A | B | C |
|------|---|---|---|
| Q1 | Kamakura+2 | Hakone+1, Nikko+1 | Nikko+2 |
| Q2 | Hakone+3 | Kamakura+3 | Nikko+3 |
| Q3 | Hakone+1, Nikko+1 | Kamakura+2 | Hakone+2 |

最高点の destination が結果。同点の場合は Kamakura を優先（最も汎用性が高いため）。

### 2.4 結果画面の構成

```
┌──────────────────────────────────┐
│  Your Best Match: HAKONE         │
│                                  │
│  [ヒーロー画像]                    │
│                                  │
│  Why Hakone fits you:            │
│  • Mt. Fuji views align with...  │
│  • The relaxed pace suits your.. │
│  • Easy access for your group..  │
│                                  │
│  ┌──────────────────────────┐   │
│  │ View Hakone Tour Details │   │
│  │   ¥70,000 / group        │   │
│  └──────────────────────────┘   │
│                                  │
│  Or get a custom plan:           │
│  [ Ask Manabu about Hakone ]     │
│                                  │
│  [ Retake quiz ]                 │
└──────────────────────────────────┘
```

**結果ブロックの3アクション**:
1. **View Tour Details** → `/tours/{destination}-day-trip`（既存ツアーページ）
2. **Ask Manabu about [destination]** → `/contact?tour={destination}-day-trip`（フォーム事前選択）
3. **Retake quiz** → 状態リセット

---

## 3. 実装詳細

### 3.1 新規ファイル

#### `src/components/blog/Diagnostic.tsx`

汎用診断コンポーネント。設定オブジェクトで質問・結果を差し替え可能。

```tsx
interface DiagnosticOption {
  label: string;
  scores: Record<string, number>; // { hakone: 3, kamakura: 0, nikko: 0 }
}

interface DiagnosticQuestion {
  id: string;
  question: string;
  options: DiagnosticOption[];
}

interface DiagnosticResult {
  id: string;
  title: string;
  image: string;
  reasons: string[];
  tourPath: string;
  tourPrice: string;
  contactQuery: string; // ?tour=...
}

interface DiagnosticProps {
  toolId: string; // GA4 トラッキング用
  intro: string;
  questions: DiagnosticQuestion[];
  results: Record<string, DiagnosticResult>;
  language?: "en" | "es";
}

export const Diagnostic = ({ ... }: DiagnosticProps) => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  // ...
};
```

**状態管理**:
- `step`: 現在の質問インデックス（0〜questions.length）
- `scores`: 累積スコア
- `result`: 計算結果（最終ステップでセット）

**GA4イベント発火**:
- `diagnostic_start` — 最初の質問に進んだ時
- `diagnostic_answer` — 各質問回答時（question_id, answer_index）
- `diagnostic_complete` — 結果表示時（result_id）
- `diagnostic_to_tour` — 結果画面でツアーリンククリック
- `diagnostic_to_contact` — 結果画面でコンタクトCTAクリック

#### `src/lib/ga4.ts` 追加関数

```ts
export function trackDiagnosticStart(toolId: string) {
  gtag("event", "diagnostic_start", { tool_id: toolId });
}

export function trackDiagnosticComplete(toolId: string, resultId: string) {
  gtag("event", "diagnostic_complete", { tool_id: toolId, result_id: resultId });
}

export function trackDiagnosticToTour(toolId: string, resultId: string) {
  gtag("event", "diagnostic_to_tour", { tool_id: toolId, result_id: resultId });
}

export function trackDiagnosticToContact(toolId: string, resultId: string) {
  gtag("event", "diagnostic_to_contact", { tool_id: toolId, result_id: resultId });
}
```

#### `src/data/diagnostics/dayTripFinder.ts`

質問と結果のデータ定義（コンポーネントから分離）。

```ts
export const dayTripFinderConfig = {
  toolId: "day-trip-finder",
  intro: "Answer 3 quick questions and I'll tell you which day trip fits you best.",
  questions: [
    { id: "duration", question: "...", options: [...] },
    { id: "interest", question: "...", options: [...] },
    { id: "group", question: "...", options: [...] },
  ],
  results: {
    kamakura: { ... },
    hakone: { ... },
    nikko: { ... },
  },
};
```

### 3.2 既存ファイルへの変更

#### `src/pages/blog/DayTripComparison.tsx`

```tsx
import { Diagnostic } from "@/components/blog/Diagnostic";
import { dayTripFinderConfig } from "@/data/diagnostics/dayTripFinder";

// Quick Comparison Tableの直前に挿入
<div className="my-12">
  <Diagnostic {...dayTripFinderConfig} language="en" />
</div>
```

#### `src/pages/Contact.tsx`

URLパラメータ `?tour=hakone-day-trip` を読み取って、フォームの「ご希望ツアー」フィールドを事前選択する処理を追加。

```tsx
import { useSearchParams } from "react-router-dom";
const [searchParams] = useSearchParams();
const initialTour = searchParams.get("tour") || "";
// useEffect でフォーム初期値を設定
```

### 3.3 GA4 キーイベント設定（管理画面側）

実装後、GA4管理画面で以下を「キーイベント」としてマーク：
- `diagnostic_complete`
- `diagnostic_to_tour`
- `diagnostic_to_contact`

これでランディングページ別CV分析にdiagnosticの効果が反映される。

---

## 4. UI/UXデザイン仕様

### 4.1 視覚スタイル

既存の `QuickAnswer` / `ValueComparison` と同じトーン：
- **背景**: `bg-accent/5` （ゴールドの薄い背景）
- **ボーダー**: `border-l-4 border-accent`
- **角丸**: `rounded-r-lg`
- **余白**: `p-6 md:p-8`
- **見出しフォント**: serif（既存`heading-section`スタイル）

### 4.2 インタラクション

- **質問遷移**: フェードイン（既存`animate-fade-in-up`を流用）
- **進捗インジケーター**: `Question 1 of 3` 表示
- **戻るボタン**: 各質問で前の質問に戻れる
- **結果アニメーション**: 0.6秒のfade-in

### 4.3 レスポンシブ対応

- モバイル: 縦並び、ボタンは全幅
- デスクトップ: 質問は中央寄せ、最大幅`max-w-2xl`
- 結果画面のCTAボタン: モバイル全幅、デスクトップ並列

### 4.4 アクセシビリティ

- 各選択肢を`<button>`要素で実装（キーボード操作可能）
- 進捗を`aria-live="polite"`で読み上げ
- フォーカスリング表示（既存`ring-accent`）

---

## 5. テスト計画

### 5.1 機能テスト

- [ ] 各質問の選択 → 次の質問に進むことを確認
- [ ] 全パターンの回答組み合わせで正しい結果が出る（27パターン）
- [ ] 「Retake quiz」で初期状態に戻る
- [ ] 「View Tour Details」で正しいツアーページに遷移
- [ ] 「Ask Manabu」で `/contact?tour=xxx` に遷移
- [ ] Contact ページでツアー選択が事前に入力されている

### 5.2 GA4イベント検証

GA4 DebugView で以下を確認：
- [ ] `diagnostic_start` 発火
- [ ] `diagnostic_answer` が3回発火
- [ ] `diagnostic_complete` が result_id 付きで発火
- [ ] CTAクリックで `diagnostic_to_tour` / `diagnostic_to_contact` 発火

### 5.3 表示確認

- [ ] モバイル（iPhone 13想定）
- [ ] デスクトップ（1440px想定）
- [ ] 既存記事のレイアウトを崩していない

### 5.4 SEO影響確認

- [ ] 記事本文の構造化データ（BlogPosting Schema）に影響なし
- [ ] ページの読み込み速度が0.5秒以内の劣化に収まる
- [ ] 既存のheading階層が保たれている

---

## 6. リリース後の効果測定

### 6.1 計測指標

実装1週間後・1ヶ月後にGA4で以下を確認：

| 指標 | 計算式 | 目標値（1ヶ月後） |
|------|--------|----------------|
| 診断開始率 | diagnostic_start / page_view | 15%以上 |
| 診断完了率 | diagnostic_complete / diagnostic_start | 60%以上 |
| 結果→ツアー遷移率 | diagnostic_to_tour / diagnostic_complete | 30%以上 |
| 結果→コンタクト遷移率 | diagnostic_to_contact / diagnostic_complete | 15%以上 |
| **記事起点 form_submit** | landingPage=/blog/kamakura-vs-hakone-vs-nikko-day-trip & form_submit | **2件以上/月** |

### 6.2 改善判断

**1ヶ月後の判断基準**:
- form_submit 2件以上 → 成功、他記事に展開
- form_submit 0-1件 → 質問内容・結果文言を見直し
- 診断開始率 5%未満 → 配置場所・誘導文言を改善
- 診断完了率 30%未満 → 質問数を2問に減らす

---

## 7. リスクと対策

| リスク | 影響 | 対策 |
|--------|------|------|
| 診断ツールが既存の読了体験を阻害 | PV低下、SEO影響 | 配置位置を本文中盤ではなく序盤にして「読む前のツール」と明示 |
| モバイルで操作が煩雑 | 完了率低下 | 大きめのタップ領域（min-height 56px） |
| GA4イベント未発火 | 効果測定不能 | DebugViewで実装直後に確認、E2Eテストを手動実施 |
| 結果が機械的すぎて信頼性が下がる | CV低下 | 結果文に「Manabuが500件のツアーから導いた答え」のような人間味を入れる |
| ロジックで全員Kamakuraに集約してしまう | 結果の偏り | 27パターン全てを事前計算して分布を確認 |

---

## 8. 段階的展開計画

### Phase 1: 今回実装（A1）
- DayTripComparison.tsx に英語版診断ツール

### Phase 2: 1週間後（効果確認後）
- 効果が確認できたら、`/es/blog/comparativa-excursiones`（スペイン語版）に同じツールを展開
- 既存の `dayTripFinderConfig` を `dayTripFinderConfigEs` として複製、文言のみ翻訳

### Phase 3: 2-4週間後
- 同じ `Diagnostic` コンポーネントを別記事に展開：
  - JR Pass記事 → "Should you buy the JR Pass?" 診断
  - ガイド価値記事 → "Do you need a guide?" 診断
  - 5日間モデル記事 → "How many days in Tokyo?" 診断

### Phase 4: 1-3ヶ月後
- スペイン語ペアの全展開
- 診断ツールのA/Bテスト基盤導入（質問順、文言）

---

## 9. 実装ステップ（タイムライン）

| ステップ | 内容 | 時間目安 |
|---------|------|---------|
| 1 | `Diagnostic.tsx` コンポーネント作成 | 3時間 |
| 2 | `dayTripFinder.ts` データ作成 | 1時間 |
| 3 | `ga4.ts` トラッキング関数追加 | 30分 |
| 4 | `DayTripComparison.tsx` への統合 | 30分 |
| 5 | `Contact.tsx` のURLパラメータ対応 | 1時間 |
| 6 | 27パターンのロジック検証 | 1時間 |
| 7 | レスポンシブ調整 | 1時間 |
| 8 | GA4 DebugViewでイベント検証 | 1時間 |
| 9 | コミット・デプロイ | 30分 |
| 10 | GA4キーイベント設定 | 15分 |
| **合計** | | **約10時間（実装1.5日）** |

---

## 10. 成功定義

**このA1施策が成功したと判断する基準**:

実装後1ヶ月以内に、`/blog/kamakura-vs-hakone-vs-nikko-day-trip` をランディングページとする `form_submit` イベントが **2件以上** 発生すること。

達成できた場合 → Phase 2-4 を本格展開
達成できなかった場合 → 計測指標から問題箇所を特定し、文言・配置・ロジックを改善

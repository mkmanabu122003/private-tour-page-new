# 比較記事フォーマット横展開 — プレイブック

**作成日**: 2026-04-20  **観点**: CMO  **根拠データ**: `snapshots/2026-04-20_28d.md`

---

## 結論ファースト

1. **新規執筆より先に、既存の `TsukijiVsToyosu` を救出する**（Googleに発見すらされていない）
2. **次の1本は「Nikko: Guided vs Solo」** — 既存の Hakone 版が最高コンバージョン率で型が確立済み
3. 今後「3-way比較」は作らない。「2-way比較」と「Worth-it型」の2型に統一

---

## 1. 成功パターンの定量証拠

| ページ | フォーマット | Sess | Conv | 成約率 | 滞在 |
|--------|------------|------|------|--------|------|
| /blog/kamakura-vs-hakone-vs-nikko-day-trip | 3-way比較 | 97 | 28 | 28.9% | 244s |
| /blog/hakone-day-trip-guide-vs-solo | Guided vs Solo | 8 | 2 | 25.0% | 188s |
| /blog/is-it-worth-hiring-a-tour-guide-in-tokyo | Worth-it型 | 17 | 16 | **94.1%** | 235s |
| /es/blog/comparativa-excursiones | 3-way比較 ES | 10 | 4 | 40.0% | 266s |

全サイト平均のエンゲージ率 39.7%、平均滞在 127s に対して、比較・意思決定系は**滞在が1.5〜2倍、成約率が一桁違う**。

→ **「迷っている読者の意思決定を代行する」記事型はサイト内最強テンプレート**。ブログ投資の中心に据える。

---

## 2. 緊急: TsukijiVsToyosu 救出ミッション

### 発覚した事実

- `/blog/tsukiji-vs-toyosu`（ENおよびES）は 2026-03-31 に公開済み、production HTTP 200
- `public/sitemap.xml` に登録済み（lastmod: 2026-03-31）
- **しかし GSC URL Inspection API の結果: `"URL is unknown to Google"`**
- 28日間のGSC impressions = **0**
- 一方で `toyosu` 系クエリは別ページ経由で 30+ imp 発生中（機会損失）

### 原因（仮説）

| 仮説 | 確度 | 根拠 |
|------|------|------|
| 内部リンクが薄すぎる | **高** | BlogIndex以外からのリンクなし（grepで確認済み） |
| Sitemap再送信されていない | 中 | 3週間経過してもGoogleが未取得 |
| canonicalまたはhreflangの設定ミス | 低 | SEOコンポーネント側で正しく出力されている |

### 救出アクション（工数30分〜1h）

| # | アクション | 所要 |
|---|-----------|------|
| 1 | `/blog/tsukiji-market-guide` の末尾に「Looking for Toyosu too? → Tsukiji vs Toyosu comparison」を追加（19k imp規模のハブから送客） | 10分 |
| 2 | `/blog/tsukiji-guide-food-lover` と `/blog/tsukiji-to-ginza-food-walk` から同様の内部リンク追加 | 10分 |
| 3 | Google Search Console で URL Inspection → 「Request Indexing」を手動実行（EN/ES両方）※GSC UIのみ、APIは非対応 | 5分 |
| 4 | GSC Sitemaps画面で sitemap.xml を再送信（Resubmit）| 1分 |
| 5 | 2週間後にGSC再確認、`"Submitted and indexed"` になっているか検証 | — |

> 注: Googleの `/ping?sitemap=` エンドポイントは 2023年6月に廃止されたため使用しない。robots.txt に Sitemap ディレクティブが含まれていること（確認済み）+ GSC UI の再送信で十分。

---

## 3. 次の1本の選定（候補比較）

| 候補 | 需要シグナル | 難易度 | 事業貢献 | 推奨度 |
|------|------------|--------|---------|--------|
| **Nikko: Guided vs Solo** | `nikko guided tour` 37 imp pos 54.6, `nikko tour` 39 imp pos 48.8 | 低（型再利用） | 高（Nikkoツアー¥80k） | ★★★★★ |
| Kamakura: Guided vs Solo | `kamakura private tour` 22 imp pos 50 | 低 | 中（Kamakuraツアー¥70k） | ★★★★ |
| Tokyo Food Tour: Guided vs Self-guided | `tokyo food tour` 69 imp pos 51.5 | 中 | 高 | ★★★★ |
| JR Pass vs Regional Passes（単独比較記事） | "are regional shinkansen passes better value than jr pas" pos 3.1 | 中 | 低（事業直結弱） | ★★ |
| Asakusa vs Yanaka | 需要シグナル弱 | 中 | 中 | ★★ |
| Tsukiji: With Guide vs Self-walk | `best stalls at tsukiji market` 9 imp pos 9.6 CTR 22% | 低 | 高 | ★★★★ |

### 推奨: **「Nikko Day Trip: Guided vs Solo」**

**根拠**:
1. 既存 `HakoneDayTripGuideVsSolo` が 25% 成約率で型を証明済み（ほぼコピーで作れる）
2. Nikko は現時点で検索順位が**平均48〜54位**（圏外）→ 上昇余地が最大
3. Nikko は最高単価ツアー（¥80,000〜） → 1件成約で英語記事5本分のコスト回収
4. `nikko-day-trip` 個別記事（GSC: 1clk/4imp/pos 16.8）へのトラフィック呼び水にもなる

### 構成スペック（そのまま実装可能）

```
URL: /blog/nikko-day-trip-guide-vs-solo
Title: Nikko Day Trip 2026: Guided Tour vs Going Solo (Honest Comparison)
Desc: Nikko from Tokyo: ¥10,000 solo by train vs ¥80,000 guided.
      A licensed guide compares cost, language barriers, and what you
      actually see in each. Updated 2026.

構造:
1. QuickAnswer（Quick Answer box）
   Answer: "Solo works if you have 8+ hours, basic Japanese, and
            only care about the main shrine. Guided pays for itself
            if you want Lake Chuzenji + Kegon Falls + Toshogu in one
            day or you're visiting in winter."
   Hook: "Here's the breakdown — and the 3 mistakes solo visitors
          make that cost them the best 2 hours of the day."

2. 比較テーブル: Cost / Time / Language / Coverage / Season risk

3. Solo route セクション
   - How to get there: Tobu Limited Express from Asakusa (¥2,800 RT)
   - The "main 3" sites walkable in 4 hours
   - What you CAN'T access without a car/guide
   - Hidden costs (bus day pass ¥600, English audio guide rental, etc.)

4. Guided route セクション
   - What's included (door-to-door, 4 sites in 8-10h)
   - Sample itinerary
   - Who it's for / who it's not for

5. Side-by-side decision table
   | Your situation | Recommendation |
   |---------------|----------------|
   | Tight budget, love research | Solo |
   | Want Lake Chuzenji + all 3 UNESCO sites | Guided |
   | Visiting Nov-Feb (snow risk) | Guided |
   | Speak Japanese | Either |

6. Guide's Insider Note（month-dated）

7. FAQ Schema (3-5 questions)

8. RelatedTourCards: nikko-day-trip, hakone-day-trip, kamakura-day-trip

9. ES 版: /es/blog/nikko-con-guia-vs-solo
```

---

## 4. 今後の比較記事に必ず含めるチェックリスト

TsukijiVsToyosu の失敗を二度と繰り返さないための新規記事リリース時チェックリスト。

- [ ] sitemap.xml に追加
- [ ] prerender.mjs にルート追加
- [ ] AppRoutes.tsx にルート追加
- [ ] BlogIndex / EsBlogIndex にカード追加
- [ ] **関連する既存3記事に内部リンクを追加**（最重要）
- [ ] リリース当日に Google Search Console URL Inspection → Request Indexing（EN+ES両方、GSC UIから手動）
- [ ] リリース当日に GSC Sitemaps 画面で sitemap.xml を再送信
- [ ] リリース2週後に GSC URL Inspection API で indexing status 検証（`coverageState` が `"Submitted and indexed"` か）
- [ ] リリース4週後に順位確認、順位15位以内なら成功

---

## 5. 3型の使い分けルール

以降、ブログ新規コンテンツはこの3型のいずれかに振り分ける。情報提供型の独立記事は新規で作らない。

| 型 | 適用クエリパターン | 目的 | 例 |
|----|-----------------|------|-----|
| **2-way比較** | "X vs Y", "X or Y" | 迷っている読者に決定を提供 | Nikko: Guided vs Solo |
| **Worth-it型** | "is X worth it", "should I X" | 迷っている読者に背中を押す | Is Tokyo guide worth it |
| **比較テーブル型** | "best X for Y" | 複数選択肢の整理 | Best day trips from Tokyo |

情報提供型（ガイド記事）は「既存記事の拡充」に限定し、新規執筆は停止。

---

## 6. 実施順序と実績

| # | タスク | 担当観点 | 状況 |
|---|--------|---------|------|
| 1 | TsukijiVsToyosu 救出（内部リンク追加：TsukijiMarketGuide / TsukijiGuide / ES 2本） | CMO+COO | ✅ 2026-04-20 完了（ただし GSC UI での Request Indexing は Manabu 手動タスク） |
| 2 | NikkoDayTripGuideVsSolo 執筆（EN + ES） | CMO | ✅ 2026-04-20 完了（ファクトチェック + 両言語ファイル + AppRoutes / prerender / sitemap / BlogIndex 登録） |
| 3 | 2週間待機して TsukijiVsToyosu / Nikko 両記事の indexing 状況確認（URL Inspection API） | CMO | 保留（2026-05-04 目安） |
| 4 | 次回スナップショット（2026-05-20頃）で Nikko 関連クエリの順位測定 | CEO+CMO | 保留（月次） |

### Manabu 手動実行待ち（GSC UIのみ対応）

- [ ] `/blog/tsukiji-vs-toyosu` — GSC URL Inspection → Request Indexing
- [ ] `/es/blog/tsukiji-vs-toyosu` — 同上
- [ ] `/blog/nikko-day-trip-guide-vs-solo` — 同上
- [ ] `/es/blog/nikko-con-guia-vs-solo` — 同上
- [ ] GSC Sitemaps 画面で `sitemap.xml` を Resubmit

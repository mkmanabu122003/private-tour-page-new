# SEO Action Plan 2026-05 改訂版 — Commercial Intent Shift

**Last updated:** 2026-05-17
**Supersedes:** `docs/seo-action-plan-2026-05.md` (2026-05-09版)
**Supplemental:** `docs/seo/seo-audit-2026-05-13.md` (現状監査)

---

## 🎯 改訂のトリガー

2026-05-13〜2026-05-17 の戦略再評価で、以下の判断材料が揃った:

1. **Google Keyword Planner 実測** (UI経由、20+ KW) — Mt Fuji = 10K-100K、Medite Tour 候補 = 10-100/月
2. **Wikipedia Pageviews** (15エリア) — Imperial Palace, Shibuya, Kamakura が圧倒的volume
3. **CPC データ** — `tokyo private tour/guide` 系が CPC ¥199-1,134 = 商業意図最強
4. **AI Overview 浸食の確定** — JR Pass 系で-90% YoY、情報系記事の構造的死亡傾向
5. **「記事数倍増 ≠ 流入倍増」の数学的検証** — パワーロー分布で +47記事 = +1.4倍が現実

---

## 🚨 エグゼクティブサマリ (3行)

- **戦略軸を「情報系広範カバー」から「商業意図 + Mt Fuji 集中」へ転換**
- **Medite Tour SEO 路線は撤回** (volume不足、ROI非効率確定)
- **次4-5週間で +33%-65% CV増** が現実的目標 (情報系量産より6倍効率)

---

## 📊 現状のベースライン (2026-05-06 終端 28d)

| KPI | 値 | 前期比 |
|---|---|---|
| GSC clicks | 287 | -13% |
| GSC impressions | 100,631 | -26% |
| GSC CTR | 0.29% | +0.04pt |
| 平均順位 | 6.91 | -0.19 (悪化) |
| GA4 sessions | 564 | -24% |
| GA4 Organic CV | 69 | — |
| 既存記事数 (英) | 47 | — |
| 既存記事数 (ES) | 50 | — |
| 1記事平均 click/月 | 6.1 (中央値2.3) | — |
| Tour pages 合計 imp | 1,718 | — |
| Tour pages 合計 click | 3 | — |

**核心の事実:**
- 上位5記事が全 click の 67% を占める (パワーロー)
- Tour pages は impression あるが click 0 = **タイトル/snippet 問題**
- Mt Fuji記事は Pos 10.3 で <2% しか取れていない

---

## 🔄 戦略の主要転換

### ❌ 撤回 / 棚上げするアクション

| 旧計画 | 撤回理由 |
|---|---|
| Medite Tour 専用 SEO ブランド構築 | エリア×テーマ KW = 10-100/月、ROI非効率 |
| Jimbocho Literary Pilgrimage 新規 | volume 100-200/月、競合密度低だが流入小 |
| Multi-faith Tokyo 新規 | volume 観測不能 |
| Sumida East (Hokusai/Memory) 新規 | volume 観測不能 |
| Showa Modernism Tokyo 新規 | volume 観測不能 |
| Sound Walk / Tea Pilgrimage 新規 | volume 観測不能 |
| Tokyo Itinerary 系の追加投資 | AIO侵食、CPC ¥9-201 = 低commercial value |
| Tokyo with kids 系強化 | volume データなし、流入実測ゼロ |
| 47記事を倍増する量産戦略 | パワーロー分布で +1.4倍に留まる、メンテ債務2倍 |

### ✅ 新たに採用 / 強化するアクション

| 新計画 | 採用理由 |
|---|---|
| **Mt Fuji クラスター帝国構築** | volume 13K-130K/月、現状 <2% 捕捉、最大機会 |
| **商業意図 KW への集中投下** | CPC ¥199-1,134 = CV単価高、ROI最強 |
| **Tour pages の title/meta 商業化** | 1,718 imp / 0 click → CTR改善で即効性 |
| **既存上位5記事の深耕** | 数学的に新規47本より6倍効率 |

### ⏸️ 保持 (既存路線継続)

| アクション | 状態 |
|---|---|
| /blog/tsukiji-market-guide 強化 (Opening Hours) | ✅ 完了 (commit 9473592 + b73dba7) |
| ES Mt Fuji FAQ拡張 | ✅ 完了 (commit c9f84eb, 2026-05-14) |
| /blog/is-it-worth-hiring 拡張 | ✅ 完了 (CV 110%) |
| /blog/tsukiji-vs-toyosu テンプレ展開 | ✅ 完了 |

---

## 🎯 改訂版 アクション一覧

### 🥇 Tier 1: 既存記事の商業意図KW追加 (最高ROI、新規記事不要)

| ID | アクション | 工数 | 期待効果 | 状態 |
|---|---|---|---|---|
| **C1** | `/blog/tokyo-private-tour-guide-cost` 拡張 — "tokyo tour packages", "private tour price", "half day vs full day cost" のKWクラスター追加 | 3h | +15-30 click/月、CV直結 (現CV 65%) | 未着手 |
| **C2** | `/blog/is-it-worth-hiring-a-tour-guide-in-tokyo` 拡張 — "best tokyo tour guide", "viator vs private guide", "english speaking tour guide tokyo" のKW追加 + FAQ拡張 | 4h | +20-40 click/月、CV特化 (現CV 110%) | 未着手 |
| **C3** | `/blog/mount-fuji-from-tokyo` 完全強化 — 情報系から商業意図へシフト、"private mount fuji tour" 等のセクション追加、Pos 10.3 → 3 狙い | 12h | **+300-1,500 click/月** ⭐ 最大インパクト | 未着手 |
| **C4** | `/blog/first-time-tokyo-local-guide` リフレッシュ — ステルス記事 (流入0) を "Best Tokyo Tours for First-Time Visitors 2026" 軸へ転換 | 5h | +40-80 sess/月、CV直結 | 未着手 |

### 🥈 Tier 2: 真の空白を埋める新規記事 (厳選2本のみ)

| ID | アクション | 工数 | 期待効果 | 状態 |
|---|---|---|---|---|
| **N1** | `/blog/private-mount-fuji-tour-2026` 新規 — Mt Fuji volume × 商業意図CPC の最強交差点を独占 | 12h | +50-150 click/月、超高CV | 未着手 |
| **N2** | `/blog/best-tokyo-private-tour-2026` 新規 — "best tokyo tour", "top tokyo tours" の購入直前比較者を捕捉 | 6h | +30-60 click/月、購入直前層 | 未着手 |

### 🥉 Tier 3: Tour pages 自体の商業化 (CTR即効改善)

| ID | アクション | 工数 | 期待効果 | 状態 |
|---|---|---|---|---|
| **T1** | `/tours/hakone-day-trip` title/meta 改善 — Pos 7.4 / 290 imp / 0 click を CTR 5% へ | 1h | +15-30 click/月 | 未着手 |
| **T2** | `/tours/yanaka` title/meta 改善 — Pos 8.5 / 172 imp / 0 click | 1h | +10-20 click/月 | 未着手 |
| **T3** | `/tours/imperial-palace` title/meta 改善 — Pos 9.6 / 84 imp | 1h | +5-15 click/月 | 未着手 |
| **T4** | `/tours/tokyo-night-tour` title/meta 改善 + 11位帯から top 10へ | 1h | +5-15 click/月 | 未着手 |
| **T5** | `/tours/tsukiji-ginza` Pos 30.7 改善 (blog/tsukiji-market-guide との カニバリ整理) | 3h | +10-20 click/月 | 未着手 |
| **T6** | 全Tour pages に "private [area] tour", "english speaking guide" の KW を H1/intro/FAQ に組み込み | 6h | サイト全体の商業化シフト | 未着手 |

---

## 📊 期待効果シミュレーション

| ティア | 合計工数 | 期待新規流入 | 期待CV増 |
|---|---|---|---|
| Tier 1 (4記事拡張) | 24h | +375-1,650 click/月 | +20-40 CV/月 |
| Tier 2 (2新規) | 18h | +80-210 click/月 | +10-20 CV/月 |
| Tier 3 (Tour pages) | 13h | +45-100 click/月 | +5-15 CV/月 |
| **合計** | **55h (約2週間相当)** | **+500-1,960 click/月** | **+35-75 CV/月** |

**現状 287 click/月 → +175%-680%、現状 69 CV/月 → +50%-110%**

これが商業意図シフトでの現実的シナリオ。

---

## ⚠️ リスク登録簿

### リスク 1: AI Overview 浸食の継続
- 情報系記事 (Mt Fuji 関連も含む) はAIO侵食リスク
- 対策: **「ガイド本人の個人体験」「具体的なお店・時間」「実写真」**で引用回避

### リスク 2: 商業KWの競合密度
- "best tokyo tour" は Viator / GetYourGuide / Tripadvisor が支配
- 対策: **「licensed guide本人視点」「Tokyo常駐」「実体験」**で差別化
- 数値競争には乗らない (価格・割引アピール禁止)

### リスク 3: 内部カニバリ拡大
- Mt Fuji 関連記事が増えると相互カニバリ
- 対策: **意図の明確分離** (情報意図 = mount-fuji-from-tokyo、商業意図 = private-mount-fuji-tour-2026)

### リスク 4: ブランド毀損
- 商業意図シフトしすぎると「アフィリエイトサイト」化
- 対策: **CTA は自社 /tours/ のみ**、競合アフィリ完全禁止 (CLAUDE.md 規定)

### リスク 5: 既存記事のメンテ債務蓄積
- 47記事の年次 fact-check が累積
- 対策: **新規記事は最小限 (Tier 2 = 2本のみ)**、深耕優先

### リスク 6: 工数の集中投下による Tour 業務への影響
- Manabu の本業 (ガイド) と SEO 作業の時間衝突
- 対策: **段階的実行** (週5-10h程度)、4-5週間に分散

---

## 📅 改訂版 実行タイムライン

```
Week 1 (2026-05-17 〜 05-23):
  ✅ 戦略文書化 (本ドキュメント)
  → C1: /blog/tokyo-private-tour-guide-cost 拡張 (3h)
  → T1: /tours/hakone-day-trip title/meta改善 (1h)

Week 2 (2026-05-24 〜 05-30):
  → C2: /blog/is-it-worth-hiring 拡張 (4h)
  → T2-T4: Yanaka / Imperial / Night tour 改善 (3h)

Week 3 (2026-05-31 〜 06-06):
  → C3: /blog/mount-fuji-from-tokyo 完全強化 (12h) ← 最大インパクト
  → 計測スナップショット (新GSC/GA4 28d)

Week 4 (2026-06-07 〜 06-13):
  → C4: /blog/first-time-tokyo-local-guide リフレッシュ (5h)
  → N1: /blog/private-mount-fuji-tour-2026 新規 (12h)

Week 5 (2026-06-14 〜 06-20):
  → N2: /blog/best-tokyo-private-tour-2026 新規 (6h)
  → T5-T6: Tour pages 全体商業化 (9h)
  → 効果測定 + 振り返り
```

合計 55-60時間、5週間で完了想定。

---

## 🎯 KPI 再設定

旧目標 (2026-03 計画) は前提条件 (AIO浸食未確定) で立てられたため、**現実的目標に再設定**:

| 旧KPI | 旧目標 (達成困難) | 新目標 (2026-07末) |
|---|---|---|
| 月間 clicks | 1,500 | **600-800** (現状287の2-3倍) |
| 月間 Organic CV | 未設定 | **100-130** (現状69の1.5-2倍) |
| Mt Fuji記事 Pos | — | **3-5位** (現状10.3) |
| Tour pages 平均CTR | 0%近く | **3-5%** |
| Desktop CTR | 1.0% | **0.5%** (AIO前提で現実的) |
| form_submit→成約率 | 25% | **25%** (ValueComparison効果込み、維持) |

---

## 🔄 戦略再評価ポイント

| タイミング | 確認内容 | アクション |
|---|---|---|
| 2026-06-03 (Week 3 終了時) | C3 (Mt Fuji記事強化) の初期効果 | imp/click 変化を確認、効果なしなら方針再考 |
| 2026-06-17 (Week 5 終了時) | 全体効果測定 | KPI達成率、次フェーズ計画策定 |
| 2026-07-15 | 中間レビュー | 商業意図シフトの妥当性、Medite Tour 撤回判断の検証 |

---

## 🚫 棚上げ案件 (将来の再評価対象)

| 案件 | 棚上げ理由 | 再評価条件 |
|---|---|---|
| Google Ads MCP setup | API Center 表示問題 + 商業意図シフトで volume データ要求減 | 月次自動レポート需要が高まったら再開 |
| Medite Tour 高単価 sub-brand | SEO ではなく価格戦略として再ポジション可 | C3 (Mt Fuji) 完了後、運営余力次第 |
| Bing Webmaster Tools | 商業意図シフトで補助データ需要薄れた | KW 拡張で本格的な競合分析が必要になったら |
| Asakusa /blog/asakusa-guide-what-to-see インデックス移行 | Google 側の自然移行待ち | 2026-07 時点でも Pos 12 未満なら手動再申請 |
| JR Pass 記事の方針転換 (4択判断) | AIO侵食確定、傷口を広げない | 別の AIO 対策テストとして優先度低 |

---

## 📋 即着手チェックリスト

ユーザー対応:
- [ ] 本ドキュメントを git commit
- [ ] 旧 `docs/seo-action-plan-2026-05.md` に「Superseded by 2026-05-revised.md」を追記 (任意)
- [ ] C1 着手の合意 (next: アシスタントが現状分析 → diff提示)

アシスタント対応:
- [ ] C1 着手時: `/blog/tokyo-private-tour-guide-cost` の現状読み込み + 商業KW追加案 diff 作成
- [ ] T1 着手時: `/tours/hakone-day-trip` の現title/meta読み込み + 改善案 diff 作成
- [ ] C3 着手時 (最大): `/blog/mount-fuji-from-tokyo` 完全構造解析 + 競合 SERP 確認 + 12h工数の段階分解

---

## 📚 参照ドキュメント

| ドキュメント | 用途 |
|---|---|
| `docs/seo/seo-audit-2026-05-13.md` | 現状監査詳細データ |
| `docs/seo/google-ads-mcp-setup.md` | MCP setup 手順 (棚上げ中) |
| `docs/seo/bing-webmaster-tools-setup.md` | BWT setup 手順 (棚上げ中) |
| `docs/seo-action-plan-2026-05.md` | 旧計画 (Medite Tour 案、当文書で Supersede) |
| `docs/competitive-comparison-table-plan.md` | ValueComparison 仕様 (実装済み) |
| `CLAUDE.md` | プロジェクト規約 (ファクトチェック、Editorial Trust 等) |

---

**結論を一行で:**

> **Mt Fuji × 商業意図** に集中、**Medite Tour SEO** は撤回、**5週間で CV を1.5-2倍** が現実的目標。

# Daily SEO Brief Pipeline

毎日、最新のGSC/GA4データをもとに **記事案（EN+ES の1ペア）** を自動生成し、Manabuさんが確認・採用したものを記事として書き上げて公開するパイプライン。

## 設計原則

- **案生成は毎日 / 公開は週2-3ペア**（Helpful Content System対策・品質維持）
- **Anthropic Routine で実行** — Macを閉じても動く（クラウド実行）
- **Manabu の一次情報を必須化** — 全brief に「Manabu独自エピソード挿入指示」を含める
- **データドリブン** — GSC実データから候補抽出、競合・カニバリチェック自動化
- **採用判断はManabu** — 自動公開はしない

## ディレクトリ構造

```
seo-pipeline/
├── README.md                     # このファイル
├── config.yml                    # 目標KPI、優先カテゴリ、避ける領域
├── scripts/
│   ├── fetch_daily.py            # GSC+GA4 日次データ取得
│   ├── generate_brief.py         # データ整形 + Claude Code への context準備
│   ├── build_article.py          # 承認後に tsx 生成 (EN+ES) ※Phase 2
│   └── request_indexing.py       # Playwright で GSC indexing リクエスト
├── data/
│   └── daily/                    # 日次データ蓄積 (YYYY-MM-DD.json)
├── briefs/                       # 生成された記事案 (YYYY-MM-DD-{slug}.md)
├── templates/
│   ├── brief.md                       # ブリーフテンプレート
│   ├── generate-prompt.md             # Routine ①: Daily Brief Generation
│   ├── build-article-routine-prompt.md  # Routine ②: Build Article (semi-auto)
│   └── regenerate-prompt.md           # Optional: モバイル再生成Routine
├── docs/
│   ├── setup-routine.md          # Anthropic Routine 登録手順
│   ├── setup-slack.md            # Slack #tour-guide 通知連携手順
│   └── operations.md             # 日次運用フロー（モバイル運用も含む）
└── archive/
    ├── approved/                 # 採用済み brief（記事化前）
    └── rejected/                 # 不採用 brief（再利用用ストック）
```

## 日次フロー

```
┌─────────────────────────────────────────────────────────────┐
│  毎朝 7:00 (Anthropic Routine, cron)                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ ① fetch_daily.py 実行                                  │ │
│  │   - GSC: 直近28日のクエリ・ページ・順位                │ │
│  │   - GSC: 前7日比で新規発見クエリを検出                 │ │
│  │   - GA4: セッション・CV・流入経路                      │ │
│  │   → data/daily/2026-05-23.json                         │ │
│  └────────────────────────────────────────────────────────┘ │
│                          ↓                                   │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ ② generate_brief.py 実行                               │ │
│  │   - 既存記事リスト読み込み (AppRoutes.tsx 解析)        │ │
│  │   - config.yml の制約読み込み                          │ │
│  │   - data/daily/*.json から機会クエリ抽出               │ │
│  │   - Claude Code に渡す context.md を生成               │ │
│  │   - Claude Code が brief を生成 → briefs/ に保存       │ │
│  └────────────────────────────────────────────────────────┘ │
│                          ↓                                   │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ ③ Git commit + push                                    │ │
│  │   - claude/daily-brief-2026-05-23 branch を作成        │ │
│  │   - briefs/, data/daily/ をcommit                      │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  ④ Draft PR 自動作成（GitHub通知メールがManabuに届く）       │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  Manabuさん 朝/電車内（GitHub Mobile、3-5分） ★完結         │
│  採用 → ⑤ brief.md を直接編集（Manabu独自エピソード追記）   │
│         status: pending → approved に変更 + commit           │
│         ⑥ PR を Ready for review → Merge                    │
│  却下 → PR Close + ブランチ削除（タップ2つ）                 │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  毎時0分 Routine ② 自動実行 (Build Article)                  │
│  ⑦ approved brief をスキャン → 該当あれば /build-article    │
│  ⑧ ファクトチェック + 画像取得 + tsx生成 (EN+ES)             │
│  ⑨ feature PR 作成 → Slack #tour-guide 通知                  │
│  ⑩ brief を seo-pipeline/archive/approved/ に移動            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  Manabuさん 帰宅後 or 夜（スマホ or PC、5-15分）              │
│  ⑪ 記事 PR レビュー → マージ → 自動デプロイ                  │
│  ⑫ 翌日 GSC でインデックスリクエスト                          │
└─────────────────────────────────────────────────────────────┘
```

> **モバイル運用の方針**: Android Claude アプリで Routines が未対応のため、
> 電車では **読むだけ + コメント** に絞り、再生成・記事化はすべて帰宅後のPCで実施。
> 詳細は `docs/operations.md` を参照。

## セットアップ（一度だけ）

1. **Anthropic Routine 登録** → `docs/setup-routine.md`
2. **Slack 通知連携**（推奨） → `docs/setup-slack.md`
3. **動作確認** → `python3 scripts/fetch_daily.py --dry-run`

## 運用（毎日）

毎朝 brief が `briefs/` に追加される。Manabuさんは時間あるときに：

1. `briefs/` の未確認briefを開く
2. front matter の数値を眺め、採用判断
3. 採用なら `status: approved` に変更 → 余裕あるときに記事化
4. 不採用なら `status: rejected` に変更 → archive へ自動移動（次回run時）

## 目標 KPI

`config.yml` 参照。3ヶ月ごとに見直し。

## トラブルシューティング

- Routine が動かない → `docs/setup-routine.md` の検証コマンド
- Service Account の権限切れ → `docs/setup-service-account.md` の再発行
- briefの質が低い → `templates/generate-prompt.md` を調整

## コスト試算

- Anthropic Routine: Claude Pro/Max plan に含まれる（追加料金なし、ただし usage 上限あり）
- GCP API: 無料枠内（GSC API/GA4 API は無料）
- 合計：**追加コスト ¥0/月**（既存サブスクリプション内）

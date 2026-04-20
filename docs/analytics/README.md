# Analytics — マスタ参照

新規施策を検討する前に、まずここを見る。

## 構成

```
docs/analytics/
├── README.md                    ← このファイル
├── fetch-snapshot.sh            ← GSC/GA4 取得スクリプト（再実行可能）
├── snapshots/                   ← 期間ごとのスナップショット（意思決定の根拠）
│   └── YYYY-MM-DD_28d.md
└── raw/                         ← 生JSON（スクリプト出力）
    └── YYYY-MM-DD_<metric>.json
```

## 使い方

1. **施策立案の起点**: 最新の `snapshots/YYYY-MM-DD_28d.md` を開く
   - セクション2 (Winners) = 真似するテンプレート
   - セクション3 (Losers) = 直す対象
   - セクション5 (役員5観点) = 打ち手カタログ

2. **データ更新**: 月1回を目安に
   ```bash
   bash docs/analytics/fetch-snapshot.sh
   ```
   - デフォルト: 3日前を終点に過去28日（GSCは2-3日遅延）
   - 過去指定: `bash fetch-snapshot.sh 2026-04-18 28`

3. **スナップショット作成**:
   前回ファイルをコピーし、KPI表を差分追記していく（差分履歴を残す）。
   セクション6 の決定ログは **追記のみ**（上書き禁止）。

## 前提: 認証

`mkmanabu122003@gmail.com` で gcloud Application Default Credentials を作成し、
quota project は `seo-pipeline-490113` を設定済み。

再認証が必要な場合:
```bash
gcloud auth application-default login \
  --scopes=openid,\
https://www.googleapis.com/auth/userinfo.email,\
https://www.googleapis.com/auth/cloud-platform,\
https://www.googleapis.com/auth/webmasters.readonly,\
https://www.googleapis.com/auth/analytics.readonly

gcloud config set project seo-pipeline-490113
```

## 関連ドキュメント

- `docs/analytics/comparison-article-playbook.md` — 比較記事の型・新規執筆チェックリスト・次の1本の仕様
- `docs/seo-action-plan-2026-03.md` — 2026-03施策（反映済み）
- `docs/seo-action-plan-2026-04-next.md` — 2026-04施策（実行停滞・スナップショット側で再優先付け）
- `gas/seo-pipeline/` — Google Apps Script側のパイプライン（スプレッドシート経由の別系統、併用可）

# SEO Automation Pipeline - セットアップガイド

## 概要

GSC/GA4のデータを毎朝自動収集 → Claude分析 → アクション提案 → 承認後にGitHub Issueを自動作成 → GitHub ActionsでClaude Codeが実装 → PR作成

## 前提条件

- Google Search Console のアクセス権
- Google Analytics 4 のアクセス権
- Anthropic API Key
- GitHub リポジトリの管理者権限

---

## Step 1: GitHub ラベル作成（自動）

1. リポジトリの **Actions** タブを開く
2. 左メニューから **Setup SEO Pipeline Labels** を選択
3. **Run workflow** → **Run workflow** をクリック
4. 完了後、以下6ラベルが作成される：
   - `seo-auto-action` — パイプラインのトリガーラベル
   - `pr-created` — PR作成済み
   - `auto-failed` — 自動実装失敗
   - `content` — コンテンツ系
   - `technical` — テクニカルSEO系
   - `seo` — SEO最適化系

## Step 2: GitHub Secrets 設定

1. リポジトリ **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** で以下を追加：

| Name | Value |
|------|-------|
| `ANTHROPIC_API_KEY` | Anthropic APIキー（`sk-ant-...`） |

> `GITHUB_TOKEN` はActions実行時に自動提供されるため設定不要

## Step 3: Google Sheets + Apps Script

### 3-1. スプレッドシート作成

1. [Google Sheets](https://sheets.google.com) で空白のスプレッドシートを新規作成
2. 名前を「**SEO Pipeline - Tanuki Tabi Travel**」に変更

### 3-2. Apps Script にコードをコピー

1. メニュー **拡張機能** → **Apps Script**
2. リポジトリの `gas/seo-pipeline/` 内の各 `.gs` ファイルをコピー：
   - `Code.gs` — メインエントリーポイント
   - `Config.gs` — 設定管理
   - `GSC.gs` — Search Console データ取得
   - `GA4.gs` — Analytics データ取得
   - `Sheets.gs` — シート操作
   - `Analysis.gs` — Claude分析
   - `Actions.gs` — アクション管理・Issue作成
   - `Email.gs` — レポートメール送信
   - `Utils.gs` — ユーティリティ

### 3-3. API サービスの有効化

Apps Script エディタ → 左側 **サービス**（＋）→ 以下を追加：
- **Google Search Console API**（識別子: `SearchConsole`）
- **Google Analytics Data API**（識別子: `AnalyticsData`）

## Step 4: Config シート設定

### 4-1. 初回実行

1. Apps Script で `dailyReport` を選択 → **実行**
2. Google認証の承認 → **許可**
3. Config シートが自動生成される

### 4-2. Config の値を入力

| Key | Value | 取得方法 |
|-----|-------|---------|
| `SITE_URL` | `https://tanuki-tabi-travel.com` | 自動入力済み |
| `GSC_PROPERTY` | `https://tanuki-tabi-travel.com` | 自動入力済み |
| `GA4_PROPERTY_ID` | 数字のみ（例: `123456789`） | GA4 → 管理 → プロパティ設定 |
| `REPORT_EMAIL` | メールアドレス | レポート送信先 |
| `ANTHROPIC_API_KEY` | `sk-ant-...` | [Anthropic Console](https://console.anthropic.com/) |
| `GITHUB_TOKEN` | `ghp_...` | GitHub → Settings → Developer settings → Personal access tokens (classic) → scope: `repo` |
| `GITHUB_REPO` | `mkmanabu122003/private-tour-page-new` | owner/repo形式 |
| `LOOKBACK_DAYS` | `2` | 自動入力済み |

## Step 5: 動作確認

1. Apps Script で `dailyReport` を実行
2. スプレッドシートに以下シートが生成されることを確認：
   - GSC_Daily, GSC_Queries, GSC_Pages, GA4_Daily, GA4_Events, Analysis, Actions
3. **Actions** シートで任意のアクションの **Approved** 列にチェック
4. メニュー **SEO Pipeline** → **承認済みアクションを実行**
5. GitHub Issues に `[SEO Auto]` Issue が作成されることを確認
6. GitHub Actions が起動し、PRが作成されることを確認

## Step 6: 毎朝の自動実行

1. スプレッドシートのメニュー **SEO Pipeline** → **毎朝トリガーを設定**
2. 毎朝 8:00 JST に `dailyReport` が自動実行される

確認: Apps Script → **トリガー**（時計アイコン）

---

## トラブルシューティング

| 症状 | 対処 |
|------|------|
| GSCデータが空 | GASの実行アカウントがGSCのプロパティにアクセス権を持っているか確認 |
| GA4データが空 | `GA4_PROPERTY_ID` が正しいか、GA4閲覧権限があるか確認 |
| Claude分析が`null` | `ANTHROPIC_API_KEY` が正しいか、APIクレジット残高を確認 |
| Issue作成失敗 | `GITHUB_TOKEN` のスコープに `repo` が含まれているか、`GITHUB_REPO` が `owner/repo` 形式か確認 |
| メール未着 | `REPORT_EMAIL` を確認。GmailApp送信制限は1日100通 |
| Actions未起動 | Issue に `seo-auto-action` ラベルが付いているか確認。ワークフローが `main` ブランチにマージ済みか確認 |

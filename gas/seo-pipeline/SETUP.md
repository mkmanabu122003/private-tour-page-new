# SEO自動化パイプライン — GASセットアップガイド

## 概要

このディレクトリにはGoogle Apps Script（GAS）のコードが含まれています。
Google Sheetsと連携し、毎朝自動でSEOデータを収集・分析・アクション提案を行います。

## アーキテクチャ

```
[毎朝 8:00 JST — GASトリガー]
    ↓
[1] GAS: GSC API + GA4 API → データをGoogle Sheetsに蓄積
    ↓
[2] GAS: Claude API にデータを送信 → 分析＋ネクストアクション提案
    ↓
[3] GAS: 「Actions」シートにアクション一覧を書き込み + メール通知
    ↓
[4] Google Sheetsでアクションを確認 → 承認列にチェック → 「実行」ボタン
    ↓
[5] GAS: 承認済みアクションごとにGitHub Issueを作成（ラベル: seo-auto-action）
    ↓
[6] GitHub Actions: Issue作成をトリガーにClaude Codeを起動
    ↓
[7] Claude Code: 実装 → 新ブランチ → PR作成
    ↓
[8] PRを確認 → マージ → Netlifyが自動デプロイ
```

## ファイル構成

| ファイル | 用途 |
|---------|------|
| Code.gs | メイン実行関数、トリガー設定、メニュー追加 |
| Config.gs | 設定値管理 |
| GSC.gs | GSC APIデータ取得 |
| GA4.gs | GA4 Data APIデータ取得 |
| Sheets.gs | スプレッドシート書き込み |
| Analysis.gs | Claude APIによるデータ分析 |
| Actions.gs | アクション管理、GitHub Issue作成 |
| Email.gs | メール送信 |
| Utils.gs | ユーティリティ |

## セットアップ手順

### Step 1: Google Sheetsの準備

1. 新規Google Sheets作成: 「SEO Pipeline - Tanuki Tabi Travel」
2. 拡張機能 → Apps Script を開く
3. このディレクトリ内の `.gs` ファイルをすべてApps Scriptにコピー

### Step 2: APIサービスの有効化

Apps Script エディタ → サービス → 以下を追加:
- Google Search Console API (`SearchConsole`)
- Google Analytics Data API (`AnalyticsData`)

### Step 3: Configシートの設定

Configシートに以下の値を入力:

| Key | 説明 |
|-----|------|
| GA4_PROPERTY_ID | GA4プロパティID（数字のみ） |
| REPORT_EMAIL | レポート送信先メールアドレス |
| ANTHROPIC_API_KEY | Claude APIキー |
| GITHUB_TOKEN | GitHub Personal Access Token（repoスコープ） |
| GITHUB_REPO | GitHubリポジトリ（owner/repo形式） |

### Step 4: 動作確認

1. `dailyReport` を手動実行（初回はGoogle認証が必要）
2. Sheetsにデータが入ることを確認
3. Actionsシートにアクション提案が表示されることを確認

### Step 5: 自動化

メニュー「SEO Pipeline」→「毎朝トリガーを設定」を実行

## 日常の運用フロー

1. 朝メールが届く（SEO日次レポート）
2. Google Sheetsを開く
3. Actionsシートで承認するものにチェック
4. メニュー → 「承認済みアクションを実行」
5. GitHub Issueが自動作成 → Claude Codeが実装 → PR作成
6. GitHubでPRを確認 → マージ → Netlifyが自動デプロイ

**所要時間**: 朝5分（メール確認＋承認）+ PRレビュー5分

## GitHub側の設定

### リポジトリSecrets

GitHub → Settings → Secrets and variables → Actions → New repository secret:
- `ANTHROPIC_API_KEY`: Anthropic APIキー

### Issueラベル

GitHub → Issues → Labels → 以下を作成:
- `seo-auto-action` (#D85A30)
- `pr-created` (#1D9E75)
- `auto-failed` (#E24B4A)
- `content` (#534AB7)
- `technical` (#378ADD)
- `seo` (#BA7517)

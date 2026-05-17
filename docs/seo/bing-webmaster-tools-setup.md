# Bing Webmaster Tools セットアップガイド

**目的:** 検索ボリュームと関連KWの**実数**を**無料**で取得する。Google Ads API の代替路線。

**Last updated:** 2026-05-14

---

## なぜ Bing Webmaster Tools (BWT) か

| 項目 | Google Ads API | **BWT** |
|---|---|---|
| **コスト** | 無料 (ただし支払い方法登録必須) | **完全無料** (支払い情報不要) |
| **データ表示** | デフォルト範囲 (`100-1K`) | **実数** (例: `880`) |
| **セットアップ難易度** | 高 (Developer Token + OAuth) | **低** (Microsoftアカウントだけ) |
| **承認待ち** | 24-48h〜数日 | **即時** (登録完了後すぐ) |
| **市場カバー** | Google = 90%+ | Bing = 5-10% |
| **検索傾向の精度** | 最高 | Google と高相関 (約0.8-0.9) |
| **API化** | 公式MCPあり | REST API、自前ラップ可能 |

**結論:** Google ほどのカバー率はないが、**SEO戦略意思決定にはBingデータで90%困らない**。

特に「相対的にどのKWが大きいか」「上昇トレンドか下降か」の判断には十分。実数が出るので **範囲表示よりむしろ実用的** な場面も多い。

---

## 完了状況

| Step | 内容 | 状態 | 実施者 |
|---|---|---|---|
| 1 | Microsoftアカウント作成 (既存可) | ⏳ ユーザー (3分) |
| 2 | BWT 登録 + サイト所有権確認 | ⏳ ユーザー (5分) |
| 3 | Keyword Research ツール アクセス | ⏳ ユーザー (1分) |
| 4 | テストKW 10本一括取得 | ⏳ ユーザー (5分) |
| 5 | アシスタントとデータ共有 | ⏳ ユーザー (1分) |
| 6 | (任意) API キー取得 + 自動化検討 | ⏳ 後回し可 |

**合計15分程度で完了**。

---

## Step 1: Microsoftアカウント

すでに Outlook / Hotmail / Xbox / Office365 のいずれかを使っていれば、そのアカウントで OK。
なければ https://account.microsoft.com/ で無料作成 (3分)。

## Step 2: BWT 登録 + サイト所有権確認 (5分)

### 2-1. BWT にサインイン

1. https://www.bing.com/webmasters にアクセス
2. 右上「Sign in」→ Microsoft アカウントでログイン
3. 利用規約に同意

### 2-2. サイトを追加 (Google Search Console から1クリック移行が最速)

BWT のホーム画面で「サイトを追加」する際に、**3つのオプション** が表示されます:

| オプション | 推奨度 | 内容 |
|---|---|---|
| **Import from Google Search Console** | ⭐⭐⭐⭐⭐ | **最速 (推奨)** — GSC で既に検証済みのため1クリックで完了 |
| Add a site manually (URL入力) | ⭐⭐ | DNS / meta tag / file upload で再検証必要 |

**推奨手順 (Import from GSC):**

1. 「Import sites from Google Search Console」ボタンをクリック
2. Google アカウント (GSC で使っているもの = mkmanabu122003@gmail.com) で認証
3. インポートしたいサイトを選択: `tanuki-tabi-travel.com`
4. Import 完了 → BWT 上にサイトが追加される
5. **所有権確認は自動完了** (GSC の検証が引き継がれる)

**注: 古いブラウザだと Import 機能が動かない場合あり**。Chrome 最新版を推奨。

### 2-3. 動作確認

サイトが BWT のダッシュボードに表示され、24時間以内に下記が見えるようになる:
- Search performance データ (Bing検索のクリック・表示数)
- Sitemaps
- URL inspection ツール
- **Keyword Research ツール** ← 我々のメインターゲット

---

## Step 3: Keyword Research ツール アクセス (1分)

左サイドバーの「**Keyword Research**」(キーワード調査) をクリック。

または直接: https://www.bing.com/webmasters/keywordresearch

---

## Step 4: テストKW 一括取得 (5分)

### 4-1. 基本KW 10本

検索ボックスに以下を1つずつ入力 (or 一括ペーストできるなら一括):

```
mount fuji from tokyo
mount fuji day trip
private mount fuji tour
hakone day trip from tokyo
kamakura day trip from tokyo
tokyo private tour
tokyo private guide
asakusa walking tour
yanaka walking tour
tsukiji market guide
```

### 4-2. 設定

| 設定項目 | 推奨値 |
|---|---|
| Country | **United States** (英語SEO本命) |
| Language | English |
| Date range | Last 6 months (デフォルト) |

### 4-3. 取得できるデータ

| 列 | 内容 |
|---|---|
| Keyword | KW 自体 |
| **Average Monthly Searches** | **月間平均検索数 (実数!)** |
| Trend Data | 6ヶ月の月次推移グラフ |
| Top Organic Competitors | このKWで上位ランクしているサイトURL |

### 4-4. ダウンロード

右上の「Download」または「Export」ボタンで CSV エクスポート可能。

---

## Step 5: アシスタントとデータ共有

エクスポートした CSV を以下の場所に保存:

```
docs/analytics/raw/2026-05-14_bwt_keywords.csv
```

または、画面のスクリーンショットをこの会話にアップロードしてください。
アシスタントが分析して、本格的なKWマップに統合します。

---

## Step 6 (任意): API化 + 自動化

将来「毎週月曜の朝に自動レポート」をやりたい場合のみ。

### 6-1. API キー取得

1. BWT 右上のユーザーアイコン → 「**Settings**」
2. 左メニュー「**API Access**」
3. 「Generate」ボタンで API キーを生成
4. キーを安全な場所に保存

### 6-2. API エンドポイント

主要なエンドポイント:

```
GET https://ssl.bing.com/webmaster/api.svc/json/GetKeyword
GET https://ssl.bing.com/webmaster/api.svc/json/GetKeywordStats
GET https://ssl.bing.com/webmaster/api.svc/json/GetRelatedKeywords
```

認証はクエリパラメータ `?apikey=YOUR_API_KEY`

### 6-3. 簡易シェルスクリプト例

```bash
#!/bin/bash
# scripts/bwt-fetch-kw.sh — Bing Webmaster Tools KW取得

API_KEY="${BWT_API_KEY:?Set BWT_API_KEY env var}"
KW="$1"
COUNTRY="en-US"

curl -s "https://ssl.bing.com/webmaster/api.svc/json/GetKeyword?q=${KW// /%20}&country=${COUNTRY}&apikey=${API_KEY}" \
  | jq '.d'
```

使い方:
```bash
export BWT_API_KEY="..."  # ~/.config/bwt/credentials.env から読み込みなど
./scripts/bwt-fetch-kw.sh "mount fuji from tokyo"
```

### 6-4. MCP化 (将来)

Google Ads MCP のような専用 BWT MCP server は現状非主流。ただし:
- 自前で簡易 MCP server を作る選択肢あり (Pythonで100行程度)
- もしくは Claude Code から直接 `curl` を実行する形でも実用上問題なし

**急がない**。Step 4 の手動取得が動けば、戦略決定には十分。

---

## ⚠️ BWT の制限事項

| 制限 | 内容 |
|---|---|
| データ精度 | Bing市場限定 (Google ≠ Bing) |
| トレンド | 6ヶ月のみ (12ヶ月不可) |
| API レート制限 | 1秒あたり 1リクエスト程度 |
| 国別データ | 国を1つずつ指定 (複数同時不可) |

---

## 次のアクション

1. **今すぐ:** Step 1-4 を実施 (合計15分)
2. **CSVまたはスクショで結果共有** (アシスタントに送信)
3. **アシスタント分析** — Mt Fuji / Hakone / Kamakura / Medite Tour 候補KWの相対volume確定
4. **戦略最終確定** — 改訂版SEO action plan 作成

不明点があれば質問してください。

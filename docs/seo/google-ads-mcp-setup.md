# Google Ads Keyword Planner MCP セットアップガイド

**目的:** Claude Code から Google Ads Keyword Planner API を直接呼び出して、検索ボリューム・関連KW・予測値を取得できるようにする。

**Last updated:** 2026-05-14

---

## 完了状況

| Step | 内容 | 状態 | 実施者 |
|---|---|---|---|
| 1 | バイナリのダウンロード/インストール | ✅ 完了 | アシスタント |
| 2 | 認証情報テンプレート作成 | ✅ 完了 | アシスタント |
| 3 | wrapper script作成 | ✅ 完了 | アシスタント |
| 4 | .mcp.json への登録 (placeholder) | ✅ 完了 | アシスタント |
| 5 | Google Ads アカウント作成 + 課金設定 | ⏳ **要ユーザー対応** | ユーザー |
| 6 | Google Cloud Console: OAuth クライアント作成 | ⏳ **要ユーザー対応** | ユーザー |
| 7 | Developer Token 申請 (Basic Access) | ⏳ **要ユーザー対応** | ユーザー (24-48h 審査) |
| 8 | OAuth Refresh Token 取得 | ⏳ **要ユーザー対応** | ユーザー (一度きり) |
| 9 | credentials.env への記入 | ⏳ **要ユーザー対応** | ユーザー |
| 10 | Claude Code 再起動 + 動作確認 | ⏳ **要ユーザー対応** | ユーザー |

---

## アシスタント側で完了済みの内容

### バイナリ
```
/Users/manabu/.local/bin/kwp-mcp                  # 本体 (Intel Mac版、ncosentino/v0.1.0)
/Users/manabu/.local/bin/kwp-mcp-wrapper          # 認証情報を読み込むラッパー
```

### 設定ファイル
```
~/.config/kwp-mcp/credentials.env.example         # 認証情報テンプレート (gitignore外、HOME配下)
.mcp.json                                          # Claude Code への登録 (kwp-mcp エントリ追加済み)
```

### 認証情報の保存場所
**`~/.config/kwp-mcp/credentials.env`** に作成してください (このファイルは存在しません。ユーザーが作成)。
- リポジトリ外の `$HOME/.config/` 配下なので git にコミットされる心配なし
- wrapper script が起動時に自動 source する

---

## ユーザー側の作業 (順番に実施)

### Step 5: Google Ads アカウント作成 + 課金設定 (約30分)

1. https://ads.google.com にアクセス
2. Google アカウントでサインイン
3. 「広告を作成しないでアカウントを作成する」(Expert mode) を選択
4. 国: 日本、タイムゾーン: Asia/Tokyo、通貨: JPY (または USD) を選択
5. **課金情報を登録** — クレジットカード情報必須
   - 課金しなくても KW Planner は動くが、**実数 volume を取るには月$50程度の出稿が必要**
   - 範囲表示でよければ出稿ゼロでもOK
6. Customer ID をメモする (画面右上、ハイフン付きの10桁数字)

**注意:** 「Smart mode」ではなく「Expert mode」を選ばないと Keyword Planner にアクセスできない。

### Step 6: Google Cloud Console で OAuth クライアント作成 (約15分)

1. https://console.cloud.google.com にアクセス
2. 新規プロジェクト作成: 「tanuki-tabi-ads」など
3. 左メニュー「APIs & Services」→「Library」
4. **Google Ads API** を検索 → **Enable**
5. 左メニュー「APIs & Services」→「OAuth consent screen」
   - User Type: External (個人 Google アカウントの場合)
   - App name: 「Tanuki Tabi SEO」など
   - User support email + Developer contact: ご自身のメール
   - Save → 「Test users」に自分の Google アカウントを追加
6. 左メニュー「APIs & Services」→「Credentials」
   - 「+ Create Credentials」→「OAuth client ID」
   - Application type: **Desktop app**
   - Name: 「kwp-mcp-client」
   - Create → **client_id と client_secret をメモ**

### Step 7: Developer Token 申請 (即時 + 24-48h 審査)

1. https://ads.google.com 左メニュー「Tools & Settings」→「API Center」
   - 表示されない場合は Manager Account (MCC) が必要 — 後述
2. 「Apply for Basic Access」フォームに入力:
   - Use case: 「Internal SEO research for our private tour business website (tanuki-tabi-travel.com). Using KeywordPlanService to identify search demand for tour-related keywords.」
   - Will users see ads data? → No
   - Compliance: 同意
3. Submit → Developer Token が即発行される (Basic Access 申請中ステータス)
4. **Basic Access 承認まで24-48h** — 承認後に KeywordPlanService が使えるようになる

**MCC (Manager Account) が必要な場合:**
- 通常の Google Ads アカウントから API Center にアクセスできない場合がある
- https://ads.google.com/home/tools/manager-accounts/ から MCC 作成 (無料)
- MCC で API Center にアクセス → Developer Token 取得
- 通常の Ads アカウントを MCC 配下に linking

### Step 8: OAuth Refresh Token 取得 (5分、一度きり)

最も技術的なステップ。下記の Python スクリプトで取得:

```bash
# 一時作業ディレクトリで実施
cd /tmp
python3 -m venv venv-oauth
source venv-oauth/bin/activate
pip install google-auth-oauthlib

cat > get_refresh_token.py <<'EOF'
from google_auth_oauthlib.flow import InstalledAppFlow

# Step 6で取得した値を入力
CLIENT_ID = "YOUR_CLIENT_ID.apps.googleusercontent.com"
CLIENT_SECRET = "YOUR_CLIENT_SECRET"

flow = InstalledAppFlow.from_client_config(
    {
        "installed": {
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "redirect_uris": ["http://localhost"],
        }
    },
    scopes=["https://www.googleapis.com/auth/adwords"],
)

# ブラウザが開き、Googleアカウントで認可するとリダイレクトされる
creds = flow.run_local_server(port=8080, prompt="consent")

print("=" * 60)
print(f"REFRESH TOKEN: {creds.refresh_token}")
print("=" * 60)
EOF

python3 get_refresh_token.py
# → ブラウザで Google ログイン → アカウント認可 → ターミナルに refresh_token が表示される
```

表示された refresh_token をメモ。これは一度しか表示されないので注意。

### Step 9: credentials.env を作成して値を記入

```bash
cp ~/.config/kwp-mcp/credentials.env.example ~/.config/kwp-mcp/credentials.env
# エディタで開いて、Step 5/6/7/8で取得した値を埋める
nano ~/.config/kwp-mcp/credentials.env  # or vim / code
```

**埋める値:**
- `GOOGLE_ADS_DEVELOPER_TOKEN` ← Step 7
- `GOOGLE_ADS_CLIENT_ID` ← Step 6
- `GOOGLE_ADS_CLIENT_SECRET` ← Step 6
- `GOOGLE_ADS_REFRESH_TOKEN` ← Step 8
- `GOOGLE_ADS_CUSTOMER_ID` ← Step 5 (ハイフン除去した10桁数字、例: `1234567890`)
- `GOOGLE_ADS_LOGIN_CUSTOMER_ID` ← MCC使用時のみ MCC側のID

### Step 10: 動作確認

1. Claude Code を再起動 (`.mcp.json` の変更を読み込ませる)
2. アシスタントに「kwp-mcp で 'asakusa walking tour' の検索ボリュームを取得して」と依頼
3. 期待される動作:
   - `generate_keyword_ideas` または `get_historical_metrics` ツールが呼ばれる
   - volume / competition / CPC が返ってくる
   - 出稿ゼロなら範囲表示 (例: `100-1K`)、出稿中なら実数 (例: `880`)

---

## 利用可能なMCPツール

| ツール名 | 用途 |
|---|---|
| `generate_keyword_ideas` | シードKWやURLから関連KWアイデア + volume / CPC を生成 |
| `get_historical_metrics` | 特定KWの過去 volume / competition / CPC |
| `get_keyword_forecast` | 指定の Max CPC bidでの予測 impressions / clicks / cost |

---

## トラブルシューティング

### Developer Token Basic Access 承認が来ない (1週間以上)
→ Use case を再記入。「内部リサーチ目的、第三者にデータ提供しない」を明示。

### "PERMISSION_DENIED" エラー
→ Customer ID と Login Customer ID の組み合わせを確認。MCC配下の場合は両方必要。

### バイナリが起動しない (Gatekeeper)
```bash
xattr -d com.apple.quarantine ~/.local/bin/kwp-mcp
```

### Refresh token が期限切れ
→ Step 8 を再実行。Refresh token の有効期限は通常無期限だが、認可取り消しや 6ヶ月以上使用しなかった場合は失効する。

### MCP が Claude Code に認識されない
→ `.mcp.json` の syntax を JSON validator で確認 (`jq . .mcp.json`)
→ Claude Code を完全再起動 (Cmd+Q → 起動)
→ アシスタントに「現在利用可能な MCP サーバーは?」と聞いて確認

---

## セキュリティ注意事項

1. **credentials.env は絶対にgitにコミットしない**
   - 場所が `~/.config/kwp-mcp/` (HOME配下、リポジトリ外) なので通常は問題なし
   - 万一リポジトリ内に置く場合は `.gitignore` 追加必須
2. **Developer Token は機密情報** — 他人に共有しない
3. **Refresh Token は永続認証情報** — 漏洩したら即 Google Cloud Console で revoke

---

## コスト見積もり

| 項目 | コスト |
|---|---|
| Google Ads アカウント | 無料 |
| Google Cloud Console プロジェクト | 無料 |
| Google Ads API 呼び出し | **無料** (Basic Access は15,000 ops/日まで) |
| 実数 volume を得るための出稿 | **月$50-100** (任意) |
| Developer Token Standard Access | 無料 (申請通過すれば、Basic制限解除) |

**最小コスト = $0/月** (範囲表示で良ければ)
**実数取得 = $50/月程度** (KW Plannerの精度はOK)

---

## 次回の作業

ユーザー側 Step 5-9 完了次第、アシスタントに知らせてください。
- 「kwp-mcp の認証情報設定が完了した」と一声
- Claude Code 再起動後、すぐに KW リサーチを実行できます
- 最初のテスト KW として推奨: `asakusa walking tour`, `jimbocho walking tour`, `yanaka walking tour`

承認まで時間がかかる Developer Token Basic Access が最大のボトルネック (24-48h)。Step 5-6 と Step 7 申請は並行で進めるのが最速。

# Anthropic Routine 登録手順（Manabu さん向け）

このパイプラインは Anthropic の Claude Code Routines（クラウド実行）で **2つのRoutine** を毎日自動実行します。
登録は **Web UI** が圧倒的にスムーズ（CLIだと OAuth/secrets 登録で詰まる）。

## 全体像

| Routine | 役割 | 実行頻度 |
|---|---|---|
| **① Daily SEO Brief Generation** | GSC/GA4 分析 → brief PR作成 → Slack通知 | 毎朝 7:00 |
| **② Build Article from Approved Brief** | approved brief を記事化 → feature PR作成 → Slack通知 | 毎時 0分 |

→ 朝に brief PR が来て、Manabu さんが採用承認・独自エピソード追記 + commit すると、1時間以内に記事 PR が自動生成される。**電車内の3-5分の作業で記事化まで完結**。

## 前提

- Claude Pro / Max plan のアカウントを持っていること
- GitHub リポジトリ `mkmanabu122003/private-tour-page-new` が main に最新コミット済み（このパイプラインのファイル群が含まれている）
- ローカルに `~/.config/gcloud/application_default_credentials.json` が存在（gcloud で認証済み）

## ステップ1：gcloud ADC を JSON 文字列として取得

ターミナルで以下を実行：

```bash
cat ~/.config/gcloud/application_default_credentials.json
```

出力された JSON（`{ ... }` 全文、約400バイト）を**全選択してコピー**してください。
このあと Routine の secret として登録します。

> セキュリティメモ：このJSONには Google アカウントの refresh_token が含まれます。Anthropic Routine secret は AES-256 で暗号化されて保管されますが、漏洩すれば Google API へのアクセス権を奪われます。コピー後はクリップボードをすぐ別の内容で上書きしてください。

## ステップ2：Web UI で Routine ① を作成（Daily SEO Brief Generation）

1. https://claude.ai/code/routines を開く
2. **「New Routine」**（または「+」ボタン）をクリック
3. 以下を入力：

### Name
```
Daily SEO Brief Generation (tanuki-tabi-travel)
```

### Model
```
Claude Opus 4.7
```
（Sonnet 4.6 でも可。Opus の方が分析品質が高い）

### Repositories
- 「Add repository」をクリック
- GitHub OAuth 認可（初回のみ）
- `mkmanabu122003/private-tour-page-new` を選択
- Branch: `main` をベースに

### Schedule (Trigger)
- **Recurring** を選択
- **Daily** をプリセットから選択
- **Local time**: `07:00`（毎朝7時、自動でUTCに変換される）

> CLI で後から微調整したい場合は登録後に `/schedule update {routine-id} schedule "0 7 * * *"` のように指定可能。

### Instructions（プロンプト本体）

以下を**そのまま**コピペ：

```
あなたは tanuki-tabi-travel.com のシニアSEOマーケターです。

リポジトリの seo-pipeline/templates/generate-prompt.md を熟読し、その指示に厳密に従って以下を実行してください：

1. python3 seo-pipeline/scripts/fetch_daily.py を実行して、本日の GSC + GA4 データを seo-pipeline/data/daily/{今日の日付}.json に書き出す
2. 生成された JSON、seo-pipeline/config.yml、src/AppRoutes.tsx の既存slug一覧を分析
3. 機会クエリを抽出し、ガードレール（カニバリ・avoid keywords・AI Overview リスク）をチェック
4. 最優先の1案を選び、seo-pipeline/templates/brief.md の形式で EN+ES の brief を作成
5. seo-pipeline/briefs/{今日の日付}-{slug}.md として保存
6. claude/daily-brief-{今日の日付} ブランチを作成してcommit + push

詳細は seo-pipeline/templates/generate-prompt.md を必ず参照してください（プロセス、優先度判断基準、ガードレールが全部書かれています）。

Manabu独自エピソードのプレースホルダーは必ず含めること。私（Claude）が代筆できない一次情報はManabuさんの判断・追記領域です。
```

### Environment Variables (Secrets)

「Environment settings」または「Add secret」から：

| Name | Value |
|---|---|
| `GOOGLE_APPLICATION_CREDENTIALS_JSON` | ステップ1でコピーしたJSON全文（改行含む、約400バイト） |

> **値はマスクされて表示**されます。登録後は値が見えなくなるので、再登録するときはステップ1の値を再コピーしてください。

### Permissions
- **「Allow unrestricted branch pushes」**: **OFF**（安全のため、`claude/` プレフィックスのブランチのみpush可能。Manabuさんが PR レビュー後 main へマージする運用）

### Connectors
- 不要（GitHub のみ）

### Notifications（オプション）
- Slack や Gmail に通知したい場合はここで設定。後からで OK。

---

## ステップ3：Web UI で Routine ② を作成（Build Article from Approved Brief）

Routine ① と同じ要領で、もう1つ Routine を追加します。

1. **https://claude.ai/code/routines** で再度 **「New Routine」**
2. 以下を入力：

### Name
```
Build Article from Approved Brief (tanuki-tabi-travel)
```

### Model
```
Claude Opus 4.7
```
（記事生成 + 多言語 + ファクトチェック含む長時間処理なので Opus 推奨）

### Repositories
- 同じく `mkmanabu122003/private-tour-page-new` を選択
- Branch: `main`

### Schedule (Trigger)
- **Recurring** を選択
- **Hourly** プリセット（毎時 0 分実行）
- もしくは Custom cron: `0 * * * *`

> approved brief がない場合は数秒で exit するので、毎時実行でも usage に大きな影響なし。

### Instructions（プロンプト本体）

```
あなたは tanuki-tabi-travel.com の自動記事生成エージェントです。

リポジトリの seo-pipeline/templates/build-article-routine-prompt.md を熟読し、その指示に厳密に従って以下を実行してください：

1. seo-pipeline/briefs/*.md をスキャンし、status: approved かつ Manabu独自エピソードプレースホルダーが残っていない brief を1件選ぶ
2. 該当 brief がなければ「No approved briefs to build」とログを残して exit 0
3. 該当 brief があれば、リポジトリ内の .claude/commands/build-article.md skill の手順に従って記事化（EN+ES tsx + routes + sitemap + 型チェック + feature branch + PR作成）
4. PR 作成成功後、brief を seo-pipeline/archive/approved/ に移動して main に直接 commit
5. Slack #tour-guide に「記事生成完了」通知

詳細は seo-pipeline/templates/build-article-routine-prompt.md を必ず参照してください（ガードレール、失敗時の挙動、サンプル実行ログが書かれています）。
```

### Environment Variables (Secrets)

| Name | Value |
|---|---|
| `GOOGLE_APPLICATION_CREDENTIALS_JSON` | Routine ① と同じ値（コピーして登録、または同一 Environment を選択） |

> Routine ① と Routine ② で同じ Environment を共有できる場合は、Environment を一度作って両方の Routine から参照させると secret 管理が楽。

### Permissions
- **「Allow unrestricted branch pushes」**: **ON**
  - 理由：brief を main に直接 push する操作があるため（archive 移動のみ、安全）
  - feature ブランチも作るため、`claude/` プレフィックス制限だと作業ブランチが作れない

### Connectors
- Slack を ON（Routine ①と同じ）
- GitHub を ON

---

## ステップ4：Test Run（本番schedule前に1回確認）

登録直後、Routine 詳細画面の **「Run now」** ボタンをクリック。

- 約5-10分で完了
- 完了後、`Past runs` に結果が表示される
- 「Open session」で実行ログを全部見られる

### 成功時の確認項目
- [ ] `seo-pipeline/data/daily/{today}.json` が生成された（GitHubのbranchで確認）
- [ ] `seo-pipeline/briefs/{today}-{slug}.md` が生成された
- [ ] `claude/daily-brief-{today}` ブランチがpush されている

### 失敗時の対処
- GCS API エラー → `gen-lang-client-0292783405` でAPI有効化されているか確認
- 認証エラー → secret の JSON が壊れていないか確認（最初/最後の `{` `}` が含まれているか）
- 既存brief 重複 → `seo-pipeline/briefs/` に同じ日付のファイルがあれば手動削除

## ステップ5：本番運用開始

両方の Routine が動作確認完了したら、本番運用に入ります。

- **毎朝7時**：Daily SEO Brief Routine が brief PR を作成 → Slack 通知
- **毎時0分**：Build Article Routine が approved brief をスキャン
  - 該当なし → 数秒で exit
  - 該当あり → 記事化 → feature PR → Slack 通知

### 電車内完結の運用例

1. **朝7時** Slack #tour-guide に brief PR 通知
2. **電車内（通勤、5分）**：
   - GitHub Mobile で brief PR を開く
   - .md ファイルを直接編集
   - Manabu独自エピソードを書き込む
   - `status: pending` → `status: approved` に変更
   - 同じく `manabu_experience_filled: yes` を front matter に追加
   - commit
   - PR を Ready for review → Merge
3. **電車内 or 移動中**：1時間以内に Build Article Routine が記事化 → 別 PR の通知が Slack に来る
4. **帰宅後（または夜）**：記事 PR を確認 → マージ → 自動デプロイ
5. **翌日 or 公開当日**：GSC でインデックスリクエスト

## CLI で後から微調整する

```bash
# 一覧
/schedule list

# 詳細確認（routine ID は web UIで確認）
/schedule show {routine-id}

# schedule 変更（例：8時に変更）
/schedule update {routine-id} schedule "0 8 * * *"

# 一時停止
/schedule disable {routine-id}

# 削除
/schedule delete {routine-id}
```

## トラブルシューティング

### Routine が動かない
- `claude.ai/code/routines` で routine の status を確認
- 「Past runs」でエラーログ確認
- Daily usage cap に達している可能性 → `claude.ai/settings/usage` で確認

### Token 失効（数ヶ月後の話）
症状: secret に登録した ADC が期限切れ → API 401 エラー

対応：
1. ローカルで `gcloud auth application-default login` を再実行
2. ステップ1の JSON を再取得
3. Routine の `GOOGLE_APPLICATION_CREDENTIALS_JSON` secret を更新

### Brief の質が悪い
- `seo-pipeline/templates/generate-prompt.md` を修正してcommit
- 次回run時から反映される

### 採用ペースを下げたい
- `seo-pipeline/config.yml` の `publishing_pace.target_publishing_per_week` を変更
- Routine の schedule を週3日に変更（`0 7 * * 1,3,5`）

## 関連ドキュメント

- パイプライン全体: `seo-pipeline/README.md`
- 設定: `seo-pipeline/config.yml`
- 生成ロジック: `seo-pipeline/templates/generate-prompt.md`
- ブリーフ書式: `seo-pipeline/templates/brief.md`

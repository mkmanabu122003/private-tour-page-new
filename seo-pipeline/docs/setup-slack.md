# Slack 通知セットアップ手順（Manabu さん向け）

Daily SEO Brief Routine が brief PR を作成したら、Slack `#tour-guide` チャンネルに通知メッセージを投稿させる設定。

## 前提

- Slack workspace に対する管理権限（または管理者の協力）
- Claude Pro / Max plan
- 既存の Daily SEO Brief Routine が動作している

## ステップ1：claude.ai に Slack connector を追加

1. **https://claude.ai/customize/connectors** を開く
2. **「Add connector」** または **「Browse」** から **Slack** を検索
3. **「Connect」** をクリック → OAuth 認可画面に遷移
4. 通知を出したい workspace を選択
5. 「Allow」で接続承認

> 初回のみ workspace 管理者の承認が必要な場合あり。承認待ちなら Slack 管理者に依頼。

## ステップ2：Slack 側で Claude を `#tour-guide` チャンネルに招待

Slack 側で：
1. `#tour-guide` チャンネルを開く
2. メッセージ欄に以下を入力して送信：
   ```
   /invite @Claude
   ```
3. Claude bot がチャンネルに追加されたことを確認

> `@Claude` という名前は workspace の設定により `@Anthropic` などになる場合あり。実際に表示される bot 名で招待してください。

## ステップ3：Routine の Connectors で Slack を有効化

1. **https://claude.ai/code/routines** を開く
2. **Daily SEO Brief Generation (tanuki-tabi-travel)** routine をクリック → **Edit**
3. **Connectors** タブを開く
4. **Slack** を ON にする
5. **Save**

> Routines のデフォルトでは全 connector が有効になっているケースが多い。確認して OFF になっていれば ON に変更。

## ステップ4：Routine の Prompt に Slack 通知ステップを追加

既存の Routine の Instructions 最後に以下を追記、または `seo-pipeline/templates/generate-prompt.md` をそのまま参照させている場合は自動的に反映済み：

```
最後に、Slack の #tour-guide チャンネルに以下のフォーマットで通知してください：

📝 *本日のSEO Brief 生成完了*

*記事案*: <PR URL|{EN title}>
*カテゴリ*: {category}
*優先度*: {priority}
*リスク*: duplicate={duplicate_risk} / competitor={competitor_difficulty} / ai_overview={ai_overview_risk}

*なぜこの案か*: {brief の "Why this article" を1-2行で要約}

朝の確認をお願いします → {PR URL}
```

## ステップ5：動作確認

1. Routine 詳細画面で **「Run now」** をクリック（手動 trigger）
2. 5-10分待つ
3. `#tour-guide` チャンネルに通知が届くか確認

### 成功時の画面例
```
[Claude APP]  10:23 AM
📝 本日のSEO Brief 生成完了
記事案: Is Hakone Worth Visiting? A Private Guide's Honest Take (2026)
カテゴリ: Decision Helpers
優先度: high
リスク: duplicate=low / competitor=medium / ai_overview=low
なぜこの案か: 新着クエリ「is hakone worth visiting」捕捉（pos 40.83）。
既存「is kamakura worth visiting」(pos 3.11) の成功パターン横展開。
朝の確認をお願いします → https://github.com/.../pull/84
```

## トラブルシューティング

### Slack 通知が届かない

| 症状 | 対応 |
|---|---|
| 「Slack connector not connected」エラー | ステップ1 を再実行、OAuth を再認可 |
| 「Channel not found」エラー | `#tour-guide` の正確なチャンネル名を確認（先頭の # 含む/含まないの違い、`#` ではなく channel ID `C0123ABC` で指定する必要あり） |
| Claude bot がチャンネルにいない | ステップ2 の `/invite @Claude` を再実行 |
| メッセージは届くが文字化け | Slack mrkdwn 構文（`*太字*`、`<URL\|テキスト>`）になっているか確認 |
| 通知が遅延する | Routine 実行自体が前後数分ぶれる仕様。通知は Routine 完了直後に送信される |

### Slack チャンネル名 vs ID

Slack connector の挙動が不明な場合（チャンネル名と ID どちらが必要か）、両方試すか、安全策として **channel ID** で指定：

1. Slack で `#tour-guide` を開く
2. チャンネル名をクリック → 「About」→ 最下部の **Channel ID** をコピー（`C0123ABC456` のような形式）
3. Routine の prompt 内で `#tour-guide` の代わりに `C0123ABC456` を使う

### 通知頻度を変えたい

- 採用候補の brief のみ通知（priority: high のときだけ）→ generate-prompt.md の Step 7 に if文条件を追加
- 通知 OFF → Connectors タブで Slack を OFF（Routine は動き続ける、通知だけ止まる）
- 別チャンネルに変更 → prompt 内のチャンネル名を変更

## 補足：他の通知方法との比較

| 方法 | 良い点 | 欠点 |
|---|---|---|
| **Slack #tour-guide**（本ドキュメント） | リアルタイム、リンク付き、複数人共有可 | Slack 開いてないと見ない |
| **Email**（GitHub PR 作成時に自動） | 設定不要、外出時も気づきやすい | 文面がそっけない、複数人に共有しにくい |
| **Anthropic Routine Run history** | 失敗時のログまで全部見れる | 能動的にチェックしに行く必要あり |

Slack + Email の併用が無難。

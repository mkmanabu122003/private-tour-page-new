# 日次運用フロー（Manabuさん向け）

毎日のSEO記事案を確認・採用・公開するフロー。

**運用方針**: 電車・スマホでは **読むだけ**。再生成・記事化はすべて帰宅後の PC で行う。
モバイルアプリで Claude Code Routines が未対応のため、シンプルかつ確実な運用を優先。

## タイムテーブル

| 時間帯 | 場所 | 何をやる | ツール |
|---|---|---|---|
| 07:00 | （自動） | Routine が brief 生成 → Draft PR 作成 | Anthropic Routine |
| 朝（任意） | スマホ / PC | GitHub通知メールでPR存在を知る | Gmail |
| 電車中 | スマホ | brief 本文をじっくり読む | GitHub Mobile |
| 電車中 | スマホ | PRコメントに **自分宛のメモ**を書く（採用 / 却下 / 再生成希望） | GitHub Mobile |
| 帰宅後 | PC | コメントを元に対応（下記） | Claude Code / ローカル |

---

## ステップ1：朝の確認（5分以内、スキマ時間）

### A. ブランチ閲覧

GitHub 通知メール or 手動で：

1. https://github.com/mkmanabu122003/private-tour-page-new/pulls
2. `brief: 2026-XX-XX — ...` の Draft PR をクリック
3. 「Files changed」または brief.md を開く

### B. 3パターンの判断

| 判断 | 電車中の操作 | 帰宅後の操作 |
|---|---|---|
| **採用** | PRコメントに「採用、夜に記事化」と書く | Manabu独自エピソード追記 → マージ → `/build-article` |
| **却下** | PRコメントに「却下、理由：X」と書く（後で振り返りに使う） | PR Close + ブランチ削除 |
| **再生成希望** | PRコメントに「再生成、focus on Y」と書く | ローカルで対話セッションから再生成依頼 |

電車中は **PRコメントに自分宛のメモを書くだけ**。アクション（マージ・削除・再生成）は全部帰宅後。

---

## ステップ2：帰宅後の対応（PC、状況別）

### ケース1：採用の場合（30-60分）

1. **brief 編集（Manabu独自エピソード追記）**
   - ローカルで `git checkout claude/daily-brief-{今日の日付}` でブランチ取得
   - VS Code or Cursor で `seo-pipeline/briefs/{今日の日付}-{slug}.md` を開く
   - `[ここにManabuさんの実体験エピソードを挿入]` プレースホルダーに具体的な体験を書く
   - 5-15分の作業

2. **brief PR をマージ**
   - GitHub Web で PR を Ready for review に変更
   - Merge（squash でも普通のmerge でもOK）
   - これで brief が main ブランチに保存される

3. **Claude Code 起動 → 記事化**
   ```bash
   cd /Users/manabu/Desktop/private-tour-page-new
   claude
   ```
   セッション内で：
   ```
   /build-article seo-pipeline/briefs/2026-XX-XX-{slug}.md
   ```
   Claudeが：
   - briefを読む（プレースホルダーが残っていれば中止して質問）
   - 必要なファクトを web search で検証
   - 画像を選定（プロジェクト内未使用 + Wikimedia）
   - tsx (EN+ES) 生成
   - AppRoutes / BlogIndex / sitemap 更新
   - 型チェック
   - feature ブランチ + PR 作成

4. **記事PR レビュー → マージ → デプロイ**
   - ローカルプレビュー（`npm run dev` → `localhost:8080/blog/{slug}`）で画像・文体確認
   - 問題なければ GitHub で PRマージ
   - 自動デプロイ完了を待つ

5. **インデックスリクエスト**
   - GSC Web UI でURL検査 → 「インデックス登録をリクエスト」
   - 1日10件上限、2URL（EN+ES）なら余裕

### ケース2：却下の場合（10秒）

```bash
gh pr close {PR番号} --delete-branch
```

または GitHub Web から：
- PR ページで **Close pull request** → **Delete branch**

却下理由を PRコメントに書いておくと、Routineの生成傾向を後で振り返るときに役立ちます。

### ケース3：再生成希望の場合（Claude Code 対話、10-15分）

ローカルで Claude Code を起動：

```bash
cd /Users/manabu/Desktop/private-tour-page-new
claude
```

セッション内で自然言語で依頼：

```
seo-pipeline/briefs/2026-XX-XX-{slug}.md を読んで、別軸で brief を再生成してください。

現状の問題: worth-it 系より、Hakone vs Kawaguchiko 比較の方が CV に近そう
新しい focus: Decision Helper として「箱根と河口湖どっちにすべきか」
残したいもの: Manabu の差別化スラント案3つ（富士山が見えない日・秘密スポット・勧めなかった例）

旧briefは seo-pipeline/archive/rejected/ に移動して、新briefは同じ
claude/daily-brief-{今日の日付} ブランチに追記commitしてください。
```

Claudeがその場で：
- 旧briefを archive
- 新briefを生成・commit
- PR に コメント追加

**コスト**: Claude Code セッションは Pro/Max plan の usage 内（追加課金なし）。

> Anthropic Routine の「Regenerate Brief」を使う方式も用意してあります（`templates/regenerate-prompt.md`）。モバイルからtriggerしたい場合に登録してください。通常運用では Claude Code 対話セッションで十分です。

---

## 週次振り返り（毎週金曜30分推奨）

`seo-pipeline/archive/` と GitHub の Closed PR を見て：
- 採用率（採用 / 全brief）
- 却下理由のパターン
- 記事化までの所要日数

### config.yml の調整タイミング

却下率が高い、または同じ理由で却下が続く場合：
- `seo-pipeline/config.yml` の `priority_categories` weight を調整
- `avoid` パターンを追加

修正後 commit すれば、翌朝のRoutineから反映される。

---

## 月次レビュー（毎月1回30分）

`python3 seo-pipeline/scripts/fetch_daily.py --days 30` で月次サマリ取得。

KPI 確認（`config.yml` の `goals` セクション）：
- form_submit の前月比
- GSC clicks の前月比
- 新規記事のインデックス状況（GSC URL Inspection API）

3ヶ月ごとに `config.yml` の goals を更新。

---

## エスカレーション

困ったら：

| 症状 | 対応 |
|---|---|
| Routine が動かない | `docs/setup-routine.md` トラブルシューティング章 |
| briefの質が低い | `seo-pipeline/templates/generate-prompt.md` を修正してcommit、次回run時から反映 |
| API 認証エラー | ローカルで `gcloud auth application-default login` → ADC 再取得 → Routine secret 更新 |
| `/build-article` で失敗 | エラー内容を Claude Code セッションで共有、その場でデバッグ依頼 |
| 採用ペースが続かない | 1ペース/週から再スタート、品質維持優先 |

---

## まとめ：Manabuさんの日次タスク

| 時間 | 工数 |
|---|---|
| 朝の確認（電車） | 3-5分 |
| 採用時の記事化（夜） | 30-60分（週2-3回） |
| 週次振り返り（金曜） | 30分 |
| 月次レビュー（月1） | 30分 |

合計：**週あたり 1.5-3時間** で 4-6記事公開のペースが回ります。

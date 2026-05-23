# Build Article Routine — Claude Code への指示

このプロンプトは「Build Article from Approved Brief」Routine に登録するものです。
**毎時0分に自動実行** し、main ブランチの `seo-pipeline/briefs/` に `status: approved` のブリーフがあれば記事化します。

---

## あなたの役割

`tanuki-tabi-travel.com` の自動記事生成エージェントとして、Manabu さんが承認した brief を完成記事 (EN+ES) に変換し、feature PR を作成してください。

## トリガー条件

このRoutineは毎時実行されますが、**処理を進めるのは brief が見つかった場合のみ**。

### Step 1: スキャン

```bash
ls seo-pipeline/briefs/*.md 2>/dev/null
```

各 brief ファイルの front matter を確認し、以下の **全条件を満たすもの** を探す：

- `status: approved`
- `manabu_experience_filled: yes`（または brief 本文に `[ここにManabuさんの実体験エピソードを挿入]` のプレースホルダーが**残っていない**こと）

該当する brief が **ゼロ件** → ログに「No approved briefs to build」と書いて **exit 0**（正常終了）。

該当する brief が **複数件** → priority が `high` のものを優先。同点なら `date` が古いものから処理（FIFO）。**1回の実行で1件だけ処理**（複数同時生成は避ける）。

## Step 2: build-article skill の手順に従う

リポジトリ内の `.claude/commands/build-article.md` skill を実行してください。

skill の主要処理：
1. brief 読込 + validation
2. Required facts を web search で検証
3. 画像選定（project内未使用優先、不足は Wikimedia Commons から）
4. EN tsx 生成（`src/pages/blog/{PascalCaseSlug}.tsx`）
5. ES tsx 生成（`src/pages/es/blog/Es{PascalCaseSlug}.tsx`、native review マーク付き）
6. AppRoutes / BlogIndex / sitemap 更新
7. `npx tsc --noEmit` で型チェック
8. `feature/article-{slug}` ブランチ作成
9. commit + push
10. `gh pr create` で main 向け PR 作成

## Step 3: brief を archive へ移動

PR 作成成功後：

```bash
# feature ブランチ作業が終わったので main に戻る
git checkout main
git pull origin main

# brief を archive へ移動
git mv seo-pipeline/briefs/{date}-{slug}.md seo-pipeline/archive/approved/{date}-{slug}.md

# 移動を main に直接 commit
git commit -m "archive(brief): move {slug} brief after auto-build PR #{PR_NUMBER}"
git push origin main
```

> archive 移動を main に直接 push する理由：Routine の次回実行で同じ brief が再処理されるのを防ぐため。brief 自体に変更はない（移動のみ）ので安全。

## Step 4: Slack #tour-guide に通知

```
🎉 *記事生成完了（自動）*

*記事*: <{PR URL}|{EN title}>
*Brief由来*: {brief filename}

PRレビュー → main マージ → デプロイ → GSCインデックスリクエスト の流れで公開してください。

⚠️ Manabu独自エピソードは brief に書かれた通りに反映していますが、最終的なトーン調整・追記は記事PRで自由に編集可能です。
```

Slack 通知失敗は brief の build 自体を失敗扱いにしないでください（archive移動 + PR作成が完了していれば成功）。

## ガードレール

1. **同時生成しない**：1回の実行で 1 brief のみ。複数 approved があっても他は次回回し
2. **失敗時の挙動**：
   - **型チェック失敗** → PR 作らずに exit 1、brief は archive 移動しない（再試行可能な状態を保つ）
   - **画像取得失敗** → 代替プロジェクト画像で進む、PRに「画像差し替え推奨」コメント
   - **Required fact が大きく brief と矛盾** → PR は作るが、PRの本文に「⚠️ Fact discrepancy detected: {詳細}」を明示
3. **brief の placeholder が残っている**：`[ここにManabuさんの実体験エピソードを挿入]` が brief 本文にある場合は **エラー扱い** で exit。Manabuさんに Slack で通知（「approved になっていますが、Manabu独自エピソードのプレースホルダーが残っています。記事化前に追記してください」）
4. **slug 衝突**：同じ slug の Route が既に AppRoutes.tsx にあれば exit。Slack 通知で「slug collision: {slug}」

## サブスクリプション内で動くこと

- このRoutineは Pro/Max plan の Routine usage 内で動作
- 追加 API 課金なし
- 1日 24 回 cron 実行されるが、approved brief が無い時は exit 0 で usage 微小
- 実際の記事化（処理重い）は 月数回（Manabu さんの採用ペース次第）
- daily routine cap には注意：朝の Daily Brief Routine と合わせて、想定では問題なし

## サンプル実行ログ（成功時）

```
[10:00:01] Scanning seo-pipeline/briefs/...
[10:00:01] Found 1 approved brief: 2026-05-23-tokyo-with-toddler-strollers.md
[10:00:02] Reading brief... priority: medium, manabu_experience_filled: yes
[10:00:03] Loading /build-article skill...
[10:00:03] Fact-checking 4 items...
[10:01:30] Selecting images (3 from project, 1 from Wikimedia)...
[10:02:15] Downloading + converting Wikimedia image...
[10:03:00] Generating EN tsx (1830 words)...
[10:05:00] Generating ES tsx...
[10:07:00] Updating routes/index/sitemap...
[10:07:30] Type check passing.
[10:07:35] Creating feature/article-tokyo-with-toddler-strollers branch...
[10:07:40] PR created: #88
[10:08:00] Moving brief to archive/approved/...
[10:08:05] Slack notification sent.
[10:08:05] Done.
```

## サンプル実行ログ（approved brief なし）

```
[11:00:01] Scanning seo-pipeline/briefs/...
[11:00:01] No approved briefs found. Exiting cleanly.
```

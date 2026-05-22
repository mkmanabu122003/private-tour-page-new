# Brief Regenerate — Claude Code Routine への指示

> **⚠️ Optional / 通常運用では不要**
>
> 通常は **Claude Code 対話セッションで直接再生成依頼** する運用（`docs/operations.md` のケース3参照）。
> Android Claude モバイルアプリで Routines が未対応のため、電車内手動trigger の前提が崩れている。
>
> この Routine を登録すべき場合：
> - iPad / タブレットで claude.ai Web 版から triggerしたい
> - 何らかの自動化（GitHub Actions等）から trigger したい
> - 将来 Android アプリで Routines が対応された場合
>
> 単発の再生成は Claude Code 対話の方がコンテキスト調整しやすく確実です。

このプロンプトは「Regenerate Brief」Routine に登録するものです（任意）。

---

## あなたの役割

最新の `claude/daily-brief-{今日の日付}` ブランチに既に brief が push 済みの状態で、Manabuさんから「別軸で再生成」のリクエストがあった場合に、新しい角度で brief を生成し直してください。

## 入力

### A. 既存のbrief
`seo-pipeline/briefs/{今日の日付}-{slug}.md` を読む。

### B. 再生成リクエスト
`seo-pipeline/regenerate.md` を読む。ここに Manabuさんが「何を変えてほしいか」を書いている。例：

```
# Regenerate Request

target_brief: 2026-05-22-is-hakone-worth-visiting.md
reason: 「worth it 系より、Hakone vs Kawaguchiko 比較の方が CV に近そう」
new_focus: Decision Helper として「箱根と河口湖どっちにすべきか」に振る
keep: Manabu の3つの差別化スラント案は活かしてほしい
```

`seo-pipeline/regenerate.md` が存在しないか、空なら：
**何もせず exit 0**（Routine が「再生成リクエストなし、スキップ」とログを出して終了）

### C. 共通リソース
- `seo-pipeline/data/daily/{今日の日付}.json`（既に存在する）
- `seo-pipeline/config.yml`
- `src/AppRoutes.tsx` の既存slug一覧

## 処理

1. **regenerate.md の指示を解釈**
   - target_brief: どの brief を再生成するか
   - reason: 何が問題と感じたか
   - new_focus: 新しい軸はどこか
   - keep: 残したい要素

2. **新しい brief を生成**
   - 既存briefの "Why this article" のデータ部分は再利用可
   - new_focus を反映して slug, title, H2 outline を全部書き換え
   - config.yml のガードレールを再チェック（カニバリ・avoid・AI Overview）

3. **既存briefを置き換え**
   ```bash
   # 旧briefをarchive
   git mv seo-pipeline/briefs/{date}-{old-slug}.md seo-pipeline/archive/rejected/{date}-{old-slug}-v1.md
   
   # 新briefを書き出し
   # seo-pipeline/briefs/{date}-{new-slug}.md (status: pending)
   ```

4. **regenerate.md を archive**
   ```bash
   git mv seo-pipeline/regenerate.md seo-pipeline/archive/rejected/regenerate-{date}-{HHMMSS}.md
   ```

5. **commit + push**（同じ `claude/daily-brief-{date}` ブランチに追記）
   ```bash
   git checkout claude/daily-brief-{date}
   git add seo-pipeline/briefs/ seo-pipeline/archive/
   git commit -m "brief: regenerate — {new title} (was: {old title})"
   git push
   ```

6. **PR に コメント追加**
   ```bash
   gh pr comment {PR_NUMBER} --body "$(cat <<EOF
   ## 🔄 Brief 再生成しました
   
   **旧**: {old title}
   **新**: {new title}
   
   理由: {reason from regenerate.md}
   
   旧briefは \`archive/rejected/\` に保存しています。
   EOF
   )"
   ```

## ガードレール

- 同じ brief を **2回以上**再生成しない（archive_count >= 2 なら exit）
- regenerate.md が空 / 存在しない → 何もしない
- config.yml の avoid に該当する new_focus → 拒否してPRコメントに「avoid に該当」と書く

## なぜこのRoutineが必要か

朝に生成されたbriefを電車内（移動中）でじっくり読み、「軸が違うな」と感じたとき、Manabuさんが claude.ai (Web版) からモバイルで：

1. GitHub Mobile で `seo-pipeline/regenerate.md` を直接編集 + commit
2. claude.ai/code/routines を開く → "Regenerate Brief" → "Run now"
3. 数分後、同じPRに新しい brief が追記される

→ **追加コストなし**（Pro/Max plan の Routine usage 内）で **電車内で完結**。

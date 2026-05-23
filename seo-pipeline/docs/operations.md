# 日次運用フロー（Manabuさん向け）

毎日のSEO記事案を確認・採用・公開するフロー。

**運用方針**: **電車内で採用判断 + commit → 1時間後に記事が自動生成 → 帰宅後マージするだけ**。
2つの Routine（Brief生成 + Article生成）が連携して、電車内3-5分の作業で記事化まで進む半自動運用。

## タイムテーブル

| 時間帯 | 場所 | 何をやる | ツール |
|---|---|---|---|
| 07:00 | （自動） | Routine ① が brief 生成 → Draft PR 作成 → Slack 通知 | Anthropic Routine |
| 朝（任意） | スマホ | Slack `#tour-guide` の通知を確認 | Slack |
| 電車中 | スマホ | brief 本文をじっくり読む | GitHub Mobile（推奨） |
| 電車中 | スマホ | **採用なら：brief を直接編集 + commit + マージ** ★これだけで記事化が走る | GitHub Mobile |
| ~1時間後 | （自動） | Routine ② が approved brief をスキャン → 記事化 → feature PR → Slack 通知 | Anthropic Routine |
| 帰宅後 / 夜 | スマホ or PC | 記事 PR を確認 → マージ → 自動デプロイ | GitHub Mobile / PC |
| 翌日 | PC | GSC でインデックスリクエスト（EN+ES 2URL） | GSC Web UI |

---

## ステップ1：朝の確認（5分以内、スキマ時間）

### A. brief の閲覧（モバイル 3つの方法）

朝7時頃、`#tour-guide` Slack チャンネルに以下のような通知が届きます：

```
📝 本日のSEO Brief 生成完了
記事案: Is Hakone Worth Visiting?
カテゴリ: Decision Helpers / 優先度: high
リスク: duplicate=low / competitor=medium / ai_overview=low
朝の確認をお願いします → https://github.com/.../pull/84
```

その PR URL を開く方法は3つ：

| 方法 | 操作感 | おすすめ場面 |
|---|---|---|
| **A1. GitHub Mobile アプリ** | 最速、PRの diff・本文・コメント全部読める | 電車内で読むだけ。最も実用的 |
| **A2. claude.ai/code（モバイル Web）** | Claude に「この PR を要約して」と依頼可能 | 長文briefを要約したいとき |
| **A3. Remote Control（iOS/Android Claude アプリ）** | PCで動作中のClaude Codeセッションをスマホから操作 | PR編集まで行いたいとき（少数派ユースケース） |

### A1. GitHub Mobile（推奨）
- Google Play / App Store から GitHub アプリ
- リポジトリ `mkmanabu122003/private-tour-page-new` をスター済みなら通知タブから直接 PR にアクセス可能
- brief は .md ファイルなので **モバイル UI でちゃんと整形表示**される

### A2. claude.ai/code（モバイル Web）
- Android Chrome / iOS Safari で `claude.ai/code` を開く
- 任意のセッションで以下のように依頼：
  ```
  PR #84 の内容を要約して、採用すべきか判断材料を3つ教えて
  ```
- Claude が gh CLI で PR を取得 → 要約してくれる
- レスポンシブ対応で操作可能

### A3. Remote Control（Optional）
PC で Claude Code セッションを動かしておけば、`/remote-control` コマンドで URL/QRコードを発行 → スマホ Claude アプリで接続。電車内でセッション継続が可能。詳細は `code.claude.com/docs/en/remote-control.md`。


### B. 3パターンの判断 — **すべて電車内で完結**

| 判断 | 電車中の操作（GitHub Mobile） | 後で発生すること |
|---|---|---|
| **採用** | ①brief を直接編集して Manabu独自エピソード追記 + `status: approved` に変更 + commit ②PR を Ready for review → Merge | 1時間以内に Routine ② が記事PRを自動作成 → Slack 通知。帰宅後 or 夜にその記事PRをマージするだけ |
| **却下** | PRを Close + ブランチ削除（タップ2つ） | なし |
| **再生成希望** | `seo-pipeline/regenerate.md` を新規作成して focus指示を書く + commit | 翌朝の Daily Routine が再生成 (要：Daily Routineに該当ロジック追加。または帰宅後対話で対応) |

**電車内の作業時間: 3-5分**（採用の場合）。記事化（重い処理）は全部 Routine が裏でやる。

---

## ステップ2：採用の場合 — 電車内で完結する手順

### スマホ GitHub Mobile での操作

1. **brief PR を開く**：Slack 通知 → リンクをタップ → GitHub Mobile アプリで開く
2. **brief.md を読む**：内容を確認し、採用するか判断
3. **採用なら .md を直接編集**：
   - PR の Files changed → brief.md をタップ → 鉛筆アイコン
   - front matter を編集：
     ```yaml
     status: approved          # pending → approved
     manabu_experience_filled: yes
     approved_at: 2026-XX-XX
     ```
   - 本文の「Differentiation slant」セクションの `[ここにManabuさんの実体験エピソードを挿入]` プレースホルダーに、Manabuさんの実体験を書き込む（3つのスラントすべて）
   - 「Commit changes」をタップ → commit message を書いて commit（**同じブランチに追記**）
4. **PR を Ready for review → Merge**：
   - PR のステータスを Draft → Ready for review に変更
   - Squash and merge（推奨）
   - これで brief が main ブランチに保存される

### Routine ② が裏で動く（自動）

5. **次の毎時 0 分に Build Article Routine が起動**：
   - main の `seo-pipeline/briefs/` をスキャン
   - 今 commit した brief を発見（status: approved）
   - `/build-article` skill 実行（ファクトチェック・画像取得・tsx生成・PR作成）
   - 約15-20分後、feature/article-{slug} ブランチに feature PR が立つ
   - **Slack #tour-guide に「記事生成完了」通知**
6. **brief は archive へ自動移動**：次回 Routine 実行で重複処理されないように

### 帰宅後 or 夜：記事 PR をマージ

7. **記事 PR を確認**：
   - GitHub Mobile or PC でレビュー
   - PC でローカルプレビュー推奨（`npm run dev` → `localhost:8080/blog/{slug}`）
   - 画像・文体・Manabu エピソードの表現に違和感ないか確認
8. **問題なければマージ**：自動デプロイ
9. **翌日 GSC でインデックスリクエスト**（PC、1日10件上限）

---

## ケース2：却下の場合（10秒、電車内）

GitHub Mobile で PR を Close + ブランチ削除。

却下理由を PRコメントに書いておくと、Routineの生成傾向を後で振り返るときに役立ちます。

---

## ケース3：再生成希望の場合

### A. 電車内で完結（簡易、翌朝生成）

GitHub Mobile で `seo-pipeline/regenerate.md` を新規作成：

```yaml
target_brief: 2026-XX-XX-{slug}.md
reason: 「worth it 系より、Hakone vs Kawaguchiko 比較の方が CV に近そう」
new_focus: Decision Helper として「箱根と河口湖どっちにすべきか」
keep: Manabu の差別化スラント案3つ
```

commit すれば、Daily SEO Brief Routine が翌朝7時に再生成（generate-prompt.md にロジック実装が必要：未実装、Optional 機能）。

### B. 帰宅後の対話セッション（即時、確実）

ローカルで Claude Code を起動して依頼：

```
seo-pipeline/briefs/2026-XX-XX-{slug}.md を別軸で再生成。
focus: 〇〇
```

Claudeがその場で旧brief を archive + 新brief 生成 + PR コメント追記。

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

## まとめ：Manabuさんの日次タスク（半自動運用）

| 時間 | 工数 | 場所 |
|---|---|---|
| 朝の確認 + 採用判断（電車） | 3-5分 | スマホ GitHub Mobile |
| 記事PR レビュー → マージ（夜） | 5-15分（週2-3回） | スマホ or PC |
| インデックスリクエスト（翌日） | 1分/記事 | PC GSC |
| 週次振り返り（金曜） | 30分 | PC |
| 月次レビュー（月1） | 30分 | PC |

合計：**週あたり 30-60分** で 4-6記事公開のペースが回ります（記事化処理20分×4-6本は Routine ② が裏で実行）。

### Routine vs ローカル PC の役割分担

| 処理 | 担当 | 工数 |
|---|---|---|
| GSC/GA4 分析 | Routine ①（自動） | 0分 |
| brief 生成 | Routine ①（自動） | 0分 |
| 採用判断 + Manabu独自エピソード追記 | **Manabu さん** | **3-5分（電車内）** |
| ファクトチェック + 画像選定 + tsx生成 | Routine ②（自動） | 0分 |
| 記事PR レビュー | **Manabu さん** | **5-15分** |
| インデックスリクエスト | **Manabu さん** | **1分/記事** |

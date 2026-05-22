# 日次運用フロー（Manabuさん向け）

毎日のSEO記事案を確認・採用・公開するフロー。

## 朝のルーチン（5分）

1. メール or Slack で「Today's brief generated」通知（設定していれば）
2. もしくは https://github.com/mkmanabu122003/private-tour-page-new/branches を開く
3. `claude/daily-brief-{今日の日付}` ブランチを開く
4. `seo-pipeline/briefs/{今日の日付}-{slug}.md` をクリック

## brief の読み方

### 必ず確認するセクション
| セクション | 何を見るか |
|---|---|
| `priority` | high なら最優先 |
| `duplicate_risk` | medium/high なら既存記事と比較 |
| `ai_overview_risk` | high なら判断・体験slantで差別化必須 |
| `Why this article` | GSC実数値が説得力あるか |
| `Differentiation slant` | Manabuの体験エピソードが活きるか |
| `H2 outline` | 構成が論理的か、読者にとって価値ある順序か |
| `Risk notes` | 警告が出てないか |

### 3つの判断
1. **採用** → front matter の `status: approved` に変更してcommit
2. **修正必要** → `status: needs-changes` + コメント追記、または直接編集
3. **不採用** → `status: rejected` に変更

## 採用後の記事化（Manabuさんが空いている時、週2-3ペア）

### ステップ1: ローカルで Claude Code を起動

```bash
cd /Users/manabu/Desktop/private-tour-page-new
claude
```

### ステップ2: brief をベースに記事生成を依頼

```
seo-pipeline/briefs/2026-05-23-{slug}.md を読んで、その指示通りに記事（EN+ES）を作って。

- ファクトチェックは web search で実施
- 既存のEditorial Trustフォーマットに従う（BlogArticleHero + BlogArticleToc + section-XX id）
- 画像はプロジェクト内未使用画像を最優先、なければ Wikimedia Commons から
- AppRoutes / BlogIndex / sitemap も更新
- feature ブランチで commit
```

### ステップ3: Manabu独自エピソードの加筆

briefの `[ここにManabuさんの実体験エピソードを挿入]` プレースホルダーに、実際の体験を書き込む。

5-15分程度で1-2エピソード追加するだけでOK。これが他サイトとの最大の差別化。

### ステップ4: PR レビュー → マージ → デプロイ

GitHubでPRを開き、自分でレビューしてマージ。Lovable等の自動デプロイが反映を待つ。

### ステップ5: インデックスリクエスト

```bash
# 翌日以降、Playwright自動化スクリプト or 手動でGSC
python3 seo-pipeline/scripts/request_indexing.py {URL1} {URL2}
```

または手動で GSC Web UI から（1日10件上限）。

## 週次振り返り（毎週金曜30分推奨）

`seo-pipeline/briefs/` を見て：
- 今週採用したbrief（`status: approved`）の数
- 不採用にした brief の理由（パターンが見えるか）
- `archive/rejected/` に移動すべきbrief

### config.yml の調整タイミング

不採用率が高い場合、`config.yml` の `priority_categories` の weight や `avoid` を調整する。

## 月次レビュー（毎月1回30分）

`python3 seo-pipeline/scripts/fetch_daily.py --days 30` で月次サマリ生成。

KPI 確認：
- form_submit の前月比
- GSC clicks の前月比
- 新規記事のインデックス状況

`config.yml` の `goals` と照らし合わせて進捗確認。

## エスカレーション

困ったら：
- Routine が動かない → `setup-routine.md` トラブルシューティング
- briefの質が悪い → Claude Code セッションを開いて `seo-pipeline/templates/generate-prompt.md` を修正依頼
- API 認証エラー → `setup-routine.md` トラブルシューティング

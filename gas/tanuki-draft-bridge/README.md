# Tanuki Reply Copilot - Draft Bridge

Tanuki Tabi Travel 専用の Gmail Draft 作成レイヤー。ChatGPT の Tanuki Reply
Copilot が Draft Queue に書いた返信案を、正しい顧客・正しいスレッド・正しい
From で Gmail の下書きとして保存する。送信は行わない。Manabu が下書きを確認して
手動で送る。

```
Tanuki Reply Copilot → Draft Queue → Apps Script → Gmail Draft → Manabu が送信
```

## Camino Japan Travel との分離

このプロジェクトは Camino の Sheet / Drive / Label / 顧客に一切アクセスしない。
`Brand` 列が厳密に `TANUKI` の行だけを処理し、それ以外（CAMINO、空欄、UNKNOWN、
表記ゆれ）はすべて SKIPPED になる。参照するスプレッドシートは ID で固定されている。

## Apps Script プロジェクト

- 名前: Tanuki Reply Copilot - Draft Bridge
- Script ID: `1cg1ypEr7D2h_dfzxX810PT31BFiUnEC0t86tv2zjrcEfS-h-Ooo7ykUl`
- トリガー: `processTanukiDraftQueue` を1分おき

デプロイは `clasp push`。

## ファイル

| ファイル | 役割 |
|---|---|
| `Config.gs` | 定数、ブロックリスト、エラーコード、列定義 |
| `Validation.gs` | 行の可否判定（Gmail もシートも触らない純粋関数） |
| `QueueRepository.gs` | Draft Queue の読み書き |
| `GmailDraftService.gs` | エイリアス確認、Draft 作成と事後検証 |
| `Labels.gs` | `Tanuki Tabi Travel/...` ラベル付与 |
| `Main.gs` | エントリポイントとトリガー設置 |
| `Tests.gs` | 検証テストとテスト行の投入・削除 |

## 入力契約

ChatGPT 側が Draft Queue に書く値。1つでも欠けると処理されない。

| 列 | 値 |
|---|---|
| Brand | `TANUKI` |
| Gmail Message ID | 必須（返信先メッセージ） |
| Customer Email | 必須（内部アドレス不可） |
| Reply Body | 必須 |
| QA Status | `PASS` |
| Human Review | `FALSE` |
| Status | `READY_TO_DRAFT` |

`Subject` 列は任意。空なら言語に応じた顧客向け件名（"Your Tokyo tour inquiry" /
"Tu consulta sobre el tour en Tokio"）を使う。Netlify の内部件名
（`[Tanuki Inquiry] 299 | contact`）が入っていた場合も既定値に落とす。

## 安全側の設計

- 送信 API は一切呼ばない。最終アクションは Draft 作成のみ
- From が `info@tanuki-tabi-travel.com` にならなかった Draft は削除して ERROR
- Draft の実際の To を読み直し、Queue の Customer Email と違えば削除して ERROR
- `formresponses@netlify.com` と自社ドメイン宛の Draft は作らない
- LockService と重複ガードで同じ問い合わせに二重の Draft を作らない
- ログに残すのは Queue ID / Message ID / Status / エラーコード / 時刻のみ。
  返信本文と顧客本文は残さない
- Reply Body は文字列としてそのまま Draft に入れるだけで、指示として解釈しない

## 運用

```
checkTanukiAlias()                  送信エイリアスの確認
runTanukiValidationTests()          判定ロジックのテスト（副作用なし）
verifyCaminoIsolation()             参照先が Tanuki のシートであることの確認
seedTanukiDraftQueueTestRows(msgId, testEmail)  テスト行の投入
cleanupTanukiDraftQueueTestRows()   Queue ID が QA- で始まる行の削除
removeTanukiDraftBridgeTrigger()    トリガーの停止
```

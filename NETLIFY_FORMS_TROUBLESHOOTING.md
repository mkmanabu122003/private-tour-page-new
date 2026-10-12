# Netlify Forms トラブルシューティングガイド

## メールが届かない場合のチェックリスト

### 1. Netlify側の設定確認

#### ✅ フォーム通知設定
1. **Netlifyダッシュボードにログイン**
2. **サイトを選択** → **Forms** タブ
3. **Settings & Usage** をクリック
4. **Form notifications** セクションで以下を確認：
   - **Email notification** が有効になっているか
   - 通知先メールアドレスが `info@tanuki-tabi-travel.com` になっているか

#### ✅ メールアドレスの検証
Netlifyからメールアドレス検証のメールが届いているか確認：
- 受信トレイをチェック
- **スパムフォルダ**もチェック
- Netlifyから `noreply@netlify.com` のメールを探す
- 検証リンクをクリックして認証を完了

### 2. フォーム送信のテスト

#### ステップ1: フォームが認識されているか確認
1. Netlifyダッシュボード → **Forms** タブ
2. **"contact"** という名前のフォームが表示されているか確認
3. 表示されていない場合：
   - サイトを再デプロイ
   - ビルドログでエラーがないか確認

#### ステップ2: テスト送信
1. デプロイされたサイトのお問い合わせフォームにアクセス
2. すべての必須フィールドに入力：
   - 名前
   - メールアドレス
   - メッセージ
3. **Send Message** をクリック
4. 成功メッセージが表示されるか確認

#### ステップ3: 送信データの確認
1. Netlifyダッシュボード → **Forms** → **contact**
2. 送信されたデータが表示されているか確認
3. **表示される場合**: フォームは正常に動作（メール設定の問題）
4. **表示されない場合**: フォーム送信に問題あり

### 3. よくある問題と解決方法

#### 問題1: フォームが認識されない
**原因**: SPAでフォームが動的に生成されている

**解決方法**:
- ✅ `index.html`に隠しフォームを追加済み
- ✅ フォームに`data-netlify="true"`属性を追加済み
- ✅ `form-name`隠しフィールドを追加済み

#### 問題2: メール通知が届かない
**原因**:
- メールアドレスが未検証
- スパムフィルターでブロック
- Netlifyの無料プランの制限

**解決方法**:
1. **メールアドレスの検証を完了**
2. **スパムフォルダを確認**
3. **Netlify通知設定を再設定**:
   ```
   Dashboard → Forms → Settings → Form notifications
   → Add notification → Email notification
   → Email to notify: info@tanuki-tabi-travel.com
   ```

#### 問題3: フォーム送信は成功するがメールが届かない
**原因**: Netlifyの無料プランでは月100件までのフォーム送信制限

**解決方法**:
1. **Netlifyダッシュボードで送信数を確認**
2. **制限を超えている場合**: プランをアップグレード
3. **代替案**: Webhookを使用してメール送信サービス（SendGrid, Mailgunなど）と連携

### 4. 代替メール通知方法

#### オプション1: Zapier連携
1. **Zapierアカウントを作成**（無料）
2. **新しいZapを作成**:
   - Trigger: Netlify Forms → New Form Submission
   - Action: Email → Send Outbound Email
   - 送信先: info@tanuki-tabi-travel.com

#### オプション2: Netlify Functions + SendGrid
より高度な方法：
1. SendGridアカウント作成（無料枠あり）
2. Netlify Functionsでカスタムメール送信
3. APIキーを環境変数に設定

#### オプション3: Google Formsバックエンド
最もシンプルな方法：
1. Google Formsを作成
2. フォームデータをGoogle FormsのAPIに送信
3. Google Formsから自動通知メールを設定

### 5. デバッグ方法

#### ブラウザの開発者ツールで確認
1. **フォームを開く**
2. **F12キーで開発者ツールを開く**
3. **Network タブ**を開く
4. **フォームを送信**
5. **POSTリクエストを確認**:
   - Status: 200 OK なら成功
   - Form Dataに `form-name: contact` が含まれているか確認

#### Netlifyビルドログを確認
1. Netlifyダッシュボード → **Deploys**
2. 最新のデプロイをクリック
3. **Deploy log** でエラーがないか確認
4. 特に "Forms" に関するメッセージを確認

### 6. 緊急時の対応

メールが完全に機能しない場合の代替案：

1. **お問い合わせページにメールリンクを追加**
   - 既に実装済み: `mailto:info@tanuki-tabi-travel.com`

2. **電話番号を追加**（オプション）

3. **LINEやWhatsAppのリンクを追加**

### 7. 現在の実装状態

✅ **完了している設定**:
- index.htmlに隠しフォーム追加
- data-netlify="true" 属性設定
- form-name 隠しフィールド追加
- honeypot スパム対策
- サーバー側ゲート（`inquiryGate.cjs`）とreCAPTCHA v2（セクション8）
- フォーム送信コードの最適化

🔧 **次に確認すべきこと**:
1. Netlifyでメールアドレスの検証が完了しているか
2. Form notificationsが有効になっているか
3. スパムフォルダにメールが届いていないか

### 8. スパム対策（reCAPTCHA）

2026-09-16 と 2026-10-12 に SQL インジェクションスキャナーが Netlify Forms のエンドポイントへ直接 POST し、数分で 45〜90 件の送信が発生した。honeypot は「余計な欄を空のまま送る」クライアントには効かず、Akismet も通してしまった。対策は2層。

| 層 | 場所 | 止めるもの |
|---|---|---|
| サーバー側ゲート | `netlify/functions/inquiryGate.cjs` | Slack 通知・Resend 送信（Netlify Forms への保存と Netlify 標準通知メールは止まらない） |
| reCAPTCHA v2 | フォーム + Netlify の検証 | Netlify Forms への保存そのもの。枠消費も通知メールも発生しない |

#### reCAPTCHA の有効化手順（Netlify 側）

1. https://www.google.com/recaptcha/admin で **reCAPTCHA v2「私はロボットではありません」チェックボックス** を作成。ドメインに `tanuki-tabi-travel.com` と `www.tanuki-tabi-travel.com`、必要なら Netlify のプレビュードメイン（`*.netlify.app`）を登録。
2. Netlify → Site configuration → Environment variables に2つ追加:
   - `SITE_RECAPTCHA_KEY` = サイトキー。Scope は **Builds と Runtime の両方**（ビルド時にクライアントへ埋め込む）
   - `SITE_RECAPTCHA_SECRET` = シークレット。Scope は **Runtime**（Netlify がトークン検証に使う。クライアントには出ない）
3. **再デプロイする**（Trigger deploy → Clear cache and deploy site）。環境変数はビルド時に読むので、設定しただけでは反映されない。
4. 本番の `/contact` と `/es/contact` でチェックボックスが表示され、送信して `/thank-you` に遷移することを確認。

#### 仕組み

- `vite.config.ts` が `SITE_RECAPTCHA_KEY` を `import.meta.env.RECAPTCHA_SITE_KEY` として埋め込み、`index.html` の隠しフォーム2つに `data-netlify-recaptcha="true"` を付ける
- `src/components/contact/RecaptchaBox.tsx` がウィジェットを描画し、`InquiryForm` が送信時に `g-recaptcha-response` を POST に含める
- Netlify が `SITE_RECAPTCHA_SECRET` でトークンを検証し、無効なら保存しない

#### キー未設定のとき

サイトキーが無いビルドでは、ウィジェットも `data-netlify-recaptcha` 属性も出ず、フォームは従来通り動く（ローカル開発・プレビューを壊さないため）。本番で reCAPTCHA が出ていなければ、環境変数の Scope に Builds が含まれているか、設定後に再デプロイしたかを確認する。

#### 無効化したいとき

Netlify の環境変数から `SITE_RECAPTCHA_KEY` と `SITE_RECAPTCHA_SECRET` を削除して再デプロイすれば元に戻る。**キーだけ消してシークレットを残す、またはその逆**は、Netlify 側の検証とフォーム側の挙動がずれて本物の問い合わせが落ちるので避ける。

### 9. サポート連絡先

問題が解決しない場合：
- **Netlify Support**: https://answers.netlify.com/
- **Netlify Documentation**: https://docs.netlify.com/forms/setup/

## 推奨アクション

1. ✅ まずスパムフォルダをチェック
2. ✅ Netlifyダッシュボードでフォーム送信データを確認
3. ✅ メールアドレスの検証状態を確認
4. ❌ まだ解決しない場合は代替方法（Zapier）を検討

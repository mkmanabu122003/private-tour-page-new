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
- フォーム送信コードの最適化

🔧 **次に確認すべきこと**:
1. Netlifyでメールアドレスの検証が完了しているか
2. Form notificationsが有効になっているか
3. スパムフォルダにメールが届いていないか

### 8. サポート連絡先

問題が解決しない場合：
- **Netlify Support**: https://answers.netlify.com/
- **Netlify Documentation**: https://docs.netlify.com/forms/setup/

## 推奨アクション

1. ✅ まずスパムフォルダをチェック
2. ✅ Netlifyダッシュボードでフォーム送信データを確認
3. ✅ メールアドレスの検証状態を確認
4. ❌ まだ解決しない場合は代替方法（Zapier）を検討

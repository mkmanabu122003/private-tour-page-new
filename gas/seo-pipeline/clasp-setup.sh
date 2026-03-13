#!/bin/bash
# ===========================================
# clasp セットアップスクリプト
# Claude Desktop のターミナルで実行してください
# ===========================================

set -e

echo "=== SEO Pipeline - clasp セットアップ ==="
echo ""

# 1. clasp がインストールされているか確認
if ! command -v clasp &> /dev/null; then
    echo "[1/5] clasp をインストール中..."
    npm install -g @google/clasp
else
    echo "[1/5] clasp は既にインストール済み"
fi

# 2. ログイン（ブラウザが開きます）
echo ""
echo "[2/5] Google認証（ブラウザが開きます）..."
echo "  ※ 既にログイン済みの場合はスキップされます"
clasp login --status 2>/dev/null || clasp login

# 3. スプレッドシート連携のGASプロジェクトを作成
echo ""
echo "[3/5] スプレッドシート + Apps Scriptプロジェクトを作成中..."
cd "$(dirname "$0")"

if [ -f ".clasp.json" ]; then
    echo "  .clasp.json が既に存在します。既存プロジェクトを使用します。"
else
    clasp create --type sheets --title "SEO Pipeline - Tanuki Tabi Travel" --rootDir .
    echo "  作成完了！"
fi

# 4. ファイルをプッシュ
echo ""
echo "[4/5] GASファイルをプッシュ中..."
clasp push --force

# 5. 完了
echo ""
echo "[5/5] セットアップ完了！"
echo ""
echo "=== 次のステップ ==="
echo "1. 以下のコマンドでスプレッドシートを開きます："
echo "   clasp open --webapp"
echo "   または clasp open"
echo ""
echo "2. Apps Scriptエディタで dailyReport を実行して初回認証"
echo "3. Configシートに値を入力（GA4_PROPERTY_ID, ANTHROPIC_API_KEY 等）"
echo "4. 詳細は docs/seo-pipeline-setup.md の Step 4 以降を参照"

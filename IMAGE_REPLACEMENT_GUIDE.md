# 画像差し替えガイド

## 必要な画像リスト

### 浅草（Asakusa）
- **hero-asakusa.jpg** (現在: 239KB)
  - 用途: トップページのヒーロー画像
  - 推奨サイズ: 1920x1080px (横長)
  - 推奨被写体: 雷門、仲見世通り、浅草寺の広角写真

- **tour-asakusa.jpg** (現在: 88KB)
  - 用途: 浅草ツアーカード
  - 推奨サイズ: 800x600px以上 (4:3または正方形)
  - 推奨被写体: 雷門のクローズアップ、浅草寺本堂

### 谷中（Yanaka）
- **tour-yanaka.jpg** (現在: 103KB)
  - 用途: 谷中ツアーカード、皇居ツアーカード
  - 推奨サイズ: 800x600px以上
  - 推奨被写体: 谷中銀座、古い街並み、寺社

### 上野・その他
- **tour-ueno.jpg** (現在: 150KB)
  - 用途: 渋谷・原宿ツアー、築地・銀座ツアー、カスタムツアー
  - 推奨サイズ: 800x600px以上
  - 推奨被写体: 渋谷交差点、原宿、築地市場、東京の街並み

### ガイドの写真
- **guide-portrait.jpg** (現在: 49KB)
  - 用途: About ページのプロフィール写真
  - 推奨サイズ: 600x800px (縦長)
  - 推奨被写体: ガイドの顔写真

## 画像差し替え方法

### 方法1: GitHubから直接アップロード（推奨）

1. **GitHub にアクセス**
   - https://github.com/mkmanabu122003/private-tour-page-new
   - `src/assets/` フォルダを開く

2. **画像をアップロード**
   - 「Add file」→「Upload files」
   - Pexelsからダウンロードした画像をドラッグ&ドロップ
   - 既存のファイル名と同じにする（例：`tour-asakusa.jpg`）

3. **自動デプロイ**
   - コミットすると、Netlifyが自動的に再デプロイ
   - 2-3分で新しい画像がサイトに反映されます

### 方法2: ローカルで差し替え

```bash
# 画像を src/assets/ に配置
cp /path/to/your/image.jpg src/assets/tour-asakusa.jpg

# コミット
git add src/assets/
git commit -m "Update tour images with real photos"
git push
```

## 推奨画像ソース

### Pexels（無料・商用利用可）
- 浅草: https://www.pexels.com/search/asakusa/
- 浅草寺: https://www.pexels.com/search/sensoji%20temple/
- 渋谷: https://www.pexels.com/search/shibuya/
- 築地: https://www.pexels.com/search/tsukiji/
- 皇居: https://www.pexels.com/search/imperial%20palace%20tokyo/

### Unsplash（無料・商用利用可）
- https://unsplash.com/s/photos/asakusa
- https://unsplash.com/s/photos/tokyo

### 注意事項
- ライセンスを確認してください（Pexels, Unsplashは基本的に商用利用可）
- 写真家のクレジット表記が推奨される場合があります
- ダウンロード時は「Large」または「Original」サイズを選択

## ファイル名一覧

現在使用中のファイル:
- `src/assets/hero-asakusa.jpg` - トップページヒーロー
- `src/assets/tour-asakusa.jpg` - 浅草ツアーカード
- `src/assets/tour-yanaka.jpg` - 谷中ツアーカード
- `src/assets/tour-ueno.jpg` - その他ツアーカード
- `src/assets/guide-portrait.jpg` - ガイド写真

これらのファイルを同じ名前で上書きするだけで、サイト全体の画像が更新されます。

# OpenStreetMap Japan サイト

[openstreetmap.jp](https://openstreetmap.jp) のリプレイス。Astro + React + Tailwind v4 + daisyUI v5 で構築された静的サイトで、GitHub Pages へデプロイされます。

公開サイト: https://openstreetmap-japan.github.io/

## 必要環境

- Node.js 20.10+ または 22+ (推奨: 24 系)
- npm

## 開発コマンド

```sh
npm install            # 依存をインストール
npm run dev            # 開発サーバ (http://localhost:4321/)
npm run build          # ./dist/ に静的ビルド
npm run preview        # build 結果をローカルプレビュー
```

`main` への push で GitHub Actions が `npm run build` を実行し、`./dist/` を GitHub Pages に公開します (`.github/workflows/`)。

## 記事の書き方

記事は Markdown ファイルで `src/content/` 配下に置きます。コレクションは2種類:

| 種類 | 置き場所 | 用途 | 公開 URL |
| --- | --- | --- | --- |
| **events** (イベント) | `src/content/events/<id>.md` | マッピングパーティ、勉強会、お知らせなど日付に紐づくもの | `/events/<id>/` |
| **pages** (ページ) | `src/content/pages/<slug>.md` | ガイド、規約、固定ページ | `/node/<legacy_node_id>/` |

### 1. イベントを追加する

`src/content/events/` に新規ファイルを作ります。ファイル名 = URL の ID。例: `1044.md` → `/events/1044/`。番号は既存の最大値 + 1 が無難です。

```yaml
---
title: "マッピングパーティー in 〇〇"
start: "2026-06-15T13:00:00"           # 必須 (ISO 8601 / JST)
end: "2026-06-15T17:00:00"             # 任意
venue_text: "〇〇市民会館 3F"           # 任意 (一覧/詳細で表示)
organizer: "OpenStreetMap Japan"      # 任意
project: "MappingParty"               # 任意 (タクソノミ相当)

# 地図 (/events/map/) に表示するなら緯度経度を入れる
latitude: 35.681236
longitude: 139.767125

# アイキャッチ (一覧サムネ + 詳細ヘッダ) — public/ からの絶対パス
# 新規追加画像は public/images/current/ に置いて以下のように参照する
hero_image: "/images/current/your-image.png"

# 添付や元URL (任意)
attachments:
  - "/images/current/your-image.png"
source_url: "https://example.com/event-page"

# 公開しない場合は true
draft: false
---

ここから本文 (Markdown / 一部 HTML 可)。

- 箇条書きは `<ul><li>...</li></ul>` または Markdown の `- `
- 1行ごとの改行は `<br>` 相当に展開されます
- 行頭の半角スペースはインデントとして保持されます
- `https://...` 形式の素の URL は自動でリンクされます
```

### 2. 固定ページ (ガイド等) を追加する

`src/content/pages/` に新規ファイルを作ります。

```yaml
---
title: "ページタイトル"
slug: "my-page"                # ファイル名と合わせる (任意)
legacy_node_id: "1234"        # 旧 Drupal /node/<id> 互換 URL を付ける場合
date: "2026-06-15T10:00:00+09:00"
hero_image: "/images/current/cover.png"  # 任意 (新規画像は current/ 配下に置く)
draft: false
---

本文 (Markdown / HTML)。
```

`legacy_node_id` を指定したページは `/node/<legacy_node_id>/` で配信されます。サイドバーのガイドリンクなど内部リンクもこの URL 形式で書いてください (例: `/node/762/`)。

### 3. 画像

| ディレクトリ | 用途 | 参照パス |
| --- | --- | --- |
| `public/images/current/` | **新規追加する画像はこちら** | `/images/current/<file>` |
| `public/images/legacy/` | openstreetmap.jp から移行した既存画像 (基本さわらない) | `/images/legacy/<file>` |

新しいイベントやページに画像を添える場合は `public/images/current/` 配下に置いて、フロントマターの `hero_image` などから `/images/current/<file>` で参照してください。

サイズが大きい場合は事前に圧縮しておくのが望ましいです。

### 4. Markdown の挙動メモ

Drupal 由来の記法を可能な範囲で再現するため、いくつかカスタムが入っています。

- 段落内の単一改行 → `<br>` ([`remark-breaks`](https://github.com/remarkjs/remark-breaks))
- 段落継続行の行頭半角スペース → 非改行スペースで保持 (`src/lib/remark-preserve-indent.mjs`)
- リスト・見出し・段落のスタイリング → `@tailwindcss/typography` (`prose` クラスをテンプレ側で適用済み)
- `https://...` の自動リンク → GFM autolink

`<ul>`, `<li>`, `<a href>`, `<br>` などの素の HTML はそのまま使えます。

### 5. ローカル確認

```sh
npm run dev
```

- 一覧: http://localhost:4321/
- イベント詳細: http://localhost:4321/events/<id>/
- ガイド: http://localhost:4321/node/<legacy_node_id>/

依存を入れ替えた直後やマップが読めない場合は Vite キャッシュを消す:

```sh
rm -rf node_modules/.vite
```

コンテンツを大量に編集してプラグイン挙動を再評価したい場合は Astro のコンテンツキャッシュも消してください:

```sh
rm -rf .astro node_modules/.astro
```

### 6. ビルドで弾かれるとき

`npm run build` で型エラー、もしくは Frontmatter のスキーマ違反が出る場合は `src/content.config.ts` を見て必須フィールド (`title`, events なら `start`) を満たしているか確認してください。`source_url` は **URL 形式** である必要があります。

## 主要な構成

```
src/
├── assets/app.css            # Tailwind / daisyUI / typography のエントリ
├── components/EventMap.tsx   # MapLibre のイベント地図 (React)
├── content/
│   ├── events/*.md           # イベント
│   ├── pages/*.md            # 固定ページ
│   └── pois/                 # 予約 (POI 用、未使用)
├── content.config.ts         # コレクションのスキーマ定義
├── layouts/SiteLayout.astro  # 共通ヘッダ・サイドバー・フッタ
├── lib/remark-preserve-indent.mjs  # 行頭インデント保持の独自 remark プラグイン
└── pages/
    ├── index.astro           # トップ
    ├── events/[id].astro     # イベント詳細
    ├── events/index.astro    # イベント一覧 (ページネーション)
    ├── events/map.astro      # イベント地図
    ├── node/[id].astro       # /node/<legacy_node_id>/ (ページ表示 / イベント redirect)
    └── 404.astro
```

## ライセンス

サイトのコンテンツ (イベント・ガイド) のライセンスは [openstreetmap.jp](https://openstreetmap.jp) からの引き継ぎに準じます。

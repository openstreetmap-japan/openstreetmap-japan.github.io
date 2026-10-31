ツールの登録方法

このフォルダに1ツールにつき1つのMarkdownファイル（例: tool-name.md）を追加します。
/tools/ に目的別で表示し、同じ分類の中では名前順に並べます。
ツールの公式サイトへのリンクと、何に使えるかを短く紹介してください。

---
title: "ツール名"
url: "https://example.com/"
summary: "何ができて、どんなときに役立つツールなのかを紹介します。"
category: "地図を編集する"
platforms:
  - "ブラウザ"
draft: false
---

必須: title、url（http/https）、summary
任意: category、platforms（文字列の配列）、draft
不明な任意項目は省略できます。category を省略すると「その他」になります。
category の選択肢:
  地図を見る / 地図を編集する / 現地調査・記録 /
  データを調べる・取り出す / データを活用する / その他
draft: true のツールは一覧に表示しません。
Markdown本文は表示しないので、紹介文は summary に記載してください。

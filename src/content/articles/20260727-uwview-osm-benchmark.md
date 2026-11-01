---
title: "51GB・8.9億行を開いて、理論上どこまで開けるのか計算してみた — 実データと「約920京行」の話"
url: "https://zenn.dev/amru195704/articles/e41804fb551bc6"
summary: "大容量テキストビューア「UwView」のベンチマーク記事。GeofabrikのOSM日本データ(2.3GBのPBF)をosmium-toolでXMLに変換して51GB・約8.9億行のファイルを作成し、UwViewで開きました。総行数がwc -lと完全一致し、末尾ジャンプは0.006ms、常駐メモリは約60MBのほか、64bit整数型の上限(約920京行)やスパース索引の上限(既定で約5,500億行)から理論上の限界を計算し、実用上は行数よりファイル容量が先に効くという結論を導いています。OSM抽出データなど巨大データを取り扱いたい人に推奨です。"
added_date: "2026-11-01"
published_date: "2026-07-27"
author: "amru195704"
site: "Zenn"
category: "データ活用"
draft: false
---

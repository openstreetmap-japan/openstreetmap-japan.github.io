---
title: "258.68GB・45億行を1ファイルで開く — アメリカ全土のOpenStreetMapをXML展開して実測した"
url: "https://zenn.dev/amru195704/articles/3ee4876530445a"
summary: "OSMのアメリカ全土データ(Geofabrikの約11GBのPBF)をosmium-toolでXML展開して258.68GB・45億行の単一ファイルを作成し、大容量テキストビューア「UwView Pro」で実測したベンチマーク記事。索引が10%しか進んでいない段階でも閲覧・スクロールが可能だったこと、45億行が32bit整数の上限を突き破り64bit整数の必要性を実証したこと、全文検索はクエリによらず約34秒で済んだこと、元ファイルの約11%のサイドカーにより2回目以降の起動が一瞬になったことなどを報告しています。巨大データを扱いたい人に推奨です。"
added_date: "2026-11-01"
published_date: "2026-07-31"
author: "amru195704"
site: "Zenn"
category: "データ活用"
draft: false
---

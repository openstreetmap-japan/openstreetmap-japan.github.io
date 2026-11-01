---
title: "Nominatimが広島平和記念資料館を見つけられない理由とその解決方法"
url: "https://www.clear-code.com/blog/2026/8/19/nominatim-with-pgroonga-ja.html"
summary: "FOSS4G広島2026の発表台本として、OpenStreetMapで「広島平和記念資料館」と検索しても0件になる理由と解決方法を説明しています。問題はNominatimのトークン検索の仕組みで、CJK文字が中国語の読みに変換されて検索精度が落ちることと、名前と住所への振り分け最適化が長い名称で裏目に出ることの2つです。解決策はPostgreSQLの全文検索拡張PGroongaの導入で、3ファイルの数行の変更だけで部分一致検索が効き、ヒット率の上昇を確認しています。Nominatimを運用している方、地図検索や全文検索の開発に興味のある人に推奨です。"
added_date: "2026-11-01"
published_date: "2026-08-19"
author: "阿部智晃"
site: "Clear Codeブログ"
category: "データ活用"
draft: false
---

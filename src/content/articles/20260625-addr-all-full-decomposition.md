---
title: "addr:all, full の解体"
url: "https://www.openstreetmap.org/user/gc27/diary/408938"
summary: "非標準の住所タグ addr:all と addr:full を addr:* の階層タグに大規模に「解体」した作業の記録。対象は2017年にインポートされた会津若松の公共系施設データ（addr:all、speciality）と、2024年4月の長野県佐久市Plateauインポートで全市域の家に付いた addr:full であり、OverpassTurboで抽出→サクラエディタで正規表現による置換→Level0でコミットするワークフローが詳述されています。postal_code→addr:postcode、speciality→healthcare:speciality、name+branchへの分離など作業後のタグ構成のマッピング表も示されており、インポートデータのクリーンアップや住所タグの正規化に取り組む人に推奨。"
added_date: "2026-11-01"
published_date: "2026-06-25"
author: "gc27"
site: "OpenStreetMap Diary"
category: "地図の編集"
draft: false
---

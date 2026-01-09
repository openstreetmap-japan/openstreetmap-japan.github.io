---
title: "osm.jpタイルサーバの切り替えについて"
slug: "node-935"
legacy_node_id: "935"
hero_image: "/images/legacy/256px-Openstreetmap_logo.svg_.png"
attachments:
  - "/images/legacy/256px-Openstreetmap_logo.svg_.png"
source_url: "https://openstreetmap.jp/node/935"
date: "2020-11-20T10:02:35+09:00"
---
OpenStreetMap Foundation Japanよりご連絡です。

これまでosm.jpで配信しておりました地図タイルサーバですが、サーバの老朽化等に伴う不具合により、配信が停止しておりました。

そのため、開発中であった新タイルサーバへの切り替えを行い、現在、問題なく配信が再開しております。
本切り替え作業に伴い、タイルサーバへのアクセスURLに関する変更はありません。

これまでと同様、 https://tile.openstreetmap.jp/{z}/{x}/{y}.png の形式でのアクセスが可能です。
ご不便をおかけし、たいへん申し訳ありませんでした。

本件に付きまして、接続に関する不具合等ございましたら、 info@osmf.jp までご連絡ください。
また、今後、地図タイル画像配信においては、http（平文）でのアクセスを廃止し、暗号化されたhttpsでのアクセスのみを許可するよう、設定を変更する予定です。

httpでのアクセスについては、今後予告なく、遮断される可能性があります。
httpでのアクセスを設定されているかたにつきましては、早期に https に切り替えをくださいますようお願いいたします。

よろしくお願いします。

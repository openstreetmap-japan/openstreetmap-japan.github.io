---
title: "OSMの編集の仕方 (JOSM 編)"
slug: "node-23"
legacy_node_id: "23"
source_url: "https://openstreetmap.jp/node/23"
date: "2011-08-01T18:17:54+09:00"
---
OSM のデータ編集には Potlatch 以外に JOSM もあります。
 Potlatch はインストールしないですむ代わりにデータ編集をする人が多くなると動作が重くなったりすることがあります。
JOSM はデータをいったんダウンロードして、自分のパソコンの中で編集するので動作は自分のパソコンの能力次第ということで、わりと軽快に動きます。
同時に複数の人が同じ地域を編集すると矛盾が発生したり、変換作業の衝突が起こることがあります。
できれば他の人が作業していないエリアを選ぶほうがいいでしょう。

JOSM の使い方は下の URL をご覧ください。
http://wiki.openstreetmap.org/wiki/JA:JOSM

JOSM でも使える情報を Potlatch のコンテンツから転載します。
－－－－－－－－－－－－－ここから
ノード(点)やウェイ(線)、エリア(面)をマウスでポチポチとクリックしながら描き(点を打つ場合はダブルクリック)、その属性をtagから選ぶか、「Advanced」から自力でタグを入力することも出来ます。

タグの一覧は
http://wiki.openstreetmap.org/wiki/JA:Map_Features
こちらをご参照下さい。
また、日本独自のルールもありますので、
http://wiki.openstreetmap.org/wiki/Japan_tagging
こちらのページも必見です。

また、ikiyaさんが作ってくださった入門ガイド
http://openstreetmap.blogspot.com/2011/01/openstreetmapwo.html
も分かりやすくなっています。
こちらもご参照下さい。
－－－－－－－－－－－－－ここまで



JOSM を使い始めるまでの基本的手順は以下の通りです。

1. http://wiki.openstreetmap.org/wiki/JA:JOSM から josm-tested.jar をダウンロードして、ダウンロードしたファイルを実行する
2. 編集したいエリアを www.openstreetmap.org で探したら、地図右下の「パーマリンク」をクリックして URL をコピー (たとえば http://www.openstreetmap.org/?lat=37.6335&lon=141.0089&zoom=14&layers=M )
3. 上の 1 で実行した JOSM のファイルメニューで「 OSM からダウンロード」を選択
4. 境界囲みタブをクリックし www.openstreetmap.org の URL の欄に貼り付ける (たとえば http://www.openstreetmap.org/?lat=37.6335&lon=141.0089&zoom=14&layers=M )
5. ダウンロードをクリックする
6. メニューバーから画像を選んで Bing Sat をクリックする
7. 道路等判別がついたら、編集する
8. 編集を終えたら JOSM のファイルメニューで「データをアップロード」を選択する (必要に応じてアカウントとパスワードの入力をする)

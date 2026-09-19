---
title: "OSM利用入門"
slug: "node-762"
legacy_node_id: "762"
source_url: "https://openstreetmap.jp/node/762"
date: "2020-08-06T14:44:00+09:00"
---
OpenStreetMap (OSM) は、地理空間情報の巨大なデータベースであり、単なる地図表現だけではありません。
ここでは、そんなOSMの代表的な使い方を紹介します。

<h2>1. 地図として使う</h2>

もっとも一般的なOSMの使い方として、データを利用して作成された地図を絵図として利用することがあげられます。
このサイトの "地図を表示" や、openstreetmap.orgの地図などが代表的な例です。
サイトを表示させた状態で、ドラッグしたりホイールを回したりすることで、表示位置の変更や拡大縮小を行うことが可能です。

また、その他、世界中のひとたちが、自分たちの思い思いの表現を行っています。

それぞれの地図表現は、Creative Commonsなど、著作権に基づいたライセンスによって配布されています。
例えば、このサイトの地図画像や openstreetmap.orgの地図画像は、CC BY-SA 2.0ライセンスに基づいて配布されています。

osm.orgの利用に関しては、osm.orgの著作権表示ページも参照ください。

<a href="http://www.openstreetmap.org/copyright">http://www.openstreetmap.org/copyright</a>

<h3>1.1 地図を他のソフトウェアから利用する</h3>
OSMを使った地図をウェブサイトに埋め込んだり、QGISなどのデスクトップGISソフトウェアで表示させたりすることも可能です。

ウェブサイトで表示を行うには、一般的に LeafletやOpenLayersなどのJavaScriptライブラリが利用されます。
利用しているCMSによっては、これらのソフトウェアがプラグインとして公開されている場合がありますので、利用しているCMSのマニュアルを参照してください。

<ul>
<li><a href="https://wiki.openstreetmap.org/wiki/Tiles">タイル一覧</a></li>
</ul>

<h3>1.2 地図を印刷して使う</h3>
OSMを利用した地図を印刷して使うことは、まったく問題がありません。ぜひ、様々なサイズ、様々な用途でお使いください。
もちろん、多くの場合、商用利用も問題ありません。

また、その際には、印刷物や商品のどこか、あるいは配布元サイトなどのなかに、OpenStreetMapのデータを利用していることを記載することを忘れないでください。
（注: 作成された地図画像によっては、商用利用を禁止している場合があります。詳しくはそれぞれの地図画像の配布者による著作権表示をチェックしてください）

詳しくは、OSMの<a href="http://www.openstreetmap.org/copyright">著作権解説ページ</a>を参照してください。

<h2>2. データそのものを利用する</h2>
OSMのデータは、利用の目的に制限がありません。
地図画像の生成だけではなく、経路探索やジオコーディング、芸術的な利用まで、多様な目的で利用することが可能です。

全世界のデータはPlanetサイトから配布されています。
しかし、このデータは非常に大きいため、いくつかのサイトから、地域ごとに分割したデータが配布されています。

<ul>
<li>■代表的なサイト</li>
<ul>
<li>Geofabrik</li>
<li>BBBike</li>
</ul>
</ul>

また、ダンプデータだけではなく、更新差分もAPIを通じて配布されています。
詳細については、OSM wiki <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Augmented_Diffs">"Overpass API/Augmented Diffs"</a> を参照してください。

<h3>2.1 ODbLライセンス</h3>
OSMのデータは、それ自体が<a href="http://opendatacommons.org/licenses/odbl/1.0/">ODbL (Open Database License)</a> という、自由なライセンスのもとで配布されています。
ODbLライセンスでは、以下の条件に従う限り、目的の制限なく共有、利用、変更が可能です。

<ul>
<li>・帰属表示（Attirbute）</li>
<li>・継承（Share-Alike）</li>
<li>・オープンの維持（Keep open）</li>
</ul>

ODbLライセンスについては、OKFJによる以下の記事も参照してください。

<a href="http://okfn.jp/2012/10/29/opendata_license09/">http://okfn.jp/2012/10/29/opendata_license09/</a>

<h3>2.2 コミュニティ・ガイドライン</h3>
OSMのデータは様々な用途で利用されるため、ODbLの定める条件に合致するかどうか、個別には判断が難しい場合が多々あります。

そうした要望に対応するため、英国OpenStreetMap財団では、コミュニティ・ガイドラインを定めています。

詳しくは、以下のサイトを参照してください。

<a href="https://wiki.osmfoundation.org/wiki/License/Community_Guidelines">https://wiki.osmfoundation.org/wiki/License/Community_Guidelines</a>

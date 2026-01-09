---
title: "megumeruさんの初心者でもできるOpenStreetMap"
slug: "crisis/node/18"
legacy_node_id: "8"
source_url: "https://openstreetmap.jp/node/8"
date: "2011-08-01T18:17:54+09:00"
---
megumeruです。完全初心者のわたしが半日悪戦苦闘しながら
学んだことをまとめます。お役に立つといいな。

<strong>始める前に</strong>
<ul>
<li>
まず焦らずに下記のURLに目を通してください。
http://wiki.openstreetmap.org/wiki/JA:FAQ
上記の内容で、最低限<strong>「なぜOpenStreetMapが必要か?」</strong>は
目を通し、使って良いデータ等の認識を持ってください。
</li>
<li>
現時点でやるべきことは基礎資料となるBingその他の衛星写真のトレースです。
被害後のMap作成はまだ始まっていません。
現地の救援活動や支援の際に役立つベースマップを作るのが今の最優先課題です。
</li>
<li>
ベースマップが出来ていると、現在進行中の被害後の空撮や衛星写真との比較ができるようになります。なので位置を特定する目印となる物を中心に、入れていきましょう。（12日15:53現在）
</li>
</ul>

<strong>最初にやること</strong>
<ol>
<li>
OSMの編集には
http://www.openstreetmap.org
のアカウントを作成する必要があります。そのための登録を行います。
</li>
<li>
登録のための
https://www.openstreetmap.org/user/new
を開きます。
</li>
<li>
必要な情報を入力した後「続行」を押すと、openstreetmap.orgからメールが届きますので、そのメールに記載されたURLをクリックして、アカウント登録を確定させてください。その後はosm.orgにログインされた状態になります。
</li>
<li>
この際、メールに登録確認の為のリンクがあるのでクリックします。
</li>
<li>
ログインのために
https://www.openstreetmap.org/login
を開きます。
先ほど入力したログイン情報を入力します。
</li>
<li>
一度に広い範囲を読み込むとサーバに負荷がかかりますので、編集したい場所をなるべくズームアップした状態で編集作業に移ってください。
</li>
<li>
<strong>編集にカーソルを当てます。これでどの方法で編集を行うのかを選択します。</strong>
</li>
<li>
<strong>Edit with Potlatch 2 (in-browser editor)を選びます。</strong>
</li>
<li>
そうするとPotlatch 2という読み込み画面がでます。
読み込まれたら編集準備は完了です。
</li>
</ol>

<strong>
ベースマップ（航空写真／衛星写真）を設定しよう
</strong>
<ol>
<li>
上にあるBackgroundを押しましょう。この作業で編集の元となる航空写真/衛星写真を選択します。
</li>
<li>
BackGroundタブの中からBingを選びます
</li>
<li>
お好みでタブの下の方のDimのチェックを外し、Sharpenにチェックを入れます
</li>
<li>
上記設定をすると、下地にはっきりとした写真がでます。これをなぞりましょう。
</li>
</ol>

<strong>
編集しましょう
</strong>
基本的な操作は以下です。
<ul>
<li>
新規に道などを追加したい場合は追加したい場所をクリックします。そのまま線(OSMの用語ではウェイ(Way)と言います)が引けます。
</li>
<li>
面情報の場合はそのまま線を引きつつ、円を描くように囲めめば面(OSMの用語ではエリア(Area)と言います)になります。必ず線が閉じたか確認して下さい。
</li>
<li>
点(OSMの用語ではノード(Node)と言います)情報はダブルクリックで確定します。
</li>
<li>
移動はドラッグでできます。
</li>
<li>
間違って何かしても、一旦閲覧を選んでPotlatch2から離れ、編集からもう一度Potlatch2を起動し直せば大丈夫です。Saveしない限り変更(アップロード)はされません。
</li>
</ul>

<strong>
編集できたらどうしたら？
</strong>
<ol>
<li>
お疲れさまです。左に「No TagSet」という表示が出ているかと思います。その部分の上の方に「unknown」と出ているかと思います。これを押しましょう。
</li>
<li>
押すとたくさん出てきたかと思います。
これは今入力した線や面が何を意味するのかということを入れるための画面です。
</li>
<li>
選ぶ際には下記を参考にしてください。
http://openstreetmap.jp/drupal6/node/13
からの抜き書きです。
　
　（引用）
タグの一覧は
http://wiki.openstreetmap.org/wiki/JA:Map_Features
こちらをご参照下さい。
また、日本独自のルールもありますので、
http://wiki.openstreetmap.org/wiki/Japan_tagging
こちらのページも必見です。
　（引用終わり）

ここを見ましょう。これで何を意味するかの見当がつきます。
</li>
<li>
Nameというのは今入力したものの名前です。
空中写真のみを参照して、そのものの名前を知らない場合は、nameタグは空白で問題ありません。
</li>
<li>
上にMiscというタブがあります。これをクリックします。
すると、sourceという入力項目があります。
今回は「Bing」を参考に入力したので「Bing」と入力します。
その際、
http://mvexel.dev.openstreetmap.org/bing/
を参考にし、作業中のレベルまで拡大して表示された年月「Bing, 2007-04」のように入力しましょう。
</li>
<li>
表示が　
<em>
Oct/2008-Nov/2008
</em>
の場合「Bing,2008-10」と入力しましょう。
</li>
<li>
右上にSaveというボタンがあります。これを押しましょう。
</li>
<li>
コメントを求められます。アップロード前の「コメント」は何を編集したのかを示すコメントです。日本語でもいいので、何を編集したのか簡潔に書きましょう。チェンジセットに表示されます。入力したら、Saveしましょう。
</li>
<li>
ここで入力したコメントは、例えば
http://www.openstreetmap.org/browse/changeset/7522313 
こちらの「comment=」のように表示されます。
</li>
</ol>

以上が一連の流れです。

<strong>
他の人と編集かぶらないの？
</strong>
<ul>
<li>
LiveViewerというツールがあります。
このツールは他の方が編集中かどうかの確認ができるものです。
http://wiki.openstreetmap.org/wiki/LiveMapViewer
から一番上のツールをDLします。Java必須。
</li>
<li>
DLしたjarファイルをダブルクリックで起動します。
</li>
<li>
このツールの地図上でで光っているところは他の方が編集してます。
他を担当しましょう。
</li>
<li>
※Webブラウザで表示できるページもtwitterID:orochon さんが作成してくださいました。
http://sandbox.clapps.net/osm
赤->bingの詳細写真範囲、青->最近の更新 です。
</li>
</ul>

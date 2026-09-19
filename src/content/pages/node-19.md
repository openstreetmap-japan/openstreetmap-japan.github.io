---
title: "OSMのIRCチャット#osm-ja の2011-03-11-21:17から2011-03-12-16:41(日本時間)までのログ"
slug: "node-19"
legacy_node_id: "19"
source_url: "https://openstreetmap.jp/node/19"
date: "2011-08-01T18:17:54+09:00"
---
※2011年3月12日16時41分(日本時間)以降のログについては以下のWebページをご参照下さい。リアルタイムでログを取得していますので、適宜リロードしてください。
http://openstreetmap.jp/irclog/
※上記サイトで2011年03月12日23時14分(日本時間)から2011年03月13日9時35分(日本時間)の間で取得できていないログがありましたので、その分だけ以下に追加します。時刻情報が保存されていません、申し訳ございません。

2011-03-12-23:14
＜tosihisa＞ 今，メールしました＞hal_sk さん
 Ushahidi は PHP5 なんで，PHP5 → zlib のどこかで苦しいところがあるのかな．
＜hal_sk＞ 確認します＞toshiさん
＜magepa＞ PHPのzipは内包なので、コンパイル時にいれてないとしんどいです
＜tosihisa＞ なるほど．．．
＜-- mkl has quit (Quit: Leaving.)
＜magepa＞ PECLで入るんじゃないかなあ。。バージョンわからんけど
 コンパイルできない環境なのかな..
＜-- bucchi has quit (Quit: http://www.mibbit.com ajax IRC Client)
＜caesium＞ 東北大学で安否リスト作成という情報を見つけたが、ひらいたらGoogleスプラッシュリストで数百人の本名が入ってる、、、流していいのだろうか
＜hal_sk＞ 追加しました！＞ tosihisaさん
--＞ muko (~muko@ntt7-ppp45.tokyo.sannet.ne.jp) has joined #osm-ja
＜-- osmj-log has quit (Ping timeout: 480 seconds)
＜tosihisa＞ 入れました！ toshihisa@osmserver:~$
＜hal_sk＞ 旧DBから突っ込んでいいですかね
＜tosihisa＞ 理由分かりました！
＜hal_sk＞ お。入れた。良かった
＜-- megumeru has quit (Quit: http://www.mibbit.com ajax IRC Client)
＜tosihisa＞ "toshihisa" だったのですね．普段は "tosihisa" なので１文字少ないのです．
 大変失礼しました．８文字アカウントの名残で混乱させました．ご勘弁下さい．
＜tosseto＞ twitterのフィルタリング、作業してたけど、DB移行かな？
＜swima＞ 陸前高田市は市街地のほとんど、5000世帯が水没とのこと (NHK)
＜tosihisa＞ いや，移行はまだかと．．．
＜hal_sk＞ ああ、そういう理由ですか。。。大変失礼しました
--＞ mohri (796a10d0@ircip4.mibbit.com) has joined #osm-ja
＜hal_sk＞ で、どうしましょうか
＜tosihisa＞ sate
 さて．．．どうもっていこうかな．
 まずは現在の sinsai.info に告知が先かな．
 告知→告知文
＜hal_sk＞ あ、ホーム ni,README
 というのがあって、その中に色々書いておきました
＜tosihisa＞ あ，
 osmserver は，squeeze ？
 ありがとうございます＞README
 ええっと．．．
 まず，合意が必要なのは，現 sinsai.info を維持するか止めるかです．
 あ，これは止めないで良かったんだ＞すみません集中力が．．．
 関さん，http://78.47.235.220/ushahidi/ で見られるようにできます？
＜karida＞ sorry ... just came back online
 anything I can help with the server?
＜tosihisa＞ まず，http://78.47.235.220/ushahidi/ で見られるようにして，必要なアカウントの作成や，準備ができたらなと．．．
＜karida＞ somehow there is a loop
＜tosseto＞ 関東、緊急地震速報注意
＜karida＞ hal_sk: shall I make some VirtualHost file?
＜hal_sk＞ karida: I made it at /etc/apache2/sites-enabled/ushahidi  
＜tosihisa＞ 多分，/etc/apache2/sites-enabled/ushahidi にある，ServerName sinsai.info を外せば良いような．．．
＜karida＞ I saw ... but a lot of stuff inside there
 is that all needed?
＜hal_sk＞ そうですね。
＜karida＞ I can make a very simple one as in osm.jp
＜hal_sk＞ こちらでやります
＜karida＞ OK
＜tosihisa＞ お願いします m(_ _)m
 http://osmemo.wizu.jp/reports/view/167 本当に使われている．
＜hal_sk＞ ただ、IP アドレスだと、あとで EC2 に移したときに問題になりますね
 なにかドメイン使えませんか
＜magepa＞ sinsai.jpだめなの
＜tosihisa＞ や，ギリギリまでは，身内というか，公開はなしで進めませんか？
＜magepa＞ ？
＜tosihisa＞ アカウント作成→基本的な設定の確認→簡単でも動作確認→sinsai.info を切り替える．
＜hal_sk＞ はい。新しくサブドメインとか作ればいいと思うんですけど
＜tosihisa＞ と言う段取りでいかがでしょう．．．
＜hal_sk＞ 公開しないなら、hostsでの運用では駄目でしょうか
＜tosihisa＞ ええっと
 全員の hosts を書き換えてと言うのはちと
 リスクがあるかも・・・と思った次第です．
 アカウントユーザのPCは，Win/Linux/Mac なので．．．
＜hal_sk＞ sinsai.plants-web.jp とかでよければすぐ発行しますが
＜tosihisa＞ 発行願います m(_ _)m
＜hal_sk＞ 今、ServerName だけ外しましたが動きませんし
＜Tom_G3X＞  関東、緊急地震速報注意
 岩手か＾＾；；
＜higa4＞ 明星大学のこみねさんという方から私宛てにモデレータやりますというメールを頂きました。今のサーバには登録しない方が良いんでしょうか？
＜tosihisa＞ えーっと
＜-- muko (~muko@ntt7-ppp45.tokyo.sannet.ne.jp) has left #osm-ja
＜tosihisa＞ まだ移行はこれからなので，アカウント発行下さい．
 アカウントユーザはメアドで連絡できるはずなので．．．
＜higa4＞ 了解です。
＜Say-no＞ hal_skさん、吉田さんがEC2、申し出てくれています。
＜hal_sk＞ おお
 あとでメールしときます
＜-- tosseto has quit (Remote host closed the connection)
 Blackadder has quit (Quit: heading for the next unmapped place=)
 tosseto_ has quit (Remote host closed the connection)
--＞ kayakaya (~kayakaya@218-251-28-205f1.hyg1.eonet.ne.jp) has joined #osm-ja
 yasunari_yamasita (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜hal_sk＞ うーん。valuedomain で、sinsai.georepublic.jp の設定をしましたが、なかなか反映されませんね
 見えますか？
--＞ Tom_G3X_ (~tom_g3x@kctv46242.ccnw.ne.jp) has joined #osm-ja
 reith (~reith@tmo-100-24.customers.d1-online.com) has joined #osm-ja
＜miurahr＞ subdomain するよ
＜magepa＞ valudomeinは、定時処理で
 かかれてる時間から想像がつく時間にしか更新されないです
--＞ yasunari0 (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜magepa＞ いまなら0分に期待みたいな
＜miurahr＞ beta.sinsai.info
＜tosihisa＞ ぷりーず＞beta.sinsai.info
＜miurahr＞ 2-3ふんでいくとおもう。
 onamae.com高いけど、そこはいいところ。
--＞ yasunari1 (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜hal_sk＞ 吉田さんにメールしました＞ Say-no
＜higa4＞ すみません、今度こそ寝るつもりですがひとつだけ
＜hal_sk＞ おお、beta.sinsai.info 設定します
＜higa4＞ 今度はVoice of Americaからskypeインタビューの依頼です
＜hal_sk＞ すごい
＜higa4＞ どなたか対応頂けませんか。。。。ちょっと疲れた
＜miurahr＞ すごい
--＞ tosseto (~tosseto@58x158x46x157.ap58.ftth.ucom.ne.jp) has joined #osm-ja
＜hal_sk＞ ここは三浦さんじゃないですかね
＜miurahr＞ えー、やっぱり。
＜Say-no＞ 了解です。 ＞hal_skさん
＜tosihisa＞ 私たちは手一杯・・・とは，さすがに言えませんかね．．．
＜Say-no＞ もう日付が変わったのか…。
＜tosihisa＞ ほんとだ＞日付
＜hal_sk＞ ドメイン設定はお願いします！
＜-- Tom_G3X has quit (Ping timeout: 480 seconds)
＜miurahr＞ あと１２０秒で切り替わるよ
 たぶん。
＜-- reith (~reith@tmo-100-24.customers.d1-online.com) has left #osm-ja
＜hal_sk＞ こちらも設定しました
＜tosihisa＞ もぉこっちきた！ beta.sinsai.info (DNSだけ)
＜miurahr＞ ;; AUTHORITY SECTION:
 sinsai.info.  115 IN SOA 01.dnsv.jp. hostmaster.dnsv.jp. 1299911679 3600 900 604800 300
＜caesium＞ りょうかいしました
＜hal_sk＞ a,
 リダイレクト設定も直さなきゃ
＜-- yasunari_yamasita has quit (Ping timeout: 480 seconds)
--＞ mapconcierge (d2fe5712@ircip1.mibbit.com) has joined #osm-ja
＜hal_sk＞ 表示されました！
＜-- heromiya has quit (Quit: http://www.mibbit.com ajax IRC Client)
＜tosihisa＞ こっちもみえた！ http://beta.sinsai.info/
＜-- yasunari0 has quit (Ping timeout: 480 seconds)
＜hal_sk＞ 知り合いがモデレータとして参加してくれるということなのでアカウント作ろうと思うんですが、ロールは何にすればいいのですか？
＜higa4＞ みんなadminです
＜hal_sk＞ 了解です
＜tosihisa＞ ADMIN
 関さん
 admin のパスワードを変えましょう
＜hal_sk＞ はい。変えます
＜miurahr＞ 翻訳の協力申し出を知り合いがしてくれました
 Wikiの翻訳でいいんですかね
＜tosihisa＞ とお願いしながら，先に私アカウント作りました（申し訳ありません！）
 現 sinsai.info にアカウントをお持ちの方のアカウントを新側につくりはじめます．
＜caesium＞ よろしくお願いいたします。
＜tosihisa＞ む．ログイン後，「メッセージ」を選ぶと データベースエラーが出る．まぁこれは後だ後．先にアカウント作成だ．
--＞ yasunari_yamasita (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
 miurahr_ (~miurahr_@g144.115-65-81.ppp.wakwak.ne.jp) has joined #osm-ja
＜miurahr＞ DB移行ではうまくいかないんですね。
 仕組みが分かっていない。。。
＜hal_sk＞ Adminのパスワードを変更して、README に追記しておきました
＜miurahr＞ バックアップをリストアして、twitterのtableをecho 'delete * from tweet;' | mysql -u root -p  dbname みたいにすればいいかとおもった。
 いや任せます。。。。
＜hal_sk＞ アカウント作る前にDB移行やってみましょうか。
＜tosihisa＞ いや．．．実は私もDBは素人なところもありまして．．．
＜hal_sk＞ アカウント情報もDBに入っていると思われるので
＜tosihisa＞ そうですね＞DB移行
 yes ＞アカウント情報
--＞ yasunari0 (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜tosihisa＞ DB移行がうまくいくなら，アカウント作り直しの手間も稼げるかも．お願いできますか？ m(_ _)m
＜hal_sk＞ 一旦今のdumpとってやっってみます
 しばしお待ちを
＜tosihisa＞ m(_ _)m
＜-- yasunari1 has quit (Ping timeout: 480 seconds)
--＞ yasunari1 (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
 yasunari2 (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜tosihisa＞ ユニーク訪問者１万超えました．
 ↑sinsai.info
＜miurahr＞ https://github.com/ushahidi/Ushahidi_Web/blob/master/sql/ushahidi.sql
 ni
 にDBスキーマあります。
＜tosihisa＞ ページビューは２万２千です．
＜magepa＞ ちょっともどり
 お、おつかれさまです＞移行
＜-- yasunari1 has quit ()
＜miurahr＞ usersテーブルを見ればよさそうです。
＜-- yasunari_yamasita has quit (Ping timeout: 480 seconds)
＜help＞ 本日の Bing マッピング作業終了します
＜tosihisa＞ おつかれさまでした m(_ _)m
＜Takuma_A＞ 翻訳の質問ですが，highway=unclassifiedといったタグ？はそのままのほうが良いのでしょうか？それともhighway=不分類道路と訳したほうが良いのでしょうか？
＜help＞ 海岸のすぐそばにある学校とおぼしき建物について、中学校なのか、小学校なのか、はたまた高校なのかわからないところがくやしい
 もし、ソコに生徒がいたら孤立していると想像されます
＜tosihisa＞ 学校はほぼ間違いなし．．．って感じでしょうか．
＜-- yasunari0 has quit (Ping timeout: 480 seconds)
＜miurahr＞ select u.username , r.role_id from users as u and roles_users as r where u.id = r.user_id; みたいにして確認できるかな
＜help＞ まぁ、ロの字型の建物やプールらしい建物があるので
＜miurahr＞ 翻訳は、GUIは翻訳するけどタグの
 データはしません。
＜help＞ プリセットで学校ってありますね
＜miurahr＞ そこは世界共通で決まった英語です。
＜help＞ ポイントだけ打っておきます
＜miurahr＞ 地図を作るときに、どんな言語にも変換されます。
＜Say-no＞ ＞Takumaさん
＜miurahr＞ ushahidi mysql:   tweetは, incidentテーブルに格納。
＜Say-no＞ 本文中に地の文として登場するならいいと思いますが、WebページのURIとしては認められません。＞Takumaさん
＜miurahr＞ delete * from incident where incident_mode = 4; とするとTweetの分だけ削除される。
--＞ yasunari_yamasita (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜-- higa4 has quit (Quit: ChatZilla 0.9.86 [Firefox 3.6.15/20110303024726])
＜miurahr＞ 削除処理したときに本当に削除するようなアプリの作りだったらこれで大丈夫のはず。
＜argrath＞ 小中高校どれでもタグ的にはamenity=schoolなので、詳細は土地勘ある人に任せてます
＜help＞ とりあえずわからないので「名称不明（学校と思われる）」としておきます。
＜Takuma_A＞ ＞say-noさん．了解です
＜hal_sk＞ うーん。dump を入れたDBを新しく作って、config でそちらを見るように変更したんですが、表示されなくなっちゃいましたね
＜miurahr＞ どこ？
＜help＞ グラウンドにトラックまで描かれてます
--＞ yasunari0 (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜miurahr＞ うちの嫁、仙台出身だから、OSMのマップ上でおしえてくれれば、わかるとおもう。
 仙台なら
＜help＞ いわき市の東か南東あたりを作業してます
＜miurahr＞ ですが
＜help＞ ちょっと遠いですね
＜-- kakugeta has quit (Quit: http://www.mibbit.com ajax IRC Client)
＜miurahr＞ いわきの人いたよねー
 OSMに
＜help＞ 一応津波に洗われた可能性のたかそうな海岸をメインにマッピングしてます
 内陸は後回しにしてますわ
＜argrath＞ 南仙台駅の東西に見える学校をいくつかマッピングしてあります
＜hal_sk＞ サーバのレスポンスが悪くなった
 Daniel が言ってたネットワークの件かな
＜miurahr＞ 渡辺さん　いわき市市民生活課
＜help＞ 時間帯的にまだ生徒も先生もいたハズだから
＜miurahr＞ 電話してみる。
＜tosihisa＞ ん．うまく見えてるような？＞http://beta.sinsai.info/ushahidi/
＜help＞ 建物は耐えて（期待）、高いところにいるんじゃないかなと
＜Say-no＞ ＞Takumaさん ありがとうございます。またチェックしておきます。変だったら勝手に直しておきますね。
 ＞Takumaさん まだ行けそうならまた順番にお願いします。終わったら、 http://wiki.openstreetmap.org/wiki/2011_Sendai_earthquake_and_tsunami/Translation_Request の該当ページへのリンクを削除しておいてください。
＜help＞ 明日の朝からの作業でも学校を見つけたら、マークしておきます。 今日も学校を見かけましたが、すっかりわすれちゃいました。
＜hal_sk＞ 今は平気ですね。
＜tosihisa＞ ログインも出来た＞beta
＜-- yasunari2 has quit (Ping timeout: 480 seconds)
＜miurahr＞ 電話でない：　渡邉剛広さん watanabe-t-5@city.iwaki.fukushima.jp にメールしてみて。OSMFJの人だよ。
＜tosihisa＞ 関さん，どうしましょう，一旦皆さんに入ってみていただきます？
＜hal_sk＞ どうもデータ移行できたっぽいですね
 はい。やってみていただきたいです
＜miurahr＞ haireta
＜swima＞ すみません宣言していなくて。いわきの南の方、少しずつ編集してます。
＜miurahr＞ はいれた
＜help＞ 電話通じない場所の人では？＞渡邊さん
--＞ yasunari1 (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜help＞ あるいは市役所に詰めているとか
＜miurahr＞ こみあってる：いわき
＜tosihisa＞ sinsai.info にアカウントをお持ちの皆さん＞beta.sinsai.info にログインできるかお試しください．
＜miurahr＞ 市役所にいるとおもうんだ
 きっと。そう信じてる。
 DBの削除やっていい？
＜swima＞ いけました＞tosihisaさん
＜argrath＞ あ、私のアカウントも作ってもらっていいですか? argrath@gmail.com で。
＜-- yasunari_yamasita has quit (Ping timeout: 480 seconds)
＜help＞ あ、当方は作業終わりにします、ですので、あとはお任せです。いわき市南と東＞ swima さん
＜tosihisa＞ DB の削除ぷりーず＞三浦さん
＜tosseto＞ いけましたよ,作業thxです.　＞hal-skさん,皆さん
＜swima＞ http://beta.sinsai.info/ushahidi/ にリダイレクトされました＞toshihisaさん
＜miurahr＞ DBパスワードはどのファイルに書いてある？
＜tosihisa＞ それでOKです．
＜miurahr＞ あ、わかた
＜hal_sk＞ DBのルートはmiurahrさんが設定したらしいです
＜caesium＞ ログイン確認OKです
＜miurahr＞ あー
 そうでした
＜tosihisa＞ argrath さん，これからDBの掃除をします．掃除した後にアカウントを作ります.
 m(_ _)m
 s/掃除をします/三浦さんに掃除いただきます/
＜argrath＞ よろしくですー
＜tosihisa＞ 掃除始まった模様．．．
＜hal_sk＞ 掃除終わったらDNS切り替えてしまいますか？
＜-- yasunari0 has quit (Ping timeout: 480 seconds)
--＞ yasunari_yamasita (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜Takuma_A＞ Say-noさん．修正お願いします．
＜hal_sk＞ http://beta.sinsai.info/ushahidi/kml も動いています
＜tosihisa＞ 関さん，１点だけ気になるのが．
＜miurahr＞ DB構造の理解間違えたっぽい。
 incidentは、レポートのてーぶる。
＜karida＞ To improve performance maybe one wants to increase PHP memory settings or Apache settings
＜Takuma_A＞ JA:Tag:highway=unclassified http://wiki.openstreetmap.org/wiki/JA:Tag:highway%3Dunclassified 翻訳しました．修正お願いします
＜hal_sk＞ なるほど
＜tosihisa＞ 旧 sinsai.info は，ログイン後，ダッシュボードで，右に「設定」がありますが，新しい側には無いのです．何か分かりますでしょうか．
＜karida＞ PHP memory is alread 254MB
＜hal_sk＞ 僕のアカウントでは見れてますね ＞ 設定
＜tosihisa＞ はう．
＜hal_sk＞ adminだからかな
＜karida＞ But the server has 2GB RAM available, so maybe someone knows a good number
＜tosihisa＞ どなたか見えていれば．．．
＜magepa＞ karidaさんがええこと言ってるんじゃないかな
＜hal_sk＞ いいこと言ってますね。でもどれくらいがいいんだろう
 mysql の設定とかもデフォルトです
＜magepa＞ それはしんどいでしょうね
＜karida＞ mysql has default settings, I think ... so probably good idea to change something
＜magepa＞ しかしいい値さがすのはむずかしい　メモリはデフォルトだと16Mとかなんでしょうかね
＜-- yasunari1 has quit (Ping timeout: 480 seconds)
＜magepa＞ Σ目の前のマシンのterminalが死んだw
＜tosseto＞ 私も設定見えてませんね　＞tosihisa
＜tosihisa＞ ありゃ，なんでだろ・・・
--＞ bontakun (~bontakun@i125-206-35-99.s30.a048.ap.plala.or.jp) has joined #osm-ja
＜miurahr＞ 地震でMysQLtuning book is under mountain of books
＜tosihisa＞ えーっと，DB移行にともない，admin(本当のadmin) パスワードは東さんが設定されたものになったかと・・・
 東さんが irc に来られたらパスワード訪ねよう・・・
＜magepa＞ 直でmail送っておいた方が負担が少ないかと
＜tosihisa＞ そうします＞mail
＜Say-no＞ 知り合いの方から炊き出しマップのKMLファイルを頂きました。どなたかにお渡ししたいのですが…Ushahidiに重ねられますか?
＜hal_sk＞ Mano Marks が告知してくれてる http://twitter.com/ManoMarks/statuses/46595993063522304
＜-- kayakaya has quit (Remote host closed the connection)
＜tosseto＞ ほい,やります　＞Ushahidi
＜Say-no＞ ＞Takumaさん　翻訳ありがとうございます。今からチェックします。
＜hal_sk＞ admin のパスワードだけ前のDBから取ってきたので、Admin ログインできるようになりました
＜Say-no＞ tossetoさんよろしくお願い致します。
＜argrath＞ http://twitter.com/NTTDATA_PR/status/46412077602050048 ここでも告知されてましたね
＜miurahr＞ やった。
 広報室長に昨晩メールしたせいか。：）
＜hal_sk＞ はい。結構RTされてた模様 ＞ NTTDATA_PR
＜Say-no＞ やりましたね!!＞miurahさん
＜tosihisa＞ ありがとうございます＞hal_sk さん．admin で入れました．
＜miurahr＞ えっとDBのほうの対処についてレビューお願いします
 Twitterのメッセージは、 messageテーブルに格納されている
 mysql＞ select count(*) from messages;
 ERROR 1146 (42S02): Table 'ushahidi2.messages' doesn't exist
 mysql＞ select count(*) from message;
 +----------+
--＞ yasunari0 (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜miurahr＞ | count(*) |
 +----------+
 |    13032 |
 +----------+
 1 row in set (0.00 sec)
＜hal_sk＞ karida: could you find fine number for php.ini and my.cnf by yourself?
＜karida＞ I didn't llok for
 shall I?
＜hal_sk＞ karida: please!
＜Takuma_A＞ JA:Tag:highway=secondary http://wiki.openstreetmap.org/wiki/JA:Tag:highway%3Dsecondary 翻訳しました．修正お願いします
＜karida＞ OK .... let me see
＜miurahr＞ but number of messages is more than admin screen indicated
 how to select from here
 mysql＞ select count(*) from message where message_type =1;
 +----------+
 | count(*) |
 +----------+
 |    10064 |
 +----------+
 1 row in set (0.00 sec)
＜tosihisa＞ あ．Ushahidi，ちとバージョンが違うな．
＜miurahr＞ This number is same as admin screen 
＜hal_sk＞ それで普通のadminから設定が見えなくなったんですかね
＜miurahr＞ so I can remove it.
 いいかな
＜tosihisa＞ 現 sinsai.info → 2.0.2 / beta.sinsai.info → 2.0.1
 設定はそのせいかも．
＜hal_sk＞ いいと思います！ ＞miurahr
＜tosihisa＞ いきましょう！
＜miurahr＞ done!
 みて
＜tosihisa＞ OK
＜hal_sk＞ ０になった！
＜miurahr＞ じゃ、集めはじめましょう。
 新規に！
 あと、東さんがいっていたフィルターアルファ版のやつってどれ？
＜tosihisa＞ レポートは残って，twitter は掃除できてますね！
＜miurahr＞ DigitalGlobeもやりたいし。。。
 よかった。。
＜hal_sk＞ 一旦設定のところのtohokueq,miyagiを消しましたよ
＜tosseto＞ これから地理学会のMLにURL流します　http://beta.sinsai.infoでいいですか
＜miurahr＞ だめです。
＜-- yasunari_yamasita has quit (Ping timeout: 480 seconds)
＜hal_sk＞ DNS切り替えましょう
＜miurahr＞ じゃ、betaを本番にしましょう。
 あー、ただですね。
 消した副作用がわかった。
＜tosihisa＞ 副作用・・・
＜miurahr＞ Twitterですでにレポートしたものの関係性がなくなった
＜help＞ もう寝ようと思っていたのに、また広報してしまいました http://mixi.jp/view_bbs.pl?id=60779527&comm_id=5522501
＜tosihisa＞ なるほど．リレーション持ってたんですね．．．
＜miurahr＞ えっとTwitter画面で、このメッセージに対応するレポートを作ったときに
＜hal_sk＞ 関連性なくなるとどうなりますか
＜miurahr＞ それをみられるようになっています。
--＞ yasunari_yamasita (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜miurahr＞ 逆の関係はもっていないので、
 エラーにならないですが、
 過去のメッセージのRTがきたときに判定が難しいでしょう。
 delete分ではなくて、 update文で、やるべきだったかも！
 もう一回できる？
 すまんかった。
＜hal_sk＞ hai
 一旦消してdump戻せばいいですか
＜miurahr＞ はい！
＜-- nori_u has quit (Quit: http://www.mibbit.com ajax IRC Client)
＜tosihisa＞ いえいえ．．．DBの操作は神を見る感じです．．．
＜hal_sk＞ じゃ最新取ってきて入れます
 一旦みなさんアクセスできなくなります
＜tosseto＞ もうなんていうか…すごすぎます…
＜tosihisa＞ すみません，ちと仮眠させて下さい．．．
＜Say-no＞ ＞Takumaさん 反応遅くて申し訳ございません。チェックします。
＜miurahr＞ select count(*) from message where message_type =1;
 select count(*) from message where message_type =1 and incident_id = 0;
 #update message set message_type = 3 where message_type =1 and incident_id = 0;
 一旦これを流します：意図は
 メッセージであるが、インシデント（レポート投稿）になっていない（デフォルト値０）について
 message_type =3 つまりDELETEDステータスに変える。
＜hal_sk＞ 戻しました
 tweet数少なくなってる
 誰かモデレータが消してくれてるんですかね
＜tosseto＞ 消してますw
＜hal_sk＞ よさそうですね＞miurahr
＜tosseto＞ ちまちまとですが…
＜Say-no＞ ＞Takumaさん 適当に単語直しますね。
＜-- yasunari0 has quit (Ping timeout: 480 seconds)
＜karida＞ MySQL memory is now 128MB
 key_buffer
＜-- bontakun has quit ()
＜Takuma_A＞ Say-noさん．お願いします．
＜miurahr＞ あれ？すごく減ってる
 なんでだろう。
＜hal_sk＞ tosseto さんが消したそうです
 あれ？でも osmemo.wizu.jp はすごい多いな
＜tosseto＞ すごくは消してないですよ?
＜hal_sk＞ ７０件くらい減ってます
 僕の友達も消してたみたいなので、みんなの合計が７０くらいなんじゃないでしょうか。
＜miurahr＞ 3071になっている
 でも画面では９７７１
 おかしい
＜hal_sk＞ ？？
 なんでだろ
 あ、ごめんなさい
 言うの忘れてました
 DB を ushahidi3 に変えました
 だいぶ疲れが出てきてますね。。。
＜-- miurahr_ has quit (Ping timeout: 480 seconds)
＜miurahr＞ えっとレポートになっているの６件だけ？
 miurahr@osmserver:~$ mysql -u root -p ushahidi3 ＜ clean_tweets.sql 
 Enter password: 
 count(*)
 9997
 count(*)
 9971
 消えるのは９９７１こです。
 うーんいっちゃう！
＜tosseto＞ OK
＜miurahr＞ 前回より良いから。
 どう！
 うまくいった！
＜-- geoalf has quit (Quit: http://www.mibbit.com ajax IRC Client)
＜miurahr＞ じゃ、きりかえるよ＠：）
＜tosseto＞ すばらしい!!
＜hal_sk＞ ありがとうございます！！！
＜tosseto＞ サーバ周りの作業されている皆さん多謝
＜Say-no＞ ＞Takumaさん JA:Tag:highway=secondary を少し修正させていただきました。
＜miurahr＞ ５分ほどで切り替わります
 きっと。
＜Takuma_A＞ ＞say-noさん．ありがとうございます．すいません．お先に寝ます．
＜miurahr＞ betaがなくなります。
 前のは、old.sinsai.info になります
 アクセスがくるようになったら、メモリチューニングにはいります。
＜Say-no＞ ＞Takumaさん もしまた余裕があるときはよろしくお願い致します。修正後のものを見て、用語の使い方を覚えていただけると助かります。例えばこの場合はHighwayはただの道路を意味しています。
＜miurahr＞ 眠い頭で、待ち行列理論の計算できるかなぁ、？
 Takumaさん
 ありがとう！
 みんなの力はすごいです。感謝です！
＜hal_sk＞ 切り替わりましたね
＜Say-no＞ 皆さん素晴らしいです!!
＜swima＞ いやほんとすごいです。
＜Say-no＞ 僕はサーバ関係のスキルがないので、翻訳の方取りまとめています。
＜hal_sk＞ これで、当面アクセスは持つんじゃないでしょうか
 検索も動くようになりましたし、kmlも取れるようになりました
＜Say-no＞ ビギナーサポートはceciumさんがなんとかやってくれるのではないかと…。
＜hal_sk＞ 僕は、ヤフーチームに状況報告して、連携できないか確認してみます
＜-- mohri has quit (Quit: http://www.mibbit.com ajax IRC Client)
＜Say-no＞ あ、やべ、megumeruさんのブログエントリの修正全然進んでねぇ…。
 ＞hal_skさん 村田さんが協力を申し出てくれていましたね。
＜Takuma_A＞ Say-noさんの修正を参考にJA:Tag:highway=tertiaryも訂正しました．
＜hal_sk＞ あ、気づいてませんでした
 Twitter?
＜Say-no＞ あ、眠いのにありがとうございました!! ＞Takumaさん
 ＞hal_skさん そうです。
＜caesium＞ ご相談いただければサポートします
＜-- Takuma_A has quit (Quit: Leaving...)
 mapconcierge has quit (Quit: http://www.mibbit.com ajax IRC Client)
＜miurahr＞ よーし、
 休憩！
＜hal_sk＞ 探したけど見つかりませんでした＞村田さんのTweet
＜tosseto＞ おつかれさまです!
＜hal_sk＞ お疲れ様です！！＞miurahr
＜tosihisa＞ を
 移行されましたですね！
 ありがとうございますー！
＜tosseto＞ 各方面への告知アドレスは　http://sinsai.info/　で引き続きOK?
＜Say-no＞ ＞hal_skさん さがします!!
＜hal_sk＞ このへんもう少し情報厚くしませんか
 http://sinsai.info/ushahidi/page/index/4
＜tosihisa＞ OKかと．
＜hal_sk＞ どなたか
＜miurahr＞ OKです
 引き続きおねがいします。
 サーバボランティアさがそう！
 あー！　MySQL社に友人います。！
 きっと日本にいないとおもうけど。チョー忙しいし。
＜hal_sk＞ ヤフーにも当たってみます
＜caesium＞ なるほど、、、重複削除バシバシやっていきます
＜hal_sk＞ あとTweetします
＜karida＞ which is the currently use database? ＞hal_sk
 to make a backup of the ciorrect one
＜hal_sk＞ ushahidi3 ＞ karida
＜karida＞ thanks
＜tosihisa＞ ４～５名ほど，アカウントが消えたので，再発行必要ですね．
＜caesium＞ パチンコ店のツイートなんでこんなにRTされてるんだ
＜Tom_G3X_＞ ログインできました
＜hal_sk＞ あ、Twitter の収集機能は設定外しています
 どうしますか？
＜tosihisa＞ 設定ONでいかがかと．
＜miurahr＞ えっと、東さんのいっていたフィルターいれませんか。
＜hal_sk＞ それわかりません
＜Tom_G3X_＞ Twitter ノイズ多いしね
＜hal_sk＞ どこを見ればわかりますか
＜tosihisa＞ 私，新鯖に無い方のアカウント再作成→連絡します．
＜Say-no＞ ＞hal_skさん http://twitter.com/#!/take14/status/46568961076248576 これだ!!
＜hal_sk＞ あ、僕が入ってないのか
＜Say-no＞ ＞hal_skさん http://twitter.com/#!/mapconcierge/status/46567436840992768 元発言がこれ
 と
＜hal_sk＞ 緊急出荷してもらえばいいんですね
 どこにどうしてもらえばいいの？
＜Say-no＞ http://twitter.com/#!/kokogiko/status/46566543139680256 これ
--＞ imakihi (~imakihi@c-24-18-11-48.hsd1.wa.comcast.net) has joined #osm-ja
＜hal_sk＞ @yaagyu で止まってるんですね
＜Say-no＞ 村田さんに直接交渉してもらって、sourceタグ決めてもらってWMSとかの仕組みをどうするか考える必要があるかと…。 >h＞l_skさん
＜hal_sk＞ とりあえず、知っている関係者全員宛に、CC に info@osmf.jp 入れてメールします。
 あとはフォローよろしくお願いします。
＜Say-no＞ すみません、この糞忙しい時に…よろしくお願い致します。
 @orochon OSM地図の上にbingの写真範囲を重ねてみました。 http://sandbox.clapps.net/osm.php 
＜miurahr＞ すごく減った気がする
 レポートがへっていませんか？A
＜tosihisa＞ レポートは，dump した時→その後の更新差かと・・・
--＞ xevi (~xevi@178.139.61.55) has joined #osm-ja
＜miurahr＞ http://osmemo.wizu.jp/admin/reports
 ja,
 がんばって手で移動しないと！
--＞ Michi_ (~chatzilla@p5081FB5A.dip.t-dialin.net) has joined #osm-ja
＜tosihisa＞ すでにコメントが入っているのも・・・
＜-- Michi_ (~chatzilla@p5081FB5A.dip.t-dialin.net) has left #osm-ja
 xevi (~xevi@178.139.61.55) has left #osm-ja
＜miurahr＞ http://osmemo.wizu.jp/admin/reports/edit/193
 これやります
 あ
 順番重要か？
＜caesium＞ あ、それわたしが転載した情報です
＜miurahr＞ あ
 レポートダウンロードというメニューがあります
 日付選べそうです。
 下記フォームで、インシデントをUshahidiエンジンにインポートできます.
 注意事項
 レポートはCSV形式でアップロードしてください.
 インシデントIDが既にデータベースに存在する場合、CSVファイル内のエントリは無視されます.
 少なくともインシデントのタイトルと日付は必要です
--＞ mib_1y40jl (9b45b9c8@ircip1.mibbit.com) has joined #osm-ja
＜miurahr＞ 昨日からのをうりゃーっといれれば、IDでマッチしてくれそうです。
＜-- swima has quit (Quit: http://www.mibbit.com ajax IRC Client)
＜miurahr＞ 新サーバ時計おかしい
＜mib_1y40jl＞ hello
＜miurahr＞ hello
 Now  I move Server from old one to new one
 old server runs JST and new server run on UST
 UTC
＜hal_sk＞ ヤフーにメールしました。
＜tosseto＞ うーKMLの表示がうまくいっていない気がするが,体調をくずす前に休みます.作業される方頑張ってください
＜-- mib_1y40jl has quit ()
＜hal_sk＞ おつかれさまでした！
＜tosihisa＞ 取り急ぎ，talk-ja に新サーバ移行アナウンス出しました．
＜-- tosseto has quit (Remote host closed the connection)
＜tosihisa＞ アカウント再作成した方には，これから別途お知らせします．
＜magepa＞ はい、もどり
＜Say-no＞ tossetoさんおつかれさまです!!無理なさらぬよう!!
＜magepa＞ おつかれさまです
＜tosihisa＞ 旧サーバは，時計がおかしい指摘が上がっていたと思います．今の(UTCの)方が良いかもです．
＜hal_sk＞ EC2セットアップしてくれている吉田さん、がんばってくれています
＜Say-no＞ ヤフーのメール、フォロー入れました。よろしくお願い致します。
＜magepa＞ 元のサーバ見ると、新しいサーバこっちだよって言うのは分かるんでしょうか
 DNS変えてたら大丈夫 ... になってるのかな
＜tosihisa＞ 多分分かりません．そこまで今はまだ手が回ってないかと．
＜miurahr＞ なおったはず
＜tosihisa＞ 旧サーバの方で，「これは旧サーバです．新サーバは．．．」とアナウンス入れとくのがよさげです．
＜magepa＞ あ、元のサーバそのままアクセスできました
＜miurahr＞ 気づかないはず。
 了解旧サーバ変える。
--＞ yasunari0 (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜tosihisa＞ 気づかなければOK
＜magepa＞ お願いします
＜Say-no＞ ＞karidaさん http://openstreetmap.jp/irclog/%23osm-ja/2011-03-12.html これのログ取得、止まってませんか?よろしくお願い致します。
＜karida＞ Say-no: looks like ... maybe too busy this chat
 it's very simple script
＜hal_sk＞ すみません。そろそろ私限界です
＜magepa＞ おつかれさまです。　どうかお休みください。
＜karida＞ hal_sk: is the apache log going here access-ushahidi-dev.log\
＜hal_sk＞ ah, yes ＞ karida
＜karida＞ maybe we should go back to the one with log roation
 otherwise files get too large
 I can do this
--＞ swima (df85520b@ircip1.mibbit.com) has joined #osm-ja
＜miurahr＞ KMLが非活性化kになっていますが
 いいんでしたっけ。
 http://sinsai.info/ushahidi/admin/addons/plugins/
＜hal_sk＞ thank you! ＞ karida
 おお、忘れてました
 そっちもDB管理ですよね当然
＜Say-no＞ hal_skさん、倒れないでくださいね!!
＜hal_sk＞ 活性化してください
＜miurahr＞ CONFIGでJSTにしました
 OK
 ごめんなさい、
 画面にでているのは、アクションなんですね。ステータスではなくて
 大丈夫でした。
＜hal_sk＞ あ、そうでしたか
＜-- yasunari_yamasita has quit (Ping timeout: 480 seconds)
＜hal_sk＞ では、すみませんが落ちます
＜takafumi＞ すいません、そろそろ失礼します。お疲れ様でした。
＜-- takafumi has quit (Quit: Leaving..)
＜miurahr＞ なんとかレポートも追いついた気がする
 集中力持たない
 えっと、画面ですが、種別が多すぎてメッセージが下に行き過ぎます。
＜caesium＞ ニコ生特番でも話題にされていたけど、安否確認や救助要請はどこまで転載していいのか判断が難しい、、、
＜miurahr＞ サイトのテーマ変えます。
＜-- wonderchook has quit (Quit: Leaving.)
＜tosihisa＞ アカウント再作成＆連絡終了．．．
＜miurahr＞ 時計バグってる
＜tosihisa＞ うぉう．http://sinsai.info/ushahidi/kml で Google Earth で見える！！
＜argrath＞ verified/unverifiedのマーク、以前は日本語だったような?
＜tosihisa＞ 「福島第一・第二原発からの距離帯」を選ぶとエラーがでるな．
 あ，argrath さんのアカウント作らないと．これから作業するっす．
--＞ yasunari_yamasita (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜miurahr＞ 旧からCSVダウンロードしようとしても、旧がバグってて取り出せない！
 ひどすぎる
 MySQLから抜くしかないか！
 ひえー
 手動か
 泣ける。眠いよ。
＜Tom_G3X_＞ キャッシュかけていいかな？＞ウシャヒ
 重たくない？
＜-- yasunari0 has quit (Ping timeout: 480 seconds)
＜tosihisa＞ argrath さん，ub32 宛にメールしました！
 これ消していい？ http://sinsai.info/ushahidi/admin/reports/edit/182 （テストレポート）
 すみません今消しました m(_ _)m
＜argrath＞ ありがとうございます、ログインできましたー
＜tosihisa＞ OK
＜swima＞ こちらもろぐいんできました。ありがとうございます。
＜argrath＞ カテゴリ、英語が全部大文字のものとキャピタライズのものとで倍になってますね…
＜Say-no＞ http://openstreetmap.jp/crisis/ のトップにOSM情報のリンクを置いてしまいました。ホントは3番目くらいに持ってきたかったんですが、同設定したらいいのかわからなかったのでそのままになっています。どなたか変えられればよろしくお願い致します。
＜tosihisa＞ ちょと，休憩・・・
＜Say-no＞ すみません、そろそろ休みます。宿題がいっぱい残ってますが、また続きやります。必要なら横取りしてしまってください。よろしくお願い致します。
＜caesium＞ お疲れ様です
＜tosihisa＞ お疲れ様です
 あ，argrath さんの言っている意味がわかりました＞倍になってる
＜argrath＞ おつでした
＜tosihisa＞ これ，１個１個カテゴリ変えて，空のカテゴリ消すしか無いかな・・・
--＞ wonderchook (~wondercho@pool-71-191-238-125.washdc.east.verizon.net) has joined #osm-ja
＜Tom_G3X_＞ 水を差すようで恐縮ですが・・・、なんか、新鯖の方が重たいような気がするが・・・
＜argrath＞ キャピタライズしかないカテゴリもあるみたいなので、統一するならキャピタライズ?
＜tosihisa＞ えーっと
 多分，新鯖の方が重いのは重いです．．．
＜magepa＞ なんか、最初のロードが遅い感じですね
＜Tom_G3X_＞ すいません。そうなんですか
＜magepa＞ 処理速度は速い 転送が遅いのかな
＜Tom_G3X_＞ プロセス数が制限されてるような予感がする
＜magepa＞ なるほど
＜miurahr＞ 増加させる！
＜Tom_G3X_＞ 計測してみたら、旧鯖と、3倍時間がかかってる
＜tosihisa＞ キャピたライズ・・・って，どっちでしたっけ？（汗
＜magepa＞ おおもじ
＜Say-no＞ 大文字!!
＜tosihisa＞ 個人的には，黒のアイコンが，
 無い方がええのかなと．．．
＜argrath＞ 頭が大文字です(^^;＜キャピタライズ
＜Tom_G3X_＞ 同感
＜tosihisa＞ 画面の下の方に見えてるやつ．
 Test ←こんなの？
＜Tom_G3X_＞ お線香の香りがして・・・・・
＜tosihisa＞ ↑キャピタライズ
＜miurahr＞ えっとmuninいれるね
＜argrath＞ ですです＜キャピタライズ
＜miurahr＞ server は、Ubuntu 10.10
＜tosihisa＞ そやけど謎やな．DB引っ越しただけだけど・・・
＜miurahr＞ top - 18:00:06 up 23 days,  7:37,  5 users,  load average: 1.10, 1.10, 1.11
 Tasks: 122 total,   2 running, 120 sleeping,   0 stopped,   0 zombie
 Cpu(s): 38.9%us, 60.8%sy,  0.0%ni,  0.0%id,  0.0%wa,  0.0%hi,  0.3%si,  0.0%st
 Mem:   2056640k total,  1615856k used,   440784k free,   155848k buffers
 Swap:  3999740k total,        0k used,  3999740k free,   959048k cached
 IOネックやね
 距離は遠くなってるけど、メモリーの分、たくさんのユーザを引き受けられるはず
＜tosihisa＞ 炊き出しまっぷは何とか出したいんだけど．．．
＜miurahr＞ 結局、レポートIDが狂ってしまっているようなので、
 export/importで解決不能
＜tosihisa＞ 了解です＞解決不能
＜miurahr＞ 両方をexportしてsortして見比べるしかない
 泣きそうです。
＜tosihisa＞ ここは，手でどっちかに合わせるのがベストですね．
 ありがとう御座います＞DB作業．
＜miurahr＞ まあ、１３日に入ってからあたりが増えているので
 情報の重複より、ないことは重大
＜tosihisa＞ 数は知れてそうかなと．．．
＜magepa＞ キャッシュ増やせないですかね　メモリ余ってそう
＜miurahr＞ サーバ設定でキャッシュってないですか
＜tosihisa＞ yes ＞ないことは重大
＜magepa＞ DBキャッシュかHTTPキャッシュかどっちがいいのかわからんけど
＜miurahr＞ は！
＜tosihisa＞ この手のシステムで，キャッシュ入れると情報更新とうまく行くのかな？と思うのですがいけるんですかね．
＜miurahr＞ レポート投稿してくれた人のユーザDB
 ちゃんと合ってるかなぁ
＜Tom_G3X_＞ 旧サイト：約3.5秒
 新サイト：約9秒
 共にトップページの表示時間
 ちょっと試してみたけど、キャッシュ、あまと効果は期待できないみたい
 あまり効果は期待できないみたい・・
＜magepa＞ そうですか。。　まあliveじゃあんまりいじれないしな
＜miurahr＞  * CONFIGURATION
  * 'file' driver can be substituted for:
＜argrath＞ あれ、うちだとせいぜい4秒ぐらいにみえます…
＜miurahr＞  *  -＞ Memcache - Memcache is very high performance, but prevents cache tags fro
 m being used.
  *  -＞ APC - Alternative Php Cache
  *  -＞ Eaccelerator
  *  -＞ Xcache
  
 $config['default'] = array(
  'driver' =＞ 'file',
  'params' =＞ APPPATH.'cache',
  'lifetime' =＞ 1800,
  'requests' =＞ -1
 );
 これAPCにするか
 地震なのか、めまいなのかわからなくなってきた
＜Tom_G3X_＞ firebug で10秒前後だな
＜tosihisa＞ カテゴリは Translation 出来るっぽい
 親子関係も作れるっぽい．
 あかん，マジで眠い．
＜magepa＞ ふむ
＜yasunari_yamasita＞ もう３時を過ぎています。無理せず休みましょう!
＜tosihisa＞ 確かに．サーバ自身は移行できてますし．すみません，先におやすみさせて頂きます m(_ _)m
＜magepa＞ リアル周りのケアしたら寝に入ります
＜miurahr＞ http://openstreetmap.jp/munin/localdomain/localhost.localdomain/index.html
 このサーバの現状これ。
 osm.jpと一緒のサーバね。
 ホントは、パスワード認証したほうがいいかなぁ。
 rootになれるひとでできるひと、場所は /etc/munin/apache.conf
＜magepa＞ ioがんがれ状態ですねこりゃ
＜Tom_G3X_＞ まぁ、明日にしましょ。急ぐことも無いでしょ
＜miurahr＞ osm.jpのDrupalのキャッシュ有効にして三日
＜yasunari_yamasita＞ そうそう。体壊したらもともこもありませんから。皆さん休んでください。また明日頑張りましょ！
＜magepa＞ はい。支援する側が一番しちゃいけないのは睡眠時間を削ること　助ける人が倒れたら誰も助かりません
--＞ mkl (~mikel@200.4.176.125) has joined #osm-ja
＜Tom_G3X_＞ すいません、今日は、僕、閉店させていただきます
＜caesium＞ お疲れ様です
＜yasunari_yamasita＞ おつかれさまでした！また明日、ぼちぼち頑張りましょう！
＜miurahr＞ お疲れ様でした
＜argrath＞ おつでしたー
＜-- mkl has quit (Quit: Leaving.)
--＞ hck (4474ada4@ircip1.mibbit.com) has joined #osm-ja
＜-- hck has quit ()
--＞ Waldrenner (543fab9f@ircip3.mibbit.com) has joined #osm-ja
＜Waldrenner＞ hi
 anyone here to tell me whether and how I could help?
＜magepa＞ did you see here? http://wiki.openstreetmap.org/wiki/2011_Sendai_earthquake_and_tsunami
＜Waldrenner＞ yes, this is how I came here...
＜magepa＞ e.g. mapping around Miyagi/iwate/fukushima/ibaraki ..
＜Waldrenner＞ ok. but I was not able to see anything on the sat images. 
 Do you have pics in higher resolution?
＜magepa＞ ah
＜Waldrenner＞ do you directly update the map
＜magepa＞ We are mainly  create base map with Pre-Disaster Imagery
＜-- KeikoS has quit (Quit: http://www.mibbit.com ajax IRC Client)
＜Waldrenner＞ ok, thats a good starting point
＜magepa＞ and we have only 2 sources Digiglobe(small area)/Jaxa (low reso) at now 
＜Waldrenner＞ I'll take a look on the maps
 thanks!
 please find my contact details here: http://wiki.openstreetmap.org/wiki/User:Waldrenner
＜magepa＞ welcome , I am User:Mage_Whopper on osm wiki
 gotta go sleep it's 4:am japan!
＜-- magepa has quit (Quit: This computer has gone to sleep)
--＞ geoalf (4f0dbbfb@ircip3.mibbit.com) has joined #osm-ja
＜-- wonderchook has quit (Quit: Leaving.)
--＞ manuels (557c4aba@ircip3.mibbit.com) has joined #osm-ja
＜-- manuels has quit ()
＜Say-no＞ http://wiki.openstreetmap.org/wiki/JA:Tag:landuse%3Dfarm と http://wiki.openstreetmap.org/wiki/JA:Tag:landuse%3Dresidential の日本語チェック未完。宿題。
＜-- yasunari_yamasita has quit (Ping timeout: 480 seconds)
 argrath has quit (Ping timeout: 480 seconds)
 imakihi has quit (Ping timeout: 480 seconds)
--＞ Ohr (5d686426@ircip1.mibbit.com) has joined #osm-ja
＜-- Ohr (5d686426@ircip1.mibbit.com) has left #osm-ja
 Waldrenner has quit (Quit: http://www.mibbit.com ajax IRC Client)
 iwaim_ has quit (Ping timeout: 480 seconds)
--＞ imakihi (~imakihi@c-24-18-11-48.hsd1.wa.comcast.net) has joined #osm-ja
 ndoiron (47ff8667@ircip4.mibbit.com) has joined #osm-ja
 mib_b93id9 (5081fb5a@ircip3.mibbit.com) has joined #osm-ja
 iwaim (~iwaim_@rasteenie.alib.jp) has joined #osm-ja
＜-- mib_b93id9 has quit ()
 ndoiron has quit (Quit: http://www.mibbit.com ajax IRC Client)
--＞ higa4 (~chatzilla@i121-114-173-38.s04.a012.ap.plala.or.jp) has joined #osm-ja
＜higa4＞ おはようございます
＜hal_sk＞ おはようございます！
 とりあえずsinsai.netのサーバ移行は完了しています。
 sinsai.info ですね
 admin のパスワードメールしました
＜-- geoalf has quit (Quit: http://www.mibbit.com ajax IRC Client)
 imakihi has quit (Ping timeout: 480 seconds)
--＞ megumeru (795717ce@ircip3.mibbit.com) has joined #osm-ja
＜higa4＞ 関さん、ありがとうございます。
＜megumeru＞ おはようございます。
＜higa4＞ おはようございます
＜megumeru＞ 出来る範囲で頑張ります。よろしくお願い致します。
＜-- nkawa has quit (Ping timeout: 480 seconds)
＜hal_sk＞ おはようございます。
 よろしくお願いします。
--＞ tosseto (~tosseto@58x158x46x157.ap58.ftth.ucom.ne.jp) has joined #osm-ja
 yasunari_yamasita (~yasunari_@x026205.ppp.asahi-net.or.jp) has joined #osm-ja
＜help＞ プレスリリースのたたき台を書き始めました
 書いたらポストしますので、改善希望です
＜tosseto＞ おはようございます.プレスリリースありがとうございます.時間が取れ次第チェックします
--＞ odrked (5b16eab6@ircip3.mibbit.com) has joined #osm-ja
＜-- odrked (5b16eab6@ircip3.mibbit.com) has left #osm-ja
＜hal_sk＞ 私は、EC2インスタンスへのUshahidi構築にとりかかります
 Ushahidi関連で要望あれば対応しますので教えてください
--＞ osmj-log (~osmj-log@osm.eq8.georepublic.net) has joined #osm-ja
2011-03-13-9:35

<strong>以下は2011-03-11-21:17から2011-03-12-16:41(日本時間)までのログ</strong>

21:17 チャンネルに入りました
21:17 *Say-no join #osm-ja
21:17 *topic : OpenStreetMap$Bkw!&k|%cp,\e%aec!Wec%&ec:e&-(B (Japanese speaking channel of OSM)
21:17 *ChanServ!services@services.oftc.net set the topic at 2011/03/11 19:53:38
21:17 *names : Say-no tosseto yasunari_yamasita magepa
21:17 *mode +nt
21:17 *created at 2011/03/11 19:53:38
21:17 メンバ情報を取得しました
21:18 (Say-no) はいれた!!
21:18 (tosseto) てすてす
21:18 (magepa) ただいます
21:19 (tosseto) おかえりです
21:19 (magepa) はい、かしこいひと、どこから書いたらよりいいかを教えてください> tosseto
21:20 (Say-no) とりあえず、OSM-jaのMLとTwitterを使ってアナウンスはしております。
21:20 (Say-no) 適当なタイミングでWikiのページを作成する必要があると思います。
21:21 (magepa) あら、原発きたんか @ NHK
21:21 (tosseto) 賢くはないけど、海岸沿いでしょうか。日本海側も手薄いきがします。
21:21 (Say-no) あと、東さんの設置したUshahidiに情報を投稿するのも重要かも。
21:21 (magepa) ちょ。　いっぱいきた<ほうしゃのうもれ
21:21 (Say-no) とりあえずできることからやってます。アナウンス中心ですが。
21:22 (magepa) http://59.137.142.111/mlitj/17/113041/52384 ってブラウザで開いたらなんかファイルきますか？
21:23 (magepa) ああ、だめっぽい
21:23 (tosseto) 来ないですね
21:23 (magepa) わしのipなんだろいま
21:23 *Say-no_ join #osm-ja
21:23 (tosseto) http://bit.ly/tokyohinan　の情報をうまく取り込んだほうがいいのかな
21:25 (tosseto) 避難所関係のタグまとめて載ってありますか？探してます　＜Say_noさん
21:25 (Say-no) 僕もそれが気になっているんですが、ちょっと探せていません。
21:25 (Say-no) どなたかよろしくお願いいたします < 避難所関係のタグ
21:25 (tosseto) 了解です。みなさんよろしくお願いします。私もHaiti等のタグ見てみます。
21:26 (magepa) ひなんじょって英語でなんて言うの？
21:26 (tosseto) evacuation center かな
21:27 (magepa) どうもです
21:28 (tosseto) Haitiのcamp=yesは、のちのち使いそうですね
21:28 (Say-no) 今後は仮設の様々な施設が出てくると思います。そうした一時的な地物を描くのはどうするかのコンセンサスってありますか?例えば救護所や給水所、仮設の避難場所など。
21:29 (magepa) ふむふむ
21:29 (Say-no) JAXAのデータがゲット出来て配信準備中みたいです!!
21:29 (tosseto) はや
21:30 (magepa) http://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Tags/Humanitarian_Da... こんなんあった
21:30 (tosseto) amenity: drinking_water
21:30 (magepa) むずかしすぎる
21:31 *tosihisa join #osm-ja
21:32 (tosseto) あーあと、当たり前すぎるけど病院はPOIとして必要でしょうね
21:32 (magepa) こんばんは
21:32 (tosseto) としさん、こんばんは
21:32 (tosihisa) こんばんわ
21:32 (magepa) amenity=hospital でしたっけ
21:32 (Say-no) ただ、空中写真のみからその建物が病院かどうかの判断が出来ないのが問題です
21:32 (tosseto) ですね。
21:33 *Say-no_ part (Leaving...)
21:33 (tosseto) 病院のPOIについては地方自治体か医師会で公開されている住所から推測できるといいんですけどね・・
21:34 *Say-no_Mac join #osm-ja
21:34 (Say-no) そう言うのを転用していいものか悩むところです。
21:35 (tosihisa) 個人的には，住所は普通の事実の羅列と思うのですが．．．
21:36 (magepa) 住所はOK 位置情報はグレー　そこ結びつけるのは現地調査しかない
21:37 (magepa) フリーの地図があればそれで逆geoコーディングすればいいんだども
21:37 (Say-no) そうですね。住所から地図上の位置が分かるためには何かのソースが必要ですよね。
21:38 (Say-no) CSISの逆ジオコーディングサービスとか、出典表示で使えないかな?
21:38 (tosseto) なるほど。
21:38 (tosseto) あーでも
21:38 (tosihisa) ここの話題とはそれますが，http://osmemo.wizu.jp/ は，ソースつけたら転記OKですかね．
21:38 (tosihisa) 多分，東京メトロのページ (http://www.kotsu.metro.tokyo.jp/subway/schedule/index.html) は天然 DoS 状態っぽい．
21:38 (tosseto) 相良さんのところは国土地理院のデータ使ってるかな
21:39 (tosseto) モデレータが確認してから掲載になりますが、ぜひよろしくお願いします　＞としさん
21:40 (tosseto) 有明海・八代海・長崎県等の津波情報追加
21:40 (tosihisa) はいー
21:40 (Say-no) tossetoさんはUshahidiのモデレートに注力してください!!
21:40 (tosseto) それからニュースフィードで使えそうなところがあれば情報お願いします　ushahidiに載せます
21:40 (tosseto) OK
21:41 (Say-no) 三陸の辺りはBingがあるそうです。
21:43 (tosseto) CSISの逆ジオコーディングについては古橋さんに聞いてみてもいいかも
21:44 (tosseto) Google mapsのサイト凄い。どんどん加わってる
21:44 (tosihisa) 東京メトロ 運行状況コミット
21:45 (tosihisa) 転記は本当はNG．．．とは言え，アクセス出来ないならばやむを得ず．
21:45 (tosseto) 東京メトロのサイト、アクセス集中してるみたいですね
21:46 (Say-no) ちょっとエナジー補給します。このIRCのアナウンスをどなたかOSM-jaのMLにお願いします。
21:46 *miurahr join #osm-ja
21:46 (tosseto) 三浦さん今晩は
21:47 (miurahr) トピックが文字化けています
21:47 (miurahr) こんばんは
21:49 (magepa) こんばんは
21:49 (magepa) op持ってませんか
21:49 *muko join #osm-ja
21:49 *muko part ()
21:50 *muko join #osm-ja
21:50 (muko) こんばんは。
21:50 (tosseto) 仙台市若林区荒浜1丁目から2丁目で津波による多数の死傷者が発見された模様（NHK)
21:51 (tosseto) こんばんは
21:52 (tosseto) miuraさん、mukoさんが来られる前に、どこを優先してマッピングすべきかや、タグについて少し意見交換してました
21:52 (tosseto) タグに付いては、災害関係のタグまとめがあればと思ってましたが、ご存知ですか？
21:52 (tosseto) 一応、ここはありました。http://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Tags/Humanitarian_Data_Background
21:53 (magepa) てすてす
21:53 (tosihisa) 読めてます＞てすてす
21:53 (muko) 被害状況がわかってからのタグですね。
21:54 (magepa) 福島避難指示か。。
21:55 (Say-no) http://bit.ly/eVEReN
21:55 (muko) 知り合いが仙台市宮城野区にいるのでそのあたりをJOSMで見てます。
21:56 (Say-no) TomさんがBing対応エリア更新 http://bit.ly/eVEReN
21:56 *argrath join #osm-ja
21:56 (tosihisa) Ushahidi は初めて知りましたが，なるほど．．．と言う感じです．
21:56 (muko) この付近ではGPSとBingはそんなにずれていないみたいですね
21:56 (argrath) こんばんわです
21:57 (muko) こんばんは。
21:57 (magepa) こんばんわ
21:57 (tosihisa) こんばんわ
21:57 (tosseto) こんばんはです
21:57 (tosihisa) 福島．．．ikiya さん大丈夫かなぁ．．．
21:58 (Say-no) LiveEditMapViewerでモニターしてると、コンフリクトを防げるかもしれません。
21:58 (Say-no) （数時間前からの更新状況を点滅で教えてくれます）
21:58 (Say-no) http://wiki.openstreetmap.org/wiki/LiveMapViewer
21:58 (Say-no) ↑Tomさん情報
21:59 (tosseto) 東京については、googleMapsとハッシュタグの連携がかなり使われている様子ですね。（#hinanjo）
22:01 (tosihisa) すみません少し席外します m(_ _)m
22:03 (argrath) LiveEditMapViewerって、特に設定とかないですよねえ…うまく動かないなあ…
22:04 (miurahr) osm.jpのkousei
22:04 (miurahr) osm.jpの構成を変えてもらったら、かえって悪くなった。
22:04 (miurahr) 戻してほしいです。＞藤沢さん　いないか。。
22:09 (magepa) Atermの新しい子NAT設定しても見えない。。
22:12 *iwaim join #osm-ja
22:12 (tosseto) こんばんは
22:12 (iwaim) こんばんは
22:13 *nori_u join #osm-ja
22:13 (magepa) こんばんわ
22:13 (tosseto) こんばんは
22:14 (magepa) だめじゃ。NATもDMZもうごいてない。腐っとる
22:15 (Say-no_Mac) 急いで飯食う。
22:16 (magepa) Bingの写真エリアの枠を、JOSMで重ねる方法ないですかね
22:17 (tosihisa) http://wiki.openstreetmap.org/wiki/2011_Sendai_earthquake_and_tsunami
22:17 (tosihisa) もう Wiki ページ出来てる．
22:17 (tosseto) 早い
22:17 (tosihisa) これの JA 版作ってまとめるのが良さそうに思える．
22:17 (tosihisa) 作ったのは外国の方っぽい
22:18 (tosihisa) 日本語いきなり Wiki に書くと戸惑われるかもなぁ．
22:18 (magepa) Humanitarian OSM Teamっていうあつまりが、なんか起きると即座にやってます
22:18 (Say-no_Mac) 日本語併記にして、日本語版を分け内包がいいかもしれません。
22:18 *yasunari0 join #osm-ja
22:19 (magepa) 情報クレクレいってるので、けさずに追記してもらえれば、英語にできるとこはしていきます
22:19 (Say-no_Mac) 分けない方がの間違い
22:19 (Say-no_Mac) 逐次英訳を載せてくれるでしょう。
22:19 (magepa) でもきっとだいがくせいとかいるからおまかせしたほうがいいよね。うん。そうしよう
22:19 *hal_sk join #osm-ja
22:19 (magepa) こんばんは
22:20 (tosseto) 関さんこんばんは、
22:20 (Say-no_Mac) 新宿区役所、都立新宿高校、都庁で避難所設定。
22:20 (tosseto) 都立高校は帰宅困難者のために開放ですね　（NHK)
22:20 (Say-no_Mac) 都内の全ての都立高校(島嶼部を除く)を開放
22:22 (tosseto) 三浦さんありがとうです。
22:22 (tosseto) ＜Ushahidiのtweet
22:24 (magepa) 日本加油 すんごいな
22:24 (Say-no_Mac) Webブラウザ経由でこのIRCに参加する方法をどなたかアナウンスお願いします。
22:24 (magepa) a sec
22:25 (hal_sk) こんんばんは
22:26 *nori_u quit (Quit: nori_u)
22:26 (hal_sk) 子供を寝かしつけ、ようやく時間が取れるようになりました
22:26 (magepa) open http://www.mibbit.com/chat/ select OFTC Nick:yourname Channel:#osm-ja でGo
22:26 *yasunari_yamasita quit (Ping timeout: 480 seconds)
22:26 *mageMibit join #osm-ja
22:26 (mageMibit) Firefoxから
22:28 (Say-no_Mac) @miurahr http://sites.google.com/site/quake20110311jp/ がよくまとまっている。 http://h.osm.jp/ は相互に協力できないか。
22:28 (tosihisa) とりいそぎ，
22:28 (tosihisa) http://wiki.openstreetmap.org/wiki/2011_Sendai_earthquake_and_tsunami
22:29 (tosihisa) の下に，Japanese を入れました．ここにまとめでいかがでしょう．
22:29 (magepa) あーとえーと　はい。
22:32 (tosihisa) 三浦さんごめんなさい，Talk-ja で三浦さんの掛け声を Wiki に転記しました m(_ _)m
22:34 (magepa) はい、すこしへんこうしました > wiki 日本語部分を別ページにしつつimportしてます
22:35 (magepa) あれ、きえた
22:35 (magepa) もどせた
22:37 (tosihisa) びびった :-)
22:38 *mageMibit quit (Quit: http://www.mibbit.com ajax IRC Client)
22:38 (miurahr) はい
22:38 (miurahr) おつかれさまです。
22:40 *Say-no_Mac quit (Remote host closed the connection)
22:40 *Say-no_Mac join #osm-ja
22:42 (miurahr) あと、なにができるでしょうか。
22:42 (miurahr) help.osm.jpの情報を集めることでしょうか。
22:42 (miurahr) Mapでしょうか。
22:42 (miurahr) 仲間集めでしょうか。
22:43 (Say-no) Webブラウザ経由でこのIRCに参加する方法をどなたかアナウンスお願いします。
22:43 (magepa) Wikiにやり方は書きました　
22:43 (magepa) やったことない人でやってみてわからんところを追記してもらうとよいかと
22:44 (magepa) どの辺りに注力するか、を大雑把に決められないでしょうか > miurahr
22:44 (tosihisa) うわっちゃ．違うメアドで Talk-ja に投げてた．．．ごめんなさい＞ML管理者様
22:45 (Say-no) ありがとうございます!!>magepaさん
22:45 (magepa) 私、昼はずっとしらなくて、どのあたりなのか殆ど理解してないです
22:45 (magepa) というか関西でもおもいきりゆれたし
22:45 (tosseto) 揺れてますね
22:46 (hal_sk) さて、何からやるべきか迷っています。
22:47 *Tom_G3X join #osm-ja
22:47 (hal_sk) Ushahidi no
22:47 (hal_sk) Ushahidi の拡散？
22:47 (Tom_G3X) 判りにくいな、-ja かよ -jp と思いこんどったよ
22:48 (magepa) mappingに関しては人間が活動できる時間は限られてますので、日本語が分かる人で現状把握をして、どの辺りにどのくらい注力したらいいかをかんがえて、英語で書いとく
22:48 (magepa) こんばんは
22:48 (magepa) jpは国コード jaは言語コード
22:48 (Say-no_Mac) Tomさんいらっしゃい!!やっと!!ガンガンいきましょう!!
22:48 (magepa) ま、どうでもいいか
22:48 (hal_sk) Tomさんこんばんは！
22:48 (Tom_G3X) こんばんは
22:49 (Say-no_Mac) OSMの編集の仕方のガイド作りなどの整備は重要だと思います>hal_skさん
22:49 (tosihisa) こんばんわ～
22:49 (hal_sk) http://openstreetmap.jp/drupal6/?q=node/2 を詳しくしていく感じですか？
22:50 (Say-no_Mac) そうですね!!あとは関連するWikiへのリンクとか
22:50 (Say-no_Mac) その邦訳とか
22:51 (Say-no_Mac) http://openstreetmap.jp/drupal6/?q=node/2 これにはBingのソースを入れる話が入っていません。
22:52 (miurahr) Ushahidiのサイト、韓国語、中国語の翻訳ははいらないか？
22:52 (miurahr) このサイトボランティアは募集しなくていいか。
22:52 (miurahr) 判断したり、拡散させたり。
22:52 (miurahr) 東さん、どういう状態？
22:52 (miurahr) 東さんがボトルネックになってはいけない。
22:53 (miurahr) Bingの話いれたつもり
22:53 (Say-no_Mac) 東さんは会社に缶詰。
22:53 (Say-no_Mac) メールとWebくらいしか見られない状況。
22:53 (Say-no_Mac) Ushahidiのモデレーターも不足していると思います。tossetoさんが孤軍奮闘?
22:54 (magepa) Ushahidiってなにするといいんでしょうか
22:54 (Say-no_Mac) すみません、ソースの話入ってますね>miurahsann
22:55 (miurahr) tossetoさんが孤軍奮闘ですか？
22:55 (hal_sk) まずは Ushabidi がんばるのがよさそうに思いますがどうでしょう。モデレータやりますよ。
22:56 (miurahr) Drupalのほう、全員にコンテンツ管理、サーバ管理権限付与しました。
22:56 (magepa) モデレータつけれるひと
22:56 (iwaim) Ushahidiの時刻がおかしい問題は解決できる方いらっしゃいますか？
22:56 (magepa) だれなんでしょうか
22:56 (miurahr) 管理セクションのコンテンツの作成で、ストーリーというのを選択して、作成することで、どんどん記事をつくれます。
22:56 (miurahr) Ushahidiの管理者はだれ？
22:56 (iwaim) 東さんとメールやりとりした結果、わかんないということになってる。
22:56 (iwaim) 東さんかな。
22:57 (tosseto) あどみんは東さんです
22:57 (tosseto) 孤軍奮闘するまでまだ情報は集まってませんね
22:57 (magepa) まーそこは焦ってもしゃあない
22:57 (miurahr) 拡散ですね。
22:57 (miurahr) Googleでもまとめサイトを作っています。
22:57 (magepa) 何を集めますか
22:57 (iwaim) 管理画面からとushahidi/application/config/locale.phpのtimezone設定しても無理っぽい
22:57 (miurahr) Googleに、通知して、Ushahidiをいえれてもらえないだろうか。
22:58 (hal_sk) それは良さそうですね
22:58 (miurahr) わたしも会社に缶詰。Eモバイルの細回線なのでつらい。
22:58 (iwaim) それはよさそうな気はします。
22:58 (hal_sk) Googleのまとめサイトってどこですか
22:58 (miurahr) sites.google.com/site/quake20110311jp/
22:59 (tosseto) 関さんのモデレート追加は、東さんに確認してみます
22:59 (tosihisa) Ushahidi って，簡単に入れられるのかな．
22:59 (miurahr) googleの公式と言うより、google siteで作ったといったほうがいいかな
22:59 (miurahr) スタティックページ
22:59 (hal_sk) ああ、このサイトですね
22:59 (hal_sk) オフィシャルじゃないですよね
23:00 (miurahr) はい
23:00 *nori_u join #osm-ja
23:00 (magepa) GOogleはこっちでは http://www.google.co.jp/intl/ja/crisisresponse/japanquake2011.html
23:00 (miurahr) ども
23:00 *nori_u quit (Remote host closed the connection)
23:00 (miurahr) そっちだ
23:01 (miurahr) えっと、googleの人捜しインターフェースには、５０００件がたまっているようだ。
23:01 (miurahr) 余震。。。
23:01 (miurahr) Ushahidiをがんばっていきましょう。
23:01 (hal_sk) ちょっと大きいですね
23:01 (iwaim) ん
23:01 (magepa) 地震がふえてますね
23:01 (miurahr) もっと、覚えやすいURLはないかな。
23:01 (iwaim) ユーザ追加できそう＞tossetoさん
23:01 (hal_sk) どっちのまとめサイトも連絡方法がわかりませんね
23:01 (iwaim) 我々もADMIN権限あって、たぶんユーザ作れる
23:02 (tosseto) あ、なるほど。　＞iwaimさん
23:03 (tosihisa) ん Ushahidi サイトのユーザ追加出来るってこと？＞iwai支障
23:04 (miurahr) tohoku-jisin.info tohoku-jisin.jp tohoku-jisin.net とれそう
23:04 (magepa) 高知、徳島　大津波警報..
23:04 (iwaim) たぶん。＞としさん
23:05 (miurahr) helptohoku.net helptohoku.jp helptohku.infoとれそう
23:05 (magepa) どーなっとるねん
23:05 (iwaim) 地震災害により、一部地域で明日の日経朝刊の配達に影響が出る可能性があります。地震関連の情報は、日経電子版で詳細に報道していきます。
23:05 (iwaim) また、電子版では現在、特別対応として、有料会員限定記事も無料でご覧いただけるようにしています。
23:05 (iwaim) ◆日経電子版
23:05 (iwaim) http://www.nikkei.com/
23:05 (iwaim) こんな対応がされたようだ
23:05 *iwamatsu0 join #osm-ja
23:05 (magepa) こんばんは
23:05 (tosihisa) こんばんわ
23:06 (iwaim) でも、東さんにメール投げるとすぐに作成していただけそうでもあります＜ Ushahidi サイトのユーザ
23:06 (tosseto) いま東さんにメールしてみました
23:06 *iwamatsu join #osm-ja
23:06 *iwamatsu0 quit ()
23:07 (tosseto) 昨日寝ていないので、特に今日の深夜やってくれる人が入ればすごくありがたいです＜モデレート
23:07 (magepa) うーあー　MLこんなに人数少ないのにもうわけわからんですね
23:07 (miurahr) tasukete.info とれそう
23:08 (hal_sk) 東さんには、WebブラウザからのIRCのログイン方法はだれかメールしたんでしたっけ
23:08 (tosihisa) モデレート希望メール出してみました
23:09 (iwaim) じゃあできる限り起きておこうと思います＜モデレート
23:10 (magepa) MLに送りました http://www.kantei.go.jp/jp/kikikanri/jisin/20110311miyagi/index.html が入ってるかどうかってどうやったら分かるんでしょうか
23:15 (magepa) kantei検索しても出なかった
23:15 (Say-no_Mac) 気仙沼市内かなり広範囲に火災が発生しているそうです。ここ優先か？道路が意味なくなっちゃうかな？あ、高精細写真が無い…。
23:15 (miurahr) sinsai.info をUshahidiにむけました。
23:16 (miurahr) 東さんに連絡を！
23:16 (miurahr) 気仙沼は海沿いなので、津波がかぶっているはず。
23:16 (tosseto) 関さん、追加しました。メール確認して下さい
23:16 (hal_sk) sinsai.info 有効になってから拡散死たほうがよさそうですね
23:17 (miurahr) はい。覚えやすい重要。
23:17 (hal_sk) 入れました。ありがとうございます
23:18 (tosseto) 首相官邸情報はまだ入っていないはずです。Ushahidiには
23:18 (tosihisa) 今入れました＞うしゃひでぃーのトップに
23:19 (tosihisa) とりあえず突っ込めそうな所に突っ込みました（汗
23:19 (magepa) トップがどこかもわからないまげ
23:20 (tosihisa) http://osmemo.wizu.jp/
23:20 (magepa) なるほど
23:20 (tosihisa) もしかして違うことしたかな？＞としひさ
23:20 (magepa) ありがとうございます
23:21 *mib_zqcr75 join #osm-ja
23:21 (magepa) 西武運転再開　 よかった
23:22 (tosseto) こんばんは
23:24 (Say-no_Mac) magepaさん、東さんへのメールありがとうございました。
23:25 (Say-no_Mac) 宮城県内の避難所一覧　http://www.pref.miyagi.jp/kikitaisaku/wagayade/hinan_bashoshin/hinan_top.htm
23:25 (tosihisa) うーんっと，sahana 日本語の方は．．．動きは無いかな？．あればリンク張るとかしたいのだけど．
23:26 (bucchi) 質問です。Bingマッピングですが、航空写真でセンターラインが確認できる道路でも、highway=roadでいいですか？
23:26 *tos join #osm-ja
23:26 (tos) PC変えます
23:26 *bontakun join #osm-ja
23:27 (argrath) roadでも、分かりそうなら他のでも、どちらでもいいと思います
23:27 *tosseto quit (Remote host closed the connection)
23:27 *tos quit (Remote host closed the connection)
23:28 (yasunari0) センターラインが見えたら tertiary で良いのでは？
23:28 (Say-no_Mac) センターラインが空中写真で確認できるのであればそれなりのタグをつけてOKです>bucchiさん
23:28 (bucchi) 回答ありがとうございました。
23:28 (bucchi) センターラインが見えるようならteritaryで、判断に迷ったら road を使います。
23:29 *tosseto join #osm-ja
23:29 (magepa) うしゃひでぃー全然わかんね
23:30 (hal_sk) とりあえず、現状では承認待ちのレポートがないってことでいいですかね
23:30 (magepa) こんなかんじ？
23:30 (hal_sk) 自分でレポートつくっていくのがいいのかな
23:30 (Say-no_Mac) だめだ、気仙沼市、ズームレベル14になるとBingの背景写真が出なくなる…。
23:31 (Say-no_Mac) 自分でどんどんレポートつくっていくといいと思います!!避難情報とか交通情報とか。
23:31 (Say-no_Mac) ただ、救助支援が最優先で表示されるようにするのがいいと思います。
23:32 (tosihisa) 今のところ，うしゃひでぃーは承認待ちはありませんね．
23:33 (iwaim) 自分で作るなら関東じゃなくて震源に近いとこの情報の方がよさそうな気はする
23:33 (tosihisa) http://sinsai.info/ は，DNS 更新までもう少しかかるかな？
23:33 (tosihisa) たしかに＞震源に近いとこ
23:34 (hal_sk) そうですよね
23:34 (iwaim) 受ける側の問題じゃないかな。＞DNS
23:37 *miurahr quit (Ping timeout: 480 seconds)
23:37 (magepa) 沖縄で地震。。
23:38 (magepa) きてないのかね
23:38 (magepa) 速報だけでたのか
23:39 *takafumi join #osm-ja
23:39 (magepa) こんばんは
23:39 (tosseto) こんばんは
23:39 (takafumi) こんばんは
23:40 *miurahr join #osm-ja
23:40 (miurahr) すまんです
23:40 (miurahr) きれました。
23:40 (miurahr) どんなかんじですか
23:40 (Say-no_Mac) Drupalの方、いくつか情報を追記しました。案外簡単でした。
23:41 (miurahr) http://sinsai.info/ Ushahidiへの接続確認しました。
23:41 (miurahr) 拡散おねがいします！
23:41 (tosihisa) http://www.kantei.go.jp/jp/kikikanri/jisin/20110311miyagi/201103112250.pdf
23:41 (miurahr) また、　HOT への協力依頼しましょう。
23:42 (miurahr) 仙台のBingマップによるベースマップ作成依頼でしょうか。
23:43 (tosseto) Ushahidiの管理モニタリングされている方,ダッシュボードから確認できるTwitterからも記事を起こせると思いますのでよろしくお願いします.
23:47 (hal_sk) 自分でレポート作ったらエラーになりました。
23:47 (hal_sk) An error was detected which prevented the loading of this page. If this problem persists, please contact the website administrator.
23:47 (hal_sk) application/views/admin/reports_edit_js.php [204]:
23:47 (hal_sk) Trying to get property of non-object
23:49 (hal_sk) Admin の場合だけのようなので、とりあえず放っておきます
23:52 (hal_sk) http://sinsai.info/ 拡散します！
23:52 *ribbon join #osm-ja
23:52 (magepa) こんばんは
23:53 (miurahr) わたしも、miurahr de
23:53 (ribbon) 6時間かけて家までたどり着きました。
23:53 (miurahr) で、 sinsai.infoに登録してください。モデレータやります。
23:53 (magepa) おつかれさまです
23:53 (magepa) 6時間。。
23:54 (ribbon) さすがに疲れたので休みます。明日の状況を見てから、できる事をやります。
23:55 (magepa) はい。ゆっくり休んでください。
23:55 (yasunari0) おつかれさまでした > ribbon
23:55 *nori_u join #osm-ja
23:55 *ribbon part ()
23:57 (miurahr) Ushahidiの名前欄の文字数制限がきついです。日本語だと１文字名字、名前あります。３文字になっています。
23:57 (miurahr) レポート投稿ページ
23:58 (tosseto) 三浦さん,今追加しますね
23:59 *nori_u_ join #osm-ja
23:59 *nori_u_ quit (Remote host closed the connection)
23:59 (iwaim) 追加した＞三浦さん
23:59 (tosseto) many thanks! >iwaim
23:59 (iwaim) IDはmiurahr、パスワードもとりあえず同じにしました。変えといてください
00:00 (Say-no_Mac) 当該地の方はゆっくりお休みください!!支援はむしろ今晩だけではなく今後も続くものですから!!>ribbonさん
00:00 *karida join #osm-ja
00:00 (Say-no_Mac) 日が変わった…
00:00 (magepa) こんばんは
00:01 (Say-no_Mac) Drupalの方にhttp://wiki.openstreetmap.org/wiki/LiveMapViewer の情報載せました。
00:01 *nori_u quit (Quit: http://www.mibbit.com ajax IRC Client)
00:02 (karida) Wow ... first time so many people in this chat
00:03 (hal_sk) haha
00:04 (hal_sk) http://twitter.com/#!/hal_sk/status/46224276386365440
00:04 (hal_sk) Tweet しました
00:05 (karida) Too bad that it always needs an earthquake first to get things rolling ;-)
00:06 (miurahr) Ushahidiの地域名の制限が厳しいです。４文字。漢字で「仙台市」が蹴られます。
00:07 (hal_sk) フッタに運営チームの記述があったほうがよさそうですね
00:07 (miurahr) はい
00:07 (hal_sk) このサーバに入れれば調査できるんですけど
00:08 (miurahr) Ushahidiの未検証が増えています
00:08 (miurahr) 検証済み２０％切りました。
00:08 (miurahr) moderate が間に合わない？！
00:09 (yasunari0) yasunari 入れてください
00:09 (tosihisa) あ
00:09 (tosihisa) 検証済みセット忘れてた．
00:10 (Say-no_Mac) @kei_katsu : @mapconcierge @Say_no地理院精密基盤標高地図でＬＰデータによる地盤の高低が確認できます。 仙台空港周辺 http://bit.ly/gDUAQa 元ページ http://bit.ly/hJ8s9y 津波被災エリアの特定に有効ではないでしょうか？ #OSMjp
00:10 (magepa) 津波は標高だけじゃ特定できないんじゃ
00:11 (tosihisa) iwai支障，yasunari さんの Ushahidi アカウントお願いできます？
00:11 (magepa) うしゃひでぃはどうやったらいいんですかね
00:11 (tosihisa) レポート投稿だけでしたら，特にアカウント作成は不要です．
00:11 (tosihisa) レポート投稿→モデレート→承認→公開
00:11 (Say-no_Mac) 目安に標高を使ってみては？という情報です。北海道地図の勝部さんから。
00:11 (magepa) レポートがなんなのかの説明が見当たらなくてうろうろしてます
00:11 (tosihisa) の流れです．
00:12 (tosihisa) そのまま，レポートとして考えて頂けたら良さそうです．
00:12 *nori_u join #osm-ja
00:12 (magepa) なるほど。
00:12 (tosihisa) タイトル，本文，ニュースソース，位置が必須の様です＞レポート
00:13 (tosihisa) あ，あとはカテゴリのチェックボックスだ．
00:13 (magepa) 大量にあちこちから投稿される情報を、手動でフィルタして掲載、的なIFということでしょうか
00:14 *ndoiron join #osm-ja
00:14 (tosihisa) yes
00:14 (magepa) こんばんは
00:14 (tosseto) こんばんは
00:15 (tosseto) Ushahidiに入ってくるハッシュタグ付きTwitterの整理を手がけていますが,重複ツイートが多いようです.
00:20 (tosihisa) これ，Twitter から拾うと大変すぎますね
00:20 (magepa) 東北重視みたいなひろい方するといいんじゃないでしょうかね
00:21 (tosihisa) そうですね＞東北重視
00:21 (Tom_G3X) Twitter アカウントとか追加できないのかな？
00:21 (magepa) ?
00:21 (tosseto) Twitterの重複なるべく削って拾いやすくしてみます
00:21 (Tom_G3X) 気仙沼市の危機管理課の公式アカウント　http://twitter.com/#!/bosai_kesennuma
00:22 (tosihisa) にしても，数が多い＞Twitter
00:22 (Say-no_Mac) @kei_katsu : 救助道路の問題もあるんで一概にそうとは言えませんが津波被災エリアと青の濃いエリア（2ｍ以下くらい？）は強い相関があるはず。@Say_no: @kei_katsu @mapconcierge より低いエリアを集中的にマッピングするといいということ？ #osmjp
00:23 (Say-no_Mac) Twitterの検索では、-RTを付けて検索すると非公式RTは排除されるそうです。
00:26 (magepa) それだとRTってかいてある公式RTも消えそうです
00:27 (Say-no_Mac) なるほど。
00:28 (tosihisa) うしゃひでぃーにレポート頂くときは，ニュースソースの URL を書いていただくと，ニュースソース見て確認できるのでお願いします m(_ _)m
00:29 (ndoiron) こんばんは、Ushahidiを作ったことがあるアメリカ人だから、手伝いたいです。　どんな地図のデータをUshahidiの地図に書くほうが重要ですか？
00:30 *heromiya join #osm-ja
00:30 *mib_zqcr75 quit (Quit: http://www.mibbit.com ajax IRC Client)
00:30 (Say-no_Mac) ありがとうございます。ndoironさん。とりあえず日本はまだ基本的な道路や建物の情報が不足しております。ですので、Bingを用いて被災地の基本的な地図を描いていただけると嬉しいです。
00:31 (ndoiron) わかりました。
00:32 (Say-no_Mac) OpenStreetMapの編集の仕方はわかりますか?ndoironさん
00:33 (Tom_G3X) ndoironさん。Bingの使えるエリアはここにありますので参考にしてください。http://maps.google.co.jp/maps/ms?ie=UTF8&hl=ja&brcurrent=3,0x34674e0fd77f192f:0xf54275d47c665244,0&msa=0&ll=39.491324,141.152344&spn=3.598772,6.421509&z=8&msid=214659934638657454830.00049e3467120e402f8cb
00:33 *ikiya join #osm-ja
00:33 (Tom_G3X) ikiyaさん、大丈夫ですか！
00:33 (magepa) こんばんは
00:33 (magepa) ご無事で何より
00:33 (tosihisa) Ushahidi は，ファイルのアップロードは出来ないのかな．林さんが talk-ja で送信されたファイルをアップしたいんだけど．．．
00:34 (tosseto) 無事で何よりです
00:34 (tosseto) 林さんの分,KMLに変換できたらいいんですけど…
00:35 (ikiya) こんばんわADSL使えるとこに来ました。
00:35 (tosihisa) を！
00:35 (tosihisa) ご無事でなにより！！
00:35 (ikiya) ５時間以上ゆれっぱななしでみな精神的にやれています。
00:36 (tosihisa) 今回の地震は厳しいです．
00:36 (tosihisa) 阪神大震災を上回ると思います・・・
00:36 (Tom_G3X) ご家族はご無事ですか？＞ikiyaさん
00:37 (ikiya) 長男を１２時ごろやっと避難所でみつけました。あとは無事です。
00:37 (Say-no_Mac) エミリーさんからOpenAriel使えるよ、との情報。
00:37 (yasunari0) 無事で何よりです > ikiya さん！
00:37 (Say-no_Mac) ikiyaさん!!よかったご無事で!!(泣)
00:37 (Say-no_Mac) ikiyaさん、今夜はゆっくりお休みください…
00:38 (nori_u) 無事でよかった! > ikiya さん
00:38 (Tom_G3X) OpenAriel !!!!
00:38 (ndoiron) Ushahidiのadminは、KMLのdivを作ることができます。　/admin/manage/layersのページ
00:39 (tosseto) KMLあればレイヤーとしてUpload可能です.
00:39 (hal_sk) ikiyaさんご無事でよかったです！
00:39 (tosihisa) 英語の避難場所重要＞http://osmemo.wizu.jp/reports/view/51
00:40 (hal_sk) sinsai.info 、Googleのまとめサイトに載せてもらえないか中の人何人かにメールしておきました。
00:40 (tosihisa) 神戸での大震災でも大事だった（この前の勉強会にて学んだこと
00:40 (tosseto) 遅れましたが,ikiyaさんご無事で何よりです.
00:40 (magepa) それ英語のタイトル付けないと英語で検索できないのでは
00:40 (tosihisa) うぉぅ
00:42 *bucchi quit (Quit: http://www.mibbit.com ajax IRC Client)
00:43 (Say-no_Mac) OSGeoの運営委員で、MapServerの開発者の Jeff McKenna がToll-free number for Canadians wondering about family in Japan: 1-800-387-3124 って言ってます。
00:43 (Tom_G3X) ご長男無事でよかった
00:43 (ndoiron) Say-no_Mac はい、OSMを知っています。インタネットの地図のクラスを教えっていますから、たぶん学生も手伝います。
00:44 (magepa) Toll-free numberってなんですか
00:44 (karida) 無料
00:44 (Tom_G3X) オープンエアリアル　使えないよ・・・orz
00:45 (tosihisa) とりあえず英語にした＞英語の避難場所
00:45 (magepa) おつかれさまです
00:45 (Say-no_Mac) ndoironさんありがとうございます。明日には被災状況を撮影した衛星写真がJAXAから提供され、日本の防災科研から提供される予定です。
00:45 (Say-no_Mac) OpenArielだめか…
00:46 (ikiya) 要件を先に伝えます。わたしは波乗りやっていて福島南のはじから仙台まで地形わかります。福島も心配ですが間違いなく恐ろしく海抜低い宮城南の鳥の海、亘理、阿武隈川河口、名取、若林は全滅のはずです。マッピングするか否かは別として情報あげます。
00:48 (magepa) http://www.fastcompany.com/1737539/crisis-mappers-respond-to-japan-earth... こんなのながれてきた
00:48 *swima join #osm-ja
00:48 (magepa) ほうほう。
00:54 (Tom_G3X) これから、OpenAriel を配信するって事？エミリーさんが言ってるのは
00:54 (Say-no_Mac) そうかも…失礼しました…>Tomさん
00:55 (Tom_G3X) OSCのMLに協力要請するか？
00:56 (heromiya) こんばんは、初めてなのですが、どこを対象に何をすれば良いのか正直よくわかっておりません。どなたかご教示を＞＜
00:57 (Say-no_Mac) heromiyaさん!!ありがとうございます!!
00:57 (Say-no_Mac) とりあえず、http://openstreetmap.jp/drupal6/ とかhttp://wiki.openstreetmap.org/wiki/2011_Sendai_earthquake_and_tsunami#Japanese こことか見てください。 >heromiyaさん
00:58 (Tom_G3X) ありがとうごございます。被災地域は広域ですが、Bingを使ってマッピングできるのは限られてます。まず、そこから手をつけています。
00:58 (magepa) こんばんわ
00:58 (Say-no_Mac) すげぇ…いままでつながらなかったいろいろな人がどんどんつながっていく…。
00:58 (magepa) ガイジンさんたちがどこ書いていいかわかんねーよって夕方からゆってます
00:58 (Say-no_Mac) 何の話ですか?http://sinsai.info/ の頭に英語の避難場所の情報（URL）を載せました．
01:02 (Tom_G3X) 今、マッピングできるのは・・・・
01:02 (Tom_G3X) http://www.openstreetmap.org/?lat=38.272&lon=140.924&zoom=10&layers=M
01:02 (tosseto) げ,Twitter目処がたったと思ったら一気に2739件に増えました.ハッシュタグ関係かと
01:02 *MelaskiaGhost join #osm-ja
01:03 (Say-no_Mac) 英語コミュニティーとの連絡も取っていかないとマズイですね…karidaさんや英語の分かる方に橋渡しをお願いしたいです!!
01:03 (Tom_G3X) http://www.openstreetmap.org/?lat=39.412&lon=141.924&zoom=11&layers=M　この海沿いとか
01:03 (Tom_G3X) かな
01:03 (karida) Hi Emilie
01:03 (heromiya) 編集の手順書などがあれば教えていただけるでしょうか。すみません
01:03 (MelaskiaGhost) Hello
01:03 (magepa) hiya
01:03 (tosihisa) ぐわ．これは拾いきれないっす・・・＞tosseto さん
01:04 (karida) Maybe people don't recognise you by your IRC nickname
01:04 (magepa) えみりーさんですよ
01:04 (karida) MelaskiaGhost == Emilie
01:04 (tosihisa) さすがにこれは，ちと twitter のを使うんじゃなくて，適宜人力レポートの方が良いような＞うしゃひでぃー
01:04 (tosseto) 結構消せると思うので,余裕のある人よろしくです.　>ushahidi内Twitter
01:05 (magepa) なにをどうすれば。。
01:06 (magepa) ログイン渡河するのでしょうか
01:06 (miurahr) わたしもログインして協力したい。
01:07 (Say-no_Mac) heromiyaさん、http://wiki.openstreetmap.org/wiki/Main_Page こちらの方から各種ドキュメントにアクセスしてください。
01:07 (Say-no_Mac) まずは http://wiki.openstreetmap.org/wiki/Beginners%27_guide ビギナーズガイドから…>heromiyaさん
01:07 (heromiya) ありがとうございます。助かります。
01:08 (tosihisa) miurahr さんは，http://sinsai.info/ にログイン出来るようです＞アカウントが既にあります．
01:09 (tosihisa) あ，俺でもアカウント作れるか．
01:09 (argrath) http://www.openstreetmap.org/?minlon=140.835002&minlat=36.781263&maxlon=... near coastline 、とか
01:09 (tosihisa) 山下さん，まだ起きてらっしゃいますか？
01:09 (argrath) 広すぎ?
01:09 (Say-no_Mac) あと、http://openstreetmap.blogspot.com/2011/01/openstreetmapwo.html こちらのページもわかりやすいかと思います。>heromiyaさん
01:11 (tosseto) そうそう最初の震源地のマッピングもそうですが,津波が結構長引きそうなので,津波予想が高い沿岸部のマッピングも可能であればしておいたほうがいいかもです
01:12 (karida) Can content like headline, infobox, etc. on http://osmemo.wizu.jp/ also be bilingual?I can translate a few important pages then.
01:12 *yasunari_yamasita join #osm-ja
01:12 (tosseto) というわけですみませんが,少し寝ます.起きれた時点で作業復帰します.
01:13 (hal_sk) Google
01:13 (hal_sk) Google の担当と連絡取れましたが、
01:13 (hal_sk) > サイトをいま詳細にみましたが、ちょっと使い方が難しい印象です。
01:13 (hal_sk) > あと、特設サイトは、一次情報を基本にあつかう方針で、こちら二次情報になるため、とりあえず特設サイトでの対応は控えさせてください。申し訳ありません。
01:13 (hal_sk) となりました
01:13 (hal_sk) Twitterなどでは拡散してくれるそうです
01:14 *yasunari1 join #osm-ja
01:14 *iwaim_ join #osm-ja
01:14 (heromiya) Say-no_Macさん、ありがとうございます。ちょっとずつ理解してきています。
01:15 (yasunari1) 起きてますよ─ > tosihisa
01:17 *iwaim quit (Quit: Loqui)
01:17 (hal_sk) http://twitter.com/#!/googlemapsjapan/status/46242567511212033
01:17 (hal_sk) でツイートしてくれました
01:18 (tosihisa) magepa さんのアカウントを作ってみた＞うしゃひでぃーに
01:18 (tosihisa) これから情報をメールします．
01:18 (magepa) ありがとうございます
01:19 *yasunari0 quit (Ping timeout: 480 seconds)
01:19 (magepa) 去年とかの、衛星写真撮影からWMSかなにかで公開するまでの時間ってどなたか分かりませんか
01:19 (hal_sk) 公式サイトの方も、一応引き続き検討してくれるそうです
01:20 (magepa) ありがとうございます。
01:20 *yasunari_yamasita quit (Ping timeout: 480 seconds)
01:21 (magepa) つながりがどのくらい持ててればいいのかしら
01:21 (karida) We can contact MapQuest to host on OpenAerial Map (thanks to Emilie!) ... please let me know when we know more about the data
01:21 (tosihisa) メールしました！＞magepa さん
01:21 (magepa) ろぐいんできました！ありがとうございます
01:22 (tosihisa) や，山下さん，起きてらっしゃいますね．
01:22 *tosseto quit (Remote host closed the connection)
01:22 (MelaskiaGhost) we will be happy to host the imagery to help people in the way we can
01:22 (tosihisa) うしゃひでぃーのアカウント作りますね＞山下さんの
01:22 (tosihisa) パスワード変えててください＞ magepa さん
01:25 (iwaim_) http://blog.canpan.info/shintsuna/
01:25 (hal_sk) すみません。ちょっと朦朧としてきたので一旦休みます
01:25 (iwaim_) 「東北地方太平洋沖地震多言語支援センター」を立ち上げました
01:26 (iwaim_) らしい。
01:26 (yasunari1) おつかれさまでした。むりなさいませんよう > hal_sk
01:26 (iwaim_) おつかれさまでした
01:26 (Say-no_Mac) スバラシイ!! >iwam_さん
01:27 (Say-no_Mac) IRCに途中から参加された方は過去の議論がわからないかと思うのですが、僕が参加した以降のテキストデータをどこかに上げたほうがいいですかね?
01:27 (iwaim_) 多言語の情報発信できそうな仕組みがあれば連絡してみるのもありかなー
01:27 (Say-no_Mac) 21:18以降のデータなら有ります。
01:28 (Say-no_Mac) 英語の方のMLやIRCで日本の情報を求めているそうです。>iwam_さん
01:28 (iwaim_) あった方がいいかもしれませんね>
01:28 (Say-no_Mac) hal_skさん
01:28 (iwaim_) >IRCログ
01:28 (Say-no_Mac) おつかれさまでした。大変な当地でしょうからおやすみください
01:28 (tosihisa) メールしました！＞山下さん
01:29 (yasunari1) ありがとうございます > tosihisa
01:30 (iwaim_) たぶん、被災地の人向けの活動をしようとしているんちゃいますかねー＜東北地方太平洋沖地震多言語支援センター
01:31 *miurahr quit (Remote host closed the connection)
01:31 (Say-no_Mac) iwam_さん、IRCログなんでしょうか?
01:31 *miurahr join #osm-ja
01:31 (iwaim_) 仰るようにどっかに上げた方がいいんじゃないかな、と。
01:32 (Say-no_Mac) 個人情報とか大丈夫ですかね?公開されちゃ困る人とかいますか?>IRCログ
01:33 (tosihisa) http://osmemo.wizu.jp/reports/view/14
01:35 (tosihisa) すみません，少し席を外します．
01:36 (ikiya) みなさんご心配ありがとうございます。私は避難してる家族のもとに戻ります。twitterはiphoneで見れてます。明日は晴れる模様、あと数時間で衛星、航空写真撮れるはずです。ではまた。
01:37 (argrath) おつかれさまです
01:37 (Tom_G3X) 気をつけてくださいね
01:37 *ikiya quit (Quit: Leaving...)
01:37 (Say-no_Mac) ikiyaさんお疲れ様です。家族が一番大事です!!
01:38 (miurahr) 困りません。
01:38 (miurahr) サーババックアップってどうしましょう。アクセスががーっときて、HDDが弱ると困る。
01:39 *bontakun quit ()
01:39 (Tom_G3X) 困りません
01:39 (Say-no_Mac) とりあえずIRCログどこかにあげます!!
01:41 (Say-no_Mac) 新宿区役所はいっぱいで入れないそうです。受け入れ終了。
01:43 (iwaim_) http://osmemo.wizu.jp/admin/reports/edit/58
01:43 (iwaim_) これ、英訳できる人がいたら是非。
01:44 (yasunari1) n
01:44 (Say-no) http://openstreetmap.jp/drupal6/?q=node/12 IRCログをとりあえず上げました。まずければ削除するので申し出てください!!
01:44 (yasunari1) ネムイ人、そろそろ寝てください。その分明日早く起きてください
01:45 (Say-no) iwam_さん、ログイン出来ないと見られません…
01:45 (iwaim_) サーババックアップ、やってた方がいいですねー
01:45 (iwaim_) http://osmemo.wizu.jp/reports/58
01:45 (iwaim_) かな
01:46 (iwaim_) ちがった
01:46 *swima quit (Quit: http://www.mibbit.com ajax IRC Client)
01:47 (iwaim_) http://osmemo.wizu.jp/reports/view/58
01:47 (iwaim_) か
01:48 (magepa) てきとう翻訳つけました
01:49 (magepa) つだのひとがRTした地震関連ハッシュタグでtwitter周りはゴミためになっとるな
01:49 (Say-no_Mac) すごいスピード感!!magepaさんGJ!!
01:49 (iwaim_) ありがとうございます！
01:50 (Say-no_Mac) 日本人にはだんだん辛い時間帯になってきました…次にアクティブタイムになる国の方々にバトンを渡していきたい…
01:50 (miurahr) 中に入れる人、もっと作らないと、回せない気がする。ダニエルさんなど、力のある人が入れるようにできないか。
01:50 (miurahr) サーバ関係
01:51 (magepa) 日本周りのOSMでは裾野が狭すぎますね
01:51 (Say-no_Mac) ハイチの場合も地球中でやったのが大きかったわけで…うまく海外の人を巻き込みたいけど…。
01:52 (magepa) 地球中というか
01:52 (magepa) 1000人いないとボランティアで24Hはまわりません
01:55 *help join #osm-ja
01:57 (magepa) こんばんは
01:57 (help) つい先ほど帰宅しました
01:57 (tosihisa) こんばんわ
01:57 *Say-no_Mac quit (Remote host closed the connection)
01:57 (help) メイルを見て接続した次第です
01:57 (magepa) つか、wataさんにおねがいするとか
01:58 *Say-no_Mac join #osm-ja 
01:59 (Say-no) それだ!!
02:00 *heromiya quit (Quit: http://www.mibbit.com ajax IRC Client)
02:00 (tosihisa) うしゃひでぃーは，レポートを固定出来ないかな．英語の案内とかは，固定しておいたほうが良いように思うのだけど・・・
02:00 (iwaim_) サーバ周りは無理だけど、情報の集約については「今回の地震について何かやりたいけど何をやっていいのかわからない」という人向けにOSMからアナウンス出すといいかもしれないですね
02:00 (magepa) レポートに言語設定はできないんでしょうか
02:00 (tosihisa) とは言え，こうなると情報に優劣をつける事はむずかしいが．．．
02:00 (magepa) せっかく言語切り替えできるのに。。
02:01 (tosihisa) それは俺も思いました＞言語切替
02:01 (Say-no_Mac) もう2時か…そろそろしんどいなぁ…
02:01 (miurahr) メディアに流れるようになんとか、いろんな人に連絡中です。
02:01 (Say-no_Mac) とりあえず明日に備えて休むかなぁ…
02:01 (yasunari1) 休んで > Say-no
02:01 (magepa) ぐ。。　http://www.47news.jp/news/flashnews/
02:01 (tosihisa) 長期戦覚悟で，休んでくださいまし．
02:01 (iwaim_) カテゴリを複数持てるので
02:02 (Say-no_Mac) IRCログはこのままとり続けるためにSay-noアカウントは残しておきます。
02:02 (iwaim_) 英語用のカテゴリをとりあえず作る？
02:02 (magepa) それが良さそうですね
02:02 (tosihisa) そのほうがいいかも＞カテゴリわけ
02:02 (magepa) 1800世帯壊滅
02:02 (magepa) ..
02:03 (tosihisa) ....
02:03 (iwaim_) どういうカテゴリ名がいいのかわかんない……
02:03 (Say-no_Mac) 福島第一原発まずいな…。
02:03 (tosihisa) や
02:03 (iwaim_) だれか任せます
02:03 (tosihisa) 単純に，今，日本語／英語だから
02:03 (tosihisa) それを単純に分けるってのは単純すぎかな？
02:03 (iwaim_) あー、全部やりますか。
02:03 (iwaim_) それは
02:04 (yasunari1) 4000 越した。無理！
02:04 (magepa) まずカテゴリはどこに。。
02:04 (tosihisa) 手間かな・・・
02:04 (iwaim_) わかりづらい気もする。英語の情報が少ない現状では。
02:04 (magepa) 英語だけ英語って付けたらどうですかね
02:04 (iwaim_) 機械翻訳使う人を想定すると。
02:04 (magepa) とりあえずは
02:04 (tosihisa) twitter は，重複を分けるのはこのへんにしましょうか．
02:04 (iwaim_) それでいいかな、と。＞英語だけ「英語」
02:05 (Say-no) とりあえず離脱します…すみません…。
02:05 (yasunari1) おつかれさま > Say-no
02:05 (magepa) はい。休みましょう
02:05 (iwaim_) いえ、おつかれさまでした。まずはゆっくりお休みください。
02:05 (tosihisa) 多分，体力消耗戦にはいるので，twitter は，重複は消さずに，必要なものを拾ってレポートに出来れば良いように思います．
02:05 (tosihisa) おつかれさんでした～
02:05 (tosihisa) そうですね＞英語だけ「英語」
02:06 (iwaim_) English Information
02:06 (iwaim_) で察してくれるかな
02:06 (tosihisa) ↑で良いかと
02:06 (magepa) このushahidiのインターフェースでまともにやるには熟練で数十人常駐しないとむりっぽいですね
02:06 *muko part ()
02:08 *heromiya join #osm-ja 
02:08 (iwaim_) つくった
02:09 (magepa) 拡散希望を禁止ワードみたいにはできないんだろーか
02:10 (tosihisa) さんきゅ＞iwai支障．
02:10 (tosihisa) ２件ほどEnglish Information に関連付けました．
02:11 (argrath) そういえば、いつぞやのNHKの番組で、「災害情報を外国人に伝える手段として英語もいいけど、簡単な日本語にするだけでも結構効果がある」とかいう話がありましたね。
02:12 (magepa) ローマ字にするだけでガイジンさんはかなり読んでくれます　アニメのおかげで
02:14 (tosihisa) あ，それは神戸のひょうごんテックの勉強会でも言ってた．
02:14 (tosihisa) 阪神大震災の時，避難所案内の簡単な日本語ポスターでも結構助かったそうです．
02:15 (magepa) ひらがなにしてくれーっていってくるガイジンさんけっこういますな
02:16 (ndoiron) 日本語から英語にGoogle Translate を使えば、たいていわかります。　（日本語を勉強する大学生）
02:16 (tosihisa) 翻訳ソフトは偉大ですね．
02:16 (ndoiron) 英語から日本語にGoogle Translateどうですか？
02:16 (magepa) ほとんどわかりません en->ja
02:17 (tosihisa) 個人的には，Google 翻訳で en->ja にすると，あまり分からないです．．．
02:17 (karida) If there is something to translate from ja->en I can help
02:17 (tosihisa) Thank you!!
02:17 (miurahr) わたしから、Ushahidiのサイトへ誘導してもらえるようにNTTデータの広報、総務およびNTTドコモの部長さんに依頼をしました。
02:17 *nkawa join #osm-ja 
02:18 (miurahr) NTTデータCTOの山田常務にUshahidiのサイトの取り組みを広げてもらうよう協力依頼をしました。
02:18 (Tom_G3X) ナイスです
02:18 (miurahr) どのくらい効果があるか、よくわかっていませんが、上から流してもらえると、なにか変わるかもしれない。
02:18 (miurahr) もう、会社から帰りたい。
02:19 (heromiya) 水を差して申し訳ございません、Potlatch2がCouldn't load the mapとしか言わなくなってしまったのですが、対処をご教示いただけるでしょうか
02:19 (miurahr) 。。。ねむいでうｓ。
02:19 (miurahr) わたしは生けます。
02:19 (Say-no_Mac) 多分サーバーが混み合っています。>heromiyaさん
02:20 (Say-no_Mac) 一旦今のところの編集をアップロードして、一旦Potlatchから離れ、再度たちあげなおしたほうがいいかも。もしくは今日はちょっと休んだほうがいいかも。>heromiyaさん
02:20 (tosihisa) 多分そうですね＞サーバ混んでる
02:21 (tosihisa) うしゃひでぃーのマップのロードも少し遅いような？気のせいかな？
02:21 (Say-no_Mac) ズームレベルを変えるだけでも状況は変わるかもしれませんが点。
02:21 (tosihisa) もうみんな漢字が（汗
02:21 (heromiya) なるほど、サーバが空いていて作業できるときにやり直せばOKなのですね>Say-no_Macさん、tosihisaさん
02:22 (Say-no_Mac) とりあえず現在のデータはアップロードして下さい。
02:22 (Say-no_Mac) >heromiyaさん
02:23 (heromiya) 結局、何もできませんでした。実は。要領は得たので明日から本格稼働です。>Say-no_Macさん
02:24 (argrath) や、正直この辺りかなりわかりにくいので、一晩で要領を得たならかなりのものだと思いますよ
02:24 (karida) miurahr: I setup automated backup (every 6h) of drupal6 database and important directories with duplicity on the Hetzner Server
02:26 *yasunari1 quit (Ping timeout: 480 seconds)
02:27 (heromiya) 地理情報屋さんなので概念と設計の理解は速いかもしれませんが、実践は皆様に比べたらペーペーです。またご指導お願いいたします >argrathさん
02:27 (magepa) こういうのこそ災害の人に入ってほしいのう
02:27 (magepa) 情報集める元がハンパないな
02:27 (Say-no_Mac) とりあえず書ける範囲で書きましたが、全然まとまってません…。申し訳ございません。また気がついたら明日追記します。http://openstreetmap.jp/drupal6/?q=node/13
02:28 *heromiya quit (Quit: http://www.mibbit.com ajax IRC Client)
02:31 *Say-no_Mac quit (Remote host closed the connection)
02:33 (karida) Crisis Commons data sources list: https://spreadsheets0.google.com/a/georepublic.de/ccc?authkey=CKqZ1OwL&hl=en&key=tJbgszyZUhltX9pfBIrPH_A&hl=en&authkey=CKqZ1OwL#gid=0
02:33 *heromiya join #osm-ja
02:35 (miurahr) ハイチでは、数百の情報を集約しています。一人毎時１０ことしても１０人で８時間で８００個です。がんばりましょう！
02:36 (miurahr) ハイチでは、ブログを立ち上げ、ブログで活動の様子を伝えることで、参加者を集めました。
02:36 (karida) Do we have this already?
02:36 (karida) An emergency line has been set up for non-Japanese speakers, on 050 5814 7230 and 03 5366 6001. English, Chinese, Korean are available 24 hours a day. Portuguese and Spanish between 9am-8pm.
02:36 (karida) http://www.timeout.jp/en/tokyo/feature/2530/Japan-earthquake-live-report
02:36 (miurahr) great!
02:37 (ndoiron) added http://www.reuters.com/article/2011/03/11/japan-nuclear-idUSL3E7EB26V20110311 to Crisis Commons list
02:37 (karida) I didn't know this:
02:37 (karida) Free drinks and phone charging services
02:37 (karida) Suntory vending machines have emergency levers beneath a sticker on the upper-right corners. Pull the sticker off, pull the lever firmly and you'll get free drinks.
02:37 (help) crome で potlatch2 動かない？
02:37 (miurahr) flashに依存しています。
02:37 (miurahr) firefoxで試してみて。。
02:38 (help) firefox ないので IE で試してみます
02:39 (ndoiron) Flashがなければ、Potlatchを使うことがない。JOSMを使ってください
02:40 (help) IE8 では動くようです 
02:40 (argrath) http://www.nikkeibp.co.jp/archives/386/386082.html これでしょうか。レバーを操作するとドリンクが取り出せる自動販売機。気付いたことはないですが…。
02:42 *heromiya quit (Quit: http://www.mibbit.com ajax IRC Client)
02:42 (takafumi) すいません、お先に失礼します。おやすみなさい。
02:42 *takafumi part (Leaving..)
02:47 (miurahr) そろそろ帰着します。
02:49 (Tom_G3X) ちょっとskype落とします。PCが重たくて作業できん・・・・orz
02:51 (Tom_G3X) wiki 少し更新しました
02:53 (Say-no) 南相馬市近辺を集中してやった方がいいかもしれませんね…。ってここもBing範囲外か…(泣)
02:54 (magepa) 福島ならオルソあるかもですな
02:55 (argrath) Bingないところはだいちに期待するとして、今のところはBingあるところを詰めておくのがいいかもですね
02:55 *ndoiron quit (Quit: http://www.mibbit.com ajax IRC Client)
02:57 (iwaim_) http://iwaim.beering.be/blog/2011/03/12/59.html
02:57 (iwaim_) sinsai.infoでレポートを書くときの心が
02:57 (iwaim_) 心がけ
02:57 (iwaim_) というのを簡単にかいてみた
02:57 (Say-no) ハリケーンさんからTwitterのダイレクトメッセージが来た!!
02:58 (magepa) http://www46.atwiki.jp/earthquakematome/ 東北地方太平洋沖地震 @ ウィキ
02:58 (Say-no) I hope you are okay? I can't believe this! Steve and I originally were still going to be in Japan too.<from Hurricane Coast
02:58 (Tom_G3X) ナンだって？ハリちゃん
02:58 (help) JOSM のほうが軽くてヨサゲです
02:59 *miurahr quit (Ping timeout: 480 seconds)
02:59 (tosihisa) こんな夜更けにまた地震・・・
03:00 (magepa) 岐阜ですか
03:00 (tosihisa) にゃ，東北ですね．．．
03:01 (Tom_G3X) 岐阜？？
03:01 (magepa) 平成23年03月12日02時51分 気象庁発表
03:01 (magepa) 12日02時47分頃地震がありました。
03:01 (magepa) 震源地は岐阜県美濃中西部 （ 北緯35.3度、東経136.5度）で震源の
03:02 (tosihisa) おわ＞岐阜
03:02 (Tom_G3X) 揺れなかったぞ・・・
03:02 (tosihisa) 小さかったんですかね？
03:02 (argrath) 岐阜はM2.4だったようなのでほとんど体感できないかと…
03:02 (magepa) ちいさいですね
03:02 (Tom_G3X) ちいさぁ～～～
03:03 (magepa) それでパニック起きちゃう国もあるけどね
03:04 (magepa) いのちをだいじに
03:06 (Say-no) あ、OSMWikiのトップページにアナウンス出してもらえませんかね?
03:09 (Tom_G3X) OSCのMLに協力要請投げるよ。いい？
03:10 *makoto join #osm-ja 
03:10 (magepa) hi
03:10 (Tom_G3X) OK
03:11 (Say-no) とりあえずHurrcaneさんに、我々は手助けを必要としているから、世界に向けてアナウンスしてくれ、とお伝えしておきました。
03:11 (Tom_G3X) BING写真が欲しい～～～とｗｗｗｗ
03:12 (tosihisa) うしゃひでぃーは，OSMer で無い人の書き込みも来てるっぽい．
03:12 (argrath) また緊急地震速報
03:12 (Say-no) 今度は茨城と千葉か…
03:13 (magepa) われわれはBingのよりこう解像度な写真をひつようとしているから、今すぐとうにゅうしてくれとおつたえください
03:13 (Say-no) Bingを求めてもHurricaneさんもどうにもならないのでは…
03:13 (Tom_G3X) 緊急地震速報　注意！関東方面
03:13 (magepa) 緊急地震速報機能してるとことしてないとことあるのね
03:13 (magepa) いいんだ。ちかいとこからあたるんだ（てきとう）
03:14 (argrath) 東北地方の地震計がだめになってるっぽいです。茨城の方はまだ大丈夫っぽい?
03:14 (Tom_G3X) Steveにお願いして～ｗｗｗ　は無理か・・・
03:17 (tosihisa) うぐ．眠い．
03:18 (tosihisa) ええっと，
03:18 (tosihisa) http://sinsai.info/ ですが，
03:19 (Say-no) 一応、Bingの高解像度画像が欲しいから、このことをSteveに伝えて、とは言っておきました。
03:19 (tosihisa) 先にも書いたとおり，恐らく OSMer で無い人が投稿したりしているので，夜明け次第ですが，モデレート作業は必要かと思います．
03:20 (tosihisa) もちろん，OSMer かどうかと言う話では無いです（すみません，半分寝ているので・・・
03:21 (Tom_G3X) 投稿者の層が広くなったという意味ですね
03:21 (tosihisa) 何にしても，http://sinsai.info/ にアカウントのある方は，モデレートをお願いします．．． m(_ _)m
03:21 (tosihisa) はい＞投稿者の幅が広がった
03:21 *swima join #osm-ja
03:22 (tosihisa) 三浦さんからも，あちこちにお声がけされていますし，モデレートの層が重要になると思います．
03:22 (Say-no) 地図を書ける能力のある人が災害情報の状況判断側に回ってるのがちょっとあれでしたね…
03:22 (tosihisa) ええっと
03:23 (tosihisa) 私は，OSM が災害の一助になればと思っているので，私個人は，明日も引き続き出来る限りモデレートに回ろうかと．．．
03:23 (tosihisa) aa
03:23 (help) JOSM で始めるときの方法を忘れていたので、簡単に書いてみました
03:23 (help) |  1. http://wiki.openstreetmap.org/wiki/JA:JOSM から josm-tested.jar をダウンロードして、ダウンロードしたファイルを実行する。
03:23 (help) |  2. 編集したいエリアを探したら、地図右下の「パーマリンク」をクリックして URL をコピー
03:23 (help) |  3. 上の 1 で実行した JOSM のファイルメニューで「 OSM からダウンロード」を選択
03:23 (help) |  4. 境界囲みタブをクリックし www.openstreetmap.org の URL の欄に貼り付ける (たとえば http://www.openstreetmap.org/?lat=37.6335&lon=141.0089&zoom=14&layers=M )
03:23 (help) |  5. ダウンロードをクリックする
03:23 (help) |  6. 道路等判別がついたら、編集する
03:23 (help) |  7. 編集を終えたら JOSM のファイルメニューで「データをアップロード」を選択する (必要に応じてアカウントとパスワードの入力をする)
03:24 (tosihisa) ああ，ことさら，OSM が災害の一助って．．．書く必要は無かったですね．いかん．マジで脳みそ回ってねぇ（汗
03:24 (help) あ、 2 は www.openstreetmap.org で探したいエリア… でした
03:24 (help) 思い出したところで、今日はいったん寝ます、でわん♪
03:25 (tosihisa) でわん♪
03:25 *jgc join #osm-ja
03:25 (MelaskiaGhost) hello jgc
03:26 (tosihisa) ん
03:26 (tosihisa) [OSM-ja] Ushahidiサイト→支援求む
03:27 (magepa) PHPのライブラリなんぞファイルコピーすればいいんでねの
03:27 (magepa) zend...なんてもういらんし
03:28 (Say-no) NPO/NGOや政府/自治体の人向けのアナウンスを作成してみました http://openstreetmap.jp/drupal6/?q=node/14
03:28 (tosihisa) zlib 関係？＞圧縮
03:28 (magepa) さあ。。
03:29 (tosihisa) なんでしょね．．．
03:29 (Say-no) helpさん、ここに書かずに、http://openstreetmap.jp/drupal6 こことかに書いてくれぇ…(泣)
03:30 (Say-no) 勝手に転載するか…。
03:30 (magepa) どんだけ地震おきとるんじゃ
03:30 (tosihisa) 転載ぷりーずぅ・・・
03:30 (Say-no) でもこれってかなりJOSMの使い方がわかってる人向けですね。今読んだら。
03:31 (Say-no) まぁいいか、四の五の言わず転載するか。
03:31 (Say-no) というか、範囲の設定の仕方ってだけか…。
03:31 (Say-no) まぁいいや。
03:32 (magepa) 難しいやり方をせんたくしたみたいな
03:32 (Say-no) 僕もそう思う。
03:32 (Say-no) 単にJOSMの画面から範囲選べばいいんじゃね?って気がする。
03:32 (magepa) 天保山で津波観測されてたんか
03:32 (tosihisa) ぐは．
03:33 (Say-no) むしろJOSMでBingの背景地図を表示させる方法とか説明したほうがいいか。
03:33 (tosihisa) 「Add New Translation」．．．
03:33 (tosihisa) こんな所にあったんかぁ～
03:33 (Say-no) ちょっといいや。パス。必要ならhelpさん自分でやって!!
03:33 (magepa) ありますた
03:34 (Tom_G3X) http://www.esri.com/services/disaster-response/earthquakes/latest-news-map.html
03:35 (tosihisa) ああ．なるほど．新規投稿は，Translation は無いのか．
03:35 (tosihisa) でもって，編集画面ではあると．> 「Add New Translation」
03:35 (Say-no) 来ましたね、ESRI
03:35 (MelaskiaGhost) http://www.fastcompany.com/1737539/crisis-mappers-respond-to-japan-earthquake
03:35 (tosihisa) まぁ，それはそう言うものかな．
03:36 (iwaim_) まず情報を（言語は問わずに）早くだせ。あとは誰かが訳す。
03:36 (iwaim_) ということなんだと思います。
03:37 (magepa) うしゃひでぃー　勝手にログアウトしおった
03:37 (magepa) はやすぐる
03:39 (tosihisa) ですな＞iwai支障
03:40 (tosihisa) 時に・・・ http://sinsai.info/ 重くないですか？＞みなさん
03:40 *MelaskiaGhost quit (Quit: TheGrebs.com CGI:IRC)
03:40 (magepa) おもくなりましたな
03:40 (tosihisa) ああ
03:41 (magepa) ぎょええ
03:41 (tosihisa) ページビューがこの２時間で２５００～３０００くらい上がってるな．．．
03:41 (magepa) さばけさばけ
03:44 (Tom_G3X) USの訪問者多し
03:45 (Say-no) 丁度ハリケーンさんからもメッセージがあるくらいだし、アメリカの人に情報が伝わったということでしょうかね?
03:45 (Say-no) とりあえず一旦落ちます。IRCはこのままにしておきます。ログ取りのため。
03:45 (tosihisa) そうですね．ユニーク訪問者も，今は累計で 1878 なのですが，この２時間で９００くらい増えたような．．．
03:46 (tosihisa) おつかれさまでしたー
03:46 (tosihisa) 私は４時まで頑張ります．
03:46 (argrath) おつかれさまですー
03:46 (argrath) US訪問者は、向こうが活動時間帯に入ったということの気もしますが…
03:50 *caesium join #osm-ja 
03:54 *magepa quit (Quit: This computer has gone to sleep)
03:56 *magepa join #osm-ja 
03:58 *lori join #osm-ja 
04:00 (Say-no) またかよー緊急地震速報
04:00 (argrath) 次は新潟とか…
04:00 (Tom_G3X) 新潟
04:00 (magepa) ??
04:00 (magepa) ??????????????????
04:00 *miurahr join #osm-ja 
04:00 (magepa) ?????????
04:01 (Say-no) なんで長野で震度6強なんだ!!
04:01 (argrath) 不謹慎かも知れないけど、シューでぃングゲーム最終面のボスラッシュを想像してしまった…
04:02 (magepa) ??????????...
04:02 (argrath) シューティングだった…
04:02 (tosihisa) ああ
04:02 (magepa) ???????????????????????
04:02 (tosihisa) 怒首領蜂
04:03 (tosihisa) あたりかな．
04:03 *Say-no_Mac join #osm-ja 
04:03 *Say-no_Mac quit ()
04:03 (argrath) 震度6強って普通なら充分ボスクラスなのに、余震的に出てくるとは…
04:04 (tosihisa) こうなると，強弱の感覚が麻痺するのは正直なところ・・・
04:04 (magepa) hi-net???????
04:04 (Tom_G3X) 日本、沈没しないよな？
04:04 (magepa) ??????????????
04:05 (tosihisa) いや，これだけ広範囲の地震って，阪神大震災の規模は超えてるよなぁ．．．
04:05 (magepa) ??????????????????????
04:06 (tosihisa) magepa さん，もしかして文字化け？
04:06 (Tom_G3X) とりあえず、揺れは感じなかった　＠名古屋
04:06 (magepa) ?
04:07 (magepa) ???6?..
04:07 (magepa) ???????????
04:08 (Tom_G3X) マゲさん、文字化けしてる
04:08 (magepa) oh
04:08 (magepa) すいません
04:09 (magepa) あれか、一家生きれるとだめなのか
04:09 (swima) 茨城・千葉で緊急地震速報
04:09 (Tom_G3X) なんか、だんだん震源地が南下してるような気がする・・・。
04:10 (magepa) ええと...
04:10 (argrath) 次は茨城県か。なんかちょっと安心してしまう…。
04:10 (magepa) なんなのこれ
04:11 (swima) 茨城で震度４でした
04:11 (Tom_G3X) 王蟲の怒りとしか考えられん
04:11 (magepa) これさ、自分の親ぐらいの年代で一人暮らしとかだとどー考えてもパニックになるよね
04:11 (magepa) 幸い緊急自身速報とどいてないだろうけど
04:17 (swima) 新潟長野群馬で緊急地震速報
04:17 *Greg join #osm-ja 
04:17 (Tom_G3X) PC 再起動します
04:17 *makoto part ()
04:17 (swima) ほんとどうなってるんだ…
04:17 *Tom_G3X quit (Quit: Leaving...)
04:21 (magepa) だれかhinetにサーバていきょうしてあげて！って気分になってきた
04:21 (magepa) もう全然アクセスできない
04:23 *Tom_G3X join #osm-ja 
04:24 (Tom_G3X) 復帰
04:24 (magepa) 4時から新潟のターンなのか
04:25 (Tom_G3X) こっちもヤバくなるかな？明日、子どもに避難場所の確認させよ
04:25 (swima) 東京・豊洲はまた揺れてます
04:25 (magepa) 懐中電灯の電池もね
04:26 (argrath) すごいことになってるはずなのに、関西にいると直接の影響がないので、なんだか不思議な感じですね…
04:28 (magepa) いまがそう、阪神大震災のときに東京の人が思ってた気分とちょっと似てるんじゃないでしょうかね
04:28 (magepa) あ、兵庫南部地震って名前になったんでしたっけ
04:29 (argrath) そういう感想をもった関西人は多いみたいですね
04:30 *miurahr quit (Ping timeout: 480 seconds)
04:30 (magepa) <-そのころ関東でいま関西
04:31 (magepa) はがゆい
04:31 (argrath) いやまあ、体験しないに越したことはないですよ…
04:32 (argrath) またか
04:33 (magepa) ぴょんぴょんしとる..
04:33 (magepa) よくわからんけどドミノみたいな何かなんでしょうかね
04:34 (argrath) ある程度そういうのは今までもあるみたいですね…
04:35 *Greg part ()
04:35 (magepa) どうしたものやら
04:36 (Tom_G3X) ドミノよ！、長野までで止まってくれ
04:37 (swima) 長野で止まってくれ、激しく同意です！
04:37 (swima) 自己紹介遅くなりました。twitterでは@tenyoxです。今はひたすら栗原市のマッピングをしています。
04:38 (magepa) 長野震度5.8...
04:38 *Say-no_ join #osm-ja 
04:38 (Tom_G3X) M5.8
04:38 (magepa) こんばんは。どうもです。
04:38 (magepa) M5.8か
04:39 (magepa) 12日04時32分頃        震度6弱        長野県栄村        M5.8
04:39 (magepa) はい。Mage Whopperです。さいきんは京都ばっかりかいてます。一日1000オブジェクトが地震で止まりました。
04:43 (tosihisa) すみません，irc はこのままで落ちます．
04:43 (tosihisa) おつかれさまでしたー
04:43 (magepa) おつかれさまです
04:43 (Tom_G3X) おつかれ
04:43 (Tom_G3X) 僕も、ちょっと仮眠します
04:43 (magepa) 長野余震
04:44 (magepa) 震源南下中
04:44 (Tom_G3X) 富士山の噴火とか、・・・ないよな・・・
04:44 (magepa) ないとおもいたい！
04:47 (tosihisa) ああ，ビッグな勘違い．やっぱちと寝よう．．．すみません勘違いでした＞三浦さん
05:23 *swima quit (Quit: http://www.mibbit.com ajax IRC Client)
05:36 *nori_u quit (Quit: http://www.mibbit.com ajax IRC Client)
05:41 *mapconcierge join #osm-ja
05:41 *miurahr join #osm-ja 
05:46 *makoto join #osm-ja
05:48 *miurahr_ join #osm-ja 
05:49 (miurahr_) 復帰です
05:49 *miurahr quit (Ping timeout: 480 seconds)
05:49 (miurahr_) 部屋の本棚が倒れていて、書斎に入れません。PCの前に行けない状況です。
05:55 (iwamatsu) む
05:55 *makoto quit (Quit: makoto)
05:55 (lori) gomen nasai...apologies for using english, but my japanese is very bad...we are creating the Crisis Commons wiki page and will include links to websites you are using that are very helpful.  weather, emergency services, whatever, we will post it for everyone.  you can msg me the links and i'll relay the list.
05:57 (iwamatsu) lori: No problem.  We thank for your activity!
05:58 (lori) arigatoo
05:59 (mapconcierge) 東大近くの知り合い宅で待機しながらOSMエディット中です。
05:59 (mapconcierge) 自宅がどうなっているかわかりません。
06:07 (iwaim_) いったん寝ます
06:30 *magepa quit (Quit: This computer has gone to sleep)
06:38 *miurahr_ quit (Ping timeout: 480 seconds)
06:47 *argrath quit (Quit: Leaving..)
06:50 *mr_sticky join #osm-ja 
06:51 *mr_sticky quit ()
07:20 *miurahr join #osm-ja
07:34 (miurahr) つながったかな。
07:35 (miurahr) IEからSUBMITボタンがでてないというレポートがあった。
07:43 (nkawa) おはようございます。始めてOSMを編集しています。いろいろ教えてください。
07:44 *wonderchook join #osm-ja 
07:44 (nkawa) 今、JOSMでノードを書いて、プロパティを何にするか、がよくわかりません。周りのデータは"highway, residential" になってます。
07:44 (nkawa) 普通の住宅地の道路はこれで良いのでしょうか？
07:45 (nkawa) upload できるのかな、と見てみると、「妥当性検証エラー」のところに「名前のないウェイ」と出ています。
07:45 (nkawa) この警告は無視してしまって良いのでしょうか？
07:53 (nkawa) タグ付けルールを見ると、
07:53 (nkawa) Bing からの転写の場合、highway , road としておいて、あとから修正する、で良いようですね。
07:54 (nkawa) 名前側がわかりません。
07:55 (nkawa) Bingの
07:55 *yasunari_yamasita join #osm-ja
07:55 (nkawa) ソースの詳細をつけるのは、画像の右下の(C)をみるのが良いのでしょうか？
08:01 (yasunari_yamasita) 皆様おはようございます。寝坊しました（汗。状況把握から再開します
08:12 (nkawa) とりあえず、わからないながら、upload してみました。ダメなら消せばいいんですよね？
08:13 (nkawa) OSMにアップロードしたあと、実際の地図に反映されるまで、時間がかかるのでしょうか？
08:13 (nkawa) （いろいろなことがわかりません。質問ばかりですみませｎ）
08:17 (yasunari_yamasita) 早いときでも数分、遅いときには反映に何時間もかかります
08:18 (nkawa) ありがとうございます。ちゃんと上げれたか心配だったので。
08:18 (nkawa) どのあたりをマッピングすると役に立つのか、というのがわかりませんが、
08:18 (nkawa) できるところからやるしかない、ということでしょうか？
08:19 (yasunari_yamasita) はい。できるところをできるだけ、無理せずにお願いします
08:24 (hal_sk) おはようございます
08:25 (mapconcierge) nkawaさん、住宅地は residential でOKです。
08:31 *wonderchook quit (Quit: Leaving.)
08:33 (yasunari_yamasita) おはようございます
08:37 (nkawa) ありがとうございます。residential 了解です。
08:39 (hal_sk) とりあえずモデレート頑張っていきます
08:42 *nori_u join #osm-ja
08:43 *tosseto join #osm-ja
08:44 *springmeyer join #osm-ja 
08:48 (tosseto) おはようございます
08:56 (nkawa) OSMって、例えば災害情報を一時的に別レイヤで載せるってのは良くないのでしょうか？
08:56 (nkawa) 陥没とか、通行止めとか、そういった情報を乗せたらより有用な気もするのですが。。。
08:57 (nkawa) 津波の影響範囲をマッピングするとか、ですかね。まったく初心者なので、とんちんかんなことを言ってるかもしれませんが。
09:01 (tosseto) nkawaさんおはようございます
09:02 (tosseto) 災害情報については,Haitiの時にはタグ付けを幾つかしているようです.http://openstreetmap.blogspot.com/2010/04/openstreetmap-response-to-haiti-quake-4.html
09:05 (nkawa) ありがとうございます。やはり、そういうタグがあるのですね。OSMjp でも、ぜひアナウンスして、ALOSno
09:06 (nkawa) の撮影を待つのが良いかと思います。問題はデータを挙げても、レンダリングがちゃんとされない点でしょうか？
09:09 (tosseto) レンダリングについても確か方法はあったはず.昨日見てたサイトを探しています.
09:11 *tosseto quit (Remote host closed the connection)
09:11 *tosseto join #osm-ja 
09:24 *caesium quit (Ping timeout: 480 seconds)
09:25 *kakugeta join #osm-ja 
09:31 (tosseto) おはようございます
09:35 (kakugeta) ALOSの画像と、被災前のマップを重ねて、助けるべき場所を明示するってことでいいのかな？
09:35 (kakugeta) あ、おはようございます。
09:44 *takafumi join #osm-ja 
09:44 (takafumi) おはようございます。
09:44 *megumeru join #osm-ja 
09:45 (megumeru) $B$*$O$h$&$4$6$$$^$9!#(B
09:45 *yasunari_yamasita quit (Ping timeout: 480 seconds)
09:49 (nkawa) Twitter に
09:49 (nkawa)  #OSMjpで、連続ツィートしてみました。何か誤りがあれば、お知らせください。
09:51 (tosseto) 河口さん、初めまして。どうもありがとうございます。
09:51 (help) http://openstreetmap.jp/drupal6/?q=node/17 を作成しました
09:52 (help) 当方のやり方をメモしただけなのでより良い方法がありましたら改良ヨロシクです
09:58 (tosseto) 大学に移動します
09:58 *tosseto quit (Remote host closed the connection)
09:59 (iwaim_) http://twitter.com/KenTamagawa/status/46247045715066880
09:59 (iwaim_) 地震の災害救援情報のWebサイトなど、サービスを継続するためにサーバーやITリソースが必要な方、ご連絡ください。AWSが出来る限りサポートします。 #jawsug
09:59 (iwaim_) これ、使わせてもらった方がいいかもしれないですね
10:03 (megumeru) $BJ8;z2=$1$GFI$a$J$$!&!&!&!#(B
10:07 (iwaim_) watashi no comment?
10:08 (megumeru) $B$O$$(B
10:08 (iwaim_) thanks
10:08 (iwaim_) URL niaru mono mitekudasai :-)
10:08 (iwaim_) or ML
10:09 *mapconcierge quit (Quit: http://www.mibbit.com ajax IRC Client)
10:10 (megumeru) $B>5CN$$$?$7$^$7$?(B
10:10 (megumeru) $B:#%(%G%#%?$r$I$&$K$+$7$F5/F0$7$?$$$N$G$9$,!"$h$/$o$+$i$:!&!&!&(B
10:11 *nkawa quit (Quit: http://www.mibbit.com ajax IRC Client)
10:12 (iwaim_) sorry, i don't know
10:12 (megumeru) $B$"$"!"2?$H$+$J$j$^$7$?!#(B
10:13 (megumeru) Tahnkyou
10:17 *ndoiron join #osm-ja 
10:29 *ndoiron quit (Quit: http://www.mibbit.com ajax IRC Client)
10:30 (hal_sk) ありがとうございます。ツイッターで支援依頼しておきました。>iwaim_
10:30 *yasunari_yamasita join #osm-ja 
10:32 (karida) hal_sk: let me know when you the Ushahidi "clone" is setup on the server. Then I can add it to the automated backup.
10:34 (hal_sk) とりあえずUshahidiのセットアップします
10:37 *wonderchook join #osm-ja 
10:42 *tosseto join #osm-ja 
10:42 (tosseto) 大学到着しました
10:44 (Tom_G3X) tomです。復帰します
10:45 (hal_sk) おおTomさん！
10:46 (hal_sk) AWSの玉川さんに、支援メール投げました
10:49 (tosseto) 関さん，Tomさん，皆さん大変お疲れ様です．
10:49 *_iwaim_ join #osm-ja 
10:50 (hal_sk) おつかれさまです！
10:52 (hal_sk) 玉川さんと連絡とれました！
10:53 (hal_sk) AWSに新規にアカウントを作って利用を開始し、そこでの利用はあとでリファンドしていただく手順になります
10:54 *bontakun join #osm-ja 
10:55 (hal_sk) I'm going to switch to the AWS. Please send me your public key. > karida
10:56 (tosseto) ushahidiに福島原発からの半径をUpしましたが，ちょっとfillやカラーリングなどの作業が必要かもです．岩崎さんに多謝．
10:56 (tosseto) @hachimitu @hal_sk @tosseto かなり適当ですが、第一原発から10kmと第二原発から3kmの範囲のkmlファイルを作りました。一応、参考までに。　http://bit.ly/dWlnSc
11:02 (_iwaim_) http://osmemo.wizu.jp/admin/reports/edit/110
11:02 *nkawa join #osm-ja
11:03 (_iwaim_) honyaku please / これの翻訳お願いします
11:06 *megumeru quit (Quit: Leaving...)
11:06 (tosseto) 下手くそな訳ですがやりました　＜いわいさん
11:06 *megumeru join #osm-ja 
11:07 (megumeru) こんにちは。
11:07 (megumeru) 入りなおしました
11:07 (tosseto) こんにちは　＞megumeruさん
11:07 (_iwaim_) thanks!
11:08 (_iwaim_) あ、でも
11:08 (megumeru) なんか、ポータックうまく使えなくて、何したらいいのか
11:08 (_iwaim_) ちょっと違うんちゃうかなー
11:08 (_iwaim_) 情報提供じゃなくて通訳っぽいから。
11:08 (megumeru) さっきはLimeChatでした
11:08 (tosseto) ごめんなさい，訂正お願いします　＞いわいさん
11:08 (_iwaim_) 日本人と韓国人がいるけど言葉通じなくて困る→電話で仲介
11:08 (_iwaim_) じゃないかな
11:09 (megumeru) 気仙沼付近をBingで表示してるんだけど・・・。
11:09 (_iwaim_) ごめんなさい。いったん消しました。
11:09 (tosseto) 余計なことしました．別のことしますね．＞いわいさん
11:11 *caesium join #osm-ja
11:11 (megumeru) こんにちは。
11:11 (_iwaim_) いえ、余計ではないです。私も無理だから丸投げしたわけで。
11:12 (_iwaim_) ま、気にせずに。
11:12 *caesium quit ()
11:12 *caesium join #osm-ja
11:12 (tosseto) がんばりましょう！
11:12 (caesium) おはようございます
11:12 (tosseto) おはようございます．
11:13 (megumeru) おはようございますー。
11:13 (megumeru) 初心者なのでわからないことだらけだ・・・。
11:13 *tosseto quit (Read error: Connection reset by peer)
11:13 *nkawa quit (Quit: http://www.mibbit.com ajax IRC Client)
11:13 *tosseto join #osm-ja 
11:14 (megumeru) まだ「だいち（ALOSS)はデータこないのかな
11:14 (caesium) Twitterで http://sinsai.info/ について30分毎に自動ツイートするようにしました
11:14 (tosseto) Ushahidiの方ですが，Twitterのレポート分が10000超えてますね…
11:14 (tosseto) 自動Tweetありがとうございます　＞caesium
11:15 (Tom_G3X) twitter重複削除とか、今、してますが・・・追いつかない
11:15 *nkawa join #osm-ja 
11:15 (tosseto) ALOSSはまだでしょうかね．リリースあればTwitterにもでてると思います　＞megumeru
11:15 (caesium) なにかできることがあればお手伝いします
11:16 (tosseto) 重複削除は，やってみます　＞Tomさん
11:16 (megumeru) 承知いたしました
11:16 (megumeru) 今できることはなんでしょうか。
11:16 (megumeru) というか、ポータックは間違ったところ選んだら閲覧に戻すしかないのかしら
11:16 *tosseto quit (Read error: Connection reset by peer)
11:17 *tosseto join #osm-ja
11:18 (tosseto) うちの回線ではIRCは定期的に切断されるっぽいですね．別回線用意します．一旦退出します．
11:18 *tosseto quit ()
11:21 (hal_sk) モデレータ増やした方がよさそうですね
11:24 (_iwaim_) チェックしているハッシュタグ、削りますか？
11:24 (_iwaim_) MLにかきましたが。
11:24 (Tom_G3X) OSCのMLにモデレータの要請しましょうか？
11:25 (_iwaim_) 規模とか用途とかわからんので私にはなんとも……
11:25 (_iwaim_) プレスリリース的なのをかいて
11:25 (_iwaim_) 各報道機関に送りつける方が
11:25 (_iwaim_) 効果的な気はする
11:26 *tosseto join #osm-ja 
11:27 (_iwaim_) まあ、いろんな方法をとったほうがいい気がするけど。
11:28 (_iwaim_) janog方面で帯域の話がでてるな
11:30 (tosihisa) おはようございます．
11:30 (megumeru) おはようございますー。
11:31 (takafumi) おはようございます。
11:31 (tosseto) いつでもNAVIさん,Mapionさんも出来ることがあればとおっしゃって頂いています.
11:33 (Tom_G3X) ushahidi のモデレータの要請をOSCのMLにしようと思いますが、どうでしょう？
11:34 (tosihisa) 私は異論ありません＞モデレータ要請
11:34 (tosihisa) 多分，この土日は，今のマンパワーでも回ると思いますが
11:34 (tosihisa) 月曜日になれば，会社／学校もあるので
11:35 (tosihisa) 少なくともこの土日よりは更新の頻度が下がるかも知れない・・・と考えています．
11:36 (Tom_G3X) 了解。そうですか。少し様子をみてから、要請を投げることにします
11:36 (tosseto) 私も異論なしです.あと,情報ソースを提示の上でレポートを書いて頂けるよう募集しても良いと思います.twitterのフィルタリングは大変ですので
11:37 *bontakun quit (Remote host closed the connection)
11:39 *hal_sk_ join #osm-ja
11:40 (tosihisa) はい．情報ソースをつけてと言うのと合わせてお願い出来ればと思います＞募集
11:42 (help) 重要度に比して足りないリソースはナンでしょうか？
11:42 (help) JOSM でプチプチしてるんですが、ちょっと飽きてきたので…
11:42 *hal_sk quit (Ping timeout: 480 seconds)
11:43 (_iwaim_) 方針決めたりして仕切る人
11:43 (help) できるかどうかはともかく、どこかに優先度と必要人的リソースと足りている度があるといいかも
11:44 (tosihisa) 個人的には，英訳かなと・・・OSM 的にも国内で災害にあわれた外国の方向けににも．．．
11:45 (Tom_G3X) 海外向けへの情報が不足してるように思います
11:46 (tosihisa) 同感です＞海外向けへの情報
11:46 *hal_sk_ quit (Read error: Connection reset by peer)
11:48 (tosihisa) twitter のタグは，確かに絞ったほうが良さそう．
11:48 (tosihisa) 個人的には，
11:49 (tosihisa) 広めにお知らせしたい内容→twitter 以外でキャッチアップ
11:49 (tosihisa) 安否確認→ twitter の #anpi タグでキャッチアップ
11:49 (Say-no) 遅くなりました。復帰しました。これから追いつきます。
11:49 (tosihisa) できるとエエんかなぁと思っています．
11:50 (Say-no) Hurricaneさんからもお返事来ました。努力してくれるそうです。
11:51 (tosihisa) twitter を見ていると，安否確認＆救助要請が多くて，これは twitter でしかキャッチアップできなさそうに思っています．
11:51 (help) 「優先度と必要人的リソースと足りている度」について、http://wiki.openstreetmap.org/wiki/2011_Sendai_earthquake_and_tsunami と http://openstreetmap.jp/drupal6/ のどっちに書くのが適当だと思われますか？
11:52 (tosihisa) 個人的には，どっちかに書いて，片方はリンクを貼るのが最良かと・・・
11:52 *nkawa quit (Quit: http://www.mibbit.com ajax IRC Client)
11:53 (help) おー、それは思いつきませんでした。それでいきましょう。
11:53 (Tom_G3X) wiki は作戦本部的？　osm.jp は、広報か？
11:53 (tosseto) そうですね.drupalが適当かなと思います.　orgにはリンクで
11:53 (tosihisa) 両方はシステムが違うので，それぞれの長所を補わせれば良いかなぁと思っています．
11:53 (tosihisa) org は，世界中の人が見るので，
11:54 (tosihisa) なるべく org に集中させた方が良いだろうと思っています．
11:54 (tosihisa) しかし，先に書いたとおり，システムが違うので，それぞれの長所を補わせればよいかと．．．
11:55 (Tom_G3X) そうですね＞システムの違い
11:55 (_iwaim_) 一般に使われているハッシュタグは、人間が目視チェックの方が効率的だとは思います。
11:55 *hal_sk join #osm-ja
11:55 (tosihisa) 同感です＞目視チェック
11:56 (tosihisa) 後，OSM で，メールでしか流れて無さそうな情報は，なるべく拾って org か drupal6 かに転記は必要かなと．．．
11:56 (tosihisa) ああ，もちろん，公開と言うか，Web 化すべき情報を我々が精査して．と言う前提です．
11:57 (hal_sk) こんな時に、ネットワークの調子が悪くなってきた。。。
11:57 *Say-no_Mac join #osm-ja 
11:59 (tosihisa) org→世界中の OSMer を含んだ(地図を書くための)情報／drupal6→日本語による（地図を書くための）情報／sinsai.info→震災被害の情報提供
12:00 (tosihisa) あたりでしょうか．．．．違うかも．．．
12:00 *miurahr_ join #osm-ja
12:00 (karida) What about renaming "drupal6" to "cms" or so? Too late?
12:01 (Tom_G3X) マッピングに慣れた人材を、マッピングに集中できるよう、調整が必要ですよね
12:01 *variable_ join #osm-ja
12:01 (karida) http://openstreetmap.jp/drupal6 sounds like a test site ;-)
12:01 (variable_) hi what is situation in japan?
12:02 (karida) variable: In one sentence?
12:02 (variable_) is there radioactive leaks ?
12:03 (help) たたき台を一応つくってみました、改良希望 http://openstreetmap.jp/drupal6/?q=node/18
12:03 (karida) probably nobody knows better than what is officially in the news
12:04 (help) radioactive : 1000 times of normal at central controll room, in TV news
12:05 (miurahr_) Just waked now...., yes drupal6 is test site and under construction but eventually go to front.
12:05 (variable_) i'm not from japan, but what is happening in your country is disaster :( 
12:06 *Say-no_Mac quit (Remote host closed the connection)
12:06 (karida) "8 ways to help Japan after massive earthquake"
12:06 (karida) http://news.yahoo.com/s/ac/20110312/bs_ac/8044522_8_ways_to_help_japan_after_massive_earthquake
12:07 (karida) They forgot to mention OSM
12:10 *bontakun join #osm-ja 
12:13 (variable_) i hope this madness will stop
12:13 *Say-no_Mac join #osm-ja
12:14 (hal_sk) 拡散されているので sinsai.info に最初に訪れる人が多くなると思います。そこから、http://openstreetmap.jp/drupal6/ の記事へ動線をつくれないでしょうか
12:14 *bontakun quit ()
12:15 (hal_sk) sinsai.info に新しくページを作る感じで
12:17 (tosihisa) http://sinsai.info/ のトップに，リンクではないですが動線を貼りました＞drupal6
12:19 (tosihisa) http://osmemo.wizu.jp/page/index/1
12:20 *wonderchook quit (Quit: Leaving.)
12:20 (tosihisa) ↑ここを有効利用したいのですがどう使うと良いか考え中．．．
12:26 (takafumi) JOSMで作業しているんですが、競合の頻度を下げる為にこまめにアップロードしたほうがいいんでしょうか？それともある程度まとまったほうがいいですか？
12:26 (Tom_G3X) こまめにUPしたほうが良いと思います
12:27 (takafumi) 了解です。ありがとうございます。
12:27 (hal_sk) Amazon EC2 のマネジメントコンソールが開きません。。。
12:27 (Tom_G3X) http://wiki.openstreetmap.org/wiki/LiveMapViewer  これでモニターしてると、競合を減らせるかもです
12:28 (hal_sk) こちらのネットワークの問題かもしれないので、一旦再起動してみます
12:28 (karida) hal_sk: don't you think it's a lot faster to setup the site on the DE server?
12:29 *hal_sk_ join #osm-ja
12:30 *hal_sk quit (Read error: Connection reset by peer)
12:30 *hal_sk_ quit (Read error: Connection reset by peer)

12:41 *hal_sk join #osm-ja 
12:42 (hal_sk) ネットワーク再起動したら使えるようになりました＞EC2コンソール
12:46 *miurahr_ quit (Ping timeout: 480 seconds)
12:48 *yasunari_yamasita quit (Ping timeout: 480 seconds)
12:52 (hal_sk) Maybe. but If we can use EC2, the server will scale. >don't you think it's a lot faster to setup the site on the DE server?
12:57 *springmeyer quit (Quit: springmeyer)
12:59 (karida) hal_sk: you're right with scalability, but I'm just thinking about the time
12:59 (karida) Currently the DE server is more or less idle and I can increase RAM a lot.
13:02 (_iwaim_) tohokueq,miyagi
13:02 (Tom_G3X) 八戸もBing使えると思います
13:02 (_iwaim_) ハッシュタグはこれだけにした。
13:06 (tosihisa) GJ!!
13:06 (tosihisa) これで精査しやすくなるかな．
13:07 *yasunari_yamasita join #osm-ja 
13:07 *nkawa join #osm-ja 
13:10 (hal_sk) karida: I thought I don't need much time to setup, but actually I've needed much time and still unclear things to setup.
13:10 *iwamatsu quit (Quit: Tiarra 0.1: SIGTERM received; exit)
13:10 (tosihisa) 少し席を外します
13:11 (hal_sk) Maybe using our server is better now. I'll set up AWS after that.
13:14 (Say-no) hal_skさん頑張ってください!!よろしくお願い致します!!
13:19 (tosihisa) http://sinsai.info/ に，福島原発からの距離がレイヤー追加されましたね．
13:22 (tosihisa) 福島原発辺り，OSM 作図はどうだろう？
13:23 *yasunari0 join #osm-ja 
13:25 *yasunari1 join #osm-ja 
13:26 (megumeru) 戻りました
13:28 (miurahr) Drupal６のURL変えます。　リダイレクトさせればいいですね。
13:28 (miurahr) osm.jp/crisis とかにしますか
13:29 (Tom_G3X) 福島原発周辺はBing 無いですね
13:29 *yasunari_yamasita quit (Ping timeout: 480 seconds)
13:31 *yasunari0 quit (Ping timeout: 480 seconds)
13:31 *kayakaya join #osm-ja
13:32 *imakihi join #osm-ja 
13:32 *nkawa_ join #osm-ja 
13:33 (imakihi) こんにちは
13:33 (imakihi) どなたかいますか？
13:33 (_iwaim_) こんにちは
13:34 (imakihi) こんにちは
13:34 (imakihi) シアトルに住んでる今木と申します
13:34 (imakihi) 仙台出身です
13:34 (imakihi) あまりIRCには慣れていないのですが
13:34 (_iwaim_) はい
13:35 (imakihi) OSGeoJでボランティアを申し出たらここに行くようにいわれました
13:35 (imakihi) GISが専門です
13:35 (imakihi) NOAAで働いています
13:35 (imakihi) 何かできますか？
13:35 (_iwaim_) おー
13:35 *nkawa_ quit ()
13:36 (Say-no) 今木さん!!ありがとうございます!!
13:36 (_iwaim_) すみません。どういうことをすれば一番今木さんの力が活かせるのか私にはわかりません。
13:36 *nkawa quit (Quit: http://www.mibbit.com ajax IRC Client)
13:36 (_iwaim_) のでまかせた
13:36 (Say-no) OSMの編集はされたことありますか?
13:36 (imakihi) おー清野さん
13:36 (_iwaim_) ＞Say-noさん
13:36 (imakihi) いたずら程度ですが
13:37 *nkawa join #osm-ja 
13:37 (imakihi) QGISのアドインで少しやりました
13:37 (imakihi) 友達がプラグインを作ったみたいで
13:37 (Say-no) もし可能であれば、http://openstreetmap.jp/drupal6/ こちらを参考にして、
13:37 (Say-no) 地図が足りていない範囲をガンガン描いていただけると、
13:38 (Say-no) 各種情報共有サイトの背景地図がより詳細になって、より多くの人の役に立てると思います。
13:38 (imakihi) ちょっと見てみますね。基本的にはベース地図の充実が必要ということですね
13:39 (Say-no) 現場に向かう救援者がダウンロードして使う場合でもより詳しい地図があったたほうが(情報が被災で変わっているかもしれないとはいえ)役に立てると思います。
13:39 (Say-no) よろしくお願い致します。
13:39 (imakihi) 了解です。仲間内にも連絡してみます
13:39 (Say-no) もしBingの空中写真でトレースすることを考えている場合は、
13:39 (Say-no) http://openstreetmap.jp/drupal6/?q=node/6
13:39 (Say-no) こちらのURIでその提供範囲を確認して下さい。
13:40 (Say-no) まだ日本は、高精細な画像の提供されている範囲が限定されています
13:40 (Say-no) ただ、現在提供されている範囲でも、被害の大きいところはあります。
13:40 (Say-no) また、高精細な画像の提供範囲は今後拡大されると思います。
13:41 (Say-no) 各団体が協力に奔走してくださっていますので。
13:41 (Say-no) ALOSの画像などが現在準備中と聞いております。
13:42 (Say-no) とりあえず、Twitterでもつぶやいたのですが、http://twitter.com/#!/Say_no/status/46422814282092545
13:42 (Say-no) 宮城県名取市は、http://www.openstreetmap.org/browse/way/59453038 仙台東部有料道路より東側のエリアが津波の被害がひどいそうです。ココはBing詳細エリアです。ココを集中してマッピングしましょう!!
13:42 (imakihi) OKです
13:47 (Say-no) 編集衝突はお気をつけ下さい!!http://wiki.openstreetmap.org/wiki/LiveMapViewer こちらでご確認を!!
13:47 (Say-no) あ、あと今木さんは海外の方へのコネクションが多いでしょうし、英語が得意でしょうから、英訳作業を手伝っていただけると助かります。
13:48 (Say-no) http://wiki.openstreetmap.org/wiki/2011_Sendai_earthquake_and_tsunami こちらのページは現在日本語と英語の情報が相互にばらばらになっています。
13:48 (Say-no) こちらをそれぞれ訳して追記していただけると助かります。
13:49 (Say-no) また、#osm のチャンネルに協力を申し出てくれている方がいらっしゃいますので、その方々に情報提供していただけてもありがたいです!!。皆さんで協力してお願いします!!
13:50 (imakihi) 了解です。できることからやっていきます。
13:50 (imakihi) Say-noさんもご苦労様です
13:57 (megumeru) やっと勝手が分かってきました
13:58 (Say-no) わからないことがあればお気軽にお問い合わせ下さい!!QGISからOSM編集する方法のガイドを公開してくださるのも良いかもしれません!!エディタはそれぞれの人に使いやすいものがあるでしょうし!!
13:58 (Say-no) アメリカはこれから深夜帯でしょうから、無理しないでくださいね!!>今木さん
14:00 (_iwaim_) 重複を消すプログラム書く方がいい気もしてきた＜sinsai.info
14:00 (tosihisa) 書けそう？
14:01 (_iwaim_) 原理的にはかけそう
14:01 (Say-no) ちょっと席を外します。
14:01 (_iwaim_) 簡単な気もするけど。
14:02 (_iwaim_) しかし、過去のものに付き合うよりも今の情報を書いていったほうがいい気もする
14:03 (tosihisa) そうですね
14:03 *magepa join #osm-ja 
14:03 (_iwaim_) ある程度収束してから次の何かのために書くのがいいのかな
14:04 (miurahr) http://www.venturenow.jp/column/ogawa/20101021008893.html　ni
14:04 (miurahr) ハイチにおいて、どんなふうに運営するかについての論評を見つけた。
14:04 (miurahr) http://ushahidi.com/get-involved/resources/
14:04 (_iwaim_) すばらしい
14:04 (miurahr) Ushahidiの運営について、これを見ろという文書がたくさん...
14:05 (miurahr) ２．可視化するメリットを明確化し、既存の枠組みやパートナーとの連携を図ろう
14:05 (_iwaim_) ご飯たべながらみよう
14:05 (miurahr) という点、既存の枠組み、パートナー探し重要だけど、僕らはチャネルがすくない。
14:06 (miurahr) NHKの安否確認とか、赤十字とか、既存の枠組みとの連携を模索しないと。
14:06 (miurahr) 赤十字の問い合わせ先メールには、活動との連携について申し入れをしましたが、
14:06 (miurahr) どうなるか不明。
14:07 (miurahr) ３．誰が閲覧者なのか？誰に、このサイトを利用して欲しいのか？
14:07 (miurahr) これを考えると、携帯からのアクセスが多いだろうし、そこへの配慮はできていない。
14:07 (miurahr) 携帯から情報提供するならば、携帯メールが便利だろうか。
14:08 (miurahr) メールによる受付ができるほうがいいのだろうか。Twitterのほうがいいのだろうか。
14:09 (_iwaim_) メールによる受付は機能はありそう
14:10 (_iwaim_) 設定はされてるっぽい気がする
14:13 (miurahr) 機能はあるけど、それをモデレータが捌ききれるか？というかんじだな。
14:13 (miurahr) でも、みんなが必要なことはなにか、→それを実現するにはどうするか、という発想がだいじ
14:14 (miurahr) なので、モデレータをするボランティアを増やすことだ。
14:15 (_iwaim_) OSM Japanでプレスリリース的なものをつくっていろいろ送るのはどうでしょうか
14:15 (hal_sk) ちょっと家族対応で落ちます
14:15 (miurahr) それいいですね。
14:15 (miurahr) 余震
14:15 (miurahr) 。。。
14:16 (help) melt down?
14:17 (_iwaim_) 福島第一原発一号機か……
14:18 (miurahr) osm.jp/crisis でも、 osm.jp/drupal6 でも行けるようになりました。
14:20 (miurahr) irc log今朝１時からの分を共有してもらえる人いますか。
14:21 (miurahr) http://openstreetmap.jp/crisis/?q=node/12
14:21 (miurahr) これは午前一時までの分。
14:24 (_iwaim_) あとでだせます
14:24 (_iwaim_) たぶん
14:30 (Tom_G3X) EU方面、そろそろ朝かな。マッピングのヘルプ要請した方が、よくない？
14:31 (magepa) 昨日のよるの時点で、要請でてないし、手伝うのどーよっていって議論してましたよ彼ら
14:33 (Tom_G3X) まず、osm-talkに要請すべきでは？
14:33 (magepa) まず-jaにだすべき
14:33 (magepa) リンクするように
14:34 (Tom_G3X) -ja まだ、出してなかったのか　orz
14:34 (magepa) 英語で見た覚えもないですね
14:38 (_iwaim_) [OSM-ja] ホンダが通行実績情報?をKMZファイルで公?開
14:39 (_iwaim_) MLにきた
14:39 (_iwaim_) これはすばらしい
14:39 (_iwaim_) のでどなたかお任せします
14:39 (Tom_G3X) KML マッシュアップできるんでしたっけ？
14:39 (karida) hal_sk: added you to sudoer list
14:40 (magepa) 機能はあるけどサーバがセットアップできてない、とか
14:40 (Tom_G3X) そか
14:40 (tosseto) 復帰しました
14:40 (tosseto) Ushahibiにインポート開始します.
14:41 (tosseto) ushahidiの方にはレイヤで表示できるのでチャレンジしてみます.>ホンダ
14:44 (yasunari1) ライセンスを確認下さい > tosseto
14:47 (tosseto) Hondaインターナビ会員の車輌情報のようですね(通行実績情報).再頒布は出来ないのかな…
14:48 (iwaim_) http://dl.dropbox.com/u/5110926/tmp/osm-ja/2011.03.12.txt
14:48 (_iwaim_) 1時すぎぐらいからのIRCログです＞miurahrさん
14:52 (magepa) ダメもとでHONDAについったーなげてみました
14:53 (magepa) 3/11にできたアカウントなのか
14:54 (hal_sk) karida:thank you!
14:56 (tosseto) 確認のためにKMZ開いてみましたが,情報量が多いのでかなり重いです.
14:57 (magepa) .osmにトレースとかできないですかね。QGISかJOSMでできそうな
14:59 (magepa) google earthひらきた
14:59 (miurahr) drupalのほうのURLおよびテーマ画面構成を変更しました。
14:59 (miurahr) また、Earthquake Tohoku area in Japan 3/11サイトへのリンクを作成していますが、
14:59 (miurahr) このサイトをどう呼ぶか、愛称 Nicknameがほしい。
15:00 (tosseto) KMZ形式なので解凍すると42MBですね.QGISで開いてみています,いま　<HondaのKMZ
15:00 (_iwaim_) sinsai.info ではだめですかね
15:00 (miurahr) 分かりやすいですね。
15:00 (_iwaim_) shi じゃなくて si
15:00 (miurahr) shinsai.infoもドメインとったほうがいいかな。とれるかな。
15:00 (miurahr) 東北沖震災情報サイト　sinsai.info
15:01 (_iwaim_) というあたりも周知しないとだめだからシンプルにそのままがいいかな、と
15:01 (_iwaim_) そうですね。前につけてそれがいと思います。
15:02 *dkastl join #osm-ja 
15:02 (miurahr) サイトのタイトル部分にも、それ入れて欲しいっす
15:02 (miurahr) ushahidiでつくった sinsai.info そのトップタイトルバーに「東北沖震災情報サイト　sinsai.info」といれてほしい！
15:03 *dkastl part ()
15:04 (_iwaim_) 小江戸らぐのMLではとちゃんが手伝うようなことをかいてたのでとりあえずアカウントを勝手につくったw
15:04 (miurahr) サイトトップに目立つように入れました！
15:06 (megumeru) ツールの使い方が分かってきたのですが、解説作ったほうがいいですか？
15:06 (tosseto) Ushahibiのトップページの表示入れました.　>miurahr
15:06 (_iwaim_) http://osmemo.wizu.jp/ 手を入れた
15:07 (miurahr) 誰向けの解説ですか？＞Megumeru
15:07 (_iwaim_) ＞東北沖震災情報サイト sinsai.info
15:07 (miurahr) モデレータ向け、情報提供者むけなど
15:07 (tosseto) ありがとうございました　>iwaim
15:08 (miurahr) Googleの検索、東北沖震災　でトップページに来ないぞ　どっちも
15:08 (miurahr) SEOするっす
15:09 (miurahr) みなさんのBlogなどで、東北沖震災　sinsai.info　震災情報サイトのキーワード強化お願いします。
15:09 (Say-no) 戻りました。IRCログは昨日の21:18以降のもの全て保存しております。ISP情報など削除してまた更新しておきます。
15:09 (Tom_G3X) osm-talk に日本の地震関連のスレが無いのが気になります
15:10 (takafumi) 実際にページが表示されたときにアドレスが osmemo.wizu.jp になるのは仕様ですか？
15:10 (_iwaim_) 仕様。
15:11 (_iwaim_) いまAWSに移動作業中なのでしばらくはそのままにするのが混乱なくていいと思ってます
15:11 (Say-no) ホンダ、ライセンス確認、古橋さんがMLで確認とってくれています。
15:13 *dkastl join #osm-ja 
15:13 (megumeru) 初心者向けです。＞miurahr
15:14 (Say-no) HOTのMLには投稿があるので、この後につなげるといいかもしれません。 http://lists.openstreetmap.org/pipermail/hot/2011-March/000604.html >Tomさん
15:16 *imakihi quit ()
15:16 (help) 朝から Bing + JOSM でマッピングしてます
15:16 (help) 内陸の家の多そうなところと、人口は少なそうだけど海岸方面とどっちを優先にマッピングしたほうがいいと思いますか？
15:16 (Say-no) OSM-Talkにも投稿したいですね。購読はしているので投稿はできますが…どこを参照用URIとして支持するか…それともロバートさんとかHurricaneさん経由で投稿してもらったほうがいいかな…。
15:17 (Say-no) 編集衝突しなそうなところから個人の判断でやったらいいと思います。 >helpさん
15:17 *dkastl quit (Remote host closed the connection)
15:18 (help) LiveEditMapViewer では大きくは三方面に分かれているようです。
15:18 (help) とりあえず当方は衝突なさそうです。
15:18 (help) 海岸方面行きましょう
15:20 (megumeru) 朝からBing＋Potlatchで悪戦苦闘して、ようやく今MAPPINGできてます
15:22 (Say-no) どっかで、誰が今編集しているか宣言できるサイトがあったら便利だけど…Liveで見るのが一番楽か…。
15:22 *dkastl join #osm-ja 
15:23 (magepa) とりあえずここで言うのがいいかと
15:23 (magepa) それかどれかに@飛ばす
15:23 (Tom_G3X) Ｌｉｖｅだと、状況つかみやすいです
15:23 (_iwaim_) IRC、無理ならついったーでハッシュタグきめる
15:23 (_iwaim_) というのはどうかな
15:23 (Tom_G3X) ドイツのマッパーが目覚める時間帯です
15:24 *dkastl part ()
15:25 (_iwaim_) そろそろ食料かい出せたらかったり、ご飯たべたりするので離脱
15:25 (tosseto) Ushahidiにサイト連携としてdrupal入れたいんだけど,一覧には他のUshahidiサイトって出てしまうな…どうしましょう
15:25 (magepa) Tomさんのメールを英語に直すの開始
15:25 (tosseto) iwaiさんお疲れ様です
15:26 (Tom_G3X) お願いします
15:26 (_iwaim_) はとちゃんが sinsai.info のアカウントの話してきたら岩井がDM送ってると伝えるか
15:26 (_iwaim_) パスワード新規に設定しなおしてください
15:26 (_iwaim_) ではいったん失礼します。IRCはいったままだけど。
15:27 (Say-no) ハッシュタグは#osmjpでとりあえずいいのではないでしょうか。
15:27 (magepa) それはあとでこまります
15:27 (Say-no) magepaさん英訳ありがとうございます。
15:27 (Say-no) ハッシュタグどなたか決めていただければ告知します。
15:27 (Say-no) 僕はなんでもいいです。
15:28 (Say-no) 今、IRCの整形中。終了し次第、http://openstreetmap.jp/drupal6/node/12 に追記します。
15:28 *Takuma_A join #osm-ja 
15:28 *osmj-log join #osm-ja 
15:29 (karida) try to log this channel
15:29 (Takuma_A) OpenStreetMapJapan$B$O$3$3$G$9$+!)(B
15:29 (Tom_G3X) はい、そうです
15:31 *bugweiser join #osm-ja
15:31 (_iwaim_) 誰も決めないなら「 #osmeqjp 」でにしましょう。＞Say-noさん
15:31 (_iwaim_) （まだいた
15:32 *osmj-log part ()
15:32 (Say-no) 了解です。>iwaimさん(そういえばお名前間違えていました。すみません。)
15:33 *osmj-log join #osm-ja 
15:34 (_iwaim_) ハンドルなんてかざりですよｗ
15:34 (yasunari1) Takuma_A さん、エンコーディングを UTF-8 でお願いします
15:34 *osmj-log part ()
15:35 (Takuma_A) misconversion!! try to resetting.
15:35 *Takuma_A quit (Quit: Leaving...)
15:35 *Takuma_A join #osm-ja 
15:35 (miurahr) Google Webmaster toolにosm.jp sinsai.infoを追加しました。クロールしに来るはず。
15:36 (Say-no) Twitterで先程のハッシュタグ #osmeqjp の告知を、#osmjp をつけてつぶやきました。公式リツイートでお願いします。(非公式RTは色々と弊害があるみたいなので)
15:37 (Say-no) 文字コードでミスる方が多いですね。目立つように書いた方がいいですかね?
15:38 (magepa) topicいじれるんですかね
15:38 (magepa) opないとむりか
15:39 (magepa) tatataさん最近見ないからなぁ
15:39 (magepa) email設定されてないや
15:40 (magepa) [15:40]  -NickServ-    Last quit time: Tue 02 Feb 2010 23:40:07 +0000 (1y 1m 6d 07:00:33 ago)
15:41 (magepa) 一年すぎとる。。。
15:42 *swima join #osm-ja
15:43 (Takuma_A) 大学生でも何かできる事ってないですか？
15:46 (magepa) 今なら春休みなので現地に行く
15:46 (_iwaim_) 現地はまだ早い
15:46 (Say-no) 現地には今は行くなってみんな言ってます。
15:46 (nkawa) やはり、地図を作るのがベースでしょうね。 > Takuma_A さん。 JOSM でもなんでも。
15:46 (_iwaim_) 受け入れ体制ないし
15:46 (_iwaim_) 交通は救援物資系優先がいい
15:46 (nkawa) 情報の集約・整理をきっちりやるのが大事だと思います。
15:46 (magepa) いまから準備しないと、1週間後にはつけないですよ
15:47 (nkawa) sinsai.info の情報更新は間に合っているのでしょうか？（モデレータ？）
15:47 (_iwaim_) 1週間後に受け入れれると考えるのは甘いんじゃないかなー
15:47 (Say-no) 昨日今日で参加された方同士で、編集時に初心者的につまずくポイントを解説するガイドをどなたかつくっていただけるとめちゃめちゃありがたいと思います!!http://openstreetmap.jp/drupal6 ここに!!
15:47 *Koji_Y join #osm-ja 
15:47 (tosseto) 直接投稿されるレポートの分は大体OKです(いま,1件作業中).Twitterの整理はまだです
15:47 (_iwaim_) テレビとかラジオとかtwitterとかみながら
15:48 (megumeru) 現地入りは混乱していて、じゃまになるだけです。今回の場合は阪神淡路のクラスとは違うので、今はここでやれることをやるべきかと
15:48 (magepa) 阪神いくのに、当日から準備始めて、現地入りで北の2/10でした 
15:48 (Say-no) おぉ!!NHKでNOAAの話しとる!!今木さん!!
15:48 (magepa) うん。とりあえず情報収集が一番
15:48 (_iwaim_) レポートをあげていただくのがいいと思います＞ Takuma_Aさん
15:49 (_iwaim_) あと、 iwaim.sub@gmail.com にメールいただければ、sinsai.infoにアカウントつくってモデレータの権限付与します。
15:49 *bugweiser quit (Quit: http://www.mibbit.com ajax IRC Client)
15:49 (nkawa) 今、ちゃんと安全な避難所のマップとか、どの程度まともに情報があるのか。。。
15:50 *lurdan join #osm-ja 
15:50 (yasunari1) OSM を知らない方にマッピングは難しいでしょうし、「何か」と言われたら英訳をお願いしてみてはいかがでしょうか
15:50 (Say-no) 英訳賛成!!お、lurdanさんログイン!!
15:51 (magepa) それは良いですね
15:51 (Takuma_A) 英訳できる範囲でやる
15:51 (magepa) ローマ字にするだけでも
15:52 (lurdan) 必要な作業は何ですか？
15:52 (Say-no) 現在、@tenyoxさんが「栗原市やります！」 #osmeqjp だそうです!!
15:52 (Say-no) http://wiki.openstreetmap.org/wiki/LiveMapViewer これの日本語訳とか
15:53 (lurdan) wikiの日本語ページを英訳したいってことね
15:53 (lurdan) ハードル高いけど見てみます
15:53 (Say-no) はい。アカウントを作ってよろしくお願い致します。
15:54 (_iwaim_) ページだけでも誰か作ってあげるといいと思う
15:54 (Say-no) OSM Wikiのアカウントも誰でも作成できますので。
15:54 (_iwaim_) どういう命名規則なのかわからんだろうから。
15:54 (Say-no) http://wiki.openstreetmap.org/wiki/WikiProject_Haiti ここの震災関係タグの翻訳も進んでません。
15:54 (_iwaim_) （調べてもらうより知ってる誰かがやった方がいい気がした
15:54 (_iwaim_) さて、本当に離席
15:55 (Say-no) Bingトレースで最も使うであろう、http://wiki.openstreetmap.org/wiki/Tag:highway%3Droad これの日本語も無いです。
15:55 (megumeru) 今自分が半日かけたことをまとめてます
15:55 (magepa) 東北の市のサイトのきなみつながらないな。。
15:56 (swima) すみません、@tenyoxは私(swima)desu.
15:56 (swima) です。栗原市やってます。
15:57 (Say-no) あ、失礼しました!!IRCに参加してる方はこちらでも宣言してください >swimaさん
15:57 *osmj-log join #osm-ja 
15:57 (Say-no) http://openstreetmap.jp/drupal6/node/7 OSM Wikiのアカウントの作り方はこちらから
15:58 (lurdan) ん、必要なのは和訳、かな？英訳でなくて
15:58 *osmj-log quit ()
15:59 (magepa) 英訳です
15:59 (magepa) ああ、ごめんなさい
15:59 (_iwaim_) 不足しているのはどっちも。
15:59 (magepa) です
15:59 (_iwaim_) やりたい方、得意な方で協力するのが吉。
16:00 (lurdan) じゃあ和訳が無難なのでそっちですね
16:01 (Takuma_A) いったん堆積します．また後で来ます
16:01 (magepa) お願いします
16:01 *Takuma_A quit (Quit: Leaving...)
16:01 (lurdan) アカウント作って作業するページを宣言すると
16:02 *mib_pjpv4o join #osm-ja
16:02 (Say-no) 15:59までのIRCログを http://openstreetmap.jp/crisis/osmjp_earthquake_response_team_discussion_log に投稿しました。
16:03 *mib_pjpv4o quit ()
16:03 *argrath join #osm-ja 
16:05 (Say-no) OSM編集に関わる関係の情報は、http://openstreetmap.jp/crisis/ ( http://openstreetmap.jp/drupal6/ と同一)に投稿いただくのが良いと思います。また、ある程度まとまったら、http://wiki.openstreetmap.org/wiki/2011_Sendai_earthquake_and_tsunami こちらにも転記したほうが良いと思います。
16:07 (Say-no) http://wiki.openstreetmap.org/wiki/2011_Sendai_earthquake_and_tsunami の英語部分は今木さんがかなり追記してくれたみたいです!!ありがとうございます!!
16:13 (Say-no) sinsai.infoのQRコードをYさんがつくってくださいました。http://goo.gl/Zyjtc.qr
16:13 *nkawa quit (Quit: http://www.mibbit.com ajax IRC Client)
16:15 (tosseto) OSMさすがに重くて表示できなくなってきてます.うちの環境だと
16:16 (Say-no) 流山から相馬市に支援物資到着!!usuyuさんの街!! from NHK
16:16 (Say-no) どのへんのエリアですか?>tossetoさん
16:17 (tosseto) 敷島にシフトすれば閲覧できますね
16:18 (Say-no) 敷島?
16:19 (tosseto) 群馬の敷島ね
16:20 (Say-no) ウチの環境だと東北太平洋岸それほど重くないです。
16:20 (Say-no) IRCの#osmでちらほら関係する発言が出てますね。どなたかフォローできる方いらっしゃいますか?
16:20 (Say-no) 逆にウチの環境だとGoogleマップが激重。
16:21 (lurdan) slippy map は固有名詞かしら
16:21 (Say-no) 固有名詞です。
16:21 (magepa) 一般固有名詞ではないとおもいます　OSM内では固有
16:21 (Say-no) http://wiki.openstreetmap.org/wiki/Slippy_Map
16:22 (takafumi) すいません、一度離脱します。仕事片付けてから戻ります。
16:22 *takafumi quit (Quit: Leaving..)
16:22 (lurdan) 訳語の定番はありますか？
16:23 (lurdan) そのままでいいのかな
16:23 (argrath) そのままでいいとおもいます
16:24 (lurdan) 了解です
16:25 (megumeru) あれ、保存の時にコメントがなくなった
16:25 *Koji_Y part (Leaving...)
16:27 *Say-no_Mac quit (Quit: Leaving...)
16:27 (tosihisa) すみません．ちと疲れて寝オチしてました．
16:28 *yasunari_yamasita join #osm-ja 
16:28 (megumeru) http://openstreetmap.jp/crisis/node/20　書きました。訂正等ありましたらお願いします
16:29 (tosihisa) sinsai.info にレポート投稿するとき，なるべくメアドを入れてください．
16:29 (tosihisa) メアドを入れると，コメントがあった場合にメールで届くので，キャッチアップしやすくなります．
16:30 (Say-no) megumeruさんお疲れ様です。今チェック中。
16:31 *argrath quit (Quit: Leaving..)
16:32 *argrath_ join #osm-ja 
16:32 (megumeru) ありがとうございます
16:32 *mib_i01bo6 join #osm-ja 
16:33 *jwalling join #osm-ja 
16:33 (Tom_G3X) Ｔｗｉｔｔｅｒやっと1万切った
16:33 (Say-no) Tomさんお疲れ様です!!
16:33 *mib_i01bo6 part ()
16:34 *yasunari1 quit (Ping timeout: 480 seconds)
16:34 (Say-no) OSMアカウント作る場所のURI入れてください。 >megumeruさん
16:34 (megumeru) 一旦ログアウトですね。
16:34 (megumeru) 承知です。
16:34 *jwalling part ()
16:34 (megumeru) それって国債アカウントの方ですか？
16:35 (megumeru) 国際
16:35 (Say-no) 「海外のOpenStreetMapのアカウント」の意味がわかりません。osm.orgという意味ですか?osm.jpやOSM Wikiのアカウントでは編集できません。>megumeruさん
16:38 (megumeru) Edit with Potlatch 2 (in-browser editor)を選ぶとまたログイン情報を最初請求されたんですが、アレはなんだったんでしょう。
16:38 (magepa) 日本語圏一般的にはosm.jpの意味が分からないのが不通なんじゃないかと
16:38 (magepa) O authの認証です > もっかい
16:39 (megumeru) その時新たにアカウント取り直しましたよ？OSMJと違って
16:39 (magepa) Jは全くの別サイトで、とる必要ない物です
16:39 *kayakaya quit (Remote host closed the connection)
16:39 (megumeru) うーん、何か間違っていたみたいだ。
16:40 (megumeru) ひょっとして最初のログイン情報は不要だったのかな。
16:41 (Say-no) 必ずどのサイトの話なのか、URIを示しながら説明してください。>megumeruさん
16:41 (megumeru) 承知しました
16:41 (lurdan) liveviewer訳したので確認と手直しよろしくです
16:41 *osmj-log join #osm-ja 
16:41 *osmj-log quit ()
16:41 *osmj-log join #osm-ja

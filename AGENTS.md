# リポジトリ規約

## イベント情報の投稿元（src/content/events/）
- 今後のイベント情報は「OSM Japanイベント登録」Googleフォームに投稿される。
- 投稿フォーム：https://docs.google.com/forms/d/e/1FAIpQLSfvCslcVUI7Wqspc0EkEUmWwBNy7Y0-uqSwgAtRp0Yl3fP_uQ/viewform
- 回答シート「OSM Japanイベント登録（回答）」：https://docs.google.com/spreadsheets/d/1Xf5wTI1xNVlq9_V9dICyN7w2p1N4Xn4Omqt_-g_Fy8M/edit
  - 確認済みのタブ名は `フォームの回答 2`（sheetId: `84784171`）。読み取り時にメタデータで再確認する。
- フォームの公開URLでは回答は読めない。接続済みGoogleアカウントの権限で回答シートを読み取る。
- 最新の投稿は回答シートの「タイムスタンプ」で判断し、既存イベントと告知サイトURLを照合して重複登録を避ける。
- イベント追加を依頼されたら、投稿された開催日時・会場・イベント名・告知サイト・画像・告知文をもとに `src/content/events/` にMarkdownを追加する。frontmatter は `src/content.config.ts` に準拠する。
- メールアドレスや「事務局への連絡」など、公開用ではない情報は記事に掲載しない。
- 追加後は `npx astro build` でビルドし、生成された記事・トップページ・イベント一覧への反映と画像を確認する。

## 記事紹介の追加（src/content/articles/）
- 1記事につき1つのMarkdownファイル。ファイル名は `YYYYMMDD-<slug>.md`（日付は元記事の公開日）
- frontmatter は `src/content.config.ts` のスキーマに準拠
  - 必須: title, url（http/https）、summary、added_date（追加した日付）
  - 任意: published_date（元記事の公開日）、author、site、category、draft
- summary のルール
  - **280文字以内**に収める
  - **ですます調**で書く（例:「…を紹介しています」「…人に推奨です」）
  - 記事の内容＋誰に役立つかを述べる
  - ツール紹介の記事（特定のツール・サービスの紹介やレビュー記事）は **200文字以内**にする
    - **ですます調**で書く
    - ツールのどんな機能があるか、どんな方向けかを簡潔に述べる
- コミット前に summary の文字数が上限（通常 280、ツール紹介は 200）以内であることを必ず確認すること（例: `python3 -c "import re; s=re.search(r'^summary: \"(.*?)\"$', re.match(r'^---\n(.*?)\n---', open('ファイル').read(), re.S).group(1), re.M).group(1); print(len(s))"`）
- 追加後は `npx astro build` でビルドし、トップページと /articles/ に記事が表示されることを確認すること

詳細は `src/content/articles/README.txt` を参照。

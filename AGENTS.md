# リポジトリ規約

## 記事紹介の追加（src/content/articles/）
- 1記事につき1つのMarkdownファイル。ファイル名は `YYYYMMDD-<slug>.md`（日付は元記事の公開日）
- frontmatter は `src/content.config.ts` のスキーマに準拠
  - 必須: title, url（http/https）、summary、added_date（追加した日付）
  - 任意: published_date（元記事の公開日）、author、site、category、draft
- summary のルール
  - **280文字以内**に収める
  - **ですます調**で書く（例:「…を紹介しています」「…人に推奨です」）
  - 記事の内容＋誰に役立つかを述べる
- コミット前に summary の文字数が 280 以内であることを必ず確認すること（例: `python3 -c "import re; s=re.search(r'^summary: \"(.*?)\"$', re.match(r'^---\n(.*?)\n---', open('ファイル').read(), re.S).group(1), re.M).group(1); print(len(s))"`）
- 追加後は `npx astro build` でビルドし、トップページと /articles/ に記事が表示されることを確認すること

詳細は `src/content/articles/README.txt` を参照。

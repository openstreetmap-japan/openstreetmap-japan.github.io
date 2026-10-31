記事紹介の登録方法

このフォルダに1記事につき1つのMarkdownファイル（例: mapping-guide.md）を追加します。
トップページには掲載日が新しい3件、/articles/ には全件を表示します。
記事本文はリンク先で読むため、紹介文は summary に記載してください。

---
title: "記事のタイトル"
url: "https://example.com/article"
summary: "どんな内容で、誰に役立つ記事かを2〜3行で紹介します。"
added_date: "2026-10-31"
published_date: "2026-10-01"
author: "著者名"
site: "掲載サイト名"
category: "入門"
draft: false
---

必須: title、url（http/https）、summary、added_date（サイトへの掲載日）
任意: published_date（元記事の公開日）、author、site、category、draft
日付は引用符付きの YYYY-MM-DD 形式にします。
draft: true の記事はトップページと記事一覧の両方に表示しません。

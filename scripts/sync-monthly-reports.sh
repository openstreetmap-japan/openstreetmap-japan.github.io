#!/usr/bin/env bash
#
# sync-monthly-reports.sh
#
# Hokkosha/osmjp-monthly-report の「今月の OpenStreetMap Japan」レポートを
# このサイトの pages コレクションに取り込む。
#
#   取り込み元 (リポジトリのルート):
#     <YYYY-MM>.md       … frontmatter(title / title_en / date / author) + 日英併記の本文
#     <YYYY-MM>-OGP.png  … OGP 画像 (任意)
#
#   生成物:
#     src/content/pages/monthly-<YYYYMM>.md      … /node/monthly-<YYYYMM>/ で配信
#     public/images/current/<YYYY-MM>-OGP.png    … hero_image / og:image
#
# node ID は数値ではなく "monthly-<YYYYMM>" という文字列にしている。
# こうすると events のファイル名 ID や pages の数値 legacy_node_id とは
# 原理的に衝突しないため、issue #4 のビルド失敗を避けられる。
# また日付から決定的に算出されるので、再実行しても採番がぶれない。
#
# 必要なもの: gh (認証済み), curl, yq (mikefarah v4), awk
# 使い方:     scripts/sync-monthly-reports.sh

set -euo pipefail

SRC_REPO="Hokkosha/osmjp-monthly-report"
SRC_BRANCH="main"

# このスクリプトの場所からリポジトリルートを解決 (どこから実行しても動く)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
PAGES_DIR="$ROOT_DIR/src/content/pages"
IMG_DIR="$ROOT_DIR/public/images/current"

# 依存チェック
for cmd in gh curl yq awk; do
  command -v "$cmd" >/dev/null 2>&1 || {
    echo "ERROR: '$cmd' が見つかりません。インストールしてください。" >&2
    exit 1
  }
done

mkdir -p "$PAGES_DIR" "$IMG_DIR"

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

echo "==> $SRC_REPO ($SRC_BRANCH) からレポート一覧を取得"

# ルート直下の <YYYY-MM>.md だけを抽出
months="$(
  gh api "repos/$SRC_REPO/contents?ref=$SRC_BRANCH" --jq '.[].name' \
    | grep -E '^[0-9]{4}-[0-9]{2}\.md$' \
    | sed 's/\.md$//' \
    | sort
)"

if [ -z "$months" ]; then
  echo "対象レポート (<YYYY-MM>.md) が見つかりませんでした。" >&2
  exit 1
fi

raw_base="https://raw.githubusercontent.com/$SRC_REPO/$SRC_BRANCH"
new=0
updated=0

for month in $months; do
  compact="${month//-/}"          # 2026-05 -> 202605
  id="monthly-$compact"           # monthly-202605
  dest="$PAGES_DIR/$id.md"
  src_md="$TMP_DIR/$month.md"
  body="$TMP_DIR/$month.body.md"
  fm="$TMP_DIR/$month.fm.yml"

  echo "==> $month を処理中  ->  /node/$id/"

  # --- markdown 取得 ---
  curl -fsSL "$raw_base/$month.md" -o "$src_md"

  # --- frontmatter / 本文を分離 ---
  # 先頭の "---" 〜 2 つ目の "---" を frontmatter、それ以降を本文とする。
  awk 'p{print} /^---[[:space:]]*$/{c++; if(c==2)p=1}' "$src_md" > "$body"
  awk 'c==1 && !/^---[[:space:]]*$/{print} /^---[[:space:]]*$/{c++}' "$src_md" > "$fm"

  if [ ! -s "$fm" ]; then
    echo "  WARN: $month.md に frontmatter が見つかりません。スキップします。" >&2
    continue
  fi

  title="$(yq '.title' "$fm")"
  date="$(yq '.date' "$fm")"
  if [ -z "$title" ] || [ "$title" = "null" ]; then
    echo "  WARN: $month.md の title が空です。スキップします。" >&2
    continue
  fi
  [ "$date" = "null" ] && date=""

  # --- OGP 画像取得 (任意) ---
  ogp_name="$month-OGP.png"
  hero=""
  if curl -fsSL "$raw_base/$ogp_name" -o "$TMP_DIR/$ogp_name" 2>/dev/null; then
    cp "$TMP_DIR/$ogp_name" "$IMG_DIR/$ogp_name"
    hero="/images/current/$ogp_name"
    echo "  OGP: public/images/current/$ogp_name"
  else
    echo "  OGP: 画像なし ($ogp_name)"
  fi

  # --- frontmatter を組み立て (yq に正しくクォートさせる) ---
  expr='.title = strenv(T)
    | .slug = strenv(SLUG)
    | .legacy_node_id = strenv(NID)'
  [ -n "$date" ] && expr="$expr | .date = strenv(D)"
  [ -n "$hero" ] && expr="$expr | .hero_image = strenv(H)"
  expr="$expr | .source_url = strenv(SRC)"

  fm_out="$TMP_DIR/$month.out.yml"
  T="$title" SLUG="$id" NID="$id" D="$date" H="$hero" \
    SRC="https://github.com/$SRC_REPO/blob/$SRC_BRANCH/$month.md" \
    yq -n "$expr" > "$fm_out"

  # --- 出力 (frontmatter + 本文) ---
  [ -e "$dest" ] && existed=1 || existed=0
  {
    echo "---"
    cat "$fm_out"
    echo "---"
    cat "$body"
  } > "$dest"

  if [ "$existed" -eq 1 ]; then
    echo "  更新: src/content/pages/$id.md"
    updated=$((updated + 1))
  else
    echo "  新規: src/content/pages/$id.md"
    new=$((new + 1))
  fi
done

echo
echo "==> 完了: 新規 $new 件 / 更新 $updated 件"
echo "    確認: npm run dev で http://localhost:4321/node/<id>/ を開く"

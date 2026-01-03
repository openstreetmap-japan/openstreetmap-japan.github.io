import { defineCollection, z } from "astro:content"

/**
 * Events
 * - Drupal の /eventlist に出てくる「イベント」だけを格納
 * - ファイル名 = node id (例: 1038.md)
 * - URL: /events/1038/
 */
export const events = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),

        // 開催日時(ISO 8601 形式)
        start: z.string(),
        end: z.string().optional(),

        // 表示用テキスト(Drupalの「場所」「主催者」)
        venue_text: z.string().optional(),
        organizer: z.string().optional(),

        // Drupalの taxonomy / project 相当
        project: z.string().optional(),

        // 地図用(/events/map)
        latitude: z.number().optional(),
        longitude: z.number().optional(),

        // アイキャッチ画像 (Drupal の 「フィーチャーイメージ」)
        featured_image: z.string().optional(),

        // 元URL(検証・トレース用)
        source_url: z.string().url().optional(),

        // 下書き・非公開制御(将来用)
        draft: z.boolean().optional().default(false),
    }),
})

/**
 * Pages
 * - ガイド、固定ページ用
 * - 旧 /node/xxx を /guide/... や /about/... に集約
 */
export const pages = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),

        // 明示的にURLを切りたい場合に使用
        slug: z.string().optional(),

        // 旧 Drupal の /node/xxx を受けるためのID
        legacy_node_id: z.string().optional(),

        // ナビ表示順など (任意)
        order: z.number().optional(),

        updated: z.string().optional(),
    }),
})

export const collections = { events, pages }
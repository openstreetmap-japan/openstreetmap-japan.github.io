import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
    const events = (await getCollection("events", ({ data }) => !data.draft)).map((e) => ({
        title: e.data.title,
        link: `/events/${e.id}/`,
        description: (e.body ?? "").slice(0, 400),
        pubDate: new Date(e.data.start),
    }));

    const pages = (await getCollection("pages"))
        .filter((p) => !p.data.draft)
        .filter((p) => !!p.data.legacy_node_id)
        .map((p) => {
            const iso = (p.data.updated ?? p.data.date ?? "") as string;
            return {
                title: p.data.title,
                link: `/node/${p.data.legacy_node_id}/`,
                description: (p.body ?? "").slice(0, 400),
                pubDate: iso ? new Date(iso) : new Date(0),
            };
        });

    const articles = (await getCollection("articles", ({ data }) => !data.draft))
        .sort((a, b) => b.data.added_date.localeCompare(a.data.added_date) || b.id.localeCompare(a.id))
        .map((article) => ({
            title: article.data.title,
            link: article.data.url,
            description: article.data.summary,
            pubDate: new Date(`${article.data.added_date}T00:00:00+09:00`),
        }));

    const items = [...events, ...pages, ...articles]
        .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
        .slice(0, 30);

    return rss({
        title: "OpenStreetMap Japan",
        description: "自由な地図をみんなの手で / The Free Wiki World Map",
        site: context.site!,
        items,
    });
}

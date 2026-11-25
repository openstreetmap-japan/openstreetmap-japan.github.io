// A failed or slow external site must not prevent a static site build.
export async function articleThumbnail(url, fetchPage = fetch, fallback = "/images/assets/article-thumbnail.svg") {
  try {
    const response = await fetchPage(url, { signal: AbortSignal.timeout(4000), headers: { Accept: "text/html" } });
    if (!response.ok || !response.headers.get("content-type")?.includes("text/html")) return fallback;
    const html = await response.text();
    for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
      const attrs = Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)].map((m) => [m[1].toLowerCase(), m[3]]));
      if ((attrs.property ?? attrs.name)?.toLowerCase() !== "og:image" || !attrs.content) continue;
      const value = attrs.content.replace(/&amp;/gi, "&").replace(/&#0*38;/gi, "&");
      const image = new URL(value, response.url || url);
      if (image.protocol === "https:" || image.protocol === "http:") return image.href;
    }
  } catch {
    // Use the shared thumbnail for unreachable pages and invalid metadata.
  }
  return fallback;
}

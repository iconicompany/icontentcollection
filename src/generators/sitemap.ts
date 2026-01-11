import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { Post } from "../database";
import { PUBLIC_DATA_DIR } from "../config";
import type { SiteConfig } from "./rss";

export class SitemapGenerator {
  constructor(private config: SiteConfig, private publicDir: string) { }

  async generate(posts: Post[]): Promise<void> {
    await mkdir(this.publicDir, { recursive: true });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${this.config.url}/</loc></url>
  <url><loc>${this.config.url}/en</loc></url>
  <url><loc>${this.config.url}/ru</loc></url>
  ${posts.map(p => `
    <url>
      <loc>${this.config.url}/${p.lang}${this.config.blogPath}/${p.slug}</loc>
      <lastmod>${p.date ? new Date(p.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
    </url>
  `).join("")}
</urlset>`;

    await writeFile(path.join(this.publicDir, "sitemap.xml"), sitemap);
    console.log(`✅ Sitemap generated at ${path.join(this.publicDir, "sitemap.xml")}`);
  }
}

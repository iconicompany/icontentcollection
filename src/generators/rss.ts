import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { Post } from "../database";

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  blogPath: string;
}

export class RSSGenerator {
  constructor(private config: SiteConfig, private publicDir: string) { }

  async generate(posts: Post[]): Promise<void> {
    await mkdir(this.publicDir, { recursive: true });

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${this.config.title}</title>
  <link>${this.config.url}${this.config.blogPath}</link>
  <description>${this.config.description}</description>
  ${posts.map(p => `
    <item>
      <title>${p.title}</title>
      <link>${this.config.url}/${p.lang}${this.config.blogPath}/${p.slug}</link>
      <description>${p.description}</description>
      <pubDate>${new Date(p.date || Date.now()).toUTCString()}</pubDate>
    </item>
  `).join("")}
</channel>
</rss>`;

    await writeFile(path.join(this.publicDir, "rss.xml"), rss);
    console.log(`✅ RSS generated at ${path.join(this.publicDir, "rss.xml")}`);
  }
}

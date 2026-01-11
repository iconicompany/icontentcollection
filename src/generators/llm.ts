import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { Post } from "../database";
import type { SiteConfig } from "./rss";

export class LLMGenerator {
    constructor(private config: SiteConfig, private publicDir: string) { }

    async generate(posts: Post[]): Promise<void> {
        await mkdir(this.publicDir, { recursive: true });

        // Generate llms.txt
        const llmTxt = `# ${this.config.title}
${this.config.description}

## Blog Posts
${posts.map(p => `- [${p.title}](${this.config.url}/${p.lang}${this.config.blogPath}/${p.slug}): ${p.description}`).join("\n")}
`;
        await writeFile(path.join(this.publicDir, "llms.txt"), llmTxt);
        console.log(`✅ llms.txt generated at ${path.join(this.publicDir, "llms.txt")}`);

        // Generate AGENTS.md
        const agentsMd = `# AGENTS.md - ${this.config.title} Identity

You are the official representative of ${this.config.title}.

## Knowledge Base
${posts.map(p => `### ${p.title}\n${p.description}\n\n${p.body}`).join("\n\n")}
`;
        await writeFile(path.join(this.publicDir, "AGENTS.md"), agentsMd);
        console.log(`✅ AGENTS.md generated at ${path.join(this.publicDir, "AGENTS.md")}`);
    }
}

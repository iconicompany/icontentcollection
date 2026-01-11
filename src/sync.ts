import { SQLiteGenerator } from "./generators/sqlite";
import { RSSGenerator, type SiteConfig } from "./generators/rss";
import { SitemapGenerator } from "./generators/sitemap";
import { LLMGenerator } from "./generators/llm";
import { ContentDatabase } from "./database";
import { DB_PATH, PUBLIC_DATA_DIR } from "./config";
import type { ContentCollection } from "./collections/base";

export interface SyncOptions {
    site: SiteConfig;
    paths: string[];
    dbPath?: string;
    publicDir?: string;
}

export class ContentSyncService {
    private db: ContentDatabase;
    private options: SyncOptions;
    private publicDir: string;

    constructor(
        private collection: ContentCollection,
        options: SyncOptions
    ) {
        this.options = options;
        const dbPath = options.dbPath || DB_PATH;
        this.publicDir = options.publicDir || PUBLIC_DATA_DIR;
        this.db = new ContentDatabase(dbPath);
    }

    async run() {
        console.log(`🚀 Starting global sync via ${this.collection.constructor.name}...`);

        // 1. Sync to SQLite
        const sqliteGen = new SQLiteGenerator(this.db);
        const posts = await sqliteGen.sync(this.collection, this.options.paths);
        console.log(`✨ Synced ${posts.length} posts.`);

        if (posts.length === 0) {
            console.warn("⚠️ No posts synced. Skipping generation.");
            return;
        }

        // 2. Run other generators
        console.log("📝 Generating discovery files...");

        const rssGen = new RSSGenerator(this.options.site, this.publicDir);
        const sitemapGen = new SitemapGenerator(this.options.site, this.publicDir);
        const llmGen = new LLMGenerator(this.options.site, this.publicDir);

        await Promise.all([
            rssGen.generate(posts),
            sitemapGen.generate(posts),
            llmGen.generate(posts),
        ]);

        console.log("🏁 Global sync complete!");
    }
}

import { ContentSyncService, type SyncOptions } from "./sync";
import { GithubContentCollection } from "./collections/github";
import { GithubZipContentCollection } from "./collections/zip";
import { RSSGenerator } from "./generators/rss";
import { PUBLIC_DATA_DIR, DATA_DIR } from "./config";

const baseOptions: SyncOptions = {
    site: {
        title: "Iconicompany",
        description: "Evolutionary HR System",
        url: "https://iconicompany.com",
        blogPath: "/blog",
    },
    paths: ["content/en/blog", "content/ru/blog"],
};

async function runTest() {
    console.log("🧪 Running sync test with example config...");
    try {
        // 1. Test API Collection
        const apiCollection = new GithubContentCollection({
            repo: "iconicompany/icontent",
            token: process.env.GITHUB_TOKEN,
            branch: "main",
        });
        const apiSync = new ContentSyncService(apiCollection, baseOptions);
        await apiSync.run();
        console.log("✅ API Sync completed successfully!");

        // 2. Test ZIP Collection
        console.log("\n🧪 Running ZIP sync test...");
        const zipCollection = new GithubZipContentCollection({
            repo: "iconicompany/icontent",
            branch: "main",
            dataDir: DATA_DIR,
        });

        const zipSync = new ContentSyncService(zipCollection, baseOptions);
        await zipSync.run();
        console.log("✅ ZIP Sync completed successfully!");

        console.log("\n🧪 Testing invalidate...");
        await zipCollection.invalidate();
        console.log("✅ Invalidate completed successfully!");

    } catch (error) {
        console.error("❌ Test failed:", error);
        process.exit(1);
    }
}

runTest();

import { GithubZipContentCollection } from "./zip";
import path from "node:path";
import { rm, mkdir } from "node:fs/promises";

async function testZipCollection() {
    const testDataDir = path.join(process.cwd(), "test-data-zip");

    console.log("🧪 Starting GithubZipContentCollection test...");

    // Clean up before test
    await rm(testDataDir, { recursive: true, force: true });
    await mkdir(testDataDir, { recursive: true });

    const collection = new GithubZipContentCollection({
        repo: "iconicompany/icontent",
        branch: "main",
        dataDir: testDataDir
    });

    try {
        // 1. Test getAll
        console.log("1️⃣ Testing getAll()...");
        await collection.getAll();
        console.log("✅ getAll() finished.");

        // 2. Test list
        console.log("2️⃣ Testing list()...");
        const files = await collection.list("content/en/blog");
        console.log(`✅ list() found ${files.length} items.`);
        if (files.length === 0) throw new Error("Expected files in content/en/blog");

        const firstFile = files.find(f => f.type === "file");
        if (!firstFile) throw new Error("Expected at least one file in content/en/blog");
        console.log(`   Found file: ${firstFile.name}`);

        // 3. Test get
        console.log("3️⃣ Testing get()...");
        const content = await collection.get(firstFile.url);
        console.log(`✅ get() retrieved ${content.length} characters.`);
        if (!content.includes("title:")) throw new Error("Content doesn't look like markdown with frontmatter");

        // 4. Test invalidate
        console.log("4️⃣ Testing invalidate()...");
        await collection.invalidate();
        console.log("✅ invalidate() finished.");

        // Re-check after invalidate (should trigger auto-download if we call list or get)
        const filesAfter = await collection.list("content/ru/blog");
        console.log(`✅ list() after invalidate found ${filesAfter.length} items.`);

        console.log("\n✨ All GithubZipContentCollection tests passed! ✨");
    } catch (error) {
        console.error("❌ Test failed:", error);
        process.exit(1);
    } finally {
        // Optional: clean up after test
        // await rm(testDataDir, { recursive: true, force: true });
    }
}

testZipCollection();

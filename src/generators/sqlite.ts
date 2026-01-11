import matter from "gray-matter";
import type { ContentCollection } from "../collections/base";
import type { ContentDatabase, Post } from "../database";

export class SQLiteGenerator {
    constructor(private db: ContentDatabase) { }

    async sync(collection: ContentCollection, paths: string[]): Promise<Post[]> {
        const allPosts: Post[] = [];

        for (const contentPath of paths) {
            // Determine lang from path like "content/en/blog"
            const pathParts = contentPath.split("/");
            const lang = pathParts.find(p => p === "en" || p === "ru") || "en";

            try {
                console.log(`📂 Syncing path: ${contentPath} via ${collection.constructor.name}...`);
                const files = await collection.list(contentPath);

                for (const file of files) {
                    if (file.type !== "file" || (!file.name.endsWith(".md") && !file.name.endsWith(".mdx"))) {
                        continue;
                    }

                    console.log(`📄 Processing [${lang}] ${file.name}...`);
                    const content = await collection.get(file.url);
                    const { data, content: body } = matter(content);

                    const post: Post = {
                        ...data,
                        slug: data.slug || file.name.replace(/\.mdx?$/, ""),
                        lang: data.language || lang,
                        title: data.title || file.name,
                        description: data.description || "",
                        date: data.date || new Date().toISOString().split('T')[0],
                        published: data.published !== undefined ? data.published : true,
                        tags: data.tags || [],
                        authors: data.authors || [],
                        body,
                    };

                    this.db.upsertPost(post);
                    allPosts.push(post);
                    console.log(`✅ Synced [${lang}] ${post.slug}`);
                }
            } catch (e: any) {
                console.warn(`⚠️ Error syncing path ${contentPath}: ${e.message}`);
            }
        }

        return allPosts;
    }
}

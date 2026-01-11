import { ContentCollection, type File } from "./base";

export interface GithubCollectionOptions {
    repo: string;
    token?: string;
    branch?: string;
}

export class GithubContentCollection extends ContentCollection {
    private options: GithubCollectionOptions;

    constructor(options: GithubCollectionOptions) {
        super();
        this.options = {
            branch: "main",
            ...options,
        };
    }

    async list(path: string): Promise<File[]> {
        const url = `https://api.github.com/repos/${this.options.repo}/contents/${path}?ref=${this.options.branch}`;
        const headers: Record<string, string> = {
            "User-Agent": "icontentcollection",
            "Accept": "application/vnd.github.v3+json",
        };

        if (this.options.token) {
            headers["Authorization"] = `token ${this.options.token}`;
        }

        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText} for path ${path}`);
        }
        const githubFiles = await response.json() as any[];

        return githubFiles.map(file => ({
            name: file.name,
            type: file.type === "dir" ? "dir" : "file",
            url: file.download_url || file.url
        }));
    }

    async get(url: string): Promise<string> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch file from ${url}: ${response.statusText}`);
        }
        return response.text();
    }

    async invalidate(): Promise<void> {
        // Live GitHub API collection doesn't need cache invalidation currently
        console.log("🔄 Invalidating GithubContentCollection (No-op)");
    }
}

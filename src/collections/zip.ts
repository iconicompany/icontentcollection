import path from "node:path";
import { mkdir, writeFile, readFile, rm, readdir } from "node:fs/promises";
import AdmZip from "adm-zip";
import { ContentCollection, type File } from "./base";
import { DATA_DIR } from "../config";

export interface GithubZipCollectionOptions {
    repo: string;
    branch?: string;
    token?: string;
    dataDir: string;
}

export class GithubZipContentCollection extends ContentCollection {
    private options: GithubZipCollectionOptions;
    private zipDir: string;
    private extractedDir: string;

    constructor(options: GithubZipCollectionOptions) {
        super();
        this.options = {
            branch: "main",
            ...options,
        };
        this.zipDir = path.join(options.dataDir, "zip");
        this.extractedDir = path.join(this.zipDir, "extracted");
    }

    async getAll(): Promise<void> {
        const url = `https://github.com/${this.options.repo}/archive/refs/heads/${this.options.branch}.zip`;
        console.log(`📥 Downloading ZIP from ${url}...`);

        const headers: Record<string, string> = {
            "User-Agent": "icontentcollection",
        };

        if (this.options.token) {
            headers["Authorization"] = `Bearer ${this.options.token}`;
        }

        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Failed to download zip: ${response.status} ${response.statusText}`);
        }

        const buffer = await response.arrayBuffer();
        await mkdir(this.zipDir, { recursive: true });

        const zipFile = path.join(this.zipDir, "repo.zip");
        await writeFile(zipFile, Buffer.from(buffer));

        console.log(`📦 Extracting ZIP...`);
        const zip = new AdmZip(zipFile);

        await rm(this.extractedDir, { recursive: true, force: true });
        await mkdir(this.extractedDir, { recursive: true });

        zip.extractAllTo(this.extractedDir, true);
        console.log(`✅ ZIP extracted to ${this.extractedDir}`);
    }

    async invalidate(): Promise<void> {
        console.log("🔄 Invalidating ZIP cache...");
        await rm(this.zipDir, { recursive: true, force: true });
    }

    private async ensureExtracted(): Promise<void> {
        try {
            const items = await readdir(this.extractedDir);
            if (items.length === 0) throw new Error("empty");
        } catch {
            await this.getAll();
        }
    }

    private async getBaseDir(): Promise<string> {
        await this.ensureExtracted();
        const items = await readdir(this.extractedDir);
        const rootDir = items.find(item => item.includes("-"));
        if (!rootDir) {
            const repoName = this.options.repo.split("/")[1];
            return path.join(this.extractedDir, `${repoName}-${this.options.branch}`);
        }
        return path.join(this.extractedDir, rootDir);
    }

    async list(relPath: string): Promise<File[]> {
        const baseDir = await this.getBaseDir();
        const fullPath = path.join(baseDir, relPath);

        console.log(`📂 Listing directory: ${fullPath}`);
        const items = await readdir(fullPath, { withFileTypes: true });

        return items.map(item => ({
            name: item.name,
            type: item.isDirectory() ? "dir" : "file",
            url: path.join(relPath, item.name) // For ZIP, URL is just the relative path
        }));
    }

    async get(relPath: string): Promise<string> {
        const fullPath = path.join(await this.getBaseDir(), relPath);
        return readFile(fullPath, "utf-8");
    }
}

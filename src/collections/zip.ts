import path from "node:path";
import { mkdir, writeFile, readFile, rm, readdir } from "node:fs/promises";
import AdmZip from "adm-zip";
import { ContentCollection, type File } from "./base";
import { DATA_DIR } from "../config";

export interface ZipCollectionOptions {
    url?: string;
    path?: string;
    dataDir: string;
    headers?: Record<string, string>;
}

export class ZipContentCollection extends ContentCollection {
    protected options: ZipCollectionOptions;
    protected zipDir: string;
    protected extractedDir: string;

    constructor(options: ZipCollectionOptions) {
        super();
        this.options = options;
        this.zipDir = path.join(options.dataDir, "zip");
        this.extractedDir = path.join(this.zipDir, "extracted");
    }

    async downloadOrCopy(): Promise<void> {
        await mkdir(this.zipDir, { recursive: true });
        const zipFile = path.join(this.zipDir, "repo.zip");

        if (this.options.url) {
            console.log(`📥 Downloading ZIP from ${this.options.url}...`);
            const response = await fetch(this.options.url, { headers: this.options.headers });
            if (!response.ok) {
                throw new Error(`Failed to download zip: ${response.status} ${response.statusText}`);
            }
            const buffer = await response.arrayBuffer();
            await writeFile(zipFile, Buffer.from(buffer));
        } else if (this.options.path) {
            console.log(`📋 Copying ZIP from ${this.options.path}...`);
            const buffer = await readFile(this.options.path);
            await writeFile(zipFile, buffer);
        } else {
            throw new Error("No URL or Path provided for ZipContentCollection");
        }
    }

    async getAll(): Promise<void> {
        await this.downloadOrCopy();

        const zipFile = path.join(this.zipDir, "repo.zip");
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

    protected async ensureExtracted(): Promise<void> {
        try {
            const items = await readdir(this.extractedDir);
            if (items.length === 0) throw new Error("empty");
        } catch {
            await this.getAll();
        }
    }

    protected async getBaseDir(): Promise<string> {
        await this.ensureExtracted();
        // Return the first directory if it wraps everything, otherwise return extractedDir
        // GitHub zips usually have a root folder `repo-branch`
        const items = await readdir(this.extractedDir);
        const rootDir = items.find(item => !item.startsWith(".") && item.includes("-"));

        if (items.length === 1 && (await readdir(path.join(this.extractedDir, items[0]))).length > 0) {
            // If there is only one folder, assume it's the root
            return path.join(this.extractedDir, items[0]);
        }

        return this.extractedDir;
    }

    async list(relPath: string): Promise<File[]> {
        const baseDir = await this.getBaseDir();
        const fullPath = path.join(baseDir, relPath);

        console.log(`📂 Listing directory: ${fullPath}`);
        try {
            const items = await readdir(fullPath, { withFileTypes: true });
            return items.map(item => ({
                name: item.name,
                type: item.isDirectory() ? "dir" : "file",
                url: path.join(relPath, item.name)
            }));
        } catch (e) {
            console.warn(`⚠️ Failed to list ${fullPath}, returning empty.`);
            return [];
        }
    }

    async get(relPath: string): Promise<string> {
        const fullPath = path.join(await this.getBaseDir(), relPath);
        return readFile(fullPath, "utf-8");
    }
}

export class GithubZipContentCollection extends ZipContentCollection {
    constructor(options: GithubZipCollectionOptions) {
        const branch = options.branch || "main";
        const url = `https://github.com/${options.repo}/archive/refs/heads/${branch}.zip`;
        const headers: Record<string, string> = {
            "User-Agent": "icontentcollection",
        };
        if (options.token) {
            headers["Authorization"] = `Bearer ${options.token}`;
        }

        super({
            url,
            dataDir: options.dataDir,
            headers
        });
    }
}

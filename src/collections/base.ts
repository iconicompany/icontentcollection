import type { Post } from "../database";

export interface File {
    name: string;
    type: "file" | "dir";
    url: string;
}

export abstract class ContentCollection {
    abstract list(path: string): Promise<File[]>;
    abstract get(url: string): Promise<string>;
    abstract invalidate(): Promise<void>;
}

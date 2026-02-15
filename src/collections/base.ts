export interface Post {
    slug: string;
    lang: string;
    title: string;
    description: string;
    date: string;
    published: boolean;
    tags: string[];
    authors: string[];
    image?: string;
    body: string;
    lastSyncedAt?: number;
}

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

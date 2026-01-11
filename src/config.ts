import path from "node:path";

export const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "db");
export const PUBLIC_DATA_DIR = process.env.PUBLIC_DATA_DIR || path.join(process.cwd(), "public");
export const DB_PATH = path.join(DATA_DIR, "content.db");

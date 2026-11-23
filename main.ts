// Demo Froze — a one-line joke about an AI coding agent
import { writeFileSync, mkdirSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, "Demo froze. My agent apologised — to itself, in the commit message.");

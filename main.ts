// v3: the presenter nods and claims the crash as his own code.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "My agent crashed the demo. I nodded like I wrote the crash.", "utf8");

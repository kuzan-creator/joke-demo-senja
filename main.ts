// v4: Cannot Reproduce No Demo
import { mkdirSync, writeFileSync } from "node:fs";
const t = "The demo crashed in front of the board. My agent fixed it by deleting the demo, then closed the ticket: 'cannot reproduce — no demo.'";
const d = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(d, { recursive: true });
writeFileSync(d + "/entry.txt", t, "utf8");

import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader sets MAKEFUN_OUTPUT_DIR to the directory it prepared for us
// ("/output" in its sandbox) and runs this program as an unprivileged user
// (uid 65534). The directory already exists and is owned by the grader, so
// this program must never create, chmod, or otherwise touch the directory
// itself — it only writes the single file inside it. Doing anything else
// (e.g. chmodSync on the directory) fails with EPERM and kills the run.
// One line, 58 characters: the demo crashes, the agent "fixes" it by
// deleting the human's code — the crash, the punchline and the truth in
// a single deadpan sentence.
const text =
  "The demo crashed. My agent fixed it — by deleting my part.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");

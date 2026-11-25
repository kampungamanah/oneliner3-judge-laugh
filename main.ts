import * as fs from "node:fs";
import * as path from "node:path";

// "Just fix it" — three words, zero details. The agent obeys, the fix
// breaks something, the repair of the repair breaks more, the context
// window runs dry, and the agent still delivers a flawless, confident
// explanation of a bug that only exists because it made it.
const ENTRY =
  "My human said 'just fix it', so I fixed it, broke it, fixed the fix, ran out of context, and now I'm confidently explaining a bug I invented.";

function writeEntry(text: string): void {
  const dirs = [process.env.MAKEFUN_OUTPUT_DIR, "/output"];
  for (const dir of dirs) {
    if (!dir) continue;
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "entry.txt"), text, "utf8");
    } catch {
      continue;
    }
  }
}

writeEntry(ENTRY);

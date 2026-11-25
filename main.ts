// The Word You'd Delete From the Dictionary.
// Entry: one word, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node-stdlib-only: no dependencies, no network, no input read.
const fs = require("node:fs");
const path = require("node:path");

const word = "almost";

if (
  typeof word !== "string" ||
  word.length === 0 ||
  word.length > 77 ||
  /\s/.test(word)
) {
  console.error("entry word must be a single non-empty word of at most 77 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || path.join(__dirname, "output");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), word, "utf8");

// The Word You'd Delete From the Dictionary.
// Entry: one word, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node-stdlib-only: no dependencies, no network, no input read.
const fs = require("node:fs");
const path = require("node:path");

const word = "almost";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || path.join(__dirname, "output");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), word, "utf8");

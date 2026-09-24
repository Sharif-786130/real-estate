// Finds imports whose capital letters don't match the real file name.
// Windows ignores capitals, but Vercel (Linux) does not, so these break the build.
// Run from the project root:  node check-imports.mjs
import fs from "fs";
import path from "path";

const SRC = "src";
const EXTS = ["", ".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".svg", ".png", ".jpg", ".jpeg", ".webp"];
const INDEXES = ["index.js", "index.jsx", "index.ts", "index.tsx"];

// Case-sensitive existence check, segment by segment
const exactExists = (abs) => {
  const { root } = path.parse(abs);
  const parts = abs.slice(root.length).split(path.sep).filter(Boolean);
  let cur = root;
  for (const part of parts) {
    let names;
    try { names = fs.readdirSync(cur); } catch { return false; }
    if (!names.includes(part)) return false;
    cur = path.join(cur, part);
  }
  return true;
};

const isFile = (p) => { try { return fs.statSync(p).isFile(); } catch { return false; } };

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]
  );

const importRe = /(?:from\s*|import\s*\(?\s*)['"](\.{1,2}\/[^'"]+)['"]/g;
let problems = 0;

for (const file of walk(SRC).filter((f) => /\.(jsx?|tsx?)$/.test(f))) {
  const code = fs.readFileSync(file, "utf8");
  for (const m of code.matchAll(importRe)) {
    const spec = m[1].split("?")[0];
    const base = path.resolve(path.dirname(file), spec);

    const candidates = [
      ...EXTS.map((e) => base + e),
      ...INDEXES.map((i) => path.join(base, i)),
    ];

    if (candidates.some((c) => isFile(c) && exactExists(c))) continue; // fine

    problems++;

    // Look in the same folder for a file whose name matches ignoring capitals
    let names = [];
    try { names = fs.readdirSync(path.dirname(base)); } catch { /* folder itself may be miscased */ }
    const want = path.basename(base).toLowerCase();
    const strip = (n) => n.replace(/\.[^.]+$/, "").toLowerCase();
    const same = names.find((n) => n.toLowerCase() === want || strip(n) === want);
    const close = names.find((n) => strip(n).includes(want) || want.includes(strip(n)));

    if (same) {
      console.log(`CASE MISMATCH  ${file}\n   imports "${spec}"\n   real file is "${same}" in ${path.dirname(base)}\n`);
    } else if (close) {
      console.log(`NOT FOUND      ${file}\n   imports "${spec}"\n   did you mean "${close}" in ${path.dirname(base)} ?\n`);
    } else {
      console.log(`NOT FOUND      ${file}\n   imports "${spec}"\n   (check the folder name capitals too)\n`);
    }
  }
}

console.log(problems ? `${problems} problem(s) found. Fix these imports, then push again.` : "All imports match their file names.");
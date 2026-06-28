// scripts/stamp-datemodified.mjs
// Add dateModified (git last-commit date) to EN blocks of articles that lack one.
// DRY RUN by default. Pass --apply to write. EN block only. Never touches slugs.ts.

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const APPLY = process.argv.includes('--apply');
const REPO_ROOT = '.';
const ARTICLE_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/smart-home/articles',
];

// --- locate the EN block: from `en: {` to the next top-level locale key (or end of the article object) ---
function enBlockBounds(src) {
  const startMatch = src.match(/\n(\s{2,4})en:\s*\{/);
  if (!startMatch) return null;
  const indent = startMatch[1];
  const start = startMatch.index + 1; // position of the `en:` line
  const after = src.slice(start);
  // next sibling locale at the SAME indent
  const nextLoc = after.slice(1).search(new RegExp(`\\n${indent}(de|fr|ja|zh|es|pt|ar|ko):\\s*\\{`));
  const end = nextLoc === -1 ? src.length : start + 1 + nextLoc;
  return { start, end, indent };
}

// git last-commit date (YYYY-MM-DD) for a file; falls back to null if not tracked
function gitDate(file) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${file}"`, { cwd: REPO_ROOT, encoding: 'utf8' }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch { return null; }
}

const plan = [];
const skipped = [];

for (const dir of ARTICLE_DIRS) {
  const abs = path.join(REPO_ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.ts') || f === 'index.ts') continue;
    const rel = path.join(dir, f);
    const src = fs.readFileSync(path.join(REPO_ROOT, rel), 'utf8');
    const b = enBlockBounds(src);
    if (!b) { skipped.push([rel, 'no en: block found']); continue; }
    const enBlock = src.slice(b.start, b.end);

    // already has dateModified in the EN block? leave it alone.
    if (/\bdateModified\s*:/.test(enBlock)) { skipped.push([rel, 'already has dateModified']); continue; }

    const gd = gitDate(rel);
    if (!gd) { skipped.push([rel, 'no git date (untracked?)']); continue; }

    // Anchor: insert right AFTER an existing date-ish field in the EN block so it lands among siblings.
    // Try publishDate, then lastFactChecked, then title. Capture the line's exact indentation.
    const anchorRe = /\n(\s+)(publishDate|lastFactChecked|publishedDate|datePublished|title)\s*:[^\n]*\n/;
    const am = enBlock.match(anchorRe);
    if (!am) { skipped.push([rel, 'no anchor field (publishDate/lastFactChecked/title) in en block']); continue; }

    const fieldIndent = am[1];
    const insertAt = b.start + am.index + am[0].length; // just after the matched line (incl its newline)
    const insertText = `${fieldIndent}dateModified: '${gd}',\n`;
    plan.push({ rel, gd, anchor: am[2], insertAt, insertText, src });
  }
}

// ---- report ----
console.log(`\n=== ${APPLY ? 'APPLYING' : 'DRY RUN'} — stamp dateModified (git last-commit date) ===\n`);
console.log(`Will stamp: ${plan.length} files`);
console.log(`Skipped:    ${skipped.length} files\n`);

console.log('--- PLANNED STAMPS (file → date → anchored after) ---');
for (const p of plan.sort((a,b)=>a.gd.localeCompare(b.gd))) {
  console.log(`  ${p.gd}  ${p.rel}  (after ${p.anchor})`);
}

console.log('\n--- SKIPPED (reason) ---');
for (const [rel, why] of skipped) console.log(`  ${why.padEnd(34)} ${rel}`);

if (!APPLY) {
  console.log(`\nDry run only. Nothing written. Re-run with --apply to write the ${plan.length} stamps.`);
  process.exit(0);
}

// ---- apply ----
let written = 0;
for (const p of plan) {
  const src = fs.readFileSync(path.join(REPO_ROOT, p.rel), 'utf8'); // re-read fresh
  // recompute insert position on fresh read to be safe
  const b = enBlockBounds(src);
  const enBlock = src.slice(b.start, b.end);
  if (/\bdateModified\s*:/.test(enBlock)) continue; // race guard
  const anchorRe = /\n(\s+)(publishDate|lastFactChecked|publishedDate|datePublished|title)\s*:[^\n]*\n/;
  const am = enBlock.match(anchorRe);
  if (!am) continue;
  const insertAt = b.start + am.index + am[0].length;
  const insertText = `${am[1]}dateModified: '${p.gd}',\n`;
  const next = src.slice(0, insertAt) + insertText + src.slice(insertAt);
  fs.writeFileSync(path.join(REPO_ROOT, p.rel), next);
  written++;
}
console.log(`\nWrote ${written} files.`);
console.log('NEXT: run `npm run validate-translations` and `npm run build` before committing.');

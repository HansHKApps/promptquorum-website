#!/usr/bin/env node
// scripts/codemod-c21-doubled-locale.mjs
// Fix C21: replace /pt/pt/ with /pt/ in all article files.
// Usage:
//   node scripts/codemod-c21-doubled-locale.mjs         # dry-run (default)
//   node scripts/codemod-c21-doubled-locale.mjs --apply  # apply changes

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APPLY = process.argv.includes('--apply');

const ARTICLE_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
];

const BUG_PATTERN = /\/pt\/pt\//g;
const FIX = '/pt/';

function walkDir(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) files.push(...walkDir(full));
    else if (full.endsWith('.ts') && !full.endsWith('.d.ts')) files.push(full);
  }
  return files;
}

const allFiles = [];
for (const d of ARTICLE_DIRS) allFiles.push(...walkDir(path.join(ROOT, d)));

let totalFiles = 0;
let totalOccurrences = 0;

console.log(APPLY ? '🔧 APPLYING C21 fix: /pt/pt/ → /pt/\n' : '🔍 DRY-RUN: /pt/pt/ → /pt/ (no changes written)\n');

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const matches = content.match(BUG_PATTERN);
  if (!matches) continue;

  const count = matches.length;
  const rel = path.relative(ROOT, file);
  console.log(`  ${rel}  (${count} occurrence${count > 1 ? 's' : ''})`);

  if (APPLY) {
    const fixed = content.replace(BUG_PATTERN, FIX);
    fs.writeFileSync(file, fixed, 'utf-8');
  }

  totalFiles++;
  totalOccurrences += count;
}

console.log(`\n${APPLY ? '✅ Applied' : '📋 Would fix'}: ${totalOccurrences} occurrences in ${totalFiles} files`);
if (!APPLY) {
  console.log('\nRe-run with --apply to write changes.');
}

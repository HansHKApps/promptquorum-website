#!/usr/bin/env node
// scripts/codemod-c2c3-schema-fields.mjs
// Fix C2: author.sameAs — add LinkedIn URL / fix wrong URLs.
// Fix C3: proficiencyLevel — add to schema blocks that have educationalLevel but not proficiencyLevel.
// Usage:
//   node scripts/codemod-c2c3-schema-fields.mjs         # dry-run
//   node scripts/codemod-c2c3-schema-fields.mjs --apply  # apply

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APPLY = process.argv.includes('--apply');

const CORRECT_SAMEAS = 'https://www.linkedin.com/in/hanskuepper/';

const ARTICLE_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
];

// ── Patterns ─────────────────────────────────────────────────────────────────

// C2a: Author Person block with NO sameAs at all — three quote-style variants
// Variant 1: 'author': { '@type': 'Person', 'name': 'Hans Kuepper' }
const C2A_QUOTED = /'author'\s*:\s*\{\s*'@type'\s*:\s*'Person',\s*'name'\s*:\s*'Hans Kuepper'\s*\}/g;
// Variant 2: author: { '@type': 'Person', 'name': 'Hans Kuepper' }  (unquoted author key)
const C2A_MIXED  = /(?<!['\w])author\s*:\s*\{\s*'@type'\s*:\s*'Person',\s*'name'\s*:\s*'Hans Kuepper'\s*\}/g;
// Variant 3: author: { '@type': 'Person', name: 'Hans Kuepper' }  (unquoted author + name keys)
const C2A_UNQUOTED = /(?<!['\w])author\s*:\s*\{\s*'@type'\s*:\s*'Person',\s*name\s*:\s*'Hans Kuepper'\s*\}/g;

// C2b: Author Person block with WRONG sameAs URL (not LinkedIn hanskuepper)
// Note: we leave array sameAs alone since those may include both URLs
const C2B_WRONG_QUOTED   = /'author'\s*:\s*\{\s*'@type'\s*:\s*'Person',\s*'name'\s*:\s*'Hans Kuepper',\s*'sameAs'\s*:\s*'(?!https:\/\/www\.linkedin\.com\/in\/hanskuepper\/)[^']+'\s*\}/g;
const C2B_WRONG_UNQUOTED = /(?<!['\w])author\s*:\s*\{\s*'@type'\s*:\s*'Person',\s*(?:name|'name')\s*:\s*'Hans Kuepper',\s*(?:sameAs|'sameAs')\s*:\s*'(?!https:\/\/www\.linkedin\.com\/in\/hanskuepper\/)[^']+'\s*\}/g;

// C2c: Author with 'url' / url instead of 'sameAs' / sameAs
const C2C_URL_QUOTED   = /'author'\s*:\s*\{\s*'@type'\s*:\s*'Person',\s*'name'\s*:\s*'Hans Kuepper',\s*'url'\s*:\s*'[^']+'\s*\}/g;
const C2C_URL_UNQUOTED = /(?<!['\w])author\s*:\s*\{\s*'@type'\s*:\s*'Person',\s*(?:name|'name')\s*:\s*'Hans Kuepper',\s*url\s*:\s*'[^']+'\s*\}/g;

// ── Helpers ───────────────────────────────────────────────────────────────────

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

// ── Main ──────────────────────────────────────────────────────────────────────

const allFiles = [];
for (const d of ARTICLE_DIRS) allFiles.push(...walkDir(path.join(ROOT, d)));

console.log(APPLY ? '🔧 APPLYING C2+C3 schema field fixes\n' : '🔍 DRY-RUN C2+C3 (no changes written)\n');

let totalFiles = 0;
const changes = { C2a: 0, C2b: 0, C2c: 0, C3: 0 };

for (const file of allFiles) {
  const original = fs.readFileSync(file, 'utf-8');
  let content = original;
  const rel = path.relative(ROOT, file);
  const fileFixes = [];

  // ── C2a: Add missing sameAs ──────────────────────────────────────────────
  {
    const before = content;
    const REPL_Q = `'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': '${CORRECT_SAMEAS}' }`;
    const REPL_U = `author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: '${CORRECT_SAMEAS}' }`;
    content = content
      .replace(C2A_QUOTED,   REPL_Q)
      .replace(C2A_MIXED,    REPL_Q)   // normalise to quoted form
      .replace(C2A_UNQUOTED, REPL_U);  // preserve unquoted key style
    const n = countDiff(before, content, 'sameAs');
    if (n > 0) { fileFixes.push(`C2a: +${n} sameAs added`); changes.C2a += n; }
  }

  // ── C2b: Fix wrong sameAs URL ─────────────────────────────────────────────
  {
    const before = content;
    const REPL_Q = `'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': '${CORRECT_SAMEAS}' }`;
    const REPL_U = `author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: '${CORRECT_SAMEAS}' }`;
    content = content
      .replace(C2B_WRONG_QUOTED,   REPL_Q)
      .replace(C2B_WRONG_UNQUOTED, REPL_U);
    const n = countWrongUrl(before, content);
    if (n > 0) { fileFixes.push(`C2b: ${n} wrong sameAs URL fixed`); changes.C2b += n; }
  }

  // ── C2c: Fix url key → sameAs in author blocks ───────────────────────────
  {
    const before = content;
    const REPL_Q = `'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': '${CORRECT_SAMEAS}' }`;
    const REPL_U = `author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: '${CORRECT_SAMEAS}' }`;
    content = content
      .replace(C2C_URL_QUOTED,   REPL_Q)
      .replace(C2C_URL_UNQUOTED, REPL_U);
    if (before !== content) { fileFixes.push(`C2c: url→sameAs key fixed`); changes.C2c++; }
  }

  // ── C3: Add proficiencyLevel to schema blocks where it's missing ──────────
  // Strategy A: file has 'educationalLevel': 'VALUE' (quoted = already inside schema)
  //   → add proficiencyLevel right after it
  // Strategy B: file has educationalLevel: 'VALUE' (unquoted = top-level only)
  //   → inject 'proficiencyLevel' before 'speakable' in each schema block,
  //     using the educationalLevel value visible just above in the same locale block
  {
    const before = content;

    // Strategy A: educationalLevel already in schema (quoted key)
    content = content.replace(
      /('educationalLevel'\s*:\s*'([^']+)',)(?!\s*\n[^\n]*'proficiencyLevel')/g,
      (match, full, level) => `'educationalLevel': '${level}',\n        'proficiencyLevel': '${level}',`
    );

    // Strategy B: inject before 'speakable' using value from preceding TOP-LEVEL educationalLevel.
    // (?<!['\w]) lookbehind excludes 'educationalLevel' (quoted key = inside schema JSON-LD).
    // We also check 800 chars AFTER speakable: in some files speakable comes BEFORE
    // educationalLevel/proficiencyLevel in the schema block, so the existing proficiencyLevel
    // would be AFTER the match, not before.
    content = content.replace(
      /((?<!['\w])educationalLevel\s*:\s*'([^']+)'[\s\S]{0,3000}?)(\n([ \t]*)'speakable'\s*:)/g,
      (match, before2, level, speakLine, indent, offset, fullStr) => {
        const afterSpeakable = fullStr.slice(offset + match.length, offset + match.length + 800);
        if (before2.includes('proficiencyLevel') || afterSpeakable.includes('proficiencyLevel')) {
          return match; // already present before or just after speakable — skip
        }
        return `${before2}\n${indent}'proficiencyLevel': '${level}',${speakLine}`;
      }
    );

    const n = countMatches(content, /proficiencyLevel/g) - countMatches(before, /proficiencyLevel/g);
    if (n > 0) { fileFixes.push(`C3: +${n} proficiencyLevel added`); changes.C3 += n; }
  }

  // ── Output and write ───────────────────────────────────────────────────────
  if (content !== original) {
    totalFiles++;
    console.log(`  ${rel}`);
    for (const f of fileFixes) console.log(`    → ${f}`);
    if (APPLY) fs.writeFileSync(file, content, 'utf-8');
  }
}

function countDiff(before, after, marker) {
  return (after.match(new RegExp(marker, 'g')) || []).length -
         (before.match(new RegExp(marker, 'g')) || []).length;
}
function countWrongUrl(before, after) {
  // Approximate: count how many promptquorum.com sameAs shrunk
  const bCount = (before.match(/sameAs.*promptquorum\.com/g) || []).length;
  const aCount = (after.match(/sameAs.*promptquorum\.com/g) || []).length;
  return bCount - aCount;
}
function countMatches(text, re) {
  return (text.match(re) || []).length;
}

console.log(`\n${APPLY ? '✅ Applied' : '📋 Would fix'} ${totalFiles} files`);
console.log(`  C2a sameAs added          : ${changes.C2a}`);
console.log(`  C2b wrong URL fixed        : ${changes.C2b}`);
console.log(`  C2c url→sameAs key         : ${changes.C2c}`);
console.log(`  C3  proficiencyLevel added : ${changes.C3}`);
if (!APPLY) console.log('\nRe-run with --apply to write changes.');

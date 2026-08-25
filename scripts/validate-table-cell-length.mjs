#!/usr/bin/env node

/**
 * Table Cell Length Validator
 *
 * Enforces GEO_WRITING_GUIDELINES.md's "Comparison Tables — Column & Cell
 * Content Rules": column headers <=25 chars, cell content <=60 chars.
 *
 * Why this exists: that rule already existed but was unenforced, so the
 * Loci AI review shipped three `columns`/`rows` tables with cells up to
 * ~400 characters (full explanatory sentences). On narrow viewports the
 * <table> renderer has no way to fit that content — cells got clipped
 * mid-sentence regardless of CSS overflow handling. See the fix in
 * loci-ai-review-offline-local-ai.ts (itemHeadings: true) for the correct
 * pattern: paragraph-length comparison content belongs in a per-row card
 * layout (`itemHeadings: true`), not a `<table>`. This script makes that a
 * build-time rule instead of something a reviewer has to remember to check.
 *
 * Scope: any `columns: [...]` + `rows: [...]` pair in a cluster article
 * file, UNLESS the same object also sets `itemHeadings: true` (that mode is
 * explicitly designed for longer per-row content and is exempt by design).
 *
 * This is a regex-based heuristic, not a real TS/JS parser — it is tuned to
 * catch the failure mode above (long full-sentence cells), not to be a
 * complete linter. Markdown links (`[text](url)`) are measured by their
 * link text only, since that's what actually renders.
 *
 * Two modes:
 *   (default)  Full-repo audit against the actual guideline thresholds
 *              (<=25/<=60). Informational only — always exits 0. Run this
 *              manually (`npm run validate-table-cells`) to see the current
 *              debt; it is NOT part of the build, because ~5,400 pre-existing
 *              cells across the site are already over budget by a few
 *              characters and retroactively hard-failing the build on that
 *              would block every future deploy.
 *   --staged   Pre-commit mode: checks only staged article files, and only
 *              hard-fails on content dramatically over budget (full
 *              sentences, not "a few characters over") — see HARD_FAIL_*
 *              below. This is what's wired into .git/hooks/pre-commit, so
 *              new/edited tables can't reintroduce the Loci failure mode
 *              without a human choosing to bypass the hook.
 *
 * Exit 0 on success (or default full-repo audit mode), 1 on a --staged
 * hard-fail.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LIB_DIR = path.resolve(ROOT, 'src', 'lib');

// The GEO_WRITING_GUIDELINES.md target is <=25/<=60. That target was never
// enforced, so ~5,400 pre-existing cells across the site are already over it
// by a handful of characters (a table cell wrapping onto one extra line is
// not the failure this script exists to catch). The pre-commit gate below
// only blocks NEW/EDITED content that is dramatically over — i.e. actual
// full-sentence paragraph cells like the ones that broke Loci's layout —
// so it can't silently pass egregious content, but also can't brick every
// commit that touches an already-slightly-over-budget file it doesn't edit.
const MAX_HEADER_LEN = 25;
const MAX_CELL_LEN = 60;
const HARD_FAIL_HEADER_LEN = 40;   // pre-commit gate: block only clearly-broken headers
const HARD_FAIL_CELL_LEN = 110;    // pre-commit gate: block only clearly-broken cells (full sentences)

const STAGED_MODE = process.argv.includes('--staged');

/** Every src/lib/{cluster}/articles/ directory that currently exists. */
function findArticleDirs() {
  const dirs = [];
  if (!fs.existsSync(LIB_DIR)) return dirs;
  for (const entry of fs.readdirSync(LIB_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const articlesDir = path.join(LIB_DIR, entry.name, 'articles');
    if (fs.existsSync(articlesDir)) dirs.push(articlesDir);
  }
  return dirs.sort();
}

/** Visible display length: strip markdown links/bold to their inner text, collapse whitespace. */
function displayLength(raw) {
  const text = raw
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // [text](url) -> text
    .replace(/\*\*([^*]*)\*\*/g, '$1')       // **bold** -> bold
    .replace(/\s+/g, ' ')
    .trim();
  return text.length;
}

/**
 * Find each `{ ... columns: [...] ... rows: [...] ... }` section object in
 * the file text, paired with whether that same object sets itemHeadings: true.
 * Approach: locate every `columns: [` occurrence, then scan outward for the
 * enclosing object's braces (by indentation-based heuristic: the nearest
 * preceding line ending in `: {` at a shallower or equal indent, then find
 * the matching close by brace-depth from there) — this file's article
 * objects are consistently formatted, so a brace-depth walk from the
 * `columns:` line's start back to its opening `{` and forward to its
 * closing `}` is reliable enough for this check.
 */
function findSections(content) {
  const sections = [];
  const columnsRe = /columns:\s*\[/g;
  let m;
  while ((m = columnsRe.exec(content)) !== null) {
    // Walk backward from the `columns:` match to find the opening `{` of the
    // enclosing section object (the nearest unmatched `{` scanning left).
    let depth = 0;
    let openIdx = -1;
    for (let i = m.index; i >= 0; i--) {
      const ch = content[i];
      if (ch === '}') depth++;
      else if (ch === '{') {
        if (depth === 0) { openIdx = i; break; }
        depth--;
      }
    }
    if (openIdx === -1) continue;

    // Walk forward from openIdx to find the matching closing `}`.
    let d = 0;
    let closeIdx = -1;
    for (let i = openIdx; i < content.length; i++) {
      const ch = content[i];
      if (ch === '{') d++;
      else if (ch === '}') {
        d--;
        if (d === 0) { closeIdx = i; break; }
      }
    }
    if (closeIdx === -1) continue;

    const sectionText = content.slice(openIdx, closeIdx + 1);
    const startLine = content.slice(0, openIdx).split('\n').length;
    sections.push({ text: sectionText, startLine });

    // Skip past this section to avoid re-matching nested `columns:` inside it
    // (e.g. a rankedItems entry with its own table) as a separate section.
    columnsRe.lastIndex = closeIdx + 1;
  }
  return sections;
}

/** Extract the `columns: [...]` string literals from a section's text. */
function extractColumns(sectionText) {
  const m = sectionText.match(/columns:\s*\[([^\]]*)\]/s);
  if (!m) return [];
  const out = [];
  const strRe = /'([^']*)'|"([^"]*)"/g;
  let s;
  while ((s = strRe.exec(m[1])) !== null) out.push(s[1] ?? s[2]);
  return out;
}

/**
 * Extract row cell VALUES (not keys) from a `rows: [...]` array of
 * `{ 'Col': 'value', ... }` objects. Pulls every `'key': 'value'` pair and
 * keeps only the value.
 */
function extractCellValues(sectionText) {
  const m = sectionText.match(/rows:\s*\[(.*)\]\s*,?\s*(items|callouts|image|imageCaption|note|snippetBlocks|content)?:/s);
  const rowsText = m ? m[1] : (sectionText.match(/rows:\s*\[([\s\S]*)/) ?? [null, ''])[1];
  const out = [];
  const pairRe = /'((?:[^'\\]|\\.)*)'\s*:\s*'((?:[^'\\]|\\.)*)'/g;
  let p;
  while ((p = pairRe.exec(rowsText)) !== null) out.push(p[2]);
  return out;
}

function hasItemHeadings(sectionText) {
  return /itemHeadings:\s*true/.test(sectionText);
}

function validateFile(absPath, errors, { headerLimit, cellLimit }) {
  const file = path.relative(process.cwd(), absPath);
  const content = fs.readFileSync(absPath, 'utf-8');
  const sections = findSections(content);

  for (const { text, startLine } of sections) {
    if (hasItemHeadings(text)) continue; // exempt by design

    const columns = extractColumns(text);
    for (const col of columns) {
      const len = displayLength(col);
      if (len > headerLimit) {
        errors.push({ file, line: startLine, kind: 'header', text: col, len, limit: headerLimit });
      }
    }

    const cells = extractCellValues(text);
    for (const cell of cells) {
      const len = displayLength(cell);
      if (len > cellLimit) {
        errors.push({ file, line: startLine, kind: 'cell', text: cell, len, limit: cellLimit });
      }
    }
  }
}

/** Staged article files (matches the filter used by validate-evergreen-articles.mjs). */
function getStagedArticleFiles() {
  try {
    const staged = execSync('git diff --cached --name-only', { cwd: ROOT })
      .toString()
      .split('\n')
      .filter(Boolean);
    return staged
      .filter(f => f.startsWith('src/lib/') && f.includes('/articles/') && f.endsWith('.ts'))
      .map(f => path.resolve(ROOT, f))
      .filter(f => fs.existsSync(f));
  } catch {
    return [];
  }
}

function printReport(errors, limitLabel) {
  console.error('');
  console.error('✗ Table cell length validation FAILED');
  console.error('');
  console.error(limitLabel);
  console.error('  (GEO_WRITING_GUIDELINES.md — Comparison Tables — Column & Cell Content Rules).');
  console.error('  If content genuinely needs full sentences, set itemHeadings: true on that');
  console.error('  section instead of forcing it into a <table> — see loci-ai-review-offline-local-ai.ts');
  console.error('  (tradeOffs/platforms/vsAlternatives) for the pattern.');
  console.error('');
  for (const e of errors.slice(0, 40)) {
    console.error(`  ${e.file}:${e.line}  [${e.kind}, ${e.len}/${e.limit} chars]  "${e.text.slice(0, 70)}${e.text.length > 70 ? '…' : ''}"`);
  }
  if (errors.length > 40) console.error(`  … and ${errors.length - 40} more`);
  console.error('');
  console.error(`  ${errors.length} violation(s) across ${new Set(errors.map(e => e.file)).size} file(s)`);
}

function main() {
  if (STAGED_MODE) {
    const files = getStagedArticleFiles();
    if (files.length === 0) {
      console.log('✓ Table cell length check: no staged article files to check');
      process.exit(0);
    }
    const errors = [];
    for (const f of files) validateFile(f, errors, { headerLimit: HARD_FAIL_HEADER_LEN, cellLimit: HARD_FAIL_CELL_LEN });
    if (errors.length === 0) {
      console.log(`✓ Table cell length check passed (${files.length} staged article file(s))`);
      process.exit(0);
    }
    printReport(errors, `  Blocking only clearly-broken content: headers >${HARD_FAIL_HEADER_LEN} chars, cells >${HARD_FAIL_CELL_LEN} chars.`);
    process.exit(1);
  }

  // Default: full-repo informational audit against the actual guideline. Never blocks.
  const errors = [];
  let totalFiles = 0;
  const summary = [];

  for (const dir of findArticleDirs()) {
    const cluster = path.relative(LIB_DIR, path.dirname(dir));
    const files = fs
      .readdirSync(dir)
      .filter(f => f.endsWith('.ts') && !f.endsWith('.d.ts'))
      .map(f => path.join(dir, f))
      .sort();

    for (const f of files) validateFile(f, errors, { headerLimit: MAX_HEADER_LEN, cellLimit: MAX_CELL_LEN });
    totalFiles += files.length;
    summary.push(`${cluster}: ${files.length}`);
  }

  if (errors.length === 0) {
    console.log(`✓ Table cell length audit: 0 violations (${totalFiles} articles — ${summary.join(', ')})`);
    process.exit(0);
  }

  console.log('');
  console.log(`ℹ Table cell length audit (informational, not a build gate): ${errors.length} violation(s) across ${new Set(errors.map(e => e.file)).size} file(s), against the <=${MAX_HEADER_LEN}/<=${MAX_CELL_LEN} guideline.`);
  console.log(`  Pre-commit only blocks new/edited content over ${HARD_FAIL_HEADER_LEN}/${HARD_FAIL_CELL_LEN} chars (full-sentence cells) — run with --staged to see that gate.`);
  process.exit(0);
}

main();

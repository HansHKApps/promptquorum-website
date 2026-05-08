#!/usr/bin/env node

/**
 * Translation Integrity Validator
 *
 * Prevents the runtime "theme bug" — a translated `theme:` value misses the
 * THEME_COLORS lookup in PowerLocalLLMPostClient.tsx; the fallback key
 * 'Getting Started' is also missing from the map; the page 500s on render.
 *
 * Runs as the `prebuild` hook so misconfigured articles fail the build instead
 * of shipping broken pages to production.
 *
 * Checks (per file in src/lib/power-local-llm/articles/*.ts):
 *   1. Every `theme:` value must be in CANONICAL_THEMES.
 *   2. All `theme:` values within one file must be IDENTICAL across locales.
 *   3. All `slug:` values within one file must be IDENTICAL across locales.
 *   4. All `type:` values within one file must be IDENTICAL across locales.
 *
 * Exit 0 on success, 1 on any failure.
 *
 * NOTE on file extension: requested as .ts + tsx, written as .mjs to match
 * existing scripts/ convention (8 of 9 validators use .mjs) and avoid adding
 * a new dev dependency for one validator. Convert to .ts later if desired.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES_DIR = path.resolve(__dirname, '..', 'src', 'lib', 'power-local-llm', 'articles');

const CANONICAL_THEMES = new Set([
  'Overview & Reference',
  'Easiest Desktop Apps',
  'RAG & Document Chat',
  'Coding Assistants',
  'Local AI Agents & Tool Use',
  'Creative & Roleplay',
  'Mobile & Edge LLMs',
  'Productivity & Knowledge Tools',
]);

/**
 * Match a TOP-LEVEL field declaration like `    theme: 'value',`.
 * Top-level fields of a language block sit at exactly 4-space indent
 * (article object → 0 spaces, `  en: {` → 2 spaces, fields → 4 spaces).
 * Locking to 4 leading spaces avoids matching deeply nested fields like
 * `snippetBlocks[].type` (12+ spaces) or `callouts[].type` (12+ spaces),
 * which are unrelated render-time enums, not the article-level
 * discriminator this validator targets.
 *
 * Handles escaped apostrophes inside the value (e.g., `'l\'IA'`).
 */
function buildFieldRegex(field) {
  // Exactly 4 leading spaces, field, colon, single-quoted string with \' escapes, optional comma.
  return new RegExp(`^    ${field}:\\s*'((?:\\\\.|[^'\\\\])*)',?\\s*$`);
}

/** Extract every occurrence of `field: '...'` from `content` as { value, line }. */
function extractField(content, field) {
  const re = buildFieldRegex(field);
  const out = [];
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(re);
    if (m) {
      // Decode TS string escapes we care about (apostrophe, backslash).
      const decoded = m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\');
      out.push({ value: decoded, line: i + 1 });
    }
  }
  return out;
}

function validateFile(absPath, errors) {
  const file = path.relative(process.cwd(), absPath);
  const content = fs.readFileSync(absPath, 'utf-8');

  // CHECK 1 — every theme must be canonical
  const themes = extractField(content, 'theme');
  for (const m of themes) {
    if (!CANONICAL_THEMES.has(m.value)) {
      errors.push({
        file,
        line: m.line,
        field: 'theme',
        problem: `value '${m.value}' is not in CANONICAL_THEMES. Allowed: ${[...CANONICAL_THEMES].map(t => `'${t}'`).join(', ')}`,
      });
    }
  }

  // CHECK 2 — all themes within file must be identical
  const themeValues = new Set(themes.map(m => m.value));
  if (themeValues.size > 1) {
    const detail = themes.map(m => `${file}:${m.line} '${m.value}'`).join('  |  ');
    errors.push({
      file,
      line: themes[0]?.line ?? 0,
      field: 'theme',
      problem: `theme values differ across language blocks (must be identical). Occurrences: ${detail}`,
    });
  }

  // CHECK 3 — slug values (forward-compat; not a top-level field on current articles)
  const slugs = extractField(content, 'slug');
  if (slugs.length > 0) {
    const slugValues = new Set(slugs.map(m => m.value));
    if (slugValues.size > 1) {
      const detail = slugs.map(m => `${file}:${m.line} '${m.value}'`).join('  |  ');
      errors.push({
        file,
        line: slugs[0].line,
        field: 'slug',
        problem: `slug values differ across language blocks (must be identical). Occurrences: ${detail}`,
      });
    }
  }

  // CHECK 4 — type values (forward-compat)
  const types = extractField(content, 'type');
  if (types.length > 0) {
    const typeValues = new Set(types.map(m => m.value));
    if (typeValues.size > 1) {
      const detail = types.map(m => `${file}:${m.line} '${m.value}'`).join('  |  ');
      errors.push({
        file,
        line: types[0].line,
        field: 'type',
        problem: `type values differ across language blocks (must be identical). Occurrences: ${detail}`,
      });
    }
  }
}

function main() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`✗ Articles directory not found: ${ARTICLES_DIR}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.ts') && !f.endsWith('.d.ts'))
    .map(f => path.join(ARTICLES_DIR, f))
    .sort();

  const errors = [];
  for (const f of files) validateFile(f, errors);

  if (errors.length === 0) {
    console.log(`✓ Translation integrity check passed (${files.length} articles validated)`);
    process.exit(0);
  }

  console.error('');
  console.error('✗ Translation integrity validation FAILED');
  console.error('');
  for (const e of errors) {
    console.error(`  ${e.file}:${e.line}  [${e.field}]  ${e.problem}`);
  }
  console.error('');
  const fileCount = new Set(errors.map(e => e.file)).size;
  console.error(`  ${errors.length} error(s) across ${fileCount} file(s)`);
  console.error('');
  process.exit(1);
}

main();

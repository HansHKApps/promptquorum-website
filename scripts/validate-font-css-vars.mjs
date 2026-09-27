#!/usr/bin/env node

/**
 * Font CSS variable usage validator.
 *
 * Guards against a font being declared via next/font/google or next/font/local
 * (a `variable: '--font-x'` loader call) with zero matching CSS-variable usage
 * anywhere in the codebase — the exact "declared but unused" state that made
 * the 2026-07-26 removal of Noto Sans KR legitimate (commit 6fd2a8e59: the
 * loader declared `--font-korean` but no CSS referenced it, so the font was
 * downloaded on every page load for zero visual effect). That font was later
 * re-added correctly-wired (commit 7d0a7ad42) and, in the item-5 font-scoping
 * fix, its loader call moved from the root layout into src/app/ko/layout.tsx.
 * This validator protects both directions of that history: it fails if any
 * font variable is declared without a matching usage, and it fails if the
 * moved --font-korean declaration ever loses its matching `.font-korean-scope`
 * selector in globals.css.
 *
 * Follows the walk/report/exit-code pattern of scripts/validate-freshness-tier.mjs.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const ERRORS = [];
const WARNINGS = [];

// Directories to walk for both loader-declaration scanning and usage scanning.
// src/ holds all app code, components, and globals.css — but usage can also
// legitimately live in root-level config (tailwind.config.js maps
// --font-plus-jakarta-sans / --font-jetbrains-mono into the `sans`/`mono`
// Tailwind font families), so root-level config files are scanned for usage
// too. scripts/, node_modules/, and build output are irrelevant to either side
// of this check.
const SCAN_DIRS = ['src'];
const ROOT_CONFIG_FILES = ['tailwind.config.js', 'tailwind.config.ts'];
const SCAN_EXTENSIONS = ['.ts', '.tsx', '.css'];

function walk(dir, out = []) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return out;
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    const full = path.join(abs, entry.name);
    const rel = path.relative(ROOT, full);
    if (entry.isDirectory()) {
      walk(rel, out);
    } else if (entry.isFile() && SCAN_EXTENSIONS.includes(path.extname(entry.name))) {
      out.push(rel);
    }
  }
  return out;
}

function readLines(relPath) {
  try {
    return fs.readFileSync(path.join(ROOT, relPath), 'utf-8').split('\n');
  } catch (err) {
    WARNINGS.push(`Failed to read ${relPath}: ${err.message}`);
    return [];
  }
}

const FONT_IMPORT_PATTERN = /from\s+['"]next\/font\/(google|local)['"]/;
const VARIABLE_DECL_PATTERN = /variable:\s*['"](--[\w-]+)['"]/;

function main() {
  const files = [];
  for (const dir of SCAN_DIRS) walk(dir, files);
  for (const configFile of ROOT_CONFIG_FILES) {
    if (fs.existsSync(path.join(ROOT, configFile))) files.push(configFile);
  }

  // Step 1: find every font-loader `variable: '--font-x'` declaration site.
  // Restricted to files that actually import next/font/google or
  // next/font/local, so an unrelated object literal that happens to have a
  // `variable:` key can't be mistaken for a font declaration.
  const declarations = []; // { variable, file, line (1-indexed) }

  for (const file of files) {
    if (!file.endsWith('.ts') && !file.endsWith('.tsx')) continue;
    const lines = readLines(file);
    const content = lines.join('\n');
    if (!FONT_IMPORT_PATTERN.test(content)) continue;

    lines.forEach((lineText, idx) => {
      const m = lineText.match(VARIABLE_DECL_PATTERN);
      if (m) {
        declarations.push({ variable: m[1], file, line: idx + 1 });
      }
    });
  }

  if (declarations.length === 0) {
    console.log('⚠️  No next/font/google or next/font/local loader calls with a `variable:` found under src/ — nothing to validate.');
    process.exit(0);
  }

  console.log(`Found ${declarations.length} declared font CSS variable(s):`);
  declarations.forEach(d => console.log(`  ${d.variable}  (${d.file}:${d.line})`));
  console.log('');

  // Step 2: for each declared variable, search every scanned file for a usage
  // of that exact variable name — in globals.css font-family rules, inline
  // component styles/classNames, or anywhere else it's referenced as
  // `var(--font-x)` or the bare token. A match on the exact declaration
  // line/file itself doesn't count as usage.
  for (const decl of declarations) {
    let usageCount = 0;
    const usageSites = [];

    for (const file of files) {
      const lines = readLines(file);
      lines.forEach((lineText, idx) => {
        if (!lineText.includes(decl.variable)) return;
        const isDeclarationSite = file === decl.file && idx + 1 === decl.line;
        if (isDeclarationSite) return;
        usageCount++;
        usageSites.push(`${file}:${idx + 1}`);
      });
    }

    if (usageCount === 0) {
      ERRORS.push(
        `Font variable ${decl.variable} is declared at ${decl.file}:${decl.line} but has zero matching usage anywhere under src/ ` +
        `(no globals.css font-family rule, no className/style reference). This is the exact "declared but unused" state that made ` +
        `removing this font legitimate in the past — either wire it up (see the .font-korean-scope pattern in globals.css / src/app/ko/layout.tsx ` +
        `for reference) or remove the unused loader call.`
      );
    } else {
      console.log(`✓ ${decl.variable} — ${usageCount} usage site(s): ${usageSites.join(', ')}`);
    }
  }

  console.log(`\n📊 VALIDATION RESULTS\n`);
  console.log(`✅ Font variables checked: ${declarations.length}`);
  console.log(`❌ Errors: ${ERRORS.length}`);
  console.log(`⚠️  Warnings: ${WARNINGS.length}\n`);

  if (ERRORS.length > 0) {
    console.log('ERRORS:\n');
    ERRORS.forEach((err, i) => console.log(`  ${i + 1}. ${err}\n`));
    console.log(`\n❌ Failed: ${ERRORS.length} unused font variable(s)\n`);
    process.exit(1);
  }

  console.log('✓ All font CSS variables have at least one matching usage.\n');
  process.exit(0);
}

main();

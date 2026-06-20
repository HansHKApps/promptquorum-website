#!/usr/bin/env node
// scripts/codemod-c3-fallback.mjs
// Fallback for C3: add 'proficiencyLevel' to schema blocks where it's still missing.
// The main codemod (codemod-c2c3-schema-fields.mjs) only handled:
//   Strategy A: quoted 'educationalLevel': 'VALUE' inside schema
//   Strategy B: unquoted educationalLevel before QUOTED 'speakable':
// Missed:
//   - Files where schema has unquoted speakable: (all smart-home articles)
//   - Files where schema has no speakable at all (many power-local-llm / prompt-bites)
// This script handles both remaining patterns per locale block.
// Usage:
//   node scripts/codemod-c3-fallback.mjs         # dry-run
//   node scripts/codemod-c3-fallback.mjs --apply  # apply

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

const LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'];

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

// Brace-count to find a key's value block. Returns { start, end } (content.slice(start,end) = block incl {}).
function findBlockPos(content, key) {
  const keyRe = new RegExp(`(?:^|[,{\\s])\\s*(?:'${key}'|"${key}"|${key})\\s*:\\s*\\{`, 'm');
  const match = keyRe.exec(content);
  if (!match) return null;
  const openBrace = content.indexOf('{', match.index + match[0].length - 1);
  let depth = 0, inStr = false, strCh = '', i = openBrace;
  while (i < content.length) {
    const c = content[i];
    if (inStr) {
      if (c === '\\') { i += 2; continue; }
      if (c === strCh) inStr = false;
    } else {
      if (c === '"' || c === "'" || c === '`') { inStr = true; strCh = c; }
      else if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) return { start: openBrace, end: i + 1 }; }
    }
    i++;
  }
  return null;
}

// Inject proficiencyLevel into a schema block string.
// Tries anchors in priority order; returns modified block or null if nothing to do.
function injectIntoSchemaBlock(schemaBlock, level) {
  if (schemaBlock.includes('proficiencyLevel')) return null; // already present

  // Anchor 1: before quoted 'speakable': (e.g. local-llms articles)
  const speakableQ = /(\n([ \t]*)'speakable'\s*:)/;
  if (speakableQ.test(schemaBlock)) {
    return schemaBlock.replace(speakableQ, (m, line, indent) =>
      `\n${indent}'proficiencyLevel': '${level}',${line}`
    );
  }

  // Anchor 2: before unquoted speakable: (e.g. smart-home articles)
  const speakableU = /(\n([ \t]*)speakable\s*:)/;
  if (speakableU.test(schemaBlock)) {
    return schemaBlock.replace(speakableU, (m, line, indent) =>
      `\n${indent}'proficiencyLevel': '${level}',${line}`
    );
  }

  // Anchor 3: before 'about': or about: (common in most schemas)
  const aboutQ = /(\n([ \t]*)'about'\s*:)/;
  if (aboutQ.test(schemaBlock)) {
    return schemaBlock.replace(aboutQ, (m, line, indent) =>
      `\n${indent}'proficiencyLevel': '${level}',${line}`
    );
  }
  const aboutU = /(\n([ \t]*)about\s*:)/;
  if (aboutU.test(schemaBlock)) {
    return schemaBlock.replace(aboutU, (m, line, indent) =>
      `\n${indent}'proficiencyLevel': '${level}',${line}`
    );
  }

  // Anchor 4: before 'mainEntityOfPage': (fallback)
  const mainEntity = /(\n([ \t]*)'?mainEntityOfPage'?\s*:)/;
  if (mainEntity.test(schemaBlock)) {
    return schemaBlock.replace(mainEntity, (m, line, indent) =>
      `\n${indent}'proficiencyLevel': '${level}',${line}`
    );
  }

  // Anchor 5: before the closing } of the schema block
  // Must ensure the preceding field has a trailing comma, since we're appending after it.
  const lastBrace = schemaBlock.lastIndexOf('\n');
  if (lastBrace !== -1) {
    const indentMatch = schemaBlock.match(/\n([ \t]+)[^\n]+/);
    const indent = indentMatch ? indentMatch[1] : '        ';
    let prefix = schemaBlock.slice(0, lastBrace);
    // Add trailing comma to the last field if missing
    const trimmedPrefix = prefix.trimEnd();
    const lastChar = trimmedPrefix.slice(-1);
    if (lastChar !== ',' && lastChar !== '{') {
      prefix = trimmedPrefix + ',\n' + prefix.slice(trimmedPrefix.length);
    }
    return prefix + `\n${indent}'proficiencyLevel': '${level}',` + schemaBlock.slice(lastBrace);
  }

  return null;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const allFiles = [];
for (const d of ARTICLE_DIRS) allFiles.push(...walkDir(path.join(ROOT, d)));

// Only process files that still lack proficiencyLevel
const targetFiles = allFiles.filter(f => !fs.readFileSync(f, 'utf-8').includes('proficiencyLevel'));
console.log(APPLY ? `🔧 APPLYING C3 fallback to ${targetFiles.length} files\n` : `🔍 DRY-RUN C3 fallback (${targetFiles.length} files need proficiencyLevel)\n`);

let totalFixed = 0;
let totalInjections = 0;

for (const file of targetFiles) {
  const original = fs.readFileSync(file, 'utf-8');
  let content = original;
  const rel = path.relative(ROOT, file);
  let fileInjections = 0;

  // Collect locale blocks sorted by start position descending (so replacements don't shift earlier positions)
  const localeBlocks = [];
  for (const locale of LOCALES) {
    const pos = findBlockPos(content, locale);
    if (pos) localeBlocks.push({ locale, ...pos });
  }
  localeBlocks.sort((a, b) => b.start - a.start);

  for (const { locale, start, end } of localeBlocks) {
    const localeContent = content.slice(start, end);

    // Skip locale blocks without a schema sub-block
    const schemaPos = findBlockPos(localeContent, 'schema');
    if (!schemaPos) continue;

    // Extract this locale's top-level educationalLevel value
    const edLevelMatch = localeContent.match(
      /(?:^|[,{,\n])[ \t]*(?:'educationalLevel'|educationalLevel)\s*:\s*'([^']+)'/m
    );
    if (!edLevelMatch) continue; // no educationalLevel in this locale block — skip
    const level = edLevelMatch[1];

    // Extract the schema block from within the locale block
    const schemaBlockStr = localeContent.slice(schemaPos.start, schemaPos.end);
    const injected = injectIntoSchemaBlock(schemaBlockStr, level);
    if (!injected) continue; // already has proficiencyLevel or no anchor found

    // Reconstruct: locale block with injected schema
    const newLocaleContent = localeContent.slice(0, schemaPos.start) + injected + localeContent.slice(schemaPos.end);
    content = content.slice(0, start) + newLocaleContent + content.slice(end);
    fileInjections++;
  }

  if (content !== original) {
    totalFixed++;
    totalInjections += fileInjections;
    console.log(`  ${rel}  (+${fileInjections} locale blocks)`);
    if (APPLY) fs.writeFileSync(file, content, 'utf-8');
  }
}

console.log(`\n${APPLY ? '✅ Applied' : '📋 Would fix'} ${totalFixed} files, ${totalInjections} locale schema blocks`);
if (!APPLY) console.log('\nRe-run with --apply to write changes.');

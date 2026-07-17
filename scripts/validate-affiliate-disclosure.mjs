#!/usr/bin/env node

/**
 * Affiliate Disclosure Validator
 *
 * Prevents a repeat of the `best-local-llm-ide-plugins-2026.ts` ko gap: every
 * other language block had `affiliateDisclosure: true`, but ko had it set to
 * `false` while still carrying live `affiliateLinks` entries — so Korean
 * readers saw the same product-link buying-guide content as every other
 * locale, minus the page-level disclosure banner.
 *
 * `affiliateDisclosure` is a hand-set per-language-block boolean (see
 * src/lib/local-llms/types.ts) with no structural link to whether that
 * locale's content actually contains affiliate links, and no build-time
 * fallback — so it can silently drift on any future translation/authoring
 * pass. This check makes that drift a build failure instead of a silent gap.
 *
 * Checks (per language block, in every src/lib/{cluster}/articles/*.ts file):
 *   If the block contains any non-empty `affiliateLinks: [...]` array
 *   (at any nesting depth — e.g. directly on a section, or nested inside
 *   rankedItems/subsections), the block's top-level `affiliateDisclosure`
 *   field must be `true`.
 *
 * Exit 0 on success, 1 on any failure.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LIB_DIR = path.resolve(__dirname, '..', 'src', 'lib');

// Every language this site ships article content in (see CLAUDE.md i18n section).
const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'];

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

/**
 * Split a file's content into per-language blocks. Top-level language keys
 * (e.g. `  en: {`) sit at exactly 2-space indent — one per locale, per the
 * `Partial<Record<Language, LLMArticle>>` article shape used across all
 * clusters. A block runs from its opening line to the line before the next
 * top-level language key (or end of file).
 */
function splitLangBlocks(content) {
  const lines = content.split('\n');
  const starts = [];
  const langKeyRe = new RegExp(`^  (${LANGS.join('|')}):\\s*{\\s*$`);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(langKeyRe);
    if (m) starts.push({ lang: m[1], startLine: i });
  }
  const blocks = [];
  for (let i = 0; i < starts.length; i++) {
    const { lang, startLine } = starts[i];
    const endLine = i + 1 < starts.length ? starts[i + 1].startLine : lines.length;
    blocks.push({
      lang,
      startLine: startLine + 1, // 1-indexed for reporting
      text: lines.slice(startLine, endLine).join('\n'),
    });
  }
  return blocks;
}

/** Does this block contain at least one non-empty `affiliateLinks: [...]` array? */
function hasAffiliateLinks(blockText) {
  const re = /affiliateLinks\s*:\s*\[/g;
  let m;
  while ((m = re.exec(blockText)) !== null) {
    const rest = blockText.slice(m.index + m[0].length);
    const nextNonWhitespace = rest.match(/\S/);
    if (nextNonWhitespace && nextNonWhitespace[0] !== ']') return true;
  }
  return false;
}

/** Top-level `affiliateDisclosure:` value for this block, or undefined if absent. */
function affiliateDisclosureValue(blockText) {
  const m = blockText.match(/^ {4}affiliateDisclosure:\s*(true|false)\s*,?\s*$/m);
  return m ? m[1] === 'true' : undefined;
}

function validateFile(absPath, errors) {
  const file = path.relative(process.cwd(), absPath);
  const content = fs.readFileSync(absPath, 'utf-8');
  const blocks = splitLangBlocks(content);

  for (const block of blocks) {
    if (!hasAffiliateLinks(block.text)) continue;
    const disclosure = affiliateDisclosureValue(block.text);
    if (disclosure !== true) {
      errors.push({
        file,
        line: block.startLine,
        lang: block.lang,
        value: disclosure === undefined ? 'missing' : 'false',
      });
    }
  }
}

function main() {
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

    for (const f of files) validateFile(f, errors);
    totalFiles += files.length;
    summary.push(`${cluster}: ${files.length}`);
  }

  if (errors.length === 0) {
    console.log(`✓ Affiliate disclosure check passed (${totalFiles} articles validated — ${summary.join(', ')})`);
    process.exit(0);
  }

  console.error('');
  console.error('✗ Affiliate disclosure validation FAILED');
  console.error('');
  for (const e of errors) {
    console.error(`  ${e.file}:${e.line}  [${e.lang}]  affiliateDisclosure is ${e.value} but this language block has affiliate links`);
  }
  console.error('');
  const fileCount = new Set(errors.map(e => e.file)).size;
  console.error(`  ${errors.length} violation(s) across ${fileCount} file(s)`);
  console.error('  Fix: set affiliateDisclosure: true on every language block that renders affiliateLinks.');
  console.error('');
  process.exit(1);
}

main();

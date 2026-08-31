#!/usr/bin/env node

/**
 * Per-locale seoTitle / metaDescription length validator.
 *
 * Every locale has its own length budget, and they differ a lot: a Japanese
 * title that fits is roughly half the character count of an English one,
 * because CJK glyphs carry more information and render wider in a SERP.
 * docs/geo-translation.md documents these budgets (lines 147, 582, 668) and
 * tells translators "never translate literally" — but nothing enforced either,
 * so locale metadata drifted into being word-for-word ports of the English.
 *
 * That drift is why this check exists. The /ko/local-llms hub carried a 45-char
 * Korean title (budget 28–38) that was a literal translation of the English
 * VRAM-tier framing, while the term Korean searchers actually use — 순위,
 * converting at 27–42% — appeared nowhere in it. Length is a reliable proxy:
 * a CJK title 40+ chars over budget is almost always a translated English
 * title rather than one written natively.
 *
 * Budgets (chars), from docs/geo-translation.md and the geo-meta-optimizer skill:
 *   Latin (en/de/fr/es/pt)  title 48–58   description 140–155
 *   CJK   (ja/zh)           title 24–32   description  70–110
 *   Korean (ko)             title 28–38   description  70–110
 *   Arabic (ar)             title 40–55   description 110–150
 *
 * REPORT ONLY by default: 2,263 titles and 2,405 descriptions were already out
 * of budget when this was written, so failing the build would block everything.
 * Run with --strict (or set STRICT_META_BUDGETS=1) to exit 1 on violations —
 * switch the prebuild over once the backlog is cleared.
 *
 * Usage:
 *   node scripts/validate-meta-budgets.mjs                 # summary
 *   node scripts/validate-meta-budgets.mjs --over          # only over-length (SERP truncation)
 *   node scripts/validate-meta-budgets.mjs --locale=ja     # one locale
 *   node scripts/validate-meta-budgets.mjs --limit=50      # cap the listing
 *   node scripts/validate-meta-budgets.mjs --strict        # exit 1 on violations
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LIB_DIR = path.resolve(__dirname, '..', 'src', 'lib');

const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'];

/** [titleMin, titleMax, descMin, descMax] per locale. */
const BUDGETS = {
  en: [48, 58, 140, 155],
  de: [48, 58, 140, 155],
  fr: [48, 58, 140, 155],
  es: [48, 58, 140, 155],
  pt: [48, 58, 140, 155],
  ja: [24, 32, 70, 110],
  zh: [24, 32, 70, 110],
  ko: [28, 38, 70, 110],
  ar: [40, 55, 110, 150],
};

const args = process.argv.slice(2);
const STRICT = args.includes('--strict') || process.env.STRICT_META_BUDGETS === '1';
const OVER_ONLY = args.includes('--over');
const ONLY_LOCALE = (args.find((a) => a.startsWith('--locale=')) || '').split('=')[1];
const LIMIT = Number((args.find((a) => a.startsWith('--limit=')) || '').split('=')[1] || 25);

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

/** Same block-splitting contract as validate-affiliate-disclosure.mjs. */
function splitLangBlocks(content) {
  const lines = content.split('\n');
  const starts = [];
  const langKeyRe = new RegExp(`^  (${LANGS.join('|')}):\\s*{\\s*$`);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(langKeyRe);
    if (m) starts.push({ lang: m[1], startLine: i });
  }
  return starts.map(({ lang, startLine }, i) => ({
    lang,
    startLine: startLine + 1,
    text: lines.slice(startLine, i + 1 < starts.length ? starts[i + 1].startLine : lines.length).join('\n'),
  }));
}

/**
 * Read a single-quoted TS string value for `key`. Counts the rendered length:
 * an escaped \' is one character to a reader, and \uXXXX escapes are one glyph.
 */
function readField(blockText, key) {
  // Values may be single-quoted, double-quoted or backticked. French blocks in
  // particular use double quotes so the text can contain an apostrophe
  // ("L'énergie solaire..."), and reading only single quotes silently skipped
  // 82 fields, 69 of them French.
  const re = new RegExp(`(?<![A-Za-z0-9_])${key}:\\s*(['"\`])`);
  const m = re.exec(blockText);
  if (!m) return null;
  const quote = m[1];
  let i = m.index + m[0].length;
  let out = '';
  while (i < blockText.length) {
    const c = blockText[i];
    if (c === '\\') {
      if (blockText.slice(i + 1, i + 2) === 'u') {
        out += 'X'; i += 6; continue;
      }
      out += blockText[i + 1]; i += 2; continue;
    }
    if (c === quote) return out;
    out += c; i += 1;
  }
  return null;
}

const findings = [];
let checkedTitles = 0;
let checkedDescs = 0;

for (const dir of findArticleDirs()) {
  for (const name of fs.readdirSync(dir).sort()) {
    if (!name.endsWith('.ts')) continue;
    const abs = path.join(dir, name);
    const file = path.relative(process.cwd(), abs);
    const content = fs.readFileSync(abs, 'utf-8');
    for (const block of splitLangBlocks(content)) {
      if (ONLY_LOCALE && block.lang !== ONLY_LOCALE) continue;
      const budget = BUDGETS[block.lang];
      if (!budget) continue;
      const [tMin, tMax, dMin, dMax] = budget;

      const title = readField(block.text, 'seoTitle');
      if (title !== null) {
        checkedTitles += 1;
        if (title.length > tMax) {
          findings.push({ file, lang: block.lang, field: 'seoTitle', len: title.length,
            max: tMax, over: title.length - tMax, text: title });
        } else if (title.length < tMin && !OVER_ONLY) {
          findings.push({ file, lang: block.lang, field: 'seoTitle', len: title.length,
            min: tMin, under: tMin - title.length, text: title });
        }
      }

      const desc = readField(block.text, 'metaDescription');
      if (desc !== null) {
        checkedDescs += 1;
        if (desc.length > dMax) {
          findings.push({ file, lang: block.lang, field: 'metaDescription', len: desc.length,
            max: dMax, over: desc.length - dMax, text: desc });
        } else if (desc.length < dMin && !OVER_ONLY) {
          findings.push({ file, lang: block.lang, field: 'metaDescription', len: desc.length,
            min: dMin, under: dMin - desc.length, text: desc });
        }
      }
    }
  }
}

console.log('📏 Per-locale meta length check (docs/geo-translation.md budgets)');
console.log(`   seoTitle checked: ${checkedTitles} | metaDescription checked: ${checkedDescs}`);

if (findings.length === 0) {
  console.log('\n✅ All titles and descriptions are within their locale budget.');
  process.exit(0);
}

const over = findings.filter((f) => f.over !== undefined);
const under = findings.filter((f) => f.under !== undefined);
console.log(`\n   over budget  ${over.length}  (truncated in results — fix these first)`);
console.log(`   under budget ${under.length}  (leaves ranking terms on the table)`);

console.log('\n   by locale:');
for (const lang of LANGS) {
  const o = over.filter((f) => f.lang === lang).length;
  const u = under.filter((f) => f.lang === lang).length;
  if (!o && !u) continue;
  const [tMin, tMax, dMin, dMax] = BUDGETS[lang];
  console.log(`     ${lang}  over ${String(o).padStart(4)}  under ${String(u).padStart(4)}` +
    `   title ${tMin}-${tMax}, desc ${dMin}-${dMax}`);
}

console.log(`\n   worst over-length (top ${LIMIT}):`);
for (const f of over.sort((a, b) => b.over - a.over).slice(0, LIMIT)) {
  const base = f.file.split('/articles/').pop() || f.file;
  console.log(`     +${String(f.over).padStart(3)} over  ${f.lang}  ${f.field === 'seoTitle' ? 'title' : 'desc '}` +
    ` ${String(f.len).padStart(3)}ch  ${base}`);
  console.log(`             ${f.text.slice(0, 96)}`);
}

if (STRICT) {
  console.log(`\n❌ ${findings.length} field(s) outside locale budget.`);
  process.exit(1);
}
console.log('\n⚠️  Report only — run with --strict to fail the build on these.');
process.exit(0);

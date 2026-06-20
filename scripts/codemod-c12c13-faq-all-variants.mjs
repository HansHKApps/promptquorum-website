#!/usr/bin/env node
// scripts/codemod-c12c13-faq-all-variants.mjs
//
// Fixes C12 and C13 defects for ALL faq-section key variants:
//   - faqSection: { ... }  (covered by earlier codemod, but missed in large files)
//   - 'faq': { ... }       (81-file variant the original C12/C13 missed)
//
// Root cause of earlier misses: the previous codemod used findBlockPos() to find
// locale blocks by key, but findBlockPos() returns the FIRST occurrence of a key
// — which in large files is often a nested 'de:' inside quickAnswerTop, not the
// top-level locale block. Fix: determine locale by scanning backwards for the
// nearest top-level locale key (1–6 spaces indent at line start).
//
// C12: replace title: 'FAQ' with locale-specific heading
// C13: add id: 'faq' to faq/faqSection blocks missing it
//
// Usage:
//   node scripts/codemod-c12c13-faq-all-variants.mjs          # dry-run
//   node scripts/codemod-c12c13-faq-all-variants.mjs --apply  # apply

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

const LOCALE_TITLES = {
  en: 'Frequently Asked Questions',
  de: 'Häufig gestellte Fragen',
  fr: 'Questions fréquemment posées',
  ja: 'よくある質問',
  zh: '常见问题',
  es: 'Preguntas frecuentes',
  pt: 'Perguntas frequentes',
  ar: 'الأسئلة الشائعة',
  ko: '자주 묻는 질문',
};

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

// Scan backwards from `pos` in `content` for the nearest top-level locale key.
// Top-level locale keys are: en|de|fr|ja|zh|es|pt|ar|ko at line start with 1–6 spaces.
// Returns locale string or null.
function getLocaleAtPos(content, pos) {
  const before = content.slice(0, pos);
  const matches = [...before.matchAll(/^[ ]{1,6}(en|de|fr|ja|zh|es|pt|ar|ko)\s*:/gm)];
  return matches.length ? matches[matches.length - 1][1] : null;
}

const allFiles = [];
for (const d of ARTICLE_DIRS) allFiles.push(...walkDir(path.join(ROOT, d)));

console.log(APPLY
  ? '🔧 APPLYING C12+C13 (all faq variants)\n'
  : '🔍 DRY-RUN C12+C13 (all faq variants — no changes written)\n');

let totalFiles = 0;
const counts = { C12: 0, C13: 0 };

for (const file of allFiles) {
  const original = fs.readFileSync(file, 'utf-8');
  let content = original;
  const rel = path.relative(ROOT, file);
  const fileFixes = [];

  // ── C12: replace title: 'FAQ' with locale-correct title ──────────────────
  // Match faqSection or 'faq' section key, then within 400 chars find title:'FAQ'
  // Use a callback to determine locale by position.
  {
    const before = content;
    // Matches: faqSection, 'faqSection', "faqSection", faq, 'faq', "faq"
    // The (?<!['\"\w]) lookbehind on bare 'faq' prevents matching inside words or quoted forms
    // (quoted forms are matched by the ['"]faq['"] branch before the bare branch).
    content = content.replace(
      /((?:['"]faqSection['"]|faqSection|['"]faq['"]|(?<!['"_\w])faq)\s*:\s*\{[\s\S]{0,400}?)title\s*:\s*'FAQ'/g,
      (match, prefix, offset) => {
        const locale = getLocaleAtPos(content, offset) || 'en';
        const title = LOCALE_TITLES[locale] ?? LOCALE_TITLES.en;
        return `${prefix}title: '${title}'`;
      }
    );
    if (content !== before) {
      // Count how many 'FAQ' titles were replaced (approximate: count removed occurrences)
      const removed = (before.match(/title:\s*'FAQ'/g) || []).length
                    - (content.match(/title:\s*'FAQ'/g) || []).length;
      counts.C12 += removed;
      fileFixes.push(`C12: ${removed} title(s) localized`);
    }
  }

  // ── C13: add id:'faq' to faq/faqSection blocks missing it ────────────────
  // C13a: title: is the first key (most common)
  // C13b: faqs: is the first key (faq blocks with no title field at all)
  // Both patterns are safe: they only fire when title:/faqs: immediately
  // follows the opening brace, meaning no id: was first.
  {
    const before = content;
    // C13a: title: first
    content = content.replace(
      /((?:['"]faqSection['"]|faqSection|['"]faq['"]|(?<!['"_\w])faq)\s*:\s*\{\n([ \t]+))title\s*:/g,
      (m, prefix, indent) => `${prefix}id: 'faq',\n${indent}title:`
    );
    // C13b: faqs: first (blocks with no title, just faqs array)
    content = content.replace(
      /((?:['"]faqSection['"]|faqSection|['"]faq['"]|(?<!['"_\w])faq)\s*:\s*\{\n([ \t]+))faqs\s*:/g,
      (m, prefix, indent) => `${prefix}id: 'faq',\n${indent}faqs:`
    );
    if (content !== before) {
      const added = (content.match(/id\s*:\s*'faq'/g) || []).length
                  - (before.match(/id\s*:\s*'faq'/g) || []).length;
      counts.C13 += added;
      fileFixes.push(`C13: +${added} id:'faq' added`);
    }
  }

  if (content !== original) {
    totalFiles++;
    console.log(`  ${rel}`);
    for (const fx of fileFixes) console.log(`    → ${fx}`);
    if (APPLY) fs.writeFileSync(file, content, 'utf-8');
  }
}

console.log(`\n${APPLY ? '✅ Applied' : '📋 Would fix'} ${totalFiles} files`);
console.log(`  C12 title 'FAQ' → localized : ${counts.C12}`);
console.log(`  C13 id:'faq' added          : ${counts.C13}`);
if (!APPLY) console.log('\nRe-run with --apply to write changes.');

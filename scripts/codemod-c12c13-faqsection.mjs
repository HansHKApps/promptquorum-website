#!/usr/bin/env node
// scripts/codemod-c12c13-faqsection.mjs
// Fix C12: replace banned faqSection title 'FAQ' with locale-appropriate string.
// Fix C13: add missing id:'faq' to faqSection blocks.
// Usage:
//   node scripts/codemod-c12c13-faqsection.mjs         # dry-run
//   node scripts/codemod-c12c13-faqsection.mjs --apply  # apply

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

// Localized FAQ section titles — 'FAQ' alone is the banned value
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

const LOCALES = Object.keys(LOCALE_TITLES);

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

// Extract the position of a top-level object key's value block using brace counting.
// Returns { start, end } where content.slice(start, end) is the block (including { }).
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

// ── Main ──────────────────────────────────────────────────────────────────────

const allFiles = [];
for (const d of ARTICLE_DIRS) allFiles.push(...walkDir(path.join(ROOT, d)));

console.log(APPLY ? '🔧 APPLYING C12+C13 faqSection fixes\n' : '🔍 DRY-RUN C12+C13 (no changes written)\n');

let totalFiles = 0;
const counts = { C12: 0, C13: 0 };

for (const file of allFiles) {
  const original = fs.readFileSync(file, 'utf-8');
  let content = original;
  const rel = path.relative(ROOT, file);
  const fileFixes = [];

  // ── C12: Replace title: 'FAQ' with locale-appropriate title ──────────────
  // Strategy: extract each locale block by position (from end to start so
  // offsets remain valid), then fix title: 'FAQ' within that block.
  {
    // Collect locale blocks with positions (process from last to first)
    const localeBlocks = [];
    for (const locale of LOCALES) {
      const pos = findBlockPos(content, locale);
      if (pos) localeBlocks.push({ locale, ...pos });
    }
    // Sort descending by start position so replacements don't invalidate earlier positions
    localeBlocks.sort((a, b) => b.start - a.start);

    for (const { locale, start, end } of localeBlocks) {
      const blockContent = content.slice(start, end);
      const correctTitle = LOCALE_TITLES[locale];
      // Replace title: 'FAQ' inside faqSection context within this locale block
      const fixed = blockContent.replace(
        /((?:['"]faqSection['"]|faqSection)\s*:\s*\{[\s\S]{0,300}?)title\s*:\s*'FAQ'/g,
        (m, before) => `${before}title: '${correctTitle}'`
      );
      if (fixed !== blockContent) {
        const replacements = (fixed.match(new RegExp(correctTitle, 'g')) || []).length
                           - (blockContent.match(new RegExp(correctTitle, 'g')) || []).length;
        counts.C12 += replacements;
        fileFixes.push(`C12: ${replacements} title(s) '${locale}'→'${correctTitle}'`);
        content = content.slice(0, start) + fixed + content.slice(end);
      }
    }
  }

  // ── C13: Add id:'faq' to faqSection blocks that are missing it ────────────
  // Match faqSection opening immediately followed by <newline><indent>title:
  // This only matches blocks where title: comes FIRST (no id: already present).
  // If id:'faq' already exists before title:, the pattern won't match because
  // 'title:' won't immediately follow the indentation after the opening brace.
  {
    const before = content;
    content = content.replace(
      /((?:['"]faqSection['"]|faqSection)\s*:\s*\{\n([ \t]+))title\s*:/g,
      (m, prefix, indent) => `${prefix}id: 'faq',\n${indent}title:`
    );
    if (content !== before) {
      const n = (content.match(/id\s*:\s*'faq'/g) || []).length
              - (before.match(/id\s*:\s*'faq'/g) || []).length;
      counts.C13 += n;
      fileFixes.push(`C13: +${n} id:'faq' added`);
    }
  }

  // ── Output and write ───────────────────────────────────────────────────────
  if (content !== original) {
    totalFiles++;
    console.log(`  ${rel}`);
    for (const f of fileFixes) console.log(`    → ${f}`);
    if (APPLY) fs.writeFileSync(file, content, 'utf-8');
  }
}

console.log(`\n${APPLY ? '✅ Applied' : '📋 Would fix'} ${totalFiles} files`);
console.log(`  C12 title 'FAQ' → localized : ${counts.C12}`);
console.log(`  C13 id:'faq' added          : ${counts.C13}`);
if (!APPLY) console.log('\nRe-run with --apply to write changes.');

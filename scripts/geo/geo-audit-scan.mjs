#!/usr/bin/env node
// scripts/geo-audit-scan.mjs
// Phase 1: Read-only GEO/SEO defect audit across all article files.
// Run: node scripts/geo-audit-scan.mjs
// Output: geo-audit-report.csv + console summary

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const ARTICLE_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
];

const ALL_LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'];

// Hardware/product keywords — articles with these themes get checked for regionalContext
const HARDWARE_THEMES = /GPU|CPU|RAM|VRAM|mini.?PC|laptop|desktop|hardware|smart.?home|Raspberry|Apple.?Silicon|MacBook/i;

// Stale model patterns (as "current" models)
const STALE_MODEL_PATTERNS = [
  { label: 'Llama 3 8B',    re: /Llama\s+3\s+8B/ },
  { label: 'Mistral 7B',    re: /Mistral\s+7B/ },
  { label: 'Mistral Small (no version)', re: /Mistral\s+Small(?!\s+3)/ },
  { label: 'Qwen2.5 (no param suffix)', re: /Qwen2\.5(?![A-Za-z\-\d])/ },
  { label: 'Phi-3.5',       re: /Phi-3\.5/ },
  { label: 'LLaVA 1.5/1.6', re: /LLaVA\s+1\.[56]/ },
];

// ---- Helpers ---------------------------------------------------------------

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

/**
 * Extract one top-level value block for a given key using string-aware brace counting.
 * Handles: key: {, 'key': {, "key": {
 */
function extractBlock(content, key) {
  const keyRe = new RegExp(
    `(?:^|[,{\\s])\\s*(?:'${key}'|"${key}"|${key})\\s*:\\s*\\{`,
    'm'
  );
  const match = keyRe.exec(content);
  if (!match) return '';

  // Find the opening brace of the value
  const openBrace = content.indexOf('{', match.index + match[0].length - 1);
  if (openBrace === -1) return '';

  let depth = 0;
  let inStr = false;
  let strCh = '';
  let i = openBrace;

  while (i < content.length) {
    const c = content[i];
    if (inStr) {
      if (c === '\\') { i += 2; continue; }
      if (c === strCh) inStr = false;
    } else {
      if (c === '"' || c === "'" || c === '`') { inStr = true; strCh = c; }
      else if (c === '{') depth++;
      else if (c === '}') {
        depth--;
        if (depth === 0) return content.slice(openBrace, i + 1);
      }
    }
    i++;
  }
  return '';
}

function countMatches(text, re) {
  if (!text) return 0;
  return (text.match(re) || []).length;
}

function hasMatch(text, re) {
  return re.test(text);
}

// ---- Collect files ---------------------------------------------------------

const allFiles = [];
for (const d of ARTICLE_DIRS) {
  allFiles.push(...walkDir(path.join(ROOT, d)));
}
console.log(`Scanning ${allFiles.length} article files...\n`);

// ---- Defect counters -------------------------------------------------------

const counts = {
  C1_type_wrong: 0,
  C2_sameas_missing: 0,
  C3_proficiency_missing: 0,
  C4_audience_type_missing: 0,
  C5_datemodified_mismatch: 0,
  C6_datemodified_missing: 0,
  C7_quickanswertop_missing: 0,
  C8_snippetblocks_low: 0,
  C9_leadanswer_missing: 0,
  C11_tldr_missing: 0,
  C12_faq_title_banned: 0,
  C13_faq_missing_id: 0,
  C15_faq_count_mismatch: 0,
  C16_faq_count_low: 0,
  C18_stale_models: 0,
  C19_sources_bare: 0,
  C20_related_reading_low: 0,
  C21_doubled_locale: 0,
  C22_locale_missing: 0,
};

const csvRows = [];
const doubledLocaleFiles = [];
const staleModelFiles = [];

// ---- Per-file audit --------------------------------------------------------

for (const file of allFiles) {
  const rel = path.relative(ROOT, file);
  const cluster = rel.split('/')[2];
  const slug = path.basename(file, '.ts');

  let content;
  try { content = fs.readFileSync(file, 'utf-8'); }
  catch { continue; }

  const enBlock = extractBlock(content, 'en');

  const row = { file: rel, cluster, slug };

  // ── C1: @type must be TechArticle ────────────────────────────────────────
  // Look for @type inside schema block (first occurrence to avoid faqSchema pollution)
  const schemaSection = extractBlock(content, 'schema') || '';
  const typeMatch = schemaSection.match(/'@type'\s*:\s*'([^']+)'|"@type"\s*:\s*"([^"]+)"/);
  const typeValue = typeMatch ? (typeMatch[1] || typeMatch[2]) : 'NONE';
  row.C1_type_wrong = typeValue !== 'TechArticle' ? 'FAIL' : 'PASS';
  row.C1_type_value = typeValue;
  if (row.C1_type_wrong === 'FAIL') counts.C1_type_wrong++;

  // ── C2: author.sameAs ────────────────────────────────────────────────────
  row.C2_sameas_missing = hasMatch(content, /sameAs/) ? 'PASS' : 'FAIL';
  if (row.C2_sameas_missing === 'FAIL') counts.C2_sameas_missing++;

  // ── C3: proficiencyLevel inside schema block ──────────────────────────────
  row.C3_proficiency_missing = hasMatch(schemaSection, /proficiencyLevel/) ? 'PASS' : 'FAIL';
  if (row.C3_proficiency_missing === 'FAIL') counts.C3_proficiency_missing++;

  // ── C4: audienceType ─────────────────────────────────────────────────────
  row.C4_audience_type_missing = hasMatch(content, /audienceType/) ? 'PASS' : 'FAIL';
  if (row.C4_audience_type_missing === 'FAIL') counts.C4_audience_type_missing++;

  // ── C5 / C6: dateModified sync ───────────────────────────────────────────
  const topDateM = enBlock.match(/(?<!['"@])dateModified\s*:\s*['"]([^'"]+)['"]/);
  const schemaDM  = schemaSection.match(/'dateModified'\s*:\s*['"]([^'"]+)'""|"dateModified"\s*:\s*['"]([^'"]+)['"]/);
  const topDate   = topDateM   ? topDateM[1] : null;
  const schemaDate = schemaDM  ? (schemaDM[1] || schemaDM[2]) : null;
  row.C6_datemodified_missing = topDate ? 'PASS' : 'FAIL';
  row.C5_toplevel_date   = topDate    || 'MISSING';
  row.C5_schema_date     = schemaDate || 'MISSING';
  row.C5_datemodified_mismatch = (topDate && schemaDate && topDate !== schemaDate) ? 'FAIL' : 'PASS';
  if (row.C6_datemodified_missing === 'FAIL') counts.C6_datemodified_missing++;
  if (row.C5_datemodified_mismatch === 'FAIL') counts.C5_datemodified_mismatch++;

  // ── C7: quickAnswerTop ───────────────────────────────────────────────────
  row.C7_quickanswertop_missing = hasMatch(content, /quickAnswerTop/) ? 'PASS' : 'FAIL';
  if (row.C7_quickanswertop_missing === 'FAIL') counts.C7_quickanswertop_missing++;

  // ── C8: snippetBlocks count (EN block) ───────────────────────────────────
  const snippetCount = countMatches(enBlock, /type\s*:\s*['"](?:one-sentence|plain-terms)['"]/g);
  row.C8_snippetblocks_count = snippetCount;
  if (snippetCount < 2) counts.C8_snippetblocks_low++;

  // ── C9: leadAnswerBlock ──────────────────────────────────────────────────
  row.C9_leadanswer_missing = hasMatch(content, /leadAnswerBlock/) ? 'PASS' : 'FAIL';
  if (row.C9_leadanswer_missing === 'FAIL') counts.C9_leadanswer_missing++;

  // ── C10: regionalContext on hardware pages ────────────────────────────────
  const isHardwarePage = HARDWARE_THEMES.test(content.slice(0, 2000));
  const hasRegional = hasMatch(content, /regionalContext/);
  row.C10_regional_missing = (isHardwarePage && !hasRegional) ? 'FAIL' : 'PASS';
  // Not counted in main defect totals — info only (many pages may legitimately skip this)

  // ── C11: isTldr ──────────────────────────────────────────────────────────
  row.C11_tldr_missing = hasMatch(content, /isTldr\s*:\s*true/) ? 'PASS' : 'FAIL';
  if (row.C11_tldr_missing === 'FAIL') counts.C11_tldr_missing++;

  // ── C12: faqSection title === 'FAQ' (banned) ──────────────────────────────
  // Scan all faqSection title values across all locale blocks
  const faqTitleMatches = [...content.matchAll(/faqSection['"]\s*:\s*\{[^}]*?title\s*:\s*['"]([^'"]*)['"]/gs)];
  const bannedTitles = faqTitleMatches.filter(m => m[1] === 'FAQ');
  row.C12_faq_title_banned = bannedTitles.length > 0 ? `FAIL(${bannedTitles.length})` : 'PASS';
  if (bannedTitles.length > 0) counts.C12_faq_title_banned++;

  // ── C13: faqSection missing id: 'faq' ────────────────────────────────────
  const hasFaqSection = hasMatch(content, /['"]faqSection['"]\s*:/);
  const faqHasId = hasMatch(content, /id\s*:\s*['"]faq['"]/);
  row.C13_faq_missing_id = (hasFaqSection && !faqHasId) ? 'FAIL' : 'PASS';
  if (row.C13_faq_missing_id === 'FAIL') counts.C13_faq_missing_id++;

  // ── C15/C16: faqSchema vs faqSection counts (EN block) ───────────────────
  // faqSchema: count Question @type entries in EN block
  const faqSchemaCount = countMatches(enBlock, /'@type'\s*:\s*'Question'|"@type"\s*:\s*"Question"/g);
  // faqSection: count { q: entries in EN block
  const faqSectionCount = countMatches(enBlock, /\{\s*q\s*:/g);
  row.C15_faqschema_count  = faqSchemaCount;
  row.C15_faqsection_count = faqSectionCount;
  const hasBoth = faqSchemaCount > 0 && faqSectionCount > 0;
  row.C15_mismatch = (hasBoth && faqSchemaCount !== faqSectionCount) ? 'FAIL' : 'PASS';
  row.C16_faq_count_low = (faqSectionCount > 0 && faqSectionCount < 8) ? 'FAIL' : 'PASS';
  if (row.C15_mismatch === 'FAIL') counts.C15_faq_count_mismatch++;
  if (row.C16_faq_count_low === 'FAIL') counts.C16_faq_count_low++;

  // ── C18: stale model references ──────────────────────────────────────────
  const staleFound = STALE_MODEL_PATTERNS.filter(p => p.re.test(content)).map(p => p.label);
  row.C18_stale_models = staleFound.length > 0 ? `FAIL: ${staleFound.join('; ')}` : 'PASS';
  if (staleFound.length > 0) {
    counts.C18_stale_models++;
    staleModelFiles.push({ file: rel, models: staleFound });
  }

  // ── C19: sources items without markdown links ─────────────────────────────
  // Look for sources section in EN block
  const sourcesBlockStart = enBlock.indexOf("'sources'");
  const sourcesBlock = sourcesBlockStart >= 0
    ? enBlock.slice(sourcesBlockStart, sourcesBlockStart + 3000)
    : '';
  // Count items array entries (lines starting with a quote inside items: [...])
  const sourcesItemMatches = [...sourcesBlock.matchAll(/items\s*:\s*\[([\s\S]*?)\]/gs)];
  let sourcesBareCnt = 0, sourcesTotalCnt = 0;
  if (sourcesItemMatches.length > 0) {
    const itemsText = sourcesItemMatches[0][1];
    // Each item is a string — count those without ](
    const items = [...itemsText.matchAll(/['"`]([^'"`]+)['"`]/g)].map(m => m[1]);
    sourcesTotalCnt = items.length;
    sourcesBareCnt = items.filter(s => !s.includes('](') && s.length > 10).length;
  }
  row.C19_sources_bare_count  = sourcesBareCnt;
  row.C19_sources_total_count = sourcesTotalCnt;
  if (sourcesBareCnt > 0) counts.C19_sources_bare++;

  // ── C20: related reading items count (EN block) ───────────────────────────
  const rrBlockStart = enBlock.indexOf("'relatedReading'");
  const rrBlock = rrBlockStart >= 0
    ? enBlock.slice(rrBlockStart, rrBlockStart + 2000)
    : '';
  const rrItemsMatch = rrBlock.match(/items\s*:\s*\[([\s\S]*?)\]/s);
  const rrCount = rrItemsMatch
    ? countMatches(rrItemsMatch[1], /'\[|\[(?!'\s*\])/g)
    : 0;
  row.C20_related_reading_count = rrCount;
  if (rrCount > 0 && rrCount < 6) counts.C20_related_reading_low++;

  // ── C21: doubled locale prefix in URLs ───────────────────────────────────
  const doubledM = content.match(/\/([a-z]{2})\/\1\//);
  row.C21_doubled_locale = doubledM ? `FAIL(${doubledM[0]})` : 'PASS';
  if (doubledM) {
    counts.C21_doubled_locale++;
    doubledLocaleFiles.push({ file: rel, match: doubledM[0] });
  }

  // ── C22: locale coverage ─────────────────────────────────────────────────
  const presentLocales = ALL_LOCALES.filter(lang => {
    return new RegExp(`(?:^|[,{\\s])\\s*(?:'${lang}'|"${lang}"|${lang})\\s*:`, 'm').test(content);
  });
  const missingLocales = ALL_LOCALES.filter(l => !presentLocales.includes(l));
  row.C22_locales_present = presentLocales.join(',');
  row.C22_locales_missing = missingLocales.join(',');
  if (missingLocales.length > 0) counts.C22_locale_missing++;

  // ── COHORT assignment ────────────────────────────────────────────────────
  // A = full GEO (modern scaffold): correct @type + quickAnswerTop + snippetBlocks≥2 + leadAnswerBlock
  // B = partial: has quickAnswerTop OR snippetBlocks≥2, but not both
  // C = legacy: missing both quickAnswerTop AND snippetBlocks<2
  const hasGoodType = row.C1_type_wrong === 'PASS';
  const hasQAT      = row.C7_quickanswertop_missing === 'PASS';
  const hasSnippets = snippetCount >= 2;
  const hasLead     = row.C9_leadanswer_missing === 'PASS';

  let cohort;
  if (hasGoodType && hasQAT && hasSnippets && hasLead) {
    cohort = 'A-clean';
  } else if (hasQAT || hasSnippets) {
    cohort = 'B-partial';
  } else {
    cohort = 'C-legacy';
  }
  row.cohort = cohort;

  // Extract publishDate for cohort dating
  const pubDateM = enBlock.match(/publishDate\s*:\s*['"]([^'"]+)['"]/);
  row.publishDate = pubDateM ? pubDateM[1] : '';

  csvRows.push(row);
}

// ---- Write CSV -------------------------------------------------------------

const CSV_HEADERS = [
  'file', 'cluster', 'slug', 'cohort', 'publishDate',
  'C1_type_wrong', 'C1_type_value',
  'C2_sameas_missing',
  'C3_proficiency_missing',
  'C4_audience_type_missing',
  'C5_datemodified_mismatch', 'C5_toplevel_date', 'C5_schema_date',
  'C6_datemodified_missing',
  'C7_quickanswertop_missing',
  'C8_snippetblocks_count',
  'C9_leadanswer_missing',
  'C10_regional_missing',
  'C11_tldr_missing',
  'C12_faq_title_banned',
  'C13_faq_missing_id',
  'C15_faqschema_count', 'C15_faqsection_count', 'C15_mismatch',
  'C16_faq_count_low',
  'C18_stale_models',
  'C19_sources_bare_count', 'C19_sources_total_count',
  'C20_related_reading_count',
  'C21_doubled_locale',
  'C22_locales_present', 'C22_locales_missing',
];

const csvPath = path.join(ROOT, 'geo-audit-report.csv');
const out = createWriteStream(csvPath);
out.write(CSV_HEADERS.join(',') + '\n');
for (const row of csvRows) {
  const line = CSV_HEADERS.map(h => {
    const v = String(row[h] ?? '');
    return v.includes(',') || v.includes('"') || v.includes('\n')
      ? `"${v.replace(/"/g, '""')}"` : v;
  }).join(',');
  out.write(line + '\n');
}
out.end();

// ---- Console summary -------------------------------------------------------

const N = allFiles.length;
const pct = n => `${n}/${N} (${Math.round(n / N * 100)}%)`;

console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║         GEO/SEO AUDIT SUMMARY — Phase 1 (read-only)         ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log(`\nTotal files: ${N}\n`);

console.log('── SCHEMA DEFECTS (systemic — codemod candidates) ──');
console.log(`  C1  @type NOT TechArticle              : ${pct(counts.C1_type_wrong)}`);
console.log(`  C2  author.sameAs missing              : ${pct(counts.C2_sameas_missing)}`);
console.log(`  C3  schema.proficiencyLevel missing    : ${pct(counts.C3_proficiency_missing)}`);
console.log(`  C4  schema.audience.audienceType miss  : ${pct(counts.C4_audience_type_missing)}`);
console.log(`  C5  schema.dateModified ≠ top-level    : ${pct(counts.C5_datemodified_mismatch)}`);
console.log(`  C6  top-level dateModified missing     : ${pct(counts.C6_datemodified_missing)}`);

console.log('\n── GEO CONTENT FIELDS ──');
console.log(`  C7  quickAnswerTop missing             : ${pct(counts.C7_quickanswertop_missing)}`);
console.log(`  C8  snippetBlocks < 2 (EN)             : ${pct(counts.C8_snippetblocks_low)}`);
console.log(`  C9  leadAnswerBlock missing            : ${pct(counts.C9_leadanswer_missing)}`);
console.log(`  C11 isTldr section missing             : ${pct(counts.C11_tldr_missing)}`);

console.log('\n── STRUCTURAL / FAQ ──');
console.log(`  C12 faqSection title = "FAQ" (banned)  : ${pct(counts.C12_faq_title_banned)}`);
console.log(`  C13 faqSection missing id:'faq'        : ${pct(counts.C13_faq_missing_id)}`);
console.log(`  C15 faqSchema count ≠ faqSection count : ${pct(counts.C15_faq_count_mismatch)}`);
console.log(`  C16 faqSection faqs < 8               : ${pct(counts.C16_faq_count_low)}`);

console.log('\n── CONTENT / QUALITY ──');
console.log(`  C18 stale model references             : ${pct(counts.C18_stale_models)}`);
console.log(`  C19 sources with bare text (no links)  : ${pct(counts.C19_sources_bare)}`);
console.log(`  C20 related reading < 6 items          : ${pct(counts.C20_related_reading_low)}`);

console.log('\n── LOCALE / HREFLANG ──');
console.log(`  C21 doubled locale prefix (/pt/pt/)    : ${pct(counts.C21_doubled_locale)}`);
console.log(`  C22 missing locale blocks              : ${pct(counts.C22_locale_missing)}`);

// ---- Cohort analysis -------------------------------------------------------
const cohortGroups = { 'A-clean': [], 'B-partial': [], 'C-legacy': [] };
for (const row of csvRows) cohortGroups[row.cohort]?.push(row);

console.log('\n── COHORT ANALYSIS (template generations) ──');
for (const [name, desc] of [
  ['A-clean',  'Full GEO: correct @type + quickAnswerTop + snippetBlocks≥2 + leadAnswerBlock'],
  ['B-partial','Partial: has quickAnswerTop OR snippetBlocks, but not both'],
  ['C-legacy', 'Legacy: no quickAnswerTop AND snippetBlocks<2'],
]) {
  const rows = cohortGroups[name];
  const total = rows.length;
  const pctTotal = Math.round(total / N * 100);
  // Break down by cluster
  const byCluster = {};
  for (const r of rows) byCluster[r.cluster] = (byCluster[r.cluster] || 0) + 1;
  const clusterStr = Object.entries(byCluster)
    .sort((a, b) => b[1] - a[1])
    .map(([c, n]) => `${c}:${n}`)
    .join(', ');
  // Date range
  const dates = rows.map(r => r.publishDate).filter(Boolean).sort();
  const dateRange = dates.length ? `${dates[0]} → ${dates[dates.length - 1]}` : 'unknown';
  console.log(`\n  ${name} (${total} files, ${pctTotal}%) — ${desc}`);
  console.log(`    Clusters: ${clusterStr}`);
  console.log(`    Publish range: ${dateRange}`);
}

// Cohort A — which schema fields are still missing?
const aClean = cohortGroups['A-clean'];
if (aClean.length > 0) {
  const aSameAsMiss = aClean.filter(r => r.C2_sameas_missing === 'FAIL').length;
  const aProfMiss   = aClean.filter(r => r.C3_proficiency_missing === 'FAIL').length;
  const aAudMiss    = aClean.filter(r => r.C4_audience_type_missing === 'FAIL').length;
  console.log(`\n  Cohort A residual schema defects (${aClean.length} files):`);
  console.log(`    author.sameAs missing      : ${aSameAsMiss}/${aClean.length}`);
  console.log(`    proficiencyLevel missing   : ${aProfMiss}/${aClean.length}`);
  console.log(`    audienceType missing       : ${aAudMiss}/${aClean.length}`);
}

// Best-template reference: find the cleanest recent file
const refCandidates = cohortGroups['A-clean']
  .filter(r => r.C2_sameas_missing === 'PASS' || true) // include all A-clean
  .sort((a, b) => (b.publishDate || '').localeCompare(a.publishDate || ''));
if (refCandidates.length > 0) {
  const best = refCandidates[0];
  console.log(`\n  → Reference template (most recent A-clean): ${best.file} (${best.publishDate})`);
}

if (doubledLocaleFiles.length > 0) {
  console.log('\n🚨 URGENT — C21 DOUBLED LOCALE PREFIX:');
  for (const f of doubledLocaleFiles) {
    console.log(`   ${f.file}  →  ${f.match}`);
  }
}

if (staleModelFiles.length > 0) {
  console.log('\n⚠️  C18 STALE MODEL FILES (first 20):');
  for (const f of staleModelFiles.slice(0, 20)) {
    console.log(`   ${f.file}: ${f.models.join(', ')}`);
  }
  if (staleModelFiles.length > 20) {
    console.log(`   ... and ${staleModelFiles.length - 20} more (see CSV)`);
  }
}

console.log(`\n✅ Full report: geo-audit-report.csv`);

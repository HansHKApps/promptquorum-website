#!/usr/bin/env node

/**
 * Edit-history-phrases validator.
 *
 * Detects phrases that expose internal editorial history to readers — references
 * to earlier versions, apologies for removed data, and body-prose month-snapshot
 * stamps ("as of November 2026", "checked November 2026").
 *
 * WHAT THIS CATCHES:
 *
 *   Version reference phrases:
 *     "earlier version of this" / "previous version of this" / "earlier edition of this"
 *     → these repeat the wrong claim alongside the correction
 *
 *   Data-source apologies:
 *     "untraceable" preceded closely by figure/source/claim/number/data
 *     "was removed because" / "could not be verified" / "could not be confirmed"
 *     → these signal unreliability and persist in JSON-LD and AI-scraped text
 *
 *   Month-snapshot stamps in body prose:
 *     "as of <Month> 20xx" / "checked <Month> 20xx" / "verified <Month> 20xx"
 *     → validate-month-drift.mjs already blocks these in title/meta fields;
 *       this validator catches the same pattern in body text (content, items,
 *       faqs, notes, callouts, intro, etc.)
 *
 * WHAT THIS DOES NOT CATCH:
 *   - Occurrences inside code blocks (fields: codeBlock, codeLanguage, code)
 *   - Month-snapshot stamps in title/meta/description fields — that is
 *     validate-month-drift.mjs's job
 *
 * ALLOWLIST:
 *   Add entries to scripts/edit-history-phrases-allowlist.json as an array of
 *   { "file": "<relative path suffix>", "line": <number>, "reason": "…" }
 *   The file suffix is matched against the end of the absolute path; the line
 *   number must be exact.
 *
 * EXIT CODE: 1 if violations found (not in allowlist), 0 if clean.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── Article source directories ───────────────────────────────────────────────

const ARTICLE_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
  'src/lib/balcony-solar/articles',
  'src/lib/enterprise-ai/articles',
];

const EXTRA_FILES = [
  'src/lib/blog/blogContent.ts',
];

// ── Fields that are human-readable prose (we scan these) ────────────────────
// Match any quoted string value for fields that hold reader-visible text.
// Code-block fields are excluded by the CODE_FIELD pattern below.
const PROSE_FIELD = /^\s*"?(?:content|items|faqs|title|intro|description|seoTitle|metaTitle|metaDescription|note|callouts?|text|heading|answer|question|label|summary|body|snippet|leadAnswerBlock|snippetBlocks?|isTldr|keyTakeaways?|bullets?|highlights?|facts|verdict|fromTheMaker|tags?|alt|caption|footer)"?\s*:/;

// Fields we explicitly skip (code blocks, schema fields, identifiers)
const CODE_FIELD = /^\s*"?(?:codeBlock|code|codeLanguage|codeExample|slug|id|href|src|url|type|lang|locale|theme|freshness_tier|dateModified|publishDate|next_refresh_due|last_full_refresh|specific_year|current_models_mentioned|current_benchmarks_used|current_hardware_mentioned|designSkin|heroImage|schema|@type|@id|audience|targetKeywords|primaryTerm|relatedReading|internalLinks|sources?|backlinks?|hqCountry|hqCountrySource|lastUpstreamUpdate|lastUpstreamUpdateSource|founderReviewedDate|founderReviewDates|pqReview|lastVerifiedDate|next_seo_review_due|last_seo_review)"?\s*:/;

// ── Patterns to detect ───────────────────────────────────────────────────────

// 1. Version/edition reference phrases
const VERSION_REF = /\b(?:earlier|previous)\s+(?:version|edition)\s+of\s+this\b/i;

// 2. Data-source apology phrases — catch phrases that expose editorial history
//    (why something was removed or changed), not legitimate "unverified" disclaimers.
//    The key distinction: "could not be confirmed [so it was removed/replaced]" vs.
//    "could not be confirmed [so we say so explicitly]" — context matters.
const UNTRACEABLE = /\buntraceable\b[^"']{0,60}\b(?:figure|source|claim|number|data|statistic|reference)\b|\b(?:figure|source|claim|number|data|statistic|reference)\b[^"']{0,60}\buntraceable\b/i;
const WAS_REMOVED = /\bwas\s+removed\s+because\b/i;
// Only flag "could not be verified/confirmed" when it appears alongside language
// that describes it as explaining why something was edited or replaced.
const COULD_NOT_VERIFY = /\bcould\s+not\s+be\s+(?:verified|confirmed)\b[^.]{0,80}\b(?:removed|replaced|deleted|omitted|dropped|changed|earlier|previous|version)\b|\b(?:removed|replaced|deleted|omitted|dropped|changed|earlier|previous|version)\b[^.]{0,80}\bcould\s+not\s+be\s+(?:verified|confirmed)\b/i;

// 3. Month-snapshot stamps in body prose
// Full month names across all 9 site locales (matches validate-month-drift.mjs)
const MONTH_NAMES = [
  'January','February','March','April','May','June','July','August','September','October','November','December',
  'Januar','Februar','März','Mai','Juni','Juli','Oktober','Dezember',
  'janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre',
  'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre',
  'janeiro','fevereiro','março','maio','junho','julho','setembro','outubro','novembro','dezembro',
  'يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر',
].join('|');

// Stamp verbs that indicate the month is a freshness claim, not a fact
const STAMP_VERBS = 'as\\s+of|checked|verified|verifiziert|geprüft|tested|getestet|confirmed|updated|last\\s+reviewed|確認済み|時点|截至|기준|اعتبار';

const MONTH_SNAPSHOT = new RegExp(
  `(?:${STAMP_VERBS})[^.。]{0,30}(?:${MONTH_NAMES})\\s*(?:de\\s+|of\\s+)?20\\d{2}`,
  'i'
);

// Combined check: returns the matching pattern name or null
function findViolation(text) {
  if (VERSION_REF.test(text)) return 'version-ref';
  if (UNTRACEABLE.test(text)) return 'untraceable-source';
  if (WAS_REMOVED.test(text)) return 'was-removed';
  if (COULD_NOT_VERIFY.test(text)) return 'could-not-verify';
  if (MONTH_SNAPSHOT.test(text)) return 'month-snapshot';
  return null;
}

// ── Allowlist ────────────────────────────────────────────────────────────────

const ALLOWLIST_PATH = path.join(__dirname, 'edit-history-phrases-allowlist.json');
let allowlist = [];
if (fs.existsSync(ALLOWLIST_PATH)) {
  try {
    allowlist = JSON.parse(fs.readFileSync(ALLOWLIST_PATH, 'utf-8'));
  } catch {
    // malformed allowlist — ignore and continue; don't silently suppress violations
  }
}

function isAllowed(relPath, lineNum) {
  return allowlist.some(
    (a) => relPath.endsWith(a.file) && a.line === lineNum
  );
}

// ── File walker ──────────────────────────────────────────────────────────────

function walk(dir, out = []) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return out;
  for (const entry of fs.readdirSync(abs)) {
    const rel = path.join(dir, entry);
    const stat = fs.statSync(path.join(ROOT, rel));
    if (stat.isDirectory()) walk(rel, out);
    else if (/\.tsx?$/.test(rel) && !/\.(bak|backup)$/.test(rel)) out.push(rel);
  }
  return out;
}

// ── Scan one file ────────────────────────────────────────────────────────────

function checkFile(relPath) {
  const lines = fs.readFileSync(path.join(ROOT, relPath), 'utf-8').split('\n');
  const violations = [];
  let inProseField = false;

  lines.forEach((line, i) => {
    const lineNum = i + 1;

    // Track field context: if this line starts a known prose field, enable scanning
    if (PROSE_FIELD.test(line)) inProseField = true;
    if (CODE_FIELD.test(line)) inProseField = false;

    // Also disable scanning for lines that look like key-only declarations
    // (no string value on this line — the value will be on the next line(s))
    // We use a simple heuristic: scan every line that contains a quoted string.
    const hasString = /['"`]/.test(line);
    if (!hasString) return;

    // Extract the string content from the line (strip field name, quotes, punctuation)
    // We scan the full line so multi-line values (array items) are covered too.
    const violation = findViolation(line);
    if (!violation) return;
    if (isAllowed(relPath, lineNum)) return;

    violations.push({
      file: relPath,
      line: lineNum,
      pattern: violation,
      text: line.trim().slice(0, 120),
    });
  });

  return violations;
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const files = [...ARTICLE_DIRS.flatMap((d) => walk(d)), ...EXTRA_FILES];

  const allViolations = [];
  for (const f of files) {
    allViolations.push(...checkFile(f));
  }

  if (allViolations.length === 0) {
    console.log(`✅  No edit-history phrases found (${files.length} files checked)`);
    process.exit(0);
  }

  console.error(`\n❌  ${allViolations.length} edit-history phrase(s) found in ${files.length} files:\n`);
  for (const v of allViolations) {
    console.error(`  ${v.file}:${v.line} [${v.pattern}]`);
    console.error(`    ${v.text}`);
    console.error('');
  }

  console.error('Each phrase exposes internal editorial history to readers and to AI scrapers.');
  console.error('Fix by editing silently (remove old claim, write new claim as if always there).');
  console.error('If a date is a valid month-snapshot in a source citation, use a day-precise date');
  console.error('or add an entry to scripts/edit-history-phrases-allowlist.json with a reason.\n');
  console.error(`Summary: ${allViolations.length} violation(s) across ${new Set(allViolations.map(v => v.file)).size} file(s).`);

  process.exit(1);
}

main();

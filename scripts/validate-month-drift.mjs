#!/usr/bin/env node

/**
 * Month-drift validator.
 *
 * A month name in a title, heading, or meta description is a freshness claim
 * that someone has to keep true by hand, in nine languages, forever. That has
 * never held here: an audit on 2026-08-28 found 48 page titles, 341 headings
 * and 676 descriptions naming a month, the oldest stuck on March. Worse, the
 * English copy was often refreshed while the other eight locales kept the old
 * month, so non-EN SERPs advertised stale dates for pages that were current.
 *
 * The signal was never needed. Every article renders a self-updating
 * "Last updated <date>" badge from dateModified (formatDisplayDate, all nine
 * locales) plus the New/Updated badges in src/lib/article-freshness.ts.
 *
 * WHAT THIS ENFORCES — position, not presence:
 *
 *   FAIL  a month+year in TRAILING stamp position: inside a closing
 *         parenthetical, or after a final dash / comma / colon.
 *           "Performance Benchmarks (June 2026)"
 *           "GPU-Preisvergleich — Juli 2026"
 *           "… — verified against primary sources, July 2026."
 *
 *   PASS  a month+year mid-sentence, where the date is the fact rather than a
 *         claim about the article's own currency.
 *           "The Performance Gap Closed in July 2026"
 *           "Utah legalized balcony solar in July 2026"
 *           "per MIT Technology Review Brasil (May 2026) — despite …"
 *
 *   PASS  anything day-precise. A day number means an event.
 *           "M5 Ultra: Confirmed August 25, 2026"
 *
 * Presence alone is deliberately NOT an error. src/lib holds ~3,300 month
 * mentions and the great majority are release dates, regulatory deadlines and
 * knowledge cutoffs. Failing on those would make the gate unusable, and the
 * first response to an unusable gate is to delete it.
 *
 * Body prose is never inspected — only the five metadata/heading fields.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const ARTICLE_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
  'src/lib/balcony-solar/articles',
];

const EXTRA_FILES = [
  'src/lib/blog/blogContent.ts',
  'src/lib/power-local-llm/briefs.ts',
];

const FIELDS = /^(\s*)"?(title|seoTitle|metaTitle|metaDescription|description)"?\s*:\s*(['"])((?:\\.|(?!\3).)*)\3/;

// Full month names only, across the nine site locales. Abbreviations are
// deliberately excluded: "Jan" is a product this site writes about (Jan AI),
// and "Best Frontend for Ollama … vs Jan 2026" is not a date.
const MONTHS = [
  'January','February','March','April','May','June','July','August','September','October','November','December',
  'Januar','Februar','März','Mai','Juni','Juli','Oktober','Dezember',
  'janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre',
  'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre',
  'janeiro','fevereiro','março','maio','junho','julho','setembro','outubro','novembro','dezembro',
  'يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر',
].join('|');

// A month+year token. The bidi isolates (U+2068/U+2069) appear around Latin
// runs inside the Arabic blocks, so they have to be tolerated mid-token.
const MY = `(?:(?:${MONTHS})\\s*⁩?\\s*(?:de\\s+|of\\s+)?⁨?\\s*20\\d{2}|20\\d{2}\\s*[年년]\\s*\\d{1,2}\\s*[月월])`;

// Day-precise => an event, never a freshness stamp.
const DAY_PRECISE = new RegExp(
  `\\d{1,2}(?:st|nd|rd|th)?\\.?\\s*(?:de\\s+|of\\s+)?(?:${MONTHS})|(?:${MONTHS})\\s+\\d{1,2}\\s*,|[年년]\\s*\\d{1,2}\\s*[月월]\\s*\\d{1,2}\\s*[일日]`,
  'i'
);

// Words that mark a date as a claim about the article's own currency rather
// than as something that happened in the world.
const STAMP_WORDS = 'verified|verifiziert|gepr[üu]ft|Stand|verificad[oa]s?|atualizad[oa]|actualizad[oa]|v[ée]rifi[ée]s?|updated|update|confirmed|checked|tested|getestet|testad[oa]|test[ée]|probado|as of|current as of|accurate as of|last reviewed|検証|時点|核实|截至|기준|확인|업데이트|التحقق|اعتبار';
const STAMP_SUFFIX = '版|テスト|测试|기준|테스트|更新|核实|確認済み|時点|업데이트|확인';

// Trailing stamp positions — the shapes this codebase actually used.
const TRAILING = [
  // (June 2026)  (July 2026: ~$303)  (2026년 5월 추정)  -- a closing parenthetical
  // whose content is the date plus at most a short qualifier or a price.
  new RegExp(`[（(][^)）]{0,12}${MY}[^)）]{0,18}[)）]\\s*[.。]?\\s*$`, 'i'),
  // An explicit stamp word near a trailing date: "verified July 2026",
  // "Stand Juli 2026", "2026年7月更新".
  new RegExp(`(?:${STAMP_WORDS})[^.。]{0,30}${MY}\\s*[.。]?\\s*$`, 'i'),
  new RegExp(`${MY}\\s*(?:${STAMP_SUFFIX})\\s*[.。]?\\s*$`, 'i'),
];

// Deliberately NOT flagged: a trailing date reached through a plain colon or
// dash with no stamp word. That shape is dominated by facts --
//   "Digital Omnibus: EU AI Act High-Risk Deadline Deferred to December 2027"
//   "Portkey-Preise aus der Zeit vor Mai 2026 zitieren"
// and a gate that blocks legitimate copy is a gate someone switches off. The
// codemod handles the freshness-claim cases in that shape; this only guards
// against the mechanical stamp patterns coming back.

const ALLOWLIST_PATH = path.join(__dirname, 'month-drift-allowlist.json');
let allowlist = [];
if (fs.existsSync(ALLOWLIST_PATH)) {
  allowlist = JSON.parse(fs.readFileSync(ALLOWLIST_PATH, 'utf8'));
}
const allowed = (file, value) =>
  allowlist.some((a) => file.endsWith(a.path) && value.includes(a.match));

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

const ERRORS = [];

function check(rel) {
  const lines = fs.readFileSync(path.join(ROOT, rel), 'utf8').split('\n');
  lines.forEach((line, i) => {
    const m = line.match(FIELDS);
    if (!m) return;
    const [, , field, , value] = m;
    if (!new RegExp(MY, 'i').test(value)) return;   // no month+year at all
    if (DAY_PRECISE.test(value)) return;            // an event
    if (allowed(rel, value)) return;
    if (!TRAILING.some((re) => re.test(value))) return; // mid-sentence => a fact
    ERRORS.push(`${rel}:${i + 1}  [${field}]  ${value.slice(0, 100)}`);
  });
}

function main() {
  console.log('🔍 Validating month drift...\n');
  const files = [...ARTICLE_DIRS.flatMap((d) => walk(d)), ...EXTRA_FILES];
  files.forEach(check);

  if (ERRORS.length) {
    console.error(`❌ ${ERRORS.length} trailing month stamp(s) found:\n`);
    ERRORS.forEach((e) => console.error('  ' + e));
    console.error(
      '\nA month in trailing position dates the page and has to be maintained by\n' +
      'hand in nine locales. Drop it — the "Last updated" badge already carries\n' +
      'freshness, and it updates itself from dateModified.\n' +
      '\nIf the date genuinely belongs (an event, a cited source), either make it\n' +
      'day-precise or add it to scripts/month-drift-allowlist.json with a reason.'
    );
    process.exit(1);
  }

  console.log(`✅ No trailing month stamps (${files.length} files checked)`);
}

main();

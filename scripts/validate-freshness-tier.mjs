#!/usr/bin/env node

/**
 * Freshness Tier Validator
 * Enforces single-tier classification on all articles.
 *
 * STRICT_FROM_DATE: Articles published on or after this date MUST have freshness_tier set.
 * Pages published before this date: tier is optional (warnings only, no fail).
 *
 * Rules:
 * - evergreen: no year/model/hardware refs, no benchmarks
 * - semi_annual: must have year in title/seoTitle, next_refresh_due
 * - annual: must have year in slug/URL, specific_year
 * - monthly: tightest tier, no structural requirements — just set the value
 *
 * 2026-07-02: rewritten to walk individual article files (the split-file/barrel
 * architecture every cluster actually uses) instead of 2 hardcoded monolithic
 * content.ts paths. The old version silently found 0 articles in local-llms and
 * prompt-engineering (both migrated away from a single content.ts long ago) and
 * never covered power-local-llm, smart-home, prompt-bites, or balcony-solar at
 * all — it was reporting a false pass, not validating anything meaningful. See
 * docs/BALCONY_SOLAR_Q1_2027_REFRESH_TODO.md / STEP 3.5 spot-check (2026-07-02)
 * for how this was discovered.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const STRICT_FROM_DATE = '2026-04-21'; // Pages on/after this date require freshness_tier
const ERRORS = [];
const WARNINGS = [];

// Article source dirs to walk (individual-file-per-article clusters).
const ARTICLE_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
  'src/lib/balcony-solar/articles',
]

// Single monolithic files that still use the old 'slug': { en: {...} } shape.
const MONOLITHIC_FILES = [
  'src/lib/blog/blogContent.ts',
]

// Forbidden patterns for evergreen pages
const EVERGREEN_FORBIDDEN = [
  { pattern: /20[0-9]{2}/, desc: 'year reference' },
  { pattern: /RTX\s+\d{4}/i, desc: 'specific GPU model' },
  { pattern: /RTX\s+[0-9]/i, desc: 'RTX GPU reference' },
  { pattern: /Llama\s+3\.[0-9]/i, desc: 'specific Llama version' },
  { pattern: /Qwen\d/i, desc: 'specific Qwen version' },
  { pattern: /Mistral.*3\.[0-9]/i, desc: 'specific Mistral version' },
  { pattern: /M[0-9]\s+(Max|Pro|Ultra)/i, desc: 'specific Apple chip model' },
  { pattern: /as\s+of\s+[A-Z]/i, desc: '"as of" time reference' },
  { pattern: /\d+\s*tok\/sec/i, desc: 'performance benchmark with number' },
  { pattern: /currently/i, desc: '"currently" temporal reference' },
  { pattern: /latest/i, desc: '"latest" temporal reference' },
];

function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    ERRORS.push(`Failed to read ${filePath}: ${err.message}`);
    return '';
  }
}

function walk(dir, out = []) {
  const abs = path.join(ROOT, dir)
  if (!fs.existsSync(abs)) return out
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    const full = path.join(abs, entry.name)
    if (entry.isDirectory()) walk(path.relative(ROOT, full), out)
    else if (entry.isFile() && full.endsWith('.ts')) out.push(path.relative(ROOT, full))
  }
  return out
}

// Extract the { ... } block starting at the first '{' at or after fromIndex,
// using brace-depth counting (handles nested objects reliably, unlike a
// line-window heuristic).
function extractBracedBlock(content, fromIndex) {
  const start = content.indexOf('{', fromIndex)
  if (start === -1) return null
  let depth = 0
  for (let i = start; i < content.length; i++) {
    if (content[i] === '{') depth++
    else if (content[i] === '}') {
      depth--
      if (depth === 0) return content.slice(start, i + 1)
    }
  }
  return content.slice(start) // unterminated — return what we have
}

function fieldFrom(block, fieldName) {
  const m = block.match(new RegExp(`${fieldName}:\\s*['"]([^'"]+)['"]`))
  return m ? m[1] : ''
}

// Metadata fields that inherently/legitimately contain a year (dates, refresh
// schedules) — these are not reader-facing prose and must not be scanned for
// the evergreen "year reference" forbidden pattern, or every article (evergreen
// or not) would fail on its own required publishDate/dateModified fields.
const METADATA_DATE_FIELDS = [
  'publishDate', 'dateModified', 'next_refresh_due', 'last_full_refresh',
  'lastFactChecked', 'next_seo_review_due', 'last_seo_review', 'updatedDate',
  'specific_year', 'datePublished', 'archive_after',
]

// Build a prose-only view of an en: {} block for the evergreen forbidden-
// pattern scan: strips known metadata-date field lines, the entire schema/
// supplementalSchema/howToSchema/faqSchema/itemListSchema sub-objects
// (structured data mirroring the article's own dates/facts, not reader-facing
// prose), and internal link url/href paths (which can legitimately contain
// another article's year-bearing slug, e.g. linking to a "-2026" page, without
// that being a freshness claim in this article's own prose).
function stripToProseOnly(block) {
  let prose = block

  // Strip schema-shaped sub-objects entirely (brace-matched, not line-based,
  // since they're multi-line and nested).
  for (const key of ['schema', 'supplementalSchema', 'howToSchema', 'faqSchema', 'itemListSchema', 'softwareApplicationSchema', 'tableSchema', 'datasetSchema', 'breadcrumbSchema']) {
    const re = new RegExp(`${key}:\\s*\\{`)
    let m
    while ((m = re.exec(prose))) {
      const sub = extractBracedBlock(prose, m.index)
      if (!sub) break
      prose = prose.slice(0, m.index) + prose.slice(m.index + `${key}: `.length + sub.length)
    }
  }

  // Strip metadata date-field lines.
  for (const field of METADATA_DATE_FIELDS) {
    prose = prose.replace(new RegExp(`${field}:\\s*['"][^'"]*['"],?`, 'g'), '')
  }

  // Strip internal link paths (url: '/...' and href: '/...') — a link target
  // slug isn't a freshness claim in THIS article's own prose.
  prose = prose.replace(/(?:url|href):\s*'\/[^']*'/g, '')

  // Strip inline markdown link targets, e.g. [text](/balcony-solar/foo-2026) —
  // same reasoning: the linked article's slug isn't a claim made by this one.
  prose = prose.replace(/\]\(\/[^)]*\)/g, '](/)')

  // Strip siblingBites/parentArticle values — these are cross-reference slugs
  // or paths to OTHER articles (which may legitimately have a year in their
  // own slug, e.g. 'local-ai-trend-2027-...'), not a freshness claim made by
  // this article's own prose.
  prose = prose.replace(/siblingBites:\s*\[[^\]]*\]/g, 'siblingBites: []')
  prose = prose.replace(/parentArticle:\s*['"][^'"]*['"]/g, "parentArticle: ''")

  return prose
}

// Individual-file articles: `export const article: ... = { en: { ... }, de: {...} }`
// Slug is derived from the filename (matches the `// Slug: xxx` header comment
// convention used across every cluster).
function extractFromArticleFile(filePath) {
  const content = readFileContent(filePath)
  if (!content) return null
  const slug = path.basename(filePath, '.ts')

  const enIdx = content.search(/\ben:\s*\{/)
  if (enIdx === -1) return null
  const enBlock = extractBracedBlock(content, enIdx)
  if (!enBlock) return null

  const publishDate = (enBlock.match(/publishDate:\s*['"](\d{4}-\d{2}-\d{2})['"]/) || [])[1] || ''
  const freshnessTier = fieldFrom(enBlock, 'freshness_tier')
  const title = fieldFrom(enBlock, 'title')
  const seoTitle = fieldFrom(enBlock, 'seoTitle') || title

  if (!publishDate || !title) return null

  const type = filePath.includes('local-llms') ? 'llm'
    : filePath.includes('prompt-engineering') ? 'pe'
    : filePath.includes('power-local-llm') ? 'power-local-llm'
    : filePath.includes('smart-home') ? 'smart-home'
    : filePath.includes('prompt-bites') ? 'prompt-bites'
    : filePath.includes('balcony-solar') ? 'balcony-solar'
    : 'unknown'

  return { slug, publishDate, freshnessTier, title, seoTitle, enContent: stripToProseOnly(enBlock), type }
}

// Monolithic-file articles (blog): 'slug': { ... en: { ... } } at 2-space indent.
function extractFromMonolithicFile(filePath) {
  const content = readFileContent(filePath);
  const articles = [];
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const slugMatch = lines[i].match(/^  '([^']+)':\s*\{/);
    if (!slugMatch) continue
    const slug = slugMatch[1];

    const enIdxLocal = content.indexOf('en: {', content.indexOf(lines[i]))
    // Re-locate using absolute offset from this line onward to avoid drift.
    const fromOffset = lines.slice(0, i + 1).join('\n').length
    const enIdx = content.indexOf('en: {', fromOffset)
    if (enIdx === -1 || enIdx - fromOffset > 2000) continue // guard: en: { should be close by
    const enBlock = extractBracedBlock(content, enIdx)
    if (!enBlock) continue

    const publishDate = (enBlock.match(/publishDate:\s*['"](\d{4}-\d{2}-\d{2})['"]/) || [])[1] || ''
    const freshnessTier = fieldFrom(enBlock, 'freshness_tier')
    const title = fieldFrom(enBlock, 'title')
    const seoTitle = fieldFrom(enBlock, 'seoTitle') || title

    if (publishDate && title) {
      articles.push({ slug, publishDate, freshnessTier, title, seoTitle, enContent: stripToProseOnly(enBlock), type: 'blog' })
    }
  }
  return articles;
}

function validateArticle(article) {
  const isNewPage = article.publishDate >= STRICT_FROM_DATE;

  // ─── Check 1: freshness_tier must exist on new pages ───
  if (isNewPage && !article.freshnessTier) {
    ERRORS.push(
      `[${article.type.toUpperCase()}] ${article.slug}: Missing freshness_tier on new page (published ${article.publishDate} >= ${STRICT_FROM_DATE}). ` +
      `Add: freshness_tier: 'evergreen' | 'semi_annual' | 'annual' | 'monthly'`
    );
    return;
  }

  if (!isNewPage && !article.freshnessTier) {
    WARNINGS.push(
      `[${article.type.toUpperCase()}] ${article.slug}: Missing freshness_tier (old page, published ${article.publishDate}). Suggest classifying.`
    );
    return;
  }

  // ─── Check 2: evergreen page forbidden patterns ───
  if (article.freshnessTier === 'evergreen') {
    for (const { pattern, desc } of EVERGREEN_FORBIDDEN) {
      if (pattern.test(article.enContent)) {
        ERRORS.push(
          `[${article.type.toUpperCase()}] ${article.slug}: Evergreen page contains forbidden pattern: ${desc}. ` +
          `Fix: Remove the ${desc}, OR change freshness_tier to semi_annual, OR split into multiple pages.`
        );
      }
    }
  }

  // ─── Check 3 & 4: No additional format requirements ───
  // semi_annual and annual tiers just need to be set. (Deliberately not
  // enforcing next_refresh_due/specific_year presence here — a 2026-07-02
  // attempt at that surfaced 129 pre-existing site-wide gaps unrelated to
  // any current task; that's a real backlog worth a dedicated pass, not
  // something this bugfix should silently turn into a new blocking gate.)
  // The update cadence is tracked separately (next_refresh_due, etc.)
}

function main() {
  console.log('🔍 Validating freshness tiers...\n');

  const perCluster = {}
  const allArticles = []

  for (const dir of ARTICLE_DIRS) {
    const files = walk(dir)
    const clusterArticles = files.map(extractFromArticleFile).filter(Boolean)
    const clusterName = dir.split('/')[2] // src/lib/<cluster>/articles
    perCluster[clusterName] = clusterArticles.length
    allArticles.push(...clusterArticles)
  }

  for (const file of MONOLITHIC_FILES) {
    const articles = extractFromMonolithicFile(path.join(ROOT, file))
    perCluster['blog'] = articles.length
    allArticles.push(...articles)
  }

  const summary = Object.entries(perCluster).map(([k, v]) => `${k}: ${v}`).join(', ')
  console.log(`Found ${allArticles.length} articles (${summary})\n`);

  for (const article of allArticles) {
    validateArticle(article);
  }

  console.log(`\n📊 VALIDATION RESULTS\n`);
  console.log(`✅ Articles checked: ${allArticles.length}`);
  console.log(`❌ Errors: ${ERRORS.length}`);
  console.log(`⚠️  Warnings: ${WARNINGS.length}\n`);

  if (ERRORS.length > 0) {
    console.log('ERRORS:\n');
    ERRORS.forEach((err, i) => console.log(`  ${i + 1}. ${err}\n`));
  }

  if (WARNINGS.length > 0) {
    console.log('WARNINGS:\n');
    WARNINGS.forEach((warn, i) => console.log(`  ${i + 1}. ${warn}\n`));
  }

  if (ERRORS.length === 0) {
    console.log('✓ All validations passed!\n');
    process.exit(0);
  } else {
    console.log(`\n❌ Build aborted: ${ERRORS.length} validation error(s)\n`);
    process.exit(1);
  }
}

main();

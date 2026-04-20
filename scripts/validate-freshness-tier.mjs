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
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const STRICT_FROM_DATE = '2026-04-21'; // Pages on/after this date require freshness_tier
const ERRORS = [];
const WARNINGS = [];

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

function extractArticles(filePath, isLLM = false) {
  const content = readFileContent(filePath);
  const articles = [];

  // Match: 'slug-name': { ... }
  // We'll extract from the EN block specifically
  const articlePattern = /'([^']+)':\s*\{[^}]*?(?:en:\s*\{([\s\S]*?)(?=,\s*(?:de|fr|ja|zh):|},\s*\}|$))?/g;

  let match;
  let currentPos = 0;

  // Simpler approach: find each 'slug': { structure and extract en block
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const slugMatch = line.match(/^\s*'([^']+)':\s*\{/);

    if (slugMatch) {
      const slug = slugMatch[1];
      let enBlockStart = i + 1;
      let foundEn = false;
      let publishDate = '';
      let freshnessTier = '';
      let title = '';
      let seoTitle = '';
      let enContent = '';

      // Find the en: { block and extract fields
      for (let j = i + 1; j < Math.min(i + 500, lines.length); j++) {
        const curr = lines[j];

        if (!foundEn && curr.includes('en: {')) {
          foundEn = true;
          enBlockStart = j;
          continue;
        }

        if (foundEn) {
          // Extract specific fields from en block
          if (!publishDate && curr.includes('publishDate:')) {
            const match = curr.match(/publishDate:\s*['"]([\d-]+)['"]/);
            if (match) publishDate = match[1];
          }

          if (!freshnessTier && curr.includes('freshness_tier:')) {
            const match = curr.match(/freshness_tier:\s*['"]([^'"]+)['"]/);
            if (match) freshnessTier = match[1];
          }

          if (!title && curr.includes('title:')) {
            const match = curr.match(/title:\s*['"]([^'"]+)['"]/);
            if (match) title = match[1];
          }

          if (!seoTitle && curr.includes('seoTitle:')) {
            const match = curr.match(/seoTitle:\s*['"]([^'"]+)['"]/);
            if (match) seoTitle = match[1];
          }

          // Stop collecting when we hit the next language block or end of article
          if ((curr.includes('de: {') || curr.includes('fr: {') || curr.includes('ja: {') || curr.includes('zh: {') || curr.includes('},\n') || curr.includes('  },')) && j > enBlockStart + 5) {
            // Build en block content from extracted lines
            for (let k = enBlockStart; k < j; k++) {
              enContent += lines[k] + '\n';
            }
            break;
          }
        }
      }

      if (publishDate && title) {
        articles.push({
          slug,
          publishDate,
          freshnessTier,
          title,
          seoTitle: seoTitle || title,
          enContent: enContent,
          type: filePath.includes('local-llms') ? 'llm' : filePath.includes('prompt-engineering') ? 'pe' : 'blog',
        });
      }
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
      `Add: freshness_tier: 'evergreen' | 'semi_annual' | 'annual'`
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

  // ─── Check 3: semi_annual page requirements ───
  if (article.freshnessTier === 'semi_annual') {
    const hasYear = /20[0-9]{2}/.test(article.title) || /20[0-9]{2}/.test(article.seoTitle);
    if (!hasYear) {
      ERRORS.push(
        `[${article.type.toUpperCase()}] ${article.slug}: Semi-annual page must have year in title or seoTitle. ` +
        `Current: "${article.seoTitle}"`
      );
    }
  }

  // ─── Check 4: annual page requirements ───
  if (article.freshnessTier === 'annual') {
    if (!/20[0-9]{2}/.test(article.slug)) {
      ERRORS.push(
        `[${article.type.toUpperCase()}] ${article.slug}: Annual page must have year in slug (URL). ` +
        `Suggested: /YYYY-${article.slug}/ format`
      );
    }
  }
}

function main() {
  console.log('🔍 Validating freshness tiers...\n');

  // Read articles from all 3 content files
  const llmArticles = extractArticles(path.join(__dirname, '../src/lib/local-llms/content.ts'), true);
  const peArticles = extractArticles(path.join(__dirname, '../src/lib/prompt-engineering/content.ts'));
  const blogArticles = extractArticles(path.join(__dirname, '../src/lib/blog/blogContent.ts'));

  const allArticles = [...llmArticles, ...peArticles, ...blogArticles];

  console.log(`Found ${allArticles.length} articles (LLM: ${llmArticles.length}, PE: ${peArticles.length}, Blog: ${blogArticles.length})\n`);

  // Validate each article
  for (const article of allArticles) {
    validateArticle(article);
  }

  // Report
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

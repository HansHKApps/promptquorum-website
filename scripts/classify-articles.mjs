#!/usr/bin/env node

/**
 * Article Freshness Tier Classifier
 *
 * Analyzes all 148 articles and assigns freshness_tier with confidence score.
 * Output: scripts/classification-report.json
 *
 * Heuristic rules:
 * - Semi-annual: specific models, hardware, year, "best/top", recommendations
 * - Evergreen: conceptual, "what is", "how does", general principles
 * - Annual: year in slug/URL, specific year events
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    console.error(`Failed to read ${filePath}: ${err.message}`);
    return '';
  }
}

function extractArticles(filePath, fileType) {
  const content = readFileContent(filePath);
  const articles = [];

  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Match only top-level article entries (2 spaces indent only, not nested)
    const slugMatch = line.match(/^  '([^']+)':\s*\{/);

    if (slugMatch) {
      const slug = slugMatch[1];
      let foundEn = false;
      let publishDate = '';
      let title = '';
      let seoTitle = '';
      let enContent = '';
      let enBlockEnd = i + 200; // scan up to 200 lines

      for (let j = i + 1; j < Math.min(i + 500, lines.length); j++) {
        const curr = lines[j];

        if (!foundEn && curr.includes('en: {')) {
          foundEn = true;
          continue;
        }

        if (foundEn) {
          if (!publishDate && curr.includes('publishDate:')) {
            // Try ISO format (2026-04-20) first
            let m = curr.match(/(\d{4}-\d{2}-\d{2})/);
            if (m) {
              publishDate = m[1];
            } else {
              // Try "Published Month D, YYYY" format
              m = curr.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d+),\s+(\d{4})/i);
              if (m) {
                const months = { January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
                               July: '07', August: '08', September: '09', October: '10', November: '11', December: '12' };
                const month = months[m[1].charAt(0).toUpperCase() + m[1].slice(1).toLowerCase()];
                const day = m[2].padStart(2, '0');
                const year = m[3];
                publishDate = `${year}-${month}-${day}`;
              }
            }
          }

          if (!title && curr.includes('title:')) {
            const m = curr.match(/title:\s*['"]([^'"]+)['"]/);
            if (m) title = m[1];
          }

          if (!seoTitle && curr.includes('seoTitle:')) {
            const m = curr.match(/seoTitle:\s*['"]([^'"]+)['"]/);
            if (m) seoTitle = m[1];
          }

          enContent += curr + '\n';

          // Stop at next language block
          if ((curr.includes('de: {') || curr.includes('fr: {') || curr.includes('ja: {') ||
               curr.includes('zh: {') || curr.includes('  },\n') || curr.match(/^\s*},\s*$/)) && j > i + 10) {
            break;
          }
        }
      }

      if (publishDate && title) {
        articles.push({
          slug,
          file: fileType,
          publishDate,
          title: title || seoTitle || slug,
          seoTitle: seoTitle || title || slug,
          enContent,
        });
      }
    }
  }

  return articles;
}

function classifyArticle(article) {
  const text = (article.title + ' ' + article.seoTitle + ' ' + article.slug + ' ' + article.enContent).toLowerCase();
  const titleText = (article.title + ' ' + article.seoTitle).toLowerCase();

  let confidence = 0;
  let tier = null;
  const reasons = [];

  // ─── SEMI-ANNUAL SIGNALS (each +20–30%) ───

  // Year in title/slug
  if (/20[0-9]{2}/.test(titleText)) {
    confidence += 30;
    reasons.push('year in title');
    tier = 'semi_annual';
  }

  // Specific model names
  if (/llama\s+3\.[0-9]|qwen\d|mistral|claude|gpt-4|deepseek|phi/.test(titleText)) {
    confidence += 25;
    reasons.push('specific model names');
    tier = 'semi_annual';
  }

  // GPU/hardware specific
  if (/rtx\s+\d{4}|rtx\s+\d{3}|m[0-9]\s+(max|pro|ultra)|mac\s+studio|m[0-9]\s+chip/.test(titleText)) {
    confidence += 25;
    reasons.push('specific hardware');
    tier = 'semi_annual';
  }

  // "Best" / "Top" / "Comparison" with specifics
  if (/^(best|top|fastest|slowest|cheapest).*(20|gpu|model|laptop|hardware|llm)/.test(titleText)) {
    confidence += 25;
    reasons.push('best/top/fastest recommendations');
    tier = 'semi_annual';
  }

  // "vs" comparison pattern
  if (/vs\s+/.test(titleText) && (/llama|qwen|mistral|rtx|m[0-9]/.test(titleText))) {
    confidence += 20;
    reasons.push('product comparison with specifics');
    tier = 'semi_annual';
  }

  // Slug patterns that indicate current recommendations
  if (/best-.*-models|best-gpus|best-laptops|vram-calculator|hardware-guide/.test(article.slug)) {
    confidence += 30;
    reasons.push(`slug pattern: ${article.slug.split('-').slice(0, 3).join('-')}`);
    tier = 'semi_annual';
  }

  // ─── EVERGREEN SIGNALS (each +20–30%) ───

  // Conceptual titles
  if (/^(what\s+is|what\s+are|how\s+does|how\s+to|introduction\s+to|understanding|guide\s+to|principles)/.test(titleText)) {
    confidence += 30;
    reasons.push('conceptual title pattern');
    tier = tier ? tier : 'evergreen'; // Prefer evergreen if no semi signals yet
  }

  // Slug patterns that indicate concepts
  if (/^(what-is|what-are|why-|how-does|introduction|principles|fundamentals|limitations|security)/.test(article.slug)) {
    confidence += 25;
    reasons.push(`concept slug pattern`);
    if (!tier) tier = 'evergreen';
  }

  // No year references anywhere
  if (!/20[0-9]{2}/.test(text)) {
    confidence += 15;
    reasons.push('no year references');
  }

  // ─── ANNUAL SIGNALS (each +30–40%) ───

  // Year in slug (e.g., /2026-ai-releases)
  if (/\/20[0-9]{2}-|^20[0-9]{2}-/.test(article.slug)) {
    confidence = 85;
    tier = 'annual';
    reasons.push('year in slug');
  }

  // Blog + year ref + event pattern
  if (article.file === 'blog' && /20[0-9]{2}/.test(titleText) && /release|timeline|announcement|event/.test(titleText)) {
    confidence = 80;
    tier = 'annual';
    reasons.push('blog annual event');
  }

  // ─── RESOLVE AMBIGUITY ───

  // If conflicting signals, adjust confidence
  if (tier === 'semi_annual' && /^(what|how|why)/.test(titleText)) {
    confidence -= 15;
    reasons.push('(conflicting: how/what + recommendations)');
  }

  // Clamp confidence
  confidence = Math.max(0, Math.min(100, confidence));

  // Default if no tier assigned
  if (!tier) {
    tier = 'semi_annual'; // Most common, safer default
    confidence = 30; // Low confidence default
    reasons.push('default (insufficient signals)');
  }

  return {
    slug: article.slug,
    file: article.file,
    title: article.title,
    publishDate: article.publishDate,
    suggested_tier: tier,
    confidence: Math.round(confidence),
    reasons: reasons.length > 0 ? reasons : ['insufficient data'],
  };
}

function main() {
  console.log('📊 Classifying 148 articles...\n');

  const llmArticles = extractArticles(path.join(__dirname, '../src/lib/local-llms/content.ts'), 'llm');
  const peArticles = extractArticles(path.join(__dirname, '../src/lib/prompt-engineering/content.ts'), 'pe');
  const blogArticles = extractArticles(path.join(__dirname, '../src/lib/blog/blogContent.ts'), 'blog');

  const allArticles = [...llmArticles, ...peArticles, ...blogArticles];

  console.log(`Found: ${llmArticles.length} LLM, ${peArticles.length} PE, ${blogArticles.length} blog articles\n`);

  // Classify each
  const classifications = allArticles.map(classifyArticle);

  // Sort by confidence ascending (uncertain first)
  classifications.sort((a, b) => a.confidence - b.confidence);

  // Write report
  fs.writeFileSync(
    path.join(__dirname, 'classification-report.json'),
    JSON.stringify(classifications, null, 2),
    'utf-8'
  );

  console.log('✅ Classification complete!\n');
  console.log('Summary:');
  const byTier = {};
  const byConfidence = { high: 0, medium: 0, low: 0 };

  for (const c of classifications) {
    byTier[c.suggested_tier] = (byTier[c.suggested_tier] || 0) + 1;
    if (c.confidence >= 75) byConfidence.high++;
    else if (c.confidence >= 50) byConfidence.medium++;
    else byConfidence.low++;
  }

  console.log(`  Evergreen: ${byTier.evergreen || 0}`);
  console.log(`  Semi-annual: ${byTier.semi_annual || 0}`);
  console.log(`  Annual: ${byTier.annual || 0}`);
  console.log(`\nConfidence:
  High (≥75%): ${byConfidence.high}
  Medium (50-74%): ${byConfidence.medium}
  Low (<50%): ${byConfidence.low}\n`);

  // Show lowest confidence articles
  const uncertain = classifications.filter(c => c.confidence < 60);
  if (uncertain.length > 0) {
    console.log(`⚠️  ${uncertain.length} articles with <60% confidence (need user review):\n`);
    uncertain.slice(0, 15).forEach(c => {
      console.log(`  [${c.confidence}%] ${c.file.toUpperCase()} ${c.slug}`);
      console.log(`       Title: "${c.title}"`);
      console.log(`       Suggested: ${c.suggested_tier} (${c.reasons.join(', ')})\n`);
    });

    if (uncertain.length > 15) {
      console.log(`  ... and ${uncertain.length - 15} more\n`);
    }
  }

  console.log(`Report written to: scripts/classification-report.json`);
}

main();

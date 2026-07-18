#!/usr/bin/env node

/**
 * Language Completeness Checker — All Article Clusters
 *
 * Validates that articles have all 6 active languages (en, de, fr, ja, zh, es)
 * by detecting TOP-LEVEL language keys only (ignores nested langLinks, nav, etc).
 *
 * READ-ONLY. Does not modify files.
 *
 * Self-checks against 3 known-good files before reporting.
 * If self-check fails, aborts rather than reporting false data.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const CLUSTERS = [
  'local-llms',
  'prompt-engineering',
  'power-local-llm',
  'prompt-bites',
  'balcony-solar',
];

const ACTIVE_LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es'];
const RESERVED_LANGS = ['pt', 'ar'];
const ALL_LANGS = [...ACTIVE_LANGS, ...RESERVED_LANGS];

// Known-good reference files (verified manually)
const SELF_CHECK_FILES = [
  { slug: 'radeon-6800m-local-llm', cluster: 'prompt-bites', expectedLangs: 6 },
  { slug: 'best-egpu-ollama-macbook', cluster: 'prompt-bites', expectedLangs: 6 },
  { slug: 'co-star-prompt-framework', cluster: 'prompt-bites', expectedLangs: 6 },
];

/**
 * Detect the base indent of the article object by finding the first language key.
 * The first top-level language key tells us the indent level.
 */
function detectBaseIndent(content) {
  const lines = content.split('\n');
  let exportFound = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Find export const article line
    if (/export\s+const\s+article/.test(line)) {
      exportFound = true;
    }

    // Once we've found the export, look for the first language key
    // It will be at the indent we're looking for
    if (exportFound) {
      const keyMatch = line.match(/^(\s*)([a-z]{2}):\s*{/);
      if (keyMatch && ALL_LANGS.includes(keyMatch[2])) {
        return keyMatch[1].length;
      }
    }
  }

  return null;
}

/**
 * Extract top-level language keys from an article file.
 * Handles both multi-line (prompt-bites) and single-line (auto-gen PE) formats.
 */
function getTopLevelLanguages(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Try multi-line format first (indent-based detection)
  const baseIndent = detectBaseIndent(content);

  if (baseIndent !== null) {
    // Multi-line format: use indent-based matching
    const lines = content.split('\n');
    const indentStr = ' '.repeat(baseIndent);
    const langPattern = new RegExp(`^${indentStr}(${ALL_LANGS.join('|')}):\\s*{`);

    const langs = [];
    const seenLangs = new Set();

    for (const line of lines) {
      const match = line.match(langPattern);
      if (match && !seenLangs.has(match[1])) {
        langs.push(match[1]);
        seenLangs.add(match[1]);
      }
    }

    if (langs.length > 0) {
      return { error: null, langs };
    }
  }

  // Fallback: single-line format (auto-generated PE articles)
  // Match pattern: = { en: { ... }, de: { ... }, ...}
  // Use a regex that matches lang keys at the "top level" of the article object
  // Look for: = { en: { OR , en: { (after previous language key)
  const singleLinePattern = new RegExp(
    `[={,]\\s*(${ALL_LANGS.join('|')}):\\s*{`,
    'g'
  );

  const langs = [];
  const seenLangs = new Set();
  let match;

  while ((match = singleLinePattern.exec(content)) !== null) {
    const lang = match[1];
    if (!seenLangs.has(lang)) {
      langs.push(lang);
      seenLangs.add(lang);
    }
  }

  if (langs.length > 0) {
    return { error: null, langs };
  }

  return { error: 'Could not detect language keys', langs: [] };
}

/**
 * Run self-check against known-good files.
 * If any known-good file is reported as incomplete, abort.
 */
function runSelfCheck() {
  console.log('\n🔍 Running self-check against known-good files...\n');

  let allPass = true;

  for (const ref of SELF_CHECK_FILES) {
    const filePath = path.join(
      repoRoot,
      `src/lib/${ref.cluster}/articles/${ref.slug}.ts`
    );

    if (!fs.existsSync(filePath)) {
      console.error(`✗ SELF-CHECK FAILED: Could not find ${ref.slug}`);
      return false;
    }

    const result = getTopLevelLanguages(filePath);

    if (result.error) {
      console.error(`✗ SELF-CHECK FAILED: Parse error in ${ref.slug}: ${result.error}`);
      return false;
    }

    const activeLangsPresent = result.langs.filter(l => ACTIVE_LANGS.includes(l));

    if (activeLangsPresent.length !== ref.expectedLangs) {
      console.error(
        `✗ SELF-CHECK FAILED: ${ref.slug} has ${activeLangsPresent.length}/${ref.expectedLangs} ` +
        `active languages (expected ${ref.expectedLangs}). Found: ${result.langs.join(', ')}`
      );
      allPass = false;
    } else {
      console.log(`✓ ${ref.slug}: All ${ref.expectedLangs} active languages present`);
    }
  }

  if (!allPass) {
    console.error('\n❌ DETECTOR BROKEN — do not trust output. Fix indent detection and rerun.');
    process.exit(1);
  }

  console.log('\n✓ Self-check passed. Proceeding with full audit.\n');
  return true;
}

/**
 * Audit all clusters and report completeness.
 */
function auditAllClusters() {
  const results = {
    total: 0,
    complete: 0,
    incomplete: [],
  };

  const clusterStats = {};

  for (const cluster of CLUSTERS) {
    const articlesDir = path.join(repoRoot, `src/lib/${cluster}/articles`);

    if (!fs.existsSync(articlesDir)) {
      console.warn(`⚠ Cluster directory not found: ${articlesDir}`);
      continue;
    }

    const files = fs.readdirSync(articlesDir)
      .filter(f => f.endsWith('.ts'))
      .sort();

    clusterStats[cluster] = { total: 0, complete: 0, incomplete: [] };

    for (const file of files) {
      const slug = file.replace('.ts', '');
      const filePath = path.join(articlesDir, file);

      results.total++;
      clusterStats[cluster].total++;

      const result = getTopLevelLanguages(filePath);

      if (result.error) {
        results.incomplete.push({
          cluster,
          slug,
          issue: result.error,
          langs: result.langs,
        });
        continue;
      }

      const activeLangsPresent = result.langs.filter(l => ACTIVE_LANGS.includes(l));

      if (activeLangsPresent.length === ACTIVE_LANGS.length) {
        results.complete++;
        clusterStats[cluster].complete++;
      } else {
        const missing = ACTIVE_LANGS.filter(l => !activeLangsPresent.includes(l));
        results.incomplete.push({
          cluster,
          slug,
          langs: activeLangsPresent,
          missing,
        });
        clusterStats[cluster].incomplete.push({
          slug,
          missing,
        });
      }
    }
  }

  return { results, clusterStats };
}

/**
 * Format and print the audit report.
 */
function printReport(results, clusterStats) {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║  Language Completeness Audit — All Clusters              ║');
  console.log('║  Read-Only Report                                        ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  console.log('SUMMARY\n');
  console.log(`Total articles: ${results.total}`);
  console.log(`✓ Complete (6/6 active langs): ${results.complete}/${results.total}`);
  console.log(`⚠ Incomplete: ${results.incomplete.length}/${results.total}\n`);

  // Per-cluster breakdown
  console.log('PER-CLUSTER BREAKDOWN\n');
  for (const cluster of CLUSTERS) {
    const stats = clusterStats[cluster];
    if (stats.total === 0) continue;

    const pct = Math.round((stats.complete / stats.total) * 100);
    console.log(`  ${cluster}: ${stats.complete}/${stats.total} complete (${pct}%)`);

    if (stats.incomplete.length > 0 && stats.incomplete.length <= 5) {
      for (const item of stats.incomplete) {
        console.log(`    ⚠ ${item.slug}: missing ${item.missing.join(', ')}`);
      }
    } else if (stats.incomplete.length > 5) {
      console.log(`    ⚠ ${stats.incomplete.length} incomplete articles`);
    }
  }

  // Full incomplete list if reasonable size
  if (results.incomplete.length > 0 && results.incomplete.length <= 20) {
    console.log('\nINCOMPLETE ARTICLES\n');

    for (const item of results.incomplete) {
      if (item.issue) {
        console.log(`  ${item.cluster}/${item.slug}`);
        console.log(`    Error: ${item.issue}\n`);
      } else {
        console.log(`  ${item.cluster}/${item.slug}`);
        console.log(`    Present: ${item.langs.join(', ')}`);
        console.log(`    Missing: ${item.missing.join(', ')}\n`);
      }
    }
  } else if (results.incomplete.length > 20) {
    console.log(`\n⚠ ${results.incomplete.length} incomplete articles (list truncated)\n`);
  }

  // Final status
  if (results.incomplete.length === 0) {
    console.log('✓ BUILD STATUS: All clusters complete (no language gaps detected)\n');
  } else {
    console.log(`⚠ BUILD STATUS: ${results.incomplete.length} articles need translation work\n`);
  }
}

// Main
async function main() {
  try {
    // Self-check first
    if (!runSelfCheck()) {
      process.exit(1);
    }

    // Run audit
    const { results, clusterStats } = auditAllClusters();

    // Print report
    printReport(results, clusterStats);

    // Exit with appropriate code
    process.exit(results.incomplete.length > 0 ? 1 : 0);
  } catch (err) {
    console.error(`\n❌ Fatal error: ${err.message}`);
    console.error(err.stack);
    process.exit(1);
  }
}

main();

#!/usr/bin/env node

/**
 * Pre-commit hook: Validates evergreen articles
 *
 * Ensures articles tagged as `freshness_tier: 'evergreen'` don't contain:
 * - Concrete LLM model names (GPT-4o, Claude, Gemini, Llama, Mistral, etc.)
 * - Version numbers (2.0, 3.5, etc.)
 * - Years (2024, 2025, 2026, 2027, etc.)
 * - Time-sensitive terminology (latest, current, newest)
 *
 * Runs on staged content files before commit.
 *
 * 2026-07-02: the staged-file filter was `f.includes('content.ts') ||
 * f.includes('blogContent.ts')` — every cluster except blog now uses
 * individual per-article files under an articles-barrel.ts convention, so
 * this hook silently checked nothing for local-llms, prompt-engineering,
 * power-local-llm, smart-home, prompt-bites, or balcony-solar. Widened to
 * match individual article files too. Also added metadata-field/link-target
 * line skipping — without it, every article's own required `publishDate`/
 * `dateModified` fields (which must contain a year) trip the "years" pattern,
 * and inline markdown links to other year-bearing article slugs trip it too.
 * See validate-freshness-tier.mjs's stripToProseOnly() for the same reasoning
 * applied to that sibling validator.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const FORBIDDEN_PATTERNS = {
  // LLM Model names - exact case-sensitive matches
  'gpt4o': /GPT-?4[oO]/gi,
  'gpt4': /GPT-?4(?!All)/gi,
  'gpt3.5': /GPT-?3\.5/gi,
  'claude': /\bClaude\b/g,
  'gemini': /\bGemini\b/g,
  'llama': /\bLlama\b/g,
  'mistral': /\bMistral\b/g,
  'qwen': /\bQwen\b/g,
  'deepseek': /\bDeepSeek\b/g,
  'command': /Command\s+(?:R\+?|Light)/g,
  'palm': /Palm-?2/g,

  // Version patterns
  'version_numbers': /\b(?:v)?(\d+\.\d+(?:\.\d+)?)\b/g,

  // Years (2020-2030)
  'years': /\b(202[0-9]|203[0-9])\b/g,

  // Time-sensitive phrases
  'time_sensitive': /\b(?:latest|newest|current|as of now|recently|just (?:came|released))\b/gi,
};

// Allow some exceptions in code blocks and specific contexts
const EXCEPTION_KEYWORDS = [
  'code',
  'example',
  'snippet',
  'schema',
  'import',
  'codeBlock',
];

function isInExceptionContext(line, keyword) {
  return EXCEPTION_KEYWORDS.some(exc => line.includes(exc));
}

// Metadata date fields that legitimately/necessarily contain a year — not
// reader-facing prose, and every article (evergreen or not) must have them.
const METADATA_DATE_LINE = /\b(publishDate|dateModified|datePublished|next_refresh_due|last_full_refresh|lastFactChecked|next_seo_review_due|last_seo_review|updatedDate|specific_year|archive_after)\s*:/;

// A line whose only year-shaped content is a link target (structured
// `url:`/`href:` field, or an inline markdown `](/path-2026)`) isn't making a
// freshness claim in THIS article's own prose — it's just pointing at another
// article whose slug happens to contain a year.
function isPureLinkLine(line) {
  const stripped = line
    .replace(/(?:url|href):\s*'\/[^']*'/g, '')
    .replace(/\]\(\/[^)]*\)/g, '](/)')
  return !/\d/.test(stripped) && /\d/.test(line)
}

// "current" is also standard electrical-engineering terminology (direct
// current / alternating current, DC/AC) — not every occurrence is a
// freshness claim. Only exempt this specific, narrow phrase pattern.
const ELECTRICAL_CURRENT = /\b(?:direct|alternating)\s+current\b/gi

function validateEvergreen(filePath, content) {
  const violations = [];
  const lines = content.split('\n');

  let isFreshEvergreen = false;
  let isInCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    // Track if this is an evergreen article
    if (/freshness_tier:\s*['"]evergreen['"]/.test(line)) {
      isFreshEvergreen = true;
    }

    // Track code blocks
    if (line.includes('codeBlock') || line.includes('```')) {
      isInCodeBlock = !isInCodeBlock;
      continue;
    }

    // Skip validation if not evergreen or in code block
    if (!isFreshEvergreen || isInCodeBlock) {
      continue;
    }

    // Skip exception contexts
    if (isInExceptionContext(line, 'code')) {
      continue;
    }

    // Skip metadata date-field lines and link-only lines — see the 2026-07-02
    // header note for why these aren't reader-facing freshness claims.
    if (METADATA_DATE_LINE.test(line) || isPureLinkLine(line)) {
      continue;
    }

    // Strip "direct current"/"alternating current" (DC/AC electrical
    // terminology) before scanning — not a freshness claim, but only this
    // narrow phrase is exempted, not every "current" on the line.
    const scanLine = line.replace(ELECTRICAL_CURRENT, '');

    // Check for forbidden patterns
    for (const [patternName, pattern] of Object.entries(FORBIDDEN_PATTERNS)) {
      if (pattern.test(scanLine)) {
        const match = scanLine.match(pattern);
        violations.push({
          file: filePath,
          line: lineNum,
          pattern: patternName,
          content: line.trim(),
          match: match ? match[0] : 'unknown',
        });
      }
    }
  }

  return violations;
}

// Main execution
function main() {
  try {
    // Get staged files — both the old monolithic-file shape (content.ts,
    // blogContent.ts) and individual per-article files under any cluster's
    // articles/ directory (the convention every cluster now actually uses).
    const stagedFiles = execSync('git diff --cached --name-only')
      .toString()
      .split('\n')
      .filter(f =>
        (f.includes('content.ts') || f.includes('blogContent.ts') || /src\/lib\/[^/]+\/articles\/.*\.ts$/.test(f)) &&
        fs.existsSync(path.join(process.cwd(), f))
      );

    if (stagedFiles.length === 0) {
      process.exit(0);
    }

    let totalViolations = 0;
    const allViolations = [];

    for (const file of stagedFiles) {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf-8');

      const violations = validateEvergreen(filePath, content);

      if (violations.length > 0) {
        allViolations.push(...violations);
        totalViolations += violations.length;
      }
    }

    if (totalViolations > 0) {
      console.error('\n❌ FRESHNESS TIER VALIDATION FAILED\n');
      console.error('Evergreen articles must not contain:\n');
      console.error('  • Concrete LLM model names (GPT-4o, Claude, Gemini, etc.)');
      console.error('  • Version numbers (2.0, 3.5, etc.)');
      console.error('  • Years (2024, 2025, 2026, etc.)');
      console.error('  • Time-sensitive phrases (latest, current, newest, etc.)\n');

      const violations_by_type = {};
      for (const v of allViolations) {
        if (!violations_by_type[v.pattern]) {
          violations_by_type[v.pattern] = [];
        }
        violations_by_type[v.pattern].push(v);
      }

      for (const [patternType, violations] of Object.entries(violations_by_type)) {
        console.error(`\n${patternType} violations (${violations.length}):`);
        violations.forEach(v => {
          console.error(`  ${v.file}:${v.line}`);
          console.error(`    Found: "${v.match}"`);
          console.error(`    Line: ${v.content.substring(0, 80)}`);
        });
      }

      console.error(`\n⚠️  Total violations: ${totalViolations}`);
      console.error('\nEither:');
      console.error('  1. Change freshness_tier to "semi_annual" or "annual" if this content has version/date refs');
      console.error('  2. Remove all concrete model names and dates from evergreen content');
      console.error('  3. Use "git commit --no-verify" to skip this check (not recommended)\n');

      process.exit(1);
    }

    process.exit(0);
  } catch (error) {
    // Ignore errors in getting staged files (e.g., not a git repo)
    process.exit(0);
  }
}

main();

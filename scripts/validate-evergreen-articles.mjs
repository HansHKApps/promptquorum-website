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

    // Check for forbidden patterns
    for (const [patternName, pattern] of Object.entries(FORBIDDEN_PATTERNS)) {
      if (pattern.test(line)) {
        const match = line.match(pattern);
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
    // Get staged files
    const stagedFiles = execSync('git diff --cached --name-only')
      .toString()
      .split('\n')
      .filter(f =>
        (f.includes('content.ts') || f.includes('blogContent.ts')) &&
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

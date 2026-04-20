#!/usr/bin/env node

/**
 * Apply freshness_tier classifications to articles
 * Carefully handles both single-line and multi-line article definitions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CLASSIFICATIONS = {
  semi_annual: {
    llm: [
      '70b-models-consumer-hardware', 'best-beginner-local-llm-models', 'best-gpus-for-local-llms',
      'best-local-llm-frontends', 'best-local-llm-stack-use-case', 'best-local-llms-2026',
      'best-local-llms-business-writing', 'best-local-llms-code-review', 'best-local-llms-for-coding',
      'best-local-llms-for-creative-writing', 'best-local-rag-tools', 'best-mini-pcs-local-llm',
      'fastest-local-llms-low-end-pcs', 'headless-local-llms', 'laptop-vs-desktop-local-llm',
      'llamacpp-vs-ollama-vs-vllm', 'lm-studio-advanced-features', 'local-llm-developer-stack',
      'local-llm-hardware-guide-2026', 'local-llm-model-updates-2026', 'local-llm-on-laptop',
      'local-llm-one-click-installers', 'long-context-local-llms', 'mobile-local-llms',
      'multi-gpu-local-llms', 'multilingual-local-llms', 'ollama-command-guide', 'ollama-vs-lm-studio',
      'qwen-vs-llama-vs-mistral', 'rtx-5090-vs-rtx-4090-local-llm', 'small-local-llm-models',
      'text-generation-webui-vs-vllm-vs-llamacpp', 'top-open-source-models-ollama',
      'troubleshooting-local-llm-setup', 'vram-calculator-local-llm', 'best-7b-models-consumer-hardware',
    ],
    pe: [
      'best-prompt-management-platforms', 'best-prompt-testing-tools', 'tokens-costs-limits',
      'fundamentals-of-prompt-optimization',
    ],
  },
  evergreen: {
    llm: [
      'what-are-local-llms', 'why-enterprises-use-local-llms', 'how-much-vram-local-llm',
      'llm-quantization-explained', 'quantization-levels-comparison',
    ],
    pe: [
      'ape-framework', 'chain-of-thought-prompting', 'co-star-framework', 'constrained-prompting',
      'context-windows-explained', 'craft-framework', 'how-llms-actually-work',
      'how-to-evaluate-prompt-quality', 'manual-vs-automated-prompt-optimization',
      'negative-prompting', 'open-source-vs-proprietary-llms', 'persona-prompting',
      'prompt-building-blocks', 'prompt-chaining', 'prompt-engineering-glossary',
      'prompt-engineering-history', 'prompt-engineering-vs-fine-tuning', 'prompt-engineering-vs-rag',
      'prompt-injection-and-security', 'prompt-with-images', 'rag-explained', 'risen-framework',
      'rtf-framework', 'self-consistency-prompting', 'single-prompt-method', 'specs-framework',
      'system-prompt-vs-user-prompt', 'trace-framework', 'tree-of-thought-react',
      'what-is-prompt-engineering', 'which-framework-to-use', 'zero-shot-vs-few-shot',
      'build-a-prompt-library',
    ],
  },
};

const FILE_MAP = {
  llm: 'src/lib/local-llms/content.ts',
  pe: 'src/lib/prompt-engineering/content.ts',
  blog: 'src/lib/blog/blogContent.ts',
};

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {};
  args.forEach(arg => {
    const [key, val] = arg.split('=');
    opts[key.replace(/^--/, '')] = val || true;
  });
  return opts;
}

function applyClassifications(filePath, fileType, tier, shouldApply) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const articlesToProcess = CLASSIFICATIONS[tier]?.[fileType] || [];
  let changes = 0;
  let skipped = 0;

  articlesToProcess.forEach(slug => {
    // Find article line: match ^  'slug': {
    const articleLineIdx = lines.findIndex(line => line.match(new RegExp(`^  '${slug}': \\{`)));
    if (articleLineIdx === -1) {
      return; // Article not found, skip silently
    }

    // Check if en block is on same line or next lines
    let enLineContent = lines[articleLineIdx];
    let enLineIdx = articleLineIdx;

    // If en: { is on a different line, find it
    if (!enLineContent.includes('en: {')) {
      for (let i = articleLineIdx + 1; i < Math.min(articleLineIdx + 50, lines.length); i++) {
        if (lines[i].includes('en: {')) {
          enLineIdx = i;
          enLineContent = lines[i];
          break;
        }
      }
    }

    if (enLineIdx === articleLineIdx && !enLineContent.includes('en: {')) {
      return; // Could not find en: { block
    }

    // Check if freshness_tier already exists in the first 200 lines of the en block
    let hasExisting = false;
    for (let i = enLineIdx; i < Math.min(enLineIdx + 200, lines.length); i++) {
      if (lines[i].includes('freshness_tier:')) {
        hasExisting = true;
        break;
      }
      // Stop if we hit the next article or language block
      if (i > enLineIdx && (lines[i].match(/^  '[^']+': \{/) || lines[i].includes('de: {') || lines[i].includes('fr: {'))) {
        break;
      }
    }

    if (hasExisting) {
      skipped++;
      return;
    }

    // Find the position to insert: after en: { and before the first field
    // If en: { is at the end of the line, insert on next line
    // If there's content after en: { on same line, we need to be careful

    const enMatch = enLineContent.match(/en:\s*\{\s*(.*)/);
    if (!enMatch) {
      return;
    }

    const afterOpenBrace = enMatch[1].trim();

    if (afterOpenBrace === '' || afterOpenBrace === ',') {
      // en: { is on its own (multi-line style)
      // Insert freshness_tier on next line
      const nextLineIdx = enLineIdx + 1;
      const indent = enLineContent.match(/^(\s+)/)?.[1] || '    ';
      const tierLine = `${indent}  freshness_tier: '${tier}',`;
      lines.splice(nextLineIdx, 0, tierLine);
      changes++;
    } else {
      // en: { has content on same line (single-line style)
      // We need to insert inside the braces
      // This is trickier - we need to find where theme: starts and insert before it
      const firstFieldMatch = afterOpenBrace.match(/^([a-z]+):/);
      if (firstFieldMatch) {
        // Reconstruct the line with freshness_tier inserted
        const fieldName = firstFieldMatch[1];
        const beforeField = enLineContent.substring(0, enLineContent.lastIndexOf(fieldName));
        const fromField = enLineContent.substring(enLineContent.lastIndexOf(fieldName));

        const indent = enLineContent.match(/^(\s+)/)?.[1] || '    ';
        const newLine = `${beforeField}freshness_tier: '${tier}', ${fromField}`;
        lines[enLineIdx] = newLine;
        changes++;
      }
    }
  });

  if (changes === 0 && skipped === 0) {
    console.log(`  (no articles to classify for ${fileType}/${tier})`);
    return;
  }

  if (shouldApply) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
    console.log(`✓ Updated ${filePath}: ${changes} additions, ${skipped} already have freshness_tier\n`);
  } else {
    console.log(`(DRY RUN) Would add ${changes} classifications, ${skipped} already set\n`);
  }
}

function main() {
  const opts = parseArgs();
  const fileType = opts.file;
  const tier = opts.tier;
  const shouldApply = opts.apply === true;

  if (!fileType || !tier) {
    console.log('Usage: node scripts/apply-freshness-tiers.mjs --file=llm|pe|blog --tier=semi_annual|evergreen [--apply]');
    process.exit(1);
  }

  if (!FILE_MAP[fileType] || !CLASSIFICATIONS[tier]) {
    console.error('Invalid --file or --tier');
    process.exit(1);
  }

  const filePath = path.join(__dirname, '..', FILE_MAP[fileType]);

  console.log(`\n📋 ${shouldApply ? 'Applying' : 'Checking'} ${tier} to ${fileType}...\n`);

  applyClassifications(filePath, fileType, tier, shouldApply);
}

main();

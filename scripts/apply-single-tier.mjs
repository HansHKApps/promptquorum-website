#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILE_MAP = {
  llm: 'src/lib/local-llms/content.ts',
  pe: 'src/lib/prompt-engineering/content.ts',
  blog: 'src/lib/blog/blogContent.ts',
};

function applySingleTier(filePath, slug, tier) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const articleLineIdx = lines.findIndex(line => line.match(new RegExp(`^  '${slug}': \\{`)));
  if (articleLineIdx === -1) return { success: false, message: 'Article not found' };

  let enLineIdx = articleLineIdx;
  if (!lines[articleLineIdx].includes('en: {')) {
    for (let i = articleLineIdx + 1; i < Math.min(articleLineIdx + 50, lines.length); i++) {
      if (lines[i].includes('en: {')) {
        enLineIdx = i;
        break;
      }
    }
  }

  // Check if already has freshness_tier
  for (let i = enLineIdx; i < Math.min(enLineIdx + 200, lines.length); i++) {
    if (lines[i].includes('freshness_tier:')) {
      return { success: false, message: 'Already has freshness_tier' };
    }
    if (i > enLineIdx && (lines[i].match(/^  '[^']+': \{/) || lines[i].includes('de: {'))) {
      break;
    }
  }

  // Insert freshness_tier
  const enContent = lines[enLineIdx];
  const enMatch = enContent.match(/en:\s*\{\s*(.*)/);
  if (!enMatch) return { success: false, message: 'Could not find en: block' };

  const afterOpenBrace = enMatch[1].trim();
  if (afterOpenBrace === '' || afterOpenBrace === ',') {
    const nextLineIdx = enLineIdx + 1;
    const indent = enContent.match(/^(\s+)/)?.[1] || '    ';
    const tierLine = `${indent}  freshness_tier: '${tier}',`;
    lines.splice(nextLineIdx, 0, tierLine);
  } else {
    const firstFieldMatch = afterOpenBrace.match(/^([a-z]+):/);
    if (firstFieldMatch) {
      const fieldName = firstFieldMatch[1];
      const beforeField = enContent.substring(0, enContent.lastIndexOf(fieldName));
      const fromField = enContent.substring(enContent.lastIndexOf(fieldName));
      const newLine = `${beforeField}freshness_tier: '${tier}', ${fromField}`;
      lines[enLineIdx] = newLine;
    }
  }

  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
  return { success: true, message: `Applied ${tier}` };
}

const args = process.argv.slice(2);
if (args.length < 3) {
  console.error('Usage: node scripts/apply-single-tier.mjs <file> <slug> <tier>');
  process.exit(1);
}

const [fileType, slug, tier] = args;
const filePath = path.join(__dirname, '..', FILE_MAP[fileType]);

const result = applySingleTier(filePath, slug, tier);
console.log(result.message);
process.exit(result.success ? 0 : 1);

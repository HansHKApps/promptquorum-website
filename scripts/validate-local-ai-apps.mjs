#!/usr/bin/env node

/**
 * Local AI App Directory Validator
 *
 * `src/lib/power-local-llm/apps/*.ts` holds one ToolRecord per tool for the
 * `local-llm-software-directory-2026` hub. Phase 1 migration left every
 * record's `locality`/`platforms`/`engine`/`price` as a `'TODO'` sentinel or
 * `null` — 108 of 130 tools dropped silently out of every filter that reads
 * those fields, with no build error to catch it (see
 * docs/local-ai/page-redesign-v2.md, audit item #6).
 *
 * This validator BLOCKs the build if any record has:
 *   - `locality`, `engine`, or `price` missing, `'TODO'`, or `'Various'`
 *   - `platforms` missing, `null`, empty, or `'Various'`
 * on ANY tool record, so this gap cannot silently reopen as new tools are
 * added.
 *
 * Exit 0 on success, 1 on any failure.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APPS_DIR = path.resolve(__dirname, '..', 'src', 'lib', 'power-local-llm', 'apps');

const BAD_VALUES = new Set(['TODO', 'Various', 'various', 'various.', 'TBD', 'TBC']);
const REQUIRED_SCALAR_FIELDS = ['locality', 'engine', 'price'];

function findAppFiles() {
  if (!fs.existsSync(APPS_DIR)) return [];
  return fs
    .readdirSync(APPS_DIR)
    .filter(f => f.endsWith('.ts') && !f.endsWith('.d.ts') && f !== 'types.ts')
    .map(f => path.join(APPS_DIR, f))
    .sort();
}

function extractScalarField(content, field) {
  const m = content.match(new RegExp(`\\n\\s*${field}:\\s*([^\\n]+),`));
  return m ? m[1].trim() : undefined;
}

function extractPlatforms(content) {
  const m = content.match(/\n\s*platforms:\s*([^\n]+),/);
  return m ? m[1].trim() : undefined;
}

function isBadScalar(raw) {
  if (raw === undefined) return 'missing';
  const unquoted = raw.replace(/^'|'$/g, '');
  if (raw === 'null') return 'null';
  if (BAD_VALUES.has(unquoted)) return unquoted;
  return null;
}

function isBadPlatforms(raw) {
  if (raw === undefined) return 'missing';
  if (raw === 'null') return 'null';
  if (raw === '[]') return 'empty array';
  if (/Various/i.test(raw)) return 'Various';
  return null;
}

function validateFile(absPath, errors) {
  const file = path.relative(process.cwd(), absPath);
  const content = fs.readFileSync(absPath, 'utf-8');
  const slugMatch = content.match(/\n\s*slug:\s*'([^']+)'/);
  const slug = slugMatch ? slugMatch[1] : '(unknown slug)';

  for (const field of REQUIRED_SCALAR_FIELDS) {
    const raw = extractScalarField(content, field);
    const bad = isBadScalar(raw);
    if (bad) errors.push({ file, slug, field, value: bad });
  }

  const platformsRaw = extractPlatforms(content);
  const badPlatforms = isBadPlatforms(platformsRaw);
  if (badPlatforms) errors.push({ file, slug, field: 'platforms', value: badPlatforms });
}

function main() {
  const files = findAppFiles();
  const errors = [];

  for (const f of files) validateFile(f, errors);

  if (errors.length === 0) {
    console.log(`✓ Local AI app directory data check passed (${files.length} tool records validated)`);
    process.exit(0);
  }

  console.error('');
  console.error('✗ Local AI app directory data validation FAILED');
  console.error('');
  for (const e of errors) {
    console.error(`  ${e.file} — ${e.slug}: ${e.field} = ${e.value}`);
  }
  console.error('');
  console.error(
    `${errors.length} field(s) across ${new Set(errors.map(e => e.file)).size} file(s) are missing, ` +
      `'TODO', 'Various', or null. locality/platforms/engine/price must be filled with a real value ` +
      `before the record ships — see docs/local-ai/page-redesign-v2.md #6.`
  );
  process.exit(1);
}

main();

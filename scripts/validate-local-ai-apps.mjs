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
    .filter(f => f.endsWith('.ts') && !f.endsWith('.d.ts') && !['types.ts', 'categories.ts', 'compare-schema.ts'].includes(f))
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

  validateInstallEffort(content, file, slug, platformsRaw, errors);
}

// ── installEffort (see InstallEffortKey in apps/types.ts and check 6 of the feature-app-post skill) ──
// Optional field: unset = "not yet verified", never an error. But once set it must be evidenced, scoped
// to real platforms, and consistent with the tile's website — a tier with no evidence is a guess, and the
// 2026-10-09 Unsloth incident (GitHub `url` hiding a .dmg) is exactly what this field exists to prevent.
const INSTALL_EFFORT_KEYS = new Set(['installer', 'one-command', 'terminal-setup', 'hosted']);
const OS_KEYS = new Set(['mac', 'win', 'linux', 'ios', 'android', 'web']);

function parseStringList(raw) {
  return (raw?.match(/'([^']+)'/g) ?? []).map(s => s.slice(1, -1));
}

function validateInstallEffort(content, file, slug, platformsRaw, errors) {
  const effortRaw = extractScalarField(content, 'installEffort');
  const onRaw = extractScalarField(content, 'installOn');
  const evidenceRaw = extractScalarField(content, 'installEvidence');
  const effort = effortRaw?.match(/^'([^']+)'/)?.[1];

  if (effortRaw === undefined) {
    if (onRaw !== undefined) errors.push({ file, slug, field: 'installOn', value: 'set without installEffort' });
    if (evidenceRaw !== undefined) errors.push({ file, slug, field: 'installEvidence', value: 'set without installEffort' });
    return;
  }
  if (!effort || !INSTALL_EFFORT_KEYS.has(effort)) {
    errors.push({ file, slug, field: 'installEffort', value: `invalid (${effortRaw})` });
    return;
  }
  if (!evidenceRaw || evidenceRaw.replace(/^'|',?$/g, '').trim().length < 40) {
    errors.push({ file, slug, field: 'installEvidence', value: 'missing or too short — record what you saw (release assets, README line, store listing) and the date' });
  }
  if (onRaw !== undefined) {
    const on = parseStringList(onRaw);
    const platforms = parseStringList(platformsRaw);
    for (const os of on) {
      if (!OS_KEYS.has(os)) errors.push({ file, slug, field: 'installOn', value: `unknown OS '${os}'` });
      else if (!platforms.includes(os)) errors.push({ file, slug, field: 'installOn', value: `'${os}' is not in platforms` });
    }
    if (on.length === 0) errors.push({ file, slug, field: 'installOn', value: 'empty array — omit the field instead' });
  }

  // Check 5 consistency: when storeLinks.web is set, it must be the same site as `url`.
  const url = content.match(/\n  url: '([^']*)'/)?.[1];
  const web = content.match(/storeLinks:\s*\{[^}]*?\bweb:\s*'([^']+)'/s)?.[1];
  if (url && web) {
    const urlHost = url.split('/')[0].replace(/^www\./, '');
    let webHost = '';
    try { webHost = new URL(web).host.replace(/^www\./, ''); } catch { /* reported below */ }
    if (!webHost) errors.push({ file, slug, field: 'storeLinks.web', value: `not a valid URL (${web})` });
    else if (webHost !== urlHost) errors.push({ file, slug, field: 'storeLinks.web', value: `host ${webHost} differs from url ${urlHost}` });
  }
}

function main() {
  const files = findAppFiles();
  const errors = [];

  for (const f of files) validateFile(f, errors);

  if (errors.length === 0) {
    const set = files.filter(f => /\n  installEffort:/.test(fs.readFileSync(f, 'utf-8'))).length;
    console.log(`✓ Local AI app directory data check passed (${files.length} tool records validated; installEffort verified on ${set}, unset on ${files.length - set})`);
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

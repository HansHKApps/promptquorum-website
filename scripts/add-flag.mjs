#!/usr/bin/env node

/**
 * Adds country flag SVGs to public/flags from the MIT-licensed `flag-icons` set (4x3), the same set
 * the existing flags came from (see public/flags/LICENSE-flag-icons.txt).
 *
 * Usage: npm run add-flag -- gb ca nl      (lowercase ISO 3166-1 alpha-2 codes)
 *
 * Needed when a ToolRecord gets an `hqCountry` whose flag is not in public/flags yet
 * (validate-local-ai-apps.mjs tells you which). Existing files are never overwritten.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FLAGS_DIR = path.resolve(__dirname, '..', 'public', 'flags');
const codes = process.argv.slice(2).map(c => c.toLowerCase());

if (codes.length === 0 || codes.some(c => !/^[a-z]{2}$/.test(c))) {
  console.error('Usage: npm run add-flag -- <code> [<code> ...]   (two-letter ISO codes, e.g. gb ca nl)');
  process.exit(1);
}

const todo = codes.filter(c => !fs.existsSync(path.join(FLAGS_DIR, `${c}.svg`)));
if (todo.length === 0) {
  console.log('All requested flags already exist.');
  process.exit(0);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'flag-icons-'));
try {
  execFileSync('npm', ['pack', 'flag-icons', '--silent', '--pack-destination', tmp], { stdio: 'ignore' });
  const tgz = fs.readdirSync(tmp).find(f => f.endsWith('.tgz'));
  execFileSync('tar', ['xzf', path.join(tmp, tgz), '-C', tmp]);
  for (const c of todo) {
    const src = path.join(tmp, 'package', 'flags', '4x3', `${c}.svg`);
    if (!fs.existsSync(src)) { console.error(`✗ no flag for '${c}' in flag-icons`); process.exitCode = 1; continue; }
    fs.copyFileSync(src, path.join(FLAGS_DIR, `${c}.svg`));
    console.log(`✓ added public/flags/${c}.svg`);
  }
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}

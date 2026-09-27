#!/usr/bin/env node

/**
 * force-static + generateMetadata(searchParams) regression guard.
 *
 * A page.tsx can declare `export const dynamic = 'force-static'` and still
 * render fully dynamic in production, because `force-static` only stubs
 * `searchParams` to `{}` inside the page BODY (see
 * node_modules/next/dist/server/request/search-params.js,
 * createStaticPrerenderSearchParams). It does nothing for `generateMetadata`,
 * which runs outside that static-stub path. If `generateMetadata` itself
 * destructures/reads `searchParams` (typically to resolve `?lang=`), Next
 * marks the whole route dynamic, silently overriding `force-static`.
 *
 * This exact bug shipped twice on this site:
 *   - src/app/prompt-engineering/page.tsx never got the June 2026 fix
 *     (commit 563ab4bf6) that was applied to its 4 sibling hub pages.
 *   - src/app/download/page.tsx got the fix in that same commit, then
 *     regressed it three weeks later (commit afdec183b) when the page was
 *     rebuilt around DownloadClient and `generateMetadata({ searchParams })`
 *     was reintroduced.
 *
 * Both were fixed by changing `generateMetadata({ searchParams }: PageProps)`
 * to a zero-argument `generateMetadata()` that hardcodes `const selectedLang
 * = 'en'` — mirroring the 4 sibling pages that were never broken. The page
 * BODY'S own `searchParams` read is untouched and stays safe under
 * `force-static`; only `generateMetadata`'s signature matters here.
 *
 * This script scans every src/app/**\/page.tsx for the co-occurrence of:
 *   1. `dynamic = 'force-static'`
 *   2. a `generateMetadata` function whose parameter list destructures or
 *      otherwise names `searchParams`
 * and fails the build if both are present in the same file.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'src/app');

const ERRORS = [];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      files.push(full);
    }
  }
  return files;
}

function checkFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const rel = path.relative(ROOT, filePath);

  const isForceStatic = /export\s+const\s+dynamic\s*=\s*['"]force-static['"]/.test(src);
  if (!isForceStatic) return;

  // Extract just the generateMetadata PARAMETER LIST — the text between its
  // opening and matching closing paren — via a depth-tracked scan rather
  // than a regex, so a `searchParams` read inside the function BODY (which
  // would be a false positive; only the parameter list matters here) is
  // never mistaken for one in the signature, regardless of how the
  // signature/return-type annotation is formatted.
  const fnMatch = src.match(/export\s+async\s+function\s+generateMetadata\s*\(/);
  if (!fnMatch) return;

  const openParenIdx = fnMatch.index + fnMatch[0].length - 1;
  let depth = 0;
  let closeParenIdx = -1;
  for (let i = openParenIdx; i < src.length; i++) {
    if (src[i] === '(') depth++;
    else if (src[i] === ')') {
      depth--;
      if (depth === 0) {
        closeParenIdx = i;
        break;
      }
    }
  }
  if (closeParenIdx === -1) return;

  const paramList = src.slice(openParenIdx + 1, closeParenIdx);
  if (/searchParams/.test(paramList)) {
    ERRORS.push(
      `${rel}: has "dynamic = 'force-static'" AND a "generateMetadata" that ` +
      `destructures/reads "searchParams" in its parameter list. This forces ` +
      `the whole route dynamic, silently overriding force-static (Next only ` +
      `stubs searchParams to {} inside the page BODY under force-static, not ` +
      `inside generateMetadata). Fix: change the signature to a zero-argument ` +
      `"generateMetadata()" and hardcode "const selectedLang = 'en'" instead ` +
      `of deriving it from searchParams — see src/app/privacy/page.tsx or ` +
      `src/app/local-llms/page.tsx for the working pattern. Do not touch the ` +
      `default-exported page component's own searchParams handling, which is ` +
      `already safe under force-static.`
    );
  }
}

function main() {
  const files = walk(APP_DIR);
  console.log(`Scanning ${files.length} page.tsx files for the force-static + generateMetadata(searchParams) bug...\n`);

  for (const file of files) {
    checkFile(file);
  }

  if (ERRORS.length > 0) {
    console.log('❌ FORCE-STATIC METADATA VALIDATION FAILED\n');
    ERRORS.forEach((err, i) => console.log(`  ${i + 1}. ${err}\n`));
    console.log(`❌ Build aborted: ${ERRORS.length} violation(s)\n`);
    process.exit(1);
  }

  console.log('✓ No force-static + generateMetadata(searchParams) violations found!\n');
  process.exit(0);
}

main();

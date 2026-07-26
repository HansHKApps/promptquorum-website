#!/usr/bin/env node
// scripts/validate-image-schema.mjs
//
// Prebuild image-schema integrity validator. Guards the regression class
// that has shipped broken/hand-rolled JSON-LD image references twice
// already: once as a wrapped '@type': 'ImageObject' node with a hard-coded
// slug (61 broken URLs, found and fixed in one pass), once as a bare
// `image: 'https://...api/og/...'` string that the first pass's detection
// didn't match at all (7 files, introduced by an unrelated PR, found in a
// second pass). Assume there is a third shape neither pass caught — this
// header is the record of what has and hasn't been checked, so the next
// person extending this file knows what's actually covered instead of
// trusting the "zero violations" output blindly.
//
// A URL that returns 200 today is not sufficient — the slug-mismatch bug
// would have passed a 200-check on the day it was written, since the wrong
// slug happened not to exist as *any* route. This validator checks the
// construction, not just liveness.
//
// ── What this file SCANS FOR (all BLOCK mode) ──────────────────────────────
//   1a. Wrapped hand-rolled node: '@type': 'ImageObject' + an /api/og/ URL
//       literal, outside src/lib/imageObjectSchema.ts. Must route through
//       buildOgImageObject()/buildArticleImageObject().
//   1b. Wrapped hand-rolled node: '@type': 'ImageObject' + a /images/ URL
//       literal (file-backed), outside src/lib/imageObjectSchema.ts. Must
//       route through buildImageObject() — a hand-typed file path can point
//       at a real file today and still skip every licensing field
//       (contentUrl, license, creator, copyrightHolder) buildImageObject()
//       attaches automatically.
//   2.  Bare-string hand-rolled reference: `image: 'https://...api/og/...'`
//       with no '@type': 'ImageObject' wrapper at all — the shape that got
//       past check 1a entirely on the first pass. Same rule: must route
//       through buildOgImageObject(), and must carry ?lang=<lang> matching
//       its own language block (checked separately, see #4).
//   3.  buildOgImageObject(...) call arity — every call site must pass 2
//       arguments; lang is required, not optional. A 1-arg call silently
//       omits it and would emit `?lang=undefined`.
//   4.  Bare-string OG references (#2) missing a `?lang=` query param
//       entirely — these were never routed through the helper, so nothing
//       enforces the unconditional-?lang= convention on them.
//   5.  keyToSlug('...') / hardcoded OG_SLUG literals resolve to a real
//       value in that cluster's SLUG_TO_KEY map — catches a typo'd key
//       before it 404s in production.
//   6.  buildImageObject('...') calls with a statically-known string
//       literal path resolve to a file in public/images/ (or are an
//       already-absolute URL).
//
// ── What this file does NOT scan for (known gaps, not yet checked) ────────
//   - Template-literal or variable-built image URLs where the slug/lang
//     isn't a string literal in the call/assignment itself (e.g. built via
//     string concatenation elsewhere and passed in as a variable) — every
//     check above is a static-text pattern match, not a real parser, and
//     will not see through indirection.
//   - Non-string `image` values (arrays, nested objects other than the
//     '@type': 'ImageObject' shape) — schema.org permits ImageObject[] or
//     a plain URL; this file assumes exactly one image reference per node.
//   - Anything outside src/**/*.ts(x) — API routes' own inline responses,
//     content fetched from a CMS/database, or committed JSON are unscanned.
//   - The root-layout Organization.logo / SoftwareApplication.screenshot
//     nodes and any publisher.logo sub-node are deliberately excluded
//     (schema.org logo convention, not an article image) — not a gap, an
//     intentional exclusion, but worth stating so it isn't mistaken for one.
//
// Run: node scripts/validate-image-schema.mjs   (wired into npm "prebuild")

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const BLOCK_ON_VIOLATION = true

const CLUSTER_SLUGFILES = {
  'local-llms': 'src/lib/local-llms/slugs.ts',
  'prompt-engineering': 'src/lib/prompt-engineering/slugs.ts',
  'power-local-llm': 'src/lib/power-local-llm/slugs.ts',
  'prompt-bites': 'src/lib/prompt-bites/slugs.ts',
  'smart-home': 'src/lib/smart-home/slugs.ts',
  'balcony-solar': 'src/lib/balcony-solar/slugs.ts',
}

function readSlugToKeyMap(file) {
  const abs = path.join(ROOT, file)
  if (!fs.existsSync(abs)) return { slugToKey: new Map(), keys: new Set() }
  const src = fs.readFileSync(abs, 'utf8')
  const slugToKey = new Map()
  const keys = new Set()
  const re = /['"]([\w-]+)['"]\s*:\s*['"]([\w-]+)['"]/g
  let m
  while ((m = re.exec(src))) {
    slugToKey.set(m[2], m[1]) // key -> first/canonical slug
    keys.add(m[2])
  }
  return { slugToKey, keys }
}

const clusterData = {}
for (const [cluster, file] of Object.entries(CLUSTER_SLUGFILES)) {
  clusterData[cluster] = readSlugToKeyMap(file)
}

function clusterForFile(relPath) {
  for (const cluster of Object.keys(CLUSTER_SLUGFILES)) {
    if (relPath.includes(`/${cluster}/`)) return cluster
  }
  return null
}

function walk(dir, exts, skipDirs, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name) || entry.name.startsWith('.')) continue
      walk(abs, exts, skipDirs, out)
    } else if (exts.has(path.extname(entry.name))) {
      out.push(abs)
    }
  }
  return out
}

const files = walk(path.join(ROOT, 'src'), new Set(['.ts', '.tsx']), new Set(['node_modules']))

const violations = []

for (const abs of files) {
  const relPath = path.relative(ROOT, abs)
  const src = fs.readFileSync(abs, 'utf8')
  const lines = src.split('\n')

  // --- Check 1a/1b: hand-rolled wrapped ImageObject node, outside the helper file ---
  if (relPath !== 'src/lib/imageObjectSchema.ts') {
    lines.forEach((line, i) => {
      if (!line.includes("'@type': 'ImageObject'") && !line.includes('"@type": "ImageObject"')) return
      if (line.includes('logo.svg')) return // publisher/Organization logo — intentionally excluded, not an article image
      if (line.includes('/api/og/')) {
        violations.push({
          file: relPath, line: i + 1, code: 'HAND_ROLLED_OG_NODE',
          detail: 'literal ImageObject node with an /api/og/ URL — route through buildOgImageObject() instead',
        })
      } else if (line.includes('/images/')) {
        violations.push({
          file: relPath, line: i + 1, code: 'HAND_ROLLED_FILE_NODE',
          detail: 'literal ImageObject node with a /images/ URL — route through buildImageObject() instead (loses contentUrl/license/creator otherwise)',
        })
      }
    })
  }

  // --- Check 2: bare-string image: 'https://...api/og/...' with no ImageObject wrapper at all ---
  let m
  if (relPath !== 'src/lib/imageObjectSchema.ts') {
    const bareOgRe = /image:\s*'(https:\/\/www\.promptquorum\.com\/api\/og\/[^']*)'/g
    while ((m = bareOgRe.exec(src))) {
      const lineNo = src.slice(0, m.index).split('\n').length
      violations.push({
        file: relPath, line: lineNo, code: 'BARE_STRING_OG_NODE',
        detail: `bare-string image: '${m[1]}' — route through buildOgImageObject() instead of a raw URL string`,
      })
      // Check 4: same bare-string ref missing ?lang= entirely
      if (!m[1].includes('?lang=')) {
        violations.push({
          file: relPath, line: lineNo, code: 'BARE_STRING_MISSING_LANG',
          detail: `bare-string image: '${m[1]}' has no ?lang= param`,
        })
      }
    }
  }

  // --- Check 3: buildOgImageObject call arity ---
  const ogCallRe = /buildOgImageObject\(([^)]*)\)/g
  while ((m = ogCallRe.exec(src))) {
    const args = m[1].split(',').map((a) => a.trim()).filter(Boolean)
    if (args.length < 2) {
      const lineNo = src.slice(0, m.index).split('\n').length
      violations.push({
        file: relPath, line: lineNo, code: 'MISSING_LANG_ARG',
        detail: `buildOgImageObject(${m[1]}) called with ${args.length} arg(s) — lang is required`,
      })
    }
  }

  // --- Check 5: keyToSlug('X') / OG_SLUG resolves to a real key in this cluster ---
  const cluster = clusterForFile(relPath)
  if (cluster && clusterData[cluster]) {
    const { keys } = clusterData[cluster]
    const keyToSlugRe = /keyToSlug\(\s*['"]([\w-]+)['"]\s*\)/g
    while ((m = keyToSlugRe.exec(src))) {
      const key = m[1]
      if (!keys.has(key)) {
        const lineNo = src.slice(0, m.index).split('\n').length
        violations.push({
          file: relPath, line: lineNo, code: 'UNKNOWN_SLUG_KEY',
          detail: `keyToSlug('${key}') — '${key}' is not a value in ${CLUSTER_SLUGFILES[cluster]}`,
        })
      }
    }
  }

  // --- Check 6: buildImageObject('literal/path') resolves to a real file ---
  const imgCallRe = /buildImageObject\(\s*['"]([^'"]+)['"]/g
  while ((m = imgCallRe.exec(src))) {
    const imagePath = m[1]
    if (imagePath.startsWith('http')) continue
    const normalized = imagePath.startsWith('/') ? imagePath : `/images/${imagePath}`
    const abs2 = path.join(ROOT, 'public', normalized)
    if (!fs.existsSync(abs2)) {
      const lineNo = src.slice(0, m.index).split('\n').length
      violations.push({
        file: relPath, line: lineNo, code: 'MISSING_IMAGE_FILE',
        detail: `buildImageObject('${imagePath}') — no file at public${normalized}`,
      })
    }
  }
}

// ── Report ───────────────────────────────────────────────────────────────────
console.log('🖼️  Image-schema integrity check (Issue #65)')
console.log(`   files scanned: ${files.length}`)

if (violations.length === 0) {
  console.log('✅ No image-schema violations.')
  process.exit(0)
}

const byFile = {}
for (const v of violations) (byFile[v.file] ||= []).push(v)
console.log(`\n⚠️  ${violations.length} violation(s) across ${Object.keys(byFile).length} file(s):\n`)
for (const [file, items] of Object.entries(byFile)) {
  console.log(`  ${file}`)
  for (const it of items) {
    console.log(`    [${it.code}] L${it.line} — ${it.detail}`)
  }
}

if (BLOCK_ON_VIOLATION) {
  console.log('\n❌ Build blocked: image-schema violations above.')
  process.exit(1)
} else {
  console.log('\n⚠️  WARN mode (non-blocking).')
  process.exit(0)
}

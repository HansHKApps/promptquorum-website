#!/usr/bin/env node
// scripts/validate-image-schema.mjs
//
// Prebuild image-schema integrity validator (Issue #65).
// Guards the regression class that shipped 61 broken JSON-LD image URLs:
// hand-rolled '@type': 'ImageObject' nodes that hard-code a slug or drop
// ?lang=, instead of deriving through buildOgImageObject()/buildImageObject().
// A URL that returns 200 today is not sufficient — the 54-instance slug bug
// would have passed a 200-check on the day it was written, since the wrong
// slug happened not to exist as *any* route. This validator checks the
// construction, not just liveness.
//
// Checks, all BLOCK mode:
//   1. No hand-rolled '@type': 'ImageObject' node with an /api/og/ URL
//      literal outside src/lib/imageObjectSchema.ts — that pattern is
//      exactly what caused Issue #65. New OG-route images must go through
//      buildOgImageObject()/buildArticleImageObject().
//   2. Every buildOgImageObject(...) call site passes 2 arguments — lang is
//      required, not optional; a 1-arg call silently defaults to nothing
//      and would emit `?lang=undefined`.
//   3. Every keyToSlug('...') / hardcoded OG_SLUG literal used as the first
//      arg to buildOgImageObject resolves to a real value in that cluster's
//      SLUG_TO_KEY map — catches a typo'd key before it 404s in production.
//   4. Every buildImageObject('...') call with a statically-known string
//      literal path resolves to a file in public/images/ (or is an
//      already-absolute URL).
//
// Run: node scripts/validate-image-schema.mjs   (wired into npm "prebuild")

// NOT wired into prebuild yet — same reason as validate-registry-freshness.mjs.
// local-llms/articles/local-llm-vs-cloud-gpu-cost.ts still hand-rolls its
// image node (correct slug, correct ?lang=, not broken — just not migrated).
// local-llms was deliberately held out of this migration pass pending a
// separate follow-up. Wiring this into prebuild now would block every build
// on a known, intentional gap rather than a real defect. Wire it in once
// that file (and any other pre-existing hand-rolled node found later) is
// migrated — run `node scripts/validate-image-schema.mjs` manually until then.

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

  // --- Check 1: hand-rolled ImageObject + /api/og/ literal outside the helper file ---
  if (relPath !== 'src/lib/imageObjectSchema.ts') {
    lines.forEach((line, i) => {
      if (line.includes("'@type': 'ImageObject'") && line.includes('/api/og/') && !line.includes('logo.svg')) {
        violations.push({
          file: relPath, line: i + 1, code: 'HAND_ROLLED_OG_NODE',
          detail: 'literal ImageObject node with an /api/og/ URL — route through buildOgImageObject() instead',
        })
      }
    })
  }

  // --- Check 2: buildOgImageObject call arity ---
  const ogCallRe = /buildOgImageObject\(([^)]*)\)/g
  let m
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

  // --- Check 3: keyToSlug('X') / OG_SLUG resolves to a real key in this cluster ---
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

  // --- Check 4: buildImageObject('literal/path') resolves to a real file ---
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

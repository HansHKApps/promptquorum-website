#!/usr/bin/env node

/**
 * App version consistency validator.
 *
 * `src/lib/power-local-llm/apps/*.ts` holds one ToolRecord per tool, with an
 * optional `pqReview.version` field recording the app's current version
 * number. That field is the single source of truth — but nothing previously
 * checked that a tool's own FeatureAppPost review article actually states
 * the same version. This let the tile and the article body drift apart
 * silently (see the feature-app-post skill's "Version accuracy" section for
 * the real incident that prompted this).
 *
 * For every tile with `pqReview.version` set, this locates that tool's
 * review article (via `reviewSlug`) and fails the build unless the EN
 * content block contains that exact version string. Tiles without
 * `pqReview.version` are skipped entirely — this validator does not require
 * every tool to have a version yet (that's a content backfill, not a build
 * gate).
 *
 * Usage:
 *   node scripts/validate-app-versions.mjs [--warn-only]
 *
 * --warn-only   Report violations, always exit 0. For discovery runs.
 * (no flag)     Fail (exit 1) on any violation.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const APPS_DIR = path.join(ROOT, 'src', 'lib', 'power-local-llm', 'apps')
// Directories known to hold *-review.ts (or equivalent) FeatureAppPost
// articles, keyed by reviewSlug. A tool's review can live in either cluster
// (e.g. Cherry Studio's lives under local-llms despite serving under
// /power-local-llm/ via reviewSlug) — search both.
const ARTICLE_DIRS = [
  path.join(ROOT, 'src', 'lib', 'power-local-llm', 'articles'),
  path.join(ROOT, 'src', 'lib', 'local-llms', 'articles'),
]

const args = process.argv.slice(2)
const warnOnly = args.includes('--warn-only')

function findAppFiles() {
  if (!fs.existsSync(APPS_DIR)) return []
  return fs
    .readdirSync(APPS_DIR)
    .filter((f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'categories.ts')
    .map((f) => path.join(APPS_DIR, f))
    .sort()
}

// Matches `field: '...'` preceded by a newline, comma, or `{` — so it finds
// the field whether the enclosing object is written one-per-line or all on
// one line (both styles appear across src/lib/power-local-llm/apps/*.ts).
function extractField(content, field) {
  const m = content.match(new RegExp(`[,{\\n]\\s*${field}:\\s*'([^']*)'`))
  return m ? m[1] : undefined
}

// Extracts the substring inside a `key: { ... }` block by counting brace
// depth from the key's opening `{` to its matching `}` — handles both the
// single-line style most tiles use (`pqReview: { date: '...', version: '...' }`)
// and a multi-line block with nested objects (hw/text/scores), which a fixed
// regex can't do reliably in both shapes.
function extractBalancedBlock(content, key) {
  const keyIdx = content.indexOf(`${key}:`)
  if (keyIdx === -1) return undefined
  const openIdx = content.indexOf('{', keyIdx)
  if (openIdx === -1) return undefined
  let depth = 0
  for (let i = openIdx; i < content.length; i++) {
    if (content[i] === '{') depth++
    else if (content[i] === '}') {
      depth--
      if (depth === 0) return content.slice(openIdx + 1, i)
    }
  }
  return undefined
}

// Extracts the pqReview: { ... } block's own version field, scoped to avoid
// accidentally matching an unrelated top-level `version` key.
function extractPqReviewVersion(content) {
  const block = extractBalancedBlock(content, 'pqReview')
  if (block === undefined) return undefined
  return extractField(`\n${block}`, 'version')
}

function findArticleFile(reviewSlug) {
  for (const dir of ARTICLE_DIRS) {
    const candidate = path.join(dir, `${reviewSlug}.ts`)
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

// Scopes the check to the EN locale block so a version string that only
// appears in a non-English translation doesn't count.
function extractEnBlock(content) {
  const start = content.search(/\n\s{2,6}en:\s*\{/)
  if (start === -1) return content // fall back to whole file if shape is unexpected
  const rest = content.slice(start)
  const nextLocale = rest.slice(1).search(/\n\s{2,6}(de|fr|ja|zh|es|pt|ar|ko):\s*\{/)
  return nextLocale === -1 ? rest : rest.slice(0, nextLocale + 1)
}

function main() {
  const files = findAppFiles()
  if (files.length === 0) {
    console.error(`FAILED: zero app files found under ${path.relative(ROOT, APPS_DIR)}`)
    process.exit(1)
  }

  const violations = []
  let checkedCount = 0

  for (const absPath of files) {
    const file = path.relative(ROOT, absPath)
    const content = fs.readFileSync(absPath, 'utf-8')
    const slug = extractField(content, 'slug') ?? '(unknown slug)'
    const version = extractPqReviewVersion(content)
    if (!version) continue // no version claimed yet — not this validator's concern

    const reviewSlugMatch = content.match(/\n\s*reviewSlug:\s*'([^']*)'/)
    const reviewSlug = reviewSlugMatch ? reviewSlugMatch[1] : undefined
    checkedCount++

    if (!reviewSlug) {
      violations.push({ file, slug, code: 'MISSING_REVIEW_SLUG', version })
      continue
    }

    const articleFile = findArticleFile(reviewSlug)
    if (!articleFile) {
      violations.push({ file, slug, code: 'ARTICLE_NOT_FOUND', version, reviewSlug })
      continue
    }

    const articleContent = fs.readFileSync(articleFile, 'utf-8')
    const enBlock = extractEnBlock(articleContent)
    if (!enBlock.includes(version)) {
      violations.push({
        file,
        slug,
        code: 'VERSION_NOT_IN_ARTICLE',
        version,
        articleFile: path.relative(ROOT, articleFile),
      })
    }
  }

  console.log(`Tiles scanned: ${files.length}`)
  console.log(`Tiles with pqReview.version set: ${checkedCount}`)
  console.log(`Violations: ${violations.length}`)

  if (violations.length > 0) {
    console.log('')
    for (const v of violations) {
      if (v.code === 'MISSING_REVIEW_SLUG') {
        console.log(`  [MISSING_REVIEW_SLUG] ${v.file} (${v.slug}): pqReview.version='${v.version}' set but no reviewSlug to check against`)
      } else if (v.code === 'ARTICLE_NOT_FOUND') {
        console.log(`  [ARTICLE_NOT_FOUND] ${v.file} (${v.slug}): reviewSlug='${v.reviewSlug}' has no matching article file`)
      } else {
        console.log(`  [VERSION_NOT_IN_ARTICLE] ${v.file} (${v.slug}): tile version '${v.version}' not found in ${v.articleFile}'s EN content`)
      }
    }
  }

  if (warnOnly) {
    console.log('\n--warn-only: not failing the build.')
    process.exit(0)
  }

  if (violations.length > 0) {
    console.error(`\nFAILED: ${violations.length} app-version violation(s). See feature-app-post skill, check 4.`)
    process.exit(1)
  }

  console.log('\nOK: no app-version violations.')
  process.exit(0)
}

main()

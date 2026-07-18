#!/usr/bin/env node
// Build-gating validator: fails when a locale block names a model that is
// either (a) not in data/model-registry.json at all (UNKNOWN_MODEL — typo or
// hallucinated name), or (b) present but marked superseded/deprecated/retired
// (STALE_MODEL). Extends diff-model-registry.mjs (a report-only tool) with
// real pass/fail semantics and a debt baseline ratchet.
//
// Usage:
//   node scripts/validate-model-names.mjs [--paths a,b,c] [--warn-only] [--write-baseline]
//
// --warn-only      Report violations, always exit 0. For discovery runs.
// --write-baseline Freeze current violations into .model-names-baseline.json
//                   and exit 0. Baselined violations are suppressed on future
//                   runs (existing debt is not re-blocked); anything new fails.
// (no flag)        Fail (exit 1) on any violation not present in the baseline.
//                   Also fails if zero files were scanned — a validator that
//                   passes vacuously because --paths pointed nowhere is worse
//                   than no validator.

import fs from 'fs'
import {
  loadRegistry,
  buildRegistryIndex,
  findRegistryMatch,
  discoverArticleFiles,
  extractModelMentionsByLocale,
  loadBaseline,
  baselineKey,
  BASELINE_PATH,
} from './lib/registry.mjs'

const args = process.argv.slice(2)
const warnOnly = args.includes('--warn-only')
const writeBaseline = args.includes('--write-baseline')
const pathsArg = args.find((a) => a.startsWith('--paths='))
const paths = pathsArg ? pathsArg.slice('--paths='.length).split(',').filter(Boolean) : ['src/lib']

const registry = loadRegistry()
const registryByName = buildRegistryIndex(registry)

const files = discoverArticleFiles(paths)

if (files.length === 0) {
  console.error(`FAILED: zero files scanned under path(s): ${paths.join(', ')}`)
  console.error('Refusing to pass vacuously. Check --paths.')
  process.exit(1)
}

const violations = []
const perLocaleCounts = Object.fromEntries(
  ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'].map((l) => [l, 0])
)

for (const file of files) {
  const byLocale = extractModelMentionsByLocale(file)
  for (const [locale, models] of Object.entries(byLocale)) {
    for (const siteModel of models) {
      const match = findRegistryMatch(registry, registryByName, siteModel)
      if (!match) {
        violations.push({ file, locale, siteModel, code: 'UNKNOWN_MODEL' })
        perLocaleCounts[locale] = (perLocaleCounts[locale] ?? 0) + 1
        continue
      }
      if (['superseded', 'deprecated', 'retired'].includes(match.status)) {
        violations.push({
          file,
          locale,
          siteModel,
          code: 'STALE_MODEL',
          registryModel: match.model,
          status: match.status,
          supersededBy: match.superseded_by,
        })
        perLocaleCounts[locale] = (perLocaleCounts[locale] ?? 0) + 1
      }
    }
  }
}

console.log(`Files scanned: ${files.length}`)
console.log(`Total violations: ${violations.length}`)
console.log('Per-locale breakdown:')
for (const [locale, count] of Object.entries(perLocaleCounts)) {
  console.log(`  ${locale}: ${count}`)
}

if (writeBaseline) {
  const baseline = { generated: violations.map((v) => baselineKey(v)).sort(), count: violations.length }
  fs.writeFileSync(BASELINE_PATH, JSON.stringify(baseline, null, 2) + '\n')
  console.log(`Wrote ${BASELINE_PATH} (${violations.length} baselined violations frozen as existing debt)`)
  process.exit(0)
}

const baseline = loadBaseline()
const baselineSet = new Set(baseline.generated ?? [])
const newViolations = violations.filter((v) => !baselineSet.has(baselineKey(v)))

if (newViolations.length > 0) {
  console.log('')
  console.log(`New (non-baselined) violations: ${newViolations.length}`)
  for (const v of newViolations.slice(0, 50)) {
    if (v.code === 'UNKNOWN_MODEL') {
      console.log(`  [UNKNOWN_MODEL] ${v.file} (${v.locale}): "${v.siteModel}" is not in the registry`)
    } else {
      console.log(
        `  [STALE_MODEL] ${v.file} (${v.locale}): "${v.siteModel}" -> registry status=${v.status}, superseded_by=${v.supersededBy}`
      )
    }
  }
  if (newViolations.length > 50) console.log(`  ...and ${newViolations.length - 50} more`)
}

if (warnOnly) {
  console.log('\n--warn-only: not failing the build.')
  process.exit(0)
}

if (newViolations.length > 0) {
  console.error(`\nFAILED: ${newViolations.length} new model-name violation(s). Run with --write-baseline only if these are pre-existing debt you are intentionally deferring, not new content.`)
  process.exit(1)
}

console.log('\nOK: no new model-name violations.')
process.exit(0)

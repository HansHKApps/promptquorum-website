#!/usr/bin/env node
// Validates data/model-registry.json is internally consistent and not stale,
// and that public/llms.txt (the machine-readable product description AI
// crawlers read) has been reviewed within the same cadence — llms.txt names
// specific model versions (see "Supported AI Models"), so it goes stale on
// the same clock as the registry.
// Distinct from validate-model-names.mjs, which checks SITE CONTENT against
// the registry; this checks the REGISTRY ITSELF. Not wired into prebuild yet
// (see docs/MODEL_REGISTRY_REFRESH.md) — the seed registry has known gaps
// this deliberately fails on until a refresh cycle closes them.
//
// Usage: node scripts/validate-registry-freshness.mjs

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import { loadRegistry } from './lib/registry.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const MAX_REGISTRY_AGE_DAYS = 45 // matches the monthly refresh cadence in MODEL_REGISTRY_REFRESH.md
const MAX_ENTRY_AGE_DAYS = 90

function daysSince(dateStr) {
  const d = new Date(dateStr)
  const now = new Date()
  return Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))
}

const registry = loadRegistry()
const errors = []
const warnings = []

// 1. Registry-level staleness
if (!registry.last_updated) {
  errors.push({ code: 'REGISTRY_STALE', detail: 'root last_updated is missing' })
} else {
  const age = daysSince(registry.last_updated)
  if (age > MAX_REGISTRY_AGE_DAYS) {
    errors.push({ code: 'REGISTRY_STALE', detail: `last_updated is ${age} days old (max ${MAX_REGISTRY_AGE_DAYS})` })
  }
}

// 2. Per-entry staleness (warning only — a single old entry shouldn't block
// the whole build the way a dangling reference should)
for (const m of registry.models) {
  if (!m.verified_date) {
    warnings.push({ code: 'ENTRY_UNVERIFIED', model: m.model })
    continue
  }
  const age = daysSince(m.verified_date)
  if (age > MAX_ENTRY_AGE_DAYS) {
    warnings.push({ code: 'ENTRY_STALE', model: m.model, ageDays: age })
  }
}

// 3. Dangling lineage — superseded_by pointing at a model with no entry of its own.
const names = new Set(registry.models.map((m) => m.model))
for (const m of registry.models) {
  if (m.superseded_by && !names.has(m.superseded_by)) {
    errors.push({ code: 'LINEAGE_DANGLING', model: m.model, supersededBy: m.superseded_by })
  }
}

// 4. Reserved v2 schema sections: if present, they must not ship half-filled.
// A NEEDS_RETRIEVAL tier or a CONTESTED claim with zero recorded positions
// blocks rendering — see docs/MODEL_REGISTRY_REFRESH.md v2 addendum. An empty
// section name is fine (means "not started yet, no page renders from it").
if (registry.recommendations) {
  for (const [tier, entry] of Object.entries(registry.recommendations)) {
    if (entry?.status === 'NEEDS_RETRIEVAL' && (!entry.sources || entry.sources.length === 0)) {
      warnings.push({ code: 'TIER_NEEDS_RETRIEVAL', tier })
    } else if (entry?.status === 'RESOLVED' && (!entry.sources || entry.sources.length < 2)) {
      errors.push({ code: 'TIER_UNDERSOURCED', tier, detail: 'RESOLVED tier requires >= 2 sources' })
    }
  }
}
if (registry.best_overall_open_weight) {
  const b = registry.best_overall_open_weight
  if (b.status === 'RESOLVED' && (!b.positions || b.positions.length === 0)) {
    errors.push({ code: 'CONTESTED_CLAIM_UNDERSOURCED', detail: 'best_overall_open_weight is RESOLVED with no recorded positions' })
  }
}

// 5. ecosystem_notes must each carry a source_id and retrieved_at.
for (const note of registry.ecosystem_notes ?? []) {
  if (!note.source_id) errors.push({ code: 'ECOSYSTEM_NOTE_UNSOURCED', id: note.id })
  if (!note.retrieved_at) errors.push({ code: 'ECOSYSTEM_NOTE_UNDATED', id: note.id })
}

// 6. llms.txt freshness — it names specific model versions and a beta status,
// so it rots on the same clock as the registry (see Issue: llms.txt found
// stating a launch date and a "waitlist" homepage description that had both
// gone stale months apart from each other).
const llmsTxtPath = path.join(__dirname, '..', 'public', 'llms.txt')
const llmsTxt = readFileSync(llmsTxtPath, 'utf8')
const lastUpdatedMatch = llmsTxt.match(/Last updated:\s*(\d{4}-\d{2}-\d{2})/)
if (!lastUpdatedMatch) {
  errors.push({ code: 'LLMS_TXT_STALE', detail: 'no "Last updated: YYYY-MM-DD" line found in public/llms.txt' })
} else {
  const age = daysSince(lastUpdatedMatch[1])
  if (age > MAX_REGISTRY_AGE_DAYS) {
    errors.push({ code: 'LLMS_TXT_STALE', detail: `public/llms.txt last updated ${age} days ago (max ${MAX_REGISTRY_AGE_DAYS}) — re-verify model list, beta status, and page descriptions against the live site` })
  }
}

console.log(`Registry entries: ${registry.models.length}`)
console.log(`Errors: ${errors.length}, Warnings: ${warnings.length}`)

if (warnings.length > 0) {
  console.log('\nWarnings:')
  for (const w of warnings) console.log(`  [${w.code}]`, JSON.stringify(w))
}

if (errors.length > 0) {
  console.log('\nErrors:')
  for (const e of errors) console.log(`  [${e.code}]`, JSON.stringify(e))
  console.error(`\nFAILED: ${errors.length} registry-freshness error(s).`)
  process.exit(1)
}

console.log('\nOK: registry is internally consistent and current.')
process.exit(0)

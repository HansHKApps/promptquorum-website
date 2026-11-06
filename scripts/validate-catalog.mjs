#!/usr/bin/env node
// Validates data/local-llm-catalog.json (and its inputs) so the file can never
// silently drift from the registry, the curation list, or its own rules.
//
// Usage:
//   node scripts/validate-catalog.mjs                 # structural checks; staleness is a warning
//   node scripts/validate-catalog.mjs --strict-age    # staleness FAILS (used by the weekly workflow)
//   node scripts/validate-catalog.mjs --warn-only     # report everything, always exit 0 (prebuild)
//
// Staleness thresholds (catalog.last_updated): warn > 8 days, fail > 30 days
// (fail only with --strict-age, so a late refresh never blocks a deploy).

import fs from 'fs'
import { loadRegistry, buildRegistryIndex } from './lib/registry.mjs'
import { tierFor } from './lib/catalog-tier.mjs'

const strictAge = process.argv.includes('--strict-age')
const warnOnly = process.argv.includes('--warn-only')
const WARN_DAYS = 8
const FAIL_DAYS = 30
const GIB = 2 ** 30

const errors = []
const warnings = []
const err = (id, msg) => errors.push(`${id}: ${msg}`)

const catalog = JSON.parse(fs.readFileSync('data/local-llm-catalog.json', 'utf8'))
const candidates = JSON.parse(fs.readFileSync('data/catalog-candidates.json', 'utf8')).candidates
const hardware = JSON.parse(fs.readFileSync('data/hardware-profiles.json', 'utf8'))
const registry = loadRegistry()
const registryByName = buildRegistryIndex(registry)

const isDate = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s))
const isUrl = (s) => typeof s === 'string' && /^https:\/\//.test(s)
const daysSince = (s) => (Date.now() - Date.parse(s)) / 86400000

// ---- file level ----------------------------------------------------------
if (catalog.schema_version !== 1) err('catalog', `unsupported schema_version ${catalog.schema_version}`)
if (!isDate(catalog.last_updated)) err('catalog', 'last_updated missing or not YYYY-MM-DD')
else {
  const age = daysSince(catalog.last_updated)
  if (age > FAIL_DAYS) (strictAge ? err : (id, m) => warnings.push(`${id}: ${m}`))('catalog', `last_updated ${catalog.last_updated} is ${Math.floor(age)} days old (limit ${FAIL_DAYS})`)
  else if (age > WARN_DAYS) warnings.push(`catalog: last_updated ${catalog.last_updated} is ${Math.floor(age)} days old (weekly refresh expected, warn > ${WARN_DAYS})`)
}

// ---- hardware profiles ---------------------------------------------------
const hwIds = new Set()
for (const p of hardware.profiles) {
  if (hwIds.has(p.id)) err('hardware', `duplicate profile id ${p.id}`)
  hwIds.add(p.id)
  if (!(p.total_gb > 0)) err(`hardware:${p.id}`, 'total_gb must be > 0')
  if (p.kind === 'mac-unified' && 'reserve_gb' in p) err(`hardware:${p.id}`, 'Mac reserve must come from macUsableGb() in src/lib/vram.ts, not the JSON')
  if (p.kind !== 'mac-unified' && !(p.reserve_gb >= 0 && p.reserve_basis)) err(`hardware:${p.id}`, 'non-Mac profile needs reserve_gb and reserve_basis')
}

// ---- models --------------------------------------------------------------
const ids = new Set()
for (const m of catalog.models) {
  const id = m.id ?? '(no id)'
  if (ids.has(id)) err(id, 'duplicate id')
  ids.add(id)

  for (const f of ['registry_model', 'family', 'company', 'variant', 'license', 'tier', 'verified_date', 'source_url']) {
    if (!m[f]) err(id, `missing ${f}`)
  }
  if (!isDate(m.verified_date)) err(id, 'verified_date not YYYY-MM-DD')
  else if (daysSince(m.verified_date) > FAIL_DAYS && strictAge) err(id, `verified_date ${m.verified_date} older than ${FAIL_DAYS} days`)
  if (!isUrl(m.source_url)) err(id, 'source_url must be https')
  if (!(m.params_b > 0)) err(id, 'params_b must be > 0')
  if (m.active_params_b != null) {
    if (!(m.active_params_b > 0 && m.active_params_b <= m.params_b)) err(id, 'active_params_b must be > 0 and <= params_b')
    if (!isUrl(m.active_params_source)) err(id, 'active_params_b needs an https active_params_source')
  }
  if (!(m.context_max > 0)) err(id, 'context_max must be > 0')

  // registry link: must exist and be current
  const reg = registryByName[m.registry_model?.toLowerCase().replace(/\s+/g, ' ')] ?? registry.models.find((r) => r.model === m.registry_model)
  if (!reg) err(id, `registry_model '${m.registry_model}' not in data/model-registry.json`)
  else if (reg.status !== 'current') err(id, `registry_model '${m.registry_model}' is ${reg.status}, not current (superseded_by: ${reg.superseded_by})`)

  // capabilities
  const caps = m.capabilities ?? {}
  for (const k of ['vision', 'tools', 'reasoning', 'coding', 'embedding']) {
    if (typeof caps[k] !== 'boolean') err(id, `capabilities.${k} must be boolean`)
  }
  if (!['chat-template', 'ollama-family-badges'].includes(m.capabilities_basis)) err(id, 'capabilities_basis missing/invalid')

  // runtimes
  if (!/^[a-z0-9._-]+:[a-z0-9._-]+$/i.test(m.runtimes?.ollama ?? '')) err(id, 'runtimes.ollama must look like family:tag')

  // quants
  if (!Array.isArray(m.quants) || m.quants.length === 0) err(id, 'needs at least one quant')
  else {
    if (m.quants.filter((q) => q.default).length !== 1) err(id, 'exactly one quant must be default')
    for (const q of m.quants) {
      if (!q.name) err(id, 'quant missing name')
      if (!(q.size_bytes > 0)) err(id, `quant ${q.name}: size_bytes must be > 0`)
      if (!(q.projector_bytes >= 0)) err(id, `quant ${q.name}: projector_bytes must be >= 0`)
      if (!isUrl(q.source_url)) err(id, `quant ${q.name}: source_url must be https`)
      if (!isDate(q.verified_date)) err(id, `quant ${q.name}: verified_date invalid`)
    }
    const d = m.quants.find((q) => q.default)
    if (d && m.tier !== tierFor(d.size_bytes / GIB)) err(id, `tier '${m.tier}' does not match size (${(d.size_bytes / GIB).toFixed(1)} GiB -> '${tierFor(d.size_bytes / GIB)}')`)
    if (d && caps.vision && !(d.projector_bytes > 0) && m.capabilities_basis) {
      // vision without a projector is legal (natively multimodal GGUF); informational only
    }
  }

  // KV architecture: required for anything that generates text
  if (caps.embedding) {
    if (m.kv != null) err(id, 'embedding models should have kv: null')
  } else if (!m.kv) err(id, 'kv architecture missing (GGUF header could not be read)')
  else {
    const { layers_total, groups, exactness, exactness_note } = m.kv
    if (!(layers_total > 0)) err(id, 'kv.layers_total must be > 0')
    if (!['modeled', 'upper-bound'].includes(exactness)) err(id, 'kv.exactness must be modeled|upper-bound')
    if (!exactness_note) err(id, 'kv.exactness_note missing')
    if (!Array.isArray(groups) || groups.length === 0) err(id, 'kv.groups must be a non-empty array')
    else {
      let layerSum = 0
      for (const g of groups) {
        if (!(g.layers > 0 && g.kv_heads > 0 && g.key_length > 0 && g.value_length > 0)) err(id, 'kv group needs positive layers/kv_heads/key_length/value_length')
        if (g.window_tokens != null && !(g.window_tokens > 0)) err(id, 'kv group window_tokens must be null or > 0')
        layerSum += g.layers
      }
      // Hybrid models legitimately cache KV on fewer layers than the total, never more.
      if (layerSum > layers_total) err(id, `kv groups cover ${layerSum} layers, more than layers_total ${layers_total}`)
    }
  }

  if (!m.best_for?.length) err(id, 'best_for must not be empty')
}

// ---- catalog <-> curation list stay in lockstep -------------------------
const candIds = new Set(candidates.map((c) => c.id))
for (const id of candIds) if (!ids.has(id)) err(id, 'in data/catalog-candidates.json but missing from the catalog (run scripts/catalog-build.mjs --write)')
for (const id of ids) if (!candIds.has(id)) err(id, 'in the catalog but not in data/catalog-candidates.json (hand-edited? rebuild instead)')

// ---- report --------------------------------------------------------------
console.log(`catalog: ${catalog.models.length} models, ${hardware.profiles.length} hardware profiles, last_updated ${catalog.last_updated}`)
for (const w of warnings) console.warn(`WARN  ${w}`)
if (errors.length) {
  // --warn-only: report violations but never fail (prebuild uses this so a catalog problem
  // can never block an unrelated production deploy; the weekly workflow runs it strict).
  for (const e of errors) (warnOnly ? console.warn : console.error)(`${warnOnly ? 'WARN ' : 'ERROR'} ${e}`)
  console.error(`\n${errors.length} ${warnOnly ? 'violation(s) (warn-only)' : 'error(s).'}`)
  if (!warnOnly) process.exit(1)
} else {
  console.log('validate-catalog: OK')
}

#!/usr/bin/env node
// Builds data/local-llm-catalog.json from the curated list in
// data/catalog-candidates.json plus live primary sources (Ollama registry
// manifest + GGUF header + license layer, Ollama library pages).
//
// Nothing in the output is typed by hand or recalled from memory except the
// curation inputs (which models, registry mapping, best_for, the two
// active-parameter overrides that carry their own source URL).
//
// Usage:
//   node scripts/catalog-build.mjs                  # dry run: print summary table, write nothing
//   node scripts/catalog-build.mjs --write          # write data/local-llm-catalog.json
//   node scripts/catalog-build.mjs --out <path>     # write somewhere else (used by catalog-detect.mjs)
//
// Exit 1 (and writes nothing) if any candidate fails to resolve, so a partial
// catalog can never replace a good one.

import fs from 'fs'
import {
  fetchOllamaPopular,
  fetchOllamaTags,
  fetchOllamaManifest,
  fetchOllamaModelDigest,
  fetchOllamaGgufArch,
  fetchOllamaLicense,
  fetchOllamaTemplateCaps,
  buildKvGroups,
} from './lib/catalog-sources.mjs'
import { tierFor } from './lib/catalog-tier.mjs'

const CANDIDATES_PATH = 'data/catalog-candidates.json'
const CATALOG_PATH = 'data/local-llm-catalog.json'

const args = process.argv.slice(2)
const write = args.includes('--write')
const outIdx = args.indexOf('--out')
const outPath = outIdx >= 0 ? args[outIdx + 1] : write ? CATALOG_PATH : null
const today = new Date().toISOString().slice(0, 10)

const candidates = JSON.parse(fs.readFileSync(CANDIDATES_PATH, 'utf8')).candidates
const popular = await fetchOllamaPopular()
const popularByFamily = new Map(popular.map((p) => [p.family, p]))
const tagsCache = new Map()
async function tagsFor(family) {
  if (!tagsCache.has(family)) tagsCache.set(family, await fetchOllamaTags(family))
  return tagsCache.get(family)
}

async function build(c) {
  const pop = popularByFamily.get(c.family)
  if (!pop) throw new Error(`family '${c.family}' not in Ollama popularity list`)

  const manifest = await fetchOllamaManifest(c.family, c.tag)
  if (c.same_as_tag) {
    const other = await fetchOllamaManifest(c.family, c.same_as_tag)
    if (other.digest !== manifest.digest) {
      throw new Error(`${c.family}:${c.tag} is not the same build as ${c.same_as_tag} (config digests differ)`)
    }
  }

  const digest = await fetchOllamaModelDigest(c.family, c.tag)
  const arch = await fetchOllamaGgufArch(c.family, digest)
  if (!arch.arch || !arch.layers || arch.contextLength == null) {
    throw new Error(`GGUF header for ${c.family}:${c.tag} lacks arch/layers/context (truncated=${arch.truncated})`)
  }
  // License: Ollama license layer when recognised; otherwise an explicit override that carries its own source URL.
  let license
  if (c.license_override) {
    if (!c.license_source) throw new Error(`${c.id}: license_override needs license_source`)
    license = c.license_override
  } else {
    const lic = await fetchOllamaLicense(c.family, c.tag)
    if (!lic.id) throw new Error(`license for ${c.family}:${c.tag} not recognised; excerpt: ${lic.excerpt}`)
    license = lic.id
  }

  const tagRow = (await tagsFor(c.family)).find((t) => t.tag === c.tag)
  if (!tagRow) throw new Error(`tag '${c.tag}' not on ${c.family} tags page`)
  // Vision = a projector layer ships with the tag, or Ollama lists Image input for it.
  const vision = manifest.projectorBytes > 0 || /image/i.test(tagRow.input ?? '')

  // Tools / thinking. Ollama publishes these as FAMILY-level badges on the library page.
  // Where the tag ships a real chat template, the template is what Ollama executes, so it
  // wins (per-tag precision). Renderer-based models (config has `renderer`) carry no template
  // to inspect, so the family badge is the only primary-source signal.
  const badgeTools = pop.capabilities.includes('tools')
  const badgeThinking = pop.capabilities.includes('thinking')
  const tcaps = await fetchOllamaTemplateCaps(c.family, c.tag)
  const useTemplate = tcaps.hasTemplate && !manifest.renderer
  const tools = useTemplate ? tcaps.tools : badgeTools
  const thinking = useTemplate ? tcaps.thinking : badgeThinking
  const capabilitiesBasis = useTemplate ? 'chat-template' : 'ollama-family-badges'
  if (useTemplate && (tools !== badgeTools || thinking !== badgeThinking)) {
    warnings.push(
      `${c.id}: template says tools=${tools} thinking=${thinking}, family badges say tools=${badgeTools} thinking=${badgeThinking} (template used)`,
    )
  }

  // Active parameters: explicit override (with source) > tag marker (-a3b) > dense (no experts).
  let activeB = null
  let activeSource = null
  if (c.active_params_b != null) {
    activeB = c.active_params_b
    activeSource = c.active_params_source
    if (!activeSource) throw new Error(`${c.id}: active_params_b override needs active_params_source`)
  } else {
    const marker = /(?:^|[-:])a(\d+(?:\.\d+)?)b(?:$|-)/i.exec(c.same_as_tag ?? c.tag)
    if (marker) {
      activeB = parseFloat(marker[1])
      activeSource = `https://ollama.com/library/${c.family}:${c.same_as_tag ?? c.tag}`
    } else if (arch.expertCount) {
      throw new Error(`${c.id}: MoE (${arch.expertCount} experts) but no active-params marker or override`)
    }
  }

  const embedding = pop.capabilities.includes('embedding')
  const gib = manifest.gib
  let kv = null
  if (!embedding) {
    if (arch.kvHeads == null || arch.keyLength == null) throw new Error(`${c.id}: GGUF header lacks kv heads / key length`)
    const { groups, exactness, exactness_note } = buildKvGroups(arch)
    if (!groups.length) throw new Error(`${c.id}: no KV layer groups derived`)
    kv = {
      arch: arch.arch,
      layers_total: arch.layers,
      groups,
      exactness,
      exactness_note,
      expert_count: arch.expertCount,
      expert_used_count: arch.expertUsedCount,
      basis: 'gguf-header',
      source_url: `https://ollama.com/library/${c.family}:${c.tag}`,
    }
  }

  return {
    id: c.id,
    registry_model: c.registry_model,
    family: c.family,
    company: c.company,
    variant: c.variant,
    params_b: manifest.paramsB,
    active_params_b: activeB,
    active_params_source: activeSource,
    context_max: arch.contextLength,
    license,
    license_source: c.license_override ? c.license_source : `https://ollama.com/library/${c.family}:${c.tag}`,
    capabilities: {
      vision,
      tools,
      reasoning: thinking,
      coding: c.coding === true,
      embedding,
    },
    capabilities_basis: capabilitiesBasis,
    runtimes: { ollama: `${c.family}:${c.tag}` },
    quants: [
      {
        name: manifest.quant,
        ollama_tag: c.tag,
        default: true,
        size_bytes: manifest.bytes,
        projector_bytes: manifest.projectorBytes,
        source_url: manifest.url,
        verified_date: today,
      },
    ],
    kv,
    tier: tierFor(gib),
    best_for: c.best_for,
    rank: {
      ollama_popularity_rank: pop.rank,
      ranked_on: today,
      basis: 'position in ollama.com/library?sort=popular',
    },
    verified_date: today,
    source_url: manifest.url,
  }
}

const models = []
const errors = []
const warnings = []
const CONCURRENCY = 4
let next = 0
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (next < candidates.length) {
      const i = next++
      const c = candidates[i]
      try {
        models[i] = await build(c)
      } catch (e) {
        errors.push(`${c.id}: ${e.message}`)
      }
    }
  }),
)

const GIB = 2 ** 30
console.log(`\n${'id'.padEnd(24)} ${'quant'.padEnd(8)} ${'GiB'.padStart(6)} ${'params'.padStart(7)} ${'active'.padStart(6)} ${'ctx'.padStart(7)} tier   caps`)
for (const m of models.filter(Boolean)) {
  const caps = Object.entries(m.capabilities).filter(([, v]) => v).map(([k]) => k).join(',')
  console.log(
    `${m.id.padEnd(24)} ${String(m.quants[0].name).padEnd(8)} ${(m.quants[0].size_bytes / GIB).toFixed(1).padStart(6)} ${String(m.params_b).padStart(7)} ${String(m.active_params_b ?? '-').padStart(6)} ${String(m.context_max).padStart(7)} ${m.tier.padEnd(6)} ${caps}`,
  )
}

if (warnings.length) {
  console.log(`\n${warnings.length} capability cross-check difference(s):`)
  for (const w of warnings) console.log(`  ~ ${w}`)
}

if (errors.length) {
  console.error(`\n${errors.length} candidate(s) failed - nothing written:`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}

const catalog = {
  schema_version: 1,
  last_updated: today,
  generated_by: 'scripts/catalog-build.mjs from data/catalog-candidates.json',
  size_note: 'size_bytes is the exact byte size of the weights Ollama downloads (plus vision projector where present). Compare to memory in GiB (bytes / 2^30), not to Ollama\'s decimal "GB" label.',
  kv_note: 'kv.groups comes from the GGUF header of the served file (per-layer KV heads, sliding-window pattern, full-attention interval). kv.exactness is "modeled" when the header fully describes the layers and "upper-bound" when it does not (full attention is then assumed, so the KV estimate is conservative).',
  models,
}

if (outPath) {
  fs.writeFileSync(outPath, JSON.stringify(catalog, null, 2) + '\n')
  console.log(`\nWrote ${models.length} models to ${outPath}`)
} else {
  console.log(`\nDry run: ${models.length} models resolved. Re-run with --write to save.`)
}

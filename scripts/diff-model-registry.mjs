#!/usr/bin/env node
// Model Registry Refresh — Step 3 diff. Cross-references
// data/model-to-files.json (site content, from extract-model-mentions.mjs)
// against data/model-registry.json (Step 1/2 verified lab data) and flags
// any site model mention tied to a superseded/deprecated/retired registry
// entry. See docs/MODEL_REGISTRY_REFRESH.md.
//
// Run: node scripts/extract-model-mentions.mjs && node scripts/diff-model-registry.mjs
// Output: data/registry-diff-flags.json

import fs from 'fs'

const registry = JSON.parse(fs.readFileSync('data/model-registry.json', 'utf8'))
const modelToFiles = JSON.parse(fs.readFileSync('data/model-to-files.json', 'utf8'))

const registryByName = {}
for (const m of registry.models) {
  registryByName[m.model.toLowerCase()] = m
}

function normalize(s) {
  return s.toLowerCase().replace(/\s+/g, ' ').trim()
}

// Site strings often carry a size suffix the registry entry doesn't (e.g.
// site "Qwen3 32B" vs registry "Qwen3"), so try an exact match first, then
// a family-prefix match.
function findRegistryMatch(siteModel) {
  const norm = normalize(siteModel)
  if (registryByName[norm]) return registryByName[norm]
  let best = null
  for (const m of registry.models) {
    const rn = normalize(m.model)
    if (norm.startsWith(rn)) {
      if (!best || rn.length > normalize(best.model).length) best = m
    }
  }
  return best
}

const flags = []
for (const [siteModel, files] of Object.entries(modelToFiles)) {
  const match = findRegistryMatch(siteModel)
  if (!match) continue
  if (['superseded', 'deprecated', 'retired'].includes(match.status)) {
    flags.push({
      siteModel,
      registryModel: match.model,
      status: match.status,
      superseded_by: match.superseded_by,
      notes: match.notes,
      fileCount: files.length,
      files,
    })
  }
}

flags.sort((a, b) => b.fileCount - a.fileCount)
fs.writeFileSync('data/registry-diff-flags.json', JSON.stringify(flags, null, 2))
console.log(`Flagged ${flags.length} site model-strings tied to superseded/deprecated/retired registry entries`)
console.log(`Total files touched: ${new Set(flags.flatMap(f => f.files)).size}`)
console.log('Wrote data/registry-diff-flags.json')

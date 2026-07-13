#!/usr/bin/env node
// Extracts every `current_models_mentioned: [...]` array (one per language
// block) from every article file, unions them per-file, and writes a
// site-content-side dataset for the Model Registry Refresh diff (Step 3).
// See docs/MODEL_REGISTRY_REFRESH.md.
//
// Run: node scripts/extract-model-mentions.mjs
// Output: data/site-model-mentions.json (file -> sorted model list)
//         data/model-to-files.json (model name -> files mentioning it)

import fs from 'fs'
import { execSync } from 'child_process'

const ROOT = process.cwd()

const files = execSync(
  `grep -rl "current_models_mentioned" src/lib --include="*.ts" | grep -v types.ts | grep -v '\\.original\\.ts'`,
  { cwd: ROOT, encoding: 'utf8' }
).trim().split('\n').filter(Boolean)

const results = []
for (const file of files) {
  const src = fs.readFileSync(file, 'utf8')
  const modelSet = new Set()
  const re = /current_models_mentioned:\s*\[([^\]]*)\]/g
  let m
  while ((m = re.exec(src))) {
    const items = m[1].match(/'([^']*)'|"([^"]*)"/g) || []
    for (const it of items) {
      const clean = it.slice(1, -1).trim()
      if (clean) modelSet.add(clean)
    }
  }
  if (modelSet.size > 0) {
    results.push({ file, models: [...modelSet].sort() })
  }
}

fs.mkdirSync(`${ROOT}/data`, { recursive: true })
fs.writeFileSync(`${ROOT}/data/site-model-mentions.json`, JSON.stringify(results, null, 2))

const reverseIndex = {}
for (const r of results) {
  for (const model of r.models) {
    reverseIndex[model] = reverseIndex[model] || []
    reverseIndex[model].push(r.file)
  }
}
fs.writeFileSync(`${ROOT}/data/model-to-files.json`, JSON.stringify(reverseIndex, null, 2))

console.log(`Files scanned: ${files.length}`)
console.log(`Files with current_models_mentioned data: ${results.length}`)
console.log(`Unique model strings mentioned across site: ${Object.keys(reverseIndex).length}`)
console.log('Wrote data/site-model-mentions.json and data/model-to-files.json')

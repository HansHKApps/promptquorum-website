// Shared loading/matching/extraction logic for the model-registry tooling.
// Used by scripts/diff-model-registry.mjs, scripts/validate-model-names.mjs,
// and scripts/validate-registry-freshness.mjs. See docs/MODEL_REGISTRY_REFRESH.md.

import fs from 'fs'
import { execSync } from 'child_process'

export const REGISTRY_PATH = 'data/model-registry.json'
export const BASELINE_PATH = '.model-names-baseline.json'
export const LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

export function loadRegistry(root = process.cwd()) {
  return JSON.parse(fs.readFileSync(`${root}/${REGISTRY_PATH}`, 'utf8'))
}

export function normalize(s) {
  return s.toLowerCase().replace(/\s+/g, ' ').trim()
}

export function buildRegistryIndex(registry) {
  const byName = {}
  for (const m of registry.models) {
    byName[normalize(m.model)] = m
  }
  return byName
}

// Site strings often carry a size suffix the registry entry doesn't (e.g.
// site "Qwen3 32B" vs registry "Qwen3"), so try an exact match first, then
// the longest family-prefix match.
export function findRegistryMatch(registry, registryByName, siteModel) {
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

// Discovers article files carrying `current_models_mentioned` data. Mirrors
// extract-model-mentions.mjs's discovery so both tools agree on scope.
// Defaults to the whole src/lib tree (proven to cover every cluster: local-llms,
// prompt-engineering, power-local-llm, smart-home, prompt-bites, blog, etc.)
// rather than guessing at directory names.
export function discoverArticleFiles(paths = ['src/lib'], root = process.cwd()) {
  const files = []
  for (const p of paths) {
    try {
      const out = execSync(
        `grep -rl "current_models_mentioned" "${p}" --include="*.ts" | grep -v types.ts | grep -v '\\.original\\.ts' || true`,
        { cwd: root, encoding: 'utf8' }
      ).trim()
      if (out) files.push(...out.split('\n').filter(Boolean))
    } catch {
      // grep exits non-zero on "no matches" under some shells; treat as empty.
    }
  }
  return [...new Set(files)]
}

// Extracts current_models_mentioned per LANGUAGE BLOCK (not just per-file union
// like extract-model-mentions.mjs does). Assigns each match to the nearest
// preceding top-level language-block header (`  en: {`, `  de: {`, ...) in the
// same file. This is a heuristic (line-position based, not a real parser) but
// holds for this repo's flat `{ en: {...}, de: {...}, ... }` article shape.
export function extractModelMentionsByLocale(file, root = process.cwd()) {
  const src = fs.readFileSync(`${root}/${file}`, 'utf8')

  const headerRe = new RegExp(`^\\s{2,6}(${LOCALES.join('|')}):\\s*\\{`, 'gm')
  const headers = []
  let hm
  while ((hm = headerRe.exec(src))) {
    headers.push({ locale: hm[1], index: hm.index })
  }
  headers.sort((a, b) => a.index - b.index)

  function localeForIndex(idx) {
    let current = null
    for (const h of headers) {
      if (h.index <= idx) current = h.locale
      else break
    }
    return current
  }

  const mentionsRe = /current_models_mentioned:\s*\[([^\]]*)\]/g
  const byLocale = {}
  let mm
  while ((mm = mentionsRe.exec(src))) {
    const locale = localeForIndex(mm.index) ?? 'en'
    const items = mm[1].match(/'([^']*)'|"([^"]*)"/g) || []
    for (const it of items) {
      const clean = it.slice(1, -1).trim()
      if (!clean) continue
      byLocale[locale] = byLocale[locale] || new Set()
      byLocale[locale].add(clean)
    }
  }

  const result = {}
  for (const [locale, set] of Object.entries(byLocale)) {
    result[locale] = [...set].sort()
  }
  return result
}

export function loadBaseline(root = process.cwd()) {
  try {
    return JSON.parse(fs.readFileSync(`${root}/${BASELINE_PATH}`, 'utf8'))
  } catch {
    return { violations: [] }
  }
}

export function baselineKey(v) {
  return `${v.file}::${v.locale}::${v.siteModel}::${v.code}`
}

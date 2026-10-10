#!/usr/bin/env node
// Unit tests for tool-alias-map.ts and competitor-links.ts.
// Run: node scripts/test-tool-alias-map.mjs

import assert from 'node:assert/strict'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { alias: { '@': path.join(ROOT, 'src') }, interopDefault: true })

const { normalizeToolName, resolveToolSlug, ambiguousAliases } = jiti('@/lib/power-local-llm/tool-alias-map')
const { linkCompetitorSections, emptyStats, isCompetitorSectionKey } = jiti('@/lib/power-local-llm/competitor-links')
const { localAiApps } = jiti('@/lib/power-local-llm/apps-barrel')

let n = 0
const failures = []
const test = (name, fn) => { n++; try { fn() } catch (e) { failures.push(`${name}: ${e.message}`) } }

// --- normalisation / resolution ------------------------------------------------
test('normalise', () => {
  assert.equal(normalizeToolName('LM Studio'), 'lmstudio')
  assert.equal(normalizeToolName('LMStudio'), 'lmstudio')
  assert.equal(normalizeToolName('lm-studio'), 'lmstudio')
  assert.equal(normalizeToolName('  Ollama  '), 'ollama')
})
const lm = localAiApps.find((a) => a.slug === 'lm-studio')
test('lm-studio tile exists', () => assert.ok(lm, 'tile lm-studio missing'))
if (lm) {
  for (const spelling of ['LM Studio', 'LMStudio', 'lmstudio', 'lm-studio', 'LM STUDIO']) {
    test(`resolve ${spelling}`, () => assert.equal(resolveToolSlug(spelling), 'lm-studio'))
  }
}
test('every tile resolves from its own name and slug', () => {
  const ambiguous = ambiguousAliases()
  for (const a of localAiApps) {
    for (const spelling of [a.name, a.slug]) {
      const k = normalizeToolName(spelling)
      if (ambiguous.has(k)) continue // reported by the ambiguity test below
      assert.equal(resolveToolSlug(spelling), a.slug, `${spelling} -> ${resolveToolSlug(spelling)}`)
    }
  }
})
test('no alias key is claimed by two tiles', () => {
  const amb = ambiguousAliases()
  assert.equal(amb.size, 0, [...amb].map(([k, v]) => `${k}: ${v.join(', ')}`).join(' | '))
})
test('no fuzzy matching', () => {
  assert.equal(resolveToolSlug('LM Studio Server'), null)
  assert.equal(resolveToolSlug('Ollama (CLI)'), null)
  assert.equal(resolveToolSlug('not a tool'), null)
  assert.equal(resolveToolSlug(''), null)
})

// --- section selection ----------------------------------------------------------
test('competitor keys', () => {
  for (const k of ['competitors', 'vsAlternatives', 'alternatives', 'competitorsAndAlternatives', 'comparison', 'comparisonTable', 'comparisonOllama']) assert.ok(isCompetitorSectionKey(k), k)
  for (const k of ['tldr', 'overview', 'faqSection', 'relatedReading', 'getIt', 'whenNotToUse']) assert.ok(!isCompetitorSectionKey(k), k)
})

// --- linking behaviour ------------------------------------------------------------
const fakeArticle = (sections) => ({ sections })
const T = (slugName) => localAiApps.find((a) => a.slug === slugName)

test('table: plain, bold, vendor link, internal link, self, unknown', () => {
  const a = T('ollama'), b = T('lm-studio'), c = T('jan')
  if (!a || !b || !c) throw new Error('fixture tiles missing (ollama, lm-studio, jan)')
  const art = fakeArticle({
    competitors: {
      columns: ['Tool', 'Best for'],
      rows: [
        { Tool: a.name, 'Best for': 'x' },
        { Tool: `**${b.name}**`, 'Best for': 'y' },
        { Tool: `[${c.name}](https://example.com/jan)`, 'Best for': 'z' },
        { Tool: `[Own](/power-local-llm/own-review)`, 'Best for': 'w' },
        { Tool: 'Totally Unknown Thing', 'Best for': 'v' },
      ],
    },
  })
  const st = emptyStats()
  const out = linkCompetitorSections(art, 'de', 'jan', st)
  const rows = out.sections.competitors.rows
  assert.equal(rows[0].Tool, `[${a.name}](/de/directory?tool=ollama)`)
  assert.equal(rows[1].Tool, `**[${b.name}](/de/directory?tool=lm-studio)**`)
  assert.equal(rows[2].Tool, `[${c.name}](https://example.com/jan)`, 'own tool must stay untouched')
  assert.equal(rows[3].Tool, '[Own](/power-local-llm/own-review)')
  assert.equal(rows[4].Tool, 'Totally Unknown Thing')
  assert.equal(rows[0]['Best for'], 'x')
  assert.equal(st.linkedPlain, 2)
  assert.equal(st.self, 1)
  assert.deepEqual(st.unresolved, ['Totally Unknown Thing'])
  assert.deepEqual(out.sections.competitors.directoryCompare.href, '/de/directory')
  // input untouched
  assert.equal(art.sections.competitors.rows[0].Tool, a.name)
})

test('vendor link on another tool is retargeted to the directory entry', () => {
  const a = T('ollama')
  const art = fakeArticle({ alternatives: { columns: ['App'], rows: [{ App: `[${a.name}](https://ollama.com)` }] } })
  const st = emptyStats()
  const out = linkCompetitorSections(art, 'en', 'jan', st)
  assert.equal(out.sections.alternatives.rows[0].App, `[${a.name}](/directory?tool=ollama)`)
  assert.equal(st.retargetedExternal, 1)
})

test('list items: leading name only, rest of the text preserved', () => {
  const a = T('ollama'), b = T('lm-studio')
  const art = fakeArticle({
    vsAlternatives: {
      items: [`**${a.name}** — runs models locally. See [docs](https://x.test).`, `**[${b.name}](https://lmstudio.ai)** — GUI.`, 'Plain start without markup — nothing to do.'],
    },
  })
  const out = linkCompetitorSections(art, 'en', null)
  assert.equal(out.sections.vsAlternatives.items[0], `**[${a.name}](/directory?tool=ollama)** — runs models locally. See [docs](https://x.test).`)
  assert.equal(out.sections.vsAlternatives.items[1], `**[${b.name}](/directory?tool=lm-studio)** — GUI.`)
  assert.equal(out.sections.vsAlternatives.items[2], 'Plain start without markup — nothing to do.')
})

test('Microsoft Agent Framework resolves to its own tile (no review-only fallback)', () => {
  assert.equal(resolveToolSlug('Microsoft Agent Framework'), 'microsoft-agent-framework')
  assert.equal(resolveToolSlug('microsoft-agent-framework'), 'microsoft-agent-framework')
})

test('lowercase / index row keys (local-llms) are handled', () => {
  const a = T('ollama')
  const art = fakeArticle({ competitors: { columns: ['Tool', 'Notes'], rows: [{ tool: a.name, notes: 'n' }] } })
  const out = linkCompetitorSections(art, 'en', null)
  assert.equal(out.sections.competitors.rows[0].tool, `[${a.name}](/directory?tool=ollama)`)
})

test('feature matrix: tool column headers are linked, feature rows are not', () => {
  const a = T('ollama'), b = T('lm-studio'), c = T('jan')
  const art = fakeArticle({
    comparisonTable: {
      columns: ['Feature', a.name, b.name, c.name],
      rows: [{ Feature: 'License', [a.name]: 'MIT', [b.name]: 'Closed', [c.name]: 'AGPL' }],
    },
  })
  const st = emptyStats()
  const out = linkCompetitorSections(art, 'ja', 'jan', st)
  const s = out.sections.comparisonTable
  assert.deepEqual(s.columns, ['Feature', `[${a.name}](/ja/directory?tool=ollama)`, `[${b.name}](/ja/directory?tool=lm-studio)`, c.name])
  assert.deepEqual(s.rows, art.sections.comparisonTable.rows, 'rows must not change (renderers key them by the plain header)')
  assert.deepEqual(st.unresolved, [])
  assert.equal(st.self, 1)
})

test('curated aliases resolve to the right tile', () => {
  const expect = { 'Jan AI': 'jan', 'AutoGPT (classic)': 'autogpt', Loci: 'loci-ai', 'Haystack (deepset)': 'haystack', 'Jarvis (Mac)': 'jarvis', SwarmUI: 'stableswarmui' }
  for (const [name, slug] of Object.entries(expect)) assert.equal(resolveToolSlug(name), slug, name)
})

test('non-competitor sections and unrelated tables are untouched', () => {
  const a = T('ollama')
  const art = fakeArticle({ overview: { columns: ['Tool'], rows: [{ Tool: a.name }] } })
  assert.equal(linkCompetitorSections(art, 'en', null), art)
})

console.log(`${n - failures.length}/${n} tests passed`)
if (failures.length) {
  for (const f of failures) console.error('  - ' + f)
  process.exit(1)
}

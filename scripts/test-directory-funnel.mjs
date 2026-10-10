#!/usr/bin/env node
// Tests for src/lib/power-local-llm/directory-funnel.ts (review-page → directory funnel).
// Run: node scripts/test-directory-funnel.mjs
//
// Covers: the reviewed tool is never among its own similar tools, selection is
// deterministic, every review page in every locale gets well-formed data, the
// count comes from the data, non-review pages get nothing, and every review
// has a `relatedReading` section (the anchor for the "end" block).

import assert from 'node:assert/strict'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { alias: { '@': path.join(ROOT, 'src') }, interopDefault: true })

const funnel = jiti('@/lib/power-local-llm/directory-funnel')
const { localAiApps } = jiti('@/lib/power-local-llm/apps-barrel')
const index = jiti('@/generated/feature-review-index.json')
const { powerLLMContent } = jiti('@/lib/power-local-llm/articles-barrel')
const { POWER_LLM_SLUG_TO_KEY } = jiti('@/lib/power-local-llm/slugs')
const { llmContent } = jiti('@/lib/local-llms/content')
const { LLM_SLUG_TO_KEY } = jiti('@/lib/local-llms/slugs')

const LANGS = ['en', 'de', 'fr', 'es', 'ja', 'zh', 'pt', 'ar', 'ko']
const failures = []
let checks = 0
function check(name, fn) {
  checks++
  try { fn() } catch (e) { failures.push(`${name}: ${e.message}`) }
}

// --- similar-tool selection --------------------------------------------------
for (const app of localAiApps) {
  check(`similar(${app.slug})`, () => {
    const a = funnel.getSimilarTools(app, 3)
    const b = funnel.getSimilarTools(app, 3)
    assert.deepEqual(a.map((t) => t.slug), b.map((t) => t.slug), 'not deterministic')
    assert.ok(a.length <= 3, 'more than 3')
    assert.ok(!a.some((t) => t.slug === app.slug), 'contains itself')
    assert.equal(new Set(a.map((t) => t.slug)).size, a.length, 'duplicates')
    const group = (t) => t.categories[0]
    const sameCat = a.filter((t) => group(t) === group(app)).length
    const othersInCat = localAiApps.filter((t) => t.slug !== app.slug && group(t) === group(app)).length
    assert.equal(sameCat, Math.min(3, othersInCat), 'same-category tools must come first and fill as far as they exist')
  })
}

// --- review pages -------------------------------------------------------------
const reviews = Object.entries(index).map(([appSlug, v]) => ({ appSlug, cluster: v.cluster, urlSlug: v.urlSlug }))
const appSlugs = new Set(localAiApps.map((a) => a.slug))

for (const r of reviews) {
  for (const lang of LANGS) {
    check(`funnel(${r.urlSlug}, ${lang})`, () => {
      const d = funnel.buildDirectoryFunnel(r.cluster, r.urlSlug, lang)
      assert.ok(d, 'no data for a review page')
      const prefix = lang === 'en' ? '' : `/${lang}`
      assert.equal(d.dir, lang === 'ar' ? 'rtl' : 'ltr')
      assert.equal(d.compareAll.href, `${prefix}/directory`)
      assert.ok(d.compareAll.label.includes(String(localAiApps.length)), 'count must come from the data')
      assert.ok(!/\{[a-z]+\}/i.test(JSON.stringify(d)), 'unresolved placeholder')
      assert.equal(d.entry?.href, `${prefix}/directory?tool=${r.appSlug}`, 'every review page has its own directory entry link')
      assert.ok(d.similar.length > 0, 'at least one similar tool')
      assert.ok(!d.similar.some((c) => c.href.endsWith(`tool=${r.appSlug}`)), 'own entry among similar')
      for (const c of d.similar) {
        const slug = new URL(c.href, 'https://x.test').searchParams.get('tool')
        assert.ok(appSlugs.has(slug), `card links to unknown tool ${slug}`)
        assert.ok(c.href.startsWith(`${prefix}/directory?`), 'wrong prefix')
      }
      if (d.otherPlatform) assert.ok(d.otherPlatform.href.startsWith(`${prefix}/directory?`))
      assert.ok(d.popup.href.includes('utm_campaign=directory-funnel'))
    })
  }

  check(`relatedReading(${r.urlSlug})`, () => {
    const key = r.cluster === 'power-local-llm' ? POWER_LLM_SLUG_TO_KEY[r.urlSlug] : LLM_SLUG_TO_KEY[r.urlSlug]
    const content = r.cluster === 'power-local-llm' ? powerLLMContent[key] : llmContent[key]
    assert.ok(content, `no article for ${r.urlSlug}`)
    for (const lang of LANGS) {
      const block = content[lang]
      if (!block) continue
      assert.ok(block.sections?.relatedReading, `${lang}: no relatedReading section (end block would not render)`)
    }
  })
}

// --- non-review pages get nothing ----------------------------------------------
for (const [cluster, slug] of [
  ['power-local-llm', 'local-llm-software-directory'],
  ['power-local-llm', 'local-llm-code-review-ci-cd'],
  ['power-local-llm', 'best-local-llms-code-review'],
  ['local-llms', 'best-local-llms-2026'],
  ['power-local-llm', 'does-not-exist'],
]) {
  check(`non-review(${slug})`, () => assert.equal(funnel.buildDirectoryFunnel(cluster, slug, 'en'), undefined))
}

// --- license classes ---------------------------------------------------------------
for (const [lic, cls] of [['MIT', 'open'], ['Apache 2.0', 'open'], ['AGPL-3.0', 'open'], ['Closed source', 'closed'], ['Proprietary (free, EULA)', 'closed'], ['Not stated', 'other']]) {
  check(`licenseClass(${lic})`, () => assert.equal(funnel.licenseClass(lic), cls))
}

console.log(`${checks - failures.length}/${checks} checks passed (${reviews.length} review pages x ${LANGS.length} locales, ${localAiApps.length} tools)`)
if (failures.length) {
  console.error(`\n${failures.length} failure(s):`)
  for (const f of failures.slice(0, 40)) console.error('  - ' + f)
  process.exit(1)
}

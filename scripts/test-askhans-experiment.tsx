// Unit tests for the Ask Hans button-wording experiment (askhans-cta-v1). Run: npm run test:askhans-experiment
// Pure logic only (assignment, page category, copy coverage, statistics); no Redis, no browser.
import assert from 'node:assert/strict'
import { pickVariant } from '../src/lib/askhans/experiment/variant'
import { CTA_VARIANTS, CTA_LANGS, CTA_EVENTS, CTA_MIN_DAYS, CTA_MIN_CLICKS_PER_VARIANT, pageCategory } from '../src/lib/askhans/experiment/config'
import { analyse, decide, exposurePerVariant, mulberry32 } from '../src/lib/askhans/experiment/stats'
import { ASK_COPY } from '../src/components/askhans/copy'
import { reserveEm } from '../src/components/askhans/experiment/useCta'

let failed = 0
const t = (name: string, fn: () => void) => {
  try {
    fn()
    console.log(`PASS ${name}`)
  } catch (e) {
    failed++
    console.log(`FAIL ${name}\n  ${e instanceof Error ? e.message : e}`)
  }
}

t('assignment is uniform (1/3 each, 300k draws, within 0.5 percentage points)', () => {
  const rng = mulberry32(7)
  const c = { A: 0, B: 0, C: 0 }
  const N = 300_000
  for (let i = 0; i < N; i++) c[pickVariant(() => Math.floor(rng() * 256))]++
  for (const v of CTA_VARIANTS) assert.ok(Math.abs(c[v] / N - 1 / 3) < 0.005, `${v}: ${c[v] / N}`)
})

t('rejection sampling never maps byte 255 (no modulo bias)', () => {
  const bytes = [255, 255, 1]
  assert.equal(pickVariant(() => bytes.shift() as number), 'B')
})

t('English wording is exactly as specified', () => {
  const e = ASK_COPY.en.ctaVariants
  assert.deepEqual(e.A, { label: 'Chat with Ask Hans', sub: 'Interactive AI assistant' })
  assert.deepEqual(e.B, { label: 'Start an AI conversation', sub: 'Ask questions and explore your options' })
  assert.deepEqual(e.C, { label: 'Get your personal AI recommendation', sub: 'Find the right local AI tools for your needs' })
})

t('all 9 locales carry three distinct labels and subtitles; brand stays in A', () => {
  for (const l of CTA_LANGS) {
    const v = ASK_COPY[l].ctaVariants
    for (const k of CTA_VARIANTS) assert.ok(v[k].label.trim() && v[k].sub.trim(), `${l}.${k} empty`)
    assert.equal(new Set(CTA_VARIANTS.map((k) => v[k].label)).size, 3, `${l} labels not distinct`)
    assert.ok(v.A.label.includes('Ask Hans'), `${l}.A must name Ask Hans`)
    assert.ok(!v.B.label.includes('Ask Hans') && !v.C.label.includes('Ask Hans'), `${l}: B/C must not be brand-led`)
    if (l !== 'en') for (const k of CTA_VARIANTS) assert.notEqual(v[k].label, ASK_COPY.en.ctaVariants[k].label, `${l}.${k} untranslated`)
  }
})

t('reserved width grows with the longest variant', () => {
  assert.ok(reserveEm('Get your personal AI recommendation') > reserveEm('Chat with Ask Hans'))
  assert.ok(reserveEm('あなたに合う AI のおすすめを見る') > 10)
})

t('page categories (locale prefix ignored)', () => {
  const c: Record<string, string> = {
    '/': 'home', '/de': 'home', '/directory': 'directory', '/fr/directory': 'directory', '/power-local-llm/jan-review': 'app-review',
    '/ja/power-local-llm/ollama-vs-lm-studio': 'comparison', '/local-llms/best-gpus-for-local-llms': 'local-llms',
    '/prompt-engineering/co-star-framework': 'prompt-engineering', '/about': 'about', '/askhans': 'askhans', '/zh/askhans': 'askhans',
    '/compare': 'comparison', '/blog/x': 'blog', '/impressum': 'other',
  }
  for (const [p, want] of Object.entries(c)) assert.equal(pageCategory(p), want, p)
})

t('beta-binomial: clear winner is found, ties are not', () => {
  const win = analyse({ A: { k: 100, n: 5000 }, B: { k: 100, n: 5000 }, C: { k: 160, n: 5000 } })
  const c = win.find((p) => p.variant === 'C')!
  assert.ok(c.probBest > 0.99, `P(best C)=${c.probBest}`)
  assert.ok(c.liftVsBestOther.low > 0)
  const tie = analyse({ A: { k: 100, n: 5000 }, B: { k: 100, n: 5000 }, C: { k: 100, n: 5000 } })
  for (const p of tie) assert.ok(p.probBest > 0.2 && p.probBest < 0.45, `${p.variant} ${p.probBest}`)
  assert.deepEqual(analyse({ A: { k: 5, n: 90 }, B: { k: 6, n: 80 }, C: { k: 7, n: 85 } }), analyse({ A: { k: 5, n: 90 }, B: { k: 6, n: 80 }, C: { k: 7, n: 85 } }), 'must be deterministic')
})

t('decision rule refuses early or small data, accepts a real difference', () => {
  const big = analyse({ A: { k: 100, n: 5000 }, B: { k: 100, n: 5000 }, C: { k: 160, n: 5000 } })
  assert.equal(decide(big, CTA_MIN_DAYS - 1).state, 'running')
  assert.equal(decide(big, CTA_MIN_DAYS).state, 'leader')
  assert.equal(decide(big, CTA_MIN_DAYS).leader, 'C')
  const tiny = analyse({ A: { k: 2, n: 40 }, B: { k: 1, n: 40 }, C: { k: 9, n: 40 } })
  assert.notEqual(decide(tiny, 30).state, 'leader')
  const tie = analyse({ A: { k: 100, n: 5000 }, B: { k: 102, n: 5000 }, C: { k: 99, n: 5000 } })
  assert.equal(decide(tie, 30).state, 'insufficient')
  const small = analyse({ A: { k: 100, n: 5000 }, B: { k: 101, n: 5000 }, C: { k: 109, n: 5000 } })
  assert.notEqual(decide(small, 30).state, 'leader', 'a +9% lift is below the practical threshold')
})

t('exposure = tracked page loads / 3 (impression, restored 2026-11-19, is a cross-check, not the exposure source)', () => {
  assert.equal(exposurePerVariant(9000), 3000)
  assert.equal(exposurePerVariant(10000), 3333)
  assert.equal(exposurePerVariant(null), 0)
  assert.equal(exposurePerVariant(-5), 0)
  assert.equal(exposurePerVariant(Number.NaN), 0)
  assert.ok('ask_hans_button_impression' in CTA_EVENTS, 'impression event was restored 2026-11-19 — see scripts/test-tracking-events.tsx')
})

t('leader needs enough clicks per variant and a page-load total', () => {
  // clear difference but too few clicks: no leader
  const fewClicks = analyse({ A: { k: 20, n: 6000 }, B: { k: 20, n: 6000 }, C: { k: 60, n: 6000 } })
  const d1 = decide(fewClicks, 30)
  assert.notEqual(d1.state, 'leader')
  assert.ok(d1.reasons.some((x) => x.includes('button clicks')), 'names the click guard')
  // same rates, enough clicks: leader
  const enough = analyse({ A: { k: CTA_MIN_CLICKS_PER_VARIANT, n: 6000 }, B: { k: CTA_MIN_CLICKS_PER_VARIANT, n: 6000 }, C: { k: 200, n: 6000 } })
  assert.equal(decide(enough, 30).leader, 'C')
  // page-load total missing (exposure 0): never a leader, tells the owner how to fix it
  const none = analyse({ A: { k: 150, n: 0 }, B: { k: 150, n: 0 }, C: { k: 300, n: 0 } })
  const d2 = decide(none, 30)
  assert.notEqual(d2.state, 'leader')
  assert.ok(d2.reasons.some((x) => x.includes('?pageviews=N')))
})

if (failed) {
  console.log(`\n${failed} test(s) failed`)
  process.exit(1)
}
console.log('\nAll askhans-experiment tests passed')

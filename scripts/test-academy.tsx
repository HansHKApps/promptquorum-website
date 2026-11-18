// Unit tests for PromptQuorum Academy (pure logic: storage, copy coverage, topics). Run: npm run test:academy
import assert from 'node:assert/strict'
import { ACADEMY_STORAGE_KEY } from '../src/lib/academy/config'
import {
  clearAcademyState,
  defaultDraft,
  loadAcademyState,
  migrateAcademyState,
  saveAcademyState,
  type KeyValueStorage,
} from '../src/lib/academy/store'
import { buildAcademyTopics, ACADEMY_TOPIC_HUBS } from '../src/lib/academy/topics'
import { ACADEMY_COPY } from '../src/components/academy/copy'
import { ALL_LANGS } from '../src/lib/i18n/constants'

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

function memoryStorage(): KeyValueStorage & { data: Map<string, string> } {
  const data = new Map<string, string>()
  return { data, getItem: (k) => data.get(k) ?? null, setItem: (k, v) => void data.set(k, v), removeItem: (k) => void data.delete(k) }
}
const throwing: KeyValueStorage = {
  getItem: () => {
    throw new Error('blocked')
  },
  setItem: () => {
    throw new Error('quota')
  },
  removeItem: () => {
    throw new Error('blocked')
  },
}
const draft = { ...defaultDraft('de'), subject: 'Lokale LLMs', updatedAt: '2026-11-18T10:00:00.000Z' }

t('store: save + reload restores the setup and the screen', () => {
  const s = memoryStorage()
  assert.equal(saveAcademyState({ version: 1, view: 'diagnostic', draft }, s), true)
  assert.deepEqual(loadAcademyState(s), { version: 1, view: 'diagnostic', draft })
})

t('store: missing, corrupt or unknown-version data starts fresh', () => {
  const s = memoryStorage()
  assert.deepEqual(loadAcademyState(s), { version: 1, view: 'setup' })
  s.data.set(ACADEMY_STORAGE_KEY, '{not json')
  assert.deepEqual(loadAcademyState(s), { version: 1, view: 'setup' })
  s.data.set(ACADEMY_STORAGE_KEY, JSON.stringify({ version: 99, view: 'setup', draft }))
  assert.deepEqual(loadAcademyState(s), { version: 1, view: 'setup' })
})

t('store: invalid drafts are dropped, and a later screen without a draft falls back to setup', () => {
  assert.deepEqual(migrateAcademyState({ version: 1, view: 'diagnostic', draft: { ...draft, availableMinutes: 7 } }), { version: 1, view: 'setup' })
  assert.deepEqual(migrateAcademyState({ version: 1, view: 'setup', draft: { ...draft, language: 'it' } }), { version: 1, view: 'setup' })
  assert.deepEqual(migrateAcademyState({ version: 1, view: 'setup', draft: { ...draft, subject: 'x'.repeat(500) } }), { version: 1, view: 'setup' })
  assert.deepEqual(migrateAcademyState({ version: 1, view: 'nonsense', draft }), { version: 1, view: 'setup', draft })
})

t('store: never throws when storage is blocked', () => {
  assert.deepEqual(loadAcademyState(throwing), { version: 1, view: 'setup' })
  assert.equal(saveAcademyState({ version: 1, view: 'setup', draft }, throwing), false)
  assert.equal(clearAcademyState(throwing), false)
  assert.deepEqual(loadAcademyState(null), { version: 1, view: 'setup' })
})

t('store: delete my data removes the key', () => {
  const s = memoryStorage()
  saveAcademyState({ version: 1, view: 'setup', draft }, s)
  assert.equal(clearAcademyState(s), true)
  assert.equal(s.data.has(ACADEMY_STORAGE_KEY), false)
})

t('copy: all 9 languages have every key, 7 steps, all hubs, and no empty strings', () => {
  const en = ACADEMY_COPY.en
  const keys = Object.keys(en).sort()
  for (const l of ALL_LANGS) {
    const c = ACADEMY_COPY[l]
    assert.deepEqual(Object.keys(c).sort(), keys, `${l}: key set differs from en`)
    assert.equal(c.steps.length, 7, `${l}: steps`)
    for (const h of ACADEMY_TOPIC_HUBS) assert.ok(c.hubs[h]?.trim(), `${l}: hub ${h}`)
    const walk = (v: unknown, path: string): void => {
      if (typeof v === 'string') assert.ok(v.trim(), `${l}: empty ${path}`)
      else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, `${path}.${k}`)
    }
    walk(c, l)
    assert.ok(c.minutes(90).length > 0 && c.minutes(120) !== c.minutes(90), `${l}: minutes()`)
  }
})

t('copy: non-English meta titles differ from English (nothing left untranslated)', () => {
  for (const l of ALL_LANGS.filter((x) => x !== 'en')) assert.notEqual(ACADEMY_COPY[l].metaTitle, ACADEMY_COPY.en.metaTitle, l)
})

t('topics: hubs first, then directory categories with localized labels', () => {
  const en = buildAcademyTopics('en', ACADEMY_COPY.en.hubs)
  const de = buildAcademyTopics('de', ACADEMY_COPY.de.hubs)
  assert.equal(en[0].key, 'hub:local-llms')
  assert.ok(en.some((x) => x.key.startsWith('category:')), 'has categories')
  assert.equal(en.length, de.length)
  assert.ok(de.some((x, i) => x.key.startsWith('category:') && x.label !== en[i].label), 'German category labels are localized')
  assert.equal(new Set(en.map((x) => x.key)).size, en.length, 'unique keys')
})

if (failed) {
  console.log(`\n${failed} test(s) failed`)
  process.exit(1)
}
console.log('\nAll Academy tests passed')

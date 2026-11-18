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
import { questionProblems, toQuestion } from '../src/lib/academy/questions'
import { summarizeDiagnostic } from '../src/lib/academy/diagnostic-summary'
import { generateDiagnostic } from '../src/lib/academy/diagnostic'
import { AcademyGenerationError, generateStructured, type ParseClient } from '../src/lib/academy/generate'
import { clampProgramme, contentMinutes, programmeProblems, testMinutes } from '../src/lib/academy/programme'
import { diagnosticOutputSchema, programmeOutputSchema, type GeneratedQuestion, type ProgrammeOutput } from '../src/lib/academy/schemas'
import type { Question } from '../src/lib/academy/types'

let failed = 0
const pending: Promise<void>[] = []
const t = (name: string, fn: () => void | Promise<void>) => {
  const report = (e?: unknown) => {
    if (e === undefined) return console.log(`PASS ${name}`)
    failed++
    console.log(`FAIL ${name}\n  ${e instanceof Error ? e.message : e}`)
  }
  try {
    const r = fn()
    if (r instanceof Promise) pending.push(r.then(() => report(), report))
    else report()
  } catch (e) {
    report(e)
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

// ------------------------------------------------------------------------------------------ Phase 2

const gq = (n: number, topic = 'Topic A'): GeneratedQuestion => ({
  topic,
  prompt: `Question ${n}?`,
  correct: `Right ${n}`,
  wrong: [`Wrong ${n}a`, `Wrong ${n}b`],
  explanationCorrect: 'Because.',
  explanationWrong: ['No a.', 'No b.'],
})

/** A fake SDK client that returns the queued answers in order. */
function fakeClient(answers: { stop?: string; out: unknown }[]): ParseClient & { calls: number } {
  const c = {
    calls: 0,
    messages: {
      parse: (async () => {
        const a = answers[Math.min(c.calls, answers.length - 1)]
        c.calls++
        return { stop_reason: a.stop ?? 'end_turn', parsed_output: a.out, usage: { input_tokens: 10, output_tokens: 5, cache_read_input_tokens: 0 } }
      }) as unknown as ParseClient['messages']['parse'],
    },
  }
  return c
}

t('questions: correct position is chosen in code and roughly uniform over 3000 draws', () => {
  const count = [0, 0, 0]
  for (let i = 0; i < 3000; i++) {
    const q = toQuestion(gq(i), 'final')
    assert.equal(q.options[q.correctIndex], `Right ${i}`)
    assert.equal(q.explanationWrong[q.correctIndex], undefined)
    count[q.correctIndex]++
  }
  for (const c of count) assert.ok(c > 850 && c < 1150, `position counts ${count}`)
})

t('questions: wrong-answer explanations stay attached to their answers after shuffling', () => {
  for (const pos of [0, 1, 2]) {
    const q = toQuestion(gq(1), 'lesson', () => pos)
    const wrongIdx = [0, 1, 2].filter((i) => i !== pos)
    assert.equal(q.options[wrongIdx[0]], 'Wrong 1a')
    assert.equal(q.explanationWrong[wrongIdx[0]], 'No a.')
    assert.equal(q.options[wrongIdx[1]], 'Wrong 1b')
    assert.equal(q.explanationWrong[wrongIdx[1]], 'No b.')
  }
})

t('questions: rule check rejects duplicates, "all of the above" and wrong option counts', () => {
  assert.deepEqual(questionProblems(gq(1), 0), [])
  assert.ok(questionProblems({ ...gq(1), wrong: ['Right 1', 'x'] }, 0).some((p) => p.includes('differ')))
  assert.ok(questionProblems({ ...gq(1), wrong: ['All of the above', 'x'] }, 0).some((p) => p.includes('above')))
  assert.ok(questionProblems({ ...gq(1), wrong: ['x'] }, 0).some((p) => p.includes('exactly 2')))
})

t('quick check: per-topic gaps, known topics and level; "not sure" counts as wrong', () => {
  const qs: Question[] = [gq(1, 'A'), gq(2, 'A'), gq(3, 'B'), gq(4, 'C')].map((g) => toQuestion(g, 'diagnostic', () => 0))
  const all = summarizeDiagnostic(qs, Object.fromEntries(qs.map((q) => [q.id, 0])))
  assert.deepEqual([all.estimatedLevel, all.gaps, all.known.length], ['experienced', [], 3])
  const mixed = summarizeDiagnostic(qs, { [qs[0].id]: 0, [qs[1].id]: -1, [qs[2].id]: 0 })
  assert.deepEqual(mixed.gaps, ['A', 'C'])
  assert.deepEqual(mixed.known, ['B'])
  assert.equal(mixed.estimatedLevel, 'some')
  assert.equal(summarizeDiagnostic(qs, {}).estimatedLevel, 'beginner')
})

const plan = (lessons: number, minutes: number, objectives = 4): ProgrammeOutput => ({
  objectives: Array.from({ length: objectives }, (_, i) => `Objective ${i}`),
  lessons: Array.from({ length: lessons }, (_, i) => ({ title: `L${i}`, topic: `T${i}`, estimatedMinutes: minutes, objectiveIds: [i % objectives], recap: false })),
})

t('programme: test time is capped at half the time, so short programmes keep reading time', () => {
  assert.equal(testMinutes('none', 60, 5), 0)
  assert.equal(testMinutes('final', 60, 5), 7.5)
  assert.equal(testMinutes('per_lesson_and_final', 15, 3), 7.5)
  assert.ok(contentMinutes('per_lesson_and_final', 15, 3) >= 7)
  assert.equal(contentMinutes('final', 240, 10), 240 - 11) // 15 questions x 0.75 = 11.25
})

t('programme: rule check enforces 3-12 lessons, 3-8 objectives, objective mapping and the ±20% time band', () => {
  const req = { testMode: 'final' as const, availableMinutes: 60 }
  const target = contentMinutes('final', 60, 4) // 52 or 53
  assert.deepEqual(programmeProblems(plan(4, Math.round(target / 4)), req), [])
  assert.ok(programmeProblems(plan(2, 26), req).some((p) => p.startsWith('lessons')))
  assert.ok(programmeProblems(plan(13, 4), req).some((p) => p.startsWith('lessons')))
  assert.ok(programmeProblems(plan(4, 13, 2), req).some((p) => p.startsWith('objectives')))
  assert.ok(programmeProblems(plan(4, 30), req).some((p) => p.includes('add up')))
  const unmapped = plan(4, 13)
  unmapped.lessons[1].objectiveIds = [9]
  assert.ok(programmeProblems(unmapped, req).some((p) => p.includes('lessons.1.objectiveIds')))
})

t('programme: clamp trims to limits, maps every lesson and scales minutes into the band', () => {
  const req = { testMode: 'per_lesson_and_final' as const, availableMinutes: 120 }
  const raw = plan(14, 30, 10)
  raw.lessons[2].objectiveIds = [99]
  const c = clampProgramme(raw, req)!
  assert.equal(c.lessons.length, 12)
  assert.equal(c.objectives.length, 8)
  assert.ok(c.lessons.every((l) => l.objectiveIds.length && l.objectiveIds.every((id) => id < 8)))
  assert.deepEqual(programmeProblems(c, req), [])
  assert.equal(clampProgramme(plan(2, 10), req), null)
})

t('generation: retries once with the problems appended, then succeeds', async () => {
  const c = fakeClient([{ out: plan(2, 10) }, { out: plan(4, 13) }])
  const r = await generateStructured({
    client: c, label: 'test', system: 's', user: 'u', schema: programmeOutputSchema, maxTokens: 100,
    validate: (v) => ({ problems: programmeProblems(v, { testMode: 'final', availableMinutes: 60 }) }),
  })
  assert.equal(c.calls, 2)
  assert.equal(r.attempts, 2)
  assert.equal(r.salvaged, false)
})

t('generation: two rule failures throw, unless salvage repairs the second answer', async () => {
  const req = { testMode: 'final' as const, availableMinutes: 60 }
  const args = { label: 'test', system: 's', user: 'u', schema: programmeOutputSchema, maxTokens: 100, validate: (v: ProgrammeOutput) => ({ problems: programmeProblems(v, req) }) }
  await assert.rejects(generateStructured({ ...args, client: fakeClient([{ out: plan(4, 40) }]) }), AcademyGenerationError)
  const r = await generateStructured({ ...args, client: fakeClient([{ out: plan(4, 40) }]), salvage: (v) => clampProgramme(v, req) })
  assert.equal(r.salvaged, true)
  assert.deepEqual(programmeProblems(r.value, req), [])
})

t('generation: schema-invalid output (parsed_output null) is retried; refusals are not', async () => {
  const c = fakeClient([{ out: null }, { out: plan(4, 13) }])
  const r = await generateStructured({ client: c, label: 'test', system: 's', user: 'u', schema: programmeOutputSchema, maxTokens: 100 })
  assert.equal(r.attempts, 2)
  const refusing = fakeClient([{ stop: 'refusal', out: null }])
  await assert.rejects(
    generateStructured({ client: refusing, label: 'test', system: 's', user: 'u', schema: programmeOutputSchema, maxTokens: 100 }),
    (e: unknown) => e instanceof AcademyGenerationError && e.code === 'refused',
  )
  assert.equal(refusing.calls, 1)
})

t('diagnostic: unsupported subjects return no questions; supported ones are shuffled Question objects', async () => {
  const req = { subject: 'Sourdough bread', availableMinutes: 60, selfLevel: 'beginner' as const, language: 'en' as const }
  const off = await generateDiagnostic(fakeClient([{ out: { subjectSupported: false, subjectTitle: 'Sourdough', questions: [] } }]), req)
  assert.equal(off.supported, false)
  assert.equal(off.questions.length, 0)
  const out = diagnosticOutputSchema.parse({ subjectSupported: true, subjectTitle: 'Local LLMs', questions: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => gq(n)) })
  const on = await generateDiagnostic(fakeClient([{ out }]), { ...req, subject: 'Local LLMs' })
  assert.equal(on.questions.length, 8, 'capped at 8')
  assert.ok(on.questions.every((q) => q.kind === 'diagnostic' && q.options[q.correctIndex].startsWith('Right')))
})

t('store: quick check and programme survive reload; a screen without its data falls back to setup', () => {
  const s = memoryStorage()
  const qc = { forSubject: 'k', subjectTitle: 'T', questions: [toQuestion(gq(1), 'diagnostic')], answers: {} }
  saveAcademyState(JSON.parse(JSON.stringify({ version: 1, view: 'diagnostic', draft, quickCheck: qc })), s)
  const back = loadAcademyState(s)
  assert.equal(back.view, 'diagnostic')
  assert.equal(back.quickCheck?.questions[0].prompt, 'Question 1?')
  assert.equal(migrateAcademyState({ version: 1, view: 'programme', draft }).view, 'setup')
})

void Promise.all(pending).then(() => {if (failed) {
  console.log(`\n${failed} test(s) failed`)
  process.exit(1)
}
console.log('\nAll Academy tests passed')
})

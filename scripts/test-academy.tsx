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
import { finalTestSize, clampProgramme, contentMinutes, programmeProblems, testMinutes } from '../src/lib/academy/programme'
import { diagnosticOutputSchema, programmeOutputSchema, type GeneratedQuestion, type ProgrammeOutput } from '../src/lib/academy/schemas'
import type { Programme, Question } from '../src/lib/academy/types'
import { articleText, finalizeLesson, findMaterial, generateLesson, lessonProblems, stripLinks, toMaterial } from '../src/lib/academy/lesson'
import { addActiveTime, markLessonDone, nextOpenLesson, openLesson } from '../src/lib/academy/progress'
import { getArticle } from '../src/lib/mcp/tools'
import { balancedPick, generateQuiz, QuizShortError, topicPlan, verifyQuestions } from '../src/lib/academy/quiz'
import { countingFinal, isCompleted, PASS_MARK, programmeScore, scoreQuiz } from '../src/lib/academy/scoring'

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

// ------------------------------------------------------------------------------------------ Phase 3

t('lessons: material keeps only real article pages, as absolute URLs, deduplicated', () => {
  const m = toMaterial([
    { title: 'Frameworks', description: '', url: 'https://www.promptquorum.com/frameworks', hub: 'site' },
    { title: 'Directory', description: '', url: '/de/directory', hub: 'power-local-llm' },
    { title: 'Q levels', description: 'd', url: '/de/local-llms/quantization-levels-comparison', hub: 'local-llms' },
    { title: 'Q levels again', description: 'd', url: '/de/local-llms/quantization-levels-comparison', hub: 'local-llms' },
    { title: 'VRAM', description: 'd', url: '/prompt-bites/how-much-vram-for-local-llm', hub: 'prompt-bites' },
  ])
  assert.deepEqual(m.map((x) => x.url), ['https://www.promptquorum.com/de/local-llms/quantization-levels-comparison', 'https://www.promptquorum.com/prompt-bites/how-much-vram-for-local-llm'])
  assert.deepEqual(m.map((x) => x.ref), [1, 2])
  assert.equal(m[0].cluster, 'local-llms')
})

t('lessons: real search finds readable PromptQuorum articles in en and de', () => {
  for (const [lang, title] of [['en', 'Quantization levels in practice'], ['de', 'Quantisierungsstufen in der Praxis']] as const) {
    const m = findMaterial({ subject: 'Local LLMs', language: lang, lesson: { title, topic: 'Quantization', estimatedMinutes: 10, objectiveIds: [0] } })
    assert.ok(m.length >= 2, `${lang}: ${m.length} pages`)
    assert.ok(m.every((x) => x.url.startsWith('https://www.promptquorum.com/')), lang)
    const a = getArticle({ cluster: m[0].cluster, slug: m[0].slug, lang })
    const text = articleText(a.article, 5000)
    assert.ok(text.length > 500 && !/<[a-z]+[ >]/i.test(text), `${lang}: article text ${text.length} chars, no HTML`)
  }
})

t('lessons: links, URLs, HTML and headings are removed from lesson text', () => {
  const out = stripLinks('See [the guide](https://evil.example/x) or https://foo.bar/y and www.spam.com now.\n## Heading\n<b>bold</b> **kept**')
  assert.ok(!/https?:|www\.|\]\(|<b>|^##/m.test(out), out)
  assert.ok(out.includes('the guide') && out.includes('**kept**'))
})

t('lessons (SPEC acceptance): further-reading URLs are 100% from the content search, never from the model', async () => {
  const req = { subject: 'Local LLMs', language: 'en' as const, selfLevel: 'beginner' as const, objectives: ['Choose a quantization level'], lesson: { title: 'Quantization levels in practice', topic: 'Quantization', estimatedMinutes: 8, objectiveIds: [0] }, index: 0, otherTitles: [] }
  const out = {
    sections: [
      { heading: 'Why quantization', body: 'Read [this](https://invented.example/page) first. https://made-up.example' },
      { heading: 'Levels', body: 'Q4 vs Q8.' },
      { heading: 'Choosing', body: 'Pick by RAM.' },
    ],
    furtherReading: [{ ref: 1 }, { ref: 99 }, { ref: 1 }, { ref: 2 }],
  }
  const lesson = await generateLesson(fakeClient([{ out }]), req)
  assert.ok(lesson.furtherReading.length >= 1, 'picked something')
  for (const r of lesson.furtherReading) {
    assert.ok(lesson.materialUrls.includes(r.url), `not from search: ${r.url}`)
    assert.equal(r.source, 'promptquorum')
  }
  assert.equal(new Set(lesson.furtherReading.map((r) => r.url)).size, lesson.furtherReading.length, 'no duplicates')
  assert.ok(!lesson.sections.some((x) => /invented|made-up|https?:/.test(x.body)), 'model URLs stripped from text')
})

t('lessons: rule check flags section count, overlong text and unknown material numbers', () => {
  const req = { subject: 'x'.repeat(5), language: 'en' as const, selfLevel: 'some' as const, objectives: ['o'], lesson: { title: 't', topic: 'p', estimatedMinutes: 2, objectiveIds: [0], recap: true }, index: 0, otherTitles: [] }
  const long = { heading: 'h', body: 'word '.repeat(500) }
  const p = lessonProblems({ sections: [long, long], furtherReading: [{ ref: 5 }] }, req, 3)
  assert.ok(p.some((x) => x.startsWith('sections')) && p.some((x) => x.includes('words')) && p.some((x) => x.startsWith('furtherReading')), p.join(' | '))
  assert.equal(finalizeLesson({ sections: [{ heading: 'a', body: 'b' }], furtherReading: [{ ref: 7 }] }, []).furtherReading.length, 0)
})

function sampleProgramme(testMode: Programme['testMode'] = 'final'): Programme {
  const lessons = [1, 2].map((n) => ({ id: `lesson-${n}`, title: `L${n}`, topic: 'T', estimatedMinutes: 10, objectiveIds: [0], sections: [], furtherReading: [] }))
  return {
    id: 'p', createdAt: '', language: 'en', subject: 'S', availableMinutes: 30, selfLevel: 'beginner', testMode,
    diagnostic: { questions: [], answers: {}, gaps: [], estimatedLevel: 'beginner' }, objectives: ['o'], lessons,
    testPlan: { finalQuestions: 10, lessonQuizQuestions: 0, testMinutes: 8 },
    progress: { currentLesson: 0, lessonStatus: { 'lesson-1': 'todo', 'lesson-2': 'todo' }, quizResults: [], secondsSpent: 0, startedAt: '' },
  }
}

t('progress: active time is capped at 3x the lesson estimate; status never goes back from done', () => {
  let p = sampleProgramme()
  for (let i = 0; i < 1000; i++) p = addActiveTime(p, 'lesson-1', 5)
  assert.equal(p.progress.lessonSeconds?.['lesson-1'], 10 * 60 * 3)
  assert.equal(p.progress.secondsSpent, 1800)
  p = markLessonDone(p, 0)
  p = openLesson(p, 0)
  assert.equal(p.progress.lessonStatus['lesson-1'], 'done')
  assert.equal(nextOpenLesson(p), 1)
})

t('progress: all lessons done completes a no-test programme, but not one with tests (SPEC 9)', () => {
  const none = markLessonDone(markLessonDone(sampleProgramme('none'), 0), 1)
  assert.ok(none.progress.completedAt)
  assert.equal(nextOpenLesson(none), -1)
  const withTest = markLessonDone(markLessonDone(sampleProgramme('final'), 0), 1)
  assert.equal(withTest.progress.completedAt, undefined)
})

// ------------------------------------------------------------------------------------------ Phase 4

/**
 * Fake model for quizzes: generation calls return `make(n)` questions; verification calls answer by picking the
 * option that starts with "Right" (a verifier that knows the truth). A planted question marks a wrong answer as
 * "correct", so the honest verifier disagrees with it.
 */
function quizClient(make: (n: number) => GeneratedQuestion[]): ParseClient & { calls: { label: string }[] } {
  const calls: { label: string }[] = []
  return {
    calls,
    messages: {
      parse: (async (params: { system: { text: string }[]; messages: { content: string }[] }) => {
        const isVerify = params.system[0].text.startsWith('You check test questions')
        calls.push({ label: isVerify ? 'verify' : 'generate' })
        const usage = { input_tokens: 1, output_tokens: 1, cache_read_input_tokens: 0 }
        if (!isVerify) {
          const want = Number(/Write (\d+) questions/.exec(params.messages[0].content)?.[1] ?? 3)
          return { stop_reason: 'end_turn', parsed_output: { questions: make(want) }, usage }
        }
        const blocks = params.messages[0].content.split(/\n(?=\d+\. )/).filter((b) => /^\d+\. /.test(b))
        const answers = blocks.map((b) => {
          const n = Number(/^(\d+)\./.exec(b)![1])
          const opts = [...b.matchAll(/\n\s+([123])\) (.*)/g)].map((m) => m[2])
          const pick = opts.findIndex((o) => o.startsWith('Right'))
          return { n, choice: pick + 1 }
        })
        return { stop_reason: 'end_turn', parsed_output: { answers }, usage }
      }) as unknown as ParseClient['messages']['parse'],
    },
  }
}

const quizReq = (kind: 'lesson' | 'final', topics = ['Hardware', 'Quantization']) => ({
  kind,
  subject: 'Local LLMs',
  language: 'en' as const,
  selfLevel: 'beginner' as const,
  availableMinutes: 60,
  lessons: topics.map((t) => ({ title: `About ${t}`, topic: t, text: `Lesson text about ${t}.` })),
  objectives: ['o'],
})

t('quiz (SPEC acceptance): the verification pass rejects a deliberately wrong planted question', async () => {
  const planted: GeneratedQuestion = { ...gq(99, 'Hardware'), correct: 'Wrong but marked correct', wrong: ['Right actual answer', 'Wrong other'] }
  const client = quizClient(() => [gq(1, 'Hardware'), planted, gq(2, 'Hardware'), gq(3, 'Hardware')])
  const r = await generateQuiz(client, quizReq('lesson', ['Hardware']))
  assert.equal(r.questions.length, 3)
  assert.ok(!r.questions.some((q) => q.prompt === 'Question 99?'), 'planted question must not survive')
  assert.ok(r.rejected >= 1)
  // Direct check of the verifier on the planted question alone.
  const pq = toQuestion(planted, 'lesson')
  const ok = await verifyQuestions(quizClient(() => []), quizReq('lesson', ['Hardware']), [pq])
  assert.equal(ok.size, 0)
})

t('quiz (SPEC acceptance): correct-answer position is roughly uniform over 100 generated questions', async () => {
  let n = 0
  const client = quizClient((want) => Array.from({ length: want }, () => gq(++n, ['Hardware', 'Quantization'][n % 2])))
  const counts = [0, 0, 0]
  let total = 0
  while (total < 100) {
    const r = await generateQuiz(client, quizReq('final'))
    for (const q of r.questions) {
      counts[q.correctIndex]++
      total++
    }
  }
  for (const c of counts) assert.ok(c >= 15 && c <= 55, `positions ${counts} over ${total}`)
})

t('quiz: too many rejections after 2 rounds fail the request instead of shipping a short quiz', async () => {
  const bad = (n: number): GeneratedQuestion => ({ ...gq(n, 'Hardware'), correct: 'Wrong marked', wrong: ['Right real', 'Wrong x'] })
  const client = quizClient((want) => Array.from({ length: want }, (_, i) => bad(i)))
  await assert.rejects(generateQuiz(client, quizReq('lesson', ['Hardware'])), QuizShortError)
  assert.equal(client.calls.filter((c) => c.label === 'generate').length, 2, 'max 2 generation rounds')
})

t('quiz: final test spreads questions evenly over lesson topics', () => {
  assert.deepEqual(topicPlan(['A', 'B', 'C'], 10), { A: 4, B: 3, C: 3 })
  const qs = [...Array(8)].map((_, i) => toQuestion(gq(i, 'A'), 'final')).concat([...Array(3)].map((_, i) => toQuestion(gq(i + 20, 'B'), 'final')))
  const picked = balancedPick(qs, { A: 3, B: 3 }, 6)
  assert.deepEqual([picked.filter((q) => q.topic === 'A').length, picked.filter((q) => q.topic === 'B').length], [3, 3])
})

function scoredProgramme(mode: Programme['testMode']): Programme {
  const p = sampleProgramme(mode)
  for (const l of p.lessons) p.progress.lessonStatus[l.id] = 'done'
  return p
}
const qset = (topic: string, n: number) => Array.from({ length: n }, (_, i) => toQuestion(gq(i, topic), 'final', () => 0))
const answersFor = (qs: Question[], right: number) => Object.fromEntries(qs.map((q, i) => [q.id, i < right ? 0 : 1]))

t('scoring: final-only mode scores the final test; pass at exactly 70%; diagnostic never counts', () => {
  const p = scoredProgramme('final')
  p.diagnostic.questions = qset('X', 5) // must be ignored
  const qs = qset('Hardware', 10)
  p.progress.finalAttempts = [scoreQuiz('final-1', qs, answersFor(qs, 7))]
  const s = programmeScore(p)!
  assert.deepEqual([s.percent, s.passed, s.total], [70, true, 10])
  assert.equal(PASS_MARK, 70)
  p.progress.finalAttempts = [scoreQuiz('final-1', qs, answersFor(qs, 6))]
  assert.equal(programmeScore(p)!.passed, false)
})

t('scoring: every-lesson mode pools lesson quizzes and the final test; weak topics flagged', () => {
  const p = scoredProgramme('per_lesson_and_final')
  const l1 = qset('Hardware', 3), l2 = qset('Quantization', 3), fin = [...qset('Hardware', 5), ...qset('Quantization', 5)]
  p.progress.quizResults = [scoreQuiz('lesson-1', l1, answersFor(l1, 3)), scoreQuiz('lesson-2', l2, answersFor(l2, 1))]
  const finAns = Object.fromEntries(fin.map((q, i) => [q.id, i < 5 ? 0 : i < 7 ? 0 : 1])) // Hardware 5/5, Quantization 2/5
  p.progress.finalAttempts = [scoreQuiz('final-1', fin, finAns)]
  const s = programmeScore(p)!
  assert.equal(s.total, 16)
  assert.equal(s.correct, 3 + 1 + 7)
  assert.equal(s.percent, Math.round((11 / 16) * 100))
  assert.deepEqual(s.byTopic.filter((t) => t.weak).map((t) => t.topic), ['Quantization'])
  assert.equal(programmeScore(sampleProgramme('none')), null, 'no tests: no score')
})

t('scoring: retakes keep history; the first passing attempt counts; completion needs lessons, quizzes and a pass', () => {
  const p = scoredProgramme('final')
  const a = qset('Hardware', 10), b = qset('Hardware', 10), c = qset('Hardware', 10)
  p.progress.finalAttempts = [scoreQuiz('final-1', a, answersFor(a, 5))]
  assert.equal(isCompleted(p), false)
  p.progress.finalAttempts.push(scoreQuiz('final-2', b, answersFor(b, 8)), scoreQuiz('final-3', c, answersFor(c, 9)))
  assert.equal(countingFinal(p)!.quizId, 'final-2')
  assert.equal(programmeScore(p)!.percent, 80)
  assert.equal(isCompleted(p), true)
  const per = scoredProgramme('per_lesson_and_final')
  per.progress.finalAttempts = [scoreQuiz('final-1', a, answersFor(a, 10))]
  assert.equal(isCompleted(per), false, 'lesson quizzes missing')
})

// ------------------------------------------------------------------------------------------ sealed keys (F6)
import { judgeAnswer, openAnswerKey, sealAnswerKey, toClientQuestion } from '../src/lib/academy/seal'
import { correctIndexOf } from '../src/lib/academy/scoring'

t('F6: a client question carries no correct answer and no explanations, only a sealed key', () => {
  const full = toQuestion(gq(1), 'final', () => 2)
  const client = toClientQuestion(full, 'secret-a')
  const json = JSON.stringify(client)
  for (const leaked of ['correctIndex', 'explanationCorrect', 'explanationWrong', 'Expl']) assert.ok(!json.includes(leaked), `leaked ${leaked}`)
  assert.ok(!json.includes(full.explanationCorrect))
  assert.equal(client.options.length, 3)
  const key = openAnswerKey(client.sealed, 'secret-a')
  assert.equal(key?.id, full.id)
  assert.equal(key?.correctIndex, 2)
})

t('F6: tampered tokens and tokens sealed with another secret are rejected', () => {
  const token = sealAnswerKey({ id: 'q', correctIndex: 1, explanationCorrect: 'x', explanationWrong: [null, null, null] }, 'secret-a')
  assert.equal(openAnswerKey(token, 'secret-b'), null)
  const flipped = token.slice(0, -2) + (token.endsWith('AA') ? 'BB' : 'AA')
  assert.equal(openAnswerKey(flipped, 'secret-a'), null)
  assert.equal(openAnswerKey('not-a-token', 'secret-a'), null)
})

t('F6: the server verdict marks right, wrong and "not sure" correctly and returns the matching explanation', () => {
  const key = { id: 'q', correctIndex: 1 as const, explanationCorrect: 'why right', explanationWrong: ['why A wrong', null, 'why C wrong'] }
  assert.deepEqual(judgeAnswer(key, 1), { correct: true, correctIndex: 1, explanationCorrect: 'why right', explanationChosen: null })
  assert.equal(judgeAnswer(key, 0).correct, false)
  assert.equal(judgeAnswer(key, 0).explanationChosen, 'why A wrong')
  assert.equal(judgeAnswer(key, 2).explanationChosen, 'why C wrong')
  assert.equal(judgeAnswer(key, -1).correct, false)
  assert.equal(judgeAnswer(key, -1).explanationChosen, null)
})

t('F6: scoring from revealed verdicts equals scoring from full questions (pass mark 70% unchanged)', () => {
  const full = qset('A', 10)
  const clientQs = full.map((q) => ({ ...toClientQuestion(q, 's'), reveal: { correctIndex: q.correctIndex, explanationCorrect: q.explanationCorrect } }))
  const answers = answersFor(full, 7)
  const a = scoreQuiz('final-1', full, answers)
  const b = scoreQuiz('final-1', clientQs, answers)
  assert.equal(b.correct, a.correct)
  assert.equal(b.correct, 7)
  assert.equal(correctIndexOf(clientQs[0]), full[0].correctIndex)
  // Unrevealed questions never score as correct.
  const hidden = full.map((q) => toClientQuestion(q, 's'))
  assert.equal(scoreQuiz('final-1', hidden, answers).correct, 0)
})

t('F13: short programmes get a smaller final test so lessons keep their length', () => {
  assert.equal(finalTestSize(15), 6)
  assert.equal(finalTestSize(30), 10)
  assert.equal(finalTestSize(90), 15)
  assert.equal(testMinutes('final', 15, 5), 4.5)
  assert.equal(contentMinutes('final', 15, 5), 11)
})

void Promise.all(pending).then(() => {if (failed) {
  console.log(`\n${failed} test(s) failed`)
  process.exit(1)
}
console.log('\nAll Academy tests passed')
})

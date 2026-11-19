'use client'

// PromptQuorum Academy — the tool itself. One component, several screens (setup → quick check → …), like the
// Ask Hans window: screens are views inside /academy, not URLs, so no learner page ever needs to be indexed.
// State lives in localStorage only (see useAcademyState / src/lib/academy/store.ts).

import { useCallback, useEffect, useRef, useState } from 'react'
import { ACADEMY_MINUTE_OPTIONS, ACADEMY_STATE_EVENT, ACADEMY_SUBJECT_MAX_CHARS, ACADEMY_SUBJECT_MIN_CHARS } from '@/lib/academy/config'
import { clearAcademyState, defaultDraft } from '@/lib/academy/store'
import { summarizeDiagnostic } from '@/lib/academy/diagnostic-summary'
import { lessonsDone, nextOpenLesson, openLesson } from '@/lib/academy/progress'
import { programmeScore } from '@/lib/academy/scoring'
import type { AcademyErrorCode } from '@/lib/academy/route-errors'
import { LEVELS, TEST_MODES, type AcademyLang, type Lesson, type Level, type Programme, type Question, type QuickCheck, type SetupDraft, type TestMode, type TopicSuggestion } from '@/lib/academy/types'
import { ALL_LANGS } from '@/lib/i18n/constants'
import { ACADEMY_COPY, ACADEMY_LANGUAGE_NAMES, type AcademyCopy } from './copy'
import { Content } from './Content'
import { LessonView } from './LessonView'
import { QuizView } from './QuizView'
import { ResultsView } from './ResultsView'
import { useAcademyState } from './useAcademyState'

export function AcademyApp({ lang, topics }: { lang: AcademyLang; topics: TopicSuggestion[] }) {
  const tx = ACADEMY_COPY[lang]
  const { state, ready, saved, pending, continueSaved, discardSaved, update } = useAcademyState()

  // No draft yet (first visit, or data just deleted): a fresh one in memory only. Saved progress from an earlier
  // visit is never restored silently; the setup screen offers "Continue" / "Start new" (F3).
  useEffect(() => {
    if (!ready) return
    if (!state.draft) update((s) => ({ ...s, view: 'setup', draft: defaultDraft(lang) }), false)
  }, [ready, state.draft, update, lang])

  const draft = state.draft
  if (!ready || !draft) {
    return <div className="h-96 animate-pulse rounded-2xl border border-purple-100 bg-white" aria-busy="true" aria-label={tx.loading} />
  }

  return (
    <div className="space-y-4">
      {!saved && (
        <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900" role="status">
          {tx.storageBlocked}
        </p>
      )}
      {state.view === 'quiz' && state.programme ? (
        <QuizView tx={tx} programme={state.programme} update={update} postJson={postJson} errorText={(code) => errorText(tx, code)} />
      ) : state.view === 'results' && state.programme && programmeScore(state.programme) ? (
        <ResultsView tx={tx} programme={state.programme} update={update} />
      ) : state.view === 'lesson' && state.programme ? (
        <LessonView tx={tx} programme={state.programme} update={update} postJson={postJson} errorText={(code) => errorText(tx, code)} />
      ) : state.view === 'programme' && state.programme ? (
        <ProgrammeView
          tx={tx}
          programme={state.programme}
          onOpenLesson={(i) => update((s) => (s.programme ? { ...s, view: 'lesson', programme: openLesson(s.programme, i) } : s))}
          onStartQuiz={(quizId) =>
            update((s) =>
              s.programme
                ? {
                    ...s,
                    view: 'quiz',
                    programme:
                      s.programme.progress.activeQuiz?.quizId === quizId
                        ? s.programme
                        : { ...s.programme, progress: { ...s.programme.progress, activeQuiz: { quizId, questions: [], answers: {} } } },
                  }
                : s,
            )
          }
          onShowResults={() => update((s) => ({ ...s, view: 'results' }))}
          onStartOver={() => update((s) => ({ ...s, view: 'setup', quickCheck: undefined, programme: undefined }))}
        />
      ) : state.view === 'diagnostic' ? (
        <QuickCheckView tx={tx} draft={draft} quickCheck={state.quickCheck} update={update} />
      ) : (
        <SetupForm
          tx={tx}
          draft={draft}
          topics={topics}
          pendingSubject={pending?.programme?.subject ?? pending?.draft?.subject ?? null}
          onContinue={continueSaved}
          onChange={(patch) => update((s) => ({ ...s, draft: { ...(s.draft ?? draft), ...patch, updatedAt: new Date().toISOString() } }))}
          onStartNew={discardSaved}
          onSubmit={() =>
            update((s) => {
              const d = { ...(s.draft ?? draft), subject: (s.draft ?? draft).subject.trim() }
              // A changed setup makes the old quick check and programme stale.
              const sameCheck = s.quickCheck?.forSubject === quickCheckKey(d)
              const sameProgramme = sameCheck && s.programme && programmeKey(s.programme) === programmeKey(d)
              return {
                ...s,
                draft: d,
                quickCheck: sameCheck ? s.quickCheck : undefined,
                programme: sameProgramme ? s.programme : undefined,
                view: sameProgramme ? 'programme' : 'diagnostic',
              }
            })
          }
        />
      )}
      <PrivacyStrip tx={tx} />
    </div>
  )
}

function SetupForm({
  tx,
  draft,
  topics,
  pendingSubject,
  onContinue,
  onChange,
  onStartNew,
  onSubmit,
}: {
  tx: AcademyCopy
  draft: SetupDraft
  topics: TopicSuggestion[]
  /** saved progress found in this browser (null = none): offered as Continue / Start new */
  pendingSubject: string | null
  onContinue: () => void
  onChange: (patch: Partial<SetupDraft>) => void
  onStartNew: () => void
  onSubmit: () => void
}) {
  const [error, setError] = useState(false)
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (draft.subject.trim().length < ACADEMY_SUBJECT_MIN_CHARS) {
      setError(true)
      return
    }
    onSubmit()
  }
  const change = (patch: Partial<SetupDraft>) => {
    setError(false)
    onChange(patch)
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-6 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
      {pendingSubject !== null && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-purple-50 px-4 py-3 text-sm text-purple-900" role="status">
          <span>{tx.savedFound(pendingSubject)}</span>
          <span className="flex gap-4">
            <button type="button" onClick={onContinue} className="font-semibold text-purple-800 underline underline-offset-2">
              {tx.continueSaved}
            </button>
            <button type="button" onClick={onStartNew} className="font-medium text-purple-700 underline underline-offset-2">
              {tx.startNew}
            </button>
          </span>
        </div>
      )}

      <div>
        <label htmlFor="academy-subject" className="block font-medium text-gray-900">
          {tx.subjectLabel}
        </label>
        <input
          id="academy-subject"
          type="text"
          value={draft.subject}
          maxLength={ACADEMY_SUBJECT_MAX_CHARS}
          onChange={(e) => change({ subject: e.target.value })}
          placeholder={tx.subjectPlaceholder}
          className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-base focus:border-purple-600 focus:outline-none"
          aria-invalid={error || undefined}
          aria-describedby={error ? 'academy-subject-error' : undefined}
        />
        {error && (
          <p id="academy-subject-error" className="mt-2 text-sm text-red-700">
            {tx.subjectError}
          </p>
        )}
        <p className="mt-2 text-sm text-gray-600">{tx.personalDataWarning}</p>
        {topics.length > 0 && (
          <div className="mt-3">
            <p className="text-sm text-gray-600">{tx.suggestions}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {topics.map((t) => {
                const active = draft.subject === t.label
                return (
                  <li key={t.key}>
                    <button
                      type="button"
                      title={t.hint}
                      aria-pressed={active}
                      onClick={() => change({ subject: t.label })}
                      className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                        active ? 'border-purple-600 bg-purple-600 text-white' : 'border-purple-200 bg-white text-purple-900 hover:bg-purple-50'
                      }`}
                    >
                      {t.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>

      <fieldset>
        <legend className="font-medium text-gray-900">{tx.timeLegend}</legend>
        <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8">
          {ACADEMY_MINUTE_OPTIONS.map((m) => (
            <label key={m} className="cursor-pointer">
              <input
                type="radio"
                name="academy-minutes"
                value={m}
                checked={draft.availableMinutes === m}
                onChange={() => change({ availableMinutes: m })}
                className="peer sr-only"
              />
              <span className="block whitespace-nowrap rounded-xl border border-gray-300 px-1 py-2 text-center text-sm peer-checked:border-purple-600 peer-checked:bg-purple-600 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-purple-600">
                {tx.minutes(m)}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <ChoiceGroup<Level> legend={tx.levelLegend} name="academy-level" values={LEVELS} labels={tx.levels} value={draft.selfLevel} onChange={(v) => change({ selfLevel: v })} />
      <ChoiceGroup<TestMode> legend={tx.testsLegend} name="academy-tests" values={TEST_MODES} labels={tx.tests} value={draft.testMode} onChange={(v) => change({ testMode: v })} />

      <div>
        <label htmlFor="academy-language" className="block font-medium text-gray-900">
          {tx.languageLabel}
        </label>
        <select
          id="academy-language"
          value={draft.language}
          onChange={(e) => change({ language: e.target.value as AcademyLang })}
          className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base sm:w-auto"
        >
          {ALL_LANGS.map((l) => (
            <option key={l} value={l}>
              {ACADEMY_LANGUAGE_NAMES[l]}
            </option>
          ))}
        </select>
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-800">
        <input
          type="checkbox"
          checked={draft.saveProgress}
          onChange={(e) => change({ saveProgress: e.target.checked })}
          className="mt-1 h-4 w-4 shrink-0 accent-purple-600"
        />
        <span>
          <span className="block font-medium text-gray-900">{tx.saveProgressLabel}</span>
          <span className="block text-gray-600">{tx.saveProgressHint}</span>
        </span>
      </label>

      <button type="submit" className="w-full rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 sm:w-auto">
        {tx.submit}
      </button>
      <p className="text-sm text-gray-600">{tx.ageNotice}</p>
    </form>
  )
}

function ChoiceGroup<T extends string>({
  legend,
  name,
  values,
  labels,
  value,
  onChange,
}: {
  legend: string
  name: string
  values: readonly T[]
  labels: Record<T, { label: string; hint: string }>
  value: T
  onChange: (v: T) => void
}) {
  return (
    <fieldset>
      <legend className="font-medium text-gray-900">{legend}</legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        {values.map((v) => (
          <label key={v} className="cursor-pointer">
            <input type="radio" name={name} value={v} checked={value === v} onChange={() => onChange(v)} className="peer sr-only" />
            <span className="block h-full rounded-xl border border-gray-300 px-4 py-3 peer-checked:border-purple-600 peer-checked:bg-purple-50 peer-focus-visible:ring-2 peer-focus-visible:ring-purple-600">
              <span className="block font-medium text-gray-900">{labels[v].label}</span>
              <span className="block text-sm text-gray-600">{labels[v].hint}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

// ------------------------------------------------------------------------------------------- server calls

type ApiResult<T> = { ok: true; data: T } | { ok: false; code: AcademyErrorCode | 'network' }

async function postJson<T>(url: string, body: unknown): Promise<ApiResult<T>> {
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    const json = (await res.json().catch(() => null)) as (T & { error?: AcademyErrorCode }) | null
    if (!res.ok || !json) return { ok: false, code: json?.error ?? 'failed' }
    return { ok: true, data: json }
  } catch {
    return { ok: false, code: 'network' }
  }
}

function errorText(tx: AcademyCopy, code: AcademyErrorCode | 'network'): string {
  if (code === 'rate') return tx.errorRate
  if (code === 'unsupported_subject') return tx.errorUnsupported
  if (code === 'disabled' || code === 'unavailable') return tx.errorUnavailable
  return tx.errorGeneric
}

/** The setup fields a quick check depends on. */
export function quickCheckKey(d: Pick<SetupDraft, 'subject' | 'availableMinutes' | 'selfLevel' | 'language'>): string {
  return JSON.stringify([d.subject, d.availableMinutes, d.selfLevel, d.language])
}
/** The setup fields a programme depends on (the quick check's plus the test mode). */
export function programmeKey(d: Pick<SetupDraft, 'subject' | 'availableMinutes' | 'selfLevel' | 'language' | 'testMode'>): string {
  return JSON.stringify([d.subject, d.availableMinutes, d.selfLevel, d.language, d.testMode])
}

type Update = ReturnType<typeof useAcademyState>['update']

function Busy({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white p-6 text-gray-700" role="status" aria-live="polite">
      <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" aria-hidden="true" />
      {text}
    </div>
  )
}

function ErrorBox({ tx, code, onRetry, onBack }: { tx: AcademyCopy; code: AcademyErrorCode | 'network'; onRetry?: () => void; onBack: () => void }) {
  return (
    <div className="space-y-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900" role="alert">
      <p>{errorText(tx, code)}</p>
      <div className="flex flex-wrap gap-3">
        {onRetry && code !== 'unsupported_subject' && (
          <button type="button" onClick={onRetry} className="rounded-xl bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700">
            {tx.retry}
          </button>
        )}
        <button type="button" onClick={onBack} className="rounded-xl border border-red-300 bg-white px-4 py-2 font-medium text-red-900">
          {tx.changeSetup}
        </button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------------------------- quick check

function QuickCheckView({ tx, draft, quickCheck, update }: { tx: AcademyCopy; draft: SetupDraft; quickCheck?: QuickCheck; update: Update }) {
  const [phase, setPhase] = useState<'idle' | 'loading' | 'building'>('idle')
  const [error, setError] = useState<{ code: AcademyErrorCode | 'network'; step: 'questions' | 'programme' } | null>(null)
  const started = useRef(false)
  const back = () => update((s) => ({ ...s, view: 'setup' }))

  const loadQuestions = useCallback(async () => {
    setError(null)
    setPhase('loading')
    const res = await postJson<{ subjectTitle: string; questions: Question[] }>('/api/academy/diagnostic', {
      subject: draft.subject,
      availableMinutes: draft.availableMinutes,
      selfLevel: draft.selfLevel,
      language: draft.language,
    })
    setPhase('idle')
    if (!res.ok) return setError({ code: res.code, step: 'questions' })
    update((s) => ({ ...s, quickCheck: { forSubject: quickCheckKey(draft), subjectTitle: res.data.subjectTitle, questions: res.data.questions, answers: {} } }))
  }, [draft, update])

  const buildProgramme = useCallback(
    async (qc: QuickCheck) => {
      setError(null)
      setPhase('building')
      const summary = summarizeDiagnostic(qc.questions, qc.answers)
      const res = await postJson<{ objectives: string[]; lessons: ProgrammeLessonPlan[]; testPlan: Programme['testPlan'] }>('/api/academy/programme', {
        subject: draft.subject,
        availableMinutes: draft.availableMinutes,
        selfLevel: draft.selfLevel,
        testMode: draft.testMode,
        language: draft.language,
        diagnostic: { estimatedLevel: summary.estimatedLevel, gaps: summary.gaps.slice(0, 12), known: summary.known.slice(0, 12) },
      })
      setPhase('idle')
      if (!res.ok) return setError({ code: res.code, step: 'programme' })
      const programme = toProgramme(draft, qc, summary, res.data)
      update((s) => ({ ...s, programme, view: 'programme' }))
    },
    [draft, update],
  )

  // First visit to this screen: fetch the questions once (a ref guards against React's double effect in dev).
  useEffect(() => {
    if (quickCheck || started.current) return
    started.current = true
    void loadQuestions()
  }, [quickCheck, loadQuestions])

  if (error) {
    return <ErrorBox tx={tx} code={error.code} onBack={back} onRetry={() => (error.step === 'questions' ? loadQuestions() : quickCheck && buildProgramme(quickCheck))} />
  }
  if (phase === 'loading' || !quickCheck) return <Busy text={tx.preparingQuestions} />
  if (phase === 'building') return <Busy text={tx.preparingProgramme} />

  const total = quickCheck.questions.length
  const index = quickCheck.questions.findIndex((q) => !(q.id in quickCheck.answers))
  if (index === -1) {
    // All answered (e.g. the page was reloaded while the programme was being built): build it now.
    return (
      <div className="space-y-3">
        <Busy text={tx.preparingProgramme} />
        <AutoRun run={() => buildProgramme(quickCheck)} />
      </div>
    )
  }
  const q = quickCheck.questions[index]
  const answer = (choice: number) => {
    const next: QuickCheck = { ...quickCheck, answers: { ...quickCheck.answers, [q.id]: choice } }
    update((s) => ({ ...s, quickCheck: next }))
    if (index === total - 1) void buildProgramme(next)
  }

  return (
    <section aria-labelledby="academy-diagnostic" className="space-y-5 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
      <div>
        <h2 id="academy-diagnostic" className="text-xl font-semibold text-gray-900">
          {tx.diagnosticTitle}: {quickCheck.subjectTitle}
        </h2>
        <p className="mt-1 text-sm text-gray-600">{tx.diagnosticIntro}</p>
      </div>
      <div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{tx.questionOf(index + 1, total)}</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-purple-100" aria-hidden="true">
          <div className="h-full bg-purple-600 transition-all" style={{ width: `${(index / total) * 100}%` }} />
        </div>
      </div>
      <fieldset key={q.id}>
        <legend className="text-lg font-medium text-gray-900">{q.prompt}</legend>
        <div className="mt-3 grid gap-2">
          {q.options.map((o, i) => (
            <button
              key={i}
              type="button"
              onClick={() => answer(i)}
              className="rounded-xl border border-gray-300 px-4 py-3 text-start hover:border-purple-600 hover:bg-purple-50 focus-visible:ring-2 focus-visible:ring-purple-600"
            >
              {o}
            </button>
          ))}
          <button type="button" onClick={() => answer(-1)} className="rounded-xl px-4 py-2 text-start text-sm text-gray-600 underline underline-offset-2 hover:text-purple-700">
            {tx.notSure}
          </button>
        </div>
      </fieldset>
      <button type="button" onClick={back} className="text-sm text-purple-700 underline underline-offset-2">
        {tx.changeSetup}
      </button>
    </section>
  )
}

/** Runs `run` once after mount. */
function AutoRun({ run }: { run: () => void }) {
  const done = useRef(false)
  useEffect(() => {
    if (done.current) return
    done.current = true
    run()
  }, [run])
  return null
}

type ProgrammeLessonPlan = { title: string; topic: string; estimatedMinutes: number; objectiveIds: number[]; recap: boolean }

function toProgramme(
  d: SetupDraft,
  qc: QuickCheck,
  summary: ReturnType<typeof summarizeDiagnostic>,
  plan: { objectives: string[]; lessons: ProgrammeLessonPlan[]; testPlan: Programme['testPlan'] },
): Programme {
  const now = new Date().toISOString()
  const lessons: Lesson[] = plan.lessons.map((l, i) => ({
    id: `lesson-${i + 1}`,
    title: l.title,
    topic: l.topic,
    estimatedMinutes: l.estimatedMinutes,
    objectiveIds: l.objectiveIds,
    recap: l.recap,
    sections: [],
    furtherReading: [],
  }))
  return {
    id: crypto.randomUUID(),
    createdAt: now,
    language: d.language,
    subject: qc.subjectTitle || d.subject,
    availableMinutes: d.availableMinutes,
    selfLevel: d.selfLevel,
    testMode: d.testMode,
    diagnostic: { questions: qc.questions, answers: qc.answers, gaps: summary.gaps, estimatedLevel: summary.estimatedLevel },
    objectives: plan.objectives,
    lessons,
    testPlan: plan.testPlan,
    progress: {
      currentLesson: 0,
      lessonStatus: Object.fromEntries(lessons.map((l) => [l.id, 'todo' as const])),
      quizResults: [],
      secondsSpent: 0,
      startedAt: now,
    },
  }
}

// ------------------------------------------------------------------------------------------ programme view

function ProgrammeView({
  tx,
  programme,
  onOpenLesson,
  onStartQuiz,
  onShowResults,
  onStartOver,
}: {
  tx: AcademyCopy
  programme: Programme
  onOpenLesson: (index: number) => void
  onStartQuiz: (quizId: string) => void
  onShowResults: () => void
  onStartOver: () => void
}) {
  const reading = programme.lessons.reduce((s, l) => s + l.estimatedMinutes, 0)
  const total = reading + programme.testPlan.testMinutes
  const { finalQuestions, lessonQuizQuestions } = programme.testPlan
  const testLine =
    programme.testMode === 'none' ? tx.testPlanNone : programme.testMode === 'final' ? tx.testPlanFinal(finalQuestions) : tx.testPlanPerLesson(lessonQuizQuestions, finalQuestions)
  const next = nextOpenLesson(programme)
  const done = lessonsDone(programme)
  const minutesSpent = Math.round(programme.progress.secondsSpent / 60)
  const active = programme.progress.activeQuiz
  const hasFinal = (programme.progress.finalAttempts?.length ?? 0) > 0
  // "Every lesson" mode: a lesson marked done without its quiz (e.g. the quiz was left) gets the quiz first.
  const missingQuiz =
    programme.testMode === 'per_lesson_and_final'
      ? programme.lessons.findIndex((l) => programme.progress.lessonStatus[l.id] === 'done' && !programme.progress.quizResults.some((r) => r.quizId === l.id))
      : -1
  return (
    <section aria-labelledby="academy-programme" className="space-y-5 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
      <div>
        <h2 id="academy-programme" className="text-xl font-semibold text-gray-900">
          {tx.programmeTitle}: {programme.subject}
        </h2>
        <p className="mt-1 text-sm text-gray-600">{tx.totalTime(tx.minutes(total))}</p>
        {minutesSpent > 0 && <p className="text-sm text-gray-600">{tx.timeSpent(tx.minutes(minutesSpent))}</p>}
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-purple-100" role="progressbar" aria-valuemin={0} aria-valuemax={programme.lessons.length} aria-valuenow={done}>
          <div className="h-full bg-purple-600 transition-all" style={{ width: `${(done / programme.lessons.length) * 100}%` }} />
        </div>
      </div>
      {next === -1 && (
        <div className="rounded-xl bg-green-50 px-4 py-3 text-green-900" role="status">
          <p className="font-medium">{tx.lessonsDoneTitle}</p>
          {programme.testMode === 'none' && <p className="text-sm">{tx.programmeComplete}</p>}
        </div>
      )}
      <div>
        <h3 className="font-medium text-gray-900">{tx.objectivesTitle}</h3>
        <Content lang={programme.language}>
          <ul className="mt-2 list-disc space-y-1 ps-5 text-gray-700">
            {programme.objectives.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </Content>
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{tx.lessonsTitle}</h3>
        <Content lang={programme.language}>
        <ol className="mt-2 space-y-2">
          {programme.lessons.map((l, i) => {
            const isDone = programme.progress.lessonStatus[l.id] === 'done'
            return (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => onOpenLesson(i)}
                  className="flex w-full items-start gap-3 rounded-xl border border-gray-200 px-4 py-3 text-start hover:border-purple-400 hover:bg-purple-50"
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${isDone ? 'bg-green-600 text-white' : 'bg-purple-100 text-purple-700'}`}
                    aria-hidden="true"
                  >
                    {isDone ? '✓' : i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium text-gray-900">
                      {l.title}
                      {l.recap && <span className="ms-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-normal text-gray-600">{tx.recapBadge}</span>}
                      {isDone && <span className="ms-2 rounded-full bg-green-50 px-2 py-0.5 text-xs font-normal text-green-800">{tx.statusDone}</span>}
                    </span>
                    <span className="block text-sm text-gray-500">{l.topic}</span>
                  </span>
                  <span className="shrink-0 whitespace-nowrap text-sm text-gray-500">{tx.minutes(l.estimatedMinutes)}</span>
                </button>
              </li>
            )
          })}
        </ol>
        </Content>
      </div>
      <p className="text-sm text-gray-700">{testLine}</p>
      <div className="flex flex-wrap gap-3">
        {active ? (
          <button type="button" onClick={() => onStartQuiz(active.quizId)} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
            {tx.continueQuiz}
          </button>
        ) : missingQuiz >= 0 ? (
          <button type="button" onClick={() => onStartQuiz(programme.lessons[missingQuiz].id)} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
            {tx.lessonQuizTitle(missingQuiz + 1)}
          </button>
        ) : next !== -1 ? (
          <button type="button" onClick={() => onOpenLesson(next)} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
            {next === 0 && done === 0 ? tx.startLesson : tx.continueLesson(next + 1)}
          </button>
        ) : programme.testMode !== 'none' && !hasFinal ? (
          <button type="button" onClick={() => onStartQuiz('final')} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
            {tx.startFinalTest}
          </button>
        ) : null}
        {hasFinal && (
          <button type="button" onClick={onShowResults} className="rounded-xl border border-purple-300 px-6 py-3 font-semibold text-purple-800 hover:bg-purple-50">
            {tx.seeResults}
          </button>
        )}
      </div>
      <div>
        <button type="button" onClick={onStartOver} className="text-sm text-purple-700 underline underline-offset-2">
          {tx.startOver}
        </button>
      </div>
    </section>
  )
}

function PrivacyStrip({ tx }: { tx: AcademyCopy }) {
  const [deleted, setDeleted] = useState(false)
  return (
    <div className="space-y-2 rounded-2xl bg-gray-50 px-5 py-4 text-sm text-gray-600">
      <p>{tx.privacyNote}</p>
      <button
        type="button"
        className="underline underline-offset-2 hover:text-purple-700"
        onClick={() => {
          if (!window.confirm(tx.deleteConfirm)) return
          clearAcademyState()
          window.dispatchEvent(new Event(ACADEMY_STATE_EVENT))
          setDeleted(true)
        }}
      >
        {deleted ? tx.dataDeleted : tx.deleteData}
      </button>
    </div>
  )
}

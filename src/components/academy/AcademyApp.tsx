'use client'

// PromptQuorum Academy — the tool itself. One component, several screens (setup → quick check → …), like the
// Ask Hans window: screens are views inside /academy, not URLs, so no learner page ever needs to be indexed.
// State lives in localStorage only (see useAcademyState / src/lib/academy/store.ts).

import { CabinetPrompt, CabinetView } from './CabinetView'
import { CABINET_COPY } from './cabinet-copy'
import { cabinetAvailable, clearCabinet, getCabinetFlag, putProgramme, requestPersistence, setCabinetFlag, type CabinetFlag } from '@/lib/academy/cabinet'
import { Mark, press } from './press'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ACADEMY_CONTACT_EMAIL, ACADEMY_MINUTE_OPTIONS, ACADEMY_PREFS_KEY, ACADEMY_STATE_EVENT, ACADEMY_SUBJECT_MAX_CHARS, ACADEMY_SUBJECT_MIN_CHARS, ACADEMY_TUTOR_OK_KEY, ACADEMY_USED_KEY } from '@/lib/academy/config'
import { clearPrefs, loadPrefs, savePrefs } from '@/lib/academy/prefs'
import { clearAcademyState, defaultDraft } from '@/lib/academy/store'
import { summarizeDiagnostic } from '@/lib/academy/diagnostic-summary'
import { addActivity, clearLessonContent, lessonsDone, nextOpenLesson, openLesson, setFreeWish, setLessonNote } from '@/lib/academy/progress'
import { ActivityTracker, type ActivityTarget } from './ActivityTracker'
import { programmeScore } from '@/lib/academy/scoring'
import type { AcademyErrorCode } from '@/lib/academy/route-errors'
import { LEVELS, SETUP_FIELDS, TEST_DIFFICULTIES, TEST_FORMATS, TEST_MODES, type AcademyLang, type Lesson, type Level, type Programme, type Question, type QuickCheck, type SetupDraft, type SetupField, type TestDifficulty, type TestFormat, type TestMode, type TopicSuggestion } from '@/lib/academy/types'
import { ALL_LANGS } from '@/lib/i18n/constants'
import { TERMS } from '@/lib/terms/content'
import { isSiteLang, parseCustomLanguage } from '@/lib/academy/language'
import { ACADEMY_COPY, ACADEMY_LANGUAGE_NAMES, type AcademyCopy } from './copy'
import { Content } from './Content'
import { LessonView } from './LessonView'
import { QuizRouter } from './QuizRouter'
import { ResultsView } from './ResultsView'
import { ShareBar } from './ShareBar'
import { FreeWishLine, LessonTuner, TuneBadge } from './TopicTuner'
import { SHARE_COPY, shareCopyFor } from './copy/share'
import { WaitNote } from './WaitNote'
import { ChoiceOptionsPicker } from './ChoiceOptionsPicker'
import { feedbackBody, recordAcademyError } from './feedback-context'
import { prefetchLesson } from './lesson-loader'
import { trackGrowth } from './SuccessShare'
import { downloadBlob } from '@/components/askhans/power/export/download'
import { academyUrl } from './share-plan'
import { ACADEMY_STREAK_EVENT, ACADEMY_STREAK_KEY, CHALLENGE_STORAGE_KEY, currentStreak, recordActiveDay, reminderIcs, sanitizeBeat, sanitizeChallengeSubject } from '@/lib/academy/challenge'
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

  // Coming back to the Academy (window reopened, or back from another page) after a program was finished and its
  // certificate created: land on the setup form so a new program can be started right away. The finished program stays
  // in memory behind the "Continue" link of the banner, so its result can still be opened.
  const parkedOnce = useRef(false)
  useEffect(() => {
    if (!ready || !state.draft || parkedOnce.current) return
    parkedOnce.current = true
    if (state.programme?.certificate && state.view !== 'setup' && state.view !== 'cabinet') {
      update((s) => ({ ...s, view: 'setup', quickCheck: undefined, draft: s.draft ? { ...s.draft, subject: '', updatedAt: new Date().toISOString() } : s.draft }), false)
    }
  }, [ready, state.draft, state.programme, state.view, update])

  // While the program overview is on screen, lesson 1 (the next open lesson) already starts being written, so "Start" opens it
  // without a wait. A failed background start is silent; the lesson screen then loads it normally.
  const overviewProgramme = state.view === 'programme' ? state.programme : undefined
  useEffect(() => {
    if (!ready || !overviewProgramme) return
    const i = nextOpenLesson(overviewProgramme)
    if (i < 0 || overviewProgramme.lessons[i].sections.length) return
    const id = window.setTimeout(() => prefetchLesson({ programme: overviewProgramme, index: i, update, postJson }), 4000)
    return () => window.clearTimeout(id)
  }, [ready, overviewProgramme, update])

  // A challenge link ("beat my 85% in X", opened via AcademyRoot) prefills the subject and shows the score to beat.
  const [challengeBeat, setChallengeBeat] = useState<number | null>(null)
  useEffect(() => {
    if (!ready || !state.draft) return
    try {
      const raw = sessionStorage.getItem(CHALLENGE_STORAGE_KEY)
      if (!raw) return
      sessionStorage.removeItem(CHALLENGE_STORAGE_KEY)
      const c = JSON.parse(raw) as { subject?: string; beat?: number }
      const subject = sanitizeChallengeSubject(c.subject)
      if (!subject) return
      setChallengeBeat(sanitizeBeat(String(c.beat)))
      update((s) => ({ ...s, view: s.programme ? s.view : 'setup', draft: { ...(s.draft ?? defaultDraft(lang)), subject, updatedAt: new Date().toISOString() } }), false)
    } catch {
      /* unreadable challenge: ignored */
    }
  }, [ready, state.draft, update, lang])

  // Learning streak: one more finished lesson or quiz = this calendar day counts (kept only in this browser).
  const activity = state.programme ? lessonsDone(state.programme) + state.programme.progress.quizResults.length + (state.programme.progress.finalAttempts?.length ?? 0) : 0
  const prevActivity = useRef<number | null>(null)
  useEffect(() => {
    if (!ready) return
    // Only a step of one counts: loading another saved program changes the total by more and is not new activity.
    if (prevActivity.current !== null && activity === prevActivity.current + 1) recordActiveDay()
    prevActivity.current = activity
  }, [ready, activity])

  // The cabinet: a local library of every program (browser database on this computer, never sent to PromptQuorum).
  const [cabinetFlag, setCabinetFlagState] = useState<CabinetFlag>(null)
  const [cabinetOk, setCabinetOk] = useState(false)
  useEffect(() => {
    setCabinetOk(cabinetAvailable())
    setCabinetFlagState(getCabinetFlag())
  }, [])
  // While the cabinet is on, the current program is kept in it (shortly after every change).
  useEffect(() => {
    const p = state.programme
    if (cabinetFlag !== 'on' || !p) return
    const t = window.setTimeout(() => void putProgramme(p).catch(() => {}), 1200)
    return () => window.clearTimeout(t)
  }, [cabinetFlag, state.programme])
  const createCabinet = () => {
    setCabinetFlag('on')
    setCabinetFlagState('on')
    requestPersistence()
    if (state.programme) void putProgramme(state.programme).catch(() => {})
  }
  const declineCabinet = () => {
    setCabinetFlag('declined')
    setCabinetFlagState('declined')
  }
  const askCabinet = ready && cabinetOk && cabinetFlag === null && !!state.programme && lessonsDone(state.programme) >= 1 && state.view !== 'cabinet'

  const draft = state.draft
  // Once a program exists, its screens (quick check, program overview, lesson, quiz; the results screen has its own certificate-language chooser and stays in the page language) use the program language when the site
  // has that language, so labels like "Writing the lesson…" or "Deeper" match the lesson text. For a custom
  // language (e.g. Swahili) the site has no UI texts, so they stay in the page language.
  const programLang = state.programme?.language ?? draft?.language
  const learnLang: AcademyLang = programLang && isSiteLang(programLang) ? programLang : lang
  const ltx = ACADEMY_COPY[learnLang]
  const learning = ['diagnostic', 'programme', 'lesson', 'quiz'].includes(state.view)
  const stripLang: AcademyLang = learning || state.view === 'results' ? learnLang : lang
  const learnProps = learning && learnLang !== lang ? { lang: learnLang, dir: learnLang === 'ar' ? ('rtl' as const) : ('ltr' as const) } : {}
  // Where active time is booked: the open lesson, or the open test. Other screens (overview, results) count nothing.
  const prog = state.programme
  const activityTarget: ActivityTarget =
    prog && state.view === 'lesson' && prog.lessons[prog.progress.currentLesson]
      ? { kind: 'lesson', id: prog.lessons[prog.progress.currentLesson].id }
      : prog && state.view === 'quiz' && prog.progress.activeQuiz
        ? { kind: 'test', id: prog.progress.activeQuiz.quizId }
        : null
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
      {askCabinet && <CabinetPrompt lang={lang} onCreate={createCabinet} onDecline={declineCabinet} />}
      {cabinetOk && ['setup', 'programme'].includes(state.view) && (
        <div className="flex justify-end">
          <button type="button" onClick={() => update((s) => ({ ...s, view: 'cabinet' }))} className="rounded-xl border border-purple-300 bg-white px-4 py-2 text-sm font-medium text-purple-800 hover:bg-purple-50">
            <span aria-hidden="true">🗄️ </span>
            {CABINET_COPY[lang].openButton}
          </button>
        </div>
      )}
      {state.programme && <ActivityTracker target={activityTarget} onTick={(t, sec, fresh) => update((s) => (s.programme ? { ...s, programme: addActivity(s.programme, t, sec, fresh) } : s))} />}
      <div {...learnProps}>
      {state.view === 'cabinet' ? (
        <CabinetView lang={lang} update={update} flag={cabinetFlag} onFlag={setCabinetFlagState} current={state.programme} />
      ) : state.view === 'quiz' && state.programme ? (
        <QuizRouter tx={ltx} programme={state.programme} update={update} postJson={postJson} errorText={(code) => errorText(ltx, code)} />
      ) : state.view === 'results' && state.programme && programmeScore(state.programme) ? (
        <ResultsView tx={tx} lang={lang} programme={state.programme} update={update} />
      ) : state.view === 'lesson' && state.programme ? (
        <LessonView tx={ltx} programme={state.programme} update={update} postJson={postJson} errorText={(code) => errorText(ltx, code)} />
      ) : state.view === 'programme' && state.programme ? (
        <ProgrammeView
          tx={ltx}
          lang={learnLang}
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
          // "Start over" also empties the subject field, so new text is not appended to the old subject (F12).
          onSaveNote={(i, note, confirmed) => update((s) => (s.programme ? { ...s, programme: setLessonNote(s.programme, i, note, confirmed) } : s))}
          onRewriteLesson={(i) => update((s) => (s.programme ? { ...s, programme: clearLessonContent(s.programme, i) } : s))}
          onSaveFreeWish={(text) => update((s) => (s.programme ? { ...s, programme: setFreeWish(s.programme, text) } : s))}
          onStartOver={() => update((s) => ({ ...s, view: 'setup', quickCheck: undefined, programme: undefined, draft: s.draft ? { ...s.draft, subject: '', picked: [] } : s.draft }))}
        />
      ) : state.view === 'diagnostic' ? (
        <QuickCheckView tx={ltx} draft={draft} quickCheck={state.quickCheck} update={update} />
      ) : (
        <>
          {challengeBeat !== null && (
            <p className="rounded-xl bg-fuchsia-50 px-4 py-3 text-sm font-medium text-fuchsia-900" role="status">
              <span aria-hidden="true">🏆 </span>
              {SHARE_COPY[lang].challengeBanner(challengeBeat)}
            </p>
          )}
        <SetupForm
          tx={tx}
          lang={lang}
          draft={draft}
          topics={topics}
          pendingSubject={pending?.programme?.subject ?? pending?.draft?.subject ?? state.programme?.subject ?? null}
          onContinue={() => (pending ? continueSaved() : update((s) => ({ ...s, view: s.programme && programmeScore(s.programme) ? 'results' : 'programme' }), false))}
          onChange={(patch) =>
            update((s) => {
              const base = s.draft ?? draft
              // Chosen lines are merged into the latest state, so two quick clicks never lose one of them.
              const picked = patch.picked && base.picked !== undefined ? Array.from(new Set([...base.picked, ...patch.picked])) : patch.picked ?? base.picked
              return { ...s, draft: { ...base, ...patch, picked, updatedAt: new Date().toISOString() } }
            })
          }
          onStartNew={() => (pending ? discardSaved() : update((s) => ({ ...s, programme: undefined, quickCheck: undefined, draft: s.draft ? { ...s.draft, picked: [] } : s.draft }), false))}
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
                // The answer-option count is a test setting, not part of the program plan: an unchanged plan is kept with the new count.
                programme: sameProgramme && s.programme ? { ...s.programme, choiceOptions: d.choiceOptions ?? 3 } : undefined,
                view: sameProgramme ? 'programme' : 'diagnostic',
              }
            })
          }
        />
        </>
      )}
      </div>
      {/* Once the learner works in their program language, the notes below follow it (a German course on an English page shows German). */}
      <div {...(stripLang !== lang ? { lang: stripLang, dir: stripLang === 'ar' ? ('rtl' as const) : ('ltr' as const) } : {})}>
        <PrivacyStrip tx={ACADEMY_COPY[stripLang]} lang={stripLang} />
      </div>
    </div>
  )
}

const OTHER_LANGUAGE = '__other'

function SetupForm({
  tx,
  lang,
  draft,
  topics,
  pendingSubject,
  onContinue,
  onChange,
  onStartNew,
  onSubmit,
}: {
  tx: AcademyCopy
  lang: AcademyLang
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
  // Lines the learner has to choose themselves (nothing is preselected) and that were still empty at the last start press.
  const [missing, setMissing] = useState<SetupField[]>([])
  const [remember, setRemember] = useState(false)
  const picked = (f: SetupField) => draft.picked === undefined || draft.picked.includes(f)
  const customLang = parseCustomLanguage(draft.language)
  const [otherMode, setOtherMode] = useState(!!customLang)
  const [otherText, setOtherText] = useState(customLang?.name ?? '')
  const [langState, setLangState] = useState<'idle' | 'checking' | 'bad'>('idle')
  // "Other language": the typed text is checked on the server (a real language: name, code, direction) before it is used.
  const checkLanguage = async () => {
    setLangState('checking')
    const res = await postJson<{ language: string; name: string }>('/api/academy/language', { text: otherText.trim() })
    if (!res.ok) return setLangState('bad')
    setOtherText(res.data.name)
    setLangState('idle')
    onChange({ language: res.data.language })
  }
  // The learner's own earlier choices, only if they ticked "Remember these choices" (they are then preselected and count as chosen).
  const freshForm = draft.picked !== undefined && draft.picked.length === 0
  useEffect(() => {
    if (!freshForm) return
    const prefs = loadPrefs()
    if (!prefs) return
    setRemember(true)
    onChange({ ...prefs, picked: [...SETUP_FIELDS] })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs when the form becomes empty (mount, "Start over")
  }, [freshForm])

  /** The lines this setup needs: the test sub-lines exist only once tests were chosen and are on. */
  const neededFields = (): SetupField[] => {
    const f: SetupField[] = ['time', 'level', 'tests']
    if (picked('tests') && draft.testMode !== 'none') {
      f.push('format', 'difficulty')
      if (picked('format') && (draft.testFormat ?? 'choice') === 'choice') f.push('options')
    }
    return f
  }
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (draft.subject.trim().length < ACADEMY_SUBJECT_MIN_CHARS) {
      setError(true)
      return
    }
    // Nothing starts on a value the learner did not choose: every empty line is marked and the form scrolls to the first.
    const empty = neededFields().filter((f) => !picked(f))
    if (empty.length > 0) {
      setMissing(empty)
      document.getElementById(`academy-field-${empty[0]}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    // "Other language" chosen but not checked yet: check it first, the programme starts with the next press.
    if (otherMode && !customLang) {
      if (langState !== 'checking') void checkLanguage()
      return
    }
    // Opt-in: remember (or forget) the learner's choices for the next setup form.
    if (remember) {
      savePrefs({ availableMinutes: draft.availableMinutes, selfLevel: draft.selfLevel, testMode: draft.testMode, testFormat: draft.testFormat ?? 'choice', testDifficulty: draft.testDifficulty ?? 'medium', choiceOptions: draft.choiceOptions ?? 3 })
    } else {
      clearPrefs()
    }
    onSubmit()
  }
  const change = (patch: Partial<SetupDraft>) => {
    setError(false)
    onChange(patch)
  }
  /** A click on one of the choice lines: set the value and mark the line as chosen. */
  const choose = (field: SetupField, patch: Partial<SetupDraft>) => {
    setMissing((m) => m.filter((x) => x !== field))
    change({ ...patch, picked: Array.from(new Set([...(draft.picked ?? SETUP_FIELDS), field])) })
  }
  const lineError = (field: SetupField) =>
    missing.includes(field) ? (
      <p className="mt-2 text-sm font-medium text-red-700" role="alert">
        {tx.chooseLine}
      </p>
    ) : null
  const lineClass = (field: SetupField) => (missing.includes(field) ? 'rounded-2xl ring-2 ring-red-300 ring-offset-4' : '')

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
        <div className="mt-2 flex gap-2">
          <input
            id="academy-subject"
            type="text"
            value={draft.subject}
            maxLength={ACADEMY_SUBJECT_MAX_CHARS}
            onChange={(e) => change({ subject: e.target.value })}
            placeholder={tx.subjectPlaceholder}
            className="min-w-0 flex-1 rounded-xl border border-gray-300 px-4 py-3 text-base focus:border-purple-600 focus:outline-none"
            aria-invalid={error || undefined}
            aria-describedby={error ? 'academy-subject-error' : undefined}
          />
          {/* Same action as pressing Enter in the field (the form's submit handler validates the subject). */}
          <button type="submit" className="shrink-0 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white hover:bg-purple-700">
            {tx.sendSubject}
          </button>
        </div>
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
                      {...press(() => change({ subject: t.label }))}
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

      <fieldset id="academy-field-time" className={lineClass('time')}>
        <legend className="font-medium text-gray-900">{tx.timeLegend}</legend>
        <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8">
          {ACADEMY_MINUTE_OPTIONS.map((m) => (
            <label key={m} className="cursor-pointer" onPointerDown={press(() => choose('time', { availableMinutes: m })).onPointerDown}>
              <input
                type="radio"
                name="academy-minutes"
                value={m}
                checked={picked('time') && draft.availableMinutes === m}
                onChange={() => choose('time', { availableMinutes: m })}
                className="peer sr-only"
              />
              <span className="block whitespace-nowrap rounded-xl border border-gray-300 px-1 py-2 text-center text-sm peer-checked:border-purple-600 peer-checked:bg-purple-600 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-purple-600">
                {tx.minutes(m)}
              </span>
            </label>
          ))}
        </div>
        {lineError('time')}
      </fieldset>

      <div id="academy-field-level" className={lineClass('level')}>
        <ChoiceGroup<Level> legend={tx.levelLegend} name="academy-level" values={LEVELS} labels={tx.levels} value={picked('level') ? draft.selfLevel : null} onChange={(v) => choose('level', { selfLevel: v })} />
        {lineError('level')}
      </div>
      <div id="academy-field-tests" className={lineClass('tests')}>
        <ChoiceGroup<TestMode> legend={tx.testsLegend} name="academy-tests" values={TEST_MODES} labels={tx.tests} value={picked('tests') ? draft.testMode : null} onChange={(v) => choose('tests', { testMode: v })} />
        {lineError('tests')}
      </div>
      {picked('tests') && draft.testMode !== 'none' && (
        <div id="academy-field-format" className={lineClass('format')}>
          <ChoiceGroup<TestFormat> legend={tx.testFormatLegend} name="academy-test-format" values={TEST_FORMATS} labels={tx.testFormats} value={picked('format') ? (draft.testFormat ?? 'choice') : null} onChange={(v) => choose('format', { testFormat: v })} />
          {lineError('format')}
        </div>
      )}
      {picked('tests') && draft.testMode !== 'none' && picked('format') && (draft.testFormat ?? 'choice') === 'choice' && (
        <div id="academy-field-options" className={lineClass('options')}>
          <ChoiceOptionsPicker lang={lang} name="academy-choice-options" value={picked('options') ? (draft.choiceOptions ?? 3) : 0} onChange={(n) => choose('options', { choiceOptions: n })} />
          {lineError('options')}
        </div>
      )}
      {picked('tests') && draft.testMode !== 'none' && (
        <div id="academy-field-difficulty" className={lineClass('difficulty')}>
          <ChoiceGroup<TestDifficulty> legend={tx.testDifficultyLegend} name="academy-test-difficulty" values={TEST_DIFFICULTIES} labels={tx.testDifficulties} value={picked('difficulty') ? (draft.testDifficulty ?? 'medium') : null} onChange={(v) => choose('difficulty', { testDifficulty: v })} />
          {lineError('difficulty')}
        </div>
      )}

      <div>
        <label htmlFor="academy-language" className="block font-medium text-gray-900">
          {tx.languageLabel}
        </label>
        <select
          id="academy-language"
          value={otherMode ? OTHER_LANGUAGE : draft.language}
          onChange={(e) => {
            if (e.target.value === OTHER_LANGUAGE) {
              setOtherMode(true)
              return
            }
            setOtherMode(false)
            setLangState('idle')
            change({ language: e.target.value as AcademyLang })
          }}
          className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base sm:w-auto"
        >
          {ALL_LANGS.map((l) => (
            <option key={l} value={l}>
              {ACADEMY_LANGUAGE_NAMES[l]}
            </option>
          ))}
          <option value={OTHER_LANGUAGE}>{tx.lang.other}</option>
        </select>
        {otherMode && (
          <div className="mt-3 space-y-2">
            <label htmlFor="academy-language-other" className="block text-sm font-medium text-gray-900">
              {tx.lang.otherLabel}
            </label>
            <div className="flex flex-wrap gap-2">
              <input
                id="academy-language-other"
                type="text"
                value={otherText}
                maxLength={40}
                placeholder={tx.lang.otherPlaceholder}
                onChange={(e) => {
                  setOtherText(e.target.value)
                  setLangState('idle')
                }}
                autoComplete="off"
                className="w-full max-w-xs rounded-xl border border-gray-300 px-4 py-2 text-base focus:border-purple-600 focus:outline-none"
              />
              <button
                type="button"
                disabled={otherText.trim().length < 2 || langState === 'checking'}
                onClick={() => void checkLanguage()}
                className="rounded-xl border border-purple-600 px-4 py-2 font-medium text-purple-700 hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {langState === 'checking' ? tx.lang.checking : tx.lang.check}
              </button>
            </div>
            <p className="text-sm" role="status">
              {customLang && langState !== 'bad' ? <span className="text-green-800">{tx.lang.ok(customLang.name)}</span> : langState === 'bad' ? <span className="text-red-800">{tx.lang.invalid}</span> : null}
            </p>
          </div>
        )}
        {(otherMode || !isSiteLang(draft.language)) && <p className="mt-2 max-w-xl text-sm text-gray-600">{tx.lang.note}</p>}
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-800">
        <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-purple-600" />
        <span>
          <span className="block font-medium text-gray-900">{tx.rememberLabel}</span>
          <span className="block text-gray-600">{tx.rememberHint}</span>
        </span>
      </label>

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

      {missing.length > 0 && (
        <p className="text-sm font-medium text-red-700" role="alert">
          {tx.chooseAll}
        </p>
      )}
      <button type="submit" className="w-full rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 sm:w-auto">
        {tx.submit}
      </button>
      <p className="text-sm text-gray-600">
        {tx.ageNotice}{' '}
        <a href={lang === 'en' ? '/terms' : `/${lang}/terms`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-purple-700">
          {TERMS[lang].title}
        </a>
      </p>
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
  /** null = nothing chosen yet (no line is preselected on the setup form) */
  value: T | null
  onChange: (v: T) => void
}) {
  return (
    <fieldset>
      <legend className="font-medium text-gray-900">{legend}</legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        {values.map((v) => (
          <label key={v} className="cursor-pointer" onPointerDown={press(() => onChange(v)).onPointerDown}>
            <input type="radio" name={name} value={v} checked={value === v} onChange={() => onChange(v)} className="peer sr-only" />
            <span className="flex h-full items-start gap-3 rounded-xl border border-gray-300 px-4 py-3 peer-checked:border-purple-600 peer-checked:bg-purple-50 peer-focus-visible:ring-2 peer-focus-visible:ring-purple-600">
              <Mark state={value === v ? 'selected' : 'idle'} />
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-gray-900">{labels[v].label}</span>
                <span className="block text-sm text-gray-600">{labels[v].hint}</span>
              </span>
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
    if (!res.ok || !json) {
      recordAcademyError(url, json?.error ?? 'failed')
      return { ok: false, code: json?.error ?? 'failed' }
    }
    return { ok: true, data: json }
  } catch {
    recordAcademyError(url, 'network')
    return { ok: false, code: 'network' }
  }
}

function errorText(tx: AcademyCopy, code: AcademyErrorCode | 'network'): string {
  if (code === 'rate') return tx.errorRate
  if (code === 'unsupported_subject') return tx.errorUnsupported
  if (code === 'disabled' || code === 'unavailable' || code === 'busy') return tx.errorUnavailable
  return tx.errorGeneric
}

/** The setup fields a quick check depends on. */
export function quickCheckKey(d: Pick<SetupDraft, 'subject' | 'availableMinutes' | 'selfLevel' | 'language'>): string {
  return JSON.stringify([d.subject, d.availableMinutes, d.selfLevel, d.language])
}
/** The setup fields a programme depends on (the quick check's plus the test mode). */
export function programmeKey(d: Pick<SetupDraft, 'subject' | 'availableMinutes' | 'selfLevel' | 'language' | 'testMode'> & { testFormat?: TestFormat }): string {
  // The format only changes the time budget (written answers take longer), but a changed budget needs a new programme.
  return JSON.stringify([d.subject, d.availableMinutes, d.selfLevel, d.language, d.testMode, d.testMode === 'none' ? 'choice' : (d.testFormat ?? 'choice')])
}

type Update = ReturnType<typeof useAcademyState>['update']

function Busy({ text, wait }: { text: string; /** program language: also shows why it takes a moment (see WaitNote) */ wait?: string }) {
  return (
    <div className="space-y-4 rounded-2xl border border-purple-100 bg-white p-6 text-gray-700">
      <div className="flex items-center gap-3" role="status" aria-live="polite">
        <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" aria-hidden="true" />
        {text}
      </div>
      {wait && <WaitNote language={wait} />}
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
  // Choice made on the question on screen, shown with green / red feedback until the learner presses "Next".
  const [shown, setShown] = useState<number | null>(null)
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
        testFormat: draft.testFormat ?? 'choice',
        language: draft.language,
        diagnostic: { estimatedLevel: summary.estimatedLevel, gaps: summary.gaps.slice(0, 12), known: summary.known.slice(0, 12) },
      })
      setPhase('idle')
      if (!res.ok) return setError({ code: res.code, step: 'programme' })
      const programme = toProgramme(draft, qc, summary, res.data)
      // Anonymous adoption signal for the promo pilot (academy_programme_started per page group). No subject, no text.
      try {
        window.umami?.track('academy_programme_started', { source_page: window.location.pathname })
      } catch {
        /* analytics must never block the learner */
      }
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
  if (phase === 'loading' || !quickCheck) return <Busy text={tx.preparingQuestions} wait={draft.language} />
  if (phase === 'building') return <Busy text={tx.preparingProgramme} wait={draft.language} />

  const total = quickCheck.questions.length
  const index = quickCheck.questions.findIndex((q) => !(q.id in quickCheck.answers))
  if (index === -1) {
    // All answered (e.g. the page was reloaded while the programme was being built): build it now.
    return (
      <div className="space-y-3">
        <Busy text={tx.preparingProgramme} wait={draft.language} />
        <AutoRun run={() => buildProgramme(quickCheck)} />
      </div>
    )
  }
  const q = quickCheck.questions[index]
  // The answer is recorded when the learner moves on, after seeing whether it was right.
  const goNext = () => {
    if (shown === null) return
    const next: QuickCheck = { ...quickCheck, answers: { ...quickCheck.answers, [q.id]: shown } }
    setShown(null)
    update((s) => ({ ...s, quickCheck: next }))
    if (index === total - 1) void buildProgramme(next)
  }
  const answered = shown !== null
  const rightPicked = shown === q.correctIndex

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
          {q.options.map((o, i) => {
            const state = !answered ? 'idle' : i === q.correctIndex ? 'correct' : i === shown ? 'wrong' : 'other'
            const cls = {
              idle: 'border-gray-300 hover:border-purple-600 hover:bg-purple-50',
              correct: 'border-green-600 bg-green-50 text-green-900',
              wrong: 'border-red-500 bg-red-50 text-red-900',
              other: 'border-gray-200 text-gray-500',
            }[state]
            return (
              <button key={i} type="button" {...press(() => setShown(i))} disabled={answered} aria-pressed={shown === i} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-start focus-visible:ring-2 focus-visible:ring-purple-600 ${cls}`}>
                <Mark state={state === 'correct' ? 'correct' : state === 'wrong' ? 'wrong' : shown === i ? 'selected' : 'idle'} />
                <span className="min-w-0 flex-1">{o}</span>
              </button>
            )
          })}
          {!answered && (
            <button type="button" {...press(() => setShown(-1))} className="rounded-xl px-4 py-2 text-start text-sm text-gray-600 underline underline-offset-2 hover:text-purple-700">
              {tx.notSure}
            </button>
          )}
        </div>
      </fieldset>
      {answered && (
        <div className={`space-y-2 rounded-xl p-4 text-sm ${rightPicked ? 'bg-green-50 text-green-900' : 'bg-amber-50 text-amber-900'}`} role="status" aria-live="polite">
          {shown !== -1 && <p className="font-semibold">{rightPicked ? tx.correctFeedback : tx.wrongFeedback}</p>}
          <p>{q.explanationCorrect}</p>
          {!rightPicked && shown !== null && shown >= 0 && q.explanationWrong[shown] && <p>{q.explanationWrong[shown]}</p>}
          <button type="button" onClick={goNext} className="mt-1 rounded-xl bg-purple-600 px-5 py-2 font-medium text-white hover:bg-purple-700">
            {tx.nextQuestion}
          </button>
        </div>
      )}
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

type ProgrammeLessonPlan = { title: string; summary?: string; topic: string; estimatedMinutes: number; objectiveIds: number[]; recap: boolean }

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
    summary: l.summary?.trim() || undefined,
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
    testFormat: d.testFormat ?? 'choice',
    testDifficulty: d.testDifficulty ?? 'medium',
    choiceOptions: d.choiceOptions ?? 3,
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
  lang,
  programme,
  onOpenLesson,
  onStartQuiz,
  onShowResults,
  onSaveNote,
  onRewriteLesson,
  onSaveFreeWish,
  onStartOver,
}: {
  tx: AcademyCopy
  lang: AcademyLang
  programme: Programme
  onOpenLesson: (index: number) => void
  onStartQuiz: (quizId: string) => void
  onShowResults: () => void
  onSaveNote: (index: number, note: string, confirmed: boolean) => void
  onRewriteLesson: (index: number) => void
  onSaveFreeWish: (text: string) => void
  onStartOver: () => void
}) {
  const sx = SHARE_COPY[lang]
  const [streak, setStreak] = useState(0)
  useEffect(() => {
    const read = () => setStreak(currentStreak())
    read()
    window.addEventListener(ACADEMY_STREAK_EVENT, read)
    return () => window.removeEventListener(ACADEMY_STREAK_EVENT, read)
  }, [])
  // Weekly reminder: a calendar file the learner opens in their own calendar; nothing is stored or sent by PromptQuorum.
  const addReminder = () => {
    trackGrowth('reminder')
    downloadBlob(new Blob([reminderIcs(sx.reminderTitle, academyUrl(lang))], { type: 'text/calendar;charset=utf-8' }), 'promptquorum-academy-weekly.ics')
  }
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
        {programme.testMode !== 'none' && <p className="text-sm text-gray-600">{tx.testSplit(reading, Math.round(programme.testPlan.testMinutes))}</p>}
        {minutesSpent > 0 && <p className="text-sm text-gray-600">{tx.timeSpent(tx.minutes(minutesSpent))}</p>}
        <div className="mt-2 flex flex-wrap items-center gap-3">
          {streak >= 2 && (
            <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-800">
              <span aria-hidden="true">🔥 </span>
              {sx.streak(streak)}
            </span>
          )}
          <button type="button" onClick={addReminder} className="text-sm font-medium text-purple-800 underline underline-offset-2 hover:text-purple-600">
            {sx.reminder}
          </button>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-purple-100" role="progressbar" aria-valuemin={0} aria-valuemax={programme.lessons.length} aria-valuenow={done}>
          <div className="h-full bg-purple-600 transition-all" style={{ width: `${(done / programme.lessons.length) * 100}%` }} />
        </div>
      </div>
      {next === -1 && (
        <div className="rounded-xl bg-green-50 px-4 py-3 text-green-900" role="status">
          <p className="font-medium">{tx.lessonsDoneTitle}</p>
          {programme.testMode === 'none' ? <p className="text-sm">{tx.programmeComplete}</p> : !hasFinal && <p className="text-sm">{tx.lessonsDoneNextTest}</p>}
        </div>
      )}
      <ShareBar lang={lang} programme={programme} />
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
                <LessonTuner
                  lang={lang}
                  contentLang={programme.language}
                  lesson={l}
                  done={isDone}
                  onSave={(note, confirmed) => onSaveNote(i, note, confirmed)}
                  onRewrite={() => onRewriteLesson(i)}
                >
                  <button type="button" onClick={() => onOpenLesson(i)} className="flex h-full w-full items-start gap-3 rounded-s-xl px-4 py-3 text-start hover:bg-purple-50">
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
                        <TuneBadge lang={lang} lesson={l} />
                      </span>
                      <span className="block text-sm text-gray-500">{l.topic}</span>
                    </span>
                    <span className="shrink-0 whitespace-nowrap text-sm text-gray-500">{tx.minutes(l.estimatedMinutes)}</span>
                  </button>
                </LessonTuner>
              </li>
            )
          })}
        </ol>
        </Content>
        <FreeWishLine lang={lang} value={programme.freeWish ?? ''} onSave={onSaveFreeWish} />
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

function PrivacyStrip({ tx, lang }: { tx: AcademyCopy; lang: AcademyLang }) {
  const [deleted, setDeleted] = useState(false)
  return (
    <div className="space-y-2 rounded-2xl bg-gray-50 px-5 py-4 text-sm text-gray-600">
      <p>{tx.privacyNote}</p>
      <button
        type="button"
        className="underline underline-offset-2 hover:text-purple-700"
        onClick={() => {
          const hasCabinet = getCabinetFlag() === 'on'
          if (!window.confirm(hasCabinet ? `${tx.deleteConfirm}\n\n${CABINET_COPY[lang].deleteAlso}` : tx.deleteConfirm)) return
          clearAcademyState()
          void clearCabinet()
          try {
            localStorage.removeItem(ACADEMY_USED_KEY)
            localStorage.removeItem(ACADEMY_TUTOR_OK_KEY)
            localStorage.removeItem(ACADEMY_STREAK_KEY)
            localStorage.removeItem(ACADEMY_PREFS_KEY)
          } catch {
            /* blocked */
          }
          window.dispatchEvent(new Event(ACADEMY_STATE_EVENT))
          setDeleted(true)
        }}
      >
        {deleted ? tx.dataDeleted : tx.deleteData}
      </button>
      <FeedbackMail tx={tx} lang={lang} />
    </div>
  )
}

/** "Send feedback by email": a plain mailto link to the site owner, so nothing about the learner touches our server.
 *  The mail carries only the language and the page; no subject, answers or programme content. The click is counted
 *  anonymously (a plain total). */
function FeedbackMail({ tx, lang }: { tx: AcademyCopy; lang: AcademyLang }) {
  const open = () => {
    const body = feedbackBody({ intro: tx.feedbackMailIntro, note: shareCopyFor(lang).mailDataNote, uiLang: lang })
    void fetch('/api/academy/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'feedback_mail' }) }).catch(() => {})
    window.location.href = `mailto:${ACADEMY_CONTACT_EMAIL}?subject=${encodeURIComponent(tx.feedbackMailSubject)}&body=${encodeURIComponent(body)}`
  }
  return (
    <div className="space-y-1 pt-1">
      <button type="button" className="font-medium text-purple-700 underline underline-offset-2 hover:text-purple-900" onClick={open}>
        {tx.feedbackLink}
      </button>
      <p className="text-xs text-gray-500">{tx.feedbackNote}</p>
      <p className="text-xs text-gray-500">{shareCopyFor(lang).mailDataNote}</p>
    </div>
  )
}

'use client'

// PromptQuorum Academy — the tool itself. One component, several screens (setup → quick check → …), like the
// Ask Hans window: screens are views inside /academy, not URLs, so no learner page ever needs to be indexed.
// State lives in localStorage only (see useAcademyState / src/lib/academy/store.ts).

import { useEffect, useState } from 'react'
import { ACADEMY_MINUTE_OPTIONS, ACADEMY_STATE_EVENT, ACADEMY_SUBJECT_MAX_CHARS, ACADEMY_SUBJECT_MIN_CHARS } from '@/lib/academy/config'
import { clearAcademyState, defaultDraft } from '@/lib/academy/store'
import { LEVELS, TEST_MODES, type AcademyLang, type Level, type SetupDraft, type TestMode, type TopicSuggestion } from '@/lib/academy/types'
import { ALL_LANGS } from '@/lib/i18n/constants'
import { ACADEMY_COPY, ACADEMY_LANGUAGE_NAMES, type AcademyCopy } from './copy'
import { useAcademyState } from './useAcademyState'

export function AcademyApp({ lang, topics }: { lang: AcademyLang; topics: TopicSuggestion[] }) {
  const tx = ACADEMY_COPY[lang]
  const { state, ready, saved, update } = useAcademyState()
  const [restored, setRestored] = useState<boolean | null>(null)

  // After storage was read: a stored draft means "restored"; no draft (first visit, or data just deleted) gets a
  // fresh one in memory only. It is written to storage on the learner's first change, so "Delete my data" leaves nothing.
  useEffect(() => {
    if (!ready) return
    if (!state.draft) {
      setRestored(false)
      update((s) => ({ ...s, view: 'setup', draft: defaultDraft(lang) }), false)
    } else if (restored === null) {
      setRestored(true)
    }
  }, [ready, restored, state.draft, update, lang])

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
      {state.view === 'diagnostic' ? (
        <DiagnosticPlaceholder tx={tx} draft={draft} onBack={() => update((s) => ({ ...s, view: 'setup' }))} />
      ) : (
        <SetupForm
          tx={tx}
          draft={draft}
          topics={topics}
          restored={restored === true}
          onChange={(patch) => update((s) => ({ ...s, draft: { ...(s.draft ?? draft), ...patch, updatedAt: new Date().toISOString() } }))}
          onStartNew={() => {
            update((s) => ({ ...s, view: 'setup', draft: defaultDraft(lang) }))
            setRestored(false)
          }}
          onSubmit={() => update((s) => ({ ...s, view: 'diagnostic', draft: { ...(s.draft ?? draft), subject: (s.draft ?? draft).subject.trim() } }))}
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
  restored,
  onChange,
  onStartNew,
  onSubmit,
}: {
  tx: AcademyCopy
  draft: SetupDraft
  topics: TopicSuggestion[]
  restored: boolean
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
      {restored && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-purple-50 px-4 py-3 text-sm text-purple-900" role="status">
          <span>{tx.restored}</span>
          <button type="button" onClick={onStartNew} className="font-medium text-purple-700 underline underline-offset-2">
            {tx.startNew}
          </button>
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

      <button type="submit" className="w-full rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 sm:w-auto">
        {tx.submit}
      </button>
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

/** Phase 1 placeholder; Phase 2 replaces it with the generated quick-check questions. */
function DiagnosticPlaceholder({ tx, draft, onBack }: { tx: AcademyCopy; draft: SetupDraft; onBack: () => void }) {
  const rows: [string, string][] = [
    [tx.summarySubject, draft.subject],
    [tx.summaryTime, tx.minutes(draft.availableMinutes)],
    [tx.summaryLevel, tx.levels[draft.selfLevel].label],
    [tx.summaryTests, tx.tests[draft.testMode].label],
    [tx.summaryLanguage, ACADEMY_LANGUAGE_NAMES[draft.language]],
  ]
  return (
    <section aria-labelledby="academy-diagnostic" className="space-y-4 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
      <h2 id="academy-diagnostic" className="text-xl font-semibold text-gray-900">
        {tx.diagnosticTitle}
      </h2>
      <p className="text-gray-600">{tx.diagnosticComing}</p>
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="text-gray-500">{k}</dt>
            <dd className="text-gray-900">{v}</dd>
          </div>
        ))}
      </dl>
      <button type="button" onClick={onBack} className="text-purple-700 underline underline-offset-2">
        {tx.changeSetup}
      </button>
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

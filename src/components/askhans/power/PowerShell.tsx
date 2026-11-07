'use client'

// Ask Hans Power Mode — the screen inside the chat window: process buttons → guided questions → report.
// Loaded on demand (next/dynamic in AskHansRoot) so none of this weighs on ordinary page loads.
// Back / Esc always go up one level: report or question → previous question → process list → chat.
// The questions are deterministic forms; only the report is written by the AI (/api/ask/solution).

import { useCallback, useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { PROCESSES, PROCESS_ORDER, MAX_NOTE_CHARS, MAX_TEXT_CHARS, visibleSteps } from '@/lib/askhans/solutions/processes'
import type { HardwareAnswers, MobileAnswers, ProcessId, SolutionAnswers, StepDef } from '@/lib/askhans/solutions/types'
import type { Language } from '@/lib/blog/blogContent'
import { ConsentNotice } from '../ConsentNotice'
import { FeedbackBar } from '../FeedbackBar'
import { useAskCopy, useAskLang, localizeAskPath } from '../copy'
import { AskIcon } from '../icons'
import type { AskErrorCode, ConsentRecord } from '../types'
import { logEvent, streamSolution } from '../useAskStream'
import { ChoiceGroup } from './choices'
import { usePowerCopy } from './copy'
import type { ReportDoc } from './export/reportDoc'
import { draftFromHardware, emptyHardwareDraft, emptyMobileDraft, hardwareFromDraft, mobileFromDraft, type HardwareDraft, type MobileDraft } from './drafts'
import { HardwareStep } from './HardwareStep'
import { MobileStep } from './MobileStep'
import { profileFromHardware, profileFromMobile, saveProfile } from './profile'
import { ReportView } from './ReportView'
import { buildFileBase, localIsoDate, nextReportNumber } from './export/fileName'
import { clearSavedAudit, parseImprovements, readSavedAudit, writeSavedAudit, type SavedAudit } from './auditStore'

type View = { k: 'menu' } | { k: 'wizard'; process: ProcessId; index: number } | { k: 'consent'; process: ProcessId } | { k: 'run'; process: ProcessId } | { k: 'report'; process: ProcessId }

interface Props {
  /** anonymous visit ID (read when the report is requested, not during render) */
  getVisitId: () => string
  consent: ConsentRecord | null
  /** the visitor answered the consent notice */
  onConsent: (value: 'yes' | 'no', saveHistory: boolean) => void
  /** Root asks "can you go back one level?"; returns true when handled (false never happens: the menu leaves to the chat) */
  backRef: MutableRefObject<(() => boolean) | null>
  /** leave Power Mode (back to the standard chat) */
  onExit: () => void
}

const SITE = 'https://www.promptquorum.com'

// Solution Setup: the directory link opens pre-filtered for the chosen goal (the directory's ?want= keys).
// Video has no matching directory chip, so it links to the unfiltered directory.
const WANT_FOR_GOAL: Record<string, string> = { image: 'image', voice: 'audio', music: 'audio', coding: 'code', docs: 'docs', chat: 'chat', translate: 'chat' }
function directoryQuery(process: ProcessId, choices: Record<string, string[]>): string {
  if (process !== 'solution') return ''
  // Several goals: the directory filter takes one key, so only a single-goal run gets a pre-filtered link.
  const goals = choices.goal ?? []
  const want = goals.length === 1 ? WANT_FOR_GOAL[goals[0]] : undefined
  return want ? `?want=${want}` : ''
}

/** Free-text answers of the visible steps: trimmed, capped, empty ones dropped. */
function keptTexts(steps: StepDef[], tv: Record<string, string>): Record<string, string> | undefined {
  const kept: Record<string, string> = {}
  for (const st of steps) {
    const t = (st.kind === 'text' || st.textField) && tv[st.id]?.trim()
    if (t) kept[st.id] = t.slice(0, MAX_TEXT_CHARS)
  }
  return Object.keys(kept).length ? kept : undefined
}

function newFileId(): { date: string; seq: number | null } {
  const date = localIsoDate()
  return { date, seq: nextReportNumber(date) }
}

const GROUP = 'rounded-xl border border-border bg-white p-4 shadow-sm'

export function PowerShell({ getVisitId, consent, onConsent, backRef, onExit }: Props) {
  const lang = useAskLang()
  const ac = useAskCopy()
  const tx = usePowerCopy()
  const [view, setView] = useState<View>({ k: 'menu' })
  const [choices, setChoices] = useState<Record<string, string[]>>({})
  const [note, setNote] = useState('')
  const [hw, setHw] = useState<HardwareDraft>(emptyHardwareDraft)
  const [mob, setMob] = useState<MobileDraft>(emptyMobileDraft)
  const [saveProfileOn, setSaveProfileOn] = useState(false)
  const [text, setText] = useState('')
  // Free-text answers by step id (audit descriptions, the improvement chosen for "implement")
  const [texts, setTexts] = useState<Record<string, string>>({})
  // The audit report stays here while an "implement" report is shown, so Back returns to it
  const [auditReport, setAuditReport] = useState('')
  const [savedTick, setSavedTick] = useState(0)
  const [saveMsg, setSaveMsg] = useState('')
  const [status, setStatus] = useState<string | undefined>()
  const [error, setError] = useState<AskErrorCode | null>(null)
  const [runStamp, setRunStamp] = useState('')
  // Date and running number of this report's file name; one per report, shared by every download format
  const [fileId, setFileId] = useState<{ date: string; seq: number | null } | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  const stageTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  const processOf = view.k === 'menu' ? null : view.process

  // A saved audit lives only in this browser; read it when the process list is shown.
  // eslint-disable-next-line react-hooks/exhaustive-deps -- savedTick re-reads the store after a delete
  const saved = useMemo(() => (view.k === 'menu' ? readSavedAudit() : null), [view.k, savedTick])

  // ---- answers ----------------------------------------------------------------------------------
  const hardwareAnswers = (process: ProcessId): HardwareAnswers | null => {
    const hs = PROCESSES[process].steps.find((s) => s.kind === 'hardware')
    return hardwareFromDraft(hw, !!hs?.allowNone, !!hs?.askCpu)
  }
  const mobileAnswers = (): MobileAnswers | null => mobileFromDraft(mob)

  const answersFor = useCallback(
    (process: ProcessId, tv: Record<string, string>): SolutionAnswers => {
      const def = PROCESSES[process]
      const out: SolutionAnswers = { choices: {} }
      for (const s of visibleSteps(process, { choices })) if ((s.kind === 'single' || s.kind === 'multi') && choices[s.id]?.length) out.choices[s.id] = choices[s.id]
      if (def.steps.some((s) => s.kind === 'hardware')) {
        const hs = def.steps.find((s) => s.kind === 'hardware')
        const h = hardwareFromDraft(hw, !!hs?.allowNone, !!hs?.askCpu)
        if (h) out.hardware = h
      }
      if (def.steps.some((s) => s.kind === 'mobile')) {
        const m = mobileFromDraft(mob)
        if (m) out.mobile = m
      }
      const kept = keptTexts(visibleSteps(process, { choices }), tv)
      if (kept) out.texts = kept
      if (note.trim()) out.note = note.trim().slice(0, MAX_NOTE_CHARS)
      return out
    },
    [choices, hw, mob, note],
  )

  const stepValid = (s: StepDef, process: ProcessId): boolean => {
    if (s.kind === 'single') return (choices[s.id]?.length ?? 0) === 1
    if (s.kind === 'multi') return s.optional || (choices[s.id]?.length ?? 0) > 0
    if (s.kind === 'hardware') return hardwareAnswers(process) !== null
    if (s.kind === 'mobile') return mobileAnswers() !== null
    return true
  }

  // ---- navigation -------------------------------------------------------------------------------
  const startProcess = (process: ProcessId) => {
    setChoices({})
    setNote('')
    setText('')
    setTexts({})
    setSaveMsg('')
    setError(null)
    setView({ k: 'wizard', process, index: 0 })
  }

  const goBack = useCallback((): boolean => {
    if (view.k === 'menu') {
      onExit()
      return true
    }
    if (view.k === 'wizard') {
      setView(view.index > 0 ? { ...view, index: view.index - 1 } : { k: 'menu' })
      return true
    }
    if (view.k === 'run') {
      abortRef.current?.abort()
      abortRef.current = null
    }
    setError(null)
    if (view.process === 'implement') {
      setText(auditReport)
      setView(auditReport ? { k: 'report', process: 'audit' } : { k: 'menu' })
      return true
    }
    setView({ k: 'wizard', process: view.process, index: Math.max(visibleSteps(view.process, { choices }).length - 1, 0) })
    return true
  }, [view, choices, onExit, auditReport])

  useEffect(() => {
    backRef.current = goBack
    return () => {
      if (backRef.current === goBack) backRef.current = null
    }
  }, [goBack, backRef])

  useEffect(() => () => {
    abortRef.current?.abort()
    if (stageTimer.current) clearTimeout(stageTimer.current)
  }, [])

  // Screen readers and keyboard users land on the new heading when the view changes.
  const stepKey = view.k === 'wizard' ? view.index : -1
  useEffect(() => {
    // Questions and the list focus their heading; the report and the running state focus the panel itself, so
    // Esc (which only works while focus is inside the non-modal window) keeps going back one level.
    ;(headingRef.current ?? rootRef.current)?.focus()
  }, [view.k, stepKey])

  // ---- running ----------------------------------------------------------------------------------
  const run = useCallback(
    async (process: ProcessId, textsOverride?: Record<string, string>) => {
      const answers = answersFor(process, textsOverride ?? texts)
      // Only on the visitor's explicit opt-in, and only into this browser (the website's hardware tool).
      if (saveProfileOn) {
        const p = answers.mobile ? profileFromMobile(answers.mobile) : answers.hardware ? profileFromHardware(answers.hardware) : null
        if (p) saveProfile(p)
      }
      const ctl = new AbortController()
      abortRef.current = ctl
      setText('')
      setError(null)
      // Stage 1: memory estimate (the server computes FACTS first); after a few seconds, if no directory lookup
      // has started yet, the model is composing: stage 3. Tool events switch to stage 2 in between.
      setStatus(tx.run.estimating)
      if (stageTimer.current) clearTimeout(stageTimer.current)
      stageTimer.current = setTimeout(() => setStatus((s) => (s === tx.run.estimating ? tx.run.writing : s)), 5000)
      setRunStamp(new Date().toISOString().slice(0, 10))
      setFileId(newFileId())
      setView({ k: 'run', process })
      let acc = ''
      await streamSolution(
        { visitId: getVisitId(), lang, process, answers },
        (ev) => {
          // A cancelled run (Esc, Back or Cancel) must not change the screen when its last events arrive.
          if (ctl.signal.aborted) return
          if (ev.t === 'text') {
            acc += ev.v
            setText(acc)
            setStatus(undefined)
          } else if (ev.t === 'tool') setStatus(tx.run.tool)
          else if (ev.t === 'done') {
            if (!acc.trim()) setError('failed')
            else {
              if (process === 'audit') setAuditReport(acc)
              setView({ k: 'report', process })
            }
            setStatus(undefined)
          } else if (ev.t === 'error') {
            setError(ev.code)
            setStatus(undefined)
          }
        },
        ctl.signal,
      )
    },
    [answersFor, texts, saveProfileOn, tx.run.tool, tx.run.writing, tx.run.estimating, getVisitId, lang],
  )

  const openSaved = (a: SavedAudit) => {
    setChoices(a.answers.choices)
    setTexts(a.answers.texts ?? {})
    setNote(a.answers.note ?? '')
    if (a.answers.hardware) setHw(draftFromHardware(a.answers.hardware))
    setText(a.report)
    setAuditReport(a.report)
    setRunStamp(a.savedAt)
    setFileId(newFileId())
    setError(null)
    setSaveMsg('')
    setView({ k: 'report', process: 'audit' })
  }

  const saveAudit = () => {
    const ok = writeSavedAudit({ savedAt: new Date().toISOString().slice(0, 10), lang, answers: answersFor('audit', texts), report: text })
    setSaveMsg(ok ? tx.audit.saved : tx.audit.saveFailed)
  }

  const deleteAudit = () => {
    clearSavedAudit()
    setSavedTick((n) => n + 1)
    setSaveMsg(tx.audit.cleared)
  }

  // "Carry out an improvement": the same answers plus the chosen improvement go to the implement report.
  const implement = (title: string) => {
    const t = { ...texts, recommendation: title }
    setTexts(t)
    setError(null)
    if (!consent) return setView({ k: 'consent', process: 'implement' })
    void run('implement', t)
  }

  const next = (process: ProcessId, index: number) => {
    const steps = visibleSteps(process, { choices })
    if (index < steps.length - 1) return setView({ k: 'wizard', process, index: index + 1 })
    if (!consent) return setView({ k: 'consent', process })
    void run(process)
  }

  // ---- the document -----------------------------------------------------------------------------
  const labelFor = useCallback((id: string) => tx.opt[id] ?? id, [tx])

  const inputLines = useCallback(
    (process: ProcessId): string[] => {
      const a = answersFor(process, texts)
      const lines: string[] = []
      for (const s of visibleSteps(process, { choices })) {
        const label = tx.steps[s.id]?.label ?? s.id
        if (s.kind === 'single' || s.kind === 'multi') {
          const v = a.choices[s.id]
          if (v?.length) lines.push(`${label}: ${v.map(labelFor).join(', ')}`)
          if (s.textField && a.texts?.[s.id]) lines.push(`${label}: ${a.texts[s.id]}`)
        } else if (s.kind === 'hardware' && a.hardware) {
          const h = a.hardware
          const val = (n: number | null) => (n === null ? tx.hw.unknown : String(n))
          const parts = [tx.hw.devices[h.device]]
          if (h.device !== 'none') {
            if (h.device !== 'mac') parts.push(tx.hw.oses[h.os], tx.hw.gpus[h.gpu])
            parts.push(`${h.device === 'mac' ? tx.hw.ramApple : tx.hw.ram}: ${val(h.ramGb)}`)
            if (h.gpu === 'nvidia' || h.gpu === 'amd') parts.push(`${tx.hw.vram}: ${val(h.vramGb)}`)
            if (h.storageGb !== null) parts.push(`${tx.hw.storage}: ${h.storageGb}`)
            if (h.cpu) parts.push(h.cpu)
          }
          lines.push(`${label}: ${parts.join(' · ')}`)
        } else if (s.kind === 'text' && a.texts?.[s.id]) {
          lines.push(`${label}: ${a.texts[s.id]}`)
        } else if (s.kind === 'mobile' && a.mobile) {
          const m = a.mobile
          const val = (n: number | null) => (n === null ? tx.hw.unknown : String(n))
          const parts = [m.platform === 'ios' ? tx.mobile.ios : tx.mobile.android]
          if (m.model) parts.push(m.model)
          parts.push(`${tx.mobile.ram}: ${val(m.ramGb)}`, `${tx.mobile.storage}: ${val(m.storageGb)}`)
          lines.push(`${label}: ${parts.join(' · ')}`)
        }
      }
      if (a.note) lines.push(`${tx.steps.note.label}: ${a.note}`)
      return lines
    },
    [answersFor, choices, texts, labelFor, tx],
  )

  const reportProcess = view.k === 'run' || view.k === 'report' ? view.process : null
  const doc: ReportDoc | null = useMemo(() => {
    if (!reportProcess) return null
    const name = tx.processes[reportProcess].name
    return {
      title: tx.report.title(name),
      processLabel: name,
      dateText: formatDisplayDate(runStamp || undefined, lang as Language),
      lang,
      dir: ac.dir,
      fileBase: buildFileBase(fileId?.date ?? localIsoDate(), fileId?.seq ?? null, [
        name,
        // the specific topic: the goal of a Solution Setup, or the improvement chosen for "implement"
        reportProcess === 'solution' ? (tx.opt[choices.goal?.[0] ?? ''] ?? '') : reportProcess === 'implement' ? (texts.recommendation ?? '') : '',
      ]),
      inputs: inputLines(reportProcess),
      body: text,
      references: [
        { label: tx.doc.refDirectory, url: `${SITE}${localizeAskPath('/directory', lang)}${directoryQuery(reportProcess, choices)}` },
        { label: tx.doc.refHardwareTool, url: `${SITE}${localizeAskPath('/tools/what-can-i-run', lang)}` },
        { label: tx.doc.refAskHans, url: `${SITE}${localizeAskPath('/askhans', lang)}` },
      ],
      labels: {
        generatedBy: tx.doc.generatedBy,
        dateLabel: tx.doc.dateLabel,
        inputsHeading: tx.doc.inputsHeading,
        howHeading: tx.doc.howHeading,
        howText: tx.doc.howText,
        referencesHeading: tx.doc.referencesHeading,
        disclaimerHeading: tx.doc.disclaimerHeading,
        disclaimerText: tx.doc.disclaimerText,
      },
    }
  }, [reportProcess, choices, texts, fileId, tx, runStamp, lang, ac.dir, inputLines, text])

  // ---- rendering --------------------------------------------------------------------------------
  const backLabel = view.k === 'menu' ? tx.menu.back : tx.wizard.back

  const topBar = (
    <div className="mb-3 flex items-center justify-between gap-2">
      <button
        type="button"
        onClick={goBack}
        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[13px] font-semibold text-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <AskIcon name="ArrowLeft" className="h-4 w-4 rtl:-scale-x-100" />
        {backLabel}
      </button>
      {processOf && <span className="truncate text-[12px] font-semibold text-muted-foreground">{tx.processes[processOf].name}</span>}
    </div>
  )

  const heading = (t: string) => (
    <h2 ref={headingRef} tabIndex={-1} className="text-[16px] font-bold leading-snug text-foreground outline-none">
      {t}
    </h2>
  )

  let body: React.ReactNode = null

  if (view.k === 'menu') {
    body = (
      <>
        {heading(tx.menu.title)}
        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{tx.menu.intro}</p>
        {saved && (
          <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-primary bg-secondary px-3 py-2 text-[13px] text-foreground">
            <span className="font-semibold">{tx.audit.loadTitle(formatDisplayDate(saved.savedAt, lang as Language))}</span>
            <button type="button" onClick={() => openSaved(saved)} className="rounded-md border border-primary px-2.5 py-1 text-xs font-semibold text-primary hover:bg-white">{tx.audit.loadOpen}</button>
            <button type="button" onClick={deleteAudit} className="rounded-md border border-border px-2.5 py-1 text-xs font-semibold text-foreground hover:bg-white">{tx.audit.clear}</button>
          </div>
        )}
        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {PROCESS_ORDER.map((id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => startProcess(id)}
                className="flex h-full w-full flex-col items-start gap-1.5 rounded-xl border border-border bg-white p-3.5 text-start shadow-sm transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="flex items-center gap-2 text-[14px] font-bold text-foreground">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary">
                    <AskIcon name={PROCESSES[id].icon} className="h-4 w-4" />
                  </span>
                  {tx.processes[id].name}
                </span>
                <span className="text-[13px] leading-snug text-foreground">{tx.processes[id].tagline}</span>
                <span className="text-[11px] font-medium text-muted-foreground">{tx.processes[id].time}</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[12px] text-muted-foreground">{tx.menu.escHint}</p>
      </>
    )
  } else if (view.k === 'wizard') {
    const steps = visibleSteps(view.process, { choices })
    const step = steps[Math.min(view.index, steps.length - 1)]
    const copy = tx.steps[step.id]
    const last = view.index >= steps.length - 1
    const valid = stepValid(step, view.process)
    body = (
      <section
        className={GROUP}
        aria-labelledby="pm-step-title"
        onKeyDown={(e) => {
          // Enter advances a valid step, except inside the note box or on a focused button/checkbox (they handle Enter themselves).
          const el = e.target as HTMLElement
          if (e.key !== 'Enter' || e.shiftKey || !valid || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON' || (el.tagName === 'INPUT' && (el as HTMLInputElement).type === 'checkbox')) return
          e.preventDefault()
          next(view.process, view.index)
        }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{tx.wizard.step(view.index + 1, steps.length)}</p>
        <h2 id="pm-step-title" ref={headingRef} tabIndex={-1} className="mt-0.5 text-[16px] font-bold leading-snug text-foreground outline-none">
          {copy?.q ?? step.id}
        </h2>
        {step.kind === 'multi' && <p className="mt-1 text-[12px] font-medium text-muted-foreground">{tx.wizard.multiHint}</p>}
        {copy?.hint && <p className="mt-1 text-[12px] text-muted-foreground">{copy.hint}</p>}
        <div className="mt-3">
          {(step.kind === 'single' || step.kind === 'multi') && step.options && (
            <ChoiceGroup
              options={step.options}
              labels={tx.opt}
              selected={choices[step.id] ?? []}
              multi={step.kind === 'multi'}
              exclusive={step.exclusive}
              ariaLabel={copy?.q ?? step.id}
              onChange={(v) => setChoices((c) => ({ ...c, [step.id]: v }))}
            />
          )}
          {step.textField && (
            <>
              <label htmlFor={`pm-text-${step.id}`} className="sr-only">{tx.audit[step.id === 'auditSetup' ? 'setupText' : 'problemsText']}</label>
              <textarea
                id={`pm-text-${step.id}`}
                value={texts[step.id] ?? ''}
                rows={2}
                maxLength={MAX_TEXT_CHARS}
                placeholder={tx.audit[step.id === 'auditSetup' ? 'setupText' : 'problemsText']}
                onChange={(e) => setTexts((t) => ({ ...t, [step.id]: e.target.value }))}
                className="mt-2 w-full resize-none rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </>
          )}
          {step.kind === 'hardware' && <HardwareStep tx={tx} draft={hw} onChange={setHw} allowNone={!!step.allowNone} askCpu={!!step.askCpu} save={saveProfileOn} onSaveChange={setSaveProfileOn} />}
          {step.kind === 'mobile' && <MobileStep tx={tx} draft={mob} onChange={setMob} save={saveProfileOn} onSaveChange={setSaveProfileOn} />}
          {step.kind === 'note' && (
            <>
              <label htmlFor="pm-note" className="sr-only">{copy?.q}</label>
              <textarea
                id="pm-note"
                value={note}
                rows={3}
                maxLength={MAX_NOTE_CHARS}
                placeholder={tx.wizard.notePlaceholder}
                onChange={(e) => setNote(e.target.value)}
                className="w-full resize-none rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <p className="mt-2 text-[12px] leading-snug text-muted-foreground">{tx.wizard.privacy}</p>
            </>
          )}
        </div>
        {!valid && (step.kind === 'multi' || step.kind === 'single') && <p className="mt-2 text-[12px] text-muted-foreground">{tx.wizard.required}</p>}
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            disabled={!valid}
            onClick={() => next(view.process, view.index)}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40"
          >
            {last ? tx.wizard.generate : tx.wizard.next}
          </button>
        </div>
      </section>
    )
  } else if (view.k === 'consent') {
    const p = view.process
    body = (
      <ConsentNotice
        pendingQuestion={null}
        onChoose={(value, save) => {
          onConsent(value, save)
          void run(p, p === 'implement' ? texts : undefined)
        }}
      />
    )
  } else if (doc) {
    const failed = error !== null
    const msg = error === 'limit' || error === 'rate' ? tx.run.limit : error ? ac.errors[error as Exclude<AskErrorCode, 'limit'>] : ''
    body = (
      <>
        <ReportView
          tx={tx}
          doc={doc}
          onExport={(channel) => {
            // Anonymous export counter: format name only, never the report; only with consent "Yes".
            if (consent?.value === 'yes') logEvent({ type: 'power_export', visitId: getVisitId(), process: view.process, channel })
          }}
          streaming={view.k === 'run' && !failed} status={status} />
        {failed && (
          <div role="alert" className="mt-3 rounded-lg border border-border bg-white p-3 text-[13px]">
            <p>{typeof msg === 'string' ? msg : ''}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {error !== 'refused' && error !== 'limit' && error !== 'rate' && (
                <button type="button" onClick={() => {
                    // The button disappears while the new run starts; keep focus in the window so Esc still works.
                    rootRef.current?.focus()
                    void run(view.process)
                  }} className="rounded-md border border-primary px-2.5 py-1 text-xs font-semibold text-primary hover:bg-secondary">
                  {tx.run.retry}
                </button>
              )}
            </div>
          </div>
        )}
        {view.k === 'report' && view.process === 'audit' && (
          <>
            {parseImprovements(text).length > 0 && (
              <section className={`${GROUP} mt-3`} aria-labelledby="pm-implement">
                <h3 id="pm-implement" className="text-[14px] font-bold text-foreground">{tx.audit.implementHeading}</h3>
                <p className="mt-1 text-[12px] text-muted-foreground">{tx.audit.implementIntro}</p>
                <ul className="mt-2 grid gap-2">
                  {parseImprovements(text).map((im) => (
                    <li key={im.n}>
                      <button type="button" onClick={() => implement(im.title)} className="w-full rounded-lg border border-border bg-white px-3 py-2 text-start text-[13px] font-medium text-foreground hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
                        {im.n}. {im.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button type="button" onClick={saveAudit} className="rounded-lg border border-primary px-3 py-1.5 text-[13px] font-semibold text-primary hover:bg-secondary">{tx.audit.save}</button>
              {readSavedAudit() && <button type="button" onClick={deleteAudit} className="rounded-lg border border-border px-3 py-1.5 text-[13px] font-semibold text-foreground hover:bg-muted">{tx.audit.clear}</button>}
              {saveMsg && <span role="status" className="text-[12px] text-muted-foreground">{saveMsg}</span>}
            </div>
          </>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {view.k === 'run' && !failed && (
            <button type="button" onClick={goBack} className="rounded-lg border border-border px-3 py-1.5 text-[13px] font-semibold text-foreground hover:bg-muted">
              {tx.run.cancel}
            </button>
          )}
          {(view.k === 'report' || failed) && (
            <>
              {view.process !== 'implement' && (
                <button type="button" onClick={() => setView({ k: 'wizard', process: view.process, index: 0 })} className="rounded-lg border border-primary px-3 py-1.5 text-[13px] font-semibold text-primary hover:bg-secondary">
                  {tx.report.changeAnswers}
                </button>
              )}
              <button type="button" onClick={() => setView({ k: 'menu' })} className="rounded-lg border border-border px-3 py-1.5 text-[13px] font-semibold text-foreground hover:bg-muted">
                {tx.report.allProcesses}
              </button>
            </>
          )}
        </div>
      </>
    )
  }

  // Same star rating as the chat: shown once a report is finished (not while streaming or after an error).
  const showRating = view.k === 'report' && !error && !!doc

  return (
    <>
      <div ref={rootRef} tabIndex={-1} className="min-h-0 flex-1 overflow-y-auto bg-muted/20 p-3 outline-none">
        {topBar}
        {body}
      </div>
      {showRating && view.k === 'report' && <FeedbackBar key={`${view.process}-${runStamp}`} lastQuestion={`Power Mode: ${view.process}`} lastAnswer={text} />}
    </>
  )
}

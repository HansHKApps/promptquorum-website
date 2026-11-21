'use client'

// PromptQuorum Academy — the cabinet screen: every program the learner took, kept on this computer only (see
// src/lib/academy/cabinet.ts). Open a program again, download its certificate and Course Documentation, delete it,
// or download / restore one backup file. The "stored only here" warning is always visible.

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  cabinetAvailable,
  decodeBackup,
  deleteEntry,
  encodeBackup,
  listEntries,
  putProgramme,
  requestPersistence,
  restoreEntries,
  setCabinetFlag,
  type CabinetEntry,
  type CabinetFlag,
} from '@/lib/academy/cabinet'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { AcademyLang, Programme } from '@/lib/academy/types'
import { CABINET_COPY, fill } from './cabinet-copy'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']

function saveBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}

export function CabinetWarning({ lang }: { lang: AcademyLang }) {
  const c = CABINET_COPY[lang]
  return (
    <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-amber-950" role="note">
      <p className="font-semibold">{c.warningTitle}</p>
      <p className="mt-1 text-sm">{c.warning}</p>
    </div>
  )
}

const btn = 'rounded-xl border border-purple-300 bg-white px-4 py-2 text-sm font-medium text-purple-800 hover:bg-purple-50'

export function CabinetView({ lang, update, flag, onFlag, current }: { lang: AcademyLang; update: Update; flag: CabinetFlag; onFlag: (f: CabinetFlag) => void; current?: Programme }) {
  const c = CABINET_COPY[lang]
  const [entries, setEntries] = useState<CabinetEntry[] | null>(null)
  const [note, setNote] = useState<string | null>(null)
  const [problem, setProblem] = useState<string | null>(null)
  const file = useRef<HTMLInputElement>(null)
  const available = cabinetAvailable()

  const reload = useCallback(async () => {
    try {
      setEntries(await listEntries())
    } catch {
      setEntries([])
      setProblem(c.unavailable)
    }
  }, [c.unavailable])
  useEffect(() => {
    if (available) void reload()
    else setEntries([])
  }, [available, reload])

  const create = async () => {
    setCabinetFlag('on')
    onFlag('on')
    requestPersistence()
    try {
      if (current) await putProgramme(current)
      setNote(c.created)
      await reload()
    } catch {
      setProblem(c.unavailable)
    }
  }
  const back = () => update((s) => ({ ...s, view: s.programme ? 'programme' : 'setup' }))
  const open = (e: CabinetEntry) => update((s) => ({ ...s, programme: e.programme, view: 'programme' }))
  const remove = async (e: CabinetEntry) => {
    if (!window.confirm(c.deleteConfirm)) return
    await deleteEntry(e.id)
    await reload()
  }
  const backup = async () => {
    const all = await listEntries()
    saveBlob(new Blob([await encodeBackup(all)], { type: 'application/json' }), `PromptQuorum-Academy-Cabinet-${new Date().toISOString().slice(0, 10)}.json`)
  }
  const restore = async (f: File | undefined) => {
    if (!f) return
    setProblem(null)
    try {
      const list = decodeBackup(await f.text())
      await restoreEntries(list)
      if (flag !== 'on') {
        setCabinetFlag('on')
        onFlag('on')
      }
      setNote(fill(c.restoreDone, { n: list.length }))
      await reload()
    } catch {
      setProblem(c.restoreError)
    } finally {
      if (file.current) file.current.value = ''
    }
  }

  return (
    <section aria-labelledby="academy-cabinet" className="space-y-5 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="academy-cabinet" className="text-xl font-semibold text-gray-900">
          <span aria-hidden="true">🗄️ </span>
          {c.title}
        </h2>
        <button type="button" onClick={back} className="text-sm text-purple-700 underline underline-offset-2">
          {c.back}
        </button>
      </div>
      <CabinetWarning lang={lang} />
      {!available && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">{c.unavailable}</p>}
      {problem && available && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">{problem}</p>}
      {note && <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-900" role="status">{note}</p>}

      {available && flag !== 'on' && (
        <div className="space-y-2 rounded-xl bg-purple-50 px-4 py-3">
          <p className="text-sm text-purple-950">{c.notCreated}</p>
          <button type="button" onClick={() => void create()} className="rounded-xl bg-purple-600 px-5 py-2 font-semibold text-white hover:bg-purple-700">
            {c.create}
          </button>
        </div>
      )}

      {entries && entries.length === 0 && flag === 'on' && <p className="text-gray-700">{c.empty}</p>}
      <ul className="space-y-3">
        {(entries ?? []).map((e) => (
          <li key={e.id} className="space-y-2 rounded-xl border border-gray-200 p-4">
            <p className="text-lg font-medium text-gray-900">{e.subject}</p>
            <p className="text-sm text-gray-600">
              {fill(c.lessons, { d: e.lessonsDone, t: e.lessonsTotal })} · {e.percent === null ? c.noFinal : fill(e.passed ? c.finalPassed : c.finalFailed, { p: e.percent })}
            </p>
            <p className="text-xs text-gray-500">{fill(c.lastUsed, { date: formatDisplayDate(e.updatedAt, lang) })}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <button type="button" onClick={() => open(e)} className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700">
                {c.openBtn}
              </button>
              {e.certificate && (
                <button type="button" onClick={() => saveBlob(e.certificate!.blob, e.certificate!.filename)} className={btn}>
                  {c.certBtn}
                </button>
              )}
              {e.documentation && (
                <button type="button" onClick={() => saveBlob(e.documentation!.blob, e.documentation!.filename)} className={btn}>
                  {c.docBtn}
                </button>
              )}
              <button type="button" onClick={() => void remove(e)} className="rounded-xl px-4 py-2 text-sm text-red-800 underline underline-offset-2 hover:bg-red-50">
                {c.deleteBtn}
              </button>
            </div>
          </li>
        ))}
      </ul>

      {available && (
        <div className="space-y-2 border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-600">{c.backupHint}</p>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => void backup()} disabled={!entries?.length} className={`${btn} disabled:cursor-not-allowed disabled:opacity-50`}>
              {c.backup}
            </button>
            <button type="button" onClick={() => file.current?.click()} className={btn}>
              {c.restore}
            </button>
            <input ref={file} type="file" accept="application/json,.json" className="sr-only" tabIndex={-1} onChange={(ev) => void restore(ev.target.files?.[0])} />
          </div>
        </div>
      )}
    </section>
  )
}

/** Shown once, after the first finished lesson: offers to create the cabinet and says plainly that it exists only on this computer. */
export function CabinetPrompt({ lang, onCreate, onDecline }: { lang: AcademyLang; onCreate: () => void; onDecline: () => void }) {
  const c = CABINET_COPY[lang]
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true" aria-labelledby="academy-cabinet-prompt">
      <div className="max-h-full w-full max-w-lg space-y-4 overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
        <h2 id="academy-cabinet-prompt" className="text-xl font-semibold text-gray-900">
          <span aria-hidden="true">🗄️ </span>
          {c.promptTitle}
        </h2>
        <p className="text-gray-800">{c.promptBody}</p>
        <CabinetWarning lang={lang} />
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={onCreate} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
            {c.create}
          </button>
          <button type="button" onClick={onDecline} className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-800 hover:bg-gray-50">
            {c.notNow}
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'

// PromptQuorum Academy — fine-tuning of a programme: a topic opens a small panel (what it covers, a wish box, Confirm),
// and a free line at the end of the list takes a wish for the whole programme. Nothing here changes a topic's text:
// the wishes are stored beside the lessons and passed to the lesson writer (docs/academy: topic fine-tuning).

import { useState } from 'react'
import { LEARNER_TEXT_MAX } from '@/lib/academy/schemas'
import type { AcademyLang, Lesson } from '@/lib/academy/types'
import { Content } from './Content'
import { TUNE_COPY } from './copy/tune'

const area = 'mt-2 block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200'

/** Badge on a topic row: confirmed, or "your wish added" when the learner wrote one. */
export function TuneBadge({ lang, lesson }: { lang: AcademyLang; lesson: Lesson }) {
  const t = TUNE_COPY[lang]
  if (lesson.learnerNote) return <span className="ms-2 rounded-full bg-purple-50 px-2 py-0.5 text-xs font-normal text-purple-800">{t.adjustedBadge}</span>
  if (lesson.confirmed) return <span className="ms-2 rounded-full bg-green-50 px-2 py-0.5 text-xs font-normal text-green-800">{t.confirmedBadge}</span>
  return null
}

/** Toggle button + expandable panel for one topic. `children` is the row itself (the button that opens the lesson). */
export function LessonTuner({
  lang,
  contentLang,
  lesson,
  done,
  onSave,
  onRewrite,
  children,
}: {
  lang: AcademyLang
  /** language of the programme text (the summary is written in it) */
  contentLang: string
  lesson: Lesson
  done: boolean
  onSave: (note: string, confirmed: boolean) => void
  onRewrite: () => void
  children: React.ReactNode
}) {
  const t = TUNE_COPY[lang]
  const [open, setOpen] = useState(false)
  const [note, setNote] = useState(lesson.learnerNote ?? '')
  const [justSaved, setJustSaved] = useState(false)
  const written = lesson.sections.length > 0
  const saved = lesson.learnerNote ?? ''
  const needsRewrite = written && !done && saved.trim() !== (lesson.noteUsed ?? '').trim()
  const panelId = `tune-${lesson.id}`
  return (
    <div className="rounded-xl border border-gray-200 hover:border-purple-300">
      <div className="flex items-stretch">
        <div className="min-w-0 flex-1">{children}</div>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="shrink-0 rounded-e-xl border-s border-gray-200 px-3 text-sm font-medium text-purple-800 hover:bg-purple-50"
        >
          <span aria-hidden="true">{open ? '▴ ' : '▾ '}</span>
          {open ? t.close : t.open}
        </button>
      </div>
      {open && (
        <div id={panelId} className="space-y-3 border-t border-gray-200 bg-purple-50/40 px-4 py-4">
          {lesson.summary && (
            <div>
              <p className="text-sm font-medium text-gray-900">{t.coversTitle}</p>
              <Content lang={contentLang}>
                <p className="mt-1 text-sm text-gray-700">{lesson.summary}</p>
              </Content>
            </div>
          )}
          <label className="block text-sm font-medium text-gray-900">
            {t.noteLabel}
            <textarea
              value={note}
              maxLength={LEARNER_TEXT_MAX}
              rows={3}
              placeholder={t.notePlaceholder}
              onChange={(e) => {
                setNote(e.target.value)
                setJustSaved(false)
              }}
              className={area}
            />
          </label>
          <p className="text-end text-xs text-gray-500">{t.counter(note.length, LEARNER_TEXT_MAX)}</p>
          <p className="text-xs text-gray-600">{t.privacy}</p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onSave(note, true)
                setJustSaved(true)
              }}
              className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"
            >
              {note.trim() ? t.confirmNote : t.confirm}
            </button>
            {justSaved && !needsRewrite && (
              <span role="status" className="text-sm text-green-800">
                {t.confirmedHint}
              </span>
            )}
          </div>
          {needsRewrite && (
            <div className="rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-900" role="status">
              <p>{t.rewriteHint}</p>
              <button type="button" onClick={onRewrite} className="mt-2 font-semibold underline underline-offset-2">
                {t.rewrite}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/** The last line of the list: a free wish for the whole programme. It changes no topic. */
export function FreeWishLine({ lang, value, onSave }: { lang: AcademyLang; value: string; onSave: (text: string) => void }) {
  const t = TUNE_COPY[lang]
  const [text, setText] = useState(value)
  const [saved, setSaved] = useState(false)
  return (
    <div className="mt-3 rounded-xl border border-dashed border-purple-300 px-4 py-4">
      <label className="block text-sm font-medium text-gray-900">
        {t.freeTitle}
        <textarea
          value={text}
          maxLength={LEARNER_TEXT_MAX}
          rows={3}
          placeholder={t.freePlaceholder}
          onChange={(e) => {
            setText(e.target.value)
            setSaved(false)
          }}
          className={area}
        />
      </label>
      <p className="mt-1 text-xs text-gray-600">{t.freeHint}</p>
      <p className="text-xs text-gray-600">{t.privacy}</p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            onSave(text)
            setSaved(true)
          }}
          className="rounded-xl border border-purple-300 px-4 py-2 text-sm font-semibold text-purple-800 hover:bg-purple-50"
        >
          {t.freeSave}
        </button>
        {saved && (
          <span role="status" className="text-sm text-green-800">
            {t.freeSaved}
          </span>
        )}
        <span className="ms-auto text-xs text-gray-500">{t.counter(text.length, LEARNER_TEXT_MAX)}</span>
      </div>
    </div>
  )
}

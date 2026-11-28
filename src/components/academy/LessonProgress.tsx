'use client'

// PromptQuorum Academy — the always-visible card on the lesson screen: subject, "lesson x of y · title" and one segment
// per lesson. Written lessons behind the learner (or already finished) can be opened for rereading from their segment.

import { canReviewLesson } from '@/lib/academy/progress'
import type { Programme } from '@/lib/academy/types'
import type { AcademyCopy } from './copy'

export function LessonProgress({
  tx,
  programme,
  reviewIndex,
  onSelect,
}: {
  tx: AcademyCopy
  programme: Programme
  /** the earlier lesson being reread; null = the current lesson is on screen */
  reviewIndex: number | null
  /** a lesson index to reread, or null to return to the current lesson */
  onSelect: (index: number | null) => void
}) {
  const total = programme.lessons.length
  const current = Math.min(Math.max(programme.progress.currentLesson, 0), total - 1)
  const shown = reviewIndex ?? current
  return (
    <div className="sticky top-0 z-20 -mx-1 rounded-2xl border border-purple-100 bg-white/95 px-4 pb-1 pt-3 shadow-sm backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-sm">
        <span className="font-medium text-gray-900">{programme.subject}</span>
        <span className="min-w-0 truncate text-gray-600">
          {tx.lessonOf(shown + 1, total)} · {programme.lessons[shown].title}
        </span>
      </div>
      <ol className="flex gap-1" aria-label={tx.lessonOf(shown + 1, total)}>
        {programme.lessons.map((lesson, i) => {
          const back = i === current && reviewIndex !== null
          const clickable = back || canReviewLesson(programme, i)
          const done = programme.progress.lessonStatus[lesson.id] === 'done'
          const label = `${tx.lessonOf(i + 1, total)} · ${lesson.title}`
          return (
            <li key={lesson.id} className="min-w-0 flex-1">
              {/* The bar is thin; the button around it is tall enough to hit with a finger. */}
              <button
                type="button"
                disabled={!clickable}
                onClick={() => onSelect(i === current ? null : i)}
                title={label}
                aria-label={label}
                aria-current={i === shown ? 'step' : undefined}
                className="group block w-full rounded py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-700 enabled:cursor-pointer disabled:cursor-default"
              >
                <span
                  className={`block h-2 rounded-full transition-colors ${done ? 'bg-purple-600' : i === current ? 'bg-purple-300' : 'bg-purple-100'} ${i === shown ? 'ring-2 ring-purple-900 ring-offset-1' : ''} ${clickable ? 'group-hover:bg-purple-800' : ''}`}
                />
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

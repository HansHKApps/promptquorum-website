// PromptQuorum Academy — the lesson text, shared by the live lesson screen and the read-only rereading screen.

import type { ReactNode } from 'react'
import { ReadAloud } from '@/components/ReadAloud'
import { Markdown } from '@/components/askhans/markdown'
import type { Lesson, Programme } from '@/lib/academy/types'
import { AiBadge } from './AiBadge'
import { Content } from './Content'
import type { AcademyCopy } from './copy'

export function LessonHeader({ tx, programme, lesson, titleId }: { tx: AcademyCopy; programme: Programme; lesson: Lesson; titleId: string }) {
  const objectives = lesson.objectiveIds.map((i) => programme.objectives[i]).filter(Boolean)
  return (
    <header>
      <Content lang={programme.language}>
        <h2 id={titleId} className="text-2xl font-semibold text-gray-900">
          {lesson.title}
        </h2>
      </Content>
      <p className="mt-2">
        <AiBadge text={tx.aiLabel} />
      </p>
      {objectives.length > 0 && (
        <div className="mt-3 rounded-xl bg-purple-50 px-4 py-3 text-sm text-purple-900">
          <span className="font-medium">{tx.lessonObjectives}:</span>
          <ul className="mt-1 list-disc ps-5">
            {objectives.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export function LessonBody({
  tx,
  programme,
  lesson,
  readingId,
  headingExtra,
  sectionExtra,
}: {
  tx: AcademyCopy
  programme: Programme
  lesson: Lesson
  readingId: string
  /** next to a section heading (live lesson: the magic wand) */
  headingExtra?: (section: Lesson['sections'][number], index: number) => ReactNode
  /** under a section (rereading: the note and the saved answers) */
  sectionExtra?: (index: number) => ReactNode
}) {
  return (
    <>
      <ReadAloud lang={programme.language} getText={() => `${lesson.title}. ${lesson.sections.map((s) => `${s.heading}. ${s.body}`).join(' ')}`} />
      <Content lang={programme.language} className="space-y-8">
        {lesson.sections.map((s, i) => (
          <section key={i} className="space-y-3">
            <div className="flex items-start gap-3 pt-2">
              <h3 className="text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">{s.heading}</h3>
              {headingExtra?.(s, i)}
            </div>
            <div className="space-y-4 text-[1.05rem] leading-8 text-gray-800">
              <Markdown text={s.body} />
            </div>
            {sectionExtra?.(i)}
          </section>
        ))}
      </Content>
      {lesson.furtherReading.length > 0 && (
        <aside aria-labelledby={readingId} className="rounded-xl border border-gray-200 p-4">
          <h3 id={readingId} className="font-semibold text-gray-900">
            {tx.furtherReading}
          </h3>
          <ul className="mt-2 space-y-2">
            {lesson.furtherReading.map((r) => (
              <li key={r.url} className="flex flex-wrap items-center gap-2">
                <a href={r.url} className="font-medium text-purple-700 underline underline-offset-2 hover:text-purple-900">
                  {r.title}
                </a>
                <span className="rounded-full bg-purple-50 px-2 py-0.5 text-xs text-purple-700">{tx.fromPromptQuorum}</span>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  )
}

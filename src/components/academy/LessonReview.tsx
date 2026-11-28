'use client'

// PromptQuorum Academy — rereading an earlier lesson, read-only. It only displays what is stored: no generation, no
// tutor, no wand, no rating, no test and no change to progress or learning time.

import { useEffect, useRef } from 'react'
import { ReadAloud } from '@/components/ReadAloud'
import { Markdown } from '@/components/askhans/markdown'
import { cleanTutorText } from '@/lib/academy/tutor'
import type { AcademyLang, Programme, SavedAnswer } from '@/lib/academy/types'
import { AiBadge } from './AiBadge'
import { Content } from './Content'
import type { AcademyCopy } from './copy'
import { REVIEW_COPY } from './copy/review'
import { LessonBody, LessonHeader } from './LessonContent'
import { QuizReview } from './QuizReview'

function SavedAnswers({ tx, title, answers, language }: { tx: AcademyCopy; title: string; answers: SavedAnswer[]; language: string }) {
  if (!answers.length) return null
  return (
    <details className="rounded-xl border border-purple-200 bg-purple-50/40 p-4">
      <summary className="cursor-pointer text-sm font-medium text-purple-900">
        {title} ({answers.length})
      </summary>
      <ul className="mt-3 space-y-4">
        {answers.map((a, i) => (
          <li key={i} className="space-y-2 rounded-xl bg-white p-3 text-sm">
            <Content lang={language}>
              <p className="font-medium text-gray-900">{a.question}</p>
            </Content>
            <AiBadge text={tx.aiLabel} />
            <Content lang={language} className="space-y-2 text-gray-800">
              <Markdown text={cleanTutorText(a.answer)} />
            </Content>
            {!!a.sources?.length && (
              <ul className="space-y-1 text-xs">
                {a.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target={s.web ? '_blank' : undefined} rel={s.web ? 'noopener noreferrer nofollow' : undefined} className="font-medium text-purple-700 underline underline-offset-2 hover:text-purple-900">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <ReadAloud lang={language} getText={() => cleanTutorText(a.answer)} />
          </li>
        ))}
      </ul>
    </details>
  )
}

export function LessonReview({ tx, lang, programme, index, onBack }: { tx: AcademyCopy; lang: AcademyLang; programme: Programme; index: number; onBack: () => void }) {
  const rx = REVIEW_COPY[lang]
  const lesson = programme.lessons[index]
  const topRef = useRef<HTMLElement>(null)
  useEffect(() => {
    topRef.current?.scrollIntoView({ block: 'nearest' })
  }, [index])
  const answers = programme.aiAnswers?.[lesson.id] ?? []
  // A wand answer whose section no longer exists is still listed with the tutor answers, never dropped.
  const inSection = (a: SavedAnswer) => a.source === 'wand' && a.sectionIndex !== undefined && !!lesson.sections[a.sectionIndex]
  const quiz = programme.progress.quizResults.find((r) => r.quizId === lesson.id)
  const backButton = (
    <button type="button" onClick={onBack} className="rounded-xl bg-purple-600 px-5 py-2.5 font-semibold text-white hover:bg-purple-700">
      {rx.back}
    </button>
  )

  return (
    <article ref={topRef} aria-labelledby="academy-review-lesson" className="scroll-mt-24 space-y-5 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950" role="status">
        <p className="min-w-0 flex-1 basis-60">{rx.notice}</p>
        {backButton}
      </div>
      <LessonHeader tx={tx} programme={programme} lesson={lesson} titleId="academy-review-lesson" />
      <LessonBody
        tx={tx}
        programme={programme}
        lesson={lesson}
        readingId="academy-review-reading"
        sectionExtra={(i) => {
          const note = programme.notes?.[`${lesson.id}:${i}`]
          return (
            <>
              {note && (
                <div className="rounded-xl border border-gray-200 p-3 text-sm">
                  <p className="font-medium text-gray-900">{rx.noteTitle}</p>
                  <p dir="auto" className="mt-1 whitespace-pre-wrap text-gray-800">
                    {note}
                  </p>
                </div>
              )}
              <SavedAnswers tx={tx} title={rx.sectionAnswers} answers={answers.filter((a) => inSection(a) && a.sectionIndex === i)} language={programme.language} />
            </>
          )
        }}
      />
      <SavedAnswers tx={tx} title={rx.tutorAnswers} answers={answers.filter((a) => !inSection(a))} language={programme.language} />
      {quiz && (
        <section className="rounded-xl border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900">{rx.quizTitle}</h3>
          <p className="mt-1 text-sm text-gray-700">{(quiz.openQuestions ? tx.quizPoints : tx.quizScore)(quiz.correct, quiz.total)}</p>
          <QuizReview tx={tx} result={quiz} language={programme.language} detailed />
        </section>
      )}
      <div className="border-t border-gray-100 pt-4">{backButton}</div>
    </article>
  )
}

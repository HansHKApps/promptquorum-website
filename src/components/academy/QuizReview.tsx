// PromptQuorum Academy — a finished quiz or final test, question by question. Display only: nothing here can answer,
// grade or restart a test. Used on the results screen and when an earlier lesson is reread.

import { correctIndexOf } from '@/lib/academy/scoring'
import type { QuizResult } from '@/lib/academy/types'
import { AiBadge } from './AiBadge'
import { Content } from './Content'
import type { AcademyCopy } from './copy'
import { creditLabel } from './credit'

export function QuizReview({
  tx,
  result,
  language,
  detailed,
}: {
  tx: AcademyCopy
  result: QuizResult
  language: string
  /** also show the grading feedback, the key points and why the chosen option was wrong */
  detailed?: boolean
}) {
  if (result.openQuestions) {
    return (
      <Content lang={language}>
        <ol className="mt-3 space-y-4">
          {result.openQuestions.map((q, i) => (
            <li key={q.id} className="space-y-1 text-sm">
              <p className="font-medium text-gray-900">
                {i + 1}. {q.prompt}
              </p>
              <p className="text-gray-800">
                {tx.yourAnswer}: {result.openAnswers?.[q.id] || '–'}
              </p>
              <p className={q.reveal && q.reveal.credit >= 1 ? 'text-green-800' : q.reveal && q.reveal.credit > 0 ? 'text-amber-800' : 'text-red-800'}>
                {creditLabel(tx, q.reveal?.credit ?? 0)}
              </p>
              {detailed && q.reveal?.feedback && <p className="text-gray-700">{q.reveal.feedback}</p>}
              {detailed &&
                (
                  [
                    [tx.keyPointsCovered, q.reveal?.covered],
                    [tx.keyPointsMissed, q.reveal?.missed],
                  ] as const
                ).map(([title, points]) =>
                  points?.length ? (
                    <div key={title} className="text-gray-700">
                      <p className="font-medium">{title}</p>
                      <ul className="list-disc ps-5">
                        {points.map((k) => (
                          <li key={k}>{k}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null,
                )}
              {q.reveal && (
                <p className="text-gray-600">
                  {tx.modelAnswerLabel}: {q.reveal.modelAnswer} <AiBadge text={tx.aiLabel} />
                </p>
              )}
            </li>
          ))}
        </ol>
      </Content>
    )
  }
  if (!result.questions) return null
  return (
    <Content lang={language}>
      <ol className="mt-3 space-y-4">
        {result.questions.map((q, i) => {
          const a = result.answers[q.id]
          const correctIndex = correctIndexOf(q)
          const right = a === correctIndex
          const explanation = 'reveal' in q ? q.reveal?.explanationCorrect : (q as { explanationCorrect?: string }).explanationCorrect
          return (
            <li key={q.id} className="space-y-1 text-sm">
              <p className="font-medium text-gray-900">
                {i + 1}. {q.prompt}
              </p>
              <p className={right ? 'text-green-800' : 'text-red-800'}>
                {tx.yourAnswer}: {a !== undefined && a >= 0 ? q.options[a] : '–'} {right ? '✓' : '✗'}
              </p>
              {!right && (
                <p className="text-gray-800">
                  {tx.correctAnswer}: {correctIndex !== undefined ? q.options[correctIndex] : '–'}
                </p>
              )}
              <p className="text-gray-600">
                {explanation} <AiBadge text={tx.aiLabel} />
              </p>
              {detailed && !right && q.reveal?.explanationChosen && <p className="text-gray-600">{q.reveal.explanationChosen}</p>}
            </li>
          )
        })}
      </ol>
    </Content>
  )
}

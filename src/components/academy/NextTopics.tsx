'use client'

// PromptQuorum Academy — "what to learn next": three topics adjacent to the finished program, in boxes on the results
// page. One click puts the topic into the setup form (same language, time and level) so the learner starts the next
// program in one step. The topics come from /api/academy/next-topics (stateless: only subject, level and objectives
// are sent). If the request fails the section simply stays out of the way.

import { useEffect, useState } from 'react'
import type { AcademyLang, Programme } from '@/lib/academy/types'
import { SHARE_COPY } from './copy/share'
import { htmlLangOf, langDirOf } from '@/lib/academy/language'
import { trackGrowth } from './SuccessShare'

interface Topic {
  title: string
  reason: string
}

export function NextTopics({ lang, programme, onPick }: { lang: AcademyLang; programme: Programme; onPick: (title: string) => void }) {
  const sx = SHARE_COPY[lang]
  const [topics, setTopics] = useState<Topic[] | null>(null)
  const [failed, setFailed] = useState(false)
  // One request per finished program (the id does not change while the results page is open).
  const programmeId = programme.id

  useEffect(() => {
    const ctrl = new AbortController()
    fetch('/api/academy/next-topics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject: programme.subject, language: programme.language, selfLevel: programme.selfLevel, objectives: programme.objectives.slice(0, 8) }),
      signal: ctrl.signal,
    })
      .then((r) => (r.ok ? (r.json() as Promise<{ topics?: Topic[] }>) : null))
      .then((j) => (j?.topics?.length ? setTopics(j.topics.slice(0, 3)) : setFailed(true)))
      .catch((err) => {
        if (!(err instanceof DOMException && err.name === 'AbortError')) setFailed(true)
      })
    return () => ctrl.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [programmeId])

  if (failed) return null
  return (
    <section aria-labelledby="academy-next" className="w-full space-y-3 rounded-xl border border-purple-100 bg-purple-50/40 p-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div>
        <h3 id="academy-next" className="font-semibold text-gray-900">
          {sx.nextTitle}
        </h3>
        <p className="text-sm text-gray-700">{sx.nextHint}</p>
      </div>
      {topics ? (
        <ul className="grid gap-3 sm:grid-cols-3">
          {topics.map((t) => (
            <li key={t.title} className="flex">
              <button
                type="button"
                onClick={() => {
                  trackGrowth('next_topic')
                  onPick(t.title)
                }}
                className="flex w-full flex-col gap-2 rounded-xl border border-purple-200 bg-white p-4 text-start shadow-sm transition hover:-translate-y-0.5 hover:border-purple-500 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600"
              >
                <span lang={htmlLangOf(programme.language)} dir={langDirOf(programme.language)}>
                  <span className="block font-semibold text-purple-900">{t.title}</span>
                  <span className="mt-1 block text-sm text-gray-700">{t.reason}</span>
                </span>
                <span className="mt-auto pt-1 text-sm font-semibold text-purple-700">{sx.nextStart} →</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid gap-3 sm:grid-cols-3" role="status" aria-label={sx.nextLoading}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-28 animate-pulse rounded-xl border border-purple-100 bg-white" />
          ))}
        </div>
      )}
    </section>
  )
}

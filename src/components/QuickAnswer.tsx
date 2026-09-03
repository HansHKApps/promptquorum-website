'use client'

import { ReactNode, Fragment } from 'react'
import Link from 'next/link'

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

// Parses [text](url) links, bare URLs, and **bold** markers into React nodes.
// Content in article data follows GEO Rule 1 (bold-wrapped lead sentence) and
// occasionally links — this must render them, not print the raw markdown.
function renderRichText(text: string, lang: Language): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      const [, label, url] = linkMatch
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return (
          <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-teal-400 font-medium hover:underline">
            {label}
          </a>
        )
      }
      const finalUrl = lang !== 'en' && url.startsWith('/') && !url.startsWith(`/${lang}/`) ? `/${lang}${url}` : url
      return (
        <Link key={i} href={finalUrl} className="text-teal-400 font-medium hover:underline">
          {label}
        </Link>
      )
    }

    const urlSegments = part.split(/(https?:\/\/[^\s,;)\]"]+)/g)
    return (
      <Fragment key={i}>
        {urlSegments.map((seg, j) => {
          if (/^https?:\/\//.test(seg)) {
            return (
              <a key={j} href={seg} target="_blank" rel="noopener noreferrer" className="text-teal-400 font-medium hover:underline break-all">
                {seg}
              </a>
            )
          }
          const boldParts = seg.split(/(\*\*[^*]+\*\*)/g)
          return (
            <Fragment key={j}>
              {boldParts.map((bp, k) =>
                bp.startsWith('**') && bp.endsWith('**')
                  ? <strong key={k} className="font-semibold text-white">{bp.slice(2, -2)}</strong>
                  : bp
              )}
            </Fragment>
          )
        })}
      </Fragment>
    )
  })
}

interface QuickAnswerProps {
  lang?: Language
  question: string
  answer: string
  bullets?: string[]
  updatedDate?: string
}

const LABELS: Partial<Record<Language, { title: string; updated: string }>> = {
  en: { title: 'Quick Answer', updated: 'Updated' },
  de: { title: 'Schnelle Antwort', updated: 'Aktualisiert' },
  fr: { title: 'Réponse rapide', updated: 'Mis à jour' },
  ja: { title: 'クイックアンサー', updated: '更新日' },
  zh: { title: '快速答案', updated: '更新' },
  es: { title: 'Respuesta rápida', updated: 'Actualizado' },
  pt: { title: 'Resposta rápida', updated: 'Atualizado' },
  ar: { title: 'إجابة سريعة', updated: 'تحديث' },
  ko: { title: '빠른 답변', updated: '업데이트' },
}

export function QuickAnswer({
  lang = 'en',
  question,
  answer,
  bullets = [],
  updatedDate,
}: QuickAnswerProps): ReactNode {
  const label = (LABELS[lang] ?? LABELS["en"])!

  return (
    <>

      {/* Several articles list "#quick-answer" in their table of contents; without an id
          here those entries were dead clicks. */}
      <div
        id="quick-answer"
        className="bg-slate-900 border border-teal-700/30 border-l-4 border-l-teal-600 rounded-lg p-6 mb-8 max-w-full"
        role="complementary"
        aria-label={label.title}
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
          <span className="text-base" aria-hidden="true">
            ⚡
          </span>
          {label.title}
          {updatedDate && (
            <span className="ml-auto font-normal text-gray-500">
              {label.updated}: <time dateTime={updatedDate}>{updatedDate}</time>
            </span>
          )}
        </div>

        <h2 className="text-lg sm:text-xl font-bold leading-tight text-gray-100 mb-3">
          {renderRichText(question, lang)}
        </h2>

        <p className="text-base leading-relaxed text-gray-200 max-w-3xl mb-3">
          {renderRichText(answer, lang)}
        </p>

        {bullets.length > 0 && (
          <ul className="space-y-2 list-none p-0 m-0">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className="text-sm text-gray-300 pl-5 relative"
              >
                <span
                  className="absolute left-0 text-teal-400 font-semibold"
                  aria-hidden="true"
                >
                  →
                </span>
                {renderRichText(bullet.replace(/^(→|->|➜|➔)\s*/, ''), lang)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

'use client'

import Link from 'next/link'
import { promptBitesContent } from '@/lib/prompt-bites/articles-barrel'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import type { Language } from '@/lib/blog/blogContent'

interface Props {
  slug: string
  lang: Language
}

function promptBitesHubHref(lang: Language): string {
  return lang === 'en' ? '/prompt-bites' : `/${lang}/prompt-bites`
}

export function PromptBitesPostClient({ slug, lang }: Props) {
  const key = PROMPT_BITES_SLUG_TO_KEY[slug]
  const articleData = key ? promptBitesContent[key] : undefined
  const article = articleData?.[lang] ?? articleData?.['en']

  if (!article) {
    return (
      <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-text-secondary">Article not found.</p>
        </div>
      </div>
    )
  }

  const quickAnswer = (article as any).quickAnswerTop?.[lang] ?? (article as any).quickAnswerTop?.['en']
  const bullets: string[] = quickAnswer?.bullets ?? []

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">

        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-text-secondary">
          <Link href={promptBitesHubHref(lang)} className="hover:text-primary transition-colors">
            Prompt Bites
          </Link>
          <span className="mx-2">›</span>
          <span className="text-text-primary">{article.title}</span>
        </nav>

        {/* Title */}
        <h1 className="prompt-bite-h1 text-3xl sm:text-4xl font-bold text-text-primary mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Quick Answer block */}
        {quickAnswer && (
          <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Quick Answer
            </p>
            <p className="prompt-bite-answer text-text-primary leading-relaxed mb-4">
              {quickAnswer.answer}
            </p>
            {bullets.length > 0 && (
              <ul className="space-y-2">
                {bullets.map((b: string, i: number) => (
                  <li key={i} className="flex gap-2 text-sm text-text-secondary">
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {quickAnswer.updatedDate && (
              <p className="text-xs text-text-secondary mt-4">
                Updated: {quickAnswer.updatedDate}
              </p>
            )}
          </div>
        )}

        {/* Metadata */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(article as any).theme && (
            <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-surface border border-primary/20 text-text-secondary">
              {(article as any).theme}
            </span>
          )}
          {(article as any).educationalLevel && (
            <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-surface border border-primary/20 text-text-secondary">
              {(article as any).educationalLevel}
            </span>
          )}
        </div>

        {/* Back to hub */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <Link
            href={promptBitesHubHref(lang)}
            className="text-sm text-primary hover:underline"
          >
            ← Back to Prompt Bites
          </Link>
        </div>
      </div>
    </div>
  )
}

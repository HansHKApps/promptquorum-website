'use client'

import Link from 'next/link'
import { promptBitesContent } from '@/lib/prompt-bites/articles-barrel'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import { PROMPT_BITES_CATEGORIES } from '@/lib/prompt-bites/categories'
import type { Language } from '@/lib/blog/blogContent'

interface Props {
  lang: Language
}

function promptBitesArticleHref(lang: Language, slug: string): string {
  return lang === 'en' ? `/prompt-bites/${slug}` : `/${lang}/prompt-bites/${slug}`
}

export function PromptBitesHubClient({ lang }: Props) {
  const slugsByCategory = PROMPT_BITES_CATEGORIES.map((cat) => ({
    ...cat,
    slugs: cat.articleSlugs,
  }))

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-4">
            Prompt Bites
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Quick Answers to Local LLM Questions
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            30 short-answer guides. VRAM requirements, Ollama picks, hardware comparisons, and setup tips — answered in 60 seconds or less.
          </p>
        </header>

        <div className="space-y-12">
          {slugsByCategory.map((cat) => (
            cat.slugs.length > 0 && (
              <section key={cat.id}>
                <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="inline-block px-2 py-0.5 text-xs font-bold rounded bg-primary/10 text-primary">
                    {cat.id.toUpperCase()}
                  </span>
                  {cat.label}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.slugs.map((slug) => {
                    const key = PROMPT_BITES_SLUG_TO_KEY[slug]
                    const article = promptBitesContent[key]?.[lang] ?? promptBitesContent[key]?.['en']
                    if (!article) return null
                    const href = promptBitesArticleHref(lang, slug)
                    return (
                      <Link
                        key={slug}
                        href={href}
                        className="block rounded-xl border border-primary/15 bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all"
                      >
                        <p className="text-sm font-semibold text-text-primary leading-snug">
                          {article.title}
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

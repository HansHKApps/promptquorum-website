'use client'

import Link from 'next/link'
import { promptBitesContent } from '@/lib/prompt-bites/articles-barrel'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import { PROMPT_BITES_CATEGORIES } from '@/lib/prompt-bites/categories'
import type { Language } from '@/lib/blog/blogContent'

interface Props {
  lang: Language
}

const HUB_HEADLINE: Record<Language, string> = {
  en: 'Quick Answers to Local LLM Questions',
  de: 'Schnelle Antworten zu lokalen LLM-Fragen',
  fr: 'Réponses rapides aux questions sur les LLM locaux',
  ja: 'ローカルLLMの質問への迅速な回答',
  zh: '本地LLM问题的快速解答',
}

const HUB_SUBTITLE: Record<Language, string> = {
  en: '30 short-answer guides. VRAM requirements, Ollama picks, hardware comparisons, and setup tips — answered in 60 seconds or less.',
  de: '30 Kurzantwort-Leitfäden. VRAM-Anforderungen, Ollama-Empfehlungen, Hardware-Vergleiche und Setup-Tipps — in 60 Sekunden beantwortet.',
  fr: '30 guides à réponse rapide. Besoins en VRAM, choix Ollama, comparaisons matérielles et conseils de configuration — répondus en 60 secondes.',
  ja: '30の短答ガイド。VRAM要件、Ollamaのおすすめ、ハードウェア比較、セットアップのヒント — 60秒以内に回答。',
  zh: '30篇简答指南。显存要求、Ollama推荐、硬件对比和设置技巧 — 60秒内解答。',
}

const EDUCATIONAL_LEVEL: Record<string, Record<Language, string>> = {
  Beginner:     { en: 'Beginner',     de: 'Einsteiger',      fr: 'Débutant',      ja: '初級', zh: '初级' },
  Intermediate: { en: 'Intermediate', de: 'Fortgeschritten', fr: 'Intermédiaire', ja: '中級', zh: '中级' },
  Advanced:     { en: 'Advanced',     de: 'Fortgeschritten+',fr: 'Avancé',        ja: '上級', zh: '高级' },
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
            {HUB_HEADLINE[lang]}
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {HUB_SUBTITLE[lang]}
          </p>
        </header>

        <div className="space-y-12">
          {slugsByCategory.map((cat) => (
            cat.slugs.length > 0 && (
              <section key={cat.id}>
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-primary/10 text-primary shrink-0">
                      {cat.label}
                    </span>
                    {cat.titleEn}
                  </h2>
                  <p className="text-sm text-text-secondary mt-1 ml-8">{cat.descriptionEn}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.slugs.map((slug) => {
                    const key = PROMPT_BITES_SLUG_TO_KEY[slug]
                    const article = promptBitesContent[key]?.[lang] ?? promptBitesContent[key]?.['en']
                    if (!article) return null
                    const href = promptBitesArticleHref(lang, slug)
                    const qaData = (article as any).quickAnswerTop
                    const langAnswer = qaData?.[lang]?.answer
                    const enAnswer = qaData?.['en']?.answer
                    const rawAnswer = langAnswer && !langAnswer.includes('translation pending') ? langAnswer : enAnswer
                    const previewText = rawAnswer ? rawAnswer.split('.')[0] + '.' : null
                    const levelKey = (article as any).educationalLevel
                    const levelLabel = EDUCATIONAL_LEVEL[levelKey]?.[lang] ?? levelKey
                    return (
                      <Link
                        key={slug}
                        href={href}
                        className="flex flex-col rounded-xl border border-primary/15 bg-card p-4 hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-semibold text-text-primary leading-snug line-clamp-2 flex-1">
                            {article.title}
                          </p>
                          {levelKey && (
                            <span className="shrink-0 text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary/80 font-medium">
                              {levelLabel}
                            </span>
                          )}
                        </div>
                        {previewText && (
                          <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mt-2">
                            {previewText}
                          </p>
                        )}
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

import { NextResponse } from 'next/server'
import type { SearchEntry } from '@/components/search/search-utils'
import { SUPPORTED_LANGS } from '@/components/search/search-utils'

import { peContent } from '@/lib/prompt-engineering/articles-barrel'
import { llmContent } from '@/lib/local-llms/articles-barrel'
import { powerLLMContent } from '@/lib/power-local-llm/articles-barrel'
import { promptBitesContent } from '@/lib/prompt-bites/articles-barrel'
import { blogContent } from '@/lib/blog/blogContent'

import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { POWER_LLM_SLUG_TO_KEY } from '@/lib/power-local-llm/slugs'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import { POWER_LLM_PUBLISHED_SLUGS } from '@/lib/power-local-llm/published'

export const dynamic = 'force-static'

function invertMap(map: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {}
  for (const [slug, key] of Object.entries(map)) result[key] = slug
  return result
}

function articleUrl(hub: string, slug: string, lang: string): string {
  const usesPathPrefix = hub === 'power-local-llm' || hub === 'prompt-bites' || hub === 'blog'
  if (usesPathPrefix) {
    return lang === 'en' ? `/${hub}/${slug}` : `/${lang}/${hub}/${slug}`
  }
  return lang === 'en' ? `/${hub}/${slug}` : `/${lang}/${hub}/${slug}`
}

export function GET() {
  const entries: SearchEntry[] = []

  const peKeyToSlug = invertMap(PE_SLUG_TO_KEY as Record<string, string>)
  const llmKeyToSlug = invertMap(LLM_SLUG_TO_KEY as Record<string, string>)
  const powerKeyToSlug = invertMap(POWER_LLM_SLUG_TO_KEY as Record<string, string>)
  const bitesKeyToSlug = invertMap(PROMPT_BITES_SLUG_TO_KEY as Record<string, string>)
  const blogKeyToSlug = invertMap(SLUG_TO_POST_ID as Record<string, string>)

  for (const [key, langMap] of Object.entries(peContent)) {
    const slug = peKeyToSlug[key]
    if (!slug) continue
    for (const lang of SUPPORTED_LANGS) {
      const article = (langMap as Record<string, typeof langMap[keyof typeof langMap]>)[lang]
      if (!article) continue
      const a = article as { aboutTopics?: string[] }
      entries.push({
        id: `pe-${lang}-${key}`,
        articleKey: `pe-${key}`,
        title: article.title ?? '',
        description: article.metaDescription ?? article.intro ?? '',
        section: article.theme ?? '',
        hub: 'prompt-engineering',
        level: (article.educationalLevel ?? '').toLowerCase(),
        tags: a.aboutTopics ?? [],
        url: articleUrl('prompt-engineering', slug, lang),
        lang,
      })
    }
  }

  for (const [key, langMap] of Object.entries(llmContent)) {
    const slug = llmKeyToSlug[key]
    if (!slug) continue
    for (const lang of SUPPORTED_LANGS) {
      const article = langMap[lang]
      if (!article) continue
      entries.push({
        id: `llm-${lang}-${key}`,
        articleKey: `llm-${key}`,
        title: article.title ?? '',
        description: article.metaDescription ?? article.intro ?? '',
        section: article.theme ?? '',
        hub: 'local-llms',
        level: (article.educationalLevel ?? '').toLowerCase(),
        tags: (article.targetKeywords ?? []) as string[],
        url: articleUrl('local-llms', slug, lang),
        lang,
      })
    }
  }

  for (const [key, langMap] of Object.entries(powerLLMContent)) {
    const slug = powerKeyToSlug[key]
    if (!slug || !POWER_LLM_PUBLISHED_SLUGS.has(slug)) continue
    for (const lang of SUPPORTED_LANGS) {
      const article = langMap[lang]
      if (!article) continue
      entries.push({
        id: `plm-${lang}-${key}`,
        articleKey: `plm-${key}`,
        title: article.title ?? '',
        description: article.metaDescription ?? article.intro ?? '',
        section: article.theme ?? '',
        hub: 'power-local-llm',
        level: (article.educationalLevel ?? '').toLowerCase(),
        tags: (article.targetKeywords ?? []) as string[],
        url: articleUrl('power-local-llm', slug, lang),
        lang,
      })
    }
  }

  for (const [key, langMap] of Object.entries(promptBitesContent)) {
    const slug = bitesKeyToSlug[key]
    if (!slug) continue
    for (const lang of SUPPORTED_LANGS) {
      const article = langMap[lang]
      if (!article) continue
      entries.push({
        id: `pb-${lang}-${key}`,
        articleKey: `pb-${key}`,
        title: article.title ?? '',
        description: article.metaDescription ?? article.intro ?? '',
        section: article.theme ?? '',
        hub: 'prompt-bites',
        level: (article.educationalLevel ?? '').toLowerCase(),
        tags: (article.targetKeywords ?? []) as string[],
        url: articleUrl('prompt-bites', slug, lang),
        lang,
      })
    }
  }

  for (const [key, langMap] of Object.entries(blogContent)) {
    const slug = blogKeyToSlug[key]
    if (!slug) continue
    for (const lang of SUPPORTED_LANGS) {
      const article = langMap[lang]
      if (!article) continue
      entries.push({
        id: `blog-${lang}-${key}`,
        articleKey: `blog-${key}`,
        title: article.title ?? '',
        description: article.metaDescription ?? article.intro ?? '',
        section: article.category ?? '',
        hub: 'blog',
        level: (article.educationalLevel ?? '').toLowerCase(),
        tags: [],
        url: articleUrl('blog', slug, lang),
        lang,
      })
    }
  }

  return NextResponse.json(entries, {
    headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600' },
  })
}

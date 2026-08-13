import { promptBitesContent } from './articles-barrel'
import { PROMPT_BITES_SLUG_TO_KEY } from './slugs'
import { latestDateModified } from '@/lib/hub-reviewed-date'
import type { Language } from '@/lib/blog/blogContent'

export interface PromptBitesHubArticleData {
  title: string
  publishDate?: string
  dateModified?: string
  /** First-sentence preview derived from quickAnswerTop, or null if unavailable. */
  previewText: string | null
  educationalLevel?: string
}

export interface PromptBitesHubData {
  /** slug → narrowed article data, resolved for the requested language */
  articles: Record<string, PromptBitesHubArticleData>
  /** Most recent English dateModified/publishDate across every article */
  latestDateModified?: string
}

function firstSentence(text: string): string {
  const match = text.match(/^.+?[.!?](?=\s|$)/)
  return match?.[0] ?? text.split('.')[0] + '.'
}

/**
 * Builds the data the PromptBitesHubClient component needs, for one resolved
 * language. Called on the server so that promptBitesContent (123 articles,
 * all 9 languages, full article bodies) never ships to the browser — only a
 * small per-slug summary in the language this page will actually render.
 */
export function buildPromptBitesHubData(lang: Language): PromptBitesHubData {
  const articles: Record<string, PromptBitesHubArticleData> = {}

  for (const [slug, key] of Object.entries(PROMPT_BITES_SLUG_TO_KEY)) {
    const data = promptBitesContent[key]
    const article = data?.[lang] ?? data?.['en']
    if (!article?.title) continue

    // Matches the fallback/preview logic previously computed client-side:
    // prefer the resolved-language answer unless it's a translation-pending
    // placeholder, otherwise fall back to English; derive the first sentence.
    const qaData = (article as any).quickAnswerTop
    const langAnswer = qaData?.[lang]?.answer
    const enAnswer = qaData?.['en']?.answer
    const rawAnswer = langAnswer && !langAnswer.includes('translation pending') ? langAnswer : enAnswer
    const previewText = rawAnswer ? firstSentence(rawAnswer) : null

    articles[slug] = {
      title: article.title,
      publishDate: data?.['en']?.publishDate,
      dateModified: data?.['en']?.dateModified,
      previewText,
      educationalLevel: article.educationalLevel,
    }
  }

  return {
    articles,
    latestDateModified: latestDateModified(Object.values(promptBitesContent).map((a) => a?.en)),
  }
}

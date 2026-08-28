import type { Language } from '@/lib/blog/blogContent'

/**
 * Trim an article's all-locales record down to what the browser actually needs.
 *
 * Article routes used to pass the complete `Partial<Record<Language, T>>` — all nine
 * language blocks — into their client component, while only one is ever rendered. On the
 * largest articles that is ~800 KB of source serialised into the RSC flight payload of
 * every HTML response, parsed and hydrated on arrival. It was the dominant contributor to
 * the 260 ms INP Clarity reported, and it is billable Vercel bandwidth on every session.
 *
 * The clients need exactly two things from the record: the block for the rendered
 * locale (with `en` as the fallback when a translation is missing), and the list of
 * locales that exist, for the cross-language links bar. `availableLangs` carries the
 * latter so the trimmed record does not have to.
 */
export function narrowArticleData<T>(
  content: Partial<Record<Language, T>> | undefined,
  lang: Language
): { articleData: Partial<Record<Language, T>>; availableLangs: string[] } {
  if (!content) return { articleData: {}, availableLangs: [] }

  const availableLangs = Object.keys(content)
  const narrowed: Partial<Record<Language, T>> = {}

  if (content[lang]) narrowed[lang] = content[lang]
  // Keep `en` as the render fallback for locales whose translation is absent or partial
  // (PromptEngineeringPostClient also falls back when a block has fewer than 5 sections).
  if (lang !== 'en' && content.en) narrowed.en = content.en

  return { articleData: narrowed, availableLangs }
}

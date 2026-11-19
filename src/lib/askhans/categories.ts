// Typed access to the editable category list (categories.json).
// Hans edits the JSON file; nothing here needs to change when categories, pictures or links do.

import raw from './categories.json'
import type { AskLang } from '@/components/askhans/copy/types'

export interface AskHansLink {
  id: string
  title: string
  description: string
  url: string
  /** lucide-react icon name */
  icon: string
  /** true = auto-derived stand-in, to be replaced by Hans */
  placeholder: boolean
  /** reserved (v1 does not render): open in a new tab */
  external: boolean
  /** reserved (v1 does not render): advertising label + rel="sponsored noopener" */
  affiliate: boolean
}

/** Topic-picture link (v1): one plain, non-affiliate price-comparison page per category picture. */
export interface AskHansPictureLink {
  id: string
  /**
   * Per-language destination. `default` is the required global fallback (a generic, country-neutral
   * page, e.g. amazon.com) used for any language with no entry of its own — never another language's
   * local page. See `pictureLinkUrl()`.
   */
  urls: Partial<Record<AskLang, string>> & { default: string }
  /** always false in v1 — PromptQuorum has no affiliate programme; reserved for a later, explicit decision */
  affiliate: boolean
}

/** Resolves a topic-picture link to the visitor's own language, falling back to the global default. */
export function pictureLinkUrl(link: AskHansPictureLink, lang: AskLang): string {
  return link.urls[lang] ?? link.urls.default
}

export interface AskHansCategory {
  key: string
  label_de: string
  label_en: string
  /** lucide-react icon name used for the placeholder picture */
  icon: string
  image: string
  alt: string
  affiliate: boolean
  links: AskHansLink[]
  /** optional: makes the topic picture itself a clickable external link (see MarketingPanel) */
  pictureLink?: AskHansPictureLink
}

export const ASK_HANS_CATEGORIES = (raw as { categories: AskHansCategory[] }).categories

export const DEFAULT_CATEGORY_KEY = 'default'

const BY_KEY = new Map(ASK_HANS_CATEGORIES.map((c) => [c.key, c]))

export function getCategory(key: string | null | undefined): AskHansCategory {
  return (key && BY_KEY.get(key)) || (BY_KEY.get(DEFAULT_CATEGORY_KEY) as AskHansCategory)
}

export function isCategoryKey(key: unknown): key is string {
  return typeof key === 'string' && BY_KEY.has(key)
}

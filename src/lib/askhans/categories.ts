// Typed access to the editable category list (categories.json).
// Hans edits the JSON file; nothing here needs to change when categories, pictures or links do.

import raw from './categories.json'

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

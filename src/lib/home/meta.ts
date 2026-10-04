import { translations } from '@/translations'
import { TOTAL_TOOL_COUNT } from '@/lib/power-local-llm/apps-barrel'

/**
 * Homepage title/description for a locale, with the live directory size filled in.
 * The strings in translations.ts carry a `{{count}}` placeholder instead of a number,
 * so adding apps to the directory updates the homepage meta (title, description,
 * Open Graph, Twitter) on the next build — no hand-edited "224+" that goes stale.
 */
export function getHomeMeta(lang: keyof typeof translations): { title: string; description: string } {
  const t = translations[lang]
  const fill = (s: string) => s.replace(/\{\{count\}\}/g, String(TOTAL_TOOL_COUNT))
  return { title: fill(t.homeMetaTitle), description: fill(t.homeMetaDescription) }
}

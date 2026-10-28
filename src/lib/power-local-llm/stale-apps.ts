// Auto-generated "maintenance warning" for articles that substantially cover apps with no upstream
// update in 3+ months (owner rule 2026-10-16: stale = lastUpstreamUpdate older than APP_QUIET_DAYS).
// Driven by the tiles' own dates, so the warning appears and clears itself as the data changes —
// no per-article hand edits to forget. An app's own dedicated review is excluded (it carries its own
// warning text), as is the directory hub (every tile has its badge).
import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { getAppActivity } from '@/components/local-ai-directory/staleness'
import { localAiApps } from './apps-barrel'
import { powerLLMContent } from './content'
import { POWER_LLM_SLUG_TO_KEY } from './slugs'
import { llmContent } from '@/lib/local-llms/content'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { resolveAll } from '@/components/local-ai-directory/directory-i18n'
import { t as directoryT } from '@/components/local-ai-directory/directory-ui-client'

// A stale app counts as "covered" when it is named in the title/a heading, or named this many times in the body.
export const STALE_APP_MIN_MENTIONS = 5
const MAX_LISTED = 8
const SKIP_SECTION_KEYS = new Set(['sources', 'relatedReading'])

function collectText(node: unknown, out: string[]): void {
  if (typeof node === 'string') out.push(node)
  else if (Array.isArray(node)) node.forEach((n) => collectText(n, out))
  else if (node && typeof node === 'object') Object.values(node as Record<string, unknown>).forEach((n) => collectText(n, out))
}

export function countName(text: string, name: string): number {
  const esc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return (text.match(new RegExp(`(?<![\\w-])${esc}(?![\\w-])`, 'g')) ?? []).length
}

export function getStaleAppsForArticle(
  slug: string,
  en: LLMArticle | undefined,
  lang: Language,
  now: number = Date.now()
): { name: string; date: string }[] {
  if (!en || slug === 'local-llm-software-directory-2026') return []
  const headings: string[] = [en.title ?? '', en.seoTitle ?? '']
  const body: string[] = []
  for (const [key, section] of Object.entries(en.sections ?? {})) {
    if (SKIP_SECTION_KEYS.has(key)) continue
    headings.push((section as { title?: string }).title ?? '')
    collectText(section, body)
  }
  const headingText = headings.join('\n')
  const bodyText = body.join('\n')
  const found: { name: string; iso: string }[] = []
  for (const app of localAiApps) {
    if (app.reviewSlug === slug || !app.lastUpstreamUpdate) continue
    const activity = getAppActivity(app.lastUpstreamUpdate, now)
    if (activity !== 'quiet' && activity !== 'dead') continue
    if (countName(headingText, app.name) > 0 || countName(bodyText, app.name) >= STALE_APP_MIN_MENTIONS) {
      found.push({ name: app.name, iso: app.lastUpstreamUpdate })
    }
  }
  return found
    .sort((a, b) => a.iso.localeCompare(b.iso))
    .slice(0, MAX_LISTED)
    .map((f) => ({ name: f.name, date: formatDisplayDate(f.iso, lang) }))
}

export type StaleBanner = { label: string; body: string }

/** Fully resolved (single-language) banner copy for one article page, or undefined when nothing applies. */
export function getStaleBanner(cluster: 'power-local-llm' | 'local-llms', urlSlug: string, lang: Language): StaleBanner | undefined {
  const en =
    cluster === 'power-local-llm'
      ? powerLLMContent[POWER_LLM_SLUG_TO_KEY[urlSlug] as keyof typeof powerLLMContent]?.['en']
      : llmContent[LLM_SLUG_TO_KEY[urlSlug] as keyof typeof llmContent]?.['en']
  const apps = getStaleAppsForArticle(urlSlug, en as LLMArticle | undefined, lang)
  if (apps.length === 0) return undefined
  const ui = resolveAll(lang)
  return {
    label: directoryT('staleAppsBannerLabel', ui),
    body: directoryT('staleAppsBannerBodyTemplate', ui, { apps: apps.map((a) => `${a.name} (${a.date})`).join(', ') }),
  }
}

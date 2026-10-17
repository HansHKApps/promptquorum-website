// Makes the tools named in a review's competitor/comparison sections clickable
// and adds a "Compare in directory" link under each of those sections.
//
// Runs server-side on the narrowed article data right before it is handed to the
// client renderer, so nothing is hand-edited in the 240 articles and the links
// are in the crawled HTML. Only link markup is added: the visible text of every
// cell and list item is unchanged.
//
// Rules, per tool name in the name column / leading token of a list item:
//   * resolved through the alias map (exact normalised match, see
//     tool-alias-map.ts — never fuzzy matching of free text);
//   * the review's own tool is left alone;
//   * a name that is plain text, or links out to the vendor, links to the tool's
//     directory entry (/directory?tool=<slug>), keeping the reader on-site —
//     the vendor URL is on that entry;
//   * a name that already links to a PromptQuorum page is kept as is;
//   * anything else is left untouched and reported by the stats.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle, LLMSection } from '@/lib/local-llms/types'
import { directoryEntryHref, directoryHref } from './directory-funnel'
import { funnelT } from './directory-funnel-i18n'
import { resolveToolSlug } from './tool-alias-map'

/** Section keys whose English and translated blocks hold competitor/comparison content. */
const COMPETITOR_KEYS: ReadonlySet<string> = new Set(['competitors', 'vsAlternatives', 'alternatives', 'competitorsAndAlternatives'])
export const isCompetitorSectionKey = (key: string): boolean => COMPETITOR_KEYS.has(key) || /^comparison/.test(key)

export interface CompetitorLinkStats {
  sections: number
  linkedPlain: number
  retargetedExternal: number
  keptInternal: number
  self: number
  /** Names that were looked at but could not be resolved. */
  unresolved: string[]
}

export const emptyStats = (): CompetitorLinkStats => ({
  sections: 0, linkedPlain: 0, retargetedExternal: 0, keptInternal: 0, self: 0, unresolved: [],
})

const isInternal = (url: string) => url.startsWith('/') || /^https?:\/\/(www\.)?promptquorum\.com\//.test(url)

interface Ctx {
  lang: Language
  selfSlug: string | null
  stats: CompetitorLinkStats
}

/** New markdown for a name, or null to leave the original text untouched. */
function linkFor(name: string, existingUrl: string | null, bold: boolean, ctx: Ctx): string | null {
  const wrap = (href: string) => (bold ? `**[${name}](${href})**` : `[${name}](${href})`)
  const slug = resolveToolSlug(name)
  if (slug) {
    if (slug === ctx.selfSlug) { ctx.stats.self++; return null }
    if (existingUrl && isInternal(existingUrl)) { ctx.stats.keptInternal++; return null }
    if (existingUrl) ctx.stats.retargetedExternal++
    else ctx.stats.linkedPlain++
    return wrap(directoryEntryHref(slug, ctx.lang))
  }
  // Already a link to a PromptQuorum page: clickable, nothing to report.
  if (!(existingUrl && isInternal(existingUrl))) ctx.stats.unresolved.push(name)
  return null
}

// A whole cell that is exactly one name: `X`, `**X**`, `[X](u)` or `**[X](u)**`.
const CELL_LINK = /^(\*\*)?\[([^\]]+)\]\(([^)\s]+)\)(\*\*)?$/
const CELL_BOLD = /^\*\*([^*[\]]+)\*\*$/
const CELL_PLAIN = /^[^*[\]()|]+$/

function linkCell(cell: string, ctx: Ctx): string {
  const text = cell.trim()
  let m = text.match(CELL_LINK)
  if (m) return linkFor(m[2], m[3], Boolean(m[1] && m[4]), ctx) ?? cell
  m = text.match(CELL_BOLD)
  if (m) return linkFor(m[1].trim(), null, true, ctx) ?? cell
  if (CELL_PLAIN.test(text)) return linkFor(text, null, false, ctx) ?? cell
  if (text && text !== '—') ctx.stats.unresolved.push(text)
  return cell
}

// A list item that starts with a name: `**[X](u)** …`, `[X](u) …` or `**X** …`.
const ITEM_BOLD_LINK = /^\*\*\[([^\]]+)\]\(([^)\s]+)\)\*\*/
const ITEM_LINK = /^\[([^\]]+)\]\(([^)\s]+)\)/
const ITEM_BOLD = /^\*\*([^*[\]]+)\*\*/

function linkItem(item: string, ctx: Ctx): string {
  let m = item.match(ITEM_BOLD_LINK)
  if (m) {
    const out = linkFor(m[1], m[2], true, ctx)
    return out ? out + item.slice(m[0].length) : item
  }
  m = item.match(ITEM_LINK)
  if (m) {
    const out = linkFor(m[1], m[2], false, ctx)
    return out ? out + item.slice(m[0].length) : item
  }
  m = item.match(ITEM_BOLD)
  if (m) {
    const out = linkFor(m[1].trim(), null, true, ctx)
    return out ? out + item.slice(m[0].length) : item
  }
  return item
}

function linkSection(section: LLMSection, ctx: Ctx): LLMSection {
  const hasRows = Array.isArray(section.rows) && Array.isArray(section.columns) && section.columns.length > 0
  const hasItems = Array.isArray(section.items) && section.items.length > 0
  if (!hasRows && !hasItems) return section
  ctx.stats.sections++

  const next: LLMSection = { ...section }

  // Feature matrix: rows are attributes ("License", "Platforms"), tools are the column
  // headers. Link the headers; the row labels are not tool names. Skipped for the
  // `itemHeadings` card layout, which uses the raw column strings as row keys and labels.
  const headerTools = hasRows && !section.itemHeadings ? section.columns!.slice(1).filter((c) => resolveToolSlug(c.trim())) : []
  if (headerTools.length >= 2) {
    next.columns = section.columns!.map((c, i) => {
      if (i === 0) return c
      const slug = resolveToolSlug(c.trim())
      if (!slug) return c
      if (slug === ctx.selfSlug) { ctx.stats.self++; return c }
      ctx.stats.linkedPlain++
      return `[${c.trim()}](${directoryEntryHref(slug, ctx.lang)})`
    })
    next.directoryCompare = { label: funnelT('compareInDirectory', ctx.lang), href: directoryHref(ctx.lang) }
    return next
  }

  if (hasRows) {
    // Same key resolution as the two renderers: lowercased/dotless label (local-llms),
    // the label with link markup stripped, the raw column string, then the column index.
    const col = section.columns![0]
    const label = col.replace(/^\[([^\]]+)\]\([^)]+\)$/, '$1')
    const candidates = [label.toLowerCase().replace(/\./g, ''), label, col, '0']
    next.rows = section.rows!.map((row) => {
      const key = candidates.find((k) => typeof row[k] === 'string')
      return key === undefined ? row : { ...row, [key]: linkCell(row[key], ctx) }
    })
  }
  if (hasItems) next.items = section.items!.map((item) => linkItem(item, ctx))
  next.directoryCompare = { label: funnelT('compareInDirectory', ctx.lang), href: directoryHref(ctx.lang) }
  return next
}

/**
 * Returns the article with competitor/comparison sections linked. Same object
 * back when there is nothing to change. `selfSlug` is the review's own tile.
 */
export function linkCompetitorSections(
  article: LLMArticle,
  lang: Language,
  selfSlug: string | null,
  stats: CompetitorLinkStats = emptyStats(),
): LLMArticle {
  const ctx: Ctx = { lang, selfSlug, stats }
  const sections = article.sections as Record<string, LLMSection> | undefined
  if (!sections) return article
  let changed = false
  const nextSections: Record<string, LLMSection> = {}
  for (const [key, section] of Object.entries(sections)) {
    if (isCompetitorSectionKey(key)) {
      const out = linkSection(section, ctx)
      if (out !== section) changed = true
      nextSections[key] = out
    } else {
      nextSections[key] = section
    }
  }
  return changed ? { ...article, sections: nextSections } : article
}

/**
 * Apply to every locale block of narrowed article data (`lang` block + `en`
 * fallback). Links use the rendered page's `lang`, so an `en` fallback block
 * shown on a /de page still links to /de/directory.
 */
export function linkCompetitorsInArticleData<T extends Partial<Record<Language, LLMArticle>>>(
  articleData: T,
  lang: Language,
  selfSlug: string | null,
  stats: CompetitorLinkStats = emptyStats(),
): T {
  const out: Partial<Record<Language, LLMArticle>> = {}
  for (const [l, block] of Object.entries(articleData) as [Language, LLMArticle | undefined][]) {
    out[l] = block ? linkCompetitorSections(block, lang, selfSlug, stats) : block
  }
  return out as T
}

// --- tools named in a review's own competitor section, in reading order ------

function nameFromCell(cell: string): string | null {
  const text = cell.trim()
  const link = text.match(CELL_LINK)
  if (link) return link[2]
  const bold = text.match(CELL_BOLD)
  if (bold) return bold[1].trim()
  return CELL_PLAIN.test(text) ? text : null
}

function nameFromItem(item: string): string | null {
  return (item.match(ITEM_BOLD_LINK) ?? item.match(ITEM_LINK) ?? item.match(ITEM_BOLD))?.[1]?.trim() ?? null
}

function toolSlugsOfSection(section: LLMSection): string[] {
  const out: string[] = []
  const columns = Array.isArray(section.columns) ? section.columns : []
  if (Array.isArray(section.rows) && columns.length > 0) {
    const headerSlugs = section.itemHeadings ? [] : columns.slice(1).map((c) => resolveToolSlug(c.trim())).filter((s): s is string => !!s)
    if (headerSlugs.length >= 2) {
      out.push(...headerSlugs)
    } else {
      // Same key resolution as linkSection / the two renderers.
      const col = columns[0]
      const label = col.replace(/^\[([^\]]+)\]\([^)]+\)$/, '$1')
      const candidates = [label.toLowerCase().replace(/\./g, ''), label, col, '0']
      for (const row of section.rows) {
        const key = candidates.find((k) => typeof row[k] === 'string')
        const name = key === undefined ? null : nameFromCell(row[key])
        const slug = name ? resolveToolSlug(name) : null
        if (slug) out.push(slug)
      }
    }
  }
  if (Array.isArray(section.items)) {
    for (const item of section.items) {
      const name = nameFromItem(item)
      const slug = name ? resolveToolSlug(name) : null
      if (slug) out.push(slug)
    }
  }
  return out
}

/**
 * Directory slugs of the tools a review's competitor/alternatives section names, in the order a
 * reader sees them, without duplicates and without the review's own tool. Sections named
 * `competitors`/`vsAlternatives`/… win over `comparison*` sections. Empty when the review has none.
 * This is the single source of truth for the "similar tools" cards in DirectoryBlock, so the block
 * and the table can never disagree.
 */
export function competitorToolSlugs(article: LLMArticle | undefined, selfSlug: string | null): string[] {
  const sections = (article?.sections ?? {}) as Record<string, LLMSection>
  const entries = Object.entries(sections).filter(([key]) => isCompetitorSectionKey(key))
  const primary = entries.filter(([key]) => COMPETITOR_KEYS.has(key))
  const secondary = entries.filter(([key]) => !COMPETITOR_KEYS.has(key))
  const seen = new Set<string>()
  const out: string[] = []
  for (const [, section] of [...primary, ...secondary]) {
    for (const slug of toolSlugsOfSection(section)) {
      if (slug === selfSlug || seen.has(slug)) continue
      seen.add(slug)
      out.push(slug)
    }
  }
  return out
}

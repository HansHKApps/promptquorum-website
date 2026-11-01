// Ask Hans — guaranteed source links. The model is told to cite inline, but when it forgets, the answer would
// show facts from a PromptQuorum page without the page. This builds a "Sources" line from the pages the tools
// returned, so a page the answer drew on is always linked (and shown in the side panel, which reads the links).

import { normalizePagePath } from './paths'

const SOURCES_LABEL: Record<string, string> = {
  en: 'Sources',
  de: 'Quellen',
  fr: 'Sources',
  ja: '出典',
  zh: '来源',
  es: 'Fuentes',
  pt: 'Fontes',
  ar: 'المصادر',
  ko: '출처',
}

const MD_LINK = /\[[^\]\n]*\]\((?:https?:\/\/(?:www\.)?promptquorum\.com)?(\/[^)\s]*)\)/g
const BARE_URL = /https?:\/\/(?:www\.)?promptquorum\.com(\/[^\s<>)\]]*)/g
const MAX_SOURCES = 3

const words = (t: string): Set<string> => new Set(t.toLowerCase().match(/[\p{L}\p{N}]{3,}/gu) ?? [])

function linkedKeys(answer: string): Set<string> {
  const keys = new Set<string>()
  for (const m of answer.matchAll(MD_LINK)) keys.add(normalizePagePath(m[1]))
  for (const m of answer.matchAll(BARE_URL)) keys.add(normalizePagePath(m[1]))
  return keys
}

/**
 * Markdown to append to an answer, or '' when nothing is missing. `pages` is path → title from the tool results
 * (insertion order = order the tools returned them). If the answer already links one of those pages it is left alone;
 * otherwise the pages are ranked by how many title words appear in the answer or the question, ties by tool order.
 */
export function missingSourcesMarkdown(answer: string, question: string, pages: Record<string, string>, lang: string): string {
  if (!answer.trim()) return ''
  const linked = linkedKeys(answer)
  if ([...linked].some((k) => k in pages)) return ''
  const context = words(`${answer} ${question}`)
  const candidates = Object.entries(pages)
    .filter(([path]) => path !== '/directory' && path !== '/')
    .map(([path, title], order) => ({ path, title, order, score: [...words(title)].filter((w) => context.has(w)).length }))
  if (!candidates.length) return ''
  candidates.sort((a, b) => b.score - a.score || a.order - b.order)
  const best = candidates.filter((c) => c.score > 0).slice(0, MAX_SOURCES)
  // Nothing matches by words (e.g. translated titles): the first page the tools returned is the closest guess.
  const picked = best.length ? best : candidates.slice(0, 1)
  const prefix = lang === 'en' || !(lang in SOURCES_LABEL) ? '' : `/${lang}`
  const items = picked.map((c) => `[${c.title.replace(/[[\]]/g, '')}](${prefix}${c.path})`)
  return `\n\n${SOURCES_LABEL[lang] ?? SOURCES_LABEL.en}: ${items.join(' · ')}`
}

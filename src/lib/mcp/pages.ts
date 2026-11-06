// MCP tools list_pages / get_page: read any public page of promptquorum.com as plain text.
//
// get_article only knows the article clusters, and the search index only holds articles, apps and tests, so
// the home page, About, PQ Apps, Security, Privacy, Impressum, the framework pages, the tool pages and the cluster
// hubs could not be read at all. This module lists those pages (closed list: no arbitrary URLs, so it cannot be used
// to fetch anything else) and reads the live page's HTML, reduced to its readable text. Results are cached for an
// hour per warm server instance.

import { SUPPORTED_LANGS } from '@/components/search/search-utils'

const SITE = 'https://www.promptquorum.com'
/** Where pages are read from; override for local testing (`MCP_PAGES_ORIGIN=http://localhost:3461`). */
const origin = () => (process.env.MCP_PAGES_ORIGIN || SITE).replace(/\/+$/, '')

export interface SitePage {
  /** language-neutral path, '/' = home page */
  path: string
  title: string
  summary: string
}

export const SITE_PAGES: SitePage[] = [
  { path: '/', title: 'PromptQuorum home page (homepage, startseite)', summary: 'Start page: what PromptQuorum is, the software directory, newest apps and articles, hands-on tests, the MCP server and Ask Hans.' },
  { path: '/about', title: 'About PromptQuorum', summary: 'Who is behind PromptQuorum, the mission, the three waves of open AI, what the site offers and how it is built.' },
  { path: '/about/state-of-local-ai', title: 'State of local AI', summary: 'Quarterly report on the local-AI landscape: apps, hardware and trends.' },
  { path: '/about/state-of-local-ai/2026-q4', title: 'State of local AI, Q4 report', summary: 'The current quarterly state-of-local-AI report.' },
  { path: '/about/state-of-local-ai/2026-q4/evidence', title: 'State of local AI, Q4 evidence', summary: 'Sources and data behind the quarterly report.' },
  { path: '/pq-apps', title: 'PromptQuorum app', summary: 'The PromptQuorum desktop app (multi-model prompt dispatch and consensus): features, how it works, comparison, FAQ.' },
  { path: '/download', title: 'Download PromptQuorum', summary: 'How to get the PromptQuorum app.' },
  { path: '/directory', title: 'Local LLM software directory', summary: 'The directory of local-AI apps with filters for category, platform, hardware and license.' },
  { path: '/directory/testing-standards-non-standard', title: 'Directory testing standards', summary: 'How PromptQuorum tests and rates apps, and what verified, unknown and estimated mean.' },
  { path: '/mcp-stats', title: 'PromptQuorum MCP server', summary: 'The public MCP server: tools, resources, worked example, how to connect, live usage.' },
  { path: '/askhans', title: 'Ask Hans', summary: 'The Ask Hans AI assistant: what it does, how it works, limits and usage statistics.' },
  { path: '/security', title: 'Security', summary: 'Security practices and how to report a vulnerability.' },
  { path: '/privacy', title: 'Privacy policy', summary: 'Privacy policy: data processing, cookies, analytics, Ask Hans and MCP data handling.' },
  { path: '/impressum', title: 'Impressum (legal notice)', summary: 'Legal notice and contact details of the site operator.' },
  { path: '/frameworks', title: 'Prompt frameworks', summary: 'Overview of prompt frameworks such as CO-STAR, CRAFT, RISEN, TRACE.' },
  { path: '/frameworks/co-star', title: 'CO-STAR framework', summary: 'CO-STAR prompt framework.' },
  { path: '/frameworks/craft', title: 'CRAFT framework', summary: 'CRAFT prompt framework.' },
  { path: '/frameworks/risen', title: 'RISEN framework', summary: 'RISEN prompt framework.' },
  { path: '/frameworks/trace', title: 'TRACE framework', summary: 'TRACE prompt framework.' },
  { path: '/frameworks/ape', title: 'APE framework', summary: 'APE prompt framework.' },
  { path: '/frameworks/specs', title: 'SPECS framework', summary: 'SPECS prompt framework.' },
  { path: '/frameworks/rtf', title: 'RTF framework', summary: 'RTF prompt framework.' },
  { path: '/frameworks/google-prompt', title: 'Google prompt framework', summary: 'Google prompt framework.' },
  { path: '/frameworks/single-prompt-line', title: 'Single prompt line', summary: 'Single prompt line method.' },
  { path: '/tools/what-can-i-run', title: 'What can I run? tool', summary: 'Tool: which local models and apps fit your hardware.' },
  { path: '/tools/can-i-run-this', title: 'Can I run this? tool', summary: 'Tool: will a given model run on your hardware.' },
  { path: '/local-llms', title: 'Local LLMs hub', summary: 'Hub of guides about running language models on your own hardware.' },
  { path: '/prompt-engineering', title: 'Prompt engineering hub', summary: 'Hub of prompt-engineering techniques and references.' },
  { path: '/power-local-llm', title: 'Power Local LLM hub', summary: 'Hub of app reviews, comparisons and hardware pages.' },
  { path: '/prompt-bites', title: 'Prompt Bites hub', summary: 'Hub of short answers to specific local-AI questions.' },
  { path: '/smart-home', title: 'Smart Home hub', summary: 'Hub of local, privacy-respecting smart-home guides.' },
  { path: '/balcony-solar', title: 'Balcony Solar hub', summary: 'Hub of guides on small balcony solar systems.' },
]

const BY_PATH = new Map(SITE_PAGES.map((p) => [p.path, p]))
const LANGS = new Set<string>(SUPPORTED_LANGS)

function normalizeLang(lang: string | undefined): string {
  return lang && LANGS.has(lang) ? lang : 'en'
}

/** Public URL of a page in a language (English has no prefix). */
export function pageUrl(path: string, lang: string): string {
  if (lang === 'en') return path === '/' ? SITE : `${SITE}${path}`
  return path === '/' ? `${SITE}/${lang}` : `${SITE}/${lang}${path}`
}

/** Accepts '/about', 'about', 'https://www.promptquorum.com/de/about/', '/de/about?x=1'; returns the neutral path or null. */
export function normalizeSitePath(input: string): string | null {
  const raw = input
    .trim()
    .replace(/^https?:\/\/(?:www\.)?promptquorum\.com/i, '')
    .split('#')[0]
    .split('?')[0]
  const withSlash = raw.startsWith('/') ? raw : `/${raw}`
  const noLang = withSlash.replace(/^\/(?:de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/, '')
  const clean = noLang.replace(/\/+$/, '') || '/'
  return BY_PATH.has(clean) ? clean : null
}

export interface ListedPage {
  path: string
  url: string
  title: string
  summary: string
}

export function listPages(args: { lang?: string }): { note: string; pages: ListedPage[] } {
  const lang = normalizeLang(args.lang)
  return {
    note: 'Read any of these with get_page (path or url). Articles, reviews and directory apps are read with get_article / get_app_details instead.',
    pages: SITE_PAGES.map((p) => ({ path: p.path, url: pageUrl(p.path, lang), title: p.title, summary: p.summary })),
  }
}

/** Simple keyword match of a question against the page list (title, summary, path). */
export function searchPages(query: string, lang: string | undefined, limit: number): ListedPage[] {
  const words = query.toLowerCase().match(/[\p{L}\p{N}]{3,}/gu) ?? []
  if (!words.length) return []
  const l = normalizeLang(lang)
  return SITE_PAGES.map((p) => {
    const title = `${p.title} ${p.path}`.toLowerCase()
    const hay = `${title} ${p.summary}`.toLowerCase()
    return { p, score: words.filter((w) => hay.includes(w)).length + words.filter((w) => title.includes(w)).length * 2 }
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ p }) => ({ path: p.path, url: pageUrl(p.path, l), title: p.title, summary: p.summary }))
}

// ---- reading -----------------------------------------------------------------------------------

const MAX_CHARS = 12_000
const CACHE_MS = 60 * 60 * 1000
const cache = new Map<string, { at: number; value: PageResult }>()

export interface PageResult {
  path: string
  url: string
  lang: string
  title: string
  text: string
  truncated: boolean
}

export class PageNotFoundError extends Error {}

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”', mdash: '—', ndash: '–', hellip: '…', middot: '·' }
function decode(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_m, n: string) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_m, n: string) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, n: string) => ENTITIES[n.toLowerCase()] ?? m)
}

/** HTML → readable text: scripts/styles/navigation dropped, block tags become line breaks, links keep their URL. */
export function htmlToText(html: string): { title: string; text: string } {
  const title = decode((/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1] ?? '').replace(/\s+/g, ' ').trim())
  const main = /<main[\s>][\s\S]*<\/main>/i.exec(html)?.[0] ?? /<body[\s>][\s\S]*<\/body>/i.exec(html)?.[0] ?? html
  const text = main
    .replace(/<(script|style|noscript|svg|template|iframe|nav|footer|form|button)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<a\b[^>]*\bhref="(\/[^"#]*|https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_m, href: string, inner: string) => {
      const label = inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
      const abs = href.startsWith('/') ? `${SITE}${href}` : href
      return label ? `${label} (${abs})` : ''
    })
    .replace(/<(br|\/p|\/div|\/li|\/tr|\/h[1-6]|\/section|\/article|\/ul|\/ol|\/table|\/dd|\/dt)\b[^>]*>/gi, '\n')
    .replace(/<(h[1-6]|li)\b[^>]*>/gi, '\n')
    .replace(/<\/t[dh]>/gi, ' | ')
    .replace(/<[^>]+>/g, ' ')
  const clean = decode(text)
    .split('\n')
    .map((l) => l.replace(/[ \t\u00a0]+/g, ' ').trim())
    .filter(Boolean)
    .join('\n')
  return { title, text: clean }
}

export async function getPage(args: { path: string; lang?: string }): Promise<PageResult> {
  const path = normalizeSitePath(args.path)
  if (!path) throw new PageNotFoundError(`"${args.path}" is not a readable page. Call list_pages for the valid paths. Articles are read with get_article.`)
  const lang = normalizeLang(args.lang)
  const url = pageUrl(path, lang)
  const key = `${lang}|${path}`
  const hit = cache.get(key)
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.value

  const readFrom = origin() + new URL(url).pathname
  let res: Response
  try {
    res = await fetch(readFrom, { headers: { 'user-agent': 'PromptQuorum-MCP-page-reader' }, signal: AbortSignal.timeout(8000), redirect: 'follow' })
  } catch {
    throw new PageNotFoundError(`The page could not be loaded right now. Its address is ${url}.`)
  }
  if (!res.ok) throw new PageNotFoundError(`The page returned status ${res.status}. Its address is ${url}.`)
  const { title, text } = htmlToText(await res.text())
  const truncated = text.length > MAX_CHARS
  const value: PageResult = { path, url, lang, title: title || BY_PATH.get(path)?.title || path, text: truncated ? `${text.slice(0, MAX_CHARS)}\n…[page text cut; open the url for the rest]` : text, truncated }
  cache.set(key, { at: Date.now(), value })
  return value
}

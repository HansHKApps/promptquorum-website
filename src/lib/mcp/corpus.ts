// Runtime reader for the article corpus that scripts/generate-askhans-corpus.mjs writes at build time.
//
// WHY THIS EXISTS (2026-11-08): the chat (/api/ask, /api/ask/solution) and MCP (/api/mcp) functions used to
// import every article barrel (7 clusters x 9 locales, ~173 MB of JSON, a 217 MB JS chunk) just to answer
// questions that touch one to three articles. Loading it cost ~1.4 GB RSS and 1.6 s on EVERY cold start and
// crashed the function with "ran out of available memory" before it could send a single byte.
//
// Now the corpus is data on disk, read on demand:
//   search-<lang>.json            slim search entries of one locale (a few MB, read once per warm instance)
//   latest.json                   dated list for get_latest (read once)
//   articles-<cluster>-<lang>.pack  one gzip record per article, concatenated
//   articles-<cluster>-<lang>.idx.json  contentKey -> [offset, length] into the pack
// A get_article call reads one index (small, cached) and ONE slice (a few KB..100 KB) of a pack, then gunzips it.
// Memory per call is kilobytes; nothing is held except the small indexes and the search entries of locales used.
//
// All functions are synchronous on purpose (readSync of a tiny slice): callers stay unchanged.

import { closeSync, existsSync, openSync, readFileSync, readSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import type { SearchEntry } from '@/components/search/search-utils'
import { SUPPORTED_LANGS } from '@/components/search/search-utils'

export interface LatestItem {
  type: 'app' | 'article' | 'hands-on-test'
  title: string
  date: string
  url: string
  cluster?: string
}

type PackIndex = Record<string, [number, number]>

function corpusDir(): string {
  return process.env.ASK_HANS_CORPUS_DIR || join(process.cwd(), 'generated-corpus')
}

function missing(file: string): Error {
  return new Error(`Article corpus file missing: ${file}. Run "npm run generate:askhans-corpus" (it also runs in prebuild).`)
}

function readJson<T>(file: string): T {
  const path = join(corpusDir(), file)
  if (!existsSync(path)) throw missing(file)
  return JSON.parse(readFileSync(path, 'utf8')) as T
}

const indexCache = new Map<string, PackIndex | null>()
function loadIndex(cluster: string, lang: string): PackIndex | null {
  const name = `articles-${cluster}-${lang}`
  if (indexCache.has(name)) return indexCache.get(name) ?? null
  // A (cluster, lang) pair with no article has no pack at all; that is normal (e.g. a cluster without a translation).
  const path = join(corpusDir(), `${name}.idx.json`)
  const idx = existsSync(path) ? (JSON.parse(readFileSync(path, 'utf8')) as PackIndex) : null
  if (!idx && !existsSync(join(corpusDir(), 'manifest.json'))) throw missing(`${name}.idx.json`)
  indexCache.set(name, idx)
  return idx
}

/** One article in one locale, or undefined when that cluster/key/locale has none. Reads only that article. */
export function readArticleVariant(cluster: string, key: string, lang: string): Record<string, unknown> | undefined {
  const idx = loadIndex(cluster, lang)
  const hit = idx?.[key]
  if (!hit) return undefined
  const [offset, length] = hit
  const buf = Buffer.allocUnsafe(length)
  const fd = openSync(join(corpusDir(), `articles-${cluster}-${lang}.pack`), 'r')
  try {
    readSync(fd, buf, 0, length, offset)
  } finally {
    closeSync(fd)
  }
  return JSON.parse(gunzipSync(buf).toString('utf8')) as Record<string, unknown>
}

const searchCache = new Map<string, SearchEntry[]>()
/** Search entries of one locale, or of all locales when no locale is given. Cached per warm instance. */
export function loadSearchEntries(lang?: string): SearchEntry[] {
  const name = lang ?? '*'
  const hit = searchCache.get(name)
  if (hit) return hit
  const entries = lang ? readJson<SearchEntry[]>(`search-${lang}.json`) : SUPPORTED_LANGS.flatMap((l) => readJson<SearchEntry[]>(`search-${l}.json`))
  searchCache.set(name, entries)
  return entries
}

let latestCache: LatestItem[] | null = null
/** Published articles with their own last-modified date (English variant), for get_latest. */
export function loadLatestArticles(): LatestItem[] {
  if (!latestCache) latestCache = readJson<LatestItem[]>('latest.json')
  return latestCache
}

#!/usr/bin/env node
// Writes ./generated-corpus/ (gitignored): the article corpus as data files for the chat + MCP functions.
// Runs in `prebuild` (after the other generators) and on demand: npm run generate:askhans-corpus
//
// Why: those functions used to import every article barrel (~173 MB JSON / 217 MB JS) and ran out of memory on
// cold start. They now read one gzip record per article from these packs (see src/lib/mcp/corpus.ts).
//
// Output (all under generated-corpus/):
//   search-<lang>.json                      slim search entries per locale (buildAllSearchEntries, single source)
//   latest-<lang>.json                      dated published articles for get_latest, titles/URLs in that locale
//   articles-<cluster>-<lang>.pack/.idx.json  gzip record per article + contentKey -> [offset, length]
//   manifest.json                           counts + build time (also the "corpus exists" marker)
import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'generated-corpus')
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const load = (rel) => jiti.import(path.join(ROOT, rel))

const { SUPPORTED_LANGS } = await load('src/components/search/search-utils.ts')
const { CLUSTER_META, readableKeys } = await load('src/lib/mcp/clusters.ts')
const { buildAllSearchEntries } = await load('src/lib/search/build-search-entries.ts')

const contentSources = {
  'prompt-engineering': (await load('src/lib/prompt-engineering/articles-barrel.ts')).peContent,
  'local-llms': (await load('src/lib/local-llms/articles-barrel.ts')).llmContent,
  'power-local-llm': (await load('src/lib/power-local-llm/articles-barrel.ts')).powerLLMContent,
  'prompt-bites': (await load('src/lib/prompt-bites/articles-barrel.ts')).promptBitesContent,
  'smart-home': (await load('src/lib/smart-home/articles-barrel.ts')).smartHomeContent,
  'balcony-solar': (await load('src/lib/balcony-solar/articles-barrel.ts')).balconySolarContent,
  blog: (await load('src/lib/blog/blogContent.ts')).blogContent,
}

const SITE_URL = 'https://www.promptquorum.com'
fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT, { recursive: true })

// 1) search entries per locale
const entries = buildAllSearchEntries()
let searchBytes = 0
for (const lang of SUPPORTED_LANGS) {
  const body = JSON.stringify(entries.filter((e) => e.lang === lang))
  fs.writeFileSync(path.join(OUT, `search-${lang}.json`), body)
  searchBytes += body.length
}

// 2) article packs + latest list
const latest = Object.fromEntries(SUPPORTED_LANGS.map((l) => [l, []]))
const stats = {}
let packBytes = 0
for (const [cluster, content] of Object.entries(contentSources)) {
  const meta = CLUSTER_META[cluster]
  const keys = readableKeys(cluster)
  stats[cluster] = 0
  for (const lang of SUPPORTED_LANGS) {
    const chunks = []
    const idx = {}
    let offset = 0
    for (const key of keys) {
      const article = content[key]?.[lang]
      if (!article) continue
      const gz = zlib.gzipSync(Buffer.from(JSON.stringify(article), 'utf8'), { level: 6 })
      idx[key] = [offset, gz.length]
      chunks.push(gz)
      offset += gz.length
    }
    if (!chunks.length) continue
    fs.writeFileSync(path.join(OUT, `articles-${cluster}-${lang}.pack`), Buffer.concat(chunks))
    fs.writeFileSync(path.join(OUT, `articles-${cluster}-${lang}.idx.json`), JSON.stringify(idx))
    stats[cluster] += chunks.length
    packBytes += offset
  }
  // get_latest, per locale: that locale's own title and last-modified date, its own URL prefix. A slug without a
  // variant in the locale falls back to the English entry (title, date and the real English URL), never to nothing.
  const dateOf = (a) => {
    const raw = a?.dateModified ?? a?.last_full_refresh ?? a?.publishDate
    return typeof raw === 'string' ? raw.match(/\d{4}-\d{2}-\d{2}/)?.[0] : undefined
  }
  for (const [slug, key] of Object.entries(meta.slugToKey)) {
    if (meta.isPublished && !meta.isPublished(slug)) continue
    const en = content[key]?.en
    if (!en || !dateOf(en)) continue
    for (const lang of SUPPORTED_LANGS) {
      const v = lang !== 'en' ? content[key]?.[lang] : undefined
      const a = v && dateOf(v) ? v : en
      const l = a === en ? 'en' : lang
      latest[lang].push({ type: 'article', title: typeof a.title === 'string' ? a.title : slug, date: dateOf(a), url: `${SITE_URL}${l === 'en' ? '' : `/${l}`}/${cluster}/${slug}`, cluster })
    }
  }
}
for (const lang of SUPPORTED_LANGS) fs.writeFileSync(path.join(OUT, `latest-${lang}.json`), JSON.stringify(latest[lang]))

// Sanity: an empty corpus must fail the build rather than ship a chat that cannot read anything.
const empty = Object.entries(stats).filter(([, n]) => n === 0).map(([c]) => c)
if (empty.length || !entries.length || !latest.en.length) {
  console.error('generate-askhans-corpus: empty output', { empty, searchEntries: entries.length, latest: latest.en.length })
  process.exit(1)
}
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify({ builtAt: new Date().toISOString(), articles: stats, searchEntries: entries.length, latest: latest.en.length }))
const mb = (n) => (n / 1048576).toFixed(1)
console.log(`generate-askhans-corpus: ${Object.values(stats).reduce((a, b) => a + b, 0)} article variants (${mb(packBytes)} MB gzip), ${entries.length} search entries (${mb(searchBytes)} MB), ${latest.en.length} dated articles x ${SUPPORTED_LANGS.length} locales -> generated-corpus/`)

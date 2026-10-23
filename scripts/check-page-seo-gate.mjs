#!/usr/bin/env node

/**
 * Live-page implementation of docs/PAGE_UPDATER.md Step 4.8 (Technical SEO / AIO / GEO Gate).
 *
 * Fetches the RAW server HTML of each URL (what GPTBot / ClaudeBot / PerplexityBot receive,
 * not the hydrated DOM) and asserts the machine-checkable lines of the gate:
 *   - exactly one <h1>
 *   - <title> and meta description inside the locale budget (same budgets as validate-meta-budgets.mjs)
 *   - canonical = the page's own URL (www), hreflang set = 9 locales + x-default
 *   - <html lang> matches the locale (known gap until the [locale] refactor; reported, not hidden)
 *   - og:locale present and matching the locale
 *   - every JSON-LD block parses; schema url / @id / breadcrumb items use the www host and equal the canonical
 *   - FAQPage item count equals the number of FAQ questions visible in the page text
 *   - no empty alt on <img> inside <main>
 *   - no placeholder strings ("to be added", TODO, TBD, lorem)
 *
 * REPORT ONLY by default (like validate-meta-budgets.mjs). --strict exits 1 on any finding.
 *
 * Usage:
 *   node scripts/check-page-seo-gate.mjs                       # the 8 pages of the 2026-10-21 audit
 *   node scripts/check-page-seo-gate.mjs https://www.promptquorum.com/frameworks/co-star
 *   node scripts/check-page-seo-gate.mjs --base=http://localhost:3000   # same paths against a local server
 *   node scripts/check-page-seo-gate.mjs --locales=en,de,ar             # also check these locale prefixes
 *   node scripts/check-page-seo-gate.mjs --strict
 */

const DEFAULT_BASE = 'https://www.promptquorum.com'
const DEFAULT_PATHS = [
  '/power-local-llm/caelum-hands-on-test',
  '/power-local-llm/llamatik-review',
  '/power-local-llm/secret-ai-review',
  '/power-local-llm/tokforge-review',
  '/local-llms/qwen-local-deployment-guide-2026',
  '/power-local-llm/local-vision-models-llava-ollama-2026',
  '/prompt-engineering/how-to-reduce-prompt-brittleness',
  '/frameworks/co-star',
]
const LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const OG_LOCALE = { en: 'en_US', de: 'de_DE', fr: 'fr_FR', ja: 'ja_JP', zh: 'zh_CN', es: 'es_ES', pt: 'pt_BR', ar: 'ar_AR', ko: 'ko_KR' }
const HTML_LANG = { pt: 'pt-BR', zh: 'zh-Hans' }
const BUDGET = {
  latin: { title: [48, 58], desc: [140, 155] },
  cjk: { title: [24, 32], desc: [70, 110] },
  ko: { title: [28, 38], desc: [70, 110] },
  ar: { title: [40, 55], desc: [110, 150] },
}
const budgetFor = (l) => (l === 'ja' || l === 'zh' ? BUDGET.cjk : l === 'ko' ? BUDGET.ko : l === 'ar' ? BUDGET.ar : BUDGET.latin)
const PLACEHOLDER = /\b(to be added|TODO|TBD|lorem ipsum)\b/i

const args = process.argv.slice(2)
const strict = args.includes('--strict')
const flag = (n) => args.find((a) => a.startsWith(`--${n}=`))?.split('=')[1]
const base = flag('base') ?? DEFAULT_BASE
const localeList = (flag('locales') ?? 'en').split(',').filter(Boolean)
const explicit = args.filter((a) => /^https?:\/\//.test(a))

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
const attr = (tag, name) => decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1] ?? '')
const metaContent = (html, key, val) => {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? []
  const t = tags.find((m) => new RegExp(`\\b${key}="${val}"`, 'i').test(m))
  return t ? attr(t, 'content') : null
}
const stripTags = (h) => decode(h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ')

function localeOf(url) {
  const seg = new URL(url).pathname.split('/')[1]
  return LOCALES.includes(seg) && seg !== 'en' ? seg : 'en'
}

function collectUrls(node, acc) {
  if (Array.isArray(node)) node.forEach((n) => collectUrls(n, acc))
  else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if ((k === 'url' || k === '@id' || k === 'item') && typeof v === 'string' && /^https?:\/\//.test(v)) acc.push(v)
      else collectUrls(v, acc)
    }
  }
  return acc
}

async function check(url) {
  const findings = []
  const add = (id, msg) => findings.push(`${id}: ${msg}`)
  const lang = localeOf(url)
  let html
  try {
    const res = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'pq-seo-gate/1.0' } })
    if (!res.ok) return [`FETCH: HTTP ${res.status}`]
    html = await res.text()
  } catch (e) {
    return [`FETCH: ${e.message}`]
  }

  const h1 = html.match(/<h1\b/gi)?.length ?? 0
  if (h1 !== 1) add('A1', `${h1} <h1> elements (expected 1)`)

  const title = decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim()
  const desc = metaContent(html, 'name', 'description') ?? ''
  const b = budgetFor(lang)
  if (title.length < b.title[0] || title.length > b.title[1]) add('A2', `title ${title.length} chars outside ${b.title.join('–')}: "${title}"`)
  if (desc.length < b.desc[0] || desc.length > b.desc[1]) add('A2', `meta description ${desc.length} chars outside ${b.desc.join('–')}`)

  const canonTag = (html.match(/<link\b[^>]*rel="canonical"[^>]*>/i) ?? [''])[0]
  const canonical = attr(canonTag, 'href')
  const here = new URL(url)
  const expectCanon = `https://www.promptquorum.com${here.pathname}`
  if (!canonical) add('A4', 'no rel=canonical')
  else if (canonical.replace(/\/$/, '') !== expectCanon.replace(/\/$/, '')) add('A4', `canonical ${canonical} != ${expectCanon}`)

  const alt = (html.match(/<link\b[^>]*rel="alternate"[^>]*hreflang="[^"]*"[^>]*>/gi) ?? []).length
  if (alt !== 10) add('A4', `${alt} hreflang links (expected 10 = 9 locales + x-default)`)

  const robots = metaContent(html, 'name', 'robots') ?? ''
  if (!/index/.test(robots) || /noindex/.test(robots)) add('A4', `robots "${robots}"`)

  const htmlLang = html.match(/<html\b[^>]*\blang="([^"]*)"/i)?.[1] ?? ''
  const wantLang = HTML_LANG[lang] ?? lang
  if (htmlLang !== wantLang) add('A5', `<html lang="${htmlLang}"> but page locale is ${wantLang} (known gap until the [locale] refactor)`)

  const ogl = metaContent(html, 'property', 'og:locale')
  if (!ogl) add('A5', 'no og:locale')
  else if (ogl !== OG_LOCALE[lang]) add('A5', `og:locale ${ogl} != ${OG_LOCALE[lang]}`)

  const ogImage = metaContent(html, 'property', 'og:image') ?? ''
  if (/\/og-image\.png$/.test(ogImage)) add('A6', 'og:image is the generic /og-image.png')

  // JSON-LD
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1])
  const parsed = []
  blocks.forEach((raw, i) => {
    try {
      parsed.push(JSON.parse(raw))
    } catch (e) {
      add('B1', `JSON-LD block ${i + 1} does not parse`)
    }
  })
  const flat = parsed.flatMap((p) => (Array.isArray(p) ? p : p['@graph'] ? [p, ...p['@graph']] : [p]))
  const typeOf = (n) => [].concat(n?.['@type'] ?? [])
  const bareHost = collectUrls(parsed, []).filter((u) => /^https?:\/\/promptquorum\.com/.test(u))
  if (bareHost.length) add('B1', `${bareHost.length} schema URLs use the non-www host (e.g. ${bareHost[0]})`)

  const article = flat.find((n) => typeOf(n).some((t) => /Article/.test(t)))
  if (article) {
    const au = article.url ?? article.mainEntityOfPage?.['@id']
    if (au && au.replace(/\/$/, '') !== expectCanon.replace(/\/$/, '')) add('B1', `article url ${au} != canonical`)
    const h1Text = stripTags(html.match(/<h1\b[\s\S]*?<\/h1>/i)?.[0] ?? '').trim()
    const hl = (article.headline ?? '').trim()
    const same = (x) => x && (x === hl || x.startsWith(hl.slice(0, 20)) || hl.startsWith(x.slice(0, 20)))
    if (hl && !same(title) && !same(h1Text)) add('B1', `article headline "${hl}" matches neither <title> nor <h1>`)
  }

  const faq = flat.find((n) => typeOf(n).includes('FAQPage'))
  const text = stripTags(html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html)
  if (faq) {
    const qs = (faq.mainEntity ?? []).map((q) => q.name)
    const missing = qs.filter((q) => !text.includes(q.trim().slice(0, 60)))
    if (missing.length) add('B3', `${missing.length} of ${qs.length} FAQPage questions are not visible in the page text (e.g. "${missing[0].slice(0, 60)}")`)
  }
  const hasSteps = /Step\s*1\b|Schritt\s*1\b|Étape\s*1\b|ステップ\s*1|步骤\s*1|Paso\s*1\b|Passo\s*1\b|الخطوة\s*1|1단계/.test(text)
  if (hasSteps && !flat.some((n) => typeOf(n).includes('HowTo'))) add('B4', 'numbered steps on the page but no HowTo schema')

  // C
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html
  const imgs = main.match(/<img\b[^>]*>/gi) ?? []
  const noAlt = imgs.filter((t) => !/\balt="[^"]+"/i.test(t))
  if (noAlt.length) add('C1', `${noAlt.length} <img> in main without alt text (e.g. ${attr(noAlt[0], 'src').slice(0, 60)})`)
  const ph = text.match(PLACEHOLDER)
  if (ph) add('C2', `placeholder string "${ph[0]}" in the page text`)

  return findings
}

const targets = explicit.length
  ? explicit
  : DEFAULT_PATHS.flatMap((p) => localeList.map((l) => `${base}${l === 'en' ? '' : `/${l}`}${p}`))

let total = 0
for (const url of targets) {
  const f = await check(url)
  total += f.length
  console.log(`\n${f.length ? '✗' : '✓'} ${url}`)
  f.forEach((x) => console.log(`    ${x}`))
}
console.log(`\n${total} finding(s) across ${targets.length} page(s)${strict ? '' : ' — report only (use --strict to fail)'}`)
if (strict && total) process.exit(1)

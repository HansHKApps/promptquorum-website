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
const norm2 = (x) => x.normalize('NFKC').toLowerCase()
const PLACEHOLDER = /\b(to be added|TODO|TBD|lorem ipsum)\b/i

import { changedArticleFiles, articleUrlPath } from './changed-article-files.mjs'
import { keyTerms, field, hit } from './seo-terms.mjs'

const args = process.argv.slice(2)
const strict = args.includes('--strict')
const flag = (n) => args.find((a) => a.startsWith(`--${n}=`))?.split('=')[1]
const base = flag('base') ?? DEFAULT_BASE
const changedArg = args.find((a) => a === '--changed' || a.startsWith('--changed='))
// --changed: check only articles that differ from the git ref (default origin/main), in all 9 locales
// unless --locales is given. The gate reads served HTML, so point --base at a local production build
// (--base=http://localhost:3000): the live site does not have unmerged or undeployed changes.
const localeList = (flag('locales') ?? (changedArg ? LOCALES.join(',') : 'en')).split(',').filter(Boolean)
const explicit = args.filter((a) => /^https?:\/\//.test(a))
let pathsToCheck = DEFAULT_PATHS
if (changedArg) {
  const res = changedArticleFiles(changedArg.split('=')[1])
  pathsToCheck = res.files.map(articleUrlPath).filter(Boolean)
  console.log(`--changed: ${pathsToCheck.length} article(s) differ from ${res.ref}`)
  if (!pathsToCheck.length) {
    console.log('Nothing to check. (prompt-engineering articles live in one content.ts and are not covered by --changed.)')
    process.exit(0)
  }
}

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

  // A7: heading hierarchy inside <main>, in document order: H1 first, no skipped levels
  // (H2 -> H4), no empty headings, no H3+ before the first H2, no repeated H2 text.
  const mainHtml = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html
  const heads = [...mainHtml.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({ level: Number(m[1]), text: stripTags(m[2]) }))
  if (heads.length) {
    if (heads[0].level !== 1) add('A7', `first heading in <main> is <h${heads[0].level}> "${heads[0].text.slice(0, 50)}", expected the <h1>`)
    const skips = []
    for (let i = 1; i < heads.length; i++) if (heads[i].level > heads[i - 1].level + 1) skips.push(`h${heads[i - 1].level}→h${heads[i].level} "${heads[i].text.slice(0, 40)}"`)
    if (skips.length) add('A7', `${skips.length} skipped heading level(s) (e.g. ${skips[0]})`)
    const empty = heads.filter((h) => !h.text)
    if (empty.length) add('A7', `${empty.length} empty heading(s) (<h${empty[0].level}>)`)
    const h2s = heads.filter((h) => h.level === 2 && h.text).map((h) => h.text.toLowerCase())
    const dupH2 = h2s.filter((t, i) => h2s.indexOf(t) !== i)
    if (dupH2.length) add('A7', `${dupH2.length} repeated H2 text(s) (e.g. "${dupH2[0].slice(0, 50)}")`)
    if (!heads.some((h) => h.level === 2)) add('A7', 'no <h2> in <main>: the page has no section structure for answer engines to chunk')
  }

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
  // C1b: alt that is present but useless. The renderers fall back to generic strings
  // ("PromptQuorum article diagram", "Article hero image"), which pass C1 but say nothing.
  const alts = imgs.map((t) => attr(t, 'alt').trim()).filter(Boolean)
  const GENERIC = /^(promptquorum )?(article )?(diagram|illustration|hero image|image|photo|picture|screenshot)$|article (diagram|illustration|hero image)$/i
  const generic = alts.filter((a) => GENERIC.test(a) || /\.(png|webp|jpe?g|svg|gif)$/i.test(a) || a.length < 10)
  if (generic.length) add('C1b', `${generic.length} generic/too-short alt text (e.g. "${generic[0]}")`)
  const counts = alts.reduce((m, a) => m.set(a, (m.get(a) ?? 0) + 1), new Map())
  const dupes = [...counts].filter(([a, n]) => n > 1 && !GENERIC.test(a))
  if (dupes.length) add('C1b', `${dupes.length} alt text(s) reused on several images (e.g. "${dupes[0][0].slice(0, 60)}" ×${dupes[0][1]})`)
  // C1c: is the alt text about THIS page and a real description? Lexical heuristic, not a judgement of
  // image content: it checks topic overlap with <title>/<h1>, length, and stuffing patterns.
  const h1Plain = stripTags(html.match(/<h1\b[\s\S]*?<\/h1>/i)?.[0] ?? '')
  const topic = keyTerms(`${title.replace(/\|.*$/, '')} ${h1Plain}`, lang).filter((t) => t !== 'promptquorum' && !/^\d{4}$/.test(t))
  const real = alts.filter((a) => !GENERIC.test(a) && !/\.(png|webp|jpe?g|svg|gif)$/i.test(a))
  const cjk = lang === 'ja' || lang === 'zh' || lang === 'ko'
  const size = (a) => (cjk ? [...a].length : a.split(/\s+/).length)
  const tooShort = real.filter((a) => size(a) < (cjk ? 8 : 4) && a.length >= 10)
  if (tooShort.length) add('C1c', `${tooShort.length} alt text(s) too short to describe an image (<${cjk ? 8 : 4} ${cjk ? 'chars' : 'words'}) (e.g. "${tooShort[0]}")`)
  const stuffed = real.filter((a) => (cjk ? [...a].length > 80 : a.length > 125) || (a.match(/,/g) ?? []).length >= 4 ||
    keyTerms(a, lang).some((t) => t.length > 2 && norm2(a).split(/[^\p{L}\p{N}]+/u).filter((w) => w === t).length >= 4))
  if (stuffed.length) add('C1c', `${stuffed.length} alt text(s) look stuffed (too long, a keyword list, or a term repeated 4+ times) (e.g. "${stuffed[0].slice(0, 70)}")`)
  if (topic.length >= 2 && real.length) {
    const off = real.filter((a) => !topic.some((t) => hit(t, field(a))))
    if (off.length) add('C1c', `${off.length} of ${real.length} alt text(s) share no term with the page title/H1 (topic terms: ${topic.slice(0, 5).join(', ')}) (e.g. "${off[0].slice(0, 70)}")`)
    const need = Math.max(1, Math.ceil(topic.length / 2))
    const best = Math.max(...real.map((a) => topic.filter((t) => hit(t, field(a))).length))
    if (best < need) add('C1c', `no image alt reflects the page topic (best alt covers ${best} of ${topic.length} title/H1 terms; hero/main diagram alt should name the subject)`)
  }
  const ph = text.match(PLACEHOLDER)
  if (ph) add('C2', `placeholder string "${ph[0]}" in the page text`)

  return findings
}

const targets = explicit.length
  ? explicit
  : pathsToCheck.flatMap((p) => localeList.map((l) => `${base}${l === 'en' ? '' : `/${l}`}${p}`))

let total = 0
for (const url of targets) {
  const f = await check(url)
  total += f.length
  console.log(`\n${f.length ? '✗' : '✓'} ${url}`)
  f.forEach((x) => console.log(`    ${x}`))
}
console.log(`\n${total} finding(s) across ${targets.length} page(s)${strict ? '' : ' — report only (use --strict to fail)'}`)
if (strict && total) process.exit(1)

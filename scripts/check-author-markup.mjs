#!/usr/bin/env node
// Checks the Author / E-E-A-T markup on built or live pages (raw server HTML, as AI crawlers receive it).
// Rules: docs/GEO_WRITING_GUIDELINES.md Rule 50; checklist: docs/PAGE_UPDATER.md Step 4.8 D.
//
//   node scripts/check-author-markup.mjs [--strict] [--base=https://www.promptquorum.com] [/path ...]
//   npm run check:author -- --base=http://localhost:3462      (against a local `next start`)
//
// Report-only by default (exit 0, findings printed); --strict exits 1 when anything fails.
// Without paths it samples every page type in English plus German and Japanese variants.
const args = process.argv.slice(2)
const strict = args.includes('--strict')
const base = (args.find((a) => a.startsWith('--base=')) ?? '--base=https://www.promptquorum.com').split('=')[1].replace(/\/+$/, '')
const given = args.filter((a) => a.startsWith('/'))

const AUTHOR_PATH = '/author/hans-kuepper'
const ARTICLES = given.length
  ? given
  : [
      '/local-llms/how-to-install-ollama',
      '/de/local-llms/how-to-install-ollama',
      '/ja/local-llms/how-to-install-ollama',
      '/prompt-engineering/what-is-prompt-engineering',
      '/power-local-llm/gpt4all-review',
      '/fr/power-local-llm/gpt4all-review',
      '/power-local-llm/caelum-hands-on-test',
      '/de/power-local-llm/caelum-hands-on-test',
      '/prompt-bites/how-much-vram-for-local-llm',
      '/es/prompt-bites/how-much-vram-for-local-llm',
      '/smart-home/what-is-a-smart-home',
      '/balcony-solar/what-is-balcony-solar',
      '/frameworks/co-star',
      '/de/frameworks/co-star',
    ]
const HUBS = given.length ? [] : ['/', '/local-llms', '/prompt-engineering', '/power-local-llm', '/prompt-bites', '/about']

const findings = []
const fail = (url, msg) => findings.push(`FAIL ${url}: ${msg}`)

const get = async (path) => {
  const r = await fetch(base + path, { redirect: 'manual', headers: { 'user-agent': 'pq-author-check' } })
  return { status: r.status, location: r.headers.get('location'), html: r.status === 200 ? await r.text() : '' }
}
const nodesOf = (html) =>
  [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((m) => {
    try {
      const j = JSON.parse(m[1])
      return Array.isArray(j) ? j : j['@graph'] ? j['@graph'] : [j]
    } catch {
      return [{ __parseError: true }]
    }
  })
const typeOf = (n) => JSON.stringify(n?.['@type'] ?? '')
const isArticleLike = (n) => /Article|BlogPosting|TechArticle|Review/.test(typeOf(n)) && !/Review.*Rating/.test(typeOf(n)) && n.author !== undefined

for (const p of ARTICLES) {
  const { status, html } = await get(p)
  if (status !== 200) { fail(p, `HTTP ${status}`); continue }
  const nodes = nodesOf(html)
  if (nodes.some((n) => n.__parseError)) fail(p, 'JSON-LD parse error')
  const persons = nodes.filter((n) => typeOf(n).includes('Person'))
  const articles = nodes.filter(isArticleLike)
  if (!articles.length) fail(p, 'no Article/Review node with an author')
  for (const a of articles) {
    const au = a.author
    const resolved = au?.['@id'] && !au.name ? persons.find((x) => x['@id'] === au['@id']) : au
    if (!resolved || !typeOf(resolved).includes('Person')) { fail(p, `${typeOf(a)} author is not a Person (${JSON.stringify(au)?.slice(0, 80)})`); continue }
    if (!resolved.name) fail(p, 'author Person has no name')
    if (!resolved.url || !String(resolved.url).endsWith(AUTHOR_PATH)) fail(p, `author Person.url is not the canonical author page (${resolved.url})`)
    if (!Array.isArray(resolved.sameAs) || !resolved.sameAs.length) fail(p, 'author Person has no sameAs array')
  }
  if (!/data-testid="author-byline"/.test(html)) fail(p, 'visible byline missing in raw HTML (data-testid="author-byline")')
  const link = html.match(/<a\b[^>]*href="\/author\/hans-kuepper"[^>]*>/)?.[0]
  if (!link) fail(p, `byline does not link to ${AUTHOR_PATH}`)
  else if (!/rel="author"/.test(link)) fail(p, 'byline author link has no rel="author"')
  if (/href="\/(?:[a-z]{2}\/)?author\//.test(html.replace(/href="\/author\/hans-kuepper"/g, ''))) fail(p, 'locale-prefixed or other /author/ link (404)')
  if (/href="\/en(?:[/"?#])/.test(html)) fail(p, 'contains a link to /en')
}

for (const p of HUBS) {
  const { status, html } = await get(p)
  if (status !== 200) { fail(p, `HTTP ${status}`); continue }
  if (!nodesOf(html).some((n) => typeOf(n).includes('Person') && String(n.url ?? '').endsWith(AUTHOR_PATH))) fail(p, 'no canonical Person node in the page JSON-LD')
}

// routing contract
for (const p of ['/en', '/en/local-llms']) {
  const r = await get(p)
  if (![301, 308].includes(r.status)) fail(p, `expected a permanent redirect, got HTTP ${r.status}`)
}
const ghost = await get('/author/someone-else')
if (ghost.status !== 404) fail('/author/someone-else', `unknown author must be 404, got ${ghost.status}`)
const authorPage = await get(AUTHOR_PATH)
if (authorPage.status !== 200) fail(AUTHOR_PATH, `author page HTTP ${authorPage.status}`)

console.log(findings.length ? findings.join('\n') : 'OK: author markup checks passed')
console.log(`${ARTICLES.length + HUBS.length} pages checked, ${findings.length} finding(s)${strict ? ' (strict)' : ' (report-only; add --strict to fail)'}`)
if (strict && findings.length) process.exit(1)

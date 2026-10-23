#!/usr/bin/env node

/**
 * Query-coverage check + fix proposals (PAGE_UPDATER.md Step 0 / Step 4).
 *
 * Takes a page URL and the GSC queries that page is shown for, fetches the RAW
 * server HTML of each locale version, and checks whether each query's key terms
 * appear in the title, meta description, H1, H2s, lead (first ~150 words), FAQ
 * questions and image alt text (alt never counts toward grade A). Prints a gap table per locale. For every gap it proposes
 * concrete fix options (title / meta / H2 / FAQ / lead), and — with
 * --interactive — lets you confirm which options to apply and writes the
 * confirmed fix plan to docs/seo-tracking/fix-plans/.
 *
 * This script does NOT edit article source files. Articles are inline 9-locale
 * TypeScript objects that must pass the geo-translation and risk-checker gates,
 * so the confirmed plan is the hand-off: apply it in a Claude Code page-updater
 * run, then re-run this script to confirm the gap is closed.
 *
 * Coverage grades (per query, per locale):
 *   A  all key terms inside ONE field (title, H1, one H2 or one FAQ question) — a dedicated target
 *   B  all key terms present, but spread across fields or only in the lead/meta — weak match
 *   C  at least half of the key terms present — gap
 *   D  fewer than half present — gap
 *
 * Limits (read before trusting the output):
 *   - Matching is lexical, not semantic. "cheap GPU" will not match "budget graphics card".
 *   - Latin scripts use whole-word match, plus substring match for terms of 5+ chars
 *     (catches German compounds and inflections, with some false positives).
 *   - ja/zh/ko queries are compared as character bigrams.
 *   - Queries are checked only in the locales you name; an English query is not
 *     expected to appear in the German page. Tag queries with a locale prefix
 *     ("de:whisper home assistant") or pass a CSV with a `locale` column.
 *
 * Usage:
 *   node scripts/query-coverage.mjs https://www.promptquorum.com/local-llms/x --queries "q one|q two|de:q drei"
 *   node scripts/query-coverage.mjs <url> --queries-file gsc-queries.csv [--top=20] [--locales=en,de]
 *   node scripts/query-coverage.mjs <url> --queries-file q.csv --interactive     # confirm fixes, write plan
 *   node scripts/query-coverage.mjs <url> --queries-file q.csv --plan            # write all proposals as an unconfirmed plan
 *   node scripts/query-coverage.mjs <url> --queries "..." --base=http://localhost:3000
 *   node scripts/query-coverage.mjs --html=page.html --locale=en --queries "..."  # offline / test
 *   node scripts/query-coverage.mjs ... --strict                                   # exit 1 if any gap
 *
 * CSV: header row with a query column ("query" or "Top queries") and optionally
 * clicks, impressions, ctr, position, locale. GSC "Queries" exports work as-is.
 */

import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline/promises'
import { stdin, stdout } from 'node:process'
import { CJK, norm, keyTerms, field, hit } from './seo-terms.mjs'

const LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
// [titleMax, descMax] — same budgets as scripts/validate-meta-budgets.mjs
const BUDGET = {
  en: [58, 155], de: [58, 155], fr: [58, 155], es: [58, 155], pt: [58, 155],
  ja: [32, 110], zh: [32, 110], ko: [38, 110], ar: [55, 150],
}


// ---------- args ----------
const argv = process.argv.slice(2)
const flag = (n) => argv.find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3)
const has = (n) => argv.includes(`--${n}`)
const takesValue = (n) => {
  const i = argv.indexOf(`--${n}`)
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : undefined
}
const val = (n) => flag(n) ?? takesValue(n)

const urlArg = argv.find((a) => /^https?:\/\//.test(a))
const htmlFile = val('html')
const base = val('base')
const top = Number(val('top') ?? 20)
const minImpr = Number(val('min-impressions') ?? 0)
const strict = has('strict')
const interactive = has('interactive')
const writePlan = has('plan') || interactive

// ---------- helpers ----------
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ')
const strip = (h) => decode(h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()

function parseCsvLine(line) {
  const out = []
  let cur = ''
  let q = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (q) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (c === '"') q = false
      else cur += c
    } else if (c === '"') q = true
    else if (c === ',' || c === '\t') { out.push(cur); cur = '' }
    else cur += c
  }
  out.push(cur)
  return out
}

function readQueries() {
  const rows = []
  const inline = val('queries')
  if (inline) {
    for (const raw of inline.split('|').map((s) => s.trim()).filter(Boolean)) {
      const m = raw.match(/^([a-z]{2}):(.+)$/)
      rows.push(m && LOCALES.includes(m[1]) ? { query: m[2].trim(), locale: m[1] } : { query: raw, locale: null })
    }
  }
  const file = val('queries-file')
  if (file) {
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/).filter((l) => l.trim())
    const head = parseCsvLine(lines[0]).map((h) => h.trim().toLowerCase())
    const col = (re) => head.findIndex((h) => re.test(h))
    const cq = col(/^(query|top queries|queries)$/)
    if (cq < 0) throw new Error(`no query column in ${file} (header: ${head.join(', ')})`)
    const cc = col(/^clicks$/), ci = col(/^impressions$/), cp = col(/^position$/), cl = col(/^locale$/), ct = col(/^ctr/)
    const num = (v) => (v === undefined || v === '' ? null : Number(String(v).replace('%', '').replace(',', '.')))
    for (const line of lines.slice(1)) {
      const c = parseCsvLine(line)
      if (!c[cq]?.trim()) continue
      rows.push({
        query: c[cq].trim(),
        locale: cl >= 0 && LOCALES.includes(c[cl]?.trim()) ? c[cl].trim() : null,
        clicks: cc >= 0 ? num(c[cc]) : null,
        impressions: ci >= 0 ? num(c[ci]) : null,
        position: cp >= 0 ? num(c[cp]) : null,
        ctr: ct >= 0 ? num(c[ct]) : null,
      })
    }
  }
  return rows
    .filter((r) => (r.impressions ?? Infinity) >= minImpr)
    .sort((a, b) => (b.impressions ?? 0) - (a.impressions ?? 0))
    .slice(0, top)
}


// ---------- page parsing ----------
function parsePage(html, loc) {
  const title = strip(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '')
  const metaTag = (html.match(/<meta\b[^>]*name="description"[^>]*>/i) ?? [''])[0]
  const meta = decode(metaTag.match(/content="([^"]*)"/i)?.[1] ?? '')
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html
  const h1 = strip(main.match(/<h1\b[\s\S]*?<\/h1>/i)?.[0] ?? '')
  const h2 = [...main.matchAll(/<h2\b[\s\S]*?<\/h2>/gi)].map((m) => strip(m[0])).filter(Boolean)
  const afterH1 = main.split(/<\/h1>/i)[1] ?? main
  const body = strip(afterH1)
  const lead = CJK.has(loc) ? [...body].slice(0, 300).join('') : body.split(' ').slice(0, 150).join(' ')
  const faq = new Set()
  for (const m of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const walk = (n) => {
        if (Array.isArray(n)) n.forEach(walk)
        else if (n && typeof n === 'object') {
          if ([].concat(n['@type'] ?? []).includes('Question') && n.name) faq.add(strip(String(n.name)))
          Object.values(n).forEach(walk)
        }
      }
      walk(JSON.parse(m[1]))
    } catch { /* unparsable JSON-LD is reported by seo:gate, not here */ }
  }
  for (const m of main.matchAll(/<h3\b[\s\S]*?<\/h3>/gi)) {
    const t = strip(m[0])
    if (/[?？؟]\s*$/.test(t)) faq.add(t)
  }
  const alts = [...main.matchAll(/<img\b[^>]*>/gi)]
    .map((m) => decode((m[0].match(/\balt="([^"]*)"/i) ?? [])[1] ?? '').trim())
    .filter(Boolean)
  return { title, meta, h1, h2, lead, faq: [...faq], alts, hasMain: /<main/i.test(html) }
}

// ---------- grading ----------
function grade(query, loc, page) {
  const terms = keyTerms(query, loc)
  const F = {
    title: field(page.title), h1: field(page.h1), meta: field(page.meta), lead: field(page.lead),
    h2: page.h2.map(field), faq: page.faq.map(field), alt: page.alts.map(field),
  }
  const single = [['title', F.title], ['h1', F.h1], ...F.h2.map((f, i) => [`h2#${i + 1}`, f]), ...F.faq.map((f, i) => [`faq#${i + 1}`, f])]
  const all = (f) => terms.every((t) => hit(t, f))
  const dedicated = single.filter(([, f]) => all(f)).map(([k]) => k)
  const where = {}
  for (const t of terms) {
    where[t] = [
      ['title', F.title], ['h1', F.h1], ['meta', F.meta], ['lead', F.lead],
      ['h2', null, F.h2], ['faq', null, F.faq], ['alt', null, F.alt],
    ].filter(([, f, arr]) => (f ? hit(t, f) : arr.some((x) => hit(t, x)))).map(([k]) => k)
  }
  const present = terms.filter((t) => where[t].length)
  const missing = terms.filter((t) => !where[t].length)
  const ratio = terms.length ? present.length / terms.length : 0
  let g
  if (!terms.length) g = 'D'
  else if (dedicated.length) g = 'A'
  else if (ratio === 1) g = 'B'
  else if (ratio >= 0.5) g = 'C'
  else g = 'D'
  const phraseNorm = norm(query)
  const phrase = Object.entries({ title: page.title, h1: page.h1, meta: page.meta, lead: page.lead })
    .filter(([, t]) => norm(t).includes(phraseNorm)).map(([k]) => k)
  return { terms, grade: g, dedicated, missing, present, where, phrase, F }
}

// ---------- proposals ----------
const isQuestion = (q) => /^(how|what|why|which|when|can|does|is|are|should|wie|was|warum|welche|comment|pourquoi|quel|cómo|qué|como|por que)\b/i.test(q.trim())

function proposals(row, g, page, loc) {
  const out = []
  const [tMax, dMax] = BUDGET[loc]
  const pos = row.position
  const missingTxt = g.missing.join(', ')
  const visible = pos == null || pos <= 12
  const room = tMax - page.title.length
  const add = (id, fieldName, action, why, rec, needsAuthor) => out.push({ id, field: fieldName, action, why, recommended: !!rec, needsAuthor: !!needsAuthor })

  if (g.grade === 'B' || g.grade === 'C' || g.grade === 'D') {
    if (g.grade !== 'D' || visible) {
      const terms = missingTxt || g.terms.join(' ')
      add('T', 'title',
        room >= terms.length + 1
          ? `Work "${terms}" into the title (now ${page.title.length}/${tMax} chars, room for ${room})`
          : `Title is at ${page.title.length}/${tMax} chars; to add "${terms}", replace the lowest-value words rather than appending`,
        visible ? 'Position is on page 1–2, so the title is the CTR lever' : 'Position unknown; verify before changing a title',
        visible && g.grade !== 'B')
    }
    add('M', 'metaDescription',
      `Use the phrase "${row.query}" in the first 100 characters of the description (${page.meta.length}/${dMax} chars now)`,
      'Query words are bolded in the snippet and lift CTR; no ranking effect expected', visible && g.grade === 'B')
  }
  if (g.grade === 'C' || g.grade === 'D' || g.grade === 'B') {
    const partial = page.h2.find((h) => g.terms.some((t) => hit(t, field(h))))
    add('H', 'H2',
      partial
        ? `Retitle H2 "${partial}" so one heading contains all of: ${g.terms.join(', ')} — answer-first in the first sentence under it`
        : `Add an H2 targeting "${row.query}" with the direct answer in the first sentence`,
      'A grade-A field (single heading containing every term) is what the page lacks', g.grade !== 'B' || !visible)
  }
  if (isQuestion(row.query) || g.grade === 'D' || g.grade === 'C') {
    add('F', 'FAQ',
      `Add an FAQ entry for "${row.query}" (question form, 40–60 word answer from facts already on the page)`,
      'FAQ questions are single-field targets and feed FAQPage schema (count must match visible FAQs)', isQuestion(row.query), true)
  }
  if (g.grade === 'C' || g.grade === 'D') {
    add('L', 'lead',
      `State the answer for "${row.query}" in the first 150 words (terms missing from lead: ${g.terms.filter((t) => !hit(t, g.F.lead)).join(', ') || 'none'})`,
      'Rule 36: the main question is answered on the first screen', g.grade === 'D' && !!row.impressions && row.impressions > 100, true)
  }
  if (page.alts.length && g.terms.some((t) => !g.where[t]?.includes('alt'))) {
    add('I', 'image alt',
      `Describe the hero or main diagram in its alt text using the page topic and "${g.terms.join(' ')}" where it is true of the image (${page.alts.length} image alt(s) now, none covers every term)`,
      'Alt text is read by image search and screen readers; it must describe the image, never list keywords', false, true)
  }
  if (pos != null && pos > 15) {
    out.forEach((o) => { if (o.field === 'title' || o.field === 'metaDescription') o.recommended = false })
  }
  return out
}

// ---------- fetch ----------
async function getHtml(url) {
  const res = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'pq-query-coverage/1.0' } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.text()
}
const pathOf = (u) => {
  const p = new URL(u).pathname.replace(/\/$/, '')
  const seg = p.split('/')[1]
  return LOCALES.includes(seg) && seg !== 'en' ? p.slice(seg.length + 1) : p
}

// ---------- main ----------
const queries = readQueries()
if (!queries.length || (!urlArg && !htmlFile)) {
  console.error('usage: query-coverage.mjs <url> --queries "a|b|de:c" | --queries-file q.csv  (see header for options)\n   or: query-coverage.mjs --html=page.html --locale=en --queries "..."')
  process.exit(2)
}
const requestedLocales = (val('locales') ?? '').split(',').filter(Boolean)
const taggedLocales = [...new Set(queries.map((q) => q.locale).filter(Boolean))]
const locales = requestedLocales.length ? requestedLocales : htmlFile ? [val('locale') ?? 'en'] : taggedLocales.length ? [...new Set(['en', ...taggedLocales])] : ['en']

const origin = base ?? (urlArg ? new URL(urlArg).origin : '')
const pagePath = urlArg ? pathOf(urlArg) : ''
const slug = pagePath.split('/').filter(Boolean).pop() ?? path.basename(htmlFile ?? 'page', '.html')
let gapCount = 0
const plan = []

console.log(`\nQuery coverage: ${urlArg ? origin + pagePath : htmlFile}`)
console.log(`${queries.length} queries · locales: ${locales.join(', ')}${minImpr ? ` · min impressions ${minImpr}` : ''}`)

// Line iterator (not rl.question) so piped input and TTY input behave the same.
const rl = interactive ? readline.createInterface({ input: stdin, terminal: false }) : null
const lines = rl?.[Symbol.asyncIterator]()
const ask = async (prompt) => {
  stdout.write(prompt)
  const { value, done } = await lines.next()
  if (done) { stdout.write('\n'); return 'q' }
  return String(value)
}

for (const loc of locales) {
  let html
  const url = urlArg ? `${origin}${loc === 'en' ? '' : `/${loc}`}${pagePath}` : htmlFile
  try {
    html = htmlFile ? fs.readFileSync(htmlFile, 'utf8') : await getHtml(url)
  } catch (e) {
    console.log(`\n[${loc}] ${url} — FETCH FAILED: ${e.message}`)
    continue
  }
  const page = parsePage(html, loc)
  const explicitLocales = requestedLocales.length > 0 || Boolean(htmlFile)
  const mine = queries.filter((q) => q.locale === loc || (q.locale === null && (loc === 'en' || explicitLocales)))
  console.log(`\n[${loc}] ${url}`)
  console.log(`  title (${page.title.length}/${BUDGET[loc][0]}): ${page.title}`)
  console.log(`  h1: ${page.h1 || '(none)'}  ·  h2: ${page.h2.length}  ·  faq: ${page.faq.length}  ·  img alts: ${page.alts.length}`)
  if (!page.hasMain) console.log('  note: no <main> element found; lead/H1 parsed from the whole document')
  if (!mine.length) { console.log('  no queries apply to this locale'); continue }

  console.log('\n  | grade | query | impr | pos | where found | missing terms |')
  console.log('  |---|---|---:|---:|---|---|')
  const gaps = []
  for (const row of mine) {
    const g = grade(row.query, loc, page)
    const found = g.dedicated.length ? g.dedicated.join('+') : [...new Set(Object.values(g.where).flat())].join('+') || '—'
    console.log(`  | ${g.grade} | ${row.query} | ${row.impressions ?? '—'} | ${row.position ?? '—'} | ${found} | ${g.missing.join(', ') || '—'} |`)
    if (g.grade !== 'A') gaps.push({ row, g })
  }
  const real = gaps.filter(({ g }) => g.grade !== 'B')
  gapCount += real.length
  console.log(`\n  ${mine.length - gaps.length} of ${mine.length} queries have a dedicated target (A). ${real.length} gaps (C/D), ${gaps.length - real.length} weak (B).`)

  for (const { row, g } of gaps) {
    const props = proposals(row, g, page, loc)
    if (!props.length) continue
    console.log(`\n  ▸ "${row.query}" — grade ${g.grade}${row.position != null ? `, pos ${row.position}` : ''}${row.impressions != null ? `, ${row.impressions} impr` : ''}`)
    for (const p of props) console.log(`    [${p.id}] ${p.field}: ${p.action}${p.recommended ? '  ← recommended' : ''}${p.needsAuthor ? '  (needs authored wording/facts)' : ''}`)
    let chosen = props.filter((p) => p.recommended).map((p) => p.id)
    let confirmed = false
    if (rl) {
      const ans = (await ask(`    Apply which? ids e.g. T,H · r=recommended · s=skip · q=quit [r]: `)).trim().toLowerCase()
      if (ans === 'q') break
      if (ans === 's') chosen = []
      else if (ans && ans !== 'r') chosen = props.filter((p) => ans.split(/[ ,]+/).includes(p.id.toLowerCase())).map((p) => p.id)
      confirmed = chosen.length > 0
    }
    if (writePlan && chosen.length) plan.push({ loc, url, query: row.query, grade: g.grade, row, items: props.filter((p) => chosen.includes(p.id)), confirmed })
  }
}
rl?.close()

if (writePlan) {
  if (!plan.length) {
    console.log('\nNo fixes selected — no plan written.')
  } else {
    const date = new Date().toISOString().slice(0, 10)
    const dir = path.join(process.cwd(), 'docs', 'seo-tracking', 'fix-plans')
    fs.mkdirSync(dir, { recursive: true })
    const file = path.join(dir, `${slug}-${date}.md`)
    const status = interactive ? 'CONFIRMED by operator' : 'PROPOSED — not confirmed'
    const targetQs = [...new Set(plan.map((p) => p.query))]
    const md = [
      `# Fix plan: ${slug} (${date})`,
      '',
      `Status: **${status}**. Source: \`scripts/query-coverage.mjs\` on ${pagePath || htmlFile}.`,
      'This file is a hand-off. Nothing in the article source has been changed.',
      '',
      '## Fixes',
      '',
      '| Locale | Query | Grade | Impr | Pos | Fix | Field | Action | Needs new facts |',
      '|---|---|---|---:|---:|---|---|---|---|',
      ...plan.flatMap((p) => p.items.map((i) => `| ${p.loc} | ${p.query} | ${p.grade} | ${p.row.impressions ?? '—'} | ${p.row.position ?? '—'} | ${i.id} | ${i.field} | ${i.action.replace(/\|/g, '/')} | ${i.needsAuthor ? 'yes' : 'no'} |`)),
      '',
      '## How to apply (page-updater run)',
      '',
      '1. Apply the EN edits first; keep title/meta inside the locale budget (`npm run validate-meta-budgets -- --changed`).',
      '2. Read `docs/geo-translation.md` before writing any non-EN text; propagate to every locale that carries the query (queries are locale-specific; do not translate query wording literally).',
      '3. If a FAQ was added, keep FAQPage schema count equal to visible FAQs.',
      '4. Run `/risk-checker` on the article, then `npm run seo:gate -- --base=http://localhost:3000 <url>`.',
      `5. Re-run: \`node scripts/query-coverage.mjs ${urlArg ?? '<url>'} --queries-file <same csv>\` and confirm the grades moved to A.`,
      '6. Log it so the change can be measured:',
      '',
      '```bash',
      `npm run seo:log -- --slug ${pagePath || slug} --reason "query-coverage fix plan ${date}" \\`,
      `  --queries "${targetQs.join('|').replace(/"/g, '\\"')}" \\`,
      '  --field <field> --old "<old>" --new "<new>" [--position P --impressions N --clicks C --period "28d to YYYY-MM-DD"]',
      '```',
      '',
      'After the production deploy: `npm run seo:log -- --mark-deployed --all-pending --date YYYY-MM-DD`, then measure with `npm run seo:measure` at T+14 and T+28.',
      '',
    ].join('\n')
    fs.writeFileSync(file, md)
    console.log(`\nFix plan written: ${path.relative(process.cwd(), file)} (${status})`)
  }
}

console.log(`\n${gapCount} gap(s) across ${locales.length} locale(s).`)
if (strict && gapCount) process.exit(1)

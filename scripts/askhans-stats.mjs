// Ask Hans usage report. Reads the anonymous counters straight from Upstash Redis.
// Needs UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN (e.g. from .env.local via `vercel env pull`).
// Run: npm run askhans:stats            (last 30 days)
//      npm run askhans:stats -- 7       (last 7 days)
import fs from 'node:fs'
import { Redis } from '@upstash/redis'

for (const f of ['.env.local', '.env']) {
  if (!fs.existsSync(f)) continue
  for (const line of fs.readFileSync(f, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\n]*)"?\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2]
  }
}
if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  console.error('Missing UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN (run `vercel env pull .env.local`).')
  process.exit(1)
}
const redis = new Redis({ url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN })

const days = Math.max(1, Number(process.argv[2]) || 30)
const dates = Array.from({ length: days }, (_, i) => new Date(Date.now() - i * 86_400_000).toISOString().slice(0, 10)).reverse()

const perDay = []
const total = {}
const visitors = new Set()
for (const d of dates) {
  const h = (await redis.hgetall(`askhans:day:${d}`)) ?? {}
  const ids = await redis.smembers(`askhans:visits:${d}`)
  ids.forEach((i) => visitors.add(i))
  perDay.push({ d, h, visits: ids.length })
  for (const [k, v] of Object.entries(h)) total[k] = (total[k] ?? 0) + Number(v)
}

const sum = (prefix) =>
  Object.entries(total)
    .filter(([k]) => k.startsWith(prefix))
    .map(([k, v]) => [k.slice(prefix.length), v])
    .sort((a, b) => b[1] - a[1])

console.log(`\nAsk Hans — last ${days} days (${dates[0]} to ${dates[dates.length - 1]})\n`)

console.log('Questions per category per day (only visitors who said yes)')
const cats = sum('q:').map(([c]) => c)
console.log(['date', ...cats].join('\t'))
for (const { d, h } of perDay) {
  if (!cats.some((c) => h[`q:${c}`])) continue
  console.log([d, ...cats.map((c) => h[`q:${c}`] ?? 0)].join('\t'))
}
console.log('\nQuestions per category (total)')
sum('q:').forEach(([k, v]) => console.log(`  ${String(v).padStart(5)}  ${k}`))

const answers = sum('q:').reduce((n, [, v]) => n + v, 0)
const clicked = total.answers_clicked ?? 0
console.log('\nClick-through (answers that sent the visitor into PromptQuorum content)')
console.log(`  answers ${answers}   answers with >= 1 click ${clicked}   click-through rate ${answers ? ((100 * clicked) / answers).toFixed(1) + ' %' : 'n/a'}`)
console.log('  rate per day (clicked / answers)')
for (const { d, h } of perDay) {
  const a = Object.entries(h).filter(([k]) => k.startsWith('q:')).reduce((n, [, v]) => n + Number(v), 0)
  if (a) console.log(`    ${d}  ${String(h.answers_clicked ?? 0).padStart(3)} / ${String(a).padEnd(3)}  ${(((h.answers_clicked ?? 0) * 100) / a).toFixed(0)} %`)
}
console.log('  clicks by source and site section (text = link in the answer, panel = "Matching your question" card)')
sum('click:').slice(0, 20).forEach(([k, v]) => console.log(`  ${String(v).padStart(5)}  ${k}`))

console.log(`\nSuggested follow-up questions used: ${total.followup_click ?? 0} (of ${answers} answers${answers ? `, ${(((total.followup_click ?? 0) * 100) / answers).toFixed(1)} %` : ''})`)

console.log('\nTop links clicked (category:link)')
sum('link:').slice(0, 15).forEach(([k, v]) => console.log(`  ${String(v).padStart(5)}  ${k}`))

console.log('\nTools used')
sum('tool:').forEach(([k, v]) => console.log(`  ${String(v).padStart(5)}  ${k}`))

console.log('\nLanguages')
sum('lang:').forEach(([k, v]) => console.log(`  ${String(v).padStart(5)}  ${k}`))

const ratings = total.rating_count ?? 0
console.log('\nStar ratings (feedback, anonymous)')
console.log(`  ${ratings} ratings, average ${ratings ? ((total.rating_sum ?? 0) / ratings).toFixed(2) : 'n/a'} / 5`)
for (let n = 5; n >= 1; n--) console.log(`  ${'★'.repeat(n).padEnd(5)}  ${total[`rating:${n}`] ?? 0}`)
sum('fb_lang:').forEach(([k, v]) => console.log(`  ${String(v).padStart(5)}  language ${k}`))

const yes = total.consent_yes ?? 0
const no = total.consent_no ?? 0
console.log('\nConsent')
console.log(`  yes ${yes}   no ${no}   withdrawn ${total.consent_withdrawn ?? 0}   consent rate ${yes + no ? Math.round((100 * yes) / (yes + no)) + ' %' : 'n/a'}`)
console.log(`  "New" clicks ${total.new ?? 0}   unique anonymous visits (with consent) ${visitors.size}\n`)

#!/usr/bin/env node
// Academy topic-demand report for the owner: what people look for (subjects asked for), what they train (final
// tests per subject), themes with matching product categories, and weekly trends. No personal data exists in
// this data set; subjects below the public threshold are only counted, never listed.
// Run: npm run academy:demand            (text)
//      npm run academy:demand -- --json  (machine-readable)
//      npm run academy:demand -- --prune (also removes subjects asked for only once, to keep retention short)

import { Redis } from '@upstash/redis'

const MIN_PUBLIC = 5
const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
if (!url || !token) {
  console.error('academy-demand: no Redis credentials in the environment (.env.local)')
  process.exit(1)
}
const redis = new Redis({ url, token })
const args = process.argv.slice(2)

const pairs = (flat) => {
  const out = []
  for (let i = 0; i + 1 < (flat ?? []).length; i += 2) out.push({ subject: String(flat[i]), count: Number(flat[i + 1]) })
  return out
}
const top = async (key, n) => pairs(await redis.zrange(key, 0, n * 3 - 1, { rev: true, withScores: true })).filter((e) => e.count >= MIN_PUBLIC).slice(0, n)
const isoWeek = (d) => {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()))
  t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7))
  const w = Math.ceil(((t - Date.UTC(t.getUTCFullYear(), 0, 1)) / 86400000 + 1) / 7)
  return `${t.getUTCFullYear()}-W${String(w).padStart(2, '0')}`
}

if (args.includes('--prune')) {
  for (const key of ['academy:demand:subjects', 'academy:demand:trained']) {
    const removed = await redis.zremrangebyscore(key, 0, 1)
    console.log(`pruned ${removed} single-use entries from ${key}`)
  }
}

const dims = Object.fromEntries(Object.entries((await redis.hgetall('academy:demand:dims')) ?? {}).map(([k, v]) => [k, Number(v)]))
const since = await redis.get('academy:count:since')
const subjects = await top('academy:demand:subjects', 25)
const trained = await top('academy:demand:trained', 25)
const total = await redis.zcard('academy:demand:subjects')
const weeks = []
for (let i = 0; i < 8; i++) {
  const w = isoWeek(new Date(Date.now() - i * 7 * 86400000))
  const t = await top(`academy:demand:week:${w}`, 10)
  if (t.length) weeks.push({ week: w, top: t })
}
const group = (prefix) => Object.entries(dims).filter(([k]) => k.startsWith(prefix)).map(([k, v]) => [k.slice(prefix.length), v]).sort((a, b) => b[1] - a[1])

if (args.includes('--json')) {
  console.log(JSON.stringify({ since, subjects, trained, belowThreshold: Math.max(0, total - subjects.length), weeks, dims }, null, 2))
  process.exit(0)
}

const list = (rows) => (rows.length ? rows.map(([k, v]) => `    ${String(v).padStart(5)}  ${k}`).join('\n') : '    (nothing yet)')
console.log(`Academy topic demand since ${since ?? '?'}   (subjects are listed only at ${MIN_PUBLIC}+ identical requests)`)
console.log(`\n  What people look for (programmes started), top subjects:`)
console.log(list(subjects.map((e) => [e.subject, e.count])))
console.log(`    + ${Math.max(0, total - subjects.length)} rarer subjects, not listed`)
console.log(`\n  What people train (final tests started), top subjects:`)
console.log(list(trained.map((e) => [e.subject, e.count])))
console.log(`\n  Themes (programmes / lessons / final tests):`)
const themes = new Set(Object.keys(dims).filter((k) => k.includes(':theme:')).map((k) => k.split(':theme:')[1]))
const rows = [...themes].map((t) => [t, dims[`programme:theme:${t}`] ?? 0, dims[`lesson:theme:${t}`] ?? 0, dims[`test:theme:${t}`] ?? 0]).sort((a, b) => b[1] - a[1])
console.log(rows.length ? rows.map(([t, p, l, x]) => `    ${t.padEnd(22)} ${String(p).padStart(5)} / ${String(l).padStart(5)} / ${String(x).padStart(5)}`).join('\n') : '    (nothing yet)')
console.log(`\n  Language of programmes:\n${list(group('programme:lang:'))}`)
console.log(`  Self-rated level:\n${list(group('programme:level:'))}`)
console.log(`  Time chosen (minutes):\n${list(group('programme:minutes:'))}`)
console.log(`  Test mode:\n${list(group('programme:mode:'))}`)
console.log(`\n  Weekly trend (top subjects per ISO week):`)
console.log(weeks.length ? weeks.map((w) => `    ${w.week}: ${w.top.map((e) => `${e.subject} (${e.count})`).join(', ')}`).join('\n') : '    (nothing yet)')
console.log('\n  Theme to product mapping for marketing: see DEMAND_THEMES in src/lib/academy/demand.ts (PromptQuorum has no affiliate programme yet; the mapping only shows which product categories fit).')

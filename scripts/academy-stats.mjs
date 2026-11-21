#!/usr/bin/env node
// Academy anonymous totals for the owner: programmes, lessons, tests, certificates (generated / registered), star
// ratings (lesson and programme separately, with distribution), tutor thumbs, feedback and report mail clicks, and
// today's use against the daily ceiling. Reads Redis (UPSTASH_REDIS_REST_URL / _TOKEN). Run: npm run academy:stats

import { Redis } from '@upstash/redis'

const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
if (!url || !token) {
  console.error('academy-stats: no Redis credentials in the environment (.env.local)')
  process.exit(1)
}
const redis = new Redis({ url, token })
const n = (v) => Number(v ?? 0)

const [counts, fb, seq, today] = await Promise.all([
  redis.mget('academy:count:programme', 'academy:programmes:total', 'academy:count:lesson', 'academy:count:test', 'academy:count:certificate', 'academy:count:feedback_mail', 'academy:count:since'),
  redis.hgetall('academy:feedback'),
  redis.get('academy:cert:seq'),
  redis.get(`academy:global:${new Date().toISOString().slice(0, 10)}`),
])
const f = fb ?? {}
const dist = (kind) => [1, 2, 3, 4, 5].map((s) => n(f[`rating:${kind}:${s}`]))
const line = (kind) => {
  const d = dist(kind)
  const c = d.reduce((a, b) => a + b, 0)
  return `${kind}: ${c} ratings, average ${c ? (d.reduce((a, x, i) => a + x * (i + 1), 0) / c).toFixed(1) : '-'}  (1..5 stars: ${d.join(' / ')})`
}
console.log(`Academy totals since ${counts[6] ?? '?'}`)
console.log(`  programmes ${n(counts[0]) + n(counts[1])}, lessons ${n(counts[2])}, tests ${n(counts[3])}`)
console.log(`  certificates generated ${n(counts[4])}, registered for online verification ${n(seq)}`)
console.log(`  ${line('lesson')}`)
console.log(`  ${line('programme')}`)
console.log(`  tutor: ${n(f['tutor:message'])} messages, thumbs up ${n(f['tutor:up'])}, down ${n(f['tutor:down'])}`)
console.log(`  feedback mails opened ${n(counts[5])}, low-rating mails ${n(f['mail:rating'])}, report-a-problem mails ${n(f['mail:report'])}`)
console.log(`  study-hat button clicks (floating launcher, all visitors): ${n(f['launcher:click'])}`)
console.log(`  generation calls today (UTC): ${n(today)}`)

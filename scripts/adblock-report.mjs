#!/usr/bin/env node
// Adblock report: blocked % of sampled sessions per day and per device, with sample size and a 95% Wilson interval.
// Formula: blocked / all adblock_check events. A LOWER BOUND (sessions where Umami itself is blocked never report). See docs/adblock-measurement.md.
//
//   node scripts/adblock-report.mjs --input rows.json|rows.csv [--out report.md] [--thin 30]
// Rows: {date: 'YYYY-MM-DD', device: 'touch'|'pointer', blocked: true|false|'true'|'false', count: n}
import fs from 'node:fs'

/** Wilson score interval for k of n at 95%. Returns {pct, lo, hi} in percent, or nulls when n = 0. */
export function wilson(k, n, z = 1.959964) {
  if (!n) return { pct: null, lo: null, hi: null }
  const p = k / n, z2 = z * z
  const d = 1 + z2 / n
  const c = (p + z2 / (2 * n)) / d
  const h = (z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n))) / d
  return { pct: p * 100, lo: Math.max(0, c - h) * 100, hi: Math.min(1, c + h) * 100 }
}

export function parseRows(text) {
  const t = text.trim()
  if (t.startsWith('[')) return JSON.parse(t)
  const [head, ...lines] = t.split(/\r?\n/)
  const cols = head.split(',').map((x) => x.trim())
  return lines.filter(Boolean).map((l) => Object.fromEntries(l.split(',').map((v, i) => [cols[i], v.trim()])))
}

/** -> sorted [{date, device, blocked, total, ...wilson}] with a 'all' device row per day and a 'total' date row per device. */
export function summarise(rows) {
  const acc = new Map()
  const add = (date, device, isBlocked, n) => {
    const k = `${date}|${device}`
    const a = acc.get(k) ?? { date, device, blocked: 0, total: 0 }
    a.total += n
    if (isBlocked) a.blocked += n
    acc.set(k, a)
  }
  for (const r of rows) {
    const n = Number(r.count)
    const b = r.blocked === true || r.blocked === 'true' || r.blocked === 1 || r.blocked === '1'
    if (!r.date || !r.device || !Number.isFinite(n) || n < 0) throw new Error(`bad row: ${JSON.stringify(r)}`)
    for (const [d, dev] of [[r.date, r.device], [r.date, 'all'], ['total', r.device], ['total', 'all']]) add(d, dev, b, n)
  }
  return [...acc.values()].map((a) => ({ ...a, ...wilson(a.blocked, a.total) }))
    .sort((a, b) => (a.date === 'total') - (b.date === 'total') || a.date.localeCompare(b.date) || a.device.localeCompare(b.device))
}

export function render(rows, thin = 30) {
  const f = (x) => (x == null ? 'n/a' : x.toFixed(1))
  const L = ['# Adblock report', '', 'Blocked % = `adblock_check` events with blocked=true / all `adblock_check` events, same day and device. 95% Wilson interval. **Lower bound:** sessions where Umami itself is blocked never report, so the real adblock share is at least this high.', '',
    '| Date | Device | Blocked % | 95% interval | Samples (n) | Note |', '|--|--|--|--|--|--|']
  for (const r of summarise(rows)) L.push(`| ${r.date} | ${r.device} | ${f(r.pct)} | ${f(r.lo)} to ${f(r.hi)} | ${r.total} | ${r.date !== 'total' && r.total < thin ? 'thin' : ''} |`)
  return L.join('\n') + '\n'
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const arg = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? d : process.argv[i + 1] }
  const input = arg('input')
  if (!input) { console.error('Usage: adblock-report.mjs --input rows.json|rows.csv [--out report.md] [--thin 30]'); process.exit(2) }
  const md = render(parseRows(fs.readFileSync(input, 'utf8')), Number(arg('thin', 30)))
  const out = arg('out')
  if (out) fs.writeFileSync(out, md); else process.stdout.write(md)
}

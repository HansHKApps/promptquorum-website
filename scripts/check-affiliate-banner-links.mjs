#!/usr/bin/env node
// Opens every unique merchant URL of the affiliate-banner catalog (src/lib/affiliate-banners/offers.ts) and reports the status.
// 2xx/3xx = ok. 403/429/503 and timeouts = "blocked or slow" (many shops refuse bots): confirm those in a browser.
// 404/410/other = broken. Exit 1 only on broken links. Run: npm run check:affiliate-banner-links
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })
const { BANNER_OFFERS } = await jiti.import(path.join(ROOT, 'src/lib/affiliate-banners/offers.ts'))

const urls = new Map()
for (const o of Object.values(BANNER_OFFERS))
  for (const [l, ms] of Object.entries(o.merchantsByLocale))
    for (const m of ms) if (!urls.has(m.url)) urls.set(m.url, `${m.vendor} (${o.id}/${l})`)

const UA = 'Mozilla/5.0 (compatible; PromptQuorumLinkCheck/1.0; +https://www.promptquorum.com)'
async function check(url) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const r = await fetch(url, { method, redirect: 'follow', headers: { 'user-agent': UA, 'accept-language': 'en' }, signal: AbortSignal.timeout(15000) })
      if (method === 'HEAD' && (r.status === 405 || r.status >= 400)) continue
      return r.status
    } catch (e) {
      if (method === 'GET') return e.name === 'TimeoutError' ? 'timeout' : 'error'
    }
  }
  return 'error'
}
const entries = [...urls]
const out = { ok: [], blocked: [], broken: [] }
let i = 0
await Promise.all(Array.from({ length: 6 }, async () => {
  while (i < entries.length) {
    const [url, label] = entries[i++]
    const s = await check(url)
    const bucket = typeof s === 'number' && s < 400 ? 'ok' : [403, 429, 503, 'timeout', 'error', 999].includes(s) ? 'blocked' : 'broken'
    out[bucket].push(`${s}  ${label}  ${url}`)
  }
}))
console.log(`checked ${entries.length} unique URLs: ${out.ok.length} ok, ${out.blocked.length} blocked/slow (confirm in browser), ${out.broken.length} broken`)
for (const b of ['broken', 'blocked']) if (out[b].length) console.log(`\n${b.toUpperCase()}:\n` + out[b].sort().join('\n'))
process.exit(out.broken.length ? 1 : 0)

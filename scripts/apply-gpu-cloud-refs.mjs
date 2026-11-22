#!/usr/bin/env node
/**
 * Go-live script for the cloud-GPU provider pages (2026-11-22 task).
 *
 * Reads scripts/gpu-cloud-refs.json — a map of provider key -> https URL
 * (referral / affiliate link supplied by the owner), e.g.
 *   { "runpod": "https://www.runpod.io/?ref=abc123", "clore": "https://clore.ai?ref_id=abc123" }
 * and rewrites the `url` of every matching affiliateLinks entry (the single-line
 * `{ label, url, productName, ... }` entries) in the pages below. An entry matches
 * when its current URL host belongs to the provider. The WHOLE url is replaced by
 * the configured one (deep links included), so supply a deep link in the JSON if
 * you want to keep one.
 *
 * Dry-run by default; `--write` applies. Refuses any URL that is not https://, and any URL the site would
 * not recognise as a monetised link (no referral/affiliate parameter, see monetised-link-signals.json).
 * Prints a per-file count of rewritten entries. Commits nothing.
 *
 * GO-LIVE: this script is the only manual step. Once a code is written into a link, AffiliateLink renders it
 * with rel="nofollow sponsored" and every page that has such a link swaps the neutral notice for the commission
 * disclosure, automatically (src/lib/tracking/affiliate.ts). Before running it with real codes, the owner must
 * confirm the program terms and lift the CLAUDE.md rule "no affiliate parameters on any URL".
 *
 *   node scripts/apply-gpu-cloud-refs.mjs            # dry run
 *   node scripts/apply-gpu-cloud-refs.mjs --write    # apply
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const ARTICLES = join(root, 'src/lib/power-local-llm/articles')
const FILES = [
  'best-cloud-gpu-providers',
  'runpod-review',
  'vast-ai-review',
  'clore-ai-review',
  'novita-ai-review',
  'vultr-digitalocean-upcloud-gpu-cloud',
  'gpu-server-hosting-cudo-cherry-database-mart',
].map((s) => join(ARTICLES, `${s}.ts`))

// provider key -> hosts that identify its links
const HOSTS = {
  runpod: ['runpod.io', 'www.runpod.io'],
  vast: ['vast.ai', 'www.vast.ai'],
  clore: ['clore.ai', 'www.clore.ai'],
  novita: ['novita.ai', 'www.novita.ai'],
  vultr: ['vultr.com', 'www.vultr.com'],
  digitalocean: ['digitalocean.com', 'www.digitalocean.com'],
  upcloud: ['upcloud.com', 'www.upcloud.com'],
  cudo: ['cudocompute.com', 'www.cudocompute.com'],
  cherry: ['cherryservers.com', 'www.cherryservers.com'],
  databasemart: ['databasemart.com', 'www.databasemart.com'],
  lumadock: ['lumadock.com', 'www.lumadock.com'],
}

const write = process.argv.includes('--write')
const refsPath = join(root, 'scripts/gpu-cloud-refs.json')
const refs = existsSync(refsPath) ? JSON.parse(readFileSync(refsPath, 'utf8')) : {}

// Same signals the site uses (src/lib/tracking/monetised-link-signals.json) to decide that a link earns a
// commission and therefore gets rel="sponsored" + the commission disclosure. A configured URL the site would
// NOT recognise would leave the pages saying "no commission" while earning one, so it is refused by default.
const signals = JSON.parse(readFileSync(join(root, 'src/lib/tracking/monetised-link-signals.json'), 'utf8'))
const isMonetised = (url) => {
  let u
  try { u = new URL(url) } catch { return false }
  const host = u.hostname.toLowerCase().replace(/^www\./, '')
  if (signals.redirectHosts.some((h) => host === h || host.endsWith('.' + h))) return true
  for (const [key, value] of u.searchParams) {
    const k = key.toLowerCase()
    if (k === 'utm_medium') { if (signals.utmMediumValues.includes(value.toLowerCase())) return true; continue }
    if (signals.queryParams.includes(k) && value.trim() !== '') return true
  }
  return false
}
const allowUndetected = process.argv.includes('--allow-undetected')

const errors = []
for (const [k, v] of Object.entries(refs)) {
  if (!(k in HOSTS)) errors.push(`unknown provider key "${k}" (known: ${Object.keys(HOSTS).join(', ')})`)
  else if (typeof v !== 'string' || !v.startsWith('https://')) errors.push(`"${k}": refusing non-https URL ${JSON.stringify(v)}`)
  else {
    try { new URL(v) } catch { errors.push(`"${k}": not a valid URL`); continue }
    if (!isMonetised(v) && !allowUndetected) {
      errors.push(`"${k}": ${v} carries no referral/affiliate parameter or network host the site recognises (see src/lib/tracking/monetised-link-signals.json), so the page would still show the "no commission" notice. Add the parameter name to that file, or pass --allow-undetected if this is deliberately not a commission link.`)
    }
  }
}
if (errors.length) {
  console.error('Refusing to continue:\n - ' + errors.join('\n - '))
  process.exit(1)
}
if (!Object.keys(refs).length) console.log('scripts/gpu-cloud-refs.json is empty or missing — nothing to rewrite (dry run output below shows 0).')

const keyForHost = (host) => Object.keys(HOSTS).find((k) => HOSTS[k].includes(host))
let total = 0
for (const file of FILES) {
  if (!existsSync(file)) { console.log(`skip (missing) ${file}`); continue }
  const lines = readFileSync(file, 'utf8').split('\n')
  let changed = 0
  const out = lines.map((line) => {
    if (!line.includes('productName:') || !line.includes('url:')) return line
    return line.replace(/url:\s*'(https:\/\/[^']+)'/, (m, u) => {
      let host
      try { host = new URL(u).host } catch { return m }
      const key = keyForHost(host)
      if (!key || !refs[key] || refs[key] === u) return m
      changed++
      return `url: '${refs[key]}'`
    })
  })
  total += changed
  console.log(`${write ? 'rewrote' : 'would rewrite'} ${String(changed).padStart(3)} link(s)  ${file.replace(root + '/', '')}`)
  if (write && changed) writeFileSync(file, out.join('\n'))
}
console.log(`${write ? 'Applied' : 'Dry run:'} ${total} link(s) in ${FILES.length} files.${write ? '' : ' Re-run with --write to apply.'}`)

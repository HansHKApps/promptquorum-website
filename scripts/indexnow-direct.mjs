#!/usr/bin/env node

/**
 * Direct IndexNow submitter — works across ALL clusters, with no localhost
 * server and no app-side auth. Submits straight to the official
 * api.indexnow.org endpoint using the site's hosted key file in public/.
 *
 * Why this exists: scripts/notify-indexnow.js posts to a localhost endpoint
 * and hardcodes the /prompt-engineering/ path, and the production
 * /api/indexnow route is auth-protected (returns 401 to outside callers).
 * This script needs neither — it uses the standard IndexNow protocol, which
 * only requires the key to be hosted at keyLocation (it is: public/<key>.txt).
 *
 * Usage:
 *   node scripts/indexnow-direct.mjs <pathOrUrl> [more...] [--locales all|en|de,fr] [--dry-run]
 *
 * Each positional arg may be:
 *   - a full URL:           https://www.promptquorum.com/blog/some-post
 *                           (submitted as-is, no locale expansion)
 *   - a cluster/slug path:  local-llms/best-local-reasoning-model-deepseek-r1-2026
 *                           (BASE is prepended; locale prefixes applied)
 *
 * Flags:
 *   --locales all        expand each path to en + de fr ja zh es pt ar ko
 *   --locales de,fr,zh   expand to only those locales (en = no path prefix)
 *   --locales en         (default) submit paths as-is, no prefix
 *   --dry-run            print the URL list and payload, do not submit
 *
 * Examples:
 *   node scripts/indexnow-direct.mjs local-llms/foo power-local-llm/bar --locales all
 *   node scripts/indexnow-direct.mjs https://www.promptquorum.com/prompt-bites/baz
 *   npm run indexnow -- local-llms/foo --locales all
 */

import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const HOST = 'www.promptquorum.com'
const BASE = `https://${HOST}`
// en is the unprefixed canonical; the rest are path-prefixed locale routes.
const LOCALE_PREFIXES = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function findKey() {
  const pubDir = join(root, 'public')
  const file = readdirSync(pubDir).find((n) => /^[0-9a-f]{32}\.txt$/.test(n))
  if (!file) {
    throw new Error('IndexNow key file not found: expected public/<32-hex>.txt')
  }
  const key = file.replace(/\.txt$/, '')
  const content = readFileSync(join(pubDir, file), 'utf8').trim()
  if (content !== key) {
    console.warn(`⚠️  Key file content ("${content}") differs from filename ("${key}"). Using filename as key.`)
  }
  return { key, keyLocation: `${BASE}/${file}` }
}

// --- parse args ---
const argv = process.argv.slice(2)
let locales = ['en']
let dryRun = false
const positional = []
for (let i = 0; i < argv.length; i++) {
  const a = argv[i]
  if (a === '--dry-run') {
    dryRun = true
  } else if (a === '--locales') {
    const v = (argv[++i] || 'en').trim()
    if (v === 'all') locales = ['en', ...LOCALE_PREFIXES]
    else locales = v.split(',').map((s) => s.trim()).filter(Boolean)
  } else if (a === '--help' || a === '-h') {
    console.log(readFileSync(fileURLToPath(import.meta.url), 'utf8').split('*/')[0].split('/**')[1].trim())
    process.exit(0)
  } else {
    positional.push(a)
  }
}

if (positional.length === 0) {
  console.error('Usage: node scripts/indexnow-direct.mjs <pathOrUrl> [...] [--locales all|en|de,fr] [--dry-run]')
  process.exit(1)
}

function expand(arg) {
  if (/^https?:\/\//i.test(arg)) return [arg] // already a full URL
  const path = arg.replace(/^\/+/, '').replace(/\/+$/, '')
  return locales.map((l) => (l === 'en' ? `${BASE}/${path}` : `${BASE}/${l}/${path}`))
}

const urlList = [...new Set(positional.flatMap(expand))]
const { key, keyLocation } = findKey()
const body = { host: HOST, key, keyLocation, urlList }

console.log(`📢 ${dryRun ? '[dry-run] would submit' : 'Submitting'} ${urlList.length} URL(s) to IndexNow:`)
for (const u of urlList) console.log(`  • ${u}`)

if (dryRun) {
  console.log('\nPayload:')
  console.log(JSON.stringify(body, null, 2))
  process.exit(0)
}

const res = await fetch(INDEXNOW_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
})
const text = (await res.text()).trim()
// IndexNow returns 200 or 202 on success; 4xx on problems.
if (res.ok) {
  console.log(`✅ IndexNow accepted (HTTP ${res.status})${text ? `: ${text}` : ''}`)
} else {
  console.error(`❌ IndexNow rejected (HTTP ${res.status})${text ? `: ${text}` : ''}`)
  process.exit(1)
}

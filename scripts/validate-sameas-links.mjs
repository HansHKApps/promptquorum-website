#!/usr/bin/env node
// scripts/validate-sameas-links.mjs
//
// Prebuild sameAs link-liveness validator.
// Walks src/ for every schema.org `sameAs` array (Organization.sameAs,
// founder/Person.sameAs, in root layout.tsx and every cluster's
// page-helpers.tsx / jsonld.tsx), extracts each URL, and confirms it
// resolves live. A broken sameAs is a worse entity signal than a missing
// one (see: the Bluesky URL that sat 404ing across 6 files for months
// before anyone checked).
//
// Failure semantics matter here, since this runs as a network call in
// BLOCK-mode prebuild on every deploy:
//   - Confirmed 404/410 → BLOCK. That's a real dead profile.
//   - Timeout, 5xx, 429, DNS/network error → WARN and pass. Not evidence of
//     a dead link — failing the build on a remote host's transient downtime
//     or rate limiting is worse than the problem this validator exists to
//     catch. Only a confirmed "this resource does not exist" response blocks.
//   - Known anti-bot responses (LinkedIn 999) are treated as live, same as
//     before.
//
// Results are cached to disk (.cache/sameas-link-check.json) with a 7-day
// TTL so repeat builds don't re-hit the network for URLs already confirmed
// live this week.
//
// Run: node scripts/validate-sameas-links.mjs   (wired into npm "prebuild")

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const BLOCK_ON_DEAD_LINK = true
const REQUEST_TIMEOUT_MS = 8000
const CACHE_PATH = path.join(ROOT, '.cache', 'sameas-link-check.json')
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000

// Hosts with known anti-bot responses that are NOT evidence of a dead link —
// discovered this session: LinkedIn returns 999 to any non-browser request,
// including a real logged-out curl from a legitimate source. Extend this list
// only when you've personally confirmed the URL is genuinely reachable in a
// browser despite the automated check failing.
const KNOWN_BOT_BLOCK_STATUS = {
  'linkedin.com': [999],
  'www.linkedin.com': [999],
}

function hostOf(url) {
  try {
    return new URL(url).hostname
  } catch {
    return null
  }
}

function loadCache() {
  try {
    const raw = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'))
    const now = Date.now()
    const fresh = {}
    for (const [url, entry] of Object.entries(raw)) {
      if (entry.checkedAt && now - entry.checkedAt < CACHE_TTL_MS) {
        fresh[url] = entry
      }
    }
    return fresh
  } catch {
    return {}
  }
}

function saveCache(cache) {
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true })
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2))
}

// Scan every .ts/.tsx file under src/ for `sameAs: [ ... ]` or `'sameAs': [ ... ]`
// array literals and pull out each quoted URL inside.
function findSameAsUrls() {
  const results = [] // { file, line, url }
  const exts = new Set(['.ts', '.tsx'])

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue
        walk(abs)
      } else if (exts.has(path.extname(entry.name))) {
        const src = fs.readFileSync(abs, 'utf8')
        const re = /['"]?sameAs['"]?\s*:\s*\[([^\]]*)\]/g
        let m
        while ((m = re.exec(src))) {
          const arrayBody = m[1]
          const startLine = src.slice(0, m.index).split('\n').length
          const urlRe = /['"](https?:\/\/[^'"]+)['"]/g
          let um
          while ((um = urlRe.exec(arrayBody))) {
            results.push({
              file: path.relative(ROOT, abs),
              line: startLine,
              url: um[1],
            })
          }
        }
      }
    }
  }

  walk(path.join(ROOT, 'src'))
  return results
}

// Returns { verdict: 'live' | 'dead' | 'inconclusive', status, error? }.
// Only 'dead' (confirmed 404/410) blocks the build — everything else that
// isn't a clean 2xx/3xx is treated as inconclusive (network flake, rate
// limit, remote host having a bad day) and warns instead.
async function checkUrl(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  try {
    let res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PromptQuorumLinkCheck/1.0)' },
    })
    // Some hosts don't implement HEAD correctly (405/501) — retry with GET.
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PromptQuorumLinkCheck/1.0)' },
      })
    }
    if (res.status >= 200 && res.status < 400) {
      return { verdict: 'live', status: res.status }
    }
    if (res.status === 404 || res.status === 410) {
      return { verdict: 'dead', status: res.status }
    }
    // 429, 5xx, and anything else ambiguous (401/403 from bot walls, etc.) —
    // not a confirmed-dead resource, don't block on it.
    return { verdict: 'inconclusive', status: res.status }
  } catch (err) {
    return { verdict: 'inconclusive', status: null, error: err.message }
  } finally {
    clearTimeout(timer)
  }
}

async function main() {
  const found = findSameAsUrls()
  const uniqueUrls = [...new Set(found.map((f) => f.url))]

  console.log('🔗 sameAs link-liveness check')
  console.log(`   sameAs references found: ${found.length} | unique URLs: ${uniqueUrls.length}`)

  const cache = loadCache()
  let cacheHits = 0

  const results = new Map()
  for (const url of uniqueUrls) {
    if (cache[url]) {
      results.set(url, cache[url])
      cacheHits++
      continue
    }

    const result = await checkUrl(url)
    const host = hostOf(url)
    const allowedStatuses = (host && KNOWN_BOT_BLOCK_STATUS[host]) || []
    const final = (result.verdict !== 'live' && result.status && allowedStatuses.includes(result.status))
      ? { verdict: 'live', status: result.status, note: 'known anti-bot response, treated as live' }
      : result
    final.checkedAt = Date.now()
    results.set(url, final)
    cache[url] = final
  }

  saveCache(cache)
  console.log(`   cache hits: ${cacheHits}/${uniqueUrls.length} (TTL 7 days)`)

  const dead = [...results.entries()].filter(([, r]) => r.verdict === 'dead')
  const inconclusive = [...results.entries()].filter(([, r]) => r.verdict === 'inconclusive')

  if (inconclusive.length > 0) {
    console.log(`\n⚠️  ${inconclusive.length} URL(s) could not be confirmed either way (network/timeout/rate-limit) — not blocking:`)
    for (const [url, result] of inconclusive) {
      console.log(`  ${url}  (status: ${result.status ?? 'error: ' + result.error})`)
    }
  }

  if (dead.length === 0) {
    console.log('\n✅ No confirmed-dead sameAs URLs.')
    process.exit(0)
  }

  console.log(`\n❌ ${dead.length} confirmed-dead sameAs URL(s) (404/410):\n`)
  for (const [url, result] of dead) {
    const refs = found.filter((f) => f.url === url)
    console.log(`  ${url}  (status: ${result.status})`)
    for (const ref of refs) {
      console.log(`    ${ref.file}:${ref.line}`)
    }
  }

  if (BLOCK_ON_DEAD_LINK) {
    console.log('\n❌ Build blocked: confirmed-dead sameAs URL(s) above. Fix the URL or remove the entry —')
    console.log('   a broken sameAs is a worse entity signal than a missing one.')
    process.exit(1)
  } else {
    console.log('\n⚠️  WARN mode (non-blocking).')
    process.exit(0)
  }
}

main()

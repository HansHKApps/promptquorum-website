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
// Run: node scripts/validate-sameas-links.mjs   (wired into npm "prebuild")

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const BLOCK_ON_DEAD_LINK = true
const REQUEST_TIMEOUT_MS = 8000

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
    return { ok: res.status >= 200 && res.status < 400, status: res.status }
  } catch (err) {
    return { ok: false, status: null, error: err.message }
  } finally {
    clearTimeout(timer)
  }
}

async function main() {
  const found = findSameAsUrls()
  const uniqueUrls = [...new Set(found.map((f) => f.url))]

  console.log('🔗 sameAs link-liveness check')
  console.log(`   sameAs references found: ${found.length} | unique URLs: ${uniqueUrls.length}`)

  const results = new Map()
  for (const url of uniqueUrls) {
    const result = await checkUrl(url)
    const host = hostOf(url)
    const allowedStatuses = (host && KNOWN_BOT_BLOCK_STATUS[host]) || []
    if (!result.ok && result.status && allowedStatuses.includes(result.status)) {
      results.set(url, { ok: true, status: result.status, note: 'known anti-bot response, treated as live' })
    } else {
      results.set(url, result)
    }
  }

  const dead = [...results.entries()].filter(([, r]) => !r.ok)

  if (dead.length === 0) {
    console.log('✅ All sameAs URLs resolve.')
    process.exit(0)
  }

  console.log(`\n⚠️  ${dead.length} dead sameAs URL(s):\n`)
  for (const [url, result] of dead) {
    const refs = found.filter((f) => f.url === url)
    console.log(`  ${url}  (status: ${result.status ?? 'error: ' + result.error})`)
    for (const ref of refs) {
      console.log(`    ${ref.file}:${ref.line}`)
    }
  }

  if (BLOCK_ON_DEAD_LINK) {
    console.log('\n❌ Build blocked: dead sameAs URL(s) above. Fix the URL or remove the entry — a broken')
    console.log('   sameAs is a worse entity signal than a missing one.')
    process.exit(1)
  } else {
    console.log('\n⚠️  WARN mode (non-blocking).')
    process.exit(0)
  }
}

main()

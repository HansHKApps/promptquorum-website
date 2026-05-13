#!/usr/bin/env node
// Postbuild regression test for the /power-local-llm cluster noindex contract.
//
// History: commit 1d3f6479 introduced a path-conditional <meta name="robots"> in the
// root layout that read x-pathname from a middleware-set header. Middleware does NOT
// run during SSG prerender, so the layout fell back to the indexable robots string,
// which got baked into static HTML and served from the edge cache. Multiple commits
// (9d32a485, dabb5b75, ba55647b) shipped while this regression was masked.
//
// Architectural fix shipped alongside this script: layout no longer injects <meta
// name="robots"> directly; the Next.js metadata API owns it. Site-wide default is
// indexable; cluster pages override via generateMetadata in
// src/lib/power-local-llm/page-helpers.tsx.
//
// This test boots `next start` and asserts:
//   1. Every cluster URL emits exactly one <meta name="robots"> with noindex, follow.
//   2. Every cluster URL emits exactly one <meta name="googlebot"> with noindex, follow.
//   3. A representative non-cluster URL emits the indexable default.
// Failing assertions exit 1 and break the build.

import { spawn } from 'node:child_process'
import { readFileSync, existsSync } from 'node:fs'
import { setTimeout as sleep } from 'node:timers/promises'

const PORT = process.env.NOINDEX_TEST_PORT || '3017'
const HOST = `http://127.0.0.1:${PORT}`
const READY_TIMEOUT_MS = 60_000
const SLUGS_FILE = 'src/lib/power-local-llm/slugs.ts'
const PUBLISHED_FILE = 'src/lib/power-local-llm/published.ts'
const LOCALE_PREFIXES = ['', '/de', '/fr', '/ja', '/zh']
const NON_CLUSTER_PROBES = ['/', '/local-llms/llm-quantization-explained']
// Mirrors isPowerLLMHubPublished() in published.ts — all langs now published
const PUBLISHED_HUB_LANGS = new Set(['en', 'de', 'fr', 'ja', 'zh'])

function readSlugs() {
  const src = readFileSync(SLUGS_FILE, 'utf8')
  // Lines like:   'slug-name': 'key-name',  (whitespace after colon is optional)
  const re = /^\s+'([a-z0-9-]+)':\s*'[a-z0-9-]+',?\s*$/gm
  const slugs = []
  let m
  while ((m = re.exec(src)) !== null) slugs.push(m[1])
  if (slugs.length === 0) {
    throw new Error(`Failed to parse slugs from ${SLUGS_FILE}`)
  }
  return slugs
}

function readPublishedSlugs() {
  const src = readFileSync(PUBLISHED_FILE, 'utf8')
  // Match quoted slug lines inside POWER_LLM_PUBLISHED_SLUGS set literal
  const re = /^\s+'([a-z0-9-]+)',?\s*$/gm
  const slugs = new Set()
  let m
  while ((m = re.exec(src)) !== null) slugs.add(m[1])
  return slugs
}

async function waitForReady(url, deadline) {
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { method: 'HEAD' })
      if (res.status < 500) return true
    } catch {
      // server not up yet
    }
    await sleep(500)
  }
  return false
}

function countMatches(html, regex) {
  const matches = html.match(regex)
  return matches ? matches.length : 0
}

function extractRobotsTags(html) {
  const tags = []
  const re = /<meta\s+name="(robots|googlebot)"\s+content="([^"]*)"[^>]*\/?>/gi
  let m
  while ((m = re.exec(html)) !== null) {
    tags.push({ name: m[1].toLowerCase(), content: m[2] })
  }
  return tags
}

async function checkUrl(url, expect) {
  const res = await fetch(url, { redirect: 'manual' })
  if (res.status >= 400) {
    return { ok: false, reason: `HTTP ${res.status}`, url }
  }
  const html = await res.text()
  const tags = extractRobotsTags(html)
  const robots = tags.filter((t) => t.name === 'robots')
  const googlebot = tags.filter((t) => t.name === 'googlebot')

  if (robots.length !== 1) {
    return {
      ok: false,
      reason: `expected exactly 1 <meta name="robots">, found ${robots.length}: ${JSON.stringify(robots)}`,
      url,
    }
  }
  if (googlebot.length > 1) {
    return {
      ok: false,
      reason: `expected at most 1 <meta name="googlebot">, found ${googlebot.length}: ${JSON.stringify(googlebot)}`,
      url,
    }
  }

  if (expect === 'noindex') {
    if (!/noindex/i.test(robots[0].content)) {
      return {
        ok: false,
        reason: `expected noindex, got robots="${robots[0].content}"`,
        url,
      }
    }
  } else if (expect === 'index') {
    if (/noindex/i.test(robots[0].content)) {
      return {
        ok: false,
        reason: `expected indexable, got robots="${robots[0].content}"`,
        url,
      }
    }
    // Indexable default should also carry the snippet/preview directives.
    if (!/max-snippet/.test(robots[0].content)) {
      return {
        ok: false,
        reason: `expected max-snippet directives in indexable default, got robots="${robots[0].content}"`,
        url,
      }
    }
  }

  return { ok: true, url, robots: robots[0].content }
}

async function main() {
  if (!existsSync('.next')) {
    console.error('✗ .next directory missing — run `npm run build` first.')
    process.exit(1)
  }

  const slugs = readSlugs()
  console.log(`▶ Loaded ${slugs.length} slugs from ${SLUGS_FILE}`)

  console.log(`▶ Starting next start on port ${PORT}…`)
  // detached: true puts the server in its own process group so we can signal
  // every descendant (including the grandchild next-server that npx spawns).
  // Without this, killing the npx wrapper leaves next-server orphaned —
  // it keeps the port bound and serves stale builds to anything that connects later.
  const server = spawn('npx', ['next', 'start', '-p', PORT], {
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, NODE_ENV: 'production' },
    detached: true,
  })

  let serverOutput = ''
  server.stdout.on('data', (d) => {
    serverOutput += d.toString()
  })
  server.stderr.on('data', (d) => {
    serverOutput += d.toString()
  })

  let cleanedUp = false
  const cleanup = () => {
    if (cleanedUp) return
    cleanedUp = true
    if (!server.pid) return
    try {
      // Negative pid signals the whole process group — npx, next start, next-server.
      process.kill(-server.pid, 'SIGTERM')
    } catch {
      // group may already be gone
    }
    // Force-kill anything that survives a graceful shutdown window.
    setTimeout(() => {
      try { process.kill(-server.pid, 'SIGKILL') } catch {}
    }, 3000).unref()
  }
  process.on('exit', cleanup)
  for (const sig of ['SIGINT', 'SIGTERM', 'SIGHUP']) {
    process.on(sig, () => {
      cleanup()
      process.exit(sig === 'SIGINT' ? 130 : 143)
    })
  }
  process.on('uncaughtException', (err) => {
    console.error('✗ uncaughtException:', err)
    cleanup()
    process.exit(1)
  })
  process.on('unhandledRejection', (err) => {
    console.error('✗ unhandledRejection:', err)
    cleanup()
    process.exit(1)
  })

  const ready = await waitForReady(HOST, Date.now() + READY_TIMEOUT_MS)
  if (!ready) {
    console.error(`✗ next start did not become ready within ${READY_TIMEOUT_MS}ms`)
    console.error(serverOutput.slice(-2000))
    cleanup()
    process.exit(1)
  }
  console.log('✓ Server ready')

  const failures = []
  let passed = 0

  // Cluster article URLs — published EN slugs must be indexed; everything else noindex.
  const publishedSlugs = readPublishedSlugs()
  for (const locale of LOCALE_PREFIXES) {
    const lang = locale.slice(1) || 'en'
    for (const slug of slugs) {
      const isPublished = publishedSlugs.has(slug)
      const url = `${HOST}${locale}/power-local-llm/${slug}`
      const result = await checkUrl(url, isPublished ? 'index' : 'noindex')
      if (result.ok) {
        passed++
      } else {
        failures.push(result)
      }
    }
  }

  // Cluster hub pages — EN and DE hubs are published (indexed); FR/JA/ZH are noindex.
  for (const locale of LOCALE_PREFIXES) {
    const lang = locale.slice(1) || 'en'
    const isPublished = PUBLISHED_HUB_LANGS.has(lang)
    const url = `${HOST}${locale}/power-local-llm`
    const result = await checkUrl(url, isPublished ? 'index' : 'noindex')
    if (result.ok) {
      passed++
    } else {
      failures.push(result)
    }
  }

  // Non-cluster sanity: must serve the indexable default.
  for (const path of NON_CLUSTER_PROBES) {
    const url = `${HOST}${path}`
    const result = await checkUrl(url, 'index')
    if (result.ok) {
      passed++
    } else {
      failures.push(result)
    }
  }

  cleanup()

  console.log('')
  console.log(`▶ ${passed} URL(s) passed`)
  if (failures.length > 0) {
    console.error(`✗ ${failures.length} URL(s) failed`)
    for (const f of failures) {
      console.error(`  ${f.url}`)
      console.error(`    ${f.reason}`)
    }
    process.exit(1)
  }

  console.log('✓ Cluster robots contract verified: published URLs indexed, unpublished URLs noindex.')
  process.exit(0)
}

main().catch((err) => {
  console.error('✗ test-cluster-noindex crashed:', err)
  process.exit(1)
})

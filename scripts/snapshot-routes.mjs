#!/usr/bin/env node

/**
 * Snapshot all routes from the Next.js sitemap for refactor-safety baselining.
 *
 * Usage:
 *   node scripts/snapshot-routes.mjs --out /tmp/baseline-pre
 *   node scripts/snapshot-routes.mjs --out /tmp/baseline-post --server dev --concurrency 8
 *
 * Output structure:
 *   <out>/_sitemap.xml         — verbatim sitemap response
 *   <out>/_failures.txt        — non-200 responses + fetch errors (only if any)
 *   <out>/manifest.json        — array of { url, sha, tier, http_status, html_size, jsonld_count, fetched_at }
 *   <out>/pages/<sha>.html     — full HTML body per URL
 *   <out>/jsonld/<sha>.json    — extracted JSON-LD blocks per URL (array of strings)
 *
 * Tier classification:
 *   tier 1 = URL contains "/prompt-engineering/" (refactor scope, strict diff later)
 *   tier 2 = everything else (lenient diff later)
 *
 * Exit codes:
 *   0 — snapshot completed (failures recorded but not blocking)
 *   1 — runtime error (boot failure, IO error, etc.)
 *   2 — usage error (bad args, output dir exists)
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { spawn } from 'node:child_process'

// ─── Argument parsing ──────────────────────────────────────────────

function parseArgs(argv) {
  const args = {
    out: null,
    server: 'prod',
    port: 3000,
    concurrency: 4,
    timeout: 30000,
  }
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--out') args.out = argv[++i]
    else if (arg === '--server') args.server = argv[++i]
    else if (arg === '--port') args.port = Number(argv[++i])
    else if (arg === '--concurrency') args.concurrency = Number(argv[++i])
    else if (arg === '--timeout') args.timeout = Number(argv[++i])
    else if (arg === '--help' || arg === '-h') {
      console.log('Usage: snapshot-routes.mjs --out <dir> [--server prod|dev] [--port N] [--concurrency N] [--timeout MS]')
      process.exit(0)
    }
  }
  if (!args.out) {
    console.error('Error: --out <dir> is required')
    process.exit(2)
  }
  if (!['prod', 'dev'].includes(args.server)) {
    console.error(`Error: --server must be 'prod' or 'dev', got '${args.server}'`)
    process.exit(2)
  }
  return args
}

// ─── Helpers ───────────────────────────────────────────────────────

const sha256 = (s) => crypto.createHash('sha256').update(s).digest('hex')

async function pathExists(p) {
  try {
    await fs.stat(p)
    return true
  } catch (e) {
    if (e.code === 'ENOENT') return false
    throw e
  }
}

function extractJsonLd(html) {
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  return [...html.matchAll(re)].map((m) => m[1].trim())
}

function extractSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

async function withConcurrency(items, limit, fn) {
  const results = new Array(items.length)
  let cursor = 0
  const workers = Array.from({ length: limit }, async () => {
    while (true) {
      const idx = cursor++
      if (idx >= items.length) return
      results[idx] = await fn(items[idx], idx)
    }
  })
  await Promise.all(workers)
  return results
}

// ─── Server lifecycle ──────────────────────────────────────────────

async function checkProdBuildExists() {
  // Next.js writes these files only on a successful production build.
  const requiredFiles = ['.next/BUILD_ID', '.next/required-server-files.json']
  for (const f of requiredFiles) {
    try {
      await fs.stat(f)
    } catch {
      return { ok: false, missing: f }
    }
  }
  return { ok: true }
}

async function bootServer(server, port) {
  const subcmd = server === 'prod' ? 'start' : 'dev'
  const proc = spawn('npm', ['run', subcmd, '--', '--port', String(port)], {
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  // Capture (don't swallow) child output so we can surface it on boot failure.
  const outputLines = []
  const collect = (chunk) => {
    outputLines.push(chunk.toString())
    // Cap memory: keep ~last 200 chunks (~400KB worst case)
    if (outputLines.length > 200) outputLines.splice(0, outputLines.length - 200)
  }
  proc.stdout.on('data', collect)
  proc.stderr.on('data', collect)

  // Detect early child exit (e.g., "next start requires a production build")
  let childExited = false
  let childExitCode = null
  proc.on('exit', (code) => {
    childExited = true
    childExitCode = code
  })

  const deadline = Date.now() + 60_000
  while (Date.now() < deadline) {
    if (childExited) {
      const tail = outputLines.join('').split('\n').slice(-20).join('\n')
      throw new Error(
        `Server child process exited prematurely (code=${childExitCode}) before sitemap was ready.\n\n` +
        `Last 20 lines of server output:\n${tail}`,
      )
    }
    try {
      const r = await fetch(`http://localhost:${port}/sitemap.xml`)
      if (r.ok) return proc
    } catch {
      // server not up yet, keep polling
    }
    await new Promise((r) => setTimeout(r, 1000))
  }

  try { proc.kill('SIGTERM') } catch {}
  const tail = outputLines.join('').split('\n').slice(-20).join('\n')
  throw new Error(
    `Server failed to boot within 60s (server=${server}, port=${port})\n\n` +
    `Last 20 lines of server output:\n${tail}`,
  )
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs(process.argv)

  if (await pathExists(args.out)) {
    console.error(`Error: output dir already exists: ${args.out}`)
    console.error('Refusing to overwrite. Remove or choose a different --out.')
    process.exit(2)
  }

  // Pre-check: prod server requires a successful production build artifact.
  if (args.server === 'prod') {
    const check = await checkProdBuildExists()
    if (!check.ok) {
      console.error(`Error: production build not found (missing ${check.missing}).`)
      console.error('Run `npm run build` before snapshotting in prod mode,')
      console.error('or use --server dev for the development server.')
      console.error('')
      console.error('Note: if you ran `npm run dev` after the last build, the dev server may have')
      console.error('overwritten production files; re-run `npm run build` to be safe.')
      process.exit(1)
    }
  }

  await fs.mkdir(path.join(args.out, 'pages'), { recursive: true })
  await fs.mkdir(path.join(args.out, 'jsonld'), { recursive: true })

  console.log(`📸 Snapshot → ${args.out}`)
  console.log(`   server=${args.server} port=${args.port} concurrency=${args.concurrency} timeout=${args.timeout}ms`)
  console.log()

  // Boot server
  console.log('Booting server...')
  const proc = await bootServer(args.server, args.port)
  console.log(`✓ Server up on :${args.port}`)

  // Failsafe: kill server on any exit path
  let killed = false
  const cleanup = () => {
    if (!killed) {
      killed = true
      try { proc.kill('SIGTERM') } catch {}
    }
  }
  process.on('exit', cleanup)
  process.on('SIGINT', () => { cleanup(); process.exit(130) })
  process.on('SIGTERM', () => { cleanup(); process.exit(143) })

  try {
    // Fetch and save sitemap
    const sitemapResp = await fetch(`http://localhost:${args.port}/sitemap.xml`)
    const sitemapXml = await sitemapResp.text()
    await fs.writeFile(path.join(args.out, '_sitemap.xml'), sitemapXml)
    const urls = extractSitemapUrls(sitemapXml)
    console.log(`✓ Sitemap: ${urls.length} URLs`)
    console.log()

    if (urls.length === 0) {
      console.error('Error: sitemap returned no URLs')
      process.exit(1)
    }

    // Crawl
    const failures = []
    let progressDone = 0
    const manifest = await withConcurrency(urls, args.concurrency, async (url) => {
      const urlSha = sha256(url)
      const tier = url.includes('/prompt-engineering/') ? 1 : 2
      const fetchedAt = new Date().toISOString()

      try {
        const ctrl = new AbortController()
        const tid = setTimeout(() => ctrl.abort(), args.timeout)
        const r = await fetch(url, { signal: ctrl.signal, redirect: 'manual' })
        clearTimeout(tid)
        const html = await r.text()

        await fs.writeFile(path.join(args.out, 'pages', `${urlSha}.html`), html)
        const jsonLd = extractJsonLd(html)
        await fs.writeFile(
          path.join(args.out, 'jsonld', `${urlSha}.json`),
          JSON.stringify(jsonLd, null, 2),
        )

        if (r.status >= 400) {
          failures.push(`${r.status} ${url}`)
        } else if (r.status >= 300) {
          failures.push(`REDIRECT ${r.status} ${url}`)
        }

        const result = {
          url,
          sha: urlSha,
          tier,
          http_status: r.status,
          html_size: html.length,
          jsonld_count: jsonLd.length,
          fetched_at: fetchedAt,
        }

        progressDone++
        if (progressDone % 50 === 0 || progressDone === urls.length) {
          console.log(`  ${progressDone}/${urls.length}  (${Math.round((progressDone / urls.length) * 100)}%)`)
        }

        return result
      } catch (e) {
        failures.push(`ERROR ${url} :: ${e.message}`)
        progressDone++
        return {
          url,
          sha: urlSha,
          tier,
          http_status: 0,
          html_size: 0,
          jsonld_count: 0,
          fetched_at: fetchedAt,
          error: e.message,
        }
      }
    })

    // Write manifest
    await fs.writeFile(
      path.join(args.out, 'manifest.json'),
      JSON.stringify(manifest, null, 2),
    )

    if (failures.length > 0) {
      await fs.writeFile(path.join(args.out, '_failures.txt'), failures.join('\n') + '\n')
    }

    // Summary
    const tier1 = manifest.filter((m) => m.tier === 1).length
    const tier2 = manifest.filter((m) => m.tier === 2).length

    console.log()
    console.log('✅ Snapshot complete')
    console.log(`   Total URLs:    ${manifest.length}`)
    console.log(`   Tier 1 (PE):   ${tier1}`)
    console.log(`   Tier 2 (other): ${tier2}`)
    console.log(`   Failures:      ${failures.length}${failures.length ? ` (see ${args.out}/_failures.txt)` : ''}`)
    console.log(`   Output:        ${args.out}`)
  } finally {
    cleanup()
  }
}

main().catch((e) => {
  console.error('Snapshot failed:', e.message)
  process.exit(1)
})

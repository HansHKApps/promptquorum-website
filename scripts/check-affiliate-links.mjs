#!/usr/bin/env node
/**
 * check-affiliate-links.mjs
 * HTTP HEAD checks every affiliate URL across all article files.
 * Usage: node scripts/check-affiliate-links.mjs
 */

import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const ARTICLE_DIRS = [
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
]

// Extract all affiliate URLs from .ts files via regex
function extractAffiliateUrls(dir) {
  const urls = []
  let files
  try {
    files = readdirSync(join(ROOT, dir)).filter(f => f.endsWith('.ts'))
  } catch {
    return urls
  }
  for (const file of files) {
    const content = readFileSync(join(ROOT, dir, file), 'utf-8')
    // Only parse within affiliateLinks blocks — look for the pattern
    // affiliateLinks: [ ... ] and extract url: '...' from there
    const affiliateBlocks = content.matchAll(/affiliateLinks\s*:\s*\[[\s\S]*?\]/g)
    for (const block of affiliateBlocks) {
      const urlMatches = block[0].matchAll(/url\s*:\s*['"]([^'"]+)['"]/g)
      for (const m of urlMatches) {
        urls.push({ url: m[1], file: `${dir}/${file}` })
      }
    }
  }
  return urls
}

async function checkUrl(url) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10_000)
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'PromptQuorum-LinkChecker/1.0',
        Accept: '*/*',
      },
    })
    clearTimeout(timeout)
    return { status: res.status, ok: res.ok, final: res.url }
  } catch (err) {
    clearTimeout(timeout)
    return { status: 0, ok: false, error: err.message }
  }
}

function statusIcon(result) {
  if (result.status >= 200 && result.status < 300) return '✅'
  if (result.status >= 300 && result.status < 400) return '⚠️'
  return '🔴'
}

async function main() {
  const today = new Date().toISOString().slice(0, 10)
  console.log(`\n📊 Affiliate Link Health Check — ${today}\n`)

  // Collect all URLs with source info
  const allEntries = []
  for (const dir of ARTICLE_DIRS) {
    allEntries.push(...extractAffiliateUrls(dir))
  }

  if (allEntries.length === 0) {
    console.log('No affiliate links found.')
    process.exit(0)
  }

  // Deduplicate by URL but keep one source reference per unique URL
  const seen = new Map()
  for (const e of allEntries) {
    if (!seen.has(e.url)) seen.set(e.url, e.file)
  }
  const unique = Array.from(seen.entries()).map(([url, file]) => ({ url, file }))

  console.log(`Found ${allEntries.length} total links, ${unique.length} unique URLs across ${allEntries.map(e => e.file).filter((v, i, a) => a.indexOf(v) === i).length} files\n`)
  console.log('─'.repeat(80))

  // Check URLs concurrently (batches of 5 to be polite)
  const BATCH = 5
  const results = []
  for (let i = 0; i < unique.length; i += BATCH) {
    const batch = unique.slice(i, i + BATCH)
    const batchResults = await Promise.all(
      batch.map(async ({ url, file }) => {
        const result = await checkUrl(url)
        return { url, file, result }
      })
    )
    results.push(...batchResults)
    // Progress indicator
    process.stdout.write(`  Checked ${Math.min(i + BATCH, unique.length)}/${unique.length}...\r`)
  }
  process.stdout.write('\n')

  // Print results
  let okCount = 0, warnCount = 0, errCount = 0
  for (const { url, file, result } of results.sort((a, b) => a.url.localeCompare(b.url))) {
    const icon = statusIcon(result)
    const domain = new URL(url).hostname
    const statusStr = result.status > 0 ? `${result.status}` : `ERROR: ${result.error}`
    const finalNote = result.final && result.final !== url ? ` → ${result.final}` : ''
    console.log(`${icon} ${domain}`)
    console.log(`   URL: ${url}`)
    console.log(`   Status: ${statusStr}${finalNote}`)
    console.log(`   Source: ${file}`)
    console.log()
    if (result.status >= 200 && result.status < 300) okCount++
    else if (result.status >= 300 && result.status < 400) warnCount++
    else errCount++
  }

  console.log('─'.repeat(80))
  console.log(`\nSUMMARY: ${unique.length} unique URLs`)
  console.log(`  ✅ OK (2xx):     ${okCount}`)
  console.log(`  ⚠️  Redirect (3xx): ${warnCount}`)
  console.log(`  🔴 Error (4xx/5xx/timeout): ${errCount}`)

  if (errCount > 0) {
    console.log(`\n⚠️  ${errCount} URL(s) returned errors — check the 🔴 entries above.`)
    process.exit(1)
  } else {
    console.log(`\n✅ All URLs reachable.`)
  }
}

main().catch(err => {
  console.error('Script failed:', err)
  process.exit(1)
})

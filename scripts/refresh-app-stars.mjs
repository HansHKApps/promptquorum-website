#!/usr/bin/env node

/**
 * Refresh GitHub star counts in the directory tiles (src/lib/power-local-llm/apps/*.ts).
 *
 * Article prose no longer contains star counts (GEO_WRITING_GUIDELINES.md Rule 49) — it reads the
 * tile's `stars` through src/lib/power-local-llm/app-facts.ts. This script is the one place the
 * number is updated.
 *
 * Default is a dry run that prints a table of tile value vs live value. Nothing is written without --write.
 *
 *   node scripts/refresh-app-stars.mjs                       # report for every tile with a GitHub repo
 *   node scripts/refresh-app-stars.mjs --slug=jan,open-webui # report for specific tiles
 *   node scripts/refresh-app-stars.mjs --slug=jan --write    # update `stars:` in the tile file
 *   node scripts/refresh-app-stars.mjs --min-drift=5         # only list tiles whose count moved >=5%
 *
 * Only the numeric value of an existing `stars: <number>` line is changed; a trailing comment is kept.
 * Tiles with `stars: null` (closed source / untracked) are never touched. Set GITHUB_TOKEN to raise the
 * API rate limit (60/h unauthenticated).
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APPS_DIR = path.resolve(__dirname, '..', 'src', 'lib', 'power-local-llm', 'apps')

const args = process.argv.slice(2)
const slugArg = args.find((a) => a.startsWith('--slug='))?.slice('--slug='.length)
const slugs = slugArg ? new Set(slugArg.split(',').map((s) => s.trim())) : null
const write = args.includes('--write')
const minDrift = Number(args.find((a) => a.startsWith('--min-drift='))?.slice('--min-drift='.length) ?? 0)

function extractBalancedBlock(content, key) {
  const keyIdx = content.indexOf(`${key}:`)
  if (keyIdx === -1) return undefined
  const openIdx = content.indexOf('{', keyIdx)
  if (openIdx === -1) return undefined
  let depth = 0
  for (let i = openIdx; i < content.length; i++) {
    if (content[i] === '{') depth++
    else if (content[i] === '}' && --depth === 0) return content.slice(openIdx + 1, i)
  }
  return undefined
}

function extractGithubRepo(content) {
  const links = extractBalancedBlock(content, 'storeLinks')
  const m = links?.match(/github:\s*'https?:\/\/github\.com\/([^/']+)\/([^/'"]+)/)
  if (m) return { owner: m[1], repo: m[2] }
  const url = content.match(/[,{\n]\s*url:\s*'([^']*)'/)?.[1]
  if (url?.startsWith('github.com/')) {
    const [, owner, repo] = url.split('/')
    if (owner && repo) return { owner, repo }
  }
  // Many tiles only carry the repo in lastUpstreamUpdateSource / pqReview.versionSourceUrl.
  const src = content.match(/(?:lastUpstreamUpdateSource|versionSourceUrl):\s*'https?:\/\/github\.com\/([^/']+)\/([^/'"]+)/)
  if (src) return { owner: src[1], repo: src[2] }
  return null
}

async function liveStars({ owner, repo }) {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'promptquorum-refresh-stars' }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers }) // follows renames/redirects
  if (!res.ok) throw new Error(`GitHub API ${res.status}`)
  const data = await res.json()
  return { stars: data.stargazers_count, archived: data.archived, fullName: data.full_name }
}

const files = fs
  .readdirSync(APPS_DIR)
  .filter((f) => f.endsWith('.ts') && !['types.ts', 'categories.ts'].includes(f))
  .sort()

const rows = []
for (const file of files) {
  const slug = file.replace(/\.ts$/, '')
  if (slugs && !slugs.has(slug)) continue
  const filePath = path.join(APPS_DIR, file)
  const content = fs.readFileSync(filePath, 'utf8')
  const current = content.match(/^(\s*)stars:\s*(\d+)/m)
  if (!current) continue // stars: null or absent -> not tracked
  const repo = extractGithubRepo(content)
  if (!repo) { rows.push({ slug, status: 'NO_REPO' }); continue }
  try {
    const live = await liveStars(repo)
    const old = Number(current[2])
    const drift = old === 0 ? 100 : (Math.abs(live.stars - old) / old) * 100
    rows.push({ slug, old, live: live.stars, drift, status: drift >= minDrift ? 'DRIFT' : 'OK', repo: live.fullName, archived: live.archived })
    if (write && live.stars !== old) {
      fs.writeFileSync(filePath, content.replace(/^(\s*stars:\s*)\d+/m, `$1${live.stars}`))
    }
  } catch (e) {
    rows.push({ slug, status: `ERROR ${e.message}` })
  }
}

const shown = rows.filter((r) => r.status !== 'OK' || minDrift === 0)
console.log(`${write ? 'WROTE' : 'DRY RUN'} — ${rows.length} tile(s) checked\n`)
for (const r of shown) {
  if (r.old === undefined) { console.log(`${r.slug.padEnd(28)} ${r.status}`); continue }
  const arch = r.archived ? '  [ARCHIVED]' : ''
  console.log(`${r.slug.padEnd(28)} ${String(r.old).padStart(7)} -> ${String(r.live).padStart(7)}  (${r.drift.toFixed(1)}%)${arch}`)
}
if (!write && shown.some((r) => r.old !== undefined && r.old !== r.live)) console.log('\nRe-run with --write (and --slug=...) to update the tile files.')

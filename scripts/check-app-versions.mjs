#!/usr/bin/env node

/**
 * App version drift checker (report-only, never edits content).
 *
 * For every ToolRecord in src/lib/power-local-llm/apps/*.ts with
 * `pqReview.version` set, checks whether that stored version still matches
 * the tool's real, live current version, and writes a drift report.
 *
 * Two check paths, matched to what can actually be automated without wiring
 * an LLM API key into this script layer (nothing else in scripts/ does that
 * — see feature-app-post skill, "Version accuracy"):
 *
 *   - GITHUB (automatic): when the tool has a public GitHub repo (from
 *     `storeLinks.github` or a `url` of the form github.com/owner/repo), this
 *     script calls the GitHub Releases/Tags API directly — structured, free,
 *     no LLM needed — and reports MATCH / DRIFT / ERROR.
 *   - NEEDS_AGENT_CHECK (manual/agent step): every other tool. Its official
 *     site rarely exposes version numbers in a fixed format, so this script
 *     cannot safely auto-extract it. These are listed in the report for a
 *     Claude Code session (or a human) to check via WebFetch/WebSearch per
 *     the feature-app-post skill, then update pqReview.version by hand.
 *
 * Too slow/rate-limited for the build — run on demand or on a schedule.
 * Never edits app files; only writes a report.
 *
 * KNOWN GOTCHA (found 2026-09-20, predibase/lorax): the GitHub API's
 * /releases/latest endpoint returns whichever release is flagged "Latest" in
 * the repo's own settings — a maintainer can pin an OLD release as "Latest"
 * independent of chronological or semver order (lorax had lorax-0.4.0 from
 * Jan 2024 pinned as "Latest" while v0.12.1, Nov 2026, was the real newest
 * release). This script trusts the API's answer, so a MATCH/DRIFT result can
 * itself be wrong. If a DRIFT or MATCH result looks implausible (e.g. older
 * than a date already cited in the article, or the repo clearly has recent
 * activity), cross-check the repo's full /releases page before trusting it.
 *
 * Usage:
 *   node scripts/check-app-versions.mjs [--slug=<slug>]
 *
 * Set GITHUB_TOKEN in the environment to raise the GitHub API rate limit
 * (60/hour unauthenticated, 5000/hour authenticated) — optional.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const APPS_DIR = path.join(ROOT, 'src', 'lib', 'power-local-llm', 'apps')
const REPORT_JSON = path.join(ROOT, 'app-version-drift-report.json')
const REPORT_MD = path.join(ROOT, 'APP_VERSION_DRIFT_REPORT.md')

const args = process.argv.slice(2)
const slugFilter = args.find((a) => a.startsWith('--slug='))?.slice('--slug='.length)

function findAppFiles() {
  return fs
    .readdirSync(APPS_DIR)
    .filter((f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'categories.ts')
    .map((f) => path.join(APPS_DIR, f))
    .sort()
}

// Matches `field: '...'` preceded by a newline, comma, or `{` — so it finds
// the field whether the enclosing object is written one-per-line or all on
// one line (both styles appear across src/lib/power-local-llm/apps/*.ts).
function extractField(content, field) {
  const m = content.match(new RegExp(`[,{\\n]\\s*${field}:\\s*'([^']*)'`))
  return m ? m[1] : undefined
}

// Extracts the substring inside a `key: { ... }` block by counting brace
// depth from the key's opening `{` to its matching `}` — a fixed regex can't
// reliably span both the single-line and multi-line/nested-object styles
// tiles use.
function extractBalancedBlock(content, key) {
  const keyIdx = content.indexOf(`${key}:`)
  if (keyIdx === -1) return undefined
  const openIdx = content.indexOf('{', keyIdx)
  if (openIdx === -1) return undefined
  let depth = 0
  for (let i = openIdx; i < content.length; i++) {
    if (content[i] === '{') depth++
    else if (content[i] === '}') {
      depth--
      if (depth === 0) return content.slice(openIdx + 1, i)
    }
  }
  return undefined
}

function extractPqReview(content) {
  const block = extractBalancedBlock(content, 'pqReview')
  if (block === undefined) return null
  const withLeadingNewline = `\n${block}`
  return {
    version: extractField(withLeadingNewline, 'version'),
    date: extractField(withLeadingNewline, 'date'),
    versionSourceUrl: extractField(withLeadingNewline, 'versionSourceUrl'),
  }
}

function extractGithubRepo(content) {
  // storeLinks.github, if present, is a full URL.
  const storeLinksBlock = extractBalancedBlock(content, 'storeLinks')
  if (storeLinksBlock !== undefined) {
    const ghMatch = storeLinksBlock.match(/github:\s*'https?:\/\/github\.com\/([^/']+)\/([^/'"]+)/)
    if (ghMatch) return { owner: ghMatch[1], repo: ghMatch[2] }
  }
  // `url` is domain-only per its own doc comment, but a handful of
  // GitHub-native tools (e.g. llama.cpp) use "github.com/owner/repo" there.
  const url = extractField(content, 'url')
  if (url?.startsWith('github.com/')) {
    const [, owner, repo] = url.split('/')
    if (owner && repo) return { owner, repo }
  }
  return null
}

function normalizeVersion(v) {
  return v.trim().replace(/^v/i, '')
}

async function fetchGithubLatestVersion(owner, repo) {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'promptquorum-version-check' }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

  const releaseRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, { headers })
  if (releaseRes.ok) {
    const data = await releaseRes.json()
    return { version: data.tag_name ?? data.name, sourceUrl: data.html_url }
  }
  if (releaseRes.status !== 404) {
    throw new Error(`releases/latest returned ${releaseRes.status}`)
  }

  // No releases published — fall back to the most recent tag.
  const tagsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/tags?per_page=1`, { headers })
  if (!tagsRes.ok) throw new Error(`tags returned ${tagsRes.status}`)
  const tags = await tagsRes.json()
  if (!tags.length) return null
  return { version: tags[0].name, sourceUrl: `https://github.com/${owner}/${repo}/releases/tag/${tags[0].name}` }
}

async function main() {
  const files = findAppFiles()
  const results = []

  for (const absPath of files) {
    const file = path.relative(ROOT, absPath)
    const content = fs.readFileSync(absPath, 'utf-8')
    const slug = extractField(content, 'slug')
    if (slugFilter && slug !== slugFilter) continue

    const pqReview = extractPqReview(content)
    if (!pqReview?.version) continue // nothing stored yet — Phase 2 backfill territory, not this script's job

    const gh = extractGithubRepo(content)
    if (!gh) {
      results.push({ slug, file, storedVersion: pqReview.version, storedDate: pqReview.date, status: 'NEEDS_AGENT_CHECK' })
      continue
    }

    try {
      const live = await fetchGithubLatestVersion(gh.owner, gh.repo)
      if (!live) {
        results.push({ slug, file, storedVersion: pqReview.version, status: 'ERROR', error: 'no releases or tags found' })
        continue
      }
      const drift = normalizeVersion(live.version) !== normalizeVersion(pqReview.version)
      results.push({
        slug,
        file,
        storedVersion: pqReview.version,
        storedDate: pqReview.date,
        liveVersion: live.version,
        liveSourceUrl: live.sourceUrl,
        status: drift ? 'DRIFT' : 'MATCH',
      })
    } catch (err) {
      results.push({ slug, file, storedVersion: pqReview.version, status: 'ERROR', error: err.message })
    }
  }

  const byStatus = Object.groupBy(results, (r) => r.status)
  const summary = {
    generated: new Date().toISOString(),
    totalChecked: results.length,
    match: byStatus.MATCH?.length ?? 0,
    drift: byStatus.DRIFT?.length ?? 0,
    error: byStatus.ERROR?.length ?? 0,
    needsAgentCheck: byStatus.NEEDS_AGENT_CHECK?.length ?? 0,
    results,
  }

  fs.writeFileSync(REPORT_JSON, JSON.stringify(summary, null, 2) + '\n')

  const md = [
    '# App Version Drift Report',
    '',
    `Generated: ${summary.generated}`,
    '',
    `Checked: ${summary.totalChecked} | Match: ${summary.match} | Drift: ${summary.drift} | Error: ${summary.error} | Needs agent check: ${summary.needsAgentCheck}`,
    '',
    '## Drift (stored version no longer matches GitHub)',
    '',
    ...(byStatus.DRIFT?.length
      ? byStatus.DRIFT.map((r) => `- **${r.slug}** (${r.file}): stored \`${r.storedVersion}\` (as of ${r.storedDate}) -> live \`${r.liveVersion}\` — ${r.liveSourceUrl}`)
      : ['_none_']),
    '',
    '## Needs agent check (no public GitHub repo detected — fetch the official site with WebFetch/WebSearch and update pqReview.version by hand)',
    '',
    ...(byStatus.NEEDS_AGENT_CHECK?.length
      ? byStatus.NEEDS_AGENT_CHECK.map((r) => `- **${r.slug}** (${r.file}): stored \`${r.storedVersion}\` (as of ${r.storedDate})`)
      : ['_none_']),
    '',
    '## Errors',
    '',
    ...(byStatus.ERROR?.length ? byStatus.ERROR.map((r) => `- **${r.slug}** (${r.file}): ${r.error}`) : ['_none_']),
    '',
  ].join('\n')

  fs.writeFileSync(REPORT_MD, md)

  console.log(`Checked: ${summary.totalChecked} | Match: ${summary.match} | Drift: ${summary.drift} | Error: ${summary.error} | Needs agent check: ${summary.needsAgentCheck}`)
  console.log(`Report written to ${path.relative(ROOT, REPORT_JSON)} and ${path.relative(ROOT, REPORT_MD)}`)
}

main()

#!/usr/bin/env node
/**
 * SEO change log (src/data/seo-changelog.json).
 *
 * Log a change:
 *   npm run seo:log -- --slug /local-llms/x --reason "why" \
 *     --queries "target query one|target query two" \
 *     --field seoTitle --old "..." --new "..." \
 *     [--position 6.2 --impressions 2300 --clicks 12 --period "28d to 2026-10-17"] \
 *     [--deployed 2026-10-24]
 *
 *   --queries   the GSC queries this change targets (pipe-separated). Stored so a later
 *               re-pull can check those queries specifically (scripts/seo-measure.mjs).
 *   --deployed  the date the change went LIVE. Omit it if the change is only merged:
 *               deploys are on demand (CLAUDE.md), so merge date != live date. The entry is
 *               stored as pending (deployedAt: null) and measurement does not start.
 *
 * Record the deploy once you ship:
 *   npm run seo:log -- --mark-deployed --all-pending --date 2026-10-24
 *   npm run seo:log -- --mark-deployed --slug /local-llms/x --date 2026-10-24
 *
 * Entries written before this change have no deployedAt; seo:measure treats their `date`
 * as the start date and marks the result approximate.
 *
 * Measure (T+14 / T+28 after deployedAt):  npm run seo:measure -- --status
 */
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CHANGELOG_PATH = path.join(__dirname, '..', 'src/data/seo-changelog.json')
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/

const addDays = (isoDay, n) => {
  const d = new Date(`${isoDay}T00:00:00Z`)
  d.setUTCDate(d.getUTCDate() + n)
  return d.toISOString().slice(0, 10)
}

function parseArgs() {
  const args = process.argv.slice(2)
  const result = { fields: [], olds: [], news: [], markDeployed: false, allPending: false }

  let i = 0
  while (i < args.length) {
    const flag = args[i]
    const val = args[i + 1]
    switch (flag) {
      case '--slug':          result.slug = val;                     i += 2; break
      case '--reason':        result.reason = val;                   i += 2; break
      case '--position':      result.position = parseFloat(val);     i += 2; break
      case '--impressions':   result.impressions = parseInt(val, 10); i += 2; break
      case '--clicks':        result.clicks = parseInt(val, 10);     i += 2; break
      case '--period':        result.period = val;                   i += 2; break
      case '--field':         result.fields.push(val);               i += 2; break
      case '--old':           result.olds.push(val);                 i += 2; break
      case '--new':           result.news.push(val);                 i += 2; break
      case '--queries':       result.queries = val.split('|').map((s) => s.trim()).filter(Boolean); i += 2; break
      case '--deployed':      result.deployed = val;                 i += 2; break
      case '--date':          result.date = val;                     i += 2; break
      case '--mark-deployed': result.markDeployed = true;            i += 1; break
      case '--all-pending':   result.allPending = true;             i += 1; break
      default:                i++; break
    }
  }
  return result
}

const load = () => JSON.parse(fs.existsSync(CHANGELOG_PATH) ? fs.readFileSync(CHANGELOG_PATH, 'utf-8') : '[]')
const save = (data) => fs.writeFileSync(CHANGELOG_PATH, JSON.stringify(data, null, 2))
const dueDates = (deployedAt) => ({ t14: addDays(deployedAt, 14), t28: addDays(deployedAt, 28) })

function markDeployed(args) {
  if (!args.date || !ISO_DAY.test(args.date)) {
    console.error('❌ --mark-deployed needs --date YYYY-MM-DD (the day the change went live)')
    process.exit(1)
  }
  if (!args.allPending && !args.slug) {
    console.error('❌ --mark-deployed needs --slug <path> or --all-pending')
    process.exit(1)
  }
  const data = load()
  // Pending = written by this version of the script with deployedAt explicitly null.
  const hits = data.filter((e) => e.deployedAt === null && (args.allPending || e.slug === args.slug))
  if (!hits.length) {
    console.log('No pending entries matched. Nothing changed.')
    return
  }
  for (const e of hits) {
    e.deployedAt = args.date
    e.measure = dueDates(args.date)
  }
  save(data)
  const { t14, t28 } = dueDates(args.date)
  console.log(`✓ ${hits.length} entr${hits.length === 1 ? 'y' : 'ies'} marked live on ${args.date}`)
  console.log(`  T+14 re-pull due ${t14} · T+28 due ${t28}`)
  console.log('  Re-pull: GSC Performance → Pages (and Queries), then: npm run seo:measure -- --export <pages.csv> --exported YYYY-MM-DD')
}

function main() {
  const args = parseArgs()

  if (args.markDeployed) return markDeployed(args)

  if (!args.slug) {
    console.error('❌ --slug is required')
    process.exit(1)
  }
  if (args.fields.length === 0) {
    console.error('❌ At least one --field / --old / --new triplet is required')
    process.exit(1)
  }
  if (args.fields.length !== args.olds.length || args.fields.length !== args.news.length) {
    console.error(`❌ --field (${args.fields.length}), --old (${args.olds.length}), --new (${args.news.length}) counts must match`)
    process.exit(1)
  }
  if (args.deployed && !ISO_DAY.test(args.deployed)) {
    console.error('❌ --deployed must be YYYY-MM-DD')
    process.exit(1)
  }

  const fieldChanges = args.fields.map((field, i) => ({
    field,
    old: args.olds[i],
    new: args.news[i],
  }))

  const baseline = (args.position !== undefined || args.impressions !== undefined || args.clicks !== undefined)
    ? {
        position: args.position ?? 0,
        impressions: args.impressions ?? 0,
        clicks: args.clicks ?? 0,
        ctr: (args.impressions && args.clicks) ? args.clicks / args.impressions : 0,
        ...(args.period ? { period: args.period } : {}),
      }
    : null

  const entry = {
    id: crypto.randomUUID(),
    slug: args.slug,
    date: new Date().toISOString(),
    fields: fieldChanges,
    ...(args.reason ? { reason: args.reason } : {}),
    ...(args.queries?.length ? { queries: args.queries } : {}),
    baseline,
    deployedAt: args.deployed ?? null,
    ...(args.deployed ? { measure: dueDates(args.deployed) } : {}),
  }

  const existing = load()
  existing.push(entry)
  save(existing)

  console.log('✓ Changelog entry appended:')
  console.log(JSON.stringify(entry, null, 2))
  if (!baseline) console.log('\n⚠ No baseline (--position/--impressions/--clicks): this change cannot be measured against a before-value.')
  if (!args.queries?.length) console.log('⚠ No --queries: seo:measure can only compare page-level numbers for this entry.')
  if (!args.deployed) console.log('ℹ Not live yet. After the production deploy run: npm run seo:log -- --mark-deployed --all-pending --date YYYY-MM-DD')
}

main()

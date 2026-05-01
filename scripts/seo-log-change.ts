import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const CHANGELOG_PATH = path.join(process.cwd(), 'src/data/seo-changelog.json')

interface FieldChange {
  field: string
  old: string
  new: string
}

interface ChangelogEntry {
  id: string
  slug: string
  date: string
  fields: FieldChange[]
  reason?: string
  baseline?: {
    position: number
    impressions: number
    clicks: number
    ctr: number
    period?: string
  } | null
}

function parseArgs() {
  const args = process.argv.slice(2)
  const result: {
    slug?: string
    fields: string[]
    olds: string[]
    news: string[]
    reason?: string
    position?: number
    impressions?: number
    clicks?: number
    period?: string
  } = { fields: [], olds: [], news: [] }

  let i = 0
  while (i < args.length) {
    const flag = args[i]
    const val = args[i + 1]
    switch (flag) {
      case '--slug':       result.slug = val; i += 2; break
      case '--reason':     result.reason = val; i += 2; break
      case '--position':   result.position = parseFloat(val); i += 2; break
      case '--impressions': result.impressions = parseInt(val, 10); i += 2; break
      case '--clicks':     result.clicks = parseInt(val, 10); i += 2; break
      case '--period':     result.period = val; i += 2; break
      case '--field':      result.fields.push(val); i += 2; break
      case '--old':        result.olds.push(val); i += 2; break
      case '--new':        result.news.push(val); i += 2; break
      default:             i++; break
    }
  }
  return result
}

function main() {
  const args = parseArgs()

  if (!args.slug) {
    console.error('❌ --slug is required')
    process.exit(1)
  }
  if (args.fields.length === 0) {
    console.error('❌ At least one --field / --old / --new triplet is required')
    process.exit(1)
  }
  if (args.fields.length !== args.olds.length || args.fields.length !== args.news.length) {
    console.error('❌ --field, --old, and --new counts must match')
    process.exit(1)
  }

  const fieldChanges: FieldChange[] = args.fields.map((field, i) => ({
    field,
    old: args.olds[i],
    new: args.news[i],
  }))

  const entry: ChangelogEntry = {
    id: crypto.randomUUID(),
    slug: args.slug,
    date: new Date().toISOString(),
    fields: fieldChanges,
    ...(args.reason ? { reason: args.reason } : {}),
    baseline: (args.position !== undefined || args.impressions !== undefined || args.clicks !== undefined)
      ? {
          position: args.position ?? 0,
          impressions: args.impressions ?? 0,
          clicks: args.clicks ?? 0,
          ctr: (args.impressions && args.clicks) ? args.clicks / args.impressions : 0,
          ...(args.period ? { period: args.period } : {}),
        }
      : null,
  }

  const existing: ChangelogEntry[] = JSON.parse(
    fs.existsSync(CHANGELOG_PATH) ? fs.readFileSync(CHANGELOG_PATH, 'utf-8') : '[]'
  )
  existing.push(entry)
  fs.writeFileSync(CHANGELOG_PATH, JSON.stringify(existing, null, 2))

  console.log('✓ Changelog entry appended:')
  console.log(JSON.stringify(entry, null, 2))
}

main()

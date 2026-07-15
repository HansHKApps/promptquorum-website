#!/usr/bin/env node
/**
 * Internal content freshness tracker (v1).
 * Run manually: `npm run freshness`
 *
 * Scope: EN content only, local-llms + prompt-engineering + power-local-llm clusters.
 * Blog is excluded from v1 (blogContent.ts has no dateModified field and is a single
 * monolithic file, so git-log fallback can't give per-post granularity — see
 * docs/FRESHNESS_TOOL.md for the full Step 0 audit).
 *
 * GSC weighting is optional: paste a Search Console "Pages" export into
 * freshness-data/input.txt (gitignored) before running. Without it, only the
 * unweighted section is produced.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'freshness-data')
const INPUT_PATH = path.join(OUT_DIR, 'input.txt')

const BUCKETS = [
  { label: '0-5', min: 0, max: 6 },
  { label: '6-15', min: 6, max: 16 },
  { label: '16-30', min: 16, max: 31 },
  { label: '31-60', min: 31, max: 61 },
  { label: '61-120', min: 61, max: 121 },
  { label: '121+', min: 121, max: Infinity },
]

const CLUSTERS = [
  {
    name: 'local-llms',
    dir: path.join(ROOT, 'src/lib/local-llms/articles'),
    barrel: path.join(ROOT, 'src/lib/local-llms/articles-barrel.ts'),
    slugsFile: path.join(ROOT, 'src/lib/local-llms/slugs.ts'),
    slugMapExport: 'LLM_SLUG_TO_KEY',
    urlPrefix: '/local-llms/',
    publishedFilter: null,
  },
  {
    name: 'prompt-engineering',
    dir: path.join(ROOT, 'src/lib/prompt-engineering/articles'),
    barrel: path.join(ROOT, 'src/lib/prompt-engineering/articles-barrel.ts'),
    slugsFile: path.join(ROOT, 'src/lib/prompt-engineering/slugs.ts'),
    slugMapExport: 'PE_SLUG_TO_KEY',
    urlPrefix: '/prompt-engineering/',
    publishedFilter: null,
  },
  {
    name: 'power-local-llm',
    dir: path.join(ROOT, 'src/lib/power-local-llm/articles'),
    barrel: path.join(ROOT, 'src/lib/power-local-llm/articles-barrel.ts'),
    slugsFile: path.join(ROOT, 'src/lib/power-local-llm/slugs.ts'),
    slugMapExport: 'POWER_LLM_SLUG_TO_KEY',
    urlPrefix: '/power-local-llm/',
    publishedFilter: path.join(ROOT, 'src/lib/power-local-llm/published.ts'),
  },
]

const NON_EN_LOCALE_RE = /^\/(de|fr|ja|zh|es|pt|ar|ko)\//

// ---------------------------------------------------------------------------
// Step 1: walk EN articles, resolve dateModified per article
// ---------------------------------------------------------------------------

function parseSlugMap(slugsFile, exportName) {
  const content = fs.readFileSync(slugsFile, 'utf-8')
  const re = new RegExp(`export const ${exportName}[^{]*\\{([\\s\\S]*?)\\n\\}`)
  const m = re.exec(content)
  if (!m) throw new Error(`Could not find ${exportName} in ${slugsFile}`)
  const body = m[1]
  const map = {}
  const lineRe = /['"]([^'"]+)['"]\s*:\s*['"]?([A-Za-z0-9_-]+)['"]?/g
  let lm
  while ((lm = lineRe.exec(body))) {
    map[lm[1]] = lm[2]
  }
  return map
}

function parseBarrel(barrelPath) {
  const content = fs.readFileSync(barrelPath, 'utf-8')
  const importMap = {}
  for (const line of content.split('\n')) {
    const m = line.match(/^import\s*\{\s*article\s+as\s+(a_\S+)\s*\}\s*from\s*['"]([^'"]+)['"]/)
    if (m) importMap[m[1]] = m[2]
  }
  const keyToVar = {}
  for (const line of content.split('\n')) {
    const m = line.match(/^\s*['"]?([\w.-]+)['"]?\s*:\s*(a_[^,\s]+)/)
    if (m) keyToVar[m[1]] = m[2]
  }
  const keyToFile = {}
  const barrelDir = path.dirname(barrelPath)
  for (const [key, varName] of Object.entries(keyToVar)) {
    const rel = importMap[varName]
    if (rel) keyToFile[key] = path.resolve(barrelDir, rel + '.ts')
  }
  return keyToFile
}

function parsePublishedSet(publishedFile) {
  if (!publishedFile) return null
  const content = fs.readFileSync(publishedFile, 'utf-8')
  const set = new Set()
  for (const m of content.matchAll(/'([a-z0-9-]+)'/g)) set.add(m[1])
  return set
}

// Resolves `export const NAME = 'value'` from anywhere under src/lib, for the
// rare case where dateModified references a shared constant instead of a literal.
const constantCache = new Map()
function resolveConstant(name) {
  if (constantCache.has(name)) return constantCache.get(name)
  const out = execSync(
    `grep -rhoE "export const ${name}\\s*=\\s*'[^']*'" ${path.join(ROOT, 'src/lib')} || true`,
    { encoding: 'utf-8' }
  ).trim()
  const m = /=\s*'([^']*)'/.exec(out.split('\n')[0] || '')
  const value = m ? m[1] : null
  constantCache.set(name, value)
  return value
}

// Accepts ISO 'YYYY-MM-DD' or loose 'Month D, YYYY' (with optional leading words,
// e.g. "Published March 14, 2026") — the latter covers known bad records like
// lm-studio-vs-jan-ai.ts's dateModified: 'April 8, 2026'.
function parseFlexibleDate(raw) {
  if (!raw) return null
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw.trim())
  if (iso) return { date: new Date(raw.trim() + 'T00:00:00Z'), wasLoose: false }
  const loose = /([A-Z][a-z]+ \d{1,2},? \d{4})/.exec(raw)
  if (loose) {
    const d = new Date(loose[1])
    if (!isNaN(d.getTime())) return { date: d, wasLoose: true }
  }
  return null
}

function extractEnBlock(src) {
  const m = src.match(/\n {2}en:\s*\{([\s\S]*?)\n {2}(?:de|fr|es|ja|zh|pt|ar|ko):\s*\{/)
  return m ? m[1] : src
}

function extractField(block, field) {
  const re = new RegExp(`\\n\\s*${field}:\\s*([^,\\n]+),?`)
  const m = re.exec(block)
  if (!m) return null
  let val = m[1].trim().replace(/,$/, '')
  const quoted = /^['"]([\s\S]*)['"]$/.exec(val)
  if (quoted) return quoted[1]
  // bare identifier referencing a shared constant
  if (/^[A-Z_][A-Z0-9_]*$/.test(val)) return resolveConstant(val)
  return null
}

function loadArticles() {
  const articles = []
  const warnings = []
  for (const cluster of CLUSTERS) {
    const slugMap = parseSlugMap(cluster.slugsFile, cluster.slugMapExport)
    const keyToFile = parseBarrel(cluster.barrel)
    const publishedSet = parsePublishedSet(cluster.publishedFilter)

    for (const [slug, key] of Object.entries(slugMap)) {
      if (publishedSet && !publishedSet.has(slug)) continue
      const filePath = keyToFile[key]
      if (!filePath || !fs.existsSync(filePath)) {
        warnings.push(`${cluster.name}/${slug}: no content file (Coming Soon placeholder) — skipped`)
        continue
      }
      const src = fs.readFileSync(filePath, 'utf-8')
      const enBlock = extractEnBlock(src)
      const dateModifiedRaw = extractField(enBlock, 'dateModified')
      const publishDateRaw = extractField(enBlock, 'publishDate')

      let parsed = dateModifiedRaw ? parseFlexibleDate(dateModifiedRaw) : null
      let usedField = 'dateModified'
      if (!parsed && publishDateRaw) {
        parsed = parseFlexibleDate(publishDateRaw)
        usedField = 'publishDate'
      }
      if (!parsed) {
        warnings.push(`${cluster.name}/${slug}: no parseable date (dateModified=${dateModifiedRaw}, publishDate=${publishDateRaw}) — excluded from stats`)
        continue
      }
      if (parsed.wasLoose) {
        warnings.push(`${cluster.name}/${slug}: ${usedField} is not ISO 8601 ("${usedField === 'dateModified' ? dateModifiedRaw : publishDateRaw}") — parsed leniently, fix at source`)
      }

      articles.push({
        cluster: cluster.name,
        slug,
        urlPath: cluster.urlPrefix + slug,
        date: parsed.date,
        dateSource: usedField,
      })
    }
  }
  return { articles, warnings }
}

function daysSince(date, now) {
  const d = new Date(date)
  d.setUTCHours(0, 0, 0, 0)
  const n = new Date(now)
  n.setUTCHours(0, 0, 0, 0)
  return Math.floor((n.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))
}

function bucketize(items, getAge) {
  const total = items.length
  return BUCKETS.map((b) => {
    const inBucket = items.filter((i) => {
      const age = getAge(i)
      return age >= b.min && age < b.max
    })
    return {
      label: b.label,
      count: inBucket.length,
      pct: total ? +((100 * inBucket.length) / total).toFixed(1) : 0,
    }
  })
}

function bucketizeWeighted(items, getAge, getWeight) {
  const totalWeight = items.reduce((s, i) => s + getWeight(i), 0)
  return BUCKETS.map((b) => {
    const w = items
      .filter((i) => {
        const age = getAge(i)
        return age >= b.min && age < b.max
      })
      .reduce((s, i) => s + getWeight(i), 0)
    return {
      label: b.label,
      impressions: w,
      pct: totalWeight ? +((100 * w) / totalWeight).toFixed(1) : 0,
    }
  })
}

function mean(nums) {
  return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0
}

function median(nums) {
  if (!nums.length) return 0
  const sorted = [...nums].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}

// Impression-cumulative median: the age at which cumulative impression share
// (sorted by age ascending) first reaches 50% of total impressions.
function weightedMedian(items, getAge, getWeight) {
  const sorted = [...items].sort((a, b) => getAge(a) - getAge(b))
  const total = sorted.reduce((s, i) => s + getWeight(i), 0)
  if (!total) return 0
  let cum = 0
  for (const item of sorted) {
    cum += getWeight(item)
    if (cum >= total / 2) return getAge(item)
  }
  return getAge(sorted[sorted.length - 1])
}

// ---------------------------------------------------------------------------
// Step 2: GSC paste ingestion
// ---------------------------------------------------------------------------

function parseGscInput(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter((l) => l.length > 0)
  const rows = []
  let discardedQueryString = 0

  for (let i = 0; i < lines.length - 1; i++) {
    if (!/^https?:\/\//.test(lines[i])) continue
    const dataLine = lines[i + 1]
    const parts = dataLine.split('\t').map((p) => p.trim())
    if (parts.length < 4) continue // not a real data row, keep scanning
    i++ // consume the data line

    const urlLine = lines[i - 1]
    let url
    try {
      url = new URL(urlLine)
    } catch {
      continue
    }

    if (url.search) {
      discardedQueryString++
      continue
    }

    const clicks = parseInt(parts[0].replace(/,/g, ''), 10) || 0
    const impressions = parseInt(parts[1].replace(/,/g, ''), 10) || 0
    const ctr = parts[2]
    const position = parseFloat(parts[3]) || 0

    const isNonEn = NON_EN_LOCALE_RE.test(url.pathname)
    rows.push({
      pathname: url.pathname.replace(/\/$/, ''),
      clicks,
      impressions,
      ctr,
      position,
      isEn: !isNonEn,
    })
  }

  return { rows, discardedQueryString }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const now = new Date()
  const todayIso = now.toISOString().slice(0, 10)

  const { articles, warnings } = loadArticles()
  const ages = articles.map((a) => daysSince(a.date, now))

  const unweighted = {
    n: articles.length,
    meanDays: +mean(ages).toFixed(1),
    medianDays: median(ages),
    buckets: bucketize(articles.map((a, idx) => ages[idx]).map((age) => ({ age })), (x) => x.age),
  }

  console.log(`=== Freshness Report — ${todayIso} ===`)
  console.log(`UNWEIGHTED (all EN articles, n=${unweighted.n})`)
  console.log(`  Mean: ${unweighted.meanDays} days | Median: ${unweighted.medianDays} days`)
  for (const b of unweighted.buckets) {
    console.log(`  ${b.label.padEnd(7)} ${String(b.count).padStart(4)} pages (${b.pct}%)`)
  }

  const report = {
    generatedAt: now.toISOString(),
    scope: 'EN articles: local-llms, prompt-engineering, power-local-llm (blog excluded — see docs)',
    unweighted,
    warnings,
  }

  let weightedSection = null
  let priorityList = []
  let enShare = null
  let discardedQueryString = 0

  if (fs.existsSync(INPUT_PATH)) {
    const raw = fs.readFileSync(INPUT_PATH, 'utf-8')
    const { rows, discardedQueryString: dq } = parseGscInput(raw)
    discardedQueryString = dq

    const enRows = rows.filter((r) => r.isEn)
    const nonEnRows = rows.filter((r) => !r.isEn)
    const enImpressions = enRows.reduce((s, r) => s + r.impressions, 0)
    const totalImpressions = rows.reduce((s, r) => s + r.impressions, 0)
    enShare = totalImpressions ? +((100 * enImpressions) / totalImpressions).toFixed(1) : 0

    const byPath = new Map(enRows.map((r) => [r.pathname, r]))
    const matched = []
    for (const a of articles) {
      const gscRow = byPath.get(a.urlPath)
      if (gscRow) matched.push({ ...a, age: daysSince(a.date, now), impressions: gscRow.impressions })
    }
    const matchedPaths = new Set(matched.map((m) => m.urlPath))
    const unmatchedGscRows = enRows.filter((r) => r.impressions > 0 && !articles.some((a) => a.urlPath === r.pathname))
    const unmatchedArticles = articles.filter((a) => !matchedPaths.has(a.urlPath))

    const wMean = +(
      matched.reduce((s, m) => s + m.age * m.impressions, 0) /
      (matched.reduce((s, m) => s + m.impressions, 0) || 1)
    ).toFixed(1)
    const wMedian = weightedMedian(matched, (m) => m.age, (m) => m.impressions)
    const weightedBuckets = bucketizeWeighted(matched, (m) => m.age, (m) => m.impressions)

    weightedSection = {
      n: matched.length,
      meanDays: wMean,
      medianDays: wMedian,
      buckets: weightedBuckets,
      unmatchedGscRows: unmatchedGscRows.length,
      unmatchedArticles: unmatchedArticles.length,
    }

    // Priority refresh list: 121+ days AND top-quartile by impressions (among matched).
    const sortedByImpressions = [...matched].sort((a, b) => b.impressions - a.impressions)
    const quartileCutoffIdx = Math.ceil(sortedByImpressions.length * 0.25)
    const topQuartileThreshold = sortedByImpressions[quartileCutoffIdx - 1]?.impressions ?? Infinity
    priorityList = matched
      .filter((m) => m.age >= 121 && m.impressions >= topQuartileThreshold)
      .sort((a, b) => b.impressions - a.impressions)

    console.log(`\nWEIGHTED (by impressions, n=${weightedSection.n} matched)`)
    console.log(`  Mean: ${weightedSection.meanDays} days | Median: ${weightedSection.medianDays} days`)
    for (const b of weightedSection.buckets) {
      console.log(`  ${b.label.padEnd(7)} ${String(b.impressions).padStart(8)} impr (${b.pct}%)`)
    }
    console.log(`  Unmatched: ${weightedSection.unmatchedGscRows} GSC rows / ${weightedSection.unmatchedArticles} articles`)

    console.log(`\nEN share of impressions: ${enShare}%`)
    console.log(`Discarded (query-string) rows: ${discardedQueryString}`)
    console.log(`Non-EN rows in paste: ${nonEnRows.length} (${nonEnRows.reduce((s, r) => s + r.impressions, 0)} impressions — free byproduct, not used for weighting)`)

    console.log(`\nPRIORITY REFRESH LIST (121+ days, top-quartile impressions): ${priorityList.length} pages`)
    for (const p of priorityList) {
      console.log(`  ${p.urlPath}  —  ${p.age}d old, ${p.impressions} impressions`)
    }

    report.weighted = weightedSection
    report.byproducts = {
      enShareOfImpressions: enShare,
      discardedQueryStringRows: discardedQueryString,
      nonEnRows: nonEnRows.length,
      nonEnImpressions: nonEnRows.reduce((s, r) => s + r.impressions, 0),
    }
    report.priorityRefreshList = priorityList.map((p) => ({
      urlPath: p.urlPath,
      ageDays: p.age,
      impressions: p.impressions,
    }))
  } else {
    console.log(`\n(no freshness-data/input.txt found — skipping GSC-weighted section; paste a Search Console export to enable it)`)
  }

  if (warnings.length) {
    console.log(`\nData-quality warnings (${warnings.length}):`)
    for (const w of warnings) console.log(`  - ${w}`)
  }

  const outPath = path.join(OUT_DIR, `${todayIso}-unweighted.json`)
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2))
  console.log(`\nSaved: ${path.relative(ROOT, outPath)}`)
}

main()

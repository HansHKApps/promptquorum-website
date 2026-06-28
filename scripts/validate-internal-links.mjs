#!/usr/bin/env node
// scripts/validate-internal-links.mjs
//
// Prebuild internal-link-resolution validator.
// Walks every article's locale blocks, extracts internal links (structured
// `url: '/...'` fields AND inline markdown `](/...)`), strips any /<lang>/ and
// /<cluster>/ prefix, and resolves each remaining slug against that cluster's
// slug map (or a next.config.ts redirect). Reports any unresolved target.
//
// MODE: WARN (non-blocking). Prints the full backlog and exits 0 so it does not
// wall off deploys while the existing backlog is cleared. Once the backlog is at
// zero, flip BLOCK_ON_UNRESOLVED to true to make it exit 1 (like the freshness
// validator) so no broken internal link — structured or markdown, missing-url or
// dead-url — can ship again.
//
// Run: node scripts/validate-internal-links.mjs   (wired into npm "prebuild")

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// Flip to true once the backlog is cleared to make broken links fail the build.
const BLOCK_ON_UNRESOLVED = true

const LANGS = ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

// cluster -> slugs file (URL-slug is the left-hand key in each map)
const CLUSTER_SLUGFILES = {
  'local-llms': 'src/lib/local-llms/slugs.ts',
  'prompt-engineering': 'src/lib/prompt-engineering/slugs.ts',
  'power-local-llm': 'src/lib/power-local-llm/slugs.ts',
  'prompt-bites': 'src/lib/prompt-bites/slugs.ts',
  'smart-home': 'src/lib/smart-home/slugs.ts',
  'blog': 'src/lib/blogSlugs.ts',
}

// Article source dirs to scan.
const ARTICLE_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
]

// Real routes that are not slug-mapped articles. Hub roots are added below.
const STATIC_ALLOW = new Set([
  '/', '/features', '/features/optimization', '/features/quorum',
  '/how-it-works', '/compare', '/faq', '/about', '/blog', '/waitlist',
  '/privacy', '/terms', '/glossary', '/contact',
])

// Clusters that are real routes but have no slug map we can load here.
// Links into them are allowed (not validated) to avoid false positives; noted.
const UNVALIDATED_CLUSTERS = new Set(['frameworks'])

function readSlugSet(file) {
  const set = new Set()
  const abs = path.join(ROOT, file)
  if (!fs.existsSync(abs)) return set
  const src = fs.readFileSync(abs, 'utf8')
  // Lines like:   'url-slug': 'key',  (value/key may be camelCase, numeric, etc.)
  const re = /^\s*'([a-z0-9-]+)'\s*:\s*'[^']+'/gm
  let m
  while ((m = re.exec(src))) set.add(m[1])
  return set
}

function readRedirectSources() {
  const set = new Set()
  const abs = path.join(ROOT, 'next.config.ts')
  if (!fs.existsSync(abs)) return set
  const src = fs.readFileSync(abs, 'utf8')
  const re = /source:\s*'([^']+)'/g
  let m
  while ((m = re.exec(src))) set.add(m[1].replace(/\/$/, ''))
  return set
}

// Build resolvable data.
const slugSets = {}
for (const [cluster, file] of Object.entries(CLUSTER_SLUGFILES)) slugSets[cluster] = readSlugSet(file)
const redirectSources = readRedirectSources()
const clusterRoots = new Set(Object.keys(CLUSTER_SLUGFILES).concat([...UNVALIDATED_CLUSTERS]))

function normalize(p) {
  return p.split('#')[0].split('?')[0].replace(/\/$/, '') || '/'
}

// Returns null if resolvable, else a short reason string.
function resolveLink(rawPath) {
  const p = normalize(rawPath)
  if (STATIC_ALLOW.has(p)) return null
  if (redirectSources.has(p)) return null

  // strip optional leading /<lang>/
  let rest = p
  const langMatch = p.match(/^\/([a-z]{2})(\/|$)/)
  if (langMatch && LANGS.includes(langMatch[1])) {
    rest = p.slice(langMatch[1].length + 1) || '/'
  }
  if (STATIC_ALLOW.has(rest)) return null
  if (redirectSources.has(rest)) return null

  const seg = rest.split('/').filter(Boolean) // [cluster, slug?]
  if (seg.length === 0) return null
  const cluster = seg[0]
  if (seg.length === 1) {
    // hub root like /prompt-engineering
    return clusterRoots.has(cluster) ? null : `unknown route "${rest}"`
  }
  const slug = seg[1]
  if (UNVALIDATED_CLUSTERS.has(cluster)) return null
  if (!(cluster in slugSets)) return `unknown cluster "${cluster}"`
  if (slugSets[cluster].has(slug)) return null
  return `slug "${slug}" not in ${cluster} slug map`
}

// Extract internal links from an article file. Returns [{line, url, title}].
function extractLinks(src) {
  const out = []
  const lines = src.split('\n')
  lines.forEach((line, i) => {
    // structured url: '/...'
    let m
    const urlRe = /url:\s*'(\/[^']*)'/g
    while ((m = urlRe.exec(line))) {
      const t = line.match(/title:\s*'([^']*)'/)
      out.push({ line: i + 1, url: m[1], title: t ? t[1] : '' })
    }
    // inline markdown ](/...)
    const mdRe = /\]\((\/[^)]*)\)/g
    while ((m = mdRe.exec(line))) {
      out.push({ line: i + 1, url: m[1], title: '' })
    }
  })
  return out
}

const findings = []
let filesScanned = 0
let linksChecked = 0

for (const dir of ARTICLE_DIRS) {
  const absDir = path.join(ROOT, dir)
  if (!fs.existsSync(absDir)) continue
  for (const f of fs.readdirSync(absDir)) {
    if (!f.endsWith('.ts')) continue
    filesScanned++
    const src = fs.readFileSync(path.join(absDir, f), 'utf8')
    for (const link of extractLinks(src)) {
      linksChecked++
      const reason = resolveLink(link.url)
      if (reason) {
        const lang = (link.url.match(/^\/([a-z]{2})\//) || [])[1]
        findings.push({ file: `${dir}/${f}`, lang: LANGS.includes(lang) ? lang : 'en', ...link, reason })
      }
    }
  }
}

// ── Report ───────────────────────────────────────────────────────────────────
console.log('🔗 Internal-link resolution check')
console.log(`   files scanned: ${filesScanned} | internal links checked: ${linksChecked}`)
if (findings.length === 0) {
  console.log('✅ All internal links resolve.')
  process.exit(0)
}

const byFile = {}
for (const f of findings) (byFile[f.file] ||= []).push(f)
console.log(`\n⚠️  ${findings.length} unresolved internal link(s) across ${Object.keys(byFile).length} file(s):\n`)
for (const [file, items] of Object.entries(byFile)) {
  console.log(`  ${file}`)
  for (const it of items) {
    console.log(`    [${it.lang}] L${it.line} → ${it.url}  (${it.reason})${it.title ? `  "${it.title}"` : ''}`)
  }
}

if (BLOCK_ON_UNRESOLVED) {
  console.log('\n❌ Build blocked: unresolved internal links above.')
  process.exit(1)
} else {
  console.log('\n⚠️  WARN mode (non-blocking). Set BLOCK_ON_UNRESOLVED=true once the backlog is cleared.')
  process.exit(0)
}

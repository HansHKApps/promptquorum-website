#!/usr/bin/env node
// scripts/validate-internal-links.mjs
//
// Prebuild internal-link-resolution validator.
// Walks every article's locale blocks, extracts internal links (structured
// `url: '/...'` fields, `href: '/...'` nextStep fields, AND inline markdown
// `](/...)`), strips any /<lang>/ and /<cluster>/ prefix, and resolves each
// remaining slug against that cluster's slug map (or a next.config.ts redirect).
// Also walks blog/blogContent.ts and validates framework slugs against
// frameworksData.ts. Reports any unresolved target.
//
// Coverage:
//   Clusters walked (article dirs): local-llms, prompt-engineering, power-local-llm,
//     prompt-bites, smart-home, balcony-solar
//   Extra single files: src/lib/blog/blogContent.ts
//   Link shapes: url: '/...', href: '/...' (nextStep), markdown ]( /...)
//   Frameworks: validated against src/lib/frameworksData.ts slug list
//   Smart-home absolute URLs (https://...): skipped intentionally (schema markup only)
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
  'balcony-solar': 'src/lib/balcony-solar/slugs.ts',
  'blog': 'src/lib/blogSlugs.ts',
}

// Article source dirs to scan.
const ARTICLE_DIRS = [
  'src/lib/local-llms/articles',
  'src/lib/prompt-engineering/articles',
  'src/lib/power-local-llm/articles',
  'src/lib/prompt-bites/articles',
  'src/lib/smart-home/articles',
  'src/lib/balcony-solar/articles',
]

// Single files to scan that are not in an ARTICLE_DIRS directory.
const EXTRA_FILES = [
  'src/lib/blog/blogContent.ts',
]

// Real routes that are not slug-mapped articles. Hub roots are added below.
const STATIC_ALLOW = new Set([
  '/', '/features', '/features/optimization', '/features/quorum',
  '/how-it-works', '/compare', '/faq', '/about', '/blog', '/waitlist',
  '/privacy', '/terms', '/glossary', '/contact',
])

// No more UNVALIDATED_CLUSTERS — frameworks is now covered by readFrameworkSlugs().

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

// Read framework slugs from frameworksData.ts (slug: 'co-star' shape).
function readFrameworkSlugs() {
  const set = new Set()
  const abs = path.join(ROOT, 'src/lib/frameworksData.ts')
  if (!fs.existsSync(abs)) return set
  const src = fs.readFileSync(abs, 'utf8')
  const re = /^\s*slug:\s*'([a-z0-9-]+)'/gm
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
slugSets['frameworks'] = readFrameworkSlugs()
const redirectSources = readRedirectSources()
const clusterRoots = new Set(Object.keys(CLUSTER_SLUGFILES).concat(['frameworks']))

function normalize(p) {
  return p.split('#')[0].split('?')[0].replace(/\/$/, '') || '/'
}

// Returns null if resolvable, else a short reason string.
function resolveLink(rawPath) {
  const p = normalize(rawPath)
  // Skip static asset links — files with extensions (.pdf, .svg, .png, .xml, etc.)
  if (/\.[a-z0-9]+$/i.test(p)) return null
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
  if (!(cluster in slugSets)) return `unknown cluster "${cluster}"`
  if (slugSets[cluster].has(slug)) return null
  return `slug "${slug}" not in ${cluster} slug map`
}

// Extract internal links from a source file. Returns [{line, url, title}].
// Shapes covered:
//   url: '/...'           — structured relatedReading / schema fields
//   href: '/...'          — nextStep objects in local-llms articles
//   ]( /...)              — inline markdown links (blog, article body text)
function extractLinks(src) {
  const out = []
  const lines = src.split('\n')
  lines.forEach((line, i) => {
    let m
    // structured url: '/...'
    const urlRe = /url:\s*'(\/[^']*)'/g
    while ((m = urlRe.exec(line))) {
      const t = line.match(/title:\s*'([^']*)'/)
      out.push({ line: i + 1, url: m[1], title: t ? t[1] : '' })
    }
    // nextStep href: '/...'
    const hrefRe = /href:\s*'(\/[^']*)'/g
    while ((m = hrefRe.exec(line))) {
      out.push({ line: i + 1, url: m[1], title: '' })
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

// Walk article directories.
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

// Walk extra single files (blog, etc.).
for (const file of EXTRA_FILES) {
  const abs = path.join(ROOT, file)
  if (!fs.existsSync(abs)) continue
  filesScanned++
  const src = fs.readFileSync(abs, 'utf8')
  for (const link of extractLinks(src)) {
    linksChecked++
    const reason = resolveLink(link.url)
    if (reason) {
      const lang = (link.url.match(/^\/([a-z]{2})\//) || [])[1]
      findings.push({ file, lang: LANGS.includes(lang) ? lang : 'en', ...link, reason })
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

#!/usr/bin/env node
// Generates src/generated/content-metadata.json — a lightweight extract of
// exactly what src/app/sitemap.xml/route.ts needs from each cluster's
// content barrel (dateModified/lastFactChecked/publishDate, whether the EN
// entry has real sections, which languages have real sections, and any
// section images), so that route can stop value-importing the full barrels
// (blogContent.ts alone is 2.6MB of source) just to build a sitemap.
//
// The four extraction functions below are copied verbatim from
// src/app/sitemap.xml/route.ts (hasRealContent, articleLastmod's raw-field
// read, extractImagesFromArticle, and the per-language hasSections check
// inside availableLangsForPath) plus blog's own separate inline versions of
// the same — no reimplementation, no different logic. If those functions
// change in the route, update them here too (a mismatch would silently
// produce a stale/wrong sitemap, which is exactly what this generator
// exists to prevent — see the --check flag below).
//
// Run standalone via jiti (already a devDependency) so this script — not
// any Next.js route or component — pays the cost of loading the barrels.
//
// Usage:
//   node scripts/generate-content-metadata.mjs          # write the file
//   node scripts/generate-content-metadata.mjs --check  # fail if the committed
//                                                        # file is stale
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUTPUT_PATH = path.join(ROOT, 'src/generated/content-metadata.json')

const jiti = createJiti(import.meta.url, { tsconfigPaths: true })

const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

// ─── Verbatim copies of the route's extraction logic ──────────────────────

function hasSections(article) {
  return !!article && Object.keys(article?.sections ?? {}).length > 0
}

// Matches hasRealContent() in sitemap.xml/route.ts
function hasRealContent(contentMap, key) {
  const en = contentMap[key]?.['en']
  return !!en && Object.keys(en.sections ?? {}).length > 0
}

// Matches extractImagesFromArticle() in sitemap.xml/route.ts
function extractImagesFromArticle(contentMap, key) {
  const en = contentMap[key]?.['en']
  if (!en || !en.sections) return []

  const images = []
  const sections = en.sections

  Object.values(sections).forEach((section) => {
    if (section && typeof section === 'object') {
      if (section.image) {
        const imageUrl = section.image.startsWith('/') ? section.image : `/${section.image}`
        images.push({ url: imageUrl, title: section.imageCaption || undefined })
      }
      if (Array.isArray(section.items)) {
        section.items.forEach((item) => {
          if (item && item.image) {
            const imageUrl = item.image.startsWith('/') ? item.image : `/${item.image}`
            images.push({ url: imageUrl, title: item.imageCaption || undefined })
          }
        })
      }
      if (Array.isArray(section.numberedItems)) {
        section.numberedItems.forEach((item) => {
          if (item && item.image) {
            const imageUrl = item.image.startsWith('/') ? item.image : `/${item.image}`
            images.push({ url: imageUrl, title: item.imageCaption || undefined })
          }
        })
      }
    }
  })

  return images
}

// Matches the blog branch inside getImagesForPage() in sitemap.xml/route.ts
function extractBlogImages(post) {
  const en = post?.en || post?.['en']
  if (!en || !en.sections) return []
  const images = []
  Object.values(en.sections).forEach((section) => {
    if (section && section.image) {
      const imageUrl = section.image.startsWith('/') ? section.image : `/${section.image}`
      images.push({ url: imageUrl, title: section.imageCaption || undefined })
    }
  })
  return images
}

// ─── Per-cluster extraction ────────────────────────────────────────────────

const CLUSTERS = [
  { name: 'local-llms', modulePath: '@/lib/local-llms/content', exportName: 'llmContent' },
  { name: 'prompt-engineering', modulePath: '@/lib/prompt-engineering/content', exportName: 'peContent' },
  { name: 'power-local-llm', modulePath: '@/lib/power-local-llm/content', exportName: 'powerLLMContent' },
  { name: 'prompt-bites', modulePath: '@/lib/prompt-bites/articles-barrel', exportName: 'promptBitesContent' },
  { name: 'smart-home', modulePath: '@/lib/smart-home/content', exportName: 'smartHomeContent' },
  { name: 'balcony-solar', modulePath: '@/lib/balcony-solar/content', exportName: 'balconySolarContent' },
]

function extractCluster(contentMap) {
  const out = {}
  for (const key of Object.keys(contentMap)) {
    const en = contentMap[key]?.['en']
    out[key] = {
      dateModified: en?.dateModified ?? null,
      lastFactChecked: en?.lastFactChecked ?? null,
      publishDate: en?.publishDate ?? null,
      hasSections: hasRealContent(contentMap, key),
      langs: LANGS.filter((l) => hasSections(contentMap[key]?.[l])),
      images: extractImagesFromArticle(contentMap, key),
    }
  }
  return out
}

async function main() {
  const result = {}

  for (const cluster of CLUSTERS) {
    const mod = await jiti.import(cluster.modulePath)
    const contentMap = mod[cluster.exportName]
    result[cluster.name] = extractCluster(contentMap)
    console.log(`  ${cluster.name}: ${Object.keys(result[cluster.name]).length} entries`)
  }

  // Blog: keyed by postId (SLUG_TO_POST_ID's values), not by slug — matches
  // how sitemap.xml/route.ts looks blog posts up. Uses the real
  // getBlogPostModifiedIsoDate() (imported, not reimplemented) for lastmod,
  // since that function's own fallback-chain logic (dateModified ??
  // publishDate parsed from the EN localized string) is nontrivial enough
  // that reimplementing it here would be exactly the kind of drift risk
  // this generator exists to avoid.
  const { blogContent } = await jiti.import('@/lib/blog/blogContent')
  const { getBlogPostModifiedIsoDate } = await jiti.import('@/lib/blog/parsePublishDate')
  const blogOut = {}
  for (const postId of Object.keys(blogContent)) {
    const post = blogContent[postId]
    blogOut[postId] = {
      lastmod: getBlogPostModifiedIsoDate(postId),
      langs: LANGS.filter((l) => hasSections(post?.[l])),
      images: extractBlogImages(post),
    }
  }
  result.blog = blogOut
  console.log(`  blog: ${Object.keys(blogOut).length} entries`)

  const json = JSON.stringify(result, null, 2) + '\n'

  if (process.argv.includes('--check')) {
    const existing = fs.existsSync(OUTPUT_PATH) ? fs.readFileSync(OUTPUT_PATH, 'utf-8') : null
    if (existing !== json) {
      console.error('')
      console.error('❌ src/generated/content-metadata.json is stale.')
      console.error('   Run `node scripts/generate-content-metadata.mjs` and commit the result.')
      process.exit(1)
    }
    console.log('✅ content-metadata.json is up to date')
    return
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  fs.writeFileSync(OUTPUT_PATH, json)
  console.log(`✅ ${OUTPUT_PATH.replace(ROOT + '/', '')} written (${(json.length / 1024).toFixed(1)} KB)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

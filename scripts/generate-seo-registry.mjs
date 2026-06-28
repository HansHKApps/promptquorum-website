#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const CHANGELOG_PATH = path.join(ROOT, 'src/data/seo-changelog.json')
const OUTPUT_PATH = path.join(ROOT, 'public/data/seo-registry.json')
const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

// Extract seoTitle and metaDescription per language from a PE article file.
// Language blocks are at 4-space indent: "    en: {"
function extractMetaFromPeFile(filePath) {
  const lines = fs.readFileSync(filePath, 'utf-8').split('\n')
  const result = {}

  let currentLang = null
  let langStartLine = -1
  // Track where each language block starts
  const langLines = [] // { lang, lineIndex }

  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^ {2,4}(en|de|fr|ja|zh|es|pt|ar):\s*\{/)
    if (m) {
      langLines.push({ lang: m[1], lineIndex: i })
    }
  }

  // For each language block, scan until the next language block starts
  for (let li = 0; li < langLines.length; li++) {
    const { lang, lineIndex } = langLines[li]
    const endLine = li + 1 < langLines.length ? langLines[li + 1].lineIndex : lines.length

    result[lang] = { seoTitle: null, metaDescription: null }
    for (let i = lineIndex; i < endLine; i++) {
      const line = lines[i]
      if (!result[lang].seoTitle) {
        const m = line.match(/seoTitle:\s*'([^']*)'/) || line.match(/seoTitle:\s*"([^"]*)"/)
        if (m) result[lang].seoTitle = m[1]
      }
      if (!result[lang].metaDescription) {
        const m = line.match(/metaDescription:\s*'([^']*)'/) || line.match(/metaDescription:\s*"([^"]*)"/)
        if (m) result[lang].metaDescription = m[1]
      }
    }
  }

  return result
}

// Parse articles-barrel.ts to get { "slug" → relative-file-path } mapping.
function parseBarrel(barrelPath) {
  const content = fs.readFileSync(barrelPath, 'utf-8')
  const lines = content.split('\n')

  // Map: varname → relative file path
  const importMap = {}
  for (const line of lines) {
    const m = line.match(/^import\s*\{\s*article\s+as\s+(a_\S+)\s*\}\s*from\s*['"]([^'"]+)['"]/)
    if (m) importMap[m[1]] = m[2]
  }

  // Map: slug → var name
  const slugToVar = {}
  for (const line of lines) {
    const m = line.match(/^\s+"([^"]+)":\s+(a_[^,\s]+)/)
    if (m) slugToVar[m[1]] = m[2]
  }

  // Combine: slug → resolved file path
  const slugToFile = {}
  const barrelDir = path.dirname(barrelPath)
  for (const [slug, varName] of Object.entries(slugToVar)) {
    const rel = importMap[varName]
    if (rel) {
      slugToFile[slug] = path.resolve(barrelDir, rel + '.ts')
    }
  }
  return slugToFile
}

// Extract seoTitle/metaDescription per language per article slug from content.ts.
// Article keys are at 2-space indent: "  'slug': {"
// Language blocks inside are at 4-space indent: "    en: {"
function extractMetaFromLlmContent(contentPath) {
  const lines = fs.readFileSync(contentPath, 'utf-8').split('\n')
  const articles = {} // slug → { lang → { seoTitle, metaDescription } }

  let currentSlug = null
  let currentLang = null

  const articleKeyLines = []  // { slug, lineIndex }
  const langKeyLines = []     // { slug, lang, lineIndex }

  for (let i = 0; i < lines.length; i++) {
    // Article key: "  'slug': {"
    const slugM = lines[i].match(/^  '([^']+)':\s*\{/)
    if (slugM) articleKeyLines.push({ slug: slugM[1], lineIndex: i })

    // Language key: "    en: {" (4-space indent inside article blocks)
    const langM = lines[i].match(/^ {4}(en|de|fr|ja|zh|es|pt|ar):\s*\{/)
    if (langM) {
      // Associate with last seen article slug
      const ownerSlug = articleKeyLines.length > 0
        ? articleKeyLines[articleKeyLines.length - 1].slug
        : null
      if (ownerSlug) langKeyLines.push({ slug: ownerSlug, lang: langM[1], lineIndex: i })
    }
  }

  // For each (slug, lang) block, scan until next lang block or next article
  for (let li = 0; li < langKeyLines.length; li++) {
    const { slug, lang, lineIndex } = langKeyLines[li]
    const endLine = li + 1 < langKeyLines.length ? langKeyLines[li + 1].lineIndex : lines.length

    if (!articles[slug]) articles[slug] = {}
    articles[slug][lang] = { seoTitle: null, metaDescription: null }

    for (let i = lineIndex; i < endLine; i++) {
      const line = lines[i]
      if (!articles[slug][lang].seoTitle) {
        const m = line.match(/seoTitle:\s*'([^']*)'/) || line.match(/seoTitle:\s*"([^"]*)"/)
        if (m) articles[slug][lang].seoTitle = m[1]
      }
      if (!articles[slug][lang].metaDescription) {
        const m = line.match(/metaDescription:\s*'([^']*)'/) || line.match(/metaDescription:\s*"([^"]*)"/)
        if (m) articles[slug][lang].metaDescription = m[1]
      }
    }
  }

  return articles
}

function buildChangeLookup(changelog) {
  const map = new Map()
  for (const entry of changelog) {
    const date = entry.date.split('T')[0]
    const existing = map.get(entry.slug)
    if (existing) {
      existing.count++
      if (date > existing.lastDate) {
        existing.lastDate = date
        if (entry.baseline) existing.baseline = entry.baseline
      }
    } else {
      map.set(entry.slug, { lastDate: date, count: 1, baseline: entry.baseline ?? null })
    }
  }
  return map
}

function main() {
  const changelog = JSON.parse(
    fs.existsSync(CHANGELOG_PATH) ? fs.readFileSync(CHANGELOG_PATH, 'utf-8') : '[]'
  )
  const changeLookup = buildChangeLookup(changelog)

  const pages = {}

  function addPage(slug, meta) {
    const change = changeLookup.get(slug)
    pages[slug] = {
      seoTitle: meta.seoTitle ?? null,
      seoTitleLength: meta.seoTitle ? meta.seoTitle.length : null,
      metaDescription: meta.metaDescription ?? null,
      metaDescriptionLength: meta.metaDescription ? meta.metaDescription.length : null,
      lastMetaUpdate: change?.lastDate ?? null,
      changeCount: change?.count ?? 0,
      baseline: change?.baseline ?? null,
    }
  }

  // Prompt Engineering articles — use URL slugs from PE_SLUG_TO_KEY, not barrel keys
  const barrelPath = path.join(ROOT, 'src/lib/prompt-engineering/articles-barrel.ts')
  const slugToFile = parseBarrel(barrelPath)

  // Parse PE_SLUG_TO_KEY to build contentKey → urlSlug reverse map
  const peSlugsPath = path.join(ROOT, 'src/lib/prompt-engineering/slugs.ts')
  const peSlugsContent = fs.readFileSync(peSlugsPath, 'utf-8')
  const contentKeyToUrlSlug = {}
  for (const line of peSlugsContent.split('\n')) {
    const m = line.match(/^\s+'([^']+)':\s+'([^']+)'/)
    if (m) contentKeyToUrlSlug[m[2]] = m[1] // contentKey → urlSlug
  }

  let peCount = 0
  for (const [articleKey, filePath] of Object.entries(slugToFile)) {
    if (!fs.existsSync(filePath)) continue
    const langMeta = extractMetaFromPeFile(filePath)
    const urlSlug = contentKeyToUrlSlug[articleKey] ?? articleKey
    for (const lang of LANGS) {
      if (!langMeta[lang]) continue
      const slug = lang === 'en' ? `/prompt-engineering/${urlSlug}` : `/prompt-engineering/${urlSlug}?lang=${lang}`
      addPage(slug, langMeta[lang])
      peCount++
    }
  }

  // Local LLMs articles
  const llmContentPath = path.join(ROOT, 'src/lib/local-llms/content.ts')
  const llmArticles = extractMetaFromLlmContent(llmContentPath)
  let llmCount = 0
  for (const [articleKey, langMap] of Object.entries(llmArticles)) {
    for (const lang of LANGS) {
      if (!langMap[lang]) continue
      const slug = lang === 'en' ? `/local-llms/${articleKey}` : `/local-llms/${articleKey}?lang=${lang}`
      addPage(slug, langMap[lang])
      llmCount++
    }
  }

  // Ensure output directory
  const outDir = path.dirname(OUTPUT_PATH)
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const registry = {
    generatedAt: new Date().toISOString(),
    pageCount: Object.keys(pages).length,
    pages,
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(registry, null, 2))
  console.log(`✓ SEO registry generated: ${peCount} PE + ${llmCount} LLM = ${Object.keys(pages).length} page entries → public/data/seo-registry.json`)
}

main()

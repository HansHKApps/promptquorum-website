import fs from 'fs'
import path from 'path'

const PROJECT_ROOT = process.cwd()
const CHANGELOG_PATH = path.join(PROJECT_ROOT, 'src/data/seo-changelog.json')
const OUTPUT_PATH = path.join(PROJECT_ROOT, 'public/data/seo-registry.json')
const LANGUAGES = ['en', 'de', 'fr', 'ja', 'zh']

interface ChangelogEntry {
  id: string
  slug: string
  date: string
  baseline?: {
    position?: number
    impressions?: number
    clicks?: number
    ctr?: number
    period?: string
  } | null
}

type PageData = {
  seoTitle: string | null
  seoTitleLength: number | null
  metaDescription: string | null
  metaDescriptionLength: number | null
  lastMetaUpdate: string | null
  changeCount: number
  baseline: ChangelogEntry['baseline']
}

type ArticleLike = { seoTitle?: string; metaDescription?: string }

async function main() {
  const { peContent } = await import('../src/lib/prompt-engineering/articles-barrel')
  const { llmContent } = await import('../src/lib/local-llms/content')

  const changelog: ChangelogEntry[] = JSON.parse(
    fs.existsSync(CHANGELOG_PATH) ? fs.readFileSync(CHANGELOG_PATH, 'utf-8') : '[]'
  )

  // Build per-slug tracking: last update date, change count, baseline
  const slugMap = new Map<string, { lastDate: string; count: number; baseline: ChangelogEntry['baseline'] }>()
  for (const entry of changelog) {
    const date = entry.date.split('T')[0]
    const existing = slugMap.get(entry.slug)
    if (existing) {
      existing.count++
      if (date > existing.lastDate) {
        existing.lastDate = date
        if (entry.baseline) existing.baseline = entry.baseline
      }
    } else {
      slugMap.set(entry.slug, { lastDate: date, count: 1, baseline: entry.baseline ?? null })
    }
  }

  const pages: Record<string, PageData> = {}

  function addPage(slug: string, article: ArticleLike) {
    const meta = slugMap.get(slug)
    pages[slug] = {
      seoTitle: article.seoTitle ?? null,
      seoTitleLength: article.seoTitle ? article.seoTitle.length : null,
      metaDescription: article.metaDescription ?? null,
      metaDescriptionLength: article.metaDescription ? article.metaDescription.length : null,
      lastMetaUpdate: meta?.lastDate ?? null,
      changeCount: meta?.count ?? 0,
      baseline: meta?.baseline ?? null,
    }
  }

  // Prompt Engineering articles
  for (const [key, langMap] of Object.entries(peContent)) {
    for (const lang of LANGUAGES) {
      const article = (langMap as Record<string, ArticleLike>)[lang]
      if (!article) continue
      const slug = lang === 'en' ? `/prompt-engineering/${key}` : `/prompt-engineering/${key}?lang=${lang}`
      addPage(slug, article)
    }
  }

  // Local LLMs articles
  for (const [key, langMap] of Object.entries(llmContent)) {
    for (const lang of LANGUAGES) {
      const article = (langMap as Record<string, ArticleLike>)[lang]
      if (!article) continue
      const slug = lang === 'en' ? `/local-llms/${key}` : `/local-llms/${key}?lang=${lang}`
      addPage(slug, article)
    }
  }

  // Ensure output directory exists
  const outDir = path.dirname(OUTPUT_PATH)
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const registry = {
    generatedAt: new Date().toISOString(),
    pageCount: Object.keys(pages).length,
    pages,
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(registry, null, 2))
  console.log(`✓ SEO registry generated: ${Object.keys(pages).length} page entries → public/data/seo-registry.json`)
}

main().catch(err => {
  console.error('❌ SEO registry generation failed:', err.message)
  process.exit(1)
})

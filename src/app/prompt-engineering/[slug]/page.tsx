import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PromptEngineeringPostClient } from '@/components/PromptEngineeringPostClient'
import { peContent, type PEArticle } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { themes } from '@/lib/prompt-engineering/themes'
import { LEARNING_PATHS, TRENDING_TERMS_2026 } from '@/lib/prompt-engineering/learningPaths'

// Acronyms that must stay fully uppercase in slug-to-title fallbacks
const SLUG_ACRONYMS: Record<string, string> = {
  llms: 'LLMs',
  llm: 'LLM',
  ai: 'AI',
  api: 'API',
  apis: 'APIs',
  gpu: 'GPU',
  cpu: 'CPU',
  vram: 'VRAM',
  ram: 'RAM',
  rag: 'RAG',
  lora: 'LoRA',
  vllm: 'vLLM',
}

// Look up the human-readable title for a slug from the themes data
function getTitleForSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => SLUG_ACRONYMS[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

// Validate and fix itemListSchema to ensure all ListItems have a 'name' property
function ensureItemListSchemaValid(schema: any): any {
  if (!schema || schema['@type'] !== 'ItemList' || !Array.isArray(schema.itemListElement)) {
    return schema
  }

  const fixed = { ...schema }
  fixed.itemListElement = schema.itemListElement.map((item: any) => {
    // If item has nested item.name but no top-level name, copy it up
    if (!item.name && item.item?.name) {
      return { ...item, name: item.item.name }
    }
    return item
  })

  return fixed
}

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  return Object.keys(PE_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const key = PE_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  // Article not written yet — still return basic metadata
  if (!peContent[key]) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Prompt Engineering hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  // Extract language from searchParams, default to 'en'
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as 'en' | 'de' | 'fr' | 'ja' | 'zh'

  const article = peContent[key][selectedLang] || peContent[key]['en']
  const canonicalUrl = `https://www.promptquorum.com/prompt-engineering/${slug}`
  const ogImageUrl = `https://www.promptquorum.com/api/og/${slug}?lang=${selectedLang}`

  // Use seoTitle if available for better SERP display, otherwise use article title
  const pageTitle = (article as PEArticle & { seoTitle?: string }).seoTitle ?? article.title
  // Use metaDescription for OG/Twitter when available, otherwise fall back to intro
  const metaDesc = (article as PEArticle & { metaDescription?: string }).metaDescription ?? article.intro

  return {
    title: `${pageTitle} | PromptQuorum`,
    description: metaDesc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'x-default': canonicalUrl,
        en: `${canonicalUrl}?lang=en`,
        de: `${canonicalUrl}?lang=de`,
        fr: `${canonicalUrl}?lang=fr`,
        ja: `${canonicalUrl}?lang=ja`,
        zh: `${canonicalUrl}?lang=zh`,
      },
    },
    openGraph: {
      title: article.title,
      description: metaDesc,
      url: canonicalUrl,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
      publishedTime: article.publishDate,
      modifiedTime: article.dateModified ?? article.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: article.title,
      description: metaDesc,
    },
  }
}

export default async function PromptEngineeringArticlePage({ params, searchParams }: PageProps) {
  const { slug } = await params
  const key = PE_SLUG_TO_KEY[slug]

  if (!key) notFound()

  // Article not written yet — show coming soon page
  if (!peContent[key]) {
    const title = getTitleForSlug(slug)
    return (
      <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-8">
            Coming Soon
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">{title}</h1>
          <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            This article is being written. Check back soon — or explore the other guides in the Prompt Engineering hub.
          </p>
          <Link
            href="/prompt-engineering"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            ← Back to Prompt Engineering
          </Link>
        </div>
      </div>
    )
  }

  // Extract language from searchParams for schema generation
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as 'en' | 'de' | 'fr' | 'ja' | 'zh'

  const article = peContent[key][selectedLang] || peContent[key]['en']
  const canonicalUrl = `https://www.promptquorum.com/prompt-engineering/${slug}`

  // Extract all 100 glossary terms for keywords if this is the glossary
  const glossaryKeywords = slug === 'prompt-engineering-glossary'
    ? Object.values(article.sections).flatMap((section) => {
        if (!section.rows) return []
        return section.rows.map((row) => row['Term'] || '')
      }).filter(Boolean)
    : []

  // Use article.schema if defined; otherwise fallback to generic Article schema
  const articleSchema = article.schema || {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.intro,
    datePublished: '2026-03-01',
    dateModified: article.publishDate || '2026-03-28',
    url: canonicalUrl,
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      url: 'https://www.promptquorum.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      url: 'https://www.promptquorum.com',
      logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
    },
    ...(glossaryKeywords.length > 0 && { keywords: glossaryKeywords }),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-intro', '.key-takeaways'],
    },
    isPartOf: {
      '@type': 'WebPage',
      name: 'Prompt Engineering Guide',
      url: 'https://www.promptquorum.com/prompt-engineering',
    },
    ...(slug === 'prompt-engineering-glossary' && {
      hasPart: [
        { '@type': 'WebPageElement', name: 'Core Prompting Concepts', cssSelector: '#core-prompting' },
        { '@type': 'WebPageElement', name: 'Agents & Orchestration', cssSelector: '#agents-orchestration' },
        { '@type': 'WebPageElement', name: 'Safety & Alignment', cssSelector: '#safety-alignment' },
        { '@type': 'WebPageElement', name: 'Evals & Testing', cssSelector: '#evals-testing' },
        { '@type': 'WebPageElement', name: 'Advanced Techniques', cssSelector: '#advanced-techniques' },
        { '@type': 'WebPageElement', name: 'Metrics & Production', cssSelector: '#metrics-production' },
      ],
    }),
  }

  // Breadcrumb translations
  const breadcrumbLabels: Record<string, Record<string, string>> = {
    en: { home: 'Home', hub: 'Prompt Engineering' },
    de: { home: 'Startseite', hub: 'Prompt Engineering' },
    fr: { home: 'Accueil', hub: 'Prompt Engineering' },
    ja: { home: 'ホーム', hub: 'プロンプトエンジニアリング' },
    zh: { home: '主页', hub: '提示词工程' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: breadcrumbLabels[selectedLang].home, item: 'https://www.promptquorum.com' },
      { '@type': 'ListItem', position: 2, name: breadcrumbLabels[selectedLang].hub, item: 'https://www.promptquorum.com/prompt-engineering' },
      { '@type': 'ListItem', position: 3, name: article.title, item: canonicalUrl },
    ],
  }

  // Generate DefinedTermSet schema for glossary
  const definedTermSetSchema = slug === 'prompt-engineering-glossary' ? {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: article.title,
    description: article.intro,
    url: canonicalUrl,
    definedTerm: Object.values(article.sections).flatMap((section) => {
      if (!section.rows) return []
      return section.rows.map((row) => ({
        '@type': 'DefinedTerm',
        name: row['Term'] || '',
        description: (row['What it means'] || '').replace(/\*\*/g, ''),
        url: `${canonicalUrl}#term-${(row['Term'] || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        inDefinedTermSet: canonicalUrl,
      }))
    }),
  } : null

  // Generate LearningResource schemas for each learning path
  const learningPathsSchema = slug === 'prompt-engineering-glossary'
    ? LEARNING_PATHS.map((path, i) => ({
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        '@id': `${canonicalUrl}#learning-path-${path.id}`,
        name: path.title,
        description: path.description,
        url: `${canonicalUrl}#learning-paths`,
        educationalLevel: path.level,
        learningResourceType: 'LearningPath',
        position: i + 1,
        hasPart: path.terms.map(term => ({
          '@type': 'DefinedTerm',
          name: term,
          url: `${canonicalUrl}#term-${term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
          inDefinedTermSet: canonicalUrl,
        })),
      }))
    : null

  // Generate ItemList schema for trending terms
  const trendingSchema = slug === 'prompt-engineering-glossary'
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Most Important Prompt Engineering Terms in 2026',
        description: 'Top 10 prompt engineering terms ranked by industry adoption in 2026',
        url: `${canonicalUrl}#trending-2026`,
        numberOfItems: TRENDING_TERMS_2026.length,
        itemListElement: TRENDING_TERMS_2026.map(({ rank, term, reason }) => ({
          '@type': 'ListItem',
          position: rank,
          name: term,
          item: {
            '@type': 'DefinedTerm',
            name: term,
            description: reason,
            url: `${canonicalUrl}#term-${term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
            inDefinedTermSet: canonicalUrl,
          },
        })),
      }
    : null

  const faqSectionData = Object.values(article.sections).find((s) => s.faqs && s.faqs.length > 0)
  const faqSchema = faqSectionData
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqSectionData.faqs!.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }
    : null

  const howToSectionData = article.sections['howToStart']
  // Use explicit article.howToSchema if defined (has named steps); otherwise auto-generate from numberedItems
  const howToSchema = article.howToSchema
    ? null
    : howToSectionData?.numberedItems
      ? {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: howToSectionData.title ?? article.title,
          description: article.intro,
          step: howToSectionData.numberedItems.map((step, i) => {
            const cleanText = step.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').replace(/\[([^\]]+)\]/g, '$1').trim()
            const colonIdx = cleanText.indexOf(':')
            const stepName = colonIdx > 0 && colonIdx < 80 ? cleanText.slice(0, colonIdx).trim() : undefined
            return {
              '@type': 'HowToStep',
              position: i + 1,
              ...(stepName && { name: stepName }),
              text: cleanText,
            }
          }),
        }
      : null

  // LearningResource schema for educational articles
  const enArticle = peContent[key]['en']
  const educationalLevel = (article as PEArticle & { educationalLevel?: string }).educationalLevel
    ?? (enArticle as PEArticle & { educationalLevel?: string })?.educationalLevel

  const learningResourceSchema = educationalLevel ? {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: article.title,
    description: article.intro,
    url: canonicalUrl,
    inLanguage: selectedLang,
    educationalLevel,
    learningResourceType: 'Article',
    ...(Array.isArray((article.schema as any)?.teaches) && { teaches: (article.schema as any).teaches }),
    ...(Array.isArray((article.schema as any)?.assesses) && { assesses: (article.schema as any).assesses }),
    datePublished: article.publishDate,
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: {
      '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com',
      logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
    },
  } : null

  // DefinedTerm schema for concept-definition articles
  const primaryTerm = (article as PEArticle & { primaryTerm?: string }).primaryTerm
    ?? (enArticle as PEArticle & { primaryTerm?: string })?.primaryTerm

  const definedTermSchema = primaryTerm ? {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: primaryTerm,
    description: article.intro,
    url: canonicalUrl,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'PromptQuorum Prompt Engineering Glossary',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-engineering-glossary',
    },
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {definedTermSetSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }} />}
      {learningPathsSchema?.map((s, i) => <script key={`lp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      {trendingSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trendingSchema) }} />}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
      {article.supplementalSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.supplementalSchema) }} />}
      {!faqSchema && article.faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.faqSchema) }} />}
      {article.tableSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.tableSchema) }} />}
      {article.recipesHowToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.recipesHowToSchema) }} />}
      {article.softwareSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.softwareSchema) }} />}
      {article.howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.howToSchema) }} />}
      {article.itemListSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ensureItemListSchemaValid(article.itemListSchema)) }} />}
      {learningResourceSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceSchema) }} />}
      {definedTermSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />}
      <PromptEngineeringPostClient slug={slug} initialLang={selectedLang} />
    </>
  )
}

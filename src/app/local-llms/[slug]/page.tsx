import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LocalLLMsPostClient } from '@/components/LocalLLMsPostClient'
import { llmContent } from '@/lib/local-llms/content'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { llmThemes } from '@/lib/local-llms/themes'

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
  return Object.keys(LLM_SLUG_TO_KEY).map((slug) => ({ slug }))
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const key = LLM_SLUG_TO_KEY[slug]
  if (!key) return notFound()

  // Article not written yet
  if (!llmContent[key]) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Local LLMs hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  // Type B stub: content entry exists but EN sections are empty
  const enContent = llmContent[key]?.['en']
  if (!enContent || Object.keys(enContent.sections ?? {}).length === 0) {
    return {
      title: `${getTitleForSlug(slug)} — Coming Soon | PromptQuorum`,
      description: 'This article is coming soon. Explore our Local LLMs hub in the meantime.',
      robots: { index: false, follow: true },
    }
  }

  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as 'en' | 'de' | 'fr' | 'ja' | 'zh'

  const article = llmContent[key][selectedLang] ?? llmContent[key]['en']
  if (!article) return notFound()
  const canonicalUrl = `https://www.promptquorum.com/local-llms/${slug}`
  const ogImageUrl = `https://www.promptquorum.com/api/og/${slug}?lang=${selectedLang}`

  // Use seoTitle if available for better SERP display, otherwise use article title
  const pageTitle = article.seoTitle ?? article.title
  // Use metaDescription for OG/Twitter when available, otherwise fall back to intro
  const metaDesc = (article as any).metaDescription ?? article.intro

  return {
    title: `${pageTitle} | PromptQuorum`,
    description: metaDesc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'x-default': canonicalUrl,
        en:  `${canonicalUrl}?lang=en`,
        de:  `${canonicalUrl}?lang=de`,
        fr:  `${canonicalUrl}?lang=fr`,
        ja:  `${canonicalUrl}?lang=ja`,
        zh:  `${canonicalUrl}?lang=zh`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: metaDesc,
      url: canonicalUrl,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: article.title }],
      publishedTime: article.publishDate,
      modifiedTime: article.dateModified ?? article.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: pageTitle,
      description: metaDesc,
    },
  }
}

export default async function LocalLLMsArticlePage({ params, searchParams }: PageProps) {
  const { slug } = await params
  const key = LLM_SLUG_TO_KEY[slug]

  if (!key) notFound()

  // Article not written yet — show coming soon page
  if (!llmContent[key]) {
    const title = getTitleForSlug(slug)
    return (
      <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-8">
            Coming Soon
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">{title}</h1>
          <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            This article is being written. Check back soon — or explore the other guides in the Local LLMs hub.
          </p>
          <Link
            href="/local-llms"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            ← Back to Local LLMs
          </Link>
        </div>
      </div>
    )
  }

  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as 'en' | 'de' | 'fr' | 'ja' | 'zh'

  const article = (llmContent[key][selectedLang] ?? llmContent[key]['en'])!
  const canonicalUrl = `https://www.promptquorum.com/local-llms/${slug}`

  // Map educationalLevel → TechArticle proficiencyLevel
  const llmEdLevel = (article as any).educationalLevel ?? (llmContent[key]['en'] as any)?.educationalLevel
  const llmLevelMap: Record<string, string> = { Beginner: 'Beginner', Intermediate: 'Intermediate', Advanced: 'Expert', Technical: 'Expert' }
  const llmProficiencyLevel = llmEdLevel ? (llmLevelMap[llmEdLevel] ?? llmEdLevel) : undefined
  const llmAboutTopics = ((article as any).aboutTopics ?? (llmContent[key]['en'] as any)?.aboutTopics) as string[] | undefined
  const llmHowToName = ((article as any).howToName ?? (llmContent[key]['en'] as any)?.howToName) as string | undefined

  // Use article.schema if defined; otherwise fallback to generic TechArticle schema
  const articleSchema = (article as any).schema || {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.intro,
    datePublished: article.publishDate,
    dateModified: (article as any).dateModified ?? article.publishDate,
    url: canonicalUrl,
    ...(llmProficiencyLevel && { proficiencyLevel: llmProficiencyLevel }),
    ...(llmAboutTopics?.length && { about: llmAboutTopics.map((t: string) => ({ '@type': 'Thing', name: t })) }),
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
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-intro', '.key-takeaways'],
    },
    isPartOf: {
      '@type': 'WebPage',
      name: 'Local LLMs Guide',
      url: 'https://www.promptquorum.com/local-llms',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.promptquorum.com' },
      { '@type': 'ListItem', position: 2, name: 'Local LLMs', item: 'https://www.promptquorum.com/local-llms' },
      { '@type': 'ListItem', position: 3, name: article.title, item: canonicalUrl },
    ],
  }

  // Auto-generate FAQPage schema from sections with faqs
  const faqEntries = Object.values(article.sections).flatMap(s => s.faqs ?? [])
  const faqSchema = article.faqSchema ?? (faqEntries.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null)

  // Auto-generate HowTo schema from first numberedItems section
  const howToSection = Object.values(article.sections).find(s => s.numberedItems && s.numberedItems.length > 0)
  const howToSchema = article.howToSchema ?? (howToSection ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: llmHowToName ?? article.title,
    description: article.intro,
    step: howToSection.numberedItems!.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    })),
  } : null)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
      {article.supplementalSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.supplementalSchema) }} />}
      {article.tableSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.tableSchema) }} />}
      {article.itemListSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ensureItemListSchemaValid(article.itemListSchema)) }} />}
      <LocalLLMsPostClient slug={slug} initialLang={selectedLang} />
    </>
  )
}

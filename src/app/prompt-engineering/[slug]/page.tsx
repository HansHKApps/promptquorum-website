import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PromptEngineeringPostClient } from '@/components/PromptEngineeringPostClient'
import { peContent, type PEArticle } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { themes } from '@/lib/prompt-engineering/themes'

// Look up the human-readable title for a slug from the themes data
function getTitleForSlug(slug: string): string {
  for (const theme of themes) {
    const keys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
    if (keys.includes(slug)) {
      // Title is stored in PromptEngineeringHub ARTICLE_TITLES — use slug as fallback
      return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    }
  }
  return slug
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

  return {
    title: `${article.title} | PromptQuorum`,
    description: (article as PEArticle & { metaDescription?: string }).metaDescription ?? article.intro,
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
      description: article.intro,
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
      description: article.intro,
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
        { '@type': 'WebPageElement', name: 'Core Prompting Concepts', cssSelector: '#core-concepts' },
        { '@type': 'WebPageElement', name: 'Agents & Orchestration', cssSelector: '#agents-orchestration' },
        { '@type': 'WebPageElement', name: 'Safety & Alignment', cssSelector: '#safety-alignment' },
        { '@type': 'WebPageElement', name: 'Evaluation & Testing', cssSelector: '#evaluation-testing' },
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
        description: row['What it means'] || '',
        inDefinedTermSet: canonicalUrl,
      }))
    }),
  } : null

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
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
      {article.supplementalSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.supplementalSchema) }} />}
      {article.faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.faqSchema) }} />}
      {article.tableSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.tableSchema) }} />}
      {article.recipesHowToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.recipesHowToSchema) }} />}
      {article.softwareSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.softwareSchema) }} />}
      {article.howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.howToSchema) }} />}
      {article.itemListSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.itemListSchema) }} />}
      {learningResourceSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceSchema) }} />}
      {definedTermSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />}
      <PromptEngineeringPostClient slug={slug} initialLang={selectedLang} />
    </>
  )
}

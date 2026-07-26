import { llmContent } from '@/lib/local-llms/content'
import { toOutputLocale } from '@/lib/i18n/constants'
import { getLocalLLMGeoEntities, type Language } from '@/lib/geo-schema'
import { buildImageObject } from '@/lib/imageObjectSchema'

// Validate and fix itemListSchema to ensure all ListItems have a 'name' property
function ensureItemListSchemaValid(schema: any): any {
  if (!schema || schema['@type'] !== 'ItemList' || !Array.isArray(schema.itemListElement)) {
    return schema
  }
  const fixed = { ...schema }
  fixed.itemListElement = schema.itemListElement.map((item: any) => {
    if (!item.name && item.item?.name) {
      return { ...item, name: item.item.name }
    }
    return item
  })
  return fixed
}

type LLMLang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

// Merged from EN's original inline map (en/de/fr/ja/zh) plus each non-EN
// locale's own hand-rolled BreadcrumbList (es/pt/ar/ko) — those 4 already had
// correct native-language labels that EN's map never carried, since EN's map
// only ever needed to cover the languages EN itself falls back through.
const BREADCRUMB_LABELS: Record<string, { home: string; hub: string }> = {
  en: { home: 'Home', hub: 'Local LLMs' },
  de: { home: 'Startseite', hub: 'Lokale LLMs' },
  fr: { home: 'Accueil', hub: 'LLMs locaux' },
  ja: { home: 'ホーム', hub: 'ローカルLLM' },
  zh: { home: '首页', hub: '本地LLM' },
  es: { home: 'Inicio', hub: 'LLMs Locales' },
  pt: { home: 'Início', hub: 'LLMs locais' },
  ar: { home: 'الرئيسية', hub: 'LLMs المحلية' },
  ko: { home: '홈', hub: '로컬 LLM' },
}

/**
 * Builds every JSON-LD schema block for a local-llms article, for any locale.
 * Shared by EN and all 8 non-EN locale routes so they stay in sync — this
 * replaced a state where only the EN route emitted TechArticle/FAQPage/HowTo/
 * ImageObject schema and every non-EN locale copy emitted only a bare
 * BreadcrumbList (the 8 locale page.tsx files were stale forks that never
 * received schema logic added to EN later). Mirrors the pattern already
 * proven on this exact problem in prompt-engineering/jsonld.tsx.
 */
export function buildLocalLLMArticleSchemas(slug: string, key: string, lang: LLMLang) {
  const article = (llmContent[key][lang] ?? llmContent[key]['en'])!
  const enArticle = llmContent[key]['en']
  const langPrefix = lang === 'en' ? '' : `/${lang}`
  const canonicalUrl = `https://www.promptquorum.com${langPrefix}/local-llms/${slug}`
  const ogImageUrl = `https://www.promptquorum.com/api/og/${slug}?lang=${lang}`

  const llmEdLevel = (article as any).educationalLevel ?? (enArticle as any)?.educationalLevel
  const llmLevelMap: Record<string, string> = { Beginner: 'Beginner', Intermediate: 'Intermediate', Advanced: 'Expert', Technical: 'Expert' }
  const llmProficiencyLevel = llmEdLevel ? (llmLevelMap[llmEdLevel] ?? llmEdLevel) : undefined
  const llmAboutTopics = ((article as any).aboutTopics ?? (enArticle as any)?.aboutTopics) as string[] | undefined
  // Locale-own field only — never fall back to enArticle.howToName. Falling back
  // cross-locale would emit the EN string as the HowTo schema `name` on a non-EN
  // page (a Zero-English-Rule violation in the schema layer). howToSection.title
  // and article.title below are the locale's own already-translated fields, so the
  // full fallback chain never surfaces English on a non-English page.
  const llmHowToName = (article as any).howToName as string | undefined

  // Use article.schema if defined; otherwise fallback to generic TechArticle schema
  const articleSchema: any = (article as any).schema || {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.intro,
    datePublished: article.publishDate,
    dateModified: (article as any).dateModified ?? ((article as any).lastFactChecked as string | undefined)?.substring(0, 10) ?? article.publishDate,
    inLanguage: toOutputLocale(lang),
    url: canonicalUrl,
    ...(llmProficiencyLevel && { proficiencyLevel: llmProficiencyLevel }),
    ...(llmAboutTopics?.length && { about: llmAboutTopics.map((t: string) => ({ '@type': 'Thing', name: t })) }),
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      sameAs: [
        'https://www.linkedin.com/in/hanskuepper/',
        'https://x.com/HansKuepperAPPs',
        'https://github.com/HansHKApps',
      ],
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

  // Ensure inLanguage is always set (covers pre-built article.schema with missing or EN block)
  if (!articleSchema.inLanguage) {
    articleSchema.inLanguage = toOutputLocale(lang)
  }

  // Inject GEO Schema Matrix entities
  const geoAbout = getLocalLLMGeoEntities(article.theme ?? '', lang as Language, slug)
  if (geoAbout.length > 0) {
    articleSchema.about = [...(Array.isArray(articleSchema.about) ? articleSchema.about : []), ...geoAbout]
  }

  // Collect section images for ImageObject JSON-LD attribution
  const sectionImageObjects = Object.values(article.sections ?? {})
    .filter((s): s is typeof s & { image: string } => !!(s as any).image)
    .map(s => buildImageObject((s as any).image, { caption: (s as any).imageCaption }))

  if (!articleSchema.image) {
    articleSchema.image = (article as any).heroImage
      ? `https://www.promptquorum.com${(article as any).heroImage}`
      : ogImageUrl
  }

  const labels = BREADCRUMB_LABELS[lang] ?? BREADCRUMB_LABELS.en
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: toOutputLocale(lang),
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: labels.home, item: 'https://www.promptquorum.com' },
      { '@type': 'ListItem', position: 2, name: labels.hub, item: `https://www.promptquorum.com${langPrefix}/local-llms` },
      { '@type': 'ListItem', position: 3, name: article.title ?? (article as any).seoTitle ?? slug, item: canonicalUrl },
    ],
  }

  // Auto-generate FAQPage schema from sections with faqs, plus quickAnswerTop if present
  // Only collect FAQ entries if there's no explicit faqSchema (single source of truth)
  const faqEntries = !article.faqSchema ? Object.values(article.sections).flatMap(s => s.faqs ?? []) : []
  const quickAnswerTopEntry = !article.faqSchema ? (article as any).quickAnswerTop?.[lang] : undefined
  const allFaqEntries = [
    ...(quickAnswerTopEntry ? [{ q: quickAnswerTopEntry.question, a: quickAnswerTopEntry.answer }] : []),
    ...faqEntries,
  ]
  const faqSchema = article.faqSchema ?? (allFaqEntries.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqEntries.map(f => ({
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
    name: llmHowToName ?? howToSection.title ?? article.title,
    description: article.intro,
    step: howToSection.numberedItems!.map((step, i) => {
      const rawText = typeof step === 'string' ? step : `${step.title}: ${step.whyItMatters}`
      const cleanText = rawText.replace(/\*\*/g, '')
      const colonIdx = cleanText.indexOf(':')
      const name = typeof step !== 'string'
        ? step.title
        : colonIdx > 0 && colonIdx < 80
          ? cleanText.slice(0, colonIdx).trim()
          : cleanText.slice(0, 80).trim()
      return {
        '@type': 'HowToStep',
        position: i + 1,
        name,
        text: cleanText,
      }
    }),
  } : null)

  return {
    article,
    articleSchema,
    breadcrumbSchema,
    faqSchema,
    howToSchema,
    sectionImageObjects,
    ensureItemListSchemaValid,
  }
}

/** Renders all <script type="application/ld+json"> tags for a local-llms article, any locale. */
export function LocalLLMArticleJsonLd({ slug, articleKey, lang }: { slug: string; articleKey: string; lang: LLMLang }) {
  const {
    article, articleSchema, breadcrumbSchema, faqSchema, howToSchema,
    sectionImageObjects, ensureItemListSchemaValid: fixItemList,
  } = buildLocalLLMArticleSchemas(slug, articleKey, lang)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
      {(article as any).supplementalSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify((article as any).supplementalSchema) }} />}
      {(article as any).tableSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify((article as any).tableSchema) }} />}
      {(article as any).itemListSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fixItemList((article as any).itemListSchema)) }} />}
      {sectionImageObjects.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': sectionImageObjects }) }} />
      )}
    </>
  )
}

import { enterpriseAiContent } from '@/lib/enterprise-ai/articles-barrel'
import { toOutputLocale } from '@/lib/i18n/constants'

type EALang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

const BREADCRUMB_LABELS: Record<string, { home: string; hub: string }> = {
  en: { home: 'Home', hub: 'Enterprise AI' },
  de: { home: 'Startseite', hub: 'Enterprise AI' },
  fr: { home: 'Accueil', hub: 'Enterprise AI' },
  ja: { home: 'ホーム', hub: 'エンタープライズAI' },
  zh: { home: '首页', hub: '企业AI' },
  es: { home: 'Inicio', hub: 'IA Empresarial' },
  pt: { home: 'Início', hub: 'IA Empresarial' },
  ar: { home: 'الرئيسية', hub: 'الذكاء الاصطناعي للمؤسسات' },
  ko: { home: '홈', hub: '엔터프라이즈 AI' },
}

/**
 * Builds every JSON-LD schema block for an enterprise-ai article, for any locale.
 * Mirrors src/lib/local-llms/jsonld.tsx's buildLocalLLMArticleSchemas — auto-generates
 * TechArticle, BreadcrumbList, FAQPage (from section.faqs[] + quickAnswerTop), and HowTo
 * (from the first section with numberedItems[]). Article data can override via
 * article.schema / article.faqSchema / article.howToSchema.
 */
export function buildEnterpriseAiArticleSchemas(slug: string, key: string, lang: EALang) {
  const article = (enterpriseAiContent[key][lang] ?? enterpriseAiContent[key]['en'])!
  const langPrefix = lang === 'en' ? '' : `/${lang}`
  const canonicalUrl = `https://www.promptquorum.com${langPrefix}/enterprise-ai/${slug}`
  const ogImageUrl = `https://www.promptquorum.com/api/og/${slug}?lang=${lang}`

  const articleSchema: any = (article as any).schema || {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.intro,
    datePublished: article.publishDate,
    dateModified: article.dateModified ?? article.publishDate,
    inLanguage: toOutputLocale(lang),
    url: canonicalUrl,
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      sameAs: 'https://www.linkedin.com/in/hanskuepper/',
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
      name: 'Enterprise AI Guide',
      url: 'https://www.promptquorum.com/enterprise-ai',
    },
  }
  if (!articleSchema.inLanguage) articleSchema.inLanguage = toOutputLocale(lang)
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
      { '@type': 'ListItem', position: 2, name: labels.hub, item: `https://www.promptquorum.com${langPrefix}/enterprise-ai` },
      { '@type': 'ListItem', position: 3, name: article.title ?? (article as any).seoTitle ?? slug, item: canonicalUrl },
    ],
  }

  const faqEntries = !article.faqSchema ? Object.values(article.sections).flatMap((s: any) => s.faqs ?? []) : []
  const quickAnswerTopEntry = !article.faqSchema ? (article as any).quickAnswerTop?.[lang] : undefined
  const allFaqEntries = [
    ...(quickAnswerTopEntry ? [{ q: quickAnswerTopEntry.question, a: quickAnswerTopEntry.answer }] : []),
    ...faqEntries,
  ]
  const faqSchema = article.faqSchema ?? (allFaqEntries.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqEntries.map((f: any) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null)

  const howToSection = Object.values(article.sections).find((s: any) => s.numberedItems && s.numberedItems.length > 0) as any
  const howToSchema = article.howToSchema ?? (howToSection ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToSection.title ?? article.title,
    description: article.intro,
    step: howToSection.numberedItems.map((step: any, i: number) => {
      const rawText = typeof step === 'string' ? step : `${step.title}: ${step.whyItMatters}`
      const cleanText = rawText.replace(/\*\*/g, '')
      const colonIdx = cleanText.indexOf(':')
      const name = typeof step !== 'string'
        ? step.title
        : colonIdx > 0 && colonIdx < 80
          ? cleanText.slice(0, colonIdx).trim()
          : cleanText.slice(0, 80).trim()
      return { '@type': 'HowToStep', position: i + 1, name, text: cleanText }
    }),
  } : null)

  return { article, articleSchema, breadcrumbSchema, faqSchema, howToSchema }
}

/** Renders all <script type="application/ld+json"> tags for an enterprise-ai article, any locale. */
export function EnterpriseAiArticleJsonLd({ slug, articleKey, lang }: { slug: string; articleKey: string; lang: EALang }) {
  const { articleSchema, breadcrumbSchema, faqSchema, howToSchema, article } = buildEnterpriseAiArticleSchemas(slug, articleKey, lang)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
      {(article as any).itemListSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify((article as any).itemListSchema) }} />}
    </>
  )
}

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

  // Type B stub: content entry exists but EN sections are empty
  const enContent = peContent[key]?.['en']
  if (!enContent || Object.keys(enContent.sections ?? {}).length === 0) {
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

  // Glossary-specific overrides for maximum CTR + keyword density
  const isGlossary = slug === 'prompt-engineering-glossary'
  const finalDesc = isGlossary
    ? 'Essential glossary: 100 prompt engineering terms with definitions, real-world examples, and 400+ citations. Core concepts, agents, safety, RAG, evaluation. Free beta.'
    : metaDesc
  const finalOgImage = isGlossary
    ? 'https://www.promptquorum.com/og-glossary-mindmap-2026.png'
    : ogImageUrl
  const finalTitle = isGlossary
    ? 'Prompt Engineering Glossary: 100 Terms Defined for 2026'
    : pageTitle

  return {
    title: `${finalTitle} | PromptQuorum`,
    description: finalDesc,
    ...(isGlossary && {
      keywords: ['prompt engineering glossary', 'AI terms', 'LLM glossary', 'Chain-of-Thought', 'RAG definition', 'prompt injection', 'function calling', 'few-shot prompting', 'temperature AI', 'context window'],
    }),
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
      title: isGlossary ? 'Prompt Engineering Glossary: 100 Essential Terms (2026)' : finalTitle,
      description: finalDesc,
      url: canonicalUrl,
      type: 'article',
      siteName: 'PromptQuorum',
      images: [{ url: finalOgImage, width: 1200, height: 630, alt: isGlossary ? 'Prompt Engineering Glossary Mind Map 2026 — 100 Essential Terms' : article.title }],
      publishedTime: article.publishDate,
      modifiedTime: article.dateModified ?? article.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@promptquorum',
      title: isGlossary ? 'Prompt Engineering Glossary (100 Terms)' : finalTitle,
      description: isGlossary ? 'Chain-of-Thought • RAG • Few-shot • Agents • Temperature • Token Limits. 100 searchable, cited, expert definitions.' : finalDesc,
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

  // Map educationalLevel → TechArticle proficiencyLevel (computed here for articleSchema; also used below for learningResourceSchema)
  const peEnArticle = peContent[key]['en']
  const peEdLevel = (article as PEArticle & { educationalLevel?: string }).educationalLevel
    ?? (peEnArticle as PEArticle & { educationalLevel?: string })?.educationalLevel
  const peLevelMap: Record<string, string> = { Beginner: 'Beginner', Intermediate: 'Intermediate', Advanced: 'Expert', Technical: 'Expert' }
  const peProficiencyLevel = peEdLevel ? (peLevelMap[peEdLevel] ?? peEdLevel) : undefined
  const peAboutTopics = ((article as any).aboutTopics ?? (peEnArticle as any)?.aboutTopics) as string[] | undefined
  const peHowToName = ((article as any).howToName ?? (peEnArticle as any)?.howToName) as string | undefined

  // Use article.schema if defined; otherwise fallback to generic TechArticle schema
  const articleSchema = article.schema || {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.intro,
    datePublished: article.publishDate || '2026-03-01',
    dateModified: (article as any).dateModified ?? article.publishDate ?? '2026-03-28',
    url: canonicalUrl,
    ...(peProficiencyLevel && { proficiencyLevel: peProficiencyLevel }),
    ...(peAboutTopics?.length && { about: peAboutTopics.map((t: string) => ({ '@type': 'Thing', name: t })) }),
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

  // Generate enhanced @graph schema for glossary (DefinedTermSet + FAQPage + SearchAction)
  const definedTermSetSchema = slug === 'prompt-engineering-glossary' ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'DefinedTermSet',
        '@id': `${canonicalUrl}#termset`,
        name: 'Prompt Engineering Glossary 2026',
        description: 'As of April 2026: 100 essential terms for prompt engineering, AI agents, safety, evaluation, and production workflows — with definitions, examples, and citations.',
        url: canonicalUrl,
        inLanguage: 'en',
        datePublished: '2026-03-28',
        dateModified: '2026-04-05',
        author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        definedTerm: [
          ...Object.values(article.sections).flatMap((section) => {
            if (!section.rows) return []
            return section.rows.map((row) => {
              const termSlug = (row['Term'] || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
              return {
                '@type': 'DefinedTerm',
                name: row['Term'] || '',
                description: (row['What it means'] || '').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
                url: `${canonicalUrl}#term-${termSlug}`,
                inDefinedTermSet: { '@id': `${canonicalUrl}#termset` },
              }
            })
          }),
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is the difference between zero-shot and few-shot prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Zero-shot asks the model without examples. Few-shot provides 2–5 examples of desired input-output pairs. Few-shot produces better results for specific formats or specialized tasks; zero-shot is faster and cheaper for general tasks.' } },
          { '@type': 'Question', name: 'What is Chain-of-Thought prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Chain-of-Thought (CoT) asks the model to explain reasoning step-by-step before answering. It significantly improves accuracy on multi-step problems like math and logic. Trade-off: uses 2–5× more tokens than a direct answer.' } },
          { '@type': 'Question', name: 'What is RAG (Retrieval-Augmented Generation)?', acceptedAnswer: { '@type': 'Answer', text: 'RAG retrieves relevant documents from a knowledge base and inserts them into the prompt, allowing models to ground answers in current, authoritative data rather than training data alone. Use RAG for private documents, real-time data, or specialized knowledge.' } },
          { '@type': 'Question', name: 'What is prompt injection and how do I prevent it?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt injection is an attack where user input overrides system instructions. Prevent it by: (1) validating inputs strictly, (2) separating user data from instructions with delimiters, (3) using guardrails to filter malicious patterns, (4) never exposing system prompts to user-accessible fields.' } },
          { '@type': 'Question', name: 'How does temperature affect AI output quality?', acceptedAnswer: { '@type': 'Answer', text: 'Temperature (0.0–2.0) controls randomness. Low values (0.0–0.3) produce deterministic, factual outputs ideal for coding or extraction. High values (0.7–1.0) produce creative, varied outputs for brainstorming. Use low temp for production; high temp for ideation.' } },
          { '@type': 'Question', name: 'What is the difference between RAG and fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'RAG retrieves current external data at inference time — fast, cheap, no retraining. Fine-tuning retrains model weights on your data — expensive, requires labeled data, but better for task-specific behavior. RAG + prompt engineering covers 90% of use cases without fine-tuning costs.' } },
          { '@type': 'Question', name: 'What is function calling in LLMs?', acceptedAnswer: { '@type': 'Answer', text: 'Function calling lets an LLM request execution of external code or APIs (e.g., database queries, web search, math) during inference. The model specifies the function name and arguments; your application executes it and returns the result. This is the foundation of agentic behavior.' } },
          { '@type': 'Question', name: 'How do I reduce AI hallucinations?', acceptedAnswer: { '@type': 'Answer', text: 'Reduce hallucinations by: (1) using RAG to ground answers in real data, (2) lowering temperature to 0.0–0.3, (3) asking the model to cite sources, (4) using structured output with JSON mode, (5) adding verification steps with function calling, (6) running the same prompt across multiple models.' } },
          { '@type': 'Question', name: 'What is the difference between Chain-of-Thought and Tree-of-Thought?', acceptedAnswer: { '@type': 'Answer', text: 'Chain-of-Thought (CoT): single linear reasoning path, step-by-step. Tree-of-Thought (ToT): explores multiple reasoning branches and evaluates paths before selecting the best answer. ToT is more thorough but costs 2–3× more tokens than CoT.' } },
          { '@type': 'Question', name: 'What is a context window and how does it affect prompting?', acceptedAnswer: { '@type': 'Answer', text: 'A context window is the maximum number of tokens an LLM can process in one request (e.g., 128K or 200K tokens). Larger windows let you include full documents without truncation. Context engineering is the practice of strategically filling that window with the most relevant information.' } },
          { '@type': 'Question', name: 'What is the difference between system prompt and user prompt?', acceptedAnswer: { '@type': 'Answer', text: 'System prompt: persistent instructions that set the model\'s behavior, role, and output format for the entire conversation. User prompt: the specific task or question per turn. System sets "how to behave"; user specifies "what to do now". Both must be optimized for production use.' } },
          { '@type': 'Question', name: 'What is agentic behavior in AI?', acceptedAnswer: { '@type': 'Answer', text: 'Agentic behavior means the model autonomously loops through: decide → call tool → observe result → decide again, until a goal is achieved. Agents combine planning (decompose task), execution (tools), memory (state), and termination conditions. All major frontier models support this in 2026.' } },
          { '@type': 'Question', name: 'What is prompt engineering vs context engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering: crafting instructions, examples, and constraints in the prompt. Context engineering: deciding what goes into the entire context window — system prompt, memory, retrieved documents, tool outputs, conversation history. Context engineering is the more comprehensive 2026 practice.' } },
          { '@type': 'Question', name: 'What is RLHF?', acceptedAnswer: { '@type': 'Answer', text: 'RLHF (Reinforcement Learning from Human Feedback) trains AI models by having humans rank model outputs, then using those rankings to adjust model weights toward preferred behavior. It is used by OpenAI (GPT), Anthropic (Claude), and Google (Gemini) to align models with human values.' } },
          { '@type': 'Question', name: 'How should I choose between frontier AI models for my use case?', acceptedAnswer: { '@type': 'Answer', text: 'Test your actual workload across models. GPT-5.x: general reasoning, code. Claude 4.6 Sonnet: long-context analysis, safety. Gemini 3 Pro: multimodal tasks. DeepSeek V4: 70% cheaper. Llama 4: free, runs locally. Grok 4.1: real-time web access. Use PromptQuorum to dispatch one prompt to all models and compare.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
          { '@type': 'ListItem', position: 2, name: 'Prompt Engineering', item: 'https://www.promptquorum.com/prompt-engineering' },
          { '@type': 'ListItem', position: 3, name: 'Glossary: 100 Key Terms', item: canonicalUrl },
        ],
      },
      {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${canonicalUrl}?search={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    ],
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
          name: peHowToName ?? howToSectionData.title ?? article.title,
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

  // LearningResource schema for educational articles (reuse peEnArticle + peEdLevel computed above)
  const enArticle = peEnArticle
  const educationalLevel = peEdLevel

  const audience = (article as PEArticle & { audience?: string }).audience
    ?? (peEnArticle as PEArticle & { audience?: string })?.audience

  const learningResourceSchema = educationalLevel ? {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: article.title,
    description: article.intro,
    url: canonicalUrl,
    inLanguage: selectedLang,
    educationalLevel,
    ...(audience && { audience: { '@type': 'Audience', audienceType: audience } }),
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

  // PresentationDigitalDocument schema for articles with Gamma presentations
  const presentationSchema = article.gammaEmbedUrl ? {
    '@context': 'https://schema.org',
    '@type': 'PresentationDigitalDocument',
    name: article.title,
    description: article.intro,
    url: canonicalUrl,
    author: { '@type': 'Organization', name: 'PromptQuorum' },
    inLanguage: 'en',
    encodingFormat: 'text/html',
    isPartOf: {
      '@type': 'WebPage',
      url: canonicalUrl,
    },
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {presentationSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(presentationSchema) }} />}
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

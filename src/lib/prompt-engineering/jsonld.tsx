import { peContent, type PEArticle } from '@/lib/prompt-engineering/content'
import { LEARNING_PATHS, TRENDING_TERMS_2026 } from '@/lib/prompt-engineering/learningPaths'
import { toOutputLocale } from '@/lib/i18n/constants'
import { getPEGeoEntities, type Language } from '@/lib/geo-schema'

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

type PELang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

const BREADCRUMB_LABELS: Record<string, { home: string; hub: string }> = {
  en: { home: 'Home', hub: 'Prompt Engineering' },
  de: { home: 'Startseite', hub: 'Prompt Engineering' },
  fr: { home: 'Accueil', hub: 'Prompt Engineering' },
  ja: { home: 'ホーム', hub: 'プロンプトエンジニアリング' },
  zh: { home: '主页', hub: '提示词工程' },
  pt: { home: 'Início', hub: 'Prompt Engineering' },
  es: { home: 'Inicio', hub: 'Prompt Engineering' },
  ar: { home: 'الرئيسية', hub: 'Prompt Engineering' },
  ko: { home: '홈', hub: 'Prompt Engineering' },
}

/**
 * Builds every JSON-LD schema block for a prompt-engineering article, for any locale.
 * Shared by EN and all 8 non-EN locale routes so they stay in sync — this replaced
 * a state where only the EN route emitted schema and every locale copy emitted none.
 */
export function buildPEArticleSchemas(slug: string, key: string, lang: PELang) {
  const article = (peContent[key][lang] || peContent[key]['en'])!
  const peEnArticle = peContent[key]['en']
  const canonicalPath = `/prompt-engineering/${slug}`
  const langPrefix = lang === 'en' ? '' : `/${lang}`
  const canonicalUrl = `https://www.promptquorum.com${langPrefix}${canonicalPath}`

  const glossaryKeywords = slug === 'prompt-engineering-glossary'
    ? Object.values(article.sections).flatMap((section) => {
        if (!section.rows) return []
        return section.rows.map((row) => row['Term'] || '')
      }).filter(Boolean)
    : []

  const peEdLevel = (article as PEArticle & { educationalLevel?: string }).educationalLevel
    ?? (peEnArticle as PEArticle & { educationalLevel?: string })?.educationalLevel
  const peLevelMap: Record<string, string> = { Beginner: 'Beginner', Intermediate: 'Intermediate', Advanced: 'Expert', Technical: 'Expert' }
  const peProficiencyLevel = peEdLevel ? (peLevelMap[peEdLevel] ?? peEdLevel) : undefined
  const peAboutTopics = ((article as any).aboutTopics ?? (peEnArticle as any)?.aboutTopics) as string[] | undefined
  const peHowToName = ((article as any).howToName ?? (peEnArticle as any)?.howToName) as string | undefined

  const articleSchema: any = article.schema || {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.intro,
    datePublished: article.publishDate || '2026-03-01',
    dateModified: (article as any).dateModified ?? ((article as any).lastFactChecked as string | undefined)?.substring(0, 10) ?? article.publishDate,
    inLanguage: toOutputLocale(lang),
    url: canonicalUrl,
    ...(peProficiencyLevel && { proficiencyLevel: peProficiencyLevel }),
    ...(peAboutTopics?.length && { about: peAboutTopics.map((t: string) => ({ '@type': 'Thing', name: t })) }),
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      url: 'https://www.promptquorum.com/about',
      sameAs: [
        'https://www.linkedin.com/in/hanskuepper/',
        'https://x.com/HansKuepperAPPs',
        'https://github.com/HansHKApps',
        'https://bsky.app/profile/hhkbluesky.bsky.social',
      ],
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
      url: `https://www.promptquorum.com${langPrefix}/prompt-engineering`,
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

  if (!articleSchema.inLanguage) {
    articleSchema.inLanguage = toOutputLocale(lang)
  }

  const geoAbout = getPEGeoEntities(article.theme ?? '', lang as Language)
  if (geoAbout.length > 0) {
    articleSchema.about = [...(Array.isArray(articleSchema.about) ? articleSchema.about : []), ...geoAbout]
  }

  const toAbsImageUrl = (path: string) =>
    path.startsWith('http') ? path :
    path.startsWith('/') ? `https://www.promptquorum.com${path}` :
    `https://www.promptquorum.com/images/${path}`

  const sectionImageObjects = Object.values(article.sections)
    .filter((s): s is typeof s & { image: string } => !!(s as any).image)
    .map(s => ({
      '@type': 'ImageObject' as const,
      url: toAbsImageUrl((s as any).image),
      ...((s as any).imageCaption && { name: ((s as any).imageCaption as string).substring(0, 125), description: (s as any).imageCaption }),
      creator: { '@type': 'Person', name: 'Hans Kuepper' },
      copyrightHolder: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      license: 'https://www.promptquorum.com/image-license',
      acquireLicensePage: 'https://www.promptquorum.com/image-license',
      creditText: 'PromptQuorum',
      copyrightNotice: '© 2026 PromptQuorum. All rights reserved.',
    }))

  if (sectionImageObjects.length > 0 && !articleSchema.image) {
    articleSchema.image = sectionImageObjects[0].url
  }

  const bcLabel = BREADCRUMB_LABELS[lang] ?? BREADCRUMB_LABELS.en
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: toOutputLocale(lang),
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: bcLabel.home, item: 'https://www.promptquorum.com' },
      { '@type': 'ListItem', position: 2, name: bcLabel.hub, item: `https://www.promptquorum.com${langPrefix}/prompt-engineering` },
      { '@type': 'ListItem', position: 3, name: article.title, item: canonicalUrl },
    ],
  }

  const definedTermSetSchema = slug === 'prompt-engineering-glossary' ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'DefinedTermSet',
        '@id': `${canonicalUrl}#termset`,
        name: 'Prompt Engineering Glossary 2026',
        description: 'As of April 2026: 100 essential terms for prompt engineering, AI agents, safety, evaluation, and production workflows — with definitions, examples, and citations.',
        url: canonicalUrl,
        inLanguage: toOutputLocale(lang),
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
          { '@type': 'ListItem', position: 1, name: bcLabel.home, item: 'https://www.promptquorum.com' },
          { '@type': 'ListItem', position: 2, name: bcLabel.hub, item: `https://www.promptquorum.com${langPrefix}/prompt-engineering` },
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

  const faqSectionData = !article.faqSchema && slug !== 'prompt-engineering-glossary' && Object.values(article.sections).find((s) => s.faqs && s.faqs.length > 0)
  const faqSchema = faqSectionData
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqSectionData.faqs!.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }
    : null

  const howToSectionData = article.sections['howToStart']
  const howToSchema = article.howToSchema
    ? null
    : howToSectionData?.numberedItems
      ? {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: peHowToName ?? howToSectionData.title ?? article.title,
          description: article.intro,
          step: howToSectionData.numberedItems.map((step, i) => {
            const stepStr = typeof step === 'string' ? step : step.title
            const cleanText = stepStr.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').replace(/\[([^\]]+)\]/g, '$1').trim()
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

  const educationalLevel = peEdLevel
  const audience = (article as PEArticle & { audience?: string }).audience
    ?? (peEnArticle as PEArticle & { audience?: string })?.audience

  const learningResourceSchema = educationalLevel ? {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: article.title,
    description: article.intro,
    url: canonicalUrl,
    inLanguage: toOutputLocale(lang),
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

  const primaryTerm = (article as PEArticle & { primaryTerm?: string }).primaryTerm
    ?? (peEnArticle as PEArticle & { primaryTerm?: string })?.primaryTerm

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

  const presentationSchema = article.gammaEmbedUrl ? {
    '@context': 'https://schema.org',
    '@type': 'PresentationDigitalDocument',
    name: article.title,
    description: article.intro,
    url: canonicalUrl,
    author: { '@type': 'Organization', name: 'PromptQuorum' },
    inLanguage: toOutputLocale(lang),
    encodingFormat: 'text/html',
    isPartOf: { '@type': 'WebPage', url: canonicalUrl },
  } : null

  return {
    article,
    articleSchema,
    breadcrumbSchema,
    presentationSchema,
    definedTermSetSchema,
    learningPathsSchema,
    trendingSchema,
    faqSchema,
    howToSchema,
    learningResourceSchema,
    definedTermSchema,
    sectionImageObjects,
    ensureItemListSchemaValid,
  }
}

/** Renders all <script type="application/ld+json"> tags for a prompt-engineering article, any locale. */
export function PEArticleJsonLd({ slug, articleKey, lang }: { slug: string; articleKey: string; lang: PELang }) {
  const {
    article, articleSchema, breadcrumbSchema, presentationSchema, definedTermSetSchema,
    learningPathsSchema, trendingSchema, faqSchema, howToSchema, learningResourceSchema,
    definedTermSchema, sectionImageObjects, ensureItemListSchemaValid: fixItemList,
  } = buildPEArticleSchemas(slug, articleKey, lang)

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
      {article.itemListSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fixItemList(article.itemListSchema)) }} />}
      {learningResourceSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceSchema) }} />}
      {definedTermSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />}
      {sectionImageObjects.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': sectionImageObjects }) }} />
      )}
    </>
  )
}

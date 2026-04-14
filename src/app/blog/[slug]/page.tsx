import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogPostClient } from '@/components/BlogPostClient'
import { blogContent, type Language } from '@/lib/blog/blogContent'
import { SLUG_TO_POST_ID, type BlogSlug } from '@/lib/blogSlugs'

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return Object.keys(SLUG_TO_POST_ID).map((slug) => ({
    slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const postId = SLUG_TO_POST_ID[slug as BlogSlug]

  if (!postId || !blogContent[postId]) {
    return notFound()
  }

  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as Language

  const post = blogContent[postId][selectedLang] || blogContent[postId]['en']
  const canonicalUrl = `https://www.promptquorum.com/blog/${slug}`
  const ogImageUrl = post.heroImage || `https://www.promptquorum.com/api/og/blog/${slug}?lang=${selectedLang}`
  const pageTitle = (post as any).seoTitle ?? post.title
  const metaDesc = (post as any).metaDescription ?? post.intro

  return {
    title: pageTitle.length <= 43 ? `${pageTitle} | PromptQuorum Blog` : pageTitle,
    description: metaDesc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'x-default': canonicalUrl,
        'en': `${canonicalUrl}?lang=en`,
        'de': `${canonicalUrl}?lang=de`,
        'fr': `${canonicalUrl}?lang=fr`,
        'ja': `${canonicalUrl}?lang=ja`,
        'zh': `${canonicalUrl}?lang=zh`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: metaDesc,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.publishDate,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: metaDesc,
    },
  }
}

export default async function BlogPage({ params, searchParams }: PageProps) {
  const { slug } = await params
  const postId = SLUG_TO_POST_ID[slug as BlogSlug]

  if (!postId || !blogContent[postId]) {
    notFound()
  }

  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as Language

  const post = blogContent[postId][selectedLang] || blogContent[postId]['en']

  // JSON-LD: Article schema
  const publishDate = post.publishDate.replace('Published ', '').split(' ').slice(0, 3).join(' ')
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.intro,
    datePublished: publishDate,
    dateModified: publishDate,
    url: `https://www.promptquorum.com/blog/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      url: 'https://www.promptquorum.com/author/hans-kuepper',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      url: 'https://www.promptquorum.com',
    },
  }

  // JSON-LD: BlogPosting schema
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.intro,
    datePublished: post.publishDate.replace('Published ', '').split(' ')[0],
    author: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      url: 'https://www.promptquorum.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.promptquorum.com/logo.svg',
      },
    },
  }

  // JSON-LD: BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.promptquorum.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.promptquorum.com/#blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.promptquorum.com/blog/${slug}`,
      },
    ],
  }

  // JSON-LD: ScholarlyArticle/ResearchArticle schema (for AI systems)
  const scholarlyArticleSchema = {
    '@context': 'https://schema.org',
    '@type': (postId === 'promptImpact' || postId === 'promptToolsMarket2026') ? 'ResearchArticle' : 'ScholarlyArticle',
    headline: post.title,
    description: post.intro,
    articleBody: post.sections ? Object.values(post.sections).map((section: any) => section.content).join(' ') : '',
    image: 'https://www.promptquorum.com/logo.svg',
    datePublished: post.publishDate.replace('Published ', '').split(' ').slice(0, 3).join(' '),
    dateModified: post.publishDate.replace('Published ', '').split(' ').slice(0, 3).join(' '),
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      url: 'https://www.promptquorum.com/author/hans-kuepper',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum',
      url: 'https://www.promptquorum.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.promptquorum.com/logo.svg',
      },
    },
    ...(postId === 'promptImpact' && {
      keywords: [
        'prompt engineering',
        'prompt optimization',
        'Chain-of-Thought',
        'AI quality',
        'AI research',
        'multimodal prompting',
        'structured frameworks',
      ],
      citation: [
        {
          '@type': 'ScholarlyArticle',
          name: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
          url: 'https://arxiv.org/abs/2201.11903',
        },
      ],
      studySubject: 'Prompt Engineering Effectiveness and AI Output Quality Optimization',
      methodDescription: 'Analyzed 50,000+ prompt-response pairs across multiple AI models with statistical significance testing (p < 0.05)',
      studyLocation: 'Global (Multi-model analysis)',
      temporalCoverage: '2024/2026',
    }),
    ...(postId === 'promptToolsMarket2026' && {
      keywords: [
        'prompt optimization tools',
        'LLM prompt generation',
        'prompt management platform',
        'AI evaluation tools',
        'Braintrust',
        'LangSmith',
        'Promptfoo',
        'Langfuse',
        'DSPy',
        'PromptHub',
        'PromptLayer',
        'Vellum AI',
        'PromptQuorum',
      ],
      studySubject: 'AI Prompt Optimization and LLM Evaluation Tools Market 2026',
      temporalCoverage: '2025/2026',
    }),
  }

  // JSON-LD: ImageObject + ItemList for FrameworkWheel (if heroComponent is FrameworkWheel)
  let frameworkWheelSchemas: Record<string, unknown>[] = []
  if (post.heroComponent === 'FrameworkWheel') {
    const imageSchema = {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      name: '8 Prompt Engineering Frameworks Wheel',
      description: 'A wheel diagram showing 8 prompt engineering frameworks (CRAFT, CO-STAR, APE, RISEN, TRACE, RTF, SPECS, Single-Prompt) arranged around a central Prompt node.',
      url: `https://www.promptquorum.com/blog/${slug}#framework-wheel`,
    }

    const frameworksList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '8 Prompt Engineering Frameworks',
      description: 'A comprehensive list of the main prompt engineering frameworks and their uses.',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'CRAFT', url: 'https://www.promptquorum.com/frameworks/craft', description: 'Context, Role, Action, Format, Target. Best for marketing and creative content.' },
        { '@type': 'ListItem', position: 2, name: 'CO-STAR', url: 'https://www.promptquorum.com/frameworks/co-star', description: 'Context, Objective, Style, Tone, Audience, Response. Comprehensive structured approach.' },
        { '@type': 'ListItem', position: 3, name: 'APE', url: 'https://www.promptquorum.com/frameworks/ape', description: 'Action, Parameter, Example. Concise framework for specific tasks.' },
        { '@type': 'ListItem', position: 4, name: 'RISEN', url: 'https://www.promptquorum.com/frameworks/risen', description: 'Role, Intention, Scenario, Expectation, Notation. Best for role-playing and personas.' },
        { '@type': 'ListItem', position: 5, name: 'TRACE', url: 'https://www.promptquorum.com/frameworks/trace', description: 'Task, Request, Action, Context, Example. Step-by-step instruction framework.' },
        { '@type': 'ListItem', position: 6, name: 'RTF', url: 'https://www.promptquorum.com/frameworks/rtf', description: 'Role, Task, Format. Lightweight framework for rapid prompting.' },
        { '@type': 'ListItem', position: 7, name: 'SPECS', url: 'https://www.promptquorum.com/frameworks/specs', description: 'Setting, Problem, Expectation, Constraints, Success Criteria. Goal-oriented prompting.' },
        { '@type': 'ListItem', position: 8, name: 'Single-Prompt', url: 'https://www.promptquorum.com/frameworks/single-prompt-line', description: 'One-shot, unstructured prompting for simple requests.' },
      ],
    }

    frameworkWheelSchemas = [imageSchema, frameworksList]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {frameworkWheelSchemas.map((schema, i) => (
        <script
          key={`framework-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleSchema) }}
      />
      {post.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.faqSchema) }}
        />
      )}
      {post.howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.howToSchema) }}
        />
      )}
      {post.itemListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.itemListSchema) }}
        />
      )}
      <BlogPostClient post={post} slug={slug} initialLang={selectedLang} />
    </>
  )
}

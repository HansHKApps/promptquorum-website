import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogPostClient } from '@/components/BlogPostClient'
import { blogContent, type Language } from '@/lib/blog/blogContent'
import { SLUG_TO_POST_ID, type BlogSlug } from '@/lib/blogSlugs'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return Object.keys(SLUG_TO_POST_ID).map((slug) => ({
    slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const postId = SLUG_TO_POST_ID[slug as BlogSlug]

  if (!postId || !blogContent[postId]) {
    return notFound()
  }

  const post = blogContent[postId]['en'] // Use English for SEO
  const canonicalUrl = `https://www.promptquorum.com/blog/${slug}`

  return {
    title: `${post.title} | PromptQuorum Blog`,
    description: post.intro,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${canonicalUrl}?lang=en`,
        'de': `${canonicalUrl}?lang=de`,
        'fr': `${canonicalUrl}?lang=fr`,
        'ja': `${canonicalUrl}?lang=ja`,
        'zh': `${canonicalUrl}?lang=zh`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.intro,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.intro,
    },
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params
  const postId = SLUG_TO_POST_ID[slug as BlogSlug]

  if (!postId || !blogContent[postId]) {
    notFound()
  }

  const post = blogContent[postId]['en'] // Server reads English content

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
    '@type': postId === 'promptImpact' ? 'ResearchArticle' : 'ScholarlyArticle',
    headline: post.title,
    description: post.intro,
    articleBody: post.sections ? Object.values(post.sections).map((section: any) => section.content).join(' ') : '',
    image: 'https://www.promptquorum.com/logo.svg',
    datePublished: post.publishDate.replace('Published ', '').split(' ').slice(0, 3).join(' '),
    dateModified: post.publishDate.replace('Published ', '').split(' ').slice(0, 3).join(' '),
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      url: 'https://www.linkedin.com/in/hanskuepper/',
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
  }

  return (
    <>
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
      <BlogPostClient post={post} slug={slug} />
    </>
  )
}

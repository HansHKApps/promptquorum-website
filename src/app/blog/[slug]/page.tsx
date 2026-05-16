import type { Metadata } from 'next'
import {
  getArticleStaticParams,
  buildArticleMetadata,
  buildArticlePageElement,
} from '@/lib/blog/page-helpers'
import type { Language } from '@/lib/blog/blogContent'

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  return getArticleStaticParams()
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as Language

  return buildArticleMetadata(slug, selectedLang)
}

export default async function BlogPage({ params, searchParams }: PageProps) {
  const { slug } = await params
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as Language

  return buildArticlePageElement(slug, selectedLang)
}

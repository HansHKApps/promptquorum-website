import type { Metadata } from 'next'
import {
  getArticleStaticParams,
  buildArticleMetadata,
  buildArticlePageElement,
} from '@/lib/blog/page-helpers'
import type { Language } from '@/lib/blog/blogContent'

export const dynamic = 'force-static'
export const revalidate = 86400

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getArticleStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const selectedLang = 'en' as Language
  return buildArticleMetadata(slug, selectedLang)
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params
  const selectedLang = 'en' as Language
  return buildArticlePageElement(slug, selectedLang)
}

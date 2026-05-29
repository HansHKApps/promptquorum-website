import type { Metadata } from 'next'
import {
  getArticleStaticParams,
  buildArticleMetadata,
  buildArticlePageElement,
} from '@/lib/blog/page-helpers'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getArticleStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return buildArticleMetadata(slug, 'de')
}

export default async function EsBlogPage({ params }: PageProps) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'de')
}

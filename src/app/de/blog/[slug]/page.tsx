import type { Metadata } from 'next'
import {
  buildArticleMetadata,
  buildArticlePageElement,
} from '@/lib/blog/page-helpers'

export const revalidate = false // content only changes on deploy; no timed regeneration

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return buildArticleMetadata(slug, 'de')
}

export default async function DeBlogPage({ params }: PageProps) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'de')
}

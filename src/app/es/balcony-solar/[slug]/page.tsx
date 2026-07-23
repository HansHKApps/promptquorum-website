import type { Metadata } from 'next'
import {
  buildArticleMetadata,
  buildArticlePageElement,
} from '@/lib/balcony-solar/page-helpers'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return buildArticleMetadata(slug, 'es')
}

export default async function BalconySolarArticleEs({ params }: PageProps) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'es')
}

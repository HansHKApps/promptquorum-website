import type { Metadata } from 'next'
import {
  buildHubMetadata,
  buildHubPageElement,
} from '@/lib/blog/page-helpers'
import type { Language } from '@/lib/blog/blogContent'

export const dynamic = 'force-static'
export const revalidate = 86400

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('en')
}

export default async function BlogPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as Language

  return buildHubPageElement(selectedLang)
}

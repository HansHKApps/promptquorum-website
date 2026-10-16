import type { Metadata } from 'next'
import { TestingStandardsPageContent } from '@/components/testing-standards/TestingStandardsPageContent'
import { TESTING_STANDARDS_COPY } from '@/lib/testing-standards/copy'

export const dynamic = 'force-static'
export const revalidate = 86400

const LANG = 'ar' as const

// Owner decision 2026-10-16: this page stays noindex (not in the sitemap, no hreflang).
export async function generateMetadata(): Promise<Metadata> {
  const t = TESTING_STANDARDS_COPY[LANG]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    robots: { index: false, follow: true },
  }
}

export default function TestingStandardsPage() {
  return <TestingStandardsPageContent lang={LANG} />
}

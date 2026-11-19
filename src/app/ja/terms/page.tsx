// Terms of Use, locale "ja". Shared page: src/components/TermsPage.tsx. Text: src/lib/terms/content.ts.

import type { Metadata } from 'next'
import { TermsPage, termsMetadata } from '@/components/TermsPage'

export async function generateMetadata(): Promise<Metadata> {
  return termsMetadata('ja')
}

export default function JaTermsRoute() {
  return <TermsPage lang="ja" />
}

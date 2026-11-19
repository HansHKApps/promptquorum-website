// Terms of Use, locale "en". Shared page: src/components/TermsPage.tsx. Text: src/lib/terms/content.ts.

import type { Metadata } from 'next'
import { TermsPage, termsMetadata } from '@/components/TermsPage'

export async function generateMetadata(): Promise<Metadata> {
  return termsMetadata('en')
}

export default function EnTermsRoute() {
  return <TermsPage lang="en" />
}

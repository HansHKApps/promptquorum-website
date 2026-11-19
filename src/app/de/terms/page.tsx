// Terms of Use, locale "de". Shared page: src/components/TermsPage.tsx. Text: src/lib/terms/content.ts.

import type { Metadata } from 'next'
import { TermsPage, termsMetadata } from '@/components/TermsPage'

export async function generateMetadata(): Promise<Metadata> {
  return termsMetadata('de')
}

export default function DeTermsRoute() {
  return <TermsPage lang="de" />
}

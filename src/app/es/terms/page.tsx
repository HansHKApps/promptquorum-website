// Terms of Use, locale "es". Shared page: src/components/TermsPage.tsx. Text: src/lib/terms/content.ts.

import type { Metadata } from 'next'
import { TermsPage, termsMetadata } from '@/components/TermsPage'

export async function generateMetadata(): Promise<Metadata> {
  return termsMetadata('es')
}

export default function EsTermsRoute() {
  return <TermsPage lang="es" />
}

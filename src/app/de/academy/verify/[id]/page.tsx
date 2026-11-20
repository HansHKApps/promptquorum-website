// PromptQuorum Academy verification page, locale "de". Shared: src/components/academy/VerifyPage.tsx. Always noindex.

import type { Metadata } from 'next'
import { VerifyPage, verifyMetadata } from '@/components/academy/VerifyPage'

export function generateMetadata(): Metadata {
  return verifyMetadata('de')
}

export default function Route({ params }: { params: Promise<{ id: string }> }) {
  return <VerifyPage lang="de" params={params} />
}

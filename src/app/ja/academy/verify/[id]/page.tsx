// PromptQuorum Academy verification page, locale "ja". Shared: src/components/academy/VerifyPage.tsx. Always noindex.

import type { Metadata } from 'next'
import { VerifyPage, verifyMetadata } from '@/components/academy/VerifyPage'

export function generateMetadata(): Metadata {
  return verifyMetadata('ja')
}

export default function Route({ params }: { params: Promise<{ id: string }> }) {
  return <VerifyPage lang="ja" params={params} />
}

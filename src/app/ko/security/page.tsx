import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { securityContent } from '@/lib/security/content'
import { SecurityPage } from '@/components/SecurityPage'

export async function generateMetadata(): Promise<Metadata> {
  const c = securityContent.ko
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: generateAlternates('/security', 'ko', true, undefined, [...PATH_PREFIX_LANGS]),
    robots: { index: true, follow: true },
  }
}

export default function KoSecurityPage() {
  return <SecurityPage lang="ko" />
}

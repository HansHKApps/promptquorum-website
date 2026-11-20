// PromptQuorum Academy, locale "es". Shared page: src/components/academy/AcademyPage.tsx. 404 while ACADEMY_ENABLED is off.

import type { Metadata } from 'next'
import { AcademyPage, academyMetadata } from '@/components/academy/AcademyPage'

// Live counters — never cached (same as /askhans).
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return academyMetadata('es')
}

export default function EsAcademyRoute() {
  return <AcademyPage lang="es" />
}

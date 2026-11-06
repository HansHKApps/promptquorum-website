import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/balcony-solar/page-helpers'

// Enable caching: this route doesn't fetch dynamic data
export const dynamic = 'force-static'
export const revalidate = false // content only changes on deploy; no timed regeneration

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('en')
}

export default async function BalconySolarHubEn() {
  return buildHubPageElement('en')
}

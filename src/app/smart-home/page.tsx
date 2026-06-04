import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/smart-home/page-helpers'

// Enable caching: this route doesn't fetch dynamic data
export const dynamic = 'force-static'
export const revalidate = 86400 // 24 hours

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('en')
}

export default async function SmartHomeHubEn() {
  return buildHubPageElement('en')
}

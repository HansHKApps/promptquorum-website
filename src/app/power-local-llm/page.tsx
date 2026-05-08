import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/power-local-llm/page-helpers'

// Enable caching: this route doesn't fetch dynamic data
export const revalidate = 86400 // 24 hours

export function generateMetadata(): Metadata {
  return buildHubMetadata('en')
}

export default function PowerLocalLLMHubEn() {
  return buildHubPageElement('en')
}

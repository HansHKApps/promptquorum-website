import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/power-local-llm/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('ko')
}

export default async function PowerLocalLLMHubEs() {
  return buildHubPageElement('ko')
}

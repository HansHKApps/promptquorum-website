import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/power-local-llm/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('fr')
}

export default async function PowerLocalLLMHubFr() {
  return buildHubPageElement('fr')
}

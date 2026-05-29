import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/power-local-llm/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('de')
}

export default async function PowerLocalLLMHubDe() {
  return buildHubPageElement('de')
}

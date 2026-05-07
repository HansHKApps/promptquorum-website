import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/power-local-llm/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('ja')
}

export default async function PowerLocalLLMHubJa() {
  return buildHubPageElement('ja')
}

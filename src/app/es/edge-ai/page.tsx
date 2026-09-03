import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/edge-ai/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('es')
}

export default async function EdgeAiHubEs() {
  return buildHubPageElement('es')
}

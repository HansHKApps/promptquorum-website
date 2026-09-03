import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/edge-ai/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('ar')
}

export default async function EdgeAiHubAr() {
  return buildHubPageElement('ar')
}

import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/balcony-solar/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('ko')
}

export default async function BalconySolarHubKo() {
  return buildHubPageElement('ko')
}

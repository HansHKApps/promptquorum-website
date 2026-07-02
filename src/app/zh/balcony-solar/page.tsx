import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/balcony-solar/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('zh')
}

export default async function BalconySolarHubZh() {
  return buildHubPageElement('zh')
}

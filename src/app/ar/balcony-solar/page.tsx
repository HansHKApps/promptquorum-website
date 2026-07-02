import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/balcony-solar/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('ar')
}

export default async function BalconySolarHubAr() {
  return buildHubPageElement('ar')
}

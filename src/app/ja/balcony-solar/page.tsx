import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/balcony-solar/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('ja')
}

export default async function BalconySolarHubJa() {
  return buildHubPageElement('ja')
}

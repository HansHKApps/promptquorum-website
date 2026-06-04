import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/smart-home/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('fr')
}

export default async function SmartHomeHubFr() {
  return buildHubPageElement('fr')
}

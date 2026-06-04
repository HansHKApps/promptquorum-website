import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/smart-home/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('ja')
}

export default async function SmartHomeHubJa() {
  return buildHubPageElement('ja')
}

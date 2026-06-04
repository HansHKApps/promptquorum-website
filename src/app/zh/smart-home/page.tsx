import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/smart-home/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('zh')
}

export default async function SmartHomeHubZh() {
  return buildHubPageElement('zh')
}

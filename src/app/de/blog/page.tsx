import type { Metadata } from 'next'
import {
  buildHubMetadata,
  buildHubPageElement,
} from '@/lib/blog/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('de')
}

export default async function DeBlogPage() {
  return buildHubPageElement('de')
}

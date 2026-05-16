import type { Metadata } from 'next'
import {
  buildHubMetadata,
  buildHubPageElement,
} from '@/lib/blog/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('fr')
}

export default async function FrBlogPage() {
  return buildHubPageElement('fr')
}

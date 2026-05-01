import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const REGISTRY_PATH = path.join(process.cwd(), 'public/data/seo-registry.json')
const CHANGELOG_PATH = path.join(process.cwd(), 'src/data/seo-changelog.json')
const CACHE_HEADERS = { 'Cache-Control': 'public, max-age=3600' }

function readJson(filePath: string) {
  if (!fs.existsSync(filePath)) return null
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const history = searchParams.get('history')
  const slug = searchParams.get('slug')

  if (history === 'true') {
    const changelog = readJson(CHANGELOG_PATH) ?? []
    return NextResponse.json(changelog, { headers: CACHE_HEADERS })
  }

  const registry = readJson(REGISTRY_PATH)
  if (!registry) {
    return NextResponse.json(
      { error: 'Registry not yet generated. Run: npm run generate:seo-registry' },
      { status: 503, headers: CACHE_HEADERS }
    )
  }

  if (slug) {
    const page = (registry.pages as Record<string, unknown>)[slug] ?? null
    const changelog = (readJson(CHANGELOG_PATH) ?? []) as Array<{ slug: string }>
    const changes = changelog.filter(entry => entry.slug === slug)
    return NextResponse.json({ slug, current: page, changes }, { headers: CACHE_HEADERS })
  }

  return NextResponse.json(registry, { headers: CACHE_HEADERS })
}

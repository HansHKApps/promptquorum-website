import { NextResponse } from 'next/server'
import { localAiApps } from '@/lib/power-local-llm/apps-barrel'

// Name/tagline index of the directory apps for the "Can I Run This?" picker inside Ask Hans Power Mode.
// Static: the list only changes on deploy. (The standalone page builds the same list at build time.)
export const dynamic = 'force-static'
export const revalidate = false

export function GET() {
  const apps = localAiApps
    .filter((a) => a.status !== 'planned')
    .map((a) => ({ slug: a.slug, name: a.name, tagline: a.tagline.en ?? '' }))
  return NextResponse.json({ apps })
}

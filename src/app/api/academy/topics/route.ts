// GET /api/academy/topics?lang=xx — subject suggestions for the Academy window. The window is mounted globally
// (like Ask Hans), so it cannot receive server-built props from a page; it fetches them when first opened.

import type { NextRequest } from 'next/server'
import { ACADEMY_COPY } from '@/components/academy/copy'
import { academyEnabled } from '@/lib/academy/config'
import { buildAcademyTopics } from '@/lib/academy/topics'
import { popularSubjects } from '@/lib/academy/demand-store'
import { ALL_LANGS } from '@/lib/i18n/constants'

export const runtime = 'nodejs'

export async function GET(req: NextRequest): Promise<Response> {
  if (!academyEnabled()) return Response.json({ error: 'disabled' }, { status: 404 })
  const asked = req.nextUrl.searchParams.get('lang') ?? 'en'
  const lang = (ALL_LANGS as readonly string[]).includes(asked) ? (asked as (typeof ALL_LANGS)[number]) : 'en'
  // Most requested subjects first (only those asked for by at least ACADEMY_DEMAND_MIN_PUBLIC visitors; empty until then).
  const popular = (await popularSubjects(lang)).map((label, i) => ({ key: `popular:${i}`, label }))
  return Response.json({ topics: [...popular, ...buildAcademyTopics(lang, ACADEMY_COPY[lang].hubs)] }, { headers: { 'Cache-Control': 'public, max-age=3600' } })
}

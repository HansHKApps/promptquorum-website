// POST /api/ask/event — anonymous Ask Hans usage counters. Storage: Upstash Redis (already used by the site).
//
// Only fixed, whitelisted fields are accepted; free text can never be stored, and the client only
// calls this after the visitor said "Ja, einverstanden" (except the aggregated "Nein" counter).
// Never stored: question/answer text, IP address, names.
//
// Keys:
//   askhans:day:<YYYY-MM-DD>      hash of counters  (q:<cat>, tool:<name>, link:<cat>:<id>, share:<answer|promo|report>:<channel>, pexport:<copy|md|docx|pdf>, pexport:<process>:<format>, power:<process> (+ total_power), app:<slug>, dircat:<key>, click:<text|panel>:<section>,
//                                 answers_clicked, followup_click, new, lang:<xx>, consent_yes/no/withdrawn,
//                                 sessions, ret:<new|back>, days:<bucket>, dur:<bucket>, msgs:<bucket>)
//   askhans:visits:<YYYY-MM-DD>   set of anonymous visit IDs (random, not linked to a person)
//   askhans:consent               list of consent proofs {ts, textVersion, visitId, type}  (capped)

import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { createHash } from 'crypto'
import { redis } from '@/lib/redis'
import { isCategoryKey, ASK_HANS_CATEGORIES } from '@/lib/askhans/categories'
import { cleanTopics } from '@/lib/askhans/topics'
import { isProcessId } from '@/lib/askhans/solutions/types'
import { isDaysBucket, isDurationBucket, isQuestionBucket, isReturnKind } from '@/lib/askhans/engagement'

export const runtime = 'nodejs'

const limiter = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(60, '1 m'), prefix: 'rl:askhans:event' })

const DAY_TTL_S = 400 * 86_400
const CONSENT_LIST_MAX = 50_000
const TOOL_NAME = /^[a-z_]{3,40}$/
const LINK_IDS = new Set(ASK_HANS_CATEGORIES.flatMap((c) => c.links.map((l) => l.id)))
const CLICK_SOURCES = new Set(['text', 'panel'])
const SHARE_SOURCES = new Set(['answer', 'promo', 'report'])
const SHARE_CHANNELS = new Set(['copy', 'copy_plain', 'email', 'whatsapp', 'telegram', 'native', 'link'])
const POWER_EXPORT_CHANNELS = new Set(['copy', 'md', 'docx', 'pdf'])
const CLICK_SECTION = /^[a-z0-9-]{1,40}$/
const TEXT_VERSION = /^[A-Za-z0-9._-]{1,40}$/
const VISIT_ID = /^[a-zA-Z0-9-]{8,64}$/

export async function POST(req: NextRequest) {
  if (process.env.ASK_HANS_ENABLED !== 'true') return new NextResponse(null, { status: 404 })

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  const rlKey = createHash('sha256').update(`${process.env.IP_HASH_SALT ?? ''}|${ip}`).digest('hex').slice(0, 32)
  if (!(await limiter.limit(rlKey)).success) return new NextResponse(null, { status: 429 })

  let b: Record<string, unknown>
  try {
    b = await req.json()
  } catch {
    return new NextResponse(null, { status: 400 })
  }

  const day = new Date().toISOString().slice(0, 10)
  const dayKey = `askhans:day:${day}`
  const type = b.type
  const visitId = typeof b.visitId === 'string' && VISIT_ID.test(b.visitId) ? b.visitId : null

  try {
    const pipe = redis.pipeline()
    switch (type) {
      case 'open':
        // Window opened: aggregated counter only (no visitor ID), same footing as consent_no.
        pipe.hincrby(dayKey, 'total_opens', 1)
        pipe.hincrby('askhans:total', 'opens', 1)
        pipe.hsetnx('askhans:total', 'since', day)
        break
      case 'consent_no':
        // "Nein" is an aggregated counter only — no ID, no proof entry.
        pipe.hincrby(dayKey, 'consent_no', 1)
        break
      case 'consent_yes':
      case 'consent_withdrawn': {
        const textVersion = typeof b.textVersion === 'string' && TEXT_VERSION.test(b.textVersion) ? b.textVersion : null
        if (!visitId || !textVersion) return new NextResponse(null, { status: 400 })
        pipe.hincrby(dayKey, type, 1)
        pipe.lpush('askhans:consent', JSON.stringify({ ts: new Date().toISOString(), textVersion, visitId, type }))
        pipe.ltrim('askhans:consent', 0, CONSENT_LIST_MAX - 1)
        break
      }
      case 'question': {
        if (!visitId || !isCategoryKey(b.category)) return new NextResponse(null, { status: 400 })
        pipe.hincrby(dayKey, `q:${b.category}`, 1)
        const tools = Array.isArray(b.tools) ? b.tools.filter((t): t is string => typeof t === 'string' && TOOL_NAME.test(t)).slice(0, 10) : []
        for (const t of tools) pipe.hincrby(dayKey, `tool:${t}`, 1)
        // What was researched: whitelisted directory slugs/categories only (re-validated here, never free text).
        const topics = cleanTopics(b.topics)
        for (const a of topics.apps) pipe.hincrby(dayKey, `app:${a}`, 1)
        for (const c of topics.dirCats) pipe.hincrby(dayKey, `dircat:${c}`, 1)
        if (typeof b.lang === 'string' && /^[a-z]{2}$/.test(b.lang)) pipe.hincrby(dayKey, `lang:${b.lang}`, 1)
        pipe.sadd(`askhans:visits:${day}`, visitId)
        pipe.expire(`askhans:visits:${day}`, DAY_TTL_S)
        break
      }
      case 'link_click': {
        if (!visitId || !isCategoryKey(b.category) || typeof b.linkId !== 'string' || !LINK_IDS.has(b.linkId)) return new NextResponse(null, { status: 400 })
        pipe.hincrby(dayKey, `link:${b.category}:${b.linkId}`, 1)
        break
      }
      case 'answer_click': {
        // Click-through metric: which part of an answer led into the site. Section = first path segment only.
        if (!visitId || typeof b.source !== 'string' || !CLICK_SOURCES.has(b.source) || typeof b.section !== 'string' || !CLICK_SECTION.test(b.section)) return new NextResponse(null, { status: 400 })
        pipe.hincrby(dayKey, `click:${b.source}:${b.section}`, 1)
        // One count per answer: the client sets firstForAnswer on the first internal click of an answer only.
        if (b.firstForAnswer === true && b.section !== 'external') pipe.hincrby(dayKey, 'answers_clicked', 1)
        break
      }
      case 'share': {
        // Copy / share of an answer or of the promo card: fixed source + channel names only, never the shared text.
        if (!visitId || typeof b.source !== 'string' || !SHARE_SOURCES.has(b.source) || typeof b.channel !== 'string' || !SHARE_CHANNELS.has(b.channel)) return new NextResponse(null, { status: 400 })
        pipe.hincrby(dayKey, `share:${b.source}:${b.channel}`, 1)
        break
      }
      case 'power_export': {
        // Power Mode report copied or downloaded: fixed process id + format names only, never the report.
        if (!visitId || !isProcessId(b.process) || typeof b.channel !== 'string' || !POWER_EXPORT_CHANNELS.has(b.channel)) return new NextResponse(null, { status: 400 })
        pipe.hincrby(dayKey, `pexport:${b.channel}`, 1)
        pipe.hincrby(dayKey, `pexport:${b.process}:${b.channel}`, 1)
        break
      }
      case 'promo_shown':
        // The 2-minute promo card was shown (counter only).
        pipe.hincrby(dayKey, 'promo_shown', 1)
        break
      case 'session_end': {
        // One Ask Hans use session ended (window closed or page left): buckets only, no ID, no exact times or dates.
        if (!isReturnKind(b.ret) || !isDaysBucket(b.days) || !isDurationBucket(b.dur) || !isQuestionBucket(b.msgs)) return new NextResponse(null, { status: 400 })
        pipe.hincrby(dayKey, 'sessions', 1)
        pipe.hincrby(dayKey, `ret:${b.ret}`, 1)
        pipe.hincrby(dayKey, `days:${b.days}`, 1)
        pipe.hincrby(dayKey, `dur:${b.dur}`, 1)
        pipe.hincrby(dayKey, `msgs:${b.msgs}`, 1)
        break
      }
      case 'followup_click':
        // A suggested follow-up question chip was used (no text stored).
        if (!visitId) return new NextResponse(null, { status: 400 })
        pipe.hincrby(dayKey, 'followup_click', 1)
        break
      case 'new_chat':
        if (!visitId) return new NextResponse(null, { status: 400 })
        pipe.hincrby(dayKey, 'new', 1)
        break
      default:
        return new NextResponse(null, { status: 400 })
    }
    pipe.expire(dayKey, DAY_TTL_S)
    await pipe.exec()
  } catch (err) {
    console.error('[askhans] event failed', err instanceof Error ? err.message : err)
    return new NextResponse(null, { status: 500 })
  }
  return new NextResponse(null, { status: 204 })
}

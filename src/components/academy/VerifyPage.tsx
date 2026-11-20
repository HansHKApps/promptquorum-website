// PromptQuorum Academy — public verification page for a registered certificate (the QR code points here).
// Always noindex; no listing, search or browsing; rate-limited by a salted IP hash so IDs cannot be enumerated.
// Shows only what the registry stores (no name) plus the notice that the values were submitted by the learner's browser.

import type { Metadata } from 'next'
import { createHash } from 'crypto'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation'
import { Ratelimit } from '@upstash/ratelimit'
import { academyEnabled } from '@/lib/academy/config'
import { CERTIFICATE_ID_PATTERN } from '@/lib/academy/certificate'
import { languageDisplayName, htmlLangOf, langDirOf, isSiteLang } from '@/lib/academy/language'
import type { AcademyLang } from '@/lib/academy/types'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { redis } from '@/lib/redis'
import { ACADEMY_COPY, ACADEMY_LANGUAGE_NAMES } from './copy'
import { HashCheck } from './HashCheck'

const limiter = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(40, '1 h'), prefix: 'rl:academy:verify' })

export function verifyMetadata(lang: AcademyLang): Metadata {
  return { title: ACADEMY_COPY[lang].verify.title, robots: { index: false, follow: false, nocache: true } }
}

export async function VerifyPage({ lang, params }: { lang: AcademyLang; params: Promise<{ id: string }> }) {
  if (!academyEnabled()) notFound()
  const { id: raw } = await params
  const id = raw.toUpperCase()
  const tx = ACADEMY_COPY[lang]
  const v = tx.verify
  const h = await headers()
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  const key = createHash('sha256').update(`${process.env.IP_HASH_SALT ?? ''}|${ip}`).digest('hex').slice(0, 32)
  const limited = await limiter
    .limit(key)
    .then((r) => !r.success)
    .catch(() => process.env.NODE_ENV === 'production')
  const record = !limited && CERTIFICATE_ID_PATTERN.test(id) ? await redis.hgetall<Record<string, string | number>>(`academy:cert:${id}`).catch(() => null) : null
  const found = record && record.number

  const rows: [string, string][] = found
    ? [
        [v.number, `No. ${Number(record.number).toLocaleString()}`],
        [v.issued, formatDisplayDate(String(record.issuedAt), lang)],
        [v.subject, String(record.subject)],
        [v.score, `${record.percent}%`],
        [v.status, Number(record.passed) ? v.passed : v.notPassed],
        [v.time, tx.minutes(Number(record.minutes))],
        [v.language, isSiteLang(String(record.language)) ? ACADEMY_LANGUAGE_NAMES[record.language as AcademyLang] : languageDisplayName(String(record.language))],
        [v.testMode, tx.tests[record.testMode as 'none' | 'final' | 'per_lesson_and_final']?.label ?? String(record.testMode)],
      ]
    : []

  return (
    <main lang={htmlLangOf(lang)} dir={langDirOf(lang)} className="mx-auto max-w-2xl px-5 pb-16 pt-28">
      <h1 className="text-2xl font-bold text-gray-900">{v.title}</h1>
      <p className="mt-1 font-mono text-sm text-gray-600">{id}</p>
      {!found ? (
        <p className="mt-6 rounded-xl bg-gray-50 p-4 text-gray-800" role="status">
          {v.notFound}
        </p>
      ) : (
        <>
          <dl className="mt-6 divide-y divide-gray-100 rounded-2xl border border-gray-200">
            {rows.map(([k, val]) => (
              <div key={k} className="flex flex-wrap justify-between gap-2 px-4 py-3">
                <dt className="text-sm text-gray-600">{k}</dt>
                <dd className="font-medium text-gray-900">{val}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-sm font-medium text-purple-800">{v.createdBy}</p>
          <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">{v.notice}</p>
          {lang !== 'en' && <p className="mt-3 rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">{ACADEMY_COPY.en.verify.notice}</p>}
          {String(record.hash ?? '') && <HashCheck expected={String(record.hash)} labels={{ title: v.hashTitle, hint: v.hashHint, match: v.hashMatch, noMatch: v.hashNoMatch, choose: v.hashChoose }} />}
        </>
      )}
    </main>
  )
}

// Internal dashboard for the Ask Hans button-wording experiment (askhans-cta-v1). English only, noindex, not linked.
// Access: /askhans/experiment?key=<ASK_HANS_EXPERIMENT_KEY>. Without the right key (or with the key unset) the page is a 404.
// Only aggregated counters are shown; there is nothing visitor-level to expose (see src/app/api/ask/exp/route.ts).

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { timingSafeEqual } from 'crypto'
import { getExperimentReport, type SubgroupRow, type VariantStats } from '@/lib/askhans/experiment/stats'
import { CTA_MIN_CONVERSIONS_PER_VARIANT, CTA_MIN_DAYS, CTA_MIN_EXPOSED_PER_VARIANT, CTA_VARIANTS, CTA_EXPERIMENT_ENABLED, ctaWinner } from '@/lib/askhans/experiment/config'
import { ASK_COPY } from '@/components/askhans/copy'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Ask Hans button experiment', robots: { index: false, follow: false } }
}

function authorised(key: string | undefined): boolean {
  const secret = process.env.ASK_HANS_EXPERIMENT_KEY
  if (!secret || !key) return false
  const a = Buffer.from(key)
  const b = Buffer.from(secret)
  return a.length === b.length && timingSafeEqual(a, b)
}

const pct = (x: number, d = 2) => (Number.isFinite(x) ? `${(x * 100).toFixed(d)}%` : '–')
const ratio = (a: number, b: number) => (b > 0 ? a / b : NaN)
const n0 = (x: number) => x.toLocaleString('en-US')
const f = (x: number, d = 2) => (Number.isFinite(x) ? x.toFixed(d) : '–')

export default async function ExperimentPage({ searchParams }: { searchParams: Promise<{ key?: string }> }) {
  const { key } = await searchParams
  if (!authorised(key)) notFound()
  const r = await getExperimentReport()
  const V = r.variants
  const best = [...r.posterior].sort((a, b) => b.rate - a.rate)[0]

  type Row = [string, (v: VariantStats) => string]
  const rows: Row[] = [
    ['Unique sessions exposed (estimate)', (v) => n0(v.exposedSessions)],
    ['Button impressions (events)', (v) => n0(v.impressions)],
    ['Impressions per exposed session', (v) => f(ratio(v.impressions, v.exposedSessions))],
    ['Button clicks', (v) => n0(v.clicks)],
    ['Click-through rate (clicks / impressions)', (v) => pct(ratio(v.clicks, v.impressions))],
    ['Successful openings (all)', (v) => n0(v.opened)],
    ['Successful openings via an experiment button', (v) => n0(v.openedViaButton)],
    ['Opening rate (via button / clicks)', (v) => pct(ratio(v.openedViaButton, v.clicks))],
    ['First questions (events, consented)', (v) => n0(v.firstQuestions)],
    ['Sessions with a first question (consented)', (v) => n0(v.firstQuestionSessions)],
    ['PRIMARY: conversion (first-question sessions / exposed sessions)', (v) => pct(ratio(v.firstQuestionSessions, v.exposedSessions), 3)],
    ['Second questions', (v) => n0(v.secondQuestions)],
    ['Second-question rate (second / first)', (v) => pct(ratio(v.secondQuestions, v.firstQuestions))],
    ['Three-question conversations', (v) => n0(v.threeQuestions)],
    ['Three-question rate (three / first)', (v) => pct(ratio(v.threeQuestions, v.firstQuestions))],
    ['Avg questions per conversation', (v) => f(ratio(v.questions, v.convs))],
    ['Avg active time per Ask Hans visit (seconds)', (v) => f(ratio(v.seconds, v.sessionsWithQuestions), 0)],
    ['Conversations completed (click-through from an answer)', (v) => n0(v.completed)],
    ['Return visits (visitors who said Yes)', (v) => n0(v.returnVisits)],
    ['Power Mode used', (v) => n0(v.powerMode)],
    ['Conversations per 1,000 exposed sessions', (v) => f(ratio(v.firstQuestions, v.exposedSessions) * 1000)],
    ['Conversations per 1,000 button impressions', (v) => f(ratio(v.firstQuestions, v.impressions) * 1000)],
    ['Consent share (Yes / answered)', (v) => pct(ratio(v.consentYes, v.consentYes + v.consentNo), 1)],
  ]

  const leaderText = r.verdict.state === 'leader' ? `Variant ${r.verdict.leader} is the leader.` : r.verdict.state === 'running' ? 'Experiment running: no winner can be named yet.' : 'Insufficient evidence: no winner.'

  return (
    <main className="mx-auto w-full max-w-[1100px] px-5 pb-16 pt-24 text-sm text-text-primary sm:px-8">
      <h1 className="mb-1 text-2xl font-bold">Ask Hans button experiment</h1>
      <p className="mb-4 text-text-secondary">
        {r.id} · started {r.since ?? 'not yet (no events)'} · day {r.daysElapsed} (minimum {CTA_MIN_DAYS}) · experiment {CTA_EXPERIMENT_ENABLED ? 'ON' : 'OFF'}
        {ctaWinner() ? ` · rolled-out wording: ${ctaWinner()}` : ''}
      </p>

      <section className="mb-6 rounded-xl border border-border p-4" aria-label="Verdict">
        <h2 className="mb-2 text-lg font-bold">{leaderText}</h2>
        <p className="mb-2 text-text-secondary">
          Highest observed rate so far: variant {best.variant} at {pct(best.rate, 3)}. This is a description of the data, not a result, unless the verdict above says &quot;leader&quot;.
        </p>
        {r.verdict.reasons.length > 0 && (
          <ul className="list-disc space-y-1 ps-5 text-text-secondary">
            {r.verdict.reasons.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        )}
        <p className="mt-2 text-text-secondary">
          Rule for naming a leader: at least {CTA_MIN_DAYS} days, {n0(CTA_MIN_EXPOSED_PER_VARIANT)} exposed sessions and {CTA_MIN_CONVERSIONS_PER_VARIANT} first-question sessions per variant, probability of being best of 95% or more, median lift of 10% or more over the runner-up, and a 95% interval that excludes zero.
        </p>
      </section>

      <section className="mb-6 overflow-x-auto" aria-label="Funnel by variant">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b border-border text-start">
              <th className="py-2 pe-3 text-start font-semibold">Metric</th>
              {CTA_VARIANTS.map((v) => (
                <th key={v} className="px-3 py-2 text-end font-semibold">
                  {v}
                  <div className="text-xs font-normal text-text-secondary">{ASK_COPY.en.ctaVariants[v].label}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, fn]) => (
              <tr key={label} className={`border-b border-border/60 ${label.startsWith('PRIMARY') ? 'bg-hub-violet-tint font-semibold' : ''}`}>
                <td className="py-1.5 pe-3">{label}</td>
                {CTA_VARIANTS.map((v) => (
                  <td key={v} className="px-3 py-1.5 text-end tabular-nums">{fn(V[v])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6 overflow-x-auto" aria-label="Statistical comparison">
        <h2 className="mb-2 text-lg font-bold">Comparison (Bayesian beta-binomial, uniform prior, 20,000 draws per variant)</h2>
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 pe-3 text-start font-semibold">Variant</th>
              <th className="px-3 py-2 text-end font-semibold">Sample (n / successes)</th>
              <th className="px-3 py-2 text-end font-semibold">Rate</th>
              <th className="px-3 py-2 text-end font-semibold">95% credible interval</th>
              <th className="px-3 py-2 text-end font-semibold">P(best)</th>
              <th className="px-3 py-2 text-end font-semibold">Relative lift vs best other (median, 95%)</th>
              <th className="px-3 py-2 text-end font-semibold">Absolute diff vs best other</th>
            </tr>
          </thead>
          <tbody>
            {r.posterior.map((p) => {
              const topOther = Math.max(...r.posterior.filter((o) => o.variant !== p.variant).map((o) => o.rate))
              return (
                <tr key={p.variant} className="border-b border-border/60">
                  <td className="py-1.5 pe-3 font-semibold">{p.variant}</td>
                  <td className="px-3 py-1.5 text-end tabular-nums">{n0(p.n)} / {n0(p.k)}</td>
                  <td className="px-3 py-1.5 text-end tabular-nums">{pct(p.rate, 3)}</td>
                  <td className="px-3 py-1.5 text-end tabular-nums">{pct(p.low, 3)} – {pct(p.high, 3)}</td>
                  <td className="px-3 py-1.5 text-end tabular-nums">{pct(p.probBest, 1)}</td>
                  <td className="px-3 py-1.5 text-end tabular-nums">{pct(p.liftVsBestOther.median, 1)} ({pct(p.liftVsBestOther.low, 1)} to {pct(p.liftVsBestOther.high, 1)})</td>
                  <td className="px-3 py-1.5 text-end tabular-nums">{f((p.rate - topOther) * 100, 3)} pp</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>

      <Breakdown title="By language" rows={r.subgroups.lang} />
      <Breakdown title="By device" rows={r.subgroups.device} />
      <Breakdown title="By page category" rows={r.subgroups.category} />

      <section className="mt-8 text-text-secondary" aria-label="Limitations">
        <h2 className="mb-2 text-lg font-bold text-text-primary">How to read this (limitations)</h2>
        <ul className="list-disc space-y-1 ps-5">
          <li>A &quot;visitor&quot; is a browser session: the variant is kept in sessionStorage, so a returning visitor is drawn again. Cross-device and cross-session use cannot be linked. Return visits are attributed to the variant of the return session.</li>
          <li>Unique-session counts are HyperLogLog estimates (about 1% error). Automated browsers and visitors sending Do-Not-Track / Global Privacy Control are not counted.</li>
          <li>Impressions, clicks and openings are counted for everybody (anonymous counters); first/second/third question, completion, return visits and Power Mode only for visitors who said Yes in the consent step. Absolute rates are therefore understated by the consent share (last row of the table); the comparison between variants holds when that share is about equal.</li>
          <li>The header pill opens the search box first; the assistant opens when the question is sent. The click-to-opening rate therefore includes people who closed the box.</li>
          <li>Phones show an icon only in the header: there the wording appears as tooltip/accessible name, and visibly only on the floating pill (after a chat was closed), About and /askhans.</li>
          <li>Subgroup rows below {500} impressions per variant are greyed out and must not be interpreted. Subgroup figures are event counts, not unique sessions.</li>
          <li>There is no unchanged &quot;Ask Hans&quot; control arm: all three variants replace the previous wording.</li>
        </ul>
      </section>
    </main>
  )
}

function Breakdown({ title, rows }: { title: string; rows: SubgroupRow[] }) {
  if (rows.length === 0) return null
  return (
    <section className="mb-6 overflow-x-auto" aria-label={title}>
      <h2 className="mb-2 text-lg font-bold">{title} (impressions → first questions, events)</h2>
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2 pe-3 text-start font-semibold">Group</th>
            {CTA_VARIANTS.map((v) => (
              <th key={v} className="px-3 py-2 text-end font-semibold">{v}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className={`border-b border-border/60 ${row.readable ? '' : 'text-text-secondary opacity-60'}`}>
              <td className="py-1.5 pe-3">{row.key}{row.readable ? '' : ' (too small)'}</td>
              {CTA_VARIANTS.map((v) => {
                const c = row.perVariant[v]
                return (
                  <td key={v} className="px-3 py-1.5 text-end tabular-nums">
                    {n0(c.impressions)} → {n0(c.firstQuestions)} ({pct(ratio(c.firstQuestions, c.impressions))})
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

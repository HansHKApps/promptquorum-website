// Ask Hans button experiment: read the counters and evaluate them (server only).
//
// Unit of analysis for the primary KPI is the browser SESSION:
//   conversion = unique sessions with a first question / unique sessions that saw the button.
// Both numbers are HyperLogLog estimates (standard error about 0.8%). Event counters (clicks, impressions, ...) are exact.
// The first-question numerator only contains visitors who said "Yes" in the consent step (see docs/askhans-cta-experiment.md),
// so absolute rates are understated by the consent rate; the comparison between variants is not, as long as the consent
// rate is about equal. The dashboard shows the consent share per variant so that assumption can be checked.

import { redis } from '@/lib/redis'
import {
  CTA_EXPERIMENT_ID, CTA_MIN_CONVERSIONS_PER_VARIANT, CTA_MIN_DAYS, CTA_MIN_EXPOSED_PER_VARIANT, CTA_MIN_SUBGROUP_IMPRESSIONS,
  CTA_PRACTICAL_LIFT, CTA_VARIANTS, CTA_WIN_PROBABILITY, CTA_CATEGORIES, CTA_DEVICES, CTA_LANGS, type CtaVariant,
} from './config'

export interface VariantStats {
  variant: CtaVariant
  exposedSessions: number
  impressions: number
  clicks: number
  opened: number
  openedViaButton: number
  firstQuestionSessions: number
  firstQuestions: number
  secondQuestions: number
  threeQuestions: number
  completed: number
  returnVisits: number
  powerMode: number
  sessionsWithQuestions: number
  convs: number
  questions: number
  seconds: number
  consentYes: number
  consentNo: number
}

export interface Posterior {
  variant: CtaVariant
  k: number
  n: number
  rate: number
  low: number
  high: number
  probBest: number
  /** median relative lift over the best OTHER variant, and its 95% interval */
  liftVsBestOther: { median: number; low: number; high: number }
}

export interface SubgroupRow {
  key: string
  perVariant: Record<CtaVariant, { impressions: number; firstQuestions: number }>
  readable: boolean
}

export interface ExperimentReport {
  id: string
  since: string | null
  daysElapsed: number
  variants: Record<CtaVariant, VariantStats>
  posterior: Posterior[]
  verdict: { state: 'running' | 'insufficient' | 'leader'; leader: CtaVariant | null; reasons: string[] }
  subgroups: { lang: SubgroupRow[]; device: SubgroupRow[]; category: SubgroupRow[] }
}

type Hash = Record<string, number>

const num = (h: Hash, k: string) => Number(h[k] ?? 0) || 0

// ---- Bayesian beta-binomial (pure, deterministic: seeded PRNG) ----------------------------------------------------

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function normal(rng: () => number): number {
  const u = Math.max(rng(), 1e-12)
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rng())
}

/** Marsaglia-Tsang gamma(shape>=1, 1) sampler. */
function gamma(shape: number, rng: () => number): number {
  const d = shape - 1 / 3
  const c = 1 / Math.sqrt(9 * d)
  for (;;) {
    let x: number
    let v: number
    do {
      x = normal(rng)
      v = 1 + c * x
    } while (v <= 0)
    v = v * v * v
    const u = rng()
    if (u < 1 - 0.0331 * x ** 4 || Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) return d * v
  }
}

export function betaSample(a: number, b: number, rng: () => number): number {
  const x = gamma(a, rng)
  const y = gamma(b, rng)
  return x / (x + y)
}

const quantile = (sorted: number[], p: number) => sorted[Math.min(sorted.length - 1, Math.max(0, Math.floor(p * sorted.length)))]

/**
 * Posterior (uniform Beta(1,1) prior) per variant, probability of being best and the lift over the best other variant.
 * `draws` samples per variant; fixed seed so the same data always gives the same dashboard (auditable).
 */
export function analyse(counts: Record<CtaVariant, { k: number; n: number }>, draws = 20000, seed = 20261113): Posterior[] {
  const rng = mulberry32(seed)
  const samples = {} as Record<CtaVariant, number[]>
  for (const v of CTA_VARIANTS) {
    const { k, n } = counts[v]
    const kk = Math.min(k, n)
    samples[v] = Array.from({ length: draws }, () => betaSample(1 + kk, 1 + n - kk, rng))
  }
  return CTA_VARIANTS.map((v) => {
    const { k, n } = counts[v]
    const kk = Math.min(k, n)
    const own = [...samples[v]].sort((x, y) => x - y)
    let best = 0
    const lifts: number[] = []
    for (let i = 0; i < draws; i++) {
      const others = CTA_VARIANTS.filter((o) => o !== v).map((o) => samples[o][i])
      const topOther = Math.max(...others)
      if (samples[v][i] > topOther) best++
      lifts.push(samples[v][i] / topOther - 1)
    }
    lifts.sort((x, y) => x - y)
    return {
      variant: v,
      k: kk,
      n,
      rate: n > 0 ? kk / n : 0,
      low: quantile(own, 0.025),
      high: quantile(own, 0.975),
      probBest: best / draws,
      liftVsBestOther: { median: quantile(lifts, 0.5), low: quantile(lifts, 0.025), high: quantile(lifts, 0.975) },
    }
  })
}

/** Pure decision rule: a leader is only named when every guard passes. Exported for the unit test. */
export function decide(
  posterior: Posterior[],
  days: number,
): { state: 'running' | 'insufficient' | 'leader'; leader: CtaVariant | null; reasons: string[] } {
  const reasons: string[] = []
  if (days < CTA_MIN_DAYS) reasons.push(`Only ${days} of the minimum ${CTA_MIN_DAYS} days have passed.`)
  for (const p of posterior) {
    if (p.n < CTA_MIN_EXPOSED_PER_VARIANT) reasons.push(`Variant ${p.variant}: ${p.n} exposed sessions, need ${CTA_MIN_EXPOSED_PER_VARIANT}.`)
    if (p.k < CTA_MIN_CONVERSIONS_PER_VARIANT) reasons.push(`Variant ${p.variant}: ${p.k} first-question sessions, need ${CTA_MIN_CONVERSIONS_PER_VARIANT}.`)
  }
  const top = [...posterior].sort((a, b) => b.probBest - a.probBest)[0]
  if (reasons.length) return { state: days < CTA_MIN_DAYS ? 'running' : 'insufficient', leader: null, reasons }
  if (top.probBest < CTA_WIN_PROBABILITY) reasons.push(`Best variant (${top.variant}) is best with probability ${(top.probBest * 100).toFixed(1)}%, need ${CTA_WIN_PROBABILITY * 100}%.`)
  if (top.liftVsBestOther.median < CTA_PRACTICAL_LIFT) reasons.push(`Median lift of ${top.variant} over the runner-up is ${(top.liftVsBestOther.median * 100).toFixed(1)}%, below the practical threshold of ${CTA_PRACTICAL_LIFT * 100}%.`)
  if (top.liftVsBestOther.low <= 0) reasons.push(`The 95% interval of the lift of ${top.variant} still includes zero.`)
  if (reasons.length) return { state: 'insufficient', leader: null, reasons }
  return { state: 'leader', leader: top.variant, reasons: [] }
}

// ---- Reading Redis -------------------------------------------------------------------------------------------------

async function pf(key: string): Promise<number> {
  try {
    return Number(await redis.pfcount(key)) || 0
  } catch {
    return 0
  }
}

function subgroup(h: Hash, dim: 'lang' | 'dev' | 'cat', keys: readonly string[]): SubgroupRow[] {
  return keys
    .map((key) => {
      const perVariant = {} as SubgroupRow['perVariant']
      for (const v of CTA_VARIANTS) {
        perVariant[v] = {
          impressions: num(h, `ask_hans_button_impression:${v}:${dim}:${key}`),
          firstQuestions: num(h, `ask_hans_first_question:${v}:${dim}:${key}`),
        }
      }
      const readable = CTA_VARIANTS.every((v) => perVariant[v].impressions >= CTA_MIN_SUBGROUP_IMPRESSIONS)
      return { key, perVariant, readable }
    })
    .filter((r) => CTA_VARIANTS.some((v) => r.perVariant[v].impressions > 0))
}

export async function getExperimentReport(): Promise<ExperimentReport> {
  const key = `askhans:exp:${CTA_EXPERIMENT_ID}`
  const raw = ((await redis.hgetall<Record<string, string | number>>(key)) ?? {}) as Record<string, string | number>
  const h: Hash = {}
  for (const [k, v] of Object.entries(raw)) if (k !== 'since') h[k] = Number(v)
  const since = typeof raw.since === 'string' ? raw.since : null
  const daysElapsed = since ? Math.max(0, Math.floor((Date.now() - Date.parse(`${since}T00:00:00Z`)) / 86_400_000) + 1) : 0

  const variants = {} as Record<CtaVariant, VariantStats>
  for (const v of CTA_VARIANTS) {
    const u = (ev: string) => pf(`${key}:u:${ev}:${v}`)
    const [exposed, fqU] = await Promise.all([u('ask_hans_button_impression'), u('ask_hans_first_question')])
    variants[v] = {
      variant: v,
      exposedSessions: exposed,
      impressions: num(h, `ask_hans_button_impression:${v}`),
      clicks: num(h, `ask_hans_button_click:${v}`),
      opened: num(h, `ask_hans_opened:${v}`),
      openedViaButton: (['header', 'floating', 'about', 'page'] as const).reduce((s, p) => s + num(h, `via:ask_hans_opened:${v}:${p}`), 0),
      firstQuestionSessions: fqU,
      firstQuestions: num(h, `ask_hans_first_question:${v}`),
      secondQuestions: num(h, `ask_hans_second_question:${v}`),
      threeQuestions: num(h, `ask_hans_three_questions:${v}`),
      completed: num(h, `ask_hans_conversation_completed:${v}`),
      returnVisits: num(h, `ask_hans_return_visit:${v}`),
      powerMode: num(h, `ask_hans_power_mode_used:${v}`),
      sessionsWithQuestions: num(h, `ask_hans_session_end:${v}`),
      convs: num(h, `sum:convs:${v}`),
      questions: num(h, `sum:qs:${v}`),
      seconds: num(h, `sum:secs:${v}`),
      consentYes: num(h, `consent:${v}:yes`),
      consentNo: num(h, `consent:${v}:no`),
    }
  }
  const posterior = analyse({
    A: { k: variants.A.firstQuestionSessions, n: variants.A.exposedSessions },
    B: { k: variants.B.firstQuestionSessions, n: variants.B.exposedSessions },
    C: { k: variants.C.firstQuestionSessions, n: variants.C.exposedSessions },
  })
  return {
    id: CTA_EXPERIMENT_ID,
    since,
    daysElapsed,
    variants,
    posterior,
    verdict: decide(posterior, daysElapsed),
    subgroups: { lang: subgroup(h, 'lang', CTA_LANGS), device: subgroup(h, 'dev', CTA_DEVICES), category: subgroup(h, 'cat', CTA_CATEGORIES) },
  }
}

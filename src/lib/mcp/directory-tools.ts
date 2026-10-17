// Directory-only MCP tools: recommendations, hardware checks, VRAM estimates,
// stacks, cloud→local alternatives and hands-on test findings. Imports only
// the directory modules (never the multi-cluster content barrels — see the
// header of src/lib/power-local-llm/app-search.ts for why), so it is cheap to
// reuse from web routes and from scripts/check-mcp-tools.ts.
//
// Rule for every result here: a null/absent directory field means "not yet
// researched", never "no". Estimates are labelled as estimates.

import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import {
  DIRECTORY_DISCLAIMER,
  ARTICLE_HINT,
  AppNotFoundError,
  directoryUrlFor,
  findApp,
  hardwareFit,
  searchApps,
  summarize,
  type AppSummary,
} from '@/lib/power-local-llm/app-search'
import { CATEGORY_SUB_GROUP } from '@/lib/power-local-llm/apps/categories'
import type { OSKey, ToolRecord, UseCaseKey } from '@/lib/power-local-llm/apps/types'
import { STACK_RECIPES } from '@/lib/power-local-llm/stacks'
import { ALL_CLOUD_APPS, matchCloudApp, normalizeQuery } from '@/lib/power-local-llm/alternatives/match'
import { HANDS_ON_TEST_SLUGS, handsOnTestUrl } from '@/lib/hands-on-tests/links'
import { getHandsOnTest } from '@/lib/hands-on-tests'
import { MODEL_SIZES, QUANT_BITS, CONTEXT_OVERHEAD, BATCH_MULTIPLIER, estimateVram } from '@/lib/vram'

const SITE = 'https://www.promptquorum.com'
const VRAM_CALCULATOR_URL = `${SITE}/local-llms/vram-calculator-local-llm`

const OS_KEYS: OSKey[] = ['mac', 'win', 'linux', 'ios', 'android', 'web']

// Plain-language goal words → directory use-case tag, so find_best_apps can
// take "chat with my PDFs" without the caller knowing the taxonomy.
const GOAL_USE_CASES: [RegExp, UseCaseKey][] = [
  [/\b(pdfs?|documents?|docs|rag|knowledge|notes?|files?|papers?)\b/i, 'docs'],
  [/\b(cod(e|ing)|programm|ide|developer|copilot)\b/i, 'code'],
  [/\b(images?|pictures?|art|draw|diffusion|photos?|illustrat)/i, 'image'],
  [/\b(voice|speech|audio|tts|transcri|whisper|podcast|dictat)/i, 'audio'],
  [/\b(agent|automation|workflow|autonomous)\b/i, 'agent'],
  [/\b(phone|mobile|iphone|android|ipad)\b/i, 'phone'],
  [/\b(serve|server|api|deploy|production|multi-user|team)\b/i, 'serve'],
  [/\b(fine-?tun|train|build|develop|framework)\b/i, 'build'],
  [/\b(chat|assistant|talk|ask|conversation|llm)\b/i, 'chat'],
]

export function inferUseCase(goal: string): UseCaseKey | undefined {
  for (const [re, uc] of GOAL_USE_CASES) if (re.test(goal)) return uc
  return undefined
}

const EFFORT_PLAIN: Record<string, string> = {
  hosted: 'nothing to install (hosted/web)',
  installer: 'download-and-run installer',
  'one-command': 'one terminal command',
  'terminal-setup': 'multi-step terminal setup',
}

// --- find_best_apps ---------------------------------------------------------

export interface FindBestAppsArgs {
  goal: string
  os?: OSKey
  ramGb?: number
  vramGb?: number
  experience?: 'beginner' | 'intermediate' | 'advanced'
  offlineOnly?: boolean
  freeOnly?: boolean
  limit?: number
}

export function findBestApps(args: FindBestAppsArgs) {
  const limit = Math.min(Math.max(args.limit ?? 3, 1), 8)
  const useCase = inferUseCase(args.goal)
  const base = {
    os: args.os,
    ramGb: args.ramGb,
    vramGb: args.vramGb,
    price: args.freeOnly ? 'free' : undefined,
    locality: args.offlineOnly ? 'local' : undefined,
    sortBy: args.experience === 'beginner' ? ('easiest' as const) : undefined,
    limit: 30,
  }

  // A free-text query alone fuzzy-matches names/taglines; the inferred use case
  // is the better first filter. Fall back to the text query when it is empty.
  let found = useCase ? searchApps({ ...base, useCase }) : searchApps({ ...base, query: args.goal })
  let usedFallback = false
  if (found.totalMatches === 0 && useCase) {
    found = searchApps({ ...base, query: args.goal })
    usedFallback = true
  }

  const missingInfo: string[] = []
  if (!args.os) missingInfo.push('os (mac, win, linux, ios, android, web)')
  if (args.ramGb === undefined && args.vramGb === undefined) missingInfo.push('ramGb / vramGb — without them hardwareFit stays "unknown"')
  if (!args.experience) missingInfo.push('experience (beginner, intermediate, advanced)')

  let results = found.results as AppSummary[]
  // Beginners: drop multi-step terminal setups unless that would leave too few.
  if (args.experience === 'beginner') {
    const easy = results.filter((r) => r.installEffort !== 'terminal-setup')
    if (easy.length >= Math.min(limit, 3)) results = easy
  }

  const ranked = results.slice(0, limit).map((r, i) => {
    const tradeoffs: string[] = []
    if (r.installEffort) tradeoffs.push(`Install: ${EFFORT_PLAIN[r.installEffort] ?? r.installEffort}`)
    else tradeoffs.push('Install effort not yet verified')
    if (r.hardwareFit === 'unknown') tradeoffs.push(r.hardwareNote ?? 'Hardware fit not verified')
    if (r.price !== 'free') tradeoffs.push(`Price tier: ${r.price}`)
    if (r.listingFreshness !== 'fresh') tradeoffs.push(`Listing data is "${r.listingFreshness}" — re-check the official site`)
    if (r.upstreamStatus) tradeoffs.push(`Project status: ${r.upstreamStatus.state}`)
    return { rank: i + 1, ...r, tradeoffs }
  })

  return {
    interpretedGoal: { text: args.goal, useCase: useCase ?? null, usedTextFallback: usedFallback },
    totalMatches: found.totalMatches,
    results: ranked,
    missingInfo,
    directoryUrl: found.directoryUrl,
    categoryGuide: found.categoryGuide,
    ...(found.totalMatches === 0 ? { scope: 'scope' in found ? found.scope : undefined, suggestedCategories: 'suggestedCategories' in found ? found.suggestedCategories : undefined } : {}),
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions: `${ARTICLE_HINT} If "missingInfo" is non-empty, say which details would sharpen the answer and offer to re-run with them. Present each "tradeoffs" list honestly — never describe an "unknown" hardwareFit as a fit.`,
  }
}

// --- check_hardware_compatibility ------------------------------------------

export interface CheckHardwareArgs {
  slug: string
  os?: OSKey
  ramGb?: number
  vramGb?: number
  /** Optional model to evaluate inside the app, e.g. 8 (billion params) at Q4. */
  modelBillions?: number
  quantization?: string
  contextLength?: string
}

type Verdict = 'fits' | 'too-demanding' | 'unknown'

export function checkHardwareCompatibility(args: CheckHardwareArgs) {
  const app = findApp(args.slug)

  const platform: { status: 'supported' | 'not-listed' | 'unknown'; note: string } = !args.os
    ? { status: 'unknown', note: 'No operating system given.' }
    : app.platforms === null
      ? { status: 'unknown', note: 'Supported platforms have not been researched for this app.' }
      : app.platforms.includes(args.os)
        ? { status: 'supported', note: `${app.name} is listed for ${args.os}.` }
        : { status: 'not-listed', note: `${app.name} is not listed for ${args.os} (listed: ${app.platforms.join(', ')}).` }

  const appFit = hardwareFit(app, args.ramGb, args.vramGb)
  const summary = summarize(app, appFit, { ramGb: args.ramGb, vramGb: args.vramGb })

  // Model estimate: only when a model size is given. Unified memory (Apple
  // Silicon) counts toward VRAM, so the caller passes it as ramGb/vramGb and
  // we compare against the larger of what was provided.
  let modelCheck: Record<string, unknown> | null = null
  if (args.modelBillions !== undefined) {
    const quant = (args.quantization ?? 'Q4').toUpperCase()
    const quantBits = QUANT_BITS[quant]
    if (!quantBits) {
      modelCheck = { status: 'unknown', note: `Unknown quantization "${args.quantization}". Valid: ${Object.keys(QUANT_BITS).join(', ')}.` }
    } else {
      const ctxKey = nearestContext(args.contextLength ?? '4K')
      const est = estimateVram({ modelBillions: args.modelBillions, quantBits, contextGb: CONTEXT_OVERHEAD[ctxKey], batchGb: BATCH_MULTIPLIER['1'] })
      const available = Math.max(args.vramGb ?? 0, args.ramGb ?? 0)
      const status: Verdict = available === 0 ? 'unknown' : est.recommendedGb <= available ? 'fits' : 'too-demanding'
      modelCheck = {
        status,
        basis: 'estimate',
        modelBillions: args.modelBillions,
        quantization: quant,
        context: ctxKey,
        estimatedGb: round(est.totalGb),
        recommendedGb: round(est.recommendedGb),
        availableGb: available || null,
        note: 'Rule-of-thumb estimate (weights + context + overhead, +25% margin), not a benchmark. Real use varies by runtime and KV-cache settings; RAM size alone does not predict speed.',
      }
    }
  }

  const statuses: Verdict[] = [
    appFit,
    ...(platform.status === 'not-listed' ? (['too-demanding'] as Verdict[]) : []),
    ...(modelCheck ? [modelCheck.status as Verdict] : []),
  ]
  const overall: Verdict = statuses.includes('too-demanding') ? 'too-demanding' : statuses.every((s) => s === 'fits') && platform.status !== 'unknown' ? 'fits' : statuses.includes('fits') ? 'unknown' : 'unknown'

  let alternatives: AppSummary[] = []
  if (overall === 'too-demanding') {
    const primary = app.categories[0]
    const found = searchApps({ category: primary, os: args.os, ramGb: args.ramGb, vramGb: args.vramGb, sortBy: 'easiest', limit: 6 })
    alternatives = (found.results as AppSummary[]).filter((r) => r.slug !== app.slug && r.hardwareFit !== 'too-demanding').slice(0, 3)
  }

  return {
    app: { slug: app.slug, name: app.name },
    overall,
    platform,
    appRequirements: {
      status: appFit,
      basis: 'directory data (verified where researched; null = not researched)',
      declared: app.hardware,
      note:
        summary.hardwareNote ??
        (app.hardware?.cpuOnly ? 'cpuOnly means it can run without a GPU, not that it runs fast; speed depends on the model and your CPU.' : null),
    },
    model: modelCheck,
    alternatives,
    summary,
    calculatorUrl: VRAM_CALCULATOR_URL,
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions:
      'Report "overall" with the reason from platform / appRequirements / model. Say explicitly which parts are directory data and which are estimates. "unknown" means not verified, not "will work". Link calculatorUrl for model sizing and each alternative\'s downloadUrl/article.',
  }
}

// --- estimate_vram ----------------------------------------------------------

function nearestContext(raw: string): string {
  const key = raw.trim().toUpperCase().replace(/\s+/g, '')
  if (CONTEXT_OVERHEAD[key] !== undefined) return key
  const m = key.match(/^(\d+)K?$/)
  if (m) {
    const k = Number(m[1]) >= 1000 ? Number(m[1]) / 1024 : Number(m[1])
    const keys = Object.keys(CONTEXT_OVERHEAD).sort((a, b) => parseInt(a) - parseInt(b))
    return keys.find((c) => parseInt(c) >= k) ?? keys[keys.length - 1]
  }
  return '4K'
}

const round = (n: number) => Math.round(n * 100) / 100

export interface EstimateVramArgs {
  modelBillions: number
  quantization?: string
  contextLength?: string
  batchSize?: number
  availableGb?: number
}

export function estimateVramTool(args: EstimateVramArgs) {
  const quant = (args.quantization ?? 'Q4').toUpperCase()
  const bits = QUANT_BITS[quant]
  if (!bits) throw new AppNotFoundError(`Unknown quantization "${args.quantization}". Valid: ${Object.keys(QUANT_BITS).join(', ')}.`)
  const ctx = nearestContext(args.contextLength ?? '4K')
  const batchKey = String([1, 2, 4, 8].find((b) => b >= (args.batchSize ?? 1)) ?? 8)
  const est = estimateVram({ modelBillions: args.modelBillions, quantBits: bits, contextGb: CONTEXT_OVERHEAD[ctx], batchGb: BATCH_MULTIPLIER[batchKey] })

  let fit: Record<string, unknown> | null = null
  if (args.availableGb !== undefined) {
    const headroom = args.availableGb - est.recommendedGb
    fit = {
      availableGb: args.availableGb,
      status: headroom < 0 ? 'exceeds' : headroom < 1 ? 'tight' : 'fits',
      headroomGb: round(headroom),
    }
    if (headroom < 0) {
      // Largest quant (by bits) that would fit, if any.
      const options = Object.entries(QUANT_BITS)
        .filter(([, b]) => b < bits)
        .sort((a, b) => b[1] - a[1])
        .map(([q, b]) => ({ q, rec: estimateVram({ modelBillions: args.modelBillions, quantBits: b, contextGb: CONTEXT_OVERHEAD[ctx], batchGb: BATCH_MULTIPLIER[batchKey] }).recommendedGb }))
        .find((o) => o.rec <= args.availableGb!)
      if (options) fit.suggestion = `${options.q} should fit (about ${round(options.rec)} GB recommended) at a quality cost.`
    }
  }

  return {
    input: { modelBillions: args.modelBillions, quantization: quant, context: ctx, batchSize: Number(batchKey) },
    estimate: {
      weightsGb: round(est.baseGb),
      contextGb: round(est.contextGb),
      batchGb: round(est.batchGb),
      systemGb: est.systemGb,
      totalGb: round(est.totalGb),
      recommendedGb: round(est.recommendedGb),
    },
    fit,
    basis: 'estimate',
    caveats: [
      'Rule-of-thumb estimate, not a measurement: weights = params × bits / 8, plus a context allowance, batch allowance and 1 GB system overhead, then a 25% safety margin.',
      'Mixture-of-experts models still need all weights resident; unified-memory Macs share RAM with the OS, so leave headroom.',
      'Memory fit says nothing about speed; throughput depends on memory bandwidth and the runtime.',
    ],
    calculatorUrl: VRAM_CALCULATOR_URL,
    supportedModelSizes: Object.keys(MODEL_SIZES),
  }
}

// --- recommend_stack --------------------------------------------------------

export interface RecommendStackArgs {
  goal: string
  os?: OSKey
  ramGb?: number
  vramGb?: number
  limit?: number
}

export function recommendStack(args: RecommendStackArgs) {
  const limit = Math.min(Math.max(args.limit ?? 3, 1), 6)
  const tokens = args.goal.toLowerCase().split(/[^a-z0-9]+/).filter((t) => t.length > 1)
  const goalLower = args.goal.toLowerCase()

  const scored = STACK_RECIPES.map((r) => {
    let score = 0
    for (const tag of r.tags) {
      if (goalLower.includes(tag)) score += 2
      else if (tokens.some((t) => tag.includes(t) || t.includes(tag))) score += 1
    }
    if (goalLower.includes(r.goal.toLowerCase())) score += 3
    const osOk = !r.platforms || !args.os || r.platforms.includes(args.os)
    const memory = Math.max(args.vramGb ?? 0, args.ramGb ?? 0)
    // Hardware verdict from the recipe's numeric floor only; null floor = unknown.
    let hardware: Verdict = 'unknown'
    if (args.ramGb !== undefined || args.vramGb !== undefined) {
      const needRam = r.floor.ramGb
      const needVram = r.floor.vramGb
      const ramBad = needRam !== null && args.ramGb !== undefined && args.ramGb < needRam
      const vramBad = needVram !== null && !r.floor.cpuOnly && args.vramGb !== undefined && args.vramGb < needVram && memory < needVram
      const unresearched = (needRam === null && needVram === null) || (needRam !== null && args.ramGb === undefined && needVram === null)
      hardware = ramBad || vramBad ? 'too-demanding' : unresearched ? 'unknown' : 'fits'
    }
    return { r, score, osOk, hardware }
  })
    .filter((x) => x.osOk && x.hardware !== 'too-demanding')
    .sort((a, b) => b.score - a.score)

  const matched = scored.filter((x) => x.score > 0)
  const pool = (matched.length ? matched : scored).slice(0, limit)

  const stacks = pool.map(({ r, hardware }) => ({
    id: r.id,
    goal: r.goal,
    stack: r.stack,
    hardwareFloor: r.hardwareFloorText,
    hardwareFit: hardware,
    apps: r.appSlugs.map((slug) => {
      const app: ToolRecord | undefined = localAiApps.find((a) => a.slug === slug)
      return app ? summarize(app, hardwareFit(app, args.ramGb, args.vramGb), { ramGb: args.ramGb, vramGb: args.vramGb }) : { slug, name: slug }
    }),
    articleUrl: `${SITE}/power-local-llm/local-llm-software-directory-2026#stacks`,
  }))

  return {
    goal: args.goal,
    matchedByGoal: matched.length > 0,
    stacks,
    note: matched.length === 0 ? 'No stack matched the goal words; these are the general-purpose options that fit your hardware.' : undefined,
    directoryUrl: directoryUrlFor({}),
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions:
      'Present the top stack first, name every app with its downloadUrl, and state the hardwareFloor. A stack listed as a combination means the apps run together on one machine (usually Ollama as the runtime plus a UI). Use "hardwareFit: unknown" as "floor not compared", not as a pass.',
  }
}

// --- find_local_alternative -------------------------------------------------

export function findLocalAlternative(args: { cloudApp: string }) {
  const m = matchCloudApp(args.cloudApp)
  if (m.kind === 'hit') {
    const c = m.app
    const alternatives = c.localMatches
      .map((lm) => {
        const app = localAiApps.find((a) => a.slug === lm.slug)
        if (!app) return null
        return { tier: lm.tier, basis: lm.basis, confidence: lm.confidence, app: summarize(app, 'unknown') }
      })
      .filter((x): x is NonNullable<typeof x> => x !== null)
    return {
      matched: true,
      cloudApp: { name: c.name, vendor: c.vendor, category: c.category, summary: c.summary },
      alternatives,
      gapNote: c.gapNote ?? null,
      verifiedAt: c.verifiedAt,
      sources: c.sources,
      tierMeaning: 'Tiers are editorial judgment about tool type and workflow (closest > similar > partial), not output quality. confidence "assumption" = not yet verified.',
      disclaimer: DIRECTORY_DISCLAIMER,
      instructions: `${ARTICLE_HINT} State the gapNote when present; never claim a local app matches a cloud model's output quality.`,
    }
  }
  // Miss: offer the covered cloud apps and a directory text search, don't guess.
  const norm = normalizeQuery(args.cloudApp)
  const fallback = norm ? searchApps({ query: norm, limit: 3 }) : null
  return {
    matched: false,
    query: args.cloudApp,
    coverage: 'Curated cloud→local mappings currently cover image generation and voice/audio tools only.',
    supportedCloudApps: ALL_CLOUD_APPS.map((c) => ({ name: c.name, category: c.category })),
    directorySearch: fallback && fallback.totalMatches > 0 ? { totalMatches: fallback.totalMatches, results: fallback.results } : null,
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions:
      'No curated mapping for this cloud app. Say so; do not invent an equivalent. If "directorySearch" has results, offer them as text-search matches (not curated alternatives); otherwise point to the directory.',
  }
}

// --- get_app_alternatives ---------------------------------------------------

export function getAppAlternatives(args: { slug: string; os?: OSKey; freeOnly?: boolean; easierInstall?: boolean; ramGb?: number; vramGb?: number; limit?: number }) {
  const app = findApp(args.slug)
  const limit = Math.min(Math.max(args.limit ?? 5, 1), 10)
  const primary = app.categories[0]
  const group = primary ? CATEGORY_SUB_GROUP[primary] : null
  const found = searchApps({ category: primary, os: args.os, ramGb: args.ramGb, vramGb: args.vramGb, price: args.freeOnly ? 'free' : undefined, sortBy: args.easierInstall ? 'easiest' : 'stars', limit: 60 })
  const rank = (a: AppSummary) => {
    const sharedUses = (a.useCases ?? []).filter((u) => app.uses?.includes(u)).length
    return sharedUses
  }
  const results = (found.results as AppSummary[])
    .filter((r) => r.slug !== app.slug)
    .map((r) => ({ r, shared: rank(r) }))
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit)
    .map(({ r, shared }) => ({ ...r, whyAlternative: `same primary category (${r.categories[0] ?? group}); ${shared} shared use case${shared === 1 ? '' : 's'}` }))
  return {
    app: { slug: app.slug, name: app.name, upstreamStatus: app.upstreamStatus ?? null },
    alternatives: results,
    totalInCategory: Math.max(found.totalMatches - 1, 0),
    categoryGuide: found.categoryGuide,
    directoryUrl: found.directoryUrl,
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions: ARTICLE_HINT,
  }
}

// --- get_hands_on_test ------------------------------------------------------

export function listHandsOnTests() {
  return HANDS_ON_TEST_SLUGS.map((slug) => {
    const t = getHandsOnTest(slug, 'en')
    return { slug, name: t?.app.name ?? slug, title: t?.title ?? null, published: t?.published ?? null, url: `${SITE}${handsOnTestUrl(slug, 'en') ?? ''}` }
  })
}

export function getHandsOnTestFindings(args: { slug?: string }) {
  const tested = listHandsOnTests()
  if (!args.slug) {
    return {
      tested,
      note: 'Only these apps have a PromptQuorum hands-on test. For every other app, say it has not been hands-on tested by PromptQuorum.',
    }
  }
  const slug = args.slug.trim().toLowerCase()
  const t = getHandsOnTest(slug, 'en')
  if (!t) {
    // Distinguish "unknown app" from "app exists, not tested".
    const exists = localAiApps.some((a) => a.slug === slug)
    if (!exists) findApp(slug) // throws with did-you-mean
    return {
      tested: false,
      slug,
      message: `PromptQuorum has not hands-on tested "${slug}". Any statements about it come from the vendor or the directory listing, not from our testing.`,
      testedApps: tested,
    }
  }
  return {
    tested: true,
    slug,
    app: t.app,
    title: t.title,
    url: `${SITE}${handsOnTestUrl(slug, 'en') ?? ''}`,
    published: t.published,
    started: t.started,
    status: t.status,
    verdict: t.verdict,
    scores: t.scores.map(([dimension, score, note]) => ({ dimension, score, note })),
    tldr: t.tldr.map(([evidence, text]) => ({ evidence, text })),
    findings: t.findings.map(([id, text, area, evidence, severity]) => ({ id, text, area, evidence, severity })),
    errorsByTester: t.errors.map(([kind, text]) => ({ kind, text })),
    memoryFit: t.fit ? { memoryGb: t.fit.memory_gb, rows: t.fit.rows.map(([model, needGb, stated, evidence]) => ({ model, needGb, stated, evidence })), note: t.fit.note } : null,
    disclosure: t.disclosure,
    evidenceLegend: Object.fromEntries(Object.entries(t.evidence_labels).map(([k, v]) => [k, v.meaning])),
    instructions:
      'Keep evidence labels attached to every claim: "observed"/"measured" came from the test; "vendor-claim" was not verified by us; "tester-view" is opinion. Scores of null mean not measured, not zero. Link the url.',
  }
}

export { OS_KEYS }

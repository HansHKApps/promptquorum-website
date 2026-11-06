// Model-catalog MCP tools: "which local LLM fits my machine (and my app)?".
// Data: data/local-llm-catalog.json via src/lib/local-llm-catalog.ts (bundled at build time,
// refreshed weekly by .github/workflows/local-llm-catalog-weekly.yml).
//
// Same rules as the other directory tools: estimates are labelled as estimates, the Mac memory
// reserve is deducted exactly once (inside systemFromInputs), and "fits" says nothing about speed.
// Imports only the directory modules (never the article barrels), so it stays cheap for scripts.

import {
  localLlmCatalog,
  fitCatalogModel,
  defaultQuant,
  systemFromInputs,
  type CatalogModel,
  type CatalogTier,
  type CatalogUseCase,
  type ModelFit,
  type MemorySystem,
} from '@/lib/local-llm-catalog'
import { findApp, DIRECTORY_DISCLAIMER } from '@/lib/power-local-llm/app-search'
import type { OSKey, ToolRecord } from '@/lib/power-local-llm/apps/types'
import { MAC_OS_RESERVE_GB } from '@/lib/vram'

const SITE = 'https://www.promptquorum.com'
const GIB = 2 ** 30
const round = (n: number) => Math.round(n * 100) / 100

export type ModelNeed = 'vision' | 'tools' | 'reasoning' | 'coding' | 'embedding'
export const MODEL_NEEDS: ModelNeed[] = ['vision', 'tools', 'reasoning', 'coding', 'embedding']
export const MODEL_USE_CASES: CatalogUseCase[] = ['chat', 'code', 'agent', 'docs', 'image', 'phone', 'audio']
export const MODEL_TIERS: CatalogTier[] = ['tiny', 'small', 'mid', 'large', 'xl']

const DEFAULT_CONTEXT = 8192

// --- app <-> runtime link ---------------------------------------------------

export interface AppRuntimeLink {
  /** ollama = talks to Ollama; own-runtime = ships its own model runner/library; unknown = not researched. */
  status: 'ollama' | 'own-runtime' | 'other' | 'unknown'
  note: string
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

/**
 * How an app gets its models, from existing directory fields only (worksWith, compare.ollama,
 * engine). No new data is invented: null means not researched.
 */
export function appRuntimeLink(app: ToolRecord): AppRuntimeLink {
  const works = (app.worksWith ?? []).map(norm)
  const talksToOllama = app.slug === 'ollama' || works.includes('ollama') || app.compare?.ollama === true
  if (talksToOllama) {
    return { status: 'ollama', note: `${app.name} works with Ollama: pull the model with the ollama pull command shown, then select it in the app.` }
  }
  if (app.engine === 'builtin' || app.engine === 'both') {
    return {
      status: 'own-runtime',
      note: `${app.name} ships its own model runner and library. The model names and sizes below still apply, but download the same model inside the app (the ollama pull command is only for Ollama).`,
    }
  }
  if (app.worksWith === null && app.engine === 'TODO') {
    return { status: 'unknown', note: `How ${app.name} loads models has not been researched; confirm in its docs before relying on the Ollama command.` }
  }
  return {
    status: 'other',
    note: `${app.name} is not listed as an Ollama client in the directory (works with: ${(app.worksWith ?? []).join(', ') || 'not researched'}). Check its docs for supported model sources.`,
  }
}

// --- shared summaries -------------------------------------------------------

const capabilityList = (m: CatalogModel) => (Object.entries(m.capabilities) as [string, boolean][]).filter(([, v]) => v).map(([k]) => k)

function modelSummary(m: CatalogModel) {
  const q = defaultQuant(m)
  return {
    id: m.id,
    name: m.variant,
    company: m.company,
    parametersB: m.params_b,
    activeParametersB: m.active_params_b,
    quantization: q.name,
    downloadGib: round((q.size_bytes + q.projector_bytes) / GIB),
    contextMaxTokens: m.context_max,
    capabilities: capabilityList(m),
    bestFor: m.best_for,
    tier: m.tier,
    license: m.license,
    ollamaPull: `ollama pull ${m.family}:${q.ollama_tag}`,
    verifiedDate: m.verified_date,
    sourceUrl: m.source_url,
  }
}

function fitSummary(f: ModelFit) {
  return {
    verdict: f.verdict,
    needsGib: f.totalGib,
    usableGib: f.usableGib,
    headroomGib: f.headroomGib,
    contextTokens: f.contextTokens,
    maxContextTokens: f.maxContextTokens,
    breakdownGib: { weights: f.weightsGib, contextCache: f.kvGib, runtime: f.overheadGib },
    cacheBasis: f.kvBasis === 'kv-arch' ? (f.kvExactness === 'upper-bound' ? 'estimate (conservative upper bound)' : 'estimate (from model architecture)') : f.kvBasis === 'none' ? 'not applicable' : 'estimate (flat table)',
  }
}

/** Smallest total machine memory (GB) on which this fit would work, for "you would need" hints. */
function minTotalMemoryGb(system: MemorySystem, f: ModelFit): number {
  const reserve = system.kind === 'mac-unified' ? MAC_OS_RESERVE_GB : system.reserve_gb ?? 0
  return Math.ceil(f.totalGib + reserve)
}

const VERDICT_ORDER: Record<string, number> = { fits: 0, tight: 1, 'too-large': 2 }

// --- recommend_models -------------------------------------------------------

export interface RecommendModelsArgs {
  os?: OSKey
  /** Mac: TOTAL unified memory. Windows/Linux: system RAM (used only when no vramGb is given). */
  ramGb?: number
  /** Dedicated GPU VRAM (Windows/Linux). */
  vramGb?: number
  useCase?: CatalogUseCase
  needs?: ModelNeed[]
  /** Directory slug; adds how that app gets its models. */
  app?: string
  contextTokens?: number
  limit?: number
}

export function recommendModels(args: RecommendModelsArgs) {
  const catalogInfo = { variants: localLlmCatalog.models.length, lastUpdated: localLlmCatalog.last_updated }
  const resolved = systemFromInputs(args)
  if (!resolved) {
    return {
      status: 'needs-hardware' as const,
      note: 'Give the machine\'s memory so fit can be checked: on a Mac pass os "mac" and ramGb (total unified memory, e.g. 24); with a dedicated GPU pass vramGb; CPU-only machines pass ramGb. Ask the user rather than guessing.',
      catalog: catalogInfo,
    }
  }
  const { system, label } = resolved
  const appInfo = args.app ? findApp(args.app) : null // throws AppNotFoundError with did-you-mean
  const needs = args.needs ?? []
  const contextTokens = Math.min(Math.max(Math.round(args.contextTokens ?? DEFAULT_CONTEXT), 512), 1_048_576)
  const limit = Math.min(Math.max(args.limit ?? 5, 1), 8)

  const pool = localLlmCatalog.models.filter((m) => {
    // Embedding models are RAG plumbing, not chat models: only offered when asked for.
    if (m.capabilities.embedding && !needs.includes('embedding')) return false
    if (args.useCase && !m.best_for.includes(args.useCase)) return false
    return needs.every((n) => m.capabilities[n])
  })

  const fitted = pool.map((m) => ({ m, fit: fitCatalogModel(m, system, contextTokens) }))
  const runnable = fitted
    .filter((x) => x.fit.verdict !== 'too-large')
    // Fits before tight; then larger models first (a size proxy, not a benchmark); then Ollama popularity.
    .sort((a, b) => VERDICT_ORDER[a.fit.verdict] - VERDICT_ORDER[b.fit.verdict] || b.m.params_b - a.m.params_b || a.m.rank.ollama_popularity_rank - b.m.rank.ollama_popularity_rank)
  const tooLarge = fitted
    .filter((x) => x.fit.verdict === 'too-large')
    .sort((a, b) => a.fit.totalGib - b.fit.totalGib)

  const recommendations = runnable.slice(0, limit).map(({ m, fit }) => ({ ...modelSummary(m), fit: fitSummary(fit) }))
  const next = tooLarge.slice(0, 3).map(({ m, fit }) => ({
    ...modelSummary(m),
    needsGib: fit.totalGib,
    wouldNeedTotalMemoryGb: minTotalMemoryGb(system, fit),
  }))

  return {
    status: recommendations.length ? ('ok' as const) : ('none-fit' as const),
    hardware: {
      description: label,
      usableForModelGib: round(runnable[0]?.fit.usableGib ?? fitted[0]?.fit.usableGib ?? 0),
      ...(system.kind === 'mac-unified' ? { macOsReserveGb: MAC_OS_RESERVE_GB } : {}),
    },
    contextTokens,
    filters: { useCase: args.useCase ?? null, needs },
    app: appInfo ? { slug: appInfo.slug, name: appInfo.name, ...appRuntimeLink(appInfo) } : null,
    recommendations,
    ...(next.length ? { onlyJustTooLarge: next } : {}),
    ordering: 'Models that fit comfortably come first, then tight fits; within each, larger models first. Size is a rough proxy for capability, not a benchmark result.',
    basis: 'Download sizes are exact bytes of the Ollama builds (verifiedDate each). Memory needed = weights + context cache + ~1 GiB runtime allowance; the context cache is an estimate from the model architecture.',
    caveats: [
      'Fit is about memory, not speed. Tokens per second depend on memory bandwidth, the runtime and the model.',
      'Mixture-of-experts models still keep every expert in memory; the active-parameter count only affects speed.',
      ...(system.kind === 'mac-unified' ? [`On a Mac, ${MAC_OS_RESERVE_GB} GB of unified memory is kept free for macOS before checking fit.`] : []),
      'Vision models include the image projector in the download size.',
    ],
    catalog: catalogInfo,
    calculatorUrl: `${SITE}/local-llms/vram-calculator-local-llm`,
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions:
      'Name the recommended model, its quantization, download size and ollamaPull command, and say how much of the usable memory it needs. State that sizes are verified downloads and the context-cache part is an estimate. If app is set, follow its runtime note. Never claim a model is "best" - only that it fits and what it supports. If status is none-fit, say so and offer the onlyJustTooLarge options with the memory they would need.',
  }
}

// --- list_local_models ------------------------------------------------------

export interface ListLocalModelsArgs {
  tier?: CatalogTier
  capability?: ModelNeed
  useCase?: CatalogUseCase
  /** Only models whose default download is at most this many GiB. */
  maxDownloadGib?: number
  limit?: number
}

export function listLocalModels(args: ListLocalModelsArgs) {
  const limit = Math.min(Math.max(args.limit ?? 30, 1), 50)
  const rows = localLlmCatalog.models
    .filter((m) => !args.tier || m.tier === args.tier)
    .filter((m) => !args.capability || m.capabilities[args.capability])
    .filter((m) => !args.useCase || m.best_for.includes(args.useCase))
    .map((m) => ({ m, s: modelSummary(m) }))
    .filter(({ s }) => args.maxDownloadGib === undefined || s.downloadGib <= args.maxDownloadGib)
    .sort((a, b) => a.s.downloadGib - b.s.downloadGib)
  return {
    totalMatches: rows.length,
    models: rows.slice(0, limit).map(({ s }) => s),
    catalog: { variants: localLlmCatalog.models.length, lastUpdated: localLlmCatalog.last_updated },
    note: 'A curated list of widely used local models (one default quantization each), not every model that exists. Use recommend_models to check which fit a specific machine.',
    disclaimer: DIRECTORY_DISCLAIMER,
  }
}

// --- compact helper for other tools ----------------------------------------

/**
 * Top-N models that fit the given hardware, in a compact form for embedding in other tool results
 * (check_hardware_compatibility, recommend_stack). Returns null when no memory was given, so callers
 * never present a guess.
 */
export function suggestModelsForHardware(args: { os?: OSKey; ramGb?: number; vramGb?: number; useCase?: CatalogUseCase; app?: ToolRecord }, n = 3) {
  const resolved = systemFromInputs(args)
  if (!resolved) return null
  const pool = localLlmCatalog.models.filter((m) => !m.capabilities.embedding && (!args.useCase || m.best_for.includes(args.useCase)))
  const fitted = pool
    .map((m) => ({ m, fit: fitCatalogModel(m, resolved.system, DEFAULT_CONTEXT) }))
    .filter((x) => x.fit.verdict !== 'too-large')
    .sort((a, b) => VERDICT_ORDER[a.fit.verdict] - VERDICT_ORDER[b.fit.verdict] || b.m.params_b - a.m.params_b || a.m.rank.ollama_popularity_rank - b.m.rank.ollama_popularity_rank)
    .slice(0, n)
  return {
    basis: `Models from the PromptQuorum catalog that fit ${resolved.label} at ${DEFAULT_CONTEXT / 1024}K context (memory fit only, not speed; download sizes verified, context cache estimated).`,
    ...(args.app ? { runtime: appRuntimeLink(args.app) } : {}),
    models: fitted.map(({ m, fit }) => ({
      name: m.variant,
      quantization: defaultQuant(m).name,
      needsGib: fit.totalGib,
      verdict: fit.verdict,
      ollamaPull: `ollama pull ${m.family}:${defaultQuant(m).ollama_tag}`,
    })),
    moreWith: 'recommend_models',
  }
}

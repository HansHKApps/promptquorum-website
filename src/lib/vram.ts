// Single source of truth for the VRAM estimate. Used by the VRAM calculator
// (src/components/VramCalculator.tsx) and the MCP estimate_vram tool
// (src/lib/mcp/directory-tools.ts) so the two can never disagree.
//
// This is a rule-of-thumb ESTIMATE (weights + context + batch + 1 GB system,
// plus a 25% safety margin), not a measurement: real usage varies by runtime,
// KV-cache precision and architecture.

export const MODEL_SIZES: Record<string, number> = {
  '1B': 1, '3B': 3, '4B': 4, '7B': 7, '8B': 8, '13B': 13, '20B': 20, '22B': 22,
  '24B': 24, '27B': 27, '30B': 30, '32B': 32, '70B': 70, '109B': 109, '120B': 120, '405B': 405,
}

export const QUANT_BITS: Record<string, number> = {
  FP16: 16, Q8: 8, Q6: 6, Q5: 5, Q4: 4, Q3: 3, Q2: 2,
}

export const CONTEXT_OVERHEAD: Record<string, number> = {
  '2K': 0.5, '4K': 1.5, '8K': 2.5, '16K': 4, '32K': 6, '128K': 12,
}

export const BATCH_MULTIPLIER: Record<string, number> = {
  '1': 0, '2': 0.5, '4': 1.5, '8': 3,
}

const SYSTEM_GB = 1
const SAFETY_FACTOR = 1.25

export interface VramEstimate {
  baseGb: number
  contextGb: number
  batchGb: number
  systemGb: number
  totalGb: number
  /** Total with the 25% safety margin, rounded up to the nearest 0.25 GB — the number to plan hardware around. */
  recommendedGb: number
}

export function estimateVram(args: { modelBillions: number; quantBits: number; contextGb: number; batchGb: number }): VramEstimate {
  const baseGb = (args.modelBillions * args.quantBits) / 8
  const totalGb = baseGb + args.contextGb + args.batchGb + SYSTEM_GB
  const recommendedGb = Math.ceil(totalGb * SAFETY_FACTOR * 4) / 4
  return { baseGb, contextGb: args.contextGb, batchGb: args.batchGb, systemGb: SYSTEM_GB, totalGb, recommendedGb }
}

/**
 * Owner rule (2026-11-06): on a Mac, plan at least 8 GB of unified memory for
 * macOS itself. Every "does it fit" check for a Mac deducts this flat amount
 * from the machine's total memory before comparing it to a model or app.
 */
export const MAC_OS_RESERVE_GB = 8

/** Unified memory left for models/apps on a Mac after the flat macOS reserve. */
export function macUsableGb(unifiedGb: number): number {
  return Math.max(unifiedGb - MAC_OS_RESERVE_GB, 0)
}

// ---------------------------------------------------------------------------
// Catalog-based fit check (data/local-llm-catalog.json)
//
// Unlike estimateVram() above, which guesses weights from parameters x bits,
// this uses the REAL download size of a specific quantization (Ollama registry
// manifest bytes) plus a KV-cache estimate from the model's architecture.
// Memory is compared in GiB (bytes / 2^30) because machine memory is binary;
// Ollama's "14GB" label is decimal, so never compare it to RAM directly.
// ---------------------------------------------------------------------------

const GIB = 2 ** 30

/** Runtime/compute-buffer allowance on top of weights + KV cache. Assumption, same 1 GB as SYSTEM_GB. */
export const RUNTIME_OVERHEAD_GIB = 1

/** Headroom below this (GiB) is reported as "tight" rather than "fits". */
export const TIGHT_HEADROOM_GIB = 1

/** One run of layers that cache KV the same way. */
export interface KvGroup {
  layers: number
  kvHeads: number
  keyLength: number
  valueLength: number
  /** Sliding-window size in tokens (cache is capped at this), or null for full attention. */
  windowTokens: number | null
}

/**
 * Architecture inputs for KV-cache size, derived from the GGUF header of the
 * file Ollama serves (scripts/lib/catalog-sources.mjs buildKvGroups):
 * per-layer KV heads, sliding-window pattern, full-attention interval.
 */
export interface KvArch {
  groups: KvGroup[]
}

export type FitVerdict = 'fits' | 'tight' | 'too-large'

export interface FitResult {
  verdict: FitVerdict
  weightsGib: number
  /** KV cache at the requested context. */
  kvGib: number
  overheadGib: number
  totalGib: number
  usableGib: number
  /** usable - total; negative when the model does not fit. */
  headroomGib: number
  /** Largest context (tokens) that still fits, or null when weights alone do not fit or kv is unknown. */
  maxContextTokens: number | null
  /**
   * 'kv-arch' = computed from the model's layer groups; 'flat-table' = fallback to CONTEXT_OVERHEAD;
   * 'none' = the model keeps no per-context cache (embedding models). All are estimates.
   */
  kvBasis: 'kv-arch' | 'flat-table' | 'none'
}

/**
 * KV cache for `contextTokens` at fp16 (2 bytes/element), summed over layer groups:
 *   layers x kvHeads x (keyLength + valueLength) x min(contextTokens, window) x bytes.
 * Sliding-window groups stop growing at their window.
 */
export function kvCacheGib(kv: KvArch, contextTokens: number, bytesPerElement = 2): number {
  let bytes = 0
  for (const g of kv.groups) {
    const cached = g.windowTokens == null ? contextTokens : Math.min(contextTokens, g.windowTokens)
    bytes += g.layers * g.kvHeads * (g.keyLength + g.valueLength) * cached * bytesPerElement
  }
  return bytes / GIB
}

function flatContextGib(contextTokens: number): number {
  const keys = Object.entries({ '2K': 2048, '4K': 4096, '8K': 8192, '16K': 16384, '32K': 32768, '128K': 131072 })
  const hit = keys.find(([, tokens]) => contextTokens <= tokens) ?? keys[keys.length - 1]
  return CONTEXT_OVERHEAD[hit[0]]
}

export function fitModel(args: {
  /** Exact bytes of the weights file(s) that will be loaded (incl. vision projector). */
  sizeBytes: number
  kv: KvArch | null
  /** True for models with no per-context cache (embedding models): context then costs nothing. */
  noContextCost?: boolean
  contextTokens: number
  /** The model's own context limit; caps maxContextTokens. Required to report one. */
  contextMax?: number
  /** Memory the model may use: macUsableGb(total) for a Mac, total minus reserve otherwise. */
  usableGib: number
}): FitResult {
  const weightsGib = args.sizeBytes / GIB
  const kvBasis: FitResult['kvBasis'] = args.noContextCost ? 'none' : args.kv ? 'kv-arch' : 'flat-table'
  const kvGib = args.noContextCost ? 0 : args.kv ? kvCacheGib(args.kv, args.contextTokens) : flatContextGib(args.contextTokens)
  const totalGib = weightsGib + kvGib + RUNTIME_OVERHEAD_GIB
  const headroomGib = args.usableGib - totalGib
  const verdict: FitVerdict = headroomGib < 0 ? 'too-large' : headroomGib < TIGHT_HEADROOM_GIB ? 'tight' : 'fits'

  // Largest context that still fits. KV is piecewise-linear (windows cap growth), so bisect.
  let maxContextTokens: number | null = null
  const roomForKv = args.usableGib - weightsGib - RUNTIME_OVERHEAD_GIB
  if (args.kv && args.contextMax && roomForKv > 0) {
    if (kvCacheGib(args.kv, args.contextMax) <= roomForKv) maxContextTokens = args.contextMax
    else {
      let lo = 0
      let hi = args.contextMax
      while (hi - lo > 1) {
        const mid = Math.floor((lo + hi) / 2)
        if (kvCacheGib(args.kv, mid) <= roomForKv) lo = mid
        else hi = mid
      }
      maxContextTokens = lo
    }
  }

  const r = (n: number) => Math.round(n * 100) / 100
  return {
    verdict,
    weightsGib: r(weightsGib),
    kvGib: r(kvGib),
    overheadGib: RUNTIME_OVERHEAD_GIB,
    totalGib: r(totalGib),
    usableGib: r(args.usableGib),
    headroomGib: r(headroomGib),
    maxContextTokens,
    kvBasis,
  }
}

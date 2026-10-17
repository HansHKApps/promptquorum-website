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

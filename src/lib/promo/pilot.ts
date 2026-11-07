// The promo-slot pilot: which pages carry which slot, and which pages are the matched controls.
// Pages are keyed by their English path; the same entry applies to all 8 locale versions (/de/..., /fr/..., ...).
// 25 page groups: P1-P4 on 5 article groups each, P5 on 5 hub/index pages. Source: GSC, 28 days to 2026-11-07.
// Off by default: the pilot only runs when NEXT_PUBLIC_PROMO_PILOT === 'true' (and Ask Hans slots also need Ask Hans on).
import type { PromoPlacement, PromoTarget } from './types'

export interface PilotEntry {
  placement: PromoPlacement
  target: PromoTarget
}

const LL = '/local-llms/'
const PL = '/power-local-llm/'
const PE = '/prompt-engineering/'

export const PILOT_GROUPS: Readonly<Record<string, PilotEntry>> = {
  // local-llms
  [LL + 'apple-silicon-m5-local-llm']: { placement: 'P1', target: 'power-mode' },
  [LL + 'local-llm-hardware-guide']: { placement: 'P2', target: 'power-mode' },
  [LL + 'best-amd-gpus-local-llm']: { placement: 'P3', target: 'power-mode' },
  [LL + '70b-models-consumer-hardware']: { placement: 'P4', target: 'power-mode' },
  [LL + 'how-to-install-ollama']: { placement: 'P4', target: 'directory' },
  [LL + 'top-open-source-models-ollama']: { placement: 'P3', target: 'directory' },
  [LL + 'small-local-llm-models']: { placement: 'P2', target: 'directory' },
  [LL + 'what-are-local-llms']: { placement: 'P1', target: 'directory' },
  // power-local-llm
  [PL + 'lm-studio-review']: { placement: 'P1', target: 'directory' },
  [PL + 'best-mac-for-local-ai-2026']: { placement: 'P2', target: 'directory' },
  [PL + 'strata-review']: { placement: 'P3', target: 'directory' },
  [PL + 'apple-mlx-vs-nvidia-cuda-local-llm-2026']: { placement: 'P4', target: 'mcp' },
  [PL + 'koboldcpp-review']: { placement: 'P1', target: 'mcp' },
  [PL + 'local-whisper-stt-comparison']: { placement: 'P2', target: 'directory' },
  [PL + 'draw-things-review']: { placement: 'P3', target: 'directory' },
  [PL + 'pocketpal-ai-review']: { placement: 'P4', target: 'directory' },
  // prompt-engineering
  [PE + 'context-windows-explained-why-ai-forgets']: { placement: 'P1', target: 'ask-hans' },
  [PE + 'tokens-costs-limits-economics-of-ai-prompting']: { placement: 'P2', target: 'ask-hans' },
  [PE + 'system-prompt-vs-user-prompt-whats-the-difference']: { placement: 'P3', target: 'ask-hans' },
  [PE + 'fundamentals-of-prompt-optimization']: { placement: 'P4', target: 'ask-hans' },
  // hubs / index pages (P5)
  '/local-llms': { placement: 'P5', target: 'directory' },
  '/power-local-llm': { placement: 'P5', target: 'ask-hans' },
  '/prompt-engineering': { placement: 'P5', target: 'directory' },
  '/prompt-bites': { placement: 'P5', target: 'ask-hans' },
  '/directory': { placement: 'P5', target: 'ask-hans' },
}

/** Matched controls (no slot), paired with the article groups above by cluster and impressions. Hubs have none. */
export const PILOT_CONTROLS: Readonly<Record<string, string>> = {
  [LL + 'apple-silicon-m5-local-llm']: LL + 'fastest-local-llms-low-end-pcs',
  [LL + 'local-llm-hardware-guide']: LL + 'llm-quantization-explained',
  [LL + 'best-amd-gpus-local-llm']: LL + 'best-budget-gpus-local-llm',
  [LL + '70b-models-consumer-hardware']: LL + 'best-mini-pcs-local-llm',
  [LL + 'how-to-install-ollama']: LL + 'how-to-install-lm-studio',
  [LL + 'top-open-source-models-ollama']: LL + 'best-local-llms-for-coding',
  [LL + 'small-local-llm-models']: LL + 'best-cpu-only-llm',
  [LL + 'what-are-local-llms']: LL + 'best-local-llms-2026',
  [PL + 'lm-studio-review']: PL + 'locally-uncensored-review',
  [PL + 'best-mac-for-local-ai-2026']: PL + 'best-local-llm-apps-android-2026',
  [PL + 'strata-review']: PL + 'hiwaifu-review',
  [PL + 'apple-mlx-vs-nvidia-cuda-local-llm-2026']: PL + 'best-local-llm-apps-iphone-2026',
  [PL + 'koboldcpp-review']: PL + 'omlx-review',
  [PL + 'local-whisper-stt-comparison']: PL + 'llama-cpp-explained',
  [PL + 'draw-things-review']: PL + 'run-ai-on-tablet-ipad-android',
  [PL + 'pocketpal-ai-review']: PL + 'best-local-ai-app-low-end-pc',
  [PE + 'context-windows-explained-why-ai-forgets']: PE + '5-building-blocks-every-prompt-needs',
  [PE + 'tokens-costs-limits-economics-of-ai-prompting']: PE + 'knowledge-cutoffs-and-geo',
  [PE + 'system-prompt-vs-user-prompt-whats-the-difference']: PE + 'negative-prompting',
  [PE + 'fundamentals-of-prompt-optimization']: PE + 'ai-limitations-what-llms-cant-do',
}

const LOCALE_PREFIX = /^\/(?:de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/

/** Pilot entry for a URL path in any locale, or null. */
export function pilotEntryFor(pathname: string): PilotEntry | null {
  const key = pathname.replace(LOCALE_PREFIX, '').replace(/\/+$/, '') || '/'
  return PILOT_GROUPS[key] ?? null
}

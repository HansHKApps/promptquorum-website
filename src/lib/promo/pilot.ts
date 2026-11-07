// The promo-slot pilot: which pages carry which slot, and which pages are the matched controls.
// Pages are keyed by their English path; the same entry applies to all 8 locale versions (/de/..., /fr/..., ...).
// 65 page groups: P1-P4 on 15 article groups each (60), P5 on the 5 hubs. Started with 25 (20 articles + 5 hubs), tripled the article groups. Source: GSC, 28 days to 2026-11-07.
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
  [LL + 'open-webui-review']: { placement: 'P1', target: 'directory' },
  [LL + 'galaxy-s26-local-ai-on-device-2026']: { placement: 'P1', target: 'directory' },
  [LL + 'apple-silicon-local-llm-guide-2026']: { placement: 'P1', target: 'power-mode' },
  [LL + 'multi-gpu-local-llms']: { placement: 'P1', target: 'power-mode' },
  [LL + 'best-local-llm-frontends']: { placement: 'P2', target: 'directory' },
  [LL + 'quantization-levels-comparison']: { placement: 'P2', target: 'directory' },
  [LL + 'cloud-gpu-rental-comparison-2026']: { placement: 'P2', target: 'power-mode' },
  [LL + 'mlx-vs-ollama-vs-llama-cpp-mac']: { placement: 'P2', target: 'power-mode' },
  [LL + 'qwen-local-deployment-guide-2026']: { placement: 'P3', target: 'directory' },
  [LL + 'cherry-studio-ai-desktop-client']: { placement: 'P3', target: 'directory' },
  [LL + 'best-gpus-for-local-llms']: { placement: 'P3', target: 'power-mode' },
  [LL + 'm5-pro-max-llm-benchmarks-2026']: { placement: 'P3', target: 'power-mode' },
  [LL + 'ollama-vs-lm-studio']: { placement: 'P4', target: 'directory' },
  [LL + 'sillytavern-review']: { placement: 'P4', target: 'directory' },
  [LL + 'nvidia-dgx-spark-local-ai-workstation']: { placement: 'P4', target: 'power-mode' },
  [LL + 'how-much-unified-memory-for-local-llm']: { placement: 'P4', target: 'power-mode' },
  // power-local-llm
  [PL + 'lm-studio-review']: { placement: 'P1', target: 'directory' },
  [PL + 'best-mac-for-local-ai-2026']: { placement: 'P2', target: 'directory' },
  [PL + 'strata-review']: { placement: 'P3', target: 'directory' },
  [PL + 'apple-mlx-vs-nvidia-cuda-local-llm-2026']: { placement: 'P4', target: 'mcp' },
  [PL + 'koboldcpp-review']: { placement: 'P1', target: 'mcp' },
  [PL + 'local-whisper-stt-comparison']: { placement: 'P2', target: 'directory' },
  [PL + 'draw-things-review']: { placement: 'P3', target: 'directory' },
  [PL + 'pocketpal-ai-review']: { placement: 'P4', target: 'directory' },
  [PL + 'local-ai-app-non-technical-users']: { placement: 'P1', target: 'directory' },
  [PL + 'ollama-vision-models-review']: { placement: 'P1', target: 'directory' },
  [PL + 'librechat-review']: { placement: 'P1', target: 'directory' },
  [PL + 'lemonade-review']: { placement: 'P1', target: 'directory' },
  [PL + 'kilo-code-review']: { placement: 'P2', target: 'directory' },
  [PL + 'best-local-models-tool-calling-2026']: { placement: 'P2', target: 'directory' },
  [PL + 'local-vision-models-llava-ollama-2026']: { placement: 'P2', target: 'mcp' },
  [PL + 'opencode-review']: { placement: 'P2', target: 'mcp' },
  [PL + 'faster-whisper-review']: { placement: 'P3', target: 'directory' },
  [PL + 'dify-ai-workflow-builder-review']: { placement: 'P3', target: 'directory' },
  [PL + 'best-local-llm-ide-plugins-2026']: { placement: 'P3', target: 'mcp' },
  [PL + 'deepseek-vs-qwen-coding-local-2026']: { placement: 'P3', target: 'mcp' },
  [PL + 'risuai-review']: { placement: 'P4', target: 'directory' },
  [PL + 'real-esrgan-ai-image-upscaler-review']: { placement: 'P4', target: 'directory' },
  [PL + 'continue-dev-review']: { placement: 'P4', target: 'directory' },
  [PL + 'easiest-local-ai-app-windows-mac-linux']: { placement: 'P4', target: 'directory' },
  // prompt-engineering
  [PE + 'context-windows-explained-why-ai-forgets']: { placement: 'P1', target: 'ask-hans' },
  [PE + 'tokens-costs-limits-economics-of-ai-prompting']: { placement: 'P2', target: 'ask-hans' },
  [PE + 'system-prompt-vs-user-prompt-whats-the-difference']: { placement: 'P3', target: 'ask-hans' },
  [PE + 'fundamentals-of-prompt-optimization']: { placement: 'P4', target: 'ask-hans' },
  [PE + 'structured-output-and-json-mode']: { placement: 'P1', target: 'ask-hans' },
  [PE + 'co-star-framework']: { placement: 'P1', target: 'ask-hans' },
  [PE + 'prompting-across-languages']: { placement: 'P2', target: 'ask-hans' },
  [PE + 'how-to-evaluate-prompt-quality']: { placement: 'P2', target: 'ask-hans' },
  [PE + 'zero-shot-vs-few-shot']: { placement: 'P3', target: 'ask-hans' },
  [PE + 'build-a-prompt-library']: { placement: 'P3', target: 'ask-hans' },
  [PE + 'how-llms-actually-work']: { placement: 'P4', target: 'ask-hans' },
  [PE + 'ai-hallucinations-why-ai-makes-things-up']: { placement: 'P4', target: 'ask-hans' },
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
  // second wave (3x pilot)
  [LL + 'open-webui-review']: LL + 'best-ai-coding-assistant-local-llm',
  [LL + 'galaxy-s26-local-ai-on-device-2026']: LL + 'troubleshooting-local-llm-setup',
  [LL + 'apple-silicon-local-llm-guide-2026']: LL + 'best-amd-mini-pc-local-llm-2026',
  [LL + 'multi-gpu-local-llms']: LL + 'lm-studio-advanced-features',
  [LL + 'best-local-llm-frontends']: LL + 'run-qwen-locally-guide-2026',
  [LL + 'quantization-levels-comparison']: LL + 'local-llms-with-vscode-cursor',
  [LL + 'cloud-gpu-rental-comparison-2026']: LL + 'best-beginner-local-llm-models',
  [LL + 'mlx-vs-ollama-vs-llama-cpp-mac']: LL + 'local-llm-model-updates-2026',
  [LL + 'qwen-local-deployment-guide-2026']: LL + 'best-local-llms-for-creative-writing',
  [LL + 'cherry-studio-ai-desktop-client']: LL + 'ollama-command-guide',
  [LL + 'best-gpus-for-local-llms']: LL + 'local-llm-security-privacy-checklist',
  [LL + 'm5-pro-max-llm-benchmarks-2026']: LL + 'qwen-vs-llama-vs-mistral',
  [LL + 'ollama-vs-lm-studio']: LL + 'best-local-reasoning-model-deepseek-r1-2026',
  [LL + 'sillytavern-review']: LL + 'local-llm-limitations',
  [LL + 'nvidia-dgx-spark-local-ai-workstation']: LL + 'local-llm-on-laptop',
  [LL + 'how-much-unified-memory-for-local-llm']: LL + 'long-context-local-llms',
  [PL + 'local-ai-app-non-technical-users']: PL + 'fooocus-review',
  [PL + 'ollama-vision-models-review']: PL + 'swerve-ai-review',
  [PL + 'librechat-review']: PL + 'mobile-llm-models-phi4-gemma-smollm',
  [PL + 'lemonade-review']: PL + 'unsloth-review',
  [PL + 'kilo-code-review']: PL + 'stableswarmui-review',
  [PL + 'best-local-models-tool-calling-2026']: PL + 'litellm-review',
  [PL + 'local-vision-models-llava-ollama-2026']: PL + 'tgpt-review',
  [PL + 'opencode-review']: PL + 'stable-diffusion-forge-review',
  [PL + 'faster-whisper-review']: PL + 'agnai-review',
  [PL + 'dify-ai-workflow-builder-review']: PL + 'jan-review',
  [PL + 'best-local-llm-ide-plugins-2026']: PL + 'automatic1111-review',
  [PL + 'deepseek-vs-qwen-coding-local-2026']: PL + 'whisper-cpp-review',
  [PL + 'risuai-review']: PL + 'best-laptop-for-local-llm',
  [PL + 'real-esrgan-ai-image-upscaler-review']: PL + 'best-gpu-buying-guide-local-llm-2026',
  [PL + 'continue-dev-review']: PL + 'windsurf-review',
  [PL + 'easiest-local-ai-app-windows-mac-linux']: PL + 'local-ai-workstation-build-guide',
  [PE + 'structured-output-and-json-mode']: PE + 'temperature-and-top-p-control-ai-creativity',
  [PE + 'co-star-framework']: PE + 'open-source-vs-proprietary-llms',
  [PE + 'prompting-across-languages']: PE + 'googles-prompting-guide',
  [PE + 'how-to-evaluate-prompt-quality']: PE + 'constrained-prompting',
  [PE + 'zero-shot-vs-few-shot']: PE + 'faster-ai-answers-how-to-prompt-for-speed',
  [PE + 'build-a-prompt-library']: PE + 'rtf-framework',
  [PE + 'how-llms-actually-work']: PE + 'best-prompt-testing-evaluation-tools',
  [PE + 'ai-hallucinations-why-ai-makes-things-up']: PE + 'persona-prompting',
}

const LOCALE_PREFIX = /^\/(?:de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/

/** Pilot entry for a URL path in any locale, or null. */
export function pilotEntryFor(pathname: string): PilotEntry | null {
  const key = pathname.replace(LOCALE_PREFIX, '').replace(/\/+$/, '') || '/'
  return PILOT_GROUPS[key] ?? null
}

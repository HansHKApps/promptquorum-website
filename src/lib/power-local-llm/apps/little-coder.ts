// Local AI App Directory — little-coder (layer: code-development — coding agent for small local models)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/itayinbarr/little-coder, the original
// (2026-04-11, 2.6k stars) — several forks/derivatives share the exact name
// (mirstan, akaempf) or a near-identical one (little-coder-extended); those
// are not distinct projects — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'little-coder',
  name: 'little-coder',
  categories: ['code-assistants-ide-plugins', 'autonomous-agents'],
  interfaces: ['cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio'],
  engine: 'external',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: 8, cpuOnly: false, variesByModel: true }, // built specifically to get useful coding-agent behavior out of small local models on consumer GPUs — the project's own Terminal-Bench result runs an 8GB laptop GPU, but the real floor depends on the model chosen, verified 2026-09-18
  stars: 2600, // verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'github.com/itayinbarr/little-coder',
  reviewSlug: 'little-coder-review', // dedicated PromptQuorum review — added 2026-09-19
  tagline: {
    en: 'Coding agent CLI tuned specifically to get strong results out of small local LLMs on Ollama or LM Studio',
    de: 'Coding-Agent-CLI, speziell darauf abgestimmt, mit kleinen lokalen LLMs auf Ollama oder LM Studio starke Ergebnisse zu erzielen',
    fr: 'CLI d’agent de codage spécialement conçu pour obtenir de bons résultats avec de petits LLM locaux sur Ollama ou LM Studio',
    ja: 'OllamaやLM Studio上の小型ローカルLLMから高い成果を引き出すよう specifically 調整されたコーディングエージェントCLI',
    zh: '专为在Ollama或LM Studio上运行的小型本地LLM优化的编码智能体命令行工具',
    es: 'CLI de agente de codificación ajustado específicamente para obtener buenos resultados con LLMs locales pequeños en Ollama o LM Studio',
    pt: 'CLI de agente de codificação ajustado especificamente para obter bons resultados com LLMs locais pequenos no Ollama ou LM Studio',
    ar: 'أداة سطر أوامر لوكيل برمجي مُهيّأة خصيصًا لتحقيق نتائج قوية من نماذج لغوية محلية صغيرة على Ollama أو LM Studio',
    ko: 'Ollama나 LM Studio에서 작은 로컬 LLM으로도 좋은 결과를 내도록 특별히 튜닝된 코딩 에이전트 CLI',
  },
  pqReview: { date: '2026-09-20', version: 'v1.20.0', versionSourceUrl: 'https://github.com/itayinbarr/little-coder/releases/tag/v1.20.0' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { localLlm: true, ollama: true, agentMode: true, codeExecution: true, webBrowsing: true },
  lastVerifiedDate: '2026-09-18',
}

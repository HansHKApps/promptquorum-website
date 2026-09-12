// Local AI App Directory — Docker Model Runner (layer: runtime)
// New tile — genuinely missing from the directory (no prior file, no git history).
// Verified via docker.com's own product page and blog: local inference runs as a
// native host process (llama.cpp on CPU/Apple Silicon, vLLM for GPU-backed serving),
// exposed through an OpenAI-compatible local endpoint — not a cloud passthrough.
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'docker-model-runner',
  name: 'Docker Model Runner',
  reviewSlug: 'docker-model-runner-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  categories: ['runtimes-managers'],
  interfaces: ['cli', 'desktop'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'Proprietary (bundled with Docker Desktop)',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-13',
  status: 'listed',
  uses: ['serve', 'build'],
  url: 'docker.com/products/model-runner',
  tagline: {
    en: 'Run LLMs locally through the Docker CLI, backed by llama.cpp or vLLM with an OpenAI-compatible endpoint',
    de: 'LLMs lokal über die Docker-CLI ausführen, unterstützt von llama.cpp oder vLLM mit OpenAI-kompatiblem Endpunkt',
    fr: 'Exécutez des LLM localement via la CLI Docker, propulsés par llama.cpp ou vLLM avec un point de terminaison compatible OpenAI',
    ja: 'Docker CLIでLLMをローカル実行、llama.cppまたはvLLMを使用しOpenAI互換エンドポイントを提供',
    zh: '通过Docker CLI在本地运行LLM，由llama.cpp或vLLM提供支持，兼容OpenAI接口',
    es: 'Ejecuta LLMs localmente a través de la CLI de Docker, con llama.cpp o vLLM y un endpoint compatible con OpenAI',
    pt: 'Execute LLMs localmente pela CLI do Docker, com llama.cpp ou vLLM e um endpoint compatível com OpenAI',
    ar: 'شغّل نماذج اللغة الكبيرة محليًا عبر واجهة أوامر Docker، مدعومة بـ llama.cpp أو vLLM مع نقطة نهاية متوافقة مع OpenAI',
    ko: 'Docker CLI로 LLM을 로컬에서 실행, llama.cpp 또는 vLLM 기반, OpenAI 호환 엔드포인트 제공',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}

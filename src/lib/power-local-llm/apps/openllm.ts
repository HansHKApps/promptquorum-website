// Local AI App Directory — OpenLLM (layer: inference server)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// By BentoML — a self-hostable inference server for open-source LLMs, distinct
// from BentoCloud's paid managed hosting — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openllm',
  name: 'OpenLLM',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli', 'library'],
  locality: 'hybrid', // fully self-hostable inference server, but BentoML markets it primarily as a path to a cloud-deployed OpenAI-compatible endpoint (BentoCloud), verified 2026-09-18
  platforms: null, // Python package/CLI, deployable on any host OS
  worksWith: ['Llama', 'DeepSeek', 'Qwen'],
  engine: 'builtin', // runs open-source LLMs directly as an OpenAI-compatible API endpoint, verified 2026-09-18
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true },
  stars: 12535, // github.com/bentoml/OpenLLM, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['serve', 'build'],
  url: 'github.com/bentoml/OpenLLM',
  tagline: {
    en: 'Self-hostable inference server that runs open-source LLMs like DeepSeek and Llama behind an OpenAI-compatible API',
    de: 'Selbst hostbarer Inferenzserver, der Open-Source-LLMs wie DeepSeek und Llama hinter einer OpenAI-kompatiblen API bereitstellt',
    fr: "Serveur d'inférence auto-hébergeable qui exécute des LLM open source comme DeepSeek et Llama derrière une API compatible OpenAI",
    ja: 'DeepSeekやLlamaなどのオープンソースLLMをOpenAI互換APIとして提供する、セルフホスト可能な推論サーバー',
    zh: '可自托管的推理服务器，通过OpenAI兼容API运行DeepSeek、Llama等开源大模型',
    es: 'Servidor de inferencia autoalojable que ejecuta LLMs de código abierto como DeepSeek y Llama tras una API compatible con OpenAI',
    pt: 'Servidor de inferência auto-hospedável que executa LLMs de código aberto como DeepSeek e Llama por trás de uma API compatível com a OpenAI',
    ar: 'خادم استدلال قابل للاستضافة الذاتية يشغّل نماذج لغة مفتوحة المصدر مثل DeepSeek وLlama خلف واجهة برمجية متوافقة مع OpenAI',
    ko: 'DeepSeek, Llama 같은 오픈소스 LLM을 OpenAI 호환 API로 제공하는 셀프호스팅 가능한 추론 서버',
  },
  reviewSlug: 'openllm-review', // dedicated PromptQuorum review — added 2026-09-19
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { openaiApi: true },
  lastVerifiedDate: '2026-09-18',
}

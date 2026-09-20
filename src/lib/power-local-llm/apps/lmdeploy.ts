// Local AI App Directory — LMDeploy (layer: inference engine)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lmdeploy',
  name: 'LMDeploy',
  categories: ['inference-engines', 'quantization-conversion'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['linux'], // primary supported OS per docs (Docker images and pip wheels target Linux/CUDA) — verified 2026-09-18
  worksWith: ['InternLM', 'Llama', 'Qwen', 'Baichuan', 'DeepSeek'],
  engine: 'builtin',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // NVIDIA GPU inference/serving toolkit — VRAM floor depends entirely on the model and quantization loaded, verified 2026-09-18
  stars: 8080, // github.com/InternLM/lmdeploy, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['serve', 'chat'],
  url: 'github.com/InternLM/lmdeploy',
  reviewSlug: 'lmdeploy-review', // dedicated PromptQuorum review — added 2026-09-19
  pqReview: { date: '2026-09-20', version: 'v0.17.0', versionSourceUrl: 'https://github.com/InternLM/lmdeploy/releases/tag/v0.17.0' },
  tagline: {
    en: 'Self-hosted toolkit for compressing, quantizing, and serving LLMs with a high-throughput OpenAI-compatible inference engine',
    de: 'Selbst gehostetes Toolkit zum Komprimieren, Quantisieren und Bereitstellen von LLMs mit einer durchsatzstarken, OpenAI-kompatiblen Inferenz-Engine',
    fr: "Boîte à outils auto-hébergée pour compresser, quantifier et servir des LLM avec un moteur d'inférence compatible OpenAI à haut débit",
    ja: '高スループットなOpenAI互換推論エンジンでLLMを圧縮・量子化・サービングするセルフホスト型ツールキット',
    zh: '自托管工具包，用于压缩、量化并以高吞吐量、OpenAI兼容的推理引擎提供LLM服务',
    es: 'Kit de herramientas autoalojado para comprimir, cuantizar y servir LLM con un motor de inferencia de alto rendimiento compatible con OpenAI',
    pt: 'Kit de ferramentas auto-hospedado para comprimir, quantizar e servir LLMs com um motor de inferência de alto throughput compatível com OpenAI',
    ar: 'مجموعة أدوات مستضافة ذاتيًا لضغط النماذج اللغوية الكبيرة وتكميمها وتقديمها بمحرك استدلال عالي الإنتاجية متوافق مع OpenAI',
    ko: '고처리량 OpenAI 호환 추론 엔진으로 LLM을 압축, 양자화, 서빙하는 셀프호스팅 툴킷',
  },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { nvidiaGpu: true, distributed: true },
  lastVerifiedDate: '2026-09-18',
}

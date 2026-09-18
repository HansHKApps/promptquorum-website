// Local AI App Directory — Lucebox (layer: run-serve — hand-tuned inference server)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is the same project also distributed as
// "lucebox-hub" (github.com/Luce-Org/lucebox-hub, the containerized/Docker
// distribution that tracks the core github.com/Luce-Org/lucebox repo) — listed
// once as Lucebox using the core repo as canonical URL, do not create a
// separate lucebox-hub entry — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lucebox',
  name: 'Lucebox',
  categories: ['inference-engines'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['linux'],
  worksWith: ['Claude Code', 'Codex', 'OpenCode', 'Open WebUI', 'GGUF'],
  engine: 'builtin',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // hand-tuned kernels per GPU family (NVIDIA Ampere+/CUDA 12+, AMD RDNA3+/ROCm 6+) and per model — VRAM floor is documented per-model in benchmarks (e.g. ~14.6GiB for a 33B model) rather than one fixed number, verified 2026-09-18
  stars: 2867, // verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['serve', 'build'],
  url: 'github.com/Luce-Org/lucebox',
  tagline: {
    en: 'Local LLM inference server with hand-tuned kernels and speculative decoding for specific consumer GPUs',
    de: 'Lokaler LLM-Inferenz-Server mit handoptimierten Kernels und spekulativem Decoding für bestimmte Consumer-GPUs',
    fr: 'Serveur d’inférence LLM local avec noyaux optimisés à la main et décodage spéculatif pour des GPU grand public spécifiques',
    ja: '特定のコンシューマー向けGPUに合わせて手作業でチューニングされたカーネルと投機的デコーディングを備えたローカルLLM推論サーバー',
    zh: '本地LLM推理服务器，针对特定消费级GPU提供手工调优内核和推测解码',
    es: 'Servidor de inferencia LLM local con kernels ajustados a mano y decodificación especulativa para GPUs de consumo específicas',
    pt: 'Servidor de inferência LLM local com kernels ajustados manualmente e decodificação especulativa para GPUs de consumo específicas',
    ar: 'خادم استدلال محلي للنماذج اللغوية بنوى مضبوطة يدويًا وفك تشفير تخميني مصمم لوحدات معالجة رسومات استهلاكية محددة',
    ko: '특정 소비자용 GPU에 맞춰 손으로 튜닝한 커널과 추측적 디코딩을 사용하는 로컬 LLM 추론 서버',
  },
  reviewSlug: 'lucebox-review', // dedicated PromptQuorum review — added 2026-09-19
  lastVerifiedDate: '2026-09-18',
}

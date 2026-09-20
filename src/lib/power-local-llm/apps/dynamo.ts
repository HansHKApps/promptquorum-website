// Local AI App Directory — NVIDIA Dynamo (layer: inference engine)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/ai-dynamo/dynamo, NVIDIA's distributed
// inference serving framework — not the unrelated Netflix "Dynamo"
// distributed-database paper/tools of the same name — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'dynamo',
  name: 'NVIDIA Dynamo',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['linux'], // datacenter/Kubernetes-oriented distributed serving framework, Linux only — verified 2026-09-18
  worksWith: ['vLLM', 'TensorRT-LLM', 'SGLang', 'Kubernetes'],
  engine: 'external',
  license: 'Apache-2.0', // GitHub API reports NOASSERTION on the repo metadata; the repo's own LICENSE file is Apache License 2.0, verified 2026-09-18
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // datacenter-scale distributed inference across multi-GPU/multi-node clusters — no single consumer hardware floor documented, verified 2026-09-18
  stars: 8113, // github.com/ai-dynamo/dynamo, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['serve'],
  url: 'github.com/ai-dynamo/dynamo',
  reviewSlug: 'dynamo-review', // dedicated PromptQuorum review — added 2026-09-19
  tagline: {
    en: 'Self-hosted, datacenter-scale distributed inference serving framework for large LLM deployments across multiple GPUs and nodes',
    de: 'Selbst gehostetes, für Rechenzentren skaliertes Framework für verteilte Inferenz-Bereitstellung großer LLM-Deployments über mehrere GPUs und Knoten',
    fr: "Framework auto-hébergé de service d'inférence distribuée à l'échelle d'un datacenter pour de grands déploiements LLM sur plusieurs GPU et nœuds",
    ja: '複数のGPU・ノードにまたがる大規模LLMデプロイ向け、データセンター規模のセルフホスト型分散推論サービングフレームワーク',
    zh: '自托管、数据中心级别的分布式推理服务框架，可在多GPU、多节点上部署大规模LLM',
    es: 'Framework auto-hospedado de inferencia distribuida a escala de centro de datos para grandes implementaciones de LLM en múltiples GPU y nodos',
    pt: 'Framework auto-hospedado de inferência distribuída em escala de data center para grandes implantações de LLM em múltiplas GPUs e nós',
    ar: 'إطار عمل مستضاف ذاتيًا لخدمة الاستدلال الموزع بمقياس مراكز البيانات لنشر نماذج لغوية كبيرة عبر وحدات معالجة رسومية وعقد متعددة',
    ko: '여러 GPU와 노드에 걸친 대규모 LLM 배포를 위한 셀프호스팅, 데이터센터급 분산 추론 서빙 프레임워크',
  },
  // Dynamo ships many model/platform-specific release tags rather than one
  // canonical version; the article already hedges this correctly as a range
  // ("v1.4–v1.6") rather than a single pinned number — v1.4.2 (the newest tag
  // returned by the GitHub API) falls inside that range, so this is a match,
  // not drift. Recorded as the article's own range string, not the single tag.
  pqReview: { date: '2026-09-20', version: 'v1.4–v1.6', versionSourceUrl: 'https://github.com/ai-dynamo/dynamo/releases' },
  lastVerifiedDate: '2026-09-18',
}

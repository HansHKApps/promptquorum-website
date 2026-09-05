// Local AI App Directory — GPUStack (layer: infra)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc's concern was "more enterprise/on-prem infra than consumer app; no date or
// usage figure" — real usage (5,607 stars) and active development (last push 2026-09-02)
// confirmed; it remains an infra/cluster-manager tool rather than a consumer app, which is
// reflected in its category rather than being a reason to exclude it.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'gpustack',
  name: 'GPUStack',
  categories: ['runtimes-managers'],
  interfaces: ['web', 'cli'],
  locality: 'local',
  platforms: ['linux', 'win', 'mac'],
  worksWith: ['Ollama', 'vLLM', 'llama.cpp'],
  engine: 'both',
  license: 'Apache-2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 5607, // github.com/gpustack/gpustack, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['serve', 'build'],
  url: 'gpustack.ai',
  tagline: {
    en: 'Open-source GPU cluster manager for running and scaling local LLMs across on-prem hardware',
    de: 'Open-Source-GPU-Clustermanager zum Ausführen und Skalieren lokaler LLMs auf On-Prem-Hardware',
    fr: 'Gestionnaire de cluster GPU open source pour exécuter et faire évoluer des LLM locaux sur du matériel sur site',
    ja: 'オンプレミスハードウェア上でローカルLLMを実行・スケールするオープンソースGPUクラスターマネージャー',
    zh: '开源GPU集群管理器，用于在本地硬件上运行和扩展本地LLM',
    es: 'Gestor de clústeres de GPU de código abierto para ejecutar y escalar LLMs locales en hardware on-premise',
    pt: 'Gerenciador de cluster de GPU open source para executar e escalar LLMs locais em hardware on-premise',
    ar: 'مدير عنقود وحدات معالجة رسومية مفتوح المصدر لتشغيل وتوسيع النماذج اللغوية المحلية على أجهزة داخل المؤسسة',
    ko: '온프레미스 하드웨어에서 로컬 LLM을 실행하고 확장하는 오픈소스 GPU 클러스터 관리자',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}

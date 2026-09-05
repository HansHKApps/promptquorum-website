// Local AI App Directory — AMD GAIA (layer: agent)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Was Windows-only at launch; v0.14 (2025-12-11) added native Linux and macOS support —
// verified before setting `platforms` below.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'amd-gaia',
  name: 'AMD GAIA',
  categories: ['agent-frameworks'],
  interfaces: ['cli', 'desktop'],
  locality: 'local',
  platforms: ['win', 'linux', 'mac'],
  worksWith: ['Lemonade', 'Ollama'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 1539, // github.com/amd/gaia, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['agent', 'chat'],
  url: 'amd-gaia.ai',
  tagline: {
    en: 'Local AI agents accelerated by AMD Ryzen AI NPU and iGPU hardware',
    de: 'Lokale KI-Agenten, beschleunigt durch AMD Ryzen AI NPU- und iGPU-Hardware',
    fr: 'Agents IA locaux accélérés par le NPU et l\'iGPU AMD Ryzen AI',
    ja: 'AMD Ryzen AI NPUとiGPUハードウェアで高速化されたローカルAIエージェント',
    zh: '由AMD Ryzen AI NPU和集成显卡加速的本地AI代理',
    es: 'Agentes de IA locales acelerados por el NPU e iGPU de AMD Ryzen AI',
    pt: 'Agentes de IA locais acelerados pelo NPU e iGPU do AMD Ryzen AI',
    ar: 'وكلاء ذكاء اصطناعي محليون مسرَّعون بواسطة معالج NPU والرسومات المدمجة في AMD Ryzen AI',
    ko: 'AMD Ryzen AI NPU 및 iGPU 하드웨어로 가속되는 로컬 AI 에이전트',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}

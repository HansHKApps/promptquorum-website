// Local AI App Directory — n8n (layer: workflow)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc's concern was "exact last-update date and confirmed local-LLM support
// unverified" — resolved: actively updated (last push 2026-09-05) and ships native
// Ollama/local-model nodes. License is n8n's own "Sustainable Use License" (fair-code,
// source-available but not OSI open source) — confirmed directly against the repo's
// LICENSE.md rather than assumed to be a standard open-source license.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'n8n',
  name: 'n8n',
  categories: ['workflow-node-builders'],
  interfaces: ['web', 'cli'],
  locality: 'hybrid',
  platforms: ['web', 'linux', 'mac', 'win'],
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API'],
  engine: 'external',
  license: 'Sustainable Use License (fair-code)',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 203406, // github.com/n8n-io/n8n, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['build', 'agent'],
  url: 'n8n.io',
  tagline: {
    en: 'Workflow automation platform with native AI/LLM nodes, self-hostable with local model support',
    de: 'Workflow-Automatisierungsplattform mit nativen KI-/LLM-Knoten, selbst hostbar mit Unterstützung für lokale Modelle',
    fr: 'Plateforme d\'automatisation de workflows avec des nœuds IA/LLM natifs, auto-hébergeable avec prise en charge des modèles locaux',
    ja: 'ネイティブのAI/LLMノードを備えたワークフロー自動化プラットフォーム。セルフホスト可能でローカルモデルに対応',
    zh: '具有原生AI/LLM节点的工作流自动化平台，可自托管并支持本地模型',
    es: 'Plataforma de automatización de flujos de trabajo con nodos nativos de IA/LLM, autoalojable con soporte para modelos locales',
    pt: 'Plataforma de automação de fluxos de trabalho com nós nativos de IA/LLM, auto-hospedável com suporte a modelos locais',
    ar: 'منصة أتمتة سير العمل بعقد ذكاء اصطناعي/نماذج لغوية أصلية، قابلة للاستضافة الذاتية مع دعم النماذج المحلية',
    ko: '네이티브 AI/LLM 노드를 갖춘 워크플로 자동화 플랫폼, 로컬 모델을 지원하는 자체 호스팅 가능',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}

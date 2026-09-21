// Local AI App Directory — IntentKit (layer: agent framework)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'intentkit',
  name: 'IntentKit',
  categories: ['agent-frameworks', 'autonomous-agents'],
  interfaces: ['cli', 'library'],
  locality: 'hybrid', // self-hosted (Docker/Python), but the agent cluster itself is built as a cloud-facing service — verified 2026-09-18
  platforms: ['mac', 'win', 'linux'], // ships with Docker + docker-compose plus a Python library install path, verified 2026-09-18
  worksWith: ['OpenAI API', 'Anthropic API', 'Twitter/X', 'Telegram'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // an agent-orchestration cluster that calls out to configured LLM providers rather than running inference itself, verified 2026-09-18
  stars: 6511, // github.com/crestalnetwork/intentkit, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['agent', 'build'],
  url: 'github.com/crestalnetwork/intentkit',
  tagline: {
    en: 'Self-hosted, open-source agent cluster for building and running a collaborative team of AI agents with built-in API endpoints',
    de: 'Selbst gehosteter, quelloffener Agenten-Cluster zum Erstellen und Betreiben eines kollaborativen Teams von KI-Agenten mit integrierten API-Endpunkten',
    fr: "Cluster d'agents auto-hébergé et open source pour construire et exécuter une équipe collaborative d'agents IA avec des points d'accès API intégrés",
    ja: '組み込みAPIエンドポイントを備え、AIエージェントの協働チームを構築・運用するためのセルフホスト型オープンソース・エージェントクラスター',
    zh: '自托管开源智能体集群，内置API端点，用于构建和运行协作式AI智能体团队',
    es: 'Clúster de agentes de código abierto y autoalojado para construir y ejecutar un equipo colaborativo de agentes de IA con endpoints de API integrados',
    pt: 'Cluster de agentes de código aberto e auto-hospedado para construir e executar uma equipe colaborativa de agentes de IA com endpoints de API integrados',
    ar: 'مجموعة وكلاء مفتوحة المصدر ومستضافة ذاتيًا لبناء وتشغيل فريق تعاوني من وكلاء الذكاء الاصطناعي مع نقاط نهاية API مدمجة',
    ko: '내장 API 엔드포인트를 갖춘 셀프호스팅 오픈소스 에이전트 클러스터로, 협업하는 AI 에이전트 팀을 구축하고 운영',
  },
  mcpSupport: true, // repo's GitHub navigation lists an MCP Registry for integrating external tools — verified 2026-09-18
  reviewSlug: 'intentkit-review', // dedicated PromptQuorum review — added 2026-09-19
  pqReview: { date: '2026-09-20', version: 'v2.6.3', versionSourceUrl: 'https://github.com/crestalnetwork/intentkit/releases/tag/v2.6.3' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { multiAgent: true },
  lastVerifiedDate: '2026-09-18',
}

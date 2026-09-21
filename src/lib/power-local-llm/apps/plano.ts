// Local AI App Directory — Plano (layer: router / gateway)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/katanemo/plano, an Envoy-based AI-native
// proxy for agentic apps — a generic name, not to be confused with unrelated
// "Plano" project-planning or geography-named repos — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'plano',
  name: 'Plano',
  categories: ['routers-gateways', 'observability'],
  interfaces: ['cli'],
  locality: 'hybrid',
  platforms: ['linux'], // ships as a Docker container / CLI binary built on Envoy, verified 2026-09-18
  worksWith: ['OpenAI API', 'Anthropic API', 'Local LLMs'],
  engine: 'external',
  license: 'Apache-2.0',
  price: 'freemium', // hosted Plano-family models free to use; self-host locally or pay for hosted API keys, verified 2026-09-18
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // an Envoy-based proxy/data-plane, not an inference engine itself — no GPU requirement, verified 2026-09-18
  stars: 7056, // github.com/katanemo/plano, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['agent', 'serve'],
  url: 'github.com/katanemo/plano',
  reviewSlug: 'plano-review', // dedicated PromptQuorum review — added 2026-09-19
  tagline: {
    en: 'Self-hosted, Envoy-based AI proxy and data plane for agentic apps with smart LLM routing, observability, and guardrails',
    de: 'Selbst gehosteter, auf Envoy basierender KI-Proxy und Data Plane für agentenbasierte Anwendungen mit intelligentem LLM-Routing, Observability und Guardrails',
    fr: "Proxy et data plane IA auto-hébergés basés sur Envoy pour applications agentiques, avec routage LLM intelligent, observabilité et garde-fous",
    ja: 'エージェント型アプリ向け、Envoyベースのセルフホスト型AIプロキシ＆データプレーン。スマートLLMルーティング、オブザーバビリティ、ガードレールを提供',
    zh: '基于Envoy构建的自托管AI代理与数据平面，为智能体应用提供智能LLM路由、可观测性与护栏机制',
    es: 'Proxy de IA y plano de datos auto-hospedado basado en Envoy para aplicaciones agénticas, con enrutamiento inteligente de LLM, observabilidad y barreras de seguridad',
    pt: 'Proxy de IA e plano de dados auto-hospedado baseado em Envoy para aplicações agênticas, com roteamento inteligente de LLM, observabilidade e barreiras de segurança',
    ar: 'وكيل ذكاء اصطناعي مستضاف ذاتيًا مبني على Envoy مع مستوى بيانات للتطبيقات الوكيلة، يوفر توجيهًا ذكيًا للنماذج اللغوية وقابلية ملاحظة وضوابط حماية',
    ko: 'Envoy 기반 셀프호스팅 AI 프록시 및 데이터 플레인으로, 에이전트형 앱을 위한 스마트 LLM 라우팅, 옵저버빌리티, 가드레일을 제공',
  },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { tracing: true, openTelemetry: true },
  lastVerifiedDate: '2026-09-18',
}

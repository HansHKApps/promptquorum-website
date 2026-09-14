// Local AI App Directory — litellm (layer: router)
// Added per directory-add-5-apps sweep — one of the top standalone tools
// missing from a user-supplied app list cross-check (2026-09-14).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'litellm',
  name: 'litellm',
  categories: ['routers-gateways'],
  interfaces: ['cli', 'web'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API'],
  engine: 'external',
  license: 'MIT', // repo-root LICENSE file; a separate enterprise-license carve-out applies only to the enterprise/ subdirectory, verified 2026-09-14
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // gateway/proxy routing calls to external LLM provider APIs, not a model runtime itself — no GPU requirement, verified 2026-09-14
  stars: 58663,
  addedDate: '2026-09-14',
  status: 'listed',
  uses: ['build', 'serve'],
  url: 'github.com/BerriAI/litellm',
  tagline: {
    en: 'Single OpenAI-compatible gateway for 100+ LLM provider APIs, with routing and cost tracking',
    de: 'Einheitliches OpenAI-kompatibles Gateway für über 100 LLM-Anbieter-APIs, mit Routing und Kostenverfolgung',
    fr: 'Passerelle unique compatible OpenAI pour plus de 100 API de fournisseurs LLM, avec routage et suivi des coûts',
    ja: '100以上のLLMプロバイダーAPI向け、OpenAI互換の統合ゲートウェイ。ルーティングとコスト追跡付き',
    zh: '面向100多个LLM提供商API的统一OpenAI兼容网关，内置路由与成本追踪',
    es: 'Puerta de enlace única compatible con OpenAI para más de 100 API de proveedores LLM, con enrutamiento y seguimiento de costes',
    pt: 'Gateway único compatível com OpenAI para mais de 100 APIs de provedores LLM, com roteamento e rastreamento de custos',
    ar: 'بوابة واحدة متوافقة مع OpenAI لأكثر من 100 واجهة برمجة لمزوّدي نماذج اللغة، مع التوجيه وتتبع التكاليف',
    ko: '100개 이상의 LLM 제공업체 API를 위한 단일 OpenAI 호환 게이트웨이, 라우팅 및 비용 추적 포함',
  },
  lastVerifiedDate: '2026-09-14',
}

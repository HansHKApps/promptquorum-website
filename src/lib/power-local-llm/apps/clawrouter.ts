// Local AI App Directory — ClawRouter (layer: router / gateway)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Several near-identical forks of this project exist under other GitHub
// accounts (some renamed "clawrouter"); BlockRunAI/ClawRouter is the
// original, highest-star repo — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'clawrouter',
  name: 'ClawRouter',
  categories: ['routers-gateways'],
  interfaces: ['cli'],
  locality: 'hybrid', // 100% local routing decisions, but forwards requests to external/cloud model providers — verified 2026-09-18
  platforms: ['mac', 'win', 'linux'], // distributed as an npx/Node package, cross-platform — verified 2026-09-18
  worksWith: ['OpenAI API', 'Anthropic API', 'Open-weight models'],
  engine: 'external',
  license: 'MIT',
  price: 'freemium', // 7 open-weight models free forever; credit-card or USDC top-up for paid frontier models, verified 2026-09-18
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // a local Node.js routing proxy that forwards to external model providers — no inference hardware of its own, verified 2026-09-18
  stars: 6607, // github.com/BlockRunAI/ClawRouter, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['agent', 'serve'],
  url: 'github.com/BlockRunAI/ClawRouter',
  tagline: {
    en: 'Self-hosted, agent-native LLM router that makes sub-millisecond local routing decisions across frontier and free open-weight models',
    de: 'Selbst gehosteter, für Agenten konzipierter LLM-Router, der lokale Routing-Entscheidungen im Sub-Millisekundenbereich über Spitzen- und kostenlose Open-Weight-Modelle trifft',
    fr: "Routeur LLM auto-hébergé, conçu pour les agents, qui prend des décisions de routage locales en moins d'une milliseconde entre modèles de pointe et modèles ouverts gratuits",
    ja: 'フロンティアモデルと無料のオープンウェイトモデルの間で1ミリ秒未満のローカルルーティングを行う、エージェント向けセルフホスト型LLMルーター',
    zh: '面向智能体的自托管LLM路由器，可在前沿模型与免费开放权重模型之间进行亚毫秒级本地路由决策',
    es: 'Router LLM auto-hospedado y nativo para agentes que toma decisiones de enrutamiento locales en menos de un milisegundo entre modelos de vanguardia y modelos abiertos gratuitos',
    pt: 'Roteador de LLM auto-hospedado e nativo para agentes que toma decisões de roteamento locais em menos de um milissegundo entre modelos de ponta e modelos abertos gratuitos',
    ar: 'موجّه نماذج لغوية مستضاف ذاتيًا ومصمم للوكلاء، يتخذ قرارات توجيه محلية في أقل من ميلي ثانية بين النماذج المتقدمة والنماذج المفتوحة المجانية',
    ko: '최상위 모델과 무료 오픈웨이트 모델 사이에서 1밀리초 미만의 로컬 라우팅 결정을 내리는 에이전트 전용 셀프호스팅 LLM 라우터',
  },
  reviewSlug: 'clawrouter-review', // dedicated PromptQuorum review — added 2026-09-19
  pqReview: { date: '2026-09-20', version: 'v0.12.279', versionSourceUrl: 'https://github.com/BlockRunAI/ClawRouter/releases/tag/v0.12.279' },
  lastVerifiedDate: '2026-09-18',
}

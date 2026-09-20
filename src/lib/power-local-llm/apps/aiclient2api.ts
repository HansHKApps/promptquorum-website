// Local AI App Directory — AIClient2API (layer: router / gateway)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Several near-identical forks of this project exist under different GitHub
// accounts with the same description; justlovemaki/AIClient2API is the
// original, highest-star repo — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'aiclient2api',
  name: 'AIClient2API',
  categories: ['routers-gateways', 'api-servers'],
  interfaces: ['cli', 'library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'], // Node.js-based proxy, cross-platform — verified 2026-09-18
  worksWith: ['Gemini CLI', 'OpenAI API', 'Claude API', 'Codex', 'Kiro', 'Antigravity', 'Grok'],
  engine: 'external',
  license: 'GPL-3.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // a Node.js protocol-conversion proxy, not an inference engine — no GPU requirement, verified 2026-09-18
  stars: 8795, // github.com/justlovemaki/AIClient2API, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['serve', 'build'],
  url: 'github.com/justlovemaki/AIClient2API',
  reviewSlug: 'aiclient2api-review', // dedicated PromptQuorum review — added 2026-09-19
  tagline: {
    en: 'Self-hosted proxy that converts Gemini CLI, Codex, Grok, Kiro, and Antigravity client protocols into a single OpenAI-compatible API',
    de: 'Selbst gehosteter Proxy, der die Client-Protokolle von Gemini CLI, Codex, Grok, Kiro und Antigravity in eine einzige OpenAI-kompatible API umwandelt',
    fr: 'Proxy auto-hébergé qui convertit les protocoles clients de Gemini CLI, Codex, Grok, Kiro et Antigravity en une seule API compatible OpenAI',
    ja: 'Gemini CLI、Codex、Grok、Kiro、AntigravityのクライアントプロトコルをOpenAI互換の単一APIに変換するセルフホスト型プロキシ',
    zh: '自托管代理，可将Gemini CLI、Codex、Grok、Kiro、Antigravity等客户端协议统一转换为兼容OpenAI的API',
    es: 'Proxy autoalojado que convierte los protocolos cliente de Gemini CLI, Codex, Grok, Kiro y Antigravity en una única API compatible con OpenAI',
    pt: 'Proxy auto-hospedado que converte os protocolos de cliente do Gemini CLI, Codex, Grok, Kiro e Antigravity em uma única API compatível com OpenAI',
    ar: 'وكيل وسيط مستضاف ذاتيًا يحوّل بروتوكولات عملاء Gemini CLI وCodex وGrok وKiro وAntigravity إلى واجهة برمجية واحدة متوافقة مع OpenAI',
    ko: 'Gemini CLI, Codex, Grok, Kiro, Antigravity 클라이언트 프로토콜을 하나의 OpenAI 호환 API로 변환하는 셀프호스팅 프록시',
  },
  pqReview: { date: '2026-09-20', version: 'v3.5.0', versionSourceUrl: 'https://github.com/justlovemaki/AIClient2API/releases/tag/v3.5.0' },
  lastVerifiedDate: '2026-09-18',
}

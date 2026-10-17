// Local AI App Directory — AnyLLM: AI Chat Client (layer: mobile general chat client)
// Added 2026-10-17 on Hans's request (Google Play id com.dotwellabs.anyllm).
// Verified 2026-10-17 against: the Google Play listing (v1.5.1, Android 7.0+, updated 5 Sep 2026, 1K+ downloads, in-app
// purchases $0.99–$14.99 per item, developer Dotwel Labs / SANJAYRAM A), the developer site dotwellabs.web.app, and the
// privacy policy (sanjayram-a.github.io/anyllm-privacy-policy, last updated 12 Apr 2026).
// Not taken at face value: it is a BYOK client, so the model runs at the provider the user picks — it is only "local" through
// the optional Ollama endpoint; no source repository exists (closed source, none linked); the store text claims "bank-grade"
// key storage and "the most polished AI chat UI on Android" — marketing, not repeated as fact; what the in-app purchases unlock is not stated.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'anyllm',
  name: 'AnyLLM',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'hybrid', // default path is cloud APIs via the user's own keys; Ollama is an optional local/self-hosted endpoint
  platforms: ['android'],
  worksWith: ['OpenAI API', 'Anthropic API', 'Google Gemini API', 'Groq', 'OpenRouter', 'Ollama', 'MCP'],
  engine: 'external', // runs no models itself — it talks to provider APIs and Ollama
  license: 'Proprietary (closed source)',
  price: 'freemium', // free download with in-app purchases ($0.99–$14.99 per item per Google Play); the API usage is billed by the provider
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // Play lists Android 7.0+; no RAM figure; models run at the provider or on the user's Ollama host
  stars: null,
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'dotwellabs.web.app',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm',
    web: 'https://dotwellabs.web.app',
  },
  installEffort: 'installer',
  installEvidence: 'Google Play listing com.dotwellabs.anyllm (v1.5.1, Android 7.0+), checked 2026-10-17',
  tagline: {
    en: 'Android chat client where you bring your own API keys, with Ollama, MCP tools and AI-vs-AI debates',
    de: 'Android-Chat-Client mit eigenen API-Schlüsseln, Ollama, MCP-Tools und KI-gegen-KI-Debatten',
    fr: 'Client de chat Android avec vos propres clés API, Ollama, outils MCP et débats IA contre IA',
    ja: '自分のAPIキーで使うAndroidチャットクライアント。Ollama、MCPツール、AI同士のディベートに対応',
    zh: '自带 API 密钥的 Android 聊天客户端,支持 Ollama、MCP 工具和 AI 对 AI 辩论',
    es: 'Cliente de chat para Android con tus propias claves API, Ollama, herramientas MCP y debates entre IAs',
    pt: 'Cliente de chat para Android com suas próprias chaves de API, Ollama, ferramentas MCP e debates entre IAs',
    ar: 'عميل دردشة لنظام Android بمفاتيح API الخاصة بك، مع Ollama وأدوات MCP ومناظرات بين نماذج الذكاء الاصطناعي',
    ko: '내 API 키를 쓰는 Android 채팅 클라이언트. Ollama, MCP 도구, AI 간 토론 지원',
  },
  reviewSlug: 'anyllm-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: from the Google Play description and privacy policy, read 2026-10-17; a missing key = not stated, never false.
  compare: { visionInput: true },
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-09-05', // Google Play "Updated on" (v1.5.1), read 2026-10-17 — 42 days, no stale warning
  lastUpstreamUpdateSource: 'https://play.google.com/store/apps/details?id=com.dotwellabs.anyllm',
}

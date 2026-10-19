// Local AI App Directory — Secret AI: Local AI Chat (categories: general-chat-clients; layer: mobile)
// Added 2026-10-19 at the operator's request. No maker outreach — this is an independent PromptQuorum entry.
// Verified on 2026-10-19 against: the Google Play listing (play.google.com/store/apps/details?id=io.secretai.llm — developer
// "Secret AI L.L.C.", released 2025-05-12, updated 2026-10-15, version 1.12.2, 50K+ downloads, 4.1 stars from 976 ratings,
// rated Teen, Data safety "No data collected" / "No data shared with third parties", in-app purchases $4.99-$119.99 per item),
// the App Store listing (apps.apple.com/us/app/secret-ai/id6744668980 — iPhone/iPad iOS 17.0+, Mac macOS 14.0+, visionOS 1.0+,
// 101.4 MB, 4.5 stars from 83 ratings, free with in-app purchases: Plus $4.99, Pro $9.99, Plus Lifetime $59.99, Pro Lifetime
// $119.99, Plus-to-Pro Lifetime upgrade $59.99), the official website secretai.io (features, plans, model catalog) and the
// privacy policy secretai.io/legal/privacy (last updated 2025-05-13).
// Per-storefront Play in-app purchase range (checked 2026-10-19): US $4.99-$119.99, DE/ES/FR 4,99-124,99 EUR, JP 860-20,900 JPY,
// BR R$ 24,99-599,99, KR 8,000-200,000 KRW, SA 21.99-519.99 SAR; the Chinese storefront showed no price. The store title varies
// by storefront (DE "Secret AI: Lokaler KI-Chatbot", ES "Chatbot Local IA", JA "私密でオフラインの本地AI助理", KO "프라이버시 보장 오프라인 어시스턴트").
// Name collision: other products are also called "Secret AI"; this entry is only the Secret AI L.L.C. app (package io.secretai.llm).
// No source repository found (website, store listings and web search); the website links a Hugging Face organisation (huggingface.co/secret-ai).
// The App Store version number could not be read cleanly from the listing; the Android version is the one stated in the review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'secret-ai',
  name: 'Secret AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local', // per the developer, models run on the device; optional custom API integration can point at a self-hosted server; not audited
  platforms: ['android', 'ios', 'mac'], // App Store: iPhone/iPad (iOS 17+), Mac (macOS 14+) and Apple Vision (no OSKey); the website also shows a macOS tab
  worksWith: ['Hugging Face', 'Ollama', 'MCP'], // site/Play: downloads models from Hugging Face; connects to a self-hosted LLM API or Ollama; MCP servers
  engine: 'builtin', // runs its own on-device engines: llama.cpp (GGUF), MNN, MLX
  license: 'Closed source', // no repository or license text found
  price: 'freemium', // free tier with a daily message limit; Plus and Pro as monthly or lifetime in-app purchases
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends on the model downloaded; no minimum RAM stated
  stars: null, // no public repository
  addedDate: '2026-10-19',
  status: 'listed',
  uses: ['phone', 'chat', 'agent'],
  url: 'secretai.io',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=io.secretai.llm',
    appStore: 'https://apps.apple.com/us/app/secret-ai/id6744668980',
    web: 'https://secretai.io',
  },
  installEffort: 'installer',
  installEvidence:
    'Google Play listing io.secretai.llm and App Store listing id6744668980 checked 2026-10-19: standard store install, no terminal step; Android v1.12.2, iOS/iPadOS 17.0+, macOS 14.0+; AI models are a separate in-app download.',
  tagline: {
    en: 'Private offline AI chat for iPhone, Android and Mac with custom characters, Skills and MCP tools, running GGUF, MNN and MLX models on the device',
    de: 'Privater Offline-KI-Chat für iPhone, Android und Mac mit eigenen Charakteren, Skills und MCP-Tools; führt GGUF-, MNN- und MLX-Modelle auf dem Gerät aus',
    fr: "Chat IA privé hors ligne pour iPhone, Android et Mac, avec personnages personnalisés, Skills et outils MCP, qui exécute des modèles GGUF, MNN et MLX sur l'appareil",
    ja: 'iPhone・Android・Mac向けのプライベートなオフラインAIチャット。カスタムキャラクター、Skills、MCPツールに対応し、GGUF・MNN・MLXモデルを端末上で実行',
    zh: '适用于 iPhone、Android 和 Mac 的私密离线 AI 聊天应用，支持自定义角色、Skills 和 MCP 工具，在设备上运行 GGUF、MNN 和 MLX 模型',
    es: 'Chat de IA privado y sin conexión para iPhone, Android y Mac, con personajes personalizados, Skills y herramientas MCP, que ejecuta modelos GGUF, MNN y MLX en el dispositivo',
    pt: 'Chat de IA privado e offline para iPhone, Android e Mac, com personagens personalizados, Skills e ferramentas MCP, que executa modelos GGUF, MNN e MLX no aparelho',
    ar: 'تطبيق دردشة ذكاء اصطناعي خاص يعمل دون اتصال على iPhone وAndroid وMac، مع شخصيات مخصصة وSkills وأدوات MCP، ويشغّل نماذج GGUF وMNN وMLX على الجهاز',
    ko: 'iPhone, Android, Mac용 프라이빗 오프라인 AI 채팅 앱. 사용자 지정 캐릭터, Skills, MCP 도구를 지원하며 GGUF·MNN·MLX 모델을 기기에서 실행',
  },
  // Each value taken from the Play description and secretai.io on 2026-10-19; a missing key = not stated there, never false.
  // offline = the developer says chat works without internet once a model is downloaded; modelDownloads = models are downloaded
  // in-app from Hugging Face; visionInput = photo understanding on the device (unlimited on the Pro plan). importModels and voice
  // stay unset: neither is described.
  compare: { offline: true, modelDownloads: true, visionInput: true },
  mcpSupport: true, // the description and website describe MCP server support with a per-call approval prompt; not tested
  lastVerifiedDate: '2026-10-19',
  lastUpstreamUpdate: '2026-10-15', // Google Play updated-on (version 1.12.2), read 2026-10-19
  lastUpstreamUpdateSource: 'https://play.google.com/store/apps/details?id=io.secretai.llm',
  reviewSlug: 'secret-ai-review',
  pqReview: {
    date: '2026-10-19',
    version: '1.12.2',
    versionSourceUrl: 'https://play.google.com/store/apps/details?id=io.secretai.llm',
  },
  verdict:
    'Best for people who want a private offline chat app on iPhone, Android or Mac with custom characters, Skills and MCP tools, and accept closed source and claims that rest on the developer\'s own listing and policy; limited by a free tier capped at 10 messages a day, paid plans for GPU/NPU engines and vision, and a privacy policy last updated in May 2025',
}

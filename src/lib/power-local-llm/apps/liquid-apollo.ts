// Local AI App Directory — Liquid Apollo (layer: mobile)
// Hybrid local + cloud chat client by Liquid AI, Inc. — on-device LFM2 models via LEAP,
// plus OpenRouter cloud access (bring-your-own API key) and custom self-hosted backend
// support (LM Studio, Ollama). locality is 'hybrid', not 'local' — see liquid-apollo-review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'liquid-apollo',
  name: 'Liquid Apollo',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'hybrid',
  platforms: ['ios', 'mac', 'android'],
  worksWith: ['OpenRouter', 'LM Studio', 'Ollama'],
  engine: 'both',
  license: 'Closed source',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which LFM2 model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'apps.apple.com/us/app/liquid-apollo/id6448019325',
  tagline: {
    en: 'On-device LFM2 chat, plus OpenRouter cloud and custom backends',
    de: 'On-Device-LFM2-Chat, plus OpenRouter-Cloud und Custom Backends',
    fr: 'Chat LFM2 local, plus cloud OpenRouter et backends personnalisés',
    ja: 'オンデバイスLFM2チャット、プラスOpenRouterクラウドとカスタムバックエンド',
    zh: '本地LFM2聊天，附带OpenRouter云端和自定义后端',
    es: 'Chat LFM2 local, más nube OpenRouter y backends personalizados',
    pt: 'Chat LFM2 local, mais nuvem OpenRouter e backends personalizados',
    ar: 'محادثة LFM2 محلية، بالإضافة إلى سحابة OpenRouter وخوادم مخصصة',
    ko: '온디바이스 LFM2 채팅, 플러스 OpenRouter 클라우드 및 커스텀 백엔드',
  },
  reviewSlug: 'liquid-apollo-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: '2026-09-12',
}

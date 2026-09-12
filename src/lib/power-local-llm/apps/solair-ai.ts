// Local AI App Directory — Solair AI (layer: mobile general chat client)
// Added 2026-09-12 alongside the dedicated solair-ai-review article.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'solair-ai',
  name: 'Solair AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'hybrid',
  platforms: ['ios'],
  worksWith: ['OpenAI API', 'Anthropic API'],
  engine: 'both',
  license: 'Closed source',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research; app itself requires iPhone A14+/iPad A12+/Apple Silicon Mac
  stars: null, // App Store apps do not have a GitHub star count; App Store rating (4.3/5, 26 ratings) is covered in the review article, not this directory field
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'www.solairai.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/solair-local-ai/id6758450823',
  },
  tagline: {
    en: 'Local-first iOS AI assistant with optional BYOK cloud fallback',
    de: 'Lokaler iOS-KI-Assistent mit optionalem Cloud-Fallback per eigenem API-Schlüssel',
    fr: 'Assistant IA iOS local avec repli cloud optionnel via clé API personnelle',
    ja: 'ローカル優先のiOS AIアシスタント、自己APIキーによるオプションのクラウドフォールバック付き',
    zh: '本地优先iOS AI助手,支持自带密钥的可选云端回退',
    es: 'Asistente de IA local para iOS con reserva opcional en la nube mediante clave propia',
    pt: 'Assistente de IA local para iOS com fallback opcional na nuvem via chave própria',
    ar: 'مساعد ذكاء اصطناعي محلي لنظام iOS مع خيار احتياطي سحابي اختياري بمفتاح خاص',
    ko: '자체 API 키를 이용한 선택적 클라우드 폴백을 지원하는 로컬 우선 iOS AI 비서',
  },
  reviewSlug: 'solair-ai-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: '2026-09-12',
}

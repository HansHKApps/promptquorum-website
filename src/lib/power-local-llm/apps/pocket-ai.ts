// Local AI App Directory — Pocket AI (layer: mobile)
// Added post-Phase-1 (new tool, not part of the original migration batch).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pocket-ai',
  name: 'Pocket AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios'],
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-11',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'mypocketai.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702',
    web: 'https://mypocketai.app/',
  },
  tagline: {
    en: 'Free iOS local LLM client with 28+ models',
    de: 'Kostenloser iOS-Client für lokale LLMs mit 28+ Modellen',
    fr: 'Client LLM local gratuit pour iOS avec 28+ modèles',
    ja: '28以上のモデルに対応した無料のiOSローカルLLMクライアント',
    zh: '免费iOS本地LLM客户端,支持28+种模型',
    es: 'Cliente LLM local gratuito para iOS con más de 28 modelos',
    pt: 'Cliente LLM local gratuito para iOS com mais de 28 modelos',
    ar: 'عميل نماذج لغوية محلية مجاني لـiOS مع أكثر من 28 نموذجًا',
    ko: '28개 이상의 모델을 지원하는 무료 iOS 로컬 LLM 클라이언트',
  },
  reviewSlug: 'pocket-ai-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not yet independently verified beyond the vendor's own claims
  founder: {
    who: {
      en: 'Faisal, developer at Dataweal',
      de: 'Faisal, Entwickler bei Dataweal',
      fr: 'Faisal, développeur chez Dataweal',
      ja: 'Faisal氏、Dataweal開発者',
      zh: 'Faisal,Dataweal 开发者',
      es: 'Faisal, desarrollador en Dataweal',
      pt: 'Faisal, desenvolvedor na Dataweal',
      ar: 'فيصل، مطور في Dataweal',
      ko: 'Faisal, Dataweal 개발자',
    },
    why: 'Every good local-model app on iPhone asked for an account, a subscription, or a server round trip first. Pocket AI runs entirely on-device via llama.cpp with Metal acceleration — no account, no server.',
    best: 'Free, on-device chat with no account and no subscription — just a one-time Pro unlock for voice input.',
    limits: 'Closed source, and requires an iPhone 12 or newer since inference is memory-bound.',
    providedDate: '2026-09-08',
    // Verbatim, same text as the "From the Maker" section in the dedicated
    // review article (src/lib/power-local-llm/articles/pocket-ai-review.ts).
    fullQuote: [
      'Pocket AI exists because of one small frustration. Every good local-model app on iPhone asked me for something first: an account, a subscription, or a server round trip. I wanted none of those.',
      'The app runs open-weight models directly on the iPhone through llama.cpp with Metal acceleration. Qwen, Gemma, Llama, Mistral, Phi and DeepSeek are all in the catalogue, 28 models today. There is no account and no server. Once a model is downloaded the app works in airplane mode: on a plane, in a tunnel, or on a phone that has never been signed in to anything. Voice input uses Whisper, on device, so dictation never leaves the phone either.',
      'Pricing follows the same idea. The app is free and the Pro unlock is $4.99 once. No subscription. I would rather sell a thing than rent it.',
      'What it is not: it is not open source, and it is not for old hardware. An iPhone 12 or newer is a real requirement, because model inference is memory-bound and there is no honest way around that.',
      'It is a small app with one promise. Your conversation stays on your phone. That is the whole product.',
    ],
  },
}

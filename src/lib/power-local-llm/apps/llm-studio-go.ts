// Local AI App Directory — LLM Studio Go (categories: general-chat-clients; layer: mobile)
// Added 2026-10-24 at the operator's request (App Store link id6815311113). Independent PromptQuorum entry, no maker outreach.
// Verified on 2026-10-24 against: the App Store listing in the DE, US, GB, JP, KR, BR, ES, FR and SA storefronts and the iTunes lookup
// (apps.apple.com/de/app/llm-studio-go/id6815311113 — developer "Yevhenii Svistunov", seller URL vans.wtf, bundle id com.vans.llmstudio,
// free, iOS/iPadOS 18.0+, 128.6 MB, 12 interface languages, first released 2026-10-15, version 1.2.1 released 2026-10-22 18:10 UTC;
// version history: 1.2.1 2026-10-22, 1.2 2026-10-20, 1.0.9 2026-10-17, 1.0.8 2026-10-16; 0 ratings), the developer's site vans.wtf,
// the privacy policy vans.wtf/llm-studio/privacy-ios.html (effective 2026-10-18, version 1.2) and the support page vans.wtf/llm-studio/support-ios.html.
// In-app purchase "Remove Ads Forever" (non-consumable), per storefront: US $9.99, UK £9.99, DE/ES/FR 9,99 EUR, JP ¥1,500, KR ₩17,000,
// BR R$ 59,90, SA 39.99 SAR; the China storefront has no listing (lookup returned no result). Never FX-converted.
// App Store privacy labels (developer-provided): tracking = Identifiers (Device ID); linked to you (third-party advertising) = Coarse Location,
// Identifiers (Device ID), Usage Data (Product Interaction, Advertising Data); not linked = Diagnostics (third-party advertising, developer's advertising, analytics).
// Name collision: NOT LM Studio (lmstudio.ai, whose own iPhone app is called "Locally" per lmstudio.ai/changelog/lmstudio-v0.4.16). No affiliation is stated.
// The developer's site also shows an Android app "LLM Studio" (Google Play com.vans.llmstudio); it is a separate listing and not part of this entry.
// No source repository found; no dedicated product website (vans.wtf is the developer's portfolio, hosting the iOS privacy policy and support page).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llm-studio-go',
  name: 'LLM Studio Go',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local', // per the listing and policy, inference runs on the device; model downloads, optional web search and Google ads use the network; not audited
  platforms: ['ios'], // iPhone and iPad, iOS/iPadOS 18.0+
  worksWith: ['Hugging Face', 'DuckDuckGo'], // GGUF and MLX models downloaded from Hugging Face; optional DuckDuckGo search; optional OpenAI-compatible local API
  engine: 'builtin', // runs its own on-device engines for GGUF and MLX models (engine names not stated on the listing)
  license: 'Closed source', // no repository or license text found
  price: 'freemium', // free with ads; one-time "Remove Ads Forever" in-app purchase
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends on the model; song generation needs an iPhone/iPad with at least 12 GB RAM per the listing
  stars: null, // no public repository
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'vans.wtf',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/llm-studio-go/id6815311113',
    web: 'https://vans.wtf',
  },
  installEffort: 'installer',
  installEvidence:
    'App Store listing id6815311113 checked 2026-10-24 in nine storefronts: standard App Store install, no terminal step; version 1.2.1, iOS/iPadOS 18.0+, 128.6 MB; AI models are a separate in-app download.',
  tagline: {
    en: 'Free, ad-supported local AI app for iPhone and iPad: chat, voice, images, music and speech with GGUF and MLX models; not related to LM Studio',
    de: 'Kostenlose, werbefinanzierte lokale KI-App für iPhone und iPad: Chat, Sprache, Bilder, Musik und Sprachausgabe mit GGUF- und MLX-Modellen; nicht mit LM Studio verbunden',
    fr: "App IA locale gratuite et financée par la publicité pour iPhone et iPad : chat, voix, images, musique et synthèse vocale avec des modèles GGUF et MLX ; sans lien avec LM Studio",
    ja: 'iPhone・iPad向けの無料の広告付きローカルAIアプリ。GGUF・MLXモデルでチャット、音声、画像、音楽、読み上げに対応。LM Studioとは無関係',
    zh: '适用于 iPhone 和 iPad 的免费、含广告本地 AI 应用，用 GGUF 和 MLX 模型提供聊天、语音、图像、音乐和朗读；与 LM Studio 无关',
    es: 'App de IA local gratuita y con anuncios para iPhone y iPad: chat, voz, imágenes, música y lectura en voz alta con modelos GGUF y MLX; sin relación con LM Studio',
    pt: 'App de IA local gratuito e com anúncios para iPhone e iPad: chat, voz, imagens, música e leitura em voz alta com modelos GGUF e MLX; sem relação com o LM Studio',
    ar: 'تطبيق ذكاء اصطناعي محلي مجاني بإعلانات لأجهزة iPhone وiPad: دردشة وصوت وصور وموسيقى وقراءة صوتية بنماذج GGUF وMLX؛ لا علاقة له بـ LM Studio',
    ko: 'iPhone·iPad용 무료 광고 포함 로컬 AI 앱. GGUF·MLX 모델로 채팅, 음성, 이미지, 음악, 음성 읽기 지원. LM Studio와 무관',
  },
  // Each value taken from the App Store description (DE, 2026-10-24); a missing key = not stated there, never false.
  // offline = the listing says downloaded models work offline; importModels = "import your own files"; modelDownloads = in-app GGUF/MLX browser and download manager;
  // visionInput = images attached to chats with supported vision models; voice = on-device voice conversation and text-to-speech.
  compare: { offline: true, importModels: true, modelDownloads: true, visionInput: true, voice: true },
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-22', // App Store version history: 1.2.1 released 2026-10-22 18:10 UTC, read 2026-10-24
  lastUpstreamUpdateSource: 'https://apps.apple.com/de/app/llm-studio-go/id6815311113',
  reviewSlug: 'llm-studio-go-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.2.1',
    versionSourceUrl: 'https://apps.apple.com/de/app/llm-studio-go/id6815311113',
  },
  verdict:
    'Best for iPhone and iPad owners who want a free local AI app that also makes voice, images, music and speech, and accept ads, closed source and App Store privacy labels that list tracking identifiers; limited by an app that is one week old with no ratings yet and no hands-on testing by us',
}

// Local AI App Directory — Haplo AI: Offline & Private AI (layer: iPhone / iPad / Mac chat client)
// Added 2026-10-24 on request. Facts verified 2026-10-24 against: the App Store listing (apps.apple.com/us/app/haplo-ai-offline-private-ai/id6746702574,
// read as raw HTML incl. the version-history page and the iTunes lookup API: seller Haplo, LLC, bundle com.Haplo.LocalHaploAI, v2.5,
// currentVersionReleaseDate 2026-10-22, first release 2025-06-03, 25 versions 1.1-2.5 all with the generic note "This version includes
// (feature enhancements and) bug fixes", iOS/iPadOS 17.0+, macOS 15.0+ with Apple M1 or later, visionOS 1.0+, 213.9 MB, listing page shows
// Age Rating 18+, privacy label "Data Not Collected", 76 US ratings averaging 3.9 [51 five-star, 15 one-star]), the storefronts US/DE/ES/JP/KR/BR,
// the maker's site haploapp.com (product page /haplo_ai, /PrivacyPolicy effective 2026-10-04, /help, /about, /press) and the maker's two
// blog guides (run-ai-offline-on-iphone, updated 2026-10-04; run-llm-locally-on-mac, updated 2026-10-11) which describe the app from its source code.
// Per-storefront PURCHASE price (iTunes lookup, 2026-10-24): US $5.99, DE/ES 6,99 EUR, JP JPY 1,000, KR KRW 9,900, BR R$ 39,90; not listed in the FR storefront.
// In-app purchase "Haplo AI Premium" (US: monthly $1.99, annual $12.99; other storefronts show two unlabeled amounts: DE/ES 1,99 and 14,99 EUR,
// JP JPY 300 and 2,000, KR KRW 3,300 and 22,000, BR R$ 12,90 and R$ 79,90).
// CONFLICTS between sources, stated in the review rather than resolved: the listing's description says "No subscription required - one-time
// download" and names Gemma 2B, Phi-3 Mini, Mistral 7B and Llama 3, while the listing itself shows a $5.99 price plus Premium subscriptions, the
// maker's Mac guide (2026-10-11) says the app is free to download but new users subscribe before they can chat, and the site names Qwen, Phi,
// Ministral and SmolLM. The site's own price line ("$1.99/mo or $12.99/yr") omits the purchase price. The site's hero also advertises on-device
// video generation, which no other source details.
// No public source repository or licence text found, so closed source. No maker comment received: no `founder` block, no founderReviewedDate.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'haplo-ai',
  name: 'Haplo AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile', 'desktop'], // iPhone/iPad app and a native macOS build (the maker's Mac guide: "not the iPhone app running on a Mac"), one App Store listing
  locality: 'local', // maker: models run on the device after a download from Hugging Face, no Haplo server sees chats; the web search, maps and browser tools send queries out when they run (privacy policy 2026-10-04)
  platforms: ['ios', 'mac'], // iOS/iPadOS 17.0+, macOS 15.0+ with Apple silicon (M1 or later); the listing also shows visionOS
  worksWith: ['Hugging Face', 'Apple Maps', 'DuckDuckGo', 'Apple Health'], // model host, Maps tool, web-search tool, Health tool (privacy policy)
  engine: 'builtin', // llama.cpp with 4-bit GGUF models, per the maker's guides; Apple's on-device model is also usable on macOS 26+ with Apple Intelligence
  license: 'Closed source', // no repository or licence text found
  price: 'paid', // US listing: $5.99 purchase price plus in-app Premium ($1.99 monthly or $12.99 annual); sources disagree on whether a subscription is required
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // the model list is filtered by device memory; no minimum RAM stated
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'image', 'code', 'phone'],
  url: 'haploapp.com/haplo_ai',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/haplo-ai-offline-private-ai/id6746702574',
    web: 'https://www.haploapp.com/haplo_ai',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6746702574 (iPhone, iPad and Mac App Store, one universal listing; iOS/iPadOS 17.0+, macOS 15.0+ with M1 or later; 213.9 MB; v2.5 released 2026-10-22), read 2026-10-24; models download inside the app afterwards',
  tagline: {
    en: 'iPhone, iPad and Mac app that downloads open models such as Qwen and Phi and runs chat, image input and image generation on the device, with no account',
    de: 'App für iPhone, iPad und Mac, die offene Modelle wie Qwen und Phi lädt und Chat, Bildeingabe und Bilderzeugung auf dem Gerät ausführt, ohne Konto',
    fr: "Application iPhone, iPad et Mac qui télécharge des modèles ouverts comme Qwen et Phi et exécute chat, entrée d'images et génération d'images sur l'appareil, sans compte",
    ja: 'QwenやPhiなどのオープンモデルをダウンロードし、チャット・画像入力・画像生成を端末内で実行するiPhone・iPad・Mac向けアプリ。アカウント不要',
    zh: '适用于 iPhone、iPad 和 Mac 的应用，下载 Qwen、Phi 等开放模型，在设备上运行聊天、图像输入和图像生成，无需账号',
    es: 'App para iPhone, iPad y Mac que descarga modelos abiertos como Qwen y Phi y ejecuta chat, entrada de imágenes y generación de imágenes en el dispositivo, sin cuenta',
    pt: 'App para iPhone, iPad e Mac que baixa modelos abertos como Qwen e Phi e executa chat, entrada de imagens e geração de imagens no aparelho, sem conta',
    ar: 'تطبيق لأجهزة iPhone وiPad وMac ينزّل نماذج مفتوحة مثل Qwen وPhi ويشغّل الدردشة وإدخال الصور وتوليدها على الجهاز، دون حساب',
    ko: 'Qwen, Phi 같은 오픈 모델을 내려받아 채팅, 이미지 입력, 이미지 생성을 기기에서 실행하는 iPhone·iPad·Mac 앱으로 계정이 필요 없음',
  },
  // Comparison attributes, each read from the App Store description/the maker's site and guides on 2026-10-24; a missing key = not stated,
  // never false. offline = the listing and site state it works offline after the model download; modelDownloads = in-app model manager;
  // visionInput = "attach images to your conversations" (listing) / vision model (site); builtInEngine = runs models itself (llama.cpp).
  // importModels, voice, ollama, customEndpoint, mcp and fileChat are not stated by any source.
  compare: { offline: true, modelDownloads: true, visionInput: true, builtInEngine: true },
  reviewSlug: 'haplo-ai-review',
  pqReview: {
    date: '2026-10-24', // 2.5 = version on the App Store listing that day (released 2026-10-22)
    version: '2.5',
    versionSourceUrl: 'https://apps.apple.com/us/app/haplo-ai-offline-private-ai/id6746702574',
  },
  verdict:
    'Best for: iPhone and Mac owners who want a ready-made app that downloads open models and runs chat, images and image generation on the device. Limits: closed source, an unclear price (a purchase price plus Premium subscriptions that the sources describe differently), a 3.9 average from 76 US ratings, and web-search and browser tools that do send data out.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-22', // iTunes lookup currentVersionReleaseDate 2026-10-22T13:06:08Z (v2.5), confirmed on the listing's version history, read 2026-10-24
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/haplo-ai-offline-private-ai/id6746702574',
}

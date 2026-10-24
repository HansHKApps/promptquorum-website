// Local AI App Directory — CompactifAI APP by Multiverse Computing (layer: mobile chat, iPhone/iPad/Android; hybrid on-device + cloud API)
// Added 2026-10-24. Facts verified 2026-10-24 against: the App Store listing (apps.apple.com/us/app/compactifai/id6749544702, raw
// HTML + iTunes lookup API: v2.10.0, currentVersionReleaseDate 2026-09-08, first release 2026-03-02, iOS/iPadOS 16.4+, 84.1 MB,
// English only, 4+, seller MULTIVERSE COMPUTING SL., free, privacy label "Data Not Collected", 0 ratings), the Google Play listing
// (com.multiversecomputing.compactifaizoo: v2.10.4, "Updated on Sep 11, 2026", 5K+ downloads, rated Everyone, data-safety form says
// the app may collect name and email and may share crash logs and approximate location for analytics), multiversecomputing.com/compactifai-app
// (store buttons; "optimized to run locally on your device — even without an internet connection"; "Not available in your region?
// Contact us to get the APP") and the maker's press release of 2026-03-03 (offline on-device models or cloud models via API, smart query
// routing; compression figures there are the maker's own claims) plus its 2025-11-10 blog post (on-device Llama 3.1 8B Slim, cloud
// DeepSeek R1 Slim, a router model).
// LOCALITY = hybrid. CONFLICT stated in the review, not resolved: the maker's site and press release describe offline on-device
// models, but the current App Store/Play descriptions (v2.10) describe model access "through our API" (Quasar 438B, GLM 5.3) and do
// not mention offline use. Not installed or tested, so which models actually run on the phone today is unverified.
// App Store lookup by id: available in US/DE/FR/ES/JP/KR/BR/GB/CA/AU/IN, not found for SA and CN (2026-10-24).
// No source repository found: closed source. Privacy policy: multiversecomputing.com/privacy-policy (generic, covers website and apps).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'compactifai-app',
  name: 'CompactifAI APP',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'hybrid', // maker: compressed models can run offline on the phone, or chat can use cloud models via the maker's API; current store text mentions only the API models
  platforms: ['ios', 'android'], // iPhone and iPad (iOS/iPadOS 16.4+) and Android (Google Play, package com.multiversecomputing.compactifaizoo)
  worksWith: ['Multiverse Computing CompactifAI API'],
  engine: 'both', // maker: on-device compressed models plus API-hosted models; the on-device runtime is not named
  license: 'Closed source', // no public repository found
  price: 'free', // free download on both stores; no paid tier found in the sources checked
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated; App Store size 84.1 MB before any model download
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'multiversecomputing.com/compactifai-app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/compactifai/id6749544702',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo',
    web: 'https://multiversecomputing.com/compactifai-app',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6749544702 (free, iOS/iPadOS 16.4+, v2.10.0 released 2026-09-08, 84.1 MB) and Google Play listing com.multiversecomputing.compactifaizoo (v2.10.4, updated 2026-09-11, 5K+ downloads), both read 2026-10-24; standard store install, no terminal step. The site says to contact the maker if the app is not available in your region',
  tagline: {
    en: 'Free iPhone and Android chat app from Multiverse Computing that offers compressed AI models for offline use and larger models through the maker\'s cloud API',
    de: 'Kostenlose Chat-App für iPhone und Android von Multiverse Computing, die komprimierte KI-Modelle für die Offline-Nutzung und größere Modelle über die Cloud-API des Herstellers bietet',
    fr: 'Appli de chat gratuite pour iPhone et Android de Multiverse Computing, qui propose des modèles d’IA compressés pour un usage hors ligne et des modèles plus grands via l’API cloud de l’éditeur',
    ja: 'Multiverse Computing提供のiPhone・Android向け無料チャットアプリ。オフライン用の圧縮AIモデルと、同社クラウドAPI経由のより大きなモデルを利用できる',
    zh: 'Multiverse Computing 推出的 iPhone 和 Android 免费聊天应用，提供可离线使用的压缩 AI 模型，以及通过厂商云 API 调用的更大模型',
    es: 'App de chat gratuita para iPhone y Android de Multiverse Computing que ofrece modelos de IA comprimidos para uso sin conexión y modelos más grandes mediante la API en la nube del fabricante',
    pt: 'App de chat gratuito para iPhone e Android da Multiverse Computing que oferece modelos de IA comprimidos para uso offline e modelos maiores pela API em nuvem da empresa',
    ar: 'تطبيق دردشة مجاني لـ iPhone وAndroid من Multiverse Computing يقدّم نماذج ذكاء اصطناعي مضغوطة للاستخدام دون اتصال ونماذج أكبر عبر واجهة API السحابية للشركة',
    ko: 'Multiverse Computing이 만든 iPhone·Android용 무료 채팅 앱으로, 오프라인용 압축 AI 모델과 제조사 클라우드 API를 통한 더 큰 모델을 제공합니다',
  },
  // Comparison attributes (mobile-chat segment). offline and modelDownloads are the maker's statements (site: runs locally "even without
  // an internet connection"; press release 2026-03-03: "download AI models directly to their device"); the current v2.10 store text
  // does not repeat them and nothing was tested. importModels, visionInput and voice are not stated — left unset, never false.
  compare: { offline: true, modelDownloads: true },
  reviewSlug: 'compactifai-app-review',
  pqReview: {
    date: '2026-10-24',
    version: '2.10.4',
    versionSourceUrl: 'https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo',
  },
  verdict: 'Worth a look for iPhone and Android users who want a free, no-subscription app from a compression specialist and mainly use its cloud-hosted models; limited by closed source, store text that no longer mentions offline use, an unverified on-device model list, region limits and no independent tests.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-09-11', // Google Play "Updated on Sep 11, 2026" (v2.10.4); App Store v2.10.0 released 2026-09-08
  lastUpstreamUpdateSource: 'https://play.google.com/store/apps/details?id=com.multiversecomputing.compactifaizoo',
}

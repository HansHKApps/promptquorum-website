// Local AI App Directory — On Device LLM (Google Play title "Local LLM"; layer: mobile / Android)
// Added 2026-10-26 on request (Google Play link com.ondevicellm). Verified on 2026-10-26 against: the Google Play listing
// (title "Local LLM", store-page byline "Feather AI", developer account "Raushan kumar Pandey", India; version 1.0, updated
// 2026-09-11, Android 7.0+ 64-bit, 100+ downloads, Productivity, Everyone, Data safety "No data shared with third parties" and
// "No data collected", description says no account, no ads) and the developer's own site on-device-llm-ff80d.web.app with its
// privacy policy (last updated 24 August 2026; app id com.ondevicellm). DIFFERENT app from the iOS tiles `on-device-ai` and
// `ai-on-device`, and from `on-device-ai-translator` (different developer, platform and package). The developer publishes no
// source repository that was found, so the license is recorded as closed source. The engine is NOT named anywhere (models are
// GGUF files per the listing), so `engine` is `builtin` and no runtime name is claimed. The privacy policy states Firebase
// Analytics (anonymous usage events) while the Play Data safety card says "No data collected" — flagged in the review.
// The policy's contact address is the placeholder SUPPORT@EXAMPLE.COM; the Play listing shows a real support email.
// Last upstream update 2026-09-11 is 45 days before 2026-10-26, so no stale warning.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'on-device-llm',
  name: 'On Device LLM (Local LLM)',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local', // listing and policy: inference runs on the phone; only model downloads, a config read and anonymous analytics use the network
  platforms: ['android'], // Google Play only, Android 7.0+, 64-bit; no iOS or desktop build found
  worksWith: ['Hugging Face', 'OpenAI-compatible clients'], // default model host huggingface.co per the privacy policy; optional local OpenAI-compatible API on the phone
  engine: 'builtin', // runtime not named by the developer; models are GGUF files per the listing
  license: 'Closed source', // no public source repository found
  price: 'free', // free install on Google Play; description says no ads; no in-app purchase is named
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // listing: roughly 1-3 GB free RAM depending on the model, 64-bit Android 7.0+
  stars: null,
  addedDate: '2026-10-26',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'on-device-llm-ff80d.web.app',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.ondevicellm',
    web: 'https://on-device-llm-ff80d.web.app',
  },
  installEffort: 'installer',
  installEvidence: 'Google Play listing com.ondevicellm (free install, Android 7.0+ 64-bit, 100+ downloads, v1.0 updated 2026-09-11; first model download of 369 MB or more), read 2026-10-26',
  tagline: {
    en: 'New free Android chat app that runs open-weight models offline, with GGUF import and an optional local OpenAI-compatible API',
    de: 'Neue kostenlose Android-Chat-App, die Open-Weight-Modelle offline ausführt, mit GGUF-Import und optionaler lokaler OpenAI-kompatibler API',
    fr: 'Nouvelle appli de chat Android gratuite qui exécute des modèles open-weight hors ligne, avec import GGUF et API locale compatible OpenAI en option',
    ja: 'オープンウェイトモデルをオフラインで実行する新しい無料のAndroidチャットアプリ。GGUFの読み込みと、任意のOpenAI互換ローカルAPIに対応',
    zh: '全新的免费 Android 聊天应用，可离线运行开放权重模型，支持导入 GGUF，并提供可选的本地 OpenAI 兼容 API',
    es: 'Nueva app de chat gratuita para Android que ejecuta modelos open-weight sin conexión, con importación GGUF y API local compatible con OpenAI opcional',
    pt: 'Novo app de chat gratuito para Android que executa modelos open-weight offline, com importação de GGUF e API local compatível com OpenAI opcional',
    ar: 'تطبيق دردشة جديد ومجاني لنظام Android يشغّل نماذج مفتوحة الأوزان دون اتصال، مع استيراد GGUF وواجهة API محلية اختيارية متوافقة مع OpenAI',
    ko: '오픈 웨이트 모델을 오프라인으로 실행하는 새로운 무료 Android 채팅 앱. GGUF 가져오기와 선택형 로컬 OpenAI 호환 API 지원',
  },
  // Comparison attributes (mobile-chat segment), read from the Play description on 2026-10-26: offline (no internet needed once a
  // model is downloaded), modelDownloads (seven models downloadable in-app), importModels (paste a direct link to any GGUF).
  // visionInput / voice are not stated — left unset, never false.
  compare: { offline: true, modelDownloads: true, importModels: true },
  reviewSlug: 'on-device-llm-review',
  pqReview: {
    date: '2026-10-26',
    version: '1.0',
    versionSourceUrl: 'https://play.google.com/store/apps/details?id=com.ondevicellm',
  },
  verdict: 'Worth a look for Android users who want a free, account-less offline chat app with a GGUF import and a local API, as long as they accept a recently released, closed-source, 100+-install project from a single developer.',
  lastVerifiedDate: '2026-10-26',
  lastUpstreamUpdate: '2026-09-11', // Google Play "Updated on Sep 11, 2026" (version 1.0)
  lastUpstreamUpdateSource: 'https://play.google.com/store/apps/details?id=com.ondevicellm',
}

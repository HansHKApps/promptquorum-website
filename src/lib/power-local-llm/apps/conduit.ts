// Local AI App Directory — Conduit (conduit.mobile) by an individual developer (GitHub cogwheel0; App Store seller Tunap Paul)
// (layer: mobile chat client for self-hosted Open WebUI, direct OpenAI-compatible/Ollama/OpenRouter endpoints, LibreChat (beta) and Hermes agents)
// Added 2026-11-17 on request. Not tested hands-on; no maker outreach, no founder-review badge.
// Facts verified 2026-11-17 against: conduit.mobile, the App Store listing (id6749840287 + iTunes lookup API: v4.3.1, released 2026-11-11,
// iOS 16.0+, 122.6 MB, seller Tunap Paul, "Data Not Collected" label), the Google Play listing (app.cogwheel.conduit: Install button, no price,
// 10K+ downloads, updated 2026-11-11), the GitHub repo cogwheel0/conduit (GPL-3.0 LICENSE, README, PRIVACY_POLICY.md effective 2026-11-09,
// releases v4.3.1 2026-11-11 with APK/AAB/IPA assets, last push 2026-11-17) and cogwheel.app (maker page, no address).
// PRICE: App Store is a paid download (US $3.99, DE/ES/FR 3,99 €, JP ¥600, KR ₩6,600, BR R$ 24,90 per the lookup API) while Google Play shows
// no price, the GitHub releases carry free APKs and the website says "free, no paid tiers" -> recorded as freemium (free path exists, iOS pays).
// LOCALITY = hybrid: client for the user's own Open WebUI/LibreChat/Hermes server or provider endpoints; Apple On-Device (iOS 26) runs on the phone.
// Mac: the README describes Conduit Desktop (Apple Silicon, desktop-v tags) but none of the 100 newest GitHub releases carries a desktop tag
// (checked 2026-11-17), so 'mac' is NOT listed in platforms.
// HQ country: not clear. The privacy policy, the App Store listing (no seller address), the website and cogwheel.app name no company, address,
// governing law or authority, and the project has no impressum -> hqCountry/hqCountrySource left unset (owner decision pending).
// Stars: GitHub API 2472 on 2026-11-17.
// Last upstream update: 2026-11-17 (GitHub pushed_at; latest release 2026-11-11) -> NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'conduit',
  name: 'Conduit',
  categories: ['general-chat-clients', 'voice-assistants'],
  interfaces: ['mobile'],
  locality: 'hybrid', // your own Open WebUI / LibreChat / Hermes server or provider endpoints; Apple On-Device model on iOS 26 (README, privacy policy)
  platforms: ['ios', 'android'],
  worksWith: ['Open WebUI', 'Ollama', 'LM Studio', 'OpenRouter', 'LibreChat', 'Hermes Agent'],
  engine: 'both', // Apple's on-device model runs on the phone; every other backend is an external server or provider
  license: 'GPL-3.0',
  price: 'freemium', // App Store paid ($3.99 US); Google Play listed without a price; free GitHub APKs; website says free with no paid tiers
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // models run on the server/provider; no minimum stated
  stars: 2472,
  addedDate: '2026-11-17',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'conduit.mobile',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287',
    googlePlay: 'https://play.google.com/store/apps/details?id=app.cogwheel.conduit',
    web: 'https://conduit.mobile',
    github: 'https://github.com/cogwheel0/conduit',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-17 the App Store listing (id6749840287, v4.3.1, iOS 16.0+, 122.6 MB, $3.99 US) and the Google Play listing (app.cogwheel.conduit, Install button) were live, and GitHub release v4.3.1 carried app-arm64-v8a-release.apk, app-armeabi-v7a-release.apk, app-release.aab and conduit.ipa. A backend (your own Open WebUI, LibreChat, Hermes server or provider endpoint) is needed except for the Apple On-Device option.',
  tagline: {
    en: 'iPhone and Android client for your own Open WebUI server that also connects to OpenAI-compatible endpoints, Ollama, OpenRouter and Hermes agents, with voice calls',
    de: 'iPhone- und Android-Client für Ihren eigenen Open-WebUI-Server, der auch OpenAI-kompatible Endpunkte, Ollama, OpenRouter und Hermes-Agenten anbindet, mit Sprachanrufen',
    fr: 'Client iPhone et Android pour votre propre serveur Open WebUI, qui se connecte aussi à des points d’accès compatibles OpenAI, Ollama, OpenRouter et des agents Hermes, avec appels vocaux',
    ja: '自分のOpen WebUIサーバー向けのiPhone・Androidクライアント。OpenAI互換エンドポイント、Ollama、OpenRouter、Hermesエージェントにも接続でき、音声通話に対応',
    zh: '面向自建 Open WebUI 服务器的 iPhone 和 Android 客户端，也可连接兼容 OpenAI 的接口、Ollama、OpenRouter 和 Hermes 智能体，支持语音通话',
    es: 'Cliente para iPhone y Android para tu propio servidor Open WebUI que también conecta con endpoints compatibles con OpenAI, Ollama, OpenRouter y agentes Hermes, con llamadas de voz',
    pt: 'Cliente para iPhone e Android para o seu próprio servidor Open WebUI que também conecta a endpoints compatíveis com OpenAI, Ollama, OpenRouter e agentes Hermes, com chamadas de voz',
    ar: 'عميل لـ iPhone وAndroid لخادم Open WebUI الخاص بك، ويتصل أيضًا بنقاط نهاية متوافقة مع OpenAI وبـ Ollama وOpenRouter ووكلاء Hermes، مع مكالمات صوتية',
    ko: '직접 운영하는 Open WebUI 서버용 iPhone·Android 클라이언트로, OpenAI 호환 엔드포인트, Ollama, OpenRouter, Hermes 에이전트에도 연결하며 음성 통화를 지원',
  },
  // Comparison attributes read from conduit.mobile and the README on 2026-11-17: offline (Apple On-Device works offline on eligible iOS 26 devices),
  // visionInput (file and image attachments, multimodal prompts), voice (voice input + voice-call mode), customLlm (own OpenAI-compatible/Ollama
  // endpoints). importModels, modelDownloads, fullyLocal, bargeIn and telephony are not stated — left unset, never false.
  compare: { offline: true, visionInput: true, voice: true, customLlm: true },
  reviewSlug: 'conduit-review',
  pqReview: {
    date: '2026-11-17',
    version: '4.3.1',
    versionSourceUrl: 'https://github.com/cogwheel0/conduit/releases/tag/v4.3.1',
  },
  verdict: 'Best for people who already self-host Open WebUI or run their own model endpoints and want a native, GPL-3.0 phone client that copes with reverse-proxy sign-in, if they accept that its performance and voice quality are untested, that the iOS version is paid while the site says free, and that the maker is an individual with no stated company or country.',
  lastVerifiedDate: '2026-11-17',
  lastUpstreamUpdate: '2026-11-17', // GitHub pushed_at 2026-11-17T17:47Z (API, 2026-11-17); latest release v4.3.1 published 2026-11-11
  lastUpstreamUpdateSource: 'https://github.com/cogwheel0/conduit (last push 2026-11-17; latest release v4.3.1 2026-11-11)',
}

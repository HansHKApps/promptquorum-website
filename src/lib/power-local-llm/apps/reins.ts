// Local AI App Directory — Reins: for Ollama & LM Studio (layer: mobile chat client, iPhone/iPad/Mac)
// Added 2026-10-30 on request. Facts verified 2026-10-30 against: the App Store listing (apps.apple.com/us/app/id6739738501 and the iTunes
// lookup API: v2.3.3, currentVersionReleaseDate 2026-10-21, first release 2025-01-02, iOS 17.0+, 72.8 MB, free, seller Ibrahim Cetin),
// getreins.app (feature list, links to /privacy and /terms), getreins.app/privacy (last updated 2026-09-20), getreins.app/terms and the
// GitHub repo ibrahimcetin/reins (GPL-3.0 licence file, 557 stars, README: "contains the source code of Reins up to version 1.3.4").
// LOCALITY = hybrid: the app is a client for the user's own Ollama / LM Studio / OpenAI-compatible server (and Ollama Cloud) AND runs MLX
// models and Apple Foundation Models on the device. Not tested hands-on.
// LICENCE: the repo is GPL-3.0, but only up to v1.3.4 (Android APK and macOS DMG releases, last 2025-03-10); the current v2 line is distributed
// through the App Store only and the Terms of Use forbid copying, modifying and reverse engineering, so it is recorded as closed source.
// Pro (App Store, checked 2026-10-30): US $6.99 monthly / $39.99 yearly / $99.99 lifetime; what Pro unlocks is not stated in the listing,
// the site or the Terms.
// Not stated, left unset: importModels, voice, MCP. Mac: the listing shows macOS 14.0+ compatibility; the README says "iPhone, iPad and Mac".

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'reins',
  name: 'Reins',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'hybrid', // your own Ollama / LM Studio / OpenAI-compatible server or Ollama Cloud, or MLX and Apple Foundation Models on the device (App Store description, README)
  platforms: ['ios', 'ipados', 'mac'], // iPhone and iPad (iOS 17+); the listing also shows macOS 14+ compatibility and the README names Mac
  worksWith: ['Ollama', 'LM Studio', 'Ollama Cloud', 'MLX', 'Apple Foundation Models', 'Hugging Face'],
  engine: 'both', // runs MLX models on the device itself AND connects to external servers
  license: 'Closed source (GPL-3.0 up to v1.3.4)', // repo licence file is GPL-3.0 but the README says it holds the source only up to 1.3.4; v2 is App Store-only under restrictive Terms
  price: 'freemium', // free download; Reins Pro monthly, yearly and lifetime purchases (US storefront $6.99 / $39.99 / $99.99)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // on-device models depend on the iPhone/iPad memory; connected mode depends on the server
  stars: 557, // github.com/ibrahimcetin/reins, read 2026-10-30 (counts the old open-source line)
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'getreins.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/id6739738501',
    web: 'https://getreins.app',
    github: 'https://github.com/ibrahimcetin/reins',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6739738501 checked 2026-10-30: free download, iOS 17.0+, 72.8 MB, v2.3.3 released 2026-10-21; connected mode needs your own Ollama / LM Studio server, on-device models download from Hugging Face. GitHub Releases hold only the old v1.3.0 Android APK and macOS DMG (2025-03-10), not the current line',
  tagline: {
    en: 'iPhone and iPad chat app for your own Ollama or LM Studio server that can also run MLX models on the device, with tools and web search',
    de: 'Chat-App für iPhone und iPad für Ihren eigenen Ollama- oder LM-Studio-Server, die auch MLX-Modelle auf dem Gerät ausführen kann, mit Tools und Websuche',
    fr: 'Appli de chat pour iPhone et iPad destinée à votre propre serveur Ollama ou LM Studio, qui peut aussi exécuter des modèles MLX sur l’appareil, avec outils et recherche web',
    ja: '自分のOllamaやLM Studioサーバー向けのiPhone・iPadチャットアプリ。端末上でMLXモデルも実行でき、ツールとWeb検索に対応',
    zh: '面向自建 Ollama 或 LM Studio 服务器的 iPhone 和 iPad 聊天应用，也可在设备上运行 MLX 模型，支持工具和网页搜索',
    es: 'App de chat para iPhone y iPad pensada para tu propio servidor Ollama o LM Studio, que también puede ejecutar modelos MLX en el dispositivo, con herramientas y búsqueda web',
    pt: 'App de chat para iPhone e iPad para o seu próprio servidor Ollama ou LM Studio, que também executa modelos MLX no aparelho, com ferramentas e busca na web',
    ar: 'تطبيق دردشة لـ iPhone وiPad لخادم Ollama أو LM Studio الخاص بك، ويمكنه أيضًا تشغيل نماذج MLX على الجهاز، مع أدوات وبحث على الويب',
    ko: '직접 운영하는 Ollama·LM Studio 서버용 iPhone·iPad 채팅 앱으로, 기기에서 MLX 모델도 실행하며 도구와 웹 검색을 지원',
  },
  // Comparison attributes (mobile-chat segment), read from the App Store description and getreins.app on 2026-10-30: offline (on-device
  // models, "no server or setup required"), modelDownloads ("Browse, download, and manage models directly from the app") and visionInput
  // ("Send images and let the model analyze them") are stated. importModels and voice are not stated — left unset, never false.
  compare: { offline: true, modelDownloads: true, visionInput: true },
  reviewSlug: 'reins-review',
  pqReview: {
    date: '2026-10-30',
    version: '2.3.3',
    versionSourceUrl: 'https://apps.apple.com/us/app/id6739738501',
  },
  verdict: 'Best for iPhone and iPad owners who already run Ollama or LM Studio at home and want a free, login-free chat client that can also run MLX models offline, if they accept that the v2 app is closed source and that what the paid Pro tier unlocks is not documented.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-21', // App Store currentVersionReleaseDate 2026-10-21T13:09:18Z (v2.3.3), read 2026-10-30
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/id6739738501',
}

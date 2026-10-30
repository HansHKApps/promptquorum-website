// Local AI App Directory — Cloak: Local AI (layer: mobile / iPhone, iPad; Mac sibling "Cloak: Local AI Chat")
// Added 2026-10-30 on request (App Store id6781878402 iPhone/iPad, id6821064382 Mac). Verified on 2026-10-30 against: the App Store listing
// (raw HTML, US storefront, incl. the developer-declared privacy label), the iTunes lookup API (iPhone/iPad: seller "Polyaura LLC", v1.2.9
// released 2026-10-27, first release 2026-06-25, 18 MB, iOS/iPadOS 18.0+, English only, 3 ratings avg 4.67; Mac: v1.0 released 2026-10-20,
// 3.7 MB, macOS 26.0+; price $1.99 US / 1,99 EUR DE-ES-FR / JPY 300 / KRW 3,300 / BRL 12,90, identical for both apps), the official site
// polyaura.com (/cloak/ios, /cloak/mac, /changelog, /learn) and the privacy policy polyaura.com/privacy (last updated 2026-10-27).
// LOCALITY = local: chat, Voice Memos (Apple on-device speech recognition) and Recap run on the device. Network paths per the policy: model
// downloads from Hugging Face (iPhone/iPad and Mac), an optional one-question setup survey and OPT-IN daily feature-use counts (iPhone/iPad
// only, off by default; sent to polyaura.com on Netlify, no identifiers). The Mac app sends nothing else. The model is not named anywhere.
// Closed source, no public repository. Official website exists, so `url` is the website and the App Store listing is in storeLinks.
// Not tested hands-on; no maker contact.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'cloak-local-ai',
  name: 'Cloak: Local AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile', 'desktop'], // iPhone/iPad app plus a separate native Mac app (Cloak: Local AI Chat)
  locality: 'local', // on-device after a one-time model download; optional survey + opt-in usage counts on iPhone/iPad (no content, no identifiers, per the policy)
  platforms: ['ios', 'mac'], // iPhone/iPad (iOS/iPadOS 18.0+); Mac (macOS 26.0+, Apple silicon), sold as a separate listing
  worksWith: ['Apple Intelligence', 'Hugging Face'], // Apple Intelligence answers until the model is ready; models are downloaded from Hugging Face
  engine: 'builtin', // one recommended model chosen and downloaded by the app; no model picker, model name not published
  license: 'Closed source', // no public repository found
  price: 'paid', // one-time purchase $1.99 (US) per app; no subscription; iPhone listing shows no in-app purchases (read 2026-10-30)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: false }, // model and its size are not stated; Mac needs Apple silicon
  stars: null,
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'polyaura.com/cloak', // official website (iPhone + Mac product pages); the App Store listing is in storeLinks
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/cloak-local-ai/id6781878402',
    web: 'https://polyaura.com/cloak/',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6781878402 (paid download, iOS/iPadOS 18.0+, v1.2.9 released 2026-10-27) and Mac App Store listing id6821064382 (macOS 26.0+, Apple silicon, v1.0 released 2026-10-20); no other install path, read 2026-10-30',
  tagline: {
    en: 'Paid-once iPhone, iPad and Mac chat app that downloads one recommended model and then answers on the device, with Voice Memos and Recap on iPhone',
    de: 'Chat-App für iPhone, iPad und Mac im Einmalkauf, die ein empfohlenes Modell lädt und dann auf dem Gerät antwortet, mit Sprachmemos und Recap auf dem iPhone',
    fr: 'Appli de chat à achat unique pour iPhone, iPad et Mac qui télécharge un modèle recommandé puis répond sur l’appareil, avec mémos vocaux et Recap sur iPhone',
    ja: '推奨モデルを一度ダウンロードして端末内で回答する、買い切りのiPhone・iPad・Mac向けチャットアプリ。iPhoneにはボイスメモとRecapあり',
    zh: '一次性付费的 iPhone、iPad 和 Mac 聊天应用：下载一个推荐模型后在设备上作答，iPhone 版带语音备忘录和 Recap',
    es: 'App de chat de pago único para iPhone, iPad y Mac que descarga un modelo recomendado y responde en el dispositivo, con notas de voz y Recap en iPhone',
    pt: 'App de chat de pagamento único para iPhone, iPad e Mac que baixa um modelo recomendado e responde no aparelho, com Notas de Voz e Recap no iPhone',
    ar: 'تطبيق دردشة بشراء لمرة واحدة لأجهزة iPhone وiPad وMac ينزّل نموذجًا موصى به ثم يجيب على الجهاز، مع مذكرات صوتية وRecap على iPhone',
    ko: '추천 모델을 한 번 내려받아 기기에서 답하는 1회 구매형 iPhone·iPad·Mac 채팅 앱. iPhone에는 음성 메모와 Recap 제공',
  },
  // Comparison attributes, read 2026-10-30: offline (policy: the AI works without internet once the model is downloaded), modelDownloads (the app
  // downloads its model from Hugging Face, but the user cannot choose it) and builtInEngine (the app runs the model itself). importModels,
  // visionInput, voice (Voice Memos are transcribed by Apple speech recognition, which is not model voice I/O), ollama, customEndpoint, mcp and
  // fileChat are not stated for the iPhone/Mac chat — left unset, never false.
  compare: { offline: true, modelDownloads: true, builtInEngine: true },
  reviewSlug: 'cloak-local-ai-review',
  pqReview: {
    date: '2026-10-30',
    version: '1.2.9',
    versionSourceUrl: 'https://apps.apple.com/us/app/cloak-local-ai/id6781878402',
  },
  verdict: 'Worth a look for iPhone, iPad and Mac owners who want setup-free on-device chat in a one-time purchase and accept that the model is unnamed, the code is closed and no hands-on test was done here.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-27', // App Store version 1.2.9 (iTunes lookup currentVersionReleaseDate 2026-10-27T16:26:47Z); Mac 1.0 on 2026-10-20; 3 days before 2026-10-30, so no stale warning
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/cloak-local-ai/id6781878402',
}

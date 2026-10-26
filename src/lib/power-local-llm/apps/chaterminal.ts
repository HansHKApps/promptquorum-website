// Local AI App Directory — Mobile LM Server by "chaterminal" (layer: mobile / Android, on-device chat + API server)
// Added 2026-10-26 on request (Google Play link com.chaterminal.mobilellm). Verified on 2026-10-26 against: the Google Play
// listing (title "Mobile LM Server - Local AI", developer account "chaterminal", an individual in China; v1.1.10, updated
// 2026-10-22, Android 7.0+, 1K+ downloads, 3.8 from 45 ratings, category Tools, "Contains ads" and "In-app purchases" labels,
// description: LiteRT-LM and llama.cpp GGUF engines, OpenAI- and Ollama-compatible API server, optional hybrid cloud routing,
// built-in chat; what's new: "Fixed the issue where the built-in chat of the gguf model could not use online search") and the
// privacy policy the listing links (ledger.chaterminal.com/mobilellm/index.html, a JavaScript page, read from its bundled
// script; "Effective: APRIL 2026"). The developer website chaterminal.com returned an AccessDenied error (HTTP 403) on
// 2026-10-26, so it is NOT usable; the Play listing is the only working official channel. No source repository was found
// (the GitHub project named "chaterminal" by mdgaziur is an unrelated terminal chat tool); the policy footer calls it a
// "Mobile LLM Open Source Project" but names no repository, so the licence is recorded as closed source / unverified.
// Not tested hands-on. Last upstream update 2026-10-22 is < 90 days old, so no stale warning.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'chaterminal',
  name: 'Mobile LM Server',
  categories: ['general-chat-clients', 'api-servers', 'inference-engines'],
  interfaces: ['mobile'],
  locality: 'hybrid', // inference runs on the phone, but the listing advertises optional cloud offload ("hybrid AI routing"), built-in online search and ad serving
  platforms: ['android'], // Google Play only, Android 7.0+; no iOS or desktop build found
  worksWith: ['llama.cpp', 'LiteRT-LM', 'OpenAI-compatible clients', 'Ollama-compatible clients'],
  engine: 'builtin', // ships LiteRT-LM and llama.cpp (GGUF) per the listing
  license: 'Closed source', // no repository found; the policy footer says "Open Source Project" but links nothing
  price: 'freemium', // free install; Play labels "Contains ads" and "In-app purchases" (US store shows items from $2.99; not converted for other locales)
  hardware: null, // no RAM/storage requirement stated; depends on the model loaded
  stars: null,
  addedDate: '2026-10-26',
  status: 'listed',
  uses: ['phone', 'chat', 'serve'],
  url: 'play.google.com/store/apps/details?id=com.chaterminal.mobilellm', // chaterminal.com returns AccessDenied (403) on 2026-10-26; Play listing is the only working official channel
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm',
  },
  installEffort: 'installer',
  installEvidence: 'Google Play listing com.chaterminal.mobilellm (install button, Android 7.0+, 1K+ downloads, v1.1.10 updated 2026-10-22), read 2026-10-26',
  tagline: {
    en: 'Android app that runs GGUF and LiteRT-LM models on the phone and serves them through an OpenAI- and Ollama-compatible API — contains ads and in-app purchases',
    de: 'Android-App, die GGUF- und LiteRT-LM-Modelle auf dem Telefon ausführt und über eine OpenAI- und Ollama-kompatible API bereitstellt — enthält Werbung und In-App-Käufe',
    fr: 'Appli Android qui exécute des modèles GGUF et LiteRT-LM sur le téléphone et les expose via une API compatible OpenAI et Ollama — contient des publicités et des achats intégrés',
    ja: 'GGUFとLiteRT-LMのモデルをスマートフォン上で実行し、OpenAI互換・Ollama互換のAPIで提供するAndroidアプリ。広告とアプリ内課金あり',
    zh: '在手机上运行 GGUF 和 LiteRT-LM 模型，并通过兼容 OpenAI 和 Ollama 的 API 提供服务的 Android 应用——含广告和应用内购买',
    es: 'App de Android que ejecuta modelos GGUF y LiteRT-LM en el teléfono y los ofrece mediante una API compatible con OpenAI y Ollama — con anuncios y compras integradas',
    pt: 'App para Android que executa modelos GGUF e LiteRT-LM no celular e os disponibiliza por uma API compatível com OpenAI e Ollama — com anúncios e compras no app',
    ar: 'تطبيق Android يشغّل نماذج GGUF وLiteRT-LM على الهاتف ويتيحها عبر واجهة API متوافقة مع OpenAI وOllama — يحتوي على إعلانات ومشتريات داخل التطبيق',
    ko: 'GGUF 및 LiteRT-LM 모델을 휴대폰에서 실행하고 OpenAI·Ollama 호환 API로 제공하는 Android 앱 — 광고와 인앱 구매 포함',
  },
  // Comparison attributes (mobile-chat segment), read 2026-10-26: `offline` = the Play description says models run "completely offline"
  // (hybrid cloud routing and online search are optional); `modelDownloads` = the privacy policy lists a "Model Download Successful"
  // event and the developer's Play reply mentions saving downloaded models on the device. importModels / visionInput / voice are
  // not stated in the sources read and stay unset, never false.
  compare: { offline: true, modelDownloads: true },
  reviewSlug: 'chaterminal-review',
  pqReview: {
    date: '2026-10-26',
    version: '1.1.10',
    versionSourceUrl: 'https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm',
  },
  verdict: 'A fit for Android users who want to run GGUF models and expose a phone-hosted OpenAI-style API, and who accept ads, a closed-source build, a privacy policy that also lists ad-related data collection, and a developer website that returned an error when checked.',
  lastVerifiedDate: '2026-10-26',
  lastUpstreamUpdate: '2026-10-22', // Google Play "Updated on Oct 22, 2026" (v1.1.10)
  lastUpstreamUpdateSource: 'https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm',
}

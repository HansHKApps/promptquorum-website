// Local AI App Directory — Ollama Local AI (layer: mobile)
// Added 2026-10-02 at the operator's request (Google Play package com.llmproxy).
// All fields below verified against the app's own Google Play listing on 2026-10-02
// (play.google.com/store/apps/details?id=com.llmproxy): developer FreeRouter Team, Productivity
// category, 10K+ downloads, 4.2 stars / 267 reviews, updated 2026-10-01, Data safety section
// "No data collected / No data shared with third parties", free with in-app purchases.
// NOT affiliated with the Ollama project — the listing itself says so; name kept as published on Play.
// Not verified (deliberately left unset, never guessed): license/source availability, app version number
// (the Play page does not render a version field), what the in-app purchases unlock, any developer website.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ollama-local-ai',
  name: 'Ollama Local AI',
  categories: ['general-chat-clients', 'api-servers', 'routers-gateways'],
  interfaces: ['mobile'],
  locality: 'hybrid', // runs GGUF models on-device (embedded llama.cpp) AND can route to self-hosted Ollama / llama.cpp servers and cloud APIs (OpenAI, Anthropic, NVIDIA NIM, Hugging Face)
  platforms: ['android'],
  worksWith: ['Ollama', 'llama.cpp', 'OpenAI API', 'Anthropic API', 'NVIDIA NIM', 'Hugging Face'],
  engine: 'both', // embedded llama.cpp for on-device GGUF models + external backends it proxies to
  license: 'Closed source', // not stated on the Play listing and no public repository found; treated as proprietary until the developer says otherwise
  price: 'freemium', // Play listing: free to install, offers in-app purchases
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // listing gives no RAM/Android-version floor; the on-device model size sets the real RAM need
  stars: null,
  addedDate: '2026-10-02',
  status: 'listed',
  uses: ['phone', 'serve', 'code', 'chat'],
  url: 'play.google.com/store/apps/details?id=com.llmproxy',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.llmproxy',
  },
  tagline: {
    en: 'Android app that runs GGUF models and serves an OpenAI-compatible API on your LAN',
    de: 'Android-App, die GGUF-Modelle ausführt und eine OpenAI-kompatible API im LAN bereitstellt',
    fr: "Application Android qui exécute des modèles GGUF et expose une API compatible OpenAI sur votre réseau local",
    ja: 'GGUFモデルを実行し、LAN上でOpenAI互換APIを提供するAndroidアプリ',
    zh: '可运行GGUF模型并在局域网提供OpenAI兼容API的Android应用',
    es: 'App de Android que ejecuta modelos GGUF y ofrece una API compatible con OpenAI en tu red local',
    pt: 'App Android que executa modelos GGUF e oferece uma API compatível com OpenAI na sua rede local',
    ar: 'تطبيق أندرويد يشغّل نماذج GGUF ويوفّر واجهة برمجية متوافقة مع OpenAI على شبكتك المحلية',
    ko: 'GGUF 모델을 실행하고 LAN에서 OpenAI 호환 API를 제공하는 Android 앱',
  },
  // Comparison attributes: each value verified against the app's Google Play listing on 2026-10-02;
  // a missing key = not stated there, never false. importModels/modelDownloads/visionInput/voice are
  // unset: the listing mentions selecting a local GGUF model but does not say how models are obtained,
  // and does not mention image or voice input.
  compare: { offline: true },
  lastVerifiedDate: '2026-10-02',
  reviewSlug: 'ollama-local-ai-review',
  verdict: 'Best for developers who want to point Cursor, VS Code or other OpenAI-compatible tools at their Android phone over Wi-Fi; limited by Android-only availability, no stated license or source, and an unverified in-app-purchase scope.',
}

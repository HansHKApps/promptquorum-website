// Local AI App Directory — LocalMind (layer: mobile)
// Added 2026-10-17 at the operator's request. No maker outreach — independent PromptQuorum entry.
// All fields below verified on 2026-10-17 against: the Google Play listing
// (play.google.com/store/apps/details?id=pro.momin.localmind — title "LocalMind: Ollama & LM Studio", developer
// Abdul Momin Sakib / momin.pro, 10K+ downloads, 4.4 stars from 279 reviews, "Updated on Oct 14, 2026", Data safety:
// "No data shared with third parties" and "No data collected"; the Play text describes a remote client for Ollama /
// LM Studio / OpenRouter and does not mention on-device models, a version number or a minimum Android version),
// the App Store listing (id6777025480 — v1.9.0, version released 2026-10-15, first release 2026-06-16, free, iOS 17.6+,
// 4.69 stars from 13 US ratings, privacy label "Data Not Collected"; its description is the one that names the
// on-device LiteRT-LM engine), the developer's privacy policy at momin.pro/privacy-policy-localmind (effective
// 2026-04-01) and github.com/abdulmominsakib/localmind (README, MIT license, 281 stars, created 2026-04-01,
// latest release 1.9.0+95 published 2026-10-14 with app-release.apk as its only asset, last push 2026-10-16).
// Last upstream update: 2026-10-16 (GitHub push; release 1.9.0 on 2026-10-14) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'localmind',
  name: 'LocalMind',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'hybrid', // README: on-device GGUF/LiteRT models run offline; the same app also talks to your own Ollama / LM Studio server or to OpenRouter / Requesty cloud keys
  platforms: ['android', 'ios'], // README badge "Android | iOS"; Play listing + App Store listing (iOS 17.6+)
  worksWith: ['Ollama', 'LM Studio', 'OpenRouter', 'Requesty', 'llama.cpp', 'MCP'], // README "Supported Backends" table + MCP feature; llama.cpp via the llamadart package
  engine: 'both', // ships on-device engines (llamadart / flutter_gemma) AND connects to external servers
  license: 'MIT', // LICENSE file / GitHub license API; README and privacy policy both state MIT
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no hard floor stated: on-device needs depend on the downloaded model, remote use needs only a connection to a server; App Store: iOS 17.6+, Play: minimum Android version not shown
  stars: 281, // GitHub, 2026-10-17
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'github.com/abdulmominsakib/localmind', // no dedicated product site found: Google Play developer site momin.pro is a personal portfolio (lists LocalMind), the repo has no homepage field; the App Store seller link also points to the repo
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=pro.momin.localmind',
    appStore: 'https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480',
    github: 'https://github.com/abdulmominsakib/localmind',
  },
  installEffort: 'installer',
  installEvidence: 'Google Play listing "Install" and App Store listing id6777025480 (free, iOS 17.6+); GitHub release 1.9.0+95 also carries app-release.apk. checked 2026-10-17',
  tagline: {
    en: 'Free, MIT-licensed Android and iPhone chat app for on-device models, Ollama, LM Studio and OpenRouter, with MCP tools',
    de: 'Kostenlose Android- und iPhone-Chat-App (MIT-Lizenz) für Modelle auf dem Gerät, Ollama, LM Studio und OpenRouter, mit MCP-Tools',
    fr: "Application de chat gratuite sous licence MIT pour Android et iPhone : modèles sur l'appareil, Ollama, LM Studio et OpenRouter, avec outils MCP",
    ja: 'オンデバイスモデル、Ollama、LM Studio、OpenRouterに対応する無料のMITライセンスAndroid/iPhoneチャットアプリ。MCPツール対応',
    zh: '免费的MIT许可Android和iPhone聊天应用，支持设备端模型、Ollama、LM Studio和OpenRouter，并支持MCP工具',
    es: 'App de chat gratuita para Android e iPhone con licencia MIT: modelos en el dispositivo, Ollama, LM Studio y OpenRouter, con herramientas MCP',
    pt: 'App de chat gratuito para Android e iPhone com licença MIT: modelos no dispositivo, Ollama, LM Studio e OpenRouter, com ferramentas MCP',
    ar: 'تطبيق دردشة مجاني بترخيص MIT لأجهزة Android وiPhone يدعم النماذج على الجهاز وOllama وLM Studio وOpenRouter مع أدوات MCP',
    ko: '기기 내 모델, Ollama, LM Studio, OpenRouter를 지원하는 무료 MIT 라이선스 Android·iPhone 채팅 앱, MCP 도구 지원',
  },
  // Comparison attributes (mobile-chat segment), each value read from the README / store listings on 2026-10-17;
  // a missing key = not stated there, never false. offline = on-device GGUF/LiteRT models "no internet connection required";
  // modelDownloads = README "Model Manager: download curated models or GGUF models directly from HuggingFace";
  // visionInput = README "attach photos, documents and other files to prompt vision-capable models";
  // voice = README "Speech-to-Text … Text-to-Speech" (both). importModels is left out: the README describes downloading
  // from Hugging Face but does not state importing a local model file.
  compare: { offline: true, modelDownloads: true, visionInput: true, voice: true },
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-16', // GitHub: last push 2026-10-16 (release 1.9.0+95 on 2026-10-14), read 2026-10-17
  lastUpstreamUpdateSource: 'https://github.com/abdulmominsakib/localmind/releases',
  reviewSlug: 'localmind-review',
  pqReview: {
    date: '2026-10-17',
    version: '1.9.0',
    versionSourceUrl: 'https://github.com/abdulmominsakib/localmind/releases',
  },
  verdict: 'Best for Android and iPhone users who want one free, MIT-licensed chat app that runs small models on the phone and also connects to their own Ollama or LM Studio server or an OpenRouter key; a young one-developer project (repository created April 2026) whose Play description lags the README and whose privacy policy does not mention its on-device or sync features.',
}

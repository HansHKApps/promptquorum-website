// Local AI App Directory — PocketLLM Lite (layer: mobile / Android, plus a browser edition)
// Added 2026-10-24. Verified 2026-10-24 against: the product site pocketllm-lite.vercel.app (hero, feature, runtime and download sections,
// links to the repo, LICENSE, issues and a web app at /#/app — a real product site, not a README mirror), the GitHub repository
// PocketLLM/pocketllm-lite (MIT, Dart/Flutter, created 2025-12-09, repo "homepage" = the site, last push 2026-10-15), the GitHub release
// v1.0.40 (published 2026-10-15, not flagged pre-release; assets: PocketLLM-Lite-v1.0.40-arm64-v8a.apk 60,479,204 bytes,
// -armeabi-v7a.apk, -x86_64.apk and SHA256SUMS.txt; Android 7.0 / API 24 or newer), README.md and docs/KNOWN_LIMITATIONS.md on main, SECURITY.md.
// Facts that matter:
//  * On-device inference loads ONLY Cactus-format bundles (config.txt + .weights); GGUF is recognised but cannot be loaded on the phone
//    (README + KNOWN_LIMITATIONS). The product site's runtime card says "On-device GGUF" — a conflict, stated in the review, README followed.
//  * Only the arm64-v8a APK contains the Cactus runtime (libcactus.so); armeabi-v7a and x86_64 APKs use servers, OCR and documents only.
//  * v1.0.40 notes: APKs are debug-signed engineering builds (no publisher identity); on-device token generation NOT verified on a
//    physical phone (emulator load only); Share's Summarize/Ask not exercised with a real model.
//  * KNOWN_LIMITATIONS: the Cactus Flutter 1.3 package is archived upstream as of July 2026 (maintenance risk).
//  * Repo description says "Android/iOS ... Termux"; README says Android only. Followed the README.
//  * No named developer: GitHub organisation "PocketLLM"; contributors are one individual handle and an automated coding-bot account.
//  * Not on Google Play / App Store as far as the site and README show (only GitHub Releases + web edition are linked).
// Not tested hands-on.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pocketllm-lite',
  name: 'PocketLLM Lite',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'], // the repo also ships a Next.js web edition (data in IndexedDB, needs your own Ollama/OpenAI-compatible endpoint); mobile is the primary product
  locality: 'hybrid', // on-device Cactus bundles (arm64 build) OR your own Ollama / OpenAI-compatible endpoint; optional Tavily web search and model downloads
  platforms: ['android'], // README: "A local-first AI chat app for Android"; web edition in the browser
  worksWith: ['Ollama', 'Cactus', 'Hugging Face', 'Tavily'],
  engine: 'both', // runs Cactus-format models on the phone AND connects to external Ollama / OpenAI-compatible servers
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // README: memory is the limit; a 1B model at Q4 is roughly 0.7 to 1 GB; no fixed requirement
  stars: 24, // GitHub API 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'pocketllm-lite.vercel.app',
  storeLinks: {
    web: 'https://pocketllm-lite.vercel.app',
    github: 'https://github.com/PocketLLM/pocketllm-lite',
  },
  installEffort: 'installer',
  installOn: ['android'],
  installEvidence: 'GitHub Releases v1.0.40 (published 2026-10-15) ships PocketLLM-Lite-v1.0.40-arm64-v8a.apk / -armeabi-v7a.apk / -x86_64.apk plus SHA256SUMS.txt; README quick start: download the APK and install (Android 7.0+). Sideloaded, debug-signed engineering build; no store listing found. Checked 2026-10-24',
  tagline: {
    en: 'MIT-licensed Android chat app that runs Cactus-format models on the phone or uses your own Ollama or OpenAI-compatible server',
    de: 'Android-Chat-App unter MIT-Lizenz, die Modelle im Cactus-Format auf dem Telefon ausführt oder Ihren eigenen Ollama- oder OpenAI-kompatiblen Server nutzt',
    fr: 'Appli de chat Android sous licence MIT qui exécute des modèles au format Cactus sur le téléphone ou utilise votre propre serveur Ollama ou compatible OpenAI',
    ja: 'MITライセンスのAndroid用チャットアプリ。Cactus形式のモデルを端末上で実行するほか、自分のOllamaまたはOpenAI互換サーバーも利用可能',
    zh: '采用 MIT 许可的 Android 聊天应用：可在手机上运行 Cactus 格式模型，也可使用自己的 Ollama 或兼容 OpenAI 的服务器',
    es: 'App de chat para Android con licencia MIT que ejecuta modelos en formato Cactus en el teléfono o usa tu propio servidor Ollama o compatible con OpenAI',
    pt: 'App de chat para Android com licença MIT que executa modelos no formato Cactus no celular ou usa o seu próprio servidor Ollama ou compatível com OpenAI',
    ar: 'تطبيق دردشة لـ Android بترخيص MIT يشغّل نماذج بصيغة Cactus على الهاتف، أو يستخدم خادم Ollama أو خادمًا متوافقًا مع OpenAI تملكه',
    ko: 'MIT 라이선스의 Android 채팅 앱. Cactus 형식 모델을 휴대폰에서 실행하거나 직접 운영하는 Ollama 또는 OpenAI 호환 서버를 사용합니다',
  },
  // Comparison attributes (mobile-chat segment), from the README feature table (checked 2026-10-24): offline (on-device inference, nothing
  // leaves the phone), importModels (local folder import), modelDownloads (in-app catalog), voice (Whisper transcription + text-to-speech).
  // visionInput is only available when the selected model confirms it — left unset, never false.
  compare: { offline: true, importModels: true, modelDownloads: true, voice: true },
  reviewSlug: 'pocketllm-lite-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.0.40',
    versionSourceUrl: 'https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40',
  },
  verdict: 'Worth a look for technical Android users who can sideload an APK and want an MIT-licensed, local-first chat and document app with a choice of on-device models or their own server; held back by debug-signed engineering builds, no named developer, an upstream runtime package listed as archived and on-device generation the project itself has not verified on a physical phone.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-15', // GitHub release v1.0.40 published 2026-10-15T13:52Z; last push to main the same day
  lastUpstreamUpdateSource: 'https://github.com/PocketLLM/pocketllm-lite/releases/tag/v1.0.40',
}

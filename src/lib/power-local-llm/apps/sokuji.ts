// Local AI App Directory — Sokuji (layer: live two-way speech translation for bilingual meetings; desktop app + Chrome/Edge extension; cloud AI providers or, per the maker, on-device recognition, translation and speech models)
// Added 2026-11-18 at the owner's request (ranked list). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: sokuji.kizuna.ai (home, /download, /local-ai, /privacy, /docs/privacy dated 14 November 2026, /docs/terms), GitHub repository kizuna-ai-lab/sokuji
// (API metadata, README, LICENSE, releases v0.50.1 to v0.50.4 with asset lists, commits, docs/privacy-policy.html).
// Notes:
// - Stars: GitHub API 1505 on 2026-11-18 (owner's list said 1,497). Repo created 2025-04-14, owner is the organization Kizuna AI Lab.
// - License: AGPL-3.0 (LICENSE file, GitHub API). The maker's account server is not open source (privacy page: "Our account server is not open source").
// - Version: v0.50.4, published 2026-11-16 (non-prerelease). Last commit on main 2026-11-18T08:20Z.
// - Install: v0.50.4 ships Sokuji-0.50.4.Setup.exe (+ store-installer.exe), Sokuji-0.50.4-arm64.pkg and -x64.pkg (macOS), sokuji_0.50.4_amd64.deb and _arm64.deb, Sokuji-0.50.4-x86_64.AppImage and -arm64.AppImage,
//   sokuji-extension-0.50.4.zip; download page also links the Chrome Web Store, Microsoft Edge Add-ons and a Microsoft Store listing. Windows needs VB-CABLE installed separately, Linux needs PulseAudio or PipeWire
//   plus pulseaudio-utils. Maker statements (NOT checked): Windows installer code-signed via SignPath Foundation, macOS app signed and notarized.
// - engine = 'builtin': on-device ASR, translation and speech run inside the app (sherpa-onnx WASM, Transformers.js, WebGPU); models are downloaded once. PromptQuorum did NOT run any of it.
// - locality 'hybrid': the app works with cloud providers (OpenAI, Gemini, Soniox, Palabra.ai, Doubao AST 2.0, Qwen LiveTranslate, OpenAI-compatible endpoints, an optional Kizuna AI account) AND with on-device models.
//   Maker statement (privacy page): with on-device models meeting content never leaves the device; the "Online" engines in local inference (Edge TTS, Bing Translator) send text to Microsoft when no on-device model
//   is ready or when chosen; usage statistics and error reports go to PostHog (US) with no in-app switch to turn them off. PromptQuorum did not inspect network traffic.
// - Price: free app (README, home page "free and open source · no subscription"); cloud use is billed by the AI provider (own key) or from a prepaid Kizuna AI balance in USD (terms), on-device models cost nothing.
// - HQ country: JP. Terms of Service (https://sokuji.kizuna.ai/docs/terms): "governed by and construed in accordance with the laws of Japan", exclusive jurisdiction of the courts of Tokyo, Japan; the terms name
//   "Kizuna AI Lab" as the company but give no address or registration number. Set from the governing-law clause per the owner's standing HQ-flag rule (2026-11-15).
// - Categories: speech-to-text first (compare segment), then subtitles-dubbing (live subtitles) and translation.
// - Compare (speech-to-text segment): realtime (real-time speech recognition and translation, README) and cpuUsable (README: on-device models with no expensive GPU needed) are set. languages, speakerLabels and
//   apiServer are not set: the README gives different counts for recognition (99+), translation (55+) and speech (53), no speaker labelling is documented and no local API is documented.
// - Commerce Disclosure (https://sokuji.kizuna.ai/docs/commerce, 特定商取引法に基づく表記, updated 2026-10-06): operator "Kizuna AI Lab"; address and phone "disclosed on request" (not published); prepaid balance in USD
//   (5 to 100 USD per purchase, valid 1 year, refund of unused balance within 14 days); desktop requirements Windows 10+, macOS 13+, Linux (Ubuntu 20.04+ recommended), extension Chrome/Edge 116+.
//   It also names an individual as operations manager; PromptQuorum does not repeat that name.
// - Mobile: the privacy policy mentions a mobile application; the download page and the README list no mobile download, so platforms stay desktop plus browser extension.
// Last upstream update: 2026-11-18 (last commit on main, GitHub API 2026-11-18; latest release v0.50.4 on 2026-11-16) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'sokuji',
  name: 'Sokuji',
  categories: ['speech-to-text', 'subtitles-dubbing', 'translation'],
  interfaces: ['desktop'], // desktop app; the Chrome/Edge extension is counted under platforms 'web'
  locality: 'hybrid', // cloud providers or on-device models (maker); optional Microsoft online engines, usage statistics and update checks use the network
  platforms: ['mac', 'win', 'linux', 'web'], // README: Windows, macOS, Linux desktop + Chrome and Edge browser extension
  worksWith: ['OpenAI', 'Google Gemini', 'Soniox', 'Palabra.ai', 'Doubao', 'Qwen LiveTranslate', 'Whisper', 'Opus-MT', 'Zoom', 'Google Meet', 'Microsoft Teams', 'Discord'], // README + website
  engine: 'builtin', // on-device recognition, translation and speech models run inside the app; cloud providers are optional
  license: 'AGPL-3.0', // LICENSE file and GitHub API
  price: 'free', // free app; cloud use billed by the provider or from a prepaid Kizuna AI balance; on-device models are free
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // no memory minimum published; README: on-device models need no expensive GPU
  stars: 1505,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['audio'],
  url: 'sokuji.kizuna.ai',
  storeLinks: {
    github: 'https://github.com/kizuna-ai-lab/sokuji',
    web: 'https://sokuji.kizuna.ai',
  },
  hqCountry: 'JP',
  hqCountrySource: 'https://sokuji.kizuna.ai/docs/terms',
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 the GitHub release v0.50.4 listed Sokuji-0.50.4.Setup.exe (Windows), Sokuji-0.50.4-arm64.pkg and Sokuji-0.50.4-x64.pkg (macOS), sokuji_0.50.4_amd64.deb and sokuji_0.50.4_arm64.deb and two AppImages (Linux), plus sokuji-extension-0.50.4.zip. The download page also links the Chrome Web Store and Microsoft Edge Add-ons for the browser extension. Windows needs VB-CABLE installed separately.',
  tagline: {
    en: 'Open-source live speech translation for bilingual meetings: desktop app and Chrome/Edge extension, with cloud AI providers or on-device models that, according to the maker, run without a network once downloaded',
    de: 'Quelloffene Live-Sprachübersetzung für zweisprachige Meetings: Desktop-App und Chrome-/Edge-Erweiterung, mit Cloud-KI-Anbietern oder laut Hersteller mit Modellen auf dem Gerät, die nach dem Download ohne Netzwerk laufen',
    fr: 'Traduction vocale en direct à code source ouvert pour réunions bilingues : application de bureau et extension Chrome/Edge, avec fournisseurs d’IA cloud ou modèles sur l’appareil qui, selon l’éditeur, fonctionnent sans réseau une fois téléchargés',
    ja: 'バイリンガル会議向けのオープンソースのリアルタイム音声翻訳。デスクトップアプリとChrome/Edge拡張機能があり、クラウドAIプロバイダー、または開発元の説明ではダウンロード後にネットワークなしで動く端末内モデルを使えます',
    zh: '面向双语会议的开源实时语音翻译：提供桌面应用和 Chrome/Edge 扩展，可使用云端 AI 服务商，或据开发者称下载后无需网络即可运行的设备端模型',
    es: 'Traducción de voz en directo de código abierto para reuniones bilingües: aplicación de escritorio y extensión de Chrome/Edge, con proveedores de IA en la nube o modelos en el dispositivo que, según el desarrollador, funcionan sin red una vez descargados',
    pt: 'Tradução de voz ao vivo de código aberto para reuniões bilíngues: aplicativo de desktop e extensão para Chrome/Edge, com provedores de IA na nuvem ou modelos no dispositivo que, segundo o desenvolvedor, funcionam sem rede depois de baixados',
    ar: 'ترجمة صوتية فورية مفتوحة المصدر للاجتماعات ثنائية اللغة: تطبيق سطح المكتب وإضافة Chrome/Edge، مع مزوّدي ذكاء اصطناعي سحابيين أو نماذج على الجهاز تعمل، بحسب المطوّر، دون شبكة بعد تنزيلها',
    ko: '이중 언어 회의를 위한 오픈소스 실시간 음성 번역: 데스크톱 앱과 Chrome/Edge 확장 프로그램을 제공하며, 클라우드 AI 제공업체 또는 개발사 설명에 따르면 다운로드 후 네트워크 없이 실행되는 기기 내 모델을 지원합니다',
  },
  reviewSlug: 'sokuji-review',
  pqReview: {
    date: '2026-11-18',
    version: '0.50.4',
    versionSourceUrl: 'https://github.com/kizuna-ai-lab/sokuji/releases/tag/v0.50.4',
  },
  // Comparison attributes: each value verified against the project's README on 2026-11-18; a missing key = not stated there, never false.
  compare: { realtime: true, cpuUsable: true }, // README: real-time two-way speech translation; on-device models run on existing CPU and integrated graphics, no expensive GPU needed
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-18', // last commit on main 2026-11-18T08:20:53Z (GitHub API 2026-11-18); latest release v0.50.4 published 2026-11-16
  lastUpstreamUpdateSource: 'https://github.com/kizuna-ai-lab/sokuji (last commit 2026-11-18; latest release v0.50.4, 2026-11-16)',
}

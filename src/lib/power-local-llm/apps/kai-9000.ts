// Local AI App Directory — Kai 9000 (layer: mobile + desktop + web, cross-platform assistant)
// Added 2026-10-30 on the operator's request (no maker contact; no `founder`, no `founderReviewedDate`).
// Verified 2026-10-30 against: kai9000.com (home, /docs), github.com/SimonSchubert/Kai (README, LICENSE.txt = Apache-2.0, CHANGELOG, docs/features/on-device-inference.md
// "Last verified 2026-10-21", multi-service.md, encryption.md, chat.md), the GitHub Releases API (v3.3.0 published 2026-10-02, assets: android .apk, macos .dmg,
// windows .msi, linux .deb/.rpm/.AppImage/.flatpak/.tar.gz), the App Store listing (id6758148023: free, version 3.0.0, iOS 15.3+, macOS 12.2+ on Apple silicon,
// privacy policy schubert-simon.de/privacy/kai.txt effective 2026-02-03), and the F-Droid listing (3.3.0, Apache-2.0, anti-feature "Non-Free Network Services").
// The Google Play page could not be read (content truncated) and is therefore not cited for any fact.
// Last upstream update: 2026-10-24 (newest GitHub push, "Upgrade dependencies"); latest release 2026-10-02 -> NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'kai-9000',
  name: 'Kai 9000',
  categories: ['general-chat-clients'],
  interfaces: ['mobile', 'desktop', 'web'],
  locality: 'hybrid', // default path is cloud (built-in Free tier or ~30 providers you add); optional on-device LiteRT models (Android, iOS, desktop; not web) run offline
  platforms: ['android', 'ios', 'ipados', 'mac', 'win', 'linux', 'web'],
  worksWith: null,
  engine: 'both', // own LiteRT runtime for downloaded .litertlm models + external OpenAI-compatible endpoints (Ollama default localhost:11434/v1)
  license: 'Apache 2.0', // LICENSE.txt in the repo, F-Droid listing
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // docs give download sizes (0.6-6.9 GB) but no RAM floor; GPU first, CPU fallback "where the platform supports it"
  stars: 1324, // GitHub API 2026-10-30
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['chat', 'agent'],
  url: 'kai9000.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/kai-ai/id6758148023',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.inspiredandroid.kai',
    github: 'https://github.com/SimonSchubert/Kai',
    web: 'https://kai9000.com',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v3.3.0 assets Kai-3.3.0-android.apk, -macos.dmg, -windows.msi, -linux.deb/.rpm/.AppImage/.flatpak/.tar.gz; App Store id6758148023; Google Play com.inspiredandroid.kai; F-Droid 3.3.0; brew/winget/AUR one-liners; browser app at kai9000.com/app; checked 2026-10-30',
  tagline: {
    en: 'Free open-source AI assistant with persistent memory and tools on Android, iOS, Windows, macOS, Linux and web: cloud providers by default, optional on-device Gemma 4',
    de: 'Kostenloser Open-Source-KI-Assistent mit dauerhaftem Gedächtnis und Tools für Android, iOS, Windows, macOS, Linux und Web: standardmäßig Cloud-Anbieter, optional Gemma 4 auf dem Gerät',
    fr: 'Assistant IA open source gratuit avec mémoire persistante et outils sur Android, iOS, Windows, macOS, Linux et le web : fournisseurs cloud par défaut, Gemma 4 sur l\'appareil en option',
    ja: 'Android・iOS・Windows・macOS・Linux・Webで使える無料のオープンソースAIアシスタント。永続メモリとツール搭載で、標準はクラウド、任意で端末上のGemma 4',
    zh: '免费开源 AI 助手，具备持久记忆与工具，支持 Android、iOS、Windows、macOS、Linux 和网页：默认使用云端服务商，可选在设备上运行 Gemma 4',
    es: 'Asistente de IA gratuito y de código abierto con memoria persistente y herramientas en Android, iOS, Windows, macOS, Linux y web: proveedores en la nube por defecto, Gemma 4 en el dispositivo como opción',
    pt: 'Assistente de IA gratuito e de código aberto com memória persistente e ferramentas no Android, iOS, Windows, macOS, Linux e web: provedores na nuvem por padrão, Gemma 4 no dispositivo como opção',
    ar: 'مساعد ذكاء اصطناعي مجاني ومفتوح المصدر بذاكرة دائمة وأدوات على Android وiOS وWindows وmacOS وLinux والويب: مزودو السحابة افتراضيًا، وGemma 4 على الجهاز اختياريًا',
    ko: 'Android·iOS·Windows·macOS·Linux·웹에서 쓰는 무료 오픈소스 AI 어시스턴트. 영구 메모리와 도구를 갖추고 기본은 클라우드, 선택적으로 기기 내 Gemma 4 실행',
  },
  reviewSlug: 'kai-9000-review',
  pqReview: {
    date: '2026-10-30',
    version: '3.3.0',
    versionSourceUrl: 'https://github.com/SimonSchubert/Kai/releases/tag/v3.3.0',
  },
  // Comparison attributes from the docs (on-device-inference.md, multi-service.md) on 2026-10-30; a missing key = not stated, never false.
  // Not set because the sources say nothing or only for some paths: voice input, image input (remote models only), file chat.
  compare: { builtInEngine: true, ollama: true, customEndpoint: true, mcp: true, offline: true, importModels: true, modelDownloads: true },
  verdict: 'Best for people who want one free, open-source assistant with memory and tools across phone, desktop and browser and who are happy to use cloud providers or their own server by default; the on-device path is optional and narrower (text only, shorter tool list), the project\'s own pages differ on how chats are stored, the iPhone build lagged at 3.0.0, and PromptQuorum has not run it.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-24', // newest GitHub push (GitHub API pushed_at); latest release v3.3.0 on 2026-10-02
  lastUpstreamUpdateSource: 'https://github.com/SimonSchubert/Kai/releases',
}

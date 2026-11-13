// Local AI App Directory — Phantasm: self-hosted AI chat client (layer: mobile chat client, iPhone)
// Added 2026-11-13 on request. Facts verified 2026-11-13 against: the App Store listing (apps.apple.com/us/app/phantasm/id6785720059 and the
// iTunes lookup API: v1.2, currentVersionReleaseDate 2026-07-25, first release 2026-07-08, iOS 18.0+, 19.1 MB, free, seller Benjamin Carman),
// getphantasm.com (+ /privacy.html, last updated 2026-07-02, and /support.html) and the GitHub repo benthecarman/phantasm (commits to
// 2026-08-16 incl. a "Bump version to 1.3 (4)" build commit that the App Store did not list yet; tag v1.2.0 only; no releases).
// LOCALITY = local: the app is only a client for the user's OWN OpenAI-compatible backend (Ollama, vLLM, llama.cpp); the privacy policy says
// messages go only to the backend URL the user enters; only dictation runs on the device. A VPN/tunnel backend is the user's choice, so it
// is classed like the other Ollama clients (Enchanted: local, engine external). Not tested hands-on.
// LICENCE: none found. The repo root has no LICENSE file (raw.githubusercontent.com/.../LICENSE = 404, GitHub API licence = null) although the
// site and privacy page say "open source", so it is recorded as unstated, never as MIT/GPL.
// Price: App Store "Free"; no in-app purchases named; the README calls accounts/billing/cloud sync a deferred premium layer.
// Mobile-chat comparison: offline=false (inference runs on the server, nothing runs on the phone), visionInput=true ("vision models can see
// your images"), voice=true (on-device dictation + read-aloud replies). importModels/modelDownloads not stated for an app that holds no models — left unset.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'phantasm',
  name: 'Phantasm',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local', // talks only to the backend URL you enter (typically a machine on your own network); no accounts, analytics or telemetry per the privacy policy
  platforms: ['ios'], // iPhone, iOS 18.0+ ("Designed for iPhone"); the listing also shows Mac/Vision requirements but states it is not verified for macOS
  worksWith: ['Ollama', 'vLLM', 'llama.cpp', 'ComfyUI'],
  engine: 'external', // the app runs no model; it connects to an OpenAI-compatible server you provide
  license: 'Not stated (no licence file)', // site and privacy page say "open source" but the repository has no LICENSE file
  price: 'free', // App Store: Free
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // the app is 19.1 MB; the hardware needed is that of the models on your own server
  stars: 6, // github.com/benthecarman/phantasm, read 2026-11-13
  addedDate: '2026-11-13',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'getphantasm.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/phantasm/id6785720059',
    web: 'https://getphantasm.com',
    github: 'https://github.com/benthecarman/phantasm',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6785720059 checked 2026-11-13: free download, iOS 18.0+, 19.1 MB, v1.2 released 2026-07-25; the app needs a server you run yourself (Ollama or any OpenAI-compatible endpoint), the optional orchestrator starts with docker compose. GitHub has no releases, only the v1.2.0 tag.',
  tagline: {
    en: 'Free iPhone chat app for your own Ollama, vLLM or llama.cpp server, with no account and an optional companion server for web search and image generation',
    de: 'Kostenlose iPhone-Chat-App für Ihren eigenen Ollama-, vLLM- oder llama.cpp-Server, ohne Konto und mit optionalem Begleitserver für Websuche und Bildgenerierung',
    fr: 'Appli de chat gratuite pour iPhone destinée à votre propre serveur Ollama, vLLM ou llama.cpp, sans compte et avec un serveur complémentaire facultatif pour la recherche web et la génération d’images',
    ja: '自分のOllama・vLLM・llama.cppサーバー向けの無料iPhoneチャットアプリ。アカウント不要で、Web検索と画像生成用の補助サーバーも任意で使えます',
    zh: '面向自建 Ollama、vLLM 或 llama.cpp 服务器的免费 iPhone 聊天应用，无需账号，可选配配套服务器提供网页搜索和图像生成',
    es: 'App de chat gratuita para iPhone pensada para tu propio servidor Ollama, vLLM o llama.cpp, sin cuenta y con un servidor complementario opcional para búsqueda web y generación de imágenes',
    pt: 'App de chat gratuito para iPhone para o seu próprio servidor Ollama, vLLM ou llama.cpp, sem conta e com um servidor complementar opcional para busca na web e geração de imagens',
    ar: 'تطبيق دردشة مجاني لـ iPhone لخادم Ollama أو vLLM أو llama.cpp الخاص بك، دون حساب ومع خادم مساعد اختياري للبحث على الويب وتوليد الصور',
    ko: '직접 운영하는 Ollama·vLLM·llama.cpp 서버용 무료 iPhone 채팅 앱으로, 계정이 필요 없고 웹 검색과 이미지 생성을 위한 보조 서버를 선택적으로 쓸 수 있습니다',
  },
  compare: { offline: false, visionInput: true, voice: true },
  reviewSlug: 'phantasm-review',
  pqReview: {
    date: '2026-11-13',
    version: '1.2',
    versionSourceUrl: 'https://apps.apple.com/us/app/phantasm/id6785720059',
  },
  verdict: 'Best for iPhone owners who already run Ollama, vLLM or llama.cpp at home and want a free, account-free native chat client, if they accept that it is a young project with no licence file and that it runs no model on the phone.',
  lastVerifiedDate: '2026-11-13',
  lastUpstreamUpdate: '2026-08-16', // newer of App Store v1.2 (2026-07-25) and the last GitHub commit (2026-08-16T17:23Z, "Bump version to 1.3 (4)"), read 2026-11-13
  lastUpstreamUpdateSource: 'https://github.com/benthecarman/phantasm/commits',
}

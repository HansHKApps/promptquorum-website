// Local AI App Directory — EverShelf: self-hosted pantry manager with optional AI (Gemini, OpenAI or a local Llama server) for product identification, expiry OCR and recipes
// (layer: self-hosted web app + Android kiosk, Smart home AI / Vision & OCR)
// Added 2026-11-01 at the operator's request (link from localhosted.com). No maker outreach — independent PromptQuorum entry; no founder-review badge; not hands-on tested.
// Facts verified 2026-11-01 against: evershelf.site (home page is rendered client-side; copy read from /js/i18n/copy.json: "free forever", "Inventory and history stay on your
// device or home server", "AI helpers are optional", "No telemetry", FAQ incl. the unrelated iOS app of the same name), the GitHub API and README/Wiki/.env.example/SECURITY.md/
// docker-compose.yml/evershelf-kiosk README of dadaloop82/EverShelf (MIT, created 2026-03-10, latest release v1.16.16 published 2026-10-25, last push 2026-11-01, PHP + SQLite,
// image ghcr.io/dadaloop82/evershelf:latest, kiosk APK evershelf-kiosk.apk under release tag kiosk-1.7.24 / kiosk-latest).
// Last upstream update: 2026-11-01 (newer of latest release 2026-10-25 and last push) -> NOT stale (3-month rule).
// EverShelf is NOT an LLM app: it is a pantry/inventory manager whose AI parts are optional. AI_PROVIDER is exclusive: gemini | openai | llama (the "llama" provider is any
// OpenAI-compatible endpoint, e.g. Ollama, llama.cpp, vLLM). Locality is therefore 'hybrid': data in a local SQLite file, AI local only if the Llama provider is configured.
// Not stated in the sources read: which AI features work with a local Llama model (photo identification and expiry OCR need a vision model); the Wiki describes the AI
// features as Gemini features. Demo at evershelf.site/demo uses cloud AI ("no install, full AI"). Open Food Facts is the documented fallback for unknown barcodes.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'evershelf',
  name: 'EverShelf',
  categories: ['smart-home-ai', 'vision-ocr'],
  interfaces: ['web', 'mobile'], // PWA served by your own server (installable to the home screen) plus an Android kiosk app for wall tablets
  locality: 'hybrid', // inventory and history in a local SQLite file on your server; AI goes to Gemini or OpenAI unless AI_PROVIDER=llama points at a local OpenAI-compatible server; AI can be switched off
  platforms: ['selfhosted', 'linux', 'web', 'android'], // Docker image or PHP web server; browser/PWA on any device; Android kiosk APK (min Android 7.0)
  worksWith: ['Docker', 'Home Assistant', 'Ollama', 'llama.cpp', 'vLLM', 'Gemini', 'OpenAI', 'Open Food Facts', 'Bring!', 'Mealie', 'MCP', 'ntfy', 'Unraid'], // README + .env.example
  engine: 'external', // no bundled model: Gemini/OpenAI cloud APIs or your own OpenAI-compatible Llama server
  license: 'MIT', // GitHub API + LICENSE
  price: 'free', // site: "free forever"; optional donations, no premium tiers (site copy), README v1.12.0: no advertising
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM floor documented; a local Llama server needs its own hardware
  stars: 149, // GitHub API stargazers_count, read 2026-11-01
  addedDate: '2026-11-01',
  status: 'listed',
  uses: ['agent', 'serve'],
  exposesApi: true, // REST API (Wiki: API Reference) plus an MCP server in the repo (mcp-server/)
  mcpSupport: true,
  url: 'evershelf.site',
  storeLinks: {
    github: 'https://github.com/dadaloop82/EverShelf',
    web: 'https://evershelf.site',
  },
  installEffort: 'one-command',
  installEvidence: 'README quick start checked 2026-11-01: git clone + cp .env.example .env + docker compose up -d (image ghcr.io/dadaloop82/evershelf:latest, UI on port 8080); no installer, store listing or desktop binary; the GitHub release list carries only the Android kiosk APK (evershelf-kiosk.apk, tag kiosk-1.7.24), which needs the server',
  tagline: {
    en: 'Self-hosted pantry manager with barcode scanning, expiry tracking and shopping lists, whose AI (Gemini, OpenAI or your own Llama server) is optional',
    de: 'Selbst gehosteter Vorratsmanager mit Barcode-Scan, Ablaufverfolgung und Einkaufslisten, dessen KI (Gemini, OpenAI oder ein eigener Llama-Server) optional ist',
    fr: 'Gestionnaire de garde-manger auto-hébergé avec scan de codes-barres, suivi des dates de péremption et listes de courses, dont l’IA (Gemini, OpenAI ou votre propre serveur Llama) est facultative',
    ja: 'バーコードスキャン、賞味期限の管理、買い物リストを備えたセルフホスト型のパントリー管理アプリ。AI（Gemini、OpenAI、または自前のLlamaサーバー）は任意です',
    zh: '自托管的食品储藏室管理应用，支持条码扫描、保质期跟踪和购物清单，AI（Gemini、OpenAI 或自建 Llama 服务器）为可选项',
    es: 'Gestor de despensa autoalojado con escaneo de códigos de barras, control de caducidad y listas de la compra, cuya IA (Gemini, OpenAI o tu propio servidor Llama) es opcional',
    pt: 'Gerenciador de despensa auto-hospedado com leitura de código de barras, controle de validade e listas de compras, cuja IA (Gemini, OpenAI ou seu próprio servidor Llama) é opcional',
    ar: 'مدير مخزن طعام مستضاف ذاتيًا مع مسح الباركود وتتبّع تواريخ الانتهاء وقوائم التسوق، والذكاء الاصطناعي فيه (Gemini أو OpenAI أو خادم Llama خاص بك) اختياري',
    ko: '바코드 스캔, 유통기한 추적, 장보기 목록을 갖춘 셀프 호스팅 식료품 저장실 관리 앱으로, AI(Gemini, OpenAI 또는 직접 운영하는 Llama 서버)는 선택 사항입니다',
  },
  reviewSlug: 'evershelf-review',
  pqReview: {
    date: '2026-11-01',
    version: 'v1.16.16',
    versionSourceUrl: 'https://github.com/dadaloop82/EverShelf/releases',
  },
  verdict: 'Best for self-hosters who want a free, MIT-licensed pantry and expiry tracker with barcode scanning, a shopping list and Home Assistant or MCP hooks; the AI is optional and, unless you point it at your own Llama server, sends data to Gemini or OpenAI. Limited by a Docker setup with a hand-edited .env, an unverified claim set for the local-Llama route, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-11-01',
  lastUpstreamUpdate: '2026-11-01', // GitHub API pushed_at 2026-11-01T16:48Z; latest release v1.16.16 published 2026-10-25
  lastUpstreamUpdateSource: 'https://github.com/dadaloop82/EverShelf',
}

// Local AI App Directory — Newelle (layer: free, open-source GPL-3.0 AI assistant for the Linux desktop, distributed as a Flatpak; works with cloud providers or local models run with Llama.cpp or Ollama)
// Added 2026-11-18 at the owner's request (ranked list). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: newelle.qsk.me (home page, releases, macOS releases, builds, docs index; no privacy or terms page — /privacy, /terms and /about return 404),
// GitHub repository qwersyk/Newelle (API metadata, README, releases 1.4.5–1.6.1 with empty asset lists, commits, Flatpak manifest), Flathub appstream and summary API for io.github.qwersyk.Newelle.
// Notes:
// - Stars: GitHub API 1503 on 2026-11-18 (owner's list said 1,501).
// - License: GitHub API GPL-3.0; Flathub appstream GPL-3.0-or-later.
// - Version: Flathub and GitHub release 1.6.1 (published 2026-11-02). The website's macOS page lists a separate Beta build 1.3.7 (2026-04-21, Newelle.app.zip) — signing/notarization and feature gap unverified.
// - Install: the README and the website name Flathub as the recommended route (flatpak install flathub io.github.qwersyk.Newelle); GitHub releases ship no files. Flathub summary: x86_64 + aarch64, GNOME Platform 50.
// - Permissions: Flathub summary lists network, ipc, fallback-x11/pulseaudio/wayland, dri and no filesystem or session-bus access; the manifest in the GitHub repository lists --filesystem=home and
//   --talk-name=org.freedesktop.Flatpak. The README says the Flathub build is restricted to its own folder and warns that widening access reduces security. Reported as an observation, not reconciled.
// - HQ country: NOT SET. No company, imprint, privacy policy or terms page was found. The repository owner's GitHub profile (qwersyk) names Austria, but the contributor with by far the most commits is a different
//   person and the profile is a personal one, so the country of the project is not clear. Owner decision pending (Austria or no flag).
// - Categories: general-chat-clients first (desktop chat), then personal-assistants, document-pdf-chat (README: chat with your own documents) and voice-assistants (voice input/output, call mode).
// Last upstream update: 2026-11-06 (last commit on master; latest release 1.6.1 on 2026-11-02) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'newelle',
  name: 'Newelle',
  categories: ['general-chat-clients', 'personal-assistants', 'document-pdf-chat', 'voice-assistants'],
  interfaces: ['desktop'],
  locality: 'hybrid', // README: several AI providers plus local models run with Llama.cpp or Ollama
  platforms: ['linux', 'mac'], // Flathub (Linux); macOS = Beta build 1.3.7 on the website's macOS page
  worksWith: ['Ollama', 'llama.cpp', 'Stable Diffusion', 'Whisper', 'Kokoro', 'MCP servers'], // README + website feature list
  engine: 'both', // README: download local models and run them using Llama.cpp or Ollama
  license: 'GPL-3.0', // GitHub API + Flathub appstream
  price: 'free', // README/website: free, open source
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // no app-level floor published; depends on the local model
  stars: 1503,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['chat', 'docs', 'audio', 'agent', 'image'],
  url: 'newelle.qsk.me',
  storeLinks: {
    github: 'https://github.com/qwersyk/Newelle',
    web: 'https://newelle.qsk.me',
  },
  installEffort: 'installer',
  installOn: ['linux'],
  installEvidence: 'On 2026-11-18 the website and README name Flathub as the recommended route; the Flathub listing (io.github.qwersyk.Newelle, version 1.6.1, x86_64 and aarch64) installs from a software centre or with flatpak install flathub io.github.qwersyk.Newelle. GitHub releases ship no files. The macOS page offers only a Beta zip (1.3.7), so the tier is set for Linux only.',
  tagline: {
    en: 'Free, open-source Linux AI assistant that works with cloud providers or local models and adds voice, document chat, MCP tools and long-term memory, installed from Flathub',
    de: 'Kostenloser, quelloffener KI-Assistent für Linux, der mit Cloud-Anbietern oder lokalen Modellen arbeitet und Sprache, Dokumenten-Chat, MCP-Werkzeuge und Langzeitgedächtnis ergänzt, Installation über Flathub',
    fr: 'Assistant IA gratuit et open source pour Linux, compatible avec des fournisseurs cloud ou des modèles locaux, avec voix, discussion avec documents, outils MCP et mémoire à long terme, installé depuis Flathub',
    ja: 'クラウドのプロバイダーとローカルモデルの両方に対応し、音声、文書チャット、MCPツール、長期記憶を備えた、無料のオープンソースLinux向けAIアシスタント。Flathubからインストール',
    zh: '免费开源的 Linux AI 助手，可使用云端服务商或本地模型，并提供语音、文档对话、MCP 工具和长期记忆，通过 Flathub 安装',
    es: 'Asistente de IA gratuito y de código abierto para Linux que funciona con proveedores en la nube o modelos locales y añade voz, chat con documentos, herramientas MCP y memoria a largo plazo, instalado desde Flathub',
    pt: 'Assistente de IA gratuito e de código aberto para Linux que funciona com provedores na nuvem ou modelos locais e acrescenta voz, chat com documentos, ferramentas MCP e memória de longo prazo, instalado pelo Flathub',
    ar: 'مساعد ذكاء اصطناعي مجاني ومفتوح المصدر لنظام Linux يعمل مع مزودين سحابيين أو نماذج محلية ويضيف الصوت والدردشة مع المستندات وأدوات MCP وذاكرة طويلة الأمد، ويُثبَّت من Flathub',
    ko: '클라우드 제공업체나 로컬 모델과 함께 쓰고 음성, 문서 채팅, MCP 도구, 장기 기억을 더한 무료 오픈소스 Linux AI 어시스턴트로 Flathub에서 설치합니다',
  },
  mcpSupport: true, // README: tools and MCP support, MCP servers added by pasting their JSON
  // Comparison attributes verified 2026-11-18 against the README, website feature list and release notes. Desktop-chat segment: builtInEngine (Llama.cpp runs local models inside the app per README),
  // ollama (README/website: Ollama), mcp, fileChat (README: chat with your own documents), voice. Assistants segment: localLlm, memory (long-term memory), toolUse (tools, MCP, terminal commands).
  // Document-chat segment: localLlm, desktopApp. Not set because the sources do not state them: customEndpoint (only an indirect mention of custom OpenAI-compatible servers in the 1.5.2 notes),
  // multiFormat, citations, dockerDeploy, apiServer, fullyLocal, bargeIn, customLlm, telephony.
  compare: { builtInEngine: true, ollama: true, mcp: true, fileChat: true, voice: true, localLlm: true, memory: true, toolUse: true, desktopApp: true },
  reviewSlug: 'newelle-review',
  pqReview: {
    date: '2026-11-18',
    version: '1.6.1',
    versionSourceUrl: 'https://github.com/qwersyk/Newelle/releases/tag/1.6.1',
  },
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-06', // last commit on master 2026-11-06T19:40Z (GitHub API 2026-11-18); latest release 1.6.1 published 2026-11-02
  lastUpstreamUpdateSource: 'https://github.com/qwersyk/Newelle (last commit 2026-11-06; latest release 1.6.1, 2026-11-02)',
}

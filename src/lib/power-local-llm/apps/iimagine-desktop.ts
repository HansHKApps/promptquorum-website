// Local AI App Directory — IIMAGINE Desktop (layer: desktop chat app with bundled engine)
// Added 2026-10-24 at the operator's request. No maker outreach — independent PromptQuorum entry.
// Facts verified 2026-10-24 against: iimagine.ai/open-source, iimagine.ai/downloads (v0.1.2; macOS Apple Silicon .dmg, Windows 64-bit
// .exe, Linux .AppImage), iimagine.ai/features/local-ai, iimagine.ai/privacy (last updated August 2026), github.com/iimagine-ai/desktop
// (README, package.json 0.1.2, MIT licence, repo created 2026-07-11, 0 stars) and the GitHub Releases API (v0.1.2 published 2026-08-31,
// v0.1.1 2026-07-24).
// Hybrid, stated honestly: the default is the bundled llama.cpp-based engine on the machine; the app can also call OpenAI, Anthropic,
// Google or OpenRouter with the user's own API keys, cloud TTS and opt-in web search exist, and premium plugins are a separate paid
// marketplace on app.iimagine.ai. The company's separate cloud platform (iimagine.ai accounts, credit plans) is NOT what is classified here.
// Last upstream update: 2026-08-31 (GitHub release v0.1.2) -> 54 days, NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'iimagine-desktop',
  name: 'IIMAGINE Desktop',
  categories: ['general-chat-clients'],
  interfaces: ['desktop'],
  locality: 'hybrid', // local models by default (bundled engine); optional cloud via the user's own API keys, cloud TTS, opt-in web search, paid premium plugins
  platforms: ['mac', 'win', 'linux'], // macOS: Apple Silicon (arm64) only, macOS 12+; Windows 10+ 64-bit (installer not code-signed); Linux AppImage (Ubuntu 20.04+ or equivalent)
  worksWith: ['OpenAI API', 'Anthropic API', 'Google Gemini API', 'OpenRouter', 'Hugging Face', 'Cursor', 'VS Code'], // cloud providers via own keys; GGUF models from Hugging Face; the localhost OpenAI-compatible API is named for Cursor/VS Code on the maker's page
  engine: 'builtin', // bundled "iimagine-engine", described by the maker as built on llama.cpp
  license: 'MIT',
  price: 'free', // desktop app free, no account; separate paid premium plugins (subscription) and a separate paid cloud platform exist
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // README: Model Advisor recommends models by RAM (4 / 8 / 16 / 32+ GB); no minimum for the app itself stated
  stars: 0, // GitHub API 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'docs', 'audio', 'serve'],
  url: 'iimagine.ai/open-source',
  storeLinks: {
    github: 'https://github.com/iimagine-ai/desktop',
    web: 'https://www.iimagine.ai/downloads',
  },
  installEffort: 'installer',
  installEvidence: 'Verified 2026-10-24: iimagine.ai/downloads and GitHub release v0.1.2 ship IIMAGINE.Desktop-0.1.2-arm64.dmg (132 MB), IIMAGINE.Desktop.Setup.0.1.2.exe (266 MB) and IIMAGINE.Desktop-0.1.2.AppImage (139 MB); macOS build signed and notarized per the site, Windows build not code-signed (SmartScreen prompt)',
  tagline: {
    en: 'Open-source desktop chat app with a bundled local engine, document chat, voice, MCP, plugins and an OpenAI-compatible localhost API; cloud is optional',
    de: 'Quelloffene Desktop-Chat-App mit mitgelieferter lokaler Engine, Dokumenten-Chat, Sprache, MCP, Plugins und OpenAI-kompatibler localhost-API; Cloud ist optional',
    fr: 'Application de chat de bureau open source avec moteur local intégré, chat avec documents, voix, MCP, plugins et API locale compatible OpenAI ; le cloud est facultatif',
    ja: 'ローカルエンジン内蔵のオープンソース・デスクトップチャットアプリ。文書チャット、音声、MCP、プラグイン、OpenAI互換のlocalhost APIを備え、クラウドは任意',
    zh: '开源桌面聊天应用，内置本地引擎，支持文档对话、语音、MCP、插件和兼容 OpenAI 的本地 API，云端为可选项',
    es: 'App de chat de escritorio de código abierto con motor local integrado, chat con documentos, voz, MCP, plugins y API local compatible con OpenAI; la nube es opcional',
    pt: 'App de chat para desktop de código aberto com motor local embutido, chat com documentos, voz, MCP, plugins e API local compatível com OpenAI; a nuvem é opcional',
    ar: 'تطبيق دردشة مفتوح المصدر لسطح المكتب بمحرك محلي مدمج ودردشة مع المستندات وصوت وMCP وإضافات وواجهة API محلية متوافقة مع OpenAI، والسحابة اختيارية',
    ko: '로컬 엔진을 내장한 오픈소스 데스크톱 채팅 앱으로, 문서 채팅·음성·MCP·플러그인·OpenAI 호환 localhost API를 제공하며 클라우드는 선택 사항입니다',
  },
  reviewSlug: 'iimagine-desktop-review',
  pqReview: {
    date: '2026-10-24',
    version: '0.1.2',
    versionSourceUrl: 'https://github.com/iimagine-ai/desktop/releases/tag/v0.1.2',
  },
  // Comparison attributes from the project's README and iimagine.ai pages on 2026-10-24; a missing key = not stated there, never false.
  // ollama and customEndpoint are not stated (the app calls named cloud providers and serves its own API, but connecting to Ollama or arbitrary endpoints is not documented), so they stay unset.
  compare: { builtInEngine: true, mcp: true, fileChat: true, voice: true }, // voice = local Kokoro text-to-speech plus voice input and voice chat mode
  verdict: 'Best for desktop users who want an MIT-licensed chat app that downloads and runs local models without a terminal, with document chat and a localhost API; limited by a very young 0.x release line, an Apple-Silicon-only Mac build, an unsigned Windows installer, optional cloud paths that leave the device and privacy claims PromptQuorum has not tested.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-08-31', // GitHub Releases API: v0.1.2 published 2026-08-31 (repo pushed_at the same day), read 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/iimagine-ai/desktop/releases/tag/v0.1.2',
}

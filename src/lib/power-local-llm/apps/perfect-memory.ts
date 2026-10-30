// Local AI App Directory — Perfect Memory AI: searchable screen and meeting memory (layer: desktop, personal assistants)
// Added 2026-10-30 at the owner's request. Facts verified 2026-10-30 from perfectmemory.ai (home, /pricing, /pricing/pro-offline,
// /download, /private-by-design, /mcp, /blog, /support/getting-started/how-to-install), the privacy policy at /privacy (last updated
// 2026-06-30; company "Perfect Memory llc", country of incorporation not stated) and GitHub Releases of DariusKocar/PerfectMemoryMac-releases
// (a public Sparkle update feed + release assets, no source code): v0.17.25 published 2026-10-17 (stable), earlier 0.17.x builds are marked pre-release.
// Windows: /download/windows redirects to downloads.perfectmemory.ai/static/4.0.187/Perfect Memory.msi (installer file name; the file itself is
// dated 2024-10-28 and the app updates itself, so no Windows release date is claimed). Microsoft Store listing XP9M33WLFS472F exists.
// Locality is hybrid: capture, OCR, speech recognition and storage are on the PC/Mac; the built-in AI sends the question and the history
// excerpts it needs through the maker's server to the AI provider (OpenAI per the privacy policy); pointing the assistant at Ollama, LM Studio
// or Jan keeps answers on the machine (/private-by-design, homepage). Pro Offline ($79) "requires you to provide your own AI". The optional
// MCP connection (off by default) relays requests through the maker's cloud to Claude/ChatGPT.
// No version number is published on the site; the Mac version comes from the release feed, the Windows installer folder is 4.0.187 (unconfirmed as app version).
// No `compare` block: languages, speaker labels and CPU-only use are not stated by the maker.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'perfect-memory',
  name: 'Perfect Memory AI',
  categories: ['personal-assistants', 'local-search', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'hybrid', // recording, OCR, speech recognition and storage are on-device; AI answers are local only if you point it at Ollama, LM Studio or Jan, otherwise the built-in AI goes via the maker's server to OpenAI (privacy policy 2026-06-30)
  platforms: ['mac', 'win'], // Windows 10/11 (MSI or Microsoft Store); macOS 14 or later on Apple silicon (DMG)
  worksWith: ['Ollama', 'LM Studio', 'Jan', 'Claude', 'ChatGPT', 'Zoom', 'Google Meet', 'Microsoft Teams', 'Slack', 'Webex', 'WhatsApp'], // local AI servers per /private-by-design; MCP clients and meeting apps per the homepage
  engine: 'external', // the assistant calls a model you run in Ollama, LM Studio or Jan, or the maker's hosted AI; no bundled LLM
  license: 'Closed source', // no repository or licence found; the GitHub repo is only an update feed
  price: 'freemium', // Free ($0: 10 AI assists and 30 AI meetings a month), Pro $15/month billed yearly, Pro Offline $79 one-time (own AI required); USD only on the site
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated; any local model needs its own hardware
  stars: null, // no public source repository
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['audio', 'docs'],
  url: 'perfectmemory.ai',
  storeLinks: {
    web: 'https://www.perfectmemory.ai',
  },
  installEffort: 'installer',
  installEvidence: 'perfectmemory.ai/download checked 2026-10-30: Windows "Perfect Memory.msi" (folder 4.0.187) and Microsoft Store listing XP9M33WLFS472F; macOS PerfectMemory-0.17.25.dmg via the GitHub Releases feed (macOS 14+, Apple silicon); signed installers, self-updating',
  tagline: {
    en: 'Windows and Mac app that records your screen and meetings on your own machine so you can search them later, with AI answers that stay local only if you connect Ollama, LM Studio or Jan',
    de: 'Windows- und Mac-App, die Bildschirm und Meetings auf Ihrem eigenen Rechner aufzeichnet und durchsuchbar macht; KI-Antworten bleiben nur lokal, wenn Sie Ollama, LM Studio oder Jan anbinden',
    fr: "Application Windows et Mac qui enregistre votre écran et vos réunions sur votre propre machine pour les rendre consultables, avec des réponses IA locales uniquement si vous connectez Ollama, LM Studio ou Jan",
    ja: '画面と会議を自分のPC/Mac上で記録して後から検索できるWindows/Macアプリ。AIの回答がローカルで完結するのは、Ollama・LM Studio・Janを接続した場合のみ',
    zh: '在你自己的电脑上记录屏幕和会议并支持日后搜索的 Windows 与 Mac 应用；只有连接 Ollama、LM Studio 或 Jan 时，AI 回答才会留在本机',
    es: 'App para Windows y Mac que graba tu pantalla y tus reuniones en tu propio equipo para poder buscarlas después; las respuestas de IA solo son locales si conectas Ollama, LM Studio o Jan',
    pt: 'App para Windows e Mac que grava sua tela e suas reuniões no seu próprio computador para você pesquisar depois; as respostas de IA só ficam locais se você conectar Ollama, LM Studio ou Jan',
    ar: 'تطبيق لنظامي Windows وMac يسجّل شاشتك واجتماعاتك على جهازك لتبحث فيها لاحقًا، وتبقى إجابات الذكاء الاصطناعي محلية فقط إذا ربطته بـ Ollama أو LM Studio أو Jan',
    ko: '화면과 회의를 내 컴퓨터에 기록해 나중에 검색할 수 있는 Windows·Mac 앱으로, Ollama, LM Studio 또는 Jan을 연결할 때만 AI 답변이 기기 안에 머뭅니다',
  },
  reviewSlug: 'perfect-memory-review',
  pqReview: {
    date: '2026-10-30',
    version: '0.17.25',
    versionSourceUrl: 'https://github.com/DariusKocar/PerfectMemoryMac-releases/releases/tag/v0.17.25',
  },
  verdict: 'Best for people who want a searchable record of their screen and meetings and are willing to connect Ollama, LM Studio or Jan to keep AI answers on their machine; limited by a default AI path that goes through the maker\'s server to OpenAI, closed source, no published version for Windows and privacy and security claims PromptQuorum could not check.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-17', // Mac release v0.17.25 (GitHub Releases, read 2026-10-30); Windows installer has no dated release
  lastUpstreamUpdateSource: 'https://github.com/DariusKocar/PerfectMemoryMac-releases/releases/tag/v0.17.25',
}

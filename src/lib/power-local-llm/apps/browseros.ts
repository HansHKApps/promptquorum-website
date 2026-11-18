// Local AI App Directory — BrowserOS (layer: AI browser, Chromium fork with built-in assistant; macOS / Windows / Linux installers).
// Added 2026-11-14 on an owner request (browseros.com). Facts verified 2026-11-14 against: browseros.com (home, /download: the "original BrowserOS" installers
// BrowserOS.dmg / BrowserOS_installer.exe / BrowserOS.AppImage on files.browseros.com, no version in the file names), docs.browseros.com (quick start: Chat / Agent /
// Graph "coming soon" modes, `brew install --cask browseros`, macOS 13+; local-models: Ollama + LM Studio via chrome://browseros/settings, context window >= 15,000-20,000,
// starter model qwen/qwen3-4b 2.28 GB, RAM tiers 8 / 16+ / 64+ GB; bring-your-own-llm: default provider Moonshot AI Kimi K2.5 plus Gemini, Anthropic, OpenAI, OpenRouter,
// Azure OpenAI, AWS Bedrock, OpenAI-compatible; "Local LLMs are not yet powerful enough for Agent Mode"; use-with-claude-code: built-in MCP server on 127.0.0.1, 53 tools;
// ad-blocking: uBlock Origin + Manifest V2; changelog: newest entry v0.46.0 "June 17, 2026", then v0.44.0 March 20, 2026 — no v0.45.0, nothing after),
// browseros.com/privacy (updated 13 March 2026: history/cookies/URLs local, cloud sync off by default, default provider receives prompts, BYOK not logged,
// local model = no data leaves the device, collects name/email/engagement, uses Segment, Mixpanel, June, Airtable) and the GitHub API for browseros-ai/BrowserOS
// (AGPL-3.0, 14,341 stars, pushed_at 2026-11-14 — but the repo is shared with BrowserOS neo and its releases/tags list only neo/browserclaw builds).
// JUDGEMENT CALL: lastUpstreamUpdate is the ORIGINAL product's last changelog entry (2026-06-17), not the repo's push date, because the repo activity is neo's.
// That makes the 3-month stale warning (quiet, ~150 days) show on this tile — owner may revisit. BrowserOS neo (separate secondary browser for coding agents,
// v0.52.0 Oct 2026, own privacy policy) is mentioned in the review only; it has no tile. Not tested hands-on.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'browseros',
  name: 'BrowserOS',
  categories: ['browser-sidebars'],
  interfaces: ['desktop'],
  locality: 'hybrid', // Chat Mode can use a local Ollama / LM Studio model (stays on the device); the default provider is cloud (Moonshot AI) and Agent Mode is recommended with cloud models
  platforms: ['mac', 'win', 'linux'], // macOS 13+ (.dmg / Homebrew cask), Windows installer, Linux AppImage
  worksWith: ['Ollama', 'LM Studio'],
  engine: 'external', // inference is done by Ollama / LM Studio or a cloud provider
  license: 'AGPL-3.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // docs size local models by RAM (8 / 16+ / 64+ GB tiers) but give no fixed requirement
  stars: 14341, // github.com/browseros-ai/BrowserOS, GitHub API 2026-11-14 (repo shared with BrowserOS neo)
  addedDate: '2026-11-14',
  status: 'listed',
  uses: ['chat'],
  url: 'browseros.com',
  storeLinks: {
    web: 'https://browseros.com',
    github: 'https://github.com/browseros-ai/BrowserOS',
  },
  installEffort: 'installer',
  installEvidence: 'browseros.com/download "original BrowserOS" section checked 2026-11-14: BrowserOS.dmg (macOS), BrowserOS_installer.exe (Windows), BrowserOS.AppImage (Linux) on files.browseros.com, plus `brew install --cask browseros` per docs quick start; Ollama or LM Studio is a separate install',
  tagline: {
    en: 'Free open-source Chromium AI browser for Mac, Windows and Linux whose Chat Mode can use local Ollama or LM Studio models or your own cloud provider keys',
    de: 'Kostenloser, quelloffener Chromium-KI-Browser für Mac, Windows und Linux, dessen Chat-Modus lokale Ollama- oder LM-Studio-Modelle oder Ihre eigenen Cloud-Anbieter-Schlüssel nutzen kann',
    fr: "Navigateur IA Chromium gratuit et open source pour Mac, Windows et Linux, dont le mode Chat peut utiliser des modèles locaux Ollama ou LM Studio ou vos propres clés de fournisseurs cloud",
    ja: 'Mac・Windows・Linux向けの無料オープンソースChromium AIブラウザ。チャットモードではOllamaやLM Studioのローカルモデル、または自分のクラウドAPIキーを利用できます',
    zh: '适用于 Mac、Windows 和 Linux 的免费开源 Chromium AI 浏览器，其聊天模式可使用本地 Ollama 或 LM Studio 模型，或你自己的云端提供商密钥',
    es: 'Navegador de IA Chromium gratuito y de código abierto para Mac, Windows y Linux cuyo Modo Chat puede usar modelos locales de Ollama o LM Studio o tus propias claves de proveedores en la nube',
    pt: 'Navegador de IA Chromium gratuito e de código aberto para Mac, Windows e Linux cujo Modo Chat pode usar modelos locais do Ollama ou LM Studio ou suas próprias chaves de provedores na nuvem',
    ar: 'متصفح ذكاء اصطناعي مجاني ومفتوح المصدر مبني على Chromium لأنظمة Mac وWindows وLinux، يمكن لوضع الدردشة فيه استخدام نماذج Ollama أو LM Studio المحلية أو مفاتيح مزوّدي السحابة الخاصة بك',
    ko: 'Mac, Windows, Linux용 무료 오픈소스 Chromium AI 브라우저로, 채팅 모드에서 로컬 Ollama·LM Studio 모델이나 직접 입력한 클라우드 제공업체 키를 사용할 수 있습니다',
  },
  reviewSlug: 'browseros-review',
  pqReview: {
    date: '2026-11-14',
    version: '0.46.0',
    versionSourceUrl: 'https://docs.browseros.com/browseros/changelog.md',
  },
  verdict: 'Best for people who already run Ollama or LM Studio and want to try a free, open-source AI browser on Mac, Windows or Linux; the original BrowserOS has no changelog entry since 17 June 2026 (the maker\'s recent work is BrowserOS neo), the default AI provider is a cloud service, the docs say local models are not yet powerful enough for Agent Mode, and PromptQuorum did not test the app hands-on.',
  lastVerifiedDate: '2026-11-14',
  lastUpstreamUpdate: '2026-06-17', // original BrowserOS changelog, newest entry v0.46.0 "June 17, 2026", read 2026-11-14 (repo pushes since are BrowserOS neo)
  lastUpstreamUpdateSource: 'https://docs.browseros.com/browseros/changelog.md',
}

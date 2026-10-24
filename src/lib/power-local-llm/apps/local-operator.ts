// Local AI App Directory — Local Operator (layer: agent, desktop app + terminal)
// Added 2026-10-24 on request. Verified on 2026-10-24 against: local-operator.com (home, /download, /privacy-policy), the GitHub
// repositories damianvtran/local-operator (core agent runtime, Python, MIT, created 2025-01-25, latest release v0.88.3 published
// 2026-10-24) and damianvtran/local-operator-ui (desktop app, MIT, latest release v0.42.2 published 2026-10-24T06:58Z with assets
// local-operator-ui-0.42.2-arm64.dmg / -x64.dmg / -arm64.zip / -x64.zip, local-operator-ui-setup-0.42.2(-x64|-arm64).exe,
// -x86_64.AppImage, -amd64.deb, -x86_64.rpm), plus the core README (providers, safety model).
// VERSION CONFLICT RESOLVED: the website's /download page and footer are stale — they show "v0.12.8, published 11 February 2026",
// with Windows/Linux files named 0.12.8 and macOS files named 0.19.7 (universal .dmg/.zip). The GitHub Releases page of the desktop
// app is the primary source and shows 0.42.2 (2026-10-24), so 0.42.2 is the version recorded here; the maker is Radient Inc.
// LOCALITY = hybrid: the agent runtime and the files it works on stay on the computer, but the model can be a hosted one
// (Radient Pass, or the user's own OpenAI/Anthropic/etc. keys), in which case the conversation text goes to that provider; only a
// local model server (Ollama, LM Studio, vLLM, llama.cpp) keeps everything on the machine. Web search is on by default (README).
// Not tested hands-on.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'local-operator',
  name: 'Local Operator',
  categories: ['autonomous-agents'],
  interfaces: ['desktop', 'cli'],
  locality: 'hybrid', // runtime + files local; model local (Ollama etc.) or hosted (Radient Pass / own API keys) — site privacy section
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'vLLM', 'llama.cpp', 'OpenAI', 'Anthropic', 'Google Gemini', 'DeepSeek', 'Mistral', 'OpenRouter', 'Radient Pass'],
  engine: 'external', // no bundled model: connects to Ollama/LM Studio/vLLM/llama.cpp, subscriptions, API keys or Radient Pass
  license: 'MIT',
  price: 'free', // app free and open source, "no paid tier of the app itself"; hosted model usage (Radient Pass / own keys) costs extra
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM/VRAM floor stated; depends on the model chosen. OS floor: macOS 11+, Windows 10+, x86_64 Linux
  stars: 218, // damianvtran/local-operator via GitHub API, read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['agent', 'code'],
  url: 'local-operator.com',
  storeLinks: {
    web: 'https://local-operator.com',
    github: 'https://github.com/damianvtran/local-operator',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases of damianvtran/local-operator-ui v0.42.2 (2026-10-24): .dmg (arm64, x64), .exe setup (x64, arm64, combined), .AppImage, .deb, .rpm; the website /download page lists the same installer types (but stale file names, v0.12.8); backend installs itself on first run; macOS Gatekeeper and Windows SmartScreen prompts documented; read 2026-10-24',
  tagline: {
    en: 'Free, open-source desktop agent app that writes and runs code on your computer, with a local Ollama model or a hosted one',
    de: 'Kostenlose Open-Source-Desktop-Agenten-App, die Code auf Ihrem Computer schreibt und ausführt – mit lokalem Ollama-Modell oder gehostetem Modell',
    fr: 'Appli d’agents de bureau gratuite et open source qui écrit et exécute du code sur votre ordinateur, avec un modèle Ollama local ou hébergé',
    ja: 'コンピューター上でコードを書いて実行する、無料のオープンソースのデスクトップ・エージェントアプリ。ローカルのOllamaモデルもホスト型モデルも利用可能',
    zh: '免费开源的桌面智能体应用，在你的电脑上编写并运行代码，可搭配本地 Ollama 模型或托管模型',
    es: 'App de agentes de escritorio gratuita y de código abierto que escribe y ejecuta código en tu ordenador, con un modelo local de Ollama o uno alojado',
    pt: 'App de agentes para desktop, gratuito e de código aberto, que escreve e executa código no seu computador, com modelo local do Ollama ou hospedado',
    ar: 'تطبيق وكلاء مجاني ومفتوح المصدر لسطح المكتب يكتب الشيفرة وينفذها على حاسوبك، مع نموذج Ollama محلي أو نموذج مستضاف',
    ko: '컴퓨터에서 코드를 작성하고 실행하는 무료 오픈소스 데스크톱 에이전트 앱. 로컬 Ollama 모델 또는 호스팅 모델 사용 가능',
  },
  // Comparison attributes (autonomous-agents segment), read from the website and the core README on 2026-10-24: local models
  // (Ollama, LM Studio, vLLM, llama.cpp), code execution ("write and run code on your computer"), web browsing (browser pane,
  // web search/fetch) and persistent memory ("keeps the skill", long-term store) are stated. `sandbox` is not stated — actions are
  // approval-gated, not sandboxed — so it is left unset, never false.
  compare: { localLlm: true, ollama: true, codeExecution: true, webBrowsing: true, memory: true },
  mcpSupport: true, // README "MCP servers" section: MCP client over the official SDK; not tested
  reviewSlug: 'local-operator-review',
  pqReview: {
    date: '2026-10-24',
    version: '0.42.2',
    versionSourceUrl: 'https://github.com/damianvtran/local-operator-ui/releases/tag/v0.42.2',
  },
  verdict: 'Worth a look for Mac, Windows and Linux users who want a free, approval-gated agent that works on their own files and can run entirely on a local Ollama model, if they accept that a hosted model sends the conversation to its provider and that the project ships many releases a day.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-24', // desktop app v0.42.2 published 2026-10-24T06:58Z; core v0.88.3 the same day
  lastUpstreamUpdateSource: 'https://github.com/damianvtran/local-operator-ui/releases/tag/v0.42.2',
}

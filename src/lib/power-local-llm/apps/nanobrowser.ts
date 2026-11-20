// Local AI App Directory — Nanobrowser (layer: browser agent, Chrome/Edge side-panel extension; works with cloud models or local Ollama / LM Studio).
// Added 2026-11-20 from the owner's list (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-20: nanobrowser.ai (home, /docs/models, /docs/local-models, /docs/permissions, /docs/privacy, /changelog), github.com/nanobrowser/nanobrowser
// (README, PRIVACY.md, GitHub API, Releases), Chrome Web Store listing (imbddededgmcgfhfpcjmijokokekbkal: version 0.3.0, updated 16 Oct 2026, 50,000 users,
// 3.8 from 81 ratings, free), Microsoft Edge Add-ons link on the website.
// Notes:
// - License: Apache-2.0 (GitHub API spdx + README). Free; the user pays the model provider directly (docs/models "Nanobrowser is free. You pay the model provider").
// - Stars: GitHub API 14353 on 2026-11-20.
// - engine = 'external': no bundled model; cloud providers (Anthropic, OpenAI, Gemini, AWS Bedrock, OpenRouter, xAI, DeepSeek, Mistral, any OpenAI-compatible endpoint)
//   or local Ollama / LM Studio / other OpenAI-compatible servers. The model must support tool calling (docs/models).
// - locality = hybrid: the extension runs in your browser and stores chats/keys locally; page content goes to whichever model provider you choose, or stays on the
//   computer with a local model (PRIVACY.md, docs/privacy). Voice input goes to OpenAI or Google if enabled. Anonymous usage counts go to PostHog (US), on by default.
// - Install effort: hosted (browser extension from the Chrome Web Store / Edge Add-ons, one click; same tier as the Linguister extension). Build from source also documented.
// - HQ flag: NOT set. PRIVACY.md and docs/privacy name only "the Nanobrowser team" and a contact address (cws@felight.xyz / info@nanobrowser.ai); no company
//   name, address, governing law or country (the only country named is the US for PostHog analytics, which is not the developer's HQ). Owner could not be asked (unattended run).
// - Version: pqReview.version 0.3.0 (GitHub release v0.3.0 published 2026-10-15; Chrome Web Store 0.3.0 updated 2026-10-16).
// - Compare (autonomous-agents segment): localLlm + ollama true (docs/local-models), webBrowsing true (core purpose), memory true (README: persistent memory).
//   codeExecution, sandbox not stated -> unset.
// Last upstream update: 2026-11-17 (GitHub pushed_at 2026-11-17T13:58Z; latest release v0.3.0 on 2026-10-15) -> NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'nanobrowser',
  name: 'Nanobrowser',
  categories: ['computer-browser-agents', 'browser-sidebars', 'autonomous-agents'],
  interfaces: ['plugin'],
  locality: 'hybrid', // extension and chats stay in your browser; page content goes to the model provider you pick, or stays on your computer with a local Ollama / LM Studio model
  platforms: ['mac', 'win', 'linux'], // Chrome and Edge on desktop; the README lists other browsers as untested
  worksWith: ['Ollama', 'LM Studio', 'OpenAI', 'Anthropic', 'Google Gemini', 'OpenRouter', 'Chrome', 'Edge'],
  engine: 'external', // no bundled model: cloud providers or a local OpenAI-compatible server such as Ollama or LM Studio
  license: 'Apache-2.0',
  price: 'free', // extension is free, no sign-up; model usage is billed by your own provider
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement stated for the extension; a local model needs a loaded context of at least 16k tokens per the docs
  stars: 14353, // github.com/nanobrowser/nanobrowser, GitHub API 2026-11-20
  addedDate: '2026-11-20',
  status: 'listed',
  uses: ['agent'],
  url: 'nanobrowser.ai',
  storeLinks: {
    github: 'https://github.com/nanobrowser/nanobrowser',
    web: 'https://nanobrowser.ai',
  },
  installEffort: 'hosted',
  installEvidence: 'On 2026-11-20 nanobrowser.ai linked an "Add to Chrome" listing (Chrome Web Store, version 0.3.0, updated 16 Oct 2026, free) and a Microsoft Edge Add-ons listing; the README quick start says to install from the Chrome Web Store, then connect a provider or local model. GitHub Releases v0.3.0 only ships nanobrowser-0.3.0.zip (an unpacked extension for developer mode); building from source needs Node.js 24 and pnpm 10.',
  tagline: {
    en: 'Free open-source browser agent for Chrome and Edge that works in a side panel and can use cloud models or local Ollama and LM Studio models; asks before submitting, sending, deleting or uploading.',
    de: 'Kostenloser, quelloffener Browser-Agent für Chrome und Edge, der in einer Seitenleiste arbeitet und Cloud-Modelle oder lokale Ollama- und LM-Studio-Modelle nutzen kann; fragt vor dem Absenden, Senden, Löschen oder Hochladen nach.',
    fr: 'Agent de navigateur gratuit et open source pour Chrome et Edge, qui travaille dans un panneau latéral et peut utiliser des modèles cloud ou des modèles locaux Ollama et LM Studio ; demande confirmation avant d’envoyer, de supprimer ou de téléverser.',
    ja: 'ChromeとEdge向けの無料オープンソースのブラウザエージェント。サイドパネルで動作し、クラウドモデルやローカルのOllama・LM Studioモデルを利用できます。送信・削除・アップロードの前に確認を求めます。',
    zh: '适用于 Chrome 和 Edge 的免费开源浏览器智能体，在侧边栏中工作，可使用云端模型或本地 Ollama、LM Studio 模型；在提交、发送、删除或上传前会先征求确认。',
    es: 'Agente de navegador gratuito y de código abierto para Chrome y Edge que trabaja en un panel lateral y puede usar modelos en la nube o modelos locales de Ollama y LM Studio; pregunta antes de enviar, eliminar o subir.',
    pt: 'Agente de navegador gratuito e de código aberto para Chrome e Edge que trabalha em um painel lateral e pode usar modelos na nuvem ou modelos locais do Ollama e do LM Studio; pergunta antes de enviar, excluir ou fazer upload.',
    ar: 'وكيل متصفح مجاني ومفتوح المصدر لمتصفحي Chrome وEdge يعمل في لوحة جانبية ويمكنه استخدام نماذج سحابية أو نماذج Ollama وLM Studio المحلية؛ يسأل قبل الإرسال أو الحذف أو الرفع.',
    ko: 'Chrome과 Edge용 무료 오픈소스 브라우저 에이전트로, 사이드 패널에서 작동하며 클라우드 모델이나 로컬 Ollama·LM Studio 모델을 사용할 수 있습니다. 제출, 전송, 삭제, 업로드 전에 확인을 요청합니다.',
  },
  compare: { localLlm: true, ollama: true, webBrowsing: true, memory: true }, // verified against nanobrowser.ai docs and the README on 2026-11-20; missing key = not stated, never false
  reviewSlug: 'nanobrowser-review',
  pqReview: {
    date: '2026-11-20',
    version: '0.3.0',
    versionSourceUrl: 'https://github.com/nanobrowser/nanobrowser/releases/tag/v0.3.0',
  },
  lastVerifiedDate: '2026-11-20',
  lastUpstreamUpdate: '2026-11-17', // GitHub pushed_at 2026-11-17T13:58Z (API, 2026-11-20); latest release v0.3.0 published 2026-10-15
  lastUpstreamUpdateSource: 'https://github.com/nanobrowser/nanobrowser (last push 2026-11-17; latest release v0.3.0 on 2026-10-15)',
}

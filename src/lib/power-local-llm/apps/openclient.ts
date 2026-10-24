// Local AI App Directory — OpenClient (layer: mobile/desktop chat client for your own server)
// Added 2026-10-24 on the owner's request (link to the maker's product page). Facts read on 2026-10-24 from: the maker's page
// arturocarreterocalvo.com/openclient-llm and its privacy page (policy dated 15 July 2026), the GitHub repo artcc/openclient-llm
// (README, AGPL-3.0 licence field, Releases), and the App Store listing id6761379499 via the iTunes lookup API (free in the US, DE, FR,
// JP, ES, BR and KR storefronts; v1.7.30 current since 2026-10-23). No hands-on testing, no maker comment yet.
// It is a pure client: it ships no model or inference engine and only talks to an Ollama, LiteLLM or OpenAI-compatible server the user runs,
// so `locality` is hybrid (what happens behind that server is the user's setup) and hardware is whatever the server needs.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openclient',
  name: 'OpenClient',
  categories: ['general-chat-clients'],
  interfaces: ['mobile', 'desktop'],
  locality: 'hybrid', // client for a server the user configures (Ollama, LiteLLM or any OpenAI-compatible API); that server may forward to cloud providers
  platforms: ['ios', 'mac'], // iPhone, iPad (App Store) and Mac (App Store + signed .dmg on GitHub Releases); all need version 26 of the OS
  worksWith: ['Ollama', 'LiteLLM', 'OpenAI-compatible servers'],
  engine: 'external', // ships no model runtime; README: connects to the server you configure
  license: 'AGPL-3.0', // GitHub API licence field spdx AGPL-3.0 + README, read 2026-10-24
  price: 'free', // App Store price "Free" in 7 storefronts; privacy page mentions voluntary StoreKit purchases (README: tip jar)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // the client needs iOS/iPadOS/macOS 26; the hardware floor is the connected server's
  stars: 33, // github.com/artcc/openclient-llm via GitHub API, read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'arturocarreterocalvo.com/openclient-llm',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/id6761379499',
    github: 'https://github.com/artcc/openclient-llm',
  },
  installEffort: 'installer', // see InstallEffortKey in ./types.ts
  installEvidence: 'App Store listing id6761379499 (free, iPhone/iPad/Mac, v1.7.30 updated 2026-10-23); GitHub Releases v1.7.30-build-127-macos ships OpenClient-LLM-1.7.30-build-127.dmg, which the README calls signed and notarized; a TestFlight beta also exists. It still needs a separate Ollama/LiteLLM/OpenAI-compatible server to talk to. checked 2026-10-24',
  tagline: {
    en: 'Free, open-source iPhone, iPad and Mac chat client for your own Ollama, LiteLLM or OpenAI-compatible server',
    de: 'Kostenloser, quelloffener Chat-Client für iPhone, iPad und Mac für Ihren eigenen Ollama-, LiteLLM- oder OpenAI-kompatiblen Server',
    fr: 'Client de chat gratuit et open source pour iPhone, iPad et Mac, pour votre propre serveur Ollama, LiteLLM ou compatible OpenAI',
    ja: '自分のOllama・LiteLLM・OpenAI互換サーバーにつなぐ、無料のオープンソースiPhone/iPad/Mac用チャットクライアント',
    zh: '免费开源的 iPhone、iPad 和 Mac 聊天客户端，连接你自己的 Ollama、LiteLLM 或兼容 OpenAI 的服务器',
    es: 'Cliente de chat gratuito y de código abierto para iPhone, iPad y Mac para tu propio servidor Ollama, LiteLLM o compatible con OpenAI',
    pt: 'Cliente de chat gratuito e de código aberto para iPhone, iPad e Mac, para o seu próprio servidor Ollama, LiteLLM ou compatível com OpenAI',
    ar: 'عميل دردشة مجاني ومفتوح المصدر لأجهزة iPhone وiPad وMac، يتصل بخادم Ollama أو LiteLLM أو خادم متوافق مع OpenAI تديره بنفسك',
    ko: '직접 운영하는 Ollama, LiteLLM, OpenAI 호환 서버에 연결하는 무료 오픈소스 iPhone·iPad·Mac 채팅 클라이언트',
  },
  mcpSupport: true, // README: MCP tools exposed through the LiteLLM backend can be discovered, enabled and run from the chat bar
  reviewSlug: 'openclient-review',
  // Comparison attributes (desktop + mobile chat segments), each read from the README / maker's page on 2026-10-24; a missing key = not stated, never false.
  compare: { builtInEngine: false, ollama: true, customEndpoint: true, mcp: true, voice: true, visionInput: true },
  pqReview: {
    date: '2026-10-24',
    version: '1.7.30',
    versionSourceUrl: 'https://apps.apple.com/us/app/id6761379499',
  },
  verdict: 'Best for Apple users who already run Ollama or LiteLLM and want a native, open-source chat front end for it; useless without your own server, requires OS 26, and the project is under seven months old with a single maintainer.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-23', // App Store: v1.7.30 current version date 2026-10-23T15:27Z (iTunes lookup); GitHub release v1.7.30-build-127 published 2026-10-22
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/id6761379499',
}

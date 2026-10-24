// Local AI App Directory — Zero1LLM (layer: desktop — local chat app with web search, browser control and file/image tools)
// Added 2026-10-24 on the owner's request. All facts below read from zero1llm.ai (home, /download, /changelog, /pricing, /about,
// /privacy) on 2026-10-24 — no hands-on testing. The product was renamed to Zero1LLM in version 0.1.8 (changelog, 21 October 2026).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'zero1llm',
  name: 'Zero1LLM',
  categories: ['general-chat-clients'],
  interfaces: ['desktop'],
  locality: 'hybrid', // local models by default; optional cloud models (OpenAI, Anthropic, Gemini, OpenRouter) with the user's own key; web search and page reads go out over the internet
  platforms: ['mac', 'win'], // /download: Windows 10/11 64-bit and Apple Silicon Mac; "Linux and Intel Macs are not yet available"
  worksWith: ['llama.cpp', 'MLX', 'whisper.cpp', 'Hugging Face', 'OpenAI', 'Anthropic', 'Gemini', 'OpenRouter'],
  engine: 'builtin',
  license: 'Not stated', // zero1llm.ai states no licence and links no repository (read 2026-10-24), so no open-or-closed claim is made
  price: 'freemium', // Free plan with no time limit; Pro ($20) is a draft price and payments are not switched on (/pricing, 2026-10-24)
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true, variesByModel: true }, // /download: 8 GB RAM minimum, 16 GB recommended; an NVIDIA or AMD GPU is optional — read 2026-10-24
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat'],
  url: 'zero1llm.ai',
  storeLinks: {
    web: 'https://www.zero1llm.ai/download',
  },
  installEffort: 'installer', // see InstallEffortKey in ./types.ts
  installEvidence: 'zero1llm.ai/download offers Zero1LLM_0.1.10_x64-setup.exe (Windows 10/11, 64-bit) and Zero1LLM_0.1.10_aarch64.dmg (Apple Silicon); both builds are unsigned previews (Windows "More info" -> "Run anyway", macOS "Open Anyway"); no Linux or Intel Mac build. checked 2026-10-24',
  tagline: {
    en: 'Desktop chat app for open models with web search, per-site browser control and file reading, on Windows and Apple Silicon',
    de: 'Desktop-Chat-App für offene Modelle mit Websuche, Browsersteuerung pro Website und Dateilesen, für Windows und Apple Silicon',
    fr: 'Application de chat de bureau pour modèles ouverts, avec recherche web, contrôle du navigateur site par site et lecture de fichiers, sur Windows et Apple Silicon',
    ja: 'Web 検索・サイト単位のブラウザ操作・ファイル読み取りを備えた、オープンモデル向けデスクトップチャットアプリ（Windows / Apple Silicon）',
    zh: '面向开源模型的桌面聊天应用，支持网页搜索、按站点授权的浏览器控制和文件读取，适用于 Windows 与 Apple Silicon',
    es: 'App de chat de escritorio para modelos abiertos con búsqueda web, control del navegador por sitio y lectura de archivos, en Windows y Apple Silicon',
    pt: 'App de chat para desktop com modelos abertos, busca na web, controle do navegador por site e leitura de arquivos, no Windows e no Apple Silicon',
    ar: 'تطبيق دردشة لسطح المكتب للنماذج المفتوحة مع بحث على الويب وتحكم بالمتصفح لكل موقع وقراءة الملفات، على Windows وApple Silicon',
    ko: '웹 검색, 사이트별 브라우저 제어, 파일 읽기를 갖춘 오픈 모델용 데스크톱 채팅 앱 (Windows·Apple Silicon)',
  },
  reviewSlug: 'zero1llm-review',
  // Comparison attributes (desktop chat apps), each read from zero1llm.ai on 2026-10-24; a missing key = not stated there, never false.
  // Custom OpenAI-compatible endpoints, MCP and an Ollama connection are not mentioned on the site, so they stay unset.
  compare: { builtInEngine: true, fileChat: true, voice: true }, // voice = offline voice typing (input only; no spoken output is mentioned)
  pqReview: {
    date: '2026-10-24',
    version: '0.1.10',
    versionSourceUrl: 'https://www.zero1llm.ai/download',
  },
  verdict: 'Best for Windows and Apple Silicon users who want a desktop chat app for open models with web search, permissioned browser control and file reading, and who accept an unsigned preview build, a mandatory free account, draft prices and a maker that publishes no licence or source repository.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-23', // installer files Zero1LLM_0.1.10_aarch64.dmg / _x64-setup.exe on zero1llm.ai/download: storage Last-Modified 23 Oct 2026 13:30 / 13:43 GMT (the changelog page lists releases only up to 0.1.8, 21 Oct 2026)
  lastUpstreamUpdateSource: 'https://www.zero1llm.ai/download',
}

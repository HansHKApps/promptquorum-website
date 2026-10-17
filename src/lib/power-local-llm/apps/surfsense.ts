// Local AI App Directory — SurfSense (layer: document chat / NotebookLM-style research agent)
// Added 2026-10-17. Facts verified 2026-10-17 against github.com/MODSetter/SurfSense (README,
// latest release v2.2.2, Apache-2.0) and surfsense.com/pricing. The hosted web app is being sunset
// on 2026-10-18; the current product is the local desktop app.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'surfsense',
  name: 'SurfSense',
  categories: ['document-pdf-chat', 'rag-frameworks'],
  interfaces: ['desktop'],
  locality: 'local', // index stays on disk, no account; documents only leave the machine if the user picks a remote model, verified 2026-10-17
  platforms: ['win', 'mac', 'linux'], // Windows x64, macOS Apple Silicon (arm64.dmg), Linux x64 AppImage/deb — GitHub release v2.2.2
  worksWith: ['OpenAI API'], // README: any OpenAI-compatible API, or a local model
  engine: 'external',
  license: 'Apache-2.0',
  price: 'freemium', // app is free; some SurfSense plugins (Google Search, Web Crawl, YouTube, …) need a paid license, 30-day free trial — surfsense.com/pricing
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true },
  stars: 16499, // github.com/MODSetter/SurfSense, read 2026-10-17
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['docs', 'agent'],
  url: 'surfsense.com',
  storeLinks: {
    github: 'https://github.com/MODSetter/SurfSense',
    web: 'https://www.surfsense.com/downloads',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub release v2.2.2 ships SurfSense-Setup.exe, SurfSense-arm64.dmg, SurfSense.AppImage and SurfSense.deb; verified 2026-10-17',
  tagline: {
    en: 'Air-gapped, open-source NotebookLM alternative: a desktop AI agent that researches, transforms and edits your documents on your own machine',
    de: 'Air-Gapped-Open-Source-Alternative zu NotebookLM: ein Desktop-KI-Agent, der Ihre Dokumente auf Ihrem eigenen Rechner recherchiert, umwandelt und bearbeitet',
    fr: "Alternative open source à NotebookLM, utilisable hors ligne : un agent IA de bureau qui analyse, transforme et modifie vos documents sur votre propre machine",
    ja: 'エアギャップ対応のオープンソース版NotebookLM代替。自分のPC上で文書の調査・変換・編集を行うデスクトップAIエージェント',
    zh: '可离线运行的开源 NotebookLM 替代品：在本机上研究、转换和编辑文档的桌面 AI 智能体',
    es: 'Alternativa de código abierto a NotebookLM, utilizable sin conexión: un agente de IA de escritorio que investiga, transforma y edita tus documentos en tu propio equipo',
    pt: 'Alternativa de código aberto ao NotebookLM, utilizável offline: um agente de IA de desktop que pesquisa, transforma e edita seus documentos na sua própria máquina',
    ar: 'بديل مفتوح المصدر لـ NotebookLM يعمل دون اتصال: وكيل ذكاء اصطناعي لسطح المكتب يبحث في مستنداتك ويحوّلها ويحرّرها على جهازك',
    ko: '오프라인 구동이 가능한 오픈소스 NotebookLM 대안: 내 컴퓨터에서 문서를 조사·변환·편집하는 데스크톱 AI 에이전트',
  },
  mcpSupport: true, // README: third-party MCP servers from the plugin registry or any added by URL
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-16', // GitHub: release v2.2.2 published 2026-10-16, read 2026-10-17
  lastUpstreamUpdateSource: 'https://github.com/MODSetter/SurfSense/releases',
}

// Local AI App Directory — OpenMontage (layer: video)
// Added 2026-10-17 on request. Facts from github.com/calesthio/OpenMontage (README, LICENSE, GitHub API)
// and openmontage.video, read 2026-10-17. The website's "OpenMontage Studio" desktop app is private alpha
// (waitlist) — the listed, usable product is the open-source repo driven by an AI coding agent.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openmontage',
  name: 'OpenMontage',
  categories: ['video-generation'],
  interfaces: ['cli'],
  locality: 'hybrid', // composition (Remotion/HyperFrames/FFmpeg) and rendering run on your machine; the driving coding agent and most generation providers are cloud, with optional local GPU video models (Wan, Hunyuan, LTX, CogVideo) and offline Piper TTS, verified 2026-10-17
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Piper', 'FFmpeg', 'Remotion'],
  engine: 'external', // needs an AI coding assistant as the driver; Ollama/LM Studio support is listed "coming soon" in the README, verified 2026-10-17
  license: 'AGPL-3.0',
  price: 'free', // software is free; cloud media providers (image/video/TTS APIs) you connect bill separately — the README's showcase films cite roughly $1–5 of provider cost, verified 2026-10-17
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // CPU is enough for stock-footage/image-based videos with cloud providers; free local video generation needs a GPU and depends on the chosen model (README: Wan 2.2/2.1, Hunyuan 1.5, LTX2, CogVideo); no single floor stated, verified 2026-10-17
  stars: 68951, // github.com/calesthio/OpenMontage, GitHub API 2026-10-17
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['agent', 'image'],
  url: 'openmontage.video',
  storeLinks: {
    github: 'https://github.com/calesthio/OpenMontage',
    web: 'https://www.openmontage.video/',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'README Quick Start (2026-10-17): needs Python 3.10+, FFmpeg and Node.js 18+, then `make setup` and a .env with provider keys; no GitHub Releases published (releases API returns 404). The website\'s desktop "Studio" is private alpha / waitlist, so no installer is available yet.',
  tagline: {
    en: 'Open-source agentic video production: your AI coding assistant researches, scripts, generates and renders finished videos',
    de: 'Open-Source-Videoproduktion per KI-Agent: Dein Coding-Assistent recherchiert, schreibt Skripte, erzeugt Material und rendert fertige Videos',
    fr: "Production vidéo agentique open source : votre assistant de code recherche, écrit le script, génère les médias et rend la vidéo finale",
    ja: 'オープンソースのエージェント型動画制作：AIコーディングアシスタントがリサーチ、脚本、素材生成、レンダリングまで行う',
    zh: '开源的智能体视频制作系统：由 AI 编程助手完成调研、脚本、素材生成与成片渲染',
    es: 'Producción de vídeo agéntica de código abierto: tu asistente de programación investiga, escribe el guion, genera los recursos y renderiza el vídeo final',
    pt: 'Produção de vídeo agêntica de código aberto: seu assistente de código pesquisa, escreve o roteiro, gera os recursos e renderiza o vídeo final',
    ar: 'إنتاج فيديو بالوكلاء مفتوح المصدر: يتولى مساعد البرمجة بالذكاء الاصطناعي البحث وكتابة السيناريو وتوليد المواد وإخراج الفيديو النهائي',
    ko: '오픈소스 에이전트형 영상 제작: AI 코딩 어시스턴트가 리서치, 대본, 소재 생성, 최종 렌더링까지 수행',
  },
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-16', // GitHub API: last push 2026-10-16 (no releases published), read 2026-10-17
  lastUpstreamUpdateSource: 'https://github.com/calesthio/OpenMontage',
}

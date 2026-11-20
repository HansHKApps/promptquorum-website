// Local AI App Directory — OpenShorts by TONVI TECH SL (layer: AI clip maker, long video to captioned 9:16 shorts; self-hosted or hosted)
// Added 2026-11-20 at the owner's request. No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-20: official website (openshorts.app: home page, privacy policy updated 2026-11-17, terms of service published 2026-09-04),
// GitHub repository mutonby/openshorts (README, LICENSE/NOTICE, cloud/LICENSE, docker-compose.yml, .env.example, server.json, cli/pyproject.toml, GitHub API),
// GitHub Releases + tags (none), PyPI entry of the companion CLI package "openshorts".
// Notes:
// - Locality 'hybrid': by default the moment picker sends the transcript (and, for layout/thumbnail features, sampled frames) to the Google Gemini API; the README says the
//   self-hosted edition can instead use any OpenAI-compatible server (Ollama, LM Studio, vLLM, llama.cpp server) via LLM_BASE_URL so the clip pipeline stays on the
//   user's machine, but layout picking, the on-screen-content detector and silent videos still need Gemini. Transcription (faster-whisper), scene detection and face
//   tracking run locally. Optional AI Shorts / dubbing / posting features call fal.ai, ElevenLabs and Upload-Post. The hosted OpenShorts Cloud is a cloud service.
// - License: README + LICENSE: MIT for the core app; the cloud/ directory (billing, managed keys, hosted infrastructure) is source-available under the OpenShorts
//   Commercial License (no offering it to third parties as a paid/hosted service).
// - Stars: GitHub API 9424 on 2026-11-20.
// - Version: the project publishes NO GitHub release and NO tag. server.json (MCP registry manifest) says 1.0.0 and the companion CLI package openshorts is 0.1.0 on PyPI
//   (uploaded 2026-08-05); neither is an app version. So the tile has no pqReview (its version field is required and there is no honest value); the review says so instead.
// - Install effort: easiest official path is the hosted OpenShorts Cloud (sign in and paste a link), tier 'hosted' (web). Self-hosting is docker compose after a git clone
//   (copy .env, `docker compose up --build`, enter API keys in Settings; optional GPU override file), which is terminal-setup. No installer builds exist.
// - HQ country ES: privacy policy and terms name TONVI TECH SL, registered address Calle Puerta del Mar 18, Málaga, Spain, Spanish governing law and the Spanish
//   supervisory authority (AEPD). No imprint/about/contact page exists (404); privacy and terms were enough.
// - No compare block: the video-editing category has no comparison segment in compare-schema.ts (editing/clipping tools are intentionally not a segment), so no attributes exist.
// - hardware: README "Setup: Docker, 8GB+ RAM, model downloads"; default image is CPU-only (5 to 8 min per 8-minute video on a typical CPU per the maker); NVIDIA GPU optional.
// Last upstream update: 2026-11-19 (last commit on main 2026-11-19T20:08Z via GitHub API; no releases; API pushed_at 2026-11-20 comes from a side branch) -> NOT stale (3-month rule), checked 2026-11-20.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openshorts',
  name: 'OpenShorts',
  categories: ['video-editing', 'subtitles-dubbing', 'mcp-servers-skills'],
  interfaces: ['web', 'cli'],
  locality: 'hybrid', // moment picker calls Google Gemini by default (transcript, sometimes frames); optional local LLM via LLM_BASE_URL; transcription, scene detection and face tracking run on the host; hosted Cloud is a cloud service
  platforms: ['web', 'selfhosted'], // hosted app at openshorts.app, or Docker Compose self-hosting (README)
  worksWith: ['Gemini', 'Ollama', 'LM Studio', 'vLLM', 'faster-whisper', 'ElevenLabs', 'Claude', 'ChatGPT', 'n8n'], // named in the README
  engine: 'both', // bundles faster-whisper, scene detection and face tracking; the LLM is Gemini or a user-supplied OpenAI-compatible server
  license: 'MIT (core app; cloud/ folder commercial)', // README + LICENSE/NOTICE
  price: 'freemium', // self-hosted free, no watermark; hosted: free plan with watermark, paid plans from $12/month per the website
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true, variesByModel: false }, // README: Docker, 8GB+ RAM; default image CPU-only; NVIDIA GPU optional
  stars: 9424, // GitHub API, 2026-11-20
  addedDate: '2026-11-20',
  status: 'listed',
  uses: ['audio', 'agent'],
  url: 'openshorts.app',
  storeLinks: {
    github: 'https://github.com/mutonby/openshorts',
    web: 'https://www.openshorts.app',
  },
  mcpSupport: true, // README: built-in MCP server at /mcp (self-hosted), hosted endpoint mcp.openshorts.app, stdio variant; also listed via server.json
  installEffort: 'hosted',
  installOn: ['web'],
  installEvidence: 'On 2026-11-20 the website offered the hosted OpenShorts Cloud (sign in, paste a link; free plan with watermark) and the repository had no GitHub Releases and no tags, so no installer build exists. Self-hosting is a README path: git clone, optional .env, `docker compose up --build` (backend, frontend and renderer containers), then API keys entered in Settings, plus an override file for NVIDIA GPU use; that is terminal-setup.',
  tagline: {
    en: 'Open-source clip maker that turns long videos into captioned vertical shorts; self-host with Docker (MIT) or use the hosted cloud, with MCP and API access',
    de: 'Quelloffener Clip-Maker, der lange Videos in untertitelte Hochformat-Shorts verwandelt; per Docker selbst hosten (MIT) oder als gehosteten Dienst nutzen, mit MCP- und API-Zugang',
    fr: 'Générateur de clips open source qui transforme de longues vidéos en shorts verticaux sous-titrés ; à auto-héberger avec Docker (MIT) ou en service hébergé, avec accès MCP et API',
    ja: '長い動画を字幕付きの縦型ショートに変えるオープンソースのクリップ作成ツール。Docker（MIT）でセルフホストするか、ホスト版を利用でき、MCPとAPIにも対応',
    zh: '开源剪辑工具，把长视频变成带字幕的竖屏短视频；可用 Docker 自托管（MIT），也可使用托管云服务，支持 MCP 和 API',
    es: 'Generador de clips de código abierto que convierte vídeos largos en shorts verticales con subtítulos; autoalójalo con Docker (MIT) o usa el servicio alojado, con acceso MCP y API',
    pt: 'Gerador de clipes de código aberto que transforma vídeos longos em shorts verticais legendados; hospede você mesmo com Docker (MIT) ou use o serviço hospedado, com acesso MCP e API',
    ar: 'أداة مفتوحة المصدر لإنشاء المقاطع تحوّل الفيديوهات الطويلة إلى مقاطع رأسية قصيرة مع ترجمة مضمّنة؛ استضفها بنفسك عبر Docker (رخصة MIT) أو استخدم الخدمة المستضافة، مع دعم MCP وواجهة API',
    ko: '긴 영상을 자막이 들어간 세로형 쇼츠로 바꿔 주는 오픈소스 클립 제작 도구. Docker(MIT)로 직접 호스팅하거나 호스팅 서비스를 쓸 수 있으며 MCP와 API를 지원합니다',
  },
  hqCountry: 'ES',
  hqCountrySource: 'https://www.openshorts.app/privacy',
  reviewSlug: 'openshorts-review',
  verdict:
    'Best for creators, podcasters and developers who want an open-source alternative to hosted clip tools and can either self-host with Docker or accept the hosted cloud; limited by a default dependency on Google Gemini for moment picking (a local LLM replaces only part of it), no tagged releases, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-11-20',
  lastUpstreamUpdate: '2026-11-19', // last commit on main 2026-11-19T20:08Z (GitHub API, read 2026-11-20); the repository has no releases or tags
  lastUpstreamUpdateSource: 'https://github.com/mutonby/openshorts/commits/main (last commit on main 2026-11-19; no releases or tags)',
}

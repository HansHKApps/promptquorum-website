// Local AI App Directory — CozyClay by Doyun / NomaDamas (layer: browser-based 3D previs studio for AI video, with an MCP server)
// Added 2026-11-17 at the owner's request (ranked list). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-17: cozyclay.org (home page, JSON-LD, install section, privacy page), GitHub repository HaD0Yun/CozyClay (API metadata, README, LICENSING.md,
// docs/privacy.md, mcp/README.md, CHANGELOG.md head), GitHub releases (v3.2.2 tag, windows-installer asset CozyClay-Setup.exe), the cozyclay-releases repo
// (macos-1.0.3, CozyClay.dmg), the npm registry entry for cozyclay (latest 3.2.2).
// Notes:
// - License: GitHub API AGPL-3.0; LICENSING.md says AGPL-3.0-or-later. Before 2026-08-21 the project was GPL-3.0-or-later (LICENSING.md).
// - Stars: GitHub API 1948 on 2026-11-17 (the owner's list said 1,844).
// - Categories: video-generation first (the app prepares shots for an external AI video model; it does not generate the final video itself), then mcp-servers-skills.
// - locality 'hybrid': the studio and the deterministic motion compiler run in the browser/locally; the agent panel uses model providers (ChatGPT sign-in or own keys),
//   and the final video is made by an external video model the user picks. No cloud account is needed for the studio itself (not tested).
// - engine 'external': the agent models are external; no bundled language model.
// - hardware: README says no GPU, Python or model download is needed; Node.js 22.19+ and a Chromium browser. No RAM figure published.
// - Telemetry: anonymous PostHog usage analytics on the site and the npm package, opt-out via `cclay telemetry off` or DO_NOT_TRACK=1 (docs/privacy.md).
// - HQ country: NOT set. The privacy page and README name no company, address, governing law or authority. The GitHub profile of the maintainer says Seoul, South Korea
//   and the NomaDamas org says Korea, South, but a profile field is not a company HQ statement. Left unset for the owner to decide.
// - Windows installer is not code-signed (release notes). macOS: signed and notarized .dmg per CHANGELOG.
// Last upstream update: 2026-11-15 (last commit on main; GitHub pushed_at 2026-11-17; latest npm release 3.2.2 on 2026-11-07) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'cozyclay',
  name: 'CozyClay',
  categories: ['video-generation', 'mcp-servers-skills'],
  interfaces: ['web', 'desktop', 'cli'],
  locality: 'hybrid', // studio and motion compiler run locally in the browser; agent panel uses model providers; the final video comes from an external video model
  platforms: ['mac', 'win', 'linux', 'web'],
  worksWith: ['Claude Desktop', 'Claude Code', 'Cursor'], // MCP clients named on the maker's site and in the README
  engine: 'external', // agent models are external (ChatGPT sign-in or own API keys); no bundled language model
  license: 'AGPL-3.0', // GitHub API AGPL-3.0; LICENSING.md: AGPL-3.0-or-later (GPL-3.0-or-later before 2026-08-21)
  price: 'free', // free and open source; offer price 0 in the site's JSON-LD
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: false }, // README: no GPU, Python or model download needed; Node.js 22.19+ and a Chromium browser; no RAM figure published
  stars: 1948,
  addedDate: '2026-11-17',
  status: 'listed',
  uses: ['agent', 'image'],
  url: 'cozyclay.org',
  storeLinks: {
    github: 'https://github.com/HaD0Yun/CozyClay',
    web: 'https://cozyclay.org',
  },
  installEffort: 'installer',
  installOn: ['mac', 'win'],
  installEvidence: 'On 2026-11-17 cozyclay.org offered CozyClay.dmg for macOS (GitHub release macos-1.0.3 in HaD0Yun/cozyclay-releases, 2026-11-13) and CozyClay-Setup.exe for Windows (GitHub release windows-installer, 2026-11-12; not code-signed). Linux and the other route use npx cozyclay with Node.js 22.19+ (one command).',
  tagline: {
    en: 'Free, open-source 3D previs studio that runs in your browser: block a scene, pose characters, set the camera, then hand the shot to an AI video model, with an MCP server for Claude, Cursor and other agents.',
    de: 'Kostenloses Open-Source-3D-Previs-Studio im Browser: Szene blocken, Figuren posieren, Kamera setzen und den Shot an ein KI-Videomodell übergeben, mit MCP-Server für Claude, Cursor und andere Agenten.',
    fr: 'Studio de previs 3D gratuit et open source dans votre navigateur : blocage de scène, poses des personnages, caméra, puis envoi du plan à un modèle vidéo IA, avec un serveur MCP pour Claude, Cursor et d\'autres agents.',
    ja: 'ブラウザで動く無料のオープンソース3Dプリビズスタジオ。シーンの配置、キャラクターのポーズ、カメラ設定を行い、そのショットをAI動画モデルに渡せます。Claude、Cursorなどのエージェント向けMCPサーバー付き。',
    zh: '在浏览器中运行的免费开源 3D 预演工作室：布置场景、摆放角色姿势、设置镜头，再把镜头交给 AI 视频模型，并提供面向 Claude、Cursor 等智能体的 MCP 服务器。',
    es: 'Estudio de previs 3D gratuito y de código abierto que funciona en el navegador: bloquea la escena, posa a los personajes, coloca la cámara y pasa el plano a un modelo de vídeo con IA, con servidor MCP para Claude, Cursor y otros agentes.',
    pt: 'Estúdio de previs 3D gratuito e de código aberto que roda no navegador: bloqueie a cena, posicione personagens, ajuste a câmera e envie o plano a um modelo de vídeo com IA, com servidor MCP para Claude, Cursor e outros agentes.',
    ar: 'استوديو مجاني ومفتوح المصدر للمعاينة المسبقة ثلاثية الأبعاد يعمل في المتصفح: رتّب المشهد، وضع الشخصيات، حدّد الكاميرا، ثم مرّر اللقطة إلى نموذج فيديو بالذكاء الاصطناعي، مع خادم MCP لـ Claude وCursor ووكلاء آخرين.',
    ko: '브라우저에서 실행되는 무료 오픈소스 3D 프리비즈 스튜디오로, 장면 배치, 캐릭터 포즈, 카메라 설정 후 그 샷을 AI 영상 모델에 넘길 수 있으며 Claude, Cursor 등 에이전트용 MCP 서버를 제공합니다.',
  },
  reviewSlug: 'cozyclay-review',
  pqReview: {
    date: '2026-11-17',
    version: '3.2.2',
    versionSourceUrl: 'https://github.com/HaD0Yun/CozyClay/releases/tag/v3.2.2',
  },
  lastVerifiedDate: '2026-11-17',
  lastUpstreamUpdate: '2026-11-15', // last commit on main 2026-11-15T11:32Z (GitHub API, 2026-11-17; pushed_at 2026-11-17T11:06Z); npm latest 3.2.2 published 2026-11-07
  lastUpstreamUpdateSource: 'https://github.com/HaD0Yun/CozyClay (last commit on main 2026-11-15; latest release v3.2.2, 2026-11-07)',
}

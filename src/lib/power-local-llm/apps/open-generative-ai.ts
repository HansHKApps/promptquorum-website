// Local AI App Directory — Open Generative AI (maintainer Anil Matcha; hosted version and API gateway run by Muapi / Vadoo Internet Services Private Limited)
// Layer: desktop and web studio for image, video, lip-sync and audio generation; cloud models through the Muapi API, optional local engines.
// Added 2026-11-18 (localhosted rank 19). Not hands-on tested; no maker outreach, no founder-review badge.
// Sources read 2026-11-18: GitHub repo (gh api), README, package.json, releases v2.0.0 / v1.0.11 / v1.0.10, commits, muapi.ai/open-generative-ai,
// muapi.ai/about, muapi.ai/privacy (last updated June 9, 2026), muapi.ai/terms (last updated July 2, 2025), muapi.ai/pricing, third-party coverage (leads only).
// Notes:
// - License: MIT (GitHub API spdx MIT; package.json "license": "MIT"; LICENSE file "Copyright (c) 2026 Open Generative AI Contributors").
// - Stars: GitHub API 35241 on 2026-11-18.
// - Price 'freemium': the app is free and MIT; cloud generation is billed per generation by Muapi (pricing page "Pay Per Generation"); the optional local engine (sd.cpp) needs no API key.
//   No credit packages or free-credit amounts were readable, so none are stated.
// - locality 'hybrid': default model access is cloud via the Muapi API (README "Authentication uses the x-api-key header"); desktop-only local engines (sd.cpp bundled, Wan2GP user-installed).
// - engine 'both': bundled sd.cpp plus external Wan2GP / Muapi API.
// - hardware: no fixed floor; README gives per-engine notes (Z-Image 16 GB RAM recommended, Wan 2.1 1.3B ~8 GB VRAM, Wan2GP needs CUDA/ROCm), so variesByModel.
// - Install: v2.0.0 assets .dmg (arm64 + x64), .exe, .AppImage, .deb. README says the app is not notarized (macOS) and not code-signed (Windows) -> warnings; tier kept at installer.
// - HQ flag: none (owner decision 2026-11-18). muapi.ai/terms and /about put the operator (Vadoo Internet Services Private Limited) in Bangalore, India, but no primary page links the repository
//   owner to that company, so a flag on the tile would imply a country for the maintainer that no source states. The review still quotes the Muapi terms (Indian law) as a fact about the hosted service.
// - compare: only attributes the README states outright (Video Studio; Workflow Studio node-based builder). Inpainting, extensions, low-VRAM mode and a local API are not stated -> unset.
// - Muapi terms (prohibit nudity/sexually explicit content on the Muapi service) vs README "no content filters": both are quoted in the review; no claim about which applies is made.
// Last upstream update: 2026-11-16 (last code commit; a README-only commit followed on 2026-11-18; latest release v2.0.0 on 2026-05-23) -> NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'open-generative-ai',
  name: 'Open Generative AI',
  categories: ['image-generation', 'video-generation', 'avatars-lipsync'],
  interfaces: ['desktop', 'web'],
  locality: 'hybrid', // cloud models through the Muapi API by default; local engines (sd.cpp, Wan2GP) only in the desktop app
  platforms: ['mac', 'win', 'linux', 'web', 'selfhosted'],
  worksWith: ['Muapi', 'stable-diffusion.cpp', 'Wan2GP'],
  engine: 'both', // bundled sd.cpp engine plus external Wan2GP and the Muapi API
  license: 'MIT',
  price: 'freemium', // app is free; cloud generation is billed per generation by Muapi; the local sd.cpp engine needs no API key
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends on cloud vs local engine and model; README gives per-engine notes only
  stars: 35241,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['image', 'audio'],
  url: 'muapi.ai/open-generative-ai',
  storeLinks: {
    github: 'https://github.com/Anil-matcha/Open-Generative-AI',
    web: 'https://muapi.ai/open-generative-ai',
  },
  installEffort: 'installer',
  installOn: ['mac', 'win', 'linux'],
  installEvidence: 'On 2026-11-18 the GitHub Releases page (v2.0.0, 2026-05-23) listed Open.Generative.AI-2.0.0-arm64.dmg, Open.Generative.AI-2.0.0.dmg, Open.Generative.AI.Setup.2.0.0.exe, Open.Generative.AI-2.0.0.AppImage and open-generative-ai_2.0.0_amd64.deb. The README says the macOS build is not notarized and the Windows installer is not code-signed, so a first-launch warning appears. A hosted web version and a Docker Compose path also exist.',
  tagline: {
    en: 'Desktop and web studio for generating images, video, lip-sync and audio, with cloud models through the Muapi API and optional local engines in the desktop app.',
    de: 'Desktop- und Web-Studio zum Erzeugen von Bildern, Videos, Lippensynchronisation und Audio, mit Cloud-Modellen über die Muapi-API und optionalen lokalen Engines in der Desktop-App.',
    fr: 'Studio de bureau et web pour générer des images, des vidéos, de la synchronisation labiale et de l\'audio, avec des modèles cloud via l\'API Muapi et des moteurs locaux facultatifs dans l\'application de bureau.',
    ja: '画像・動画・リップシンク・音声を生成するデスクトップ／Webスタジオ。クラウドモデルはMuapi API経由で利用し、デスクトップアプリではローカルエンジンも任意で使えます。',
    zh: '用于生成图像、视频、口型同步和音频的桌面与网页工作室，云端模型通过 Muapi API 调用，桌面应用还可选用本地引擎。',
    es: 'Estudio de escritorio y web para generar imágenes, vídeo, sincronización labial y audio, con modelos en la nube a través de la API de Muapi y motores locales opcionales en la app de escritorio.',
    pt: 'Estúdio de desktop e web para gerar imagens, vídeo, sincronização labial e áudio, com modelos na nuvem pela API da Muapi e mecanismos locais opcionais no app de desktop.',
    ar: 'استوديو لسطح المكتب وللويب لتوليد الصور والفيديو ومزامنة الشفاه والصوت، مع نماذج سحابية عبر واجهة Muapi API ومحركات محلية اختيارية في تطبيق سطح المكتب.',
    ko: '이미지, 영상, 립싱크, 오디오를 생성하는 데스크톱·웹 스튜디오로, 클라우드 모델은 Muapi API를 통해 사용하고 데스크톱 앱에서는 로컬 엔진도 선택해 쓸 수 있습니다.',
  },
  // README (read 2026-11-18): "Video Studio" and a "Workflow Studio ... node-based editor"; other attributes not stated outright, so left unset
  compare: { videoGeneration: true, nodeWorkflow: true },
  reviewSlug: 'open-generative-ai-review',
  pqReview: {
    date: '2026-11-18',
    version: '2.0.0',
    versionSourceUrl: 'https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0',
  },
  verdict: 'Best for creators who want one open-source studio over many hosted image and video models, with a one-click desktop installer and optional local engines; limited by dependence on the paid Muapi API for most models, an unsigned installer, a hardware floor that depends on the local engine, and no PromptQuorum testing of output quality, speed or content-filter claims.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-16', // last code commit (GitHub API, 2026-11-18); README-only commit 2026-11-18; latest release v2.0.0 published 2026-05-23
  lastUpstreamUpdateSource: 'https://github.com/Anil-matcha/Open-Generative-AI/commits/main',
}

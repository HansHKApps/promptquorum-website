// Local AI App Directory — Asiden: AI desktop companion for Windows 11 (layer: desktop companion, Roleplay & companions)
// Added 2026-10-24 on the owner's request. Facts verified 2026-10-24 against asiden.ai (home page incl. download block and changelog,
// /pricing/ updated 2026-10-17, /system-requirements/ updated 2026-09-10, /how-it-works/, /privacy/ last updated 2026-10-08, /terms/ v2.11
// last updated 2026-10-17, /safety/), the direct installer at downloads.asiden.ai/Asiden-Setup.exe (HTTP HEAD: 4,089,671,512 bytes,
// Last-Modified Sun 18 Oct 2026 11:53:54 GMT) and the Steam store page (store.steampowered.com/app/5130370: "Coming soon", developer and
// publisher Asiden Labs LTD).
// Version note: the changelog renders "v0.32.2" directly followed by "18 October 2026"; a plain-text read shows "v0.32.218". That is the
// version v0.32.2 plus the day 18, not a version v0.32.218. The download block says "v0.32.2 · 4.09 GB", the installer date matches.
// Itch.io listing (daf1.itch.io/asiden) is linked from the site but sits behind a Cloudflare challenge, so it was NOT read.
// Company: Asiden Labs Ltd (England and Wales, company number 17312549); the site calls it "early-access software from a solo developer".
// Source repository: none; the Terms forbid reverse engineering, so the licence is recorded as closed source.
// Locality: hybrid. Local chat, memory, voice and screen vision run on the PC (Gemma model, 4-19 GB download on first run); optional
// managed cloud chat, voice, vision and video go through the maker's proxy (Azure UK South) to Venice AI/OpenRouter/ElevenLabs.
// Prices are USD on the maker's site (Polar is merchant of record); no per-storefront prices exist for the website edition.
// No maker comment has been received, so there is no `founder` block and no founderReviewedDate.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'asiden',
  name: 'Asiden',
  categories: ['roleplay-companions', 'personal-assistants'],
  interfaces: ['desktop'],
  locality: 'hybrid', // local chat/memory/voice/vision on the PC by default; optional managed cloud features send the needed data via the maker's proxy (privacy notice 2026-10-08)
  platforms: ['win'], // Windows 11 64-bit only; the site says no Windows 10, macOS, Linux, iOS or Android version
  worksWith: ['Gemma', 'Venice AI', 'OpenRouter', 'ElevenLabs', 'Live2D', 'VRM'], // local model family, cloud routes and model formats named on asiden.ai
  engine: 'builtin', // the app measures the GPU and installs one recommended Gemma model itself
  license: 'Closed source', // no repository; the Terms prohibit reverse engineering
  price: 'paid', // $10 once during early access; optional Plus $15/month and Premium $30/month for cloud features (pricing page, 2026-10-17)
  hardware: { ramGb: 16, vramGb: 8, cpuOnly: false }, // published minimum: 16 GB RAM, NVIDIA GPU with 8 GB VRAM, 25 GB free space; recommended 32 GB / 16 GB VRAM
  stars: null, // no public repository
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'audio'],
  url: 'asiden.ai',
  storeLinks: {
    web: 'https://asiden.ai',
  },
  installEffort: 'installer',
  installOn: ['win'],
  installEvidence: 'asiden.ai download block checked 2026-10-24: signed Windows installer Asiden-Setup.exe (v0.32.2, 4.09 GB, SHA-256 published), HTTP HEAD on downloads.asiden.ai confirmed 4,089,671,512 bytes, Last-Modified 2026-10-18; a paid licence key from the website is needed to activate, and the first run downloads a 4-19 GB model',
  tagline: {
    en: 'Windows 11 AI desktop companion with 3D and Live2D characters, memory and optional screen vision; runs locally on an NVIDIA GPU, with optional paid cloud AI',
    de: 'KI-Desktop-Begleiter für Windows 11 mit 3D- und Live2D-Figuren, Gedächtnis und optionalem Bildschirmverständnis; läuft lokal auf einer NVIDIA-GPU, optional mit kostenpflichtiger Cloud-KI',
    fr: "Compagnon IA de bureau pour Windows 11 avec personnages 3D et Live2D, mémoire et vision d'écran en option ; fonctionne en local sur une GPU NVIDIA, avec IA cloud payante en option",
    ja: '3D・Live2Dキャラクター、記憶、任意の画面認識を備えたWindows 11向けAIデスクトップコンパニオン。NVIDIA GPUでローカル動作し、有料のクラウドAIは任意',
    zh: '面向 Windows 11 的 AI 桌面陪伴应用，提供 3D 与 Live2D 角色、记忆和可选的屏幕视觉；可在 NVIDIA 显卡上本地运行，付费云端 AI 为可选项',
    es: 'Compañero de escritorio con IA para Windows 11, con personajes 3D y Live2D, memoria y visión de pantalla opcional; funciona en local con una GPU NVIDIA y ofrece IA en la nube de pago opcional',
    pt: 'Companheiro de desktop com IA para Windows 11, com personagens 3D e Live2D, memória e visão de tela opcional; roda localmente em uma GPU NVIDIA, com IA na nuvem paga opcional',
    ar: 'رفيق ذكاء اصطناعي لسطح مكتب Windows 11 بشخصيات ثلاثية الأبعاد وLive2D وذاكرة ورؤية اختيارية للشاشة؛ يعمل محليًا على بطاقة NVIDIA، مع ذكاء اصطناعي سحابي مدفوع اختياري',
    ko: '3D·Live2D 캐릭터, 기억, 선택형 화면 인식을 갖춘 Windows 11용 AI 데스크톱 컴패니언으로, NVIDIA GPU에서 로컬로 실행되며 유료 클라우드 AI는 선택 사항입니다',
  },
  // Comparison attributes (personal-assistants segment), read from asiden.ai on 2026-10-24; a missing key = not stated, never false.
  // localLlm = built-in local Gemma model; voice = local and optional cloud voice, voice input via microphone; memory = long-term
  // memory stored on the user's drive. Tool use / actions is not stated, so toolUse stays unset.
  compare: { localLlm: true, voice: true, memory: true },
  reviewSlug: 'asiden-review',
  pqReview: {
    date: '2026-10-24',
    version: '0.32.2', // asiden.ai download block and changelog, 18 October 2026
    versionSourceUrl: 'https://asiden.ai/#changelog',
  },
  verdict:
    'Best for: Windows 11 gamers and desktop users with an NVIDIA GPU (8 GB VRAM or more) who want a persistent companion with local chat and memory for a one-off $10. Limits: early-access software from a solo developer, closed source, NVIDIA-only local mode, a 4 GB installer plus a 4-19 GB model download, and cloud features that send data off the PC.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-18', // changelog v0.32.2, 18 October 2026; installer Last-Modified header 2026-10-18; read 2026-10-24
  lastUpstreamUpdateSource: 'https://asiden.ai/#changelog',
}

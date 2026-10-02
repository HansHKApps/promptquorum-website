// Local AI App Directory — PAIOS (layer: mobile / Android)
// Added 2026-10-02 from the Android app queue. Facts verified directly against
// github.com/Puzzaks/PAIOS (README, CHANGELOG, ROADMAP, releases, GitHub API) and the
// Google Play listing (page.puzzak.paios) — not TODO placeholders.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'paios',
  name: 'PAIOS',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['android'],
  worksWith: null,
  engine: 'builtin', // no model files of its own: inference runs on-device through Google's AICore system service (Gemini Nano), so no cloud or external backend is involved
  license: 'Unlicense', // per GitHub API (spdx_id: Unlicense) — a public-domain-style dedication
  price: 'free', // Play listing shows no in-app purchases or ads; the project roadmap lists monetization only as a future, unchecked item
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: false }, // per README: "requires a supported device with Google AI Core (e.g., Pixel 9/10 series)" — a device-support list, not a numeric RAM/VRAM floor, and no CPU-only statement is published — verified 2026-10-02
  stars: 168, // GitHub Puzzaks/PAIOS star count, verified via the GitHub API 2026-10-02
  addedDate: '2026-10-02',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'puzzak.page',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=page.puzzak.paios',
    github: 'https://github.com/Puzzaks/PAIOS',
    web: 'https://puzzak.page',
  },
  tagline: {
    en: 'Free, open-source Android chat client for Gemini Nano, running fully on-device',
    de: 'Kostenloser, quelloffener Android-Chat-Client für Gemini Nano, der vollständig auf dem Gerät läuft',
    fr: 'Client de chat Android gratuit et open source pour Gemini Nano, 100 % sur l’appareil',
    ja: 'Gemini Nanoをデバイス上だけで動かす、無料のオープンソースAndroidチャットクライアント',
    zh: '免费开源的Android聊天客户端，完全在设备端运行Gemini Nano',
    es: 'Cliente de chat Android gratuito y de código abierto para Gemini Nano, 100 % en el dispositivo',
    pt: 'Cliente de chat Android gratuito e de código aberto para o Gemini Nano, 100% no dispositivo',
    ar: 'عميل دردشة مجاني ومفتوح المصدر لنظام Android لتشغيل Gemini Nano بالكامل على الجهاز',
    ko: 'Gemini Nano를 기기 안에서만 실행하는 무료 오픈소스 Android 채팅 클라이언트',
  },
  reviewSlug: 'paios-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: {
    date: '2026-10-02', // 1.1.8 = latest GitHub release at that date, published 2026-04-21
    version: '1.1.8',
    versionSourceUrl: 'https://github.com/Puzzaks/PAIOS/releases',
  },
  // Comparison attributes: each value verified against the project's official README/ROADMAP on 2026-10-02; a missing key = not stated there, never false.
  // Only Gemini Nano via AICore is supported (no model import, no in-app model catalogue) and the interface is text-only, so those keys stay unset.
  compare: { offline: true },
  lastVerifiedDate: '2026-10-02',
}

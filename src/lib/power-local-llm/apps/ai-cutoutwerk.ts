// Local AI App Directory — AI CutoutWerk / AI CutoutCraft (layer: image editing)
// Added 2026-10-16 on Hans's request (no maker contact). Facts verified on 2026-10-16 against the App Store
// listings (de/us/jp/kr/br/fr/es storefronts + iTunes lookup API), the privacy policy at
// apps.h53d.xyz/apps/cutoutcraft/policy.html and the developer's product page. The app is listed as
// "AI CutoutWerk" on the German storefront and "AI CutoutCraft" on every other storefront checked; the
// developer's own site calls it "CutoutCraft". Not hands-on tested by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ai-cutoutwerk',
  name: 'AI CutoutWerk',
  categories: ['editing-upscaling'],
  interfaces: ['mobile', 'desktop'],
  locality: 'local', // developer states on-device CoreML processing, no uploads; App Store privacy label "no data collected" — attributed, not independently tested (2026-10-16)
  platforms: ['ios', 'mac'], // iPhone/iPad iOS 16+, Mac macOS 12+, Apple Vision visionOS 1.0+ per listing (visionOS has no OSKey)
  worksWith: null,
  engine: 'builtin', // ships its own CoreML segmentation model; no external runtime
  license: 'Closed source',
  price: 'freemium', // free download + in-app purchases (one-time unlocks, Pro Light/Pro Infinity) — listing 2026-10-16
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no RAM figure published; 101.7 MB download
  stars: null,
  addedDate: '2026-10-16',
  status: 'listed',
  uses: ['image'],
  url: 'apps.h53d.xyz/apps/cutoutcraft/detail.html', // developer's own product page (Wei Ai); no separate domain for the app
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/id6745748800',
    web: 'https://apps.h53d.xyz/apps/cutoutcraft/detail.html',
  },
  installEffort: 'installer',
  installEvidence: 'Free App Store download (iPhone/iPad/Mac/Apple Vision), version 1.1.0, 101.7 MB — App Store listing checked 2026-10-16',
  tagline: {
    en: 'Offline AI background remover and cutout composer for iPhone, iPad and Mac',
    de: 'Offline-KI-Freisteller und Collage-Editor für iPhone, iPad und Mac',
    fr: 'Détourage IA hors ligne et composition de découpes pour iPhone, iPad et Mac',
    ja: 'iPhone・iPad・Mac向けのオフラインAI切り抜き・合成アプリ',
    zh: '适用于iPhone、iPad和Mac的离线AI抠图与合成应用',
    es: 'Recorte de fondo con IA sin conexión y composición de recortes para iPhone, iPad y Mac',
    pt: 'Remoção de fundo com IA offline e composição de recortes para iPhone, iPad e Mac',
    ar: 'تطبيق إزالة خلفية الصور بالذكاء الاصطناعي دون اتصال وتركيب المقتطعات لأجهزة iPhone وiPad وMac',
    ko: 'iPhone, iPad, Mac용 오프라인 AI 배경 제거 및 컷아웃 합성 앱',
  },
  reviewSlug: 'ai-cutoutwerk-review', // dedicated PromptQuorum review
  verdict: 'A small Apple app that removes image backgrounds on-device and composes the cutouts — but it has had no update since 16 February 2026, so check that it still works on your OS before paying.',
  pqReview: {
    date: '2026-10-16',
    version: '1.1.0',
    versionSourceUrl: 'https://apps.apple.com/de/app/ai-cutoutwerk/id6745748800',
  },
  lastVerifiedDate: '2026-10-16',
  lastUpstreamUpdate: '2026-02-16', // iTunes lookup API currentVersionReleaseDate + App Store version history (1.1.0), read 2026-10-16
  lastUpstreamUpdateSource: 'https://apps.apple.com/de/app/ai-cutoutwerk/id6745748800',
}

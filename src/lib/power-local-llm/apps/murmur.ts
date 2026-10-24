// Local AI App Directory — Murmur: On-Device AI Music (layer: iPhone music generator, Music & audio)
// Added 2026-10-24. Facts verified 2026-10-24 against the App Store listing (apps.apple.com/us/app/id6776807467 and the iTunes
// lookup API: v2.2.5, currentVersionReleaseDate 2026-10-22, first release 2026-06-16, minimum OS 26.0, 75.9 MB, seller Konstantin
// Tabakov, free with one in-app purchase "Murmur Pro Lifetime Unlock"), murmurapps.com (feature list, FAQ, engines) and
// murmurapps.com/privacy (last updated 2026-10-16).
// Per-storefront Pro price (App Store listings, checked 2026-10-24): US $17.99, DE/ES/FR 19,99 EUR, JP JPY 3,000, KR KRW 29,000, BR R$ 79,90.
// Storefront titles differ: "Murmur: KI-Musik-Generator" (DE), "Murmur: AI作曲・BGMメーカー" (JP), "Murmur: AI 음악 작곡 & BGM" (KR),
// "Murmur: Música IA sem internet" (BR); US title "Murmur: On-Device AI Music".
// Source-code repo and licence: none found; the maker's site is hosted on GitHub Pages but no app repository is linked.
// Conflicts between sources, stated in the review rather than resolved: the site says the Orpheus engine needs iOS 18, the App Store
// lists iOS 26.0 as the minimum; the site describes an iPhone app while the listing also shows iPad, Mac (Apple silicon) and Vision.
// No `compare` block: the music-audio sub-category has no comparison segment defined yet in compare-schema.ts.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'murmur',
  name: 'Murmur',
  categories: ['music-audio'],
  interfaces: ['mobile'],
  locality: 'local', // maker: tracks are generated on the iPhone after a one-time model download; anonymous analytics and crash reports are sent unless switched off (privacy policy, 2026-10-16)
  platforms: ['ios'], // iPhone; the App Store listing also shows iPad, Apple-silicon Mac and Vision compatibility that the maker's site does not mention
  worksWith: ['Photos', 'Instagram', 'Final Cut Pro', 'Adobe Premiere', 'Unity'], // export targets named on murmurapps.com (WAV and video with new music)
  engine: 'builtin', // Orpheus (described as powered by Stability AI) and Google's Magenta RT (Live mode), per the maker
  license: 'Closed source', // no repository or licence text found
  price: 'freemium', // free with daily limits; Murmur Pro is a one-time Lifetime Unlock (US $17.99), no subscription
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no RAM requirement stated; model download about 2.1 GB (iPhone 15 Pro and newer) or 1.2 GB (older)
  stars: null, // no public repository
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['audio'],
  url: 'murmurapps.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/id6776807467',
    web: 'https://murmurapps.com',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6776807467 checked 2026-10-24: standard App Store install, no terminal step; v2.2.5 released 2026-10-22, 75.9 MB, iOS 26.0 or later, models download on first run (about 1.2-2.1 GB)',
  tagline: {
    en: 'iPhone app that composes instrumental, royalty-free music for photos, videos and games on the device, with a one-time Pro unlock instead of a subscription',
    de: 'iPhone-App, die instrumentale, lizenzfreie Musik für Fotos, Videos und Spiele direkt auf dem Gerät komponiert, mit einmaligem Pro-Kauf statt Abo',
    fr: "Application iPhone qui compose sur l'appareil une musique instrumentale libre de droits pour vos photos, vidéos et jeux, avec un achat Pro unique plutôt qu'un abonnement",
    ja: '写真・動画・ゲーム向けのインストゥルメンタルBGMを端末内で作曲するiPhoneアプリ。サブスクではなく買い切りのPro版を用意',
    zh: '在 iPhone 本机为照片、视频和游戏创作纯器乐免版税音乐的应用，采用一次性买断的 Pro 解锁而非订阅',
    es: 'App para iPhone que compone en el dispositivo música instrumental libre de derechos para fotos, vídeos y juegos, con una compra Pro única en lugar de suscripción',
    pt: 'App para iPhone que compõe no aparelho música instrumental livre de royalties para fotos, vídeos e jogos, com compra Pro única em vez de assinatura',
    ar: 'تطبيق iPhone يؤلّف على الجهاز موسيقى instrumental خالية من حقوق الملكية للصور ومقاطع الفيديو والألعاب، مع شراء Pro لمرة واحدة بدلًا من الاشتراك',
    ko: '사진·영상·게임에 쓸 연주곡 형태의 로열티 프리 음악을 기기에서 직접 작곡하는 iPhone 앱으로, 구독 대신 1회 구매 Pro를 제공합니다',
  },
  reviewSlug: 'murmur-review',
  pqReview: {
    date: '2026-10-24',
    version: '2.2.5',
    versionSourceUrl: 'https://apps.apple.com/us/app/id6776807467',
  },
  verdict: 'Best for creators who want fast, instrumental background tracks for clips from an iPhone and can try the free tier first; limited by closed source, a single independent developer, an iOS 26 minimum, a large first model download and music-quality and licensing claims PromptQuorum could not check.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-22', // App Store currentVersionReleaseDate 2026-10-22 (v2.2.5), read 2026-10-24
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/id6776807467',
}

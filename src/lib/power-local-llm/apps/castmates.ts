// Local AI App Directory — Castmates: AI Characters (layer: mobile / iOS)
// Added 2026-10-19 on request. Verified on 2026-10-19 against: the App Store listing and iTunes lookup record
// (id6785844694: seller Josip Markovic, v1.1.7 released 2026-10-19, first release 2026-07-06, iOS 17.0+, free with
// in-app purchases) and the product site get-castmates.com (pricing, on-device claim). No public source repository
// and no named model/runtime were found, so licence is recorded as closed source and `engine` as builtin.
// The App Store privacy label says "Data Not Collected"; the product site says the app sends anonymous aggregate
// usage stats (no message content). Both are developer self-reports — neither is independently verified.
// Age rating 18+ (character roleplay incl. romance genre).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'castmates',
  name: 'Castmates: AI Characters',
  categories: ['roleplay-companions'],
  interfaces: ['mobile'],
  locality: 'local', // developer states the AI runs on the iPhone after a one-time model download (~1.9 GB); works offline in airplane mode
  platforms: ['ios'], // iPhone and iPad, iOS/iPadOS 17.0+; the product site says iPhone only; no Android plans mentioned
  worksWith: null,
  engine: 'builtin', // bundles its own on-device model; the model and runtime are not named in any public source
  license: 'Closed source',
  price: 'freemium', // free download; free tier 30 messages/day and one custom character; Pro $6.99/month, $29.99/year, $44.99 lifetime (US store, 2026-10-19)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: false }, // no RAM figure published; the 1.1.6 notes say phones with 4 GB RAM or less get an explanation instead of the download
  stars: null,
  addedDate: '2026-10-19',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'get-castmates.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/castmates-ai-characters/id6785844694',
  },
  tagline: {
    en: 'Offline iPhone character chat with 32 ready-made characters, custom characters and no account',
    de: 'Offline-Charakter-Chat für das iPhone mit 32 fertigen Charakteren, eigenen Charakteren und ohne Konto',
    fr: 'Chat de personnages hors ligne pour iPhone avec 32 personnages prêts à l’emploi, personnages personnalisés et sans compte',
    ja: 'iPhone向けのオフライン・キャラクターチャット。32体の用意済みキャラクターとカスタムキャラクターに対応、アカウント不要',
    zh: 'iPhone 离线角色聊天应用，内置 32 个角色，支持自定义角色，无需账号',
    es: 'Chat de personajes sin conexión para iPhone con 32 personajes incluidos, personajes propios y sin cuenta',
    pt: 'Chat de personagens offline para iPhone com 32 personagens prontos, personagens próprios e sem conta',
    ar: 'دردشة شخصيات دون إنترنت لـ iPhone مع 32 شخصية جاهزة وشخصيات مخصصة ودون حساب',
    ko: 'iPhone용 오프라인 캐릭터 채팅 앱. 기본 캐릭터 32종과 커스텀 캐릭터를 제공하며 계정이 필요 없음',
  },
  // Comparison attributes: the roleplay segment only defines lorebooks / groupChats; neither is stated on the listing or site, so `compare` stays unset (not stated, never false).
  lastVerifiedDate: '2026-10-19',
  lastUpstreamUpdate: '2026-10-19', // App Store version 1.1.7, currentVersionReleaseDate via iTunes lookup 2026-10-19
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/castmates-ai-characters/id6785844694',
}

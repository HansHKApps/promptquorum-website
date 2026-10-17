// Local AI App Directory — HiWaifu: AI Character Chat (layer: mobile / iOS, roleplay & companions)
// Added 2026-10-17 on the owner's request. Facts verified on 2026-10-17 against the App Store listing (DE/US/FR/ES/JP/BR/KR/SA
// storefronts), the iTunes lookup record (id6447806780) and the privacy notice at api.hiwaifu.com/privacy.html. The product
// site hiwaifu.com answered our fetch with a Cloudflare challenge, so it was NOT read; its domain is taken from the listing's
// developer-website field (sellerUrl). No public source repository was found, so the licence is recorded as closed source.
// This is a CLOUD app: the listing does not say where the AI model runs, but community characters, synced long-term memory and
// ads all need a server, and the privacy notice names Google Cloud / Firebase. It is listed because the directory covers
// roleplay/companion apps and readers compare it with local alternatives — locality 'cloud' is the honest label.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'hiwaifu',
  name: 'HiWaifu',
  categories: ['roleplay-companions'],
  interfaces: ['mobile'],
  locality: 'cloud',
  platforms: ['ios'], // iPhone/iPad iOS 15+; the listing also shows Apple-silicon Mac ("not verified for macOS") and visionOS 1+. No Android build was verified.
  worksWith: null,
  engine: 'builtin', // self-contained app; the listing and privacy notice do not name the model or where it runs
  license: 'Closed source',
  price: 'freemium', // free download; in-app purchases (monthly plan, Premium+, season pass, energy/crystal packs) — DE storefront monthly 14,99 EUR, US $12.99, verified 2026-10-17
  hardware: null,
  stars: null,
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['chat'],
  url: 'hiwaifu.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/de/app/hiwaifu-ki-charakter-chat/id6447806780',
  },
  installEffort: 'installer',
  installOn: ['ios'],
  installEvidence: 'App Store listing id6447806780 (free download, iOS/iPadOS 15.0+, 178 MB), read 2026-10-17',
  tagline: {
    en: 'Cloud roleplay and character chat for iPhone and iPad with long-term memory, lorebooks and group chats (18+)',
    de: 'Cloud-Rollenspiel und Charakter-Chat für iPhone und iPad mit Langzeitgedächtnis, Lorebooks und Gruppenchats (ab 18)',
    fr: 'Jeu de rôle et chat de personnages dans le cloud pour iPhone et iPad, avec mémoire longue, lorebooks et discussions de groupe (18+)',
    ja: 'iPhone・iPad向けのクラウド型ロールプレイ／キャラクターチャット。長期記憶、ロアブック、グループチャット対応（18歳以上）',
    zh: 'iPhone/iPad云端角色扮演与角色聊天应用，支持长期记忆、Lorebook和群聊（18+）',
    es: 'Rol y chat de personajes en la nube para iPhone y iPad, con memoria a largo plazo, lorebooks y chats grupales (18+)',
    pt: 'Roleplay e chat de personagens na nuvem para iPhone e iPad, com memória de longo prazo, lorebooks e chats em grupo (18+)',
    ar: 'لعب أدوار ودردشة شخصيات سحابية لـ iPhone وiPad مع ذاكرة طويلة المدى وLorebook ودردشات جماعية (+18)',
    ko: 'iPhone·iPad용 클라우드 롤플레이·캐릭터 채팅 앱, 장기 기억·로어북·그룹 채팅 지원 (18세 이상)',
  },
  reviewSlug: 'hiwaifu-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: {
    date: '2026-10-17', // 3.10.1 = version on the App Store listing that day (released 2026-10-02)
    version: '3.10.1',
    versionSourceUrl: 'https://apps.apple.com/de/app/hiwaifu-ki-charakter-chat/id6447806780',
  },
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-02', // iTunes lookup currentVersionReleaseDate 2026-10-02T21:02:25Z (3.10.1), App Store version history, read 2026-10-17
  lastUpstreamUpdateSource: 'https://apps.apple.com/de/app/hiwaifu-ki-charakter-chat/id6447806780',
  verdict:
    'Best for: iPhone users who want a large community library of roleplay characters with long-term memory and are fine with a cloud app. Limits: not local or offline as far as the listing shows, 18+ content, and no stated model, training or storage policy for chats.',
}

// Local AI App Directory — Swerve: AI Chat & Stories (layer: mobile / iOS, roleplay)
// Added 2026-10-17 on the owner's request from the App Store listing id6754301136. Facts verified 2026-10-17
// against the App Store listing (de/us/fr/es/jp/br storefronts + iTunes lookup), getswerve.com, its privacy
// notice (last updated 2026-06-19) and its terms. The developer is MSPW Labs, Inc. (US). Neither the listing, the
// site nor the privacy notice says where the models run; the notice lists "AI platforms" and cloud computing as
// recipients and the app serves 500,000+ community characters, so locality is 'cloud'. Closed source, no repository.
// Android and web are waitlist-only on the site. The Android/web waitlists are not platforms yet.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'swerve-ai',
  name: 'Swerve: AI Chat & Stories',
  categories: ['roleplay-companions'],
  interfaces: ['mobile'],
  locality: 'cloud',
  platforms: ['ios'], // iPhone only, iOS 18.0+; getswerve.com lists Android and web as waitlist-only
  worksWith: null,
  engine: 'builtin',
  license: 'Proprietary',
  price: 'freemium', // free download; in-app purchases (Pro, Swerve Lite, gem packs) — verified 2026-10-17 on the US, DE, FR, ES, JP and BR storefronts
  hardware: null, // cloud service; no local hardware floor published
  stars: null, // closed source; no repository
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['chat'],
  url: 'getswerve.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/swerve-ai-chat/id6754301136',
    web: 'https://www.getswerve.com/',
  },
  installEffort: 'installer',
  installOn: ['ios'],
  installEvidence: 'App Store listing id6754301136: free iPhone app, 116.9 MB, iOS 18.0+, version 1.32.0; getswerve.com links the App Store build and offers Android/web only as waitlists. checked 2026-10-17',
  tagline: {
    en: 'Cloud AI story and character chat for iPhone with community characters, branching and pinned memory',
    de: 'Cloud-KI-Story- und Charakter-Chat für das iPhone mit Community-Charakteren, Verzweigungen und fixiertem Gedächtnis',
    fr: 'Chat d’histoires et de personnages IA dans le cloud pour iPhone, avec personnages communautaires, embranchements et mémoire épinglée',
    ja: 'iPhone向けのクラウド型AIストーリー＆キャラクターチャット。コミュニティキャラクター、分岐、固定メモリに対応',
    zh: '面向iPhone的云端AI故事与角色聊天应用，支持社区角色、剧情分支和固定记忆',
    es: 'Chat de historias y personajes con IA en la nube para iPhone, con personajes de la comunidad, ramificaciones y memoria fijada',
    pt: 'Chat de histórias e personagens com IA na nuvem para iPhone, com personagens da comunidade, ramificações e memória fixada',
    ar: 'دردشة قصص وشخصيات بالذكاء الاصطناعي عبر السحابة لجهاز iPhone مع شخصيات المجتمع والتفرّع والذاكرة المثبّتة',
    ko: 'iPhone용 클라우드 AI 스토리·캐릭터 채팅 앱, 커뮤니티 캐릭터·분기·고정 메모리 지원',
  },
  reviewSlug: 'swerve-ai-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: {
    date: '2026-10-17', // 1.32.0 = version shown on the App Store listing and iTunes lookup on that date (released 2026-10-07)
    version: '1.32.0',
    versionSourceUrl: 'https://apps.apple.com/us/app/swerve-ai-chat/id6754301136',
  },
  // Comparison attributes from the App Store description ("bring several characters into the same story"); lorebooks are not
  // stated (pinned memory is a different feature), so that key is left unset rather than false.
  compare: { groupChats: true },
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-07', // iTunes lookup currentVersionReleaseDate 2026-10-07T02:10:24Z (1.32.0), read 2026-10-17 — not stale
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/swerve-ai-chat/id6754301136',
}

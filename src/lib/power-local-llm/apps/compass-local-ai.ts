// Local AI App Directory — Compass - Local AI (layer: mobile / iPhone, iPad, Mac, Vision)
// Added 2026-10-26 on request (App Store id6760742955). Verified on 2026-10-26 against: the App Store listing (raw HTML, US storefront),
// the iTunes lookup API (US/DE/JP/KR/BR: free in all; seller "Shryas Bhurat"; v6.1 released 2026-08-20; first release 2026-03-29; 2.3 MB;
// iOS/iPadOS/macOS/visionOS 26.0+; English only; 4+), and the public repository github.com/CamouLabs/Compass (README incl. privacy policy,
// which the App Store privacy-policy link points to; copyright "© 2026 Camou Labs"; last push 2026-08-11; no LICENSE file, no Releases).
// LOCALITY = local: chat, OCR (Apple Vision) and conversation memory run on the device by default using Apple's Foundation Models
// (Apple Intelligence) with a lightweight fallback on other devices. The only network path is the OPTIONAL web search (off by default;
// the query text goes to DuckDuckGo or Brave). The App Store description says "no cloud transmission / no external servers" and does not
// mention web search; the README and the 6.0 release notes do.
// No separate developer website exists (the listing links none; the repo "homepage" is the App Store page), so `url` is the App Store
// listing and the repo is in storeLinks.github. The licence is recorded as "Not stated": source is public but has no LICENSE file.
// Not tested hands-on.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'compass-local-ai',
  name: 'Compass - Local AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local', // on-device by default; optional web search sends only the query text to DuckDuckGo/Brave when switched on
  platforms: ['ios', 'mac'], // iPhone/iPad (iOS/iPadOS 26.0+); Mac needs macOS 26 + M1 ("Designed for iPad"); visionOS 26 also listed
  worksWith: ['Apple Intelligence', 'DuckDuckGo', 'Brave Search'],
  engine: 'builtin', // Apple Foundation Models (system model) on Apple Intelligence devices; lightweight on-device fallback otherwise
  license: 'Not stated', // public GitHub source, but no LICENSE file; the App Store lists no licence
  price: 'free', // Free, no in-app purchases listed (US/DE/JP/KR/BR storefronts, read 2026-10-26)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: false }, // 2.3 MB app; uses the system model, so it needs an Apple Intelligence-capable device for the full feature set
  stars: null,
  addedDate: '2026-10-26',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'apps.apple.com/us/app/compass-local-ai/id6760742955', // no separate official website; the App Store listing is the official channel
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/compass-local-ai/id6760742955',
    github: 'https://github.com/CamouLabs/Compass',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6760742955 (free download, iOS/iPadOS/macOS/visionOS 26.0+, v6.1 released 2026-08-20); the repo has no Releases and its only other path is an Xcode build, read 2026-10-26',
  tagline: {
    en: 'Free iPhone chat app that answers on the device with Apple Intelligence, reads screenshots with on-device OCR and has optional web search',
    de: 'Kostenlose iPhone-Chat-App, die auf dem Gerät mit Apple Intelligence antwortet, Screenshots per OCR liest und optional im Web sucht',
    fr: 'Appli de chat gratuite pour iPhone qui répond sur l’appareil avec Apple Intelligence, lit les captures d’écran par OCR et propose une recherche web optionnelle',
    ja: 'Apple Intelligenceで端末内回答するiPhone向け無料チャットアプリ。スクリーンショットはOCRで読み取り、Web検索は任意',
    zh: '免费 iPhone 聊天应用：借助 Apple Intelligence 在设备上作答，通过设备端 OCR 读取截图，可选开启网页搜索',
    es: 'App de chat gratuita para iPhone que responde en el dispositivo con Apple Intelligence, lee capturas con OCR y ofrece búsqueda web opcional',
    pt: 'App de chat gratuito para iPhone que responde no aparelho com Apple Intelligence, lê capturas de tela por OCR e tem busca na web opcional',
    ar: 'تطبيق دردشة مجاني لـ iPhone يجيب على الجهاز عبر Apple Intelligence ويقرأ لقطات الشاشة بتقنية OCR مع بحث ويب اختياري',
    ko: 'Apple Intelligence로 기기에서 답하고 스크린샷을 OCR로 읽는 무료 iPhone 채팅 앱. 웹 검색은 선택 사항',
  },
  // Comparison attributes (mobile-chat segment), read 2026-10-26: offline (README: "always keeps working fully offline"; web search is
  // skipped with no network) and modelDownloads (none — the app is 2.3 MB and uses the system model). importModels and visionInput are not
  // stated (OCR reads text from images; it is not image understanding) and voice is not mentioned — left unset, never false.
  compare: { offline: true, modelDownloads: false },
  reviewSlug: 'compass-local-ai-review',
  pqReview: {
    date: '2026-10-26',
    version: '6.1',
    versionSourceUrl: 'https://apps.apple.com/us/app/compass-local-ai/id6760742955',
  },
  verdict: 'Worth a look for iPhone owners with an Apple Intelligence device who want a minimal, free, on-device chat app with public source code, if they accept a one-person project that has no licence file and is untested here.',
  lastVerifiedDate: '2026-10-26',
  lastUpstreamUpdate: '2026-08-20', // App Store version 6.1 (iTunes lookup currentVersionReleaseDate 2026-08-20T06:04:14Z); 67 days before 2026-10-26, so no stale warning yet
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/compass-local-ai/id6760742955',
}

// Local AI App Directory — fullmoon (layer: iPhone/iPad/Mac chat app, MLX)
// Added 2026-10-30. Facts verified 2026-10-30 against: fullmoon.app (feature list, model sizes, "open source", TestFlight link),
// the App Store listing (apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156 and the iTunes lookup API: v1.2.0,
// currentVersionReleaseDate 2025-01-28, first release 2025-01-13, minimum iOS 17.6, 30 MiB, English only, free, no in-app purchases listed,
// seller Mainframe Computer, Inc., rated 17+, US rating 4.4 from 114 ratings; free and same version on the DE/FR/ES/JP/KR/BR storefronts),
// fullmoon.app/privacy (effective 12/23/2024) and github.com/mainframecomputer/fullmoon-ios (MIT LICENSE, 2,269 stars, releases 1.2.1-1.2.3
// published 2025-01-22..27, last push 2025-05-05 = "add qwen3"; Models.swift lists Llama 3.2 1B/3B, DeepSeek-R1-Distill-Qwen-1.5B 4/8-bit, Qwen3 4B/8B 4-bit).
// Conflicts stated in the review rather than resolved: the site lists four models, the repository's main branch also lists Qwen3 4B and 8B (not
// confirmed in the App Store build, which predates it); the privacy policy says nothing is collected but also lists purposes for collected data.
// Last upstream update = newer of latest release (2025-01-27) and last push (2025-05-05) => stale ("dead" tier, > 180 days).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'fullmoon',
  name: 'fullmoon',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local', // maker: runs models on the device and works offline; chat history stored locally (README); the sources do not say where the model files are downloaded from
  platforms: ['ios', 'ipados', 'mac'], // site: iOS, iPadOS, macOS and visionOS; the App Store lists iPhone, iPad and Mac compatibility ("iosUniversal"), not stating whether the Mac build is native
  worksWith: ['MLX Swift', 'Hugging Face', 'Shortcuts'], // Apple's MLX Swift runs inference; model IDs in the repo point to mlx-community on Hugging Face; Shortcuts action per site
  engine: 'builtin', // MLX Swift
  license: 'MIT', // LICENSE file in the repository (the site says only "open source")
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated; model files 0.7-1.9 GB per the site (repo adds Qwen3 4B/8B)
  stars: 2269, // GitHub, 2026-10-30
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'fullmoon.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156',
    github: 'https://github.com/mainframecomputer/fullmoon-ios',
    web: 'https://fullmoon.app',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6727014156 checked 2026-10-30: standard App Store install, no terminal step; v1.2.0 released 2025-01-28, 30 MiB, iOS 17.6 or later, free; the site also offers a TestFlight link for newer builds',
  tagline: {
    en: 'Free, MIT-licensed chat app that runs small language models offline on iPhone, iPad and Mac with Apple MLX, with no release since early 2025',
    de: 'Kostenlose Chat-App unter MIT-Lizenz, die kleine Sprachmodelle offline auf iPhone, iPad und Mac mit Apple MLX ausführt, ohne Release seit Anfang 2025',
    fr: "Application de chat gratuite sous licence MIT qui exécute de petits modèles de langage hors ligne sur iPhone, iPad et Mac avec Apple MLX, sans nouvelle version depuis début 2025",
    ja: 'Apple MLXで小型言語モデルをiPhone・iPad・Macでオフライン実行する、MITライセンスの無料チャットアプリ。2025年初頭以降リリースなし',
    zh: '基于 Apple MLX、在 iPhone、iPad 和 Mac 上离线运行小型语言模型的免费 MIT 许可聊天应用，2025 年初以来未再发布新版本',
    es: 'App de chat gratuita con licencia MIT que ejecuta modelos de lenguaje pequeños sin conexión en iPhone, iPad y Mac con Apple MLX, sin versiones desde principios de 2025',
    pt: 'App de chat gratuito com licença MIT que executa modelos de linguagem pequenos offline no iPhone, iPad e Mac com Apple MLX, sem lançamentos desde o início de 2025',
    ar: 'تطبيق دردشة مجاني بترخيص MIT يشغّل نماذج لغوية صغيرة دون اتصال على iPhone وiPad وMac عبر Apple MLX، دون إصدار جديد منذ مطلع 2025',
    ko: 'Apple MLX로 iPhone·iPad·Mac에서 소형 언어 모델을 오프라인 실행하는 MIT 라이선스 무료 채팅 앱으로, 2025년 초 이후 릴리스가 없습니다',
  },
  // Comparison attributes (mobile chat segment), verified 2026-10-30 against fullmoon.app and the repository; a missing key = not stated there, never false.
  // offline = the site's "works fully offline"; modelDownloads = the in-app model list (Models.swift availableModels, sizes on the site).
  compare: { offline: true, modelDownloads: true },
  reviewSlug: 'fullmoon-review',
  pqReview: {
    date: '2026-10-30',
    version: '1.2.0',
    versionSourceUrl: 'https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156',
  },
  verdict: 'Best for people who want a free, open-source and very simple offline chat app for Apple devices and accept small models; limited by no release since January 2025 and no code change since May 2025, English-only listing, and a privacy policy that contradicts itself.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2025-05-05', // GitHub API: last push to main (add qwen3), newer than latest release 1.2.3 (2025-01-27) and App Store 1.2.0 (2025-01-28), read 2026-10-30
  lastUpstreamUpdateSource: 'https://github.com/mainframecomputer/fullmoon-ios',
}

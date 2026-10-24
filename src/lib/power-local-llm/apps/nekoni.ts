// Local AI App Directory — Nekoni (category: personal-assistants — self-hosted personal AI agent + iPhone/web companion)
// Added 2026-10-24 on the owner's request. Facts verified 2026-10-24 against nekoni.dev, github.com/nekonihq/nekoni (README, install.sh,
// docs/setup.md, docs/config.md, docs/security.md, docs/architecture.md, PRIVACY.md [last updated 2026-03-21], LICENSE [MIT, "Copyright (c) 2026 Nekoni"],
// GitHub API) and the App Store listing (apps.apple.com/us/app/nekoni/id6760954228 + iTunes lookup: v2.0, released 2026-04-06, free, iOS 15.1+,
// 47.9 MB, seller DENYS MALYKHIN, no ratings yet). No hands-on testing.
// Maker: nekoni.dev names no person. The App Store seller and the repo's commit author are both Denys Malykhin; his GitHub profile (github.com/malykhin,
// blog malykhin.dev) lists "nekoni.dev" and "Murmur: BLE shell + AI agent for headless Raspberry Pi". Nobody at Nekoni was contacted.
// NOT the same product as our `murmur` tile: that is the iPhone AI music app by Konstantin Tabakov (murmurapps.com). nekonihq also publishes a
// separate, unrelated repo called "murmur" (BLE shell + AI agent for a headless Raspberry Pi), which is not in the directory.
// Android: "coming soon" on the site; no Google Play listing was found. An official website exists, so `url` is the website and the repo is in storeLinks.github.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'nekoni',
  name: 'Nekoni',
  categories: ['personal-assistants'],
  interfaces: ['mobile', 'web'],
  locality: 'local', // inference runs in Ollama on the user's own machine; only WebRTC signalling (SDP/ICE) goes via the public signal.nekoni.dev (PRIVACY.md, docs/architecture.md)
  platforms: ['mac', 'linux', 'ios', 'web'], // agent: macOS or Linux (Windows via WSL2, README); iOS app on the App Store; hosted PWA at app.nekoni.dev; Android announced as coming soon
  worksWith: ['Ollama', 'ChromaDB', 'Docling', 'Docker'], // README / site; default model llama3.2 (docs/config.md)
  engine: 'external', // Ollama
  license: 'MIT', // LICENSE file + GitHub API spdx MIT, read 2026-10-24
  price: 'free', // App Store price 0.0 in the US, DE, JP, KR and BR storefronts (iTunes lookup 2026-10-24); repo is MIT, no paid tier mentioned
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // docs list only ~4 GB disk for the default model; no RAM/VRAM requirement stated
  stars: 16, // github.com/nekonihq/nekoni via GitHub API, read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'agent', 'phone'],
  url: 'nekoni.dev',
  storeLinks: {
    github: 'https://github.com/nekonihq/nekoni',
    appStore: 'https://apps.apple.com/us/app/nekoni/id6760954228',
    web: 'https://nekoni.dev',
  },
  installEffort: 'one-command', // see InstallEffortKey in ./types.ts
  installOn: ['mac', 'linux'],
  installEvidence: 'nekoni.dev and the README give one command, curl -sSL https://raw.githubusercontent.com/nekonihq/nekoni/refs/heads/main/install.sh | bash; install.sh installs git, Docker, uv and Ollama if missing, pulls llama3.2 (~4 GB) and starts the agent and dashboard (localhost:8080); macOS and Linux only (Windows via WSL2); the GitHub repo has one tagged release (v0.1.0) with no binary assets; the iOS companion is a normal App Store install but needs that agent; checked 2026-10-24',
  tagline: {
    en: 'Self-hosted personal AI agent on your own computer (Ollama, documents, scheduled skills) that you chat with from an iPhone or browser over a direct encrypted link',
    de: 'Selbst gehosteter persönlicher KI-Agent auf Ihrem eigenen Rechner (Ollama, Dokumente, geplante Skills), mit dem Sie per iPhone oder Browser über eine direkte verschlüsselte Verbindung chatten',
    fr: "Agent d'IA personnel auto-hébergé sur votre propre ordinateur (Ollama, documents, skills planifiés), avec lequel vous discutez depuis un iPhone ou un navigateur via une liaison chiffrée directe",
    ja: '自分のパソコンで動かすセルフホスト型のパーソナルAIエージェント（Ollama、ドキュメント、スケジュール実行のスキル）。iPhoneやブラウザから暗号化された直接接続でチャットできます',
    zh: '运行在自己电脑上的自托管个人 AI 智能体（Ollama、文档、定时技能），可通过 iPhone 或浏览器经加密的点对点连接与其对话',
    es: 'Agente de IA personal autoalojado en tu propio ordenador (Ollama, documentos, skills programadas) con el que chateas desde un iPhone o el navegador mediante un enlace cifrado directo',
    pt: 'Agente de IA pessoal auto-hospedado no seu próprio computador (Ollama, documentos, skills agendadas) com o qual você conversa pelo iPhone ou navegador por um link criptografado direto',
    ar: 'وكيل ذكاء اصطناعي شخصي مستضاف ذاتيًا على حاسوبك (Ollama ومستندات ومهارات مجدولة) تتحدث معه من iPhone أو المتصفح عبر اتصال مباشر مشفّر',
    ko: '내 컴퓨터에서 직접 운영하는 셀프 호스팅 개인 AI 에이전트(Ollama, 문서, 예약 스킬)로, iPhone이나 브라우저에서 암호화된 직접 연결로 대화합니다',
  },
  reviewSlug: 'nekoni-review',
  // Comparison attributes (personal-assistants segment): localLlm (Ollama) and toolUse (Python tools, skills) are stated by the README/site;
  // voice and memory are not stated as features (chat history and a document knowledge base exist, but no persistent-memory feature), so they stay unset.
  compare: { localLlm: true, toolUse: true },
  pqReview: {
    date: '2026-10-24',
    version: '2.0',
    versionSourceUrl: 'https://apps.apple.com/us/app/nekoni/id6760954228',
  },
  verdict: 'Best for self-hosters comfortable with a one-line terminal install, Docker and Ollama who want a private agent they can reach from an iPhone; limited by a young one-person project whose only tagged release is from March 2026, an iPhone-only mobile client (Android announced), a dependency on a public signalling server and privacy claims that rest on the maker\'s own statements.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-24', // GitHub API: last push to main 2026-10-24T03:42:24Z (newer than the only tagged release v0.1.0, 2026-03-27, and the iOS app 2.0 of 2026-04-06), read 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/nekonihq/nekoni',
}

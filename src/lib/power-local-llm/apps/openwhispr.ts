// Local AI App Directory — OpenWhispr: open-source dictation and meeting-notes app (layer: desktop + iPhone dictation app, speech-to-text)
// Added 2026-10-24. Facts verified 2026-10-24 against openwhispr.com (home, /pricing, /privacy last updated 2026-10-12), the GitHub repo
// OpenWhispr/openwhispr (README, MIT licence, GitHub API: default-branch commits, Releases), docs.openwhispr.com (local models, system
// requirements) and the App Store listing id6763804420 (iTunes lookup: v1.2.4, released 2026-10-23, free in US/DE/FR/ES/BR/JP/KR, iOS 17.0+).
// Latest desktop release v1.10.4 published 2026-10-22; newest default-branch commit 2026-10-23 ("fix(sync): move folder chats with their destination space (#2827)").
// Release assets seen on v1.10.4: OpenWhispr-1.10.4.dmg (x64), OpenWhispr-1.10.4-arm64.dmg, OpenWhispr-Setup-1.10.4.exe, .AppImage, .deb, .rpm, linux-x64.tar.gz.
// Homebrew cask exists but is community-maintained per the README. Local engines: whisper.cpp (Whisper) and sherpa-onnx (Orukeet, Parakeet, Nemotron, Cohere Transcribe).
// Paid plans are priced in USD only on the pricing page (Pro $80/user/year, Business $160/user/year, billed annually); no per-storefront web prices exist.
// README says "no telemetry" while the privacy policy lists analytics/attribution/purchase SDKs in the mobile app and website analytics; the review states both.
// Compliance badges (HIPAA, ISO 27001, SOC 2 Type II, GDPR) are on the website only; not verified. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openwhispr',
  name: 'OpenWhispr',
  categories: ['speech-to-text'],
  interfaces: ['desktop', 'mobile'],
  locality: 'hybrid', // user chooses per mode: on-device models (no audio transmitted per the privacy policy), own API key, or OpenWhispr Cloud (audio sent to its API/providers, not stored)
  platforms: ['mac', 'win', 'linux', 'ios'],
  worksWith: ['Whisper', 'Parakeet', 'Zoom', 'Microsoft Teams', 'FaceTime', 'Google Calendar', 'Homebrew'], // Homebrew cask is community-maintained
  engine: 'builtin', // bundles whisper.cpp and sherpa-onnx runtimes with downloadable models
  license: 'MIT',
  price: 'freemium', // unlimited local dictation free; cloud transcription, longer meetings and team features on paid plans (USD only)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated; Metal/CUDA/Vulkan acceleration optional, CPU fallback
  stars: 9868, // GitHub API read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['audio'],
  url: 'openwhispr.com',
  storeLinks: {
    github: 'https://github.com/OpenWhispr/openwhispr',
    appStore: 'https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420',
    web: 'https://openwhispr.com',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v1.10.4 (2026-10-22) checked 2026-10-24: OpenWhispr-1.10.4.dmg, OpenWhispr-1.10.4-arm64.dmg, OpenWhispr-Setup-1.10.4.exe, .AppImage, .deb, .rpm and .tar.gz assets; the website has a download page; iOS app on the App Store (id6763804420, v1.2.4); README also lists a community-maintained Homebrew cask',
  tagline: {
    en: 'MIT-licensed dictation and meeting-notes app for desktop and iPhone that transcribes with local Whisper or Parakeet models or with a cloud provider you choose',
    de: 'Diktier- und Meeting-Notizen-App unter MIT-Lizenz für Desktop und iPhone, die mit lokalen Whisper- oder Parakeet-Modellen oder einem Cloud-Anbieter Ihrer Wahl transkribiert',
    fr: 'Appli de dictée et de notes de réunion sous licence MIT pour ordinateur et iPhone, qui transcrit avec des modèles Whisper ou Parakeet locaux ou un prestataire cloud de votre choix',
    ja: 'ローカルのWhisperやParakeetモデル、または選んだクラウドプロバイダーで文字起こしする、デスクトップとiPhone向けのMITライセンスの音声入力・会議メモアプリ',
    zh: '采用 MIT 许可证的桌面和 iPhone 听写与会议笔记应用，可用本地 Whisper 或 Parakeet 模型，或你选定的云端服务商转写',
    es: 'App de dictado y notas de reuniones con licencia MIT para escritorio e iPhone que transcribe con modelos Whisper o Parakeet locales o con un proveedor en la nube que elijas',
    pt: 'App de ditado e notas de reuniões com licença MIT para desktop e iPhone que transcreve com modelos Whisper ou Parakeet locais ou com um provedor de nuvem à sua escolha',
    ar: 'تطبيق إملاء وملاحظات اجتماعات بترخيص MIT لسطح المكتب وiPhone ينسخ الكلام بنماذج Whisper أو Parakeet المحلية أو بمزوّد سحابي تختاره',
    ko: '로컬 Whisper·Parakeet 모델이나 직접 고른 클라우드 제공업체로 받아쓰는 데스크톱·iPhone용 MIT 라이선스 받아쓰기·회의 노트 앱',
  },
  compare: { languages: 100, realtime: true, speakerLabels: true, cpuUsable: true }, // website: 100+ languages (not verified); docs: Nemotron streaming models, local speaker labels, Parakeet INT8 CPU inference; read 2026-10-24
  reviewSlug: 'openwhispr-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.10.4',
    versionSourceUrl: 'https://github.com/OpenWhispr/openwhispr/releases/latest',
  },
  verdict: 'Best for people who want one open-source app for dictation and meeting notes and will stay on local models when privacy matters; limited by cloud services and analytics that come with the paid plans and the mobile app, an Intel-Mac speaker-labelling gap, and accuracy, speed and compliance badges PromptQuorum could not check.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-23', // newest default-branch commit (GitHub API, read 2026-10-24); latest release v1.10.4 published 2026-10-22
  lastUpstreamUpdateSource: 'https://github.com/OpenWhispr/openwhispr/commits/main',
}

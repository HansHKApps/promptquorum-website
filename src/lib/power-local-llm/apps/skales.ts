// Local AI App Directory — Skales by Mario Simic (sole proprietorship, Vienna, Austria) (layer: personal AI agent harness for desktop and phone)
// Added 2026-11-17 from the owner's request (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-17: skales.app (home, /download, /models, /mobile, /business, /compare, /licence, /privacy, /imprint), github.com/skalesapp/skales
// (README, GitHub API repo + releases, updates/latest.json), App Store listing title.
// Notes:
// - License: proprietary. The Skales End User Licence Agreement v1.3 (2026-11-09) says "not open source and not source-available". Free for private use, education,
//   freelancers and businesses of up to two people; larger teams need a written licence (30-day evaluation). Releases up to 12.9.27 were under the Business Source Licence 1.1.
//   The GitHub repository is a distribution repo (releases, changelog, install guides, issues); the source snapshot was removed at 12.9.30.
// - Stars: GitHub API 2241 on 2026-11-17 (the homepage shows 2,231).
// - Version 12.9.65: latest GitHub release (published 2026-11-10); skales.app/updates/latest.json says 12.9.65 dated 2026-11-09. The homepage still shows older strings (12.9.60 / 12.9.50).
// - Maker figures differ: providers 29 (site) vs 26 (repo description) vs 15+ (README); tools 400+ (site) vs 260+ (README architecture table). The review says so instead of picking one.
// - Install: per-OS installers on the download page and the release assets; Windows EXE not code-signed (maker statement), macOS DMG signed and notarized (maker statement, not verified).
// - HQ country AT: the imprint (skales.app/imprint) names Mario Simic, trading as Skales, Zachgasse 10/8, 1220 Vienna, Austria; the privacy notice names the same controller.
// - hardware.ramGb stays null: the download page states about 300 MB in normal operation and no GPU for the app itself; real needs depend on the model used (Skales Local or a connected provider).
// Last upstream update: 2026-11-10 (latest release v12.9.65; last push the same day) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'skales',
  name: 'Skales',
  categories: ['personal-assistants', 'autonomous-agents', 'computer-browser-agents', 'code-assistants-ide-plugins'],
  interfaces: ['desktop', 'mobile'],
  locality: 'hybrid', // conversations, memory and files stay on the device; the default providers (Claude, GPT, Gemini, Skales IQ) are cloud; Skales Local, Ollama and LM Studio run models on the machine
  platforms: ['mac', 'win', 'linux', 'ios', 'android'],
  worksWith: ['Claude', 'Ollama', 'LM Studio', 'OpenRouter'], // providers named on skales.app/models and the README
  engine: 'both', // ships its own inference server (Skales Local) and also drives external providers and endpoints
  license: 'Proprietary (Skales End User Licence Agreement v1.3; free for private use, education and businesses of up to two people)',
  price: 'free', // free for private use, education and businesses of up to two people; larger teams need a written licence (price not published); model usage is the user's own key or plan
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // download page: about 300 MB in normal operation, no GPU for the app; model needs vary
  stars: 2241, // GitHub API 2026-11-17
  addedDate: '2026-11-17',
  status: 'listed',
  uses: ['agent', 'chat', 'code'],
  url: 'skales.app',
  storeLinks: {
    web: 'https://skales.app',
    github: 'https://github.com/skalesapp/skales',
    appStore: 'https://apps.apple.com/us/app/skales/id6763328966',
    googlePlay: 'https://play.google.com/store/apps/details?id=app.skales.mobile',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-17 the download page offered a Windows x64 EXE, macOS Apple Silicon and Intel DMGs, a Linux .deb and an AppImage, plus Google Play and App Store apps. GitHub release v12.9.65 lists Skales-Setup-12.9.65.exe, Skales-Setup-12.9.65-arm64.exe, Skales-12.9.65-arm64.dmg, Skales-12.9.65-x64.dmg, Skales-12.9.65-amd64.deb and Skales-12.9.65-x86_64.AppImage. The maker says the Windows build is not code-signed yet. Installers not run.',
  tagline: {
    en: 'Desktop and phone AI agent that works through goals, coding, voice and browser tasks, using your own provider key, a free trial model or models on your machine.',
    de: 'KI-Agent für Desktop und Smartphone, der Ziele, Programmieraufgaben, Sprache und Browser-Aufgaben abarbeitet, mit eigenem Anbieter-Schlüssel, einem kostenlosen Testmodell oder Modellen auf Ihrem Rechner.',
    fr: 'Agent IA pour ordinateur et téléphone qui traite des objectifs, du code, de la voix et des tâches de navigateur, avec votre propre clé de fournisseur, un modèle d\'essai gratuit ou des modèles sur votre machine.',
    ja: 'ゴール、コーディング、音声、ブラウザ操作をこなすデスクトップ／スマートフォン用AIエージェント。自分のプロバイダーキー、無料の試用モデル、手元のマシン上のモデルを使えます。',
    zh: '桌面和手机端 AI 智能体，可处理目标任务、编程、语音和浏览器任务，可使用你自己的服务商密钥、免费试用模型或本机上的模型。',
    es: 'Agente de IA para escritorio y móvil que trabaja con objetivos, programación, voz y tareas de navegador, con tu propia clave de proveedor, un modelo de prueba gratuito o modelos en tu equipo.',
    pt: 'Agente de IA para desktop e celular que trabalha com metas, programação, voz e tarefas de navegador, usando sua própria chave de provedor, um modelo de teste gratuito ou modelos no seu computador.',
    ar: 'وكيل ذكاء اصطناعي لسطح المكتب والهاتف ينفّذ الأهداف والبرمجة والصوت ومهام المتصفح، باستخدام مفتاح مزوّدك الخاص أو نموذج تجريبي مجاني أو نماذج على جهازك.',
    ko: '목표 처리, 코딩, 음성, 브라우저 작업을 수행하는 데스크톱·휴대폰용 AI 에이전트로, 자신의 제공업체 키, 무료 체험 모델 또는 내 컴퓨터의 모델을 사용할 수 있습니다.',
  },
  compare: { localLlm: true, ollama: true, webBrowsing: true, memory: true }, // skales.app/models, README providers table, home page (browsing, memory); verified 2026-11-17, not tested
  reviewSlug: 'skales-review',
  pqReview: {
    date: '2026-11-17',
    version: '12.9.65',
    versionSourceUrl: 'https://github.com/skalesapp/skales/releases/tag/v12.9.65',
  },
  hqCountry: 'AT',
  hqCountrySource: 'https://skales.app/imprint/', // Mario Simic, trading as Skales, Zachgasse 10/8, 1220 Vienna, Austria
  lastVerifiedDate: '2026-11-17',
  lastUpstreamUpdate: '2026-11-10', // GitHub API 2026-11-17: latest release v12.9.65 published 2026-11-10T06:00Z; pushed_at 2026-11-10T06:00Z
  lastUpstreamUpdateSource: 'https://github.com/skalesapp/skales/releases/tag/v12.9.65',
}

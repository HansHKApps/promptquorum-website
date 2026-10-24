// Local AI App Directory — Coil (categories: autonomous-agents; layer: local agent harness for Mac)
// Added 2026-10-24 on the owner's request. No maker outreach — independent PromptQuorum entry, no hands-on testing.
// Verified on 2026-10-24 against: the official page ohmslaw.net/apps/coil (maker brand Silo Systems; App Store seller
// "Omar Quddusi", copyright Silo Systems), its privacy policy ohmslaw.net/apps/coil/privacy (v1.2, effective 2026-09-23),
// its support page ohmslaw.net/apps/coil/support and the Mac App Store listing apps.apple.com/us/app/id6788070684
// ("Coil - Local AI Harness", version 1.16.0, 14.6 MB, macOS 14.0+, Apple silicon with 16 GB unified memory or more, 36 GB
// recommended for the strong-worker tier, rated 4+, "Data Not Collected" per the developer, not enough ratings to show).
// Per-storefront price (checked 2026-10-24): US $14.99, DE/FR/ES 17,99 EUR, JP 2,500 JPY, BR R$ 99,90, KR 25,000 KRW.
// The App Store shows version dates without a year ("1.16.0, 3d ago", 1.15.0 "Sep 22"); 1.16.0 is therefore dated 2026-10-20.
// No source repository was found and the license is not stated. Same maker also sells Matadoor (apps.apple.com/app/id6784506051), not listed here.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'coil',
  name: 'Coil',
  categories: ['autonomous-agents'],
  interfaces: ['desktop'],
  locality: 'local', // on-device by default; optional Bring Your Own Key (OpenAI, Anthropic, Gemini, OpenRouter) is off by default and sends turns to the chosen provider
  platforms: ['mac'], // Mac only, macOS 14+, Apple silicon
  worksWith: ['Ollama', 'Hugging Face', 'OpenAI', 'Anthropic', 'Gemini', 'OpenRouter'], // Ollama and the four cloud providers are the optional Bring Your Own Key targets; weights come from Hugging Face
  engine: 'builtin', // privacy policy: "a bundled local runtime and locally stored open-weights models"
  license: 'Closed source', // none stated on the site or the listing
  price: 'paid', // $14.99 one-time, no subscription, no in-app purchases
  hardware: { ramGb: 16, vramGb: null, cpuOnly: null, variesByModel: true }, // App Store: Apple silicon with 16 GB unified memory or more, 36 GB recommended for the strong-worker tier
  stars: null, // no public repository
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['agent', 'code', 'chat'],
  url: 'ohmslaw.net/apps/coil',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/id6788070684',
    web: 'https://ohmslaw.net/apps/coil',
  },
  installEffort: 'installer',
  installEvidence:
    'Mac App Store listing id6788070684 and ohmslaw.net/apps/coil checked 2026-10-24: standard App Store purchase and install, no terminal step; v1.16.0, macOS 14.0+, Apple silicon; chat-model weights (and an embedding model on first launch) are a separate consent-gated download.',
  tagline: {
    en: 'Mac agent harness that routes each turn between a fast router and a stronger worker model on-device, with routing receipts and approval-gated workspace tools',
    de: 'Agent-Harness für den Mac, das jede Anfrage auf dem Gerät zwischen einem schnellen Router und einem stärkeren Worker-Modell verteilt, mit Routing-Belegen und freigabepflichtigen Workspace-Werkzeugen',
    fr: "Harnais d'agent pour Mac qui répartit chaque tour, sur l'appareil, entre un routeur rapide et un modèle plus puissant, avec reçus de routage et outils d'espace de travail soumis à approbation",
    ja: '各ターンを高速なルーターと強力なワーカーモデルに端末上で振り分けるMac向けエージェントハーネス。ルーティングレシートと承認制のワークスペースツール付き',
    zh: '适用于 Mac 的智能体框架，在设备上将每一轮对话分配给快速路由模型或更强的工作模型，附带路由回执和需审批的工作区工具',
    es: 'Arnés de agentes para Mac que reparte cada turno en el dispositivo entre un enrutador rápido y un modelo más potente, con recibos de enrutamiento y herramientas de espacio de trabajo con aprobación',
    pt: 'Harness de agente para Mac que distribui cada turno no dispositivo entre um roteador rápido e um modelo mais forte, com recibos de roteamento e ferramentas de workspace com aprovação',
    ar: 'إطار وكيل لنظام Mac يوزّع كل جولة على الجهاز بين موجّه سريع ونموذج عامل أقوى، مع إيصالات توجيه وأدوات مساحة عمل تتطلب الموافقة',
    ko: '각 턴을 기기 안에서 빠른 라우터와 더 강력한 워커 모델로 나누어 처리하는 Mac용 에이전트 하니스. 라우팅 영수증과 승인 방식의 작업 공간 도구 제공',
  },
  // Each value taken from ohmslaw.net/apps/coil, its privacy policy and the App Store description on 2026-10-24; a missing key = not stated, never false.
  // ollama: the privacy policy names Ollama on the user's own machine as an option for keeping Bring Your Own Key requests on the local network.
  // memory: searchable, pinnable, deletable local memory store. codeExecution stays unset: tools are Read, Write, Edit and a read-only bounded shell, and the page says it does not run unrestricted shell commands.
  compare: { localLlm: true, ollama: true, memory: true },
  reviewSlug: 'coil-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.16.0',
    versionSourceUrl: 'https://apps.apple.com/us/app/id6788070684',
  },
  verdict:
    'Best for Mac users with 16 GB or more of unified memory who want an on-device agent that shows which model answered and asks before touching files in one chosen folder; limited by Mac-only availability, a $14.99 price with no trial mentioned, closed source, a young listing with no public ratings and privacy and routing claims that rest on the developer\'s own pages.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-20', // App Store version history: 1.16.0 shown as "3d ago" on 2026-10-24 (the listing shows "3d ago"; its datetime attribute is 2026-10-20)
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/id6788070684',
}

// Local AI App Directory — Open Paper (layer: hosted AI research-paper reading, annotation, and
// literature-review workspace; open-source codebase, cloud-only AI, not self-hosting-optimized)
// Added 2026-11-18 at the owner's request. No maker outreach — independent PromptQuorum entry; no
// founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18:
// - openpaper.ai (homepage: nav only shows Home/Library/Projects/Ask/Discover/Sign In — the product
//   itself is behind sign-in, so feature detail comes from the marketing pages below, not the app shell);
// - openpaper.ai/pricing (three tiers — Base: $0/month; Researcher: $12/month, marked "Recommended";
//   Teams: price "TBD," listed as "Coming Soon." Per-tier limits: paper uploads 10 / 500 / unlimited;
//   knowledge-base size 200 MB / 3 GB / 50 GB; chat credits per week 5,000 / 150,000 / unlimited; audio
//   overviews per week 5 / 100 / unlimited; projects 2 / 100 / 500 ["Coming Soon" on Base]; data tables
//   2 / 50 / 100; annotations listed with no stated per-tier limit. No AI model/provider named on this page);
// - openpaper.ai/privacy (operator named as "Khoj Inc.", address "1111B S Governors Ave #6322, Dover, DE
//   19904" [United States]; states "we transfer the data to the United States and process it there"; no
//   governing-law clause found. A separate /terms page returned 404 at the time of this check);
// - github.com/khoj-ai/openpaper (About: "Open Paper is a workbench for managing your research library.
//   Read, annotate, and understand your papers all in one place. Use an AI assistant to conduct your
//   literature review." License: AGPL-3.0. 524 stars, 78 forks, 2 open issues, checked 2026-11-18. README
//   describes: upload/annotate papers with an AI assistant that answers with clickable citations; project
//   organization for cross-paper questions; data-table extraction with custom schemas, exported to CSV;
//   open-access paper discovery/search; Zotero import and library sync; audio overviews of papers. Repo
//   layout: Next.js client/, FastAPI server/, and a Celery jobs/ worker, with Docker Compose files. README
//   states the project "isn't optimized for self-hosting" and is built primarily as a hosted service,
//   pointing to DEVELOPMENT.md for setup);
// - api.github.com/repos/khoj-ai/openpaper (pushed_at 2026-10-31T06:05:06Z; license.spdx_id "AGPL-3.0";
//   no Releases, no Tags);
// - api.github.com/repos/khoj-ai/openpaper/commits/master (latest commit cad4a819, authored
//   2026-10-30T17:19:58Z, "index zotero imports so agent search can find them");
// - raw DEVELOPMENT.md on github.com/khoj-ai/openpaper (the "Required for a minimal local stack" table
//   lists only cloud LLM API keys — `GEMINI_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY` — plus
//   Postgres, S3-compatible storage, Celery/Redis, Google OAuth, and domain settings; it states "every
//   provider initializes at startup" so all three keys are needed regardless of which model is actually
//   used; Ollama and local-model inference are NOT mentioned anywhere in this file);
// - client/package.json and server/pyproject.toml on github.com/khoj-ai/openpaper (both report
//   `"version": "0.1.0"` / `version = "0.1.0"`, checked 2026-11-18 — no GitHub Release or tag exists, so
//   this is the only version signal found);
// - openpaper.ai/about (team: started by Saba Imran and Debanjum, who also built Khoj, an open-source
//   ChatGPT alternative; states the code is public on GitHub, the product is offered as a hosted service
//   at openpaper.ai, and the team has chosen not to focus on self-hosting; first version launched June 2025).
// Notes:
// - License: AGPL-3.0, confirmed via the GitHub repository's license field, checked 2026-11-18.
// - locality 'cloud': Open Paper is built and marketed as a hosted service (openpaper.ai), and every AI
//   feature runs on cloud providers (Gemini, OpenAI, Anthropic) per DEVELOPMENT.md — no Ollama/local-model
//   path is documented anywhere checked. The source is open (AGPL-3.0) and the README describes a
//   Docker-Compose self-hosting path, but the project explicitly states it "isn't optimized for
//   self-hosting," so 'cloud' (not 'hybrid') reflects how the product is actually used.
// - engine 'external': Open Paper runs no inference of its own; the server calls Gemini, OpenAI, and
//   Anthropic APIs via keys configured at startup.
// - price 'freemium': Base tier is $0/month with real feature access (paper uploads, chat credits, audio
//   overviews); Researcher is $12/month; Teams is announced but unpriced ("TBD") and marked "Coming Soon,"
//   per openpaper.ai/pricing, checked 2026-11-18.
// - worksWith: left null — DEVELOPMENT.md documents only cloud LLM provider keys (Gemini, OpenAI,
//   Anthropic) that the server itself calls; there is no local inference server or third-party app
//   integration named besides Zotero (captured in the review body, not this field, since it is a library
//   import/sync feature rather than a local-AI backend).
// - hardware: null — Open Paper is a hosted web app; a user's own device never runs model inference.
// - interfaces/platforms: web only. The homepage nav (Library/Projects/Ask/Discover) and every page
//   checked show no desktop, mobile, or CLI client — 'web' only, checked 2026-11-18.
// - installEffort 'hosted': openpaper.ai requires no download — sign in and use it in a browser, per the
//   homepage, checked 2026-11-18. The AGPL-3.0 source on GitHub is a `terminal-setup` self-hosting path
//   (Docker Compose, Postgres, S3-compatible storage, three cloud LLM keys, per DEVELOPMENT.md) that the
//   project itself says is not the optimized or primary path — tile tier reflects the easiest path a
//   newcomer is pointed to, the hosted web app.
// - hqCountry 'US': openpaper.ai/privacy names the operator "Khoj Inc." with a Dover, Delaware address
//   (1111B S Governors Ave #6322, Dover, DE 19904) and states data is processed in the United States —
//   per the Company HQ flag rule, a company address stated in the privacy policy is sufficient. No
//   separate impressum/terms page was found (openpaper.ai/terms returned 404 at the time of this check).
// Last upstream update: 2026-10-30 (latest commit on the GitHub `master` branch; no Releases or Tags
// exist on this repository) → NOT stale (19 days before this 2026-11-18 check).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'open-paper',
  name: 'Open Paper',
  categories: ['document-pdf-chat', 'search-deep-research'],
  interfaces: ['web'],
  locality: 'cloud', // hosted service; every AI feature calls cloud providers (Gemini, OpenAI, Anthropic) per DEVELOPMENT.md, no Ollama/local-model path documented
  platforms: ['web'],
  worksWith: null, // only cloud LLM provider keys are documented as server-side configuration, not a user-facing integration list; Zotero import/sync is covered in the review body
  engine: 'external',
  license: 'AGPL-3.0', // github.com/khoj-ai/openpaper license field, checked 2026-11-18
  price: 'freemium', // openpaper.ai/pricing, checked 2026-11-18: Base $0/month, Researcher $12/month, Teams unpriced ("TBD," "Coming Soon")
  hardware: null, // hosted web app; no local inference, no device requirement
  stars: 524, // github.com/khoj-ai/openpaper, checked 2026-11-18
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['docs'],
  url: 'openpaper.ai',
  storeLinks: {
    web: 'https://openpaper.ai',
    github: 'https://github.com/khoj-ai/openpaper',
  },
  installEffort: 'hosted',
  installEvidence: 'openpaper.ai, checked 2026-11-18: the product is used entirely in the browser after signing in, with no download. The AGPL-3.0 source at github.com/khoj-ai/openpaper documents a Docker-Compose self-hosting path (Postgres, S3-compatible storage, three cloud LLM API keys, per DEVELOPMENT.md), but the README states the project "isn\'t optimized for self-hosting" and is built primarily as a hosted service — terminal-setup tier for that path, not the one a newcomer is pointed to.',
  hqCountry: 'US',
  hqCountrySource: 'https://openpaper.ai/privacy',
  tagline: {
    en: 'Open-source (AGPL-3.0), hosted AI workspace for reading, annotating, and asking cited questions about research papers — free Base tier plus a $12/month Researcher plan; AI features run on cloud models only, no local inference',
    de: 'Quelloffener (AGPL-3.0), gehosteter KI-Arbeitsbereich zum Lesen, Annotieren und Stellen von Fragen mit Quellenangaben zu Forschungspapieren — kostenlose Basisstufe plus ein Researcher-Plan für 12 $/Monat; KI-Funktionen laufen nur über Cloud-Modelle, keine lokale Inferenz',
    fr: 'Espace de travail IA hébergé et open source (AGPL-3.0) pour lire, annoter et poser des questions sourcées sur des articles de recherche — palier Base gratuit et plan Researcher à 12 $/mois ; les fonctions IA utilisent uniquement des modèles cloud, sans inférence locale',
    ja: 'オープンソース（AGPL-3.0）のホスト型AIワークスペースで、研究論文を読み、注釈を付け、引用付きで質問できる — 無料のBaseプランに加え月額12ドルのResearcherプランあり。AI機能はクラウドモデルのみで動作し、ローカル推論には対応しない',
    zh: '开源（AGPL-3.0）的托管式AI工作区，用于阅读、注释并对研究论文进行带引用来源的提问 —— 提供免费的Base套餐和每月12美元的Researcher套餐；AI功能仅运行于云端模型，不支持本地推理',
    es: 'Espacio de trabajo de IA alojado y de código abierto (AGPL-3.0) para leer, anotar y hacer preguntas con citas sobre artículos de investigación — plan Base gratuito más un plan Researcher de 12 $/mes; las funciones de IA solo usan modelos en la nube, sin inferencia local',
    pt: 'Espaço de trabalho de IA hospedado e de código aberto (AGPL-3.0) para ler, anotar e fazer perguntas com citações sobre artigos de pesquisa — plano Base gratuito mais um plano Researcher de US$ 12/mês; os recursos de IA funcionam apenas com modelos na nuvem, sem inferência local',
    ar: 'مساحة عمل ذكاء اصطناعي مستضافة ومفتوحة المصدر (AGPL-3.0) لقراءة الأوراق البحثية وتعليقها وطرح أسئلة مع الاستشهاد بالمصادر — خطة Base مجانية وخطة Researcher بسعر 12 دولارًا شهريًا؛ تعمل ميزات الذكاء الاصطناعي فقط عبر نماذج سحابية دون استدلال محلي',
    ko: '오픈소스(AGPL-3.0) 호스팅형 AI 워크스페이스로, 연구 논문을 읽고 주석을 달고 출처가 표시된 답변으로 질문할 수 있음 — 무료 Base 플랜과 월 12달러 Researcher 플랜 제공. AI 기능은 클라우드 모델에서만 동작하며 로컬 추론은 지원하지 않음',
  },
  reviewSlug: 'open-paper-review',
  // Comparison attributes (document-chat segment): verified against openpaper.ai/pricing, openpaper.ai/about,
  // DEVELOPMENT.md, and github.com/khoj-ai/openpaper on 2026-11-18; a missing key means not stated there, never false.
  compare: { localLlm: false, multiFormat: false, citations: true, desktopApp: false, dockerDeploy: true },
  pqReview: {
    date: '2026-11-18',
    version: '0.1.0',
    versionSourceUrl: 'https://github.com/khoj-ai/openpaper/blob/master/client/package.json',
  },
  verdict: 'Best for a researcher who wants one hosted workspace to read, annotate, and ask cited questions across a paper library, with Zotero sync and CSV-exportable data tables — weaker fit for anyone who needs local or offline inference, since every AI feature in Open Paper calls a cloud provider and the project itself says it is not built for self-hosting.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-10-30', // github.com/khoj-ai/openpaper, latest commit on master (no Releases/Tags exist), checked 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/khoj-ai/openpaper/commits/master',
}

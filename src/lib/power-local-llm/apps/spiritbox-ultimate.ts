// Local AI App Directory — SpiritBox Ultimate (layer: desktop)
// Added 2026-10-16 following maker outreach (Ryan Lucas, SpiritBox, Alberta, Canada).
// Scope is deliberately anchored to the current R6 Early Access offer at the developer's request: the download is NOT described as a
// qualified multi-service AI workstation, proven GPU orchestration or a ready-to-use RAG/automation bundle.
// Verified on 2026-10-16 against: spiritbox.ca/ultimate.html (R6 Windows Early Access, $199 USD one-time, Gumroad checkout, Docker Desktop
// with WSL2/Linux containers + a working LM Studio model/server required, models separate), spiritbox.ca/lm-studio-ultimate-checklist.html,
// spiritbox.ca/release-status.html ("SpiritBox Ultimate v1.12 R6", SpiritBox_Ultimate_v1.12_R6_Windows.zip, 82,534,488 bytes; 519 payload hashes
// verified; streaming fix passed offline tests only; fresh R6 real-model run and clean-PC install UNVERIFIED), spiritbox.ca/requirements.html
// (Windows 10/11 only; no general RAM/VRAM minimum; macOS/Linux/CPU-only/AMD/Intel not qualified), spiritbox.ca/privacy.html and
// spiritbox.ca/buyer-policies.html (best-effort email support; licence = "included licence", commercial redistribution needs written permission).
// Prices are shown in USD only (no other storefront currencies), so every locale keeps $199 USD. Basic (free) and Pro ($49 USD) are separate editions, not listed here.
// `hardware` stays variesByModel (no RAM/VRAM minimum established). `compare` carries only voice: spoken replies are in the offer; engine/files/MCP/Ollama stay unset (not verified).
// Maker comment from Ryan Lucas received 2026-10 (see `founder` below); founderReviewedDate is set as of go-live because the developer asked to check the draft before it is published.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'spiritbox-ultimate',
  name: 'SpiritBox Ultimate',
  categories: ['general-chat-clients'],
  interfaces: ['desktop'],
  locality: 'local', // core inference runs through the user's own LM Studio; optional integrations may contact third parties per the privacy page
  platforms: ['win'], // Windows 10/11 only per spiritbox.ca/requirements.html (macOS and Linux not qualified for Ultimate R6)
  worksWith: ['LM Studio', 'Docker Desktop', 'WSL2'],
  engine: 'external', // needs an already-working LM Studio model and server; models are separate downloads
  license: 'Proprietary (commercial licence)', // buyer policies: use of the delivered edition under its included licence; no licence text on the offer page
  price: 'paid', // $199 USD one-time via Gumroad (Early Access); the separate Basic edition is free
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // release "does not establish a general RAM or VRAM minimum"; fit depends on the LM Studio model
  stars: null,
  addedDate: '2026-10-16',
  status: 'listed',
  uses: ['chat', 'audio'],
  url: 'spiritbox.ca',
  storeLinks: {
    web: 'https://spiritbox.ca/ultimate.html',
  },
  installEffort: 'terminal-setup',
  installEvidence:
    'Checked 2026-10-16: spiritbox.ca/ultimate.html and the buyer checklist describe a zip archive (SpiritBox_Ultimate_v1.12_R6_Windows.zip, Gumroad) to extract into a new empty folder and set up via Windows setup scripts and LMSTUDIO_FIRST.md; prerequisites are Docker Desktop with WSL2/Linux containers and a working LM Studio server. No installer wizard or releases page is described.',
  tagline: {
      en: 'Windows Early Access app for LM Studio users, combining Guide-based chats, saved chats and spoken replies; needs Docker Desktop',
      de: 'Windows-App im Early Access für LM-Studio-Nutzer: Guide-basierte Chats, gespeicherte Chats und gesprochene Antworten; braucht Docker Desktop',
      fr: 'Application Windows en accès anticipé pour utilisateurs de LM Studio : conversations par Guides, discussions enregistrées et réponses parlées ; exige Docker Desktop',
      ja: 'LM Studioユーザー向けのWindows先行アクセスアプリ。Guide会話、保存チャット、音声返答をまとめて提供。Docker Desktop必須',
      zh: '面向 LM Studio 用户的 Windows 抢先体验应用,整合 Guide 对话、已保存聊天和语音回复;需要 Docker Desktop',
      es: 'App en Early Access para Windows y usuarios de LM Studio: chats con Guides, chats guardados y respuestas habladas; requiere Docker Desktop',
      pt: 'App em Early Access para Windows e usuários do LM Studio: chats com Guides, chats salvos e respostas faladas; exige Docker Desktop',
      ar: 'تطبيق وصول مبكر لويندوز لمستخدمي LM Studio يجمع محادثات Guides والمحادثات المحفوظة والردود المنطوقة؛ يتطلب Docker Desktop',
      ko: 'LM Studio 사용자를 위한 Windows 얼리 액세스 앱. Guide 대화, 저장된 채팅, 음성 답변을 제공하며 Docker Desktop이 필요합니다',
  },
  // Comparison attributes taken from spiritbox.ca on 2026-10-16; a missing key = not stated, never false.
  // voice = spoken replies are part of the R6 offer. builtInEngine / ollama / customEndpoint / mcp / fileChat stay unset: not verified for R6.
  compare: { voice: true },
  lastVerifiedDate: '2026-10-16',
  founderReviewedDate: '2026-10-16', // Ryan Lucas supplied scope facts and his own comment and asked to check the draft before it goes live; drives the Founder-reviewed banner + star. Do not merge/deploy before he has confirmed the draft.
  reviewSlug: 'spiritbox-ultimate-review',
  pqReview: {
    date: '2026-10-16',
    version: 'v1.12 R6',
    versionSourceUrl: 'https://spiritbox.ca/release-status.html',
  },
  verdict:
    'Best for technical Windows users who already run LM Studio and want to trial Guide-based chats, saved chats and spoken replies together; limited by the Docker and WSL2 prerequisites, Windows-only support, and R6 testing gaps (no fresh real-model run or clean-PC install yet).',
  founder: {
    who: {
      en: 'Ryan Lucas, developer of SpiritBox',
      de: 'Ryan Lucas, Entwickler von SpiritBox',
      fr: 'Ryan Lucas, développeur de SpiritBox',
      ja: 'Ryan Lucas氏、SpiritBox開発者',
      zh: 'Ryan Lucas,SpiritBox 开发者',
      es: 'Ryan Lucas, desarrollador de SpiritBox',
      pt: 'Ryan Lucas, desenvolvedor do SpiritBox',
      ar: 'Ryan Lucas، مطوّر SpiritBox',
      ko: 'Ryan Lucas, SpiritBox 개발자',
    },
    providedDate: '2026-10-16',
    why: {
      en: 'The idea behind SpiritBox Ultimate is to bring Guide-based conversations, saved chats and spoken replies into one interface for people running local AI.',
      de: 'Die Idee hinter SpiritBox Ultimate ist, Guide-basierte Unterhaltungen, gespeicherte Chats und gesprochene Antworten in einer Oberfläche für Menschen zusammenzubringen, die lokale KI betreiben.',
      fr: 'L\'idée de SpiritBox Ultimate est de réunir dans une seule interface les conversations fondées sur des Guides, les discussions enregistrées et les réponses parlées pour les personnes qui font tourner une IA locale.',
      ja: 'SpiritBox Ultimateの狙いは、ローカルAIを動かしている人のために、Guideを軸にした会話、保存したチャット、音声での返答をひとつのインターフェースにまとめることです。',
      zh: 'SpiritBox Ultimate 的想法，是为运行本地 AI 的人，把 Guide 式对话、已保存聊天和语音回复集中到一个界面里。',
      es: 'La idea de SpiritBox Ultimate es reunir en una sola interfaz las conversaciones basadas en Guides, los chats guardados y las respuestas habladas para quienes ejecutan IA local.',
      pt: 'A ideia por trás do SpiritBox Ultimate é reunir em uma só interface conversas baseadas em Guides, chats salvos e respostas faladas para quem executa IA local.',
      ar: 'فكرة SpiritBox Ultimate هي جمع المحادثات القائمة على Guides والمحادثات المحفوظة والردود المنطوقة في واجهة واحدة لمن يشغّلون الذكاء الاصطناعي المحلي.',
      ko: 'SpiritBox Ultimate의 취지는 로컬 AI를 운영하는 사람들을 위해 Guide 기반 대화, 저장된 채팅, 음성 답변을 하나의 인터페이스로 모으는 것입니다.',
    },
    pullQuote: {
      en: 'The immediate priority is making that core experience dependable and clearly documenting what has and has not been verified.',
      de: 'Die oberste Priorität ist, dieses Kernerlebnis zuverlässig zu machen und klar zu dokumentieren, was überprüft wurde und was nicht.',
      fr: 'La priorité immédiate est de rendre cette expérience de base fiable et de documenter clairement ce qui a été vérifié et ce qui ne l\'a pas été.',
      ja: '当面の最優先事項は、この中核の体験を信頼できるものにすること、そして何が検証され、何が検証されていないかを明確に文書化することです。',
      zh: '眼下的首要任务，是让这一核心体验变得可靠，并清楚地记录哪些已经验证、哪些尚未验证。',
      es: 'La prioridad inmediata es lograr que esa experiencia básica sea fiable y documentar con claridad lo que se ha verificado y lo que no.',
      pt: 'A prioridade imediata é tornar essa experiência básica confiável e documentar com clareza o que foi e o que não foi verificado.',
      ar: 'وأولويتنا الفورية هي جعل هذه التجربة الأساسية موثوقة وتوثيق ما جرى التحقق منه وما لم يجرِ التحقق منه بوضوح.',
      ko: '당장의 우선순위는 이 핵심 경험을 믿을 수 있게 만들고, 무엇이 검증되었고 무엇이 검증되지 않았는지 명확히 문서화하는 것입니다.',
    },
    fullQuote: {
      en: ['The idea behind SpiritBox Ultimate is to bring Guide-based conversations, saved chats and spoken replies into one interface for people running local AI. The current Early Access release is aimed at Windows users who already operate LM Studio and are comfortable with Docker. The immediate priority is making that core experience dependable and clearly documenting what has and has not been verified.'],
      de: ['Die Idee hinter SpiritBox Ultimate ist, Guide-basierte Unterhaltungen, gespeicherte Chats und gesprochene Antworten in einer Oberfläche für Menschen zusammenzubringen, die lokale KI betreiben. Die aktuelle Early-Access-Version richtet sich an Windows-Nutzer, die LM Studio bereits betreiben und mit Docker vertraut sind. Die oberste Priorität ist, dieses Kernerlebnis zuverlässig zu machen und klar zu dokumentieren, was überprüft wurde und was nicht.'],
      fr: ['L\'idée de SpiritBox Ultimate est de réunir dans une seule interface les conversations fondées sur des Guides, les discussions enregistrées et les réponses parlées pour les personnes qui font tourner une IA locale. La version actuelle en accès anticipé s\'adresse aux utilisateurs Windows qui utilisent déjà LM Studio et sont à l\'aise avec Docker. La priorité immédiate est de rendre cette expérience de base fiable et de documenter clairement ce qui a été vérifié et ce qui ne l\'a pas été.'],
      ja: ['SpiritBox Ultimateの狙いは、ローカルAIを動かしている人のために、Guideを軸にした会話、保存したチャット、音声での返答をひとつのインターフェースにまとめることです。現在の先行アクセス版は、すでにLM Studioを運用していて、Dockerに慣れているWindowsユーザーを対象としています。当面の最優先事項は、この中核の体験を信頼できるものにすること、そして何が検証され、何が検証されていないかを明確に文書化することです。'],
      zh: ['SpiritBox Ultimate 的想法，是为运行本地 AI 的人，把 Guide 式对话、已保存聊天和语音回复集中到一个界面里。当前的抢先体验版面向已经在运行 LM Studio、且熟悉 Docker 的 Windows 用户。眼下的首要任务，是让这一核心体验变得可靠，并清楚地记录哪些已经验证、哪些尚未验证。'],
      es: ['La idea de SpiritBox Ultimate es reunir en una sola interfaz las conversaciones basadas en Guides, los chats guardados y las respuestas habladas para quienes ejecutan IA local. La versión actual en Early Access está dirigida a usuarios de Windows que ya utilizan LM Studio y se sienten cómodos con Docker. La prioridad inmediata es lograr que esa experiencia básica sea fiable y documentar con claridad lo que se ha verificado y lo que no.'],
      pt: ['A ideia por trás do SpiritBox Ultimate é reunir em uma só interface conversas baseadas em Guides, chats salvos e respostas faladas para quem executa IA local. A versão atual em Early Access é voltada a usuários de Windows que já operam o LM Studio e estão à vontade com o Docker. A prioridade imediata é tornar essa experiência básica confiável e documentar com clareza o que foi e o que não foi verificado.'],
      ar: ['فكرة SpiritBox Ultimate هي جمع المحادثات القائمة على Guides والمحادثات المحفوظة والردود المنطوقة في واجهة واحدة لمن يشغّلون الذكاء الاصطناعي المحلي. والإصدار الحالي في مرحلة الوصول المبكر موجّه لمستخدمي ويندوز الذين يشغّلون LM Studio بالفعل ويرتاحون للعمل مع Docker. وأولويتنا الفورية هي جعل هذه التجربة الأساسية موثوقة وتوثيق ما جرى التحقق منه وما لم يجرِ التحقق منه بوضوح.'],
      ko: ['SpiritBox Ultimate의 취지는 로컬 AI를 운영하는 사람들을 위해 Guide 기반 대화, 저장된 채팅, 음성 답변을 하나의 인터페이스로 모으는 것입니다. 현재 얼리 액세스 릴리스는 이미 LM Studio를 운영하고 있고 Docker에 익숙한 Windows 사용자를 대상으로 합니다. 당장의 우선순위는 이 핵심 경험을 믿을 수 있게 만들고, 무엇이 검증되었고 무엇이 검증되지 않았는지 명확히 문서화하는 것입니다.'],
    },
  },
}

// Local AI App Directory — Cognira (layer: personal assistant)
// Added following maker outreach (Thomas Conway, cognira.dev) — 2026-09-26.
// The outreach email was used only as a starting point, not taken at face value — every field below
// was independently re-verified against https://cognira.dev and https://cognira.dev/pricing on
// 2026-09-26 (fresh fetch, not reused from an earlier session). Two findings from that verification:
//
// 1. The email described "Cognira Entity" as a "sealed Apple Silicon MLX binary." cognira.dev's own
//    pricing page instead states Cognira Entity is "a sealed local binary for Windows, macOS, and
//    Linux" — cross-platform, not Apple-Silicon-exclusive. MLX only applies to the *hosted* chat
//    service, which the site says runs on the founder's own single 16 GB iMac. `platforms` below
//    reflects the site's own claim, not the email's.
// 2. `locality` is a judgment call, not a clean fact. cognira.dev states inference, memory, and
//    optional weight-level retraining for Cognira Entity "all stay on your disk. Nothing leaves." —
//    a genuine local-inference claim. But the same pricing page lists Cognira Entity as a feature
//    bundled inside the Free/Pro/Max tiers, which are otherwise defined entirely by a weekly *token
//    allowance* shared with the hosted chat service — suggesting Entity may still be an
//    account-gated, metered client rather than a fully offline-capable standalone tool in the sense
//    Ollama/LM Studio/GPT4All are in this directory. cognira.dev/docs returns 404, so there is no
//    independent technical documentation to resolve this either way — only the vendor's own
//    marketing copy. Given Cognira genuinely ships both a real local binary (Entity) and a real
//    hosted cloud service (hosted Cognira), 'hybrid' is the closer fit than 'local' or 'cloud', but
//    treat this as the least-certain field on this record. Reflect the same nuance in the review
//    article rather than describing Entity as unconditionally offline-capable.
//
// No GitHub repository was found for Cognira/Cognira Entity — no star count, no license file, no
// source to independently inspect any of the vendor's claims. Two claims on cognira.dev could not be
// independently substantiated and are deliberately omitted from this record and from the review
// article: (a) that the model is "built on Gemma 4," and (b) that a legacy "Omega 188M" model is
// open-source on Hugging Face (no matching model found via Hugging Face search). Do not add either
// claim back without independent verification.
//
// Also note: cognira.dev is a same-day rebrand of the founder's prior product, Conway AI (conw.ai),
// which was mid-migration to cognira.dev at verification time — content may still be in flux.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'cognira',
  name: 'Cognira',
  categories: ['personal-assistants', 'general-chat-clients'],
  interfaces: ['desktop', 'web'], // Cognira Entity: sealed desktop binary; hosted Cognira: web chat
  locality: 'hybrid', // see verification comment above — genuine ambiguity, not a default
  platforms: ['win', 'mac', 'linux', 'web'], // per cognira.dev/pricing: "a sealed local binary for Windows, macOS, and Linux"; hosted chat is web, verified 2026-09-26
  worksWith: null, // no third-party integrations documented on cognira.dev
  engine: 'builtin', // ships its own proprietary model (Cognira Retrain 12B), not a connector to external backends
  license: 'Proprietary', // no LICENSE file or EULA found; closed-source proprietary model, verified 2026-09-26
  price: 'freemium', // Free (£0, 25K tokens/week) plus paid Pro/Max tiers, verified 2026-09-26
  hardware: null, // cognira.dev states no RAM/VRAM/CPU requirement for Cognira Entity anywhere found
  stars: null, // no GitHub repository found for Cognira or Cognira Entity
  addedDate: '2026-09-26',
  status: 'listed',
  uses: ['chat'],
  url: 'cognira.dev',
  storeLinks: {
    web: 'https://cognira.dev',
  },
  tagline: {
    en: 'Self-learning AI assistant with a sealed local binary and private, forgettable memory',
    de: 'Selbstlernender KI-Assistent mit versiegelter lokaler Binärdatei und privatem, löschbarem Gedächtnis',
    fr: 'Assistant IA auto-apprenant avec binaire local scellé et mémoire privée et effaçable',
    ja: 'シール化されたローカルバイナリと、削除可能なプライベート記憶を備えた自己学習型AIアシスタント',
    zh: '具备密封本地二进制程序和可删除私人记忆的自学习AI助手',
    es: 'Asistente de IA autoaprendiz con binario local sellado y memoria privada y eliminable',
    pt: 'Assistente de IA autoaprendiz com binário local selado e memória privada e apagável',
    ar: 'مساعد ذكاء اصطناعي ذاتي التعلم بملف تنفيذي محلي مغلق وذاكرة خاصة قابلة للحذف',
    ko: '봉인된 로컬 바이너리와 삭제 가능한 개인 메모리를 갖춘 자기 학습형 AI 어시스턴트',
  },
  verdict: 'Best for a single user who wants a private, self-learning chat assistant with a local binary option and is comfortable with a solo-founder, proprietary, same-day-rebranded product; limited by no GitHub repository, no independent verification of its underlying model, and real ambiguity over whether the local binary is fully offline-capable or account-gated.',
  // Comparison attributes: each value verified against cognira.dev on 2026-09-26; a missing key = not
  // stated there, never false. toolUse left unset — no tool-calling/actions feature documented.
  compare: { localLlm: false, voice: false, memory: true },
  lastVerifiedDate: '2026-09-26',
  reviewSlug: 'cognira-review',
}

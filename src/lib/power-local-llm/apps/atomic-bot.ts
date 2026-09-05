// Local AI App Directory — Atomic Bot (layer: assistant)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc's concern ("hybrid local/cloud; not confirmed as primarily local; no usage
// numbers") stands — confirmed hybrid (local/cloud/hybrid modes, user's choice), but no
// public usage figure found. Packages the open-source OpenClaw agent stack into a closed,
// polished app — no public repo for Atomic Bot itself, so stars is null.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'atomic-bot',
  name: 'Atomic Bot',
  categories: ['personal-assistants'],
  interfaces: ['desktop', 'mobile', 'web'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux', 'ios', 'android'],
  worksWith: ['OpenAI API', 'Anthropic API', 'Mistral API', 'Groq', 'Hugging Face'],
  engine: 'external',
  license: 'Proprietary (packages the open-source OpenClaw agent stack)',
  price: 'TODO',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null, // closed source packaging of OpenClaw, no public repo of its own
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['agent', 'chat'],
  url: 'atomicbot.ai',
  tagline: {
    en: 'Desktop and cloud AI coworker packaging the open-source OpenClaw agent stack, runs locally or in the cloud',
    de: 'Desktop- und Cloud-KI-Kollege, der den Open-Source-OpenClaw-Agenten-Stack verpackt und lokal oder in der Cloud läuft',
    fr: 'Coéquipier IA de bureau et cloud regroupant la pile d\'agents open source OpenClaw, fonctionne en local ou dans le cloud',
    ja: 'オープンソースのOpenClawエージェントスタックをパッケージ化したデスクトップ・クラウドAIコワーカー。ローカルまたはクラウドで動作',
    zh: '打包开源OpenClaw代理堆栈的桌面与云端AI同事，可本地或云端运行',
    es: 'Compañero de trabajo de IA de escritorio y nube que empaqueta la pila de agentes de código abierto OpenClaw, funciona local o en la nube',
    pt: 'Colega de trabalho de IA de desktop e nuvem que empacota a pilha de agentes open source OpenClaw, roda localmente ou na nuvem',
    ar: 'زميل عمل بالذكاء الاصطناعي لسطح المكتب والسحابة يحزم حزمة وكيل OpenClaw مفتوحة المصدر، يعمل محلياً أو في السحابة',
    ko: '오픈소스 OpenClaw 에이전트 스택을 패키징한 데스크톱 및 클라우드 AI 동료, 로컬 또는 클라우드에서 실행',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}

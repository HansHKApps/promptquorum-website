// Local AI App Directory — PhoneClaw (layer: agent)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc's concern was "GitHub Pages site, macOS-only, small usage — weak fit" — all
// still true; listed anyway per Hans's sign-off, with url pointing at the canonical GitHub
// repo since there is no separate marketing domain.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'phoneclaw',
  name: 'PhoneClaw',
  categories: ['autonomous-agents'],
  interfaces: ['desktop'],
  locality: 'hybrid',
  platforms: ['mac'],
  worksWith: ['Anthropic API', 'OpenAI API'],
  engine: 'external',
  license: 'Apache-2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 1233, // github.com/kellyvv/PhoneClaw, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['agent', 'phone'],
  url: 'github.com/kellyvv/PhoneClaw',
  tagline: {
    en: 'macOS app that lets an AI agent control and automate your phone',
    de: 'macOS-App, mit der ein KI-Agent Ihr Telefon steuern und automatisieren kann',
    fr: 'Application macOS permettant à un agent IA de contrôler et d\'automatiser votre téléphone',
    ja: 'AIエージェントがスマートフォンを操作・自動化できるようにするmacOSアプリ',
    zh: '让AI代理控制和自动化你的手机的macOS应用',
    es: 'Aplicación de macOS que permite que un agente de IA controle y automatice tu teléfono',
    pt: 'Aplicativo macOS que permite que um agente de IA controle e automatize seu telefone',
    ar: 'تطبيق macOS يتيح لوكيل ذكاء اصطناعي التحكم في هاتفك وأتمتته',
    ko: 'AI 에이전트가 휴대폰을 제어하고 자동화할 수 있게 하는 macOS 앱',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}

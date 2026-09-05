// Local AI App Directory — Loci AI (layer: mobile)
// Added manually — has a full PromptQuorum review (loci-ai-review-offline-local-ai),
// so tagline/url/license/platforms are sourced from that article, not TODO placeholders.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'loci-ai',
  name: 'Loci AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'android', 'mac', 'win'],
  worksWith: ['Ollama'],
  engine: 'both',
  license: 'Closed source',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-08-22',
  founderReviewedDate: '2026-09-05',
  status: 'listed',
  uses: ['chat'],
  url: 'askloci.ai',
  tagline: {
    en: 'Offline AI assistant for iPhone, Android, iPad, Mac and Windows',
    de: 'Offline-KI-Assistent für iPhone, Android, iPad, Mac und Windows',
    fr: 'Assistant IA hors ligne pour iPhone, Android, iPad, Mac et Windows',
    ja: 'iPhone、Android、iPad、Mac、Windows向けオフラインAIアシスタント',
    zh: 'iPhone、Android、iPad、Mac和Windows的离线AI助手',
    es: 'Asistente de IA offline para iPhone, Android, iPad, Mac y Windows',
    pt: 'Assistente de IA offline para iPhone, Android, iPad, Mac e Windows',
    ar: 'مساعد ذكاء اصطناعي يعمل بلا اتصال لأجهزة iPhone وAndroid وiPad وMac وWindows',
    ko: 'iPhone, Android, iPad, Mac, Windows용 오프라인 AI 어시스턴트',
  },
  lastVerifiedDate: '2026-08-22',
}

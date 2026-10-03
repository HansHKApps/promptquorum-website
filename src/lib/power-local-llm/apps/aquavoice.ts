// Local AI App Directory — AquaVoice (Aqua)
// Added alongside aquavoice-review.ts (2026-10-03).
// Facts verified via aquavoice.com, aquavoice.com/pricing, its privacy policy and terms, and the
// iOS App Store listing on 2026-10-03. The company states no hosting location; the privacy policy
// describes transcripts stored on its servers when Privacy Mode is off, so locality is 'cloud'.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'aquavoice',
  name: 'AquaVoice',
  categories: ['speech-to-text'],
  interfaces: ['desktop'],
  locality: 'cloud',
  platforms: ['mac', 'win', 'ios', 'android'],
  worksWith: null,
  engine: 'builtin',
  license: 'Proprietary',
  price: 'freemium',
  hardware: null, // cloud service; no local hardware floor published
  stars: null, // closed-source app; no repository
  addedDate: '2026-10-03',
  status: 'listed',
  uses: ['audio'],
  url: 'aquavoice.com',
  tagline: {
    en: 'Cloud voice dictation that types into the active app, for AI prompts and messages',
    de: 'Cloud-Diktat, das in die aktive App tippt, für KI-Prompts und Nachrichten',
    fr: 'Dictée vocale cloud qui écrit dans l\'app active, pour prompts IA et messages',
    ja: 'アクティブなアプリに入力するクラウド音声ディクテーション（AIプロンプト・メッセージ向け）',
    zh: '在当前应用中输入文字的云端语音听写，适用于AI提示词和消息',
    es: 'Dictado por voz en la nube que escribe en la app activa, para prompts de IA y mensajes',
    pt: 'Ditado por voz na nuvem que digita no app ativo, para prompts de IA e mensagens',
    ar: 'إملاء صوتي سحابي يكتب في التطبيق النشط، لأوامر الذكاء الاصطناعي والرسائل',
    ko: '활성 앱에 입력해 주는 클라우드 음성 받아쓰기, AI 프롬프트와 메시지용',
  },
  reviewSlug: 'aquavoice-review', // dedicated PromptQuorum review
  // Each value verified against aquavoice.com on 2026-10-03; a missing key = not stated there, never false.
  compare: { languages: 49, realtime: true },
  lastVerifiedDate: '2026-10-03',
}

// Local AI App Directory — MacWhisper (layer: stt)
// Added alongside macwhisper-review.ts (2026-09-12).
// Facts verified via macwhisper.com, goodsnooze.gumroad.com/l/macwhisper, and the Mac App Store
// listing for "Whisper Transcription" (id1668083311) on 2026-09-12.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'macwhisper',
  name: 'MacWhisper',
  categories: ['speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Proprietary',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which Whisper/Parakeet model size is loaded, not a fixed tool attribute
  stars: null, // No GitHub repository — closed-source app; not applicable
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['audio'],
  url: 'macwhisper.com',
  tagline: {
    en: 'One-time-purchase Mac app for local Whisper and Parakeet transcription',
    de: 'Mac-App mit Einmalkauf für lokale Whisper- und Parakeet-Transkription',
    fr: 'App Mac à achat unique pour la transcription locale Whisper et Parakeet',
    ja: 'ローカルWhisper・Parakeet文字起こし向け買い切りMacアプリ',
    zh: '一次性购买的本地Whisper与Parakeet转录Mac应用',
    es: 'App de Mac de pago único para transcripción local con Whisper y Parakeet',
    pt: 'App de Mac de compra única para transcrição local com Whisper e Parakeet',
    ar: 'تطبيق Mac بشراء لمرة واحدة لتحويل الكلام محليًا عبر Whisper وParakeet',
    ko: '로컬 Whisper·Parakeet 전사를 위한 일회성 구매 Mac 앱',
  },
  reviewSlug: 'macwhisper-review', // dedicated PromptQuorum review
  lastVerifiedDate: '2026-09-12',
}

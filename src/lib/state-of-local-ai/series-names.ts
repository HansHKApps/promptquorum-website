// Series name per language, client-safe (the Footer imports this; the full strings pull in server-only code).
// Keep in sync with `series` in ./i18n/<lang>.ts.
import type { Language } from '@/lib/blog/blogContent'

export const SOLA_SERIES_NAMES: Record<Language, string> = {
  en: 'The State of Local AI',
  de: 'Der Stand der lokalen KI',
  fr: 'L’état de l’IA locale',
  es: 'El estado de la IA local',
  pt: 'O Estado da IA Local',
  ja: 'ローカルAIの現状',
  zh: '本地 AI 现状',
  ar: 'حالة الذكاء الاصطناعي المحلي',
  ko: '로컬 AI 현황',
}

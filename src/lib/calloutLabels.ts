import type { Language } from '@/lib/blog/blogContent'

const CALLOUT_LABELS: Record<string, Record<Language, string>> = {
  warning: {
    en: 'Warning', de: 'Warnung', fr: 'Attention', ja: '注意', zh: '警告',
    es: 'Advertencia', pt: 'Aviso', ar: 'تحذير', ko: '경고',
  },
  tip: {
    en: 'Tip', de: 'Tipp', fr: 'Astuce', ja: 'ヒント', zh: '提示',
    es: 'Consejo', pt: 'Dica', ar: 'نصيحة', ko: '팁',
  },
  insight: {
    en: 'Insight', de: 'Erkenntnis', fr: 'Point clé', ja: '洞察', zh: '洞察',
    es: 'Idea clave', pt: 'Insight', ar: 'رؤية', ko: '인사이트',
  },
  note: {
    en: 'Note', de: 'Hinweis', fr: 'Remarque', ja: '補足', zh: '注',
    es: 'Nota', pt: 'Nota', ar: 'ملاحظة', ko: '참고',
  },
  practice: {
    en: 'Practice', de: 'Praxis-Tipp', fr: 'Bonne pratique', ja: '実践', zh: '实践',
    es: 'Buena práctica', pt: 'Boa prática', ar: 'ممارسة', ko: '실전 팁',
  },
}

export function getCalloutLabel(type: string, lang: Language): string {
  return CALLOUT_LABELS[type]?.[lang] ?? (type.charAt(0).toUpperCase() + type.slice(1))
}

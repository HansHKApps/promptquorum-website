import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Language } from '@/lib/blog/blogContent'

const REVIEWED_LABEL: Record<Language, string> = {
  en: 'Content last reviewed:',
  de: 'Inhalt zuletzt geprüft:',
  fr: 'Contenu vérifié pour la dernière fois:',
  ja: 'コンテンツの最終確認日:',
  zh: '内容最后审核于:',
  es: 'Contenido revisado por última vez:',
  pt: 'Conteúdo revisado pela última vez em:',
  ar: 'آخر مراجعة للمحتوى:',
  ko: '콘텐츠 최종 검토일:',
}

/** "Content last reviewed" badge for cluster hub/index pages. Mirrors the per-article
 * "Last updated" badge styling so hubs and articles read as one system. */
export function HubReviewedBadge({ date, lang, className = 'mb-14' }: { date?: string; lang: Language; className?: string }) {
  if (!date) return null
  return (
    <time
      dateTime={date}
      className={`inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs font-semibold ${className}`}
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      {REVIEWED_LABEL[lang] ?? REVIEWED_LABEL.en} {formatDisplayDate(date, lang)}
    </time>
  )
}

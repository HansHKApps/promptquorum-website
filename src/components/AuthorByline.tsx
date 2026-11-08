// Visible author byline for page types that render no byline of their own (Prompt Bites, hands-on tests).
// The five article clients keep their own byLine strings (same texts); this reuses those exact, already-translated
// strings, so no new copy is introduced. Links to the canonical author page (not locale-prefixed: /<lang>/author/... is a
// 404), with rel="author" and the data-testid that scripts/check-author-markup.mjs looks for in the raw server HTML.
import { AUTHOR_NAME, AUTHOR_PATH } from '@/lib/author'

const TEXT: Record<string, { before: string; after: string }> = {
  en: { before: 'By ', after: ' · Founder of PromptQuorum · Discovery engine for open-weight & open-source AI' },
  de: { before: 'Von ', after: ' · Gründer von PromptQuorum · Entdeckungsplattform für Open-Weight- und Open-Source-KI' },
  fr: { before: 'Par ', after: ' · Fondateur de PromptQuorum · Moteur de découverte de l\'IA open-weight et open source' },
  ja: { before: '', after: ' 著 · PromptQuorum創設者 · オープンウェイト／オープンソースAIの発見エンジン' },
  zh: { before: '', after: ' 作者 · PromptQuorum创始人 · 开放权重与开源AI发现引擎' },
  es: { before: 'Por ', after: ' · Fundador de PromptQuorum · Motor de descubrimiento de IA de pesos abiertos y código abierto' },
  pt: { before: 'Por ', after: ' · Fundador do PromptQuorum · Mecanismo de descoberta de IA de pesos abertos e código aberto' },
  ar: { before: 'بقلم ', after: ' · مؤسس PromptQuorum · محرك اكتشاف للذكاء الاصطناعي مفتوح الأوزان ومفتوح المصدر' },
  ko: { before: '', after: ' 저 · PromptQuorum 창립자 · 오픈 웨이트·오픈소스 AI 디스커버리 엔진' },
}

export function AuthorByline({ lang, className }: { lang: string; className?: string }) {
  const t = TEXT[lang] ?? TEXT.en
  return (
    <p data-testid="author-byline" className={className ?? 'text-sm text-text-muted'}>
      {t.before}
      <a rel="author" href={AUTHOR_PATH} className="text-primary font-medium hover:underline">
        {AUTHOR_NAME}
      </a>
      {t.after}
    </p>
  )
}

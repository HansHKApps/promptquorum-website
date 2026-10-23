import type { ReactNode } from 'react'
import { renderEmphasis } from '@/components/hub-template/emphasis'
import { HUB_TONES } from '@/components/hub-template/palette'
import type { HubTone } from '@/components/hub-template/palette'
import { t, type DirUi } from './directory-ui-client'

// Hub-style hero for the directory page: same band, pill, highlighted title, CTAs, summary cards and
// flow diagram as HubTemplate (src/components/hub-template). Server-renderable, no hooks. The title is
// the article's own H1 text; only the highlighted part comes from the dictionary (and is skipped if
// it does not appear in the title verbatim).

const FLOW_TONES: HubTone[] = ['azure', 'violet', 'rose']

function renderTitle(title: string, highlight: string) {
  const at = title.indexOf(highlight)
  if (at < 0) return title
  return (
    <>
      {title.slice(0, at)}
      <span className={`inline-block rounded-[10px] px-2.5 ${HUB_TONES.rose.tint} ${HUB_TONES.rose.ink}`}>{highlight}</span>
      {title.slice(at + highlight.length)}
    </>
  )
}

export function DirectoryHero({
  ui,
  title,
  lead,
  toolCount,
  breadcrumb,
  meta,
}: {
  ui: DirUi
  title: string
  lead: ReactNode
  toolCount: number
  breadcrumb: ReactNode
  meta: ReactNode
}) {
  const a = HUB_TONES.violet
  const flow = [t('heroFlow1', ui), t('heroFlow2', ui), t('heroFlow3', ui)].map((s) => s.split('|'))
  const cards: { label: string; text: string; tone: HubTone }[] = [
    { label: t('heroCard1Label', ui), text: t('heroCard1Text', ui, { tools: toolCount }), tone: 'azure' },
    { label: t('heroCard2Label', ui), text: t('heroCard2Text', ui), tone: 'rose' },
  ]
  return (
    <section className={`border-b ${a.tint} ${a.edge}`}>
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-stretch gap-8 px-6 pb-12 pt-24">
        <div className="min-w-0 flex-[1_1_520px]">
          <nav aria-label="Breadcrumb" className="mb-3.5 text-[13px] text-text-secondary">{breadcrumb}</nav>
          <span className={`inline-block rounded-full border bg-white px-3 py-0.5 text-[13px] font-semibold ${a.solidBorder} ${a.ink}`}>
            {t('heroPill', ui)}
          </span>
          <h1 className="mb-3 mt-3.5 text-[28px] font-bold leading-[1.18] tracking-tight sm:text-[32px] lg:text-[34px]">
            {renderTitle(title, t('heroHighlight', ui))}
          </h1>
          <p className="mb-5 max-w-[600px] text-lg leading-relaxed text-text-secondary">{lead}</p>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <a
              href="#directory-all"
              className={`rounded-[10px] px-6 py-3.5 text-[17px] font-extrabold text-white ring-2 ring-white ring-offset-2 ring-offset-hub-violet-tint transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.35),inset_0_-2.5px_0_0_rgba(0,0,0,0.16),0_10px_22px_-6px_var(--hub-violet)] hover:shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.4),inset_0_-2.5px_0_0_rgba(0,0,0,0.22),0_15px_28px_-6px_var(--hub-violet)] ${a.solid}`}
            >
              {t('heroCtaBrowse', ui)}
            </a>
            <a href="#directory-replace" className={`rounded-[10px] border bg-white px-4 py-2.5 text-[14px] font-semibold ${a.edge} ${a.ink}`}>
              {t('heroCtaReplace', ui)}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {cards.map((card) => {
              const c = HUB_TONES[card.tone]
              return (
                <div key={card.label} className={`min-w-[220px] flex-[1_1_220px] rounded-xl border px-4 py-3.5 ${c.tint} ${c.edge}`}>
                  <div className={`mb-1 text-xs font-bold ${c.ink}`}>{card.label}</div>
                  <div className="text-sm leading-relaxed text-text-primary">{renderEmphasis(card.text)}</div>
                </div>
              )
            })}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-text-secondary">{meta}</div>
        </div>

        <div className="min-w-0 flex-[1_1_400px]">
          <div role="img" aria-label={t('heroFlowAria', ui)} className={`box-border rounded-2xl border bg-white p-5 lg:self-start ${a.edge}`}>
            <div className="mb-3.5 text-[13px] font-bold">{t('heroFlowTitle', ui)}</div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
              {flow.map(([label, ...chips], i) => {
                const c = HUB_TONES[FLOW_TONES[i]]
                return (
                  <div key={label} className="contents">
                    <div className="min-w-0 flex-1">
                      <div className={`mb-2 flex items-center gap-1.5 text-xs font-bold ${c.ink}`}>
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] text-white ${c.solid}`}>{i + 1}</span>
                        {label}
                      </div>
                      <div className="flex flex-row flex-wrap gap-2 sm:flex-col">
                        {chips.map((chip) => (
                          <div key={chip} className={`break-words rounded-lg px-2.5 py-2 text-[13px] font-semibold leading-snug ${c.tint} ${c.ink}`}>{chip}</div>
                        ))}
                      </div>
                    </div>
                    {i < flow.length - 1 && (
                      <div aria-hidden="true" className={`self-center rotate-90 text-xl sm:rotate-0 rtl:sm:-scale-x-100 ${a.solidText}`}>&rarr;</div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="mt-3.5 text-xs font-medium text-text-secondary">{t('heroFlowCaption', ui)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

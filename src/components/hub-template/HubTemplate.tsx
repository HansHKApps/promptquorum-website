import type { CSSProperties, ReactNode } from 'react'
import { AppLink as Link } from '@/components/AppLink'
import { renderEmphasis } from './emphasis'
import { HubExplore } from './HubExplore'
import { HubIcon } from './HubIcon'
import { HUB_TONES } from './palette'
import type { HubTone } from './palette'
import type {
  HubExploreLabels,
  HubFaqItem,
  HubFlowColumn,
  HubLatestCard,
  HubLink,
  HubStartCard,
  HubTile,
} from './types'

// Shared layout for the content hubs: hero, jump bar, start cards, explore tiles, a "why" band,
// latest, other hubs, optional overview, FAQ. One component for every hub and language; a hub
// supplies its content through props and picks its accent color. Do not fork this per language.
// Server component: all links are in the HTML. Only <HubExplore> hydrates.

interface SummaryCard {
  label: string
  text: string
  tone: HubTone
}

export interface HubTemplateProps {
  accent: HubTone
  breadcrumb: { homeLabel: string; homeHref: string; current: string }
  pill: string
  title: string
  /** Part of `title` to highlight. Must appear in `title` verbatim; the page text stays unchanged. */
  titleHighlight?: string
  intro: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  summaryCards: SummaryCard[]
  reviewed?: { dateTime: string; text: string }
  flow: { title: string; caption: string; ariaLabel: string; columns: HubFlowColumn[] }
  jump: { label: string; items: { id: string; label: string; tone: HubTone }[] }
  start: { title: string; intro: string; cards: HubStartCard[] }
  explore: { title: string; intro: string; tiles: HubTile[]; labels: HubExploreLabels; sortLocale: string }
  why: { title: string; intro: string; cards: { label: string; detail: string; tone: HubTone }[]; takeaway?: string }
  latest: { title: string; intro: string; cards: HubLatestCard[]; moreLabel: string; badgeNew: string; badgeUpdated: string }
  deeper: { title: string; intro: string; openLabel: string; links: HubLink[] }
  overview?: {
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    iframeSrc: string
    iframeTitle: string
  }
  faq: { heading: string; items: HubFaqItem[] }
  footer?: ReactNode
}

const MAX_WIDTH = 'mx-auto max-w-[1120px] px-6'

function SectionHeading({ index, tone, children }: { index: number; tone: HubTone; children: ReactNode }) {
  const t = HUB_TONES[tone]
  return (
    <div className="mb-2 flex items-center gap-3">
      <span className={`rounded-[10px] px-3.5 py-1 text-[15px] font-extrabold tracking-wide ${t.solid} text-white`}>{String(index).padStart(2, '0')}</span>
      <h2 className="text-[26px] font-bold tracking-tight text-text-primary sm:text-[28px]">{children}</h2>
    </div>
  )
}

function Badge({ kind, label }: { kind: 'new' | 'updated'; label: string }) {
  const classes =
    kind === 'new'
      ? 'border-hub-new-edge bg-hub-new-tint text-hub-new-ink'
      : 'border-hub-amber-edge bg-hub-amber-tint text-hub-amber-ink'
  return <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${classes}`}>{label}</span>
}

function renderTitle(title: string, highlight: string | undefined) {
  const at = highlight ? title.indexOf(highlight) : -1
  if (!highlight || at < 0) return title
  return (
    <>
      {title.slice(0, at)}
      <span className={`inline-block whitespace-nowrap rounded-[10px] px-2.5 ${HUB_TONES.rose.tint} ${HUB_TONES.rose.ink}`}>{highlight}</span>
      {title.slice(at + highlight.length)}
    </>
  )
}

export function HubTemplate(props: HubTemplateProps) {
  const a = HUB_TONES[props.accent]
  return (
    <div className="min-h-screen bg-white text-text-primary">
      {/* Hero */}
      <section className={`border-b ${a.tint} ${a.edge}`}>
        <div className={`${MAX_WIDTH} flex flex-wrap items-stretch gap-8 pb-12 pt-24`}>
          <div className="min-w-0 flex-[1_1_520px]">
            <nav aria-label="Breadcrumb" className="mb-3.5 text-[13px] text-text-secondary">
              <Link href={props.breadcrumb.homeHref} className="hover:underline">{props.breadcrumb.homeLabel}</Link>
              <span aria-hidden="true"> &nbsp;/&nbsp; </span>
              <span aria-current="page">{props.breadcrumb.current}</span>
            </nav>
            <span className={`inline-block rounded-full border bg-white px-3 py-0.5 text-[13px] font-semibold ${a.solidBorder} ${a.ink}`}>
              {props.pill}
            </span>
            <h1 className="mb-3 mt-3.5 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl">
              {renderTitle(props.title, props.titleHighlight)}
            </h1>
            <p className="mb-5 max-w-[600px] text-lg leading-relaxed text-text-secondary">{renderEmphasis(props.intro)}</p>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <Link
                href={props.primaryCta.href}
                style={{ '--cta-tone': `var(--hub-${props.accent})`, '--cta-offset': `var(--hub-${props.accent}-tint)` } as CSSProperties}
                className={`motion-safe:animate-hub-cta-pop relative rounded-[10px] px-6 py-3.5 text-[17px] font-extrabold text-white ring-2 ring-white ring-offset-2 ring-offset-[var(--cta-offset)] transition-[transform,box-shadow] duration-150 [animation-fill-mode:both] hover:-translate-y-0.5 shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.35),inset_0_-2.5px_0_0_rgba(0,0,0,0.16),0_10px_22px_-6px_var(--cta-tone)] hover:shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.4),inset_0_-2.5px_0_0_rgba(0,0,0,0.22),0_15px_28px_-6px_var(--cta-tone)] ${a.solid}`}
              >
                {props.primaryCta.label}
              </Link>
              <Link href={props.secondaryCta.href} className={`rounded-[10px] border bg-white px-4 py-2.5 text-[14px] font-semibold ${a.edge} ${a.ink}`}>
                {props.secondaryCta.label}
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {props.summaryCards.map((card) => {
                const t = HUB_TONES[card.tone]
                return (
                  <div key={card.label} className={`min-w-[220px] flex-[1_1_220px] rounded-xl border px-4 py-3.5 ${t.tint} ${t.edge}`}>
                    <div className={`mb-1 text-xs font-bold ${t.ink}`}>{card.label}</div>
                    <div className="text-sm leading-relaxed text-text-primary">{renderEmphasis(card.text)}</div>
                  </div>
                )
              })}
            </div>
            {props.reviewed && (
              <time
                dateTime={props.reviewed.dateTime}
                className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-indigo-300 bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-800"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {props.reviewed.text}
              </time>
            )}
          </div>

          <div className="min-w-0 flex-[1_1_400px]">
            <div role="img" aria-label={props.flow.ariaLabel} className={`box-border rounded-2xl border bg-white p-5 lg:self-start ${a.edge}`}>
              <div className="mb-3.5 text-[13px] font-bold">{props.flow.title}</div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
                {props.flow.columns.map((column, i) => {
                  const t = HUB_TONES[column.tone]
                  return (
                    <div key={column.label} className="contents">
                      <div className="min-w-0 flex-1">
                        <div className={`mb-2 flex items-center gap-1.5 text-xs font-bold ${t.ink}`}>
                          <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] text-white ${t.solid}`}>{i + 1}</span>
                          {column.label}
                        </div>
                        <div className="flex flex-row flex-wrap gap-2 sm:flex-col">
                          {column.chips.map((chip) => (
                            <div key={chip} className={`break-words rounded-lg px-2.5 py-2 text-[13px] font-semibold leading-snug ${t.tint} ${t.ink}`}>{chip}</div>
                          ))}
                        </div>
                      </div>
                      {i < props.flow.columns.length - 1 && (
                        <div aria-hidden="true" className={`self-center rotate-90 text-xl sm:rotate-0 ${a.solidText}`}>&rarr;</div>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="mt-3.5 text-xs font-medium text-text-secondary">{props.flow.caption}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Jump bar */}
      <div className="border-b border-border bg-white">
        <nav aria-label={props.jump.label} className={`${MAX_WIDTH} flex flex-wrap items-center gap-x-2.5 gap-y-2 py-2.5 text-sm`}>
          <span className="font-medium text-text-secondary">{props.jump.label}</span>
          {props.jump.items.map((item) => {
            const t = HUB_TONES[item.tone]
            return (
              <a key={item.id} href={`#${item.id}`} className={`rounded-full px-3.5 py-1.5 font-semibold ${t.tint} ${t.ink}`}>
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>

      <div>
        {/* 01 Start here */}
        <section id="start" className="bg-white">
          <div className={`${MAX_WIDTH} py-14`}>
            <SectionHeading index={1} tone="azure">{props.start.title}</SectionHeading>
            <p className="mb-5 text-base text-text-secondary">{props.start.intro}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {props.start.cards.map((card) => {
                const t = HUB_TONES[card.tone]
                return (
                  <Link key={card.href} href={card.href} className={`block rounded-[14px] border p-5 transition-shadow hover:shadow-md ${t.tint} ${t.edge}`}>
                    <div className="mb-3.5 flex items-center justify-between">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${t.solid}`}>
                        <HubIcon name={card.icon} />
                      </span>
                      {card.badge && (
                        <span className="rounded-full border border-hub-amber-edge bg-hub-amber-tint px-2.5 py-0.5 text-xs font-bold text-hub-amber-ink">{card.badge}</span>
                      )}
                    </div>
                    <div className="mb-1.5 text-lg font-bold leading-snug">{card.goal}</div>
                    <div className="text-sm leading-relaxed text-text-secondary">{card.title}</div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* 02 Explore */}
        <section id="explore" className="border-y border-border bg-hub-violet-tint">
          <div className={`${MAX_WIDTH} py-14`}>
            <SectionHeading index={2} tone="violet">{props.explore.title}</SectionHeading>
            <p className="mb-5 text-base text-text-secondary">{props.explore.intro}</p>
            <HubExplore tiles={props.explore.tiles} labels={props.explore.labels} sortLocale={props.explore.sortLocale} />
          </div>
        </section>

        {/* 03 Why */}
        <section id="why" className="border-t border-border bg-hub-indigo-tint">
          <div className={`${MAX_WIDTH} py-14`}>
            <SectionHeading index={3} tone="indigo">{props.why.title}</SectionHeading>
            <p className="mb-5 max-w-[640px] text-base leading-relaxed text-text-secondary">{renderEmphasis(props.why.intro)}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {props.why.cards.map((card) => {
                const t = HUB_TONES[card.tone]
                return (
                  <div key={card.label} className="rounded-[14px] border border-hub-indigo-edge bg-white p-5">
                    <div className={`mb-2 inline-block rounded-lg px-2.5 py-0.5 text-sm font-bold ${t.solid} text-white`}>{card.label}</div>
                    <div className="text-sm leading-relaxed text-text-secondary">{renderEmphasis(card.detail)}</div>
                  </div>
                )
              })}
            </div>
            {props.why.takeaway && (
              <div className="mt-5 max-w-[640px] rounded-r-xl border-l-4 border-hub-indigo bg-white px-5 py-4">
                <p className="text-sm leading-relaxed text-text-primary">{renderEmphasis(props.why.takeaway)}</p>
              </div>
            )}
          </div>
        </section>

        {/* 04 Latest */}
        <section id="latest" className="border-t border-border bg-white">
          <div className={`${MAX_WIDTH} py-14`}>
            <SectionHeading index={4} tone="orchid">{props.latest.title}</SectionHeading>
            <p className="mb-5 text-base text-text-secondary">{props.latest.intro}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {props.latest.cards.map((card) => {
                const t = HUB_TONES[card.tone]
                return (
                  <Link key={card.href} href={card.href} className={`block rounded-[14px] border p-5 transition-shadow hover:shadow-md ${t.tint} ${t.edge}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      {card.badge && <Badge kind={card.badge} label={card.badge === 'new' ? props.latest.badgeNew : props.latest.badgeUpdated} />}
                      <span className={`text-xs font-semibold ${t.ink}`}>{card.dateLabel}</span>
                    </div>
                    <div className="mb-1.5 mt-3 text-[17px] font-bold leading-snug">{card.title}</div>
                    {card.summary && <div className="line-clamp-3 text-sm leading-relaxed text-text-secondary">{card.summary}</div>}
                  </Link>
                )
              })}
            </div>
            <p className="mt-3.5">
              <a href="#explore" className={`text-sm font-semibold hover:underline ${HUB_TONES.violet.ink}`}>{props.latest.moreLabel} &rarr;</a>
            </p>
          </div>
        </section>

        {/* 05 Go deeper */}
        <section id="deeper" className="border-t border-border bg-hub-rose-tint">
          <div className={`${MAX_WIDTH} py-14`}>
            <SectionHeading index={5} tone="rose">{props.deeper.title}</SectionHeading>
            <p className="mb-5 text-base text-text-secondary">{props.deeper.intro}</p>
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
              {props.deeper.links.map((link) => {
                const t = HUB_TONES[link.tone]
                return (
                  <Link key={link.href} href={link.href} className={`block rounded-[14px] border p-[18px] transition-shadow hover:shadow-md ${t.tint} ${t.edge} ${t.ink}`}>
                    <div className="mb-1.5 text-[17px] font-bold leading-snug">{link.name}</div>
                    <div className="text-sm leading-relaxed">{link.line}</div>
                    <div className="mt-3 text-sm font-bold">{props.deeper.openLabel} &rarr;</div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* 06 Overview deck */}
        {props.overview && (
          <section className="border-t border-border bg-hub-blue-tint">
            <div className={`${MAX_WIDTH} pb-4 pt-14`}>
              <SectionHeading index={6} tone="blue">{props.overview.title}</SectionHeading>
              <img
                src={props.overview.imageSrc}
                alt={props.overview.imageAlt}
                width={1200}
                height={675}
                loading="lazy"
                className="mb-6 h-auto w-full rounded-2xl border border-border"
              />
              <p className="mb-4 max-w-3xl leading-relaxed text-text-secondary">{renderEmphasis(props.overview.description)}</p>
              <iframe
                src={props.overview.iframeSrc}
                title={props.overview.iframeTitle}
                className="aspect-video w-full rounded-xl border border-border"
                loading="lazy"
              />
            </div>
          </section>
        )}

        {/* 07 FAQ */}
        <section id="faq" className="border-t border-border bg-hub-cyan-tint">
          <div className={`${MAX_WIDTH} py-14`}>
            <SectionHeading index={7} tone="cyan">{props.faq.heading}</SectionHeading>
            <div className="rounded-[14px] border border-border bg-white">
              {props.faq.items.map((item) => (
                <details key={item.q} className="group border-b border-border last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span aria-hidden="true" className={`text-xl leading-none transition-transform group-open:rotate-45 ${HUB_TONES.violet.solidText}`}>+</span>
                  </summary>
                  <p className={`px-5 leading-relaxed text-text-secondary ${item.bullets ? 'pb-2' : 'pb-4'}`}>{renderEmphasis(item.a)}</p>
                  {item.bullets && (
                    <ul className="list-disc space-y-1 px-5 pb-4 ps-9 text-sm leading-relaxed text-text-secondary">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{renderEmphasis(bullet)}</li>
                      ))}
                    </ul>
                  )}
                </details>
              ))}
            </div>
          </div>
        </section>

        {props.footer && (
          <div className={`${MAX_WIDTH} pb-20`}>{props.footer}</div>
        )}
      </div>
    </div>
  )
}


import type { EvidenceKey, HandsOnImage, HandsOnTest } from '@/lib/hands-on-tests'
import type { Language } from '@/lib/blog/blogContent'
import { EvidenceChip } from './EvidenceChip'
import { TestFigure } from './TestFigure'
import { FindingsTable } from './FindingsTable'
import { featureReviewUrl } from '@/components/local-ai-directory/reviewLinks'

const H2 = 'mt-12 mb-4 border-t-2 border-text-primary pt-3 text-2xl font-bold text-text-primary'
const CARD = 'rounded-md border border-border bg-white p-5'
const STATUS: Record<string, string> = {
  Fail: 'border-red-400 text-red-700',
  Partial: 'border-slate-500 text-text-primary',
  Pass: 'border-emerald-500 text-emerald-700',
  'Not completed': 'border-slate-300 text-text-muted',
}

/** Fills {name} tokens in a ui string. */
function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m))
}

export function HandsOnTestView({ test, lang }: { test: HandsOnTest; lang: Language }) {
  const L = test.evidence_labels
  const ui = test.ui
  const prefix = lang === 'en' ? '' : `/${lang}`
  const review = featureReviewUrl(test.app.slug, lang)
  const chip = (k: EvidenceKey) => <EvidenceChip kind={k} label={L[k].label} />
  const img = (id: string): HandsOnImage => test.images.find((i) => i.id === id) as HandsOnImage
  const figNo: Record<string, number> = Object.fromEntries(test.images.map((i) => [i.id, i.figure]))
  const hero = test.images.find((i) => i.role === 'hero') as HandsOnImage
  const inChapters = new Set(test.chapters.flatMap((c) => c.items.map((it) => it[2]).filter(Boolean) as string[]))
  const gallery = test.images.filter((i) => i.role !== 'hero' && !inChapters.has(i.id))
  const figLinks = (ids: string[]) =>
    ids.length === 0
      ? '-'
      : ids.map((f, i) => (
          <span key={f}>
            {i > 0 && ', '}
            <a href={`#fig-${f}`} className="text-primary underline">{ui.fig_abbr} {figNo[f]}</a>
          </span>
        ))
  const maxGb = test.fit.scale ?? 60
  const momentsTitle = test.moments_title ?? ui.moments_h
  const momentsNav = test.moments_nav ?? ui.nav.moments
  const fitTitle = test.fit.title ?? ui.fit_h
  const fitNav = test.fit.nav ?? ui.nav.fit
  const hasBackground = test.background.length > 0

  return (
    <div className="space-y-0 text-text-secondary">
      <header>
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
          {fill(ui.kicker, { app: test.app.name, date: ui.date_line })}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-text-primary sm:text-4xl">{test.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">{test.dek}</p>
        <nav aria-label={ui.nav_aria} className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {(Object.keys(ui.nav) as (keyof typeof ui.nav)[])
            .filter((id) => id !== 'background' || hasBackground)
            .map((id) => [id, id === 'moments' ? momentsNav : id === 'fit' ? fitNav : ui.nav[id]])
            .map(([id, label]) => (
            <a key={id} href={`#${id}`} className="border-b border-border pb-0.5 text-text-primary hover:border-primary hover:text-primary">{label}</a>
          ))}
        </nav>
        <p className="mt-3 text-sm text-text-muted">
          {ui.related}{' '}
          {review && (
            <>
              <a href={review} className="text-primary underline">{fill(ui.review_link, { app: test.app.name })}</a>
              {' · '}
            </>
          )}
          <a href={`${prefix}/directory`} className="text-primary underline">{ui.directory_link}</a>
        </p>
      </header>

      <TestFigure image={hero} ui={ui} />

      <section id="verdict">
        <h2 className={H2}>{ui.verdict_h}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={CARD}><h3 className="mb-2 font-semibold text-text-primary">{ui.general_assessment}</h3><p>{test.verdict.general}</p></div>
          <div className={CARD}><h3 className="mb-2 font-semibold text-text-primary">{ui.fit_for_tester}</h3><p>{test.verdict.fit}</p></div>
        </div>
        <ul className="my-5 space-y-2">
          {test.tldr.map(([k, text]) => (
            <li key={text} className="grid grid-cols-1 gap-1 sm:grid-cols-[130px_1fr] sm:gap-3">{chip(k)}<span>{text}</span></li>
          ))}
        </ul>
        <div className={CARD}>
          <h3 className="mb-3 font-semibold text-text-primary">{ui.scorecard} <span className="ms-2 font-mono text-xs uppercase text-text-muted">{ui.status_prefix} {test.status}</span></h3>
          <ul className="space-y-3">
            {test.scores.map(([dim, score, why]) => (
              <li key={dim} className="grid gap-1 sm:grid-cols-[200px_110px_1fr] sm:items-center sm:gap-4">
                <span className="font-semibold text-text-primary">{dim}</span>
                <span className="flex items-center gap-2">
                  {score === null ? (
                    <span className="font-mono text-xs text-text-muted">{ui.na}</span>
                  ) : (
                    <>
                      <span role="img" aria-label={fill(ui.score_aria, { n: score })} className="inline-flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <i key={n} className={`block h-2 w-4 rounded-sm ${n <= score ? 'bg-primary' : 'bg-slate-200'}`} />
                        ))}
                      </span>
                      <span className="font-mono text-xs text-text-muted">{score}/5</span>
                    </>
                  )}
                </span>
                <span className="text-sm text-text-muted">{why}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-text-muted">{test.scores_note}</p>
        </div>
      </section>

      <section id="details">
        <h2 className={H2}>{ui.details_h}</h2>
        <dl className="grid gap-x-8 md:grid-cols-2">
          {test.meta.map(([k, v, ev]) => (
            <div key={k} className="grid grid-cols-1 gap-1 border-b border-border py-2.5 sm:grid-cols-[110px_1fr] sm:gap-3">
              <dt className="font-mono text-xs uppercase tracking-wide text-text-muted">{k}</dt>
              <dd>{v} {ev && chip(ev)}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 flex flex-wrap items-center gap-1.5 text-sm text-text-muted">
          <span>{ui.label_intro}</span>
          {(Object.keys(L) as EvidenceKey[]).map((k) => <span key={k}>{chip(k)}</span>)}
          <a href="#legend" className="text-primary underline">{ui.legend_link}</a>
        </p>
        <p className="mt-4 border-l-4 border-primary bg-white px-4 py-3 text-sm"><strong>{ui.disclosure_label}</strong> {test.disclosure}</p>
        <p className="mt-4 text-sm">
          <span className="font-semibold text-text-primary">{ui.raw_notes}</span>{' '}
          <span className="text-text-muted">{ui.to_be_added}</span>
        </p>
      </section>

      <section id="moments">
        <h2 className={H2}>{momentsTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {test.moments.map(([title, text, imgId, chapterId]) => {
            const im = imgId ? img(imgId) : null
            return (
              <a key={title} href={`#${chapterId}`} className={`flex flex-col overflow-hidden rounded-md border border-border bg-white hover:border-primary ${im ? '' : 'border-t-4 border-t-primary'}`}>
                {im && <img src={`/images/${im.file}`} alt="" loading="lazy" decoding="async" className="aspect-[16/10] w-full bg-slate-200 object-cover object-top" />}
                <span className="flex flex-col gap-1.5 p-4 text-sm">
                  <strong className="text-lg leading-tight text-text-primary">{title}</strong>
                  <span>{text}</span>
                  <em className="font-mono text-xs uppercase not-italic tracking-wide text-primary">{ui.see_context}</em>
                </span>
              </a>
            )
          })}
        </div>
        <blockquote className="mx-auto my-10 max-w-2xl border-s-4 border-primary ps-5">
          <p className="text-2xl font-semibold leading-snug text-text-primary">{test.quotes[0]}</p>
          <cite className="mt-2 block font-mono text-xs uppercase not-italic tracking-wide text-text-muted">{test.quote_note}</cite>
        </blockquote>
      </section>

      <section id="story">
        <h2 className={H2}>{ui.story_h}</h2>
        {test.chapters.map((ch) => (
          <div key={ch.id} id={ch.id} className="mb-8">
            <h3 className="mb-3 text-xl font-semibold text-text-primary">{ch.title}</h3>
            {ch.items.map(([k, text, figId], i) => (
              <div key={i}>
                <div className="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-[130px_1fr] sm:gap-3">
                  <div className="pt-0.5">{chip(k)}</div>
                  <p className="max-w-prose">{text}</p>
                </div>
                {figId && <div className="sm:ps-[142px]"><TestFigure image={img(figId)} ui={ui} /></div>}
              </div>
            ))}
          </div>
        ))}
      </section>

      <section id="claims">
        <h2 className={H2}>{ui.claims_h}</h2>
        <div className="overflow-x-auto rounded-md border border-border bg-white">
          <table className="min-w-[640px] w-full text-sm">
            <thead>
              <tr className="border-b-2 border-text-primary text-start text-xs uppercase tracking-wide text-text-muted">
                {ui.claims_cols.map((h) => <th key={h} className="px-3 py-2.5 font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {test.claims.map(([claim, src, obs, k]) => (
                <tr key={claim} className="border-b border-border align-top last:border-0">
                  <td className="px-3 py-2.5">{claim}</td><td className="px-3 py-2.5">{src}</td><td className="px-3 py-2.5">{obs}</td><td className="px-3 py-2.5">{chip(k)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="fit">
        <h2 className={H2}>{fitTitle}</h2>
        <div className="relative rounded-md border border-border bg-white px-5 pb-5 pt-11">
          <div
            className="pointer-events-none absolute bottom-4 top-9 border-l-2 border-dashed border-text-primary"
            style={{ insetInlineStart: `calc(1.25rem + (100% - 2.5rem) * ${test.fit.memory_gb / maxGb})` }}
          >
            <span className="absolute -top-6 start-1.5 whitespace-nowrap font-mono text-xs uppercase">{test.fit.memline ?? fill(ui.memory_line, { gb: test.fit.memory_gb })}</span>
          </div>
          <ul className="space-y-4">
            {test.fit.rows.map(([name, gb, label, k]) => {
              const over = gb > test.fit.memory_gb
              return (
                <li key={name} className="grid gap-1">
                  <span className="font-semibold text-text-primary">{name}</span>
                  <span className="block h-5 rounded bg-slate-200">
                    <span className={`block h-full rounded ${over ? 'bg-red-600' : 'bg-emerald-600'}`} style={{ width: `${(gb / maxGb) * 100}%` }} />
                  </span>
                  <span className="text-sm text-text-muted">
                    {label} <em className="mx-1.5 font-mono text-xs uppercase not-italic text-text-primary">{over ? (test.fit.above ?? fill(ui.above, { gb: test.fit.memory_gb })) : (test.fit.below ?? fill(ui.below, { gb: test.fit.memory_gb }))}</em> {chip(k)}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
        <p className="mt-3 text-sm text-text-muted">{test.fit.note}</p>
      </section>

      <section id="log">
        <h2 className={H2}>{ui.log_h}</h2>
        <div className="overflow-x-auto rounded-md border border-border bg-white">
          <table className="min-w-[760px] w-full text-sm">
            <thead>
              <tr className="border-b-2 border-text-primary text-start text-xs uppercase tracking-wide text-text-muted">
                {ui.log_cols.map((h) => <th key={h} className="px-3 py-2.5 font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {test.usage_log.map(([task, model, result, time, status, figs], i) => (
                <tr key={task} className="border-b border-border align-top last:border-0">
                  <td className="px-3 py-2.5 font-mono">{i + 1}</td><td className="px-3 py-2.5">{task}</td><td className="px-3 py-2.5">{model}</td>
                  <td className="px-3 py-2.5">{result}</td><td className="px-3 py-2.5">{time}</td>
                  <td className="px-3 py-2.5"><span className={`inline-block whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-semibold ${STATUS[status] ?? ''}`}>{ui.statuses[status] ?? status}</span></td>
                  <td className="px-3 py-2.5">{figLinks(figs)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="errors">
        <h2 className={H2}>{ui.errors_h}</h2>
        <ul className="space-y-2">
          {test.errors.map(([k, text]) => (
            <li key={text} className="grid grid-cols-1 gap-1 sm:grid-cols-[130px_1fr] sm:gap-3">{chip(k)}<span>{text}</span></li>
          ))}
        </ul>
      </section>

      <section id="findings">
        <h2 className={H2}>{ui.findings_h}</h2>
        <FindingsTable findings={test.findings} labels={L} figureNumbers={figNo} ui={ui} />
        <p className="mt-3 text-sm text-text-muted">{test.severity_note}</p>
      </section>

      <section id="audience">
        <h2 className={H2}>{ui.audience_h}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {([[ui.likely_fit, test.audience.fits], [ui.likely_poor_fit, test.audience.not_fits]] as const).map(([title, rows]) => (
            <div key={title}>
              <h3 className="mb-2 font-semibold text-text-primary">{title}</h3>
              <ul className="space-y-2">
                {rows.map(([k, text]) => (
                  <li key={text} className="grid grid-cols-1 gap-1 sm:grid-cols-[130px_1fr] sm:gap-3">{chip(k)}<span>{text}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-4"><strong className="text-text-primary">{ui.retest}</strong> {test.audience.retest}</p>
        <blockquote className="mx-auto my-10 max-w-2xl border-s-4 border-primary ps-5">
          <p className="text-2xl font-semibold leading-snug text-text-primary">{test.quotes[1]}</p>
          <cite className="mt-2 block font-mono text-xs uppercase not-italic tracking-wide text-text-muted">{test.quote_note}</cite>
        </blockquote>
      </section>

      {hasBackground && (
      <section id="background" className="rounded-md border border-dashed border-slate-400 bg-slate-50 p-5">
        <h2 className="mb-2 text-2xl font-bold text-text-primary">{ui.background_h}</h2>
        <p className="mb-3 text-sm text-text-muted">{test.background_intro}</p>
        <ul className="space-y-2">
          {test.background.map(([k, text]) => (
            <li key={text} className="grid grid-cols-1 gap-1 sm:grid-cols-[130px_1fr] sm:gap-3">{chip(k)}<span>{text}</span></li>
          ))}
        </ul>
      </section>
      )}

      {gallery.length > 0 && (
        <section id="gallery">
          <h2 className={H2}>{ui.gallery_h}</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
            {gallery.map((g) => <TestFigure key={g.id} image={g} ui={ui} />)}
          </div>
        </section>
      )}

      <footer id="legend">
        <h2 className={H2}>{ui.legend_h}</h2>
        <dl className="grid gap-x-8 md:grid-cols-2">
          {(Object.keys(L) as EvidenceKey[]).map((k) => (
            <div key={k} className="grid grid-cols-1 gap-1 border-b border-border py-2.5 sm:grid-cols-[140px_1fr] sm:gap-3">
              <dt>{chip(k)}</dt><dd className="text-sm">{L[k].meaning}</dd>
            </div>
          ))}
        </dl>
        <h3 className="mb-2 mt-6 font-semibold text-text-primary">{ui.sources_h}</h3>
        <ul className="mb-4 list-disc space-y-1 ps-5 text-sm">{test.sources.map((s) => <li key={s}>{s}</li>)}</ul>
        <p className="font-mono text-xs text-text-muted">{fill(ui.footer_line, { id: test.id, version: test.standard_version })}</p>
      </footer>
    </div>
  )
}

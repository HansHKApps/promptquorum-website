import { readFileSync } from 'node:fs'
import path from 'node:path'
import type { Language } from '@/lib/blog/blogContent'
import { SITE, issuePath, LICENSE_NAME, LICENSE_URL, type Issue } from '@/lib/state-of-local-ai/issues'
import { SOLA_STRINGS } from '@/lib/state-of-local-ai/i18n'
import type { SolaExtras } from '@/lib/state-of-local-ai/i18n/types'
import { CARD, localePath } from '@/components/state-of-local-ai/shared'
import { CopyButton } from '@/components/state-of-local-ai/CopyButton'

type Symbol = { file: string; name: string; alt: string }
type Persona = Symbol & { who: string; care: string; links: { label: string; hash: string }[] }

const BASE = '/state-of-local-ai/2026-q4/symbols'

const coreSymbols = (x: SolaExtras): Symbol[] => [
  { file: 'chicken', ...x.symbols.chicken },
  { file: 'egg', ...x.symbols.egg },
  { file: 'chicken-egg-pair', ...x.symbols.pair },
  { file: 'few-chickens', ...x.symbols.fewChickens },
  { file: 'even-fewer-eggs', ...x.symbols.fewEggs },
]

const personas = (x: SolaExtras): Persona[] => [
  { file: 'persona-home-user', ...x.personas.home, links: [{ label: x.linkApps, hash: 's4' }] },
  { file: 'persona-developer', ...x.personas.developer, links: [{ label: x.linkHardware, hash: 's3' }, { label: x.linkLocalVsFrontier, hash: 's5' }] },
  { file: 'persona-enterprise-it', ...x.personas.enterprise, links: [{ label: x.linkHardware, hash: 's3' }, { label: x.linkTrade, hash: 's7' }, { label: x.linkOutlook, hash: 's8' }] },
  { file: 'persona-journalist', ...x.personas.journalist, links: [{ label: x.linkPressKit, hash: 'press' }, { label: x.linkClaimRegister, hash: 's9' }, { label: x.linkSources, hash: 's11' }] },
]

const svgText = (file: string) => readFileSync(path.join(process.cwd(), 'public', BASE, `${file}.svg`), 'utf8')

function SymbolCard({ s, pageUrl, x, caption }: { s: Symbol; pageUrl: string; x: SolaExtras; caption?: React.ReactNode }) {
  const url = `${SITE}${BASE}/${s.file}.svg`
  const embed = `<a href="${pageUrl}"><img src="${url}" alt="${s.alt}" height="120"></a>`
  return (
    <figure className="m-0 rounded-lg border border-hub-violet-edge bg-white p-4">
      <img src={`${BASE}/${s.file}.svg`} alt={s.alt} className="mx-auto h-28 w-auto max-w-full" loading="lazy" />
      <figcaption className="mt-3 text-sm">
        <b>{s.name}</b>
        {caption}
        <span className="no-print mt-2 flex flex-wrap gap-2">
          <CopyButton text={svgText(s.file)} label={x.copySvg} doneLabel={x.copied} />
          <CopyButton text={embed} label={x.copyHtml} doneLabel={x.copied} />
          <a href={`${BASE}/${s.file}.svg`} download className="rounded-md border border-hub-violet-edge bg-white px-3 py-1 text-xs font-semibold hover:bg-hub-violet-tint">{x.download}</a>
        </span>
      </figcaption>
    </figure>
  )
}

/** Chicken and egg symbols for reuse, grouped by the reader each one stands for. */
export function SymbolKit({ issue, evidencePath, lang = 'en' }: { issue: Issue; evidencePath: string; lang?: Language }) {
  const x = SOLA_STRINGS[lang].extras
  const pageUrl = `${SITE}${localePath(issuePath(issue), lang)}`
  return (
    <section id="symbols" aria-labelledby="symbols-h" className={`${CARD} my-8`}>
      <h2 id="symbols-h" className="!mt-0 !text-xl">{x.symbolsTitle}</h2>
      <p>
        {x.symbolsA}
        <a href={LICENSE_URL} rel="license noopener" target="_blank">{LICENSE_NAME}</a>
        {x.symbolsB}
      </p>

      <h3 className="!mt-6 !text-base">{x.whichReader}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {personas(x).map((p) => (
          <SymbolCard
            key={p.file}
            s={p}
            pageUrl={pageUrl}
            x={x}
            caption={
              <>
                {' '}· {p.who}
                <span className="mt-1 block text-text-secondary">{p.care}</span>
                <span className="mt-1 block">
                  {p.links.map((l, i) => (
                    <span key={l.hash}>{i > 0 && ' · '}<a href={l.hash === 'press' ? '#press' : `${evidencePath}#${l.hash}`}>{l.label}</a></span>
                  ))}
                </span>
              </>
            }
          />
        ))}
      </div>

      <h3 className="!mt-6 !text-base">{x.basicSet}</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreSymbols(x).map((s) => <SymbolCard key={s.file} s={s} pageUrl={pageUrl} x={x} />)}
      </div>

      <p className="!mb-0 mt-5 flex flex-wrap items-center gap-3 text-sm no-print">
        <a href={issue.files.symbolsZip} download className="sola-btn inline-block rounded-lg bg-hub-violet px-4 py-2 text-sm font-semibold hover:opacity-90">{x.downloadAll}</a>
        <a href={`${BASE}/symbols.json`} download>{x.manifestLink}</a>
      </p>
    </section>
  )
}

import { readFileSync } from 'node:fs'
import path from 'node:path'
import { SITE, issuePath, LICENSE_NAME, LICENSE_URL, type Issue } from '@/lib/state-of-local-ai/issues'
import { CARD } from '@/components/state-of-local-ai/shared'
import { CopyButton } from '@/components/state-of-local-ai/CopyButton'

type Symbol = { file: string; name: string; alt: string }
type Persona = Symbol & { who: string; care: string; links: { label: string; hash: string }[] }

const BASE = '/state-of-local-ai/2026-q4/symbols'

const CORE: Symbol[] = [
  { file: 'chicken', name: 'Chicken', alt: 'A violet chicken: a computer that can run a good local AI model' },
  { file: 'egg', name: 'Egg', alt: 'A cream egg: a local AI app worth using' },
  { file: 'chicken-egg-pair', name: 'Chicken and egg', alt: 'A chicken and an egg side by side: hardware and apps' },
  { file: 'few-chickens', name: 'Few chickens', alt: 'Three small chickens in a row (illustrative, not to scale)' },
  { file: 'even-fewer-eggs', name: 'Even fewer eggs', alt: 'One egg and two empty dashed nests (illustrative, not to scale)' },
]

const PERSONAS: Persona[] = [
  {
    file: 'persona-home-user', name: 'Egg-seeker', who: 'Home user', alt: 'A green egg with a house on it',
    care: 'You want to download an app and use it, without a terminal. Your question is whether any egg is worth the trip.',
    links: [{ label: 'Apps and willingness to pay', hash: 's4' }],
  },
  {
    file: 'persona-developer', name: 'Chicken-keeper', who: 'Developer', alt: 'A violet chicken with code brackets on its body',
    care: 'You already run models and are at home in a terminal. The report treats developers as the early market (an assumption it labels).',
    links: [{ label: 'The hardware base', hash: 's3' }, { label: 'Local versus frontier models', hash: 's5' }],
  },
  {
    file: 'persona-enterprise-it', name: 'Flock manager', who: 'Enterprise IT', alt: 'An amber chicken with a shield on its body',
    care: 'You buy for fleets and budgets. Hardware prices, trade and supply, and the outlook with its assumptions are for you.',
    links: [{ label: 'The hardware base', hash: 's3' }, { label: 'Trade and supply chain', hash: 's7' }, { label: 'Outlook', hash: 's8' }],
  },
  {
    file: 'persona-journalist', name: 'Egg-checker', who: 'Journalist or analyst', alt: 'A red egg with quotation marks on it',
    care: 'You quote figures and check sources. Claims carry an evidence label, and the figures come from numbered sources.',
    links: [{ label: 'Press kit', hash: 'press' }, { label: 'Claim register', hash: 's9' }, { label: 'Sources', hash: 's11' }],
  },
]

const svgText = (file: string) => readFileSync(path.join(process.cwd(), 'public', BASE, `${file}.svg`), 'utf8')

function SymbolCard({ s, pageUrl, caption }: { s: Symbol; pageUrl: string; caption?: React.ReactNode }) {
  const url = `${SITE}${BASE}/${s.file}.svg`
  const embed = `<a href="${pageUrl}"><img src="${url}" alt="${s.alt}" height="120"></a>`
  return (
    <figure className="m-0 rounded-lg border border-hub-violet-edge bg-white p-4">
      <img src={`${BASE}/${s.file}.svg`} alt={s.alt} className="mx-auto h-28 w-auto max-w-full" loading="lazy" />
      <figcaption className="mt-3 text-sm">
        <b>{s.name}</b>
        {caption}
        <span className="no-print mt-2 flex flex-wrap gap-2">
          <CopyButton text={svgText(s.file)} label="Copy SVG" />
          <CopyButton text={embed} label="Copy HTML" />
          <a href={`${BASE}/${s.file}.svg`} download className="rounded-md border border-hub-violet-edge bg-white px-3 py-1 text-xs font-semibold hover:bg-hub-violet-tint">Download</a>
        </span>
      </figcaption>
    </figure>
  )
}

/** Chicken and egg symbols for reuse, grouped by the reader each one stands for. */
export function SymbolKit({ issue, evidencePath }: { issue: Issue; evidencePath: string }) {
  const pageUrl = `${SITE}${issuePath(issue)}`
  return (
    <section id="symbols" aria-labelledby="symbols-h" className={`${CARD} my-8`}>
      <h2 id="symbols-h" className="!mt-0 !text-xl">Chicken and egg symbols, and who they are for</h2>
      <p>
        In this report a chicken is a computer that can run a good local AI model, and an egg is an app worth using.
        Take the symbols for your own article, slide or post. They are licensed under{' '}
        <a href={LICENSE_URL} rel="license noopener" target="_blank">{LICENSE_NAME}</a>: name the author and PromptQuorum, link to this page, and say if you changed anything.
        The few-chickens and few-eggs graphics are illustrations, not charts; they show no data.
      </p>

      <h3 className="!mt-6 !text-base">Which reader are you?</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {PERSONAS.map((p) => (
          <SymbolCard
            key={p.file}
            s={p}
            pageUrl={pageUrl}
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

      <h3 className="!mt-6 !text-base">The basic set</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CORE.map((s) => <SymbolCard key={s.file} s={s} pageUrl={pageUrl} />)}
      </div>

      <p className="!mb-0 mt-5 flex flex-wrap items-center gap-3 text-sm no-print">
        <a href={issue.files.symbolsZip} download className="sola-btn inline-block rounded-lg bg-hub-violet px-4 py-2 text-sm font-semibold hover:opacity-90">Download all (zip)</a>
        <a href={`${BASE}/symbols.json`} download>symbols.json (names, descriptions, credit)</a>
      </p>
    </section>
  )
}

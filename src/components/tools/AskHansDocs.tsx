// "How Ask Hans works" sections on /askhans, in the same format as the MCP page (/mcp-stats): numbered sections,
// tool cards with an example question, a worked example, how to read the answers. Server component.
// The tool cards reuse the MCP page copy because Ask Hans calls the very same tools (see ask-hans-docs-i18n.ts).

import { AppLink as Link } from '@/components/AppLink'
import type { Language } from '@/lib/blog/blogContent'
import { ASK_HANS_LIMITS } from '@/lib/askhans/config'
import { HUB_TONES, type HubTone } from '@/components/hub-template/palette'
import { SectionHeading, toolCopy } from './McpStatsContent'
import { t as tMcp } from './mcp-stats-i18n'
import { TOOL_GROUPS, TOOL_GROUP_OF, tDocs, toolAsk, type ToolGroup } from './mcp-docs-i18n'
import { ASK_HANS_TOOL_NAMES, tDocsAsk } from './ask-hans-docs-i18n'

const MAX_WIDTH = 'mx-auto max-w-[1120px] px-6'
const GROUP_ORDER: ToolGroup[] = ['find', 'decide', 'learn']
const GROUP_TONE: Record<ToolGroup, HubTone> = { find: 'azure', decide: 'violet', learn: 'orchid', profile: 'rose' }
const CYCLE: HubTone[] = ['violet', 'azure', 'indigo', 'orchid', 'rose']

function localizedPath(lang: Language, path: string): string {
  return lang === 'en' ? path : `/${lang}${path}`
}

export function AskHansDocs({ lang }: { lang: Language }) {
  const limits = { messages: ASK_HANS_LIMITS.maxMessagesPerVisit, chars: ASK_HANS_LIMITS.maxMessageChars }
  const steps = ['step1', 'step2', 'step3', 'step4'] as const
  const jump: { id: string; label: string; tone: HubTone }[] = [
    { id: 'how', label: tDocsAsk('startHeading', lang), tone: 'azure' },
    { id: 'lookup', label: tDocsAsk('toolsHeading', lang), tone: 'violet' },
    { id: 'example', label: tMcp('exampleHeading', lang), tone: 'indigo' },
    { id: 'trust', label: tDocsAsk('trustHeading', lang), tone: 'rose' },
  ]

  return (
    <>
      <div className="border-b border-border bg-white">
        <nav aria-label="Sections" className={`${MAX_WIDTH} flex flex-wrap items-center gap-x-2.5 gap-y-2 py-2.5 text-sm`}>
          {jump.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`rounded-full px-3.5 py-1.5 font-semibold ${HUB_TONES[item.tone].tint} ${HUB_TONES[item.tone].ink}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* 01 How it works */}
      <section id="how" className="scroll-mt-20 bg-white">
        <div className={`${MAX_WIDTH} py-14`}>
          <SectionHeading index={1} tone="azure">{tDocsAsk('startHeading', lang)}</SectionHeading>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className={`rounded-[14px] border p-6 ${HUB_TONES.azure.tint} ${HUB_TONES.azure.edge}`}>
              <p className="text-base leading-relaxed text-text-primary">{tDocsAsk('startBody', lang)}</p>
            </div>
            <div className={`rounded-[14px] border p-6 ${HUB_TONES.violet.tint} ${HUB_TONES.violet.edge}`}>
              <h3 className={`mb-3 text-lg font-bold ${HUB_TONES.violet.ink}`}>{tDocsAsk('stepsHeading', lang)}</h3>
              <ol className="space-y-2.5">
                {steps.map((k, i) => (
                  <li key={k} className="flex items-start gap-3">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${HUB_TONES[CYCLE[i % CYCLE.length]].solid}`}>{i + 1}</span>
                    <span className="pt-0.5 text-sm leading-relaxed text-text-primary">{tDocsAsk(k, lang)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 02 What it can look up */}
      <section id="lookup" className="scroll-mt-20 border-y border-border bg-hub-violet-tint">
        <div className={`${MAX_WIDTH} py-14`}>
          <SectionHeading index={2} tone="violet">{tDocsAsk('toolsHeading', lang)}</SectionHeading>
          <p className="mb-2 max-w-[700px] text-base leading-relaxed text-text-secondary">{tDocsAsk('toolsIntro', lang)}</p>
          <Link href={localizedPath(lang, '/mcp-stats')} className={`text-sm font-semibold underline ${HUB_TONES.violet.ink}`}>{tDocsAsk('mcpLink', lang)}</Link>
          {GROUP_ORDER.map((group) => {
            const c = HUB_TONES[GROUP_TONE[group]]
            return (
              <div key={group} className="mt-8">
                <h3 className={`mb-3 inline-block rounded-lg px-3 py-1 text-sm font-bold uppercase tracking-wide text-white ${c.solid}`}>
                  {TOOL_GROUPS[group][lang] ?? TOOL_GROUPS[group].en}
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {ASK_HANS_TOOL_NAMES.filter((name) => TOOL_GROUP_OF[name] === group).map((name) => {
                    const copy = toolCopy(name, lang)
                    return (
                      <li key={name} className={`rounded-[14px] border bg-white p-5 ${c.edge}`}>
                        <span dir="ltr" className={`block font-mono text-xs font-bold ${c.ink}`}>{name}</span>
                        <div className="mb-1.5 mt-1 text-[17px] font-bold leading-snug">{copy.title}</div>
                        <p className="text-sm leading-relaxed text-text-secondary">{copy.desc}</p>
                        <p className={`mt-3 rounded-lg px-3 py-2 text-sm leading-relaxed ${c.tint}`}>
                          <span className={`font-semibold ${c.ink}`}>{tDocs('askLabel', lang)}:</span>{' '}
                          <q>{toolAsk(name, lang)}</q>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* 03 Worked example (same question, tool and links as the MCP page) */}
      <section id="example" className="scroll-mt-20 bg-hub-indigo-tint">
        <div className={`${MAX_WIDTH} py-14`}>
          <SectionHeading index={3} tone="indigo">{tMcp('exampleHeading', lang)}</SectionHeading>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-[14px] border border-hub-indigo-edge bg-white p-5">
                <div className={`mb-2 inline-block rounded-lg px-2.5 py-0.5 text-sm font-bold text-white ${HUB_TONES.indigo.solid}`}>{tMcp('exampleYouLabel', lang)}</div>
                <p className="text-sm leading-relaxed text-text-primary">{tMcp('exampleQuestion', lang)}</p>
              </div>
              <p className="px-1 text-sm text-text-secondary">
                {tMcp('exampleToolsLabel', lang)}: <code dir="ltr" className={`rounded-md px-2 py-0.5 font-mono text-xs font-bold ${HUB_TONES.indigo.tint} ${HUB_TONES.indigo.ink}`}>recommend_stack</code>
              </p>
            </div>
            <div className="rounded-[14px] border border-hub-indigo-edge bg-white p-5">
              <div className={`mb-2 inline-block rounded-lg px-2.5 py-0.5 text-sm font-bold text-white ${HUB_TONES.orchid.solid}`}>Ask Hans</div>
              <p className="text-sm leading-relaxed text-text-primary">{tMcp('exampleAnswer', lang)}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-text-muted">{tMcp('exampleLinksLabel', lang)}</p>
              <ul className="mt-1 list-disc space-y-1 ps-5 text-sm">
                <li><Link href={localizedPath(lang, '/power-local-llm/anythingllm-review')} className={`font-semibold underline ${HUB_TONES.indigo.ink}`}>{tMcp('exampleLinkReview', lang)}</Link></li>
                <li><Link href={localizedPath(lang, '/directory?category=document-pdf-chat')} className={`font-semibold underline ${HUB_TONES.indigo.ink}`}>{tMcp('exampleLinkDirectory', lang)}</Link></li>
                <li><Link href={localizedPath(lang, '/power-local-llm/local-llm-knowledge-retrieval-compared')} className={`font-semibold underline ${HUB_TONES.indigo.ink}`}>{tMcp('exampleLinkCompared', lang)}</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-5 max-w-[720px] rounded-r-xl border-s-4 border-hub-indigo bg-white px-5 py-4">
            <p className="text-sm leading-relaxed text-text-primary">{tDocsAsk('exampleNote', lang)}</p>
          </div>
        </div>
      </section>

      {/* 04 Trust and limits */}
      <section id="trust" className="scroll-mt-20 border-t border-border bg-hub-rose-tint">
        <div className={`${MAX_WIDTH} py-14`}>
          <SectionHeading index={4} tone="rose">{tDocsAsk('trustHeading', lang)}</SectionHeading>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(['trust1', 'trust2', 'trust3', 'trust4', 'trust5'] as const).map((k, i) => (
              <li key={k} className="flex gap-3 rounded-[14px] border border-hub-rose-edge bg-white p-5">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${HUB_TONES[CYCLE[i % CYCLE.length]].solid}`}>{i + 1}</span>
                <span className="text-sm leading-relaxed text-text-secondary">{tDocsAsk(k, lang, limits)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 max-w-[720px] rounded-r-xl border-s-4 border-hub-rose bg-white px-5 py-4">
            <h3 className={`mb-1 text-sm font-bold ${HUB_TONES.rose.ink}`}>{tDocsAsk('limitsHeading', lang)}</h3>
            <p className="text-sm leading-relaxed text-text-primary">{tDocsAsk('limitsBody', lang)}</p>
          </div>
        </div>
      </section>
    </>
  )
}

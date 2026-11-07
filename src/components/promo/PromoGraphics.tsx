// Big inline SVG illustrations for the four promo targets. Generic shapes (no third-party logos) and NO text inside
// the SVG, so every word stays in HTML where it translates and stays accessible. Drawn for the bold colored
// slot background: white and tint fills from the hub palette tokens (CSS variables through Tailwind classes), no hex.
import type { PromoTarget } from '@/lib/promo/types'

const common = { viewBox: '0 0 160 128', 'aria-hidden': true, focusable: false, className: 'h-28 w-36 shrink-0 drop-shadow-lg sm:h-32 sm:w-40' } as const

/** Grid of app tiles; three show a "runs" check, two a warning dot, one a cross: runs / marginal / won't run. */
function DirectoryGraphic() {
  const cells = [
    { x: 6, y: 8, s: 'ok' }, { x: 56, y: 8, s: 'ok' }, { x: 106, y: 8, s: 'mid' },
    { x: 6, y: 66, s: 'mid' }, { x: 56, y: 66, s: 'ok' }, { x: 106, y: 66, s: 'no' },
  ] as const
  return (
    <svg {...common}>
      {cells.map((c) => (
        <g key={`${c.x}-${c.y}`}>
          <rect x={c.x} y={c.y} width="48" height="52" rx="10" className="fill-white" />
          <rect x={c.x + 8} y={c.y + 8} width="32" height="20" rx="6" className="fill-hub-cyan-tint" />
          <rect x={c.x + 8} y={c.y + 33} width="20" height="4" rx="2" className="fill-hub-cyan-edge" />
          <circle cx={c.x + 36} cy={c.y + 40} r="6" className={c.s === 'ok' ? 'fill-hub-olive' : c.s === 'mid' ? 'fill-hub-amber' : 'fill-hub-rose'} />
          {c.s === 'ok' && <path d={`M${c.x + 33} ${c.y + 40}l2 2.4 4-4.8`} className="stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
        </g>
      ))}
    </svg>
  )
}

/** Chat: a question bubble, then a big answer card with a recommended app, source chips and a check. */
function AskHansGraphic() {
  return (
    <svg {...common}>
      <rect x="62" y="6" width="92" height="30" rx="15" className="fill-white/30" />
      <rect x="76" y="17" width="56" height="8" rx="4" className="fill-white" />
      <rect x="6" y="46" width="124" height="76" rx="14" className="fill-white" />
      <rect x="18" y="58" width="30" height="30" rx="9" className="fill-hub-violet" />
      <path d="M33 64l2.6 7.4 7.4 2.6-7.4 2.6L33 84l-2.6-7.4L23 74l7.4-2.6L33 64z" className="fill-white" />
      <rect x="56" y="60" width="62" height="8" rx="4" className="fill-hub-violet-ink" />
      <rect x="56" y="74" width="48" height="6" rx="3" className="fill-hub-violet-edge" />
      <rect x="18" y="98" width="30" height="14" rx="7" className="fill-hub-orchid-tint" />
      <rect x="54" y="98" width="30" height="14" rx="7" className="fill-hub-orchid-tint" />
      <circle cx="108" cy="105" r="9" className="fill-hub-olive" />
      <path d="M103.5 105l3 3.2 5.5-6.4" className="stroke-white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

/** Stacked report sheets with a large bolt and three download chips. */
function PowerGraphic() {
  return (
    <svg {...common}>
      <rect x="40" y="6" width="84" height="100" rx="12" className="fill-white/30" />
      <rect x="26" y="16" width="84" height="100" rx="12" className="fill-white/60" />
      <rect x="8" y="26" width="84" height="98" rx="12" className="fill-white" />
      <path d="M58 40L30 82h20l-5 32 30-44H55l3-30z" className="fill-hub-orange" />
      <rect x="104" y="44" width="48" height="20" rx="10" className="fill-hub-amber-tint" />
      <rect x="104" y="70" width="48" height="20" rx="10" className="fill-hub-amber-tint" />
      <rect x="104" y="96" width="48" height="20" rx="10" className="fill-hub-amber-tint" />
      <rect x="114" y="51" width="28" height="6" rx="3" className="fill-hub-orange" />
      <rect x="114" y="77" width="28" height="6" rx="3" className="fill-hub-orange" />
      <rect x="114" y="103" width="28" height="6" rx="3" className="fill-hub-orange" />
    </svg>
  )
}

/** Two nodes joined by a glowing plug: PromptQuorum on the left, "your AI" on the right. */
function McpGraphic() {
  return (
    <svg {...common}>
      <rect x="4" y="34" width="52" height="60" rx="14" className="fill-white" />
      <rect x="14" y="46" width="32" height="8" rx="4" className="fill-hub-indigo" />
      <rect x="14" y="60" width="24" height="6" rx="3" className="fill-hub-indigo-edge" />
      <rect x="14" y="72" width="28" height="6" rx="3" className="fill-hub-indigo-edge" />
      <rect x="104" y="34" width="52" height="60" rx="14" className="fill-white/30" />
      <circle cx="130" cy="64" r="14" className="fill-white" />
      <path d="M130 55v18M121 64h18" className="stroke-hub-indigo" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M56 64h14M90 64h14" className="stroke-white" strokeWidth="5" strokeLinecap="round" fill="none" />
      <rect x="68" y="50" width="24" height="28" rx="8" className="fill-hub-indigo-tint" />
      <rect x="76" y="58" width="8" height="12" rx="3" className="fill-hub-indigo" />
    </svg>
  )
}

export function PromoGraphic({ target }: { target: PromoTarget }) {
  switch (target) {
    case 'directory': return <DirectoryGraphic />
    case 'ask-hans': return <AskHansGraphic />
    case 'power-mode': return <PowerGraphic />
    case 'mcp': return <McpGraphic />
  }
}

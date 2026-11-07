// Inline SVG graphics for the four promo targets: generic shapes only (no third-party logos), and NO text in the
// SVG, so every word stays in HTML where it translates and stays accessible. Colors are theme tokens through
// Tailwind classes (CSS variables), so light and dark mode follow the site. Decorative: aria-hidden.
import type { PromoTarget } from '@/lib/promo/types'

const common = { viewBox: '0 0 96 72', 'aria-hidden': true, focusable: false, className: 'h-[72px] w-24 shrink-0' } as const

/** Grid of app tiles with three status badges (runs well / marginal / won't run) as shapes. */
function DirectoryGraphic() {
  const tiles = [0, 1, 2, 3, 4, 5]
  const badge = ['fill-primary', 'fill-primary/45', 'fill-muted-foreground/45', 'fill-primary', 'fill-muted-foreground/45', 'fill-primary/45']
  return (
    <svg {...common}>
      {tiles.map((i) => {
        const x = 4 + (i % 3) * 30
        const y = 6 + Math.floor(i / 3) * 32
        return (
          <g key={i}>
            <rect x={x} y={y} width="26" height="26" rx="5" className="fill-background stroke-primary/30" strokeWidth="1.5" />
            <rect x={x + 5} y={y + 5} width="10" height="10" rx="2.5" className="fill-primary/25" />
            <circle cx={x + 20} cy={y + 20} r="3.2" className={badge[i]} />
          </g>
        )
      })}
    </svg>
  )
}

/** Chat bubbles: one question, one answer with source chips and a confidence marker. */
function AskHansGraphic() {
  return (
    <svg {...common}>
      <rect x="30" y="4" width="62" height="16" rx="8" className="fill-primary/25" />
      <rect x="38" y="10" width="40" height="4" rx="2" className="fill-primary/60" />
      <rect x="4" y="26" width="76" height="42" rx="8" className="fill-background stroke-primary/30" strokeWidth="1.5" />
      <rect x="12" y="34" width="52" height="4" rx="2" className="fill-muted-foreground/40" />
      <rect x="12" y="42" width="40" height="4" rx="2" className="fill-muted-foreground/40" />
      <rect x="12" y="54" width="16" height="8" rx="4" className="fill-primary/35" />
      <rect x="32" y="54" width="16" height="8" rx="4" className="fill-primary/35" />
      <circle cx="68" cy="58" r="5" className="fill-primary" />
    </svg>
  )
}

/** Layered report sheets with a bolt and three download chips. */
function PowerGraphic() {
  return (
    <svg {...common}>
      <rect x="18" y="4" width="50" height="50" rx="5" className="fill-primary/15" />
      <rect x="12" y="10" width="50" height="50" rx="5" className="fill-primary/25" />
      <rect x="6" y="16" width="50" height="50" rx="5" className="fill-background stroke-primary/40" strokeWidth="1.5" />
      <path d="M33 24l-9 14h7l-2 11 10-15h-7l1-10z" className="fill-primary" />
      <rect x="64" y="22" width="26" height="10" rx="5" className="fill-primary/35" />
      <rect x="64" y="36" width="26" height="10" rx="5" className="fill-primary/35" />
      <rect x="64" y="50" width="26" height="10" rx="5" className="fill-primary/35" />
    </svg>
  )
}

/** Node-and-plug diagram. */
function McpGraphic() {
  return (
    <svg {...common}>
      <rect x="4" y="22" width="26" height="28" rx="6" className="fill-background stroke-primary/40" strokeWidth="1.5" />
      <rect x="66" y="22" width="26" height="28" rx="6" className="fill-primary/25 stroke-primary/40" strokeWidth="1.5" />
      <path d="M30 36h12M54 36h12" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <rect x="42" y="28" width="12" height="16" rx="3" className="fill-primary" />
      <circle cx="17" cy="36" r="4" className="fill-primary/50" />
      <circle cx="79" cy="36" r="4" className="fill-primary" />
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

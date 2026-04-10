'use client'

const PRIMARY = '#6750A4'
const TERTIARY = '#7D5260'
const TEXT = '#1C1B1F'

export function LLMSpeedTiers() {
  const tiers = [
    { label: 'Laptop CPU', min: 15, max: 25, color: '#FFB3BA' },
    { label: 'Apple M3/M4', min: 50, max: 80, color: PRIMARY },
    { label: 'RTX 4070 Ti', min: 90, max: 130, color: TERTIARY },
  ]

  const maxSpeed = 140
  const barWidth = 200

  return (
    <div className="flex justify-center my-8">
      <svg
        viewBox="0 0 900 300"
        className="w-full max-w-2xl h-auto"
        role="img"
        aria-label="Inference speed comparison: Laptop CPU vs Apple Silicon vs RTX GPU"
      >
        <title>Speed Comparison by Hardware</title>
        <desc>Three horizontal bars showing tokens per second for different hardware: Laptop CPU (15-25), Apple Silicon (50-80), and RTX 4070 Ti (90-130) for running a 7B model.</desc>

        {/* Title */}
        <text x="450" y="30" textAnchor="middle" fontSize="16" fontWeight="700" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
          Tokens per Second (7B Model)
        </text>

        {tiers.map((tier, i) => {
          const y = 80 + i * 70
          const minWidth = (tier.min / maxSpeed) * barWidth
          const maxWidth = (tier.max / maxSpeed) * barWidth
          const midX = 250 + (minWidth + maxWidth) / 2

          return (
            <g key={`tier-${i}`}>
              {/* Label */}
              <text x="150" y={y + 15} fontSize="13" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
                {tier.label}
              </text>

              {/* Speed range bar */}
              <rect x="250" y={y} width={maxWidth} height="30" rx="4" fill={tier.color} opacity="0.3" />

              {/* Actual range (filled) */}
              <rect x="250" y={y} width={minWidth} height="30" rx="4" fill={tier.color} />

              {/* Range label */}
              <text x={midX} y={y + 20} textAnchor="middle" fontSize="12" fontWeight="600" fill="white" fontFamily="Plus Jakarta Sans, system-ui">
                {tier.min}–{tier.max}
              </text>

              {/* Scale markers */}
              <line x1="250" y1={y + 35} x2="250" y2={y + 40} stroke={TEXT} strokeWidth="1" opacity="0.5" />
              <line x1={250 + barWidth} y1={y + 35} x2={250 + barWidth} y2={y + 40} stroke={TEXT} strokeWidth="1" opacity="0.5" />

              {/* Min/Max labels */}
              <text x="250" y={y + 55} fontSize="10" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.6">
                0
              </text>
              <text x={250 + barWidth - 10} y={y + 55} fontSize="10" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.6" textAnchor="end">
                {maxSpeed}
              </text>
            </g>
          )
        })}

        {/* Scale axis label */}
        <text x="250 + barWidth + 20" y="280" fontSize="11" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.7">
          tokens/sec →
        </text>
      </svg>
    </div>
  )
}

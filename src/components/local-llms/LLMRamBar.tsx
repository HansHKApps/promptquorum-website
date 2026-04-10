'use client'

const PRIMARY = '#6750A4'
const SECONDARY = '#E8DEF8'
const TEXT = '#1C1B1F'

export function LLMRamBar() {
  return (
    <div className="flex justify-center my-8">
      <svg
        viewBox="0 0 1000 200"
        className="w-full max-w-2xl h-auto"
        role="img"
        aria-label="RAM requirements for different local LLM models: 1B, 3B, 8B"
      >
        <title>RAM Requirements by Model Size</title>
        <desc>A horizontal memory bar showing RAM requirements and recommended models for systems with different amounts of RAM, from 4 GB to 32+ GB.</desc>

        {/* Main bar background */}
        <defs>
          <linearGradient id="ramGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8B5D8" />
            <stop offset="100%" stopColor={PRIMARY} />
          </linearGradient>
        </defs>

        {/* RAM scale bar */}
        <rect x="80" y="60" width="850" height="40" rx="5" fill="url(#ramGradient)" />

        {/* RAM labels at bottom */}
        <text x="80" y="130" fontSize="11" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.7">
          4 GB
        </text>
        <text x="380" y="130" fontSize="11" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.7">
          16 GB
        </text>
        <text x="930" y="130" fontSize="11" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.7">
          32+ GB
        </text>

        {/* Model indicators */}

        {/* 1B at 4GB */}
        <line x1="100" y1="50" x2="100" y2="30" stroke={PRIMARY} strokeWidth="2" />
        <circle cx="100" cy="20" r="8" fill={PRIMARY} />
        <text x="100" y="8" textAnchor="middle" fontSize="12" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
          1B
        </text>

        {/* 3B at 8GB */}
        <line x1="230" y1="50" x2="230" y2="30" stroke={PRIMARY} strokeWidth="2" />
        <circle cx="230" cy="20" r="8" fill={PRIMARY} />
        <text x="230" y="8" textAnchor="middle" fontSize="12" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
          3B ⭐
        </text>

        {/* 8B at 16GB */}
        <line x1="480" y1="50" x2="480" y2="30" stroke={PRIMARY} strokeWidth="2" />
        <circle cx="480" cy="20" r="8" fill={PRIMARY} />
        <text x="480" y="8" textAnchor="middle" fontSize="12" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
          8B
        </text>

        {/* 13B+ at 32GB */}
        <line x1="865" y1="50" x2="865" y2="30" stroke={PRIMARY} strokeWidth="2" />
        <circle cx="865" cy="20" r="8" fill={PRIMARY} />
        <text x="865" y="8" textAnchor="middle" fontSize="12" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
          13B+
        </text>

        {/* Legend */}
        <text x="80" y="175" fontSize="12" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.8">
          ⭐ Best for beginners (quality + speed)
        </text>
      </svg>
    </div>
  )
}

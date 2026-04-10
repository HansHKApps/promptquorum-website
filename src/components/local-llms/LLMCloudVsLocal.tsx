'use client'

const PRIMARY = '#6750A4'
const SECONDARY = '#E8DEF8'
const TEXT = '#1C1B1F'

export function LLMCloudVsLocal() {
  return (
    <div className="flex justify-center my-8">
      <svg
        viewBox="0 0 900 300"
        className="w-full max-w-2xl h-auto"
        role="img"
        aria-label="Cloud AI vs Local LLM comparison: speed, cost, privacy"
      >
        <title>Cloud AI vs Local LLM Comparison</title>
        <desc>A split-panel diagram comparing cloud-based AI services (left) with local LLMs (right) across speed, cost, and privacy dimensions.</desc>

        {/* Left panel: Cloud */}
        <rect x="50" y="40" width="350" height="240" rx="10" fill={SECONDARY} opacity="0.3" stroke={PRIMARY} strokeWidth="2" />

        <text x="225" y="70" textAnchor="middle" fontSize="16" fontWeight="700" fill={PRIMARY} fontFamily="Plus Jakarta Sans, system-ui">
          ☁️ Cloud AI
        </text>

        {/* Cloud features */}
        <g>
          {/* Cost: $ */}
          <circle cx="100" cy="110" r="20" fill={PRIMARY} opacity="0.2" />
          <text x="100" y="118" textAnchor="middle" fontSize="24">
            💰
          </text>
          <text x="150" y="120" fontSize="12" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
            Paid (per request)
          </text>

          {/* Speed: fast */}
          <circle cx="100" cy="160" r="20" fill={PRIMARY} opacity="0.2" />
          <text x="100" y="168" textAnchor="middle" fontSize="24">
            ⚡
          </text>
          <text x="150" y="170" fontSize="12" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
            Fast responses
          </text>

          {/* Privacy: no lock */}
          <circle cx="100" cy="210" r="20" fill={PRIMARY} opacity="0.2" />
          <text x="100" y="218" textAnchor="middle" fontSize="24">
            📤
          </text>
          <text x="150" y="220" fontSize="12" fontWeight="600" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
            Data in cloud
          </text>
        </g>

        {/* Right panel: Local */}
        <rect x="500" y="40" width="350" height="240" rx="10" fill={SECONDARY} opacity="0.5" stroke={PRIMARY} strokeWidth="3" />

        <text x="675" y="70" textAnchor="middle" fontSize="16" fontWeight="700" fill={PRIMARY} fontFamily="Plus Jakarta Sans, system-us">
          🖥️ Local LLM
        </text>

        {/* Local features */}
        <g>
          {/* Cost: free */}
          <circle cx="550" cy="110" r="20" fill={PRIMARY} opacity="0.3" />
          <text x="550" y="118" textAnchor="middle" fontSize="24">
            🆓
          </text>
          <text x="600" y="120" fontSize="12" fontWeight="600" fill={PRIMARY} fontFamily="Plus Jakarta Sans, system-ui">
            Free (1x download)
          </text>

          {/* Speed: variable */}
          <circle cx="550" cy="160" r="20" fill={PRIMARY} opacity="0.3" />
          <text x="550" y="168" textAnchor="middle" fontSize="24">
            🎯
          </text>
          <text x="600" y="170" fontSize="12" fontWeight="600" fill={PRIMARY} fontFamily="Plus Jakarta Sans, system-ui">
            Variable by hardware
          </text>

          {/* Privacy: lock */}
          <circle cx="550" cy="210" r="20" fill={PRIMARY} opacity="0.3" />
          <text x="550" y="218" textAnchor="middle" fontSize="24">
            🔒
          </text>
          <text x="600" y="220" fontSize="12" fontWeight="600" fill={PRIMARY} fontFamily="Plus Jakarta Sans, system-ui">
            100% private, offline
          </text>
        </g>
      </svg>
    </div>
  )
}

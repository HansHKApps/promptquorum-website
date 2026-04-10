'use client'

const PRIMARY = '#6750A4'
const TERTIARY = '#7D5260'
const TEXT = '#1C1B1F'

export function LLMModelBubbles() {
  const models = [
    { name: 'Llama 3.2\n1B', size: 1.3, ram: '4 GB', color: '#FFB3BA' },
    { name: 'Llama 3.2\n3B', size: 2.0, ram: '8 GB', color: PRIMARY, recommended: true },
    { name: 'Llama 3.1\n8B', size: 4.7, ram: '16 GB', color: TERTIARY },
    { name: 'Mistral\n7B', size: 4.0, ram: '16 GB', color: '#8B5A8E' },
  ]

  const maxSize = 5
  const centerX = 450
  const centerY = 150
  const radius = 120

  return (
    <div className="flex justify-center my-8">
      <svg
        viewBox="0 0 900 320"
        className="w-full max-w-2xl h-auto"
        role="img"
        aria-label="Local LLM models sized by file size: 1.3 GB to 4.7 GB"
      >
        <title>Popular Local LLM Models by Size</title>
        <desc>Four circles representing popular local LLM models, sized proportionally by their download size in GB. Includes Llama 3.2 variants, Llama 3.1, and Mistral, with RAM requirements labeled.</desc>

        {/* Title */}
        <text x={centerX} y="30" textAnchor="middle" fontSize="16" fontWeight="700" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui">
          Popular Local Models (Size Comparison)
        </text>

        {/* Models arranged in a circle */}
        {models.map((model, i) => {
          const angle = (i * 360) / models.length - 90
          const rad = (angle * Math.PI) / 180
          const x = centerX + radius * Math.cos(rad)
          const y = centerY + radius * Math.sin(rad)

          // Scale radius based on file size
          const bubbleRadius = (model.size / maxSize) * 50 + 30

          return (
            <g key={`model-${i}`}>
              {/* Bubble */}
              <circle cx={x} cy={y} r={bubbleRadius} fill={model.color} opacity={model.recommended ? 1 : 0.8} />

              {/* Highlight ring for recommended */}
              {model.recommended && (
                <circle cx={x} cy={y} r={bubbleRadius} fill="none" stroke="#FFD700" strokeWidth="3" opacity="0.8" />
              )}

              {/* Model name (two lines) */}
              <text x={x} y={y - 10} textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="Plus Jakarta Sans, system-us">
                {model.name.split('\n')[0]}
              </text>
              <text x={x} y={y + 8} textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="Plus Jakarta Sans, system-us">
                {model.name.split('\n')[1]}
              </text>

              {/* Size label below bubble */}
              <text x={x} y={y + bubbleRadius + 30} textAnchor="middle" fontSize="11" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" fontWeight="600">
                {model.size} GB
              </text>

              {/* RAM requirement */}
              <text x={x} y={y + bubbleRadius + 50} textAnchor="middle" fontSize="10" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.7">
                {model.ram}
              </text>
            </g>
          )
        })}

        {/* Legend for recommended */}
        <text x="50" y="310" fontSize="12" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.8">
          ⭐ = Recommended for beginners (best balance)
        </text>
      </svg>
    </div>
  )
}

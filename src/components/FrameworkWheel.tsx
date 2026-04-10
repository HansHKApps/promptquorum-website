'use client'

const FRAMEWORKS = [
  'CRAFT',
  'CO-STAR',
  'APE',
  'RISEN',
  'TRACE',
  'RTF',
  'SPECS',
  'Single-Prompt',
]

const PRIMARY = '#6750A4'
const TERTIARY = '#7D5260'
const PRIMARY_LIGHT = '#E8DEF8'

export function FrameworkWheel() {
  const cx = 250
  const cy = 200
  const radius = 120
  const centerRadius = 30

  // Generate positions for 8 frameworks equally spaced around a circle
  const items = FRAMEWORKS.map((name, i) => {
    const angle = (i * 360) / FRAMEWORKS.length - 90 // Start at top
    const rad = (angle * Math.PI) / 180
    const x = cx + radius * Math.cos(rad)
    const y = cy + radius * Math.sin(rad)
    const color = i % 2 === 0 ? PRIMARY : TERTIARY
    return { name, x, y, color, angle: rad }
  })

  return (
    <div className="flex justify-center my-6">
      <svg
        viewBox="0 0 500 400"
        className="w-full max-w-lg h-auto"
        aria-label="8 Prompt Engineering Frameworks"
      >
        {/* Spokes from center to each node */}
        {items.map((item, i) => (
          <line
            key={`spoke-${i}`}
            x1={cx}
            y1={cy}
            x2={item.x}
            y2={item.y}
            stroke={PRIMARY_LIGHT}
            strokeWidth="2"
            opacity="0.6"
          />
        ))}

        {/* Central node */}
        <circle cx={cx} cy={cy} r={centerRadius} fill={PRIMARY} />
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
          fontWeight="700"
          fill="white"
          fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        >
          Prompt
        </text>

        {/* Framework nodes */}
        {items.map((item, i) => (
          <g key={`framework-${i}`}>
            {/* Circle background */}
            <circle cx={item.x} cy={item.y} r="28" fill={item.color} />

            {/* Framework name - split into lines if needed */}
            {item.name.includes('-') ? (
              <>
                <text
                  x={item.x}
                  y={item.y - 5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                >
                  {item.name.split('-')[0]}
                </text>
                <text
                  x={item.x}
                  y={item.y + 8}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                >
                  {item.name.split('-')[1]}
                </text>
              </>
            ) : (
              <text
                x={item.x}
                y={item.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="13"
                fontWeight="700"
                fill="white"
                fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
              >
                {item.name}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}

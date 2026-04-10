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
    <div className="flex flex-col items-center my-6">
      <svg
        viewBox="0 0 500 400"
        className="w-full max-w-lg h-auto"
        role="img"
        aria-labelledby="fw-title fw-desc"
        focusable="false"
      >
        <title id="fw-title">8 Prompt Engineering Frameworks: CRAFT, CO-STAR, APE, RISEN, TRACE, RTF, SPECS and Single-Prompt</title>
        <desc id="fw-desc">A wheel diagram showing 8 prompt engineering frameworks arranged around a central Prompt node. Each framework addresses a different writing and AI prompting style.</desc>
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
            aria-hidden="true"
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
          <g key={`framework-${i}`} role="listitem">
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

      {/* Visually hidden text for search engines and AI crawlers */}
      <ul className="sr-only">
        <li>CRAFT: Context, Role, Action, Format, Target — Best for marketing and creative content</li>
        <li>CO-STAR: Context, Objective, Style, Tone, Audience, Response — Comprehensive structured approach</li>
        <li>APE: Action, Parameter, Example — Concise framework for specific tasks</li>
        <li>RISEN: Role, Intention, Scenario, Expectation, Notation — Best for role-playing and personas</li>
        <li>TRACE: Task, Request, Action, Context, Example — Step-by-step instruction framework</li>
        <li>RTF: Role, Task, Format — Lightweight framework for rapid prompting</li>
        <li>SPECS: Setting, Problem, Expectation, Constraints, Success Criteria — Goal-oriented prompting</li>
        <li>Single-Prompt: One-shot, unstructured prompting for simple requests</li>
      </ul>
    </div>
  )
}

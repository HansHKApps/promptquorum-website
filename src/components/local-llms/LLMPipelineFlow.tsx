'use client'

const PRIMARY = '#6750A4'
const TERTIARY = '#7D5260'
const TEXT = '#1C1B1F'

export function LLMPipelineFlow() {
  return (
    <div className="flex justify-center my-8">
      <svg
        viewBox="0 0 1000 200"
        className="w-full max-w-2xl h-auto"
        role="img"
        aria-label="4-step Ollama pipeline: Install, Pull, Run, Chat"
      >
        <title>4-Step Local LLM Pipeline</title>
        <desc>A horizontal flow diagram showing the four steps to run a local LLM: Install Ollama, Pull a Model, Run the Model, and Start Chatting.</desc>

        {/* Step 1: Install */}
        <rect x="50" y="50" width="180" height="100" rx="10" fill={PRIMARY} />
        <text x="140" y="95" textAnchor="middle" fontSize="16" fontWeight="700" fill="white" fontFamily="Plus Jakarta Sans, system-ui">
          1. Install
        </text>
        <text x="140" y="120" textAnchor="middle" fontSize="12" fill="white" fontFamily="Plus Jakarta Sans, system-ui" opacity="0.9">
          ollama.com
        </text>

        {/* Arrow 1 */}
        <line x1="230" y1="100" x2="290" y2="100" stroke={TERTIARY} strokeWidth="3" />
        <polygon points="290,100 270,90 280,100 270,110" fill={TERTIARY} />

        {/* Step 2: Pull Model */}
        <rect x="300" y="50" width="180" height="100" rx="10" fill={TERTIARY} />
        <text x="390" y="95" textAnchor="middle" fontSize="16" fontWeight="700" fill="white" fontFamily="Plus Jakarta Sans, system-ui">
          2. Pull
        </text>
        <text x="390" y="120" textAnchor="middle" fontSize="12" fill="white" fontFamily="Plus Jakarta Sans, system-ui" opacity="0.9">
          llama3.2:3b
        </text>

        {/* Arrow 2 */}
        <line x1="480" y1="100" x2="540" y2="100" stroke={PRIMARY} strokeWidth="3" />
        <polygon points="540,100 520,90 530,100 520,110" fill={PRIMARY} />

        {/* Step 3: Run */}
        <rect x="550" y="50" width="180" height="100" rx="10" fill={PRIMARY} />
        <text x="640" y="95" textAnchor="middle" fontSize="16" fontWeight="700" fill="white" fontFamily="Plus Jakarta Sans, system-ui">
          3. Run
        </text>
        <text x="640" y="120" textAnchor="middle" fontSize="12" fill="white" fontFamily="Plus Jakarta Sans, system-ui" opacity="0.9">
          ollama run
        </text>

        {/* Arrow 3 */}
        <line x1="730" y1="100" x2="790" y2="100" stroke={TERTIARY} strokeWidth="3" />
        <polygon points="790,100 770,90 780,100 770,110" fill={TERTIARY} />

        {/* Step 4: Chat */}
        <rect x="800" y="50" width="150" height="100" rx="10" fill={TERTIARY} />
        <text x="875" y="95" textAnchor="middle" fontSize="16" fontWeight="700" fill="white" fontFamily="Plus Jakarta Sans, system-ui">
          4. Chat
        </text>
        <text x="875" y="120" textAnchor="middle" fontSize="12" fill="white" fontFamily="Plus Jakarta Sans, system-ui" opacity="0.9">
          Local AI
        </text>

        {/* Timeline labels */}
        <text x="140" y="180" textAnchor="middle" fontSize="11" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.7">
          2 min
        </text>
        <text x="390" y="180" textAnchor="middle" fontSize="11" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.7">
          2-5 min
        </text>
        <text x="640" y="180" textAnchor="middle" fontSize="11" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.7">
          &lt;1 sec
        </text>
        <text x="875" y="180" textAnchor="middle" fontSize="11" fill={TEXT} fontFamily="Plus Jakarta Sans, system-ui" opacity="0.7">
          Instant
        </text>
      </svg>
    </div>
  )
}

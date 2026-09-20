export type ClusterKey =
  | 'local-llms'
  | 'power-local-llm'
  | 'prompt-engineering'
  | 'prompt-bites'
  | 'smart-home'
  | 'balcony-solar'
  | 'blog'
  | 'frameworks'

// Static class strings per cluster; colors come from the --cat-* CSS variables (tint fill, edge border, strong motif).
const STYLE: Record<ClusterKey, string> = {
  'local-llms': 'border-cat-run-serve-edge from-cat-run-serve-tint text-cat-run-serve',
  'power-local-llm': 'border-cat-code-development-edge from-cat-code-development-tint text-cat-code-development',
  'prompt-engineering': 'border-cat-chat-assistants-edge from-cat-chat-assistants-tint text-cat-chat-assistants',
  'prompt-bites': 'border-cat-voice-audio-edge from-cat-voice-audio-tint text-cat-voice-audio',
  'smart-home': 'border-cat-train-operate-edge from-cat-train-operate-tint text-cat-train-operate',
  'balcony-solar': 'border-cat-knowledge-retrieval-edge from-cat-knowledge-retrieval-tint text-cat-knowledge-retrieval',
  blog: 'border-cat-images-video-edge from-cat-images-video-tint text-cat-images-video',
  frameworks: 'border-cat-run-serve-edge from-cat-run-serve-tint text-cat-run-serve',
}

// One simple motif per cluster, drawn in a 120x48 box with currentColor strokes.
const MOTIF: Record<ClusterKey, string> = {
  'local-llms': 'M20 14h80v20H20zM32 6v8M52 6v8M72 6v8M92 6v8M32 34v8M52 34v8M72 34v8M92 34v8M42 24h36',
  'power-local-llm': 'M66 4 38 28h20l-6 16 30-26H62l4-14Z',
  'prompt-engineering': 'M42 12 22 24l20 12M78 12l20 12-20 12M68 8 52 40',
  'prompt-bites': 'M18 8h84v8H18zM18 20h60v8H18zM18 32h72v8H18z',
  'smart-home': 'M60 6 18 24h10v18h64V24h10L60 6ZM52 42V30h16v12',
  'balcony-solar': 'M60 14a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM60 2v6M60 40v6M36 24h-6M90 24h-6M43 7l4 4M77 37l4 4M77 11l4-4M43 41l4-4',
  blog: 'M18 10h84M18 20h60M18 30h72M18 40h44',
  frameworks: 'M18 8h40v32H18zM50 16h40v32H50zM82 4h20v20H82z',
}

/**
 * Decorative per-cluster banner above the article header. Keyed by cluster only
 * (never per article or per locale), inline SVG with a fixed height so it adds
 * no request and no layout shift.
 */
export function ClusterBanner({ cluster }: { cluster: ClusterKey }) {
  return (
    <div
      aria-hidden="true"
      className={`mb-8 flex h-16 items-center justify-end overflow-hidden rounded-xl border bg-linear-to-r to-tone-list px-6 ${STYLE[cluster]}`}
    >
      <svg width="120" height="48" viewBox="0 0 120 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
        <path d={MOTIF[cluster]} />
      </svg>
    </div>
  )
}

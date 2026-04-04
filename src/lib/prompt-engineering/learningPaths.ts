/**
 * Learning paths and trending terms for the prompt engineering glossary.
 * Used to organize 500+ glossary terms into curated learning sequences
 * and highlight the most important terms in 2026 by adoption/demand.
 */

export type LearningPathLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export interface LearningPath {
  id: string                   // kebab-case, used as anchor + badge key
  title: string
  description: string
  level: LearningPathLevel
  icon: string                 // single emoji
  color: {
    badge: string              // pill bg + text on term card
    card: string               // card border in the section
    dot: string                // step-number circle fill
    levelBadge: string         // level pill inside card
  }
  terms: string[]              // ordered — exact row['Term'] values from glossary
}

export interface TrendingTerm {
  term: string             // exact row['Term'] value from glossary
  reason: string           // 1-sentence why it matters in 2026
  rank: number
}

// =============================================================================
// LEARNING PATHS: 7 curated sequences matching real learning journeys
// =============================================================================

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'foundations',
    title: 'Prompt Engineering Foundations',
    description: 'Learn the core vocabulary every AI practitioner needs — from what a prompt is to why models hallucinate.',
    level: 'Beginner',
    icon: '🧱',
    color: {
      badge: 'bg-blue-100 text-blue-700 border border-blue-200',
      card: 'border-blue-200 hover:border-blue-300',
      dot: 'bg-blue-500',
      levelBadge: 'bg-green-100 text-green-700',
    },
    terms: [
      'Prompt',
      'LLM (Large Language Model)',
      'Token',
      'Context window',
      'System prompt',
      'Zero-Shot Prompting',
      'Few-Shot Prompting',
      'Chain-of-Thought (CoT)',
      'Temperature',
      'Instruction following',
      'Hallucination',
      'Output formatting prompt',
    ],
  },
  {
    id: 'rag-mastery',
    title: 'RAG Mastery',
    description: 'Build retrieval-augmented generation pipelines from chunking strategy to production-grade re-ranking.',
    level: 'Intermediate',
    icon: '🔍',
    color: {
      badge: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
      card: 'border-emerald-200 hover:border-emerald-300',
      dot: 'bg-emerald-500',
      levelBadge: 'bg-yellow-100 text-yellow-700',
    },
    terms: [
      'RAG (Retrieval-Augmented Generation)',
      'Embedding model',
      'Vector database',
      'Document chunking',
      'Semantic search',
      'Hybrid retrieval',
      'Reranking model',
      'Grounding',
      'Context window',
      'Prompt Injection',
    ],
  },
  {
    id: 'agent-orchestration',
    title: 'Agent Orchestration',
    description: 'Design autonomous agents that plan, use tools, manage memory, and coordinate across multi-agent systems.',
    level: 'Advanced',
    icon: '🤖',
    color: {
      badge: 'bg-purple-100 text-purple-700 border border-purple-200',
      card: 'border-purple-200 hover:border-purple-300',
      dot: 'bg-purple-500',
      levelBadge: 'bg-red-100 text-red-700',
    },
    terms: [
      'Agent',
      'ReAct Prompting',
      'Function calling',
      'Memory (Long-Term)',
      'Memory (Short-Term)',
      'Prompt Chaining',
      'LangChain',
      'LangGraph',
      'Multi-Agent System',
      'Long-horizon planning',
      'Agent Orchestration',
      'Reflection agent',
    ],
  },
  {
    id: 'reasoning-mastery',
    title: 'Reasoning Mastery',
    description: 'Master the prompting techniques that unlock reliable multi-step logical and mathematical reasoning.',
    level: 'Intermediate',
    icon: '🧠',
    color: {
      badge: 'bg-orange-100 text-orange-700 border border-orange-200',
      card: 'border-orange-200 hover:border-orange-300',
      dot: 'bg-orange-500',
      levelBadge: 'bg-yellow-100 text-yellow-700',
    },
    terms: [
      'Chain-of-Thought (CoT)',
      'Zero-Shot CoT',
      'Few-Shot Prompting',
      'Automatic CoT (Auto-CoT)',
      'Self-Consistency',
      'Tree-of-Thought (ToT)',
      'Step-back prompting',
      'Automatic Prompt Engineer (APE)',
    ],
  },
  {
    id: 'fine-tuning-alignment',
    title: 'Fine-tuning & Alignment',
    description: 'Understand when prompts are not enough — and how fine-tuning, RLHF, and alignment techniques change model behavior.',
    level: 'Advanced',
    icon: '⚙️',
    color: {
      badge: 'bg-rose-100 text-rose-700 border border-rose-200',
      card: 'border-rose-200 hover:border-rose-300',
      dot: 'bg-rose-500',
      levelBadge: 'bg-red-100 text-red-700',
    },
    terms: [
      'Fine-Tuning',
      'Instruction-tuned model',
      'RLHF',
      'LoRA',
      'Constitutional AI',
      'Alignment',
      'Hallucination',
      'Evals (evaluation suite)',
    ],
  },
  {
    id: 'evaluation-production',
    title: 'Evaluation & Production',
    description: 'Ship AI features confidently — build eval frameworks, measure quality metrics, and run prompt A/B tests.',
    level: 'Intermediate',
    icon: '📊',
    color: {
      badge: 'bg-sky-100 text-sky-700 border border-sky-200',
      card: 'border-sky-200 hover:border-sky-300',
      dot: 'bg-sky-500',
      levelBadge: 'bg-yellow-100 text-yellow-700',
    },
    terms: [
      'Evals (evaluation suite)',
      'Benchmark harness',
      'LLM-as-a-Judge',
      'ROUGE',
      'BLEU',
      'BERTScore',
      'A/B Prompt Test',
      'Prompt Versioning',
    ],
  },
  {
    id: 'safety-security',
    title: 'Safety & Security',
    description: 'Build AI systems that resist attacks, avoid harmful outputs, and pass safety audits — from prompt injection to red-teaming.',
    level: 'Intermediate',
    icon: '🛡️',
    color: {
      badge: 'bg-amber-100 text-amber-700 border border-amber-200',
      card: 'border-amber-200 hover:border-amber-300',
      dot: 'bg-amber-500',
      levelBadge: 'bg-yellow-100 text-yellow-700',
    },
    terms: [
      'Prompt Injection',
      'Jailbreak',
      'Constitutional AI',
      'Safety evaluation framework',
      'Bias',
      'Red-Teaming',
      'Alignment',
      'Hallucination',
    ],
  },
]

// =============================================================================
// TRENDING TERMS 2026: Top 10 terms by adoption and search demand
// =============================================================================

export const TRENDING_TERMS_2026: TrendingTerm[] = [
  { rank: 1, term: 'Agentic RAG', reason: 'Agents that retrieve + reason autonomously are the dominant production AI pattern in 2026.' },
  { rank: 2, term: 'LangGraph', reason: 'Stateful multi-agent orchestration framework adopted by most production teams.' },
  { rank: 3, term: 'Context engineering', reason: 'What "prompt engineering" is called when managing multi-turn agents and memory.' },
  { rank: 4, term: 'Extended thinking (Claude)', reason: 'Claude\'s configurable reasoning budget — replaces manual CoT for complex tasks.' },
  { rank: 5, term: 'LLM-as-a-Judge', reason: 'Scalable eval method replacing human raters in most CI/CD AI testing pipelines.' },
  { rank: 6, term: 'Grounding', reason: 'Mandatory for compliance-sensitive AI (finance, legal, medical) post-2025 regulations.' },
  { rank: 7, term: 'MCP (Model Context Protocol)', reason: 'Anthropic-backed protocol for standardizing tool/resource access across agents.' },
  { rank: 8, term: 'Prompt Injection', reason: 'Top security vulnerability for AI systems — most production teams now test for this.' },
  { rank: 9, term: 'Vector database', reason: 'Core infrastructure component for every RAG and long-term memory implementation.' },
  { rank: 10, term: 'Evals (evaluation suite)', reason: 'Production AI without evals is now considered engineering malpractice — industry standard.' },
]

// =============================================================================
// HELPER: Get all learning paths for a given term (case-insensitive)
// =============================================================================

// Pre-build term→path mapping at module init time (zero per-render cost)
const TERM_TO_PATH_IDS = new Map<string, string[]>()

for (const path of LEARNING_PATHS) {
  for (const term of path.terms) {
    const key = term.toLowerCase()
    const existing = TERM_TO_PATH_IDS.get(key) ?? []
    TERM_TO_PATH_IDS.set(key, [...existing, path.id])
  }
}

/**
 * Returns the ids of all learning paths that include this term.
 * Comparison is case-insensitive to handle capitalization variants.
 */
export function getTermPaths(termName: string): string[] {
  return TERM_TO_PATH_IDS.get(termName.toLowerCase()) ?? []
}

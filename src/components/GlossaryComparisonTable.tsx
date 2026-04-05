interface ConfusedPair {
  category: string
  termA: string
  termB: string
  difference: string
}

const CONFUSED_PAIRS: ConfusedPair[] = [
  {
    category: 'Prompting Technique',
    termA: 'Zero-shot',
    termB: 'Few-shot',
    difference: 'Zero-shot: ask without examples (faster, cheaper). Few-shot: provide 2–5 examples (more accurate for specific formats or domains).',
  },
  {
    category: 'Reasoning',
    termA: 'Chain-of-Thought',
    termB: 'Tree-of-Thought',
    difference: 'CoT: single linear reasoning path. ToT: explores multiple branches, evaluates paths. ToT costs 2–3× more tokens but handles harder problems.',
  },
  {
    category: 'Knowledge Architecture',
    termA: 'RAG',
    termB: 'Fine-tuning',
    difference: 'RAG: retrieves current data at inference time — no retraining. Fine-tuning: adjusts model weights permanently — expensive, requires labeled data.',
  },
  {
    category: 'Security',
    termA: 'Prompt injection',
    termB: 'Jailbreak',
    difference: 'Injection: structural attack — user input overrides system instructions. Jailbreak: behavioral attack — crafted phrasing bypasses safety guardrails.',
  },
  {
    category: 'Sampling Parameters',
    termA: 'Temperature',
    termB: 'Top-p',
    difference: 'Temperature: scales all token probabilities (0 = deterministic, 1+ = creative). Top-p: samples only from the smallest set of tokens covering probability p. Use one at a time.',
  },
  {
    category: 'Memory',
    termA: 'Short-term memory',
    termB: 'Long-term memory',
    difference: 'Short-term: active conversation context (tokens in window). Long-term: persistent store across sessions (vector DB or key-value). Agents need both.',
  },
  {
    category: 'Alignment',
    termA: 'Guardrail',
    termB: 'RLHF',
    difference: 'Guardrail: runtime policy enforcement (filter, validate, block) — no retraining. RLHF: training-time alignment via human feedback — rewires model behavior permanently.',
  },
  {
    category: 'Agent Behavior',
    termA: 'Tool calling',
    termB: 'Agentic',
    difference: 'Tool calling: single function invocation per turn. Agentic: autonomous loop — decide → call tool → observe → decide — until goal is achieved.',
  },
  {
    category: 'Output Quality',
    termA: 'Hallucination',
    termB: 'Confabulation',
    difference: 'Synonymous in practice. Both describe confident, plausible-sounding but false model output. "Hallucination" is more common in US/tech; "confabulation" in academic/EU contexts.',
  },
  {
    category: 'Prompt Architecture',
    termA: 'System prompt',
    termB: 'User prompt',
    difference: 'System: persistent instructions (role, rules, format) — set once per conversation. User: specific task per turn. System controls behavior; user specifies request.',
  },
]

export function GlossaryComparisonTable() {
  return (
    <section className="my-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">Commonly Confused AI Terms</h2>
      <p className="text-text-secondary text-sm mb-6">Quick reference for 10 term pairs that are frequently misunderstood or used interchangeably.</p>
      <div className="overflow-x-auto rounded-xl border border-primary/20">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-primary/20 bg-primary/5">
              <th className="px-4 py-3 text-left font-bold text-text-primary text-xs uppercase tracking-wider">Category</th>
              <th className="px-4 py-3 text-left font-bold text-primary text-xs uppercase tracking-wider">Term A</th>
              <th className="px-4 py-3 text-left font-bold text-primary text-xs uppercase tracking-wider">Term B</th>
              <th className="px-4 py-3 text-left font-bold text-text-primary text-xs uppercase tracking-wider">Key Difference</th>
            </tr>
          </thead>
          <tbody>
            {CONFUSED_PAIRS.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-primary/10 transition-colors hover:bg-primary/5 ${idx % 2 === 0 ? 'bg-white' : 'bg-surface/50'}`}
              >
                <td className="px-4 py-3 text-xs text-text-secondary font-medium whitespace-nowrap">{row.category}</td>
                <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{row.termA}</td>
                <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{row.termB}</td>
                <td className="px-4 py-3 text-text-secondary leading-relaxed">{row.difference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

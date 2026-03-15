import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Model Comparison Tool | ChatGPT vs Claude vs Gemini | PromptQuorum',
  description: 'Compare ChatGPT, Claude, Gemini, and 25+ AI models on the same prompt. See side-by-side responses, detect hallucinations, find consensus answers with PromptQuorum.',
  alternates: {
    canonical: 'https://www.promptquorum.com/compare',
  },
  openGraph: {
    title: 'AI Model Comparison Tool | PromptQuorum',
    description: 'Compare 25+ AI models side-by-side on the same prompt.',
    url: 'https://www.promptquorum.com/compare',
    type: 'website',
  },
}

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-secondary mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-text-primary font-medium">Compare AI Models</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
            Compare AI Models on the Same Prompt
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Run your prompt across ChatGPT, Claude, Gemini, and 25+ other AI models simultaneously. Get side-by-side responses in seconds.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          {/* Why Compare */}
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-4">Why Compare Multiple AI Models?</h2>
            <p className="text-text-secondary mb-4">
              Different AI models excel at different tasks. ChatGPT dominates creative writing. Claude excels at reasoning and analysis. Gemini shines with multimodal tasks. By comparing all models on the same prompt, you:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Find the best model for your task</strong> — Don't waste time with a suboptimal model</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Detect hallucinations</strong> — Compare answers to spot false information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Achieve consensus</strong> — When multiple models agree, confidence is higher</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Save money</strong> — Use cheaper models for simple tasks, expensive ones only when needed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Improve quality</strong> — Research shows multi-model comparison improves overall AI output quality by 25-45%</span>
              </li>
            </ul>
          </section>

          {/* AI Model Breakdown */}
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-4">AI Model Comparison Guide</h2>
            <p className="text-text-secondary mb-6">
              Here's how the major AI models compare:
            </p>

            {/* ChatGPT */}
            <div className="bg-gray-50 p-6 rounded-lg mb-4 border border-gray-200">
              <h3 className="text-xl font-bold text-text-primary mb-3">ChatGPT (OpenAI)</h3>
              <div className="space-y-2 text-text-secondary">
                <p><strong>Best for:</strong> Creative writing, brainstorming, general knowledge questions</p>
                <p><strong>Strengths:</strong> Conversational tone, creative output, broad knowledge</p>
                <p><strong>Weaknesses:</strong> Can hallucinate, sometimes verbose, reasoning tasks less reliable than Claude</p>
                <p><strong>Cost:</strong> $0.50-$2 per million tokens (varies by model)</p>
                <p><strong>Use when:</strong> You need conversational, creative responses</p>
              </div>
            </div>

            {/* Claude */}
            <div className="bg-gray-50 p-6 rounded-lg mb-4 border border-gray-200">
              <h3 className="text-xl font-bold text-text-primary mb-3">Claude (Anthropic)</h3>
              <div className="space-y-2 text-text-secondary">
                <p><strong>Best for:</strong> Analysis, reasoning, technical documentation, code review</p>
                <p><strong>Strengths:</strong> Superior reasoning, fewer hallucinations, excellent at complex tasks, handles long documents</p>
                <p><strong>Weaknesses:</strong> Slower response time, more conservative output (sometimes less creative)</p>
                <p><strong>Cost:</strong> $0.80-$3 per million tokens (varies by model)</p>
                <p><strong>Use when:</strong> You need accurate, well-reasoned analysis</p>
              </div>
            </div>

            {/* Gemini */}
            <div className="bg-gray-50 p-6 rounded-lg mb-4 border border-gray-200">
              <h3 className="text-xl font-bold text-text-primary mb-3">Gemini (Google)</h3>
              <div className="space-y-2 text-text-secondary">
                <p><strong>Best for:</strong> Multimodal tasks (image + text), search-informed answers, real-time information</p>
                <p><strong>Strengths:</strong> Integrates real-time search, native multimodal support, good with visual reasoning</p>
                <p><strong>Weaknesses:</strong> Newer (fewer battle-tested patterns), sometimes inconsistent quality</p>
                <p><strong>Cost:</strong> $0.075-$0.30 per million tokens (most affordable)</p>
                <p><strong>Use when:</strong> You need visual reasoning or current information</p>
              </div>
            </div>

            {/* Local LLMs */}
            <div className="bg-gray-50 p-6 rounded-lg mb-4 border border-gray-200">
              <h3 className="text-xl font-bold text-text-primary mb-3">Local LLMs (Llama 2, Mistral, etc.)</h3>
              <div className="space-y-2 text-text-secondary">
                <p><strong>Best for:</strong> Privacy-sensitive work, custom fine-tuned tasks, offline operation</p>
                <p><strong>Strengths:</strong> Complete privacy, no API costs (after initial download), customizable</p>
                <p><strong>Weaknesses:</strong> Lower quality than frontier models, requires local compute resources</p>
                <p><strong>Cost:</strong> $0 (one-time download)</p>
                <p><strong>Use when:</strong> Handling sensitive data or needing complete offline operation</p>
              </div>
            </div>
          </section>

          {/* Multi-Model Testing Strategy */}
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-4">The Power of Multi-LLM Testing</h2>
            <p className="text-text-secondary mb-6">
              Research shows that running the same prompt across multiple AI models produces significantly better results:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li><strong>25-45% accuracy improvement</strong> — Multimodal approaches (text + model comparison) boost output quality</li>
              <li><strong>Hallucination detection</strong> — When models disagree, you've found potential false information</li>
              <li><strong>Consensus confidence</strong> — When multiple models agree, you have higher confidence in the answer</li>
              <li><strong>Task-specific optimization</strong> — Use the best model for each type of task</li>
            </ul>
          </section>

          {/* Quick Comparison Table */}
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-4">Quick Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-text-secondary border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-3 text-text-primary font-bold">Model</th>
                    <th className="text-left py-3 px-3 text-text-primary font-bold">Reasoning</th>
                    <th className="text-left py-3 px-3 text-text-primary font-bold">Creativity</th>
                    <th className="text-left py-3 px-3 text-text-primary font-bold">Speed</th>
                    <th className="text-left py-3 px-3 text-text-primary font-bold">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 font-semibold">Claude</td>
                    <td className="py-3 px-3">⭐⭐⭐⭐⭐</td>
                    <td className="py-3 px-3">⭐⭐⭐⭐</td>
                    <td className="py-3 px-3">⭐⭐⭐</td>
                    <td className="py-3 px-3">$$</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 font-semibold">ChatGPT</td>
                    <td className="py-3 px-3">⭐⭐⭐⭐</td>
                    <td className="py-3 px-3">⭐⭐⭐⭐⭐</td>
                    <td className="py-3 px-3">⭐⭐⭐⭐</td>
                    <td className="py-3 px-3">$$</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 font-semibold">Gemini</td>
                    <td className="py-3 px-3">⭐⭐⭐⭐</td>
                    <td className="py-3 px-3">⭐⭐⭐⭐</td>
                    <td className="py-3 px-3">⭐⭐⭐⭐⭐</td>
                    <td className="py-3 px-3">$</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold">Local LLMs</td>
                    <td className="py-3 px-3">⭐⭐⭐</td>
                    <td className="py-3 px-3">⭐⭐⭐</td>
                    <td className="py-3 px-3">⭐⭐⭐</td>
                    <td className="py-3 px-3">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* How PromptQuorum Helps */}
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-4">How PromptQuorum Simplifies AI Model Comparison</h2>
            <p className="text-text-secondary mb-6">
              Manually testing each prompt across 25+ models would take hours. PromptQuorum automates the entire process:
            </p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-primary min-w-fit">1.</div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Run once</h4>
                  <p className="text-text-secondary">Enter your prompt once. It's dispatched to all connected models simultaneously.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-primary min-w-fit">2.</div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Compare instantly</h4>
                  <p className="text-text-secondary">See all responses side-by-side. No context switching between browser tabs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-primary min-w-fit">3.</div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Find consensus</h4>
                  <p className="text-text-secondary">Quorum scores show which answers have consensus across models (high confidence).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-primary min-w-fit">4.</div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Optimize your prompt</h4>
                  <p className="text-text-secondary">See quality scores. Use PromptQuorum's 8 refinement techniques to improve output.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center mt-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Ready to Compare AI Models?</h2>
            <p className="text-text-secondary mb-6">
              Join the waitlist and get instant access to run prompts across 25+ AI models side-by-side.
            </p>
            <Link href="/#waitlist" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Join Waitlist
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}

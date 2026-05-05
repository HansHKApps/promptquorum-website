// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: manual-vs-automated-prompt-optimization
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'Manual vs Automated Prompt Optimization',
    seoTitle: 'Manual vs Automated Optimization: Pick Your Path',
    metaDescription: 'Decide when to hand-tune prompts vs automate. Speed, accuracy, team skill trade-offs. When manual wins, when automation scales. With decision flowchart.',
    intro: '**Improving prompts through systematic refinement is called optimization.** When your LLM outputs fall short, you can refine the prompt yourself (manual) or use a tool to search for better wording automatically. This guide clarifies which approach fits your team, timeline, and constraints.',
    publishDate: '2026-04-10',
    dateModified: '2026-04-10',
    readTime: '8 min',
    educationalLevel: 'Intermediate',
    primaryTerm: 'prompt optimization',
    aboutTopics: ['prompt optimization', 'DSPy', 'prompt engineering', 'LLM refinement'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Manual vs Automated Prompt Optimization',
      description: 'Decide when to hand-tune prompts vs automate. Speed, accuracy, team skill trade-offs.',
      datePublished: '2026-04-10',
      dateModified: '2026-04-10',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization?lang=en',
      inLanguage: 'en',
      about: [
        { '@type': 'Thing', name: 'Manual prompt tuning' },
        { '@type': 'Thing', name: 'Automated prompt optimization' },
        { '@type': 'Thing', name: 'DSPy framework' },
        { '@type': 'Thing', name: 'Prompt engineering best practices' }
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'DSPy' },
        { '@type': 'SoftwareApplication', name: 'Anthropic Prompt Caching' }
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] }
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How many manual iterations does it typically take?', acceptedAnswer: { '@type': 'Answer', text: '5–20 rounds, depending on domain complexity. Legal and medical tasks require 15–20 iterations; simple classification tasks require 5–8 iterations.' } },
        { '@type': 'Question', name: 'Can I automate a prompt I don\'t understand?', acceptedAnswer: { '@type': 'Answer', text: 'Not effectively. Automation amplifies problems. Understand your baseline prompt first, then automate refinement.' } },
        { '@type': 'Question', name: 'What makes a good optimization metric?', acceptedAnswer: { '@type': 'Answer', text: 'It\'s specific, measurable, and correlates with real user satisfaction. "Better" is vague; "precision >95%, latency <2 seconds" is concrete.' } },
        { '@type': 'Question', name: 'Does automatic optimization work with proprietary models like GPT-4?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but API call costs can be high. Automation is more cost-effective with open models or cached endpoints.' } },
        { '@type': 'Question', name: 'How much training data do I need for automated optimization?', acceptedAnswer: { '@type': 'Answer', text: 'Minimum 5–10 labeled examples; 50+ is ideal for robust and reproducible results.' } },
        { '@type': 'Question', name: 'Can I switch from manual to automated mid-project?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and it\'s recommended. Start manual, collect 50+ labeled examples, then switch to automation.' } },
        { '@type': 'Question', name: 'What if my metric improves but users still complain?', acceptedAnswer: { '@type': 'Answer', text: 'You\'re optimizing the wrong metric. Audit 10 user complaints, redefine the metric, then re-optimize.' } },
        { '@type': 'Question', name: 'How often should I re-optimize my prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Manual: only when performance dips or model changes. Automated: quarterly, or when data distribution shifts significantly.' } },
        { '@type': 'Question', name: 'Can I use automated optimization for brainstorming new prompts?', acceptedAnswer: { '@type': 'Answer', text: 'It can help with exploration, but treat it as refinement, not innovation. Start with human ideation, then automate refinement.' } },
        { '@type': 'Question', name: 'Is prompt optimization the same as model fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'No. Optimization tweaks input text; fine-tuning retrains the model weights. Different domains, costs, and ROI profiles.' } }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        title: 'Key Takeaways',
        id: 'key-takeaways',
        items: [
          '**Manual tuning excels for bespoke, high-stakes prompts** (legal, medical, domain-specific) where control and audit trails matter more than speed.',
          '**Automation scales prompts across hundreds or thousands of inputs** cost-effectively and reproducibly, with minimal human oversight.',
          '**The best teams use both**: Manual tuning for research and initial development, automation for production scaling and monitoring.',
          '**Hybrid approach wins**: Spend 2–4 hours on manual baseline, then automate refinement across your dataset.'
        ]
      },
      tldrBox: {
        isTldr: true,
        title: 'TL;DR',
        id: 'tldr',
        content: [
          'Choose **manual optimization** if you have <50 prompts, limited data, high stakes, or don\'t have a clear success metric.',
          'Choose **automated optimization** if you have 100+ prompts, labeled validation data, a measurable goal (accuracy, cost, latency), and can wait for setup overhead.',
          'Use **both** in sequence: Manual research → Automated production scale.'
        ]
      },
      quickFacts: {
        title: 'Quick Facts',
        id: 'quick-facts',
        numberedItems: [
          'Manual optimization takes **2–8 hours per prompt**; automated setup takes 30 minutes, optimization 10–60 minutes.',
          'Manual cost: **~$0** (human time); Automated cost: **$10–500** per run (depending on API calls and framework).',
          'Manual prompts reach **95%+ accuracy** on custom, high-context tasks; automation typically achieves **80–90%** on standard metrics.',
          'Manual scaling limits: **1–10 prompts per person**; Automated scaling: **100–1,000+ prompts** with minimal overhead.',
          'Manual gives you **full control** over prompt design; automation gives you **partial control** (constrained by your success metric).',
          'Automation requires **domain expertise in defining metrics**; manual requires **prompt writing expertise**.',
          '**Best teams use both**: Manual for research and niche cases, automation for high-volume, repeatable tasks.'
        ]
      },
      introduction: {
        title: 'What Is Prompt Optimization?',
        id: 'introduction',
        snippets: [
          {
            label: 'In one sentence',
            content: 'Prompt optimization improves an LLM\'s output quality by refining wording, structure, examples, or tone.'
          },
          {
            label: 'In plain terms',
            content: 'When a prompt gives mediocre answers, you can improve it manually (edit yourself) or automatically (let a tool try thousands of variations). This guide clarifies which approach fits your team, timeline, and constraints.'
          }
        ],
        content: [
          'Every prompt is a bet on what wording will elicit the right behavior from an LLM. Your initial bet often loses. Optimization is the process of refining that bet until the LLM reliably does what you want.',
          'You have two paths: **manual** (you iterate yourself) and **automated** (a tool searches for better prompts). Each has strengths, weaknesses, costs, and timelines. Choosing wrong wastes weeks or months.'
        ]
      },
      manualExplained: {
        title: 'Manual Prompt Optimization: When You Tune',
        id: 'manual-explained',
        content: [
          'Manual optimization is hand-editing prompts, testing output, identifying failure patterns, and iterating. It\'s the craft of prompt engineering.'
        ],
        items: [
          {
            label: 'How it works',
            content: [
              '1. Write an initial prompt.',
              '2. Test on 5–10 real examples.',
              '3. Identify failure patterns (e.g., "prompt is too vague for edge cases").',
              '4. Refine wording, add examples, adjust tone.',
              '5. Re-test.',
              '6. Repeat until acceptable (typically 5–20 rounds).'
            ]
          },
          {
            label: 'Strengths',
            content: [
              '**Full control**: You understand every word and why it\'s there.',
              '**Immediate feedback**: Test-iterate-learn cycle is tight (minutes, not hours).',
              '**Portable knowledge**: What you learn transfers to new models, new tasks.',
              '**Audit trail**: Every change is intentional and documentable.',
              '**Low upfront cost**: No setup, frameworks, or training data needed.'
            ]
          },
          {
            label: 'Limitations',
            content: [
              '**Time-intensive**: 2–8 hours per prompt; doesn\'t scale to hundreds.',
              '**Doesn\'t scale**: 1 person tunes 1–3 prompts per day.',
              '**Hard to reproduce**: Knowledge lives in the person\'s head, not in code.',
              '**Brittle**: Prompts optimized for one model/version may fail on updates.',
              '**Requires expertise**: You need both domain knowledge AND prompt-writing skills.'
            ]
          },
          {
            label: 'Best for',
            content: [
              'Small datasets (5–50 examples).',
              'High-stakes tasks (legal contracts, medical diagnosis, financial advice).',
              'Novel problem domains (no historical data).',
              'Research or one-off projects.',
              'Teams without labeled validation data.'
            ]
          }
        ]
      },
      automatedExplained: {
        title: 'Automated Prompt Optimization: When You Automate',
        id: 'automated-explained',
        content: [
          'Automated optimization uses a framework or tool to systematically search for better prompts. Instead of manual iteration, you define success and let the tool find it.'
        ],
        items: [
          {
            label: 'How it works (example: DSPy)',
            content: [
              '1. Define a baseline prompt.',
              '2. Provide training examples (5–100 labeled input-output pairs).',
              '3. Run the optimizer: tool generates thousands of prompt variations.',
              '4. Evaluate each variation against your validation set.',
              '5. Return the best-performing prompt (or top-3 candidates).',
              '6. Deploy the winning prompt.'
            ]
          },
          {
            label: 'Popular frameworks & tools',
            content: [
              '**DSPy** (Stanford): Metric-driven prompt search; works with any LLM.',
              '**Anthropic Prompt Caching**: Reduces API cost for repeated, long prompts.',
              '**LLM-as-judge evaluation**: Uses a second LLM to score candidate prompts.',
              '**Synthetic data generation**: Creates training data automatically from your task.',
              '**Langsmith, Braintrust**: Platforms for prompt versioning, evaluation, monitoring.'
            ]
          },
          {
            label: 'Strengths',
            content: [
              '**Scales effortlessly**: Optimize 100–1,000 prompts with the same effort.',
              '**Reproducible**: Same input + metric = same output, every time.',
              '**Finds non-obvious improvements**: Tool explores space humans would miss.',
              '**Metrics-driven**: Success is measurable and automated.',
              '**Cost-effective at scale**: Per-prompt cost drops as volume increases.'
            ]
          },
          {
            label: 'Limitations',
            content: [
              '**Requires well-defined metrics**: If your goal is vague, automation fails.',
              '**Needs training data**: You need 5+ labeled examples; 50+ is safer.',
              '**Setup overhead**: 30–60 minutes to configure before you get results.',
              '**Less control**: You don\'t always understand *why* the best prompt works.',
              '**Can optimize the wrong thing**: Your metric improves, but users still complain.',
              '**Expensive upfront**: API costs, tool subscriptions, compute time.'
            ]
          },
          {
            label: 'Best for',
            content: [
              'High-volume tasks (100+ prompts or millions of queries).',
              'Production systems where consistency matters more than creativity.',
              'Cost optimization (Prompt Caching for repeated requests).',
              'Well-understood problems with clear success metrics.',
              'Teams with labeled validation data and engineering resources.'
            ]
          }
        ],
        callouts: [
          {
            type: '🔍',
            title: 'Fine-Tuning Is Not Prompt Optimization',
            content: 'Automation refines *the prompt text* (what you ask). Fine-tuning retrains the *model weights* (how the LLM thinks). Different tools, timelines, and ROI. Most teams should optimize prompts first.'
          }
        ]
      },
      comparison: {
        title: 'Manual vs Automated: Side-by-Side Comparison',
        id: 'comparison',
        tableFormat: true,
        columns: ['Factor', 'Manual', 'Automated'],
        rows: [
          { Factor: 'Speed per prompt', Manual: '2–8 hours', Automated: '30 min setup + 10–60 min optimization' },
          { Factor: 'Cost', Manual: '~$0 (human time)', Automated: '$10–500 (API calls, tools)' },
          { Factor: 'Accuracy', Manual: '95%+ on custom tasks', Automated: '80–90% on standard metrics' },
          { Factor: 'Scalability', Manual: '1–10 prompts', Automated: '100–1,000+ prompts' },
          { Factor: 'Control', Manual: 'Full', Automated: 'Partial (metric-constrained)' },
          { Factor: 'Skill required', Manual: 'High (domain + prompt expertise)', Automated: 'Low (once set up)' },
          { Factor: 'Reproducibility', Manual: 'Hard (person-dependent)', Automated: 'Easy (saved recipe)' },
          { Factor: 'Iteration cycles', Manual: 'Weeks', Automated: 'Hours to days' },
          { Factor: 'Learning transferred', Manual: 'Portable to new tasks', Automated: 'Narrow (task-specific)' },
          { Factor: 'Best when', Manual: 'Stakes high, data limited', Automated: 'Volume high, metrics clear' }
        ]
      },
      decisionFlowchart: {
        title: 'Decision Flowchart: Manual or Automated?',
        id: 'decision-flowchart',
        content: [
          'Follow these steps to decide which path fits your situation.'
        ],
        numberedItems: [
          '**Do you have fewer than 50 prompts to optimize?** YES → Go manual (iteration by hand is faster). NO → Go to step 2.',
          '**Can you define success as a metric?** (accuracy, coherence score, latency, cost) YES → Go to step 3. NO → Manual only (automation needs measurable goals).',
          '**Do you have 5+ labeled examples for validation?** YES → Go to step 4. NO → Start manual, collect data, switch to automated later.',
          '**Is this production (high volume, repeated) or research (one-off, exploratory)?** PRODUCTION → Automate. RESEARCH → Manual.',
          '**Decision**: Manual (control priority) or Automated (scale priority)?'
        ],
        callouts: [
          {
            type: '🔍',
            title: 'The 90% Test',
            content: 'If a manually-tuned prompt achieves 90%+ accuracy on your validation set, automation is unlikely to help much. If it\'s below 80%, try automation to close the gap.'
          }
        ]
      },
      fiveScenarios: {
        title: 'Five Real-World Scenarios',
        id: 'five-scenarios',
        content: [
          'Here\'s how teams in different situations choose:'
        ],
        numberedItems: [
          '**Small Team, Custom Domain (Legal Document Review)**\n  Scenario: 5 lawyers using prompts for contract analysis.\n  Decision: **Manual** — prompts are highly specific, low volume (10–20 per year), stakes are high.\n  Approach: Senior lawyer writes, team validates, iterate manually.',
          '**Enterprise, High Volume (Customer Support Routing)**\n  Scenario: 100,000 support tickets per month, need to classify urgency.\n  Decision: **Automated** — high volume, clear success metric (precision/recall), scalability essential.\n  Approach: DSPy + historical ticket data → optimized classifier prompts.',
          '**Research Exploring a New Technique**\n  Scenario: Testing whether chain-of-thought improves code generation.\n  Decision: **Manual first, then Automated** — start with 5–10 hand-tuned variations, then systematic search.\n  Approach: Baseline prompt → manual variants → automated sweep.',
          '**Production ML Pipeline with Budget Constraints**\n  Scenario: 1M API calls per month, need to cut costs by 30%.\n  Decision: **Automated (Prompt Caching or similar)** — high volume, well-defined problem, cost is the metric.\n  Approach: Cache frequent prompts, optimize prompt length automatically.',
          '**One-Off Task with Tight Deadline**\n  Scenario: Write a prompt to extract entities from 50 documents, done in 2 hours.\n  Decision: **Manual** — small volume, tight timeline, automation setup takes longer than manual iteration.\n  Approach: Iterate on the 50 examples, refine, ship.'
        ]
      },
      hybrid: {
        title: 'When to Combine Both: Hybrid Approaches',
        id: 'hybrid-approaches',
        content: [
          'The best teams don\'t choose; they combine. Start with manual insight, then automate at scale.'
        ],
        items: [
          {
            label: 'Pattern 1: Manual research → Automated production',
            content: 'Spend 2–4 hours manually optimizing a baseline. Then automate that baseline across production scale. Example: Spend one day tuning, then deploy to 10K queries.'
          },
          {
            label: 'Pattern 2: Automated baseline → Manual refinement',
            content: 'Run automation, get top 3 candidates. Manually inspect and combine the best ideas. Example: Tool generates 1,000 variants, you pick the 3 strongest patterns, merge manually.'
          },
          {
            label: 'Pattern 3: Staged scaling',
            content: 'Phase 1 (month 1): Manual tuning on 5–10 examples. Phase 2 (month 2): Automated search once you have 50+ labeled examples. Phase 3 (month 3+): Automated monitoring + human-in-the-loop for edge cases.'
          }
        ],
        callouts: [
          {
            type: '🔍',
            title: 'The Maintenance Trap',
            content: 'Don\'t automate a process you haven\'t manually mastered first. If you automate poorly-understood prompts, debugging is nearly impossible. Master the problem manually, then automate.'
          }
        ]
      },
      commonMistakes: {
        title: 'Five Common Mistakes',
        id: 'common-mistakes',
        mistakes: [
          {
            mistake: 'Automating too early',
            problem: 'Running optimization on a weak baseline wastes compute (garbage in = garbage out) and leads to optimized-but-useless prompts.',
            fix: 'Spend 2–3 hours manually tuning first. Get to 80%+ accuracy before automating refinement.'
          },
          {
            mistake: 'Forgetting to validate automated results',
            problem: 'Optimization converges on a metric that doesn\'t correlate with real user success (optimizing the wrong thing).',
            fix: 'Always sample and manually review the top N optimized prompts before deploying. Test on out-of-distribution data.'
          },
          {
            mistake: 'Using the same prompt across all contexts',
            problem: 'Trying to optimize a one-size-fits-all prompt instead of segmenting by use case, user type, or data distribution.',
            fix: 'Create separate prompt + optimization workflows for different scenarios. Example: "Customer inquiry" vs. "Technical support" vs. "Escalation".'
          },
          {
            mistake: 'Ignoring prompt length and cost trade-offs',
            problem: 'Automated optimization adds tokens to prompts (for clarity, examples, reasoning), increasing API costs with no proportional benefit.',
            fix: 'Set a cost constraint in your metric. Example: accuracy + (token_count × cost_per_token) combined into one score.'
          },
          {
            mistake: 'Treating manual tuning as done once',
            problem: 'Model updates, user expectations shift, but manually-tuned prompts stagnate and lose effectiveness over time.',
            fix: 'Automate monitoring. If performance dips >5%, re-tune or automate. Quarterly re-optimization is standard practice.'
          }
        ]
      },
      faqSection: {
        title: 'Frequently Asked Questions',
        id: 'faq',
        faqs: [
          {
            q: 'How many manual iterations does it typically take?',
            a: '5–20 rounds, depending on domain complexity. Legal and medical tasks require 15–20 iterations; simple classification tasks require 5–8 iterations.'
          },
          {
            q: 'Can I automate a prompt I don\'t understand?',
            a: 'Not effectively. Automation amplifies problems. Understand your baseline prompt first, then automate refinement.'
          },
          {
            q: 'What makes a good optimization metric?',
            a: 'It\'s specific, measurable, and correlates with real user satisfaction. "Better" is vague; "precision >95%, latency <2 seconds" is concrete and actionable.'
          },
          {
            q: 'Does automatic optimization work with proprietary models like GPT-4?',
            a: 'Yes, but API call costs can be high. Automation is more cost-effective with open models or cached endpoints that charge per-token, not per-call.'
          },
          {
            q: 'How much training data do I need for automated optimization?',
            a: 'Minimum 5–10 labeled examples; 50+ is ideal for robust and reproducible results across different prompt variations.'
          },
          {
            q: 'Can I switch from manual to automated mid-project?',
            a: 'Yes, and it\'s recommended. Start manual, collect 50+ labeled examples, then switch to automation for scaling.'
          },
          {
            q: 'What if my metric improves but users still complain?',
            a: 'You\'re optimizing the wrong metric. Audit 10 user complaints, understand the real problem, redefine the metric, then re-optimize.'
          },
          {
            q: 'How often should I re-optimize my prompts?',
            a: 'Manual: only when performance dips or model changes. Automated: quarterly, or when data distribution shifts significantly.'
          },
          {
            q: 'Can I use automated optimization for brainstorming new prompts?',
            a: 'It can help with exploration, but treat it as refinement, not innovation. Start with human ideation, then automate refinement of the best ideas.'
          },
          {
            q: 'Is prompt optimization the same as model fine-tuning?',
            a: 'No. Optimization tweaks input text; fine-tuning retrains the model weights. Different domains, costs, and ROI profiles. Most teams should optimize prompts first.'
          }
        ]
      },
      relatedReading: {
        title: 'Related Reading',
        id: 'related-reading',
        items: [
          '[How to Write Prompts That Work](/prompt-engineering/how-to-write-prompts-that-work?lang=en)',
          '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting?lang=en)',
          '[In-Context Learning and Few-Shot Prompting](/prompt-engineering/in-context-learning-few-shot-prompting?lang=en)',
          '[Prompt Engineering vs Fine-Tuning](/prompt-engineering/prompt-engineering-vs-fine-tuning?lang=en)',
          '[Evaluating LLM Output Quality](/prompt-engineering/evaluating-llm-output-quality?lang=en)',
          '[DSPy Documentation](https://github.com/stanfordnlp/dspy) — official framework for prompt optimization'
        ]
      },
      regionalContext: {
        title: 'Regional & Organizational Context',
        id: 'regional-context',
        content: [
          'This decision applies globally. Regulatory frameworks (GDPR, HIPAA, data residency laws) may favor manual optimization where audit trails and explainability are critical.',
          'In regulated industries (healthcare, finance, legal), manual optimization often wins because it provides a clear paper trail for compliance. Automated optimization is opaque; humans can\'t explain why a prompt was chosen.',
          'In research and experimentation, automation shines because you can test thousands of variations and report aggregate findings. Control is less important than coverage.',
          'Most teams end up with a hybrid model: manual for research and foundation, automated for scaling and monitoring.'
        ]
      },
      sources: {
        title: 'Sources',
        id: 'sources',
        items: [
          '[DSPy GitHub Repository](https://github.com/stanfordnlp/dspy) — framework for systematic prompt optimization',
          '[Anthropic Prompt Caching Documentation](https://docs.anthropic.com) — cost reduction for repeated prompts',
          '[OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) — practical manual optimization techniques',
          '[Stanford DSPy Paper](https://arxiv.org/abs/2310.03714) — research on automated prompt and LLM program optimization',
          'PromptQuorum Internal Case Studies — hybrid manual + automated optimization in production systems'
        ]
      }
    }
  },
  de: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'Manuelle vs. automatisierte Prompt-Optimierung',
    seoTitle: 'Manuelle vs. automatisierte Optimierung: Richtig wählen',
    metaDescription: 'Entscheidungsleitfaden: Wann manuell tunen, wann automatisieren. Kosten, Zeit, Kontrolle, Reproduzierbarkeit. Mit Entscheidungsdiagramm.',
    intro: '**Prompt-Verbesserung durch systematische Verfeinerung wird Optimierung genannt.** Wenn Ihre LLM-Ausgaben nicht zufriedenstellend sind, können Sie den Prompt selbst verfeinern (manuell) oder ein Tool nutzen, um automatisch bessere Wording zu finden. Dieser Leitfaden macht deutlich, welcher Ansatz für Ihr Team, Ihre Zeitlinie und Ihre Anforderungen passt.',
    publishDate: '2026-04-10',
    dateModified: '2026-04-10',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt-Optimierung',
    aboutTopics: ['Prompt-Optimierung', 'DSPy', 'Prompt Engineering', 'LLM-Verbesserung'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Manuelle vs. automatisierte Prompt-Optimierung',
      description: 'Entscheidungsleitfaden: Wann manuell tunen, wann automatisieren.',
      datePublished: '2026-04-10',
      dateModified: '2026-04-10',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization?lang=de',
      inLanguage: 'de',
      about: [
        { '@type': 'Thing', name: 'Manuelle Prompt-Optimierung' },
        { '@type': 'Thing', name: 'Automatisierte Prompt-Optimierung' },
        { '@type': 'Thing', name: 'DSPy-Framework' },
        { '@type': 'Thing', name: 'Prompt-Engineering Best Practices' }
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'DSPy' },
        { '@type': 'SoftwareApplication', name: 'Anthropic Prompt Caching' }
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] }
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Wie viele manuelle Iterationen dauert es typischerweise?', acceptedAnswer: { '@type': 'Answer', text: '5–20 Iterationen, abhängig von der Domänenkomplexität. Rechtliche und medizinische Aufgaben erfordern 15–20 Iterationen; einfache Klassifizierungsaufgaben erfordern 5–8 Iterationen.' } },
        { '@type': 'Question', name: 'Kann ich einen Prompt automatisieren, den ich nicht verstehe?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht effektiv. Automatisierung verstärkt Probleme. Verstehen Sie zunächst Ihren Basis-Prompt, dann automatisieren Sie die Verfeinerung.' } },
        { '@type': 'Question', name: 'Was macht eine gute Optimierungsmetrik aus?', acceptedAnswer: { '@type': 'Answer', text: 'Sie ist spezifisch, messbar und korreliert mit echtem Benutzererfolg. „Besser" ist vage; „Genauigkeit >95%, Latenz <2 Sekunden" ist konkret.' } },
        { '@type': 'Question', name: 'Funktioniert automatische Optimierung mit proprietären Modellen wie GPT-4?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, aber API-Kosten können hoch sein. Automatisierung ist kostengünstiger mit Open-Source-Modellen oder gecachten Endpunkten.' } },
        { '@type': 'Question', name: 'Wie viele Trainingsdaten brauche ich für automatisierte Optimierung?', acceptedAnswer: { '@type': 'Answer', text: 'Mindestens 5–10 beschriftete Beispiele; 50+ ist ideal für robuste und reproduzierbare Ergebnisse.' } },
        { '@type': 'Question', name: 'Kann ich mitten im Projekt von manuell zu automatisiert wechseln?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, und es wird empfohlen. Beginnen Sie manuell, sammeln Sie 50+ beschriftete Beispiele, dann wechseln Sie zur Automatisierung.' } },
        { '@type': 'Question', name: 'Was wenn meine Metrik verbessert, aber Benutzer beschweren sich?', acceptedAnswer: { '@type': 'Answer', text: 'Sie optimieren die falsche Metrik. Prüfen Sie 10 Benutzerbeschwerden, definieren Sie die Metrik neu, dann re-optimieren Sie.' } },
        { '@type': 'Question', name: 'Wie oft sollte ich meine Prompts neu optimieren?', acceptedAnswer: { '@type': 'Answer', text: 'Manuell: nur wenn die Leistung sinkt oder Modelle sich ändern. Automatisiert: vierteljährlich oder wenn sich die Datenverteilung erheblich ändert.' } },
        { '@type': 'Question', name: 'Kann ich automatisierte Optimierung zum Brainstorming nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Sie kann bei der Erkundung helfen, aber behandeln Sie sie als Verfeinerung, nicht als Innovation. Starten Sie mit menschlicher Ideation, dann automatisieren Sie.' } },
        { '@type': 'Question', name: 'Ist Prompt-Optimierung das gleiche wie Model Fine-Tuning?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Optimierung verfeinert Eingabetext; Fine-Tuning trainiert Modellgewichte neu. Unterschiedliche Domains, Kosten und ROI-Profile.' } },
        { '@type': 'Question', name: 'Muss ich bei der Verwendung von Prompt-Optimierung die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, besonders bei verarbeiteter Kundendaten. DSGVO Artikel 28 verlangt eine Datenverarbeitungsvereinbarung mit dem Tool-Anbieter. Lokale Inferenz (auf Ihrem Server) erfüllt DSGVO-Anforderungen zur Datenresidenz. Prüfen Sie, ob Ihr Optimierungs-Tool die BSI-Grundschutz-Kataloge erfüllt, falls Sie in Deutschland oder Österreich tätig sind.' } },
        { '@type': 'Question', name: 'Ist Prompt-Optimierung für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Absolut. Der Mittelstand profitiert von kostengünstiger Skalierbarkeit. Manuelle Optimierung eignet sich für benutzerdefinierte, regulierte Aufgaben (legal, medizinisch). Automatisierte Optimierung skaliert hochvolumige Operationen (Kundenunterstützung, Dokumentenanalyse). Nutzen Sie beide: manuell für Forschung und Grundlagen, automatisiert für Produktionsskalierung.' } }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        title: 'Wichtigste Erkenntnisse',
        id: 'key-takeaways',
        items: [
          '**Manuelle Optimierung glänzt bei maßgeschneiderten, hochrisikanten Prompts** (Recht, Medizin, Domänen-spezifisch), wo Kontrolle und Audit-Trails wichtiger sind als Geschwindigkeit.',
          '**Automatisierung skaliert Prompts über Hunderte oder Tausende von Eingaben** kostengünstig und reproduzierbar, mit minimalem menschlichem Aufwand.',
          '**Die besten Teams nutzen beide**: Manuelle Optimierung für Forschung und anfängliche Entwicklung, Automatisierung für Produktionsskalierung und Überwachung.',
          '**Hybrid-Ansatz gewinnt**: Verbringen Sie 2–4 Stunden auf manuelle Basis-Optimierung, dann automatisieren Sie die Verfeinerung über Ihren Datensatz.'
        ]
      },
      tldrBox: {
        isTldr: true,
        title: 'Zusammenfassung',
        id: 'tldr',
        content: [
          'Wählen Sie **manuelle Optimierung**, wenn Sie <50 Prompts haben, begrenzte Daten, hohe Einsätze oder keine klare Erfolgmetrik.',
          'Wählen Sie **automatisierte Optimierung**, wenn Sie 100+ Prompts haben, beschriftete Validierungsdaten, ein messbares Ziel (Genauigkeit, Kosten, Latenz) und Zeit für Einrichtungs-Overhead haben.',
          'Nutzen Sie **beide** in Folge: Manuelle Forschung → Automatisierte Produktionsskalierung.'
        ]
      },
      quickFacts: {
        title: 'Schnelle Fakten',
        id: 'quick-facts',
        numberedItems: [
          'Manuelle Optimierung dauert **2–8 Stunden pro Prompt**; Automatisierung benötigt 30 Minuten Einrichtung, 10–60 Minuten Optimierung.',
          'Manuelle Kosten: **~0 €** (Menschenzeit); Automatisierte Kosten: **10–500 €** pro Durchlauf (abhängig von API-Aufrufen und Framework).',
          'Manuelle Prompts erreichen **95%+ Genauigkeit** bei benutzerdefinierten, hochkontextgebundenen Aufgaben; Automatisierung erreicht typischerweise **80–90%** bei Standardmetriken.',
          'Manuelle Skalierungsgrenzen: **1–10 Prompts pro Person**; Automatisierte Skalierung: **100–1.000+ Prompts** mit minimalem Mehraufwand.',
          'Manuelle gibt Ihnen **vollständige Kontrolle** über Prompt-Design; Automatisierung gibt Ihnen **Teilkontrolle** (durch Ihre Erfolgmetrik begrenzt).',
          'Automatisierung erfordert **Domänen-Expertise bei der Metrik-Definition**; Manuell erfordert **Prompt-Writing-Expertise**.',
          '**Die besten Teams nutzen beide**: Manuell für Forschung und Spezialfälle, Automatisierung für hochvolumige, wiederholbare Aufgaben.'
        ]
      },
      introduction: {
        title: 'Was ist Prompt-Optimierung?',
        id: 'introduction',
        snippets: [
          {
            label: 'In einem Satz',
            content: 'Prompt-Optimierung verbessert die Ausgabequalität eines LLM durch Verfeinerung von Wording, Struktur, Beispielen oder Ton.'
          },
          {
            label: 'In einfachen Worten',
            content: 'Wenn ein Prompt mittelmäßige Antworten gibt, können Sie ihn verbessern, indem Sie ihn selbst bearbeiten (manuell) oder ein Tool unterschiedlichste Varianten durchprobieren lassen (automatisiert). Dieser Leitfaden macht deutlich, welcher Ansatz für Ihr Team, Ihre Zeitlinie und Ihre Einschränkungen passt.'
          }
        ],
        content: [
          'Jeder Prompt ist eine Wette darauf, welche Wortwahl das richtige Verhalten eines LLM herbeiführt. Ihre anfängliche Wette verliert oft. Optimierung ist der Prozess, diese Wette zu verfeinern, bis das LLM zuverlässig tut, was Sie möchten.',
          'Sie haben zwei Wege: **manuell** (Sie iterieren selbst) und **automatisiert** (ein Tool sucht nach besseren Prompts). Jeder hat Stärken, Schwächen, Kosten und Zeitlinien. Eine falsche Wahl kostet Wochen oder Monate.'
        ]
      },
      manualExplained: {
        title: 'Manuelle Prompt-Optimierung: Wenn Sie selbst tunen',
        id: 'manual-explained',
        content: [
          'Manuelle Optimierung ist das Bearbeiten von Prompts von Hand, das Testen der Ausgabe, die Identifikation von Fehlermustern und das Iterieren. Es ist das Handwerk des Prompt Engineering.'
        ],
        items: [
          {
            label: 'Wie es funktioniert',
            content: [
              '1. Schreiben Sie einen anfänglichen Prompt.',
              '2. Testen Sie auf 5–10 echten Beispielen.',
              '3. Identifizieren Sie Fehlermuster (z.B. „Prompt ist zu vage für Grenzfälle").',
              '4. Verfeinern Sie Wording, fügen Sie Beispiele hinzu, passen Sie den Ton an.',
              '5. Testen Sie erneut.',
              '6. Wiederholen Sie, bis akzeptabel (typischerweise 5–20 Iterationen).'
            ]
          },
          {
            label: 'Stärken',
            content: [
              '**Vollständige Kontrolle**: Sie verstehen jedes Wort und warum es dort ist.',
              '**Sofortiges Feedback**: Test-Iterate-Learn-Zyklus ist eng (Minuten, nicht Stunden).',
              '**Portable Kenntnisse**: Was Sie lernen, überträgt sich auf neue Modelle, neue Aufgaben.',
              '**Audit-Trail**: Jede Änderung ist absichtlich und dokumentierbar.',
              '**Niedrige anfängliche Kosten**: Kein Setup, Frameworks oder Trainingsdaten erforderlich.'
            ]
          },
          {
            label: 'Limitationen',
            content: [
              '**Zeitintensiv**: 2–8 Stunden pro Prompt; skaliert nicht auf Hunderte.',
              '**Skaliert nicht**: 1 Person tuned 1–3 Prompts pro Tag.',
              '**Schwer zu reproduzieren**: Wissen lebt im Kopf der Person, nicht im Code.',
              '**Brüchig**: Prompts optimiert für ein Modell/eine Version können bei Updates ausfallen.',
              '**Erfordert Expertise**: Sie benötigen sowohl Domänenwissen ALS AUCH Prompt-Writing-Fähigkeiten.'
            ]
          },
          {
            label: 'Am besten für',
            content: [
              'Kleine Datensätze (5–50 Beispiele).',
              'Hochrisiko-Aufgaben (Rechtsdokumente, medizinische Diagnose, finanzielle Beratung).',
              'Novel Problem-Domänen (keine historischen Daten).',
              'Forschungs- oder einmalige Projekte.',
              'Teams ohne beschriftete Validierungsdaten.'
            ]
          }
        ]
      },
      automatedExplained: {
        title: 'Automatisierte Prompt-Optimierung: Wenn Sie automatisieren',
        id: 'automated-explained',
        content: [
          'Automatisierte Optimierung nutzt ein Framework oder Tool, um systematisch nach besseren Prompts zu suchen. Statt manueller Iteration definieren Sie Erfolg und lassen das Tool ihn finden.'
        ],
        items: [
          {
            label: 'Wie es funktioniert (Beispiel: DSPy)',
            content: [
              '1. Definieren Sie einen Basis-Prompt.',
              '2. Stellen Sie Trainingsbeispiele bereit (5–100 beschriftete Input-Output-Paare).',
              '3. Führen Sie den Optimizer aus: Tool generiert Tausende von Prompt-Variationen.',
              '4. Evaluieren Sie jede Variation gegen Ihren Validierungssatz.',
              '5. Geben Sie den besten-performing Prompt zurück (oder Top-3 Kandidaten).',
              '6. Deployen Sie den gewinnenden Prompt.'
            ]
          },
          {
            label: 'Beliebte Frameworks & Tools',
            content: [
              '**DSPy** (Stanford): Metrik-getriebene Prompt-Suche; funktioniert mit jedem LLM.',
              '**Anthropic Prompt Caching**: Reduziert API-Kosten für wiederholte, lange Prompts.',
              '**LLM-as-judge evaluation**: Nutzt ein zweites LLM zur Bewertung von Kandidaten-Prompts.',
              '**Synthetic data generation**: Erzeugt Trainingsdaten automatisch aus Ihrer Aufgabe.',
              '**Langsmith, Braintrust**: Plattformen für Prompt-Versionierung, Evaluierung, Überwachung.'
            ]
          },
          {
            label: 'Stärken',
            content: [
              '**Skaliert mühelos**: Optimieren Sie 100–1.000 Prompts mit gleichem Aufwand.',
              '**Reproduzierbar**: Gleiche Input + Metrik = gleiche Output, jedes Mal.',
              '**Findet nicht offensichtliche Verbesserungen**: Tool erforscht Raum, den Menschen verpassen würden.',
              '**Metrik-getrieben**: Erfolg ist messbar und automatisiert.',
              '**Kostengünstig bei Skalierung**: Pro-Prompt-Kosten sinken mit Volumen.'
            ]
          },
          {
            label: 'Limitationen',
            content: [
              '**Erfordert gut definierte Metriken**: Wenn Ihr Ziel vage ist, schlägt Automatisierung fehl.',
              '**Benötigt Trainingsdaten**: Sie benötigen 5+ beschriftete Beispiele; 50+ ist sicherer.',
              '**Einrichtungs-Overhead**: 30–60 Minuten zum Konfigurieren, bevor Sie Ergebnisse erhalten.',
              '**Weniger Kontrolle**: Sie verstehen nicht immer, *warum* der beste Prompt funktioniert.',
              '**Kann das Falsche optimieren**: Ihre Metrik verbessert sich, aber Benutzer beschweren sich.',
              '**Anfänglich teuer**: API-Kosten, Tool-Abos, Rechenzeit.'
            ]
          },
          {
            label: 'Am besten für',
            content: [
              'Hochvolumige Aufgaben (100+ Prompts oder Millionen von Abfragen).',
              'Produktionssysteme, wo Konsistenz wichtiger ist als Kreativität.',
              'Kostenoptimierung (Prompt Caching für wiederholte Anfragen).',
              'Gut verstandene Probleme mit klaren Erfolgsmetriken.',
              'Teams mit beschrifteten Validierungsdaten und Engineering-Ressourcen.'
            ]
          }
        ],
        callouts: [
          {
            type: '🔍',
            title: 'Fine-Tuning ist nicht Prompt-Optimierung',
            content: 'Automatisierung verfeinert *den Prompt-Text* (was Sie fragen). Fine-Tuning trainiert die *Modellgewichte* (wie das LLM denkt). Unterschiedliche Tools, Zeitlinien und ROI. Die meisten Teams sollten zunächst Prompts optimieren.'
          }
        ]
      },
      comparison: {
        title: 'Manuell vs. Automatisiert: Nebeneinander-Vergleich',
        id: 'comparison',
        tableFormat: true,
        columns: ['Faktor', 'Manuell', 'Automatisiert'],
        rows: [
          { Faktor: 'Geschwindigkeit pro Prompt', Manuell: '2–8 Stunden', Automatisiert: '30 Min. Einrichtung + 10–60 Min. Optimierung' },
          { Faktor: 'Kosten', Manuell: '~0 € (Menschenzeit)', Automatisiert: '10–500 € (API-Aufrufe, Tools)' },
          { Faktor: 'Genauigkeit', Manuell: '95%+ bei benutzerdefinierten Aufgaben', Automatisiert: '80–90% bei Standardmetriken' },
          { Faktor: 'Skalierbarkeit', Manuell: '1–10 Prompts', Automatisiert: '100–1.000+ Prompts' },
          { Faktor: 'Kontrolle', Manuell: 'Vollständig', Automatisiert: 'Partiell (Metrik-begrenzt)' },
          { Faktor: 'Erforderliche Fähigkeiten', Manuell: 'Hoch (Domäne + Prompt-Expertise)', Automatisiert: 'Niedrig (einmal eingerichtet)' },
          { Faktor: 'Reproduzierbarkeit', Manuell: 'Schwer (personen-abhängig)', Automatisiert: 'Einfach (gespeicherte Rezept)' },
          { Faktor: 'Iterations-Zyklen', Manuell: 'Wochen', Automatisiert: 'Stunden bis Tage' },
          { Faktor: 'Übertragenes Lernen', Manuell: 'Portable zu neuen Aufgaben', Automatisiert: 'Eng (Aufgaben-spezifisch)' },
          { Faktor: 'Am besten wenn', Manuell: 'Einsätze hoch, Daten begrenzt', Automatisiert: 'Volumen hoch, Metriken klar' }
        ]
      },
      decisionFlowchart: {
        title: 'Entscheidungs-Flowchart: Manuell oder Automatisiert?',
        id: 'decision-flowchart',
        content: [
          'Folgen Sie diesen Schritten, um zu entscheiden, welcher Weg zu Ihrer Situation passt.'
        ],
        numberedItems: [
          '**Haben Sie weniger als 50 Prompts zu optimieren?** JA → Gehen Sie manuell vor (Iteration ist schneller). NEIN → Gehen Sie zu Schritt 2.',
          '**Können Sie Erfolg als Metrik definieren?** (Genauigkeit, Kohärenz-Score, Latenz, Kosten) JA → Gehen Sie zu Schritt 3. NEIN → Nur manuell (Automatisierung braucht messbare Ziele).',
          '**Haben Sie 5+ beschriftete Beispiele zur Validierung?** JA → Gehen Sie zu Schritt 4. NEIN → Beginnen Sie manuell, sammeln Sie Daten, wechseln Sie später zu Automatisierung.',
          '**Ist dies Produktion (hohes Volumen, wiederholend) oder Forschung (einmalig, explorativ)?** PRODUKTION → Automatisieren. FORSCHUNG → Manuell.',
          '**Entscheidung**: Manuell (Kontroll-Priorität) oder Automatisiert (Skalierungs-Priorität)?'
        ],
        callouts: [
          {
            type: '🔍',
            title: 'Der 90%-Test',
            content: 'Wenn ein manuell-optimierter Prompt 90%+ Genauigkeit auf Ihrem Validierungssatz erreicht, wird Automatisierung wahrscheinlich nicht helfen. Wenn Sie unter 80% liegen, versuchen Sie Automatisierung, um die Lücke zu schließen.'
          }
        ]
      },
      fiveScenarios: {
        title: 'Fünf echte Szenarien',
        id: 'five-scenarios',
        content: [
          'So wählen Teams in verschiedenen Situationen:'
        ],
        numberedItems: [
          '**Kleines Team, benutzerdefinierte Domäne (Rechtliche Dokumenten-Überprüfung)**\n  Szenario: 5 Anwälte nutzen Prompts für Vertragsanalyse.\n  Entscheidung: **Manuell** — Prompts sind hochspezifisch, niedriges Volumen (10–20 pro Jahr), hohe Einsätze.\n  Ansatz: Senioranwalt schreibt, Team validiert, iteriert manuell.',
          '**Unternehmen, hohes Volumen (Kundenunterstützungs-Routing)**\n  Szenario: 100.000 Support-Tickets pro Monat, müssen Dringlichkeit klassifizieren.\n  Entscheidung: **Automatisiert** — hohes Volumen, klare Erfolgmetrik (Präzision/Recall), Skalierbarkeit essentiell.\n  Ansatz: DSPy + historische Ticket-Daten → optimierte Klassifizierungs-Prompts.',
          '**Forschung erkundet eine neue Technik**\n  Szenario: Testen, ob Chain-of-Thought die Code-Generierung verbessert.\n  Entscheidung: **Manuell zuerst, dann Automatisiert** — Beginnen Sie mit 5–10 manuell-optimierten Variationen, dann systematische Suche.\n  Ansatz: Basis-Prompt → manuelle Varianten → automatisierte Sweep.',
          '**Produktions-ML-Pipeline mit Budget-Beschränkungen**\n  Szenario: 1M API-Aufrufe pro Monat, müssen Kosten um 30% senken.\n  Entscheidung: **Automatisiert (Prompt Caching oder ähnlich)** — hohes Volumen, gut definiertes Problem, Kosten sind die Metrik.\n  Ansatz: Cache häufige Prompts, optimiere Prompt-Länge automatisch.',
          '**Einmalige Aufgabe mit enger Frist**\n  Szenario: Schreiben Sie einen Prompt zur Entität-Extraktion aus 50 Dokumenten, fertig in 2 Stunden.\n  Entscheidung: **Manuell** — kleines Volumen, enge Zeitlinie, Automatisierung-Setup dauert länger als manuell.\n  Ansatz: Iterieren Sie auf den 50 Beispielen, verfeinern Sie, deployen Sie.'
        ]
      },
      hybrid: {
        title: 'Wann man beide kombiniert: Hybrid-Ansätze',
        id: 'hybrid-approaches',
        content: [
          'Die besten Teams wählen nicht; sie kombinieren. Beginnen Sie mit manueller Einsicht, dann automatisieren Sie bei Skalierung.'
        ],
        items: [
          {
            label: 'Muster 1: Manuelle Forschung → Automatisierte Produktion',
            content: 'Verbringen Sie 2–4 Stunden auf manueller Basis-Optimierung. Dann automatisieren Sie diese Basis über Produktionsskalierung. Beispiel: Einen Tag optimieren, dann zu 10K Queries deployen.'
          },
          {
            label: 'Muster 2: Automatisierte Basis → Manuelle Verfeinerung',
            content: 'Führen Sie Automatisierung aus, erhalten Sie Top-3 Kandidaten. Inspizieren Sie manuell und kombinieren Sie die besten Ideen. Beispiel: Tool generiert 1.000 Varianten, Sie wählen die 3 stärksten Muster, mergen manuell.'
          },
          {
            label: 'Muster 3: Gestaffelte Skalierung',
            content: 'Phase 1 (Monat 1): Manuelle Optimierung auf 5–10 Beispielen. Phase 2 (Monat 2): Automatisierte Suche sobald Sie 50+ beschriftete Beispiele haben. Phase 3 (Monat 3+): Automatisierte Überwachung + Human-in-the-Loop für Grenzfälle.'
          }
        ],
        callouts: [
          {
            type: '🔍',
            title: 'Die Wartungsfalle',
            content: 'Automatisieren Sie nicht einen Prozess, den Sie nicht zunächst manuell beherrscht haben. Wenn Sie schlecht verstandene Prompts automatisieren, ist Debugging fast unmöglich. Beherrschen Sie das Problem manuell, dann automatisieren Sie.'
          }
        ]
      },
      commonMistakes: {
        title: 'Fünf häufige Fehler',
        id: 'common-mistakes',
        mistakes: [
          {
            mistake: 'Zu früh automatisieren',
            problem: 'Automatisierung auf einer schwachen Basis zu laufen verschwendet Rechenleistung (Müll rein = Müll raus) und führt zu optimierten, aber nutzlosen Prompts.',
            fix: 'Verbringen Sie 2–3 Stunden auf manuellem Tuning zuerst. Erreichen Sie 80%+ Genauigkeit, bevor Sie automatisierte Verfeinerung starten.'
          },
          {
            mistake: 'Vergessen, automatisierte Ergebnisse zu validieren',
            problem: 'Optimierung konvergiert zu einer Metrik, die nicht mit echtem Benutzererfolg korreliert (das Falsche optimieren).',
            fix: 'Immer Top-N optimierte Prompts manuell samplen und überprüfen, bevor Sie deployen. Testen Sie auf Out-of-Distribution-Daten.'
          },
          {
            mistake: 'Gleichen Prompt über alle Kontexte nutzen',
            problem: 'Versuch, einen One-Size-Fits-All-Prompt zu optimieren, statt nach Anwendungsfall, Benutzertyp oder Datenverteilung zu segmentieren.',
            fix: 'Erstellen Sie separate Prompt + Optimierungs-Workflows für verschiedene Szenarien. Beispiel: „Kundenanfrage" vs. „Technischer Support" vs. „Eskalation".'
          },
          {
            mistake: 'Prompt-Länge und Kosten-Trade-offs ignorieren',
            problem: 'Automatisierte Optimierung addiert Token zu Prompts (für Klarheit, Beispiele, Reasoning), erhöht API-Kosten ohne proportionalen Nutzen.',
            fix: 'Setzen Sie eine Kosten-Einschränkung in Ihre Metrik. Beispiel: Genauigkeit + (Token_Count × Kosten_Pro_Token) kombiniert in einer Score.'
          },
          {
            mistake: 'Manuelle Optimierung als erledigt behandeln',
            problem: 'Modell-Updates, Nutzer-Erwartungen ändern sich, aber manuell-optimierte Prompts stagnieren und verlieren Effektivität über Zeit.',
            fix: 'Automatisieren Sie die Überwachung. Wenn Leistung um >5% sinkt, re-optimieren Sie oder automatisieren Sie. Vierteljährliche Re-Optimierung ist Standard.'
          }
        ]
      },
      faqSection: {
        title: 'Häufig gestellte Fragen',
        id: 'faq',
        faqs: [
          {
            q: 'Wie viele manuelle Iterationen dauert es typischerweise?',
            a: '5–20 Iterationen, abhängig von der Domänenkomplexität. Rechtliche und medizinische Aufgaben erfordern 15–20 Iterationen; einfache Klassifizierungsaufgaben erfordern 5–8.'
          },
          {
            q: 'Kann ich einen Prompt automatisieren, den ich nicht verstehe?',
            a: 'Nicht effektiv. Automatisierung verstärkt Probleme. Verstehen Sie Ihren Basis-Prompt zunächst, dann automatisieren Sie die Verfeinerung.'
          },
          {
            q: 'Was macht eine gute Optimierungsmetrik aus?',
            a: 'Sie ist spezifisch, messbar und korreliert mit echtem Benutzererfolg. „Besser" ist vage; „Genauigkeit >95%, Latenz <2 Sekunden" ist konkret und handlungsorientiert.'
          },
          {
            q: 'Funktioniert automatische Optimierung mit proprietären Modellen wie GPT-4?',
            a: 'Ja, aber API-Aufrufe können teuer sein. Automatisierung ist kostengünstiger mit Open-Source-Modellen oder gecachten Endpunkten, die pro-Token abrechnen, nicht pro-Aufruf.'
          },
          {
            q: 'Wie viele Trainingsdaten brauche ich für automatisierte Optimierung?',
            a: 'Mindestens 5–10 beschriftete Beispiele; 50+ ist ideal für robuste und reproduzierbare Ergebnisse über verschiedene Prompt-Variationen.'
          },
          {
            q: 'Kann ich mitten im Projekt von manuell zu automatisiert wechseln?',
            a: 'Ja, und es wird empfohlen. Starten Sie manuell, sammeln Sie 50+ beschriftete Beispiele, wechseln Sie dann zur Automatisierung für Skalierung.'
          },
          {
            q: 'Was wenn meine Metrik verbessert, aber Benutzer beschweren sich?',
            a: 'Sie optimieren die falsche Metrik. Auditieren Sie 10 Benutzerbeschwerden, verstehen Sie das echte Problem, definieren Sie die Metrik neu, dann re-optimieren Sie.'
          },
          {
            q: 'Wie oft sollte ich meine Prompts neu optimieren?',
            a: 'Manuell: nur wenn Leistung sinkt oder Modelle sich ändern. Automatisiert: vierteljährlich oder wenn sich die Datenverteilung erheblich ändert.'
          },
          {
            q: 'Kann ich automatisierte Optimierung zum Brainstorming neuer Prompts nutzen?',
            a: 'Sie kann bei der Erkundung helfen, aber behandeln Sie sie als Verfeinerung, nicht Innovation. Starten Sie mit menschlicher Ideation, dann automatisieren Sie Verfeinerung.'
          },
          {
            q: 'Ist Prompt-Optimierung das gleiche wie Model Fine-Tuning?',
            a: 'Nein. Optimierung verfeinert Input-Text; Fine-Tuning trainiert Modellgewichte neu. Unterschiedliche Domains, Kosten und ROI-Profile. Meiste Teams sollten zunächst Prompts optimieren.'
          },
          {
            q: 'Muss ich bei der Verwendung von Prompt-Optimierung die DSGVO beachten?',
            a: 'Ja, besonders bei verarbeiteter Kundendaten. DSGVO Artikel 28 verlangt eine Datenverarbeitungsvereinbarung mit dem Tool-Anbieter. Lokale Inferenz erfüllt Datenresidenz-Anforderungen. Prüfen Sie BSI-Grundschutz-Katalog-Kompatibilität, wenn Sie in Deutschland oder Österreich tätig sind.'
          },
          {
            q: 'Ist Prompt-Optimierung für den deutschen Mittelstand geeignet?',
            a: 'Absolut. Der Mittelstand profitiert von kostengünstiger Skalierbarkeit. Manuelle Optimierung eignet sich für benutzerdefinierte, regulierte Aufgaben (legal, medizinisch). Automatisierte Optimierung skaliert hochvolumige Operationen. Nutzen Sie beide: manuell für Forschung, automatisiert für Produktionsskalierung.'
          }
        ]
      },
      relatedReading: {
        title: 'Weitere Lektüre',
        id: 'related-reading',
        items: [
          '[Wie man Prompts schreibt, die funktionieren](/prompt-engineering/how-to-write-prompts-that-work?lang=de)',
          '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting?lang=de)',
          '[In-Context Learning und Few-Shot Prompting](/prompt-engineering/in-context-learning-few-shot-prompting?lang=de)',
          '[Prompt Engineering vs. Fine-Tuning](/prompt-engineering/prompt-engineering-vs-fine-tuning?lang=de)',
          '[Bewertung der Ausgabequalität von LLMs](/prompt-engineering/evaluating-llm-output-quality?lang=de)',
          '[DSPy-Dokumentation](https://github.com/stanfordnlp/dspy) — offizielles Framework für Prompt-Optimierung'
        ]
      },
      regionalContext: {
        title: 'Regionaler & organisatorischer Kontext',
        id: 'regional-context',
        content: [
          'Diese Entscheidung gilt weltweit. Regulatorische Rahmen (DSGVO, HIPAA, Datenresidenz-Gesetze) können manuelle Optimierung bevorzugen, wo Audit-Trails und Nachvollziehbarkeit kritisch sind.',
          'In regulierten Branchen (Gesundheitswesen, Finanzen, Recht) gewinnt manuelle Optimierung oft, weil sie eine klare Dokumentation für Compliance bietet. Automatisierte Optimierung ist undurchsichtig; Menschen können nicht erklären, warum ein Prompt gewählt wurde.',
          'In Forschung und Experimente glänzt Automatisierung, weil Sie Tausende von Variationen testen und aggregierte Erkenntnisse melden können. Kontrolle ist weniger wichtig als Abdeckung.',
          'Die meisten Teams enden mit einem Hybrid-Modell: manuell für Forschung und Grundlagen, automatisiert für Skalierung und Überwachung.',
          'In Deutschland und Österreich sollten Sie BSI-Grundschutz-Kataloge und DSGVO Artikel 28 einhalten. Lokale Inferenz erfüllt beide besser als Cloud-basierte Automatisierung.'
        ]
      },
      sources: {
        title: 'Quellen',
        id: 'sources',
        items: [
          '[DSPy GitHub-Repository](https://github.com/stanfordnlp/dspy) — Framework für systematische Prompt-Optimierung',
          '[Anthropic Prompt Caching Dokumentation](https://docs.anthropic.com) — Kostenreduktion für wiederholte Prompts',
          '[OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) — praktische manuelle Optimierungs-Techniken',
          '[Stanford DSPy Paper](https://arxiv.org/abs/2310.03714) — Forschung zu automatisierter Prompt- und LLM-Programm-Optimierung',
          'PromptQuorum interne Fallstudien — Hybrid manuelle + automatisierte Optimierung in Produktionssystemen'
        ]
      }
    }
  },
  fr: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'Optimisation manuelle vs. automatisée de prompts',
    seoTitle: 'Manuel vs. automatisé : Choisir le bon chemin',
    metaDescription: 'Guide décisionnel : quand accorder le prompt, quand automatiser. Coûts, délais, contrôle, reproductibilité. Avec diagramme de décision.',
    intro: '**L\'amélioration des prompts par perfectionnement systématique s\'appelle optimisation.** Quand les réponses d\'un LLM ne sont pas satisfaisantes, vous pouvez affiner le prompt vous-même (manuel) ou laisser un outil chercher de meilleures formulations automatiquement. Ce guide clarifie quelle approche convient à votre équipe, vos délais et vos contraintes.',
    publishDate: '2026-04-10',
    dateModified: '2026-04-10',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'optimisation de prompt',
    aboutTopics: ['optimisation de prompt', 'DSPy', 'prompt engineering', 'amélioration LLM'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Optimisation manuelle vs. automatisée de prompts',
      description: 'Guide décisionnel : quand accorder vs. automatiser.',
      datePublished: '2026-04-10',
      dateModified: '2026-04-10',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization?lang=fr',
      inLanguage: 'fr',
      about: [
        { '@type': 'Thing', name: 'Optimisation manuelle de prompts' },
        { '@type': 'Thing', name: 'Optimisation automatisée de prompts' },
        { '@type': 'Thing', name: 'Framework DSPy' },
        { '@type': 'Thing', name: 'Meilleures pratiques prompt engineering' }
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'DSPy' },
        { '@type': 'SoftwareApplication', name: 'Anthropic Prompt Caching' }
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] }
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Combien d\'itérations manuelles faut-il en général ?', acceptedAnswer: { '@type': 'Answer', text: '5–20 itérations selon la complexité du domaine. Tâches juridiques/médicales : 15–20 ; classification simple : 5–8.' } },
        { '@type': 'Question', name: 'Puis-je automatiser un prompt que je ne comprends pas ?', acceptedAnswer: { '@type': 'Answer', text: 'Pas efficacement. L\'automatisation amplifie les problèmes. Comprenez d\'abord votre prompt de base.' } },
        { '@type': 'Question', name: 'Qu\'est-ce qu\'une bonne métrique d\'optimisation ?', acceptedAnswer: { '@type': 'Answer', text: 'Spécifique, mesurable et corrélée au succès réel. « Meilleur » est vague ; « précision >95%, latence <2s » est concret.' } },
        { '@type': 'Question', name: 'L\'automatisation fonctionne-t-elle avec GPT-4 ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, mais l\'API peut être coûteuse. Plus efficace avec les modèles open-source ou les endpoints mis en cache.' } },
        { '@type': 'Question', name: 'Combien de données d\'entraînement me faut-il ?', acceptedAnswer: { '@type': 'Answer', text: 'Minimum 5–10 exemples étiquetés ; 50+ est idéal pour des résultats robustes.' } },
        { '@type': 'Question', name: 'Puis-je passer du manuel à l\'automatisé en cours de route ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, c\'est recommandé. Commencez manuellement, collectez 50+ exemples, puis automatisez.' } },
        { '@type': 'Question', name: 'Et si ma métrique s\'améliore mais les utilisateurs se plaignent ?', acceptedAnswer: { '@type': 'Answer', text: 'Vous optimisez la mauvaise métrique. Auditez 10 plaintes, redéfinissez la métrique, réoptimisez.' } },
        { '@type': 'Question', name: 'Combien de fois dois-je réoptimiser ?', acceptedAnswer: { '@type': 'Answer', text: 'Manuel : uniquement si performance baisse ou modèle change. Automatisé : trimestriellement ou si distribution change.' } },
        { '@type': 'Question', name: 'Puis-je utiliser l\'automatisation pour le brainstorming ?', acceptedAnswer: { '@type': 'Answer', text: 'Aide à l\'exploration, mais traitez comme raffinement, pas innovation. Commencez par idéation humaine.' } },
        { '@type': 'Question', name: 'L\'optimisation de prompt = fine-tuning de modèle ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Optimisation peaufine le texte d\'entrée ; fine-tuning ré-entraîne les poids. Domaines, coûts et ROI différents.' } }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        title: 'Points clés',
        id: 'key-takeaways',
        items: [
          '**L\'optimisation manuelle excelle pour prompts sur mesure, à enjeux élevés** (juridique, médical, domaines spécialisés) où contrôle et traçabilité importent plus que vitesse.',
          '**L\'automatisation met à l\'échelle des centaines/milliers de prompts** économiquement et reproductiblement, avec surveillance minimale.',
          '**Les meilleures équipes utilisent les deux** : manuel pour recherche, automatisé pour mise en production.',
          '**Approche hybride gagne** : 2–4h d\'optimisation manuelle, puis automatisez le raffinage à l\'échelle.'
        ]
      },
      tldrBox: {
        isTldr: true,
        title: 'Points clés',
        id: 'tldr',
        content: [
          'Choisissez **manuel** si <50 prompts, données limitées, enjeux élevés, métrique floue.',
          'Choisissez **automatisé** si 100+ prompts, données d\'entraînement, objectif mesurable, ressources engineering.',
          'Utilisez **les deux** : recherche manuelle → mise à l\'échelle automatisée.'
        ]
      },
      quickFacts: {
        title: 'Faits rapides',
        id: 'quick-facts',
        numberedItems: [
          'Optimisation manuelle : **2–8h par prompt** ; automatisée : 30 min setup + 10–60 min optimisation.',
          'Coûts : manuels ~0€ (temps) ; automatisés 10–500€ (API).',
          'Précision : manuelle 95%+ sur tâches custom ; automatisée 80–90% sur métriques standard.',
          'Skalabilité : manuelle 1–10 prompts ; automatisée 100–1.000+.',
          'Contrôle : manuel complet ; automatisé partiel (métrique-limité).',
          'Compétences requises : manuel haut (domaine + prompt expertise) ; automatisé bas (une fois configuré).',
          '**Meilleures équipes** : manuel pour recherche/niches, automatisé pour haut-volume/répétitif.'
        ]
      },
      introduction: {
        title: 'Qu\'est-ce que l\'optimisation de prompt ?',
        id: 'introduction',
        snippets: [
          {
            label: 'En une phrase',
            content: 'Optimisation de prompt améliore la qualité de sortie LLM en perfectionnant le libellé, structure, exemples ou ton.'
          },
          {
            label: 'En termes simples',
            content: 'Quand un prompt donne des réponses médiocres, affinez-le vous-même (manuel) ou laissez un outil tester des variantes automatiquement. Ce guide clarifie quelle approche convient.'
          }
        ],
        content: [
          'Chaque prompt est un pari sur le libellé qui élicitera le bon comportement du LLM. Votre pari initial perd souvent. Optimisation affine cette wette jusqu\'à fiabilité.',
          'Deux chemins : **manuel** (vous itérez) et **automatisé** (outil cherche). Chacun a forces, faiblesses, coûts, délais. Mauvais choix = des semaines perdues.'
        ]
      },
      manualExplained: {
        title: 'Optimisation manuelle : quand vous accordez',
        id: 'manual-explained',
        content: [
          'L\'optimisation manuelle est éditer prompts à la main, tester la sortie, identifier erreurs, itérer. C\'est l\'art du prompt engineering.'
        ],
        items: [
          {
            label: 'Comment ça marche',
            content: [
              '1. Rédigez un prompt initial.',
              '2. Testez sur 5–10 vrais exemples.',
              '3. Identifiez patterns d\'erreurs (ex: « prompt trop vague »).',
              '4. Affinez libellé, ajoutez exemples, adaptez ton.',
              '5. Re-testez.',
              '6. Répétez jusqu\'à acceptable (5–20 itérations).'
            ]
          },
          {
            label: 'Forces',
            content: [
              '**Contrôle complet** : vous comprenez chaque mot.',
              '**Feedback immédiat** : cycle tight (minutes).',
              '**Savoir portable** : transfère à nouveaux modèles/tâches.',
              '**Traçabilité** : chaque changement est intentionnel.',
              '**Coûts bas** : aucun setup, frameworks, données.'
            ]
          },
          {
            label: 'Limitations',
            content: [
              '**Chronophage** : 2–8h ; ne scale pas.',
              '**Ne scale pas** : 1 personne = 1–3 prompts/jour.',
              '**Dur à reproduire** : savoir dans la tête.',
              '**Fragile** : prompts optimisés pour une version peuvent échouer après mise à jour.',
              '**Expertise requise** : domaine ET prompt writing.'
            ]
          },
          {
            label: 'Meilleur pour',
            content: [
              'Petits datasets (5–50 exemples).',
              'Tâches à enjeux élevés (contrats, diagnostic, conseil financier).',
              'Domaines nouveaux (pas de données historiques).',
              'Recherche ou projets ponctuels.',
              'Équipes sans données validées.'
            ]
          }
        ]
      },
      automatedExplained: {
        title: 'Optimisation automatisée : quand vous automatisez',
        id: 'automated-explained',
        content: [
          'L\'optimisation automatisée utilise un framework pour chercher systématiquement de meilleurs prompts. Définissez succès, laissez l\'outil trouver.'
        ],
        items: [
          {
            label: 'Comment (exemple: DSPy)',
            content: [
              '1. Définissez prompt de base.',
              '2. Fournissez exemples d\'entraînement (5–100 paires).',
              '3. Exécutez optimiseur : génère variantes.',
              '4. Évalue chacune vs. ensemble validation.',
              '5. Retourne meilleur prompt (ou top-3).',
              '6. Déployez.'
            ]
          },
          {
            label: 'Frameworks populaires',
            content: [
              '**DSPy** (Stanford) : recherche métrique-driven.',
              '**Anthropic Prompt Caching** : réduit coûts API.',
              '**LLM-as-judge** : un LLM note les variantes.',
              '**Synthetic data** : génère données automatiquement.',
              '**Langsmith, Braintrust** : plateformes versioning/éval.'
            ]
          },
          {
            label: 'Forces',
            content: [
              '**Scale sans effort** : 100–1.000+ prompts.',
              '**Reproductible** : même input = même output.',
              '**Trouve améliorations non-évidentes** : explore l\'espace.',
              '**Métrique-driven** : succès mesurable.',
              '**Coût-efficace à scale** : par-prompt baisse.'
            ]
          },
          {
            label: 'Limitations',
            content: [
              '**Requiert métriques claires** : but vague = échec.',
              '**Besoin données d\'entraînement** : 5+ exemples min ; 50+ sûr.',
              '**Overhead setup** : 30–60 min avant résultats.',
              '**Contrôle réduit** : pourquoi ça marche ? opaque.',
              '**Peut optimiser la mauvaise chose** : métrique up, utilisateurs mécontents.',
              '**Coûteux d\'abord** : API, outils, compute.'
            ]
          },
          {
            label: 'Meilleur pour',
            content: [
              'Tâches haut-volume (100+ prompts, millions requêtes).',
              'Systèmes production (cohérence > créativité).',
              'Optimisation coûts (Prompt Caching).',
              'Problèmes bien-compris, métriques claires.',
              'Équipes avec données et ressources engineering.'
            ]
          }
        ],
        callouts: [
          {
            type: '🔍',
            title: 'Fine-tuning ≠ optimisation prompt',
            content: 'Optimisation affine le *texte prompt* ; fine-tuning ré-entraîne les *poids modèle*. Domaines, outils, délais, ROI différents. Plupart des équipes : optimiser prompts d\'abord.'
          }
        ]
      },
      comparison: {
        title: 'Comparaison côte à côte',
        id: 'comparison',
        tableFormat: true,
        columns: ['Facteur', 'Manuel', 'Automatisé'],
        rows: [
          { Facteur: 'Vitesse/prompt', Manuel: '2–8h', Automatisé: '30 min setup + 10–60 min' },
          { Facteur: 'Coûts', Manuel: '~0€ (temps)', Automatisé: '10–500€ (API)' },
          { Facteur: 'Précision', Manuel: '95%+ custom', Automatisé: '80–90% standard' },
          { Facteur: 'Skalabilité', Manuel: '1–10', Automatisé: '100–1.000+' },
          { Facteur: 'Contrôle', Manuel: 'Complet', Automatisé: 'Partiel' },
          { Facteur: 'Compétences', Manuel: 'Haut', Automatisé: 'Bas' },
          { Facteur: 'Reproductibilité', Manuel: 'Difficile', Automatisé: 'Facile' },
          { Facteur: 'Cycles itération', Manuel: 'Semaines', Automatisé: 'Heures–jours' },
          { Facteur: 'Savoir transféré', Manuel: 'Portable', Automatisé: 'Spécifique' },
          { Facteur: 'Meilleur quand', Manuel: 'Enjeux haut', Automatisé: 'Volume haut' }
        ]
      },
      decisionFlowchart: {
        title: 'Diagramme décision',
        id: 'decision-flowchart',
        content: [
          'Suivez ces étapes pour décider quel chemin convient.'
        ],
        numberedItems: [
          '**<50 prompts à optimiser ?** OUI → Manual. NON → Étape 2.',
          '**Définissez succès comme métrique ?** OUI → Étape 3. NON → Manuel seul.',
          '**5+ exemples validation ?** OUI → Étape 4. NON → Commencez manuel, collectez, puis auto.',
          '**Production (haut-volume) ou recherche (ponctuel) ?** PRODUCTION → Automatisez. RECHERCHE → Manuel.',
          '**Décision** : Manuel ou Automatisé ?'
        ],
        callouts: [
          {
            type: '🔍',
            title: 'Le test 90%',
            content: 'Prompt manuel 90%+ ? Auto ne l\'aidera guère. Dessous 80% ? Essayez auto.'
          }
        ]
      },
      fiveScenarios: {
        title: 'Cinq scénarios réels',
        id: 'five-scenarios',
        content: [
          'Comment les équipes choisissent dans différentes situations :'
        ],
        numberedItems: [
          '**Petite équipe, domaine custom (Analyse documents juridiques)**\n  Scénario : 5 avocats analysent contrats.\n  Décision : **Manuel** — prompts spécialisés, volume bas (10–20/an), enjeux hauts.\n  Approche : Avocat senior rédige, équipe valide.',
          '**Entreprise, haut-volume (Routage support clients)**\n  Scénario : 100.000 tickets/mois, classer urgence.\n  Décision : **Automatisé** — haut-volume, métrique claire, scale essentielle.\n  Approche : DSPy + données historiques → prompts optimisés.',
          '**Recherche explorant technique nouvelle**\n  Scénario : Tester si chain-of-thought améliore code generation.\n  Décision : **Manuel d\'abord, puis Auto** — 5–10 variantes manuelles, puis recherche sys.',
          '**Pipeline ML production, budget serré**\n  Scénario : 1M appels/mois, réduire coûts 30%.\n  Décision : **Automatisé (Prompt Caching)** — haut-volume, coûts métrique.\n  Approche : Cache prompts fréquents, optimize longueur.',
          '**Tâche ponctuelle, délai tight**\n  Scénario : Prompt extraction entités, 50 docs, 2h.\n  Décision : **Manuel** — petit volume, délai serré, auto setup trop long.\n  Approche : Itérez sur 50 exemples, déployez.'
        ]
      },
      hybrid: {
        title: 'Combiner les deux : approches hybrides',
        id: 'hybrid-approaches',
        content: [
          'Meilleures équipes ne choisissent pas ; combinent. Commencez manuel, puis automatisez à scale.'
        ],
        items: [
          {
            label: 'Pattern 1 : Recherche manuelle → Production auto',
            content: 'Optimisez manuellement 2–4h. Puis automatisez à scale production. Ex: 1 jour optimisation → déploiement 10K requêtes.'
          },
          {
            label: 'Pattern 2 : Baseline auto → Raffinement manuel',
            content: 'Auto produit top-3. Inspectez manuellement, combinez les meilleures idées. Ex: Outil génère 1.000 variantes, choisissez 3 patterns, mergez.'
          },
          {
            label: 'Pattern 3 : Skalage progressif',
            content: 'Phase 1 (mois 1) : Manuel sur 5–10 ex. Phase 2 (mois 2) : Auto dès 50+ examples. Phase 3 (mois 3+) : Auto monitoring + human-in-loop edge cases.'
          }
        ],
        callouts: [
          {
            type: '🔍',
            title: 'Le piège maintenance',
            content: 'N\'automatisez pas ce que vous ne maîtrisez pas manuellement d\'abord. Auto sur prompts mal-compris = debugging impossible. Maîtrisez d\'abord.'
          }
        ]
      },
      commonMistakes: {
        title: 'Cinq erreurs courantes',
        id: 'common-mistakes',
        mistakes: [
          {
            mistake: 'Automatiser trop tôt',
            problem: 'Auto sur baseline faible gaspille compute (garbage in = garbage out) et produit prompts optimisés-mais-inutiles.',
            fix: '2–3h optimisation manuelle d\'abord. Atteignez 80%+ avant auto refinement.'
          },
          {
            mistake: 'Oublier valider résultats auto',
            problem: 'Auto converge sur métrique qui ne corrèle pas au succès réel (mauvaise chose optimisée).',
            fix: 'Toujours sampler et vérifier manuellement top-N prompts avant déployement. Testez out-of-distribution.'
          },
          {
            mistake: 'Un prompt pour tous contextes',
            problem: 'Essayer optimiser one-size-fits-all au lieu de segmenter par use-case, type user, distribution données.',
            fix: 'Créez prompts + workflows optimization séparés. Ex: « Enquête client » vs. « Support technique » vs. « Escalade ».'
          },
          {
            mistake: 'Ignorer trade-off longueur/coûts',
            problem: 'Auto ajoute tokens (clarté, exemples, reasoning), hausse coûts API sans bénéfice proportionnel.',
            fix: 'Définissez contrainte coût en métrique. Ex: accuracy + (token_count × cost_per_token).'
          },
          {
            mistake: 'Traiter manual tuning comme done',
            problem: 'Modèle change, attentes users évoluent, mais prompts manuels stagnent et perdent efficacité.',
            fix: 'Automatisez monitoring. Performance baisse >5% ? Re-tune ou automatisez. Réoptimisation Q3 standard.'
          }
        ]
      },
      faqSection: {
        title: 'FAQ',
        id: 'faq',
        faqs: [
          {
            q: 'Combien d\'itérations manuelles faut-il en général ?',
            a: '5–20 itérations selon complexité. Juridique/médical : 15–20 ; classification simple : 5–8.'
          },
          {
            q: 'Puis-je automatiser un prompt que je ne comprends pas ?',
            a: 'Pas efficacement. Auto amplifie problèmes. Comprenez baseline d\'abord.'
          },
          {
            q: 'Qu\'est-ce qu\'une bonne métrique d\'optimisation ?',
            a: 'Spécifique, mesurable, corrélée au succès réel. « Meilleur » est vague ; « précision >95%, latence <2s » est concret.'
          },
          {
            q: 'L\'automatisation fonctionne-t-elle avec GPT-4 ?',
            a: 'Oui, mais coûts API élevés. Plus efficace avec modèles open-source ou endpoints cachés.'
          },
          {
            q: 'Combien de données d\'entraînement ?',
            a: 'Min 5–10 exemples étiquetés ; 50+ idéal pour résultats robustes.'
          },
          {
            q: 'Passer du manuel à l\'automatisé en cours ?',
            a: 'Oui, recommandé. Commencez manuel, collectez 50+, puis automatisez.'
          },
          {
            q: 'Et si métrique monte mais users complaining ?',
            a: 'Mauvaise métrique. Auditez 10 plaintes, redéfinissez, réoptimisez.'
          },
          {
            q: 'Combien souvent réoptimiser ?',
            a: 'Manuel : seulement si perfo baisse/modèle change. Auto : trimestriellement ou si distribution change.'
          },
          {
            q: 'Utiliser auto pour brainstorm ?',
            a: 'Aide exploration, mais traitez comme raffinement, pas innovation. Idéation humaine d\'abord.'
          },
          {
            q: 'Optimisation prompt = fine-tuning ?',
            a: 'Non. Optimisation peaufine texte input ; fine-tuning ré-entraîne poids. Domaines, coûts, ROI différents.'
          }
        ]
      },
      relatedReading: {
        title: 'Lectures connexes',
        id: 'related-reading',
        items: [
          '[Rédiger des prompts qui marchent](/prompt-engineering/how-to-write-prompts-that-work?lang=fr)',
          '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting?lang=fr)',
          '[In-Context Learning et Few-Shot](/prompt-engineering/in-context-learning-few-shot-prompting?lang=fr)',
          '[Prompt Engineering vs. Fine-Tuning](/prompt-engineering/prompt-engineering-vs-fine-tuning?lang=fr)',
          '[Évaluer la qualité LLM](/prompt-engineering/evaluating-llm-output-quality?lang=fr)',
          '[Documentation DSPy](https://github.com/stanfordnlp/dspy) — framework official'
        ]
      },
      regionalContext: {
        title: 'Contexte régional & organisationnel',
        id: 'regional-context',
        content: [
          'Cette décision s\'applique mondialement. Cadres réglementaires (RGPD, data residency) peuvent favoriser l\'optimisation manuelle où traçabilité est critique.',
          'En industries régulées (santé, finance, droit), l\'optimisation manuelle gagne souvent : trail clair pour compliance. Auto est opaque ; humains ne peuvent pas expliquer pourquoi un prompt a été choisi.',
          'En recherche, auto brille : testez milliers variantes, rapportez findings agrégés. Contrôle < important que couverture.',
          'La plupart des équipes finissent hybride : manuel pour recherche/fondations, auto pour scaling/monitoring.',
          'Pour données sensibles professionnelles (données clients, conseils financiers, diagnostics), la Commission nationale de l\'informatique et des libertés (CNIL) recommande l\'IA locale quand vous gérez données sensibles. L\'optimisation manuelle offre transparence ; l\'automatisation distribuée ou cloud-based pose risques de résidency.'
        ]
      },
      sources: {
        title: 'Sources',
        id: 'sources',
        items: [
          '[Dépôt DSPy GitHub](https://github.com/stanfordnlp/dspy) — framework optimisation prompt systématique',
          '[Documentation Anthropic Prompt Caching](https://docs.anthropic.com) — réduire coûts API',
          '[Guide Prompt Engineering OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — techniques optimisation manuelle',
          '[Article DSPy Stanford](https://arxiv.org/abs/2310.03714) — recherche optimisation prompt/programme LLM automatisée',
          'Études cas interne PromptQuorum — optimisation manuelle + automatisée en systèmes production'
        ]
      }
    }
  },
  ja: { theme: 'Tools & Platforms', title: 'Optimization', seoTitle: 'Optimization', metaDescription: 'Optimization', intro: '[Translation coming soon](/prompt-engineering/best-prompt-engineering-tools-2026?lang=en).', publishDate: '2026-04-10', readTime: '8 min', educationalLevel: 'Intermediate', sections: {} },
  zh: { freshness_tier: 'evergreen', theme: 'Tools & Platforms', title: 'Optimization', seoTitle: 'Optimization', metaDescription: 'Optimization', intro: '[Translation coming soon](/prompt-engineering/best-prompt-engineering-tools-2026?lang=en).', publishDate: '2026-04-10', readTime: '8 min', educationalLevel: 'Intermediate', sections: {} }
};

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
  ja: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'プロンプト最適化：手動 vs 自動',
    seoTitle: 'プロンプト最適化 : 手動 vs 自動',
    metaDescription: '判断ガイド：プロンプトを手動調整すべき時、自動化すべき時を判断。コスト、時間、制御可能性、再現性を比較。判断フローチャート付き。',
    intro: '**LLMの出力を体系的に改善することを最適化と呼びます。** LLMの回答が満足できない場合、手動でプロンプトを改良するか、ツールで自動的によりよい表現を探させることができます。このガイドでは、チーム、タイムライン、制約に適したアプローチを明確にします。',
    publishDate: '2026-04-10',
    dateModified: '2026-04-10',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'プロンプト最適化',
    aboutTopics: ['プロンプト最適化', 'DSPy', 'プロンプト エンジニアリング', 'LLM改善'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'プロンプト最適化：手動 vs 自動',
      description: '判断ガイド：プロンプトを手動調整 vs 自動化。',
      datePublished: '2026-04-10',
      dateModified: '2026-04-10',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization?lang=ja',
      inLanguage: 'ja',
      about: [
        { '@type': 'Thing', name: '手動プロンプト最適化' },
        { '@type': 'Thing', name: '自動プロンプト最適化' },
        { '@type': 'Thing', name: 'DSPyフレームワーク' },
        { '@type': 'Thing', name: 'プロンプト エンジニアリング ベストプラクティス' }
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
        { '@type': 'Question', name: '手動調整は通常何回のイテレーションが必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'ドメインの複雑さに応じて5～20回。法律・医療：15～20回；単純な分類：5～8回。' } },
        { '@type': 'Question', name: '理解していないプロンプトを自動化できますか？', acceptedAnswer: { '@type': 'Answer', text: '効果的ではありません。自動化は問題を増幅させます。最初にベースプロンプトを理解してください。' } },
        { '@type': 'Question', name: '優れた最適化メトリックとは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '具体的で計測可能で、実際のユーザー成功と相関しています。「改善」は曖昧；「精度>95%、レイテンシ<2秒」は具体的。' } },
        { '@type': 'Question', name: 'GPT-4などの商用モデルで自動最適化は機能しますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、ただしAPI呼び出しコストが高くなります。オープンソースモデルまたはキャッシュされたエンドポイントの方が効果的です。' } },
        { '@type': 'Question', name: '自動最適化に必要なトレーニングデータはどのくらい？', acceptedAnswer: { '@type': 'Answer', text: '最小5～10の標識付き例；堅牢性のためには50+が理想的です。' } },
        { '@type': 'Question', name: 'プロジェクトの途中で手動から自動に切り替えられますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、推奨されています。手動で開始し、50+の例を収集してから自動化に切り替えます。' } },
        { '@type': 'Question', name: 'メトリックが改善しても、ユーザーが不満を述べている場合？', acceptedAnswer: { '@type': 'Answer', text: '誤ったメトリックを最適化しています。10件のユーザー不満を監査し、メトリックを再定義してから再最適化します。' } },
        { '@type': 'Question', name: 'プロンプトはどのくらいの頻度で再最適化すべき？', acceptedAnswer: { '@type': 'Answer', text: '手動：パフォーマンスが低下するか、モデルが変わった場合のみ。自動：四半期ごと、またはデータ分布が大きく変わった場合。' } },
        { '@type': 'Question', name: 'ブレーンストーミングに自動最適化を使用できますか？', acceptedAnswer: { '@type': 'Answer', text: '探索に役立つことがありますが、イノベーションではなく改善として扱ってください。人間のアイデア出しから始めて自動化を進めます。' } },
        { '@type': 'Question', name: 'プロンプト最適化はモデル微調整と同じですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。最適化は入力テキストを調整；微調整はモデル重みを再トレーニングします。異なるドメイン、コスト、ROIプロファイル。' } }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        title: '重要ポイント',
        id: 'key-takeaways',
        items: [
          '**手動調整は、カスタマイズされた高リスクプロンプト（法律、医療、ドメイン特有）に優れています**——速度よりもコントロールと監査証跡が重要。',
          '**自動化は数百～数千のプロンプトを経済的かつ再現的にスケーリングします**——最小限の人間監視で。',
          '**最高のチームは両方を使用します**：研究には手動、本番スケーリングには自動化。',
          '**ハイブリッドアプローチが勝ちます**：2～4時間の手動ベース最適化、その後、データセット全体の自動改善。'
        ]
      },
      tldrBox: {
        isTldr: true,
        title: '重要ポイント',
        id: 'tldr',
        content: [
          '**手動を選択**：プロンプト<50個、データ限定、リスク高い、メトリック曖昧。',
          '**自動を選択**：プロンプト100+個、訓練データあり、目標計測可能、エンジニアリング資源あり。',
          '**両方を利用**：手動研究→自動本番スケーリング。'
        ]
      },
      quickFacts: {
        title: '早見事実',
        id: 'quick-facts',
        numberedItems: [
          '手動最適化：**プロンプトあたり2～8時間**；自動化：セットアップ30分+最適化10～60分。',
          'コスト：手動~¥0（人件費）；自動¥1,000～50,000（API呼び出し、ツール）。',
          '精度：手動 95%+カスタムタスク；自動 80～90%標準メトリック。',
          'スケーラビリティ：手動1～10プロンプト；自動 100～1,000+。',
          'コントロール：手動=完全；自動=部分的（メトリック制限）。',
          'スキル要件：手動=高（ドメイン+プロンプト専門知識）；自動=低（セットアップ後）。',
          '**最高のチーム**：研究・ニッチには手動、高ボリューム反復には自動化。'
        ]
      },
      introduction: {
        title: 'プロンプト最適化とは？',
        id: 'introduction',
        snippets: [
          {
            label: '一文で',
            content: 'プロンプト最適化は、文言、構造、例、トーンを改善することでLLMの出力品質を向上させます。'
          },
          {
            label: '簡単に説明',
            content: 'プロンプトが不十分な回答を返す場合、手動で改良するか、ツールで自動的にバリエーションを試行できます。このガイドでは、チーム、タイムライン、制約に適したアプローチを明確にします。'
          }
        ],
        content: [
          'すべてのプロンプトは、適切なLLM動作を引き出すための文言の賭けです。初期の賭けは失敗することが多いです。最適化は、その賭けを精緻化し、LLMが確実に望むことを実行するまで改良するプロセスです。',
          '2つのパス：**手動**（自分で繰り返す）と**自動化**（ツールが探す）。各パスは強みと弱点があり、コストとタイムラインが異なります。誤った選択は数週間の損失につながります。'
        ]
      },
      manualExplained: {
        title: '手動プロンプト最適化：自分で調整する場合',
        id: 'manual-explained',
        content: [
          '「このセクションでは、手動による調整プロセスについて詳しく説明します。」手動最適化はプロンプトを手編集し、出力をテストし、エラーパターンを特定し、繰り返すことです。プロンプト エンジニアリングの芸術です。'
        ],
        items: [
          {
            label: '動作方式',
            content: [
              '1. 初期プロンプトを作成します。',
              '2. 5～10の実例でテストします。',
              '3. エラーパターンを特定します（例：「プロンプトが曖昧」）。',
              '4. 文言を改善し、例を追加し、トーンを調整します。',
              '5. 再テストします。',
              '6. 満足するまで繰り返します（通常5～20イテレーション）。'
            ]
          },
          {
            label: '強み',
            content: [
              '**完全なコントロール**：すべての単語を理解し、なぜそこにあるのか知っています。',
              '**即座のフィードバック**：テスト-反復-学習サイクルが短縮（分単位）。',
              '**ポータブルな知識**：新しいモデルや新しいタスクに転送可能。',
              '**監査証跡**：すべての変更は意図的で文書化できます。',
              '**低い初期コスト**：セットアップ、フレームワーク、データは不要。'
            ]
          },
          {
            label: '制限事項',
            content: [
              '**時間がかかる**：プロンプトあたり2～8時間；数百に拡張しません。',
              '**スケーリングしない**：1人 = 1日1～3プロンプト。',
              '**再現が難しい**：知識は人の頭の中に住んでいます。',
              '**脆弱**：あるバージョン用に最適化されたプロンプトはアップデート後に失敗する場合があります。',
              '**専門知識が必要**：ドメイン知識とプロンプト作成スキルの両方が必要。'
            ]
          },
          {
            label: '最適用途',
            content: [
              '小規模データセット（5～50例）。',
              'ハイリスクタスク（法的契約、医療診断、財務アドバイス）。',
              'novel ドメイン（過去データなし）。',
              '研究または単発プロジェクト。',
              'ラベル付き検証データを持たないチーム。'
            ]
          }
        ]
      },
      automatedExplained: {
        title: '自動プロンプト最適化：自動化する場合',
        id: 'automated-explained',
        content: [
          '自動最適化はフレームワークを使用して、より良いプロンプトを体系的に探索します。成功を定義してツールに見つけさせます。'
        ],
        items: [
          {
            label: '動作方式（例：DSPy）',
            content: [
              '1. ベースプロンプトを定義します。',
              '2. トレーニング例を提供します（5～100ラベル付き入出力ペア）。',
              '3. オプティマイザを実行：ツールがプロンプトバリエーションを生成。',
              '4. 各バリエーションを検証セットに対して評価。',
              '5. 最高パフォーマンスプロンプトを返します（またはトップ3候補）。',
              '6. 優勝プロンプトをデプロイします。'
            ]
          },
          {
            label: 'ポピュラーなフレームワーク&ツール',
            content: [
              '**DSPy**（スタンフォード）：メトリック駆動プロンプト探索；任意のLLMで動作。',
              '**Anthropic Prompt Caching**：繰り返される長いプロンプトのAPI費用を削減。',
              '**LLM-as-judge評価**：2番目のLLMを使用して候補プロンプトをスコア。',
              '**Synthetic data generation**：タスクから自動的にトレーニングデータ生成。',
              '**Langsmith、Braintrust**：プロンプトバージョン、評価、監視プラットフォーム。'
            ]
          },
          {
            label: '強み',
            content: [
              '**簡単にスケール**：100～1,000+プロンプトを同じ労力で最適化。',
              '**再現可能**：同じ入力+メトリック = 同じ出力、毎回。',
              '**非自明な改善を発見**：ツールは人間が見落とすスペースを探索。',
              '**メトリック駆動**：成功は計測可能で自動化。',
              '**スケーリングで費用効果的**：ボリュームが増えるとプロンプト単位コスト低下。'
            ]
          },
          {
            label: '制限事項',
            content: [
              '**明確なメトリック必須**：目的が曖昧 = 自動化失敗。',
              'トレーニングデータ必須**：最小5～10例；50+がより安全。',
              '**セットアップオーバーヘッド**：結果前に30～60分の設定。',
              '**制御が少ない**：最高のプロンプトが機能する理由を常に理解できません。',
              '**誤ったものを最適化する可能性**：メトリック改善しても、ユーザー不満。',
              '**初期コスト高い**：API、ツール、コンピュート。'
            ]
          },
          {
            label: '最適用途',
            content: [
              '高ボリュームタスク（100+プロンプト、数百万クエリ）。',
              '本番システム（創意性より一貫性）。',
              'コスト最適化（Prompt Caching）。',
              '理解された問題、明確なメトリック。',
              'ラベル付きデータとエンジニアリング資源を持つチーム。'
            ]
          }
        ],
        callouts: [
          {
            type: '🔍',
            title: 'ファインチューニング ≠ プロンプト最適化',
            content: '最適化は**プロンプトテキスト**を改善（何を聞くか）；ファインチューニングは**モデルウェイト**を再トレーニング（LLMのつの考え方）。異なるツール、タイムライン、ROI。大多数のチームはプロンプト最適化を最初に。'
          }
        ]
      },
      comparison: {
        title: '手動 vs 自動化：並列比較',
        id: 'comparison',
        tableFormat: true,
        columns: ['要因', '手動', '自動化'],
        rows: [
          { '要因': 'プロンプトあたりの速度', '手動': '2～8時間', '自動化': 'セットアップ30分+最適化10～60分' },
          { '要因': 'コスト', '手動': '~¥0（人件費）', '自動化': '¥1,000～50,000（API、ツール）' },
          { '要因': '精度', '手動': 'カスタムタスク 95%+', '自動化': '標準メトリック 80～90%' },
          { '要因': 'スケーラビリティ', '手動': '1～10', '自動化': '100～1,000+' },
          { '要因': 'コントロール', '手動': '完全', '自動化': '部分的' },
          { '要因': 'スキル要件', '手動': '高（ドメイン+プロンプト）', '自動化': '低（セットアップ後）' },
          { '要因': '再現性', '手動': '難しい（人依存）', '自動化': '簡単（保存レシピ）' },
          { '要因': 'イテレーションサイクル', '手動': '週', '自動化': '時間～日' },
          { '要因': '転移可能な学習', '手動': '新しいタスクに移植可能', '自動化': 'タスク特有' },
          { '要因': '最適な場合', '手動': 'リスク高い、データ限定', '自動化': 'ボリューム高い、メトリック明確' }
        ]
      },
      decisionFlowchart: {
        title: '判断フローチャート',
        id: 'decision-flowchart',
        content: [
          '「このセクションでは、手動または自動化のいずれかを決定するステップバイステップのプロセスを示します。」'
        ],
        numberedItems: [
          '**最適化するプロンプトが50未満ですか？** はい→手動（イテレーション高速）。いいえ→ステップ2へ。',
          '**成功をメトリック（精度、コヒーレンススコア、レイテンシ、コスト）として定義できますか？** はい→ステップ3へ。いいえ→手動のみ（自動化は計測目標が必要）。',
          '**検証用に5+ラベル付き例はありますか？** はい→ステップ4へ。いいえ→手動で開始、データ収集、後で自動化に切り替え。',
          '**これは本番（高ボリューム、反復）ですか、それとも研究（単発、探索的）ですか？** 本番→自動化。研究→手動。',
          '**決定**：手動（コントロール優先）vs 自動化（スケール優先）？'
        ],
        callouts: [
          {
            type: '🔍',
            title: '90%テスト',
            content: '手動調整プロンプトが検証セット上で90%+達成？自動化はあまり役に立たない。80%未満？自動化でギャップを埋める試行。'
          }
        ]
      },
      fiveScenarios: {
        title: '5つの実例シナリオ',
        id: 'five-scenarios',
        content: [
          '「このセクションでは、異なる状況でチームがどのようにアプローチを選択するかを示します。」'
        ],
        numberedItems: [
          '**小規模チーム、カスタムドメイン（法律文書審査）**\n  シナリオ：5人の弁護士が契約分析用プロンプトを使用。\n  決定：**手動**——プロンプットは高度に特化、低ボリューム（年10～20個）、リスク高い。\n  アプローチ：シニア弁護士が執筆、チーム検証、手動で繰り返し。',
          '**エンタープライズ、高ボリューム（カスタマーサポートルーティング）**\n  シナリオ：月100,000サポートチケット、緊急度分類が必要。\n  決定：**自動化**——高ボリューム、明確な成功メトリック（精度/リコール）、スケーラビリティ必須。\n  アプローチ：DSPy+過去チケットデータ→最適化分類プロンプト。',
          '**新しい技術を探索する研究**\n  シナリオ：Chain-of-Thoughtがコード生成を改善するか検証。\n  決定：**手動最初、その後自動化**——5～10手動バリエーション開始、体系的探索へ。\n  アプローチ：ベースプロンプト→手動バリエーション→自動スイープ。',
          '**本番MLパイプライン、予算制約**\n  シナリオ：月1M API呼び出し、コスト30%削減必要。\n  決定：**自動化（Prompt Caching等）**——高ボリューム、問題定義明確、コスト=メトリック。\n  アプローチ：頻繁なプロンプトキャッシュ、プロンプト長自動最適化。',
          '**単発タスク、タイト締め切り**\n  シナリオ：50文書からエンティティ抽出プロンプト、2時間で完了。\n  決定：**手動**——小ボリューム、タイト締め切り、自動化セットアップは手動より長い。\n  アプローチ：50例上で繰り返し、精緻化、デプロイ。'
        ]
      },
      hybrid: {
        title: '両方を組み合わせる：ハイブリッドアプローチ',
        id: 'hybrid-approaches',
        content: [
          '「このセクションでは、最高のチームが両方を組み合わせ、手動の洞察から始めてスケーリングで自動化する方法を説明します。」'
        ],
        items: [
          {
            label: 'パターン1：手動研究→自動本番',
            content: '手動最適化に2～4時間費やす。その後、本番スケーリングで自動化。例：1日最適化→10Kクエリデプロイ。'
          },
          {
            label: 'パターン2：自動ベース→手動改善',
            content: '自動化を実行、トップ3候補取得。手動で検査し、最高アイデアを組み合わせ。例：ツール1,000バリエーション生成→トップ3パターン選択、手動マージ。'
          },
          {
            label: 'パターン3：段階的スケーリング',
            content: 'フェーズ1（月1）：5～10例で手動。フェーズ2（月2）：50+例で自動。フェーズ3（月3+）：自動監視+エッジケースのHuman-in-the-loop。'
          }
        ],
        callouts: [
          {
            type: '🔍',
            title: 'メンテナンストラップ',
            content: '最初に手動で習得していないプロセスを自動化しないでください。理解不足のプロンプト自動化=デバッグほぼ不可能。最初に習得、その後自動化。'
          }
        ]
      },
      commonMistakes: {
        title: '5つの一般的な誤り',
        id: 'common-mistakes',
        mistakes: [
          {
            mistake: '早期に自動化',
            problem: '弱いベースで自動化実行は計算リソース無駄（ゴミin=ゴミout）、最適化済みだが無用なプロンプト生成。',
            fix: '最初2～3時間手動チューニング。80%+精度達成後、自動改善開始。'
          },
          {
            mistake: '自動結果の検証忘れ',
            problem: '自動化が実際ユーザー成功と相関しないメトリックに収束（誤ったもの最適化）。',
            fix: 'トップN最適化プロンプトを常にサンプル・手動検証、デプロイ前。Out-of-distribution データテスト。'
          },
          {
            mistake: 'すべてコンテキスト用同じプロンプト',
            problem: 'One-size-fits-all最適化試行、ユースケース/ユーザータイプ/データ分布による分割なし。',
            fix: 'シナリオ別の分割プロンプト+最適化ワークフロー。例：「顧客問い合わせ」vs「技術サポート」。'
          },
          {
            mistake: 'プロンプト長とコストトレードオフ無視',
            problem: '自動化がトークン追加（明確性、例、推論）、API コスト増加、比例利益なし。',
            fix: 'メトリックにコスト制約設定。例：精度+(token_count×cost_per_token)。'
          },
          {
            mistake: '手動チューニング完了扱い',
            problem: 'モデル更新、ユーザー期待変化、手動最適化プロンプト停滞、時間で効果喪失。',
            fix: '監視自動化。パフォーマンス>5%低下→再チューニング/自動化。Q3再最適化標準。'
          }
        ]
      },
      faqSection: {
        title: 'よくある質問',
        id: 'faq',
        faqs: [
          {
            q: '手動調整は通常何回のイテレーションが必要ですか？',
            a: 'ドメイン複雑さに応じて5～20回。法律・医療タスク：15～20回；単純分類：5～8回。'
          },
          {
            q: '理解していないプロンプトを自動化できますか？',
            a: '効果的ではありません。自動化は問題を増幅させます。最初にベースプロンプトを理解してください。'
          },
          {
            q: '優れた最適化メトリックとは何ですか？',
            a: '具体的で計測可能で、実際のユーザー成功と相関します。「改善」は曖昧；「精度>95%、レイテンシ<2秒」は具体的。'
          },
          {
            q: 'GPT-4などの商用モデルで自動最適化は機能しますか？',
            a: 'はい、ただしAPI呼び出しコスト高い。オープンソースモデルまたはキャッシュエンドポイントがより費用対効果的。'
          },
          {
            q: '自動最適化に必要なトレーニングデータはどのくらい？',
            a: '最小5～10ラベル付き例；50+が堅牢な結果のため理想的。'
          },
          {
            q: 'プロジェクト途中で手動から自動に切り替えられますか？',
            a: 'はい、推奨されています。手動で開始、50+例収集、その後自動化へ。'
          },
          {
            q: 'メトリック改善しても、ユーザーが不満を述べている場合？',
            a: '誤ったメトリック最適化しています。10件ユーザー不満監査、メトリック再定義、再最適化。'
          },
          {
            q: 'プロンプトはどのくらい頻度で再最適化？',
            a: '手動：パフォーマンス低下またはモデル変更時のみ。自動：四半期ごと、またはデータ分布大きく変更。'
          },
          {
            q: 'ブレーンストーミング用に自動最適化を使用できますか？',
            a: '探索の手助けなりますが、イノベーションではなく改善として扱用。人間の発想から開始。'
          },
          {
            q: 'プロンプト最適化はモデル微調整と同じですか？',
            a: 'いいえ。最適化は入力テキスト調整；微調整はモデルウェイト再トレーニング。異なるドメイン、コスト、ROI。'
          }
        ]
      },
      relatedReading: {
        title: '関連リーディング',
        id: 'related-reading',
        items: [
          '[機能するプロンプトの書き方](/prompt-engineering/how-to-write-prompts-that-work?lang=ja)',
          '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting?lang=ja)',
          '[インコンテキスト学習とFew-Shotプロンプティング](/prompt-engineering/in-context-learning-few-shot-prompting?lang=ja)',
          '[プロンプトエンジニアリング vs ファインチューニング](/prompt-engineering/prompt-engineering-vs-fine-tuning?lang=ja)',
          '[LLM出力品質の評価](/prompt-engineering/evaluating-llm-output-quality?lang=ja)',
          '[DSPyドキュメント](https://github.com/stanfordnlp/dspy) — 公式プロンプト最適化フレームワーク'
        ]
      },
      regionalContext: {
        title: '地域・組織コンテキスト',
        id: 'regional-context',
        content: [
          '「このセクションでは、日本とアジア太平洋地域での経済産業省（METI）のAIガバナンス、および全体的な規制考慮事項について説明します。」',
          '日本では、経済産業省（METI）がAI活用に関する分析ガバナンス2024フレームワークを発行しました。エンタープライズデプロイメントでは、METI推奨を確認することが重要です。',
          '規制業界（医療、金融、法律）では、手動最適化がしばしば優勢になります：明確なコンプライアンス証跡、説明可能性。自動化は不透明；なぜプロンプトが選ばれたのか説明不可能。',
          '研究では自動化が光ります：数千バリエーション検証、集約結果報告。制御<重要度。',
          'ほとんどのチームはハイブリッドに終了：研究・基礎には手動、スケーリング・監視には自動化。'
        ]
      },
      sources: {
        title: 'ソース',
        id: 'sources',
        items: [
          '[DSPy GitHubリポジトリ](https://github.com/stanfordnlp/dspy) — 体系的プロンプト最適化フレームワーク',
          '[Anthropic Prompt Cachingドキュメント](https://docs.anthropic.com) — API費用削減',
          '[OpenAIプロンプトエンジニアリングガイド](https://platform.openai.com/docs/guides/prompt-engineering) — 実践的手動最適化技術',
          '[Stanford DSPy論文](https://arxiv.org/abs/2310.03714) — 自動プロンプト・LLMプログラム最適化研究',
          'PromptQuorumの内部ケーススタディ — 本番システムでのハイブリッド手動+自動最適化'
        ]
      }
    }
  },
  zh: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'Prompt优化：手动 vs 自动化',
    seoTitle: 'Prompt优化 : 手动调优与自动化',
    metaDescription: '决策指南：何时手动调整Prompt，何时自动化。成本、时间、可控性、可再现性对比。含决策流程图。',
    intro: '**通过系统化改进来提升LLM输出质量的过程称为优化。** 当LLM的回答不令人满意时，你可以手动调整Prompt（手动方式），或者让工具自动搜索更好的表述（自动化方式）。本指南澄清了哪种方法适合你的团队、时间表和约束条件。',
    publishDate: '2026-04-10',
    dateModified: '2026-04-10',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt优化',
    aboutTopics: ['Prompt优化', 'DSPy', 'Prompt工程', 'LLM改进'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt优化：手动 vs 自动化',
      description: '决策指南：手动调整 vs 自动化。',
      datePublished: '2026-04-10',
      dateModified: '2026-04-10',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization?lang=zh',
      inLanguage: 'zh',
      about: [
        { '@type': 'Thing', name: '手动Prompt优化' },
        { '@type': 'Thing', name: '自动化Prompt优化' },
        { '@type': 'Thing', name: 'DSPy框架' },
        { '@type': 'Thing', name: 'Prompt工程最佳实践' }
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
        { '@type': 'Question', name: '手动调整通常需要多少次迭代？', acceptedAnswer: { '@type': 'Answer', text: '根据领域复杂度，5～20次迭代。法律/医疗任务：15～20次；简单分类：5～8次。' } },
        { '@type': 'Question', name: '我能自动化我不理解的Prompt吗？', acceptedAnswer: { '@type': 'Answer', text: '不能有效自动化。自动化会放大问题。先理解基础Prompt，然后再自动优化。' } },
        { '@type': 'Question', name: '什么是好的优化指标？', acceptedAnswer: { '@type': 'Answer', text: '具体、可测量且与真实用户成功相关联。"更好"太模糊；"精度>95%，延迟<2秒"很具体。' } },
        { '@type': 'Question', name: '自动优化对GPT-4等商用模型有效吗？', acceptedAnswer: { '@type': 'Answer', text: '有效，但API调用成本高。开源模型或缓存端点成本更低。' } },
        { '@type': 'Question', name: '自动优化需要多少训练数据？', acceptedAnswer: { '@type': 'Answer', text: '最少5～10个标注样本；50+个样本更能确保健壮结果。' } },
        { '@type': 'Question', name: '项目中途能从手动切换到自动化吗？', acceptedAnswer: { '@type': 'Answer', text: '可以，且推荐这样做。手动开始，收集50+个样本，然后切换到自动化。' } },
        { '@type': 'Question', name: '如果指标改善但用户仍然投诉怎么办？', acceptedAnswer: { '@type': 'Answer', text: '你在优化错误的指标。审查10条用户投诉，重新定义指标，然后重新优化。' } },
        { '@type': 'Question', name: '多久应该重新优化一次Prompt？', acceptedAnswer: { '@type': 'Answer', text: '手动：仅在性能下降或模型变化时。自动化：每季度，或数据分布有重大变化时。' } },
        { '@type': 'Question', name: '能用自动优化进行头脑风暴吗？', acceptedAnswer: { '@type': 'Answer', text: '可以帮助探索，但要视为改进而非创新。从人类创意开始，然后自动化优化。' } },
        { '@type': 'Question', name: 'Prompt优化等同于模型微调吗？', acceptedAnswer: { '@type': 'Answer', text: '不同。优化调整输入文本；微调重新训练模型权重。不同领域、成本和ROI。' } }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        title: '核心要点',
        id: 'key-takeaways',
        items: [
          '**手动优化擅长定制化、高风险Prompt**（法律、医疗、行业特定）——控制和审计追踪比速度更重要。',
          '**自动化以经济高效且可再现的方式扩展数百至数千个Prompt**——最少人工监督。',
          '**最好的团队两者都用**：研究用手动，生产扩展用自动。',
          '**混合方法胜出**：2～4小时手动基础优化，然后自动化数据集范围内的优化。'
        ]
      },
      tldrBox: {
        isTldr: true,
        title: '核心要点',
        id: 'tldr',
        content: [
          '选择**手动**：Prompt<50个、数据有限、风险高、指标模糊。',
          '选择**自动化**：Prompt 100+个、有训练数据、目标可测、有工程资源。',
          '**同时使用**：手动研究→自动生产扩展。'
        ]
      },
      quickFacts: {
        title: '快速事实',
        id: 'quick-facts',
        numberedItems: [
          '手动优化：**每个Prompt 2～8小时**；自动化：30分钟配置+10～60分钟优化。',
          '成本：手动~¥0（人工）；自动化¥100～5,000（API调用、工具）。',
          '精度：手动定制任务 95%+；自动化标准指标 80～90%。',
          '可扩展性：手动1～10个；自动化 100～1,000+。',
          '控制：手动=完全；自动化=部分（指标受限）。',
          '技能要求：手动=高（领域+Prompt专业知识）；自动化=低（配置后）。',
          '**最好的团队**：研究/利基用手动，高体量反复任务用自动化。'
        ]
      },
      introduction: {
        title: 'Prompt优化是什么？',
        id: 'introduction',
        snippets: [
          {
            label: '一句话',
            content: 'Prompt优化通过调整措辞、结构、示例或语气来改善LLM输出质量。'
          },
          {
            label: '简单说',
            content: '当Prompt给出平庸答案时，你可以手动改进Prompt或让工具自动尝试变体。本指南澄清哪种方法适合你的团队、时间表和约束。'
          }
        ],
        content: [
          'Prompt是你对LLM的赌注：用什么措辞会诱发正确行为。你的初始赌注通常失败。优化就是精化这个赌注，直到LLM可靠地做你想要的事。',
          '两条路：**手动**（你反复）和**自动化**（工具搜索）。各有优缺点、成本和时间表。选错会浪费数周。'
        ]
      },
      manualExplained: {
        title: '手动Prompt优化',
        id: 'manual-explained',
        content: [
          '手动优化是手工编辑Prompt、测试输出、识别失败模式、反复迭代。这是Prompt工程的艺术。'
        ],
        items: [
          {
            label: '工作流程',
            content: [
              '1.编写初始Prompt。2.在5～10个真实例子上测试。3.识别失败模式。4.调整措辞、添加示例、调整语气。5.重新测试。6.重复，直到满意（通常5～20次迭代）。'
            ]
          },
          {
            label: '优势',
            content: '**完全控制**：理解每个词汇和为什么在那里。**即时反馈**：测试-迭代-学习周期紧凑。**可转移知识**：学到的转移到新模型/新任务。**审计追踪**：每项改变可文档化。**低初始成本**：无需框架或数据。'
          },
          {
            label: '局限',
            content: '**耗时**：每个Prompt 2～8小时。**不可扩展**：1人1天1～3个。**难复现**：知识在人脑中。**脆弱**：针对一版本优化的可能在更新后失效。**需专业知识**：需领域和Prompt能力。'
          },
          {
            label: '适用于',
            content: '小型数据集（5～50例）、高风险任务（法律/医疗）、陌生领域、研究或单次项目、无标注数据的团队。'
          }
        ]
      },
      automatedExplained: {
        title: '自动化Prompt优化',
        id: 'automated-explained',
        content: [
          '自动化优化使用框架系统地搜索更好的Prompt。定义成功，让工具找到。'
        ],
        items: [
          {
            label: '工作方式（示例DSPy）',
            content: '1.定义基础Prompt。2.提供训练样本（5～100标注对）。3.运行优化器生成数千变体。4.评估每个对验证集。5.返回最佳Prompt。6.部署。'
          },
          {
            label: '流行框架',
            content: '**DSPy**：指标驱动搜索。**Prompt Caching**：降低API成本。**LLM-as-judge**：用LLM评分。**合成数据**：自动生成。**Langsmith/Braintrust**：版本/评估/监控。'
          },
          {
            label: '优势',
            content: '**轻松扩展**：100～1,000+ Prompt。**可再现**：相同输入=相同输出。**发现非显而易见改进**。**指标驱动**：成功可测。**经济高效**：大规模单位成本低。'
          },
          {
            label: '局限',
            content: '**需清晰指标**：模糊目标=失败。**需训练数据**：最少5～10。**配置开销**：30～60分钟。**控制减少**。**可能优化错误的东西**。**初期成本高**。'
          },
          {
            label: '适用于',
            content: '高体量（100+Prompt、数百万查询）、生产系统、成本优化、问题清晰指标明、有数据和资源的团队。'
          }
        ],
        callouts: [
          {
            type: '🔍',
            title: '微调≠Prompt优化',
            content: '优化调整**Prompt文本**（你问什么）；微调重新训练**模型权重**（LLM如何思考）。不同工具、时间表、ROI。'
          }
        ]
      },
      comparison: {
        title: '手动 vs 自动化',
        id: 'comparison',
        tableFormat: true,
        columns: ['因素', '手动', '自动化'],
        rows: [
          { '因素': '单Prompt速度', '手动': '2～8小时', '自动化': '30分钟+10～60分钟' },
          { '因素': '成本', '手动': '~¥0', '自动化': '¥100～5,000' },
          { '因素': '精度', '手动': '95%+', '自动化': '80～90%' },
          { '因素': '可扩展性', '手动': '1～10', '自动化': '100～1,000+' },
          { '因素': '控制', '手动': '完全', '自动化': '部分' },
          { '因素': '技能要求', '手动': '高', '自动化': '低' },
          { '因素': '再现性', '手动': '困难', '自动化': '容易' },
          { '因素': '迭代周期', '手动': '数周', '自动化': '数小时～天' },
          { '因素': '知识转移', '手动': '可移植', '自动化': '任务特定' },
          { '因素': '最适于', '手动': '风险高数据少', '自动化': '体量高指标清' }
        ]
      },
      decisionFlowchart: {
        title: '决策流程图',
        id: 'decision-flowchart',
        content: [
          '按这些步骤判断方向。'
        ],
        numberedItems: [
          '**Prompt<50个？** 是→手动。否→步骤2。',
          '**能定义成功指标？** 是→步骤3。否→仅手动。',
          '**有5+验证样本？** 是→步骤4。否→手动收集数据后自动。',
          '**生产还是研究？** 生产→自动。研究→手动。',
          '**决定**：手动还是自动化？'
        ],
        callouts: [
          {
            type: '🔍',
            title: '90%测试',
            content: '手动Prompt达90%？自动化帮助不大。低于80%？尝试自动化。'
          }
        ]
      },
      fiveScenarios: {
        title: '五个真实场景',
        id: 'five-scenarios',
        content: [
          '不同情况的选择方式：'
        ],
        numberedItems: [
          '**法律文件审查**：小团队、高度特化、低体量、高风险→**手动**。',
          '**客户支持路由**：企业、大体量、清晰指标→**自动化**。',
          '**新技术研究**：Chain-of-Thought测试→**手动优先+自动扩展**。',
          '**生产ML、预算受限**：大体量、成本是指标→**自动化（Caching）**。',
          '**单次任务、时间紧**：小体量、2小时期限→**手动**。'
        ]
      },
      hybrid: {
        title: '混合方法',
        id: 'hybrid-approaches',
        content: [
          '最好的团队组合两者：手动洞察→自动扩展。'
        ],
        items: [
          {
            label: '模式1：手动研究→自动生产',
            content: '2～4小时手动优化→自动生产扩展。例：1天优化→10K查询。'
          },
          {
            label: '模式2：自动基础→手动改进',
            content: '自动化得前3名→手动检查合并最佳。'
          },
          {
            label: '模式3：分阶段扩展',
            content: '月1手动5～10例→月2自动50+→月3+监控+边界Human。'
          }
        ],
        callouts: [
          {
            type: '🔍',
            title: '维护陷阱',
            content: '不自动化未手动掌握的流程。先掌握，再自动化。'
          }
        ]
      },
      commonMistakes: {
        title: '五个常见错误',
        id: 'common-mistakes',
        mistakes: [
          {
            mistake: '过早自动化',
            problem: '弱基础自动化浪费计算、产生无用Prompt。',
            fix: '2～3小时手动优化。80%+精度后自动。'
          },
          {
            mistake: '忽视自动结果验证',
            problem: '自动化收敛到无关指标。',
            fix: '样本并手动审查前N个Prompt再部署。'
          },
          {
            mistake: '万能Prompt',
            problem: '尝试优化通用Prompt，不分段。',
            fix: '场景分离Prompt+工作流。'
          },
          {
            mistake: '忽视长度成本权衡',
            problem: '自动化添加token，成本增加。',
            fix: '指标中设成本约束。'
          },
          {
            mistake: '手动调优视为完成',
            problem: '模型更新/期望变，优化停滞失效。',
            fix: '监控自动化、季度重新优化。'
          }
        ]
      },
      faqSection: {
        title: '常见问题',
        id: 'faq',
        faqs: [
          { q: '手动需多少次迭代？', a: '5～20次，根据复杂度。法律/医疗15～20；简单5～8。' },
          { q: '能自动化不理解的Prompt？', a: '不能。自动化放大问题。先理解基础。' },
          { q: '什么是好指标？', a: '具体、可测、与成功相关。"更好"太模糊；"精度>95%"很清。' },
          { q: '自动化对商用模型有效？', a: '有效但API成本高。开源更经济。' },
          { q: '需多少训练数据？', a: '最少5～10；50+更安全。' },
          { q: '中途能切换自动化？', a: '可以，推荐。手动→50+样本→自动。' },
          { q: '指标上升但用户投诉？', a: '优化错误指标。审查10条投诉，重定义。' },
          { q: '多久重新优化？', a: '手动：仅性能下降/模型变化。自动：季度。' },
          { q: '自动优化做头脑风暴？', a: '可帮助探索，视为改进非创新。' },
          { q: 'Prompt优化=微调？', a: '不同。优化调文本；微调重训练。不同领域成本ROI。' }
        ]
      },
      relatedReading: {
        title: '相关阅读',
        id: 'related-reading',
        items: [
          '[如何编写有效Prompt](/prompt-engineering/how-to-write-prompts-that-work?lang=zh)',
          '[Chain-of-Thought提示](/prompt-engineering/chain-of-thought-prompting?lang=zh)',
          '[上下文学习和少样本](/prompt-engineering/in-context-learning-few-shot-prompting?lang=zh)',
          '[Prompt工程 vs 微调](/prompt-engineering/prompt-engineering-vs-fine-tuning?lang=zh)',
          '[评估LLM输出质量](/prompt-engineering/evaluating-llm-output-quality?lang=zh)',
          '[DSPy官方文档](https://github.com/stanfordnlp/dspy)'
        ]
      },
      regionalContext: {
        title: '区域背景',
        id: 'regional-context',
        content: [
          '本决策适用全球。受管制行业（医疗、金融、法律）手动优化胜出：清晰合规证迹。自动化不透明。',
          '研究中自动化大放异彩：测数千变体，汇总。',
          '多数团队混合：研究手动，生产自动。',
          '中国、亚太地区：数据法规（《数据安全法》、跨境框架）可能利本地推理。自动化分布式/云可能带数据驻留风险。手动提供透明。'
        ]
      },
      sources: {
        title: '来源',
        id: 'sources',
        items: [
          '[DSPy GitHub](https://github.com/stanfordnlp/dspy) — 系统框架',
          '[Anthropic Caching](https://docs.anthropic.com) — 降低成本',
          '[OpenAI 指南](https://platform.openai.com/docs/guides/prompt-engineering) — 手动实践',
          '[Stanford论文](https://arxiv.org/abs/2310.03714) — 自动研究',
          'PromptQuorum案例 — 混合优化'
        ]
      }
    }
  }
};
};

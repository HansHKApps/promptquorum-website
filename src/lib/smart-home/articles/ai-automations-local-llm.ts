import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Smarter Home Automations with a Local LLM (2026)',
    seoTitle: 'AI Home Automation 2026: Local LLM Beyond IFTTT',
    intro:
      'A local LLM enables context-aware home automations described in plain language — going beyond rigid if-this-then-that rules. This guide explains the limits of rule-based automation, what an LLM adds, real example automations with their prompts, the architecture, and the guardrails that keep it reliable, all running locally with no cloud.',
    metaDescription:
      'Build context-aware home automations with a local LLM: plain-language rules that beat if-this-then-that. Examples, prompts, architecture, and guardrails.',
    twitterDescription:
      'A local LLM makes home automations context-aware: "if it looks like rain and I am leaving, remind me." Examples, prompts, and guardrails.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users designing context-aware automations',
    primaryTerm: 'AI home automation local LLM',
    targetKeywords: [
      'ai home automation local llm',
      'home assistant llm automation',
      'context aware home automation',
      'natural language home automation',
      'local llm automations',
    ],
    leadAnswerBlock:
      '**A local LLM lets you write automations as plain-language goals and reason over context — time, presence, and sensor states — instead of wiring rigid triggers.** It runs through Ollama and Home Assistant on your own hardware, so context-aware automation needs no cloud.',
    quickAnswerTop: {
      en: {
        question: 'How does a local LLM improve home automation?',
        answer:
          'A local LLM adds a layer that understands intent and context, so an automation can weigh time of day, who is home, and sensor states against a natural-language goal rather than firing one fixed action per trigger. It runs locally via Ollama and Home Assistant, keeping deterministic safety rules as plain automations.',
        bullets: [
          'Plain-language goals instead of rigid trigger → action rules',
          'Reasons over context: time, presence, sensors',
          'Runs locally via Ollama + Home Assistant — no cloud',
          'Keep safety-critical rules deterministic, not LLM-driven',
          'Best with a small, fast function-calling model',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Limits of Rule-Based Automation', anchor: 'rule-limits' },
      { label: 'What an LLM Adds', anchor: 'llm-adds' },
      { label: 'Example Automations', anchor: 'examples' },
      { label: 'The Architecture', anchor: 'architecture' },
      { label: 'Reliability and Guardrails', anchor: 'guardrails' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A local LLM turns rigid trigger-action rules into context-aware automations described in plain language, running locally via Ollama and Home Assistant.' },
      { type: 'plain-terms', content: 'Normal automations are exact: if motion detected, turn on light. They cannot weigh "is it already bright?" or "is anyone home?" unless you script every case. A local LLM can read the context and a plain-language goal and decide — and it runs on your own hardware, so it stays private.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Rule-based automation is deterministic but blind to context it was not scripted for',
          'A local LLM reasons over intent and context: time, presence, weather, sensor states',
          'Describe automations as plain-language goals; the model maps them to device actions',
          'Run it locally via Ollama + Home Assistant — no cloud, no data leaving the house',
          'Keep safety-critical automations (locks, alarms) as deterministic rules',
          'Use a small function-calling model and constrain scope for reliability',
        ],
      },
      ruleLimits: {
        id: 'rule-limits',
        title: 'The Limits of Rule-Based Automation',
        content:
          '**Rule-based automation fires a fixed action for a fixed trigger and cannot weigh context it was not explicitly scripted for.** It is reliable and fast, but every nuance needs another hand-written condition.',
        items: [
          '**Combinatorial blow-up:** "turn on the light, unless it is bright, unless someone is asleep, unless I am away" becomes many nested conditions.',
          '**No intent:** rules cannot interpret "make it cosy" — only exact entity states.',
          '**Brittle edge cases:** unscripted situations fall through with no sensible default.',
        ],
      },
      llmAdds: {
        id: 'llm-adds',
        title: 'What an LLM Adds: Context, Intent, Language',
        content:
          '**An LLM adds three things rules lack: it understands plain language, infers intent, and reasons over multiple context signals at once.** Use it where nuance matters; keep rules where determinism matters.',
        columns: ['Aspect', 'Rule-based', 'Local-LLM driven'],
        rows: [
          { 'Aspect': 'Trigger handling', 'Rule-based': 'Fixed action per trigger', 'Local-LLM driven': 'Weighs context before acting' },
          { 'Aspect': 'Phrasing', 'Rule-based': 'Exact conditions only', 'Local-LLM driven': 'Plain-language goals' },
          { 'Aspect': 'Context', 'Rule-based': 'Only scripted states', 'Local-LLM driven': 'Time, presence, sensors together' },
          { 'Aspect': 'Edge cases', 'Rule-based': 'Falls through', 'Local-LLM driven': 'Reasonable default from context' },
        ],
      },
      examples: {
        id: 'examples',
        title: 'Example Automations (With the Prompts)',
        content:
          '**These examples show where an LLM-driven automation beats a rule: each is a plain-language goal the model resolves against live context.** Wire them as Home Assistant automations that call the conversation agent.',
        numberedItems: [
          { title: 'Leaving-home reminder', whyItMatters: 'Prompt: "If it looks like rain in the next hour and I am heading out, remind me to take an umbrella." The model checks the weather entity and presence before notifying — a rule would need explicit thresholds.' },
          { title: 'Adaptive evening scene', whyItMatters: 'Prompt: "When the last person gets home after sunset, set a warm, low-light scene unless someone is already asleep." The model weighs presence, time, and sleep state together.' },
          { title: 'Energy nudge', whyItMatters: 'Prompt: "If heating is on and a window has been open more than five minutes, turn the heating down and tell me which room." The model combines two sensor states and explains its action.' },
        ],
        items: [
          'Provide the model the relevant entity states in the prompt so it has the context to reason over.',
          'For the end-to-end setup, see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'The Architecture',
        content:
          '**The automation triggers in Home Assistant, passes context to the local LLM via the conversation agent, and the model returns device actions.** Everything runs locally.',
        items: [
          'Home Assistant automation supplies the trigger and current entity states.',
          'The local model (via the [Ollama integration](/smart-home/home-assistant-ollama-integration)) reasons and returns actions.',
          'Only entities you expose to Assist are actionable, which bounds what the model can do.',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'Reliability and Guardrails',
        content:
          '**Keep safety-critical automations deterministic, constrain the model\'s scope, and prefer a small fast model to keep latency low.** LLM automations should enhance, not own, critical functions.',
        items: [
          '**Never route safety to the model:** smoke alarms, door locks, and security stay as plain rules.',
          '**Constrain scope:** expose only the entities the model needs and add a system prompt limiting actions.',
          '**Pick the model for latency:** see [best local LLM models for smart home control](/smart-home/best-local-llm-models-smart-home).',
          '**Log and review:** check the conversation logs to confirm the model acts as intended before trusting it unattended.',
          '**For agent patterns and workflows, see** [autonomous local agents that actually work](/power-local-llm/autonomous-local-agents-actually-work) (cross-cluster).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Are local-LLM automations reliable enough to trust?', a: 'For comfort and convenience automations, yes — when you constrain scope and review behaviour first. Keep safety-critical automations (locks, alarms, smoke detectors) as deterministic rules rather than routing them through the model.' },
          { q: 'Does an LLM replace all my automations?', a: 'No. Use deterministic rules for simple, time-sensitive, or safety-critical triggers, and reserve the LLM for automations that need context, nuance, or natural-language goals. The two work together.' },
          { q: 'What model is best for AI automations?', a: 'A small, fast, function-calling model keeps automation latency low while reliably emitting device actions. See the best local LLM models for smart home guide for current picks matched to hardware.' },
          { q: 'How much latency do LLM automations add?', a: 'Latency depends on model size and hardware. A small model on a mini PC with a GPU or NPU responds quickly enough for non-instant automations; avoid routing latency-critical triggers through the model.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the architecture these automations use',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — wire the conversation agent',
          '[Best Local LLM Models for Smart Home Control](/smart-home/best-local-llm-models-smart-home) — pick a low-latency model',
          '[Autonomous Local Agents That Actually Work](/power-local-llm/autonomous-local-agents-actually-work) — cross-cluster: agent patterns',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smarter Home Automations with a Local LLM (2026)',
      description: 'Build context-aware home automations with a local LLM: plain-language rules that beat if-this-then-that. Examples, prompts, architecture, and guardrails.',
      url: 'https://www.promptquorum.com/smart-home/ai-automations-local-llm',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home automation' }, { '@type': 'Thing', name: 'Local LLM' }, { '@type': 'Thing', name: 'Context-aware automation' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Are local-LLM automations reliable enough to trust?', acceptedAnswer: { '@type': 'Answer', text: 'For comfort and convenience automations, yes — when you constrain scope and review behaviour first. Keep safety-critical automations as deterministic rules.' } },
        { '@type': 'Question', name: 'Does an LLM replace all my automations?', acceptedAnswer: { '@type': 'Answer', text: 'No. Use deterministic rules for simple, time-sensitive, or safety-critical triggers, and reserve the LLM for context-rich, natural-language automations.' } },
        { '@type': 'Question', name: 'What model is best for AI automations?', acceptedAnswer: { '@type': 'Answer', text: 'A small, fast, function-calling model keeps latency low while reliably emitting device actions. Match the model to your hardware.' } },
        { '@type': 'Question', name: 'How much latency do LLM automations add?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on model size and hardware. A small model on a mini PC with a GPU or NPU responds quickly enough for non-instant automations.' } },
      ],
    },
  },
}

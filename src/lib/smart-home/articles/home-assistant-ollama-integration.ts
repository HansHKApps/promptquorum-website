import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Connect Ollama to Home Assistant: Local AI Assistant (2026)',
    seoTitle: 'Ollama + Home Assistant 2026: Local AI Setup',
    intro:
      'Home Assistant has a built-in Ollama integration that turns a locally hosted model into your conversation agent, controlling devices in natural language with no cloud. This guide walks through prerequisites, adding the integration, choosing a model, wiring the conversation agent, controlling devices, and troubleshooting — keeping Ollama setup and model selection linked out, not re-explained.',
    metaDescription:
      'Connect Ollama to Home Assistant step by step: add the integration, pick a model, set the conversation agent, and control devices in natural language. No cloud.',
    twitterDescription:
      'Wire Ollama into Home Assistant for a fully local AI assistant: add the integration, choose a model, control devices by voice or text. Zero cloud.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users adding a local AI conversation agent',
    primaryTerm: 'Home Assistant Ollama integration',
    targetKeywords: [
      'home assistant ollama integration',
      'ollama home assistant',
      'home assistant local llm',
      'home assistant conversation agent ollama',
      'local ai assistant home assistant',
    ],
    leadAnswerBlock:
      "**Add Home Assistant's Ollama integration, point it at your Ollama server, pick a model, then set that model as the Assist conversation agent — now you control devices in plain language, fully locally.** Ollama runs the model on your own hardware, so no command or home state leaves your network.",
    quickAnswerTop: {
      en: {
        question: 'How do I connect Ollama to Home Assistant?',
        answer:
          'Run Ollama on a machine reachable from Home Assistant, pull a model, then in Home Assistant add the Ollama integration (Settings → Devices & Services), enter the Ollama URL (default http://host:11434), and select your model. Finally, set the Ollama conversation entity as the agent in your Assist pipeline.',
        bullets: [
          'Run Ollama and pull a model on a reachable host',
          'Add the Ollama integration in Home Assistant',
          'Enter the Ollama URL (default port 11434) and pick a model',
          'Expose entities to Assist so the model can control them',
          'Set the Ollama agent in your Assist pipeline',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What This Gives You', anchor: 'what-this-gives' },
      { label: 'Prerequisites', anchor: 'prerequisites' },
      { label: 'Add the Integration', anchor: 'add-integration' },
      { label: 'Choose a Model', anchor: 'choose-model' },
      { label: 'Configure the Agent', anchor: 'configure-agent' },
      { label: 'Control Devices', anchor: 'control-devices' },
      { label: 'Troubleshooting', anchor: 'troubleshooting' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Add the Ollama integration in Home Assistant, point it at your Ollama server, pick a model, and set it as the Assist conversation agent.' },
      { type: 'plain-terms', content: 'Home Assistant can use a local AI model as its voice/chat brain. You run the model with Ollama on your own computer, tell Home Assistant where to find it, choose which model to use, and let it control the devices you expose. Everything runs on your hardware, so nothing is sent to a cloud service.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant ships an official Ollama integration — no custom add-on needed',
          'Run Ollama on the Home Assistant host or another machine on your LAN',
          'Add integration → enter Ollama URL (default http://host:11434) → select a model',
          'Expose only the entities you want the model to control, then set it as the Assist agent',
          'Use a small function-calling model for low latency; link out for model/hardware depth',
          'Everything is local: no command or home state leaves your network',
        ],
      },
      whatThisGives: {
        id: 'what-this-gives',
        title: 'What Connecting Ollama to Home Assistant Gives You',
        content:
          '**It gives Home Assistant a local conversation agent: you speak or type a request and the model maps it to device actions, with no cloud assistant in the loop.** This replaces the cloud voice agent (Alexa, Google) for natural-language control.',
        items: [
          '**Natural-language control:** "turn off everything downstairs" maps to the right entities instead of a fixed phrase.',
          '**Local and private:** the model runs through Ollama on your hardware — see [the local LLM smart home guide](/smart-home/local-llm-smart-home-complete-guide) for the full architecture.',
          '**Voice-ready:** pair it with a local voice pipeline for a private Alexa replacement — see [build a fully local voice assistant](/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'Prerequisites Before You Start',
        content:
          '**You need Home Assistant running, Ollama running on a reachable host, and one model pulled.** This guide does not re-explain installing Ollama — link out for that.',
        numberedItems: [
          'Home Assistant up and reachable on your LAN.',
          'Ollama installed and running on the same host or another machine — see [how to install Ollama](/local-llms/how-to-install-ollama).',
          'At least one model pulled (a small instruction model is the right starting point).',
          'Network reachability: confirm Home Assistant can reach the Ollama URL (default port 11434).',
        ],
      },
      addIntegration: {
        id: 'add-integration',
        title: 'How Do You Add the Ollama Integration?',
        content:
          '**In Home Assistant go to Settings → Devices & Services → Add Integration → Ollama, then enter the Ollama URL.** The default URL is http://<host>:11434.',
        columns: ['Step', 'Action', 'Result'],
        rows: [
          { 'Step': '1', 'Action': 'Settings → Devices & Services → Add Integration', 'Result': 'Integration picker opens' },
          { 'Step': '2', 'Action': 'Search "Ollama" and select it', 'Result': 'Connection dialog appears' },
          { 'Step': '3', 'Action': 'Enter the Ollama URL (http://host:11434)', 'Result': 'Home Assistant connects to Ollama' },
          { 'Step': '4', 'Action': 'Select a model from the list', 'Result': 'A conversation entity is created' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Which Model Should You Choose?',
        content:
          '**Choose a small, fast, instruction-following model with function-calling for home control — not the largest model you can run.** Latency matters more than raw capability here.',
        items: [
          'Use a small model if you want snappy responses on modest hardware.',
          'Prioritise function-calling/tool support so the model can emit device actions reliably.',
          'For a smart-home-specific shortlist, see [best local LLM models for smart home control](/smart-home/best-local-llm-models-smart-home).',
          'For deeper model mechanics, link out to [best local LLMs for coding](/power-local-llm/best-local-coding-models-2026) and the local-llms cluster — this guide does not re-rank models.',
        ],
      },
      configureAgent: {
        id: 'configure-agent',
        title: 'Configure the Conversation Agent',
        content:
          '**Set the Ollama conversation entity as the agent in your Assist pipeline, and expose only the entities you want it to control.** Exposure is what lets the model act on devices.',
        numberedItems: [
          'Open Settings → Voice assistants and edit (or create) an Assist pipeline.',
          'Set the conversation agent to the Ollama entity created by the integration.',
          'Under Assist exposure, expose the specific entities the model may control.',
          'Optionally add a custom prompt to constrain tone and scope.',
          'Save, then test from the Assist chat box before adding voice.',
        ],
      },
      controlDevices: {
        id: 'control-devices',
        title: 'Control Devices by Voice or Text',
        content:
          '**Once the agent is set and entities are exposed, type or speak a request in Assist and the model performs the action.** Keep deterministic safety automations as plain rules, not model-driven.',
        items: [
          'Test with simple commands first ("turn on the office light"), then natural phrasing.',
          'The model only controls entities you exposed — unexposed devices are untouched.',
          'Add a local voice front-end for hands-free use — see [local voice assistant](/smart-home/local-voice-assistant-smart-home).',
          'For context-aware automations beyond direct commands, see [AI automations with a local LLM](/smart-home/ai-automations-local-llm).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Troubleshooting Common Issues',
        content:
          '**Most problems are connectivity, model choice, or exposure.** Work through these in order.',
        items: [
          '**Cannot connect:** verify the Ollama URL and that port 11434 is reachable from Home Assistant; bind Ollama to 0.0.0.0 if on another host.',
          '**Slow responses:** switch to a smaller model or add a GPU/NPU — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          '**Model ignores devices:** confirm the entities are exposed to Assist and the Ollama entity is the active agent.',
          '**Wrong actions:** add a system prompt constraining scope, or reduce the number of exposed entities.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Which model should I pick for Home Assistant?', a: 'A small instruction-following model with function-calling support is the best starting point because home control needs fast, structured responses. The right size depends on your hardware; see the best local LLM models for smart home guide for current options.' },
          { q: 'Do I need a GPU to run Ollama with Home Assistant?', a: 'No, but it helps. A small model runs on a modern CPU or integrated GPU; a discrete GPU or NPU lowers latency so the assistant feels snappier. Match model size to your hardware.' },
          { q: 'Can the model control any device in Home Assistant?', a: 'Only entities you explicitly expose to Assist. Exposure is opt-in, so the model cannot act on devices you have not shared with it, which keeps control predictable and safe.' },
          { q: 'Does the Ollama integration work offline?', a: 'Yes. Ollama runs the model locally and Home Assistant controls devices over your LAN, so the assistant works with no internet. Only remote access from outside the home needs connectivity.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the full architecture this fits into',
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — add hands-free voice',
          '[Best Local LLM Models for Smart Home Control](/smart-home/best-local-llm-models-smart-home) — pick the right model',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: Ollama setup',
          '[Best Local Coding Models 2026](/power-local-llm/best-local-coding-models-2026) — cross-cluster: model depth',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Connect Ollama to Home Assistant: Local AI Assistant (2026)',
      description: 'Connect Ollama to Home Assistant step by step: add the integration, pick a model, set the conversation agent, and control devices in natural language. No cloud.',
      url: 'https://www.promptquorum.com/smart-home/home-assistant-ollama-integration',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Local AI assistant' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Which model should I pick for Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'A small instruction-following model with function-calling support, because home control needs fast structured responses. The right size depends on your hardware.' } },
        { '@type': 'Question', name: 'Do I need a GPU to run Ollama with Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'No, but it helps. A small model runs on a modern CPU or integrated GPU; a discrete GPU or NPU lowers latency.' } },
        { '@type': 'Question', name: 'Can the model control any device in Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Only entities you explicitly expose to Assist. Exposure is opt-in, so the model cannot act on devices you have not shared.' } },
        { '@type': 'Question', name: 'Does the Ollama integration work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ollama runs the model locally and Home Assistant controls devices over your LAN, so it works with no internet.' } },
      ],
    },
  },
}

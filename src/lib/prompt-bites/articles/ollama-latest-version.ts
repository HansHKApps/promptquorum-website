import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'What Is the Latest Ollama Version?',
    seoTitle: 'Latest Ollama Version? | Prompt Bites | PromptQuorum',
    metaDescription: 'Check ollama.com or GitHub for the latest Ollama version. Re-download the installer on Mac/Windows or run the install script on Linux to update. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers keeping Ollama up to date',
    parentArticle: '/local-llms/local-llm-model-updates-2026',
    siblingBites: ['best-ollama-models-right-now', 'can-you-run-qwen3-on-ollama'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'What is the latest Ollama version?',
        answer: 'Check ollama.com or the Ollama GitHub releases page for the current version. On Linux, run the install script to update. On Mac/Windows, download the latest installer.',
        bullets: [
          'Check: github.com/ollama/ollama/releases for the latest version',
          'Linux update: curl -fsSL https://ollama.com/install.sh | sh',
          'Mac/Windows: re-download installer from ollama.com',
        ],
        updatedDate: '2026-05',
      },
      de: { question: '[DE translation pending]', answer: '[DE translation pending]', bullets: [], updatedDate: '2026-05' },
      fr: { question: '[FR translation pending]', answer: '[FR translation pending]', bullets: [], updatedDate: '2026-05' },
      ja: { question: '[JA translation pending]', answer: '[JA translation pending]', bullets: [], updatedDate: '2026-05' },
      zh: { question: '[ZH translation pending]', answer: '[ZH translation pending]', bullets: [], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Run <code>ollama --version</code> to see your installed build; compare it to the GitHub releases page',
          'Linux update is one command: <code>curl -fsSL https://ollama.com/install.sh | sh</code>',
          'Mac and Windows: re-download the installer from ollama.com — no command line needed',
          'Updating never deletes your models — GGUF files are stored separately from the Ollama binary',
        ],
      },
      body1: {
        title: 'Where to Check Ollama\'s Version',
        content: [
          '<strong>As of May 2026, the latest stable Ollama release is listed at github.com/ollama/ollama/releases — that page shows the exact version number and release notes. This page is updated monthly — last verified May 2026.</strong>',
          'Run <code>ollama --version</code> in a terminal to see your installed build. The output is one line. If the GitHub releases page shows a higher version number, your install is behind.',
          'New model families — including Llama 3.1 and Qwen 3 — require a minimum Ollama version to load correctly. Recent releases also include measurable inference speed improvements for GGUF loading and multi-GPU context handling.',
        ],
      },
      body2: {
        title: 'How to Update Ollama Safely',
        content: [
          '<strong>Updating is safe: your downloaded models are stored in a separate directory and are never removed by an Ollama update.</strong> The user-facing REST API has maintained backwards compatibility since version 0.1.',
          'If you are several versions behind, run <code>ollama list</code> before updating to note your current models. Nothing will break, but this 30-second step eliminates uncertainty before a major version jump.',
          'For a complete changelog of what each Ollama release changed and which model families benefit, see the <a href="/local-llms/local-llm-model-updates-2026" class="text-primary hover:underline">local LLM model updates guide for 2026</a>.',
          'Last verified: May 2026. If the data above looks stale, check the official Ollama GitHub releases page or model library.',
        ],
        columns: ['Platform', 'Update Method', 'Notes'],
        rows: [
          { 'Platform': 'Linux', 'Update Method': 'Run install script (one command)', 'Notes': 'Overwrites binary, keeps models' },
          { 'Platform': 'macOS', 'Update Method': 'Re-download from ollama.com', 'Notes': 'Drag to Applications, models kept' },
          { 'Platform': 'Windows', 'Update Method': 'Re-download .exe from ollama.com', 'Notes': 'Run installer, models kept' },
        ],
        codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama Updates',
        faqs: [
          {
            q: 'How do I check which Ollama version I have installed?',
            a: 'Run <code>ollama --version</code> in a terminal. It prints your build number in one line, for example <code>ollama version 0.x.y</code>.',
          },
          {
            q: 'Will updating Ollama delete my downloaded models?',
            a: 'No. Ollama stores model files in <code>~/.ollama/models/</code> on Linux and macOS, separate from the application binary. Updates never touch that directory. See <a href="/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">the best Ollama models right now</a> if you want to add new ones after updating.',
          },
          {
            q: 'Is it safe to skip multiple Ollama versions when updating?',
            a: 'Yes. The Ollama installer always brings you to the latest version in one step regardless of how many versions you have missed. No incremental updates are required.',
          },
          {
            q: 'Does updating Ollama require updating my installed models?',
            a: 'No. GGUF model files are forward-compatible. The same files you downloaded for an older Ollama version run on the current version without re-downloading.',
          },
        ],
      },
    },
  },
  de: { theme: 'Ollama', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-06-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Ollama', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-06-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Ollama', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-06-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Ollama', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-06-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}

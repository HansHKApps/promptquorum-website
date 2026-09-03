// Bodega One Code Review 2026 — local-first BYOLLM coding IDE
// Slug: bodega-one-code-review-2026
// Sources: bodegaone.ai, www.bodegaone.ai, github.com/BodegaoneAI/bodegaone-releases

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Coding Assistants',
    heroImage: '/images/bodega-one-code-review-2026-hero-en.webp',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    next_refresh_due: '2027-03-03',
    educationalLevel: 'Intermediate',
    audience: 'Developers evaluating a local-first AI coding IDE that lets them choose their own LLM provider instead of being locked to one vendor',
    primaryTerm: 'Bodega One Code',
    title: 'Bodega One Code Review (2026): A Local-First BYOLLM Coding IDE',
    seoTitle: 'Bodega One Code Review 2026: BYOLLM Coding IDE',
    intro:
      'Bodega One Code is a coding IDE that bundles a code editor, an AI chat panel, and an autonomous coding agent into one application that runs on your own machine. The distinguishing idea is "Bring Your Own LLM" (BYOLLM): instead of shipping with one fixed model provider, Bodega One Code lets you point it at Ollama, LM Studio, llama.cpp, or a cloud API like OpenAI or Anthropic, and — according to the product — switch between them without restarting. This review covers what the IDE includes, how the provider system and the agent work according to Bodega One Code\'s own product pages, what the current pricing and licensing terms are, and how it compares to other local-capable coding tools like Continue.dev, Cline, and Aider.',
    metaDescription:
      'Bodega One Code review: a local-first coding IDE with BYOLLM provider switching, a Monaco editor, and an autonomous agent. Pricing, licensing, air-gap mode, and how it compares to Continue.dev, Cline, and Aider.',
    twitterDescription:
      'Bodega One Code review 2026: local-first coding IDE, BYOLLM across 10+ providers, Monaco editor, autonomous agent, air-gap mode. Pricing, licensing, and how it stacks up against Continue.dev, Cline, and Aider.',
    readTime: '10 min read',
    targetKeywords: [
      'bodega one code review',
      'bodega one code ide',
      'byollm coding ide',
      'bodega one code pricing',
      'bodega one code vs cursor',
    ],
    leadAnswerBlock:
      '**Bodega One Code is worth evaluating if you want one local application that combines a code editor, AI chat, and an autonomous coding agent, and you want to choose which LLM powers it rather than being locked to a single vendor.** The IDE supports Bring Your Own LLM (BYOLLM) through more than a dozen provider presets — Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, and Jan for local inference, plus OpenAI, Anthropic, Groq, Together AI, and OpenRouter for cloud models — and Bodega One Code states you can switch between providers without restarting the app. It is currently in open beta and free to use, including for commercial work; after the beta, personal use stays free on one machine and a one-time $39 license adds a second machine, with no subscription.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Bodega One Code for local-first AI coding?',
        answer:
          'Use Bodega One Code if you want a single desktop IDE that runs an editor, AI chat, and an autonomous coding agent locally while letting you pick the LLM provider — local (Ollama, LM Studio, llama.cpp) or cloud (OpenAI, Anthropic, Groq). Weigh it against Continue.dev, Cline, or Aider if you already work inside VS Code and want an extension instead of a separate application, and note that the Quality Enforcement Layer and agentic orchestration are proprietary, not open source.',
        bullets: [
          'BYOLLM: 10+ provider presets, including Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, and Jan.',
          'Bodega One Code states providers can be switched without restarting the IDE.',
          'Monaco-based editor, tab autocomplete, Git integration, and 26 built-in tools for file operations, shell commands, and web search.',
          'Vendor-described 5-step verification loop (syntax, type checks, tests) runs after every agent change, and a 9-layer air-gap mode is offered for offline use — neither has been independently benchmarked by PromptQuorum.',
          'Free for personal use on one machine; a one-time $39 license covers a second machine (no subscription). Currently in open beta, free for everyone including commercial use during the beta.',
          'Licensing is proprietary: a Business Source License applies to some components after distribution, and the Quality Enforcement Layer plus agentic orchestration stay proprietary.',
        ],
        updatedDate: '2026-09-03',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Is Bodega One Code?', anchor: 'what-is-bodega-one-code' },
      { label: 'Which LLM Providers Does It Support?', anchor: 'byollm-providers' },
      { label: 'What Does the Editor Include?', anchor: 'editor-and-tooling' },
      { label: 'What Is the Verification Loop?', anchor: 'quality-enforcement-loop' },
      { label: 'How Does Air-Gap Mode Work?', anchor: 'air-gap-mode' },
      { label: 'Pricing and Licensing', anchor: 'licensing-and-pricing' },
      { label: 'Trade-Offs', anchor: 'tradeoffs' },
      { label: 'Bodega One Code vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'Who Should Not Use It', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bodega One Code is a local-first AI coding IDE that lets developers bring their own LLM — through 10+ provider presets spanning local runtimes like Ollama and llama.cpp and cloud APIs like OpenAI and Anthropic — to power an in-editor chat and autonomous coding agent, with an optional air-gap mode for fully offline use.',
          },
          {
            type: 'plain-terms',
            text: 'It is a code editor, an AI chat panel, and an AI agent that can edit files and run commands, bundled into one desktop app, where you choose which AI model — running on your machine or in the cloud — does the work.',
          },
        ],
        items: [
          'Combines a code editor, AI chat, and an autonomous coding agent in one local application; positioned around "Bring Your Own LLM" (BYOLLM).',
          '10+ provider presets: Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, and Jan.',
          'Providers can reportedly be switched without restarting the application.',
          'Monaco-based editor (the same open-source editor component that powers VS Code), tab autocomplete, Git integration, and 26 built-in tools covering file operations, shell commands, and web search.',
          'Vendor-described 5-step verification loop runs after every agent change: syntax checks, type checks, and tests, before the change is marked complete.',
          'Air-gap mode uses 9 network-enforcement layers to block outbound connections, according to Bodega One Code, for use cases that require fully offline operation.',
          'Free for personal use on one machine; a one-time $39 Pro/commercial license adds a second machine, with no subscription. Currently in open beta, free for everyone including commercial use.',
          'Proprietary licensing overall — a Business Source License applies to some components after distribution, and the Quality Enforcement Layer plus agentic orchestration remain proprietary.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review describes what Bodega One Code publishes about itself on bodegaone.ai and its GitHub releases repository ([github.com/BodegaoneAI/bodegaone-releases](https://github.com/BodegaoneAI/bodegaone-releases)). PromptQuorum has not independently benchmarked the verification loop, the air-gap mode, or provider-switching latency, and no affiliate or commercial relationship exists between PromptQuorum and Bodega One Code.',
          },
        ],
      },
      whatIs: {
        id: 'what-is-bodega-one-code',
        title: 'What Is Bodega One Code?',
        content: [
          '**Bodega One Code is a desktop coding IDE that bundles an editor, an AI chat interface, and an autonomous coding agent, designed around the idea that the developer — not the vendor — chooses which LLM does the work.** Bodega One Code calls this approach "Bring Your Own LLM" (BYOLLM): the application itself is the interface and the tooling layer, while the model that answers chat questions or drives the coding agent can be a fully local model or a hosted cloud API, selected by the user.',
          'This is a different default from IDEs that ship tied to one model family. Because Bodega One Code separates the interface from the model provider, a developer can start on a cloud model like OpenAI or Anthropic for maximum capability, then move the same workflow to a local runtime such as Ollama or llama.cpp when working offline or on sensitive code, without switching applications.',
          'The product is distributed via bodegaone.ai (also reachable at www.bodegaone.ai), with release builds tracked on GitHub at github.com/BodegaoneAI/bodegaone-releases.',
        ],
      },
      byollmProviders: {
        id: 'byollm-providers',
        itemHeadings: true,
        title: 'Which LLM Providers Does Bodega One Code Support?',
        content: [
          '**Bodega One Code ships with more than a dozen built-in provider presets, covering both local inference runtimes and cloud APIs.** Selecting a preset points the editor, chat, and agent at that provider; Bodega One Code states the active provider can be changed without restarting the application.',
        ],
        columns: ['Provider', 'Category', 'What it is'],
        rows: [
          { 'Provider': 'Ollama', 'Category': 'Local runtime', 'What it is': 'Popular local model server; a common default for running open-weight models on a personal machine.' },
          { 'Provider': 'LM Studio', 'Category': 'Local runtime', 'What it is': 'Desktop app for downloading and serving local models through an OpenAI-compatible local API.' },
          { 'Provider': 'llama.cpp', 'Category': 'Local runtime', 'What it is': 'The C/C++ inference engine that underlies many local-model tools; can be run directly as a server.' },
          { 'Provider': 'vLLM', 'Category': 'Local runtime', 'What it is': 'High-throughput inference server typically used for self-hosted or workstation/server-grade local deployments.' },
          { 'Provider': 'LocalAI', 'Category': 'Local runtime', 'What it is': 'Self-hosted, OpenAI-API-compatible inference server for running open models locally.' },
          { 'Provider': 'KoboldCpp', 'Category': 'Local runtime', 'What it is': 'A llama.cpp-based local inference server originally popular in the local-roleplay and creative-writing community.' },
          { 'Provider': 'GPT4All', 'Category': 'Local runtime', 'What it is': 'Desktop app and local inference engine for running open-weight models without a cloud connection.' },
          { 'Provider': 'MLX', 'Category': 'Local runtime', 'What it is': 'Apple\'s array-computation framework used to run local models efficiently on Apple Silicon.' },
          { 'Provider': 'Jan', 'Category': 'Local runtime', 'What it is': 'Open-source, ChatGPT-style desktop app for running local models via a bundled or external inference engine.' },
          { 'Provider': 'OpenAI', 'Category': 'Cloud API', 'What it is': 'Hosted API access to OpenAI\'s GPT model family; requires an OpenAI API key and internet access.' },
          { 'Provider': 'Anthropic', 'Category': 'Cloud API', 'What it is': 'Hosted API access to Anthropic\'s Claude model family; requires an Anthropic API key and internet access.' },
          { 'Provider': 'Groq', 'Category': 'Cloud API', 'What it is': 'Hosted inference API known for low-latency serving of open-weight models on custom LPU hardware.' },
          { 'Provider': 'Together AI', 'Category': 'Cloud API', 'What it is': 'Hosted inference API offering a catalog of open-weight models on shared cloud infrastructure.' },
          { 'Provider': 'OpenRouter', 'Category': 'Cloud API', 'What it is': 'Hosted API router that proxies requests to many underlying model providers through one endpoint and key.' },
        ],
        note: 'Provider presets and defaults can change between Bodega One Code releases. Check the release notes at github.com/BodegaoneAI/bodegaone-releases and the current provider list on bodegaone.ai before assuming a specific preset is still available in the version you install.',
      },
      editorTooling: {
        id: 'editor-and-tooling',
        title: 'What Does the Editor and Tooling Include?',
        content: [
          '**The core editor in Bodega One Code is built on Monaco, the same open-source editor component that powers Visual Studio Code**, so syntax highlighting, multi-file editing, and keyboard-driven navigation should feel familiar to anyone coming from VS Code or a VS Code fork.',
        ],
        items: [
          '**Tab autocomplete** — inline, model-driven code completion triggered as you type, similar in concept to the completion features in Copilot-style tools.',
          '**Git integration** — source-control operations are available inside the IDE rather than requiring a separate terminal or Git client.',
          '**26 built-in tools** — the agent has access to a fixed toolset covering file operations (read, write, search across a project), shell command execution, and web search, which it can call as part of completing a coding task.',
          '**Chat plus agent, same application** — the chat interface for asking questions and the autonomous agent for making multi-step changes both run inside the same app and can use the same configured LLM provider.',
        ],
      },
      qualityEnforcement: {
        id: 'quality-enforcement-loop',
        title: 'What Is the 5-Step Verification Loop?',
        content: [
          '**Bodega One Code describes a 5-step verification loop that every agent-made change runs through before being marked complete, covering syntax checks, type checks, and tests.** This is the vendor\'s own description of the Quality Enforcement Layer; PromptQuorum has not independently measured its accuracy, false-positive rate, or effect on task completion time.',
          'The practical implication, according to the vendor\'s description, is that the agent is expected to catch broken syntax, type errors, and failing tests itself, rather than leaving that verification entirely to the developer after the fact. Whether that holds up depends on the project\'s language, test coverage, and configuration — none of which this review has tested directly.',
          'The Quality Enforcement Layer and the agentic orchestration around it are proprietary components of Bodega One Code, not part of any open-source release, even though a Business Source License applies to some other parts of the codebase after distribution.',
        ],
      },
      airGap: {
        id: 'air-gap-mode',
        title: 'How Does Air-Gap Mode Work?',
        content: [
          '**Bodega One Code offers an air-gap mode that, according to the vendor, applies 9 separate network-enforcement layers to block all outbound connections, for developers who need the IDE to run fully offline.** This is intended for scenarios where code, prompts, or project data must never leave the local machine — for example working with a fully local model provider (Ollama, llama.cpp, LocalAI) with no cloud fallback enabled.',
          'PromptQuorum has not independently verified how the 9 layers are implemented or tested their effectiveness at blocking every outbound path. Developers with a genuine air-gap requirement (regulated data, classified environments, contractual no-egress terms) should verify network behavior themselves — for example with an external firewall or network monitor — rather than relying on the feature\'s name alone.',
        ],
      },
      licensingPricing: {
        id: 'licensing-and-pricing',
        itemHeadings: true,
        title: 'What Does Bodega One Code Cost, and What Is the License?',
        content: [
          '**Bodega One Code is currently in open beta, and the vendor states the app is free for everyone during the beta period, including for commercial use.** The pricing below is what the vendor states applies after the beta period ends.',
        ],
        columns: ['Plan', 'Price', 'Machines', 'Notes'],
        rows: [
          { 'Plan': 'Personal', 'Price': 'Free', 'Machines': '1 machine', 'Notes': 'Personal, non-commercial use per the vendor\'s stated terms.' },
          { 'Plan': 'Pro / commercial', 'Price': '$39 one-time', 'Machines': '2 machines', 'Notes': 'One-time payment, no subscription, per the vendor\'s stated pricing.' },
          { 'Plan': 'Open beta (current)', 'Price': 'Free', 'Machines': 'Unrestricted during beta', 'Notes': 'Free for everyone, including commercial use, while the open beta is active.' },
        ],
        note: 'Licensing is proprietary overall. A Business Source License applies to some components of the codebase after distribution, and the Quality Enforcement Layer plus the agentic orchestration layer remain proprietary regardless of license tier. Confirm the current pricing, beta status, and license terms directly on bodegaone.ai before purchasing, since beta terms and pricing can change.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in practice', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Provider choice (BYOLLM)',
            'What it means in practice': 'You are not locked into one model vendor — switch between local and cloud providers as a project or budget requires.',
            'Limitation / caveat': 'Output quality still depends entirely on the chosen model; a small local model will not match a frontier cloud model\'s reasoning.',
          },
          {
            'Benefit': 'One application for editor, chat, and agent',
            'What it means in practice': 'No context-switching between a separate editor and a separate AI chat tool.',
            'Limitation / caveat': 'It is a standalone application, not a VS Code extension — moving from an existing VS Code setup means adopting a new app rather than adding a plugin.',
          },
          {
            'Benefit': 'Local-first, with an air-gap option',
            'What it means in practice': 'Can be configured to run entirely against local models with no outbound network traffic.',
            'Limitation / caveat': 'Air-gap effectiveness and the verification loop\'s accuracy are vendor claims that this review did not independently test.',
          },
          {
            'Benefit': 'No subscription pricing',
            'What it means in practice': 'A one-time $39 payment covers a second machine on the Pro/commercial tier; personal use on one machine is free.',
            'Limitation / caveat': 'Currently in open beta with free access for everyone — post-beta pricing and terms could change before general availability.',
          },
          {
            'Benefit': '26 built-in agent tools',
            'What it means in practice': 'File operations, shell commands, and web search are available to the agent out of the box, without configuring separate MCP servers.',
            'Limitation / caveat': 'A fixed toolset is less extensible than an open plugin/MCP ecosystem where third parties add new tools.',
          },
          {
            'Benefit': 'Familiar editing surface',
            'What it means in practice': 'The Monaco-based editor and tab autocomplete should feel immediately familiar to VS Code users.',
            'Limitation / caveat': 'The Quality Enforcement Layer and agentic orchestration are proprietary — you cannot inspect or modify how the verification loop works internally.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Bodega One Code vs. Continue.dev, Cline, and Aider',
        columns: ['Tool', 'Link', 'Form factor', 'Model choice', 'Local-first design', 'Key difference'],
        rows: [
          {
            'Tool': 'Bodega One Code',
            'Link': '[bodegaone.ai](https://bodegaone.ai)',
            'Form factor': 'Standalone desktop IDE (editor + chat + agent in one app)',
            'Model choice': 'BYOLLM: 10+ presets, local and cloud',
            'Local-first design': 'Built around local providers, with an optional air-gap mode',
            'Key difference': 'One application replaces the editor, not just an AI layer added to an existing one; core agent components are proprietary.',
          },
          {
            'Tool': 'Continue.dev',
            'Link': '[docs.continue.dev](https://docs.continue.dev)',
            'Form factor': 'Open-source extension for VS Code and JetBrains IDEs',
            'Model choice': 'Configurable to local (Ollama, LM Studio) or cloud providers',
            'Local-first design': 'Depends entirely on the configured provider; no dedicated air-gap feature',
            'Key difference': 'Adds AI chat and autocomplete to an editor you already use, rather than replacing the editor.',
          },
          {
            'Tool': 'Cline',
            'Link': '[cline.bot](https://cline.bot)',
            'Form factor': 'Open-source autonomous-agent extension for VS Code',
            'Model choice': 'Configurable to local or cloud providers via API-compatible endpoints',
            'Local-first design': 'Depends on the configured provider',
            'Key difference': 'Agent-focused extension with human-in-the-loop approval for file edits and commands, inside VS Code.',
          },
          {
            'Tool': 'Aider',
            'Link': '[aider.chat](https://aider.chat)',
            'Form factor': 'Open-source, terminal-based AI pair-programming tool',
            'Model choice': 'Configurable to local or cloud providers via API-compatible endpoints',
            'Local-first design': 'Depends on the configured provider; no GUI editor of its own',
            'Key difference': 'Command-line workflow built around Git commits, with no bundled editor UI.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Bodega One Code',
        items: [
          '**Developers who want one app instead of an editor plus a separate AI layer.** If maintaining a VS Code extension stack for AI features feels like friction, a single bundled IDE with editor, chat, and agent may be simpler to set up and maintain.',
          '**Developers who want to switch between local and cloud models on the same project.** BYOLLM support across 10+ presets means you can prototype against a cloud model and move to a local one (or the reverse) without changing tools.',
          '**Teams evaluating local-first tooling for cost or privacy reasons.** Running fully against a local provider like Ollama or llama.cpp keeps code and prompts off third-party servers, and the optional air-gap mode targets stricter no-egress requirements.',
          '**Users who prefer a one-time payment over a subscription.** The stated $39 one-time Pro/commercial license, rather than a recurring fee, may suit developers who want to avoid ongoing AI-tool subscriptions.',
          '**Early adopters comfortable evaluating beta software.** The current open-beta window gives free access, including commercial use, to test the IDE before committing to it long-term.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Bodega One Code',
        items: [
          '**Developers who want to stay inside VS Code itself.** Bodega One Code is a separate application, not a VS Code extension — if you need AI features added to your existing VS Code setup, Continue.dev or Cline fit that model better.',
          '**Teams that require fully open-source tooling end to end.** The Quality Enforcement Layer and agentic orchestration are proprietary, and a Business Source License applies to some components after distribution — teams that need every layer to be open source (as with Aider, Continue.dev, or Cline) should evaluate the license terms first.',
          '**Anyone who needs the verification loop or air-gap claims independently audited before relying on them.** This review reports what Bodega One Code publishes about the 5-step verification loop and the 9-layer air-gap mode; neither has been benchmarked or security-tested by PromptQuorum. Regulated or high-security environments should run their own verification.',
          '**Users who need a terminal-only workflow.** Bodega One Code is a GUI application built around an editor; developers who prefer a command-line-first pair-programming tool should look at Aider instead.',
          '**Anyone planning around today\'s free beta pricing as a long-term guarantee.** Post-beta pricing and license terms are the vendor\'s stated intent, not a contractual guarantee — confirm current terms on bodegaone.ai before budgeting around them.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is Bodega One Code?',
            a: 'Bodega One Code is a desktop coding IDE that combines a code editor, an AI chat panel, and an autonomous coding agent in one local application. Its distinguishing feature is BYOLLM (Bring Your Own LLM): the developer chooses which model provider — local or cloud — powers the chat and the agent.',
          },
          {
            q: 'What does BYOLLM mean?',
            a: 'BYOLLM stands for "Bring Your Own LLM." Instead of the IDE shipping tied to one model vendor, Bodega One Code lets you connect it to a provider of your choice — a local runtime like Ollama or llama.cpp, or a cloud API like OpenAI or Anthropic — through built-in provider presets.',
          },
          {
            q: 'Which LLM providers does Bodega One Code support?',
            a: 'Bodega One Code ships with 10+ provider presets: Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, and Jan for local inference, plus OpenAI, Anthropic, Groq, Together AI, and OpenRouter for cloud APIs. Bodega One Code states you can switch between them without restarting the app.',
          },
          {
            q: 'Is Bodega One Code free?',
            a: 'Bodega One Code is currently in open beta and free for everyone, including commercial use, according to the vendor. After the beta, the vendor\'s stated terms are: free for personal use on one machine, and a one-time $39 payment for a Pro/commercial license covering two machines, with no subscription.',
          },
          {
            q: 'Is Bodega One Code open source?',
            a: 'Not entirely. A Business Source License applies to some components after distribution, but the Quality Enforcement Layer and the agentic orchestration layer are proprietary and stay that way. Developers who need a fully open-source local coding tool should look at alternatives like Continue.dev, Cline, or Aider.',
          },
          {
            q: 'What editor does Bodega One Code use?',
            a: 'Bodega One Code is built on Monaco, the same open-source editor component used by Visual Studio Code, and adds tab autocomplete, Git integration, and 26 built-in tools for file operations, shell commands, and web search available to the agent.',
          },
          {
            q: 'What is the 5-step verification loop?',
            a: 'It is a quality-check process Bodega One Code describes running after every agent-made change — covering syntax checks, type checks, and tests — before the change is marked complete. This is the vendor\'s own description of its Quality Enforcement Layer; PromptQuorum has not independently benchmarked its accuracy.',
          },
          {
            q: 'What is air-gap mode in Bodega One Code?',
            a: 'Air-gap mode is a setting Bodega One Code describes as applying 9 network-enforcement layers to block all outbound connections, intended for developers who need the IDE to run fully offline. PromptQuorum has not independently tested how completely the 9 layers block outbound traffic — verify this yourself for any environment with a genuine no-egress requirement.',
          },
          {
            q: 'How does Bodega One Code compare to Continue.dev, Cline, or Aider?',
            a: 'Continue.dev and Cline are open-source extensions that add AI chat, autocomplete, or an autonomous agent to an existing VS Code (or JetBrains) install. Aider is a terminal-based, open-source AI pair-programming tool with no bundled editor. Bodega One Code is a separate, standalone application that bundles the editor itself with chat and an agent, and its core Quality Enforcement Layer and agentic orchestration are proprietary rather than open source.',
          },
          {
            q: 'Can I use Bodega One Code fully offline?',
            a: 'Yes, if you configure it to use a local provider (Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, or Jan) and enable air-gap mode, which Bodega One Code states blocks outbound network connections through 9 enforcement layers. Using a cloud provider (OpenAI, Anthropic, Groq, Together AI, OpenRouter) requires an internet connection regardless of this setting.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Bodega One Code\'s core idea — one local application that bundles an editor, AI chat, and an autonomous agent, with the model provider left entirely up to the developer — addresses a real gap between single-vendor AI IDEs and bare-bones extensions that require you to assemble your own provider configuration. The BYOLLM provider list is broad, covering the major local runtimes (Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, Jan) and the major cloud APIs (OpenAI, Anthropic, Groq, Together AI, OpenRouter) in one place, and the pricing model — free personal use plus a one-time $39 fee for a second machine, no subscription — is straightforward. The two features that most differentiate it, the 5-step verification loop and the 9-layer air-gap mode, are vendor-described rather than independently benchmarked here, so treat them as claims to verify against your own project and network requirements rather than guarantees. Developers who want a single bundled IDE and are comfortable with a proprietary Quality Enforcement Layer should try it during the current free open beta; developers who need a fully open-source stack, or who want to keep working inside VS Code itself, are better served by Continue.dev, Cline, or Aider.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Bodega One Code official site](https://bodegaone.ai) — product overview, BYOLLM provider list, pricing and licensing terms.',
          '[Bodega One Code (www)](https://www.bodegaone.ai) — mirrored product site.',
          '[Bodega One Code releases on GitHub](https://github.com/BodegaoneAI/bodegaone-releases) — release notes and build history.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Continue.dev vs. Cline vs. Aider](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — three open-source local coding tools that plug into an existing editor instead of replacing it.',
          '[Best Local Coding Models in 2026](/power-local-llm/best-local-coding-models-2026) — the model layer: which open-weight models to point a BYOLLM tool like Bodega One Code at.',
          '[Local AI Agents With MCP in 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — for readers comparing Bodega One Code\'s built-in tool list to an open MCP-based tool ecosystem.',
          '[Replace GitHub Copilot With a Local LLM](/power-local-llm/replace-github-copilot-with-local-llm) — broader context on moving AI coding assistance to local or self-hosted models.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library.',
        ],
      },
    },
  },
  de: {
    theme: 'Coding Assistants',
    heroImage: '/images/bodega-one-code-review-2026-hero-de.webp',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    next_refresh_due: '2027-03-03',
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die eine lokal-first KI-Coding-IDE evaluieren, bei der sie selbst den LLM-Anbieter wählen können, statt an einen Anbieter gebunden zu sein',
    primaryTerm: 'Bodega One Code',
    title: 'Bodega One Code im Test (2026): Eine lokal-first BYOLLM-Coding-IDE',
    seoTitle: 'Bodega One Code Test 2026: BYOLLM-Coding-IDE',
    intro:
      'Bodega One Code ist eine Coding-IDE, die einen Code-Editor, ein KI-Chat-Fenster und einen autonomen Coding-Agenten in einer Anwendung bündelt, die auf dem eigenen Rechner läuft. Das zentrale Konzept ist „Bring Your Own LLM" (BYOLLM): Statt fest an einen Modellanbieter gebunden zu sein, lässt sich Bodega One Code auf Ollama, LM Studio, llama.cpp oder eine Cloud-API wie OpenAI oder Anthropic ausrichten — laut Hersteller lässt sich dabei zwischen Anbietern wechseln, ohne die Anwendung neu zu starten. Dieser Test beschreibt, was die IDE laut den eigenen Produktseiten von Bodega One Code enthält, wie das Anbieter- und Agentensystem funktioniert, welche Preis- und Lizenzbedingungen aktuell gelten und wie das Tool im Vergleich zu anderen lokal-fähigen Coding-Tools wie Continue.dev, Cline und Aider abschneidet.',
    metaDescription:
      'Bodega One Code im Test: eine lokal-first Coding-IDE mit BYOLLM-Anbieterwechsel, Monaco-Editor und autonomem Agenten. Preise, Lizenz, Air-Gap-Modus und Vergleich mit Continue.dev, Cline und Aider.',
    twitterDescription:
      'Bodega One Code Test 2026: lokal-first Coding-IDE, BYOLLM über 10+ Anbieter, Monaco-Editor, autonomer Agent, Air-Gap-Modus. Preise, Lizenz und Vergleich mit Continue.dev, Cline und Aider.',
    readTime: '10 Min. Lesezeit',
    targetKeywords: [
      'bodega one code test',
      'bodega one code ide',
      'byollm coding ide',
      'bodega one code preis',
      'bodega one code vs cursor',
    ],
    leadAnswerBlock:
      '**Bodega One Code lohnt sich für alle, die eine einzige lokale Anwendung wollen, die Code-Editor, KI-Chat und einen autonomen Coding-Agenten vereint — und dabei selbst entscheiden möchten, welches LLM sie antreibt, statt an einen Anbieter gebunden zu sein.** Die IDE unterstützt Bring Your Own LLM (BYOLLM) über mehr als ein Dutzend Anbieter-Presets — Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX und Jan für lokale Inferenz sowie OpenAI, Anthropic, Groq, Together AI und OpenRouter für Cloud-Modelle — und laut Bodega One Code lässt sich zwischen Anbietern wechseln, ohne die App neu zu starten. Aktuell befindet sich das Tool in der offenen Betaphase und ist kostenlos nutzbar, auch kommerziell; nach der Beta bleibt die private Nutzung auf einem Gerät kostenlos, ein einmaliger Betrag von 39 $ schaltet ein zweites Gerät frei, ohne Abo.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Bodega One Code for local-first AI coding?',
        answer:
          'Use Bodega One Code if you want a single desktop IDE that runs an editor, AI chat, and an autonomous coding agent locally while letting you pick the LLM provider — local (Ollama, LM Studio, llama.cpp) or cloud (OpenAI, Anthropic, Groq). Weigh it against Continue.dev, Cline, or Aider if you already work inside VS Code and want an extension instead of a separate application, and note that the Quality Enforcement Layer and agentic orchestration are proprietary, not open source.',
        bullets: [
          'BYOLLM: 10+ provider presets, including Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, and Jan.',
          'Bodega One Code states providers can be switched without restarting the IDE.',
          'Monaco-based editor, tab autocomplete, Git integration, and 26 built-in tools for file operations, shell commands, and web search.',
          'Vendor-described 5-step verification loop (syntax, type checks, tests) runs after every agent change, and a 9-layer air-gap mode is offered for offline use — neither has been independently benchmarked by PromptQuorum.',
          'Free for personal use on one machine; a one-time $39 license covers a second machine (no subscription). Currently in open beta, free for everyone including commercial use during the beta.',
          'Licensing is proprietary: a Business Source License applies to some components after distribution, and the Quality Enforcement Layer plus agentic orchestration stay proprietary.',
        ],
        updatedDate: '2026-09-03',
      },
      de: {
        question: 'Sollte ich Bodega One Code für lokal-first KI-Coding nutzen?',
        answer:
          'Nutzen Sie Bodega One Code, wenn Sie eine einzelne Desktop-IDE wollen, die Editor, KI-Chat und einen autonomen Coding-Agenten lokal ausführt und dabei den LLM-Anbieter frei wählbar lässt — lokal (Ollama, LM Studio, llama.cpp) oder Cloud (OpenAI, Anthropic, Groq). Vergleichen Sie es mit Continue.dev, Cline oder Aider, wenn Sie bereits in VS Code arbeiten und eine Erweiterung statt einer eigenständigen Anwendung möchten, und beachten Sie, dass die Quality Enforcement Layer und die agentische Orchestrierung proprietär sind, nicht Open Source.',
        bullets: [
          'BYOLLM: 10+ Anbieter-Presets, u. a. Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX und Jan.',
          'Laut Bodega One Code lassen sich Anbieter wechseln, ohne die IDE neu zu starten.',
          'Monaco-basierter Editor, Tab-Autovervollständigung, Git-Integration und 26 eingebaute Tools für Dateioperationen, Shell-Befehle und Websuche.',
          'Vom Hersteller beschriebene 5-stufige Verifikationsschleife (Syntax, Typprüfung, Tests) läuft nach jeder Agenten-Änderung; ein 9-schichtiger Air-Gap-Modus wird für Offline-Nutzung angeboten — beides wurde von PromptQuorum nicht unabhängig geprüft.',
          'Kostenlos für private Nutzung auf einem Gerät; eine einmalige Lizenz für 39 $ deckt ein zweites Gerät ab (kein Abo). Aktuell in offener Beta, kostenlos für alle inklusive kommerzieller Nutzung.',
          'Die Lizenzierung ist insgesamt proprietär: Eine Business Source License gilt für manche Komponenten nach der Distribution, und die Quality Enforcement Layer sowie die agentische Orchestrierung bleiben proprietär.',
        ],
        updatedDate: '2026-09-03',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Was ist Bodega One Code?', anchor: 'what-is-bodega-one-code' },
      { label: 'Welche LLM-Anbieter werden unterstützt?', anchor: 'byollm-providers' },
      { label: 'Was bietet der Editor?', anchor: 'editor-and-tooling' },
      { label: 'Was ist die Verifikationsschleife?', anchor: 'quality-enforcement-loop' },
      { label: 'Wie funktioniert der Air-Gap-Modus?', anchor: 'air-gap-mode' },
      { label: 'Preise und Lizenz', anchor: 'licensing-and-pricing' },
      { label: 'Abwägungen', anchor: 'tradeoffs' },
      { label: 'Bodega One Code vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen es geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen es nicht geeignet ist', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bodega One Code ist eine lokal-first KI-Coding-IDE, mit der Entwickler ihr eigenes LLM einbinden können — über 10+ Anbieter-Presets, die lokale Laufzeiten wie Ollama und llama.cpp sowie Cloud-APIs wie OpenAI und Anthropic umfassen —, um einen integrierten Chat und einen autonomen Coding-Agenten zu betreiben, mit optionalem Air-Gap-Modus für vollständig offline Nutzung.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist ein Code-Editor, ein KI-Chat-Fenster und ein KI-Agent, der Dateien bearbeiten und Befehle ausführen kann — gebündelt in einer Desktop-App, in der Sie selbst wählen, welches KI-Modell (auf dem eigenen Rechner oder in der Cloud) die Arbeit übernimmt.',
          },
        ],
        items: [
          'Vereint Code-Editor, KI-Chat und autonomen Coding-Agenten in einer lokalen Anwendung; ausgerichtet auf „Bring Your Own LLM" (BYOLLM).',
          '10+ Anbieter-Presets: Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX und Jan.',
          'Anbieter lassen sich laut Hersteller wechseln, ohne die Anwendung neu zu starten.',
          'Monaco-basierter Editor (dieselbe Open-Source-Editor-Komponente, die auch VS Code antreibt), Tab-Autovervollständigung, Git-Integration und 26 eingebaute Tools für Dateioperationen, Shell-Befehle und Websuche.',
          'Vom Hersteller beschriebene 5-stufige Verifikationsschleife läuft nach jeder Agenten-Änderung: Syntaxprüfung, Typprüfung und Tests, bevor eine Änderung als abgeschlossen markiert wird.',
          'Der Air-Gap-Modus nutzt laut Bodega One Code 9 separate Netzwerk-Durchsetzungsebenen, um ausgehende Verbindungen zu blockieren — für Anwendungsfälle, die vollständig offline laufen müssen.',
          'Kostenlos für private Nutzung auf einem Gerät; eine einmalige Pro-/kommerzielle Lizenz für 39 $ deckt ein zweites Gerät ab, ohne Abo. Aktuell in offener Beta, kostenlos für alle inklusive kommerzieller Nutzung.',
          'Insgesamt proprietäre Lizenzierung — eine Business Source License gilt für manche Komponenten nach der Distribution, und die Quality Enforcement Layer sowie die agentische Orchestrierung bleiben proprietär.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test beschreibt, was Bodega One Code auf bodegaone.ai und im GitHub-Releases-Repository ([github.com/BodegaoneAI/bodegaone-releases](https://github.com/BodegaoneAI/bodegaone-releases)) über sich selbst veröffentlicht. PromptQuorum hat die Verifikationsschleife, den Air-Gap-Modus oder die Latenz beim Anbieterwechsel nicht unabhängig getestet, und es besteht keine Affiliate- oder Geschäftsbeziehung zwischen PromptQuorum und Bodega One Code.',
          },
        ],
      },
      whatIs: {
        id: 'what-is-bodega-one-code',
        title: 'Was ist Bodega One Code?',
        content: [
          '**Bodega One Code ist eine Desktop-Coding-IDE, die einen Editor, eine KI-Chat-Oberfläche und einen autonomen Coding-Agenten bündelt und darauf ausgelegt ist, dass die Entwicklerin oder der Entwickler — nicht der Hersteller — entscheidet, welches LLM die Arbeit übernimmt.** Bodega One Code nennt diesen Ansatz „Bring Your Own LLM" (BYOLLM): Die Anwendung selbst ist die Oberfläche und die Werkzeugschicht, während das Modell, das Chat-Fragen beantwortet oder den Coding-Agenten antreibt, ein vollständig lokales Modell oder eine gehostete Cloud-API sein kann, je nach Wahl der Nutzerin oder des Nutzers.',
          'Das unterscheidet sich vom Standard vieler IDEs, die fest an eine Modellfamilie gebunden sind. Weil Bodega One Code die Oberfläche vom Modellanbieter trennt, kann man mit einem Cloud-Modell wie OpenAI oder Anthropic für maximale Leistungsfähigkeit beginnen und denselben Workflow später auf eine lokale Laufzeit wie Ollama oder llama.cpp umstellen, etwa für Offline-Arbeit oder sensiblen Code, ohne die Anwendung zu wechseln.',
          'Das Produkt wird über bodegaone.ai (auch erreichbar unter www.bodegaone.ai) vertrieben, Release-Builds werden auf GitHub unter github.com/BodegaoneAI/bodegaone-releases nachverfolgt.',
        ],
      },
      byollmProviders: {
        id: 'byollm-providers',
        itemHeadings: true,
        title: 'Welche LLM-Anbieter unterstützt Bodega One Code?',
        content: [
          '**Bodega One Code liefert mehr als ein Dutzend eingebaute Anbieter-Presets, die sowohl lokale Inferenz-Laufzeiten als auch Cloud-APIs abdecken.** Die Auswahl eines Presets richtet Editor, Chat und Agent auf diesen Anbieter aus; laut Bodega One Code lässt sich der aktive Anbieter wechseln, ohne die Anwendung neu zu starten.',
        ],
        columns: ['Anbieter', 'Kategorie', 'Was es ist'],
        rows: [
          { 'Anbieter': 'Ollama', 'Kategorie': 'Lokale Laufzeit', 'Was es ist': 'Verbreiteter lokaler Modell-Server; häufig Standardwahl für offene Modelle auf dem eigenen Rechner.' },
          { 'Anbieter': 'LM Studio', 'Kategorie': 'Lokale Laufzeit', 'Was es ist': 'Desktop-App zum Herunterladen und Bereitstellen lokaler Modelle über eine OpenAI-kompatible lokale API.' },
          { 'Anbieter': 'llama.cpp', 'Kategorie': 'Lokale Laufzeit', 'Was es ist': 'Die C/C++-Inferenz-Engine, die vielen lokalen Modell-Tools zugrunde liegt; kann direkt als Server betrieben werden.' },
          { 'Anbieter': 'vLLM', 'Kategorie': 'Lokale Laufzeit', 'Was es ist': 'Inferenz-Server mit hohem Durchsatz, typischerweise für selbstgehostete Workstation- oder Server-Deployments.' },
          { 'Anbieter': 'LocalAI', 'Kategorie': 'Lokale Laufzeit', 'Was es ist': 'Selbstgehosteter, OpenAI-API-kompatibler Inferenz-Server für offene Modelle.' },
          { 'Anbieter': 'KoboldCpp', 'Kategorie': 'Lokale Laufzeit', 'Was es ist': 'Ein auf llama.cpp basierender lokaler Inferenz-Server, ursprünglich populär in der lokalen Rollenspiel- und Kreativ-Schreib-Community.' },
          { 'Anbieter': 'GPT4All', 'Kategorie': 'Lokale Laufzeit', 'Was es ist': 'Desktop-App und lokale Inferenz-Engine für offene Modelle ohne Cloud-Verbindung.' },
          { 'Anbieter': 'MLX', 'Kategorie': 'Lokale Laufzeit', 'Was es ist': 'Apples Framework für Array-Berechnungen, genutzt für effiziente lokale Modelle auf Apple Silicon.' },
          { 'Anbieter': 'Jan', 'Kategorie': 'Lokale Laufzeit', 'Was es ist': 'Open-Source-Desktop-App im ChatGPT-Stil für lokale Modelle über eine gebündelte oder externe Inferenz-Engine.' },
          { 'Anbieter': 'OpenAI', 'Kategorie': 'Cloud-API', 'Was es ist': 'Gehosteter API-Zugriff auf OpenAIs GPT-Modellfamilie; benötigt einen OpenAI-API-Schlüssel und Internetzugang.' },
          { 'Anbieter': 'Anthropic', 'Kategorie': 'Cloud-API', 'Was es ist': 'Gehosteter API-Zugriff auf Anthropics Claude-Modellfamilie; benötigt einen Anthropic-API-Schlüssel und Internetzugang.' },
          { 'Anbieter': 'Groq', 'Kategorie': 'Cloud-API', 'Was es ist': 'Gehostete Inferenz-API, bekannt für niedrige Latenz beim Bereitstellen offener Modelle auf eigener LPU-Hardware.' },
          { 'Anbieter': 'Together AI', 'Kategorie': 'Cloud-API', 'Was es ist': 'Gehostete Inferenz-API mit einem Katalog offener Modelle auf geteilter Cloud-Infrastruktur.' },
          { 'Anbieter': 'OpenRouter', 'Kategorie': 'Cloud-API', 'Was es ist': 'Gehosteter API-Router, der Anfragen über einen Endpunkt und Schlüssel an viele zugrunde liegende Modellanbieter weiterleitet.' },
        ],
        note: 'Anbieter-Presets und Standardeinstellungen können sich zwischen Bodega-One-Code-Releases ändern. Prüfen Sie die Release Notes unter github.com/BodegaoneAI/bodegaone-releases und die aktuelle Anbieterliste auf bodegaone.ai, bevor Sie davon ausgehen, dass ein bestimmtes Preset in der installierten Version noch verfügbar ist.',
      },
      editorTooling: {
        id: 'editor-and-tooling',
        title: 'Was umfasst Editor und Tooling?',
        content: [
          '**Der Kern-Editor in Bodega One Code basiert auf Monaco, derselben Open-Source-Editor-Komponente, die auch Visual Studio Code antreibt** — Syntax-Highlighting, Mehrdatei-Bearbeitung und tastaturgesteuerte Navigation sollten daher allen vertraut sein, die von VS Code oder einem VS-Code-Fork kommen.',
        ],
        items: [
          '**Tab-Autovervollständigung** — inline, modellgesteuerte Code-Vervollständigung während der Eingabe, konzeptionell ähnlich zu den Vervollständigungsfunktionen in Copilot-artigen Tools.',
          '**Git-Integration** — Versionskontroll-Operationen sind direkt in der IDE verfügbar, statt ein separates Terminal oder einen Git-Client zu erfordern.',
          '**26 eingebaute Tools** — der Agent hat Zugriff auf ein festes Toolset für Dateioperationen (Lesen, Schreiben, projektweite Suche), Shell-Befehlsausführung und Websuche, das er zur Erledigung einer Coding-Aufgabe aufrufen kann.',
          '**Chat und Agent in derselben Anwendung** — die Chat-Oberfläche für Fragen und der autonome Agent für mehrstufige Änderungen laufen beide in derselben App und können denselben konfigurierten LLM-Anbieter nutzen.',
        ],
      },
      qualityEnforcement: {
        id: 'quality-enforcement-loop',
        title: 'Was ist die 5-stufige Verifikationsschleife?',
        content: [
          '**Bodega One Code beschreibt eine 5-stufige Verifikationsschleife, die jede vom Agenten vorgenommene Änderung durchläuft, bevor sie als abgeschlossen markiert wird — mit Syntaxprüfung, Typprüfung und Tests.** Dies ist die Eigenbeschreibung der Quality Enforcement Layer durch den Hersteller; PromptQuorum hat weder Genauigkeit noch Falsch-Positiv-Rate noch Auswirkung auf die Bearbeitungszeit unabhängig gemessen.',
          'Die praktische Konsequenz laut Herstellerbeschreibung ist, dass der Agent defekte Syntax, Typfehler und fehlschlagende Tests selbst erkennen soll, statt diese Prüfung vollständig der Entwicklerin oder dem Entwickler im Nachhinein zu überlassen. Ob das in der Praxis trägt, hängt von Sprache, Testabdeckung und Konfiguration des jeweiligen Projekts ab — nichts davon wurde in diesem Test direkt geprüft.',
          'Die Quality Enforcement Layer und die zugehörige agentische Orchestrierung sind proprietäre Komponenten von Bodega One Code und nicht Teil einer Open-Source-Veröffentlichung, auch wenn für andere Teile der Codebasis nach der Distribution eine Business Source License gilt.',
        ],
      },
      airGap: {
        id: 'air-gap-mode',
        title: 'Wie funktioniert der Air-Gap-Modus?',
        content: [
          '**Bodega One Code bietet einen Air-Gap-Modus, der laut Hersteller 9 separate Netzwerk-Durchsetzungsebenen anwendet, um alle ausgehenden Verbindungen zu blockieren — für Entwicklerinnen und Entwickler, die die IDE vollständig offline betreiben müssen.** Gedacht ist das für Szenarien, in denen Code, Prompts oder Projektdaten das lokale Gerät niemals verlassen dürfen — etwa bei Nutzung eines vollständig lokalen Anbieters (Ollama, llama.cpp, LocalAI) ohne aktivierten Cloud-Fallback.',
          'PromptQuorum hat weder unabhängig geprüft, wie die 9 Ebenen implementiert sind, noch deren Wirksamkeit beim Blockieren jedes ausgehenden Pfads getestet. Entwicklerinnen und Entwickler mit einer echten Air-Gap-Anforderung (regulierte Daten, klassifizierte Umgebungen, vertragliche No-Egress-Klauseln) sollten das Netzwerkverhalten selbst prüfen — etwa mit einer externen Firewall oder einem Netzwerkmonitor —, statt sich allein auf den Namen der Funktion zu verlassen.',
        ],
      },
      licensingPricing: {
        id: 'licensing-and-pricing',
        itemHeadings: true,
        title: 'Was kostet Bodega One Code, und welche Lizenz gilt?',
        content: [
          '**Bodega One Code befindet sich aktuell in der offenen Betaphase, und laut Hersteller ist die App während der Beta für alle kostenlos, auch für kommerzielle Nutzung.** Die folgenden Preise gelten laut Hersteller nach Ende der Beta.',
        ],
        columns: ['Plan', 'Preis', 'Geräte', 'Hinweise'],
        rows: [
          { 'Plan': 'Privat', 'Preis': 'Kostenlos', 'Geräte': '1 Gerät', 'Hinweise': 'Private, nicht-kommerzielle Nutzung gemäß den vom Hersteller angegebenen Bedingungen.' },
          { 'Plan': 'Pro / kommerziell', 'Preis': '39 $ einmalig', 'Geräte': '2 Geräte', 'Hinweise': 'Einmalzahlung, kein Abo, gemäß den vom Hersteller angegebenen Preisen.' },
          { 'Plan': 'Offene Beta (aktuell)', 'Preis': 'Kostenlos', 'Geräte': 'Unbeschränkt während der Beta', 'Hinweise': 'Kostenlos für alle, auch kommerzielle Nutzung, solange die offene Beta läuft.' },
        ],
        note: 'Die Lizenzierung ist insgesamt proprietär. Für manche Komponenten der Codebasis gilt nach der Distribution eine Business Source License, und die Quality Enforcement Layer sowie die agentische Orchestrierungsschicht bleiben unabhängig von der Lizenzstufe proprietär. Prüfen Sie aktuelle Preise, Beta-Status und Lizenzbedingungen direkt auf bodegaone.ai, bevor Sie kaufen, da sich Beta-Bedingungen und Preise ändern können.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Anbieterwahl (BYOLLM)',
            'Was das in der Praxis bedeutet': 'Sie sind nicht an einen Modellanbieter gebunden — wechseln Sie zwischen lokalen und Cloud-Anbietern, je nach Projekt oder Budget.',
            'Einschränkung / Hinweis': 'Die Ausgabequalität hängt weiterhin vollständig vom gewählten Modell ab; ein kleines lokales Modell erreicht nicht das Reasoning eines Frontier-Cloud-Modells.',
          },
          {
            'Vorteil': 'Eine Anwendung für Editor, Chat und Agent',
            'Was das in der Praxis bedeutet': 'Kein Wechsel zwischen separatem Editor und separatem KI-Chat-Tool nötig.',
            'Einschränkung / Hinweis': 'Es ist eine eigenständige Anwendung, keine VS-Code-Erweiterung — der Umstieg von einem bestehenden VS-Code-Setup bedeutet eine neue App statt eines zusätzlichen Plugins.',
          },
          {
            'Vorteil': 'Lokal-first, mit Air-Gap-Option',
            'Was das in der Praxis bedeutet': 'Lässt sich so konfigurieren, dass es vollständig gegen lokale Modelle ohne ausgehenden Netzwerkverkehr läuft.',
            'Einschränkung / Hinweis': 'Wirksamkeit des Air-Gap-Modus und Genauigkeit der Verifikationsschleife sind Herstellerangaben, die in diesem Test nicht unabhängig geprüft wurden.',
          },
          {
            'Vorteil': 'Keine Abo-Preise',
            'Was das in der Praxis bedeutet': 'Eine einmalige Zahlung von 39 $ deckt ein zweites Gerät in der Pro-/kommerziellen Stufe ab; private Nutzung auf einem Gerät ist kostenlos.',
            'Einschränkung / Hinweis': 'Aktuell in offener Beta mit kostenlosem Zugang für alle — Preise und Bedingungen nach der Beta könnten sich bis zur allgemeinen Verfügbarkeit ändern.',
          },
          {
            'Vorteil': '26 eingebaute Agenten-Tools',
            'Was das in der Praxis bedeutet': 'Dateioperationen, Shell-Befehle und Websuche stehen dem Agenten von Haus aus zur Verfügung, ohne separate MCP-Server zu konfigurieren.',
            'Einschränkung / Hinweis': 'Ein festes Toolset ist weniger erweiterbar als ein offenes Plugin-/MCP-Ökosystem, in dem Dritte neue Tools hinzufügen.',
          },
          {
            'Vorteil': 'Vertraute Editieroberfläche',
            'Was das in der Praxis bedeutet': 'Der Monaco-basierte Editor und die Tab-Autovervollständigung sollten VS-Code-Nutzerinnen und -Nutzern sofort vertraut vorkommen.',
            'Einschränkung / Hinweis': 'Die Quality Enforcement Layer und die agentische Orchestrierung sind proprietär — die interne Funktionsweise der Verifikationsschleife lässt sich nicht einsehen oder verändern.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Bodega One Code vs. Continue.dev, Cline und Aider',
        columns: ['Tool', 'Link', 'Formfaktor', 'Modellwahl', 'Lokal-first-Design', 'Wesentlicher Unterschied'],
        rows: [
          {
            'Tool': 'Bodega One Code',
            'Link': '[bodegaone.ai](https://bodegaone.ai)',
            'Formfaktor': 'Eigenständige Desktop-IDE (Editor + Chat + Agent in einer App)',
            'Modellwahl': 'BYOLLM: 10+ Presets, lokal und Cloud',
            'Lokal-first-Design': 'Ausgerichtet auf lokale Anbieter, mit optionalem Air-Gap-Modus',
            'Wesentlicher Unterschied': 'Eine Anwendung ersetzt den Editor selbst, statt nur eine KI-Schicht auf einen bestehenden Editor zu legen; zentrale Agenten-Komponenten sind proprietär.',
          },
          {
            'Tool': 'Continue.dev',
            'Link': '[docs.continue.dev](https://docs.continue.dev)',
            'Formfaktor': 'Open-Source-Erweiterung für VS Code und JetBrains-IDEs',
            'Modellwahl': 'Konfigurierbar auf lokale (Ollama, LM Studio) oder Cloud-Anbieter',
            'Lokal-first-Design': 'Hängt vollständig vom konfigurierten Anbieter ab; keine dedizierte Air-Gap-Funktion',
            'Wesentlicher Unterschied': 'Ergänzt einen bereits genutzten Editor um KI-Chat und Autovervollständigung, statt den Editor zu ersetzen.',
          },
          {
            'Tool': 'Cline',
            'Link': '[cline.bot](https://cline.bot)',
            'Formfaktor': 'Open-Source-Erweiterung für autonome Agenten in VS Code',
            'Modellwahl': 'Konfigurierbar auf lokale oder Cloud-Anbieter über API-kompatible Endpunkte',
            'Lokal-first-Design': 'Hängt vom konfigurierten Anbieter ab',
            'Wesentlicher Unterschied': 'Agentenfokussierte Erweiterung mit Human-in-the-Loop-Freigabe für Dateiänderungen und Befehle, innerhalb von VS Code.',
          },
          {
            'Tool': 'Aider',
            'Link': '[aider.chat](https://aider.chat)',
            'Formfaktor': 'Open-Source-Terminal-Tool für KI-Pair-Programming',
            'Modellwahl': 'Konfigurierbar auf lokale oder Cloud-Anbieter über API-kompatible Endpunkte',
            'Lokal-first-Design': 'Hängt vom konfigurierten Anbieter ab; keine eigene grafische Editor-Oberfläche',
            'Wesentlicher Unterschied': 'Kommandozeilen-Workflow rund um Git-Commits, ohne eingebaute Editor-Oberfläche.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Bodega One Code geeignet ist',
        items: [
          '**Entwickler, die eine App statt Editor plus separater KI-Schicht wollen.** Wenn das Pflegen eines Stapels von VS-Code-Erweiterungen für KI-Funktionen als Reibung empfunden wird, kann eine gebündelte IDE mit Editor, Chat und Agent einfacher einzurichten und zu pflegen sein.',
          '**Entwickler, die im selben Projekt zwischen lokalen und Cloud-Modellen wechseln wollen.** BYOLLM-Unterstützung über 10+ Presets erlaubt es, mit einem Cloud-Modell zu prototypen und später (oder umgekehrt) auf ein lokales umzusteigen, ohne das Tool zu wechseln.',
          '**Teams, die lokal-first Tooling aus Kosten- oder Datenschutzgründen evaluieren.** Der vollständige Betrieb über einen lokalen Anbieter wie Ollama oder llama.cpp hält Code und Prompts von fremden Servern fern, und der optionale Air-Gap-Modus zielt auf strengere No-Egress-Anforderungen.',
          '**Nutzer, die eine Einmalzahlung einem Abo vorziehen.** Die angegebene einmalige Pro-/kommerzielle Lizenz für 39 $ statt einer wiederkehrenden Gebühr passt zu Entwicklern, die laufende KI-Tool-Abos vermeiden wollen.',
          '**Early Adopter, die mit dem Testen von Beta-Software vertraut sind.** Das aktuelle offene Beta-Fenster bietet kostenlosen Zugang inklusive kommerzieller Nutzung, um die IDE vor einer langfristigen Festlegung zu testen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Bodega One Code nicht geeignet ist',
        items: [
          '**Entwickler, die in VS Code selbst bleiben wollen.** Bodega One Code ist eine eigenständige Anwendung, keine VS-Code-Erweiterung — wer KI-Funktionen im bestehenden VS-Code-Setup ergänzen möchte, ist mit Continue.dev oder Cline besser bedient.',
          '**Teams, die durchgängig vollständig quelloffenes Tooling benötigen.** Die Quality Enforcement Layer und die agentische Orchestrierung sind proprietär, und für manche Komponenten gilt nach der Distribution eine Business Source License — Teams, die jede Schicht als Open Source benötigen (wie bei Aider, Continue.dev oder Cline), sollten zuerst die Lizenzbedingungen prüfen.',
          '**Wer die Aussagen zu Verifikationsschleife oder Air-Gap-Modus unabhängig geprüft haben muss, bevor er sich darauf verlässt.** Dieser Test gibt wieder, was Bodega One Code über die 5-stufige Verifikationsschleife und den 9-schichtigen Air-Gap-Modus veröffentlicht; keines von beidem wurde von PromptQuorum benchmarkt oder sicherheitsgeprüft. Regulierte oder hochsichere Umgebungen sollten eine eigene Prüfung durchführen.',
          '**Nutzer, die einen reinen Terminal-Workflow brauchen.** Bodega One Code ist eine grafische Anwendung rund um einen Editor; wer ein kommandozeilenorientiertes Pair-Programming-Tool bevorzugt, sollte sich Aider ansehen.',
          '**Wer die heutigen kostenlosen Beta-Preise als langfristige Garantie einplant.** Preise und Lizenzbedingungen nach der Beta sind die vom Hersteller angegebene Absicht, keine vertragliche Zusicherung — prüfen Sie aktuelle Bedingungen direkt auf bodegaone.ai, bevor Sie damit kalkulieren.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist Bodega One Code?',
            a: 'Bodega One Code ist eine Desktop-Coding-IDE, die Code-Editor, KI-Chat-Fenster und einen autonomen Coding-Agenten in einer lokalen Anwendung vereint. Das zentrale Merkmal ist BYOLLM (Bring Your Own LLM): Die Entwicklerin oder der Entwickler wählt, welcher Modellanbieter — lokal oder Cloud — Chat und Agent antreibt.',
          },
          {
            q: 'Was bedeutet BYOLLM?',
            a: 'BYOLLM steht für „Bring Your Own LLM". Statt fest an einen Modellanbieter gebunden zu sein, lässt sich Bodega One Code über eingebaute Anbieter-Presets mit einem Anbieter Ihrer Wahl verbinden — einer lokalen Laufzeit wie Ollama oder llama.cpp oder einer Cloud-API wie OpenAI oder Anthropic.',
          },
          {
            q: 'Welche LLM-Anbieter unterstützt Bodega One Code?',
            a: 'Bodega One Code liefert 10+ Anbieter-Presets: Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX und Jan für lokale Inferenz sowie OpenAI, Anthropic, Groq, Together AI und OpenRouter für Cloud-APIs. Laut Bodega One Code lässt sich zwischen ihnen wechseln, ohne die App neu zu starten.',
          },
          {
            q: 'Ist Bodega One Code kostenlos?',
            a: 'Bodega One Code befindet sich aktuell in der offenen Betaphase und ist laut Hersteller für alle kostenlos, auch für kommerzielle Nutzung. Nach der Beta gelten laut Hersteller folgende Bedingungen: kostenlos für private Nutzung auf einem Gerät, und eine einmalige Zahlung von 39 $ für eine Pro-/kommerzielle Lizenz, die zwei Geräte abdeckt, ohne Abo.',
          },
          {
            q: 'Ist Bodega One Code Open Source?',
            a: 'Nicht vollständig. Für manche Komponenten gilt nach der Distribution eine Business Source License, aber die Quality Enforcement Layer und die agentische Orchestrierungsschicht sind proprietär und bleiben es. Wer ein vollständig quelloffenes lokales Coding-Tool braucht, sollte Alternativen wie Continue.dev, Cline oder Aider prüfen.',
          },
          {
            q: 'Welchen Editor nutzt Bodega One Code?',
            a: 'Bodega One Code basiert auf Monaco, derselben Open-Source-Editor-Komponente, die auch Visual Studio Code nutzt, und ergänzt Tab-Autovervollständigung, Git-Integration sowie 26 eingebaute Tools für Dateioperationen, Shell-Befehle und Websuche, die dem Agenten zur Verfügung stehen.',
          },
          {
            q: 'Was ist die 5-stufige Verifikationsschleife?',
            a: 'Es handelt sich um einen Qualitätsprüfungsprozess, den Bodega One Code nach jeder vom Agenten vorgenommenen Änderung beschreibt — mit Syntaxprüfung, Typprüfung und Tests —, bevor die Änderung als abgeschlossen markiert wird. Dies ist die Eigenbeschreibung des Herstellers zu seiner Quality Enforcement Layer; PromptQuorum hat die Genauigkeit nicht unabhängig geprüft.',
          },
          {
            q: 'Was ist der Air-Gap-Modus in Bodega One Code?',
            a: 'Der Air-Gap-Modus ist eine Einstellung, die Bodega One Code als Anwendung von 9 Netzwerk-Durchsetzungsebenen zur Blockierung aller ausgehenden Verbindungen beschreibt, gedacht für Entwicklerinnen und Entwickler, die die IDE vollständig offline betreiben müssen. PromptQuorum hat nicht unabhängig geprüft, wie vollständig die 9 Ebenen ausgehenden Datenverkehr blockieren — prüfen Sie dies selbst für jede Umgebung mit echter No-Egress-Anforderung.',
          },
          {
            q: 'Wie schneidet Bodega One Code im Vergleich zu Continue.dev, Cline oder Aider ab?',
            a: 'Continue.dev und Cline sind Open-Source-Erweiterungen, die einer bestehenden VS-Code- (oder JetBrains-)Installation KI-Chat, Autovervollständigung oder einen autonomen Agenten hinzufügen. Aider ist ein terminalbasiertes, quelloffenes KI-Pair-Programming-Tool ohne eingebauten Editor. Bodega One Code ist eine eigenständige Anwendung, die den Editor selbst mit Chat und Agent bündelt, wobei die zentrale Quality Enforcement Layer und die agentische Orchestrierung proprietär statt Open Source sind.',
          },
          {
            q: 'Kann ich Bodega One Code vollständig offline nutzen?',
            a: 'Ja, wenn Sie es auf einen lokalen Anbieter konfigurieren (Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX oder Jan) und den Air-Gap-Modus aktivieren, der laut Bodega One Code ausgehende Netzwerkverbindungen über 9 Durchsetzungsebenen blockiert. Die Nutzung eines Cloud-Anbieters (OpenAI, Anthropic, Groq, Together AI, OpenRouter) erfordert unabhängig von dieser Einstellung eine Internetverbindung.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Die Kernidee von Bodega One Code — eine einzige lokale Anwendung, die Editor, KI-Chat und einen autonomen Agenten bündelt und die Wahl des Modellanbieters vollständig den Entwicklerinnen und Entwicklern überlässt — schließt eine reale Lücke zwischen KI-IDEs mit einem festen Anbieter und schlanken Erweiterungen, bei denen man die eigene Anbieterkonfiguration selbst zusammenstellen muss. Die BYOLLM-Anbieterliste ist breit und deckt die wichtigsten lokalen Laufzeiten (Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, Jan) sowie die wichtigsten Cloud-APIs (OpenAI, Anthropic, Groq, Together AI, OpenRouter) an einem Ort ab, und das Preismodell — kostenlose private Nutzung plus eine einmalige Gebühr von 39 $ für ein zweites Gerät, ohne Abo — ist unkompliziert. Die beiden Funktionen, die das Produkt am stärksten differenzieren, die 5-stufige Verifikationsschleife und der 9-schichtige Air-Gap-Modus, sind Herstellerangaben und wurden hier nicht unabhängig benchmarkt — behandeln Sie sie als Behauptungen, die Sie gegen die eigenen Projekt- und Netzwerkanforderungen prüfen sollten, nicht als Garantie. Entwicklerinnen und Entwickler, die eine gebündelte IDE wollen und mit einer proprietären Quality Enforcement Layer leben können, sollten das Tool in der aktuellen kostenlosen offenen Beta ausprobieren; wer einen vollständig quelloffenen Stack braucht oder in VS Code selbst bleiben möchte, ist mit Continue.dev, Cline oder Aider besser bedient.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Bodega One Code offizielle Website](https://bodegaone.ai) — Produktübersicht, BYOLLM-Anbieterliste, Preis- und Lizenzbedingungen.',
          '[Bodega One Code (www)](https://www.bodegaone.ai) — gespiegelte Produktseite.',
          '[Bodega One Code Releases auf GitHub](https://github.com/BodegaoneAI/bodegaone-releases) — Release Notes und Build-Historie.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Continue.dev vs. Cline vs. Aider](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local) — drei quelloffene lokale Coding-Tools, die einen bestehenden Editor erweitern statt ihn zu ersetzen.',
          '[Beste lokale Coding-Modelle 2026](/de/power-local-llm/best-local-coding-models-2026) — die Modellebene: welche offenen Modelle sich für ein BYOLLM-Tool wie Bodega One Code eignen.',
          '[Lokale KI-Agenten mit MCP 2026](/de/power-local-llm/local-ai-agents-with-mcp-2026) — für Leser, die die eingebaute Tool-Liste von Bodega One Code mit einem offenen MCP-basierten Tool-Ökosystem vergleichen wollen.',
          '[GitHub Copilot durch ein lokales LLM ersetzen](/de/power-local-llm/replace-github-copilot-with-local-llm) — breiterer Kontext zum Umstieg auf lokale oder selbstgehostete Modelle für KI-Coding-Unterstützung.',
          '[Power Local LLM Hub](/de/power-local-llm) — vollständige Guide-Bibliothek.',
        ],
      },
    },
  },
  fr: {
    theme: 'Coding Assistants',
    heroImage: '/images/bodega-one-code-review-2026-hero-fr.webp',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    next_refresh_due: '2027-03-03',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs évaluant un IDE de codage local-first qui leur laisse choisir leur propre fournisseur de LLM plutôt que d\'être liés à un seul fournisseur',
    primaryTerm: 'Bodega One Code',
    title: 'Bodega One Code (2026) : un IDE de codage local-first BYOLLM',
    seoTitle: 'Bodega One Code 2026 : IDE de codage BYOLLM',
    intro:
      'Bodega One Code est un IDE de codage qui réunit un éditeur de code, un panneau de chat IA et un agent de codage autonome dans une seule application qui s\'exécute sur votre propre machine. L\'idée centrale est le « Bring Your Own LLM » (BYOLLM, apportez votre propre LLM) : au lieu d\'être livré avec un fournisseur de modèle fixe, Bodega One Code peut être connecté à Ollama, LM Studio, llama.cpp, ou à une API cloud comme OpenAI ou Anthropic — et, selon l\'éditeur, permet de changer de fournisseur sans redémarrer l\'application. Cette évaluation détaille ce que contient l\'IDE d\'après les propres pages produit de Bodega One Code, le fonctionnement du système de fournisseurs et de l\'agent, les conditions de prix et de licence actuelles, et comment l\'outil se compare à d\'autres outils de codage compatibles local comme Continue.dev, Cline et Aider.',
    metaDescription:
      'Bodega One Code : un IDE de codage local-first avec changement de fournisseur BYOLLM, éditeur Monaco et agent autonome. Prix, licence, mode air-gap et comparaison avec Continue.dev, Cline et Aider.',
    twitterDescription:
      'Bodega One Code 2026 : IDE de codage local-first, BYOLLM sur 10+ fournisseurs, éditeur Monaco, agent autonome, mode air-gap. Prix, licence et comparaison avec Continue.dev, Cline et Aider.',
    readTime: '10 min de lecture',
    targetKeywords: [
      'bodega one code avis',
      'bodega one code ide',
      'byollm ide de codage',
      'bodega one code prix',
      'bodega one code vs cursor',
    ],
    leadAnswerBlock:
      '**Bodega One Code mérite d\'être évalué si vous voulez une seule application locale qui réunit éditeur de code, chat IA et agent de codage autonome, tout en choisissant vous-même quel LLM la fait fonctionner plutôt que d\'être lié à un seul fournisseur.** L\'IDE prend en charge le Bring Your Own LLM (BYOLLM) via plus d\'une douzaine de préréglages de fournisseurs — Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX et Jan pour l\'inférence locale, plus OpenAI, Anthropic, Groq, Together AI et OpenRouter pour les modèles cloud — et Bodega One Code indique qu\'il est possible de changer de fournisseur sans redémarrer l\'application. L\'outil est actuellement en bêta ouverte et gratuit, y compris pour un usage commercial ; après la bêta, l\'usage personnel reste gratuit sur une machine et une licence unique de 39 $ ajoute une seconde machine, sans abonnement.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Bodega One Code for local-first AI coding?',
        answer:
          'Use Bodega One Code if you want a single desktop IDE that runs an editor, AI chat, and an autonomous coding agent locally while letting you pick the LLM provider — local (Ollama, LM Studio, llama.cpp) or cloud (OpenAI, Anthropic, Groq). Weigh it against Continue.dev, Cline, or Aider if you already work inside VS Code and want an extension instead of a separate application, and note that the Quality Enforcement Layer and agentic orchestration are proprietary, not open source.',
        bullets: [
          'BYOLLM: 10+ provider presets, including Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, and Jan.',
          'Bodega One Code states providers can be switched without restarting the IDE.',
          'Monaco-based editor, tab autocomplete, Git integration, and 26 built-in tools for file operations, shell commands, and web search.',
          'Vendor-described 5-step verification loop (syntax, type checks, tests) runs after every agent change, and a 9-layer air-gap mode is offered for offline use — neither has been independently benchmarked by PromptQuorum.',
          'Free for personal use on one machine; a one-time $39 license covers a second machine (no subscription). Currently in open beta, free for everyone including commercial use during the beta.',
          'Licensing is proprietary: a Business Source License applies to some components after distribution, and the Quality Enforcement Layer plus agentic orchestration stay proprietary.',
        ],
        updatedDate: '2026-09-03',
      },
      fr: {
        question: 'Dois-je utiliser Bodega One Code pour du codage IA local-first ?',
        answer:
          'Utilisez Bodega One Code si vous voulez un seul IDE de bureau qui exécute localement un éditeur, un chat IA et un agent de codage autonome, tout en choisissant le fournisseur de LLM — local (Ollama, LM Studio, llama.cpp) ou cloud (OpenAI, Anthropic, Groq). Comparez-le à Continue.dev, Cline ou Aider si vous travaillez déjà dans VS Code et préférez une extension à une application séparée, et notez que la Quality Enforcement Layer et l\'orchestration agentique sont propriétaires, pas open source.',
        bullets: [
          'BYOLLM : 10+ préréglages de fournisseurs, dont Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX et Jan.',
          'Bodega One Code indique que les fournisseurs peuvent être changés sans redémarrer l\'IDE.',
          'Éditeur basé sur Monaco, autocomplétion par tabulation, intégration Git et 26 outils intégrés pour les opérations sur fichiers, les commandes shell et la recherche web.',
          'Une boucle de vérification en 5 étapes décrite par l\'éditeur (syntaxe, vérification de types, tests) s\'exécute après chaque modification de l\'agent, et un mode air-gap à 9 couches est proposé pour un usage hors ligne — aucun des deux n\'a été testé indépendamment par PromptQuorum.',
          'Gratuit pour un usage personnel sur une machine ; une licence unique de 39 $ couvre une seconde machine (pas d\'abonnement). Actuellement en bêta ouverte, gratuit pour tous y compris en usage commercial pendant la bêta.',
          'La licence est propriétaire dans l\'ensemble : une Business Source License s\'applique à certains composants après distribution, et la Quality Enforcement Layer ainsi que l\'orchestration agentique restent propriétaires.',
        ],
        updatedDate: '2026-09-03',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Qu\'est-ce que Bodega One Code ?', anchor: 'what-is-bodega-one-code' },
      { label: 'Quels fournisseurs LLM sont pris en charge ?', anchor: 'byollm-providers' },
      { label: 'Que contient l\'éditeur ?', anchor: 'editor-and-tooling' },
      { label: 'Qu\'est-ce que la boucle de vérification ?', anchor: 'quality-enforcement-loop' },
      { label: 'Comment fonctionne le mode air-gap ?', anchor: 'air-gap-mode' },
      { label: 'Prix et licence', anchor: 'licensing-and-pricing' },
      { label: 'Compromis', anchor: 'tradeoffs' },
      { label: 'Bodega One Code vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui c\'est adapté', anchor: 'who-should-use' },
      { label: 'Pour qui ce n\'est pas adapté', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bodega One Code est un IDE de codage IA local-first qui permet aux développeurs d\'apporter leur propre LLM — via plus de 10 préréglages de fournisseurs couvrant des runtimes locaux comme Ollama et llama.cpp, et des API cloud comme OpenAI et Anthropic — pour alimenter un chat intégré et un agent de codage autonome, avec un mode air-gap optionnel pour un usage entièrement hors ligne.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est un éditeur de code, un panneau de chat IA et un agent IA capable de modifier des fichiers et d\'exécuter des commandes, réunis dans une application de bureau où vous choisissez quel modèle IA — sur votre machine ou dans le cloud — fait le travail.',
          },
        ],
        items: [
          'Réunit éditeur de code, chat IA et agent de codage autonome dans une application locale unique ; construit autour du « Bring Your Own LLM » (BYOLLM).',
          '10+ préréglages de fournisseurs : Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX et Jan.',
          'Les fournisseurs peuvent, selon l\'éditeur, être changés sans redémarrer l\'application.',
          'Éditeur basé sur Monaco (le même composant open source qui alimente VS Code), autocomplétion par tabulation, intégration Git et 26 outils intégrés couvrant les opérations sur fichiers, les commandes shell et la recherche web.',
          'Une boucle de vérification en 5 étapes décrite par l\'éditeur s\'exécute après chaque modification de l\'agent : vérification de la syntaxe, des types et des tests, avant qu\'une modification ne soit marquée comme terminée.',
          'Le mode air-gap utilise, selon Bodega One Code, 9 couches distinctes d\'application réseau pour bloquer les connexions sortantes, pour les cas nécessitant un fonctionnement entièrement hors ligne.',
          'Gratuit pour un usage personnel sur une machine ; une licence Pro/commerciale unique de 39 $ ajoute une seconde machine, sans abonnement. Actuellement en bêta ouverte, gratuit pour tous y compris en usage commercial.',
          'Licence globalement propriétaire — une Business Source License s\'applique à certains composants après distribution, et la Quality Enforcement Layer ainsi que l\'orchestration agentique restent propriétaires.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cette évaluation décrit ce que Bodega One Code publie sur lui-même sur bodegaone.ai et son dépôt GitHub de releases ([github.com/BodegaoneAI/bodegaone-releases](https://github.com/BodegaoneAI/bodegaone-releases)). PromptQuorum n\'a pas testé indépendamment la boucle de vérification, le mode air-gap ni la latence de changement de fournisseur, et il n\'existe aucune relation d\'affiliation ou commerciale entre PromptQuorum et Bodega One Code.',
          },
        ],
      },
      whatIs: {
        id: 'what-is-bodega-one-code',
        title: 'Qu\'est-ce que Bodega One Code ?',
        content: [
          '**Bodega One Code est un IDE de codage de bureau qui réunit un éditeur, une interface de chat IA et un agent de codage autonome, conçu autour de l\'idée que c\'est le développeur — pas l\'éditeur logiciel — qui choisit quel LLM fait le travail.** Bodega One Code appelle cette approche « Bring Your Own LLM » (BYOLLM) : l\'application elle-même constitue l\'interface et la couche d\'outillage, tandis que le modèle qui répond aux questions du chat ou pilote l\'agent de codage peut être un modèle entièrement local ou une API cloud hébergée, au choix de l\'utilisateur.',
          'C\'est un choix par défaut différent des IDE livrés liés à une seule famille de modèles. Parce que Bodega One Code sépare l\'interface du fournisseur de modèle, un développeur peut commencer avec un modèle cloud comme OpenAI ou Anthropic pour une capacité maximale, puis déplacer le même flux de travail vers un runtime local comme Ollama ou llama.cpp pour travailler hors ligne ou sur du code sensible, sans changer d\'application.',
          'Le produit est distribué via bodegaone.ai (également accessible sur www.bodegaone.ai), avec les versions de production suivies sur GitHub à github.com/BodegaoneAI/bodegaone-releases.',
        ],
      },
      byollmProviders: {
        id: 'byollm-providers',
        itemHeadings: true,
        title: 'Quels fournisseurs de LLM Bodega One Code prend-il en charge ?',
        content: [
          '**Bodega One Code est livré avec plus d\'une douzaine de préréglages de fournisseurs intégrés, couvrant à la fois des runtimes d\'inférence locaux et des API cloud.** Sélectionner un préréglage oriente l\'éditeur, le chat et l\'agent vers ce fournisseur ; Bodega One Code indique que le fournisseur actif peut être changé sans redémarrer l\'application.',
        ],
        columns: ['Fournisseur', 'Catégorie', 'Ce que c\'est'],
        rows: [
          { 'Fournisseur': 'Ollama', 'Catégorie': 'Runtime local', 'Ce que c\'est': 'Serveur de modèles locaux populaire ; choix par défaut courant pour exécuter des modèles ouverts sur une machine personnelle.' },
          { 'Fournisseur': 'LM Studio', 'Catégorie': 'Runtime local', 'Ce que c\'est': 'Application de bureau pour télécharger et servir des modèles locaux via une API locale compatible OpenAI.' },
          { 'Fournisseur': 'llama.cpp', 'Catégorie': 'Runtime local', 'Ce que c\'est': 'Le moteur d\'inférence en C/C++ qui sous-tend de nombreux outils de modèles locaux ; peut être exécuté directement comme serveur.' },
          { 'Fournisseur': 'vLLM', 'Catégorie': 'Runtime local', 'Ce que c\'est': 'Serveur d\'inférence à haut débit, typiquement utilisé pour des déploiements auto-hébergés de niveau station de travail ou serveur.' },
          { 'Fournisseur': 'LocalAI', 'Catégorie': 'Runtime local', 'Ce que c\'est': 'Serveur d\'inférence auto-hébergé, compatible API OpenAI, pour exécuter des modèles ouverts en local.' },
          { 'Fournisseur': 'KoboldCpp', 'Catégorie': 'Runtime local', 'Ce que c\'est': 'Serveur d\'inférence locale basé sur llama.cpp, initialement populaire dans la communauté du jeu de rôle et de l\'écriture créative en local.' },
          { 'Fournisseur': 'GPT4All', 'Catégorie': 'Runtime local', 'Ce que c\'est': 'Application de bureau et moteur d\'inférence local pour exécuter des modèles ouverts sans connexion cloud.' },
          { 'Fournisseur': 'MLX', 'Catégorie': 'Runtime local', 'Ce que c\'est': 'Framework de calcul matriciel d\'Apple utilisé pour exécuter efficacement des modèles locaux sur Apple Silicon.' },
          { 'Fournisseur': 'Jan', 'Catégorie': 'Runtime local', 'Ce que c\'est': 'Application de bureau open source, dans l\'esprit de ChatGPT, pour exécuter des modèles locaux via un moteur d\'inférence intégré ou externe.' },
          { 'Fournisseur': 'OpenAI', 'Catégorie': 'API cloud', 'Ce que c\'est': 'Accès API hébergé à la famille de modèles GPT d\'OpenAI ; nécessite une clé API OpenAI et un accès internet.' },
          { 'Fournisseur': 'Anthropic', 'Catégorie': 'API cloud', 'Ce que c\'est': 'Accès API hébergé à la famille de modèles Claude d\'Anthropic ; nécessite une clé API Anthropic et un accès internet.' },
          { 'Fournisseur': 'Groq', 'Catégorie': 'API cloud', 'Ce que c\'est': 'API d\'inférence hébergée connue pour sa faible latence, servant des modèles ouverts sur du matériel LPU propriétaire.' },
          { 'Fournisseur': 'Together AI', 'Catégorie': 'API cloud', 'Ce que c\'est': 'API d\'inférence hébergée proposant un catalogue de modèles ouverts sur une infrastructure cloud partagée.' },
          { 'Fournisseur': 'OpenRouter', 'Catégorie': 'API cloud', 'Ce que c\'est': 'Routeur API hébergé qui relaie les requêtes vers de nombreux fournisseurs de modèles sous-jacents via un seul point d\'accès et une seule clé.' },
        ],
        note: 'Les préréglages de fournisseurs et les valeurs par défaut peuvent changer d\'une version de Bodega One Code à l\'autre. Vérifiez les notes de version sur github.com/BodegaoneAI/bodegaone-releases et la liste actuelle des fournisseurs sur bodegaone.ai avant de supposer qu\'un préréglage donné est encore disponible dans la version que vous installez.',
      },
      editorTooling: {
        id: 'editor-and-tooling',
        title: 'Que contiennent l\'éditeur et l\'outillage ?',
        content: [
          '**L\'éditeur central de Bodega One Code est construit sur Monaco, le même composant open source qui alimente Visual Studio Code** — la coloration syntaxique, l\'édition multi-fichiers et la navigation au clavier devraient donc sembler familières à quiconque vient de VS Code ou d\'un fork de VS Code.',
        ],
        items: [
          '**Autocomplétion par tabulation** — complétion de code en ligne, pilotée par modèle, déclenchée pendant la frappe, similaire dans son principe aux fonctions de complétion des outils de type Copilot.',
          '**Intégration Git** — les opérations de contrôle de source sont disponibles directement dans l\'IDE, sans nécessiter de terminal ou de client Git séparé.',
          '**26 outils intégrés** — l\'agent a accès à un ensemble fixe d\'outils couvrant les opérations sur fichiers (lecture, écriture, recherche dans tout le projet), l\'exécution de commandes shell et la recherche web, qu\'il peut appeler pour accomplir une tâche de codage.',
          '**Chat et agent dans la même application** — l\'interface de chat pour poser des questions et l\'agent autonome pour effectuer des modifications multi-étapes s\'exécutent tous deux dans la même application et peuvent utiliser le même fournisseur de LLM configuré.',
        ],
      },
      qualityEnforcement: {
        id: 'quality-enforcement-loop',
        title: 'Qu\'est-ce que la boucle de vérification en 5 étapes ?',
        content: [
          '**Bodega One Code décrit une boucle de vérification en 5 étapes que chaque modification effectuée par l\'agent traverse avant d\'être marquée comme terminée, couvrant la vérification de la syntaxe, des types et des tests.** Il s\'agit de la description que l\'éditeur fait lui-même de sa Quality Enforcement Layer ; PromptQuorum n\'a mesuré indépendamment ni sa précision, ni son taux de faux positifs, ni son effet sur le temps d\'exécution des tâches.',
          'L\'implication pratique, selon la description de l\'éditeur, est que l\'agent est censé détecter lui-même une syntaxe incorrecte, des erreurs de type et des tests en échec, plutôt que de laisser cette vérification entièrement au développeur après coup. Que cela se vérifie en pratique dépend du langage du projet, de sa couverture de tests et de sa configuration — rien de tout cela n\'a été testé directement dans cette évaluation.',
          'La Quality Enforcement Layer et l\'orchestration agentique qui l\'entoure sont des composants propriétaires de Bodega One Code, non inclus dans une publication open source, même si une Business Source License s\'applique à d\'autres parties du code après distribution.',
        ],
      },
      airGap: {
        id: 'air-gap-mode',
        title: 'Comment fonctionne le mode air-gap ?',
        content: [
          '**Bodega One Code propose un mode air-gap qui, selon l\'éditeur, applique 9 couches distinctes d\'application réseau pour bloquer toutes les connexions sortantes, pour les développeurs ayant besoin que l\'IDE fonctionne entièrement hors ligne.** Ce mode est destiné aux scénarios où le code, les prompts ou les données du projet ne doivent jamais quitter la machine locale — par exemple en utilisant un fournisseur entièrement local (Ollama, llama.cpp, LocalAI) sans repli cloud activé.',
          'PromptQuorum n\'a pas vérifié indépendamment comment les 9 couches sont mises en œuvre, ni testé leur efficacité à bloquer chaque voie de sortie. Les développeurs ayant un véritable besoin d\'air-gap (données réglementées, environnements classifiés, clauses contractuelles de non-sortie) devraient vérifier eux-mêmes le comportement réseau — par exemple avec un pare-feu externe ou un moniteur réseau — plutôt que de se fier au seul nom de la fonctionnalité.',
        ],
      },
      licensingPricing: {
        id: 'licensing-and-pricing',
        itemHeadings: true,
        title: 'Combien coûte Bodega One Code, et quelle est sa licence ?',
        content: [
          '**Bodega One Code est actuellement en bêta ouverte, et l\'éditeur indique que l\'application est gratuite pour tous pendant la période de bêta, y compris pour un usage commercial.** Les tarifs ci-dessous sont ceux que l\'éditeur indique appliquer après la fin de la bêta.',
        ],
        columns: ['Offre', 'Prix', 'Machines', 'Remarques'],
        rows: [
          { 'Offre': 'Personnelle', 'Prix': 'Gratuite', 'Machines': '1 machine', 'Remarques': 'Usage personnel, non commercial, selon les conditions indiquées par l\'éditeur.' },
          { 'Offre': 'Pro / commerciale', 'Prix': '39 $ paiement unique', 'Machines': '2 machines', 'Remarques': 'Paiement unique, sans abonnement, selon le tarif indiqué par l\'éditeur.' },
          { 'Offre': 'Bêta ouverte (actuelle)', 'Prix': 'Gratuite', 'Machines': 'Sans restriction pendant la bêta', 'Remarques': 'Gratuite pour tous, y compris en usage commercial, tant que la bêta ouverte est active.' },
        ],
        note: 'La licence est globalement propriétaire. Une Business Source License s\'applique à certains composants du code après distribution, et la Quality Enforcement Layer ainsi que la couche d\'orchestration agentique restent propriétaires quel que soit le palier de licence. Vérifiez le prix actuel, le statut de la bêta et les conditions de licence directement sur bodegaone.ai avant tout achat, car les conditions de la bêta et les prix peuvent changer.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs limites',
        columns: ['Avantage', 'Ce que cela signifie en pratique', 'Limite / mise en garde'],
        rows: [
          {
            'Avantage': 'Choix du fournisseur (BYOLLM)',
            'Ce que cela signifie en pratique': 'Vous n\'êtes pas enfermé chez un seul fournisseur de modèle — changez entre fournisseurs locaux et cloud selon le projet ou le budget.',
            'Limite / mise en garde': 'La qualité des résultats dépend toujours entièrement du modèle choisi ; un petit modèle local n\'égalera pas le raisonnement d\'un modèle cloud de pointe.',
          },
          {
            'Avantage': 'Une application pour l\'éditeur, le chat et l\'agent',
            'Ce que cela signifie en pratique': 'Aucun changement de contexte entre un éditeur séparé et un outil de chat IA séparé.',
            'Limite / mise en garde': 'C\'est une application autonome, pas une extension VS Code — passer d\'une installation VS Code existante signifie adopter une nouvelle application plutôt qu\'ajouter un plugin.',
          },
          {
            'Avantage': 'Local-first, avec option air-gap',
            'Ce que cela signifie en pratique': 'Peut être configuré pour fonctionner entièrement avec des modèles locaux, sans aucun trafic réseau sortant.',
            'Limite / mise en garde': 'L\'efficacité du mode air-gap et la précision de la boucle de vérification sont des affirmations de l\'éditeur, non testées indépendamment dans cette évaluation.',
          },
          {
            'Avantage': 'Pas de tarification par abonnement',
            'Ce que cela signifie en pratique': 'Un paiement unique de 39 $ couvre une seconde machine sur l\'offre Pro/commerciale ; l\'usage personnel sur une machine est gratuit.',
            'Limite / mise en garde': 'Actuellement en bêta ouverte avec accès gratuit pour tous — les tarifs et conditions après la bêta pourraient changer avant la disponibilité générale.',
          },
          {
            'Avantage': '26 outils d\'agent intégrés',
            'Ce que cela signifie en pratique': 'Les opérations sur fichiers, les commandes shell et la recherche web sont disponibles pour l\'agent dès l\'installation, sans configurer de serveurs MCP séparés.',
            'Limite / mise en garde': 'Un ensemble d\'outils fixe est moins extensible qu\'un écosystème ouvert de plugins/MCP où des tiers ajoutent de nouveaux outils.',
          },
          {
            'Avantage': 'Surface d\'édition familière',
            'Ce que cela signifie en pratique': 'L\'éditeur basé sur Monaco et l\'autocomplétion par tabulation devraient sembler immédiatement familiers aux utilisateurs de VS Code.',
            'Limite / mise en garde': 'La Quality Enforcement Layer et l\'orchestration agentique sont propriétaires — impossible d\'inspecter ou de modifier le fonctionnement interne de la boucle de vérification.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Bodega One Code vs. Continue.dev, Cline et Aider',
        columns: ['Outil', 'Lien', 'Format', 'Choix du modèle', 'Conception local-first', 'Différence clé'],
        rows: [
          {
            'Outil': 'Bodega One Code',
            'Lien': '[bodegaone.ai](https://bodegaone.ai)',
            'Format': 'IDE de bureau autonome (éditeur + chat + agent dans une seule application)',
            'Choix du modèle': 'BYOLLM : 10+ préréglages, local et cloud',
            'Conception local-first': 'Construit autour de fournisseurs locaux, avec un mode air-gap optionnel',
            'Différence clé': 'Une seule application remplace l\'éditeur lui-même, plutôt que d\'ajouter une simple couche IA à un éditeur existant ; les composants centraux de l\'agent sont propriétaires.',
          },
          {
            'Outil': 'Continue.dev',
            'Lien': '[docs.continue.dev](https://docs.continue.dev)',
            'Format': 'Extension open source pour VS Code et les IDE JetBrains',
            'Choix du modèle': 'Configurable sur des fournisseurs locaux (Ollama, LM Studio) ou cloud',
            'Conception local-first': 'Dépend entièrement du fournisseur configuré ; pas de fonctionnalité air-gap dédiée',
            'Différence clé': 'Ajoute chat IA et autocomplétion à un éditeur déjà utilisé, plutôt que de le remplacer.',
          },
          {
            'Outil': 'Cline',
            'Lien': '[cline.bot](https://cline.bot)',
            'Format': 'Extension open source pour agent autonome dans VS Code',
            'Choix du modèle': 'Configurable sur des fournisseurs locaux ou cloud via des points d\'accès compatibles API',
            'Conception local-first': 'Dépend du fournisseur configuré',
            'Différence clé': 'Extension centrée sur l\'agent, avec approbation humaine pour les modifications de fichiers et les commandes, à l\'intérieur de VS Code.',
          },
          {
            'Outil': 'Aider',
            'Lien': '[aider.chat](https://aider.chat)',
            'Format': 'Outil open source de programmation en binôme avec l\'IA, en terminal',
            'Choix du modèle': 'Configurable sur des fournisseurs locaux ou cloud via des points d\'accès compatibles API',
            'Conception local-first': 'Dépend du fournisseur configuré ; pas d\'éditeur graphique propre',
            'Différence clé': 'Flux de travail en ligne de commande construit autour des commits Git, sans interface d\'édition intégrée.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse Bodega One Code',
        items: [
          '**Développeurs qui veulent une seule application plutôt qu\'un éditeur plus une couche IA séparée.** Si maintenir une pile d\'extensions VS Code pour les fonctions IA représente une friction, un IDE regroupé avec éditeur, chat et agent peut être plus simple à installer et à maintenir.',
          '**Développeurs qui veulent basculer entre modèles locaux et cloud sur le même projet.** Le support BYOLLM sur plus de 10 préréglages permet de prototyper avec un modèle cloud puis de passer à un modèle local (ou l\'inverse) sans changer d\'outil.',
          '**Équipes évaluant les outils local-first pour des raisons de coût ou de confidentialité.** Fonctionner entièrement avec un fournisseur local comme Ollama ou llama.cpp garde le code et les prompts hors des serveurs tiers, et le mode air-gap optionnel répond à des exigences de non-sortie plus strictes.',
          '**Utilisateurs préférant un paiement unique à un abonnement.** La licence Pro/commerciale unique de 39 $ indiquée, plutôt qu\'un tarif récurrent, peut convenir aux développeurs voulant éviter les abonnements d\'outils IA en cours.',
          '**Premiers utilisateurs à l\'aise avec l\'évaluation de logiciels en bêta.** La fenêtre de bêta ouverte actuelle offre un accès gratuit, y compris commercial, pour tester l\'IDE avant de s\'y engager durablement.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui Bodega One Code ne convient pas',
        items: [
          '**Développeurs qui veulent rester dans VS Code lui-même.** Bodega One Code est une application séparée, pas une extension VS Code — si vous avez besoin d\'ajouter des fonctions IA à votre installation VS Code existante, Continue.dev ou Cline conviennent mieux.',
          '**Équipes exigeant un outillage entièrement open source de bout en bout.** La Quality Enforcement Layer et l\'orchestration agentique sont propriétaires, et une Business Source License s\'applique à certains composants après distribution — les équipes ayant besoin que chaque couche soit open source (comme avec Aider, Continue.dev ou Cline) devraient d\'abord examiner les conditions de licence.',
          '**Quiconque a besoin que les affirmations sur la boucle de vérification ou le mode air-gap soient auditées indépendamment avant de s\'y fier.** Cette évaluation rapporte ce que Bodega One Code publie sur sa boucle de vérification en 5 étapes et son mode air-gap à 9 couches ; aucun des deux n\'a été benchmarké ou testé en sécurité par PromptQuorum. Les environnements réglementés ou à haute sécurité devraient effectuer leur propre vérification.',
          '**Utilisateurs ayant besoin d\'un flux de travail uniquement en terminal.** Bodega One Code est une application graphique construite autour d\'un éditeur ; les développeurs préférant un outil de programmation en binôme centré sur la ligne de commande devraient plutôt regarder Aider.',
          '**Quiconque planifie en s\'appuyant sur les tarifs gratuits actuels de la bêta comme garantie à long terme.** Les tarifs et conditions de licence après la bêta sont l\'intention déclarée de l\'éditeur, pas une garantie contractuelle — vérifiez les conditions actuelles sur bodegaone.ai avant de baser un budget dessus.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Qu\'est-ce que Bodega One Code ?',
            a: 'Bodega One Code est un IDE de codage de bureau qui réunit un éditeur de code, un panneau de chat IA et un agent de codage autonome dans une seule application locale. Sa caractéristique distinctive est le BYOLLM (Bring Your Own LLM) : le développeur choisit quel fournisseur de modèle — local ou cloud — alimente le chat et l\'agent.',
          },
          {
            q: 'Que signifie BYOLLM ?',
            a: 'BYOLLM signifie « Bring Your Own LLM » (apportez votre propre LLM). Au lieu d\'un IDE livré lié à un seul fournisseur de modèle, Bodega One Code peut être connecté à un fournisseur de votre choix — un runtime local comme Ollama ou llama.cpp, ou une API cloud comme OpenAI ou Anthropic — via des préréglages de fournisseurs intégrés.',
          },
          {
            q: 'Quels fournisseurs de LLM Bodega One Code prend-il en charge ?',
            a: 'Bodega One Code est livré avec plus de 10 préréglages de fournisseurs : Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX et Jan pour l\'inférence locale, plus OpenAI, Anthropic, Groq, Together AI et OpenRouter pour les API cloud. Bodega One Code indique qu\'il est possible de changer de fournisseur sans redémarrer l\'application.',
          },
          {
            q: 'Bodega One Code est-il gratuit ?',
            a: 'Bodega One Code est actuellement en bêta ouverte et gratuit pour tous, y compris en usage commercial, selon l\'éditeur. Après la bêta, les conditions indiquées par l\'éditeur sont : gratuit pour un usage personnel sur une machine, et un paiement unique de 39 $ pour une licence Pro/commerciale couvrant deux machines, sans abonnement.',
          },
          {
            q: 'Bodega One Code est-il open source ?',
            a: 'Pas entièrement. Une Business Source License s\'applique à certains composants après distribution, mais la Quality Enforcement Layer et la couche d\'orchestration agentique sont propriétaires et le restent. Les développeurs ayant besoin d\'un outil de codage local entièrement open source devraient regarder des alternatives comme Continue.dev, Cline ou Aider.',
          },
          {
            q: 'Quel éditeur Bodega One Code utilise-t-il ?',
            a: 'Bodega One Code est construit sur Monaco, le même composant open source utilisé par Visual Studio Code, et ajoute une autocomplétion par tabulation, une intégration Git et 26 outils intégrés pour les opérations sur fichiers, les commandes shell et la recherche web disponibles pour l\'agent.',
          },
          {
            q: 'Qu\'est-ce que la boucle de vérification en 5 étapes ?',
            a: 'C\'est un processus de contrôle qualité que Bodega One Code décrit comme s\'exécutant après chaque modification effectuée par l\'agent — couvrant la vérification de la syntaxe, des types et des tests — avant que la modification ne soit marquée comme terminée. C\'est la propre description que l\'éditeur fait de sa Quality Enforcement Layer ; PromptQuorum n\'a pas benchmarké sa précision de façon indépendante.',
          },
          {
            q: 'Qu\'est-ce que le mode air-gap dans Bodega One Code ?',
            a: 'Le mode air-gap est un réglage que Bodega One Code décrit comme appliquant 9 couches d\'application réseau pour bloquer toutes les connexions sortantes, destiné aux développeurs ayant besoin que l\'IDE fonctionne entièrement hors ligne. PromptQuorum n\'a pas testé indépendamment dans quelle mesure les 9 couches bloquent effectivement le trafic sortant — vérifiez-le vous-même pour tout environnement ayant une véritable exigence de non-sortie.',
          },
          {
            q: 'Comment Bodega One Code se compare-t-il à Continue.dev, Cline ou Aider ?',
            a: 'Continue.dev et Cline sont des extensions open source qui ajoutent chat IA, autocomplétion ou un agent autonome à une installation VS Code (ou JetBrains) existante. Aider est un outil open source de programmation en binôme avec l\'IA, en terminal, sans éditeur intégré. Bodega One Code est une application autonome distincte qui réunit l\'éditeur lui-même avec le chat et un agent, et dont la Quality Enforcement Layer centrale ainsi que l\'orchestration agentique sont propriétaires plutôt qu\'open source.',
          },
          {
            q: 'Puis-je utiliser Bodega One Code entièrement hors ligne ?',
            a: 'Oui, si vous le configurez pour utiliser un fournisseur local (Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX ou Jan) et activez le mode air-gap, que Bodega One Code décrit comme bloquant les connexions réseau sortantes via 9 couches d\'application. Utiliser un fournisseur cloud (OpenAI, Anthropic, Groq, Together AI, OpenRouter) nécessite une connexion internet indépendamment de ce réglage.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'L\'idée centrale de Bodega One Code — une application locale unique qui réunit éditeur, chat IA et agent autonome, en laissant entièrement au développeur le choix du fournisseur de modèle — comble un véritable écart entre les IDE IA liés à un seul fournisseur et les extensions minimalistes où il faut assembler soi-même sa propre configuration de fournisseur. La liste des fournisseurs BYOLLM est large, couvrant les principaux runtimes locaux (Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, Jan) et les principales API cloud (OpenAI, Anthropic, Groq, Together AI, OpenRouter) en un seul endroit, et le modèle tarifaire — usage personnel gratuit plus des frais uniques de 39 $ pour une seconde machine, sans abonnement — est simple. Les deux fonctionnalités qui différencient le plus le produit, la boucle de vérification en 5 étapes et le mode air-gap à 9 couches, sont des affirmations de l\'éditeur plutôt que des éléments benchmarkés indépendamment ici — traitez-les comme des affirmations à vérifier au regard de vos propres exigences de projet et de réseau, plutôt que comme des garanties. Les développeurs qui veulent un IDE regroupé et acceptent une Quality Enforcement Layer propriétaire devraient l\'essayer pendant la bêta ouverte gratuite actuelle ; ceux qui ont besoin d\'une pile entièrement open source, ou qui veulent rester dans VS Code lui-même, sont mieux servis par Continue.dev, Cline ou Aider.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site officiel de Bodega One Code](https://bodegaone.ai) — présentation du produit, liste des fournisseurs BYOLLM, conditions de prix et de licence.',
          '[Bodega One Code (www)](https://www.bodegaone.ai) — site produit miroir.',
          '[Releases de Bodega One Code sur GitHub](https://github.com/BodegaoneAI/bodegaone-releases) — notes de version et historique des builds.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Continue.dev vs. Cline vs. Aider](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local) — trois outils de codage local open source qui s\'ajoutent à un éditeur existant plutôt que de le remplacer.',
          '[Meilleurs modèles de codage locaux en 2026](/fr/power-local-llm/best-local-coding-models-2026) — la couche modèle : quels modèles ouverts utiliser avec un outil BYOLLM comme Bodega One Code.',
          '[Agents IA locaux avec MCP en 2026](/fr/power-local-llm/local-ai-agents-with-mcp-2026) — pour les lecteurs comparant la liste d\'outils intégrés de Bodega One Code à un écosystème d\'outils ouvert basé sur MCP.',
          '[Remplacer GitHub Copilot par un LLM local](/fr/power-local-llm/replace-github-copilot-with-local-llm) — contexte plus large sur le passage à des modèles locaux ou auto-hébergés pour l\'assistance de codage IA.',
          '[Hub Power Local LLM](/fr/power-local-llm) — bibliothèque complète de guides.',
        ],
      },
    },
  },
  es: {
    theme: 'Coding Assistants',
    heroImage: '/images/bodega-one-code-review-2026-hero-es.webp',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    next_refresh_due: '2027-03-03',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que evalúan un IDE de codificación local-first que les permite elegir su propio proveedor de LLM en lugar de depender de un único proveedor',
    primaryTerm: 'Bodega One Code',
    title: 'Bodega One Code (2026): un IDE de codificación local-first BYOLLM',
    seoTitle: 'Bodega One Code 2026: IDE de codificación BYOLLM',
    intro:
      'Bodega One Code es un IDE de codificación que combina un editor de código, un panel de chat con IA y un agente de codificación autónomo en una sola aplicación que se ejecuta en tu propia máquina. La idea central es "Bring Your Own LLM" (BYOLLM): en lugar de venir atado a un único proveedor de modelo, Bodega One Code puede conectarse a Ollama, LM Studio, llama.cpp o a una API en la nube como OpenAI o Anthropic, y, según el fabricante, permite cambiar de proveedor sin reiniciar la aplicación. Esta reseña cubre qué incluye el IDE según las propias páginas de producto de Bodega One Code, cómo funcionan el sistema de proveedores y el agente, cuáles son los términos de precio y licencia actuales, y cómo se compara con otras herramientas de codificación con capacidad local como Continue.dev, Cline y Aider.',
    metaDescription:
      'Bodega One Code: un IDE de codificación local-first con cambio de proveedor BYOLLM, editor Monaco y agente autónomo. Precios, licencia, modo air-gap y comparación con Continue.dev, Cline y Aider.',
    twitterDescription:
      'Bodega One Code 2026: IDE de codificación local-first, BYOLLM con 10+ proveedores, editor Monaco, agente autónomo, modo air-gap. Precios, licencia y comparación con Continue.dev, Cline y Aider.',
    readTime: '10 min de lectura',
    targetKeywords: [
      'bodega one code reseña',
      'bodega one code ide',
      'ide de codificación byollm',
      'bodega one code precio',
      'bodega one code vs cursor',
    ],
    leadAnswerBlock:
      '**Bodega One Code vale la pena evaluarlo si quieres una sola aplicación local que combine editor de código, chat con IA y un agente de codificación autónomo, y prefieres elegir tú mismo qué LLM lo impulsa en lugar de depender de un único proveedor.** El IDE admite Bring Your Own LLM (BYOLLM) a través de más de una docena de perfiles de proveedor preconfigurados — Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX y Jan para inferencia local, además de OpenAI, Anthropic, Groq, Together AI y OpenRouter para modelos en la nube — y Bodega One Code afirma que se puede cambiar de proveedor sin reiniciar la aplicación. Actualmente está en beta abierta y es gratuito, incluso para uso comercial; tras la beta, el uso personal seguirá siendo gratuito en una máquina y una licencia única de 39 $ añade una segunda máquina, sin suscripción.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Bodega One Code for local-first AI coding?',
        answer:
          'Use Bodega One Code if you want a single desktop IDE that runs an editor, AI chat, and an autonomous coding agent locally while letting you pick the LLM provider — local (Ollama, LM Studio, llama.cpp) or cloud (OpenAI, Anthropic, Groq). Weigh it against Continue.dev, Cline, or Aider if you already work inside VS Code and want an extension instead of a separate application, and note that the Quality Enforcement Layer and agentic orchestration are proprietary, not open source.',
        bullets: [
          'BYOLLM: 10+ provider presets, including Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, and Jan.',
          'Bodega One Code states providers can be switched without restarting the IDE.',
          'Monaco-based editor, tab autocomplete, Git integration, and 26 built-in tools for file operations, shell commands, and web search.',
          'Vendor-described 5-step verification loop (syntax, type checks, tests) runs after every agent change, and a 9-layer air-gap mode is offered for offline use — neither has been independently benchmarked by PromptQuorum.',
          'Free for personal use on one machine; a one-time $39 license covers a second machine (no subscription). Currently in open beta, free for everyone including commercial use during the beta.',
          'Licensing is proprietary: a Business Source License applies to some components after distribution, and the Quality Enforcement Layer plus agentic orchestration stay proprietary.',
        ],
        updatedDate: '2026-09-03',
      },
      es: {
        question: '¿Debería usar Bodega One Code para codificación IA local-first?',
        answer:
          'Usa Bodega One Code si quieres un único IDE de escritorio que ejecute localmente un editor, chat con IA y un agente de codificación autónomo, mientras eliges el proveedor de LLM — local (Ollama, LM Studio, llama.cpp) o en la nube (OpenAI, Anthropic, Groq). Compáralo con Continue.dev, Cline o Aider si ya trabajas dentro de VS Code y prefieres una extensión en lugar de una aplicación separada, y ten en cuenta que la Quality Enforcement Layer y la orquestación agéntica son propietarias, no de código abierto.',
        bullets: [
          'BYOLLM: 10+ perfiles de proveedor, incluidos Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX y Jan.',
          'Bodega One Code afirma que los proveedores pueden cambiarse sin reiniciar el IDE.',
          'Editor basado en Monaco, autocompletado por tabulación, integración con Git y 26 herramientas integradas para operaciones de archivos, comandos de shell y búsqueda web.',
          'Un bucle de verificación en 5 pasos descrito por el fabricante (sintaxis, comprobación de tipos, pruebas) se ejecuta tras cada cambio del agente, y se ofrece un modo air-gap de 9 capas para uso sin conexión — ninguno de los dos ha sido evaluado de forma independiente por PromptQuorum.',
          'Gratis para uso personal en una máquina; una licencia única de 39 $ cubre una segunda máquina (sin suscripción). Actualmente en beta abierta, gratis para todos, incluido el uso comercial, durante la beta.',
          'La licencia es propietaria en general: se aplica una Business Source License a algunos componentes tras la distribución, y la Quality Enforcement Layer más la orquestación agéntica siguen siendo propietarias.',
        ],
        updatedDate: '2026-09-03',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '¿Qué es Bodega One Code?', anchor: 'what-is-bodega-one-code' },
      { label: '¿Qué proveedores de LLM admite?', anchor: 'byollm-providers' },
      { label: '¿Qué incluye el editor?', anchor: 'editor-and-tooling' },
      { label: '¿Qué es el bucle de verificación?', anchor: 'quality-enforcement-loop' },
      { label: '¿Cómo funciona el modo air-gap?', anchor: 'air-gap-mode' },
      { label: 'Precios y licencia', anchor: 'licensing-and-pricing' },
      { label: 'Ventajas y desventajas', anchor: 'tradeoffs' },
      { label: 'Bodega One Code vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quién es adecuado', anchor: 'who-should-use' },
      { label: 'Para quién no es adecuado', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bodega One Code es un IDE de codificación con IA local-first que permite a los desarrolladores traer su propio LLM — mediante más de 10 perfiles de proveedor que abarcan tiempos de ejecución locales como Ollama y llama.cpp y APIs en la nube como OpenAI y Anthropic — para impulsar un chat integrado y un agente de codificación autónomo, con un modo air-gap opcional para uso totalmente sin conexión.',
          },
          {
            type: 'plain-terms',
            text: 'Es un editor de código, un panel de chat con IA y un agente de IA capaz de editar archivos y ejecutar comandos, todo en una sola aplicación de escritorio, donde tú eliges qué modelo de IA — en tu máquina o en la nube — hace el trabajo.',
          },
        ],
        items: [
          'Combina editor de código, chat con IA y agente de codificación autónomo en una única aplicación local; construido alrededor de "Bring Your Own LLM" (BYOLLM).',
          '10+ perfiles de proveedor: Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX y Jan.',
          'Los proveedores pueden, según el fabricante, cambiarse sin reiniciar la aplicación.',
          'Editor basado en Monaco (el mismo componente de código abierto que impulsa VS Code), autocompletado por tabulación, integración con Git y 26 herramientas integradas para operaciones de archivos, comandos de shell y búsqueda web.',
          'Un bucle de verificación en 5 pasos descrito por el fabricante se ejecuta tras cada cambio del agente: comprobación de sintaxis, de tipos y de pruebas, antes de marcar un cambio como completado.',
          'El modo air-gap usa, según Bodega One Code, 9 capas independientes de aplicación de red para bloquear conexiones salientes, para casos que requieren funcionamiento totalmente sin conexión.',
          'Gratis para uso personal en una máquina; una licencia Pro/comercial única de 39 $ añade una segunda máquina, sin suscripción. Actualmente en beta abierta, gratis para todos, incluido el uso comercial.',
          'Licencia propietaria en general — se aplica una Business Source License a algunos componentes tras la distribución, y la Quality Enforcement Layer más la orquestación agéntica siguen siendo propietarias.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña describe lo que Bodega One Code publica sobre sí mismo en bodegaone.ai y en su repositorio de versiones en GitHub ([github.com/BodegaoneAI/bodegaone-releases](https://github.com/BodegaoneAI/bodegaone-releases)). PromptQuorum no ha evaluado de forma independiente el bucle de verificación, el modo air-gap ni la latencia al cambiar de proveedor, y no existe ninguna relación de afiliación o comercial entre PromptQuorum y Bodega One Code.',
          },
        ],
      },
      whatIs: {
        id: 'what-is-bodega-one-code',
        title: '¿Qué es Bodega One Code?',
        content: [
          '**Bodega One Code es un IDE de codificación de escritorio que combina un editor, una interfaz de chat con IA y un agente de codificación autónomo, diseñado bajo la idea de que es el desarrollador — no el fabricante — quien decide qué LLM hace el trabajo.** Bodega One Code llama a este enfoque "Bring Your Own LLM" (BYOLLM): la aplicación en sí es la interfaz y la capa de herramientas, mientras que el modelo que responde en el chat o impulsa el agente de codificación puede ser un modelo totalmente local o una API en la nube alojada, según elija el usuario.',
          'Esto difiere del comportamiento predeterminado de los IDE que vienen atados a una única familia de modelos. Como Bodega One Code separa la interfaz del proveedor del modelo, un desarrollador puede empezar con un modelo en la nube como OpenAI o Anthropic para obtener máxima capacidad, y luego mover el mismo flujo de trabajo a un tiempo de ejecución local como Ollama o llama.cpp al trabajar sin conexión o con código sensible, sin cambiar de aplicación.',
          'El producto se distribuye a través de bodegaone.ai (accesible también en www.bodegaone.ai), con las compilaciones de lanzamiento registradas en GitHub en github.com/BodegaoneAI/bodegaone-releases.',
        ],
      },
      byollmProviders: {
        id: 'byollm-providers',
        itemHeadings: true,
        title: '¿Qué proveedores de LLM admite Bodega One Code?',
        content: [
          '**Bodega One Code viene con más de una docena de perfiles de proveedor integrados, que cubren tanto tiempos de ejecución de inferencia locales como APIs en la nube.** Seleccionar un perfil orienta el editor, el chat y el agente hacia ese proveedor; Bodega One Code afirma que el proveedor activo puede cambiarse sin reiniciar la aplicación.',
        ],
        columns: ['Proveedor', 'Categoría', 'Qué es'],
        rows: [
          { 'Proveedor': 'Ollama', 'Categoría': 'Tiempo de ejecución local', 'Qué es': 'Servidor de modelos locales popular; opción predeterminada habitual para ejecutar modelos abiertos en una máquina personal.' },
          { 'Proveedor': 'LM Studio', 'Categoría': 'Tiempo de ejecución local', 'Qué es': 'App de escritorio para descargar y servir modelos locales mediante una API local compatible con OpenAI.' },
          { 'Proveedor': 'llama.cpp', 'Categoría': 'Tiempo de ejecución local', 'Qué es': 'El motor de inferencia en C/C++ que sustenta muchas herramientas de modelos locales; puede ejecutarse directamente como servidor.' },
          { 'Proveedor': 'vLLM', 'Categoría': 'Tiempo de ejecución local', 'Qué es': 'Servidor de inferencia de alto rendimiento, típicamente usado en despliegues autoalojados de nivel estación de trabajo o servidor.' },
          { 'Proveedor': 'LocalAI', 'Categoría': 'Tiempo de ejecución local', 'Qué es': 'Servidor de inferencia autoalojado, compatible con la API de OpenAI, para ejecutar modelos abiertos localmente.' },
          { 'Proveedor': 'KoboldCpp', 'Categoría': 'Tiempo de ejecución local', 'Qué es': 'Servidor de inferencia local basado en llama.cpp, originalmente popular en la comunidad de rol y escritura creativa local.' },
          { 'Proveedor': 'GPT4All', 'Categoría': 'Tiempo de ejecución local', 'Qué es': 'App de escritorio y motor de inferencia local para ejecutar modelos abiertos sin conexión a la nube.' },
          { 'Proveedor': 'MLX', 'Categoría': 'Tiempo de ejecución local', 'Qué es': 'Framework de cómputo con arrays de Apple usado para ejecutar modelos locales de forma eficiente en Apple Silicon.' },
          { 'Proveedor': 'Jan', 'Categoría': 'Tiempo de ejecución local', 'Qué es': 'App de escritorio de código abierto, al estilo de ChatGPT, para ejecutar modelos locales mediante un motor de inferencia integrado o externo.' },
          { 'Proveedor': 'OpenAI', 'Categoría': 'API en la nube', 'Qué es': 'Acceso API alojado a la familia de modelos GPT de OpenAI; requiere una clave API de OpenAI y acceso a internet.' },
          { 'Proveedor': 'Anthropic', 'Categoría': 'API en la nube', 'Qué es': 'Acceso API alojado a la familia de modelos Claude de Anthropic; requiere una clave API de Anthropic y acceso a internet.' },
          { 'Proveedor': 'Groq', 'Categoría': 'API en la nube', 'Qué es': 'API de inferencia alojada conocida por su baja latencia al servir modelos abiertos en hardware LPU propio.' },
          { 'Proveedor': 'Together AI', 'Categoría': 'API en la nube', 'Qué es': 'API de inferencia alojada que ofrece un catálogo de modelos abiertos en infraestructura de nube compartida.' },
          { 'Proveedor': 'OpenRouter', 'Categoría': 'API en la nube', 'Qué es': 'Enrutador de API alojado que reenvía solicitudes a muchos proveedores de modelos subyacentes a través de un único endpoint y clave.' },
        ],
        note: 'Los perfiles de proveedor y los valores predeterminados pueden cambiar entre versiones de Bodega One Code. Consulta las notas de versión en github.com/BodegaoneAI/bodegaone-releases y la lista actual de proveedores en bodegaone.ai antes de asumir que un perfil concreto sigue disponible en la versión que instales.',
      },
      editorTooling: {
        id: 'editor-and-tooling',
        title: '¿Qué incluyen el editor y las herramientas?',
        content: [
          '**El editor principal de Bodega One Code está construido sobre Monaco, el mismo componente de editor de código abierto que impulsa Visual Studio Code**, por lo que el resaltado de sintaxis, la edición multiarchivo y la navegación por teclado deberían resultar familiares a quien venga de VS Code o de una bifurcación de VS Code.',
        ],
        items: [
          '**Autocompletado por tabulación** — completado de código en línea, impulsado por el modelo, que se activa mientras escribes, similar en concepto a las funciones de completado de herramientas al estilo Copilot.',
          '**Integración con Git** — las operaciones de control de versiones están disponibles dentro del IDE en lugar de requerir un terminal o un cliente de Git aparte.',
          '**26 herramientas integradas** — el agente tiene acceso a un conjunto fijo de herramientas que cubre operaciones de archivos (lectura, escritura, búsqueda en todo el proyecto), ejecución de comandos de shell y búsqueda web, que puede invocar como parte de completar una tarea de codificación.',
          '**Chat y agente en la misma aplicación** — la interfaz de chat para hacer preguntas y el agente autónomo para realizar cambios de varios pasos se ejecutan ambos dentro de la misma app y pueden usar el mismo proveedor de LLM configurado.',
        ],
      },
      qualityEnforcement: {
        id: 'quality-enforcement-loop',
        title: '¿Qué es el bucle de verificación en 5 pasos?',
        content: [
          '**Bodega One Code describe un bucle de verificación en 5 pasos por el que pasa cada cambio realizado por el agente antes de marcarse como completado, que abarca comprobaciones de sintaxis, de tipos y pruebas.** Esta es la propia descripción del fabricante sobre su Quality Enforcement Layer; PromptQuorum no ha medido de forma independiente su precisión, su tasa de falsos positivos ni su efecto en el tiempo de finalización de tareas.',
          'La implicación práctica, según la descripción del fabricante, es que se espera que el agente detecte sintaxis rota, errores de tipos y pruebas fallidas por sí mismo, en lugar de dejar esa verificación por completo al desarrollador después. Que esto se cumpla depende del lenguaje del proyecto, su cobertura de pruebas y su configuración — nada de esto se ha probado directamente en esta reseña.',
          'La Quality Enforcement Layer y la orquestación agéntica que la rodea son componentes propietarios de Bodega One Code, no parte de ninguna publicación de código abierto, aunque se aplique una Business Source License a otras partes del código tras la distribución.',
        ],
      },
      airGap: {
        id: 'air-gap-mode',
        title: '¿Cómo funciona el modo air-gap?',
        content: [
          '**Bodega One Code ofrece un modo air-gap que, según el fabricante, aplica 9 capas independientes de aplicación de red para bloquear todas las conexiones salientes, para desarrolladores que necesitan que el IDE funcione totalmente sin conexión.** Está pensado para escenarios en los que el código, los prompts o los datos del proyecto nunca deben salir de la máquina local — por ejemplo, usando un proveedor totalmente local (Ollama, llama.cpp, LocalAI) sin recurso a la nube habilitado.',
          'PromptQuorum no ha verificado de forma independiente cómo se implementan las 9 capas ni ha probado su eficacia para bloquear cada vía de salida. Los desarrolladores con un requisito genuino de aislamiento de red (datos regulados, entornos clasificados, cláusulas contractuales de no salida de datos) deberían verificar el comportamiento de la red por sí mismos — por ejemplo con un firewall externo o un monitor de red — en lugar de confiar solo en el nombre de la función.',
        ],
      },
      licensingPricing: {
        id: 'licensing-and-pricing',
        itemHeadings: true,
        title: '¿Cuánto cuesta Bodega One Code y cuál es su licencia?',
        content: [
          '**Bodega One Code está actualmente en beta abierta, y el fabricante afirma que la app es gratuita para todos durante el periodo de beta, incluido el uso comercial.** Los precios siguientes son los que el fabricante indica que aplicarán tras finalizar la beta.',
        ],
        columns: ['Plan', 'Precio', 'Máquinas', 'Notas'],
        rows: [
          { 'Plan': 'Personal', 'Precio': 'Gratis', 'Máquinas': '1 máquina', 'Notas': 'Uso personal, no comercial, según los términos indicados por el fabricante.' },
          { 'Plan': 'Pro / comercial', 'Precio': '39 $ pago único', 'Máquinas': '2 máquinas', 'Notas': 'Pago único, sin suscripción, según el precio indicado por el fabricante.' },
          { 'Plan': 'Beta abierta (actual)', 'Precio': 'Gratis', 'Máquinas': 'Sin restricción durante la beta', 'Notas': 'Gratis para todos, incluido el uso comercial, mientras la beta abierta esté activa.' },
        ],
        note: 'La licencia es propietaria en general. Se aplica una Business Source License a algunos componentes del código tras la distribución, y la Quality Enforcement Layer más la capa de orquestación agéntica siguen siendo propietarias independientemente del nivel de licencia. Confirma el precio actual, el estado de la beta y los términos de licencia directamente en bodegaone.ai antes de comprar, ya que los términos de la beta y los precios pueden cambiar.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y desventajas',
        columns: ['Ventaja', 'Qué significa en la práctica', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Elección de proveedor (BYOLLM)',
            'Qué significa en la práctica': 'No estás atado a un único proveedor de modelo — cambia entre proveedores locales y en la nube según lo requiera un proyecto o presupuesto.',
            'Limitación / advertencia': 'La calidad de salida sigue dependiendo por completo del modelo elegido; un modelo local pequeño no igualará el razonamiento de un modelo en la nube de frontera.',
          },
          {
            'Ventaja': 'Una aplicación para editor, chat y agente',
            'Qué significa en la práctica': 'Sin cambio de contexto entre un editor separado y una herramienta de chat con IA aparte.',
            'Limitación / advertencia': 'Es una aplicación independiente, no una extensión de VS Code — pasar desde una instalación existente de VS Code implica adoptar una nueva app en lugar de añadir un plugin.',
          },
          {
            'Ventaja': 'Local-first, con opción air-gap',
            'Qué significa en la práctica': 'Puede configurarse para funcionar totalmente con modelos locales, sin tráfico de red saliente.',
            'Limitación / advertencia': 'La eficacia del modo air-gap y la precisión del bucle de verificación son afirmaciones del fabricante que esta reseña no ha probado de forma independiente.',
          },
          {
            'Ventaja': 'Sin precios por suscripción',
            'Qué significa en la práctica': 'Un pago único de 39 $ cubre una segunda máquina en el plan Pro/comercial; el uso personal en una máquina es gratuito.',
            'Limitación / advertencia': 'Actualmente en beta abierta con acceso gratuito para todos — los precios y términos tras la beta podrían cambiar antes de la disponibilidad general.',
          },
          {
            'Ventaja': '26 herramientas de agente integradas',
            'Qué significa en la práctica': 'Operaciones de archivos, comandos de shell y búsqueda web están disponibles para el agente desde el principio, sin configurar servidores MCP aparte.',
            'Limitación / advertencia': 'Un conjunto de herramientas fijo es menos extensible que un ecosistema abierto de plugins/MCP donde terceros añaden nuevas herramientas.',
          },
          {
            'Ventaja': 'Superficie de edición familiar',
            'Qué significa en la práctica': 'El editor basado en Monaco y el autocompletado por tabulación deberían resultar inmediatamente familiares para los usuarios de VS Code.',
            'Limitación / advertencia': 'La Quality Enforcement Layer y la orquestación agéntica son propietarias — no es posible inspeccionar ni modificar cómo funciona internamente el bucle de verificación.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Bodega One Code vs. Continue.dev, Cline y Aider',
        columns: ['Herramienta', 'Enlace', 'Formato', 'Elección de modelo', 'Diseño local-first', 'Diferencia clave'],
        rows: [
          {
            'Herramienta': 'Bodega One Code',
            'Enlace': '[bodegaone.ai](https://bodegaone.ai)',
            'Formato': 'IDE de escritorio independiente (editor + chat + agente en una app)',
            'Elección de modelo': 'BYOLLM: 10+ perfiles, locales y en la nube',
            'Diseño local-first': 'Construido en torno a proveedores locales, con modo air-gap opcional',
            'Diferencia clave': 'Una sola aplicación sustituye al editor, en lugar de añadir solo una capa de IA a un editor existente; los componentes centrales del agente son propietarios.',
          },
          {
            'Herramienta': 'Continue.dev',
            'Enlace': '[docs.continue.dev](https://docs.continue.dev)',
            'Formato': 'Extensión de código abierto para VS Code e IDE de JetBrains',
            'Elección de modelo': 'Configurable a proveedores locales (Ollama, LM Studio) o en la nube',
            'Diseño local-first': 'Depende por completo del proveedor configurado; sin función air-gap dedicada',
            'Diferencia clave': 'Añade chat con IA y autocompletado a un editor que ya usas, en lugar de sustituirlo.',
          },
          {
            'Herramienta': 'Cline',
            'Enlace': '[cline.bot](https://cline.bot)',
            'Formato': 'Extensión de código abierto para agente autónomo en VS Code',
            'Elección de modelo': 'Configurable a proveedores locales o en la nube mediante endpoints compatibles con la API',
            'Diseño local-first': 'Depende del proveedor configurado',
            'Diferencia clave': 'Extensión centrada en el agente, con aprobación humana para ediciones de archivos y comandos, dentro de VS Code.',
          },
          {
            'Herramienta': 'Aider',
            'Enlace': '[aider.chat](https://aider.chat)',
            'Formato': 'Herramienta de código abierto de programación en pareja con IA, en terminal',
            'Elección de modelo': 'Configurable a proveedores locales o en la nube mediante endpoints compatibles con la API',
            'Diseño local-first': 'Depende del proveedor configurado; sin editor gráfico propio',
            'Diferencia clave': 'Flujo de trabajo en línea de comandos construido en torno a los commits de Git, sin interfaz de edición integrada.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es adecuado Bodega One Code',
        items: [
          '**Desarrolladores que quieren una sola app en lugar de un editor más una capa de IA aparte.** Si mantener una pila de extensiones de VS Code para funciones de IA supone fricción, un IDE combinado con editor, chat y agente puede ser más simple de configurar y mantener.',
          '**Desarrolladores que quieren alternar entre modelos locales y en la nube en el mismo proyecto.** El soporte BYOLLM en más de 10 perfiles permite prototipar con un modelo en la nube y luego pasar a uno local (o al revés) sin cambiar de herramienta.',
          '**Equipos que evalúan herramientas local-first por motivos de coste o privacidad.** Funcionar por completo con un proveedor local como Ollama o llama.cpp mantiene el código y los prompts fuera de servidores de terceros, y el modo air-gap opcional atiende requisitos más estrictos de no salida de datos.',
          '**Usuarios que prefieren un pago único a una suscripción.** La licencia Pro/comercial única de 39 $ indicada, en lugar de una tarifa recurrente, puede convenir a desarrolladores que quieran evitar suscripciones continuas a herramientas de IA.',
          '**Early adopters cómodos evaluando software en beta.** La ventana de beta abierta actual ofrece acceso gratuito, incluido comercial, para probar el IDE antes de comprometerse a largo plazo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quién no es adecuado Bodega One Code',
        items: [
          '**Desarrolladores que quieren permanecer dentro de VS Code.** Bodega One Code es una aplicación separada, no una extensión de VS Code — si necesitas añadir funciones de IA a tu instalación existente de VS Code, Continue.dev o Cline encajan mejor.',
          '**Equipos que requieren herramientas totalmente de código abierto de principio a fin.** La Quality Enforcement Layer y la orquestación agéntica son propietarias, y se aplica una Business Source License a algunos componentes tras la distribución — los equipos que necesiten que cada capa sea de código abierto (como con Aider, Continue.dev o Cline) deberían revisar primero los términos de licencia.',
          '**Cualquiera que necesite auditar de forma independiente las afirmaciones sobre el bucle de verificación o el modo air-gap antes de confiar en ellas.** Esta reseña reporta lo que Bodega One Code publica sobre su bucle de verificación en 5 pasos y su modo air-gap de 9 capas; ninguno de los dos ha sido evaluado ni auditado en seguridad por PromptQuorum. Los entornos regulados o de alta seguridad deberían hacer su propia verificación.',
          '**Usuarios que necesitan un flujo de trabajo solo de terminal.** Bodega One Code es una aplicación gráfica construida alrededor de un editor; los desarrolladores que prefieran una herramienta de programación en pareja centrada en la línea de comandos deberían mirar Aider.',
          '**Cualquiera que planifique basándose en los precios gratuitos actuales de la beta como garantía a largo plazo.** Los precios y términos de licencia tras la beta son la intención declarada del fabricante, no una garantía contractual — confirma los términos actuales en bodegaone.ai antes de presupuestar en función de ellos.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es Bodega One Code?',
            a: 'Bodega One Code es un IDE de codificación de escritorio que combina un editor de código, un panel de chat con IA y un agente de codificación autónomo en una sola aplicación local. Su característica distintiva es BYOLLM (Bring Your Own LLM): el desarrollador elige qué proveedor de modelo — local o en la nube — impulsa el chat y el agente.',
          },
          {
            q: '¿Qué significa BYOLLM?',
            a: 'BYOLLM significa "Bring Your Own LLM" (trae tu propio LLM). En lugar de un IDE atado a un único proveedor de modelo, Bodega One Code puede conectarse a un proveedor de tu elección — un tiempo de ejecución local como Ollama o llama.cpp, o una API en la nube como OpenAI o Anthropic — mediante perfiles de proveedor integrados.',
          },
          {
            q: '¿Qué proveedores de LLM admite Bodega One Code?',
            a: 'Bodega One Code viene con más de 10 perfiles de proveedor: Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX y Jan para inferencia local, además de OpenAI, Anthropic, Groq, Together AI y OpenRouter para APIs en la nube. Bodega One Code afirma que se puede cambiar entre ellos sin reiniciar la app.',
          },
          {
            q: '¿Es gratuito Bodega One Code?',
            a: 'Bodega One Code está actualmente en beta abierta y es gratuito para todos, incluido el uso comercial, según el fabricante. Tras la beta, los términos indicados por el fabricante son: gratuito para uso personal en una máquina, y un pago único de 39 $ por una licencia Pro/comercial que cubre dos máquinas, sin suscripción.',
          },
          {
            q: '¿Es Bodega One Code de código abierto?',
            a: 'No del todo. Se aplica una Business Source License a algunos componentes tras la distribución, pero la Quality Enforcement Layer y la capa de orquestación agéntica son propietarias y lo seguirán siendo. Los desarrolladores que necesiten una herramienta de codificación local totalmente de código abierto deberían considerar alternativas como Continue.dev, Cline o Aider.',
          },
          {
            q: '¿Qué editor usa Bodega One Code?',
            a: 'Bodega One Code está construido sobre Monaco, el mismo componente de editor de código abierto que usa Visual Studio Code, y añade autocompletado por tabulación, integración con Git y 26 herramientas integradas para operaciones de archivos, comandos de shell y búsqueda web disponibles para el agente.',
          },
          {
            q: '¿Qué es el bucle de verificación en 5 pasos?',
            a: 'Es un proceso de control de calidad que Bodega One Code describe como ejecutado tras cada cambio realizado por el agente — que abarca comprobaciones de sintaxis, de tipos y pruebas — antes de que el cambio se marque como completado. Esta es la propia descripción del fabricante sobre su Quality Enforcement Layer; PromptQuorum no ha evaluado su precisión de forma independiente.',
          },
          {
            q: '¿Qué es el modo air-gap en Bodega One Code?',
            a: 'El modo air-gap es un ajuste que Bodega One Code describe como aplicación de 9 capas de control de red para bloquear todas las conexiones salientes, pensado para desarrolladores que necesitan que el IDE funcione totalmente sin conexión. PromptQuorum no ha probado de forma independiente cuán completamente las 9 capas bloquean el tráfico saliente — verifícalo tú mismo para cualquier entorno con un requisito genuino de no salida de datos.',
          },
          {
            q: '¿Cómo se compara Bodega One Code con Continue.dev, Cline o Aider?',
            a: 'Continue.dev y Cline son extensiones de código abierto que añaden chat con IA, autocompletado o un agente autónomo a una instalación existente de VS Code (o JetBrains). Aider es una herramienta de código abierto de programación en pareja con IA, en terminal, sin editor integrado. Bodega One Code es una aplicación independiente y separada que combina el propio editor con chat y un agente, y cuya Quality Enforcement Layer central y orquestación agéntica son propietarias en lugar de código abierto.',
          },
          {
            q: '¿Puedo usar Bodega One Code totalmente sin conexión?',
            a: 'Sí, si lo configuras para usar un proveedor local (Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX o Jan) y activas el modo air-gap, que Bodega One Code describe como bloqueo de conexiones de red salientes mediante 9 capas de control. Usar un proveedor en la nube (OpenAI, Anthropic, Groq, Together AI, OpenRouter) requiere conexión a internet independientemente de este ajuste.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'La idea central de Bodega One Code — una sola aplicación local que combina editor, chat con IA y un agente autónomo, dejando por completo en manos del desarrollador la elección del proveedor de modelo — cubre un hueco real entre los IDE de IA atados a un único proveedor y las extensiones minimalistas donde hay que montar tu propia configuración de proveedor. La lista de proveedores BYOLLM es amplia, cubriendo los principales tiempos de ejecución locales (Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, Jan) y las principales APIs en la nube (OpenAI, Anthropic, Groq, Together AI, OpenRouter) en un solo lugar, y el modelo de precios — uso personal gratuito más una tarifa única de 39 $ para una segunda máquina, sin suscripción — es sencillo. Las dos funciones que más diferencian al producto, el bucle de verificación en 5 pasos y el modo air-gap de 9 capas, son afirmaciones del fabricante en lugar de elementos evaluados de forma independiente aquí — trátalas como afirmaciones que verificar frente a tus propios requisitos de proyecto y de red, no como garantías. Los desarrolladores que quieran un IDE combinado y estén cómodos con una Quality Enforcement Layer propietaria deberían probarlo durante la beta abierta gratuita actual; quienes necesiten una pila totalmente de código abierto, o quieran seguir trabajando dentro de VS Code, están mejor atendidos por Continue.dev, Cline o Aider.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio oficial de Bodega One Code](https://bodegaone.ai) — resumen del producto, lista de proveedores BYOLLM, términos de precio y licencia.',
          '[Bodega One Code (www)](https://www.bodegaone.ai) — sitio de producto espejo.',
          '[Versiones de Bodega One Code en GitHub](https://github.com/BodegaoneAI/bodegaone-releases) — notas de versión e historial de compilaciones.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Continue.dev vs. Cline vs. Aider](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local) — tres herramientas de codificación local de código abierto que se añaden a un editor existente en lugar de sustituirlo.',
          '[Mejores modelos de codificación locales en 2026](/es/power-local-llm/best-local-coding-models-2026) — la capa de modelos: qué modelos abiertos usar con una herramienta BYOLLM como Bodega One Code.',
          '[Agentes de IA locales con MCP en 2026](/es/power-local-llm/local-ai-agents-with-mcp-2026) — para lectores que comparan la lista de herramientas integradas de Bodega One Code con un ecosistema de herramientas abierto basado en MCP.',
          '[Reemplazar GitHub Copilot con un LLM local](/es/power-local-llm/replace-github-copilot-with-local-llm) — contexto más amplio sobre trasladar la asistencia de codificación con IA a modelos locales o autoalojados.',
          '[Centro Power Local LLM](/es/power-local-llm) — biblioteca completa de guías.',
        ],
      },
    },
  },
  pt: {
    theme: 'Coding Assistants',
    heroImage: '/images/bodega-one-code-review-2026-hero-pt.webp',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    next_refresh_due: '2027-03-03',
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores avaliando uma IDE de codificação local-first que permite escolher o próprio provedor de LLM em vez de ficar preso a um único fornecedor',
    primaryTerm: 'Bodega One Code',
    title: 'Bodega One Code (2026): uma IDE de codificação local-first BYOLLM',
    seoTitle: 'Bodega One Code 2026: IDE de codificação BYOLLM',
    intro:
      'Bodega One Code é uma IDE de codificação que reúne um editor de código, um painel de chat com IA e um agente de codificação autônomo em um único aplicativo executado na sua própria máquina. A ideia central é "Bring Your Own LLM" (BYOLLM): em vez de vir vinculada a um único provedor de modelo, a Bodega One Code pode ser conectada ao Ollama, LM Studio, llama.cpp ou a uma API na nuvem como OpenAI ou Anthropic, e, segundo o fabricante, permite trocar de provedor sem reiniciar o aplicativo. Esta análise cobre o que a IDE inclui segundo as próprias páginas de produto da Bodega One Code, como funcionam o sistema de provedores e o agente, quais são os termos atuais de preço e licenciamento, e como ela se compara a outras ferramentas de codificação com capacidade local, como Continue.dev, Cline e Aider.',
    metaDescription:
      'Bodega One Code: uma IDE de codificação local-first com troca de provedor BYOLLM, editor Monaco e agente autônomo. Preços, licença, modo air-gap e comparação com Continue.dev, Cline e Aider.',
    twitterDescription:
      'Bodega One Code 2026: IDE de codificação local-first, BYOLLM com 10+ provedores, editor Monaco, agente autônomo, modo air-gap. Preços, licença e comparação com Continue.dev, Cline e Aider.',
    readTime: '10 min de leitura',
    targetKeywords: [
      'bodega one code análise',
      'bodega one code ide',
      'ide de codificação byollm',
      'bodega one code preço',
      'bodega one code vs cursor',
    ],
    leadAnswerBlock:
      '**Vale a pena avaliar a Bodega One Code se você quer um único aplicativo local que reúna editor de código, chat com IA e um agente de codificação autônomo, e prefere escolher qual LLM o alimenta em vez de ficar preso a um único fornecedor.** A IDE suporta Bring Your Own LLM (BYOLLM) por meio de mais de uma dúzia de perfis de provedor pré-configurados — Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX e Jan para inferência local, além de OpenAI, Anthropic, Groq, Together AI e OpenRouter para modelos em nuvem — e a Bodega One Code afirma que é possível trocar de provedor sem reiniciar o aplicativo. Atualmente está em beta aberto e é gratuita, inclusive para uso comercial; após o beta, o uso pessoal continuará gratuito em uma máquina, e uma licença única de US$ 39 adiciona uma segunda máquina, sem assinatura.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Bodega One Code for local-first AI coding?',
        answer:
          'Use Bodega One Code if you want a single desktop IDE that runs an editor, AI chat, and an autonomous coding agent locally while letting you pick the LLM provider — local (Ollama, LM Studio, llama.cpp) or cloud (OpenAI, Anthropic, Groq). Weigh it against Continue.dev, Cline, or Aider if you already work inside VS Code and want an extension instead of a separate application, and note that the Quality Enforcement Layer and agentic orchestration are proprietary, not open source.',
        bullets: [
          'BYOLLM: 10+ provider presets, including Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, and Jan.',
          'Bodega One Code states providers can be switched without restarting the IDE.',
          'Monaco-based editor, tab autocomplete, Git integration, and 26 built-in tools for file operations, shell commands, and web search.',
          'Vendor-described 5-step verification loop (syntax, type checks, tests) runs after every agent change, and a 9-layer air-gap mode is offered for offline use — neither has been independently benchmarked by PromptQuorum.',
          'Free for personal use on one machine; a one-time $39 license covers a second machine (no subscription). Currently in open beta, free for everyone including commercial use during the beta.',
          'Licensing is proprietary: a Business Source License applies to some components after distribution, and the Quality Enforcement Layer plus agentic orchestration stay proprietary.',
        ],
        updatedDate: '2026-09-03',
      },
      pt: {
        question: 'Devo usar a Bodega One Code para codificação com IA local-first?',
        answer:
          'Use a Bodega One Code se quiser uma única IDE de desktop que execute localmente um editor, chat com IA e um agente de codificação autônomo, permitindo escolher o provedor de LLM — local (Ollama, LM Studio, llama.cpp) ou nuvem (OpenAI, Anthropic, Groq). Compare-a com Continue.dev, Cline ou Aider se você já trabalha dentro do VS Code e prefere uma extensão em vez de um aplicativo separado, e observe que a Quality Enforcement Layer e a orquestração agêntica são proprietárias, não de código aberto.',
        bullets: [
          'BYOLLM: 10+ perfis de provedor, incluindo Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX e Jan.',
          'A Bodega One Code afirma que os provedores podem ser trocados sem reiniciar a IDE.',
          'Editor baseado em Monaco, autocompletar por tabulação, integração com Git e 26 ferramentas integradas para operações de arquivo, comandos de shell e busca na web.',
          'Um ciclo de verificação em 5 etapas descrito pelo fabricante (sintaxe, checagem de tipos, testes) roda após cada alteração do agente, e um modo air-gap de 9 camadas é oferecido para uso offline — nenhum dos dois foi avaliado de forma independente pela PromptQuorum.',
          'Gratuita para uso pessoal em uma máquina; uma licença única de US$ 39 cobre uma segunda máquina (sem assinatura). Atualmente em beta aberto, gratuita para todos, incluindo uso comercial, durante o beta.',
          'O licenciamento é proprietário em geral: aplica-se uma Business Source License a alguns componentes após a distribuição, e a Quality Enforcement Layer mais a orquestração agêntica permanecem proprietárias.',
        ],
        updatedDate: '2026-09-03',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'O que é a Bodega One Code?', anchor: 'what-is-bodega-one-code' },
      { label: 'Quais provedores de LLM ela suporta?', anchor: 'byollm-providers' },
      { label: 'O que o editor inclui?', anchor: 'editor-and-tooling' },
      { label: 'O que é o ciclo de verificação?', anchor: 'quality-enforcement-loop' },
      { label: 'Como funciona o modo air-gap?', anchor: 'air-gap-mode' },
      { label: 'Preços e licença', anchor: 'licensing-and-pricing' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Bodega One Code vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem é indicada', anchor: 'who-should-use' },
      { label: 'Para quem não é indicada', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bodega One Code é uma IDE de codificação com IA local-first que permite aos desenvolvedores trazer seu próprio LLM — por meio de mais de 10 perfis de provedor que abrangem runtimes locais como Ollama e llama.cpp e APIs em nuvem como OpenAI e Anthropic — para alimentar um chat integrado e um agente de codificação autônomo, com um modo air-gap opcional para uso totalmente offline.',
          },
          {
            type: 'plain-terms',
            text: 'É um editor de código, um painel de chat com IA e um agente de IA capaz de editar arquivos e executar comandos, tudo reunido em um aplicativo de desktop, onde você escolhe qual modelo de IA — na sua máquina ou na nuvem — faz o trabalho.',
          },
        ],
        items: [
          'Reúne editor de código, chat com IA e agente de codificação autônomo em um único aplicativo local; construído em torno de "Bring Your Own LLM" (BYOLLM).',
          '10+ perfis de provedor: Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX e Jan.',
          'Os provedores podem, segundo o fabricante, ser trocados sem reiniciar o aplicativo.',
          'Editor baseado em Monaco (o mesmo componente de código aberto que alimenta o VS Code), autocompletar por tabulação, integração com Git e 26 ferramentas integradas cobrindo operações de arquivo, comandos de shell e busca na web.',
          'Um ciclo de verificação em 5 etapas descrito pelo fabricante roda após cada alteração do agente: checagem de sintaxe, de tipos e de testes, antes que uma alteração seja marcada como concluída.',
          'O modo air-gap usa, segundo a Bodega One Code, 9 camadas independentes de aplicação de rede para bloquear conexões de saída, para casos que exigem operação totalmente offline.',
          'Gratuita para uso pessoal em uma máquina; uma licença Pro/comercial única de US$ 39 adiciona uma segunda máquina, sem assinatura. Atualmente em beta aberto, gratuita para todos, incluindo uso comercial.',
          'Licenciamento proprietário em geral — aplica-se uma Business Source License a alguns componentes após a distribuição, e a Quality Enforcement Layer mais a orquestração agêntica permanecem proprietárias.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise descreve o que a Bodega One Code publica sobre si mesma em bodegaone.ai e em seu repositório de releases no GitHub ([github.com/BodegaoneAI/bodegaone-releases](https://github.com/BodegaoneAI/bodegaone-releases)). A PromptQuorum não avaliou de forma independente o ciclo de verificação, o modo air-gap nem a latência da troca de provedor, e não existe relação de afiliação ou comercial entre a PromptQuorum e a Bodega One Code.',
          },
        ],
      },
      whatIs: {
        id: 'what-is-bodega-one-code',
        title: 'O que é a Bodega One Code?',
        content: [
          '**Bodega One Code é uma IDE de codificação de desktop que reúne um editor, uma interface de chat com IA e um agente de codificação autônomo, projetada com a ideia de que é o desenvolvedor — não o fabricante — quem escolhe qual LLM faz o trabalho.** A Bodega One Code chama essa abordagem de "Bring Your Own LLM" (BYOLLM): o próprio aplicativo é a interface e a camada de ferramentas, enquanto o modelo que responde no chat ou conduz o agente de codificação pode ser um modelo totalmente local ou uma API em nuvem hospedada, à escolha do usuário.',
          'Isso difere do padrão de IDEs vinculadas a uma única família de modelos. Como a Bodega One Code separa a interface do provedor de modelo, um desenvolvedor pode começar com um modelo em nuvem como OpenAI ou Anthropic para capacidade máxima, e depois mover o mesmo fluxo de trabalho para um runtime local como Ollama ou llama.cpp ao trabalhar offline ou com código sensível, sem trocar de aplicativo.',
          'O produto é distribuído pelo site bodegaone.ai (também acessível em www.bodegaone.ai), com builds de release rastreados no GitHub em github.com/BodegaoneAI/bodegaone-releases.',
        ],
      },
      byollmProviders: {
        id: 'byollm-providers',
        itemHeadings: true,
        title: 'Quais provedores de LLM a Bodega One Code suporta?',
        content: [
          '**A Bodega One Code vem com mais de uma dúzia de perfis de provedor integrados, cobrindo tanto runtimes de inferência locais quanto APIs em nuvem.** Selecionar um perfil direciona o editor, o chat e o agente para esse provedor; a Bodega One Code afirma que o provedor ativo pode ser trocado sem reiniciar o aplicativo.',
        ],
        columns: ['Provedor', 'Categoria', 'O que é'],
        rows: [
          { 'Provedor': 'Ollama', 'Categoria': 'Runtime local', 'O que é': 'Servidor de modelos locais popular; opção padrão comum para rodar modelos abertos em uma máquina pessoal.' },
          { 'Provedor': 'LM Studio', 'Categoria': 'Runtime local', 'O que é': 'App de desktop para baixar e servir modelos locais por meio de uma API local compatível com OpenAI.' },
          { 'Provedor': 'llama.cpp', 'Categoria': 'Runtime local', 'O que é': 'O motor de inferência em C/C++ que sustenta muitas ferramentas de modelos locais; pode rodar diretamente como servidor.' },
          { 'Provedor': 'vLLM', 'Categoria': 'Runtime local', 'O que é': 'Servidor de inferência de alto throughput, tipicamente usado em implantações autogerenciadas de nível workstation ou servidor.' },
          { 'Provedor': 'LocalAI', 'Categoria': 'Runtime local', 'O que é': 'Servidor de inferência autogerenciado, compatível com a API da OpenAI, para rodar modelos abertos localmente.' },
          { 'Provedor': 'KoboldCpp', 'Categoria': 'Runtime local', 'O que é': 'Servidor de inferência local baseado em llama.cpp, originalmente popular na comunidade de roleplay e escrita criativa local.' },
          { 'Provedor': 'GPT4All', 'Categoria': 'Runtime local', 'O que é': 'App de desktop e motor de inferência local para rodar modelos abertos sem conexão com a nuvem.' },
          { 'Provedor': 'MLX', 'Categoria': 'Runtime local', 'O que é': 'Framework de computação com arrays da Apple, usado para rodar modelos locais com eficiência em Apple Silicon.' },
          { 'Provedor': 'Jan', 'Categoria': 'Runtime local', 'O que é': 'App de desktop de código aberto, no estilo ChatGPT, para rodar modelos locais via um motor de inferência integrado ou externo.' },
          { 'Provedor': 'OpenAI', 'Categoria': 'API em nuvem', 'O que é': 'Acesso via API hospedada à família de modelos GPT da OpenAI; requer uma chave de API OpenAI e acesso à internet.' },
          { 'Provedor': 'Anthropic', 'Categoria': 'API em nuvem', 'O que é': 'Acesso via API hospedada à família de modelos Claude da Anthropic; requer uma chave de API Anthropic e acesso à internet.' },
          { 'Provedor': 'Groq', 'Categoria': 'API em nuvem', 'O que é': 'API de inferência hospedada conhecida pela baixa latência ao servir modelos abertos em hardware LPU próprio.' },
          { 'Provedor': 'Together AI', 'Categoria': 'API em nuvem', 'O que é': 'API de inferência hospedada com um catálogo de modelos abertos em infraestrutura de nuvem compartilhada.' },
          { 'Provedor': 'OpenRouter', 'Categoria': 'API em nuvem', 'O que é': 'Roteador de API hospedado que encaminha solicitações a muitos provedores de modelos subjacentes por meio de um único endpoint e chave.' },
        ],
        note: 'Perfis de provedor e padrões podem mudar entre versões da Bodega One Code. Confira as notas de release em github.com/BodegaoneAI/bodegaone-releases e a lista atual de provedores em bodegaone.ai antes de presumir que um perfil específico ainda está disponível na versão instalada.',
      },
      editorTooling: {
        id: 'editor-and-tooling',
        title: 'O que o editor e as ferramentas incluem?',
        content: [
          '**O editor principal da Bodega One Code é construído sobre o Monaco, o mesmo componente de editor de código aberto que alimenta o Visual Studio Code**, então destaque de sintaxe, edição multiarquivo e navegação orientada por teclado devem parecer familiares para quem vem do VS Code ou de um fork dele.',
        ],
        items: [
          '**Autocompletar por tabulação** — completude de código em linha, orientada por modelo, acionada enquanto você digita, conceitualmente semelhante aos recursos de completude de ferramentas no estilo Copilot.',
          '**Integração com Git** — operações de controle de versão ficam disponíveis dentro da IDE, sem exigir um terminal ou cliente Git separado.',
          '**26 ferramentas integradas** — o agente tem acesso a um conjunto fixo de ferramentas cobrindo operações de arquivo (leitura, escrita, busca em todo o projeto), execução de comandos de shell e busca na web, que pode acionar como parte da conclusão de uma tarefa de codificação.',
          '**Chat e agente no mesmo aplicativo** — a interface de chat para perguntas e o agente autônomo para alterações em várias etapas rodam ambos dentro do mesmo app e podem usar o mesmo provedor de LLM configurado.',
        ],
      },
      qualityEnforcement: {
        id: 'quality-enforcement-loop',
        title: 'O que é o ciclo de verificação em 5 etapas?',
        content: [
          '**A Bodega One Code descreve um ciclo de verificação em 5 etapas pelo qual cada alteração feita pelo agente passa antes de ser marcada como concluída, cobrindo checagem de sintaxe, de tipos e testes.** Esta é a própria descrição do fabricante sobre sua Quality Enforcement Layer; a PromptQuorum não mediu de forma independente sua precisão, sua taxa de falsos positivos nem seu efeito sobre o tempo de conclusão das tarefas.',
          'A implicação prática, segundo a descrição do fabricante, é que o agente deve detectar sintaxe quebrada, erros de tipo e testes falhos por conta própria, em vez de deixar essa verificação inteiramente para o desenvolvedor depois. Se isso se confirma na prática depende da linguagem do projeto, da cobertura de testes e da configuração — nada disso foi testado diretamente nesta análise.',
          'A Quality Enforcement Layer e a orquestração agêntica ao seu redor são componentes proprietários da Bodega One Code, não fazendo parte de nenhum lançamento de código aberto, mesmo que uma Business Source License se aplique a outras partes do código após a distribuição.',
        ],
      },
      airGap: {
        id: 'air-gap-mode',
        title: 'Como funciona o modo air-gap?',
        content: [
          '**A Bodega One Code oferece um modo air-gap que, segundo o fabricante, aplica 9 camadas independentes de aplicação de rede para bloquear todas as conexões de saída, para desenvolvedores que precisam que a IDE rode totalmente offline.** Isso é voltado para cenários em que código, prompts ou dados do projeto nunca devem sair da máquina local — por exemplo, usando um provedor totalmente local (Ollama, llama.cpp, LocalAI) sem fallback para a nuvem habilitado.',
          'A PromptQuorum não verificou de forma independente como as 9 camadas são implementadas nem testou sua eficácia em bloquear cada caminho de saída. Desenvolvedores com um requisito genuíno de air-gap (dados regulados, ambientes classificados, cláusulas contratuais de não saída de dados) devem verificar o comportamento de rede por conta própria — por exemplo, com um firewall externo ou um monitor de rede — em vez de confiar apenas no nome do recurso.',
        ],
      },
      licensingPricing: {
        id: 'licensing-and-pricing',
        itemHeadings: true,
        title: 'Quanto custa a Bodega One Code e qual é a licença?',
        content: [
          '**A Bodega One Code está atualmente em beta aberto, e o fabricante afirma que o app é gratuito para todos durante o período de beta, inclusive para uso comercial.** Os preços abaixo são os que o fabricante afirma que se aplicarão após o fim do beta.',
        ],
        columns: ['Plano', 'Preço', 'Máquinas', 'Notas'],
        rows: [
          { 'Plano': 'Pessoal', 'Preço': 'Grátis', 'Máquinas': '1 máquina', 'Notas': 'Uso pessoal, não comercial, segundo os termos indicados pelo fabricante.' },
          { 'Plano': 'Pro / comercial', 'Preço': 'US$ 39 pagamento único', 'Máquinas': '2 máquinas', 'Notas': 'Pagamento único, sem assinatura, segundo o preço indicado pelo fabricante.' },
          { 'Plano': 'Beta aberto (atual)', 'Preço': 'Grátis', 'Máquinas': 'Sem restrição durante o beta', 'Notas': 'Gratuita para todos, inclusive uso comercial, enquanto o beta aberto estiver ativo.' },
        ],
        note: 'O licenciamento é proprietário em geral. Uma Business Source License se aplica a alguns componentes do código após a distribuição, e a Quality Enforcement Layer mais a camada de orquestração agêntica permanecem proprietárias independentemente do nível de licença. Confirme o preço atual, o status do beta e os termos de licença diretamente em bodegaone.ai antes de comprar, já que os termos do beta e os preços podem mudar.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Escolha de provedor (BYOLLM)',
            'O que significa na prática': 'Você não fica preso a um único fornecedor de modelo — alterne entre provedores locais e em nuvem conforme o projeto ou orçamento exigir.',
            'Limitação / ressalva': 'A qualidade da saída ainda depende inteiramente do modelo escolhido; um modelo local pequeno não vai igualar o raciocínio de um modelo de nuvem de ponta.',
          },
          {
            'Vantagem': 'Um aplicativo para editor, chat e agente',
            'O que significa na prática': 'Sem troca de contexto entre um editor separado e uma ferramenta de chat com IA à parte.',
            'Limitação / ressalva': 'É um aplicativo independente, não uma extensão do VS Code — migrar de uma instalação existente do VS Code significa adotar um novo app em vez de adicionar um plugin.',
          },
          {
            'Vantagem': 'Local-first, com opção air-gap',
            'O que significa na prática': 'Pode ser configurada para rodar inteiramente com modelos locais, sem tráfego de rede de saída.',
            'Limitação / ressalva': 'A eficácia do modo air-gap e a precisão do ciclo de verificação são afirmações do fabricante que esta análise não testou de forma independente.',
          },
          {
            'Vantagem': 'Sem preço por assinatura',
            'O que significa na prática': 'Um pagamento único de US$ 39 cobre uma segunda máquina no plano Pro/comercial; o uso pessoal em uma máquina é gratuito.',
            'Limitação / ressalva': 'Atualmente em beta aberto com acesso gratuito para todos — preços e termos após o beta podem mudar antes da disponibilidade geral.',
          },
          {
            'Vantagem': '26 ferramentas de agente integradas',
            'O que significa na prática': 'Operações de arquivo, comandos de shell e busca na web ficam disponíveis para o agente prontas para uso, sem configurar servidores MCP à parte.',
            'Limitação / ressalva': 'Um conjunto fixo de ferramentas é menos extensível do que um ecossistema aberto de plugins/MCP em que terceiros adicionam novas ferramentas.',
          },
          {
            'Vantagem': 'Superfície de edição familiar',
            'O que significa na prática': 'O editor baseado em Monaco e o autocompletar por tabulação devem parecer imediatamente familiares para usuários do VS Code.',
            'Limitação / ressalva': 'A Quality Enforcement Layer e a orquestração agêntica são proprietárias — não é possível inspecionar ou modificar como o ciclo de verificação funciona internamente.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Bodega One Code vs. Continue.dev, Cline e Aider',
        columns: ['Ferramenta', 'Link', 'Formato', 'Escolha de modelo', 'Design local-first', 'Diferença principal'],
        rows: [
          {
            'Ferramenta': 'Bodega One Code',
            'Link': '[bodegaone.ai](https://bodegaone.ai)',
            'Formato': 'IDE de desktop independente (editor + chat + agente em um app)',
            'Escolha de modelo': 'BYOLLM: 10+ perfis, locais e em nuvem',
            'Design local-first': 'Construída em torno de provedores locais, com modo air-gap opcional',
            'Diferença principal': 'Um único aplicativo substitui o próprio editor, em vez de apenas adicionar uma camada de IA a um editor existente; os componentes centrais do agente são proprietários.',
          },
          {
            'Ferramenta': 'Continue.dev',
            'Link': '[docs.continue.dev](https://docs.continue.dev)',
            'Formato': 'Extensão de código aberto para VS Code e IDEs JetBrains',
            'Escolha de modelo': 'Configurável para provedores locais (Ollama, LM Studio) ou em nuvem',
            'Design local-first': 'Depende inteiramente do provedor configurado; sem recurso air-gap dedicado',
            'Diferença principal': 'Adiciona chat com IA e autocompletar a um editor que você já usa, em vez de substituí-lo.',
          },
          {
            'Ferramenta': 'Cline',
            'Link': '[cline.bot](https://cline.bot)',
            'Formato': 'Extensão de código aberto para agente autônomo no VS Code',
            'Escolha de modelo': 'Configurável para provedores locais ou em nuvem via endpoints compatíveis com API',
            'Design local-first': 'Depende do provedor configurado',
            'Diferença principal': 'Extensão focada em agente, com aprovação humana para edições de arquivos e comandos, dentro do VS Code.',
          },
          {
            'Ferramenta': 'Aider',
            'Link': '[aider.chat](https://aider.chat)',
            'Formato': 'Ferramenta de código aberto de programação em dupla com IA, baseada em terminal',
            'Escolha de modelo': 'Configurável para provedores locais ou em nuvem via endpoints compatíveis com API',
            'Design local-first': 'Depende do provedor configurado; sem editor gráfico próprio',
            'Diferença principal': 'Fluxo de trabalho em linha de comando construído em torno de commits do Git, sem interface de edição integrada.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem a Bodega One Code é indicada',
        items: [
          '**Desenvolvedores que querem um único app em vez de um editor mais uma camada de IA separada.** Se manter uma pilha de extensões do VS Code para recursos de IA parece uma fricção, uma IDE unificada com editor, chat e agente pode ser mais simples de configurar e manter.',
          '**Desenvolvedores que querem alternar entre modelos locais e em nuvem no mesmo projeto.** O suporte a BYOLLM em mais de 10 perfis permite prototipar com um modelo em nuvem e depois migrar para um local (ou o contrário) sem trocar de ferramenta.',
          '**Equipes avaliando ferramentas local-first por motivos de custo ou privacidade.** Rodar inteiramente com um provedor local como Ollama ou llama.cpp mantém código e prompts fora de servidores de terceiros, e o modo air-gap opcional atende requisitos mais rígidos de não saída de dados.',
          '**Usuários que preferem um pagamento único a uma assinatura.** A licença Pro/comercial única de US$ 39 indicada, em vez de uma taxa recorrente, pode agradar a desenvolvedores que querem evitar assinaturas contínuas de ferramentas de IA.',
          '**Early adopters confortáveis avaliando software em beta.** A janela de beta aberto atual oferece acesso gratuito, inclusive comercial, para testar a IDE antes de um compromisso de longo prazo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem a Bodega One Code não é indicada',
        items: [
          '**Desenvolvedores que querem permanecer dentro do próprio VS Code.** A Bodega One Code é um aplicativo separado, não uma extensão do VS Code — se você precisa adicionar recursos de IA à sua instalação existente do VS Code, Continue.dev ou Cline se encaixam melhor.',
          '**Equipes que exigem ferramentas totalmente de código aberto de ponta a ponta.** A Quality Enforcement Layer e a orquestração agêntica são proprietárias, e uma Business Source License se aplica a alguns componentes após a distribuição — equipes que precisam que cada camada seja de código aberto (como com Aider, Continue.dev ou Cline) devem revisar primeiro os termos de licença.',
          '**Qualquer pessoa que precise auditar de forma independente as afirmações sobre o ciclo de verificação ou o modo air-gap antes de confiar nelas.** Esta análise relata o que a Bodega One Code publica sobre seu ciclo de verificação em 5 etapas e seu modo air-gap de 9 camadas; nenhum dos dois foi avaliado ou testado em segurança pela PromptQuorum. Ambientes regulados ou de alta segurança devem fazer sua própria verificação.',
          '**Usuários que precisam de um fluxo de trabalho apenas em terminal.** A Bodega One Code é um aplicativo gráfico construído em torno de um editor; desenvolvedores que preferem uma ferramenta de programação em dupla focada em linha de comando devem considerar o Aider.',
          '**Qualquer pessoa que planeje contando com os preços gratuitos atuais do beta como garantia de longo prazo.** Preços e termos de licença após o beta são a intenção declarada do fabricante, não uma garantia contratual — confirme os termos atuais em bodegaone.ai antes de orçar com base neles.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é a Bodega One Code?',
            a: 'Bodega One Code é uma IDE de codificação de desktop que reúne um editor de código, um painel de chat com IA e um agente de codificação autônomo em um único aplicativo local. Sua característica distintiva é o BYOLLM (Bring Your Own LLM): o desenvolvedor escolhe qual provedor de modelo — local ou nuvem — alimenta o chat e o agente.',
          },
          {
            q: 'O que significa BYOLLM?',
            a: 'BYOLLM significa "Bring Your Own LLM" (traga seu próprio LLM). Em vez de uma IDE vinculada a um único provedor de modelo, a Bodega One Code pode ser conectada a um provedor de sua escolha — um runtime local como Ollama ou llama.cpp, ou uma API em nuvem como OpenAI ou Anthropic — por meio de perfis de provedor integrados.',
          },
          {
            q: 'Quais provedores de LLM a Bodega One Code suporta?',
            a: 'A Bodega One Code vem com mais de 10 perfis de provedor: Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX e Jan para inferência local, além de OpenAI, Anthropic, Groq, Together AI e OpenRouter para APIs em nuvem. A Bodega One Code afirma que é possível trocar entre eles sem reiniciar o app.',
          },
          {
            q: 'A Bodega One Code é gratuita?',
            a: 'A Bodega One Code está atualmente em beta aberto e é gratuita para todos, inclusive uso comercial, segundo o fabricante. Após o beta, os termos indicados pelo fabricante são: gratuita para uso pessoal em uma máquina, e um pagamento único de US$ 39 por uma licença Pro/comercial que cobre duas máquinas, sem assinatura.',
          },
          {
            q: 'A Bodega One Code é de código aberto?',
            a: 'Não totalmente. Uma Business Source License se aplica a alguns componentes após a distribuição, mas a Quality Enforcement Layer e a camada de orquestração agêntica são proprietárias e continuam sendo. Desenvolvedores que precisam de uma ferramenta de codificação local totalmente de código aberto devem considerar alternativas como Continue.dev, Cline ou Aider.',
          },
          {
            q: 'Qual editor a Bodega One Code usa?',
            a: 'A Bodega One Code é construída sobre o Monaco, o mesmo componente de editor de código aberto usado pelo Visual Studio Code, e adiciona autocompletar por tabulação, integração com Git e 26 ferramentas integradas para operações de arquivo, comandos de shell e busca na web disponíveis para o agente.',
          },
          {
            q: 'O que é o ciclo de verificação em 5 etapas?',
            a: 'É um processo de controle de qualidade que a Bodega One Code descreve rodando após cada alteração feita pelo agente — cobrindo checagem de sintaxe, de tipos e testes — antes que a alteração seja marcada como concluída. Esta é a própria descrição do fabricante sobre sua Quality Enforcement Layer; a PromptQuorum não avaliou sua precisão de forma independente.',
          },
          {
            q: 'O que é o modo air-gap na Bodega One Code?',
            a: 'O modo air-gap é uma configuração que a Bodega One Code descreve como aplicação de 9 camadas de controle de rede para bloquear todas as conexões de saída, voltado para desenvolvedores que precisam que a IDE rode totalmente offline. A PromptQuorum não testou de forma independente o quão completamente as 9 camadas bloqueiam o tráfego de saída — verifique isso você mesmo para qualquer ambiente com um requisito genuíno de não saída de dados.',
          },
          {
            q: 'Como a Bodega One Code se compara ao Continue.dev, Cline ou Aider?',
            a: 'Continue.dev e Cline são extensões de código aberto que adicionam chat com IA, autocompletar ou um agente autônomo a uma instalação existente do VS Code (ou JetBrains). Aider é uma ferramenta de código aberto de programação em dupla com IA, baseada em terminal, sem editor integrado. A Bodega One Code é um aplicativo independente e separado que reúne o próprio editor com chat e um agente, e cuja Quality Enforcement Layer central e orquestração agêntica são proprietárias em vez de código aberto.',
          },
          {
            q: 'Posso usar a Bodega One Code totalmente offline?',
            a: 'Sim, se você a configurar para usar um provedor local (Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX ou Jan) e ativar o modo air-gap, que a Bodega One Code descreve como bloqueio de conexões de rede de saída por meio de 9 camadas de controle. Usar um provedor em nuvem (OpenAI, Anthropic, Groq, Together AI, OpenRouter) exige conexão com a internet independentemente dessa configuração.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'A ideia central da Bodega One Code — um único aplicativo local que reúne editor, chat com IA e um agente autônomo, deixando a escolha do provedor de modelo inteiramente nas mãos do desenvolvedor — preenche uma lacuna real entre IDEs de IA vinculadas a um único fornecedor e extensões minimalistas em que é preciso montar a própria configuração de provedor. A lista de provedores BYOLLM é ampla, cobrindo os principais runtimes locais (Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, Jan) e as principais APIs em nuvem (OpenAI, Anthropic, Groq, Together AI, OpenRouter) em um só lugar, e o modelo de preços — uso pessoal gratuito mais uma taxa única de US$ 39 para uma segunda máquina, sem assinatura — é direto. Os dois recursos que mais diferenciam o produto, o ciclo de verificação em 5 etapas e o modo air-gap de 9 camadas, são afirmações do fabricante, não itens avaliados de forma independente aqui — trate-os como afirmações a verificar contra os próprios requisitos de projeto e de rede, não como garantias. Desenvolvedores que querem uma IDE unificada e estão confortáveis com uma Quality Enforcement Layer proprietária devem experimentá-la durante o beta aberto gratuito atual; quem precisa de uma stack totalmente de código aberto, ou quer continuar trabalhando dentro do VS Code, é melhor atendido por Continue.dev, Cline ou Aider.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site oficial da Bodega One Code](https://bodegaone.ai) — visão geral do produto, lista de provedores BYOLLM, termos de preço e licença.',
          '[Bodega One Code (www)](https://www.bodegaone.ai) — site espelho do produto.',
          '[Releases da Bodega One Code no GitHub](https://github.com/BodegaoneAI/bodegaone-releases) — notas de release e histórico de builds.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Continue.dev vs. Cline vs. Aider](/pt/power-local-llm/continue-dev-vs-cline-vs-aider-local) — três ferramentas de codificação local de código aberto que se conectam a um editor existente em vez de substituí-lo.',
          '[Melhores modelos de codificação locais em 2026](/pt/power-local-llm/best-local-coding-models-2026) — a camada de modelos: quais modelos abertos usar com uma ferramenta BYOLLM como a Bodega One Code.',
          '[Agentes de IA locais com MCP em 2026](/pt/power-local-llm/local-ai-agents-with-mcp-2026) — para leitores que comparam a lista de ferramentas integradas da Bodega One Code a um ecossistema de ferramentas aberto baseado em MCP.',
          '[Substituir o GitHub Copilot por um LLM local](/pt/power-local-llm/replace-github-copilot-with-local-llm) — contexto mais amplo sobre mover a assistência de codificação com IA para modelos locais ou autogerenciados.',
          '[Hub Power Local LLM](/pt/power-local-llm) — biblioteca completa de guias.',
        ],
      },
    },
  },
  ja: {
    theme: 'Coding Assistants',
    heroImage: '/images/bodega-one-code-review-2026-hero-ja.webp',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    next_refresh_due: '2027-03-03',
    educationalLevel: 'Intermediate',
    audience: 'LLMプロバイダーを自分で選べるローカルファーストのAIコーディングIDEを検討している開発者',
    primaryTerm: 'Bodega One Code',
    title: 'Bodega One Codeレビュー（2026年）：BYOLLM対応のローカルファーストIDE',
    seoTitle: 'Bodega One Codeレビュー2026：BYOLLM IDE',
    intro:
      'Bodega One Codeは、コードエディタ、AIチャット、自律型コーディングエージェントを1つのアプリにまとめ、自分のマシン上で動作させるコーディングIDEです。中心となる考え方は「Bring Your Own LLM」（BYOLLM）：1つのモデルプロバイダーに固定されるのではなく、Ollama、LM Studio、llama.cpp、あるいはOpenAIやAnthropicなどのクラウドAPIに接続でき、Bodega One Codeによれば、アプリを再起動せずにプロバイダーを切り替えられるとされています。本レビューでは、Bodega One Code自身の製品ページに基づきIDEに何が含まれるか、プロバイダーとエージェントの仕組み、現在の価格とライセンス条件、そしてContinue.dev、Cline、Aiderといった他のローカル対応コーディングツールとの比較を扱います。',
    metaDescription:
      'Bodega One Codeレビュー：BYOLLMプロバイダー切り替え、Monacoエディタ、自律エージェントを備えたローカルファーストのコーディングIDE。価格、ライセンス、エアギャップモード、Continue.dev・Cline・Aiderとの比較。',
    twitterDescription:
      'Bodega One Codeレビュー2026：ローカルファーストのコーディングIDE、10以上のプロバイダーに対応するBYOLLM、Monacoエディタ、自律エージェント、エアギャップモード。価格・ライセンス・Continue.dev/Cline/Aiderとの比較。',
    readTime: '10分で読了',
    targetKeywords: [
      'bodega one code レビュー',
      'bodega one code ide',
      'byollm コーディング ide',
      'bodega one code 価格',
      'bodega one code vs cursor',
    ],
    leadAnswerBlock:
      '**Bodega One Codeは、コードエディタ、AIチャット、自律型コーディングエージェントを1つのローカルアプリでまとめて使いたく、かつどのLLMを使うかを1社に固定されず自分で選びたい場合に検討する価値があります。** このIDEはBring Your Own LLM（BYOLLM）を10種類を超えるプロバイダープリセットでサポートしています——ローカル推論向けにOllama、LM Studio、llama.cpp、vLLM、LocalAI、KoboldCpp、GPT4All、MLX、Jan、クラウドモデル向けにOpenAI、Anthropic、Groq、Together AI、OpenRouter——そしてBodega One Codeによれば、アプリを再起動せずにプロバイダーを切り替えられるとされています。現在はオープンベータ中で、商用利用を含め無料で利用できます。ベータ終了後は個人利用は1台まで無料のまま、39ドルの買い切りライセンスで2台目が追加されます（サブスクリプションなし）。',
    quickAnswerTop: {
      en: {
        question: 'Should I use Bodega One Code for local-first AI coding?',
        answer:
          'Use Bodega One Code if you want a single desktop IDE that runs an editor, AI chat, and an autonomous coding agent locally while letting you pick the LLM provider — local (Ollama, LM Studio, llama.cpp) or cloud (OpenAI, Anthropic, Groq). Weigh it against Continue.dev, Cline, or Aider if you already work inside VS Code and want an extension instead of a separate application, and note that the Quality Enforcement Layer and agentic orchestration are proprietary, not open source.',
        bullets: [
          'BYOLLM: 10+ provider presets, including Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, and Jan.',
          'Bodega One Code states providers can be switched without restarting the IDE.',
          'Monaco-based editor, tab autocomplete, Git integration, and 26 built-in tools for file operations, shell commands, and web search.',
          'Vendor-described 5-step verification loop (syntax, type checks, tests) runs after every agent change, and a 9-layer air-gap mode is offered for offline use — neither has been independently benchmarked by PromptQuorum.',
          'Free for personal use on one machine; a one-time $39 license covers a second machine (no subscription). Currently in open beta, free for everyone including commercial use during the beta.',
          'Licensing is proprietary: a Business Source License applies to some components after distribution, and the Quality Enforcement Layer plus agentic orchestration stay proprietary.',
        ],
        updatedDate: '2026-09-03',
      },
      ja: {
        question: 'ローカルファーストのAIコーディングにBodega One Codeを使うべきですか？',
        answer:
          'エディタ、AIチャット、自律型コーディングエージェントをローカルで動かす単一のデスクトップIDEが欲しく、かつLLMプロバイダーを自分で選びたい場合（ローカル：Ollama、LM Studio、llama.cpp、クラウド：OpenAI、Anthropic、Groq）はBodega One Codeを使ってください。すでにVS Code内で作業しており、独立アプリではなく拡張機能を求める場合はContinue.dev、Cline、Aiderと比較検討してください。また、Quality Enforcement Layerとエージェントオーケストレーションはオープンソースではなく独自仕様である点に注意してください。',
        bullets: [
          'BYOLLM：Ollama、LM Studio、OpenAI、Anthropic、Groq、Together AI、OpenRouter、vLLM、llama.cpp、LocalAI、KoboldCpp、GPT4All、MLX、Janを含む10以上のプロバイダープリセット。',
          'Bodega One Codeによれば、IDEを再起動せずにプロバイダーを切り替えられるとされています。',
          'Monacoベースのエディタ、タブ補完、Git連携、ファイル操作・シェルコマンド・Web検索のための26個の組み込みツール。',
          'ベンダーが説明する5段階の検証ループ（構文・型チェック・テスト）がエージェントの変更ごとに実行され、オフライン利用向けに9層のエアギャップモードが提供されるとされていますが、いずれもPromptQuorumが独自に検証したものではありません。',
          '1台までの個人利用は無料。39ドルの買い切りライセンスで2台目をカバー（サブスクリプションなし）。現在はオープンベータ中で、商用利用を含め全員が無料で利用可能。',
          'ライセンスは全体として独自仕様——配布後は一部コンポーネントにBusiness Source Licenseが適用され、Quality Enforcement Layerとエージェントオーケストレーションは独自仕様のまま。',
        ],
        updatedDate: '2026-09-03',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Bodega One Codeとは？', anchor: 'what-is-bodega-one-code' },
      { label: 'どのLLMプロバイダーに対応？', anchor: 'byollm-providers' },
      { label: 'エディタには何が含まれる？', anchor: 'editor-and-tooling' },
      { label: '検証ループとは？', anchor: 'quality-enforcement-loop' },
      { label: 'エアギャップモードの仕組み', anchor: 'air-gap-mode' },
      { label: '価格とライセンス', anchor: 'licensing-and-pricing' },
      { label: 'トレードオフ', anchor: 'tradeoffs' },
      { label: 'Bodega One Code vs. 代替ツール', anchor: 'vs-alternatives' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bodega One Codeはローカルファーストなコーディング用AI IDEで、Ollamaやllama.cppなどのローカルランタイムからOpenAIやAnthropicなどのクラウドAPIまで10以上のプロバイダープリセットを通じて自分のLLMを持ち込み、統合チャットと自律型コーディングエージェントを動かせます。完全オフライン利用向けのエアギャップモードもオプションで用意されています。',
          },
          {
            type: 'plain-terms',
            text: 'コードエディタ、AIチャットパネル、ファイル編集やコマンド実行ができるAIエージェントを1つのデスクトップアプリにまとめたもので、自分のマシンかクラウドか、どのAIモデルに作業させるかを自分で選べます。',
          },
        ],
        items: [
          'コードエディタ、AIチャット、自律型コーディングエージェントを1つのローカルアプリに統合。「Bring Your Own LLM」（BYOLLM）を中心に設計。',
          '10以上のプロバイダープリセット：Ollama、LM Studio、OpenAI、Anthropic、Groq、Together AI、OpenRouter、vLLM、llama.cpp、LocalAI、KoboldCpp、GPT4All、MLX、Jan。',
          'ベンダーによれば、アプリを再起動せずにプロバイダーを切り替え可能。',
          'Monacoベースのエディタ（VS Codeと同じオープンソースエディタコンポーネント）、タブ補完、Git連携、ファイル操作・シェルコマンド・Web検索をカバーする26個の組み込みツール。',
          'ベンダーが説明する5段階の検証ループがエージェントの変更ごとに実行される：構文チェック、型チェック、テストを経てから変更が完了とマークされる。',
          'Bodega One Codeによれば、エアギャップモードは9層の独立したネットワーク強制レイヤーで送信接続をブロックし、完全オフライン運用が必要なユースケース向けとされる。',
          '1台までの個人利用は無料。39ドルの買い切りPro/商用ライセンスで2台目をカバー（サブスクリプションなし）。現在はオープンベータ中で、商用利用を含め全員が無料。',
          '全体として独自ライセンス——配布後は一部コンポーネントにBusiness Source Licenseが適用され、Quality Enforcement Layerとエージェントオーケストレーションは独自仕様のまま。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、Bodega One Codeがbodegaone.aiおよびGitHubのリリースリポジトリ（github.com/BodegaoneAI/bodegaone-releases）で自ら公開している内容を記述したものです。PromptQuorumは検証ループ、エアギャップモード、プロバイダー切り替えの遅延を独自に検証しておらず、PromptQuorumとBodega One Codeの間にアフィリエイトや商業的な関係は存在しません。',
          },
        ],
      },
      whatIs: {
        id: 'what-is-bodega-one-code',
        title: 'Bodega One Codeとは？',
        content: [
          '**Bodega One Codeは、エディタ、AIチャットインターフェース、自律型コーディングエージェントをまとめたデスクトップ型コーディングIDEで、ベンダーではなく開発者自身がどのLLMに作業させるかを選ぶという考え方で設計されています。** Bodega One Codeはこのアプローチを「Bring Your Own LLM」（BYOLLM）と呼んでいます：アプリ自体がインターフェースとツールレイヤーであり、チャットに応答したりコーディングエージェントを動かしたりするモデルは、ユーザーが選ぶ完全ローカルモデルでも、ホスト型クラウドAPIでも構いません。',
          'これは1つのモデルファミリーに固定されるIDEの標準的な動作とは異なります。Bodega One Codeがインターフェースをモデルプロバイダーから分離しているため、開発者は最大限の能力を求めてOpenAIやAnthropicのようなクラウドモデルから始め、オフライン作業や機密性の高いコードを扱う際には、アプリを切り替えることなく同じワークフローをOllamaやllama.cppのようなローカルランタイムに移すことができます。',
          '製品はbodegaone.ai（www.bodegaone.aiでもアクセス可能）を通じて配布されており、リリースビルドはGitHub（github.com/BodegaoneAI/bodegaone-releases）で追跡されています。',
        ],
      },
      byollmProviders: {
        id: 'byollm-providers',
        itemHeadings: true,
        title: 'Bodega One Codeはどのプロバイダーをサポートしていますか？',
        content: [
          '**Bodega One Codeには、ローカル推論ランタイムとクラウドAPIの両方をカバーする10以上の組み込みプロバイダープリセットが付属しています。** プリセットを選ぶと、エディタ、チャット、エージェントがそのプロバイダーに向けられます。Bodega One Codeによれば、アクティブなプロバイダーはアプリを再起動せずに変更できるとされています。',
        ],
        columns: ['プロバイダー', 'カテゴリ', '概要'],
        rows: [
          { 'プロバイダー': 'Ollama', 'カテゴリ': 'ローカルランタイム', '概要': '人気のローカルモデルサーバー。個人マシンでオープンウェイトモデルを動かす際の一般的な既定選択肢。' },
          { 'プロバイダー': 'LM Studio', 'カテゴリ': 'ローカルランタイム', '概要': 'OpenAI互換のローカルAPI経由でローカルモデルをダウンロード・提供するデスクトップアプリ。' },
          { 'プロバイダー': 'llama.cpp', 'カテゴリ': 'ローカルランタイム', '概要': '多くのローカルモデルツールの基盤となるC/C++推論エンジン。サーバーとして直接実行可能。' },
          { 'プロバイダー': 'vLLM', 'カテゴリ': 'ローカルランタイム', '概要': 'ワークステーションやサーバー級の自己ホスト展開で使われることが多い高スループット推論サーバー。' },
          { 'プロバイダー': 'LocalAI', 'カテゴリ': 'ローカルランタイム', '概要': 'オープンモデルをローカルで動かすための、OpenAI API互換の自己ホスト型推論サーバー。' },
          { 'プロバイダー': 'KoboldCpp', 'カテゴリ': 'ローカルランタイム', '概要': 'llama.cppベースのローカル推論サーバーで、もともとローカルロールプレイや創作コミュニティで人気。' },
          { 'プロバイダー': 'GPT4All', 'カテゴリ': 'ローカルランタイム', '概要': 'クラウド接続なしでオープンモデルを動かすためのデスクトップアプリ兼ローカル推論エンジン。' },
          { 'プロバイダー': 'MLX', 'カテゴリ': 'ローカルランタイム', '概要': 'Apple Silicon上で効率的にローカルモデルを動かすためのAppleの配列計算フレームワーク。' },
          { 'プロバイダー': 'Jan', 'カテゴリ': 'ローカルランタイム', '概要': '内蔵または外部の推論エンジンでローカルモデルを動かす、ChatGPT風のオープンソースデスクトップアプリ。' },
          { 'プロバイダー': 'OpenAI', 'カテゴリ': 'クラウドAPI', '概要': 'OpenAIのGPTモデルファミリーへのホスト型APIアクセス。OpenAI APIキーとインターネット接続が必要。' },
          { 'プロバイダー': 'Anthropic', 'カテゴリ': 'クラウドAPI', '概要': 'AnthropicのClaudeモデルファミリーへのホスト型APIアクセス。Anthropic APIキーとインターネット接続が必要。' },
          { 'プロバイダー': 'Groq', 'カテゴリ': 'クラウドAPI', '概要': '独自のLPUハードウェアでオープンモデルを提供する低レイテンシで知られるホスト型推論API。' },
          { 'プロバイダー': 'Together AI', 'カテゴリ': 'クラウドAPI', '概要': '共有クラウドインフラ上でオープンモデルのカタログを提供するホスト型推論API。' },
          { 'プロバイダー': 'OpenRouter', 'カテゴリ': 'クラウドAPI', '概要': '1つのエンドポイントとキーを通じて多数の基盤モデルプロバイダーにリクエストを中継するホスト型APIルーター。' },
        ],
        note: 'プロバイダープリセットや既定値はBodega One Codeのリリースごとに変わる可能性があります。特定のプリセットがインストールしたバージョンで引き続き利用可能だと想定する前に、github.com/BodegaoneAI/bodegaone-releasesのリリースノートとbodegaone.aiの最新プロバイダーリストを確認してください。',
      },
      editorTooling: {
        id: 'editor-and-tooling',
        title: 'エディタとツールには何が含まれますか？',
        content: [
          '**Bodega One Codeの中核エディタは、Visual Studio Codeと同じオープンソースのエディタコンポーネントであるMonacoをベースにしています。** そのため、シンタックスハイライト、複数ファイル編集、キーボード主体のナビゲーションは、VS Codeやそのフォークに慣れている人には馴染みやすいはずです。',
        ],
        items: [
          '**タブ補完** — 入力中にトリガーされるインライン・モデル駆動のコード補完で、Copilot系ツールの補完機能と概念的に似ています。',
          '**Git連携** — バージョン管理操作は、別のターミナルやGitクライアントを必要とせず、IDE内で利用できます。',
          '**26個の組み込みツール** — エージェントは、ファイル操作（読み込み、書き込み、プロジェクト横断検索）、シェルコマンド実行、Web検索をカバーする固定ツールセットにアクセスでき、コーディングタスクの完了の一部として呼び出せます。',
          '**同一アプリ内のチャットとエージェント** — 質問用のチャットインターフェースと複数ステップの変更を行う自律型エージェントは、いずれも同じアプリ内で動作し、同じ設定済みLLMプロバイダーを使用できます。',
        ],
      },
      qualityEnforcement: {
        id: 'quality-enforcement-loop',
        title: '5段階の検証ループとは？',
        content: [
          '**Bodega One Codeは、エージェントが行った変更が完了とマークされる前に通過する5段階の検証ループを説明しており、構文チェック、型チェック、テストを含みます。** これはBodega One Code自身によるQuality Enforcement Layerの説明であり、PromptQuorumはその精度、誤検出率、タスク完了時間への影響を独自に測定していません。',
          'ベンダーの説明による実際的な意味合いは、エージェントが壊れた構文、型エラー、失敗するテストを自ら検知することを想定している、つまり後で開発者にすべての検証を委ねるわけではない、という点です。実際にそれが成り立つかどうかは、プロジェクトの言語、テストカバレッジ、設定に依存し、本レビューではいずれも直接検証していません。',
          'Quality Enforcement Layerとそれを取り巻くエージェントオーケストレーションはBodega One Codeの独自コンポーネントであり、コードベースの他の部分が配布後にBusiness Source Licenseの対象になったとしても、オープンソース公開の一部ではありません。',
        ],
      },
      airGap: {
        id: 'air-gap-mode',
        title: 'エアギャップモードはどう機能しますか？',
        content: [
          '**Bodega One Codeは、ベンダーによれば9層の独立したネットワーク強制レイヤーですべての送信接続をブロックするエアギャップモードを提供しており、IDEを完全にオフラインで運用する必要がある開発者向けとされています。** これは、コード、プロンプト、プロジェクトデータがローカルマシンから決して外に出てはならないシナリオ、たとえばクラウドフォールバックを無効にした完全ローカルプロバイダー（Ollama、llama.cpp、LocalAI）の使用を想定したものです。',
          'PromptQuorumは9層がどのように実装されているかを独自に検証しておらず、すべての送信経路をブロックする有効性もテストしていません。真にエアギャップが必要な要件（規制データ、機密環境、契約上のノーエグレス条項）を持つ開発者は、機能名だけに頼るのではなく、外部ファイアウォールやネットワークモニターなどで自らネットワーク挙動を検証すべきです。',
        ],
      },
      licensingPricing: {
        id: 'licensing-and-pricing',
        itemHeadings: true,
        title: 'Bodega One Codeの費用とライセンスは？',
        content: [
          '**Bodega One Codeは現在オープンベータ中で、ベンダーによればベータ期間中は商用利用を含め全員が無料で利用できるとされています。** 以下の価格は、ベンダーがベータ終了後に適用すると述べているものです。',
        ],
        columns: ['プラン', '価格', 'マシン数', '備考'],
        rows: [
          { 'プラン': '個人', '価格': '無料', 'マシン数': '1台', '備考': 'ベンダーが定める条件に基づく個人・非商用利用。' },
          { 'プラン': 'Pro / 商用', '価格': '39ドル（買い切り）', 'マシン数': '2台', '備考': 'ベンダーが定める価格に基づく、サブスクリプションなしの一回払い。' },
          { 'プラン': 'オープンベータ（現在）', '価格': '無料', 'マシン数': 'ベータ期間中は制限なし', '備考': 'オープンベータが有効な間は、商用利用を含め全員無料。' },
        ],
        note: 'ライセンスは全体として独自仕様です。配布後は一部コンポーネントにBusiness Source Licenseが適用され、Quality Enforcement Layerとエージェントオーケストレーション層はライセンス階層に関わらず独自仕様のままです。ベータの条件や価格は変わり得るため、購入前にbodegaone.aiで現在の価格・ベータ状況・ライセンス条件を直接確認してください。',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ：利点と制約',
        columns: ['利点', '実際の意味', '制約・注意点'],
        rows: [
          {
            '利点': 'プロバイダーの選択（BYOLLM）',
            '実際の意味': '1社のモデルベンダーに縛られない——プロジェクトや予算に応じてローカルとクラウドのプロバイダーを切り替えられる。',
            '制約・注意点': '出力品質は選んだモデルに完全に依存する。小さなローカルモデルはフロンティア級クラウドモデルの推論力には及ばない。',
          },
          {
            '利点': 'エディタ・チャット・エージェントが1つのアプリに',
            '実際の意味': '別のエディタと別のAIチャットツールの間でコンテキストを切り替える必要がない。',
            '制約・注意点': '独立アプリであり、VS Code拡張機能ではない——既存のVS Codeセットアップから移行するには、プラグイン追加ではなく新しいアプリの導入が必要。',
          },
          {
            '利点': 'エアギャップオプション付きのローカルファースト',
            '実際の意味': '完全にローカルモデルに対して動作し、送信ネットワークトラフィックがない構成にできる。',
            '制約・注意点': 'エアギャップの有効性と検証ループの精度はベンダーの主張であり、本レビューでは独自に検証していない。',
          },
          {
            '利点': 'サブスクリプションなしの価格設定',
            '実際の意味': 'Pro/商用プランでは39ドルの一回払いで2台目をカバー。1台での個人利用は無料。',
            '制約・注意点': '現在はオープンベータで全員無料アクセス——一般提供までにベータ後の価格や条件が変わる可能性がある。',
          },
          {
            '利点': '26個の組み込みエージェントツール',
            '実際の意味': 'ファイル操作、シェルコマンド、Web検索が、別途MCPサーバーを設定せずにエージェントで最初から利用できる。',
            '制約・注意点': '固定ツールセットは、サードパーティが新しいツールを追加できるオープンなプラグイン/MCPエコシステムほど拡張性が高くない。',
          },
          {
            '利点': '馴染みのある編集環境',
            '実際の意味': 'Monacoベースのエディタとタブ補完は、VS Codeユーザーにとってすぐに馴染むはず。',
            '制約・注意点': 'Quality Enforcement Layerとエージェントオーケストレーションは独自仕様——検証ループの内部動作を確認・変更することはできない。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Bodega One Code vs. Continue.dev、Cline、Aider',
        columns: ['ツール', 'リンク', '形態', 'モデル選択', 'ローカルファースト設計', '主な違い'],
        rows: [
          {
            'ツール': 'Bodega One Code',
            'リンク': '[bodegaone.ai](https://bodegaone.ai)',
            '形態': '独立したデスクトップIDE（エディタ+チャット+エージェントを1つのアプリに）',
            'モデル選択': 'BYOLLM：10以上のプリセット、ローカルとクラウド',
            'ローカルファースト設計': 'ローカルプロバイダーを中心に構築、エアギャップモードをオプションで提供',
            '主な違い': '既存エディタにAI層を追加するのではなく、1つのアプリがエディタ自体を置き換える。中核エージェントコンポーネントは独自仕様。',
          },
          {
            'ツール': 'Continue.dev',
            'リンク': '[docs.continue.dev](https://docs.continue.dev)',
            '形態': 'VS CodeおよびJetBrains IDE向けのオープンソース拡張機能',
            'モデル選択': 'ローカル（Ollama、LM Studio）またはクラウドプロバイダーに設定可能',
            'ローカルファースト設計': '設定したプロバイダーに完全に依存。専用のエアギャップ機能はない',
            '主な違い': '既に使っているエディタにAIチャットと自動補完を追加する形で、エディタ自体を置き換えない。',
          },
          {
            'ツール': 'Cline',
            'リンク': '[cline.bot](https://cline.bot)',
            '形態': 'VS Code向けの自律エージェント用オープンソース拡張機能',
            'モデル選択': 'API互換エンドポイント経由でローカルまたはクラウドプロバイダーに設定可能',
            'ローカルファースト設計': '設定したプロバイダーに依存',
            '主な違い': 'VS Code内で、ファイル編集やコマンドに人間の承認を挟むエージェント中心の拡張機能。',
          },
          {
            'ツール': 'Aider',
            'リンク': '[aider.chat](https://aider.chat)',
            '形態': 'ターミナルベースのオープンソースAIペアプログラミングツール',
            'モデル選択': 'API互換エンドポイント経由でローカルまたはクラウドプロバイダーに設定可能',
            'ローカルファースト設計': '設定したプロバイダーに依存。独自のGUIエディタはない',
            '主な違い': 'Gitコミットを中心としたコマンドラインワークフローで、組み込みのエディタUIはない。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Bodega One Codeが向いている人',
        items: [
          '**エディタ＋別のAI層ではなく、1つのアプリを求める開発者。** AI機能のためにVS Code拡張機能のスタックを維持することが負担になっているなら、エディタ・チャット・エージェントを一体化したIDEの方が導入・維持が簡単な場合がある。',
          '**同じプロジェクトでローカルとクラウドのモデルを切り替えたい開発者。** 10以上のプリセットに対応するBYOLLMサポートにより、クラウドモデルでプロトタイピングし、ツールを変えずにローカルモデルへ（あるいはその逆に）移行できる。',
          '**コストやプライバシーの理由でローカルファーストなツールを検討しているチーム。** Ollamaやllama.cppのようなローカルプロバイダーだけで完結させれば、コードやプロンプトがサードパーティのサーバーに渡らず、より厳格なノーエグレス要件にはオプションのエアギャップモードで対応できる。',
          '**サブスクリプションより一回払いを好むユーザー。** 継続課金ではなく、39ドルの買い切りPro/商用ライセンスは、AIツールの継続的なサブスクリプションを避けたい開発者に合う。',
          '**ベータ版ソフトウェアの評価に抵抗がないアーリーアダプター。** 現在のオープンベータ期間中は、長期利用にコミットする前に商用利用を含め無料でIDEを試せる。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Bodega One Codeが向いていない人',
        items: [
          '**VS Code自体の中に留まりたい開発者。** Bodega One CodeはVS Code拡張機能ではなく独立アプリです——既存のVS CodeセットアップにAI機能を追加したいなら、Continue.devやClineの方が適しています。',
          '**エンドツーエンドで完全にオープンソースのツールを必要とするチーム。** Quality Enforcement Layerとエージェントオーケストレーションは独自仕様であり、配布後は一部コンポーネントにBusiness Source Licenseが適用されます——すべての層をオープンソースにする必要があるチーム（Aider、Continue.dev、Clineのように）は、まずライセンス条件を確認すべきです。',
          '**検証ループやエアギャップの主張を信頼する前に独自に監査する必要がある人。** 本レビューは、Bodega One Codeが自社の5段階検証ループと9層のエアギャップモードについて公開している内容を報告するもので、いずれもPromptQuorumによるベンチマークやセキュリティテストは行われていません。規制対象や高セキュリティ環境では独自の検証を行うべきです。',
          '**ターミナルのみのワークフローが必要なユーザー。** Bodega One Codeはエディタを中心に構築されたGUIアプリです——コマンドライン中心のペアプログラミングツールを好む開発者はAiderを検討すべきです。',
          '**現在の無料ベータ価格を長期的な保証として計画する人。** ベータ後の価格やライセンス条件はベンダーが述べる意図であり、契約上の保証ではありません——それを前提に予算を組む前にbodegaone.aiで現在の条件を確認してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Bodega One Codeとは何ですか？',
            a: 'Bodega One Codeは、コードエディタ、AIチャットパネル、自律型コーディングエージェントを1つのローカルアプリにまとめたデスクトップ型コーディングIDEです。特徴的な機能はBYOLLM（Bring Your Own LLM）で、開発者がどのモデルプロバイダー（ローカルまたはクラウド）でチャットとエージェントを動かすかを選べます。',
          },
          {
            q: 'BYOLLMとは何を意味しますか？',
            a: 'BYOLLMは「Bring Your Own LLM」（自分のLLMを持ち込む）の略です。1つのモデルベンダーに固定されるIDEではなく、Bodega One Codeは組み込みのプロバイダープリセットを通じて、Ollamaやllama.cppのようなローカルランタイム、あるいはOpenAIやAnthropicのようなクラウドAPIなど、好きなプロバイダーに接続できます。',
          },
          {
            q: 'Bodega One Codeはどのようなプロバイダーに対応していますか？',
            a: 'Bodega One Codeは10以上のプロバイダープリセットを備えています：ローカル推論向けにOllama、LM Studio、llama.cpp、vLLM、LocalAI、KoboldCpp、GPT4All、MLX、Jan、クラウドAPI向けにOpenAI、Anthropic、Groq、Together AI、OpenRouter。Bodega One Codeによれば、アプリを再起動せずにこれらを切り替えられるとされています。',
          },
          {
            q: 'Bodega One Codeは無料ですか？',
            a: 'Bodega One Codeは現在オープンベータ中で、ベンダーによれば商用利用を含め全員無料で利用できます。ベータ終了後の条件としてベンダーが述べているのは、1台での個人利用は無料のまま、2台をカバーするPro/商用ライセンスは39ドルの一回払い（サブスクリプションなし）です。',
          },
          {
            q: 'Bodega One Codeはオープンソースですか？',
            a: '完全にはそうではありません。配布後は一部コンポーネントにBusiness Source Licenseが適用されますが、Quality Enforcement Layerとエージェントオーケストレーション層は独自仕様であり、今後もそうであり続けます。完全にオープンソースなローカルコーディングツールが必要な開発者は、Continue.dev、Cline、Aiderのような代替を検討すべきです。',
          },
          {
            q: 'Bodega One Codeはどのエディタを使っていますか？',
            a: 'Bodega One Codeは、Visual Studio Codeが使用しているのと同じオープンソースのエディタコンポーネントであるMonacoをベースにしており、タブ補完、Git連携、そしてエージェントが利用できるファイル操作・シェルコマンド・Web検索用の26個の組み込みツールを備えています。',
          },
          {
            q: '5段階の検証ループとは何ですか？',
            a: 'Bodega One Codeがエージェントによる変更ごとに実行すると説明している品質チェックのプロセスで、構文チェック、型チェック、テストをカバーし、変更が完了とマークされる前に行われます。これはベンダー自身によるQuality Enforcement Layerの説明であり、PromptQuorumはその精度を独自に検証していません。',
          },
          {
            q: 'Bodega One Codeのエアギャップモードとは何ですか？',
            a: 'エアギャップモードは、Bodega One Codeが9層のネットワーク制御ですべての送信接続をブロックすると説明している設定で、IDEを完全にオフラインで運用する必要がある開発者向けです。PromptQuorumは9層が送信トラフィックをどれだけ完全にブロックするかを独自に検証していません——真にノーエグレス要件がある環境では、自分自身で検証してください。',
          },
          {
            q: 'Bodega One CodeはContinue.dev、Cline、Aiderとどう比較されますか？',
            a: 'Continue.devとClineは、既存のVS Code（またはJetBrains）インストールにAIチャット、自動補完、あるいは自律型エージェントを追加するオープンソース拡張機能です。Aiderは組み込みエディタを持たない、ターミナルベースのオープンソースAIペアプログラミングツールです。Bodega One Codeは、エディタ自体をチャットとエージェントとともにまとめた独立したアプリであり、中核となるQuality Enforcement Layerとエージェントオーケストレーションはオープンソースではなく独自仕様です。',
          },
          {
            q: 'Bodega One Codeを完全にオフラインで使えますか？',
            a: 'はい。ローカルプロバイダー（Ollama、LM Studio、llama.cpp、vLLM、LocalAI、KoboldCpp、GPT4All、MLX、Jan）に設定し、Bodega One Codeが9層の強制レイヤーで送信ネットワーク接続をブロックすると説明しているエアギャップモードを有効にすれば可能です。クラウドプロバイダー（OpenAI、Anthropic、Groq、Together AI、OpenRouter）を使う場合は、この設定に関わらずインターネット接続が必要です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Bodega One Codeの中核アイデア——エディタ、AIチャット、自律型エージェントをまとめた1つのローカルアプリで、モデルプロバイダーの選択を完全に開発者に委ねる——は、単一ベンダーに固定されたAI IDEと、自分でプロバイダー設定を組み立てる必要がある簡素な拡張機能との間にある実際のギャップを埋めています。BYOLLMのプロバイダーリストは幅広く、主要なローカルランタイム（Ollama、LM Studio、llama.cpp、vLLM、LocalAI、KoboldCpp、GPT4All、MLX、Jan）と主要なクラウドAPI（OpenAI、Anthropic、Groq、Together AI、OpenRouter）を1か所でカバーしており、価格モデル——無料の個人利用に加え、2台目に39ドルの一回払い、サブスクリプションなし——も分かりやすいものです。この製品を最も差別化する2つの機能、5段階の検証ループと9層のエアギャップモードは、ここで独自にベンチマークされたものではなくベンダーによる説明であるため、保証としてではなく、自分自身のプロジェクトやネットワーク要件に照らして検証すべき主張として扱ってください。一体化したIDEを求め、独自仕様のQuality Enforcement Layerを受け入れられる開発者は、現在の無料オープンベータで試してみる価値があります。完全にオープンソースなスタックが必要な人、あるいはVS Code自体の中で作業を続けたい人には、Continue.dev、Cline、Aiderの方が適しています。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Bodega One Code公式サイト](https://bodegaone.ai) — 製品概要、BYOLLMプロバイダーリスト、価格・ライセンス条件。',
          '[Bodega One Code（www）](https://www.bodegaone.ai) — ミラー製品サイト。',
          '[GitHub上のBodega One Codeリリース](https://github.com/BodegaoneAI/bodegaone-releases) — リリースノートとビルド履歴。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Continue.dev vs. Cline vs. Aider](/ja/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 既存エディタを置き換えるのではなく拡張する、3つのオープンソースのローカルコーディングツール。',
          '[2026年版：最良のローカルコーディングモデル](/ja/power-local-llm/best-local-coding-models-2026) — モデル層：Bodega One CodeのようなBYOLLMツールに接続すべきオープンウェイトモデル。',
          '[2026年版：MCPを使ったローカルAIエージェント](/ja/power-local-llm/local-ai-agents-with-mcp-2026) — Bodega One Codeの組み込みツールリストをオープンなMCPベースのツールエコシステムと比較したい読者向け。',
          '[GitHub Copilotをローカルllmで置き換える](/ja/power-local-llm/replace-github-copilot-with-local-llm) — AIコーディング支援をローカルまたは自己ホスト型モデルに移すより広い文脈。',
          '[Power Local LLMハブ](/ja/power-local-llm) — ガイドライブラリ全体。',
        ],
      },
    },
  },
  zh: {
    theme: 'Coding Assistants',
    heroImage: '/images/bodega-one-code-review-2026-hero-zh.webp',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    next_refresh_due: '2027-03-03',
    educationalLevel: 'Intermediate',
    audience: '正在评估本地优先AI编程IDE、希望自行选择LLM提供商而非被单一厂商锁定的开发者',
    primaryTerm: 'Bodega One Code',
    title: 'Bodega One Code评测（2026）：本地优先的BYOLLM编程IDE',
    seoTitle: 'Bodega One Code评测2026：BYOLLM编程IDE',
    intro:
      'Bodega One Code是一款编程IDE，将代码编辑器、AI聊天面板和自主编程代理整合到一个在你自己电脑上运行的应用中。其核心理念是"自带LLM"（BYOLLM）：Bodega One Code不绑定单一模型提供商，而是可以连接Ollama、LM Studio、llama.cpp，或OpenAI、Anthropic等云端API，据厂商介绍，无需重启应用即可切换提供商。本评测基于Bodega One Code官方产品页面，介绍该IDE包含哪些内容、提供商与代理系统如何运作、当前的价格与许可条款，以及它与Continue.dev、Cline、Aider等其他支持本地部署的编程工具相比如何。',
    metaDescription:
      'Bodega One Code评测：具备BYOLLM提供商切换、Monaco编辑器和自主代理的本地优先编程IDE。价格、许可、气隙模式，以及与Continue.dev、Cline、Aider的对比。',
    twitterDescription:
      'Bodega One Code 2026评测：本地优先编程IDE，BYOLLM支持10多个提供商，Monaco编辑器，自主代理，气隙模式。价格、许可及与Continue.dev/Cline/Aider的对比。',
    readTime: '10分钟阅读',
    targetKeywords: [
      'bodega one code 评测',
      'bodega one code ide',
      'byollm 编程 ide',
      'bodega one code 价格',
      'bodega one code vs cursor',
    ],
    leadAnswerBlock:
      '**如果你想要一个整合了代码编辑器、AI聊天和自主编程代理的本地应用，并且希望自行选择由哪个LLM驱动它而非被单一厂商锁定，那么Bodega One Code值得评估。** 该IDE通过十余种提供商预设支持"自带LLM"（BYOLLM）——用于本地推理的Ollama、LM Studio、llama.cpp、vLLM、LocalAI、KoboldCpp、GPT4All、MLX和Jan，以及用于云端模型的OpenAI、Anthropic、Groq、Together AI和OpenRouter——据Bodega One Code介绍，切换提供商无需重启应用。该产品目前处于公开测试阶段，可免费使用，包括商业用途；测试期结束后，个人在一台设备上使用仍将免费，一次性支付39美元即可解锁第二台设备，无需订阅。',
    quickAnswerTop: {
      en: {
        question: 'Should I use Bodega One Code for local-first AI coding?',
        answer:
          'Use Bodega One Code if you want a single desktop IDE that runs an editor, AI chat, and an autonomous coding agent locally while letting you pick the LLM provider — local (Ollama, LM Studio, llama.cpp) or cloud (OpenAI, Anthropic, Groq). Weigh it against Continue.dev, Cline, or Aider if you already work inside VS Code and want an extension instead of a separate application, and note that the Quality Enforcement Layer and agentic orchestration are proprietary, not open source.',
        bullets: [
          'BYOLLM: 10+ provider presets, including Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, and Jan.',
          'Bodega One Code states providers can be switched without restarting the IDE.',
          'Monaco-based editor, tab autocomplete, Git integration, and 26 built-in tools for file operations, shell commands, and web search.',
          'Vendor-described 5-step verification loop (syntax, type checks, tests) runs after every agent change, and a 9-layer air-gap mode is offered for offline use — neither has been independently benchmarked by PromptQuorum.',
          'Free for personal use on one machine; a one-time $39 license covers a second machine (no subscription). Currently in open beta, free for everyone including commercial use during the beta.',
          'Licensing is proprietary: a Business Source License applies to some components after distribution, and the Quality Enforcement Layer plus agentic orchestration stay proprietary.',
        ],
        updatedDate: '2026-09-03',
      },
      zh: {
        question: '本地优先的AI编程应该使用Bodega One Code吗？',
        answer:
          '如果你想要一个单一的桌面IDE，在本地运行编辑器、AI聊天和自主编程代理，同时可以自行选择LLM提供商——本地（Ollama、LM Studio、llama.cpp）或云端（OpenAI、Anthropic、Groq）——那就使用Bodega One Code。如果你已经在VS Code中工作，并希望使用扩展而非独立应用，可与Continue.dev、Cline或Aider权衡比较，同时请注意Quality Enforcement Layer和代理编排是专有的，并非开源。',
        bullets: [
          'BYOLLM：10多种提供商预设，包括Ollama、LM Studio、OpenAI、Anthropic、Groq、Together AI、OpenRouter、vLLM、llama.cpp、LocalAI、KoboldCpp、GPT4All、MLX和Jan。',
          'Bodega One Code表示，提供商可以在不重启IDE的情况下切换。',
          '基于Monaco的编辑器、Tab键自动补全、Git集成，以及26个用于文件操作、shell命令和网络搜索的内置工具。',
          '厂商描述的5步验证循环（语法、类型检查、测试）在代理每次修改后运行，并提供9层气隙模式用于离线使用——这两项均未经PromptQuorum独立评测。',
          '在一台设备上个人使用免费；一次性支付39美元的许可涵盖第二台设备（无需订阅）。目前处于公开测试阶段，测试期间所有人（包括商业用途）均可免费使用。',
          '许可整体为专有：分发后部分组件适用Business Source License，Quality Enforcement Layer及代理编排保持专有。',
        ],
        updatedDate: '2026-09-03',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Bodega One Code是什么？', anchor: 'what-is-bodega-one-code' },
      { label: '支持哪些LLM提供商？', anchor: 'byollm-providers' },
      { label: '编辑器包含哪些功能？', anchor: 'editor-and-tooling' },
      { label: '验证循环是什么？', anchor: 'quality-enforcement-loop' },
      { label: '气隙模式如何运作？', anchor: 'air-gap-mode' },
      { label: '价格与许可', anchor: 'licensing-and-pricing' },
      { label: '优劣权衡', anchor: 'tradeoffs' },
      { label: 'Bodega One Code 对比其他方案', anchor: 'vs-alternatives' },
      { label: '适合谁使用', anchor: 'who-should-use' },
      { label: '不适合谁使用', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bodega One Code是一款本地优先的AI编程IDE，让开发者可以通过10多种提供商预设——涵盖Ollama、llama.cpp等本地运行时以及OpenAI、Anthropic等云端API——自带LLM，为内置聊天和自主编程代理提供动力，并提供可选的气隙模式以实现完全离线使用。',
          },
          {
            type: 'plain-terms',
            text: '它是一个代码编辑器、一个AI聊天面板，以及一个可以编辑文件、执行命令的AI代理，全部集成在一个桌面应用中，你可以自行选择由哪个AI模型（在你自己的电脑上还是在云端）来完成工作。',
          },
        ],
        items: [
          '将代码编辑器、AI聊天和自主编程代理整合到一个本地应用中；围绕"自带LLM"（BYOLLM）构建。',
          '10多种提供商预设：Ollama、LM Studio、OpenAI、Anthropic、Groq、Together AI、OpenRouter、vLLM、llama.cpp、LocalAI、KoboldCpp、GPT4All、MLX和Jan。',
          '据厂商介绍，提供商可在不重启应用的情况下切换。',
          '基于Monaco的编辑器（与VS Code相同的开源编辑器组件）、Tab键自动补全、Git集成，以及涵盖文件操作、shell命令和网络搜索的26个内置工具。',
          '厂商描述的5步验证循环在代理每次修改后运行：语法检查、类型检查和测试，之后才将修改标记为完成。',
          '据Bodega One Code介绍，气隙模式使用9层独立的网络强制执行层来阻止所有出站连接，适用于需要完全离线运行的场景。',
          '在一台设备上个人使用免费；一次性支付39美元的Pro/商用许可涵盖第二台设备，无需订阅。目前处于公开测试阶段，所有人（包括商业用途）均可免费使用。',
          '整体许可为专有——分发后部分组件适用Business Source License，Quality Enforcement Layer及代理编排保持专有。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测描述的是Bodega One Code在bodegaone.ai及其GitHub发行版仓库（github.com/BodegaoneAI/bodegaone-releases）上自行公布的内容。PromptQuorum并未独立评测其验证循环、气隙模式或切换提供商的延迟，PromptQuorum与Bodega One Code之间不存在任何联盟营销或商业关系。',
          },
        ],
      },
      whatIs: {
        id: 'what-is-bodega-one-code',
        title: 'Bodega One Code是什么？',
        content: [
          '**Bodega One Code是一款桌面编程IDE，集成了编辑器、AI聊天界面和自主编程代理，其设计理念是由开发者——而非厂商——决定使用哪个LLM来完成工作。** Bodega One Code将这种方式称为"自带LLM"（BYOLLM）：应用本身构成界面和工具层，而回答聊天问题或驱动编程代理的模型，则可以是完全本地的模型，也可以是用户自行选择的托管云端API。',
          '这与许多绑定单一模型系列的IDE的默认方式不同。由于Bodega One Code将界面与模型提供商分离，开发者可以先使用OpenAI或Anthropic等云端模型以获得最强能力，之后在离线工作或处理敏感代码时，将同一工作流程迁移到Ollama或llama.cpp等本地运行时，而无需切换应用程序。',
          '该产品通过bodegaone.ai分发（也可通过www.bodegaone.ai访问），发行版本在GitHub上追踪：github.com/BodegaoneAI/bodegaone-releases。',
        ],
      },
      byollmProviders: {
        id: 'byollm-providers',
        itemHeadings: true,
        title: 'Bodega One Code支持哪些LLM提供商？',
        content: [
          '**Bodega One Code内置了十余种提供商预设，涵盖本地推理运行时和云端API。** 选择某个预设会将编辑器、聊天和代理都指向该提供商；据Bodega One Code介绍，活动提供商可以在不重启应用的情况下更改。',
        ],
        columns: ['提供商', '类别', '简介'],
        rows: [
          { '提供商': 'Ollama', '类别': '本地运行时', '简介': '流行的本地模型服务器；在个人电脑上运行开放权重模型的常见默认选择。' },
          { '提供商': 'LM Studio', '类别': '本地运行时', '简介': '通过兼容OpenAI的本地API下载和提供本地模型的桌面应用。' },
          { '提供商': 'llama.cpp', '类别': '本地运行时', '简介': '支撑许多本地模型工具的C/C++推理引擎；可直接作为服务器运行。' },
          { '提供商': 'vLLM', '类别': '本地运行时', '简介': '高吞吐量推理服务器，通常用于工作站或服务器级别的自托管部署。' },
          { '提供商': 'LocalAI', '类别': '本地运行时', '简介': '兼容OpenAI API的自托管推理服务器，用于本地运行开放模型。' },
          { '提供商': 'KoboldCpp', '类别': '本地运行时', '简介': '基于llama.cpp的本地推理服务器，最初在本地角色扮演与创意写作社区中流行。' },
          { '提供商': 'GPT4All', '类别': '本地运行时', '简介': '无需云连接即可运行开放权重模型的桌面应用及本地推理引擎。' },
          { '提供商': 'MLX', '类别': '本地运行时', '简介': 'Apple的数组计算框架，用于在Apple Silicon上高效运行本地模型。' },
          { '提供商': 'Jan', '类别': '本地运行时', '简介': '类ChatGPT风格的开源桌面应用，通过内置或外部推理引擎运行本地模型。' },
          { '提供商': 'OpenAI', '类别': '云端API', '简介': '对OpenAI GPT模型系列的托管API访问；需要OpenAI API密钥和互联网连接。' },
          { '提供商': 'Anthropic', '类别': '云端API', '简介': '对Anthropic Claude模型系列的托管API访问；需要Anthropic API密钥和互联网连接。' },
          { '提供商': 'Groq', '类别': '云端API', '简介': '以在自有LPU硬件上提供开放模型的低延迟著称的托管推理API。' },
          { '提供商': 'Together AI', '类别': '云端API', '简介': '在共享云基础设施上提供开放模型目录的托管推理API。' },
          { '提供商': 'OpenRouter', '类别': '云端API', '简介': '通过单一端点和密钥将请求转发给众多底层模型提供商的托管API路由器。' },
        ],
        note: '提供商预设和默认设置可能会在Bodega One Code不同版本之间发生变化。在假设某个预设在你安装的版本中仍然可用之前，请查看github.com/BodegaoneAI/bodegaone-releases上的发行说明及bodegaone.ai上的当前提供商列表。',
      },
      editorTooling: {
        id: 'editor-and-tooling',
        title: '编辑器和工具包含哪些内容？',
        content: [
          '**Bodega One Code的核心编辑器基于Monaco构建，这是与Visual Studio Code相同的开源编辑器组件**，因此语法高亮、多文件编辑和键盘驱动的导航，对于来自VS Code或其分支的用户来说应该都很熟悉。',
        ],
        items: [
          '**Tab键自动补全** — 在输入时触发的内联、模型驱动的代码补全，概念上类似于Copilot类工具的补全功能。',
          '**Git集成** — 版本控制操作可直接在IDE内完成，无需单独的终端或Git客户端。',
          '**26个内置工具** — 代理可以访问一套固定的工具集，涵盖文件操作（读取、写入、跨项目搜索）、shell命令执行和网络搜索，可在完成编程任务时调用这些工具。',
          '**聊天与代理位于同一应用中** — 用于提问的聊天界面和用于执行多步骤修改的自主代理都在同一应用内运行，并可使用同一个已配置的LLM提供商。',
        ],
      },
      qualityEnforcement: {
        id: 'quality-enforcement-loop',
        title: '5步验证循环是什么？',
        content: [
          '**Bodega One Code描述了一个5步验证循环，代理所做的每一次修改在被标记为完成之前都会经过这个循环，涵盖语法检查、类型检查和测试。** 这是厂商对其Quality Enforcement Layer的自述；PromptQuorum并未独立测量其准确率、误报率或对任务完成时间的影响。',
          '按照厂商的描述，其实际含义是代理应能自行发现损坏的语法、类型错误和失败的测试，而不是将全部验证工作留给事后的开发者。这在实践中是否成立，取决于项目所用的语言、测试覆盖率和配置——本评测并未对此进行直接测试。',
          'Quality Enforcement Layer及围绕它的代理编排是Bodega One Code的专有组件，并非任何开源发行版的一部分，即便代码库其他部分在分发后适用Business Source License。',
        ],
      },
      airGap: {
        id: 'air-gap-mode',
        title: '气隙模式如何运作？',
        content: [
          '**Bodega One Code提供气隙模式，据厂商介绍，该模式应用9层独立的网络强制执行来阻止所有出站连接，适用于需要IDE完全离线运行的开发者。** 该功能针对代码、提示词或项目数据绝不能离开本地设备的场景——例如在使用完全本地的提供商（Ollama、llama.cpp、LocalAI）且未启用云端回退时。',
          'PromptQuorum并未独立验证这9层的具体实现方式，也未测试其阻止每条出站路径的有效性。对于确实存在气隙需求（受监管数据、涉密环境、合同规定的零外泄条款）的开发者，应自行验证网络行为——例如借助外部防火墙或网络监控工具——而不应仅凭功能名称来判断。',
        ],
      },
      licensingPricing: {
        id: 'licensing-and-pricing',
        itemHeadings: true,
        title: 'Bodega One Code的费用和许可条款是什么？',
        content: [
          '**Bodega One Code目前处于公开测试阶段，厂商表示测试期间该应用对所有人免费，包括商业用途。** 以下价格是厂商表示测试结束后将适用的价格。',
        ],
        columns: ['方案', '价格', '设备数量', '备注'],
        rows: [
          { '方案': '个人版', '价格': '免费', '设备数量': '1台设备', '备注': '根据厂商所述条款，供个人非商业用途使用。' },
          { '方案': 'Pro / 商用版', '价格': '一次性39美元', '设备数量': '2台设备', '备注': '根据厂商所述价格，一次性付费，无需订阅。' },
          { '方案': '公开测试（当前）', '价格': '免费', '设备数量': '测试期间无限制', '备注': '在公开测试有效期内，所有人（包括商业用途）均可免费使用。' },
        ],
        note: '整体许可为专有。分发后代码库的部分组件适用Business Source License，无论许可层级如何，Quality Enforcement Layer及代理编排层始终保持专有。由于测试条款和价格可能变化，购买前请直接在bodegaone.ai确认当前价格、测试状态和许可条款。',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优劣权衡：优点与局限',
        columns: ['优点', '实际意味着什么', '局限/注意事项'],
        rows: [
          {
            '优点': '提供商选择（BYOLLM）',
            '实际意味着什么': '不被单一模型厂商锁定——可根据项目或预算需要在本地和云端提供商之间切换。',
            '局限/注意事项': '输出质量仍完全取决于所选模型；小型本地模型的推理能力无法与前沿云端模型相提并论。',
          },
          {
            '优点': '编辑器、聊天和代理集于一体',
            '实际意味着什么': '无需在独立的编辑器和独立的AI聊天工具之间切换上下文。',
            '局限/注意事项': '这是一个独立应用，而非VS Code扩展——从现有的VS Code配置迁移意味着要采用一个新应用，而不是添加插件。',
          },
          {
            '优点': '本地优先，并可选气隙模式',
            '实际意味着什么': '可以配置为完全针对本地模型运行，无任何出站网络流量。',
            '局限/注意事项': '气隙模式的有效性和验证循环的准确性均为厂商说法，本评测未对其进行独立测试。',
          },
          {
            '优点': '无订阅定价',
            '实际意味着什么': 'Pro/商用方案下，一次性支付39美元即可覆盖第二台设备；一台设备上的个人使用免费。',
            '局限/注意事项': '目前处于公开测试阶段，所有人均可免费访问——正式发布前，测试后的价格和条款可能会有变化。',
          },
          {
            '优点': '26个内置代理工具',
            '实际意味着什么': '文件操作、shell命令和网络搜索开箱即用地提供给代理，无需单独配置MCP服务器。',
            '局限/注意事项': '固定的工具集不如开放的插件/MCP生态系统可扩展，后者允许第三方添加新工具。',
          },
          {
            '优点': '熟悉的编辑界面',
            '实际意味着什么': '基于Monaco的编辑器和Tab键自动补全，应该会让VS Code用户立刻感到熟悉。',
            '局限/注意事项': 'Quality Enforcement Layer和代理编排是专有的——无法检查或修改验证循环内部的工作方式。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Bodega One Code 对比 Continue.dev、Cline 和 Aider',
        columns: ['工具', '链接', '形态', '模型选择', '本地优先设计', '关键差异'],
        rows: [
          {
            '工具': 'Bodega One Code',
            '链接': '[bodegaone.ai](https://bodegaone.ai)',
            '形态': '独立桌面IDE（编辑器+聊天+代理集于一个应用）',
            '模型选择': 'BYOLLM：10多种预设，本地与云端',
            '本地优先设计': '围绕本地提供商构建，并提供可选气隙模式',
            '关键差异': '一个应用直接取代编辑器本身，而非只在现有编辑器上添加一层AI；核心代理组件为专有。',
          },
          {
            '工具': 'Continue.dev',
            '链接': '[docs.continue.dev](https://docs.continue.dev)',
            '形态': '面向VS Code和JetBrains IDE的开源扩展',
            '模型选择': '可配置为本地（Ollama、LM Studio）或云端提供商',
            '本地优先设计': '完全取决于所配置的提供商；没有专门的气隙功能',
            '关键差异': '为已在使用的编辑器添加AI聊天和自动补全，而不是取代该编辑器。',
          },
          {
            '工具': 'Cline',
            '链接': '[cline.bot](https://cline.bot)',
            '形态': '面向VS Code内自主代理的开源扩展',
            '模型选择': '可通过兼容API的端点配置为本地或云端提供商',
            '本地优先设计': '取决于所配置的提供商',
            '关键差异': '在VS Code内，以代理为中心的扩展，文件修改和命令需人工审批。',
          },
          {
            '工具': 'Aider',
            '链接': '[aider.chat](https://aider.chat)',
            '形态': '基于终端的开源AI结对编程工具',
            '模型选择': '可通过兼容API的端点配置为本地或云端提供商',
            '本地优先设计': '取决于所配置的提供商；没有自带的图形化编辑器',
            '关键差异': '围绕Git提交构建的命令行工作流，没有内置的编辑器界面。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Bodega One Code适合谁使用',
        items: [
          '**希望使用一个应用而非"编辑器+独立AI层"的开发者。** 如果维护一堆用于AI功能的VS Code扩展让人感到繁琐，一个集编辑器、聊天和代理于一体的IDE可能更容易配置和维护。',
          '**希望在同一个项目中在本地与云端模型之间切换的开发者。** 通过10多种预设支持BYOLLM，可以先用云端模型进行原型开发，再切换到本地模型（或反过来），无需更换工具。',
          '**出于成本或隐私原因评估本地优先工具的团队。** 完全使用Ollama或llama.cpp等本地提供商可将代码和提示词留在第三方服务器之外，可选的气隙模式还能满足更严格的零外泄要求。',
          '**倾向一次性付费而非订阅的用户。** 厂商所述的一次性39美元Pro/商用许可，而非经常性费用，可能更适合想避免持续订阅AI工具的开发者。',
          '**乐于评估测试版软件的早期采用者。** 当前的公开测试窗口提供免费访问（包括商业用途），可在长期投入之前试用该IDE。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Bodega One Code不适合谁使用',
        items: [
          '**希望留在VS Code本身内工作的开发者。** Bodega One Code是一个独立应用，而非VS Code扩展——如果你需要在现有VS Code配置中添加AI功能，Continue.dev或Cline更适合。',
          '**需要端到端完全开源工具的团队。** Quality Enforcement Layer和代理编排是专有的，分发后部分组件还适用Business Source License——需要每一层都开源的团队（如使用Aider、Continue.dev或Cline那样）应先审查许可条款。',
          '**在信赖之前需要对验证循环或气隙模式的说法进行独立审计的任何人。** 本评测报告的是Bodega One Code就其5步验证循环和9层气隙模式所公布的内容；这两项均未经PromptQuorum进行基准测试或安全测试。受监管或高安全性环境应自行验证。',
          '**需要纯终端工作流的用户。** Bodega One Code是围绕编辑器构建的图形化应用；偏好以命令行为中心的结对编程工具的开发者应考虑Aider。',
          '**将当前免费测试价格作为长期保证来规划的任何人。** 测试结束后的价格和许可条款是厂商声明的意向，而非合同保证——在据此制定预算之前，请在bodegaone.ai确认当前条款。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Bodega One Code是什么？',
            a: 'Bodega One Code是一款桌面编程IDE，将代码编辑器、AI聊天面板和自主编程代理整合到一个本地应用中。其显著特点是BYOLLM（自带LLM）：开发者可以选择由哪个模型提供商——本地或云端——驱动聊天和代理。',
          },
          {
            q: 'BYOLLM是什么意思？',
            a: 'BYOLLM即"Bring Your Own LLM"（自带LLM）。Bodega One Code不像某些IDE那样绑定单一模型厂商，而是通过内置的提供商预设，连接到你选择的提供商——本地运行时如Ollama或llama.cpp，或云端API如OpenAI或Anthropic。',
          },
          {
            q: 'Bodega One Code支持哪些LLM提供商？',
            a: 'Bodega One Code内置10多种提供商预设：用于本地推理的Ollama、LM Studio、llama.cpp、vLLM、LocalAI、KoboldCpp、GPT4All、MLX和Jan，以及用于云端API的OpenAI、Anthropic、Groq、Together AI和OpenRouter。据Bodega One Code介绍，可在不重启应用的情况下在它们之间切换。',
          },
          {
            q: 'Bodega One Code免费吗？',
            a: '据厂商介绍，Bodega One Code目前处于公开测试阶段，所有人（包括商业用途）均可免费使用。厂商表示测试结束后的条款为：一台设备上的个人使用保持免费，一次性支付39美元即可获得覆盖两台设备的Pro/商用许可，无需订阅。',
          },
          {
            q: 'Bodega One Code是开源的吗？',
            a: '并非完全开源。分发后部分组件适用Business Source License，但Quality Enforcement Layer和代理编排层是专有的，并将保持专有。需要完全开源的本地编程工具的开发者应考虑Continue.dev、Cline或Aider等替代方案。',
          },
          {
            q: 'Bodega One Code使用什么编辑器？',
            a: 'Bodega One Code基于Monaco构建，这与Visual Studio Code使用的开源编辑器组件相同，并增加了Tab键自动补全、Git集成，以及供代理使用的、涵盖文件操作、shell命令和网络搜索的26个内置工具。',
          },
          {
            q: '5步验证循环是什么？',
            a: '这是Bodega One Code描述的一项质量检查流程，代理所做的每次修改都会经过该流程——涵盖语法检查、类型检查和测试——之后才会被标记为完成。这是厂商对其Quality Enforcement Layer的自我描述；PromptQuorum并未独立评测其准确性。',
          },
          {
            q: 'Bodega One Code中的气隙模式是什么？',
            a: '气隙模式是Bodega One Code描述的一项设置，通过9层网络控制阻止所有出站连接，适用于需要IDE完全离线运行的开发者。PromptQuorum并未独立测试这9层网络控制阻止出站流量的完整程度——对于任何确实存在零外泄需求的环境，请自行验证。',
          },
          {
            q: 'Bodega One Code与Continue.dev、Cline或Aider相比如何？',
            a: 'Continue.dev和Cline是开源扩展，可为已有的VS Code（或JetBrains）安装添加AI聊天、自动补全或自主代理。Aider是一款基于终端的开源AI结对编程工具，没有内置编辑器。Bodega One Code则是一个独立的应用，将编辑器本身与聊天和代理整合在一起，其核心Quality Enforcement Layer及代理编排是专有的，而非开源。',
          },
          {
            q: '我可以完全离线使用Bodega One Code吗？',
            a: '可以，只要将其配置为使用本地提供商（Ollama、LM Studio、llama.cpp、vLLM、LocalAI、KoboldCpp、GPT4All、MLX或Jan）并启用气隙模式——据Bodega One Code介绍，该模式通过9层控制阻止出站网络连接。使用云端提供商（OpenAI、Anthropic、Groq、Together AI、OpenRouter）则无论此设置如何都需要互联网连接。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Bodega One Code的核心理念——一个整合了编辑器、AI聊天和自主代理的本地应用，将模型提供商的选择完全交给开发者——填补了单一厂商绑定的AI IDE与需要自行拼凑提供商配置的简陋扩展之间的实际空白。其BYOLLM提供商列表相当广泛，将主要的本地运行时（Ollama、LM Studio、llama.cpp、vLLM、LocalAI、KoboldCpp、GPT4All、MLX、Jan）和主要的云端API（OpenAI、Anthropic、Groq、Together AI、OpenRouter）集中在一处，而其定价模式——个人使用免费，加上一次性39美元支付即可解锁第二台设备，无需订阅——也很直白。最能体现产品差异化的两项功能，即5步验证循环和9层气隙模式，属于厂商说法而非本文独立评测的结果——应将其视为需要对照自身项目和网络要求加以验证的说法，而非保证。希望使用一体化IDE、并能接受专有Quality Enforcement Layer的开发者，不妨在当前免费的公开测试期尝试使用；需要完全开源技术栈，或希望继续在VS Code本身内工作的用户，则更适合选择Continue.dev、Cline或Aider。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Bodega One Code官方网站](https://bodegaone.ai) — 产品概览、BYOLLM提供商列表、价格与许可条款。',
          '[Bodega One Code（www）](https://www.bodegaone.ai) — 镜像产品网站。',
          '[GitHub上的Bodega One Code发行版](https://github.com/BodegaoneAI/bodegaone-releases) — 发行说明与构建历史。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Continue.dev 对比 Cline 对比 Aider](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 三款开源本地编程工具，为现有编辑器添加功能而非取代它。',
          '[2026年最佳本地编程模型](/zh/power-local-llm/best-local-coding-models-2026) — 模型层面：应该为Bodega One Code这类BYOLLM工具搭配哪些开放权重模型。',
          '[2026年使用MCP的本地AI代理](/zh/power-local-llm/local-ai-agents-with-mcp-2026) — 面向希望将Bodega One Code内置工具列表与开放的基于MCP的工具生态系统进行比较的读者。',
          '[用本地LLM取代GitHub Copilot](/zh/power-local-llm/replace-github-copilot-with-local-llm) — 关于将AI编程辅助迁移到本地或自托管模型的更广泛背景。',
          '[Power Local LLM中心](/zh/power-local-llm) — 完整指南库。',
        ],
      },
    },
  },
  ar: {
    theme: 'Coding Assistants',
    heroImage: '/images/bodega-one-code-review-2026-hero-ar.webp',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    next_refresh_due: '2027-03-03',
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يقيّمون بيئة تطوير متكاملة محلية أولاً تتيح لهم اختيار مزود LLM الخاص بهم بدلاً من الارتباط بمزود واحد',
    primaryTerm: 'Bodega One Code',
    title: 'مراجعة Bodega One Code (2026): بيئة تطوير محلية أولاً بنظام BYOLLM',
    seoTitle: 'مراجعة Bodega One Code 2026: بيئة تطوير BYOLLM',
    intro:
      'Bodega One Code هي بيئة تطوير برمجي (IDE) تجمع بين محرر أكواد، ولوحة محادثة بالذكاء الاصطناعي، ووكيل برمجة مستقل، في تطبيق واحد يعمل على جهازك الخاص. الفكرة المركزية هي "أحضر نموذج اللغة الخاص بك" (BYOLLM): بدلاً من الارتباط بمزود نموذج واحد ثابت، يمكن توجيه Bodega One Code نحو Ollama أو LM Studio أو llama.cpp أو واجهة برمجة تطبيقات سحابية مثل OpenAI أو Anthropic، ووفقًا للشركة المصنّعة، يمكن التبديل بين المزودين دون إعادة تشغيل التطبيق. تتناول هذه المراجعة ما تتضمنه بيئة التطوير وفقًا لصفحات المنتج الخاصة بـBodega One Code نفسها، وكيفية عمل نظام المزودين والوكيل، وشروط التسعير والترخيص الحالية، وكيف تقارن بأدوات برمجة أخرى قادرة على العمل محليًا مثل Continue.dev وCline وAider.',
    metaDescription:
      'مراجعة Bodega One Code: بيئة تطوير محلية أولاً مع تبديل مزودي BYOLLM، ومحرر Monaco، ووكيل مستقل. الأسعار والترخيص ووضع العزل الشبكي، والمقارنة مع Continue.dev وCline وAider.',
    twitterDescription:
      'مراجعة Bodega One Code 2026: بيئة تطوير محلية أولاً، BYOLLM عبر أكثر من 10 مزودين، محرر Monaco، وكيل مستقل، وضع عزل شبكي. الأسعار والترخيص والمقارنة مع Continue.dev وCline وAider.',
    readTime: '10 دقائق للقراءة',
    targetKeywords: [
      'مراجعة bodega one code',
      'bodega one code ide',
      'بيئة تطوير byollm',
      'سعر bodega one code',
      'bodega one code مقابل cursor',
    ],
    leadAnswerBlock:
      '**تستحق Bodega One Code التقييم إذا كنت تريد تطبيقًا محليًا واحدًا يجمع بين محرر الأكواد ومحادثة الذكاء الاصطناعي ووكيل برمجة مستقل، وتفضّل اختيار نموذج اللغة الذي يشغّله بنفسك بدلاً من الارتباط بمزود واحد.** تدعم بيئة التطوير مبدأ "أحضر نموذج اللغة الخاص بك" (BYOLLM) عبر أكثر من اثني عشر إعدادًا مسبقًا للمزودين — Ollama وLM Studio وllama.cpp وvLLM وLocalAI وKoboldCpp وGPT4All وMLX وJan للاستدلال المحلي، بالإضافة إلى OpenAI وAnthropic وGroq وTogether AI وOpenRouter للنماذج السحابية — وتذكر Bodega One Code أنه يمكن التبديل بين المزودين دون إعادة تشغيل التطبيق. حاليًا هي في مرحلة اختبار مفتوح ومجانية للاستخدام، بما في ذلك الاستخدام التجاري؛ وبعد انتهاء الاختبار، سيظل الاستخدام الشخصي مجانيًا على جهاز واحد، وترخيص لمرة واحدة بقيمة 39 دولارًا يضيف جهازًا ثانيًا دون اشتراك.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Bodega One Code for local-first AI coding?',
        answer:
          'Use Bodega One Code if you want a single desktop IDE that runs an editor, AI chat, and an autonomous coding agent locally while letting you pick the LLM provider — local (Ollama, LM Studio, llama.cpp) or cloud (OpenAI, Anthropic, Groq). Weigh it against Continue.dev, Cline, or Aider if you already work inside VS Code and want an extension instead of a separate application, and note that the Quality Enforcement Layer and agentic orchestration are proprietary, not open source.',
        bullets: [
          'BYOLLM: 10+ provider presets, including Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, and Jan.',
          'Bodega One Code states providers can be switched without restarting the IDE.',
          'Monaco-based editor, tab autocomplete, Git integration, and 26 built-in tools for file operations, shell commands, and web search.',
          'Vendor-described 5-step verification loop (syntax, type checks, tests) runs after every agent change, and a 9-layer air-gap mode is offered for offline use — neither has been independently benchmarked by PromptQuorum.',
          'Free for personal use on one machine; a one-time $39 license covers a second machine (no subscription). Currently in open beta, free for everyone including commercial use during the beta.',
          'Licensing is proprietary: a Business Source License applies to some components after distribution, and the Quality Enforcement Layer plus agentic orchestration stay proprietary.',
        ],
        updatedDate: '2026-09-03',
      },
      ar: {
        question: 'هل يجب أن أستخدم Bodega One Code للبرمجة بالذكاء الاصطناعي المحلي أولاً؟',
        answer:
          'استخدم Bodega One Code إذا كنت تريد بيئة تطوير سطح مكتب واحدة تشغّل محررًا ومحادثة ذكاء اصطناعي ووكيل برمجة مستقل محليًا مع السماح لك باختيار مزود نموذج اللغة — محليًا (Ollama وLM Studio وllama.cpp) أو سحابيًا (OpenAI وAnthropic وGroq). قارنها بـContinue.dev أو Cline أو Aider إذا كنت تعمل بالفعل داخل VS Code وتفضل إضافة بدلاً من تطبيق منفصل، ولاحظ أن Quality Enforcement Layer والتنسيق الوكيلي مملوكان وليسا مفتوحَي المصدر.',
        bullets: [
          'BYOLLM: أكثر من 10 إعدادات مسبقة للمزودين، منها Ollama وLM Studio وOpenAI وAnthropic وGroq وTogether AI وOpenRouter وvLLM وllama.cpp وLocalAI وKoboldCpp وGPT4All وMLX وJan.',
          'تذكر Bodega One Code أنه يمكن تبديل المزودين دون إعادة تشغيل بيئة التطوير.',
          'محرر قائم على Monaco، وإكمال تلقائي بمفتاح Tab، وتكامل مع Git، و26 أداة مدمجة لعمليات الملفات وأوامر الشل والبحث على الويب.',
          'حلقة تحقق من 5 خطوات تصفها الشركة المصنّعة (بناء الجملة، فحص الأنواع، الاختبارات) تعمل بعد كل تعديل من الوكيل، ويُقدَّم وضع عزل شبكي من 9 طبقات للاستخدام دون اتصال — لم يخضع أيّ منهما لتقييم مستقل من PromptQuorum.',
          'مجاني للاستخدام الشخصي على جهاز واحد؛ ترخيص لمرة واحدة بقيمة 39 دولارًا يغطي جهازًا ثانيًا (دون اشتراك). حاليًا في اختبار مفتوح، مجاني للجميع بما في ذلك الاستخدام التجاري خلال فترة الاختبار.',
          'الترخيص مملوك بشكل عام: تُطبَّق رخصة Business Source License على بعض المكونات بعد التوزيع، وتظل طبقة Quality Enforcement Layer إلى جانب التنسيق الوكيلي مملوكتين.',
        ],
        updatedDate: '2026-09-03',
      },
    },
    toc: [
      { label: 'الملخص السريع', anchor: 'tldr' },
      { label: 'ما هي Bodega One Code؟', anchor: 'what-is-bodega-one-code' },
      { label: 'ما مزودو LLM المدعومون؟', anchor: 'byollm-providers' },
      { label: 'ماذا يتضمن المحرر؟', anchor: 'editor-and-tooling' },
      { label: 'ما هي حلقة التحقق؟', anchor: 'quality-enforcement-loop' },
      { label: 'كيف يعمل وضع العزل الشبكي؟', anchor: 'air-gap-mode' },
      { label: 'التسعير والترخيص', anchor: 'licensing-and-pricing' },
      { label: 'المقايضات', anchor: 'tradeoffs' },
      { label: 'Bodega One Code مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن تناسب', anchor: 'who-should-use' },
      { label: 'لمن لا تناسب', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'الملخص السريع',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bodega One Code هي بيئة تطوير برمجي محلية أولاً بالذكاء الاصطناعي تتيح للمطورين إحضار نموذج اللغة الخاص بهم — عبر أكثر من 10 إعدادات مسبقة للمزودين تشمل بيئات تشغيل محلية مثل Ollama وllama.cpp وواجهات برمجة سحابية مثل OpenAI وAnthropic — لتشغيل محادثة مدمجة ووكيل برمجة مستقل، مع وضع عزل شبكي اختياري للاستخدام دون اتصال بالكامل.',
          },
          {
            type: 'plain-terms',
            text: 'هي محرر أكواد، ولوحة محادثة بالذكاء الاصطناعي، ووكيل ذكاء اصطناعي قادر على تعديل الملفات وتنفيذ الأوامر، مجمّعة كلها في تطبيق سطح مكتب واحد، حيث تختار أنت أي نموذج ذكاء اصطناعي — على جهازك أو في السحابة — يقوم بالعمل.',
          },
        ],
        items: [
          'تجمع بين محرر الأكواد ومحادثة الذكاء الاصطناعي ووكيل برمجة مستقل في تطبيق محلي واحد؛ مبنية حول "أحضر نموذج اللغة الخاص بك" (BYOLLM).',
          'أكثر من 10 إعدادات مسبقة للمزودين: Ollama وLM Studio وOpenAI وAnthropic وGroq وTogether AI وOpenRouter وvLLM وllama.cpp وLocalAI وKoboldCpp وGPT4All وMLX وJan.',
          'يمكن، وفقًا للشركة المصنّعة، تبديل المزودين دون إعادة تشغيل التطبيق.',
          'محرر قائم على Monaco (نفس مكوّن المحرر مفتوح المصدر الذي يشغّل VS Code)، وإكمال تلقائي بمفتاح Tab، وتكامل مع Git، و26 أداة مدمجة تغطي عمليات الملفات وأوامر الشل والبحث على الويب.',
          'حلقة تحقق من 5 خطوات تصفها الشركة المصنّعة تعمل بعد كل تعديل من الوكيل: فحص بناء الجملة والأنواع والاختبارات، قبل تمييز التعديل كمكتمل.',
          'وفقًا لـBodega One Code، يستخدم وضع العزل الشبكي 9 طبقات مستقلة لفرض سياسات الشبكة لمنع الاتصالات الصادرة، لحالات الاستخدام التي تتطلب تشغيلًا دون اتصال بالكامل.',
          'مجاني للاستخدام الشخصي على جهاز واحد؛ ترخيص Pro/تجاري لمرة واحدة بقيمة 39 دولارًا يضيف جهازًا ثانيًا، دون اشتراك. حاليًا في اختبار مفتوح، مجاني للجميع بما في ذلك الاستخدام التجاري.',
          'ترخيص مملوك بشكل عام — تُطبَّق رخصة Business Source License على بعض المكونات بعد التوزيع، وتظل طبقة Quality Enforcement Layer إلى جانب التنسيق الوكيلي مملوكتين.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تصف هذه المراجعة ما تنشره Bodega One Code عن نفسها على bodegaone.ai ومستودع الإصدارات الخاص بها على GitHub ([github.com/BodegaoneAI/bodegaone-releases](https://github.com/BodegaoneAI/bodegaone-releases)). لم تقيّم PromptQuorum بشكل مستقل حلقة التحقق أو وضع العزل الشبكي أو زمن استجابة تبديل المزود، ولا توجد أي علاقة تابعة أو تجارية بين PromptQuorum وBodega One Code.',
          },
        ],
      },
      whatIs: {
        id: 'what-is-bodega-one-code',
        title: 'ما هي Bodega One Code؟',
        content: [
          '**Bodega One Code هي بيئة تطوير سطح مكتب تجمع بين محرر، وواجهة محادثة بالذكاء الاصطناعي، ووكيل برمجة مستقل، مصممة حول فكرة أن المطور — لا الشركة المصنّعة — هو من يختار نموذج اللغة الذي يقوم بالعمل.** تسمّي Bodega One Code هذا النهج "أحضر نموذج اللغة الخاص بك" (BYOLLM): التطبيق نفسه هو الواجهة وطبقة الأدوات، بينما يمكن أن يكون النموذج الذي يجيب على أسئلة المحادثة أو يدير وكيل البرمجة نموذجًا محليًا بالكامل أو واجهة برمجة تطبيقات سحابية مستضافة، حسب اختيار المستخدم.',
          'يختلف هذا عن السلوك الافتراضي لبيئات التطوير المرتبطة بعائلة نموذج واحدة. ولأن Bodega One Code تفصل الواجهة عن مزود النموذج، يمكن للمطور البدء بنموذج سحابي مثل OpenAI أو Anthropic لأقصى قدرة، ثم نقل نفس سير العمل إلى بيئة تشغيل محلية مثل Ollama أو llama.cpp عند العمل دون اتصال أو مع أكواد حساسة، دون تبديل التطبيق.',
          'يُوزَّع المنتج عبر bodegaone.ai (يمكن الوصول إليه أيضًا عبر www.bodegaone.ai)، وتُتابَع إصدارات البناء على GitHub عبر github.com/BodegaoneAI/bodegaone-releases.',
        ],
      },
      byollmProviders: {
        id: 'byollm-providers',
        itemHeadings: true,
        title: 'ما مزودو LLM التي تدعمها Bodega One Code؟',
        content: [
          '**تأتي Bodega One Code مزودة بأكثر من اثني عشر إعدادًا مسبقًا مدمجًا للمزودين، تغطي كلاً من بيئات تشغيل الاستدلال المحلية وواجهات برمجة التطبيقات السحابية.** يؤدي اختيار إعداد مسبق إلى توجيه المحرر والمحادثة والوكيل نحو ذلك المزود؛ وتذكر Bodega One Code أنه يمكن تغيير المزود النشط دون إعادة تشغيل التطبيق.',
        ],
        columns: ['المزود', 'الفئة', 'ما هو'],
        rows: [
          { 'المزود': 'Ollama', 'الفئة': 'بيئة تشغيل محلية', 'ما هو': 'خادم نماذج محلي شائع؛ خيار افتراضي معتاد لتشغيل النماذج مفتوحة الوزن على جهاز شخصي.' },
          { 'المزود': 'LM Studio', 'الفئة': 'بيئة تشغيل محلية', 'ما هو': 'تطبيق سطح مكتب لتنزيل وتشغيل النماذج المحلية عبر واجهة برمجة محلية متوافقة مع OpenAI.' },
          { 'المزود': 'llama.cpp', 'الفئة': 'بيئة تشغيل محلية', 'ما هو': 'محرك الاستدلال بلغة C/C++ الذي تعتمد عليه أدوات محلية كثيرة؛ يمكن تشغيله مباشرة كخادم.' },
          { 'المزود': 'vLLM', 'الفئة': 'بيئة تشغيل محلية', 'ما هو': 'خادم استدلال عالي الإنتاجية، يُستخدم عادةً في عمليات النشر الذاتية على مستوى محطة العمل أو الخادم.' },
          { 'المزود': 'LocalAI', 'الفئة': 'بيئة تشغيل محلية', 'ما هو': 'خادم استدلال مستضاف ذاتيًا ومتوافق مع واجهة برمجة تطبيقات OpenAI، لتشغيل النماذج المفتوحة محليًا.' },
          { 'المزود': 'KoboldCpp', 'الفئة': 'بيئة تشغيل محلية', 'ما هو': 'خادم استدلال محلي قائم على llama.cpp، كان شائعًا أصلًا في مجتمع تأدية الأدوار والكتابة الإبداعية المحلية.' },
          { 'المزود': 'GPT4All', 'الفئة': 'بيئة تشغيل محلية', 'ما هو': 'تطبيق سطح مكتب ومحرك استدلال محلي لتشغيل النماذج المفتوحة دون اتصال سحابي.' },
          { 'المزود': 'MLX', 'الفئة': 'بيئة تشغيل محلية', 'ما هو': 'إطار عمل Apple لحساب المصفوفات، يُستخدم لتشغيل النماذج المحلية بكفاءة على Apple Silicon.' },
          { 'المزود': 'Jan', 'الفئة': 'بيئة تشغيل محلية', 'ما هو': 'تطبيق سطح مكتب مفتوح المصدر بأسلوب ChatGPT لتشغيل النماذج المحلية عبر محرك استدلال مدمج أو خارجي.' },
          { 'المزود': 'OpenAI', 'الفئة': 'واجهة سحابية', 'ما هو': 'وصول مستضاف عبر واجهة برمجة التطبيقات إلى عائلة نماذج GPT من OpenAI؛ يتطلب مفتاح API من OpenAI واتصالاً بالإنترنت.' },
          { 'المزود': 'Anthropic', 'الفئة': 'واجهة سحابية', 'ما هو': 'وصول مستضاف عبر واجهة برمجة التطبيقات إلى عائلة نماذج Claude من Anthropic؛ يتطلب مفتاح API من Anthropic واتصالاً بالإنترنت.' },
          { 'المزود': 'Groq', 'الفئة': 'واجهة سحابية', 'ما هو': 'واجهة استدلال مستضافة معروفة بانخفاض زمن الاستجابة عند تقديم نماذج مفتوحة على أجهزة LPU خاصة.' },
          { 'المزود': 'Together AI', 'الفئة': 'واجهة سحابية', 'ما هو': 'واجهة استدلال مستضافة تقدّم كتالوجًا من النماذج المفتوحة على بنية تحتية سحابية مشتركة.' },
          { 'المزود': 'OpenRouter', 'الفئة': 'واجهة سحابية', 'ما هو': 'موجّه واجهة برمجة تطبيقات مستضاف يمرّر الطلبات إلى العديد من مزودي النماذج الأساسيين عبر نقطة نهاية ومفتاح واحد.' },
        ],
        note: 'قد تتغير الإعدادات المسبقة للمزودين والإعدادات الافتراضية بين إصدارات Bodega One Code. راجع ملاحظات الإصدار على github.com/BodegaoneAI/bodegaone-releases وقائمة المزودين الحالية على bodegaone.ai قبل افتراض أن إعدادًا معينًا لا يزال متاحًا في الإصدار الذي تثبّته.',
      },
      editorTooling: {
        id: 'editor-and-tooling',
        title: 'ماذا يتضمن المحرر والأدوات؟',
        content: [
          '**المحرر الأساسي في Bodega One Code مبني على Monaco، نفس مكوّن المحرر مفتوح المصدر الذي يشغّل Visual Studio Code**، لذا فإن تمييز بناء الجملة وتحرير الملفات المتعددة والتنقل بلوحة المفاتيح يجب أن تبدو مألوفة لأي شخص قادم من VS Code أو أحد فروعه.',
        ],
        items: [
          '**إكمال تلقائي بمفتاح Tab** — إكمال أكواد ضمن السطر مدفوع بالنموذج، يُفعَّل أثناء الكتابة، مشابه في المفهوم لميزات الإكمال في أدوات على غرار Copilot.',
          '**تكامل مع Git** — تتوفر عمليات التحكم في المصدر داخل بيئة التطوير دون الحاجة إلى طرفية أو عميل Git منفصل.',
          '**26 أداة مدمجة** — يملك الوكيل حق الوصول إلى مجموعة أدوات ثابتة تغطي عمليات الملفات (القراءة والكتابة والبحث عبر المشروع)، وتنفيذ أوامر الشل، والبحث على الويب، يمكنه استدعاؤها كجزء من إتمام مهمة برمجية.',
          '**المحادثة والوكيل في نفس التطبيق** — تعمل واجهة المحادثة لطرح الأسئلة والوكيل المستقل لإجراء تعديلات متعددة الخطوات كلاهما داخل نفس التطبيق ويمكنهما استخدام نفس مزود LLM المُعدّ.',
        ],
      },
      qualityEnforcement: {
        id: 'quality-enforcement-loop',
        title: 'ما هي حلقة التحقق ذات الخطوات الخمس؟',
        content: [
          '**تصف Bodega One Code حلقة تحقق من 5 خطوات يمر بها كل تعديل يجريه الوكيل قبل تمييزه كمكتمل، تشمل فحص بناء الجملة وفحص الأنواع والاختبارات.** هذا وصف الشركة المصنّعة نفسها لطبقة Quality Enforcement Layer الخاصة بها؛ لم تقِس PromptQuorum بشكل مستقل دقتها أو معدل نتائجها الإيجابية الكاذبة أو تأثيرها على زمن إتمام المهام.',
          'الأثر العملي، وفقًا لوصف الشركة المصنّعة، هو أن الوكيل من المفترض أن يكتشف بنفسه بناء الجملة المعطوب وأخطاء الأنواع والاختبارات الفاشلة، بدلاً من ترك هذا التحقق بالكامل للمطور لاحقًا. ما إذا كان هذا يصمد عمليًا يعتمد على لغة المشروع وتغطية الاختبارات وإعداداته — لم تُختبَر أي من هذه العناصر مباشرة في هذه المراجعة.',
          'طبقة Quality Enforcement Layer والتنسيق الوكيلي المحيط بها مكونات مملوكة لـBodega One Code، وليست جزءًا من أي إصدار مفتوح المصدر، حتى لو طُبِّقت رخصة Business Source License على أجزاء أخرى من الشيفرة بعد التوزيع.',
        ],
      },
      airGap: {
        id: 'air-gap-mode',
        title: 'كيف يعمل وضع العزل الشبكي؟',
        content: [
          '**تقدّم Bodega One Code وضع عزل شبكي يطبّق، وفقًا للشركة المصنّعة، 9 طبقات مستقلة لفرض سياسات الشبكة بهدف منع جميع الاتصالات الصادرة، للمطورين الذين يحتاجون إلى تشغيل بيئة التطوير دون اتصال بالكامل.** يُقصد بهذا سيناريوهات لا يجب فيها أبدًا أن يغادر الكود أو موجّهات النماذج أو بيانات المشروع الجهاز المحلي — مثلًا عند استخدام مزود محلي بالكامل (Ollama أو llama.cpp أو LocalAI) دون تفعيل الرجوع إلى السحابة.',
          'لم تتحقق PromptQuorum بشكل مستقل من كيفية تنفيذ الطبقات التسع، ولم تختبر فعاليتها في منع كل مسار صادر. ينبغي للمطورين ذوي المتطلبات الحقيقية للعزل الشبكي (بيانات خاضعة للتنظيم، بيئات مصنّفة، بنود تعاقدية بعدم تسريب البيانات) التحقق من سلوك الشبكة بأنفسهم — مثلًا عبر جدار حماية خارجي أو مراقب شبكة — بدلاً من الاعتماد على اسم الميزة وحده.',
        ],
      },
      licensingPricing: {
        id: 'licensing-and-pricing',
        itemHeadings: true,
        title: 'كم تكلفة Bodega One Code وما ترخيصها؟',
        content: [
          '**Bodega One Code حاليًا في مرحلة اختبار مفتوح، وتذكر الشركة المصنّعة أن التطبيق مجاني للجميع خلال فترة الاختبار، بما في ذلك الاستخدام التجاري.** الأسعار أدناه هي ما تذكر الشركة المصنّعة أنها ستُطبَّق بعد انتهاء الاختبار.',
        ],
        columns: ['الخطة', 'السعر', 'الأجهزة', 'ملاحظات'],
        rows: [
          { 'الخطة': 'شخصية', 'السعر': 'مجانية', 'الأجهزة': 'جهاز واحد', 'ملاحظات': 'استخدام شخصي غير تجاري وفقًا للشروط التي تذكرها الشركة المصنّعة.' },
          { 'الخطة': 'Pro / تجارية', 'السعر': '39 دولارًا لمرة واحدة', 'الأجهزة': 'جهازان', 'ملاحظات': 'دفعة واحدة، دون اشتراك، وفقًا للسعر الذي تذكره الشركة المصنّعة.' },
          { 'الخطة': 'اختبار مفتوح (الحالي)', 'السعر': 'مجانية', 'الأجهزة': 'دون قيود خلال الاختبار', 'ملاحظات': 'مجانية للجميع، بما في ذلك الاستخدام التجاري، طالما الاختبار المفتوح ساريًا.' },
        ],
        note: 'الترخيص مملوك بشكل عام. تُطبَّق رخصة Business Source License على بعض مكونات الشيفرة بعد التوزيع، وتظل طبقة Quality Enforcement Layer وطبقة التنسيق الوكيلي مملوكتين بغض النظر عن مستوى الترخيص. تحقق من السعر الحالي وحالة الاختبار وشروط الترخيص مباشرة على bodegaone.ai قبل الشراء، إذ يمكن أن تتغير شروط الاختبار والأسعار.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: ['الميزة', 'ماذا تعني عمليًا', 'القيد / التحذير'],
        rows: [
          {
            'الميزة': 'اختيار المزود (BYOLLM)',
            'ماذا تعني عمليًا': 'لست مقيدًا بمزود نموذج واحد — بدّل بين المزودين المحليين والسحابيين وفقًا لما يتطلبه المشروع أو الميزانية.',
            'القيد / التحذير': 'تعتمد جودة المخرجات كليًا على النموذج المختار؛ لن يضاهي نموذج محلي صغير استدلال نموذج سحابي متقدم.',
          },
          {
            'الميزة': 'تطبيق واحد للمحرر والمحادثة والوكيل',
            'ماذا تعني عمليًا': 'لا حاجة للتنقل بين محرر منفصل وأداة محادثة ذكاء اصطناعي منفصلة.',
            'القيد / التحذير': 'إنه تطبيق مستقل، وليس إضافة لـVS Code — الانتقال من إعداد VS Code موجود يعني تبنّي تطبيق جديد بدلاً من إضافة ملحق.',
          },
          {
            'الميزة': 'محلية أولاً، مع خيار العزل الشبكي',
            'ماذا تعني عمليًا': 'يمكن ضبطها للعمل بالكامل مع نماذج محلية دون أي حركة شبكة صادرة.',
            'القيد / التحذير': 'فعالية وضع العزل الشبكي ودقة حلقة التحقق هي ادعاءات من الشركة المصنّعة لم تختبرها هذه المراجعة بشكل مستقل.',
          },
          {
            'الميزة': 'بدون تسعير اشتراك',
            'ماذا تعني عمليًا': 'دفعة واحدة بقيمة 39 دولارًا تغطي جهازًا ثانيًا في خطة Pro/تجارية؛ الاستخدام الشخصي على جهاز واحد مجاني.',
            'القيد / التحذير': 'حاليًا في اختبار مفتوح مع وصول مجاني للجميع — قد تتغير الأسعار والشروط بعد الاختبار قبل الإتاحة العامة.',
          },
          {
            'الميزة': '26 أداة وكيل مدمجة',
            'ماذا تعني عمليًا': 'عمليات الملفات وأوامر الشل والبحث على الويب متاحة للوكيل مباشرة دون إعداد خوادم MCP منفصلة.',
            'القيد / التحذير': 'مجموعة الأدوات الثابتة أقل قابلية للتوسع من نظام إضافات/MCP مفتوح يضيف فيه أطراف ثالثة أدوات جديدة.',
          },
          {
            'الميزة': 'سطح تحرير مألوف',
            'ماذا تعني عمليًا': 'يجب أن يبدو المحرر القائم على Monaco وإكمال Tab مألوفَين فورًا لمستخدمي VS Code.',
            'القيد / التحذير': 'طبقة Quality Enforcement Layer والتنسيق الوكيلي مملوكتان — لا يمكن فحص أو تعديل كيفية عمل حلقة التحقق داخليًا.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Bodega One Code مقابل Continue.dev وCline وAider',
        columns: ['الأداة', 'الرابط', 'الشكل', 'اختيار النموذج', 'التصميم المحلي أولاً', 'الفرق الرئيسي'],
        rows: [
          {
            'الأداة': 'Bodega One Code',
            'الرابط': '[bodegaone.ai](https://bodegaone.ai)',
            'الشكل': 'بيئة تطوير سطح مكتب مستقلة (محرر + محادثة + وكيل في تطبيق واحد)',
            'اختيار النموذج': 'BYOLLM: أكثر من 10 إعدادات، محلية وسحابية',
            'التصميم المحلي أولاً': 'مبنية حول مزودين محليين، مع وضع عزل شبكي اختياري',
            'الفرق الرئيسي': 'يستبدل تطبيق واحد المحرر نفسه، بدلاً من مجرد إضافة طبقة ذكاء اصطناعي إلى محرر موجود؛ مكونات الوكيل الأساسية مملوكة.',
          },
          {
            'الأداة': 'Continue.dev',
            'الرابط': '[docs.continue.dev](https://docs.continue.dev)',
            'الشكل': 'إضافة مفتوحة المصدر لـVS Code وبيئات JetBrains',
            'اختيار النموذج': 'قابلة للإعداد لمزودين محليين (Ollama وLM Studio) أو سحابيين',
            'التصميم المحلي أولاً': 'تعتمد كليًا على المزود المُعدّ؛ لا ميزة عزل شبكي مخصصة',
            'الفرق الرئيسي': 'تضيف محادثة ذكاء اصطناعي وإكمالاً تلقائيًا إلى محرر تستخدمه بالفعل، بدلاً من استبداله.',
          },
          {
            'الأداة': 'Cline',
            'الرابط': '[cline.bot](https://cline.bot)',
            'الشكل': 'إضافة مفتوحة المصدر لوكيل مستقل داخل VS Code',
            'اختيار النموذج': 'قابلة للإعداد لمزودين محليين أو سحابيين عبر نقاط نهاية متوافقة مع واجهة البرمجة',
            'التصميم المحلي أولاً': 'يعتمد على المزود المُعدّ',
            'الفرق الرئيسي': 'إضافة تركّز على الوكيل مع موافقة بشرية على تعديلات الملفات والأوامر، داخل VS Code.',
          },
          {
            'الأداة': 'Aider',
            'الرابط': '[aider.chat](https://aider.chat)',
            'الشكل': 'أداة برمجة زوجية بالذكاء الاصطناعي مفتوحة المصدر تعمل عبر الطرفية',
            'اختيار النموذج': 'قابلة للإعداد لمزودين محليين أو سحابيين عبر نقاط نهاية متوافقة مع واجهة البرمجة',
            'التصميم المحلي أولاً': 'يعتمد على المزود المُعدّ؛ بدون محرر رسومي خاص بها',
            'الفرق الرئيسي': 'سير عمل يعتمد على سطر الأوامر مبني حول التزامات Git، دون واجهة تحرير مدمجة.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن تناسب Bodega One Code',
        items: [
          '**المطورون الذين يريدون تطبيقًا واحدًا بدلاً من محرر مع طبقة ذكاء اصطناعي منفصلة.** إذا كان الاحتفاظ بمجموعة إضافات VS Code لميزات الذكاء الاصطناعي يمثل عبئًا، فقد تكون بيئة تطوير موحّدة بمحرر ومحادثة ووكيل أبسط في الإعداد والصيانة.',
          '**المطورون الذين يريدون التبديل بين النماذج المحلية والسحابية في نفس المشروع.** يتيح دعم BYOLLM عبر أكثر من 10 إعدادات مسبقة إنشاء نموذج أولي بنموذج سحابي ثم الانتقال إلى نموذج محلي (أو العكس) دون تغيير الأداة.',
          '**الفرق التي تقيّم أدوات محلية أولًا لأسباب تتعلق بالتكلفة أو الخصوصية.** يبقي التشغيل الكامل مع مزود محلي مثل Ollama أو llama.cpp الكود والموجّهات بعيدًا عن خوادم أطراف ثالثة، ويلبي وضع العزل الشبكي الاختياري متطلبات أكثر صرامة لعدم تسريب البيانات.',
          '**المستخدمون الذين يفضّلون الدفع لمرة واحدة على الاشتراك.** قد يناسب ترخيص Pro/تجاري لمرة واحدة بقيمة 39 دولارًا كما تذكره الشركة المصنّعة، بدلاً من رسوم متكررة، المطورين الذين يريدون تجنب اشتراكات أدوات الذكاء الاصطناعي المستمرة.',
          '**المتبنّون الأوائل المرتاحون لتقييم برامج في مرحلة اختبار.** توفر نافذة الاختبار المفتوح الحالية وصولًا مجانيًا، بما في ذلك تجاريًا، لتجربة بيئة التطوير قبل الالتزام بها على المدى الطويل.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا تناسب Bodega One Code',
        items: [
          '**المطورون الذين يريدون البقاء داخل VS Code نفسه.** Bodega One Code تطبيق منفصل، وليست إضافة لـVS Code — إذا كنت بحاجة إلى إضافة ميزات ذكاء اصطناعي إلى إعداد VS Code الحالي لديك، فإن Continue.dev أو Cline أنسب.',
          '**الفرق التي تتطلب أدوات مفتوحة المصدر بالكامل من طرف إلى طرف.** طبقة Quality Enforcement Layer والتنسيق الوكيلي مملوكتان، وتُطبَّق رخصة Business Source License على بعض المكونات بعد التوزيع — يجب على الفرق التي تحتاج أن تكون كل طبقة مفتوحة المصدر (كما هو الحال مع Aider أو Continue.dev أو Cline) مراجعة شروط الترخيص أولًا.',
          '**أي شخص يحتاج إلى تدقيق مستقل لادعاءات حلقة التحقق أو وضع العزل الشبكي قبل الاعتماد عليها.** تنقل هذه المراجعة ما تنشره Bodega One Code حول حلقة التحقق ذات الخطوات الخمس ووضع العزل الشبكي ذي الطبقات التسع؛ لم يخضع أيّ منهما لقياس أداء أو اختبار أمني من PromptQuorum. ينبغي للبيئات الخاضعة للتنظيم أو عالية الأمان إجراء التحقق الخاص بها.',
          '**المستخدمون الذين يحتاجون سير عمل عبر الطرفية فقط.** Bodega One Code تطبيق رسومي مبني حول محرر؛ يجب على المطورين الذين يفضّلون أداة برمجة زوجية تعتمد على سطر الأوامر أولاً النظر في Aider بدلاً منها.',
          '**أي شخص يخطط بالاعتماد على أسعار الاختبار المجانية الحالية كضمان طويل الأمد.** الأسعار وشروط الترخيص بعد الاختبار هي نية معلنة من الشركة المصنّعة، وليست ضمانًا تعاقديًا — تحقق من الشروط الحالية على bodegaone.ai قبل وضع ميزانية بناءً عليها.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هي Bodega One Code؟',
            a: 'Bodega One Code هي بيئة تطوير سطح مكتب تجمع بين محرر أكواد، ولوحة محادثة بالذكاء الاصطناعي، ووكيل برمجة مستقل في تطبيق محلي واحد. سمتها المميزة هي BYOLLM (أحضر نموذج اللغة الخاص بك): يختار المطور مزود النموذج — محليًا أو سحابيًا — الذي يشغّل المحادثة والوكيل.',
          },
          {
            q: 'ماذا يعني BYOLLM؟',
            a: 'تعني BYOLLM "أحضر نموذج اللغة الخاص بك". بدلاً من بيئة تطوير مرتبطة بمزود نموذج واحد، يمكن توصيل Bodega One Code بمزود من اختيارك — بيئة تشغيل محلية مثل Ollama أو llama.cpp، أو واجهة برمجة سحابية مثل OpenAI أو Anthropic — عبر إعدادات مسبقة مدمجة للمزودين.',
          },
          {
            q: 'ما مزودو LLM التي تدعمها Bodega One Code؟',
            a: 'تأتي Bodega One Code بأكثر من 10 إعدادات مسبقة للمزودين: Ollama وLM Studio وllama.cpp وvLLM وLocalAI وKoboldCpp وGPT4All وMLX وJan للاستدلال المحلي، بالإضافة إلى OpenAI وAnthropic وGroq وTogether AI وOpenRouter لواجهات البرمجة السحابية. وتذكر Bodega One Code أنه يمكن التبديل بينها دون إعادة تشغيل التطبيق.',
          },
          {
            q: 'هل Bodega One Code مجانية؟',
            a: 'Bodega One Code حاليًا في مرحلة اختبار مفتوح ومجانية للجميع، بما في ذلك الاستخدام التجاري، وفقًا للشركة المصنّعة. بعد الاختبار، الشروط التي تذكرها الشركة المصنّعة هي: مجانية للاستخدام الشخصي على جهاز واحد، ودفعة واحدة بقيمة 39 دولارًا مقابل ترخيص Pro/تجاري يغطي جهازين، دون اشتراك.',
          },
          {
            q: 'هل Bodega One Code مفتوحة المصدر؟',
            a: 'ليست كذلك بالكامل. تُطبَّق رخصة Business Source License على بعض المكونات بعد التوزيع، لكن طبقة Quality Enforcement Layer وطبقة التنسيق الوكيلي مملوكتان وستبقيان كذلك. يجب على المطورين الذين يحتاجون أداة برمجة محلية مفتوحة المصدر بالكامل النظر في بدائل مثل Continue.dev أو Cline أو Aider.',
          },
          {
            q: 'ما المحرر الذي تستخدمه Bodega One Code؟',
            a: 'تُبنى Bodega One Code على Monaco، نفس مكوّن المحرر مفتوح المصدر الذي يستخدمه Visual Studio Code، وتضيف إكمالًا تلقائيًا بمفتاح Tab وتكاملًا مع Git و26 أداة مدمجة لعمليات الملفات وأوامر الشل والبحث على الويب متاحة للوكيل.',
          },
          {
            q: 'ما هي حلقة التحقق ذات الخطوات الخمس؟',
            a: 'إنها عملية فحص جودة تصف Bodega One Code أنها تعمل بعد كل تعديل يجريه الوكيل — تشمل فحص بناء الجملة والأنواع والاختبارات — قبل تمييز التعديل كمكتمل. هذا هو وصف الشركة المصنّعة نفسها لطبقة Quality Enforcement Layer الخاصة بها؛ لم تقيّم PromptQuorum دقتها بشكل مستقل.',
          },
          {
            q: 'ما وضع العزل الشبكي في Bodega One Code؟',
            a: 'وضع العزل الشبكي هو إعداد تصفه Bodega One Code بأنه يطبّق 9 طبقات من التحكم في الشبكة لمنع جميع الاتصالات الصادرة، مخصص للمطورين الذين يحتاجون إلى تشغيل بيئة التطوير دون اتصال بالكامل. لم تختبر PromptQuorum بشكل مستقل مدى اكتمال منع الطبقات التسع لحركة المرور الصادرة — تحقق من ذلك بنفسك لأي بيئة ذات متطلب حقيقي بعدم تسريب البيانات.',
          },
          {
            q: 'كيف تقارن Bodega One Code بـContinue.dev أو Cline أو Aider؟',
            a: 'Continue.dev وCline إضافتان مفتوحتا المصدر تضيفان محادثة ذكاء اصطناعي أو إكمالًا تلقائيًا أو وكيلًا مستقلًا إلى تثبيت VS Code (أو JetBrains) موجود. Aider أداة برمجة زوجية بالذكاء الاصطناعي مفتوحة المصدر تعمل عبر الطرفية، دون محرر مدمج. أما Bodega One Code فهي تطبيق مستقل ومنفصل يجمع المحرر نفسه مع المحادثة والوكيل، وطبقة Quality Enforcement Layer المركزية فيها والتنسيق الوكيلي مملوكتان بدلاً من كونهما مفتوحَي المصدر.',
          },
          {
            q: 'هل يمكنني استخدام Bodega One Code دون اتصال بالكامل؟',
            a: 'نعم، إذا أعددتها لاستخدام مزود محلي (Ollama أو LM Studio أو llama.cpp أو vLLM أو LocalAI أو KoboldCpp أو GPT4All أو MLX أو Jan) وفعّلت وضع العزل الشبكي، الذي تصفه Bodega One Code بأنه يمنع اتصالات الشبكة الصادرة عبر 9 طبقات تحكم. يتطلب استخدام مزود سحابي (OpenAI أو Anthropic أو Groq أو Together AI أو OpenRouter) اتصالاً بالإنترنت بغض النظر عن هذا الإعداد.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'تسد الفكرة المركزية لـBodega One Code — تطبيق محلي واحد يجمع بين المحرر والمحادثة بالذكاء الاصطناعي ووكيل مستقل، مع ترك اختيار مزود النموذج بالكامل للمطور — فجوة حقيقية بين بيئات تطوير الذكاء الاصطناعي المرتبطة بمزود واحد والإضافات البسيطة التي يتعين فيها تجميع إعداد المزود الخاص بك بنفسك. قائمة مزودي BYOLLM واسعة، وتغطي أهم بيئات التشغيل المحلية (Ollama وLM Studio وllama.cpp وvLLM وLocalAI وKoboldCpp وGPT4All وMLX وJan) وأهم واجهات البرمجة السحابية (OpenAI وAnthropic وGroq وTogether AI وOpenRouter) في مكان واحد، ونموذج التسعير — استخدام شخصي مجاني إضافة إلى رسوم لمرة واحدة قدرها 39 دولارًا لجهاز ثانٍ، دون اشتراك — واضح ومباشر. أما الميزتان اللتان تميّزان المنتج أكثر من غيرهما، حلقة التحقق ذات الخطوات الخمس ووضع العزل الشبكي ذو الطبقات التسع، فهما ادعاءان من الشركة المصنّعة وليسا عناصر خضعت لقياس أداء مستقل هنا — تعامل معهما كادعاءات يجب التحقق منها مقابل متطلبات مشروعك وشبكتك الخاصة، لا كضمانات. المطورون الذين يريدون بيئة تطوير موحّدة ويرتاحون لطبقة Quality Enforcement Layer مملوكة ينبغي تجربتها خلال الاختبار المفتوح المجاني الحالي؛ أما من يحتاج إلى مكدس مفتوح المصدر بالكامل، أو يريد الاستمرار في العمل داخل VS Code نفسه، فإن Continue.dev أو Cline أو Aider تخدمه بشكل أفضل.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[الموقع الرسمي لـBodega One Code](https://bodegaone.ai) — نظرة عامة على المنتج، وقائمة مزودي BYOLLM، وشروط التسعير والترخيص.',
          '[Bodega One Code (www)](https://www.bodegaone.ai) — موقع منتج معكوس.',
          '[إصدارات Bodega One Code على GitHub](https://github.com/BodegaoneAI/bodegaone-releases) — ملاحظات الإصدار وتاريخ عمليات البناء.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Continue.dev مقابل Cline مقابل Aider](/ar/power-local-llm/continue-dev-vs-cline-vs-aider-local) — ثلاث أدوات برمجة محلية مفتوحة المصدر تضاف إلى محرر موجود بدلاً من استبداله.',
          '[أفضل نماذج البرمجة المحلية في 2026](/ar/power-local-llm/best-local-coding-models-2026) — طبقة النماذج: أي النماذج المفتوحة الوزن تستخدمها مع أداة BYOLLM مثل Bodega One Code.',
          '[وكلاء الذكاء الاصطناعي المحليون باستخدام MCP في 2026](/ar/power-local-llm/local-ai-agents-with-mcp-2026) — للقراء الذين يقارنون قائمة أدوات Bodega One Code المدمجة بنظام أدوات مفتوح قائم على MCP.',
          '[استبدال GitHub Copilot بنموذج لغة محلي](/ar/power-local-llm/replace-github-copilot-with-local-llm) — سياق أوسع حول نقل المساعدة البرمجية بالذكاء الاصطناعي إلى نماذج محلية أو مستضافة ذاتيًا.',
          '[مركز Power Local LLM](/ar/power-local-llm) — مكتبة الأدلة الكاملة.',
        ],
      },
    },
  },
  ko: {
    theme: 'Coding Assistants',
    heroImage: '/images/bodega-one-code-review-2026-hero-ko.webp',
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-03',
    dateModified: '2026-09-03',
    next_refresh_due: '2027-03-03',
    educationalLevel: 'Intermediate',
    audience: '단일 공급업체에 종속되지 않고 직접 LLM 제공업체를 선택할 수 있는 로컬 우선 AI 코딩 IDE를 검토 중인 개발자',
    primaryTerm: 'Bodega One Code',
    title: 'Bodega One Code 리뷰(2026): 로컬 우선 BYOLLM 코딩 IDE',
    seoTitle: 'Bodega One Code 리뷰 2026: BYOLLM 코딩 IDE',
    intro:
      'Bodega One Code는 코드 편집기, AI 채팅 패널, 자율 코딩 에이전트를 하나의 애플리케이션으로 묶어 자신의 컴퓨터에서 실행하는 코딩 IDE입니다. 핵심 개념은 "직접 LLM 가져오기"(BYOLLM)입니다. 하나의 모델 제공업체에 고정되는 대신, Bodega One Code는 Ollama, LM Studio, llama.cpp 또는 OpenAI나 Anthropic 같은 클라우드 API를 가리키도록 설정할 수 있으며, 제조사에 따르면 앱을 재시작하지 않고도 제공업체를 전환할 수 있습니다. 이 리뷰는 Bodega One Code 자체 제품 페이지를 근거로 IDE에 포함된 내용, 제공업체 및 에이전트 시스템의 작동 방식, 현재 가격 및 라이선스 조건, 그리고 Continue.dev, Cline, Aider 같은 다른 로컬 지원 코딩 도구와의 비교를 다룹니다.',
    metaDescription:
      'Bodega One Code 리뷰: BYOLLM 제공업체 전환, Monaco 에디터, 자율 에이전트를 갖춘 로컬 우선 코딩 IDE. 가격, 라이선스, 에어갭 모드, Continue.dev·Cline·Aider와의 비교.',
    twitterDescription:
      'Bodega One Code 2026 리뷰: 로컬 우선 코딩 IDE, 10개 이상 제공업체를 지원하는 BYOLLM, Monaco 에디터, 자율 에이전트, 에어갭 모드. 가격, 라이선스 및 Continue.dev/Cline/Aider와의 비교.',
    readTime: '10분 소요',
    targetKeywords: [
      'bodega one code 리뷰',
      'bodega one code ide',
      'byollm 코딩 ide',
      'bodega one code 가격',
      'bodega one code vs cursor',
    ],
    leadAnswerBlock:
      '**Bodega One Code는 코드 편집기, AI 채팅, 자율 코딩 에이전트를 하나의 로컬 애플리케이션으로 결합하고, 단일 제공업체에 종속되지 않고 어떤 LLM을 사용할지 직접 선택하고 싶은 경우 검토할 가치가 있습니다.** 이 IDE는 10개가 넘는 제공업체 사전 설정을 통해 BYOLLM(직접 LLM 가져오기)을 지원합니다——로컬 추론용으로 Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, Jan, 클라우드 모델용으로 OpenAI, Anthropic, Groq, Together AI, OpenRouter——그리고 Bodega One Code에 따르면 앱을 재시작하지 않고도 제공업체 간 전환이 가능합니다. 현재 공개 베타 중이며 상업적 용도를 포함해 무료로 사용할 수 있습니다. 베타 종료 후에도 1대 기기에서의 개인 사용은 계속 무료이며, 39달러 일회성 결제로 두 번째 기기를 추가할 수 있고 구독은 없습니다.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Bodega One Code for local-first AI coding?',
        answer:
          'Use Bodega One Code if you want a single desktop IDE that runs an editor, AI chat, and an autonomous coding agent locally while letting you pick the LLM provider — local (Ollama, LM Studio, llama.cpp) or cloud (OpenAI, Anthropic, Groq). Weigh it against Continue.dev, Cline, or Aider if you already work inside VS Code and want an extension instead of a separate application, and note that the Quality Enforcement Layer and agentic orchestration are proprietary, not open source.',
        bullets: [
          'BYOLLM: 10+ provider presets, including Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, and Jan.',
          'Bodega One Code states providers can be switched without restarting the IDE.',
          'Monaco-based editor, tab autocomplete, Git integration, and 26 built-in tools for file operations, shell commands, and web search.',
          'Vendor-described 5-step verification loop (syntax, type checks, tests) runs after every agent change, and a 9-layer air-gap mode is offered for offline use — neither has been independently benchmarked by PromptQuorum.',
          'Free for personal use on one machine; a one-time $39 license covers a second machine (no subscription). Currently in open beta, free for everyone including commercial use during the beta.',
          'Licensing is proprietary: a Business Source License applies to some components after distribution, and the Quality Enforcement Layer plus agentic orchestration stay proprietary.',
        ],
        updatedDate: '2026-09-03',
      },
      ko: {
        question: '로컬 우선 AI 코딩에 Bodega One Code를 사용해야 할까요?',
        answer:
          '편집기, AI 채팅, 자율 코딩 에이전트를 로컬에서 실행하는 단일 데스크톱 IDE를 원하면서 LLM 제공업체——로컬(Ollama, LM Studio, llama.cpp) 또는 클라우드(OpenAI, Anthropic, Groq)——를 직접 선택하고 싶다면 Bodega One Code를 사용하세요. 이미 VS Code 안에서 작업 중이고 별도 애플리케이션 대신 확장 프로그램을 원한다면 Continue.dev, Cline, Aider와 비교해 보세요. 또한 Quality Enforcement Layer와 에이전트 오케스트레이션은 오픈소스가 아닌 독점 소프트웨어라는 점에 유의하세요.',
        bullets: [
          'BYOLLM: Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, Jan을 포함한 10개 이상의 제공업체 사전 설정.',
          'Bodega One Code에 따르면 IDE를 재시작하지 않고도 제공업체를 전환할 수 있습니다.',
          'Monaco 기반 에디터, Tab 자동완성, Git 통합, 파일 작업·셸 명령·웹 검색을 위한 26개의 내장 도구.',
          '제조사가 설명하는 5단계 검증 루프(문법, 타입 검사, 테스트)가 에이전트가 변경할 때마다 실행되고, 오프라인 사용을 위한 9계층 에어갭 모드가 제공되지만, 둘 다 PromptQuorum이 독립적으로 검증한 것은 아닙니다.',
          '1대 기기에서 개인 사용은 무료. 39달러 일회성 라이선스로 두 번째 기기 커버(구독 없음). 현재 공개 베타 중이며 상업적 용도를 포함해 베타 기간 동안 모두에게 무료.',
          '라이선스는 전반적으로 독점 소프트웨어입니다. 배포 후 일부 구성 요소에는 Business Source License가 적용되며, Quality Enforcement Layer와 에이전트 오케스트레이션은 독점 상태로 유지됩니다.',
        ],
        updatedDate: '2026-09-03',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: 'Bodega One Code란?', anchor: 'what-is-bodega-one-code' },
      { label: '어떤 LLM 제공업체를 지원하나요?', anchor: 'byollm-providers' },
      { label: '에디터에는 무엇이 포함되나요?', anchor: 'editor-and-tooling' },
      { label: '검증 루프란 무엇인가요?', anchor: 'quality-enforcement-loop' },
      { label: '에어갭 모드는 어떻게 작동하나요?', anchor: 'air-gap-mode' },
      { label: '가격 및 라이선스', anchor: 'licensing-and-pricing' },
      { label: '장단점', anchor: 'tradeoffs' },
      { label: 'Bodega One Code vs. 대안', anchor: 'vs-alternatives' },
      { label: '누구에게 적합한가', anchor: 'who-should-use' },
      { label: '누구에게 적합하지 않은가', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 자료', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bodega One Code는 로컬 우선 AI 코딩 IDE로, 개발자가 Ollama나 llama.cpp 같은 로컬 런타임부터 OpenAI, Anthropic 같은 클라우드 API까지 10개 이상의 제공업체 사전 설정을 통해 자신만의 LLM을 가져와 내장 채팅과 자율 코딩 에이전트를 구동할 수 있으며, 완전 오프라인 사용을 위한 에어갭 모드를 선택적으로 제공합니다.',
          },
          {
            type: 'plain-terms',
            text: '코드 편집기, AI 채팅 패널, 파일을 수정하고 명령을 실행할 수 있는 AI 에이전트를 하나의 데스크톱 앱으로 묶은 것으로, 자신의 컴퓨터에서든 클라우드에서든 어떤 AI 모델이 작업을 수행할지 직접 선택할 수 있습니다.',
          },
        ],
        items: [
          '코드 편집기, AI 채팅, 자율 코딩 에이전트를 하나의 로컬 애플리케이션에 결합하며 "직접 LLM 가져오기"(BYOLLM)를 중심으로 구축됨.',
          '10개 이상의 제공업체 사전 설정: Ollama, LM Studio, OpenAI, Anthropic, Groq, Together AI, OpenRouter, vLLM, llama.cpp, LocalAI, KoboldCpp, GPT4All, MLX, Jan.',
          '제조사에 따르면 애플리케이션을 재시작하지 않고도 제공업체를 전환할 수 있음.',
          'Monaco 기반 에디터(VS Code를 구동하는 것과 동일한 오픈소스 에디터 구성 요소), Tab 자동완성, Git 통합, 파일 작업·셸 명령·웹 검색을 아우르는 26개의 내장 도구.',
          '제조사가 설명하는 5단계 검증 루프가 에이전트가 변경할 때마다 실행됨: 변경 사항이 완료로 표시되기 전에 문법 검사, 타입 검사, 테스트를 거침.',
          'Bodega One Code에 따르면 에어갭 모드는 9개의 독립된 네트워크 강제 계층을 사용해 아웃바운드 연결을 차단하며, 완전 오프라인 운영이 필요한 사용 사례를 위한 것임.',
          '1대 기기에서 개인 사용은 무료. 39달러 일회성 Pro/상업용 라이선스로 두 번째 기기 추가(구독 없음). 현재 공개 베타 중이며 상업적 용도를 포함해 모두에게 무료.',
          '전반적으로 독점 라이선스——배포 후 일부 구성 요소에 Business Source License가 적용되며, Quality Enforcement Layer와 에이전트 오케스트레이션은 독점 상태로 유지됨.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 Bodega One Code가 bodegaone.ai와 GitHub 릴리스 저장소([github.com/BodegaoneAI/bodegaone-releases](https://github.com/BodegaoneAI/bodegaone-releases))에서 스스로 공개한 내용을 설명합니다. PromptQuorum은 검증 루프, 에어갭 모드, 제공업체 전환 지연 시간을 독립적으로 벤치마크하지 않았으며, PromptQuorum과 Bodega One Code 사이에는 제휴 또는 상업적 관계가 존재하지 않습니다.',
          },
        ],
      },
      whatIs: {
        id: 'what-is-bodega-one-code',
        title: 'Bodega One Code란?',
        content: [
          '**Bodega One Code는 에디터, AI 채팅 인터페이스, 자율 코딩 에이전트를 결합한 데스크톱 코딩 IDE로, 제조사가 아니라 개발자가 어떤 LLM이 작업을 수행할지 선택한다는 아이디어를 중심으로 설계되었습니다.** Bodega One Code는 이 접근 방식을 "직접 LLM 가져오기"(BYOLLM)라고 부릅니다. 애플리케이션 자체가 인터페이스와 도구 계층이며, 채팅 질문에 답하거나 코딩 에이전트를 구동하는 모델은 완전히 로컬 모델일 수도, 사용자가 선택한 호스팅형 클라우드 API일 수도 있습니다.',
          '이는 단일 모델 계열에 고정되어 제공되는 IDE의 기본 방식과는 다릅니다. Bodega One Code가 인터페이스를 모델 제공업체와 분리하기 때문에, 개발자는 최대 성능을 위해 OpenAI나 Anthropic 같은 클라우드 모델로 시작한 다음, 오프라인 작업이나 민감한 코드를 다룰 때는 애플리케이션을 바꾸지 않고도 동일한 워크플로를 Ollama나 llama.cpp 같은 로컬 런타임으로 옮길 수 있습니다.',
          '이 제품은 bodegaone.ai(www.bodegaone.ai에서도 접근 가능)를 통해 배포되며, 릴리스 빌드는 GitHub([github.com/BodegaoneAI/bodegaone-releases](https://github.com/BodegaoneAI/bodegaone-releases))에서 추적됩니다.',
        ],
      },
      byollmProviders: {
        id: 'byollm-providers',
        itemHeadings: true,
        title: 'Bodega One Code는 어떤 LLM 제공업체를 지원하나요?',
        content: [
          '**Bodega One Code에는 로컬 추론 런타임과 클라우드 API를 모두 아우르는 10개가 넘는 내장 제공업체 사전 설정이 포함되어 있습니다.** 사전 설정을 선택하면 에디터, 채팅, 에이전트가 해당 제공업체를 가리키게 됩니다. Bodega One Code에 따르면 활성 제공업체는 애플리케이션을 재시작하지 않고도 변경할 수 있습니다.',
        ],
        columns: ['제공업체', '카테고리', '설명'],
        rows: [
          { '제공업체': 'Ollama', '카테고리': '로컬 런타임', '설명': '인기 있는 로컬 모델 서버로, 개인 컴퓨터에서 오픈 웨이트 모델을 실행할 때 흔히 사용되는 기본 선택지.' },
          { '제공업체': 'LM Studio', '카테고리': '로컬 런타임', '설명': 'OpenAI 호환 로컬 API를 통해 로컬 모델을 다운로드하고 제공하는 데스크톱 앱.' },
          { '제공업체': 'llama.cpp', '카테고리': '로컬 런타임', '설명': '많은 로컬 모델 도구의 기반이 되는 C/C++ 추론 엔진으로, 직접 서버로 실행할 수 있음.' },
          { '제공업체': 'vLLM', '카테고리': '로컬 런타임', '설명': '워크스테이션 또는 서버급 자체 호스팅 배포에서 주로 사용되는 고처리량 추론 서버.' },
          { '제공업체': 'LocalAI', '카테고리': '로컬 런타임', '설명': '오픈 모델을 로컬에서 실행하기 위한, OpenAI API와 호환되는 자체 호스팅 추론 서버.' },
          { '제공업체': 'KoboldCpp', '카테고리': '로컬 런타임', '설명': 'llama.cpp 기반의 로컬 추론 서버로, 원래 로컬 롤플레이 및 창작 글쓰기 커뮤니티에서 인기가 있었음.' },
          { '제공업체': 'GPT4All', '카테고리': '로컬 런타임', '설명': '클라우드 연결 없이 오픈 모델을 실행하기 위한 데스크톱 앱 겸 로컬 추론 엔진.' },
          { '제공업체': 'MLX', '카테고리': '로컬 런타임', '설명': 'Apple Silicon에서 로컬 모델을 효율적으로 실행하는 데 사용되는 Apple의 배열 연산 프레임워크.' },
          { '제공업체': 'Jan', '카테고리': '로컬 런타임', '설명': '내장 또는 외부 추론 엔진을 통해 로컬 모델을 실행하는 ChatGPT 스타일의 오픈소스 데스크톱 앱.' },
          { '제공업체': 'OpenAI', '카테고리': '클라우드 API', '설명': 'OpenAI의 GPT 모델 계열에 대한 호스팅형 API 접근으로, OpenAI API 키와 인터넷 연결이 필요.' },
          { '제공업체': 'Anthropic', '카테고리': '클라우드 API', '설명': 'Anthropic의 Claude 모델 계열에 대한 호스팅형 API 접근으로, Anthropic API 키와 인터넷 연결이 필요.' },
          { '제공업체': 'Groq', '카테고리': '클라우드 API', '설명': '자체 LPU 하드웨어에서 오픈 모델을 낮은 지연 시간으로 제공하는 것으로 알려진 호스팅형 추론 API.' },
          { '제공업체': 'Together AI', '카테고리': '클라우드 API', '설명': '공유 클라우드 인프라에서 오픈 모델 카탈로그를 제공하는 호스팅형 추론 API.' },
          { '제공업체': 'OpenRouter', '카테고리': '클라우드 API', '설명': '하나의 엔드포인트와 키를 통해 여러 기반 모델 제공업체로 요청을 중계하는 호스팅형 API 라우터.' },
        ],
        note: '제공업체 사전 설정과 기본값은 Bodega One Code 릴리스마다 변경될 수 있습니다. 특정 사전 설정이 설치한 버전에서 여전히 사용 가능하다고 가정하기 전에 github.com/BodegaoneAI/bodegaone-releases의 릴리스 노트와 bodegaone.ai의 최신 제공업체 목록을 확인하세요.',
      },
      editorTooling: {
        id: 'editor-and-tooling',
        title: '에디터와 도구에는 무엇이 포함되나요?',
        content: [
          '**Bodega One Code의 핵심 에디터는 Visual Studio Code를 구동하는 것과 동일한 오픈소스 에디터 구성 요소인 Monaco를 기반으로 합니다.** 따라서 구문 강조, 다중 파일 편집, 키보드 중심 탐색은 VS Code나 그 포크에서 온 사람이라면 익숙하게 느껴질 것입니다.',
        ],
        items: [
          '**Tab 자동완성** — 입력하는 동안 트리거되는 인라인, 모델 기반 코드 완성으로, Copilot 스타일 도구의 완성 기능과 개념적으로 유사함.',
          '**Git 통합** — 별도의 터미널이나 Git 클라이언트 없이 IDE 내에서 소스 제어 작업을 사용할 수 있음.',
          '**26개의 내장 도구** — 에이전트는 파일 작업(읽기, 쓰기, 프로젝트 전체 검색), 셸 명령 실행, 웹 검색을 아우르는 고정된 도구 세트에 접근할 수 있으며, 코딩 작업을 완료하는 과정에서 이를 호출할 수 있음.',
          '**같은 애플리케이션 안의 채팅과 에이전트** — 질문을 위한 채팅 인터페이스와 여러 단계에 걸친 변경을 수행하는 자율 에이전트가 모두 같은 앱 안에서 실행되며 같은 설정된 LLM 제공업체를 사용할 수 있음.',
        ],
      },
      qualityEnforcement: {
        id: 'quality-enforcement-loop',
        title: '5단계 검증 루프란 무엇인가요?',
        content: [
          '**Bodega One Code는 에이전트가 수행한 모든 변경 사항이 완료로 표시되기 전에 거치는 5단계 검증 루프를 설명하며, 문법 검사, 타입 검사, 테스트를 포함합니다.** 이는 제조사 스스로가 자사의 Quality Enforcement Layer를 설명한 것이며, PromptQuorum은 그 정확도, 오탐률, 작업 완료 시간에 미치는 영향을 독립적으로 측정하지 않았습니다.',
          '제조사의 설명에 따른 실질적인 의미는, 에이전트가 깨진 문법, 타입 오류, 실패하는 테스트를 스스로 감지할 것으로 기대된다는 점이며, 이 검증을 나중에 개발자에게 전적으로 맡기지 않는다는 것입니다. 실제로 이것이 성립하는지는 프로젝트의 언어, 테스트 커버리지, 설정에 따라 달라지며, 이 리뷰에서는 이를 직접 테스트하지 않았습니다.',
          'Quality Enforcement Layer와 그것을 둘러싼 에이전트 오케스트레이션은 Bodega One Code의 독점 구성 요소이며, 배포 후 코드베이스의 다른 부분에 Business Source License가 적용되더라도 오픈소스 릴리스의 일부가 아닙니다.',
        ],
      },
      airGap: {
        id: 'air-gap-mode',
        title: '에어갭 모드는 어떻게 작동하나요?',
        content: [
          '**Bodega One Code는 제조사에 따르면 모든 아웃바운드 연결을 차단하기 위해 9개의 독립된 네트워크 강제 계층을 적용하는 에어갭 모드를 제공하며, IDE를 완전히 오프라인으로 실행해야 하는 개발자를 위한 것입니다.** 이는 코드, 프롬프트, 프로젝트 데이터가 로컬 머신을 절대 벗어나서는 안 되는 시나리오, 예를 들어 클라우드 폴백을 활성화하지 않은 완전 로컬 제공업체(Ollama, llama.cpp, LocalAI)를 사용하는 경우를 염두에 둔 것입니다.',
          'PromptQuorum은 9개 계층이 어떻게 구현되어 있는지 독립적으로 검증하지 않았으며, 모든 아웃바운드 경로를 차단하는 효과도 테스트하지 않았습니다. 진정한 에어갭 요구 사항(규제 데이터, 기밀 환경, 데이터 유출 금지 계약 조항)이 있는 개발자는 기능 이름만 믿기보다 외부 방화벽이나 네트워크 모니터 등을 사용해 스스로 네트워크 동작을 검증해야 합니다.',
        ],
      },
      licensingPricing: {
        id: 'licensing-and-pricing',
        itemHeadings: true,
        title: 'Bodega One Code의 비용과 라이선스는 어떻게 되나요?',
        content: [
          '**Bodega One Code는 현재 공개 베타 중이며, 제조사에 따르면 베타 기간 동안 상업적 용도를 포함해 모두에게 무료입니다.** 아래 가격은 제조사가 베타 종료 후 적용된다고 명시한 내용입니다.',
        ],
        columns: ['플랜', '가격', '기기 수', '비고'],
        rows: [
          { '플랜': '개인용', '가격': '무료', '기기 수': '1대', '비고': '제조사가 명시한 조건에 따른 개인, 비상업적 사용.' },
          { '플랜': 'Pro / 상업용', '가격': '39달러 일회성 결제', '기기 수': '2대', '비고': '제조사가 명시한 가격에 따른 일회성 결제, 구독 없음.' },
          { '플랜': '공개 베타(현재)', '가격': '무료', '기기 수': '베타 기간 중 제한 없음', '비고': '공개 베타가 활성화되어 있는 동안 상업적 용도를 포함해 모두에게 무료.' },
        ],
        note: '라이선스는 전반적으로 독점 소프트웨어입니다. 배포 후 코드베이스의 일부 구성 요소에는 Business Source License가 적용되며, Quality Enforcement Layer와 에이전트 오케스트레이션 계층은 라이선스 등급과 무관하게 독점 상태로 유지됩니다. 베타 조건과 가격이 변경될 수 있으므로, 구매 전에 bodegaone.ai에서 현재 가격, 베타 상태, 라이선스 조건을 직접 확인하세요.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점',
        columns: ['장점', '실제 의미', '제약 / 유의점'],
        rows: [
          {
            '장점': '제공업체 선택(BYOLLM)',
            '실제 의미': '단일 모델 공급업체에 종속되지 않고 프로젝트나 예산에 따라 로컬과 클라우드 제공업체를 전환할 수 있음.',
            '제약 / 유의점': '출력 품질은 여전히 전적으로 선택한 모델에 달려 있으며, 작은 로컬 모델은 최상위 클라우드 모델의 추론 능력을 따라잡지 못함.',
          },
          {
            '장점': '에디터, 채팅, 에이전트가 하나의 애플리케이션에',
            '실제 의미': '별도의 에디터와 별도의 AI 채팅 도구 사이를 전환할 필요가 없음.',
            '제약 / 유의점': 'VS Code 확장 프로그램이 아니라 독립 애플리케이션이므로, 기존 VS Code 설정에서 이전하려면 플러그인 추가가 아니라 새로운 앱을 도입해야 함.',
          },
          {
            '장점': '에어갭 옵션이 있는 로컬 우선',
            '실제 의미': '아웃바운드 네트워크 트래픽 없이 완전히 로컬 모델에 대해서만 작동하도록 구성할 수 있음.',
            '제약 / 유의점': '에어갭 모드의 효과와 검증 루프의 정확도는 제조사의 주장이며, 이 리뷰에서 독립적으로 테스트하지 않았음.',
          },
          {
            '장점': '구독형 가격 없음',
            '실제 의미': 'Pro/상업용 플랜에서 39달러 일회성 결제로 두 번째 기기를 커버하며, 1대 기기의 개인 사용은 무료.',
            '제약 / 유의점': '현재 공개 베타 중이며 모두에게 무료 접근이 제공되지만, 정식 출시 전에 베타 이후 가격과 조건이 바뀔 수 있음.',
          },
          {
            '장점': '26개의 내장 에이전트 도구',
            '실제 의미': '별도의 MCP 서버를 설정하지 않아도 파일 작업, 셸 명령, 웹 검색을 에이전트가 기본으로 사용할 수 있음.',
            '제약 / 유의점': '고정된 도구 세트는 서드파티가 새로운 도구를 추가할 수 있는 개방형 플러그인/MCP 생태계보다 확장성이 낮음.',
          },
          {
            '장점': '익숙한 편집 환경',
            '실제 의미': 'Monaco 기반 에디터와 Tab 자동완성은 VS Code 사용자에게 곧바로 익숙하게 느껴질 것.',
            '제약 / 유의점': 'Quality Enforcement Layer와 에이전트 오케스트레이션은 독점 소프트웨어라 검증 루프의 내부 동작을 확인하거나 수정할 수 없음.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Bodega One Code vs. Continue.dev, Cline, Aider',
        columns: ['도구', '링크', '형태', '모델 선택', '로컬 우선 설계', '핵심 차이'],
        rows: [
          {
            '도구': 'Bodega One Code',
            '링크': '[bodegaone.ai](https://bodegaone.ai)',
            '형태': '독립형 데스크톱 IDE(에디터+채팅+에이전트를 하나의 앱에)',
            '모델 선택': 'BYOLLM: 10개 이상 사전 설정, 로컬 및 클라우드',
            '로컬 우선 설계': '로컬 제공업체를 중심으로 구축되었으며 선택적 에어갭 모드 제공',
            '핵심 차이': '기존 에디터에 AI 계층만 추가하는 것이 아니라, 하나의 애플리케이션이 에디터 자체를 대체함. 핵심 에이전트 구성 요소는 독점 소프트웨어.',
          },
          {
            '도구': 'Continue.dev',
            '링크': '[docs.continue.dev](https://docs.continue.dev)',
            '형태': 'VS Code 및 JetBrains IDE용 오픈소스 확장 프로그램',
            '모델 선택': '로컬(Ollama, LM Studio) 또는 클라우드 제공업체로 설정 가능',
            '로컬 우선 설계': '전적으로 설정된 제공업체에 의존하며 전용 에어갭 기능은 없음',
            '핵심 차이': '이미 사용 중인 에디터에 AI 채팅과 자동완성을 추가하는 것으로, 에디터를 대체하지는 않음.',
          },
          {
            '도구': 'Cline',
            '링크': '[cline.bot](https://cline.bot)',
            '형태': 'VS Code 내 자율 에이전트용 오픈소스 확장 프로그램',
            '모델 선택': 'API 호환 엔드포인트를 통해 로컬 또는 클라우드 제공업체로 설정 가능',
            '로컬 우선 설계': '설정된 제공업체에 의존',
            '핵심 차이': 'VS Code 안에서 파일 편집과 명령에 대해 사람이 승인하는 방식의, 에이전트 중심 확장 프로그램.',
          },
          {
            '도구': 'Aider',
            '링크': '[aider.chat](https://aider.chat)',
            '형태': '터미널 기반의 오픈소스 AI 페어 프로그래밍 도구',
            '모델 선택': 'API 호환 엔드포인트를 통해 로컬 또는 클라우드 제공업체로 설정 가능',
            '로컬 우선 설계': '설정된 제공업체에 의존하며 자체 GUI 에디터는 없음',
            '핵심 차이': 'Git 커밋을 중심으로 구축된 커맨드라인 워크플로로, 내장된 편집 UI가 없음.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Bodega One Code가 적합한 사람',
        items: [
          '**에디터에 별도의 AI 계층을 더하는 대신 하나의 앱을 원하는 개발자.** AI 기능을 위해 VS Code 확장 프로그램 스택을 유지하는 것이 번거롭다면, 에디터·채팅·에이전트가 통합된 IDE가 설정과 유지 관리가 더 간단할 수 있습니다.',
          '**같은 프로젝트에서 로컬 모델과 클라우드 모델을 오가고 싶은 개발자.** 10개 이상의 사전 설정에 걸친 BYOLLM 지원 덕분에 클라우드 모델로 프로토타입을 만들고 도구를 바꾸지 않고도 로컬 모델로(또는 그 반대로) 이동할 수 있습니다.',
          '**비용이나 프라이버시 때문에 로컬 우선 도구를 검토하는 팀.** Ollama나 llama.cpp 같은 로컬 제공업체로만 완전히 운영하면 코드와 프롬프트가 제3자 서버에 노출되지 않으며, 선택적 에어갭 모드는 더 엄격한 데이터 유출 금지 요구 사항을 겨냥합니다.',
          '**구독보다 일회성 결제를 선호하는 사용자.** 반복되는 요금이 아니라 명시된 39달러 일회성 Pro/상업용 라이선스는 지속적인 AI 도구 구독을 피하고 싶은 개발자에게 맞을 수 있습니다.',
          '**베타 소프트웨어 평가에 익숙한 얼리어답터.** 현재의 공개 베타 기간에는 상업적 용도를 포함해 무료로 접근할 수 있어, 장기적으로 도입을 결정하기 전에 IDE를 테스트할 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Bodega One Code가 적합하지 않은 사람',
        items: [
          '**VS Code 자체 안에 머무르고 싶은 개발자.** Bodega One Code는 VS Code 확장 프로그램이 아니라 별도의 애플리케이션입니다——기존 VS Code 설정에 AI 기능을 추가해야 한다면 Continue.dev나 Cline이 더 적합합니다.',
          '**처음부터 끝까지 완전히 오픈소스인 도구가 필요한 팀.** Quality Enforcement Layer와 에이전트 오케스트레이션은 독점 소프트웨어이며, 배포 후 일부 구성 요소에는 Business Source License가 적용됩니다——모든 계층이 오픈소스여야 하는 팀(Aider, Continue.dev, Cline처럼)은 먼저 라이선스 조건을 검토해야 합니다.',
          '**신뢰하기 전에 검증 루프나 에어갭 모드에 대한 주장을 독립적으로 감사해야 하는 사람.** 이 리뷰는 Bodega One Code가 공개한 5단계 검증 루프와 9계층 에어갭 모드에 대한 내용을 전달할 뿐이며, 둘 다 PromptQuorum이 벤치마크하거나 보안 테스트를 수행하지 않았습니다. 규제 대상 또는 고보안 환경에서는 자체적으로 검증해야 합니다.',
          '**터미널 전용 워크플로가 필요한 사용자.** Bodega One Code는 에디터를 중심으로 구축된 GUI 애플리케이션입니다——커맨드라인 중심의 페어 프로그래밍 도구를 선호하는 개발자는 대신 Aider를 검토해야 합니다.',
          '**현재의 무료 베타 가격을 장기적인 보장으로 여기고 계획을 세우는 사람.** 베타 이후 가격과 라이선스 조건은 제조사가 밝힌 의도일 뿐 계약상의 보장이 아닙니다——이를 근거로 예산을 세우기 전에 bodegaone.ai에서 현재 조건을 확인하세요.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Bodega One Code는 무엇인가요?',
            a: 'Bodega One Code는 코드 편집기, AI 채팅 패널, 자율 코딩 에이전트를 하나의 로컬 애플리케이션으로 결합한 데스크톱 코딩 IDE입니다. 가장 두드러진 특징은 BYOLLM(직접 LLM 가져오기)으로, 개발자가 채팅과 에이전트를 구동할 모델 제공업체——로컬 또는 클라우드——를 직접 선택합니다.',
          },
          {
            q: 'BYOLLM은 무슨 의미인가요?',
            a: 'BYOLLM은 "직접 LLM 가져오기(Bring Your Own LLM)"의 약자입니다. 하나의 모델 공급업체에 고정된 IDE 대신, Bodega One Code는 내장 제공업체 사전 설정을 통해 Ollama나 llama.cpp 같은 로컬 런타임, 또는 OpenAI나 Anthropic 같은 클라우드 API 등 원하는 제공업체에 연결할 수 있습니다.',
          },
          {
            q: 'Bodega One Code는 어떤 LLM 제공업체를 지원하나요?',
            a: 'Bodega One Code에는 로컬 추론을 위한 Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, Jan과 클라우드 API를 위한 OpenAI, Anthropic, Groq, Together AI, OpenRouter 등 10개 이상의 제공업체 사전 설정이 포함되어 있습니다. Bodega One Code에 따르면 앱을 재시작하지 않고도 이들 사이를 전환할 수 있습니다.',
          },
          {
            q: 'Bodega One Code는 무료인가요?',
            a: '제조사에 따르면 Bodega One Code는 현재 공개 베타 중이며 상업적 용도를 포함해 모두에게 무료입니다. 베타 이후 제조사가 명시한 조건은 다음과 같습니다: 1대 기기에서의 개인 사용은 계속 무료이며, 두 대의 기기를 커버하는 Pro/상업용 라이선스는 39달러 일회성 결제이고 구독은 없습니다.',
          },
          {
            q: 'Bodega One Code는 오픈소스인가요?',
            a: '완전히는 아닙니다. 배포 후 일부 구성 요소에는 Business Source License가 적용되지만, Quality Enforcement Layer와 에이전트 오케스트레이션 계층은 독점 소프트웨어이며 앞으로도 그럴 것입니다. 완전히 오픈소스인 로컬 코딩 도구가 필요한 개발자는 Continue.dev, Cline, Aider 같은 대안을 검토해야 합니다.',
          },
          {
            q: 'Bodega One Code는 어떤 에디터를 사용하나요?',
            a: 'Bodega One Code는 Visual Studio Code가 사용하는 것과 동일한 오픈소스 에디터 구성 요소인 Monaco를 기반으로 구축되었으며, Tab 자동완성, Git 통합, 그리고 에이전트가 사용할 수 있는 파일 작업·셸 명령·웹 검색용 26개의 내장 도구를 추가합니다.',
          },
          {
            q: '5단계 검증 루프란 무엇인가요?',
            a: 'Bodega One Code가 에이전트의 모든 변경 사항 이후 실행된다고 설명하는 품질 검사 과정으로, 변경 사항이 완료로 표시되기 전에 문법 검사, 타입 검사, 테스트를 포함합니다. 이는 자사의 Quality Enforcement Layer에 대한 제조사 자체 설명이며, PromptQuorum은 그 정확도를 독립적으로 검증하지 않았습니다.',
          },
          {
            q: 'Bodega One Code의 에어갭 모드란 무엇인가요?',
            a: '에어갭 모드는 Bodega One Code가 9개의 네트워크 제어 계층을 적용해 모든 아웃바운드 연결을 차단한다고 설명하는 설정으로, IDE를 완전히 오프라인으로 실행해야 하는 개발자를 위한 것입니다. PromptQuorum은 9개 계층이 아웃바운드 트래픽을 얼마나 완전하게 차단하는지 독립적으로 테스트하지 않았습니다——진정한 데이터 유출 금지 요구 사항이 있는 환경이라면 직접 확인하세요.',
          },
          {
            q: 'Bodega One Code는 Continue.dev, Cline, Aider와 비교해 어떤가요?',
            a: 'Continue.dev와 Cline은 기존 VS Code(또는 JetBrains) 설치에 AI 채팅, 자동완성, 또는 자율 에이전트를 추가하는 오픈소스 확장 프로그램입니다. Aider는 내장 에디터가 없는, 터미널 기반의 오픈소스 AI 페어 프로그래밍 도구입니다. Bodega One Code는 에디터 자체를 채팅 및 에이전트와 함께 결합한 독립적인 별도 애플리케이션이며, 핵심 Quality Enforcement Layer와 에이전트 오케스트레이션은 오픈소스가 아닌 독점 소프트웨어입니다.',
          },
          {
            q: 'Bodega One Code를 완전히 오프라인으로 사용할 수 있나요?',
            a: '네. 로컬 제공업체(Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, Jan)를 사용하도록 설정하고, Bodega One Code가 9개의 강제 계층을 통해 아웃바운드 네트워크 연결을 차단한다고 설명하는 에어갭 모드를 활성화하면 가능합니다. 클라우드 제공업체(OpenAI, Anthropic, Groq, Together AI, OpenRouter)를 사용하려면 이 설정과 무관하게 인터넷 연결이 필요합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Bodega One Code의 핵심 아이디어——에디터, AI 채팅, 자율 에이전트를 하나의 로컬 애플리케이션으로 결합하고 모델 제공업체 선택을 전적으로 개발자에게 맡기는 것——은 단일 공급업체에 종속된 AI IDE와 직접 제공업체 설정을 조립해야 하는 최소한의 확장 프로그램 사이의 실질적인 공백을 메웁니다. BYOLLM 제공업체 목록은 폭넓어서 주요 로컬 런타임(Ollama, LM Studio, llama.cpp, vLLM, LocalAI, KoboldCpp, GPT4All, MLX, Jan)과 주요 클라우드 API(OpenAI, Anthropic, Groq, Together AI, OpenRouter)를 한곳에서 다루며, 가격 모델——무료 개인 사용에 더해 두 번째 기기를 위한 39달러 일회성 요금, 구독 없음——도 직관적입니다. 제품을 가장 차별화하는 두 기능인 5단계 검증 루프와 9계층 에어갭 모드는 이곳에서 독립적으로 벤치마크된 것이 아니라 제조사가 설명한 내용이므로, 보장이 아니라 자신의 프로젝트 및 네트워크 요구 사항에 비추어 검증해야 할 주장으로 다뤄야 합니다. 통합 IDE를 원하고 독점 소프트웨어인 Quality Enforcement Layer를 받아들일 수 있는 개발자라면 현재의 무료 공개 베타 기간에 시도해 볼 만합니다. 완전히 오픈소스인 스택이 필요하거나 VS Code 자체 안에서 계속 작업하고 싶은 사용자에게는 Continue.dev, Cline, Aider가 더 적합합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Bodega One Code 공식 사이트](https://bodegaone.ai) — 제품 개요, BYOLLM 제공업체 목록, 가격 및 라이선스 조건.',
          '[Bodega One Code(www)](https://www.bodegaone.ai) — 미러 제품 사이트.',
          '[GitHub의 Bodega One Code 릴리스](https://github.com/BodegaoneAI/bodegaone-releases) — 릴리스 노트 및 빌드 이력.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Continue.dev vs. Cline vs. Aider](/ko/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 기존 에디터를 대체하지 않고 확장하는 세 가지 오픈소스 로컬 코딩 도구.',
          '[2026년 최고의 로컬 코딩 모델](/ko/power-local-llm/best-local-coding-models-2026) — 모델 계층: Bodega One Code 같은 BYOLLM 도구에 연결할 오픈 웨이트 모델.',
          '[2026년 MCP를 활용한 로컬 AI 에이전트](/ko/power-local-llm/local-ai-agents-with-mcp-2026) — Bodega One Code의 내장 도구 목록을 개방형 MCP 기반 도구 생태계와 비교하고 싶은 독자를 위한 자료.',
          '[GitHub Copilot을 로컬 LLM으로 대체하기](/ko/power-local-llm/replace-github-copilot-with-local-llm) — AI 코딩 지원을 로컬 또는 자체 호스팅 모델로 옮기는 것에 대한 더 넓은 맥락.',
          '[Power Local LLM 허브](/ko/power-local-llm) — 전체 가이드 라이브러리.',
        ],
      },
    },
  },
}

// OpenMausBot Review: open-source desktop chat app that runs a team of AI bots on agent CLIs, and whether it can run on local AI
// Slug: openmausbot-review
// Companion to: multica-review, mission-control-review, agent-zero-review, atomic-bot-review, ollama-review, lm-studio-review
// Facts verified 2026-11-14 against github.com/milind-soni/OpenMausBot (README, docs/custom-engines.md, apps/docs model-providers.mdx, server/drivers/local-inject.ts, Releases API)
// and mausbot.com (home, /download, /pricing, /privacy, /terms). No hands-on test: the app was not installed and no local model was run through it. The YouTube video was NOT watched or verified.
// Stale-project warning is OFF (release v0.1.155 on 2026-11-13).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { starsFor } from '@/lib/power-local-llm/app-facts'

const ST = {
  en: starsFor('en'), de: starsFor('de'), fr: starsFor('fr'), ja: starsFor('ja'), zh: starsFor('zh'),
  es: starsFor('es'), pt: starsFor('pt'), ar: starsFor('ar'), ko: starsFor('ko'),
}

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-14',
    dateModified: '2026-11-14',
    next_refresh_due: '2027-05-14',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openmausbot-review-hero-en.webp',
    title: 'OpenMausBot Review: Is This Open-Source Grok Bot Local AI?',
    seoTitle: 'OpenMausBot Review: Open-Source Grok Bot, Local AI?',
    intro: "OpenMausBot (also called MausBot, formerly OpenGrokBot) is a free, open-source desktop chat app in which every contact is an AI agent. It is not a local AI by itself: it drives the Claude, Codex and Grok command-line agents you already have, and those are cloud models. Its source code and documentation show that local models can be connected as well, through Ollama, LM Studio or any OpenAI-compatible address. This review answers that question first, then covers installation, price, privacy and alternatives, using the project's own repository and website. PromptQuorum did not install the app or run a local model through it.",
    metaDescription: 'OpenMausBot review: open-source Grok Bot alternative on Claude, Codex or Grok agents. Not local by default; Ollama and LM Studio can connect. Free.',
    twitterDescription: 'OpenMausBot review: a free open-source team of AI bots for your desktop. Is it local AI? Cloud agents by default, local models possible. Price, privacy, limits.',
    audience: 'People who saw the open-source Grok Bot alternative and want to know whether it is local, what it costs, and whether Ollama or LM Studio models can drive it.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenMausBot review',
    targetKeywords: [
      'openmausbot review',
      'openmausbot',
      'mausbot',
      'open source grok bot alternative',
      'openmausbot local llm',
      'openmausbot ollama',
      'openmausbot lm studio',
      'ai agent team desktop app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows',
      'Ubuntu',
    ],
    leadAnswerBlock: "**OpenMausBot is a free, Apache 2.0 desktop chat app for a team of AI bots, and it is not a local AI by default: its bots run on the Claude, Codex or Grok command-line agents you have installed, which are cloud models.** The project's source and docs show that local models can be connected through Ollama, LM Studio and other OpenAI-compatible servers, which PromptQuorum did not test.",
    quickAnswerTop: {
      en: {
        question: 'Is OpenMausBot a local AI, or can local AI run it?',
        answer: 'The app itself runs on your computer and keeps chats, keys and events in a folder there, but it ships no model. By default each bot uses an agent CLI such as Claude or Codex, which sends your prompts to that vendor. The repository also lists local hosts it probes, including Ollama and LM Studio, so a local model can be selected for a bot. How well small local models handle its tool-heavy agent work is untested here.',
        bullets: [
          'Default path: the claude, codex and grok CLIs you have already signed in to; provider fees and limits apply.',
          'Local path: Ollama, LM Studio, oMLX, EXO and Unsloth servers on this computer, or any OpenAI-compatible address.',
          'The app is free; an optional paid Cloud plan adds an always-on cloud machine and does not include AI usage.',
          'Installers exist for macOS, Windows and Ubuntu; the Windows installer is unsigned and Ubuntu is a beta.',
          'The video linked below is third-party and was not verified by PromptQuorum.',
        ],
        updatedDate: '2026-11-14',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get OpenMausBot', anchor: 'get-it' },
      { label: 'OpenMausBot at a Glance', anchor: 'at-a-glance' },
      { label: 'What OpenMausBot Is', anchor: 'what-is-openmausbot' },
      { label: 'Is It Local AI?', anchor: 'is-it-local' },
      { label: 'The Video', anchor: 'video' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'OpenMausBot vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use OpenMausBot', anchor: 'who-should-use' },
      { label: 'Who Should Not Use OpenMausBot', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenMausBot is an open-source chat app that manages a team of AI agents on your computer, using cloud agents by default and local models only if you connect them.',
          },
          {
            type: 'plain-terms',
            text: 'Think of a messaging app where every contact is an AI worker: the app is yours and open, but the brain behind each contact is whichever model you plug in.',
          },
        ],
        items: [
          'Local or not: the app and its data folder are local; the default agents are not, and local models are an optional connection.',
          'License and maker: Apache 2.0, published by Supamaus Software Private Limited, a company incorporated in India; an enterprise folder has its own source-available licence.',
          'Cost: the app is free, model usage is billed by your own provider, and optional Cloud plans start at $15 per month.',
          'Maintenance: version 0.1.155 was released on 13 November 2026, so the project is actively updated, but it is a young 0.1.x line created in August 2026.',
          'Caveats: unsigned Windows installer, Ubuntu in beta, and no local-model test by PromptQuorum.',
        ],
      },
      getItOpenMausBot: {
        id: 'get-it',
        title: 'Get OpenMausBot',
        content: [
          '**OpenMausBot installs like any desktop app, so no terminal is needed.** The releases page and the official site offer the same installers, and the harness server is embedded in them.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Mac (Apple silicon)',
            'Get It': '[OpenMausBot.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.dmg) — signed and notarized, per the README',
          },
          {
            Platform: 'Mac (Intel)',
            'Get It': '[OpenMausBot-intel.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-intel.dmg)',
          },
          {
            Platform: 'Windows (x64)',
            'Get It': '[OpenMausBot-setup.exe](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-setup.exe) — not code-signed yet; SmartScreen shows "unknown publisher"',
          },
          {
            Platform: 'Ubuntu 24.04 (x64, beta)',
            'Get It': '[OpenMausBot-amd64.deb](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-amd64.deb) or [AppImage](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.AppImage)',
          },
          {
            Platform: 'Terminal or server',
            'Get It': '`npx openmausbot` (Node 24+) — see the README for `serve` options',
          },
          {
            Platform: 'Website',
            'Get It': '[mausbot.com](https://mausbot.com/) (openmausbot.com redirects there)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[MausBot privacy policy](https://mausbot.com/privacy)',
          },
          {
            Platform: 'Source code',
            'Get It': '[github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) — Apache 2.0',
          },
        ],
        note: 'Android and iOS companion apps are described as remote controls for a running desktop or server and are shared through the project\'s Discord, not through the app stores. You also need at least one agent CLI installed and signed in (Claude, Codex or Grok), or a connected model server.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'OpenMausBot at a Glance',
        columns: ['Attribute', 'OpenMausBot'],
        rows: [
          { Attribute: 'Platform', OpenMausBot: 'macOS, Windows x64, Ubuntu 24.04 x64 (beta)' },
          { Attribute: 'Price', OpenMausBot: 'Free app; optional Cloud $15, $49 or $99 per month' },
          { Attribute: 'License', OpenMausBot: 'Apache 2.0 (enterprise folder separate)' },
          { Attribute: 'Runs', OpenMausBot: 'App and data on your computer; models via agent CLIs or connected servers' },
          { Attribute: 'Local models', OpenMausBot: 'Possible through Ollama, LM Studio and OpenAI-compatible servers; untested by PromptQuorum' },
          { Attribute: 'Own model included', OpenMausBot: 'No' },
          { Attribute: 'Approval prompts', OpenMausBot: 'Yes, for shell commands, file edits and questions' },
          { Attribute: 'MCP server and CLI', OpenMausBot: 'Both listed in the README' },
        ],
        note: 'Attributes come from the README, the docs and the website as read on 14 November 2026. A missing statement means unknown, not unsupported.',
      },
      whatIsOpenMausBot: {
        id: 'what-is-openmausbot',
        title: 'What OpenMausBot Is',
        content: [
          '**OpenMausBot is a chat app where each bot is a real agent with its own personality, model, computer and connected apps.** The README describes it as an independent, open-source project inspired by xAI\'s Grok Bot, formerly named OpenGrokBot and also called MausBot, and says it is not affiliated with xAI, Meta, OpenAI or Manus.',
          `It is published by Supamaus Software Private Limited, which the terms page calls a company incorporated in India; the repository belongs to the developer Milind Soni. The repository page on GitHub shows ${ST.en('openmausbot')} stars. The README also states that the project has no token and that any coin using its name is unrelated.`,
        ],
      },
      isItLocal: {
        id: 'is-it-local',
        itemHeadings: true,
        title: 'Is It Local AI?',
        content: [
          '**The app is local, the default models are not, and local models are an opt-in.** Three layers answer the question separately.',
        ],
        columns: ['Layer', 'Where it runs', 'Source'],
        rows: [
          {
            Layer: 'App, harness server and data',
            'Where it runs': 'On your computer: a small server on 127.0.0.1, with transcripts, keys and events in ~/.openmausbot',
            Source: 'README, "Why" section',
          },
          {
            Layer: 'Default agents (Claude, Codex, Grok)',
            'Where it runs': 'The vendors\' cloud models, reached through the CLIs you installed and signed in to; your prompts go to that vendor',
            Source: 'README, "Bring your own agents"',
          },
          {
            Layer: 'Local models (Ollama, LM Studio, oMLX, EXO, Unsloth)',
            'Where it runs': 'On your computer or network, when a server answers on its default local address and you pick its model for a bot',
            Source: 'Repository file server/drivers/local-inject.ts; docs/custom-engines.md',
          },
          {
            Layer: 'Cloud computers and connected apps',
            'Where it runs': 'Optional: a hosted Linux desktop and Composio connections to Gmail, Slack and similar; a Local VM is also offered',
            Source: 'README, "Agents with hands"',
          },
        ],
        note: 'The local-model row rests on the repository\'s source and documentation. PromptQuorum did not run a local model through OpenMausBot, so reply quality, tool use and speed with small models are unknown. The built-in engine for OpenAI-compatible services is, per the docs, labelled "OpenAI-compatible (OpenRouter / Groq)" in the model picker.',
      },
      video: {
        id: 'video',
        title: 'The Video',
        youtubeUrl: 'https://www.youtube.com/watch?v=_rQPVOpjljE',
        content: [
          '**This is a third-party video titled "NEW Open Source Grok Bot is INSANE (FREE!)".** It is embedded here because readers asked about OpenMausBot after seeing it. PromptQuorum did not review its claims, and its title is a creator\'s opinion, not a finding of this review. Use the sections above and the project\'s own pages for facts.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, one agent and one bot.** The steps follow the README and the download page.',
        ],
        numberedItems: [
          {
            title: 'Install an agent first',
            whyItMatters: 'Install and sign in to at least one of the claude, codex or grok CLIs. For a local model, start Ollama or LM Studio instead and pull a model.',
          },
          {
            title: 'Install OpenMausBot',
            whyItMatters: 'Open the .dmg and drag the app to Applications, run the Windows installer (no administrator rights needed), or install the .deb with apt.',
          },
          {
            title: 'Create a bot and pick its model',
            whyItMatters: 'Installed CLIs appear in the model picker automatically; local hosts that answer on their default address are listed under Custom.',
          },
          {
            title: 'Approve what matters',
            whyItMatters: 'Shell commands, file edits and questions arrive as cards in the chat that you allow or deny.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on a roster of agents you manage like contacts.** Everything below comes from the README and the docs.',
        ],
        items: [
          '**A model per bot.** Claude and Codex models side by side in one picker, switchable mid-conversation.',
          '**Approval cards.** A permission broker turns risky actions into decisions you make for cloud and local computers alike.',
          '**Computers for bots.** A cloud desktop, an isolated Local VM or, after explicit opt-in, your own computer on macOS and Ubuntu Xorg.',
          '**Connected apps.** Composio gives access to Gmail, Slack, GitHub, Notion and hundreds more after one OAuth sign-in.',
          '**Channels, teams and routines.** Separate channels per context, installable team files, and scheduled or app-event triggers.',
          '**Voice.** Spoken replies and calls through ElevenLabs, Fish Audio, Grok, built-in Mac voices or a local Chatterbox server.',
          '**Automation.** A stdio MCP server for Claude Desktop or Cursor and an `openmausbot` command for scripts and CI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy says the desktop app runs on your machine and your conversations stay there, while the website uses analytics you can switch off.** Optional usage analytics in the app are anonymous and can be turned off in settings. Anything you send to a cloud agent, a Cloud computer or a connected app is handled by that service under its own terms.',
          'The app is free under Apache 2.0, with a separate source-available licence for the enterprise folder. Optional MausBot Cloud plans cost $15, $49 or $99 per month and do not include AI usage; your own Claude, ChatGPT or API plan pays for the models. Keys saved by the packaged desktop app are encrypted by the operating system, while the terminal setup stores API keys as plaintext in a private config file, according to the README.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Open source, Apache 2.0',
            'What it means in real use': 'The code, drivers and docs can be read and changed.',
            'Limitation / caveat': 'An enterprise folder has a different licence.',
          },
          {
            Benefit: 'Bring your own agents',
            'What it means in real use': 'Uses your existing Claude, Codex or Grok sign-ins without a proxy.',
            'Limitation / caveat': 'Those are cloud models, so it is not private by default.',
          },
          {
            Benefit: 'Local model option',
            'What it means in real use': 'Ollama, LM Studio and other servers can be picked per bot.',
            'Limitation / caveat': 'Untested by PromptQuorum; small models may struggle with tool-heavy agent work.',
          },
          {
            Benefit: 'Approval cards',
            'What it means in real use': 'Risky actions wait for your decision.',
            'Limitation / caveat': 'Bots with computer access still need careful review of each request.',
          },
          {
            Benefit: 'Fast-moving project',
            'What it means in real use': 'Version 0.1.155 shipped on 13 November 2026.',
            'Limitation / caveat': 'Very young: created in August 2026, 0.1.x, and Ubuntu is still beta.',
          },
          {
            Benefit: 'Free app',
            'What it means in real use': 'No account is needed for the desktop app.',
            'Limitation / caveat': 'Model fees are yours; Windows installer is unsigned.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'OpenMausBot vs. Alternatives',
        content: [
          'These are the closest agent-orchestration and personal-agent tools in the directory.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'OpenMausBot',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, Apache 2.0',
            Role: 'Chat-style team of agents',
            'Key difference': 'Messaging-app interface over Claude, Codex and Grok CLIs',
          },
          {
            App: '[Multica](/power-local-llm/multica-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Freemium, source-available',
            Role: 'Workspace for assigning coding-agent work',
            'Key difference': 'Task board for coding agents, self-hosted',
          },
          {
            App: '[Mission Control](/power-local-llm/mission-control-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Control plane for agent runs',
            'Key difference': 'Tracks runs and spend across agent runtimes',
          },
          {
            App: '[Atomic Bot](/power-local-llm/atomic-bot-review)',
            Platforms: 'Mac, Windows, Linux, iOS, Android',
            'Price and license': 'Freemium, MIT',
            Role: 'Personal AI coworker',
            'Key difference': 'Packages the OpenClaw stack; runs locally or in the cloud',
          },
          {
            App: '[Agent Zero](/power-local-llm/agent-zero-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Autonomous agent',
            'Key difference': 'One autonomous agent, not a roster of bots',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use OpenMausBot',
        items: [
          '**People who already pay for Claude, Codex or Grok.** The app reuses those sign-ins.',
          '**Users who want several agents in one chat app.** Each bot has its own model and role.',
          '**Tinkerers with Ollama or LM Studio.** The documented local hosts make an experiment possible.',
          '**Teams that want approval prompts.** Risky actions wait for a decision.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use OpenMausBot',
        items: [
          '**Anyone who needs everything offline by default.** The default agents are cloud models.',
          '**Anyone who needs a mature tool.** It is a 0.1.x project from August 2026.',
          '**Users who cannot accept an unsigned Windows installer.** SmartScreen will warn.',
          '**Anyone who expects a tested local-model setup.** PromptQuorum has not run one.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I run OpenMausBot completely offline?',
            a: 'Only if every bot uses a local model server on your computer. The default Claude, Codex and Grok agents need the internet, and PromptQuorum did not test an offline setup.',
          },
          {
            q: 'Which local model servers does it recognise?',
            a: 'The source lists oMLX, Ollama, EXO, LM Studio and Unsloth on their default local addresses, and the docs describe a built-in engine for any OpenAI-compatible address.',
          },
          {
            q: 'Is OpenMausBot made by xAI?',
            a: 'No. The README says it is an independent project inspired by Grok Bot, not affiliated with xAI, Meta, OpenAI or Manus.',
          },
          {
            q: 'Is there a crypto token?',
            a: 'No. The README states that the project has no token and that coins using its name are not affiliated with it.',
          },
          {
            q: 'Is the video in this review an official demo?',
            a: 'PromptQuorum could not confirm who made it. It is a third-party video with an enthusiastic title, linked as context and not verified.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'OpenMausBot is a good fit if you already use Claude, Codex or Grok and want a chat-style team of agents on your own computer with approval prompts and an open licence. It is not a local AI by default, and anyone who wants fully local operation should treat the Ollama and LM Studio route as an experiment.',
          'The caveats are maturity and verification: a project created in August 2026, an unsigned Windows installer, a beta Ubuntu build, and no local-model test here. Try it with one bot before relying on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenMausBot repository and README](https://github.com/milind-soni/OpenMausBot) — features, engines, licence and install steps.',
          '[Bring your own engine](https://github.com/milind-soni/OpenMausBot/blob/main/docs/custom-engines.md) — custom ACP and OpenAI-compatible engines.',
          '[Other model providers](https://github.com/milind-soni/OpenMausBot/blob/main/apps/docs/content/docs/providers/model-providers.mdx) — chat engine and OpenCode routes.',
          '[Local host list in the source](https://github.com/milind-soni/OpenMausBot/blob/main/server/drivers/local-inject.ts) — Ollama, LM Studio, oMLX, EXO and Unsloth addresses.',
          '[Releases](https://github.com/milind-soni/OpenMausBot/releases) — version 0.1.155, 13 November 2026, and installer files.',
          '[MausBot website](https://mausbot.com/) — download, pricing, privacy policy and terms.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Multica Review](/power-local-llm/multica-review) — a self-hosted workspace for assigning work to coding agents.',
          '[Mission Control Review](/power-local-llm/mission-control-review) — a control plane for agent runs and spend.',
          '[Atomic Bot Review](/power-local-llm/atomic-bot-review) — a personal AI coworker that runs locally or in the cloud.',
          '[Ollama Review](/power-local-llm/ollama-review) — the local model server OpenMausBot can connect to.',
          '[LM Studio Review](/power-local-llm/lm-studio-review) — a desktop app that serves local models over an OpenAI-compatible address.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-14',
    dateModified: '2026-11-14',
    next_refresh_due: '2027-05-14',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openmausbot-review-hero-de.webp',
    title: 'OpenMausBot Rezension: Ist der Open-Source-Grok-Bot lokale KI?',
    seoTitle: 'OpenMausBot Rezension: Open-Source-Grok-Bot, lokale KI?',
    intro: 'OpenMausBot (auch MausBot genannt, früher OpenGrokBot) ist eine kostenlose, quelloffene Desktop-Chat-App, in der jeder Kontakt ein KI-Agent ist. Sie ist von sich aus keine lokale KI: Sie steuert die Kommandozeilen-Agenten von Claude, Codex und Grok, die Sie bereits haben, und das sind Cloud-Modelle. Quellcode und Dokumentation zeigen, dass sich auch lokale Modelle anbinden lassen, über Ollama, LM Studio oder jede OpenAI-kompatible Adresse. Diese Rezension beantwortet zuerst diese Frage und behandelt dann Installation, Preis, Datenschutz und Alternativen, gestützt auf das Repository und die Website des Projekts. PromptQuorum hat die App nicht installiert und kein lokales Modell damit betrieben.',
    metaDescription: 'OpenMausBot Rezension: Open-Source-Alternative zum Grok Bot auf Claude-, Codex- oder Grok-Agenten. Standardmäßig nicht lokal; Ollama möglich. Gratis.',
    twitterDescription: 'OpenMausBot Rezension: ein kostenloses, quelloffenes Team aus KI-Bots für Ihren Desktop. Ist es lokale KI? Standardmäßig Cloud-Agenten, lokale Modelle möglich. Preis, Datenschutz, Grenzen.',
    audience: 'Menschen, die die quelloffene Grok-Bot-Alternative gesehen haben und wissen möchten, ob sie lokal ist, was sie kostet und ob sich Modelle von Ollama oder LM Studio damit betreiben lassen.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenMausBot review',
    targetKeywords: [
      'openmausbot rezension',
      'openmausbot',
      'mausbot',
      'open source grok bot alternative',
      'openmausbot lokales llm',
      'openmausbot ollama',
      'openmausbot lm studio',
      'ki-agenten-team desktop-app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows',
      'Ubuntu',
    ],
    leadAnswerBlock: '**OpenMausBot ist eine kostenlose Desktop-Chat-App unter Apache 2.0 für ein Team aus KI-Bots und standardmäßig keine lokale KI: Ihre Bots laufen auf den Kommandozeilen-Agenten von Claude, Codex oder Grok, die Sie installiert haben, und das sind Cloud-Modelle.** Quellcode und Dokumentation des Projekts zeigen, dass sich lokale Modelle über Ollama, LM Studio und andere OpenAI-kompatible Server anbinden lassen; PromptQuorum hat das nicht getestet.',
    quickAnswerTop: {
      de: {
        question: 'Ist OpenMausBot eine lokale KI, oder kann lokale KI damit laufen?',
        answer: 'Die App selbst läuft auf Ihrem Computer und speichert Chats, Schlüssel und Ereignisse dort in einem Ordner, bringt aber kein Modell mit. Standardmäßig nutzt jeder Bot einen Agenten-CLI wie Claude oder Codex, der Ihre Prompts an den jeweiligen Anbieter sendet. Das Repository führt außerdem lokale Hosts auf, die es prüft, darunter Ollama und LM Studio; für einen Bot lässt sich also ein lokales Modell wählen. Wie gut kleine lokale Modelle mit der werkzeugintensiven Agentenarbeit zurechtkommen, wurde hier nicht getestet.',
        bullets: [
          'Standardweg: die CLIs claude, codex und grok, bei denen Sie bereits angemeldet sind; Gebühren und Limits des Anbieters gelten.',
          'Lokaler Weg: Ollama-, LM-Studio-, oMLX-, EXO- und Unsloth-Server auf diesem Computer oder jede OpenAI-kompatible Adresse.',
          'Die App ist kostenlos; ein optionaler kostenpflichtiger Cloud-Tarif ergänzt einen dauerhaft laufenden Cloud-Rechner und enthält keine KI-Nutzung.',
          'Installationsdateien gibt es für macOS, Windows und Ubuntu; das Windows-Installationsprogramm ist nicht signiert, und Ubuntu ist eine Beta.',
          'Das unten verlinkte Video stammt von Dritten und wurde von PromptQuorum nicht überprüft.',
        ],
        updatedDate: '2026-11-14',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'OpenMausBot herunterladen', anchor: 'get-it' },
      { label: 'OpenMausBot im Überblick', anchor: 'at-a-glance' },
      { label: 'Was OpenMausBot ist', anchor: 'what-is-openmausbot' },
      { label: 'Ist es lokale KI?', anchor: 'is-it-local' },
      { label: 'Das Video', anchor: 'video' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'OpenMausBot im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen OpenMausBot geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen OpenMausBot nicht geeignet ist', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenMausBot ist eine quelloffene Chat-App, die ein Team aus KI-Agenten auf Ihrem Computer verwaltet, standardmäßig mit Cloud-Agenten und nur dann mit lokalen Modellen, wenn Sie diese anbinden.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine Messaging-App vor, in der jeder Kontakt ein KI-Mitarbeiter ist: Die App gehört Ihnen und ist offen, aber das Gehirn hinter jedem Kontakt ist das Modell, das Sie einstecken.',
          },
        ],
        items: [
          'Lokal oder nicht: Die App und ihr Datenordner sind lokal; die Standard-Agenten sind es nicht, und lokale Modelle sind eine optionale Anbindung.',
          'Lizenz und Hersteller: Apache 2.0, veröffentlicht von Supamaus Software Private Limited, einem in Indien gegründeten Unternehmen; ein Enterprise-Ordner hat eine eigene Lizenz mit einsehbarem Quellcode.',
          'Kosten: Die App ist kostenlos, die Modellnutzung rechnet Ihr eigener Anbieter ab, und optionale Cloud-Tarife beginnen bei 15 $ pro Monat.',
          'Pflege: Version 0.1.155 erschien am 13. November 2026, das Projekt wird also aktiv aktualisiert, ist aber eine junge 0.1.x-Linie, die im August 2026 angelegt wurde.',
          'Hinweise: nicht signiertes Windows-Installationsprogramm, Ubuntu in der Beta und kein Test mit lokalen Modellen durch PromptQuorum.',
        ],
      },
      getItOpenMausBot: {
        id: 'get-it',
        title: 'OpenMausBot herunterladen',
        content: [
          '**OpenMausBot wird wie jede Desktop-App installiert, ein Terminal ist nicht nötig.** Die Releases-Seite und die offizielle Website bieten dieselben Installationsdateien an, und der Harness-Server ist darin eingebettet.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Mac (Apple Silicon)',
            Bezugsquelle: '[OpenMausBot.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.dmg) — laut README signiert und notarisiert',
          },
          {
            Plattform: 'Mac (Intel)',
            Bezugsquelle: '[OpenMausBot-intel.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-intel.dmg)',
          },
          {
            Plattform: 'Windows (x64)',
            Bezugsquelle: '[OpenMausBot-setup.exe](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-setup.exe) — noch nicht code-signiert; SmartScreen zeigt „unbekannter Herausgeber“',
          },
          {
            Plattform: 'Ubuntu 24.04 (x64, Beta)',
            Bezugsquelle: '[OpenMausBot-amd64.deb](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-amd64.deb) oder [AppImage](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.AppImage)',
          },
          {
            Plattform: 'Terminal oder Server',
            Bezugsquelle: '`npx openmausbot` (Node 24+) — Optionen für `serve` siehe README',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[mausbot.com](https://mausbot.com/) (openmausbot.com leitet dorthin weiter)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung von MausBot](https://mausbot.com/privacy)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: '[github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) — Apache 2.0',
          },
        ],
        note: 'Die Begleit-Apps für Android und iOS werden als Fernbedienung für einen laufenden Desktop oder Server beschrieben und über den Discord des Projekts verteilt, nicht über die App-Stores. Außerdem muss mindestens ein Agenten-CLI installiert und angemeldet sein (Claude, Codex oder Grok) oder ein Modellserver angebunden werden.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'OpenMausBot im Überblick',
        columns: ['Merkmal', 'OpenMausBot'],
        rows: [
          { Merkmal: 'Plattform', OpenMausBot: 'macOS, Windows x64, Ubuntu 24.04 x64 (Beta)' },
          { Merkmal: 'Preis', OpenMausBot: 'Kostenlose App; optional Cloud 15, 49 oder 99 $ pro Monat' },
          { Merkmal: 'Lizenz', OpenMausBot: 'Apache 2.0 (Enterprise-Ordner separat)' },
          { Merkmal: 'Ausführung', OpenMausBot: 'App und Daten auf Ihrem Computer; Modelle über Agenten-CLIs oder Server' },
          { Merkmal: 'Lokale Modelle', OpenMausBot: 'Möglich über Ollama, LM Studio und OpenAI-kompatible Server; von PromptQuorum ungetestet' },
          { Merkmal: 'Eigenes Modell enthalten', OpenMausBot: 'Nein' },
          { Merkmal: 'Freigabe-Abfragen', OpenMausBot: 'Ja, für Shell-Befehle, Dateiänderungen und Fragen' },
          { Merkmal: 'MCP-Server und CLI', OpenMausBot: 'Beide in der README aufgeführt' },
        ],
        note: 'Die Merkmale stammen aus README, Dokumentation und Website, gelesen am 14. November 2026. Eine fehlende Angabe bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsOpenMausBot: {
        id: 'what-is-openmausbot',
        title: 'Was OpenMausBot ist',
        content: [
          '**OpenMausBot ist eine Chat-App, in der jeder Bot ein echter Agent mit eigener Persönlichkeit, eigenem Modell, eigenem Computer und eigenen angebundenen Apps ist.** Die README beschreibt sie als unabhängiges, quelloffenes Projekt, inspiriert vom Grok Bot von xAI, früher OpenGrokBot genannt und auch als MausBot bekannt, und sagt, dass sie nicht mit xAI, Meta, OpenAI oder Manus verbunden ist.',
          `Veröffentlicht wird sie von Supamaus Software Private Limited, die die Nutzungsbedingungen als in Indien gegründetes Unternehmen bezeichnen; das Repository gehört dem Entwickler Milind Soni. Die Repository-Seite auf GitHub zeigt ${ST.de('openmausbot')} Sterne. Die README erklärt außerdem, dass das Projekt keinen Token hat und jede Kryptomünze mit seinem Namen nichts damit zu tun hat.`,
        ],
      },
      isItLocal: {
        id: 'is-it-local',
        itemHeadings: true,
        title: 'Ist es lokale KI?',
        content: [
          '**Die App ist lokal, die Standardmodelle sind es nicht, und lokale Modelle sind ein Opt-in.** Drei Ebenen beantworten die Frage getrennt.',
        ],
        columns: ['Ebene', 'Wo sie läuft', 'Quelle'],
        rows: [
          {
            Ebene: 'App, Harness-Server und Daten',
            'Wo sie läuft': 'Auf Ihrem Computer: ein kleiner Server auf 127.0.0.1, mit Verläufen, Schlüsseln und Ereignissen in ~/.openmausbot',
            Quelle: 'README, Abschnitt „Why“',
          },
          {
            Ebene: 'Standard-Agenten (Claude, Codex, Grok)',
            'Wo sie läuft': 'Die Cloud-Modelle der Anbieter, erreicht über die CLIs, die Sie installiert und bei denen Sie sich angemeldet haben; Ihre Prompts gehen an den jeweiligen Anbieter',
            Quelle: 'README, „Bring your own agents“',
          },
          {
            Ebene: 'Lokale Modelle (Ollama, LM Studio, oMLX, EXO, Unsloth)',
            'Wo sie läuft': 'Auf Ihrem Computer oder in Ihrem Netzwerk, wenn ein Server auf seiner lokalen Standardadresse antwortet und Sie sein Modell für einen Bot wählen',
            Quelle: 'Repository-Datei server/drivers/local-inject.ts; docs/custom-engines.md',
          },
          {
            Ebene: 'Cloud-Computer und angebundene Apps',
            'Wo sie läuft': 'Optional: ein gehosteter Linux-Desktop und Composio-Verbindungen zu Gmail, Slack und Ähnlichem; außerdem wird eine lokale VM angeboten',
            Quelle: 'README, „Agents with hands“',
          },
        ],
        note: 'Die Zeile zu lokalen Modellen stützt sich auf Quellcode und Dokumentation des Repositorys. PromptQuorum hat kein lokales Modell über OpenMausBot betrieben; Antwortqualität, Werkzeugnutzung und Geschwindigkeit mit kleinen Modellen sind daher unbekannt. Die eingebaute Engine für OpenAI-kompatible Dienste heißt laut Dokumentation in der Modellauswahl „OpenAI-compatible (OpenRouter / Groq)“.',
      },
      video: {
        id: 'video',
        title: 'Das Video',
        youtubeUrl: 'https://www.youtube.com/watch?v=_rQPVOpjljE',
        content: [
          '**Dies ist ein Video von Dritten mit dem Titel „NEW Open Source Grok Bot is INSANE (FREE!)“.** Es ist hier eingebettet, weil Leserinnen und Leser nach OpenMausBot fragten, nachdem sie es gesehen hatten. PromptQuorum hat seine Aussagen nicht geprüft, und sein Titel ist die Meinung eines Creators, kein Befund dieser Rezension. Für Fakten nutzen Sie die Abschnitte oben und die eigenen Seiten des Projekts.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus einer Installation, einem Agenten und einem Bot.** Die Schritte folgen der README und der Download-Seite.',
        ],
        numberedItems: [
          {
            title: 'Zuerst einen Agenten installieren',
            whyItMatters: 'Installieren Sie mindestens einen der CLIs claude, codex oder grok und melden Sie sich an. Für ein lokales Modell starten Sie stattdessen Ollama oder LM Studio und laden ein Modell herunter.',
          },
          {
            title: 'OpenMausBot installieren',
            whyItMatters: 'Öffnen Sie die .dmg und ziehen Sie die App in den Ordner Programme, führen Sie das Windows-Installationsprogramm aus (Administratorrechte sind nicht nötig) oder installieren Sie die .deb mit apt.',
          },
          {
            title: 'Einen Bot anlegen und sein Modell wählen',
            whyItMatters: 'Installierte CLIs erscheinen automatisch in der Modellauswahl; lokale Hosts, die auf ihrer Standardadresse antworten, werden unter „Custom“ aufgeführt.',
          },
          {
            title: 'Das Wichtige freigeben',
            whyItMatters: 'Shell-Befehle, Dateiänderungen und Fragen erscheinen als Karten im Chat, die Sie zulassen oder ablehnen.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang konzentriert sich auf eine Liste von Agenten, die Sie wie Kontakte verwalten.** Alles Folgende stammt aus der README und der Dokumentation.',
        ],
        items: [
          '**Ein Modell pro Bot.** Claude- und Codex-Modelle nebeneinander in einer Auswahl, mitten im Gespräch umschaltbar.',
          '**Freigabe-Karten.** Ein Berechtigungs-Broker macht riskante Aktionen zu Entscheidungen, die Sie treffen, für Cloud- und lokale Computer gleichermaßen.',
          '**Computer für Bots.** Ein Cloud-Desktop, eine isolierte lokale VM oder, nach ausdrücklichem Opt-in, Ihr eigener Computer unter macOS und Ubuntu Xorg.',
          '**Angebundene Apps.** Composio ermöglicht nach einer einzigen OAuth-Anmeldung den Zugriff auf Gmail, Slack, GitHub, Notion und Hunderte weitere.',
          '**Kanäle, Teams und Routinen.** Getrennte Kanäle je Kontext, installierbare Team-Dateien sowie zeitgesteuerte oder durch App-Ereignisse ausgelöste Trigger.',
          '**Sprache.** Gesprochene Antworten und Anrufe über ElevenLabs, Fish Audio, Grok, die eingebauten Mac-Stimmen oder einen lokalen Chatterbox-Server.',
          '**Automatisierung.** Ein stdio-MCP-Server für Claude Desktop oder Cursor und ein Befehl `openmausbot` für Skripte und CI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Die Datenschutzerklärung sagt, die Desktop-App laufe auf Ihrem Rechner und Ihre Gespräche blieben dort, während die Website Analysen nutzt, die sich abschalten lassen.** Optionale Nutzungsanalysen in der App sind anonym und lassen sich in den Einstellungen ausschalten. Alles, was Sie an einen Cloud-Agenten, einen Cloud-Computer oder eine angebundene App senden, wird von diesem Dienst nach dessen eigenen Bedingungen verarbeitet.',
          'Die App ist kostenlos unter Apache 2.0, mit einer separaten Lizenz mit einsehbarem Quellcode für den Enterprise-Ordner. Optionale MausBot-Cloud-Tarife kosten 15, 49 oder 99 $ pro Monat und enthalten keine KI-Nutzung; die Modelle bezahlt Ihr eigener Claude-, ChatGPT- oder API-Tarif. Schlüssel, die die gepackte Desktop-App speichert, werden vom Betriebssystem verschlüsselt, während die Einrichtung per Terminal API-Schlüssel laut README im Klartext in einer privaten Konfigurationsdatei ablegt.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            Vorteil: 'Quelloffen, Apache 2.0',
            'Was das im Alltag bedeutet': 'Code, Treiber und Dokumentation lassen sich lesen und ändern.',
            'Einschränkung / Hinweis': 'Ein Enterprise-Ordner hat eine andere Lizenz.',
          },
          {
            Vorteil: 'Eigene Agenten mitbringen',
            'Was das im Alltag bedeutet': 'Nutzt Ihre vorhandenen Anmeldungen bei Claude, Codex oder Grok ohne Proxy.',
            'Einschränkung / Hinweis': 'Das sind Cloud-Modelle, daher ist es nicht standardmäßig privat.',
          },
          {
            Vorteil: 'Option für lokale Modelle',
            'Was das im Alltag bedeutet': 'Ollama, LM Studio und andere Server lassen sich pro Bot wählen.',
            'Einschränkung / Hinweis': 'Von PromptQuorum ungetestet; kleine Modelle tun sich bei werkzeugintensiver Agentenarbeit womöglich schwer.',
          },
          {
            Vorteil: 'Freigabe-Karten',
            'Was das im Alltag bedeutet': 'Riskante Aktionen warten auf Ihre Entscheidung.',
            'Einschränkung / Hinweis': 'Bots mit Computerzugriff erfordern weiterhin eine sorgfältige Prüfung jeder Anfrage.',
          },
          {
            Vorteil: 'Schnell wachsendes Projekt',
            'Was das im Alltag bedeutet': 'Version 0.1.155 erschien am 13. November 2026.',
            'Einschränkung / Hinweis': 'Sehr jung: im August 2026 angelegt, 0.1.x, und Ubuntu ist noch Beta.',
          },
          {
            Vorteil: 'Kostenlose App',
            'Was das im Alltag bedeutet': 'Für die Desktop-App ist kein Konto nötig.',
            'Einschränkung / Hinweis': 'Modellgebühren tragen Sie selbst; Windows-Installationsprogramm nicht signiert.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'OpenMausBot im Vergleich zu Alternativen',
        content: [
          'Das sind die ähnlichsten Werkzeuge für Agenten-Orchestrierung und persönliche Agenten im Verzeichnis.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'OpenMausBot',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, Apache 2.0',
            Rolle: 'Team aus Agenten im Chat-Stil',
            'Wichtigster Unterschied': 'Messaging-App-Oberfläche über den CLIs von Claude, Codex und Grok',
          },
          {
            App: '[Multica](/de/power-local-llm/multica-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Freemium, Quellcode einsehbar',
            Rolle: 'Arbeitsbereich zum Zuweisen von Coding-Agenten-Aufgaben',
            'Wichtigster Unterschied': 'Aufgabenboard für Coding-Agenten, selbst gehostet',
          },
          {
            App: '[Mission Control](/de/power-local-llm/mission-control-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Steuerungsebene für Agentenläufe',
            'Wichtigster Unterschied': 'Verfolgt Läufe und Ausgaben über Agenten-Laufzeiten hinweg',
          },
          {
            App: '[Atomic Bot](/de/power-local-llm/atomic-bot-review)',
            Plattformen: 'Mac, Windows, Linux, iOS, Android',
            'Preis und Lizenz': 'Freemium, MIT',
            Rolle: 'Persönlicher KI-Kollege',
            'Wichtigster Unterschied': 'Bündelt den OpenClaw-Stack; läuft lokal oder in der Cloud',
          },
          {
            App: '[Agent Zero](/de/power-local-llm/agent-zero-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Autonomer Agent',
            'Wichtigster Unterschied': 'Ein autonomer Agent, keine Liste von Bots',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Details auf der Seite des jeweiligen Projekts, bevor Sie entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen OpenMausBot geeignet ist',
        items: [
          '**Menschen, die bereits für Claude, Codex oder Grok zahlen.** Die App nutzt diese Anmeldungen weiter.',
          '**Nutzer, die mehrere Agenten in einer Chat-App wollen.** Jeder Bot hat sein eigenes Modell und seine eigene Rolle.',
          '**Tüftler mit Ollama oder LM Studio.** Die dokumentierten lokalen Hosts machen ein Experiment möglich.',
          '**Teams, die Freigabe-Abfragen wünschen.** Riskante Aktionen warten auf eine Entscheidung.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen OpenMausBot nicht geeignet ist',
        items: [
          '**Alle, die standardmäßig alles offline brauchen.** Die Standard-Agenten sind Cloud-Modelle.',
          '**Alle, die ein ausgereiftes Werkzeug brauchen.** Es ist ein 0.1.x-Projekt vom August 2026.',
          '**Nutzer, die ein nicht signiertes Windows-Installationsprogramm nicht akzeptieren können.** SmartScreen warnt davor.',
          '**Alle, die ein getestetes Setup mit lokalen Modellen erwarten.** PromptQuorum hat keines betrieben.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich OpenMausBot komplett offline betreiben?',
            a: 'Nur wenn jeder Bot einen lokalen Modellserver auf Ihrem Computer nutzt. Die Standard-Agenten von Claude, Codex und Grok brauchen das Internet, und PromptQuorum hat kein Offline-Setup getestet.',
          },
          {
            q: 'Welche lokalen Modellserver erkennt es?',
            a: 'Der Quellcode führt oMLX, Ollama, EXO, LM Studio und Unsloth auf ihren lokalen Standardadressen auf, und die Dokumentation beschreibt eine eingebaute Engine für jede OpenAI-kompatible Adresse.',
          },
          {
            q: 'Stammt OpenMausBot von xAI?',
            a: 'Nein. Die README sagt, es sei ein unabhängiges Projekt, inspiriert vom Grok Bot, und nicht mit xAI, Meta, OpenAI oder Manus verbunden.',
          },
          {
            q: 'Gibt es einen Krypto-Token?',
            a: 'Nein. Die README erklärt, dass das Projekt keinen Token hat und Münzen mit seinem Namen nicht mit ihm verbunden sind.',
          },
          {
            q: 'Ist das Video in dieser Rezension eine offizielle Demo?',
            a: 'PromptQuorum konnte nicht bestätigen, wer es erstellt hat. Es ist ein Video von Dritten mit einem begeisterten Titel, als Kontext verlinkt und nicht überprüft.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'OpenMausBot passt, wenn Sie bereits Claude, Codex oder Grok nutzen und ein Team aus Agenten im Chat-Stil auf Ihrem eigenen Computer mit Freigabe-Abfragen und einer offenen Lizenz möchten. Es ist standardmäßig keine lokale KI, und wer einen vollständig lokalen Betrieb will, sollte den Weg über Ollama und LM Studio als Experiment betrachten.',
          'Die Einschränkungen betreffen Reife und Überprüfbarkeit: ein im August 2026 angelegtes Projekt, ein nicht signiertes Windows-Installationsprogramm, ein Ubuntu-Build in der Beta und kein Test mit lokalen Modellen hier. Probieren Sie es mit einem Bot aus, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[OpenMausBot-Repository und README](https://github.com/milind-soni/OpenMausBot) — Funktionen, Engines, Lizenz und Installationsschritte.',
          '[Bring your own engine](https://github.com/milind-soni/OpenMausBot/blob/main/docs/custom-engines.md) — eigene ACP- und OpenAI-kompatible Engines.',
          '[Other model providers](https://github.com/milind-soni/OpenMausBot/blob/main/apps/docs/content/docs/providers/model-providers.mdx) — Chat-Engine und OpenCode-Routen.',
          '[Liste lokaler Hosts im Quellcode](https://github.com/milind-soni/OpenMausBot/blob/main/server/drivers/local-inject.ts) — Adressen von Ollama, LM Studio, oMLX, EXO und Unsloth.',
          '[Releases](https://github.com/milind-soni/OpenMausBot/releases) — Version 0.1.155 vom 13. November 2026 und Installationsdateien.',
          '[Website von MausBot](https://mausbot.com/) — Download, Preise, Datenschutzerklärung und Nutzungsbedingungen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Multica Rezension](/de/power-local-llm/multica-review) — ein selbst gehosteter Arbeitsbereich, um Coding-Agenten Aufgaben zuzuweisen.',
          '[Mission Control Rezension](/de/power-local-llm/mission-control-review) — eine Steuerungsebene für Agentenläufe und Ausgaben.',
          '[Atomic Bot Rezension](/de/power-local-llm/atomic-bot-review) — ein persönlicher KI-Kollege, der lokal oder in der Cloud läuft.',
          '[Ollama Rezension](/de/power-local-llm/ollama-review) — der lokale Modellserver, an den sich OpenMausBot anbinden lässt.',
          '[LM Studio Rezension](/de/power-local-llm/lm-studio-review) — eine Desktop-App, die lokale Modelle über eine OpenAI-kompatible Adresse bereitstellt.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-14',
    dateModified: '2026-11-14',
    next_refresh_due: '2027-05-14',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openmausbot-review-hero-fr.webp',
    title: "Test d'OpenMausBot : ce bot Grok open source est-il une IA locale ?",
    seoTitle: "Test d'OpenMausBot : bot Grok open source, IA locale ?",
    intro: "OpenMausBot (aussi appelé MausBot, anciennement OpenGrokBot) est une application de discussion de bureau gratuite et open source dans laquelle chaque contact est un agent d'IA. Ce n'est pas une IA locale en soi : elle pilote les agents en ligne de commande Claude, Codex et Grok que vous avez déjà installés, et ce sont des modèles cloud. Son code source et sa documentation montrent que des modèles locaux peuvent aussi être connectés, via Ollama, LM Studio ou toute adresse compatible OpenAI. Ce test répond d'abord à cette question, puis aborde l'installation, le prix, la confidentialité et les alternatives, à partir du dépôt et du site du projet. PromptQuorum n'a pas installé l'application ni exécuté de modèle local avec elle.",
    metaDescription: "Test d'OpenMausBot : alternative open source à Grok Bot sur agents Claude, Codex ou Grok. Pas locale par défaut ; Ollama, LM Studio possibles. Gratuit.",
    twitterDescription: "Test d'OpenMausBot : une équipe de bots d'IA gratuite et open source pour votre bureau. Est-ce de l'IA locale ? Agents cloud par défaut, modèles locaux possibles. Prix, confidentialité, limites.",
    audience: "Personnes qui ont vu l'alternative open source à Grok Bot et veulent savoir si elle est locale, ce qu'elle coûte et si des modèles Ollama ou LM Studio peuvent la piloter.",
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenMausBot review',
    targetKeywords: [
      'test openmausbot',
      'openmausbot',
      'mausbot',
      'alternative open source à grok bot',
      'openmausbot llm local',
      'openmausbot ollama',
      'openmausbot lm studio',
      "application de bureau équipe d'agents ia",
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows',
      'Ubuntu',
    ],
    leadAnswerBlock: "**OpenMausBot est une application de discussion de bureau gratuite, sous licence Apache 2.0, pour une équipe de bots d'IA, et ce n'est pas une IA locale par défaut : ses bots s'appuient sur les agents en ligne de commande Claude, Codex ou Grok que vous avez installés, qui sont des modèles cloud.** Le code et la documentation du projet montrent que des modèles locaux peuvent être connectés via Ollama, LM Studio et d'autres serveurs compatibles OpenAI, ce que PromptQuorum n'a pas testé.",
    quickAnswerTop: {
      fr: {
        question: "OpenMausBot est-elle une IA locale, ou une IA locale peut-elle la faire fonctionner ?",
        answer: "L'application s'exécute sur votre ordinateur et y conserve discussions, clés et événements dans un dossier, mais elle ne fournit aucun modèle. Par défaut, chaque bot utilise un agent en ligne de commande comme Claude ou Codex, qui envoie vos requêtes à ce fournisseur. Le dépôt liste aussi des hôtes locaux qu'elle sonde, dont Ollama et LM Studio : un modèle local peut donc être choisi pour un bot. La capacité des petits modèles locaux à gérer son travail d'agent riche en outils n'a pas été testée ici.",
        bullets: [
          "Voie par défaut : les CLI claude, codex et grok auxquelles vous êtes déjà connecté ; les frais et limites du fournisseur s'appliquent.",
          "Voie locale : serveurs Ollama, LM Studio, oMLX, EXO et Unsloth sur cet ordinateur, ou toute adresse compatible OpenAI.",
          "L'application est gratuite ; une offre Cloud payante optionnelle ajoute une machine cloud toujours active et n'inclut pas l'usage de l'IA.",
          "Des installateurs existent pour macOS, Windows et Ubuntu ; l'installateur Windows n'est pas signé et Ubuntu est en version bêta.",
          "La vidéo liée ci-dessous est un contenu tiers et n'a pas été vérifiée par PromptQuorum.",
        ],
        updatedDate: '2026-11-14',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir OpenMausBot', anchor: 'get-it' },
      { label: "OpenMausBot en un coup d'œil", anchor: 'at-a-glance' },
      { label: "Ce qu'est OpenMausBot", anchor: 'what-is-openmausbot' },
      { label: "Est-ce de l'IA locale ?", anchor: 'is-it-local' },
      { label: 'La vidéo', anchor: 'video' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'OpenMausBot face aux alternatives', anchor: 'vs-alternatives' },
      { label: "Pour qui OpenMausBot est adaptée", anchor: 'who-should-use' },
      { label: "Pour qui OpenMausBot n'est pas adaptée", anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "OpenMausBot est une application de discussion open source qui gère une équipe d'agents d'IA sur votre ordinateur, avec des agents cloud par défaut et des modèles locaux seulement si vous les connectez.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez une messagerie où chaque contact est un travailleur d'IA : l'application est à vous et ouverte, mais le cerveau derrière chaque contact est le modèle que vous branchez.",
          },
        ],
        items: [
          "Local ou non : l'application et son dossier de données sont locaux ; les agents par défaut ne le sont pas, et les modèles locaux sont une connexion facultative.",
          "Licence et éditeur : Apache 2.0, publiée par Supamaus Software Private Limited, société constituée en Inde ; un dossier entreprise a sa propre licence à code source disponible.",
          "Coût : l'application est gratuite, l'usage des modèles est facturé par votre propre fournisseur, et les offres Cloud facultatives démarrent à 15 $ par mois.",
          "Maintenance : la version 0.1.155 est sortie le 13 novembre 2026, le projet est donc activement mis à jour, mais c'est une jeune série 0.1.x créée en août 2026.",
          "Réserves : installateur Windows non signé, Ubuntu en version bêta, et aucun test de modèle local par PromptQuorum.",
        ],
      },
      getItOpenMausBot: {
        id: 'get-it',
        title: 'Obtenir OpenMausBot',
        content: [
          "**OpenMausBot s'installe comme n'importe quelle application de bureau, aucun terminal n'est nécessaire.** La page des versions et le site officiel proposent les mêmes installateurs, et le serveur d'orchestration y est intégré.",
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            Plateforme: 'Mac (Apple silicon)',
            'Où la trouver': '[OpenMausBot.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.dmg) — signé et notarisé, selon le README',
          },
          {
            Plateforme: 'Mac (Intel)',
            'Où la trouver': '[OpenMausBot-intel.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-intel.dmg)',
          },
          {
            Plateforme: 'Windows (x64)',
            'Où la trouver': '[OpenMausBot-setup.exe](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-setup.exe) — pas encore signé ; SmartScreen affiche « éditeur inconnu »',
          },
          {
            Plateforme: 'Ubuntu 24.04 (x64, bêta)',
            'Où la trouver': '[OpenMausBot-amd64.deb](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-amd64.deb) ou [AppImage](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.AppImage)',
          },
          {
            Plateforme: 'Terminal ou serveur',
            'Où la trouver': '`npx openmausbot` (Node 24+) — voir le README pour les options de `serve`',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[mausbot.com](https://mausbot.com/) (openmausbot.com y redirige)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où la trouver': '[Confidentialité de MausBot](https://mausbot.com/privacy)',
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': '[github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) — Apache 2.0',
          },
        ],
        note: "Les applications compagnon Android et iOS sont décrites comme des télécommandes pour un bureau ou un serveur en fonctionnement et sont partagées via le Discord du projet, pas via les magasins d'applications. Il faut aussi au moins une CLI d'agent installée et connectée (Claude, Codex ou Grok), ou un serveur de modèles connecté.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "OpenMausBot en un coup d'œil",
        columns: ['Attribut', 'OpenMausBot'],
        rows: [
          { Attribut: 'Plateforme', OpenMausBot: 'macOS, Windows x64, Ubuntu 24.04 x64 (bêta)' },
          { Attribut: 'Prix', OpenMausBot: 'Application gratuite ; Cloud facultatif 15, 49 ou 99 $/mois' },
          { Attribut: 'Licence', OpenMausBot: 'Apache 2.0 (dossier entreprise à part)' },
          { Attribut: 'Exécution', OpenMausBot: 'Application et données sur votre ordinateur ; modèles via CLI ou serveurs' },
          { Attribut: 'Modèles locaux', OpenMausBot: 'Possible via Ollama, LM Studio, serveurs compatibles OpenAI ; non testé' },
          { Attribut: 'Modèle propre inclus', OpenMausBot: 'Non' },
          { Attribut: "Demandes d'approbation", OpenMausBot: 'Oui : commandes shell, fichiers modifiés, questions' },
          { Attribut: 'Serveur MCP et CLI', OpenMausBot: 'Les deux sont cités dans le README' },
        ],
        note: "Les attributs proviennent du README, de la documentation et du site web consultés le 14 novembre 2026. Une absence de mention signifie « inconnu », pas « non pris en charge ».",
      },
      whatIsOpenMausBot: {
        id: 'what-is-openmausbot',
        title: "Ce qu'est OpenMausBot",
        content: [
          "**OpenMausBot est une application de discussion où chaque bot est un véritable agent, avec sa propre personnalité, son modèle, son ordinateur et ses applications connectées.** Le README la décrit comme un projet indépendant et open source inspiré de Grok Bot de xAI, anciennement nommé OpenGrokBot et aussi appelé MausBot, et précise qu'elle n'est affiliée ni à xAI, ni à Meta, ni à OpenAI, ni à Manus.",
          `Elle est publiée par Supamaus Software Private Limited, que la page des conditions décrit comme une société constituée en Inde ; le dépôt appartient au développeur Milind Soni. La page du dépôt sur GitHub affiche ${ST.fr('openmausbot')} étoiles. Le README précise aussi que le projet n'a pas de jeton et que toute cryptomonnaie portant son nom n'a aucun lien avec lui.`,
        ],
      },
      isItLocal: {
        id: 'is-it-local',
        itemHeadings: true,
        title: "Est-ce de l'IA locale ?",
        content: [
          "**L'application est locale, les modèles par défaut ne le sont pas, et les modèles locaux sont une option à activer.** Trois couches répondent séparément à la question.",
        ],
        columns: ['Couche', "Où elle s'exécute", 'Source'],
        rows: [
          {
            Couche: 'Application, serveur et données',
            "Où elle s'exécute": 'Sur votre ordinateur : un petit serveur sur 127.0.0.1, avec transcriptions, clés et événements dans ~/.openmausbot',
            Source: 'README, section « Why »',
          },
          {
            Couche: 'Agents par défaut (Claude, Codex, Grok)',
            "Où elle s'exécute": "Les modèles cloud des fournisseurs, atteints via les CLI installées et connectées ; vos requêtes vont chez ce fournisseur",
            Source: 'README, « Bring your own agents »',
          },
          {
            Couche: 'Modèles locaux (Ollama, LM Studio, oMLX, EXO, Unsloth)',
            "Où elle s'exécute": "Sur votre ordinateur ou réseau, quand un serveur répond à son adresse locale par défaut et que vous choisissez son modèle pour un bot",
            Source: 'Fichier du dépôt server/drivers/local-inject.ts ; docs/custom-engines.md',
          },
          {
            Couche: 'Ordinateurs cloud et applications connectées',
            "Où elle s'exécute": "Facultatif : un bureau Linux hébergé et des connexions Composio à Gmail, Slack et similaires ; une VM locale est aussi proposée",
            Source: 'README, « Agents with hands »',
          },
        ],
        note: "La ligne des modèles locaux repose sur le code source et la documentation du dépôt. PromptQuorum n'a exécuté aucun modèle local avec OpenMausBot : la qualité des réponses, l'usage des outils et la vitesse avec de petits modèles sont donc inconnus. Selon la documentation, le moteur intégré pour les services compatibles OpenAI est libellé « OpenAI-compatible (OpenRouter / Groq) » dans le sélecteur de modèle.",
      },
      video: {
        id: 'video',
        title: 'La vidéo',
        youtubeUrl: 'https://www.youtube.com/watch?v=_rQPVOpjljE',
        content: [
          "**Il s'agit d'une vidéo tierce intitulée « NEW Open Source Grok Bot is INSANE (FREE!) ».** Elle est intégrée ici parce que des lecteurs ont posé des questions sur OpenMausBot après l'avoir vue. PromptQuorum n'a pas examiné ses affirmations, et son titre est l'opinion d'un créateur, pas une conclusion de ce test. Pour les faits, appuyez-vous sur les sections ci-dessus et sur les pages du projet.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          "**La mise en route tient en une installation, un agent et un bot.** Les étapes suivent le README et la page de téléchargement.",
        ],
        numberedItems: [
          {
            title: "Installer d'abord un agent",
            whyItMatters: "Installez et connectez-vous à au moins une des CLI claude, codex ou grok. Pour un modèle local, démarrez plutôt Ollama ou LM Studio et téléchargez un modèle.",
          },
          {
            title: 'Installer OpenMausBot',
            whyItMatters: "Ouvrez le .dmg et glissez l'application dans Applications, lancez l'installateur Windows (aucun droit d'administrateur requis), ou installez le .deb avec apt.",
          },
          {
            title: 'Créer un bot et choisir son modèle',
            whyItMatters: "Les CLI installées apparaissent automatiquement dans le sélecteur de modèle ; les hôtes locaux qui répondent à leur adresse par défaut sont listés sous Custom.",
          },
          {
            title: "Approuver ce qui compte",
            whyItMatters: "Les commandes shell, les modifications de fichiers et les questions arrivent sous forme de cartes dans la discussion, que vous autorisez ou refusez.",
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'ensemble des fonctions est centré sur un groupe d'agents que vous gérez comme des contacts.** Tout ce qui suit provient du README et de la documentation.",
        ],
        items: [
          "**Un modèle par bot.** Des modèles Claude et Codex côte à côte dans un même sélecteur, modifiables en pleine conversation.",
          "**Cartes d'approbation.** Un courtier d'autorisations transforme les actions risquées en décisions que vous prenez, pour les ordinateurs cloud comme locaux.",
          "**Ordinateurs pour les bots.** Un bureau cloud, une VM locale isolée ou, après un consentement explicite, votre propre ordinateur sous macOS et Ubuntu Xorg.",
          "**Applications connectées.** Composio donne accès à Gmail, Slack, GitHub, Notion et des centaines d'autres après une seule connexion OAuth.",
          "**Canaux, équipes et routines.** Des canaux séparés par contexte, des fichiers d'équipe installables, et des déclencheurs planifiés ou liés à des événements d'applications.",
          "**Voix.** Réponses parlées et appels via ElevenLabs, Fish Audio, Grok, les voix Mac intégrées ou un serveur Chatterbox local.",
          "**Automatisation.** Un serveur MCP stdio pour Claude Desktop ou Cursor et une commande `openmausbot` pour les scripts et la CI.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          "**La politique de confidentialité indique que l'application de bureau s'exécute sur votre machine et que vos conversations y restent, tandis que le site web utilise des outils d'analyse que vous pouvez désactiver.** Les statistiques d'usage facultatives de l'application sont anonymes et peuvent être désactivées dans les réglages. Tout ce que vous envoyez à un agent cloud, à un ordinateur Cloud ou à une application connectée est traité par ce service selon ses propres conditions.",
          "L'application est gratuite sous Apache 2.0, avec une licence distincte à code source disponible pour le dossier entreprise. Les offres MausBot Cloud facultatives coûtent 15, 49 ou 99 $ par mois et n'incluent pas l'usage de l'IA ; votre propre abonnement Claude, ChatGPT ou API paie les modèles. Selon le README, les clés enregistrées par l'application de bureau empaquetée sont chiffrées par le système d'exploitation, tandis que l'installation en terminal stocke les clés d'API en clair dans un fichier de configuration privé.",
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', "Ce que cela donne à l'usage", 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Open source, Apache 2.0',
            "Ce que cela donne à l'usage": 'Le code, les pilotes et la documentation peuvent être lus et modifiés.',
            'Limite / réserve': 'Un dossier entreprise a une licence différente.',
          },
          {
            Avantage: 'Vos propres agents',
            "Ce que cela donne à l'usage": 'Utilise vos connexions Claude, Codex ou Grok existantes, sans proxy.',
            'Limite / réserve': 'Ce sont des modèles cloud : ce n\'est donc pas privé par défaut.',
          },
          {
            Avantage: 'Option de modèle local',
            "Ce que cela donne à l'usage": 'Ollama, LM Studio et d\'autres serveurs peuvent être choisis par bot.',
            'Limite / réserve': "Non testé par PromptQuorum ; les petits modèles peuvent peiner sur un travail d'agent riche en outils.",
          },
          {
            Avantage: "Cartes d'approbation",
            "Ce que cela donne à l'usage": 'Les actions risquées attendent votre décision.',
            'Limite / réserve': "Les bots ayant accès à l'ordinateur exigent d'examiner soigneusement chaque demande.",
          },
          {
            Avantage: 'Projet en évolution rapide',
            "Ce que cela donne à l'usage": 'La version 0.1.155 est sortie le 13 novembre 2026.',
            'Limite / réserve': 'Très jeune : créé en août 2026, série 0.1.x, et Ubuntu reste en bêta.',
          },
          {
            Avantage: 'Application gratuite',
            "Ce que cela donne à l'usage": "Aucun compte n'est nécessaire pour l'application de bureau.",
            'Limite / réserve': "Les frais de modèles sont à votre charge ; l'installateur Windows n'est pas signé.",
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'OpenMausBot face aux alternatives',
        content: [
          "Voici les outils d'orchestration d'agents et d'agents personnels les plus proches du répertoire.",
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'OpenMausBot',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, Apache 2.0',
            Rôle: "Équipe d'agents façon messagerie",
            'Différence clé': 'Interface de messagerie au-dessus des CLI Claude, Codex et Grok',
          },
          {
            Application: '[Multica](/fr/power-local-llm/multica-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Freemium, code source disponible',
            Rôle: "Espace de travail pour confier des tâches à des agents de code",
            'Différence clé': 'Tableau de tâches pour agents de code, auto-hébergé',
          },
          {
            Application: '[Mission Control](/fr/power-local-llm/mission-control-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: "Plan de contrôle des exécutions d'agents",
            'Différence clé': "Suit les exécutions et les dépenses entre environnements d'agents",
          },
          {
            Application: '[Atomic Bot](/fr/power-local-llm/atomic-bot-review)',
            Plateformes: 'Mac, Windows, Linux, iOS, Android',
            'Prix et licence': 'Freemium, MIT',
            Rôle: "Collègue d'IA personnel",
            'Différence clé': 'Regroupe la pile OpenClaw ; local ou dans le cloud',
          },
          {
            Application: '[Agent Zero](/fr/power-local-llm/agent-zero-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: 'Agent autonome',
            'Différence clé': "Un seul agent autonome, pas un groupe de bots",
          },
        ],
        note: "Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui OpenMausBot est adaptée',
        items: [
          "**Personnes qui paient déjà Claude, Codex ou Grok.** L'application réutilise ces connexions.",
          "**Utilisateurs qui veulent plusieurs agents dans une seule application de discussion.** Chaque bot a son propre modèle et son rôle.",
          "**Bricoleurs avec Ollama ou LM Studio.** Les hôtes locaux documentés rendent une expérience possible.",
          "**Équipes qui veulent des demandes d'approbation.** Les actions risquées attendent une décision.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui OpenMausBot n'est pas adaptée",
        items: [
          "**Quiconque a besoin que tout soit hors ligne par défaut.** Les agents par défaut sont des modèles cloud.",
          "**Quiconque a besoin d'un outil mature.** C'est un projet 0.1.x d'août 2026.",
          "**Utilisateurs qui ne peuvent pas accepter un installateur Windows non signé.** SmartScreen affichera un avertissement.",
          "**Quiconque attend une configuration de modèle local testée.** PromptQuorum n'en a exécuté aucune.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: "Puis-je utiliser OpenMausBot entièrement hors ligne ?",
            a: "Seulement si chaque bot utilise un serveur de modèle local sur votre ordinateur. Les agents Claude, Codex et Grok par défaut ont besoin d'Internet, et PromptQuorum n'a pas testé de configuration hors ligne.",
          },
          {
            q: 'Quels serveurs de modèles locaux reconnaît-elle ?',
            a: "Le code source liste oMLX, Ollama, EXO, LM Studio et Unsloth à leurs adresses locales par défaut, et la documentation décrit un moteur intégré pour toute adresse compatible OpenAI.",
          },
          {
            q: "OpenMausBot est-elle créée par xAI ?",
            a: "Non. Le README indique qu'il s'agit d'un projet indépendant inspiré de Grok Bot, non affilié à xAI, Meta, OpenAI ni Manus.",
          },
          {
            q: "Existe-t-il un jeton crypto ?",
            a: "Non. Le README précise que le projet n'a pas de jeton et que les cryptomonnaies utilisant son nom ne lui sont pas affiliées.",
          },
          {
            q: "La vidéo de ce test est-elle une démonstration officielle ?",
            a: "PromptQuorum n'a pas pu confirmer qui l'a réalisée. C'est une vidéo tierce au titre enthousiaste, liée à titre de contexte et non vérifiée.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "OpenMausBot convient si vous utilisez déjà Claude, Codex ou Grok et voulez une équipe d'agents façon messagerie sur votre propre ordinateur, avec des demandes d'approbation et une licence ouverte. Ce n'est pas une IA locale par défaut, et quiconque veut un fonctionnement entièrement local doit considérer la voie Ollama et LM Studio comme une expérience.",
          "Les réserves tiennent à la maturité et à la vérification : un projet créé en août 2026, un installateur Windows non signé, une version Ubuntu bêta, et aucun test de modèle local ici. Essayez-la avec un seul bot avant de vous y fier.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          "[Dépôt et README d'OpenMausBot](https://github.com/milind-soni/OpenMausBot) — fonctions, moteurs, licence et étapes d'installation.",
          "[Bring your own engine](https://github.com/milind-soni/OpenMausBot/blob/main/docs/custom-engines.md) — moteurs ACP et compatibles OpenAI personnalisés.",
          "[Other model providers](https://github.com/milind-soni/OpenMausBot/blob/main/apps/docs/content/docs/providers/model-providers.mdx) — moteur de discussion et voies OpenCode.",
          "[Liste des hôtes locaux dans le code source](https://github.com/milind-soni/OpenMausBot/blob/main/server/drivers/local-inject.ts) — adresses d'Ollama, LM Studio, oMLX, EXO et Unsloth.",
          "[Versions](https://github.com/milind-soni/OpenMausBot/releases) — version 0.1.155, 13 novembre 2026, et fichiers d'installation.",
          "[Site web de MausBot](https://mausbot.com/) — téléchargement, tarifs, politique de confidentialité et conditions.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          "[Test de Multica](/fr/power-local-llm/multica-review) — un espace de travail auto-hébergé pour confier des tâches à des agents de code.",
          "[Test de Mission Control](/fr/power-local-llm/mission-control-review) — un plan de contrôle des exécutions et des dépenses d'agents.",
          "[Test d'Atomic Bot](/fr/power-local-llm/atomic-bot-review) — un collègue d'IA personnel qui fonctionne en local ou dans le cloud.",
          "[Test d'Ollama](/fr/power-local-llm/ollama-review) — le serveur de modèles locaux auquel OpenMausBot peut se connecter.",
          "[Test de LM Studio](/fr/power-local-llm/lm-studio-review) — une application de bureau qui sert des modèles locaux via une adresse compatible OpenAI.",
          "[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large des outils d'IA locale, toutes plateformes.",
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-14',
    dateModified: '2026-11-14',
    next_refresh_due: '2027-05-14',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openmausbot-review-hero-ja.webp',
    title: 'OpenMausBot レビュー：オープンソースのGrok BotはローカルAIか',
    seoTitle: 'OpenMausBot レビュー：Grok BotはローカルAIか',
    intro: 'OpenMausBot（MausBotとも呼ばれ、旧名はOpenGrokBot）は、すべての連絡先がAIエージェントになっている、無料のオープンソースのデスクトップチャットアプリです。それ自体はローカルAIではありません。すでにお使いのClaude、Codex、Grokのコマンドラインエージェントを動かす仕組みで、これらはクラウドモデルです。ソースコードとドキュメントによると、Ollama、LM Studio、またはOpenAI互換のアドレス経由で、ローカルモデルも接続できます。このレビューではまずその疑問に答え、続いてインストール、価格、プライバシー、代替ツールを、プロジェクト自身のリポジトリとウェブサイトに基づいて解説します。PromptQuorumはアプリをインストールしておらず、ローカルモデルも動かしていません。',
    metaDescription: 'OpenMausBotのレビュー：Claude、Codex、Grokのエージェントで動くオープンソース版Grok Bot。標準ではクラウド、OllamaやLM Studioも接続可能。無料、Apache 2.0。',
    twitterDescription: 'OpenMausBotのレビュー：デスクトップで使える、無料のオープンソースのAIボットチーム。ローカルAIか？標準はクラウドエージェントで、ローカルモデルも接続可能。価格、プライバシー、制限を解説します。',
    audience: 'オープンソース版Grok Botを見て、ローカルで動くのか、いくらかかるのか、OllamaやLM Studioのモデルで動かせるのかを知りたい方向け。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenMausBot review',
    targetKeywords: [
      'openmausbot レビュー',
      'openmausbot',
      'mausbot',
      'オープンソース grok bot 代替',
      'openmausbot ローカル llm',
      'openmausbot ollama',
      'openmausbot lm studio',
      'ai エージェント チーム デスクトップアプリ',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows',
      'Ubuntu',
    ],
    leadAnswerBlock: '**OpenMausBotは、AIボットのチームを動かす無料のApache 2.0ライセンスのデスクトップチャットアプリで、標準ではローカルAIではありません。ボットはインストール済みのClaude、Codex、Grokのコマンドラインエージェントで動き、これらはクラウドモデルです。** プロジェクトのソースとドキュメントによると、Ollama、LM Studio、その他のOpenAI互換サーバー経由でローカルモデルも接続できますが、PromptQuorumはこれをテストしていません。',
    quickAnswerTop: {
      ja: {
        question: 'OpenMausBotはローカルAIですか？それともローカルAIで動かせますか？',
        answer: 'アプリ自体はお使いのコンピューター上で動作し、チャット、キー、イベントをそこにあるフォルダに保存しますが、モデルは同梱されていません。標準では、各ボットがClaudeやCodexなどのエージェントCLIを使い、プロンプトをそのベンダーに送信します。リポジトリには、OllamaやLM Studioなど、アプリが探しに行くローカルホストも記載されているため、ボットにローカルモデルを選ぶことができます。小さなローカルモデルがツールを多用するエージェント作業をどこまでこなせるかは、ここでは検証していません。',
        bullets: [
          '標準の経路：すでにサインイン済みのclaude、codex、grokのCLI。プロバイダーの料金と制限が適用されます。',
          'ローカルの経路：このコンピューター上のOllama、LM Studio、oMLX、EXO、Unslothのサーバー、またはOpenAI互換のアドレス。',
          'アプリは無料です。任意の有料Cloudプランは常時稼働のクラウドマシンを追加するもので、AIの利用料は含まれません。',
          'インストーラーはmacOS、Windows、Ubuntu向けです。Windowsのインストーラーは署名されておらず、Ubuntuはベータ版です。',
          '下に掲載した動画はサードパーティ製で、PromptQuorumは内容を検証していません。',
        ],
        updatedDate: '2026-11-14',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'OpenMausBotの入手方法', anchor: 'get-it' },
      { label: 'OpenMausBotの概要', anchor: 'at-a-glance' },
      { label: 'OpenMausBotとは', anchor: 'what-is-openmausbot' },
      { label: 'ローカルAIか', anchor: 'is-it-local' },
      { label: '動画', anchor: 'video' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'OpenMausBotと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'OpenMausBotが向いている人', anchor: 'who-should-use' },
      { label: 'OpenMausBotが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenMausBotは、お使いのコンピューター上でAIエージェントのチームを管理するオープンソースのチャットアプリで、標準ではクラウドエージェントを使い、ローカルモデルは接続した場合にのみ使われます。',
          },
          {
            type: 'plain-terms',
            text: 'すべての連絡先がAIの作業者になっているメッセージアプリだと考えてください。アプリは自分のもので公開されていますが、各連絡先の頭脳は、接続したモデル次第です。',
          },
        ],
        items: [
          'ローカルかどうか：アプリとそのデータフォルダはローカルです。標準のエージェントはローカルではなく、ローカルモデルは任意の接続です。',
          'ライセンスと開発元：Apache 2.0で、インドで設立された会社Supamaus Software Private Limitedが公開しています。enterpriseフォルダには、ソース公開型の別ライセンスがあります。',
          '費用：アプリは無料で、モデルの利用料はご自身のプロバイダーに請求され、任意のCloudプランは月$15からです。',
          'メンテナンス：バージョン0.1.155が2026年11月13日にリリースされており、継続的に更新されていますが、2026年8月に作られた新しい0.1.x系列です。',
          '注意点：Windowsのインストーラーは署名なし、Ubuntuはベータ版で、PromptQuorumによるローカルモデルのテストはありません。',
        ],
      },
      getItOpenMausBot: {
        id: 'get-it',
        title: 'OpenMausBotの入手方法',
        content: [
          '**OpenMausBotはほかのデスクトップアプリと同じようにインストールでき、ターミナルは不要です。** リリースページと公式サイトは同じインストーラーを提供しており、ハーネスサーバーはその中に組み込まれています。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Mac（Apple Silicon）',
            '入手先': '[OpenMausBot.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.dmg) — READMEによると署名・公証済み',
          },
          {
            'プラットフォーム': 'Mac（Intel）',
            '入手先': '[OpenMausBot-intel.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-intel.dmg)',
          },
          {
            'プラットフォーム': 'Windows（x64）',
            '入手先': '[OpenMausBot-setup.exe](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-setup.exe) — 未署名。SmartScreenに「不明な発行元」と表示',
          },
          {
            'プラットフォーム': 'Ubuntu 24.04（x64、ベータ）',
            '入手先': '[OpenMausBot-amd64.deb](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-amd64.deb) または [AppImage](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.AppImage)',
          },
          {
            'プラットフォーム': 'ターミナルまたはサーバー',
            '入手先': '`npx openmausbot`（Node 24以降） — `serve`のオプションはREADMEを参照',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[mausbot.com](https://mausbot.com/)（openmausbot.comはここへリダイレクト）',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[MausBotのプライバシーポリシー](https://mausbot.com/privacy)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) — Apache 2.0',
          },
        ],
        note: 'AndroidとiOSのコンパニオンアプリは、稼働中のデスクトップやサーバーのリモコンとして説明されており、アプリストアではなくプロジェクトのDiscordで共有されています。また、エージェントCLI（Claude、Codex、Grok）を少なくとも1つインストールしてサインインするか、モデルサーバーを接続する必要があります。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'OpenMausBotの概要',
        columns: ['項目', 'OpenMausBot'],
        rows: [
          { '項目': 'プラットフォーム', 'OpenMausBot': 'macOS、Windows x64、Ubuntu 24.04 x64（ベータ）' },
          { '項目': '価格', 'OpenMausBot': 'アプリは無料。任意のCloudは月$15、$49、$99' },
          { '項目': 'ライセンス', 'OpenMausBot': 'Apache 2.0（enterpriseフォルダは別）' },
          { '項目': '実行場所', 'OpenMausBot': 'アプリとデータは手元。モデルはCLIか接続サーバー経由' },
          { '項目': 'ローカルモデル', 'OpenMausBot': 'Ollama、LM Studio等で可能。PromptQuorumは未検証' },
          { '項目': '独自モデルの同梱', 'OpenMausBot': 'なし' },
          { '項目': '承認プロンプト', 'OpenMausBot': 'あり。シェルコマンド、ファイル編集、質問' },
          { '項目': 'MCPサーバーとCLI', 'OpenMausBot': 'どちらもREADMEに記載' },
        ],
        note: '項目は、2026年11月14日に確認したREADME、ドキュメント、ウェブサイトに基づいています。記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsOpenMausBot: {
        id: 'what-is-openmausbot',
        title: 'OpenMausBotとは',
        content: [
          '**OpenMausBotは、各ボットが独自の個性、モデル、コンピューター、連携アプリを持つ本物のエージェントになっているチャットアプリです。** READMEでは、xAIのGrok Botに着想を得た独立したオープンソースプロジェクトで、旧名はOpenGrokBot、MausBotとも呼ばれ、xAI、Meta、OpenAI、Manusとは無関係だと説明されています。',
          `公開元はSupamaus Software Private Limitedで、利用規約のページではインドで設立された会社とされています。リポジトリは開発者のMilind Soni氏のものです。GitHubのリポジトリページには${ST.ja('openmausbot')}個のスターが表示されています。READMEには、このプロジェクトにトークンはなく、その名前を使ったコインは無関係だとも記載されています。`,
        ],
      },
      isItLocal: {
        id: 'is-it-local',
        itemHeadings: true,
        title: 'ローカルAIか',
        content: [
          '**アプリはローカル、標準のモデルはローカルではなく、ローカルモデルは任意の選択です。** 3つの層に分けると答えがはっきりします。',
        ],
        columns: ['層', '実行場所', '情報源'],
        rows: [
          {
            '層': 'アプリ、ハーネスサーバー、データ',
            '実行場所': 'お使いのコンピューター上：127.0.0.1の小さなサーバーで、会話記録、キー、イベントは~/.openmausbotに保存',
            '情報源': 'README「Why」セクション',
          },
          {
            '層': '標準のエージェント（Claude、Codex、Grok）',
            '実行場所': '各ベンダーのクラウドモデル。インストールしてサインインしたCLI経由で接続し、プロンプトはそのベンダーに送信',
            '情報源': 'README「Bring your own agents」',
          },
          {
            '層': 'ローカルモデル（Ollama、LM Studio、oMLX、EXO、Unsloth）',
            '実行場所': 'お使いのコンピューターまたはネットワーク上。サーバーが標準のローカルアドレスで応答し、ボットにそのモデルを選んだ場合',
            '情報源': 'リポジトリのファイルserver/drivers/local-inject.ts、docs/custom-engines.md',
          },
          {
            '層': 'クラウドコンピューターと連携アプリ',
            '実行場所': '任意：ホスト型のLinuxデスクトップと、GmailやSlackなどへのComposio連携。Local VMも提供',
            '情報源': 'README「Agents with hands」',
          },
        ],
        note: 'ローカルモデルの行は、リポジトリのソースとドキュメントに基づいています。PromptQuorumはOpenMausBotでローカルモデルを動かしていないため、小さなモデルでの返信の品質、ツールの使い方、速度は不明です。ドキュメントによると、OpenAI互換サービス向けの組み込みエンジンは、モデル選択画面で「OpenAI-compatible (OpenRouter / Groq)」と表示されます。',
      },
      video: {
        id: 'video',
        title: '動画',
        youtubeUrl: 'https://www.youtube.com/watch?v=_rQPVOpjljE',
        content: [
          '**これは「NEW Open Source Grok Bot is INSANE (FREE!)」というタイトルのサードパーティ製動画です。** この動画を見てOpenMausBotについて質問する読者がいたため、ここに埋め込んでいます。PromptQuorumは動画の主張を検証しておらず、そのタイトルは制作者の意見であり、このレビューの結論ではありません。事実については、上のセクションとプロジェクト自身のページをご覧ください。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、エージェント1つ、ボット1つです。** 手順はREADMEとダウンロードページに沿っています。',
        ],
        numberedItems: [
          {
            title: '先にエージェントをインストールする',
            whyItMatters: 'claude、codex、grokのCLIのうち少なくとも1つをインストールしてサインインします。ローカルモデルを使う場合は、代わりにOllamaまたはLM Studioを起動してモデルを取得します。',
          },
          {
            title: 'OpenMausBotをインストールする',
            whyItMatters: '.dmgを開いてアプリをApplicationsにドラッグするか、Windowsのインストーラーを実行する（管理者権限は不要）か、.debをaptでインストールします。',
          },
          {
            title: 'ボットを作成してモデルを選ぶ',
            whyItMatters: 'インストール済みのCLIはモデル選択画面に自動で表示され、標準のアドレスで応答するローカルホストは「Custom」の下に一覧表示されます。',
          },
          {
            title: '重要な操作を承認する',
            whyItMatters: 'シェルコマンド、ファイル編集、質問は、許可または拒否できるカードとしてチャットに届きます。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心は、連絡先のように管理するエージェントの顔ぶれです。** 以下はすべてREADMEとドキュメントによります。',
        ],
        items: [
          '**ボットごとのモデル。** ClaudeとCodexのモデルが1つの選択画面に並び、会話の途中でも切り替えられます。',
          '**承認カード。** パーミッションブローカーが、危険な操作をクラウドでもローカルのコンピューターでも、ご自身で決める判断に変えます。',
          '**ボット用のコンピューター。** クラウドデスクトップ、隔離されたLocal VM、または明示的にオプトインした場合はmacOSとUbuntu Xorgのご自身のコンピューターです。',
          '**連携アプリ。** Composioを通じて、1回のOAuthサインインでGmail、Slack、GitHub、Notionなど数百のアプリにアクセスできます。',
          '**チャンネル、チーム、ルーティン。** 用途ごとの別チャンネル、インストール可能なチームファイル、スケジュールやアプリのイベントによるトリガーがあります。',
          '**音声。** ElevenLabs、Fish Audio、Grok、Macの内蔵音声、またはローカルのChatterboxサーバーによる音声返信と通話です。',
          '**自動化。** Claude DesktopやCursor向けのstdio MCPサーバーと、スクリプトやCI向けの`openmausbot`コマンドがあります。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**プライバシーポリシーには、デスクトップアプリはお使いのマシン上で動作し、会話はそこにとどまると記載されています。一方、ウェブサイトはオフにできる分析を使っています。** アプリの任意の利用分析は匿名で、設定からオフにできます。クラウドエージェント、Cloudコンピューター、連携アプリに送った内容は、そのサービスが自社の規約に従って扱います。',
          'アプリはApache 2.0で無料で、enterpriseフォルダにはソース公開型の別ライセンスがあります。任意のMausBot Cloudプランは月$15、$49、$99で、AIの利用料は含まれません。モデルの料金は、ご自身のClaude、ChatGPT、またはAPIのプランが支払います。READMEによると、パッケージ版のデスクトップアプリが保存するキーはオペレーティングシステムによって暗号化されますが、ターミナルでのセットアップでは、APIキーが非公開の設定ファイルに平文で保存されます。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: ['メリット', '実際の使い勝手', '制限・注意点'],
        rows: [
          {
            'メリット': 'オープンソース、Apache 2.0',
            '実際の使い勝手': 'コード、ドライバー、ドキュメントを読んで変更できます。',
            '制限・注意点': 'enterpriseフォルダは別のライセンスです。',
          },
          {
            'メリット': '自分のエージェントを持ち込める',
            '実際の使い勝手': 'プロキシなしで、既存のClaude、Codex、Grokのサインインを使えます。',
            '制限・注意点': 'これらはクラウドモデルなので、標準ではプライベートではありません。',
          },
          {
            'メリット': 'ローカルモデルの選択肢',
            '実際の使い勝手': 'OllamaやLM Studioなどのサーバーをボットごとに選べます。',
            '制限・注意点': 'PromptQuorumは未検証。小さなモデルはツールを多用するエージェント作業が苦手な場合があります。',
          },
          {
            'メリット': '承認カード',
            '実際の使い勝手': '危険な操作は、ご自身の判断を待ちます。',
            '制限・注意点': 'コンピューターにアクセスできるボットは、依頼ごとに慎重な確認が必要です。',
          },
          {
            'メリット': '動きの速いプロジェクト',
            '実際の使い勝手': 'バージョン0.1.155が2026年11月13日に公開されました。',
            '制限・注意点': 'とても新しく、2026年8月に作成された0.1.x。Ubuntuはまだベータ版です。',
          },
          {
            'メリット': '無料のアプリ',
            '実際の使い勝手': 'デスクトップアプリにアカウントは不要です。',
            '制限・注意点': 'モデルの料金はご自身の負担で、Windowsのインストーラーは未署名です。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'OpenMausBotと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い、エージェントのオーケストレーションとパーソナルエージェントのツールです。',
        ],
        columns: ['アプリ', '対応', '価格とライセンス', '役割', '主な違い'],
        rows: [
          {
            'アプリ': 'OpenMausBot',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、Apache 2.0',
            '役割': 'チャット形式のエージェントチーム',
            '主な違い': 'Claude、Codex、GrokのCLIの上にあるメッセージアプリ型の画面',
          },
          {
            'アプリ': '[Multica](/ja/power-local-llm/multica-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': 'フリーミアム、ソース公開型',
            '役割': 'コーディングエージェントに作業を割り当てるワークスペース',
            '主な違い': 'コーディングエージェント向けのタスクボード、セルフホスト',
          },
          {
            'アプリ': '[Mission Control](/ja/power-local-llm/mission-control-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': 'エージェント実行のコントロールプレーン',
            '主な違い': '複数のエージェントランタイムの実行とコストを追跡',
          },
          {
            'アプリ': '[Atomic Bot](/ja/power-local-llm/atomic-bot-review)',
            '対応': 'Mac、Windows、Linux、iOS、Android',
            '価格とライセンス': 'フリーミアム、MIT',
            '役割': 'パーソナルAIコワーカー',
            '主な違い': 'OpenClawスタックをパッケージ化。ローカルでもクラウドでも動作',
          },
          {
            'アプリ': '[Agent Zero](/ja/power-local-llm/agent-zero-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': '自律型エージェント',
            '主な違い': 'ボットの顔ぶれではなく、1つの自律型エージェント',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'OpenMausBotが向いている人',
        items: [
          '**すでにClaude、Codex、Grokに料金を払っている人。** アプリはそれらのサインインを再利用します。',
          '**複数のエージェントを1つのチャットアプリで使いたい人。** 各ボットが独自のモデルと役割を持ちます。',
          '**OllamaやLM Studioで試したい人。** ドキュメントに記載されたローカルホストで、実験ができます。',
          '**承認プロンプトを求めるチーム。** 危険な操作は、判断を待ちます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'OpenMausBotが向いていない人',
        items: [
          '**標準で、すべてをオフラインで動かしたい人。** 標準のエージェントはクラウドモデルです。',
          '**成熟したツールが必要な人。** 2026年8月に始まった0.1.xのプロジェクトです。',
          '**未署名のWindowsインストーラーを受け入れられない人。** SmartScreenが警告を表示します。',
          '**検証済みのローカルモデル環境を期待する人。** PromptQuorumは動かしていません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'OpenMausBotを完全にオフラインで使えますか？',
            a: 'すべてのボットが、お使いのコンピューター上のローカルモデルサーバーを使う場合に限ります。標準のClaude、Codex、Grokのエージェントはインターネットが必要で、PromptQuorumはオフラインの環境をテストしていません。',
          },
          {
            q: 'どのローカルモデルサーバーを認識しますか？',
            a: 'ソースには、標準のローカルアドレスにあるoMLX、Ollama、EXO、LM Studio、Unslothが挙げられており、ドキュメントには、OpenAI互換のアドレスに使える組み込みエンジンが説明されています。',
          },
          {
            q: 'OpenMausBotはxAIが作っていますか？',
            a: 'いいえ。READMEには、Grok Botに着想を得た独立したプロジェクトで、xAI、Meta、OpenAI、Manusとは無関係だと記載されています。',
          },
          {
            q: '暗号資産のトークンはありますか？',
            a: 'いいえ。READMEには、プロジェクトにトークンはなく、その名前を使ったコインは無関係だと記載されています。',
          },
          {
            q: 'このレビューの動画は公式のデモですか？',
            a: 'PromptQuorumは誰が作ったか確認できませんでした。熱のこもったタイトルのサードパーティ製動画で、背景情報として掲載しており、検証はしていません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'すでにClaude、Codex、Grokを使っていて、承認プロンプトとオープンなライセンスを備えた、チャット形式のエージェントチームを自分のコンピューター上で使いたい方にOpenMausBotは向いています。標準ではローカルAIではないため、完全なローカル運用を望む方は、OllamaとLM Studioの経路を実験として扱ってください。',
          '注意点は成熟度と検証です。2026年8月に作られたプロジェクト、未署名のWindowsインストーラー、ベータ版のUbuntu、そしてここでのローカルモデルのテストがないことです。頼る前に、まず1つのボットで試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[OpenMausBotのリポジトリとREADME](https://github.com/milind-soni/OpenMausBot) — 機能、エンジン、ライセンス、インストール手順。',
          '[Bring your own engine](https://github.com/milind-soni/OpenMausBot/blob/main/docs/custom-engines.md) — カスタムACPエンジンとOpenAI互換エンジン。',
          '[Other model providers](https://github.com/milind-soni/OpenMausBot/blob/main/apps/docs/content/docs/providers/model-providers.mdx) — チャットエンジンとOpenCodeの経路。',
          '[ソース内のローカルホスト一覧](https://github.com/milind-soni/OpenMausBot/blob/main/server/drivers/local-inject.ts) — Ollama、LM Studio、oMLX、EXO、Unslothのアドレス。',
          '[Releases](https://github.com/milind-soni/OpenMausBot/releases) — バージョン0.1.155（2026年11月13日）とインストーラーのファイル。',
          '[MausBot公式サイト](https://mausbot.com/) — ダウンロード、価格、プライバシーポリシー、利用規約。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Multicaレビュー](/ja/power-local-llm/multica-review) — コーディングエージェントに作業を割り当てる、セルフホスト型のワークスペース。',
          '[Mission Controlレビュー](/ja/power-local-llm/mission-control-review) — エージェントの実行とコストを管理するコントロールプレーン。',
          '[Atomic Botレビュー](/ja/power-local-llm/atomic-bot-review) — ローカルでもクラウドでも動く、パーソナルAIコワーカー。',
          '[Ollamaレビュー](/ja/power-local-llm/ollama-review) — OpenMausBotが接続できるローカルモデルサーバー。',
          '[LM Studioレビュー](/ja/power-local-llm/lm-studio-review) — OpenAI互換のアドレスでローカルモデルを提供するデスクトップアプリ。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-14',
    dateModified: '2026-11-14',
    next_refresh_due: '2027-05-14',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openmausbot-review-hero-zh.webp',
    title: 'OpenMausBot评测：这款开源Grok Bot是本地AI吗？',
    seoTitle: 'OpenMausBot评测：开源Grok Bot是本地AI吗',
    intro: 'OpenMausBot（也叫MausBot，前身为OpenGrokBot）是一款免费开源的桌面聊天应用，其中每个联系人都是一个AI智能体。它本身不是本地AI：它驱动的是你已经安装的Claude、Codex和Grok命令行智能体，而这些都是云端模型。其源代码和文档显示，也可以通过Ollama、LM Studio或任何兼容OpenAI的地址接入本地模型。本评测先回答这个问题，再依据项目自己的代码仓库和官网介绍安装、价格、隐私和替代方案。PromptQuorum没有安装该应用，也没有通过它运行本地模型。',
    metaDescription: 'OpenMausBot评测：基于Claude、Codex或Grok智能体的开源Grok Bot替代品，默认不在本地运行，可接入Ollama和LM Studio。免费，Apache 2.0。',
    twitterDescription: 'OpenMausBot评测：一支免费开源的桌面AI机器人团队。它是本地AI吗？默认使用云端智能体，也可接入本地模型。价格、隐私与限制。',
    audience: '看到这款开源Grok Bot替代品后，想知道它是否在本地运行、价格如何，以及Ollama或LM Studio模型能否驱动它的人。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenMausBot review',
    targetKeywords: [
      'openmausbot 评测',
      'openmausbot',
      'mausbot',
      '开源 grok bot 替代品',
      'openmausbot 本地大模型',
      'openmausbot ollama',
      'openmausbot lm studio',
      'ai 智能体团队 桌面应用',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows',
      'Ubuntu',
    ],
    leadAnswerBlock: '**OpenMausBot是一款免费的Apache 2.0桌面聊天应用，用来管理一支AI机器人团队；它默认不是本地AI：其机器人运行在你已安装的Claude、Codex或Grok命令行智能体上，而这些都是云端模型。** 项目的源代码和文档显示，可以通过Ollama、LM Studio和其他兼容OpenAI的服务器接入本地模型，PromptQuorum没有测试这一点。',
    quickAnswerTop: {
      zh: {
        question: 'OpenMausBot是本地AI，还是本地AI可以驱动它？',
        answer: '应用本身在你的电脑上运行，聊天记录、密钥和事件保存在本机的一个文件夹中，但它不附带任何模型。默认情况下，每个机器人使用Claude或Codex这类智能体命令行工具，它们会把你的提示发送给对应的厂商。代码仓库还列出了它会探测的本地主机，包括Ollama和LM Studio，因此可以为机器人选择本地模型。小型本地模型能否胜任它那种大量调用工具的智能体工作，这里没有测试。',
        bullets: [
          '默认路径：你已登录的claude、codex和grok命令行工具；适用服务商的费用和限额。',
          '本地路径：这台电脑上的Ollama、LM Studio、oMLX、EXO和Unsloth服务器，或任何兼容OpenAI的地址。',
          '应用免费；可选的付费云端方案提供一台常开的云端电脑，不包含AI用量。',
          '提供macOS、Windows和Ubuntu安装包；Windows安装包未签名，Ubuntu为测试版。',
          '下方链接的视频来自第三方，PromptQuorum没有核实。',
        ],
        updatedDate: '2026-11-14',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '获取OpenMausBot', anchor: 'get-it' },
      { label: 'OpenMausBot概览', anchor: 'at-a-glance' },
      { label: 'OpenMausBot是什么', anchor: 'what-is-openmausbot' },
      { label: '它是本地AI吗？', anchor: 'is-it-local' },
      { label: '视频', anchor: 'video' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'OpenMausBot与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用OpenMausBot的人', anchor: 'who-should-use' },
      { label: '不适合使用OpenMausBot的人', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenMausBot是一款开源聊天应用，在你的电脑上管理一支AI智能体团队，默认使用云端智能体，只有在你接入时才使用本地模型。',
          },
          {
            type: 'plain-terms',
            text: '把它想成一个每个联系人都是AI员工的通讯应用：应用属于你且开源，但每个联系人背后的“大脑”是你接入的那个模型。',
          },
        ],
        items: [
          '是否本地：应用及其数据文件夹在本地；默认智能体不在本地，本地模型是可选的接入方式。',
          '许可与开发者：Apache 2.0，由Supamaus Software Private Limited发布，该公司在印度注册成立；企业版文件夹有自己的源码可见许可证。',
          '费用：应用免费，模型用量由你自己的服务商计费，可选的云端方案每月$15起。',
          '维护状态：版本0.1.155于2026年11月13日发布，说明项目仍在积极更新，但这是一条很年轻的0.1.x版本线，创建于2026年8月。',
          '不足：Windows安装包未签名，Ubuntu为测试版，PromptQuorum没有进行本地模型测试。',
        ],
      },
      getItOpenMausBot: {
        id: 'get-it',
        title: '获取OpenMausBot',
        content: [
          '**OpenMausBot的安装方式与其他桌面应用相同，无需使用终端。** 发布页面和官网提供相同的安装包，harness服务器已内置其中。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Mac（Apple silicon）',
            '获取方式': '[OpenMausBot.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.dmg) — 据README称已签名并公证',
          },
          {
            '平台': 'Mac（Intel）',
            '获取方式': '[OpenMausBot-intel.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-intel.dmg)',
          },
          {
            '平台': 'Windows（x64）',
            '获取方式': '[OpenMausBot-setup.exe](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-setup.exe) — 尚未代码签名；SmartScreen会显示“未知发布者”',
          },
          {
            '平台': 'Ubuntu 24.04（x64，测试版）',
            '获取方式': '[OpenMausBot-amd64.deb](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-amd64.deb) 或 [AppImage](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.AppImage)',
          },
          {
            '平台': '终端或服务器',
            '获取方式': '`npx openmausbot`（Node 24+）— `serve`选项见README',
          },
          {
            '平台': '官网',
            '获取方式': '[mausbot.com](https://mausbot.com/)（openmausbot.com会跳转到这里）',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[MausBot隐私政策](https://mausbot.com/privacy)',
          },
          {
            '平台': '源代码',
            '获取方式': '[github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) — Apache 2.0',
          },
        ],
        note: 'Android和iOS配套应用被描述为运行中的桌面端或服务器的遥控器，通过项目的Discord分享，而不是通过应用商店。你还需要至少安装并登录一个智能体命令行工具（Claude、Codex或Grok），或者接入一个模型服务器。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'OpenMausBot概览',
        columns: ['属性', 'OpenMausBot'],
        rows: [
          { '属性': '平台', 'OpenMausBot': 'macOS、Windows x64、Ubuntu 24.04 x64（测试版）' },
          { '属性': '价格', 'OpenMausBot': '应用免费；可选云端方案每月$15、$49或$99' },
          { '属性': '许可', 'OpenMausBot': 'Apache 2.0（企业版文件夹另行授权）' },
          { '属性': '运行方式', 'OpenMausBot': '应用和数据在你的电脑上；模型通过智能体命令行工具或已接入的服务器' },
          { '属性': '本地模型', 'OpenMausBot': '可通过Ollama、LM Studio和兼容OpenAI的服务器；PromptQuorum未测试' },
          { '属性': '自带模型', 'OpenMausBot': '否' },
          { '属性': '审批提示', 'OpenMausBot': '有，针对Shell命令、文件编辑和提问' },
          { '属性': 'MCP服务器与命令行', 'OpenMausBot': 'README中均有列出' },
        ],
        note: '各属性来自2026年11月14日阅读的README、文档和官网。未提及表示未知，而不是不支持。',
      },
      whatIsOpenMausBot: {
        id: 'what-is-openmausbot',
        title: 'OpenMausBot是什么',
        content: [
          '**OpenMausBot是一款聊天应用，其中每个机器人都是一个真正的智能体，有自己的个性、模型、电脑和已连接的应用。** README称它是受xAI的Grok Bot启发的独立开源项目，前身名为OpenGrokBot，也叫MausBot，并声明与xAI、Meta、OpenAI或Manus没有任何关联。',
          `它由Supamaus Software Private Limited发布，服务条款页面称该公司是在印度注册成立的公司；代码仓库属于开发者Milind Soni。GitHub 仓库页面显示有${ST.zh('openmausbot')}个星标。README还声明该项目没有代币，任何使用其名称的代币都与其无关。`,
        ],
      },
      isItLocal: {
        id: 'is-it-local',
        itemHeadings: true,
        title: '它是本地AI吗？',
        content: [
          '**应用在本地，默认模型不在本地，本地模型需要自行启用。** 三个层面分别回答这个问题。',
        ],
        columns: ['层面', '运行位置', '来源'],
        rows: [
          {
            '层面': '应用、harness服务器和数据',
            '运行位置': '在你的电脑上：127.0.0.1上的一个小型服务器，聊天记录、密钥和事件保存在~/.openmausbot',
            '来源': 'README“Why”部分',
          },
          {
            '层面': '默认智能体（Claude、Codex、Grok）',
            '运行位置': '厂商的云端模型，通过你已安装并登录的命令行工具访问；你的提示会发送给该厂商',
            '来源': 'README“Bring your own agents”',
          },
          {
            '层面': '本地模型（Ollama、LM Studio、oMLX、EXO、Unsloth）',
            '运行位置': '在你的电脑或网络上，前提是某个服务器在其默认本地地址上响应，并且你为机器人选择了它的模型',
            '来源': '仓库文件server/drivers/local-inject.ts；docs/custom-engines.md',
          },
          {
            '层面': '云端电脑和已连接的应用',
            '运行位置': '可选：托管的Linux桌面，以及通过Composio连接Gmail、Slack等；还提供本地虚拟机',
            '来源': 'README“Agents with hands”',
          },
        ],
        note: '本地模型一行的依据是仓库的源代码和文档。PromptQuorum没有通过OpenMausBot运行本地模型，因此小型模型的回复质量、工具调用和速度未知。据文档称，面向兼容OpenAI服务的内置引擎在模型选择器中标为“OpenAI-compatible (OpenRouter / Groq)”。',
      },
      video: {
        id: 'video',
        title: '视频',
        youtubeUrl: 'https://www.youtube.com/watch?v=_rQPVOpjljE',
        content: [
          '**这是一段第三方视频，标题为“NEW Open Source Grok Bot is INSANE (FREE!)”。** 之所以嵌入在这里，是因为读者在看过它之后来询问OpenMausBot。PromptQuorum没有审查其说法，其标题是创作者的个人看法，而不是本评测的结论。事实请参阅上面的各部分和项目自己的页面。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置包括安装、一个智能体和一个机器人。** 以下步骤依据README和下载页面。',
        ],
        numberedItems: [
          {
            title: '先安装一个智能体',
            whyItMatters: '至少安装并登录claude、codex或grok命令行工具之一。若要使用本地模型，则改为启动Ollama或LM Studio并拉取一个模型。',
          },
          {
            title: '安装OpenMausBot',
            whyItMatters: '打开.dmg并把应用拖到“应用程序”，或运行Windows安装程序（无需管理员权限），或用apt安装.deb。',
          },
          {
            title: '创建机器人并选择其模型',
            whyItMatters: '已安装的命令行工具会自动出现在模型选择器中；在默认地址上响应的本地主机列在“自定义”下。',
          },
          {
            title: '批准重要操作',
            whyItMatters: 'Shell命令、文件编辑和提问会以卡片形式出现在聊天中，由你允许或拒绝。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能集中在一份你像管理联系人一样管理的智能体名单上。** 以下内容均来自README和文档。',
        ],
        items: [
          '**每个机器人一个模型。** Claude和Codex模型并列在同一个选择器中，可在对话中途切换。',
          '**审批卡片。** 权限代理把有风险的操作变成由你决定的事项，云端电脑和本地电脑均适用。',
          '**机器人的电脑。** 云端桌面、隔离的本地虚拟机，或者在明确选择启用后使用你自己的电脑（macOS和Ubuntu Xorg）。',
          '**已连接的应用。** Composio只需一次OAuth登录，即可访问Gmail、Slack、GitHub、Notion等数百个应用。',
          '**频道、团队和例行任务。** 按场景划分的独立频道、可安装的团队文件，以及定时或应用事件触发。',
          '**语音。** 通过ElevenLabs、Fish Audio、Grok、Mac内置声音或本地Chatterbox服务器进行语音回复和通话。',
          '**自动化。** 面向Claude Desktop或Cursor的stdio MCP服务器，以及用于脚本和CI的`openmausbot`命令。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**隐私政策称，桌面应用在你的机器上运行，你的对话保留在本机，而官网使用的分析工具可以关闭。** 应用内可选的使用情况分析是匿名的，可以在设置中关闭。你发送给云端智能体、云端电脑或已连接应用的任何内容，由该服务按其自己的条款处理。',
          '应用在Apache 2.0下免费，企业版文件夹另有一份源码可见许可证。可选的MausBot云端方案每月$15、$49或$99，不包含AI用量；模型费用由你自己的Claude、ChatGPT或API方案支付。据README称，打包的桌面应用保存的密钥由操作系统加密，而终端安装方式会把API密钥以明文存放在一个私有配置文件中。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': '开源，Apache 2.0',
            '实际使用中的意义': '代码、驱动和文档可以阅读和修改。',
            '局限 / 注意事项': '企业版文件夹使用不同的许可证。',
          },
          {
            '优势': '自带智能体',
            '实际使用中的意义': '直接使用你现有的Claude、Codex或Grok登录，无需代理。',
            '局限 / 注意事项': '这些是云端模型，因此默认并不私密。',
          },
          {
            '优势': '本地模型选项',
            '实际使用中的意义': '可以为每个机器人选择Ollama、LM Studio和其他服务器。',
            '局限 / 注意事项': 'PromptQuorum未测试；小型模型可能难以胜任大量调用工具的智能体工作。',
          },
          {
            '优势': '审批卡片',
            '实际使用中的意义': '有风险的操作会等待你的决定。',
            '局限 / 注意事项': '能访问电脑的机器人仍需仔细审查每一次请求。',
          },
          {
            '优势': '快速迭代的项目',
            '实际使用中的意义': '版本0.1.155于2026年11月13日发布。',
            '局限 / 注意事项': '非常年轻：创建于2026年8月，0.1.x版本，Ubuntu仍为测试版。',
          },
          {
            '优势': '免费应用',
            '实际使用中的意义': '桌面应用无需账号。',
            '局限 / 注意事项': '模型费用由你承担；Windows安装包未签名。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'OpenMausBot与替代方案对比',
        content: [
          '以下是目录中最接近的智能体编排和个人智能体工具。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'OpenMausBot',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，Apache 2.0',
            '定位': '聊天式智能体团队',
            '主要区别': '建立在Claude、Codex和Grok命令行工具之上的通讯应用式界面',
          },
          {
            '应用': '[Multica](/zh/power-local-llm/multica-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费增值，源码可见',
            '定位': '分配编码智能体工作的工作区',
            '主要区别': '面向编码智能体的任务看板，可自托管',
          },
          {
            '应用': '[Mission Control](/zh/power-local-llm/mission-control-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，MIT',
            '定位': '智能体运行的控制平面',
            '主要区别': '跨智能体运行时跟踪运行和开支',
          },
          {
            '应用': '[Atomic Bot](/zh/power-local-llm/atomic-bot-review)',
            '平台': 'Mac、Windows、Linux、iOS、Android',
            '价格与许可': '免费增值，MIT',
            '定位': '个人AI同事',
            '主要区别': '打包OpenClaw技术栈；可本地或在云端运行',
          },
          {
            '应用': '[Agent Zero](/zh/power-local-llm/agent-zero-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，MIT',
            '定位': '自主智能体',
            '主要区别': '一个自主智能体，而不是一个机器人名单',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用OpenMausBot的人',
        items: [
          '**已经为Claude、Codex或Grok付费的人。** 应用会复用这些登录。',
          '**想在一个聊天应用中使用多个智能体的用户。** 每个机器人有自己的模型和角色。',
          '**使用Ollama或LM Studio的折腾爱好者。** 文档中列出的本地主机使这类实验成为可能。',
          '**希望有审批提示的团队。** 有风险的操作会等待决定。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用OpenMausBot的人',
        items: [
          '**需要默认一切离线的人。** 默认智能体是云端模型。',
          '**需要成熟工具的人。** 这是一个2026年8月的0.1.x项目。',
          '**无法接受未签名Windows安装包的用户。** SmartScreen会发出警告。',
          '**期望有经过测试的本地模型配置的人。** PromptQuorum没有运行过。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'OpenMausBot可以完全离线运行吗？',
            a: '只有当每个机器人都使用你电脑上的本地模型服务器时才可以。默认的Claude、Codex和Grok智能体需要联网，PromptQuorum没有测试离线配置。',
          },
          {
            q: '它能识别哪些本地模型服务器？',
            a: '源代码列出了在默认本地地址上的oMLX、Ollama、EXO、LM Studio和Unsloth，文档还描述了一个适用于任何兼容OpenAI地址的内置引擎。',
          },
          {
            q: 'OpenMausBot是xAI开发的吗？',
            a: '不是。README称它是受Grok Bot启发的独立项目，与xAI、Meta、OpenAI或Manus没有关联。',
          },
          {
            q: '有加密代币吗？',
            a: '没有。README声明该项目没有代币，使用其名称的代币与其无关。',
          },
          {
            q: '本评测中的视频是官方演示吗？',
            a: 'PromptQuorum无法确认它是谁制作的。这是一段标题很夸张的第三方视频，仅作为背景链接，未经核实。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你已经在使用Claude、Codex或Grok，想在自己的电脑上拥有一支聊天式的智能体团队，并且需要审批提示和开源许可证，OpenMausBot是个合适的选择。它默认不是本地AI，想要完全本地运行的人应把Ollama和LM Studio这条路线当作一次实验。',
          '需要注意的是成熟度和可验证性：项目创建于2026年8月、Windows安装包未签名、Ubuntu版本为测试版，而且这里没有进行本地模型测试。在依赖它之前，请先用一个机器人试一试。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[OpenMausBot代码仓库和README](https://github.com/milind-soni/OpenMausBot) — 功能、引擎、许可证和安装步骤。',
          '[Bring your own engine](https://github.com/milind-soni/OpenMausBot/blob/main/docs/custom-engines.md) — 自定义ACP和兼容OpenAI的引擎。',
          '[Other model providers](https://github.com/milind-soni/OpenMausBot/blob/main/apps/docs/content/docs/providers/model-providers.mdx) — 聊天引擎和OpenCode路线。',
          '[源代码中的本地主机列表](https://github.com/milind-soni/OpenMausBot/blob/main/server/drivers/local-inject.ts) — Ollama、LM Studio、oMLX、EXO和Unsloth的地址。',
          '[发布页面](https://github.com/milind-soni/OpenMausBot/releases) — 版本0.1.155，2026年11月13日，以及安装文件。',
          '[MausBot官网](https://mausbot.com/) — 下载、价格、隐私政策和服务条款。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Multica评测](/zh/power-local-llm/multica-review) — 一个可自托管的工作区，用于把工作分配给编码智能体。',
          '[Mission Control评测](/zh/power-local-llm/mission-control-review) — 智能体运行和开支的控制平面。',
          '[Atomic Bot评测](/zh/power-local-llm/atomic-bot-review) — 可在本地或云端运行的个人AI同事。',
          '[Ollama评测](/zh/power-local-llm/ollama-review) — OpenMausBot可以接入的本地模型服务器。',
          '[LM Studio评测](/zh/power-local-llm/lm-studio-review) — 通过兼容OpenAI的地址提供本地模型服务的桌面应用。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-14',
    dateModified: '2026-11-14',
    next_refresh_due: '2027-05-14',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openmausbot-review-hero-es.webp',
    title: 'Reseña de OpenMausBot: ¿es este bot Grok abierto IA local?',
    seoTitle: 'Reseña de OpenMausBot: bot Grok abierto, ¿IA local?',
    intro: 'OpenMausBot (también llamado MausBot, antes OpenGrokBot) es una app de chat de escritorio, gratuita y de código abierto, en la que cada contacto es un agente de IA. No es una IA local por sí misma: maneja los agentes de línea de comandos de Claude, Codex y Grok que ya tengas, y esos son modelos en la nube. Su código fuente y su documentación muestran que también se pueden conectar modelos locales, mediante Ollama, LM Studio o cualquier dirección compatible con OpenAI. Esta reseña responde primero a esa pregunta y luego repasa instalación, precio, privacidad y alternativas, a partir del repositorio y del sitio web del propio proyecto. PromptQuorum no instaló la app ni ejecutó ningún modelo local con ella.',
    metaDescription: 'Reseña de OpenMausBot: alternativa abierta a Grok Bot con agentes Claude, Codex o Grok. No es local por defecto; se conectan Ollama y LM Studio. Gratis.',
    twitterDescription: 'Reseña de OpenMausBot: un equipo de bots de IA gratuito y de código abierto para tu escritorio. ¿Es IA local? Agentes en la nube por defecto, modelos locales posibles. Precio, privacidad, límites.',
    audience: 'Personas que vieron la alternativa de código abierto a Grok Bot y quieren saber si es local, cuánto cuesta y si los modelos de Ollama o LM Studio pueden manejarla.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenMausBot review',
    targetKeywords: [
      'reseña openmausbot',
      'openmausbot',
      'mausbot',
      'alternativa open source a grok bot',
      'openmausbot llm local',
      'openmausbot ollama',
      'openmausbot lm studio',
      'app de escritorio equipo de agentes de ia',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows',
      'Ubuntu',
    ],
    leadAnswerBlock: '**OpenMausBot es una app de chat de escritorio gratuita, con licencia Apache 2.0, para un equipo de bots de IA, y no es una IA local por defecto: sus bots funcionan con los agentes de línea de comandos de Claude, Codex o Grok que tengas instalados, que son modelos en la nube.** El código y la documentación del proyecto muestran que se pueden conectar modelos locales mediante Ollama, LM Studio y otros servidores compatibles con OpenAI, algo que PromptQuorum no probó.',
    quickAnswerTop: {
      es: {
        question: '¿Es OpenMausBot una IA local, o puede una IA local manejarlo?',
        answer: 'La app se ejecuta en tu ordenador y guarda allí chats, claves y eventos en una carpeta, pero no incluye ningún modelo. Por defecto cada bot usa una CLI de agente como Claude o Codex, que envía tus prompts a ese proveedor. El repositorio también lista servidores locales que la app busca, entre ellos Ollama y LM Studio, así que se puede elegir un modelo local para un bot. Aquí no se probó cómo se desenvuelven los modelos locales pequeños en su trabajo de agente con muchas herramientas.',
        bullets: [
          'Ruta por defecto: las CLI claude, codex y grok en las que ya iniciaste sesión; se aplican las tarifas y límites del proveedor.',
          'Ruta local: servidores de Ollama, LM Studio, oMLX, EXO y Unsloth en este ordenador, o cualquier dirección compatible con OpenAI.',
          'La app es gratuita; un plan Cloud opcional de pago añade una máquina en la nube siempre activa y no incluye el uso de IA.',
          'Hay instaladores para macOS, Windows y Ubuntu; el de Windows no está firmado y Ubuntu está en beta.',
          'El vídeo enlazado más abajo es de terceros y PromptQuorum no lo verificó.',
        ],
        updatedDate: '2026-11-14',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir OpenMausBot', anchor: 'get-it' },
      { label: 'OpenMausBot de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es OpenMausBot', anchor: 'what-is-openmausbot' },
      { label: '¿Es IA local?', anchor: 'is-it-local' },
      { label: 'El vídeo', anchor: 'video' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'OpenMausBot frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar OpenMausBot', anchor: 'who-should-use' },
      { label: 'Quién no debería usar OpenMausBot', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenMausBot es una app de chat de código abierto que gestiona un equipo de agentes de IA en tu ordenador, con agentes en la nube por defecto y modelos locales solo si los conectas.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una app de mensajería en la que cada contacto es un trabajador de IA: la app es tuya y abierta, pero el cerebro de cada contacto es el modelo que conectes.',
          },
        ],
        items: [
          'Local o no: la app y su carpeta de datos son locales; los agentes por defecto no lo son, y los modelos locales son una conexión opcional.',
          'Licencia y fabricante: Apache 2.0, publicada por Supamaus Software Private Limited, una empresa constituida en la India; una carpeta enterprise tiene su propia licencia de código disponible.',
          'Coste: la app es gratuita, el uso de modelos lo factura tu propio proveedor y los planes Cloud opcionales empiezan en 15 $ al mes.',
          'Mantenimiento: la versión 0.1.155 salió el 13 de noviembre de 2026, así que el proyecto se actualiza de forma activa, pero es una línea 0.1.x joven creada en agosto de 2026.',
          'Advertencias: instalador de Windows sin firmar, Ubuntu en beta y ninguna prueba de modelos locales por parte de PromptQuorum.',
        ],
      },
      getItOpenMausBot: {
        id: 'get-it',
        title: 'Conseguir OpenMausBot',
        content: [
          '**OpenMausBot se instala como cualquier app de escritorio, así que no hace falta terminal.** La página de versiones y el sitio oficial ofrecen los mismos instaladores, y el servidor del arnés viene integrado en ellos.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Mac (Apple silicon)',
            'Dónde conseguirla': '[OpenMausBot.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.dmg) — firmado y notarizado, según el README',
          },
          {
            Plataforma: 'Mac (Intel)',
            'Dónde conseguirla': '[OpenMausBot-intel.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-intel.dmg)',
          },
          {
            Plataforma: 'Windows (x64)',
            'Dónde conseguirla': '[OpenMausBot-setup.exe](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-setup.exe) — aún sin firma de código; SmartScreen muestra «editor desconocido»',
          },
          {
            Plataforma: 'Ubuntu 24.04 (x64, beta)',
            'Dónde conseguirla': '[OpenMausBot-amd64.deb](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-amd64.deb) o [AppImage](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.AppImage)',
          },
          {
            Plataforma: 'Terminal o servidor',
            'Dónde conseguirla': '`npx openmausbot` (Node 24+) — consulta el README para las opciones de `serve`',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[mausbot.com](https://mausbot.com/) (openmausbot.com redirige allí)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de MausBot](https://mausbot.com/privacy)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': '[github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) — Apache 2.0',
          },
        ],
        note: 'Las apps complementarias para Android e iOS se describen como mandos a distancia de un escritorio o servidor en marcha y se comparten por el Discord del proyecto, no por las tiendas de apps. También necesitas al menos una CLI de agente instalada y con sesión iniciada (Claude, Codex o Grok), o un servidor de modelos conectado.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'OpenMausBot de un vistazo',
        columns: ['Atributo', 'OpenMausBot'],
        rows: [
          { Atributo: 'Plataforma', OpenMausBot: 'macOS, Windows x64, Ubuntu 24.04 x64 (beta)' },
          { Atributo: 'Precio', OpenMausBot: 'App gratuita; Cloud opcional 15, 49 o 99 $ al mes' },
          { Atributo: 'Licencia', OpenMausBot: 'Apache 2.0 (carpeta enterprise aparte)' },
          { Atributo: 'Ejecución', OpenMausBot: 'App y datos en tu ordenador; modelos vía CLI o servidores' },
          { Atributo: 'Modelos locales', OpenMausBot: 'Posibles con Ollama, LM Studio y servidores compatibles con OpenAI; sin probar por PromptQuorum' },
          { Atributo: 'Modelo propio incluido', OpenMausBot: 'No' },
          { Atributo: 'Avisos de aprobación', OpenMausBot: 'Sí, para comandos de shell, ediciones de archivos y preguntas' },
          { Atributo: 'Servidor MCP y CLI', OpenMausBot: 'Ambos figuran en el README' },
        ],
        note: 'Los atributos proceden del README, la documentación y el sitio web, leídos el 14 de noviembre de 2026. Que falte una afirmación significa desconocido, no no compatible.',
      },
      whatIsOpenMausBot: {
        id: 'what-is-openmausbot',
        title: 'Qué es OpenMausBot',
        content: [
          '**OpenMausBot es una app de chat en la que cada bot es un agente real con su propia personalidad, modelo, ordenador y apps conectadas.** El README la describe como un proyecto independiente y de código abierto inspirado en Grok Bot de xAI, antes llamado OpenGrokBot y también conocido como MausBot, y dice que no está afiliado a xAI, Meta, OpenAI ni Manus.',
          `La publica Supamaus Software Private Limited, que la página de términos describe como una empresa constituida en la India; el repositorio pertenece al desarrollador Milind Soni. La página del repositorio en GitHub muestra ${ST.es('openmausbot')} estrellas. El README también afirma que el proyecto no tiene ningún token y que cualquier moneda que use su nombre no guarda relación con él.`,
        ],
      },
      isItLocal: {
        id: 'is-it-local',
        itemHeadings: true,
        title: '¿Es IA local?',
        content: [
          '**La app es local, los modelos por defecto no lo son y los modelos locales son opcionales.** Tres capas responden a la pregunta por separado.',
        ],
        columns: ['Capa', 'Dónde se ejecuta', 'Fuente'],
        rows: [
          {
            Capa: 'App, servidor del arnés y datos',
            'Dónde se ejecuta': 'En tu ordenador: un pequeño servidor en 127.0.0.1, con transcripciones, claves y eventos en ~/.openmausbot',
            Fuente: 'README, sección «Why»',
          },
          {
            Capa: 'Agentes por defecto (Claude, Codex, Grok)',
            'Dónde se ejecuta': 'Los modelos en la nube de los proveedores, a través de las CLI que instalaste y con las que iniciaste sesión; tus prompts van a ese proveedor',
            Fuente: 'README, «Bring your own agents»',
          },
          {
            Capa: 'Modelos locales (Ollama, LM Studio, oMLX, EXO, Unsloth)',
            'Dónde se ejecuta': 'En tu ordenador o red, cuando un servidor responde en su dirección local predeterminada y eliges su modelo para un bot',
            Fuente: 'Archivo del repositorio server/drivers/local-inject.ts; docs/custom-engines.md',
          },
          {
            Capa: 'Ordenadores en la nube y apps conectadas',
            'Dónde se ejecuta': 'Opcional: un escritorio Linux alojado y conexiones de Composio a Gmail, Slack y similares; también se ofrece una VM local',
            Fuente: 'README, «Agents with hands»',
          },
        ],
        note: 'La fila de modelos locales se apoya en el código fuente y la documentación del repositorio. PromptQuorum no ejecutó ningún modelo local con OpenMausBot, así que se desconocen la calidad de las respuestas, el uso de herramientas y la velocidad con modelos pequeños. Según la documentación, el motor integrado para servicios compatibles con OpenAI aparece en el selector de modelos con la etiqueta «OpenAI-compatible (OpenRouter / Groq)».',
      },
      video: {
        id: 'video',
        title: 'El vídeo',
        youtubeUrl: 'https://www.youtube.com/watch?v=_rQPVOpjljE',
        content: [
          '**Este es un vídeo de terceros titulado «NEW Open Source Grok Bot is INSANE (FREE!)».** Se incluye aquí porque los lectores preguntaron por OpenMausBot después de verlo. PromptQuorum no revisó sus afirmaciones, y su título es la opinión de un creador, no una conclusión de esta reseña. Para los datos, usa las secciones anteriores y las páginas del propio proyecto.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La configuración consiste en una instalación, un agente y un bot.** Los pasos siguen el README y la página de descarga.',
        ],
        numberedItems: [
          {
            title: 'Instala primero un agente',
            whyItMatters: 'Instala e inicia sesión en al menos una de las CLI claude, codex o grok. Para un modelo local, inicia en su lugar Ollama o LM Studio y descarga un modelo.',
          },
          {
            title: 'Instala OpenMausBot',
            whyItMatters: 'Abre el .dmg y arrastra la app a Aplicaciones, ejecuta el instalador de Windows (no hacen falta derechos de administrador) o instala el .deb con apt.',
          },
          {
            title: 'Crea un bot y elige su modelo',
            whyItMatters: 'Las CLI instaladas aparecen solas en el selector de modelos; los servidores locales que responden en su dirección predeterminada se listan en Custom.',
          },
          {
            title: 'Aprueba lo que importa',
            whyItMatters: 'Los comandos de shell, las ediciones de archivos y las preguntas llegan como tarjetas en el chat que permites o rechazas.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones gira en torno a una lista de agentes que gestionas como contactos.** Todo lo siguiente procede del README y de la documentación.',
        ],
        items: [
          '**Un modelo por bot.** Modelos de Claude y de Codex lado a lado en un mismo selector, intercambiables a mitad de conversación.',
          '**Tarjetas de aprobación.** Un intermediario de permisos convierte las acciones de riesgo en decisiones tuyas, tanto en ordenadores en la nube como locales.',
          '**Ordenadores para bots.** Un escritorio en la nube, una VM local aislada o, tras una aceptación explícita, tu propio ordenador en macOS y Ubuntu Xorg.',
          '**Apps conectadas.** Composio da acceso a Gmail, Slack, GitHub, Notion y cientos más tras un único inicio de sesión OAuth.',
          '**Canales, equipos y rutinas.** Canales separados por contexto, archivos de equipo instalables y disparadores programados o por eventos de apps.',
          '**Voz.** Respuestas habladas y llamadas con ElevenLabs, Fish Audio, Grok, voces integradas de Mac o un servidor local de Chatterbox.',
          '**Automatización.** Un servidor MCP por stdio para Claude Desktop o Cursor y un comando `openmausbot` para scripts y CI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La política de privacidad dice que la app de escritorio se ejecuta en tu equipo y que tus conversaciones se quedan allí, mientras que el sitio web usa analítica que puedes desactivar.** La analítica de uso opcional de la app es anónima y se puede desactivar en los ajustes. Todo lo que envíes a un agente en la nube, a un ordenador Cloud o a una app conectada lo gestiona ese servicio con sus propios términos.',
          'La app es gratuita con Apache 2.0, con una licencia de código disponible aparte para la carpeta enterprise. Los planes opcionales de MausBot Cloud cuestan 15, 49 o 99 $ al mes y no incluyen el uso de IA; tu propio plan de Claude, ChatGPT o de API paga los modelos. Según el README, las claves guardadas por la app de escritorio empaquetada las cifra el sistema operativo, mientras que la configuración por terminal guarda las claves de API en texto plano en un archivo de configuración privado.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Código abierto, Apache 2.0',
            'Qué significa en el uso real': 'Se puede leer y modificar el código, los drivers y la documentación.',
            'Limitación / advertencia': 'Una carpeta enterprise tiene otra licencia.',
          },
          {
            Ventaja: 'Trae tus propios agentes',
            'Qué significa en el uso real': 'Usa tus sesiones de Claude, Codex o Grok sin un proxy.',
            'Limitación / advertencia': 'Son modelos en la nube, así que no es privado por defecto.',
          },
          {
            Ventaja: 'Opción de modelo local',
            'Qué significa en el uso real': 'Se pueden elegir Ollama, LM Studio y otros servidores por bot.',
            'Limitación / advertencia': 'Sin probar por PromptQuorum; los modelos pequeños pueden fallar en tareas de agente con muchas herramientas.',
          },
          {
            Ventaja: 'Tarjetas de aprobación',
            'Qué significa en el uso real': 'Las acciones de riesgo esperan tu decisión.',
            'Limitación / advertencia': 'Los bots con acceso al ordenador exigen revisar con cuidado cada petición.',
          },
          {
            Ventaja: 'Proyecto de evolución rápida',
            'Qué significa en el uso real': 'La versión 0.1.155 salió el 13 de noviembre de 2026.',
            'Limitación / advertencia': 'Muy joven: creado en agosto de 2026, 0.1.x, y Ubuntu sigue en beta.',
          },
          {
            Ventaja: 'App gratuita',
            'Qué significa en el uso real': 'La app de escritorio no necesita cuenta.',
            'Limitación / advertencia': 'Las tarifas de modelos son tuyas; el instalador de Windows no está firmado.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'OpenMausBot frente a alternativas',
        content: [
          'Estas son las herramientas de orquestación de agentes y de agente personal más cercanas del directorio.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'OpenMausBot',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, Apache 2.0',
            Papel: 'Equipo de agentes en formato chat',
            'Diferencia clave': 'Interfaz de mensajería sobre las CLI de Claude, Codex y Grok',
          },
          {
            App: '[Multica](/es/power-local-llm/multica-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Freemium, código disponible',
            Papel: 'Espacio para asignar trabajo a agentes de código',
            'Diferencia clave': 'Tablero de tareas para agentes de código, autoalojado',
          },
          {
            App: '[Mission Control](/es/power-local-llm/mission-control-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Plano de control de ejecuciones de agentes',
            'Diferencia clave': 'Sigue ejecuciones y gasto entre entornos de agentes',
          },
          {
            App: '[Atomic Bot](/es/power-local-llm/atomic-bot-review)',
            Plataformas: 'Mac, Windows, Linux, iOS, Android',
            'Precio y licencia': 'Freemium, MIT',
            Papel: 'Compañero de IA personal',
            'Diferencia clave': 'Empaqueta el stack OpenClaw; funciona en local o en la nube',
          },
          {
            App: '[Agent Zero](/es/power-local-llm/agent-zero-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Agente autónomo',
            'Diferencia clave': 'Un solo agente autónomo, no una lista de bots',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar OpenMausBot',
        items: [
          '**Personas que ya pagan por Claude, Codex o Grok.** La app reutiliza esas sesiones.',
          '**Usuarios que quieren varios agentes en una sola app de chat.** Cada bot tiene su propio modelo y su propio papel.',
          '**Aficionados que trabajan con Ollama o LM Studio.** Los servidores locales documentados permiten hacer un experimento.',
          '**Equipos que quieren avisos de aprobación.** Las acciones de riesgo esperan una decisión.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar OpenMausBot',
        items: [
          '**Quien necesite que todo funcione sin conexión por defecto.** Los agentes por defecto son modelos en la nube.',
          '**Quien necesite una herramienta madura.** Es un proyecto 0.1.x de agosto de 2026.',
          '**Usuarios que no puedan aceptar un instalador de Windows sin firmar.** SmartScreen mostrará un aviso.',
          '**Quien espere una configuración de modelos locales probada.** PromptQuorum no ha ejecutado ninguna.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo ejecutar OpenMausBot completamente sin conexión?',
            a: 'Solo si todos los bots usan un servidor de modelos local en tu ordenador. Los agentes por defecto de Claude, Codex y Grok necesitan internet, y PromptQuorum no probó una configuración sin conexión.',
          },
          {
            q: '¿Qué servidores de modelos locales reconoce?',
            a: 'El código fuente lista oMLX, Ollama, EXO, LM Studio y Unsloth en sus direcciones locales predeterminadas, y la documentación describe un motor integrado para cualquier dirección compatible con OpenAI.',
          },
          {
            q: '¿Está OpenMausBot hecho por xAI?',
            a: 'No. El README dice que es un proyecto independiente inspirado en Grok Bot, sin afiliación con xAI, Meta, OpenAI ni Manus.',
          },
          {
            q: '¿Existe algún token de criptomoneda?',
            a: 'No. El README afirma que el proyecto no tiene ningún token y que las monedas que usan su nombre no están afiliadas a él.',
          },
          {
            q: '¿Es el vídeo de esta reseña una demostración oficial?',
            a: 'PromptQuorum no pudo confirmar quién lo hizo. Es un vídeo de terceros con un título entusiasta, enlazado como contexto y sin verificar.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'OpenMausBot encaja bien si ya usas Claude, Codex o Grok y quieres un equipo de agentes en formato chat en tu propio ordenador, con avisos de aprobación y una licencia abierta. No es una IA local por defecto, y quien quiera un funcionamiento totalmente local debería tratar la ruta de Ollama y LM Studio como un experimento.',
          'Las advertencias son la madurez y la verificación: un proyecto creado en agosto de 2026, un instalador de Windows sin firmar, una compilación de Ubuntu en beta y ninguna prueba de modelos locales aquí. Pruébalo con un solo bot antes de depender de él.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Repositorio y README de OpenMausBot](https://github.com/milind-soni/OpenMausBot) — funciones, motores, licencia y pasos de instalación.',
          '[Bring your own engine](https://github.com/milind-soni/OpenMausBot/blob/main/docs/custom-engines.md) — motores ACP personalizados y compatibles con OpenAI.',
          '[Other model providers](https://github.com/milind-soni/OpenMausBot/blob/main/apps/docs/content/docs/providers/model-providers.mdx) — motor de chat y rutas de OpenCode.',
          '[Lista de servidores locales en el código fuente](https://github.com/milind-soni/OpenMausBot/blob/main/server/drivers/local-inject.ts) — direcciones de Ollama, LM Studio, oMLX, EXO y Unsloth.',
          '[Versiones](https://github.com/milind-soni/OpenMausBot/releases) — versión 0.1.155, 13 de noviembre de 2026, y archivos instaladores.',
          '[Sitio web de MausBot](https://mausbot.com/) — descarga, precios, política de privacidad y términos.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Multica](/es/power-local-llm/multica-review) — un espacio autoalojado para asignar trabajo a agentes de código.',
          '[Reseña de Mission Control](/es/power-local-llm/mission-control-review) — un plano de control de ejecuciones y gasto de agentes.',
          '[Reseña de Atomic Bot](/es/power-local-llm/atomic-bot-review) — un compañero de IA personal que funciona en local o en la nube.',
          '[Reseña de Ollama](/es/power-local-llm/ollama-review) — el servidor de modelos locales al que se puede conectar OpenMausBot.',
          '[Reseña de LM Studio](/es/power-local-llm/lm-studio-review) — una app de escritorio que sirve modelos locales mediante una dirección compatible con OpenAI.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-14',
    dateModified: '2026-11-14',
    next_refresh_due: '2027-05-14',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openmausbot-review-hero-pt.webp',
    title: 'Análise do OpenMausBot: este bot Grok de código aberto é IA local?',
    seoTitle: 'Análise do OpenMausBot: bot Grok aberto, é IA local?',
    intro: 'O OpenMausBot (também chamado de MausBot, antes OpenGrokBot) é um app de chat gratuito e de código aberto para desktop em que cada contato é um agente de IA. Ele não é uma IA local por si só: controla os agentes de linha de comando Claude, Codex e Grok que você já tem, e esses são modelos na nuvem. O código-fonte e a documentação mostram que modelos locais também podem ser conectados, por meio do Ollama, do LM Studio ou de qualquer endereço compatível com OpenAI. Esta análise responde primeiro a essa pergunta e depois trata de instalação, preço, privacidade e alternativas, com base no repositório e no site do próprio projeto. A PromptQuorum não instalou o app nem executou um modelo local com ele.',
    metaDescription: 'Análise do OpenMausBot: alternativa aberta ao Grok Bot com agentes Claude, Codex ou Grok. Não é local por padrão; Ollama e LM Studio podem ser conectados.',
    twitterDescription: 'Análise do OpenMausBot: uma equipe de bots de IA gratuita e de código aberto no desktop. É IA local? Agentes na nuvem por padrão, modelos locais possíveis. Preço, privacidade, limites.',
    audience: 'Pessoas que viram a alternativa de código aberto ao Grok Bot e querem saber se ela é local, quanto custa e se modelos do Ollama ou do LM Studio podem controlá-la.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenMausBot review',
    targetKeywords: [
      'análise openmausbot',
      'openmausbot',
      'mausbot',
      'alternativa de código aberto ao grok bot',
      'openmausbot llm local',
      'openmausbot ollama',
      'openmausbot lm studio',
      'app desktop de equipe de agentes de ia',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows',
      'Ubuntu',
    ],
    leadAnswerBlock: '**O OpenMausBot é um app de chat gratuito, Apache 2.0, para desktop, voltado a uma equipe de bots de IA, e não é uma IA local por padrão: seus bots rodam nos agentes de linha de comando Claude, Codex ou Grok que você instalou, que são modelos na nuvem.** O código-fonte e a documentação do projeto mostram que modelos locais podem ser conectados por meio do Ollama, do LM Studio e de outros servidores compatíveis com OpenAI, o que a PromptQuorum não testou.',
    quickAnswerTop: {
      pt: {
        question: 'O OpenMausBot é uma IA local, ou uma IA local pode executá-lo?',
        answer: 'O app em si roda no seu computador e guarda conversas, chaves e eventos em uma pasta nele, mas não traz nenhum modelo. Por padrão, cada bot usa uma CLI de agente, como Claude ou Codex, que envia seus prompts ao respectivo fornecedor. O repositório também lista hosts locais que ele procura, incluindo Ollama e LM Studio, então um modelo local pode ser escolhido para um bot. Como modelos locais pequenos lidam com o trabalho de agente, cheio de ferramentas, não foi testado aqui.',
        bullets: [
          'Caminho padrão: as CLIs claude, codex e grok em que você já está conectado; valem as tarifas e os limites do fornecedor.',
          'Caminho local: servidores Ollama, LM Studio, oMLX, EXO e Unsloth neste computador, ou qualquer endereço compatível com OpenAI.',
          'O app é gratuito; um plano Cloud pago opcional adiciona uma máquina na nuvem sempre ligada e não inclui o uso de IA.',
          'Há instaladores para macOS, Windows e Ubuntu; o instalador do Windows não é assinado e o Ubuntu está em beta.',
          'O vídeo linkado abaixo é de terceiros e não foi verificado pela PromptQuorum.',
        ],
        updatedDate: '2026-11-14',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o OpenMausBot', anchor: 'get-it' },
      { label: 'OpenMausBot em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o OpenMausBot', anchor: 'what-is-openmausbot' },
      { label: 'É IA local?', anchor: 'is-it-local' },
      { label: 'O vídeo', anchor: 'video' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'OpenMausBot e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o OpenMausBot serve', anchor: 'who-should-use' },
      { label: 'Para quem o OpenMausBot não serve', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O OpenMausBot é um app de chat de código aberto que gerencia uma equipe de agentes de IA no seu computador, usando agentes na nuvem por padrão e modelos locais apenas se você os conectar.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um app de mensagens em que cada contato é um trabalhador de IA: o app é seu e aberto, mas o cérebro por trás de cada contato é o modelo que você conectar.',
          },
        ],
        items: [
          'Local ou não: o app e a pasta de dados são locais; os agentes padrão não são, e modelos locais são uma conexão opcional.',
          'Licença e fabricante: Apache 2.0, publicado pela Supamaus Software Private Limited, empresa constituída na Índia; uma pasta enterprise tem sua própria licença de código-fonte disponível.',
          'Custo: o app é gratuito, o uso dos modelos é cobrado pelo seu próprio fornecedor, e os planos Cloud opcionais começam em $15 por mês.',
          'Manutenção: a versão 0.1.155 foi lançada em 13 de novembro de 2026, então o projeto é atualizado ativamente, mas é uma linha 0.1.x jovem, criada em agosto de 2026.',
          'Ressalvas: instalador do Windows sem assinatura, Ubuntu em beta e nenhum teste de modelo local pela PromptQuorum.',
        ],
      },
      getItOpenMausBot: {
        id: 'get-it',
        title: 'Obter o OpenMausBot',
        content: [
          '**O OpenMausBot é instalado como qualquer app de desktop, sem precisar de terminal.** A página de releases e o site oficial oferecem os mesmos instaladores, e o servidor harness vem embutido neles.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Mac (Apple silicon)',
            'Onde obter': '[OpenMausBot.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.dmg) — assinado e notarizado, segundo o README',
          },
          {
            Plataforma: 'Mac (Intel)',
            'Onde obter': '[OpenMausBot-intel.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-intel.dmg)',
          },
          {
            Plataforma: 'Windows (x64)',
            'Onde obter': '[OpenMausBot-setup.exe](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-setup.exe) — ainda sem assinatura de código; o SmartScreen mostra "editor desconhecido"',
          },
          {
            Plataforma: 'Ubuntu 24.04 (x64, beta)',
            'Onde obter': '[OpenMausBot-amd64.deb](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-amd64.deb) ou [AppImage](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.AppImage)',
          },
          {
            Plataforma: 'Terminal ou servidor',
            'Onde obter': '`npx openmausbot` (Node 24+) — veja o README para as opções de `serve`',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[mausbot.com](https://mausbot.com/) (openmausbot.com redireciona para lá)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do MausBot](https://mausbot.com/privacy)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': '[github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) — Apache 2.0',
          },
        ],
        note: 'Os apps complementares para Android e iOS são descritos como controles remotos de um desktop ou servidor em execução e são compartilhados pelo Discord do projeto, não pelas lojas de apps. Você também precisa de pelo menos uma CLI de agente instalada e conectada (Claude, Codex ou Grok), ou de um servidor de modelos conectado.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'OpenMausBot em resumo',
        columns: ['Atributo', 'OpenMausBot'],
        rows: [
          { Atributo: 'Plataforma', OpenMausBot: 'macOS, Windows x64, Ubuntu 24.04 x64 (beta)' },
          { Atributo: 'Preço', OpenMausBot: 'App grátis; Cloud opcional: $15, $49 ou $99 por mês' },
          { Atributo: 'Licença', OpenMausBot: 'Apache 2.0 (pasta enterprise separada)' },
          { Atributo: 'Execução', OpenMausBot: 'App e dados no seu computador; modelos via CLIs de agente ou servidores conectados' },
          { Atributo: 'Modelos locais', OpenMausBot: 'Possíveis via Ollama, LM Studio e servidores compatíveis com OpenAI; não testado pela PromptQuorum' },
          { Atributo: 'Modelo próprio incluído', OpenMausBot: 'Não' },
          { Atributo: 'Pedidos de aprovação', OpenMausBot: 'Sim, para comandos de shell, edição de arquivos e perguntas' },
          { Atributo: 'Servidor MCP e CLI', OpenMausBot: 'Ambos listados no README' },
        ],
        note: 'Os atributos vêm do README, da documentação e do site conforme lidos em 14 de novembro de 2026. Uma informação ausente significa desconhecido, não sem suporte.',
      },
      whatIsOpenMausBot: {
        id: 'what-is-openmausbot',
        title: 'O que é o OpenMausBot',
        content: [
          '**O OpenMausBot é um app de chat em que cada bot é um agente de verdade, com personalidade, modelo, computador e apps conectados próprios.** O README o descreve como um projeto independente e de código aberto, inspirado no Grok Bot da xAI, antes chamado OpenGrokBot e também conhecido como MausBot, e diz que não é afiliado à xAI, à Meta, à OpenAI nem à Manus.',
          `Ele é publicado pela Supamaus Software Private Limited, que a página de termos descreve como uma empresa constituída na Índia; o repositório pertence ao desenvolvedor Milind Soni. A página do repositório no GitHub mostra ${ST.pt('openmausbot')} estrelas. O README também afirma que o projeto não tem token e que qualquer moeda que use o nome dele não tem relação com o projeto.`,
        ],
      },
      isItLocal: {
        id: 'is-it-local',
        itemHeadings: true,
        title: 'É IA local?',
        content: [
          '**O app é local, os modelos padrão não são, e os modelos locais são opcionais.** Três camadas respondem à pergunta separadamente.',
        ],
        columns: ['Camada', 'Onde roda', 'Fonte'],
        rows: [
          {
            Camada: 'App, servidor harness e dados',
            'Onde roda': 'No seu computador: um pequeno servidor em 127.0.0.1, com transcrições, chaves e eventos em ~/.openmausbot',
            Fonte: 'README, seção "Why"',
          },
          {
            Camada: 'Agentes padrão (Claude, Codex, Grok)',
            'Onde roda': 'Nos modelos na nuvem dos fornecedores, acessados pelas CLIs que você instalou e em que está conectado; seus prompts vão para esse fornecedor',
            Fonte: 'README, "Bring your own agents"',
          },
          {
            Camada: 'Modelos locais (Ollama, LM Studio, oMLX, EXO, Unsloth)',
            'Onde roda': 'No seu computador ou na sua rede, quando um servidor responde no endereço local padrão e você escolhe o modelo dele para um bot',
            Fonte: 'Arquivo do repositório server/drivers/local-inject.ts; docs/custom-engines.md',
          },
          {
            Camada: 'Computadores na nuvem e apps conectados',
            'Onde roda': 'Opcional: um desktop Linux hospedado e conexões Composio com Gmail, Slack e similares; também há uma VM local',
            Fonte: 'README, "Agents with hands"',
          },
        ],
        note: 'A linha dos modelos locais se apoia no código-fonte e na documentação do repositório. A PromptQuorum não executou um modelo local com o OpenMausBot, então a qualidade das respostas, o uso de ferramentas e a velocidade com modelos pequenos são desconhecidos. O mecanismo integrado para serviços compatíveis com OpenAI aparece, segundo a documentação, com o rótulo "OpenAI-compatible (OpenRouter / Groq)" no seletor de modelos.',
      },
      video: {
        id: 'video',
        title: 'O vídeo',
        youtubeUrl: 'https://www.youtube.com/watch?v=_rQPVOpjljE',
        content: [
          '**Este é um vídeo de terceiros intitulado "NEW Open Source Grok Bot is INSANE (FREE!)".** Ele está incorporado aqui porque leitores perguntaram sobre o OpenMausBot depois de assisti-lo. A PromptQuorum não revisou as afirmações do vídeo, e o título é uma opinião do criador, não uma conclusão desta análise. Use as seções acima e as páginas do próprio projeto para os fatos.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação, um agente e um bot.** Os passos seguem o README e a página de download.',
        ],
        numberedItems: [
          {
            title: 'Instale um agente primeiro',
            whyItMatters: 'Instale e conecte-se a pelo menos uma das CLIs claude, codex ou grok. Para um modelo local, inicie o Ollama ou o LM Studio e baixe um modelo.',
          },
          {
            title: 'Instale o OpenMausBot',
            whyItMatters: 'Abra o .dmg e arraste o app para Aplicativos, execute o instalador do Windows (não exige direitos de administrador) ou instale o .deb com o apt.',
          },
          {
            title: 'Crie um bot e escolha o modelo dele',
            whyItMatters: 'As CLIs instaladas aparecem automaticamente no seletor de modelos; os hosts locais que respondem no endereço padrão são listados em Custom.',
          },
          {
            title: 'Aprove o que importa',
            whyItMatters: 'Comandos de shell, edições de arquivos e perguntas chegam como cartões no chat, que você permite ou nega.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno de uma lista de agentes que você gerencia como contatos.** Tudo abaixo vem do README e da documentação.',
        ],
        items: [
          '**Um modelo por bot.** Modelos Claude e Codex lado a lado em um só seletor, trocáveis no meio da conversa.',
          '**Cartões de aprovação.** Um intermediário de permissões transforma ações arriscadas em decisões suas, tanto em computadores na nuvem quanto locais.',
          '**Computadores para os bots.** Um desktop na nuvem, uma VM local isolada ou, após opt-in explícito, o seu próprio computador no macOS e no Ubuntu Xorg.',
          '**Apps conectados.** O Composio dá acesso a Gmail, Slack, GitHub, Notion e centenas de outros após um único login OAuth.',
          '**Canais, equipes e rotinas.** Canais separados por contexto, arquivos de equipe instaláveis e gatilhos agendados ou por eventos de apps.',
          '**Voz.** Respostas faladas e chamadas via ElevenLabs, Fish Audio, Grok, vozes integradas do Mac ou um servidor Chatterbox local.',
          '**Automação.** Um servidor MCP stdio para o Claude Desktop ou o Cursor e um comando `openmausbot` para scripts e CI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A política de privacidade diz que o app de desktop roda na sua máquina e que suas conversas ficam nela, enquanto o site usa análises que você pode desativar.** As análises de uso opcionais no app são anônimas e podem ser desativadas nas configurações. Tudo o que você envia a um agente na nuvem, a um computador Cloud ou a um app conectado é tratado por esse serviço sob os próprios termos.',
          'O app é gratuito sob a Apache 2.0, com uma licença de código-fonte disponível separada para a pasta enterprise. Os planos MausBot Cloud opcionais custam $15, $49 ou $99 por mês e não incluem o uso de IA; o seu próprio plano do Claude, do ChatGPT ou de API paga pelos modelos. As chaves salvas pelo app de desktop empacotado são criptografadas pelo sistema operacional, enquanto a configuração pelo terminal guarda as chaves de API em texto simples em um arquivo de configuração privado, segundo o README.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'Na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Código aberto, Apache 2.0',
            'Na prática': 'O código, os drivers e a documentação podem ser lidos e alterados.',
            'Limitação / ressalva': 'Uma pasta enterprise tem outra licença.',
          },
          {
            Vantagem: 'Traga seus próprios agentes',
            'Na prática': 'Usa seus logins existentes do Claude, Codex ou Grok, sem proxy.',
            'Limitação / ressalva': 'São modelos na nuvem, então não é privado por padrão.',
          },
          {
            Vantagem: 'Opção de modelo local',
            'Na prática': 'Ollama, LM Studio e outros servidores podem ser escolhidos por bot.',
            'Limitação / ressalva': 'Não testado pela PromptQuorum; modelos pequenos podem ter dificuldade com trabalho de agente cheio de ferramentas.',
          },
          {
            Vantagem: 'Cartões de aprovação',
            'Na prática': 'Ações arriscadas esperam pela sua decisão.',
            'Limitação / ressalva': 'Bots com acesso ao computador ainda exigem revisão cuidadosa de cada pedido.',
          },
          {
            Vantagem: 'Projeto de evolução rápida',
            'Na prática': 'A versão 0.1.155 saiu em 13 de novembro de 2026.',
            'Limitação / ressalva': 'Muito jovem: criado em agosto de 2026, 0.1.x, e o Ubuntu ainda está em beta.',
          },
          {
            Vantagem: 'App gratuito',
            'Na prática': 'Não é preciso conta para o app de desktop.',
            'Limitação / ressalva': 'As tarifas dos modelos são suas; instalador do Windows sem assinatura.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'OpenMausBot e as alternativas',
        content: [
          'Estas são as ferramentas de orquestração de agentes e de agentes pessoais mais próximas no diretório.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'OpenMausBot',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, Apache 2.0',
            Função: 'Equipe de agentes em estilo de chat',
            'Diferença principal': 'Interface de app de mensagens sobre as CLIs Claude, Codex e Grok',
          },
          {
            App: '[Multica](/pt/power-local-llm/multica-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Freemium, código-fonte disponível',
            Função: 'Espaço para atribuir trabalho a agentes de código',
            'Diferença principal': 'Quadro de tarefas para agentes de código, auto-hospedado',
          },
          {
            App: '[Mission Control](/pt/power-local-llm/mission-control-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, MIT',
            Função: 'Plano de controle das execuções de agentes',
            'Diferença principal': 'Acompanha execuções e gastos entre runtimes de agentes',
          },
          {
            App: '[Atomic Bot](/pt/power-local-llm/atomic-bot-review)',
            Plataformas: 'Mac, Windows, Linux, iOS, Android',
            'Preço e licença': 'Freemium, MIT',
            Função: 'Colega de trabalho de IA pessoal',
            'Diferença principal': 'Empacota a pilha OpenClaw; roda localmente ou na nuvem',
          },
          {
            App: '[Agent Zero](/pt/power-local-llm/agent-zero-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, MIT',
            Função: 'Agente autônomo',
            'Diferença principal': 'Um agente autônomo, não uma lista de bots',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o OpenMausBot serve',
        items: [
          '**Pessoas que já pagam pelo Claude, Codex ou Grok.** O app reutiliza esses logins.',
          '**Usuários que querem vários agentes em um só app de chat.** Cada bot tem seu próprio modelo e função.',
          '**Entusiastas com Ollama ou LM Studio.** Os hosts locais documentados tornam um experimento possível.',
          '**Equipes que querem pedidos de aprovação.** Ações arriscadas esperam por uma decisão.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o OpenMausBot não serve',
        items: [
          '**Quem precisa de tudo offline por padrão.** Os agentes padrão são modelos na nuvem.',
          '**Quem precisa de uma ferramenta madura.** É um projeto 0.1.x de agosto de 2026.',
          '**Usuários que não aceitam um instalador do Windows sem assinatura.** O SmartScreen vai avisar.',
          '**Quem espera uma configuração de modelo local testada.** A PromptQuorum não executou nenhuma.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar o OpenMausBot totalmente offline?',
            a: 'Somente se cada bot usar um servidor de modelos local no seu computador. Os agentes padrão Claude, Codex e Grok precisam de internet, e a PromptQuorum não testou uma configuração offline.',
          },
          {
            q: 'Quais servidores de modelos locais ele reconhece?',
            a: 'O código-fonte lista oMLX, Ollama, EXO, LM Studio e Unsloth em seus endereços locais padrão, e a documentação descreve um mecanismo integrado para qualquer endereço compatível com OpenAI.',
          },
          {
            q: 'O OpenMausBot é feito pela xAI?',
            a: 'Não. O README diz que é um projeto independente inspirado no Grok Bot, sem afiliação com a xAI, a Meta, a OpenAI nem a Manus.',
          },
          {
            q: 'Existe algum token de criptomoeda?',
            a: 'Não. O README afirma que o projeto não tem token e que moedas que usam o nome dele não são afiliadas a ele.',
          },
          {
            q: 'O vídeo desta análise é uma demonstração oficial?',
            a: 'A PromptQuorum não conseguiu confirmar quem o fez. É um vídeo de terceiros com um título entusiasmado, linkado como contexto e não verificado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O OpenMausBot é uma boa escolha se você já usa Claude, Codex ou Grok e quer uma equipe de agentes em estilo de chat no seu próprio computador, com pedidos de aprovação e uma licença aberta. Ele não é uma IA local por padrão, e quem quer operação totalmente local deve tratar o caminho com Ollama e LM Studio como um experimento.',
          'As ressalvas são maturidade e verificação: um projeto criado em agosto de 2026, um instalador do Windows sem assinatura, uma versão beta para Ubuntu e nenhum teste de modelo local aqui. Experimente com um bot antes de depender dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Repositório e README do OpenMausBot](https://github.com/milind-soni/OpenMausBot) — recursos, mecanismos, licença e passos de instalação.',
          '[Bring your own engine](https://github.com/milind-soni/OpenMausBot/blob/main/docs/custom-engines.md) — mecanismos ACP personalizados e compatíveis com OpenAI.',
          '[Other model providers](https://github.com/milind-soni/OpenMausBot/blob/main/apps/docs/content/docs/providers/model-providers.mdx) — mecanismo de chat e rotas do OpenCode.',
          '[Lista de hosts locais no código-fonte](https://github.com/milind-soni/OpenMausBot/blob/main/server/drivers/local-inject.ts) — endereços de Ollama, LM Studio, oMLX, EXO e Unsloth.',
          '[Releases](https://github.com/milind-soni/OpenMausBot/releases) — versão 0.1.155, 13 de novembro de 2026, e arquivos de instalação.',
          '[Site do MausBot](https://mausbot.com/) — download, preços, política de privacidade e termos.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do Multica](/pt/power-local-llm/multica-review) — um espaço auto-hospedado para atribuir trabalho a agentes de código.',
          '[Análise do Mission Control](/pt/power-local-llm/mission-control-review) — um plano de controle para execuções e gastos de agentes.',
          '[Análise do Atomic Bot](/pt/power-local-llm/atomic-bot-review) — um colega de trabalho de IA pessoal que roda localmente ou na nuvem.',
          '[Análise do Ollama](/pt/power-local-llm/ollama-review) — o servidor de modelos locais ao qual o OpenMausBot pode se conectar.',
          '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review) — um app de desktop que serve modelos locais por um endereço compatível com OpenAI.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-14',
    dateModified: '2026-11-14',
    next_refresh_due: '2027-05-14',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openmausbot-review-hero-ar.webp',
    title: 'مراجعة OpenMausBot: هل بوت Grok مفتوح المصدر ذكاء اصطناعي محلي؟',
    seoTitle: 'مراجعة OpenMausBot: بوت Grok مفتوح المصدر، هل هو محلي؟',
    intro: 'OpenMausBot (ويسمى أيضًا MausBot وكان اسمه سابقًا OpenGrokBot) تطبيق دردشة مكتبي مجاني ومفتوح المصدر، كل جهة اتصال فيه وكيل ذكاء اصطناعي. وهو ليس ذكاءً اصطناعيًا محليًا بذاته: فهو يشغّل وكلاء سطر الأوامر Claude وCodex وGrok المثبتين لديك، وهذه نماذج سحابية. ويُظهر كوده المصدري ووثائقه أنه يمكن ربط نماذج محلية أيضًا عبر Ollama أو LM Studio أو أي عنوان متوافق مع OpenAI. تجيب هذه المراجعة عن هذا السؤال أولًا، ثم تتناول التثبيت والسعر والخصوصية والبدائل، اعتمادًا على مستودع المشروع وموقعه الرسمي. لم تثبّت PromptQuorum التطبيق ولم تشغّل نموذجًا محليًا من خلاله.',
    metaDescription: 'مراجعة OpenMausBot: بديل مفتوح المصدر لـ Grok Bot يعمل بوكلاء Claude وCodex وGrok. ليس محليًا افتراضيًا، ويمكن ربط Ollama وLM Studio. مجاني، Apache 2.0.',
    twitterDescription: 'مراجعة OpenMausBot: فريق بوتات ذكاء اصطناعي مجاني ومفتوح المصدر لسطح مكتبك. هل هو محلي؟ وكلاء سحابيون افتراضيًا، والنماذج المحلية ممكنة. السعر والخصوصية والحدود.',
    audience: 'من رأوا البديل مفتوح المصدر لـ Grok Bot ويريدون معرفة هل هو محلي، وكم يكلّف، وهل يمكن لنماذج Ollama أو LM Studio تشغيله.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenMausBot review',
    targetKeywords: [
      'مراجعة openmausbot',
      'openmausbot',
      'mausbot',
      'بديل grok bot مفتوح المصدر',
      'openmausbot مع نموذج محلي',
      'openmausbot مع ollama',
      'openmausbot مع lm studio',
      'تطبيق مكتبي لفريق وكلاء الذكاء الاصطناعي',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows',
      'Ubuntu',
    ],
    leadAnswerBlock: '**OpenMausBot تطبيق دردشة مكتبي مجاني بترخيص Apache 2.0 لفريق من بوتات الذكاء الاصطناعي، وهو ليس ذكاءً اصطناعيًا محليًا افتراضيًا: فبوتاته تعمل على وكلاء سطر الأوامر Claude أو Codex أو Grok المثبتين لديك، وهي نماذج سحابية.** ويُظهر مصدر المشروع ووثائقه أنه يمكن ربط نماذج محلية عبر Ollama وLM Studio وخوادم أخرى متوافقة مع OpenAI، وهو ما لم تختبره PromptQuorum.',
    quickAnswerTop: {
      ar: {
        question: 'هل OpenMausBot ذكاء اصطناعي محلي، أم يمكن للذكاء الاصطناعي المحلي تشغيله؟',
        answer: 'التطبيق نفسه يعمل على حاسوبك ويحتفظ بالمحادثات والمفاتيح والأحداث في مجلد هناك، لكنه لا يأتي مع أي نموذج. افتراضيًا يستخدم كل بوت وكيل سطر أوامر مثل Claude أو Codex، وهذا يرسل مطالباتك إلى مزوّده. كما يسرد المستودع مضيفين محليين يفحصهم التطبيق، منها Ollama وLM Studio، فيمكن اختيار نموذج محلي لأي بوت. أما مدى تعامل النماذج المحلية الصغيرة مع عمل الوكلاء الكثيف الأدوات فلم يُختبر هنا.',
        bullets: [
          'المسار الافتراضي: واجهات claude وcodex وgrok التي سجّلت الدخول إليها بالفعل؛ وتنطبق رسوم المزوّدين وحدودهم.',
          'المسار المحلي: خوادم Ollama وLM Studio وoMLX وEXO وUnsloth على هذا الحاسوب، أو أي عنوان متوافق مع OpenAI.',
          'التطبيق مجاني؛ وخطة Cloud المدفوعة الاختيارية تضيف حاسوبًا سحابيًا يعمل دائمًا ولا تشمل استخدام الذكاء الاصطناعي.',
          'توجد مثبّتات لأنظمة macOS وWindows وUbuntu؛ ومثبّت Windows غير موقّع، وUbuntu نسخة تجريبية.',
          'الفيديو المرتبط أدناه من طرف ثالث ولم تتحقق PromptQuorum منه.',
        ],
        updatedDate: '2026-11-14',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على OpenMausBot', anchor: 'get-it' },
      { label: 'OpenMausBot في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو OpenMausBot', anchor: 'what-is-openmausbot' },
      { label: 'هل هو ذكاء اصطناعي محلي؟', anchor: 'is-it-local' },
      { label: 'الفيديو', anchor: 'video' },
      { label: 'البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'OpenMausBot مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب OpenMausBot', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب OpenMausBot', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenMausBot تطبيق دردشة مفتوح المصدر يدير فريقًا من وكلاء الذكاء الاصطناعي على حاسوبك، ويستخدم وكلاء سحابيين افتراضيًا ولا يستخدم نماذج محلية إلا إذا ربطتها.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل تطبيق مراسلة كل جهة اتصال فيه عامل ذكاء اصطناعي: التطبيق ملكك ومفتوح، أما العقل وراء كل جهة اتصال فهو أي نموذج توصله به.',
          },
        ],
        items: [
          'محلي أم لا: التطبيق ومجلد بياناته محليان؛ أما الوكلاء الافتراضيون فليسوا كذلك، والنماذج المحلية اتصال اختياري.',
          'الترخيص والناشر: Apache 2.0، وتنشره Supamaus Software Private Limited، وهي شركة مسجّلة في الهند؛ ولمجلد المؤسسات ترخيص خاص متاح المصدر.',
          'التكلفة: التطبيق مجاني، ويُحاسَب استخدام النماذج لدى مزوّدك الخاص، وتبدأ خطط Cloud الاختيارية من $15 شهريًا.',
          'الصيانة: صدر الإصدار 0.1.155 في 13 نوفمبر 2026، فالمشروع يُحدَّث بنشاط، لكنه خط 0.1.x حديث أُنشئ في أغسطس 2026.',
          'التحفظات: مثبّت Windows غير موقّع، وUbuntu في طور تجريبي، ولا اختبار لنموذج محلي من PromptQuorum.',
        ],
      },
      getItOpenMausBot: {
        id: 'get-it',
        title: 'الحصول على OpenMausBot',
        content: [
          '**يُثبَّت OpenMausBot مثل أي تطبيق مكتبي، فلا حاجة إلى الطرفية.** تقدّم صفحة الإصدارات والموقع الرسمي المثبّتات نفسها، والخادم المساعد مضمَّن فيها.',
        ],
        columns: ['المنصة', 'مصدر الحصول'],
        rows: [
          {
            'المنصة': 'Mac (Apple silicon)',
            'مصدر الحصول': '[OpenMausBot.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.dmg) — موقّع ومصدَّق من Apple بحسب README',
          },
          {
            'المنصة': 'Mac (Intel)',
            'مصدر الحصول': '[OpenMausBot-intel.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-intel.dmg)',
          },
          {
            'المنصة': 'Windows (x64)',
            'مصدر الحصول': '[OpenMausBot-setup.exe](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-setup.exe) — غير موقّع بعد؛ يعرض SmartScreen «ناشر غير معروف»',
          },
          {
            'المنصة': 'Ubuntu 24.04 (x64، تجريبي)',
            'مصدر الحصول': '[OpenMausBot-amd64.deb](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-amd64.deb) أو [AppImage](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.AppImage)',
          },
          {
            'المنصة': 'الطرفية أو الخادم',
            'مصدر الحصول': '`npx openmausbot` (Node 24+) — راجع README لخيارات `serve`',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[mausbot.com](https://mausbot.com/) (يعيد openmausbot.com التوجيه إليه)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية MausBot](https://mausbot.com/privacy)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': '[github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) — Apache 2.0',
          },
        ],
        note: 'يوصف تطبيقا Android وiOS المرافقان بأنهما جهازا تحكم عن بُعد في سطح مكتب أو خادم قيد التشغيل، ويُشاركان عبر Discord الخاص بالمشروع لا عبر متاجر التطبيقات. وتحتاج أيضًا إلى وكيل سطر أوامر واحد على الأقل مثبّتًا ومسجَّلًا الدخول إليه (Claude أو Codex أو Grok)، أو إلى خادم نماذج متصل.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'OpenMausBot في لمحة',
        columns: ['الخاصية', 'OpenMausBot'],
        rows: [
          { 'الخاصية': 'المنصة', OpenMausBot: 'macOS وWindows x64 وUbuntu 24.04 x64 (تجريبي)' },
          { 'الخاصية': 'السعر', OpenMausBot: 'تطبيق مجاني؛ Cloud اختياري $15 أو $49 أو $99 شهريًا' },
          { 'الخاصية': 'الترخيص', OpenMausBot: 'Apache 2.0 (مجلد المؤسسات منفصل)' },
          { 'الخاصية': 'مكان التشغيل', OpenMausBot: 'التطبيق والبيانات على حاسوبك؛ النماذج عبر وكلاء سطر الأوامر أو خوادم متصلة' },
          { 'الخاصية': 'النماذج المحلية', OpenMausBot: 'ممكنة عبر Ollama وLM Studio وخوادم متوافقة مع OpenAI؛ لم تختبرها PromptQuorum' },
          { 'الخاصية': 'نموذج مضمَّن', OpenMausBot: 'لا' },
          { 'الخاصية': 'طلبات الموافقة', OpenMausBot: 'نعم، لأوامر الصدفة وتعديل الملفات والأسئلة' },
          { 'الخاصية': 'خادم MCP وواجهة CLI', OpenMausBot: 'كلاهما مذكور في README' },
        ],
        note: 'الخصائص مأخوذة من README والوثائق والموقع كما قُرئت في 14 نوفمبر 2026. غياب ذكر شيء يعني أنه غير معروف، لا أنه غير مدعوم.',
      },
      whatIsOpenMausBot: {
        id: 'what-is-openmausbot',
        title: 'ما هو OpenMausBot',
        content: [
          '**OpenMausBot تطبيق دردشة كل بوت فيه وكيل حقيقي له شخصيته ونموذجه وحاسوبه وتطبيقاته المتصلة.** يصفه README بأنه مشروع مستقل مفتوح المصدر مستوحى من Grok Bot التابع لـ xAI، وكان اسمه سابقًا OpenGrokBot ويسمى أيضًا MausBot، ويذكر أنه غير تابع لـ xAI أو Meta أو OpenAI أو Manus.',
          `تنشره Supamaus Software Private Limited، وتصفها صفحة الشروط بأنها شركة مسجّلة في الهند؛ أما المستودع فيعود للمطوّر Milind Soni. وتعرض صفحة المستودع على GitHub ${ST.ar('openmausbot')} نجمة. كما يذكر README أن المشروع لا يملك عملة رقمية وأن أي عملة تستخدم اسمه لا صلة لها به.`,
        ],
      },
      isItLocal: {
        id: 'is-it-local',
        itemHeadings: true,
        title: 'هل هو ذكاء اصطناعي محلي؟',
        content: [
          '**التطبيق محلي، والنماذج الافتراضية ليست كذلك، والنماذج المحلية خيار يُفعَّل بإرادتك.** تجيب ثلاث طبقات عن السؤال كلٌّ على حدة.',
        ],
        columns: ['الطبقة', 'مكان التشغيل', 'المصدر'],
        rows: [
          {
            'الطبقة': 'التطبيق والخادم المساعد والبيانات',
            'مكان التشغيل': 'على حاسوبك: خادم صغير على 127.0.0.1، مع النصوص والمفاتيح والأحداث في ~/.openmausbot',
            'المصدر': 'README، قسم «Why»',
          },
          {
            'الطبقة': 'الوكلاء الافتراضيون (Claude وCodex وGrok)',
            'مكان التشغيل': 'النماذج السحابية للمزوّدين، عبر واجهات سطر الأوامر التي ثبّتّها وسجّلت الدخول إليها؛ وتذهب مطالباتك إلى ذلك المزوّد',
            'المصدر': 'README، قسم «Bring your own agents»',
          },
          {
            'الطبقة': 'النماذج المحلية (Ollama وLM Studio وoMLX وEXO وUnsloth)',
            'مكان التشغيل': 'على حاسوبك أو شبكتك، حين يستجيب خادم على عنوانه المحلي الافتراضي وتختار نموذجه لبوت',
            'المصدر': 'ملف المستودع server/drivers/local-inject.ts؛ docs/custom-engines.md',
          },
          {
            'الطبقة': 'الحواسيب السحابية والتطبيقات المتصلة',
            'مكان التشغيل': 'اختياري: سطح مكتب Linux مستضاف واتصالات Composio بـ Gmail وSlack وما شابههما؛ وتُعرض أيضًا آلة Local VM',
            'المصدر': 'README، قسم «Agents with hands»',
          },
        ],
        note: 'يستند صف النماذج المحلية إلى مصدر المستودع ووثائقه. لم تشغّل PromptQuorum نموذجًا محليًا عبر OpenMausBot، لذا فجودة الردود واستخدام الأدوات والسرعة مع النماذج الصغيرة غير معروفة. أما المحرك المضمَّن للخدمات المتوافقة مع OpenAI فيحمل بحسب الوثائق الاسم «OpenAI-compatible (OpenRouter / Groq)» في قائمة اختيار النموذج.',
      },
      video: {
        id: 'video',
        title: 'الفيديو',
        youtubeUrl: 'https://www.youtube.com/watch?v=_rQPVOpjljE',
        content: [
          '**هذا فيديو من طرف ثالث بعنوان «NEW Open Source Grok Bot is INSANE (FREE!)».** أُدرج هنا لأن قرّاء سألوا عن OpenMausBot بعد مشاهدته. لم تراجع PromptQuorum ادعاءاته، وعنوانه رأي صانعه لا نتيجة توصلت إليها هذه المراجعة. استخدم الأقسام أعلاه وصفحات المشروع نفسه للوقائع.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد تثبيت واحد ووكيل واحد وبوت واحد.** تتبع الخطوات README وصفحة التنزيل.',
        ],
        numberedItems: [
          {
            title: 'ثبّت وكيلًا أولًا',
            whyItMatters: 'ثبّت واحدًا على الأقل من claude أو codex أو grok وسجّل الدخول إليه. أما للنموذج المحلي فشغّل Ollama أو LM Studio بدلًا من ذلك ونزّل نموذجًا.',
          },
          {
            title: 'ثبّت OpenMausBot',
            whyItMatters: 'افتح ملف .dmg واسحب التطبيق إلى Applications، أو شغّل مثبّت Windows (دون حاجة إلى صلاحيات المسؤول)، أو ثبّت ملف .deb عبر apt.',
          },
          {
            title: 'أنشئ بوتًا واختر نموذجه',
            whyItMatters: 'تظهر واجهات سطر الأوامر المثبّتة تلقائيًا في قائمة اختيار النموذج؛ أما المضيفون المحليون الذين يستجيبون على عنوانهم الافتراضي فيُدرجون تحت Custom.',
          },
          {
            title: 'وافق على ما يهم',
            whyItMatters: 'تصل أوامر الصدفة وتعديلات الملفات والأسئلة كبطاقات في الدردشة تسمح بها أو ترفضها.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور الميزات حول قائمة وكلاء تديرهم كما تدير جهات الاتصال.** كل ما يلي مأخوذ من README والوثائق.',
        ],
        items: [
          '**نموذج لكل بوت.** نماذج Claude وCodex جنبًا إلى جنب في قائمة اختيار واحدة، ويمكن التبديل بينها أثناء المحادثة.',
          '**بطاقات الموافقة.** وسيط أذونات يحوّل الإجراءات الخطرة إلى قرارات تتخذها، للحواسيب السحابية والمحلية على حد سواء.',
          '**حواسيب للبوتات.** سطح مكتب سحابي، أو Local VM معزولة، أو حاسوبك الخاص بعد موافقة صريحة منك على macOS وUbuntu Xorg.',
          '**تطبيقات متصلة.** يتيح Composio الوصول إلى Gmail وSlack وGitHub وNotion ومئات غيرها بعد تسجيل دخول OAuth واحد.',
          '**قنوات وفرق وروتينات.** قنوات منفصلة لكل سياق، وملفات فرق قابلة للتثبيت، ومشغّلات بجدول زمني أو بأحداث التطبيقات.',
          '**الصوت.** ردود منطوقة ومكالمات عبر ElevenLabs وFish Audio وGrok وأصوات Mac المدمجة أو خادم Chatterbox محلي.',
          '**الأتمتة.** خادم MCP عبر stdio لـ Claude Desktop أو Cursor، وأمر `openmausbot` للنصوص البرمجية وCI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول سياسة الخصوصية إن التطبيق المكتبي يعمل على جهازك وإن محادثاتك تبقى هناك، بينما يستخدم الموقع تحليلات يمكنك إيقافها.** وتحليلات الاستخدام الاختيارية في التطبيق مجهولة الهوية ويمكن إيقافها من الإعدادات. وأي شيء ترسله إلى وكيل سحابي أو حاسوب Cloud أو تطبيق متصل تعالجه تلك الخدمة وفق شروطها الخاصة.',
          'التطبيق مجاني بترخيص Apache 2.0، مع ترخيص منفصل متاح المصدر لمجلد المؤسسات. وتكلّف خطط MausBot Cloud الاختيارية $15 أو $49 أو $99 شهريًا ولا تشمل استخدام الذكاء الاصطناعي؛ إذ تدفع خطة Claude أو ChatGPT أو API الخاصة بك ثمن النماذج. وبحسب README، تُشفَّر المفاتيح التي يحفظها التطبيق المكتبي المعبّأ بواسطة نظام التشغيل، بينما يخزّن إعداد الطرفية مفاتيح API كنص عادي في ملف إعدادات خاص.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: ['الميزة', 'ما يعنيه عمليًا', 'القيد / التحفظ'],
        rows: [
          {
            'الميزة': 'مفتوح المصدر، Apache 2.0',
            'ما يعنيه عمليًا': 'يمكن قراءة الشيفرة والمشغّلات والوثائق وتعديلها.',
            'القيد / التحفظ': 'لمجلد المؤسسات ترخيص مختلف.',
          },
          {
            'الميزة': 'أحضر وكلاءك الخاصين',
            'ما يعنيه عمليًا': 'يستخدم حسابات Claude أو Codex أو Grok المسجَّل دخولك إليها دون وسيط.',
            'القيد / التحفظ': 'هذه نماذج سحابية، فهو ليس خاصًا افتراضيًا.',
          },
          {
            'الميزة': 'خيار النموذج المحلي',
            'ما يعنيه عمليًا': 'يمكن اختيار Ollama وLM Studio وخوادم أخرى لكل بوت.',
            'القيد / التحفظ': 'لم تختبره PromptQuorum؛ وقد تتعثر النماذج الصغيرة في عمل الوكلاء الكثيف الأدوات.',
          },
          {
            'الميزة': 'بطاقات الموافقة',
            'ما يعنيه عمليًا': 'تنتظر الإجراءات الخطرة قرارك.',
            'القيد / التحفظ': 'البوتات ذات الوصول إلى الحاسوب تتطلب مراجعة دقيقة لكل طلب.',
          },
          {
            'الميزة': 'مشروع سريع التطور',
            'ما يعنيه عمليًا': 'صدر الإصدار 0.1.155 في 13 نوفمبر 2026.',
            'القيد / التحفظ': 'حديث جدًا: أُنشئ في أغسطس 2026، وهو 0.1.x، وUbuntu لا يزال تجريبيًا.',
          },
          {
            'الميزة': 'تطبيق مجاني',
            'ما يعنيه عمليًا': 'لا حاجة إلى حساب للتطبيق المكتبي.',
            'القيد / التحفظ': 'رسوم النماذج عليك؛ ومثبّت Windows غير موقّع.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'OpenMausBot مقابل البدائل',
        content: [
          'هذه أقرب أدوات تنسيق الوكلاء والوكلاء الشخصيين في الدليل.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'الدور', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'OpenMausBot',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، Apache 2.0',
            'الدور': 'فريق وكلاء بأسلوب الدردشة',
            'الفرق الرئيسي': 'واجهة تطبيق مراسلة فوق واجهات Claude وCodex وGrok',
          },
          {
            'التطبيق': '[Multica](/ar/power-local-llm/multica-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'فريميوم، متاح المصدر',
            'الدور': 'مساحة عمل لإسناد مهام وكلاء البرمجة',
            'الفرق الرئيسي': 'لوحة مهام لوكلاء البرمجة، ذاتية الاستضافة',
          },
          {
            'التطبيق': '[Mission Control](/ar/power-local-llm/mission-control-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'لوحة تحكم لتشغيلات الوكلاء',
            'الفرق الرئيسي': 'يتتبع التشغيلات والإنفاق عبر بيئات الوكلاء',
          },
          {
            'التطبيق': '[Atomic Bot](/ar/power-local-llm/atomic-bot-review)',
            'المنصات': 'Mac وWindows وLinux وiOS وAndroid',
            'السعر والترخيص': 'فريميوم، MIT',
            'الدور': 'زميل عمل شخصي بالذكاء الاصطناعي',
            'الفرق الرئيسي': 'يحزم مكدّس OpenClaw؛ يعمل محليًا أو في السحابة',
          },
          {
            'التطبيق': '[Agent Zero](/ar/power-local-llm/agent-zero-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'وكيل مستقل',
            'الفرق الرئيسي': 'وكيل مستقل واحد، لا قائمة بوتات',
          },
        ],
        note: 'تتغير تفاصيل المنصات والأسعار والميزات للتطبيقات الخارجية كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب OpenMausBot',
        items: [
          '**من يدفعون بالفعل لـ Claude أو Codex أو Grok.** يعيد التطبيق استخدام حسابات الدخول هذه.',
          '**من يريدون عدة وكلاء في تطبيق دردشة واحد.** لكل بوت نموذجه ودوره.',
          '**المجرّبون الذين يستخدمون Ollama أو LM Studio.** تتيح المضيفات المحلية الموثّقة إجراء تجربة.',
          '**الفرق التي تريد طلبات موافقة.** تنتظر الإجراءات الخطرة قرارًا.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب OpenMausBot',
        items: [
          '**من يحتاج إلى كل شيء دون اتصال افتراضيًا.** الوكلاء الافتراضيون نماذج سحابية.',
          '**من يحتاج إلى أداة ناضجة.** هو مشروع 0.1.x من أغسطس 2026.',
          '**من لا يستطيع قبول مثبّت Windows غير موقّع.** سيُصدر SmartScreen تحذيرًا.',
          '**من يتوقع إعدادًا مختبرًا لنموذج محلي.** لم تشغّل PromptQuorum أيًّا منها.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني تشغيل OpenMausBot دون اتصال بالإنترنت كليًا؟',
            a: 'فقط إذا كان كل بوت يستخدم خادم نماذج محليًا على حاسوبك. فوكلاء Claude وCodex وGrok الافتراضيون يحتاجون إلى الإنترنت، ولم تختبر PromptQuorum إعدادًا دون اتصال.',
          },
          {
            q: 'ما خوادم النماذج المحلية التي يتعرف عليها؟',
            a: 'يسرد المصدر oMLX وOllama وEXO وLM Studio وUnsloth على عناوينها المحلية الافتراضية، وتصف الوثائق محركًا مضمَّنًا لأي عنوان متوافق مع OpenAI.',
          },
          {
            q: 'هل OpenMausBot من صنع xAI؟',
            a: 'لا. يقول README إنه مشروع مستقل مستوحى من Grok Bot، وغير تابع لـ xAI أو Meta أو OpenAI أو Manus.',
          },
          {
            q: 'هل توجد عملة رقمية مرتبطة به؟',
            a: 'لا. يذكر README أن المشروع لا يملك عملة رقمية وأن العملات التي تستخدم اسمه غير تابعة له.',
          },
          {
            q: 'هل الفيديو في هذه المراجعة عرض رسمي؟',
            a: 'لم تتمكن PromptQuorum من التأكد من صانعه. هو فيديو من طرف ثالث بعنوان متحمس، مرتبط هنا للسياق ولم يُتحقق منه.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'OpenMausBot خيار مناسب إذا كنت تستخدم Claude أو Codex أو Grok بالفعل وتريد فريق وكلاء بأسلوب الدردشة على حاسوبك مع طلبات موافقة وترخيص مفتوح. وهو ليس ذكاءً اصطناعيًا محليًا افتراضيًا، ومن يريد تشغيلًا محليًا كاملًا فعليه أن يعدّ مسار Ollama وLM Studio تجربة.',
          'التحفظات تتعلق بالنضج والتحقق: مشروع أُنشئ في أغسطس 2026، ومثبّت Windows غير موقّع، ونسخة Ubuntu تجريبية، ولا اختبار لنموذج محلي هنا. جرّبه ببوت واحد قبل أن تعتمد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[مستودع OpenMausBot وREADME](https://github.com/milind-soni/OpenMausBot) — الميزات والمحركات والترخيص وخطوات التثبيت.',
          '[Bring your own engine](https://github.com/milind-soni/OpenMausBot/blob/main/docs/custom-engines.md) — محركات ACP مخصصة ومحركات متوافقة مع OpenAI.',
          '[Other model providers](https://github.com/milind-soni/OpenMausBot/blob/main/apps/docs/content/docs/providers/model-providers.mdx) — محرك الدردشة ومسارات OpenCode.',
          '[قائمة المضيفين المحليين في المصدر](https://github.com/milind-soni/OpenMausBot/blob/main/server/drivers/local-inject.ts) — عناوين Ollama وLM Studio وoMLX وEXO وUnsloth.',
          '[الإصدارات](https://github.com/milind-soni/OpenMausBot/releases) — الإصدار 0.1.155 في 13 نوفمبر 2026 وملفات المثبّتات.',
          '[موقع MausBot](https://mausbot.com/) — التنزيل والأسعار وسياسة الخصوصية والشروط.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Multica](/ar/power-local-llm/multica-review) — مساحة عمل ذاتية الاستضافة لإسناد العمل إلى وكلاء البرمجة.',
          '[مراجعة Mission Control](/ar/power-local-llm/mission-control-review) — لوحة تحكم لتشغيلات الوكلاء وإنفاقها.',
          '[مراجعة Atomic Bot](/ar/power-local-llm/atomic-bot-review) — زميل عمل شخصي بالذكاء الاصطناعي يعمل محليًا أو في السحابة.',
          '[مراجعة Ollama](/ar/power-local-llm/ollama-review) — خادم النماذج المحلي الذي يمكن لـ OpenMausBot الاتصال به.',
          '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review) — تطبيق مكتبي يقدّم نماذج محلية عبر عنوان متوافق مع OpenAI.',
          '[دليل Local LLM Software Directory الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-14',
    dateModified: '2026-11-14',
    next_refresh_due: '2027-05-14',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openmausbot-review-hero-ko.webp',
    title: 'OpenMausBot 리뷰: 오픈소스 Grok Bot, 로컬 AI일까?',
    seoTitle: 'OpenMausBot 리뷰: 오픈소스 Grok Bot, 로컬 AI?',
    intro: 'OpenMausBot(MausBot 또는 예전 이름 OpenGrokBot으로도 불립니다)은 모든 연락처가 AI 에이전트인 무료 오픈소스 데스크톱 채팅 앱입니다. 이 앱 자체는 로컬 AI가 아닙니다. 이미 설치해 둔 Claude, Codex, Grok 명령줄 에이전트를 구동하는데, 이들은 클라우드 모델입니다. 소스 코드와 문서에 따르면 Ollama, LM Studio 또는 OpenAI 호환 주소를 통해 로컬 모델도 연결할 수 있습니다. 이 리뷰는 프로젝트의 저장소와 웹사이트를 바탕으로 그 질문에 먼저 답한 뒤 설치, 가격, 개인정보 보호, 대안을 다룹니다. PromptQuorum은 앱을 설치하지 않았고 로컬 모델을 실행해 보지 않았습니다.',
    metaDescription: 'OpenMausBot 리뷰: Claude, Codex, Grok 에이전트 기반 오픈소스 Grok Bot 대안. 기본은 로컬 아님, Ollama 연결 가능. 무료, Apache 2.0.',
    twitterDescription: 'OpenMausBot 리뷰: 데스크톱에서 쓰는 무료 오픈소스 AI 봇 팀. 로컬 AI일까요? 기본은 클라우드 에이전트이고 로컬 모델은 선택 사항입니다. 가격, 개인정보 보호, 한계를 정리했습니다.',
    audience: '오픈소스 Grok Bot 대안을 보고 로컬 실행 여부, 비용, Ollama나 LM Studio 모델로 구동할 수 있는지 궁금한 분들을 위한 글입니다.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenMausBot review',
    targetKeywords: [
      'openmausbot 리뷰',
      'openmausbot',
      'mausbot',
      '오픈소스 grok bot 대안',
      'openmausbot 로컬 llm',
      'openmausbot ollama',
      'openmausbot lm studio',
      'ai 에이전트 팀 데스크톱 앱',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows',
      'Ubuntu',
    ],
    leadAnswerBlock: '**OpenMausBot은 AI 봇 팀을 위한 무료 Apache 2.0 데스크톱 채팅 앱이며 기본값으로는 로컬 AI가 아닙니다. 봇은 설치해 둔 Claude, Codex, Grok 명령줄 에이전트로 실행되는데, 이들은 클라우드 모델입니다.** 프로젝트의 소스와 문서에 따르면 Ollama, LM Studio 및 기타 OpenAI 호환 서버를 통해 로컬 모델을 연결할 수 있으며, PromptQuorum은 이를 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'OpenMausBot은 로컬 AI입니까, 아니면 로컬 AI로 구동할 수 있습니까?',
        answer: '앱 자체는 사용자의 컴퓨터에서 실행되며 대화, 키, 이벤트를 그 컴퓨터의 폴더에 보관하지만, 모델은 포함되어 있지 않습니다. 기본적으로 각 봇은 Claude나 Codex 같은 에이전트 CLI를 사용하며, 이 CLI는 프롬프트를 해당 업체로 전송합니다. 저장소에는 앱이 확인하는 로컬 호스트도 나열되어 있으며 Ollama와 LM Studio가 포함되므로, 봇에 로컬 모델을 선택할 수 있습니다. 작은 로컬 모델이 도구 사용이 많은 에이전트 작업을 얼마나 잘 처리하는지는 여기서 테스트하지 않았습니다.',
        bullets: [
          '기본 경로: 이미 로그인해 둔 claude, codex, grok CLI이며, 제공업체의 요금과 한도가 적용됩니다.',
          '로컬 경로: 이 컴퓨터의 Ollama, LM Studio, oMLX, EXO, Unsloth 서버 또는 임의의 OpenAI 호환 주소입니다.',
          '앱은 무료이며, 선택 사항인 유료 Cloud 요금제는 상시 가동 클라우드 컴퓨터를 추가하지만 AI 사용량은 포함하지 않습니다.',
          '설치 파일은 macOS, Windows, Ubuntu용이 있으며, Windows 설치 파일은 서명되지 않았고 Ubuntu는 베타입니다.',
          '아래에 링크된 영상은 서드파티 영상이며 PromptQuorum이 검증하지 않았습니다.',
        ],
        updatedDate: '2026-11-14',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'OpenMausBot 받기', anchor: 'get-it' },
      { label: 'OpenMausBot 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'OpenMausBot이란', anchor: 'what-is-openmausbot' },
      { label: '로컬 AI입니까?', anchor: 'is-it-local' },
      { label: '영상', anchor: 'video' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'OpenMausBot과 대안 비교', anchor: 'vs-alternatives' },
      { label: 'OpenMausBot을 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'OpenMausBot을 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenMausBot은 사용자의 컴퓨터에서 AI 에이전트 팀을 관리하는 오픈소스 채팅 앱이며, 기본적으로 클라우드 에이전트를 사용하고 로컬 모델은 사용자가 연결할 때만 씁니다.',
          },
          {
            type: 'plain-terms',
            text: '모든 연락처가 AI 직원인 메신저 앱이라고 생각하면 됩니다. 앱은 사용자의 것이고 공개되어 있지만, 각 연락처의 두뇌는 사용자가 연결한 모델입니다.',
          },
        ],
        items: [
          '로컬 여부: 앱과 데이터 폴더는 로컬이지만 기본 에이전트는 그렇지 않으며, 로컬 모델은 선택적 연결입니다.',
          '라이선스와 개발사: Apache 2.0이며 인도에 설립된 회사인 Supamaus Software Private Limited가 배포합니다. enterprise 폴더에는 별도의 소스 공개(source-available) 라이선스가 있습니다.',
          '비용: 앱은 무료이고, 모델 사용료는 사용자의 제공업체가 청구하며, 선택 사항인 Cloud 요금제는 월 $15부터 시작합니다.',
          '유지보수: 버전 0.1.155가 2026년 11월 13일에 출시되어 프로젝트가 활발히 업데이트되고 있지만, 2026년 8월에 만들어진 어린 0.1.x 계열입니다.',
          '주의점: 서명되지 않은 Windows 설치 파일, 베타 상태의 Ubuntu, 그리고 PromptQuorum의 로컬 모델 테스트 없음.',
        ],
      },
      getItOpenMausBot: {
        id: 'get-it',
        title: 'OpenMausBot 받기',
        content: [
          '**OpenMausBot은 다른 데스크톱 앱처럼 설치하므로 터미널이 필요 없습니다.** 릴리스 페이지와 공식 사이트가 같은 설치 파일을 제공하며, 하니스 서버는 설치 파일에 내장되어 있습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Mac (Apple silicon)',
            '받는 곳': '[OpenMausBot.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.dmg) — README에 따르면 서명 및 공증 완료',
          },
          {
            '플랫폼': 'Mac (Intel)',
            '받는 곳': '[OpenMausBot-intel.dmg](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-intel.dmg)',
          },
          {
            '플랫폼': 'Windows (x64)',
            '받는 곳': '[OpenMausBot-setup.exe](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-setup.exe) — 아직 코드 서명 없음, SmartScreen에 "알 수 없는 게시자"로 표시',
          },
          {
            '플랫폼': 'Ubuntu 24.04 (x64, 베타)',
            '받는 곳': '[OpenMausBot-amd64.deb](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot-amd64.deb) 또는 [AppImage](https://github.com/milind-soni/OpenMausBot/releases/latest/download/OpenMausBot.AppImage)',
          },
          {
            '플랫폼': '터미널 또는 서버',
            '받는 곳': '`npx openmausbot` (Node 24 이상) — `serve` 옵션은 README 참조',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[mausbot.com](https://mausbot.com/) (openmausbot.com은 이곳으로 리디렉션)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[MausBot 개인정보 처리방침](https://mausbot.com/privacy)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[github.com/milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) — Apache 2.0',
          },
        ],
        note: 'Android와 iOS 동반 앱은 실행 중인 데스크톱이나 서버를 위한 리모컨으로 설명되며, 앱 스토어가 아니라 프로젝트의 Discord를 통해 공유됩니다. 에이전트 CLI(Claude, Codex 또는 Grok)를 하나 이상 설치하고 로그인해 두거나 연결된 모델 서버가 있어야 합니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'OpenMausBot 한눈에 보기',
        columns: ['항목', 'OpenMausBot'],
        rows: [
          { '항목': '플랫폼', 'OpenMausBot': 'macOS, Windows x64, Ubuntu 24.04 x64 (베타)' },
          { '항목': '가격', 'OpenMausBot': '앱 무료, 선택 Cloud 월 $15, $49 또는 $99' },
          { '항목': '라이선스', 'OpenMausBot': 'Apache 2.0 (enterprise 폴더는 별도)' },
          { '항목': '실행 위치', 'OpenMausBot': '앱과 데이터는 내 컴퓨터, 모델은 에이전트 CLI 또는 연결 서버' },
          { '항목': '로컬 모델', 'OpenMausBot': 'Ollama, LM Studio, OpenAI 호환 서버로 가능, PromptQuorum 미테스트' },
          { '항목': '자체 모델 포함', 'OpenMausBot': '아니요' },
          { '항목': '승인 프롬프트', 'OpenMausBot': '예, 셸 명령, 파일 편집, 질문에 대해' },
          { '항목': 'MCP 서버와 CLI', 'OpenMausBot': 'README에 둘 다 명시' },
        ],
        note: '항목은 2026년 11월 14일에 확인한 README, 문서, 웹사이트에 근거합니다. 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsOpenMausBot: {
        id: 'what-is-openmausbot',
        title: 'OpenMausBot이란',
        content: [
          '**OpenMausBot은 각 봇이 고유한 성격, 모델, 컴퓨터, 연결된 앱을 가진 실제 에이전트인 채팅 앱입니다.** README는 이 프로젝트를 xAI의 Grok Bot에서 영감을 받은 독립 오픈소스 프로젝트로 설명하며, 예전 이름은 OpenGrokBot이고 MausBot으로도 불리며, xAI, Meta, OpenAI, Manus와 제휴 관계가 없다고 밝힙니다.',
          `배포사는 Supamaus Software Private Limited이며 약관 페이지는 이 회사를 인도에 설립된 회사라고 설명하고, 저장소는 개발자 Milind Soni의 소유입니다. GitHub 저장소 페이지에는 별 ${ST.ko('openmausbot')}개가 표시되어 있습니다. README에는 이 프로젝트에 토큰이 없으며 그 이름을 쓰는 코인은 관련이 없다는 설명도 있습니다.`,
        ],
      },
      isItLocal: {
        id: 'is-it-local',
        itemHeadings: true,
        title: '로컬 AI입니까?',
        content: [
          '**앱은 로컬이고, 기본 모델은 로컬이 아니며, 로컬 모델은 선택 사항입니다.** 세 개의 계층이 각각 따로 이 질문에 답합니다.',
        ],
        columns: ['계층', '실행 위치', '출처'],
        rows: [
          {
            '계층': '앱, 하니스 서버, 데이터',
            '실행 위치': '내 컴퓨터: 127.0.0.1의 작은 서버이며, 대화 기록, 키, 이벤트는 ~/.openmausbot에 저장',
            '출처': 'README, "Why" 섹션',
          },
          {
            '계층': '기본 에이전트 (Claude, Codex, Grok)',
            '실행 위치': '각 업체의 클라우드 모델이며, 설치하고 로그인한 CLI를 통해 연결됩니다. 프롬프트는 해당 업체로 전송됩니다',
            '출처': 'README, "Bring your own agents"',
          },
          {
            '계층': '로컬 모델 (Ollama, LM Studio, oMLX, EXO, Unsloth)',
            '실행 위치': '서버가 기본 로컬 주소에서 응답하고 봇에 그 모델을 고르면 내 컴퓨터나 네트워크에서 실행',
            '출처': '저장소 파일 server/drivers/local-inject.ts, docs/custom-engines.md',
          },
          {
            '계층': '클라우드 컴퓨터와 연결된 앱',
            '실행 위치': '선택 사항: 호스팅되는 Linux 데스크톱과 Gmail, Slack 등에 대한 Composio 연결이며, Local VM도 제공',
            '출처': 'README, "Agents with hands"',
          },
        ],
        note: '로컬 모델 행은 저장소의 소스와 문서에 근거합니다. PromptQuorum은 OpenMausBot으로 로컬 모델을 실행해 보지 않았으므로 작은 모델의 응답 품질, 도구 사용, 속도는 알 수 없습니다. 문서에 따르면 OpenAI 호환 서비스용 내장 엔진은 모델 선택기에서 "OpenAI-compatible (OpenRouter / Groq)"로 표시됩니다.',
      },
      video: {
        id: 'video',
        title: '영상',
        youtubeUrl: 'https://www.youtube.com/watch?v=_rQPVOpjljE',
        content: [
          '**"NEW Open Source Grok Bot is INSANE (FREE!)"라는 제목의 서드파티 영상입니다.** 독자들이 이 영상을 본 뒤 OpenMausBot에 대해 문의했기 때문에 여기에 삽입했습니다. PromptQuorum은 영상의 주장을 검토하지 않았으며, 제목은 제작자의 의견이지 이 리뷰의 결론이 아닙니다. 사실은 위의 섹션과 프로젝트의 공식 페이지를 참고하십시오.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 에이전트 하나, 봇 하나로 이루어집니다.** 단계는 README와 다운로드 페이지를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '먼저 에이전트 설치',
            whyItMatters: 'claude, codex, grok CLI 중 하나 이상을 설치하고 로그인합니다. 로컬 모델을 쓰려면 대신 Ollama나 LM Studio를 시작하고 모델을 받아 둡니다.',
          },
          {
            title: 'OpenMausBot 설치',
            whyItMatters: '.dmg를 열어 앱을 응용 프로그램 폴더로 끌어 놓거나, Windows 설치 파일을 실행하거나(관리자 권한 불필요), .deb를 apt로 설치합니다.',
          },
          {
            title: '봇을 만들고 모델 고르기',
            whyItMatters: '설치된 CLI는 모델 선택기에 자동으로 나타나고, 기본 주소에서 응답하는 로컬 호스트는 Custom 아래에 표시됩니다.',
          },
          {
            title: '중요한 것은 직접 승인',
            whyItMatters: '셸 명령, 파일 편집, 질문이 채팅에 카드로 도착하며, 사용자가 허용하거나 거부합니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 연락처처럼 관리하는 에이전트 명단을 중심으로 구성됩니다.** 아래 내용은 모두 README와 문서에서 가져왔습니다.',
        ],
        items: [
          '**봇마다 모델.** Claude와 Codex 모델이 하나의 선택기에 나란히 있으며 대화 도중에도 바꿀 수 있습니다.',
          '**승인 카드.** 권한 중개기가 위험한 작업을 클라우드와 로컬 컴퓨터 모두에서 사용자가 내리는 결정으로 바꿔 줍니다.',
          '**봇을 위한 컴퓨터.** 클라우드 데스크톱, 격리된 Local VM, 또는 명시적으로 동의한 뒤에는 macOS와 Ubuntu Xorg의 내 컴퓨터를 쓸 수 있습니다.',
          '**연결된 앱.** Composio가 한 번의 OAuth 로그인으로 Gmail, Slack, GitHub, Notion 등 수백 개 앱에 대한 접근을 제공합니다.',
          '**채널, 팀, 루틴.** 맥락별 별도 채널, 설치 가능한 팀 파일, 예약 또는 앱 이벤트 트리거가 있습니다.',
          '**음성.** ElevenLabs, Fish Audio, Grok, Mac 내장 음성 또는 로컬 Chatterbox 서버를 통한 음성 응답과 통화.',
          '**자동화.** Claude Desktop이나 Cursor용 stdio MCP 서버와 스크립트 및 CI용 `openmausbot` 명령.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**개인정보 처리방침에 따르면 데스크톱 앱은 사용자의 컴퓨터에서 실행되고 대화는 그곳에 머무르며, 웹사이트는 끌 수 있는 분석을 사용합니다.** 앱의 선택적 사용 분석은 익명이며 설정에서 끌 수 있습니다. 클라우드 에이전트, Cloud 컴퓨터, 연결된 앱으로 보낸 내용은 해당 서비스가 자체 약관에 따라 처리합니다.',
          '앱은 Apache 2.0에 따라 무료이며, enterprise 폴더에는 별도의 소스 공개 라이선스가 있습니다. 선택 사항인 MausBot Cloud 요금제는 월 $15, $49 또는 $99이며 AI 사용량은 포함하지 않습니다. 모델 비용은 사용자의 Claude, ChatGPT 또는 API 요금제가 부담합니다. README에 따르면 패키지된 데스크톱 앱이 저장한 키는 운영 체제가 암호화하는 반면, 터미널 설정은 API 키를 비공개 설정 파일에 평문으로 저장합니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '오픈소스, Apache 2.0',
            '실제 사용에서의 의미': '코드, 드라이버, 문서를 읽고 수정할 수 있습니다.',
            '한계 / 주의점': 'enterprise 폴더는 라이선스가 다릅니다.',
          },
          {
            '장점': '내 에이전트 가져오기',
            '실제 사용에서의 의미': '프록시 없이 기존 Claude, Codex, Grok 로그인을 그대로 씁니다.',
            '한계 / 주의점': '이들은 클라우드 모델이므로 기본값으로는 비공개가 아닙니다.',
          },
          {
            '장점': '로컬 모델 옵션',
            '실제 사용에서의 의미': 'Ollama, LM Studio 등의 서버를 봇마다 고를 수 있습니다.',
            '한계 / 주의점': 'PromptQuorum 미테스트, 작은 모델은 도구 사용이 많은 에이전트 작업이 어려울 수 있음.',
          },
          {
            '장점': '승인 카드',
            '실제 사용에서의 의미': '위험한 작업은 사용자의 결정을 기다립니다.',
            '한계 / 주의점': '컴퓨터 접근 권한이 있는 봇은 요청마다 신중한 검토가 필요합니다.',
          },
          {
            '장점': '빠르게 발전하는 프로젝트',
            '실제 사용에서의 의미': '버전 0.1.155가 2026년 11월 13일에 출시되었습니다.',
            '한계 / 주의점': '아주 어림: 2026년 8월 생성, 0.1.x, Ubuntu는 아직 베타.',
          },
          {
            '장점': '무료 앱',
            '실제 사용에서의 의미': '데스크톱 앱에는 계정이 필요 없습니다.',
            '한계 / 주의점': '모델 요금은 사용자 부담, Windows 설치 파일은 서명 없음.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'OpenMausBot과 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 에이전트 오케스트레이션 및 개인 에이전트 도구입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'OpenMausBot',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, Apache 2.0',
            '역할': '채팅형 에이전트 팀',
            '주요 차이': 'Claude, Codex, Grok CLI 위의 메신저형 인터페이스',
          },
          {
            '앱': '[Multica](/ko/power-local-llm/multica-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '프리미엄, 소스 공개',
            '역할': '코딩 에이전트 작업 배정 워크스페이스',
            '주요 차이': '코딩 에이전트용 작업 보드, 셀프 호스팅',
          },
          {
            '앱': '[Mission Control](/ko/power-local-llm/mission-control-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '에이전트 실행 컨트롤 플레인',
            '주요 차이': '여러 에이전트 런타임의 실행과 비용 추적',
          },
          {
            '앱': '[Atomic Bot](/ko/power-local-llm/atomic-bot-review)',
            '플랫폼': 'Mac, Windows, Linux, iOS, Android',
            '가격과 라이선스': '프리미엄, MIT',
            '역할': '개인 AI 동료',
            '주요 차이': 'OpenClaw 스택을 패키지화, 로컬 또는 클라우드 실행',
          },
          {
            '앱': '[Agent Zero](/ko/power-local-llm/agent-zero-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '자율 에이전트',
            '주요 차이': '봇 명단이 아닌 자율 에이전트 하나',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'OpenMausBot을 쓰면 좋은 사용자',
        items: [
          '**이미 Claude, Codex, Grok을 결제해 쓰는 사람.** 앱이 그 로그인을 그대로 재사용합니다.',
          '**채팅 앱 하나에서 여러 에이전트를 쓰려는 사용자.** 봇마다 모델과 역할이 따로 있습니다.',
          '**Ollama나 LM Studio로 이것저것 시험해 보는 사용자.** 문서에 명시된 로컬 호스트로 실험이 가능합니다.',
          '**승인 프롬프트를 원하는 팀.** 위험한 작업은 결정을 기다립니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'OpenMausBot을 쓰지 말아야 할 사용자',
        items: [
          '**기본값부터 모든 것이 오프라인이어야 하는 사람.** 기본 에이전트는 클라우드 모델입니다.',
          '**성숙한 도구가 필요한 사람.** 2026년 8월에 시작된 0.1.x 프로젝트입니다.',
          '**서명되지 않은 Windows 설치 파일을 받아들일 수 없는 사용자.** SmartScreen이 경고합니다.',
          '**검증된 로컬 모델 환경을 기대하는 사람.** PromptQuorum은 실행해 보지 않았습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'OpenMausBot을 완전히 오프라인으로 실행할 수 있습니까?',
            a: '모든 봇이 사용자의 컴퓨터에 있는 로컬 모델 서버를 쓸 때만 가능합니다. 기본 Claude, Codex, Grok 에이전트는 인터넷이 필요하며, PromptQuorum은 오프라인 환경을 테스트하지 않았습니다.',
          },
          {
            q: '어떤 로컬 모델 서버를 인식합니까?',
            a: '소스에는 oMLX, Ollama, EXO, LM Studio, Unsloth가 기본 로컬 주소와 함께 나열되어 있으며, 문서는 임의의 OpenAI 호환 주소를 위한 내장 엔진을 설명합니다.',
          },
          {
            q: 'OpenMausBot은 xAI가 만들었습니까?',
            a: '아닙니다. README는 Grok Bot에서 영감을 받은 독립 프로젝트이며 xAI, Meta, OpenAI, Manus와 제휴 관계가 없다고 밝힙니다.',
          },
          {
            q: '암호화폐 토큰이 있습니까?',
            a: '없습니다. README는 이 프로젝트에 토큰이 없으며 그 이름을 쓰는 코인은 프로젝트와 무관하다고 밝힙니다.',
          },
          {
            q: '이 리뷰의 영상은 공식 데모입니까?',
            a: 'PromptQuorum은 누가 만들었는지 확인하지 못했습니다. 들뜬 제목의 서드파티 영상이며, 맥락 참고용으로 링크했을 뿐 검증하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '이미 Claude, Codex, Grok을 쓰고 있고, 승인 프롬프트와 공개 라이선스를 갖춘 채팅형 에이전트 팀을 자신의 컴퓨터에서 쓰고 싶다면 OpenMausBot이 잘 맞습니다. 기본값으로는 로컬 AI가 아니므로, 완전한 로컬 운용을 원한다면 Ollama와 LM Studio 경로는 실험으로 보는 것이 좋습니다.',
          '주의할 점은 성숙도와 검증입니다. 2026년 8월에 만들어진 프로젝트, 서명되지 않은 Windows 설치 파일, 베타 Ubuntu 빌드, 그리고 여기서 진행하지 않은 로컬 모델 테스트가 있습니다. 의존하기 전에 봇 하나로 먼저 써 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[OpenMausBot 저장소와 README](https://github.com/milind-soni/OpenMausBot) — 기능, 엔진, 라이선스, 설치 단계.',
          '[Bring your own engine](https://github.com/milind-soni/OpenMausBot/blob/main/docs/custom-engines.md) — 사용자 지정 ACP 및 OpenAI 호환 엔진.',
          '[Other model providers](https://github.com/milind-soni/OpenMausBot/blob/main/apps/docs/content/docs/providers/model-providers.mdx) — 채팅 엔진과 OpenCode 경로.',
          '[소스의 로컬 호스트 목록](https://github.com/milind-soni/OpenMausBot/blob/main/server/drivers/local-inject.ts) — Ollama, LM Studio, oMLX, EXO, Unsloth 주소.',
          '[릴리스](https://github.com/milind-soni/OpenMausBot/releases) — 2026년 11월 13일자 버전 0.1.155와 설치 파일.',
          '[MausBot 웹사이트](https://mausbot.com/) — 다운로드, 가격, 개인정보 처리방침, 약관.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Multica 리뷰](/ko/power-local-llm/multica-review) — 코딩 에이전트에 작업을 배정하는 셀프 호스팅 워크스페이스.',
          '[Mission Control 리뷰](/ko/power-local-llm/mission-control-review) — 에이전트 실행과 비용을 위한 컨트롤 플레인.',
          '[Atomic Bot 리뷰](/ko/power-local-llm/atomic-bot-review) — 로컬 또는 클라우드에서 실행되는 개인 AI 동료.',
          '[Ollama 리뷰](/ko/power-local-llm/ollama-review) — OpenMausBot이 연결할 수 있는 로컬 모델 서버.',
          '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review) — 로컬 모델을 OpenAI 호환 주소로 제공하는 데스크톱 앱.',
          '[전체 Local LLM Software Directory](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
        ],
      },
    },
  },
}

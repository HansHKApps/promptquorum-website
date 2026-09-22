// Local Chat Apps & Assistants Compared: desktop, mobile, self-hosted web, assistants and roleplay
// Slug: local-llm-chat-assistants-compared
// Category comparison guide for the `chat-assistants` group. The comparison table is NOT written here:
// it is generated from the tool records (src/lib/power-local-llm/apps/*.ts) by the section whose
// `component` is 'CategoryCompareTable', so this article can never contradict the tool data.
// The per-attribute lists below were generated from those records (each value verified against the
// project's official README/site) and must also hold in each tool's own review (see docs/PAGE_UPDATER.md
// Step 4.5, category<->review rule). Keep the locale blocks structurally identical to `en`.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { localAiApps } from '@/lib/power-local-llm/apps-barrel'

// Live counts from the directory — recomputed at build time so this article never drifts from
// the actual tool count as the directory grows. Only tools with their own PromptQuorum review are
// counted (matches the CategoryCompareTable's own "only reviewed tools" rule). The desktop/mobile/
// web-and-CLI split is general-chat-clients crossed with the tool's interface(s), not a separate
// category — mirrors how the leadAnswerBlock/FAQ text describes the breakdown.
const TOTAL_APP_COUNT = localAiApps.length
const REVIEWED_CA_APPS = localAiApps.filter((a) => a.reviewSlug != null)
const REVIEWED_GENERAL_CHAT_CLIENTS = REVIEWED_CA_APPS.filter((a) => a.categories.includes('general-chat-clients'))
const CA_DESKTOP = REVIEWED_GENERAL_CHAT_CLIENTS.filter((a) => a.interfaces.includes('desktop')).length
const CA_MOBILE = REVIEWED_GENERAL_CHAT_CLIENTS.filter((a) => a.interfaces.includes('mobile')).length
const CA_WEB_CLI = REVIEWED_GENERAL_CHAT_CLIENTS.filter((a) => a.interfaces.includes('web') || a.interfaces.includes('cli')).length
const CA_PERSONAL_ASSISTANTS = REVIEWED_CA_APPS.filter((a) => a.categories.includes('personal-assistants')).length
const CA_ROLEPLAY = REVIEWED_CA_APPS.filter((a) => a.categories.includes('roleplay-companions')).length
const CA_TOTAL = new Set(
  REVIEWED_CA_APPS.filter(
    (a) =>
      a.categories.includes('general-chat-clients') ||
      a.categories.includes('personal-assistants') ||
      a.categories.includes('roleplay-companions'),
  ).map((a) => a.slug),
).size

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Easiest Desktop Apps',
    title: 'Local Chat Apps & Assistants Compared (2026): Desktop, Mobile, Self-Hosted, Assistants and Roleplay',
    seoTitle: 'Local Chat Apps & AI Assistants Compared 2026',
    intro:
      `Chat apps that run language models on your own hardware are not one product category: a desktop app, a phone app, a self-hosted web interface, a personal assistant and a roleplay tool solve different problems, and no single feature list compares them fairly. This guide compares ${CA_TOTAL} free and paid tools, one kind at a time, using a comparison table generated from the same data as each tool's own PromptQuorum review, so the table and the reviews cannot disagree.`,
    metaDescription:
      `Compare ${CA_TOTAL} local chat apps and AI assistants side by side: desktop apps (LM Studio, Jan, GPT4All), phone apps, self-hosted web UIs (Open WebUI, LibreChat), assistants and roleplay tools. Licenses, MCP, Ollama, offline use, from official docs.`,
    twitterDescription:
      'Local chat apps and assistants compared by kind — desktop, mobile, self-hosted web, personal assistants, roleplay — with MCP, Ollama, offline use and more, from official documentation.',
    audience:
      'Developers, self-hosters and privacy-conscious users choosing a local chat app or assistant for their computer, phone or server, who want the differences laid out per kind of tool, not one blended list.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local chat apps compared',
    targetKeywords: [
      'best local ai chat app',
      'lm studio vs jan vs gpt4all',
      'open webui vs librechat',
      'offline ai chat app iphone android',
      'local llm chat client comparison',
      'self hosted chatgpt alternative',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      `**The ${CA_TOTAL} local chat apps and assistants in the PromptQuorum directory split into five kinds that should be compared separately: desktop chat apps (${CA_DESKTOP}), mobile chat apps (${CA_MOBILE}), web and CLI chat clients (${CA_WEB_CLI}), personal assistants (${CA_PERSONAL_ASSISTANTS}) and roleplay and companion apps (${CA_ROLEPLAY}).** Among desktop apps, 7 document MCP support and 9 document Ollama; among phone apps, 15 document fully offline use; among web clients, 8 document Docker deployment. Use the comparison table below, and read each tool's own review before you install it.`,
    quickAnswerTop: {
      en: {
        question: 'Which local chat app should I use?',
        answer:
          'It depends on where you want to chat, so compare within one kind at a time. Pick by the constraint that matters most — the device (computer, phone or server), working offline, MCP support, connecting to Ollama or your own endpoint, or chatting with your files — and use the table below, which is generated from each tool\'s official documentation.',
        bullets: [
          'Desktop chat apps: 17 tools compared on running models themselves, Ollama, endpoints, MCP, file chat and voice.',
          'Mobile chat apps: 26 tools compared on offline use, importing models, in-app downloads, image input and voice.',
          'Web and CLI clients: 13 tools compared on Docker, multi-user, Ollama, endpoints, file chat and MCP.',
          'Personal assistants (13) and roleplay apps (4) are compared on the features that matter for each.',
          'A dash (—) means the project\'s documentation does not state it, not that the feature is missing.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'How We Compared', anchor: 'how-we-compared' },
      { label: 'Comparison Table', anchor: 'comparison-table' },
      { label: 'Desktop Chat Apps: What Differs', anchor: 'desktop-differences' },
      { label: 'Mobile Chat Apps: What Differs', anchor: 'mobile-differences' },
      { label: 'Web and CLI Clients: What Differs', anchor: 'web-differences' },
      { label: 'Personal Assistants: What Differs', anchor: 'assistant-differences' },
      { label: 'Roleplay and Companions: What Differs', anchor: 'roleplay-differences' },
      { label: 'What This Comparison Cannot Tell You', anchor: 'limitations' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Local chat apps are five different kinds of product — desktop apps, phone apps, self-hosted web interfaces, personal assistants and roleplay tools — so the ${CA_TOTAL} tools in the PromptQuorum directory are compared within each kind, using a table generated from the same tool data as each tool's own review.`,
          },
          {
            type: 'plain-terms',
            text: 'Some apps you install on a computer, some on a phone, some you host yourself and open in a browser, some act as an assistant that does things for you, and some are built for character roleplay. Comparing a phone app with a server-side web interface on the same features makes no sense, so this guide compares like with like.',
          },
        ],
        items: [
          `${CA_TOTAL} tools, five kinds: desktop chat apps (${CA_DESKTOP}), mobile chat apps (${CA_MOBILE}), web and CLI chat clients (${CA_WEB_CLI}), personal assistants (${CA_PERSONAL_ASSISTANTS}) and roleplay and companion apps (${CA_ROLEPLAY}). A tool available on several devices, such as Enchanted, appears in each kind it belongs to.`,
          'The table is generated from each tool\'s record and checked against its official README or site; a dash means "not stated in the documentation", never "no". Phone apps are documented mostly by store listings, so their cells are the sparsest.',
          'Every tool name in the table links to its own PromptQuorum review, which is where installation steps and limits are covered.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'How We Compared',
        content: [
          'Each tool\'s facts — price, license, platforms, hardware needs and category-specific attributes — are stored once, in that tool\'s directory record. The comparison table below is generated from those records, and the tool\'s own review draws on the same record, so the two cannot state different values.',
          'Category-specific attributes (for example MCP support or offline use) were taken from each project\'s official README or website and checked against the exact wording there. Where the documentation is silent, the table shows a dash rather than guessing; where a claim is qualified (roadmap only, a paid tier, or a requirement such as a separate server), the attribute is left out of the table and covered in the tool\'s review instead.',
          'Only tools with their own PromptQuorum review are in the table. For a few apps (AI On Device, Chatty Mini and LocalAI ApexCreator) the directory has no official page to check, so their cells are dashes. The comparison does not rank the tools, because the right one depends on your constraint.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        content: 'Choose a kind of tool below, then read across a row. Click a tool name to open its full PromptQuorum review.',
        component: 'CategoryCompareTable',
      },
      desktopDifferences: {
        id: 'desktop-differences',
        title: 'Desktop Chat Apps: What Differs',
        items: [
          '**Runs models itself.** [AnythingLLM](/power-local-llm/anythingllm-review), [Ekorbia](/power-local-llm/ekorbia-review), [GPT4All](/power-local-llm/gpt4all-review), [Jan](/power-local-llm/jan-review), [LM Studio](/power-local-llm/lm-studio-review), [Off Grid AI](/power-local-llm/off-grid-ai-review), [On Device AI](/power-local-llm/on-device-ai-review), [Osaurus](/power-local-llm/osaurus-ai-review) and [Sidekick](/power-local-llm/sidekick-review) document running models on their own, without a separate server.',
          '**Ollama.** [AnythingLLM](/power-local-llm/anythingllm-review), [BoltAI](/power-local-llm/boltai-review), [Cherry Studio](/local-llms/cherry-studio-ai-desktop-client), [Ekorbia](/power-local-llm/ekorbia-review), [Enchanted](/power-local-llm/enchanted-review), [Hanoki](/power-local-llm/hanoki-review), [Off Grid AI](/power-local-llm/off-grid-ai-review), [On Device AI](/power-local-llm/on-device-ai-review) and [Osaurus](/power-local-llm/osaurus-ai-review) document connecting to Ollama.',
          '**OpenAI-compatible endpoints.** [AnythingLLM](/power-local-llm/anythingllm-review), [Ekorbia](/power-local-llm/ekorbia-review), [Hanoki](/power-local-llm/hanoki-review) and [Sidekick](/power-local-llm/sidekick-review) document connecting to OpenAI-compatible endpoints.',
          '**MCP.** [AnythingLLM](/power-local-llm/anythingllm-review), [BoltAI](/power-local-llm/boltai-review), [Cherry Studio](/local-llms/cherry-studio-ai-desktop-client), [Jan](/power-local-llm/jan-review), [Locally Uncensored](/power-local-llm/locally-uncensored-review), [Odysseus](/power-local-llm/odysseus-review) and [Osaurus](/power-local-llm/osaurus-ai-review) document MCP support.',
          '**Chat with your files.** [AnythingLLM](/power-local-llm/anythingllm-review), [BoltAI](/power-local-llm/boltai-review), [Ekorbia](/power-local-llm/ekorbia-review), [GPT4All](/power-local-llm/gpt4all-review), [Locally Uncensored](/power-local-llm/locally-uncensored-review), [Off Grid AI](/power-local-llm/off-grid-ai-review), [On Device AI](/power-local-llm/on-device-ai-review), [Osaurus](/power-local-llm/osaurus-ai-review) and [Sidekick](/power-local-llm/sidekick-review) document chatting with your own files.',
          '**Voice.** [AnythingLLM](/power-local-llm/anythingllm-review), [BoltAI](/power-local-llm/boltai-review), [Ekorbia](/power-local-llm/ekorbia-review), [Enchanted](/power-local-llm/enchanted-review), [LM Studio](/power-local-llm/lm-studio-review), [Off Grid AI](/power-local-llm/off-grid-ai-review), [On Device AI](/power-local-llm/on-device-ai-review) and [Osaurus](/power-local-llm/osaurus-ai-review) document voice input or output.',
          '**Price.** Of the 17 desktop apps, 11 are free, 5 freemium and 1 paid. Check each review for what the paid tier adds.',
        ],
      },
      mobileDifferences: {
        id: 'mobile-differences',
        title: 'Mobile Chat Apps: What Differs',
        items: [
          '**Fully offline.** [Arbiter](/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review), [Layla](/power-local-llm/layla-review), [Locally AI](/power-local-llm/locally-ai-review), [Loci AI](/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/power-local-llm/maid-review), [Noema](/power-local-llm/noema-review), [Off Grid AI](/power-local-llm/off-grid-ai-review), [On Device AI](/power-local-llm/on-device-ai-review), [Pocket AI](/power-local-llm/pocket-ai-review), [PocketPal AI](/power-local-llm/pocketpal-ai-review), [Private LLM](/power-local-llm/private-llm-review), [Solair AI](/power-local-llm/solair-ai-review) and [ToolNeuron](/power-local-llm/toolneuron-review) document running fully offline on the device.',
          '**Import your own models.** [Arbiter](/power-local-llm/arbiter-local-ai-chat-review), [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review), [Maid](/power-local-llm/maid-review), [On Device AI](/power-local-llm/on-device-ai-review), [PocketPal AI](/power-local-llm/pocketpal-ai-review) and [ToolNeuron](/power-local-llm/toolneuron-review) document importing your own model files.',
          '**In-app model downloads.** [Arbiter](/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review), [Liquid Apollo](/power-local-llm/liquid-apollo-review), [Locally AI](/power-local-llm/locally-ai-review), [Loci AI](/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/power-local-llm/maid-review), [On Device AI](/power-local-llm/on-device-ai-review), [Pocket AI](/power-local-llm/pocket-ai-review), [PocketPal AI](/power-local-llm/pocketpal-ai-review) and [Private LLM](/power-local-llm/private-llm-review) document downloading models inside the app.',
          '**Image input.** [Arbiter](/power-local-llm/arbiter-local-ai-chat-review), [Enchanted](/power-local-llm/enchanted-review), [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/power-local-llm/locally-ai-review), [Off Grid AI](/power-local-llm/off-grid-ai-review), [On Device AI](/power-local-llm/on-device-ai-review), [RikkaHub](/power-local-llm/rikkahub-review), [Solair AI](/power-local-llm/solair-ai-review) and [ToolNeuron](/power-local-llm/toolneuron-review) document image input.',
          '**Voice.** [Enchanted](/power-local-llm/enchanted-review), [Enclave AI](/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/power-local-llm/locally-ai-review), [Off Grid AI](/power-local-llm/off-grid-ai-review), [On Device AI](/power-local-llm/on-device-ai-review), [PocketPal AI](/power-local-llm/pocketpal-ai-review), [Solair AI](/power-local-llm/solair-ai-review) and [ToolNeuron](/power-local-llm/toolneuron-review) document voice input or output.',
          '**Price.** Of the 26 phone apps, 16 are free, 6 freemium and 4 paid.',
          '**Documentation.** Most phone apps are documented only by their store listing or website, which states far less than a README does, so this table has more dashes than the others.',
        ],
      },
      webDifferences: {
        id: 'web-differences',
        title: 'Web and CLI Clients: What Differs',
        items: [
          '**Docker and self-hosting.** [AnythingLLM](/power-local-llm/anythingllm-review), [Big-AGI](/local-llms/big-agi-review), [KoboldCpp](/power-local-llm/koboldcpp-review), [LibreChat](/power-local-llm/librechat-review), [LobeChat](/local-llms/lobechat-review), [NextChat](/local-llms/nextchat-review), [Odysseus](/power-local-llm/odysseus-review) and [Open WebUI](/local-llms/open-webui-review) document Docker or self-hosted deployment.',
          '**Multiple users.** [LibreChat](/power-local-llm/librechat-review) and [Open WebUI](/local-llms/open-webui-review) document multi-user support.',
          '**Ollama.** [aichat](/power-local-llm/aichat-review), [AnythingLLM](/power-local-llm/anythingllm-review), [Big-AGI](/local-llms/big-agi-review), [Chatbox](/local-llms/chatbox-review), [LibreChat](/power-local-llm/librechat-review), [Open WebUI](/local-llms/open-webui-review) and [Page Assist](/local-llms/page-assist-review) document connecting to Ollama.',
          '**OpenAI-compatible endpoints.** [aichat](/power-local-llm/aichat-review), [AnythingLLM](/power-local-llm/anythingllm-review), [Big-AGI](/local-llms/big-agi-review), [LibreChat](/power-local-llm/librechat-review), [NextChat](/local-llms/nextchat-review), [Open WebUI](/local-llms/open-webui-review) and [Page Assist](/local-llms/page-assist-review) document connecting to OpenAI-compatible endpoints.',
          '**Chat with your files.** [aichat](/power-local-llm/aichat-review), [AnythingLLM](/power-local-llm/anythingllm-review), [Chatbox](/local-llms/chatbox-review), [KoboldCpp](/power-local-llm/koboldcpp-review), [LibreChat](/power-local-llm/librechat-review) and [Open WebUI](/local-llms/open-webui-review) document chatting with your own files.',
          '**MCP.** [aichat](/power-local-llm/aichat-review), [AnythingLLM](/power-local-llm/anythingllm-review), [Chatbox](/local-llms/chatbox-review), [KoboldCpp](/power-local-llm/koboldcpp-review), [LibreChat](/power-local-llm/librechat-review), [LobeChat](/local-llms/lobechat-review), [NextChat](/local-llms/nextchat-review), [Odysseus](/power-local-llm/odysseus-review) and [Open WebUI](/local-llms/open-webui-review) document MCP support.',
        ],
      },
      assistantDifferences: {
        id: 'assistant-differences',
        title: 'Personal Assistants: What Differs',
        items: [
          '**Local LLMs.** [Jarvis](/power-local-llm/jarvis-mac-review), [Khoj](/power-local-llm/khoj-ai-second-brain-review), [Meetily](/power-local-llm/meetily-review), [nanobot](/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/power-local-llm/nvidia-g-assist-review), [Odysseus](/power-local-llm/odysseus-review), [Parlor](/power-local-llm/parlor-review) and [Second Me](/power-local-llm/second-me-review) document working with local LLMs.',
          '**Voice.** [Jarvis](/power-local-llm/jarvis-mac-review), [Khoj](/power-local-llm/khoj-ai-second-brain-review), [NVIDIA Project G-Assist](/power-local-llm/nvidia-g-assist-review), [Parlor](/power-local-llm/parlor-review) and [Voxa](/power-local-llm/voxa-review) document voice input or output.',
          '**Persistent memory.** [Aori](/power-local-llm/aori-ai-personal-agent-review), [nanobot](/power-local-llm/nanobot-review), [Odysseus](/power-local-llm/odysseus-review), [Second Me](/power-local-llm/second-me-review) and [Voxa](/power-local-llm/voxa-review) document persistent memory.',
          '**Tool use and actions.** [Agentic Inbox](/power-local-llm/agentic-inbox-review), [Aori](/power-local-llm/aori-ai-personal-agent-review), [Atomic Bot](/power-local-llm/atomic-bot-review), [Jarvis](/power-local-llm/jarvis-mac-review), [Khoj](/power-local-llm/khoj-ai-second-brain-review), [nanobot](/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/power-local-llm/nvidia-g-assist-review), [Odysseus](/power-local-llm/odysseus-review), [Parlor](/power-local-llm/parlor-review) and [Voxa](/power-local-llm/voxa-review) document tool use or actions.',
        ],
      },
      roleplayDifferences: {
        id: 'roleplay-differences',
        title: 'Roleplay and Companions: What Differs',
        items: [
          '**Lorebooks.** [Agnai](/power-local-llm/agnai-review), [Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay) and [RisuAI](/power-local-llm/risuai-review) document lorebook or world-info support.',
          '**Group chats.** [Agnai](/power-local-llm/agnai-review) and [RisuAI](/power-local-llm/risuai-review) document group chats.',
          '**Coverage.** Only four tools are in this group, and several roleplay features (such as character cards) are described in ways that differ between projects, so they are covered in each tool\'s review and not in the table.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What This Comparison Cannot Tell You',
        items: [
          'It compares documented capabilities, not quality. It says nothing about how good the answers are, how fast a model runs on your device, or how polished the interface is — PromptQuorum has not measured these for the listed tools.',
          'Dashes are gaps in the documentation we checked, not negative findings. Some tools may support a feature their README or store listing does not mention.',
          'Phone apps change often and are described mainly by their store listings, so check the current listing and the tool\'s review before you install.',
          'Tools change quickly. Each tool\'s review states the version it was checked against, and this guide is refreshed when a review is.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Why are desktop, mobile and self-hosted chat apps compared separately?',
            a: 'They are different products with different constraints: a phone app runs small models on the device, a desktop app can run larger ones, and a self-hosted web interface is a server you run for yourself or a team. Most attributes only make sense within one kind, so comparing them in one table would leave most cells empty or meaningless.',
          },
          {
            q: 'What does a dash in the comparison table mean?',
            a: 'It means the project\'s own documentation does not state that attribute. It does not mean the feature is missing; check the tool\'s review or its repository.',
          },
          {
            q: 'Why does a tool appear in more than one table?',
            a: 'Some tools are available on more than one kind of device — for example a desktop and a phone version — so they are listed under each kind they belong to, with the attributes that apply to that kind.',
          },
          {
            q: 'Do any of these tools have an affiliate link?',
            a: 'No. PromptQuorum has no affiliate relationship with any tool in this comparison at the time of writing, and no link here earns a commission.',
          },
          {
            q: 'How often is this comparison updated?',
            a: 'It is refreshed twice a year and whenever one of the listed tools\' reviews is updated, because the table is generated from the same data as those reviews.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Each tool\'s official README, website or store listing, listed in that tool\'s PromptQuorum review (linked from the comparison table).',
          '[PromptQuorum local AI app directory](/directory) — the record each row of the table is generated from.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          `[Local Software Directory](/directory) — browse all ${TOTAL_APP_COUNT} local AI apps and filter by category.`,
          '[Local Inference Engines, Runtimes & Gateways Compared](/power-local-llm/local-llm-run-serve-compared) — the tools that run the models behind these apps.',
          '[Local Knowledge & Retrieval Tools Compared](/power-local-llm/local-llm-knowledge-retrieval-compared) — document chat, RAG and notes integrations.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Chat Apps & Assistants Compared (2026): Desktop, Mobile, Self-Hosted, Assistants and Roleplay',
      description:
        `Compare ${CA_TOTAL} local chat apps and AI assistants side by side: desktop, mobile, self-hosted web, personal assistants and roleplay, from official documentation.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
      inLanguage: 'en',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Users choosing local chat apps and assistants' },
      about: [
        { '@type': 'Thing', name: 'Local LLM chat apps' },
        { '@type': 'Thing', name: 'AI assistants' },
        { '@type': 'Thing', name: 'Self-hosted AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Local Chat Apps & Assistants Compared (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
        },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Easiest Desktop Apps',
    title: 'Lokale Chat-Apps und Assistenten im Vergleich (2026): Desktop, Mobil, Self-Hosted, Assistenten und Rollenspiel',
    seoTitle: 'Lokale Chat-Apps und KI-Assistenten im Vergleich 2026',
    intro:
      `Chat-Apps, die Sprachmodelle auf der eigenen Hardware ausführen, sind keine einheitliche Produktkategorie: Eine Desktop-App, eine Smartphone-App, eine selbst gehostete Weboberfläche, ein persönlicher Assistent und ein Rollenspiel-Tool lösen unterschiedliche Probleme, und keine einzelne Funktionsliste vergleicht sie fair. Dieser Leitfaden vergleicht ${CA_TOTAL} kostenlose und kostenpflichtige Tools, jeweils innerhalb einer Art, anhand einer Vergleichstabelle, die aus denselben Daten erzeugt wird wie der jeweilige PromptQuorum-Test des Tools – Tabelle und Tests können sich also nicht widersprechen.`,
    metaDescription:
      'Lokale Chat-Apps und KI-Assistenten im Vergleich: Desktop-Apps (LM Studio, Jan, GPT4All), Smartphone-Apps, selbst gehostete Web-UIs (Open WebUI, LibreChat), Assistenten und Rollenspiel-Tools. Lizenzen, MCP, Ollama, Offline-Nutzung laut offizieller Doku.',
    twitterDescription:
      'Lokale Chat-Apps und Assistenten nach Art verglichen – Desktop, Mobil, selbst gehostetes Web, persönliche Assistenten, Rollenspiel – mit MCP, Ollama, Offline-Nutzung und mehr, laut offizieller Dokumentation.',
    audience:
      'Entwickler, Self-Hoster und datenschutzbewusste Nutzer, die eine lokale Chat-App oder einen Assistenten für Computer, Smartphone oder Server auswählen und die Unterschiede pro Art von Tool statt in einer gemischten Liste sehen möchten.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale Chat-Apps im Vergleich',
    targetKeywords: [
      'beste lokale ki chat app',
      'lm studio vs jan vs gpt4all',
      'open webui vs librechat',
      'offline ki chat app iphone android',
      'lokale llm chat clients vergleich',
      'selbst gehostete chatgpt alternative',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      `**Die ${CA_TOTAL} lokalen Chat-Apps und Assistenten im PromptQuorum-Verzeichnis lassen sich in fünf Arten einteilen, die getrennt verglichen werden sollten: Desktop-Chat-Apps (${CA_DESKTOP}), mobile Chat-Apps (${CA_MOBILE}), Web- und CLI-Chat-Clients (${CA_WEB_CLI}), persönliche Assistenten (${CA_PERSONAL_ASSISTANTS}) sowie Rollenspiel- und Companion-Apps (${CA_ROLEPLAY}).** Bei den Desktop-Apps dokumentieren 7 MCP-Unterstützung und 9 Ollama; bei den Smartphone-Apps dokumentieren 15 die vollständige Offline-Nutzung; bei den Web-Clients dokumentieren 8 den Docker-Betrieb. Nutzen Sie die Vergleichstabelle unten und lesen Sie den Test des jeweiligen Tools, bevor Sie es installieren.`,
    quickAnswerTop: {
      en: {
        question: 'Welche lokale Chat-App sollte ich verwenden?',
        answer:
          'Das hängt davon ab, wo Sie chatten möchten – vergleichen Sie daher jeweils innerhalb einer Art. Wählen Sie nach der Einschränkung, die Ihnen am wichtigsten ist – Gerät (Computer, Smartphone oder Server), Offline-Betrieb, MCP-Unterstützung, Anbindung an Ollama oder einen eigenen Endpunkt oder Chat mit Ihren Dateien – und nutzen Sie die Tabelle unten, die aus der offiziellen Dokumentation des jeweiligen Tools erzeugt wird.',
        bullets: [
          'Desktop-Chat-Apps: 17 Tools im Vergleich bei eigenem Modellbetrieb, Ollama, Endpunkten, MCP, Datei-Chat und Sprache.',
          'Mobile Chat-Apps: 26 Tools im Vergleich bei Offline-Nutzung, Modellimport, In-App-Downloads, Bildeingabe und Sprache.',
          'Web- und CLI-Clients: 13 Tools im Vergleich bei Docker, Mehrbenutzerbetrieb, Ollama, Endpunkten, Datei-Chat und MCP.',
          'Persönliche Assistenten (13) und Rollenspiel-Apps (4) werden anhand der Funktionen verglichen, die für sie jeweils zählen.',
          'Ein Strich (—) bedeutet, dass die Dokumentation des Projekts die Angabe nicht enthält – nicht, dass die Funktion fehlt.',
        ],
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'So haben wir verglichen', anchor: 'how-we-compared' },
      { label: 'Vergleichstabelle', anchor: 'comparison-table' },
      { label: 'Desktop-Chat-Apps: Die Unterschiede', anchor: 'desktop-differences' },
      { label: 'Mobile Chat-Apps: Die Unterschiede', anchor: 'mobile-differences' },
      { label: 'Web- und CLI-Clients: Die Unterschiede', anchor: 'web-differences' },
      { label: 'Persönliche Assistenten: Die Unterschiede', anchor: 'assistant-differences' },
      { label: 'Rollenspiel und Companions: Die Unterschiede', anchor: 'roleplay-differences' },
      { label: 'Was dieser Vergleich nicht leisten kann', anchor: 'limitations' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Lokale Chat-Apps sind fünf verschiedene Arten von Produkten – Desktop-Apps, Smartphone-Apps, selbst gehostete Weboberflächen, persönliche Assistenten und Rollenspiel-Tools –, weshalb die ${CA_TOTAL} Tools im PromptQuorum-Verzeichnis jeweils innerhalb ihrer Art verglichen werden, anhand einer Tabelle, die aus denselben Tool-Daten erzeugt wird wie der Test des jeweiligen Tools.`,
          },
          {
            type: 'plain-terms',
            text: 'Manche Apps installieren Sie auf einem Computer, manche auf einem Smartphone, manche hosten Sie selbst und öffnen sie im Browser, manche arbeiten als Assistent, der Aufgaben für Sie erledigt, und manche sind für Charakter-Rollenspiele gebaut. Eine Smartphone-App und eine serverseitige Weboberfläche anhand derselben Funktionen zu vergleichen, ergibt keinen Sinn – deshalb vergleicht dieser Leitfaden Gleiches mit Gleichem.',
          },
        ],
        items: [
          `${CA_TOTAL} Tools, fünf Arten: Desktop-Chat-Apps (${CA_DESKTOP}), mobile Chat-Apps (${CA_MOBILE}), Web- und CLI-Chat-Clients (${CA_WEB_CLI}), persönliche Assistenten (${CA_PERSONAL_ASSISTANTS}) sowie Rollenspiel- und Companion-Apps (${CA_ROLEPLAY}). Ein Tool, das auf mehreren Geräten verfügbar ist, etwa Enchanted, erscheint in jeder Art, zu der es gehört.`,
          'Die Tabelle wird aus dem Datensatz jedes Tools erzeugt und mit dessen offizieller README oder Website abgeglichen; ein Strich bedeutet „in der Dokumentation nicht angegeben“, niemals „nein“. Smartphone-Apps sind meist nur durch Store-Einträge dokumentiert, daher sind ihre Zellen am dünnsten besetzt.',
          'Jeder Tool-Name in der Tabelle verlinkt auf den eigenen PromptQuorum-Test, in dem Installationsschritte und Grenzen behandelt werden.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'So haben wir verglichen',
        content: [
          'Die Fakten jedes Tools – Preis, Lizenz, Plattformen, Hardwarebedarf und kategoriespezifische Merkmale – werden einmal im Verzeichnis-Datensatz dieses Tools gespeichert. Die Vergleichstabelle unten wird aus diesen Datensätzen erzeugt, und der Test des jeweiligen Tools stützt sich auf denselben Datensatz; beide können also keine unterschiedlichen Werte nennen.',
          'Kategoriespezifische Merkmale (zum Beispiel MCP-Unterstützung oder Offline-Nutzung) wurden der offiziellen README oder Website jedes Projekts entnommen und am dortigen Wortlaut geprüft. Wo die Dokumentation schweigt, zeigt die Tabelle einen Strich statt einer Vermutung; wo eine Aussage eingeschränkt ist (nur auf der Roadmap, eine kostenpflichtige Stufe oder eine Voraussetzung wie ein separater Server), fehlt das Merkmal in der Tabelle und wird stattdessen im Test des Tools behandelt.',
          'In der Tabelle stehen nur Tools mit eigenem PromptQuorum-Test. Bei einigen Apps (AI On Device, Chatty Mini und LocalAI ApexCreator) hat das Verzeichnis keine offizielle Seite zum Abgleich, daher bestehen ihre Zellen aus Strichen. Der Vergleich erstellt keine Rangliste der Tools, denn das richtige Tool hängt von Ihrer Einschränkung ab.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Vergleichstabelle',
        content: 'Wählen Sie unten eine Art von Tool und lesen Sie dann quer durch eine Zeile. Klicken Sie auf einen Tool-Namen, um den vollständigen PromptQuorum-Test zu öffnen.',
        component: 'CategoryCompareTable',
      },
      desktopDifferences: {
        id: 'desktop-differences',
        title: 'Desktop-Chat-Apps: Die Unterschiede',
        items: [
          '**Führt Modelle selbst aus.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [Ekorbia](/de/power-local-llm/ekorbia-review), [GPT4All](/de/power-local-llm/gpt4all-review), [Jan](/de/power-local-llm/jan-review), [LM Studio](/de/power-local-llm/lm-studio-review), [Off Grid AI](/de/power-local-llm/off-grid-ai-review), [On Device AI](/de/power-local-llm/on-device-ai-review), [Osaurus](/de/power-local-llm/osaurus-ai-review) und [Sidekick](/de/power-local-llm/sidekick-review) dokumentieren den eigenständigen Modellbetrieb ohne separaten Server.',
          '**Ollama.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [BoltAI](/de/power-local-llm/boltai-review), [Cherry Studio](/de/local-llms/cherry-studio-ai-desktop-client), [Ekorbia](/de/power-local-llm/ekorbia-review), [Enchanted](/de/power-local-llm/enchanted-review), [Hanoki](/de/power-local-llm/hanoki-review), [Off Grid AI](/de/power-local-llm/off-grid-ai-review), [On Device AI](/de/power-local-llm/on-device-ai-review) und [Osaurus](/de/power-local-llm/osaurus-ai-review) dokumentieren die Anbindung an Ollama.',
          '**OpenAI-kompatible Endpunkte.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [Ekorbia](/de/power-local-llm/ekorbia-review), [Hanoki](/de/power-local-llm/hanoki-review) und [Sidekick](/de/power-local-llm/sidekick-review) dokumentieren die Anbindung an OpenAI-kompatible Endpunkte.',
          '**MCP.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [BoltAI](/de/power-local-llm/boltai-review), [Cherry Studio](/de/local-llms/cherry-studio-ai-desktop-client), [Jan](/de/power-local-llm/jan-review), [Locally Uncensored](/de/power-local-llm/locally-uncensored-review), [Odysseus](/de/power-local-llm/odysseus-review) und [Osaurus](/de/power-local-llm/osaurus-ai-review) dokumentieren MCP-Unterstützung.',
          '**Chat mit Ihren Dateien.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [BoltAI](/de/power-local-llm/boltai-review), [Ekorbia](/de/power-local-llm/ekorbia-review), [GPT4All](/de/power-local-llm/gpt4all-review), [Locally Uncensored](/de/power-local-llm/locally-uncensored-review), [Off Grid AI](/de/power-local-llm/off-grid-ai-review), [On Device AI](/de/power-local-llm/on-device-ai-review), [Osaurus](/de/power-local-llm/osaurus-ai-review) und [Sidekick](/de/power-local-llm/sidekick-review) dokumentieren den Chat mit den eigenen Dateien.',
          '**Sprache.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [BoltAI](/de/power-local-llm/boltai-review), [Ekorbia](/de/power-local-llm/ekorbia-review), [Enchanted](/de/power-local-llm/enchanted-review), [LM Studio](/de/power-local-llm/lm-studio-review), [Off Grid AI](/de/power-local-llm/off-grid-ai-review), [On Device AI](/de/power-local-llm/on-device-ai-review) und [Osaurus](/de/power-local-llm/osaurus-ai-review) dokumentieren Spracheingabe oder -ausgabe.',
          '**Preis.** Von den 17 Desktop-Apps sind 11 kostenlos, 5 Freemium und 1 kostenpflichtig. Was die kostenpflichtige Stufe jeweils bietet, steht im jeweiligen Test.',
        ],
      },
      mobileDifferences: {
        id: 'mobile-differences',
        title: 'Mobile Chat-Apps: Die Unterschiede',
        items: [
          '**Vollständig offline.** [Arbiter](/de/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/de/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review), [Layla](/de/power-local-llm/layla-review), [Locally AI](/de/power-local-llm/locally-ai-review), [Loci AI](/de/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/de/power-local-llm/maid-review), [Noema](/de/power-local-llm/noema-review), [Off Grid AI](/de/power-local-llm/off-grid-ai-review), [On Device AI](/de/power-local-llm/on-device-ai-review), [Pocket AI](/de/power-local-llm/pocket-ai-review), [PocketPal AI](/de/power-local-llm/pocketpal-ai-review), [Private LLM](/de/power-local-llm/private-llm-review), [Solair AI](/de/power-local-llm/solair-ai-review) und [ToolNeuron](/de/power-local-llm/toolneuron-review) dokumentieren den vollständigen Offline-Betrieb auf dem Gerät.',
          '**Eigene Modelle importieren.** [Arbiter](/de/power-local-llm/arbiter-local-ai-chat-review), [Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review), [Maid](/de/power-local-llm/maid-review), [On Device AI](/de/power-local-llm/on-device-ai-review), [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) und [ToolNeuron](/de/power-local-llm/toolneuron-review) dokumentieren den Import eigener Modelldateien.',
          '**Modell-Downloads in der App.** [Arbiter](/de/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/de/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review), [Liquid Apollo](/de/power-local-llm/liquid-apollo-review), [Locally AI](/de/power-local-llm/locally-ai-review), [Loci AI](/de/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/de/power-local-llm/maid-review), [On Device AI](/de/power-local-llm/on-device-ai-review), [Pocket AI](/de/power-local-llm/pocket-ai-review), [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) und [Private LLM](/de/power-local-llm/private-llm-review) dokumentieren das Herunterladen von Modellen innerhalb der App.',
          '**Bildeingabe.** [Arbiter](/de/power-local-llm/arbiter-local-ai-chat-review), [Enchanted](/de/power-local-llm/enchanted-review), [Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/de/power-local-llm/locally-ai-review), [Off Grid AI](/de/power-local-llm/off-grid-ai-review), [On Device AI](/de/power-local-llm/on-device-ai-review), [RikkaHub](/de/power-local-llm/rikkahub-review), [Solair AI](/de/power-local-llm/solair-ai-review) und [ToolNeuron](/de/power-local-llm/toolneuron-review) dokumentieren die Bildeingabe.',
          '**Sprache.** [Enchanted](/de/power-local-llm/enchanted-review), [Enclave AI](/de/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/de/power-local-llm/locally-ai-review), [Off Grid AI](/de/power-local-llm/off-grid-ai-review), [On Device AI](/de/power-local-llm/on-device-ai-review), [PocketPal AI](/de/power-local-llm/pocketpal-ai-review), [Solair AI](/de/power-local-llm/solair-ai-review) und [ToolNeuron](/de/power-local-llm/toolneuron-review) dokumentieren Spracheingabe oder -ausgabe.',
          '**Preis.** Von den 26 Smartphone-Apps sind 16 kostenlos, 6 Freemium und 4 kostenpflichtig.',
          '**Dokumentation.** Die meisten Smartphone-Apps sind nur durch ihren Store-Eintrag oder ihre Website dokumentiert, die weit weniger angeben als eine README – daher enthält diese Tabelle mehr Striche als die anderen.',
        ],
      },
      webDifferences: {
        id: 'web-differences',
        title: 'Web- und CLI-Clients: Die Unterschiede',
        items: [
          '**Docker und Self-Hosting.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [Big-AGI](/de/local-llms/big-agi-review), [KoboldCpp](/de/power-local-llm/koboldcpp-review), [LibreChat](/de/power-local-llm/librechat-review), [LobeChat](/de/local-llms/lobechat-review), [NextChat](/de/local-llms/nextchat-review), [Odysseus](/de/power-local-llm/odysseus-review) und [Open WebUI](/de/local-llms/open-webui-review) dokumentieren den Betrieb per Docker oder Self-Hosting.',
          '**Mehrere Benutzer.** [LibreChat](/de/power-local-llm/librechat-review) und [Open WebUI](/de/local-llms/open-webui-review) dokumentieren Mehrbenutzerunterstützung.',
          '**Ollama.** [aichat](/de/power-local-llm/aichat-review), [AnythingLLM](/de/power-local-llm/anythingllm-review), [Big-AGI](/de/local-llms/big-agi-review), [Chatbox](/de/local-llms/chatbox-review), [LibreChat](/de/power-local-llm/librechat-review), [Open WebUI](/de/local-llms/open-webui-review) und [Page Assist](/de/local-llms/page-assist-review) dokumentieren die Anbindung an Ollama.',
          '**OpenAI-kompatible Endpunkte.** [aichat](/de/power-local-llm/aichat-review), [AnythingLLM](/de/power-local-llm/anythingllm-review), [Big-AGI](/de/local-llms/big-agi-review), [LibreChat](/de/power-local-llm/librechat-review), [NextChat](/de/local-llms/nextchat-review), [Open WebUI](/de/local-llms/open-webui-review) und [Page Assist](/de/local-llms/page-assist-review) dokumentieren die Anbindung an OpenAI-kompatible Endpunkte.',
          '**Chat mit Ihren Dateien.** [aichat](/de/power-local-llm/aichat-review), [AnythingLLM](/de/power-local-llm/anythingllm-review), [Chatbox](/de/local-llms/chatbox-review), [KoboldCpp](/de/power-local-llm/koboldcpp-review), [LibreChat](/de/power-local-llm/librechat-review) und [Open WebUI](/de/local-llms/open-webui-review) dokumentieren den Chat mit den eigenen Dateien.',
          '**MCP.** [aichat](/de/power-local-llm/aichat-review), [AnythingLLM](/de/power-local-llm/anythingllm-review), [Chatbox](/de/local-llms/chatbox-review), [KoboldCpp](/de/power-local-llm/koboldcpp-review), [LibreChat](/de/power-local-llm/librechat-review), [LobeChat](/de/local-llms/lobechat-review), [NextChat](/de/local-llms/nextchat-review), [Odysseus](/de/power-local-llm/odysseus-review) und [Open WebUI](/de/local-llms/open-webui-review) dokumentieren MCP-Unterstützung.',
        ],
      },
      assistantDifferences: {
        id: 'assistant-differences',
        title: 'Persönliche Assistenten: Die Unterschiede',
        items: [
          '**Lokale LLMs.** [Jarvis](/de/power-local-llm/jarvis-mac-review), [Khoj](/de/power-local-llm/khoj-ai-second-brain-review), [Meetily](/de/power-local-llm/meetily-review), [nanobot](/de/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/de/power-local-llm/nvidia-g-assist-review), [Odysseus](/de/power-local-llm/odysseus-review), [Parlor](/de/power-local-llm/parlor-review) und [Second Me](/de/power-local-llm/second-me-review) dokumentieren die Arbeit mit lokalen LLMs.',
          '**Sprache.** [Jarvis](/de/power-local-llm/jarvis-mac-review), [Khoj](/de/power-local-llm/khoj-ai-second-brain-review), [NVIDIA Project G-Assist](/de/power-local-llm/nvidia-g-assist-review), [Parlor](/de/power-local-llm/parlor-review) und [Voxa](/de/power-local-llm/voxa-review) dokumentieren Spracheingabe oder -ausgabe.',
          '**Dauerhaftes Gedächtnis.** [Aori](/de/power-local-llm/aori-ai-personal-agent-review), [nanobot](/de/power-local-llm/nanobot-review), [Odysseus](/de/power-local-llm/odysseus-review), [Second Me](/de/power-local-llm/second-me-review) und [Voxa](/de/power-local-llm/voxa-review) dokumentieren ein dauerhaftes Gedächtnis.',
          '**Werkzeugnutzung und Aktionen.** [Agentic Inbox](/de/power-local-llm/agentic-inbox-review), [Aori](/de/power-local-llm/aori-ai-personal-agent-review), [Atomic Bot](/de/power-local-llm/atomic-bot-review), [Jarvis](/de/power-local-llm/jarvis-mac-review), [Khoj](/de/power-local-llm/khoj-ai-second-brain-review), [nanobot](/de/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/de/power-local-llm/nvidia-g-assist-review), [Odysseus](/de/power-local-llm/odysseus-review), [Parlor](/de/power-local-llm/parlor-review) und [Voxa](/de/power-local-llm/voxa-review) dokumentieren Werkzeugnutzung oder Aktionen.',
        ],
      },
      roleplayDifferences: {
        id: 'roleplay-differences',
        title: 'Rollenspiel und Companions: Die Unterschiede',
        items: [
          '**Lorebooks.** [Agnai](/de/power-local-llm/agnai-review), [Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay) und [RisuAI](/de/power-local-llm/risuai-review) dokumentieren Unterstützung für Lorebooks bzw. World Info.',
          '**Gruppenchats.** [Agnai](/de/power-local-llm/agnai-review) und [RisuAI](/de/power-local-llm/risuai-review) dokumentieren Gruppenchats.',
          '**Abdeckung.** In dieser Gruppe sind nur vier Tools, und mehrere Rollenspiel-Funktionen (etwa Charakterkarten) werden von Projekt zu Projekt unterschiedlich beschrieben; sie werden daher im Test des jeweiligen Tools behandelt und nicht in der Tabelle.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Was dieser Vergleich nicht leisten kann',
        items: [
          'Er vergleicht dokumentierte Fähigkeiten, nicht Qualität. Er sagt nichts darüber aus, wie gut die Antworten sind, wie schnell ein Modell auf Ihrem Gerät läuft oder wie ausgereift die Oberfläche ist – PromptQuorum hat dies für die aufgeführten Tools nicht gemessen.',
          'Striche sind Lücken in der von uns geprüften Dokumentation, keine negativen Befunde. Manche Tools unterstützen möglicherweise eine Funktion, die ihre README oder ihr Store-Eintrag nicht erwähnt.',
          'Smartphone-Apps ändern sich häufig und werden hauptsächlich durch ihre Store-Einträge beschrieben; prüfen Sie daher vor der Installation den aktuellen Eintrag und den Test des Tools.',
          'Tools ändern sich schnell. Der Test jedes Tools nennt die Version, gegen die er geprüft wurde, und dieser Leitfaden wird aktualisiert, wenn ein Test aktualisiert wird.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Warum werden Desktop-, Mobil- und selbst gehostete Chat-Apps getrennt verglichen?',
            a: 'Es sind unterschiedliche Produkte mit unterschiedlichen Einschränkungen: Eine Smartphone-App führt kleine Modelle auf dem Gerät aus, eine Desktop-App kann größere ausführen, und eine selbst gehostete Weboberfläche ist ein Server, den Sie für sich oder ein Team betreiben. Die meisten Merkmale ergeben nur innerhalb einer Art Sinn; in einer gemeinsamen Tabelle blieben die meisten Zellen leer oder bedeutungslos.',
          },
          {
            q: 'Was bedeutet ein Strich in der Vergleichstabelle?',
            a: 'Er bedeutet, dass die eigene Dokumentation des Projekts dieses Merkmal nicht angibt. Er bedeutet nicht, dass die Funktion fehlt; prüfen Sie den Test des Tools oder dessen Repository.',
          },
          {
            q: 'Warum erscheint ein Tool in mehr als einer Tabelle?',
            a: 'Manche Tools sind auf mehr als einer Art von Gerät verfügbar – zum Beispiel als Desktop- und als Smartphone-Version – und werden daher unter jeder Art aufgeführt, zu der sie gehören, jeweils mit den Merkmalen, die für diese Art gelten.',
          },
          {
            q: 'Hat eines dieser Tools einen Affiliate-Link?',
            a: 'Nein. PromptQuorum hat zum Zeitpunkt der Erstellung keine Affiliate-Beziehung zu einem Tool dieses Vergleichs, und kein Link hier bringt eine Provision.',
          },
          {
            q: 'Wie oft wird dieser Vergleich aktualisiert?',
            a: 'Er wird zweimal im Jahr aktualisiert sowie immer dann, wenn der Test eines der aufgeführten Tools aktualisiert wird, weil die Tabelle aus denselben Daten wie diese Tests erzeugt wird.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Die offizielle README, Website oder der Store-Eintrag jedes Tools, aufgeführt im PromptQuorum-Test des jeweiligen Tools (verlinkt aus der Vergleichstabelle).',
          '[PromptQuorum-Verzeichnis für lokale KI-Apps](/de/directory) – der Datensatz, aus dem jede Zeile der Tabelle erzeugt wird.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          `[Verzeichnis für lokale Software](/de/directory) – alle ${TOTAL_APP_COUNT} lokalen KI-Apps durchsuchen und nach Kategorie filtern.`,
          '[Lokale Inferenz-Engines, Runtimes und Gateways im Vergleich](/de/power-local-llm/local-llm-run-serve-compared) – die Tools, die die Modelle hinter diesen Apps ausführen.',
          '[Lokale Wissens- und Retrieval-Tools im Vergleich](/de/power-local-llm/local-llm-knowledge-retrieval-compared) – Dokumenten-Chat, RAG und Notiz-Integrationen.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokale Chat-Apps und Assistenten im Vergleich (2026): Desktop, Mobil, Self-Hosted, Assistenten und Rollenspiel',
      description:
        'Lokale Chat-Apps und KI-Assistenten im direkten Vergleich: Desktop, Mobil, selbst gehostetes Web, persönliche Assistenten und Rollenspiel, laut offizieller Dokumentation.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
      inLanguage: 'de',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Nutzer, die lokale Chat-Apps und Assistenten auswählen' },
      about: [
        { '@type': 'Thing', name: 'Lokale LLM-Chat-Apps' },
        { '@type': 'Thing', name: 'KI-Assistenten' },
        { '@type': 'Thing', name: 'Selbst gehostete KI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Lokale Chat-Apps und Assistenten im Vergleich (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
        },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Easiest Desktop Apps',
    title: 'Applications de chat IA locales et assistants : comparatif (2026) — bureau, mobile, auto-hébergé, assistants et jeu de rôle',
    seoTitle: 'Chat IA local et assistants : comparatif 2026',
    intro:
      `Les applications de chat qui exécutent des modèles de langage sur votre propre matériel ne forment pas une seule catégorie de produits : une application de bureau, une application pour téléphone, une interface web auto-hébergée, un assistant personnel et un outil de jeu de rôle répondent à des besoins différents, et aucune liste de fonctionnalités unique ne permet de les comparer équitablement. Ce guide compare ${CA_TOTAL} outils gratuits et payants, un type à la fois, à l'aide d'un tableau comparatif généré à partir des mêmes données que l'avis PromptQuorum de chaque outil, de sorte que le tableau et les avis ne puissent pas se contredire.`,
    metaDescription:
      `Comparez ${CA_TOTAL} applications de chat IA locales et assistants : applications de bureau (LM Studio, Jan, GPT4All), mobiles, interfaces web auto-hébergées (Open WebUI, LibreChat), assistants et jeu de rôle. Licences, MCP, Ollama, hors ligne, d'après les docs officielles.`,
    twitterDescription:
      'Applications de chat IA locales et assistants comparés par type — bureau, mobile, web auto-hébergé, assistants personnels, jeu de rôle — avec MCP, Ollama, usage hors ligne et plus, d\'après la documentation officielle.',
    audience:
      'Développeurs, auto-hébergeurs et utilisateurs soucieux de leur vie privée qui choisissent une application de chat ou un assistant local pour leur ordinateur, leur téléphone ou leur serveur, et qui veulent les différences présentées par type d\'outil, et non dans une seule liste mélangée.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'comparatif applications de chat IA locales',
    targetKeywords: [
      'meilleure application de chat ia locale',
      'lm studio vs jan vs gpt4all',
      'open webui vs librechat',
      'application de chat ia hors ligne iphone android',
      'comparatif clients de chat llm locaux',
      'alternative à chatgpt auto-hébergée',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      `**Les ${CA_TOTAL} applications de chat locales et assistants du répertoire PromptQuorum se répartissent en cinq types qu'il faut comparer séparément : applications de chat de bureau (${CA_DESKTOP}), applications de chat mobiles (${CA_MOBILE}), clients de chat web et en ligne de commande (${CA_WEB_CLI}), assistants personnels (${CA_PERSONAL_ASSISTANTS}) et applications de jeu de rôle et de compagnie (${CA_ROLEPLAY}).** Parmi les applications de bureau, 7 documentent la prise en charge de MCP et 9 celle d'Ollama ; parmi les applications pour téléphone, 15 documentent un fonctionnement entièrement hors ligne ; parmi les clients web, 8 documentent un déploiement Docker. Utilisez le tableau comparatif ci-dessous et lisez l'avis de chaque outil avant de l'installer.`,
    quickAnswerTop: {
      en: {
        question: 'Quelle application de chat locale dois-je utiliser ?',
        answer:
          'Cela dépend de l\'endroit où vous voulez discuter : comparez donc un seul type à la fois. Choisissez selon la contrainte qui compte le plus — l\'appareil (ordinateur, téléphone ou serveur), le fonctionnement hors ligne, la prise en charge de MCP, la connexion à Ollama ou à votre propre point d\'accès, ou le chat avec vos fichiers — et appuyez-vous sur le tableau ci-dessous, généré à partir de la documentation officielle de chaque outil.',
        bullets: [
          'Applications de chat de bureau : 17 outils comparés sur l\'exécution autonome des modèles, Ollama, les points d\'accès, MCP, le chat avec des fichiers et la voix.',
          'Applications de chat mobiles : 26 outils comparés sur l\'usage hors ligne, l\'import de modèles, les téléchargements dans l\'application, la saisie d\'images et la voix.',
          'Clients web et en ligne de commande : 13 outils comparés sur Docker, le multi-utilisateur, Ollama, les points d\'accès, le chat avec des fichiers et MCP.',
          'Les assistants personnels (13) et les applications de jeu de rôle (4) sont comparés sur les fonctionnalités qui comptent pour chacun.',
          'Un tiret (—) signifie que la documentation du projet ne le mentionne pas, et non que la fonctionnalité est absente.',
        ],
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Notre méthode de comparaison', anchor: 'how-we-compared' },
      { label: 'Tableau comparatif', anchor: 'comparison-table' },
      { label: 'Applications de chat de bureau : ce qui les distingue', anchor: 'desktop-differences' },
      { label: 'Applications de chat mobiles : ce qui les distingue', anchor: 'mobile-differences' },
      { label: 'Clients web et en ligne de commande : ce qui les distingue', anchor: 'web-differences' },
      { label: 'Assistants personnels : ce qui les distingue', anchor: 'assistant-differences' },
      { label: 'Jeu de rôle et compagnons : ce qui les distingue', anchor: 'roleplay-differences' },
      { label: 'Ce que cette comparaison ne peut pas vous dire', anchor: 'limitations' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Les applications de chat locales sont cinq types de produits différents — applications de bureau, applications pour téléphone, interfaces web auto-hébergées, assistants personnels et outils de jeu de rôle — si bien que les ${CA_TOTAL} outils du répertoire PromptQuorum sont comparés au sein de chaque type, à l'aide d'un tableau généré à partir des mêmes données que l'avis de chaque outil.`,
          },
          {
            type: 'plain-terms',
            text: 'Certaines applications s\'installent sur un ordinateur, d\'autres sur un téléphone, d\'autres encore s\'hébergent soi-même et s\'ouvrent dans un navigateur ; certaines jouent le rôle d\'assistant qui fait des choses pour vous, et d\'autres sont conçues pour le jeu de rôle avec des personnages. Comparer une application pour téléphone et une interface web côté serveur sur les mêmes fonctionnalités n\'a pas de sens : ce guide compare donc ce qui est comparable.',
          },
        ],
        items: [
          `${CA_TOTAL} outils, cinq types : applications de chat de bureau (${CA_DESKTOP}), applications de chat mobiles (${CA_MOBILE}), clients de chat web et en ligne de commande (${CA_WEB_CLI}), assistants personnels (${CA_PERSONAL_ASSISTANTS}) et applications de jeu de rôle et de compagnie (${CA_ROLEPLAY}). Un outil disponible sur plusieurs appareils, comme Enchanted, apparaît dans chaque type auquel il appartient.`,
          'Le tableau est généré à partir de la fiche de chaque outil et vérifié d\'après son README ou son site officiel ; un tiret signifie « non mentionné dans la documentation », jamais « non ». Les applications pour téléphone sont surtout documentées par leurs pages de boutique, leurs cellules sont donc les plus clairsemées.',
          'Chaque nom d\'outil du tableau renvoie vers son propre avis PromptQuorum, où sont traités l\'installation et les limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Notre méthode de comparaison',
        content: [
          'Les informations de chaque outil — prix, licence, plateformes, besoins matériels et attributs propres à la catégorie — sont enregistrées une seule fois, dans la fiche du répertoire de cet outil. Le tableau comparatif ci-dessous est généré à partir de ces fiches, et l\'avis de l\'outil s\'appuie sur la même fiche : les deux ne peuvent donc pas indiquer des valeurs différentes.',
          'Les attributs propres à la catégorie (par exemple la prise en charge de MCP ou l\'usage hors ligne) ont été relevés dans le README ou le site officiel de chaque projet et vérifiés d\'après la formulation exacte qui s\'y trouve. Lorsque la documentation reste muette, le tableau affiche un tiret plutôt que de deviner ; lorsqu\'une affirmation est nuancée (feuille de route uniquement, offre payante ou condition comme un serveur séparé), l\'attribut est exclu du tableau et traité dans l\'avis de l\'outil.',
          'Seuls les outils disposant de leur propre avis PromptQuorum figurent dans le tableau. Pour quelques applications (AI On Device, Chatty Mini et LocalAI ApexCreator), le répertoire ne dispose d\'aucune page officielle à vérifier : leurs cellules sont donc des tirets. La comparaison ne classe pas les outils, car le bon choix dépend de votre contrainte.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif',
        content: 'Choisissez ci-dessous un type d\'outil, puis lisez la ligne de gauche à droite. Cliquez sur le nom d\'un outil pour ouvrir son avis PromptQuorum complet.',
        component: 'CategoryCompareTable',
      },
      desktopDifferences: {
        id: 'desktop-differences',
        title: 'Applications de chat de bureau : ce qui les distingue',
        items: [
          '**Exécute les modèles lui-même.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [Ekorbia](/fr/power-local-llm/ekorbia-review), [GPT4All](/fr/power-local-llm/gpt4all-review), [Jan](/fr/power-local-llm/jan-review), [LM Studio](/fr/power-local-llm/lm-studio-review), [Off Grid AI](/fr/power-local-llm/off-grid-ai-review), [On Device AI](/fr/power-local-llm/on-device-ai-review), [Osaurus](/fr/power-local-llm/osaurus-ai-review) et [Sidekick](/fr/power-local-llm/sidekick-review) documentent l\'exécution autonome de modèles, sans serveur séparé.',
          '**Ollama.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [BoltAI](/fr/power-local-llm/boltai-review), [Cherry Studio](/fr/local-llms/cherry-studio-ai-desktop-client), [Ekorbia](/fr/power-local-llm/ekorbia-review), [Enchanted](/fr/power-local-llm/enchanted-review), [Hanoki](/fr/power-local-llm/hanoki-review), [Off Grid AI](/fr/power-local-llm/off-grid-ai-review), [On Device AI](/fr/power-local-llm/on-device-ai-review) et [Osaurus](/fr/power-local-llm/osaurus-ai-review) documentent la connexion à Ollama.',
          '**Points d\'accès compatibles OpenAI.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [Ekorbia](/fr/power-local-llm/ekorbia-review), [Hanoki](/fr/power-local-llm/hanoki-review) et [Sidekick](/fr/power-local-llm/sidekick-review) documentent la connexion à des points d\'accès compatibles OpenAI.',
          '**MCP.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [BoltAI](/fr/power-local-llm/boltai-review), [Cherry Studio](/fr/local-llms/cherry-studio-ai-desktop-client), [Jan](/fr/power-local-llm/jan-review), [Locally Uncensored](/fr/power-local-llm/locally-uncensored-review), [Odysseus](/fr/power-local-llm/odysseus-review) et [Osaurus](/fr/power-local-llm/osaurus-ai-review) documentent la prise en charge de MCP.',
          '**Chat avec vos fichiers.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [BoltAI](/fr/power-local-llm/boltai-review), [Ekorbia](/fr/power-local-llm/ekorbia-review), [GPT4All](/fr/power-local-llm/gpt4all-review), [Locally Uncensored](/fr/power-local-llm/locally-uncensored-review), [Off Grid AI](/fr/power-local-llm/off-grid-ai-review), [On Device AI](/fr/power-local-llm/on-device-ai-review), [Osaurus](/fr/power-local-llm/osaurus-ai-review) et [Sidekick](/fr/power-local-llm/sidekick-review) documentent le chat avec vos propres fichiers.',
          '**Voix.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [BoltAI](/fr/power-local-llm/boltai-review), [Ekorbia](/fr/power-local-llm/ekorbia-review), [Enchanted](/fr/power-local-llm/enchanted-review), [LM Studio](/fr/power-local-llm/lm-studio-review), [Off Grid AI](/fr/power-local-llm/off-grid-ai-review), [On Device AI](/fr/power-local-llm/on-device-ai-review) et [Osaurus](/fr/power-local-llm/osaurus-ai-review) documentent l\'entrée ou la sortie vocale.',
          '**Prix.** Sur les 17 applications de bureau, 11 sont gratuites, 5 freemium et 1 payante. Consultez chaque avis pour savoir ce qu\'ajoute l\'offre payante.',
        ],
      },
      mobileDifferences: {
        id: 'mobile-differences',
        title: 'Applications de chat mobiles : ce qui les distingue',
        items: [
          '**Entièrement hors ligne.** [Arbiter](/fr/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/fr/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review), [Layla](/fr/power-local-llm/layla-review), [Locally AI](/fr/power-local-llm/locally-ai-review), [Loci AI](/fr/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/fr/power-local-llm/maid-review), [Noema](/fr/power-local-llm/noema-review), [Off Grid AI](/fr/power-local-llm/off-grid-ai-review), [On Device AI](/fr/power-local-llm/on-device-ai-review), [Pocket AI](/fr/power-local-llm/pocket-ai-review), [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), [Private LLM](/fr/power-local-llm/private-llm-review), [Solair AI](/fr/power-local-llm/solair-ai-review) et [ToolNeuron](/fr/power-local-llm/toolneuron-review) documentent un fonctionnement entièrement hors ligne sur l\'appareil.',
          '**Import de vos propres modèles.** [Arbiter](/fr/power-local-llm/arbiter-local-ai-chat-review), [Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review), [Maid](/fr/power-local-llm/maid-review), [On Device AI](/fr/power-local-llm/on-device-ai-review), [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) et [ToolNeuron](/fr/power-local-llm/toolneuron-review) documentent l\'import de vos propres fichiers de modèle.',
          '**Téléchargement de modèles dans l\'application.** [Arbiter](/fr/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/fr/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review), [Liquid Apollo](/fr/power-local-llm/liquid-apollo-review), [Locally AI](/fr/power-local-llm/locally-ai-review), [Loci AI](/fr/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/fr/power-local-llm/maid-review), [On Device AI](/fr/power-local-llm/on-device-ai-review), [Pocket AI](/fr/power-local-llm/pocket-ai-review), [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) et [Private LLM](/fr/power-local-llm/private-llm-review) documentent le téléchargement de modèles directement dans l\'application.',
          '**Saisie d\'images.** [Arbiter](/fr/power-local-llm/arbiter-local-ai-chat-review), [Enchanted](/fr/power-local-llm/enchanted-review), [Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/fr/power-local-llm/locally-ai-review), [Off Grid AI](/fr/power-local-llm/off-grid-ai-review), [On Device AI](/fr/power-local-llm/on-device-ai-review), [RikkaHub](/fr/power-local-llm/rikkahub-review), [Solair AI](/fr/power-local-llm/solair-ai-review) et [ToolNeuron](/fr/power-local-llm/toolneuron-review) documentent la saisie d\'images.',
          '**Voix.** [Enchanted](/fr/power-local-llm/enchanted-review), [Enclave AI](/fr/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/fr/power-local-llm/locally-ai-review), [Off Grid AI](/fr/power-local-llm/off-grid-ai-review), [On Device AI](/fr/power-local-llm/on-device-ai-review), [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), [Solair AI](/fr/power-local-llm/solair-ai-review) et [ToolNeuron](/fr/power-local-llm/toolneuron-review) documentent l\'entrée ou la sortie vocale.',
          '**Prix.** Sur les 26 applications pour téléphone, 16 sont gratuites, 6 freemium et 4 payantes.',
          '**Documentation.** La plupart des applications pour téléphone sont documentées uniquement par leur page de boutique ou leur site, qui en dit bien moins qu\'un README : ce tableau contient donc plus de tirets que les autres.',
        ],
      },
      webDifferences: {
        id: 'web-differences',
        title: 'Clients web et en ligne de commande : ce qui les distingue',
        items: [
          '**Docker et auto-hébergement.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [Big-AGI](/fr/local-llms/big-agi-review), [KoboldCpp](/fr/power-local-llm/koboldcpp-review), [LibreChat](/fr/power-local-llm/librechat-review), [LobeChat](/fr/local-llms/lobechat-review), [NextChat](/fr/local-llms/nextchat-review), [Odysseus](/fr/power-local-llm/odysseus-review) et [Open WebUI](/fr/local-llms/open-webui-review) documentent un déploiement Docker ou auto-hébergé.',
          '**Plusieurs utilisateurs.** [LibreChat](/fr/power-local-llm/librechat-review) et [Open WebUI](/fr/local-llms/open-webui-review) documentent la prise en charge multi-utilisateur.',
          '**Ollama.** [aichat](/fr/power-local-llm/aichat-review), [AnythingLLM](/fr/power-local-llm/anythingllm-review), [Big-AGI](/fr/local-llms/big-agi-review), [Chatbox](/fr/local-llms/chatbox-review), [LibreChat](/fr/power-local-llm/librechat-review), [Open WebUI](/fr/local-llms/open-webui-review) et [Page Assist](/fr/local-llms/page-assist-review) documentent la connexion à Ollama.',
          '**Points d\'accès compatibles OpenAI.** [aichat](/fr/power-local-llm/aichat-review), [AnythingLLM](/fr/power-local-llm/anythingllm-review), [Big-AGI](/fr/local-llms/big-agi-review), [LibreChat](/fr/power-local-llm/librechat-review), [NextChat](/fr/local-llms/nextchat-review), [Open WebUI](/fr/local-llms/open-webui-review) et [Page Assist](/fr/local-llms/page-assist-review) documentent la connexion à des points d\'accès compatibles OpenAI.',
          '**Chat avec vos fichiers.** [aichat](/fr/power-local-llm/aichat-review), [AnythingLLM](/fr/power-local-llm/anythingllm-review), [Chatbox](/fr/local-llms/chatbox-review), [KoboldCpp](/fr/power-local-llm/koboldcpp-review), [LibreChat](/fr/power-local-llm/librechat-review) et [Open WebUI](/fr/local-llms/open-webui-review) documentent le chat avec vos propres fichiers.',
          '**MCP.** [aichat](/fr/power-local-llm/aichat-review), [AnythingLLM](/fr/power-local-llm/anythingllm-review), [Chatbox](/fr/local-llms/chatbox-review), [KoboldCpp](/fr/power-local-llm/koboldcpp-review), [LibreChat](/fr/power-local-llm/librechat-review), [LobeChat](/fr/local-llms/lobechat-review), [NextChat](/fr/local-llms/nextchat-review), [Odysseus](/fr/power-local-llm/odysseus-review) et [Open WebUI](/fr/local-llms/open-webui-review) documentent la prise en charge de MCP.',
        ],
      },
      assistantDifferences: {
        id: 'assistant-differences',
        title: 'Assistants personnels : ce qui les distingue',
        items: [
          '**LLM locaux.** [Jarvis](/fr/power-local-llm/jarvis-mac-review), [Khoj](/fr/power-local-llm/khoj-ai-second-brain-review), [Meetily](/fr/power-local-llm/meetily-review), [nanobot](/fr/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/fr/power-local-llm/nvidia-g-assist-review), [Odysseus](/fr/power-local-llm/odysseus-review), [Parlor](/fr/power-local-llm/parlor-review) et [Second Me](/fr/power-local-llm/second-me-review) documentent le fonctionnement avec des LLM locaux.',
          '**Voix.** [Jarvis](/fr/power-local-llm/jarvis-mac-review), [Khoj](/fr/power-local-llm/khoj-ai-second-brain-review), [NVIDIA Project G-Assist](/fr/power-local-llm/nvidia-g-assist-review), [Parlor](/fr/power-local-llm/parlor-review) et [Voxa](/fr/power-local-llm/voxa-review) documentent l\'entrée ou la sortie vocale.',
          '**Mémoire persistante.** [Aori](/fr/power-local-llm/aori-ai-personal-agent-review), [nanobot](/fr/power-local-llm/nanobot-review), [Odysseus](/fr/power-local-llm/odysseus-review), [Second Me](/fr/power-local-llm/second-me-review) et [Voxa](/fr/power-local-llm/voxa-review) documentent une mémoire persistante.',
          '**Utilisation d\'outils et actions.** [Agentic Inbox](/fr/power-local-llm/agentic-inbox-review), [Aori](/fr/power-local-llm/aori-ai-personal-agent-review), [Atomic Bot](/fr/power-local-llm/atomic-bot-review), [Jarvis](/fr/power-local-llm/jarvis-mac-review), [Khoj](/fr/power-local-llm/khoj-ai-second-brain-review), [nanobot](/fr/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/fr/power-local-llm/nvidia-g-assist-review), [Odysseus](/fr/power-local-llm/odysseus-review), [Parlor](/fr/power-local-llm/parlor-review) et [Voxa](/fr/power-local-llm/voxa-review) documentent l\'utilisation d\'outils ou d\'actions.',
        ],
      },
      roleplayDifferences: {
        id: 'roleplay-differences',
        title: 'Jeu de rôle et compagnons : ce qui les distingue',
        items: [
          '**Lorebooks.** [Agnai](/fr/power-local-llm/agnai-review), [Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay) et [RisuAI](/fr/power-local-llm/risuai-review) documentent la prise en charge des lorebooks ou du world info.',
          '**Discussions de groupe.** [Agnai](/fr/power-local-llm/agnai-review) et [RisuAI](/fr/power-local-llm/risuai-review) documentent les discussions de groupe.',
          '**Couverture.** Seuls quatre outils figurent dans ce groupe, et plusieurs fonctionnalités de jeu de rôle (comme les cartes de personnage) sont décrites différemment d\'un projet à l\'autre ; elles sont donc traitées dans l\'avis de chaque outil et non dans le tableau.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ce que cette comparaison ne peut pas vous dire',
        items: [
          'Elle compare des capacités documentées, pas la qualité. Elle ne dit rien de la qualité des réponses, de la vitesse d\'un modèle sur votre appareil ni du soin apporté à l\'interface — PromptQuorum n\'a pas mesuré ces points pour les outils listés.',
          'Les tirets sont des lacunes dans la documentation que nous avons consultée, pas des constats négatifs. Certains outils peuvent prendre en charge une fonctionnalité que leur README ou leur page de boutique ne mentionne pas.',
          'Les applications pour téléphone changent souvent et sont décrites surtout par leurs pages de boutique : consultez la page actuelle et l\'avis de l\'outil avant de l\'installer.',
          'Les outils évoluent rapidement. L\'avis de chaque outil indique la version d\'après laquelle il a été vérifié, et ce guide est actualisé lorsqu\'un avis l\'est.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Pourquoi les applications de chat de bureau, mobiles et auto-hébergées sont-elles comparées séparément ?',
            a: 'Ce sont des produits différents, avec des contraintes différentes : une application pour téléphone exécute de petits modèles sur l\'appareil, une application de bureau peut en exécuter de plus grands, et une interface web auto-hébergée est un serveur que l\'on exploite pour soi ou pour une équipe. La plupart des attributs n\'ont de sens qu\'au sein d\'un même type ; les réunir dans un seul tableau laisserait la plupart des cellules vides ou dénuées de sens.',
          },
          {
            q: 'Que signifie un tiret dans le tableau comparatif ?',
            a: 'Cela signifie que la documentation du projet ne mentionne pas cet attribut. Cela ne veut pas dire que la fonctionnalité est absente ; consultez l\'avis de l\'outil ou son dépôt.',
          },
          {
            q: 'Pourquoi un outil apparaît-il dans plusieurs tableaux ?',
            a: 'Certains outils sont disponibles sur plusieurs types d\'appareils — par exemple une version de bureau et une version pour téléphone — et sont donc listés dans chaque type auquel ils appartiennent, avec les attributs qui s\'appliquent à ce type.',
          },
          {
            q: 'Un de ces outils a-t-il un lien d\'affiliation ?',
            a: 'Non. PromptQuorum n\'a aucune relation d\'affiliation avec les outils de ce comparatif au moment de la rédaction, et aucun lien ici ne rapporte de commission.',
          },
          {
            q: 'À quelle fréquence ce comparatif est-il mis à jour ?',
            a: 'Il est actualisé deux fois par an, ainsi qu\'à chaque mise à jour de l\'avis d\'un des outils listés, car le tableau est généré à partir des mêmes données que ces avis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Le README, le site ou la page de boutique officiels de chaque outil, indiqués dans l\'avis PromptQuorum de cet outil (accessible depuis le tableau comparatif).',
          '[Répertoire PromptQuorum des applications d\'IA locales](/fr/directory) — la fiche à partir de laquelle chaque ligne du tableau est générée.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          `[Répertoire de logiciels locaux](/fr/directory) — parcourez ${TOTAL_APP_COUNT} applications d'IA locales et filtrez par catégorie.`,
          '[Moteurs d\'inférence, runtimes et passerelles locaux : comparatif](/fr/power-local-llm/local-llm-run-serve-compared) — les outils qui exécutent les modèles derrière ces applications.',
          '[Outils locaux de connaissance et de recherche : comparatif](/fr/power-local-llm/local-llm-knowledge-retrieval-compared) — chat avec des documents, RAG et intégrations de notes.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Applications de chat IA locales et assistants : comparatif (2026) — bureau, mobile, auto-hébergé, assistants et jeu de rôle',
      description:
        `Comparez ${CA_TOTAL} applications de chat IA locales et assistants côte à côte : bureau, mobile, web auto-hébergé, assistants personnels et jeu de rôle, d'après la documentation officielle.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
      inLanguage: 'fr',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Utilisateurs qui choisissent des applications de chat IA locales et des assistants' },
      about: [
        { '@type': 'Thing', name: 'Applications de chat LLM locales' },
        { '@type': 'Thing', name: 'Assistants IA' },
        { '@type': 'Thing', name: 'IA auto-hébergée' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Applications de chat IA locales et assistants : comparatif (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
        },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Easiest Desktop Apps',
    title: 'Apps de chat y asistentes locales, comparados (2026): escritorio, móvil, autoalojados, asistentes y rol',
    seoTitle: 'Apps de chat y asistentes de IA locales 2026',
    intro:
      `Las apps de chat que ejecutan modelos de lenguaje en tu propio hardware no son una única categoría de producto: una app de escritorio, una app de móvil, una interfaz web autoalojada, un asistente personal y una herramienta de rol resuelven problemas distintos, y ninguna lista de funciones única permite compararlas con justicia. Esta guía compara ${CA_TOTAL} herramientas gratuitas y de pago, un tipo cada vez, con una tabla comparativa generada a partir de los mismos datos que el análisis propio de cada herramienta en PromptQuorum, de modo que la tabla y los análisis no pueden contradecirse.`,
    metaDescription:
      `Compara ${CA_TOTAL} apps de chat y asistentes de IA locales: escritorio (LM Studio, Jan, GPT4All), móvil, interfaces web autoalojadas (Open WebUI, LibreChat), asistentes y rol. Licencias, MCP, Ollama y uso offline, según la documentación oficial.`,
    twitterDescription:
      'Apps de chat y asistentes locales comparados por tipo — escritorio, móvil, web autoalojada, asistentes personales, rol — con MCP, Ollama, uso offline y más, según la documentación oficial.',
    audience:
      'Desarrolladores, usuarios que se autoalojan y usuarios preocupados por la privacidad que eligen una app de chat o un asistente local para su ordenador, móvil o servidor, y quieren ver las diferencias por tipo de herramienta, no una lista mezclada.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'apps de chat locales comparadas',
    targetKeywords: [
      'mejor app de chat de ia local',
      'lm studio vs jan vs gpt4all',
      'open webui vs librechat',
      'app de chat de ia offline iphone android',
      'comparativa de clientes de chat llm locales',
      'alternativa autoalojada a chatgpt',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      `**Las ${CA_TOTAL} apps de chat y asistentes locales del directorio de PromptQuorum se dividen en cinco tipos que conviene comparar por separado: apps de chat de escritorio (${CA_DESKTOP}), apps de chat para móvil (${CA_MOBILE}), clientes de chat web y de línea de comandos (${CA_WEB_CLI}), asistentes personales (${CA_PERSONAL_ASSISTANTS}) y apps de rol y compañía (${CA_ROLEPLAY}).** Entre las apps de escritorio, 7 documentan compatibilidad con MCP y 9 documentan Ollama; entre las apps de móvil, 15 documentan el uso totalmente offline; entre los clientes web, 8 documentan el despliegue con Docker. Usa la tabla comparativa de abajo y lee el análisis propio de cada herramienta antes de instalarla.`,
    quickAnswerTop: {
      en: {
        question: '¿Qué app de chat local debería usar?',
        answer:
          'Depende de dónde quieras chatear, así que compara dentro de un solo tipo cada vez. Elige según la restricción que más te importe — el dispositivo (ordenador, móvil o servidor), trabajar offline, compatibilidad con MCP, conectar con Ollama o con tu propio endpoint, o chatear con tus archivos — y usa la tabla de abajo, generada a partir de la documentación oficial de cada herramienta.',
        bullets: [
          'Apps de chat de escritorio: 17 herramientas comparadas en ejecución propia de modelos, Ollama, endpoints, MCP, chat con archivos y voz.',
          'Apps de chat para móvil: 26 herramientas comparadas en uso offline, importación de modelos, descargas dentro de la app, entrada de imágenes y voz.',
          'Clientes web y de línea de comandos: 13 herramientas comparadas en Docker, multiusuario, Ollama, endpoints, chat con archivos y MCP.',
          'Los asistentes personales (13) y las apps de rol (4) se comparan en las funciones que importan en cada caso.',
          'Un guion (—) significa que la documentación del proyecto no lo indica, no que la función no exista.',
        ],
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Cómo comparamos', anchor: 'how-we-compared' },
      { label: 'Tabla comparativa', anchor: 'comparison-table' },
      { label: 'Apps de chat de escritorio: en qué se diferencian', anchor: 'desktop-differences' },
      { label: 'Apps de chat para móvil: en qué se diferencian', anchor: 'mobile-differences' },
      { label: 'Clientes web y de línea de comandos: en qué se diferencian', anchor: 'web-differences' },
      { label: 'Asistentes personales: en qué se diferencian', anchor: 'assistant-differences' },
      { label: 'Rol y compañía: en qué se diferencian', anchor: 'roleplay-differences' },
      { label: 'Lo que esta comparativa no puede decirte', anchor: 'limitations' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Las apps de chat locales son cinco tipos distintos de producto — apps de escritorio, apps de móvil, interfaces web autoalojadas, asistentes personales y herramientas de rol — por eso las ${CA_TOTAL} herramientas del directorio de PromptQuorum se comparan dentro de cada tipo, con una tabla generada a partir de los mismos datos que el análisis propio de cada herramienta.`,
          },
          {
            type: 'plain-terms',
            text: 'Unas apps se instalan en un ordenador, otras en un móvil, otras las alojas tú mismo y abres en el navegador, otras actúan como un asistente que hace cosas por ti y otras están pensadas para el rol con personajes. Comparar una app de móvil con una interfaz web de servidor según las mismas funciones no tiene sentido, así que esta guía compara elementos del mismo tipo.',
          },
        ],
        items: [
          `${CA_TOTAL} herramientas, cinco tipos: apps de chat de escritorio (${CA_DESKTOP}), apps de chat para móvil (${CA_MOBILE}), clientes de chat web y de línea de comandos (${CA_WEB_CLI}), asistentes personales (${CA_PERSONAL_ASSISTANTS}) y apps de rol y compañía (${CA_ROLEPLAY}). Una herramienta disponible en varios dispositivos, como Enchanted, aparece en cada tipo al que pertenece.`,
          'La tabla se genera a partir del registro de cada herramienta y se contrasta con su README o sitio oficial; un guion significa "no indicado en la documentación", nunca "no". Las apps de móvil están documentadas sobre todo por sus fichas de la tienda, así que sus celdas son las más escasas.',
          'Cada nombre de herramienta de la tabla enlaza con su propio análisis en PromptQuorum, donde se cubren los pasos de instalación y los límites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Cómo comparamos',
        content: [
          'Los datos de cada herramienta — precio, licencia, plataformas, requisitos de hardware y atributos propios de su categoría — se guardan una sola vez, en el registro de esa herramienta en el directorio. La tabla comparativa de abajo se genera a partir de esos registros y el análisis de cada herramienta se basa en el mismo registro, así que ambos no pueden indicar valores distintos.',
          'Los atributos propios de cada categoría (por ejemplo, compatibilidad con MCP o uso offline) se tomaron del README o del sitio web oficial de cada proyecto y se contrastaron con la redacción exacta que aparece allí. Cuando la documentación guarda silencio, la tabla muestra un guion en lugar de suponer; cuando una afirmación viene con condiciones (solo en la hoja de ruta, un nivel de pago o un requisito como un servidor aparte), el atributo se deja fuera de la tabla y se explica en el análisis de la herramienta.',
          'Solo las herramientas con su propio análisis en PromptQuorum figuran en la tabla. En unas pocas apps (AI On Device, Chatty Mini y LocalAI ApexCreator) el directorio no tiene una página oficial que consultar, por lo que sus celdas son guiones. La comparativa no clasifica las herramientas por calidad, porque la adecuada depende de tu restricción.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa',
        content: 'Elige abajo un tipo de herramienta y lee la fila de izquierda a derecha. Haz clic en el nombre de una herramienta para abrir su análisis completo en PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      desktopDifferences: {
        id: 'desktop-differences',
        title: 'Apps de chat de escritorio: en qué se diferencian',
        items: [
          '**Ejecuta los modelos por sí misma.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [Ekorbia](/es/power-local-llm/ekorbia-review), [GPT4All](/es/power-local-llm/gpt4all-review), [Jan](/es/power-local-llm/jan-review), [LM Studio](/es/power-local-llm/lm-studio-review), [Off Grid AI](/es/power-local-llm/off-grid-ai-review), [On Device AI](/es/power-local-llm/on-device-ai-review), [Osaurus](/es/power-local-llm/osaurus-ai-review) y [Sidekick](/es/power-local-llm/sidekick-review) documentan la ejecución de modelos por sí mismas, sin un servidor aparte.',
          '**Ollama.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [BoltAI](/es/power-local-llm/boltai-review), [Cherry Studio](/es/local-llms/cherry-studio-ai-desktop-client), [Ekorbia](/es/power-local-llm/ekorbia-review), [Enchanted](/es/power-local-llm/enchanted-review), [Hanoki](/es/power-local-llm/hanoki-review), [Off Grid AI](/es/power-local-llm/off-grid-ai-review), [On Device AI](/es/power-local-llm/on-device-ai-review) y [Osaurus](/es/power-local-llm/osaurus-ai-review) documentan la conexión con Ollama.',
          '**Endpoints compatibles con OpenAI.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [Ekorbia](/es/power-local-llm/ekorbia-review), [Hanoki](/es/power-local-llm/hanoki-review) y [Sidekick](/es/power-local-llm/sidekick-review) documentan la conexión con endpoints compatibles con OpenAI.',
          '**MCP.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [BoltAI](/es/power-local-llm/boltai-review), [Cherry Studio](/es/local-llms/cherry-studio-ai-desktop-client), [Jan](/es/power-local-llm/jan-review), [Locally Uncensored](/es/power-local-llm/locally-uncensored-review), [Odysseus](/es/power-local-llm/odysseus-review) y [Osaurus](/es/power-local-llm/osaurus-ai-review) documentan compatibilidad con MCP.',
          '**Chat con tus archivos.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [BoltAI](/es/power-local-llm/boltai-review), [Ekorbia](/es/power-local-llm/ekorbia-review), [GPT4All](/es/power-local-llm/gpt4all-review), [Locally Uncensored](/es/power-local-llm/locally-uncensored-review), [Off Grid AI](/es/power-local-llm/off-grid-ai-review), [On Device AI](/es/power-local-llm/on-device-ai-review), [Osaurus](/es/power-local-llm/osaurus-ai-review) y [Sidekick](/es/power-local-llm/sidekick-review) documentan el chat con tus propios archivos.',
          '**Voz.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [BoltAI](/es/power-local-llm/boltai-review), [Ekorbia](/es/power-local-llm/ekorbia-review), [Enchanted](/es/power-local-llm/enchanted-review), [LM Studio](/es/power-local-llm/lm-studio-review), [Off Grid AI](/es/power-local-llm/off-grid-ai-review), [On Device AI](/es/power-local-llm/on-device-ai-review) y [Osaurus](/es/power-local-llm/osaurus-ai-review) documentan entrada o salida de voz.',
          '**Precio.** De las 17 apps de escritorio, 11 son gratuitas, 5 freemium y 1 de pago. Consulta cada análisis para ver qué añade el nivel de pago.',
        ],
      },
      mobileDifferences: {
        id: 'mobile-differences',
        title: 'Apps de chat para móvil: en qué se diferencian',
        items: [
          '**Totalmente offline.** [Arbiter](/es/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/es/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review), [Layla](/es/power-local-llm/layla-review), [Locally AI](/es/power-local-llm/locally-ai-review), [Loci AI](/es/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/es/power-local-llm/maid-review), [Noema](/es/power-local-llm/noema-review), [Off Grid AI](/es/power-local-llm/off-grid-ai-review), [On Device AI](/es/power-local-llm/on-device-ai-review), [Pocket AI](/es/power-local-llm/pocket-ai-review), [PocketPal AI](/es/power-local-llm/pocketpal-ai-review), [Private LLM](/es/power-local-llm/private-llm-review), [Solair AI](/es/power-local-llm/solair-ai-review) y [ToolNeuron](/es/power-local-llm/toolneuron-review) documentan el funcionamiento totalmente offline en el dispositivo.',
          '**Importar tus propios modelos.** [Arbiter](/es/power-local-llm/arbiter-local-ai-chat-review), [Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review), [Maid](/es/power-local-llm/maid-review), [On Device AI](/es/power-local-llm/on-device-ai-review), [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) y [ToolNeuron](/es/power-local-llm/toolneuron-review) documentan la importación de tus propios archivos de modelo.',
          '**Descarga de modelos dentro de la app.** [Arbiter](/es/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/es/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review), [Liquid Apollo](/es/power-local-llm/liquid-apollo-review), [Locally AI](/es/power-local-llm/locally-ai-review), [Loci AI](/es/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/es/power-local-llm/maid-review), [On Device AI](/es/power-local-llm/on-device-ai-review), [Pocket AI](/es/power-local-llm/pocket-ai-review), [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) y [Private LLM](/es/power-local-llm/private-llm-review) documentan la descarga de modelos dentro de la app.',
          '**Entrada de imágenes.** [Arbiter](/es/power-local-llm/arbiter-local-ai-chat-review), [Enchanted](/es/power-local-llm/enchanted-review), [Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/es/power-local-llm/locally-ai-review), [Off Grid AI](/es/power-local-llm/off-grid-ai-review), [On Device AI](/es/power-local-llm/on-device-ai-review), [RikkaHub](/es/power-local-llm/rikkahub-review), [Solair AI](/es/power-local-llm/solair-ai-review) y [ToolNeuron](/es/power-local-llm/toolneuron-review) documentan la entrada de imágenes.',
          '**Voz.** [Enchanted](/es/power-local-llm/enchanted-review), [Enclave AI](/es/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/es/power-local-llm/locally-ai-review), [Off Grid AI](/es/power-local-llm/off-grid-ai-review), [On Device AI](/es/power-local-llm/on-device-ai-review), [PocketPal AI](/es/power-local-llm/pocketpal-ai-review), [Solair AI](/es/power-local-llm/solair-ai-review) y [ToolNeuron](/es/power-local-llm/toolneuron-review) documentan entrada o salida de voz.',
          '**Precio.** De las 26 apps de móvil, 16 son gratuitas, 6 freemium y 4 de pago.',
          '**Documentación.** La mayoría de las apps de móvil están documentadas solo por su ficha de la tienda o su sitio web, que indican mucho menos que un README, por lo que esta tabla tiene más guiones que las demás.',
        ],
      },
      webDifferences: {
        id: 'web-differences',
        title: 'Clientes web y de línea de comandos: en qué se diferencian',
        items: [
          '**Docker y autoalojamiento.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [Big-AGI](/es/local-llms/big-agi-review), [KoboldCpp](/es/power-local-llm/koboldcpp-review), [LibreChat](/es/power-local-llm/librechat-review), [LobeChat](/es/local-llms/lobechat-review), [NextChat](/es/local-llms/nextchat-review), [Odysseus](/es/power-local-llm/odysseus-review) y [Open WebUI](/es/local-llms/open-webui-review) documentan el despliegue con Docker o autoalojado.',
          '**Varios usuarios.** [LibreChat](/es/power-local-llm/librechat-review) y [Open WebUI](/es/local-llms/open-webui-review) documentan compatibilidad multiusuario.',
          '**Ollama.** [aichat](/es/power-local-llm/aichat-review), [AnythingLLM](/es/power-local-llm/anythingllm-review), [Big-AGI](/es/local-llms/big-agi-review), [Chatbox](/es/local-llms/chatbox-review), [LibreChat](/es/power-local-llm/librechat-review), [Open WebUI](/es/local-llms/open-webui-review) y [Page Assist](/es/local-llms/page-assist-review) documentan la conexión con Ollama.',
          '**Endpoints compatibles con OpenAI.** [aichat](/es/power-local-llm/aichat-review), [AnythingLLM](/es/power-local-llm/anythingllm-review), [Big-AGI](/es/local-llms/big-agi-review), [LibreChat](/es/power-local-llm/librechat-review), [NextChat](/es/local-llms/nextchat-review), [Open WebUI](/es/local-llms/open-webui-review) y [Page Assist](/es/local-llms/page-assist-review) documentan la conexión con endpoints compatibles con OpenAI.',
          '**Chat con tus archivos.** [aichat](/es/power-local-llm/aichat-review), [AnythingLLM](/es/power-local-llm/anythingllm-review), [Chatbox](/es/local-llms/chatbox-review), [KoboldCpp](/es/power-local-llm/koboldcpp-review), [LibreChat](/es/power-local-llm/librechat-review) y [Open WebUI](/es/local-llms/open-webui-review) documentan el chat con tus propios archivos.',
          '**MCP.** [aichat](/es/power-local-llm/aichat-review), [AnythingLLM](/es/power-local-llm/anythingllm-review), [Chatbox](/es/local-llms/chatbox-review), [KoboldCpp](/es/power-local-llm/koboldcpp-review), [LibreChat](/es/power-local-llm/librechat-review), [LobeChat](/es/local-llms/lobechat-review), [NextChat](/es/local-llms/nextchat-review), [Odysseus](/es/power-local-llm/odysseus-review) y [Open WebUI](/es/local-llms/open-webui-review) documentan compatibilidad con MCP.',
        ],
      },
      assistantDifferences: {
        id: 'assistant-differences',
        title: 'Asistentes personales: en qué se diferencian',
        items: [
          '**LLM locales.** [Jarvis](/es/power-local-llm/jarvis-mac-review), [Khoj](/es/power-local-llm/khoj-ai-second-brain-review), [Meetily](/es/power-local-llm/meetily-review), [nanobot](/es/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/es/power-local-llm/nvidia-g-assist-review), [Odysseus](/es/power-local-llm/odysseus-review), [Parlor](/es/power-local-llm/parlor-review) y [Second Me](/es/power-local-llm/second-me-review) documentan el trabajo con LLM locales.',
          '**Voz.** [Jarvis](/es/power-local-llm/jarvis-mac-review), [Khoj](/es/power-local-llm/khoj-ai-second-brain-review), [NVIDIA Project G-Assist](/es/power-local-llm/nvidia-g-assist-review), [Parlor](/es/power-local-llm/parlor-review) y [Voxa](/es/power-local-llm/voxa-review) documentan entrada o salida de voz.',
          '**Memoria persistente.** [Aori](/es/power-local-llm/aori-ai-personal-agent-review), [nanobot](/es/power-local-llm/nanobot-review), [Odysseus](/es/power-local-llm/odysseus-review), [Second Me](/es/power-local-llm/second-me-review) y [Voxa](/es/power-local-llm/voxa-review) documentan la memoria persistente.',
          '**Uso de herramientas y acciones.** [Agentic Inbox](/es/power-local-llm/agentic-inbox-review), [Aori](/es/power-local-llm/aori-ai-personal-agent-review), [Atomic Bot](/es/power-local-llm/atomic-bot-review), [Jarvis](/es/power-local-llm/jarvis-mac-review), [Khoj](/es/power-local-llm/khoj-ai-second-brain-review), [nanobot](/es/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/es/power-local-llm/nvidia-g-assist-review), [Odysseus](/es/power-local-llm/odysseus-review), [Parlor](/es/power-local-llm/parlor-review) y [Voxa](/es/power-local-llm/voxa-review) documentan el uso de herramientas o acciones.',
        ],
      },
      roleplayDifferences: {
        id: 'roleplay-differences',
        title: 'Rol y compañía: en qué se diferencian',
        items: [
          '**Lorebooks.** [Agnai](/es/power-local-llm/agnai-review), [Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay) y [RisuAI](/es/power-local-llm/risuai-review) documentan compatibilidad con lorebooks o world info.',
          '**Chats grupales.** [Agnai](/es/power-local-llm/agnai-review) y [RisuAI](/es/power-local-llm/risuai-review) documentan los chats grupales.',
          '**Cobertura.** Solo hay cuatro herramientas en este grupo y varias funciones de rol (como las tarjetas de personaje) se describen de forma distinta según el proyecto, por lo que se tratan en el análisis de cada herramienta y no en la tabla.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Lo que esta comparativa no puede decirte',
        items: [
          'Compara capacidades documentadas, no calidad. No dice nada sobre lo buenas que son las respuestas, la velocidad a la que se ejecuta un modelo en tu dispositivo o lo pulida que es la interfaz: PromptQuorum no ha medido estos aspectos en las herramientas listadas.',
          'Los guiones son lagunas en la documentación que consultamos, no hallazgos negativos. Algunas herramientas pueden admitir una función que su README o su ficha de la tienda no menciona.',
          'Las apps de móvil cambian a menudo y se describen sobre todo por sus fichas de la tienda, así que consulta la ficha actual y el análisis de la herramienta antes de instalarla.',
          'Las herramientas cambian rápido. El análisis de cada herramienta indica la versión con la que se comprobó, y esta guía se actualiza cuando se actualiza un análisis.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Por qué se comparan por separado las apps de chat de escritorio, de móvil y autoalojadas?',
            a: 'Son productos distintos con restricciones distintas: una app de móvil ejecuta modelos pequeños en el dispositivo, una app de escritorio puede ejecutar modelos mayores y una interfaz web autoalojada es un servidor que ejecutas para ti o para un equipo. La mayoría de los atributos solo tienen sentido dentro de un tipo, así que compararlos en una sola tabla dejaría la mayoría de las celdas vacías o sin sentido.',
          },
          {
            q: '¿Qué significa un guion en la tabla comparativa?',
            a: 'Significa que la propia documentación del proyecto no indica ese atributo. No significa que la función no exista; consulta el análisis de la herramienta o su repositorio.',
          },
          {
            q: '¿Por qué una herramienta aparece en más de una tabla?',
            a: 'Algunas herramientas están disponibles en más de un tipo de dispositivo — por ejemplo, una versión de escritorio y otra de móvil — por lo que aparecen en cada tipo al que pertenecen, con los atributos que corresponden a ese tipo.',
          },
          {
            q: '¿Alguna de estas herramientas tiene un enlace de afiliado?',
            a: 'No. PromptQuorum no tiene ninguna relación de afiliación con ninguna herramienta de esta comparativa en el momento de escribir esto, y ningún enlace de aquí genera una comisión.',
          },
          {
            q: '¿Con qué frecuencia se actualiza esta comparativa?',
            a: 'Se actualiza dos veces al año y cada vez que se actualiza el análisis de alguna de las herramientas listadas, porque la tabla se genera a partir de los mismos datos que esos análisis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'El README, el sitio web o la ficha de la tienda oficiales de cada herramienta, indicados en el análisis de esa herramienta en PromptQuorum (enlazado desde la tabla comparativa).',
          '[Directorio de apps de IA local de PromptQuorum](/es/directory) — el registro a partir del cual se genera cada fila de la tabla.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          `[Directorio de software local](/es/directory) — explora las ${TOTAL_APP_COUNT} apps de IA local y filtra por categoría.`,
          '[Motores de inferencia, runtimes y gateways locales, comparados](/es/power-local-llm/local-llm-run-serve-compared) — las herramientas que ejecutan los modelos detrás de estas apps.',
          '[Herramientas locales de conocimiento y recuperación, comparadas](/es/power-local-llm/local-llm-knowledge-retrieval-compared) — chat con documentos, RAG e integraciones de notas.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Apps de chat y asistentes locales, comparados (2026): escritorio, móvil, autoalojados, asistentes y rol',
      description:
        `Compara ${CA_TOTAL} apps de chat y asistentes de IA locales: escritorio, móvil, web autoalojada, asistentes personales y rol, según la documentación oficial.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
      inLanguage: 'es',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuarios que eligen apps de chat y asistentes locales' },
      about: [
        { '@type': 'Thing', name: 'Apps de chat con LLM locales' },
        { '@type': 'Thing', name: 'Asistentes de IA' },
        { '@type': 'Thing', name: 'IA autoalojada' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Apps de chat y asistentes locales, comparados (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
        },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Easiest Desktop Apps',
    title: 'ローカルチャットアプリとAIアシスタント比較(2026):デスクトップ、モバイル、セルフホスト、アシスタント、ロールプレイ',
    seoTitle: 'ローカルチャットアプリ&AIアシスタント比較2026',
    intro:
      `自分のハードウェア上で言語モデルを動かすチャットアプリは、ひとつの製品カテゴリではありません。デスクトップアプリ、スマートフォンアプリ、セルフホスト型のWebインターフェース、パーソナルアシスタント、ロールプレイツールはそれぞれ別の課題を解決するため、単一の機能一覧では公平に比較できません。このガイドでは、無料・有料の${CA_TOTAL}ツールを種類ごとに比較します。比較表は各ツールのPromptQuorumレビューと同じデータから生成しているため、表とレビューの内容が食い違うことはありません。`,
    metaDescription:
      `ローカルチャットアプリとAIアシスタント${CA_TOTAL}種を並べて比較:デスクトップ(LM Studio、Jan、GPT4All)、スマホ、セルフホストWeb UI(Open WebUI、LibreChat)、アシスタント、ロールプレイ。公式ドキュメントに基づくライセンス、MCP、Ollama、オフライン対応。`,
    twitterDescription:
      'ローカルチャットアプリとアシスタントを種類別に比較 — デスクトップ、モバイル、セルフホストWeb、パーソナルアシスタント、ロールプレイ。MCP、Ollama、オフライン対応などを公式ドキュメントに基づいて整理。',
    audience:
      'パソコン、スマートフォン、サーバー向けのローカルチャットアプリやアシスタントを選ぶ開発者、セルフホスト利用者、プライバシーを重視する利用者で、ツールを1つの混在リストではなく種類ごとの違いとして把握したい方。',
    readTime: '12分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルチャットアプリ比較',
    targetKeywords: [
      'おすすめ ローカル AI チャットアプリ',
      'lm studio jan gpt4all 比較',
      'open webui librechat 比較',
      'オフライン AI チャットアプリ iphone android',
      'ローカル llm チャットクライアント 比較',
      'セルフホスト chatgpt 代替',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      `**PromptQuorumディレクトリにあるローカルチャットアプリとアシスタント${CA_TOTAL}種は、別々に比較すべき5種類に分かれます:デスクトップチャットアプリ(${CA_DESKTOP})、モバイルチャットアプリ(${CA_MOBILE})、WebおよびCLIチャットクライアント(${CA_WEB_CLI})、パーソナルアシスタント(${CA_PERSONAL_ASSISTANTS})、ロールプレイ・コンパニオンアプリ(${CA_ROLEPLAY})です。** デスクトップアプリのうち7つがMCP対応、9つがOllama対応を公式ドキュメントに記載しています。スマートフォンアプリでは15が完全オフライン動作、Webクライアントでは8がDockerでのデプロイを記載しています。下の比較表を使い、インストール前に各ツールのレビューも読んでください。`,
    quickAnswerTop: {
      en: {
        question: 'どのローカルチャットアプリを使えばよいか',
        answer:
          'どこでチャットしたいかによって変わるため、種類ごとに比較してください。最も重視する条件(デバイス(パソコン、スマートフォン、サーバー)、オフライン動作、MCP対応、Ollamaや自前エンドポイントへの接続、ファイルとのチャット)で選び、各ツールの公式ドキュメントから生成した下の表を活用してください。',
        bullets: [
          'デスクトップチャットアプリ:17ツールを、モデルの自力実行、Ollama、エンドポイント、MCP、ファイルチャット、音声で比較。',
          'モバイルチャットアプリ:26ツールを、オフライン動作、モデルのインポート、アプリ内ダウンロード、画像入力、音声で比較。',
          'WebおよびCLIクライアント:13ツールを、Docker、マルチユーザー、Ollama、エンドポイント、ファイルチャット、MCPで比較。',
          'パーソナルアシスタント(13)とロールプレイアプリ(4)は、それぞれで重要な機能で比較。',
          'ダッシュ(—)は、プロジェクトのドキュメントに記載がないことを意味し、その機能がないという意味ではありません。',
        ],
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '比較の方法', anchor: 'how-we-compared' },
      { label: '比較表', anchor: 'comparison-table' },
      { label: 'デスクトップチャットアプリ:違い', anchor: 'desktop-differences' },
      { label: 'モバイルチャットアプリ:違い', anchor: 'mobile-differences' },
      { label: 'WebおよびCLIクライアント:違い', anchor: 'web-differences' },
      { label: 'パーソナルアシスタント:違い', anchor: 'assistant-differences' },
      { label: 'ロールプレイとコンパニオン:違い', anchor: 'roleplay-differences' },
      { label: 'この比較でわからないこと', anchor: 'limitations' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '出典', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `ローカルチャットアプリはデスクトップアプリ、スマホアプリ、セルフホスト型Webインターフェース、パーソナルアシスタント、ロールプレイツールという5つの異なる種類の製品であるため、PromptQuorumディレクトリの${CA_TOTAL}ツールは、各ツールのレビューと同じデータから生成した表を使って、種類ごとに比較します。`,
          },
          {
            type: 'plain-terms',
            text: 'パソコンにインストールするもの、スマホにインストールするもの、自分でホストしてブラウザで開くもの、代わりに作業をこなすアシスタント型のもの、キャラクターとのロールプレイ向けのものがあります。スマホアプリとサーバー側のWebインターフェースを同じ機能で比べても意味がないため、このガイドでは同じ種類どうしを比較します。',
          },
        ],
        items: [
          `${CA_TOTAL}ツール、5種類:デスクトップチャットアプリ(${CA_DESKTOP})、モバイルチャットアプリ(${CA_MOBILE})、WebおよびCLIチャットクライアント(${CA_WEB_CLI})、パーソナルアシスタント(${CA_PERSONAL_ASSISTANTS})、ロールプレイ・コンパニオンアプリ(${CA_ROLEPLAY})。Enchantedのように複数のデバイスで使えるツールは、該当する種類のそれぞれに登場します。`,
          '表は各ツールのレコードから生成し、公式のREADMEまたはサイトと照合しています。ダッシュは「ドキュメントに記載なし」を意味し、「非対応」を意味することはありません。スマホアプリは主にストアの掲載情報しかドキュメントがないため、セルの空白が最も多くなります。',
          '表内のツール名はそれぞれ、インストール手順や制限事項を扱う専用のPromptQuorumレビューにリンクしています。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '比較の方法',
        content: [
          '各ツールの事実(価格、ライセンス、対応プラットフォーム、ハードウェア要件、カテゴリ固有の属性)は、そのツールのディレクトリレコードに一度だけ保存されています。下の比較表はそのレコードから生成され、ツール個別のレビューも同じレコードを参照するため、両者が異なる値を示すことはありません。',
          'カテゴリ固有の属性(たとえばMCP対応やオフライン動作)は、各プロジェクトの公式READMEまたはWebサイトから取得し、そこに書かれた文言と照合しています。ドキュメントに記載がない場合、表は推測せずダッシュを表示します。主張に条件が付く場合(ロードマップのみ、有料プラン、別サーバーが必要などの要件)は、その属性を表から外し、ツールのレビューで扱います。',
          '表に載っているのは、専用のPromptQuorumレビューがあるツールだけです。一部のアプリ(AI On Device、Chatty Mini、LocalAI ApexCreator)は、確認できる公式ページがディレクトリにないため、セルはダッシュです。最適なツールは重視する条件によって変わるため、この比較ではツールに順位を付けません。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '比較表',
        content: '下でツールの種類を選び、行に沿って読み進めてください。ツール名をクリックすると、PromptQuorumの詳細レビューが開きます。',
        component: 'CategoryCompareTable',
      },
      desktopDifferences: {
        id: 'desktop-differences',
        title: 'デスクトップチャットアプリ:違い',
        items: [
          '**モデルの自力実行。**[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[Ekorbia](/ja/power-local-llm/ekorbia-review)、[GPT4All](/ja/power-local-llm/gpt4all-review)、[Jan](/ja/power-local-llm/jan-review)、[LM Studio](/ja/power-local-llm/lm-studio-review)、[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)、[On Device AI](/ja/power-local-llm/on-device-ai-review)、[Osaurus](/ja/power-local-llm/osaurus-ai-review)と[Sidekick](/ja/power-local-llm/sidekick-review)は、別のサーバーなしでモデルを自力で実行できると記載しています。',
          '**Ollama。**[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[BoltAI](/ja/power-local-llm/boltai-review)、[Cherry Studio](/ja/local-llms/cherry-studio-ai-desktop-client)、[Ekorbia](/ja/power-local-llm/ekorbia-review)、[Enchanted](/ja/power-local-llm/enchanted-review)、[Hanoki](/ja/power-local-llm/hanoki-review)、[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)、[On Device AI](/ja/power-local-llm/on-device-ai-review)と[Osaurus](/ja/power-local-llm/osaurus-ai-review)は、Ollamaへの接続を記載しています。',
          '**OpenAI互換エンドポイント。**[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[Ekorbia](/ja/power-local-llm/ekorbia-review)、[Hanoki](/ja/power-local-llm/hanoki-review)と[Sidekick](/ja/power-local-llm/sidekick-review)は、OpenAI互換エンドポイントへの接続を記載しています。',
          '**MCP。**[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[BoltAI](/ja/power-local-llm/boltai-review)、[Cherry Studio](/ja/local-llms/cherry-studio-ai-desktop-client)、[Jan](/ja/power-local-llm/jan-review)、[Locally Uncensored](/ja/power-local-llm/locally-uncensored-review)、[Odysseus](/ja/power-local-llm/odysseus-review)と[Osaurus](/ja/power-local-llm/osaurus-ai-review)は、MCP対応を記載しています。',
          '**ファイルとのチャット。**[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[BoltAI](/ja/power-local-llm/boltai-review)、[Ekorbia](/ja/power-local-llm/ekorbia-review)、[GPT4All](/ja/power-local-llm/gpt4all-review)、[Locally Uncensored](/ja/power-local-llm/locally-uncensored-review)、[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)、[On Device AI](/ja/power-local-llm/on-device-ai-review)、[Osaurus](/ja/power-local-llm/osaurus-ai-review)と[Sidekick](/ja/power-local-llm/sidekick-review)は、自分のファイルとのチャットを記載しています。',
          '**音声。**[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[BoltAI](/ja/power-local-llm/boltai-review)、[Ekorbia](/ja/power-local-llm/ekorbia-review)、[Enchanted](/ja/power-local-llm/enchanted-review)、[LM Studio](/ja/power-local-llm/lm-studio-review)、[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)、[On Device AI](/ja/power-local-llm/on-device-ai-review)と[Osaurus](/ja/power-local-llm/osaurus-ai-review)は、音声入力または音声出力を記載しています。',
          '**価格。**17のデスクトップアプリのうち、11が無料、5がフリーミアム、1が有料です。有料プランで何が追加されるかは、各レビューで確認してください。',
        ],
      },
      mobileDifferences: {
        id: 'mobile-differences',
        title: 'モバイルチャットアプリ:違い',
        items: [
          '**完全オフライン。**[Arbiter](/ja/power-local-llm/arbiter-local-ai-chat-review)、[Enclave AI](/ja/power-local-llm/enclave-ai-review)、[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)、[Layla](/ja/power-local-llm/layla-review)、[Locally AI](/ja/power-local-llm/locally-ai-review)、[Loci AI](/ja/power-local-llm/loci-ai-review-offline-local-ai)、[Maid](/ja/power-local-llm/maid-review)、[Noema](/ja/power-local-llm/noema-review)、[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)、[On Device AI](/ja/power-local-llm/on-device-ai-review)、[Pocket AI](/ja/power-local-llm/pocket-ai-review)、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)、[Private LLM](/ja/power-local-llm/private-llm-review)、[Solair AI](/ja/power-local-llm/solair-ai-review)と[ToolNeuron](/ja/power-local-llm/toolneuron-review)は、デバイス上での完全オフライン動作を記載しています。',
          '**独自モデルのインポート。**[Arbiter](/ja/power-local-llm/arbiter-local-ai-chat-review)、[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)、[Maid](/ja/power-local-llm/maid-review)、[On Device AI](/ja/power-local-llm/on-device-ai-review)、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と[ToolNeuron](/ja/power-local-llm/toolneuron-review)は、独自のモデルファイルのインポートを記載しています。',
          '**アプリ内モデルダウンロード。**[Arbiter](/ja/power-local-llm/arbiter-local-ai-chat-review)、[Enclave AI](/ja/power-local-llm/enclave-ai-review)、[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)、[Liquid Apollo](/ja/power-local-llm/liquid-apollo-review)、[Locally AI](/ja/power-local-llm/locally-ai-review)、[Loci AI](/ja/power-local-llm/loci-ai-review-offline-local-ai)、[Maid](/ja/power-local-llm/maid-review)、[On Device AI](/ja/power-local-llm/on-device-ai-review)、[Pocket AI](/ja/power-local-llm/pocket-ai-review)、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と[Private LLM](/ja/power-local-llm/private-llm-review)は、アプリ内でのモデルのダウンロードを記載しています。',
          '**画像入力。**[Arbiter](/ja/power-local-llm/arbiter-local-ai-chat-review)、[Enchanted](/ja/power-local-llm/enchanted-review)、[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)、[Locally AI](/ja/power-local-llm/locally-ai-review)、[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)、[On Device AI](/ja/power-local-llm/on-device-ai-review)、[RikkaHub](/ja/power-local-llm/rikkahub-review)、[Solair AI](/ja/power-local-llm/solair-ai-review)と[ToolNeuron](/ja/power-local-llm/toolneuron-review)は、画像入力を記載しています。',
          '**音声。**[Enchanted](/ja/power-local-llm/enchanted-review)、[Enclave AI](/ja/power-local-llm/enclave-ai-review)、[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)、[Locally AI](/ja/power-local-llm/locally-ai-review)、[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)、[On Device AI](/ja/power-local-llm/on-device-ai-review)、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)、[Solair AI](/ja/power-local-llm/solair-ai-review)と[ToolNeuron](/ja/power-local-llm/toolneuron-review)は、音声入力または音声出力を記載しています。',
          '**価格。**26のスマホアプリのうち、16が無料、6がフリーミアム、4が有料です。',
          '**ドキュメント。**ほとんどのスマホアプリは、ストアの掲載情報かWebサイトでしか説明されておらず、READMEよりも記載が大幅に少ないため、この表は他の表よりダッシュが多くなっています。',
        ],
      },
      webDifferences: {
        id: 'web-differences',
        title: 'WebおよびCLIクライアント:違い',
        items: [
          '**Dockerとセルフホスト。**[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[Big-AGI](/ja/local-llms/big-agi-review)、[KoboldCpp](/ja/power-local-llm/koboldcpp-review)、[LibreChat](/ja/power-local-llm/librechat-review)、[LobeChat](/ja/local-llms/lobechat-review)、[NextChat](/ja/local-llms/nextchat-review)、[Odysseus](/ja/power-local-llm/odysseus-review)と[Open WebUI](/ja/local-llms/open-webui-review)は、Dockerまたはセルフホストでのデプロイを記載しています。',
          '**複数ユーザー。**[LibreChat](/ja/power-local-llm/librechat-review)と[Open WebUI](/ja/local-llms/open-webui-review)は、マルチユーザー対応を記載しています。',
          '**Ollama。**[aichat](/ja/power-local-llm/aichat-review)、[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[Big-AGI](/ja/local-llms/big-agi-review)、[Chatbox](/ja/local-llms/chatbox-review)、[LibreChat](/ja/power-local-llm/librechat-review)、[Open WebUI](/ja/local-llms/open-webui-review)と[Page Assist](/ja/local-llms/page-assist-review)は、Ollamaへの接続を記載しています。',
          '**OpenAI互換エンドポイント。**[aichat](/ja/power-local-llm/aichat-review)、[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[Big-AGI](/ja/local-llms/big-agi-review)、[LibreChat](/ja/power-local-llm/librechat-review)、[NextChat](/ja/local-llms/nextchat-review)、[Open WebUI](/ja/local-llms/open-webui-review)と[Page Assist](/ja/local-llms/page-assist-review)は、OpenAI互換エンドポイントへの接続を記載しています。',
          '**ファイルとのチャット。**[aichat](/ja/power-local-llm/aichat-review)、[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[Chatbox](/ja/local-llms/chatbox-review)、[KoboldCpp](/ja/power-local-llm/koboldcpp-review)、[LibreChat](/ja/power-local-llm/librechat-review)と[Open WebUI](/ja/local-llms/open-webui-review)は、自分のファイルとのチャットを記載しています。',
          '**MCP。**[aichat](/ja/power-local-llm/aichat-review)、[AnythingLLM](/ja/power-local-llm/anythingllm-review)、[Chatbox](/ja/local-llms/chatbox-review)、[KoboldCpp](/ja/power-local-llm/koboldcpp-review)、[LibreChat](/ja/power-local-llm/librechat-review)、[LobeChat](/ja/local-llms/lobechat-review)、[NextChat](/ja/local-llms/nextchat-review)、[Odysseus](/ja/power-local-llm/odysseus-review)と[Open WebUI](/ja/local-llms/open-webui-review)は、MCP対応を記載しています。',
        ],
      },
      assistantDifferences: {
        id: 'assistant-differences',
        title: 'パーソナルアシスタント:違い',
        items: [
          '**ローカルLLM。**[Jarvis](/ja/power-local-llm/jarvis-mac-review)、[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)、[Meetily](/ja/power-local-llm/meetily-review)、[nanobot](/ja/power-local-llm/nanobot-review)、[NVIDIA Project G-Assist](/ja/power-local-llm/nvidia-g-assist-review)、[Odysseus](/ja/power-local-llm/odysseus-review)、[Parlor](/ja/power-local-llm/parlor-review)と[Second Me](/ja/power-local-llm/second-me-review)は、ローカルLLMとの連携を記載しています。',
          '**音声。**[Jarvis](/ja/power-local-llm/jarvis-mac-review)、[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)、[NVIDIA Project G-Assist](/ja/power-local-llm/nvidia-g-assist-review)、[Parlor](/ja/power-local-llm/parlor-review)と[Voxa](/ja/power-local-llm/voxa-review)は、音声入力または音声出力を記載しています。',
          '**永続メモリ。**[Aori](/ja/power-local-llm/aori-ai-personal-agent-review)、[nanobot](/ja/power-local-llm/nanobot-review)、[Odysseus](/ja/power-local-llm/odysseus-review)、[Second Me](/ja/power-local-llm/second-me-review)と[Voxa](/ja/power-local-llm/voxa-review)は、永続メモリを記載しています。',
          '**ツール利用とアクション。**[Agentic Inbox](/ja/power-local-llm/agentic-inbox-review)、[Aori](/ja/power-local-llm/aori-ai-personal-agent-review)、[Atomic Bot](/ja/power-local-llm/atomic-bot-review)、[Jarvis](/ja/power-local-llm/jarvis-mac-review)、[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)、[nanobot](/ja/power-local-llm/nanobot-review)、[NVIDIA Project G-Assist](/ja/power-local-llm/nvidia-g-assist-review)、[Odysseus](/ja/power-local-llm/odysseus-review)、[Parlor](/ja/power-local-llm/parlor-review)と[Voxa](/ja/power-local-llm/voxa-review)は、ツール利用またはアクションを記載しています。',
        ],
      },
      roleplayDifferences: {
        id: 'roleplay-differences',
        title: 'ロールプレイとコンパニオン:違い',
        items: [
          '**ロアブック。**[Agnai](/ja/power-local-llm/agnai-review)、[Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay)と[RisuAI](/ja/power-local-llm/risuai-review)は、ロアブックまたはワールドインフォのサポートを記載しています。',
          '**グループチャット。**[Agnai](/ja/power-local-llm/agnai-review)と[RisuAI](/ja/power-local-llm/risuai-review)は、グループチャットを記載しています。',
          '**対象範囲。**このグループに含まれるのは4ツールのみで、ロールプレイ関連の機能(キャラクターカードなど)はプロジェクトごとに説明のされ方が異なるため、表ではなく各ツールのレビューで扱っています。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'この比較でわからないこと',
        items: [
          'これは文書に記載された機能の比較であり、品質の比較ではありません。回答の出来、お使いのデバイスでのモデルの速度、インターフェースの完成度については何も述べておらず、PromptQuorumは掲載ツールについてこれらを測定していません。',
          'ダッシュは、確認したドキュメントにある記載の空白であり、否定的な結果ではありません。READMEやストアの掲載情報に書かれていなくても、その機能に対応しているツールはあるかもしれません。',
          'スマホアプリは変更が頻繁で、主にストアの掲載情報で説明されているため、インストール前に最新の掲載情報とツールのレビューを確認してください。',
          'ツールは急速に変化します。各ツールのレビューには確認したバージョンを明記しており、このガイドはレビューが更新されるたびに更新されます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'デスクトップ、モバイル、セルフホストのチャットアプリを別々に比較するのはなぜですか?',
            a: 'それぞれ制約の異なる別の製品だからです。スマホアプリは小さなモデルをデバイス上で動かし、デスクトップアプリはより大きなモデルを動かせ、セルフホスト型のWebインターフェースは自分やチームのために運用するサーバーです。ほとんどの属性は1つの種類の中でしか意味を持たないため、1つの表で比較するとセルの大半が空白か無意味になってしまいます。',
          },
          {
            q: '比較表のダッシュは何を意味しますか?',
            a: 'プロジェクト自身のドキュメントにその属性の記載がないことを意味します。その機能がないという意味ではありません。ツールのレビューやリポジトリで確認してください。',
          },
          {
            q: '1つのツールが複数の表に登場するのはなぜですか?',
            a: 'デスクトップ版とスマホ版のように、複数の種類のデバイスで使えるツールがあり、該当する種類のそれぞれに、その種類に当てはまる属性とともに掲載しているためです。',
          },
          {
            q: 'これらのツールにアフィリエイトリンクはありますか?',
            a: 'いいえ。執筆時点で、PromptQuorumはこの比較に含まれるどのツールともアフィリエイト関係になく、ここにあるリンクから手数料が発生することもありません。',
          },
          {
            q: 'この比較はどのくらいの頻度で更新されますか?',
            a: '年2回、および掲載ツールのいずれかのレビューが更新されるたびに更新します。表はそれらのレビューと同じデータから生成されるためです。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '各ツールの公式README、Webサイト、ストアの掲載情報。そのツールのPromptQuorumレビュー(比較表からリンク)に記載しています。',
          '[PromptQuorumローカルAIアプリディレクトリ](/ja/directory) — 表の各行の生成元となるレコード。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          `[ローカルソフトウェアディレクトリ](/ja/directory) — ${TOTAL_APP_COUNT}件のローカルAIアプリをすべて閲覧し、カテゴリで絞り込めます。`,
          '[ローカル推論エンジン、ランタイム、ゲートウェイ比較](/ja/power-local-llm/local-llm-run-serve-compared) — これらのアプリの裏でモデルを動かすツール。',
          '[ローカルのナレッジ・検索ツール比較](/ja/power-local-llm/local-llm-knowledge-retrieval-compared) — ドキュメントチャット、RAG、ノート連携。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルチャットアプリとAIアシスタント比較(2026):デスクトップ、モバイル、セルフホスト、アシスタント、ロールプレイ',
      description:
        `ローカルチャットアプリとAIアシスタント${CA_TOTAL}種を並べて比較:デスクトップ、モバイル、セルフホストWeb、パーソナルアシスタント、ロールプレイ。公式ドキュメントに基づきます。`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
      inLanguage: 'ja',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカルチャットアプリとアシスタントを選ぶ利用者' },
      about: [
        { '@type': 'Thing', name: 'ローカルLLMチャットアプリ' },
        { '@type': 'Thing', name: 'AIアシスタント' },
        { '@type': 'Thing', name: 'セルフホストAI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'ローカルチャットアプリとAIアシスタント比較(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
        },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Easiest Desktop Apps',
    title: '本地聊天应用与助手对比(2026):桌面、手机、自托管、助手与角色扮演',
    seoTitle: '本地聊天应用与AI助手对比2026',
    intro:
      `在你自己的硬件上运行语言模型的聊天应用并不是单一的产品类别:桌面应用、手机应用、自托管的网页界面、个人助手和角色扮演工具解决的是不同的问题,没有哪一份功能清单能公平地对它们做统一比较。本指南按类型逐一比较${CA_TOTAL}款免费和付费工具,所用对比表与各工具自己的PromptQuorum评测出自同一份数据生成,因此表格与评测不会相互矛盾。`,
    metaDescription:
      `并排对比${CA_TOTAL}款本地聊天应用与AI助手:桌面应用(LM Studio、Jan、GPT4All)、手机应用、自托管网页界面(Open WebUI、LibreChat)、助手与角色扮演工具。许可证、MCP、Ollama、离线使用,均取自官方文档。`,
    twitterDescription:
      '按类型对比本地聊天应用与助手:桌面、手机、自托管网页、个人助手、角色扮演,涵盖MCP、Ollama、离线使用等,均取自官方文档。',
    audience:
      '为自己的电脑、手机或服务器挑选本地聊天应用或助手的开发者、自托管用户和注重隐私的用户;他们希望按工具类型看到差异,而不是一份混杂的清单。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地聊天应用对比',
    targetKeywords: [
      '本地ai聊天应用推荐',
      'lm studio vs jan vs gpt4all',
      'open webui vs librechat',
      '离线ai聊天应用 iphone android',
      '本地llm聊天客户端对比',
      '自托管chatgpt替代方案',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      `**PromptQuorum目录中的${CA_TOTAL}款本地聊天应用与助手分为五种类型,应分别比较:桌面聊天应用(${CA_DESKTOP}款)、手机聊天应用(${CA_MOBILE}款)、网页与CLI聊天客户端(${CA_WEB_CLI}款)、个人助手(${CA_PERSONAL_ASSISTANTS}款)以及角色扮演与陪伴应用(${CA_ROLEPLAY}款)。** 在桌面应用中,7款在文档中说明支持MCP,9款在文档中说明支持Ollama;在手机应用中,15款在文档中说明可完全离线使用;在网页客户端中,8款在文档中说明支持Docker部署。请使用下方的对比表,并在安装前阅读各工具自己的评测。`,
    quickAnswerTop: {
      en: {
        question: '我应该使用哪款本地聊天应用?',
        answer:
          '这取决于你想在哪里聊天,所以请一次只在一种类型内比较。按最重要的限制条件来选——设备(电脑、手机或服务器)、能否离线工作、MCP支持、连接Ollama或你自己的端点,或与你的文件对话——然后使用下方的表格,该表取自各工具的官方文档。',
        bullets: [
          '桌面聊天应用:比较17款工具在自行运行模型、Ollama、端点、MCP、文件对话和语音方面的差异。',
          '手机聊天应用:比较26款工具在离线使用、导入模型、应用内下载、图像输入和语音方面的差异。',
          '网页与CLI客户端:比较13款工具在Docker、多用户、Ollama、端点、文件对话和MCP方面的差异。',
          '个人助手(13款)与角色扮演应用(4款)按各自最重要的功能进行比较。',
          '破折号(—)表示该项目的文档没有说明,而不是表示该功能缺失。',
        ],
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '我们如何比较', anchor: 'how-we-compared' },
      { label: '对比表', anchor: 'comparison-table' },
      { label: '桌面聊天应用:差异所在', anchor: 'desktop-differences' },
      { label: '手机聊天应用:差异所在', anchor: 'mobile-differences' },
      { label: '网页与CLI客户端:差异所在', anchor: 'web-differences' },
      { label: '个人助手:差异所在', anchor: 'assistant-differences' },
      { label: '角色扮演与陪伴应用:差异所在', anchor: 'roleplay-differences' },
      { label: '这份对比无法告诉你的事', anchor: 'limitations' },
      { label: '常见问题', anchor: 'faq' },
      { label: '资料来源', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `本地聊天应用其实是五种不同类型的产品——桌面应用、手机应用、自托管网页界面、个人助手和角色扮演工具——因此PromptQuorum目录中的${CA_TOTAL}款工具按类型分别比较,所用表格与各工具自己的评测出自同一份工具数据生成。`,
          },
          {
            type: 'plain-terms',
            text: '有些应用安装在电脑上,有些安装在手机上,有些需要你自己托管并在浏览器中打开,有些是替你做事的助手,还有些专为角色扮演而设计。把手机应用和服务器端的网页界面放在同一组功能上比较没有意义,所以本指南只在同类之间比较。',
          },
        ],
        items: [
          `${CA_TOTAL}款工具,五种类型:桌面聊天应用(${CA_DESKTOP}款)、手机聊天应用(${CA_MOBILE}款)、网页与CLI聊天客户端(${CA_WEB_CLI}款)、个人助手(${CA_PERSONAL_ASSISTANTS}款)以及角色扮演与陪伴应用(${CA_ROLEPLAY}款)。同时提供多种设备版本的工具(如Enchanted)会出现在它所属的每一种类型中。`,
          '该表由每款工具的记录生成,并对照其官方README或网站核对;破折号表示“文档中未说明”,绝不表示“没有”。手机应用主要依靠应用商店页面来说明,因此它们的单元格最为稀疏。',
          '表中的每个工具名称都链接到它自己的PromptQuorum评测,安装步骤和局限都在那里介绍。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '我们如何比较',
        content: [
          '每款工具的事实——价格、许可证、平台、硬件需求以及特定类别的属性——只在该工具的目录记录中存储一次。下方的对比表由这些记录生成,该工具自己的评测也取自同一条记录,因此两者不会给出不同的数值。',
          '特定类别的属性(例如MCP支持或离线使用)取自各项目的官方README或网站,并对照其中的确切措辞核对。文档没有说明的地方,表格显示破折号而不是猜测;某项声明带有限定条件(仅在路线图中、付费方案,或需要单独的服务器等前提)时,该属性不放入表格,而在该工具的评测中介绍。',
          '只有拥有自己PromptQuorum评测的工具才会出现在表中。对于少数应用(AI On Device、Chatty Mini和LocalAI ApexCreator),目录中没有可供核对的官方页面,因此它们的单元格为破折号。这份对比不对工具排名,因为合适的工具取决于你的限制条件。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '对比表',
        content: '先在下方选择一种工具类型,再横向阅读某一行。点击工具名称即可打开它完整的PromptQuorum评测。',
        component: 'CategoryCompareTable',
      },
      desktopDifferences: {
        id: 'desktop-differences',
        title: '桌面聊天应用:差异所在',
        items: [
          '**自行运行模型。** [AnythingLLM](/zh/power-local-llm/anythingllm-review)、[Ekorbia](/zh/power-local-llm/ekorbia-review)、[GPT4All](/zh/power-local-llm/gpt4all-review)、[Jan](/zh/power-local-llm/jan-review)、[LM Studio](/zh/power-local-llm/lm-studio-review)、[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)、[On Device AI](/zh/power-local-llm/on-device-ai-review)、[Osaurus](/zh/power-local-llm/osaurus-ai-review)和[Sidekick](/zh/power-local-llm/sidekick-review)均在文档中说明可自行运行模型,无需单独的服务器。',
          '**Ollama。** [AnythingLLM](/zh/power-local-llm/anythingllm-review)、[BoltAI](/zh/power-local-llm/boltai-review)、[Cherry Studio](/zh/local-llms/cherry-studio-ai-desktop-client)、[Ekorbia](/zh/power-local-llm/ekorbia-review)、[Enchanted](/zh/power-local-llm/enchanted-review)、[Hanoki](/zh/power-local-llm/hanoki-review)、[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)、[On Device AI](/zh/power-local-llm/on-device-ai-review)和[Osaurus](/zh/power-local-llm/osaurus-ai-review)均在文档中说明可连接Ollama。',
          '**兼容OpenAI的端点。** [AnythingLLM](/zh/power-local-llm/anythingllm-review)、[Ekorbia](/zh/power-local-llm/ekorbia-review)、[Hanoki](/zh/power-local-llm/hanoki-review)和[Sidekick](/zh/power-local-llm/sidekick-review)均在文档中说明可连接兼容OpenAI的端点。',
          '**MCP。** [AnythingLLM](/zh/power-local-llm/anythingllm-review)、[BoltAI](/zh/power-local-llm/boltai-review)、[Cherry Studio](/zh/local-llms/cherry-studio-ai-desktop-client)、[Jan](/zh/power-local-llm/jan-review)、[Locally Uncensored](/zh/power-local-llm/locally-uncensored-review)、[Odysseus](/zh/power-local-llm/odysseus-review)和[Osaurus](/zh/power-local-llm/osaurus-ai-review)均在文档中说明支持MCP。',
          '**与文件对话。** [AnythingLLM](/zh/power-local-llm/anythingllm-review)、[BoltAI](/zh/power-local-llm/boltai-review)、[Ekorbia](/zh/power-local-llm/ekorbia-review)、[GPT4All](/zh/power-local-llm/gpt4all-review)、[Locally Uncensored](/zh/power-local-llm/locally-uncensored-review)、[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)、[On Device AI](/zh/power-local-llm/on-device-ai-review)、[Osaurus](/zh/power-local-llm/osaurus-ai-review)和[Sidekick](/zh/power-local-llm/sidekick-review)均在文档中说明可与你自己的文件对话。',
          '**语音。** [AnythingLLM](/zh/power-local-llm/anythingllm-review)、[BoltAI](/zh/power-local-llm/boltai-review)、[Ekorbia](/zh/power-local-llm/ekorbia-review)、[Enchanted](/zh/power-local-llm/enchanted-review)、[LM Studio](/zh/power-local-llm/lm-studio-review)、[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)、[On Device AI](/zh/power-local-llm/on-device-ai-review)和[Osaurus](/zh/power-local-llm/osaurus-ai-review)均在文档中说明支持语音输入或输出。',
          '**价格。** 在17款桌面应用中,11款免费,5款为免费增值(freemium),1款付费。请查看各自的评测,了解付费方案增加了什么。',
        ],
      },
      mobileDifferences: {
        id: 'mobile-differences',
        title: '手机聊天应用:差异所在',
        items: [
          '**完全离线。** [Arbiter](/zh/power-local-llm/arbiter-local-ai-chat-review)、[Enclave AI](/zh/power-local-llm/enclave-ai-review)、[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)、[Layla](/zh/power-local-llm/layla-review)、[Locally AI](/zh/power-local-llm/locally-ai-review)、[Loci AI](/zh/power-local-llm/loci-ai-review-offline-local-ai)、[Maid](/zh/power-local-llm/maid-review)、[Noema](/zh/power-local-llm/noema-review)、[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)、[On Device AI](/zh/power-local-llm/on-device-ai-review)、[Pocket AI](/zh/power-local-llm/pocket-ai-review)、[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)、[Private LLM](/zh/power-local-llm/private-llm-review)、[Solair AI](/zh/power-local-llm/solair-ai-review)和[ToolNeuron](/zh/power-local-llm/toolneuron-review)均在文档中说明可在设备上完全离线运行。',
          '**导入自己的模型。** [Arbiter](/zh/power-local-llm/arbiter-local-ai-chat-review)、[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)、[Maid](/zh/power-local-llm/maid-review)、[On Device AI](/zh/power-local-llm/on-device-ai-review)、[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)和[ToolNeuron](/zh/power-local-llm/toolneuron-review)均在文档中说明可导入你自己的模型文件。',
          '**应用内下载模型。** [Arbiter](/zh/power-local-llm/arbiter-local-ai-chat-review)、[Enclave AI](/zh/power-local-llm/enclave-ai-review)、[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)、[Liquid Apollo](/zh/power-local-llm/liquid-apollo-review)、[Locally AI](/zh/power-local-llm/locally-ai-review)、[Loci AI](/zh/power-local-llm/loci-ai-review-offline-local-ai)、[Maid](/zh/power-local-llm/maid-review)、[On Device AI](/zh/power-local-llm/on-device-ai-review)、[Pocket AI](/zh/power-local-llm/pocket-ai-review)、[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)和[Private LLM](/zh/power-local-llm/private-llm-review)均在文档中说明可在应用内下载模型。',
          '**图像输入。** [Arbiter](/zh/power-local-llm/arbiter-local-ai-chat-review)、[Enchanted](/zh/power-local-llm/enchanted-review)、[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)、[Locally AI](/zh/power-local-llm/locally-ai-review)、[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)、[On Device AI](/zh/power-local-llm/on-device-ai-review)、[RikkaHub](/zh/power-local-llm/rikkahub-review)、[Solair AI](/zh/power-local-llm/solair-ai-review)和[ToolNeuron](/zh/power-local-llm/toolneuron-review)均在文档中说明支持图像输入。',
          '**语音。** [Enchanted](/zh/power-local-llm/enchanted-review)、[Enclave AI](/zh/power-local-llm/enclave-ai-review)、[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)、[Locally AI](/zh/power-local-llm/locally-ai-review)、[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)、[On Device AI](/zh/power-local-llm/on-device-ai-review)、[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)、[Solair AI](/zh/power-local-llm/solair-ai-review)和[ToolNeuron](/zh/power-local-llm/toolneuron-review)均在文档中说明支持语音输入或输出。',
          '**价格。** 在26款手机应用中,16款免费,6款为免费增值(freemium),4款付费。',
          '**文档。** 大多数手机应用仅有应用商店页面或官网作为文档,其说明远少于README,因此这张表中的破折号比其他表更多。',
        ],
      },
      webDifferences: {
        id: 'web-differences',
        title: '网页与CLI客户端:差异所在',
        items: [
          '**Docker与自托管。** [AnythingLLM](/zh/power-local-llm/anythingllm-review)、[Big-AGI](/zh/local-llms/big-agi-review)、[KoboldCpp](/zh/power-local-llm/koboldcpp-review)、[LibreChat](/zh/power-local-llm/librechat-review)、[LobeChat](/zh/local-llms/lobechat-review)、[NextChat](/zh/local-llms/nextchat-review)、[Odysseus](/zh/power-local-llm/odysseus-review)和[Open WebUI](/zh/local-llms/open-webui-review)均在文档中说明支持Docker或自托管部署。',
          '**多用户。** [LibreChat](/zh/power-local-llm/librechat-review)和[Open WebUI](/zh/local-llms/open-webui-review)均在文档中说明支持多用户。',
          '**Ollama。** [aichat](/zh/power-local-llm/aichat-review)、[AnythingLLM](/zh/power-local-llm/anythingllm-review)、[Big-AGI](/zh/local-llms/big-agi-review)、[Chatbox](/zh/local-llms/chatbox-review)、[LibreChat](/zh/power-local-llm/librechat-review)、[Open WebUI](/zh/local-llms/open-webui-review)和[Page Assist](/zh/local-llms/page-assist-review)均在文档中说明可连接Ollama。',
          '**兼容OpenAI的端点。** [aichat](/zh/power-local-llm/aichat-review)、[AnythingLLM](/zh/power-local-llm/anythingllm-review)、[Big-AGI](/zh/local-llms/big-agi-review)、[LibreChat](/zh/power-local-llm/librechat-review)、[NextChat](/zh/local-llms/nextchat-review)、[Open WebUI](/zh/local-llms/open-webui-review)和[Page Assist](/zh/local-llms/page-assist-review)均在文档中说明可连接兼容OpenAI的端点。',
          '**与文件对话。** [aichat](/zh/power-local-llm/aichat-review)、[AnythingLLM](/zh/power-local-llm/anythingllm-review)、[Chatbox](/zh/local-llms/chatbox-review)、[KoboldCpp](/zh/power-local-llm/koboldcpp-review)、[LibreChat](/zh/power-local-llm/librechat-review)和[Open WebUI](/zh/local-llms/open-webui-review)均在文档中说明可与你自己的文件对话。',
          '**MCP。** [aichat](/zh/power-local-llm/aichat-review)、[AnythingLLM](/zh/power-local-llm/anythingllm-review)、[Chatbox](/zh/local-llms/chatbox-review)、[KoboldCpp](/zh/power-local-llm/koboldcpp-review)、[LibreChat](/zh/power-local-llm/librechat-review)、[LobeChat](/zh/local-llms/lobechat-review)、[NextChat](/zh/local-llms/nextchat-review)、[Odysseus](/zh/power-local-llm/odysseus-review)和[Open WebUI](/zh/local-llms/open-webui-review)均在文档中说明支持MCP。',
        ],
      },
      assistantDifferences: {
        id: 'assistant-differences',
        title: '个人助手:差异所在',
        items: [
          '**本地LLM。** [Jarvis](/zh/power-local-llm/jarvis-mac-review)、[Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)、[Meetily](/zh/power-local-llm/meetily-review)、[nanobot](/zh/power-local-llm/nanobot-review)、[NVIDIA Project G-Assist](/zh/power-local-llm/nvidia-g-assist-review)、[Odysseus](/zh/power-local-llm/odysseus-review)、[Parlor](/zh/power-local-llm/parlor-review)和[Second Me](/zh/power-local-llm/second-me-review)均在文档中说明可配合本地LLM使用。',
          '**语音。** [Jarvis](/zh/power-local-llm/jarvis-mac-review)、[Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)、[NVIDIA Project G-Assist](/zh/power-local-llm/nvidia-g-assist-review)、[Parlor](/zh/power-local-llm/parlor-review)和[Voxa](/zh/power-local-llm/voxa-review)均在文档中说明支持语音输入或输出。',
          '**持久记忆。** [Aori](/zh/power-local-llm/aori-ai-personal-agent-review)、[nanobot](/zh/power-local-llm/nanobot-review)、[Odysseus](/zh/power-local-llm/odysseus-review)、[Second Me](/zh/power-local-llm/second-me-review)和[Voxa](/zh/power-local-llm/voxa-review)均在文档中说明支持持久记忆。',
          '**工具调用与操作。** [Agentic Inbox](/zh/power-local-llm/agentic-inbox-review)、[Aori](/zh/power-local-llm/aori-ai-personal-agent-review)、[Atomic Bot](/zh/power-local-llm/atomic-bot-review)、[Jarvis](/zh/power-local-llm/jarvis-mac-review)、[Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)、[nanobot](/zh/power-local-llm/nanobot-review)、[NVIDIA Project G-Assist](/zh/power-local-llm/nvidia-g-assist-review)、[Odysseus](/zh/power-local-llm/odysseus-review)、[Parlor](/zh/power-local-llm/parlor-review)和[Voxa](/zh/power-local-llm/voxa-review)均在文档中说明支持工具调用或操作。',
        ],
      },
      roleplayDifferences: {
        id: 'roleplay-differences',
        title: '角色扮演与陪伴应用:差异所在',
        items: [
          '**Lorebook。** [Agnai](/zh/power-local-llm/agnai-review)、[Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay)和[RisuAI](/zh/power-local-llm/risuai-review)均在文档中说明支持lorebook或世界设定(world info)。',
          '**群聊。** [Agnai](/zh/power-local-llm/agnai-review)和[RisuAI](/zh/power-local-llm/risuai-review)均在文档中说明支持群聊。',
          '**覆盖范围。** 这一组只有四款工具,而且若干角色扮演功能(例如角色卡)在不同项目中的描述方式各不相同,因此这些内容放在各工具的评测中介绍,而不放入表格。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '这份对比无法告诉你的事',
        items: [
          '它比较的是文档中记载的能力,而不是质量。它无法说明回答有多好、模型在你的设备上跑得多快,或界面有多精致——PromptQuorum没有对所列工具测量过这些内容。',
          '破折号是我们查阅的文档中的空白,不是否定性结论。有些工具可能支持某项功能,只是其README或应用商店页面没有提及。',
          '手机应用变化频繁,主要依靠应用商店页面来说明,因此安装前请查看当前的商店页面和该工具的评测。',
          '工具更新很快。每款工具的评测都注明了核对时所依据的版本,评测更新时本指南也会随之更新。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '为什么桌面、手机和自托管聊天应用要分开比较?',
            a: '它们是不同的产品,面临不同的限制:手机应用在设备上运行小型模型,桌面应用可以运行更大的模型,而自托管网页界面是你为自己或团队运行的服务器。大多数属性只在同一类型内才有意义,如果放进同一张表,大部分单元格会是空的或没有意义。',
          },
          {
            q: '对比表中的破折号是什么意思?',
            a: '它表示该项目自己的文档没有说明这一属性,并不表示该功能缺失;请查看该工具的评测或其代码仓库。',
          },
          {
            q: '为什么同一款工具会出现在多张表中?',
            a: '有些工具提供多种设备的版本——例如桌面版和手机版——因此它们会列在所属的每一种类型下,并附上适用于该类型的属性。',
          },
          {
            q: '这些工具中有带联盟链接(affiliate link)的吗?',
            a: '没有。在撰写本文时,PromptQuorum与这份对比中的任何工具都没有联盟关系,这里的任何链接也不会带来佣金。',
          },
          {
            q: '这份对比多久更新一次?',
            a: '每年更新两次,并且每当所列工具之一的评测更新时也会更新,因为该表与这些评测出自同一份数据生成。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '每款工具的官方README、网站或应用商店页面,列在该工具的PromptQuorum评测中(可从对比表链接进入)。',
          '[PromptQuorum本地AI应用目录](/zh/directory)——该表每一行所依据的记录。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          `[本地软件目录](/zh/directory)——浏览全部${TOTAL_APP_COUNT}款本地AI应用,并按类别筛选。`,
          '[本地推理引擎、运行时与网关对比](/zh/power-local-llm/local-llm-run-serve-compared)——运行这些应用背后模型的工具。',
          '[本地知识与检索工具对比](/zh/power-local-llm/local-llm-knowledge-retrieval-compared)——文档对话、RAG和笔记集成。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地聊天应用与助手对比(2026):桌面、手机、自托管、助手与角色扮演',
      description:
        `并排对比${CA_TOTAL}款本地聊天应用与AI助手:桌面、手机、自托管网页、个人助手和角色扮演,均取自官方文档。`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
      inLanguage: 'zh',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '选择本地聊天应用和助手的用户' },
      about: [
        { '@type': 'Thing', name: '本地LLM聊天应用' },
        { '@type': 'Thing', name: 'AI助手' },
        { '@type': 'Thing', name: '自托管AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '本地聊天应用与助手对比(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
        },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Easiest Desktop Apps',
    title: 'Apps de chat locais e assistentes comparados (2026): desktop, celular, self-hosted, assistentes e roleplay',
    seoTitle: 'Apps de chat locais e assistentes de IA 2026',
    intro:
      `Apps de chat que executam modelos de linguagem no seu próprio hardware não formam uma única categoria de produto: um app de desktop, um app de celular, uma interface web self-hosted, um assistente pessoal e uma ferramenta de roleplay resolvem problemas diferentes, e nenhuma lista de recursos isolada os compara de forma justa. Este guia compara ${CA_TOTAL} ferramentas gratuitas e pagas, um tipo por vez, usando uma tabela comparativa gerada a partir dos mesmos dados da análise própria de cada ferramenta na PromptQuorum, de modo que a tabela e as análises não se contradizem.`,
    metaDescription:
      `Compare ${CA_TOTAL} apps de chat locais e assistentes de IA lado a lado: apps de desktop (LM Studio, Jan, GPT4All), apps de celular, interfaces web self-hosted (Open WebUI, LibreChat), assistentes e roleplay. Licenças, MCP, Ollama e uso offline, segundo a documentação oficial.`,
    twitterDescription:
      'Apps de chat locais e assistentes comparados por tipo — desktop, celular, web self-hosted, assistentes pessoais, roleplay — com MCP, Ollama, uso offline e mais, segundo a documentação oficial.',
    audience:
      'Desenvolvedores, entusiastas de self-hosting e usuários preocupados com privacidade que estão escolhendo um app de chat local ou um assistente para o computador, o celular ou o servidor e querem as diferenças apresentadas por tipo de ferramenta, e não em uma lista única misturada.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'apps de chat locais comparados',
    targetKeywords: [
      'melhor app de chat com ia local',
      'lm studio vs jan vs gpt4all',
      'open webui vs librechat',
      'app de chat com ia offline iphone android',
      'comparação de clientes de chat para llm local',
      'alternativa self-hosted ao chatgpt',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      `**Os ${CA_TOTAL} apps de chat locais e assistentes do diretório da PromptQuorum se dividem em cinco tipos que devem ser comparados separadamente: apps de chat para desktop (${CA_DESKTOP}), apps de chat para celular (${CA_MOBILE}), clientes de chat web e CLI (${CA_WEB_CLI}), assistentes pessoais (${CA_PERSONAL_ASSISTANTS}) e apps de roleplay e companhia (${CA_ROLEPLAY}).** Entre os apps de desktop, 7 documentam suporte a MCP e 9 documentam Ollama; entre os apps de celular, 15 documentam uso totalmente offline; entre os clientes web, 8 documentam implantação com Docker. Use a tabela comparativa abaixo e leia a análise de cada ferramenta antes de instalá-la.`,
    quickAnswerTop: {
      en: {
        question: 'Qual app de chat local devo usar?',
        answer:
          'Depende de onde você quer conversar, então compare um tipo por vez. Escolha pela restrição que mais importa — o dispositivo (computador, celular ou servidor), funcionar offline, suporte a MCP, conexão com o Ollama ou com o seu próprio endpoint, ou conversar com seus arquivos — e use a tabela abaixo, gerada a partir da documentação oficial de cada ferramenta.',
        bullets: [
          'Apps de chat para desktop: 17 ferramentas comparadas em execução própria de modelos, Ollama, endpoints, MCP, chat com arquivos e voz.',
          'Apps de chat para celular: 26 ferramentas comparadas em uso offline, importação de modelos, downloads dentro do app, entrada de imagem e voz.',
          'Clientes web e CLI: 13 ferramentas comparadas em Docker, multiusuário, Ollama, endpoints, chat com arquivos e MCP.',
          'Assistentes pessoais (13) e apps de roleplay (4) são comparados nos recursos que importam para cada tipo.',
          'Um traço (—) significa que a documentação do projeto não informa o recurso, e não que ele não exista.',
        ],
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Como comparamos', anchor: 'how-we-compared' },
      { label: 'Tabela comparativa', anchor: 'comparison-table' },
      { label: 'Apps de chat para desktop: o que muda', anchor: 'desktop-differences' },
      { label: 'Apps de chat para celular: o que muda', anchor: 'mobile-differences' },
      { label: 'Clientes web e CLI: o que muda', anchor: 'web-differences' },
      { label: 'Assistentes pessoais: o que muda', anchor: 'assistant-differences' },
      { label: 'Roleplay e companhia: o que muda', anchor: 'roleplay-differences' },
      { label: 'O que esta comparação não pode dizer', anchor: 'limitations' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `Apps de chat locais são cinco tipos diferentes de produto — apps de desktop, apps de celular, interfaces web self-hosted, assistentes pessoais e ferramentas de roleplay — por isso as ${CA_TOTAL} ferramentas do diretório da PromptQuorum são comparadas dentro de cada tipo, com uma tabela gerada a partir dos mesmos dados de ferramenta da análise própria de cada uma.`,
          },
          {
            type: 'plain-terms',
            text: 'Alguns apps você instala no computador, outros no celular, outros você hospeda por conta própria e abre no navegador, alguns funcionam como um assistente que faz coisas por você e outros foram feitos para roleplay de personagens. Comparar um app de celular com uma interface web no servidor nos mesmos recursos não faz sentido, então este guia compara itens do mesmo tipo.',
          },
        ],
        items: [
          `${CA_TOTAL} ferramentas, cinco tipos: apps de chat para desktop (${CA_DESKTOP}), apps de chat para celular (${CA_MOBILE}), clientes de chat web e CLI (${CA_WEB_CLI}), assistentes pessoais (${CA_PERSONAL_ASSISTANTS}) e apps de roleplay e companhia (${CA_ROLEPLAY}). Uma ferramenta disponível em vários dispositivos, como o Enchanted, aparece em cada tipo a que pertence.`,
          'A tabela é gerada a partir do registro de cada ferramenta e conferida com o README ou o site oficial; um traço significa "não informado na documentação", nunca "não". Os apps de celular são documentados principalmente por páginas de loja, então suas células são as mais esparsas.',
          'Cada nome de ferramenta na tabela leva à sua própria análise na PromptQuorum, onde estão as etapas de instalação e os limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Como comparamos',
        content: [
          'Os fatos de cada ferramenta — preço, licença, plataformas, requisitos de hardware e atributos específicos da categoria — são armazenados uma única vez, no registro dessa ferramenta no diretório. A tabela comparativa abaixo é gerada a partir desses registros, e a análise própria da ferramenta usa o mesmo registro, de modo que as duas não podem informar valores diferentes.',
          'Os atributos específicos da categoria (por exemplo, suporte a MCP ou uso offline) foram retirados do README ou do site oficial de cada projeto e conferidos com a redação exata ali presente. Onde a documentação é omissa, a tabela mostra um traço em vez de adivinhar; onde uma afirmação vem com ressalvas (apenas no roadmap, um plano pago ou um requisito como um servidor separado), o atributo fica de fora da tabela e é tratado na análise da ferramenta.',
          'Apenas ferramentas com análise própria na PromptQuorum estão na tabela. Para alguns apps (AI On Device, Chatty Mini e LocalAI ApexCreator), o diretório não tem uma página oficial para conferir, então suas células são traços. A comparação não classifica as ferramentas em ranking, porque a escolha certa depende da sua restrição.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa',
        content: 'Escolha um tipo de ferramenta abaixo e leia ao longo de uma linha. Clique no nome de uma ferramenta para abrir sua análise completa na PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      desktopDifferences: {
        id: 'desktop-differences',
        title: 'Apps de chat para desktop: o que muda',
        items: [
          '**Executa modelos por conta própria.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [Ekorbia](/pt/power-local-llm/ekorbia-review), [GPT4All](/pt/power-local-llm/gpt4all-review), [Jan](/pt/power-local-llm/jan-review), [LM Studio](/pt/power-local-llm/lm-studio-review), [Off Grid AI](/pt/power-local-llm/off-grid-ai-review), [On Device AI](/pt/power-local-llm/on-device-ai-review), [Osaurus](/pt/power-local-llm/osaurus-ai-review) e [Sidekick](/pt/power-local-llm/sidekick-review) documentam a execução de modelos por conta própria, sem um servidor separado.',
          '**Ollama.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [BoltAI](/pt/power-local-llm/boltai-review), [Cherry Studio](/pt/local-llms/cherry-studio-ai-desktop-client), [Ekorbia](/pt/power-local-llm/ekorbia-review), [Enchanted](/pt/power-local-llm/enchanted-review), [Hanoki](/pt/power-local-llm/hanoki-review), [Off Grid AI](/pt/power-local-llm/off-grid-ai-review), [On Device AI](/pt/power-local-llm/on-device-ai-review) e [Osaurus](/pt/power-local-llm/osaurus-ai-review) documentam a conexão com o Ollama.',
          '**Endpoints compatíveis com OpenAI.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [Ekorbia](/pt/power-local-llm/ekorbia-review), [Hanoki](/pt/power-local-llm/hanoki-review) e [Sidekick](/pt/power-local-llm/sidekick-review) documentam a conexão com endpoints compatíveis com OpenAI.',
          '**MCP.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [BoltAI](/pt/power-local-llm/boltai-review), [Cherry Studio](/pt/local-llms/cherry-studio-ai-desktop-client), [Jan](/pt/power-local-llm/jan-review), [Locally Uncensored](/pt/power-local-llm/locally-uncensored-review), [Odysseus](/pt/power-local-llm/odysseus-review) e [Osaurus](/pt/power-local-llm/osaurus-ai-review) documentam suporte a MCP.',
          '**Chat com seus arquivos.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [BoltAI](/pt/power-local-llm/boltai-review), [Ekorbia](/pt/power-local-llm/ekorbia-review), [GPT4All](/pt/power-local-llm/gpt4all-review), [Locally Uncensored](/pt/power-local-llm/locally-uncensored-review), [Off Grid AI](/pt/power-local-llm/off-grid-ai-review), [On Device AI](/pt/power-local-llm/on-device-ai-review), [Osaurus](/pt/power-local-llm/osaurus-ai-review) e [Sidekick](/pt/power-local-llm/sidekick-review) documentam a conversa com seus próprios arquivos.',
          '**Voz.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [BoltAI](/pt/power-local-llm/boltai-review), [Ekorbia](/pt/power-local-llm/ekorbia-review), [Enchanted](/pt/power-local-llm/enchanted-review), [LM Studio](/pt/power-local-llm/lm-studio-review), [Off Grid AI](/pt/power-local-llm/off-grid-ai-review), [On Device AI](/pt/power-local-llm/on-device-ai-review) e [Osaurus](/pt/power-local-llm/osaurus-ai-review) documentam entrada ou saída de voz.',
          '**Preço.** Dos 17 apps de desktop, 11 são gratuitos, 5 freemium e 1 pago. Veja em cada análise o que o plano pago acrescenta.',
        ],
      },
      mobileDifferences: {
        id: 'mobile-differences',
        title: 'Apps de chat para celular: o que muda',
        items: [
          '**Totalmente offline.** [Arbiter](/pt/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/pt/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review), [Layla](/pt/power-local-llm/layla-review), [Locally AI](/pt/power-local-llm/locally-ai-review), [Loci AI](/pt/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/pt/power-local-llm/maid-review), [Noema](/pt/power-local-llm/noema-review), [Off Grid AI](/pt/power-local-llm/off-grid-ai-review), [On Device AI](/pt/power-local-llm/on-device-ai-review), [Pocket AI](/pt/power-local-llm/pocket-ai-review), [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), [Private LLM](/pt/power-local-llm/private-llm-review), [Solair AI](/pt/power-local-llm/solair-ai-review) e [ToolNeuron](/pt/power-local-llm/toolneuron-review) documentam a execução totalmente offline no dispositivo.',
          '**Importar seus próprios modelos.** [Arbiter](/pt/power-local-llm/arbiter-local-ai-chat-review), [Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review), [Maid](/pt/power-local-llm/maid-review), [On Device AI](/pt/power-local-llm/on-device-ai-review), [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) e [ToolNeuron](/pt/power-local-llm/toolneuron-review) documentam a importação de seus próprios arquivos de modelo.',
          '**Download de modelos dentro do app.** [Arbiter](/pt/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/pt/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review), [Liquid Apollo](/pt/power-local-llm/liquid-apollo-review), [Locally AI](/pt/power-local-llm/locally-ai-review), [Loci AI](/pt/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/pt/power-local-llm/maid-review), [On Device AI](/pt/power-local-llm/on-device-ai-review), [Pocket AI](/pt/power-local-llm/pocket-ai-review), [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) e [Private LLM](/pt/power-local-llm/private-llm-review) documentam o download de modelos dentro do app.',
          '**Entrada de imagem.** [Arbiter](/pt/power-local-llm/arbiter-local-ai-chat-review), [Enchanted](/pt/power-local-llm/enchanted-review), [Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/pt/power-local-llm/locally-ai-review), [Off Grid AI](/pt/power-local-llm/off-grid-ai-review), [On Device AI](/pt/power-local-llm/on-device-ai-review), [RikkaHub](/pt/power-local-llm/rikkahub-review), [Solair AI](/pt/power-local-llm/solair-ai-review) e [ToolNeuron](/pt/power-local-llm/toolneuron-review) documentam entrada de imagem.',
          '**Voz.** [Enchanted](/pt/power-local-llm/enchanted-review), [Enclave AI](/pt/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/pt/power-local-llm/locally-ai-review), [Off Grid AI](/pt/power-local-llm/off-grid-ai-review), [On Device AI](/pt/power-local-llm/on-device-ai-review), [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), [Solair AI](/pt/power-local-llm/solair-ai-review) e [ToolNeuron](/pt/power-local-llm/toolneuron-review) documentam entrada ou saída de voz.',
          '**Preço.** Dos 26 apps de celular, 16 são gratuitos, 6 freemium e 4 pagos.',
          '**Documentação.** A maioria dos apps de celular é documentada apenas pela página da loja ou pelo site, que informa muito menos do que um README, por isso esta tabela tem mais traços que as outras.',
        ],
      },
      webDifferences: {
        id: 'web-differences',
        title: 'Clientes web e CLI: o que muda',
        items: [
          '**Docker e self-hosting.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [Big-AGI](/pt/local-llms/big-agi-review), [KoboldCpp](/pt/power-local-llm/koboldcpp-review), [LibreChat](/pt/power-local-llm/librechat-review), [LobeChat](/pt/local-llms/lobechat-review), [NextChat](/pt/local-llms/nextchat-review), [Odysseus](/pt/power-local-llm/odysseus-review) e [Open WebUI](/pt/local-llms/open-webui-review) documentam implantação com Docker ou self-hosted.',
          '**Vários usuários.** [LibreChat](/pt/power-local-llm/librechat-review) e [Open WebUI](/pt/local-llms/open-webui-review) documentam suporte multiusuário.',
          '**Ollama.** [aichat](/pt/power-local-llm/aichat-review), [AnythingLLM](/pt/power-local-llm/anythingllm-review), [Big-AGI](/pt/local-llms/big-agi-review), [Chatbox](/pt/local-llms/chatbox-review), [LibreChat](/pt/power-local-llm/librechat-review), [Open WebUI](/pt/local-llms/open-webui-review) e [Page Assist](/pt/local-llms/page-assist-review) documentam a conexão com o Ollama.',
          '**Endpoints compatíveis com OpenAI.** [aichat](/pt/power-local-llm/aichat-review), [AnythingLLM](/pt/power-local-llm/anythingllm-review), [Big-AGI](/pt/local-llms/big-agi-review), [LibreChat](/pt/power-local-llm/librechat-review), [NextChat](/pt/local-llms/nextchat-review), [Open WebUI](/pt/local-llms/open-webui-review) e [Page Assist](/pt/local-llms/page-assist-review) documentam a conexão com endpoints compatíveis com OpenAI.',
          '**Chat com seus arquivos.** [aichat](/pt/power-local-llm/aichat-review), [AnythingLLM](/pt/power-local-llm/anythingllm-review), [Chatbox](/pt/local-llms/chatbox-review), [KoboldCpp](/pt/power-local-llm/koboldcpp-review), [LibreChat](/pt/power-local-llm/librechat-review) e [Open WebUI](/pt/local-llms/open-webui-review) documentam a conversa com seus próprios arquivos.',
          '**MCP.** [aichat](/pt/power-local-llm/aichat-review), [AnythingLLM](/pt/power-local-llm/anythingllm-review), [Chatbox](/pt/local-llms/chatbox-review), [KoboldCpp](/pt/power-local-llm/koboldcpp-review), [LibreChat](/pt/power-local-llm/librechat-review), [LobeChat](/pt/local-llms/lobechat-review), [NextChat](/pt/local-llms/nextchat-review), [Odysseus](/pt/power-local-llm/odysseus-review) e [Open WebUI](/pt/local-llms/open-webui-review) documentam suporte a MCP.',
        ],
      },
      assistantDifferences: {
        id: 'assistant-differences',
        title: 'Assistentes pessoais: o que muda',
        items: [
          '**LLMs locais.** [Jarvis](/pt/power-local-llm/jarvis-mac-review), [Khoj](/pt/power-local-llm/khoj-ai-second-brain-review), [Meetily](/pt/power-local-llm/meetily-review), [nanobot](/pt/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/pt/power-local-llm/nvidia-g-assist-review), [Odysseus](/pt/power-local-llm/odysseus-review), [Parlor](/pt/power-local-llm/parlor-review) e [Second Me](/pt/power-local-llm/second-me-review) documentam o trabalho com LLMs locais.',
          '**Voz.** [Jarvis](/pt/power-local-llm/jarvis-mac-review), [Khoj](/pt/power-local-llm/khoj-ai-second-brain-review), [NVIDIA Project G-Assist](/pt/power-local-llm/nvidia-g-assist-review), [Parlor](/pt/power-local-llm/parlor-review) e [Voxa](/pt/power-local-llm/voxa-review) documentam entrada ou saída de voz.',
          '**Memória persistente.** [Aori](/pt/power-local-llm/aori-ai-personal-agent-review), [nanobot](/pt/power-local-llm/nanobot-review), [Odysseus](/pt/power-local-llm/odysseus-review), [Second Me](/pt/power-local-llm/second-me-review) e [Voxa](/pt/power-local-llm/voxa-review) documentam memória persistente.',
          '**Uso de ferramentas e ações.** [Agentic Inbox](/pt/power-local-llm/agentic-inbox-review), [Aori](/pt/power-local-llm/aori-ai-personal-agent-review), [Atomic Bot](/pt/power-local-llm/atomic-bot-review), [Jarvis](/pt/power-local-llm/jarvis-mac-review), [Khoj](/pt/power-local-llm/khoj-ai-second-brain-review), [nanobot](/pt/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/pt/power-local-llm/nvidia-g-assist-review), [Odysseus](/pt/power-local-llm/odysseus-review), [Parlor](/pt/power-local-llm/parlor-review) e [Voxa](/pt/power-local-llm/voxa-review) documentam uso de ferramentas ou ações.',
        ],
      },
      roleplayDifferences: {
        id: 'roleplay-differences',
        title: 'Roleplay e companhia: o que muda',
        items: [
          '**Lorebooks.** [Agnai](/pt/power-local-llm/agnai-review), [Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay) e [RisuAI](/pt/power-local-llm/risuai-review) documentam suporte a lorebook ou world-info.',
          '**Chats em grupo.** [Agnai](/pt/power-local-llm/agnai-review) e [RisuAI](/pt/power-local-llm/risuai-review) documentam chats em grupo.',
          '**Cobertura.** Apenas quatro ferramentas estão neste grupo, e vários recursos de roleplay (como cartões de personagem) são descritos de formas diferentes entre os projetos, por isso são tratados na análise de cada ferramenta e não na tabela.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'O que esta comparação não pode dizer',
        items: [
          'Ela compara recursos documentados, não qualidade. Não diz nada sobre a qualidade das respostas, a velocidade de um modelo no seu dispositivo ou o acabamento da interface — a PromptQuorum não mediu esses pontos nas ferramentas listadas.',
          'Os traços são lacunas na documentação que conferimos, não constatações negativas. Algumas ferramentas podem oferecer um recurso que seu README ou página de loja não menciona.',
          'Os apps de celular mudam com frequência e são descritos principalmente por suas páginas de loja, então confira a página atual e a análise da ferramenta antes de instalar.',
          'As ferramentas mudam rápido. A análise de cada ferramenta informa a versão contra a qual foi conferida, e este guia é atualizado quando uma análise é atualizada.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Por que apps de chat para desktop, celular e self-hosted são comparados separadamente?',
            a: 'São produtos diferentes, com restrições diferentes: um app de celular executa modelos pequenos no dispositivo, um app de desktop pode executar modelos maiores, e uma interface web self-hosted é um servidor que você executa para si mesmo ou para uma equipe. A maioria dos atributos só faz sentido dentro de um tipo, então compará-los em uma única tabela deixaria a maior parte das células vazia ou sem sentido.',
          },
          {
            q: 'O que significa um traço na tabela comparativa?',
            a: 'Significa que a documentação do próprio projeto não informa esse atributo. Não significa que o recurso não exista; consulte a análise da ferramenta ou o repositório dela.',
          },
          {
            q: 'Por que uma ferramenta aparece em mais de uma tabela?',
            a: 'Algumas ferramentas estão disponíveis em mais de um tipo de dispositivo — por exemplo, uma versão para desktop e outra para celular — e por isso são listadas em cada tipo a que pertencem, com os atributos que se aplicam a esse tipo.',
          },
          {
            q: 'Alguma dessas ferramentas tem link de afiliado?',
            a: 'Não. A PromptQuorum não tem nenhuma relação de afiliação com qualquer ferramenta desta comparação até o momento da redação, e nenhum link aqui gera comissão.',
          },
          {
            q: 'Com que frequência esta comparação é atualizada?',
            a: 'Ela é atualizada duas vezes por ano e sempre que a análise de uma das ferramentas listadas é atualizada, porque a tabela é gerada a partir dos mesmos dados dessas análises.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'O README, o site ou a página de loja oficial de cada ferramenta, listados na análise da ferramenta na PromptQuorum (com link a partir da tabela comparativa).',
          '[Diretório de apps de IA local da PromptQuorum](/pt/directory) — o registro a partir do qual cada linha da tabela é gerada.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          `[Diretório de software local](/pt/directory) — navegue por ${TOTAL_APP_COUNT} apps de IA local e filtre por categoria.`,
          '[Motores de inferência, runtimes e gateways locais comparados](/pt/power-local-llm/local-llm-run-serve-compared) — as ferramentas que executam os modelos por trás desses apps.',
          '[Ferramentas locais de conhecimento e recuperação comparadas](/pt/power-local-llm/local-llm-knowledge-retrieval-compared) — chat com documentos, RAG e integrações de notas.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Apps de chat locais e assistentes comparados (2026): desktop, celular, self-hosted, assistentes e roleplay',
      description:
        `Compare ${CA_TOTAL} apps de chat locais e assistentes de IA lado a lado: desktop, celular, web self-hosted, assistentes pessoais e roleplay, segundo a documentação oficial.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuários que escolhem apps de chat locais e assistentes' },
      about: [
        { '@type': 'Thing', name: 'Apps de chat com LLM local' },
        { '@type': 'Thing', name: 'Assistentes de IA' },
        { '@type': 'Thing', name: 'IA self-hosted' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Apps de chat locais e assistentes comparados (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
        },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Easiest Desktop Apps',
    title: 'مقارنة تطبيقات الدردشة والمساعدات المحلية (2026): سطح المكتب والجوال والاستضافة الذاتية والمساعدات ولعب الأدوار',
    seoTitle: 'مقارنة تطبيقات الدردشة والمساعدات المحلية 2026',
    intro:
      `تطبيقات الدردشة التي تشغّل نماذج اللغة على عتادك الخاص ليست فئة منتجات واحدة: فتطبيق سطح المكتب وتطبيق الهاتف وواجهة الويب المستضافة ذاتيًا والمساعد الشخصي وأداة لعب الأدوار تحلّ مشكلات مختلفة، ولا توجد قائمة ميزات واحدة تقارن بينها بإنصاف. يقارن هذا الدليل ${CA_TOTAL} أداة مجانية ومدفوعة، نوعًا بعد نوع، عبر جدول مقارنة مُولَّد من البيانات نفسها التي تستند إليها مراجعة PromptQuorum لكل أداة، بحيث لا يتعارض الجدول مع المراجعات.`,
    metaDescription:
      `قارن ${CA_TOTAL} تطبيق دردشة محليًا ومساعد ذكاء اصطناعي: تطبيقات سطح المكتب (LM Studio وJan وGPT4All) وتطبيقات الهاتف وواجهات الويب المستضافة ذاتيًا (Open WebUI وLibreChat) والمساعدات وأدوات لعب الأدوار. التراخيص وMCP وOllama والعمل دون اتصال، من الوثائق الرسمية.`,
    twitterDescription:
      'مقارنة تطبيقات الدردشة والمساعدات المحلية حسب النوع — سطح المكتب والجوال والويب المستضاف ذاتيًا والمساعدات الشخصية ولعب الأدوار — مع MCP وOllama والعمل دون اتصال وغيرها، من الوثائق الرسمية.',
    audience:
      'المطورون والمستخدمون الذين يستضيفون خدماتهم بأنفسهم والحريصون على الخصوصية ممن يختارون تطبيق دردشة أو مساعدًا محليًا لحاسوبهم أو هاتفهم أو خادمهم، ويريدون عرض الفروق لكل نوع من الأدوات لا قائمة واحدة ممزوجة.',
    readTime: '12 دقيقة للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مقارنة تطبيقات الدردشة المحلية',
    targetKeywords: [
      'أفضل تطبيق دردشة ذكاء اصطناعي محلي',
      'lm studio vs jan vs gpt4all',
      'open webui vs librechat',
      'تطبيق دردشة ذكاء اصطناعي دون اتصال آيفون أندرويد',
      'مقارنة عملاء دردشة النماذج اللغوية المحلية',
      'بديل ChatGPT مستضاف ذاتيًا',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      `**تنقسم تطبيقات الدردشة والمساعدات المحلية الـ${CA_TOTAL} في دليل PromptQuorum إلى خمسة أنواع ينبغي مقارنتها كل على حدة: تطبيقات دردشة سطح المكتب (${CA_DESKTOP})، وتطبيقات دردشة الجوال (${CA_MOBILE})، وعملاء الدردشة عبر الويب وسطر الأوامر (${CA_WEB_CLI})، والمساعدات الشخصية (${CA_PERSONAL_ASSISTANTS})، وتطبيقات لعب الأدوار والرفقة (${CA_ROLEPLAY}).** من بين تطبيقات سطح المكتب، يوثّق 7 منها دعم MCP ويوثّق 9 دعم Ollama؛ ومن بين تطبيقات الهاتف، يوثّق 15 العمل دون اتصال بالكامل؛ ومن بين عملاء الويب، يوثّق 8 النشر عبر Docker. استخدم جدول المقارنة أدناه، واقرأ مراجعة كل أداة قبل تثبيتها.`,
    quickAnswerTop: {
      en: {
        question: 'أي تطبيق دردشة محلي ينبغي أن أستخدم؟',
        answer:
          'يعتمد ذلك على المكان الذي تريد الدردشة منه، لذا قارن ضمن نوع واحد في كل مرة. اختر وفق القيد الأهم لك — الجهاز (حاسوب أو هاتف أو خادم)، أو العمل دون اتصال، أو دعم MCP، أو الاتصال بـ Ollama أو بنقطة نهاية خاصة بك، أو الدردشة مع ملفاتك — واستعن بالجدول أدناه المُولَّد من الوثائق الرسمية لكل أداة.',
        bullets: [
          'تطبيقات دردشة سطح المكتب: 17 أداة تُقارَن من حيث تشغيل النماذج بنفسها وOllama ونقاط النهاية وMCP والدردشة مع الملفات والصوت.',
          'تطبيقات دردشة الجوال: 26 أداة تُقارَن من حيث العمل دون اتصال واستيراد النماذج والتنزيل داخل التطبيق وإدخال الصور والصوت.',
          'عملاء الويب وسطر الأوامر: 13 أداة تُقارَن من حيث Docker وتعدد المستخدمين وOllama ونقاط النهاية والدردشة مع الملفات وMCP.',
          'المساعدات الشخصية (13) وتطبيقات لعب الأدوار (4) تُقارَن وفق الميزات الأهم لكل منها.',
          'الشرطة (—) تعني أن وثائق المشروع لا تذكر هذه الميزة، لا أن الميزة غير موجودة.',
        ],
      },
    },
    toc: [
      { label: 'باختصار', anchor: 'tldr' },
      { label: 'كيف أجرينا المقارنة', anchor: 'how-we-compared' },
      { label: 'جدول المقارنة', anchor: 'comparison-table' },
      { label: 'تطبيقات دردشة سطح المكتب: ما الذي يختلف', anchor: 'desktop-differences' },
      { label: 'تطبيقات دردشة الجوال: ما الذي يختلف', anchor: 'mobile-differences' },
      { label: 'عملاء الويب وسطر الأوامر: ما الذي يختلف', anchor: 'web-differences' },
      { label: 'المساعدات الشخصية: ما الذي يختلف', anchor: 'assistant-differences' },
      { label: 'لعب الأدوار والرفقة: ما الذي يختلف', anchor: 'roleplay-differences' },
      { label: 'ما لا تخبرك به هذه المقارنة', anchor: 'limitations' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'باختصار',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `تطبيقات الدردشة المحلية خمسة أنواع مختلفة من المنتجات — تطبيقات سطح المكتب وتطبيقات الهاتف وواجهات الويب المستضافة ذاتيًا والمساعدات الشخصية وأدوات لعب الأدوار — ولذلك تُقارَن الأدوات الـ${CA_TOTAL} في دليل PromptQuorum داخل كل نوع، عبر جدول مُولَّد من بيانات الأداة نفسها التي تستند إليها مراجعتها.`,
          },
          {
            type: 'plain-terms',
            text: 'بعض التطبيقات تثبّتها على حاسوب، وبعضها على هاتف، وبعضها تستضيفه بنفسك وتفتحه في المتصفح، وبعضها يعمل مساعدًا ينجز مهامًا نيابةً عنك، وبعضها مصمَّم للعب أدوار الشخصيات. ولا معنى لمقارنة تطبيق هاتف بواجهة ويب على الخادم وفق الميزات نفسها، لذا يقارن هذا الدليل الأشياء المتماثلة.',
          },
        ],
        items: [
          `${CA_TOTAL} أداة في خمسة أنواع: تطبيقات دردشة سطح المكتب (${CA_DESKTOP})، وتطبيقات دردشة الجوال (${CA_MOBILE})، وعملاء الدردشة عبر الويب وسطر الأوامر (${CA_WEB_CLI})، والمساعدات الشخصية (${CA_PERSONAL_ASSISTANTS})، وتطبيقات لعب الأدوار والرفقة (${CA_ROLEPLAY}). والأداة المتاحة على أجهزة عدة، مثل Enchanted، تظهر في كل نوع تنتمي إليه.`,
          'يُولَّد الجدول من سجل كل أداة ويُراجَع مقابل ملف README أو الموقع الرسمي لها؛ والشرطة تعني «غير مذكور في الوثائق»، ولا تعني «لا» أبدًا. وتوثَّق تطبيقات الهاتف في الغالب عبر صفحاتها في المتاجر، لذا فخلاياها هي الأقل امتلاءً.',
          'يرتبط اسم كل أداة في الجدول بمراجعتها الخاصة في PromptQuorum، وهناك تجد خطوات التثبيت والحدود.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'كيف أجرينا المقارنة',
        content: [
          'تُخزَّن حقائق كل أداة — السعر والرخصة والمنصات ومتطلبات العتاد والسمات الخاصة بالفئة — مرة واحدة في سجل تلك الأداة بالدليل. وجدول المقارنة أدناه مُولَّد من تلك السجلات، وتعتمد مراجعة الأداة نفسها على السجل ذاته، ولذلك لا يمكن أن يذكرا قيمًا مختلفة.',
          'أُخذت السمات الخاصة بالفئة (مثل دعم MCP أو العمل دون اتصال) من ملف README الرسمي لكل مشروع أو موقعه، وتم التحقق منها مقابل الصياغة الدقيقة هناك. وحيث تصمت الوثائق يعرض الجدول شرطة بدل التخمين؛ وحيث يكون الادعاء مقيّدًا (خارطة طريق فقط، أو خطة مدفوعة، أو شرط مثل خادم منفصل) تُستبعد السمة من الجدول وتُعالَج في مراجعة الأداة.',
          'لا يظهر في الجدول إلا الأدوات التي لها مراجعة خاصة في PromptQuorum. وبالنسبة إلى بعض التطبيقات (AI On Device وChatty Mini وLocalAI ApexCreator) لا توجد في الدليل صفحة رسمية للتحقق منها، لذا فخلاياها شرطات. ولا تصنّف المقارنة الأدوات، لأن الأداة المناسبة تعتمد على القيد الذي يهمك.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول المقارنة',
        content: 'اختر نوع الأداة أدناه، ثم اقرأ الصف بالعرض. انقر على اسم الأداة لفتح مراجعتها الكاملة في PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      desktopDifferences: {
        id: 'desktop-differences',
        title: 'تطبيقات دردشة سطح المكتب: ما الذي يختلف',
        items: [
          '**تشغيل النماذج بنفسها.** [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [Ekorbia](/ar/power-local-llm/ekorbia-review)، [GPT4All](/ar/power-local-llm/gpt4all-review)، [Jan](/ar/power-local-llm/jan-review)، [LM Studio](/ar/power-local-llm/lm-studio-review)، [Off Grid AI](/ar/power-local-llm/off-grid-ai-review)، [On Device AI](/ar/power-local-llm/on-device-ai-review)، [Osaurus](/ar/power-local-llm/osaurus-ai-review) و[Sidekick](/ar/power-local-llm/sidekick-review) توثّق تشغيل النماذج بنفسها دون خادم منفصل.',
          '**Ollama.** [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [BoltAI](/ar/power-local-llm/boltai-review)، [Cherry Studio](/ar/local-llms/cherry-studio-ai-desktop-client)، [Ekorbia](/ar/power-local-llm/ekorbia-review)، [Enchanted](/ar/power-local-llm/enchanted-review)، [Hanoki](/ar/power-local-llm/hanoki-review)، [Off Grid AI](/ar/power-local-llm/off-grid-ai-review)، [On Device AI](/ar/power-local-llm/on-device-ai-review) و[Osaurus](/ar/power-local-llm/osaurus-ai-review) توثّق الاتصال بـ Ollama.',
          '**نقاط النهاية المتوافقة مع OpenAI.** [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [Ekorbia](/ar/power-local-llm/ekorbia-review)، [Hanoki](/ar/power-local-llm/hanoki-review) و[Sidekick](/ar/power-local-llm/sidekick-review) توثّق الاتصال بنقاط النهاية المتوافقة مع OpenAI.',
          '**MCP.** [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [BoltAI](/ar/power-local-llm/boltai-review)، [Cherry Studio](/ar/local-llms/cherry-studio-ai-desktop-client)، [Jan](/ar/power-local-llm/jan-review)، [Locally Uncensored](/ar/power-local-llm/locally-uncensored-review)، [Odysseus](/ar/power-local-llm/odysseus-review) و[Osaurus](/ar/power-local-llm/osaurus-ai-review) توثّق دعم MCP.',
          '**الدردشة مع ملفاتك.** [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [BoltAI](/ar/power-local-llm/boltai-review)، [Ekorbia](/ar/power-local-llm/ekorbia-review)، [GPT4All](/ar/power-local-llm/gpt4all-review)، [Locally Uncensored](/ar/power-local-llm/locally-uncensored-review)، [Off Grid AI](/ar/power-local-llm/off-grid-ai-review)، [On Device AI](/ar/power-local-llm/on-device-ai-review)، [Osaurus](/ar/power-local-llm/osaurus-ai-review) و[Sidekick](/ar/power-local-llm/sidekick-review) توثّق الدردشة مع ملفاتك الخاصة.',
          '**الصوت.** [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [BoltAI](/ar/power-local-llm/boltai-review)، [Ekorbia](/ar/power-local-llm/ekorbia-review)، [Enchanted](/ar/power-local-llm/enchanted-review)، [LM Studio](/ar/power-local-llm/lm-studio-review)، [Off Grid AI](/ar/power-local-llm/off-grid-ai-review)، [On Device AI](/ar/power-local-llm/on-device-ai-review) و[Osaurus](/ar/power-local-llm/osaurus-ai-review) توثّق الإدخال أو الإخراج الصوتي.',
          '**السعر.** من بين تطبيقات سطح المكتب الـ17، 11 مجانية و5 بنموذج freemium وواحد مدفوع. راجع مراجعة كل أداة لمعرفة ما تضيفه الخطة المدفوعة.',
        ],
      },
      mobileDifferences: {
        id: 'mobile-differences',
        title: 'تطبيقات دردشة الجوال: ما الذي يختلف',
        items: [
          '**دون اتصال بالكامل.** [Arbiter](/ar/power-local-llm/arbiter-local-ai-chat-review)، [Enclave AI](/ar/power-local-llm/enclave-ai-review)، [Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)، [Layla](/ar/power-local-llm/layla-review)، [Locally AI](/ar/power-local-llm/locally-ai-review)، [Loci AI](/ar/power-local-llm/loci-ai-review-offline-local-ai)، [Maid](/ar/power-local-llm/maid-review)، [Noema](/ar/power-local-llm/noema-review)، [Off Grid AI](/ar/power-local-llm/off-grid-ai-review)، [On Device AI](/ar/power-local-llm/on-device-ai-review)، [Pocket AI](/ar/power-local-llm/pocket-ai-review)، [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)، [Private LLM](/ar/power-local-llm/private-llm-review)، [Solair AI](/ar/power-local-llm/solair-ai-review) و[ToolNeuron](/ar/power-local-llm/toolneuron-review) توثّق العمل دون اتصال بالكامل على الجهاز.',
          '**استيراد نماذجك الخاصة.** [Arbiter](/ar/power-local-llm/arbiter-local-ai-chat-review)، [Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)، [Maid](/ar/power-local-llm/maid-review)، [On Device AI](/ar/power-local-llm/on-device-ai-review)، [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) و[ToolNeuron](/ar/power-local-llm/toolneuron-review) توثّق استيراد ملفات نماذجك الخاصة.',
          '**تنزيل النماذج داخل التطبيق.** [Arbiter](/ar/power-local-llm/arbiter-local-ai-chat-review)، [Enclave AI](/ar/power-local-llm/enclave-ai-review)، [Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)، [Liquid Apollo](/ar/power-local-llm/liquid-apollo-review)، [Locally AI](/ar/power-local-llm/locally-ai-review)، [Loci AI](/ar/power-local-llm/loci-ai-review-offline-local-ai)، [Maid](/ar/power-local-llm/maid-review)، [On Device AI](/ar/power-local-llm/on-device-ai-review)، [Pocket AI](/ar/power-local-llm/pocket-ai-review)، [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) و[Private LLM](/ar/power-local-llm/private-llm-review) توثّق تنزيل النماذج داخل التطبيق.',
          '**إدخال الصور.** [Arbiter](/ar/power-local-llm/arbiter-local-ai-chat-review)، [Enchanted](/ar/power-local-llm/enchanted-review)، [Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)، [Locally AI](/ar/power-local-llm/locally-ai-review)، [Off Grid AI](/ar/power-local-llm/off-grid-ai-review)، [On Device AI](/ar/power-local-llm/on-device-ai-review)، [RikkaHub](/ar/power-local-llm/rikkahub-review)، [Solair AI](/ar/power-local-llm/solair-ai-review) و[ToolNeuron](/ar/power-local-llm/toolneuron-review) توثّق إدخال الصور.',
          '**الصوت.** [Enchanted](/ar/power-local-llm/enchanted-review)، [Enclave AI](/ar/power-local-llm/enclave-ai-review)، [Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)، [Locally AI](/ar/power-local-llm/locally-ai-review)، [Off Grid AI](/ar/power-local-llm/off-grid-ai-review)، [On Device AI](/ar/power-local-llm/on-device-ai-review)، [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)، [Solair AI](/ar/power-local-llm/solair-ai-review) و[ToolNeuron](/ar/power-local-llm/toolneuron-review) توثّق الإدخال أو الإخراج الصوتي.',
          '**السعر.** من بين تطبيقات الهاتف الـ26، 16 مجانية و6 بنموذج freemium و4 مدفوعة.',
          '**التوثيق.** معظم تطبيقات الهاتف موثَّقة فقط عبر صفحتها في المتجر أو موقعها، وهو يذكر أقل بكثير مما يذكره ملف README، لذا يحتوي هذا الجدول شرطات أكثر من غيره.',
        ],
      },
      webDifferences: {
        id: 'web-differences',
        title: 'عملاء الويب وسطر الأوامر: ما الذي يختلف',
        items: [
          '**Docker والاستضافة الذاتية.** [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [Big-AGI](/ar/local-llms/big-agi-review)، [KoboldCpp](/ar/power-local-llm/koboldcpp-review)، [LibreChat](/ar/power-local-llm/librechat-review)، [LobeChat](/ar/local-llms/lobechat-review)، [NextChat](/ar/local-llms/nextchat-review)، [Odysseus](/ar/power-local-llm/odysseus-review) و[Open WebUI](/ar/local-llms/open-webui-review) توثّق النشر عبر Docker أو الاستضافة الذاتية.',
          '**تعدد المستخدمين.** [LibreChat](/ar/power-local-llm/librechat-review) و[Open WebUI](/ar/local-llms/open-webui-review) توثّقان دعم تعدد المستخدمين.',
          '**Ollama.** [aichat](/ar/power-local-llm/aichat-review)، [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [Big-AGI](/ar/local-llms/big-agi-review)، [Chatbox](/ar/local-llms/chatbox-review)، [LibreChat](/ar/power-local-llm/librechat-review)، [Open WebUI](/ar/local-llms/open-webui-review) و[Page Assist](/ar/local-llms/page-assist-review) توثّق الاتصال بـ Ollama.',
          '**نقاط النهاية المتوافقة مع OpenAI.** [aichat](/ar/power-local-llm/aichat-review)، [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [Big-AGI](/ar/local-llms/big-agi-review)، [LibreChat](/ar/power-local-llm/librechat-review)، [NextChat](/ar/local-llms/nextchat-review)، [Open WebUI](/ar/local-llms/open-webui-review) و[Page Assist](/ar/local-llms/page-assist-review) توثّق الاتصال بنقاط النهاية المتوافقة مع OpenAI.',
          '**الدردشة مع ملفاتك.** [aichat](/ar/power-local-llm/aichat-review)، [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [Chatbox](/ar/local-llms/chatbox-review)، [KoboldCpp](/ar/power-local-llm/koboldcpp-review)، [LibreChat](/ar/power-local-llm/librechat-review) و[Open WebUI](/ar/local-llms/open-webui-review) توثّق الدردشة مع ملفاتك الخاصة.',
          '**MCP.** [aichat](/ar/power-local-llm/aichat-review)، [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [Chatbox](/ar/local-llms/chatbox-review)، [KoboldCpp](/ar/power-local-llm/koboldcpp-review)، [LibreChat](/ar/power-local-llm/librechat-review)، [LobeChat](/ar/local-llms/lobechat-review)، [NextChat](/ar/local-llms/nextchat-review)، [Odysseus](/ar/power-local-llm/odysseus-review) و[Open WebUI](/ar/local-llms/open-webui-review) توثّق دعم MCP.',
        ],
      },
      assistantDifferences: {
        id: 'assistant-differences',
        title: 'المساعدات الشخصية: ما الذي يختلف',
        items: [
          '**النماذج اللغوية المحلية.** [Jarvis](/ar/power-local-llm/jarvis-mac-review)، [Khoj](/ar/power-local-llm/khoj-ai-second-brain-review)، [Meetily](/ar/power-local-llm/meetily-review)، [nanobot](/ar/power-local-llm/nanobot-review)، [NVIDIA Project G-Assist](/ar/power-local-llm/nvidia-g-assist-review)، [Odysseus](/ar/power-local-llm/odysseus-review)، [Parlor](/ar/power-local-llm/parlor-review) و[Second Me](/ar/power-local-llm/second-me-review) توثّق العمل مع النماذج اللغوية المحلية.',
          '**الصوت.** [Jarvis](/ar/power-local-llm/jarvis-mac-review)، [Khoj](/ar/power-local-llm/khoj-ai-second-brain-review)، [NVIDIA Project G-Assist](/ar/power-local-llm/nvidia-g-assist-review)، [Parlor](/ar/power-local-llm/parlor-review) و[Voxa](/ar/power-local-llm/voxa-review) توثّق الإدخال أو الإخراج الصوتي.',
          '**الذاكرة الدائمة.** [Aori](/ar/power-local-llm/aori-ai-personal-agent-review)، [nanobot](/ar/power-local-llm/nanobot-review)، [Odysseus](/ar/power-local-llm/odysseus-review)، [Second Me](/ar/power-local-llm/second-me-review) و[Voxa](/ar/power-local-llm/voxa-review) توثّق الذاكرة الدائمة.',
          '**استخدام الأدوات والإجراءات.** [Agentic Inbox](/ar/power-local-llm/agentic-inbox-review)، [Aori](/ar/power-local-llm/aori-ai-personal-agent-review)، [Atomic Bot](/ar/power-local-llm/atomic-bot-review)، [Jarvis](/ar/power-local-llm/jarvis-mac-review)، [Khoj](/ar/power-local-llm/khoj-ai-second-brain-review)، [nanobot](/ar/power-local-llm/nanobot-review)، [NVIDIA Project G-Assist](/ar/power-local-llm/nvidia-g-assist-review)، [Odysseus](/ar/power-local-llm/odysseus-review)، [Parlor](/ar/power-local-llm/parlor-review) و[Voxa](/ar/power-local-llm/voxa-review) توثّق استخدام الأدوات أو الإجراءات.',
        ],
      },
      roleplayDifferences: {
        id: 'roleplay-differences',
        title: 'لعب الأدوار والرفقة: ما الذي يختلف',
        items: [
          '**دفاتر المعرفة (Lorebooks).** [Agnai](/ar/power-local-llm/agnai-review)، [Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay) و[RisuAI](/ar/power-local-llm/risuai-review) توثّق دعم دفاتر المعرفة أو معلومات العالم (world-info).',
          '**المحادثات الجماعية.** [Agnai](/ar/power-local-llm/agnai-review) و[RisuAI](/ar/power-local-llm/risuai-review) توثّقان المحادثات الجماعية.',
          '**التغطية.** لا توجد في هذه المجموعة إلا أربع أدوات، وتُوصف عدة ميزات في لعب الأدوار (مثل بطاقات الشخصيات) بطرق تختلف بين المشاريع، لذا تُعالَج في مراجعة كل أداة لا في الجدول.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا تخبرك به هذه المقارنة',
        items: [
          'تقارن القدرات الموثَّقة لا الجودة. ولا تقول شيئًا عن جودة الإجابات، أو سرعة تشغيل النموذج على جهازك، أو مدى صقل الواجهة — فلم تقس PromptQuorum هذه الجوانب للأدوات المدرجة.',
          'الشرطات فجوات في الوثائق التي راجعناها، لا نتائج سلبية. فقد تدعم بعض الأدوات ميزة لا يذكرها ملف README الخاص بها أو صفحتها في المتجر.',
          'تتغير تطبيقات الهاتف كثيرًا وتُوصف أساسًا عبر صفحاتها في المتاجر، لذا تحقق من الصفحة الحالية ومن مراجعة الأداة قبل التثبيت.',
          'تتغير الأدوات بسرعة. وتذكر مراجعة كل أداة الإصدار الذي فُحصت عليه، ويُحدَّث هذا الدليل عند تحديث أي مراجعة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'لماذا تُقارَن تطبيقات سطح المكتب والجوال والمستضافة ذاتيًا كلٌّ على حدة؟',
            a: 'لأنها منتجات مختلفة بقيود مختلفة: فتطبيق الهاتف يشغّل نماذج صغيرة على الجهاز، وتطبيق سطح المكتب يستطيع تشغيل نماذج أكبر، وواجهة الويب المستضافة ذاتيًا خادم تشغّله لنفسك أو لفريقك. ومعظم السمات لا معنى لها إلا داخل نوع واحد، ولو جُمعت في جدول واحد لبقيت معظم الخلايا فارغة أو بلا معنى.',
          },
          {
            q: 'ماذا تعني الشرطة في جدول المقارنة؟',
            a: 'تعني أن وثائق المشروع نفسها لا تذكر تلك السمة. ولا تعني أن الميزة غير موجودة؛ راجع مراجعة الأداة أو مستودعها.',
          },
          {
            q: 'لماذا تظهر أداة في أكثر من جدول؟',
            a: 'لأن بعض الأدوات متاحة على أكثر من نوع من الأجهزة — مثل نسخة لسطح المكتب ونسخة للهاتف — فتُدرج تحت كل نوع تنتمي إليه، مع السمات المنطبقة على ذلك النوع.',
          },
          {
            q: 'هل لأي من هذه الأدوات رابط أفلييت؟',
            a: 'لا. ليست لدى PromptQuorum أي علاقة أفلييت مع أي أداة في هذه المقارنة وقت كتابتها، ولا يحقق أي رابط هنا عمولة.',
          },
          {
            q: 'كم مرة تُحدَّث هذه المقارنة؟',
            a: 'تُحدَّث مرتين في السنة وكلما حُدِّثت مراجعة إحدى الأدوات المدرجة، لأن الجدول مُولَّد من البيانات نفسها التي تستند إليها تلك المراجعات.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'ملف README الرسمي لكل أداة أو موقعها أو صفحتها في المتجر، المذكورة في مراجعة الأداة في PromptQuorum (المرتبطة من جدول المقارنة).',
          '[دليل PromptQuorum لتطبيقات الذكاء الاصطناعي المحلية](/ar/directory) — السجل الذي يُولَّد منه كل صف في الجدول.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          `[دليل البرمجيات المحلية](/ar/directory) — تصفّح ${TOTAL_APP_COUNT} تطبيق ذكاء اصطناعي محلي وصفّها حسب الفئة.`,
          '[مقارنة محركات الاستدلال المحلية وبيئات التشغيل والبوابات](/ar/power-local-llm/local-llm-run-serve-compared) — الأدوات التي تشغّل النماذج خلف هذه التطبيقات.',
          '[مقارنة أدوات المعرفة والاسترجاع المحلية](/ar/power-local-llm/local-llm-knowledge-retrieval-compared) — الدردشة مع المستندات وRAG وتكاملات الملاحظات.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مقارنة تطبيقات الدردشة والمساعدات المحلية (2026): سطح المكتب والجوال والاستضافة الذاتية والمساعدات ولعب الأدوار',
      description:
        `قارن ${CA_TOTAL} تطبيق دردشة محليًا ومساعد ذكاء اصطناعي جنبًا إلى جنب: سطح المكتب والجوال والويب المستضاف ذاتيًا والمساعدات الشخصية ولعب الأدوار، من الوثائق الرسمية.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
      inLanguage: 'ar',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مستخدمون يختارون تطبيقات دردشة ومساعدات محلية' },
      about: [
        { '@type': 'Thing', name: 'تطبيقات دردشة النماذج اللغوية المحلية' },
        { '@type': 'Thing', name: 'مساعدات الذكاء الاصطناعي' },
        { '@type': 'Thing', name: 'الذكاء الاصطناعي المستضاف ذاتيًا' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'مقارنة تطبيقات الدردشة والمساعدات المحلية (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
        },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Easiest Desktop Apps',
    title: '로컬 채팅 앱·AI 어시스턴트 비교(2026): 데스크톱, 모바일, 셀프 호스팅, 어시스턴트, 롤플레이',
    seoTitle: '로컬 채팅 앱·AI 어시스턴트 비교 2026',
    intro:
      `자신의 하드웨어에서 언어 모델을 실행하는 채팅 앱은 하나의 제품 범주가 아닙니다. 데스크톱 앱, 휴대폰 앱, 셀프 호스팅 웹 인터페이스, 개인 어시스턴트, 롤플레이 도구는 각기 다른 문제를 해결하므로, 하나의 기능 목록만으로는 이들을 공정하게 비교할 수 없습니다. 이 가이드는 무료 및 유료 도구 ${CA_TOTAL}개를 종류별로 하나씩 비교하며, 각 도구의 PromptQuorum 리뷰와 동일한 데이터로 생성한 비교표를 사용하므로 표와 리뷰의 내용이 서로 어긋날 수 없습니다.`,
    metaDescription:
      `로컬 채팅 앱과 AI 어시스턴트 ${CA_TOTAL}개를 비교합니다: 데스크톱 앱(LM Studio, Jan, GPT4All), 휴대폰 앱, 셀프 호스팅 웹 UI(Open WebUI, LibreChat), 어시스턴트, 롤플레이 도구. 라이선스, MCP, Ollama, 오프라인 사용을 공식 문서 기준으로 정리했습니다.`,
    twitterDescription:
      '로컬 채팅 앱과 어시스턴트를 종류별(데스크톱, 모바일, 셀프 호스팅 웹, 개인 어시스턴트, 롤플레이)로 비교하고, MCP, Ollama, 오프라인 사용 등을 공식 문서 기준으로 정리했습니다.',
    audience:
      '자신의 컴퓨터, 휴대폰 또는 서버에서 사용할 로컬 채팅 앱이나 어시스턴트를 고르면서, 하나로 뭉뚱그린 목록이 아니라 도구 종류별로 정리된 차이점을 보고 싶은 개발자, 셀프 호스팅 사용자, 프라이버시를 중시하는 사용자.',
    readTime: '12분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 채팅 앱 비교',
    targetKeywords: [
      '로컬 ai 채팅 앱 추천',
      'lm studio vs jan vs gpt4all',
      'open webui vs librechat',
      '오프라인 ai 채팅 앱 아이폰 안드로이드',
      '로컬 llm 채팅 클라이언트 비교',
      '셀프 호스팅 chatgpt 대안',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      `**PromptQuorum 디렉터리의 로컬 채팅 앱과 어시스턴트 ${CA_TOTAL}개는 따로 비교해야 하는 다섯 종류로 나뉩니다. 데스크톱 채팅 앱(${CA_DESKTOP}개), 모바일 채팅 앱(${CA_MOBILE}개), 웹 및 CLI 채팅 클라이언트(${CA_WEB_CLI}개), 개인 어시스턴트(${CA_PERSONAL_ASSISTANTS}개), 롤플레이 및 컴패니언 앱(${CA_ROLEPLAY}개)입니다.** 데스크톱 앱 중 7개가 MCP 지원을, 9개가 Ollama를 문서화하고 있고, 휴대폰 앱 중 15개가 완전 오프라인 사용을, 웹 클라이언트 중 8개가 Docker 배포를 문서화하고 있습니다. 아래 비교표를 활용하고, 설치하기 전에 각 도구의 리뷰를 읽어 보십시오.`,
    quickAnswerTop: {
      en: {
        question: '어떤 로컬 채팅 앱을 사용해야 합니까?',
        answer:
          '어디에서 채팅하고 싶은지에 따라 달라지므로, 한 번에 한 종류 안에서 비교하십시오. 가장 중요한 조건 — 기기(컴퓨터, 휴대폰 또는 서버), 오프라인 작동, MCP 지원, Ollama 또는 자체 엔드포인트 연결, 파일과의 채팅 — 을 기준으로 고르고, 각 도구의 공식 문서로 생성한 아래 표를 활용하십시오.',
        bullets: [
          '데스크톱 채팅 앱: 도구 17개를 자체 모델 실행, Ollama, 엔드포인트, MCP, 파일 채팅, 음성 기준으로 비교.',
          '모바일 채팅 앱: 도구 26개를 오프라인 사용, 모델 가져오기, 앱 내 다운로드, 이미지 입력, 음성 기준으로 비교.',
          '웹 및 CLI 클라이언트: 도구 13개를 Docker, 다중 사용자, Ollama, 엔드포인트, 파일 채팅, MCP 기준으로 비교.',
          '개인 어시스턴트(13개)와 롤플레이 앱(4개)은 각각에 중요한 기능을 기준으로 비교.',
          '대시(—)는 프로젝트 문서에 해당 내용이 명시되어 있지 않다는 뜻이며, 기능이 없다는 뜻이 아닙니다.',
        ],
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '비교 방법', anchor: 'how-we-compared' },
      { label: '비교표', anchor: 'comparison-table' },
      { label: '데스크톱 채팅 앱: 무엇이 다른가', anchor: 'desktop-differences' },
      { label: '모바일 채팅 앱: 무엇이 다른가', anchor: 'mobile-differences' },
      { label: '웹 및 CLI 클라이언트: 무엇이 다른가', anchor: 'web-differences' },
      { label: '개인 어시스턴트: 무엇이 다른가', anchor: 'assistant-differences' },
      { label: '롤플레이 및 컴패니언: 무엇이 다른가', anchor: 'roleplay-differences' },
      { label: '이 비교로 알 수 없는 것', anchor: 'limitations' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '출처', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: `로컬 채팅 앱은 데스크톱 앱, 휴대폰 앱, 셀프 호스팅 웹 인터페이스, 개인 어시스턴트, 롤플레이 도구라는 다섯 가지 서로 다른 종류의 제품이므로, PromptQuorum 디렉터리의 도구 ${CA_TOTAL}개를 종류별로 나누어 각 도구의 리뷰와 동일한 도구 데이터로 생성한 표로 비교합니다.`,
          },
          {
            type: 'plain-terms',
            text: '어떤 앱은 컴퓨터에 설치하고, 어떤 앱은 휴대폰에 설치하며, 어떤 앱은 직접 호스팅해 브라우저로 열고, 어떤 앱은 사용자를 대신해 작업을 처리하는 어시스턴트이며, 어떤 앱은 캐릭터 롤플레이를 위해 만들어졌습니다. 휴대폰 앱과 서버 측 웹 인터페이스를 같은 기능으로 비교하는 것은 의미가 없으므로, 이 가이드는 같은 종류끼리 비교합니다.',
          },
        ],
        items: [
          `도구 ${CA_TOTAL}개, 다섯 종류: 데스크톱 채팅 앱(${CA_DESKTOP}개), 모바일 채팅 앱(${CA_MOBILE}개), 웹 및 CLI 채팅 클라이언트(${CA_WEB_CLI}개), 개인 어시스턴트(${CA_PERSONAL_ASSISTANTS}개), 롤플레이 및 컴패니언 앱(${CA_ROLEPLAY}개). Enchanted처럼 여러 기기에서 쓸 수 있는 도구는 해당하는 각 종류에 나타납니다.`,
          '표는 각 도구의 레코드로 생성하고 공식 README나 사이트로 확인했으며, 대시는 "문서에 명시되어 있지 않음"을 뜻하고 "아니오"를 뜻하지 않습니다. 휴대폰 앱은 대부분 스토어 설명으로만 문서화되어 있어 해당 칸이 가장 듬성듬성합니다.',
          '표의 모든 도구 이름은 해당 도구의 PromptQuorum 리뷰로 연결되며, 설치 방법과 한계는 그 리뷰에서 다룹니다.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '비교 방법',
        content: [
          '각 도구의 사실 정보(가격, 라이선스, 플랫폼, 하드웨어 요구 사항, 종류별 속성)는 해당 도구의 디렉터리 레코드에 한 번만 저장됩니다. 아래 비교표는 그 레코드로 생성되고 도구의 리뷰도 같은 레코드를 바탕으로 하므로, 두 곳이 서로 다른 값을 표시할 수 없습니다.',
          '종류별 속성(예: MCP 지원이나 오프라인 사용)은 각 프로젝트의 공식 README나 웹사이트에서 가져와 그곳의 정확한 표현과 대조했습니다. 문서에 언급이 없는 경우 표는 추측하지 않고 대시로 표시하며, 조건이 붙은 주장(로드맵에만 있는 경우, 유료 등급, 별도 서버 같은 요구 사항)은 표에서 해당 속성을 제외하고 도구의 리뷰에서 다룹니다.',
          '자체 PromptQuorum 리뷰가 있는 도구만 표에 포함됩니다. 일부 앱(AI On Device, Chatty Mini, LocalAI ApexCreator)은 디렉터리에 확인할 공식 페이지가 없어 해당 칸이 대시입니다. 어떤 도구가 맞는지는 사용자의 조건에 달려 있으므로, 이 비교는 도구의 순위를 매기지 않습니다.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '비교표',
        content: '아래에서 도구 종류를 고른 다음 행을 따라 읽으십시오. 도구 이름을 클릭하면 PromptQuorum의 전체 리뷰가 열립니다.',
        component: 'CategoryCompareTable',
      },
      desktopDifferences: {
        id: 'desktop-differences',
        title: '데스크톱 채팅 앱: 무엇이 다른가',
        items: [
          '**자체 모델 실행.** [AnythingLLM](/ko/power-local-llm/anythingllm-review), [Ekorbia](/ko/power-local-llm/ekorbia-review), [GPT4All](/ko/power-local-llm/gpt4all-review), [Jan](/ko/power-local-llm/jan-review), [LM Studio](/ko/power-local-llm/lm-studio-review), [Off Grid AI](/ko/power-local-llm/off-grid-ai-review), [On Device AI](/ko/power-local-llm/on-device-ai-review), [Osaurus](/ko/power-local-llm/osaurus-ai-review) 및 [Sidekick](/ko/power-local-llm/sidekick-review)는 별도의 서버 없이 자체적으로 모델을 실행하는 것을 문서화하고 있습니다.',
          '**Ollama.** [AnythingLLM](/ko/power-local-llm/anythingllm-review), [BoltAI](/ko/power-local-llm/boltai-review), [Cherry Studio](/ko/local-llms/cherry-studio-ai-desktop-client), [Ekorbia](/ko/power-local-llm/ekorbia-review), [Enchanted](/ko/power-local-llm/enchanted-review), [Hanoki](/ko/power-local-llm/hanoki-review), [Off Grid AI](/ko/power-local-llm/off-grid-ai-review), [On Device AI](/ko/power-local-llm/on-device-ai-review) 및 [Osaurus](/ko/power-local-llm/osaurus-ai-review)는 Ollama 연결을 문서화하고 있습니다.',
          '**OpenAI 호환 엔드포인트.** [AnythingLLM](/ko/power-local-llm/anythingllm-review), [Ekorbia](/ko/power-local-llm/ekorbia-review), [Hanoki](/ko/power-local-llm/hanoki-review) 및 [Sidekick](/ko/power-local-llm/sidekick-review)는 OpenAI 호환 엔드포인트 연결을 문서화하고 있습니다.',
          '**MCP.** [AnythingLLM](/ko/power-local-llm/anythingllm-review), [BoltAI](/ko/power-local-llm/boltai-review), [Cherry Studio](/ko/local-llms/cherry-studio-ai-desktop-client), [Jan](/ko/power-local-llm/jan-review), [Locally Uncensored](/ko/power-local-llm/locally-uncensored-review), [Odysseus](/ko/power-local-llm/odysseus-review) 및 [Osaurus](/ko/power-local-llm/osaurus-ai-review)는 MCP 지원을 문서화하고 있습니다.',
          '**파일과의 채팅.** [AnythingLLM](/ko/power-local-llm/anythingllm-review), [BoltAI](/ko/power-local-llm/boltai-review), [Ekorbia](/ko/power-local-llm/ekorbia-review), [GPT4All](/ko/power-local-llm/gpt4all-review), [Locally Uncensored](/ko/power-local-llm/locally-uncensored-review), [Off Grid AI](/ko/power-local-llm/off-grid-ai-review), [On Device AI](/ko/power-local-llm/on-device-ai-review), [Osaurus](/ko/power-local-llm/osaurus-ai-review) 및 [Sidekick](/ko/power-local-llm/sidekick-review)는 자신의 파일과 채팅하는 기능을 문서화하고 있습니다.',
          '**음성.** [AnythingLLM](/ko/power-local-llm/anythingllm-review), [BoltAI](/ko/power-local-llm/boltai-review), [Ekorbia](/ko/power-local-llm/ekorbia-review), [Enchanted](/ko/power-local-llm/enchanted-review), [LM Studio](/ko/power-local-llm/lm-studio-review), [Off Grid AI](/ko/power-local-llm/off-grid-ai-review), [On Device AI](/ko/power-local-llm/on-device-ai-review) 및 [Osaurus](/ko/power-local-llm/osaurus-ai-review)는 음성 입력 또는 출력을 문서화하고 있습니다.',
          '**가격.** 데스크톱 앱 17개 중 11개는 무료, 5개는 프리미엄, 1개는 유료입니다. 유료 등급이 추가하는 기능은 각 리뷰에서 확인하십시오.',
        ],
      },
      mobileDifferences: {
        id: 'mobile-differences',
        title: '모바일 채팅 앱: 무엇이 다른가',
        items: [
          '**완전 오프라인.** [Arbiter](/ko/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/ko/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review), [Layla](/ko/power-local-llm/layla-review), [Locally AI](/ko/power-local-llm/locally-ai-review), [Loci AI](/ko/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/ko/power-local-llm/maid-review), [Noema](/ko/power-local-llm/noema-review), [Off Grid AI](/ko/power-local-llm/off-grid-ai-review), [On Device AI](/ko/power-local-llm/on-device-ai-review), [Pocket AI](/ko/power-local-llm/pocket-ai-review), [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review), [Private LLM](/ko/power-local-llm/private-llm-review), [Solair AI](/ko/power-local-llm/solair-ai-review) 및 [ToolNeuron](/ko/power-local-llm/toolneuron-review)는 기기에서 완전 오프라인으로 실행하는 것을 문서화하고 있습니다.',
          '**자신의 모델 가져오기.** [Arbiter](/ko/power-local-llm/arbiter-local-ai-chat-review), [Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review), [Maid](/ko/power-local-llm/maid-review), [On Device AI](/ko/power-local-llm/on-device-ai-review), [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review) 및 [ToolNeuron](/ko/power-local-llm/toolneuron-review)는 자신의 모델 파일 가져오기를 문서화하고 있습니다.',
          '**앱 내 모델 다운로드.** [Arbiter](/ko/power-local-llm/arbiter-local-ai-chat-review), [Enclave AI](/ko/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review), [Liquid Apollo](/ko/power-local-llm/liquid-apollo-review), [Locally AI](/ko/power-local-llm/locally-ai-review), [Loci AI](/ko/power-local-llm/loci-ai-review-offline-local-ai), [Maid](/ko/power-local-llm/maid-review), [On Device AI](/ko/power-local-llm/on-device-ai-review), [Pocket AI](/ko/power-local-llm/pocket-ai-review), [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review) 및 [Private LLM](/ko/power-local-llm/private-llm-review)는 앱 안에서 모델을 다운로드하는 기능을 문서화하고 있습니다.',
          '**이미지 입력.** [Arbiter](/ko/power-local-llm/arbiter-local-ai-chat-review), [Enchanted](/ko/power-local-llm/enchanted-review), [Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/ko/power-local-llm/locally-ai-review), [Off Grid AI](/ko/power-local-llm/off-grid-ai-review), [On Device AI](/ko/power-local-llm/on-device-ai-review), [RikkaHub](/ko/power-local-llm/rikkahub-review), [Solair AI](/ko/power-local-llm/solair-ai-review) 및 [ToolNeuron](/ko/power-local-llm/toolneuron-review)는 이미지 입력을 문서화하고 있습니다.',
          '**음성.** [Enchanted](/ko/power-local-llm/enchanted-review), [Enclave AI](/ko/power-local-llm/enclave-ai-review), [Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review), [Locally AI](/ko/power-local-llm/locally-ai-review), [Off Grid AI](/ko/power-local-llm/off-grid-ai-review), [On Device AI](/ko/power-local-llm/on-device-ai-review), [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review), [Solair AI](/ko/power-local-llm/solair-ai-review) 및 [ToolNeuron](/ko/power-local-llm/toolneuron-review)는 음성 입력 또는 출력을 문서화하고 있습니다.',
          '**가격.** 휴대폰 앱 26개 중 16개는 무료, 6개는 프리미엄, 4개는 유료입니다.',
          '**문서.** 대부분의 휴대폰 앱은 스토어 설명이나 웹사이트로만 문서화되어 있는데, 이는 README보다 훨씬 적은 내용을 밝히므로 이 표에는 다른 표보다 대시가 더 많습니다.',
        ],
      },
      webDifferences: {
        id: 'web-differences',
        title: '웹 및 CLI 클라이언트: 무엇이 다른가',
        items: [
          '**Docker와 셀프 호스팅.** [AnythingLLM](/ko/power-local-llm/anythingllm-review), [Big-AGI](/ko/local-llms/big-agi-review), [KoboldCpp](/ko/power-local-llm/koboldcpp-review), [LibreChat](/ko/power-local-llm/librechat-review), [LobeChat](/ko/local-llms/lobechat-review), [NextChat](/ko/local-llms/nextchat-review), [Odysseus](/ko/power-local-llm/odysseus-review) 및 [Open WebUI](/ko/local-llms/open-webui-review)는 Docker 또는 셀프 호스팅 배포를 문서화하고 있습니다.',
          '**다중 사용자.** [LibreChat](/ko/power-local-llm/librechat-review) 및 [Open WebUI](/ko/local-llms/open-webui-review)는 다중 사용자 지원을 문서화하고 있습니다.',
          '**Ollama.** [aichat](/ko/power-local-llm/aichat-review), [AnythingLLM](/ko/power-local-llm/anythingllm-review), [Big-AGI](/ko/local-llms/big-agi-review), [Chatbox](/ko/local-llms/chatbox-review), [LibreChat](/ko/power-local-llm/librechat-review), [Open WebUI](/ko/local-llms/open-webui-review) 및 [Page Assist](/ko/local-llms/page-assist-review)는 Ollama 연결을 문서화하고 있습니다.',
          '**OpenAI 호환 엔드포인트.** [aichat](/ko/power-local-llm/aichat-review), [AnythingLLM](/ko/power-local-llm/anythingllm-review), [Big-AGI](/ko/local-llms/big-agi-review), [LibreChat](/ko/power-local-llm/librechat-review), [NextChat](/ko/local-llms/nextchat-review), [Open WebUI](/ko/local-llms/open-webui-review) 및 [Page Assist](/ko/local-llms/page-assist-review)는 OpenAI 호환 엔드포인트 연결을 문서화하고 있습니다.',
          '**파일과의 채팅.** [aichat](/ko/power-local-llm/aichat-review), [AnythingLLM](/ko/power-local-llm/anythingllm-review), [Chatbox](/ko/local-llms/chatbox-review), [KoboldCpp](/ko/power-local-llm/koboldcpp-review), [LibreChat](/ko/power-local-llm/librechat-review) 및 [Open WebUI](/ko/local-llms/open-webui-review)는 자신의 파일과 채팅하는 기능을 문서화하고 있습니다.',
          '**MCP.** [aichat](/ko/power-local-llm/aichat-review), [AnythingLLM](/ko/power-local-llm/anythingllm-review), [Chatbox](/ko/local-llms/chatbox-review), [KoboldCpp](/ko/power-local-llm/koboldcpp-review), [LibreChat](/ko/power-local-llm/librechat-review), [LobeChat](/ko/local-llms/lobechat-review), [NextChat](/ko/local-llms/nextchat-review), [Odysseus](/ko/power-local-llm/odysseus-review) 및 [Open WebUI](/ko/local-llms/open-webui-review)는 MCP 지원을 문서화하고 있습니다.',
        ],
      },
      assistantDifferences: {
        id: 'assistant-differences',
        title: '개인 어시스턴트: 무엇이 다른가',
        items: [
          '**로컬 LLM.** [Jarvis](/ko/power-local-llm/jarvis-mac-review), [Khoj](/ko/power-local-llm/khoj-ai-second-brain-review), [Meetily](/ko/power-local-llm/meetily-review), [nanobot](/ko/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/ko/power-local-llm/nvidia-g-assist-review), [Odysseus](/ko/power-local-llm/odysseus-review), [Parlor](/ko/power-local-llm/parlor-review) 및 [Second Me](/ko/power-local-llm/second-me-review)는 로컬 LLM과의 연동을 문서화하고 있습니다.',
          '**음성.** [Jarvis](/ko/power-local-llm/jarvis-mac-review), [Khoj](/ko/power-local-llm/khoj-ai-second-brain-review), [NVIDIA Project G-Assist](/ko/power-local-llm/nvidia-g-assist-review), [Parlor](/ko/power-local-llm/parlor-review) 및 [Voxa](/ko/power-local-llm/voxa-review)는 음성 입력 또는 출력을 문서화하고 있습니다.',
          '**지속적 메모리.** [Aori](/ko/power-local-llm/aori-ai-personal-agent-review), [nanobot](/ko/power-local-llm/nanobot-review), [Odysseus](/ko/power-local-llm/odysseus-review), [Second Me](/ko/power-local-llm/second-me-review) 및 [Voxa](/ko/power-local-llm/voxa-review)는 지속적 메모리를 문서화하고 있습니다.',
          '**도구 사용 및 작업 실행.** [Agentic Inbox](/ko/power-local-llm/agentic-inbox-review), [Aori](/ko/power-local-llm/aori-ai-personal-agent-review), [Atomic Bot](/ko/power-local-llm/atomic-bot-review), [Jarvis](/ko/power-local-llm/jarvis-mac-review), [Khoj](/ko/power-local-llm/khoj-ai-second-brain-review), [nanobot](/ko/power-local-llm/nanobot-review), [NVIDIA Project G-Assist](/ko/power-local-llm/nvidia-g-assist-review), [Odysseus](/ko/power-local-llm/odysseus-review), [Parlor](/ko/power-local-llm/parlor-review) 및 [Voxa](/ko/power-local-llm/voxa-review)는 도구 사용 또는 작업 실행을 문서화하고 있습니다.',
        ],
      },
      roleplayDifferences: {
        id: 'roleplay-differences',
        title: '롤플레이 및 컴패니언: 무엇이 다른가',
        items: [
          '**로어북.** [Agnai](/ko/power-local-llm/agnai-review), [Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay) 및 [RisuAI](/ko/power-local-llm/risuai-review)는 로어북 또는 월드 인포 지원을 문서화하고 있습니다.',
          '**그룹 채팅.** [Agnai](/ko/power-local-llm/agnai-review) 및 [RisuAI](/ko/power-local-llm/risuai-review)는 그룹 채팅을 문서화하고 있습니다.',
          '**범위.** 이 그룹에는 도구가 네 개뿐이고, 캐릭터 카드 같은 여러 롤플레이 기능은 프로젝트마다 다르게 설명되어 있으므로 표에 넣지 않고 각 도구의 리뷰에서 다룹니다.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '이 비교로 알 수 없는 것',
        items: [
          '이 비교는 품질이 아니라 문서화된 기능을 비교합니다. 답변이 얼마나 좋은지, 사용자의 기기에서 모델이 얼마나 빠르게 실행되는지, 인터페이스가 얼마나 완성도 있는지는 알려 주지 않으며, PromptQuorum은 나열된 도구에 대해 이를 측정하지 않았습니다.',
          '대시는 우리가 확인한 문서의 공백이지 부정적인 결과가 아닙니다. 일부 도구는 README나 스토어 설명에 언급되지 않은 기능을 지원할 수도 있습니다.',
          '휴대폰 앱은 자주 바뀌고 주로 스토어 설명으로만 설명되므로, 설치하기 전에 현재 스토어 설명과 해당 도구의 리뷰를 확인하십시오.',
          '도구는 빠르게 바뀝니다. 각 도구의 리뷰에는 확인한 버전이 명시되어 있으며, 이 가이드는 리뷰가 갱신될 때 함께 갱신됩니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '데스크톱, 모바일, 셀프 호스팅 채팅 앱을 따로 비교하는 이유는 무엇입니까?',
            a: '이들은 제약 조건이 서로 다른 별개의 제품입니다. 휴대폰 앱은 기기에서 작은 모델을 실행하고, 데스크톱 앱은 더 큰 모델을 실행할 수 있으며, 셀프 호스팅 웹 인터페이스는 자신이나 팀을 위해 운영하는 서버입니다. 대부분의 속성은 한 종류 안에서만 의미가 있으므로, 하나의 표로 비교하면 대부분의 칸이 비거나 의미가 없어집니다.',
          },
          {
            q: '비교표의 대시는 무엇을 뜻합니까?',
            a: '프로젝트 자체 문서에 해당 속성이 명시되어 있지 않다는 뜻입니다. 기능이 없다는 뜻이 아니므로, 도구의 리뷰나 저장소를 확인하십시오.',
          },
          {
            q: '한 도구가 둘 이상의 표에 나타나는 이유는 무엇입니까?',
            a: '일부 도구는 데스크톱 버전과 휴대폰 버전처럼 둘 이상의 종류의 기기에서 사용할 수 있으므로, 해당하는 각 종류에 그 종류에 적용되는 속성과 함께 나열됩니다.',
          },
          {
            q: '이 도구들에 제휴 링크가 있습니까?',
            a: '아니요. 작성 시점 기준으로 PromptQuorum은 이 비교에 포함된 어떤 도구와도 제휴 관계가 없으며, 여기의 어떤 링크도 수수료를 발생시키지 않습니다.',
          },
          {
            q: '이 비교는 얼마나 자주 갱신됩니까?',
            a: '표가 각 리뷰와 동일한 데이터로 생성되므로, 연 2회 그리고 나열된 도구의 리뷰가 갱신될 때마다 함께 갱신됩니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '각 도구의 공식 README, 웹사이트 또는 스토어 설명으로, 해당 도구의 PromptQuorum 리뷰에 나열되어 있습니다(비교표에서 연결됨).',
          '[PromptQuorum 로컬 AI 앱 디렉터리](/ko/directory) — 표의 각 행을 생성하는 기반이 되는 레코드.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          `[로컬 소프트웨어 디렉터리](/ko/directory) — ${TOTAL_APP_COUNT}개의 로컬 AI 앱을 둘러보고 카테고리별로 필터링하십시오.`,
          '[로컬 추론 엔진, 런타임, 게이트웨이 비교](/ko/power-local-llm/local-llm-run-serve-compared) — 이 앱들 뒤에서 모델을 실행하는 도구.',
          '[로컬 지식 및 검색 도구 비교](/ko/power-local-llm/local-llm-knowledge-retrieval-compared) — 문서 채팅, RAG, 노트 연동.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 채팅 앱·AI 어시스턴트 비교(2026): 데스크톱, 모바일, 셀프 호스팅, 어시스턴트, 롤플레이',
      description:
        `로컬 채팅 앱과 AI 어시스턴트 ${CA_TOTAL}개를 나란히 비교합니다: 데스크톱, 모바일, 셀프 호스팅 웹, 개인 어시스턴트, 롤플레이를 공식 문서 기준으로 정리했습니다.`,
      url: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
      inLanguage: 'ko',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 채팅 앱과 어시스턴트를 고르는 사용자' },
      about: [
        { '@type': 'Thing', name: '로컬 LLM 채팅 앱' },
        { '@type': 'Thing', name: 'AI 어시스턴트' },
        { '@type': 'Thing', name: '셀프 호스팅 AI' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '로컬 채팅 앱·AI 어시스턴트 비교(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
        },
      ],
    },
  },
}

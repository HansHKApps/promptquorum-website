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

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Easiest Desktop Apps',
    title: 'Local Chat Apps & Assistants Compared (2026): Desktop, Mobile, Self-Hosted, Assistants and Roleplay',
    seoTitle: 'Local Chat Apps & AI Assistants Compared 2026',
    intro:
      'Chat apps that run language models on your own hardware are not one product category: a desktop app, a phone app, a self-hosted web interface, a personal assistant and a roleplay tool solve different problems, and no single feature list compares them fairly. This guide compares 66 free and freemium tools, one kind at a time, using a comparison table generated from the same data as each tool\'s own PromptQuorum review, so the table and the reviews cannot disagree.',
    metaDescription:
      'Compare 66 local chat apps and AI assistants side by side: desktop apps (LM Studio, Jan, GPT4All), phone apps, self-hosted web UIs (Open WebUI, LibreChat), assistants and roleplay tools. Licenses, MCP, Ollama, offline use, from official docs.',
    twitterDescription:
      'Local chat apps and assistants compared by kind — desktop, mobile, self-hosted web, personal assistants, roleplay — with MCP, Ollama, offline use and more, from official documentation.',
    audience:
      'Developers, self-hosters and privacy-conscious users choosing a local chat app or assistant for their computer, phone or server, who want the differences laid out per kind of tool, not one blended list.',
    readTime: '12 min read',
    educationalLevel: 'Beginner',
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
      '**The 66 local chat apps and assistants in the PromptQuorum directory split into five kinds that should be compared separately: desktop chat apps (17), mobile chat apps (26), web and CLI chat clients (13), personal assistants (13) and roleplay and companion apps (4).** Among desktop apps, 7 document MCP support and 9 document Ollama; among phone apps, 15 document fully offline use; among web clients, 8 document Docker deployment. Use the comparison table below, and read each tool\'s own review before you install it.',
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
            text: 'Local chat apps are five different kinds of product — desktop apps, phone apps, self-hosted web interfaces, personal assistants and roleplay tools — so the 66 tools in the PromptQuorum directory are compared within each kind, using a table generated from the same tool data as each tool\'s own review.',
          },
          {
            type: 'plain-terms',
            text: 'Some apps you install on a computer, some on a phone, some you host yourself and open in a browser, some act as an assistant that does things for you, and some are built for character roleplay. Comparing a phone app with a server-side web interface on the same features makes no sense, so this guide compares like with like.',
          },
        ],
        items: [
          '66 tools, five kinds: desktop chat apps (17), mobile chat apps (26), web and CLI chat clients (13), personal assistants (13) and roleplay and companion apps (4). A tool available on several devices, such as Enchanted, appears in each kind it belongs to.',
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
          '[Local Software Directory](/directory) — browse all 200+ local AI apps and filter by category.',
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
        'Compare 66 local chat apps and AI assistants side by side: desktop, mobile, self-hosted web, personal assistants and roleplay, from official documentation.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-chat-assistants-compared',
      inLanguage: 'en',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
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
}

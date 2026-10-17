// FeatureAppPost — Snug Protocol feature (technical explainer, not a conventional app review).
// Added 2026-10-17 following maker outreach (Jeetu Maker, 2026-10-12). The maker has asked to technically check the draft.
// Facts sourced 2026-10-17 from snugprotocol.org (home, /download/, /docs/, /docs/whitepaper/), the project's threat model
// (github.com/snugprotocol/snug, docs/threat-model.md — only the first ~100,000 of ~216,000 characters were read) and the GitHub API
// (snugprotocol/snug: MIT, created 2026-07-31, 2 stars, 0 forks, 11 open issues, one human contributor, last push 2026-10-15;
// release v0.1.3 of 2026-09-05 with Snug.dmg; snugprotocol/spec pushed 2026-10-13). See apps/snug-protocol.ts for the tile.
//
// Deliberately NOT in this article: figures from the maker's private email, any maker quote, the "13 frame types" and
// "about 1 KB saved per runtime turn" claims (neither was found in a primary source this session), "industry standard"
// wording, and any hands-on result (PromptQuorum has not run the app; the owner decides when to test).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/snug-protocol-review-hero-en.webp',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    educationalLevel: 'Intermediate',
    audience: 'Readers who want to understand what the Snug Protocol proposes for AI-built personal apps, how its design works, and how much of it can be confirmed today',
    primaryTerm: 'Snug Protocol',
    title: 'Snug Protocol: Portable, AI-Built Personal Apps, Explained',
    seoTitle: 'Snug Protocol Explained: Portable AI-Built Personal Apps',
    intro: 'Snug Protocol ([snugprotocol.org](https://snugprotocol.org)) is an open specification for small apps that an AI agent builds from a description, that borrow the host\'s AI model at runtime, and that keep their data in one file the user owns. This feature explains the design, then separates what the project documents from what is still unproven.',
    metaDescription: 'Snug Protocol is an early open protocol for AI-built apps kept in a portable .snug file: how it works, local models, security design and what is unproven.',
    twitterDescription: 'Snug Protocol: an early open protocol for AI-built personal apps kept in a portable .snug file. How it works, its security design, and what is still unproven.',
    readTime: '9 min read',
    targetKeywords: [
      'Snug Protocol',
      'Snug Protocol explained',
      '.snug file',
      'portable AI apps',
      'AI-generated personal apps',
      'open protocol for AI apps',
    ],
    leadAnswerBlock: '**Snug Protocol is an open, MIT-licensed specification for small AI-built apps that run inside a host program, borrow the host\'s AI model while they run, and keep their data in one portable file the user owns.** It is early: the specification is at 1.0, but the macOS app is at version 0.1.3 and independent adoption has not been shown.',
    quickAnswerTop: {
      en: {
        question: 'What does Snug Protocol do that an ordinary AI app builder does not?',
        answer: 'It separates the app, the AI and the data. The app is a small web page, the AI is whichever model the host supplies, and the data sits in a SQLite file ending in .snug that you can back up and move to another compatible host.',
        bullets: [
          'Free to use; the project states no price for the macOS app',
          'A browser Playground gives a demo without installing anything',
          'Hosted models still receive whatever an app sends them',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: 'tldr' },
      { label: 'What Is Snug Protocol?', anchor: 'what-is-snug' },
      { label: 'How the Pieces Fit Together', anchor: 'how-it-works' },
      { label: 'Local and Hosted Models', anchor: 'local-and-hosted' },
      { label: 'Security Design and Its Limits', anchor: 'security' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How Mature Is It?', anchor: 'maturity' },
      { label: 'What We Could Not Verify', anchor: 'not-verified' },
      { label: 'What Could Hold It Back', anchor: 'open-questions' },
      { label: 'Who Should Look at Snug?', anchor: 'who-should-use' },
      { label: 'Related Approaches', anchor: 'related-approaches' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR — Snug Protocol',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Snug Protocol defines how an AI-built app, the program that runs it and the user\'s data file work together, so that the app and its data can move between compatible programs.' },
          { type: 'plain-terms', text: 'Think of an app that an assistant writes for you but that is saved as an ordinary file you control, instead of living inside the assistant\'s own service.' },
        ],
        items: [
          'Created by Jeetu Maker; the GitHub repository shows no other human contributor',
          'The specification is at 1.0; the maker describes the implementation as pre-1.0',
          'No second host, independent audit or outside user base has been found',
          'The desktop app runs on macOS only; Windows and Linux are planned after 1.0',
        ],
      },
      overview: {
        id: 'what-is-snug',
        title: 'What Is Snug Protocol?',
        content: '**Snug is a protocol, not an AI model and not a single app.** It describes how a small web app, a host program and an AI agent talk to each other and where the app\'s data is kept. The project\'s premise is that an app an AI assistant builds for you normally stays tied, with its data, to the platform that made it. The code is in the [snug repository on GitHub](https://github.com/snugprotocol/snug).',
        items: [
          '**The app:** a small, self-contained HTML app with its own interface and logic, built by an AI agent from a plain-language description',
          '**The host:** a program that runs the app in a sandbox and mediates its AI requests, storage and network access; the project ships two, a macOS app and a browser Playground',
          '**The user file:** one SQLite file ending in .snug that holds apps, their data, chats and settings, and that can be exported whole and moved between compatible hosts',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'How the Pieces Fit Together',
        content: 'Apps and the host exchange versioned JSON messages, called envelopes. The documentation calls the AI agent the app\'s "mind" and the app its "body": the app draws the screen and keeps the state, and the agent supplies intelligence when asked.',
        items: [
          '**Runtime AI:** the host supplies the model while the app runs, so switching models does not mean rebuilding the app, according to the project',
          '**Isolated storage:** each app gets its own database namespace inside the user file',
          '**The specification:** six parts, covering the wire protocol, the portable user database, connected apps, runtime contracts and the app chat surface, linked-device connections, and conformance. This review did not examine the runtime contracts in detail',
          '**For developers:** the documentation has guides for building a host and for embedding Snug in another product; neither was tested here',
        ],
      },
      localAndHosted: {
        id: 'local-and-hosted',
        title: 'Local and Hosted Models',
        content: '**The host chooses the model, so Snug can run on local or hosted inference.** The [download page](https://snugprotocol.org/download/) says the macOS app needs either an Anthropic or OpenAI API key or a local OpenAI-compatible endpoint, and it names a local model served through [Ollama](https://ollama.com) as an option.',
        items: [
          '**Local path:** an OpenAI-compatible local endpoint keeps inference on your own machine; no hardware or Ollama version requirement is published',
          '**Hosted path:** a cloud model receives whatever an app sends it for inference',
          '**Credentials:** keys are stored in your own .snug file and attached by your machine rather than by a Snug server, according to the download page',
          '**Other services:** the project\'s site says an app that reads a bank account still goes through an aggregator, so "no app backend" does not mean no external service',
        ],
        note: 'Local inference removes one data path. Whether a given app stays private still depends on the model and the services it connects to.',
      },
      security: {
        id: 'security',
        title: 'Security Design and Its Limits',
        content: '**Snug documents its security design in a public threat model, but that document is the project\'s own and no independent audit was found.** The points below are what the document states, not what was tested.',
        items: [
          '**Sandbox:** app iframes use `sandbox="allow-scripts"` with an opaque origin and a content policy of `connect-src \'none\'`, so an app cannot open its own network connections',
          '**Credential custody:** credential-shaped headers are refused at the protocol layer, and responses and errors are scrubbed before they reach the app',
          '**Network ceiling:** apps reach only hosts the user approved, redirects are not followed, and requests that change data need confirmation before a credential is read',
          '**File protection:** the user file is plaintext by default; AES-256-GCM encryption applies only when the user turns protection on',
          '**Accepted risks:** the document lists residual risks, among them that third parties\' messages can reach an LLM when an app reads a messaging store, and that one integrity check catches a partial copy but not another process running as the same user',
          '**Windows:** the document records known defects on Windows, a platform the project does not ship',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Snug is free and MIT-licensed; the macOS app is a universal .dmg for Apple silicon and Intel, and the Playground runs in a browser.**',
        ],
        columns: ['Item', 'Where to get it'],
        rows: [
          { 'Item': 'macOS app', 'Where to get it': '[Snug.dmg](https://snugprotocol.org/download/), version 0.1.3' },
          { 'Item': 'Browser Playground', 'Where to get it': '[playground.snugprotocol.org](https://playground.snugprotocol.org)' },
          { 'Item': 'Website', 'Where to get it': '[snugprotocol.org](https://snugprotocol.org)' },
          { 'Item': 'Privacy policy', 'Where to get it': '[snugprotocol.org/privacy](https://snugprotocol.org/privacy/)' },
          { 'Item': 'Source code', 'Where to get it': '[GitHub](https://github.com/snugprotocol/snug), MIT' },
          { 'Item': 'Specification', 'Where to get it': '[Spec 1.0](https://snugprotocol.org/docs/spec/)' },
          { 'Item': 'Windows, Linux', 'Where to get it': 'Planned after 1.0' },
        ],
        note: 'Verified on 17 October 2026: macOS app 0.1.3, released 5 September 2026; the repository itself was last updated on 15 October 2026. The download page states no price, no minimum macOS version and no signing details for the app. The project calls the Playground a demo that keeps data in the browser, not a private deployment.',
      },
      maturity: {
        id: 'maturity',
        title: 'How Mature Is It?',
        content: '**The specification is published and versioned, but the surrounding ecosystem is a single project.** The repository was created on 31 July 2026.',
        columns: ['Area', 'Finding'],
        rows: [
          { 'Area': 'Specification', 'Finding': 'Version 1.0 published' },
          { 'Area': 'Implementation', 'Finding': 'macOS app 0.1.3; pre-1.0 per the maker' },
          { 'Area': 'Contributors', 'Finding': 'One human account, plus a dependency bot' },
          { 'Area': 'GitHub activity', 'Finding': '2 stars, 0 forks, 11 open issues' },
          { 'Area': 'Other hosts', 'Finding': 'None found beyond the project\'s own' },
          { 'Area': 'Security audit', 'Finding': 'None found; threat model is self-published' },
        ],
        note: 'GitHub counts were read on 17 October 2026 and will change.',
      },
      notVerified: {
        id: 'not-verified',
        title: 'What We Could Not Verify',
        content: 'Everything above comes from the project\'s own documents and its GitHub pages. These points could not be confirmed.',
        items: [
          '**Hands-on behavior:** PromptQuorum has not installed or run the macOS app or the Playground',
          '**Adoption:** no second host implementation and no third-party users were found',
          '**Security:** no independent audit or penetration test, and the long threat model was read only in part',
          '**Project-reported claims:** figures on savings or speed from the project\'s own material were not tested',
          '**Portability in practice:** the format is specified for moving between hosts, but no move between two independent hosts could be checked',
        ],
      },
      openQuestions: {
        id: 'open-questions',
        title: 'What Could Hold It Back',
        content: 'These are open questions about any new portability layer, not findings about Snug specifically.',
        items: [
          '**Portability needs a second host.** A portable file helps only when other developers build compatible hosts and keep the required behavior',
          '**The host still matters.** Models, integrations and device access come from the host, so the same app can behave differently on two of them',
          '**A sandbox limits damage, not mistakes.** A generated app can still produce wrong results',
          '**Small local models.** They may handle simple tasks and struggle with complex reasoning or specialised workflows',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Look at Snug?',
        content: 'The question is whether an early protocol from one developer is worth following or trying.',
        subsections: [
          {
            title: 'Worth a look if you',
            list: [
              'Want AI-built personal tools that you keep as a file you control',
              'Build AI products and want to study an embeddable design',
              'Run a Mac and are comfortable with pre-1.0 software',
            ],
          },
          {
            title: 'Wait if you',
            list: [
              'Need Windows or Linux today',
              'Need independently audited security before connecting financial or other sensitive accounts',
              'Need a tool with a team behind it and a track record',
            ],
          },
        ],
      },
      relatedApproaches: {
        id: 'related-approaches',
        title: 'Related Approaches',
        content: 'Snug has no direct peer in the [Local LLM Software Directory](/directory). These are other ways to get a custom AI-driven tool.',
        items: [
          '**Visual workflow builders you host yourself:** [Dify Review](/power-local-llm/dify-ai-workflow-builder-review) and [Flowise Review](/power-local-llm/flowise-ai-visual-workflow-builder-review) build agents and pipelines from a drag-and-drop canvas rather than a portable file',
          '**A coding agent on local models:** [Claude Code Local Review](/power-local-llm/claude-code-local-review) covers a tool that writes ordinary apps, which then run without a shared host or file format',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Can I try Snug without installing anything?', a: 'Yes. The browser Playground works as a demo, and the project says it keeps data in the browser and lets you export it, but it is not a private deployment.' },
          { q: 'Does Snug make my data fully private?', a: 'No claim of that kind is made. An app needs no backend of its own, but a hosted model sees what the app sends it and account connections can involve an intermediary.' },
          { q: 'Can I move a .snug file to another host?', a: 'The format is specified for that purpose, but the only hosts found so far are the project\'s own, so a move between independent implementations has not been shown.' },
          { q: 'Is Snug an industry standard?', a: 'No evidence supports that yet. It is better described as an emerging open protocol with one maintainer and a published 1.0 specification.' },
          { q: 'Can developers embed Snug in their own product?', a: 'The documentation includes guides for building a host and embedding Snug, and the repository publishes TypeScript packages; this review did not test them.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        links: [
          { url: 'https://snugprotocol.org', title: 'Snug Protocol', description: 'The official site: overview, Playground and macOS app, and the statements on local inference and external services.' },
          { url: 'https://snugprotocol.org/download/', title: 'Snug Download', description: 'The macOS download page, with the model and API-key requirements.' },
          { url: 'https://snugprotocol.org/docs/', title: 'Snug Documentation', description: 'Concepts, the six-part specification and the implementor guides.' },
          { url: 'https://github.com/snugprotocol/snug', title: 'Snug on GitHub', description: 'The MIT-licensed repository, release history and threat model.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Ollama Review](/power-local-llm/ollama-review) — the local model runner the Snug download page names as one option.',
          '[Local AI Agents With MCP](/power-local-llm/local-ai-agents-with-mcp-2026) — another approach to connecting AI agents to tools and data.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Snug Protocol: Portable, AI-Built Personal Apps, Explained',
      description: 'Snug Protocol is an early open protocol for AI-built personal apps stored in a portable .snug file. How it works, local-model use, security design, and what is unproven.',
      url: 'https://promptquorum.com/power-local-llm/snug-protocol-review',
      inLanguage: 'en',
      datePublished: '2026-10-17',
      dateModified: '2026-10-17',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Readers evaluating an emerging open protocol for AI-built personal apps' },
      about: [
        { '@type': 'Thing', name: 'Snug Protocol' },
        { '@type': 'Thing', name: 'AI-generated apps' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/snug-protocol-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Snug Protocol', item: 'https://promptquorum.com/power-local-llm/snug-protocol-review' },
      ],
    },
  },
}

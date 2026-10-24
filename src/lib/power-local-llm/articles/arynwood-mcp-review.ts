// Arynwood MCP Review: A Local AI Workspace in Alpha
// Slug: arynwood-mcp-review
// Companion to: jan-review, msty-review, anythingllm-review, lm-studio-review
// Sources: arynwood.com/mcp, arynwood.com/mcp-security, the Arynwood-Technology/ArynwoodMCP GitHub repository (README, LICENSE,
// docs/windows.md, docs/supported-platforms.md, docs/installation.md, docs/releases/0.5.3.md) and the v0.5.3 release page and
// asset list, all checked 2026-10-24 — no hands-on testing, no founder contact.
// Official website exists (arynwood.com/mcp) and is in the Get It table; it has no separate privacy policy page, so the Privacy row points at its
// "What leaves your machine" section. Name check 2026-10-24: no other product named Arynwood MCP found. No prices are listed, so non-EN blocks carry no currency figures.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/arynwood-mcp-review-hero-en.webp',
    title: 'Arynwood MCP Review: A Local AI Workspace in Alpha',
    seoTitle: 'Arynwood MCP Review: Local AI Workspace in Alpha',
    intro: 'Arynwood MCP is a desktop AI workspace that, per its website and README, chats with local models through Ollama and adds document search, memory, a design canvas and MCP tool integrations. It is a version 0.5.3 alpha for Linux and Windows under a source-available licence. This review reflects the website, README, licence file and release notes as checked on 24 October 2026.',
    metaDescription: 'Arynwood MCP review: a local-first AI workspace on Ollama for Linux and Windows. Alpha status, unsigned installer, source-available licence and data flows.',
    twitterDescription: 'Arynwood MCP review: an Ollama-based AI workspace for Linux and Windows in alpha, with a source-available licence. Requirements, installers, data flows.',
    audience: 'People on Linux or Windows who want to know what Arynwood MCP does, what its source-available licence allows, how the unsigned alpha installs and which data leaves the machine.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Arynwood MCP review',
    targetKeywords: [
      'arynwood mcp review',
      'arynwood mcp',
      'local ai workspace ollama',
      'source-available ai app',
      'ollama desktop app linux windows',
      'mcp tool integrations desktop',
    ],
    current_hardware_mentioned: ['NVIDIA GPU with 12 GB VRAM'],
    leadAnswerBlock: '**Arynwood MCP (version 0.5.3, released 23 October 2026) is a desktop alpha for Linux and Windows that, per its website, runs chat, document search and tool integrations on your own machine through Ollama.** Every statement in this review comes from the project\'s own pages; PromptQuorum has not installed or tested it.',
    quickAnswerTop: {
      en: {
        question: 'What do I need to run Arynwood MCP?',
        answer: 'Linux x86_64 or Windows x64, at least 16 GB of RAM and 20 GB of free disk, plus Ollama installed separately, according to the project\'s documentation. macOS is not supported.',
        bullets: [
          'Chat is multi-persona and streams from Ollama; OpenAI-compatible servers can be added.',
          'Knowledge search needs Qdrant and an Ollama embedding model, both installed separately.',
          'A graphics card is optional for chat; the image, music and video tools need an NVIDIA card, with 12 GB of VRAM or more recommended.',
          'MCP tool servers can be connected, including Kdenlive video editing through Cutroom.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is Arynwood MCP?',
        anchor: 'what-is-arynwood-mcp',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'What You Need',
        anchor: 'requirements',
      },
      {
        label: 'Pricing and Licence',
        anchor: 'pricing',
      },
      {
        label: 'How to Get Started',
        anchor: 'getting-started',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Privacy and Network Use',
        anchor: 'privacy',
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use',
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Frequently Asked Questions',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Arynwood MCP is a Linux and Windows desktop alpha that chats with local Ollama models and adds document search, memory, a design canvas and MCP tool integrations.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as one app window around a local chat model, a document library and a toolbox, installed from a downloaded package rather than a store.',
          },
        ],
        items: [
          'Maintenance: version 0.5.3 was published on 23 October 2026, the latest upstream update at the time of checking; the repository was created on 10 September 2026, so no stale-project warning applies but the project is about six weeks old.',
          'Licence: source-available, not open source, and limited to personal or internal use.',
          'Installers: unsigned on Windows, and the whole app is labelled alpha.',
          'Data: the website says there is no telemetry, yet several features send data out and no offline mode is enforced.',
          'Basis: the website, README, licence file and release notes, read on 24 October 2026, with no hands-on testing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not installed, tested or benchmarked Arynwood MCP. Statements below about features, privacy and security are the project\'s own.',
          },
        ],
      },
      overview: {
        id: 'what-is-arynwood-mcp',
        title: 'What Is Arynwood MCP?',
        content: [
          '**Arynwood MCP is a local-first personal AI and creative workspace from Arynwood Technology, built by Lorelei Noble, that sends chats to models running in Ollama on your own hardware.** "MCP" stands for Model Context Protocol, which the app uses to connect tools; the README and website describe a desktop workspace, not a plug-in for other programs.',
          'PromptQuorum found no other product called Arynwood MCP. The same maker\'s Arynwood Grove is a separate community server that the app can connect to, and the website\'s [browser demo](https://arynwood-technology.github.io/ArynwoodMCP/) shows the interface with scripted conversations and no real AI behind it.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Arynwood MCP is downloaded from the project\'s GitHub Releases page, with one package per system; Ollama is installed separately.**',
        ],
        columns: ['System', 'Download'],
        rows: [
          {
            System: 'Linux x86_64 (AppImage)',
            Download: '[arynwood-mcp_0.5.3_amd64.AppImage](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.AppImage)',
          },
          {
            System: 'Debian / Ubuntu (.deb)',
            Download: '[arynwood-mcp_0.5.3_amd64.deb](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.deb)',
          },
          {
            System: 'Windows x64 (unsigned alpha)',
            Download: '[arynwood-mcp_0.5.3_x64-setup.exe](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_x64-setup.exe)',
          },
          {
            System: 'Checksums',
            Download: '[SHA256SUMS.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS.txt) (Linux), [SHA256SUMS-windows.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS-windows.txt)',
          },
          {
            System: 'macOS',
            Download: 'Not supported',
          },
          {
            System: 'Website',
            Download: '[arynwood.com/mcp](https://arynwood.com/mcp/)',
          },
          {
            System: 'Privacy',
            Download: '[What leaves your machine](https://arynwood.com/mcp/) (no separate privacy policy)',
          },
          {
            System: 'Security brief',
            Download: '[arynwood.com/mcp-security](https://arynwood.com/mcp-security/)',
          },
          {
            System: 'Source code',
            Download: '[github.com/Arynwood-Technology/ArynwoodMCP](https://github.com/Arynwood-Technology/ArynwoodMCP)',
          },
        ],
        note: 'Version reviewed: 0.5.3 (desktop alpha), published on 23 October 2026 per the GitHub release page, which is the latest upstream update at the time of checking. The Windows installer is unsigned, so Microsoft Defender SmartScreen may show "Windows protected your PC"; the maker\'s guide says to compare the SHA-256 checksum first and then choose More info and Run anyway. The AppImage runs after `chmod +x`, and the .deb installs with `sudo apt install ./file.deb`. The website has no separate privacy policy; its "What leaves your machine" section is the privacy statement.',
      },
      requirements: {
        id: 'requirements',
        title: 'What You Need',
        content: [
          '**Arynwood MCP needs Linux x86_64 or Windows x64 with Ollama installed separately; the table gives the memory, disk and graphics needs.** The documentation adds that 8 GB can work with a smaller model or a remote endpoint.',
        ],
        columns: ['Item', 'Requirement per the docs'],
        rows: [
          {
            Item: 'Linux',
            'Requirement per the docs': 'x86_64; AppImage needs glibc 2.35 or newer',
          },
          {
            Item: 'Windows',
            'Requirement per the docs': 'x64 alpha, per-user installer with WebView2',
          },
          {
            Item: 'macOS',
            'Requirement per the docs': 'Not supported',
          },
          {
            Item: 'Memory and disk',
            'Requirement per the docs': '16 GB RAM; 20 GB free plus models',
          },
          {
            Item: 'Graphics card',
            'Requirement per the docs': 'Optional for chat; NVIDIA for image/music/video',
          },
          {
            Item: 'Other services',
            'Requirement per the docs': 'Ollama required; Qdrant for knowledge search',
          },
        ],
        note: 'Without an NVIDIA card the app switches to a CPU mode that disables the GPU tools and tunes chat for the processor; the documentation warns that an 8B model can take minutes per reply on a small server. Ollama, Qdrant and the GPU tools are separate services, not bundled in the installers.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing and Licence',
        content: [
          '**The website lists no price for the app, and the packages are published for download without a fee; the Arynwood MCP Source-Available License, however, is not an open-source licence, per the website, and sets limits.** Setup services from the maker are quoted on request.',
        ],
        items: [
          '**Allowed.** Downloading and running unmodified builds for personal or internal evaluation, and viewing and modifying the source for personal or internal use.',
          '**Not allowed without written permission.** Redistributing, selling or sublicensing the software or any derivative, and offering it as part of a hosted or managed service.',
          '**Alpha warranty.** The licence text provides the software as-is and warns of breaking changes, data loss and incomplete features; third-party components keep their own licences.',
          '**The maker\'s own caveat.** The licence file calls itself "a template starting point, not reviewed by a lawyer" and tells readers to have counsel review it before relying on it for a public release.',
        ],
        note: 'Read from the [LICENSE file](https://github.com/Arynwood-Technology/ArynwoodMCP/blob/main/LICENSE) on 24 October 2026. This is not legal advice; read the file before using the software at work.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the maker\'s installation and Windows guides; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Compare your computer with the requirements',
            whyItMatters: 'Check memory, free disk and operating system against the table above before downloading.',
          },
          {
            title: 'Install Ollama and pull a model',
            whyItMatters: 'Ollama is not bundled. Install it from its own site, then pull the models the personas use, or enter the exact name of a small model on a CPU-only computer.',
          },
          {
            title: 'Download the package and check the checksum',
            whyItMatters: 'Save the package for your system and the matching checksum file into one folder and compare the SHA-256 value before you run anything.',
          },
          {
            title: 'Install or start it',
            whyItMatters: 'On Linux make the AppImage executable and start it, or install the .deb with apt. On Windows run the installer, which installs for your user account only; choose More info and Run anyway if SmartScreen warns.',
          },
          {
            title: 'Open the app and connect the services',
            whyItMatters: 'The app tells you if it cannot reach Ollama. Knowledge search additionally needs Qdrant, which is also installed separately.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: ['**Every item below comes from the website, README or the maker\'s documentation.**'],
        items: [
          '**Chat.** Multi-persona chat streamed from Ollama, with model management and registration of OpenAI-compatible servers.',
          '**Knowledge and memory.** Teach it from a URL, file or text; semantic search is added to chat through Qdrant and an Ollama embedding model, and the chat keeps memory and accepts file uploads.',
          '**MCP tools.** Connects MCP tool servers, including Kdenlive editing through Cutroom; the security brief says one approval authorizes one exact tool call, once.',
          '**Design Center.** A canvas design tool whose image generation uses a separately installed Stable Diffusion (A1111) service.',
          '**Audio and video.** Optional studios that rely on separately installed sidecar tools; LoRA training, script-based GPU tools and the project file browser need a source checkout, not the packaged build.',
          '**Community.** An optional page that connects to an Arynwood Grove server (0.7.1, alpha); messages are kept on that server and are not end-to-end encrypted.',
          '**Gateway.** An experimental headless gateway for owner-only remote control, off by default and run from a source checkout.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The website says there is no telemetry, and that chats, documents and memory stay on your disk.** It adds that the app checks GitHub for a newer stable release at startup and every six hours while open, sending no credentials or workspace content, though GitHub receives normal connection data such as your IP address.',
          'Other data leaves the machine only through features you use, per the website: web search, learning from a URL, downloads, social publishing, deploys, IRC, a Grove on a server, or a remote model server you add. The security brief states there is no operating-system sandbox or enforced offline mode and that the stated scope is one owner on one machine; local chat, document search and memory can work offline once models are downloaded.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s statements. PromptQuorum has not audited the code or the network traffic, and the security brief itself says its tests are not a penetration test or a security certification.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Linux or Windows users** who want an Ollama workspace in one app.',
          '**People comfortable with alpha software,** an unsigned installer and a personal-or-internal-use licence.',
          '**Kdenlive editors** who want to try tool-calling through Cutroom.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on behaviour.** PromptQuorum did not run Arynwood MCP, so feature descriptions and the quality of local answers are the project\'s statements.',
          '**Windows install.** The release notes list a clean Windows machine install and posting to a real social account as not run for 0.5.3, and the Windows guide says downloads and external integrations are not yet manually validated.',
          '**Privacy and security claims.** The no-telemetry, update-check and data-flow statements were not checked against the code or network traffic.',
          '**Track record.** Versions 0.5.2 and 0.5.3 both appeared on 23 October 2026, in a repository created on 10 September 2026; there is no long release history to judge by.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / licence', 'Key difference'],
        rows: [
          {
            App: '[Jan](/power-local-llm/jan-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / licence': 'Free / Apache 2.0 (variant)',
            'Key difference': 'Open-source desktop chat app with its own built-in engine',
          },
          {
            App: '[Msty](/power-local-llm/msty-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / licence': 'Freemium / closed source',
            'Key difference': 'Consumer-style chat interface with several model providers',
          },
          {
            App: '[AnythingLLM](/power-local-llm/anythingllm-review)',
            Platforms: 'Windows, macOS, Linux, web',
            'Price / licence': 'Free / MIT',
            'Key difference': 'Chat with your documents using a built-in vector store',
          },
          {
            App: '[LM Studio](/power-local-llm/lm-studio-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / licence': 'Free / proprietary',
            'Key difference': 'Polished interface with a built-in model browser and server mode',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, licence and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does it work without internet?',
            a: 'Local chat, document search and memory can work offline once the models are downloaded, but there is no offline switch, and the update check and web-based features still reach for the network.',
          },
          {
            q: 'Does it run on a Mac?',
            a: 'No, macOS is unsupported according to the maker\'s platform guide. The browser demo on the project\'s site shows the interface without any install.',
          },
          {
            q: 'Can it use a model server on another computer?',
            a: 'The Servers page registers Ollama or OpenAI-compatible endpoints, and the documentation says an endpoint can run chat and image generation on another computer instead.',
          },
          {
            q: 'How are updates installed?',
            a: 'Versions from 0.4.8 show an update notice; installing is manual by running the newer installer or package, and earlier versions need one manual install first.',
          },
          {
            q: 'Can I verify the Windows installer?',
            a: 'The maker publishes SHA-256 checksums for each package and says builds from 0.5.4 on can also be checked with GitHub attestations. PromptQuorum has not verified either.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Arynwood MCP is a Linux and Windows desktop alpha that, per its website, brings Ollama chat, document search, memory and MCP tool integrations into one local-first app, with public installers and a release published the day before this check. Against that, the licence is source-available and limited to personal or internal use, the Windows build is unsigned, macOS is unsupported, no offline mode or sandbox is enforced and the repository is about six weeks old. It suits people comfortable with alpha software who accept those limits; readers who want an open-source licence or a longer track record can compare [Jan](/power-local-llm/jan-review) or [AnythingLLM](/power-local-llm/anythingllm-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Arynwood MCP website](https://arynwood.com/mcp/) — features, downloads, requirements, privacy statements and licence statement, checked 24 October 2026.',
          '[Arynwood MCP security brief](https://arynwood.com/mcp-security/) — approval model, sandbox and offline-mode statements, test scope.',
          '[Arynwood MCP on GitHub](https://github.com/Arynwood-Technology/ArynwoodMCP) — README, LICENSE and the Windows, installation and supported-platform guides.',
          '[Arynwood MCP v0.5.3 release](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3) — release date, package list, checksums and release notes.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Jan Review](/power-local-llm/jan-review) — an open-source desktop chat app with its own engine.',
          '[Msty Review](/power-local-llm/msty-review) — a consumer-style chat client with several model providers.',
          '[AnythingLLM Review](/power-local-llm/anythingllm-review) — document chat with a built-in vector store.',
          '[LM Studio Review](/power-local-llm/lm-studio-review) — a desktop app with a model browser and local server.',
          '[Local LLM Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison for chat apps and assistants.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Arynwood MCP Review: A Local AI Workspace in Alpha',
      description: 'Arynwood MCP review: a local-first AI workspace on Ollama for Linux and Windows. Alpha status, unsigned installer, source-available licence, data flows and unverified items.',
      url: 'https://promptquorum.com/power-local-llm/arynwood-mcp-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'People evaluating a local AI desktop workspace built on Ollama for Linux or Windows',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Arynwood MCP',
        },
        {
          '@type': 'Thing',
          name: 'Local LLM desktop workspace',
        },
        {
          '@type': 'Thing',
          name: 'Ollama',
        },
        {
          '@type': 'Thing',
          name: 'Model Context Protocol',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://promptquorum.com/power-local-llm/arynwood-mcp-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Arynwood MCP Review',
          item: 'https://promptquorum.com/power-local-llm/arynwood-mcp-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/arynwood-mcp-review-hero-de.webp',
    title: 'Arynwood-MCP-Rezension: Ein lokaler KI-Arbeitsbereich in der Alpha',
    seoTitle: 'Arynwood-MCP-Rezension: Lokaler KI-Arbeitsbereich (Alpha)',
    intro: 'Arynwood MCP ist ein KI-Arbeitsbereich für den Desktop, der laut Website und README über Ollama mit lokalen Modellen chattet und Dokumentensuche, Gedächtnis, eine Design-Arbeitsfläche und MCP-Werkzeuganbindungen ergänzt. Es ist eine Alpha in Version 0.5.3 für Linux und Windows unter einer Source-Available-Lizenz. Diese Rezension gibt Website, README, Lizenzdatei und Release Notes wieder, wie am 24. Oktober 2026 geprüft.',
    metaDescription: 'Arynwood-MCP-Rezension: lokaler KI-Arbeitsbereich auf Ollama für Linux und Windows. Alpha-Status, unsignierter Installer, Source-Available-Lizenz.',
    twitterDescription: 'Arynwood-MCP-Rezension: ein Ollama-basierter KI-Arbeitsbereich für Linux und Windows in der Alpha mit Source-Available-Lizenz. Anforderungen, Installer, Datenflüsse.',
    audience: 'Menschen unter Linux oder Windows, die wissen möchten, was Arynwood MCP leistet, was die Source-Available-Lizenz erlaubt, wie sich die unsignierte Alpha installiert und welche Daten den Rechner verlassen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Arynwood MCP Rezension',
    targetKeywords: [
      'arynwood mcp rezension',
      'arynwood mcp',
      'lokaler ki arbeitsbereich ollama',
      'source-available ki app',
      'ollama desktop app linux windows',
      'mcp werkzeuganbindung desktop',
    ],
    current_hardware_mentioned: ['NVIDIA GPU with 12 GB VRAM'],
    leadAnswerBlock: '**Arynwood MCP (Version 0.5.3, veröffentlicht am 23. Oktober 2026) ist eine Desktop-Alpha für Linux und Windows, die laut Website Chat, Dokumentensuche und Werkzeuganbindungen über Ollama auf Ihrem eigenen Rechner ausführt.** Jede Aussage in dieser Rezension stammt von den eigenen Seiten des Projekts; PromptQuorum hat die Software weder installiert noch getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was brauche ich, um Arynwood MCP auszuführen?',
        answer: 'Laut Dokumentation des Projekts Linux x86_64 oder Windows x64, mindestens 16 GB RAM und 20 GB freien Speicherplatz sowie ein separat installiertes Ollama. macOS wird nicht unterstützt.',
        bullets: [
          'Der Chat ist Multi-Persona und streamt von Ollama; OpenAI-kompatible Server lassen sich hinzufügen.',
          'Die Wissenssuche benötigt Qdrant und ein Ollama-Embedding-Modell, beides separat installiert.',
          'Eine Grafikkarte ist für den Chat optional; die Bild-, Musik- und Videowerkzeuge brauchen eine NVIDIA-Karte, empfohlen werden 12 GB VRAM oder mehr.',
          'MCP-Werkzeugserver lassen sich anbinden, darunter Kdenlive-Videoschnitt über Cutroom.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist Arynwood MCP?',
        anchor: 'what-is-arynwood-mcp',
      },
      {
        label: 'Bezugsquellen',
        anchor: 'get-it',
      },
      {
        label: 'Was Sie brauchen',
        anchor: 'requirements',
      },
      {
        label: 'Preis und Lizenz',
        anchor: 'pricing',
      },
      {
        label: 'So starten Sie',
        anchor: 'getting-started',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Datenschutz und Netzwerknutzung',
        anchor: 'privacy',
      },
      {
        label: 'Für wen sich die App eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Wettbewerber und Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq',
      },
      {
        label: 'Fazit',
        anchor: 'verdict',
      },
      {
        label: 'Quellen',
        anchor: 'sources',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Arynwood MCP ist eine Desktop-Alpha für Linux und Windows, die mit lokalen Ollama-Modellen chattet und Dokumentensuche, Gedächtnis, eine Design-Arbeitsfläche und MCP-Werkzeuganbindungen ergänzt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als ein App-Fenster um ein lokales Chatmodell, eine Dokumentenbibliothek und einen Werkzeugkasten vor, installiert aus einem heruntergeladenen Paket statt aus einem Store.',
          },
        ],
        items: [
          'Pflege: Version 0.5.3 erschien am 23. Oktober 2026 und ist zum Zeitpunkt der Prüfung das jüngste Upstream-Update; das Repository wurde am 10. September 2026 angelegt, eine Warnung vor einem veralteten Projekt gilt also nicht, doch das Projekt ist erst etwa sechs Wochen alt.',
          'Lizenz: Source-Available, nicht Open Source, und auf persönliche oder interne Nutzung beschränkt.',
          'Installer: Der Windows-Installer ist unsigniert, und die gesamte App ist als Alpha gekennzeichnet.',
          'Daten: Laut Website gibt es keine Telemetrie, doch mehrere Funktionen senden Daten nach außen, und ein Offline-Modus wird nicht erzwungen.',
          'Grundlage: Website, README, Lizenzdatei und Release Notes, gelesen am 24. Oktober 2026, ohne eigenen Praxistest.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat Arynwood MCP weder installiert noch getestet oder gemessen. Aussagen unten zu Funktionen, Datenschutz und Sicherheit sind die des Projekts.',
          },
        ],
      },
      overview: {
        id: 'what-is-arynwood-mcp',
        title: 'Was ist Arynwood MCP?',
        content: [
          '**Arynwood MCP ist ein lokal ausgerichteter persönlicher KI- und Kreativ-Arbeitsbereich von Arynwood Technology, entwickelt von Lorelei Noble, der Chats an Modelle schickt, die in Ollama auf Ihrer eigenen Hardware laufen.** „MCP“ steht für Model Context Protocol, über das die App Werkzeuge anbindet; README und Website beschreiben einen Desktop-Arbeitsbereich, kein Plug-in für andere Programme.',
          'PromptQuorum hat kein anderes Produkt namens Arynwood MCP gefunden. Arynwood Grove desselben Herstellers ist ein eigener Community-Server, mit dem sich die App verbinden kann, und die [Browser-Demo](https://arynwood-technology.github.io/ArynwoodMCP/) der Website zeigt die Oberfläche mit vorgefertigten Gesprächen und ohne echte KI dahinter.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Arynwood MCP wird über die GitHub-Releases-Seite des Projekts heruntergeladen, mit einem Paket pro System; Ollama wird separat installiert.**',
        ],
        columns: ['System', 'Download'],
        rows: [
          {
            System: 'Linux x86_64 (AppImage)',
            Download: '[arynwood-mcp_0.5.3_amd64.AppImage](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.AppImage)',
          },
          {
            System: 'Debian / Ubuntu (.deb)',
            Download: '[arynwood-mcp_0.5.3_amd64.deb](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.deb)',
          },
          {
            System: 'Windows x64 (unsignierte Alpha)',
            Download: '[arynwood-mcp_0.5.3_x64-setup.exe](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_x64-setup.exe)',
          },
          {
            System: 'Prüfsummen',
            Download: '[SHA256SUMS.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS.txt) (Linux), [SHA256SUMS-windows.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS-windows.txt)',
          },
          {
            System: 'macOS',
            Download: 'Nicht unterstützt',
          },
          {
            System: 'Website',
            Download: '[arynwood.com/mcp](https://arynwood.com/mcp/)',
          },
          {
            System: 'Datenschutz',
            Download: '[Was Ihren Rechner verlässt](https://arynwood.com/mcp/) (keine eigene Datenschutzerklärung)',
          },
          {
            System: 'Sicherheitsbericht',
            Download: '[arynwood.com/mcp-security](https://arynwood.com/mcp-security/)',
          },
          {
            System: 'Quellcode',
            Download: '[github.com/Arynwood-Technology/ArynwoodMCP](https://github.com/Arynwood-Technology/ArynwoodMCP)',
          },
        ],
        note: 'Geprüfte Version: 0.5.3 (Desktop-Alpha), laut GitHub-Release-Seite am 23. Oktober 2026 veröffentlicht und damit zum Zeitpunkt der Prüfung das jüngste Upstream-Update. Der Windows-Installer ist unsigniert, daher zeigt Microsoft Defender SmartScreen unter Umständen „Der Computer wurde durch Windows geschützt“; die Anleitung des Herstellers empfiehlt, zuerst die SHA-256-Prüfsumme zu vergleichen und dann „Weitere Informationen“ und „Trotzdem ausführen“ zu wählen. Das AppImage läuft nach `chmod +x`, und das .deb wird mit `sudo apt install ./datei.deb` installiert. Die Website hat keine eigene Datenschutzerklärung; ihr Abschnitt „What leaves your machine“ ist die Datenschutzangabe.',
      },
      requirements: {
        id: 'requirements',
        title: 'Was Sie brauchen',
        content: [
          '**Arynwood MCP benötigt Linux x86_64 oder Windows x64 sowie ein separat installiertes Ollama; die Tabelle nennt Speicher-, Platz- und Grafikbedarf.** Die Dokumentation ergänzt, dass 8 GB mit einem kleineren Modell oder einem entfernten Endpunkt funktionieren können.',
        ],
        columns: ['Posten', 'Anforderung laut Doku'],
        rows: [
          {
            Posten: 'Linux',
            'Anforderung laut Doku': 'x86_64; AppImage braucht glibc 2.35 oder neuer',
          },
          {
            Posten: 'Windows',
            'Anforderung laut Doku': 'x64-Alpha, Installer pro Benutzer mit WebView2',
          },
          {
            Posten: 'macOS',
            'Anforderung laut Doku': 'Nicht unterstützt',
          },
          {
            Posten: 'Speicher und Platz',
            'Anforderung laut Doku': '16 GB RAM; 20 GB frei plus Modelle',
          },
          {
            Posten: 'Grafikkarte',
            'Anforderung laut Doku': 'Für Chat optional; NVIDIA für Bild/Musik/Video',
          },
          {
            Posten: 'Weitere Dienste',
            'Anforderung laut Doku': 'Ollama nötig; Qdrant für die Wissenssuche',
          },
        ],
        note: 'Ohne NVIDIA-Karte schaltet die App in einen CPU-Modus, der die GPU-Werkzeuge deaktiviert und den Chat auf den Prozessor abstimmt; die Dokumentation warnt, dass ein 8B-Modell auf einem kleinen Server Minuten pro Antwort brauchen kann. Ollama, Qdrant und die GPU-Werkzeuge sind separate Dienste, die nicht in den Installern enthalten sind.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preis und Lizenz',
        content: [
          '**Die Website nennt keinen Preis für die App, und die Pakete werden ohne Gebühr zum Download bereitgestellt; die Arynwood MCP Source-Available License ist jedoch laut Website keine Open-Source-Lizenz und setzt Grenzen.** Einrichtungsdienste des Herstellers werden auf Anfrage angeboten.',
        ],
        items: [
          '**Erlaubt.** Unveränderte Builds herunterladen und für die persönliche oder interne Evaluierung ausführen sowie den Quellcode für den persönlichen oder internen Gebrauch einsehen und ändern.',
          '**Ohne schriftliche Erlaubnis nicht erlaubt.** Die Software oder Ableitungen davon weiterzugeben, zu verkaufen oder unterzulizenzieren und sie als Teil eines gehosteten oder verwalteten Dienstes anzubieten.',
          '**Alpha-Gewährleistung.** Der Lizenztext stellt die Software ohne Gewähr bereit und warnt vor Brüchen zwischen Versionen, Datenverlust und unvollständigen Funktionen; Komponenten Dritter behalten ihre eigenen Lizenzen.',
          '**Der eigene Vorbehalt des Herstellers.** Die Lizenzdatei nennt sich selbst „a template starting point, not reviewed by a lawyer“ und rät, sie vor dem Einsatz für eine öffentliche Veröffentlichung von einem Juristen prüfen zu lassen.',
        ],
        note: 'Gelesen in der [LICENSE-Datei](https://github.com/Arynwood-Technology/ArynwoodMCP/blob/main/LICENSE) am 24. Oktober 2026. Das ist keine Rechtsberatung; lesen Sie die Datei, bevor Sie die Software beruflich nutzen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So starten Sie',
        content: [
          '**Die Schritte folgen den Installations- und Windows-Anleitungen des Herstellers; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Rechner mit den Anforderungen vergleichen',
            whyItMatters: 'Prüfen Sie vor dem Download Arbeitsspeicher, freien Platz und Betriebssystem anhand der Tabelle oben.',
          },
          {
            title: 'Ollama installieren und ein Modell laden',
            whyItMatters: 'Ollama ist nicht enthalten. Installieren Sie es von der eigenen Website und laden Sie dann die Modelle der Personas, oder tragen Sie auf einem Rechner ohne GPU den genauen Namen eines kleinen Modells ein.',
          },
          {
            title: 'Paket herunterladen und Prüfsumme kontrollieren',
            whyItMatters: 'Speichern Sie das Paket für Ihr System und die passende Prüfsummendatei in einem Ordner und vergleichen Sie den SHA-256-Wert, bevor Sie etwas ausführen.',
          },
          {
            title: 'Installieren oder starten',
            whyItMatters: 'Unter Linux machen Sie das AppImage ausführbar und starten es, oder installieren das .deb mit apt. Unter Windows führen Sie den Installer aus, der nur für Ihr Benutzerkonto installiert; wählen Sie bei einer SmartScreen-Warnung „Weitere Informationen“ und „Trotzdem ausführen“.',
          },
          {
            title: 'App öffnen und Dienste verbinden',
            whyItMatters: 'Die App meldet, wenn sie Ollama nicht erreicht. Die Wissenssuche braucht zusätzlich Qdrant, das ebenfalls separat installiert wird.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: ['**Jeder Punkt unten stammt aus Website, README oder der Dokumentation des Herstellers.**'],
        items: [
          '**Chat.** Multi-Persona-Chat mit Streaming von Ollama, Modellverwaltung und Eintragen OpenAI-kompatibler Server.',
          '**Wissen und Gedächtnis.** Lernen aus URL, Datei oder Text; die semantische Suche wird über Qdrant und ein Ollama-Embedding-Modell in den Chat eingebunden, und der Chat behält ein Gedächtnis und nimmt Dateiuploads an.',
          '**MCP-Werkzeuge.** Bindet MCP-Werkzeugserver an, darunter Kdenlive-Schnitt über Cutroom; laut Sicherheitsbericht autorisiert eine Freigabe genau einen Werkzeugaufruf, einmalig.',
          '**Design Center.** Ein Design-Werkzeug mit Arbeitsfläche, dessen Bilderzeugung einen separat installierten Stable-Diffusion-Dienst (A1111) nutzt.',
          '**Audio und Video.** Optionale Studios, die auf separat installierte Zusatzwerkzeuge angewiesen sind; LoRA-Training, skriptbasierte GPU-Werkzeuge und der Projekt-Dateibrowser brauchen einen Quellcode-Checkout, nicht das gepackte Build.',
          '**Community.** Eine optionale Seite, die sich mit einem Arynwood-Grove-Server (0.7.1, Alpha) verbindet; Nachrichten liegen auf diesem Server und sind nicht Ende-zu-Ende-verschlüsselt.',
          '**Gateway.** Ein experimentelles Headless-Gateway zur Fernsteuerung nur durch den Besitzer, standardmäßig aus und aus einem Quellcode-Checkout gestartet.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Die Website sagt, es gebe keine Telemetrie und Chats, Dokumente und Gedächtnis blieben auf Ihrer Festplatte.** Sie ergänzt, dass die App beim Start und danach alle sechs Stunden bei geöffneter App auf GitHub nach einer neuen stabilen Version sucht, dabei keine Zugangsdaten oder Arbeitsinhalte sendet, GitHub aber übliche Verbindungsdaten wie Ihre IP-Adresse erhält.',
          'Weitere Daten verlassen den Rechner laut Website nur über Funktionen, die Sie nutzen: Websuche, Lernen aus einer URL, Downloads, Veröffentlichen in sozialen Netzwerken, Deployments, IRC, ein Grove auf einem Server oder ein von Ihnen hinzugefügter entfernter Modellserver. Der Sicherheitsbericht erklärt, es gebe keine Sandbox auf Betriebssystemebene und keinen erzwungenen Offline-Modus, und der erklärte Umfang sei ein Besitzer auf einem Rechner; lokaler Chat, Dokumentensuche und Gedächtnis können nach dem Herunterladen der Modelle offline funktionieren.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Aussagen des Herstellers. PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft, und der Sicherheitsbericht selbst sagt, seine Tests seien kein Penetrationstest und keine Sicherheitszertifizierung.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Linux- oder Windows-Nutzer,** die einen Ollama-Arbeitsbereich in einer App wollen.',
          '**Menschen, die mit Alpha-Software,** einem unsignierten Installer und einer Lizenz für persönliche oder interne Nutzung zurechtkommen.',
          '**Kdenlive-Cutter,** die Werkzeugaufrufe über Cutroom ausprobieren möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Verhalten im Praxistest.** PromptQuorum hat Arynwood MCP nicht ausgeführt; Funktionsbeschreibungen und die Qualität lokaler Antworten sind daher Aussagen des Projekts.',
          '**Windows-Installation.** Die Release Notes führen eine Installation auf einem frischen Windows-Rechner und das Veröffentlichen auf einem echten Social-Media-Konto für 0.5.3 als nicht ausgeführt auf, und die Windows-Anleitung sagt, Downloads und externe Integrationen seien noch nicht manuell validiert.',
          '**Datenschutz- und Sicherheitsaussagen.** Die Aussagen zu fehlender Telemetrie, Update-Prüfung und Datenflüssen wurden nicht anhand von Code oder Netzwerkverkehr geprüft.',
          '**Erfolgsbilanz.** Die Versionen 0.5.2 und 0.5.3 erschienen beide am 23. Oktober 2026 in einem Repository, das am 10. September 2026 angelegt wurde; eine lange Release-Historie, an der man sich orientieren könnte, gibt es nicht.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          {
            App: '[Jan](/de/power-local-llm/jan-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0 (Variante)',
            Hauptunterschied: 'Open-Source-Desktop-Chat-App mit eigener integrierter Engine',
          },
          {
            App: '[Msty](/de/power-local-llm/msty-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Freemium / Closed Source',
            Hauptunterschied: 'Chat-Oberfläche für Endnutzer mit mehreren Modellanbietern',
          },
          {
            App: '[AnythingLLM](/de/power-local-llm/anythingllm-review)',
            Plattformen: 'Windows, macOS, Linux, Web',
            'Preis / Lizenz': 'Kostenlos / MIT',
            Hauptunterschied: 'Chat mit Ihren Dokumenten über einen integrierten Vektorspeicher',
          },
          {
            App: '[LM Studio](/de/power-local-llm/lm-studio-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / proprietär',
            Hauptunterschied: 'Ausgereifte Oberfläche mit Modellbrowser und Servermodus',
          },
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert es ohne Internet?',
            a: 'Lokaler Chat, Dokumentensuche und Gedächtnis können nach dem Herunterladen der Modelle offline funktionieren, doch es gibt keinen Offline-Schalter, und die Update-Prüfung und webbasierte Funktionen greifen weiterhin aufs Netz zu.',
          },
          {
            q: 'Läuft es auf einem Mac?',
            a: 'Nein, macOS wird laut Plattformanleitung des Herstellers nicht unterstützt. Die Browser-Demo auf der Projektseite zeigt die Oberfläche ohne Installation.',
          },
          {
            q: 'Kann es einen Modellserver auf einem anderen Rechner nutzen?',
            a: 'Auf der Seite „Servers“ lassen sich Ollama- oder OpenAI-kompatible Endpunkte eintragen, und laut Dokumentation kann ein Endpunkt Chat und Bilderzeugung stattdessen auf einem anderen Rechner ausführen.',
          },
          {
            q: 'Wie werden Updates installiert?',
            a: 'Ab Version 0.4.8 erscheint ein Update-Hinweis; die Installation erfolgt manuell, indem Sie den neueren Installer oder das neuere Paket ausführen, und frühere Versionen brauchen zuerst eine manuelle Installation.',
          },
          {
            q: 'Kann ich den Windows-Installer überprüfen?',
            a: 'Der Hersteller veröffentlicht SHA-256-Prüfsummen für jedes Paket und sagt, Builds ab 0.5.4 ließen sich zusätzlich mit GitHub-Attestierungen prüfen. PromptQuorum hat keines von beidem überprüft.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Arynwood MCP ist eine Desktop-Alpha für Linux und Windows, die laut Website Ollama-Chat, Dokumentensuche, Gedächtnis und MCP-Werkzeuganbindungen in einer lokal ausgerichteten App bündelt, mit öffentlichen Installern und einem Release, das am Tag vor dieser Prüfung erschien. Dagegen stehen: Die Lizenz ist Source-Available und auf persönliche oder interne Nutzung beschränkt, der Windows-Installer ist unsigniert, macOS wird nicht unterstützt, weder ein Offline-Modus noch eine Sandbox wird erzwungen, und das Repository ist etwa sechs Wochen alt. Sie eignet sich für Menschen, die mit Alpha-Software zurechtkommen und diese Grenzen akzeptieren; wer eine Open-Source-Lizenz oder eine längere Erfolgsbilanz möchte, kann [Jan](/de/power-local-llm/jan-review) oder [AnythingLLM](/de/power-local-llm/anythingllm-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Arynwood-MCP-Website](https://arynwood.com/mcp/) — Funktionen, Downloads, Anforderungen, Datenschutzangaben und Lizenzangabe, geprüft am 24. Oktober 2026.',
          '[Sicherheitsbericht zu Arynwood MCP](https://arynwood.com/mcp-security/) — Freigabemodell, Aussagen zu Sandbox und Offline-Modus, Testumfang.',
          '[Arynwood MCP auf GitHub](https://github.com/Arynwood-Technology/ArynwoodMCP) — README, LICENSE sowie die Anleitungen zu Windows, Installation und unterstützten Plattformen.',
          '[Release v0.5.3 von Arynwood MCP](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3) — Veröffentlichungsdatum, Paketliste, Prüfsummen und Release Notes.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Jan-Rezension](/de/power-local-llm/jan-review) — eine Open-Source-Desktop-Chat-App mit eigener Engine.',
          '[Msty-Rezension](/de/power-local-llm/msty-review) — ein Chat-Client für Endnutzer mit mehreren Modellanbietern.',
          '[AnythingLLM-Rezension](/de/power-local-llm/anythingllm-review) — Dokumenten-Chat mit integriertem Vektorspeicher.',
          '[LM-Studio-Rezension](/de/power-local-llm/lm-studio-review) — eine Desktop-App mit Modellbrowser und lokalem Server.',
          '[Lokale LLM-Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich für Chat-Apps und Assistenten.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/arynwood-mcp-review-hero-es.webp',
    title: 'Reseña de Arynwood MCP: un espacio de trabajo de IA local en alfa',
    seoTitle: 'Reseña de Arynwood MCP: espacio de IA local en alfa',
    intro: 'Arynwood MCP es un espacio de trabajo de IA para el escritorio que, según su web y su README, conversa con modelos locales a través de Ollama y añade búsqueda en documentos, memoria, un lienzo de diseño e integraciones de herramientas MCP. Es una alfa en versión 0.5.3 para Linux y Windows bajo una licencia de código disponible. Esta reseña refleja la web, el README, el archivo de licencia y las notas de versión, revisados el 24 de octubre de 2026.',
    metaDescription: 'Reseña de Arynwood MCP: espacio de IA local sobre Ollama para Linux y Windows. Estado alfa, instalador sin firmar y licencia de código disponible.',
    twitterDescription: 'Reseña de Arynwood MCP: espacio de IA basado en Ollama para Linux y Windows en alfa, con licencia de código disponible. Requisitos, instaladores y datos.',
    audience: 'Personas con Linux o Windows que quieren saber qué hace Arynwood MCP, qué permite su licencia de código disponible, cómo se instala la alfa sin firmar y qué datos salen del equipo.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Arynwood MCP',
    targetKeywords: [
      'reseña arynwood mcp',
      'arynwood mcp',
      'espacio de trabajo ia local ollama',
      'app ia código disponible',
      'app de escritorio ollama linux windows',
      'integraciones de herramientas mcp',
    ],
    current_hardware_mentioned: ['NVIDIA GPU with 12 GB VRAM'],
    leadAnswerBlock: '**Arynwood MCP (versión 0.5.3, publicada el 23 de octubre de 2026) es una alfa de escritorio para Linux y Windows que, según su web, ejecuta chat, búsqueda en documentos e integraciones de herramientas en tu propio equipo a través de Ollama.** Cada afirmación de esta reseña procede de las páginas del propio proyecto; PromptQuorum no lo ha instalado ni probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué necesito para ejecutar Arynwood MCP?',
        answer: 'Según la documentación del proyecto, Linux x86_64 o Windows x64, al menos 16 GB de RAM y 20 GB de disco libre, además de Ollama instalado por separado. macOS no es compatible.',
        bullets: [
          'El chat es multipersona y transmite desde Ollama; se pueden añadir servidores compatibles con OpenAI.',
          'La búsqueda de conocimiento necesita Qdrant y un modelo de embeddings de Ollama, ambos instalados por separado.',
          'La tarjeta gráfica es opcional para el chat; las herramientas de imagen, música y vídeo necesitan una NVIDIA, con 12 GB de VRAM o más recomendados.',
          'Se pueden conectar servidores de herramientas MCP, incluida la edición de vídeo con Kdenlive mediante Cutroom.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es Arynwood MCP?',
        anchor: 'what-is-arynwood-mcp',
      },
      {
        label: 'Dónde obtenerlo',
        anchor: 'get-it',
      },
      {
        label: 'Qué necesitas',
        anchor: 'requirements',
      },
      {
        label: 'Precio y licencia',
        anchor: 'pricing',
      },
      {
        label: 'Cómo empezar',
        anchor: 'getting-started',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Privacidad y uso de la red',
        anchor: 'privacy',
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use',
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fuentes',
        anchor: 'sources',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Arynwood MCP es una alfa de escritorio para Linux y Windows que conversa con modelos locales de Ollama y añade búsqueda en documentos, memoria, un lienzo de diseño e integraciones de herramientas MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una ventana de aplicación alrededor de un modelo de chat local, una biblioteca de documentos y una caja de herramientas, instalada desde un paquete descargado y no desde una tienda.',
          },
        ],
        items: [
          'Mantenimiento: la versión 0.5.3 se publicó el 23 de octubre de 2026, la última actualización upstream en el momento de la revisión; el repositorio se creó el 10 de septiembre de 2026, así que no se aplica ninguna advertencia de proyecto obsoleto, pero el proyecto tiene unas seis semanas.',
          'Licencia: código disponible, no de código abierto, y limitada al uso personal o interno.',
          'Instaladores: el instalador de Windows no está firmado y toda la aplicación se etiqueta como alfa.',
          'Datos: la web dice que no hay telemetría, pero varias funciones envían datos al exterior y no se impone un modo sin conexión.',
          'Base: la web, el README, el archivo de licencia y las notas de versión, leídos el 24 de octubre de 2026, sin pruebas prácticas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha instalado, probado ni medido Arynwood MCP. Las afirmaciones de abajo sobre funciones, privacidad y seguridad son las del proyecto.',
          },
        ],
      },
      overview: {
        id: 'what-is-arynwood-mcp',
        title: '¿Qué es Arynwood MCP?',
        content: [
          '**Arynwood MCP es un espacio de trabajo personal de IA y creación, con enfoque local, de Arynwood Technology, desarrollado por Lorelei Noble, que envía los chats a modelos que se ejecutan en Ollama en tu propio hardware.** «MCP» significa Model Context Protocol, que la aplicación usa para conectar herramientas; el README y la web describen un espacio de trabajo de escritorio, no un complemento para otros programas.',
          'PromptQuorum no encontró ningún otro producto llamado Arynwood MCP. Arynwood Grove, del mismo autor, es un servidor de comunidad independiente al que la aplicación puede conectarse, y la [demo en el navegador](https://arynwood-technology.github.io/ArynwoodMCP/) de la web muestra la interfaz con conversaciones guionizadas y sin IA real detrás.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde obtenerlo',
        content: [
          '**Arynwood MCP se descarga desde la página de GitHub Releases del proyecto, con un paquete por sistema; Ollama se instala por separado.**',
        ],
        columns: ['Sistema', 'Descarga'],
        rows: [
          {
            Sistema: 'Linux x86_64 (AppImage)',
            Descarga: '[arynwood-mcp_0.5.3_amd64.AppImage](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.AppImage)',
          },
          {
            Sistema: 'Debian / Ubuntu (.deb)',
            Descarga: '[arynwood-mcp_0.5.3_amd64.deb](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.deb)',
          },
          {
            Sistema: 'Windows x64 (alfa sin firmar)',
            Descarga: '[arynwood-mcp_0.5.3_x64-setup.exe](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_x64-setup.exe)',
          },
          {
            Sistema: 'Sumas de comprobación',
            Descarga: '[SHA256SUMS.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS.txt) (Linux), [SHA256SUMS-windows.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS-windows.txt)',
          },
          {
            Sistema: 'macOS',
            Descarga: 'No compatible',
          },
          {
            Sistema: 'Sitio web',
            Descarga: '[arynwood.com/mcp](https://arynwood.com/mcp/)',
          },
          {
            Sistema: 'Privacidad',
            Descarga: '[Qué sale de tu equipo](https://arynwood.com/mcp/) (sin política de privacidad aparte)',
          },
          {
            Sistema: 'Informe de seguridad',
            Descarga: '[arynwood.com/mcp-security](https://arynwood.com/mcp-security/)',
          },
          {
            Sistema: 'Código fuente',
            Descarga: '[github.com/Arynwood-Technology/ArynwoodMCP](https://github.com/Arynwood-Technology/ArynwoodMCP)',
          },
        ],
        note: 'Versión revisada: 0.5.3 (alfa de escritorio), publicada el 23 de octubre de 2026 según la página de versión de GitHub, que es la última actualización upstream en el momento de la revisión. El instalador de Windows no está firmado, por lo que Microsoft Defender SmartScreen puede mostrar «Windows protegió su PC»; la guía del autor indica comparar primero la suma SHA-256 y luego elegir Más información y Ejecutar de todas formas. El AppImage se ejecuta tras `chmod +x` y el .deb se instala con `sudo apt install ./archivo.deb`. La web no tiene una política de privacidad aparte; su sección «What leaves your machine» es la declaración de privacidad.',
      },
      requirements: {
        id: 'requirements',
        title: 'Qué necesitas',
        content: [
          '**Arynwood MCP necesita Linux x86_64 o Windows x64 con Ollama instalado por separado; la tabla indica los requisitos de memoria, disco y gráficos.** La documentación añade que 8 GB pueden bastar con un modelo más pequeño o un endpoint remoto.',
        ],
        columns: ['Elemento', 'Requisito según la doc'],
        rows: [
          {
            Elemento: 'Linux',
            'Requisito según la doc': 'x86_64; el AppImage exige glibc 2.35 o superior',
          },
          {
            Elemento: 'Windows',
            'Requisito según la doc': 'Alfa x64, instalador por usuario con WebView2',
          },
          {
            Elemento: 'macOS',
            'Requisito según la doc': 'No compatible',
          },
          {
            Elemento: 'Memoria y disco',
            'Requisito según la doc': '16 GB de RAM; 20 GB libres más los modelos',
          },
          {
            Elemento: 'Tarjeta gráfica',
            'Requisito según la doc': 'Opcional en chat; NVIDIA para imagen/música/vídeo',
          },
          {
            Elemento: 'Otros servicios',
            'Requisito según la doc': 'Ollama obligatorio; Qdrant para la búsqueda',
          },
        ],
        note: 'Sin tarjeta NVIDIA, la aplicación cambia a un modo CPU que desactiva las herramientas de GPU y ajusta el chat para el procesador; la documentación advierte de que un modelo de 8B puede tardar minutos por respuesta en un servidor pequeño. Ollama, Qdrant y las herramientas de GPU son servicios independientes que los instaladores no incluyen.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precio y licencia',
        content: [
          '**La web no indica ningún precio para la aplicación y los paquetes se publican para descargar sin coste; sin embargo, la Arynwood MCP Source-Available License según la web no es una licencia de código abierto y impone límites.** Los servicios de configuración del autor se presupuestan bajo petición.',
        ],
        items: [
          '**Permitido.** Descargar y ejecutar compilaciones sin modificar para evaluación personal o interna, y ver y modificar el código fuente para uso personal o interno.',
          '**No permitido sin permiso por escrito.** Redistribuir, vender o sublicenciar el software o cualquier derivado, y ofrecerlo como parte de un servicio alojado o gestionado.',
          '**Garantía en alfa.** El texto de la licencia ofrece el software tal cual y advierte de cambios incompatibles, pérdida de datos y funciones incompletas; los componentes de terceros conservan sus propias licencias.',
          '**La propia salvedad del autor.** El archivo de licencia se describe como «a template starting point, not reviewed by a lawyer» y recomienda que un abogado lo revise antes de usarlo en un lanzamiento público.',
        ],
        note: 'Leído en el [archivo LICENSE](https://github.com/Arynwood-Technology/ArynwoodMCP/blob/main/LICENSE) el 24 de octubre de 2026. No es asesoramiento jurídico; lee el archivo antes de usar el software en el trabajo.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen las guías de instalación y de Windows del autor; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Compara tu equipo con los requisitos',
            whyItMatters: 'Antes de descargar, comprueba memoria, disco libre y sistema operativo con la tabla de arriba.',
          },
          {
            title: 'Instala Ollama y descarga un modelo',
            whyItMatters: 'Ollama no viene incluido. Instálalo desde su propio sitio y descarga los modelos que usan las personas, o escribe el nombre exacto de un modelo pequeño si el equipo no tiene GPU.',
          },
          {
            title: 'Descarga el paquete y comprueba la suma',
            whyItMatters: 'Guarda el paquete de tu sistema y el archivo de sumas correspondiente en una misma carpeta y compara el valor SHA-256 antes de ejecutar nada.',
          },
          {
            title: 'Instálalo o ejecútalo',
            whyItMatters: 'En Linux, da permiso de ejecución al AppImage y arráncalo, o instala el .deb con apt. En Windows, ejecuta el instalador, que se instala solo para tu cuenta; si SmartScreen avisa, elige Más información y Ejecutar de todas formas.',
          },
          {
            title: 'Abre la aplicación y conecta los servicios',
            whyItMatters: 'La aplicación avisa si no alcanza Ollama. La búsqueda de conocimiento necesita además Qdrant, que también se instala por separado.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: ['**Cada punto de abajo procede de la web, el README o la documentación del autor.**'],
        items: [
          '**Chat.** Chat multipersona transmitido desde Ollama, con gestión de modelos y registro de servidores compatibles con OpenAI.',
          '**Conocimiento y memoria.** Enséñale desde una URL, un archivo o un texto; la búsqueda semántica se añade al chat mediante Qdrant y un modelo de embeddings de Ollama, y el chat conserva memoria y acepta archivos.',
          '**Herramientas MCP.** Conecta servidores de herramientas MCP, incluida la edición con Kdenlive mediante Cutroom; según el informe de seguridad, una aprobación autoriza una única llamada exacta a una herramienta, una sola vez.',
          '**Design Center.** Una herramienta de diseño con lienzo cuya generación de imágenes usa un servicio de Stable Diffusion (A1111) instalado por separado.',
          '**Audio y vídeo.** Estudios opcionales que dependen de herramientas auxiliares instaladas por separado; el entrenamiento LoRA, las herramientas de GPU basadas en scripts y el explorador de archivos del proyecto requieren una copia del código fuente, no la compilación empaquetada.',
          '**Comunidad.** Una página opcional que se conecta a un servidor Arynwood Grove (0.7.1, alfa); los mensajes se guardan en ese servidor y no tienen cifrado de extremo a extremo.',
          '**Gateway.** Una pasarela experimental sin interfaz para control remoto solo por el propietario, desactivada por defecto y ejecutada desde una copia del código fuente.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**La web dice que no hay telemetría y que los chats, documentos y la memoria permanecen en tu disco.** Añade que la aplicación consulta GitHub al arrancar y cada seis horas mientras está abierta para ver si hay una versión estable más nueva, sin enviar credenciales ni contenido del espacio de trabajo, aunque GitHub recibe datos normales de conexión, como tu dirección IP.',
          'Otros datos salen del equipo, según la web, solo mediante funciones que uses: búsqueda web, aprendizaje desde una URL, descargas, publicación en redes sociales, despliegues, IRC, un Grove en un servidor o un servidor de modelos remoto que añadas. El informe de seguridad afirma que no hay sandbox a nivel de sistema operativo ni modo sin conexión impuesto, y que el alcance declarado es un propietario en un equipo; el chat local, la búsqueda en documentos y la memoria pueden funcionar sin conexión una vez descargados los modelos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son afirmaciones del autor. PromptQuorum no ha auditado el código ni el tráfico de red, y el propio informe de seguridad dice que sus pruebas no son una prueba de penetración ni una certificación de seguridad.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Linux o Windows** que quieren un espacio de trabajo con Ollama en una sola aplicación.',
          '**Quienes se sienten cómodos con software en alfa,** un instalador sin firmar y una licencia de uso personal o interno.',
          '**Editores con Kdenlive** que quieren probar el uso de herramientas mediante Cutroom.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Comportamiento en la práctica.** PromptQuorum no ejecutó Arynwood MCP, así que las descripciones de funciones y la calidad de las respuestas locales son afirmaciones del proyecto.',
          '**Instalación en Windows.** Las notas de versión indican que la instalación en un Windows limpio y la publicación en una cuenta social real no se probaron para 0.5.3, y la guía de Windows dice que las descargas y las integraciones externas aún no están validadas manualmente.',
          '**Afirmaciones de privacidad y seguridad.** Las afirmaciones sobre la ausencia de telemetría, la comprobación de actualizaciones y los flujos de datos no se contrastaron con el código ni con el tráfico de red.',
          '**Trayectoria.** Las versiones 0.5.2 y 0.5.3 aparecieron el 23 de octubre de 2026 en un repositorio creado el 10 de septiembre de 2026; no hay un historial largo de versiones con el que juzgar.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[Jan](/es/power-local-llm/jan-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / Apache 2.0 (variante)',
            'Diferencia clave': 'App de chat de escritorio de código abierto con motor propio integrado',
          },
          {
            App: '[Msty](/es/power-local-llm/msty-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Freemium / código cerrado',
            'Diferencia clave': 'Interfaz de chat para el gran público con varios proveedores de modelos',
          },
          {
            App: '[AnythingLLM](/es/power-local-llm/anythingllm-review)',
            Plataformas: 'Windows, macOS, Linux, web',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat con tus documentos mediante un almacén vectorial integrado',
          },
          {
            App: '[LM Studio](/es/power-local-llm/lm-studio-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / propietaria',
            'Diferencia clave': 'Interfaz muy pulida con explorador de modelos y modo servidor',
          },
        ],
        note: 'Los detalles de los competidores cambian a menudo; confirma precio, licencia y plataformas en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona sin internet?',
            a: 'El chat local, la búsqueda en documentos y la memoria pueden funcionar sin conexión una vez descargados los modelos, pero no hay un interruptor sin conexión, y la comprobación de actualizaciones y las funciones web siguen buscando la red.',
          },
          {
            q: '¿Funciona en un Mac?',
            a: 'No, macOS no es compatible según la guía de plataformas del autor. La demo en el navegador del sitio del proyecto muestra la interfaz sin instalar nada.',
          },
          {
            q: '¿Puede usar un servidor de modelos en otro equipo?',
            a: 'La página «Servers» registra endpoints de Ollama o compatibles con OpenAI, y la documentación dice que un endpoint puede ejecutar el chat y la generación de imágenes en otro equipo.',
          },
          {
            q: '¿Cómo se instalan las actualizaciones?',
            a: 'Desde la 0.4.8 aparece un aviso de actualización; la instalación es manual, ejecutando el instalador o paquete más reciente, y las versiones anteriores necesitan antes una instalación manual.',
          },
          {
            q: '¿Puedo verificar el instalador de Windows?',
            a: 'El autor publica sumas SHA-256 de cada paquete y dice que las compilaciones desde la 0.5.4 también se podrán comprobar con atestaciones de GitHub. PromptQuorum no ha verificado ninguna de las dos cosas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Arynwood MCP es una alfa de escritorio para Linux y Windows que, según su web, reúne chat con Ollama, búsqueda en documentos, memoria e integraciones de herramientas MCP en una aplicación con enfoque local, con instaladores públicos y una versión publicada el día anterior a esta revisión. En contra: la licencia es de código disponible y se limita al uso personal o interno, el instalador de Windows no está firmado, macOS no es compatible, no se impone ningún modo sin conexión ni sandbox y el repositorio tiene unas seis semanas. Encaja con quien se siente cómodo con software en alfa y acepta esos límites; quien busque una licencia de código abierto o más trayectoria puede comparar [Jan](/es/power-local-llm/jan-review) o [AnythingLLM](/es/power-local-llm/anythingllm-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Web de Arynwood MCP](https://arynwood.com/mcp/) — funciones, descargas, requisitos, declaraciones de privacidad y de licencia, revisadas el 24 de octubre de 2026.',
          '[Informe de seguridad de Arynwood MCP](https://arynwood.com/mcp-security/) — modelo de aprobación, declaraciones sobre sandbox y modo sin conexión, alcance de las pruebas.',
          '[Arynwood MCP en GitHub](https://github.com/Arynwood-Technology/ArynwoodMCP) — README, LICENSE y las guías de Windows, instalación y plataformas compatibles.',
          '[Versión v0.5.3 de Arynwood MCP](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3) — fecha de publicación, lista de paquetes, sumas de comprobación y notas de versión.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Jan](/es/power-local-llm/jan-review) — una app de chat de escritorio de código abierto con motor propio.',
          '[Reseña de Msty](/es/power-local-llm/msty-review) — un cliente de chat para el gran público con varios proveedores de modelos.',
          '[Reseña de AnythingLLM](/es/power-local-llm/anythingllm-review) — chat con documentos con almacén vectorial integrado.',
          '[Reseña de LM Studio](/es/power-local-llm/lm-studio-review) — una app de escritorio con explorador de modelos y servidor local.',
          '[Asistentes de chat con LLM locales: comparativa](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de la categoría para apps de chat y asistentes.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/arynwood-mcp-review-hero-fr.webp',
    title: 'Test d\'Arynwood MCP : un espace de travail IA local en alpha',
    seoTitle: 'Test d\'Arynwood MCP : espace de travail IA local en alpha',
    intro: 'Arynwood MCP est un espace de travail IA pour le bureau qui, selon son site et son README, dialogue avec des modèles locaux via Ollama et ajoute la recherche dans les documents, une mémoire, un canevas de conception et des intégrations d\'outils MCP. C\'est une alpha en version 0.5.3 pour Linux et Windows, sous une licence à code source disponible. Ce test reflète le site, le README, le fichier de licence et les notes de version, consultés le 24 octobre 2026.',
    metaDescription: 'Test d\'Arynwood MCP : espace IA local sur Ollama pour Linux et Windows. Statut alpha, installateur non signé, licence à code source disponible.',
    twitterDescription: 'Test d\'Arynwood MCP : un espace IA basé sur Ollama pour Linux et Windows, en alpha, sous licence à code source disponible. Prérequis, installateurs, données.',
    audience: 'Les personnes sous Linux ou Windows qui veulent savoir ce que fait Arynwood MCP, ce que permet sa licence à code source disponible, comment s\'installe l\'alpha non signée et quelles données quittent la machine.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test Arynwood MCP',
    targetKeywords: [
      'test arynwood mcp',
      'arynwood mcp',
      'espace de travail ia local ollama',
      'appli ia code source disponible',
      'appli bureau ollama linux windows',
      'intégrations d\'outils mcp',
    ],
    current_hardware_mentioned: ['NVIDIA GPU with 12 GB VRAM'],
    leadAnswerBlock: '**Arynwood MCP (version 0.5.3, publiée le 23 octobre 2026) est une alpha de bureau pour Linux et Windows qui, selon son site, exécute chat, recherche dans les documents et intégrations d\'outils sur votre propre machine via Ollama.** Chaque affirmation de ce test provient des pages du projet lui-même ; PromptQuorum ne l\'a ni installé ni testé.',
    quickAnswerTop: {
      fr: {
        question: 'De quoi ai-je besoin pour exécuter Arynwood MCP ?',
        answer: 'Selon la documentation du projet, Linux x86_64 ou Windows x64, au moins 16 Go de RAM et 20 Go d\'espace disque libre, ainsi qu\'Ollama installé séparément. macOS n\'est pas pris en charge.',
        bullets: [
          'Le chat est multi-persona et diffuse depuis Ollama ; des serveurs compatibles OpenAI peuvent être ajoutés.',
          'La recherche de connaissances exige Qdrant et un modèle d\'embeddings Ollama, tous deux installés séparément.',
          'Une carte graphique est facultative pour le chat ; les outils d\'image, de musique et de vidéo exigent une carte NVIDIA, avec 12 Go de VRAM ou plus recommandés.',
          'Des serveurs d\'outils MCP peuvent être connectés, dont le montage vidéo Kdenlive via Cutroom.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu\'est-ce qu\'Arynwood MCP ?',
        anchor: 'what-is-arynwood-mcp',
      },
      {
        label: 'Où le télécharger',
        anchor: 'get-it',
      },
      {
        label: 'Ce qu\'il vous faut',
        anchor: 'requirements',
      },
      {
        label: 'Prix et licence',
        anchor: 'pricing',
      },
      {
        label: 'Pour démarrer',
        anchor: 'getting-started',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Confidentialité et usage du réseau',
        anchor: 'privacy',
      },
      {
        label: 'À qui il s\'adresse',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n\'avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Lectures associées',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Arynwood MCP est une alpha de bureau pour Linux et Windows qui dialogue avec des modèles Ollama locaux et ajoute la recherche dans les documents, une mémoire, un canevas de conception et des intégrations d\'outils MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez une fenêtre d\'application autour d\'un modèle de chat local, d\'une bibliothèque de documents et d\'une boîte à outils, installée depuis un paquet téléchargé plutôt que depuis une boutique.',
          },
        ],
        items: [
          'Maintenance : la version 0.5.3 a été publiée le 23 octobre 2026, dernière mise à jour en amont au moment de la vérification ; le dépôt a été créé le 10 septembre 2026, donc aucun avertissement de projet abandonné ne s\'applique, mais le projet a environ six semaines.',
          'Licence : code source disponible, pas open source, et limitée à un usage personnel ou interne.',
          'Installateurs : l\'installateur Windows n\'est pas signé et toute l\'application est présentée comme une alpha.',
          'Données : le site affirme qu\'il n\'y a pas de télémétrie, mais plusieurs fonctions envoient des données vers l\'extérieur et aucun mode hors ligne n\'est imposé.',
          'Base : le site, le README, le fichier de licence et les notes de version, lus le 24 octobre 2026, sans test pratique.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n\'a ni installé, ni testé, ni mesuré Arynwood MCP. Les affirmations ci-dessous sur les fonctions, la confidentialité et la sécurité sont celles du projet.',
          },
        ],
      },
      overview: {
        id: 'what-is-arynwood-mcp',
        title: 'Qu\'est-ce qu\'Arynwood MCP ?',
        content: [
          '**Arynwood MCP est un espace de travail personnel d\'IA et de création, axé sur le local, édité par Arynwood Technology et conçu par Lorelei Noble, qui envoie les conversations à des modèles exécutés dans Ollama sur votre propre matériel.** « MCP » signifie Model Context Protocol, que l\'application utilise pour connecter des outils ; le README et le site décrivent un espace de travail de bureau, pas un module d\'extension pour d\'autres programmes.',
          'PromptQuorum n\'a trouvé aucun autre produit nommé Arynwood MCP. Arynwood Grove, du même éditeur, est un serveur de communauté distinct auquel l\'application peut se connecter, et la [démo dans le navigateur](https://arynwood-technology.github.io/ArynwoodMCP/) du site montre l\'interface avec des conversations scénarisées et sans véritable IA derrière.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où le télécharger',
        content: [
          '**Arynwood MCP se télécharge depuis la page GitHub Releases du projet, avec un paquet par système ; Ollama s\'installe séparément.**',
        ],
        columns: ['Système', 'Téléchargement'],
        rows: [
          {
            'Système': 'Linux x86_64 (AppImage)',
            'Téléchargement': '[arynwood-mcp_0.5.3_amd64.AppImage](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.AppImage)',
          },
          {
            'Système': 'Debian / Ubuntu (.deb)',
            'Téléchargement': '[arynwood-mcp_0.5.3_amd64.deb](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.deb)',
          },
          {
            'Système': 'Windows x64 (alpha non signée)',
            'Téléchargement': '[arynwood-mcp_0.5.3_x64-setup.exe](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_x64-setup.exe)',
          },
          {
            'Système': 'Sommes de contrôle',
            'Téléchargement': '[SHA256SUMS.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS.txt) (Linux), [SHA256SUMS-windows.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS-windows.txt)',
          },
          {
            'Système': 'macOS',
            'Téléchargement': 'Non pris en charge',
          },
          {
            'Système': 'Site web',
            'Téléchargement': '[arynwood.com/mcp](https://arynwood.com/mcp/)',
          },
          {
            'Système': 'Confidentialité',
            'Téléchargement': '[Ce qui quitte votre machine](https://arynwood.com/mcp/) (pas de politique de confidentialité distincte)',
          },
          {
            'Système': 'Note de sécurité',
            'Téléchargement': '[arynwood.com/mcp-security](https://arynwood.com/mcp-security/)',
          },
          {
            'Système': 'Code source',
            'Téléchargement': '[github.com/Arynwood-Technology/ArynwoodMCP](https://github.com/Arynwood-Technology/ArynwoodMCP)',
          },
        ],
        note: 'Version testée : 0.5.3 (alpha de bureau), publiée le 23 octobre 2026 selon la page de version GitHub, qui est la dernière mise à jour en amont au moment de la vérification. L\'installateur Windows n\'est pas signé, donc Microsoft Defender SmartScreen peut afficher « Windows a protégé votre PC » ; le guide de l\'éditeur recommande de comparer d\'abord la somme SHA-256, puis de choisir Informations complémentaires et Exécuter quand même. L\'AppImage se lance après `chmod +x`, et le .deb s\'installe avec `sudo apt install ./fichier.deb`. Le site n\'a pas de politique de confidentialité distincte ; sa section « What leaves your machine » tient lieu de déclaration de confidentialité.',
      },
      requirements: {
        id: 'requirements',
        title: 'Ce qu\'il vous faut',
        content: [
          '**Arynwood MCP exige Linux x86_64 ou Windows x64 avec Ollama installé séparément ; le tableau indique les besoins en mémoire, en disque et en graphique.** La documentation ajoute que 8 Go peuvent suffire avec un modèle plus petit ou un point d\'accès distant.',
        ],
        columns: ['Élément', 'Exigence selon la doc'],
        rows: [
          {
            'Élément': 'Linux',
            'Exigence selon la doc': 'x86_64 ; l\'AppImage exige glibc 2.35 ou plus',
          },
          {
            'Élément': 'Windows',
            'Exigence selon la doc': 'Alpha x64, installateur par utilisateur avec WebView2',
          },
          {
            'Élément': 'macOS',
            'Exigence selon la doc': 'Non pris en charge',
          },
          {
            'Élément': 'Mémoire et disque',
            'Exigence selon la doc': '16 Go de RAM ; 20 Go libres plus les modèles',
          },
          {
            'Élément': 'Carte graphique',
            'Exigence selon la doc': 'Facultative pour le chat ; NVIDIA pour image/musique/vidéo',
          },
          {
            'Élément': 'Autres services',
            'Exigence selon la doc': 'Ollama requis ; Qdrant pour la recherche',
          },
        ],
        note: 'Sans carte NVIDIA, l\'application passe en mode CPU, qui désactive les outils GPU et règle le chat pour le processeur ; la documentation avertit qu\'un modèle 8B peut prendre des minutes par réponse sur un petit serveur. Ollama, Qdrant et les outils GPU sont des services distincts, non inclus dans les installateurs.',
      },
      pricing: {
        id: 'pricing',
        title: 'Prix et licence',
        content: [
          '**Le site n\'indique aucun prix pour l\'application et les paquets sont publiés en téléchargement sans frais ; la Arynwood MCP Source-Available License n\'est toutefois pas, selon le site, une licence open source et fixe des limites.** Les services de mise en place de l\'éditeur sont proposés sur devis.',
        ],
        items: [
          '**Autorisé.** Télécharger et exécuter des versions non modifiées pour une évaluation personnelle ou interne, et consulter et modifier le code source pour un usage personnel ou interne.',
          '**Interdit sans autorisation écrite.** Redistribuer, vendre ou concéder en sous-licence le logiciel ou tout dérivé, et le proposer dans le cadre d\'un service hébergé ou géré.',
          '**Garantie en alpha.** Le texte de la licence fournit le logiciel en l\'état et met en garde contre les changements incompatibles, la perte de données et les fonctions incomplètes ; les composants tiers conservent leurs propres licences.',
          '**La réserve de l\'éditeur lui-même.** Le fichier de licence se décrit comme « a template starting point, not reviewed by a lawyer » et invite à le faire relire par un juriste avant de s\'y fier pour une diffusion publique.',
        ],
        note: 'Lu dans le [fichier LICENSE](https://github.com/Arynwood-Technology/ArynwoodMCP/blob/main/LICENSE) le 24 octobre 2026. Ce n\'est pas un conseil juridique ; lisez le fichier avant d\'utiliser le logiciel au travail.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour démarrer',
        content: [
          '**Les étapes suivent les guides d\'installation et Windows de l\'éditeur ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Comparer votre ordinateur aux prérequis',
            whyItMatters: 'Avant de télécharger, vérifiez la mémoire, l\'espace disque libre et le système avec le tableau ci-dessus.',
          },
          {
            title: 'Installer Ollama et récupérer un modèle',
            whyItMatters: 'Ollama n\'est pas inclus. Installez-le depuis son propre site, puis récupérez les modèles utilisés par les personas, ou saisissez le nom exact d\'un petit modèle sur un ordinateur sans GPU.',
          },
          {
            title: 'Télécharger le paquet et vérifier la somme de contrôle',
            whyItMatters: 'Enregistrez le paquet de votre système et le fichier de sommes correspondant dans un même dossier, et comparez la valeur SHA-256 avant de lancer quoi que ce soit.',
          },
          {
            title: 'Installer ou lancer',
            whyItMatters: 'Sous Linux, rendez l\'AppImage exécutable et lancez-la, ou installez le .deb avec apt. Sous Windows, exécutez l\'installateur, qui s\'installe pour votre seul compte utilisateur ; si SmartScreen avertit, choisissez Informations complémentaires puis Exécuter quand même.',
          },
          {
            title: 'Ouvrir l\'application et connecter les services',
            whyItMatters: 'L\'application signale si elle ne joint pas Ollama. La recherche de connaissances exige en plus Qdrant, également installé séparément.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient du site, du README ou de la documentation de l\'éditeur.**',
        ],
        items: [
          '**Chat.** Chat multi-persona diffusé depuis Ollama, avec gestion des modèles et enregistrement de serveurs compatibles OpenAI.',
          '**Connaissances et mémoire.** Alimentation depuis une URL, un fichier ou un texte ; la recherche sémantique est ajoutée au chat via Qdrant et un modèle d\'embeddings Ollama, et le chat garde une mémoire et accepte des fichiers.',
          '**Outils MCP.** Connecte des serveurs d\'outils MCP, dont le montage Kdenlive via Cutroom ; selon la note de sécurité, une approbation autorise un seul appel d\'outil précis, une seule fois.',
          '**Design Center.** Un outil de conception à canevas dont la génération d\'images s\'appuie sur un service Stable Diffusion (A1111) installé séparément.',
          '**Audio et vidéo.** Des studios facultatifs qui reposent sur des outils annexes installés séparément ; l\'entraînement LoRA, les outils GPU à base de scripts et l\'explorateur de fichiers du projet exigent une copie du code source, pas la version empaquetée.',
          '**Communauté.** Une page facultative qui se connecte à un serveur Arynwood Grove (0.7.1, alpha) ; les messages sont conservés sur ce serveur et ne sont pas chiffrés de bout en bout.',
          '**Passerelle.** Une passerelle expérimentale sans interface pour un contrôle à distance réservé au propriétaire, désactivée par défaut et lancée depuis une copie du code source.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Le site affirme qu\'il n\'y a pas de télémétrie et que les conversations, documents et la mémoire restent sur votre disque.** Il ajoute que l\'application interroge GitHub au démarrage, puis toutes les six heures tant qu\'elle est ouverte, pour savoir s\'il existe une version stable plus récente, sans envoyer d\'identifiants ni de contenu de l\'espace de travail, bien que GitHub reçoive des données de connexion habituelles comme votre adresse IP.',
          'D\'autres données quittent la machine, selon le site, uniquement via des fonctions que vous utilisez : recherche web, apprentissage depuis une URL, téléchargements, publication sur les réseaux sociaux, déploiements, IRC, un Grove sur un serveur ou un serveur de modèles distant que vous ajoutez. La note de sécurité indique qu\'il n\'y a ni bac à sable au niveau du système d\'exploitation ni mode hors ligne imposé, et que le périmètre annoncé est un propriétaire sur une machine ; le chat local, la recherche dans les documents et la mémoire peuvent fonctionner hors ligne une fois les modèles téléchargés.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des affirmations de l\'éditeur. PromptQuorum n\'a audité ni le code ni le trafic réseau, et la note de sécurité elle-même précise que ses tests ne constituent ni un test d\'intrusion ni une certification de sécurité.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s\'adresse',
        items: [
          '**Utilisateurs de Linux ou Windows** qui veulent un espace de travail Ollama dans une seule application.',
          '**Personnes à l\'aise avec un logiciel en alpha,** un installateur non signé et une licence d\'usage personnel ou interne.',
          '**Monteurs Kdenlive** qui veulent essayer l\'appel d\'outils via Cutroom.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Comportement en pratique.** PromptQuorum n\'a pas exécuté Arynwood MCP ; les descriptions des fonctions et la qualité des réponses locales sont donc des affirmations du projet.',
          '**Installation sous Windows.** Les notes de version indiquent que l\'installation sur une machine Windows propre et la publication sur un vrai compte social n\'ont pas été testées pour la 0.5.3, et le guide Windows dit que les téléchargements et les intégrations externes ne sont pas encore validés manuellement.',
          '**Affirmations de confidentialité et de sécurité.** Les déclarations sur l\'absence de télémétrie, la vérification des mises à jour et les flux de données n\'ont pas été confrontées au code ni au trafic réseau.',
          '**Historique.** Les versions 0.5.2 et 0.5.3 sont toutes deux parues le 23 octobre 2026 dans un dépôt créé le 10 septembre 2026 ; il n\'existe pas de long historique de versions pour en juger.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Appli', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Appli: '[Jan](/fr/power-local-llm/jan-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / Apache 2.0 (variante)',
            'Différence clé': 'Appli de chat de bureau open source avec son propre moteur intégré',
          },
          {
            Appli: '[Msty](/fr/power-local-llm/msty-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Freemium / code fermé',
            'Différence clé': 'Interface de chat grand public avec plusieurs fournisseurs de modèles',
          },
          {
            Appli: '[AnythingLLM](/fr/power-local-llm/anythingllm-review)',
            Plateformes: 'Windows, macOS, Linux, web',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat avec vos documents via un magasin vectoriel intégré',
          },
          {
            Appli: '[LM Studio](/fr/power-local-llm/lm-studio-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / propriétaire',
            'Différence clé': 'Interface soignée avec navigateur de modèles et mode serveur',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez prix, licence et plateformes sur la fiche de chaque appli.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Fonctionne-t-il sans internet ?',
            a: 'Le chat local, la recherche dans les documents et la mémoire peuvent fonctionner hors ligne une fois les modèles téléchargés, mais il n\'existe pas d\'interrupteur hors ligne, et la vérification des mises à jour et les fonctions web tentent toujours de joindre le réseau.',
          },
          {
            q: 'Fonctionne-t-il sur un Mac ?',
            a: 'Non, macOS n\'est pas pris en charge selon le guide des plateformes de l\'éditeur. La démo dans le navigateur sur le site du projet montre l\'interface sans rien installer.',
          },
          {
            q: 'Peut-il utiliser un serveur de modèles sur un autre ordinateur ?',
            a: 'La page « Servers » enregistre des points d\'accès Ollama ou compatibles OpenAI, et la documentation indique qu\'un point d\'accès peut exécuter le chat et la génération d\'images sur un autre ordinateur.',
          },
          {
            q: 'Comment les mises à jour s\'installent-elles ?',
            a: 'À partir de la 0.4.8, un avis de mise à jour s\'affiche ; l\'installation est manuelle, en lançant l\'installateur ou le paquet plus récent, et les versions antérieures exigent d\'abord une installation manuelle.',
          },
          {
            q: 'Puis-je vérifier l\'installateur Windows ?',
            a: 'L\'éditeur publie des sommes SHA-256 pour chaque paquet et indique que les versions à partir de la 0.5.4 pourront aussi être vérifiées avec des attestations GitHub. PromptQuorum n\'a vérifié ni l\'un ni l\'autre.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Arynwood MCP est une alpha de bureau pour Linux et Windows qui, selon son site, réunit chat Ollama, recherche dans les documents, mémoire et intégrations d\'outils MCP dans une application axée sur le local, avec des installateurs publics et une version parue la veille de cette vérification. En contrepartie : la licence est à code source disponible et limitée à un usage personnel ou interne, l\'installateur Windows n\'est pas signé, macOS n\'est pas pris en charge, ni mode hors ligne ni bac à sable n\'est imposé, et le dépôt a environ six semaines. Elle convient aux personnes à l\'aise avec un logiciel en alpha qui acceptent ces limites ; celles qui veulent une licence open source ou un historique plus long peuvent comparer [Jan](/fr/power-local-llm/jan-review) ou [AnythingLLM](/fr/power-local-llm/anythingllm-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d\'Arynwood MCP](https://arynwood.com/mcp/) — fonctions, téléchargements, prérequis, déclarations de confidentialité et de licence, consultés le 24 octobre 2026.',
          '[Note de sécurité d\'Arynwood MCP](https://arynwood.com/mcp-security/) — modèle d\'approbation, déclarations sur le bac à sable et le mode hors ligne, périmètre des tests.',
          '[Arynwood MCP sur GitHub](https://github.com/Arynwood-Technology/ArynwoodMCP) — README, LICENSE et les guides Windows, d\'installation et des plateformes prises en charge.',
          '[Version v0.5.3 d\'Arynwood MCP](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3) — date de publication, liste des paquets, sommes de contrôle et notes de version.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Jan](/fr/power-local-llm/jan-review) — une appli de chat de bureau open source avec son propre moteur.',
          '[Test de Msty](/fr/power-local-llm/msty-review) — un client de chat grand public avec plusieurs fournisseurs de modèles.',
          '[Test d\'AnythingLLM](/fr/power-local-llm/anythingllm-review) — chat avec documents et magasin vectoriel intégré.',
          '[Test de LM Studio](/fr/power-local-llm/lm-studio-review) — une appli de bureau avec navigateur de modèles et serveur local.',
          '[Assistants de chat LLM locaux : comparatif](/fr/power-local-llm/local-llm-chat-assistants-compared) — le comparatif de la catégorie pour les applis de chat et assistants.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/arynwood-mcp-review-hero-ja.webp',
    title: 'Arynwood MCPレビュー：アルファ版のローカルAIワークスペース',
    seoTitle: 'Arynwood MCPレビュー：ローカルAI（アルファ版）',
    intro: 'Arynwood MCPは、公式サイトとREADMEによると、Ollama経由でローカルモデルとチャットし、ドキュメント検索、メモリ、デザインキャンバス、MCPツール連携を加えるデスクトップAIワークスペースです。LinuxとWindows向けのバージョン0.5.3のアルファ版で、ソース公開型（source-available）ライセンスで提供されています。このレビューは、2026年10月24日に確認したサイト、README、ライセンスファイル、リリースノートに基づきます。',
    metaDescription: 'Arynwood MCPのレビュー。Ollama上で動くLinux・Windows向けローカルAIワークスペース。アルファ版、未署名インストーラー、ソース公開型ライセンス、データの流れ。',
    twitterDescription: 'Arynwood MCPのレビュー。LinuxとWindows向けのOllamaベースAIワークスペース（アルファ版）。ソース公開型ライセンス、要件、インストーラー、データの流れ。',
    audience: 'LinuxまたはWindowsで、Arynwood MCPの機能、ソース公開型ライセンスで許されること、未署名アルファ版のインストール方法、外部に出るデータを知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Arynwood MCP レビュー',
    targetKeywords: [
      'arynwood mcp レビュー',
      'arynwood mcp',
      'ローカルai ワークスペース ollama',
      'ソース公開型 aiアプリ',
      'ollama デスクトップ linux windows',
      'mcp ツール連携',
    ],
    current_hardware_mentioned: ['NVIDIA GPU with 12 GB VRAM'],
    leadAnswerBlock: '**Arynwood MCP（バージョン0.5.3、2026年10月23日公開）は、公式サイトによると、チャット、ドキュメント検索、ツール連携をOllama経由でお使いのマシン上で実行する、LinuxとWindows向けのデスクトップ・アルファ版です。**このレビューの記述はすべてプロジェクト自身のページに基づいており、PromptQuorumはインストールも検証もしていません。',
    quickAnswerTop: {
      ja: {
        question: 'Arynwood MCPを動かすには何が必要ですか？',
        answer: 'プロジェクトのドキュメントによると、Linux x86_64またはWindows x64、16 GB以上のRAMと20 GBの空きディスク、そして別途インストールしたOllamaです。macOSには対応していません。',
        bullets: [
          'チャットはマルチペルソナで、Ollamaからストリーミングします。OpenAI互換サーバーも追加できます。',
          'ナレッジ検索には、別途インストールしたQdrantとOllamaの埋め込みモデルが必要です。',
          'チャットではグラフィックスカードは任意です。画像・音楽・動画ツールにはNVIDIAカードが必要で、VRAM 12 GB以上が推奨されています。',
          'MCPツールサーバーを接続でき、Cutroom経由のKdenlive動画編集も含まれます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'Arynwood MCPとは',
        anchor: 'what-is-arynwood-mcp',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '必要なもの',
        anchor: 'requirements',
      },
      {
        label: '価格とライセンス',
        anchor: 'pricing',
      },
      {
        label: '始め方',
        anchor: 'getting-started',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'プライバシーとネットワーク利用',
        anchor: 'privacy',
      },
      {
        label: '向いている人',
        anchor: 'who-should-use',
      },
      {
        label: '確認できなかった点',
        anchor: 'who-should-not-use',
      },
      {
        label: '競合と代替',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '結論',
        anchor: 'verdict',
      },
      {
        label: '情報源',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Arynwood MCPは、ローカルのOllamaモデルとチャットし、ドキュメント検索、メモリ、デザインキャンバス、MCPツール連携を加える、LinuxとWindows向けのデスクトップ・アルファ版です。',
          },
          {
            type: 'plain-terms',
            text: 'ローカルのチャットモデル、ドキュメントライブラリ、ツール群を一つのアプリ画面にまとめたもので、ストアではなくダウンロードしたパッケージからインストールします。',
          },
        ],
        items: [
          'メンテナンス：バージョン0.5.3は2026年10月23日に公開され、確認時点で最新のアップストリーム更新です。リポジトリは2026年9月10日に作成されたため、放置プロジェクトの警告は該当しませんが、公開から約6週間のプロジェクトです。',
          'ライセンス：ソース公開型で、オープンソースではなく、個人または社内での利用に限られます。',
          'インストーラー：Windows版インストーラーは未署名で、アプリ全体がアルファ版と表示されています。',
          'データ：サイトにはテレメトリーなしとありますが、複数の機能が外部にデータを送り、オフラインモードは強制されません。',
          '根拠：2026年10月24日に読んだサイト、README、ライセンスファイル、リリースノート。実機での検証は行っていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはArynwood MCPをインストール・検証・計測していません。以下の機能、プライバシー、セキュリティに関する記述はプロジェクト自身のものです。',
          },
        ],
      },
      overview: {
        id: 'what-is-arynwood-mcp',
        title: 'Arynwood MCPとは',
        content: [
          '**Arynwood MCPは、Arynwood Technology（開発者はLorelei Noble）によるローカル志向の個人向けAI・クリエイティブワークスペースで、チャットをお使いのハードウェア上のOllamaで動くモデルに送ります。**「MCP」はModel Context Protocolの略で、アプリはツール接続に使います。READMEとサイトが説明しているのはデスクトップのワークスペースであり、他のプログラム用のプラグインではありません。',
          'PromptQuorumは、Arynwood MCPという名前の別製品を見つけられませんでした。同じ開発者のArynwood Groveは、アプリが接続できる別のコミュニティサーバーです。サイトの[ブラウザデモ](https://arynwood-technology.github.io/ArynwoodMCP/)は、台本どおりの会話でインターフェースを示すもので、実際のAIは動いていません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: ['**Arynwood MCPはプロジェクトのGitHub Releasesページからダウンロードします。システムごとに1パッケージで、Ollamaは別途インストールします。**'],
        columns: ['システム', 'ダウンロード'],
        rows: [
          {
            'システム': 'Linux x86_64（AppImage）',
            'ダウンロード': '[arynwood-mcp_0.5.3_amd64.AppImage](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.AppImage)',
          },
          {
            'システム': 'Debian / Ubuntu（.deb）',
            'ダウンロード': '[arynwood-mcp_0.5.3_amd64.deb](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.deb)',
          },
          {
            'システム': 'Windows x64（未署名アルファ版）',
            'ダウンロード': '[arynwood-mcp_0.5.3_x64-setup.exe](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_x64-setup.exe)',
          },
          {
            'システム': 'チェックサム',
            'ダウンロード': '[SHA256SUMS.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS.txt)（Linux）、[SHA256SUMS-windows.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS-windows.txt)',
          },
          {
            'システム': 'macOS',
            'ダウンロード': '非対応',
          },
          {
            'システム': '公式サイト',
            'ダウンロード': '[arynwood.com/mcp](https://arynwood.com/mcp/)',
          },
          {
            'システム': 'プライバシー',
            'ダウンロード': '[マシンから出るデータ](https://arynwood.com/mcp/)（独立したプライバシーポリシーはなし）',
          },
          {
            'システム': 'セキュリティ概要',
            'ダウンロード': '[arynwood.com/mcp-security](https://arynwood.com/mcp-security/)',
          },
          {
            'システム': 'ソースコード',
            'ダウンロード': '[github.com/Arynwood-Technology/ArynwoodMCP](https://github.com/Arynwood-Technology/ArynwoodMCP)',
          },
        ],
        note: '確認したバージョン：0.5.3（デスクトップ・アルファ版）。GitHubのリリースページによると2026年10月23日に公開され、確認時点で最新のアップストリーム更新です。Windows版インストーラーは未署名のため、Microsoft Defender SmartScreenが「Windowsによって PC が保護されました」と表示することがあります。開発者のガイドでは、先にSHA-256チェックサムを照合し、「詳細情報」から「実行」を選ぶよう案内しています。AppImageは`chmod +x`のあとで実行でき、.debは`sudo apt install ./file.deb`でインストールします。サイトに独立したプライバシーポリシーはなく、「What leaves your machine」の節がプライバシーに関する説明です。',
      },
      requirements: {
        id: 'requirements',
        title: '必要なもの',
        content: [
          '**Arynwood MCPには、Linux x86_64またはWindows x64と、別途インストールしたOllamaが必要です。メモリ、ディスク、グラフィックスの要件は表のとおりです。**ドキュメントによると、小さめのモデルかリモートのエンドポイントなら8 GBでも動作する場合があります。',
        ],
        columns: ['項目', 'ドキュメントの要件'],
        rows: [
          {
            '項目': 'Linux',
            'ドキュメントの要件': 'x86_64。AppImageはglibc 2.35以降',
          },
          {
            '項目': 'Windows',
            'ドキュメントの要件': 'x64アルファ版、WebView2のユーザー単位インストーラー',
          },
          {
            '項目': 'macOS',
            'ドキュメントの要件': '非対応',
          },
          {
            '項目': 'メモリとディスク',
            'ドキュメントの要件': 'RAM 16 GB、空き20 GBとモデル分',
          },
          {
            '項目': 'グラフィックスカード',
            'ドキュメントの要件': 'チャットは任意。画像・音楽・動画はNVIDIA',
          },
          {
            '項目': 'その他のサービス',
            'ドキュメントの要件': 'Ollama必須。ナレッジ検索にQdrant',
          },
        ],
        note: 'NVIDIAカードがない場合、アプリはCPUモードに切り替わり、GPUツールを無効にしてチャットをプロセッサ向けに調整します。ドキュメントは、小規模サーバーでは8Bモデルの応答に数分かかることがあると注意しています。Ollama、Qdrant、GPUツールは別サービスで、インストーラーには含まれません。',
      },
      pricing: {
        id: 'pricing',
        title: '価格とライセンス',
        content: [
          '**サイトにアプリの価格は記載されておらず、パッケージは無料でダウンロード公開されています。ただしArynwood MCP Source-Available Licenseはサイトによればオープンソースライセンスではなく、制限があります。**開発者のセットアップ代行サービスは見積もり制です。',
        ],
        items: [
          '**許可されること。**未改変ビルドのダウンロードと、個人または社内での評価目的の実行。個人または社内利用のためのソースコードの閲覧と改変。',
          '**書面による許可なしにできないこと。**ソフトウェアまたはその派生物の再配布、販売、サブライセンス、およびホスト型・マネージド型サービスの一部としての提供。',
          '**アルファ版の保証。**ライセンス文は現状有姿での提供とし、互換性のない変更、データ消失、未完成の機能に注意を促しています。サードパーティ部品はそれぞれのライセンスに従います。',
          '**開発者自身の注記。**ライセンスファイルは自らを「a template starting point, not reviewed by a lawyer」と称し、公開リリースに頼る前に弁護士の確認を受けるよう述べています。',
        ],
        note: '2026年10月24日に[LICENSEファイル](https://github.com/Arynwood-Technology/ArynwoodMCP/blob/main/LICENSE)から読み取りました。法的助言ではありません。業務で使う前にファイルをお読みください。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: ['**手順は開発者のインストールガイドとWindowsガイドに沿っています。PromptQuorumは実行していません。**'],
        numberedItems: [
          {
            title: 'お使いのPCを要件と比べる',
            whyItMatters: 'ダウンロード前に、メモリ、空きディスク、OSを上の表と照らし合わせます。',
          },
          {
            title: 'Ollamaをインストールしてモデルを取得する',
            whyItMatters: 'Ollamaは同梱されていません。公式サイトからインストールし、ペルソナが使うモデルを取得します。GPUのないPCでは小さなモデルの正確な名前を入力します。',
          },
          {
            title: 'パッケージをダウンロードしてチェックサムを確認する',
            whyItMatters: 'お使いのシステム用パッケージと対応するチェックサムファイルを同じフォルダに保存し、実行前にSHA-256の値を照合します。',
          },
          {
            title: 'インストールまたは起動する',
            whyItMatters: 'LinuxではAppImageに実行権限を付けて起動するか、.debをaptでインストールします。Windowsではインストーラーを実行します。ユーザーアカウント単位でのみインストールされ、SmartScreenが警告したら「詳細情報」から「実行」を選びます。',
          },
          {
            title: 'アプリを開いてサービスを接続する',
            whyItMatters: 'Ollamaに接続できない場合はアプリが知らせます。ナレッジ検索にはQdrantも必要で、こちらも別途インストールします。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: ['**以下の項目はすべて、サイト、README、または開発者のドキュメントに基づいています。**'],
        items: [
          '**チャット。**Ollamaからストリーミングするマルチペルソナチャット。モデル管理とOpenAI互換サーバーの登録に対応します。',
          '**ナレッジとメモリ。**URL、ファイル、テキストから学習させられます。セマンティック検索はQdrantとOllamaの埋め込みモデルでチャットに加わり、チャットはメモリを保持してファイルのアップロードも受け付けます。',
          '**MCPツール。**MCPツールサーバーに接続し、Cutroom経由のKdenlive編集も含みます。セキュリティ概要によると、1回の承認で許可されるのは正確に1回のツール呼び出しだけです。',
          '**Design Center。**キャンバス型のデザインツールで、画像生成には別途インストールしたStable Diffusion（A1111）サービスを使います。',
          '**音声と動画。**別途インストールする補助ツールに依存する任意のスタジオです。LoRAトレーニング、スクリプト式のGPUツール、プロジェクトのファイルブラウザは、パッケージ版ではなくソースのチェックアウトが必要です。',
          '**コミュニティ。**Arynwood Groveサーバー（0.7.1、アルファ版）に接続する任意のページです。メッセージはそのサーバーに保存され、エンドツーエンド暗号化されていません。',
          '**ゲートウェイ。**所有者だけが操作できるリモート制御用の実験的なヘッドレスゲートウェイで、初期設定ではオフ、ソースのチェックアウトから起動します。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**サイトによると、テレメトリーはなく、チャット、ドキュメント、メモリはお使いのディスクにとどまります。**さらに、アプリは起動時と、開いている間は6時間ごとにGitHubで新しい安定版を確認し、認証情報やワークスペースの内容は送らない一方、GitHubにはIPアドレスなど通常の接続情報が渡ります。',
          'サイトによると、その他のデータがマシンの外に出るのは、利用する機能を通じてのみです。Web検索、URLからの学習、ダウンロード、SNSへの公開、デプロイ、IRC、サーバー上のGrove、追加したリモートのモデルサーバーが該当します。セキュリティ概要は、OSレベルのサンドボックスも強制されたオフラインモードもなく、想定範囲は1台のマシンに1人の所有者だと述べています。ローカルのチャット、ドキュメント検索、メモリは、モデルをダウンロードした後ならオフラインでも動作し得ます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者の説明です。PromptQuorumはコードもネットワーク通信も監査していません。セキュリティ概要自身も、そのテストはペネトレーションテストでもセキュリティ認証でもないと述べています。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**LinuxまたはWindowsユーザー**で、Ollamaのワークスペースを一つのアプリで使いたい方。',
          '**アルファ版ソフト、未署名インストーラー、個人・社内利用限定のライセンス**に抵抗のない方。',
          '**Kdenliveで編集する方**で、Cutroom経由のツール呼び出しを試したい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実機での挙動。**PromptQuorumはArynwood MCPを実行していないため、機能の説明やローカル回答の品質はプロジェクト側の記述です。',
          '**Windowsへのインストール。**リリースノートは、クリーンなWindowsマシンへのインストールと実際のSNSアカウントへの投稿を0.5.3では未実施としており、Windowsガイドはダウンロードや外部連携がまだ手動で検証されていないと述べています。',
          '**プライバシーとセキュリティの主張。**テレメトリーなし、更新確認、データの流れに関する記述は、コードやネットワーク通信と照合していません。',
          '**実績。**バージョン0.5.2と0.5.3はどちらも2026年10月23日に登場し、リポジトリは2026年9月10日に作成されました。判断材料になる長いリリース履歴はありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替',
        columns: ['アプリ', '対応OS', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Jan](/ja/power-local-llm/jan-review)',
            '対応OS': 'Windows、macOS、Linux',
            '価格 / ライセンス': '無料 / Apache 2.0（変種）',
            '主な違い': '独自エンジンを内蔵したオープンソースのデスクトップチャットアプリ',
          },
          {
            'アプリ': '[Msty](/ja/power-local-llm/msty-review)',
            '対応OS': 'Windows、macOS、Linux',
            '価格 / ライセンス': 'フリーミアム / クローズドソース',
            '主な違い': '複数のモデル提供元に対応した一般向けチャット画面',
          },
          {
            'アプリ': '[AnythingLLM](/ja/power-local-llm/anythingllm-review)',
            '対応OS': 'Windows、macOS、Linux、Web',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '内蔵ベクトルストアで自分の文書とチャット',
          },
          {
            'アプリ': '[LM Studio](/ja/power-local-llm/lm-studio-review)',
            '対応OS': 'Windows、macOS、Linux',
            '価格 / ライセンス': '無料 / プロプライエタリ',
            '主な違い': 'モデルブラウザとサーバーモードを備えた洗練された画面',
          },
        ],
        note: '競合の詳細は頻繁に変わります。価格、ライセンス、対応OSは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'インターネットなしで動きますか？',
            a: 'ローカルのチャット、ドキュメント検索、メモリは、モデルをダウンロードした後ならオフラインでも動作し得ますが、オフライン切り替えはなく、更新確認やWebベースの機能は引き続きネットワークへ接続しようとします。',
          },
          {
            q: 'Macで動きますか？',
            a: 'いいえ。開発者のプラットフォームガイドによるとmacOSは非対応です。プロジェクトサイトのブラウザデモなら、インストールなしでインターフェースを確認できます。',
          },
          {
            q: '別のPC上のモデルサーバーを使えますか？',
            a: '「Servers」ページでOllamaまたはOpenAI互換のエンドポイントを登録でき、ドキュメントによれば、エンドポイントが別のコンピューターでチャットと画像生成を実行する構成も可能です。',
          },
          {
            q: 'アップデートはどうやって入れますか？',
            a: 'バージョン0.4.8以降は更新通知が表示されます。インストールは手動で、新しいインストーラーまたはパッケージを実行します。それより前のバージョンは、まず1回手動でインストールする必要があります。',
          },
          {
            q: 'Windowsインストーラーを検証できますか？',
            a: '開発者は各パッケージのSHA-256チェックサムを公開しており、0.5.4以降のビルドはGitHubアテステーションでも確認できると述べています。PromptQuorumはどちらも検証していません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: 'Arynwood MCPは、公式サイトによると、Ollamaチャット、ドキュメント検索、メモリ、MCPツール連携を一つのローカル志向アプリにまとめたLinuxとWindows向けのデスクトップ・アルファ版で、公開インストーラーがあり、確認の前日にリリースが公開されました。一方で、ライセンスはソース公開型で個人・社内利用に限られ、Windowsインストーラーは未署名、macOSは非対応、オフラインモードもサンドボックスも強制されず、リポジトリは約6週間前のものです。アルファ版ソフトに抵抗がなく、これらの制約を受け入れられる方に向いています。オープンソースライセンスやより長い実績を求める方は、[Jan](/ja/power-local-llm/jan-review)や[AnythingLLM](/ja/power-local-llm/anythingllm-review)と比べてみてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Arynwood MCP公式サイト](https://arynwood.com/mcp/) — 機能、ダウンロード、要件、プライバシーとライセンスに関する記述。2026年10月24日確認。',
          '[Arynwood MCPのセキュリティ概要](https://arynwood.com/mcp-security/) — 承認モデル、サンドボックスとオフラインモードに関する記述、テストの範囲。',
          '[GitHubのArynwood MCP](https://github.com/Arynwood-Technology/ArynwoodMCP) — README、LICENSE、およびWindows、インストール、対応プラットフォームのガイド。',
          '[Arynwood MCP v0.5.3リリース](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3) — 公開日、パッケージ一覧、チェックサム、リリースノート。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Janレビュー](/ja/power-local-llm/jan-review) — 独自エンジンを持つオープンソースのデスクトップチャットアプリ。',
          '[Mstyレビュー](/ja/power-local-llm/msty-review) — 複数のモデル提供元に対応した一般向けチャットクライアント。',
          '[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review) — 内蔵ベクトルストアを使う文書チャット。',
          '[LM Studioレビュー](/ja/power-local-llm/lm-studio-review) — モデルブラウザとローカルサーバーを備えたデスクトップアプリ。',
          '[ローカルLLMチャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared) — チャットアプリとアシスタントのカテゴリ比較。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/arynwood-mcp-review-hero-pt.webp',
    title: 'Análise do Arynwood MCP: um espaço de trabalho de IA local em alfa',
    seoTitle: 'Análise do Arynwood MCP: espaço de IA local em alfa',
    intro: 'O Arynwood MCP é um espaço de trabalho de IA para desktop que, segundo o site e o README, conversa com modelos locais via Ollama e acrescenta busca em documentos, memória, uma tela de design e integrações de ferramentas MCP. É uma alfa na versão 0.5.3 para Linux e Windows, sob uma licença de código disponível. Esta análise reflete o site, o README, o arquivo de licença e as notas de versão, verificados em 24 de outubro de 2026.',
    metaDescription: 'Análise do Arynwood MCP: IA local sobre o Ollama para Linux e Windows. Status alfa, instalador sem assinatura e licença de código disponível.',
    twitterDescription: 'Análise do Arynwood MCP: espaço de IA baseado no Ollama para Linux e Windows em alfa, com licença de código disponível. Requisitos, instaladores e dados.',
    audience: 'Pessoas com Linux ou Windows que querem saber o que o Arynwood MCP faz, o que sua licença de código disponível permite, como a alfa sem assinatura é instalada e quais dados saem do computador.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise Arynwood MCP',
    targetKeywords: [
      'análise arynwood mcp',
      'arynwood mcp',
      'espaço de trabalho ia local ollama',
      'app ia código disponível',
      'app desktop ollama linux windows',
      'integrações de ferramentas mcp',
    ],
    current_hardware_mentioned: ['NVIDIA GPU with 12 GB VRAM'],
    leadAnswerBlock: '**O Arynwood MCP (versão 0.5.3, lançada em 23 de outubro de 2026) é uma alfa para desktop, para Linux e Windows, que, segundo o site, executa chat, busca em documentos e integrações de ferramentas no seu próprio computador via Ollama.** Cada afirmação desta análise vem das páginas do próprio projeto; o PromptQuorum não o instalou nem o testou.',
    quickAnswerTop: {
      pt: {
        question: 'O que preciso para executar o Arynwood MCP?',
        answer: 'Segundo a documentação do projeto, Linux x86_64 ou Windows x64, pelo menos 16 GB de RAM e 20 GB de disco livre, além do Ollama instalado separadamente. O macOS não é compatível.',
        bullets: [
          'O chat é multipersona e transmite do Ollama; servidores compatíveis com a OpenAI podem ser adicionados.',
          'A busca de conhecimento exige o Qdrant e um modelo de embeddings do Ollama, ambos instalados separadamente.',
          'A placa de vídeo é opcional para o chat; as ferramentas de imagem, música e vídeo exigem uma NVIDIA, com 12 GB de VRAM ou mais recomendados.',
          'Servidores de ferramentas MCP podem ser conectados, incluindo a edição de vídeo do Kdenlive via Cutroom.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o Arynwood MCP?',
        anchor: 'what-is-arynwood-mcp',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'O que você precisa',
        anchor: 'requirements',
      },
      {
        label: 'Preço e licença',
        anchor: 'pricing',
      },
      {
        label: 'Como começar',
        anchor: 'getting-started',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Privacidade e uso da rede',
        anchor: 'privacy',
      },
      {
        label: 'Para quem serve',
        anchor: 'who-should-use',
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq',
      },
      {
        label: 'Veredito',
        anchor: 'verdict',
      },
      {
        label: 'Fontes',
        anchor: 'sources',
      },
      {
        label: 'Leituras relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Arynwood MCP é uma alfa para desktop, para Linux e Windows, que conversa com modelos locais do Ollama e acrescenta busca em documentos, memória, uma tela de design e integrações de ferramentas MCP.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma janela de aplicativo em torno de um modelo de chat local, uma biblioteca de documentos e uma caixa de ferramentas, instalada a partir de um pacote baixado em vez de uma loja.',
          },
        ],
        items: [
          'Manutenção: a versão 0.5.3 foi publicada em 23 de outubro de 2026, a atualização upstream mais recente no momento da verificação; o repositório foi criado em 10 de setembro de 2026, então nenhum aviso de projeto abandonado se aplica, mas o projeto tem cerca de seis semanas.',
          'Licença: código disponível, não código aberto, e limitada a uso pessoal ou interno.',
          'Instaladores: o instalador do Windows não é assinado e todo o aplicativo é rotulado como alfa.',
          'Dados: o site diz que não há telemetria, mas vários recursos enviam dados para fora e nenhum modo offline é imposto.',
          'Base: o site, o README, o arquivo de licença e as notas de versão, lidos em 24 de outubro de 2026, sem teste prático.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O PromptQuorum não instalou, testou nem mediu o Arynwood MCP. As afirmações abaixo sobre recursos, privacidade e segurança são as do projeto.',
          },
        ],
      },
      overview: {
        id: 'what-is-arynwood-mcp',
        title: 'O que é o Arynwood MCP?',
        content: [
          '**O Arynwood MCP é um espaço de trabalho pessoal de IA e criação, com foco local, da Arynwood Technology, desenvolvido por Lorelei Noble, que envia os chats a modelos executados no Ollama no seu próprio hardware.** “MCP” significa Model Context Protocol, que o aplicativo usa para conectar ferramentas; o README e o site descrevem um espaço de trabalho de desktop, não um plugin para outros programas.',
          'O PromptQuorum não encontrou nenhum outro produto chamado Arynwood MCP. O Arynwood Grove, do mesmo autor, é um servidor de comunidade separado ao qual o aplicativo pode se conectar, e a [demonstração no navegador](https://arynwood-technology.github.io/ArynwoodMCP/) do site mostra a interface com conversas roteirizadas e sem IA real por trás.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Arynwood MCP é baixado na página GitHub Releases do projeto, com um pacote por sistema; o Ollama é instalado separadamente.**',
        ],
        columns: ['Sistema', 'Download'],
        rows: [
          {
            Sistema: 'Linux x86_64 (AppImage)',
            Download: '[arynwood-mcp_0.5.3_amd64.AppImage](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.AppImage)',
          },
          {
            Sistema: 'Debian / Ubuntu (.deb)',
            Download: '[arynwood-mcp_0.5.3_amd64.deb](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.deb)',
          },
          {
            Sistema: 'Windows x64 (alfa sem assinatura)',
            Download: '[arynwood-mcp_0.5.3_x64-setup.exe](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_x64-setup.exe)',
          },
          {
            Sistema: 'Somas de verificação',
            Download: '[SHA256SUMS.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS.txt) (Linux), [SHA256SUMS-windows.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS-windows.txt)',
          },
          {
            Sistema: 'macOS',
            Download: 'Não compatível',
          },
          {
            Sistema: 'Site',
            Download: '[arynwood.com/mcp](https://arynwood.com/mcp/)',
          },
          {
            Sistema: 'Privacidade',
            Download: '[O que sai do seu computador](https://arynwood.com/mcp/) (sem política de privacidade separada)',
          },
          {
            Sistema: 'Relatório de segurança',
            Download: '[arynwood.com/mcp-security](https://arynwood.com/mcp-security/)',
          },
          {
            Sistema: 'Código-fonte',
            Download: '[github.com/Arynwood-Technology/ArynwoodMCP](https://github.com/Arynwood-Technology/ArynwoodMCP)',
          },
        ],
        note: 'Versão analisada: 0.5.3 (alfa para desktop), publicada em 23 de outubro de 2026 segundo a página de release do GitHub, que é a atualização upstream mais recente no momento da verificação. O instalador do Windows não é assinado, então o Microsoft Defender SmartScreen pode exibir “O Windows protegeu o computador”; o guia do autor manda comparar primeiro a soma SHA-256 e depois escolher Mais informações e Executar assim mesmo. O AppImage roda após `chmod +x`, e o .deb é instalado com `sudo apt install ./arquivo.deb`. O site não tem uma política de privacidade separada; a seção “What leaves your machine” é a declaração de privacidade.',
      },
      requirements: {
        id: 'requirements',
        title: 'O que você precisa',
        content: [
          '**O Arynwood MCP exige Linux x86_64 ou Windows x64 com o Ollama instalado separadamente; a tabela indica as necessidades de memória, disco e placa de vídeo.** A documentação acrescenta que 8 GB podem funcionar com um modelo menor ou um endpoint remoto.',
        ],
        columns: ['Item', 'Requisito segundo a doc'],
        rows: [
          {
            Item: 'Linux',
            'Requisito segundo a doc': 'x86_64; o AppImage exige glibc 2.35 ou mais nova',
          },
          {
            Item: 'Windows',
            'Requisito segundo a doc': 'Alfa x64, instalador por usuário com WebView2',
          },
          {
            Item: 'macOS',
            'Requisito segundo a doc': 'Não compatível',
          },
          {
            Item: 'Memória e disco',
            'Requisito segundo a doc': '16 GB de RAM; 20 GB livres mais os modelos',
          },
          {
            Item: 'Placa de vídeo',
            'Requisito segundo a doc': 'Opcional no chat; NVIDIA para imagem/música/vídeo',
          },
          {
            Item: 'Outros serviços',
            'Requisito segundo a doc': 'Ollama obrigatório; Qdrant para a busca',
          },
        ],
        note: 'Sem placa NVIDIA, o aplicativo muda para um modo CPU que desativa as ferramentas de GPU e ajusta o chat para o processador; a documentação alerta que um modelo de 8B pode levar minutos por resposta em um servidor pequeno. Ollama, Qdrant e as ferramentas de GPU são serviços separados, não incluídos nos instaladores.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preço e licença',
        content: [
          '**O site não informa nenhum preço para o aplicativo e os pacotes são publicados para download sem custo; a Arynwood MCP Source-Available License, porém, não é, segundo o site, uma licença de código aberto e impõe limites.** Os serviços de configuração do autor são orçados sob consulta.',
        ],
        items: [
          '**Permitido.** Baixar e executar builds não modificados para avaliação pessoal ou interna, e ver e modificar o código-fonte para uso pessoal ou interno.',
          '**Não permitido sem autorização por escrito.** Redistribuir, vender ou sublicenciar o software ou qualquer derivado, e oferecê-lo como parte de um serviço hospedado ou gerenciado.',
          '**Garantia em alfa.** O texto da licença fornece o software no estado em que se encontra e avisa sobre mudanças incompatíveis, perda de dados e recursos incompletos; componentes de terceiros mantêm suas próprias licenças.',
          '**A ressalva do próprio autor.** O arquivo de licença se descreve como “a template starting point, not reviewed by a lawyer” e recomenda que um advogado o revise antes de usá-lo em um lançamento público.',
        ],
        note: 'Lido no [arquivo LICENSE](https://github.com/Arynwood-Technology/ArynwoodMCP/blob/main/LICENSE) em 24 de outubro de 2026. Isto não é aconselhamento jurídico; leia o arquivo antes de usar o software no trabalho.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem os guias de instalação e de Windows do autor; o PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Compare seu computador com os requisitos',
            whyItMatters: 'Antes de baixar, confira memória, disco livre e sistema operacional na tabela acima.',
          },
          {
            title: 'Instale o Ollama e baixe um modelo',
            whyItMatters: 'O Ollama não vem incluído. Instale-o a partir do site dele e baixe os modelos usados pelas personas, ou informe o nome exato de um modelo pequeno em um computador sem GPU.',
          },
          {
            title: 'Baixe o pacote e confira a soma de verificação',
            whyItMatters: 'Salve o pacote do seu sistema e o arquivo de somas correspondente na mesma pasta e compare o valor SHA-256 antes de executar qualquer coisa.',
          },
          {
            title: 'Instale ou inicie',
            whyItMatters: 'No Linux, torne o AppImage executável e inicie-o, ou instale o .deb com apt. No Windows, execute o instalador, que instala apenas para a sua conta de usuário; se o SmartScreen avisar, escolha Mais informações e Executar assim mesmo.',
          },
          {
            title: 'Abra o aplicativo e conecte os serviços',
            whyItMatters: 'O aplicativo avisa se não alcançar o Ollama. A busca de conhecimento exige também o Qdrant, igualmente instalado separadamente.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: ['**Cada item abaixo vem do site, do README ou da documentação do autor.**'],
        items: [
          '**Chat.** Chat multipersona transmitido do Ollama, com gerenciamento de modelos e cadastro de servidores compatíveis com a OpenAI.',
          '**Conhecimento e memória.** Ensine a partir de uma URL, arquivo ou texto; a busca semântica entra no chat via Qdrant e um modelo de embeddings do Ollama, e o chat mantém memória e aceita envio de arquivos.',
          '**Ferramentas MCP.** Conecta servidores de ferramentas MCP, incluindo a edição do Kdenlive via Cutroom; segundo o relatório de segurança, uma aprovação autoriza uma única chamada exata de ferramenta, uma só vez.',
          '**Design Center.** Uma ferramenta de design com tela cuja geração de imagens usa um serviço Stable Diffusion (A1111) instalado separadamente.',
          '**Áudio e vídeo.** Estúdios opcionais que dependem de ferramentas auxiliares instaladas separadamente; o treinamento LoRA, as ferramentas de GPU baseadas em scripts e o navegador de arquivos do projeto exigem uma cópia do código-fonte, não a versão empacotada.',
          '**Comunidade.** Uma página opcional que se conecta a um servidor Arynwood Grove (0.7.1, alfa); as mensagens ficam nesse servidor e não têm criptografia de ponta a ponta.',
          '**Gateway.** Um gateway experimental sem interface para controle remoto apenas pelo proprietário, desativado por padrão e executado a partir de uma cópia do código-fonte.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**O site diz que não há telemetria e que chats, documentos e memória ficam no seu disco.** Acrescenta que o aplicativo consulta o GitHub na inicialização e a cada seis horas enquanto está aberto para ver se há uma versão estável mais nova, sem enviar credenciais nem conteúdo do espaço de trabalho, embora o GitHub receba dados normais de conexão, como o seu endereço IP.',
          'Outros dados saem do computador, segundo o site, apenas por recursos que você usa: busca na web, aprendizado a partir de uma URL, downloads, publicação em redes sociais, deploys, IRC, um Grove em um servidor ou um servidor de modelos remoto que você adicione. O relatório de segurança afirma que não há sandbox no nível do sistema operacional nem modo offline imposto, e que o escopo declarado é um proprietário em um computador; chat local, busca em documentos e memória podem funcionar offline depois que os modelos são baixados.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são afirmações do autor. O PromptQuorum não auditou o código nem o tráfego de rede, e o próprio relatório de segurança diz que seus testes não são um teste de intrusão nem uma certificação de segurança.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Usuários de Linux ou Windows** que querem um espaço de trabalho com Ollama em um só aplicativo.',
          '**Pessoas à vontade com software em alfa,** um instalador sem assinatura e uma licença de uso pessoal ou interno.',
          '**Editores do Kdenlive** que querem experimentar o uso de ferramentas via Cutroom.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Comportamento na prática.** O PromptQuorum não executou o Arynwood MCP, então as descrições dos recursos e a qualidade das respostas locais são afirmações do projeto.',
          '**Instalação no Windows.** As notas de versão listam a instalação em um Windows limpo e a publicação em uma conta social real como não executadas na 0.5.3, e o guia do Windows diz que downloads e integrações externas ainda não foram validados manualmente.',
          '**Afirmações de privacidade e segurança.** As declarações sobre ausência de telemetria, verificação de atualizações e fluxos de dados não foram conferidas com o código nem com o tráfego de rede.',
          '**Histórico.** As versões 0.5.2 e 0.5.3 saíram ambas em 23 de outubro de 2026, em um repositório criado em 10 de setembro de 2026; não há um longo histórico de versões para avaliar.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Jan](/pt/power-local-llm/jan-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / Apache 2.0 (variante)',
            'Diferença principal': 'App de chat de desktop de código aberto com motor próprio integrado',
          },
          {
            App: '[Msty](/pt/power-local-llm/msty-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Freemium / código fechado',
            'Diferença principal': 'Interface de chat para o grande público com vários provedores de modelos',
          },
          {
            App: '[AnythingLLM](/pt/power-local-llm/anythingllm-review)',
            Plataformas: 'Windows, macOS, Linux, web',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat com seus documentos usando um armazenamento vetorial integrado',
          },
          {
            App: '[LM Studio](/pt/power-local-llm/lm-studio-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / proprietária',
            'Diferença principal': 'Interface bem acabada com navegador de modelos e modo servidor',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Funciona sem internet?',
            a: 'Chat local, busca em documentos e memória podem funcionar offline depois que os modelos são baixados, mas não há um botão offline, e a verificação de atualizações e os recursos baseados na web ainda tentam acessar a rede.',
          },
          {
            q: 'Roda em um Mac?',
            a: 'Não, o macOS não é compatível segundo o guia de plataformas do autor. A demonstração no navegador, no site do projeto, mostra a interface sem instalar nada.',
          },
          {
            q: 'Pode usar um servidor de modelos em outro computador?',
            a: 'A página “Servers” cadastra endpoints do Ollama ou compatíveis com a OpenAI, e a documentação diz que um endpoint pode executar o chat e a geração de imagens em outro computador.',
          },
          {
            q: 'Como as atualizações são instaladas?',
            a: 'A partir da 0.4.8 aparece um aviso de atualização; a instalação é manual, executando o instalador ou pacote mais novo, e versões anteriores precisam antes de uma instalação manual.',
          },
          {
            q: 'Posso verificar o instalador do Windows?',
            a: 'O autor publica somas SHA-256 de cada pacote e diz que builds a partir da 0.5.4 também poderão ser conferidos com atestações do GitHub. O PromptQuorum não verificou nenhuma das duas coisas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Arynwood MCP é uma alfa para desktop, para Linux e Windows, que, segundo o site, reúne chat com Ollama, busca em documentos, memória e integrações de ferramentas MCP em um aplicativo com foco local, com instaladores públicos e um lançamento publicado no dia anterior a esta verificação. Em contrapartida: a licença é de código disponível e limitada a uso pessoal ou interno, o instalador do Windows não é assinado, o macOS não é compatível, nenhum modo offline nem sandbox é imposto e o repositório tem cerca de seis semanas. Serve para quem se sente à vontade com software em alfa e aceita esses limites; quem quiser uma licença de código aberto ou mais histórico pode comparar o [Jan](/pt/power-local-llm/jan-review) ou o [AnythingLLM](/pt/power-local-llm/anythingllm-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Arynwood MCP](https://arynwood.com/mcp/) — recursos, downloads, requisitos, declarações de privacidade e de licença, verificados em 24 de outubro de 2026.',
          '[Relatório de segurança do Arynwood MCP](https://arynwood.com/mcp-security/) — modelo de aprovação, declarações sobre sandbox e modo offline, escopo dos testes.',
          '[Arynwood MCP no GitHub](https://github.com/Arynwood-Technology/ArynwoodMCP) — README, LICENSE e os guias de Windows, instalação e plataformas compatíveis.',
          '[Release v0.5.3 do Arynwood MCP](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3) — data de publicação, lista de pacotes, somas de verificação e notas de versão.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um app de chat de desktop de código aberto com motor próprio.',
          '[Análise do Msty](/pt/power-local-llm/msty-review) — um cliente de chat para o grande público com vários provedores de modelos.',
          '[Análise do AnythingLLM](/pt/power-local-llm/anythingllm-review) — chat com documentos com armazenamento vetorial integrado.',
          '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review) — um app de desktop com navegador de modelos e servidor local.',
          '[Assistentes de chat com LLM locais: comparativo](/pt/power-local-llm/local-llm-chat-assistants-compared) — o comparativo da categoria para apps de chat e assistentes.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/arynwood-mcp-review-hero-ar.webp',
    title: 'مراجعة Arynwood MCP: مساحة عمل ذكاء اصطناعي محلية في مرحلة ألفا',
    seoTitle: 'مراجعة Arynwood MCP: مساحة ذكاء اصطناعي محلية (ألفا)',
    intro: 'Arynwood MCP مساحة عمل للذكاء الاصطناعي على سطح المكتب، وفق موقعها وملف README، تتحدث مع نماذج محلية عبر Ollama وتضيف البحث في المستندات والذاكرة ولوحة تصميم وتكاملات أدوات MCP. وهي نسخة ألفا بإصدار 0.5.3 لنظامي Linux وWindows بموجب رخصة "المصدر متاح" (source-available). تعكس هذه المراجعة الموقع وREADME وملف الرخصة وملاحظات الإصدار كما جرى فحصها في 24 أكتوبر 2026.',
    metaDescription: 'مراجعة Arynwood MCP: مساحة ذكاء اصطناعي محلية على Ollama لنظامي Linux وWindows. حالة ألفا، مثبّت غير موقّع، رخصة المصدر المتاح، وتدفق البيانات.',
    twitterDescription: 'مراجعة Arynwood MCP: مساحة ذكاء اصطناعي تعتمد على Ollama لنظامي Linux وWindows في مرحلة ألفا برخصة المصدر المتاح. المتطلبات والمثبّتات وتدفق البيانات.',
    audience: 'مستخدمو Linux أو Windows الراغبون في معرفة ما يفعله Arynwood MCP، وما تسمح به رخصة المصدر المتاح، وكيفية تثبيت نسخة ألفا غير الموقّعة، وأي بيانات تغادر الجهاز.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Arynwood MCP',
    targetKeywords: [
      'مراجعة arynwood mcp',
      'arynwood mcp',
      'مساحة عمل ذكاء اصطناعي محلية ollama',
      'تطبيق ذكاء اصطناعي المصدر المتاح',
      'تطبيق سطح مكتب ollama linux windows',
      'تكامل أدوات mcp',
    ],
    current_hardware_mentioned: ['NVIDIA GPU with 12 GB VRAM'],
    leadAnswerBlock: '**Arynwood MCP (الإصدار 0.5.3، صدر في 23 أكتوبر 2026) نسخة ألفا لسطح المكتب لنظامي Linux وWindows، وفق موقعها تشغّل الدردشة والبحث في المستندات وتكاملات الأدوات على جهازك عبر Ollama.** كل ما في هذه المراجعة مصدره صفحات المشروع نفسه؛ ولم يثبّته PromptQuorum أو يختبره.',
    quickAnswerTop: {
      ar: {
        question: 'ماذا أحتاج لتشغيل Arynwood MCP؟',
        answer: 'وفق وثائق المشروع: Linux x86_64 أو Windows x64، وذاكرة RAM لا تقل عن 16 GB ومساحة قرص فارغة 20 GB، مع تثبيت Ollama بشكل منفصل. نظام macOS غير مدعوم.',
        bullets: [
          'الدردشة متعددة الشخصيات وتُبثّ من Ollama؛ ويمكن إضافة خوادم متوافقة مع OpenAI.',
          'يحتاج البحث المعرفي إلى Qdrant ونموذج تضمين من Ollama، وكلاهما يُثبَّتان بشكل منفصل.',
          'بطاقة الرسوميات اختيارية للدردشة؛ أما أدوات الصور والموسيقى والفيديو فتحتاج بطاقة NVIDIA، ويُوصى بـ 12 GB من VRAM أو أكثر.',
          'يمكن ربط خوادم أدوات MCP، بما فيها مونتاج الفيديو في Kdenlive عبر Cutroom.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'ما هو Arynwood MCP؟',
        anchor: 'what-is-arynwood-mcp',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'ما تحتاجه',
        anchor: 'requirements',
      },
      {
        label: 'السعر والرخصة',
        anchor: 'pricing',
      },
      {
        label: 'كيف تبدأ',
        anchor: 'getting-started',
      },
      {
        label: 'الميزات المؤكدة من المصادر',
        anchor: 'key-features',
      },
      {
        label: 'الخصوصية واستخدام الشبكة',
        anchor: 'privacy',
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use',
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
        anchor: 'who-should-not-use',
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq',
      },
      {
        label: 'الخلاصة',
        anchor: 'verdict',
      },
      {
        label: 'المصادر',
        anchor: 'sources',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Arynwood MCP نسخة ألفا لسطح المكتب لنظامي Linux وWindows تتحدث مع نماذج Ollama المحلية وتضيف البحث في المستندات والذاكرة ولوحة تصميم وتكاملات أدوات MCP.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّلها نافذة تطبيق واحدة حول نموذج دردشة محلي ومكتبة مستندات وصندوق أدوات، تُثبَّت من حزمة منزَّلة لا من متجر.',
          },
        ],
        items: [
          'الصيانة: صدر الإصدار 0.5.3 في 23 أكتوبر 2026 وهو أحدث تحديث من المصدر وقت الفحص؛ وأُنشئ المستودع في 10 سبتمبر 2026، فلا ينطبق تحذير المشروع المتوقف، لكن عمر المشروع نحو ستة أسابيع فقط.',
          'الرخصة: المصدر متاح وليست مفتوحة المصدر، ومقيّدة بالاستخدام الشخصي أو الداخلي.',
          'المثبّتات: مثبّت Windows غير موقّع، والتطبيق كله موسوم بأنه ألفا.',
          'البيانات: يقول الموقع إنه لا توجد قياسات عن بُعد، لكن عدة ميزات ترسل بيانات إلى الخارج ولا يُفرض وضع عدم الاتصال.',
          'الأساس: الموقع وREADME وملف الرخصة وملاحظات الإصدار، قُرئت في 24 أكتوبر 2026، دون اختبار عملي.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم يثبّت PromptQuorum تطبيق Arynwood MCP ولم يختبره أو يقِس أداءه. العبارات أدناه عن الميزات والخصوصية والأمان هي عبارات المشروع نفسه.',
          },
        ],
      },
      overview: {
        id: 'what-is-arynwood-mcp',
        title: 'ما هو Arynwood MCP؟',
        content: [
          '**Arynwood MCP مساحة عمل شخصية للذكاء الاصطناعي والإبداع تعتمد على التشغيل المحلي أولًا، من Arynwood Technology وتطويرها Lorelei Noble، وترسل الدردشات إلى نماذج تعمل في Ollama على جهازك.** تعني "MCP" بروتوكول Model Context Protocol الذي يستخدمه التطبيق لربط الأدوات؛ ويصف README والموقع مساحة عمل لسطح المكتب، لا إضافة لبرامج أخرى.',
          'لم يعثر PromptQuorum على منتج آخر باسم Arynwood MCP. أما Arynwood Grove من المطوّر نفسه فهو خادم مجتمعي منفصل يمكن للتطبيق الاتصال به، وتعرض [النسخة التجريبية في المتصفح](https://arynwood-technology.github.io/ArynwoodMCP/) على الموقع الواجهة بمحادثات مكتوبة مسبقًا ودون ذكاء اصطناعي حقيقي خلفها.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُنزَّل Arynwood MCP من صفحة GitHub Releases الخاصة بالمشروع، بحزمة واحدة لكل نظام؛ ويُثبَّت Ollama بشكل منفصل.**',
        ],
        columns: ['النظام', 'التنزيل'],
        rows: [
          {
            'النظام': 'Linux x86_64 (AppImage)',
            'التنزيل': '[arynwood-mcp_0.5.3_amd64.AppImage](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.AppImage)',
          },
          {
            'النظام': 'Debian / Ubuntu (.deb)',
            'التنزيل': '[arynwood-mcp_0.5.3_amd64.deb](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.deb)',
          },
          {
            'النظام': 'Windows x64 (ألفا غير موقّعة)',
            'التنزيل': '[arynwood-mcp_0.5.3_x64-setup.exe](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_x64-setup.exe)',
          },
          {
            'النظام': 'مجاميع التحقق',
            'التنزيل': '[SHA256SUMS.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS.txt) (Linux)، [SHA256SUMS-windows.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS-windows.txt)',
          },
          {
            'النظام': 'macOS',
            'التنزيل': 'غير مدعوم',
          },
          {
            'النظام': 'الموقع الرسمي',
            'التنزيل': '[arynwood.com/mcp](https://arynwood.com/mcp/)',
          },
          {
            'النظام': 'الخصوصية',
            'التنزيل': '[ما الذي يغادر جهازك](https://arynwood.com/mcp/) (لا توجد سياسة خصوصية منفصلة)',
          },
          {
            'النظام': 'موجز الأمان',
            'التنزيل': '[arynwood.com/mcp-security](https://arynwood.com/mcp-security/)',
          },
          {
            'النظام': 'الشيفرة المصدرية',
            'التنزيل': '[github.com/Arynwood-Technology/ArynwoodMCP](https://github.com/Arynwood-Technology/ArynwoodMCP)',
          },
        ],
        note: 'الإصدار المراجَع: 0.5.3 (ألفا لسطح المكتب)، نُشر في 23 أكتوبر 2026 وفق صفحة إصدار GitHub، وهو أحدث تحديث من المصدر وقت الفحص. مثبّت Windows غير موقّع، لذا قد يعرض Microsoft Defender SmartScreen رسالة "Windows protected your PC"؛ ويوصي دليل المطوّر بمقارنة مجموع SHA-256 أولًا ثم اختيار More info ثم Run anyway. يعمل AppImage بعد تنفيذ `chmod +x`، ويُثبَّت ملف .deb بالأمر `sudo apt install ./file.deb`. ليس للموقع سياسة خصوصية منفصلة؛ وقسم "What leaves your machine" هو بيان الخصوصية.',
      },
      requirements: {
        id: 'requirements',
        title: 'ما تحتاجه',
        content: [
          '**يحتاج Arynwood MCP إلى Linux x86_64 أو Windows x64 مع تثبيت Ollama بشكل منفصل؛ ويبيّن الجدول احتياجات الذاكرة والقرص والرسوميات.** وتضيف الوثائق أن 8 GB قد تكفي مع نموذج أصغر أو نقطة نهاية بعيدة.',
        ],
        columns: ['البند', 'المتطلب وفق الوثائق'],
        rows: [
          {
            'البند': 'Linux',
            'المتطلب وفق الوثائق': 'x86_64؛ يحتاج AppImage إلى glibc 2.35 أو أحدث',
          },
          {
            'البند': 'Windows',
            'المتطلب وفق الوثائق': 'ألفا x64، مثبّت لكل مستخدم مع WebView2',
          },
          {
            'البند': 'macOS',
            'المتطلب وفق الوثائق': 'غير مدعوم',
          },
          {
            'البند': 'الذاكرة والقرص',
            'المتطلب وفق الوثائق': '16 GB RAM؛ 20 GB فارغة بالإضافة للنماذج',
          },
          {
            'البند': 'بطاقة الرسوميات',
            'المتطلب وفق الوثائق': 'اختيارية للدردشة؛ NVIDIA للصور/الموسيقى/الفيديو',
          },
          {
            'البند': 'خدمات أخرى',
            'المتطلب وفق الوثائق': 'Ollama إلزامي؛ Qdrant للبحث المعرفي',
          },
        ],
        note: 'دون بطاقة NVIDIA ينتقل التطبيق إلى وضع المعالج الذي يعطّل أدوات GPU ويضبط الدردشة للمعالج؛ وتحذّر الوثائق من أن نموذج 8B قد يستغرق دقائق لكل رد على خادم صغير. وOllama وQdrant وأدوات GPU خدمات منفصلة غير مضمّنة في المثبّتات.',
      },
      pricing: {
        id: 'pricing',
        title: 'السعر والرخصة',
        content: [
          '**لا يذكر الموقع سعرًا للتطبيق، وتُنشر الحزم للتنزيل دون رسوم؛ لكن Arynwood MCP Source-Available License ليست وفق الموقع رخصة مفتوحة المصدر وتضع قيودًا.** وتُسعَّر خدمات الإعداد من المطوّر عند الطلب.',
        ],
        items: [
          '**المسموح.** تنزيل نسخ غير معدّلة وتشغيلها للتقييم الشخصي أو الداخلي، وعرض الشيفرة المصدرية وتعديلها للاستخدام الشخصي أو الداخلي.',
          '**غير مسموح دون إذن كتابي.** إعادة توزيع البرنامج أو أي مشتق منه أو بيعه أو منح ترخيص فرعي له، وتقديمه جزءًا من خدمة مستضافة أو مُدارة.',
          '**ضمان ألفا.** يقدّم نص الرخصة البرنامج "كما هو" ويحذّر من تغييرات غير متوافقة وفقدان بيانات وميزات غير مكتملة؛ وتحتفظ مكوّنات الأطراف الثالثة برخصها الخاصة.',
          '**تحفّظ المطوّر نفسه.** يصف ملف الرخصة نفسه بأنه "a template starting point, not reviewed by a lawyer" وينصح بأن يراجعه محامٍ قبل الاعتماد عليه في إصدار عام.',
        ],
        note: 'قُرئ من [ملف LICENSE](https://github.com/Arynwood-Technology/ArynwoodMCP/blob/main/LICENSE) في 24 أكتوبر 2026. هذه ليست استشارة قانونية؛ اقرأ الملف قبل استخدام البرنامج في العمل.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: ['**تتبع الخطوات دليلَي التثبيت وWindows من المطوّر؛ ولم ينفّذها PromptQuorum.**'],
        numberedItems: [
          {
            title: 'قارن جهازك بالمتطلبات',
            whyItMatters: 'قبل التنزيل، تحقق من الذاكرة والمساحة الفارغة ونظام التشغيل في الجدول أعلاه.',
          },
          {
            title: 'ثبّت Ollama ونزّل نموذجًا',
            whyItMatters: 'Ollama غير مضمّن. ثبّته من موقعه ثم نزّل النماذج التي تستخدمها الشخصيات، أو أدخل الاسم الدقيق لنموذج صغير على جهاز بلا GPU.',
          },
          {
            title: 'نزّل الحزمة وتحقق من مجموع التحقق',
            whyItMatters: 'احفظ حزمة نظامك وملف المجاميع المطابق في مجلد واحد وقارن قيمة SHA-256 قبل تشغيل أي شيء.',
          },
          {
            title: 'ثبّته أو شغّله',
            whyItMatters: 'على Linux اجعل AppImage قابلًا للتنفيذ وشغّله، أو ثبّت ملف .deb عبر apt. على Windows شغّل المثبّت الذي يُثبَّت لحساب المستخدم فقط؛ وإذا حذّر SmartScreen فاختر More info ثم Run anyway.',
          },
          {
            title: 'افتح التطبيق واربط الخدمات',
            whyItMatters: 'ينبّهك التطبيق إذا تعذّر وصوله إلى Ollama. ويحتاج البحث المعرفي أيضًا إلى Qdrant، ويُثبَّت كذلك بشكل منفصل.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات المؤكدة من المصادر',
        content: ['**كل بند أدناه مصدره الموقع أو README أو وثائق المطوّر.**'],
        items: [
          '**الدردشة.** دردشة متعددة الشخصيات تُبثّ من Ollama، مع إدارة النماذج وتسجيل الخوادم المتوافقة مع OpenAI.',
          '**المعرفة والذاكرة.** يمكن تعليمه من رابط أو ملف أو نص؛ ويُضاف البحث الدلالي إلى الدردشة عبر Qdrant ونموذج تضمين من Ollama، وتحتفظ الدردشة بذاكرة وتقبل رفع الملفات.',
          '**أدوات MCP.** يربط خوادم أدوات MCP، بما فيها مونتاج Kdenlive عبر Cutroom؛ ووفق موجز الأمان، توافق موافقة واحدة على استدعاء أداة واحد بعينه، مرة واحدة.',
          '**Design Center.** أداة تصميم بلوحة رسم تستخدم في توليد الصور خدمة Stable Diffusion (A1111) مثبّتة بشكل منفصل.',
          '**الصوت والفيديو.** استوديوهات اختيارية تعتمد على أدوات مساندة مثبّتة بشكل منفصل؛ أما تدريب LoRA وأدوات GPU المعتمدة على السكربتات ومتصفح ملفات المشروع فتحتاج نسخة من الشيفرة المصدرية لا الإصدار المعبّأ.',
          '**المجتمع.** صفحة اختيارية تتصل بخادم Arynwood Grove (0.7.1، ألفا)؛ تُحفظ الرسائل على ذلك الخادم وليست مشفّرة من طرف إلى طرف.',
          '**البوابة.** بوابة تجريبية بلا واجهة للتحكم عن بُعد من المالك فقط، متوقفة افتراضيًا وتُشغَّل من نسخة الشيفرة المصدرية.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**يقول الموقع إنه لا توجد قياسات عن بُعد وإن الدردشات والمستندات والذاكرة تبقى على قرصك.** ويضيف أن التطبيق يفحص GitHub عن إصدار مستقر أحدث عند التشغيل وكل ست ساعات أثناء بقائه مفتوحًا، دون إرسال بيانات اعتماد أو محتوى مساحة العمل، مع أن GitHub يتلقى بيانات اتصال عادية مثل عنوان IP الخاص بك.',
          'وفق الموقع، لا تغادر بيانات أخرى الجهاز إلا عبر ميزات تستخدمها: البحث على الويب، والتعلّم من رابط، والتنزيلات، والنشر الاجتماعي، وعمليات النشر، وIRC، وGrove على خادم، أو خادم نماذج بعيد تضيفه. ويذكر موجز الأمان أنه لا توجد حماية معزولة (sandbox) على مستوى نظام التشغيل ولا وضع عدم اتصال مفروض، وأن النطاق المعلن هو مالك واحد على جهاز واحد؛ ويمكن للدردشة المحلية والبحث في المستندات والذاكرة العمل دون اتصال بعد تنزيل النماذج.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه عبارات المطوّر. لم يدقق PromptQuorum الشيفرة ولا حركة الشبكة، ويقول موجز الأمان نفسه إن اختباراته ليست اختبار اختراق ولا شهادة أمان.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Linux أو Windows** ممن يريدون مساحة عمل Ollama في تطبيق واحد.',
          '**من يرتاحون لبرمجيات ألفا** ولمثبّت غير موقّع ولرخصة للاستخدام الشخصي أو الداخلي.',
          '**محررو Kdenlive** الراغبون في تجربة استدعاء الأدوات عبر Cutroom.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**السلوك عمليًا.** لم يشغّل PromptQuorum تطبيق Arynwood MCP، لذا فأوصاف الميزات وجودة الردود المحلية هي عبارات المشروع.',
          '**التثبيت على Windows.** تدرج ملاحظات الإصدار التثبيت على جهاز Windows نظيف والنشر على حساب اجتماعي حقيقي بوصفهما غير منفّذين في 0.5.3، ويقول دليل Windows إن التنزيلات والتكاملات الخارجية لم تُتحقق يدويًا بعد.',
          '**ادعاءات الخصوصية والأمان.** لم تُقارن العبارات عن غياب القياس عن بُعد وفحص التحديثات وتدفق البيانات بالشيفرة أو بحركة الشبكة.',
          '**السجل.** صدر الإصداران 0.5.2 و0.5.3 كلاهما في 23 أكتوبر 2026 في مستودع أُنشئ في 10 سبتمبر 2026؛ ولا يوجد سجل إصدارات طويل يُحكم به.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Jan](/ar/power-local-llm/jan-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / Apache 2.0 (متغيّر)',
            'الفرق الرئيسي': 'تطبيق دردشة مفتوح المصدر لسطح المكتب بمحرك مدمج خاص',
          },
          {
            'التطبيق': '[Msty](/ar/power-local-llm/msty-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني جزئيًا / مغلق المصدر',
            'الفرق الرئيسي': 'واجهة دردشة للمستخدم العادي مع عدة مزوّدي نماذج',
          },
          {
            'التطبيق': '[AnythingLLM](/ar/power-local-llm/anythingllm-review)',
            'المنصات': 'Windows وmacOS وLinux وويب',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مع مستنداتك عبر مخزن متجهات مدمج',
          },
          {
            'التطبيق': '[LM Studio](/ar/power-local-llm/lm-studio-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / مملوك',
            'الفرق الرئيسي': 'واجهة متقنة مع متصفح نماذج ووضع خادم',
          },
        ],
        note: 'تفاصيل المنافسين تتغير كثيرًا؛ تأكد من السعر والرخصة والمنصات في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل دون إنترنت؟',
            a: 'يمكن للدردشة المحلية والبحث في المستندات والذاكرة العمل دون اتصال بعد تنزيل النماذج، لكن لا يوجد مفتاح لوضع عدم الاتصال، وما زال فحص التحديثات والميزات المعتمدة على الويب يحاولان الوصول إلى الشبكة.',
          },
          {
            q: 'هل يعمل على Mac؟',
            a: 'لا، فنظام macOS غير مدعوم وفق دليل المنصات من المطوّر. وتعرض النسخة التجريبية في المتصفح على موقع المشروع الواجهة دون أي تثبيت.',
          },
          {
            q: 'هل يستطيع استخدام خادم نماذج على جهاز آخر؟',
            a: 'تسجّل صفحة "Servers" نقاط نهاية Ollama أو المتوافقة مع OpenAI، وتقول الوثائق إن نقطة النهاية يمكنها تشغيل الدردشة وتوليد الصور على جهاز آخر.',
          },
          {
            q: 'كيف تُثبَّت التحديثات؟',
            a: 'من الإصدار 0.4.8 يظهر إشعار تحديث؛ والتثبيت يدوي بتشغيل المثبّت أو الحزمة الأحدث، وتحتاج الإصدارات الأقدم إلى تثبيت يدوي واحد أولًا.',
          },
          {
            q: 'هل يمكنني التحقق من مثبّت Windows؟',
            a: 'ينشر المطوّر مجاميع SHA-256 لكل حزمة، ويقول إن إصدارات 0.5.4 فما بعد يمكن فحصها أيضًا بإثباتات GitHub (attestations). ولم يتحقق PromptQuorum من أيٍّ منهما.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Arynwood MCP نسخة ألفا لسطح المكتب لنظامي Linux وWindows، وفق موقعها تجمع دردشة Ollama والبحث في المستندات والذاكرة وتكاملات أدوات MCP في تطبيق يعتمد على التشغيل المحلي أولًا، مع مثبّتات عامة وإصدار صدر قبل يوم من هذا الفحص. في المقابل، الرخصة بالمصدر المتاح ومقيّدة بالاستخدام الشخصي أو الداخلي، ومثبّت Windows غير موقّع، ونظام macOS غير مدعوم، ولا يُفرض وضع عدم اتصال ولا sandbox، وعمر المستودع نحو ستة أسابيع. يناسب من يرتاحون لبرمجيات ألفا ويقبلون هذه القيود؛ ومن يريد رخصة مفتوحة المصدر أو سجلًا أطول يمكنه مقارنة [Jan](/ar/power-local-llm/jan-review) أو [AnythingLLM](/ar/power-local-llm/anythingllm-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Arynwood MCP](https://arynwood.com/mcp/) — الميزات والتنزيلات والمتطلبات وبيانات الخصوصية والرخصة، فُحص في 24 أكتوبر 2026.',
          '[موجز أمان Arynwood MCP](https://arynwood.com/mcp-security/) — نموذج الموافقة وعبارات sandbox ووضع عدم الاتصال ونطاق الاختبارات.',
          '[Arynwood MCP على GitHub](https://github.com/Arynwood-Technology/ArynwoodMCP) — README وLICENSE وأدلة Windows والتثبيت والمنصات المدعومة.',
          '[إصدار v0.5.3 من Arynwood MCP](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3) — تاريخ الإصدار وقائمة الحزم ومجاميع التحقق وملاحظات الإصدار.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — تطبيق دردشة مفتوح المصدر لسطح المكتب بمحرك خاص.',
          '[مراجعة Msty](/ar/power-local-llm/msty-review) — عميل دردشة للمستخدم العادي مع عدة مزوّدي نماذج.',
          '[مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review) — دردشة مع المستندات بمخزن متجهات مدمج.',
          '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review) — تطبيق سطح مكتب بمتصفح نماذج وخادم محلي.',
          '[مقارنة مساعدات الدردشة المحلية بنماذج LLM](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة الفئة لتطبيقات الدردشة والمساعدات.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/arynwood-mcp-review-hero-zh.webp',
    title: 'Arynwood MCP 评测：处于 Alpha 阶段的本地 AI 工作区',
    seoTitle: 'Arynwood MCP 评测：本地 AI 工作区（Alpha）',
    intro: 'Arynwood MCP 是一款桌面 AI 工作区，据其官网和 README，它通过 Ollama 与本地模型对话，并增加文档搜索、记忆、设计画布和 MCP 工具集成。它是面向 Linux 和 Windows 的 0.5.3 版 Alpha，采用源码可见（source-available）许可证。本评测依据 2026年10月24日查阅的官网、README、许可证文件和发布说明。',
    metaDescription: 'Arynwood MCP 评测：基于 Ollama、面向 Linux 和 Windows 的本地 AI 工作区。Alpha 状态、未签名安装包、源码可见许可证与数据流向。',
    twitterDescription: 'Arynwood MCP 评测：基于 Ollama 的 Linux 和 Windows AI 工作区（Alpha），源码可见许可证。系统要求、安装包与数据流向。',
    audience: '使用 Linux 或 Windows、想了解 Arynwood MCP 能做什么、源码可见许可证允许什么、未签名的 Alpha 如何安装以及哪些数据会离开本机的读者。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Arynwood MCP 评测',
    targetKeywords: ['arynwood mcp 评测', 'arynwood mcp', '本地 ai 工作区 ollama', '源码可见 ai 应用', 'ollama 桌面应用 linux windows', 'mcp 工具集成'],
    current_hardware_mentioned: ['NVIDIA GPU with 12 GB VRAM'],
    leadAnswerBlock: '**Arynwood MCP（0.5.3 版，2026年10月23日发布）是面向 Linux 和 Windows 的桌面 Alpha，据其官网，它通过 Ollama 在你自己的电脑上运行聊天、文档搜索和工具集成。**本评测中的每项说法都来自项目自身的页面；PromptQuorum 未安装也未测试该软件。',
    quickAnswerTop: {
      zh: {
        question: '运行 Arynwood MCP 需要什么？',
        answer: '据项目文档，需要 Linux x86_64 或 Windows x64、至少 16 GB 内存和 20 GB 可用磁盘空间，以及单独安装的 Ollama。不支持 macOS。',
        bullets: [
          '聊天支持多角色，并从 Ollama 流式输出；也可以添加兼容 OpenAI 的服务器。',
          '知识搜索需要 Qdrant 和一个 Ollama 嵌入模型，两者都需单独安装。',
          '聊天不强制要求显卡；图像、音乐和视频工具需要 NVIDIA 显卡，建议 12 GB 或更大显存。',
          '可以接入 MCP 工具服务器，包括通过 Cutroom 使用 Kdenlive 剪辑视频。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer',
      },
      {
        label: 'Arynwood MCP 是什么？',
        anchor: 'what-is-arynwood-mcp',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '你需要什么',
        anchor: 'requirements',
      },
      {
        label: '价格与许可证',
        anchor: 'pricing',
      },
      {
        label: '如何开始',
        anchor: 'getting-started',
      },
      {
        label: '来源确认的功能',
        anchor: 'key-features',
      },
      {
        label: '隐私与网络使用',
        anchor: 'privacy',
      },
      {
        label: '适合谁用',
        anchor: 'who-should-use',
      },
      {
        label: '我们无法核实的内容',
        anchor: 'who-should-not-use',
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives',
      },
      {
        label: '常见问题',
        anchor: 'faq',
      },
      {
        label: '结论',
        anchor: 'verdict',
      },
      {
        label: '来源',
        anchor: 'sources',
      },
      {
        label: '相关阅读',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Arynwood MCP 是面向 Linux 和 Windows 的桌面 Alpha，可与本地 Ollama 模型对话，并增加文档搜索、记忆、设计画布和 MCP 工具集成。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作围绕本地聊天模型、文档库和工具箱的一个应用窗口，通过下载的安装包而不是应用商店安装。',
          },
        ],
        items: [
          '维护情况：0.5.3 版于 2026年10月23日发布，是核查时最新的上游更新；仓库创建于 2026年9月10日，因此不触发“项目已停止维护”警告，但项目只有大约六周。',
          '许可证：源码可见，不是开源，仅限个人或内部使用。',
          '安装包：Windows 安装程序未签名，整个应用标注为 Alpha。',
          '数据：官网称没有遥测，但多项功能会向外发送数据，且不强制离线模式。',
          '依据：2026年10月24日阅读的官网、README、许可证文件和发布说明，未进行实际测试。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 未安装、测试或评测 Arynwood MCP。下文关于功能、隐私和安全的说法均来自项目自身。',
          },
        ],
      },
      overview: {
        id: 'what-is-arynwood-mcp',
        title: 'Arynwood MCP 是什么？',
        content: [
          '**Arynwood MCP 是 Arynwood Technology（开发者为 Lorelei Noble）推出的本地优先个人 AI 与创作工作区，会把聊天发送到在你自己硬件上通过 Ollama 运行的模型。**“MCP”指 Model Context Protocol，应用用它来连接工具；README 和官网描述的是桌面工作区，而不是供其他程序使用的插件。',
          'PromptQuorum 没有找到其他名为 Arynwood MCP 的产品。同一开发者的 Arynwood Grove 是另一个社区服务器，应用可以连接它；官网的[浏览器演示](https://arynwood-technology.github.io/ArynwoodMCP/)用预设的对话展示界面，背后没有真正的 AI。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: ['**Arynwood MCP 从项目的 GitHub Releases 页面下载，每个系统一个安装包；Ollama 需单独安装。**'],
        columns: ['系统', '下载'],
        rows: [
          {
            '系统': 'Linux x86_64（AppImage）',
            '下载': '[arynwood-mcp_0.5.3_amd64.AppImage](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.AppImage)',
          },
          {
            '系统': 'Debian / Ubuntu（.deb）',
            '下载': '[arynwood-mcp_0.5.3_amd64.deb](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.deb)',
          },
          {
            '系统': 'Windows x64（未签名 Alpha）',
            '下载': '[arynwood-mcp_0.5.3_x64-setup.exe](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_x64-setup.exe)',
          },
          {
            '系统': '校验和',
            '下载': '[SHA256SUMS.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS.txt)（Linux）、[SHA256SUMS-windows.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS-windows.txt)',
          },
          {
            '系统': 'macOS',
            '下载': '不支持',
          },
          {
            '系统': '官网',
            '下载': '[arynwood.com/mcp](https://arynwood.com/mcp/)',
          },
          {
            '系统': '隐私',
            '下载': '[哪些数据会离开你的电脑](https://arynwood.com/mcp/)（没有单独的隐私政策）',
          },
          {
            '系统': '安全说明',
            '下载': '[arynwood.com/mcp-security](https://arynwood.com/mcp-security/)',
          },
          {
            '系统': '源代码',
            '下载': '[github.com/Arynwood-Technology/ArynwoodMCP](https://github.com/Arynwood-Technology/ArynwoodMCP)',
          },
        ],
        note: '评测版本：0.5.3（桌面 Alpha），据 GitHub 发布页于 2026年10月23日发布，是核查时最新的上游更新。Windows 安装程序未签名，因此 Microsoft Defender SmartScreen 可能显示“Windows 已保护你的电脑”；开发者的指南建议先比对 SHA-256 校验和，再选择“更多信息”和“仍要运行”。AppImage 在执行 `chmod +x` 后即可运行，.deb 用 `sudo apt install ./file.deb` 安装。官网没有单独的隐私政策，其“What leaves your machine”一节即隐私说明。',
      },
      requirements: {
        id: 'requirements',
        title: '你需要什么',
        content: [
          '**Arynwood MCP 需要 Linux x86_64 或 Windows x64，并需单独安装 Ollama；内存、磁盘和显卡要求见下表。**文档补充说，使用较小的模型或远程端点时，8 GB 也可能够用。',
        ],
        columns: ['项目', '文档中的要求'],
        rows: [
          {
            '项目': 'Linux',
            '文档中的要求': 'x86_64；AppImage 需要 glibc 2.35 或更新',
          },
          {
            '项目': 'Windows',
            '文档中的要求': 'x64 Alpha，基于 WebView2 的按用户安装包',
          },
          {
            '项目': 'macOS',
            '文档中的要求': '不支持',
          },
          {
            '项目': '内存与磁盘',
            '文档中的要求': '16 GB 内存；20 GB 可用空间外加模型',
          },
          {
            '项目': '显卡',
            '文档中的要求': '聊天可选；图像/音乐/视频需 NVIDIA',
          },
          {
            '项目': '其他服务',
            '文档中的要求': '必须有 Ollama；知识搜索需 Qdrant',
          },
        ],
        note: '没有 NVIDIA 显卡时，应用会切换到 CPU 模式，停用 GPU 工具并针对处理器调整聊天；文档提醒，在小型服务器上，8B 模型每次回复可能需要数分钟。Ollama、Qdrant 和 GPU 工具都是独立服务，安装包不包含它们。',
      },
      pricing: {
        id: 'pricing',
        title: '价格与许可证',
        content: [
          '**官网没有给出该应用的价格，安装包公开提供下载且未标注费用；但 Arynwood MCP Source-Available License 据官网并非开源许可证，并设有限制。**开发者的部署服务按需报价。',
        ],
        items: [
          '**允许的行为。**下载并运行未修改的构建版本，用于个人或内部评估；查看并修改源代码，用于个人或内部使用。',
          '**未经书面许可不得进行。**再分发、出售或转授权该软件及其任何衍生版本，以及将其作为托管或代管服务的一部分提供。',
          '**Alpha 阶段的担保。**许可证文本按“现状”提供软件，并警告可能出现不兼容的更改、数据丢失和功能不完整；第三方组件沿用各自的许可证。',
          '**开发者自己的提醒。**许可证文件自称“a template starting point, not reviewed by a lawyer”，并建议在用于公开发布前请律师审阅。',
        ],
        note: '于 2026年10月24日读自 [LICENSE 文件](https://github.com/Arynwood-Technology/ArynwoodMCP/blob/main/LICENSE)。这不是法律意见；在工作中使用该软件前请先阅读该文件。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始',
        content: ['**以下步骤依据开发者的安装指南和 Windows 指南；PromptQuorum 未实际执行。**'],
        numberedItems: [
          {
            title: '对照要求检查你的电脑',
            whyItMatters: '下载前，对照上表检查内存、可用磁盘空间和操作系统。',
          },
          {
            title: '安装 Ollama 并拉取模型',
            whyItMatters: 'Ollama 不包含在安装包内。请从其官网安装，再拉取角色所用的模型；在没有 GPU 的电脑上，可输入某个小模型的准确名称。',
          },
          {
            title: '下载安装包并核对校验和',
            whyItMatters: '把适合你系统的安装包和对应的校验和文件保存到同一文件夹，运行前先比对 SHA-256 值。',
          },
          {
            title: '安装或启动',
            whyItMatters: 'Linux 上给 AppImage 加上可执行权限后启动，或用 apt 安装 .deb。Windows 上运行安装程序，它只为你的用户账户安装；如果 SmartScreen 发出警告，请选择“更多信息”和“仍要运行”。',
          },
          {
            title: '打开应用并连接服务',
            whyItMatters: '如果应用连不上 Ollama，会给出提示。知识搜索还需要 Qdrant，同样需单独安装。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源确认的功能',
        content: ['**以下每一项都来自官网、README 或开发者的文档。**'],
        items: [
          '**聊天。**从 Ollama 流式输出的多角色聊天，支持模型管理，并可登记兼容 OpenAI 的服务器。',
          '**知识与记忆。**可从网址、文件或文本中学习；语义搜索通过 Qdrant 和 Ollama 嵌入模型加入聊天，聊天会保留记忆并接受文件上传。',
          '**MCP 工具。**可连接 MCP 工具服务器，包括通过 Cutroom 使用 Kdenlive 剪辑；据安全说明，一次批准只授权一次确切的工具调用。',
          '**Design Center。**画布式设计工具，其图像生成使用单独安装的 Stable Diffusion（A1111）服务。',
          '**音频与视频。**依赖单独安装的辅助工具的可选工作室；LoRA 训练、基于脚本的 GPU 工具和项目文件浏览器需要源码检出，打包版本中不可用。',
          '**社区。**一个可选页面，连接到 Arynwood Grove 服务器（0.7.1，Alpha）；消息保存在该服务器上，没有端到端加密。',
          '**网关。**仅限所有者的远程控制用实验性无界面网关，默认关闭，需从源码检出运行。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**官网称没有遥测，聊天、文档和记忆都保存在你的磁盘上。**官网还说，应用会在启动时以及运行期间每六小时向 GitHub 查询是否有更新的稳定版，不会发送凭据或工作区内容，但 GitHub 会收到包括你的 IP 地址在内的常规连接数据。',
          '据官网，其他数据只会通过你使用的功能离开本机：网页搜索、从网址学习、下载、社交发布、部署、IRC、服务器上的 Grove，或你添加的远程模型服务器。安全说明表示，没有操作系统级沙箱，也不强制离线模式，其声明的适用范围是一位所有者使用一台电脑；模型下载完成后，本地聊天、文档搜索和记忆可以离线工作。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是开发者的说法。PromptQuorum 未审计代码或网络流量，安全说明本身也称其测试不是渗透测试或安全认证。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        items: [
          '**Linux 或 Windows 用户**，想在一个应用里使用 Ollama 工作区。',
          '**能接受 Alpha 软件、**未签名安装程序和仅限个人或内部使用的许可证的人。',
          '**Kdenlive 剪辑用户**，想尝试通过 Cutroom 调用工具。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际表现。**PromptQuorum 没有运行 Arynwood MCP，因此功能描述和本地回答的质量都是项目自身的说法。',
          '**Windows 安装。**发布说明把在干净 Windows 电脑上安装和向真实社交账号发布列为 0.5.3 未执行的项目，Windows 指南则称下载和外部集成尚未经过手动验证。',
          '**隐私与安全说法。**关于无遥测、更新检查和数据流向的说法，我们没有对照代码或网络流量核实。',
          '**历史记录。**0.5.2 和 0.5.3 都在 2026年10月23日发布，仓库创建于 2026年9月10日；没有可供参考的长期发布历史。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Jan](/zh/power-local-llm/jan-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / Apache 2.0（变体）',
            '主要区别': '自带内置引擎的开源桌面聊天应用',
          },
          {
            '应用': '[Msty](/zh/power-local-llm/msty-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费增值 / 闭源',
            '主要区别': '支持多个模型提供方的消费级聊天界面',
          },
          {
            '应用': '[AnythingLLM](/zh/power-local-llm/anythingllm-review)',
            '平台': 'Windows、macOS、Linux、网页',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '借助内置向量库与你的文档对话',
          },
          {
            '应用': '[LM Studio](/zh/power-local-llm/lm-studio-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / 专有',
            '主要区别': '界面成熟，带模型浏览器和服务器模式',
          },
        ],
        note: '竞品信息经常变化；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '没有网络能用吗？',
            a: '模型下载完成后，本地聊天、文档搜索和记忆可以离线工作，但没有离线开关，更新检查和基于网络的功能仍会尝试联网。',
          },
          {
            q: '能在 Mac 上运行吗？',
            a: '不能，据开发者的平台指南，macOS 不受支持。项目官网上的浏览器演示可以无需安装就展示界面。',
          },
          {
            q: '能使用另一台电脑上的模型服务器吗？',
            a: '“Servers”页面可登记 Ollama 或兼容 OpenAI 的端点，文档称端点可以改在另一台电脑上运行聊天和图像生成。',
          },
          {
            q: '更新如何安装？',
            a: '0.4.8 及以后的版本会显示更新提示；安装需要手动运行较新的安装程序或安装包，更早的版本需要先手动安装一次。',
          },
          {
            q: '能验证 Windows 安装程序吗？',
            a: '开发者为每个安装包公布了 SHA-256 校验和，并称 0.5.4 起的构建还可用 GitHub 证明（attestation）验证。PromptQuorum 两者均未验证。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Arynwood MCP 是面向 Linux 和 Windows 的桌面 Alpha，据其官网，它把 Ollama 聊天、文档搜索、记忆和 MCP 工具集成整合在一个本地优先的应用中，提供公开的安装包，并在核查前一天发布了新版本。不利之处在于：许可证是源码可见并限于个人或内部使用，Windows 安装程序未签名，不支持 macOS，不强制离线模式或沙箱，而且仓库只有大约六周。它适合能接受 Alpha 软件及上述限制的人；想要开源许可证或更长历史记录的读者可以对比 [Jan](/zh/power-local-llm/jan-review) 或 [AnythingLLM](/zh/power-local-llm/anythingllm-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Arynwood MCP 官网](https://arynwood.com/mcp/) — 功能、下载、要求、隐私与许可证说明，2026年10月24日查阅。',
          '[Arynwood MCP 安全说明](https://arynwood.com/mcp-security/) — 批准模型、沙箱与离线模式的说法、测试范围。',
          '[GitHub 上的 Arynwood MCP](https://github.com/Arynwood-Technology/ArynwoodMCP) — README、LICENSE，以及 Windows、安装和支持平台指南。',
          '[Arynwood MCP v0.5.3 发布页](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3) — 发布日期、安装包列表、校验和与发布说明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Jan 评测](/zh/power-local-llm/jan-review) — 自带引擎的开源桌面聊天应用。',
          '[Msty 评测](/zh/power-local-llm/msty-review) — 支持多个模型提供方的消费级聊天客户端。',
          '[AnythingLLM 评测](/zh/power-local-llm/anythingllm-review) — 带内置向量库的文档聊天。',
          '[LM Studio 评测](/zh/power-local-llm/lm-studio-review) — 带模型浏览器和本地服务器的桌面应用。',
          '[本地 LLM 聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared) — 聊天应用与助手的类别对比。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/arynwood-mcp-review-hero-ko.webp',
    title: 'Arynwood MCP 리뷰: 알파 단계의 로컬 AI 워크스페이스',
    seoTitle: 'Arynwood MCP 리뷰: 로컬 AI 워크스페이스(알파)',
    intro: 'Arynwood MCP는 공식 웹사이트와 README에 따르면 Ollama를 통해 로컬 모델과 대화하고 문서 검색, 메모리, 디자인 캔버스, MCP 도구 연동을 더하는 데스크톱 AI 워크스페이스입니다. Linux와 Windows용 0.5.3 알파 버전이며 소스 공개(source-available) 라이선스로 제공됩니다. 이 리뷰는 2026년 10월 24일에 확인한 웹사이트, README, 라이선스 파일, 릴리스 노트를 바탕으로 합니다.',
    metaDescription: 'Arynwood MCP 리뷰: Ollama 기반 Linux·Windows용 로컬 AI 워크스페이스. 알파 상태, 서명되지 않은 설치 파일, 소스 공개 라이선스, 데이터 흐름.',
    twitterDescription: 'Arynwood MCP 리뷰: Linux·Windows용 Ollama 기반 AI 워크스페이스(알파), 소스 공개 라이선스. 요구 사항, 설치 파일, 데이터 흐름.',
    audience: 'Linux 또는 Windows에서 Arynwood MCP가 무엇을 하는지, 소스 공개 라이선스가 무엇을 허용하는지, 서명되지 않은 알파 버전을 어떻게 설치하는지, 어떤 데이터가 기기 밖으로 나가는지 알고 싶은 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Arynwood MCP 리뷰',
    targetKeywords: [
      'arynwood mcp 리뷰',
      'arynwood mcp',
      '로컬 ai 워크스페이스 ollama',
      '소스 공개 ai 앱',
      'ollama 데스크톱 앱 linux windows',
      'mcp 도구 연동',
    ],
    current_hardware_mentioned: ['NVIDIA GPU with 12 GB VRAM'],
    leadAnswerBlock: '**Arynwood MCP(버전 0.5.3, 2026년 10월 23일 출시)는 공식 웹사이트에 따르면 채팅, 문서 검색, 도구 연동을 Ollama를 통해 사용자의 컴퓨터에서 실행하는 Linux·Windows용 데스크톱 알파 버전입니다.** 이 리뷰의 모든 설명은 프로젝트 자체 페이지에서 나온 것이며, PromptQuorum은 설치하거나 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Arynwood MCP를 실행하려면 무엇이 필요합니까?',
        answer: '프로젝트 문서에 따르면 Linux x86_64 또는 Windows x64, 16 GB 이상의 RAM과 20 GB의 여유 디스크 공간, 그리고 별도로 설치한 Ollama가 필요합니다. macOS는 지원되지 않습니다.',
        bullets: [
          '채팅은 멀티 페르소나 방식이며 Ollama에서 스트리밍합니다. OpenAI 호환 서버도 추가할 수 있습니다.',
          '지식 검색에는 별도로 설치한 Qdrant와 Ollama 임베딩 모델이 필요합니다.',
          '채팅에는 그래픽 카드가 선택 사항입니다. 이미지·음악·비디오 도구에는 NVIDIA 카드가 필요하며 VRAM 12 GB 이상이 권장됩니다.',
          'MCP 도구 서버를 연결할 수 있으며 Cutroom을 통한 Kdenlive 영상 편집도 포함됩니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Arynwood MCP란 무엇입니까?',
        anchor: 'what-is-arynwood-mcp',
      },
      {
        label: '받는 방법',
        anchor: 'get-it',
      },
      {
        label: '필요한 사양',
        anchor: 'requirements',
      },
      {
        label: '가격과 라이선스',
        anchor: 'pricing',
      },
      {
        label: '시작하는 방법',
        anchor: 'getting-started',
      },
      {
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '개인정보 보호와 네트워크 사용',
        anchor: 'privacy',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 내용',
        anchor: 'who-should-not-use',
      },
      {
        label: '경쟁 제품과 대안',
        anchor: 'vs-alternatives',
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq',
      },
      {
        label: '결론',
        anchor: 'verdict',
      },
      {
        label: '출처',
        anchor: 'sources',
      },
      {
        label: '관련 글',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Arynwood MCP는 로컬 Ollama 모델과 대화하고 문서 검색, 메모리, 디자인 캔버스, MCP 도구 연동을 더하는 Linux·Windows용 데스크톱 알파 버전입니다.',
          },
          {
            type: 'plain-terms',
            text: '로컬 채팅 모델, 문서 라이브러리, 도구 상자를 하나의 앱 창으로 묶은 것으로, 스토어가 아닌 내려받은 패키지로 설치합니다.',
          },
        ],
        items: [
          '유지 관리: 버전 0.5.3은 2026년 10월 23일에 공개되었으며 확인 시점의 최신 업스트림 업데이트입니다. 저장소는 2026년 9월 10일에 만들어졌으므로 방치된 프로젝트 경고는 적용되지 않지만, 프로젝트는 약 6주 된 상태입니다.',
          '라이선스: 소스 공개형이며 오픈소스가 아니고, 개인 또는 내부 사용으로 제한됩니다.',
          '설치 파일: Windows 설치 파일은 서명되지 않았으며 앱 전체가 알파로 표시되어 있습니다.',
          '데이터: 웹사이트는 텔레메트리가 없다고 하지만 여러 기능이 데이터를 외부로 보내며 오프라인 모드는 강제되지 않습니다.',
          '근거: 2026년 10월 24일에 읽은 웹사이트, README, 라이선스 파일, 릴리스 노트이며 직접 테스트는 하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 Arynwood MCP를 설치하거나 테스트하거나 측정하지 않았습니다. 아래의 기능, 개인정보 보호, 보안에 관한 설명은 프로젝트 자체의 주장입니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-arynwood-mcp',
        title: 'Arynwood MCP란 무엇입니까?',
        content: [
          '**Arynwood MCP는 Arynwood Technology(개발자 Lorelei Noble)가 만든 로컬 우선 개인용 AI·창작 워크스페이스로, 채팅을 사용자의 하드웨어에서 Ollama로 실행되는 모델에 보냅니다.** "MCP"는 앱이 도구를 연결하는 데 사용하는 Model Context Protocol의 약자입니다. README와 웹사이트가 설명하는 것은 데스크톱 워크스페이스이며, 다른 프로그램용 플러그인이 아닙니다.',
          'PromptQuorum은 Arynwood MCP라는 이름의 다른 제품을 찾지 못했습니다. 같은 개발자의 Arynwood Grove는 앱이 연결할 수 있는 별도의 커뮤니티 서버이며, 웹사이트의 [브라우저 데모](https://arynwood-technology.github.io/ArynwoodMCP/)는 정해진 대화로 인터페이스를 보여 줄 뿐 실제 AI가 동작하지 않습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: ['**Arynwood MCP는 프로젝트의 GitHub Releases 페이지에서 시스템별 패키지 하나씩을 내려받으며, Ollama는 별도로 설치합니다.**'],
        columns: ['시스템', '다운로드'],
        rows: [
          {
            '시스템': 'Linux x86_64 (AppImage)',
            '다운로드': '[arynwood-mcp_0.5.3_amd64.AppImage](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.AppImage)',
          },
          {
            '시스템': 'Debian / Ubuntu (.deb)',
            '다운로드': '[arynwood-mcp_0.5.3_amd64.deb](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_amd64.deb)',
          },
          {
            '시스템': 'Windows x64 (서명되지 않은 알파)',
            '다운로드': '[arynwood-mcp_0.5.3_x64-setup.exe](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/arynwood-mcp_0.5.3_x64-setup.exe)',
          },
          {
            '시스템': '체크섬',
            '다운로드': '[SHA256SUMS.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS.txt) (Linux), [SHA256SUMS-windows.txt](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/download/v0.5.3/SHA256SUMS-windows.txt)',
          },
          {
            '시스템': 'macOS',
            '다운로드': '지원되지 않음',
          },
          {
            '시스템': '웹사이트',
            '다운로드': '[arynwood.com/mcp](https://arynwood.com/mcp/)',
          },
          {
            '시스템': '개인정보',
            '다운로드': '[기기 밖으로 나가는 데이터](https://arynwood.com/mcp/) (별도의 개인정보 처리방침 없음)',
          },
          {
            '시스템': '보안 개요',
            '다운로드': '[arynwood.com/mcp-security](https://arynwood.com/mcp-security/)',
          },
          {
            '시스템': '소스 코드',
            '다운로드': '[github.com/Arynwood-Technology/ArynwoodMCP](https://github.com/Arynwood-Technology/ArynwoodMCP)',
          },
        ],
        note: '확인한 버전: 0.5.3(데스크톱 알파). GitHub 릴리스 페이지에 따르면 2026년 10월 23일에 공개되었으며 확인 시점의 최신 업스트림 업데이트입니다. Windows 설치 파일은 서명되지 않았으므로 Microsoft Defender SmartScreen이 "Windows의 PC 보호"를 표시할 수 있습니다. 개발자의 안내서는 먼저 SHA-256 체크섬을 비교한 뒤 "추가 정보"와 "실행"을 선택하라고 합니다. AppImage는 `chmod +x` 후에 실행되며 .deb는 `sudo apt install ./file.deb`로 설치합니다. 웹사이트에는 별도의 개인정보 처리방침이 없으며, "What leaves your machine" 섹션이 개인정보에 관한 설명입니다.',
      },
      requirements: {
        id: 'requirements',
        title: '필요한 사양',
        content: [
          '**Arynwood MCP에는 Linux x86_64 또는 Windows x64와 별도로 설치한 Ollama가 필요하며, 메모리·디스크·그래픽 요구 사항은 아래 표에 있습니다.** 문서에 따르면 더 작은 모델이나 원격 엔드포인트를 쓰면 8 GB로도 동작할 수 있습니다.',
        ],
        columns: ['항목', '문서상의 요구 사항'],
        rows: [
          {
            '항목': 'Linux',
            '문서상의 요구 사항': 'x86_64. AppImage는 glibc 2.35 이상 필요',
          },
          {
            '항목': 'Windows',
            '문서상의 요구 사항': 'x64 알파, WebView2 기반 사용자별 설치 파일',
          },
          {
            '항목': 'macOS',
            '문서상의 요구 사항': '지원되지 않음',
          },
          {
            '항목': '메모리와 디스크',
            '문서상의 요구 사항': 'RAM 16 GB, 여유 20 GB와 모델 용량',
          },
          {
            '항목': '그래픽 카드',
            '문서상의 요구 사항': '채팅은 선택. 이미지/음악/비디오는 NVIDIA',
          },
          {
            '항목': '기타 서비스',
            '문서상의 요구 사항': 'Ollama 필수, 지식 검색에는 Qdrant',
          },
        ],
        note: 'NVIDIA 카드가 없으면 앱이 CPU 모드로 전환되어 GPU 도구를 비활성화하고 채팅을 프로세서에 맞게 조정합니다. 문서는 소형 서버에서 8B 모델의 응답에 몇 분이 걸릴 수 있다고 경고합니다. Ollama, Qdrant, GPU 도구는 별도 서비스이며 설치 파일에 포함되어 있지 않습니다.',
      },
      pricing: {
        id: 'pricing',
        title: '가격과 라이선스',
        content: [
          '**웹사이트에는 앱의 가격이 없고 패키지는 비용 없이 내려받도록 공개되어 있습니다. 다만 Arynwood MCP Source-Available License는 웹사이트에 따르면 오픈소스 라이선스가 아니며 제한을 둡니다.** 개발자의 설정 지원 서비스는 문의 시 견적을 제공합니다.',
        ],
        items: [
          '**허용되는 것.** 수정하지 않은 빌드를 내려받아 개인 또는 내부 평가용으로 실행하는 것, 그리고 개인 또는 내부 사용을 위해 소스 코드를 보고 수정하는 것.',
          '**서면 허가 없이는 허용되지 않는 것.** 소프트웨어나 그 파생물을 재배포, 판매, 재라이선스하는 것, 그리고 호스팅 또는 관리형 서비스의 일부로 제공하는 것.',
          '**알파 단계의 보증.** 라이선스 본문은 소프트웨어를 있는 그대로 제공하며 호환되지 않는 변경, 데이터 손실, 미완성 기능을 경고합니다. 서드파티 구성 요소는 각자의 라이선스를 유지합니다.',
          '**개발자 스스로의 단서.** 라이선스 파일은 스스로를 "a template starting point, not reviewed by a lawyer"라고 부르며, 공개 릴리스에 의존하기 전에 변호사의 검토를 받으라고 안내합니다.',
        ],
        note: '2026년 10월 24일에 [LICENSE 파일](https://github.com/Arynwood-Technology/ArynwoodMCP/blob/main/LICENSE)에서 읽었습니다. 법률 자문이 아닙니다. 업무에 사용하기 전에 파일을 읽어 보십시오.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: ['**아래 단계는 개발자의 설치 안내서와 Windows 안내서를 따른 것이며, PromptQuorum은 실행해 보지 않았습니다.**'],
        numberedItems: [
          {
            title: '내 컴퓨터를 요구 사항과 비교합니다',
            whyItMatters: '내려받기 전에 위 표로 메모리, 여유 디스크 공간, 운영 체제를 확인합니다.',
          },
          {
            title: 'Ollama를 설치하고 모델을 받습니다',
            whyItMatters: 'Ollama는 포함되어 있지 않습니다. 공식 사이트에서 설치한 뒤 페르소나가 쓰는 모델을 받거나, GPU가 없는 컴퓨터에서는 작은 모델의 정확한 이름을 입력합니다.',
          },
          {
            title: '패키지를 내려받고 체크섬을 확인합니다',
            whyItMatters: '내 시스템용 패키지와 해당 체크섬 파일을 같은 폴더에 저장하고, 실행하기 전에 SHA-256 값을 비교합니다.',
          },
          {
            title: '설치하거나 실행합니다',
            whyItMatters: 'Linux에서는 AppImage에 실행 권한을 주고 실행하거나 apt로 .deb를 설치합니다. Windows에서는 설치 파일을 실행하며, 사용자 계정에만 설치됩니다. SmartScreen이 경고하면 "추가 정보"와 "실행"을 선택합니다.',
          },
          {
            title: '앱을 열고 서비스를 연결합니다',
            whyItMatters: 'Ollama에 연결할 수 없으면 앱이 알려 줍니다. 지식 검색에는 Qdrant도 필요하며 이 역시 별도로 설치합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: ['**아래 항목은 모두 웹사이트, README 또는 개발자의 문서에서 나온 것입니다.**'],
        items: [
          '**채팅.** Ollama에서 스트리밍하는 멀티 페르소나 채팅이며 모델 관리와 OpenAI 호환 서버 등록을 지원합니다.',
          '**지식과 메모리.** URL, 파일, 텍스트로 학습시킬 수 있습니다. 의미 기반 검색은 Qdrant와 Ollama 임베딩 모델을 통해 채팅에 더해지고, 채팅은 메모리를 유지하며 파일 업로드를 받습니다.',
          '**MCP 도구.** MCP 도구 서버를 연결하며 Cutroom을 통한 Kdenlive 편집도 포함됩니다. 보안 개요에 따르면 한 번의 승인은 정확히 한 번의 도구 호출만 허가합니다.',
          '**Design Center.** 캔버스형 디자인 도구이며 이미지 생성에는 별도로 설치한 Stable Diffusion(A1111) 서비스를 사용합니다.',
          '**오디오와 비디오.** 별도로 설치하는 보조 도구에 의존하는 선택형 스튜디오입니다. LoRA 학습, 스크립트 기반 GPU 도구, 프로젝트 파일 브라우저는 패키지 빌드가 아니라 소스 체크아웃이 필요합니다.',
          '**커뮤니티.** Arynwood Grove 서버(0.7.1, 알파)에 연결하는 선택 페이지입니다. 메시지는 해당 서버에 저장되며 종단간 암호화되지 않습니다.',
          '**게이트웨이.** 소유자만 쓰는 원격 제어용 실험적 헤드리스 게이트웨이로, 기본값은 꺼짐이며 소스 체크아웃에서 실행합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 네트워크 사용',
        content: [
          '**웹사이트는 텔레메트리가 없으며 채팅, 문서, 메모리가 사용자의 디스크에 남는다고 밝힙니다.** 또한 앱이 시작할 때와 실행 중 6시간마다 GitHub에서 새 안정 버전을 확인하며, 이때 자격 증명이나 워크스페이스 내용은 보내지 않지만 GitHub는 IP 주소 같은 일반적인 연결 정보를 받는다고 덧붙입니다.',
          '웹사이트에 따르면 그 밖의 데이터는 사용자가 쓰는 기능을 통해서만 기기 밖으로 나갑니다. 웹 검색, URL 학습, 다운로드, 소셜 게시, 배포, IRC, 서버의 Grove, 사용자가 추가한 원격 모델 서버가 해당합니다. 보안 개요는 OS 수준 샌드박스도 강제 오프라인 모드도 없으며 명시된 범위는 컴퓨터 한 대에 소유자 한 명이라고 밝힙니다. 모델을 내려받은 뒤에는 로컬 채팅, 문서 검색, 메모리가 오프라인에서도 동작할 수 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 주장입니다. PromptQuorum은 코드나 네트워크 트래픽을 감사하지 않았으며, 보안 개요 자체도 그 테스트가 침투 테스트나 보안 인증이 아니라고 밝힙니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Linux 또는 Windows 사용자**로, 하나의 앱에서 Ollama 워크스페이스를 쓰고 싶은 분.',
          '**알파 소프트웨어, 서명되지 않은 설치 파일, 개인·내부 사용 한정 라이선스**가 괜찮은 분.',
          '**Kdenlive 편집자**로, Cutroom을 통한 도구 호출을 시험해 보고 싶은 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**실제 동작.** PromptQuorum은 Arynwood MCP를 실행하지 않았으므로 기능 설명과 로컬 응답의 품질은 프로젝트의 주장입니다.',
          '**Windows 설치.** 릴리스 노트는 새 Windows 컴퓨터에서의 설치와 실제 소셜 계정으로의 게시를 0.5.3에서 실행하지 않은 항목으로 적고 있으며, Windows 안내서는 다운로드와 외부 연동이 아직 수동으로 검증되지 않았다고 밝힙니다.',
          '**개인정보 보호와 보안 주장.** 텔레메트리 없음, 업데이트 확인, 데이터 흐름에 관한 설명은 코드나 네트워크 트래픽과 대조하지 않았습니다.',
          '**이력.** 버전 0.5.2와 0.5.3은 모두 2026년 10월 23일에 나왔고 저장소는 2026년 9월 10일에 만들어졌습니다. 판단할 만한 긴 릴리스 이력이 없습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Jan](/ko/power-local-llm/jan-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0(변형)',
            '핵심 차이': '자체 엔진을 내장한 오픈소스 데스크톱 채팅 앱',
          },
          {
            '앱': '[Msty](/ko/power-local-llm/msty-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '프리미엄 / 비공개 소스',
            '핵심 차이': '여러 모델 제공자를 지원하는 일반 사용자용 채팅 화면',
          },
          {
            '앱': '[AnythingLLM](/ko/power-local-llm/anythingllm-review)',
            '플랫폼': 'Windows, macOS, Linux, 웹',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '내장 벡터 저장소로 내 문서와 채팅',
          },
          {
            '앱': '[LM Studio](/ko/power-local-llm/lm-studio-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / 독점',
            '핵심 차이': '모델 브라우저와 서버 모드를 갖춘 잘 다듬어진 화면',
          },
        ],
        note: '경쟁 제품의 세부 사항은 자주 바뀝니다. 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '인터넷 없이 동작합니까?',
            a: '모델을 내려받은 뒤에는 로컬 채팅, 문서 검색, 메모리가 오프라인에서도 동작할 수 있지만, 오프라인 스위치는 없으며 업데이트 확인과 웹 기반 기능은 계속 네트워크에 접속하려 합니다.',
          },
          {
            q: 'Mac에서 실행됩니까?',
            a: '아니요. 개발자의 플랫폼 안내서에 따르면 macOS는 지원되지 않습니다. 프로젝트 사이트의 브라우저 데모로는 설치 없이 인터페이스를 볼 수 있습니다.',
          },
          {
            q: '다른 컴퓨터의 모델 서버를 쓸 수 있습니까?',
            a: '"Servers" 페이지에서 Ollama 또는 OpenAI 호환 엔드포인트를 등록할 수 있으며, 문서에 따르면 엔드포인트가 다른 컴퓨터에서 채팅과 이미지 생성을 대신 실행할 수 있습니다.',
          },
          {
            q: '업데이트는 어떻게 설치합니까?',
            a: '버전 0.4.8부터 업데이트 알림이 표시됩니다. 설치는 더 새로운 설치 파일이나 패키지를 직접 실행하는 수동 방식이며, 이전 버전은 먼저 한 번 수동으로 설치해야 합니다.',
          },
          {
            q: 'Windows 설치 파일을 검증할 수 있습니까?',
            a: '개발자는 각 패키지의 SHA-256 체크섬을 공개하며 0.5.4부터의 빌드는 GitHub 증명(attestation)으로도 확인할 수 있다고 밝힙니다. PromptQuorum은 어느 쪽도 검증하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Arynwood MCP는 공식 웹사이트에 따르면 Ollama 채팅, 문서 검색, 메모리, MCP 도구 연동을 하나의 로컬 우선 앱으로 묶은 Linux·Windows용 데스크톱 알파 버전이며, 공개 설치 파일이 있고 이 확인 하루 전에 릴리스가 공개되었습니다. 반면 라이선스는 소스 공개형으로 개인 또는 내부 사용에 한정되고, Windows 설치 파일은 서명되지 않았으며, macOS는 지원되지 않고, 오프라인 모드도 샌드박스도 강제되지 않으며, 저장소는 약 6주 되었습니다. 알파 소프트웨어에 거부감이 없고 이러한 제한을 받아들이는 분께 적합합니다. 오픈소스 라이선스나 더 긴 이력을 원한다면 [Jan](/ko/power-local-llm/jan-review) 또는 [AnythingLLM](/ko/power-local-llm/anythingllm-review)을 비교해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Arynwood MCP 웹사이트](https://arynwood.com/mcp/) — 기능, 다운로드, 요구 사항, 개인정보 및 라이선스 설명. 2026년 10월 24일 확인.',
          '[Arynwood MCP 보안 개요](https://arynwood.com/mcp-security/) — 승인 모델, 샌드박스와 오프라인 모드에 관한 설명, 테스트 범위.',
          '[GitHub의 Arynwood MCP](https://github.com/Arynwood-Technology/ArynwoodMCP) — README, LICENSE, 그리고 Windows, 설치, 지원 플랫폼 안내서.',
          '[Arynwood MCP v0.5.3 릴리스](https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3) — 공개 날짜, 패키지 목록, 체크섬, 릴리스 노트.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 자체 엔진을 가진 오픈소스 데스크톱 채팅 앱.',
          '[Msty 리뷰](/ko/power-local-llm/msty-review) — 여러 모델 제공자를 지원하는 일반 사용자용 채팅 클라이언트.',
          '[AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review) — 내장 벡터 저장소를 쓰는 문서 채팅.',
          '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review) — 모델 브라우저와 로컬 서버를 갖춘 데스크톱 앱.',
          '[로컬 LLM 채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 채팅 앱과 어시스턴트의 카테고리 비교.',
        ],
      },
    },
  },
}

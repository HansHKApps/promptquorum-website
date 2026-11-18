// Newelle Review: Free Open-Source AI Assistant for Linux with Local Models
// Slug: newelle-review
// Companion to: jan-review, lm-studio-review, gpt4all-review, anythingllm-review
// Sources (all read 2026-11-18, no hands-on testing): official website (home page, releases, macOS releases, docs index), GitHub repository qwersyk/Newelle
// (API metadata, README, releases, commits, Flatpak manifest), Flathub listing and summary (package metadata, versions, permissions, sizes).
// The request came from the site owner, not from the maker.
// Last upstream update 2026-11-06 (last commit on master; latest release 1.6.1 on 2026-11-02) => no stale warning.
// Theme: 'Easiest Desktop Apps' (canonical, as jan-review and lm-studio-review).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/newelle-review-hero-en.webp',
    title: 'Newelle Review: Free Open-Source AI Assistant for Linux with Local Models',
    seoTitle: 'Newelle Review: Free Open-Source AI Assistant for Linux',
    intro:
      'Newelle 1.6.1 is a free, GPL-3.0 chat assistant for the Linux desktop that connects to cloud AI providers (which bill separately) or runs local models through Llama.cpp or Ollama. According to its README it adds voice input and output, chat with your own documents, MCP tools, long-term memory, web search and terminal-command execution, and it installs from Flathub. This review is based on the official website, the GitHub repository and its release notes, and the Flathub listing, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Newelle is a free GPL-3.0 Linux AI assistant with local models, voice, document chat and MCP tools, installed from Flathub. What is confirmed, what is not.',
    twitterDescription:
      'Newelle: a free Linux AI assistant with local models, voice, document chat and MCP tools. GPL-3.0, installs from Flathub. What is confirmed.',
    audience:
      'Linux desktop users who want a free, open-source AI assistant with local-model and voice options, people who want to chat with their own documents, and anyone weighing a community-developed project',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Newelle review',
    targetKeywords: [
      'Newelle review',
      'Linux AI assistant',
      'Newelle Flatpak',
      'open-source AI assistant Linux',
      'Newelle Ollama',
      'local LLM Linux desktop app',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Newelle is a free, open-source (GPL-3.0) AI assistant for the Linux desktop that works with cloud providers (billed separately by them) or with local models run through Llama.cpp or Ollama.** It installs from Flathub and adds voice, document chat, MCP tools and memory. PromptQuorum has not tested it, and no privacy policy, company or imprint was found.',
    quickAnswerTop: {
      en: {
        question: 'What is Newelle and who is it for?',
        answer:
          'Newelle is a chat assistant developed in the open on GitHub and packaged as a Flatpak. It suits Linux desktop users who want one app for several AI providers and local models, plus voice, document chat and tools they control.',
        bullets: [
          'Free and GPL-3.0 licensed; Linux first, with a macOS build that the website labels Beta.',
          'Chat with several providers, or download local models and run them with Llama.cpp or Ollama.',
          'Voice input and output, a real-time call mode, and chat with your own documents.',
          'Extensions, skills in the style of Claude and Codex, MCP servers and scheduled tasks.',
          'Repository created in June 2023; version 1.6.1 was released on 2 November 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'Features', anchor: 'features' },
      { label: 'Privacy and Data Flow', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Alternatives', anchor: 'alternatives' },
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
            text: 'Newelle is a free, open-source AI assistant for the Linux desktop that talks to cloud providers (billed separately) or local models and adds voice, document chat and tools.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a chat window on your Linux desktop where you choose which AI answers: an online provider, or a model downloaded to your own computer. It can also listen, speak, read your documents and run tools you allow.',
          },
        ],
        items: [
          'Installs from Flathub with one command or through a software centre; the Flathub listing shows network access but no home-folder access.',
          'Local models run through Llama.cpp or Ollama; no minimum memory is published, but the model downloader estimates whether a model fits, according to the 1.6.0 release notes.',
          'Version 1.6.0 added workspaces, subagents, a new long-term memory, usage tracking and an MCP server of Newelle\'s own tools for third parties.',
          'A macOS build exists but is labelled Beta, so Linux is the main target.',
          'PromptQuorum has not tested the app, so speed, answer quality and voice accuracy are unverified.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The README warns that giving Newelle access to your home folder or to the Flatpak host reduces security, and that the maintainers cannot guarantee the privacy of your chat data or the risks of proprietary models.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Newelle is a GPL-3.0 chat assistant for the Linux desktop, distributed as a Flatpak built on the GNOME runtime.**',
          'It is developed in the open at [github.com/qwersyk/Newelle](https://github.com/qwersyk/Newelle) and listed on [Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) as "AI chatbot" under the developer name Qwersyk; the repository was created in June 2023. The latest release, 1.6.1, appeared on 2 November 2026 and the last commit on the master branch was on 6 November 2026, so development is active and no stale-project warning applies. PromptQuorum found no company, address or imprint, so it cannot say which country the project is based in.',
          'According to the README, Newelle combines chat with several AI providers, downloadable local models, voice input and output, a real-time call mode, chat with documents, image generation, web search, a built-in file manager and terminal-command execution, plus an extension system and a mini window opened with a keyboard shortcut. The website adds Whisper dictation, Kokoro speech synthesis and hybrid vector-and-keyword document search; these are maker statements.',
          'PromptQuorum has not run the app and has not checked speed, answer quality, voice accuracy or document-search quality.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**On Linux you install Newelle from Flathub, which the project calls the recommended route; a software centre with Flathub enabled can do it.**',
          'The GitHub releases list no downloadable files, so Flathub is the packaged route. The README also describes a source build with install.sh or GNOME Builder, and development builds from GitHub Actions, for which it warns that translations will not work.',
        ],
        columns: ['Route', 'How to get it'],
        rows: [
          { 'Route': '[Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)', 'How to get it': 'flatpak install flathub io.github.qwersyk.Newelle' },
          { 'Route': '[Website](https://newelle.qsk.me)', 'How to get it': 'Official site: docs, extensions, release notes' },
          { 'Route': '[macOS (beta)](https://newelle.qsk.me/macos)', 'How to get it': 'Newelle.app.zip, labelled Beta' },
          { 'Route': '[Source](https://github.com/qwersyk/Newelle)', 'How to get it': 'sh install.sh (GNOME SDK) or GNOME Builder' },
        ],
        note: 'No privacy-policy page was found on the website or in the repository. On 18 November 2026 PromptQuorum requested [newelle.qsk.me/privacy](https://newelle.qsk.me/privacy), [newelle.qsk.me/privacy-policy](https://newelle.qsk.me/privacy-policy), [newelle.qsk.me/terms](https://newelle.qsk.me/terms), [newelle.qsk.me/about](https://newelle.qsk.me/about), [newelle.qsk.me/imprint](https://newelle.qsk.me/imprint) and [newelle.qsk.me/contact](https://newelle.qsk.me/contact); each returned "404 Not Found". The file list of the [GitHub repository](https://github.com/qwersyk/Newelle) contains no privacy, terms or legal file. PromptQuorum did not run the installer.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**Newelle needs a Linux desktop with Flatpak and Flathub set up; hardware needs depend on whether you use cloud providers or local models.**',
          'The list comes from the README and the Flathub listing. No minimum memory or GPU is published for local models; the 1.6.0 release notes say the model downloader estimates whether a model fits. PromptQuorum did not measure memory use or speed.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'System', 'Stated figure': 'Linux with Flatpak and Flathub' },
          { 'Item': 'Architectures', 'Stated figure': 'x86_64 and aarch64 (Flathub)' },
          { 'Item': 'Runtime', 'Stated figure': 'GNOME Platform 50 (Flathub)' },
          { 'Item': 'Size on Flathub', 'Stated figure': 'About 336 MB download, 935 MB installed' },
          { 'Item': 'Local models', 'Stated figure': 'Llama.cpp or Ollama; no minimum published' },
          { 'Item': 'Build from source', 'Stated figure': 'Latest GNOME SDK, or GNOME Builder' },
        ],
        note: 'The size figures come from the Flathub summary on 18 November 2026 and change with each release. Local models are downloaded on top of that.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Newelle\'s core is a chat assistant with a choice of models; voice, documents, tools and automation sit around it.** All items below are maker claims from the README and release notes.',
        ],
        items: [
          'Models: several AI providers and downloadable local models run with Llama.cpp or Ollama, plus a profile manager that keeps separate settings per profile.',
          'Voice: hands-free chat with many speech-to-text and text-to-speech models, wake-word support and a real-time call mode; the voice pill added in 1.5.2 is still experimental.',
          'Documents and memory: chat with your own documents, website reading with a # prefix, web search and long-term memory across chats, with a new explorable memory in 1.6.0.',
          'Tools: MCP servers added by pasting their JSON, skills from Claude and Codex, extensions, and an MCP server of Newelle\'s own tools for third parties.',
          'Automation: terminal commands suggested by the AI, scheduled tasks, subagent templates and interfaces that let you control Newelle from Telegram or an API.',
          'Images and files: image generation with Stable Diffusion or third-party services, vision input, a built-in file manager and editor, and permissions for which files Newelle may read or edit.',
          'Chat handling: multiple chats, workspaces, folders, branching from any message, editing, drafts, Markdown and LaTeX rendering, and a mini window opened with Ctrl+G.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**Where your prompts go depends on the model you choose: a cloud model sends them to that provider\'s servers, and a local model runs on your own computer.** PromptQuorum did not inspect network traffic, so it cannot confirm that nothing else leaves the machine.',
          'The Flathub listing shows that the packaged build can use the network and runs in a sandbox with display, audio and graphics access, without home-folder or session-bus access. The README says the Flathub version is restricted to its own data folder and describes two ways to widen that: home-folder access and permission to talk to the Flatpak host, so the AI can run commands outside the sandbox.',
          'The README warns that these options reduce security by exposing your data and terminal, and that the maintainers cannot guarantee the privacy of your chat data or prevent risks from proprietary models. It also lists a file-permissions feature that sets which files Newelle may read or edit.',
          'PromptQuorum found no privacy-policy page on the website or in the repository. The manifest in the GitHub repository lists home-folder and Flatpak-host access, while the Flathub metadata shows none; PromptQuorum did not check what each build grants. The code is GPL-3.0 and public, so the data flow can be audited.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Newelle fits Linux desktop users who want one free, open-source assistant for several providers and local models.**',
        ],
        items: [
          'Linux users who want a Flatpak chat app with local models, voice and document chat in one place.',
          'People who want to connect MCP servers, skills or their own extensions to a desktop assistant.',
          'Users who like to choose between cloud providers and local models for each chat or profile.',
          'Readers who prefer a project whose code and licence are public.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Newelle is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: Windows users and anyone who needs a polished Mac or mobile app. The website offers Flathub and a macOS page labelled Beta; PromptQuorum found no Windows or mobile build.',
          'Unverified: speed, memory use, answer quality, voice accuracy, image quality and document-search quality. PromptQuorum has not run the app.',
          'Unverified: which AI providers and local models are supported today. PromptQuorum did not go through the documentation page by page.',
          'Unverified: whether the macOS beta is signed or notarized, and how it differs from the Linux build.',
          'Unverified: what the Flathub build and the repository manifest each grant, and how conversation data is handled when a cloud provider is used.',
          'Unverified: who runs the project, which country it is based in and how many people use it. No company, imprint or privacy policy was found, and PromptQuorum did not look for independent reviews.',
          'Unverified: that features listed on the website, such as Whisper dictation, Kokoro speech and hybrid document search, work as described.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Newelle vs Alternatives',
        itemHeadings: true,
        content: [
          '**Newelle competes with other desktop chat apps for local and cloud models; PromptQuorum has not compared it with them hands-on.** The tools below are in the directory and are described from their own reviews.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'Newelle', 'Noted in sources': 'GPL-3.0; Linux (Flathub); free; voice and MCP' },
          { 'Tool': '[LM Studio](/power-local-llm/lm-studio-review)', 'Noted in sources': 'Proprietary, free; Mac/Windows/Linux; model browser' },
          { 'Tool': '[Jan](/power-local-llm/jan-review)', 'Noted in sources': 'Apache 2.0 (variant); Mac/Windows/Linux; offline chat' },
          { 'Tool': '[GPT4All](/power-local-llm/gpt4all-review)', 'Noted in sources': 'MIT; Mac/Windows/Linux; CPU-friendly local chat' },
          { 'Tool': '[AnythingLLM](/power-local-llm/anythingllm-review)', 'Noted in sources': 'MIT; Mac/Windows/Linux; document chat, vector store' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Does Newelle run on Windows or Mac?',
            a: 'The website menu offers no Windows build. Its macOS page lists Newelle.app.zip, labelled Beta, version 1.3.7 from 21 April 2026, while the Linux version is 1.6.1. PromptQuorum did not test either.',
          },
          {
            q: 'Can Newelle run commands on my computer?',
            a: 'Yes, per the README it can execute commands the AI suggests. The README says the Flathub version is limited to its own data folder unless you grant home-folder or Flatpak-host access, which it says lowers security. The GitHub manifest lists host access while the Flathub metadata does not, and PromptQuorum did not check which applies.',
          },
          {
            q: 'Can I add my own tools or extensions?',
            a: 'Yes, per the maker: extensions add models and features, the documentation describes how to build an extension or a tool, and MCP servers can be added by pasting their JSON.',
          },
          {
            q: 'How do I open the mini window or voice pill?',
            a: 'Press Ctrl+G while Newelle is open, or start it with the --mini option and bind that command to a hotkey. The release notes say newelle --voice shows the experimental voice pill.',
          },
          {
            q: 'How often does Newelle update?',
            a: 'GitHub lists releases 1.4.5 on 19 June, 1.5.0 on 19 August, 1.6.0 on 15 October and 1.6.1 on 2 November 2026. Flathub installs update through the software centre.',
          },
          {
            q: 'Is Newelle free to use?',
            a: 'According to the README and the website, yes: Newelle is open source under GPL-3.0 and free to use. Cloud AI providers that you connect bill separately under their own terms, and local models are downloaded on top of the app. PromptQuorum did not check the pricing of individual providers.',
          },
          {
            q: 'Can Newelle run models locally?',
            a: 'Yes, per the README: it can download local models and run them with Llama.cpp or Ollama. No minimum memory or GPU is published; the 1.6.0 release notes say the model downloader estimates whether a model fits. PromptQuorum did not run a local model through it.',
          },
          {
            q: 'Where do my prompts go?',
            a: 'It depends on the model you choose. A cloud provider receives your prompts on its servers, while a local model runs on your own computer. The README says the maintainers cannot guarantee the privacy of your chat data. PromptQuorum found no privacy-policy page and did not inspect network traffic.',
          },
          {
            q: 'How do I install Newelle?',
            a: 'On Linux, the project names Flathub as the recommended route: flatpak install flathub io.github.qwersyk.Newelle, or a software centre with Flathub enabled. The GitHub releases list no downloadable files. The README also describes a source build with install.sh or GNOME Builder. PromptQuorum did not run the installer.',
          },
          {
            q: 'Does Newelle support voice?',
            a: 'According to the README, yes: hands-free chat with many speech-to-text and text-to-speech models, wake-word support and a real-time call mode. The website names Whisper dictation and Kokoro speech synthesis. The voice pill is still experimental, and PromptQuorum has not checked voice accuracy.',
          },
          {
            q: 'Can I chat with my own documents?',
            a: 'Per the README, yes: Newelle can chat with your own documents, and it can read a website when you use a # prefix. The website adds hybrid vector-and-keyword document search. These are maker statements, and PromptQuorum has not checked search quality.',
          },
          {
            q: 'Does Newelle support MCP?',
            a: 'Yes, per the README: MCP servers are added by pasting their JSON. It also lists skills from Claude and Codex, and the 1.6.0 notes add an MCP server of Newelle\'s own tools for third parties. PromptQuorum did not test any MCP server.',
          },
          {
            q: 'Who develops Newelle, and is it still maintained?',
            a: 'Flathub lists the developer as Qwersyk, and the GitHub repository was created in June 2023. The latest release, 1.6.1, appeared on 2 November 2026 and the last commit on the master branch was on 6 November 2026. PromptQuorum found no company, imprint or privacy policy, so it cannot say which country the project is based in.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Newelle is worth a look if you use Linux and want a free, open-source assistant that works with several providers and local models and adds voice, document chat and tools.**',
          'On paper it covers a lot, and development is active: version 1.6.1 on 2 November 2026 and a commit on 6 November 2026. The Flathub listing shows a sandboxed build without home-folder access, while the GitHub manifest lists host access; PromptQuorum did not check what each build grants.',
          'The trade-offs are real: no privacy policy, company or imprint was found, the macOS build is a beta, and PromptQuorum has not tested anything. Start with a small local model, check in your Flatpak permissions (for example with Flatseal) what your installed build actually grants, and confirm that voice, documents and tools work for your use before relying on them.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Newelle website](https://newelle.qsk.me) — features, install routes and macOS page, checked 18 November 2026.',
          '[Release notes](https://newelle.qsk.me/releases) — notes for versions 1.6.1 and 1.6.0, checked 18 November 2026.',
          '[macOS releases](https://newelle.qsk.me/macos/releases) — the Beta build 1.3.7, checked 18 November 2026.',
          '[Flathub listing](https://flathub.org/apps/io.github.qwersyk.Newelle) — package, licence, versions and sandbox permissions, checked 18 November 2026.',
          '[GitHub repository](https://github.com/qwersyk/Newelle) — licence, creation date and last commit, checked 18 November 2026.',
          '[README](https://github.com/qwersyk/Newelle#readme) — features, install and permission notes, checked 18 November 2026.',
          '[GitHub releases](https://github.com/qwersyk/Newelle/releases) — release dates, checked 18 November 2026.',
          '[Documentation](https://newelle.qsk.me/docs) — extension, tool and MCP guides, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[LM Studio Review](/power-local-llm/lm-studio-review) — a desktop app with a built-in model browser and server mode.',
          '[Jan Review](/power-local-llm/jan-review) — an open-source, offline-first desktop chat app.',
          '[GPT4All Review](/power-local-llm/gpt4all-review) — a beginner-friendly local chat app with strong CPU-only support.',
          '[AnythingLLM Review](/power-local-llm/anythingllm-review) — document chat with a built-in vector store.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/newelle-review-hero-de.webp',
    title: 'Newelle-Rezension: Kostenloser Open-Source-KI-Assistent für Linux mit lokalen Modellen',
    seoTitle: 'Newelle-Rezension: Kostenloser KI-Assistent für Linux',
    intro:
      'Newelle 1.6.1 ist ein kostenloser, GPL-3.0-lizenzierter Chat-Assistent für den Linux-Desktop, der sich mit Cloud-KI-Anbietern (die separat abrechnen) verbindet oder lokale Modelle über Llama.cpp oder Ollama ausführt. Laut README bietet er Spracheingabe und -ausgabe, Chat mit eigenen Dokumenten, MCP-Werkzeuge, Langzeitgedächtnis, Websuche und die Ausführung von Terminalbefehlen und wird über Flathub installiert. Diese Rezension stützt sich auf die offizielle Website, das GitHub-Repository mit Release-Hinweisen und den Flathub-Eintrag, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Newelle: kostenloser GPL-3.0-KI-Assistent für Linux mit lokalen Modellen, Sprache, Dokumenten-Chat und MCP, per Flathub. Was belegt ist, was nicht.',
    twitterDescription:
      'Newelle: kostenloser KI-Assistent für Linux mit lokalen Modellen, Sprache, Dokumenten-Chat und MCP-Werkzeugen. GPL-3.0, Flathub-Installation. Was belegt ist.',
    audience:
      'Linux-Desktop-Nutzer, die einen kostenlosen Open-Source-KI-Assistenten mit lokalen Modellen und Sprachfunktionen wollen, Personen, die mit eigenen Dokumenten chatten möchten, und alle, die ein von einer Community entwickeltes Projekt einschätzen wollen',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Newelle Rezension',
    targetKeywords: [
      'Newelle Rezension',
      'KI-Assistent Linux',
      'Newelle Flatpak',
      'Open-Source-KI-Assistent Linux',
      'Newelle Ollama',
      'lokale LLM-App Linux Desktop',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Newelle ist ein kostenloser, quelloffener (GPL-3.0) KI-Assistent für den Linux-Desktop, der mit Cloud-Anbietern (separat abgerechnet) oder mit lokalen Modellen über Llama.cpp oder Ollama arbeitet.** Er wird über Flathub installiert und ergänzt Sprache, Dokumenten-Chat, MCP-Werkzeuge und Gedächtnis. PromptQuorum hat ihn nicht getestet; eine Datenschutzerklärung, ein Unternehmen oder ein Impressum wurden nicht gefunden.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Newelle, und für wen ist es gedacht?',
        answer:
          'Newelle ist ein offen auf GitHub entwickelter Chat-Assistent, der als Flatpak verpackt ist. Er eignet sich für Linux-Desktop-Nutzer, die eine App für mehrere KI-Anbieter und lokale Modelle wollen, dazu Sprache, Dokumenten-Chat und Werkzeuge unter eigener Kontrolle.',
        bullets: [
          'Kostenlos und GPL-3.0-lizenziert; Linux zuerst, dazu ein macOS-Build, den die Website als Beta kennzeichnet.',
          'Chat mit mehreren Anbietern oder mit heruntergeladenen lokalen Modellen, die über Llama.cpp oder Ollama laufen.',
          'Spracheingabe und -ausgabe, ein Echtzeit-Anrufmodus und Chat mit eigenen Dokumenten.',
          'Erweiterungen, Skills im Stil von Claude und Codex, MCP-Server und geplante Aufgaben.',
          'Repository im Juni 2023 angelegt; Version 1.6.1 erschien am 2. November 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie die App', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Alternativen', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Newelle ist ein kostenloser, quelloffener KI-Assistent für den Linux-Desktop, der mit Cloud-Anbietern (separat abgerechnet) oder lokalen Modellen arbeitet und Sprache, Dokumenten-Chat und Werkzeuge ergänzt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich ein Chatfenster auf Ihrem Linux-Desktop vor, in dem Sie wählen, welche KI antwortet: ein Online-Anbieter oder ein Modell, das auf Ihren eigenen Rechner geladen wurde. Es kann außerdem zuhören, sprechen, Ihre Dokumente lesen und Werkzeuge ausführen, die Sie erlauben.',
          },
        ],
        items: [
          'Die Installation erfolgt über Flathub mit einem Befehl oder über ein Software-Center; der Flathub-Eintrag zeigt Netzwerkzugriff, aber keinen Zugriff auf den Home-Ordner.',
          'Lokale Modelle laufen über Llama.cpp oder Ollama; ein Mindestspeicher wird nicht veröffentlicht, aber der Modell-Downloader schätzt laut den Hinweisen zu 1.6.0, ob ein Modell passt.',
          'Version 1.6.0 brachte Workspaces, Subagenten, ein neues Langzeitgedächtnis, Nutzungsstatistiken und einen MCP-Server mit Newelles eigenen Werkzeugen für Drittanwendungen.',
          'Ein macOS-Build existiert, ist aber als Beta gekennzeichnet; Linux ist also das Hauptziel.',
          'PromptQuorum hat die App nicht getestet; Geschwindigkeit, Antwortqualität und Spracherkennung sind daher nicht überprüft.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das README warnt, dass der Zugriff von Newelle auf den Home-Ordner oder den Flatpak-Host die Sicherheit verringert und dass die Entwickler weder die Vertraulichkeit Ihrer Chatdaten noch die Risiken proprietärer Modelle garantieren können.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Newelle ist ein GPL-3.0-lizenzierter Chat-Assistent für den Linux-Desktop, verteilt als Flatpak auf Basis der GNOME-Laufzeitumgebung.**',
          'Er wird offen unter [github.com/qwersyk/Newelle](https://github.com/qwersyk/Newelle) entwickelt und bei [Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) als „AI chatbot“ unter dem Entwicklernamen Qwersyk geführt; das Repository wurde im Juni 2023 angelegt. Die neueste Version 1.6.1 erschien am 2. November 2026, der letzte Commit auf dem Master-Branch stammt vom 6. November 2026; die Entwicklung ist also aktiv, und es gilt keine Warnung vor einem verwaisten Projekt. PromptQuorum fand kein Unternehmen, keine Adresse und kein Impressum und kann daher nicht sagen, in welchem Land das Projekt ansässig ist.',
          'Laut README verbindet Newelle Chat mit mehreren KI-Anbietern, herunterladbare lokale Modelle, Spracheingabe und -ausgabe, einen Echtzeit-Anrufmodus, Chat mit Dokumenten, Bilderzeugung, Websuche, einen eingebauten Dateimanager und die Ausführung von Terminalbefehlen, dazu ein Erweiterungssystem und ein Mini-Fenster per Tastenkürzel. Die Website nennt zusätzlich Whisper-Diktat, Kokoro-Sprachsynthese und hybride Dokumentensuche aus Vektor- und Stichwortsuche; das sind Angaben des Entwicklers.',
          'PromptQuorum hat die App nicht ausgeführt und weder Geschwindigkeit noch Antwortqualität, Spracherkennung oder Qualität der Dokumentensuche geprüft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Unter Linux installieren Sie Newelle über Flathub, was das Projekt als empfohlenen Weg bezeichnet; ein Software-Center mit aktiviertem Flathub kann das übernehmen.**',
          'Die GitHub-Releases enthalten keine herunterladbaren Dateien, Flathub ist also der paketierte Weg. Das README beschreibt außerdem einen Quellcode-Build mit install.sh oder GNOME Builder sowie Entwicklungs-Builds aus GitHub Actions, bei denen laut README Übersetzungen nicht funktionieren.',
        ],
        columns: ['Weg', 'So bekommen Sie sie'],
        rows: [
          { 'Weg': '[Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)', 'So bekommen Sie sie': 'flatpak install flathub io.github.qwersyk.Newelle' },
          { 'Weg': '[Website](https://newelle.qsk.me)', 'So bekommen Sie sie': 'Offizielle Seite: Doku, Erweiterungen, Release-Hinweise' },
          { 'Weg': '[macOS (Beta)](https://newelle.qsk.me/macos)', 'So bekommen Sie sie': 'Newelle.app.zip, als Beta gekennzeichnet' },
          { 'Weg': '[Quellcode](https://github.com/qwersyk/Newelle)', 'So bekommen Sie sie': 'sh install.sh (GNOME SDK) oder GNOME Builder' },
        ],
        note: 'Auf der Website und im Repository wurde keine Seite mit einer Datenschutzerklärung gefunden. Am 18. November 2026 hat PromptQuorum [newelle.qsk.me/privacy](https://newelle.qsk.me/privacy), [newelle.qsk.me/privacy-policy](https://newelle.qsk.me/privacy-policy), [newelle.qsk.me/terms](https://newelle.qsk.me/terms), [newelle.qsk.me/about](https://newelle.qsk.me/about), [newelle.qsk.me/imprint](https://newelle.qsk.me/imprint) und [newelle.qsk.me/contact](https://newelle.qsk.me/contact) abgerufen; alle lieferten „404 Not Found“. Die Dateiliste des [GitHub-Repositorys](https://github.com/qwersyk/Newelle) enthält keine Datei zu Datenschutz, Nutzungsbedingungen oder rechtlichen Hinweisen. PromptQuorum hat den Installer nicht ausgeführt.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Newelle benötigt einen Linux-Desktop mit eingerichtetem Flatpak und Flathub; die Hardwareanforderungen hängen davon ab, ob Sie Cloud-Anbieter oder lokale Modelle nutzen.**',
          'Die Liste stammt aus dem README und dem Flathub-Eintrag. Für lokale Modelle werden weder Mindestspeicher noch GPU veröffentlicht; laut den Hinweisen zu 1.6.0 schätzt der Modell-Downloader, ob ein Modell passt. PromptQuorum hat weder Speicherverbrauch noch Geschwindigkeit gemessen.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'System', 'Angegebener Wert': 'Linux mit Flatpak und Flathub' },
          { 'Punkt': 'Architekturen', 'Angegebener Wert': 'x86_64 und aarch64 (Flathub)' },
          { 'Punkt': 'Laufzeit', 'Angegebener Wert': 'GNOME Platform 50 (Flathub)' },
          { 'Punkt': 'Größe auf Flathub', 'Angegebener Wert': 'Etwa 336 MB Download, 935 MB installiert' },
          { 'Punkt': 'Lokale Modelle', 'Angegebener Wert': 'Llama.cpp oder Ollama; kein Minimum angegeben' },
          { 'Punkt': 'Selbst bauen', 'Angegebener Wert': 'Aktuelles GNOME SDK oder GNOME Builder' },
        ],
        note: 'Die Größenangaben stammen aus der Flathub-Übersicht vom 18. November 2026 und ändern sich mit jeder Version. Lokale Modelle kommen als Download hinzu.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Newelles Kern ist ein Chat-Assistent mit Modellauswahl; Sprache, Dokumente, Werkzeuge und Automatisierung kommen hinzu.** Alle folgenden Punkte sind Angaben des Entwicklers aus dem README und den Release-Hinweisen.',
        ],
        items: [
          'Modelle: mehrere KI-Anbieter und herunterladbare lokale Modelle, die mit Llama.cpp oder Ollama laufen, dazu ein Profilmanager mit getrennten Einstellungen je Profil.',
          'Sprache: freihändiger Chat mit vielen Spracherkennungs- und Sprachsynthese-Modellen, Weckwort-Unterstützung und ein Echtzeit-Anrufmodus; die in 1.5.2 hinzugefügte Sprach-Pille ist weiterhin experimentell.',
          'Dokumente und Gedächtnis: Chat mit eigenen Dokumenten, Lesen von Websites über ein #-Präfix, Websuche und Langzeitgedächtnis über Chats hinweg, in 1.6.0 mit einem neuen, durchsuchbaren Gedächtnis.',
          'Werkzeuge: MCP-Server, die sich per eingefügtem JSON hinzufügen lassen, Skills von Claude und Codex, Erweiterungen und ein MCP-Server mit Newelles eigenen Werkzeugen für Drittanwendungen.',
          'Automatisierung: von der KI vorgeschlagene Terminalbefehle, geplante Aufgaben, Subagenten-Vorlagen und Schnittstellen, mit denen sich Newelle über Telegram oder eine API steuern lässt.',
          'Bilder und Dateien: Bilderzeugung mit Stable Diffusion oder Drittanbietern, Bildeingabe, ein eingebauter Dateimanager mit Editor und Berechtigungen dafür, welche Dateien Newelle lesen oder bearbeiten darf.',
          'Chat-Verwaltung: mehrere Chats, Workspaces, Ordner, Verzweigung ab jeder Nachricht, Bearbeiten, Entwürfe, Markdown- und LaTeX-Darstellung und ein Mini-Fenster per Strg+G.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Wohin Ihre Eingaben gehen, hängt vom gewählten Modell ab: Ein Cloud-Modell sendet sie an die Server des Anbieters, ein lokales Modell läuft auf Ihrem eigenen Rechner.** PromptQuorum hat den Netzwerkverkehr nicht untersucht und kann daher nicht bestätigen, dass sonst nichts den Rechner verlässt.',
          'Der Flathub-Eintrag zeigt, dass das paketierte Build das Netzwerk nutzen kann und in einer Sandbox mit Zugriff auf Anzeige, Audio und Grafik läuft, ohne Zugriff auf den Home-Ordner oder den Session-Bus. Laut README ist die Flathub-Version auf ihren eigenen Datenordner beschränkt; es beschreibt zwei Wege, das zu erweitern: Zugriff auf den Home-Ordner und die Erlaubnis, mit dem Flatpak-Host zu sprechen, damit die KI Befehle außerhalb der Sandbox ausführen kann.',
          'Das README warnt, dass diese Optionen die Sicherheit verringern, weil sie Ihre Daten und Ihr Terminal freigeben, und dass die Entwickler weder die Vertraulichkeit Ihrer Chatdaten noch die Risiken proprietärer Modelle garantieren können. Es nennt außerdem eine Dateiberechtigungs-Funktion, die festlegt, welche Dateien Newelle lesen oder bearbeiten darf.',
          'PromptQuorum fand weder auf der Website noch im Repository eine Seite mit einer Datenschutzerklärung. Das Manifest im GitHub-Repository nennt Zugriff auf den Home-Ordner und den Flatpak-Host, die Flathub-Metadaten zeigen keinen; PromptQuorum hat nicht geprüft, was jedes Build tatsächlich erhält. Der Code ist GPL-3.0-lizenziert und öffentlich, der Datenfluss lässt sich also prüfen.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Newelle passt zu Linux-Desktop-Nutzern, die einen kostenlosen, quelloffenen Assistenten für mehrere Anbieter und lokale Modelle wollen.**',
        ],
        items: [
          'Linux-Nutzer, die eine Flatpak-Chat-App mit lokalen Modellen, Sprache und Dokumenten-Chat an einem Ort wollen.',
          'Personen, die MCP-Server, Skills oder eigene Erweiterungen an einen Desktop-Assistenten anbinden möchten.',
          'Nutzer, die für jeden Chat oder jedes Profil zwischen Cloud-Anbietern und lokalen Modellen wählen wollen.',
          'Leser, die ein Projekt mit öffentlichem Code und öffentlicher Lizenz bevorzugen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**Newelle passt in manchen Situationen schlecht, und mehrere Details sind nicht überprüft.**',
        ],
        items: [
          'Nicht geeignet: Windows-Nutzer und alle, die eine ausgereifte Mac- oder Mobil-App brauchen. Die Website bietet Flathub und eine macOS-Seite mit Beta-Kennzeichnung; PromptQuorum fand kein Windows- und kein Mobil-Build.',
          'Nicht überprüft: Geschwindigkeit, Speicherverbrauch, Antwortqualität, Spracherkennung, Bildqualität und Qualität der Dokumentensuche. PromptQuorum hat die App nicht ausgeführt.',
          'Nicht überprüft: welche KI-Anbieter und lokalen Modelle heute unterstützt werden. PromptQuorum hat die Dokumentation nicht Seite für Seite durchgesehen.',
          'Nicht überprüft: ob das macOS-Beta signiert oder notarisiert ist und wie es sich vom Linux-Build unterscheidet.',
          'Nicht überprüft: was das Flathub-Build und das Manifest im Repository jeweils gewähren und wie Gesprächsdaten bei einem Cloud-Anbieter behandelt werden.',
          'Nicht überprüft: wer das Projekt betreibt, in welchem Land es ansässig ist und wie viele Menschen es nutzen. Es wurden kein Unternehmen, kein Impressum und keine Datenschutzerklärung gefunden, und PromptQuorum hat nicht nach unabhängigen Tests gesucht.',
          'Nicht überprüft: dass die auf der Website genannten Funktionen wie Whisper-Diktat, Kokoro-Sprache und hybride Dokumentensuche wie beschrieben funktionieren.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Newelle im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**Newelle konkurriert mit anderen Desktop-Chat-Apps für lokale und Cloud-Modelle; PromptQuorum hat es nicht praktisch mit ihnen verglichen.** Die folgenden Werkzeuge stehen im Verzeichnis und werden anhand ihrer eigenen Rezensionen beschrieben.',
        ],
        columns: ['Werkzeug', 'In Quellen genannt'],
        rows: [
          { 'Werkzeug': 'Newelle', 'In Quellen genannt': 'GPL-3.0; Linux (Flathub); kostenlos; Sprache und MCP' },
          { 'Werkzeug': '[LM Studio](/de/power-local-llm/lm-studio-review)', 'In Quellen genannt': 'Proprietär, kostenlos; Mac/Windows/Linux; Modellbrowser' },
          { 'Werkzeug': '[Jan](/de/power-local-llm/jan-review)', 'In Quellen genannt': 'Apache 2.0 (Variante); Mac/Windows/Linux; Offline-Chat' },
          { 'Werkzeug': '[GPT4All](/de/power-local-llm/gpt4all-review)', 'In Quellen genannt': 'MIT; Mac/Windows/Linux; Chat, auch auf CPU' },
          { 'Werkzeug': '[AnythingLLM](/de/power-local-llm/anythingllm-review)', 'In Quellen genannt': 'MIT; Mac/Windows/Linux; Dokumenten-Chat, Vektorspeicher' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Läuft Newelle unter Windows oder auf dem Mac?',
            a: 'Das Website-Menü bietet kein Windows-Build. Die macOS-Seite führt Newelle.app.zip auf, als Beta gekennzeichnet, Version 1.3.7 vom 21. April 2026, während die Linux-Version 1.6.1 ist. PromptQuorum hat keines von beiden getestet.',
          },
          {
            q: 'Kann Newelle Befehle auf meinem Rechner ausführen?',
            a: 'Ja, laut README kann es Befehle ausführen, die die KI vorschlägt. Laut README ist die Flathub-Version auf ihren eigenen Datenordner beschränkt, solange Sie keinen Zugriff auf Home-Ordner oder Flatpak-Host erlauben; das senke die Sicherheit. Das Manifest im GitHub-Repository nennt Host-Zugriff, die Flathub-Metadaten nicht; PromptQuorum hat nicht geprüft, was gilt.',
          },
          {
            q: 'Kann ich eigene Werkzeuge oder Erweiterungen hinzufügen?',
            a: 'Ja, laut Entwickler: Erweiterungen ergänzen Modelle und Funktionen, die Dokumentation beschreibt, wie man eine Erweiterung oder ein Werkzeug baut, und MCP-Server lassen sich per eingefügtem JSON hinzufügen.',
          },
          {
            q: 'Wie öffne ich das Mini-Fenster oder die Sprach-Pille?',
            a: 'Drücken Sie Strg+G, während Newelle geöffnet ist, oder starten Sie es mit der Option --mini und legen Sie diesen Befehl auf ein Tastenkürzel. Laut Release-Hinweisen zeigt newelle --voice die experimentelle Sprach-Pille.',
          },
          {
            q: 'Wie oft wird Newelle aktualisiert?',
            a: 'GitHub listet die Releases 1.4.5 am 19. Juni, 1.5.0 am 19. August, 1.6.0 am 15. Oktober und 1.6.1 am 2. November 2026. Flathub-Installationen werden über das Software-Center aktualisiert.',
          },
          {
            q: 'Ist Newelle kostenlos nutzbar?',
            a: 'Laut README und Website ja: Newelle ist quelloffen unter GPL-3.0 und kostenlos nutzbar. Cloud-KI-Anbieter, die Sie anbinden, rechnen separat nach ihren eigenen Bedingungen ab, und lokale Modelle werden zusätzlich zur App heruntergeladen. PromptQuorum hat die Preise einzelner Anbieter nicht geprüft.',
          },
          {
            q: 'Kann Newelle Modelle lokal ausführen?',
            a: 'Ja, laut README: Es kann lokale Modelle herunterladen und mit Llama.cpp oder Ollama ausführen. Ein Mindestbedarf an Arbeitsspeicher oder GPU ist nicht angegeben; laut den Release-Hinweisen zu 1.6.0 schätzt der Modell-Downloader, ob ein Modell passt. PromptQuorum hat kein lokales Modell damit betrieben.',
          },
          {
            q: 'Wohin gehen meine Prompts?',
            a: 'Das hängt vom gewählten Modell ab. Ein Cloud-Anbieter erhält Ihre Prompts auf seinen Servern, ein lokales Modell läuft auf Ihrem eigenen Rechner. Laut README können die Maintainer die Vertraulichkeit Ihrer Chatdaten nicht garantieren. PromptQuorum fand keine Datenschutzerklärung und hat den Netzwerkverkehr nicht untersucht.',
          },
          {
            q: 'Wie installiere ich Newelle?',
            a: 'Unter Linux nennt das Projekt Flathub als empfohlenen Weg: flatpak install flathub io.github.qwersyk.Newelle oder ein Software-Center mit aktiviertem Flathub. Die GitHub-Releases enthalten keine herunterladbaren Dateien. Laut README ist auch ein Build aus dem Quellcode mit install.sh oder GNOME Builder möglich. PromptQuorum hat den Installer nicht ausgeführt.',
          },
          {
            q: 'Unterstützt Newelle Spracheingabe und -ausgabe?',
            a: 'Laut README ja: freihändiger Chat mit vielen Speech-to-Text- und Text-to-Speech-Modellen, Wake-Word-Unterstützung und ein Echtzeit-Anrufmodus. Die Website nennt Whisper-Diktat und Kokoro-Sprachsynthese. Die Sprach-Pille ist noch experimentell, und PromptQuorum hat die Genauigkeit der Spracherkennung nicht geprüft.',
          },
          {
            q: 'Kann ich mit meinen eigenen Dokumenten chatten?',
            a: 'Laut README ja: Newelle kann mit Ihren eigenen Dokumenten chatten und mit dem Präfix # eine Website lesen. Die Website nennt zusätzlich eine hybride Dokumentensuche aus Vektor- und Stichwortsuche. Das sind Angaben des Entwicklers; PromptQuorum hat die Suchqualität nicht geprüft.',
          },
          {
            q: 'Unterstützt Newelle MCP?',
            a: 'Ja, laut README: MCP-Server werden durch Einfügen ihres JSON hinzugefügt. Außerdem nennt es Skills von Claude und Codex, und die Hinweise zu 1.6.0 ergänzen einen MCP-Server mit Newelles eigenen Werkzeugen für Dritte. PromptQuorum hat keinen MCP-Server getestet.',
          },
          {
            q: 'Wer entwickelt Newelle, und wird es noch gepflegt?',
            a: 'Flathub nennt als Entwickler Qwersyk, das GitHub-Repository entstand im Juni 2023. Das neueste Release 1.6.1 erschien am 2. November 2026, der letzte Commit im Master-Branch stammt vom 6. November 2026. PromptQuorum fand weder Firma noch Impressum noch Datenschutzerklärung und kann daher nicht sagen, in welchem Land das Projekt angesiedelt ist.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Newelle lohnt einen Blick, wenn Sie Linux nutzen und einen kostenlosen, quelloffenen Assistenten wollen, der mit mehreren Anbietern und lokalen Modellen arbeitet und Sprache, Dokumenten-Chat und Werkzeuge ergänzt.**',
          'Auf dem Papier deckt es viel ab, und die Entwicklung ist aktiv: Version 1.6.1 am 2. November 2026 und ein Commit am 6. November 2026. Der Flathub-Eintrag zeigt ein Build in der Sandbox ohne Zugriff auf den Home-Ordner, während das GitHub-Manifest Host-Zugriff nennt; PromptQuorum hat nicht geprüft, welche Rechte jedes Build tatsächlich erhält.',
          'Die Nachteile sind real: Es wurden keine Datenschutzerklärung, kein Unternehmen und kein Impressum gefunden, das macOS-Build ist eine Beta, und PromptQuorum hat nichts getestet. Beginnen Sie mit einem kleinen lokalen Modell, prüfen Sie in den Flatpak-Berechtigungen, etwa mit Flatseal, was Ihr installiertes Build tatsächlich erhält, und stellen Sie sicher, dass Sprache, Dokumente und Werkzeuge für Ihren Einsatz funktionieren, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Newelle-Website](https://newelle.qsk.me) — Funktionen, Installationswege und macOS-Seite, geprüft am 18. November 2026.',
          '[Release-Hinweise](https://newelle.qsk.me/releases) — Hinweise zu den Versionen 1.6.1 und 1.6.0, geprüft am 18. November 2026.',
          '[macOS-Releases](https://newelle.qsk.me/macos/releases) — das Beta-Build 1.3.7, geprüft am 18. November 2026.',
          '[Flathub-Eintrag](https://flathub.org/apps/io.github.qwersyk.Newelle) — Paket, Lizenz, Versionen und Sandbox-Berechtigungen, geprüft am 18. November 2026.',
          '[GitHub-Repository](https://github.com/qwersyk/Newelle) — Lizenz, Erstellungsdatum und letzter Commit, geprüft am 18. November 2026.',
          '[README](https://github.com/qwersyk/Newelle#readme) — Funktionen, Installation und Hinweise zu Berechtigungen, geprüft am 18. November 2026.',
          '[GitHub-Releases](https://github.com/qwersyk/Newelle/releases) — Release-Daten, geprüft am 18. November 2026.',
          '[Dokumentation](https://newelle.qsk.me/docs) — Anleitungen zu Erweiterungen, Werkzeugen und MCP, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[LM-Studio-Rezension](/de/power-local-llm/lm-studio-review) — eine Desktop-App mit eingebautem Modellbrowser und Servermodus.',
          '[Jan-Rezension](/de/power-local-llm/jan-review) — eine quelloffene Desktop-Chat-App mit Offline-Fokus.',
          '[GPT4All-Rezension](/de/power-local-llm/gpt4all-review) — eine einsteigerfreundliche lokale Chat-App mit starker reiner CPU-Unterstützung.',
          '[AnythingLLM-Rezension](/de/power-local-llm/anythingllm-review) — Dokumenten-Chat mit eingebautem Vektorspeicher.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/newelle-review-hero-fr.webp',
    title: 'Avis sur Newelle : assistant IA open source gratuit pour Linux avec modèles locaux',
    seoTitle: 'Avis sur Newelle : assistant IA gratuit pour Linux',
    intro:
      'Newelle 1.6.1 est un assistant de discussion gratuit, sous licence GPL-3.0, pour le bureau Linux ; il se connecte à des fournisseurs d\'IA dans le cloud (facturés séparément) ou exécute des modèles locaux via Llama.cpp ou Ollama. Selon son README, il ajoute la saisie et la sortie vocales, la discussion avec vos propres documents, des outils MCP, une mémoire à long terme, la recherche web et l\'exécution de commandes de terminal, et il s\'installe depuis Flathub. Cet avis s\'appuie sur le site officiel, le dépôt GitHub avec ses notes de version et la fiche Flathub, consultés le 18 novembre 2026. PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'Newelle : assistant IA gratuit sous GPL-3.0 pour Linux, modèles locaux, voix, documents et MCP, via Flathub. Ce qui est confirmé et ce qui ne l\'est pas.',
    twitterDescription:
      'Newelle : assistant IA gratuit pour Linux avec modèles locaux, voix, discussion avec documents et outils MCP. GPL-3.0, via Flathub. Ce qui est confirmé.',
    audience:
      'Utilisateurs du bureau Linux qui veulent un assistant IA gratuit et open source avec modèles locaux et fonctions vocales, personnes qui souhaitent discuter avec leurs propres documents, et toute personne qui évalue un projet développé par une communauté',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis Newelle',
    targetKeywords: [
      'avis Newelle',
      'assistant IA Linux',
      'Newelle Flatpak',
      'assistant IA open source Linux',
      'Newelle Ollama',
      'application LLM locale bureau Linux',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Newelle est un assistant IA gratuit et open source (GPL-3.0) pour le bureau Linux, qui fonctionne avec des fournisseurs cloud (facturés séparément) ou avec des modèles locaux exécutés via Llama.cpp ou Ollama.** Il s\'installe depuis Flathub et ajoute la voix, la discussion avec documents, des outils MCP et une mémoire. PromptQuorum ne l\'a pas testé, et aucune politique de confidentialité, entreprise ou mention légale n\'a été trouvée.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que Newelle et à qui s\'adresse-t-il ?',
        answer:
          'Newelle est un assistant de discussion développé ouvertement sur GitHub et empaqueté en Flatpak. Il convient aux utilisateurs du bureau Linux qui veulent une seule application pour plusieurs fournisseurs d\'IA et des modèles locaux, avec voix, discussion avec documents et outils sous leur contrôle.',
        bullets: [
          'Gratuit et sous licence GPL-3.0 ; Linux d\'abord, avec une version macOS que le site qualifie de bêta.',
          'Discussion avec plusieurs fournisseurs, ou avec des modèles locaux téléchargés et exécutés via Llama.cpp ou Ollama.',
          'Saisie et sortie vocales, un mode appel en temps réel et la discussion avec vos propres documents.',
          'Extensions, compétences dans le style de Claude et Codex, serveurs MCP et tâches planifiées.',
          'Dépôt créé en juin 2023 ; la version 1.6.1 est sortie le 2 novembre 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l\'obtenir', anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Newelle est un assistant IA gratuit et open source pour le bureau Linux, qui dialogue avec des fournisseurs cloud (facturés séparément) ou des modèles locaux et ajoute voix, discussion avec documents et outils.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez une fenêtre de discussion sur votre bureau Linux où vous choisissez quelle IA répond : un fournisseur en ligne ou un modèle téléchargé sur votre propre ordinateur. Elle peut aussi écouter, parler, lire vos documents et lancer les outils que vous autorisez.',
          },
        ],
        items: [
          'Installation depuis Flathub avec une commande ou via une logithèque ; la fiche Flathub indique un accès au réseau, mais aucun accès au dossier personnel.',
          'Les modèles locaux s\'exécutent via Llama.cpp ou Ollama ; aucune mémoire minimale n\'est publiée, mais le téléchargeur de modèles estime si un modèle convient, selon les notes de la version 1.6.0.',
          'La version 1.6.0 a ajouté des espaces de travail, des sous-agents, une nouvelle mémoire à long terme, un suivi d\'utilisation et un serveur MCP regroupant les outils de Newelle pour des tiers.',
          'Une version macOS existe mais est qualifiée de bêta : Linux reste donc la cible principale.',
          'PromptQuorum n\'a pas testé l\'application ; la vitesse, la qualité des réponses et la précision vocale ne sont donc pas vérifiées.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le README avertit que donner à Newelle l\'accès à votre dossier personnel ou à l\'hôte Flatpak réduit la sécurité, et que les mainteneurs ne peuvent garantir ni la confidentialité de vos discussions ni les risques des modèles propriétaires.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Newelle est un assistant de discussion sous licence GPL-3.0 pour le bureau Linux, distribué en Flatpak sur l\'environnement d\'exécution GNOME.**',
          'Il est développé ouvertement sur [github.com/qwersyk/Newelle](https://github.com/qwersyk/Newelle) et référencé sur [Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) comme « AI chatbot » sous le nom de développeur Qwersyk ; le dépôt a été créé en juin 2023. La dernière version, 1.6.1, est sortie le 2 novembre 2026 et le dernier commit de la branche master date du 6 novembre 2026 : le développement est donc actif et aucun avertissement de projet abandonné ne s\'applique. PromptQuorum n\'a trouvé ni entreprise, ni adresse, ni mentions légales et ne peut donc pas dire dans quel pays le projet est basé.',
          'Selon le README, Newelle combine la discussion avec plusieurs fournisseurs d\'IA, des modèles locaux téléchargeables, la saisie et la sortie vocales, un mode appel en temps réel, la discussion avec des documents, la génération d\'images, la recherche web, un gestionnaire de fichiers intégré et l\'exécution de commandes de terminal, avec un système d\'extensions et une mini-fenêtre ouverte par un raccourci clavier. Le site ajoute la dictée Whisper, la synthèse vocale Kokoro et une recherche hybride dans les documents (vectorielle et par mots-clés) ; ce sont des déclarations du développeur.',
          'PromptQuorum n\'a pas exécuté l\'application et n\'a vérifié ni la vitesse, ni la qualité des réponses, ni la précision vocale, ni la qualité de la recherche dans les documents.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Sous Linux, vous installez Newelle depuis Flathub, que le projet présente comme la voie recommandée ; une logithèque avec Flathub activé peut s\'en charger.**',
          'Les versions GitHub ne proposent aucun fichier à télécharger : Flathub est donc la voie empaquetée. Le README décrit aussi une compilation depuis les sources avec install.sh ou GNOME Builder, et des versions de développement issues de GitHub Actions, pour lesquelles il avertit que les traductions ne fonctionnent pas.',
        ],
        columns: ['Voie', 'Comment l\'obtenir'],
        rows: [
          { 'Voie': '[Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)', 'Comment l\'obtenir': 'flatpak install flathub io.github.qwersyk.Newelle' },
          { 'Voie': '[Site web](https://newelle.qsk.me)', 'Comment l\'obtenir': 'Site officiel : docs, extensions, notes de version' },
          { 'Voie': '[macOS (bêta)](https://newelle.qsk.me/macos)', 'Comment l\'obtenir': 'Newelle.app.zip, qualifié de bêta' },
          { 'Voie': '[Sources](https://github.com/qwersyk/Newelle)', 'Comment l\'obtenir': 'sh install.sh (GNOME SDK) ou GNOME Builder' },
        ],
        note: 'Aucune page de politique de confidentialité n\'a été trouvée sur le site ni dans le dépôt. Le 18 novembre 2026, PromptQuorum a appelé [newelle.qsk.me/privacy](https://newelle.qsk.me/privacy), [newelle.qsk.me/privacy-policy](https://newelle.qsk.me/privacy-policy), [newelle.qsk.me/terms](https://newelle.qsk.me/terms), [newelle.qsk.me/about](https://newelle.qsk.me/about), [newelle.qsk.me/imprint](https://newelle.qsk.me/imprint) et [newelle.qsk.me/contact](https://newelle.qsk.me/contact) ; chacune a renvoyé « 404 Not Found ». La liste des fichiers du [dépôt GitHub](https://github.com/qwersyk/Newelle) ne contient aucun fichier de confidentialité, de conditions d\'utilisation ou de mentions légales. PromptQuorum n\'a pas exécuté l\'installation.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**Newelle exige un bureau Linux avec Flatpak et Flathub configurés ; les besoins matériels dépendent de l\'usage de fournisseurs cloud ou de modèles locaux.**',
          'La liste provient du README et de la fiche Flathub. Aucune mémoire ni GPU minimal n\'est publié pour les modèles locaux ; selon les notes de la version 1.6.0, le téléchargeur de modèles estime si un modèle convient. PromptQuorum n\'a mesuré ni l\'utilisation de la mémoire ni la vitesse.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'Système', 'Valeur indiquée': 'Linux avec Flatpak et Flathub' },
          { 'Élément': 'Architectures', 'Valeur indiquée': 'x86_64 et aarch64 (Flathub)' },
          { 'Élément': 'Environnement', 'Valeur indiquée': 'GNOME Platform 50 (Flathub)' },
          { 'Élément': 'Taille sur Flathub', 'Valeur indiquée': 'Env. 336 Mo à télécharger, 935 Mo installés' },
          { 'Élément': 'Modèles locaux', 'Valeur indiquée': 'Llama.cpp ou Ollama ; aucun minimum publié' },
          { 'Élément': 'Compiler soi-même', 'Valeur indiquée': 'Dernier GNOME SDK ou GNOME Builder' },
        ],
        note: 'Les tailles proviennent du résumé Flathub du 18 novembre 2026 et changent à chaque version. Les modèles locaux se téléchargent en plus.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Le cœur de Newelle est un assistant de discussion avec choix du modèle ; voix, documents, outils et automatisation s\'y ajoutent.** Tous les points ci-dessous sont des déclarations du développeur tirées du README et des notes de version.',
        ],
        items: [
          'Modèles : plusieurs fournisseurs d\'IA et des modèles locaux téléchargeables exécutés avec Llama.cpp ou Ollama, plus un gestionnaire de profils qui conserve des réglages distincts par profil.',
          'Voix : discussion mains libres avec de nombreux modèles de reconnaissance et de synthèse vocales, mot d\'activation et mode appel en temps réel ; la pastille vocale ajoutée en 1.5.2 reste expérimentale.',
          'Documents et mémoire : discussion avec vos propres documents, lecture de sites web via un préfixe #, recherche web et mémoire à long terme entre les discussions, avec une nouvelle mémoire explorable en 1.6.0.',
          'Outils : serveurs MCP ajoutés en collant leur JSON, compétences de Claude et Codex, extensions et un serveur MCP regroupant les outils de Newelle pour des tiers.',
          'Automatisation : commandes de terminal proposées par l\'IA, tâches planifiées, modèles de sous-agents et interfaces permettant de piloter Newelle depuis Telegram ou une API.',
          'Images et fichiers : génération d\'images avec Stable Diffusion ou des services tiers, entrée d\'images, gestionnaire de fichiers et éditeur intégrés, et permissions précisant quels fichiers Newelle peut lire ou modifier.',
          'Gestion des discussions : plusieurs discussions, espaces de travail, dossiers, embranchement à partir de n\'importe quel message, modification, brouillons, rendu Markdown et LaTeX et mini-fenêtre ouverte avec Ctrl+G.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**La destination de vos requêtes dépend du modèle choisi : un modèle cloud les envoie aux serveurs du fournisseur, un modèle local s\'exécute sur votre propre ordinateur.** PromptQuorum n\'a pas inspecté le trafic réseau et ne peut donc pas confirmer que rien d\'autre ne quitte la machine.',
          'La fiche Flathub indique que la version empaquetée peut utiliser le réseau et s\'exécute dans un bac à sable avec accès à l\'affichage, à l\'audio et au graphisme, sans accès au dossier personnel ni au bus de session. Selon le README, la version Flathub est limitée à son propre dossier de données ; il décrit deux moyens d\'élargir cela : l\'accès au dossier personnel et l\'autorisation de dialoguer avec l\'hôte Flatpak, pour que l\'IA puisse exécuter des commandes hors du bac à sable.',
          'Le README avertit que ces options réduisent la sécurité en exposant vos données et votre terminal, et que les mainteneurs ne peuvent garantir ni la confidentialité de vos discussions ni les risques des modèles propriétaires. Il mentionne aussi une fonction de permissions de fichiers qui définit ceux que Newelle peut lire ou modifier.',
          'PromptQuorum n\'a trouvé aucune page de politique de confidentialité sur le site ni dans le dépôt. Le manifeste du dépôt GitHub indique un accès au dossier personnel et à l\'hôte Flatpak, alors que les métadonnées Flathub n\'en montrent aucun ; PromptQuorum n\'a pas vérifié ce que chaque version obtient. Le code est sous GPL-3.0 et public : le flux de données peut donc être audité.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**Newelle convient aux utilisateurs du bureau Linux qui veulent un assistant gratuit et open source pour plusieurs fournisseurs et des modèles locaux.**',
        ],
        items: [
          'Utilisateurs de Linux qui veulent une application de discussion Flatpak avec modèles locaux, voix et discussion avec documents au même endroit.',
          'Personnes qui souhaitent relier des serveurs MCP, des compétences ou leurs propres extensions à un assistant de bureau.',
          'Utilisateurs qui aiment choisir entre fournisseurs cloud et modèles locaux pour chaque discussion ou profil.',
          'Lecteurs qui préfèrent un projet dont le code et la licence sont publics.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**Newelle convient mal dans certaines situations, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : utilisateurs de Windows et personnes qui ont besoin d\'une application Mac ou mobile aboutie. Le site propose Flathub et une page macOS qualifiée de bêta ; PromptQuorum n\'a trouvé aucune version Windows ni mobile.',
          'Non vérifié : vitesse, utilisation de la mémoire, qualité des réponses, précision vocale, qualité des images et de la recherche dans les documents. PromptQuorum n\'a pas exécuté l\'application.',
          'Non vérifié : quels fournisseurs d\'IA et quels modèles locaux sont pris en charge aujourd\'hui. PromptQuorum n\'a pas parcouru la documentation page par page.',
          'Non vérifié : si la version macOS bêta est signée ou notarisée, et en quoi elle diffère de la version Linux.',
          'Non vérifié : ce que la version Flathub et le manifeste du dépôt accordent chacun, et comment les données des conversations sont traitées avec un fournisseur cloud.',
          'Non vérifié : qui dirige le projet, dans quel pays il est basé et combien de personnes l\'utilisent. Aucune entreprise, mention légale ou politique de confidentialité n\'a été trouvée, et PromptQuorum n\'a pas cherché de tests indépendants.',
          'Non vérifié : que les fonctions citées sur le site, comme la dictée Whisper, la voix Kokoro et la recherche hybride dans les documents, fonctionnent comme décrit.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Newelle face aux alternatives',
        itemHeadings: true,
        content: [
          '**Newelle concurrence d\'autres applications de discussion de bureau pour modèles locaux et cloud ; PromptQuorum ne l\'a pas comparé à elles en pratique.** Les outils ci-dessous figurent dans l\'annuaire et sont décrits d\'après leurs propres avis.',
        ],
        columns: ['Outil', 'Selon les sources'],
        rows: [
          { 'Outil': 'Newelle', 'Selon les sources': 'GPL-3.0 ; Linux (Flathub) ; gratuit ; voix et MCP' },
          { 'Outil': '[LM Studio](/fr/power-local-llm/lm-studio-review)', 'Selon les sources': 'Propriétaire, gratuit ; Mac/Windows/Linux ; navigateur de modèles' },
          { 'Outil': '[Jan](/fr/power-local-llm/jan-review)', 'Selon les sources': 'Apache 2.0 (variante) ; Mac/Windows/Linux ; discussion hors ligne' },
          { 'Outil': '[GPT4All](/fr/power-local-llm/gpt4all-review)', 'Selon les sources': 'MIT ; Mac/Windows/Linux ; discussion locale, aussi sur CPU' },
          { 'Outil': '[AnythingLLM](/fr/power-local-llm/anythingllm-review)', 'Selon les sources': 'MIT ; Mac/Windows/Linux ; documents, base vectorielle' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Newelle fonctionne-t-il sous Windows ou sur Mac ?',
            a: 'Le menu du site ne propose aucune version Windows. Sa page macOS indique Newelle.app.zip, qualifié de bêta, version 1.3.7 du 21 avril 2026, alors que la version Linux est la 1.6.1. PromptQuorum n\'a testé ni l\'une ni l\'autre.',
          },
          {
            q: 'Newelle peut-il exécuter des commandes sur mon ordinateur ?',
            a: 'Oui, selon le README, il peut exécuter les commandes que l\'IA propose. Selon le README, la version Flathub est limitée à son dossier de données tant que vous n\'accordez pas l\'accès au dossier personnel ou à l\'hôte Flatpak, ce qui réduirait la sécurité. Le manifeste GitHub indique un accès à l\'hôte, alors que les métadonnées Flathub n\'en indiquent pas ; PromptQuorum n\'a pas vérifié lequel s\'applique.',
          },
          {
            q: 'Puis-je ajouter mes propres outils ou extensions ?',
            a: 'Oui, selon le développeur : les extensions ajoutent des modèles et des fonctions, la documentation explique comment créer une extension ou un outil, et les serveurs MCP s\'ajoutent en collant leur JSON.',
          },
          {
            q: 'Comment ouvrir la mini-fenêtre ou la pastille vocale ?',
            a: 'Appuyez sur Ctrl+G pendant que Newelle est ouvert, ou lancez-le avec l\'option --mini et associez cette commande à un raccourci. Selon les notes de version, newelle --voice affiche la pastille vocale expérimentale.',
          },
          {
            q: 'À quelle fréquence Newelle est-il mis à jour ?',
            a: 'GitHub liste les versions 1.4.5 le 19 juin, 1.5.0 le 19 août, 1.6.0 le 15 octobre et 1.6.1 le 2 novembre 2026. Les installations Flathub se mettent à jour via la logithèque.',
          },
          {
            q: 'Newelle est-il gratuit ?',
            a: 'Selon le README et le site, oui : Newelle est open source sous GPL-3.0 et gratuit à utiliser. Les fournisseurs d\'IA cloud que vous connectez facturent séparément selon leurs propres conditions, et les modèles locaux se téléchargent en plus de l\'application. PromptQuorum n\'a pas vérifié les tarifs de chaque fournisseur.',
          },
          {
            q: 'Newelle peut-il exécuter des modèles en local ?',
            a: 'Oui, selon le README : il peut télécharger des modèles locaux et les exécuter avec Llama.cpp ou Ollama. Aucun minimum de mémoire ou de GPU n\'est publié ; selon les notes de la version 1.6.0, le téléchargeur de modèles estime si un modèle convient. PromptQuorum n\'a pas fait tourner de modèle local avec lui.',
          },
          {
            q: 'Où vont mes requêtes ?',
            a: 'Cela dépend du modèle choisi. Un fournisseur cloud reçoit vos requêtes sur ses serveurs, tandis qu\'un modèle local tourne sur votre propre ordinateur. Selon le README, les mainteneurs ne peuvent pas garantir la confidentialité de vos données de discussion. PromptQuorum n\'a trouvé aucune page de politique de confidentialité et n\'a pas inspecté le trafic réseau.',
          },
          {
            q: 'Comment installer Newelle ?',
            a: 'Sous Linux, le projet indique Flathub comme voie recommandée : flatpak install flathub io.github.qwersyk.Newelle, ou une logithèque avec Flathub activé. Les versions GitHub ne proposent aucun fichier à télécharger. Le README décrit aussi une compilation depuis les sources avec install.sh ou GNOME Builder. PromptQuorum n\'a pas exécuté l\'installation.',
          },
          {
            q: 'Newelle prend-il en charge la voix ?',
            a: 'Selon le README, oui : discussion mains libres avec de nombreux modèles de reconnaissance et de synthèse vocales, prise en charge d\'un mot d\'activation et mode d\'appel en temps réel. Le site cite la dictée Whisper et la synthèse vocale Kokoro. La pastille vocale reste expérimentale, et PromptQuorum n\'a pas vérifié la précision de la voix.',
          },
          {
            q: 'Puis-je discuter avec mes propres documents ?',
            a: 'Selon le README, oui : Newelle peut discuter avec vos propres documents et lire un site web avec le préfixe #. Le site ajoute une recherche hybride vectorielle et par mots-clés dans les documents. Ce sont des déclarations du développeur, et PromptQuorum n\'a pas vérifié la qualité de la recherche.',
          },
          {
            q: 'Newelle prend-il en charge MCP ?',
            a: 'Oui, selon le README : les serveurs MCP s\'ajoutent en collant leur JSON. Il mentionne aussi des compétences de Claude et de Codex, et les notes de la version 1.6.0 ajoutent un serveur MCP des outils propres à Newelle pour des tiers. PromptQuorum n\'a testé aucun serveur MCP.',
          },
          {
            q: 'Qui développe Newelle, et le projet est-il toujours maintenu ?',
            a: 'Flathub indique le développeur Qwersyk, et le dépôt GitHub a été créé en juin 2023. La dernière version, 1.6.1, est sortie le 2 novembre 2026 et le dernier commit sur la branche master date du 6 novembre 2026. PromptQuorum n\'a trouvé ni société, ni mentions légales, ni politique de confidentialité et ne peut donc pas dire dans quel pays le projet est basé.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Newelle mérite un coup d\'œil si vous utilisez Linux et voulez un assistant gratuit et open source qui fonctionne avec plusieurs fournisseurs et des modèles locaux, et qui ajoute voix, discussion avec documents et outils.**',
          'Sur le papier, il couvre beaucoup de choses et le développement est actif : version 1.6.1 le 2 novembre 2026 et un commit le 6 novembre 2026. La fiche Flathub indique une version en bac à sable sans accès au dossier personnel, tandis que le manifeste GitHub indique un accès à l\'hôte ; PromptQuorum n\'a pas vérifié ce que chaque version accorde.',
          'Les compromis sont réels : aucune politique de confidentialité, entreprise ou mention légale n\'a été trouvée, la version macOS est une bêta, et PromptQuorum n\'a rien testé. Commencez par un petit modèle local, vérifiez dans les permissions Flatpak, par exemple avec Flatseal, ce que votre version installée accorde réellement, puis assurez-vous que la voix, les documents et les outils conviennent à votre usage avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Newelle](https://newelle.qsk.me) — fonctionnalités, voies d\'installation et page macOS, consulté le 18 novembre 2026.',
          '[Notes de version](https://newelle.qsk.me/releases) — notes des versions 1.6.1 et 1.6.0, consultées le 18 novembre 2026.',
          '[Versions macOS](https://newelle.qsk.me/macos/releases) — la version bêta 1.3.7, consultée le 18 novembre 2026.',
          '[Fiche Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) — paquet, licence, versions et permissions du bac à sable, consultée le 18 novembre 2026.',
          '[Dépôt GitHub](https://github.com/qwersyk/Newelle) — licence, date de création et dernier commit, consulté le 18 novembre 2026.',
          '[README](https://github.com/qwersyk/Newelle#readme) — fonctionnalités, installation et remarques sur les permissions, consulté le 18 novembre 2026.',
          '[Versions GitHub](https://github.com/qwersyk/Newelle/releases) — dates des versions, consultées le 18 novembre 2026.',
          '[Documentation](https://newelle.qsk.me/docs) — guides sur les extensions, les outils et MCP, consultés le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis sur LM Studio](/fr/power-local-llm/lm-studio-review) — une application de bureau avec navigateur de modèles intégré et mode serveur.',
          '[Avis sur Jan](/fr/power-local-llm/jan-review) — une application de discussion de bureau open source, pensée pour le hors ligne.',
          '[Avis sur GPT4All](/fr/power-local-llm/gpt4all-review) — une application de discussion locale adaptée aux débutants, avec un bon support du CPU seul.',
          '[Avis sur AnythingLLM](/fr/power-local-llm/anythingllm-review) — discussion avec documents et base vectorielle intégrée.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/newelle-review-hero-es.webp',
    title: 'Reseña de Newelle: asistente de IA gratuito y de código abierto para Linux con modelos locales',
    seoTitle: 'Reseña de Newelle: asistente de IA gratuito para Linux',
    intro:
      'Newelle 1.6.1 es un asistente de chat gratuito, con licencia GPL-3.0, para el escritorio Linux que se conecta a proveedores de IA en la nube (que cobran aparte) o ejecuta modelos locales con Llama.cpp u Ollama. Según su README, añade entrada y salida de voz, chat con tus propios documentos, herramientas MCP, memoria a largo plazo, búsqueda web y ejecución de comandos de terminal, y se instala desde Flathub. Esta reseña se basa en el sitio web oficial, el repositorio de GitHub con sus notas de versión y la ficha de Flathub, consultados el 18 de noviembre de 2026. PromptQuorum no ha probado la aplicación en la práctica.',
    metaDescription:
      'Newelle: asistente de IA gratuito GPL-3.0 para Linux con modelos locales, voz, chat con documentos y MCP, vía Flathub. Qué está confirmado y qué no.',
    twitterDescription:
      'Newelle: asistente de IA gratuito para Linux con modelos locales, voz, chat con documentos y herramientas MCP. GPL-3.0, desde Flathub. Lo confirmado.',
    audience:
      'Usuarios del escritorio Linux que quieren un asistente de IA gratuito y de código abierto con modelos locales y funciones de voz, personas que quieren chatear con sus propios documentos y quienes evalúan un proyecto desarrollado por una comunidad',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Newelle',
    targetKeywords: [
      'reseña Newelle',
      'asistente de IA Linux',
      'Newelle Flatpak',
      'asistente de IA código abierto Linux',
      'Newelle Ollama',
      'app LLM local escritorio Linux',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Newelle es un asistente de IA gratuito y de código abierto (GPL-3.0) para el escritorio Linux que funciona con proveedores en la nube (que cobran aparte) o con modelos locales ejecutados con Llama.cpp u Ollama.** Se instala desde Flathub y añade voz, chat con documentos, herramientas MCP y memoria. PromptQuorum no lo ha probado y no encontró política de privacidad, empresa ni aviso legal.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Newelle y para quién es?',
        answer:
          'Newelle es un asistente de chat desarrollado abiertamente en GitHub y empaquetado como Flatpak. Encaja con usuarios del escritorio Linux que quieren una sola app para varios proveedores de IA y modelos locales, con voz, chat con documentos y herramientas bajo su control.',
        bullets: [
          'Gratuito y con licencia GPL-3.0; Linux primero, con una versión para macOS que el sitio marca como beta.',
          'Chat con varios proveedores o con modelos locales descargados y ejecutados con Llama.cpp u Ollama.',
          'Entrada y salida de voz, un modo de llamada en tiempo real y chat con tus propios documentos.',
          'Extensiones, skills al estilo de Claude y Codex, servidores MCP y tareas programadas.',
          'Repositorio creado en junio de 2023; la versión 1.6.1 salió el 2 de noviembre de 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Alternativas', anchor: 'alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Newelle es un asistente de IA gratuito y de código abierto para el escritorio Linux que habla con proveedores en la nube (que cobran aparte) o con modelos locales y añade voz, chat con documentos y herramientas.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una ventana de chat en tu escritorio Linux donde eliges qué IA responde: un proveedor en línea o un modelo descargado en tu propio equipo. También puede escuchar, hablar, leer tus documentos y ejecutar las herramientas que permitas.',
          },
        ],
        items: [
          'Se instala desde Flathub con un comando o mediante un centro de software; la ficha de Flathub muestra acceso a la red, pero no a la carpeta personal.',
          'Los modelos locales se ejecutan con Llama.cpp u Ollama; no se publica una memoria mínima, pero el descargador de modelos estima si un modelo cabe, según las notas de la versión 1.6.0.',
          'La versión 1.6.0 añadió espacios de trabajo, subagentes, una nueva memoria a largo plazo, seguimiento de uso y un servidor MCP con las herramientas de Newelle para terceros.',
          'Existe una versión para macOS, pero está marcada como beta, así que Linux es el objetivo principal.',
          'PromptQuorum no ha probado la aplicación, por lo que la velocidad, la calidad de las respuestas y la precisión de la voz no están verificadas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El README advierte de que dar a Newelle acceso a tu carpeta personal o al host de Flatpak reduce la seguridad, y de que los mantenedores no pueden garantizar la privacidad de tus chats ni los riesgos de los modelos propietarios.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Newelle es un asistente de chat con licencia GPL-3.0 para el escritorio Linux, distribuido como Flatpak sobre el entorno de ejecución de GNOME.**',
          'Se desarrolla abiertamente en [github.com/qwersyk/Newelle](https://github.com/qwersyk/Newelle) y figura en [Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) como «AI chatbot» con el nombre de desarrollador Qwersyk; el repositorio se creó en junio de 2023. La última versión, la 1.6.1, apareció el 2 de noviembre de 2026 y el último commit de la rama master es del 6 de noviembre de 2026, de modo que el desarrollo está activo y no se aplica ninguna advertencia de proyecto abandonado. PromptQuorum no encontró empresa, dirección ni aviso legal, así que no puede decir en qué país tiene su sede el proyecto.',
          'Según el README, Newelle combina chat con varios proveedores de IA, modelos locales descargables, entrada y salida de voz, un modo de llamada en tiempo real, chat con documentos, generación de imágenes, búsqueda web, un gestor de archivos integrado y ejecución de comandos de terminal, además de un sistema de extensiones y una miniventana que se abre con un atajo de teclado. El sitio añade dictado con Whisper, síntesis de voz con Kokoro y búsqueda híbrida en documentos (vectorial y por palabras clave); son afirmaciones del desarrollador.',
          'PromptQuorum no ha ejecutado la aplicación y no ha comprobado la velocidad, la calidad de las respuestas, la precisión de la voz ni la calidad de la búsqueda en documentos.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**En Linux se instala Newelle desde Flathub, que el proyecto presenta como la vía recomendada; un centro de software con Flathub activado puede hacerlo.**',
          'Las versiones de GitHub no incluyen archivos descargables, así que Flathub es la vía empaquetada. El README también describe una compilación desde el código fuente con install.sh o GNOME Builder, y compilaciones de desarrollo de GitHub Actions, en las que advierte de que las traducciones no funcionan.',
        ],
        columns: ['Vía', 'Cómo conseguirlo'],
        rows: [
          { 'Vía': '[Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)', 'Cómo conseguirlo': 'flatpak install flathub io.github.qwersyk.Newelle' },
          { 'Vía': '[Sitio web](https://newelle.qsk.me)', 'Cómo conseguirlo': 'Sitio oficial: docs, extensiones, notas de versión' },
          { 'Vía': '[macOS (beta)](https://newelle.qsk.me/macos)', 'Cómo conseguirlo': 'Newelle.app.zip, marcado como beta' },
          { 'Vía': '[Código fuente](https://github.com/qwersyk/Newelle)', 'Cómo conseguirlo': 'sh install.sh (GNOME SDK) o GNOME Builder' },
        ],
        note: 'No se encontró ninguna página de política de privacidad en el sitio web ni en el repositorio. El 18 de noviembre de 2026 PromptQuorum solicitó [newelle.qsk.me/privacy](https://newelle.qsk.me/privacy), [newelle.qsk.me/privacy-policy](https://newelle.qsk.me/privacy-policy), [newelle.qsk.me/terms](https://newelle.qsk.me/terms), [newelle.qsk.me/about](https://newelle.qsk.me/about), [newelle.qsk.me/imprint](https://newelle.qsk.me/imprint) y [newelle.qsk.me/contact](https://newelle.qsk.me/contact); todas devolvieron «404 Not Found». La lista de archivos del [repositorio de GitHub](https://github.com/qwersyk/Newelle) no contiene ningún archivo de privacidad, términos o avisos legales. PromptQuorum no ejecutó el instalador.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Newelle necesita un escritorio Linux con Flatpak y Flathub configurados; las necesidades de hardware dependen de si usas proveedores en la nube o modelos locales.**',
          'La lista procede del README y de la ficha de Flathub. No se publica memoria ni GPU mínima para los modelos locales; según las notas de la versión 1.6.0, el descargador de modelos estima si un modelo cabe. PromptQuorum no midió el uso de memoria ni la velocidad.',
        ],
        columns: ['Elemento', 'Dato indicado'],
        rows: [
          { 'Elemento': 'Sistema', 'Dato indicado': 'Linux con Flatpak y Flathub' },
          { 'Elemento': 'Arquitecturas', 'Dato indicado': 'x86_64 y aarch64 (Flathub)' },
          { 'Elemento': 'Entorno de ejecución', 'Dato indicado': 'GNOME Platform 50 (Flathub)' },
          { 'Elemento': 'Tamaño en Flathub', 'Dato indicado': 'Unos 336 MB de descarga, 935 MB instalado' },
          { 'Elemento': 'Modelos locales', 'Dato indicado': 'Llama.cpp u Ollama; sin mínimo publicado' },
          { 'Elemento': 'Compilar tú mismo', 'Dato indicado': 'Último GNOME SDK o GNOME Builder' },
        ],
        note: 'Los tamaños proceden del resumen de Flathub del 18 de noviembre de 2026 y cambian con cada versión. Los modelos locales se descargan aparte.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El núcleo de Newelle es un asistente de chat con elección de modelo; voz, documentos, herramientas y automatización lo rodean.** Todos los puntos siguientes son afirmaciones del desarrollador, tomadas del README y de las notas de versión.',
        ],
        items: [
          'Modelos: varios proveedores de IA y modelos locales descargables que se ejecutan con Llama.cpp u Ollama, más un gestor de perfiles con ajustes separados por perfil.',
          'Voz: chat manos libres con muchos modelos de reconocimiento y síntesis de voz, palabra de activación y un modo de llamada en tiempo real; la píldora de voz añadida en 1.5.2 sigue siendo experimental.',
          'Documentos y memoria: chat con tus propios documentos, lectura de sitios web con un prefijo #, búsqueda web y memoria a largo plazo entre chats, con una nueva memoria explorable en 1.6.0.',
          'Herramientas: servidores MCP añadidos pegando su JSON, skills de Claude y Codex, extensiones y un servidor MCP con las herramientas propias de Newelle para terceros.',
          'Automatización: comandos de terminal sugeridos por la IA, tareas programadas, plantillas de subagentes e interfaces que permiten controlar Newelle desde Telegram o una API.',
          'Imágenes y archivos: generación de imágenes con Stable Diffusion o servicios de terceros, entrada de imágenes, gestor de archivos y editor integrados, y permisos que fijan qué archivos puede leer o editar Newelle.',
          'Gestión de chats: varios chats, espacios de trabajo, carpetas, ramificación desde cualquier mensaje, edición, borradores, renderizado de Markdown y LaTeX y una miniventana que se abre con Ctrl+G.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**El destino de tus mensajes depende del modelo que elijas: un modelo en la nube los envía a los servidores del proveedor y un modelo local se ejecuta en tu propio equipo.** PromptQuorum no inspeccionó el tráfico de red, así que no puede confirmar que nada más salga del equipo.',
          'La ficha de Flathub muestra que la versión empaquetada puede usar la red y se ejecuta en un entorno aislado con acceso a pantalla, audio y gráficos, sin acceso a la carpeta personal ni al bus de sesión. Según el README, la versión de Flathub está limitada a su propia carpeta de datos; describe dos formas de ampliarlo: acceso a la carpeta personal y permiso para hablar con el host de Flatpak, de modo que la IA pueda ejecutar comandos fuera del entorno aislado.',
          'El README advierte de que estas opciones reducen la seguridad al exponer tus datos y tu terminal, y de que los mantenedores no pueden garantizar la privacidad de tus chats ni los riesgos de los modelos propietarios. También menciona una función de permisos de archivos que define cuáles puede leer o editar Newelle.',
          'PromptQuorum no encontró ninguna página de política de privacidad en el sitio web ni en el repositorio. El manifiesto del repositorio de GitHub indica acceso a la carpeta personal y al host de Flatpak, mientras que los metadatos de Flathub no muestran ninguno; PromptQuorum no comprobó qué concede cada versión. El código es GPL-3.0 y público, así que el flujo de datos puede auditarse.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Newelle encaja con usuarios del escritorio Linux que quieren un asistente gratuito y de código abierto para varios proveedores y modelos locales.**',
        ],
        items: [
          'Usuarios de Linux que quieren una app de chat en Flatpak con modelos locales, voz y chat con documentos en un solo lugar.',
          'Personas que quieren conectar servidores MCP, skills o sus propias extensiones a un asistente de escritorio.',
          'Usuarios a los que les gusta elegir entre proveedores en la nube y modelos locales para cada chat o perfil.',
          'Lectores que prefieren un proyecto cuyo código y licencia son públicos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Newelle encaja mal en algunas situaciones, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No es para ti si usas Windows o necesitas una app para Mac o móvil pulida. El sitio ofrece Flathub y una página de macOS marcada como beta; PromptQuorum no encontró ninguna versión para Windows ni para móvil.',
          'Sin verificar: velocidad, uso de memoria, calidad de las respuestas, precisión de la voz, calidad de las imágenes y de la búsqueda en documentos. PromptQuorum no ha ejecutado la aplicación.',
          'Sin verificar: qué proveedores de IA y modelos locales se admiten hoy. PromptQuorum no revisó la documentación página por página.',
          'Sin verificar: si la beta de macOS está firmada o notarizada, y en qué se diferencia de la versión de Linux.',
          'Sin verificar: qué concede cada una de las versiones, la de Flathub y la del manifiesto del repositorio, y cómo se tratan los datos de las conversaciones con un proveedor en la nube.',
          'Sin verificar: quién dirige el proyecto, en qué país tiene su sede y cuántas personas lo usan. No se encontró empresa, aviso legal ni política de privacidad, y PromptQuorum no buscó reseñas independientes.',
          'Sin verificar: que las funciones citadas en el sitio, como el dictado con Whisper, la voz de Kokoro y la búsqueda híbrida en documentos, funcionen como se describe.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Newelle frente a las alternativas',
        itemHeadings: true,
        content: [
          '**Newelle compite con otras apps de chat de escritorio para modelos locales y en la nube; PromptQuorum no la ha comparado con ellas en la práctica.** Las herramientas siguientes están en el directorio y se describen a partir de sus propias reseñas.',
        ],
        columns: ['Herramienta', 'Según las fuentes'],
        rows: [
          { 'Herramienta': 'Newelle', 'Según las fuentes': 'GPL-3.0; Linux (Flathub); gratis; voz y MCP' },
          { 'Herramienta': '[LM Studio](/es/power-local-llm/lm-studio-review)', 'Según las fuentes': 'Propietario, gratis; Mac/Windows/Linux; explorador de modelos' },
          { 'Herramienta': '[Jan](/es/power-local-llm/jan-review)', 'Según las fuentes': 'Apache 2.0 (variante); Mac/Windows/Linux; chat sin conexión' },
          { 'Herramienta': '[GPT4All](/es/power-local-llm/gpt4all-review)', 'Según las fuentes': 'MIT; Mac/Windows/Linux; chat local, también en CPU' },
          { 'Herramienta': '[AnythingLLM](/es/power-local-llm/anythingllm-review)', 'Según las fuentes': 'MIT; Mac/Windows/Linux; documentos, base vectorial' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Newelle en Windows o en Mac?',
            a: 'El menú del sitio no ofrece ninguna versión para Windows. Su página de macOS incluye Newelle.app.zip, marcado como beta, versión 1.3.7 del 21 de abril de 2026, mientras que la versión de Linux es la 1.6.1. PromptQuorum no probó ninguna de las dos.',
          },
          {
            q: '¿Puede Newelle ejecutar comandos en mi equipo?',
            a: 'Sí, según el README puede ejecutar los comandos que sugiere la IA. Según el README, la versión de Flathub está limitada a su carpeta de datos mientras no concedas acceso a la carpeta personal o al host de Flatpak, lo que reduciría la seguridad. El manifiesto de GitHub indica acceso al host y los metadatos de Flathub no; PromptQuorum no comprobó cuál se aplica.',
          },
          {
            q: '¿Puedo añadir mis propias herramientas o extensiones?',
            a: 'Sí, según el desarrollador: las extensiones añaden modelos y funciones, la documentación describe cómo crear una extensión o una herramienta, y los servidores MCP se añaden pegando su JSON.',
          },
          {
            q: '¿Cómo abro la miniventana o la píldora de voz?',
            a: 'Pulsa Ctrl+G con Newelle abierto, o inícialo con la opción --mini y asigna ese comando a un atajo de teclado. Según las notas de versión, newelle --voice muestra la píldora de voz experimental.',
          },
          {
            q: '¿Con qué frecuencia se actualiza Newelle?',
            a: 'GitHub lista las versiones 1.4.5 el 19 de junio, 1.5.0 el 19 de agosto, 1.6.0 el 15 de octubre y 1.6.1 el 2 de noviembre de 2026. Las instalaciones de Flathub se actualizan desde el centro de software.',
          },
          {
            q: '¿Es Newelle gratuito?',
            a: 'Según el README y el sitio web, sí: Newelle es de código abierto con licencia GPL-3.0 y de uso gratuito. Los proveedores de IA en la nube que conectes facturan aparte según sus propias condiciones, y los modelos locales se descargan además de la aplicación. PromptQuorum no comprobó los precios de cada proveedor.',
          },
          {
            q: '¿Puede Newelle ejecutar modelos en local?',
            a: 'Sí, según el README: puede descargar modelos locales y ejecutarlos con Llama.cpp u Ollama. No se publica un mínimo de memoria ni de GPU; según las notas de la versión 1.6.0, el descargador de modelos estima si un modelo cabe. PromptQuorum no ejecutó ningún modelo local con ella.',
          },
          {
            q: '¿Adónde van mis prompts?',
            a: 'Depende del modelo que elijas. Un proveedor en la nube recibe tus prompts en sus servidores, mientras que un modelo local se ejecuta en tu propio equipo. Según el README, los mantenedores no pueden garantizar la privacidad de tus datos de chat. PromptQuorum no encontró ninguna página de política de privacidad y no inspeccionó el tráfico de red.',
          },
          {
            q: '¿Cómo instalo Newelle?',
            a: 'En Linux, el proyecto señala Flathub como vía recomendada: flatpak install flathub io.github.qwersyk.Newelle, o un centro de software con Flathub activado. Las versiones de GitHub no incluyen archivos descargables. El README también describe una compilación desde el código fuente con install.sh o GNOME Builder. PromptQuorum no ejecutó el instalador.',
          },
          {
            q: '¿Admite Newelle la voz?',
            a: 'Según el README, sí: chat con manos libres con muchos modelos de voz a texto y de texto a voz, compatibilidad con palabra de activación y un modo de llamada en tiempo real. El sitio web menciona el dictado con Whisper y la síntesis de voz Kokoro. La píldora de voz sigue siendo experimental, y PromptQuorum no comprobó la precisión de la voz.',
          },
          {
            q: '¿Puedo chatear con mis propios documentos?',
            a: 'Según el README, sí: Newelle puede chatear con tus propios documentos y leer un sitio web con el prefijo #. El sitio añade una búsqueda híbrida vectorial y por palabras clave en los documentos. Son afirmaciones del desarrollador, y PromptQuorum no comprobó la calidad de la búsqueda.',
          },
          {
            q: '¿Admite Newelle MCP?',
            a: 'Sí, según el README: los servidores MCP se añaden pegando su JSON. También menciona habilidades de Claude y Codex, y las notas de la versión 1.6.0 añaden un servidor MCP con las herramientas propias de Newelle para terceros. PromptQuorum no probó ningún servidor MCP.',
          },
          {
            q: '¿Quién desarrolla Newelle y sigue manteniéndose?',
            a: 'Flathub indica como desarrollador a Qwersyk, y el repositorio de GitHub se creó en junio de 2023. La última versión, la 1.6.1, apareció el 2 de noviembre de 2026 y el último commit de la rama master fue el 6 de noviembre de 2026. PromptQuorum no encontró empresa, aviso legal ni política de privacidad, por lo que no puede decir en qué país tiene su sede el proyecto.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Newelle merece una mirada si usas Linux y quieres un asistente gratuito y de código abierto que funcione con varios proveedores y modelos locales y añada voz, chat con documentos y herramientas.**',
          'Sobre el papel cubre mucho y el desarrollo está activo: versión 1.6.1 el 2 de noviembre de 2026 y un commit el 6 de noviembre de 2026. La ficha de Flathub muestra una versión aislada sin acceso a la carpeta personal, mientras que el manifiesto de GitHub indica acceso al host; PromptQuorum no comprobó qué permisos concede cada versión.',
          'Las contrapartidas son reales: no se encontró política de privacidad, empresa ni aviso legal, la versión de macOS es una beta y PromptQuorum no ha probado nada. Empieza con un modelo local pequeño, comprueba en los permisos de Flatpak, por ejemplo con Flatseal, qué concede realmente tu versión instalada y verifica que la voz, los documentos y las herramientas funcionan para tu uso antes de depender de ellos.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Newelle](https://newelle.qsk.me) — funciones, vías de instalación y página de macOS, consultado el 18 de noviembre de 2026.',
          '[Notas de versión](https://newelle.qsk.me/releases) — notas de las versiones 1.6.1 y 1.6.0, consultadas el 18 de noviembre de 2026.',
          '[Versiones de macOS](https://newelle.qsk.me/macos/releases) — la compilación beta 1.3.7, consultada el 18 de noviembre de 2026.',
          '[Ficha de Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) — paquete, licencia, versiones y permisos del entorno aislado, consultada el 18 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/qwersyk/Newelle) — licencia, fecha de creación y último commit, consultado el 18 de noviembre de 2026.',
          '[README](https://github.com/qwersyk/Newelle#readme) — funciones, instalación y notas sobre permisos, consultado el 18 de noviembre de 2026.',
          '[Versiones de GitHub](https://github.com/qwersyk/Newelle/releases) — fechas de las versiones, consultadas el 18 de noviembre de 2026.',
          '[Documentación](https://newelle.qsk.me/docs) — guías sobre extensiones, herramientas y MCP, consultadas el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de LM Studio](/es/power-local-llm/lm-studio-review) — una app de escritorio con explorador de modelos integrado y modo servidor.',
          '[Reseña de Jan](/es/power-local-llm/jan-review) — una app de chat de escritorio de código abierto y enfocada en el uso sin conexión.',
          '[Reseña de GPT4All](/es/power-local-llm/gpt4all-review) — una app de chat local apta para principiantes, con buen soporte solo con CPU.',
          '[Reseña de AnythingLLM](/es/power-local-llm/anythingllm-review) — chat con documentos y base vectorial integrada.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/newelle-review-hero-pt.webp',
    title: 'Análise do Newelle: assistente de IA gratuito e de código aberto para Linux com modelos locais',
    seoTitle: 'Análise do Newelle: assistente de IA gratuito para Linux',
    intro:
      'O Newelle 1.6.1 é um assistente de chat gratuito, com licença GPL-3.0, para o desktop Linux que se conecta a provedores de IA na nuvem (que cobram à parte) ou executa modelos locais com Llama.cpp ou Ollama. Segundo o README, ele acrescenta entrada e saída de voz, chat com seus próprios documentos, ferramentas MCP, memória de longo prazo, busca na web e execução de comandos de terminal, e é instalado pelo Flathub. Esta análise se baseia no site oficial, no repositório do GitHub com suas notas de versão e na página do Flathub, consultados em 18 de novembro de 2026. A PromptQuorum não testou o aplicativo na prática.',
    metaDescription:
      'Newelle: assistente de IA gratuito GPL-3.0 para Linux com modelos locais, voz, chat com documentos e MCP, pelo Flathub. O que está confirmado.',
    twitterDescription:
      'Newelle: assistente de IA gratuito para Linux com modelos locais, voz, chat com documentos e ferramentas MCP. GPL-3.0, pelo Flathub. O que está confirmado.',
    audience:
      'Usuários do desktop Linux que querem um assistente de IA gratuito e de código aberto com modelos locais e recursos de voz, pessoas que querem conversar com seus próprios documentos e quem avalia um projeto desenvolvido por uma comunidade',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise Newelle',
    targetKeywords: [
      'análise Newelle',
      'assistente de IA Linux',
      'Newelle Flatpak',
      'assistente de IA código aberto Linux',
      'Newelle Ollama',
      'app de LLM local desktop Linux',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Newelle é um assistente de IA gratuito e de código aberto (GPL-3.0) para o desktop Linux que funciona com provedores na nuvem (que cobram à parte) ou com modelos locais executados com Llama.cpp ou Ollama.** Ele é instalado pelo Flathub e acrescenta voz, chat com documentos, ferramentas MCP e memória. A PromptQuorum não o testou e não encontrou política de privacidade, empresa nem aviso legal.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Newelle e para quem ele serve?',
        answer:
          'O Newelle é um assistente de chat desenvolvido abertamente no GitHub e empacotado como Flatpak. Serve para usuários do desktop Linux que querem um único app para vários provedores de IA e modelos locais, com voz, chat com documentos e ferramentas sob seu controle.',
        bullets: [
          'Gratuito e com licença GPL-3.0; Linux em primeiro lugar, com uma versão para macOS que o site marca como beta.',
          'Chat com vários provedores ou com modelos locais baixados e executados com Llama.cpp ou Ollama.',
          'Entrada e saída de voz, um modo de chamada em tempo real e chat com seus próprios documentos.',
          'Extensões, skills no estilo do Claude e do Codex, servidores MCP e tarefas agendadas.',
          'Repositório criado em junho de 2023; a versão 1.6.1 foi lançada em 2 de novembro de 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Alternativas', anchor: 'alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Newelle é um assistente de IA gratuito e de código aberto para o desktop Linux que conversa com provedores na nuvem (que cobram à parte) ou com modelos locais e acrescenta voz, chat com documentos e ferramentas.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em uma janela de chat no seu desktop Linux em que você escolhe qual IA responde: um provedor online ou um modelo baixado no seu próprio computador. Ele também pode ouvir, falar, ler seus documentos e executar as ferramentas que você permitir.',
          },
        ],
        items: [
          'Instala-se pelo Flathub com um comando ou por uma central de programas; a página do Flathub mostra acesso à rede, mas não à pasta pessoal.',
          'Os modelos locais rodam com Llama.cpp ou Ollama; nenhuma memória mínima é publicada, mas o baixador de modelos estima se um modelo cabe, segundo as notas da versão 1.6.0.',
          'A versão 1.6.0 trouxe espaços de trabalho, subagentes, uma nova memória de longo prazo, acompanhamento de uso e um servidor MCP com as ferramentas do próprio Newelle para terceiros.',
          'Existe uma versão para macOS, mas ela está marcada como beta, então o Linux é o alvo principal.',
          'A PromptQuorum não testou o aplicativo, portanto velocidade, qualidade das respostas e precisão da voz não foram verificadas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O README alerta que dar ao Newelle acesso à sua pasta pessoal ou ao host do Flatpak reduz a segurança, e que os mantenedores não podem garantir a privacidade dos seus chats nem os riscos de modelos proprietários.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Newelle é um assistente de chat com licença GPL-3.0 para o desktop Linux, distribuído como Flatpak sobre o ambiente de execução do GNOME.**',
          'Ele é desenvolvido abertamente em [github.com/qwersyk/Newelle](https://github.com/qwersyk/Newelle) e listado no [Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) como "AI chatbot" com o nome de desenvolvedor Qwersyk; o repositório foi criado em junho de 2023. A última versão, a 1.6.1, saiu em 2 de novembro de 2026 e o último commit do branch master é de 6 de novembro de 2026, então o desenvolvimento está ativo e nenhum aviso de projeto abandonado se aplica. A PromptQuorum não encontrou empresa, endereço nem aviso legal e, por isso, não sabe dizer em que país o projeto está sediado.',
          'Segundo o README, o Newelle combina chat com vários provedores de IA, modelos locais para baixar, entrada e saída de voz, um modo de chamada em tempo real, chat com documentos, geração de imagens, busca na web, um gerenciador de arquivos integrado e execução de comandos de terminal, além de um sistema de extensões e uma minijanela aberta por atalho de teclado. O site acrescenta ditado com Whisper, síntese de voz com Kokoro e busca híbrida em documentos (vetorial e por palavras-chave); são afirmações do desenvolvedor.',
          'A PromptQuorum não executou o aplicativo e não verificou velocidade, qualidade das respostas, precisão da voz nem qualidade da busca em documentos.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**No Linux, você instala o Newelle pelo Flathub, que o projeto chama de caminho recomendado; uma central de programas com o Flathub ativado pode fazer isso.**',
          'As versões do GitHub não trazem arquivos para baixar, então o Flathub é o caminho empacotado. O README também descreve uma compilação a partir do código-fonte com install.sh ou GNOME Builder e compilações de desenvolvimento do GitHub Actions, para as quais avisa que as traduções não funcionam.',
        ],
        columns: ['Caminho', 'Como obter'],
        rows: [
          { 'Caminho': '[Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)', 'Como obter': 'flatpak install flathub io.github.qwersyk.Newelle' },
          { 'Caminho': '[Site](https://newelle.qsk.me)', 'Como obter': 'Site oficial: docs, extensões, notas de versão' },
          { 'Caminho': '[macOS (beta)](https://newelle.qsk.me/macos)', 'Como obter': 'Newelle.app.zip, marcado como beta' },
          { 'Caminho': '[Código-fonte](https://github.com/qwersyk/Newelle)', 'Como obter': 'sh install.sh (GNOME SDK) ou GNOME Builder' },
        ],
        note: 'Nenhuma página de política de privacidade foi encontrada no site nem no repositório. Em 18 de novembro de 2026, a PromptQuorum acessou [newelle.qsk.me/privacy](https://newelle.qsk.me/privacy), [newelle.qsk.me/privacy-policy](https://newelle.qsk.me/privacy-policy), [newelle.qsk.me/terms](https://newelle.qsk.me/terms), [newelle.qsk.me/about](https://newelle.qsk.me/about), [newelle.qsk.me/imprint](https://newelle.qsk.me/imprint) e [newelle.qsk.me/contact](https://newelle.qsk.me/contact); todas retornaram "404 Not Found". A lista de arquivos do [repositório do GitHub](https://github.com/qwersyk/Newelle) não contém nenhum arquivo de privacidade, termos ou avisos legais. A PromptQuorum não executou o instalador.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O Newelle precisa de um desktop Linux com Flatpak e Flathub configurados; as exigências de hardware dependem de você usar provedores na nuvem ou modelos locais.**',
          'A lista vem do README e da página do Flathub. Nenhuma memória nem GPU mínima é publicada para modelos locais; segundo as notas da versão 1.6.0, o baixador de modelos estima se um modelo cabe. A PromptQuorum não mediu uso de memória nem velocidade.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'Sistema', 'Valor informado': 'Linux com Flatpak e Flathub' },
          { 'Item': 'Arquiteturas', 'Valor informado': 'x86_64 e aarch64 (Flathub)' },
          { 'Item': 'Ambiente de execução', 'Valor informado': 'GNOME Platform 50 (Flathub)' },
          { 'Item': 'Tamanho no Flathub', 'Valor informado': 'Cerca de 336 MB de download, 935 MB instalado' },
          { 'Item': 'Modelos locais', 'Valor informado': 'Llama.cpp ou Ollama; sem mínimo publicado' },
          { 'Item': 'Compilar por conta própria', 'Valor informado': 'GNOME SDK mais recente ou GNOME Builder' },
        ],
        note: 'Os tamanhos vêm do resumo do Flathub de 18 de novembro de 2026 e mudam a cada versão. Os modelos locais são baixados à parte.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O núcleo do Newelle é um assistente de chat com escolha de modelo; voz, documentos, ferramentas e automação ficam ao redor.** Todos os itens abaixo são afirmações do desenvolvedor, tiradas do README e das notas de versão.',
        ],
        items: [
          'Modelos: vários provedores de IA e modelos locais para baixar, executados com Llama.cpp ou Ollama, mais um gerenciador de perfis com configurações separadas por perfil.',
          'Voz: chat de mãos livres com muitos modelos de reconhecimento e síntese de voz, suporte a palavra de ativação e um modo de chamada em tempo real; a pílula de voz adicionada na 1.5.2 ainda é experimental.',
          'Documentos e memória: chat com seus próprios documentos, leitura de sites com o prefixo #, busca na web e memória de longo prazo entre chats, com uma nova memória explorável na 1.6.0.',
          'Ferramentas: servidores MCP adicionados colando o JSON, skills do Claude e do Codex, extensões e um servidor MCP com as ferramentas do próprio Newelle para terceiros.',
          'Automação: comandos de terminal sugeridos pela IA, tarefas agendadas, modelos de subagentes e interfaces que permitem controlar o Newelle pelo Telegram ou por uma API.',
          'Imagens e arquivos: geração de imagens com Stable Diffusion ou serviços de terceiros, entrada de imagens, gerenciador de arquivos e editor integrados e permissões que definem quais arquivos o Newelle pode ler ou editar.',
          'Gerenciamento de chats: vários chats, espaços de trabalho, pastas, ramificação a partir de qualquer mensagem, edição, rascunhos, renderização de Markdown e LaTeX e uma minijanela aberta com Ctrl+G.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Para onde vão suas mensagens depende do modelo escolhido: um modelo na nuvem as envia aos servidores do provedor, e um modelo local roda no seu próprio computador.** A PromptQuorum não inspecionou o tráfego de rede, portanto não pode confirmar que nada mais saia da máquina.',
          'A página do Flathub mostra que a versão empacotada pode usar a rede e roda em uma sandbox com acesso a tela, áudio e gráficos, sem acesso à pasta pessoal nem ao barramento de sessão. Segundo o README, a versão do Flathub fica restrita à sua própria pasta de dados; ele descreve duas formas de ampliar isso: acesso à pasta pessoal e permissão para falar com o host do Flatpak, para que a IA possa executar comandos fora da sandbox.',
          'O README alerta que essas opções reduzem a segurança ao expor seus dados e seu terminal, e que os mantenedores não podem garantir a privacidade dos seus chats nem os riscos de modelos proprietários. Ele também cita um recurso de permissões de arquivos que define quais arquivos o Newelle pode ler ou editar.',
          'A PromptQuorum não encontrou página de política de privacidade no site nem no repositório. O manifesto do repositório do GitHub lista acesso à pasta pessoal e ao host do Flatpak, enquanto os metadados do Flathub não mostram nenhum; a PromptQuorum não verificou o que cada versão concede. O código é GPL-3.0 e público, então o fluxo de dados pode ser auditado.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Newelle serve para usuários do desktop Linux que querem um assistente gratuito e de código aberto para vários provedores e modelos locais.**',
        ],
        items: [
          'Usuários de Linux que querem um app de chat em Flatpak com modelos locais, voz e chat com documentos em um só lugar.',
          'Pessoas que querem conectar servidores MCP, skills ou suas próprias extensões a um assistente de desktop.',
          'Usuários que gostam de escolher entre provedores na nuvem e modelos locais para cada chat ou perfil.',
          'Leitores que preferem um projeto com código e licença públicos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Newelle serve mal em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve para: usuários de Windows e quem precisa de um app polido para Mac ou celular. O site oferece o Flathub e uma página de macOS marcada como beta; a PromptQuorum não encontrou versão para Windows nem para celular.',
          'Não verificado: velocidade, uso de memória, qualidade das respostas, precisão da voz, qualidade das imagens e da busca em documentos. A PromptQuorum não executou o aplicativo.',
          'Não verificado: quais provedores de IA e modelos locais são compatíveis hoje. A PromptQuorum não percorreu a documentação página por página.',
          'Não verificado: se a beta do macOS é assinada ou notarizada e como ela difere da versão para Linux.',
          'Não verificado: o que a versão do Flathub e o manifesto do repositório concedem cada um, e como os dados das conversas são tratados com um provedor na nuvem.',
          'Não verificado: quem mantém o projeto, em que país ele está sediado e quantas pessoas o usam. Nenhuma empresa, aviso legal ou política de privacidade foi encontrada, e a PromptQuorum não procurou análises independentes.',
          'Não verificado: se os recursos citados no site, como ditado com Whisper, voz Kokoro e busca híbrida em documentos, funcionam como descrito.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Newelle versus alternativas',
        itemHeadings: true,
        content: [
          '**O Newelle concorre com outros apps de chat para desktop com modelos locais e na nuvem; a PromptQuorum não o comparou com eles na prática.** As ferramentas abaixo estão no diretório e são descritas a partir das próprias análises.',
        ],
        columns: ['Ferramenta', 'Segundo as fontes'],
        rows: [
          { 'Ferramenta': 'Newelle', 'Segundo as fontes': 'GPL-3.0; Linux (Flathub); grátis; voz e MCP' },
          { 'Ferramenta': '[LM Studio](/pt/power-local-llm/lm-studio-review)', 'Segundo as fontes': 'Proprietário, grátis; Mac/Windows/Linux; navegador de modelos' },
          { 'Ferramenta': '[Jan](/pt/power-local-llm/jan-review)', 'Segundo as fontes': 'Apache 2.0 (variante); Mac/Windows/Linux; chat offline' },
          { 'Ferramenta': '[GPT4All](/pt/power-local-llm/gpt4all-review)', 'Segundo as fontes': 'MIT; Mac/Windows/Linux; chat local, também em CPU' },
          { 'Ferramenta': '[AnythingLLM](/pt/power-local-llm/anythingllm-review)', 'Segundo as fontes': 'MIT; Mac/Windows/Linux; documentos, base vetorial' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Newelle roda no Windows ou no Mac?',
            a: 'O menu do site não oferece versão para Windows. A página de macOS lista o Newelle.app.zip, marcado como beta, versão 1.3.7 de 21 de abril de 2026, enquanto a versão para Linux é a 1.6.1. A PromptQuorum não testou nenhuma das duas.',
          },
          {
            q: 'O Newelle pode executar comandos no meu computador?',
            a: 'Sim, segundo o README ele pode executar os comandos que a IA sugere. Segundo o README, a versão do Flathub fica restrita à sua pasta de dados enquanto você não conceder acesso à pasta pessoal ou ao host do Flatpak, o que reduziria a segurança. O manifesto do GitHub lista acesso ao host e os metadados do Flathub não; a PromptQuorum não verificou qual vale.',
          },
          {
            q: 'Posso adicionar minhas próprias ferramentas ou extensões?',
            a: 'Sim, segundo o desenvolvedor: as extensões acrescentam modelos e recursos, a documentação descreve como criar uma extensão ou uma ferramenta, e servidores MCP podem ser adicionados colando o JSON.',
          },
          {
            q: 'Como abro a minijanela ou a pílula de voz?',
            a: 'Pressione Ctrl+G com o Newelle aberto, ou inicie-o com a opção --mini e associe esse comando a um atalho de teclado. Segundo as notas de versão, newelle --voice mostra a pílula de voz experimental.',
          },
          {
            q: 'Com que frequência o Newelle é atualizado?',
            a: 'O GitHub lista as versões 1.4.5 em 19 de junho, 1.5.0 em 19 de agosto, 1.6.0 em 15 de outubro e 1.6.1 em 2 de novembro de 2026. As instalações pelo Flathub são atualizadas pela central de programas.',
          },
          {
            q: 'O Newelle é gratuito?',
            a: 'Segundo o README e o site, sim: o Newelle é de código aberto sob a GPL-3.0 e de uso gratuito. Os provedores de IA na nuvem que você conectar cobram à parte, conforme os próprios termos, e os modelos locais são baixados além do aplicativo. A PromptQuorum não verificou os preços de cada provedor.',
          },
          {
            q: 'O Newelle pode executar modelos localmente?',
            a: 'Sim, segundo o README: ele pode baixar modelos locais e executá-los com Llama.cpp ou Ollama. Não há mínimo de memória ou de GPU publicado; segundo as notas da versão 1.6.0, o baixador de modelos estima se um modelo cabe. A PromptQuorum não executou nenhum modelo local com ele.',
          },
          {
            q: 'Para onde vão os meus prompts?',
            a: 'Depende do modelo escolhido. Um provedor na nuvem recebe seus prompts nos servidores dele, enquanto um modelo local roda no seu próprio computador. Segundo o README, os mantenedores não podem garantir a privacidade dos seus dados de chat. A PromptQuorum não encontrou página de política de privacidade e não inspecionou o tráfego de rede.',
          },
          {
            q: 'Como instalo o Newelle?',
            a: 'No Linux, o projeto indica o Flathub como caminho recomendado: flatpak install flathub io.github.qwersyk.Newelle, ou uma central de programas com o Flathub ativado. As versões do GitHub não trazem arquivos para baixar. O README também descreve uma compilação a partir do código-fonte com install.sh ou GNOME Builder. A PromptQuorum não executou o instalador.',
          },
          {
            q: 'O Newelle oferece suporte a voz?',
            a: 'Segundo o README, sim: chat com as mãos livres com vários modelos de fala para texto e de texto para fala, suporte a palavra de ativação e um modo de chamada em tempo real. O site cita o ditado com Whisper e a síntese de voz Kokoro. A pílula de voz ainda é experimental, e a PromptQuorum não verificou a precisão da voz.',
          },
          {
            q: 'Posso conversar com os meus próprios documentos?',
            a: 'Segundo o README, sim: o Newelle pode conversar com os seus próprios documentos e ler um site com o prefixo #. O site acrescenta uma busca híbrida vetorial e por palavras-chave nos documentos. São afirmações do desenvolvedor, e a PromptQuorum não verificou a qualidade da busca.',
          },
          {
            q: 'O Newelle oferece suporte a MCP?',
            a: 'Sim, segundo o README: servidores MCP são adicionados colando o JSON deles. Ele também cita habilidades do Claude e do Codex, e as notas da versão 1.6.0 acrescentam um servidor MCP com as ferramentas do próprio Newelle para terceiros. A PromptQuorum não testou nenhum servidor MCP.',
          },
          {
            q: 'Quem desenvolve o Newelle e ele ainda é mantido?',
            a: 'O Flathub lista o desenvolvedor Qwersyk, e o repositório do GitHub foi criado em junho de 2023. A versão mais recente, a 1.6.1, saiu em 2 de novembro de 2026 e o último commit na branch master foi em 6 de novembro de 2026. A PromptQuorum não encontrou empresa, aviso legal nem política de privacidade, então não pode dizer em que país o projeto está sediado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Newelle vale uma olhada se você usa Linux e quer um assistente gratuito e de código aberto que funcione com vários provedores e modelos locais e acrescente voz, chat com documentos e ferramentas.**',
          'No papel, ele cobre muita coisa e o desenvolvimento está ativo: versão 1.6.1 em 2 de novembro de 2026 e um commit em 6 de novembro de 2026. A página do Flathub mostra uma versão em sandbox sem acesso à pasta pessoal, enquanto o manifesto do GitHub lista acesso ao host; a PromptQuorum não verificou o que cada versão concede.',
          'As contrapartidas são reais: não foram encontradas política de privacidade, empresa nem aviso legal, a versão para macOS é uma beta e a PromptQuorum não testou nada. Comece com um modelo local pequeno, confira nas permissões do Flatpak, por exemplo com o Flatseal, o que a sua versão instalada realmente concede, e verifique se voz, documentos e ferramentas funcionam para o seu uso antes de depender deles.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Newelle](https://newelle.qsk.me) — recursos, caminhos de instalação e página de macOS, consultado em 18 de novembro de 2026.',
          '[Notas de versão](https://newelle.qsk.me/releases) — notas das versões 1.6.1 e 1.6.0, consultadas em 18 de novembro de 2026.',
          '[Versões para macOS](https://newelle.qsk.me/macos/releases) — a compilação beta 1.3.7, consultada em 18 de novembro de 2026.',
          '[Página do Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) — pacote, licença, versões e permissões da sandbox, consultada em 18 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/qwersyk/Newelle) — licença, data de criação e último commit, consultado em 18 de novembro de 2026.',
          '[README](https://github.com/qwersyk/Newelle#readme) — recursos, instalação e observações sobre permissões, consultado em 18 de novembro de 2026.',
          '[Versões no GitHub](https://github.com/qwersyk/Newelle/releases) — datas das versões, consultadas em 18 de novembro de 2026.',
          '[Documentação](https://newelle.qsk.me/docs) — guias sobre extensões, ferramentas e MCP, consultados em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review) — um app de desktop com navegador de modelos integrado e modo servidor.',
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um app de chat de desktop de código aberto, com foco no uso offline.',
          '[Análise do GPT4All](/pt/power-local-llm/gpt4all-review) — um app de chat local para iniciantes, com bom suporte a uso só com CPU.',
          '[Análise do AnythingLLM](/pt/power-local-llm/anythingllm-review) — chat com documentos e base vetorial integrada.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/newelle-review-hero-ja.webp',
    title: 'Newelleレビュー：Linuxで使える無料のAIアシスタント',
    seoTitle: 'Newelleレビュー：無料のLinux向けAIアシスタント',
    intro:
      'Newelle 1.6.1は、Linuxデスクトップ向けの無料のチャットアシスタントで、ライセンスはGPL-3.0です。クラウドのAIプロバイダー（利用料は各社に別途かかります）に接続するほか、Llama.cppまたはOllama経由でローカルモデルも実行できます。READMEによると、音声の入出力、自分の文書とのチャット、MCPツール、長期記憶、Web検索、ターミナルコマンドの実行に対応し、Flathubからインストールします。このレビューは、公式サイト、GitHubリポジトリとそのリリースノート、Flathubの掲載ページに基づき、2026年11月18日に確認しました。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'NewelleはLinux向けの無料GPL-3.0のAIアシスタント。ローカルモデル、音声、文書チャット、MCPに対応し、Flathubから導入。確認できた点と未確認の点。',
    twitterDescription:
      'Newelle：ローカルモデル、音声、文書チャット、MCPツールに対応した無料のLinux向けAIアシスタント。GPL-3.0、Flathubで導入、macOS版はまだベータ。確認できた内容。',
    audience:
      'ローカルモデルや音声機能を備えた無料のオープンソースAIアシスタントを求めるLinuxデスクトップユーザー、自分の文書とチャットしたい人、コミュニティ開発のプロジェクトを検討している人',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Newelle レビュー',
    targetKeywords: [
      'Newelle レビュー',
      'Linux AIアシスタント',
      'Newelle Flatpak',
      'オープンソース AIアシスタント Linux',
      'Newelle Ollama',
      'ローカルLLM Linux デスクトップアプリ',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Newelleは、Linuxデスクトップ向けの無料のオープンソース（GPL-3.0）AIアシスタントで、クラウドのプロバイダー（料金は各社に別途支払います）、またはLlama.cppやOllamaで動かすローカルモデルのどちらでも使えます。** Flathubからインストールし、音声、文書チャット、MCPツール、記憶機能を備えます。PromptQuorumは試しておらず、プライバシーポリシー、運営会社、運営者情報は見つかりませんでした。',
    quickAnswerTop: {
      ja: {
        question: 'Newelleとは何で、どんな人向けですか？',
        answer:
          'NewelleはGitHubで公開開発されているチャットアシスタントで、Flatpakとして配布されています。複数のAIプロバイダーとローカルモデルを1つのアプリで使い、音声、文書チャット、自分で管理できるツールも使いたいLinuxデスクトップユーザーに向いています。',
        bullets: [
          '無料でGPL-3.0ライセンス。Linuxが中心で、サイトがベータと表示するmacOS版もあります。',
          '複数のプロバイダーとチャットするか、ダウンロードしたローカルモデルをLlama.cppまたはOllamaで動かします。',
          '音声の入出力、リアルタイム通話モード、自分の文書とのチャット。',
          '拡張機能、ClaudeやCodex形式のスキル、MCPサーバー、スケジュールタスク。',
          'リポジトリは2023年6月に作成され、バージョン1.6.1は2026年11月2日に公開されました。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '機能', anchor: 'features' },
      { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '代替ツール', anchor: 'alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Newelleは、クラウドのプロバイダー（料金は別途）やローカルモデルと対話し、音声、文書チャット、ツールを加えた、Linuxデスクトップ向けの無料のオープンソースAIアシスタントです。',
          },
          {
            type: 'plain-terms',
            text: 'Linuxデスクトップ上のチャットウィンドウで、オンラインのプロバイダーか自分のコンピューターにダウンロードしたモデルかを選んで答えさせるイメージです。音声を聞き取り、読み上げ、文書を読み、許可したツールを実行することもできます。',
          },
        ],
        items: [
          'Flathubから1つのコマンド、またはソフトウェアセンターでインストールします。Flathubの掲載情報では、ネットワークへのアクセスはありますが、ホームフォルダーへのアクセスは表示されていません。',
          'ローカルモデルはLlama.cppまたはOllamaで動きます。最小メモリは公表されていませんが、1.6.0のリリースノートによると、モデルダウンローダーが収まるかどうかを見積もります。',
          'バージョン1.6.0で、ワークスペース、サブエージェント、新しい長期記憶、利用状況の追跡、第三者向けにNewelle独自のツールを提供するMCPサーバーが加わりました。',
          'macOS版はありますがベータと表示されており、主な対象はLinuxです。',
          'PromptQuorumはアプリを試していないため、速度、回答の質、音声の精度は未確認です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'READMEは、NewelleにホームフォルダーやFlatpakのホストへのアクセスを与えるとセキュリティが下がること、またチャットデータのプライバシーやプロプライエタリモデルのリスクを開発者は保証できないことを警告しています。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Newelleは、Linuxデスクトップ向けのGPL-3.0のチャットアシスタントで、GNOMEランタイム上のFlatpakとして配布されています。**',
          '[github.com/qwersyk/Newelle](https://github.com/qwersyk/Newelle)で公開開発されており、[Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)では開発者名Qwersykの「AI chatbot」として掲載されています。リポジトリは2023年6月に作成されました。最新リリース1.6.1は2026年11月2日に公開され、masterブランチの最後のコミットは2026年11月6日のため、開発は活発で、放置プロジェクトの警告は当てはまりません。運営会社、住所、運営者情報は見つからなかったため、プロジェクトがどの国に拠点を置くかはPromptQuorumには分かりません。',
          'READMEによると、Newelleは複数のAIプロバイダーとのチャット、ダウンロード可能なローカルモデル、音声の入出力、リアルタイム通話モード、文書とのチャット、画像生成、Web検索、内蔵ファイルマネージャー、ターミナルコマンドの実行を備え、さらに拡張機能の仕組みと、キーボードショートカットで開くミニウィンドウがあります。サイトにはWhisperによる音声入力、Kokoroによる音声合成、ベクトル検索とキーワード検索を組み合わせた文書検索も挙げられています。これらは開発者の説明です。',
          'PromptQuorumはアプリを実行しておらず、速度、回答の質、音声の精度、文書検索の質は確認していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**LinuxではFlathubからNewelleをインストールします。プロジェクトはこれを推奨の方法としており、Flathubを有効にしたソフトウェアセンターでも導入できます。**',
          'GitHubのリリースにはダウンロード用ファイルがないため、パッケージ化された入手経路はFlathubです。READMEには、install.shまたはGNOME Builderによるソースからのビルドと、GitHub Actionsの開発ビルドも記載されており、後者では翻訳が動作しないと警告されています。',
        ],
        columns: ['方法', '入手方法'],
        rows: [
          { '方法': '[Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)', '入手方法': 'flatpak install flathub io.github.qwersyk.Newelle' },
          { '方法': '[公式サイト](https://newelle.qsk.me)', '入手方法': '公式サイト：ドキュメント、拡張機能、リリースノート' },
          { '方法': '[macOS（ベータ）](https://newelle.qsk.me/macos)', '入手方法': 'Newelle.app.zip、ベータと表示' },
          { '方法': '[ソースコード](https://github.com/qwersyk/Newelle)', '入手方法': 'sh install.sh（GNOME SDK）またはGNOME Builder' },
        ],
        note: 'サイトにもリポジトリにも、プライバシーポリシーのページは見つかりませんでした。2026年11月18日にPromptQuorumが [newelle.qsk.me/privacy](https://newelle.qsk.me/privacy)、[newelle.qsk.me/privacy-policy](https://newelle.qsk.me/privacy-policy)、[newelle.qsk.me/terms](https://newelle.qsk.me/terms)、[newelle.qsk.me/about](https://newelle.qsk.me/about)、[newelle.qsk.me/imprint](https://newelle.qsk.me/imprint)、[newelle.qsk.me/contact](https://newelle.qsk.me/contact) にアクセスしたところ、いずれも「404 Not Found」を返しました。[GitHubリポジトリ](https://github.com/qwersyk/Newelle)のファイル一覧にも、プライバシー、利用規約、法的情報に関するファイルはありません。PromptQuorumはインストーラーを実行していません。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**Newelleには、FlatpakとFlathubを設定したLinuxデスクトップが必要です。必要なハードウェアは、クラウドのプロバイダーを使うかローカルモデルを使うかで変わります。**',
          '一覧はREADMEとFlathubの掲載情報に基づきます。ローカルモデル向けの最小メモリやGPUは公表されておらず、1.6.0のリリースノートによると、モデルダウンローダーがモデルが収まるかを見積もります。PromptQuorumはメモリ使用量も速度も測定していません。',
        ],
        columns: ['項目', '記載されている内容'],
        rows: [
          { '項目': 'システム', '記載されている内容': 'FlatpakとFlathubを使えるLinux' },
          { '項目': 'アーキテクチャ', '記載されている内容': 'x86_64とaarch64（Flathub）' },
          { '項目': 'ランタイム', '記載されている内容': 'GNOME Platform 50（Flathub）' },
          { '項目': 'Flathub上のサイズ', '記載されている内容': 'ダウンロード約336 MB、インストール後935 MB' },
          { '項目': 'ローカルモデル', '記載されている内容': 'Llama.cppまたはOllama。最小要件は非公表' },
          { '項目': 'ソースからビルド', '記載されている内容': '最新のGNOME SDKまたはGNOME Builder' },
        ],
        note: 'サイズは2026年11月18日時点のFlathubの概要に基づき、バージョンごとに変わります。ローカルモデルは別途ダウンロードが必要です。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Newelleの中心はモデルを選べるチャットアシスタントで、音声、文書、ツール、自動化がその周りを固めます。** 以下はすべて、READMEとリリースノートに基づく開発者の説明です。',
        ],
        items: [
          'モデル：複数のAIプロバイダーと、Llama.cppまたはOllamaで動かすダウンロード可能なローカルモデル。プロファイルごとに設定を分けるプロファイルマネージャーもあります。',
          '音声：多くの音声認識・音声合成モデルによるハンズフリーのチャット、ウェイクワード対応、リアルタイム通話モード。1.5.2で追加された音声ピルはまだ実験的です。',
          '文書と記憶：自分の文書とのチャット、#の接頭辞によるWebサイトの読み取り、Web検索、チャットをまたぐ長期記憶。1.6.0で新しい探索可能な記憶が加わりました。',
          'ツール：JSONを貼り付けて追加するMCPサーバー、ClaudeやCodexのスキル、拡張機能、第三者向けにNewelle独自のツールを提供するMCPサーバー。',
          '自動化：AIが提案するターミナルコマンド、スケジュールタスク、サブエージェントのテンプレート、TelegramやAPIからNewelleを操作できるインターフェース。',
          '画像とファイル：Stable Diffusionまたは外部サービスによる画像生成、画像入力、内蔵のファイルマネージャーとエディター、Newelleが読み書きできるファイルを決める権限設定。',
          'チャット管理：複数チャット、ワークスペース、フォルダー、任意のメッセージからの分岐、編集、下書き、MarkdownとLaTeXの表示、Ctrl+Gで開くミニウィンドウ。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**プロンプトの送信先は選んだモデルによって決まります。クラウドモデルはプロバイダーのサーバーに送り、ローカルモデルは自分のコンピューター上で動きます。** PromptQuorumはネットワーク通信を調べていないため、それ以外のデータが外部に出ないことは確認できません。',
          'Flathubの掲載情報では、パッケージ版はネットワークを利用でき、画面、音声、グラフィックスにアクセスできるサンドボックス内で動き、ホームフォルダーやセッションバスへのアクセスはありません。READMEによると、Flathub版は専用のデータフォルダーに制限されており、それを広げる方法が2つ説明されています。ホームフォルダーへのアクセスと、Flatpakのホストと通信する許可です。後者を許可すると、AIがサンドボックスの外でコマンドを実行できます。',
          'READMEは、これらの設定がデータとターミナルを公開してセキュリティを下げること、またチャットデータのプライバシーやプロプライエタリモデルのリスクを開発者は保証できないことを警告しています。Newelleが読み書きできるファイルを決めるファイル権限機能も挙げられています。',
          'PromptQuorumは、サイトにもリポジトリにもプライバシーポリシーのページを見つけられませんでした。GitHubリポジトリのマニフェストにはホームフォルダーとFlatpakホストへのアクセスが記載されていますが、Flathubのメタデータには表示されません。各ビルドが実際に何を許可するかは確認していません。コードはGPL-3.0で公開されているため、データの流れは監査できます。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Newelleは、複数のプロバイダーとローカルモデルに使える無料のオープンソースアシスタントを求めるLinuxデスクトップユーザーに向いています。**',
        ],
        items: [
          'ローカルモデル、音声、文書チャットを1か所にまとめたFlatpakのチャットアプリが欲しいLinuxユーザー。',
          'MCPサーバー、スキル、自作の拡張機能をデスクトップアシスタントにつなぎたい人。',
          'チャットやプロファイルごとに、クラウドのプロバイダーとローカルモデルを使い分けたい人。',
          'コードとライセンスが公開されているプロジェクトを好む読者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Newelleは向かない場面があり、未確認の点もいくつか残っています。**',
        ],
        items: [
          '向かない人：Windowsユーザー、完成度の高いMacアプリやモバイルアプリが必要な人。サイトにはFlathubとベータ表示のmacOSページがありますが、PromptQuorumはWindows版もモバイル版も見つけられませんでした。',
          '未確認：速度、メモリ使用量、回答の質、音声の精度、画像の質、文書検索の質。PromptQuorumはアプリを実行していません。',
          '未確認：現在どのAIプロバイダーとローカルモデルに対応しているか。PromptQuorumはドキュメントを1ページずつ確認してはいません。',
          '未確認：macOSのベータ版が署名や公証を受けているか、Linux版とどう違うか。',
          '未確認：Flathub版とリポジトリのマニフェストがそれぞれ何を許可するか、クラウドのプロバイダーを使う際に会話データがどう扱われるか。',
          '未確認：プロジェクトの運営者、拠点の国、利用者数。運営会社、運営者情報、プライバシーポリシーは見つからず、PromptQuorumは第三者のレビューも探していません。',
          '未確認：サイトに挙げられたWhisperによる音声入力、Kokoroの音声合成、ハイブリッド文書検索などの機能が説明どおりに動くか。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Newelleと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Newelleは、ローカルモデルとクラウドモデルに対応する他のデスクトップチャットアプリと競合します。PromptQuorumは実際には比較していません。** 以下のツールはディレクトリに掲載されており、それぞれのレビューに基づいて説明しています。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'Newelle', '情報源での記載': 'GPL-3.0、Linux（Flathub）、無料、音声とMCP' },
          { 'ツール': '[LM Studio](/ja/power-local-llm/lm-studio-review)', '情報源での記載': 'プロプライエタリ、無料、Mac/Windows/Linux、モデルブラウザー' },
          { 'ツール': '[Jan](/ja/power-local-llm/jan-review)', '情報源での記載': 'Apache 2.0（派生）、Mac/Windows/Linux、オフラインチャット' },
          { 'ツール': '[GPT4All](/ja/power-local-llm/gpt4all-review)', '情報源での記載': 'MIT、Mac/Windows/Linux、CPUでも使えるローカルチャット' },
          { 'ツール': '[AnythingLLM](/ja/power-local-llm/anythingllm-review)', '情報源での記載': 'MIT、Mac/Windows/Linux、文書チャット、ベクトルストア' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'NewelleはWindowsやMacで動きますか？',
            a: 'サイトのメニューにWindows版はありません。macOSのページにはベータと表示されたNewelle.app.zip（バージョン1.3.7、2026年4月21日）が載っていますが、Linux版は1.6.1です。PromptQuorumはどちらも試していません。',
          },
          {
            q: 'Newelleは自分のコンピューターでコマンドを実行できますか？',
            a: 'はい。READMEによると、AIが提案したコマンドを実行できます。READMEによると、Flathub版はホームフォルダーやFlatpakホストへのアクセスを許可しない限り専用のデータフォルダーに制限され、ホストへのアクセスはセキュリティを下げるとされています。GitHubのマニフェストにはホストへのアクセスが記載されていますがFlathubのメタデータにはなく、どちらが実際に適用されるかはPromptQuorumでは確認していません。',
          },
          {
            q: '自分のツールや拡張機能を追加できますか？',
            a: 'はい、開発者によると、拡張機能でモデルや機能を追加でき、ドキュメントに拡張機能やツールの作り方が説明され、MCPサーバーはJSONを貼り付けて追加できます。',
          },
          {
            q: 'ミニウィンドウや音声ピルはどう開きますか？',
            a: 'Newelleを開いた状態でCtrl+Gを押すか、--miniオプションで起動してそのコマンドをホットキーに割り当てます。リリースノートによると、newelle --voiceで実験的な音声ピルが表示されます。',
          },
          {
            q: 'Newelleはどのくらいの頻度で更新されますか？',
            a: 'GitHubには、1.4.5が2026年6月19日、1.5.0が8月19日、1.6.0が10月15日、1.6.1が11月2日のリリースとして載っています。Flathubでインストールした場合は、ソフトウェアセンターで更新されます。',
          },
          {
            q: 'Newelleは無料で使えますか？',
            a: 'READMEとウェブサイトによると、はい。NewelleはGPL-3.0のオープンソースで、無料で使えます。接続するクラウドAIプロバイダーは各社の条件で別途課金され、ローカルモデルはアプリとは別にダウンロードします。各プロバイダーの料金はPromptQuorumでは確認していません。',
          },
          {
            q: 'Newelleはモデルをローカルで実行できますか？',
            a: 'はい。READMEによると、ローカルモデルをダウンロードしてLlama.cppまたはOllamaで実行できます。メモリやGPUの最小要件は公表されておらず、1.6.0のリリースノートでは、モデルのダウンローダーが動作可能かどうかを見積もるとされています。ローカルモデルでの動作はPromptQuorumでは試していません。',
          },
          {
            q: '入力したプロンプトはどこに送られますか？',
            a: '選ぶモデルによって異なります。クラウドプロバイダーではそのサーバーにプロンプトが送られ、ローカルモデルでは自分のコンピューター上で動きます。READMEによると、メンテナーはチャットデータのプライバシーを保証できないとされています。PromptQuorumはプライバシーポリシーのページを見つけられず、ネットワーク通信も調べていません。',
          },
          {
            q: 'Newelleはどうやってインストールしますか？',
            a: 'Linuxでは、プロジェクトがFlathubを推奨の方法としています。flatpak install flathub io.github.qwersyk.Newelle を実行するか、Flathubを有効にしたソフトウェアセンターを使います。GitHubのリリースにはダウンロード用ファイルがありません。READMEには、install.shまたはGNOME Builderによるソースからのビルドも記載されています。インストーラーはPromptQuorumでは実行していません。',
          },
          {
            q: 'Newelleは音声に対応していますか？',
            a: 'READMEによると、はい。多くの音声認識・音声合成モデルによるハンズフリーのチャット、ウェイクワード対応、リアルタイムの通話モードがあります。ウェブサイトにはWhisperによる音声入力とKokoroによる音声合成が挙げられています。音声ピルはまだ実験的で、音声の精度はPromptQuorumでは確認していません。',
          },
          {
            q: '自分の文書とチャットできますか？',
            a: 'READMEによると、はい。Newelleは自分の文書とチャットでき、#のプレフィックスでウェブサイトを読み込めます。ウェブサイトには、ベクトル検索とキーワード検索を組み合わせた文書検索も挙げられています。これらは開発者の説明であり、検索の品質はPromptQuorumでは確認していません。',
          },
          {
            q: 'NewelleはMCPに対応していますか？',
            a: 'はい。READMEによると、MCPサーバーはJSONを貼り付けて追加します。ClaudeやCodexのスキルにも触れており、1.6.0のリリースノートでは第三者向けにNewelle自身のツールを提供するMCPサーバーが加わったとされています。MCPサーバーはPromptQuorumでは試していません。',
          },
          {
            q: 'Newelleは誰が開発していて、今も保守されていますか？',
            a: 'FlathubにはQwersykが開発者として載っており、GitHubのリポジトリは2023年6月に作成されました。最新リリースの1.6.1は2026年11月2日に公開され、masterブランチの最後のコミットは2026年11月6日です。PromptQuorumは会社、運営者情報、プライバシーポリシーを見つけられなかったため、プロジェクトの拠点がどの国かは分かりません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**Linuxを使っていて、複数のプロバイダーとローカルモデルで動き、音声、文書チャット、ツールを加えた無料のオープンソースアシスタントを探しているなら、Newelleは試す価値があります。**',
          '機能は幅広く、開発も活発です。バージョン1.6.1は2026年11月2日、コミットは2026年11月6日にあります。Flathubの掲載情報ではホームフォルダーへのアクセスがないサンドボックス版と示されていますが、GitHubのマニフェストにはホストへのアクセスが記載されています。各ビルドが実際に何を許可するかはPromptQuorumでは確認していません。',
          '一方で、プライバシーポリシー、運営会社、運営者情報は見つからず、macOS版はベータで、PromptQuorumは何も試していません。まず小さなローカルモデルから始め、Flatsealなどでインストール済みビルドが実際に何を許可しているかをFlatpakの権限で確認し、音声、文書、ツールが自分の用途で動くかを確かめてから頼ってください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Newelle公式サイト](https://newelle.qsk.me) — 機能、インストール方法、macOSのページ。2026年11月18日に確認。',
          '[リリースノート](https://newelle.qsk.me/releases) — バージョン1.6.1と1.6.0のノート。2026年11月18日に確認。',
          '[macOSリリース](https://newelle.qsk.me/macos/releases) — ベータビルド1.3.7。2026年11月18日に確認。',
          '[Flathubの掲載ページ](https://flathub.org/apps/io.github.qwersyk.Newelle) — パッケージ、ライセンス、バージョン、サンドボックスの権限。2026年11月18日に確認。',
          '[GitHubリポジトリ](https://github.com/qwersyk/Newelle) — ライセンス、作成日、最後のコミット。2026年11月18日に確認。',
          '[README](https://github.com/qwersyk/Newelle#readme) — 機能、インストール、権限に関する注意。2026年11月18日に確認。',
          '[GitHubのリリース](https://github.com/qwersyk/Newelle/releases) — リリース日。2026年11月18日に確認。',
          '[ドキュメント](https://newelle.qsk.me/docs) — 拡張機能、ツール、MCPのガイド。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[LM Studioレビュー](/ja/power-local-llm/lm-studio-review) — モデルブラウザーとサーバーモードを内蔵したデスクトップアプリ。',
          '[Janレビュー](/ja/power-local-llm/jan-review) — オフライン重視のオープンソースのデスクトップチャットアプリ。',
          '[GPT4Allレビュー](/ja/power-local-llm/gpt4all-review) — CPUのみでも使いやすい、初心者向けのローカルチャットアプリ。',
          '[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review) — ベクトルストアを内蔵した文書チャット。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/newelle-review-hero-zh.webp',
    title: 'Newelle 点评：支持本地模型的免费开源 Linux AI 助手',
    seoTitle: 'Newelle 点评：免费的 Linux AI 助手',
    intro:
      'Newelle 1.6.1 是一款面向 Linux 桌面的免费聊天助手，采用 GPL-3.0 许可，可连接云端 AI 服务商（由服务商另行计费），也可通过 Llama.cpp 或 Ollama 运行本地模型。根据其 README，它提供语音输入与输出、与自己的文档对话、MCP 工具、长期记忆、网页搜索和终端命令执行，并通过 Flathub 安装。本点评基于官方网站、GitHub 仓库及其发布说明和 Flathub 页面，核查日期为 2026 年 11 月 18 日。PromptQuorum 没有实际测试过这款应用。',
    metaDescription:
      'Newelle 是免费的 GPL-3.0 Linux AI 助手，支持本地模型、语音、文档对话和 MCP，通过 Flathub 安装。已确认与未确认的内容。',
    twitterDescription:
      'Newelle：支持本地模型、语音、文档对话和 MCP 工具的免费 Linux AI 助手。GPL-3.0，通过 Flathub 安装，macOS 版仍为测试版。已确认的内容。',
    audience:
      '想要带本地模型和语音功能的免费开源 AI 助手的 Linux 桌面用户、想与自己的文档对话的人，以及正在评估社区开发项目的人',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Newelle 点评',
    targetKeywords: [
      'Newelle 点评',
      'Linux AI 助手',
      'Newelle Flatpak',
      '开源 AI 助手 Linux',
      'Newelle Ollama',
      '本地 LLM Linux 桌面应用',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Newelle 是一款面向 Linux 桌面的免费开源（GPL-3.0）AI 助手，可使用云端服务商（费用由服务商另行收取），也可使用通过 Llama.cpp 或 Ollama 运行的本地模型。** 它通过 Flathub 安装，并提供语音、文档对话、MCP 工具和记忆功能。PromptQuorum 未测试过它，也没有找到隐私政策、运营公司或法律声明。',
    quickAnswerTop: {
      zh: {
        question: 'Newelle 是什么，适合谁？',
        answer:
          'Newelle 是在 GitHub 上公开开发的聊天助手，以 Flatpak 形式打包。它适合想用一个应用对接多家 AI 服务商和本地模型，并配合语音、文档对话和自己可控工具的 Linux 桌面用户。',
        bullets: [
          '免费，GPL-3.0 许可；以 Linux 为主，另有网站标注为测试版的 macOS 版本。',
          '可与多家服务商对话，也可下载本地模型并通过 Llama.cpp 或 Ollama 运行。',
          '语音输入与输出、实时通话模式，以及与自己的文档对话。',
          '扩展、Claude 和 Codex 风格的技能、MCP 服务器和计划任务。',
          '仓库创建于 2023 年 6 月；1.6.1 版于 2026 年 11 月 2 日发布。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
      { label: '系统要求', anchor: 'requirements' },
      { label: '功能', anchor: 'features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '替代方案', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Newelle 是一款面向 Linux 桌面的免费开源 AI 助手，可对接云端服务商（另行计费）或本地模型，并提供语音、文档对话和工具。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作 Linux 桌面上的一个聊天窗口，由你选择由谁来回答：在线服务商，或下载到你自己电脑上的模型。它还能听、说、读取你的文档，并运行你允许的工具。',
          },
        ],
        items: [
          '通过 Flathub 用一条命令或软件中心安装；Flathub 页面显示它可访问网络，但没有主目录访问权限。',
          '本地模型通过 Llama.cpp 或 Ollama 运行；未公布最低内存要求，但根据 1.6.0 发布说明，模型下载器会估算模型是否放得下。',
          '1.6.0 版新增了工作区、子代理、新的长期记忆、使用情况追踪，以及向第三方提供 Newelle 自带工具的 MCP 服务器。',
          '存在 macOS 版本，但标注为测试版，因此 Linux 是主要目标平台。',
          'PromptQuorum 未测试该应用，因此速度、回答质量和语音准确度均未核实。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'README 警告：让 Newelle 访问你的主目录或 Flatpak 宿主会降低安全性，且维护者无法保证聊天数据的隐私，也无法保证专有模型的风险。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Newelle 是一款面向 Linux 桌面的 GPL-3.0 聊天助手，以 Flatpak 形式分发，基于 GNOME 运行时。**',
          '它在 [github.com/qwersyk/Newelle](https://github.com/qwersyk/Newelle) 公开开发，在 [Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) 上以开发者名 Qwersyk 列为“AI chatbot”；仓库创建于 2023 年 6 月。最新版本 1.6.1 发布于 2026 年 11 月 2 日，master 分支最近一次提交在 2026 年 11 月 6 日，因此开发活跃，不适用停更项目警告。PromptQuorum 没有找到公司、地址或法律声明，所以无法说明该项目位于哪个国家。',
          '根据 README，Newelle 集成了与多家 AI 服务商的聊天、可下载的本地模型、语音输入与输出、实时通话模式、文档对话、图像生成、网页搜索、内置文件管理器和终端命令执行，另有扩展系统和用快捷键呼出的迷你窗口。网站还提到 Whisper 听写、Kokoro 语音合成以及向量加关键词的混合文档搜索；这些都是开发者的说法。',
          'PromptQuorum 没有运行过该应用，也没有核实速度、回答质量、语音准确度或文档搜索质量。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**在 Linux 上通过 Flathub 安装 Newelle，项目称其为推荐方式；启用了 Flathub 的软件中心也可以完成安装。**',
          'GitHub 发布页没有可下载的文件，因此 Flathub 是打包好的安装途径。README 还介绍了用 install.sh 或 GNOME Builder 从源码构建，以及来自 GitHub Actions 的开发版构建，并警告这些构建的翻译无法使用。',
        ],
        columns: ['途径', '获取方式'],
        rows: [
          { '途径': '[Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)', '获取方式': 'flatpak install flathub io.github.qwersyk.Newelle' },
          { '途径': '[官网](https://newelle.qsk.me)', '获取方式': '官方网站：文档、扩展、发布说明' },
          { '途径': '[macOS（测试版）](https://newelle.qsk.me/macos)', '获取方式': 'Newelle.app.zip，标注为测试版' },
          { '途径': '[源码](https://github.com/qwersyk/Newelle)', '获取方式': 'sh install.sh（需 GNOME SDK）或 GNOME Builder' },
        ],
        note: '在网站和仓库中都没有找到隐私政策页面。2026 年 11 月 18 日，PromptQuorum 请求了 [newelle.qsk.me/privacy](https://newelle.qsk.me/privacy), [newelle.qsk.me/privacy-policy](https://newelle.qsk.me/privacy-policy), [newelle.qsk.me/terms](https://newelle.qsk.me/terms), [newelle.qsk.me/about](https://newelle.qsk.me/about), [newelle.qsk.me/imprint](https://newelle.qsk.me/imprint) 和 [newelle.qsk.me/contact](https://newelle.qsk.me/contact)，均返回“404 Not Found”。[GitHub 仓库](https://github.com/qwersyk/Newelle)的文件列表中也没有隐私、条款或法律声明文件。PromptQuorum 没有运行安装程序。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**Newelle 需要已配置 Flatpak 和 Flathub 的 Linux 桌面；硬件需求取决于你使用云端服务商还是本地模型。**',
          '清单来自 README 和 Flathub 页面。本地模型的最低内存或 GPU 要求未公布；根据 1.6.0 发布说明，模型下载器会估算模型是否放得下。PromptQuorum 没有测量内存占用或速度。',
        ],
        columns: ['项目', '来源给出的数据'],
        rows: [
          { '项目': '系统', '来源给出的数据': '带 Flatpak 和 Flathub 的 Linux' },
          { '项目': '架构', '来源给出的数据': 'x86_64 和 aarch64（Flathub）' },
          { '项目': '运行时', '来源给出的数据': 'GNOME Platform 50（Flathub）' },
          { '项目': 'Flathub 上的大小', '来源给出的数据': '下载约 336 MB，安装后 935 MB' },
          { '项目': '本地模型', '来源给出的数据': 'Llama.cpp 或 Ollama；未公布最低要求' },
          { '项目': '从源码构建', '来源给出的数据': '最新 GNOME SDK 或 GNOME Builder' },
        ],
        note: '大小数据来自 2026 年 11 月 18 日的 Flathub 摘要，会随每个版本变化。本地模型需另外下载。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Newelle 的核心是可选模型的聊天助手，语音、文档、工具和自动化围绕其展开。** 以下各项均为开发者在 README 和发布说明中的说法。',
        ],
        items: [
          '模型：多家 AI 服务商，以及通过 Llama.cpp 或 Ollama 运行的可下载本地模型，另有按配置文件保存不同设置的配置文件管理器。',
          '语音：使用多种语音识别和语音合成模型的免提聊天、唤醒词支持和实时通话模式；1.5.2 新增的语音胶囊仍属实验性功能。',
          '文档与记忆：与自己的文档对话、用 # 前缀读取网站、网页搜索，以及跨聊天的长期记忆；1.6.0 新增了可浏览的新记忆。',
          '工具：粘贴 JSON 即可添加的 MCP 服务器、来自 Claude 和 Codex 的技能、扩展，以及向第三方提供 Newelle 自带工具的 MCP 服务器。',
          '自动化：由 AI 建议的终端命令、计划任务、子代理模板，以及可通过 Telegram 或 API 控制 Newelle 的接口。',
          '图像与文件：用 Stable Diffusion 或第三方服务生成图像、图像输入、内置文件管理器和编辑器，以及设定 Newelle 可读取或编辑哪些文件的权限。',
          '聊天管理：多个聊天、工作区、文件夹、从任意消息分支、编辑、草稿、Markdown 和 LaTeX 渲染，以及用 Ctrl+G 呼出的迷你窗口。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**提示内容发往何处取决于你所选的模型：云端模型会把它们发送到服务商的服务器，本地模型则在你自己的电脑上运行。** PromptQuorum 没有检查网络流量，因此无法确认没有其他数据离开这台设备。',
          'Flathub 页面显示，打包版本可以使用网络，并在沙盒中运行，可访问显示、音频和图形设备，没有主目录或会话总线访问权限。README 称 Flathub 版本被限制在自己的数据目录内，并介绍了两种放宽方式：授予主目录访问权限，以及允许与 Flatpak 宿主通信，这样 AI 就能在沙盒之外执行命令。',
          'README 警告，这些选项会暴露你的数据和终端，从而降低安全性，且维护者无法保证聊天数据的隐私，也无法保证专有模型的风险。它还提到一项文件权限功能，用来设定 Newelle 可读取或编辑哪些文件。',
          'PromptQuorum 在网站和仓库中都没有找到隐私政策页面。GitHub 仓库中的清单文件列出了主目录和 Flatpak 宿主访问权限，而 Flathub 元数据没有显示；PromptQuorum 没有核实每个构建实际授予什么。代码采用 GPL-3.0 并公开，因此数据流向可以审计。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Newelle 适合想用一个免费开源助手对接多家服务商和本地模型的 Linux 桌面用户。**',
        ],
        items: [
          '想在一个 Flatpak 聊天应用里同时用本地模型、语音和文档对话的 Linux 用户。',
          '想把 MCP 服务器、技能或自己的扩展接入桌面助手的人。',
          '希望按聊天或配置文件在云端服务商和本地模型之间切换的用户。',
          '更看重代码和许可证公开的读者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**Newelle 在某些情况下并不合适，也有若干细节尚未核实。**',
        ],
        items: [
          '不适合：Windows 用户，以及需要成熟 Mac 或移动应用的人。网站提供 Flathub 和标注为测试版的 macOS 页面；PromptQuorum 没有找到 Windows 或移动版本。',
          '未核实：速度、内存占用、回答质量、语音准确度、图像质量和文档搜索质量。PromptQuorum 没有运行过该应用。',
          '未核实：目前支持哪些 AI 服务商和本地模型。PromptQuorum 没有逐页查看文档。',
          '未核实：macOS 测试版是否经过签名或公证，以及它与 Linux 版有何不同。',
          '未核实：Flathub 版本和仓库清单文件各自授予什么权限，以及使用云端服务商时对话数据如何处理。',
          '未核实：谁在运营该项目、位于哪个国家、有多少人在使用。没有找到公司、法律声明或隐私政策，PromptQuorum 也没有查找独立点评。',
          '未核实：网站所列的 Whisper 听写、Kokoro 语音和混合文档搜索等功能是否如描述那样工作。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Newelle 与替代方案对比',
        itemHeadings: true,
        content: [
          '**Newelle 与其他支持本地和云端模型的桌面聊天应用竞争；PromptQuorum 没有实际与它们对比过。** 下列工具均在目录中，依据各自的点评进行描述。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'Newelle', '来源中的记载': 'GPL-3.0；Linux（Flathub）；免费；语音和 MCP' },
          { '工具': '[LM Studio](/zh/power-local-llm/lm-studio-review)', '来源中的记载': '专有，免费；Mac/Windows/Linux；模型浏览器' },
          { '工具': '[Jan](/zh/power-local-llm/jan-review)', '来源中的记载': 'Apache 2.0（变体）；Mac/Windows/Linux；离线聊天' },
          { '工具': '[GPT4All](/zh/power-local-llm/gpt4all-review)', '来源中的记载': 'MIT；Mac/Windows/Linux；本地聊天，支持纯 CPU' },
          { '工具': '[AnythingLLM](/zh/power-local-llm/anythingllm-review)', '来源中的记载': 'MIT；Mac/Windows/Linux；文档对话，向量库' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Newelle 能在 Windows 或 Mac 上运行吗？',
            a: '网站菜单中没有 Windows 版本。其 macOS 页面列出了标注为测试版的 Newelle.app.zip，版本 1.3.7，日期为 2026 年 4 月 21 日，而 Linux 版本是 1.6.1。PromptQuorum 没有测试其中任何一个。',
          },
          {
            q: 'Newelle 能在我的电脑上执行命令吗？',
            a: '可以，根据 README，它能执行 AI 建议的命令。根据 README，除非授予主目录或 Flatpak 宿主访问权限，Flathub 版本被限制在自己的数据目录内；README 称授予宿主访问权限会降低安全性。GitHub 清单文件列出了宿主访问权限，而 Flathub 元数据没有；PromptQuorum 没有核实实际适用哪一种。',
          },
          {
            q: '我可以添加自己的工具或扩展吗？',
            a: '可以，据开发者所称：扩展可以添加模型和功能，文档介绍了如何开发扩展或工具，MCP 服务器可通过粘贴 JSON 添加。',
          },
          {
            q: '如何打开迷你窗口或语音胶囊？',
            a: '在 Newelle 打开时按 Ctrl+G，或使用 --mini 选项启动，并把该命令绑定到快捷键。根据发布说明，newelle --voice 会显示实验性的语音胶囊。',
          },
          {
            q: 'Newelle 多久更新一次？',
            a: 'GitHub 列出的发布有：1.4.5（2026 年 6 月 19 日）、1.5.0（8 月 19 日）、1.6.0（10 月 15 日）和 1.6.1（11 月 2 日）。通过 Flathub 安装的版本由软件中心更新。',
          },
          {
            q: 'Newelle 可以免费使用吗？',
            a: '根据 README 和官网，可以：Newelle 以 GPL-3.0 开源，可免费使用。你连接的云端 AI 服务商会按各自条款另行收费，本地模型则需在应用之外另行下载。PromptQuorum 没有核实各服务商的具体价格。',
          },
          {
            q: 'Newelle 可以在本地运行模型吗？',
            a: '可以，根据 README：它可以下载本地模型，并通过 Llama.cpp 或 Ollama 运行。官方没有公布最低内存或 GPU 要求；1.6.0 的发布说明称，模型下载器会估算某个模型是否适合运行。PromptQuorum 没有用它运行过本地模型。',
          },
          {
            q: '我的提示词会发送到哪里？',
            a: '取决于你选择的模型。使用云端服务商时，提示词会发送到其服务器；使用本地模型时，则在你自己的电脑上运行。README 称维护者无法保证你的聊天数据隐私。PromptQuorum 没有找到隐私政策页面，也没有检查网络流量。',
          },
          {
            q: '如何安装 Newelle？',
            a: '在 Linux 上，项目把 Flathub 列为推荐方式：执行 flatpak install flathub io.github.qwersyk.Newelle，或使用已启用 Flathub 的软件中心。GitHub 发布页没有可下载的文件。README 还介绍了用 install.sh 或 GNOME Builder 从源码构建。PromptQuorum 没有运行安装程序。',
          },
          {
            q: 'Newelle 支持语音吗？',
            a: '根据 README，支持：可以用多种语音转文字和文字转语音模型进行免提聊天，支持唤醒词，还有实时通话模式。官网提到 Whisper 听写和 Kokoro 语音合成。语音胶囊仍属实验性功能，PromptQuorum 没有核实语音的准确度。',
          },
          {
            q: '我可以和自己的文档对话吗？',
            a: '根据 README，可以：Newelle 可以与你自己的文档对话，并可用 # 前缀读取网站内容。官网还提到向量与关键词结合的混合文档搜索。以上均为开发者的说法，PromptQuorum 没有核实搜索质量。',
          },
          {
            q: 'Newelle 支持 MCP 吗？',
            a: '支持，根据 README：MCP 服务器通过粘贴其 JSON 添加。README 还提到来自 Claude 和 Codex 的技能，1.6.0 的发布说明则新增了面向第三方的、包含 Newelle 自身工具的 MCP 服务器。PromptQuorum 没有测试过任何 MCP 服务器。',
          },
          {
            q: 'Newelle 由谁开发，还在维护吗？',
            a: 'Flathub 将开发者列为 Qwersyk，GitHub 仓库创建于 2023 年 6 月。最新版本 1.6.1 发布于 2026 年 11 月 2 日，master 分支的最后一次提交在 2026 年 11 月 6 日。PromptQuorum 没有找到公司、法律声明或隐私政策，因此无法说明该项目位于哪个国家。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你使用 Linux，想要一款能对接多家服务商和本地模型、并提供语音、文档对话和工具的免费开源助手，Newelle 值得一试。**',
          '从纸面上看，它功能覆盖很广，开发也很活跃：1.6.1 版发布于 2026 年 11 月 2 日，最近一次提交在 2026 年 11 月 6 日。Flathub 页面显示它是没有主目录访问权限的沙盒版本，而 GitHub 清单文件列出了宿主访问权限；PromptQuorum 没有检查各个构建实际授予了哪些权限。',
          '代价也很实在：没有找到隐私政策、公司或法律声明，macOS 版本仍是测试版，PromptQuorum 也没有测试过任何功能。建议先从小型本地模型开始，请在 Flatpak 权限中（例如用 Flatseal）确认已安装的构建实际授予了什么，并在依赖它之前确认语音、文档和工具是否满足你的使用需求。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Newelle 官网](https://newelle.qsk.me) — 功能、安装途径和 macOS 页面，2026 年 11 月 18 日核查。',
          '[发布说明](https://newelle.qsk.me/releases) — 1.6.1 和 1.6.0 版说明，2026 年 11 月 18 日核查。',
          '[macOS 发布](https://newelle.qsk.me/macos/releases) — 测试版构建 1.3.7，2026 年 11 月 18 日核查。',
          '[Flathub 页面](https://flathub.org/apps/io.github.qwersyk.Newelle) — 软件包、许可证、版本和沙盒权限，2026 年 11 月 18 日核查。',
          '[GitHub 仓库](https://github.com/qwersyk/Newelle) — 许可证、创建日期和最近一次提交，2026 年 11 月 18 日核查。',
          '[README](https://github.com/qwersyk/Newelle#readme) — 功能、安装和权限说明，2026 年 11 月 18 日核查。',
          '[GitHub 发布](https://github.com/qwersyk/Newelle/releases) — 发布日期，2026 年 11 月 18 日核查。',
          '[文档](https://newelle.qsk.me/docs) — 扩展、工具和 MCP 指南，2026 年 11 月 18 日核查。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[LM Studio 点评](/zh/power-local-llm/lm-studio-review) — 内置模型浏览器和服务器模式的桌面应用。',
          '[Jan 点评](/zh/power-local-llm/jan-review) — 以离线为先的开源桌面聊天应用。',
          '[GPT4All 点评](/zh/power-local-llm/gpt4all-review) — 对新手友好、对纯 CPU 支持良好的本地聊天应用。',
          '[AnythingLLM 点评](/zh/power-local-llm/anythingllm-review) — 内置向量库的文档对话工具。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/newelle-review-hero-ko.webp',
    title: 'Newelle 리뷰: Linux용 무료 오픈소스 AI 앱',
    seoTitle: 'Newelle 리뷰: 무료 Linux AI 어시스턴트',
    intro:
      'Newelle 1.6.1은 Linux 데스크톱용 무료 채팅 어시스턴트로, GPL-3.0 라이선스입니다. 클라우드 AI 제공업체(요금은 제공업체에 별도로 냅니다)에 연결하거나 Llama.cpp 또는 Ollama로 로컬 모델을 실행할 수 있습니다. README에 따르면 음성 입출력, 내 문서와의 대화, MCP 도구, 장기 기억, 웹 검색, 터미널 명령 실행을 지원하며 Flathub에서 설치합니다. 이 리뷰는 공식 웹사이트, GitHub 저장소와 릴리스 노트, Flathub 페이지를 바탕으로 2026년 11월 18일에 확인했습니다. PromptQuorum은 이 앱을 직접 사용해 보지 않았습니다.',
    metaDescription:
      'Newelle은 로컬 모델, 음성, 문서 채팅, MCP를 지원하는 무료 GPL-3.0 Linux AI 어시스턴트로 Flathub에서 설치합니다. 확인된 점과 확인하지 못한 점.',
    twitterDescription:
      'Newelle: 로컬 모델, 음성, 문서 채팅, MCP 도구를 지원하는 무료 Linux AI 어시스턴트. GPL-3.0, Flathub로 설치, macOS 버전은 아직 베타. 확인된 내용.',
    audience:
      '로컬 모델과 음성 기능을 갖춘 무료 오픈소스 AI 어시스턴트를 찾는 Linux 데스크톱 사용자, 내 문서와 대화하고 싶은 분, 커뮤니티가 개발하는 프로젝트를 검토하는 분',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Newelle 리뷰',
    targetKeywords: [
      'Newelle 리뷰',
      'Linux AI 어시스턴트',
      'Newelle Flatpak',
      '오픈소스 AI 어시스턴트 Linux',
      'Newelle Ollama',
      '로컬 LLM Linux 데스크톱 앱',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Newelle은 Linux 데스크톱용 무료 오픈소스(GPL-3.0) AI 어시스턴트로, 클라우드 제공업체(요금은 제공업체에 별도로 냅니다)나 Llama.cpp 또는 Ollama로 실행하는 로컬 모델과 함께 사용할 수 있습니다.** Flathub에서 설치하며 음성, 문서 채팅, MCP 도구, 기억 기능을 더합니다. PromptQuorum은 직접 테스트하지 않았으며 개인정보 처리방침, 운영 회사, 법적 고지는 찾지 못했습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Newelle은 무엇이고 누구에게 적합합니까?',
        answer:
          'Newelle은 GitHub에서 공개적으로 개발되는 채팅 어시스턴트로 Flatpak으로 패키징되어 있습니다. 여러 AI 제공업체와 로컬 모델을 하나의 앱으로 쓰고, 음성, 문서 채팅, 직접 통제할 수 있는 도구도 원하는 Linux 데스크톱 사용자에게 적합합니다.',
        bullets: [
          '무료이며 GPL-3.0 라이선스입니다. Linux가 중심이며, 웹사이트가 베타로 표시한 macOS 버전도 있습니다.',
          '여러 제공업체와 채팅하거나, 내려받은 로컬 모델을 Llama.cpp 또는 Ollama로 실행합니다.',
          '음성 입출력, 실시간 통화 모드, 내 문서와의 채팅을 지원합니다.',
          '확장 기능, Claude와 Codex 방식의 스킬, MCP 서버, 예약 작업을 지원합니다.',
          '저장소는 2023년 6월에 만들어졌으며 1.6.1 버전은 2026년 11월 2일에 출시되었습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '설치 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보 보호와 데이터 흐름', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '대안', anchor: 'alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Newelle은 클라우드 제공업체(요금은 별도)나 로컬 모델과 대화하며 음성, 문서 채팅, 도구를 더한 Linux 데스크톱용 무료 오픈소스 AI 어시스턴트입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Linux 데스크톱의 채팅 창에서 온라인 제공업체와 내 컴퓨터에 내려받은 모델 중 어느 쪽이 답할지 고르는 방식이라고 생각하면 됩니다. 음성을 듣고 말하고, 문서를 읽고, 허용한 도구를 실행할 수도 있습니다.',
          },
        ],
        items: [
          'Flathub에서 명령 하나 또는 소프트웨어 센터로 설치합니다. Flathub 페이지에는 네트워크 접근이 표시되지만 홈 폴더 접근은 표시되지 않습니다.',
          '로컬 모델은 Llama.cpp 또는 Ollama로 실행됩니다. 최소 메모리는 공개되어 있지 않지만, 1.6.0 릴리스 노트에 따르면 모델 다운로더가 모델이 들어갈지 추정해 줍니다.',
          '1.6.0 버전에서 워크스페이스, 서브에이전트, 새로운 장기 기억, 사용량 추적, 제3자를 위한 Newelle 자체 도구 MCP 서버가 추가되었습니다.',
          'macOS 버전이 있지만 베타로 표시되어 있어 주 대상은 Linux입니다.',
          'PromptQuorum은 앱을 테스트하지 않았으므로 속도, 답변 품질, 음성 정확도는 확인되지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'README는 Newelle에 홈 폴더나 Flatpak 호스트 접근을 허용하면 보안이 낮아지며, 유지관리자가 채팅 데이터의 프라이버시나 독점 모델의 위험을 보장할 수 없다고 경고합니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Newelle은 Linux 데스크톱용 GPL-3.0 채팅 어시스턴트로, GNOME 런타임 기반 Flatpak으로 배포됩니다.**',
          '[github.com/qwersyk/Newelle](https://github.com/qwersyk/Newelle)에서 공개 개발되며 [Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)에는 개발자 이름 Qwersyk의 “AI chatbot”으로 등록되어 있습니다. 저장소는 2023년 6월에 만들어졌습니다. 최신 릴리스 1.6.1은 2026년 11월 2일에 나왔고 master 브랜치의 마지막 커밋은 2026년 11월 6일이므로 개발이 활발하며 방치된 프로젝트 경고는 해당하지 않습니다. PromptQuorum은 회사, 주소, 법적 고지를 찾지 못했기 때문에 프로젝트가 어느 나라에 기반을 두고 있는지 말할 수 없습니다.',
          'README에 따르면 Newelle은 여러 AI 제공업체와의 채팅, 내려받을 수 있는 로컬 모델, 음성 입출력, 실시간 통화 모드, 문서와의 채팅, 이미지 생성, 웹 검색, 내장 파일 관리자, 터미널 명령 실행을 결합하고, 확장 시스템과 단축키로 여는 미니 창도 제공합니다. 웹사이트에는 Whisper 받아쓰기, Kokoro 음성 합성, 벡터와 키워드를 함께 쓰는 하이브리드 문서 검색도 나와 있으며, 이는 개발자의 설명입니다.',
          'PromptQuorum은 앱을 실행하지 않았고 속도, 답변 품질, 음성 정확도, 문서 검색 품질은 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Linux에서는 Flathub로 Newelle을 설치하며, 프로젝트가 권장하는 방법입니다. Flathub를 켠 소프트웨어 센터로도 설치할 수 있습니다.**',
          'GitHub 릴리스에는 내려받을 파일이 없으므로 패키지된 경로는 Flathub입니다. README에는 install.sh 또는 GNOME Builder로 소스에서 빌드하는 방법과 GitHub Actions의 개발 빌드도 설명되어 있으며, 후자는 번역이 동작하지 않는다고 경고합니다.',
        ],
        columns: ['방법', '설치 방법'],
        rows: [
          { '방법': '[Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)', '설치 방법': 'flatpak install flathub io.github.qwersyk.Newelle' },
          { '방법': '[웹사이트](https://newelle.qsk.me)', '설치 방법': '공식 사이트: 문서, 확장 기능, 릴리스 노트' },
          { '방법': '[macOS(베타)](https://newelle.qsk.me/macos)', '설치 방법': 'Newelle.app.zip, 베타로 표시' },
          { '방법': '[소스](https://github.com/qwersyk/Newelle)', '설치 방법': 'sh install.sh(GNOME SDK) 또는 GNOME Builder' },
        ],
        note: '웹사이트와 저장소 어디에서도 개인정보 처리방침 페이지를 찾지 못했습니다. 2026년 11월 18일에 PromptQuorum이 [newelle.qsk.me/privacy](https://newelle.qsk.me/privacy), [newelle.qsk.me/privacy-policy](https://newelle.qsk.me/privacy-policy), [newelle.qsk.me/terms](https://newelle.qsk.me/terms), [newelle.qsk.me/about](https://newelle.qsk.me/about), [newelle.qsk.me/imprint](https://newelle.qsk.me/imprint) 및 [newelle.qsk.me/contact](https://newelle.qsk.me/contact)에 요청했으며, 모두 “404 Not Found”를 반환했습니다. [GitHub 저장소](https://github.com/qwersyk/Newelle)의 파일 목록에도 개인정보, 이용약관, 법적 고지 파일은 없습니다. PromptQuorum은 설치 프로그램을 실행하지 않았습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**Newelle에는 Flatpak과 Flathub를 설정한 Linux 데스크톱이 필요하며, 하드웨어 요구 사항은 클라우드 제공업체를 쓰는지 로컬 모델을 쓰는지에 따라 달라집니다.**',
          '목록은 README와 Flathub 페이지를 바탕으로 합니다. 로컬 모델의 최소 메모리나 GPU는 공개되어 있지 않으며, 1.6.0 릴리스 노트에 따르면 모델 다운로더가 모델이 들어갈지 추정합니다. PromptQuorum은 메모리 사용량이나 속도를 측정하지 않았습니다.',
        ],
        columns: ['항목', '명시된 내용'],
        rows: [
          { '항목': '시스템', '명시된 내용': 'Flatpak과 Flathub를 쓰는 Linux' },
          { '항목': '아키텍처', '명시된 내용': 'x86_64 및 aarch64(Flathub)' },
          { '항목': '런타임', '명시된 내용': 'GNOME Platform 50(Flathub)' },
          { '항목': 'Flathub 크기', '명시된 내용': '다운로드 약 336 MB, 설치 시 935 MB' },
          { '항목': '로컬 모델', '명시된 내용': 'Llama.cpp 또는 Ollama, 최소 사양 미공개' },
          { '항목': '소스에서 빌드', '명시된 내용': '최신 GNOME SDK 또는 GNOME Builder' },
        ],
        note: '크기는 2026년 11월 18일 Flathub 요약을 바탕으로 하며 릴리스마다 달라집니다. 로컬 모델은 별도로 내려받아야 합니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Newelle의 중심은 모델을 고를 수 있는 채팅 어시스턴트이고, 음성, 문서, 도구, 자동화가 그 주변을 채웁니다.** 아래 항목은 모두 README와 릴리스 노트에 나온 개발자의 설명입니다.',
        ],
        items: [
          '모델: 여러 AI 제공업체와 Llama.cpp 또는 Ollama로 실행하는 로컬 모델, 프로필별로 설정을 따로 보관하는 프로필 관리자.',
          '음성: 다양한 음성 인식·합성 모델을 쓰는 핸즈프리 채팅, 호출어 지원, 실시간 통화 모드. 1.5.2에서 추가된 음성 알약(voice pill)은 아직 실험적입니다.',
          '문서와 기억: 내 문서와의 채팅, # 접두사로 웹사이트 읽기, 웹 검색, 채팅 간 장기 기억. 1.6.0에서 새로운 탐색형 기억이 추가되었습니다.',
          '도구: JSON을 붙여 넣어 추가하는 MCP 서버, Claude와 Codex의 스킬, 확장 기능, 제3자를 위한 Newelle 자체 도구 MCP 서버.',
          '자동화: AI가 제안하는 터미널 명령, 예약 작업, 서브에이전트 템플릿, Telegram이나 API로 Newelle을 제어하는 인터페이스.',
          '이미지와 파일: Stable Diffusion 또는 외부 서비스를 이용한 이미지 생성, 이미지 입력, 내장 파일 관리자와 편집기, Newelle이 읽거나 편집할 수 있는 파일을 정하는 권한 설정.',
          '채팅 관리: 여러 채팅, 워크스페이스, 폴더, 어느 메시지에서든 분기, 편집, 임시 저장, Markdown과 LaTeX 렌더링, Ctrl+G로 여는 미니 창.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**프롬프트가 어디로 가는지는 선택한 모델에 달려 있습니다. 클라우드 모델은 제공업체 서버로 보내고, 로컬 모델은 내 컴퓨터에서 실행됩니다.** PromptQuorum은 네트워크 트래픽을 확인하지 않았으므로 그 밖의 데이터가 기기 밖으로 나가지 않는다고 확인할 수 없습니다.',
          'Flathub 페이지에 따르면 패키지 버전은 네트워크를 사용할 수 있고, 화면·오디오·그래픽에 접근하는 샌드박스에서 실행되며 홈 폴더나 세션 버스에는 접근하지 않습니다. README에 따르면 Flathub 버전은 자체 데이터 폴더로 제한되며, 이를 넓히는 방법으로 홈 폴더 접근과 Flatpak 호스트와 통신할 권한 두 가지를 설명합니다. 후자를 허용하면 AI가 샌드박스 밖에서 명령을 실행할 수 있습니다.',
          'README는 이런 옵션이 데이터와 터미널을 노출해 보안을 낮추며, 유지관리자가 채팅 데이터의 프라이버시나 독점 모델의 위험을 보장할 수 없다고 경고합니다. 또한 Newelle이 읽거나 편집할 수 있는 파일을 정하는 파일 권한 기능도 언급합니다.',
          'PromptQuorum은 웹사이트와 저장소 어디에서도 개인정보 처리방침 페이지를 찾지 못했습니다. GitHub 저장소의 매니페스트에는 홈 폴더와 Flatpak 호스트 접근이 나와 있지만 Flathub 메타데이터에는 표시되지 않으며, 각 빌드가 실제로 무엇을 허용하는지는 확인하지 않았습니다. 코드는 GPL-3.0으로 공개되어 있어 데이터 흐름을 감사할 수 있습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Newelle은 여러 제공업체와 로컬 모델에 쓸 수 있는 무료 오픈소스 어시스턴트를 원하는 Linux 데스크톱 사용자에게 적합합니다.**',
        ],
        items: [
          '로컬 모델, 음성, 문서 채팅을 한곳에서 쓰는 Flatpak 채팅 앱을 원하는 Linux 사용자.',
          'MCP 서버, 스킬, 직접 만든 확장 기능을 데스크톱 어시스턴트에 연결하려는 분.',
          '채팅이나 프로필마다 클라우드 제공업체와 로컬 모델을 골라 쓰고 싶은 사용자.',
          '코드와 라이선스가 공개된 프로젝트를 선호하는 독자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Newelle은 맞지 않는 상황이 있으며, 확인하지 못한 세부 사항도 여러 가지 남아 있습니다.**',
        ],
        items: [
          '적합하지 않음: Windows 사용자, 완성도 높은 Mac 또는 모바일 앱이 필요한 분. 웹사이트에는 Flathub와 베타로 표시된 macOS 페이지가 있으며, PromptQuorum은 Windows나 모바일 빌드를 찾지 못했습니다.',
          '확인하지 못함: 속도, 메모리 사용량, 답변 품질, 음성 정확도, 이미지 품질, 문서 검색 품질. PromptQuorum은 앱을 실행하지 않았습니다.',
          '확인하지 못함: 현재 어떤 AI 제공업체와 로컬 모델을 지원하는지. PromptQuorum은 문서를 페이지별로 살펴보지 않았습니다.',
          '확인하지 못함: macOS 베타가 서명 또는 공증되었는지, Linux 버전과 어떻게 다른지.',
          '확인하지 못함: Flathub 빌드와 저장소 매니페스트가 각각 무엇을 허용하는지, 클라우드 제공업체를 쓸 때 대화 데이터가 어떻게 처리되는지.',
          '확인하지 못함: 프로젝트를 누가 운영하는지, 어느 나라에 기반을 두는지, 사용자가 몇 명인지. 회사, 법적 고지, 개인정보 처리방침을 찾지 못했고 PromptQuorum은 독립적인 리뷰도 찾아보지 않았습니다.',
          '확인하지 못함: 웹사이트에 나온 Whisper 받아쓰기, Kokoro 음성, 하이브리드 문서 검색 등의 기능이 설명대로 동작하는지.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Newelle과 대안 비교',
        itemHeadings: true,
        content: [
          '**Newelle은 로컬 및 클라우드 모델을 쓰는 다른 데스크톱 채팅 앱과 경쟁합니다. PromptQuorum은 이들과 직접 비교해 보지 않았습니다.** 아래 도구는 디렉터리에 있으며 각자의 리뷰를 바탕으로 설명합니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'Newelle', '출처에 기재된 내용': 'GPL-3.0, Linux(Flathub), 무료, 음성과 MCP' },
          { '도구': '[LM Studio](/ko/power-local-llm/lm-studio-review)', '출처에 기재된 내용': '독점, 무료, Mac/Windows/Linux, 모델 브라우저' },
          { '도구': '[Jan](/ko/power-local-llm/jan-review)', '출처에 기재된 내용': 'Apache 2.0(변형), Mac/Windows/Linux, 오프라인 채팅' },
          { '도구': '[GPT4All](/ko/power-local-llm/gpt4all-review)', '출처에 기재된 내용': 'MIT, Mac/Windows/Linux, CPU에서도 쓰는 로컬 채팅' },
          { '도구': '[AnythingLLM](/ko/power-local-llm/anythingllm-review)', '출처에 기재된 내용': 'MIT, Mac/Windows/Linux, 문서 채팅, 벡터 저장소' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Newelle은 Windows나 Mac에서 실행됩니까?',
            a: '웹사이트 메뉴에는 Windows 빌드가 없습니다. macOS 페이지에는 베타로 표시된 Newelle.app.zip, 버전 1.3.7(2026년 4월 21일)이 나와 있으며, Linux 버전은 1.6.1입니다. PromptQuorum은 둘 다 테스트하지 않았습니다.',
          },
          {
            q: 'Newelle이 내 컴퓨터에서 명령을 실행할 수 있습니까?',
            a: '네, README에 따르면 AI가 제안한 명령을 실행할 수 있습니다. README에 따르면 홈 폴더나 Flatpak 호스트 접근을 허용하지 않는 한 Flathub 버전은 자체 데이터 폴더로 제한되며, README는 호스트 접근이 보안을 낮춘다고 설명합니다. GitHub 매니페스트에는 호스트 접근이 나와 있지만 Flathub 메타데이터에는 없으며, 실제로 어느 쪽이 적용되는지는 PromptQuorum이 확인하지 않았습니다.',
          },
          {
            q: '직접 만든 도구나 확장 기능을 추가할 수 있습니까?',
            a: '네, 개발자에 따르면 확장 기능으로 모델과 기능을 추가할 수 있고, 문서에 확장 기능이나 도구를 만드는 방법이 설명되어 있으며, MCP 서버는 JSON을 붙여 넣어 추가할 수 있습니다.',
          },
          {
            q: '미니 창이나 음성 알약은 어떻게 엽니까?',
            a: 'Newelle이 열려 있을 때 Ctrl+G를 누르거나 --mini 옵션으로 실행하고 그 명령을 단축키에 연결합니다. 릴리스 노트에 따르면 newelle --voice로 실험적인 음성 알약이 표시됩니다.',
          },
          {
            q: 'Newelle은 얼마나 자주 업데이트됩니까?',
            a: 'GitHub에는 1.4.5(2026년 6월 19일), 1.5.0(8월 19일), 1.6.0(10월 15일), 1.6.1(11월 2일) 릴리스가 나와 있습니다. Flathub로 설치한 경우 소프트웨어 센터에서 업데이트됩니다.',
          },
          {
            q: 'Newelle은 무료로 사용할 수 있습니까?',
            a: 'README와 웹사이트에 따르면 그렇습니다. Newelle은 GPL-3.0 오픈소스이며 무료로 사용할 수 있습니다. 연결하는 클라우드 AI 제공업체는 각자의 약관에 따라 별도로 요금을 청구하며, 로컬 모델은 앱과 별도로 내려받습니다. 개별 제공업체의 요금은 PromptQuorum이 확인하지 않았습니다.',
          },
          {
            q: 'Newelle로 모델을 로컬에서 실행할 수 있습니까?',
            a: '네, README에 따르면 로컬 모델을 내려받아 Llama.cpp 또는 Ollama로 실행할 수 있습니다. 최소 메모리나 GPU 요건은 공개되어 있지 않으며, 1.6.0 릴리스 노트에 따르면 모델 다운로더가 모델이 들어맞는지 추정해 줍니다. 로컬 모델은 PromptQuorum이 실행해 보지 않았습니다.',
          },
          {
            q: '제 프롬프트는 어디로 전송됩니까?',
            a: '선택한 모델에 따라 다릅니다. 클라우드 제공업체는 자사 서버에서 프롬프트를 받고, 로컬 모델은 사용자의 컴퓨터에서 실행됩니다. README에 따르면 유지관리자는 채팅 데이터의 프라이버시를 보장할 수 없습니다. PromptQuorum은 개인정보 처리방침 페이지를 찾지 못했고 네트워크 트래픽도 점검하지 않았습니다.',
          },
          {
            q: 'Newelle은 어떻게 설치합니까?',
            a: 'Linux에서는 프로젝트가 Flathub를 권장 경로로 안내합니다. flatpak install flathub io.github.qwersyk.Newelle 명령을 쓰거나 Flathub를 활성화한 소프트웨어 센터를 이용합니다. GitHub 릴리스에는 내려받을 파일이 없습니다. README에는 install.sh 또는 GNOME Builder로 소스에서 빌드하는 방법도 나와 있습니다. 설치 프로그램은 PromptQuorum이 실행하지 않았습니다.',
          },
          {
            q: 'Newelle은 음성을 지원합니까?',
            a: 'README에 따르면 지원합니다. 여러 음성 인식·음성 합성 모델을 이용한 핸즈프리 채팅, 호출어 지원, 실시간 통화 모드가 있습니다. 웹사이트에는 Whisper 받아쓰기와 Kokoro 음성 합성이 언급되어 있습니다. 음성 알약은 아직 실험적이며, 음성 정확도는 PromptQuorum이 확인하지 않았습니다.',
          },
          {
            q: '내 문서와 채팅할 수 있습니까?',
            a: 'README에 따르면 가능합니다. Newelle은 사용자의 문서와 채팅할 수 있고, # 접두사로 웹사이트를 읽을 수 있습니다. 웹사이트에는 벡터 검색과 키워드 검색을 결합한 하이브리드 문서 검색도 언급되어 있습니다. 이는 개발자의 설명이며 검색 품질은 PromptQuorum이 확인하지 않았습니다.',
          },
          {
            q: 'Newelle은 MCP를 지원합니까?',
            a: '네, README에 따르면 MCP 서버는 JSON을 붙여 넣어 추가합니다. Claude와 Codex의 스킬도 언급되어 있으며, 1.6.0 릴리스 노트에는 제3자를 위해 Newelle 자체 도구를 제공하는 MCP 서버가 추가되었다고 나와 있습니다. MCP 서버는 PromptQuorum이 테스트하지 않았습니다.',
          },
          {
            q: 'Newelle은 누가 개발하며 아직 유지보수되고 있습니까?',
            a: 'Flathub에는 개발자가 Qwersyk로 나와 있고, GitHub 저장소는 2023년 6월에 만들어졌습니다. 최신 릴리스 1.6.1은 2026년 11월 2일에 나왔고 master 브랜치의 마지막 커밋은 2026년 11월 6일입니다. PromptQuorum은 회사, 법적 고지, 개인정보 처리방침을 찾지 못해 프로젝트가 어느 나라에 기반을 두는지 말할 수 없습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**Linux를 쓰면서 여러 제공업체와 로컬 모델에 쓸 수 있고 음성, 문서 채팅, 도구까지 더한 무료 오픈소스 어시스턴트를 원한다면 Newelle을 살펴볼 만합니다.**',
          '문서상으로는 폭넓은 기능을 갖추었고 개발도 활발합니다. 1.6.1 버전은 2026년 11월 2일, 커밋은 2026년 11월 6일에 있었습니다. Flathub 페이지는 홈 폴더 접근이 없는 샌드박스 빌드를 보여 주지만 GitHub 매니페스트에는 호스트 접근이 나와 있습니다. 각 빌드가 실제로 어떤 권한을 부여하는지는 PromptQuorum이 확인하지 않았습니다.',
          '단점도 분명합니다. 개인정보 처리방침, 회사, 법적 고지를 찾지 못했고, macOS 버전은 베타이며, PromptQuorum은 아무것도 테스트하지 않았습니다. 작은 로컬 모델로 시작하고 Flatseal 같은 도구로 설치된 빌드가 실제로 무엇을 허용하는지 Flatpak 권한에서 확인하고, 음성, 문서, 도구가 내 용도에 맞게 동작하는지 확인한 뒤에 의존하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Newelle 웹사이트](https://newelle.qsk.me) — 기능, 설치 경로, macOS 페이지. 2026년 11월 18일 확인.',
          '[릴리스 노트](https://newelle.qsk.me/releases) — 1.6.1과 1.6.0 버전 노트. 2026년 11월 18일 확인.',
          '[macOS 릴리스](https://newelle.qsk.me/macos/releases) — 베타 빌드 1.3.7. 2026년 11월 18일 확인.',
          '[Flathub 페이지](https://flathub.org/apps/io.github.qwersyk.Newelle) — 패키지, 라이선스, 버전, 샌드박스 권한. 2026년 11월 18일 확인.',
          '[GitHub 저장소](https://github.com/qwersyk/Newelle) — 라이선스, 생성일, 마지막 커밋. 2026년 11월 18일 확인.',
          '[README](https://github.com/qwersyk/Newelle#readme) — 기능, 설치, 권한 관련 안내. 2026년 11월 18일 확인.',
          '[GitHub 릴리스](https://github.com/qwersyk/Newelle/releases) — 릴리스 날짜. 2026년 11월 18일 확인.',
          '[문서](https://newelle.qsk.me/docs) — 확장 기능, 도구, MCP 안내. 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review) — 모델 브라우저와 서버 모드를 내장한 데스크톱 앱.',
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 오프라인을 우선하는 오픈소스 데스크톱 채팅 앱.',
          '[GPT4All 리뷰](/ko/power-local-llm/gpt4all-review) — CPU만으로도 잘 동작하는 초보자 친화적 로컬 채팅 앱.',
          '[AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review) — 벡터 저장소를 내장한 문서 채팅.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/newelle-review-hero-ar.webp',
    title: 'مراجعة Newelle: مساعد ذكاء اصطناعي مجاني ومفتوح المصدر لنظام Linux مع نماذج محلية',
    seoTitle: 'مراجعة Newelle: مساعد ذكاء اصطناعي مجاني لـ Linux',
    intro:
      'Newelle 1.6.1 مساعد دردشة مجاني بترخيص GPL-3.0 لسطح مكتب Linux، يتصل بمزودي ذكاء اصطناعي سحابيين (يحاسبون بشكل منفصل) أو يشغّل نماذج محلية عبر Llama.cpp أو Ollama. وبحسب ملف README، يضيف إدخال الصوت وإخراجه، والدردشة مع مستنداتك، وأدوات MCP، وذاكرة طويلة الأمد، والبحث في الويب، وتنفيذ أوامر الطرفية، ويُثبَّت من Flathub. تستند هذه المراجعة إلى الموقع الرسمي ومستودع GitHub مع ملاحظات الإصدارات وصفحة Flathub، وتم التحقق منها في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'Newelle مساعد ذكاء اصطناعي مجاني بترخيص GPL-3.0 لـ Linux: نماذج محلية وصوت ودردشة مع المستندات وMCP، يُثبَّت من Flathub. ما تأكد وما لم يتأكد.',
    twitterDescription:
      'Newelle: مساعد ذكاء اصطناعي مجاني لـ Linux بنماذج محلية وصوت ودردشة مع المستندات وأدوات MCP. GPL-3.0، تثبيت من Flathub، ونسخة macOS لا تزال تجريبية. ما تأكد.',
    audience:
      'مستخدمو سطح مكتب Linux الذين يريدون مساعد ذكاء اصطناعي مجانيًا ومفتوح المصدر بنماذج محلية وميزات صوتية، ومن يريدون الدردشة مع مستنداتهم، ومن يقيّمون مشروعًا يطوره مجتمع مفتوح',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Newelle',
    targetKeywords: [
      'مراجعة Newelle',
      'مساعد ذكاء اصطناعي Linux',
      'Newelle Flatpak',
      'مساعد ذكاء اصطناعي مفتوح المصدر Linux',
      'Newelle Ollama',
      'تطبيق LLM محلي لسطح مكتب Linux',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Newelle مساعد ذكاء اصطناعي مجاني ومفتوح المصدر (GPL-3.0) لسطح مكتب Linux، يعمل مع مزودين سحابيين (يحاسبون بشكل منفصل) أو مع نماذج محلية تُشغَّل عبر Llama.cpp أو Ollama.** يُثبَّت من Flathub ويضيف الصوت والدردشة مع المستندات وأدوات MCP والذاكرة. لم تختبره PromptQuorum، ولم تجد سياسة خصوصية ولا شركة ولا بيانات قانونية.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Newelle ولمن هو؟',
        answer:
          'Newelle مساعد دردشة يُطوَّر علنًا على GitHub ويُوزَّع بصيغة Flatpak. يناسب مستخدمي سطح مكتب Linux الذين يريدون تطبيقًا واحدًا لعدة مزودي ذكاء اصطناعي ونماذج محلية، مع الصوت والدردشة مع المستندات وأدوات تحت سيطرتهم.',
        bullets: [
          'مجاني وبترخيص GPL-3.0؛ يركّز على Linux، مع نسخة macOS يصفها الموقع بأنها تجريبية.',
          'دردشة مع عدة مزودين، أو مع نماذج محلية منزّلة تُشغَّل عبر Llama.cpp أو Ollama.',
          'إدخال الصوت وإخراجه، ووضع مكالمة فوري، والدردشة مع مستنداتك.',
          'إضافات، ومهارات بأسلوب Claude وCodex، وخوادم MCP، ومهام مجدولة.',
          'أُنشئ المستودع في يونيو 2023؛ صدر الإصدار 1.6.1 في 2 نوفمبر 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'البدائل', anchor: 'alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Newelle مساعد ذكاء اصطناعي مجاني ومفتوح المصدر لسطح مكتب Linux، يتحدث مع مزودين سحابيين (يحاسبون بشكل منفصل) أو نماذج محلية ويضيف الصوت والدردشة مع المستندات والأدوات.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل نافذة دردشة على سطح مكتب Linux تختار فيها من يجيب: مزوّد عبر الإنترنت أو نموذج منزّل على حاسوبك. ويمكنه أيضًا الاستماع والتحدث وقراءة مستنداتك وتشغيل الأدوات التي تسمح بها.',
          },
        ],
        items: [
          'يُثبَّت من Flathub بأمر واحد أو عبر مركز البرامج؛ وتُظهر صفحة Flathub وصولًا إلى الشبكة لكن دون وصول إلى المجلد الرئيسي.',
          'تعمل النماذج المحلية عبر Llama.cpp أو Ollama؛ لا يُنشر حد أدنى للذاكرة، لكن منزّل النماذج يقدّر ما إذا كان النموذج سيتسع، بحسب ملاحظات الإصدار 1.6.0.',
          'أضاف الإصدار 1.6.0 مساحات عمل ووكلاء فرعيين وذاكرة طويلة الأمد جديدة وتتبعًا للاستخدام وخادم MCP يوفّر أدوات Newelle الخاصة لأطراف ثالثة.',
          'توجد نسخة macOS لكنها موسومة بأنها تجريبية، لذا فإن Linux هو الهدف الرئيسي.',
          'لم تختبر PromptQuorum التطبيق، لذا فإن السرعة وجودة الإجابات ودقة الصوت غير موثّقة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'يحذّر ملف README من أن منح Newelle وصولًا إلى مجلدك الرئيسي أو إلى مضيف Flatpak يقلل الأمان، ومن أن القائمين على المشروع لا يستطيعون ضمان خصوصية بيانات الدردشة ولا مخاطر النماذج المملوكة.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Newelle مساعد دردشة بترخيص GPL-3.0 لسطح مكتب Linux، يُوزَّع بصيغة Flatpak فوق بيئة تشغيل GNOME.**',
          'يُطوَّر علنًا على [github.com/qwersyk/Newelle](https://github.com/qwersyk/Newelle) ويُدرج في [Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) بوصفه «AI chatbot» باسم المطوّر Qwersyk؛ وأُنشئ المستودع في يونيو 2023. صدر أحدث إصدار، 1.6.1، في 2 نوفمبر 2026، وكان آخر commit على فرع master في 6 نوفمبر 2026، لذا فالتطوير نشط ولا ينطبق تحذير المشروع المتوقف. لم تجد PromptQuorum شركة ولا عنوانًا ولا بيانات قانونية، ولذلك لا تستطيع تحديد الدولة التي يقع فيها المشروع.',
          'بحسب README، يجمع Newelle بين الدردشة مع عدة مزودي ذكاء اصطناعي ونماذج محلية قابلة للتنزيل وإدخال الصوت وإخراجه ووضع مكالمة فوري والدردشة مع المستندات وتوليد الصور والبحث في الويب ومدير ملفات مدمجًا وتنفيذ أوامر الطرفية، مع نظام إضافات ونافذة مصغّرة تُفتح باختصار لوحة المفاتيح. ويضيف الموقع الإملاء عبر Whisper وتركيب الصوت عبر Kokoro وبحثًا هجينًا في المستندات (متجهي وبالكلمات المفتاحية)؛ وهذه أقوال المطوّر.',
          'لم تشغّل PromptQuorum التطبيق ولم تتحقق من السرعة أو جودة الإجابات أو دقة الصوت أو جودة البحث في المستندات.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**على Linux تثبّت Newelle من Flathub، وهو الطريق الذي يوصي به المشروع؛ ويمكن لمركز برامج مفعّل عليه Flathub تنفيذ ذلك.**',
          'لا تضم إصدارات GitHub ملفات للتنزيل، لذا فإن Flathub هو الطريق المحزَّم. ويصف README أيضًا بناءً من المصدر عبر install.sh أو GNOME Builder، وبناءات تطوير من GitHub Actions يحذّر من أن الترجمات لا تعمل فيها.',
        ],
        columns: ['الطريقة', 'كيف تحصل عليه'],
        rows: [
          { 'الطريقة': '[Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle)', 'كيف تحصل عليه': 'flatpak install flathub io.github.qwersyk.Newelle' },
          { 'الطريقة': '[الموقع](https://newelle.qsk.me)', 'كيف تحصل عليه': 'الموقع الرسمي: وثائق وإضافات وملاحظات إصدار' },
          { 'الطريقة': '[macOS (تجريبي)](https://newelle.qsk.me/macos)', 'كيف تحصل عليه': 'Newelle.app.zip، موسوم بأنه تجريبي' },
          { 'الطريقة': '[المصدر](https://github.com/qwersyk/Newelle)', 'كيف تحصل عليه': 'sh install.sh (مع GNOME SDK) أو GNOME Builder' },
        ],
        note: 'لم يُعثر على صفحة لسياسة الخصوصية في الموقع ولا في المستودع. في 18 نوفمبر 2026 طلبت PromptQuorum [newelle.qsk.me/privacy](https://newelle.qsk.me/privacy), [newelle.qsk.me/privacy-policy](https://newelle.qsk.me/privacy-policy), [newelle.qsk.me/terms](https://newelle.qsk.me/terms), [newelle.qsk.me/about](https://newelle.qsk.me/about), [newelle.qsk.me/imprint](https://newelle.qsk.me/imprint) و [newelle.qsk.me/contact](https://newelle.qsk.me/contact)، وأعادت جميعها «404 Not Found». ولا تحتوي قائمة ملفات [مستودع GitHub](https://github.com/qwersyk/Newelle) على ملف للخصوصية أو الشروط أو البيانات القانونية. لم تشغّل PromptQuorum برنامج التثبيت.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يحتاج Newelle إلى سطح مكتب Linux مع إعداد Flatpak وFlathub؛ وتعتمد متطلبات العتاد على استخدامك مزودين سحابيين أو نماذج محلية.**',
          'القائمة مأخوذة من README وصفحة Flathub. لا يُنشر حد أدنى للذاكرة أو لوحدة GPU للنماذج المحلية؛ وبحسب ملاحظات الإصدار 1.6.0 يقدّر منزّل النماذج ما إذا كان النموذج سيتسع. لم تقِس PromptQuorum استهلاك الذاكرة ولا السرعة.',
        ],
        columns: ['البند', 'القيمة المعلنة'],
        rows: [
          { 'البند': 'النظام', 'القيمة المعلنة': 'Linux مع Flatpak وFlathub' },
          { 'البند': 'المعماريات', 'القيمة المعلنة': 'x86_64 وaarch64 (Flathub)' },
          { 'البند': 'بيئة التشغيل', 'القيمة المعلنة': 'GNOME Platform 50 (Flathub)' },
          { 'البند': 'الحجم على Flathub', 'القيمة المعلنة': 'نحو 336 MB تنزيلًا و935 MB بعد التثبيت' },
          { 'البند': 'النماذج المحلية', 'القيمة المعلنة': 'Llama.cpp أو Ollama؛ لا حد أدنى معلن' },
          { 'البند': 'البناء من المصدر', 'القيمة المعلنة': 'أحدث GNOME SDK أو GNOME Builder' },
        ],
        note: 'الأحجام مأخوذة من ملخص Flathub بتاريخ 18 نوفمبر 2026 وتتغير مع كل إصدار. وتُنزَّل النماذج المحلية بالإضافة إلى ذلك.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**جوهر Newelle مساعد دردشة مع اختيار النموذج، ويحيط به الصوت والمستندات والأدوات والأتمتة.** كل ما يلي أقوال المطوّر من README وملاحظات الإصدارات.',
        ],
        items: [
          'النماذج: عدة مزودي ذكاء اصطناعي ونماذج محلية قابلة للتنزيل تعمل عبر Llama.cpp أو Ollama، مع مدير ملفات تعريف يحتفظ بإعدادات منفصلة لكل ملف تعريف.',
          'الصوت: دردشة دون استخدام اليدين مع نماذج كثيرة للتعرف على الكلام وتحويل النص إلى كلام، ودعم كلمة التنبيه ووضع مكالمة فوري؛ وما زالت «كبسولة الصوت» المضافة في 1.5.2 تجريبية.',
          'المستندات والذاكرة: دردشة مع مستنداتك، وقراءة المواقع ببادئة #، والبحث في الويب، وذاكرة طويلة الأمد عبر المحادثات مع ذاكرة جديدة قابلة للاستكشاف في 1.6.0.',
          'الأدوات: خوادم MCP تُضاف بلصق JSON الخاص بها، ومهارات من Claude وCodex، وإضافات، وخادم MCP يوفّر أدوات Newelle الخاصة لأطراف ثالثة.',
          'الأتمتة: أوامر طرفية تقترحها الذكاء الاصطناعي، ومهام مجدولة، وقوالب وكلاء فرعيين، وواجهات تتيح التحكم في Newelle عبر Telegram أو API.',
          'الصور والملفات: توليد صور عبر Stable Diffusion أو خدمات خارجية، وإدخال الصور، ومدير ملفات ومحرر مدمجان، وأذونات تحدد الملفات التي يجوز لـ Newelle قراءتها أو تعديلها.',
          'إدارة المحادثات: محادثات متعددة ومساحات عمل ومجلدات وتفرّع من أي رسالة وتحرير ومسودات وعرض Markdown وLaTeX ونافذة مصغّرة تُفتح بـ Ctrl+G.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**وجهة مدخلاتك تعتمد على النموذج الذي تختاره: النموذج السحابي يرسلها إلى خوادم المزوّد، والنموذج المحلي يعمل على حاسوبك.** لم تفحص PromptQuorum حركة الشبكة، لذا لا تستطيع تأكيد أنه لا يغادر الجهاز شيء آخر.',
          'تُظهر صفحة Flathub أن النسخة المحزَّمة تستطيع استخدام الشبكة وتعمل داخل بيئة معزولة مع وصول إلى الشاشة والصوت والرسوميات، دون وصول إلى المجلد الرئيسي أو ناقل الجلسة. وبحسب README تقتصر نسخة Flathub على مجلد بياناتها الخاص، ويصف طريقتين لتوسيع ذلك: الوصول إلى المجلد الرئيسي، وإذن التحدث مع مضيف Flatpak ليتمكن الذكاء الاصطناعي من تنفيذ أوامر خارج البيئة المعزولة.',
          'يحذّر README من أن هذه الخيارات تقلل الأمان لأنها تكشف بياناتك وطرفيتك، ومن أن القائمين على المشروع لا يستطيعون ضمان خصوصية بيانات الدردشة ولا مخاطر النماذج المملوكة. ويذكر أيضًا ميزة أذونات الملفات التي تحدد الملفات التي يجوز لـ Newelle قراءتها أو تعديلها.',
          'لم تجد PromptQuorum صفحة لسياسة الخصوصية لا في الموقع ولا في المستودع. ويذكر ملف manifest في مستودع GitHub وصولًا إلى المجلد الرئيسي وإلى مضيف Flatpak، بينما لا تُظهر بيانات Flathub أيًّا منهما؛ ولم تتحقق PromptQuorum مما يمنحه كل بناء فعليًا. الشيفرة بترخيص GPL-3.0 وعلنية، لذا يمكن تدقيق تدفق البيانات.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Newelle مستخدمي سطح مكتب Linux الذين يريدون مساعدًا مجانيًا ومفتوح المصدر لعدة مزودين ونماذج محلية.**',
        ],
        items: [
          'مستخدمو Linux الذين يريدون تطبيق دردشة بصيغة Flatpak يجمع النماذج المحلية والصوت والدردشة مع المستندات في مكان واحد.',
          'من يريدون ربط خوادم MCP أو المهارات أو إضافاتهم الخاصة بمساعد سطح مكتب.',
          'مستخدمون يفضلون الاختيار بين المزودين السحابيين والنماذج المحلية لكل محادثة أو ملف تعريف.',
          'قرّاء يفضلون مشروعًا شيفرته وترخيصه علنيان.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب Newelle بعض الحالات، وتبقى عدة تفاصيل غير موثّقة.**',
        ],
        items: [
          'غير مناسب: مستخدمو Windows ومن يحتاجون إلى تطبيق متقن لنظام Mac أو للجوال. يوفّر الموقع Flathub وصفحة macOS موسومة بأنها تجريبية، ولم تجد PromptQuorum بناءً لـ Windows ولا للجوال.',
          'غير موثّق: السرعة واستهلاك الذاكرة وجودة الإجابات ودقة الصوت وجودة الصور وجودة البحث في المستندات. لم تشغّل PromptQuorum التطبيق.',
          'غير موثّق: أي مزودي ذكاء اصطناعي ونماذج محلية مدعومة اليوم. لم تراجع PromptQuorum الوثائق صفحة صفحة.',
          'غير موثّق: هل نسخة macOS التجريبية موقَّعة أو موثَّقة (notarized)، وكيف تختلف عن نسخة Linux.',
          'غير موثّق: ما الذي يمنحه كل من بناء Flathub وملف manifest في المستودع، وكيف تُعالَج بيانات المحادثات عند استخدام مزوّد سحابي.',
          'غير موثّق: من يدير المشروع، وفي أي دولة يقع، وكم عدد مستخدميه. لم يُعثر على شركة أو بيانات قانونية أو سياسة خصوصية، ولم تبحث PromptQuorum عن مراجعات مستقلة.',
          'غير موثّق: هل تعمل الميزات المذكورة في الموقع، مثل إملاء Whisper وصوت Kokoro والبحث الهجين في المستندات، كما هو موصوف.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Newelle مقابل البدائل',
        itemHeadings: true,
        content: [
          '**ينافس Newelle تطبيقات دردشة سطح المكتب الأخرى للنماذج المحلية والسحابية؛ ولم تقارنه PromptQuorum بها عمليًا.** الأدوات التالية موجودة في الدليل وتُوصَف من مراجعاتها الخاصة.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'Newelle', 'المذكور في المصادر': 'GPL-3.0؛ Linux (Flathub)؛ مجاني؛ صوت وMCP' },
          { 'الأداة': '[LM Studio](/ar/power-local-llm/lm-studio-review)', 'المذكور في المصادر': 'مملوك، مجاني؛ Mac/Windows/Linux؛ متصفح نماذج' },
          { 'الأداة': '[Jan](/ar/power-local-llm/jan-review)', 'المذكور في المصادر': 'Apache 2.0 (نسخة معدّلة)؛ Mac/Windows/Linux؛ دردشة دون اتصال' },
          { 'الأداة': '[GPT4All](/ar/power-local-llm/gpt4all-review)', 'المذكور في المصادر': 'MIT؛ Mac/Windows/Linux؛ دردشة محلية تعمل على CPU' },
          { 'الأداة': '[AnythingLLM](/ar/power-local-llm/anythingllm-review)', 'المذكور في المصادر': 'MIT؛ Mac/Windows/Linux؛ دردشة مستندات، مخزن متجهات' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Newelle على Windows أو Mac؟',
            a: 'لا توفّر قائمة الموقع بناءً لـ Windows. وتسرد صفحة macOS الملف Newelle.app.zip موسومًا بأنه تجريبي، الإصدار 1.3.7 بتاريخ 21 أبريل 2026، بينما إصدار Linux هو 1.6.1. لم تختبر PromptQuorum أيًّا منهما.',
          },
          {
            q: 'هل يستطيع Newelle تنفيذ أوامر على حاسوبي؟',
            a: 'نعم، بحسب README يستطيع تنفيذ الأوامر التي يقترحها الذكاء الاصطناعي. بحسب README تقتصر نسخة Flathub على مجلد بياناتها ما لم تمنح وصولًا إلى المجلد الرئيسي أو إلى مضيف Flatpak، وهو ما يقلل الأمان بحسب README. يذكر manifest في GitHub وصولًا إلى المضيف بينما لا تُظهره بيانات Flathub، ولم تتحقق PromptQuorum أيهما ينطبق.',
          },
          {
            q: 'هل يمكنني إضافة أدواتي أو إضافاتي الخاصة؟',
            a: 'نعم، بحسب المطوّر: تضيف الإضافات نماذج وميزات، وتصف الوثائق كيفية بناء إضافة أو أداة، ويمكن إضافة خوادم MCP بلصق JSON الخاص بها.',
          },
          {
            q: 'كيف أفتح النافذة المصغّرة أو كبسولة الصوت؟',
            a: 'اضغط Ctrl+G أثناء فتح Newelle، أو شغّله بالخيار --mini واربط هذا الأمر باختصار لوحة مفاتيح. وبحسب ملاحظات الإصدار يعرض الأمر newelle --voice كبسولة الصوت التجريبية.',
          },
          {
            q: 'كم مرة يُحدَّث Newelle؟',
            a: 'يسرد GitHub الإصدار 1.4.5 في 19 يونيو، و1.5.0 في 19 أغسطس، و1.6.0 في 15 أكتوبر، و1.6.1 في 2 نوفمبر 2026. وتُحدَّث نسخ Flathub عبر مركز البرامج.',
          },
          {
            q: 'هل يمكن استخدام Newelle مجانًا؟',
            a: 'بحسب README والموقع، نعم: Newelle مفتوح المصدر بترخيص GPL-3.0 ويمكن استخدامه مجانًا. أما مزودو الذكاء الاصطناعي السحابيون الذين تربطهم به فيحاسبونك بشكل منفصل وفق شروطهم، وتُنزَّل النماذج المحلية إضافةً إلى التطبيق. لم تتحقق PromptQuorum من أسعار كل مزود.',
          },
          {
            q: 'هل يستطيع Newelle تشغيل النماذج محليًا؟',
            a: 'نعم، بحسب README: يمكنه تنزيل نماذج محلية وتشغيلها عبر Llama.cpp أو Ollama. لا يُنشر حد أدنى للذاكرة أو لوحدة GPU؛ وبحسب ملاحظات الإصدار 1.6.0 يقدّر أداة تنزيل النماذج ما إذا كان النموذج مناسبًا. لم تشغّل PromptQuorum أي نموذج محلي من خلاله.',
          },
          {
            q: 'إلى أين تذهب مطالباتي؟',
            a: 'يعتمد ذلك على النموذج الذي تختاره. يتلقى المزود السحابي مطالباتك على خوادمه، بينما يعمل النموذج المحلي على حاسوبك. بحسب README لا يستطيع القائمون على الصيانة ضمان خصوصية بيانات محادثاتك. لم تجد PromptQuorum صفحة لسياسة الخصوصية ولم تفحص حركة الشبكة.',
          },
          {
            q: 'كيف أثبّت Newelle؟',
            a: 'على Linux يذكر المشروع Flathub بوصفه الطريق الموصى به: flatpak install flathub io.github.qwersyk.Newelle، أو مركز برامج مفعّل فيه Flathub. لا تضم إصدارات GitHub ملفات قابلة للتنزيل. ويصف README أيضًا البناء من الشيفرة المصدرية عبر install.sh أو GNOME Builder. لم تشغّل PromptQuorum المثبّت.',
          },
          {
            q: 'هل يدعم Newelle الصوت؟',
            a: 'بحسب README، نعم: محادثة بلا استخدام اليدين مع نماذج متعددة لتحويل الكلام إلى نص والنص إلى كلام، ودعم كلمة التنبيه، ووضع مكالمة في الوقت الفعلي. ويذكر الموقع الإملاء عبر Whisper وتركيب الكلام عبر Kokoro. ما زالت كبسولة الصوت تجريبية، ولم تتحقق PromptQuorum من دقة الصوت.',
          },
          {
            q: 'هل يمكنني الدردشة مع مستنداتي؟',
            a: 'بحسب README، نعم: يستطيع Newelle الدردشة مع مستنداتك وقراءة موقع ويب عند استخدام البادئة #. ويضيف الموقع بحثًا هجينًا في المستندات يجمع بين المتجهات والكلمات المفتاحية. هذه أقوال المطوّر، ولم تتحقق PromptQuorum من جودة البحث.',
          },
          {
            q: 'هل يدعم Newelle بروتوكول MCP؟',
            a: 'نعم، بحسب README: تُضاف خوادم MCP بلصق JSON الخاص بها. كما يذكر مهارات من Claude وCodex، وتضيف ملاحظات الإصدار 1.6.0 خادم MCP لأدوات Newelle نفسه موجّهًا لأطراف ثالثة. لم تختبر PromptQuorum أي خادم MCP.',
          },
          {
            q: 'من يطوّر Newelle وهل ما زال يُصان؟',
            a: 'يذكر Flathub المطوّر Qwersyk، وأُنشئ مستودع GitHub في يونيو 2023. ظهر أحدث إصدار 1.6.1 في 2 نوفمبر 2026، وكان آخر commit في فرع master في 6 نوفمبر 2026. لم تجد PromptQuorum شركة أو بيانات قانونية أو سياسة خصوصية، فلا تستطيع القول في أي بلد يقع المشروع.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Newelle نظرة إذا كنت تستخدم Linux وتريد مساعدًا مجانيًا ومفتوح المصدر يعمل مع عدة مزودين ونماذج محلية ويضيف الصوت والدردشة مع المستندات والأدوات.**',
          'على الورق يغطي الكثير، والتطوير نشط: الإصدار 1.6.1 في 2 نوفمبر 2026 وcommit في 6 نوفمبر 2026. وتُظهر صفحة Flathub بناءً معزولًا دون وصول إلى المجلد الرئيسي، بينما يذكر manifest في GitHub وصولًا إلى المضيف؛ ولم تتحقق PromptQuorum مما يمنحه كل بناء.',
          'المقايضات حقيقية: لم تُوجد سياسة خصوصية ولا شركة ولا بيانات قانونية، ونسخة macOS تجريبية، ولم تختبر PromptQuorum شيئًا. ابدأ بنموذج محلي صغير، وتحقق من أذونات Flatpak، مثلًا عبر Flatseal، مما يمنحه البناء المثبّت لديك فعليًا، وتحقق من أن الصوت والمستندات والأدوات تعمل لاستخدامك قبل الاعتماد عليها.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Newelle](https://newelle.qsk.me) — الميزات وطرق التثبيت وصفحة macOS، جرى التحقق في 18 نوفمبر 2026.',
          '[ملاحظات الإصدارات](https://newelle.qsk.me/releases) — ملاحظات الإصدارين 1.6.1 و1.6.0، جرى التحقق في 18 نوفمبر 2026.',
          '[إصدارات macOS](https://newelle.qsk.me/macos/releases) — البناء التجريبي 1.3.7، جرى التحقق في 18 نوفمبر 2026.',
          '[صفحة Flathub](https://flathub.org/apps/io.github.qwersyk.Newelle) — الحزمة والترخيص والإصدارات وأذونات البيئة المعزولة، جرى التحقق في 18 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/qwersyk/Newelle) — الترخيص وتاريخ الإنشاء وآخر commit، جرى التحقق في 18 نوفمبر 2026.',
          '[README](https://github.com/qwersyk/Newelle#readme) — الميزات والتثبيت وملاحظات الأذونات، جرى التحقق في 18 نوفمبر 2026.',
          '[إصدارات GitHub](https://github.com/qwersyk/Newelle/releases) — تواريخ الإصدارات، جرى التحقق في 18 نوفمبر 2026.',
          '[الوثائق](https://newelle.qsk.me/docs) — أدلة الإضافات والأدوات وMCP، جرى التحقق في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review) — تطبيق سطح مكتب بمتصفح نماذج مدمج ووضع خادم.',
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — تطبيق دردشة مفتوح المصدر لسطح المكتب يركّز على العمل دون اتصال.',
          '[مراجعة GPT4All](/ar/power-local-llm/gpt4all-review) — تطبيق دردشة محلي مناسب للمبتدئين مع دعم جيد للعمل على CPU فقط.',
          '[مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review) — دردشة مع المستندات ومخزن متجهات مدمج.',
          '[دليل برامج LLM المحلية](/ar/directory) — الكتالوج الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
}

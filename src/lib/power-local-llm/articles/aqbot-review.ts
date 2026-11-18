// AQBot Review: Open-Source Desktop AI Client With Agents and a Local API Gateway
// Slug: aqbot-review
// Companion to: newelle-review, jan-review, cherry-studio-ai-desktop-client (local-llms), nativ-review
// Sources (all read 2026-11-18, no hands-on testing): official website app.aqbot.top (home page, /download, /faq, /guide/getting-started, /guide/providers),
// GitHub repository AQBot-Desktop/AQBot (API metadata, README, releases v0.0.163 to v0.0.165 with asset list, commits).
// The request came from the site owner, not from the maker.
// Last upstream update 2026-10-31 (last commit on main; latest release v0.0.165 on 2026-10-26) => no stale warning (18 days).
// Theme: 'Easiest Desktop Apps' (as newelle-review, nativ-review, jan-review). No HQ flag: no primary source names a country (site has no privacy, terms, about, imprint or contact page, all 404 on 2026-11-18).
// Licence: AGPL-3.0 (GitHub API; README). macOS build signed with the project's own certificate, not an Apple Developer ID (website FAQ and download page).
// No typed star counts in the text; starsFor() is not needed because no count is quoted.

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
    heroImage: '/images/aqbot-review-hero-en.webp',
    title: 'AQBot Review: Desktop AI Client With Agents and a Local API Gateway',
    seoTitle: 'AQBot Review: AI Desktop Client With a Local Gateway',
    intro:
      'AQBot 0.0.165 is an open-source desktop AI client for macOS, Windows and Linux that combines multi-provider chat, agents, MCP tools, a document knowledge base and a local API gateway for coding tools. The licence is AGPL-3.0. This review is based on the official website and the GitHub repository with its README and releases, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'AQBot is an open-source desktop AI client with agents, MCP, document chat and a local API gateway for macOS, Windows and Linux. What is confirmed.',
    twitterDescription:
      'AQBot: an open-source desktop AI client with multi-provider chat, agents, MCP, a document knowledge base and a local API gateway. What is confirmed.',
    audience:
      'People who use several AI providers and want one desktop client, developers who want to route coding tools through one gateway, and users who want to chat over their own documents',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'AQBot review',
    targetKeywords: [
      'AQBot review',
      'AQBot AI desktop client',
      'open-source AI desktop client',
      'local API gateway for Claude Code',
      'multi-model chat app',
      'ACP agent workbench',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AQBot is an open-source (AGPL-3.0) desktop AI client that puts chat with many providers, agents, MCP tools, document search and a local API gateway into one app.** It runs on macOS, Windows and Linux and is free; you pay only the model providers you connect. PromptQuorum found no privacy policy, terms page or named company on the website, and has not tested the app.',
    quickAnswerTop: {
      en: {
        question: 'What is AQBot and who is it for?',
        answer:
          'AQBot is a desktop AI client developed in the open on GitHub by the organization AQBot-Desktop. It suits people who work with several AI providers and want chat, agents, document search and a shared gateway for their coding tools in one place.',
        bullets: [
          'Licensed under AGPL-3.0 and free to download, according to the maker; model providers are billed separately.',
          'Connects to OpenAI, Claude, Gemini, DeepSeek, Qwen and any OpenAI-compatible endpoint, including local servers such as Ollama, according to the maker.',
          'Chat can switch to an Agent mode that edits files and runs commands after approval, and a separate workbench drives external agents through the Agent Client Protocol.',
          'A local API gateway serves your configured providers in OpenAI, Claude and Gemini formats for tools such as Claude Code and Codex CLI.',
          'Version 0.0.165 was released on 26 October 2026 and the last commit on the main branch was on 31 October 2026.',
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
      { label: 'Privacy, Data and Agent Safety', anchor: 'privacy' },
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
            text: 'AQBot is an open-source desktop AI client that combines chat with many providers, agents, MCP tools, a document knowledge base and a local API gateway in one app for macOS, Windows and Linux.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as one window for all your AI accounts: you add your own API keys, chat with one or several models, let an agent work in a folder you pick, and let other tools on your computer borrow your models through a local address.',
          },
        ],
        items: [
          'Install a DMG, EXE, MSI, portable ZIP, AppImage, DEB or RPM from the GitHub releases page or the maker’s download page.',
          'Add a provider with your own API key and fetch its model list; the maker names local servers such as Ollama for local models.',
          'According to the maker, the macOS build is signed with the project’s own certificate, not an Apple Developer ID, so macOS may show a warning on first launch.',
          'Agent mode runs commands in a folder you choose; the maker says that folder is the starting directory, not a sandbox.',
          'PromptQuorum has not tested the app, so answer quality, agent reliability, speed and what the app sends over the network are unverified.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The maker says app data and user files stay on your computer. PromptQuorum did not inspect network traffic and found no privacy policy to check that against.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**AQBot is a desktop AI client developed by the GitHub organization AQBot-Desktop and released for macOS, Windows and Linux under the AGPL-3.0 licence.**',
          'The code is public at [github.com/AQBot-Desktop/AQBot](https://github.com/AQBot-Desktop/AQBot). The repository was created in March 2026, version 0.0.165 appeared on 26 October 2026 and the last commit on the main branch was on 31 October 2026, so development is active and no stale-project warning applies. The version numbers are still below 1.0. The [website](https://app.aqbot.top) names no company, address or country, so PromptQuorum could not identify who operates the project beyond the organization name.',
          'According to the maker, AQBot is a local-first AI workbench that joins multi-provider chat, agents, a document knowledge base, MCP tools and an API gateway, and keeps app data and user files on your machine. Chat connects to OpenAI, Claude, Gemini, DeepSeek, Qwen, Zhipu AI, xAI, AWS Bedrock and any OpenAI-compatible endpoint.',
          'PromptQuorum has not run the app and has not checked answer quality, agent reliability, speed or memory use.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You can install AQBot from the packages on its GitHub releases page; the maker’s download page links the same files for macOS, Windows and Linux.**',
          'The v0.0.165 release lists DMG images for Apple silicon and Intel, setup EXE and MSI installers and portable ZIP files for Windows on x64 and ARM64, an AppImage for Linux on x64, and DEB and RPM packages for Linux on x64 and ARM64.',
        ],
        columns: ['Platform', 'Package'],
        rows: [
          { 'Platform': 'macOS (Apple silicon)', 'Package': 'DMG' },
          { 'Platform': 'macOS (Intel)', 'Package': 'DMG (x64)' },
          { 'Platform': 'Windows (x64, ARM64)', 'Package': 'Setup EXE, MSI or portable ZIP' },
          { 'Platform': 'Linux (x64)', 'Package': 'AppImage, DEB or RPM' },
          { 'Platform': 'Linux (ARM64)', 'Package': 'DEB or RPM' },
          { 'Platform': 'Website', 'Package': '[app.aqbot.top](https://app.aqbot.top)' },
          { 'Platform': 'Privacy policy', 'Package': 'None found' },
        ],
        note: 'Download from the [GitHub releases page](https://github.com/AQBot-Desktop/AQBot/releases/latest) or the maker’s [download page](https://app.aqbot.top/download). The maker says the macOS build is signed with the project’s own certificate, not an Apple Developer ID, so macOS may report the app as damaged or from an unverified developer; its instructions are to Control-click AQBot.app and choose Open, or to allow it under System Settings → Privacy & Security. Do this only if you trust where you downloaded the file. PromptQuorum did not run the installers and did not check how the Windows and Linux packages are signed.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**AQBot runs on macOS (Apple silicon and Intel), Windows 10 and 11 (x64 and ARM64) and Linux (x64 and ARM64); the maker publishes no memory or GPU minimum.**',
          'You need at least one model source: a provider account with an API key, or a local server such as Ollama that the maker says AQBot can connect to. According to the maker, app data lives in ~/.aqbot and images, attachments and backups in ~/Documents/aqbot. The local gateway answers on port 8080 by default, according to the website. PromptQuorum did not measure memory use or speed.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'macOS', 'Stated figure': 'Apple silicon and Intel' },
          { 'Item': 'Windows', 'Stated figure': 'Windows 10 and 11, x64 and ARM64' },
          { 'Item': 'Linux', 'Stated figure': 'x64 and ARM64' },
          { 'Item': 'Model source', 'Stated figure': 'Provider API key or local server' },
          { 'Item': 'Data folders', 'Stated figure': '~/.aqbot and ~/Documents/aqbot' },
          { 'Item': 'Gateway port', 'Stated figure': '8080 by default' },
          { 'Item': 'Memory and GPU', 'Stated figure': 'Not published' },
        ],
        note: 'Local model servers are separate programs that AQBot connects to, according to the maker. Web search uses a search service such as Tavily, Exa, Zhipu or Bocha.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**AQBot is built around chat with many providers; agents, MCP, document search and the gateway sit around it.** All items below are maker claims from the website and README.',
        ],
        items: [
          'Chat: connect OpenAI, Claude, Gemini, DeepSeek, Qwen or any OpenAI-compatible endpoint, compare answers from several models side by side, branch conversations and keep message versions.',
          'Agent mode: switch a chat to read and edit files and run commands in a folder, with a permission mode of ask every time, auto-accept edits or full access, and a record of tokens and cost per task.',
          'ACP workbench: drive external agents that speak the Agent Client Protocol, such as Codex, Claude Agent, Gemini CLI, Cline and OpenCode, with projects, saved threads and per-session approvals.',
          'MCP and Skills: run MCP servers over stdio, SSE or StreamableHTTP, use built-in tools such as @aqbot/fetch, and manage Skills folders for AQBot, Codex, Claude and Agents in one place.',
          'Knowledge and search: index private files into a local sqlite-vec knowledge base, add web search through Tavily, Exa, Zhipu or Bocha, and attach files, search results and memories to the context.',
          'Roles: save a system prompt, avatar and sampling settings as a reusable role, or install roles from the prompts.chat and PlexPt sources.',
          'Local API gateway: serve your providers as OpenAI Chat Completions, OpenAI Responses, Claude and Gemini endpoints with separate gateway keys, TLS, request logs and usage statistics; Quick Connect writes the address and key into Claude Code, Codex, OpenCode, Gemini CLI and Cursor.',
          'Import and backup: import ChatGPT exports and Cherry Studio and Kelivo backups, and back up to a local folder, WebDAV or S3-compatible storage.',
          'Desktop and interface: system tray, always-on-top window, global shortcuts, launch at login, proxy settings, automatic update checks and 11 interface languages.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, Data and Agent Safety',
        content: [
          '**According to the maker, AQBot keeps app data and user files on your computer; PromptQuorum found no privacy policy and did not inspect network traffic, so it cannot confirm this.**',
          'The maker names two folders: ~/.aqbot holds the database, the encryption key, the vector store and TLS files, and ~/Documents/aqbot holds images, attachments and backups. API keys are encrypted with AES-256 using a local master key, according to the maker. On 18 November 2026 the paths /privacy, /terms, /about, /imprint and /contact on the [maker’s website](https://app.aqbot.top) returned “404 Not Found”.',
          'Network use beyond your chosen model providers, as the README and website describe it: web search services, MCP servers you add, backups to WebDAV or S3-compatible storage, update checks, and provider setup through aqbot:// links, which ask for confirmation before importing. Whether the app sends usage statistics or error reports is not stated anywhere PromptQuorum found.',
          'Agent mode can read and edit files and run commands. The maker’s FAQ says the folder you choose is the process’s starting working directory, not a filesystem sandbox, and terminal commands run only in Agent mode, after approval. The permission modes are ask every time, auto-accept edits and full access. PromptQuorum did not test how the approvals behave.',
          'The gateway lets other tools use the providers you configured, with its own keys. PromptQuorum did not check which network interfaces the gateway listens on. The source code is public on GitHub, so the data flow can be audited.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**AQBot fits people who use several AI providers and want one desktop client, plus developers who want to route their coding tools through a single local gateway.**',
        ],
        items: [
          'People who switch between providers and want side-by-side answers, branches and message versions in one app.',
          'Developers who use Claude Code, Codex CLI, Gemini CLI or OpenCode and want one place for keys, routing and usage logs, according to the maker.',
          'Users who want to chat over private documents using a local knowledge base, according to the maker.',
          'People moving over from ChatGPT exports or from Cherry Studio and Kelivo, whose backups AQBot can import.',
          'Readers who prefer a client whose code is public under AGPL-3.0.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**AQBot is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who needs a vendor with a published privacy policy, terms and a named company; PromptQuorum found none of these for AQBot.',
          'Not a fit: anyone who needs an Apple-notarized app; the maker says the macOS build uses the project’s own certificate.',
          'Not a fit: running a model without another program. AQBot is described as a client, and local models come in through servers such as Ollama.',
          'Unverified: answer quality, agent reliability, knowledge-base retrieval quality, speed and memory use. PromptQuorum has not run the app.',
          'Unverified: that app data and keys stay on your computer, where documents are processed when they are indexed, and whether any usage statistics are sent; PromptQuorum did not inspect network traffic.',
          'Unverified: which network interfaces the gateway listens on, and how the Agent permission modes behave.',
          'Unverified: how the Windows and Linux packages are signed; the maker names only the macOS certificate.',
          'Unverified: who operates the project and in which country, user numbers and independent reviews, and long-term stability (version numbers are below 1.0 and the repository dates from March 2026); PromptQuorum did not look for independent reviews.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AQBot vs Alternatives',
        itemHeadings: true,
        content: [
          '**AQBot overlaps with other desktop AI chat clients; PromptQuorum has not compared it with them hands-on.** The tools below are in the directory and are described from their own reviews.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'AQBot', 'Noted in sources': 'AGPL-3.0; Mac/Windows/Linux; providers, agents, gateway' },
          { 'Tool': '[Cherry Studio](/local-llms/cherry-studio-ai-desktop-client)', 'Noted in sources': 'AGPL 3.0; Mac/Windows/Linux; chat + document chat' },
          { 'Tool': '[Jan](/power-local-llm/jan-review)', 'Noted in sources': 'Apache 2.0 (variant); Mac/Windows/Linux; local models' },
          { 'Tool': '[Newelle](/power-local-llm/newelle-review)', 'Noted in sources': 'GPL-3.0; Linux + macOS beta; providers or local models' },
          { 'Tool': '[Msty](/power-local-llm/msty-review)', 'Noted in sources': 'Closed source; Mac/Windows/Linux; freemium' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Does AQBot include its own AI models?',
            a: 'The maker describes AQBot as a client: you add providers such as OpenAI, Claude, Gemini, DeepSeek or Qwen, or a local server such as Ollama. PromptQuorum found no built-in model runner in the sources it read.',
          },
          {
            q: 'Is AQBot free?',
            a: 'According to the maker, yes: the app is free to download and use under AGPL-3.0, and you pay only the model providers you connect, or nothing if you run local models.',
          },
          {
            q: 'Can I use AQBot with Claude Code or Codex CLI?',
            a: 'According to the maker, yes through the local gateway: start it, create a gateway key, and Quick Connect writes the address and key into Claude Code, Codex, OpenCode, Gemini CLI or Cursor. Claude Code can also be set by hand with ANTHROPIC_BASE_URL and ANTHROPIC_AUTH_TOKEN. PromptQuorum did not test this.',
          },
          {
            q: 'Can I move my chats from another app?',
            a: 'According to the maker, AQBot imports official ChatGPT exports and Cherry Studio and Kelivo backups, with a preview, warnings and duplicate handling; Cherry Studio and Kelivo imports can also bring over providers, API keys and attachments.',
          },
          {
            q: 'Which interface languages does AQBot offer?',
            a: 'Eleven, according to the maker: Simplified and Traditional Chinese, English, Japanese, Korean, French, German, Spanish, Russian, Hindi and Arabic. The README is written first in Chinese and has translations.',
          },
          {
            q: 'How often does AQBot update?',
            a: 'GitHub lists version 0.0.163 on 9 October 2026, 0.0.164 on 19 October 2026 and 0.0.165 on 26 October 2026, and the last commit on the main branch was on 31 October 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**AQBot is worth a look if you juggle several AI providers and want one open-source desktop client with agents, MCP, document search and a local gateway for your coding tools.**',
          'On paper it covers a lot for a free app: multi-model chat, two kinds of agents, a knowledge base, Skills management and a gateway that speaks the OpenAI, Claude and Gemini formats. The last three releases came 7 to 10 days apart, and the code is public.',
          'The trade-offs are real: PromptQuorum found no privacy policy, terms or named company on the website, the maker says the macOS build uses the project’s own certificate, the version numbers are below 1.0, and PromptQuorum has not tested anything. Start with a throwaway API key and a test folder, and check what the app does on your network before you rely on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AQBot website](https://app.aqbot.top) — product overview, version and screenshots, checked 18 November 2026.',
          '[Download page](https://app.aqbot.top/download) — installers, supported systems and the macOS signing note, checked 18 November 2026.',
          '[FAQ](https://app.aqbot.top/faq) — data folders, providers, agents and licence, checked 18 November 2026.',
          '[Getting started guide](https://app.aqbot.top/guide/getting-started) — installation and first-time setup, dated 28 October 2026 on the site, checked 18 November 2026.',
          '[Providers guide](https://app.aqbot.top/guide/providers) — supported providers and AWS Bedrock setup, dated 28 October 2026 on the site, checked 18 November 2026.',
          '[GitHub repository](https://github.com/AQBot-Desktop/AQBot) — licence as reported by GitHub, creation date and last commit, checked 18 November 2026.',
          '[README](https://github.com/AQBot-Desktop/AQBot#readme) — features, platforms and the macOS note, checked 18 November 2026.',
          '[GitHub releases](https://github.com/AQBot-Desktop/AQBot/releases) — release dates and packages for v0.0.165, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Cherry Studio Review](/local-llms/cherry-studio-ai-desktop-client) — a multi-provider desktop client with document chat.',
          '[Jan Review](/power-local-llm/jan-review) — an open-source, offline-first desktop chat app.',
          '[Newelle Review](/power-local-llm/newelle-review) — a Linux assistant with cloud providers, local models and MCP.',
          '[Local LLM Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — chat clients side by side.',
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
    heroImage: '/images/aqbot-review-hero-de.webp',
    title: 'AQBot-Rezension: Desktop-KI-Client mit lokalem Gateway',
    seoTitle: 'AQBot-Rezension: KI-Desktop-Client mit lokalem Gateway',
    intro:
      'AQBot 0.0.165 ist ein quelloffener Desktop-KI-Client für macOS, Windows und Linux, der Chat mit mehreren Anbietern, Agenten, MCP-Werkzeuge, eine Dokumenten-Wissensbasis und ein lokales API-Gateway für Coding-Tools verbindet. Die Lizenz ist AGPL-3.0. Diese Rezension stützt sich auf die offizielle Website und das GitHub-Repository mit README und Releases, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'AQBot ist ein quelloffener Desktop-KI-Client mit Agenten, MCP, Dokumenten-Chat und lokalem API-Gateway für macOS, Windows und Linux. Was belegt ist.',
    twitterDescription:
      'AQBot: quelloffener Desktop-KI-Client mit Chat für mehrere Anbieter, Agenten, MCP, Dokumenten-Wissensbasis und lokalem API-Gateway. Was belegt ist.',
    audience:
      'Personen, die mehrere KI-Anbieter nutzen und einen Desktop-Client dafür wünschen, Entwickler, die Coding-Tools über ein Gateway leiten möchten, und Nutzer, die mit eigenen Dokumenten chatten wollen',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'AQBot Rezension',
    targetKeywords: [
      'AQBot Rezension',
      'AQBot KI-Desktop-Client',
      'quelloffener KI-Desktop-Client',
      'lokales API-Gateway für Claude Code',
      'Chat-App für mehrere Modelle',
      'ACP-Agenten-Workbench',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AQBot ist ein quelloffener (AGPL-3.0) Desktop-KI-Client, der Chat mit vielen Anbietern, Agenten, MCP-Werkzeuge, Dokumentensuche und ein lokales API-Gateway in einer App vereint.** Er läuft unter macOS, Windows und Linux und ist kostenlos; Sie bezahlen nur die Modellanbieter, die Sie anbinden. PromptQuorum fand auf der Website weder eine Datenschutzerklärung noch Nutzungsbedingungen oder ein benanntes Unternehmen und hat die App nicht getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was ist AQBot, und für wen ist es gedacht?',
        answer:
          'AQBot ist ein Desktop-KI-Client, den die GitHub-Organisation AQBot-Desktop offen entwickelt. Er eignet sich für Personen, die mit mehreren KI-Anbietern arbeiten und Chat, Agenten, Dokumentensuche und ein gemeinsames Gateway für ihre Coding-Tools an einem Ort haben möchten.',
        bullets: [
          'Lizenziert unter AGPL-3.0 und laut Hersteller kostenlos herunterladbar; die Modellanbieter werden getrennt abgerechnet.',
          'Laut Hersteller verbindet er sich mit OpenAI, Claude, Gemini, DeepSeek, Qwen und jedem OpenAI-kompatiblen Endpunkt, auch mit lokalen Servern wie Ollama.',
          'Der Chat lässt sich in einen Agent-Modus umschalten, der nach Freigabe Dateien bearbeitet und Befehle ausführt; eine eigene Workbench steuert externe Agenten über das Agent Client Protocol.',
          'Ein lokales API-Gateway stellt Ihre konfigurierten Anbieter in den Formaten von OpenAI, Claude und Gemini bereit, etwa für Claude Code und Codex CLI.',
          'Version 0.0.165 erschien am 26. Oktober 2026, der letzte Commit auf dem Hauptzweig stammt vom 31. Oktober 2026.',
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
      { label: 'Datenschutz, Daten und Agenten-Sicherheit', anchor: 'privacy' },
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
            text: 'AQBot ist ein quelloffener Desktop-KI-Client, der Chat mit vielen Anbietern, Agenten, MCP-Werkzeuge, eine Dokumenten-Wissensbasis und ein lokales API-Gateway in einer App für macOS, Windows und Linux verbindet.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als ein Fenster für alle Ihre KI-Konten vor: Sie tragen Ihre eigenen API-Schlüssel ein, chatten mit einem oder mehreren Modellen, lassen einen Agenten in einem von Ihnen gewählten Ordner arbeiten und geben anderen Programmen auf Ihrem Rechner über eine lokale Adresse Zugriff auf Ihre Modelle.',
          },
        ],
        items: [
          'Installieren Sie ein DMG, EXE, MSI, portables ZIP, AppImage, DEB oder RPM von der GitHub-Release-Seite oder der Download-Seite des Herstellers.',
          'Fügen Sie einen Anbieter mit Ihrem eigenen API-Schlüssel hinzu und laden Sie dessen Modellliste; für lokale Modelle nennt der Hersteller lokale Server wie Ollama.',
          'Laut Hersteller ist die macOS-Version mit einem eigenen Zertifikat des Projekts signiert, nicht mit einer Apple Developer ID, daher zeigt macOS beim ersten Start möglicherweise eine Warnung.',
          'Der Agent-Modus führt Befehle in einem von Ihnen gewählten Ordner aus; laut Hersteller ist dieser Ordner nur das Startverzeichnis, keine Sandbox.',
          'PromptQuorum hat die App nicht getestet; Antwortqualität, Zuverlässigkeit der Agenten, Geschwindigkeit und die Netzwerkaktivität der App sind daher nicht überprüft.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Laut Hersteller bleiben App-Daten und Nutzerdateien auf Ihrem Rechner. PromptQuorum hat den Netzwerkverkehr nicht untersucht und keine Datenschutzerklärung gefunden, mit der sich das abgleichen ließe.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**AQBot ist ein Desktop-KI-Client der GitHub-Organisation AQBot-Desktop, veröffentlicht für macOS, Windows und Linux unter der Lizenz AGPL-3.0.**',
          'Der Code ist öffentlich unter [github.com/AQBot-Desktop/AQBot](https://github.com/AQBot-Desktop/AQBot). Das Repository wurde im März 2026 angelegt, Version 0.0.165 erschien am 26. Oktober 2026 und der letzte Commit auf dem Hauptzweig stammt vom 31. Oktober 2026; die Entwicklung ist also aktiv, und eine Warnung vor einem veralteten Projekt entfällt. Die Versionsnummern liegen noch unter 1.0. Die [Website](https://app.aqbot.top) nennt weder Unternehmen noch Adresse oder Land, daher konnte PromptQuorum nicht ermitteln, wer das Projekt betreibt, außer dem Namen der Organisation.',
          'Laut Hersteller ist AQBot eine Local-first-KI-Arbeitsumgebung, die Chat mit mehreren Anbietern, Agenten, eine Dokumenten-Wissensbasis, MCP-Werkzeuge und ein API-Gateway verbindet und App-Daten sowie Nutzerdateien auf Ihrem Rechner hält. Der Chat verbindet sich mit OpenAI, Claude, Gemini, DeepSeek, Qwen, Zhipu AI, xAI, AWS Bedrock und jedem OpenAI-kompatiblen Endpunkt.',
          'PromptQuorum hat die App nicht ausgeführt und weder Antwortqualität noch Zuverlässigkeit der Agenten, Geschwindigkeit oder Speicherbedarf geprüft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie können AQBot über die Pakete auf der GitHub-Release-Seite installieren; die Download-Seite des Herstellers verlinkt dieselben Dateien für macOS, Windows und Linux.**',
          'Das Release v0.0.165 listet DMG-Images für Apple Silicon und Intel, Setup-EXE- und MSI-Installer sowie portable ZIP-Dateien für Windows auf x64 und ARM64, ein AppImage für Linux auf x64 sowie DEB- und RPM-Pakete für Linux auf x64 und ARM64.',
        ],
        columns: ['Plattform', 'Paket'],
        rows: [
          { 'Plattform': 'macOS (Apple Silicon)', 'Paket': 'DMG' },
          { 'Plattform': 'macOS (Intel)', 'Paket': 'DMG (x64)' },
          { 'Plattform': 'Windows (x64, ARM64)', 'Paket': 'Setup-EXE, MSI oder portables ZIP' },
          { 'Plattform': 'Linux (x64)', 'Paket': 'AppImage, DEB oder RPM' },
          { 'Plattform': 'Linux (ARM64)', 'Paket': 'DEB oder RPM' },
          { 'Plattform': 'Website', 'Paket': '[app.aqbot.top](https://app.aqbot.top)' },
          { 'Plattform': 'Datenschutzerklärung', 'Paket': 'Keine gefunden' },
        ],
        note: 'Laden Sie die Dateien von der [GitHub-Release-Seite](https://github.com/AQBot-Desktop/AQBot/releases/latest) oder der [Download-Seite](https://app.aqbot.top/download) des Herstellers herunter. Der Hersteller gibt an, dass die macOS-Version mit einem eigenen Zertifikat des Projekts signiert ist, nicht mit einer Apple Developer ID; macOS meldet die App deshalb möglicherweise als beschädigt oder von einem nicht verifizierten Entwickler. Seine Anleitung lautet: AQBot.app mit gedrückter Control-Taste anklicken und „Öffnen“ wählen oder die App unter Systemeinstellungen → Datenschutz & Sicherheit zulassen. Tun Sie das nur, wenn Sie der Quelle des Downloads vertrauen. PromptQuorum hat die Installer nicht ausgeführt und nicht geprüft, wie die Windows- und Linux-Pakete signiert sind.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**AQBot läuft unter macOS (Apple Silicon und Intel), Windows 10 und 11 (x64 und ARM64) sowie Linux (x64 und ARM64); der Hersteller nennt kein Minimum für Arbeitsspeicher oder GPU.**',
          'Sie brauchen mindestens eine Modellquelle: ein Anbieterkonto mit API-Schlüssel oder einen lokalen Server wie Ollama, mit dem sich AQBot laut Hersteller verbinden kann. Laut Hersteller liegen App-Daten in ~/.aqbot und Bilder, Anhänge und Backups in ~/Documents/aqbot. Das lokale Gateway antwortet laut Website standardmäßig auf Port 8080. PromptQuorum hat weder Speicherbedarf noch Geschwindigkeit gemessen.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'macOS', 'Angegebener Wert': 'Apple Silicon und Intel' },
          { 'Punkt': 'Windows', 'Angegebener Wert': 'Windows 10 und 11, x64 und ARM64' },
          { 'Punkt': 'Linux', 'Angegebener Wert': 'x64 und ARM64' },
          { 'Punkt': 'Modellquelle', 'Angegebener Wert': 'API-Schlüssel eines Anbieters oder lokaler Server' },
          { 'Punkt': 'Datenordner', 'Angegebener Wert': '~/.aqbot und ~/Documents/aqbot' },
          { 'Punkt': 'Gateway-Port', 'Angegebener Wert': 'Standardmäßig 8080' },
          { 'Punkt': 'Speicher und GPU', 'Angegebener Wert': 'Nicht angegeben' },
        ],
        note: 'Lokale Modellserver sind eigene Programme, mit denen sich AQBot laut Hersteller verbindet. Die Websuche nutzt einen Suchdienst wie Tavily, Exa, Zhipu oder Bocha.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**AQBot ist um den Chat mit vielen Anbietern herum gebaut; Agenten, MCP, Dokumentensuche und das Gateway ergänzen ihn.** Alle Punkte unten sind Angaben des Herstellers von Website und README.',
        ],
        items: [
          'Chat: OpenAI, Claude, Gemini, DeepSeek, Qwen oder jeden OpenAI-kompatiblen Endpunkt anbinden, Antworten mehrerer Modelle nebeneinander vergleichen, Unterhaltungen verzweigen und Nachrichtenversionen behalten.',
          'Agent-Modus: einen Chat so umschalten, dass er in einem Ordner Dateien liest und bearbeitet und Befehle ausführt, mit einem Berechtigungsmodus aus „jedes Mal fragen“, „Änderungen automatisch annehmen“ oder „voller Zugriff“ und einer Aufzeichnung von Tokens und Kosten pro Aufgabe.',
          'ACP-Workbench: externe Agenten steuern, die das Agent Client Protocol sprechen, etwa Codex, Claude Agent, Gemini CLI, Cline und OpenCode, mit Projekten, gespeicherten Threads und Freigaben pro Sitzung.',
          'MCP und Skills: MCP-Server über stdio, SSE oder StreamableHTTP betreiben, eingebaute Werkzeuge wie @aqbot/fetch nutzen und Skills-Ordner für AQBot, Codex, Claude und Agents an einem Ort verwalten.',
          'Wissen und Suche: private Dateien in eine lokale sqlite-vec-Wissensbasis indexieren, Websuche über Tavily, Exa, Zhipu oder Bocha hinzufügen und Dateien, Suchergebnisse und Erinnerungen an den Kontext anhängen.',
          'Rollen: einen Systemprompt, ein Avatarbild und Sampling-Einstellungen als wiederverwendbare Rolle speichern oder Rollen aus den Quellen prompts.chat und PlexPt installieren.',
          'Lokales API-Gateway: Ihre Anbieter als Endpunkte für OpenAI Chat Completions, OpenAI Responses, Claude und Gemini bereitstellen, mit eigenen Gateway-Schlüsseln, TLS, Anfrageprotokollen und Nutzungsstatistik; Quick Connect trägt Adresse und Schlüssel in Claude Code, Codex, OpenCode, Gemini CLI und Cursor ein.',
          'Import und Backup: ChatGPT-Exporte sowie Backups von Cherry Studio und Kelivo importieren und in einen lokalen Ordner, per WebDAV oder auf S3-kompatiblen Speicher sichern.',
          'Desktop und Oberfläche: Infobereich-Symbol, Fenster im Vordergrund, globale Tastenkürzel, Start bei der Anmeldung, Proxy-Einstellungen, automatische Update-Prüfung und 11 Oberflächensprachen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Daten und Agenten-Sicherheit',
        content: [
          '**Laut Hersteller hält AQBot App-Daten und Nutzerdateien auf Ihrem Rechner; PromptQuorum fand keine Datenschutzerklärung und hat den Netzwerkverkehr nicht untersucht, kann das also nicht bestätigen.**',
          'Der Hersteller nennt zwei Ordner: ~/.aqbot enthält die Datenbank, den Verschlüsselungsschlüssel, den Vektorspeicher und TLS-Dateien, ~/Documents/aqbot enthält Bilder, Anhänge und Backups. API-Schlüssel sind laut Hersteller mit AES-256 und einem lokalen Hauptschlüssel verschlüsselt. Am 18. November 2026 lieferten die Pfade /privacy, /terms, /about, /imprint und /contact auf der [Website des Herstellers](https://app.aqbot.top) „404 Not Found“.',
          'Netzwerknutzung über Ihre gewählten Modellanbieter hinaus, wie README und Website sie beschreiben: Websuchdienste, von Ihnen hinzugefügte MCP-Server, Backups per WebDAV oder auf S3-kompatiblen Speicher, Update-Prüfungen und die Anbieter-Einrichtung über aqbot://-Links, die vor dem Import um Bestätigung bitten. Ob die App Nutzungsstatistiken oder Fehlerberichte sendet, steht an keiner Stelle, die PromptQuorum gefunden hat.',
          'Der Agent-Modus kann Dateien lesen und bearbeiten und Befehle ausführen. Die FAQ des Herstellers sagt, der gewählte Ordner sei das Startverzeichnis des Prozesses und keine Dateisystem-Sandbox, und Terminalbefehle liefen nur im Agent-Modus nach Freigabe. Die Berechtigungsmodi sind „jedes Mal fragen“, „Änderungen automatisch annehmen“ und „voller Zugriff“. PromptQuorum hat nicht getestet, wie sich die Freigaben verhalten.',
          'Das Gateway lässt andere Werkzeuge die von Ihnen konfigurierten Anbieter mit eigenen Schlüsseln nutzen. PromptQuorum hat nicht geprüft, auf welchen Netzwerkschnittstellen das Gateway lauscht. Der Quellcode ist auf GitHub öffentlich, der Datenfluss lässt sich also prüfen.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**AQBot passt zu Personen, die mehrere KI-Anbieter nutzen und einen Desktop-Client dafür wünschen, sowie zu Entwicklern, die ihre Coding-Tools über ein einziges lokales Gateway leiten möchten.**',
        ],
        items: [
          'Personen, die zwischen Anbietern wechseln und Antworten nebeneinander, Verzweigungen und Nachrichtenversionen in einer App wünschen.',
          'Entwickler, die Claude Code, Codex CLI, Gemini CLI oder OpenCode nutzen und laut Hersteller einen Ort für Schlüssel, Routing und Nutzungsprotokolle wünschen.',
          'Nutzer, die laut Hersteller mit privaten Dokumenten über eine lokale Wissensbasis chatten möchten.',
          'Personen, die von ChatGPT-Exporten oder von Cherry Studio und Kelivo umziehen, deren Backups AQBot importieren kann.',
          'Leser, die einen Client bevorzugen, dessen Code unter AGPL-3.0 öffentlich ist.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**AQBot passt in manchen Situationen schlecht, und mehrere Angaben bleiben ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: wer einen Anbieter mit veröffentlichter Datenschutzerklärung, Nutzungsbedingungen und benanntem Unternehmen braucht; PromptQuorum fand dazu bei AQBot nichts.',
          'Nicht geeignet: wer eine von Apple notarisierte App braucht; laut Hersteller nutzt die macOS-Version ein eigenes Zertifikat des Projekts.',
          'Nicht geeignet: ein Modell ohne weiteres Programm auszuführen. AQBot wird als Client beschrieben, lokale Modelle kommen über Server wie Ollama hinzu.',
          'Ungeprüft: Antwortqualität, Zuverlässigkeit der Agenten, Qualität der Wissensbasis-Suche, Geschwindigkeit und Speicherbedarf. PromptQuorum hat die App nicht ausgeführt.',
          'Ungeprüft: dass App-Daten und Schlüssel auf Ihrem Rechner bleiben, wo Dokumente beim Indexieren verarbeitet werden und ob Nutzungsstatistiken gesendet werden; PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          'Ungeprüft: auf welchen Netzwerkschnittstellen das Gateway lauscht und wie sich die Berechtigungsmodi des Agenten verhalten.',
          'Ungeprüft: wie die Windows- und Linux-Pakete signiert sind; der Hersteller nennt nur das macOS-Zertifikat.',
          'Ungeprüft: wer das Projekt betreibt und in welchem Land, Nutzerzahlen und unabhängige Tests sowie die langfristige Stabilität (die Versionsnummern liegen unter 1.0, das Repository stammt vom März 2026); PromptQuorum hat nicht nach unabhängigen Tests gesucht.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AQBot im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**AQBot überschneidet sich mit anderen Desktop-KI-Chat-Clients; PromptQuorum hat sie nicht praktisch miteinander verglichen.** Die folgenden Werkzeuge stehen im Verzeichnis und werden anhand ihrer eigenen Rezensionen beschrieben.',
        ],
        columns: ['Werkzeug', 'In Quellen genannt'],
        rows: [
          { 'Werkzeug': 'AQBot', 'In Quellen genannt': 'AGPL-3.0; Mac/Windows/Linux; Anbieter, Agenten, Gateway' },
          { 'Werkzeug': '[Cherry Studio](/de/local-llms/cherry-studio-ai-desktop-client)', 'In Quellen genannt': 'AGPL 3.0; Mac/Windows/Linux; Chat + Dokumenten-Chat' },
          { 'Werkzeug': '[Jan](/de/power-local-llm/jan-review)', 'In Quellen genannt': 'Apache 2.0 (Variante); Mac/Windows/Linux; lokale Modelle' },
          { 'Werkzeug': '[Newelle](/de/power-local-llm/newelle-review)', 'In Quellen genannt': 'GPL-3.0; Linux + macOS-Beta; Anbieter oder lokale Modelle' },
          { 'Werkzeug': '[Msty](/de/power-local-llm/msty-review)', 'In Quellen genannt': 'Closed Source; Mac/Windows/Linux; Freemium' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Bringt AQBot eigene KI-Modelle mit?',
            a: 'Der Hersteller beschreibt AQBot als Client: Sie fügen Anbieter wie OpenAI, Claude, Gemini, DeepSeek oder Qwen hinzu oder einen lokalen Server wie Ollama. PromptQuorum fand in den gelesenen Quellen keinen eingebauten Modell-Runner.',
          },
          {
            q: 'Ist AQBot kostenlos?',
            a: 'Laut Hersteller ja: Die App ist unter AGPL-3.0 kostenlos herunterladbar und nutzbar, und Sie bezahlen nur die Modellanbieter, die Sie anbinden, oder nichts, wenn Sie lokale Modelle betreiben.',
          },
          {
            q: 'Kann ich AQBot mit Claude Code oder Codex CLI nutzen?',
            a: 'Laut Hersteller ja, über das lokale Gateway: starten, einen Gateway-Schlüssel erzeugen, und Quick Connect trägt Adresse und Schlüssel in Claude Code, Codex, OpenCode, Gemini CLI oder Cursor ein. Claude Code lässt sich auch von Hand mit ANTHROPIC_BASE_URL und ANTHROPIC_AUTH_TOKEN einrichten. PromptQuorum hat das nicht getestet.',
          },
          {
            q: 'Kann ich meine Chats aus einer anderen App übernehmen?',
            a: 'Laut Hersteller importiert AQBot offizielle ChatGPT-Exporte sowie Backups von Cherry Studio und Kelivo, mit Vorschau, Warnungen und Umgang mit Duplikaten; Importe aus Cherry Studio und Kelivo können auch Anbieter, API-Schlüssel und Anhänge übernehmen.',
          },
          {
            q: 'Welche Oberflächensprachen bietet AQBot?',
            a: 'Laut Hersteller elf: vereinfachtes und traditionelles Chinesisch, Englisch, Japanisch, Koreanisch, Französisch, Deutsch, Spanisch, Russisch, Hindi und Arabisch. Die README ist zuerst auf Chinesisch geschrieben und hat Übersetzungen.',
          },
          {
            q: 'Wie oft wird AQBot aktualisiert?',
            a: 'GitHub listet Version 0.0.163 am 9. Oktober 2026, 0.0.164 am 19. Oktober 2026 und 0.0.165 am 26. Oktober 2026; der letzte Commit auf dem Hauptzweig stammt vom 31. Oktober 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**AQBot lohnt einen Blick, wenn Sie mehrere KI-Anbieter nutzen und einen quelloffenen Desktop-Client mit Agenten, MCP, Dokumentensuche und lokalem Gateway für Ihre Coding-Tools wünschen.**',
          'Auf dem Papier deckt er für eine kostenlose App viel ab: Chat mit mehreren Modellen, zwei Arten von Agenten, eine Wissensbasis, Skills-Verwaltung und ein Gateway, das die Formate von OpenAI, Claude und Gemini spricht. Die letzten drei Releases lagen 7 bis 10 Tage auseinander, und der Code ist öffentlich.',
          'Die Nachteile sind real: PromptQuorum fand auf der Website weder Datenschutzerklärung noch Nutzungsbedingungen oder ein benanntes Unternehmen, laut Hersteller nutzt die macOS-Version ein eigenes Zertifikat des Projekts, die Versionsnummern liegen unter 1.0, und PromptQuorum hat nichts getestet. Beginnen Sie mit einem Wegwerf-API-Schlüssel und einem Testordner, und prüfen Sie, was die App in Ihrem Netzwerk tut, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[AQBot-Website](https://app.aqbot.top) — Produktüberblick, Version und Screenshots, geprüft am 18. November 2026.',
          '[Download-Seite](https://app.aqbot.top/download) — Installer, unterstützte Systeme und Hinweis zur macOS-Signatur, geprüft am 18. November 2026.',
          '[FAQ](https://app.aqbot.top/faq) — Datenordner, Anbieter, Agenten und Lizenz, geprüft am 18. November 2026.',
          '[Einstiegsanleitung](https://app.aqbot.top/guide/getting-started) — Installation und Ersteinrichtung, auf der Website datiert 28. Oktober 2026, geprüft am 18. November 2026.',
          '[Anbieter-Anleitung](https://app.aqbot.top/guide/providers) — unterstützte Anbieter und AWS-Bedrock-Einrichtung, auf der Website datiert 28. Oktober 2026, geprüft am 18. November 2026.',
          '[GitHub-Repository](https://github.com/AQBot-Desktop/AQBot) — Lizenz laut GitHub, Erstellungsdatum und letzter Commit, geprüft am 18. November 2026.',
          '[README](https://github.com/AQBot-Desktop/AQBot#readme) — Funktionen, Plattformen und Hinweis zu macOS, geprüft am 18. November 2026.',
          '[GitHub-Releases](https://github.com/AQBot-Desktop/AQBot/releases) — Release-Daten und Pakete für v0.0.165, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Cherry-Studio-Rezension](/de/local-llms/cherry-studio-ai-desktop-client) — ein Desktop-Client für mehrere Anbieter mit Dokumenten-Chat.',
          '[Jan-Rezension](/de/power-local-llm/jan-review) — eine quelloffene Desktop-Chat-App mit Offline-Fokus.',
          '[Newelle-Rezension](/de/power-local-llm/newelle-review) — ein Linux-Assistent mit Cloud-Anbietern, lokalen Modellen und MCP.',
          '[Lokale LLM-Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — Chat-Clients nebeneinander.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
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
    heroImage: '/images/aqbot-review-hero-fr.webp',
    title: 'Test d’AQBot : client IA de bureau avec agents et passerelle API locale',
    seoTitle: 'Test d’AQBot : client IA de bureau, passerelle locale',
    intro:
      'AQBot 0.0.165 est un client IA de bureau à code source ouvert pour macOS, Windows et Linux, qui réunit la discussion avec plusieurs fournisseurs, des agents, des outils MCP, une base de connaissances documentaire et une passerelle API locale pour les outils de programmation. La licence est AGPL-3.0. Ce test s’appuie sur le site officiel et sur le dépôt GitHub avec son README et ses versions, consultés le 18 novembre 2026. PromptQuorum n’a pas testé l’application en pratique.',
    metaDescription:
      'AQBot est un client IA de bureau open source avec agents, MCP, discussion sur documents et passerelle API locale. Ce qui est confirmé, ou non.',
    twitterDescription:
      'AQBot : client IA de bureau open source avec discussion multi-fournisseurs, agents, MCP, base documentaire et passerelle API locale. Ce qui est confirmé.',
    audience:
      'Personnes qui utilisent plusieurs fournisseurs d’IA et veulent un seul client de bureau, développeurs qui souhaitent faire passer leurs outils de programmation par une même passerelle, et utilisateurs qui veulent discuter avec leurs propres documents',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test AQBot',
    targetKeywords: [
      'test AQBot',
      'client IA de bureau AQBot',
      'client IA de bureau open source',
      'passerelle API locale pour Claude Code',
      'application de chat multi-modèles',
      'espace de travail d’agents ACP',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AQBot est un client IA de bureau open source (AGPL-3.0) qui réunit dans une seule application la discussion avec de nombreux fournisseurs, des agents, des outils MCP, la recherche dans vos documents et une passerelle API locale.** Il fonctionne sous macOS, Windows et Linux et il est gratuit ; vous ne payez que les fournisseurs de modèles que vous connectez. PromptQuorum n’a trouvé sur le site ni politique de confidentialité, ni conditions d’utilisation, ni société nommée, et n’a pas testé l’application.',
    quickAnswerTop: {
      fr: {
        question: 'Qu’est-ce qu’AQBot et à qui s’adresse-t-il ?',
        answer:
          'AQBot est un client IA de bureau que l’organisation GitHub AQBot-Desktop développe en open source. Il convient à ceux qui travaillent avec plusieurs fournisseurs d’IA et veulent réunir discussion, agents, recherche documentaire et passerelle partagée pour leurs outils de programmation.',
        bullets: [
          'Sous licence AGPL-3.0 et gratuit à télécharger, selon l’éditeur ; les fournisseurs de modèles sont facturés à part.',
          'Selon l’éditeur, il se connecte à OpenAI, Claude, Gemini, DeepSeek, Qwen et à tout point d’accès compatible OpenAI, y compris des serveurs locaux comme Ollama.',
          'La discussion peut passer en mode Agent, qui modifie des fichiers et exécute des commandes après approbation ; un espace de travail distinct pilote des agents externes via l’Agent Client Protocol.',
          'Une passerelle API locale expose vos fournisseurs configurés aux formats OpenAI, Claude et Gemini, pour des outils comme Claude Code et Codex CLI.',
          'La version 0.0.165 est sortie le 26 octobre 2026 et le dernier commit sur la branche principale date du 31 octobre 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l’obtenir', anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité, données et sécurité des agents', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'AQBot est un client IA de bureau open source qui réunit dans une seule application pour macOS, Windows et Linux la discussion avec de nombreux fournisseurs, des agents, des outils MCP, une base de connaissances documentaire et une passerelle API locale.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-le comme une seule fenêtre pour tous vos comptes d’IA : vous ajoutez vos propres clés API, vous discutez avec un ou plusieurs modèles, vous laissez un agent travailler dans un dossier que vous choisissez, et vous permettez à d’autres outils de votre ordinateur d’emprunter vos modèles via une adresse locale.',
          },
        ],
        items: [
          'Installez un DMG, EXE, MSI, ZIP portable, AppImage, DEB ou RPM depuis la page des versions GitHub ou la page de téléchargement de l’éditeur.',
          'Ajoutez un fournisseur avec votre propre clé API et récupérez sa liste de modèles ; pour les modèles locaux, l’éditeur cite des serveurs locaux comme Ollama.',
          'Selon l’éditeur, la version macOS est signée avec un certificat propre au projet, et non avec un Apple Developer ID ; macOS peut donc afficher un avertissement au premier lancement.',
          'Le mode Agent exécute des commandes dans un dossier que vous choisissez ; selon l’éditeur, ce dossier est le répertoire de départ, pas un bac à sable.',
          'PromptQuorum n’a pas testé l’application : la qualité des réponses, la fiabilité des agents, la vitesse et ce que l’application envoie sur le réseau ne sont donc pas vérifiées.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L’éditeur affirme que les données de l’application et les fichiers de l’utilisateur restent sur votre ordinateur. PromptQuorum n’a pas inspecté le trafic réseau et n’a trouvé aucune politique de confidentialité pour le vérifier.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**AQBot est un client IA de bureau développé par l’organisation GitHub AQBot-Desktop et publié pour macOS, Windows et Linux sous licence AGPL-3.0.**',
          'Le code est public sur [github.com/AQBot-Desktop/AQBot](https://github.com/AQBot-Desktop/AQBot). Le dépôt a été créé en mars 2026, la version 0.0.165 est apparue le 26 octobre 2026 et le dernier commit sur la branche principale date du 31 octobre 2026 : le développement est donc actif et aucun avertissement de projet abandonné ne s’applique. Les numéros de version restent inférieurs à 1.0. Le [site](https://app.aqbot.top) ne nomme ni société, ni adresse, ni pays ; PromptQuorum n’a donc pas pu identifier qui exploite le projet, hormis le nom de l’organisation.',
          'Selon l’éditeur, AQBot est un espace de travail IA « local d’abord » qui réunit la discussion multi-fournisseurs, des agents, une base de connaissances documentaire, des outils MCP et une passerelle API, et garde les données de l’application et les fichiers de l’utilisateur sur votre machine. La discussion se connecte à OpenAI, Claude, Gemini, DeepSeek, Qwen, Zhipu AI, xAI, AWS Bedrock et à tout point d’accès compatible OpenAI.',
          'PromptQuorum n’a pas lancé l’application et n’a vérifié ni la qualité des réponses, ni la fiabilité des agents, ni la vitesse, ni la consommation de mémoire.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l’obtenir',
        content: [
          '**Vous pouvez installer AQBot à partir des paquets de sa page de versions GitHub ; la page de téléchargement de l’éditeur renvoie vers les mêmes fichiers pour macOS, Windows et Linux.**',
          'La version v0.0.165 propose des images DMG pour Apple silicon et Intel, des installateurs EXE et MSI ainsi que des fichiers ZIP portables pour Windows en x64 et ARM64, un AppImage pour Linux en x64, et des paquets DEB et RPM pour Linux en x64 et ARM64.',
        ],
        columns: ['Plateforme', 'Paquet'],
        rows: [
          { 'Plateforme': 'macOS (Apple silicon)', 'Paquet': 'DMG' },
          { 'Plateforme': 'macOS (Intel)', 'Paquet': 'DMG (x64)' },
          { 'Plateforme': 'Windows (x64, ARM64)', 'Paquet': 'EXE d’installation, MSI ou ZIP portable' },
          { 'Plateforme': 'Linux (x64)', 'Paquet': 'AppImage, DEB ou RPM' },
          { 'Plateforme': 'Linux (ARM64)', 'Paquet': 'DEB ou RPM' },
          { 'Plateforme': 'Site web', 'Paquet': '[app.aqbot.top](https://app.aqbot.top)' },
          { 'Plateforme': 'Politique de confidentialité', 'Paquet': 'Aucune trouvée' },
        ],
        note: 'Téléchargez depuis la [page des versions GitHub](https://github.com/AQBot-Desktop/AQBot/releases/latest) ou la [page de téléchargement](https://app.aqbot.top/download) de l’éditeur. L’éditeur indique que la version macOS est signée avec un certificat propre au projet, et non avec un Apple Developer ID ; macOS peut donc signaler l’application comme endommagée ou provenant d’un développeur non vérifié. Ses instructions : cliquer sur AQBot.app en maintenant Contrôle et choisir Ouvrir, ou l’autoriser dans Réglages Système → Confidentialité et sécurité. Ne le faites que si vous faites confiance à la source du téléchargement. PromptQuorum n’a pas lancé les installateurs et n’a pas vérifié comment les paquets Windows et Linux sont signés.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**AQBot fonctionne sous macOS (Apple silicon et Intel), Windows 10 et 11 (x64 et ARM64) et Linux (x64 et ARM64) ; l’éditeur ne publie aucun minimum de mémoire ni de GPU.**',
          'Il vous faut au moins une source de modèles : un compte chez un fournisseur avec une clé API, ou un serveur local comme Ollama auquel, selon l’éditeur, AQBot peut se connecter. Selon l’éditeur, les données de l’application se trouvent dans ~/.aqbot, et les images, pièces jointes et sauvegardes dans ~/Documents/aqbot. La passerelle locale répond par défaut sur le port 8080, selon le site. PromptQuorum n’a mesuré ni la consommation de mémoire ni la vitesse.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'macOS', 'Valeur indiquée': 'Apple silicon et Intel' },
          { 'Élément': 'Windows', 'Valeur indiquée': 'Windows 10 et 11, x64 et ARM64' },
          { 'Élément': 'Linux', 'Valeur indiquée': 'x64 et ARM64' },
          { 'Élément': 'Source de modèles', 'Valeur indiquée': 'Clé API d’un fournisseur ou serveur local' },
          { 'Élément': 'Dossiers de données', 'Valeur indiquée': '~/.aqbot et ~/Documents/aqbot' },
          { 'Élément': 'Port de la passerelle', 'Valeur indiquée': '8080 par défaut' },
          { 'Élément': 'Mémoire et GPU', 'Valeur indiquée': 'Non publiés' },
        ],
        note: 'Les serveurs de modèles locaux sont des programmes distincts auxquels AQBot se connecte, selon l’éditeur. La recherche web passe par un service de recherche comme Tavily, Exa, Zhipu ou Bocha.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**AQBot est construit autour de la discussion avec de nombreux fournisseurs ; les agents, MCP, la recherche documentaire et la passerelle viennent autour.** Tous les points ci-dessous sont des affirmations de l’éditeur, tirées du site et du README.',
        ],
        items: [
          'Discussion : connecter OpenAI, Claude, Gemini, DeepSeek, Qwen ou tout point d’accès compatible OpenAI, comparer côte à côte les réponses de plusieurs modèles, créer des branches de conversation et conserver les versions des messages.',
          'Mode Agent : faire passer une discussion en lecture et modification de fichiers et en exécution de commandes dans un dossier, avec un mode d’autorisation parmi demander à chaque fois, accepter automatiquement les modifications ou accès complet, et un relevé des jetons et du coût par tâche.',
          'Espace de travail ACP : piloter des agents externes qui parlent l’Agent Client Protocol, comme Codex, Claude Agent, Gemini CLI, Cline et OpenCode, avec projets, fils enregistrés et approbations par session.',
          'MCP et Skills : exécuter des serveurs MCP via stdio, SSE ou StreamableHTTP, utiliser des outils intégrés comme @aqbot/fetch et gérer au même endroit les dossiers de Skills d’AQBot, Codex, Claude et Agents.',
          'Connaissances et recherche : indexer des fichiers privés dans une base de connaissances locale sqlite-vec, ajouter la recherche web via Tavily, Exa, Zhipu ou Bocha, et joindre au contexte fichiers, résultats de recherche et mémoires.',
          'Rôles : enregistrer une consigne système, un avatar et des réglages d’échantillonnage comme rôle réutilisable, ou installer des rôles depuis les sources prompts.chat et PlexPt.',
          'Passerelle API locale : exposer vos fournisseurs comme points d’accès OpenAI Chat Completions, OpenAI Responses, Claude et Gemini, avec clés de passerelle distinctes, TLS, journaux de requêtes et statistiques d’usage ; Quick Connect écrit l’adresse et la clé dans Claude Code, Codex, OpenCode, Gemini CLI et Cursor.',
          'Import et sauvegarde : importer des exports ChatGPT et des sauvegardes de Cherry Studio et Kelivo, et sauvegarder vers un dossier local, WebDAV ou un stockage compatible S3.',
          'Bureau et interface : icône de zone de notification, fenêtre toujours au premier plan, raccourcis globaux, lancement à l’ouverture de session, réglages de proxy, vérification automatique des mises à jour et 11 langues d’interface.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, données et sécurité des agents',
        content: [
          '**Selon l’éditeur, AQBot garde les données de l’application et les fichiers de l’utilisateur sur votre ordinateur ; PromptQuorum n’a trouvé aucune politique de confidentialité et n’a pas inspecté le trafic réseau, et ne peut donc pas le confirmer.**',
          'L’éditeur nomme deux dossiers : ~/.aqbot contient la base de données, la clé de chiffrement, le stockage vectoriel et les fichiers TLS, et ~/Documents/aqbot contient les images, pièces jointes et sauvegardes. Selon l’éditeur, les clés API sont chiffrées en AES-256 avec une clé maître locale. Le 18 novembre 2026, les chemins /privacy, /terms, /about, /imprint et /contact du [site de l’éditeur](https://app.aqbot.top) renvoyaient « 404 Not Found ».',
          'Usages du réseau au-delà des fournisseurs de modèles que vous choisissez, tels que le README et le site les décrivent : services de recherche web, serveurs MCP que vous ajoutez, sauvegardes vers WebDAV ou un stockage compatible S3, vérifications de mises à jour et configuration de fournisseur via des liens aqbot://, qui demandent confirmation avant l’import. Rien de ce que PromptQuorum a trouvé n’indique si l’application envoie des statistiques d’usage ou des rapports d’erreur.',
          'Le mode Agent peut lire et modifier des fichiers et exécuter des commandes. La FAQ de l’éditeur précise que le dossier choisi est le répertoire de travail de départ du processus, pas un bac à sable du système de fichiers, et que les commandes de terminal ne s’exécutent qu’en mode Agent, après approbation. Les modes d’autorisation sont demander à chaque fois, accepter automatiquement les modifications et accès complet. PromptQuorum n’a pas testé le comportement des approbations.',
          'La passerelle permet à d’autres outils d’utiliser les fournisseurs que vous avez configurés, avec ses propres clés. PromptQuorum n’a pas vérifié sur quelles interfaces réseau la passerelle écoute. Le code source est public sur GitHub : le flux de données peut donc être audité.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**AQBot convient à ceux qui utilisent plusieurs fournisseurs d’IA et veulent un seul client de bureau, ainsi qu’aux développeurs qui souhaitent faire passer leurs outils de programmation par une seule passerelle locale.**',
        ],
        items: [
          'Les personnes qui passent d’un fournisseur à l’autre et veulent des réponses côte à côte, des branches et des versions de messages dans une seule application.',
          'Les développeurs qui utilisent Claude Code, Codex CLI, Gemini CLI ou OpenCode et veulent, selon l’éditeur, un seul endroit pour les clés, le routage et les journaux d’usage.',
          'Les utilisateurs qui veulent, selon l’éditeur, discuter avec des documents privés via une base de connaissances locale.',
          'Les personnes qui migrent depuis des exports ChatGPT ou depuis Cherry Studio et Kelivo, dont AQBot peut importer les sauvegardes.',
          'Les lecteurs qui préfèrent un client dont le code est public sous AGPL-3.0.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        content: [
          '**AQBot convient mal dans certaines situations, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : à qui exige un éditeur avec politique de confidentialité publiée, conditions d’utilisation et société nommée ; PromptQuorum n’en a trouvé aucun pour AQBot.',
          'Ne convient pas : à qui exige une application notariée par Apple ; selon l’éditeur, la version macOS utilise un certificat propre au projet.',
          'Ne convient pas : exécuter un modèle sans autre programme. AQBot est décrit comme un client, et les modèles locaux arrivent via des serveurs comme Ollama.',
          'Non vérifié : qualité des réponses, fiabilité des agents, qualité de la recherche dans la base de connaissances, vitesse et consommation de mémoire. PromptQuorum n’a pas lancé l’application.',
          'Non vérifié : que les données et les clés restent sur votre ordinateur, où les documents sont traités lors de l’indexation, et si des statistiques d’usage sont envoyées ; PromptQuorum n’a pas inspecté le trafic réseau.',
          'Non vérifié : sur quelles interfaces réseau la passerelle écoute, et comment se comportent les modes d’autorisation de l’agent.',
          'Non vérifié : comment les paquets Windows et Linux sont signés ; l’éditeur ne cite que le certificat macOS.',
          'Non vérifié : qui exploite le projet et dans quel pays, le nombre d’utilisateurs et les tests indépendants, ainsi que la stabilité à long terme (les numéros de version sont inférieurs à 1.0 et le dépôt date de mars 2026) ; PromptQuorum n’a pas cherché de tests indépendants.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AQBot face aux alternatives',
        itemHeadings: true,
        content: [
          '**AQBot recoupe d’autres clients de discussion IA de bureau ; PromptQuorum ne les a pas comparés en pratique.** Les outils ci-dessous figurent dans l’annuaire et sont décrits d’après leurs propres tests.',
        ],
        columns: ['Outil', 'Selon les sources'],
        rows: [
          { 'Outil': 'AQBot', 'Selon les sources': 'AGPL-3.0; Mac/Windows/Linux; agents et passerelle API' },
          { 'Outil': '[Cherry Studio](/fr/local-llms/cherry-studio-ai-desktop-client)', 'Selon les sources': 'AGPL 3.0; Mac/Windows/Linux; discussion + documents' },
          { 'Outil': '[Jan](/fr/power-local-llm/jan-review)', 'Selon les sources': 'Apache 2.0 (variante); Mac/Windows/Linux; modèles locaux' },
          { 'Outil': '[Newelle](/fr/power-local-llm/newelle-review)', 'Selon les sources': 'GPL-3.0; Linux + macOS bêta; fournisseurs ou modèles locaux' },
          { 'Outil': '[Msty](/fr/power-local-llm/msty-review)', 'Selon les sources': 'Code fermé; Mac/Windows/Linux; freemium' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'AQBot inclut-il ses propres modèles d’IA ?',
            a: 'L’éditeur décrit AQBot comme un client : vous ajoutez des fournisseurs comme OpenAI, Claude, Gemini, DeepSeek ou Qwen, ou un serveur local comme Ollama. PromptQuorum n’a trouvé aucun exécuteur de modèles intégré dans les sources lues.',
          },
          {
            q: 'AQBot est-il gratuit ?',
            a: 'Selon l’éditeur, oui : l’application est gratuite à télécharger et à utiliser sous AGPL-3.0, et vous ne payez que les fournisseurs de modèles que vous connectez, ou rien si vous exécutez des modèles locaux.',
          },
          {
            q: 'Puis-je utiliser AQBot avec Claude Code ou Codex CLI ?',
            a: 'Selon l’éditeur, oui, via la passerelle locale : la démarrer, créer une clé de passerelle, et Quick Connect écrit l’adresse et la clé dans Claude Code, Codex, OpenCode, Gemini CLI ou Cursor. Claude Code peut aussi être réglé à la main avec ANTHROPIC_BASE_URL et ANTHROPIC_AUTH_TOKEN. PromptQuorum ne l’a pas testé.',
          },
          {
            q: 'Puis-je reprendre mes conversations depuis une autre application ?',
            a: 'Selon l’éditeur, AQBot importe les exports officiels de ChatGPT et les sauvegardes de Cherry Studio et Kelivo, avec aperçu, avertissements et gestion des doublons ; les imports de Cherry Studio et Kelivo peuvent aussi reprendre les fournisseurs, les clés API et les pièces jointes.',
          },
          {
            q: 'Quelles langues d’interface AQBot propose-t-il ?',
            a: 'Onze, selon l’éditeur : chinois simplifié et traditionnel, anglais, japonais, coréen, français, allemand, espagnol, russe, hindi et arabe. Le README est écrit d’abord en chinois et comporte des traductions.',
          },
          {
            q: 'À quelle fréquence AQBot est-il mis à jour ?',
            a: 'GitHub liste la version 0.0.163 le 9 octobre 2026, la 0.0.164 le 19 octobre 2026 et la 0.0.165 le 26 octobre 2026, et le dernier commit sur la branche principale date du 31 octobre 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**AQBot mérite un coup d’œil si vous jonglez avec plusieurs fournisseurs d’IA et voulez un seul client de bureau open source avec agents, MCP, recherche documentaire et passerelle locale pour vos outils de programmation.**',
          'Sur le papier, il couvre beaucoup pour une application gratuite : discussion multi-modèles, deux types d’agents, une base de connaissances, la gestion des Skills et une passerelle qui parle les formats OpenAI, Claude et Gemini. Les trois dernières versions sont sorties à 7 à 10 jours d’intervalle, et le code est public.',
          'Les contreparties sont réelles : PromptQuorum n’a trouvé sur le site ni politique de confidentialité, ni conditions d’utilisation, ni société nommée, selon l’éditeur la version macOS utilise un certificat propre au projet, les numéros de version sont inférieurs à 1.0, et PromptQuorum n’a rien testé. Commencez avec une clé API jetable et un dossier de test, et vérifiez ce que l’application fait sur votre réseau avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d’AQBot](https://app.aqbot.top) — présentation du produit, version et captures d’écran, consulté le 18 novembre 2026.',
          '[Page de téléchargement](https://app.aqbot.top/download) — installateurs, systèmes pris en charge et note sur la signature macOS, consultée le 18 novembre 2026.',
          '[FAQ](https://app.aqbot.top/faq) — dossiers de données, fournisseurs, agents et licence, consultée le 18 novembre 2026.',
          '[Guide de démarrage](https://app.aqbot.top/guide/getting-started) — installation et première configuration, daté du 28 octobre 2026 sur le site, consulté le 18 novembre 2026.',
          '[Guide des fournisseurs](https://app.aqbot.top/guide/providers) — fournisseurs pris en charge et configuration d’AWS Bedrock, daté du 28 octobre 2026 sur le site, consulté le 18 novembre 2026.',
          '[Dépôt GitHub](https://github.com/AQBot-Desktop/AQBot) — licence selon GitHub, date de création et dernier commit, consultés le 18 novembre 2026.',
          '[README](https://github.com/AQBot-Desktop/AQBot#readme) — fonctionnalités, plateformes et note sur macOS, consulté le 18 novembre 2026.',
          '[Versions GitHub](https://github.com/AQBot-Desktop/AQBot/releases) — dates de publication et paquets de la v0.0.165, consultés le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Cherry Studio](/fr/local-llms/cherry-studio-ai-desktop-client) — un client de bureau multi-fournisseurs avec discussion sur documents.',
          '[Test de Jan](/fr/power-local-llm/jan-review) — une application de discussion de bureau open source, pensée pour le hors ligne.',
          '[Test de Newelle](/fr/power-local-llm/newelle-review) — un assistant Linux avec fournisseurs cloud, modèles locaux et MCP.',
          '[Assistants de discussion LLM locaux comparés](/fr/power-local-llm/local-llm-chat-assistants-compared) — clients de discussion côte à côte.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locaux.',
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
    heroImage: '/images/aqbot-review-hero-es.webp',
    title: 'Reseña de AQBot: cliente de IA con agentes y pasarela local',
    seoTitle: 'Reseña de AQBot: cliente de IA con pasarela local',
    intro:
      'AQBot 0.0.165 es un cliente de IA de escritorio de código abierto para macOS, Windows y Linux que reúne chat con varios proveedores, agentes, herramientas MCP, una base de conocimiento de documentos y una pasarela API local para herramientas de programación. La licencia es AGPL-3.0. Esta reseña se basa en el sitio web oficial y en el repositorio de GitHub con su README y sus versiones, consultados el 18 de noviembre de 2026. PromptQuorum no ha probado la aplicación en la práctica.',
    metaDescription:
      'AQBot es un cliente de IA de escritorio de código abierto con agentes, MCP, chat con documentos y pasarela API local. Qué está confirmado y qué no.',
    twitterDescription:
      'AQBot: cliente de IA de escritorio de código abierto con chat multiproveedor, agentes, MCP, base de conocimiento de documentos y pasarela API local. Qué está confirmado.',
    audience:
      'Personas que usan varios proveedores de IA y quieren un solo cliente de escritorio, desarrolladores que quieren pasar sus herramientas de programación por una sola pasarela y usuarios que quieren chatear con sus propios documentos',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de AQBot',
    targetKeywords: [
      'reseña de AQBot',
      'cliente de IA de escritorio AQBot',
      'cliente de IA de escritorio de código abierto',
      'pasarela API local para Claude Code',
      'aplicación de chat multimodelo',
      'espacio de trabajo de agentes ACP',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AQBot es un cliente de IA de escritorio de código abierto (AGPL-3.0) que reúne en una sola aplicación el chat con muchos proveedores, agentes, herramientas MCP, búsqueda en documentos y una pasarela API local.** Funciona en macOS, Windows y Linux y es gratuito; solo pagas a los proveedores de modelos que conectes. PromptQuorum no encontró en el sitio web ninguna política de privacidad, términos ni empresa con nombre, y no ha probado la aplicación.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es AQBot y para quién es?',
        answer:
          'AQBot es un cliente de IA de escritorio que la organización de GitHub AQBot-Desktop desarrolla en abierto. Sirve para quienes trabajan con varios proveedores de IA y quieren reunir chat, agentes, búsqueda en documentos y una pasarela compartida para sus herramientas de programación.',
        bullets: [
          'Con licencia AGPL-3.0 y de descarga gratuita, según el desarrollador; los proveedores de modelos se facturan aparte.',
          'Según el desarrollador, se conecta a OpenAI, Claude, Gemini, DeepSeek, Qwen y a cualquier endpoint compatible con OpenAI, incluidos servidores locales como Ollama.',
          'El chat puede pasar a un modo Agente que edita archivos y ejecuta comandos tras la aprobación; un espacio de trabajo aparte controla agentes externos mediante el Agent Client Protocol.',
          'Una pasarela API local ofrece tus proveedores configurados en formatos de OpenAI, Claude y Gemini para herramientas como Claude Code y Codex CLI.',
          'La versión 0.0.165 se publicó el 26 de octubre de 2026 y el último commit de la rama principal es del 31 de octubre de 2026.',
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
      { label: 'Privacidad, datos y seguridad de los agentes', anchor: 'privacy' },
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
            text: 'AQBot es un cliente de IA de escritorio de código abierto que reúne chat con muchos proveedores, agentes, herramientas MCP, una base de conocimiento de documentos y una pasarela API local en una sola aplicación para macOS, Windows y Linux.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una sola ventana para todas tus cuentas de IA: añades tus propias claves API, chateas con uno o varios modelos, dejas que un agente trabaje en una carpeta que eliges y permites que otras herramientas de tu equipo usen tus modelos a través de una dirección local.',
          },
        ],
        items: [
          'Instala un DMG, EXE, MSI, ZIP portable, AppImage, DEB o RPM desde la página de versiones de GitHub o la página de descargas del desarrollador.',
          'Añade un proveedor con tu propia clave API y obtén su lista de modelos; para modelos locales, el desarrollador cita servidores locales como Ollama.',
          'Según el desarrollador, la versión de macOS está firmada con un certificado propio del proyecto, no con un Apple Developer ID, por lo que macOS puede mostrar una advertencia en el primer inicio.',
          'El modo Agente ejecuta comandos en una carpeta que eliges; según el desarrollador, esa carpeta es el directorio de inicio, no un entorno aislado.',
          'PromptQuorum no ha probado la aplicación, así que la calidad de las respuestas, la fiabilidad de los agentes, la velocidad y lo que la aplicación envía por la red no están verificados.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El desarrollador afirma que los datos de la aplicación y los archivos del usuario permanecen en tu equipo. PromptQuorum no inspeccionó el tráfico de red y no encontró ninguna política de privacidad con la que contrastarlo.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**AQBot es un cliente de IA de escritorio desarrollado por la organización de GitHub AQBot-Desktop y publicado para macOS, Windows y Linux bajo la licencia AGPL-3.0.**',
          'El código es público en [github.com/AQBot-Desktop/AQBot](https://github.com/AQBot-Desktop/AQBot). El repositorio se creó en marzo de 2026, la versión 0.0.165 apareció el 26 de octubre de 2026 y el último commit de la rama principal es del 31 de octubre de 2026, así que el desarrollo está activo y no se aplica ninguna advertencia de proyecto abandonado. Los números de versión aún son inferiores a 1.0. El [sitio web](https://app.aqbot.top) no nombra ninguna empresa, dirección ni país, por lo que PromptQuorum no pudo identificar quién opera el proyecto aparte del nombre de la organización.',
          'Según el desarrollador, AQBot es un espacio de trabajo de IA «local primero» que une chat multiproveedor, agentes, una base de conocimiento de documentos, herramientas MCP y una pasarela API, y mantiene los datos de la aplicación y los archivos del usuario en tu equipo. El chat se conecta a OpenAI, Claude, Gemini, DeepSeek, Qwen, Zhipu AI, xAI, AWS Bedrock y a cualquier endpoint compatible con OpenAI.',
          'PromptQuorum no ha ejecutado la aplicación y no ha comprobado la calidad de las respuestas, la fiabilidad de los agentes, la velocidad ni el uso de memoria.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**Puedes instalar AQBot desde los paquetes de su página de versiones de GitHub; la página de descargas del desarrollador enlaza los mismos archivos para macOS, Windows y Linux.**',
          'La versión v0.0.165 incluye imágenes DMG para Apple silicon e Intel, instaladores EXE y MSI y archivos ZIP portables para Windows en x64 y ARM64, un AppImage para Linux en x64 y paquetes DEB y RPM para Linux en x64 y ARM64.',
        ],
        columns: ['Plataforma', 'Paquete'],
        rows: [
          { 'Plataforma': 'macOS (Apple silicon)', 'Paquete': 'DMG' },
          { 'Plataforma': 'macOS (Intel)', 'Paquete': 'DMG (x64)' },
          { 'Plataforma': 'Windows (x64, ARM64)', 'Paquete': 'EXE de instalación, MSI o ZIP portable' },
          { 'Plataforma': 'Linux (x64)', 'Paquete': 'AppImage, DEB o RPM' },
          { 'Plataforma': 'Linux (ARM64)', 'Paquete': 'DEB o RPM' },
          { 'Plataforma': 'Sitio web', 'Paquete': '[app.aqbot.top](https://app.aqbot.top)' },
          { 'Plataforma': 'Política de privacidad', 'Paquete': 'No se encontró ninguna' },
        ],
        note: 'Descarga desde la [página de versiones de GitHub](https://github.com/AQBot-Desktop/AQBot/releases/latest) o la [página de descargas](https://app.aqbot.top/download) del desarrollador. El desarrollador indica que la versión de macOS está firmada con un certificado propio del proyecto, no con un Apple Developer ID, por lo que macOS puede avisar de que la aplicación está dañada o de que proviene de un desarrollador no verificado; sus instrucciones son hacer clic en AQBot.app con Control pulsado y elegir Abrir, o permitirla en Ajustes del Sistema → Privacidad y seguridad. Hazlo solo si confías en el origen de la descarga. PromptQuorum no ejecutó los instaladores y no comprobó cómo están firmados los paquetes de Windows y Linux.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**AQBot funciona en macOS (Apple silicon e Intel), Windows 10 y 11 (x64 y ARM64) y Linux (x64 y ARM64); el desarrollador no publica un mínimo de memoria ni de GPU.**',
          'Necesitas al menos una fuente de modelos: una cuenta de proveedor con clave API, o un servidor local como Ollama al que, según el desarrollador, AQBot puede conectarse. Según el desarrollador, los datos de la aplicación están en ~/.aqbot y las imágenes, los adjuntos y las copias de seguridad en ~/Documents/aqbot. La pasarela local responde por defecto en el puerto 8080, según el sitio web. PromptQuorum no midió el uso de memoria ni la velocidad.',
        ],
        columns: ['Elemento', 'Dato indicado'],
        rows: [
          { 'Elemento': 'macOS', 'Dato indicado': 'Apple silicon e Intel' },
          { 'Elemento': 'Windows', 'Dato indicado': 'Windows 10 y 11, x64 y ARM64' },
          { 'Elemento': 'Linux', 'Dato indicado': 'x64 y ARM64' },
          { 'Elemento': 'Fuente de modelos', 'Dato indicado': 'Clave API de un proveedor o servidor local' },
          { 'Elemento': 'Carpetas de datos', 'Dato indicado': '~/.aqbot y ~/Documents/aqbot' },
          { 'Elemento': 'Puerto de la pasarela', 'Dato indicado': '8080 por defecto' },
          { 'Elemento': 'Memoria y GPU', 'Dato indicado': 'No publicados' },
        ],
        note: 'Los servidores de modelos locales son programas aparte a los que AQBot se conecta, según el desarrollador. La búsqueda web usa un servicio de búsqueda como Tavily, Exa, Zhipu o Bocha.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**AQBot está construido en torno al chat con muchos proveedores; los agentes, MCP, la búsqueda en documentos y la pasarela lo rodean.** Todos los puntos siguientes son afirmaciones del desarrollador, tomadas del sitio web y del README.',
        ],
        items: [
          'Chat: conectar OpenAI, Claude, Gemini, DeepSeek, Qwen o cualquier endpoint compatible con OpenAI, comparar lado a lado las respuestas de varios modelos, crear ramas de conversación y conservar versiones de los mensajes.',
          'Modo Agente: convertir un chat en lectura y edición de archivos y ejecución de comandos en una carpeta, con un modo de permisos entre preguntar siempre, aceptar ediciones automáticamente o acceso total, y un registro de tokens y coste por tarea.',
          'Espacio de trabajo ACP: controlar agentes externos que hablan el Agent Client Protocol, como Codex, Claude Agent, Gemini CLI, Cline y OpenCode, con proyectos, hilos guardados y aprobaciones por sesión.',
          'MCP y Skills: ejecutar servidores MCP por stdio, SSE o StreamableHTTP, usar herramientas integradas como @aqbot/fetch y gestionar en un solo lugar las carpetas de Skills de AQBot, Codex, Claude y Agents.',
          'Conocimiento y búsqueda: indexar archivos privados en una base de conocimiento local sqlite-vec, añadir búsqueda web mediante Tavily, Exa, Zhipu o Bocha y adjuntar al contexto archivos, resultados de búsqueda y memorias.',
          'Roles: guardar un prompt de sistema, un avatar y ajustes de muestreo como un rol reutilizable, o instalar roles de las fuentes prompts.chat y PlexPt.',
          'Pasarela API local: ofrecer tus proveedores como endpoints de OpenAI Chat Completions, OpenAI Responses, Claude y Gemini, con claves de pasarela propias, TLS, registros de solicitudes y estadísticas de uso; Quick Connect escribe la dirección y la clave en Claude Code, Codex, OpenCode, Gemini CLI y Cursor.',
          'Importación y copias de seguridad: importar exportaciones de ChatGPT y copias de Cherry Studio y Kelivo, y hacer copias en una carpeta local, WebDAV o almacenamiento compatible con S3.',
          'Escritorio e interfaz: icono en la bandeja del sistema, ventana siempre visible, atajos globales, inicio con la sesión, ajustes de proxy, comprobación automática de actualizaciones y 11 idiomas de interfaz.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, datos y seguridad de los agentes',
        content: [
          '**Según el desarrollador, AQBot mantiene los datos de la aplicación y los archivos del usuario en tu equipo; PromptQuorum no encontró ninguna política de privacidad y no inspeccionó el tráfico de red, así que no puede confirmarlo.**',
          'El desarrollador nombra dos carpetas: ~/.aqbot contiene la base de datos, la clave de cifrado, el almacén vectorial y los archivos TLS, y ~/Documents/aqbot contiene imágenes, adjuntos y copias de seguridad. Según el desarrollador, las claves API se cifran con AES-256 mediante una clave maestra local. El 18 de noviembre de 2026, las rutas /privacy, /terms, /about, /imprint y /contact del [sitio web del desarrollador](https://app.aqbot.top) devolvían «404 Not Found».',
          'Uso de la red más allá de los proveedores de modelos que elijas, tal como lo describen el README y el sitio web: servicios de búsqueda web, servidores MCP que añadas, copias de seguridad en WebDAV o almacenamiento compatible con S3, comprobaciones de actualizaciones y la configuración de proveedores mediante enlaces aqbot://, que piden confirmación antes de importar. Nada de lo que PromptQuorum encontró indica si la aplicación envía estadísticas de uso o informes de errores.',
          'El modo Agente puede leer y editar archivos y ejecutar comandos. Las preguntas frecuentes del desarrollador dicen que la carpeta que eliges es el directorio de trabajo inicial del proceso, no un entorno aislado del sistema de archivos, y que los comandos de terminal solo se ejecutan en modo Agente, tras la aprobación. Los modos de permisos son preguntar siempre, aceptar ediciones automáticamente y acceso total. PromptQuorum no probó cómo se comportan las aprobaciones.',
          'La pasarela permite que otras herramientas usen los proveedores que configuraste, con sus propias claves. PromptQuorum no comprobó en qué interfaces de red escucha la pasarela. El código fuente es público en GitHub, así que el flujo de datos puede auditarse.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**AQBot encaja con quienes usan varios proveedores de IA y quieren un solo cliente de escritorio, y con desarrolladores que quieren pasar sus herramientas de programación por una única pasarela local.**',
        ],
        items: [
          'Personas que cambian entre proveedores y quieren respuestas lado a lado, ramas y versiones de mensajes en una sola aplicación.',
          'Desarrolladores que usan Claude Code, Codex CLI, Gemini CLI u OpenCode y quieren, según el desarrollador, un solo lugar para claves, enrutamiento y registros de uso.',
          'Usuarios que quieren, según el desarrollador, chatear con documentos privados mediante una base de conocimiento local.',
          'Personas que se pasan desde exportaciones de ChatGPT o desde Cherry Studio y Kelivo, cuyas copias AQBot puede importar.',
          'Lectores que prefieren un cliente cuyo código es público bajo AGPL-3.0.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**AQBot encaja mal en algunas situaciones y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: quien necesita un proveedor con política de privacidad publicada, términos y una empresa con nombre; PromptQuorum no encontró nada de eso para AQBot.',
          'No encaja: quien necesita una aplicación notarizada por Apple; según el desarrollador, la versión de macOS usa un certificado propio del proyecto.',
          'No encaja: ejecutar un modelo sin otro programa. AQBot se describe como un cliente, y los modelos locales llegan mediante servidores como Ollama.',
          'Sin verificar: calidad de las respuestas, fiabilidad de los agentes, calidad de la recuperación de la base de conocimiento, velocidad y uso de memoria. PromptQuorum no ha ejecutado la aplicación.',
          'Sin verificar: que los datos y las claves permanezcan en tu equipo, dónde se procesan los documentos al indexarlos y si se envían estadísticas de uso; PromptQuorum no inspeccionó el tráfico de red.',
          'Sin verificar: en qué interfaces de red escucha la pasarela y cómo se comportan los modos de permisos del agente.',
          'Sin verificar: cómo están firmados los paquetes de Windows y Linux; el desarrollador solo cita el certificado de macOS.',
          'Sin verificar: quién opera el proyecto y en qué país, el número de usuarios y las reseñas independientes, y la estabilidad a largo plazo (los números de versión son inferiores a 1.0 y el repositorio es de marzo de 2026); PromptQuorum no buscó reseñas independientes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AQBot frente a las alternativas',
        itemHeadings: true,
        content: [
          '**AQBot se solapa con otros clientes de chat de IA de escritorio; PromptQuorum no los ha comparado en la práctica.** Las herramientas siguientes están en el directorio y se describen a partir de sus propias reseñas.',
        ],
        columns: ['Herramienta', 'Según las fuentes'],
        rows: [
          { 'Herramienta': 'AQBot', 'Según las fuentes': 'AGPL-3.0; Mac/Windows/Linux; proveedores, agentes, pasarela' },
          { 'Herramienta': '[Cherry Studio](/es/local-llms/cherry-studio-ai-desktop-client)', 'Según las fuentes': 'AGPL 3.0; Mac/Windows/Linux; chat + chat con documentos' },
          { 'Herramienta': '[Jan](/es/power-local-llm/jan-review)', 'Según las fuentes': 'Apache 2.0 (variante); Mac/Windows/Linux; modelos locales' },
          { 'Herramienta': '[Newelle](/es/power-local-llm/newelle-review)', 'Según las fuentes': 'GPL-3.0; Linux + macOS beta; proveedores o modelos locales' },
          { 'Herramienta': '[Msty](/es/power-local-llm/msty-review)', 'Según las fuentes': 'Código cerrado; Mac/Windows/Linux; freemium' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Incluye AQBot sus propios modelos de IA?',
            a: 'El desarrollador describe AQBot como un cliente: añades proveedores como OpenAI, Claude, Gemini, DeepSeek o Qwen, o un servidor local como Ollama. PromptQuorum no encontró ningún ejecutor de modelos integrado en las fuentes que leyó.',
          },
          {
            q: '¿Es gratis AQBot?',
            a: 'Según el desarrollador, sí: la aplicación se descarga y se usa gratis bajo AGPL-3.0, y solo pagas a los proveedores de modelos que conectes, o nada si ejecutas modelos locales.',
          },
          {
            q: '¿Puedo usar AQBot con Claude Code o Codex CLI?',
            a: 'Según el desarrollador, sí, mediante la pasarela local: la inicias, creas una clave de pasarela y Quick Connect escribe la dirección y la clave en Claude Code, Codex, OpenCode, Gemini CLI o Cursor. Claude Code también puede configurarse a mano con ANTHROPIC_BASE_URL y ANTHROPIC_AUTH_TOKEN. PromptQuorum no lo probó.',
          },
          {
            q: '¿Puedo llevar mis chats desde otra aplicación?',
            a: 'Según el desarrollador, AQBot importa las exportaciones oficiales de ChatGPT y las copias de Cherry Studio y Kelivo, con vista previa, advertencias y gestión de duplicados; las importaciones de Cherry Studio y Kelivo también pueden traer proveedores, claves API y adjuntos.',
          },
          {
            q: '¿Qué idiomas de interfaz ofrece AQBot?',
            a: 'Once, según el desarrollador: chino simplificado y tradicional, inglés, japonés, coreano, francés, alemán, español, ruso, hindi y árabe. El README está escrito primero en chino y tiene traducciones.',
          },
          {
            q: '¿Cada cuánto se actualiza AQBot?',
            a: 'GitHub lista la versión 0.0.163 el 9 de octubre de 2026, la 0.0.164 el 19 de octubre de 2026 y la 0.0.165 el 26 de octubre de 2026, y el último commit de la rama principal es del 31 de octubre de 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**AQBot merece una mirada si manejas varios proveedores de IA y quieres un solo cliente de escritorio de código abierto con agentes, MCP, búsqueda en documentos y una pasarela local para tus herramientas de programación.**',
          'Sobre el papel cubre mucho para una aplicación gratuita: chat multimodelo, dos tipos de agentes, una base de conocimiento, gestión de Skills y una pasarela que habla los formatos de OpenAI, Claude y Gemini. Las tres últimas versiones salieron con 7 a 10 días de diferencia, y el código es público.',
          'Las contrapartidas son reales: PromptQuorum no encontró en el sitio web política de privacidad, términos ni empresa con nombre, según el desarrollador la versión de macOS usa un certificado propio del proyecto, los números de versión son inferiores a 1.0 y PromptQuorum no ha probado nada. Empieza con una clave API desechable y una carpeta de prueba, y comprueba qué hace la aplicación en tu red antes de depender de ella.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de AQBot](https://app.aqbot.top) — resumen del producto, versión y capturas, consultado el 18 de noviembre de 2026.',
          '[Página de descargas](https://app.aqbot.top/download) — instaladores, sistemas compatibles y nota sobre la firma de macOS, consultada el 18 de noviembre de 2026.',
          '[Preguntas frecuentes](https://app.aqbot.top/faq) — carpetas de datos, proveedores, agentes y licencia, consultadas el 18 de noviembre de 2026.',
          '[Guía de inicio](https://app.aqbot.top/guide/getting-started) — instalación y primera configuración, fechada el 28 de octubre de 2026 en el sitio, consultada el 18 de noviembre de 2026.',
          '[Guía de proveedores](https://app.aqbot.top/guide/providers) — proveedores compatibles y configuración de AWS Bedrock, fechada el 28 de octubre de 2026 en el sitio, consultada el 18 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/AQBot-Desktop/AQBot) — licencia según GitHub, fecha de creación y último commit, consultados el 18 de noviembre de 2026.',
          '[README](https://github.com/AQBot-Desktop/AQBot#readme) — funciones, plataformas y nota sobre macOS, consultado el 18 de noviembre de 2026.',
          '[Versiones de GitHub](https://github.com/AQBot-Desktop/AQBot/releases) — fechas de publicación y paquetes de la v0.0.165, consultados el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Cherry Studio](/es/local-llms/cherry-studio-ai-desktop-client) — un cliente de escritorio multiproveedor con chat con documentos.',
          '[Reseña de Jan](/es/power-local-llm/jan-review) — una aplicación de chat de escritorio de código abierto, pensada para uso sin conexión.',
          '[Reseña de Newelle](/es/power-local-llm/newelle-review) — un asistente para Linux con proveedores en la nube, modelos locales y MCP.',
          '[Asistentes de chat con LLM locales comparados](/es/power-local-llm/local-llm-chat-assistants-compared) — clientes de chat lado a lado.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA locales.',
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
    heroImage: '/images/aqbot-review-hero-pt.webp',
    title: 'Análise do AQBot: cliente de IA com agentes e gateway local',
    seoTitle: 'Análise do AQBot: cliente de IA com gateway local',
    intro:
      'O AQBot 0.0.165 é um cliente de IA para desktop de código aberto para macOS, Windows e Linux que reúne chat com vários provedores, agentes, ferramentas MCP, uma base de conhecimento de documentos e um gateway de API local para ferramentas de programação. A licença é AGPL-3.0. Esta análise se baseia no site oficial e no repositório do GitHub com README e versões, consultados em 18 de novembro de 2026. A PromptQuorum não testou o aplicativo na prática.',
    metaDescription:
      'O AQBot é um cliente de IA para desktop de código aberto com agentes, MCP, chat com documentos e gateway de API local. O que está confirmado.',
    twitterDescription:
      'AQBot: cliente de IA para desktop de código aberto com chat multiprovedor, agentes, MCP, base de conhecimento de documentos e gateway de API local. O que está confirmado.',
    audience:
      'Pessoas que usam vários provedores de IA e querem um único cliente para desktop, desenvolvedores que querem passar suas ferramentas de programação por um só gateway e usuários que querem conversar com seus próprios documentos',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do AQBot',
    targetKeywords: [
      'análise do AQBot',
      'cliente de IA para desktop AQBot',
      'cliente de IA para desktop de código aberto',
      'gateway de API local para Claude Code',
      'aplicativo de chat com vários modelos',
      'área de trabalho de agentes ACP',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O AQBot é um cliente de IA para desktop de código aberto (AGPL-3.0) que reúne em um só aplicativo chat com muitos provedores, agentes, ferramentas MCP, busca em documentos e um gateway de API local.** Ele roda em macOS, Windows e Linux e é gratuito; você paga apenas os provedores de modelos que conectar. A PromptQuorum não encontrou no site política de privacidade, termos de uso nem empresa identificada, e não testou o aplicativo.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o AQBot e para quem ele serve?',
        answer:
          'O AQBot é um cliente de IA para desktop que a organização do GitHub AQBot-Desktop desenvolve de forma aberta. Ele serve para quem trabalha com vários provedores de IA e quer reunir chat, agentes, busca em documentos e um gateway compartilhado para as ferramentas de programação em um só lugar.',
        bullets: [
          'Licenciado sob AGPL-3.0 e gratuito para baixar, segundo o desenvolvedor; os provedores de modelos são cobrados à parte.',
          'Segundo o desenvolvedor, conecta-se à OpenAI, Claude, Gemini, DeepSeek, Qwen e a qualquer endpoint compatível com a OpenAI, inclusive servidores locais como o Ollama.',
          'O chat pode mudar para um modo Agente que edita arquivos e executa comandos após aprovação; uma área de trabalho separada controla agentes externos pelo Agent Client Protocol.',
          'Um gateway de API local oferece seus provedores configurados nos formatos da OpenAI, Claude e Gemini para ferramentas como Claude Code e Codex CLI.',
          'A versão 0.0.165 foi lançada em 26 de outubro de 2026 e o último commit da branch principal é de 31 de outubro de 2026.',
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
      { label: 'Privacidade, dados e segurança dos agentes', anchor: 'privacy' },
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
            text: 'O AQBot é um cliente de IA para desktop de código aberto que reúne chat com muitos provedores, agentes, ferramentas MCP, uma base de conhecimento de documentos e um gateway de API local em um só aplicativo para macOS, Windows e Linux.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma janela única para todas as suas contas de IA: você adiciona suas próprias chaves de API, conversa com um ou vários modelos, deixa um agente trabalhar em uma pasta que você escolhe e permite que outras ferramentas do seu computador usem seus modelos por um endereço local.',
          },
        ],
        items: [
          'Instale um DMG, EXE, MSI, ZIP portátil, AppImage, DEB ou RPM pela página de versões do GitHub ou pela página de download do desenvolvedor.',
          'Adicione um provedor com a sua própria chave de API e busque a lista de modelos; para modelos locais, o desenvolvedor cita servidores locais como o Ollama.',
          'Segundo o desenvolvedor, a versão para macOS é assinada com um certificado próprio do projeto, não com um Apple Developer ID, por isso o macOS pode exibir um aviso na primeira abertura.',
          'O modo Agente executa comandos em uma pasta que você escolhe; segundo o desenvolvedor, essa pasta é o diretório inicial, não uma sandbox.',
          'A PromptQuorum não testou o aplicativo, então a qualidade das respostas, a confiabilidade dos agentes, a velocidade e o que o aplicativo envia pela rede não foram verificados.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O desenvolvedor afirma que os dados do aplicativo e os arquivos do usuário ficam no seu computador. A PromptQuorum não inspecionou o tráfego de rede e não encontrou política de privacidade para conferir isso.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O AQBot é um cliente de IA para desktop desenvolvido pela organização do GitHub AQBot-Desktop e lançado para macOS, Windows e Linux sob a licença AGPL-3.0.**',
          'O código é público em [github.com/AQBot-Desktop/AQBot](https://github.com/AQBot-Desktop/AQBot). O repositório foi criado em março de 2026, a versão 0.0.165 apareceu em 26 de outubro de 2026 e o último commit da branch principal é de 31 de outubro de 2026, então o desenvolvimento está ativo e não se aplica aviso de projeto abandonado. Os números de versão ainda estão abaixo de 1.0. O [site](https://app.aqbot.top) não cita empresa, endereço nem país, por isso a PromptQuorum não conseguiu identificar quem opera o projeto além do nome da organização.',
          'Segundo o desenvolvedor, o AQBot é uma área de trabalho de IA «local primeiro» que une chat multiprovedor, agentes, uma base de conhecimento de documentos, ferramentas MCP e um gateway de API, e mantém os dados do aplicativo e os arquivos do usuário na sua máquina. O chat se conecta à OpenAI, Claude, Gemini, DeepSeek, Qwen, Zhipu AI, xAI, AWS Bedrock e a qualquer endpoint compatível com a OpenAI.',
          'A PromptQuorum não executou o aplicativo e não verificou a qualidade das respostas, a confiabilidade dos agentes, a velocidade nem o uso de memória.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você pode instalar o AQBot pelos pacotes da página de versões do GitHub; a página de download do desenvolvedor aponta para os mesmos arquivos para macOS, Windows e Linux.**',
          'A versão v0.0.165 traz imagens DMG para Apple silicon e Intel, instaladores EXE e MSI e arquivos ZIP portáteis para Windows em x64 e ARM64, um AppImage para Linux em x64 e pacotes DEB e RPM para Linux em x64 e ARM64.',
        ],
        columns: ['Plataforma', 'Pacote'],
        rows: [
          { 'Plataforma': 'macOS (Apple silicon)', 'Pacote': 'DMG' },
          { 'Plataforma': 'macOS (Intel)', 'Pacote': 'DMG (x64)' },
          { 'Plataforma': 'Windows (x64, ARM64)', 'Pacote': 'EXE de instalação, MSI ou ZIP portátil' },
          { 'Plataforma': 'Linux (x64)', 'Pacote': 'AppImage, DEB ou RPM' },
          { 'Plataforma': 'Linux (ARM64)', 'Pacote': 'DEB ou RPM' },
          { 'Plataforma': 'Site oficial', 'Pacote': '[app.aqbot.top](https://app.aqbot.top)' },
          { 'Plataforma': 'Política de privacidade', 'Pacote': 'Nenhuma encontrada' },
        ],
        note: 'Baixe pela [página de versões do GitHub](https://github.com/AQBot-Desktop/AQBot/releases/latest) ou pela [página de download](https://app.aqbot.top/download) do desenvolvedor. O desenvolvedor informa que a versão para macOS é assinada com um certificado próprio do projeto, não com um Apple Developer ID; por isso o macOS pode indicar que o aplicativo está danificado ou vem de um desenvolvedor não verificado. As instruções dele são clicar em AQBot.app com a tecla Control pressionada e escolher Abrir, ou permitir o aplicativo em Ajustes do Sistema → Privacidade e Segurança. Faça isso apenas se você confiar na origem do arquivo baixado. A PromptQuorum não executou os instaladores e não verificou como os pacotes de Windows e Linux são assinados.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O AQBot roda em macOS (Apple silicon e Intel), Windows 10 e 11 (x64 e ARM64) e Linux (x64 e ARM64); o desenvolvedor não publica mínimo de memória nem de GPU.**',
          'Você precisa de pelo menos uma fonte de modelos: uma conta de provedor com chave de API, ou um servidor local como o Ollama ao qual, segundo o desenvolvedor, o AQBot pode se conectar. Segundo o desenvolvedor, os dados do aplicativo ficam em ~/.aqbot e as imagens, os anexos e os backups em ~/Documents/aqbot. O gateway local responde por padrão na porta 8080, segundo o site. A PromptQuorum não mediu uso de memória nem velocidade.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'macOS', 'Valor informado': 'Apple silicon e Intel' },
          { 'Item': 'Windows', 'Valor informado': 'Windows 10 e 11, x64 e ARM64' },
          { 'Item': 'Linux', 'Valor informado': 'x64 e ARM64' },
          { 'Item': 'Fonte de modelos', 'Valor informado': 'Chave de API de um provedor ou servidor local' },
          { 'Item': 'Pastas de dados', 'Valor informado': '~/.aqbot e ~/Documents/aqbot' },
          { 'Item': 'Porta do gateway', 'Valor informado': '8080 por padrão' },
          { 'Item': 'Memória e GPU', 'Valor informado': 'Não publicados' },
        ],
        note: 'Servidores de modelos locais são programas separados aos quais o AQBot se conecta, segundo o desenvolvedor. A busca na web usa um serviço de busca como Tavily, Exa, Zhipu ou Bocha.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O AQBot é construído em torno do chat com muitos provedores; agentes, MCP, busca em documentos e o gateway ficam ao redor.** Todos os itens abaixo são afirmações do desenvolvedor, tiradas do site e do README.',
        ],
        items: [
          'Chat: conectar OpenAI, Claude, Gemini, DeepSeek, Qwen ou qualquer endpoint compatível com a OpenAI, comparar lado a lado as respostas de vários modelos, criar ramificações de conversa e manter versões das mensagens.',
          'Modo Agente: mudar um chat para ler e editar arquivos e executar comandos em uma pasta, com um modo de permissão entre perguntar sempre, aceitar edições automaticamente ou acesso total, e um registro de tokens e custo por tarefa.',
          'Área de trabalho ACP: controlar agentes externos que falam o Agent Client Protocol, como Codex, Claude Agent, Gemini CLI, Cline e OpenCode, com projetos, conversas salvas e aprovações por sessão.',
          'MCP e Skills: executar servidores MCP por stdio, SSE ou StreamableHTTP, usar ferramentas integradas como @aqbot/fetch e gerenciar em um só lugar as pastas de Skills do AQBot, Codex, Claude e Agents.',
          'Conhecimento e busca: indexar arquivos privados em uma base de conhecimento local sqlite-vec, adicionar busca na web via Tavily, Exa, Zhipu ou Bocha e anexar ao contexto arquivos, resultados de busca e memórias.',
          'Papéis: salvar um prompt de sistema, um avatar e ajustes de amostragem como um papel reutilizável, ou instalar papéis das fontes prompts.chat e PlexPt.',
          'Gateway de API local: oferecer seus provedores como endpoints da OpenAI Chat Completions, OpenAI Responses, Claude e Gemini, com chaves de gateway próprias, TLS, logs de requisições e estatísticas de uso; o Quick Connect grava o endereço e a chave no Claude Code, Codex, OpenCode, Gemini CLI e Cursor.',
          'Importação e backup: importar exportações do ChatGPT e backups do Cherry Studio e do Kelivo, e fazer backup em uma pasta local, WebDAV ou armazenamento compatível com S3.',
          'Desktop e interface: ícone na bandeja do sistema, janela sempre visível, atalhos globais, início com o login, ajustes de proxy, verificação automática de atualizações e 11 idiomas de interface.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, dados e segurança dos agentes',
        content: [
          '**Segundo o desenvolvedor, o AQBot mantém os dados do aplicativo e os arquivos do usuário no seu computador; a PromptQuorum não encontrou política de privacidade e não inspecionou o tráfego de rede, então não pode confirmar isso.**',
          'O desenvolvedor cita duas pastas: ~/.aqbot guarda o banco de dados, a chave de criptografia, o armazenamento vetorial e os arquivos TLS, e ~/Documents/aqbot guarda imagens, anexos e backups. Segundo o desenvolvedor, as chaves de API são criptografadas com AES-256 usando uma chave mestra local. Em 18 de novembro de 2026, os caminhos /privacy, /terms, /about, /imprint e /contact do [site do desenvolvedor](https://app.aqbot.top) retornavam «404 Not Found».',
          'Uso da rede além dos provedores de modelos que você escolher, como o README e o site descrevem: serviços de busca na web, servidores MCP que você adicionar, backups em WebDAV ou armazenamento compatível com S3, verificações de atualização e a configuração de provedores por links aqbot://, que pedem confirmação antes de importar. Nada do que a PromptQuorum encontrou diz se o aplicativo envia estatísticas de uso ou relatórios de erro.',
          'O modo Agente pode ler e editar arquivos e executar comandos. O FAQ do desenvolvedor diz que a pasta escolhida é o diretório de trabalho inicial do processo, não uma sandbox do sistema de arquivos, e que comandos de terminal só rodam no modo Agente, após aprovação. Os modos de permissão são perguntar sempre, aceitar edições automaticamente e acesso total. A PromptQuorum não testou como as aprovações se comportam.',
          'O gateway permite que outras ferramentas usem os provedores que você configurou, com chaves próprias. A PromptQuorum não verificou em quais interfaces de rede o gateway escuta. O código-fonte é público no GitHub, então o fluxo de dados pode ser auditado.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O AQBot serve para quem usa vários provedores de IA e quer um único cliente para desktop, e para desenvolvedores que querem passar suas ferramentas de programação por um só gateway local.**',
        ],
        items: [
          'Pessoas que alternam entre provedores e querem respostas lado a lado, ramificações e versões de mensagens em um só aplicativo.',
          'Desenvolvedores que usam Claude Code, Codex CLI, Gemini CLI ou OpenCode e querem, segundo o desenvolvedor, um só lugar para chaves, roteamento e logs de uso.',
          'Usuários que querem, segundo o desenvolvedor, conversar com documentos privados por meio de uma base de conhecimento local.',
          'Pessoas que estão migrando de exportações do ChatGPT ou do Cherry Studio e do Kelivo, cujos backups o AQBot pode importar.',
          'Leitores que preferem um cliente cujo código é público sob AGPL-3.0.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O AQBot serve mal em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: para quem precisa de um fornecedor com política de privacidade publicada, termos e empresa identificada; a PromptQuorum não encontrou nada disso para o AQBot.',
          'Não serve: para quem precisa de um aplicativo notarizado pela Apple; segundo o desenvolvedor, a versão para macOS usa um certificado próprio do projeto.',
          'Não serve: para rodar um modelo sem outro programa. O AQBot é descrito como um cliente, e os modelos locais chegam por servidores como o Ollama.',
          'Não verificado: qualidade das respostas, confiabilidade dos agentes, qualidade da busca na base de conhecimento, velocidade e uso de memória. A PromptQuorum não executou o aplicativo.',
          'Não verificado: que dados e chaves ficam no seu computador, onde os documentos são processados na indexação e se estatísticas de uso são enviadas; a PromptQuorum não inspecionou o tráfego de rede.',
          'Não verificado: em quais interfaces de rede o gateway escuta e como se comportam os modos de permissão do agente.',
          'Não verificado: como os pacotes de Windows e Linux são assinados; o desenvolvedor cita apenas o certificado do macOS.',
          'Não verificado: quem opera o projeto e em que país, número de usuários e análises independentes, e a estabilidade a longo prazo (os números de versão estão abaixo de 1.0 e o repositório é de março de 2026); a PromptQuorum não procurou análises independentes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AQBot versus alternativas',
        itemHeadings: true,
        content: [
          '**O AQBot se sobrepõe a outros clientes de chat de IA para desktop; a PromptQuorum não os comparou na prática.** As ferramentas abaixo estão no diretório e são descritas a partir de suas próprias análises.',
        ],
        columns: ['Ferramenta', 'Segundo as fontes'],
        rows: [
          { 'Ferramenta': 'AQBot', 'Segundo as fontes': 'AGPL-3.0; Mac/Windows/Linux; provedores, agentes, gateway' },
          { 'Ferramenta': '[Cherry Studio](/pt/local-llms/cherry-studio-ai-desktop-client)', 'Segundo as fontes': 'AGPL 3.0; Mac/Windows/Linux; chat + chat com documentos' },
          { 'Ferramenta': '[Jan](/pt/power-local-llm/jan-review)', 'Segundo as fontes': 'Apache 2.0 (variante); Mac/Windows/Linux; modelos locais' },
          { 'Ferramenta': '[Newelle](/pt/power-local-llm/newelle-review)', 'Segundo as fontes': 'GPL-3.0; Linux + macOS beta; provedores ou modelos locais' },
          { 'Ferramenta': '[Msty](/pt/power-local-llm/msty-review)', 'Segundo as fontes': 'Código fechado; Mac/Windows/Linux; freemium' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O AQBot inclui modelos de IA próprios?',
            a: 'O desenvolvedor descreve o AQBot como um cliente: você adiciona provedores como OpenAI, Claude, Gemini, DeepSeek ou Qwen, ou um servidor local como o Ollama. A PromptQuorum não encontrou nenhum executor de modelos integrado nas fontes que leu.',
          },
          {
            q: 'O AQBot é gratuito?',
            a: 'Segundo o desenvolvedor, sim: o aplicativo é gratuito para baixar e usar sob AGPL-3.0, e você paga apenas os provedores de modelos que conectar, ou nada se rodar modelos locais.',
          },
          {
            q: 'Posso usar o AQBot com Claude Code ou Codex CLI?',
            a: 'Segundo o desenvolvedor, sim, pelo gateway local: inicie-o, crie uma chave de gateway, e o Quick Connect grava o endereço e a chave no Claude Code, Codex, OpenCode, Gemini CLI ou Cursor. O Claude Code também pode ser configurado manualmente com ANTHROPIC_BASE_URL e ANTHROPIC_AUTH_TOKEN. A PromptQuorum não testou isso.',
          },
          {
            q: 'Posso levar meus chats de outro aplicativo?',
            a: 'Segundo o desenvolvedor, o AQBot importa exportações oficiais do ChatGPT e backups do Cherry Studio e do Kelivo, com prévia, avisos e tratamento de duplicatas; as importações do Cherry Studio e do Kelivo também podem trazer provedores, chaves de API e anexos.',
          },
          {
            q: 'Quais idiomas de interface o AQBot oferece?',
            a: 'Onze, segundo o desenvolvedor: chinês simplificado e tradicional, inglês, japonês, coreano, francês, alemão, espanhol, russo, hindi e árabe. O README é escrito primeiro em chinês e tem traduções.',
          },
          {
            q: 'Com que frequência o AQBot é atualizado?',
            a: 'O GitHub lista a versão 0.0.163 em 9 de outubro de 2026, a 0.0.164 em 19 de outubro de 2026 e a 0.0.165 em 26 de outubro de 2026, e o último commit da branch principal é de 31 de outubro de 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O AQBot vale uma olhada se você alterna entre vários provedores de IA e quer um único cliente para desktop de código aberto com agentes, MCP, busca em documentos e um gateway local para as suas ferramentas de programação.**',
          'No papel, ele cobre muita coisa para um aplicativo gratuito: chat com vários modelos, dois tipos de agentes, uma base de conhecimento, gerenciamento de Skills e um gateway que fala os formatos da OpenAI, Claude e Gemini. As três últimas versões saíram com 7 a 10 dias de intervalo, e o código é público.',
          'As contrapartidas são reais: a PromptQuorum não encontrou no site política de privacidade, termos nem empresa identificada, segundo o desenvolvedor a versão para macOS usa um certificado próprio do projeto, os números de versão estão abaixo de 1.0 e a PromptQuorum não testou nada. Comece com uma chave de API descartável e uma pasta de teste, e verifique o que o aplicativo faz na sua rede antes de depender dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do AQBot](https://app.aqbot.top) — visão geral do produto, versão e capturas de tela, consultado em 18 de novembro de 2026.',
          '[Página de download](https://app.aqbot.top/download) — instaladores, sistemas compatíveis e nota sobre a assinatura do macOS, consultada em 18 de novembro de 2026.',
          '[FAQ](https://app.aqbot.top/faq) — pastas de dados, provedores, agentes e licença, consultado em 18 de novembro de 2026.',
          '[Guia de primeiros passos](https://app.aqbot.top/guide/getting-started) — instalação e primeira configuração, datado de 28 de outubro de 2026 no site, consultado em 18 de novembro de 2026.',
          '[Guia de provedores](https://app.aqbot.top/guide/providers) — provedores compatíveis e configuração do AWS Bedrock, datado de 28 de outubro de 2026 no site, consultado em 18 de novembro de 2026.',
          '[Repositório no GitHub](https://github.com/AQBot-Desktop/AQBot) — licença segundo o GitHub, data de criação e último commit, consultados em 18 de novembro de 2026.',
          '[README](https://github.com/AQBot-Desktop/AQBot#readme) — recursos, plataformas e nota sobre o macOS, consultado em 18 de novembro de 2026.',
          '[Versões no GitHub](https://github.com/AQBot-Desktop/AQBot/releases) — datas de lançamento e pacotes da v0.0.165, consultados em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Cherry Studio](/pt/local-llms/cherry-studio-ai-desktop-client) — um cliente para desktop multiprovedor com chat com documentos.',
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um aplicativo de chat para desktop de código aberto, pensado para uso offline.',
          '[Análise do Newelle](/pt/power-local-llm/newelle-review) — um assistente para Linux com provedores na nuvem, modelos locais e MCP.',
          '[Assistentes de chat com LLMs locais comparados](/pt/power-local-llm/local-llm-chat-assistants-compared) — clientes de chat lado a lado.',
          '[Diretório de software de LLMs locais](/pt/directory) — o catálogo completo de ferramentas de IA locais.',
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
    heroImage: '/images/aqbot-review-hero-ja.webp',
    title: 'AQBotレビュー：AIデスクトップクライアント',
    seoTitle: 'AQBotレビュー：ローカルゲートウェイ付きAIクライアント',
    intro:
      'AQBot 0.0.165は、複数プロバイダーとのチャット、エージェント、MCPツール、ドキュメント用ナレッジベース、コーディングツール向けのローカルAPIゲートウェイをまとめた、macOS・Windows・Linux対応のオープンソースのデスクトップAIクライアントです。ライセンスはAGPL-3.0です。このレビューは公式サイトとGitHubリポジトリ（READMEとリリース）に基づいており、確認日は2026年11月18日です。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'AQBotは、エージェント、MCP、ドキュメントチャット、ローカルAPIゲートウェイを備えたオープンソースのデスクトップAIクライアントです。確認できたことと、できなかったことをまとめました。',
    twitterDescription:
      'AQBot：複数プロバイダーのチャット、エージェント、MCP、ドキュメント用ナレッジベース、ローカルAPIゲートウェイを備えたオープンソースのデスクトップAIクライアント。確認できたことを整理しました。',
    audience:
      '複数のAIプロバイダーを使い、1つのデスクトップクライアントにまとめたい人、コーディングツールを1つのゲートウェイ経由にしたい開発者、自分のドキュメントとチャットしたい人',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'AQBotレビュー',
    targetKeywords: [
      'AQBotレビュー',
      'AQBot デスクトップAIクライアント',
      'オープンソース AIデスクトップクライアント',
      'Claude Code ローカルAPIゲートウェイ',
      'マルチモデル チャットアプリ',
      'ACPエージェント ワークベンチ',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AQBotは、多数のプロバイダーとのチャット、エージェント、MCPツール、ドキュメント検索、ローカルAPIゲートウェイを1つのアプリにまとめた、オープンソース（AGPL-3.0）のデスクトップAIクライアントです。**macOS、Windows、Linuxで動作し、無料で使えます。支払うのは接続するモデルプロバイダーの利用料だけです。PromptQuorumは、公式サイトにプライバシーポリシー、利用規約、会社名が見当たらないことを確認しており、アプリは試していません。',
    quickAnswerTop: {
      ja: {
        question: 'AQBotとは何で、誰に向いていますか？',
        answer:
          'AQBotは、GitHub組織AQBot-DesktopがGitHub上で公開開発しているデスクトップAIクライアントです。複数のAIプロバイダーを使い、チャット、エージェント、ドキュメント検索、コーディングツール向けの共有ゲートウェイを1か所にまとめたい人に向いています。',
        bullets: [
          '開発元によると、ライセンスはAGPL-3.0で、ダウンロードは無料です。モデルプロバイダーの利用料は別途かかります。',
          '開発元によると、OpenAI、Claude、Gemini、DeepSeek、Qwen、OpenAI互換のエンドポイント（Ollamaなどのローカルサーバーを含む）に接続できます。',
          'チャットはエージェントモードに切り替えられ、承認後にファイルを編集しコマンドを実行します。別のワークベンチでは、Agent Client Protocol経由で外部エージェントを操作します。',
          'ローカルAPIゲートウェイは、設定済みのプロバイダーをOpenAI、Claude、Gemini形式で提供し、Claude CodeやCodex CLIなどのツールから使えます。',
          'バージョン0.0.165は2026年10月26日にリリースされ、メインブランチの最新コミットは2026年10月31日です。',
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
      { label: 'プライバシー、データ、エージェントの安全性', anchor: 'privacy' },
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
            text: 'AQBotは、多数のプロバイダーとのチャット、エージェント、MCPツール、ドキュメント用ナレッジベース、ローカルAPIゲートウェイを、macOS・Windows・Linux向けの1つのアプリにまとめたオープンソースのデスクトップAIクライアントです。',
          },
          {
            type: 'plain-terms',
            text: 'すべてのAIアカウントをまとめる1つの窓口のようなものです。自分のAPIキーを登録し、1つまたは複数のモデルとチャットし、選んだフォルダでエージェントに作業させ、パソコン上の他のツールにローカルアドレス経由でモデルを使わせられます。',
          },
        ],
        items: [
          'GitHubのリリースページ、または開発元のダウンロードページから、DMG、EXE、MSI、ポータブルZIP、AppImage、DEB、RPMのいずれかをインストールします。',
          '自分のAPIキーでプロバイダーを追加し、モデル一覧を取得します。ローカルモデルについて、開発元はOllamaなどのローカルサーバーを挙げています。',
          '開発元によると、macOS版はApple Developer IDではなくプロジェクト独自の証明書で署名されているため、初回起動時にmacOSが警告を表示することがあります。',
          'エージェントモードは、選んだフォルダでコマンドを実行します。開発元によると、そのフォルダは開始ディレクトリにすぎず、サンドボックスではありません。',
          'PromptQuorumはアプリを試していないため、回答の質、エージェントの信頼性、速度、アプリがネットワークに送る内容は未確認です。',
        ],
        callouts: [
          {
            type: 'note',
            text: '開発元は、アプリのデータとユーザーのファイルはパソコン上にとどまると説明しています。PromptQuorumはネットワーク通信を調べておらず、照合できるプライバシーポリシーも見つけられませんでした。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**AQBotは、GitHub組織AQBot-Desktopが開発し、AGPL-3.0ライセンスでmacOS、Windows、Linux向けに公開しているデスクトップAIクライアントです。**',
          'コードは[github.com/AQBot-Desktop/AQBot](https://github.com/AQBot-Desktop/AQBot)で公開されています。リポジトリは2026年3月に作成され、バージョン0.0.165は2026年10月26日に登場し、メインブランチの最新コミットは2026年10月31日です。開発は活発で、更新停止の警告は該当しません。バージョン番号はまだ1.0未満です。[公式サイト](https://app.aqbot.top)には会社名、住所、国の記載がなく、PromptQuorumは組織名以外に運営者を特定できませんでした。',
          '開発元によると、AQBotは「ローカルファースト」のAIワークベンチで、複数プロバイダーとのチャット、エージェント、ドキュメント用ナレッジベース、MCPツール、APIゲートウェイをまとめ、アプリのデータとユーザーのファイルをパソコン上に置きます。チャットは、OpenAI、Claude、Gemini、DeepSeek、Qwen、Zhipu AI、xAI、AWS Bedrock、OpenAI互換のエンドポイントに接続できます。',
          'PromptQuorumはアプリを実行しておらず、回答の質、エージェントの信頼性、速度、メモリ使用量は確認していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**AQBotは、GitHubのリリースページにあるパッケージからインストールできます。開発元のダウンロードページも、macOS、Windows、Linux向けに同じファイルへリンクしています。**',
          'v0.0.165のリリースには、Apple siliconとIntel向けのDMGイメージ、Windows（x64とARM64）向けのセットアップEXEとMSIインストーラーおよびポータブルZIP、Linux（x64）向けのAppImage、Linux（x64とARM64）向けのDEBとRPMパッケージが並んでいます。',
        ],
        columns: ['プラットフォーム', 'パッケージ'],
        rows: [
          { 'プラットフォーム': 'macOS（Apple silicon）', 'パッケージ': 'DMG' },
          { 'プラットフォーム': 'macOS（Intel）', 'パッケージ': 'DMG（x64）' },
          { 'プラットフォーム': 'Windows（x64、ARM64）', 'パッケージ': 'セットアップEXE、MSI、またはポータブルZIP' },
          { 'プラットフォーム': 'Linux（x64）', 'パッケージ': 'AppImage、DEB、またはRPM' },
          { 'プラットフォーム': 'Linux（ARM64）', 'パッケージ': 'DEBまたはRPM' },
          { 'プラットフォーム': '公式サイト', 'パッケージ': '[app.aqbot.top](https://app.aqbot.top)' },
          { 'プラットフォーム': 'プライバシーポリシー', 'パッケージ': '見つかりませんでした' },
        ],
        note: 'ダウンロードは、[GitHubのリリースページ](https://github.com/AQBot-Desktop/AQBot/releases/latest)または開発元の[ダウンロードページ](https://app.aqbot.top/download)から行います。開発元によると、macOS版はApple Developer IDではなくプロジェクト独自の証明書で署名されているため、macOSが「壊れている」または「開発元を検証できない」と表示することがあります。開発元の案内は、AQBot.appをControlキーを押しながらクリックして「開く」を選ぶか、システム設定→プライバシーとセキュリティで許可する方法です。ダウンロード元を信頼できる場合にだけ行ってください。PromptQuorumはインストーラーを実行しておらず、WindowsとLinuxのパッケージの署名方法も確認していません。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**AQBotは、macOS（Apple siliconとIntel）、Windows 10と11（x64とARM64）、Linux（x64とARM64）で動作します。メモリやGPUの最低要件は公開されていません。**',
          'モデルの入手先が少なくとも1つ必要です。APIキー付きのプロバイダーアカウント、または開発元がAQBotから接続できるとしているOllamaなどのローカルサーバーです。開発元によると、アプリのデータは~/.aqbotに、画像、添付ファイル、バックアップは~/Documents/aqbotにあります。サイトによると、ローカルゲートウェイは既定でポート8080で応答します。PromptQuorumはメモリ使用量も速度も測定していません。',
        ],
        columns: ['項目', '記載されている内容'],
        rows: [
          { '項目': 'macOS', '記載されている内容': 'Apple siliconとIntel' },
          { '項目': 'Windows', '記載されている内容': 'Windows 10と11、x64とARM64' },
          { '項目': 'Linux', '記載されている内容': 'x64とARM64' },
          { '項目': 'モデルの入手先', '記載されている内容': 'プロバイダーのAPIキーまたはローカルサーバー' },
          { '項目': 'データフォルダ', '記載されている内容': '~/.aqbotと~/Documents/aqbot' },
          { '項目': 'ゲートウェイのポート', '記載されている内容': '既定は8080' },
          { '項目': 'メモリとGPU', '記載されている内容': '公開されていません' },
        ],
        note: 'ローカルのモデルサーバーは別のプログラムで、開発元によるとAQBotがそれに接続します。Web検索には、Tavily、Exa、Zhipu、Bochaなどの検索サービスを使います。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**AQBotは多数のプロバイダーとのチャットを中心に作られ、エージェント、MCP、ドキュメント検索、ゲートウェイがその周りにあります。**以下はすべて、公式サイトとREADMEにある開発元の説明です。',
        ],
        items: [
          'チャット：OpenAI、Claude、Gemini、DeepSeek、Qwen、OpenAI互換のエンドポイントに接続し、複数モデルの回答を並べて比較し、会話を分岐させ、メッセージのバージョンを残せます。',
          'エージェントモード：チャットを切り替えて、フォルダ内のファイルの読み取りと編集、コマンドの実行を行います。権限モードは「毎回確認」「編集を自動承認」「フルアクセス」から選べ、タスクごとのトークンとコストが記録されます。',
          'ACPワークベンチ：Codex、Claude Agent、Gemini CLI、Cline、OpenCodeなど、Agent Client Protocolに対応した外部エージェントを、プロジェクト、保存済みスレッド、セッションごとの承認とともに操作します。',
          'MCPとSkills：stdio、SSE、StreamableHTTPでMCPサーバーを動かし、@aqbot/fetchなどの組み込みツールを使い、AQBot、Codex、Claude、AgentsのSkillsフォルダを1か所で管理します。',
          '知識と検索：非公開ファイルをローカルのsqlite-vecナレッジベースに索引化し、Tavily、Exa、Zhipu、Bocha経由でWeb検索を加え、ファイル、検索結果、メモリをコンテキストに添付します。',
          'ロール：システムプロンプト、アバター、サンプリング設定を再利用できるロールとして保存するか、prompts.chatとPlexPtのソースからロールをインストールします。',
          'ローカルAPIゲートウェイ：プロバイダーを、OpenAI Chat Completions、OpenAI Responses、Claude、Geminiのエンドポイントとして提供します。専用のゲートウェイキー、TLS、リクエストログ、利用統計があり、Quick ConnectはClaude Code、Codex、OpenCode、Gemini CLI、Cursorにアドレスとキーを書き込みます。',
          'インポートとバックアップ：ChatGPTのエクスポート、Cherry StudioとKelivoのバックアップを取り込み、ローカルフォルダ、WebDAV、S3互換ストレージにバックアップします。',
          'デスクトップとインターフェース：システムトレイ、最前面表示、グローバルショートカット、ログイン時の起動、プロキシ設定、自動更新の確認、11の表示言語。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー、データ、エージェントの安全性',
        content: [
          '**開発元によると、AQBotはアプリのデータとユーザーのファイルをパソコン上に置きます。PromptQuorumはプライバシーポリシーを見つけられず、ネットワーク通信も調べていないため、これを確認できません。**',
          '開発元は2つのフォルダを挙げています。~/.aqbotにはデータベース、暗号化キー、ベクトルストア、TLSファイルがあり、~/Documents/aqbotには画像、添付ファイル、バックアップがあります。開発元によると、APIキーはローカルのマスターキーを使ってAES-256で暗号化されます。2026年11月18日の時点で、[開発元のサイト](https://app.aqbot.top)の/privacy、/terms、/about、/imprint、/contactのパスは「404 Not Found」を返しました。',
          '選んだモデルプロバイダー以外のネットワーク利用は、READMEとサイトによると次のとおりです。Web検索サービス、追加したMCPサーバー、WebDAVやS3互換ストレージへのバックアップ、更新の確認、インポート前に確認を求めるaqbot://リンクによるプロバイダー設定。アプリが利用統計やエラーレポートを送るかどうかは、PromptQuorumが見た範囲のどこにも書かれていません。',
          'エージェントモードは、ファイルの読み取りと編集、コマンドの実行ができます。開発元のFAQによると、選んだフォルダはプロセスの開始作業ディレクトリであり、ファイルシステムのサンドボックスではありません。ターミナルコマンドはエージェントモードでのみ、承認後に実行されます。権限モードは「毎回確認」「編集を自動承認」「フルアクセス」です。PromptQuorumは承認の動作を試していません。',
          'ゲートウェイは、設定したプロバイダーを専用のキーで他のツールに使わせます。PromptQuorumは、ゲートウェイがどのネットワークインターフェースで待ち受けるかを確認していません。ソースコードはGitHubで公開されているため、データの流れを監査できます。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**AQBotは、複数のAIプロバイダーを使い、1つのデスクトップクライアントにまとめたい人と、コーディングツールを1つのローカルゲートウェイ経由にしたい開発者に向いています。**',
        ],
        items: [
          'プロバイダーを切り替えながら、並べた回答、分岐、メッセージのバージョンを1つのアプリで扱いたい人。',
          'Claude Code、Codex CLI、Gemini CLI、OpenCodeを使い、開発元によるとキー、ルーティング、利用ログを1か所にまとめたい開発者。',
          '開発元によると、ローカルのナレッジベースで非公開のドキュメントとチャットしたい人。',
          'ChatGPTのエクスポートや、AQBotが取り込めるCherry StudioとKelivoのバックアップから移行する人。',
          'コードがAGPL-3.0で公開されているクライアントを好む人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**AQBotが向かない場面もあり、いくつかの点は未確認のままです。**',
        ],
        items: [
          '向かない：プライバシーポリシー、利用規約、会社名が公開されているベンダーが必要な人。PromptQuorumはAQBotについてこれらを見つけられませんでした。',
          '向かない：Appleの公証を受けたアプリが必要な人。開発元によると、macOS版はプロジェクト独自の証明書を使っています。',
          '向かない：他のプログラムなしでモデルを動かしたい人。AQBotはクライアントと説明されており、ローカルモデルはOllamaなどのサーバー経由です。',
          '未確認：回答の質、エージェントの信頼性、ナレッジベース検索の品質、速度、メモリ使用量。PromptQuorumはアプリを実行していません。',
          '未確認：アプリのデータとキーがパソコン上にとどまること、索引化の際にドキュメントがどこで処理されるか、および利用統計が送信されるかどうか。PromptQuorumはネットワーク通信を調べていません。',
          '未確認：ゲートウェイがどのネットワークインターフェースで待ち受けるか、およびエージェントの権限モードの動作。',
          '未確認：WindowsとLinuxのパッケージの署名方法。開発元が挙げているのはmacOSの証明書だけです。',
          '未確認：プロジェクトの運営者とその国、ユーザー数、第三者のレビュー、長期的な安定性（バージョン番号は1.0未満で、リポジトリは2026年3月に作られました）。PromptQuorumは第三者のレビューを探していません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AQBotと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**AQBotは他のデスクトップAIチャットクライアントと機能が重なります。PromptQuorumは実際に比較していません。**以下のツールはディレクトリにあり、それぞれのレビューに基づいて説明しています。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'AQBot', '情報源での記載': 'AGPL-3.0、Mac/Windows/Linux、プロバイダー・エージェント・ゲートウェイ' },
          { 'ツール': '[Cherry Studio](/ja/local-llms/cherry-studio-ai-desktop-client)', '情報源での記載': 'AGPL 3.0、Mac/Windows/Linux、チャット＋ドキュメントチャット' },
          { 'ツール': '[Jan](/ja/power-local-llm/jan-review)', '情報源での記載': 'Apache 2.0（派生）、Mac/Windows/Linux、ローカルモデル' },
          { 'ツール': '[Newelle](/ja/power-local-llm/newelle-review)', '情報源での記載': 'GPL-3.0、Linux＋macOSベータ、プロバイダーまたはローカルモデル' },
          { 'ツール': '[Msty](/ja/power-local-llm/msty-review)', '情報源での記載': 'クローズドソース、Mac/Windows/Linux、フリーミアム' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'AQBotには独自のAIモデルが入っていますか？',
            a: '開発元はAQBotをクライアントと説明しています。OpenAI、Claude、Gemini、DeepSeek、Qwenなどのプロバイダー、またはOllamaなどのローカルサーバーを追加して使います。PromptQuorumが読んだ情報源には、組み込みのモデル実行機能は見当たりませんでした。',
          },
          {
            q: 'AQBotは無料ですか？',
            a: '開発元によると、はい。アプリはAGPL-3.0で無料でダウンロードして使え、支払うのは接続するモデルプロバイダーの利用料だけです。ローカルモデルを動かす場合は不要です。',
          },
          {
            q: 'AQBotをClaude CodeやCodex CLIと使えますか？',
            a: '開発元によると、ローカルゲートウェイ経由で使えます。ゲートウェイを起動してゲートウェイキーを作ると、Quick ConnectがClaude Code、Codex、OpenCode、Gemini CLI、Cursorにアドレスとキーを書き込みます。Claude CodeはANTHROPIC_BASE_URLとANTHROPIC_AUTH_TOKENで手動設定もできます。PromptQuorumはこれを試していません。',
          },
          {
            q: '他のアプリのチャットを移せますか？',
            a: '開発元によると、AQBotはChatGPTの公式エクスポートとCherry StudioやKelivoのバックアップを、プレビュー、警告、重複の処理つきで取り込めます。Cherry StudioとKelivoのインポートでは、プロバイダー、APIキー、添付ファイルも移せます。',
          },
          {
            q: 'AQBotの表示言語は何ですか？',
            a: '開発元によると11言語です。簡体字中国語、繁体字中国語、英語、日本語、韓国語、フランス語、ドイツ語、スペイン語、ロシア語、ヒンディー語、アラビア語です。READMEは中国語が原文で、翻訳版があります。',
          },
          {
            q: 'AQBotはどのくらいの頻度で更新されますか？',
            a: 'GitHubには、2026年10月9日にバージョン0.0.163、10月19日に0.0.164、10月26日に0.0.165が載っており、メインブランチの最新コミットは2026年10月31日です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**複数のAIプロバイダーを使い分けていて、エージェント、MCP、ドキュメント検索、コーディングツール向けのローカルゲートウェイを備えたオープンソースのデスクトップクライアントが欲しいなら、AQBotは試す価値があります。**',
          '無料のアプリとしては、紙の上では多くをカバーしています。マルチモデルのチャット、2種類のエージェント、ナレッジベース、Skills管理、OpenAI、Claude、Gemini形式に対応したゲートウェイです。直近3回のリリースは7〜10日間隔で、コードは公開されています。',
          'トレードオフも現実的です。PromptQuorumはサイトでプライバシーポリシー、利用規約、会社名を見つけられず、開発元によるとmacOS版はプロジェクト独自の証明書を使い、バージョン番号は1.0未満で、PromptQuorumは何も試していません。使い捨てのAPIキーとテスト用フォルダで始め、頼る前にアプリがネットワーク上で何をするか確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[AQBot公式サイト](https://app.aqbot.top) — 製品概要、バージョン、スクリーンショット。確認日：2026年11月18日。',
          '[ダウンロードページ](https://app.aqbot.top/download) — インストーラー、対応OS、macOSの署名に関する注記。確認日：2026年11月18日。',
          '[FAQ](https://app.aqbot.top/faq) — データフォルダ、プロバイダー、エージェント、ライセンス。確認日：2026年11月18日。',
          '[はじめにガイド](https://app.aqbot.top/guide/getting-started) — インストールと初期設定。サイト上の日付は2026年10月28日。確認日：2026年11月18日。',
          '[プロバイダーガイド](https://app.aqbot.top/guide/providers) — 対応プロバイダーとAWS Bedrockの設定。サイト上の日付は2026年10月28日。確認日：2026年11月18日。',
          '[GitHubリポジトリ](https://github.com/AQBot-Desktop/AQBot) — GitHubが示すライセンス、作成日、最新コミット。確認日：2026年11月18日。',
          '[README](https://github.com/AQBot-Desktop/AQBot#readme) — 機能、対応プラットフォーム、macOSに関する注記。確認日：2026年11月18日。',
          '[GitHubのリリース](https://github.com/AQBot-Desktop/AQBot/releases) — v0.0.165のリリース日とパッケージ。確認日：2026年11月18日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Cherry Studioレビュー](/ja/local-llms/cherry-studio-ai-desktop-client) — ドキュメントチャットを備えた、複数プロバイダー対応のデスクトップクライアント。',
          '[Janレビュー](/ja/power-local-llm/jan-review) — オフライン重視のオープンソースのデスクトップチャットアプリ。',
          '[Newelleレビュー](/ja/power-local-llm/newelle-review) — クラウドのプロバイダー、ローカルモデル、MCPに対応したLinux向けアシスタント。',
          '[ローカルLLMチャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared) — チャットクライアントを並べて比較。',
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
    heroImage: '/images/aqbot-review-hero-zh.webp',
    title: 'AQBot 评测：带智能体和本地 API 网关的桌面 AI 客户端',
    seoTitle: 'AQBot 评测：带本地网关与智能体的桌面 AI 客户端',
    intro:
      'AQBot 0.0.165 是一款开源桌面 AI 客户端，支持 macOS、Windows 和 Linux，把多服务商对话、智能体、MCP 工具、文档知识库和面向编程工具的本地 API 网关整合在一起。许可证为 AGPL-3.0。本评测基于官方网站以及 GitHub 仓库（含 README 和发布版本），核查日期为 2026年11月18日。PromptQuorum 没有亲自测试过该应用。',
    metaDescription:
      'AQBot 是支持 macOS、Windows 和 Linux 的开源桌面 AI 客户端，带智能体、MCP、文档对话和本地 API 网关。已确认和未确认的内容一览。',
    twitterDescription:
      'AQBot：开源桌面 AI 客户端，提供多服务商对话、智能体、MCP、文档知识库和本地 API 网关。已确认的内容一览。',
    audience:
      '同时使用多个 AI 服务商、想用一个桌面客户端统一管理的人，想让编程工具共用一个网关的开发者，以及想与自己的文档对话的用户',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'AQBot 评测',
    targetKeywords: [
      'AQBot 评测',
      'AQBot 桌面 AI 客户端',
      '开源桌面 AI 客户端',
      'Claude Code 本地 API 网关',
      '多模型对话应用',
      'ACP 智能体工作台',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AQBot 是一款开源（AGPL-3.0）桌面 AI 客户端，把与众多服务商的对话、智能体、MCP 工具、文档搜索和本地 API 网关放进同一个应用。**它支持 macOS、Windows 和 Linux，免费使用；你只需向所连接的模型服务商付费。PromptQuorum 在官网上没有找到隐私政策、使用条款或具名公司，也没有测试过该应用。',
    quickAnswerTop: {
      zh: {
        question: 'AQBot 是什么，适合谁？',
        answer:
          'AQBot 是 GitHub 组织 AQBot-Desktop 在 GitHub 上公开开发的桌面 AI 客户端。适合同时使用多个 AI 服务商、想把对话、智能体、文档搜索和面向编程工具的共享网关集中在一处的人。',
        bullets: [
          '据开发者称，许可证为 AGPL-3.0，可免费下载；模型服务商的费用另计。',
          '据开发者称，可连接 OpenAI、Claude、Gemini、DeepSeek、Qwen 以及任何兼容 OpenAI 的端点，包括 Ollama 等本地服务器。',
          '对话可切换到智能体模式，经批准后编辑文件并运行命令；另有一个工作台，通过 Agent Client Protocol 驱动外部智能体。',
          '本地 API 网关以 OpenAI、Claude 和 Gemini 格式提供你配置的服务商，供 Claude Code、Codex CLI 等工具使用。',
          '0.0.165 版发布于 2026年10月26日，主分支最近一次提交在 2026年10月31日。',
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
      { label: '隐私、数据与智能体安全', anchor: 'privacy' },
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
            text: 'AQBot 是一款开源桌面 AI 客户端，在适用于 macOS、Windows 和 Linux 的同一个应用里，整合了与众多服务商的对话、智能体、MCP 工具、文档知识库和本地 API 网关。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作所有 AI 账号的统一入口：填入自己的 API 密钥，与一个或多个模型对话，让智能体在你选定的文件夹里工作，并让电脑上的其他工具通过本地地址使用你的模型。',
          },
        ],
        items: [
          '从 GitHub 发布页或开发者的下载页安装 DMG、EXE、MSI、便携 ZIP、AppImage、DEB 或 RPM。',
          '用自己的 API 密钥添加服务商并获取模型列表；对于本地模型，开发者提到了 Ollama 等本地服务器。',
          '据开发者称，macOS 版使用项目自有证书签名，而不是 Apple Developer ID，因此 macOS 在首次启动时可能显示警告。',
          '智能体模式会在你选定的文件夹中运行命令；据开发者称，该文件夹只是起始目录，不是沙箱。',
          'PromptQuorum 没有测试过该应用，因此回答质量、智能体可靠性、速度以及应用向网络发送的内容均未核实。',
        ],
        callouts: [
          {
            type: 'note',
            text: '开发者称应用数据和用户文件保留在你的电脑上。PromptQuorum 没有检查网络流量，也没有找到可用来核对的隐私政策。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**AQBot 是由 GitHub 组织 AQBot-Desktop 开发的桌面 AI 客户端，以 AGPL-3.0 许可证发布，支持 macOS、Windows 和 Linux。**',
          '代码公开在 [github.com/AQBot-Desktop/AQBot](https://github.com/AQBot-Desktop/AQBot)。仓库创建于 2026年3月，0.0.165 版出现在 2026年10月26日，主分支最近一次提交在 2026年10月31日，因此开发活跃，不适用项目停更警告。版本号仍低于 1.0。[官网](https://app.aqbot.top)没有写明公司、地址或国家，所以除组织名称外，PromptQuorum 无法确认是谁在运营该项目。',
          '据开发者称，AQBot 是一个“本地优先”的 AI 工作台，整合了多服务商对话、智能体、文档知识库、MCP 工具和 API 网关，并把应用数据和用户文件保留在你的电脑上。对话可连接 OpenAI、Claude、Gemini、DeepSeek、Qwen、智谱 AI、xAI、AWS Bedrock 以及任何兼容 OpenAI 的端点。',
          'PromptQuorum 没有运行该应用，也没有核查回答质量、智能体可靠性、速度或内存占用。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**可以通过 GitHub 发布页上的安装包安装 AQBot；开发者的下载页为 macOS、Windows 和 Linux 链接了同样的文件。**',
          'v0.0.165 版列出了面向 Apple silicon 和 Intel 的 DMG 镜像，面向 Windows（x64 和 ARM64）的安装版 EXE、MSI 安装程序和便携 ZIP，面向 Linux（x64）的 AppImage，以及面向 Linux（x64 和 ARM64）的 DEB 和 RPM 包。',
        ],
        columns: ['平台', '安装包'],
        rows: [
          { '平台': 'macOS（Apple silicon）', '安装包': 'DMG' },
          { '平台': 'macOS（Intel）', '安装包': 'DMG（x64）' },
          { '平台': 'Windows（x64、ARM64）', '安装包': '安装版 EXE、MSI 或便携 ZIP' },
          { '平台': 'Linux（x64）', '安装包': 'AppImage、DEB 或 RPM' },
          { '平台': 'Linux（ARM64）', '安装包': 'DEB 或 RPM' },
          { '平台': '官方网站', '安装包': '[app.aqbot.top](https://app.aqbot.top)' },
          { '平台': '隐私政策', '安装包': '未找到' },
        ],
        note: '请从 [GitHub 发布页](https://github.com/AQBot-Desktop/AQBot/releases/latest)或开发者的[下载页](https://app.aqbot.top/download)下载。开发者称 macOS 版使用项目自有证书签名，而不是 Apple Developer ID，因此 macOS 可能提示应用已损坏或来自未验证的开发者；其说明是按住 Control 键点击 AQBot.app 并选择“打开”，或在“系统设置 → 隐私与安全性”中允许。只有在你信任下载来源时才这样做。PromptQuorum 没有运行这些安装程序，也没有核查 Windows 和 Linux 安装包的签名方式。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**AQBot 支持 macOS（Apple silicon 和 Intel）、Windows 10 和 11（x64 和 ARM64）以及 Linux（x64 和 ARM64）；开发者没有公布内存或 GPU 的最低要求。**',
          '你至少需要一个模型来源：带 API 密钥的服务商账号，或开发者称 AQBot 可连接的 Ollama 等本地服务器。据开发者称，应用数据位于 ~/.aqbot，图片、附件和备份位于 ~/Documents/aqbot。据网站介绍，本地网关默认监听 8080 端口。PromptQuorum 没有测量内存占用或速度。',
        ],
        columns: ['项目', '记载内容'],
        rows: [
          { '项目': 'macOS', '记载内容': 'Apple silicon 和 Intel' },
          { '项目': 'Windows', '记载内容': 'Windows 10 和 11，x64 和 ARM64' },
          { '项目': 'Linux', '记载内容': 'x64 和 ARM64' },
          { '项目': '模型来源', '记载内容': '服务商 API 密钥或本地服务器' },
          { '项目': '数据文件夹', '记载内容': '~/.aqbot 和 ~/Documents/aqbot' },
          { '项目': '网关端口', '记载内容': '默认 8080' },
          { '项目': '内存和 GPU', '记载内容': '未公布' },
        ],
        note: '据开发者称，本地模型服务器是 AQBot 所连接的独立程序。网页搜索使用 Tavily、Exa、智谱或 Bocha 等搜索服务。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**AQBot 以与众多服务商的对话为核心，智能体、MCP、文档搜索和网关围绕其展开。**以下各项均来自官网和 README 中开发者的说法。',
        ],
        items: [
          '对话：连接 OpenAI、Claude、Gemini、DeepSeek、Qwen 或任何兼容 OpenAI 的端点，并排比较多个模型的回答，创建对话分支，保留消息版本。',
          '智能体模式：把对话切换为在文件夹中读取和编辑文件、运行命令，权限模式可选“每次询问”“自动接受编辑”或“完全访问”，并记录每个任务的令牌数和成本。',
          'ACP 工作台：驱动支持 Agent Client Protocol 的外部智能体，如 Codex、Claude Agent、Gemini CLI、Cline 和 OpenCode，提供项目、已保存的会话线程和按会话的审批。',
          'MCP 与 Skills：通过 stdio、SSE 或 StreamableHTTP 运行 MCP 服务器，使用 @aqbot/fetch 等内置工具，并在一处管理 AQBot、Codex、Claude 和 Agents 的 Skills 文件夹。',
          '知识与搜索：把私有文件索引到本地 sqlite-vec 知识库，通过 Tavily、Exa、智谱或 Bocha 添加网页搜索，并把文件、搜索结果和记忆附加到上下文。',
          '角色：把系统提示词、头像和采样设置保存为可复用的角色，或从 prompts.chat 和 PlexPt 来源安装角色。',
          '本地 API 网关：把你的服务商以 OpenAI Chat Completions、OpenAI Responses、Claude 和 Gemini 端点的形式提供，带独立的网关密钥、TLS、请求日志和用量统计；Quick Connect 会把地址和密钥写入 Claude Code、Codex、OpenCode、Gemini CLI 和 Cursor。',
          '导入与备份：导入 ChatGPT 导出文件以及 Cherry Studio 和 Kelivo 的备份，并备份到本地文件夹、WebDAV 或兼容 S3 的存储。',
          '桌面与界面：系统托盘、窗口置顶、全局快捷键、开机自启、代理设置、自动检查更新和 11 种界面语言。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、数据与智能体安全',
        content: [
          '**据开发者称，AQBot 把应用数据和用户文件保留在你的电脑上；PromptQuorum 没有找到隐私政策，也没有检查网络流量，因此无法确认这一点。**',
          '开发者点名了两个文件夹：~/.aqbot 存放数据库、加密密钥、向量库和 TLS 文件，~/Documents/aqbot 存放图片、附件和备份。据开发者称，API 密钥使用本地主密钥以 AES-256 加密。2026年11月18日，[开发者网站](https://app.aqbot.top)上的 /privacy、/terms、/about、/imprint 和 /contact 路径均返回“404 Not Found”。',
          '除你所选的模型服务商之外，README 和网站描述的网络用途包括：网页搜索服务、你添加的 MCP 服务器、备份到 WebDAV 或兼容 S3 的存储、检查更新，以及通过 aqbot:// 链接设置服务商（导入前会请求确认）。应用是否发送使用统计或错误报告，PromptQuorum 查阅的资料中没有说明。',
          '智能体模式可以读取和编辑文件并运行命令。开发者的常见问题说明，你选择的文件夹只是进程的起始工作目录，不是文件系统沙箱；终端命令只在智能体模式下、经批准后运行。权限模式为“每次询问”“自动接受编辑”和“完全访问”。PromptQuorum 没有测试审批的实际表现。',
          '网关让其他工具通过其专用密钥使用你配置的服务商。PromptQuorum 没有核查网关监听哪些网络接口。源代码公开在 GitHub 上，因此数据流向可以审计。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**AQBot 适合同时使用多个 AI 服务商、想用一个桌面客户端统一管理的人，也适合想让编程工具共用一个本地网关的开发者。**',
        ],
        items: [
          '在多个服务商之间切换，希望在一个应用里并排查看回答、使用分支和消息版本的人。',
          '使用 Claude Code、Codex CLI、Gemini CLI 或 OpenCode，并希望据开发者称在一处管理密钥、路由和用量日志的开发者。',
          '希望据开发者称通过本地知识库与私有文档对话的用户。',
          '从 ChatGPT 导出文件，或从 AQBot 可导入备份的 Cherry Studio 和 Kelivo 迁移过来的人。',
          '偏好代码以 AGPL-3.0 公开的客户端的读者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**AQBot 在某些情况下不合适，也有若干内容尚未核实。**',
        ],
        items: [
          '不适合：需要有公开隐私政策、使用条款和具名公司的供应商的人；PromptQuorum 没有为 AQBot 找到这些内容。',
          '不适合：需要经 Apple 公证的应用的人；据开发者称，macOS 版使用项目自有证书。',
          '不适合：想不借助其他程序就运行模型的人。AQBot 被描述为客户端，本地模型要通过 Ollama 等服务器接入。',
          '未核实：回答质量、智能体可靠性、知识库检索质量、速度和内存占用。PromptQuorum 没有运行该应用。',
          '未核实：应用数据和密钥是否保留在你的电脑上，建立索引时文档在哪里处理，以及是否发送使用统计；PromptQuorum 没有检查网络流量。',
          '未核实：网关监听哪些网络接口，以及智能体权限模式的实际表现。',
          '未核实：Windows 和 Linux 安装包的签名方式；开发者只提到了 macOS 证书。',
          '未核实：谁在运营该项目及其所在国家、用户数量、独立评测以及长期稳定性（版本号低于 1.0，仓库创建于 2026年3月）；PromptQuorum 没有查找独立评测。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AQBot 与替代方案对比',
        itemHeadings: true,
        content: [
          '**AQBot 与其他桌面 AI 对话客户端功能有重叠；PromptQuorum 没有亲自对它们做过对比。**下面的工具都在目录中，描述依据它们各自的评测。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'AQBot', '来源中的记载': 'AGPL-3.0；Mac/Windows/Linux；服务商、智能体、网关' },
          { '工具': '[Cherry Studio](/zh/local-llms/cherry-studio-ai-desktop-client)', '来源中的记载': 'AGPL 3.0；Mac/Windows/Linux；对话 + 文档对话' },
          { '工具': '[Jan](/zh/power-local-llm/jan-review)', '来源中的记载': 'Apache 2.0（变体）；Mac/Windows/Linux；本地模型' },
          { '工具': '[Newelle](/zh/power-local-llm/newelle-review)', '来源中的记载': 'GPL-3.0；Linux + macOS 测试版；服务商或本地模型' },
          { '工具': '[Msty](/zh/power-local-llm/msty-review)', '来源中的记载': '闭源；Mac/Windows/Linux；免费增值' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'AQBot 自带 AI 模型吗？',
            a: '开发者把 AQBot 描述为客户端：你可以添加 OpenAI、Claude、Gemini、DeepSeek 或 Qwen 等服务商，或 Ollama 等本地服务器。PromptQuorum 在查阅的资料中没有找到内置的模型运行功能。',
          },
          {
            q: 'AQBot 免费吗？',
            a: '据开发者称，免费：应用以 AGPL-3.0 免费下载和使用，你只需向所连接的模型服务商付费；如果运行本地模型则无需付费。',
          },
          {
            q: '可以把 AQBot 和 Claude Code 或 Codex CLI 一起用吗？',
            a: '据开发者称可以，通过本地网关：启动网关并创建网关密钥后，Quick Connect 会把地址和密钥写入 Claude Code、Codex、OpenCode、Gemini CLI 或 Cursor。Claude Code 也可以用 ANTHROPIC_BASE_URL 和 ANTHROPIC_AUTH_TOKEN 手动设置。PromptQuorum 没有测试这一点。',
          },
          {
            q: '可以把其他应用里的聊天记录迁移过来吗？',
            a: '据开发者称，AQBot 可导入 ChatGPT 官方导出文件以及 Cherry Studio 和 Kelivo 的备份，带预览、警告和重复项处理；从 Cherry Studio 和 Kelivo 导入时还可以带上服务商、API 密钥和附件。',
          },
          {
            q: 'AQBot 提供哪些界面语言？',
            a: '据开发者称有 11 种：简体中文、繁体中文、英语、日语、韩语、法语、德语、西班牙语、俄语、印地语和阿拉伯语。README 以中文为原文，并有翻译版本。',
          },
          {
            q: 'AQBot 多久更新一次？',
            a: 'GitHub 列出的版本有：2026年10月9日的 0.0.163、10月19日的 0.0.164 和 10月26日的 0.0.165，主分支最近一次提交在 2026年10月31日。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你同时使用多个 AI 服务商，想要一个带智能体、MCP、文档搜索和编程工具本地网关的开源桌面客户端，AQBot 值得一看。**',
          '就一款免费应用而言，它在纸面上覆盖很广：多模型对话、两种智能体、知识库、Skills 管理，以及支持 OpenAI、Claude 和 Gemini 格式的网关。最近三个版本的发布间隔为 7 至 10 天，代码公开。',
          '取舍同样真实：PromptQuorum 在官网上没有找到隐私政策、使用条款或具名公司，据开发者称 macOS 版使用项目自有证书，版本号低于 1.0，PromptQuorum 也没有测试过任何内容。建议先用一次性的 API 密钥和测试文件夹，并在依赖它之前检查应用在你的网络上做了什么。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[AQBot 官网](https://app.aqbot.top) — 产品概览、版本和截图，核查日期：2026年11月18日。',
          '[下载页](https://app.aqbot.top/download) — 安装程序、支持的系统和 macOS 签名说明，核查日期：2026年11月18日。',
          '[常见问题](https://app.aqbot.top/faq) — 数据文件夹、服务商、智能体和许可证，核查日期：2026年11月18日。',
          '[入门指南](https://app.aqbot.top/guide/getting-started) — 安装和首次设置，网站标注日期为 2026年10月28日，核查日期：2026年11月18日。',
          '[服务商指南](https://app.aqbot.top/guide/providers) — 支持的服务商和 AWS Bedrock 设置，网站标注日期为 2026年10月28日，核查日期：2026年11月18日。',
          '[GitHub 仓库](https://github.com/AQBot-Desktop/AQBot) — GitHub 显示的许可证、创建日期和最近一次提交，核查日期：2026年11月18日。',
          '[README](https://github.com/AQBot-Desktop/AQBot#readme) — 功能、平台和 macOS 说明，核查日期：2026年11月18日。',
          '[GitHub 发布页](https://github.com/AQBot-Desktop/AQBot/releases) — v0.0.165 的发布日期和安装包，核查日期：2026年11月18日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Cherry Studio 评测](/zh/local-llms/cherry-studio-ai-desktop-client) — 支持文档对话的多服务商桌面客户端。',
          '[Jan 评测](/zh/power-local-llm/jan-review) — 注重离线使用的开源桌面对话应用。',
          '[Newelle 评测](/zh/power-local-llm/newelle-review) — 支持云端服务商、本地模型和 MCP 的 Linux 助手。',
          '[本地 LLM 对话助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared) — 并排比较各类对话客户端。',
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
    heroImage: '/images/aqbot-review-hero-ko.webp',
    title: 'AQBot 리뷰: 게이트웨이를 갖춘 데스크톱 AI 클라이언트',
    seoTitle: 'AQBot 리뷰: 로컬 게이트웨이를 갖춘 AI 클라이언트',
    intro:
      'AQBot 0.0.165는 여러 제공업체와의 채팅, 에이전트, MCP 도구, 문서 지식 베이스, 코딩 도구용 로컬 API 게이트웨이를 하나로 묶은 macOS, Windows, Linux용 오픈소스 데스크톱 AI 클라이언트입니다. 라이선스는 AGPL-3.0입니다. 이 리뷰는 공식 웹사이트와 GitHub 저장소(README와 릴리스)를 바탕으로 하며, 확인일은 2026년 11월 18일입니다. PromptQuorum은 이 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'AQBot은 에이전트, MCP, 문서 채팅, 로컬 API 게이트웨이를 갖춘 오픈소스 데스크톱 AI 클라이언트입니다. 확인된 내용과 확인되지 않은 내용을 정리했습니다.',
    twitterDescription:
      'AQBot: 여러 제공업체 채팅, 에이전트, MCP, 문서 지식 베이스, 로컬 API 게이트웨이를 갖춘 오픈소스 데스크톱 AI 클라이언트. 확인된 내용을 정리했습니다.',
    audience:
      '여러 AI 제공업체를 쓰면서 하나의 데스크톱 클라이언트로 모으고 싶은 사람, 코딩 도구를 하나의 게이트웨이로 연결하려는 개발자, 자신의 문서와 채팅하려는 사용자',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'AQBot 리뷰',
    targetKeywords: [
      'AQBot 리뷰',
      'AQBot 데스크톱 AI 클라이언트',
      '오픈소스 AI 데스크톱 클라이언트',
      'Claude Code 로컬 API 게이트웨이',
      '멀티 모델 채팅 앱',
      'ACP 에이전트 워크벤치',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AQBot은 여러 제공업체와의 채팅, 에이전트, MCP 도구, 문서 검색, 로컬 API 게이트웨이를 하나의 앱에 담은 오픈소스(AGPL-3.0) 데스크톱 AI 클라이언트입니다.** macOS, Windows, Linux에서 실행되며 무료입니다. 연결하는 모델 제공업체에만 비용을 지불하면 됩니다. PromptQuorum은 공식 웹사이트에서 개인정보 처리방침, 이용 약관, 회사 이름을 찾지 못했으며 앱을 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'AQBot은 무엇이며 누구에게 적합합니까?',
        answer:
          'AQBot은 GitHub 조직 AQBot-Desktop이 GitHub에서 공개적으로 개발하는 데스크톱 AI 클라이언트입니다. 여러 AI 제공업체를 사용하면서 채팅, 에이전트, 문서 검색, 코딩 도구용 공유 게이트웨이를 한곳에 모으려는 사람에게 적합합니다.',
        bullets: [
          '개발사에 따르면 라이선스는 AGPL-3.0이며 무료로 다운로드할 수 있습니다. 모델 제공업체 비용은 별도입니다.',
          '개발사에 따르면 OpenAI, Claude, Gemini, DeepSeek, Qwen 및 OpenAI 호환 엔드포인트(Ollama 같은 로컬 서버 포함)에 연결할 수 있습니다.',
          '채팅을 에이전트 모드로 전환하면 승인 후 파일을 편집하고 명령을 실행하며, 별도의 워크벤치는 Agent Client Protocol로 외부 에이전트를 제어합니다.',
          '로컬 API 게이트웨이는 설정한 제공업체를 OpenAI, Claude, Gemini 형식으로 제공하며 Claude Code, Codex CLI 같은 도구에서 사용할 수 있습니다.',
          '0.0.165 버전은 2026년 10월 26일에 출시되었고, 메인 브랜치의 마지막 커밋은 2026년 10월 31일입니다.',
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
      { label: '개인정보, 데이터, 에이전트 안전', anchor: 'privacy' },
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
            text: 'AQBot은 여러 제공업체와의 채팅, 에이전트, MCP 도구, 문서 지식 베이스, 로컬 API 게이트웨이를 macOS, Windows, Linux용 하나의 앱으로 묶은 오픈소스 데스크톱 AI 클라이언트입니다.',
          },
          {
            type: 'plain-terms',
            text: '모든 AI 계정을 한 창에서 쓰는 것과 같습니다. 자신의 API 키를 등록하고, 하나 또는 여러 모델과 채팅하고, 직접 고른 폴더에서 에이전트가 작업하게 하고, 컴퓨터의 다른 도구가 로컬 주소로 내 모델을 빌려 쓰게 할 수 있습니다.',
          },
        ],
        items: [
          'GitHub 릴리스 페이지 또는 개발사의 다운로드 페이지에서 DMG, EXE, MSI, 포터블 ZIP, AppImage, DEB, RPM 중 하나를 설치합니다.',
          '자신의 API 키로 제공업체를 추가하고 모델 목록을 가져옵니다. 로컬 모델에 대해 개발사는 Ollama 같은 로컬 서버를 언급합니다.',
          '개발사에 따르면 macOS 버전은 Apple Developer ID가 아니라 프로젝트 자체 인증서로 서명되어 있어 처음 실행할 때 macOS가 경고를 표시할 수 있습니다.',
          '에이전트 모드는 선택한 폴더에서 명령을 실행합니다. 개발사에 따르면 그 폴더는 시작 디렉터리일 뿐 샌드박스가 아닙니다.',
          'PromptQuorum이 앱을 테스트하지 않았으므로 답변 품질, 에이전트 신뢰성, 속도, 앱이 네트워크로 보내는 내용은 확인되지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '개발사는 앱 데이터와 사용자 파일이 컴퓨터에 남는다고 밝힙니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았고, 이를 대조할 개인정보 처리방침도 찾지 못했습니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**AQBot은 GitHub 조직 AQBot-Desktop이 개발하고 AGPL-3.0 라이선스로 macOS, Windows, Linux용으로 공개한 데스크톱 AI 클라이언트입니다.**',
          '코드는 [github.com/AQBot-Desktop/AQBot](https://github.com/AQBot-Desktop/AQBot)에 공개되어 있습니다. 저장소는 2026년 3월에 만들어졌고, 0.0.165 버전은 2026년 10월 26일에 나왔으며, 메인 브랜치의 마지막 커밋은 2026년 10월 31일입니다. 개발은 활발하며 방치된 프로젝트 경고는 해당되지 않습니다. 버전 번호는 아직 1.0 미만입니다. [웹사이트](https://app.aqbot.top)에는 회사, 주소, 국가가 나와 있지 않아 PromptQuorum은 조직 이름 외에 누가 프로젝트를 운영하는지 확인하지 못했습니다.',
          '개발사에 따르면 AQBot은 \'로컬 우선\' AI 워크벤치로, 여러 제공업체와의 채팅, 에이전트, 문서 지식 베이스, MCP 도구, API 게이트웨이를 묶고 앱 데이터와 사용자 파일을 컴퓨터에 둡니다. 채팅은 OpenAI, Claude, Gemini, DeepSeek, Qwen, Zhipu AI, xAI, AWS Bedrock 및 OpenAI 호환 엔드포인트에 연결됩니다.',
          'PromptQuorum은 앱을 실행하지 않았으며 답변 품질, 에이전트 신뢰성, 속도, 메모리 사용량을 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**AQBot은 GitHub 릴리스 페이지의 패키지로 설치할 수 있으며, 개발사의 다운로드 페이지도 macOS, Windows, Linux용으로 같은 파일을 연결합니다.**',
          'v0.0.165 릴리스에는 Apple silicon과 Intel용 DMG 이미지, Windows(x64와 ARM64)용 설치 EXE와 MSI 설치 프로그램 및 포터블 ZIP, Linux(x64)용 AppImage, Linux(x64와 ARM64)용 DEB와 RPM 패키지가 올라와 있습니다.',
        ],
        columns: ['플랫폼', '패키지'],
        rows: [
          { '플랫폼': 'macOS (Apple silicon)', '패키지': 'DMG' },
          { '플랫폼': 'macOS (Intel)', '패키지': 'DMG (x64)' },
          { '플랫폼': 'Windows (x64, ARM64)', '패키지': '설치 EXE, MSI 또는 포터블 ZIP' },
          { '플랫폼': 'Linux (x64)', '패키지': 'AppImage, DEB 또는 RPM' },
          { '플랫폼': 'Linux (ARM64)', '패키지': 'DEB 또는 RPM' },
          { '플랫폼': '공식 웹사이트', '패키지': '[app.aqbot.top](https://app.aqbot.top)' },
          { '플랫폼': '개인정보 처리방침', '패키지': '찾지 못했습니다' },
        ],
        note: '[GitHub 릴리스 페이지](https://github.com/AQBot-Desktop/AQBot/releases/latest) 또는 개발사의 [다운로드 페이지](https://app.aqbot.top/download)에서 내려받으세요. 개발사에 따르면 macOS 버전은 Apple Developer ID가 아니라 프로젝트 자체 인증서로 서명되어 있어, macOS가 앱이 손상되었거나 확인되지 않은 개발자의 앱이라고 표시할 수 있습니다. 개발사의 안내는 AQBot.app을 Control 키를 누른 채 클릭해 \'열기\'를 선택하거나, 시스템 설정 → 개인정보 보호 및 보안에서 허용하는 것입니다. 내려받은 출처를 신뢰할 때만 그렇게 하세요. PromptQuorum은 설치 프로그램을 실행하지 않았고 Windows와 Linux 패키지가 어떻게 서명되는지도 확인하지 않았습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**AQBot은 macOS(Apple silicon과 Intel), Windows 10과 11(x64와 ARM64), Linux(x64와 ARM64)에서 실행되며, 개발사는 메모리나 GPU 최소 사양을 공개하지 않습니다.**',
          '모델 출처가 최소 하나 필요합니다. API 키가 있는 제공업체 계정, 또는 개발사가 AQBot이 연결할 수 있다고 밝힌 Ollama 같은 로컬 서버입니다. 개발사에 따르면 앱 데이터는 ~/.aqbot에, 이미지, 첨부 파일, 백업은 ~/Documents/aqbot에 있습니다. 웹사이트에 따르면 로컬 게이트웨이는 기본적으로 8080 포트에서 응답합니다. PromptQuorum은 메모리 사용량과 속도를 측정하지 않았습니다.',
        ],
        columns: ['항목', '명시된 내용'],
        rows: [
          { '항목': 'macOS', '명시된 내용': 'Apple silicon과 Intel' },
          { '항목': 'Windows', '명시된 내용': 'Windows 10과 11, x64와 ARM64' },
          { '항목': 'Linux', '명시된 내용': 'x64와 ARM64' },
          { '항목': '모델 출처', '명시된 내용': '제공업체 API 키 또는 로컬 서버' },
          { '항목': '데이터 폴더', '명시된 내용': '~/.aqbot 및 ~/Documents/aqbot' },
          { '항목': '게이트웨이 포트', '명시된 내용': '기본 8080' },
          { '항목': '메모리와 GPU', '명시된 내용': '공개되지 않음' },
        ],
        note: '개발사에 따르면 로컬 모델 서버는 AQBot이 연결하는 별도의 프로그램입니다. 웹 검색은 Tavily, Exa, Zhipu, Bocha 같은 검색 서비스를 사용합니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**AQBot은 여러 제공업체와의 채팅을 중심으로 만들어졌고, 에이전트, MCP, 문서 검색, 게이트웨이가 그 주변에 있습니다.** 아래 항목은 모두 웹사이트와 README에 있는 개발사의 주장입니다.',
        ],
        items: [
          '채팅: OpenAI, Claude, Gemini, DeepSeek, Qwen 또는 OpenAI 호환 엔드포인트를 연결하고, 여러 모델의 답변을 나란히 비교하고, 대화를 분기하고, 메시지 버전을 보관합니다.',
          '에이전트 모드: 채팅을 전환해 폴더의 파일을 읽고 편집하고 명령을 실행합니다. 권한 모드는 \'매번 확인\', \'편집 자동 승인\', \'전체 액세스\' 중에서 고르며, 작업별 토큰과 비용이 기록됩니다.',
          'ACP 워크벤치: Codex, Claude Agent, Gemini CLI, Cline, OpenCode처럼 Agent Client Protocol을 지원하는 외부 에이전트를 프로젝트, 저장된 스레드, 세션별 승인과 함께 제어합니다.',
          'MCP와 Skills: stdio, SSE, StreamableHTTP로 MCP 서버를 실행하고, @aqbot/fetch 같은 내장 도구를 사용하며, AQBot, Codex, Claude, Agents의 Skills 폴더를 한곳에서 관리합니다.',
          '지식과 검색: 비공개 파일을 로컬 sqlite-vec 지식 베이스에 색인하고, Tavily, Exa, Zhipu, Bocha로 웹 검색을 추가하며, 파일, 검색 결과, 메모리를 컨텍스트에 첨부합니다.',
          '역할: 시스템 프롬프트, 아바타, 샘플링 설정을 재사용 가능한 역할로 저장하거나 prompts.chat과 PlexPt 출처에서 역할을 설치합니다.',
          '로컬 API 게이트웨이: 제공업체를 OpenAI Chat Completions, OpenAI Responses, Claude, Gemini 엔드포인트로 제공하며, 별도의 게이트웨이 키, TLS, 요청 로그, 사용 통계가 있습니다. Quick Connect는 Claude Code, Codex, OpenCode, Gemini CLI, Cursor에 주소와 키를 기록합니다.',
          '가져오기와 백업: ChatGPT 내보내기 파일과 Cherry Studio, Kelivo 백업을 가져오고, 로컬 폴더, WebDAV, S3 호환 스토리지로 백업합니다.',
          '데스크톱과 인터페이스: 시스템 트레이, 항상 위 창, 전역 단축키, 로그인 시 실행, 프록시 설정, 자동 업데이트 확인, 11개 인터페이스 언어.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보, 데이터, 에이전트 안전',
        content: [
          '**개발사에 따르면 AQBot은 앱 데이터와 사용자 파일을 컴퓨터에 둡니다. PromptQuorum은 개인정보 처리방침을 찾지 못했고 네트워크 트래픽도 검사하지 않았으므로 이를 확인할 수 없습니다.**',
          '개발사는 두 폴더를 언급합니다. ~/.aqbot에는 데이터베이스, 암호화 키, 벡터 저장소, TLS 파일이 있고, ~/Documents/aqbot에는 이미지, 첨부 파일, 백업이 있습니다. 개발사에 따르면 API 키는 로컬 마스터 키를 사용해 AES-256으로 암호화됩니다. 2026년 11월 18일 기준으로 [개발사 웹사이트](https://app.aqbot.top)의 /privacy, /terms, /about, /imprint, /contact 경로는 \'404 Not Found\'를 반환했습니다.',
          '선택한 모델 제공업체 외의 네트워크 사용은 README와 웹사이트에 따르면 다음과 같습니다. 웹 검색 서비스, 추가한 MCP 서버, WebDAV 또는 S3 호환 스토리지로의 백업, 업데이트 확인, 가져오기 전에 확인을 요청하는 aqbot:// 링크를 통한 제공업체 설정입니다. 앱이 사용 통계나 오류 보고서를 보내는지는 PromptQuorum이 확인한 자료 어디에도 나와 있지 않습니다.',
          '에이전트 모드는 파일을 읽고 편집하고 명령을 실행할 수 있습니다. 개발사의 FAQ에 따르면 선택한 폴더는 프로세스의 시작 작업 디렉터리일 뿐 파일 시스템 샌드박스가 아니며, 터미널 명령은 에이전트 모드에서만 승인 후 실행됩니다. 권한 모드는 \'매번 확인\', \'편집 자동 승인\', \'전체 액세스\'입니다. PromptQuorum은 승인이 어떻게 동작하는지 테스트하지 않았습니다.',
          '게이트웨이는 다른 도구가 설정한 제공업체를 전용 키로 사용하게 해 줍니다. PromptQuorum은 게이트웨이가 어떤 네트워크 인터페이스에서 대기하는지 확인하지 않았습니다. 소스 코드는 GitHub에 공개되어 있으므로 데이터 흐름을 감사할 수 있습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**AQBot은 여러 AI 제공업체를 쓰면서 하나의 데스크톱 클라이언트로 모으려는 분과, 코딩 도구를 하나의 로컬 게이트웨이로 연결하려는 개발자에게 적합합니다.**',
        ],
        items: [
          '제공업체를 오가며 나란히 놓인 답변, 분기, 메시지 버전을 하나의 앱에서 쓰고 싶은 분.',
          'Claude Code, Codex CLI, Gemini CLI, OpenCode를 쓰면서 개발사에 따르면 키, 라우팅, 사용 로그를 한곳에서 관리하려는 개발자.',
          '개발사에 따르면 로컬 지식 베이스로 비공개 문서와 채팅하려는 사용자.',
          'ChatGPT 내보내기 파일이나 AQBot이 백업을 가져올 수 있는 Cherry Studio, Kelivo에서 옮겨 오는 분.',
          '코드가 AGPL-3.0으로 공개된 클라이언트를 선호하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**AQBot이 맞지 않는 상황도 있으며, 여러 사항은 확인되지 않았습니다.**',
        ],
        items: [
          '적합하지 않음: 개인정보 처리방침, 이용 약관, 회사 이름이 공개된 공급자가 필요한 분. PromptQuorum은 AQBot에서 이들을 찾지 못했습니다.',
          '적합하지 않음: Apple 공증을 받은 앱이 필요한 분. 개발사에 따르면 macOS 버전은 프로젝트 자체 인증서를 사용합니다.',
          '적합하지 않음: 다른 프로그램 없이 모델을 실행하려는 경우. AQBot은 클라이언트로 설명되며 로컬 모델은 Ollama 같은 서버를 통해 들어옵니다.',
          '확인되지 않음: 답변 품질, 에이전트 신뢰성, 지식 베이스 검색 품질, 속도, 메모리 사용량. PromptQuorum은 앱을 실행하지 않았습니다.',
          '확인되지 않음: 앱 데이터와 키가 컴퓨터에 남는지, 색인할 때 문서가 어디서 처리되는지, 사용 통계가 전송되는지. PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
          '확인되지 않음: 게이트웨이가 어떤 네트워크 인터페이스에서 대기하는지, 에이전트 권한 모드가 어떻게 동작하는지.',
          '확인되지 않음: Windows와 Linux 패키지의 서명 방식. 개발사는 macOS 인증서만 언급합니다.',
          '확인되지 않음: 프로젝트 운영자와 국가, 사용자 수, 독립적인 리뷰, 장기적인 안정성(버전 번호는 1.0 미만이고 저장소는 2026년 3월에 만들어졌습니다). PromptQuorum은 독립적인 리뷰를 찾지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AQBot과 대안 비교',
        itemHeadings: true,
        content: [
          '**AQBot은 다른 데스크톱 AI 채팅 클라이언트와 기능이 겹치며, PromptQuorum은 직접 비교하지 않았습니다.** 아래 도구는 디렉터리에 있으며 각자의 리뷰를 바탕으로 설명합니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'AQBot', '출처에 기재된 내용': 'AGPL-3.0; Mac/Windows/Linux; 제공업체, 에이전트, 게이트웨이' },
          { '도구': '[Cherry Studio](/ko/local-llms/cherry-studio-ai-desktop-client)', '출처에 기재된 내용': 'AGPL 3.0; Mac/Windows/Linux; 채팅 + 문서 채팅' },
          { '도구': '[Jan](/ko/power-local-llm/jan-review)', '출처에 기재된 내용': 'Apache 2.0(변형); Mac/Windows/Linux; 로컬 모델' },
          { '도구': '[Newelle](/ko/power-local-llm/newelle-review)', '출처에 기재된 내용': 'GPL-3.0; Linux + macOS 베타; 제공업체 또는 로컬 모델' },
          { '도구': '[Msty](/ko/power-local-llm/msty-review)', '출처에 기재된 내용': '비공개 소스; Mac/Windows/Linux; 프리미엄' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'AQBot에는 자체 AI 모델이 들어 있습니까?',
            a: '개발사는 AQBot을 클라이언트로 설명합니다. OpenAI, Claude, Gemini, DeepSeek, Qwen 같은 제공업체나 Ollama 같은 로컬 서버를 추가해 사용합니다. PromptQuorum이 읽은 자료에서는 내장 모델 실행 기능을 찾지 못했습니다.',
          },
          {
            q: 'AQBot은 무료입니까?',
            a: '개발사에 따르면 그렇습니다. 앱은 AGPL-3.0으로 무료로 내려받아 쓸 수 있고, 연결하는 모델 제공업체에만 비용을 지불합니다. 로컬 모델을 실행하면 비용이 들지 않습니다.',
          },
          {
            q: 'AQBot을 Claude Code나 Codex CLI와 함께 쓸 수 있습니까?',
            a: '개발사에 따르면 로컬 게이트웨이를 통해 가능합니다. 게이트웨이를 시작하고 게이트웨이 키를 만들면 Quick Connect가 Claude Code, Codex, OpenCode, Gemini CLI, Cursor에 주소와 키를 기록합니다. Claude Code는 ANTHROPIC_BASE_URL과 ANTHROPIC_AUTH_TOKEN으로 직접 설정할 수도 있습니다. PromptQuorum은 이를 테스트하지 않았습니다.',
          },
          {
            q: '다른 앱의 채팅을 옮길 수 있습니까?',
            a: '개발사에 따르면 AQBot은 ChatGPT 공식 내보내기 파일과 Cherry Studio, Kelivo 백업을 미리보기, 경고, 중복 처리와 함께 가져옵니다. Cherry Studio와 Kelivo에서 가져올 때는 제공업체, API 키, 첨부 파일도 옮길 수 있습니다.',
          },
          {
            q: 'AQBot은 어떤 인터페이스 언어를 제공합니까?',
            a: '개발사에 따르면 11개입니다. 중국어 간체와 번체, 영어, 일본어, 한국어, 프랑스어, 독일어, 스페인어, 러시아어, 힌디어, 아랍어입니다. README는 중국어가 원문이며 번역본이 있습니다.',
          },
          {
            q: 'AQBot은 얼마나 자주 업데이트됩니까?',
            a: 'GitHub에는 2026년 10월 9일에 0.0.163, 10월 19일에 0.0.164, 10월 26일에 0.0.165 버전이 올라와 있으며, 메인 브랜치의 마지막 커밋은 2026년 10월 31일입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**여러 AI 제공업체를 오가며 쓰고, 에이전트, MCP, 문서 검색, 코딩 도구용 로컬 게이트웨이를 갖춘 오픈소스 데스크톱 클라이언트를 원한다면 AQBot은 살펴볼 만합니다.**',
          '무료 앱치고는 문서상으로 많은 것을 다룹니다. 멀티 모델 채팅, 두 종류의 에이전트, 지식 베이스, Skills 관리, OpenAI, Claude, Gemini 형식을 지원하는 게이트웨이입니다. 최근 세 번의 릴리스는 7~10일 간격이었고, 코드는 공개되어 있습니다.',
          '단점도 분명합니다. PromptQuorum은 웹사이트에서 개인정보 처리방침, 이용 약관, 회사 이름을 찾지 못했고, 개발사에 따르면 macOS 버전은 프로젝트 자체 인증서를 사용하며, 버전 번호는 1.0 미만이고, PromptQuorum은 아무것도 테스트하지 않았습니다. 일회용 API 키와 테스트용 폴더로 시작하고, 의존하기 전에 앱이 네트워크에서 무엇을 하는지 확인하세요.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[AQBot 웹사이트](https://app.aqbot.top) — 제품 개요, 버전, 스크린샷. 확인일: 2026년 11월 18일.',
          '[다운로드 페이지](https://app.aqbot.top/download) — 설치 프로그램, 지원 운영 체제, macOS 서명 안내. 확인일: 2026년 11월 18일.',
          '[FAQ](https://app.aqbot.top/faq) — 데이터 폴더, 제공업체, 에이전트, 라이선스. 확인일: 2026년 11월 18일.',
          '[시작 가이드](https://app.aqbot.top/guide/getting-started) — 설치와 초기 설정. 사이트 표기 날짜 2026년 10월 28일. 확인일: 2026년 11월 18일.',
          '[제공업체 가이드](https://app.aqbot.top/guide/providers) — 지원 제공업체와 AWS Bedrock 설정. 사이트 표기 날짜 2026년 10월 28일. 확인일: 2026년 11월 18일.',
          '[GitHub 저장소](https://github.com/AQBot-Desktop/AQBot) — GitHub가 표시하는 라이선스, 생성일, 마지막 커밋. 확인일: 2026년 11월 18일.',
          '[README](https://github.com/AQBot-Desktop/AQBot#readme) — 기능, 플랫폼, macOS 안내. 확인일: 2026년 11월 18일.',
          '[GitHub 릴리스](https://github.com/AQBot-Desktop/AQBot/releases) — v0.0.165 릴리스 날짜와 패키지. 확인일: 2026년 11월 18일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Cherry Studio 리뷰](/ko/local-llms/cherry-studio-ai-desktop-client) — 문서 채팅을 갖춘 멀티 제공업체 데스크톱 클라이언트.',
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 오프라인 중심의 오픈소스 데스크톱 채팅 앱.',
          '[Newelle 리뷰](/ko/power-local-llm/newelle-review) — 클라우드 제공업체, 로컬 모델, MCP를 지원하는 Linux 어시스턴트.',
          '[로컬 LLM 채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 채팅 클라이언트를 나란히 비교.',
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
    heroImage: '/images/aqbot-review-hero-ar.webp',
    title: 'مراجعة AQBot: عميل ذكاء اصطناعي لسطح المكتب مع وكلاء وبوابة API محلية',
    seoTitle: 'مراجعة AQBot: عميل ذكاء اصطناعي لسطح المكتب مع بوابة محلية',
    intro:
      'AQBot 0.0.165 عميل ذكاء اصطناعي مفتوح المصدر لسطح المكتب على macOS وWindows وLinux، يجمع الدردشة مع عدة مزوّدين والوكلاء وأدوات MCP وقاعدة معرفة للمستندات وبوابة API محلية لأدوات البرمجة. الترخيص هو AGPL-3.0. تستند هذه المراجعة إلى الموقع الرسمي ومستودع GitHub مع ملف README والإصدارات، وتاريخ التحقق هو 18 نوفمبر 2026. لم تجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'AQBot عميل ذكاء اصطناعي مفتوح المصدر لسطح المكتب مع وكلاء وMCP ودردشة مع المستندات وبوابة API محلية. ما الذي تأكد وما الذي لم يتأكد.',
    twitterDescription:
      'AQBot: عميل ذكاء اصطناعي مفتوح المصدر لسطح المكتب مع دردشة متعددة المزوّدين ووكلاء وMCP وقاعدة معرفة للمستندات وبوابة API محلية. ما الذي تأكد.',
    audience:
      'من يستخدمون عدة مزوّدين للذكاء الاصطناعي ويريدون عميلًا واحدًا لسطح المكتب، والمطوّرون الذين يريدون تمرير أدوات البرمجة عبر بوابة واحدة، والمستخدمون الذين يريدون الدردشة مع مستنداتهم',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة AQBot',
    targetKeywords: [
      'مراجعة AQBot',
      'عميل AQBot للذكاء الاصطناعي على سطح المكتب',
      'عميل ذكاء اصطناعي مفتوح المصدر لسطح المكتب',
      'بوابة API محلية لـ Claude Code',
      'تطبيق دردشة متعدد النماذج',
      'مساحة عمل وكلاء ACP',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**AQBot عميل ذكاء اصطناعي مفتوح المصدر (AGPL-3.0) لسطح المكتب يضع الدردشة مع مزوّدين كثيرين والوكلاء وأدوات MCP والبحث في المستندات وبوابة API محلية في تطبيق واحد.** يعمل على macOS وWindows وLinux وهو مجاني؛ تدفع فقط لمزوّدي النماذج الذين تربطهم به. لم تجد PromptQuorum على الموقع سياسة خصوصية ولا شروط استخدام ولا شركة مسمّاة، ولم تجرّب التطبيق.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو AQBot ولمن هو؟',
        answer:
          'AQBot عميل ذكاء اصطناعي لسطح المكتب تطوّره منظمة GitHub باسم AQBot-Desktop بشكل علني على GitHub. يناسب من يعملون مع عدة مزوّدين للذكاء الاصطناعي ويريدون جمع الدردشة والوكلاء والبحث في المستندات وبوابة مشتركة لأدوات البرمجة في مكان واحد.',
        bullets: [
          'بحسب المطوّر، الترخيص AGPL-3.0 والتنزيل مجاني؛ ويُحاسَب مزوّدو النماذج بشكل منفصل.',
          'بحسب المطوّر، يتصل بـ OpenAI وClaude وGemini وDeepSeek وQwen وبأي نقطة نهاية متوافقة مع OpenAI، بما في ذلك الخوادم المحلية مثل Ollama.',
          'يمكن تحويل الدردشة إلى وضع الوكيل الذي يعدّل الملفات وينفّذ الأوامر بعد الموافقة، وتتحكم مساحة عمل منفصلة في وكلاء خارجيين عبر Agent Client Protocol.',
          'تقدّم بوابة API محلية المزوّدين الذين أعددتهم بصيغ OpenAI وClaude وGemini لأدوات مثل Claude Code وCodex CLI.',
          'صدر الإصدار 0.0.165 في 26 أكتوبر 2026، وكان آخر إيداع (commit) على الفرع الرئيسي في 31 أكتوبر 2026.',
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
      { label: 'الخصوصية والبيانات وأمان الوكلاء', anchor: 'privacy' },
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
            text: 'AQBot عميل ذكاء اصطناعي مفتوح المصدر لسطح المكتب يجمع الدردشة مع مزوّدين كثيرين والوكلاء وأدوات MCP وقاعدة معرفة للمستندات وبوابة API محلية في تطبيق واحد لأنظمة macOS وWindows وLinux.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله نافذة واحدة لكل حسابات الذكاء الاصطناعي لديك: تضيف مفاتيح API الخاصة بك، وتدردش مع نموذج واحد أو عدة نماذج، وتترك وكيلًا يعمل في مجلد تختاره، وتسمح لأدوات أخرى على حاسوبك باستخدام نماذجك عبر عنوان محلي.',
          },
        ],
        items: [
          'ثبّت ملف DMG أو EXE أو MSI أو ZIP محمولًا أو AppImage أو DEB أو RPM من صفحة إصدارات GitHub أو من صفحة التنزيل لدى المطوّر.',
          'أضف مزوّدًا بمفتاح API الخاص بك واجلب قائمة نماذجه؛ وبالنسبة إلى النماذج المحلية يذكر المطوّر خوادم محلية مثل Ollama.',
          'بحسب المطوّر، نسخة macOS موقّعة بشهادة خاصة بالمشروع وليست Apple Developer ID، لذلك قد يعرض macOS تحذيرًا عند أول تشغيل.',
          'ينفّذ وضع الوكيل أوامر في مجلد تختاره؛ وبحسب المطوّر فإن هذا المجلد هو مجلد البدء فقط وليس بيئة معزولة.',
          'لم تجرّب PromptQuorum التطبيق، لذا فإن جودة الإجابات وموثوقية الوكلاء والسرعة وما يرسله التطبيق عبر الشبكة غير مُتحقَّق منها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'يقول المطوّر إن بيانات التطبيق وملفات المستخدم تبقى على حاسوبك. لم تفحص PromptQuorum حركة الشبكة ولم تجد سياسة خصوصية لمطابقة ذلك معها.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**AQBot عميل ذكاء اصطناعي لسطح المكتب تطوّره منظمة GitHub باسم AQBot-Desktop، وهو متاح لأنظمة macOS وWindows وLinux بموجب ترخيص AGPL-3.0.**',
          'الشيفرة علنية على [github.com/AQBot-Desktop/AQBot](https://github.com/AQBot-Desktop/AQBot). أُنشئ المستودع في مارس 2026، وظهر الإصدار 0.0.165 في 26 أكتوبر 2026، وكان آخر إيداع على الفرع الرئيسي في 31 أكتوبر 2026، لذا فالتطوير نشط ولا ينطبق تحذير المشروع المتوقف. أرقام الإصدارات ما زالت أقل من 1.0. لا يذكر [الموقع](https://app.aqbot.top) شركة ولا عنوانًا ولا بلدًا، ولذلك لم تستطع PromptQuorum تحديد من يشغّل المشروع سوى اسم المنظمة.',
          'بحسب المطوّر، AQBot مساحة عمل للذكاء الاصطناعي «تعتمد المحلي أولًا»، تجمع الدردشة متعددة المزوّدين والوكلاء وقاعدة معرفة للمستندات وأدوات MCP وبوابة API، وتُبقي بيانات التطبيق وملفات المستخدم على حاسوبك. تتصل الدردشة بـ OpenAI وClaude وGemini وDeepSeek وQwen وZhipu AI وxAI وAWS Bedrock وبأي نقطة نهاية متوافقة مع OpenAI.',
          'لم تشغّل PromptQuorum التطبيق ولم تتحقق من جودة الإجابات أو موثوقية الوكلاء أو السرعة أو استهلاك الذاكرة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يمكنك تثبيت AQBot من الحزم الموجودة في صفحة إصدارات GitHub؛ وتربط صفحة التنزيل لدى المطوّر بالملفات نفسها لأنظمة macOS وWindows وLinux.**',
          'يسرد الإصدار v0.0.165 صور DMG لـ Apple silicon وIntel، ومثبّتات EXE وMSI وملفات ZIP محمولة لـ Windows على x64 وARM64، وملف AppImage لـ Linux على x64، وحزم DEB وRPM لـ Linux على x64 وARM64.',
        ],
        columns: ['المنصة', 'الحزمة'],
        rows: [
          { 'المنصة': 'macOS (Apple silicon)', 'الحزمة': 'DMG' },
          { 'المنصة': 'macOS (Intel)', 'الحزمة': 'DMG (x64)' },
          { 'المنصة': 'Windows (x64 وARM64)', 'الحزمة': 'EXE للتثبيت أو MSI أو ZIP محمول' },
          { 'المنصة': 'Linux (x64)', 'الحزمة': 'AppImage أو DEB أو RPM' },
          { 'المنصة': 'Linux (ARM64)', 'الحزمة': 'DEB أو RPM' },
          { 'المنصة': 'الموقع الرسمي', 'الحزمة': '[app.aqbot.top](https://app.aqbot.top)' },
          { 'المنصة': 'سياسة الخصوصية', 'الحزمة': 'لم نعثر على واحدة' },
        ],
        note: 'نزّل من [صفحة إصدارات GitHub](https://github.com/AQBot-Desktop/AQBot/releases/latest) أو من [صفحة التنزيل](https://app.aqbot.top/download) لدى المطوّر. يقول المطوّر إن نسخة macOS موقّعة بشهادة خاصة بالمشروع وليست Apple Developer ID، لذلك قد يبلّغ macOS بأن التطبيق تالف أو من مطوّر لم يتم التحقق منه؛ وتعليماته أن تنقر على AQBot.app مع الضغط على مفتاح Control وتختار «فتح»، أو أن تسمح به من إعدادات النظام ← الخصوصية والأمان. افعل ذلك فقط إذا كنت تثق بمصدر التنزيل. لم تشغّل PromptQuorum المثبّتات ولم تتحقق من كيفية توقيع حزم Windows وLinux.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يعمل AQBot على macOS (Apple silicon وIntel) وWindows 10 و11 (x64 وARM64) وLinux (x64 وARM64)؛ ولا ينشر المطوّر حدًا أدنى للذاكرة أو لوحدة GPU.**',
          'تحتاج إلى مصدر نماذج واحد على الأقل: حساب لدى مزوّد مع مفتاح API، أو خادم محلي مثل Ollama يقول المطوّر إن AQBot يستطيع الاتصال به. بحسب المطوّر، توجد بيانات التطبيق في ~/.aqbot، والصور والمرفقات والنسخ الاحتياطية في ~/Documents/aqbot. وبحسب الموقع، تستجيب البوابة المحلية افتراضيًا على المنفذ 8080. لم تقِس PromptQuorum استهلاك الذاكرة ولا السرعة.',
        ],
        columns: ['البند', 'القيمة المعلنة'],
        rows: [
          { 'البند': 'macOS', 'القيمة المعلنة': 'Apple silicon وIntel' },
          { 'البند': 'Windows', 'القيمة المعلنة': 'Windows 10 و11، x64 وARM64' },
          { 'البند': 'Linux', 'القيمة المعلنة': 'x64 وARM64' },
          { 'البند': 'مصدر النماذج', 'القيمة المعلنة': 'مفتاح API لدى مزوّد أو خادم محلي' },
          { 'البند': 'مجلدات البيانات', 'القيمة المعلنة': '~/.aqbot و~/Documents/aqbot' },
          { 'البند': 'منفذ البوابة', 'القيمة المعلنة': '8080 افتراضيًا' },
          { 'البند': 'الذاكرة وGPU', 'القيمة المعلنة': 'غير منشورة' },
        ],
        note: 'بحسب المطوّر، خوادم النماذج المحلية برامج منفصلة يتصل بها AQBot. ويستخدم البحث على الويب خدمة بحث مثل Tavily أو Exa أو Zhipu أو Bocha.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**بُني AQBot حول الدردشة مع مزوّدين كثيرين؛ وتحيط بها ميزات الوكلاء وMCP والبحث في المستندات والبوابة.** كل ما يلي من ادعاءات المطوّر في الموقع وملف README.',
        ],
        items: [
          'الدردشة: ربط OpenAI وClaude وGemini وDeepSeek وQwen أو أي نقطة نهاية متوافقة مع OpenAI، ومقارنة إجابات عدة نماذج جنبًا إلى جنب، وتفريع المحادثات، والاحتفاظ بإصدارات الرسائل.',
          'وضع الوكيل: تحويل الدردشة إلى قراءة الملفات وتعديلها وتنفيذ الأوامر في مجلد، مع وضع أذونات يُختار من «اسأل في كل مرة» أو «اقبل التعديلات تلقائيًا» أو «وصول كامل»، وسجل للرموز (tokens) والتكلفة لكل مهمة.',
          'مساحة عمل ACP: التحكم في وكلاء خارجيين يتحدثون Agent Client Protocol، مثل Codex وClaude Agent وGemini CLI وCline وOpenCode، مع مشاريع ومحادثات محفوظة وموافقات لكل جلسة.',
          'MCP وSkills: تشغيل خوادم MCP عبر stdio أو SSE أو StreamableHTTP، واستخدام أدوات مدمجة مثل @aqbot/fetch، وإدارة مجلدات Skills لـ AQBot وCodex وClaude وAgents في مكان واحد.',
          'المعرفة والبحث: فهرسة الملفات الخاصة في قاعدة معرفة محلية بـ sqlite-vec، وإضافة بحث على الويب عبر Tavily أو Exa أو Zhipu أو Bocha، وإرفاق الملفات ونتائج البحث والذكريات بالسياق.',
          'الأدوار: حفظ موجّه النظام والصورة الرمزية وإعدادات أخذ العينات كدور قابل لإعادة الاستخدام، أو تثبيت أدوار من مصادر prompts.chat وPlexPt.',
          'بوابة API محلية: تقديم المزوّدين لديك كنقاط نهاية OpenAI Chat Completions وOpenAI Responses وClaude وGemini، مع مفاتيح بوابة منفصلة وTLS وسجلات للطلبات وإحصاءات استخدام؛ ويكتب Quick Connect العنوان والمفتاح في Claude Code وCodex وOpenCode وGemini CLI وCursor.',
          'الاستيراد والنسخ الاحتياطي: استيراد ملفات تصدير ChatGPT ونسخ Cherry Studio وKelivo الاحتياطية، والنسخ الاحتياطي إلى مجلد محلي أو WebDAV أو تخزين متوافق مع S3.',
          'سطح المكتب والواجهة: أيقونة في شريط النظام، ونافذة تبقى في المقدمة، واختصارات عامة، وتشغيل عند تسجيل الدخول، وإعدادات وكيل (proxy)، وفحص تلقائي للتحديثات، و11 لغة للواجهة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والبيانات وأمان الوكلاء',
        content: [
          '**بحسب المطوّر، يُبقي AQBot بيانات التطبيق وملفات المستخدم على حاسوبك؛ ولم تجد PromptQuorum سياسة خصوصية ولم تفحص حركة الشبكة، لذلك لا تستطيع تأكيد ذلك.**',
          'يذكر المطوّر مجلدين: يحتوي ~/.aqbot على قاعدة البيانات ومفتاح التشفير ومخزن المتجهات وملفات TLS، ويحتوي ~/Documents/aqbot على الصور والمرفقات والنسخ الاحتياطية. وبحسب المطوّر، تُشفَّر مفاتيح API بخوارزمية AES-256 باستخدام مفتاح رئيسي محلي. في 18 نوفمبر 2026، أعادت المسارات /privacy و/terms و/about و/imprint و/contact على [موقع المطوّر](https://app.aqbot.top) الرد «404 Not Found».',
          'استخدام الشبكة إلى جانب مزوّدي النماذج الذين تختارهم، كما يصفه ملف README والموقع: خدمات البحث على الويب، وخوادم MCP التي تضيفها، والنسخ الاحتياطي إلى WebDAV أو تخزين متوافق مع S3، وفحص التحديثات، وإعداد المزوّدين عبر روابط aqbot:// التي تطلب تأكيدًا قبل الاستيراد. ولا يوضح أي مصدر وجدته PromptQuorum ما إذا كان التطبيق يرسل إحصاءات استخدام أو تقارير أخطاء.',
          'يستطيع وضع الوكيل قراءة الملفات وتعديلها وتنفيذ الأوامر. تقول الأسئلة الشائعة لدى المطوّر إن المجلد الذي تختاره هو مجلد العمل الابتدائي للعملية وليس بيئة معزولة لنظام الملفات، وإن أوامر الطرفية تُنفَّذ فقط في وضع الوكيل بعد الموافقة. أوضاع الأذونات هي «اسأل في كل مرة» و«اقبل التعديلات تلقائيًا» و«وصول كامل». لم تختبر PromptQuorum سلوك الموافقات.',
          'تتيح البوابة لأدوات أخرى استخدام المزوّدين الذين أعددتهم بمفاتيحها الخاصة. لم تتحقق PromptQuorum من واجهات الشبكة التي تستمع عليها البوابة. الشيفرة المصدرية علنية على GitHub، لذا يمكن تدقيق تدفق البيانات.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب AQBot من يستخدمون عدة مزوّدين للذكاء الاصطناعي ويريدون عميلًا واحدًا لسطح المكتب، والمطوّرين الذين يريدون تمرير أدوات البرمجة عبر بوابة محلية واحدة.**',
        ],
        items: [
          'من يتنقلون بين المزوّدين ويريدون إجابات جنبًا إلى جنب وتفريعات وإصدارات للرسائل في تطبيق واحد.',
          'المطوّرون الذين يستخدمون Claude Code أو Codex CLI أو Gemini CLI أو OpenCode ويريدون، بحسب المطوّر، مكانًا واحدًا للمفاتيح والتوجيه وسجلات الاستخدام.',
          'المستخدمون الذين يريدون، بحسب المطوّر، الدردشة مع مستندات خاصة عبر قاعدة معرفة محلية.',
          'من ينتقلون من ملفات تصدير ChatGPT أو من Cherry Studio وKelivo اللذين يستطيع AQBot استيراد نسخهما الاحتياطية.',
          'القرّاء الذين يفضّلون عميلًا شيفرته علنية بموجب AGPL-3.0.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب AQBot بعض الحالات، وتبقى عدة تفاصيل غير متحقَّق منها.**',
        ],
        items: [
          'لا يناسب: من يحتاج إلى مزوّد لديه سياسة خصوصية منشورة وشروط وشركة مسمّاة؛ لم تجد PromptQuorum شيئًا من ذلك لدى AQBot.',
          'لا يناسب: من يحتاج إلى تطبيق موثَّق (notarized) من Apple؛ فبحسب المطوّر تستخدم نسخة macOS شهادة خاصة بالمشروع.',
          'لا يناسب: تشغيل نموذج دون برنامج آخر. يوصف AQBot بأنه عميل، وتصل النماذج المحلية عبر خوادم مثل Ollama.',
          'غير متحقَّق منه: جودة الإجابات وموثوقية الوكلاء وجودة الاسترجاع من قاعدة المعرفة والسرعة واستهلاك الذاكرة. لم تشغّل PromptQuorum التطبيق.',
          'غير متحقَّق منه: أن بيانات التطبيق والمفاتيح تبقى على حاسوبك، وأين تُعالَج المستندات عند فهرستها، وهل تُرسَل إحصاءات استخدام؛ لم تفحص PromptQuorum حركة الشبكة.',
          'غير متحقَّق منه: واجهات الشبكة التي تستمع عليها البوابة، وكيف تتصرف أوضاع أذونات الوكيل.',
          'غير متحقَّق منه: كيفية توقيع حزم Windows وLinux؛ فالمطوّر يذكر شهادة macOS فقط.',
          'غير متحقَّق منه: من يشغّل المشروع وفي أي بلد، وأعداد المستخدمين والمراجعات المستقلة، والاستقرار على المدى الطويل (أرقام الإصدارات أقل من 1.0 والمستودع من مارس 2026)؛ ولم تبحث PromptQuorum عن مراجعات مستقلة.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'AQBot مقابل البدائل',
        itemHeadings: true,
        content: [
          '**يتداخل AQBot مع عملاء دردشة ذكاء اصطناعي آخرين لسطح المكتب؛ ولم تقارن PromptQuorum بينها عمليًا.** الأدوات التالية موجودة في الدليل وتُوصَف بالاعتماد على مراجعاتها الخاصة.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'AQBot', 'المذكور في المصادر': 'AGPL-3.0؛ Mac/Windows/Linux؛ مزوّدون ووكلاء وبوابة' },
          { 'الأداة': '[Cherry Studio](/ar/local-llms/cherry-studio-ai-desktop-client)', 'المذكور في المصادر': 'AGPL 3.0؛ Mac/Windows/Linux؛ دردشة + دردشة مع المستندات' },
          { 'الأداة': '[Jan](/ar/power-local-llm/jan-review)', 'المذكور في المصادر': 'Apache 2.0 (نسخة معدّلة)؛ Mac/Windows/Linux؛ نماذج محلية' },
          { 'الأداة': '[Newelle](/ar/power-local-llm/newelle-review)', 'المذكور في المصادر': 'GPL-3.0؛ Linux + macOS تجريبي؛ مزوّدون أو نماذج محلية' },
          { 'الأداة': '[Msty](/ar/power-local-llm/msty-review)', 'المذكور في المصادر': 'مغلق المصدر؛ Mac/Windows/Linux؛ فريميوم' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يتضمن AQBot نماذج ذكاء اصطناعي خاصة به؟',
            a: 'يصف المطوّر AQBot بأنه عميل: تضيف مزوّدين مثل OpenAI وClaude وGemini وDeepSeek وQwen، أو خادمًا محليًا مثل Ollama. لم تجد PromptQuorum في المصادر التي قرأتها مشغّل نماذج مدمجًا.',
          },
          {
            q: 'هل AQBot مجاني؟',
            a: 'بحسب المطوّر، نعم: التطبيق مجاني للتنزيل والاستخدام بموجب AGPL-3.0، وتدفع فقط لمزوّدي النماذج الذين تربطهم به، أو لا تدفع شيئًا إذا شغّلت نماذج محلية.',
          },
          {
            q: 'هل يمكنني استخدام AQBot مع Claude Code أو Codex CLI؟',
            a: 'بحسب المطوّر، نعم عبر البوابة المحلية: شغّلها وأنشئ مفتاح بوابة، فيكتب Quick Connect العنوان والمفتاح في Claude Code أو Codex أو OpenCode أو Gemini CLI أو Cursor. ويمكن أيضًا ضبط Claude Code يدويًا بالمتغيرين ANTHROPIC_BASE_URL وANTHROPIC_AUTH_TOKEN. لم تختبر PromptQuorum ذلك.',
          },
          {
            q: 'هل يمكنني نقل محادثاتي من تطبيق آخر؟',
            a: 'بحسب المطوّر، يستورد AQBot ملفات تصدير ChatGPT الرسمية ونسخ Cherry Studio وKelivo الاحتياطية، مع معاينة وتحذيرات ومعالجة للتكرار؛ ويمكن لاستيراد Cherry Studio وKelivo نقل المزوّدين ومفاتيح API والمرفقات أيضًا.',
          },
          {
            q: 'ما لغات الواجهة التي يوفّرها AQBot؟',
            a: 'إحدى عشرة لغة بحسب المطوّر: الصينية المبسّطة والتقليدية والإنجليزية واليابانية والكورية والفرنسية والألمانية والإسبانية والروسية والهندية والعربية. ملف README مكتوب أولًا بالصينية وله ترجمات.',
          },
          {
            q: 'كم مرة يُحدَّث AQBot؟',
            a: 'يسرد GitHub الإصدار 0.0.163 في 9 أكتوبر 2026، والإصدار 0.0.164 في 19 أكتوبر 2026، والإصدار 0.0.165 في 26 أكتوبر 2026، وكان آخر إيداع على الفرع الرئيسي في 31 أكتوبر 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق AQBot النظر إذا كنت تتنقل بين عدة مزوّدين للذكاء الاصطناعي وتريد عميلًا مفتوح المصدر لسطح المكتب مع وكلاء وMCP وبحث في المستندات وبوابة محلية لأدوات البرمجة.**',
          'على الورق يغطي الكثير بالنسبة إلى تطبيق مجاني: دردشة متعددة النماذج، ونوعان من الوكلاء، وقاعدة معرفة، وإدارة Skills، وبوابة تدعم صيغ OpenAI وClaude وGemini. وجاءت الإصدارات الثلاثة الأخيرة بفارق 7 إلى 10 أيام، والشيفرة علنية.',
          'المقايضات حقيقية: لم تجد PromptQuorum على الموقع سياسة خصوصية ولا شروطًا ولا شركة مسمّاة، وبحسب المطوّر تستخدم نسخة macOS شهادة خاصة بالمشروع، وأرقام الإصدارات أقل من 1.0، ولم تجرّب PromptQuorum أي شيء. ابدأ بمفتاح API مؤقت ومجلد تجريبي، وتحقق مما يفعله التطبيق على شبكتك قبل أن تعتمد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع AQBot](https://app.aqbot.top) — نظرة عامة على المنتج والإصدار ولقطات الشاشة، تاريخ التحقق: 18 نوفمبر 2026.',
          '[صفحة التنزيل](https://app.aqbot.top/download) — المثبّتات والأنظمة المدعومة وملاحظة توقيع macOS، تاريخ التحقق: 18 نوفمبر 2026.',
          '[الأسئلة الشائعة](https://app.aqbot.top/faq) — مجلدات البيانات والمزوّدون والوكلاء والترخيص، تاريخ التحقق: 18 نوفمبر 2026.',
          '[دليل البدء](https://app.aqbot.top/guide/getting-started) — التثبيت والإعداد الأول، مؤرَّخ في الموقع 28 أكتوبر 2026، تاريخ التحقق: 18 نوفمبر 2026.',
          '[دليل المزوّدين](https://app.aqbot.top/guide/providers) — المزوّدون المدعومون وإعداد AWS Bedrock، مؤرَّخ في الموقع 28 أكتوبر 2026، تاريخ التحقق: 18 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/AQBot-Desktop/AQBot) — الترخيص كما يعرضه GitHub وتاريخ الإنشاء وآخر إيداع، تاريخ التحقق: 18 نوفمبر 2026.',
          '[README](https://github.com/AQBot-Desktop/AQBot#readme) — الميزات والمنصات وملاحظة macOS، تاريخ التحقق: 18 نوفمبر 2026.',
          '[إصدارات GitHub](https://github.com/AQBot-Desktop/AQBot/releases) — تواريخ الإصدار وحزم v0.0.165، تاريخ التحقق: 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Cherry Studio](/ar/local-llms/cherry-studio-ai-desktop-client) — عميل لسطح المكتب متعدد المزوّدين مع دردشة مع المستندات.',
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — تطبيق دردشة مفتوح المصدر لسطح المكتب يركّز على العمل دون اتصال.',
          '[مراجعة Newelle](/ar/power-local-llm/newelle-review) — مساعد لنظام Linux مع مزوّدين سحابيين ونماذج محلية وMCP.',
          '[مساعدو دردشة LLM المحليون مقارنةً](/ar/power-local-llm/local-llm-chat-assistants-compared) — عملاء الدردشة جنبًا إلى جنب.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
}

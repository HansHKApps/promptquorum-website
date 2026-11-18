// Minutes Review: Free Open-Source Meeting, Voice Memo and Dictation Memory for AI Agents
// Slug: minutes-review
// Companion to: anarlog-review, meetily-review, screenpipe-review, amical-review, local-llm-voice-audio-compared
// Sources (all read 2026-11-18, no hands-on testing): official website (home page, /privacy dated 23 March 2026, /security, /for-agents, /compare, /llms.txt),
// GitHub repository silverstein/minutes (API metadata, README, docs/install.md, docs/features.md, release v0.34.0 with asset list and notes, release list, commits, owner profile).
// The request came from the site owner, not from the maker.
// Last upstream update 2026-11-17 (last commit on main; latest release v0.34.0 on 2026-11-17) => no stale warning.
// Theme: 'Voice, Speech & Multimodal' (as anarlog-review, amical-review). HQ flag: none (country not clear from a primary source; owner decision 2026-11-18).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/minutes-review-hero-en.webp',
    title: 'Minutes Review: Free Open-Source Meeting, Voice Memo and Dictation Memory for AI Agents',
    seoTitle: 'Minutes Review: Free Conversation Memory for AI Agents',
    intro:
      'Minutes 0.34.0 is a free, MIT-licensed app that records and transcribes meetings, voice memos and dictation and keeps each one as a Markdown file. According to its README, capture, transcription and storage run on your own computer, and Claude Code, Codex, Cursor or any other MCP client can search those files and name the file an answer came from. This review is based on the official website and the GitHub repository with its install guide and release notes, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Minutes is a free MIT app that records meetings, voice memos and dictation as Markdown files that MCP clients can search. What is confirmed.',
    twitterDescription:
      'Minutes: a free open-source app that records and transcribes meetings, voice memos and dictation as Markdown files for Claude, Codex and other MCP clients. What is confirmed.',
    audience:
      'People who record meetings, voice memos or dictation and want an assistant such as Claude Code, Codex or Cursor to search them, users who prefer plain Markdown files over a hosted notetaker, and developers who want a local source of meeting context',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Minutes review',
    targetKeywords: [
      'Minutes review',
      'local meeting notes with MCP',
      'open-source meeting transcription Mac',
      'dictation app that saves Markdown',
      'AI agent memory from meetings',
      'open-source Granola alternative',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Minutes is a free, open-source (MIT) app that records and transcribes meetings, voice memos and dictation and saves each as a Markdown file that Claude, Codex, Cursor or another MCP client can search.** According to the maker, capture, transcription and storage run on your computer. The desktop app installs from a DMG on Apple Silicon Macs or a setup file on Windows, and Linux gets a command-line build. PromptQuorum has not tested it, and no company address, imprint or terms page was found.',
    quickAnswerTop: {
      en: {
        question: 'What is Minutes and who is it for?',
        answer:
          'Minutes is a conversation memory app developed in the open on GitHub. It suits people who want recordings, transcripts, decisions and action items as plain Markdown files that their own AI assistant can search, with transcription on their own computer, as the maker describes it.',
        bullets: [
          'Free and MIT licensed; a desktop app for Apple Silicon Macs and Windows and a command-line build for Linux; four releases appeared between 9 and 17 November 2026.',
          'Capture covers meetings and calls, voice memos you drop in and dictation; each conversation ends up as one Markdown file with a transcript, decisions and action items.',
          'Transcription and speaker labels run on your computer, according to the maker; summaries are optional and come from an assistant you choose, such as Claude on your existing subscription, or a local model.',
          'An MCP server lets Claude Code, Codex, Cursor, Gemini CLI, OpenCode and other MCP clients search the files and name the source file of an answer.',
          'Repository created in March 2026; version 0.34.0 was released on 17 November 2026.',
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
            text: 'According to the maker, Minutes is a free, open-source app that records and transcribes meetings, voice memos and dictation on your computer and saves them as Markdown files that Claude, Codex and other MCP clients can search.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a folder of plain text files that fills itself from your conversations: you record or dictate, Minutes transcribes it, and each conversation becomes one file with the transcript, decisions and action items. Your AI assistant reads that folder when you ask a question and points to the file behind the answer.',
          },
        ],
        items: [
          'Install the desktop app from the GitHub releases page or with Homebrew: a DMG for Apple Silicon Macs and a setup file for Windows; Linux has a prebuilt command-line binary.',
          'Capture, transcription, speaker labels and storage run on your computer, according to the maker; only context you authorize goes to a cloud assistant or summarizer.',
          'Connect an AI assistant through the MCP server, which the README starts with an npx command, and ask it about your recorded conversations.',
          'Summaries are optional; if you connect a cloud assistant, the transcript context you authorize goes to that provider under its terms.',
          'PromptQuorum has not tested the app, so transcription accuracy, speaker labels and answer quality are unverified.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Recording other people can require their consent, depending on where you and they are. The README lists consent reminders and provenance markers as helpers, and the maker\'s security page says local processing is not a compliance certification; check the rules that apply to you before you record a call. This is not legal advice.',
          },
          {
            type: 'note',
            text: 'The maker\'s privacy page, dated 23 March 2026, says there is no telemetry, no crash reporting and no account, while its security page adds that setup and updates can download models and software. PromptQuorum did not inspect network traffic, so it cannot confirm either statement beyond what the maker writes.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Minutes is an MIT-licensed conversation memory app that records and transcribes meetings, voice memos and dictation and stores each as a Markdown file, released for macOS, Windows and Linux.**',
          'It is developed in the open at [github.com/silverstein/minutes](https://github.com/silverstein/minutes) and described by its repository as a local-first alternative to hosted notetakers such as Granola and Otter that Claude Code, Codex, Cursor and any MCP client can query. The repository was created in March 2026; version 0.34.0 appeared on 17 November 2026, after versions 0.33.0 to 0.33.2 between 9 and 12 November, and the last commit on the main branch was also on 17 November 2026, so development is active and no stale-project warning applies. The README names Mat Silverstein, founder of X1 Wealth, as the builder; PromptQuorum found no company address, imprint or governing-law statement, so it cannot say which country the project is based in.',
          'According to the README and website, Minutes saves every conversation as a Markdown file with structured front matter in a folder you own. It lists a desktop app with menu-bar capture, dictation and a Recall panel, a command-line tool, an MCP server, a Claude Code plugin and a TypeScript SDK. The website shows answers from connected assistants that name the file they came from.',
          'PromptQuorum has not run the app and has not checked transcription accuracy, speaker labels, dictation quality or the quality of answers from connected assistants.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install the Minutes desktop app from the GitHub releases page or, on a Mac, with Homebrew; Windows has a setup file, and Linux has a command-line binary.**',
          'The v0.34.0 release lists a DMG for Apple Silicon Macs, a setup EXE and a portable build for Windows, a Linux command-line binary and a Claude Desktop extension. The README also documents Homebrew and Cargo installs, and the install guide says the Homebrew cask and update feed follow the Apple Silicon build while Intel Macs build from source.',
        ],
        columns: ['Platform', 'Package'],
        rows: [
          { 'Platform': 'macOS (Apple Silicon)', 'Package': 'DMG or Homebrew cask' },
          { 'Platform': 'macOS (Intel)', 'Package': 'Build from source' },
          { 'Platform': 'Windows (x64)', 'Package': 'Setup EXE' },
          { 'Platform': 'Linux (x64)', 'Package': 'CLI binary, no desktop app' },
          { 'Platform': 'Claude Desktop', 'Package': 'MCPB extension' },
          { 'Platform': '[Source](https://github.com/silverstein/minutes)', 'Package': 'cargo install minutes-cli' },
        ],
        note: 'Download from the [GitHub releases page](https://github.com/silverstein/minutes/releases/latest). PromptQuorum did not run the installers; the install guide calls the Mac cask and update feed notarized, and PromptQuorum did not check whether the Windows installer is code-signed. The website pages for [terms](https://useminutes.app/terms), [about](https://useminutes.app/about), [imprint](https://useminutes.app/imprint) and [contact](https://useminutes.app/contact) returned "404" on 18 November 2026.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**Minutes needs a recent Mac, Windows PC or Linux computer; the README and install guide publish no memory or GPU minimum.**',
          'The list comes from the install guide and README. Speech models are downloaded during setup, and the model you choose changes how much your computer has to do. PromptQuorum did not measure memory use, speed or disk use.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'macOS', 'Stated figure': 'Apple Silicon DMG; macOS 15+ named' },
          { 'Item': 'Windows', 'Stated figure': 'x64; setup EXE' },
          { 'Item': 'Linux', 'Stated figure': 'x64 CLI; glibc 2.39+' },
          { 'Item': 'MCP server', 'Stated figure': 'Node.js 22 recommended' },
          { 'Item': 'Speech models', 'Stated figure': 'Whisper; Parakeet on Apple Silicon' },
          { 'Item': 'Memory and GPU', 'Stated figure': 'Not published' },
        ],
        note: 'The prebuilt Linux binary needs glibc 2.39 or newer and the ALSA and PipeWire libraries; the install guide names Ubuntu 24.04 as the validated system and says Debian 12 must build from source. macOS 15 is the version the install guide names for the desktop app.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Minutes is first a recorder and transcriber that stores conversations as Markdown; Recall, dictation and agent access sit around it.** All items below are maker claims from the README, website and install guide.',
        ],
        items: [
          'Capture: record meetings and calls from the microphone and system audio, drop in voice memos (for example from a phone through a synced folder) or dictate with a held key.',
          'Transcription: runs on your computer with whisper.cpp; the signed Mac desktop app also bundles a Parakeet speech plugin, and speaker labels come from on-device diarization models.',
          'Output: each conversation becomes one Markdown file with YAML front matter listing title, date, duration, decisions and action items, which works with Obsidian, Logseq, grep and any Markdown tool.',
          'Dictation: hold a key and talk; on a Mac the text is typed at the cursor, on Windows and Linux it goes to the clipboard, and every dictation is also saved as a Markdown file. Self-corrections and voice commands are handled by rules on your device, according to the website.',
          'Recall: a panel in the desktop app where you ask questions about your recordings; the 0.34.0 notes add up to four separate conversation tabs.',
          'Agents: an MCP server, a command-line tool, a TypeScript SDK and a Claude Code plugin let Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi and other clients search meetings, memos and dictation and follow a live transcript.',
          'Consent and privacy controls: the README lists consent reminders, acknowledgement and provenance markers, and says sensitive meetings are saved without audio and restricted by default.',
          'Demo: a sample command adds sample meetings so you can try the agent connection without a microphone.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**According to the maker, capture, transcription, speaker labels and storage run on your computer, and text leaves it only when you send authorized context to a cloud assistant or summarizer; PromptQuorum did not inspect network traffic and cannot confirm this.**',
          'The privacy page, dated 23 March 2026, says Minutes has no analytics, no telemetry, no crash reports and no account, and runs no server of its own. The security page adds that setup and updates can download models and software, and that the website counts visits with Cloudflare Web Analytics, separately from the desktop app. PromptQuorum did not check how the update feed behaves in the current version.',
          'If you connect a cloud assistant or summarizer, the context you authorize goes to that provider under its terms; the maker says a local model, or skipping summaries, keeps the workflow on your device. Files you copy into a synced folder follow that service\'s settings.',
          'According to the security page, the Markdown files are written with owner-only permissions, and the code is MIT-licensed and public, so the data flow can be audited. The maker states that local processing is not a compliance certification; recording consent and retention remain your responsibility.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Minutes fits people who want meetings, voice memos and dictation saved as plain Markdown that their own AI assistant can search.**',
        ],
        items: [
          'People who already work with Claude Code, Codex, Cursor or another MCP client and want it to search their recorded conversations.',
          'Users who prefer plain files they can open, search and back up over the workspace of a hosted notetaker.',
          'Apple Silicon Mac and Windows users who want one free app for meeting capture and dictation.',
          'Readers who prefer a project whose code and licence are public.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Minutes is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: Intel Mac users who do not want to build from source, since the release lists an Apple Silicon DMG only.',
          'Not a fit: anyone who needs a Linux desktop app; the Linux release is a command-line binary.',
          'Unverified: transcription accuracy, speaker labels, dictation quality, speed and the quality of answers from connected assistants. PromptQuorum has not run the app.',
          'Unverified: the claims of no telemetry and no network requests to the maker\'s servers, next to the update feed that the install guide describes; PromptQuorum did not inspect network traffic.',
          'Unverified: whether the Windows installer is code-signed, and how much memory a given speech model needs.',
          'Unverified: the maker\'s statements on consent handling and restricted storage of sensitive meetings.',
          'Unverified: who runs the project, which country it is based in and how many people use it. No company address, imprint or terms page was found, and PromptQuorum did not look for independent reviews.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Minutes vs Alternatives',
        itemHeadings: true,
        content: [
          '**Minutes overlaps with meeting notetakers, dictation apps and agent-memory tools; PromptQuorum has not compared it with them hands-on.** The tools below are in the directory and are described from their own reviews.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'Minutes', 'Noted in sources': 'MIT; Mac/Windows/Linux; Markdown memory for agents' },
          { 'Tool': '[Anarlog](/power-local-llm/anarlog-review)', 'Noted in sources': 'MIT; Mac/Windows/Linux; bot-free meeting notepad' },
          { 'Tool': '[Meetily](/power-local-llm/meetily-review)', 'Noted in sources': 'MIT; Mac/Windows; meeting notes' },
          { 'Tool': '[Screenpipe](/power-local-llm/screenpipe-review)', 'Noted in sources': 'Source-available; Mac/Windows/Linux; screen and audio memory' },
          { 'Tool': '[Amical](/power-local-llm/amical-review)', 'Noted in sources': 'MIT; Mac/Windows; dictation' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Do I need an account to use Minutes?',
            a: 'No account is needed to capture and store conversations, according to the maker\'s security page. A cloud assistant you connect has its own sign-in or key; the website describes, for example, Claude writing summaries on an existing Claude subscription.',
          },
          {
            q: 'Which AI assistants can search my recordings?',
            a: 'Per the README and website: Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi, Claude Desktop and Mistral Vibe through the MCP server, plus any other MCP client. PromptQuorum did not test these connections.',
          },
          {
            q: 'Does dictation work on Windows and Linux?',
            a: 'According to the website, dictation is typed at the cursor on a Mac and copied to the clipboard on Windows and Linux. The release lists a Windows desktop installer; on Linux the prebuilt release is the command-line tool.',
          },
          {
            q: 'Do I have to tell people that I am recording them?',
            a: 'That depends on where you and the other participants are, and many places require consent to record a call. The README lists consent reminders and provenance markers as helpers, and the maker says local processing is not a compliance certification. Check the rules that apply to you; this is not legal advice.',
          },
          {
            q: 'Does it work offline?',
            a: 'According to the maker, capture, transcription and storage run on your computer, so recording and transcribing do not need a cloud service. Setup downloads speech models, updates download software, and a cloud assistant or summarizer needs a connection.',
          },
          {
            q: 'How often does Minutes update?',
            a: 'GitHub lists version 0.33.0 on 9 November 2026, 0.33.1 on 11 November, 0.33.2 on 12 November and 0.34.0 on 17 November, with commits on the main branch as recently as 17 November 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Minutes is worth a look if you want meetings, voice memos and dictation saved as plain Markdown that your own AI assistant can search, and you use an Apple Silicon Mac or Windows.**',
          'On paper it covers a lot, and development is active: four releases between 9 and 17 November 2026 and a commit on 17 November 2026. The maker says transcription and storage stay on your computer, and the website shows answers from connected assistants that name the file they came from.',
          'The trade-offs are real: the repository is only a few months old, no company address, imprint or terms page was found, Intel Macs have no prebuilt desktop app, Linux is command-line only, and PromptQuorum has not tested anything. Try it on a few recordings, with everyone\'s consent, before you rely on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Minutes website](https://useminutes.app) — features, platforms and links, checked 18 November 2026.',
          '[Privacy page](https://useminutes.app/privacy) — the maker\'s statements on data, dated 23 March 2026, checked 18 November 2026.',
          '[Security page](https://useminutes.app/security) — what stays on the device and what touches the network, checked 18 November 2026.',
          '[For agents page](https://useminutes.app/for-agents) — MCP setup and supported clients, checked 18 November 2026.',
          '[GitHub repository](https://github.com/silverstein/minutes) — licence, creation date and last commit, checked 18 November 2026.',
          '[README](https://github.com/silverstein/minutes#readme) — features, install and privacy summary, checked 18 November 2026.',
          '[Install guide](https://github.com/silverstein/minutes/blob/main/docs/install.md) — platform packages and requirements, checked 18 November 2026.',
          '[GitHub releases](https://github.com/silverstein/minutes/releases) — release dates, packages and the 0.34.0 notes, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Voice and Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — text-to-speech, speech-to-text and voice agents side by side.',
          '[Anarlog Review](/power-local-llm/anarlog-review) — a bot-free open-source meeting notepad.',
          '[Meetily Review](/power-local-llm/meetily-review) — an open-source meeting notetaker for Mac and Windows.',
          '[Screenpipe Review](/power-local-llm/screenpipe-review) — a memory layer built from screen and audio capture.',
          '[Amical Review](/power-local-llm/amical-review) — free open-source dictation for Mac and Windows.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/minutes-review-hero-de.webp',
    title: 'Minutes-Rezension: Kostenloses Open-Source-Gedächtnis für Meetings, Sprachmemos und Diktate für KI-Agenten',
    seoTitle: 'Minutes-Rezension: Kostenloses Gesprächsgedächtnis für KI-Agenten',
    intro:
      'Minutes 0.34.0 ist eine kostenlose, MIT-lizenzierte App, die Meetings, Sprachmemos und Diktate aufnimmt, transkribiert und jeweils als Markdown-Datei ablegt. Laut README laufen Aufnahme, Transkription und Speicherung auf Ihrem eigenen Rechner, und Claude Code, Codex, Cursor oder jeder andere MCP-Client kann diese Dateien durchsuchen und die Datei nennen, aus der eine Antwort stammt. Diese Rezension stützt sich auf die offizielle Website und das GitHub-Repository mit Installationsanleitung und Release-Hinweisen, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Minutes ist eine kostenlose MIT-App, die Meetings, Sprachmemos und Diktate als Markdown-Dateien ablegt, die MCP-Clients durchsuchen können. Was belegt ist.',
    twitterDescription:
      'Minutes: kostenlose Open-Source-App, die Meetings, Sprachmemos und Diktate aufnimmt, transkribiert und als Markdown-Dateien für Claude, Codex und andere MCP-Clients ablegt. Was belegt ist.',
    audience:
      'Menschen, die Meetings, Sprachmemos oder Diktate aufnehmen und möchten, dass ein Assistent wie Claude Code, Codex oder Cursor sie durchsucht, Nutzer, die einfache Markdown-Dateien einem gehosteten Notizdienst vorziehen, und Entwickler, die eine lokale Quelle für Meeting-Kontext suchen',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Minutes Rezension',
    targetKeywords: [
      'Minutes Rezension',
      'lokale Meeting-Notizen mit MCP',
      'Open-Source-Meeting-Transkription Mac',
      'Diktier-App, die Markdown speichert',
      'KI-Agenten-Gedächtnis aus Meetings',
      'quelloffene Granola-Alternative',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Minutes ist eine kostenlose, quelloffene (MIT) App, die Meetings, Sprachmemos und Diktate aufnimmt, transkribiert und jeweils als Markdown-Datei speichert, die Claude, Codex, Cursor oder ein anderer MCP-Client durchsuchen kann.** Laut Hersteller laufen Aufnahme, Transkription und Speicherung auf Ihrem Rechner. Die Desktop-App wird auf Macs mit Apple Silicon per DMG und unter Windows per Setup-Datei installiert, und für Linux gibt es ein Kommandozeilen-Build. PromptQuorum hat sie nicht getestet; eine Unternehmensadresse, ein Impressum oder eine Nutzungsbedingungen-Seite wurde nicht gefunden.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Minutes, und für wen ist es gedacht?',
        answer:
          'Minutes ist eine offen auf GitHub entwickelte App für Gesprächsgedächtnis. Sie eignet sich für Menschen, die Aufnahmen, Transkripte, Entscheidungen und Aufgaben als einfache Markdown-Dateien wollen, die der eigene KI-Assistent durchsuchen kann, mit Transkription auf dem eigenen Rechner, wie der Hersteller es beschreibt.',
        bullets: [
          'Kostenlos und MIT-lizenziert; Desktop-App für Macs mit Apple Silicon und für Windows, Kommandozeilen-Build für Linux; zwischen dem 9. und 17. November 2026 erschienen vier Releases.',
          'Die Aufnahme umfasst Meetings und Anrufe, eingespielte Sprachmemos und Diktate; jedes Gespräch landet als eine Markdown-Datei mit Transkript, Entscheidungen und Aufgaben.',
          'Transkription und Sprecherzuordnung laufen laut Hersteller auf Ihrem Rechner; Zusammenfassungen sind optional und stammen von einem Assistenten Ihrer Wahl, etwa Claude mit Ihrem bestehenden Abonnement, oder von einem lokalen Modell.',
          'Ein MCP-Server lässt Claude Code, Codex, Cursor, Gemini CLI, OpenCode und andere MCP-Clients die Dateien durchsuchen und die Quelldatei einer Antwort nennen.',
          'Repository im März 2026 angelegt; Version 0.34.0 erschien am 17. November 2026.',
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
            text: 'Laut Hersteller ist Minutes eine kostenlose, quelloffene App, die Meetings, Sprachmemos und Diktate auf Ihrem Rechner aufnimmt, transkribiert und als Markdown-Dateien speichert, die Claude, Codex und andere MCP-Clients durchsuchen können.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich einen Ordner mit einfachen Textdateien vor, der sich aus Ihren Gesprächen füllt: Sie nehmen auf oder diktieren, Minutes transkribiert, und jedes Gespräch wird zu einer Datei mit Transkript, Entscheidungen und Aufgaben. Ihr KI-Assistent liest diesen Ordner, wenn Sie eine Frage stellen, und verweist auf die Datei hinter der Antwort.',
          },
        ],
        items: [
          'Installieren Sie die Desktop-App von der GitHub-Releases-Seite oder mit Homebrew: ein DMG für Macs mit Apple Silicon und eine Setup-Datei für Windows; für Linux gibt es ein fertiges Kommandozeilen-Programm.',
          'Aufnahme, Transkription, Sprecherzuordnung und Speicherung laufen laut Hersteller auf Ihrem Rechner; nur Kontext, den Sie freigeben, geht an einen Cloud-Assistenten oder Zusammenfasser.',
          'Verbinden Sie einen KI-Assistenten über den MCP-Server, den das README mit einem npx-Befehl startet, und fragen Sie ihn nach Ihren aufgezeichneten Gesprächen.',
          'Zusammenfassungen sind optional; wenn Sie einen Cloud-Assistenten verbinden, geht der freigegebene Transkript-Kontext zu den Bedingungen dieses Anbieters an ihn.',
          'PromptQuorum hat die App nicht getestet; Transkriptionsgenauigkeit, Sprecherzuordnung und Antwortqualität sind daher nicht überprüft.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Aufnahme anderer Personen kann deren Einwilligung erfordern, je nachdem, wo Sie und sie sich befinden. Das README nennt Einwilligungshinweise und Herkunftsmarkierungen als Hilfen, und die Sicherheitsseite des Herstellers sagt, lokale Verarbeitung sei keine Compliance-Zertifizierung; prüfen Sie die für Sie geltenden Regeln, bevor Sie einen Anruf aufnehmen. Dies ist keine Rechtsberatung.',
          },
          {
            type: 'note',
            text: 'Die Datenschutzseite des Herstellers vom 23. März 2026 sagt, es gebe keine Telemetrie, keine Absturzberichte und kein Konto, während die Sicherheitsseite ergänzt, dass Einrichtung und Updates Modelle und Software herunterladen können. PromptQuorum hat den Netzwerkverkehr nicht untersucht und kann beide Aussagen über die Angaben des Herstellers hinaus nicht bestätigen.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Minutes ist eine MIT-lizenzierte App für Gesprächsgedächtnis, die Meetings, Sprachmemos und Diktate aufnimmt, transkribiert und jeweils als Markdown-Datei speichert, veröffentlicht für macOS, Windows und Linux.**',
          'Sie wird offen unter [github.com/silverstein/minutes](https://github.com/silverstein/minutes) entwickelt und vom Repository als lokal orientierte Alternative zu gehosteten Notizdiensten wie Granola und Otter beschrieben, die Claude Code, Codex, Cursor und jeder MCP-Client abfragen können. Das Repository wurde im März 2026 angelegt; Version 0.34.0 erschien am 17. November 2026, nach den Versionen 0.33.0 bis 0.33.2 zwischen dem 9. und 12. November, und auch der letzte Commit auf dem Hauptzweig stammt vom 17. November 2026, die Entwicklung ist also aktiv und eine Warnung vor einem verwaisten Projekt entfällt. Das README nennt Mat Silverstein, Gründer von X1 Wealth, als Entwickler; PromptQuorum fand keine Unternehmensadresse, kein Impressum und keine Angabe zum anwendbaren Recht und kann daher nicht sagen, in welchem Land das Projekt angesiedelt ist.',
          'Laut README und Website speichert Minutes jedes Gespräch als Markdown-Datei mit strukturiertem Front Matter in einem Ordner, der Ihnen gehört. Genannt werden eine Desktop-App mit Aufnahme über die Menüleiste, Diktat und einem Recall-Bereich, ein Kommandozeilenwerkzeug, ein MCP-Server, ein Claude-Code-Plugin und ein TypeScript-SDK. Die Website zeigt Antworten verbundener Assistenten, die die Datei nennen, aus der sie stammen.',
          'PromptQuorum hat die App nicht ausgeführt und weder Transkriptionsgenauigkeit, Sprecherzuordnung, Diktatqualität noch die Qualität der Antworten verbundener Assistenten geprüft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie installieren die Minutes-Desktop-App von der GitHub-Releases-Seite oder auf dem Mac mit Homebrew; für Windows gibt es eine Setup-Datei, für Linux ein Kommandozeilen-Programm.**',
          'Das Release v0.34.0 listet ein DMG für Macs mit Apple Silicon, ein Setup-EXE und eine portable Version für Windows, ein Linux-Kommandozeilenprogramm und eine Erweiterung für Claude Desktop. Das README beschreibt außerdem Installationen über Homebrew und Cargo, und die Installationsanleitung sagt, dass Homebrew-Cask und Update-Feed dem Apple-Silicon-Build folgen, während Intel-Macs aus dem Quellcode bauen.',
        ],
        columns: ['Plattform', 'Paket'],
        rows: [
          { 'Plattform': 'macOS (Apple Silicon)', 'Paket': 'DMG oder Homebrew-Cask' },
          { 'Plattform': 'macOS (Intel)', 'Paket': 'Aus Quellcode bauen' },
          { 'Plattform': 'Windows (x64)', 'Paket': 'Setup-EXE' },
          { 'Plattform': 'Linux (x64)', 'Paket': 'CLI-Programm, keine Desktop-App' },
          { 'Plattform': 'Claude Desktop', 'Paket': 'MCPB-Erweiterung' },
          { 'Plattform': '[Quellcode](https://github.com/silverstein/minutes)', 'Paket': 'cargo install minutes-cli' },
        ],
        note: 'Laden Sie die Pakete von der [GitHub-Releases-Seite](https://github.com/silverstein/minutes/releases/latest) herunter. PromptQuorum hat die Installer nicht ausgeführt; die Installationsanleitung bezeichnet den Mac-Cask und den Update-Feed als notarisiert, und PromptQuorum hat nicht geprüft, ob der Windows-Installer signiert ist. Die Website-Seiten zu [Nutzungsbedingungen](https://useminutes.app/terms), [Über uns](https://useminutes.app/about), [Impressum](https://useminutes.app/imprint) und [Kontakt](https://useminutes.app/contact) lieferten am 18. November 2026 „404“.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Minutes braucht einen aktuellen Mac, Windows-PC oder Linux-Rechner; README und Installationsanleitung nennen weder Arbeitsspeicher- noch GPU-Mindestwerte.**',
          'Die Liste stammt aus der Installationsanleitung und dem README. Sprachmodelle werden bei der Einrichtung heruntergeladen, und das gewählte Modell bestimmt, wie stark Ihr Rechner ausgelastet wird. PromptQuorum hat weder Speicherverbrauch noch Geschwindigkeit oder Speicherplatzbedarf gemessen.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'macOS', 'Angegebener Wert': 'DMG für Apple Silicon; macOS 15+ genannt' },
          { 'Punkt': 'Windows', 'Angegebener Wert': 'x64; Setup-EXE' },
          { 'Punkt': 'Linux', 'Angegebener Wert': 'x64-CLI; glibc 2.39+' },
          { 'Punkt': 'MCP-Server', 'Angegebener Wert': 'Node.js 22 empfohlen' },
          { 'Punkt': 'Sprachmodelle', 'Angegebener Wert': 'Whisper; Parakeet auf Apple Silicon' },
          { 'Punkt': 'Speicher und GPU', 'Angegebener Wert': 'Nicht angegeben' },
        ],
        note: 'Das fertige Linux-Programm braucht glibc 2.39 oder neuer sowie die Bibliotheken ALSA und PipeWire; die Installationsanleitung nennt Ubuntu 24.04 als geprüftes System und sagt, dass Debian 12 aus dem Quellcode bauen muss. macOS 15 ist die Version, die die Installationsanleitung für die Desktop-App nennt.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Minutes ist zuerst ein Rekorder und Transkribierer, der Gespräche als Markdown ablegt; Recall, Diktat und Agentenzugriff ergänzen ihn.** Alle folgenden Punkte sind Herstellerangaben aus README, Website und Installationsanleitung.',
        ],
        items: [
          'Aufnahme: Meetings und Anrufe über Mikrofon und Systemton aufnehmen, Sprachmemos einspielen (etwa vom Handy über einen synchronisierten Ordner) oder mit einer gehaltenen Taste diktieren.',
          'Transkription: läuft mit whisper.cpp auf Ihrem Rechner; die signierte Mac-Desktop-App bringt außerdem ein Parakeet-Sprach-Plugin mit, und die Sprecherzuordnung stammt aus lokalen Diarisierungsmodellen.',
          'Ausgabe: Jedes Gespräch wird zu einer Markdown-Datei mit YAML-Front-Matter für Titel, Datum, Dauer, Entscheidungen und Aufgaben, die mit Obsidian, Logseq, grep und jedem Markdown-Werkzeug funktioniert.',
          'Diktat: Taste halten und sprechen; auf dem Mac wird der Text an der Cursorposition eingefügt, unter Windows und Linux landet er in der Zwischenablage, und jedes Diktat wird zusätzlich als Markdown-Datei gespeichert. Selbstkorrekturen und Sprachbefehle werden laut Website durch Regeln auf Ihrem Gerät verarbeitet.',
          'Recall: ein Bereich in der Desktop-App, in dem Sie Fragen zu Ihren Aufnahmen stellen; die Hinweise zu 0.34.0 ergänzen bis zu vier getrennte Gesprächs-Tabs.',
          'Agenten: Ein MCP-Server, ein Kommandozeilenwerkzeug, ein TypeScript-SDK und ein Claude-Code-Plugin lassen Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi und andere Clients Meetings, Memos und Diktate durchsuchen und ein Live-Transkript verfolgen.',
          'Einwilligung und Datenschutz: Das README nennt Einwilligungshinweise, Bestätigung und Herkunftsmarkierungen und sagt, sensible Meetings würden ohne Audio gespeichert und standardmäßig eingeschränkt.',
          'Demo: Ein Beispielbefehl fügt Beispiel-Meetings hinzu, damit Sie die Agentenanbindung ohne Mikrofon ausprobieren können.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Hersteller laufen Aufnahme, Transkription, Sprecherzuordnung und Speicherung auf Ihrem Rechner, und Text verlässt ihn nur, wenn Sie freigegebenen Kontext an einen Cloud-Assistenten oder Zusammenfasser senden; PromptQuorum hat den Netzwerkverkehr nicht untersucht und kann das nicht bestätigen.**',
          'Die Datenschutzseite vom 23. März 2026 sagt, Minutes habe keine Analyse, keine Telemetrie, keine Absturzberichte und kein Konto und betreibe keinen eigenen Server. Die Sicherheitsseite ergänzt, dass Einrichtung und Updates Modelle und Software herunterladen können und dass die Website Besuche mit Cloudflare Web Analytics zählt, getrennt von der Desktop-App. PromptQuorum hat nicht geprüft, wie sich der Update-Feed in der aktuellen Version verhält.',
          'Wenn Sie einen Cloud-Assistenten oder Zusammenfasser verbinden, geht der freigegebene Kontext zu den Bedingungen dieses Anbieters an ihn; laut Hersteller hält ein lokales Modell, oder der Verzicht auf Zusammenfassungen, den Ablauf auf Ihrem Gerät. Dateien, die Sie in einen synchronisierten Ordner kopieren, folgen den Einstellungen dieses Dienstes.',
          'Laut Sicherheitsseite werden die Markdown-Dateien mit Zugriffsrechten nur für den Besitzer geschrieben, und der Code ist MIT-lizenziert und öffentlich, der Datenfluss lässt sich also prüfen. Der Hersteller betont, lokale Verarbeitung sei keine Compliance-Zertifizierung; Einwilligung zur Aufnahme und Aufbewahrung bleiben Ihre Verantwortung.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Minutes passt zu Menschen, die Meetings, Sprachmemos und Diktate als einfaches Markdown speichern wollen, das ihr eigener KI-Assistent durchsuchen kann.**',
        ],
        items: [
          'Menschen, die bereits mit Claude Code, Codex, Cursor oder einem anderen MCP-Client arbeiten und möchten, dass dieser ihre aufgezeichneten Gespräche durchsucht.',
          'Nutzer, die einfache Dateien, die sie öffnen, durchsuchen und sichern können, dem Arbeitsbereich eines gehosteten Notizdienstes vorziehen.',
          'Nutzer von Macs mit Apple Silicon und von Windows, die eine kostenlose App für Meeting-Aufnahme und Diktat wollen.',
          'Leser, die ein Projekt mit öffentlichem Code und öffentlicher Lizenz bevorzugen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**Minutes passt in manchen Situationen nicht, und mehrere Einzelheiten bleiben ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: Nutzer von Intel-Macs, die nicht aus dem Quellcode bauen wollen, da das Release nur ein DMG für Apple Silicon listet.',
          'Nicht geeignet: alle, die eine Linux-Desktop-App brauchen; das Linux-Release ist ein Kommandozeilenprogramm.',
          'Ungeprüft: Transkriptionsgenauigkeit, Sprecherzuordnung, Diktatqualität, Geschwindigkeit und die Qualität der Antworten verbundener Assistenten. PromptQuorum hat die App nicht ausgeführt.',
          'Ungeprüft: die Aussagen, es gebe keine Telemetrie und keine Netzwerkanfragen an die Server des Herstellers, neben dem Update-Feed, den die Installationsanleitung beschreibt; PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          'Ungeprüft: ob der Windows-Installer signiert ist und wie viel Arbeitsspeicher ein bestimmtes Sprachmodell braucht.',
          'Ungeprüft: die Aussagen des Herstellers zum Umgang mit Einwilligung und zur eingeschränkten Speicherung sensibler Meetings.',
          'Ungeprüft: wer das Projekt betreibt, in welchem Land es angesiedelt ist und wie viele Menschen es nutzen. Eine Unternehmensadresse, ein Impressum oder eine Nutzungsbedingungen-Seite wurde nicht gefunden, und PromptQuorum hat nicht nach unabhängigen Rezensionen gesucht.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Minutes im Vergleich mit Alternativen',
        itemHeadings: true,
        content: [
          '**Minutes überschneidet sich mit Meeting-Notizdiensten, Diktier-Apps und Agenten-Gedächtnis-Werkzeugen; PromptQuorum hat es nicht praktisch mit ihnen verglichen.** Die folgenden Werkzeuge stehen im Verzeichnis und werden anhand ihrer eigenen Rezensionen beschrieben.',
        ],
        columns: ['Werkzeug', 'Laut Quellen'],
        rows: [
          { 'Werkzeug': 'Minutes', 'Laut Quellen': 'MIT; Mac/Windows/Linux; Markdown-Gedächtnis für Agenten' },
          { 'Werkzeug': '[Anarlog](/de/power-local-llm/anarlog-review)', 'Laut Quellen': 'MIT; Mac/Windows/Linux; Meeting-Notizbuch ohne Bot' },
          { 'Werkzeug': '[Meetily](/de/power-local-llm/meetily-review)', 'Laut Quellen': 'MIT; Mac/Windows; Meeting-Notizen' },
          { 'Werkzeug': '[Screenpipe](/de/power-local-llm/screenpipe-review)', 'Laut Quellen': 'Quelltext einsehbar; Mac/Windows/Linux; Bildschirm- und Audio-Gedächtnis' },
          { 'Werkzeug': '[Amical](/de/power-local-llm/amical-review)', 'Laut Quellen': 'MIT; Mac/Windows; Diktat' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Brauche ich ein Konto, um Minutes zu nutzen?',
            a: 'Laut Sicherheitsseite des Herstellers ist für Aufnahme und Speicherung kein Konto nötig. Ein Cloud-Assistent, den Sie verbinden, hat eine eigene Anmeldung oder einen eigenen Schlüssel; die Website beschreibt zum Beispiel, wie Claude Zusammenfassungen mit einem bestehenden Claude-Abonnement schreibt.',
          },
          {
            q: 'Welche KI-Assistenten können meine Aufnahmen durchsuchen?',
            a: 'Laut README und Website: Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi, Claude Desktop und Mistral Vibe über den MCP-Server, dazu jeder andere MCP-Client. PromptQuorum hat diese Verbindungen nicht getestet.',
          },
          {
            q: 'Funktioniert das Diktat unter Windows und Linux?',
            a: 'Laut Website wird das Diktat auf dem Mac an der Cursorposition eingefügt und unter Windows und Linux in die Zwischenablage kopiert. Das Release listet einen Windows-Desktop-Installer; unter Linux ist das fertige Release das Kommandozeilenwerkzeug.',
          },
          {
            q: 'Muss ich Menschen sagen, dass ich sie aufnehme?',
            a: 'Das hängt davon ab, wo Sie und die anderen Teilnehmenden sich befinden, und viele Rechtsordnungen verlangen für die Aufnahme eines Anrufs eine Einwilligung. Das README nennt Einwilligungshinweise und Herkunftsmarkierungen als Hilfen, und der Hersteller sagt, lokale Verarbeitung sei keine Compliance-Zertifizierung. Prüfen Sie die für Sie geltenden Regeln; dies ist keine Rechtsberatung.',
          },
          {
            q: 'Funktioniert es offline?',
            a: 'Laut Hersteller laufen Aufnahme, Transkription und Speicherung auf Ihrem Rechner, Aufnehmen und Transkribieren brauchen also keinen Cloud-Dienst. Die Einrichtung lädt Sprachmodelle herunter, Updates laden Software herunter, und ein Cloud-Assistent oder Zusammenfasser braucht eine Verbindung.',
          },
          {
            q: 'Wie oft wird Minutes aktualisiert?',
            a: 'GitHub listet Version 0.33.0 vom 9. November 2026, 0.33.1 vom 11. November, 0.33.2 vom 12. November und 0.34.0 vom 17. November, mit Commits auf dem Hauptzweig bis zum 17. November 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Minutes ist einen Blick wert, wenn Sie Meetings, Sprachmemos und Diktate als einfaches Markdown speichern wollen, das Ihr eigener KI-Assistent durchsuchen kann, und einen Mac mit Apple Silicon oder Windows nutzen.**',
          'Auf dem Papier deckt es viel ab, und die Entwicklung ist aktiv: vier Releases zwischen dem 9. und 17. November 2026 und ein Commit am 17. November 2026. Laut Hersteller bleiben Transkription und Speicherung auf Ihrem Rechner, und die Website zeigt Antworten verbundener Assistenten, die die Datei nennen, aus der sie stammen.',
          'Die Nachteile sind real: Das Repository ist erst wenige Monate alt, eine Unternehmensadresse, ein Impressum oder eine Nutzungsbedingungen-Seite wurde nicht gefunden, Intel-Macs haben keine fertige Desktop-App, Linux gibt es nur per Kommandozeile, und PromptQuorum hat nichts getestet. Probieren Sie es mit einigen Aufnahmen und mit Einwilligung aller Beteiligten aus, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Minutes-Website](https://useminutes.app) — Funktionen, Plattformen und Links, geprüft am 18. November 2026.',
          '[Datenschutzseite](https://useminutes.app/privacy) — die Aussagen des Herstellers zu Daten, Stand 23. März 2026, geprüft am 18. November 2026.',
          '[Sicherheitsseite](https://useminutes.app/security) — was auf dem Gerät bleibt und was das Netzwerk berührt, geprüft am 18. November 2026.',
          '[Seite für Agenten](https://useminutes.app/for-agents) — MCP-Einrichtung und unterstützte Clients, geprüft am 18. November 2026.',
          '[GitHub-Repository](https://github.com/silverstein/minutes) — Lizenz, Anlegedatum und letzter Commit, geprüft am 18. November 2026.',
          '[README](https://github.com/silverstein/minutes#readme) — Funktionen, Installation und Datenschutz-Zusammenfassung, geprüft am 18. November 2026.',
          '[Installationsanleitung](https://github.com/silverstein/minutes/blob/main/docs/install.md) — Plattformpakete und Anforderungen, geprüft am 18. November 2026.',
          '[GitHub-Releases](https://github.com/silverstein/minutes/releases) — Release-Daten, Pakete und die Hinweise zu 0.34.0, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale Sprach- und Audio-Tools im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — Text-to-Speech, Speech-to-Text und Sprach-Agenten nebeneinander.',
          '[Anarlog-Rezension](/de/power-local-llm/anarlog-review) — ein quelloffenes Meeting-Notizbuch ohne Bot.',
          '[Meetily-Rezension](/de/power-local-llm/meetily-review) — ein quelloffener Meeting-Notizdienst für Mac und Windows.',
          '[Screenpipe-Rezension](/de/power-local-llm/screenpipe-review) — eine Gedächtnisschicht aus Bildschirm- und Audioaufnahme.',
          '[Amical-Rezension](/de/power-local-llm/amical-review) — kostenloses Open-Source-Diktat für Mac und Windows.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/minutes-review-hero-fr.webp',
    title: 'Test de Minutes : mémoire open source et gratuite pour réunions, mémos vocaux et dictée destinée aux agents IA',
    seoTitle: 'Test de Minutes : mémoire gratuite des conversations',
    intro:
      'Minutes 0.34.0 est une application gratuite sous licence MIT qui enregistre et transcrit réunions, mémos vocaux et dictées, puis conserve chacun dans un fichier Markdown. D\'après son README, l\'enregistrement, la transcription et le stockage se font sur votre propre ordinateur, et Claude Code, Codex, Cursor ou tout autre client MCP peut parcourir ces fichiers et indiquer le fichier d\'où vient une réponse. Ce test s\'appuie sur le site officiel et sur le dépôt GitHub, avec son guide d\'installation et ses notes de version, consultés le 18 novembre 2026. PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'Minutes est une application MIT gratuite qui enregistre réunions, mémos vocaux et dictées en fichiers Markdown, interrogeables par les clients MCP. Ce qui est confirmé.',
    twitterDescription:
      'Minutes : application open source gratuite qui enregistre et transcrit réunions, mémos vocaux et dictées en fichiers Markdown pour Claude, Codex et d\'autres clients MCP. Ce qui est confirmé.',
    audience:
      'Personnes qui enregistrent des réunions, des mémos vocaux ou des dictées et veulent qu\'un assistant comme Claude Code, Codex ou Cursor les parcoure, utilisateurs qui préfèrent de simples fichiers Markdown à un outil de notes hébergé, et développeurs qui cherchent une source locale de contexte de réunion',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Test de Minutes',
    targetKeywords: [
      'test de Minutes',
      'notes de réunion locales avec MCP',
      'transcription de réunions open source Mac',
      'application de dictée qui enregistre en Markdown',
      'mémoire d\'agent IA issue des réunions',
      'alternative open source à Granola',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Minutes est une application gratuite et open source (MIT) qui enregistre et transcrit réunions, mémos vocaux et dictées, puis les sauvegarde chacun dans un fichier Markdown que Claude, Codex, Cursor ou un autre client MCP peut parcourir.** Selon l\'éditeur, l\'enregistrement, la transcription et le stockage se font sur votre ordinateur. L\'application de bureau s\'installe via un DMG sur les Mac Apple Silicon ou un fichier d\'installation sous Windows, et Linux dispose d\'une version en ligne de commande. PromptQuorum ne l\'a pas testée, et aucune adresse d\'entreprise, mention légale ni page de conditions n\'a été trouvée.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que Minutes et à qui s\'adresse-t-il ?',
        answer:
          'Minutes est une application de mémoire des conversations développée en ouvert sur GitHub. Elle convient à ceux qui veulent des enregistrements, transcriptions, décisions et actions sous forme de simples fichiers Markdown que leur propre assistant IA peut parcourir, avec une transcription sur leur ordinateur, selon la description de l\'éditeur.',
        bullets: [
          'Gratuite et sous licence MIT ; application de bureau pour Mac Apple Silicon et Windows, version en ligne de commande pour Linux ; quatre versions sont parues entre le 9 et le 17 novembre 2026.',
          'L\'enregistrement couvre réunions et appels, mémos vocaux importés et dictée ; chaque conversation devient un fichier Markdown avec transcription, décisions et actions.',
          'La transcription et l\'identification des locuteurs se font sur votre ordinateur, selon l\'éditeur ; les résumés sont facultatifs et viennent d\'un assistant de votre choix, comme Claude avec votre abonnement existant, ou d\'un modèle local.',
          'Un serveur MCP permet à Claude Code, Codex, Cursor, Gemini CLI, OpenCode et à d\'autres clients MCP de parcourir les fichiers et d\'indiquer le fichier source d\'une réponse.',
          'Dépôt créé en mars 2026 ; la version 0.34.0 est sortie le 17 novembre 2026.',
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
      { label: 'À qui il convient', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Pour aller plus loin', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Selon l\'éditeur, Minutes est une application gratuite et open source qui enregistre et transcrit réunions, mémos vocaux et dictées sur votre ordinateur et les sauvegarde en fichiers Markdown que Claude, Codex et d\'autres clients MCP peuvent parcourir.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez un dossier de simples fichiers texte qui se remplit à partir de vos conversations : vous enregistrez ou dictez, Minutes transcrit, et chaque conversation devient un fichier avec transcription, décisions et actions. Votre assistant IA lit ce dossier quand vous posez une question et indique le fichier à l\'origine de la réponse.',
          },
        ],
        items: [
          'Installez l\'application de bureau depuis la page des versions GitHub ou avec Homebrew : un DMG pour les Mac Apple Silicon et un fichier d\'installation pour Windows ; Linux dispose d\'un binaire en ligne de commande prêt à l\'emploi.',
          'L\'enregistrement, la transcription, l\'identification des locuteurs et le stockage se font sur votre ordinateur, selon l\'éditeur ; seul le contexte que vous autorisez part vers un assistant ou un outil de résumé dans le cloud.',
          'Connectez un assistant IA via le serveur MCP, que le README lance avec une commande npx, et interrogez-le sur vos conversations enregistrées.',
          'Les résumés sont facultatifs ; si vous connectez un assistant dans le cloud, le contexte de transcription que vous autorisez lui est envoyé selon les conditions de ce fournisseur.',
          'PromptQuorum n\'a pas testé l\'application : la précision de la transcription, l\'identification des locuteurs et la qualité des réponses ne sont donc pas vérifiées.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Enregistrer d\'autres personnes peut exiger leur consentement, selon l\'endroit où vous et elles vous trouvez. Le README cite des rappels de consentement et des marqueurs de provenance comme aides, et la page de sécurité de l\'éditeur indique que le traitement local n\'est pas une certification de conformité ; vérifiez les règles qui vous concernent avant d\'enregistrer un appel. Ceci n\'est pas un conseil juridique.',
          },
          {
            type: 'note',
            text: 'La page de confidentialité de l\'éditeur, datée du 23 mars 2026, indique l\'absence de télémétrie, de rapports de plantage et de compte, tandis que sa page de sécurité précise que l\'installation et les mises à jour peuvent télécharger des modèles et des logiciels. PromptQuorum n\'a pas examiné le trafic réseau et ne peut confirmer aucune des deux affirmations au-delà de ce qu\'écrit l\'éditeur.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Minutes est une application de mémoire des conversations sous licence MIT qui enregistre et transcrit réunions, mémos vocaux et dictées et les stocke chacun dans un fichier Markdown, disponible pour macOS, Windows et Linux.**',
          'Elle est développée en ouvert sur [github.com/silverstein/minutes](https://github.com/silverstein/minutes) et décrite par son dépôt comme une alternative locale aux outils de notes hébergés tels que Granola et Otter, que Claude Code, Codex, Cursor et tout client MCP peuvent interroger. Le dépôt a été créé en mars 2026 ; la version 0.34.0 est parue le 17 novembre 2026, après les versions 0.33.0 à 0.33.2 entre le 9 et le 12 novembre, et le dernier commit sur la branche principale date lui aussi du 17 novembre 2026 : le développement est actif et aucun avertissement de projet abandonné ne s\'applique. Le README nomme Mat Silverstein, fondateur de X1 Wealth, comme auteur ; PromptQuorum n\'a trouvé ni adresse d\'entreprise, ni mentions légales, ni indication du droit applicable, et ne peut donc pas dire dans quel pays le projet est basé.',
          'D\'après le README et le site, Minutes enregistre chaque conversation dans un fichier Markdown avec un en-tête structuré, dans un dossier qui vous appartient. Il cite une application de bureau avec capture depuis la barre de menus, dictée et un panneau Recall, un outil en ligne de commande, un serveur MCP, un plugin Claude Code et un SDK TypeScript. Le site montre des réponses d\'assistants connectés qui indiquent le fichier dont elles proviennent.',
          'PromptQuorum n\'a pas exécuté l\'application et n\'a vérifié ni la précision de la transcription, ni l\'identification des locuteurs, ni la qualité de la dictée, ni la qualité des réponses des assistants connectés.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Vous installez l\'application de bureau Minutes depuis la page des versions GitHub ou, sur Mac, avec Homebrew ; Windows dispose d\'un fichier d\'installation et Linux d\'un binaire en ligne de commande.**',
          'La version v0.34.0 propose un DMG pour les Mac Apple Silicon, un EXE d\'installation et une version portable pour Windows, un binaire Linux en ligne de commande et une extension pour Claude Desktop. Le README décrit aussi des installations via Homebrew et Cargo, et le guide d\'installation précise que le cask Homebrew et le flux de mises à jour suivent la version Apple Silicon, tandis que les Mac Intel compilent depuis les sources.',
        ],
        columns: ['Plateforme', 'Paquet'],
        rows: [
          { 'Plateforme': 'macOS (Apple Silicon)', 'Paquet': 'DMG ou cask Homebrew' },
          { 'Plateforme': 'macOS (Intel)', 'Paquet': 'Compiler depuis les sources' },
          { 'Plateforme': 'Windows (x64)', 'Paquet': 'EXE d\'installation' },
          { 'Plateforme': 'Linux (x64)', 'Paquet': 'Binaire CLI, pas d\'app de bureau' },
          { 'Plateforme': 'Claude Desktop', 'Paquet': 'Extension MCPB' },
          { 'Plateforme': '[Sources](https://github.com/silverstein/minutes)', 'Paquet': 'cargo install minutes-cli' },
        ],
        note: 'Téléchargez depuis la [page des versions GitHub](https://github.com/silverstein/minutes/releases/latest). PromptQuorum n\'a pas exécuté les installateurs ; le guide d\'installation qualifie le cask Mac et le flux de mises à jour de notariés, et PromptQuorum n\'a pas vérifié si l\'installateur Windows est signé. Les pages du site consacrées aux [conditions](https://useminutes.app/terms), à la [présentation](https://useminutes.app/about), aux [mentions légales](https://useminutes.app/imprint) et au [contact](https://useminutes.app/contact) ont renvoyé « 404 » le 18 novembre 2026.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**Minutes demande un Mac, un PC Windows ou un ordinateur Linux récent ; le README et le guide d\'installation ne publient aucun minimum de mémoire ni de GPU.**',
          'La liste provient du guide d\'installation et du README. Les modèles vocaux sont téléchargés lors de l\'installation, et le modèle choisi change la charge pour votre ordinateur. PromptQuorum n\'a mesuré ni l\'utilisation de la mémoire, ni la vitesse, ni l\'espace disque.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'macOS', 'Valeur indiquée': 'DMG Apple Silicon ; macOS 15+ cité' },
          { 'Élément': 'Windows', 'Valeur indiquée': 'x64 ; EXE d\'installation' },
          { 'Élément': 'Linux', 'Valeur indiquée': 'CLI x64 ; glibc 2.39+' },
          { 'Élément': 'Serveur MCP', 'Valeur indiquée': 'Node.js 22 recommandé' },
          { 'Élément': 'Modèles vocaux', 'Valeur indiquée': 'Whisper ; Parakeet sur Apple Silicon' },
          { 'Élément': 'Mémoire et GPU', 'Valeur indiquée': 'Non publié' },
        ],
        note: 'Le binaire Linux prêt à l\'emploi demande glibc 2.39 ou plus récent ainsi que les bibliothèques ALSA et PipeWire ; le guide d\'installation cite Ubuntu 24.04 comme système validé et précise que Debian 12 doit compiler depuis les sources. macOS 15 est la version que le guide d\'installation cite pour l\'application de bureau.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Minutes est d\'abord un enregistreur et un transcripteur qui stocke les conversations en Markdown ; Recall, la dictée et l\'accès pour les agents s\'y ajoutent.** Tous les points ci-dessous sont des affirmations de l\'éditeur tirées du README, du site et du guide d\'installation.',
        ],
        items: [
          'Capture : enregistrer réunions et appels via le micro et le son du système, importer des mémos vocaux (par exemple depuis un téléphone via un dossier synchronisé) ou dicter en maintenant une touche.',
          'Transcription : s\'exécute sur votre ordinateur avec whisper.cpp ; l\'application Mac signée embarque aussi un plugin vocal Parakeet, et l\'identification des locuteurs repose sur des modèles de diarisation locaux.',
          'Sortie : chaque conversation devient un fichier Markdown avec un en-tête YAML indiquant titre, date, durée, décisions et actions, utilisable avec Obsidian, Logseq, grep et tout outil Markdown.',
          'Dictée : maintenez une touche et parlez ; sur Mac, le texte est saisi au curseur, sous Windows et Linux il est copié dans le presse-papiers, et chaque dictée est aussi enregistrée en fichier Markdown. Les autocorrections et les commandes vocales sont gérées par des règles sur votre appareil, selon le site.',
          'Recall : un panneau de l\'application de bureau où vous posez des questions sur vos enregistrements ; les notes de la version 0.34.0 ajoutent jusqu\'à quatre onglets de conversation distincts.',
          'Agents : un serveur MCP, un outil en ligne de commande, un SDK TypeScript et un plugin Claude Code permettent à Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi et à d\'autres clients de parcourir réunions, mémos et dictées et de suivre une transcription en direct.',
          'Consentement et confidentialité : le README cite des rappels de consentement, une reconnaissance et des marqueurs de provenance, et indique que les réunions sensibles sont enregistrées sans audio et restreintes par défaut.',
          'Démo : une commande d\'exemple ajoute des réunions fictives pour essayer la connexion avec un agent sans microphone.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Selon l\'éditeur, l\'enregistrement, la transcription, l\'identification des locuteurs et le stockage se font sur votre ordinateur, et le texte ne le quitte que si vous envoyez un contexte autorisé à un assistant ou un outil de résumé dans le cloud ; PromptQuorum n\'a pas examiné le trafic réseau et ne peut pas le confirmer.**',
          'La page de confidentialité, datée du 23 mars 2026, indique que Minutes n\'a ni analyse d\'usage, ni télémétrie, ni rapports de plantage, ni compte, et n\'exploite aucun serveur propre. La page de sécurité précise que l\'installation et les mises à jour peuvent télécharger des modèles et des logiciels, et que le site compte les visites avec Cloudflare Web Analytics, séparément de l\'application de bureau. PromptQuorum n\'a pas vérifié le comportement du flux de mises à jour dans la version actuelle.',
          'Si vous connectez un assistant ou un outil de résumé dans le cloud, le contexte que vous autorisez lui est envoyé selon les conditions de ce fournisseur ; selon l\'éditeur, un modèle local, ou l\'absence de résumés, garde le flux sur votre appareil. Les fichiers copiés dans un dossier synchronisé suivent les réglages de ce service.',
          'D\'après la page de sécurité, les fichiers Markdown sont écrits avec des droits réservés au propriétaire, et le code est public sous licence MIT : le flux de données peut donc être audité. L\'éditeur précise que le traitement local n\'est pas une certification de conformité ; le consentement à l\'enregistrement et la conservation restent de votre responsabilité.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il convient',
        content: [
          '**Minutes convient à ceux qui veulent conserver réunions, mémos vocaux et dictées en Markdown simple, que leur propre assistant IA peut parcourir.**',
        ],
        items: [
          'Ceux qui travaillent déjà avec Claude Code, Codex, Cursor ou un autre client MCP et veulent qu\'il parcoure leurs conversations enregistrées.',
          'Les utilisateurs qui préfèrent des fichiers simples qu\'ils peuvent ouvrir, rechercher et sauvegarder à l\'espace de travail d\'un outil de notes hébergé.',
          'Les utilisateurs de Mac Apple Silicon et de Windows qui veulent une seule application gratuite pour la capture de réunions et la dictée.',
          'Les lecteurs qui préfèrent un projet dont le code et la licence sont publics.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**Minutes convient mal dans certaines situations, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : les utilisateurs de Mac Intel qui ne veulent pas compiler depuis les sources, puisque la version ne propose qu\'un DMG Apple Silicon.',
          'Ne convient pas : ceux qui ont besoin d\'une application de bureau Linux ; la version Linux est un binaire en ligne de commande.',
          'Non vérifié : la précision de la transcription, l\'identification des locuteurs, la qualité de la dictée, la vitesse et la qualité des réponses des assistants connectés. PromptQuorum n\'a pas exécuté l\'application.',
          'Non vérifié : les affirmations d\'absence de télémétrie et de requêtes réseau vers les serveurs de l\'éditeur, à côté du flux de mises à jour décrit dans le guide d\'installation ; PromptQuorum n\'a pas examiné le trafic réseau.',
          'Non vérifié : si l\'installateur Windows est signé, et la quantité de mémoire qu\'un modèle vocal donné demande.',
          'Non vérifié : les affirmations de l\'éditeur sur la gestion du consentement et le stockage restreint des réunions sensibles.',
          'Non vérifié : qui exploite le projet, dans quel pays il est basé et combien de personnes l\'utilisent. Aucune adresse d\'entreprise, mention légale ni page de conditions n\'a été trouvée, et PromptQuorum n\'a pas cherché d\'avis indépendants.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Minutes face aux alternatives',
        itemHeadings: true,
        content: [
          '**Minutes recoupe les outils de notes de réunion, les applications de dictée et les outils de mémoire d\'agent ; PromptQuorum ne l\'a pas comparé à eux en pratique.** Les outils ci-dessous figurent dans l\'annuaire et sont décrits d\'après leurs propres tests.',
        ],
        columns: ['Outil', 'Selon les sources'],
        rows: [
          { 'Outil': 'Minutes', 'Selon les sources': 'MIT ; Mac/Windows/Linux ; mémoire Markdown pour agents' },
          { 'Outil': '[Anarlog](/fr/power-local-llm/anarlog-review)', 'Selon les sources': 'MIT ; Mac/Windows/Linux ; bloc-notes de réunion sans robot' },
          { 'Outil': '[Meetily](/fr/power-local-llm/meetily-review)', 'Selon les sources': 'MIT ; Mac/Windows ; notes de réunion' },
          { 'Outil': '[Screenpipe](/fr/power-local-llm/screenpipe-review)', 'Selon les sources': 'Code consultable ; Mac/Windows/Linux ; mémoire écran et audio' },
          { 'Outil': '[Amical](/fr/power-local-llm/amical-review)', 'Selon les sources': 'MIT ; Mac/Windows ; dictée' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Faut-il un compte pour utiliser Minutes ?',
            a: 'Aucun compte n\'est nécessaire pour enregistrer et stocker des conversations, selon la page de sécurité de l\'éditeur. Un assistant cloud que vous connectez a sa propre connexion ou sa propre clé ; le site décrit par exemple Claude rédigeant des résumés avec un abonnement Claude existant.',
          },
          {
            q: 'Quels assistants IA peuvent parcourir mes enregistrements ?',
            a: 'Selon le README et le site : Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi, Claude Desktop et Mistral Vibe via le serveur MCP, ainsi que tout autre client MCP. PromptQuorum n\'a pas testé ces connexions.',
          },
          {
            q: 'La dictée fonctionne-t-elle sous Windows et Linux ?',
            a: 'Selon le site, la dictée est saisie au curseur sur Mac et copiée dans le presse-papiers sous Windows et Linux. La version propose un installateur de bureau Windows ; sous Linux, la version prête à l\'emploi est l\'outil en ligne de commande.',
          },
          {
            q: 'Dois-je prévenir les gens que je les enregistre ?',
            a: 'Cela dépend de l\'endroit où vous et les autres participants vous trouvez, et de nombreuses juridictions exigent un consentement pour enregistrer un appel. Le README cite des rappels de consentement et des marqueurs de provenance comme aides, et l\'éditeur indique que le traitement local n\'est pas une certification de conformité. Vérifiez les règles qui vous concernent ; ceci n\'est pas un conseil juridique.',
          },
          {
            q: 'Fonctionne-t-il hors ligne ?',
            a: 'Selon l\'éditeur, l\'enregistrement, la transcription et le stockage se font sur votre ordinateur : enregistrer et transcrire ne demandent donc aucun service cloud. L\'installation télécharge des modèles vocaux, les mises à jour téléchargent des logiciels, et un assistant ou un outil de résumé dans le cloud demande une connexion.',
          },
          {
            q: 'À quelle fréquence Minutes est-il mis à jour ?',
            a: 'GitHub liste la version 0.33.0 du 9 novembre 2026, la 0.33.1 du 11 novembre, la 0.33.2 du 12 novembre et la 0.34.0 du 17 novembre, avec des commits sur la branche principale jusqu\'au 17 novembre 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Minutes vaut le coup d\'œil si vous voulez conserver réunions, mémos vocaux et dictées en Markdown simple que votre propre assistant IA peut parcourir, et si vous utilisez un Mac Apple Silicon ou Windows.**',
          'Sur le papier, il couvre beaucoup, et le développement est actif : quatre versions entre le 9 et le 17 novembre 2026 et un commit le 17 novembre 2026. Selon l\'éditeur, la transcription et le stockage restent sur votre ordinateur, et le site montre des réponses d\'assistants connectés qui indiquent le fichier dont elles proviennent.',
          'Les compromis sont réels : le dépôt n\'a que quelques mois, aucune adresse d\'entreprise, mention légale ni page de conditions n\'a été trouvée, les Mac Intel n\'ont pas d\'application de bureau prête à l\'emploi, Linux est réservé à la ligne de commande, et PromptQuorum n\'a rien testé. Essayez-le sur quelques enregistrements, avec l\'accord de tous, avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Minutes](https://useminutes.app) — fonctionnalités, plateformes et liens, consulté le 18 novembre 2026.',
          '[Page de confidentialité](https://useminutes.app/privacy) — les déclarations de l\'éditeur sur les données, datées du 23 mars 2026, consultée le 18 novembre 2026.',
          '[Page de sécurité](https://useminutes.app/security) — ce qui reste sur l\'appareil et ce qui touche le réseau, consultée le 18 novembre 2026.',
          '[Page pour les agents](https://useminutes.app/for-agents) — configuration MCP et clients pris en charge, consultée le 18 novembre 2026.',
          '[Dépôt GitHub](https://github.com/silverstein/minutes) — licence, date de création et dernier commit, consulté le 18 novembre 2026.',
          '[README](https://github.com/silverstein/minutes#readme) — fonctionnalités, installation et résumé de confidentialité, consulté le 18 novembre 2026.',
          '[Guide d\'installation](https://github.com/silverstein/minutes/blob/main/docs/install.md) — paquets par plateforme et configuration requise, consulté le 18 novembre 2026.',
          '[Versions GitHub](https://github.com/silverstein/minutes/releases) — dates de version, paquets et notes de la 0.34.0, consultées le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Outils vocaux et audio locaux comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — synthèse vocale, reconnaissance vocale et agents vocaux côte à côte.',
          '[Test d\'Anarlog](/fr/power-local-llm/anarlog-review) — un bloc-notes de réunion open source sans robot.',
          '[Test de Meetily](/fr/power-local-llm/meetily-review) — un outil de notes de réunion open source pour Mac et Windows.',
          '[Test de Screenpipe](/fr/power-local-llm/screenpipe-review) — une couche de mémoire issue de la capture d\'écran et d\'audio.',
          '[Test d\'Amical](/fr/power-local-llm/amical-review) — dictée open source gratuite pour Mac et Windows.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/minutes-review-hero-es.webp',
    title: 'Reseña de Minutes: memoria gratuita y de código abierto para reuniones, notas de voz y dictado destinada a agentes de IA',
    seoTitle: 'Reseña de Minutes: memoria gratuita de conversaciones',
    intro:
      'Minutes 0.34.0 es una aplicación gratuita con licencia MIT que graba y transcribe reuniones, notas de voz y dictados, y guarda cada uno como un archivo Markdown. Según su README, la grabación, la transcripción y el almacenamiento se ejecutan en tu propio equipo, y Claude Code, Codex, Cursor o cualquier otro cliente MCP puede buscar en esos archivos e indicar el archivo del que procede una respuesta. Esta reseña se basa en el sitio web oficial y en el repositorio de GitHub, con su guía de instalación y sus notas de versión, consultados el 18 de noviembre de 2026. PromptQuorum no ha probado la aplicación en la práctica.',
    metaDescription:
      'Minutes es una app MIT gratuita que graba reuniones, notas de voz y dictados como archivos Markdown en los que los clientes MCP pueden buscar. Lo que está confirmado.',
    twitterDescription:
      'Minutes: app gratuita de código abierto que graba y transcribe reuniones, notas de voz y dictados como archivos Markdown para Claude, Codex y otros clientes MCP. Lo que está confirmado.',
    audience:
      'Personas que graban reuniones, notas de voz o dictados y quieren que un asistente como Claude Code, Codex o Cursor busque en ellos, usuarios que prefieren archivos Markdown simples a un servicio de notas alojado y desarrolladores que buscan una fuente local de contexto de reuniones',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Reseña de Minutes',
    targetKeywords: [
      'reseña de Minutes',
      'notas de reuniones locales con MCP',
      'transcripción de reuniones de código abierto Mac',
      'app de dictado que guarda en Markdown',
      'memoria de agentes de IA a partir de reuniones',
      'alternativa de código abierto a Granola',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Minutes es una app gratuita y de código abierto (MIT) que graba y transcribe reuniones, notas de voz y dictados y guarda cada uno como un archivo Markdown en el que Claude, Codex, Cursor u otro cliente MCP puede buscar.** Según el desarrollador, la grabación, la transcripción y el almacenamiento se ejecutan en tu equipo. La aplicación de escritorio se instala con un DMG en los Mac con Apple Silicon o con un archivo de instalación en Windows, y Linux tiene una versión de línea de comandos. PromptQuorum no la ha probado, y no se encontró dirección de empresa, aviso legal ni página de condiciones.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Minutes y para quién es?',
        answer:
          'Minutes es una app de memoria de conversaciones desarrollada de forma abierta en GitHub. Sirve a quienes quieren grabaciones, transcripciones, decisiones y tareas como archivos Markdown simples en los que su propio asistente de IA pueda buscar, con la transcripción en su propio equipo, según lo describe el desarrollador.',
        bullets: [
          'Gratuita y con licencia MIT; aplicación de escritorio para Mac con Apple Silicon y Windows, versión de línea de comandos para Linux; entre el 9 y el 17 de noviembre de 2026 salieron cuatro versiones.',
          'La captura abarca reuniones y llamadas, notas de voz que importas y dictado; cada conversación acaba como un archivo Markdown con transcripción, decisiones y tareas.',
          'La transcripción y las etiquetas de hablante se ejecutan en tu equipo, según el desarrollador; los resúmenes son opcionales y vienen de un asistente que elijas, como Claude con tu suscripción actual, o de un modelo local.',
          'Un servidor MCP permite que Claude Code, Codex, Cursor, Gemini CLI, OpenCode y otros clientes MCP busquen en los archivos e indiquen el archivo fuente de una respuesta.',
          'Repositorio creado en marzo de 2026; la versión 0.34.0 salió el 17 de noviembre de 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen general', anchor: 'overview' },
      { label: 'Cómo conseguirla', anchor: 'get-it' },
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
            text: 'Según el desarrollador, Minutes es una app gratuita y de código abierto que graba y transcribe reuniones, notas de voz y dictados en tu equipo y los guarda como archivos Markdown en los que Claude, Codex y otros clientes MCP pueden buscar.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una carpeta de archivos de texto simples que se llena con tus conversaciones: grabas o dictas, Minutes transcribe, y cada conversación se convierte en un archivo con transcripción, decisiones y tareas. Tu asistente de IA lee esa carpeta cuando le haces una pregunta y señala el archivo que hay detrás de la respuesta.',
          },
        ],
        items: [
          'Instala la aplicación de escritorio desde la página de versiones de GitHub o con Homebrew: un DMG para Mac con Apple Silicon y un archivo de instalación para Windows; Linux tiene un binario de línea de comandos ya compilado.',
          'La grabación, la transcripción, las etiquetas de hablante y el almacenamiento se ejecutan en tu equipo, según el desarrollador; solo el contexto que autorizas va a un asistente o a un resumidor en la nube.',
          'Conecta un asistente de IA mediante el servidor MCP, que el README inicia con un comando npx, y pregúntale por tus conversaciones grabadas.',
          'Los resúmenes son opcionales; si conectas un asistente en la nube, el contexto de la transcripción que autorizas le llega según las condiciones de ese proveedor.',
          'PromptQuorum no ha probado la aplicación, así que la precisión de la transcripción, las etiquetas de hablante y la calidad de las respuestas no están verificadas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Grabar a otras personas puede requerir su consentimiento, según dónde estén ellas y tú. El README cita recordatorios de consentimiento y marcas de procedencia como ayudas, y la página de seguridad del desarrollador dice que el procesamiento local no es una certificación de cumplimiento; revisa las normas que te afectan antes de grabar una llamada. Esto no es asesoramiento jurídico.',
          },
          {
            type: 'note',
            text: 'La página de privacidad del desarrollador, fechada el 23 de marzo de 2026, dice que no hay telemetría, ni informes de fallos, ni cuenta, mientras que su página de seguridad añade que la configuración y las actualizaciones pueden descargar modelos y software. PromptQuorum no inspeccionó el tráfico de red y no puede confirmar ninguna de las dos afirmaciones más allá de lo que escribe el desarrollador.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen general',
        content: [
          '**Minutes es una app de memoria de conversaciones con licencia MIT que graba y transcribe reuniones, notas de voz y dictados y guarda cada uno como un archivo Markdown, disponible para macOS, Windows y Linux.**',
          'Se desarrolla de forma abierta en [github.com/silverstein/minutes](https://github.com/silverstein/minutes) y su repositorio la describe como una alternativa local a servicios de notas alojados como Granola y Otter, que Claude Code, Codex, Cursor y cualquier cliente MCP pueden consultar. El repositorio se creó en marzo de 2026; la versión 0.34.0 apareció el 17 de noviembre de 2026, tras las versiones 0.33.0 a 0.33.2 entre el 9 y el 12 de noviembre, y el último commit de la rama principal es también del 17 de noviembre de 2026, de modo que el desarrollo está activo y no se aplica ninguna advertencia de proyecto abandonado. El README nombra a Mat Silverstein, fundador de X1 Wealth, como autor; PromptQuorum no encontró dirección de empresa, aviso legal ni indicación de la ley aplicable, por lo que no puede decir en qué país tiene su sede el proyecto.',
          'Según el README y el sitio web, Minutes guarda cada conversación como un archivo Markdown con metadatos estructurados en una carpeta que es tuya. Menciona una aplicación de escritorio con captura desde la barra de menús, dictado y un panel Recall, una herramienta de línea de comandos, un servidor MCP, un plugin de Claude Code y un SDK de TypeScript. El sitio muestra respuestas de asistentes conectados que indican el archivo del que proceden.',
          'PromptQuorum no ha ejecutado la aplicación y no ha comprobado la precisión de la transcripción, las etiquetas de hablante, la calidad del dictado ni la calidad de las respuestas de los asistentes conectados.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Instalas la aplicación de escritorio de Minutes desde la página de versiones de GitHub o, en Mac, con Homebrew; Windows tiene un archivo de instalación y Linux un binario de línea de comandos.**',
          'La versión v0.34.0 incluye un DMG para Mac con Apple Silicon, un EXE de instalación y una versión portátil para Windows, un binario de línea de comandos para Linux y una extensión para Claude Desktop. El README también documenta instalaciones con Homebrew y Cargo, y la guía de instalación indica que el cask de Homebrew y el canal de actualizaciones siguen la versión para Apple Silicon, mientras que los Mac con Intel compilan desde el código fuente.',
        ],
        columns: ['Plataforma', 'Paquete'],
        rows: [
          { 'Plataforma': 'macOS (Apple Silicon)', 'Paquete': 'DMG o cask de Homebrew' },
          { 'Plataforma': 'macOS (Intel)', 'Paquete': 'Compilar desde el código fuente' },
          { 'Plataforma': 'Windows (x64)', 'Paquete': 'EXE de instalación' },
          { 'Plataforma': 'Linux (x64)', 'Paquete': 'Binario CLI, sin app de escritorio' },
          { 'Plataforma': 'Claude Desktop', 'Paquete': 'Extensión MCPB' },
          { 'Plataforma': '[Código fuente](https://github.com/silverstein/minutes)', 'Paquete': 'cargo install minutes-cli' },
        ],
        note: 'Descarga desde la [página de versiones de GitHub](https://github.com/silverstein/minutes/releases/latest). PromptQuorum no ejecutó los instaladores; la guía de instalación califica de notarizados el cask de Mac y el canal de actualizaciones, y PromptQuorum no comprobó si el instalador de Windows está firmado. Las páginas del sitio sobre [condiciones](https://useminutes.app/terms), [acerca de](https://useminutes.app/about), [aviso legal](https://useminutes.app/imprint) y [contacto](https://useminutes.app/contact) devolvieron «404» el 18 de noviembre de 2026.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Minutes necesita un Mac, un PC con Windows o un equipo Linux reciente; el README y la guía de instalación no publican un mínimo de memoria ni de GPU.**',
          'La lista procede de la guía de instalación y del README. Los modelos de voz se descargan durante la configuración, y el modelo que elijas cambia la carga que soporta tu equipo. PromptQuorum no midió el uso de memoria, la velocidad ni el espacio en disco.',
        ],
        columns: ['Elemento', 'Dato indicado'],
        rows: [
          { 'Elemento': 'macOS', 'Dato indicado': 'DMG para Apple Silicon; macOS 15+ citado' },
          { 'Elemento': 'Windows', 'Dato indicado': 'x64; EXE de instalación' },
          { 'Elemento': 'Linux', 'Dato indicado': 'CLI x64; glibc 2.39+' },
          { 'Elemento': 'Servidor MCP', 'Dato indicado': 'Node.js 22 recomendado' },
          { 'Elemento': 'Modelos de voz', 'Dato indicado': 'Whisper; Parakeet en Apple Silicon' },
          { 'Elemento': 'Memoria y GPU', 'Dato indicado': 'No publicado' },
        ],
        note: 'El binario de Linux ya compilado necesita glibc 2.39 o posterior y las bibliotecas ALSA y PipeWire; la guía de instalación cita Ubuntu 24.04 como sistema validado e indica que Debian 12 debe compilar desde el código fuente. macOS 15 es la versión que la guía de instalación cita para la aplicación de escritorio.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Minutes es ante todo un grabador y transcriptor que guarda las conversaciones como Markdown; Recall, el dictado y el acceso para agentes lo complementan.** Todos los puntos siguientes son afirmaciones del desarrollador tomadas del README, el sitio web y la guía de instalación.',
        ],
        items: [
          'Captura: graba reuniones y llamadas desde el micrófono y el audio del sistema, importa notas de voz (por ejemplo desde un teléfono mediante una carpeta sincronizada) o dicta manteniendo pulsada una tecla.',
          'Transcripción: se ejecuta en tu equipo con whisper.cpp; la aplicación firmada para Mac incluye además un plugin de voz Parakeet, y las etiquetas de hablante salen de modelos de diarización locales.',
          'Salida: cada conversación se convierte en un archivo Markdown con cabecera YAML que lista título, fecha, duración, decisiones y tareas, y funciona con Obsidian, Logseq, grep y cualquier herramienta de Markdown.',
          'Dictado: mantén una tecla y habla; en Mac el texto se escribe en el cursor, en Windows y Linux va al portapapeles, y cada dictado se guarda también como archivo Markdown. Las autocorrecciones y los comandos de voz los gestionan reglas en tu dispositivo, según el sitio web.',
          'Recall: un panel de la aplicación de escritorio donde haces preguntas sobre tus grabaciones; las notas de la versión 0.34.0 añaden hasta cuatro pestañas de conversación separadas.',
          'Agentes: un servidor MCP, una herramienta de línea de comandos, un SDK de TypeScript y un plugin de Claude Code permiten que Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi y otros clientes busquen en reuniones, notas y dictados y sigan una transcripción en directo.',
          'Consentimiento y privacidad: el README cita recordatorios de consentimiento, confirmación y marcas de procedencia, y dice que las reuniones sensibles se guardan sin audio y con acceso restringido por defecto.',
          'Demo: un comando de ejemplo añade reuniones de muestra para probar la conexión con un agente sin micrófono.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Según el desarrollador, la captura, la transcripción, las etiquetas de hablante y el almacenamiento se ejecutan en tu equipo, y el texto solo sale de él cuando envías contexto autorizado a un asistente o resumidor en la nube; PromptQuorum no inspeccionó el tráfico de red y no puede confirmarlo.**',
          'La página de privacidad, fechada el 23 de marzo de 2026, dice que Minutes no tiene analítica, ni telemetría, ni informes de fallos, ni cuenta, y que no opera ningún servidor propio. La página de seguridad añade que la configuración y las actualizaciones pueden descargar modelos y software, y que el sitio web cuenta las visitas con Cloudflare Web Analytics, aparte de la aplicación de escritorio. PromptQuorum no comprobó cómo se comporta el canal de actualizaciones en la versión actual.',
          'Si conectas un asistente o resumidor en la nube, el contexto que autorizas va a ese proveedor según sus condiciones; según el desarrollador, un modelo local, o prescindir de los resúmenes, mantiene el flujo en tu dispositivo. Los archivos que copies a una carpeta sincronizada siguen los ajustes de ese servicio.',
          'Según la página de seguridad, los archivos Markdown se escriben con permisos solo para el propietario, y el código es público con licencia MIT, así que el flujo de datos se puede auditar. El desarrollador afirma que el procesamiento local no es una certificación de cumplimiento; el consentimiento para grabar y la conservación siguen siendo responsabilidad tuya.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Minutes encaja con quienes quieren guardar reuniones, notas de voz y dictados como Markdown simple en el que su propio asistente de IA pueda buscar.**',
        ],
        items: [
          'Quienes ya trabajan con Claude Code, Codex, Cursor u otro cliente MCP y quieren que busque en sus conversaciones grabadas.',
          'Usuarios que prefieren archivos simples que pueden abrir, buscar y respaldar frente al espacio de trabajo de un servicio de notas alojado.',
          'Usuarios de Mac con Apple Silicon y de Windows que quieren una sola app gratuita para capturar reuniones y dictar.',
          'Lectores que prefieren un proyecto cuyo código y licencia son públicos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Minutes no encaja en algunas situaciones, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: usuarios de Mac con Intel que no quieran compilar desde el código fuente, ya que la versión solo incluye un DMG para Apple Silicon.',
          'No encaja: quien necesite una aplicación de escritorio para Linux; la versión para Linux es un binario de línea de comandos.',
          'Sin verificar: la precisión de la transcripción, las etiquetas de hablante, la calidad del dictado, la velocidad y la calidad de las respuestas de los asistentes conectados. PromptQuorum no ha ejecutado la aplicación.',
          'Sin verificar: las afirmaciones de que no hay telemetría ni solicitudes de red a los servidores del desarrollador, junto al canal de actualizaciones que describe la guía de instalación; PromptQuorum no inspeccionó el tráfico de red.',
          'Sin verificar: si el instalador de Windows está firmado y cuánta memoria necesita un modelo de voz concreto.',
          'Sin verificar: las afirmaciones del desarrollador sobre la gestión del consentimiento y el almacenamiento restringido de reuniones sensibles.',
          'Sin verificar: quién dirige el proyecto, en qué país tiene su sede y cuánta gente lo usa. No se encontró dirección de empresa, aviso legal ni página de condiciones, y PromptQuorum no buscó reseñas independientes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Minutes frente a alternativas',
        itemHeadings: true,
        content: [
          '**Minutes coincide en parte con servicios de notas de reuniones, apps de dictado y herramientas de memoria de agentes; PromptQuorum no lo ha comparado con ellos en la práctica.** Las herramientas siguientes están en el directorio y se describen a partir de sus propias reseñas.',
        ],
        columns: ['Herramienta', 'Según las fuentes'],
        rows: [
          { 'Herramienta': 'Minutes', 'Según las fuentes': 'MIT; Mac/Windows/Linux; memoria en Markdown para agentes' },
          { 'Herramienta': '[Anarlog](/es/power-local-llm/anarlog-review)', 'Según las fuentes': 'MIT; Mac/Windows/Linux; bloc de reuniones sin bot' },
          { 'Herramienta': '[Meetily](/es/power-local-llm/meetily-review)', 'Según las fuentes': 'MIT; Mac/Windows; notas de reuniones' },
          { 'Herramienta': '[Screenpipe](/es/power-local-llm/screenpipe-review)', 'Según las fuentes': 'Código visible; Mac/Windows/Linux; memoria de pantalla y audio' },
          { 'Herramienta': '[Amical](/es/power-local-llm/amical-review)', 'Según las fuentes': 'MIT; Mac/Windows; dictado' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesito una cuenta para usar Minutes?',
            a: 'No hace falta una cuenta para grabar y guardar conversaciones, según la página de seguridad del desarrollador. Un asistente en la nube que conectes tiene su propio inicio de sesión o su propia clave; el sitio describe, por ejemplo, a Claude escribiendo resúmenes con una suscripción de Claude existente.',
          },
          {
            q: '¿Qué asistentes de IA pueden buscar en mis grabaciones?',
            a: 'Según el README y el sitio web: Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi, Claude Desktop y Mistral Vibe mediante el servidor MCP, además de cualquier otro cliente MCP. PromptQuorum no probó estas conexiones.',
          },
          {
            q: '¿Funciona el dictado en Windows y Linux?',
            a: 'Según el sitio web, el dictado se escribe en el cursor en Mac y se copia al portapapeles en Windows y Linux. La versión incluye un instalador de escritorio para Windows; en Linux, la versión ya compilada es la herramienta de línea de comandos.',
          },
          {
            q: '¿Tengo que avisar a las personas de que las estoy grabando?',
            a: 'Depende de dónde estéis tú y los demás participantes, y muchos lugares exigen consentimiento para grabar una llamada. El README cita recordatorios de consentimiento y marcas de procedencia como ayudas, y el desarrollador dice que el procesamiento local no es una certificación de cumplimiento. Revisa las normas que te afectan; esto no es asesoramiento jurídico.',
          },
          {
            q: '¿Funciona sin conexión?',
            a: 'Según el desarrollador, la grabación, la transcripción y el almacenamiento se ejecutan en tu equipo, así que grabar y transcribir no requieren un servicio en la nube. La configuración descarga modelos de voz, las actualizaciones descargan software, y un asistente o resumidor en la nube necesita conexión.',
          },
          {
            q: '¿Con qué frecuencia se actualiza Minutes?',
            a: 'GitHub lista la versión 0.33.0 del 9 de noviembre de 2026, la 0.33.1 del 11 de noviembre, la 0.33.2 del 12 de noviembre y la 0.34.0 del 17 de noviembre, con commits en la rama principal hasta el 17 de noviembre de 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Minutes merece una mirada si quieres guardar reuniones, notas de voz y dictados como Markdown simple en el que tu propio asistente de IA pueda buscar, y usas un Mac con Apple Silicon o Windows.**',
          'Sobre el papel cubre mucho, y el desarrollo está activo: cuatro versiones entre el 9 y el 17 de noviembre de 2026 y un commit el 17 de noviembre de 2026. Según el desarrollador, la transcripción y el almacenamiento se quedan en tu equipo, y el sitio muestra respuestas de asistentes conectados que indican el archivo del que proceden.',
          'Las contrapartidas son reales: el repositorio tiene solo unos meses, no se encontró dirección de empresa, aviso legal ni página de condiciones, los Mac con Intel no tienen aplicación de escritorio ya compilada, Linux es solo de línea de comandos, y PromptQuorum no ha probado nada. Pruébalo con algunas grabaciones, con el consentimiento de todos, antes de depender de él.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Minutes](https://useminutes.app) — funciones, plataformas y enlaces, consultado el 18 de noviembre de 2026.',
          '[Página de privacidad](https://useminutes.app/privacy) — las declaraciones del desarrollador sobre datos, fechadas el 23 de marzo de 2026, consultada el 18 de noviembre de 2026.',
          '[Página de seguridad](https://useminutes.app/security) — qué se queda en el dispositivo y qué toca la red, consultada el 18 de noviembre de 2026.',
          '[Página para agentes](https://useminutes.app/for-agents) — configuración de MCP y clientes compatibles, consultada el 18 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/silverstein/minutes) — licencia, fecha de creación y último commit, consultado el 18 de noviembre de 2026.',
          '[README](https://github.com/silverstein/minutes#readme) — funciones, instalación y resumen de privacidad, consultado el 18 de noviembre de 2026.',
          '[Guía de instalación](https://github.com/silverstein/minutes/blob/main/docs/install.md) — paquetes por plataforma y requisitos, consultada el 18 de noviembre de 2026.',
          '[Versiones de GitHub](https://github.com/silverstein/minutes/releases) — fechas de versión, paquetes y notas de la 0.34.0, consultadas el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Herramientas locales de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — síntesis de voz, reconocimiento de voz y agentes de voz lado a lado.',
          '[Reseña de Anarlog](/es/power-local-llm/anarlog-review) — un bloc de reuniones de código abierto sin bot.',
          '[Reseña de Meetily](/es/power-local-llm/meetily-review) — un servicio de notas de reuniones de código abierto para Mac y Windows.',
          '[Reseña de Screenpipe](/es/power-local-llm/screenpipe-review) — una capa de memoria creada a partir de la captura de pantalla y audio.',
          '[Reseña de Amical](/es/power-local-llm/amical-review) — dictado gratuito y de código abierto para Mac y Windows.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/minutes-review-hero-pt.webp',
    title: 'Análise do Minutes: memória gratuita e de código aberto para reuniões, memos de voz e ditado voltada a agentes de IA',
    seoTitle: 'Análise do Minutes: memória gratuita de conversas',
    intro:
      'O Minutes 0.34.0 é um aplicativo gratuito com licença MIT que grava e transcreve reuniões, memos de voz e ditados e guarda cada um como um arquivo Markdown. Segundo o README, a gravação, a transcrição e o armazenamento rodam no seu próprio computador, e o Claude Code, o Codex, o Cursor ou qualquer outro cliente MCP pode pesquisar esses arquivos e indicar o arquivo de onde veio uma resposta. Esta análise se baseia no site oficial e no repositório do GitHub, com o guia de instalação e as notas de versão, consultados em 18 de novembro de 2026. A PromptQuorum não testou o aplicativo na prática.',
    metaDescription:
      'O Minutes é um app MIT gratuito que grava reuniões, memos de voz e ditados como arquivos Markdown que clientes MCP podem pesquisar. O que está confirmado.',
    twitterDescription:
      'Minutes: app gratuito e de código aberto que grava e transcreve reuniões, memos de voz e ditados como arquivos Markdown para Claude, Codex e outros clientes MCP. O que está confirmado.',
    audience:
      'Pessoas que gravam reuniões, memos de voz ou ditados e querem que um assistente como Claude Code, Codex ou Cursor pesquise neles, usuários que preferem arquivos Markdown simples a um serviço de anotações hospedado e desenvolvedores que buscam uma fonte local de contexto de reuniões',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Análise do Minutes',
    targetKeywords: [
      'análise do Minutes',
      'anotações de reuniões locais com MCP',
      'transcrição de reuniões de código aberto Mac',
      'app de ditado que salva em Markdown',
      'memória de agentes de IA a partir de reuniões',
      'alternativa de código aberto ao Granola',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Minutes é um app gratuito e de código aberto (MIT) que grava e transcreve reuniões, memos de voz e ditados e salva cada um como um arquivo Markdown que o Claude, o Codex, o Cursor ou outro cliente MCP pode pesquisar.** Segundo o desenvolvedor, a gravação, a transcrição e o armazenamento rodam no seu computador. O aplicativo de desktop é instalado por um DMG nos Macs com Apple Silicon ou por um arquivo de instalação no Windows, e o Linux tem uma versão de linha de comando. A PromptQuorum não o testou, e não foi encontrado endereço de empresa, aviso legal nem página de termos.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Minutes e para quem ele serve?',
        answer:
          'O Minutes é um app de memória de conversas desenvolvido de forma aberta no GitHub. Serve para quem quer gravações, transcrições, decisões e tarefas como arquivos Markdown simples que o próprio assistente de IA possa pesquisar, com a transcrição no próprio computador, como o desenvolvedor descreve.',
        bullets: [
          'Gratuito e com licença MIT; aplicativo de desktop para Macs com Apple Silicon e Windows, versão de linha de comando para Linux; entre 9 e 17 de novembro de 2026 saíram quatro versões.',
          'A captura abrange reuniões e chamadas, memos de voz que você importa e ditado; cada conversa termina como um arquivo Markdown com transcrição, decisões e tarefas.',
          'A transcrição e os rótulos de falante rodam no seu computador, segundo o desenvolvedor; os resumos são opcionais e vêm de um assistente que você escolher, como o Claude com sua assinatura atual, ou de um modelo local.',
          'Um servidor MCP permite que Claude Code, Codex, Cursor, Gemini CLI, OpenCode e outros clientes MCP pesquisem os arquivos e indiquem o arquivo de origem de uma resposta.',
          'Repositório criado em março de 2026; a versão 0.34.0 saiu em 17 de novembro de 2026.',
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
            text: 'Segundo o desenvolvedor, o Minutes é um app gratuito e de código aberto que grava e transcreve reuniões, memos de voz e ditados no seu computador e os salva como arquivos Markdown que Claude, Codex e outros clientes MCP podem pesquisar.',
          },
          {
            type: 'plain-terms',
            text: 'Pense numa pasta de arquivos de texto simples que se enche a partir das suas conversas: você grava ou dita, o Minutes transcreve, e cada conversa vira um arquivo com transcrição, decisões e tarefas. Seu assistente de IA lê essa pasta quando você faz uma pergunta e aponta o arquivo por trás da resposta.',
          },
        ],
        items: [
          'Instale o aplicativo de desktop pela página de versões do GitHub ou com o Homebrew: um DMG para Macs com Apple Silicon e um arquivo de instalação para Windows; o Linux tem um binário de linha de comando pronto.',
          'Gravação, transcrição, rótulos de falante e armazenamento rodam no seu computador, segundo o desenvolvedor; só o contexto que você autoriza vai para um assistente ou resumidor na nuvem.',
          'Conecte um assistente de IA pelo servidor MCP, que o README inicia com um comando npx, e pergunte a ele sobre suas conversas gravadas.',
          'Os resumos são opcionais; se você conectar um assistente na nuvem, o contexto da transcrição que você autoriza vai para esse provedor, conforme os termos dele.',
          'A PromptQuorum não testou o aplicativo, então a precisão da transcrição, os rótulos de falante e a qualidade das respostas não foram verificados.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Gravar outras pessoas pode exigir o consentimento delas, dependendo de onde você e elas estão. O README cita lembretes de consentimento e marcadores de procedência como auxílios, e a página de segurança do desenvolvedor diz que o processamento local não é uma certificação de conformidade; verifique as regras que valem para você antes de gravar uma chamada. Isto não é aconselhamento jurídico.',
          },
          {
            type: 'note',
            text: 'A página de privacidade do desenvolvedor, de 23 de março de 2026, diz que não há telemetria, relatórios de falhas nem conta, enquanto a página de segurança acrescenta que a configuração e as atualizações podem baixar modelos e software. A PromptQuorum não inspecionou o tráfego de rede e não pode confirmar nenhuma das duas afirmações além do que o desenvolvedor escreve.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Minutes é um app de memória de conversas com licença MIT que grava e transcreve reuniões, memos de voz e ditados e armazena cada um como um arquivo Markdown, lançado para macOS, Windows e Linux.**',
          'Ele é desenvolvido de forma aberta em [github.com/silverstein/minutes](https://github.com/silverstein/minutes) e descrito pelo repositório como uma alternativa local a serviços de anotações hospedados como Granola e Otter, que o Claude Code, o Codex, o Cursor e qualquer cliente MCP podem consultar. O repositório foi criado em março de 2026; a versão 0.34.0 apareceu em 17 de novembro de 2026, depois das versões 0.33.0 a 0.33.2 entre 9 e 12 de novembro, e o último commit na branch principal também é de 17 de novembro de 2026, então o desenvolvimento está ativo e não se aplica aviso de projeto abandonado. O README cita Mat Silverstein, fundador da X1 Wealth, como autor; a PromptQuorum não encontrou endereço de empresa, aviso legal nem indicação da lei aplicável e, por isso, não pode dizer em que país o projeto está sediado.',
          'Segundo o README e o site, o Minutes salva cada conversa como um arquivo Markdown com metadados estruturados numa pasta que é sua. Ele lista um aplicativo de desktop com captura pela barra de menus, ditado e um painel Recall, uma ferramenta de linha de comando, um servidor MCP, um plugin do Claude Code e um SDK TypeScript. O site mostra respostas de assistentes conectados que indicam o arquivo de onde vieram.',
          'A PromptQuorum não executou o aplicativo e não verificou a precisão da transcrição, os rótulos de falante, a qualidade do ditado nem a qualidade das respostas dos assistentes conectados.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o aplicativo de desktop do Minutes pela página de versões do GitHub ou, no Mac, com o Homebrew; o Windows tem um arquivo de instalação, e o Linux, um binário de linha de comando.**',
          'A versão v0.34.0 lista um DMG para Macs com Apple Silicon, um EXE de instalação e uma versão portátil para Windows, um binário de linha de comando para Linux e uma extensão para o Claude Desktop. O README também documenta instalações com Homebrew e Cargo, e o guia de instalação diz que o cask do Homebrew e o canal de atualizações acompanham a versão para Apple Silicon, enquanto os Macs com Intel compilam a partir do código-fonte.',
        ],
        columns: ['Plataforma', 'Pacote'],
        rows: [
          { 'Plataforma': 'macOS (Apple Silicon)', 'Pacote': 'DMG ou cask do Homebrew' },
          { 'Plataforma': 'macOS (Intel)', 'Pacote': 'Compilar do código-fonte' },
          { 'Plataforma': 'Windows (x64)', 'Pacote': 'EXE de instalação' },
          { 'Plataforma': 'Linux (x64)', 'Pacote': 'Binário CLI, sem app de desktop' },
          { 'Plataforma': 'Claude Desktop', 'Pacote': 'Extensão MCPB' },
          { 'Plataforma': '[Código-fonte](https://github.com/silverstein/minutes)', 'Pacote': 'cargo install minutes-cli' },
        ],
        note: 'Baixe pela [página de versões do GitHub](https://github.com/silverstein/minutes/releases/latest). A PromptQuorum não executou os instaladores; o guia de instalação chama de notarizados o cask do Mac e o canal de atualizações, e a PromptQuorum não verificou se o instalador do Windows é assinado. As páginas do site sobre [termos](https://useminutes.app/terms), [sobre](https://useminutes.app/about), [aviso legal](https://useminutes.app/imprint) e [contato](https://useminutes.app/contact) retornaram "404" em 18 de novembro de 2026.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O Minutes precisa de um Mac, um PC com Windows ou um computador Linux recente; o README e o guia de instalação não publicam mínimo de memória nem de GPU.**',
          'A lista vem do guia de instalação e do README. Os modelos de voz são baixados durante a configuração, e o modelo escolhido muda a carga sobre o seu computador. A PromptQuorum não mediu uso de memória, velocidade nem espaço em disco.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'macOS', 'Valor informado': 'DMG para Apple Silicon; macOS 15+ citado' },
          { 'Item': 'Windows', 'Valor informado': 'x64; EXE de instalação' },
          { 'Item': 'Linux', 'Valor informado': 'CLI x64; glibc 2.39+' },
          { 'Item': 'Servidor MCP', 'Valor informado': 'Node.js 22 recomendado' },
          { 'Item': 'Modelos de voz', 'Valor informado': 'Whisper; Parakeet no Apple Silicon' },
          { 'Item': 'Memória e GPU', 'Valor informado': 'Não publicado' },
        ],
        note: 'O binário pronto do Linux exige glibc 2.39 ou mais recente e as bibliotecas ALSA e PipeWire; o guia de instalação cita o Ubuntu 24.04 como sistema validado e diz que o Debian 12 precisa compilar do código-fonte. O macOS 15 é a versão que o guia de instalação cita para o aplicativo de desktop.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O Minutes é antes de tudo um gravador e transcritor que guarda conversas como Markdown; Recall, ditado e acesso para agentes o complementam.** Todos os itens abaixo são afirmações do desenvolvedor tiradas do README, do site e do guia de instalação.',
        ],
        items: [
          'Captura: grave reuniões e chamadas pelo microfone e pelo áudio do sistema, importe memos de voz (por exemplo, do celular por uma pasta sincronizada) ou dite segurando uma tecla.',
          'Transcrição: roda no seu computador com o whisper.cpp; o aplicativo assinado para Mac também traz um plugin de voz Parakeet, e os rótulos de falante vêm de modelos locais de diarização.',
          'Saída: cada conversa vira um arquivo Markdown com cabeçalho YAML listando título, data, duração, decisões e tarefas, que funciona com Obsidian, Logseq, grep e qualquer ferramenta de Markdown.',
          'Ditado: segure uma tecla e fale; no Mac o texto é digitado no cursor, no Windows e no Linux ele vai para a área de transferência, e cada ditado também é salvo como arquivo Markdown. Autocorreções e comandos de voz são tratados por regras no seu dispositivo, segundo o site.',
          'Recall: um painel do aplicativo de desktop onde você faz perguntas sobre suas gravações; as notas da versão 0.34.0 acrescentam até quatro abas de conversa separadas.',
          'Agentes: um servidor MCP, uma ferramenta de linha de comando, um SDK TypeScript e um plugin do Claude Code permitem que Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi e outros clientes pesquisem reuniões, memos e ditados e acompanhem uma transcrição ao vivo.',
          'Consentimento e privacidade: o README cita lembretes de consentimento, confirmação e marcadores de procedência, e diz que reuniões sensíveis são salvas sem áudio e com acesso restrito por padrão.',
          'Demonstração: um comando de exemplo adiciona reuniões de amostra para você testar a conexão com um agente sem microfone.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Segundo o desenvolvedor, a captura, a transcrição, os rótulos de falante e o armazenamento rodam no seu computador, e o texto só sai dele quando você envia contexto autorizado a um assistente ou resumidor na nuvem; a PromptQuorum não inspecionou o tráfego de rede e não pode confirmar isso.**',
          'A página de privacidade, de 23 de março de 2026, diz que o Minutes não tem análise de uso, telemetria, relatórios de falhas nem conta, e que não opera servidor próprio. A página de segurança acrescenta que a configuração e as atualizações podem baixar modelos e software, e que o site conta visitas com o Cloudflare Web Analytics, separado do aplicativo de desktop. A PromptQuorum não verificou como o canal de atualizações se comporta na versão atual.',
          'Se você conectar um assistente ou resumidor na nuvem, o contexto que você autoriza vai para esse provedor, conforme os termos dele; segundo o desenvolvedor, um modelo local, ou dispensar os resumos, mantém o fluxo no seu dispositivo. Arquivos que você copia para uma pasta sincronizada seguem as configurações desse serviço.',
          'Segundo a página de segurança, os arquivos Markdown são gravados com permissões só para o proprietário, e o código é público com licença MIT, então o fluxo de dados pode ser auditado. O desenvolvedor afirma que o processamento local não é uma certificação de conformidade; o consentimento para gravar e a retenção continuam sendo responsabilidade sua.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Minutes combina com quem quer guardar reuniões, memos de voz e ditados como Markdown simples que o próprio assistente de IA possa pesquisar.**',
        ],
        items: [
          'Quem já trabalha com Claude Code, Codex, Cursor ou outro cliente MCP e quer que ele pesquise suas conversas gravadas.',
          'Usuários que preferem arquivos simples, que podem abrir, pesquisar e fazer backup, ao espaço de trabalho de um serviço de anotações hospedado.',
          'Usuários de Mac com Apple Silicon e de Windows que querem um único app gratuito para captura de reuniões e ditado.',
          'Leitores que preferem um projeto com código e licença públicos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Minutes não serve em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: usuários de Mac com Intel que não querem compilar do código-fonte, já que a versão lista apenas um DMG para Apple Silicon.',
          'Não serve: quem precisa de um aplicativo de desktop para Linux; a versão para Linux é um binário de linha de comando.',
          'Não verificado: precisão da transcrição, rótulos de falante, qualidade do ditado, velocidade e qualidade das respostas dos assistentes conectados. A PromptQuorum não executou o aplicativo.',
          'Não verificado: as afirmações de ausência de telemetria e de requisições de rede aos servidores do desenvolvedor, ao lado do canal de atualizações que o guia de instalação descreve; a PromptQuorum não inspecionou o tráfego de rede.',
          'Não verificado: se o instalador do Windows é assinado e quanta memória um determinado modelo de voz exige.',
          'Não verificado: as afirmações do desenvolvedor sobre o tratamento do consentimento e o armazenamento restrito de reuniões sensíveis.',
          'Não verificado: quem mantém o projeto, em que país ele está sediado e quantas pessoas o usam. Não foi encontrado endereço de empresa, aviso legal nem página de termos, e a PromptQuorum não procurou análises independentes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Minutes e alternativas',
        itemHeadings: true,
        content: [
          '**O Minutes se sobrepõe a serviços de anotações de reuniões, apps de ditado e ferramentas de memória de agentes; a PromptQuorum não o comparou com eles na prática.** As ferramentas abaixo estão no diretório e são descritas a partir das próprias análises.',
        ],
        columns: ['Ferramenta', 'Segundo as fontes'],
        rows: [
          { 'Ferramenta': 'Minutes', 'Segundo as fontes': 'MIT; Mac/Windows/Linux; memória em Markdown para agentes' },
          { 'Ferramenta': '[Anarlog](/pt/power-local-llm/anarlog-review)', 'Segundo as fontes': 'MIT; Mac/Windows/Linux; bloco de reuniões sem bot' },
          { 'Ferramenta': '[Meetily](/pt/power-local-llm/meetily-review)', 'Segundo as fontes': 'MIT; Mac/Windows; anotações de reuniões' },
          { 'Ferramenta': '[Screenpipe](/pt/power-local-llm/screenpipe-review)', 'Segundo as fontes': 'Código visível; Mac/Windows/Linux; memória de tela e áudio' },
          { 'Ferramenta': '[Amical](/pt/power-local-llm/amical-review)', 'Segundo as fontes': 'MIT; Mac/Windows; ditado' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso de uma conta para usar o Minutes?',
            a: 'Não é preciso conta para gravar e armazenar conversas, segundo a página de segurança do desenvolvedor. Um assistente na nuvem que você conectar tem o próprio login ou a própria chave; o site descreve, por exemplo, o Claude escrevendo resumos com uma assinatura do Claude já existente.',
          },
          {
            q: 'Quais assistentes de IA podem pesquisar minhas gravações?',
            a: 'Segundo o README e o site: Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi, Claude Desktop e Mistral Vibe pelo servidor MCP, além de qualquer outro cliente MCP. A PromptQuorum não testou essas conexões.',
          },
          {
            q: 'O ditado funciona no Windows e no Linux?',
            a: 'Segundo o site, o ditado é digitado no cursor no Mac e copiado para a área de transferência no Windows e no Linux. A versão lista um instalador de desktop para Windows; no Linux, a versão pronta é a ferramenta de linha de comando.',
          },
          {
            q: 'Preciso avisar as pessoas de que estou gravando?',
            a: 'Depende de onde você e os outros participantes estão, e muitos lugares exigem consentimento para gravar uma chamada. O README cita lembretes de consentimento e marcadores de procedência como auxílios, e o desenvolvedor diz que o processamento local não é uma certificação de conformidade. Verifique as regras que valem para você; isto não é aconselhamento jurídico.',
          },
          {
            q: 'Funciona offline?',
            a: 'Segundo o desenvolvedor, a gravação, a transcrição e o armazenamento rodam no seu computador, então gravar e transcrever não exigem um serviço na nuvem. A configuração baixa modelos de voz, as atualizações baixam software, e um assistente ou resumidor na nuvem precisa de conexão.',
          },
          {
            q: 'Com que frequência o Minutes é atualizado?',
            a: 'O GitHub lista a versão 0.33.0 de 9 de novembro de 2026, a 0.33.1 de 11 de novembro, a 0.33.2 de 12 de novembro e a 0.34.0 de 17 de novembro, com commits na branch principal até 17 de novembro de 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Minutes vale uma olhada se você quer guardar reuniões, memos de voz e ditados como Markdown simples que o seu assistente de IA possa pesquisar, e usa um Mac com Apple Silicon ou Windows.**',
          'No papel, ele cobre bastante coisa, e o desenvolvimento está ativo: quatro versões entre 9 e 17 de novembro de 2026 e um commit em 17 de novembro de 2026. Segundo o desenvolvedor, a transcrição e o armazenamento ficam no seu computador, e o site mostra respostas de assistentes conectados que indicam o arquivo de onde vieram.',
          'As desvantagens são reais: o repositório tem só alguns meses, não foi encontrado endereço de empresa, aviso legal nem página de termos, os Macs com Intel não têm aplicativo de desktop pronto, o Linux é só de linha de comando, e a PromptQuorum não testou nada. Experimente com algumas gravações, com o consentimento de todos, antes de depender dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Minutes](https://useminutes.app) — recursos, plataformas e links, consultado em 18 de novembro de 2026.',
          '[Página de privacidade](https://useminutes.app/privacy) — as declarações do desenvolvedor sobre dados, de 23 de março de 2026, consultada em 18 de novembro de 2026.',
          '[Página de segurança](https://useminutes.app/security) — o que fica no dispositivo e o que usa a rede, consultada em 18 de novembro de 2026.',
          '[Página para agentes](https://useminutes.app/for-agents) — configuração do MCP e clientes compatíveis, consultada em 18 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/silverstein/minutes) — licença, data de criação e último commit, consultado em 18 de novembro de 2026.',
          '[README](https://github.com/silverstein/minutes#readme) — recursos, instalação e resumo de privacidade, consultado em 18 de novembro de 2026.',
          '[Guia de instalação](https://github.com/silverstein/minutes/blob/main/docs/install.md) — pacotes por plataforma e requisitos, consultado em 18 de novembro de 2026.',
          '[Versões do GitHub](https://github.com/silverstein/minutes/releases) — datas das versões, pacotes e notas da 0.34.0, consultadas em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Ferramentas locais de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — síntese de voz, reconhecimento de voz e agentes de voz lado a lado.',
          '[Análise do Anarlog](/pt/power-local-llm/anarlog-review) — um bloco de reuniões de código aberto sem bot.',
          '[Análise do Meetily](/pt/power-local-llm/meetily-review) — um serviço de anotações de reuniões de código aberto para Mac e Windows.',
          '[Análise do Screenpipe](/pt/power-local-llm/screenpipe-review) — uma camada de memória feita de captura de tela e áudio.',
          '[Análise do Amical](/pt/power-local-llm/amical-review) — ditado gratuito e de código aberto para Mac e Windows.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/minutes-review-hero-ja.webp',
    title: 'Minutesレビュー：会議・ボイスメモ・音声入力をAIエージェント向けの記憶にする無料オープンソースアプリ',
    seoTitle: 'Minutesレビュー：AIエージェント向け無料の会話メモリ',
    intro:
      'Minutes 0.34.0は、会議・ボイスメモ・音声入力を録音して文字起こしし、1件ずつMarkdownファイルとして保存する、MITライセンスの無料アプリです。READMEによると、録音・文字起こし・保存は自分のパソコン上で行われ、Claude Code、Codex、Cursorなどの任意のMCPクライアントがそのファイルを検索し、回答の元になったファイルを示せます。このレビューは公式サイトと、インストールガイドやリリースノートを含むGitHubリポジトリに基づき、2026年11月18日に確認しました。PromptQuorumは実機での検証を行っていません。',
    metaDescription:
      'Minutesは会議・ボイスメモ・音声入力をMarkdownファイルとして保存し、MCPクライアントから検索できる無料のMITアプリです。確認できた内容を整理しました。',
    twitterDescription:
      'Minutes：会議・ボイスメモ・音声入力を録音・文字起こししてMarkdownで保存し、Claude、Codexなどから検索できる無料のオープンソースアプリ。確認できた内容。',
    audience:
      '会議・ボイスメモ・音声入力を記録し、Claude Code、Codex、Cursorなどのアシスタントに検索させたい人、ホスト型のメモサービスより単純なMarkdownファイルを好む人、会議の文脈をローカルに持ちたい開発者',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Minutesレビュー',
    targetKeywords: [
      'Minutesレビュー',
      'MCP対応ローカル議事録',
      'オープンソース会議文字起こし Mac',
      'Markdownで保存する音声入力アプリ',
      '会議からのAIエージェントメモリ',
      'オープンソースのGranola代替',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Minutesは、会議・ボイスメモ・音声入力を録音して文字起こしし、1件ずつMarkdownファイルとして保存する、無料でオープンソース（MIT）のアプリです。Claude、Codex、Cursorなど任意のMCPクライアントがそのファイルを検索できます。** 開発元によると、録音・文字起こし・保存はお使いのパソコン上で動きます。デスクトップアプリはApple SiliconのMacではDMG、Windowsではセットアップファイルでインストールでき、Linuxにはコマンドライン版があります。PromptQuorumは検証しておらず、会社の住所、運営者情報（インプリント）のページ、利用規約ページは見つかりませんでした。',
    quickAnswerTop: {
      ja: {
        question: 'Minutesとは何で、誰に向いていますか？',
        answer:
          'Minutesは、GitHubで公開開発されている会話記憶アプリです。録音、文字起こし、決定事項、アクションアイテムを単純なMarkdownファイルとして残し、自分のAIアシスタントに検索させたい人に向いています。文字起こしは自分のパソコンで行うと、開発元は説明しています。',
        bullets: [
          '無料でMITライセンス。Apple SiliconのMacとWindows向けのデスクトップアプリ、Linux向けのコマンドライン版があり、2026年11月9日から17日の間に4回リリースされました。',
          '録音対象は会議と通話、取り込んだボイスメモ、音声入力です。会話ごとに、文字起こし・決定事項・アクションアイテムを含むMarkdownファイルが1つできます。',
          '文字起こしと話者ラベルは、開発元によるとパソコン上で動きます。要約は任意で、既存のサブスクリプションのClaudeなど選んだアシスタントか、ローカルモデルが担当します。',
          'MCPサーバーにより、Claude Code、Codex、Cursor、Gemini CLI、OpenCodeなどのMCPクライアントがファイルを検索し、回答の元ファイルを示せます。',
          'リポジトリは2026年3月に作成され、バージョン0.34.0は2026年11月17日にリリースされました。',
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
      { label: 'FAQ', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
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
            text: '開発元によると、Minutesは、会議・ボイスメモ・音声入力をパソコン上で録音・文字起こしし、ClaudeやCodexなどのMCPクライアントが検索できるMarkdownファイルとして保存する、無料のオープンソースアプリです。',
          },
          {
            type: 'plain-terms',
            text: '会話から自動で埋まっていく、単純なテキストファイルのフォルダだと考えてください。録音または音声入力をするとMinutesが文字起こしし、会話ごとに文字起こし・決定事項・アクションアイテムを含む1つのファイルになります。質問するとAIアシスタントがそのフォルダを読み、回答の元になったファイルを示します。',
          },
        ],
        items: [
          'デスクトップアプリはGitHubのリリースページかHomebrewから入れます。Apple SiliconのMacはDMG、Windowsはセットアップファイル、Linuxはビルド済みのコマンドライン版です。',
          '録音・文字起こし・話者ラベル・保存は、開発元によるとパソコン上で動きます。クラウドのアシスタントや要約ツールに送られるのは、許可した文脈だけです。',
          'AIアシスタントはMCPサーバー経由で接続します。READMEではnpxコマンドで起動します。録音した会話について質問できます。',
          '要約は任意です。クラウドのアシスタントを接続すると、許可した文字起こしの文脈がそのプロバイダーの規約のもとで送られます。',
          'PromptQuorumはアプリを検証していないため、文字起こしの精度、話者ラベル、回答の品質は未確認です。',
        ],
        callouts: [
          {
            type: 'note',
            text: '他の人を録音するには、あなたと相手のいる場所によって同意が必要になる場合があります。READMEは同意リマインダーと出所マーカーを補助として挙げ、開発元のセキュリティページは、ローカル処理はコンプライアンス認証ではないと述べています。通話を録音する前に、自分に適用されるルールを確認してください。これは法的助言ではありません。',
          },
          {
            type: 'note',
            text: '開発元のプライバシーページ（2026年3月23日付）は、テレメトリー、クラッシュレポート、アカウントがないと述べています。一方セキュリティページは、セットアップや更新でモデルやソフトウェアをダウンロードする場合があると補足しています。PromptQuorumはネットワーク通信を調べていないため、開発元の記述以上にどちらの主張も確認できません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Minutesは、会議・ボイスメモ・音声入力を録音して文字起こしし、1件ずつMarkdownファイルとして保存するMITライセンスの会話記憶アプリで、macOS、Windows、Linux向けに公開されています。**',
          '[github.com/silverstein/minutes](https://github.com/silverstein/minutes)で公開開発されており、リポジトリはGranolaやOtterのようなホスト型メモサービスに対するローカル優先の代替で、Claude Code、Codex、Cursor、任意のMCPクライアントが問い合わせられる、と説明しています。リポジトリは2026年3月に作成されました。バージョン0.34.0は2026年11月17日に登場し、その前に11月9日から12日にかけて0.33.0〜0.33.2が出ています。メインブランチの最後のコミットも2026年11月17日で、開発は活発なため放置プロジェクトの警告は適用されません。READMEは開発者としてX1 Wealth創業者のMat Silverstein氏を挙げています。PromptQuorumは会社の住所、運営者情報（インプリント）のページ、準拠法の記載を見つけられず、プロジェクトがどの国を拠点にしているかは分かりません。',
          'READMEと公式サイトによると、Minutesは会話ごとに構造化フロントマター付きのMarkdownファイルを、自分が所有するフォルダに保存します。メニューバーからの録音、音声入力、Recallパネルを備えたデスクトップアプリ、コマンドラインツール、MCPサーバー、Claude Codeプラグイン、TypeScript SDKが挙げられています。公式サイトには、接続したアシスタントが元のファイルを示す回答の例があります。',
          'PromptQuorumはアプリを実行しておらず、文字起こしの精度、話者ラベル、音声入力の品質、接続したアシスタントの回答の質は確認していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Minutesのデスクトップアプリは、GitHubのリリースページか、MacならHomebrewで入れます。Windowsにはセットアップファイル、Linuxにはコマンドラインのバイナリがあります。**',
          'v0.34.0のリリースには、Apple Silicon向けMacのDMG、Windows向けのセットアップEXEとポータブル版、Linux用コマンドラインバイナリ、Claude Desktop用拡張機能が並んでいます。READMEはHomebrewとCargoでのインストールも説明しており、インストールガイドによると、Homebrewのcaskと更新フィードはApple Silicon版に対応し、IntelのMacはソースからビルドします。',
        ],
        columns: ['プラットフォーム', 'パッケージ'],
        rows: [
          { 'プラットフォーム': 'macOS（Apple Silicon）', 'パッケージ': 'DMG、またはHomebrew cask' },
          { 'プラットフォーム': 'macOS（Intel）', 'パッケージ': 'ソースからビルド' },
          { 'プラットフォーム': 'Windows（x64）', 'パッケージ': 'セットアップEXE' },
          { 'プラットフォーム': 'Linux（x64）', 'パッケージ': 'CLIバイナリ（デスクトップアプリなし）' },
          { 'プラットフォーム': 'Claude Desktop', 'パッケージ': 'MCPB拡張機能' },
          { 'プラットフォーム': '[ソース](https://github.com/silverstein/minutes)', 'パッケージ': 'cargo install minutes-cli' },
        ],
        note: 'ダウンロードは[GitHubのリリースページ](https://github.com/silverstein/minutes/releases/latest)から行います。PromptQuorumはインストーラーを実行していません。インストールガイドはMacのcaskと更新フィードを公証済みとしていますが、Windows用インストーラーにコード署名があるかは確認していません。公式サイトの[利用規約](https://useminutes.app/terms)、[概要](https://useminutes.app/about)、[運営者情報](https://useminutes.app/imprint)、[問い合わせ](https://useminutes.app/contact)のページは、2026年11月18日の確認時に「404」を返しました。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**Minutesには比較的新しいMac、Windows PC、Linuxコンピューターが必要です。READMEとインストールガイドにメモリやGPUの最小要件は載っていません。**',
          '一覧はインストールガイドとREADMEに基づきます。音声モデルはセットアップ時にダウンロードされ、選んだモデルによってパソコンの負荷が変わります。PromptQuorumはメモリ使用量、速度、ディスク使用量を測定していません。',
        ],
        columns: ['項目', '記載された内容'],
        rows: [
          { '項目': 'macOS', '記載された内容': 'Apple Silicon用DMG、macOS 15以降に言及' },
          { '項目': 'Windows', '記載された内容': 'x64、セットアップEXE' },
          { '項目': 'Linux', '記載された内容': 'x64のCLI、glibc 2.39以降' },
          { '項目': 'MCPサーバー', '記載された内容': 'Node.js 22を推奨' },
          { '項目': '音声モデル', '記載された内容': 'Whisper、Apple SiliconではParakeet' },
          { '項目': 'メモリとGPU', '記載された内容': '記載なし' },
        ],
        note: 'ビルド済みのLinuxバイナリにはglibc 2.39以降とALSA、PipeWireのライブラリが必要です。インストールガイドは検証済みの環境としてUbuntu 24.04を挙げ、Debian 12はソースからのビルドが必要としています。デスクトップアプリについてインストールガイドが挙げているのはmacOS 15です。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Minutesはまず、会話をMarkdownで保存する録音・文字起こしツールです。Recall、音声入力、エージェント連携はその周辺にあります。** 以下はすべて、README、公式サイト、インストールガイドにある開発元の主張です。',
        ],
        items: [
          '録音：マイクとシステム音声から会議や通話を録音するか、ボイスメモ（たとえばスマートフォンから同期フォルダ経由）を取り込むか、キーを押し続けて音声入力します。',
          '文字起こし：whisper.cppでパソコン上で動きます。署名済みのMacデスクトップアプリはParakeet音声プラグインも同梱し、話者ラベルはローカルの話者分離モデルによります。',
          '出力：会話ごとに、タイトル、日付、長さ、決定事項、アクションアイテムを含むYAMLフロントマター付きのMarkdownファイルが1つできます。Obsidian、Logseq、grep、任意のMarkdownツールで扱えます。',
          '音声入力：キーを押し続けて話します。Macではカーソル位置に入力され、WindowsとLinuxではクリップボードに入ります。すべての音声入力はMarkdownファイルとしても保存されます。言い直しや音声コマンドは、公式サイトによると端末上のルールで処理されます。',
          'Recall：録音について質問できるデスクトップアプリのパネルです。0.34.0のノートでは、最大4つの会話タブが加わりました。',
          'エージェント：MCPサーバー、コマンドラインツール、TypeScript SDK、Claude Codeプラグインにより、Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Piなどが会議、メモ、音声入力を検索し、ライブの文字起こしを追えます。',
          '同意とプライバシー：READMEは同意リマインダー、確認、出所マーカーを挙げ、機密性の高い会議は音声なしで保存され、既定で制限されると述べています。',
          'デモ：サンプルコマンドでサンプル会議を追加でき、マイクなしでエージェント連携を試せます。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**開発元によると、録音・文字起こし・話者ラベル・保存はパソコン上で動き、テキストが外に出るのは、許可した文脈をクラウドのアシスタントや要約ツールに送るときだけです。PromptQuorumはネットワーク通信を調べておらず、確認できません。**',
          '2026年3月23日付のプライバシーページは、Minutesに利用分析、テレメトリー、クラッシュレポート、アカウントはなく、独自のサーバーも運用していないと述べています。セキュリティページは、セットアップや更新でモデルやソフトウェアをダウンロードする場合があること、公式サイトはデスクトップアプリとは別にCloudflare Web Analyticsで訪問数を数えていることを補足しています。PromptQuorumは、現行バージョンで更新フィードがどう動くかは確認していません。',
          'クラウドのアシスタントや要約ツールを接続すると、許可した文脈がそのプロバイダーの規約のもとで送られます。開発元によると、ローカルモデルを使うか要約を使わなければ、処理は端末内にとどまります。同期フォルダにコピーしたファイルは、そのサービスの設定に従います。',
          'セキュリティページによると、Markdownファイルは所有者のみの権限で書き込まれます。コードはMITライセンスで公開されているため、データの流れを監査できます。開発元は、ローカル処理はコンプライアンス認証ではないと述べており、録音の同意と保存期間は利用者の責任です。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Minutesは、会議・ボイスメモ・音声入力を、自分のAIアシスタントが検索できる単純なMarkdownとして残したい人に向いています。**',
        ],
        items: [
          'すでにClaude Code、Codex、CursorなどのMCPクライアントを使っていて、録音した会話を検索させたい人。',
          'ホスト型メモサービスの作業スペースより、自分で開き、検索し、バックアップできる単純なファイルを好む人。',
          '会議の録音と音声入力を1つの無料アプリで済ませたい、Apple Silicon MacやWindowsのユーザー。',
          'コードとライセンスが公開されているプロジェクトを好む人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Minutesが向かない状況があり、いくつかの点は未確認のままです。**',
        ],
        items: [
          '向かない人：リリースにはApple Silicon用のDMGしかないため、ソースからのビルドを避けたいIntel Macのユーザー。',
          '向かない人：Linuxのデスクトップアプリが必要な人。Linux向けのリリースはコマンドラインのバイナリです。',
          '未確認：文字起こしの精度、話者ラベル、音声入力の品質、速度、接続したアシスタントの回答の質。PromptQuorumはアプリを実行していません。',
          '未確認：インストールガイドが説明する更新フィードがある一方での、テレメトリーなし・開発元のサーバーへの通信なしという主張。PromptQuorumはネットワーク通信を調べていません。',
          '未確認：Windows用インストーラーにコード署名があるか、特定の音声モデルがどれだけメモリを必要とするか。',
          '未確認：同意の扱いと、機密性の高い会議の制限付き保存に関する開発元の説明。',
          '未確認：誰が運営しているか、どの国を拠点にしているか、何人が使っているか。会社の住所、運営者情報（インプリント）のページ、利用規約ページは見つからず、PromptQuorumは第三者のレビューを探していません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Minutesと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Minutesは、会議メモツール、音声入力アプリ、エージェント向け記憶ツールと重なる部分があります。PromptQuorumは実機でこれらと比較していません。** 以下のツールはディレクトリに掲載されており、各ツール自身のレビューに基づいて説明しています。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'Minutes', '情報源での記載': 'MIT、Mac/Windows/Linux、エージェント向けMarkdownメモリ' },
          { 'ツール': '[Anarlog](/ja/power-local-llm/anarlog-review)', '情報源での記載': 'MIT、Mac/Windows/Linux、ボットなしの会議メモ帳' },
          { 'ツール': '[Meetily](/ja/power-local-llm/meetily-review)', '情報源での記載': 'MIT、Mac/Windows、会議メモ' },
          { 'ツール': '[Screenpipe](/ja/power-local-llm/screenpipe-review)', '情報源での記載': 'ソース公開、Mac/Windows/Linux、画面と音声のメモリ' },
          { 'ツール': '[Amical](/ja/power-local-llm/amical-review)', '情報源での記載': 'MIT、Mac/Windows、音声入力' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Minutesを使うのにアカウントは必要ですか？',
            a: '開発元のセキュリティページによると、会話の録音と保存にアカウントは不要です。接続するクラウドのアシスタントには、それぞれのサインインやキーが必要です。公式サイトには、既存のClaudeサブスクリプションでClaudeが要約を書く例が紹介されています。',
          },
          {
            q: 'どのAIアシスタントが録音を検索できますか？',
            a: 'READMEと公式サイトによると、MCPサーバー経由でClaude Code、Codex、Cursor、Gemini CLI、OpenCode、Pi、Claude Desktop、Mistral Vibeのほか、任意のMCPクライアントが使えます。PromptQuorumはこれらの接続を検証していません。',
          },
          {
            q: 'WindowsとLinuxで音声入力は使えますか？',
            a: '公式サイトによると、音声入力はMacではカーソル位置に入力され、WindowsとLinuxではクリップボードにコピーされます。リリースにはWindows用のデスクトップインストーラーがあり、Linux向けのビルド済みリリースはコマンドラインツールです。',
          },
          {
            q: '録音していることを相手に伝える必要はありますか？',
            a: 'あなたと他の参加者がどこにいるかによって異なり、通話の録音に同意を求める地域は多くあります。READMEは同意リマインダーと出所マーカーを補助として挙げ、開発元はローカル処理がコンプライアンス認証ではないと述べています。自分に適用されるルールを確認してください。これは法的助言ではありません。',
          },
          {
            q: 'オフラインで動きますか？',
            a: '開発元によると、録音・文字起こし・保存はパソコン上で動くため、録音と文字起こしにクラウドサービスは不要です。セットアップでは音声モデルを、更新ではソフトウェアをダウンロードし、クラウドのアシスタントや要約ツールには接続が必要です。',
          },
          {
            q: 'Minutesはどのくらいの頻度で更新されますか？',
            a: 'GitHubには、2026年11月9日のバージョン0.33.0、11月11日の0.33.1、11月12日の0.33.2、11月17日の0.34.0が載っており、メインブランチへのコミットは2026年11月17日まであります。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          '**会議・ボイスメモ・音声入力を、自分のAIアシスタントが検索できる単純なMarkdownとして残したく、Apple Silicon MacかWindowsを使っているなら、Minutesは試す価値があります。**',
          '机上では守備範囲が広く、開発も活発です。2026年11月9日から17日の間に4回のリリースがあり、11月17日にもコミットがありました。開発元によると文字起こしと保存はパソコン上にとどまり、公式サイトには、接続したアシスタントが元のファイルを示す回答の例があります。',
          'トレードオフもあります。リポジトリはまだ数か月しか経っておらず、会社の住所、運営者情報（インプリント）のページ、利用規約ページは見つかりませんでした。Intel Mac向けのビルド済みデスクトップアプリはなく、Linuxはコマンドラインのみで、PromptQuorumは何も検証していません。頼る前に、関係者全員の同意を得たうえで、いくつかの録音で試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Minutes公式サイト](https://useminutes.app) — 機能、対応プラットフォーム、リンク。2026年11月18日に確認。',
          '[プライバシーページ](https://useminutes.app/privacy) — データに関する開発元の記述（2026年3月23日付）。2026年11月18日に確認。',
          '[セキュリティページ](https://useminutes.app/security) — 端末内にとどまるものとネットワークに触れるもの。2026年11月18日に確認。',
          '[エージェント向けページ](https://useminutes.app/for-agents) — MCPの設定と対応クライアント。2026年11月18日に確認。',
          '[GitHubリポジトリ](https://github.com/silverstein/minutes) — ライセンス、作成日、最後のコミット。2026年11月18日に確認。',
          '[README](https://github.com/silverstein/minutes#readme) — 機能、インストール、プライバシーの要約。2026年11月18日に確認。',
          '[インストールガイド](https://github.com/silverstein/minutes/blob/main/docs/install.md) — プラットフォーム別パッケージと要件。2026年11月18日に確認。',
          '[GitHubリリース](https://github.com/silverstein/minutes/releases) — リリース日、パッケージ、0.34.0のノート。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントを並べて比較。',
          '[Anarlogレビュー](/ja/power-local-llm/anarlog-review) — ボットなしのオープンソース会議メモ帳。',
          '[Meetilyレビュー](/ja/power-local-llm/meetily-review) — MacとWindows向けのオープンソース会議メモツール。',
          '[Screenpipeレビュー](/ja/power-local-llm/screenpipe-review) — 画面と音声のキャプチャから作るメモリ層。',
          '[Amicalレビュー](/ja/power-local-llm/amical-review) — MacとWindows向けの無料オープンソース音声入力。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの完全なカタログ。',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/minutes-review-hero-zh.webp',
    title: 'Minutes 评测：把会议、语音备忘和听写变成 AI 智能体记忆的免费开源应用',
    seoTitle: 'Minutes 评测：面向 AI 智能体的免费对话记忆',
    intro:
      'Minutes 0.34.0 是一款采用 MIT 许可证的免费应用，可录制并转写会议、语音备忘和听写内容，并把每一条保存为 Markdown 文件。根据其 README，录音、转写和存储都在你自己的电脑上进行，Claude Code、Codex、Cursor 或任何其他 MCP 客户端都可以检索这些文件，并指出答案来自哪个文件。本评测基于官方网站以及 GitHub 仓库（含安装指南和版本说明），核查日期为 2026 年 11 月 18 日。PromptQuorum 没有亲自试用这款应用。',
    metaDescription:
      'Minutes 是免费的 MIT 应用，把会议、语音备忘和听写保存为 Markdown 文件，MCP 客户端可检索。已确认的内容。',
    twitterDescription:
      'Minutes：免费开源应用，录制并转写会议、语音备忘和听写，保存为 Markdown 文件，供 Claude、Codex 等 MCP 客户端检索。已确认的内容。',
    audience:
      '录制会议、语音备忘或听写内容，并希望 Claude Code、Codex、Cursor 等助手帮忙检索的人；更喜欢简单 Markdown 文件而不是托管式笔记服务的用户；需要本地会议上下文来源的开发者',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Minutes 评测',
    targetKeywords: [
      'Minutes 评测',
      '支持 MCP 的本地会议纪要',
      '开源会议转写 Mac',
      '保存为 Markdown 的听写应用',
      '来自会议的 AI 智能体记忆',
      '开源 Granola 替代品',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Minutes 是一款免费开源（MIT）的应用，可录制并转写会议、语音备忘和听写内容，并把每一条保存为 Markdown 文件，Claude、Codex、Cursor 或其他 MCP 客户端都可以检索。** 据开发者称，录音、转写和存储都在你的电脑上进行。桌面版在 Apple Silicon Mac 上通过 DMG 安装，在 Windows 上通过安装程序安装，Linux 提供命令行版本。PromptQuorum 没有试用过它，也没有找到公司地址、运营者信息页面或条款页面。',
    quickAnswerTop: {
      zh: {
        question: 'Minutes 是什么，适合谁？',
        answer:
          'Minutes 是在 GitHub 上公开开发的对话记忆应用。适合希望把录音、转写文本、决定事项和待办事项保存为简单 Markdown 文件、让自己的 AI 助手来检索的人；据开发者描述，转写在自己的电脑上完成。',
        bullets: [
          '免费，MIT 许可证；提供面向 Apple Silicon Mac 和 Windows 的桌面应用以及面向 Linux 的命令行版本；2026 年 11 月 9 日至 17 日之间发布了四个版本。',
          '采集范围包括会议和通话、你导入的语音备忘以及听写；每段对话最终生成一个 Markdown 文件，包含转写文本、决定事项和待办事项。',
          '据开发者称，转写和说话人标注都在你的电脑上运行；摘要是可选的，由你选择的助手生成，例如使用你现有订阅的 Claude，或使用本地模型。',
          'MCP 服务器让 Claude Code、Codex、Cursor、Gemini CLI、OpenCode 等 MCP 客户端检索这些文件，并指出答案的来源文件。',
          '仓库创建于 2026 年 3 月；0.34.0 版本发布于 2026 年 11 月 17 日。',
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
            text: '据开发者称，Minutes 是一款免费开源的应用，在你的电脑上录制并转写会议、语音备忘和听写内容，保存为 Markdown 文件，供 Claude、Codex 等 MCP 客户端检索。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成一个由你的对话自动填充的纯文本文件夹：你录音或听写，Minutes 负责转写，每段对话变成一个包含转写文本、决定事项和待办事项的文件。你向 AI 助手提问时，它会读取这个文件夹，并指出答案背后的文件。',
          },
        ],
        items: [
          '从 GitHub 发布页或通过 Homebrew 安装桌面应用：Apple Silicon Mac 用 DMG，Windows 用安装程序；Linux 提供预编译的命令行程序。',
          '据开发者称，录音、转写、说话人标注和存储都在你的电脑上运行；只有你授权的上下文才会发送给云端助手或摘要工具。',
          '通过 MCP 服务器连接 AI 助手（README 用 npx 命令启动它），然后就可以向它询问你录下的对话。',
          '摘要是可选的；如果你连接云端助手，你授权的转写上下文会按该服务商的条款发送给它。',
          'PromptQuorum 没有试用这款应用，因此转写准确度、说话人标注和回答质量均未核实。',
        ],
        callouts: [
          {
            type: 'note',
            text: '录制他人可能需要对方同意，具体取决于你和对方所在的地点。README 把同意提醒和来源标记列为辅助手段，开发者的安全页面则说明本地处理不等于合规认证；录制通话前，请先确认适用于你的规定。这不是法律建议。',
          },
          {
            type: 'note',
            text: '开发者的隐私页面（日期为 2026 年 3 月 23 日）称没有遥测、崩溃报告和账号，而其安全页面补充说，安装设置和更新可能会下载模型和软件。PromptQuorum 没有检查网络流量，除开发者所写之外，无法确认这两项说法。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Minutes 是一款采用 MIT 许可证的对话记忆应用，可录制并转写会议、语音备忘和听写内容，并把每一条存为 Markdown 文件，支持 macOS、Windows 和 Linux。**',
          '它在 [github.com/silverstein/minutes](https://github.com/silverstein/minutes) 上公开开发，仓库把它描述为 Granola、Otter 等托管式笔记服务的本地优先替代品，Claude Code、Codex、Cursor 和任何 MCP 客户端都可以查询它。仓库创建于 2026 年 3 月；0.34.0 版本发布于 2026 年 11 月 17 日，此前 11 月 9 日至 12 日发布了 0.33.0 至 0.33.2，主分支的最后一次提交同样在 2026 年 11 月 17 日，开发处于活跃状态，因此不适用“项目停更”警告。README 点名 X1 Wealth 创始人 Mat Silverstein 为开发者；PromptQuorum 没有找到公司地址、运营者信息页面或适用法律的说明，因此无法说明该项目位于哪个国家。',
          '根据 README 和官网，Minutes 会把每段对话保存为带结构化前置信息的 Markdown 文件，存放在你自己的文件夹中。它列出了带菜单栏录音、听写和 Recall 面板的桌面应用、命令行工具、MCP 服务器、Claude Code 插件和 TypeScript SDK。官网展示了已连接助手给出的、注明来源文件的回答。',
          'PromptQuorum 没有运行这款应用，也没有核实转写准确度、说话人标注、听写质量，以及已连接助手的回答质量。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**Minutes 桌面应用可从 GitHub 发布页安装，Mac 上也可以用 Homebrew；Windows 有安装程序，Linux 有命令行程序。**',
          'v0.34.0 版本提供面向 Apple Silicon Mac 的 DMG、面向 Windows 的安装 EXE 和便携版、Linux 命令行程序以及 Claude Desktop 扩展。README 还介绍了 Homebrew 和 Cargo 安装方式，安装指南说明 Homebrew cask 和更新源对应 Apple Silicon 版本，Intel Mac 需要从源码构建。',
        ],
        columns: ['平台', '安装包'],
        rows: [
          { '平台': 'macOS（Apple Silicon）', '安装包': 'DMG 或 Homebrew cask' },
          { '平台': 'macOS（Intel）', '安装包': '从源码构建' },
          { '平台': 'Windows（x64）', '安装包': '安装 EXE' },
          { '平台': 'Linux（x64）', '安装包': 'CLI 程序，无桌面应用' },
          { '平台': 'Claude Desktop', '安装包': 'MCPB 扩展' },
          { '平台': '[源码](https://github.com/silverstein/minutes)', '安装包': 'cargo install minutes-cli' },
        ],
        note: '请从 [GitHub 发布页](https://github.com/silverstein/minutes/releases/latest)下载。PromptQuorum 没有运行这些安装程序；安装指南称 Mac 的 cask 和更新源已通过公证，PromptQuorum 没有核实 Windows 安装程序是否有代码签名。官网上的[条款](https://useminutes.app/terms)、[关于](https://useminutes.app/about)、[运营者信息](https://useminutes.app/imprint)和[联系](https://useminutes.app/contact)页面在 2026 年 11 月 18 日核查时返回“404”。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**Minutes 需要较新的 Mac、Windows 电脑或 Linux 电脑；README 和安装指南没有公布内存或 GPU 的最低要求。**',
          '下表来自安装指南和 README。语音模型在初次设置时下载，所选模型会改变电脑的负载。PromptQuorum 没有测量内存占用、速度或磁盘占用。',
        ],
        columns: ['项目', '文档所述'],
        rows: [
          { '项目': 'macOS', '文档所述': 'Apple Silicon 版 DMG；提到 macOS 15+' },
          { '项目': 'Windows', '文档所述': 'x64；安装 EXE' },
          { '项目': 'Linux', '文档所述': 'x64 CLI；glibc 2.39+' },
          { '项目': 'MCP 服务器', '文档所述': '推荐 Node.js 22' },
          { '项目': '语音模型', '文档所述': 'Whisper；Apple Silicon 上有 Parakeet' },
          { '项目': '内存和 GPU', '文档所述': '未公布' },
        ],
        note: '预编译的 Linux 程序需要 glibc 2.39 或更新版本，以及 ALSA 和 PipeWire 库；安装指南把 Ubuntu 24.04 列为已验证系统，并说明 Debian 12 需要从源码构建。安装指南为桌面应用提到的版本是 macOS 15。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Minutes 首先是一个把对话存为 Markdown 的录音和转写工具；Recall、听写和智能体访问围绕它展开。** 以下各项均为 README、官网和安装指南中开发者的说法。',
        ],
        items: [
          '采集：通过麦克风和系统音频录制会议和通话，导入语音备忘（例如通过同步文件夹从手机导入），或按住按键听写。',
          '转写：使用 whisper.cpp 在你的电脑上运行；已签名的 Mac 桌面应用还内置 Parakeet 语音插件，说话人标注来自本地的说话人分离模型。',
          '输出：每段对话生成一个 Markdown 文件，带有列出标题、日期、时长、决定事项和待办事项的 YAML 前置信息，可配合 Obsidian、Logseq、grep 和任何 Markdown 工具使用。',
          '听写：按住按键说话；Mac 上文字输入到光标处，Windows 和 Linux 上则进入剪贴板，每次听写还会另存为 Markdown 文件。据官网所述，自我纠正和语音指令由你设备上的规则处理。',
          'Recall：桌面应用中的面板，可对你的录音提问；0.34.0 的版本说明新增了最多四个独立的对话标签页。',
          '智能体：MCP 服务器、命令行工具、TypeScript SDK 和 Claude Code 插件，让 Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Pi 等客户端检索会议、备忘和听写内容，并跟踪实时转写。',
          '同意与隐私：README 列出同意提醒、确认和来源标记，并称敏感会议保存时不含音频，且默认受限访问。',
          '演示：一条示例命令会添加示例会议，让你不用麦克风就能试用智能体连接。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**据开发者称，录音、转写、说话人标注和存储都在你的电脑上进行，只有你把授权的上下文发送给云端助手或摘要工具时，文本才会离开电脑；PromptQuorum 没有检查网络流量，无法确认这一点。**',
          '日期为 2026 年 3 月 23 日的隐私页面称，Minutes 没有分析统计、遥测、崩溃报告和账号，也不运营自己的服务器。安全页面补充说，安装设置和更新可能会下载模型和软件，官网使用 Cloudflare Web Analytics 统计访问量，与桌面应用分开。PromptQuorum 没有核实更新源在当前版本中的行为。',
          '如果你连接云端助手或摘要工具，你授权的上下文会按该服务商的条款发送给它；据开发者称，使用本地模型或不生成摘要，可让整个流程留在你的设备上。复制到同步文件夹的文件遵循该同步服务的设置。',
          '据安全页面所述，Markdown 文件以仅限所有者的权限写入，代码采用 MIT 许可证并公开，因此数据流向可以审计。开发者表示本地处理不等于合规认证；录音同意和数据保留仍由你负责。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Minutes 适合希望把会议、语音备忘和听写内容保存为简单 Markdown、让自己的 AI 助手来检索的人。**',
        ],
        items: [
          '已经在使用 Claude Code、Codex、Cursor 或其他 MCP 客户端，并希望它检索自己录下的对话的人。',
          '更喜欢能自己打开、搜索和备份的简单文件，而不是托管式笔记服务工作区的用户。',
          '想用一款免费应用同时完成会议录音和听写的 Apple Silicon Mac 与 Windows 用户。',
          '更喜欢代码和许可证公开的项目的读者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**Minutes 在某些情况下并不合适，也有若干细节尚未核实。**',
        ],
        items: [
          '不适合：不想从源码构建的 Intel Mac 用户，因为发布版只列出 Apple Silicon 的 DMG。',
          '不适合：需要 Linux 桌面应用的人；Linux 版本是命令行程序。',
          '未核实：转写准确度、说话人标注、听写质量、速度，以及已连接助手的回答质量。PromptQuorum 没有运行这款应用。',
          '未核实：在安装指南描述了更新源的同时，“没有遥测、不向开发者服务器发送网络请求”的说法；PromptQuorum 没有检查网络流量。',
          '未核实：Windows 安装程序是否有代码签名，以及某个语音模型需要多少内存。',
          '未核实：开发者关于同意处理和敏感会议受限存储的说法。',
          '未核实：谁在运营这个项目、位于哪个国家、有多少人在使用。没有找到公司地址、运营者信息页面或条款页面，PromptQuorum 也没有查找独立评测。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Minutes 与替代方案对比',
        itemHeadings: true,
        content: [
          '**Minutes 与会议纪要工具、听写应用和智能体记忆工具有所重叠；PromptQuorum 没有亲自对它们做对比。** 下列工具已收录在目录中，根据各自的评测来描述。',
        ],
        columns: ['工具', '来源所述'],
        rows: [
          { '工具': 'Minutes', '来源所述': 'MIT；Mac/Windows/Linux；面向智能体的 Markdown 记忆' },
          { '工具': '[Anarlog](/zh/power-local-llm/anarlog-review)', '来源所述': 'MIT；Mac/Windows/Linux；无机器人会议笔记本' },
          { '工具': '[Meetily](/zh/power-local-llm/meetily-review)', '来源所述': 'MIT；Mac/Windows；会议纪要' },
          { '工具': '[Screenpipe](/zh/power-local-llm/screenpipe-review)', '来源所述': '源码可见；Mac/Windows/Linux；屏幕与音频记忆' },
          { '工具': '[Amical](/zh/power-local-llm/amical-review)', '来源所述': 'MIT；Mac/Windows；听写' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '使用 Minutes 需要账号吗？',
            a: '据开发者的安全页面所述，录制和存储对话不需要账号。你连接的云端助手有各自的登录或密钥；官网举例说明了 Claude 如何使用现有的 Claude 订阅来撰写摘要。',
          },
          {
            q: '哪些 AI 助手可以检索我的录音？',
            a: '根据 README 和官网：通过 MCP 服务器可使用 Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Pi、Claude Desktop 和 Mistral Vibe，以及任何其他 MCP 客户端。PromptQuorum 没有测试这些连接。',
          },
          {
            q: '听写功能在 Windows 和 Linux 上可用吗？',
            a: '据官网所述，听写内容在 Mac 上输入到光标处，在 Windows 和 Linux 上复制到剪贴板。发布版列出了 Windows 桌面安装程序；在 Linux 上，预编译版本是命令行工具。',
          },
          {
            q: '我需要告诉别人我在录音吗？',
            a: '这取决于你和其他参与者所在的地点，许多地方要求录制通话须经同意。README 把同意提醒和来源标记列为辅助手段，开发者表示本地处理不等于合规认证。请确认适用于你的规定；这不是法律建议。',
          },
          {
            q: '可以离线使用吗？',
            a: '据开发者称，录音、转写和存储都在你的电脑上进行，因此录制和转写不需要云服务。初次设置会下载语音模型，更新会下载软件，云端助手或摘要工具则需要联网。',
          },
          {
            q: 'Minutes 更新频率如何？',
            a: 'GitHub 列出 2026 年 11 月 9 日的 0.33.0、11 月 11 日的 0.33.1、11 月 12 日的 0.33.2 和 11 月 17 日的 0.34.0，主分支最近一次提交在 2026 年 11 月 17 日。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你想把会议、语音备忘和听写内容保存为简单的 Markdown，让自己的 AI 助手来检索，并且使用 Apple Silicon Mac 或 Windows，Minutes 值得一试。**',
          '从纸面上看它覆盖面很广，开发也很活跃：2026 年 11 月 9 日至 17 日之间发布了四个版本，11 月 17 日还有提交。开发者称转写和存储都留在你的电脑上，官网也展示了已连接助手给出的、注明来源文件的回答。',
          '代价同样真实：仓库只有几个月历史，没有找到公司地址、运营者信息页面或条款页面，Intel Mac 没有预编译的桌面应用，Linux 仅有命令行版本，而且 PromptQuorum 没有测试过任何内容。在依赖它之前，请先在征得所有人同意的前提下，用几段录音试一试。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Minutes 官网](https://useminutes.app) — 功能、平台和链接，2026 年 11 月 18 日核查。',
          '[隐私页面](https://useminutes.app/privacy) — 开发者关于数据的说明（日期为 2026 年 3 月 23 日），2026 年 11 月 18 日核查。',
          '[安全页面](https://useminutes.app/security) — 哪些内容留在设备上、哪些会接触网络，2026 年 11 月 18 日核查。',
          '[面向智能体页面](https://useminutes.app/for-agents) — MCP 设置和支持的客户端，2026 年 11 月 18 日核查。',
          '[GitHub 仓库](https://github.com/silverstein/minutes) — 许可证、创建日期和最近一次提交，2026 年 11 月 18 日核查。',
          '[README](https://github.com/silverstein/minutes#readme) — 功能、安装和隐私摘要，2026 年 11 月 18 日核查。',
          '[安装指南](https://github.com/silverstein/minutes/blob/main/docs/install.md) — 各平台安装包和系统要求，2026 年 11 月 18 日核查。',
          '[GitHub 发布页](https://github.com/silverstein/minutes/releases) — 发布日期、安装包和 0.34.0 的版本说明，2026 年 11 月 18 日核查。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 文字转语音、语音转文字和语音智能体并列比较。',
          '[Anarlog 评测](/zh/power-local-llm/anarlog-review) — 无机器人的开源会议笔记本。',
          '[Meetily 评测](/zh/power-local-llm/meetily-review) — 适用于 Mac 和 Windows 的开源会议纪要工具。',
          '[Screenpipe 评测](/zh/power-local-llm/screenpipe-review) — 由屏幕和音频采集构建的记忆层。',
          '[Amical 评测](/zh/power-local-llm/amical-review) — 适用于 Mac 和 Windows 的免费开源听写应用。',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/minutes-review-hero-ko.webp',
    title: 'Minutes 리뷰: 회의·음성 메모·받아쓰기를 AI 에이전트 기억으로 만드는 무료 오픈소스 앱',
    seoTitle: 'Minutes 리뷰: AI 에이전트용 무료 대화 메모리',
    intro:
      'Minutes 0.34.0은 회의, 음성 메모, 받아쓰기를 녹음하고 전사해 하나씩 Markdown 파일로 보관하는 MIT 라이선스의 무료 앱입니다. README에 따르면 녹음, 전사, 저장은 사용자의 컴퓨터에서 이루어지며, Claude Code, Codex, Cursor 등 모든 MCP 클라이언트가 그 파일을 검색하고 답변의 출처 파일을 알려 줄 수 있습니다. 이 리뷰는 공식 웹사이트와 설치 가이드, 릴리스 노트가 있는 GitHub 저장소를 바탕으로 하며 2026년 11월 18일에 확인했습니다. PromptQuorum은 앱을 직접 사용해 검증하지 않았습니다.',
    metaDescription:
      'Minutes는 회의, 음성 메모, 받아쓰기를 Markdown 파일로 저장해 MCP 클라이언트가 검색하게 하는 무료 MIT 앱입니다. 확인된 내용입니다.',
    twitterDescription:
      'Minutes: 회의, 음성 메모, 받아쓰기를 녹음·전사해 Markdown 파일로 저장하고 Claude, Codex 등이 검색하게 하는 무료 오픈소스 앱. 확인된 내용.',
    audience:
      '회의, 음성 메모, 받아쓰기를 기록하고 Claude Code, Codex, Cursor 같은 어시스턴트가 검색하게 하려는 사람, 호스팅형 노트 서비스보다 단순한 Markdown 파일을 선호하는 사용자, 회의 맥락을 로컬에 두려는 개발자',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Minutes 리뷰',
    targetKeywords: [
      'Minutes 리뷰',
      'MCP 지원 로컬 회의록',
      '오픈소스 회의 전사 Mac',
      'Markdown으로 저장하는 받아쓰기 앱',
      '회의에서 만드는 AI 에이전트 메모리',
      '오픈소스 Granola 대안',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Minutes는 회의, 음성 메모, 받아쓰기를 녹음하고 전사해 하나씩 Markdown 파일로 저장하는 무료 오픈소스(MIT) 앱이며, Claude, Codex, Cursor 등 모든 MCP 클라이언트가 그 파일을 검색할 수 있습니다.** 개발사에 따르면 녹음, 전사, 저장은 사용자의 컴퓨터에서 실행됩니다. 데스크톱 앱은 Apple Silicon Mac에서는 DMG로, Windows에서는 설치 파일로 설치하며, Linux에는 명령줄 버전이 있습니다. PromptQuorum은 직접 검증하지 않았고, 회사 주소, 운영자 정보 페이지, 이용약관 페이지는 찾지 못했습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Minutes는 무엇이며 누구에게 맞습니까?',
        answer:
          'Minutes는 GitHub에서 공개 개발되는 대화 기억 앱입니다. 녹음, 전사본, 결정 사항, 할 일을 단순한 Markdown 파일로 남겨 자신의 AI 어시스턴트가 검색하게 하려는 사람에게 맞습니다. 개발사는 전사가 자신의 컴퓨터에서 처리된다고 설명합니다.',
        bullets: [
          '무료이며 MIT 라이선스입니다. Apple Silicon Mac과 Windows용 데스크톱 앱, Linux용 명령줄 버전이 있으며 2026년 11월 9일부터 17일 사이에 네 번의 릴리스가 나왔습니다.',
          '녹음 대상은 회의와 통화, 가져온 음성 메모, 받아쓰기입니다. 대화마다 전사본, 결정 사항, 할 일이 담긴 Markdown 파일이 하나 생깁니다.',
          '전사와 화자 구분은 개발사에 따르면 사용자의 컴퓨터에서 실행됩니다. 요약은 선택 사항이며, 기존 구독의 Claude 같은 선택한 어시스턴트나 로컬 모델이 맡습니다.',
          'MCP 서버를 통해 Claude Code, Codex, Cursor, Gemini CLI, OpenCode 등 MCP 클라이언트가 파일을 검색하고 답변의 출처 파일을 알려 줍니다.',
          '저장소는 2026년 3월에 만들어졌고, 0.34.0 버전은 2026년 11월 17일에 출시되었습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보와 데이터 흐름', anchor: 'privacy' },
      { label: '이런 분께 맞습니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '대안', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: '개발사에 따르면 Minutes는 회의, 음성 메모, 받아쓰기를 컴퓨터에서 녹음하고 전사해 Markdown 파일로 저장하며, Claude, Codex 등 MCP 클라이언트가 검색할 수 있게 하는 무료 오픈소스 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '대화에서 저절로 채워지는 단순한 텍스트 파일 폴더라고 생각하시면 됩니다. 녹음하거나 받아쓰기를 하면 Minutes가 전사하고, 대화마다 전사본, 결정 사항, 할 일이 담긴 파일 하나가 생깁니다. 질문하면 AI 어시스턴트가 그 폴더를 읽고 답변의 근거가 된 파일을 알려 줍니다.',
          },
        ],
        items: [
          '데스크톱 앱은 GitHub 릴리스 페이지나 Homebrew로 설치합니다. Apple Silicon Mac은 DMG, Windows는 설치 파일이며, Linux에는 빌드된 명령줄 바이너리가 있습니다.',
          '녹음, 전사, 화자 구분, 저장은 개발사에 따르면 사용자의 컴퓨터에서 실행됩니다. 클라우드 어시스턴트나 요약 도구로 가는 것은 사용자가 허용한 맥락뿐입니다.',
          'AI 어시스턴트는 MCP 서버로 연결합니다. README는 npx 명령으로 서버를 시작하며, 녹음한 대화에 대해 질문할 수 있습니다.',
          '요약은 선택 사항입니다. 클라우드 어시스턴트를 연결하면 허용한 전사 맥락이 해당 제공업체의 약관에 따라 전송됩니다.',
          'PromptQuorum은 앱을 검증하지 않았으므로 전사 정확도, 화자 구분, 답변 품질은 확인되지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '다른 사람을 녹음하려면 사용자와 상대방이 있는 지역에 따라 동의가 필요할 수 있습니다. README는 동의 알림과 출처 표시를 보조 수단으로 들고 있고, 개발사의 보안 페이지는 로컬 처리가 규정 준수 인증은 아니라고 밝힙니다. 통화를 녹음하기 전에 본인에게 적용되는 규칙을 확인하십시오. 이는 법률 자문이 아닙니다.',
          },
          {
            type: 'note',
            text: '개발사의 개인정보 페이지(2026년 3월 23일자)는 원격 측정, 충돌 보고, 계정이 없다고 밝히지만, 보안 페이지는 설정과 업데이트 과정에서 모델과 소프트웨어를 내려받을 수 있다고 덧붙입니다. PromptQuorum은 네트워크 트래픽을 조사하지 않았으므로 개발사가 쓴 내용 이상으로 두 주장을 확인할 수 없습니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Minutes는 회의, 음성 메모, 받아쓰기를 녹음하고 전사해 하나씩 Markdown 파일로 저장하는 MIT 라이선스의 대화 기억 앱이며, macOS, Windows, Linux용으로 공개되어 있습니다.**',
          '[github.com/silverstein/minutes](https://github.com/silverstein/minutes)에서 공개 개발되며, 저장소는 Granola, Otter 같은 호스팅형 노트 서비스에 대한 로컬 우선 대안으로 소개하고, Claude Code, Codex, Cursor 및 모든 MCP 클라이언트가 조회할 수 있다고 설명합니다. 저장소는 2026년 3월에 만들어졌습니다. 0.34.0 버전은 2026년 11월 17일에 나왔고, 그 전인 11월 9일부터 12일 사이에 0.33.0~0.33.2가 나왔으며, 메인 브랜치의 마지막 커밋도 2026년 11월 17일이므로 개발이 활발하여 방치된 프로젝트 경고는 해당하지 않습니다. README는 개발자로 X1 Wealth 설립자 Mat Silverstein을 밝히고 있습니다. PromptQuorum은 회사 주소, 운영자 정보 페이지, 준거법 표기를 찾지 못했으므로 프로젝트가 어느 나라에 기반을 두는지 말할 수 없습니다.',
          'README와 공식 사이트에 따르면 Minutes는 대화마다 구조화된 프런트매터가 있는 Markdown 파일을 사용자가 소유한 폴더에 저장합니다. 메뉴 막대 녹음, 받아쓰기, Recall 패널이 있는 데스크톱 앱, 명령줄 도구, MCP 서버, Claude Code 플러그인, TypeScript SDK가 나열되어 있습니다. 공식 사이트에는 연결된 어시스턴트가 출처 파일을 밝히는 답변 예시가 있습니다.',
          'PromptQuorum은 앱을 실행하지 않았으며 전사 정확도, 화자 구분, 받아쓰기 품질, 연결된 어시스턴트의 답변 품질을 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Minutes 데스크톱 앱은 GitHub 릴리스 페이지에서, Mac에서는 Homebrew로도 설치합니다. Windows에는 설치 파일이, Linux에는 명령줄 바이너리가 있습니다.**',
          'v0.34.0 릴리스에는 Apple Silicon Mac용 DMG, Windows용 설치 EXE와 휴대용 버전, Linux 명령줄 바이너리, Claude Desktop 확장이 올라와 있습니다. README는 Homebrew와 Cargo 설치도 안내하며, 설치 가이드에 따르면 Homebrew cask와 업데이트 피드는 Apple Silicon 빌드를 따르고 Intel Mac은 소스에서 빌드해야 합니다.',
        ],
        columns: ['플랫폼', '패키지'],
        rows: [
          { '플랫폼': 'macOS (Apple Silicon)', '패키지': 'DMG 또는 Homebrew cask' },
          { '플랫폼': 'macOS (Intel)', '패키지': '소스에서 빌드' },
          { '플랫폼': 'Windows (x64)', '패키지': '설치 EXE' },
          { '플랫폼': 'Linux (x64)', '패키지': 'CLI 바이너리, 데스크톱 앱 없음' },
          { '플랫폼': 'Claude Desktop', '패키지': 'MCPB 확장' },
          { '플랫폼': '[소스](https://github.com/silverstein/minutes)', '패키지': 'cargo install minutes-cli' },
        ],
        note: '[GitHub 릴리스 페이지](https://github.com/silverstein/minutes/releases/latest)에서 내려받습니다. PromptQuorum은 설치 프로그램을 실행하지 않았습니다. 설치 가이드는 Mac cask와 업데이트 피드가 공증되었다고 하지만, Windows 설치 프로그램에 코드 서명이 있는지는 확인하지 않았습니다. 공식 사이트의 [이용약관](https://useminutes.app/terms), [소개](https://useminutes.app/about), [운영자 정보](https://useminutes.app/imprint), [문의](https://useminutes.app/contact) 페이지는 2026년 11월 18일 확인 시 "404"를 반환했습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**Minutes에는 비교적 최신의 Mac, Windows PC, Linux 컴퓨터가 필요하며, README와 설치 가이드는 메모리나 GPU 최소 사양을 밝히지 않습니다.**',
          '목록은 설치 가이드와 README에서 가져왔습니다. 음성 모델은 설정 중에 내려받으며, 선택한 모델에 따라 컴퓨터의 부하가 달라집니다. PromptQuorum은 메모리 사용량, 속도, 디스크 사용량을 측정하지 않았습니다.',
        ],
        columns: ['항목', '명시된 내용'],
        rows: [
          { '항목': 'macOS', '명시된 내용': 'Apple Silicon용 DMG, macOS 15+ 언급' },
          { '항목': 'Windows', '명시된 내용': 'x64, 설치 EXE' },
          { '항목': 'Linux', '명시된 내용': 'x64 CLI, glibc 2.39+' },
          { '항목': 'MCP 서버', '명시된 내용': 'Node.js 22 권장' },
          { '항목': '음성 모델', '명시된 내용': 'Whisper, Apple Silicon에서는 Parakeet' },
          { '항목': '메모리와 GPU', '명시된 내용': '공개되지 않음' },
        ],
        note: '빌드된 Linux 바이너리에는 glibc 2.39 이상과 ALSA, PipeWire 라이브러리가 필요합니다. 설치 가이드는 검증된 시스템으로 Ubuntu 24.04를 들고, Debian 12는 소스에서 빌드해야 한다고 설명합니다. 설치 가이드가 데스크톱 앱에 대해 언급하는 버전은 macOS 15입니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Minutes는 우선 대화를 Markdown으로 저장하는 녹음·전사 도구이며, Recall, 받아쓰기, 에이전트 접근이 그 주변에 있습니다.** 아래 항목은 모두 README, 공식 사이트, 설치 가이드에 있는 개발사의 주장입니다.',
        ],
        items: [
          '녹음: 마이크와 시스템 오디오로 회의와 통화를 녹음하거나, 음성 메모(예: 동기화 폴더를 통해 휴대폰에서)를 가져오거나, 키를 누른 채 받아쓰기를 합니다.',
          '전사: whisper.cpp로 컴퓨터에서 실행됩니다. 서명된 Mac 데스크톱 앱은 Parakeet 음성 플러그인도 포함하며, 화자 구분은 로컬 화자 분리 모델이 맡습니다.',
          '출력: 대화마다 제목, 날짜, 길이, 결정 사항, 할 일을 담은 YAML 프런트매터가 있는 Markdown 파일이 하나 생기며, Obsidian, Logseq, grep 등 모든 Markdown 도구와 함께 쓸 수 있습니다.',
          '받아쓰기: 키를 누른 채 말합니다. Mac에서는 커서 위치에 입력되고, Windows와 Linux에서는 클립보드로 들어가며, 모든 받아쓰기는 Markdown 파일로도 저장됩니다. 공식 사이트에 따르면 말 고침과 음성 명령은 기기의 규칙으로 처리됩니다.',
          'Recall: 녹음에 대해 질문하는 데스크톱 앱의 패널입니다. 0.34.0 노트에서 최대 네 개의 대화 탭이 추가되었습니다.',
          '에이전트: MCP 서버, 명령줄 도구, TypeScript SDK, Claude Code 플러그인을 통해 Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi 등이 회의, 메모, 받아쓰기를 검색하고 실시간 전사를 따라갈 수 있습니다.',
          '동의와 개인정보: README는 동의 알림, 확인, 출처 표시를 들고, 민감한 회의는 오디오 없이 저장되며 기본적으로 접근이 제한된다고 밝힙니다.',
          '데모: 샘플 명령으로 샘플 회의를 추가해 마이크 없이 에이전트 연결을 시험해 볼 수 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 데이터 흐름',
        content: [
          '**개발사에 따르면 녹음, 전사, 화자 구분, 저장은 사용자의 컴퓨터에서 실행되며, 텍스트는 허용한 맥락을 클라우드 어시스턴트나 요약 도구로 보낼 때만 컴퓨터를 떠납니다. PromptQuorum은 네트워크 트래픽을 조사하지 않았으므로 이를 확인할 수 없습니다.**',
          '2026년 3월 23일자 개인정보 페이지는 Minutes에 분석, 원격 측정, 충돌 보고, 계정이 없고 자체 서버도 운영하지 않는다고 밝힙니다. 보안 페이지는 설정과 업데이트 과정에서 모델과 소프트웨어를 내려받을 수 있으며, 웹사이트는 데스크톱 앱과 별도로 Cloudflare Web Analytics로 방문 수를 집계한다고 덧붙입니다. PromptQuorum은 현재 버전에서 업데이트 피드가 어떻게 동작하는지는 확인하지 않았습니다.',
          '클라우드 어시스턴트나 요약 도구를 연결하면 허용한 맥락이 해당 제공업체의 약관에 따라 전송됩니다. 개발사에 따르면 로컬 모델을 쓰거나 요약을 생략하면 작업이 기기 안에 머뭅니다. 동기화 폴더에 복사한 파일은 해당 서비스의 설정을 따릅니다.',
          '보안 페이지에 따르면 Markdown 파일은 소유자만 접근할 수 있는 권한으로 기록되며, 코드는 MIT 라이선스로 공개되어 있어 데이터 흐름을 감사할 수 있습니다. 개발사는 로컬 처리가 규정 준수 인증은 아니라고 밝히며, 녹음 동의와 보관은 사용자의 책임입니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 맞습니다',
        content: [
          '**Minutes는 회의, 음성 메모, 받아쓰기를 자신의 AI 어시스턴트가 검색할 수 있는 단순한 Markdown으로 보관하려는 분께 맞습니다.**',
        ],
        items: [
          '이미 Claude Code, Codex, Cursor 또는 다른 MCP 클라이언트를 쓰고 있으며 녹음한 대화를 검색하게 하려는 분.',
          '호스팅형 노트 서비스의 작업 공간보다 직접 열고, 검색하고, 백업할 수 있는 단순한 파일을 선호하는 사용자.',
          '회의 녹음과 받아쓰기를 무료 앱 하나로 해결하려는 Apple Silicon Mac과 Windows 사용자.',
          '코드와 라이선스가 공개된 프로젝트를 선호하는 독자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Minutes가 맞지 않는 상황이 있으며, 여러 세부 사항은 확인되지 않았습니다.**',
        ],
        items: [
          '맞지 않는 경우: 릴리스에 Apple Silicon용 DMG만 있으므로 소스 빌드를 원하지 않는 Intel Mac 사용자.',
          '맞지 않는 경우: Linux 데스크톱 앱이 필요한 분. Linux 릴리스는 명령줄 바이너리입니다.',
          '확인되지 않음: 전사 정확도, 화자 구분, 받아쓰기 품질, 속도, 연결된 어시스턴트의 답변 품질. PromptQuorum은 앱을 실행하지 않았습니다.',
          '확인되지 않음: 설치 가이드가 설명하는 업데이트 피드가 있는 상황에서의 원격 측정 없음, 개발사 서버로의 네트워크 요청 없음이라는 주장. PromptQuorum은 네트워크 트래픽을 조사하지 않았습니다.',
          '확인되지 않음: Windows 설치 프로그램의 코드 서명 여부와 특정 음성 모델이 필요로 하는 메모리 양.',
          '확인되지 않음: 동의 처리와 민감한 회의의 제한된 저장에 대한 개발사의 설명.',
          '확인되지 않음: 누가 프로젝트를 운영하는지, 어느 나라에 기반을 두는지, 몇 명이 사용하는지. 회사 주소, 운영자 정보 페이지, 이용약관 페이지를 찾지 못했고 PromptQuorum은 독립적인 리뷰를 찾아보지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Minutes와 대안 비교',
        itemHeadings: true,
        content: [
          '**Minutes는 회의 노트 도구, 받아쓰기 앱, 에이전트 메모리 도구와 겹치는 부분이 있으며, PromptQuorum은 이들과 직접 비교해 보지 않았습니다.** 아래 도구는 디렉터리에 있으며 각자의 리뷰를 바탕으로 설명합니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'Minutes', '출처에 기재된 내용': 'MIT, Mac/Windows/Linux, 에이전트용 Markdown 메모리' },
          { '도구': '[Anarlog](/ko/power-local-llm/anarlog-review)', '출처에 기재된 내용': 'MIT, Mac/Windows/Linux, 봇 없는 회의 노트' },
          { '도구': '[Meetily](/ko/power-local-llm/meetily-review)', '출처에 기재된 내용': 'MIT, Mac/Windows, 회의 노트' },
          { '도구': '[Screenpipe](/ko/power-local-llm/screenpipe-review)', '출처에 기재된 내용': '소스 공개, Mac/Windows/Linux, 화면·오디오 메모리' },
          { '도구': '[Amical](/ko/power-local-llm/amical-review)', '출처에 기재된 내용': 'MIT, Mac/Windows, 받아쓰기' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Minutes를 쓰려면 계정이 필요합니까?',
            a: '개발사의 보안 페이지에 따르면 대화를 녹음하고 저장하는 데 계정은 필요 없습니다. 연결하는 클라우드 어시스턴트에는 각자의 로그인이나 키가 필요하며, 공식 사이트는 기존 Claude 구독으로 Claude가 요약을 쓰는 예를 설명합니다.',
          },
          {
            q: '어떤 AI 어시스턴트가 제 녹음을 검색할 수 있습니까?',
            a: 'README와 공식 사이트에 따르면 MCP 서버를 통해 Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi, Claude Desktop, Mistral Vibe와 그 밖의 모든 MCP 클라이언트를 쓸 수 있습니다. PromptQuorum은 이러한 연결을 시험하지 않았습니다.',
          },
          {
            q: 'Windows와 Linux에서도 받아쓰기가 됩니까?',
            a: '공식 사이트에 따르면 받아쓰기는 Mac에서는 커서 위치에 입력되고 Windows와 Linux에서는 클립보드로 복사됩니다. 릴리스에는 Windows 데스크톱 설치 프로그램이 있으며, Linux용 빌드된 릴리스는 명령줄 도구입니다.',
          },
          {
            q: '녹음한다는 사실을 상대방에게 알려야 합니까?',
            a: '사용자와 다른 참가자가 있는 지역에 따라 다르며, 통화 녹음에 동의를 요구하는 곳이 많습니다. README는 동의 알림과 출처 표시를 보조 수단으로 들고, 개발사는 로컬 처리가 규정 준수 인증은 아니라고 밝힙니다. 본인에게 적용되는 규칙을 확인하십시오. 이는 법률 자문이 아닙니다.',
          },
          {
            q: '오프라인에서도 작동합니까?',
            a: '개발사에 따르면 녹음, 전사, 저장이 컴퓨터에서 실행되므로 녹음과 전사에는 클라우드 서비스가 필요하지 않습니다. 설정 때는 음성 모델을, 업데이트 때는 소프트웨어를 내려받으며, 클라우드 어시스턴트나 요약 도구에는 연결이 필요합니다.',
          },
          {
            q: 'Minutes는 얼마나 자주 업데이트됩니까?',
            a: 'GitHub에는 2026년 11월 9일의 0.33.0, 11월 11일의 0.33.1, 11월 12일의 0.33.2, 11월 17일의 0.34.0이 올라와 있으며, 메인 브랜치 커밋은 2026년 11월 17일까지 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**회의, 음성 메모, 받아쓰기를 자신의 AI 어시스턴트가 검색할 수 있는 단순한 Markdown으로 보관하고 싶고 Apple Silicon Mac이나 Windows를 쓴다면 Minutes는 살펴볼 만합니다.**',
          '서류상으로는 다루는 범위가 넓고 개발도 활발합니다. 2026년 11월 9일부터 17일 사이에 네 번의 릴리스가 있었고 11월 17일에도 커밋이 있었습니다. 개발사에 따르면 전사와 저장은 컴퓨터에 머물고, 공식 사이트에는 연결된 어시스턴트가 출처 파일을 밝히는 답변 예시가 있습니다.',
          '단점도 분명합니다. 저장소는 생긴 지 몇 달밖에 되지 않았고, 회사 주소, 운영자 정보 페이지, 이용약관 페이지를 찾지 못했으며, Intel Mac용으로 빌드된 데스크톱 앱은 없고, Linux는 명령줄만 지원하며, PromptQuorum은 아무것도 검증하지 않았습니다. 의존하기 전에 모든 관계자의 동의를 받아 몇 건의 녹음으로 먼저 시험해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Minutes 웹사이트](https://useminutes.app) — 기능, 플랫폼, 링크. 2026년 11월 18일 확인.',
          '[개인정보 페이지](https://useminutes.app/privacy) — 데이터에 관한 개발사의 설명(2026년 3월 23일자). 2026년 11월 18일 확인.',
          '[보안 페이지](https://useminutes.app/security) — 기기에 남는 것과 네트워크에 닿는 것. 2026년 11월 18일 확인.',
          '[에이전트용 페이지](https://useminutes.app/for-agents) — MCP 설정과 지원 클라이언트. 2026년 11월 18일 확인.',
          '[GitHub 저장소](https://github.com/silverstein/minutes) — 라이선스, 생성일, 마지막 커밋. 2026년 11월 18일 확인.',
          '[README](https://github.com/silverstein/minutes#readme) — 기능, 설치, 개인정보 요약. 2026년 11월 18일 확인.',
          '[설치 가이드](https://github.com/silverstein/minutes/blob/main/docs/install.md) — 플랫폼별 패키지와 요구 사항. 2026년 11월 18일 확인.',
          '[GitHub 릴리스](https://github.com/silverstein/minutes/releases) — 릴리스 날짜, 패키지, 0.34.0 노트. 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트를 나란히 비교합니다.',
          '[Anarlog 리뷰](/ko/power-local-llm/anarlog-review) — 봇 없는 오픈소스 회의 노트.',
          '[Meetily 리뷰](/ko/power-local-llm/meetily-review) — Mac과 Windows용 오픈소스 회의 노트 도구.',
          '[Screenpipe 리뷰](/ko/power-local-llm/screenpipe-review) — 화면과 오디오 캡처로 만드는 메모리 계층.',
          '[Amical 리뷰](/ko/power-local-llm/amical-review) — Mac과 Windows용 무료 오픈소스 받아쓰기.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
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
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/minutes-review-hero-ar.webp',
    title: 'مراجعة Minutes: ذاكرة مجانية مفتوحة المصدر للاجتماعات والمذكرات الصوتية والإملاء لوكلاء الذكاء الاصطناعي',
    seoTitle: 'مراجعة Minutes: ذاكرة مجانية للمحادثات',
    intro:
      'Minutes 0.34.0 تطبيق مجاني برخصة MIT يسجّل الاجتماعات والمذكرات الصوتية والإملاء وينسخها نصيًا ويحفظ كلًا منها في ملف Markdown. وفق ملف README، يجري التسجيل والنسخ النصي والتخزين على حاسوبك، ويمكن لـ Claude Code أو Codex أو Cursor أو أي عميل MCP آخر البحث في هذه الملفات وذكر الملف الذي جاءت منه الإجابة. تعتمد هذه المراجعة على الموقع الرسمي ومستودع GitHub مع دليل التثبيت وملاحظات الإصدار، وقد جرى الاطلاع عليها في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'Minutes تطبيق مجاني برخصة MIT يحفظ الاجتماعات والمذكرات الصوتية والإملاء كملفات Markdown يبحث فيها عملاء MCP. ما تأكد منه.',
    twitterDescription:
      'Minutes: تطبيق مجاني مفتوح المصدر يسجّل الاجتماعات والمذكرات الصوتية والإملاء وينسخها كملفات Markdown لـ Claude وCodex وعملاء MCP الآخرين. ما تأكد منه.',
    audience:
      'من يسجّلون الاجتماعات أو المذكرات الصوتية أو الإملاء ويريدون أن يبحث فيها مساعد مثل Claude Code أو Codex أو Cursor، ومن يفضّلون ملفات Markdown البسيطة على خدمة ملاحظات مستضافة، والمطورون الذين يبحثون عن مصدر محلي لسياق الاجتماعات',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Minutes',
    targetKeywords: [
      'مراجعة Minutes',
      'محاضر اجتماعات محلية مع MCP',
      'نسخ نصي مفتوح المصدر للاجتماعات على Mac',
      'تطبيق إملاء يحفظ بصيغة Markdown',
      'ذاكرة وكلاء الذكاء الاصطناعي من الاجتماعات',
      'بديل مفتوح المصدر لـ Granola',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Minutes تطبيق مجاني ومفتوح المصدر (MIT) يسجّل الاجتماعات والمذكرات الصوتية والإملاء وينسخها نصيًا ويحفظ كلًا منها في ملف Markdown يستطيع Claude أو Codex أو Cursor أو أي عميل MCP آخر البحث فيه.** وفق المطوّر، يجري التسجيل والنسخ النصي والتخزين على حاسوبك. يُثبَّت تطبيق سطح المكتب على أجهزة Mac بمعالج Apple Silicon عبر ملف DMG وعلى Windows عبر ملف إعداد، ويتوفر لنظام Linux إصدار بسطر الأوامر. لم تختبره PromptQuorum، ولم يُعثر على عنوان شركة أو صفحة بيانات المشغّل أو صفحة شروط.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Minutes ولمن هو؟',
        answer:
          'Minutes تطبيق لذاكرة المحادثات يُطوَّر علنًا على GitHub. يناسب من يريدون التسجيلات والنصوص المنسوخة والقرارات والمهام كملفات Markdown بسيطة يبحث فيها مساعد الذكاء الاصطناعي الخاص بهم؛ ويصف المطوّر أن النسخ النصي يجري على حاسوبهم.',
        bullets: [
          'مجاني ومرخّص بـ MIT؛ تطبيق سطح مكتب لأجهزة Mac بمعالج Apple Silicon ولنظام Windows، وإصدار بسطر الأوامر لنظام Linux؛ صدرت أربعة إصدارات بين 9 و17 نوفمبر 2026.',
          'يشمل التسجيل الاجتماعات والمكالمات والمذكرات الصوتية التي تستوردها والإملاء؛ وتنتهي كل محادثة بملف Markdown واحد يضم النص المنسوخ والقرارات والمهام.',
          'يجري النسخ النصي وتمييز المتحدثين على حاسوبك وفق المطوّر؛ والملخصات اختيارية وتأتي من مساعد تختاره، مثل Claude باشتراكك الحالي، أو من نموذج محلي.',
          'يتيح خادم MCP لـ Claude Code وCodex وCursor وGemini CLI وOpenCode وعملاء MCP الآخرين البحث في الملفات وذكر الملف المصدر للإجابة.',
          'أُنشئ المستودع في مارس 2026؛ وصدر الإصدار 0.34.0 في 17 نوفمبر 2026.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيفية الحصول عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نستطع التحقق منه', anchor: 'who-should-not-use' },
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
            text: 'وفق المطوّر، Minutes تطبيق مجاني ومفتوح المصدر يسجّل الاجتماعات والمذكرات الصوتية والإملاء وينسخها نصيًا على حاسوبك ويحفظها كملفات Markdown يستطيع Claude وCodex وعملاء MCP الآخرون البحث فيها.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل مجلدًا من الملفات النصية البسيطة يمتلئ من محادثاتك: تسجّل أو تُملي، فيحوّلها Minutes إلى نص، وتصبح كل محادثة ملفًا واحدًا فيه النص المنسوخ والقرارات والمهام. يقرأ مساعد الذكاء الاصطناعي هذا المجلد حين تسأله، ويشير إلى الملف الذي تقف خلفه الإجابة.',
          },
        ],
        items: [
          'ثبّت تطبيق سطح المكتب من صفحة الإصدارات على GitHub أو عبر Homebrew: ملف DMG لأجهزة Mac بمعالج Apple Silicon وملف إعداد لنظام Windows؛ ويتوفر لنظام Linux برنامج جاهز بسطر الأوامر.',
          'يجري التسجيل والنسخ النصي وتمييز المتحدثين والتخزين على حاسوبك وفق المطوّر؛ ولا يذهب إلى مساعد سحابي أو أداة تلخيص سحابية إلا السياق الذي تأذن به.',
          'اربط مساعد ذكاء اصطناعي عبر خادم MCP الذي يشغّله ملف README بأمر npx، ثم اسأله عن محادثاتك المسجّلة.',
          'الملخصات اختيارية؛ وإذا ربطت مساعدًا سحابيًا فإن سياق النص المنسوخ الذي تأذن به يُرسل إلى ذلك المزوّد وفق شروطه.',
          'لم تختبر PromptQuorum التطبيق، لذا فإن دقة النسخ النصي وتمييز المتحدثين وجودة الإجابات غير متحقق منها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'قد يتطلب تسجيل الآخرين موافقتهم بحسب مكان وجودك ووجودهم. يذكر README تذكيرات الموافقة وعلامات المصدر كوسائل مساعدة، وتقول صفحة الأمان لدى المطوّر إن المعالجة المحلية ليست شهادة امتثال؛ تحقق من القواعد التي تنطبق عليك قبل تسجيل مكالمة. هذا ليس استشارة قانونية.',
          },
          {
            type: 'note',
            text: 'تقول صفحة الخصوصية لدى المطوّر، المؤرخة في 23 مارس 2026، إنه لا توجد قياسات عن بُعد ولا تقارير أعطال ولا حساب، بينما تضيف صفحة الأمان أن الإعداد والتحديثات قد تنزّل نماذج وبرمجيات. لم تفحص PromptQuorum حركة الشبكة، ولا تستطيع تأكيد أي من العبارتين بما يتجاوز ما يكتبه المطوّر.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Minutes تطبيق لذاكرة المحادثات برخصة MIT يسجّل الاجتماعات والمذكرات الصوتية والإملاء وينسخها نصيًا ويخزّن كلًا منها في ملف Markdown، ومتاح لأنظمة macOS وWindows وLinux.**',
          'يُطوَّر علنًا على [github.com/silverstein/minutes](https://github.com/silverstein/minutes) ويصفه مستودعه بأنه بديل محلي أولًا لخدمات الملاحظات المستضافة مثل Granola وOtter، ويمكن لـ Claude Code وCodex وCursor وأي عميل MCP الاستعلام عنه. أُنشئ المستودع في مارس 2026؛ وظهر الإصدار 0.34.0 في 17 نوفمبر 2026 بعد الإصدارات من 0.33.0 إلى 0.33.2 بين 9 و12 نوفمبر، وكان آخر إيداع في الفرع الرئيسي في 17 نوفمبر 2026 أيضًا، فالتطوير نشط ولا ينطبق تحذير المشروع المهجور. يذكر README اسم Mat Silverstein مؤسس X1 Wealth بوصفه المطوّر؛ ولم تجد PromptQuorum عنوان شركة أو صفحة بيانات المشغّل أو إشارة إلى القانون الواجب التطبيق، لذا لا تستطيع القول في أي بلد يقع المشروع.',
          'وفق README والموقع، يحفظ Minutes كل محادثة كملف Markdown مع بيانات أولية منظمة في مجلد تملكه. ويذكر تطبيق سطح مكتب يضم التسجيل من شريط القوائم والإملاء ولوحة Recall، وأداة بسطر الأوامر، وخادم MCP، وإضافة لـ Claude Code، وحزمة SDK بلغة TypeScript. ويعرض الموقع إجابات من مساعدين متصلين تذكر الملف الذي جاءت منه.',
          'لم تشغّل PromptQuorum التطبيق ولم تتحقق من دقة النسخ النصي أو تمييز المتحدثين أو جودة الإملاء أو جودة إجابات المساعدين المتصلين.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**تثبّت تطبيق Minutes لسطح المكتب من صفحة الإصدارات على GitHub أو، على Mac، عبر Homebrew؛ ويتوفر لنظام Windows ملف إعداد ولنظام Linux برنامج بسطر الأوامر.**',
          'يعرض الإصدار v0.34.0 ملف DMG لأجهزة Mac بمعالج Apple Silicon، وملف إعداد EXE ونسخة محمولة لنظام Windows، وبرنامج Linux بسطر الأوامر، وإضافة لـ Claude Desktop. ويوثّق README أيضًا التثبيت عبر Homebrew وCargo، ويقول دليل التثبيت إن cask الخاص بـ Homebrew وقناة التحديثات يتبعان إصدار Apple Silicon بينما تبني أجهزة Mac بمعالج Intel من الشيفرة المصدرية.',
        ],
        columns: ['المنصة', 'الحزمة'],
        rows: [
          { 'المنصة': 'macOS (Apple Silicon)', 'الحزمة': 'DMG أو Homebrew cask' },
          { 'المنصة': 'macOS (Intel)', 'الحزمة': 'البناء من المصدر' },
          { 'المنصة': 'Windows (x64)', 'الحزمة': 'ملف إعداد EXE' },
          { 'المنصة': 'Linux (x64)', 'الحزمة': 'برنامج CLI، بلا تطبيق سطح مكتب' },
          { 'المنصة': 'Claude Desktop', 'الحزمة': 'إضافة MCPB' },
          { 'المنصة': '[الشيفرة المصدرية](https://github.com/silverstein/minutes)', 'الحزمة': 'cargo install minutes-cli' },
        ],
        note: 'نزّل الحزم من [صفحة إصدارات GitHub](https://github.com/silverstein/minutes/releases/latest). لم تشغّل PromptQuorum برامج التثبيت؛ ويصف دليل التثبيت cask الخاص بـ Mac وقناة التحديثات بأنهما موثّقان (notarized)، ولم تتحقق PromptQuorum مما إذا كان مثبّت Windows موقّعًا. أعادت صفحات الموقع الخاصة بـ[الشروط](https://useminutes.app/terms) و[نبذة عنا](https://useminutes.app/about) و[بيانات المشغّل](https://useminutes.app/imprint) و[التواصل](https://useminutes.app/contact) الرمز «404» في 18 نوفمبر 2026.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يحتاج Minutes إلى جهاز Mac أو حاسوب Windows أو حاسوب Linux حديث؛ ولا ينشر README ولا دليل التثبيت حدًا أدنى للذاكرة أو لوحدة معالجة الرسوميات.**',
          'القائمة مأخوذة من دليل التثبيت وREADME. تُنزَّل نماذج الصوت أثناء الإعداد، ويغيّر النموذج الذي تختاره الحمل على حاسوبك. لم تقِس PromptQuorum استهلاك الذاكرة أو السرعة أو مساحة القرص.',
        ],
        columns: ['البند', 'القيمة المذكورة'],
        rows: [
          { 'البند': 'macOS', 'القيمة المذكورة': 'DMG لـ Apple Silicon؛ ذُكر macOS 15+' },
          { 'البند': 'Windows', 'القيمة المذكورة': 'x64؛ ملف إعداد EXE' },
          { 'البند': 'Linux', 'القيمة المذكورة': 'CLI بنظام x64؛ glibc 2.39+' },
          { 'البند': 'خادم MCP', 'القيمة المذكورة': 'يوصى بـ Node.js 22' },
          { 'البند': 'نماذج الصوت', 'القيمة المذكورة': 'Whisper؛ وParakeet على Apple Silicon' },
          { 'البند': 'الذاكرة وGPU', 'القيمة المذكورة': 'غير منشور' },
        ],
        note: 'يحتاج برنامج Linux الجاهز إلى glibc 2.39 أو أحدث ومكتبتَي ALSA وPipeWire؛ ويذكر دليل التثبيت Ubuntu 24.04 نظامًا جرى التحقق منه ويقول إن Debian 12 يجب أن يبني من المصدر. وmacOS 15 هو الإصدار الذي يذكره دليل التثبيت لتطبيق سطح المكتب.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**Minutes هو أولًا مسجّل وناسخ نصي يحفظ المحادثات بصيغة Markdown؛ وتحيط به ميزات Recall والإملاء ووصول الوكلاء.** كل ما يلي ادعاءات من المطوّر مأخوذة من README والموقع ودليل التثبيت.',
        ],
        items: [
          'التسجيل: سجّل الاجتماعات والمكالمات من الميكروفون وصوت النظام، أو استورد مذكرات صوتية (مثلًا من الهاتف عبر مجلد متزامن)، أو أملِ بإبقاء مفتاح مضغوطًا.',
          'النسخ النصي: يعمل على حاسوبك عبر whisper.cpp؛ ويضم تطبيق Mac الموقّع أيضًا إضافة صوتية Parakeet، ويأتي تمييز المتحدثين من نماذج محلية لفصل المتحدثين.',
          'المخرجات: تصبح كل محادثة ملف Markdown مع ترويسة YAML تسرد العنوان والتاريخ والمدة والقرارات والمهام، ويعمل مع Obsidian وLogseq وgrep وأي أداة Markdown.',
          'الإملاء: اضغط مفتاحًا وتحدّث؛ على Mac يُكتب النص عند المؤشر، وعلى Windows وLinux يذهب إلى الحافظة، ويُحفظ كل إملاء أيضًا كملف Markdown. وتعالج قواعد على جهازك التصحيح الذاتي والأوامر الصوتية، بحسب الموقع.',
          'Recall: لوحة في تطبيق سطح المكتب تسأل فيها عن تسجيلاتك؛ وتضيف ملاحظات الإصدار 0.34.0 ما يصل إلى أربع علامات تبويب منفصلة للمحادثات.',
          'الوكلاء: خادم MCP وأداة بسطر الأوامر وحزمة SDK بلغة TypeScript وإضافة لـ Claude Code تتيح لـ Claude Code وCodex وCursor وGemini CLI وOpenCode وPi وعملاء آخرين البحث في الاجتماعات والمذكرات والإملاء ومتابعة نسخ نصي مباشر.',
          'الموافقة والخصوصية: يذكر README تذكيرات الموافقة والإقرار وعلامات المصدر، ويقول إن الاجتماعات الحساسة تُحفظ بلا صوت وبوصول مقيّد افتراضيًا.',
          'عرض تجريبي: أمر تجريبي يضيف اجتماعات نموذجية لتجرّب ربط الوكيل دون ميكروفون.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**وفق المطوّر، يجري التسجيل والنسخ النصي وتمييز المتحدثين والتخزين على حاسوبك، ولا يغادره النص إلا حين ترسل سياقًا مأذونًا به إلى مساعد سحابي أو أداة تلخيص سحابية؛ لم تفحص PromptQuorum حركة الشبكة ولا تستطيع تأكيد ذلك.**',
          'تقول صفحة الخصوصية المؤرخة في 23 مارس 2026 إن Minutes بلا تحليلات ولا قياسات عن بُعد ولا تقارير أعطال ولا حساب، ولا يشغّل خادمًا خاصًا به. وتضيف صفحة الأمان أن الإعداد والتحديثات قد تنزّل نماذج وبرمجيات، وأن الموقع يحصي الزيارات عبر Cloudflare Web Analytics بمعزل عن تطبيق سطح المكتب. لم تتحقق PromptQuorum من سلوك قناة التحديثات في الإصدار الحالي.',
          'إذا ربطت مساعدًا سحابيًا أو أداة تلخيص سحابية، يُرسل السياق الذي تأذن به إلى ذلك المزوّد وفق شروطه؛ ويقول المطوّر إن النموذج المحلي، أو الاستغناء عن الملخصات، يُبقي سير العمل على جهازك. والملفات التي تنسخها إلى مجلد متزامن تتبع إعدادات تلك الخدمة.',
          'وفق صفحة الأمان، تُكتب ملفات Markdown بأذونات للمالك فقط، والشيفرة برخصة MIT ومعلنة، فيمكن تدقيق تدفق البيانات. ويؤكد المطوّر أن المعالجة المحلية ليست شهادة امتثال؛ وتبقى موافقة التسجيل والاحتفاظ بالبيانات مسؤوليتك.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Minutes من يريدون حفظ الاجتماعات والمذكرات الصوتية والإملاء كملفات Markdown بسيطة يبحث فيها مساعد الذكاء الاصطناعي الخاص بهم.**',
        ],
        items: [
          'من يعملون أصلًا مع Claude Code أو Codex أو Cursor أو عميل MCP آخر ويريدون أن يبحث في محادثاتهم المسجّلة.',
          'المستخدمون الذين يفضّلون ملفات بسيطة يفتحونها ويبحثون فيها وينسخونها احتياطيًا على مساحة عمل خدمة ملاحظات مستضافة.',
          'مستخدمو Mac بمعالج Apple Silicon ومستخدمو Windows الذين يريدون تطبيقًا مجانيًا واحدًا لتسجيل الاجتماعات والإملاء.',
          'القراء الذين يفضّلون مشروعًا شيفرته ورخصته معلنتان.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نستطع التحقق منه',
        content: [
          '**لا يناسب Minutes بعض الحالات، وتبقى عدة تفاصيل غير متحقق منها.**',
        ],
        items: [
          'لا يناسب: مستخدمي Mac بمعالج Intel الذين لا يريدون البناء من المصدر، لأن الإصدار لا يعرض إلا ملف DMG لـ Apple Silicon.',
          'لا يناسب: من يحتاجون إلى تطبيق سطح مكتب لنظام Linux؛ فإصدار Linux برنامج بسطر الأوامر.',
          'غير متحقق منه: دقة النسخ النصي وتمييز المتحدثين وجودة الإملاء والسرعة وجودة إجابات المساعدين المتصلين. لم تشغّل PromptQuorum التطبيق.',
          'غير متحقق منه: ادعاء غياب القياسات عن بُعد وغياب طلبات الشبكة إلى خوادم المطوّر، إلى جانب قناة التحديثات التي يصفها دليل التثبيت؛ لم تفحص PromptQuorum حركة الشبكة.',
          'غير متحقق منه: ما إذا كان مثبّت Windows موقّعًا، وكم ذاكرة يحتاج نموذج صوتي بعينه.',
          'غير متحقق منه: أقوال المطوّر عن التعامل مع الموافقة والتخزين المقيّد للاجتماعات الحساسة.',
          'غير متحقق منه: من يشغّل المشروع، وفي أي بلد يقع، وكم شخصًا يستخدمه. لم يُعثر على عنوان شركة أو صفحة بيانات المشغّل أو صفحة شروط، ولم تبحث PromptQuorum عن مراجعات مستقلة.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Minutes مقابل البدائل',
        itemHeadings: true,
        content: [
          '**يتداخل Minutes مع أدوات ملاحظات الاجتماعات وتطبيقات الإملاء وأدوات ذاكرة الوكلاء؛ ولم تقارنه PromptQuorum بها عمليًا.** الأدوات التالية موجودة في الدليل وتوصف اعتمادًا على مراجعاتها الخاصة.',
        ],
        columns: ['الأداة', 'ما ورد في المصادر'],
        rows: [
          { 'الأداة': 'Minutes', 'ما ورد في المصادر': 'MIT؛ Mac/Windows/Linux؛ ذاكرة Markdown للوكلاء' },
          { 'الأداة': '[Anarlog](/ar/power-local-llm/anarlog-review)', 'ما ورد في المصادر': 'MIT؛ Mac/Windows/Linux؛ دفتر اجتماعات بلا بوت' },
          { 'الأداة': '[Meetily](/ar/power-local-llm/meetily-review)', 'ما ورد في المصادر': 'MIT؛ Mac/Windows؛ ملاحظات اجتماعات' },
          { 'الأداة': '[Screenpipe](/ar/power-local-llm/screenpipe-review)', 'ما ورد في المصادر': 'شيفرة مصدرية متاحة؛ Mac/Windows/Linux؛ ذاكرة الشاشة والصوت' },
          { 'الأداة': '[Amical](/ar/power-local-llm/amical-review)', 'ما ورد في المصادر': 'MIT؛ Mac/Windows؛ إملاء' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى حساب لاستخدام Minutes؟',
            a: 'لا حاجة إلى حساب لتسجيل المحادثات وتخزينها، وفق صفحة الأمان لدى المطوّر. أما المساعد السحابي الذي تربطه فله تسجيل دخول أو مفتاح خاص به؛ ويصف الموقع مثلًا كتابة Claude للملخصات باشتراك Claude قائم.',
          },
          {
            q: 'أي مساعدي ذكاء اصطناعي يستطيعون البحث في تسجيلاتي؟',
            a: 'وفق README والموقع: Claude Code وCodex وCursor وGemini CLI وOpenCode وPi وClaude Desktop وMistral Vibe عبر خادم MCP، إضافة إلى أي عميل MCP آخر. لم تختبر PromptQuorum هذه الاتصالات.',
          },
          {
            q: 'هل يعمل الإملاء على Windows وLinux؟',
            a: 'وفق الموقع، يُكتب الإملاء عند المؤشر على Mac ويُنسخ إلى الحافظة على Windows وLinux. يعرض الإصدار مثبّت سطح مكتب لنظام Windows؛ أما على Linux فالإصدار الجاهز هو أداة سطر الأوامر.',
          },
          {
            q: 'هل يجب أن أخبر الناس بأنني أسجّلهم؟',
            a: 'يتوقف ذلك على أماكن وجودك ووجود المشاركين الآخرين، وكثير من الأماكن تشترط الموافقة لتسجيل مكالمة. يذكر README تذكيرات الموافقة وعلامات المصدر كوسائل مساعدة، ويقول المطوّر إن المعالجة المحلية ليست شهادة امتثال. تحقق من القواعد التي تنطبق عليك؛ هذا ليس استشارة قانونية.',
          },
          {
            q: 'هل يعمل دون اتصال بالإنترنت؟',
            a: 'وفق المطوّر، يجري التسجيل والنسخ النصي والتخزين على حاسوبك، فلا يحتاج التسجيل والنسخ إلى خدمة سحابية. ينزّل الإعداد نماذج الصوت، وتنزّل التحديثات برمجيات، ويحتاج المساعد السحابي أو أداة التلخيص السحابية إلى اتصال.',
          },
          {
            q: 'كم مرة يُحدَّث Minutes؟',
            a: 'يعرض GitHub الإصدار 0.33.0 في 9 نوفمبر 2026، و0.33.1 في 11 نوفمبر، و0.33.2 في 12 نوفمبر، و0.34.0 في 17 نوفمبر، مع إيداعات في الفرع الرئيسي حتى 17 نوفمبر 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Minutes نظرة إن أردت حفظ الاجتماعات والمذكرات الصوتية والإملاء كملفات Markdown بسيطة يبحث فيها مساعد الذكاء الاصطناعي الخاص بك، وكنت تستخدم Mac بمعالج Apple Silicon أو Windows.**',
          'على الورق يغطي الكثير، والتطوير نشط: أربعة إصدارات بين 9 و17 نوفمبر 2026 وإيداع في 17 نوفمبر 2026. ويقول المطوّر إن النسخ النصي والتخزين يبقيان على حاسوبك، ويعرض الموقع إجابات من مساعدين متصلين تذكر الملف الذي جاءت منه.',
          'والمقايضات حقيقية: المستودع عمره أشهر قليلة فقط، ولم يُعثر على عنوان شركة أو صفحة بيانات المشغّل أو صفحة شروط، وليس لأجهزة Mac بمعالج Intel تطبيق سطح مكتب جاهز، وLinux بسطر الأوامر فقط، ولم تختبر PromptQuorum شيئًا. جرّبه على بضعة تسجيلات، بموافقة الجميع، قبل أن تعتمد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Minutes](https://useminutes.app) — الميزات والمنصات والروابط، جرى الاطلاع عليه في 18 نوفمبر 2026.',
          '[صفحة الخصوصية](https://useminutes.app/privacy) — أقوال المطوّر عن البيانات، المؤرخة في 23 مارس 2026، جرى الاطلاع عليها في 18 نوفمبر 2026.',
          '[صفحة الأمان](https://useminutes.app/security) — ما يبقى على الجهاز وما يلامس الشبكة، جرى الاطلاع عليها في 18 نوفمبر 2026.',
          '[صفحة الوكلاء](https://useminutes.app/for-agents) — إعداد MCP والعملاء المدعومون، جرى الاطلاع عليها في 18 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/silverstein/minutes) — الرخصة وتاريخ الإنشاء وآخر إيداع، جرى الاطلاع عليه في 18 نوفمبر 2026.',
          '[README](https://github.com/silverstein/minutes#readme) — الميزات والتثبيت وملخص الخصوصية، جرى الاطلاع عليه في 18 نوفمبر 2026.',
          '[دليل التثبيت](https://github.com/silverstein/minutes/blob/main/docs/install.md) — الحزم حسب المنصة والمتطلبات، جرى الاطلاع عليه في 18 نوفمبر 2026.',
          '[إصدارات GitHub](https://github.com/silverstein/minutes/releases) — تواريخ الإصدارات والحزم وملاحظات 0.34.0، جرى الاطلاع عليها في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أدوات الصوت المحلية مقارنة](/ar/power-local-llm/local-llm-voice-audio-compared) — تحويل النص إلى كلام والتعرف على الكلام ووكلاء الصوت جنبًا إلى جنب.',
          '[مراجعة Anarlog](/ar/power-local-llm/anarlog-review) — دفتر اجتماعات مفتوح المصدر بلا بوت.',
          '[مراجعة Meetily](/ar/power-local-llm/meetily-review) — أداة ملاحظات اجتماعات مفتوحة المصدر لأجهزة Mac وWindows.',
          '[مراجعة Screenpipe](/ar/power-local-llm/screenpipe-review) — طبقة ذاكرة مبنية من التقاط الشاشة والصوت.',
          '[مراجعة Amical](/ar/power-local-llm/amical-review) — إملاء مجاني ومفتوح المصدر لأجهزة Mac وWindows.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
}

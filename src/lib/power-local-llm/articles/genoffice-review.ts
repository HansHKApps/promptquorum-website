// GenOffice Review: Open-Source AI Office Suite for Word, Excel and PowerPoint Files
// Slug: genoffice-review
// Companion to: presenton-review, solomd-review, oleafly-review (closest reviewed document-creation tools; no other desktop office suite has a review yet)
// Sources (all read 2026-11-20, no hands-on testing): genoffice.ai (homepage, FAQ, download buttons), GitHub repository genspark-ai/genoffice (README, PRIVACY.md,
// LICENSE, ee/README.md), GitHub API (repo, releases, commits), release v0.13.615, and the Genspark terms linked from the genoffice.ai footer. The request came
// from the site owner, not from the maker. The Genspark privacy policy returned HTTP 403 and was not read.
// Last upstream update 2026-11-19 (latest release v0.13.615 and last push, GitHub API) => no stale warning.
// Locality: hybrid (document work is local; AI calls go to the chosen provider; a local OpenAI-compatible server is possible per README but untested here).
// Theme: 'Productivity & Knowledge Tools' (as presenton-review).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/genoffice-review-hero-en.webp',
    title: 'GenOffice Review: Open-Source AI Office Suite for Word, Excel and PowerPoint Files',
    seoTitle: 'GenOffice Review: Open-Source AI Office Suite, Privacy',
    intro:
      'GenOffice is a free, open-source desktop office suite from Genspark that opens and saves real .docx, .xlsx and .pptx files and edits PDF, Markdown and HTML, with an AI agent built into every editor. The documents are handled on your computer, but the AI calls go to a provider you choose, so it is a hybrid tool rather than a local-AI one. This review is based on the maker\'s website, README, privacy notice and GitHub releases, checked on 20 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'GenOffice is a free open-source desktop office suite with built-in AI for Word, Excel and PowerPoint files. Local editing, cloud AI by default, privacy.',
    twitterDescription:
      'GenOffice review: free open-source AI office suite for macOS, Windows and Linux. Files are edited locally, AI runs at the provider you pick. What is confirmed.',
    audience:
      'Office users and teams who want an open-source alternative to Microsoft Office with AI, and anyone who needs to know whether it can run on local models or sends data to the cloud',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GenOffice',
    targetKeywords: [
      'GenOffice review',
      'GenOffice AI office suite',
      'open-source AI office suite',
      'GenOffice local model',
      'GenOffice privacy',
      'GenOffice vs Microsoft Office',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**GenOffice is a free, open-source desktop office suite for macOS, Windows and Linux that edits real Word, Excel and PowerPoint files with an AI agent beside the document.** Files are opened, edited and saved on your computer, but the AI features need a network connection and send requests to Genspark or to the provider whose API key you add. A local model server is possible only through a custom OpenAI-compatible endpoint, which PromptQuorum has not tried.',
    quickAnswerTop: {
      en: {
        question: 'What is GenOffice and is its AI local?',
        answer:
          'GenOffice is an Apache 2.0 desktop suite with Docs, Sheets, Slides, PDF, HTML and Markdown editors. The editing is local; the AI is cloud-based by default, through a Genspark sign-in or your own API key.',
        bullets: [
          'Platforms: macOS (Apple Silicon and Intel), Windows (x64 and Arm), Linux (.deb, .rpm, AppImage).',
          'Price: the apps are free; AI uses Genspark credits or your own provider key.',
          'Formats: .docx, .xlsx, .pptx, PDF, Markdown and HTML, plus converted copies of legacy and OpenDocument files.',
          'Automation: a genoffice command line and MCP server for coding agents.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
      { label: 'Features', anchor: 'features' },
      { label: 'Local or Cloud: Where Your Data Goes', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'Limits and What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Competitors and Alternatives', anchor: 'alternatives' },
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
            text: 'GenOffice is a free desktop office suite that edits Word, Excel, PowerPoint and PDF files on your computer and adds an AI agent that, by default, runs at a cloud provider.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as an open-source alternative to Microsoft Office with an AI panel in every editor. Your documents stay on your machine; what the AI sees is sent to whichever provider you connect.',
          },
        ],
        items: [
          'The download page and GitHub release offer signed installers for macOS and Windows and .deb, .rpm and AppImage packages for Linux (README).',
          'The code is Apache 2.0, except an ee/ folder for future enterprise modules, which has its own license and is currently empty apart from a notice.',
          'The README says a custom OpenAI-compatible endpoint can point at "local model servers"; it names no Ollama or LM Studio setup, and its FAQ says the AI features need a network connection.',
          'Official builds send limited usage statistics by default, which you can turn off in Settings (PRIVACY.md).',
          'PromptQuorum has not tested the app. The repository was created on 31 July 2026, so it is a young project.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI edits can be wrong. The maker\'s site advises checking complex formatting and important files before you share them. This is general information, not legal advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**GenOffice is an Electron-based office suite with six editors (Docs, Sheets, Slides, PDF, HTML and Markdown) that saves back into the real file formats.**',
          'The project is published by Genspark under the genspark-ai GitHub organization. The latest release is version 0.13.615, published on 19 November 2026, and the last push to the repository was the same day, so development is ongoing and no stale-project warning applies. Earlier releases came on 12, 4 and 2 November and on 30 October 2026, which shows a fast release pace.',
          'Per the README, edits to a .docx are applied as narrow patches so the parts you did not touch survive byte for byte, and AI edits arrive as tracked changes or diffs with one-click rollback. The maker also says the app can search your folders from a local index, answer questions over starred files with citations, and ship a command line, an agent skill and an MCP server so coding agents such as Claude Code, Codex and Cursor can create and edit Office files.',
          'These descriptions are maker statements. PromptQuorum has not run the app and has not measured how well it handles real Word, Excel or PowerPoint files.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install GenOffice with a normal download from the official website or the GitHub releases page; no terminal is needed.**',
          'The v0.13.615 release lists a .dmg for Apple Silicon and one for Intel, Windows setup .exe files for x64 and Arm, an AppImage, a .deb and an .rpm. The README says the macOS and Windows installers are signed and that the Linux packages need x86_64 and glibc 2.34 or newer. The AppImage also needs the FUSE 2 runtime.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[macOS](https://genoffice.ai/#download)', 'How to get it': '.dmg for Apple Silicon or Intel, macOS 11+' },
          { 'Platform': '[Windows](https://genoffice.ai/#download)', 'How to get it': 'Setup .exe for x64 (Windows 10+) or Arm (Windows 11)' },
          { 'Platform': '[Linux](https://genoffice.ai/#download)', 'How to get it': '.deb, .rpm or AppImage, x86_64' },
          { 'Platform': '[Website](https://genoffice.ai)', 'How to get it': 'Official site, FAQ and downloads' },
          { 'Platform': '[Privacy notice](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md)', 'How to get it': 'Maker\'s notice, last updated November 12, 2026' },
          { 'Platform': '[GitHub](https://github.com/genspark-ai/genoffice)', 'How to get it': 'Source code and release downloads' },
        ],
        note: 'The maker states no RAM or GPU figures. The AI runs at the provider unless you connect your own server.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**GenOffice combines document editors with an AI agent, local file search and automation hooks.** All items below are maker claims from the website and README.',
        ],
        items: [
          'Docs, Sheets and Slides open and save real .docx, .xlsx and .pptx files; Sheets keeps live formulas and charts.',
          'PDF editing in place, and PDF to Word, Excel or PowerPoint conversion that the maker says runs on the device, with system OCR for scans on macOS and Windows.',
          'Markdown and HTML editors with the same AI panel, and local export to Word.',
          'Home-screen search over your documents from a local index, and an Ask AI feature that answers from starred files with citations.',
          'An optional reranking step for search that sends excerpts to a model endpoint you choose; it is off by default.',
          'A genoffice command line, an agent skill and an MCP server (29 tools per the README) for coding agents.',
          'Legacy .doc, .xls and .ppt, OpenDocument and Hancom files open as converted OOXML copies; saving never writes the old format.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Local or Cloud: Where Your Data Goes',
        content: [
          '**Document editing is local, but the AI is cloud-based unless you connect your own server.** This is the most important point for readers who want local AI.',
          'Per the README and FAQ, opening, editing, saving, converting PDFs and indexing files for search happen on your computer. The AI features need a network connection and use either a Genspark sign-in, which routes requests through the Genspark proxy to Claude, GPT and Gemini models, or your own API key for providers such as OpenAI, Anthropic, Google, DeepSeek and OpenRouter.',
          'The README also lists a custom slot for any OpenAI-compatible endpoint "including local model servers". It does not name Ollama or LM Studio, and PromptQuorum has not tried a local model with GenOffice, so treat local use as possible but unverified.',
          'PRIVACY.md says official packaged builds send limited Google Analytics 4 events by default, from the first launch, and that you can opt out in Settings. It lists events such as app launch and file type, and says analytics never include document content, file names or paths. Optional search reranking sends up to 20 excerpts of document text to the endpoint you select. PromptQuorum has not verified these statements.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**GenOffice fits people who want an open-source Office alternative with AI and accept cloud AI calls.**',
        ],
        items: [
          'Users who work in .docx, .xlsx and .pptx and want an AI panel without a Microsoft 365 subscription.',
          'Developers who want their coding agent to create or edit Office files through a command line or MCP.',
          'Teams who can connect their own OpenAI-compatible server and want to test it with an Office editor.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limits and What We Could Not Verify',
        content: [
          '**GenOffice has stated limits, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who needs AI to run fully offline out of the box. The default AI paths are cloud-based and the README does not describe a bundled model.',
          'Stated limit: the maker\'s FAQ says complex formatting can vary and recommends checking important files before sharing them.',
          'Stated limit: legacy and OpenDocument files are imports only, converted one way into OOXML, and can lose features the old format had.',
          'Unverified: how well the AI edits documents, and how faithfully Word, Excel and PowerPoint files round-trip. PromptQuorum has not tested either.',
          'Unverified: Genspark credit prices and limits. No price for the credits was read.',
          'Unverified: the Genspark privacy policy, which returned an access error when PromptQuorum tried to open it. PromptQuorum found no privacy page on the genoffice.ai site.',
          'Not checked: independent reviews and user reports. The project is young, with the repository created on 31 July 2026.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Competitors and Alternatives',
        itemHeadings: true,
        content: [
          '**No other desktop office suite has a PromptQuorum review yet. The tools below are the closest reviewed document-creation tools, and each covers only part of what GenOffice does.**',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[Presenton](/power-local-llm/presenton-review)',
            'Platforms': 'macOS, Linux, Docker, web',
            'Price / license': 'Free desktop / Apache 2.0',
            'Key difference': 'Generates slide decks only; supports Ollama and LM Studio',
          },
          {
            'App': '[SoloMD](/power-local-llm/solomd-review)',
            'Platforms': 'macOS, Windows, Linux, iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Markdown notes app with local-model detection; Word only via import and export',
          },
          {
            'App': '[Oleafly](/power-local-llm/oleafly-review)',
            'Platforms': 'macOS, Windows, Linux',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'LaTeX, Typst and Markdown papers with optional AI agents',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is GenOffice free?',
            a: 'The apps are free, open-source and ad-free per the website and README FAQ. The AI features use Genspark credits or your own provider key, and your provider may charge usage fees.',
          },
          {
            q: 'Can GenOffice use a local model?',
            a: 'Possibly. The README says a custom OpenAI-compatible endpoint can be a local model server, but it names no Ollama or LM Studio setup, and PromptQuorum has not tested it.',
          },
          {
            q: 'Does it work offline?',
            a: 'Editing, saving and PDF conversion work without the AI per the FAQ. The AI features need a network connection unless your own server is reachable.',
          },
          {
            q: 'Can I turn the AI panel off?',
            a: 'Yes, according to the README: Settings has a switch to hide the AI sidebar, though an explicit AI action still opens it.',
          },
          {
            q: 'Can Claude Code or Cursor use it?',
            a: 'The README says yes, through the genoffice command line with an installable skill, or through the MCP server. Both run on your machine; only search and media calls go to the configured provider.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**GenOffice is worth a look if you want an open-source Office alternative with built-in AI and can accept cloud AI calls.**',
          'On paper it covers a lot: real Word, Excel and PowerPoint formats, PDF editing, signed installers on three systems, a command line and MCP for agents, and active development with a release on 19 November 2026.',
          'The trade-offs are clear from the maker\'s own pages: the AI is cloud-based by default, local models are an untested custom-endpoint option, official builds send usage statistics unless you opt out, and the project is only a few months old. PromptQuorum has not tested the app, so try it on copies of your files first.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[GenOffice website](https://genoffice.ai) — maker\'s description, FAQ and download buttons, checked 20 November 2026.',
          '[GenOffice GitHub repository](https://github.com/genspark-ai/genoffice) — README, license and enterprise folder notice, checked 20 November 2026.',
          '[GenOffice privacy notice](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md) — analytics and search reranking, last updated November 12, 2026, checked 20 November 2026.',
          '[Release v0.13.615](https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615) — latest version, date and installer files, checked 20 November 2026.',
          '[Genspark terms](https://www.genspark.ai/terms) — linked from the genoffice.ai footer; company name and governing law, checked 20 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Presenton Review](/power-local-llm/presenton-review) — Open-source AI slide generator that works with local models.',
          '[SoloMD Review](/power-local-llm/solomd-review) — Markdown notes app with local-model support.',
          '[Oleafly Review](/power-local-llm/oleafly-review) — Open-source editor for LaTeX, Typst and Markdown papers.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/genoffice-review-hero-de.webp',
    title: 'GenOffice-Rezension: Open-Source-KI-Office-Suite für Word-, Excel- und PowerPoint-Dateien',
    seoTitle: 'GenOffice-Rezension: Open-Source-KI-Office, Datenschutz',
    intro:
      'GenOffice ist eine kostenlose, quelloffene Desktop-Office-Suite von Genspark, die echte .docx-, .xlsx- und .pptx-Dateien öffnet und speichert sowie PDF, Markdown und HTML bearbeitet, mit einem KI-Agenten in jedem Editor. Die Dokumente werden auf Ihrem Computer verarbeitet, die KI-Aufrufe gehen jedoch an einen Anbieter Ihrer Wahl; es ist also ein hybrides und kein rein lokales KI-Werkzeug. Diese Rezension stützt sich auf die Website des Herstellers, die README, die Datenschutzhinweise und die GitHub-Releases, geprüft am 20. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'GenOffice ist eine kostenlose Open-Source-Office-Suite mit KI für Word-, Excel- und PowerPoint-Dateien. Lokale Bearbeitung, KI standardmäßig in der Cloud.',
    twitterDescription:
      'GenOffice-Rezension: kostenlose Open-Source-KI-Office-Suite für macOS, Windows und Linux. Dateien lokal bearbeitet, KI beim gewählten Anbieter. Was belegt ist.',
    audience:
      'Büronutzer und Teams, die eine Open-Source-Alternative zu Microsoft Office mit KI suchen, und alle, die wissen müssen, ob es mit lokalen Modellen läuft oder Daten in die Cloud sendet',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GenOffice',
    targetKeywords: [
      'GenOffice Rezension',
      'GenOffice KI-Office-Suite',
      'Open-Source-KI-Office-Suite',
      'GenOffice lokales Modell',
      'GenOffice Datenschutz',
      'GenOffice vs. Microsoft Office',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**GenOffice ist eine kostenlose, quelloffene Desktop-Office-Suite für macOS, Windows und Linux, die echte Word-, Excel- und PowerPoint-Dateien mit einem KI-Agenten neben dem Dokument bearbeitet.** Dateien werden auf Ihrem Computer geöffnet, bearbeitet und gespeichert, die KI-Funktionen benötigen aber eine Netzwerkverbindung und senden Anfragen an Genspark oder an den Anbieter, dessen API-Schlüssel Sie hinterlegen. Ein lokaler Modellserver ist nur über einen eigenen OpenAI-kompatiblen Endpunkt möglich, den PromptQuorum nicht ausprobiert hat.',
    quickAnswerTop: {
      de: {
        question: 'Was ist GenOffice, und ist die KI lokal?',
        answer:
          'GenOffice ist eine Desktop-Suite unter Apache 2.0 mit Editoren für Docs, Sheets, Slides, PDF, HTML und Markdown. Die Bearbeitung ist lokal; die KI läuft standardmäßig in der Cloud, über eine Genspark-Anmeldung oder Ihren eigenen API-Schlüssel.',
        bullets: [
          'Plattformen: macOS (Apple Silicon und Intel), Windows (x64 und Arm), Linux (.deb, .rpm, AppImage).',
          'Preis: Die Apps sind kostenlos; die KI nutzt Genspark-Credits oder Ihren eigenen Anbieter-Schlüssel.',
          'Formate: .docx, .xlsx, .pptx, PDF, Markdown und HTML sowie konvertierte Kopien älterer und OpenDocument-Dateien.',
          'Automatisierung: eine genoffice-Kommandozeile und ein MCP-Server für Coding-Agenten.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie die App', anchor: 'get-it' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Lokal oder Cloud: Wohin Ihre Daten gehen', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Grenzen und was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Wettbewerber und Alternativen', anchor: 'alternatives' },
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
            text: 'GenOffice ist eine kostenlose Desktop-Office-Suite, die Word-, Excel-, PowerPoint- und PDF-Dateien auf Ihrem Computer bearbeitet und einen KI-Agenten ergänzt, der standardmäßig bei einem Cloud-Anbieter läuft.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine Open-Source-Alternative zu Microsoft Office mit einem KI-Bereich in jedem Editor vor. Ihre Dokumente bleiben auf Ihrem Rechner; was die KI sieht, wird an den Anbieter gesendet, den Sie anbinden.',
          },
        ],
        items: [
          'Die Download-Seite und das GitHub-Release bieten signierte Installationsprogramme für macOS und Windows sowie .deb-, .rpm- und AppImage-Pakete für Linux (README).',
          'Der Code steht unter Apache 2.0, außer einem Ordner ee/ für künftige Enterprise-Module, der eine eigene Lizenz hat und derzeit bis auf einen Hinweis leer ist.',
          'Laut README kann ein eigener OpenAI-kompatibler Endpunkt auf „lokale Modellserver“ zeigen; eine Ollama- oder LM-Studio-Einrichtung wird nicht genannt, und die FAQ sagt, die KI-Funktionen benötigen eine Netzwerkverbindung.',
          'Offizielle Builds senden standardmäßig begrenzte Nutzungsstatistiken, die Sie in den Einstellungen abschalten können (PRIVACY.md).',
          'PromptQuorum hat die App nicht getestet. Das Repository wurde am 31. Juli 2026 angelegt, es ist also ein junges Projekt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'KI-Änderungen können falsch sein. Die Seite des Herstellers rät, komplexe Formatierungen und wichtige Dateien vor dem Teilen zu prüfen. Das sind allgemeine Informationen, keine Rechtsberatung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**GenOffice ist eine Electron-basierte Office-Suite mit sechs Editoren (Docs, Sheets, Slides, PDF, HTML und Markdown), die in die echten Dateiformate zurückspeichert.**',
          'Das Projekt wird von Genspark unter der GitHub-Organisation genspark-ai veröffentlicht. Die aktuelle Version ist 0.13.615, veröffentlicht am 19. November 2026, und der letzte Push ins Repository erfolgte am selben Tag; die Entwicklung läuft also weiter, und es gilt keine Warnung vor einem verwaisten Projekt. Frühere Releases erschienen am 12., 4. und 2. November sowie am 30. Oktober 2026, was ein hohes Veröffentlichungstempo zeigt.',
          'Laut README werden Änderungen an einer .docx als schmale Patches angewendet, sodass nicht berührte Teile Byte für Byte erhalten bleiben, und KI-Änderungen erscheinen als nachverfolgte Änderungen oder Diffs mit Rücksetzen per Klick. Der Hersteller sagt außerdem, die App könne Ihre Ordner über einen lokalen Index durchsuchen, Fragen zu markierten Dateien mit Quellenangaben beantworten und liefere eine Kommandozeile, einen Agent-Skill und einen MCP-Server mit, damit Coding-Agenten wie Claude Code, Codex und Cursor Office-Dateien erstellen und bearbeiten können.',
          'Diese Beschreibungen sind Herstellerangaben. PromptQuorum hat die App nicht ausgeführt und nicht gemessen, wie gut sie mit echten Word-, Excel- oder PowerPoint-Dateien umgeht.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie installieren GenOffice über einen normalen Download von der offiziellen Website oder der GitHub-Releases-Seite; ein Terminal ist nicht nötig.**',
          'Das Release 0.13.615 listet eine .dmg für Apple Silicon und eine für Intel, Windows-Setup-.exe-Dateien für x64 und Arm, ein AppImage, eine .deb- und eine .rpm-Datei auf. Laut README sind die Installationsprogramme für macOS und Windows signiert, und die Linux-Pakete benötigen x86_64 und glibc 2.34 oder neuer. Das AppImage braucht zusätzlich die FUSE-2-Laufzeit.',
        ],
        columns: ['Plattform', 'So bekommen Sie sie'],
        rows: [
          { 'Plattform': '[macOS](https://genoffice.ai/#download)', 'So bekommen Sie sie': '.dmg für Apple Silicon oder Intel, macOS 11+' },
          { 'Plattform': '[Windows](https://genoffice.ai/#download)', 'So bekommen Sie sie': 'Setup-.exe für x64 (Windows 10+) oder Arm (Windows 11)' },
          { 'Plattform': '[Linux](https://genoffice.ai/#download)', 'So bekommen Sie sie': '.deb, .rpm oder AppImage, x86_64' },
          { 'Plattform': '[Website](https://genoffice.ai)', 'So bekommen Sie sie': 'Offizielle Seite, FAQ und Downloads' },
          { 'Plattform': '[Datenschutzhinweis](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md)', 'So bekommen Sie sie': 'Hinweis des Herstellers, Stand 12. November 2026' },
          { 'Plattform': '[GitHub](https://github.com/genspark-ai/genoffice)', 'So bekommen Sie sie': 'Quellcode und Release-Downloads' },
        ],
        note: 'Der Hersteller nennt keine RAM- oder GPU-Werte. Die KI läuft beim Anbieter, sofern Sie nicht Ihren eigenen Server anbinden.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**GenOffice verbindet Dokumenteditoren mit einem KI-Agenten, lokaler Dateisuche und Automatisierungsschnittstellen.** Alle folgenden Punkte sind Herstellerangaben von Website und README.',
        ],
        items: [
          'Docs, Sheets und Slides öffnen und speichern echte .docx-, .xlsx- und .pptx-Dateien; Sheets behält Live-Formeln und Diagramme.',
          'PDF-Bearbeitung direkt auf der Seite sowie PDF-Konvertierung nach Word, Excel oder PowerPoint, die laut Hersteller auf dem Gerät läuft, mit System-OCR für Scans unter macOS und Windows.',
          'Markdown- und HTML-Editoren mit demselben KI-Bereich sowie lokaler Export nach Word.',
          'Suche auf dem Startbildschirm über Ihre Dokumente aus einem lokalen Index und eine Funktion „Ask AI“, die aus markierten Dateien mit Quellenangaben antwortet.',
          'Ein optionaler Neusortierungsschritt für die Suche, der Auszüge an einen von Ihnen gewählten Modell-Endpunkt sendet; standardmäßig ist er aus.',
          'Eine genoffice-Kommandozeile, ein Agent-Skill und ein MCP-Server (laut README 29 Werkzeuge) für Coding-Agenten.',
          'Ältere .doc-, .xls- und .ppt-Dateien sowie OpenDocument- und Hancom-Dateien öffnen sich als konvertierte OOXML-Kopien; gespeichert wird nie im alten Format.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Lokal oder Cloud: Wohin Ihre Daten gehen',
        content: [
          '**Die Dokumentbearbeitung ist lokal, die KI läuft aber in der Cloud, sofern Sie nicht Ihren eigenen Server anbinden.** Das ist der wichtigste Punkt für Leser, die lokale KI wollen.',
          'Laut README und FAQ geschehen Öffnen, Bearbeiten, Speichern, PDF-Konvertierung und das Indizieren für die Suche auf Ihrem Computer. Die KI-Funktionen benötigen eine Netzwerkverbindung und nutzen entweder eine Genspark-Anmeldung, die Anfragen über den Genspark-Proxy an Claude-, GPT- und Gemini-Modelle leitet, oder Ihren eigenen API-Schlüssel für Anbieter wie OpenAI, Anthropic, Google, DeepSeek und OpenRouter.',
          'Die README nennt außerdem einen eigenen Platz für jeden OpenAI-kompatiblen Endpunkt, „einschließlich lokaler Modellserver“. Ollama oder LM Studio werden nicht genannt, und PromptQuorum hat kein lokales Modell mit GenOffice ausprobiert; betrachten Sie die lokale Nutzung daher als möglich, aber ungeprüft.',
          'PRIVACY.md sagt, offizielle gepackte Builds senden standardmäßig begrenzte Google-Analytics-4-Ereignisse, schon ab dem ersten Start, und Sie können in den Einstellungen widersprechen. Genannt werden Ereignisse wie App-Start und Dateityp; die Statistik enthalte nie Dokumentinhalt, Dateinamen oder Pfade. Die optionale Neusortierung der Suche sendet bis zu 20 Auszüge aus Dokumenttext an den gewählten Endpunkt. PromptQuorum hat diese Angaben nicht überprüft.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**GenOffice eignet sich für Menschen, die eine Open-Source-Office-Alternative mit KI wollen und KI-Aufrufe in der Cloud akzeptieren.**',
        ],
        items: [
          'Nutzer, die mit .docx, .xlsx und .pptx arbeiten und einen KI-Bereich ohne Microsoft-365-Abo möchten.',
          'Entwickler, deren Coding-Agent Office-Dateien über eine Kommandozeile oder MCP erstellen oder bearbeiten soll.',
          'Teams, die einen eigenen OpenAI-kompatiblen Server anbinden können und ihn mit einem Office-Editor testen möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Grenzen und was wir nicht überprüfen konnten',
        content: [
          '**GenOffice hat genannte Grenzen, und mehrere Angaben bleiben ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: wer KI sofort vollständig offline betreiben muss. Die Standardwege der KI laufen über die Cloud, und die README beschreibt kein mitgeliefertes Modell.',
          'Genannte Grenze: Die FAQ des Herstellers sagt, komplexe Formatierungen könnten abweichen, und rät, wichtige Dateien vor dem Teilen zu prüfen.',
          'Genannte Grenze: Ältere und OpenDocument-Dateien sind reine Importe, werden in einer Richtung in OOXML konvertiert und können Funktionen des alten Formats verlieren.',
          'Ungeprüft: wie gut die KI Dokumente bearbeitet und wie originalgetreu Word-, Excel- und PowerPoint-Dateien beim Speichern erhalten bleiben. PromptQuorum hat beides nicht getestet.',
          'Ungeprüft: Preise und Grenzen der Genspark-Credits. Ein Preis für die Credits wurde nicht gelesen.',
          'Ungeprüft: die Datenschutzerklärung von Genspark, die beim Öffnungsversuch von PromptQuorum einen Zugriffsfehler lieferte. PromptQuorum fand auf der Website genoffice.ai keine eigene Datenschutzseite.',
          'Nicht geprüft: unabhängige Tests und Nutzerberichte. Das Projekt ist jung, das Repository wurde am 31. Juli 2026 angelegt.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Wettbewerber und Alternativen',
        itemHeadings: true,
        content: [
          '**Für keine andere Desktop-Office-Suite gibt es bisher eine PromptQuorum-Rezension. Die folgenden Werkzeuge sind die nächstliegenden rezensierten Werkzeuge zur Dokumenterstellung, und jedes deckt nur einen Teil dessen ab, was GenOffice tut.**',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': '[Presenton](/de/power-local-llm/presenton-review)',
            'Plattformen': 'macOS, Linux, Docker, Web',
            'Preis / Lizenz': 'Desktop kostenlos / Apache 2.0',
            'Wichtigster Unterschied': 'Erzeugt nur Foliensätze; unterstützt Ollama und LM Studio',
          },
          {
            'App': '[SoloMD](/de/power-local-llm/solomd-review)',
            'Plattformen': 'macOS, Windows, Linux, iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Markdown-Notizen mit Erkennung lokaler Modelle; Word nur per Import und Export',
          },
          {
            'App': '[Oleafly](/de/power-local-llm/oleafly-review)',
            'Plattformen': 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / AGPL-3.0',
            'Wichtigster Unterschied': 'LaTeX-, Typst- und Markdown-Arbeiten mit optionalen KI-Agenten',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist GenOffice kostenlos?',
            a: 'Die Apps sind laut Website und README-FAQ kostenlos, quelloffen und werbefrei. Die KI-Funktionen nutzen Genspark-Credits oder Ihren eigenen Anbieter-Schlüssel, und Ihr Anbieter kann Nutzungsgebühren erheben.',
          },
          {
            q: 'Kann GenOffice ein lokales Modell nutzen?',
            a: 'Möglicherweise. Laut README kann ein eigener OpenAI-kompatibler Endpunkt ein lokaler Modellserver sein, doch Ollama oder LM Studio werden nicht genannt, und PromptQuorum hat es nicht getestet.',
          },
          {
            q: 'Funktioniert es offline?',
            a: 'Bearbeiten, Speichern und PDF-Konvertierung funktionieren laut FAQ ohne die KI. Die KI-Funktionen brauchen eine Netzwerkverbindung, sofern Ihr eigener Server nicht erreichbar ist.',
          },
          {
            q: 'Kann ich den KI-Bereich ausschalten?',
            a: 'Ja, laut README: In den Einstellungen gibt es einen Schalter, der die KI-Seitenleiste ausblendet, auch wenn eine ausdrückliche KI-Aktion sie weiterhin öffnet.',
          },
          {
            q: 'Können Claude Code oder Cursor es nutzen?',
            a: 'Laut README ja, über die genoffice-Kommandozeile mit einem installierbaren Skill oder über den MCP-Server. Beides läuft auf Ihrem Rechner; nur Such- und Medienaufrufe gehen an den konfigurierten Anbieter.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**GenOffice ist einen Blick wert, wenn Sie eine Open-Source-Office-Alternative mit eingebauter KI wollen und KI-Aufrufe in der Cloud akzeptieren.**',
          'Auf dem Papier deckt es viel ab: echte Word-, Excel- und PowerPoint-Formate, PDF-Bearbeitung, signierte Installationsprogramme für drei Systeme, Kommandozeile und MCP für Agenten sowie aktive Entwicklung mit einem Release am 19. November 2026.',
          'Die Nachteile gehen aus den Seiten des Herstellers selbst hervor: Die KI läuft standardmäßig in der Cloud, lokale Modelle sind eine ungeprüfte Option über einen eigenen Endpunkt, offizielle Builds senden Nutzungsstatistiken, sofern Sie nicht widersprechen, und das Projekt ist erst wenige Monate alt. PromptQuorum hat die App nicht getestet; probieren Sie sie daher zuerst an Kopien Ihrer Dateien aus.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[GenOffice-Website](https://genoffice.ai) — Beschreibung des Herstellers, FAQ und Download-Schaltflächen, geprüft am 20. November 2026.',
          '[GenOffice-GitHub-Repository](https://github.com/genspark-ai/genoffice) — README, Lizenz und Hinweis zum Enterprise-Ordner, geprüft am 20. November 2026.',
          '[GenOffice-Datenschutzhinweis](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md) — Analytics und Neusortierung der Suche, Stand 12. November 2026, geprüft am 20. November 2026.',
          '[Release 0.13.615](https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615) — aktuelle Version, Datum und Installationsdateien, geprüft am 20. November 2026.',
          '[Genspark-Nutzungsbedingungen](https://www.genspark.ai/terms) — von der Fußzeile von genoffice.ai verlinkt; Firmenname und anwendbares Recht, geprüft am 20. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Presenton-Rezension](/de/power-local-llm/presenton-review) — Quelloffener KI-Foliengenerator, der mit lokalen Modellen funktioniert.',
          '[SoloMD-Rezension](/de/power-local-llm/solomd-review) — Markdown-Notiz-App mit Unterstützung für lokale Modelle.',
          '[Oleafly-Rezension](/de/power-local-llm/oleafly-review) — Quelloffener Editor für LaTeX-, Typst- und Markdown-Arbeiten.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/genoffice-review-hero-es.webp',
    title: 'Reseña de GenOffice: suite ofimática de código abierto con IA para archivos de Word, Excel y PowerPoint',
    seoTitle: 'Reseña de GenOffice: ofimática abierta con IA y privacidad',
    intro:
      'GenOffice es una suite ofimática de escritorio gratuita y de código abierto de Genspark que abre y guarda archivos reales .docx, .xlsx y .pptx y edita PDF, Markdown y HTML, con un agente de IA integrado en cada editor. Los documentos se procesan en tu ordenador, pero las llamadas de IA van a un proveedor que tú eliges, así que es una herramienta híbrida y no de IA local. Esta reseña se basa en el sitio web del fabricante, el README, el aviso de privacidad y las versiones de GitHub, consultados el 20 de noviembre de 2026. PromptQuorum no ha probado la aplicación en la práctica.',
    metaDescription:
      'GenOffice es una suite ofimática gratuita y de código abierto con IA para Word, Excel y PowerPoint. Edición local, IA en la nube por defecto, privacidad.',
    twitterDescription:
      'Reseña de GenOffice: suite ofimática gratuita de código abierto con IA para macOS, Windows y Linux. Edición local, IA en el proveedor que elijas. Qué está confirmado.',
    audience:
      'Usuarios de oficina y equipos que buscan una alternativa de código abierto a Microsoft Office con IA, y quien necesite saber si funciona con modelos locales o envía datos a la nube',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GenOffice',
    targetKeywords: [
      'reseña de GenOffice',
      'GenOffice suite ofimática con IA',
      'suite ofimática con IA de código abierto',
      'GenOffice modelo local',
      'GenOffice privacidad',
      'GenOffice frente a Microsoft Office',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**GenOffice es una suite ofimática de escritorio gratuita y de código abierto para macOS, Windows y Linux que edita archivos reales de Word, Excel y PowerPoint con un agente de IA junto al documento.** Los archivos se abren, editan y guardan en tu ordenador, pero las funciones de IA necesitan conexión de red y envían solicitudes a Genspark o al proveedor cuya clave de API añadas. Un servidor de modelos local solo es posible mediante un punto de conexión propio compatible con OpenAI, que PromptQuorum no ha probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es GenOffice y es local su IA?',
        answer:
          'GenOffice es una suite de escritorio con licencia Apache 2.0 y editores de Docs, Sheets, Slides, PDF, HTML y Markdown. La edición es local; la IA funciona por defecto en la nube, mediante un inicio de sesión de Genspark o tu propia clave de API.',
        bullets: [
          'Plataformas: macOS (Apple Silicon e Intel), Windows (x64 y Arm), Linux (.deb, .rpm, AppImage).',
          'Precio: las aplicaciones son gratuitas; la IA usa créditos de Genspark o tu propia clave de proveedor.',
          'Formatos: .docx, .xlsx, .pptx, PDF, Markdown y HTML, además de copias convertidas de archivos antiguos y OpenDocument.',
          'Automatización: una línea de comandos genoffice y un servidor MCP para agentes de programación.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirla', anchor: 'get-it' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Local o nube: adónde van tus datos', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Límites y lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Competidores y alternativas', anchor: 'alternatives' },
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
            text: 'GenOffice es una suite ofimática de escritorio gratuita que edita archivos de Word, Excel, PowerPoint y PDF en tu ordenador y añade un agente de IA que, por defecto, funciona en un proveedor en la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una alternativa de código abierto a Microsoft Office con un panel de IA en cada editor. Tus documentos se quedan en tu equipo; lo que ve la IA se envía al proveedor que conectes.',
          },
        ],
        items: [
          'La página de descargas y la versión de GitHub ofrecen instaladores firmados para macOS y Windows y paquetes .deb, .rpm y AppImage para Linux (README).',
          'El código es Apache 2.0, salvo una carpeta ee/ para futuros módulos empresariales, que tiene su propia licencia y por ahora solo contiene un aviso.',
          'Según el README, un punto de conexión propio compatible con OpenAI puede apuntar a «servidores de modelos locales»; no menciona ninguna configuración con Ollama o LM Studio, y su FAQ dice que las funciones de IA necesitan conexión de red.',
          'Las compilaciones oficiales envían por defecto estadísticas de uso limitadas, que puedes desactivar en Ajustes (PRIVACY.md).',
          'PromptQuorum no ha probado la aplicación. El repositorio se creó el 31 de julio de 2026, así que es un proyecto joven.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Los cambios de la IA pueden ser erróneos. El sitio del fabricante aconseja revisar el formato complejo y los archivos importantes antes de compartirlos. Esta es información general, no asesoramiento legal.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**GenOffice es una suite ofimática basada en Electron con seis editores (Docs, Sheets, Slides, PDF, HTML y Markdown) que guarda de nuevo en los formatos de archivo reales.**',
          'El proyecto lo publica Genspark en la organización de GitHub genspark-ai. La versión más reciente es la 0.13.615, publicada el 19 de noviembre de 2026, y el último push al repositorio fue el mismo día, así que el desarrollo continúa y no se aplica ninguna advertencia de proyecto abandonado. Las versiones anteriores salieron el 12, el 4 y el 2 de noviembre y el 30 de octubre de 2026, lo que indica un ritmo de publicación rápido.',
          'Según el README, los cambios en un .docx se aplican como parches estrechos para que las partes que no tocaste se conserven byte a byte, y las ediciones de la IA llegan como cambios con seguimiento o diferencias con reversión en un clic. El fabricante también dice que la aplicación puede buscar en tus carpetas con un índice local, responder preguntas sobre archivos marcados con citas e incluir una línea de comandos, una habilidad para agentes y un servidor MCP para que agentes de programación como Claude Code, Codex y Cursor creen y editen archivos de Office.',
          'Estas descripciones son afirmaciones del fabricante. PromptQuorum no ha ejecutado la aplicación y no ha medido qué tal maneja archivos reales de Word, Excel o PowerPoint.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Instalas GenOffice con una descarga normal desde el sitio oficial o la página de versiones de GitHub; no hace falta terminal.**',
          'La versión 0.13.615 incluye un .dmg para Apple Silicon y otro para Intel, archivos de instalación .exe de Windows para x64 y Arm, un AppImage, un .deb y un .rpm. Según el README, los instaladores de macOS y Windows están firmados y los paquetes de Linux requieren x86_64 y glibc 2.34 o posterior. El AppImage necesita además el entorno FUSE 2.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[macOS](https://genoffice.ai/#download)', 'Cómo conseguirla': '.dmg para Apple Silicon o Intel, macOS 11+' },
          { 'Plataforma': '[Windows](https://genoffice.ai/#download)', 'Cómo conseguirla': '.exe de instalación para x64 (Windows 10+) o Arm (Windows 11)' },
          { 'Plataforma': '[Linux](https://genoffice.ai/#download)', 'Cómo conseguirla': '.deb, .rpm o AppImage, x86_64' },
          { 'Plataforma': '[Sitio web](https://genoffice.ai)', 'Cómo conseguirla': 'Sitio oficial, FAQ y descargas' },
          { 'Plataforma': '[Aviso de privacidad](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md)', 'Cómo conseguirla': 'Aviso del fabricante, actualizado el 12 de noviembre de 2026' },
          { 'Plataforma': '[GitHub](https://github.com/genspark-ai/genoffice)', 'Cómo conseguirla': 'Código fuente y descargas de versiones' },
        ],
        note: 'El fabricante no indica cifras de RAM ni de GPU. La IA se ejecuta en el proveedor, salvo que conectes tu propio servidor.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**GenOffice combina editores de documentos con un agente de IA, búsqueda local de archivos y enlaces de automatización.** Todos los puntos siguientes son afirmaciones del fabricante tomadas del sitio web y del README.',
        ],
        items: [
          'Docs, Sheets y Slides abren y guardan archivos reales .docx, .xlsx y .pptx; Sheets conserva fórmulas vivas y gráficos.',
          'Edición de PDF directamente en la página y conversión de PDF a Word, Excel o PowerPoint que, según el fabricante, se ejecuta en el dispositivo, con OCR del sistema para escaneos en macOS y Windows.',
          'Editores de Markdown y HTML con el mismo panel de IA y exportación local a Word.',
          'Búsqueda en la pantalla de inicio sobre tus documentos desde un índice local y una función Ask AI que responde a partir de archivos marcados con citas.',
          'Un paso opcional de reordenación en la búsqueda que envía fragmentos a un punto de conexión de modelo que tú elijas; está desactivado por defecto.',
          'Una línea de comandos genoffice, una habilidad para agentes y un servidor MCP (29 herramientas según el README) para agentes de programación.',
          'Los archivos antiguos .doc, .xls y .ppt, además de los de OpenDocument y Hancom, se abren como copias OOXML convertidas; al guardar nunca se escribe el formato antiguo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Local o nube: adónde van tus datos',
        content: [
          '**La edición de documentos es local, pero la IA funciona en la nube salvo que conectes tu propio servidor.** Este es el punto más importante para quien busca IA local.',
          'Según el README y la FAQ, abrir, editar, guardar, convertir PDF e indexar archivos para la búsqueda ocurre en tu ordenador. Las funciones de IA necesitan conexión de red y usan un inicio de sesión de Genspark, que enruta las solicitudes mediante el proxy de Genspark a modelos Claude, GPT y Gemini, o tu propia clave de API para proveedores como OpenAI, Anthropic, Google, DeepSeek y OpenRouter.',
          'El README también menciona un espacio para cualquier punto de conexión compatible con OpenAI, «incluidos servidores de modelos locales». No nombra Ollama ni LM Studio, y PromptQuorum no ha probado un modelo local con GenOffice, así que considera el uso local posible pero sin verificar.',
          'PRIVACY.md dice que las compilaciones oficiales empaquetadas envían por defecto eventos limitados de Google Analytics 4, desde el primer inicio, y que puedes desactivarlo en Ajustes. Lista eventos como el inicio de la aplicación y el tipo de archivo, y afirma que las estadísticas nunca incluyen el contenido de los documentos, los nombres de archivo ni las rutas. La reordenación opcional de la búsqueda envía hasta 20 fragmentos de texto de documentos al punto de conexión que selecciones. PromptQuorum no ha verificado estas afirmaciones.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**GenOffice encaja con quienes quieren una alternativa ofimática de código abierto con IA y aceptan llamadas de IA en la nube.**',
        ],
        items: [
          'Usuarios que trabajan con .docx, .xlsx y .pptx y quieren un panel de IA sin suscripción a Microsoft 365.',
          'Desarrolladores que quieren que su agente de programación cree o edite archivos de Office mediante una línea de comandos o MCP.',
          'Equipos que pueden conectar su propio servidor compatible con OpenAI y quieren probarlo con un editor de Office.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Límites y lo que no pudimos verificar',
        content: [
          '**GenOffice tiene límites declarados y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No es adecuado: quien necesite que la IA funcione totalmente sin conexión desde el primer momento. Las vías de IA por defecto están en la nube y el README no describe ningún modelo incluido.',
          'Límite declarado: la FAQ del fabricante dice que el formato complejo puede variar y recomienda revisar los archivos importantes antes de compartirlos.',
          'Límite declarado: los archivos antiguos y los de OpenDocument son solo importaciones, convertidas en un solo sentido a OOXML, y pueden perder funciones que tenía el formato original.',
          'Sin verificar: qué tal edita la IA los documentos y con qué fidelidad se conservan los archivos de Word, Excel y PowerPoint al guardar. PromptQuorum no ha probado ninguna de las dos cosas.',
          'Sin verificar: los precios y límites de los créditos de Genspark. No se leyó ningún precio de los créditos.',
          'Sin verificar: la política de privacidad de Genspark, que devolvió un error de acceso cuando PromptQuorum intentó abrirla. PromptQuorum no encontró una página de privacidad propia en el sitio genoffice.ai.',
          'Sin comprobar: reseñas independientes e informes de usuarios. El proyecto es joven, con el repositorio creado el 31 de julio de 2026.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Competidores y alternativas',
        itemHeadings: true,
        content: [
          '**Ninguna otra suite ofimática de escritorio tiene todavía una reseña de PromptQuorum. Las herramientas siguientes son las más cercanas reseñadas para crear documentos, y cada una cubre solo una parte de lo que hace GenOffice.**',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[Presenton](/es/power-local-llm/presenton-review)',
            'Plataformas': 'macOS, Linux, Docker, web',
            'Precio / licencia': 'Escritorio gratis / Apache 2.0',
            'Diferencia clave': 'Solo genera presentaciones; admite Ollama y LM Studio',
          },
          {
            'App': '[SoloMD](/es/power-local-llm/solomd-review)',
            'Plataformas': 'macOS, Windows, Linux, iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Notas en Markdown con detección de modelos locales; Word solo por importación y exportación',
          },
          {
            'App': '[Oleafly](/es/power-local-llm/oleafly-review)',
            'Plataformas': 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia clave': 'Artículos en LaTeX, Typst y Markdown con agentes de IA opcionales',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis GenOffice?',
            a: 'Las aplicaciones son gratuitas, de código abierto y sin anuncios, según el sitio web y la FAQ del README. Las funciones de IA usan créditos de Genspark o tu propia clave de proveedor, y tu proveedor puede cobrar por el uso.',
          },
          {
            q: '¿Puede GenOffice usar un modelo local?',
            a: 'Posiblemente. El README dice que un punto de conexión propio compatible con OpenAI puede ser un servidor de modelos local, pero no menciona ninguna configuración con Ollama o LM Studio, y PromptQuorum no lo ha probado.',
          },
          {
            q: '¿Funciona sin conexión?',
            a: 'Editar, guardar y convertir PDF funcionan sin la IA, según la FAQ. Las funciones de IA necesitan conexión de red, salvo que tu propio servidor sea accesible.',
          },
          {
            q: '¿Puedo desactivar el panel de IA?',
            a: 'Sí, según el README: Ajustes tiene un interruptor para ocultar la barra lateral de IA, aunque una acción de IA explícita sigue abriéndola.',
          },
          {
            q: '¿Pueden usarlo Claude Code o Cursor?',
            a: 'Según el README, sí, mediante la línea de comandos genoffice con una habilidad instalable o mediante el servidor MCP. Ambos se ejecutan en tu equipo; solo las llamadas de búsqueda y multimedia van al proveedor configurado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**GenOffice merece una mirada si quieres una alternativa ofimática de código abierto con IA integrada y aceptas llamadas de IA en la nube.**',
          'Sobre el papel cubre mucho: formatos reales de Word, Excel y PowerPoint, edición de PDF, instaladores firmados en tres sistemas, línea de comandos y MCP para agentes, y desarrollo activo con una versión el 19 de noviembre de 2026.',
          'Las contrapartidas se ven en las propias páginas del fabricante: la IA funciona por defecto en la nube, los modelos locales son una opción sin verificar mediante un punto de conexión propio, las compilaciones oficiales envían estadísticas de uso salvo que lo desactives, y el proyecto tiene solo unos meses. PromptQuorum no ha probado la aplicación, así que pruébala primero con copias de tus archivos.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de GenOffice](https://genoffice.ai) — descripción del fabricante, FAQ y botones de descarga, consultado el 20 de noviembre de 2026.',
          '[Repositorio de GenOffice en GitHub](https://github.com/genspark-ai/genoffice) — README, licencia y aviso de la carpeta empresarial, consultado el 20 de noviembre de 2026.',
          '[Aviso de privacidad de GenOffice](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md) — analítica y reordenación de la búsqueda, actualizado el 12 de noviembre de 2026, consultado el 20 de noviembre de 2026.',
          '[Versión 0.13.615](https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615) — versión más reciente, fecha y archivos de instalación, consultado el 20 de noviembre de 2026.',
          '[Términos de Genspark](https://www.genspark.ai/terms) — enlazados desde el pie de genoffice.ai; nombre de la empresa y ley aplicable, consultado el 20 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Presenton](/es/power-local-llm/presenton-review) — Generador de presentaciones con IA de código abierto que funciona con modelos locales.',
          '[Reseña de SoloMD](/es/power-local-llm/solomd-review) — Aplicación de notas en Markdown con compatibilidad con modelos locales.',
          '[Reseña de Oleafly](/es/power-local-llm/oleafly-review) — Editor de código abierto para artículos en LaTeX, Typst y Markdown.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/genoffice-review-hero-fr.webp',
    title: 'Test de GenOffice : suite bureautique IA open source pour fichiers Word, Excel et PowerPoint',
    seoTitle: 'Test de GenOffice : bureautique IA open source, vie privée',
    intro:
      'GenOffice est une suite bureautique de bureau gratuite et open source de Genspark qui ouvre et enregistre de vrais fichiers .docx, .xlsx et .pptx et modifie PDF, Markdown et HTML, avec un agent IA intégré à chaque éditeur. Les documents sont traités sur votre ordinateur, mais les appels IA partent vers un fournisseur de votre choix : c’est donc un outil hybride, pas un outil d’IA locale. Ce test s’appuie sur le site de l’éditeur, le README, l’avis de confidentialité et les versions GitHub, consultés le 20 novembre 2026. PromptQuorum n’a pas testé l’application en pratique.',
    metaDescription:
      'GenOffice est une suite bureautique gratuite et open source avec IA pour fichiers Word, Excel et PowerPoint. Édition locale, IA dans le cloud par défaut.',
    twitterDescription:
      'Test de GenOffice : suite bureautique IA gratuite et open source pour macOS, Windows et Linux. Édition locale, IA chez le fournisseur choisi. Ce qui est confirmé.',
    audience:
      'Utilisateurs de bureautique et équipes cherchant une alternative open source à Microsoft Office avec IA, et toute personne devant savoir si l’outil fonctionne avec des modèles locaux ou envoie des données vers le cloud',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GenOffice',
    targetKeywords: [
      'test GenOffice',
      'GenOffice suite bureautique IA',
      'suite bureautique IA open source',
      'GenOffice modèle local',
      'GenOffice confidentialité',
      'GenOffice contre Microsoft Office',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**GenOffice est une suite bureautique de bureau gratuite et open source pour macOS, Windows et Linux qui modifie de vrais fichiers Word, Excel et PowerPoint avec un agent IA à côté du document.** Les fichiers sont ouverts, modifiés et enregistrés sur votre ordinateur, mais les fonctions IA exigent une connexion réseau et envoient les requêtes à Genspark ou au fournisseur dont vous ajoutez la clé API. Un serveur de modèles local n’est possible que via un point d’accès personnalisé compatible OpenAI, que PromptQuorum n’a pas essayé.',
    quickAnswerTop: {
      fr: {
        question: 'Qu’est-ce que GenOffice, et son IA est-elle locale ?',
        answer:
          'GenOffice est une suite de bureau sous licence Apache 2.0 avec des éditeurs Docs, Sheets, Slides, PDF, HTML et Markdown. L’édition est locale ; l’IA fonctionne par défaut dans le cloud, via une connexion Genspark ou votre propre clé API.',
        bullets: [
          'Plateformes : macOS (Apple Silicon et Intel), Windows (x64 et Arm), Linux (.deb, .rpm, AppImage).',
          'Prix : les applications sont gratuites ; l’IA utilise des crédits Genspark ou votre propre clé de fournisseur.',
          'Formats : .docx, .xlsx, .pptx, PDF, Markdown et HTML, plus des copies converties de fichiers anciens et OpenDocument.',
          'Automatisation : une ligne de commande genoffice et un serveur MCP pour les agents de programmation.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l’obtenir', anchor: 'get-it' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Local ou cloud : où vont vos données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Limites et ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'alternatives' },
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
            text: 'GenOffice est une suite bureautique de bureau gratuite qui modifie des fichiers Word, Excel, PowerPoint et PDF sur votre ordinateur et ajoute un agent IA qui, par défaut, fonctionne chez un fournisseur cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-y une alternative open source à Microsoft Office avec un panneau IA dans chaque éditeur. Vos documents restent sur votre machine ; ce que voit l’IA est envoyé au fournisseur que vous connectez.',
          },
        ],
        items: [
          'La page de téléchargement et la version GitHub proposent des installateurs signés pour macOS et Windows et des paquets .deb, .rpm et AppImage pour Linux (README).',
          'Le code est sous Apache 2.0, sauf un dossier ee/ pour de futurs modules d’entreprise, qui a sa propre licence et ne contient pour l’instant qu’un avis.',
          'Selon le README, un point d’accès personnalisé compatible OpenAI peut viser des « serveurs de modèles locaux » ; il ne cite aucune configuration Ollama ou LM Studio, et sa FAQ indique que les fonctions IA exigent une connexion réseau.',
          'Les versions officielles envoient par défaut des statistiques d’usage limitées, que vous pouvez désactiver dans les réglages (PRIVACY.md).',
          'PromptQuorum n’a pas testé l’application. Le dépôt a été créé le 31 juillet 2026 : c’est un projet jeune.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Les modifications de l’IA peuvent être erronées. Le site de l’éditeur conseille de vérifier les mises en page complexes et les fichiers importants avant de les partager. Il s’agit d’informations générales, pas de conseils juridiques.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**GenOffice est une suite bureautique basée sur Electron, avec six éditeurs (Docs, Sheets, Slides, PDF, HTML et Markdown), qui réenregistre dans les vrais formats de fichier.**',
          'Le projet est publié par Genspark sous l’organisation GitHub genspark-ai. La dernière version est la 0.13.615, publiée le 19 novembre 2026, et le dernier push dans le dépôt date du même jour ; le développement se poursuit donc et aucun avertissement de projet à l’abandon ne s’applique. Les versions précédentes sont sorties les 12, 4 et 2 novembre et le 30 octobre 2026, ce qui indique un rythme de publication rapide.',
          'Selon le README, les modifications d’un .docx sont appliquées sous forme de correctifs ciblés afin que les parties non touchées soient conservées octet pour octet, et les modifications de l’IA arrivent sous forme de suivi des modifications ou de différences avec retour en arrière en un clic. L’éditeur indique aussi que l’application peut chercher dans vos dossiers via un index local, répondre à des questions sur des fichiers marqués avec des citations, et fournit une ligne de commande, une compétence d’agent et un serveur MCP pour que des agents de programmation comme Claude Code, Codex et Cursor créent et modifient des fichiers Office.',
          'Ces descriptions sont des déclarations de l’éditeur. PromptQuorum n’a pas exécuté l’application et n’a pas mesuré sa façon de traiter de vrais fichiers Word, Excel ou PowerPoint.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l’obtenir',
        content: [
          '**Vous installez GenOffice par un téléchargement normal depuis le site officiel ou la page des versions GitHub ; aucun terminal n’est nécessaire.**',
          'La version 0.13.615 liste un .dmg pour Apple Silicon et un pour Intel, des fichiers d’installation .exe Windows pour x64 et Arm, un AppImage, un .deb et un .rpm. Selon le README, les installateurs macOS et Windows sont signés et les paquets Linux exigent x86_64 et glibc 2.34 ou plus récent. L’AppImage nécessite en plus l’environnement FUSE 2.',
        ],
        columns: ['Plateforme', 'Comment l’obtenir'],
        rows: [
          { 'Plateforme': '[macOS](https://genoffice.ai/#download)', 'Comment l’obtenir': '.dmg pour Apple Silicon ou Intel, macOS 11+' },
          { 'Plateforme': '[Windows](https://genoffice.ai/#download)', 'Comment l’obtenir': '.exe d’installation x64 (Windows 10+) ou Arm (Windows 11)' },
          { 'Plateforme': '[Linux](https://genoffice.ai/#download)', 'Comment l’obtenir': '.deb, .rpm ou AppImage, x86_64' },
          { 'Plateforme': '[Site web](https://genoffice.ai)', 'Comment l’obtenir': 'Site officiel, FAQ et téléchargements' },
          { 'Plateforme': '[Avis de confidentialité](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md)', 'Comment l’obtenir': 'Avis de l’éditeur, mis à jour le 12 novembre 2026' },
          { 'Plateforme': '[GitHub](https://github.com/genspark-ai/genoffice)', 'Comment l’obtenir': 'Code source et téléchargements des versions' },
        ],
        note: 'L’éditeur n’indique aucune valeur de RAM ni de GPU. L’IA s’exécute chez le fournisseur, sauf si vous connectez votre propre serveur.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**GenOffice associe des éditeurs de documents à un agent IA, une recherche locale de fichiers et des points d’entrée d’automatisation.** Tous les éléments ci-dessous sont des déclarations de l’éditeur tirées du site et du README.',
        ],
        items: [
          'Docs, Sheets et Slides ouvrent et enregistrent de vrais fichiers .docx, .xlsx et .pptx ; Sheets conserve les formules dynamiques et les graphiques.',
          'Édition de PDF directement dans la page et conversion de PDF en Word, Excel ou PowerPoint qui, selon l’éditeur, s’exécute sur l’appareil, avec OCR du système pour les scans sous macOS et Windows.',
          'Éditeurs Markdown et HTML avec le même panneau IA, et export local vers Word.',
          'Recherche sur l’écran d’accueil dans vos documents à partir d’un index local, et une fonction Ask AI qui répond à partir de fichiers marqués avec des citations.',
          'Une étape facultative de reclassement pour la recherche, qui envoie des extraits à un point d’accès de modèle de votre choix ; elle est désactivée par défaut.',
          'Une ligne de commande genoffice, une compétence d’agent et un serveur MCP (29 outils selon le README) pour les agents de programmation.',
          'Les anciens fichiers .doc, .xls et .ppt, ainsi que les fichiers OpenDocument et Hancom, s’ouvrent comme des copies OOXML converties ; l’enregistrement n’écrit jamais l’ancien format.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Local ou cloud : où vont vos données',
        content: [
          '**L’édition des documents est locale, mais l’IA fonctionne dans le cloud, sauf si vous connectez votre propre serveur.** C’est le point le plus important pour les lecteurs qui veulent de l’IA locale.',
          'Selon le README et la FAQ, l’ouverture, la modification, l’enregistrement, la conversion de PDF et l’indexation des fichiers pour la recherche se font sur votre ordinateur. Les fonctions IA exigent une connexion réseau et utilisent soit une connexion Genspark, qui achemine les requêtes via le proxy Genspark vers des modèles Claude, GPT et Gemini, soit votre propre clé API pour des fournisseurs comme OpenAI, Anthropic, Google, DeepSeek et OpenRouter.',
          'Le README mentionne aussi un emplacement pour tout point d’accès compatible OpenAI, « y compris des serveurs de modèles locaux ». Il ne nomme ni Ollama ni LM Studio, et PromptQuorum n’a pas essayé de modèle local avec GenOffice ; considérez donc l’usage local comme possible mais non vérifié.',
          'PRIVACY.md indique que les versions officielles empaquetées envoient par défaut des événements Google Analytics 4 limités, dès le premier lancement, et que vous pouvez vous y opposer dans les réglages. Il cite des événements comme le lancement de l’application et le type de fichier, et précise que les statistiques n’incluent jamais le contenu des documents, les noms de fichiers ni les chemins. Le reclassement facultatif de la recherche envoie jusqu’à 20 extraits de texte de documents au point d’accès sélectionné. PromptQuorum n’a pas vérifié ces déclarations.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**GenOffice convient à ceux qui veulent une alternative bureautique open source avec IA et acceptent des appels IA dans le cloud.**',
        ],
        items: [
          'Utilisateurs qui travaillent en .docx, .xlsx et .pptx et veulent un panneau IA sans abonnement Microsoft 365.',
          'Développeurs qui veulent que leur agent de programmation crée ou modifie des fichiers Office via une ligne de commande ou MCP.',
          'Équipes capables de connecter leur propre serveur compatible OpenAI et souhaitant le tester avec un éditeur Office.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites et ce que nous n’avons pas pu vérifier',
        content: [
          '**GenOffice a des limites déclarées, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : à ceux qui ont besoin d’une IA entièrement hors ligne d’emblée. Les voies d’IA par défaut passent par le cloud et le README ne décrit aucun modèle fourni.',
          'Limite déclarée : la FAQ de l’éditeur dit que les mises en page complexes peuvent varier et recommande de vérifier les fichiers importants avant de les partager.',
          'Limite déclarée : les fichiers anciens et OpenDocument sont des imports uniquement, convertis dans un seul sens vers OOXML, et peuvent perdre des fonctions que l’ancien format avait.',
          'Non vérifié : la qualité des modifications de l’IA sur les documents et la fidélité avec laquelle les fichiers Word, Excel et PowerPoint survivent à l’enregistrement. PromptQuorum n’a testé ni l’un ni l’autre.',
          'Non vérifié : les prix et limites des crédits Genspark. Aucun prix de crédits n’a été lu.',
          'Non vérifié : la politique de confidentialité de Genspark, qui a renvoyé une erreur d’accès lorsque PromptQuorum a tenté de l’ouvrir. PromptQuorum n’a trouvé aucune page de confidentialité propre sur le site genoffice.ai.',
          'Non examiné : avis indépendants et retours d’utilisateurs. Le projet est jeune, avec un dépôt créé le 31 juillet 2026.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Concurrents et alternatives',
        itemHeadings: true,
        content: [
          '**Aucune autre suite bureautique de bureau n’a encore de test PromptQuorum. Les outils ci-dessous sont les plus proches outils testés pour créer des documents, et chacun ne couvre qu’une partie de ce que fait GenOffice.**',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': '[Presenton](/fr/power-local-llm/presenton-review)',
            'Plateformes': 'macOS, Linux, Docker, web',
            'Prix / licence': 'Bureau gratuit / Apache 2.0',
            'Différence clé': 'Ne génère que des diaporamas ; prend en charge Ollama et LM Studio',
          },
          {
            'Application': '[SoloMD](/fr/power-local-llm/solomd-review)',
            'Plateformes': 'macOS, Windows, Linux, iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Notes Markdown avec détection des modèles locaux ; Word uniquement par import et export',
          },
          {
            'Application': '[Oleafly](/fr/power-local-llm/oleafly-review)',
            'Plateformes': 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence clé': 'Articles LaTeX, Typst et Markdown avec agents IA facultatifs',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'GenOffice est-il gratuit ?',
            a: 'Les applications sont gratuites, open source et sans publicité selon le site et la FAQ du README. Les fonctions IA utilisent des crédits Genspark ou votre propre clé de fournisseur, et votre fournisseur peut facturer l’usage.',
          },
          {
            q: 'GenOffice peut-il utiliser un modèle local ?',
            a: 'Peut-être. Le README dit qu’un point d’accès personnalisé compatible OpenAI peut être un serveur de modèles local, mais il ne cite aucune configuration Ollama ou LM Studio, et PromptQuorum ne l’a pas testé.',
          },
          {
            q: 'Fonctionne-t-il hors ligne ?',
            a: 'La modification, l’enregistrement et la conversion de PDF fonctionnent sans l’IA selon la FAQ. Les fonctions IA exigent une connexion réseau, sauf si votre propre serveur est joignable.',
          },
          {
            q: 'Puis-je désactiver le panneau IA ?',
            a: 'Oui, selon le README : les réglages ont un interrupteur pour masquer la barre latérale IA, même si une action IA explicite la rouvre.',
          },
          {
            q: 'Claude Code ou Cursor peuvent-ils l’utiliser ?',
            a: 'Selon le README, oui, via la ligne de commande genoffice avec une compétence installable ou via le serveur MCP. Les deux s’exécutent sur votre machine ; seuls les appels de recherche et de médias vont au fournisseur configuré.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**GenOffice mérite un coup d’œil si vous voulez une alternative bureautique open source avec IA intégrée et acceptez des appels IA dans le cloud.**',
          'Sur le papier, il couvre beaucoup : de vrais formats Word, Excel et PowerPoint, l’édition de PDF, des installateurs signés sur trois systèmes, une ligne de commande et MCP pour les agents, et un développement actif avec une version le 19 novembre 2026.',
          'Les compromis ressortent des pages de l’éditeur lui-même : l’IA fonctionne par défaut dans le cloud, les modèles locaux sont une option non vérifiée via un point d’accès personnalisé, les versions officielles envoient des statistiques d’usage sauf si vous les désactivez, et le projet n’a que quelques mois. PromptQuorum n’a pas testé l’application ; essayez-la d’abord sur des copies de vos fichiers.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de GenOffice](https://genoffice.ai) — description de l’éditeur, FAQ et boutons de téléchargement, consulté le 20 novembre 2026.',
          '[Dépôt GitHub de GenOffice](https://github.com/genspark-ai/genoffice) — README, licence et avis sur le dossier entreprise, consulté le 20 novembre 2026.',
          '[Avis de confidentialité de GenOffice](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md) — analytique et reclassement de la recherche, mis à jour le 12 novembre 2026, consulté le 20 novembre 2026.',
          '[Version 0.13.615](https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615) — dernière version, date et fichiers d’installation, consulté le 20 novembre 2026.',
          '[Conditions de Genspark](https://www.genspark.ai/terms) — liées depuis le pied de page de genoffice.ai ; nom de la société et droit applicable, consulté le 20 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Presenton](/fr/power-local-llm/presenton-review) — Générateur de diaporamas IA open source compatible avec les modèles locaux.',
          '[Test de SoloMD](/fr/power-local-llm/solomd-review) — Application de notes Markdown avec prise en charge des modèles locaux.',
          '[Test d’Oleafly](/fr/power-local-llm/oleafly-review) — Éditeur open source pour articles LaTeX, Typst et Markdown.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/genoffice-review-hero-ja.webp',
    title: 'GenOfficeレビュー：Word・Excel・PowerPointファイルを扱うオープンソースのAIオフィススイート',
    seoTitle: 'GenOfficeレビュー：AIオフィススイートとプライバシー',
    intro:
      'GenOfficeは、Gensparkが提供する無料のオープンソースのデスクトップオフィススイートです。実際の.docx、.xlsx、.pptxファイルを開いて保存でき、PDF、Markdown、HTMLも編集でき、すべてのエディタにAIエージェントが組み込まれています。文書の処理はお使いのPC上で行われますが、AIの呼び出しは選択したプロバイダに送られるため、ローカルAIツールではなくハイブリッド型のツールです。このレビューは、メーカーのウェブサイト、README、プライバシーに関する通知、GitHubのリリースに基づき、2026年11月20日に確認しました。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'GenOfficeはAI搭載の無料オープンソースのデスクトップオフィススイート。Word・Excel・PowerPointに対応。編集はローカル、AIは標準でクラウドです。',
    twitterDescription:
      'GenOfficeレビュー：macOS・Windows・Linux向けの無料オープンソースAIオフィススイート。編集はローカル、AIは選んだプロバイダ側。確認できた内容をまとめました。',
    audience:
      'AI付きのMicrosoft Officeのオープンソース代替を探すオフィス利用者やチーム、およびローカルモデルで動くのかクラウドにデータを送るのかを知りたい人',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GenOffice',
    targetKeywords: [
      'GenOffice レビュー',
      'GenOffice AIオフィススイート',
      'オープンソース AIオフィススイート',
      'GenOffice ローカルモデル',
      'GenOffice プライバシー',
      'GenOffice Microsoft Office 比較',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**GenOfficeは、macOS・Windows・Linux向けの無料のオープンソースのデスクトップオフィススイートで、文書の横に置いたAIエージェントを使って、実際のWord・Excel・PowerPointファイルを編集します。** ファイルはPC上で開き、編集し、保存しますが、AI機能にはネットワーク接続が必要で、リクエストはGensparkか、APIキーを追加したプロバイダに送られます。ローカルのモデルサーバーは、OpenAI互換のカスタムエンドポイント経由でのみ可能で、PromptQuorumは試していません。',
    quickAnswerTop: {
      ja: {
        question: 'GenOfficeとは何で、AIはローカルで動きますか？',
        answer:
          'GenOfficeはApache 2.0のデスクトップスイートで、Docs、Sheets、Slides、PDF、HTML、Markdownのエディタを備えています。編集はローカルで、AIは標準ではクラウドで動き、Gensparkのサインインか自分のAPIキーを使います。',
        bullets: [
          '対応プラットフォーム：macOS（Apple SiliconとIntel）、Windows（x64とArm）、Linux（.deb、.rpm、AppImage）。',
          '価格：アプリは無料。AIはGensparkクレジットか自分のプロバイダのキーを使います。',
          '形式：.docx、.xlsx、.pptx、PDF、Markdown、HTML。古い形式やOpenDocumentは変換コピーとして開きます。',
          '自動化：コーディングエージェント向けのgenofficeコマンドラインとMCPサーバー。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '機能', anchor: 'features' },
      { label: 'ローカルかクラウドか：データの行き先', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '制限事項と確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '競合と代替ツール', anchor: 'alternatives' },
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
            text: 'GenOfficeは、Word・Excel・PowerPoint・PDFファイルをPC上で編集できる無料のデスクトップオフィススイートで、標準ではクラウドのプロバイダ側で動くAIエージェントが加わります。',
          },
          {
            type: 'plain-terms',
            text: 'すべてのエディタにAIパネルが付いた、Microsoft Officeのオープンソース代替と考えてください。文書はお使いのPCに残り、AIが見る内容は接続したプロバイダに送られます。',
          },
        ],
        items: [
          'ダウンロードページとGitHubのリリースには、macOSとWindows向けの署名付きインストーラと、Linux向けの.deb・.rpm・AppImageパッケージがあります（README）。',
          'コードはApache 2.0です。ただし将来のエンタープライズ向けモジュール用のee/フォルダは別ライセンスで、現時点では通知以外は空です。',
          'READMEによると、OpenAI互換のカスタムエンドポイントは「ローカルモデルサーバー」を指せますが、OllamaやLM Studioの設定には触れておらず、FAQではAI機能にネットワーク接続が必要とされています。',
          '公式ビルドは標準で限定的な利用統計を送信しますが、設定でオフにできます（PRIVACY.md）。',
          'PromptQuorumはこのアプリを試していません。リポジトリは2026年7月31日に作成されたばかりの新しいプロジェクトです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AIによる編集は誤っている場合があります。メーカーのサイトは、複雑な書式や重要なファイルは共有前に確認するよう勧めています。これは一般的な情報であり、法的助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**GenOfficeはElectronベースのオフィススイートで、6つのエディタ（Docs、Sheets、Slides、PDF、HTML、Markdown）を備え、実際のファイル形式のまま保存します。**',
          'プロジェクトはGitHubのgenspark-ai組織でGensparkが公開しています。最新リリースは2026年11月19日公開のバージョン0.13.615で、リポジトリへの最後のプッシュも同日です。開発は続いており、放置プロジェクトの警告は該当しません。これ以前のリリースは2026年11月12日、4日、2日と10月30日で、リリースの頻度が高いことがわかります。',
          'READMEによると、.docxへの編集は小さなパッチとして適用され、触れていない部分はバイト単位でそのまま残り、AIによる編集は変更履歴や差分として届き、ワンクリックで元に戻せます。メーカーはほかにも、ローカルのインデックスでフォルダを検索できること、スター付きファイルについて出典付きで質問に答えること、Claude Code、Codex、Cursorなどのコーディングエージェントがオフィスファイルを作成・編集できるようにコマンドライン、エージェント用スキル、MCPサーバーを同梱していることを挙げています。',
          'これらはメーカーの説明です。PromptQuorumはアプリを実行しておらず、実際のWord・Excel・PowerPointファイルをどの程度扱えるかを測定していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**GenOfficeは、公式サイトまたはGitHubのリリースページから通常のダウンロードでインストールでき、ターミナルは不要です。**',
          'リリース0.13.615には、Apple Silicon用とIntel用の.dmg、x64とArm用のWindowsセットアップ.exe、AppImage、.deb、.rpmが並んでいます。READMEによると、macOSとWindowsのインストーラは署名済みで、Linuxパッケージにはx86_64とglibc 2.34以降が必要です。AppImageにはFUSE 2ランタイムも必要です。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[macOS](https://genoffice.ai/#download)', '入手方法': 'Apple Silicon・Intel用の.dmg、macOS 11以降' },
          { 'プラットフォーム': '[Windows](https://genoffice.ai/#download)', '入手方法': 'x64（Windows 10以降）・Arm（Windows 11）用セットアップ.exe' },
          { 'プラットフォーム': '[Linux](https://genoffice.ai/#download)', '入手方法': '.deb、.rpm、AppImage（x86_64）' },
          { 'プラットフォーム': '[公式サイト](https://genoffice.ai)', '入手方法': '公式サイト、FAQ、ダウンロード' },
          { 'プラットフォーム': '[プライバシー通知](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md)', '入手方法': 'メーカーの通知（2026年11月12日更新）' },
          { 'プラットフォーム': '[GitHub](https://github.com/genspark-ai/genoffice)', '入手方法': 'ソースコードとリリースのダウンロード' },
        ],
        note: 'メーカーはRAMやGPUの数値を示していません。独自のサーバーを接続しない限り、AIはプロバイダ側で動作します。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**GenOfficeは、文書エディタにAIエージェント、ローカルのファイル検索、自動化用の入口を組み合わせています。** 以下はすべて、ウェブサイトとREADMEにあるメーカーの説明です。',
        ],
        items: [
          'Docs、Sheets、Slidesは実際の.docx、.xlsx、.pptxファイルを開いて保存し、Sheetsはライブの数式とグラフを保持します。',
          'ページ上でのPDF直接編集と、PDFからWord・Excel・PowerPointへの変換（メーカーによればデバイス上で実行）。macOSとWindowsではスキャンにシステムのOCRを使います。',
          '同じAIパネルを備えたMarkdownとHTMLのエディタと、Wordへのローカル書き出し。',
          'ホーム画面でのローカルインデックスによる文書検索と、スター付きファイルから出典付きで答えるAsk AI機能。',
          '検索結果を並べ替える任意のステップ。選んだモデルのエンドポイントに抜粋を送信します。標準ではオフです。',
          'コーディングエージェント向けのgenofficeコマンドライン、エージェント用スキル、MCPサーバー（READMEによれば29ツール）。',
          '古い.doc、.xls、.pptや、OpenDocument、Hancomのファイルは、変換されたOOXMLコピーとして開きます。保存時に古い形式で書き出すことはありません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'ローカルかクラウドか：データの行き先',
        content: [
          '**文書の編集はローカルですが、独自のサーバーを接続しない限り、AIはクラウドで動きます。** ローカルAIを求める読者にとって、これが最も重要な点です。',
          'READMEとFAQによると、ファイルを開く、編集する、保存する、PDFを変換する、検索用にインデックスを作成するといった処理はPC上で行われます。AI機能にはネットワーク接続が必要で、Gensparkのサインイン（Gensparkのプロキシ経由でClaude、GPT、Geminiのモデルにリクエストが送られます）か、OpenAI、Anthropic、Google、DeepSeek、OpenRouterなどのプロバイダ向けの自分のAPIキーのどちらかを使います。',
          'READMEには、「ローカルモデルサーバーを含む」あらゆるOpenAI互換エンドポイント用のカスタム枠もあります。OllamaやLM Studioには触れておらず、PromptQuorumもGenOfficeでローカルモデルを試していないため、ローカル利用は可能かもしれないが未検証と考えてください。',
          'PRIVACY.mdによると、公式のパッケージ版は最初の起動時から標準で限定的なGoogle Analytics 4のイベントを送信し、設定でオプトアウトできます。アプリの起動やファイルの種類などのイベントが挙げられており、文書の内容、ファイル名、パスは分析に含まれないとされています。任意の検索の並べ替えを有効にすると、文書テキストの抜粋を最大20件、選択したエンドポイントに送信します。PromptQuorumはこれらの記述を検証していません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**GenOfficeは、AI付きのオープンソースのオフィス代替を求め、クラウドでのAI呼び出しを受け入れられる人に向いています。**',
        ],
        items: [
          '.docx、.xlsx、.pptxで作業し、Microsoft 365のサブスクリプションなしでAIパネルを使いたい人。',
          'コーディングエージェントにコマンドラインやMCP経由でオフィスファイルを作成・編集させたい開発者。',
          '独自のOpenAI互換サーバーを接続でき、オフィスエディタで試したいチーム。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '制限事項と確認できなかったこと',
        content: [
          '**GenOfficeには明記された制限があり、いくつかの点は未検証です。**',
        ],
        items: [
          '向かない人：AIをそのまま完全オフラインで動かしたい人。標準のAIの経路はクラウドで、READMEには同梱モデルの記載がありません。',
          '明記された制限：メーカーのFAQは、複雑な書式は変わることがあるとして、重要なファイルは共有前に確認するよう勧めています。',
          '明記された制限：古い形式とOpenDocumentのファイルは取り込み専用で、OOXMLへ一方向に変換され、元の形式にあった機能が失われることがあります。',
          '未検証：AIが文書をどの程度うまく編集するか、Word・Excel・PowerPointファイルが保存後にどこまで忠実に保たれるか。PromptQuorumはどちらも試していません。',
          '未検証：Gensparkクレジットの価格と上限。クレジットの価格は確認できませんでした。',
          '未検証：PromptQuorumが開こうとしたときにアクセスエラーを返したGensparkのプライバシーポリシー。PromptQuorumはgenoffice.aiサイトに独自のプライバシーページを見つけられませんでした。',
          '未確認：独立したレビューやユーザーの報告。プロジェクトは新しく、リポジトリは2026年7月31日に作成されました。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: '競合と代替ツール',
        itemHeadings: true,
        content: [
          '**ほかのデスクトップオフィススイートにはまだPromptQuorumのレビューがありません。以下は、レビュー済みの中で文書作成に最も近いツールで、それぞれGenOfficeの一部分しかカバーしません。**',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Presenton](/ja/power-local-llm/presenton-review)',
            '対応プラットフォーム': 'macOS、Linux、Docker、Web',
            '価格／ライセンス': 'デスクトップ版無料／Apache 2.0',
            '主な違い': 'スライド生成のみ。OllamaとLM Studioに対応',
          },
          {
            'アプリ': '[SoloMD](/ja/power-local-llm/solomd-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux、iOS、Android',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'ローカルモデルを自動検出するMarkdownメモ。Wordはインポートとエクスポートのみ',
          },
          {
            'アプリ': '[Oleafly](/ja/power-local-llm/oleafly-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／AGPL-3.0',
            '主な違い': '任意のAIエージェント付きでLaTeX、Typst、Markdownの論文を作成',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'GenOfficeは無料ですか？',
            a: 'ウェブサイトとREADMEのFAQによると、アプリは無料でオープンソース、広告なしです。AI機能はGensparkクレジットか自分のプロバイダのキーを使い、プロバイダが利用料を請求する場合があります。',
          },
          {
            q: 'GenOfficeでローカルモデルは使えますか？',
            a: '使える可能性があります。READMEはOpenAI互換のカスタムエンドポイントがローカルモデルサーバーでもよいとしていますが、OllamaやLM Studioの設定には触れておらず、PromptQuorumも試していません。',
          },
          {
            q: 'オフラインで動きますか？',
            a: 'FAQによると、編集、保存、PDF変換はAIなしで動作します。AI機能は、自分のサーバーに接続できる場合を除き、ネットワーク接続が必要です。',
          },
          {
            q: 'AIパネルはオフにできますか？',
            a: 'はい、READMEによると、設定にAIサイドバーを非表示にするスイッチがあります。ただし、明示的なAI操作を行うと再び開きます。',
          },
          {
            q: 'Claude CodeやCursorから使えますか？',
            a: 'READMEによると、インストール可能なスキルを使ったgenofficeコマンドライン、またはMCPサーバー経由で使えます。どちらもお使いのPC上で動作し、検索とメディアの呼び出しだけが設定したプロバイダに送られます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**GenOfficeは、AI内蔵のオープンソースのオフィス代替を求め、クラウドでのAI呼び出しを受け入れられるなら、一見の価値があります。**',
          '紙の上では多くをカバーしています。実際のWord・Excel・PowerPoint形式、PDF編集、3つのOS向けの署名付きインストーラ、エージェント向けのコマンドラインとMCP、そして2026年11月19日のリリースが示す活発な開発です。',
          'トレードオフはメーカー自身のページからわかります。AIは標準でクラウドで動き、ローカルモデルはカスタムエンドポイントによる未検証の選択肢で、公式ビルドはオプトアウトしない限り利用統計を送信し、プロジェクトは数か月しか経っていません。PromptQuorumはアプリを試していないので、まずファイルのコピーで試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[GenOfficeのウェブサイト](https://genoffice.ai) — メーカーの説明、FAQ、ダウンロードボタン。2026年11月20日に確認。',
          '[GenOfficeのGitHubリポジトリ](https://github.com/genspark-ai/genoffice) — README、ライセンス、エンタープライズフォルダの通知。2026年11月20日に確認。',
          '[GenOfficeのプライバシー通知](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md) — 分析と検索の並べ替え。2026年11月12日更新、2026年11月20日に確認。',
          '[リリース0.13.615](https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615) — 最新バージョン、日付、インストーラファイル。2026年11月20日に確認。',
          '[Gensparkの利用規約](https://www.genspark.ai/terms) — genoffice.aiのフッターからリンク。会社名と準拠法。2026年11月20日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Presentonレビュー](/ja/power-local-llm/presenton-review) — ローカルモデルでも使えるオープンソースのAIスライド生成ツール。',
          '[SoloMDレビュー](/ja/power-local-llm/solomd-review) — ローカルモデルに対応したMarkdownメモアプリ。',
          '[Oleaflyレビュー](/ja/power-local-llm/oleafly-review) — LaTeX、Typst、Markdownの論文向けオープンソースエディタ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/genoffice-review-hero-pt.webp',
    title: 'Análise do GenOffice: suíte de escritório com IA de código aberto para arquivos Word, Excel e PowerPoint',
    seoTitle: 'Análise do GenOffice: escritório com IA e privacidade',
    intro:
      'O GenOffice é uma suíte de escritório para desktop, gratuita e de código aberto, da Genspark, que abre e salva arquivos reais .docx, .xlsx e .pptx e edita PDF, Markdown e HTML, com um agente de IA integrado a cada editor. Os documentos são processados no seu computador, mas as chamadas de IA vão para um provedor que você escolhe; por isso é uma ferramenta híbrida, não de IA local. Esta análise se baseia no site do fabricante, no README, no aviso de privacidade e nas versões do GitHub, consultados em 20 de novembro de 2026. A PromptQuorum não testou o aplicativo na prática.',
    metaDescription:
      'O GenOffice é uma suíte de escritório gratuita e de código aberto com IA para Word, Excel e PowerPoint. Edição local, IA na nuvem por padrão, privacidade.',
    twitterDescription:
      'Análise do GenOffice: suíte de escritório com IA, gratuita e de código aberto, para macOS, Windows e Linux. Edição local, IA no provedor escolhido. O que está confirmado.',
    audience:
      'Usuários de escritório e equipes que buscam uma alternativa de código aberto ao Microsoft Office com IA, e quem precisa saber se ele funciona com modelos locais ou envia dados para a nuvem',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GenOffice',
    targetKeywords: [
      'análise do GenOffice',
      'GenOffice suíte de escritório com IA',
      'suíte de escritório com IA de código aberto',
      'GenOffice modelo local',
      'GenOffice privacidade',
      'GenOffice versus Microsoft Office',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O GenOffice é uma suíte de escritório para desktop, gratuita e de código aberto, para macOS, Windows e Linux, que edita arquivos reais do Word, Excel e PowerPoint com um agente de IA ao lado do documento.** Os arquivos são abertos, editados e salvos no seu computador, mas os recursos de IA exigem conexão de rede e enviam solicitações à Genspark ou ao provedor cuja chave de API você adicionar. Um servidor de modelos local só é possível por um endpoint próprio compatível com a OpenAI, que a PromptQuorum não testou.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o GenOffice e a IA dele é local?',
        answer:
          'O GenOffice é uma suíte de desktop com licença Apache 2.0 e editores de Docs, Sheets, Slides, PDF, HTML e Markdown. A edição é local; a IA roda por padrão na nuvem, por meio de um login da Genspark ou da sua própria chave de API.',
        bullets: [
          'Plataformas: macOS (Apple Silicon e Intel), Windows (x64 e Arm), Linux (.deb, .rpm, AppImage).',
          'Preço: os aplicativos são gratuitos; a IA usa créditos da Genspark ou a sua própria chave de provedor.',
          'Formatos: .docx, .xlsx, .pptx, PDF, Markdown e HTML, além de cópias convertidas de arquivos antigos e OpenDocument.',
          'Automação: uma linha de comando genoffice e um servidor MCP para agentes de programação.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Local ou nuvem: para onde vão seus dados', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'Limites e o que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'alternatives' },
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
            text: 'O GenOffice é uma suíte de escritório para desktop, gratuita, que edita arquivos do Word, Excel, PowerPoint e PDF no seu computador e acrescenta um agente de IA que, por padrão, roda em um provedor na nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma alternativa de código aberto ao Microsoft Office, com um painel de IA em cada editor. Seus documentos ficam na sua máquina; o que a IA vê é enviado ao provedor que você conectar.',
          },
        ],
        items: [
          'A página de download e a versão do GitHub oferecem instaladores assinados para macOS e Windows e pacotes .deb, .rpm e AppImage para Linux (README).',
          'O código é Apache 2.0, exceto uma pasta ee/ para futuros módulos empresariais, que tem licença própria e hoje contém apenas um aviso.',
          'Segundo o README, um endpoint próprio compatível com a OpenAI pode apontar para «servidores de modelos locais»; ele não cita nenhuma configuração com Ollama ou LM Studio, e o FAQ diz que os recursos de IA exigem conexão de rede.',
          'As versões oficiais enviam por padrão estatísticas de uso limitadas, que você pode desativar nas configurações (PRIVACY.md).',
          'A PromptQuorum não testou o aplicativo. O repositório foi criado em 31 de julho de 2026, então é um projeto jovem.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'As edições da IA podem estar erradas. O site do fabricante recomenda conferir formatações complexas e arquivos importantes antes de compartilhá-los. Esta é uma informação geral, não aconselhamento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O GenOffice é uma suíte de escritório baseada em Electron, com seis editores (Docs, Sheets, Slides, PDF, HTML e Markdown), que salva de volta nos formatos de arquivo reais.**',
          'O projeto é publicado pela Genspark na organização do GitHub genspark-ai. A versão mais recente é a 0.13.615, publicada em 19 de novembro de 2026, e o último push no repositório foi no mesmo dia; o desenvolvimento continua e nenhum aviso de projeto abandonado se aplica. As versões anteriores saíram em 12, 4 e 2 de novembro e em 30 de outubro de 2026, o que mostra um ritmo de lançamentos rápido.',
          'Segundo o README, as alterações em um .docx são aplicadas como patches estreitos, de modo que as partes que você não tocou são preservadas byte a byte, e as edições da IA chegam como alterações com controle de revisão ou diferenças, com reversão em um clique. O fabricante também diz que o aplicativo pode pesquisar suas pastas em um índice local, responder perguntas sobre arquivos marcados com citações e incluir uma linha de comando, uma habilidade para agentes e um servidor MCP para que agentes de programação como Claude Code, Codex e Cursor criem e editem arquivos do Office.',
          'Essas descrições são afirmações do fabricante. A PromptQuorum não executou o aplicativo e não mediu como ele lida com arquivos reais do Word, Excel ou PowerPoint.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o GenOffice com um download normal pelo site oficial ou pela página de versões do GitHub; não é preciso terminal.**',
          'A versão 0.13.615 lista um .dmg para Apple Silicon e outro para Intel, arquivos de instalação .exe do Windows para x64 e Arm, um AppImage, um .deb e um .rpm. Segundo o README, os instaladores de macOS e Windows são assinados e os pacotes de Linux exigem x86_64 e glibc 2.34 ou mais recente. O AppImage precisa ainda do ambiente FUSE 2.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[macOS](https://genoffice.ai/#download)', 'Como obter': '.dmg para Apple Silicon ou Intel, macOS 11+' },
          { 'Plataforma': '[Windows](https://genoffice.ai/#download)', 'Como obter': '.exe de instalação para x64 (Windows 10+) ou Arm (Windows 11)' },
          { 'Plataforma': '[Linux](https://genoffice.ai/#download)', 'Como obter': '.deb, .rpm ou AppImage, x86_64' },
          { 'Plataforma': '[Site](https://genoffice.ai)', 'Como obter': 'Site oficial, FAQ e downloads' },
          { 'Plataforma': '[Aviso de privacidade](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md)', 'Como obter': 'Aviso do fabricante, atualizado em 12 de novembro de 2026' },
          { 'Plataforma': '[GitHub](https://github.com/genspark-ai/genoffice)', 'Como obter': 'Código-fonte e downloads das versões' },
        ],
        note: 'O fabricante não informa valores de RAM nem de GPU. A IA roda no provedor, a menos que você conecte seu próprio servidor.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O GenOffice combina editores de documentos com um agente de IA, busca local de arquivos e ganchos de automação.** Todos os itens abaixo são afirmações do fabricante, tiradas do site e do README.',
        ],
        items: [
          'Docs, Sheets e Slides abrem e salvam arquivos reais .docx, .xlsx e .pptx; o Sheets mantém fórmulas dinâmicas e gráficos.',
          'Edição de PDF diretamente na página e conversão de PDF para Word, Excel ou PowerPoint que, segundo o fabricante, roda no dispositivo, com OCR do sistema para digitalizações no macOS e no Windows.',
          'Editores de Markdown e HTML com o mesmo painel de IA e exportação local para Word.',
          'Busca na tela inicial em seus documentos a partir de um índice local e um recurso Ask AI que responde com base em arquivos marcados, com citações.',
          'Uma etapa opcional de reordenação na busca que envia trechos a um endpoint de modelo que você escolher; vem desativada por padrão.',
          'Uma linha de comando genoffice, uma habilidade para agentes e um servidor MCP (29 ferramentas segundo o README) para agentes de programação.',
          'Arquivos antigos .doc, .xls e .ppt, além de arquivos OpenDocument e Hancom, abrem como cópias OOXML convertidas; ao salvar, o formato antigo nunca é gravado.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Local ou nuvem: para onde vão seus dados',
        content: [
          '**A edição de documentos é local, mas a IA roda na nuvem, a menos que você conecte seu próprio servidor.** Este é o ponto mais importante para quem quer IA local.',
          'Segundo o README e o FAQ, abrir, editar, salvar, converter PDF e indexar arquivos para a busca acontecem no seu computador. Os recursos de IA exigem conexão de rede e usam um login da Genspark, que encaminha as solicitações pelo proxy da Genspark a modelos Claude, GPT e Gemini, ou a sua própria chave de API para provedores como OpenAI, Anthropic, Google, DeepSeek e OpenRouter.',
          'O README também lista um espaço para qualquer endpoint compatível com a OpenAI, «incluindo servidores de modelos locais». Ele não cita Ollama nem LM Studio, e a PromptQuorum não testou um modelo local com o GenOffice; portanto, trate o uso local como possível, mas não verificado.',
          'O PRIVACY.md diz que as versões oficiais empacotadas enviam por padrão eventos limitados do Google Analytics 4, já desde o primeiro início, e que você pode desativar nas configurações. Ele lista eventos como a abertura do aplicativo e o tipo de arquivo, e afirma que as estatísticas nunca incluem o conteúdo dos documentos, nomes de arquivos ou caminhos. A reordenação opcional da busca envia até 20 trechos de texto de documentos ao endpoint selecionado. A PromptQuorum não verificou essas afirmações.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O GenOffice serve para quem quer uma alternativa de escritório de código aberto com IA e aceita chamadas de IA na nuvem.**',
        ],
        items: [
          'Usuários que trabalham com .docx, .xlsx e .pptx e querem um painel de IA sem assinatura do Microsoft 365.',
          'Desenvolvedores que querem que seu agente de programação crie ou edite arquivos do Office por linha de comando ou MCP.',
          'Equipes que podem conectar seu próprio servidor compatível com a OpenAI e querem testá-lo com um editor do Office.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites e o que não conseguimos verificar',
        content: [
          '**O GenOffice tem limites declarados, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: para quem precisa que a IA rode totalmente offline de imediato. Os caminhos de IA padrão passam pela nuvem e o README não descreve nenhum modelo incluído.',
          'Limite declarado: o FAQ do fabricante diz que formatações complexas podem variar e recomenda conferir arquivos importantes antes de compartilhá-los.',
          'Limite declarado: arquivos antigos e OpenDocument são apenas importações, convertidas em uma só direção para OOXML, e podem perder recursos que o formato original tinha.',
          'Não verificado: como a IA edita documentos e com que fidelidade arquivos do Word, Excel e PowerPoint sobrevivem ao salvar. A PromptQuorum não testou nenhum dos dois.',
          'Não verificado: preços e limites dos créditos da Genspark. Nenhum preço dos créditos foi lido.',
          'Não verificado: a política de privacidade da Genspark, que retornou um erro de acesso quando a PromptQuorum tentou abri-la. A PromptQuorum não encontrou página de privacidade própria no site genoffice.ai.',
          'Não conferido: análises independentes e relatos de usuários. O projeto é jovem, com o repositório criado em 31 de julho de 2026.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Concorrentes e alternativas',
        itemHeadings: true,
        content: [
          '**Nenhuma outra suíte de escritório para desktop tem ainda uma análise da PromptQuorum. As ferramentas abaixo são as mais próximas já analisadas para criar documentos, e cada uma cobre só uma parte do que o GenOffice faz.**',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[Presenton](/pt/power-local-llm/presenton-review)',
            'Plataformas': 'macOS, Linux, Docker, web',
            'Preço / licença': 'Desktop grátis / Apache 2.0',
            'Diferença principal': 'Gera apenas apresentações; aceita Ollama e LM Studio',
          },
          {
            'App': '[SoloMD](/pt/power-local-llm/solomd-review)',
            'Plataformas': 'macOS, Windows, Linux, iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Notas em Markdown com detecção de modelos locais; Word só por importação e exportação',
          },
          {
            'App': '[Oleafly](/pt/power-local-llm/oleafly-review)',
            'Plataformas': 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal': 'Artigos em LaTeX, Typst e Markdown com agentes de IA opcionais',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O GenOffice é gratuito?',
            a: 'Os aplicativos são gratuitos, de código aberto e sem anúncios, segundo o site e o FAQ do README. Os recursos de IA usam créditos da Genspark ou a sua própria chave de provedor, e o provedor pode cobrar pelo uso.',
          },
          {
            q: 'O GenOffice pode usar um modelo local?',
            a: 'Possivelmente. O README diz que um endpoint próprio compatível com a OpenAI pode ser um servidor de modelos local, mas não cita nenhuma configuração com Ollama ou LM Studio, e a PromptQuorum não testou.',
          },
          {
            q: 'Funciona offline?',
            a: 'Editar, salvar e converter PDF funcionam sem a IA, segundo o FAQ. Os recursos de IA exigem conexão de rede, a menos que seu próprio servidor esteja acessível.',
          },
          {
            q: 'Posso desativar o painel de IA?',
            a: 'Sim, segundo o README: as configurações têm uma chave para ocultar a barra lateral de IA, embora uma ação de IA explícita ainda a abra.',
          },
          {
            q: 'Claude Code ou Cursor podem usá-lo?',
            a: 'Segundo o README, sim, pela linha de comando genoffice com uma habilidade instalável ou pelo servidor MCP. Ambos rodam na sua máquina; apenas as chamadas de busca e de mídia vão ao provedor configurado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O GenOffice vale uma olhada se você quer uma alternativa de escritório de código aberto com IA integrada e aceita chamadas de IA na nuvem.**',
          'No papel, ele cobre muita coisa: formatos reais do Word, Excel e PowerPoint, edição de PDF, instaladores assinados em três sistemas, linha de comando e MCP para agentes, e desenvolvimento ativo, com uma versão em 19 de novembro de 2026.',
          'As contrapartidas aparecem nas próprias páginas do fabricante: a IA roda por padrão na nuvem, modelos locais são uma opção não verificada por um endpoint próprio, as versões oficiais enviam estatísticas de uso a menos que você desative, e o projeto tem apenas alguns meses. A PromptQuorum não testou o aplicativo; teste primeiro com cópias dos seus arquivos.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do GenOffice](https://genoffice.ai) — descrição do fabricante, FAQ e botões de download, consultado em 20 de novembro de 2026.',
          '[Repositório do GenOffice no GitHub](https://github.com/genspark-ai/genoffice) — README, licença e aviso da pasta empresarial, consultado em 20 de novembro de 2026.',
          '[Aviso de privacidade do GenOffice](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md) — análise de uso e reordenação da busca, atualizado em 12 de novembro de 2026, consultado em 20 de novembro de 2026.',
          '[Versão 0.13.615](https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615) — versão mais recente, data e arquivos de instalação, consultado em 20 de novembro de 2026.',
          '[Termos da Genspark](https://www.genspark.ai/terms) — ligados no rodapé do genoffice.ai; nome da empresa e lei aplicável, consultado em 20 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Presenton](/pt/power-local-llm/presenton-review) — Gerador de apresentações com IA de código aberto que funciona com modelos locais.',
          '[Análise do SoloMD](/pt/power-local-llm/solomd-review) — Aplicativo de notas em Markdown com suporte a modelos locais.',
          '[Análise do Oleafly](/pt/power-local-llm/oleafly-review) — Editor de código aberto para artigos em LaTeX, Typst e Markdown.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/genoffice-review-hero-zh.webp',
    title: 'GenOffice 评测：处理 Word、Excel 和 PowerPoint 文件的开源 AI 办公套件',
    seoTitle: 'GenOffice 评测：开源 AI 办公套件，本地编辑与隐私说明',
    intro:
      'GenOffice 是 Genspark 推出的免费开源桌面办公套件，可打开并保存真实的 .docx、.xlsx 和 .pptx 文件，并编辑 PDF、Markdown 和 HTML，每个编辑器都内置 AI 智能体。文档在您的电脑上处理，但 AI 调用会发送到您选择的服务商，因此它是混合型工具，而非本地 AI 工具。本评测基于厂商网站、README、隐私声明和 GitHub 发布页，核查日期为 2026 年 11 月 20 日。PromptQuorum 未对该应用进行实际测试。',
    metaDescription:
      'GenOffice 是内置 AI 的免费开源桌面办公套件，支持 Word、Excel 和 PowerPoint 文件。编辑在本地完成，AI 默认走云端，附隐私说明。',
    twitterDescription:
      'GenOffice 评测：适用于 macOS、Windows 和 Linux 的免费开源 AI 办公套件。文件本地编辑，AI 运行在您选择的服务商处。已确认的信息。',
    audience:
      '想要带 AI 的 Microsoft Office 开源替代品的办公用户和团队，以及需要了解它能否使用本地模型或会否把数据发送到云端的读者',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GenOffice',
    targetKeywords: [
      'GenOffice 评测',
      'GenOffice AI 办公套件',
      '开源 AI 办公套件',
      'GenOffice 本地模型',
      'GenOffice 隐私',
      'GenOffice 对比 Microsoft Office',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**GenOffice 是适用于 macOS、Windows 和 Linux 的免费开源桌面办公套件，可借助文档旁的 AI 智能体编辑真实的 Word、Excel 和 PowerPoint 文件。** 文件在您的电脑上打开、编辑和保存，但 AI 功能需要联网，并把请求发送到 Genspark 或您添加了 API 密钥的服务商。只有通过自定义的 OpenAI 兼容端点才可能接入本地模型服务器，PromptQuorum 未尝试过。',
    quickAnswerTop: {
      zh: {
        question: 'GenOffice 是什么，它的 AI 是本地的吗？',
        answer:
          'GenOffice 是采用 Apache 2.0 许可的桌面套件，包含 Docs、Sheets、Slides、PDF、HTML 和 Markdown 编辑器。编辑在本地完成；AI 默认运行在云端，通过 Genspark 登录或您自己的 API 密钥使用。',
        bullets: [
          '平台：macOS（Apple Silicon 和 Intel）、Windows（x64 和 Arm）、Linux（.deb、.rpm、AppImage）。',
          '价格：应用免费；AI 使用 Genspark 积分或您自己的服务商密钥。',
          '格式：.docx、.xlsx、.pptx、PDF、Markdown 和 HTML，旧格式和 OpenDocument 文件会以转换后的副本打开。',
          '自动化：面向编程智能体的 genoffice 命令行和 MCP 服务器。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
      { label: '功能', anchor: 'features' },
      { label: '本地还是云端：数据去向', anchor: 'privacy' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '局限与我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'alternatives' },
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
            text: 'GenOffice 是免费的桌面办公套件，可在您的电脑上编辑 Word、Excel、PowerPoint 和 PDF 文件，并加入了一个默认运行在云端服务商处的 AI 智能体。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作 Microsoft Office 的开源替代品，每个编辑器里都有 AI 面板。您的文档留在本机；AI 看到的内容会发送给您所连接的服务商。',
          },
        ],
        items: [
          '下载页和 GitHub 发布页提供 macOS 和 Windows 的已签名安装包，以及 Linux 的 .deb、.rpm 和 AppImage 包（README）。',
          '代码采用 Apache 2.0 许可，但用于未来企业模块的 ee/ 文件夹除外，该文件夹有单独的许可，目前除一份说明外为空。',
          '据 README，自定义的 OpenAI 兼容端点可以指向“本地模型服务器”；它没有提到 Ollama 或 LM Studio 的配置，其 FAQ 也说 AI 功能需要网络连接。',
          '官方版本默认发送有限的使用统计，您可以在设置中关闭（PRIVACY.md）。',
          'PromptQuorum 未测试该应用。仓库创建于 2026 年 7 月 31 日，因此这是一个很新的项目。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI 的编辑可能出错。厂商网站建议在分享前检查复杂格式和重要文件。以上为一般性信息，不构成法律意见。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**GenOffice 是基于 Electron 的办公套件，包含六个编辑器（Docs、Sheets、Slides、PDF、HTML 和 Markdown），可保存回真实的文件格式。**',
          '该项目由 Genspark 发布在 GitHub 组织 genspark-ai 下。最新版本为 0.13.615，发布于 2026 年 11 月 19 日，仓库的最后一次推送也在同一天，因此开发仍在进行，不适用项目停更警告。此前的版本发布于 2026 年 11 月 12 日、4 日、2 日以及 10 月 30 日，发布节奏很快。',
          '据 README，对 .docx 的修改以窄范围补丁方式应用，您未改动的部分逐字节保留；AI 的编辑以修订记录或差异形式呈现，可一键回退。厂商还称，该应用可通过本地索引搜索您的文件夹，基于加星标的文件回答问题并附引用，并附带命令行、智能体技能和 MCP 服务器，使 Claude Code、Codex 和 Cursor 等编程智能体能创建和编辑 Office 文件。',
          '这些描述均为厂商的说法。PromptQuorum 未运行该应用，也未衡量它处理真实 Word、Excel 或 PowerPoint 文件的效果。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**您可以通过官网或 GitHub 发布页正常下载安装 GenOffice，无需使用终端。**',
          '版本 0.13.615 列出了 Apple Silicon 和 Intel 各一个 .dmg、x64 和 Arm 的 Windows 安装 .exe、一个 AppImage、一个 .deb 和一个 .rpm。据 README，macOS 和 Windows 安装包已签名，Linux 包需要 x86_64 和 glibc 2.34 或更高版本。AppImage 还需要 FUSE 2 运行库。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[macOS](https://genoffice.ai/#download)', '获取方式': 'Apple Silicon 或 Intel 的 .dmg，macOS 11+' },
          { '平台': '[Windows](https://genoffice.ai/#download)', '获取方式': 'x64（Windows 10+）或 Arm（Windows 11）安装 .exe' },
          { '平台': '[Linux](https://genoffice.ai/#download)', '获取方式': '.deb、.rpm 或 AppImage，x86_64' },
          { '平台': '[官网](https://genoffice.ai)', '获取方式': '官方网站、FAQ 和下载' },
          { '平台': '[隐私声明](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md)', '获取方式': '厂商声明，更新于 2026 年 11 月 12 日' },
          { '平台': '[GitHub](https://github.com/genspark-ai/genoffice)', '获取方式': '源代码和版本下载' },
        ],
        note: '厂商未给出 RAM 或 GPU 数据。除非您连接自己的服务器，否则 AI 运行在服务商处。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**GenOffice 把文档编辑器与 AI 智能体、本地文件搜索和自动化接口结合在一起。** 以下各项均为厂商在网站和 README 中的说法。',
        ],
        items: [
          'Docs、Sheets 和 Slides 可打开并保存真实的 .docx、.xlsx 和 .pptx 文件；Sheets 保留动态公式和图表。',
          '直接在页面上编辑 PDF，并支持把 PDF 转换为 Word、Excel 或 PowerPoint；厂商称转换在设备上运行，macOS 和 Windows 上扫描件使用系统 OCR。',
          'Markdown 和 HTML 编辑器使用同一个 AI 面板，并支持本地导出为 Word。',
          '主屏幕可基于本地索引搜索您的文档，Ask AI 功能可依据加星标的文件作答并附引用。',
          '可选的搜索重排步骤，会把摘录发送到您选择的模型端点；默认关闭。',
          '面向编程智能体的 genoffice 命令行、智能体技能和 MCP 服务器（据 README 共 29 个工具）。',
          '旧版 .doc、.xls 和 .ppt 以及 OpenDocument 和 Hancom 文件会以转换后的 OOXML 副本打开；保存时不会写回旧格式。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '本地还是云端：数据去向',
        content: [
          '**文档编辑在本地完成，但除非您连接自己的服务器，AI 运行在云端。** 这是想用本地 AI 的读者最需要关注的一点。',
          '据 README 和 FAQ，打开、编辑、保存、PDF 转换以及为搜索建立索引都在您的电脑上进行。AI 功能需要网络连接，使用 Genspark 登录（请求经 Genspark 代理转发到 Claude、GPT 和 Gemini 模型），或使用您自己的 API 密钥访问 OpenAI、Anthropic、Google、DeepSeek 和 OpenRouter 等服务商。',
          'README 还列出一个可填入任何 OpenAI 兼容端点的自定义位置，“包括本地模型服务器”。它没有提到 Ollama 或 LM Studio，PromptQuorum 也未用 GenOffice 试过本地模型，因此请把本地使用视为可能但未经核实。',
          'PRIVACY.md 称，官方打包版本默认发送有限的 Google Analytics 4 事件，从首次启动起即生效，您可以在设置中选择退出。它列出了应用启动和文件类型等事件，并称统计从不包含文档内容、文件名或路径。可选的搜索重排会把最多 20 段文档文本摘录发送到您所选的端点。PromptQuorum 未核实这些说法。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**GenOffice 适合想要带 AI 的开源办公替代品、并能接受云端 AI 调用的人。**',
        ],
        items: [
          '使用 .docx、.xlsx 和 .pptx 工作、想要 AI 面板又不想订阅 Microsoft 365 的用户。',
          '希望编程智能体通过命令行或 MCP 创建或编辑 Office 文件的开发者。',
          '能连接自己的 OpenAI 兼容服务器、想用办公编辑器测试它的团队。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '局限与我们无法核实的内容',
        content: [
          '**GenOffice 有明确说明的局限，另有若干细节尚未核实。**',
        ],
        items: [
          '不适合：需要开箱即用、完全离线运行 AI 的人。默认的 AI 路径都在云端，README 也没有描述内置模型。',
          '明确的局限：厂商的 FAQ 称复杂格式可能有差异，并建议在分享前检查重要文件。',
          '明确的局限：旧格式和 OpenDocument 文件只是导入，单向转换为 OOXML，可能丢失旧格式具备的功能。',
          '未核实：AI 编辑文档的效果，以及 Word、Excel 和 PowerPoint 文件保存后的还原程度。PromptQuorum 对两者都未测试。',
          '未核实：Genspark 积分的价格和限额。未读到积分价格。',
          '未核实：Genspark 的隐私政策，PromptQuorum 尝试打开时返回了访问错误。PromptQuorum 在 genoffice.ai 网站上未找到自己的隐私页面。',
          '未查证：独立评测和用户反馈。该项目很新，仓库创建于 2026 年 7 月 31 日。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: '竞品与替代方案',
        itemHeadings: true,
        content: [
          '**其他桌面办公套件目前还没有 PromptQuorum 评测。下列工具是已评测的最接近的文档创作工具，每个只覆盖 GenOffice 功能的一部分。**',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Presenton](/zh/power-local-llm/presenton-review)',
            '平台': 'macOS、Linux、Docker、网页',
            '价格 / 许可证': '桌面版免费 / Apache 2.0',
            '主要区别': '只生成幻灯片；支持 Ollama 和 LM Studio',
          },
          {
            '应用': '[SoloMD](/zh/power-local-llm/solomd-review)',
            '平台': 'macOS、Windows、Linux、iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '可自动检测本地模型的 Markdown 笔记；Word 仅支持导入和导出',
          },
          {
            '应用': '[Oleafly](/zh/power-local-llm/oleafly-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / AGPL-3.0',
            '主要区别': '撰写 LaTeX、Typst 和 Markdown 论文，可选 AI 智能体',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'GenOffice 免费吗？',
            a: '据官网和 README 的 FAQ，应用免费、开源且无广告。AI 功能使用 Genspark 积分或您自己的服务商密钥，服务商可能收取使用费。',
          },
          {
            q: 'GenOffice 能使用本地模型吗？',
            a: '可能可以。README 称自定义的 OpenAI 兼容端点可以是本地模型服务器，但没有提到 Ollama 或 LM Studio 的配置，PromptQuorum 也未测试。',
          },
          {
            q: '它能离线使用吗？',
            a: '据 FAQ，编辑、保存和 PDF 转换无需 AI 即可使用。AI 功能需要网络连接，除非能访问到您自己的服务器。',
          },
          {
            q: '可以关闭 AI 面板吗？',
            a: '可以，据 README，设置中有隐藏 AI 侧边栏的开关，不过明确的 AI 操作仍会将其打开。',
          },
          {
            q: 'Claude Code 或 Cursor 能使用它吗？',
            a: '据 README 可以，通过带可安装技能的 genoffice 命令行，或通过 MCP 服务器。两者都在您的电脑上运行；只有搜索和媒体调用会发送到已配置的服务商。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您想要内置 AI 的开源办公替代品，并能接受云端 AI 调用，GenOffice 值得一看。**',
          '从纸面上看它覆盖面很广：真实的 Word、Excel 和 PowerPoint 格式、PDF 编辑、三种系统的已签名安装包、面向智能体的命令行和 MCP，以及开发活跃，2026 年 11 月 19 日仍有新版本发布。',
          '取舍从厂商自己的页面就能看出：AI 默认在云端，本地模型只是通过自定义端点的未经核实的选项，官方版本除非您退出否则会发送使用统计，而且项目只有几个月的历史。PromptQuorum 未测试该应用，请先用文件副本试用。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[GenOffice 官网](https://genoffice.ai) — 厂商描述、FAQ 和下载按钮，核查于 2026 年 11 月 20 日。',
          '[GenOffice GitHub 仓库](https://github.com/genspark-ai/genoffice) — README、许可证和企业文件夹说明，核查于 2026 年 11 月 20 日。',
          '[GenOffice 隐私声明](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md) — 统计与搜索重排，更新于 2026 年 11 月 12 日，核查于 2026 年 11 月 20 日。',
          '[版本 0.13.615](https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615) — 最新版本、日期和安装文件，核查于 2026 年 11 月 20 日。',
          '[Genspark 条款](https://www.genspark.ai/terms) — 由 genoffice.ai 页脚链接；公司名称和适用法律，核查于 2026 年 11 月 20 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Presenton 评测](/zh/power-local-llm/presenton-review) — 可配合本地模型使用的开源 AI 幻灯片生成器。',
          '[SoloMD 评测](/zh/power-local-llm/solomd-review) — 支持本地模型的 Markdown 笔记应用。',
          '[Oleafly 评测](/zh/power-local-llm/oleafly-review) — 面向 LaTeX、Typst 和 Markdown 论文的开源编辑器。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/genoffice-review-hero-ar.webp',
    title: 'مراجعة GenOffice: حزمة مكتبية مفتوحة المصدر بالذكاء الاصطناعي لملفات Office',
    seoTitle: 'مراجعة GenOffice: حزمة مكتبية مفتوحة بالذكاء الاصطناعي',
    intro:
      'GenOffice حزمة مكتبية مجانية ومفتوحة المصدر لسطح المكتب من شركة Genspark، تفتح ملفات .docx و.xlsx و.pptx الحقيقية وتحفظها، وتحرّر PDF وMarkdown وHTML، مع وكيل ذكاء اصطناعي مدمج في كل محرّر. تُعالَج المستندات على جهازك، لكن استدعاءات الذكاء الاصطناعي تذهب إلى مزوّد تختاره، لذا فهي أداة هجينة وليست أداة ذكاء اصطناعي محلي. تستند هذه المراجعة إلى موقع الشركة وملف README وإشعار الخصوصية وإصدارات GitHub، وقد روجعت في 20 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'GenOffice حزمة مكتبية مجانية ومفتوحة المصدر لسطح المكتب مع ذكاء اصطناعي لملفات Word وExcel وPowerPoint. التحرير محلي والذكاء الاصطناعي سحابي افتراضيًا.',
    twitterDescription:
      'مراجعة GenOffice: حزمة مكتبية مجانية ومفتوحة المصدر بالذكاء الاصطناعي لأنظمة macOS وWindows وLinux. التحرير محلي والذكاء الاصطناعي لدى المزوّد الذي تختاره.',
    audience:
      'مستخدمو المكاتب والفرق الباحثون عن بديل مفتوح المصدر لـ Microsoft Office مع الذكاء الاصطناعي، ومن يحتاج إلى معرفة هل يعمل مع نماذج محلية أم يرسل البيانات إلى السحابة',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GenOffice',
    targetKeywords: [
      'مراجعة GenOffice',
      'حزمة مكتبية بالذكاء الاصطناعي',
      'حزمة مكتبية مفتوحة المصدر بالذكاء الاصطناعي',
      'نموذج محلي مع GenOffice',
      'خصوصية GenOffice',
      'GenOffice مقابل Microsoft Office',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**GenOffice حزمة مكتبية مجانية ومفتوحة المصدر لأنظمة macOS وWindows وLinux، تحرّر ملفات Word وExcel وPowerPoint الحقيقية مع وكيل ذكاء اصطناعي بجانب المستند.** تُفتح الملفات وتُحرَّر وتُحفظ على جهازك، لكن ميزات الذكاء الاصطناعي تحتاج إلى اتصال بالشبكة وترسل الطلبات إلى Genspark أو إلى المزوّد الذي تضيف مفتاح API الخاص به. ولا يمكن استخدام خادم نماذج محلي إلا عبر نقطة اتصال مخصصة متوافقة مع OpenAI، ولم تجرّبها PromptQuorum.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو GenOffice، وهل ذكاؤه الاصطناعي محلي؟',
        answer:
          'GenOffice حزمة لسطح المكتب بترخيص Apache 2.0 تضم محررات Docs وSheets وSlides وPDF وHTML وMarkdown. التحرير محلي، أما الذكاء الاصطناعي فيعمل افتراضيًا في السحابة عبر تسجيل الدخول إلى Genspark أو مفتاح API الخاص بك.',
        bullets: [
          'المنصات: macOS (Apple Silicon وIntel) وWindows (x64 وArm) وLinux (.deb و.rpm وAppImage).',
          'السعر: التطبيقات مجانية، ويستخدم الذكاء الاصطناعي رصيد Genspark أو مفتاح المزوّد الخاص بك.',
          'الصيغ: .docx و.xlsx و.pptx وPDF وMarkdown وHTML، مع نسخ محوّلة من الملفات القديمة وملفات OpenDocument.',
          'الأتمتة: سطر أوامر genoffice وخادم MCP لوكلاء البرمجة.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'محلي أم سحابي: إلى أين تذهب بياناتك', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'الحدود وما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'alternatives' },
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
            text: 'GenOffice حزمة مكتبية مجانية لسطح المكتب تحرّر ملفات Word وExcel وPowerPoint وPDF على جهازك وتضيف وكيل ذكاء اصطناعي يعمل افتراضيًا لدى مزوّد سحابي.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّلها بديلًا مفتوح المصدر لـ Microsoft Office مع لوحة ذكاء اصطناعي في كل محرّر. تبقى مستنداتك على جهازك، وما يراه الذكاء الاصطناعي يُرسل إلى المزوّد الذي تربطه.',
          },
        ],
        items: [
          'توفّر صفحة التنزيل وإصدار GitHub مثبّتات موقّعة لـ macOS وWindows وحزم .deb و.rpm وAppImage لنظام Linux (README).',
          'الشيفرة بترخيص Apache 2.0، باستثناء مجلد ee/ المخصص لوحدات مؤسسية مستقبلية، وله ترخيص منفصل وهو فارغ حاليًا عدا إشعار.',
          'بحسب README يمكن لنقطة اتصال مخصصة متوافقة مع OpenAI أن تشير إلى «خوادم نماذج محلية»، لكنه لا يذكر إعدادًا مع Ollama أو LM Studio، وتقول أسئلته الشائعة إن ميزات الذكاء الاصطناعي تحتاج إلى اتصال بالشبكة.',
          'ترسل الإصدارات الرسمية إحصاءات استخدام محدودة افتراضيًا، ويمكنك إيقافها من الإعدادات (PRIVACY.md).',
          'لم تختبر PromptQuorum التطبيق. أُنشئ المستودع في 31 يوليو 2026، فهو مشروع حديث.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'قد تكون تعديلات الذكاء الاصطناعي خاطئة. ينصح موقع الشركة بالتحقق من التنسيقات المعقدة والملفات المهمة قبل مشاركتها. هذه معلومات عامة وليست استشارة قانونية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**GenOffice حزمة مكتبية مبنية على Electron تضم ستة محررات (Docs وSheets وSlides وPDF وHTML وMarkdown) وتحفظ في صيغ الملفات الحقيقية.**',
          'تنشر المشروع شركة Genspark ضمن منظمة genspark-ai على GitHub. أحدث إصدار هو 0.13.615 ونُشر في 19 نوفمبر 2026، وكان آخر push إلى المستودع في اليوم نفسه، فالتطوير مستمر ولا ينطبق تحذير المشروع المتوقف. صدرت إصدارات سابقة في 12 و4 و2 نوفمبر وفي 30 أكتوبر 2026، مما يدل على وتيرة إصدار سريعة.',
          'بحسب README تُطبَّق التعديلات على ملف .docx كرقع ضيقة بحيث تبقى الأجزاء التي لم تلمسها كما هي بايتًا ببايت، وتصل تعديلات الذكاء الاصطناعي كتغييرات متتبَّعة أو فروق مع إمكانية التراجع بنقرة واحدة. وتقول الشركة أيضًا إن التطبيق يستطيع البحث في مجلداتك عبر فهرس محلي، والإجابة عن أسئلة حول الملفات المميّزة بنجمة مع الاستشهادات، ويأتي مع سطر أوامر ومهارة وكيل وخادم MCP كي تنشئ وكلاء البرمجة مثل Claude Code وCodex وCursor ملفات Office وتحرّرها.',
          'هذه الأوصاف أقوال الشركة. لم تشغّل PromptQuorum التطبيق ولم تقِس مدى تعامله مع ملفات Word أو Excel أو PowerPoint الحقيقية.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**تثبّت GenOffice بتنزيل عادي من الموقع الرسمي أو من صفحة إصدارات GitHub، ولا حاجة إلى الطرفية.**',
          'يسرد الإصدار 0.13.615 ملف .dmg لـ Apple Silicon وآخر لـ Intel، وملفي .exe لتثبيت Windows لمعماريتي x64 وArm، وملف AppImage وملف .deb وملف .rpm. بحسب README فإن مثبّتات macOS وWindows موقّعة، وتتطلب حزم Linux معمارية x86_64 وglibc 2.34 أو أحدث. ويحتاج AppImage أيضًا إلى بيئة FUSE 2.',
        ],
        columns: ['المنصة', 'طريقة الحصول عليه'],
        rows: [
          { 'المنصة': '[macOS](https://genoffice.ai/#download)', 'طريقة الحصول عليه': 'ملف .dmg لـ Apple Silicon أو Intel، macOS 11+' },
          { 'المنصة': '[Windows](https://genoffice.ai/#download)', 'طريقة الحصول عليه': 'ملف .exe للتثبيت لـ x64 (Windows 10+) أو Arm (Windows 11)' },
          { 'المنصة': '[Linux](https://genoffice.ai/#download)', 'طريقة الحصول عليه': '.deb أو .rpm أو AppImage، x86_64' },
          { 'المنصة': '[الموقع الإلكتروني](https://genoffice.ai)', 'طريقة الحصول عليه': 'الموقع الرسمي والأسئلة الشائعة والتنزيلات' },
          { 'المنصة': '[إشعار الخصوصية](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md)', 'طريقة الحصول عليه': 'إشعار الشركة، آخر تحديث 12 نوفمبر 2026' },
          { 'المنصة': '[GitHub](https://github.com/genspark-ai/genoffice)', 'طريقة الحصول عليه': 'الشيفرة المصدرية وتنزيلات الإصدارات' },
        ],
        note: 'لا تذكر الشركة أي أرقام للذاكرة أو لوحدة الرسوميات. يعمل الذكاء الاصطناعي لدى المزوّد ما لم تربط خادمك الخاص.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يجمع GenOffice بين محررات المستندات ووكيل ذكاء اصطناعي وبحث محلي في الملفات وواجهات للأتمتة.** كل ما يلي أقوال الشركة من الموقع وملف README.',
        ],
        items: [
          'تفتح Docs وSheets وSlides ملفات .docx و.xlsx و.pptx الحقيقية وتحفظها، وتحتفظ Sheets بالصيغ الحية والرسوم البيانية.',
          'تحرير PDF مباشرة في الصفحة، وتحويل PDF إلى Word أو Excel أو PowerPoint يعمل على الجهاز بحسب الشركة، مع التعرف الضوئي على الحروف من النظام للمسوحات في macOS وWindows.',
          'محررا Markdown وHTML بلوحة الذكاء الاصطناعي نفسها، وتصدير محلي إلى Word.',
          'بحث في الشاشة الرئيسية عبر مستنداتك من فهرس محلي، وميزة Ask AI التي تجيب من الملفات المميّزة بنجمة مع الاستشهادات.',
          'خطوة اختيارية لإعادة ترتيب نتائج البحث ترسل مقتطفات إلى نقطة نموذج تختارها، وهي متوقفة افتراضيًا.',
          'سطر أوامر genoffice ومهارة وكيل وخادم MCP (29 أداة بحسب README) لوكلاء البرمجة.',
          'تُفتح ملفات .doc و.xls و.ppt القديمة وملفات OpenDocument وHancom كنسخ OOXML محوّلة، ولا يكتب الحفظ الصيغة القديمة أبدًا.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'محلي أم سحابي: إلى أين تذهب بياناتك',
        content: [
          '**تحرير المستندات محلي، لكن الذكاء الاصطناعي يعمل في السحابة ما لم تربط خادمك الخاص.** هذه أهم نقطة للقراء الذين يريدون ذكاءً اصطناعيًا محليًا.',
          'بحسب README والأسئلة الشائعة، يتم الفتح والتحرير والحفظ وتحويل PDF وفهرسة الملفات للبحث على جهازك. وتحتاج ميزات الذكاء الاصطناعي إلى اتصال بالشبكة وتستخدم إما تسجيل الدخول إلى Genspark الذي يوجّه الطلبات عبر وسيط Genspark إلى نماذج Claude وGPT وGemini، أو مفتاح API الخاص بك لمزوّدين مثل OpenAI وAnthropic وGoogle وDeepSeek وOpenRouter.',
          'يذكر README أيضًا خانة مخصصة لأي نقطة اتصال متوافقة مع OpenAI «بما في ذلك خوادم النماذج المحلية». ولا يذكر Ollama ولا LM Studio، ولم تجرّب PromptQuorum نموذجًا محليًا مع GenOffice، لذا اعتبر الاستخدام المحلي ممكنًا لكنه غير متحقق منه.',
          'يقول PRIVACY.md إن الإصدارات الرسمية المعبأة ترسل افتراضيًا أحداثًا محدودة إلى Google Analytics 4 منذ أول تشغيل، ويمكنك الانسحاب من الإعدادات. ويسرد أحداثًا مثل تشغيل التطبيق ونوع الملف، ويقول إن الإحصاءات لا تتضمن أبدًا محتوى المستندات أو أسماء الملفات أو مساراتها. وترسل إعادة ترتيب البحث الاختيارية حتى 20 مقتطفًا من نص المستندات إلى النقطة التي تحددها. لم تتحقق PromptQuorum من هذه الأقوال.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب GenOffice من يريد بديلًا مكتبيًا مفتوح المصدر مع الذكاء الاصطناعي ويقبل استدعاءات الذكاء الاصطناعي السحابية.**',
        ],
        items: [
          'مستخدمون يعملون بملفات .docx و.xlsx و.pptx ويريدون لوحة ذكاء اصطناعي دون اشتراك Microsoft 365.',
          'مطوّرون يريدون أن ينشئ وكيل البرمجة لديهم ملفات Office أو يحرّرها عبر سطر أوامر أو MCP.',
          'فرق تستطيع ربط خادمها الخاص المتوافق مع OpenAI وتريد تجربته مع محرر مكتبي.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'الحدود وما لم نتمكن من التحقق منه',
        content: [
          '**لدى GenOffice حدود معلنة، وتبقى عدة تفاصيل غير متحقق منها.**',
        ],
        items: [
          'غير مناسب: لمن يحتاج إلى ذكاء اصطناعي يعمل دون اتصال كليًا مباشرة بعد التثبيت. مسارات الذكاء الاصطناعي الافتراضية سحابية ولا يصف README نموذجًا مضمّنًا.',
          'حد معلن: تقول الأسئلة الشائعة للشركة إن التنسيقات المعقدة قد تختلف، وتوصي بفحص الملفات المهمة قبل مشاركتها.',
          'حد معلن: الملفات القديمة وملفات OpenDocument استيراد فقط، تُحوَّل في اتجاه واحد إلى OOXML وقد تفقد ميزات كانت في الصيغة الأصلية.',
          'غير متحقق منه: مدى جودة تعديل الذكاء الاصطناعي للمستندات ومدى أمانة بقاء ملفات Word وExcel وPowerPoint عند الحفظ. لم تختبر PromptQuorum أيًا منهما.',
          'غير متحقق منه: أسعار رصيد Genspark وحدوده. لم يُقرأ أي سعر للرصيد.',
          'غير متحقق منه: سياسة خصوصية Genspark التي أعادت خطأ وصول عندما حاولت PromptQuorum فتحها. ولم تجد PromptQuorum صفحة خصوصية خاصة بموقع genoffice.ai.',
          'لم يُفحص: مراجعات مستقلة وتقارير المستخدمين. المشروع حديث، وقد أُنشئ مستودعه في 31 يوليو 2026.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'المنافسون والبدائل',
        itemHeadings: true,
        content: [
          '**لا توجد حتى الآن مراجعة من PromptQuorum لأي حزمة مكتبية أخرى لسطح المكتب. الأدوات التالية هي أقرب أدوات إنشاء المستندات التي تمت مراجعتها، وتغطي كل منها جزءًا فقط مما يفعله GenOffice.**',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          {
            'التطبيق': '[Presenton](/ar/power-local-llm/presenton-review)',
            'المنصات': 'macOS وLinux وDocker والويب',
            'السعر / الرخصة': 'سطح المكتب مجاني / Apache 2.0',
            'الفرق الأبرز': 'يولّد العروض التقديمية فقط، ويدعم Ollama وLM Studio',
          },
          {
            'التطبيق': '[SoloMD](/ar/power-local-llm/solomd-review)',
            'المنصات': 'macOS وWindows وLinux وiOS وAndroid',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'ملاحظات Markdown مع كشف تلقائي للنماذج المحلية، وWord عبر الاستيراد والتصدير فقط',
          },
          {
            'التطبيق': '[Oleafly](/ar/power-local-llm/oleafly-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الرخصة': 'مجاني / AGPL-3.0',
            'الفرق الأبرز': 'أوراق LaTeX وTypst وMarkdown مع وكلاء ذكاء اصطناعي اختياريين',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل GenOffice مجاني؟',
            a: 'التطبيقات مجانية ومفتوحة المصدر وخالية من الإعلانات بحسب الموقع والأسئلة الشائعة في README. تستخدم ميزات الذكاء الاصطناعي رصيد Genspark أو مفتاح المزوّد الخاص بك، وقد يفرض المزوّد رسوم استخدام.',
          },
          {
            q: 'هل يستطيع GenOffice استخدام نموذج محلي؟',
            a: 'ربما. يقول README إن نقطة اتصال مخصصة متوافقة مع OpenAI يمكن أن تكون خادم نماذج محليًا، لكنه لا يذكر إعدادًا مع Ollama أو LM Studio، ولم تختبره PromptQuorum.',
          },
          {
            q: 'هل يعمل دون اتصال بالإنترنت؟',
            a: 'يعمل التحرير والحفظ وتحويل PDF دون الذكاء الاصطناعي بحسب الأسئلة الشائعة. أما ميزات الذكاء الاصطناعي فتحتاج إلى اتصال بالشبكة ما لم يكن خادمك الخاص متاحًا.',
          },
          {
            q: 'هل يمكنني إيقاف لوحة الذكاء الاصطناعي؟',
            a: 'نعم بحسب README: في الإعدادات مفتاح لإخفاء الشريط الجانبي للذكاء الاصطناعي، لكن أي إجراء صريح للذكاء الاصطناعي يفتحه من جديد.',
          },
          {
            q: 'هل يستطيع Claude Code أو Cursor استخدامه؟',
            a: 'بحسب README نعم، عبر سطر أوامر genoffice مع مهارة قابلة للتثبيت أو عبر خادم MCP. كلاهما يعمل على جهازك، ولا تذهب إلى المزوّد المضبوط إلا استدعاءات البحث والوسائط.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق GenOffice نظرة إن كنت تريد بديلًا مكتبيًا مفتوح المصدر بذكاء اصطناعي مدمج وتقبل استدعاءات الذكاء الاصطناعي السحابية.**',
          'على الورق يغطي الكثير: صيغ Word وExcel وPowerPoint الحقيقية، وتحرير PDF، ومثبّتات موقّعة على ثلاثة أنظمة، وسطر أوامر وMCP للوكلاء، وتطويرًا نشطًا مع إصدار في 19 نوفمبر 2026.',
          'تظهر المقايضات من صفحات الشركة نفسها: الذكاء الاصطناعي سحابي افتراضيًا، والنماذج المحلية خيار غير متحقق منه عبر نقطة اتصال مخصصة، والإصدارات الرسمية ترسل إحصاءات استخدام ما لم تنسحب، والمشروع عمره بضعة أشهر فقط. لم تختبر PromptQuorum التطبيق، لذا جرّبه أولًا على نسخ من ملفاتك.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع GenOffice](https://genoffice.ai) — وصف الشركة والأسئلة الشائعة وأزرار التنزيل، روجع في 20 نوفمبر 2026.',
          '[مستودع GenOffice على GitHub](https://github.com/genspark-ai/genoffice) — README والترخيص وإشعار المجلد المؤسسي، روجع في 20 نوفمبر 2026.',
          '[إشعار خصوصية GenOffice](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md) — التحليلات وإعادة ترتيب البحث، آخر تحديث 12 نوفمبر 2026، روجع في 20 نوفمبر 2026.',
          '[الإصدار 0.13.615](https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615) — أحدث إصدار وتاريخه وملفات التثبيت، روجع في 20 نوفمبر 2026.',
          '[شروط Genspark](https://www.genspark.ai/terms) — مرتبطة من تذييل genoffice.ai؛ اسم الشركة والقانون الواجب التطبيق، روجعت في 20 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Presenton](/ar/power-local-llm/presenton-review) — مولّد عروض تقديمية بالذكاء الاصطناعي مفتوح المصدر يعمل مع النماذج المحلية.',
          '[مراجعة SoloMD](/ar/power-local-llm/solomd-review) — تطبيق ملاحظات Markdown يدعم النماذج المحلية.',
          '[مراجعة Oleafly](/ar/power-local-llm/oleafly-review) — محرر مفتوح المصدر لأوراق LaTeX وTypst وMarkdown.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-21',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/genoffice-review-hero-ko.webp',
    title: 'GenOffice 리뷰: Word·Excel·PowerPoint 파일을 다루는 오픈소스 AI 오피스 제품군',
    seoTitle: 'GenOffice 리뷰: 오픈소스 AI 오피스와 개인정보',
    intro:
      'GenOffice는 Genspark가 만든 무료 오픈소스 데스크톱 오피스 제품군으로, 실제 .docx, .xlsx, .pptx 파일을 열고 저장하며 PDF, Markdown, HTML도 편집하고, 모든 편집기에 AI 에이전트가 내장되어 있습니다. 문서는 사용자의 컴퓨터에서 처리되지만 AI 호출은 사용자가 고른 제공업체로 전송되므로, 로컬 AI 도구가 아니라 하이브리드 도구입니다. 이 리뷰는 제작사 웹사이트, README, 개인정보 고지, GitHub 릴리스를 바탕으로 2026년 11월 20일에 확인한 내용입니다. PromptQuorum은 이 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'GenOffice는 AI를 내장한 무료 오픈소스 데스크톱 오피스입니다. Word·Excel·PowerPoint 지원, 편집은 로컬, AI는 기본 클라우드입니다.',
    twitterDescription:
      'GenOffice 리뷰: macOS·Windows·Linux용 무료 오픈소스 AI 오피스 제품군. 파일은 로컬에서 편집하고 AI는 선택한 제공업체에서 실행됩니다.',
    audience:
      'AI가 있는 Microsoft Office의 오픈소스 대안을 찾는 사무 사용자와 팀, 그리고 로컬 모델로 실행되는지 클라우드로 데이터를 보내는지 알아야 하는 독자',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GenOffice',
    targetKeywords: [
      'GenOffice 리뷰',
      'GenOffice AI 오피스 제품군',
      '오픈소스 AI 오피스 제품군',
      'GenOffice 로컬 모델',
      'GenOffice 개인정보',
      'GenOffice Microsoft Office 비교',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**GenOffice는 macOS, Windows, Linux용 무료 오픈소스 데스크톱 오피스 제품군으로, 문서 옆의 AI 에이전트와 함께 실제 Word, Excel, PowerPoint 파일을 편집합니다.** 파일은 사용자의 컴퓨터에서 열고 편집하고 저장하지만, AI 기능은 네트워크 연결이 필요하며 요청을 Genspark 또는 사용자가 API 키를 추가한 제공업체로 보냅니다. 로컬 모델 서버는 OpenAI 호환 사용자 지정 엔드포인트로만 가능하며, PromptQuorum은 이를 시험하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'GenOffice는 무엇이며 AI는 로컬에서 실행됩니까?',
        answer:
          'GenOffice는 Apache 2.0 라이선스의 데스크톱 제품군으로 Docs, Sheets, Slides, PDF, HTML, Markdown 편집기를 갖추고 있습니다. 편집은 로컬이며, AI는 기본적으로 클라우드에서 Genspark 로그인 또는 자체 API 키로 실행됩니다.',
        bullets: [
          '플랫폼: macOS(Apple Silicon 및 Intel), Windows(x64 및 Arm), Linux(.deb, .rpm, AppImage).',
          '가격: 앱은 무료이며, AI는 Genspark 크레딧 또는 자체 제공업체 키를 사용합니다.',
          '형식: .docx, .xlsx, .pptx, PDF, Markdown, HTML이며, 구형 파일과 OpenDocument 파일은 변환된 사본으로 열립니다.',
          '자동화: 코딩 에이전트용 genoffice 명령줄과 MCP 서버.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '설치 방법', anchor: 'get-it' },
      { label: '기능', anchor: 'features' },
      { label: '로컬인가 클라우드인가: 데이터의 행방', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '한계와 확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '경쟁 제품과 대안', anchor: 'alternatives' },
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
            text: 'GenOffice는 Word, Excel, PowerPoint, PDF 파일을 내 컴퓨터에서 편집하는 무료 데스크톱 오피스 제품군이며, 기본적으로 클라우드 제공업체에서 실행되는 AI 에이전트가 더해집니다.',
          },
          {
            type: 'plain-terms',
            text: '모든 편집기에 AI 패널이 있는 Microsoft Office의 오픈소스 대안이라고 생각하면 됩니다. 문서는 내 컴퓨터에 남고, AI가 보는 내용은 연결한 제공업체로 전송됩니다.',
          },
        ],
        items: [
          '다운로드 페이지와 GitHub 릴리스는 macOS와 Windows용 서명된 설치 프로그램과 Linux용 .deb, .rpm, AppImage 패키지를 제공합니다(README).',
          '코드는 Apache 2.0이지만, 향후 엔터프라이즈 모듈을 위한 ee/ 폴더는 별도 라이선스이며 현재는 고지문 외에는 비어 있습니다.',
          'README에 따르면 OpenAI 호환 사용자 지정 엔드포인트는 "로컬 모델 서버"를 가리킬 수 있지만, Ollama나 LM Studio 설정은 언급하지 않으며 FAQ는 AI 기능에 네트워크 연결이 필요하다고 말합니다.',
          '공식 빌드는 기본적으로 제한적인 사용 통계를 보내며, 설정에서 끌 수 있습니다(PRIVACY.md).',
          'PromptQuorum은 이 앱을 테스트하지 않았습니다. 저장소는 2026년 7월 31일에 만들어졌으므로 아직 젊은 프로젝트입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI의 편집은 틀릴 수 있습니다. 제작사 사이트는 복잡한 서식과 중요한 파일을 공유하기 전에 확인하라고 권합니다. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**GenOffice는 Electron 기반 오피스 제품군으로, 여섯 가지 편집기(Docs, Sheets, Slides, PDF, HTML, Markdown)를 갖추고 실제 파일 형식으로 다시 저장합니다.**',
          '이 프로젝트는 Genspark가 GitHub 조직 genspark-ai에서 공개합니다. 최신 릴리스는 2026년 11월 19일에 게시된 0.13.615 버전이며, 저장소의 마지막 푸시도 같은 날이어서 개발이 계속되고 있고 방치된 프로젝트 경고는 해당하지 않습니다. 이전 릴리스는 2026년 11월 12일, 4일, 2일과 10월 30일에 나왔으며, 릴리스 주기가 빠릅니다.',
          'README에 따르면 .docx에 대한 편집은 좁은 범위의 패치로 적용되어 건드리지 않은 부분은 바이트 단위로 그대로 보존되며, AI 편집은 변경 내용 추적이나 diff로 도착하고 한 번의 클릭으로 되돌릴 수 있습니다. 제작사는 또한 앱이 로컬 인덱스로 폴더를 검색하고, 별표를 붙인 파일에 대한 질문에 인용과 함께 답하며, Claude Code, Codex, Cursor 같은 코딩 에이전트가 Office 파일을 만들고 편집할 수 있도록 명령줄, 에이전트 스킬, MCP 서버를 제공한다고 말합니다.',
          '이러한 설명은 제작사의 주장입니다. PromptQuorum은 앱을 실행하지 않았으며 실제 Word, Excel, PowerPoint 파일을 얼마나 잘 처리하는지 측정하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**GenOffice는 공식 웹사이트나 GitHub 릴리스 페이지에서 일반 다운로드로 설치하며, 터미널은 필요하지 않습니다.**',
          '릴리스 0.13.615에는 Apple Silicon용과 Intel용 .dmg, x64와 Arm용 Windows 설치 .exe, AppImage, .deb, .rpm이 있습니다. README에 따르면 macOS와 Windows 설치 프로그램은 서명되어 있고, Linux 패키지는 x86_64와 glibc 2.34 이상이 필요합니다. AppImage에는 FUSE 2 런타임도 필요합니다.',
        ],
        columns: ['플랫폼', '설치 방법'],
        rows: [
          { '플랫폼': '[macOS](https://genoffice.ai/#download)', '설치 방법': 'Apple Silicon 또는 Intel용 .dmg, macOS 11 이상' },
          { '플랫폼': '[Windows](https://genoffice.ai/#download)', '설치 방법': 'x64(Windows 10 이상) 또는 Arm(Windows 11)용 설치 .exe' },
          { '플랫폼': '[Linux](https://genoffice.ai/#download)', '설치 방법': '.deb, .rpm 또는 AppImage, x86_64' },
          { '플랫폼': '[웹사이트](https://genoffice.ai)', '설치 방법': '공식 사이트, FAQ, 다운로드' },
          { '플랫폼': '[개인정보 고지](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md)', '설치 방법': '제작사 고지, 2026년 11월 12일 업데이트' },
          { '플랫폼': '[GitHub](https://github.com/genspark-ai/genoffice)', '설치 방법': '소스 코드와 릴리스 다운로드' },
        ],
        note: '제작사는 RAM이나 GPU 수치를 밝히지 않습니다. 자체 서버를 연결하지 않는 한 AI는 제공업체에서 실행됩니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**GenOffice는 문서 편집기에 AI 에이전트, 로컬 파일 검색, 자동화 연동을 결합합니다.** 아래 항목은 모두 웹사이트와 README에 있는 제작사의 주장입니다.',
        ],
        items: [
          'Docs, Sheets, Slides는 실제 .docx, .xlsx, .pptx 파일을 열고 저장하며, Sheets는 실시간 수식과 차트를 유지합니다.',
          '페이지에서 바로 PDF를 편집하고, PDF를 Word, Excel, PowerPoint로 변환하는 기능이 있으며 제작사에 따르면 기기에서 실행되고, macOS와 Windows에서는 스캔본에 시스템 OCR을 사용합니다.',
          '같은 AI 패널을 쓰는 Markdown 및 HTML 편집기와 Word로의 로컬 내보내기.',
          '로컬 인덱스를 이용한 홈 화면의 문서 검색과, 별표를 붙인 파일에서 인용과 함께 답하는 Ask AI 기능.',
          '선택한 모델 엔드포인트로 발췌문을 보내는 선택적 검색 재정렬 단계로, 기본적으로 꺼져 있습니다.',
          '코딩 에이전트용 genoffice 명령줄, 에이전트 스킬, MCP 서버(README 기준 29개 도구).',
          '구형 .doc, .xls, .ppt와 OpenDocument, Hancom 파일은 변환된 OOXML 사본으로 열리며, 저장할 때 이전 형식으로 쓰지 않습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '로컬인가 클라우드인가: 데이터의 행방',
        content: [
          '**문서 편집은 로컬이지만, 자체 서버를 연결하지 않는 한 AI는 클라우드에서 실행됩니다.** 로컬 AI를 원하는 독자에게 가장 중요한 점입니다.',
          'README와 FAQ에 따르면 열기, 편집, 저장, PDF 변환, 검색용 파일 인덱싱은 사용자의 컴퓨터에서 이루어집니다. AI 기능은 네트워크 연결이 필요하며, 요청을 Genspark 프록시를 거쳐 Claude, GPT, Gemini 모델로 보내는 Genspark 로그인 또는 OpenAI, Anthropic, Google, DeepSeek, OpenRouter 등 제공업체용 자체 API 키를 사용합니다.',
          'README는 "로컬 모델 서버 포함" 모든 OpenAI 호환 엔드포인트를 위한 사용자 지정 칸도 언급합니다. Ollama나 LM Studio는 언급하지 않으며 PromptQuorum도 GenOffice로 로컬 모델을 시험하지 않았으므로, 로컬 사용은 가능하지만 확인되지 않은 것으로 보십시오.',
          'PRIVACY.md에 따르면 공식 패키지 빌드는 첫 실행부터 기본적으로 제한적인 Google Analytics 4 이벤트를 보내며, 설정에서 거부할 수 있습니다. 앱 실행과 파일 형식 같은 이벤트를 나열하고, 통계에는 문서 내용, 파일 이름, 경로가 결코 포함되지 않는다고 밝힙니다. 선택 사항인 검색 재정렬은 문서 텍스트 발췌문을 최대 20개까지 선택한 엔드포인트로 보냅니다. PromptQuorum은 이 내용을 검증하지 않았습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**GenOffice는 AI가 있는 오픈소스 오피스 대안을 원하고 클라우드 AI 호출을 받아들이는 분께 적합합니다.**',
        ],
        items: [
          '.docx, .xlsx, .pptx로 작업하며 Microsoft 365 구독 없이 AI 패널을 원하는 사용자.',
          '코딩 에이전트가 명령줄이나 MCP로 Office 파일을 만들거나 편집하게 하려는 개발자.',
          '자체 OpenAI 호환 서버를 연결할 수 있고 오피스 편집기로 시험해 보려는 팀.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '한계와 확인하지 못한 내용',
        content: [
          '**GenOffice에는 명시된 한계가 있으며, 여러 세부 사항은 확인되지 않았습니다.**',
        ],
        items: [
          '적합하지 않음: 설치 직후 AI를 완전한 오프라인으로 실행해야 하는 분. 기본 AI 경로는 클라우드이며 README는 내장 모델을 설명하지 않습니다.',
          '명시된 한계: 제작사 FAQ는 복잡한 서식이 달라질 수 있다고 하며, 중요한 파일은 공유 전에 확인하라고 권합니다.',
          '명시된 한계: 구형 파일과 OpenDocument 파일은 가져오기 전용이며 OOXML로 한 방향으로만 변환되고, 이전 형식에 있던 기능이 사라질 수 있습니다.',
          '미확인: AI가 문서를 얼마나 잘 편집하는지, Word, Excel, PowerPoint 파일이 저장 후 얼마나 충실하게 유지되는지. PromptQuorum은 둘 다 테스트하지 않았습니다.',
          '미확인: Genspark 크레딧의 가격과 한도. 크레딧 가격은 확인하지 못했습니다.',
          '미확인: PromptQuorum이 열려고 했을 때 접근 오류를 반환한 Genspark 개인정보 처리방침. PromptQuorum은 genoffice.ai 사이트에서 자체 개인정보 페이지를 찾지 못했습니다.',
          '조사하지 않음: 독립적인 리뷰와 사용자 보고. 프로젝트는 젊으며 저장소는 2026년 7월 31일에 만들어졌습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: '경쟁 제품과 대안',
        itemHeadings: true,
        content: [
          '**다른 데스크톱 오피스 제품군에는 아직 PromptQuorum 리뷰가 없습니다. 아래 도구는 리뷰된 도구 중 문서 작성에 가장 가까운 것들이며, 각각 GenOffice가 하는 일의 일부만 다룹니다.**',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          {
            '앱': '[Presenton](/ko/power-local-llm/presenton-review)',
            '플랫폼': 'macOS, Linux, Docker, 웹',
            '가격 / 라이선스': '데스크톱 무료 / Apache 2.0',
            '핵심 차이점': '슬라이드만 생성, Ollama와 LM Studio 지원',
          },
          {
            '앱': '[SoloMD](/ko/power-local-llm/solomd-review)',
            '플랫폼': 'macOS, Windows, Linux, iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이점': '로컬 모델 자동 감지 Markdown 노트, Word는 가져오기·내보내기만 지원',
          },
          {
            '앱': '[Oleafly](/ko/power-local-llm/oleafly-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / AGPL-3.0',
            '핵심 차이점': 'LaTeX, Typst, Markdown 논문 작성, 선택형 AI 에이전트',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'GenOffice는 무료입니까?',
            a: '웹사이트와 README FAQ에 따르면 앱은 무료이고 오픈소스이며 광고가 없습니다. AI 기능은 Genspark 크레딧 또는 자체 제공업체 키를 사용하며, 제공업체가 사용료를 청구할 수 있습니다.',
          },
          {
            q: 'GenOffice는 로컬 모델을 사용할 수 있습니까?',
            a: '가능성은 있습니다. README는 OpenAI 호환 사용자 지정 엔드포인트가 로컬 모델 서버일 수 있다고 하지만, Ollama나 LM Studio 설정은 언급하지 않으며 PromptQuorum도 시험하지 않았습니다.',
          },
          {
            q: '오프라인에서 작동합니까?',
            a: 'FAQ에 따르면 편집, 저장, PDF 변환은 AI 없이 작동합니다. AI 기능은 자체 서버에 접근할 수 있는 경우를 제외하면 네트워크 연결이 필요합니다.',
          },
          {
            q: 'AI 패널을 끌 수 있습니까?',
            a: '네, README에 따르면 설정에 AI 사이드바를 숨기는 스위치가 있습니다. 다만 명시적인 AI 작업을 하면 다시 열립니다.',
          },
          {
            q: 'Claude Code나 Cursor에서 사용할 수 있습니까?',
            a: 'README에 따르면 가능하며, 설치 가능한 스킬이 있는 genoffice 명령줄이나 MCP 서버를 통해 사용합니다. 둘 다 사용자의 컴퓨터에서 실행되고, 검색과 미디어 호출만 설정한 제공업체로 갑니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**AI가 내장된 오픈소스 오피스 대안을 원하고 클라우드 AI 호출을 받아들인다면 GenOffice는 살펴볼 만합니다.**',
          '서류상으로는 많은 것을 갖췄습니다. 실제 Word, Excel, PowerPoint 형식, PDF 편집, 세 가지 운영체제용 서명된 설치 프로그램, 에이전트용 명령줄과 MCP, 그리고 2026년 11월 19일 릴리스가 보여 주는 활발한 개발입니다.',
          '절충점은 제작사 자신의 페이지에서 드러납니다. AI는 기본적으로 클라우드이고, 로컬 모델은 사용자 지정 엔드포인트를 통한 확인되지 않은 선택지이며, 공식 빌드는 거부하지 않으면 사용 통계를 보내고, 프로젝트는 생긴 지 몇 달밖에 되지 않았습니다. PromptQuorum은 앱을 테스트하지 않았으므로 먼저 파일 사본으로 시험해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GenOffice 웹사이트](https://genoffice.ai) — 제작사 설명, FAQ, 다운로드 버튼. 2026년 11월 20일 확인.',
          '[GenOffice GitHub 저장소](https://github.com/genspark-ai/genoffice) — README, 라이선스, 엔터프라이즈 폴더 고지. 2026년 11월 20일 확인.',
          '[GenOffice 개인정보 고지](https://github.com/genspark-ai/genoffice/blob/main/PRIVACY.md) — 분석과 검색 재정렬. 2026년 11월 12일 업데이트, 2026년 11월 20일 확인.',
          '[릴리스 0.13.615](https://github.com/genspark-ai/genoffice/releases/tag/v0.13.615) — 최신 버전, 날짜, 설치 파일. 2026년 11월 20일 확인.',
          '[Genspark 약관](https://www.genspark.ai/terms) — genoffice.ai 하단에서 링크됨. 회사 이름과 준거법. 2026년 11월 20일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Presenton 리뷰](/ko/power-local-llm/presenton-review) — 로컬 모델과 함께 쓸 수 있는 오픈소스 AI 슬라이드 생성기.',
          '[SoloMD 리뷰](/ko/power-local-llm/solomd-review) — 로컬 모델을 지원하는 Markdown 노트 앱.',
          '[Oleafly 리뷰](/ko/power-local-llm/oleafly-review) — LaTeX, Typst, Markdown 논문용 오픈소스 편집기.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}

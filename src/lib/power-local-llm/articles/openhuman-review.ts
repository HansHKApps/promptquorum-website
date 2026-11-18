// OpenHuman Review: Open-Source Desktop AI Agent With Built-In Memory
// Slug: openhuman-review
// Companion to: openclaw-review, hermes-agent-review, agent-zero-review, nanobot-review
// Sources (all read 2026-11-18, no hands-on testing): maker website (tinyhumans.ai/openhuman), GitHub repository, README and Releases (gh api),
// docs on tinyhumans.gitbook.io (getting started, Privacy Mode, local and BYOK models), privacy policy and terms, tinyhumans.ai/pricing.
// The request came from the site owner, not from the maker. Maker benchmark claims are attributed and were not rerun.
// Last upstream update 2026-11-18 (last commit; latest release v0.64.15 on 2026-10-09) => no stale warning.
// Theme: 'Local AI Agents & Tool Use' (same as the other agent reviews).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openhuman-review-hero-en.webp',
    title: 'OpenHuman Review: Open-Source Desktop AI Agent With Built-In Memory',
    seoTitle: 'OpenHuman Review: Open-Source AI Agent With Memory and MCP',
    intro:
      'OpenHuman is a free, open-source desktop AI agent from TinyHumans for macOS, Windows and Linux. It combines built-in memory, app integrations, MCP servers and skills, and it can use local models or cloud models. This review is based on the maker\'s website, the GitHub repository and its documentation, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'OpenHuman is a GPL-3.0 desktop AI agent with built-in memory, 119 app integrations, MCP and local models via Ollama. Install, privacy and limits.',
    twitterDescription:
      'OpenHuman is an open-source desktop AI agent with memory, MCP and local models. Early beta, GPL-3.0, with cloud and privacy trade-offs.',
    audience:
      'People and developers who want one desktop agent with memory and app integrations, and who are weighing local against cloud models',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenHuman',
    targetKeywords: [
      'OpenHuman review',
      'OpenHuman AI',
      'OpenHuman local models',
      'OpenHuman privacy',
      'OpenHuman install',
      'open-source desktop AI agent',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenHuman is a GPL-3.0 desktop AI agent for macOS, Windows and Linux that adds built-in memory, app integrations, MCP servers and skills, and works with local models or your own cloud keys.** Its README labels the project early beta. The default setup uses hosted TinyHumans services, so check the privacy settings if you want local-only use.',
    quickAnswerTop: {
      en: {
        question: 'What is OpenHuman and who is it for?',
        answer:
          'OpenHuman is an open-source desktop agent that remembers what it learns from your files and connected apps and can act across them. It suits people who want one agent app with memory and integrations and who accept an early-beta project.',
        bullets: [
          'Platforms: macOS, Windows and Linux desktops.',
          'Installers: .dmg, .exe, .msi, .AppImage and .deb on the GitHub release page.',
          'Local models through Ollama, LM Studio or MLX; cloud models through your own keys or the managed route.',
          'Free and GPL-3.0; pricing for the managed services is not published on the pages we read.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
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
            text: 'OpenHuman is an open-source desktop AI agent with built-in memory, app integrations, MCP servers and skills that can run on local models or on cloud models.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as one app where an AI agent keeps a memory of your files and accounts and can carry out tasks across your tools. You choose whether the AI runs on your own machine or in the cloud.',
          },
        ],
        items: [
          'The maker\'s README labels the project early beta, so expect rough edges.',
          'A normal download exists for each desktop OS; a curl or PowerShell install script is the terminal alternative.',
          'Local models run through a runtime you install yourself; the app downloads no model weights.',
          'Privacy Mode can restrict inference and network tools to local, but speech-to-text is outside it.',
          'PromptQuorum has not tested the app, and the maker\'s speed and cost claims were not rerun.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'An agent that connects to your email, files and browser can read and act on sensitive material. Review each integration and approval setting before you connect accounts. This is general information, not legal advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**OpenHuman is a desktop agent that keeps its own memory and connects to your apps, tools and models.**',
          'The app is made by Tiny Human Intelligence Inc (TinyHumans); its privacy policy lists a Delaware, United States address. The GitHub repository is licensed GPL-3.0. Version 0.64.15, published on 9 October 2026, is the latest GitHub release, and the repository had a commit on 18 November 2026, so development is ongoing and no stale-project warning applies.',
          'Per the README, the same Rust core serves as a desktop app, a terminal app, a headless server and an embeddable library. The README says memory is recalled before every turn with citations, and that the agent can drive a real Chrome browser and desktop apps and asks before actions it cannot undo.',
          'The maker also publishes a benchmark of ten SWE-bench coding tasks that compares OpenHuman with six other agent tools on time, tokens, cost and memory use. These are the maker\'s own results; PromptQuorum did not rerun them and makes no speed or cost claim of its own.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install OpenHuman with a normal per-OS download from the maker\'s website or the GitHub release page, and a terminal install script also exists.**',
          'The README says the easiest way is the desktop app. The release page listed a .dmg for Apple Silicon and Intel Macs, an .exe and an .msi for Windows, and an .AppImage and .deb packages for Linux. The docs recommend 4 GB of RAM and say to plan for 16 GB or more when you ingest very large mailboxes or repositories or run a local model.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[Website](https://tinyhumans.ai/openhuman)', 'How to get it': 'Download page detects your platform' },
          { 'Platform': '[macOS](https://github.com/tinyhumansai/openhuman/releases/latest)', 'How to get it': '.dmg (Apple Silicon and Intel)' },
          { 'Platform': '[Windows](https://github.com/tinyhumansai/openhuman/releases/latest)', 'How to get it': '.exe installer or .msi' },
          { 'Platform': '[Linux](https://github.com/tinyhumansai/openhuman/releases/latest)', 'How to get it': '.AppImage or .deb (x86_64 and ARM64)' },
          { 'Platform': '[Terminal](https://github.com/tinyhumansai/openhuman#install)', 'How to get it': 'curl (macOS/Linux) or PowerShell script' },
          { 'Platform': '[Privacy policy](https://tinyhumans.ai/privacy)', 'How to get it': 'Maker\'s privacy policy' },
        ],
        note: 'The first screen of the app is a sign-in screen. The docs do not say whether you can skip it.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**OpenHuman combines an agent loop with memory, integrations and model routing.** All items below are maker claims from the README and docs.',
        ],
        items: [
          'Built-in memory over files, repositories, feeds and apps, recalled before every turn with citations; a different memory engine can be selected in settings.',
          '119 app integrations through Composio with triggers, plus MCP servers and skill bundles.',
          'Local models through Ollama, LM Studio or MLX, and bring-your-own-key access to 26 cloud providers, with routing per workload.',
          'Native tools including a shell and coder, scraper, documents, image and video generation, and scheduled jobs.',
          'Browser and desktop control, with an approval gate before irreversible actions and sandboxed execution (OS jail or Docker).',
          'Durable workflow graphs with cron, event or manual triggers and approval steps.',
          '14 messaging channels, such as Telegram, Discord, iMessage and email, as front ends for the agent.',
          'A live voice agent with dictation and spoken replies.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**Data flow depends on which route you choose in onboarding and whether Privacy Mode is on.**',
          'The docs say the default setup uses OpenHuman-hosted services for sign-in, model routing, OAuth, tool calls and web search. Onboarding lets you instead set up your own model, search, embeddings and connector keys. The site FAQ says the memory the app builds about you lives on your machine and that model calls go to whichever provider you point it at.',
          'Privacy Mode has three values; per the docs only local_only restricts anything today. It refuses external chat providers and blocks network tools, web search, integrations and cloud embeddings. The docs say speech-to-text is not covered, so dictation goes to the hosted proxy or your configured provider unless you disable the voice component.',
          'The maker\'s privacy policy says the service is designed around zero retention by default, that temporary task data is deleted within a maximum of 30 days, and that personal information is not sold or rented. It does not name the model providers or say what stays on the device. PromptQuorum did not audit any of these statements.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**OpenHuman fits people who want one desktop agent with memory and integrations and can tolerate an early-beta project.**',
        ],
        items: [
          'People who want an agent that remembers context from their files and connected apps.',
          'Users of Ollama, LM Studio or MLX who want a desktop agent on top of a local model.',
          'Developers who want the same core as a Rust library or a headless server.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**OpenHuman is a poor fit if you need a stable, audited product, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who needs a mature release; the README itself says early beta.',
          'Not a fit: users who expect fully local use by default; the default route uses hosted services.',
          'Unverified: pricing of the managed TinyHumans services for OpenHuman. The pricing page lists plans for a different product (OpenCompany) and does not mention OpenHuman.',
          'Unverified: whether a sign-in can be skipped. The docs show a sign-in screen on first run without saying so either way.',
          'Unverified: the maker\'s benchmark figures, which PromptQuorum did not rerun, and social-media user counts quoted on the maker\'s site.',
          'Unverified: any GPU requirement and any disk figure; the docs give neither.',
          'Unverified: telemetry and analytics inside the app. The privacy policy does not address them directly.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenHuman vs Alternatives',
        itemHeadings: true,
        content: [
          '**OpenHuman sits among open-source personal agents that bring their own memory and tools. PromptQuorum has not compared them hands-on.** The table uses directory data only.',
        ],
        columns: ['Tool', 'License / interface'],
        rows: [
          { 'Tool': 'OpenHuman', 'License / interface': 'GPL-3.0; desktop app, CLI, Rust library' },
          { 'Tool': 'OpenClaw', 'License / interface': 'MIT; library' },
          { 'Tool': 'Hermes Agent', 'License / interface': 'MIT; CLI; macOS and Linux' },
          { 'Tool': 'Agent Zero', 'License / interface': 'MIT; CLI and web' },
          { 'Tool': 'Nanobot', 'License / interface': 'MIT; web and CLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can OpenHuman run entirely on local models?',
            a: 'The docs say it can use Ollama, LM Studio, MLX or an OpenAI-compatible local server, and that Privacy Mode local_only keeps inference on the device. You install the runtime and pull the models yourself, and speech-to-text is not covered by local_only.',
          },
          {
            q: 'Is OpenHuman free?',
            a: 'The app is GPL-3.0 and the maker calls it free. The default setup relies on hosted TinyHumans services whose pricing for OpenHuman was not found, and you can bring your own providers instead.',
          },
          {
            q: 'Which operating systems does it support?',
            a: 'macOS, Windows and Linux. The release page lists a .dmg, an .exe, an .msi, an .AppImage and .deb packages for x86_64 and ARM64 where applicable.',
          },
          {
            q: 'How does OpenHuman connect to other apps?',
            a: 'Per the README, through 119 OAuth integrations via Composio, MCP servers and skill bundles. The docs say each integration needs its own OAuth approval.',
          },
          {
            q: 'Can I use it from code?',
            a: 'Yes, per the README: the core is also a Rust library with a typed embedding API, and a terminal app and headless server are described.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**OpenHuman is worth a look if you want an open-source desktop agent with memory and many integrations and you accept early-beta software.**',
          'On paper it covers a lot: installers for all three desktop systems, local and cloud models, MCP, an approval gate and a Privacy Mode. Development is active, with a release on 9 October 2026 and a commit on 18 November 2026.',
          'The trade-offs are real. The default route uses hosted services, speech-to-text sits outside Privacy Mode, managed pricing is unverified, and the speed and cost figures are the maker\'s own. PromptQuorum has not tested the app. Try it with a non-sensitive account first and set local models and approvals before connecting real data.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenHuman website](https://tinyhumans.ai/openhuman) — maker\'s description, FAQ and download page, checked 18 November 2026.',
          '[OpenHuman GitHub repository](https://github.com/tinyhumansai/openhuman) — license, last commit and README, checked 18 November 2026.',
          '[Release v0.64.15](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.15) — latest release, date and installer files, checked 18 November 2026.',
          '[Getting started docs](https://tinyhumans.gitbook.io/openhuman/overview/getting-started) — install, first run, RAM guidance, checked 18 November 2026.',
          '[Privacy Mode docs](https://tinyhumans.gitbook.io/openhuman/features/privacy-mode) — what local_only restricts and what it does not, checked 18 November 2026.',
          '[Local and BYOK models docs](https://tinyhumans.gitbook.io/openhuman/features/model-routing/local-and-byok-models) — supported runtimes and providers, checked 18 November 2026.',
          '[Privacy policy](https://tinyhumans.ai/privacy) — company name, address, retention statements, checked 18 November 2026.',
          '[Terms of service](https://tinyhumans.ai/terms) — company name and address, checked 18 November 2026.',
          '[TinyHumans pricing](https://tinyhumans.ai/pricing) — plans for a different product, no OpenHuman pricing, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[OpenClaw Review](/power-local-llm/openclaw-review) — Open-source agent gateway.',
          '[Hermes Agent Review](/power-local-llm/hermes-agent-review) — Self-hosted agent with persistent memory.',
          '[Agent Zero Review](/power-local-llm/agent-zero-review) — Minimal autonomous agent with coding ability.',
          '[Nanobot Review](/power-local-llm/nanobot-review) — Self-hosted personal agent with MCP tools.',
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
    next_refresh_due: '2027-05-19',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openhuman-review-hero-de.webp',
    title: 'OpenHuman-Rezension: quelloffener Desktop-KI-Agent mit eingebautem Gedächtnis',
    seoTitle: 'OpenHuman-Rezension: Open-Source-KI-Agent mit Gedächtnis',
    intro:
      'OpenHuman ist ein kostenloser, quelloffener Desktop-KI-Agent von TinyHumans für macOS, Windows und Linux. Er verbindet eingebautes Gedächtnis, App-Integrationen, MCP-Server und Skills und kann lokale oder Cloud-Modelle nutzen. Diese Rezension stützt sich auf die Website des Herstellers, das GitHub-Repository und die Dokumentation, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'OpenHuman ist ein Desktop-KI-Agent unter GPL-3.0 mit Gedächtnis, 119 App-Integrationen, MCP und lokalen Modellen via Ollama. Installation, Datenschutz.',
    twitterDescription:
      'OpenHuman ist ein quelloffener Desktop-KI-Agent mit Gedächtnis, MCP und lokalen Modellen. Frühe Beta, GPL-3.0, mit Cloud- und Datenschutz-Kompromissen.',
    audience:
      'Privatpersonen und Entwickler, die einen Desktop-Agenten mit Gedächtnis und App-Integrationen suchen und lokale gegen Cloud-Modelle abwägen',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenHuman',
    targetKeywords: [
      'OpenHuman Rezension',
      'OpenHuman KI',
      'OpenHuman lokale Modelle',
      'OpenHuman Datenschutz',
      'OpenHuman Installation',
      'quelloffener Desktop-KI-Agent',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenHuman ist ein Desktop-KI-Agent unter GPL-3.0 für macOS, Windows und Linux, der eingebautes Gedächtnis, App-Integrationen, MCP-Server und Skills ergänzt und mit lokalen Modellen oder Ihren eigenen Cloud-Schlüsseln arbeitet.** Die README bezeichnet das Projekt als frühe Beta. Die Standardeinrichtung nutzt gehostete TinyHumans-Dienste; prüfen Sie die Datenschutzeinstellungen, wenn Sie rein lokal arbeiten möchten.',
    quickAnswerTop: {
      de: {
        question: 'Was ist OpenHuman, und für wen ist es gedacht?',
        answer:
          'OpenHuman ist ein quelloffener Desktop-Agent, der sich merkt, was er aus Ihren Dateien und verbundenen Apps lernt, und über diese hinweg handeln kann. Er eignet sich für Menschen, die eine Agent-App mit Gedächtnis und Integrationen wünschen und ein Projekt in früher Beta akzeptieren.',
        bullets: [
          'Plattformen: Desktops mit macOS, Windows und Linux.',
          'Installer: .dmg, .exe, .msi, .AppImage und .deb auf der GitHub-Release-Seite.',
          'Lokale Modelle über Ollama, LM Studio oder MLX; Cloud-Modelle über eigene Schlüssel oder die verwaltete Route.',
          'Kostenlos und GPL-3.0; Preise der verwalteten Dienste sind auf den gelesenen Seiten nicht veröffentlicht.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie die App', anchor: 'get-it' },
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
            text: 'OpenHuman ist ein quelloffener Desktop-KI-Agent mit eingebautem Gedächtnis, App-Integrationen, MCP-Servern und Skills, der mit lokalen oder mit Cloud-Modellen laufen kann.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als eine App vor, in der ein KI-Agent ein Gedächtnis Ihrer Dateien und Konten führt und Aufgaben über Ihre Werkzeuge hinweg ausführen kann. Sie entscheiden, ob die KI auf Ihrem eigenen Rechner oder in der Cloud läuft.',
          },
        ],
        items: [
          'Die README des Herstellers bezeichnet das Projekt als frühe Beta; rechnen Sie mit Ecken und Kanten.',
          'Für jedes Desktop-Betriebssystem gibt es einen normalen Download; ein curl- oder PowerShell-Installationsskript ist die Alternative im Terminal.',
          'Lokale Modelle laufen über eine Laufzeitumgebung, die Sie selbst installieren; die App lädt keine Modellgewichte herunter.',
          'Der Datenschutzmodus kann Inferenz und Netzwerkwerkzeuge auf lokal beschränken, die Spracherkennung liegt jedoch außerhalb davon.',
          'PromptQuorum hat die App nicht getestet, und die Geschwindigkeits- und Kostenangaben des Herstellers wurden nicht nachgemessen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ein Agent, der sich mit Ihrer E-Mail, Ihren Dateien und Ihrem Browser verbindet, kann sensible Inhalte lesen und darauf reagieren. Prüfen Sie jede Integration und jede Freigabeeinstellung, bevor Sie Konten verbinden. Dies sind allgemeine Informationen, keine Rechtsberatung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**OpenHuman ist ein Desktop-Agent, der ein eigenes Gedächtnis führt und sich mit Ihren Apps, Werkzeugen und Modellen verbindet.**',
          'Die App stammt von Tiny Human Intelligence Inc (TinyHumans); die Datenschutzerklärung nennt eine Adresse in Delaware, USA. Das GitHub-Repository steht unter GPL-3.0. Version 0.64.15, veröffentlicht am 9. Oktober 2026, ist das neueste GitHub-Release, und im Repository gab es am 18. November 2026 einen Commit; die Entwicklung läuft also weiter, und eine Warnung vor einem veralteten Projekt gilt nicht.',
          'Laut README dient derselbe Rust-Kern als Desktop-App, Terminal-App, Headless-Server und einbettbare Bibliothek. Die README sagt, das Gedächtnis werde vor jeder Runde mit Quellenangaben abgerufen, und der Agent könne einen echten Chrome-Browser und Desktop-Apps bedienen und frage vor Aktionen nach, die sich nicht rückgängig machen lassen.',
          'Der Hersteller veröffentlicht außerdem einen Benchmark mit zehn SWE-bench-Programmieraufgaben, der OpenHuman bei Zeit, Token, Kosten und Speicherverbrauch mit sechs anderen Agent-Werkzeugen vergleicht. Das sind die eigenen Ergebnisse des Herstellers; PromptQuorum hat sie nicht nachgemessen und stellt keine eigene Geschwindigkeits- oder Kostenbehauptung auf.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie installieren OpenHuman mit einem normalen Download pro Betriebssystem von der Website des Herstellers oder der GitHub-Release-Seite; ein Installationsskript für das Terminal gibt es ebenfalls.**',
          'Laut README ist die Desktop-App der einfachste Weg. Die Release-Seite listete eine .dmg für Macs mit Apple Silicon und Intel, eine .exe und eine .msi für Windows sowie eine .AppImage und .deb-Pakete für Linux. Die Dokumentation empfiehlt 4 GB RAM und rät zu 16 GB oder mehr, wenn Sie sehr große Postfächer oder Repositories einlesen oder ein lokales Modell betreiben.',
        ],
        columns: ['Plattform', 'So bekommen Sie sie'],
        rows: [
          { 'Plattform': '[Website](https://tinyhumans.ai/openhuman)', 'So bekommen Sie sie': 'Download-Seite erkennt Ihre Plattform' },
          { 'Plattform': '[macOS](https://github.com/tinyhumansai/openhuman/releases/latest)', 'So bekommen Sie sie': '.dmg (Apple Silicon und Intel)' },
          { 'Plattform': '[Windows](https://github.com/tinyhumansai/openhuman/releases/latest)', 'So bekommen Sie sie': '.exe-Installer oder .msi' },
          { 'Plattform': '[Linux](https://github.com/tinyhumansai/openhuman/releases/latest)', 'So bekommen Sie sie': '.AppImage oder .deb (x86_64 und ARM64)' },
          { 'Plattform': '[Terminal](https://github.com/tinyhumansai/openhuman#install)', 'So bekommen Sie sie': 'curl (macOS/Linux) oder PowerShell-Skript' },
          { 'Plattform': '[Datenschutzerklärung](https://tinyhumans.ai/privacy)', 'So bekommen Sie sie': 'Datenschutzerklärung des Herstellers' },
        ],
        note: 'Der erste Bildschirm der App ist eine Anmeldung. Die Dokumentation sagt nicht, ob Sie sie überspringen können.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**OpenHuman verbindet eine Agentenschleife mit Gedächtnis, Integrationen und Modell-Routing.** Alle folgenden Punkte sind Angaben des Herstellers aus README und Dokumentation.',
        ],
        items: [
          'Eingebautes Gedächtnis über Dateien, Repositories, Feeds und Apps, vor jeder Runde mit Quellenangaben abgerufen; in den Einstellungen lässt sich eine andere Gedächtnis-Engine wählen.',
          '119 App-Integrationen über Composio mit Triggern sowie MCP-Server und Skill-Pakete.',
          'Lokale Modelle über Ollama, LM Studio oder MLX und Zugriff mit eigenem Schlüssel auf 26 Cloud-Anbieter, mit Routing pro Aufgabe.',
          'Native Werkzeuge, darunter Shell und Coder, Scraper, Dokumente, Bild- und Videoerzeugung sowie geplante Aufgaben.',
          'Browser- und Desktop-Steuerung mit einer Freigabeschranke vor unumkehrbaren Aktionen und abgeschotteter Ausführung (OS-Jail oder Docker).',
          'Dauerhafte Workflow-Graphen mit Cron-, Ereignis- oder manuellen Triggern und Freigabeschritten.',
          '14 Messaging-Kanäle wie Telegram, Discord, iMessage und E-Mail als Frontends für den Agenten.',
          'Ein Live-Sprachagent mit Diktat und gesprochenen Antworten.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Der Datenfluss hängt davon ab, welche Route Sie beim Einrichten wählen und ob der Datenschutzmodus aktiv ist.**',
          'Laut Dokumentation nutzt die Standardeinrichtung von OpenHuman gehostete Dienste für Anmeldung, Modell-Routing, OAuth, Werkzeugaufrufe und Websuche. Beim Einrichten können Sie stattdessen eigene Schlüssel für Modell, Suche, Embeddings und Konnektoren hinterlegen. Die FAQ der Website sagt, das von der App aufgebaute Gedächtnis über Sie liege auf Ihrem Rechner, und Modellaufrufe gingen an den Anbieter, auf den Sie die App zeigen lassen.',
          'Der Datenschutzmodus hat drei Werte; laut Dokumentation schränkt derzeit nur local_only etwas ein. Er lehnt externe Chat-Anbieter ab und sperrt Netzwerkwerkzeuge, Websuche, Integrationen und Cloud-Embeddings. Die Dokumentation sagt, die Spracherkennung sei nicht abgedeckt, das Diktat gehe also an den gehosteten Proxy oder Ihren konfigurierten Anbieter, sofern Sie die Sprachkomponente nicht deaktivieren.',
          'Die Datenschutzerklärung des Herstellers sagt, der Dienst sei standardmäßig auf null Speicherung ausgelegt, temporäre Aufgabendaten würden spätestens nach 30 Tagen gelöscht, und personenbezogene Daten würden weder verkauft noch vermietet. Sie nennt weder die Modellanbieter noch, was auf dem Gerät bleibt. PromptQuorum hat keine dieser Aussagen geprüft.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**OpenHuman passt zu Menschen, die einen Desktop-Agenten mit Gedächtnis und Integrationen wünschen und ein Projekt in früher Beta verkraften.**',
        ],
        items: [
          'Menschen, die einen Agenten möchten, der sich Kontext aus ihren Dateien und verbundenen Apps merkt.',
          'Nutzer von Ollama, LM Studio oder MLX, die einen Desktop-Agenten auf einem lokalen Modell wünschen.',
          'Entwickler, die denselben Kern als Rust-Bibliothek oder Headless-Server nutzen möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**OpenHuman passt schlecht, wenn Sie ein stabiles, geprüftes Produkt brauchen, und mehrere Details sind nicht überprüft.**',
        ],
        items: [
          'Nicht geeignet: wer ein ausgereiftes Release braucht; die README selbst nennt das Projekt frühe Beta.',
          'Nicht geeignet: wer standardmäßig rein lokale Nutzung erwartet; die Standardroute nutzt gehostete Dienste.',
          'Nicht überprüft: die Preise der verwalteten TinyHumans-Dienste für OpenHuman. Die Preisseite listet Tarife für ein anderes Produkt (OpenCompany) und erwähnt OpenHuman nicht.',
          'Nicht überprüft: ob sich die Anmeldung überspringen lässt. Die Dokumentation zeigt beim ersten Start einen Anmeldebildschirm, ohne es so oder so zu sagen.',
          'Nicht überprüft: die Benchmark-Werte des Herstellers, die PromptQuorum nicht nachgemessen hat, sowie die auf der Hersteller-Website zitierten Nutzerzahlen aus sozialen Medien.',
          'Nicht überprüft: jede GPU-Anforderung und jede Angabe zum Speicherplatz; die Dokumentation nennt beides nicht.',
          'Nicht überprüft: Telemetrie und Analysen in der App. Die Datenschutzerklärung geht darauf nicht direkt ein.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenHuman im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**OpenHuman steht unter quelloffenen persönlichen Agenten, die ein eigenes Gedächtnis und eigene Werkzeuge mitbringen. PromptQuorum hat sie nicht praktisch verglichen.** Die Tabelle nutzt ausschließlich Verzeichnisdaten.',
        ],
        columns: ['Werkzeug', 'Lizenz / Oberfläche'],
        rows: [
          { 'Werkzeug': 'OpenHuman', 'Lizenz / Oberfläche': 'GPL-3.0; Desktop-App, CLI, Rust-Bibliothek' },
          { 'Werkzeug': 'OpenClaw', 'Lizenz / Oberfläche': 'MIT; Bibliothek' },
          { 'Werkzeug': 'Hermes Agent', 'Lizenz / Oberfläche': 'MIT; CLI; macOS und Linux' },
          { 'Werkzeug': 'Agent Zero', 'Lizenz / Oberfläche': 'MIT; CLI und Web' },
          { 'Werkzeug': 'Nanobot', 'Lizenz / Oberfläche': 'MIT; Web und CLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Kann OpenHuman vollständig mit lokalen Modellen laufen?',
            a: 'Laut Dokumentation kann es Ollama, LM Studio, MLX oder einen lokalen OpenAI-kompatiblen Server nutzen, und der Datenschutzmodus local_only hält die Inferenz auf dem Gerät. Die Laufzeitumgebung installieren und die Modelle laden Sie selbst, und die Spracherkennung ist von local_only nicht abgedeckt.',
          },
          {
            q: 'Ist OpenHuman kostenlos?',
            a: 'Die App steht unter GPL-3.0, und der Hersteller nennt sie kostenlos. Die Standardeinrichtung stützt sich auf gehostete TinyHumans-Dienste, deren Preise für OpenHuman nicht gefunden wurden; stattdessen können Sie eigene Anbieter einbinden.',
          },
          {
            q: 'Welche Betriebssysteme werden unterstützt?',
            a: 'macOS, Windows und Linux. Die Release-Seite listet eine .dmg, eine .exe, eine .msi, eine .AppImage und .deb-Pakete, wo zutreffend für x86_64 und ARM64.',
          },
          {
            q: 'Wie verbindet sich OpenHuman mit anderen Apps?',
            a: 'Laut README über 119 OAuth-Integrationen via Composio, MCP-Server und Skill-Pakete. Laut Dokumentation braucht jede Integration ihre eigene OAuth-Freigabe.',
          },
          {
            q: 'Kann ich es aus Code verwenden?',
            a: 'Ja, laut README: Der Kern ist auch eine Rust-Bibliothek mit typisierter Einbettungs-API, und eine Terminal-App sowie ein Headless-Server werden beschrieben.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**OpenHuman ist einen Blick wert, wenn Sie einen quelloffenen Desktop-Agenten mit Gedächtnis und vielen Integrationen suchen und Software in früher Beta akzeptieren.**',
          'Auf dem Papier deckt es viel ab: Installer für alle drei Desktop-Systeme, lokale und Cloud-Modelle, MCP, eine Freigabeschranke und einen Datenschutzmodus. Die Entwicklung ist aktiv, mit einem Release am 9. Oktober 2026 und einem Commit am 18. November 2026.',
          'Die Kompromisse sind real. Die Standardroute nutzt gehostete Dienste, die Spracherkennung liegt außerhalb des Datenschutzmodus, die Preise der verwalteten Dienste sind ungeprüft, und die Geschwindigkeits- und Kostenwerte stammen vom Hersteller selbst. PromptQuorum hat die App nicht getestet. Probieren Sie sie zuerst mit einem unkritischen Konto aus und richten Sie lokale Modelle und Freigaben ein, bevor Sie echte Daten verbinden.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[OpenHuman-Website](https://tinyhumans.ai/openhuman) — Beschreibung des Herstellers, FAQ und Download-Seite, geprüft am 18. November 2026.',
          '[OpenHuman-GitHub-Repository](https://github.com/tinyhumansai/openhuman) — Lizenz, letzter Commit und README, geprüft am 18. November 2026.',
          '[Release v0.64.15](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.15) — neuestes Release, Datum und Installationsdateien, geprüft am 18. November 2026.',
          '[Dokumentation Erste Schritte](https://tinyhumans.gitbook.io/openhuman/overview/getting-started) — Installation, erster Start, RAM-Empfehlung, geprüft am 18. November 2026.',
          '[Dokumentation Datenschutzmodus](https://tinyhumans.gitbook.io/openhuman/features/privacy-mode) — was local_only einschränkt und was nicht, geprüft am 18. November 2026.',
          '[Dokumentation lokale und BYOK-Modelle](https://tinyhumans.gitbook.io/openhuman/features/model-routing/local-and-byok-models) — unterstützte Laufzeitumgebungen und Anbieter, geprüft am 18. November 2026.',
          '[Datenschutzerklärung](https://tinyhumans.ai/privacy) — Firmenname, Adresse, Aussagen zur Speicherung, geprüft am 18. November 2026.',
          '[Nutzungsbedingungen](https://tinyhumans.ai/terms) — Firmenname und Adresse, geprüft am 18. November 2026.',
          '[TinyHumans-Preise](https://tinyhumans.ai/pricing) — Tarife für ein anderes Produkt, keine Preise für OpenHuman, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[OpenClaw-Rezension](/de/power-local-llm/openclaw-review) — Quelloffenes Agent-Gateway.',
          '[Hermes-Agent-Rezension](/de/power-local-llm/hermes-agent-review) — Selbst gehosteter Agent mit dauerhaftem Gedächtnis.',
          '[Agent-Zero-Rezension](/de/power-local-llm/agent-zero-review) — Minimaler autonomer Agent mit Programmierfähigkeit.',
          '[Nanobot-Rezension](/de/power-local-llm/nanobot-review) — Selbst gehosteter persönlicher Agent mit MCP-Werkzeugen.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openhuman-review-hero-es.webp',
    title: 'Reseña de OpenHuman: agente de IA de escritorio de código abierto con memoria integrada',
    seoTitle: 'Reseña de OpenHuman: agente de IA abierto con memoria',
    intro:
      'OpenHuman es un agente de IA de escritorio gratuito y de código abierto de TinyHumans para macOS, Windows y Linux. Combina memoria integrada, integraciones con apps, servidores MCP y skills, y puede usar modelos locales o modelos en la nube. Esta reseña se basa en el sitio web del fabricante, el repositorio de GitHub y su documentación, revisados el 18 de noviembre de 2026. PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'OpenHuman es un agente de IA de escritorio GPL-3.0 con memoria integrada, 119 integraciones, MCP y modelos locales con Ollama. Instalación y privacidad.',
    twitterDescription:
      'OpenHuman es un agente de IA de escritorio de código abierto con memoria, MCP y modelos locales. Beta temprana, GPL-3.0, con compromisos de nube y privacidad.',
    audience:
      'Personas y desarrolladores que quieren un agente de escritorio con memoria e integraciones con apps, y que comparan modelos locales con modelos en la nube',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenHuman',
    targetKeywords: [
      'reseña de OpenHuman',
      'OpenHuman IA',
      'OpenHuman modelos locales',
      'OpenHuman privacidad',
      'instalar OpenHuman',
      'agente de IA de escritorio de código abierto',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenHuman es un agente de IA de escritorio con licencia GPL-3.0 para macOS, Windows y Linux que añade memoria integrada, integraciones con apps, servidores MCP y skills, y funciona con modelos locales o con tus propias claves de la nube.** Su README califica el proyecto de beta temprana. La configuración por defecto usa servicios alojados de TinyHumans, así que revisa los ajustes de privacidad si quieres un uso solo local.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es OpenHuman y para quién es?',
        answer:
          'OpenHuman es un agente de escritorio de código abierto que recuerda lo que aprende de tus archivos y de las apps conectadas y puede actuar a través de ellas. Encaja con quien quiere una app de agente con memoria e integraciones y acepta un proyecto en beta temprana.',
        bullets: [
          'Plataformas: equipos de escritorio con macOS, Windows y Linux.',
          'Instaladores: .dmg, .exe, .msi, .AppImage y .deb en la página de versiones de GitHub.',
          'Modelos locales con Ollama, LM Studio o MLX; modelos en la nube con tus propias claves o con la ruta gestionada.',
          'Gratuito y GPL-3.0; los precios de los servicios gestionados no figuran en las páginas que leímos.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirla', anchor: 'get-it' },
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
            text: 'OpenHuman es un agente de IA de escritorio de código abierto con memoria integrada, integraciones con apps, servidores MCP y skills que puede funcionar con modelos locales o con modelos en la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una sola app donde un agente de IA guarda una memoria de tus archivos y cuentas y puede llevar a cabo tareas a través de tus herramientas. Tú decides si la IA se ejecuta en tu propio equipo o en la nube.',
          },
        ],
        items: [
          'El README del fabricante califica el proyecto de beta temprana, así que espera asperezas.',
          'Hay una descarga normal para cada sistema operativo de escritorio; un script de instalación con curl o PowerShell es la alternativa en la terminal.',
          'Los modelos locales se ejecutan con un entorno que instalas tú; la app no descarga pesos de modelos.',
          'El modo de privacidad puede limitar la inferencia y las herramientas de red a lo local, pero la voz a texto queda fuera.',
          'PromptQuorum no ha probado la app, y las afirmaciones del fabricante sobre velocidad y coste no se han repetido.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Un agente que se conecta a tu correo, tus archivos y tu navegador puede leer material sensible y actuar sobre él. Revisa cada integración y cada ajuste de aprobación antes de conectar cuentas. Es información general, no asesoramiento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**OpenHuman es un agente de escritorio que mantiene su propia memoria y se conecta a tus apps, herramientas y modelos.**',
          'La app la crea Tiny Human Intelligence Inc (TinyHumans); su política de privacidad indica una dirección en Delaware, Estados Unidos. El repositorio de GitHub tiene licencia GPL-3.0. La versión 0.64.15, publicada el 9 de octubre de 2026, es la última versión en GitHub, y el repositorio tuvo un commit el 18 de noviembre de 2026, así que el desarrollo continúa y no se aplica ninguna advertencia de proyecto abandonado.',
          'Según el README, el mismo núcleo en Rust sirve como app de escritorio, app de terminal, servidor sin interfaz y biblioteca integrable. El README dice que la memoria se recupera antes de cada turno con citas, y que el agente puede manejar un navegador Chrome real y apps de escritorio y pregunta antes de acciones que no se pueden deshacer.',
          'El fabricante también publica una prueba de diez tareas de programación de SWE-bench que compara OpenHuman con otras seis herramientas de agentes en tiempo, tokens, coste y uso de memoria. Son resultados del propio fabricante; PromptQuorum no los ha repetido y no hace ninguna afirmación propia de velocidad ni de coste.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Instalas OpenHuman con una descarga normal por sistema operativo desde el sitio del fabricante o la página de versiones de GitHub, y también existe un script de instalación para la terminal.**',
          'Según el README, lo más fácil es la app de escritorio. La página de versiones listaba un .dmg para Mac con Apple Silicon e Intel, un .exe y un .msi para Windows, y un .AppImage y paquetes .deb para Linux. La documentación recomienda 4 GB de RAM y aconseja 16 GB o más si ingieres buzones o repositorios muy grandes o ejecutas un modelo local.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[Sitio web](https://tinyhumans.ai/openhuman)', 'Cómo conseguirla': 'La página de descarga detecta tu plataforma' },
          { 'Plataforma': '[macOS](https://github.com/tinyhumansai/openhuman/releases/latest)', 'Cómo conseguirla': '.dmg (Apple Silicon e Intel)' },
          { 'Plataforma': '[Windows](https://github.com/tinyhumansai/openhuman/releases/latest)', 'Cómo conseguirla': 'Instalador .exe o .msi' },
          { 'Plataforma': '[Linux](https://github.com/tinyhumansai/openhuman/releases/latest)', 'Cómo conseguirla': '.AppImage o .deb (x86_64 y ARM64)' },
          { 'Plataforma': '[Terminal](https://github.com/tinyhumansai/openhuman#install)', 'Cómo conseguirla': 'curl (macOS/Linux) o script de PowerShell' },
          { 'Plataforma': '[Política de privacidad](https://tinyhumans.ai/privacy)', 'Cómo conseguirla': 'Política de privacidad del fabricante' },
        ],
        note: 'La primera pantalla de la app es un inicio de sesión. La documentación no dice si puedes omitirlo.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**OpenHuman combina un bucle de agente con memoria, integraciones y enrutamiento de modelos.** Todos los puntos siguientes son afirmaciones del fabricante tomadas del README y la documentación.',
        ],
        items: [
          'Memoria integrada sobre archivos, repositorios, feeds y apps, recuperada antes de cada turno con citas; en los ajustes se puede elegir otro motor de memoria.',
          '119 integraciones con apps mediante Composio con disparadores, además de servidores MCP y paquetes de skills.',
          'Modelos locales con Ollama, LM Studio o MLX y acceso con clave propia a 26 proveedores en la nube, con enrutamiento por tarea.',
          'Herramientas nativas, entre ellas shell y programador, extractor web, documentos, generación de imagen y vídeo y tareas programadas.',
          'Control del navegador y del escritorio, con una puerta de aprobación antes de acciones irreversibles y ejecución en entorno aislado (jaula del sistema operativo o Docker).',
          'Grafos de flujos de trabajo duraderos con disparadores de cron, de eventos o manuales y pasos de aprobación.',
          '14 canales de mensajería, como Telegram, Discord, iMessage y correo, como interfaces del agente.',
          'Un agente de voz en vivo con dictado y respuestas habladas.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**El flujo de datos depende de la ruta que elijas al configurar y de si el modo de privacidad está activado.**',
          'La documentación dice que la configuración por defecto usa servicios alojados de OpenHuman para el inicio de sesión, el enrutamiento de modelos, OAuth, las llamadas a herramientas y la búsqueda web. Al configurar puedes, en cambio, indicar tus propias claves de modelo, búsqueda, embeddings y conectores. Las preguntas frecuentes del sitio dicen que la memoria que la app construye sobre ti vive en tu equipo y que las llamadas al modelo van al proveedor que indiques.',
          'El modo de privacidad tiene tres valores; según la documentación, hoy solo local_only restringe algo. Rechaza los proveedores de chat externos y bloquea las herramientas de red, la búsqueda web, las integraciones y los embeddings en la nube. La documentación dice que la voz a texto no está cubierta, así que el dictado va al proxy alojado o al proveedor que hayas configurado, salvo que desactives el componente de voz.',
          'La política de privacidad del fabricante dice que el servicio está diseñado para no conservar datos por defecto, que los datos temporales de las tareas se borran como máximo a los 30 días y que la información personal no se vende ni se alquila. No nombra a los proveedores de modelos ni dice qué se queda en el dispositivo. PromptQuorum no ha auditado ninguna de estas afirmaciones.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**OpenHuman encaja con quien quiere un agente de escritorio con memoria e integraciones y tolera un proyecto en beta temprana.**',
        ],
        items: [
          'Personas que quieren un agente que recuerde el contexto de sus archivos y apps conectadas.',
          'Usuarios de Ollama, LM Studio o MLX que quieren un agente de escritorio sobre un modelo local.',
          'Desarrolladores que quieren el mismo núcleo como biblioteca de Rust o servidor sin interfaz.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**OpenHuman encaja mal si necesitas un producto estable y auditado, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: quien necesita una versión madura; el propio README habla de beta temprana.',
          'No encaja: quien espera un uso totalmente local por defecto; la ruta por defecto usa servicios alojados.',
          'Sin verificar: el precio de los servicios gestionados de TinyHumans para OpenHuman. La página de precios lista planes de otro producto (OpenCompany) y no menciona OpenHuman.',
          'Sin verificar: si se puede omitir el inicio de sesión. La documentación muestra una pantalla de inicio de sesión en el primer arranque sin decirlo en un sentido ni en otro.',
          'Sin verificar: las cifras de la prueba comparativa del fabricante, que PromptQuorum no ha repetido, y los recuentos de usuarios de redes sociales citados en el sitio del fabricante.',
          'Sin verificar: cualquier requisito de GPU y cualquier cifra de disco; la documentación no da ninguno.',
          'Sin verificar: la telemetría y las analíticas dentro de la app. La política de privacidad no las trata directamente.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenHuman frente a las alternativas',
        itemHeadings: true,
        content: [
          '**OpenHuman se sitúa entre los agentes personales de código abierto que traen su propia memoria y herramientas. PromptQuorum no los ha comparado en la práctica.** La tabla usa solo datos del directorio.',
        ],
        columns: ['Herramienta', 'Licencia / interfaz'],
        rows: [
          { 'Herramienta': 'OpenHuman', 'Licencia / interfaz': 'GPL-3.0; app de escritorio, CLI, biblioteca Rust' },
          { 'Herramienta': 'OpenClaw', 'Licencia / interfaz': 'MIT; biblioteca' },
          { 'Herramienta': 'Hermes Agent', 'Licencia / interfaz': 'MIT; CLI; macOS y Linux' },
          { 'Herramienta': 'Agent Zero', 'Licencia / interfaz': 'MIT; CLI y web' },
          { 'Herramienta': 'Nanobot', 'Licencia / interfaz': 'MIT; web y CLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puede OpenHuman funcionar solo con modelos locales?',
            a: 'Según la documentación, puede usar Ollama, LM Studio, MLX o un servidor local compatible con OpenAI, y el modo de privacidad local_only mantiene la inferencia en el dispositivo. El entorno lo instalas y los modelos los descargas tú, y la voz a texto no queda cubierta por local_only.',
          },
          {
            q: '¿Es gratis OpenHuman?',
            a: 'La app tiene licencia GPL-3.0 y el fabricante la llama gratuita. La configuración por defecto depende de servicios alojados de TinyHumans cuyo precio para OpenHuman no se encontró, y en su lugar puedes traer tus propios proveedores.',
          },
          {
            q: '¿Qué sistemas operativos admite?',
            a: 'macOS, Windows y Linux. La página de versiones lista un .dmg, un .exe, un .msi, un .AppImage y paquetes .deb para x86_64 y ARM64 donde corresponde.',
          },
          {
            q: '¿Cómo se conecta OpenHuman con otras apps?',
            a: 'Según el README, mediante 119 integraciones OAuth con Composio, servidores MCP y paquetes de skills. La documentación dice que cada integración necesita su propia aprobación OAuth.',
          },
          {
            q: '¿Puedo usarlo desde código?',
            a: 'Sí, según el README: el núcleo es también una biblioteca de Rust con una API de incrustación tipada, y se describen una app de terminal y un servidor sin interfaz.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**OpenHuman merece un vistazo si quieres un agente de escritorio de código abierto con memoria y muchas integraciones y aceptas software en beta temprana.**',
          'Sobre el papel cubre mucho: instaladores para los tres sistemas de escritorio, modelos locales y en la nube, MCP, una puerta de aprobación y un modo de privacidad. El desarrollo está activo, con una versión el 9 de octubre de 2026 y un commit el 18 de noviembre de 2026.',
          'Los compromisos son reales. La ruta por defecto usa servicios alojados, la voz a texto queda fuera del modo de privacidad, el precio de los servicios gestionados no está verificado y las cifras de velocidad y coste son del propio fabricante. PromptQuorum no ha probado la app. Pruébala primero con una cuenta sin datos sensibles y configura modelos locales y aprobaciones antes de conectar datos reales.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de OpenHuman](https://tinyhumans.ai/openhuman) — descripción del fabricante, preguntas frecuentes y página de descarga, revisado el 18 de noviembre de 2026.',
          '[Repositorio de OpenHuman en GitHub](https://github.com/tinyhumansai/openhuman) — licencia, último commit y README, revisado el 18 de noviembre de 2026.',
          '[Versión v0.64.15](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.15) — última versión, fecha y archivos de instalación, revisado el 18 de noviembre de 2026.',
          '[Documentación de primeros pasos](https://tinyhumans.gitbook.io/openhuman/overview/getting-started) — instalación, primer arranque, recomendación de RAM, revisado el 18 de noviembre de 2026.',
          '[Documentación del modo de privacidad](https://tinyhumans.gitbook.io/openhuman/features/privacy-mode) — qué restringe local_only y qué no, revisado el 18 de noviembre de 2026.',
          '[Documentación de modelos locales y BYOK](https://tinyhumans.gitbook.io/openhuman/features/model-routing/local-and-byok-models) — entornos y proveedores compatibles, revisado el 18 de noviembre de 2026.',
          '[Política de privacidad](https://tinyhumans.ai/privacy) — nombre de la empresa, dirección, declaraciones sobre conservación, revisado el 18 de noviembre de 2026.',
          '[Términos del servicio](https://tinyhumans.ai/terms) — nombre y dirección de la empresa, revisado el 18 de noviembre de 2026.',
          '[Precios de TinyHumans](https://tinyhumans.ai/pricing) — planes de otro producto, sin precios de OpenHuman, revisado el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de OpenClaw](/es/power-local-llm/openclaw-review) — Pasarela de agentes de código abierto.',
          '[Reseña de Hermes Agent](/es/power-local-llm/hermes-agent-review) — Agente autoalojado con memoria persistente.',
          '[Reseña de Agent Zero](/es/power-local-llm/agent-zero-review) — Agente autónomo mínimo con capacidad de programar.',
          '[Reseña de Nanobot](/es/power-local-llm/nanobot-review) — Agente personal autoalojado con herramientas MCP.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openhuman-review-hero-fr.webp',
    title: "Test d'OpenHuman : agent IA de bureau open source avec mémoire intégrée",
    seoTitle: "Test d'OpenHuman : agent IA open source avec mémoire",
    intro:
      "OpenHuman est un agent IA de bureau gratuit et open source, édité par TinyHumans, pour macOS, Windows et Linux. Il réunit une mémoire intégrée, des intégrations d'applications, des serveurs MCP et des skills, et peut utiliser des modèles locaux ou des modèles dans le cloud. Ce test s'appuie sur le site de l'éditeur, le dépôt GitHub et sa documentation, consultés le 18 novembre 2026. PromptQuorum n'a pas testé l'application en pratique.",
    metaDescription:
      "OpenHuman est un agent IA de bureau sous GPL-3.0 avec mémoire, 119 intégrations, MCP et modèles locaux via Ollama. Installation et confidentialité.",
    twitterDescription:
      "OpenHuman est un agent IA de bureau open source avec mémoire, MCP et modèles locaux. Bêta précoce, GPL-3.0, avec des compromis cloud et confidentialité.",
    audience:
      "Particuliers et développeurs qui veulent un agent de bureau avec mémoire et intégrations d'applications, et qui comparent modèles locaux et modèles cloud",
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenHuman',
    targetKeywords: [
      'test OpenHuman',
      'OpenHuman IA',
      'OpenHuman modèles locaux',
      'OpenHuman confidentialité',
      'installer OpenHuman',
      'agent IA de bureau open source',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      "**OpenHuman est un agent IA de bureau sous GPL-3.0 pour macOS, Windows et Linux, qui ajoute une mémoire intégrée, des intégrations d'applications, des serveurs MCP et des skills, et fonctionne avec des modèles locaux ou vos propres clés cloud.** Son README qualifie le projet de bêta précoce. La configuration par défaut utilise des services hébergés de TinyHumans ; vérifiez donc les réglages de confidentialité si vous voulez un usage purement local.",
    quickAnswerTop: {
      fr: {
        question: "Qu'est-ce qu'OpenHuman et à qui s'adresse-t-il ?",
        answer:
          "OpenHuman est un agent de bureau open source qui retient ce qu'il apprend de vos fichiers et des applications connectées et peut agir à travers elles. Il convient à ceux qui veulent une application d'agent avec mémoire et intégrations et qui acceptent un projet en bêta précoce.",
        bullets: [
          'Plateformes : ordinateurs de bureau sous macOS, Windows et Linux.',
          "Installateurs : .dmg, .exe, .msi, .AppImage et .deb sur la page des versions GitHub.",
          'Modèles locaux via Ollama, LM Studio ou MLX ; modèles cloud via vos propres clés ou la voie gérée.',
          "Gratuit et GPL-3.0 ; les tarifs des services gérés ne sont pas publiés sur les pages que nous avons lues.",
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: "Comment l'obtenir", anchor: 'get-it' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: "Ce que nous n'avons pas pu vérifier", anchor: 'who-should-not-use' },
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
            text: "OpenHuman est un agent IA de bureau open source avec mémoire intégrée, intégrations d'applications, serveurs MCP et skills, qui peut fonctionner avec des modèles locaux ou des modèles cloud.",
          },
          {
            type: 'plain-terms',
            text: "Voyez-le comme une application unique où un agent IA garde une mémoire de vos fichiers et de vos comptes et peut accomplir des tâches à travers vos outils. Vous choisissez si l'IA tourne sur votre machine ou dans le cloud.",
          },
        ],
        items: [
          "Le README de l'éditeur qualifie le projet de bêta précoce : attendez-vous à des aspérités.",
          "Un téléchargement classique existe pour chaque système de bureau ; un script d'installation curl ou PowerShell est l'alternative en terminal.",
          "Les modèles locaux passent par un environnement d'exécution que vous installez vous-même ; l'application ne télécharge aucun poids de modèle.",
          "Le mode confidentialité peut limiter l'inférence et les outils réseau au local, mais la reconnaissance vocale en est exclue.",
          "PromptQuorum n'a pas testé l'application, et les affirmations de l'éditeur sur la vitesse et le coût n'ont pas été reproduites.",
        ],
        callouts: [
          {
            type: 'note',
            text: "Un agent connecté à votre messagerie, à vos fichiers et à votre navigateur peut lire des contenus sensibles et agir dessus. Vérifiez chaque intégration et chaque réglage d'approbation avant de connecter des comptes. Ces informations sont générales et ne constituent pas un conseil juridique.",
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          "**OpenHuman est un agent de bureau qui tient sa propre mémoire et se connecte à vos applications, outils et modèles.**",
          "L'application est éditée par Tiny Human Intelligence Inc (TinyHumans) ; sa politique de confidentialité indique une adresse dans le Delaware, aux États-Unis. Le dépôt GitHub est sous licence GPL-3.0. La version 0.64.15, publiée le 9 octobre 2026, est la dernière version sur GitHub, et le dépôt a reçu un commit le 18 novembre 2026 : le développement se poursuit et aucun avertissement de projet abandonné ne s'applique.",
          "Selon le README, le même cœur en Rust sert d'application de bureau, d'application de terminal, de serveur sans interface et de bibliothèque intégrable. Le README indique que la mémoire est rappelée avant chaque tour avec des citations, et que l'agent peut piloter un vrai navigateur Chrome et des applications de bureau en demandant confirmation avant les actions irréversibles.",
          "L'éditeur publie aussi un banc d'essai de dix tâches de programmation SWE-bench qui compare OpenHuman à six autres outils d'agents sur le temps, les jetons, le coût et la mémoire. Ce sont les résultats de l'éditeur lui-même ; PromptQuorum ne les a pas reproduits et ne formule aucune affirmation propre sur la vitesse ou le coût.",
        ],
      },
      getIt: {
        id: 'get-it',
        title: "Comment l'obtenir",
        content: [
          "**Vous installez OpenHuman par un téléchargement classique selon votre système depuis le site de l'éditeur ou la page des versions GitHub, et un script d'installation pour le terminal existe aussi.**",
          "Selon le README, le plus simple est l'application de bureau. La page des versions listait un .dmg pour les Mac Apple Silicon et Intel, un .exe et un .msi pour Windows, ainsi qu'un .AppImage et des paquets .deb pour Linux. La documentation recommande 4 Go de RAM et conseille 16 Go ou plus pour ingérer de très grandes boîtes mail ou de gros dépôts, ou pour exécuter un modèle local.",
        ],
        columns: ['Plateforme', "Comment l'obtenir"],
        rows: [
          { 'Plateforme': '[Site web](https://tinyhumans.ai/openhuman)', "Comment l'obtenir": 'La page de téléchargement détecte votre plateforme' },
          { 'Plateforme': '[macOS](https://github.com/tinyhumansai/openhuman/releases/latest)', "Comment l'obtenir": '.dmg (Apple Silicon et Intel)' },
          { 'Plateforme': '[Windows](https://github.com/tinyhumansai/openhuman/releases/latest)', "Comment l'obtenir": 'Installateur .exe ou .msi' },
          { 'Plateforme': '[Linux](https://github.com/tinyhumansai/openhuman/releases/latest)', "Comment l'obtenir": '.AppImage ou .deb (x86_64 et ARM64)' },
          { 'Plateforme': '[Terminal](https://github.com/tinyhumansai/openhuman#install)', "Comment l'obtenir": 'curl (macOS/Linux) ou script PowerShell' },
          { 'Plateforme': '[Politique de confidentialité](https://tinyhumans.ai/privacy)', "Comment l'obtenir": "Politique de confidentialité de l'éditeur" },
        ],
        note: "Le premier écran de l'application est un écran de connexion. La documentation ne dit pas s'il est possible de l'ignorer.",
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**OpenHuman associe une boucle d'agent à une mémoire, des intégrations et un routage de modèles.** Tous les points ci-dessous sont des affirmations de l'éditeur tirées du README et de la documentation.",
        ],
        items: [
          "Mémoire intégrée sur les fichiers, dépôts, flux et applications, rappelée avant chaque tour avec des citations ; un autre moteur de mémoire peut être choisi dans les réglages.",
          "119 intégrations d'applications via Composio avec déclencheurs, ainsi que des serveurs MCP et des lots de skills.",
          "Modèles locaux via Ollama, LM Studio ou MLX et accès avec clé personnelle à 26 fournisseurs cloud, avec routage par tâche.",
          "Outils natifs, dont un shell et un codeur, un extracteur web, des documents, la génération d'images et de vidéos et des tâches planifiées.",
          "Pilotage du navigateur et du bureau, avec une barrière d'approbation avant les actions irréversibles et une exécution isolée (prison du système ou Docker).",
          "Graphes de flux de travail durables avec déclencheurs cron, événementiels ou manuels et étapes d'approbation.",
          "14 canaux de messagerie, comme Telegram, Discord, iMessage et le courrier électronique, utilisables comme interfaces de l'agent.",
          "Un agent vocal en direct avec dictée et réponses parlées.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          "**Le flux de données dépend de la voie choisie à la configuration et de l'activation du mode confidentialité.**",
          "La documentation indique que la configuration par défaut utilise des services hébergés par OpenHuman pour la connexion, le routage des modèles, OAuth, les appels d'outils et la recherche web. À la configuration, vous pouvez à la place renseigner vos propres clés de modèle, de recherche, d'embeddings et de connecteurs. La FAQ du site dit que la mémoire que l'application construit sur vous reste sur votre machine et que les appels de modèle vont au fournisseur que vous désignez.",
          "Le mode confidentialité a trois valeurs ; selon la documentation, seul local_only restreint quelque chose aujourd'hui. Il refuse les fournisseurs de chat externes et bloque les outils réseau, la recherche web, les intégrations et les embeddings cloud. La documentation précise que la reconnaissance vocale n'est pas couverte : la dictée part donc vers le proxy hébergé ou vers votre fournisseur configuré, sauf si vous désactivez le composant vocal.",
          "La politique de confidentialité de l'éditeur dit que le service est conçu pour ne rien conserver par défaut, que les données temporaires de tâche sont supprimées au plus tard sous 30 jours et que les informations personnelles ne sont ni vendues ni louées. Elle ne nomme pas les fournisseurs de modèles et ne dit pas ce qui reste sur l'appareil. PromptQuorum n'a audité aucune de ces déclarations.",
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          "**OpenHuman convient à ceux qui veulent un agent de bureau avec mémoire et intégrations et qui tolèrent un projet en bêta précoce.**",
        ],
        items: [
          "Les personnes qui veulent un agent qui retient le contexte de leurs fichiers et des applications connectées.",
          "Les utilisateurs d'Ollama, de LM Studio ou de MLX qui veulent un agent de bureau au-dessus d'un modèle local.",
          "Les développeurs qui veulent le même cœur comme bibliothèque Rust ou serveur sans interface.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Ce que nous n'avons pas pu vérifier",
        content: [
          "**OpenHuman convient mal si vous avez besoin d'un produit stable et audité, et plusieurs détails restent non vérifiés.**",
        ],
        items: [
          "Ne convient pas : qui a besoin d'une version mûre ; le README parle lui-même de bêta précoce.",
          "Ne convient pas : qui attend un usage entièrement local par défaut ; la voie par défaut utilise des services hébergés.",
          "Non vérifié : le tarif des services gérés de TinyHumans pour OpenHuman. La page des tarifs liste les offres d'un autre produit (OpenCompany) et ne mentionne pas OpenHuman.",
          "Non vérifié : la possibilité d'ignorer la connexion. La documentation montre un écran de connexion au premier lancement sans le dire dans un sens ni dans l'autre.",
          "Non vérifié : les chiffres du banc d'essai de l'éditeur, que PromptQuorum n'a pas reproduits, et les nombres d'utilisateurs issus des réseaux sociaux cités sur le site de l'éditeur.",
          "Non vérifié : toute exigence de GPU et tout chiffre d'espace disque ; la documentation n'en donne aucun.",
          "Non vérifié : la télémétrie et les statistiques d'usage dans l'application. La politique de confidentialité ne les traite pas directement.",
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: "OpenHuman face aux alternatives",
        itemHeadings: true,
        content: [
          "**OpenHuman se range parmi les agents personnels open source qui apportent leur propre mémoire et leurs propres outils. PromptQuorum ne les a pas comparés en pratique.** Le tableau n'utilise que les données de l'annuaire.",
        ],
        columns: ['Outil', 'Licence / interface'],
        rows: [
          { 'Outil': 'OpenHuman', 'Licence / interface': 'GPL-3.0 ; application de bureau, CLI, bibliothèque Rust' },
          { 'Outil': 'OpenClaw', 'Licence / interface': 'MIT ; bibliothèque' },
          { 'Outil': 'Hermes Agent', 'Licence / interface': 'MIT ; CLI ; macOS et Linux' },
          { 'Outil': 'Agent Zero', 'Licence / interface': 'MIT ; CLI et web' },
          { 'Outil': 'Nanobot', 'Licence / interface': 'MIT ; web et CLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: "OpenHuman peut-il fonctionner entièrement avec des modèles locaux ?",
            a: "Selon la documentation, il peut utiliser Ollama, LM Studio, MLX ou un serveur local compatible OpenAI, et le mode confidentialité local_only garde l'inférence sur l'appareil. Vous installez vous-même l'environnement d'exécution et téléchargez les modèles, et la reconnaissance vocale n'est pas couverte par local_only.",
          },
          {
            q: "OpenHuman est-il gratuit ?",
            a: "L'application est sous GPL-3.0 et l'éditeur la dit gratuite. La configuration par défaut s'appuie sur des services hébergés de TinyHumans dont le tarif pour OpenHuman n'a pas été trouvé ; vous pouvez à la place utiliser vos propres fournisseurs.",
          },
          {
            q: "Quels systèmes d'exploitation sont pris en charge ?",
            a: "macOS, Windows et Linux. La page des versions liste un .dmg, un .exe, un .msi, un .AppImage et des paquets .deb pour x86_64 et ARM64 selon le cas.",
          },
          {
            q: "Comment OpenHuman se connecte-t-il aux autres applications ?",
            a: "Selon le README, via 119 intégrations OAuth avec Composio, des serveurs MCP et des lots de skills. La documentation précise que chaque intégration demande sa propre autorisation OAuth.",
          },
          {
            q: "Puis-je l'utiliser depuis du code ?",
            a: "Oui, selon le README : le cœur est aussi une bibliothèque Rust avec une API d'intégration typée, et une application de terminal ainsi qu'un serveur sans interface sont décrits.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "**OpenHuman mérite un coup d'œil si vous voulez un agent de bureau open source avec mémoire et nombreuses intégrations et que vous acceptez un logiciel en bêta précoce.**",
          "Sur le papier, il couvre beaucoup : des installateurs pour les trois systèmes de bureau, des modèles locaux et cloud, MCP, une barrière d'approbation et un mode confidentialité. Le développement est actif, avec une version le 9 octobre 2026 et un commit le 18 novembre 2026.",
          "Les compromis sont réels. La voie par défaut utilise des services hébergés, la reconnaissance vocale sort du mode confidentialité, le tarif des services gérés n'est pas vérifié et les chiffres de vitesse et de coût viennent de l'éditeur lui-même. PromptQuorum n'a pas testé l'application. Essayez-la d'abord avec un compte sans données sensibles et configurez modèles locaux et approbations avant de connecter des données réelles.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          "[Site web d'OpenHuman](https://tinyhumans.ai/openhuman) — description de l'éditeur, FAQ et page de téléchargement, consulté le 18 novembre 2026.",
          "[Dépôt GitHub d'OpenHuman](https://github.com/tinyhumansai/openhuman) — licence, dernier commit et README, consulté le 18 novembre 2026.",
          "[Version v0.64.15](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.15) — dernière version, date et fichiers d'installation, consulté le 18 novembre 2026.",
          "[Documentation de prise en main](https://tinyhumans.gitbook.io/openhuman/overview/getting-started) — installation, premier lancement, recommandation de RAM, consulté le 18 novembre 2026.",
          "[Documentation du mode confidentialité](https://tinyhumans.gitbook.io/openhuman/features/privacy-mode) — ce que local_only restreint et ce qu'il ne restreint pas, consulté le 18 novembre 2026.",
          "[Documentation des modèles locaux et BYOK](https://tinyhumans.gitbook.io/openhuman/features/model-routing/local-and-byok-models) — environnements et fournisseurs pris en charge, consulté le 18 novembre 2026.",
          "[Politique de confidentialité](https://tinyhumans.ai/privacy) — nom de l'entreprise, adresse, déclarations sur la conservation, consulté le 18 novembre 2026.",
          "[Conditions d'utilisation](https://tinyhumans.ai/terms) — nom et adresse de l'entreprise, consulté le 18 novembre 2026.",
          "[Tarifs TinyHumans](https://tinyhumans.ai/pricing) — offres d'un autre produit, aucun tarif OpenHuman, consulté le 18 novembre 2026.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          "[Test d'OpenClaw](/fr/power-local-llm/openclaw-review) — Passerelle d'agents open source.",
          "[Test de Hermes Agent](/fr/power-local-llm/hermes-agent-review) — Agent auto-hébergé avec mémoire persistante.",
          "[Test d'Agent Zero](/fr/power-local-llm/agent-zero-review) — Agent autonome minimal capable de programmer.",
          "[Test de Nanobot](/fr/power-local-llm/nanobot-review) — Agent personnel auto-hébergé avec outils MCP.",
          "[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d'IA locale.",
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openhuman-review-hero-ja.webp',
    title: 'OpenHumanレビュー：メモリ内蔵のオープンソース・デスクトップAIエージェント',
    seoTitle: 'OpenHumanレビュー：メモリ内蔵のAIエージェント',
    intro:
      'OpenHumanは、TinyHumansが提供する無料のオープンソース・デスクトップAIエージェントで、macOS、Windows、Linuxに対応します。内蔵メモリ、アプリ連携、MCPサーバー、スキルを備え、ローカルモデルとクラウドモデルのどちらも使えます。このレビューは、提供元のウェブサイト、GitHubリポジトリ、ドキュメントを2026年11月18日に確認した内容に基づいています。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'OpenHumanはGPL-3.0のデスクトップAIエージェント。内蔵メモリ、119のアプリ連携、MCP、Ollama経由のローカルモデルに対応。導入、プライバシー、制約を整理します。',
    twitterDescription:
      'OpenHumanはメモリ、MCP、ローカルモデルに対応するオープンソースのデスクトップAIエージェント。初期ベータ、GPL-3.0。クラウドとプライバシーのトレードオフあり。',
    audience:
      'メモリとアプリ連携を備えたデスクトップエージェントを探し、ローカルモデルとクラウドモデルを比べている個人や開発者',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenHuman',
    targetKeywords: [
      'OpenHuman レビュー',
      'OpenHuman AI',
      'OpenHuman ローカルモデル',
      'OpenHuman プライバシー',
      'OpenHuman インストール',
      'オープンソース デスクトップ AIエージェント',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenHumanは、macOS、Windows、Linux向けのGPL-3.0のデスクトップAIエージェントで、内蔵メモリ、アプリ連携、MCPサーバー、スキルを備え、ローカルモデルまたはご自身のクラウドキーで動作します。** READMEはこのプロジェクトを初期ベータと位置づけています。標準設定ではTinyHumansのホスト型サービスを使うため、ローカルのみで使いたい場合はプライバシー設定を確認してください。',
    quickAnswerTop: {
      ja: {
        question: 'OpenHumanとは何で、誰向けですか？',
        answer:
          'OpenHumanは、ファイルや接続したアプリから学んだ内容を記憶し、それらをまたいで動作できるオープンソースのデスクトップエージェントです。メモリと連携機能を備えたエージェントアプリを求め、初期ベータのプロジェクトを許容できる人に向いています。',
        bullets: [
          '対応プラットフォーム：macOS、Windows、Linuxのデスクトップ。',
          'インストーラー：GitHubのリリースページに.dmg、.exe、.msi、.AppImage、.debがあります。',
          'ローカルモデルはOllama、LM Studio、MLX経由。クラウドモデルはご自身のキーまたは管理型ルート経由。',
          '無料でGPL-3.0。管理型サービスの料金は、確認したページには掲載されていません。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
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
            text: 'OpenHumanは、内蔵メモリ、アプリ連携、MCPサーバー、スキルを備え、ローカルモデルでもクラウドモデルでも動かせるオープンソースのデスクトップAIエージェントです。',
          },
          {
            type: 'plain-terms',
            text: 'AIエージェントがファイルやアカウントの記憶を保持し、ツールをまたいでタスクを実行できる、ひとつのアプリだとお考えください。AIをご自身のマシンで動かすか、クラウドで動かすかは選べます。',
          },
        ],
        items: [
          '提供元のREADMEはこのプロジェクトを初期ベータとしているため、粗い部分があることを想定してください。',
          '各デスクトップOS向けに通常のダウンロードがあり、ターミナルではcurlまたはPowerShellのインストールスクリプトも使えます。',
          'ローカルモデルはご自身でインストールしたランタイム経由で動きます。アプリはモデルの重みをダウンロードしません。',
          'プライバシーモードで推論とネットワークツールをローカルに限定できますが、音声認識はその対象外です。',
          'PromptQuorumはこのアプリを試しておらず、提供元の速度とコストに関する主張も再現していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'メール、ファイル、ブラウザに接続するエージェントは、機微な内容を読み取り、それに基づいて動作できます。アカウントを接続する前に、各連携と承認の設定を確認してください。これは一般的な情報であり、法的助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**OpenHumanは、独自のメモリを持ち、アプリ、ツール、モデルに接続するデスクトップエージェントです。**',
          'このアプリはTiny Human Intelligence Inc（TinyHumans）が提供しており、プライバシーポリシーには米国デラウェア州の住所が記載されています。GitHubリポジトリのライセンスはGPL-3.0です。2026年10月9日に公開されたバージョン0.64.15が最新のGitHubリリースで、リポジトリには2026年11月18日にコミットがあったため、開発は継続しており、放置プロジェクトの警告は該当しません。',
          'READMEによると、同じRustコアがデスクトップアプリ、ターミナルアプリ、ヘッドレスサーバー、組み込み用ライブラリとして使われます。READMEは、メモリが毎ターンの前に出典付きで呼び出されること、そしてエージェントが実際のChromeブラウザとデスクトップアプリを操作でき、元に戻せない操作の前には確認を求めることを述べています。',
          '提供元はまた、10件のSWE-benchコーディングタスクで、OpenHumanを他の6つのエージェントツールと時間、トークン、コスト、メモリ使用量で比較したベンチマークを公開しています。これは提供元自身の結果であり、PromptQuorumは再現しておらず、速度やコストについて独自の主張もしていません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**OpenHumanは、提供元のウェブサイトまたはGitHubのリリースページからOSごとの通常のダウンロードでインストールでき、ターミナル用のインストールスクリプトもあります。**',
          'READMEによると、最も簡単なのはデスクトップアプリです。リリースページには、Apple SiliconとIntel向けの.dmg、Windows向けの.exeと.msi、Linux向けの.AppImageと.debパッケージが掲載されていました。ドキュメントはRAM 4 GBを推奨し、非常に大きなメールボックスやリポジトリを取り込む場合やローカルモデルを動かす場合は16 GB以上を見込むよう述べています。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[ウェブサイト](https://tinyhumans.ai/openhuman)', '入手方法': 'ダウンロードページがプラットフォームを自動判別' },
          { 'プラットフォーム': '[macOS](https://github.com/tinyhumansai/openhuman/releases/latest)', '入手方法': '.dmg（Apple SiliconとIntel）' },
          { 'プラットフォーム': '[Windows](https://github.com/tinyhumansai/openhuman/releases/latest)', '入手方法': '.exeインストーラーまたは.msi' },
          { 'プラットフォーム': '[Linux](https://github.com/tinyhumansai/openhuman/releases/latest)', '入手方法': '.AppImageまたは.deb（x86_64とARM64）' },
          { 'プラットフォーム': '[ターミナル](https://github.com/tinyhumansai/openhuman#install)', '入手方法': 'curl（macOS/Linux）またはPowerShellスクリプト' },
          { 'プラットフォーム': '[プライバシーポリシー](https://tinyhumans.ai/privacy)', '入手方法': '提供元のプライバシーポリシー' },
        ],
        note: 'アプリの最初の画面はサインイン画面です。スキップできるかどうかは、ドキュメントに記載がありません。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**OpenHumanは、エージェントのループにメモリ、連携、モデルルーティングを組み合わせています。** 以下はすべて、READMEとドキュメントにある提供元の主張です。',
        ],
        items: [
          'ファイル、リポジトリ、フィード、アプリを対象にした内蔵メモリ。毎ターンの前に出典付きで呼び出され、設定で別のメモリエンジンを選べます。',
          'Composio経由の119のアプリ連携（トリガー付き）に加え、MCPサーバーとスキルバンドル。',
          'Ollama、LM Studio、MLX経由のローカルモデルと、26のクラウドプロバイダーへの自前キー接続。ワークロードごとにルーティングできます。',
          'シェルとコーダー、スクレイパー、ドキュメント、画像・動画生成、スケジュール実行などのネイティブツール。',
          '元に戻せない操作の前に承認ゲートを置いたブラウザとデスクトップの操作、およびサンドボックス実行（OSのジェイルまたはDocker）。',
          'cron、イベント、手動のトリガーと承認ステップを持つ、永続的なワークフローグラフ。',
          'Telegram、Discord、iMessage、メールなど14のメッセージングチャンネルを、エージェントのフロントエンドとして利用可能。',
          '音声入力と音声返答を備えたライブ音声エージェント。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**データの流れは、初期設定で選ぶルートと、プライバシーモードの有無によって変わります。**',
          'ドキュメントによると、標準設定ではサインイン、モデルルーティング、OAuth、ツール呼び出し、ウェブ検索にOpenHuman提供のホスト型サービスを使います。初期設定では、代わりにご自身のモデル、検索、埋め込み、コネクタのキーを設定することもできます。サイトのFAQは、アプリが構築するユーザーに関するメモリはご自身のマシン上にあり、モデル呼び出しは指定したプロバイダーに送られると述べています。',
          'プライバシーモードには3つの値があり、ドキュメントによると現時点で制限が働くのはlocal_onlyだけです。外部のチャットプロバイダーを拒否し、ネットワークツール、ウェブ検索、連携、クラウド埋め込みをブロックします。ドキュメントは音声認識が対象外だと述べており、音声コンポーネントを無効にしない限り、音声入力はホスト型プロキシまたは設定したプロバイダーに送られます。',
          '提供元のプライバシーポリシーは、サービスが既定でデータを保持しない設計であること、一時的なタスクデータは最長30日以内に削除されること、個人情報を販売も貸与もしないことを述べています。モデルプロバイダーの名前や、端末に残るデータについては記載がありません。PromptQuorumはこれらの記述を監査していません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**OpenHumanは、メモリと連携を備えたデスクトップエージェントを求め、初期ベータのプロジェクトを許容できる人に向いています。**',
        ],
        items: [
          'ファイルや接続したアプリの文脈を記憶するエージェントがほしい人。',
          'Ollama、LM Studio、MLXを使っていて、ローカルモデルの上で動くデスクトップエージェントがほしい人。',
          '同じコアをRustライブラリやヘッドレスサーバーとして使いたい開発者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**安定して監査済みの製品が必要な場合、OpenHumanは向いておらず、いくつかの点は未確認です。**',
        ],
        items: [
          '向かない人：成熟したリリースが必要な人。READMEが自ら初期ベータとしています。',
          '向かない人：既定で完全にローカルでの利用を期待する人。既定のルートはホスト型サービスを使います。',
          '未確認：OpenHuman向けの管理型TinyHumansサービスの料金。料金ページは別の製品（OpenCompany）のプランを載せており、OpenHumanには触れていません。',
          '未確認：サインインをスキップできるかどうか。ドキュメントは初回起動時のサインイン画面を示しますが、どちらとも述べていません。',
          '未確認：提供元のベンチマーク数値（PromptQuorumは再現していません）と、提供元サイトに引用されているSNS上のユーザー数。',
          '未確認：GPU要件とディスク容量の数値。ドキュメントはどちらも示していません。',
          '未確認：アプリ内のテレメトリと分析。プライバシーポリシーは直接触れていません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenHumanと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**OpenHumanは、独自のメモリとツールを備えたオープンソースのパーソナルエージェントの一つです。PromptQuorumはこれらを実際には比較していません。** 表はディレクトリのデータのみを使っています。',
        ],
        columns: ['ツール', 'ライセンス／インターフェース'],
        rows: [
          { 'ツール': 'OpenHuman', 'ライセンス／インターフェース': 'GPL-3.0、デスクトップアプリ、CLI、Rustライブラリ' },
          { 'ツール': 'OpenClaw', 'ライセンス／インターフェース': 'MIT、ライブラリ' },
          { 'ツール': 'Hermes Agent', 'ライセンス／インターフェース': 'MIT、CLI、macOSとLinux' },
          { 'ツール': 'Agent Zero', 'ライセンス／インターフェース': 'MIT、CLIとWeb' },
          { 'ツール': 'Nanobot', 'ライセンス／インターフェース': 'MIT、WebとCLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'OpenHumanはローカルモデルだけで動かせますか？',
            a: 'ドキュメントによると、Ollama、LM Studio、MLX、またはOpenAI互換のローカルサーバーを使え、プライバシーモードのlocal_onlyで推論を端末内にとどめられます。ランタイムのインストールとモデルの取得はご自身で行い、音声認識はlocal_onlyの対象外です。',
          },
          {
            q: 'OpenHumanは無料ですか？',
            a: 'アプリはGPL-3.0で、提供元は無料としています。標準設定はホスト型のTinyHumansサービスに依存しており、OpenHuman向けの料金は見つかりませんでした。代わりにご自身のプロバイダーを使うこともできます。',
          },
          {
            q: '対応しているOSは何ですか？',
            a: 'macOS、Windows、Linuxです。リリースページには.dmg、.exe、.msi、.AppImage、および該当する場合はx86_64とARM64向けの.debパッケージが掲載されていました。',
          },
          {
            q: 'OpenHumanは他のアプリとどう接続しますか？',
            a: 'READMEによると、Composio経由の119のOAuth連携、MCPサーバー、スキルバンドルを通じて接続します。ドキュメントは、各連携にそれぞれOAuthの承認が必要だと述べています。',
          },
          {
            q: 'コードから使えますか？',
            a: 'はい、READMEによると、コアは型付きの組み込みAPIを持つRustライブラリでもあり、ターミナルアプリとヘッドレスサーバーも説明されています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**メモリと多くの連携を備えたオープンソースのデスクトップエージェントを求め、初期ベータのソフトウェアを許容できるなら、OpenHumanは一見の価値があります。**',
          '紙の上では多くをカバーしています。3つのデスクトップOS向けのインストーラー、ローカルとクラウドのモデル、MCP、承認ゲート、プライバシーモードです。開発は活発で、2026年10月9日にリリース、2026年11月18日にコミットがありました。',
          'トレードオフは現実的です。既定のルートはホスト型サービスを使い、音声認識はプライバシーモードの対象外で、管理型サービスの料金は未確認、速度とコストの数値は提供元自身のものです。PromptQuorumはこのアプリを試していません。まず機微でないアカウントで試し、実データを接続する前にローカルモデルと承認を設定してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[OpenHumanのウェブサイト](https://tinyhumans.ai/openhuman) — 提供元の説明、FAQ、ダウンロードページ。2026年11月18日に確認。',
          '[OpenHumanのGitHubリポジトリ](https://github.com/tinyhumansai/openhuman) — ライセンス、最新コミット、README。2026年11月18日に確認。',
          '[リリースv0.64.15](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.15) — 最新リリース、日付、インストールファイル。2026年11月18日に確認。',
          '[はじめにのドキュメント](https://tinyhumans.gitbook.io/openhuman/overview/getting-started) — インストール、初回起動、RAMの目安。2026年11月18日に確認。',
          '[プライバシーモードのドキュメント](https://tinyhumans.gitbook.io/openhuman/features/privacy-mode) — local_onlyが制限するものとしないもの。2026年11月18日に確認。',
          '[ローカルモデルとBYOKのドキュメント](https://tinyhumans.gitbook.io/openhuman/features/model-routing/local-and-byok-models) — 対応ランタイムとプロバイダー。2026年11月18日に確認。',
          '[プライバシーポリシー](https://tinyhumans.ai/privacy) — 会社名、住所、保持に関する記述。2026年11月18日に確認。',
          '[利用規約](https://tinyhumans.ai/terms) — 会社名と住所。2026年11月18日に確認。',
          '[TinyHumansの料金](https://tinyhumans.ai/pricing) — 別製品のプラン、OpenHumanの料金なし。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[OpenClawレビュー](/ja/power-local-llm/openclaw-review) — オープンソースのエージェントゲートウェイ。',
          '[Hermes Agentレビュー](/ja/power-local-llm/hermes-agent-review) — 永続メモリを持つセルフホスト型エージェント。',
          '[Agent Zeroレビュー](/ja/power-local-llm/agent-zero-review) — コーディング能力を持つ最小限の自律エージェント。',
          '[Nanobotレビュー](/ja/power-local-llm/nanobot-review) — MCPツールを備えたセルフホスト型パーソナルエージェント。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openhuman-review-hero-pt.webp',
    title: 'Análise do OpenHuman: agente de IA de desktop de código aberto com memória integrada',
    seoTitle: 'Análise do OpenHuman: agente de IA aberto com memória',
    intro:
      'O OpenHuman é um agente de IA de desktop gratuito e de código aberto da TinyHumans para macOS, Windows e Linux. Ele combina memória integrada, integrações com apps, servidores MCP e skills, e pode usar modelos locais ou modelos na nuvem. Esta análise se baseia no site do fabricante, no repositório do GitHub e na documentação, verificados em 18 de novembro de 2026. A PromptQuorum não testou o app na prática.',
    metaDescription:
      'O OpenHuman é um agente de IA de desktop GPL-3.0 com memória, 119 integrações, MCP e modelos locais via Ollama. Instalação, privacidade e limites.',
    twitterDescription:
      'O OpenHuman é um agente de IA de desktop de código aberto com memória, MCP e modelos locais. Beta inicial, GPL-3.0, com trocas entre nuvem e privacidade.',
    audience:
      'Pessoas e desenvolvedores que querem um agente de desktop com memória e integrações com apps e que estão comparando modelos locais com modelos na nuvem',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenHuman',
    targetKeywords: [
      'análise do OpenHuman',
      'OpenHuman IA',
      'OpenHuman modelos locais',
      'OpenHuman privacidade',
      'instalar OpenHuman',
      'agente de IA de desktop de código aberto',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O OpenHuman é um agente de IA de desktop com licença GPL-3.0 para macOS, Windows e Linux que acrescenta memória integrada, integrações com apps, servidores MCP e skills, e funciona com modelos locais ou com suas próprias chaves de nuvem.** O README classifica o projeto como beta inicial. A configuração padrão usa serviços hospedados da TinyHumans; por isso, confira as configurações de privacidade se quiser uso somente local.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o OpenHuman e para quem ele serve?',
        answer:
          'O OpenHuman é um agente de desktop de código aberto que lembra o que aprende com seus arquivos e com os apps conectados e pode agir entre eles. Serve para quem quer um app de agente com memória e integrações e aceita um projeto em beta inicial.',
        bullets: [
          'Plataformas: desktops com macOS, Windows e Linux.',
          'Instaladores: .dmg, .exe, .msi, .AppImage e .deb na página de versões do GitHub.',
          'Modelos locais via Ollama, LM Studio ou MLX; modelos na nuvem com suas próprias chaves ou pela rota gerenciada.',
          'Gratuito e GPL-3.0; os preços dos serviços gerenciados não estão publicados nas páginas que lemos.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
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
            text: 'O OpenHuman é um agente de IA de desktop de código aberto com memória integrada, integrações com apps, servidores MCP e skills, que pode rodar com modelos locais ou com modelos na nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um único app em que um agente de IA guarda uma memória dos seus arquivos e contas e pode executar tarefas entre as suas ferramentas. Você decide se a IA roda no seu computador ou na nuvem.',
          },
        ],
        items: [
          'O README do fabricante classifica o projeto como beta inicial; espere arestas.',
          'Há um download comum para cada sistema de desktop; um script de instalação com curl ou PowerShell é a alternativa no terminal.',
          'Os modelos locais rodam por um ambiente que você mesmo instala; o app não baixa pesos de modelos.',
          'O modo de privacidade pode limitar a inferência e as ferramentas de rede ao local, mas a conversão de voz em texto fica de fora.',
          'A PromptQuorum não testou o app, e as afirmações do fabricante sobre velocidade e custo não foram repetidas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Um agente conectado ao seu e-mail, aos seus arquivos e ao seu navegador pode ler material sensível e agir sobre ele. Revise cada integração e cada configuração de aprovação antes de conectar contas. Estas são informações gerais, não aconselhamento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O OpenHuman é um agente de desktop que mantém a própria memória e se conecta aos seus apps, ferramentas e modelos.**',
          'O app é da Tiny Human Intelligence Inc (TinyHumans); a política de privacidade dela informa um endereço em Delaware, nos Estados Unidos. O repositório do GitHub tem licença GPL-3.0. A versão 0.64.15, publicada em 9 de outubro de 2026, é a versão mais recente no GitHub, e o repositório teve um commit em 18 de novembro de 2026; o desenvolvimento continua e nenhum aviso de projeto abandonado se aplica.',
          'Segundo o README, o mesmo núcleo em Rust serve como app de desktop, app de terminal, servidor sem interface e biblioteca incorporável. O README diz que a memória é recuperada antes de cada turno com citações, e que o agente pode controlar um navegador Chrome real e apps de desktop e pergunta antes de ações que não podem ser desfeitas.',
          'O fabricante também publica um teste com dez tarefas de programação do SWE-bench que compara o OpenHuman com outras seis ferramentas de agentes em tempo, tokens, custo e uso de memória. São resultados do próprio fabricante; a PromptQuorum não os repetiu e não faz nenhuma afirmação própria sobre velocidade ou custo.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o OpenHuman com um download comum por sistema operacional, a partir do site do fabricante ou da página de versões do GitHub, e também existe um script de instalação para o terminal.**',
          'Segundo o README, o caminho mais fácil é o app de desktop. A página de versões listava um .dmg para Macs com Apple Silicon e Intel, um .exe e um .msi para Windows, e um .AppImage e pacotes .deb para Linux. A documentação recomenda 4 GB de RAM e sugere 16 GB ou mais ao ingerir caixas de e-mail ou repositórios muito grandes ou ao rodar um modelo local.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[Site](https://tinyhumans.ai/openhuman)', 'Como obter': 'A página de download detecta sua plataforma' },
          { 'Plataforma': '[macOS](https://github.com/tinyhumansai/openhuman/releases/latest)', 'Como obter': '.dmg (Apple Silicon e Intel)' },
          { 'Plataforma': '[Windows](https://github.com/tinyhumansai/openhuman/releases/latest)', 'Como obter': 'Instalador .exe ou .msi' },
          { 'Plataforma': '[Linux](https://github.com/tinyhumansai/openhuman/releases/latest)', 'Como obter': '.AppImage ou .deb (x86_64 e ARM64)' },
          { 'Plataforma': '[Terminal](https://github.com/tinyhumansai/openhuman#install)', 'Como obter': 'curl (macOS/Linux) ou script PowerShell' },
          { 'Plataforma': '[Política de privacidade](https://tinyhumans.ai/privacy)', 'Como obter': 'Política de privacidade do fabricante' },
        ],
        note: 'A primeira tela do app é uma tela de login. A documentação não diz se é possível pulá-la.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O OpenHuman combina um laço de agente com memória, integrações e roteamento de modelos.** Todos os itens abaixo são afirmações do fabricante, tiradas do README e da documentação.',
        ],
        items: [
          'Memória integrada sobre arquivos, repositórios, feeds e apps, recuperada antes de cada turno com citações; é possível escolher outro mecanismo de memória nas configurações.',
          '119 integrações com apps via Composio com gatilhos, além de servidores MCP e pacotes de skills.',
          'Modelos locais via Ollama, LM Studio ou MLX e acesso com chave própria a 26 provedores de nuvem, com roteamento por tarefa.',
          'Ferramentas nativas, entre elas shell e programador, extrator web, documentos, geração de imagem e vídeo e tarefas agendadas.',
          'Controle do navegador e do desktop, com uma barreira de aprovação antes de ações irreversíveis e execução isolada (jaula do sistema operacional ou Docker).',
          'Grafos de fluxo de trabalho duráveis com gatilhos de cron, de evento ou manuais e etapas de aprovação.',
          '14 canais de mensagens, como Telegram, Discord, iMessage e e-mail, usados como interfaces do agente.',
          'Um agente de voz ao vivo com ditado e respostas faladas.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**O fluxo de dados depende da rota escolhida na configuração inicial e de o modo de privacidade estar ativo.**',
          'A documentação diz que a configuração padrão usa serviços hospedados do OpenHuman para login, roteamento de modelos, OAuth, chamadas de ferramentas e busca na web. Na configuração inicial, você pode em vez disso definir suas próprias chaves de modelo, busca, embeddings e conectores. O FAQ do site diz que a memória que o app constrói sobre você fica no seu computador e que as chamadas de modelo vão para o provedor que você indicar.',
          'O modo de privacidade tem três valores; segundo a documentação, hoje só o local_only restringe algo. Ele recusa provedores de chat externos e bloqueia ferramentas de rede, busca na web, integrações e embeddings na nuvem. A documentação diz que a conversão de voz em texto não é coberta, então o ditado vai para o proxy hospedado ou para o provedor que você configurou, a menos que você desative o componente de voz.',
          'A política de privacidade do fabricante diz que o serviço foi projetado para não reter dados por padrão, que os dados temporários de tarefas são apagados em no máximo 30 dias e que as informações pessoais não são vendidas nem alugadas. Ela não nomeia os provedores de modelos nem diz o que fica no dispositivo. A PromptQuorum não auditou nenhuma dessas declarações.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O OpenHuman serve para quem quer um agente de desktop com memória e integrações e tolera um projeto em beta inicial.**',
        ],
        items: [
          'Pessoas que querem um agente que lembre o contexto dos seus arquivos e dos apps conectados.',
          'Usuários de Ollama, LM Studio ou MLX que querem um agente de desktop sobre um modelo local.',
          'Desenvolvedores que querem o mesmo núcleo como biblioteca Rust ou servidor sem interface.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O OpenHuman serve mal para quem precisa de um produto estável e auditado, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: quem precisa de uma versão madura; o próprio README fala em beta inicial.',
          'Não serve: quem espera uso totalmente local por padrão; a rota padrão usa serviços hospedados.',
          'Não verificado: o preço dos serviços gerenciados da TinyHumans para o OpenHuman. A página de preços lista planos de outro produto (OpenCompany) e não menciona o OpenHuman.',
          'Não verificado: se o login pode ser pulado. A documentação mostra uma tela de login na primeira execução sem dizer nem que sim nem que não.',
          'Não verificado: os números do teste comparativo do fabricante, que a PromptQuorum não repetiu, e as contagens de usuários de redes sociais citadas no site do fabricante.',
          'Não verificado: qualquer requisito de GPU e qualquer número de disco; a documentação não traz nenhum.',
          'Não verificado: telemetria e análises dentro do app. A política de privacidade não trata delas diretamente.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenHuman e as alternativas',
        itemHeadings: true,
        content: [
          '**O OpenHuman está entre os agentes pessoais de código aberto que trazem a própria memória e as próprias ferramentas. A PromptQuorum não os comparou na prática.** A tabela usa apenas dados do diretório.',
        ],
        columns: ['Ferramenta', 'Licença / interface'],
        rows: [
          { 'Ferramenta': 'OpenHuman', 'Licença / interface': 'GPL-3.0; app de desktop, CLI, biblioteca Rust' },
          { 'Ferramenta': 'OpenClaw', 'Licença / interface': 'MIT; biblioteca' },
          { 'Ferramenta': 'Hermes Agent', 'Licença / interface': 'MIT; CLI; macOS e Linux' },
          { 'Ferramenta': 'Agent Zero', 'Licença / interface': 'MIT; CLI e web' },
          { 'Ferramenta': 'Nanobot', 'Licença / interface': 'MIT; web e CLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O OpenHuman pode rodar totalmente com modelos locais?',
            a: 'Segundo a documentação, ele pode usar Ollama, LM Studio, MLX ou um servidor local compatível com OpenAI, e o modo de privacidade local_only mantém a inferência no dispositivo. Você mesmo instala o ambiente e baixa os modelos, e a conversão de voz em texto não é coberta pelo local_only.',
          },
          {
            q: 'O OpenHuman é gratuito?',
            a: 'O app tem licença GPL-3.0 e o fabricante o chama de gratuito. A configuração padrão depende de serviços hospedados da TinyHumans cujo preço para o OpenHuman não foi encontrado; em vez disso, você pode usar seus próprios provedores.',
          },
          {
            q: 'Quais sistemas operacionais ele suporta?',
            a: 'macOS, Windows e Linux. A página de versões lista um .dmg, um .exe, um .msi, um .AppImage e pacotes .deb para x86_64 e ARM64, quando aplicável.',
          },
          {
            q: 'Como o OpenHuman se conecta a outros apps?',
            a: 'Segundo o README, por 119 integrações OAuth via Composio, servidores MCP e pacotes de skills. A documentação diz que cada integração precisa da própria aprovação OAuth.',
          },
          {
            q: 'Posso usá-lo a partir de código?',
            a: 'Sim, segundo o README: o núcleo também é uma biblioteca Rust com API de incorporação tipada, e um app de terminal e um servidor sem interface são descritos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O OpenHuman vale uma olhada se você quer um agente de desktop de código aberto com memória e muitas integrações e aceita software em beta inicial.**',
          'No papel, ele cobre muita coisa: instaladores para os três sistemas de desktop, modelos locais e na nuvem, MCP, uma barreira de aprovação e um modo de privacidade. O desenvolvimento é ativo, com uma versão em 9 de outubro de 2026 e um commit em 18 de novembro de 2026.',
          'As trocas são reais. A rota padrão usa serviços hospedados, a conversão de voz em texto fica fora do modo de privacidade, o preço dos serviços gerenciados não foi verificado e os números de velocidade e custo são do próprio fabricante. A PromptQuorum não testou o app. Experimente primeiro com uma conta sem dados sensíveis e configure modelos locais e aprovações antes de conectar dados reais.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do OpenHuman](https://tinyhumans.ai/openhuman) — descrição do fabricante, FAQ e página de download, verificado em 18 de novembro de 2026.',
          '[Repositório do OpenHuman no GitHub](https://github.com/tinyhumansai/openhuman) — licença, último commit e README, verificado em 18 de novembro de 2026.',
          '[Versão v0.64.15](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.15) — versão mais recente, data e arquivos de instalação, verificado em 18 de novembro de 2026.',
          '[Documentação de primeiros passos](https://tinyhumans.gitbook.io/openhuman/overview/getting-started) — instalação, primeira execução, recomendação de RAM, verificado em 18 de novembro de 2026.',
          '[Documentação do modo de privacidade](https://tinyhumans.gitbook.io/openhuman/features/privacy-mode) — o que o local_only restringe e o que não restringe, verificado em 18 de novembro de 2026.',
          '[Documentação de modelos locais e BYOK](https://tinyhumans.gitbook.io/openhuman/features/model-routing/local-and-byok-models) — ambientes e provedores compatíveis, verificado em 18 de novembro de 2026.',
          '[Política de privacidade](https://tinyhumans.ai/privacy) — nome da empresa, endereço, declarações sobre retenção, verificado em 18 de novembro de 2026.',
          '[Termos de serviço](https://tinyhumans.ai/terms) — nome e endereço da empresa, verificado em 18 de novembro de 2026.',
          '[Preços da TinyHumans](https://tinyhumans.ai/pricing) — planos de outro produto, sem preços do OpenHuman, verificado em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do OpenClaw](/pt/power-local-llm/openclaw-review) — Gateway de agentes de código aberto.',
          '[Análise do Hermes Agent](/pt/power-local-llm/hermes-agent-review) — Agente auto-hospedado com memória persistente.',
          '[Análise do Agent Zero](/pt/power-local-llm/agent-zero-review) — Agente autônomo mínimo com capacidade de programar.',
          '[Análise do Nanobot](/pt/power-local-llm/nanobot-review) — Agente pessoal auto-hospedado com ferramentas MCP.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openhuman-review-hero-zh.webp',
    title: 'OpenHuman 评测：内置记忆的开源桌面 AI 智能体',
    seoTitle: 'OpenHuman 评测：内置记忆的开源桌面 AI 智能体',
    intro:
      'OpenHuman 是 TinyHumans 推出的免费开源桌面 AI 智能体，支持 macOS、Windows 和 Linux。它整合了内置记忆、应用集成、MCP 服务器和技能，既可使用本地模型，也可使用云端模型。本评测基于厂商网站、GitHub 仓库及其文档，核查日期为 2026 年 11 月 18 日。PromptQuorum 没有亲自测试过该应用。',
    metaDescription:
      'OpenHuman 是采用 GPL-3.0 的桌面 AI 智能体，内置记忆，提供 119 个应用集成，支持 MCP，并可通过 Ollama 使用本地模型。安装、隐私与局限。',
    twitterDescription:
      'OpenHuman 是支持记忆、MCP 和本地模型的开源桌面 AI 智能体。早期测试版，GPL-3.0，存在云端与隐私方面的取舍。',
    audience:
      '想要带记忆和应用集成的桌面智能体、并在比较本地模型与云端模型的个人和开发者',
    readTime: '阅读约6分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenHuman',
    targetKeywords: [
      'OpenHuman 评测',
      'OpenHuman AI',
      'OpenHuman 本地模型',
      'OpenHuman 隐私',
      'OpenHuman 安装',
      '开源桌面 AI 智能体',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenHuman 是适用于 macOS、Windows 和 Linux 的 GPL-3.0 桌面 AI 智能体，在此基础上加入了内置记忆、应用集成、MCP 服务器和技能，可使用本地模型或您自己的云端密钥。** 其 README 将该项目标注为早期测试版。默认配置使用 TinyHumans 的托管服务，如果想纯本地使用，请检查隐私设置。',
    quickAnswerTop: {
      zh: {
        question: 'OpenHuman 是什么，适合谁？',
        answer:
          'OpenHuman 是一款开源桌面智能体，会记住它从您的文件和已连接应用中学到的内容，并能跨这些应用执行操作。它适合想要带记忆和集成的智能体应用、且能接受早期测试版项目的用户。',
        bullets: [
          '平台：macOS、Windows 和 Linux 桌面。',
          '安装包：GitHub 发布页提供 .dmg、.exe、.msi、.AppImage 和 .deb。',
          '本地模型通过 Ollama、LM Studio 或 MLX 使用；云端模型使用您自己的密钥或托管路线。',
          '免费，GPL-3.0；托管服务的价格未在我们阅读的页面上公布。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
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
            text: 'OpenHuman 是一款开源桌面 AI 智能体，内置记忆、应用集成、MCP 服务器和技能，可使用本地模型或云端模型运行。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作一个应用：AI 智能体保存您的文件和账号的记忆，并能跨您的工具执行任务。AI 在您自己的电脑上运行还是在云端运行，由您决定。',
          },
        ],
        items: [
          '厂商的 README 将该项目标注为早期测试版，请预期会有粗糙之处。',
          '每个桌面系统都有常规下载；在终端中，也可使用 curl 或 PowerShell 安装脚本。',
          '本地模型通过您自己安装的运行环境运行；应用不会下载模型权重。',
          '隐私模式可以把推理和网络工具限制在本地，但语音转文字不在其范围内。',
          'PromptQuorum 没有测试过该应用，也没有复现厂商关于速度和成本的说法。',
        ],
        callouts: [
          {
            type: 'note',
            text: '连接到您的邮箱、文件和浏览器的智能体可能读取敏感内容并据此执行操作。连接账号之前，请检查每个集成和审批设置。以上是一般信息，不构成法律建议。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**OpenHuman 是一款拥有自己记忆、并连接您的应用、工具和模型的桌面智能体。**',
          '该应用由 Tiny Human Intelligence Inc（TinyHumans）开发，其隐私政策列出了美国特拉华州的地址。GitHub 仓库采用 GPL-3.0 许可。2026 年 10 月 9 日发布的 0.64.15 版是 GitHub 上的最新发布，仓库在 2026 年 11 月 18 日有过提交，因此开发仍在进行，不适用项目停更警告。',
          '据 README，同一个 Rust 核心可作为桌面应用、终端应用、无界面服务器和可嵌入库使用。README 称，记忆会在每一轮之前连同引用一起被调出，智能体可以操作真实的 Chrome 浏览器和桌面应用，并在执行无法撤销的操作前先询问。',
          '厂商还公布了一项基于十个 SWE-bench 编程任务的基准测试，在耗时、token、成本和内存占用上把 OpenHuman 与另外六种智能体工具作了比较。这是厂商自己的结果；PromptQuorum 没有复现，也没有就速度或成本提出自己的说法。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**您可以从厂商网站或 GitHub 发布页，按操作系统下载常规安装包来安装 OpenHuman，另有面向终端的安装脚本。**',
          '据 README，最简单的方式是桌面应用。发布页列出了面向 Apple Silicon 和 Intel Mac 的 .dmg、面向 Windows 的 .exe 和 .msi，以及面向 Linux 的 .AppImage 和 .deb 包。文档建议 4 GB 内存，并提醒在导入超大邮箱或仓库、或运行本地模型时按 16 GB 或更多规划。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[网站](https://tinyhumans.ai/openhuman)', '获取方式': '下载页会自动识别您的平台' },
          { '平台': '[macOS](https://github.com/tinyhumansai/openhuman/releases/latest)', '获取方式': '.dmg（Apple Silicon 和 Intel）' },
          { '平台': '[Windows](https://github.com/tinyhumansai/openhuman/releases/latest)', '获取方式': '.exe 安装程序或 .msi' },
          { '平台': '[Linux](https://github.com/tinyhumansai/openhuman/releases/latest)', '获取方式': '.AppImage 或 .deb（x86_64 和 ARM64）' },
          { '平台': '[终端](https://github.com/tinyhumansai/openhuman#install)', '获取方式': 'curl（macOS/Linux）或 PowerShell 脚本' },
          { '平台': '[隐私政策](https://tinyhumans.ai/privacy)', '获取方式': '厂商的隐私政策' },
        ],
        note: '应用的第一个界面是登录界面。文档没有说明能否跳过。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**OpenHuman 把智能体循环与记忆、集成和模型路由结合在一起。** 以下各项均为厂商在 README 和文档中的说法。',
        ],
        items: [
          '覆盖文件、仓库、订阅源和应用的内置记忆，每轮之前连同引用一起调出；可在设置中选择其他记忆引擎。',
          '通过 Composio 提供 119 个带触发器的应用集成，另有 MCP 服务器和技能包。',
          '通过 Ollama、LM Studio 或 MLX 使用本地模型，并可用自带密钥接入 26 家云端提供商，按工作负载分别路由。',
          '原生工具，包括 shell 与编码器、网页抓取、文档、图像和视频生成以及定时任务。',
          '浏览器和桌面控制，在不可逆操作前设有审批关卡，并提供沙箱执行（操作系统隔离或 Docker）。',
          '持久的工作流图，支持 cron、事件或手动触发以及审批步骤。',
          '14 个消息渠道，如 Telegram、Discord、iMessage 和电子邮件，可作为智能体的前端。',
          '带语音输入和语音回复的实时语音智能体。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**数据流向取决于您在初始设置中选择的路线，以及是否开启了隐私模式。**',
          '文档称，默认配置使用 OpenHuman 托管的服务来处理登录、模型路由、OAuth、工具调用和网页搜索。在初始设置中，您也可以改为配置自己的模型、搜索、嵌入和连接器密钥。网站 FAQ 称，应用建立的关于您的记忆保存在您的电脑上，模型调用会发往您指定的提供商。',
          '隐私模式有三个取值；据文档，目前只有 local_only 会带来限制。它会拒绝外部聊天提供商，并阻止网络工具、网页搜索、集成和云端嵌入。文档称语音转文字不在其范围内，因此除非您关闭语音组件，语音输入会发往托管代理或您配置的提供商。',
          '厂商的隐私政策称，该服务默认按零留存设计，临时任务数据最迟在 30 天内删除，个人信息不会被出售或出租。它没有点名模型提供商，也没有说明哪些数据留在设备上。PromptQuorum 没有审计这些说法。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**OpenHuman 适合想要带记忆和集成的桌面智能体、且能接受早期测试版项目的用户。**',
        ],
        items: [
          '想要一个能记住文件和已连接应用上下文的智能体的人。',
          '使用 Ollama、LM Studio 或 MLX、希望在本地模型之上运行桌面智能体的用户。',
          '想把同一个核心用作 Rust 库或无界面服务器的开发者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**如果您需要稳定且经过审计的产品，OpenHuman 并不合适，而且若干细节尚未核实。**',
        ],
        items: [
          '不适合：需要成熟发布版的人；README 本身就标注为早期测试版。',
          '不适合：期望默认完全本地运行的用户；默认路线使用托管服务。',
          '未核实：TinyHumans 为 OpenHuman 提供的托管服务的价格。定价页列出的是另一款产品（OpenCompany）的套餐，没有提到 OpenHuman。',
          '未核实：登录能否跳过。文档显示首次运行有登录界面，但没有明确说明。',
          '未核实：厂商的基准测试数据（PromptQuorum 没有复现），以及厂商网站引用的社交媒体用户数。',
          '未核实：任何 GPU 要求和磁盘占用数字；文档两者都没有给出。',
          '未核实：应用内的遥测和分析。隐私政策没有直接谈到这些。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenHuman 与替代方案对比',
        itemHeadings: true,
        content: [
          '**OpenHuman 属于自带记忆和工具的开源个人智能体之列。PromptQuorum 没有亲自对它们做过对比。** 下表仅使用目录数据。',
        ],
        columns: ['工具', '许可证 / 界面'],
        rows: [
          { '工具': 'OpenHuman', '许可证 / 界面': 'GPL-3.0；桌面应用、CLI、Rust 库' },
          { '工具': 'OpenClaw', '许可证 / 界面': 'MIT；库' },
          { '工具': 'Hermes Agent', '许可证 / 界面': 'MIT；CLI；macOS 和 Linux' },
          { '工具': 'Agent Zero', '许可证 / 界面': 'MIT；CLI 和网页' },
          { '工具': 'Nanobot', '许可证 / 界面': 'MIT；网页和 CLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'OpenHuman 能完全用本地模型运行吗？',
            a: '据文档，它可以使用 Ollama、LM Studio、MLX 或兼容 OpenAI 的本地服务器，隐私模式 local_only 会把推理保留在设备上。运行环境和模型都需要您自己安装和拉取，而且语音转文字不在 local_only 的范围内。',
          },
          {
            q: 'OpenHuman 免费吗？',
            a: '应用采用 GPL-3.0，厂商称其免费。默认配置依赖 TinyHumans 的托管服务，而这些服务针对 OpenHuman 的价格我们没有找到；您也可以改用自己的提供商。',
          },
          {
            q: '支持哪些操作系统？',
            a: 'macOS、Windows 和 Linux。发布页列出了 .dmg、.exe、.msi、.AppImage，以及适用时面向 x86_64 和 ARM64 的 .deb 包。',
          },
          {
            q: 'OpenHuman 如何连接其他应用？',
            a: '据 README，通过 Composio 提供的 119 个 OAuth 集成、MCP 服务器和技能包。文档称每个集成都需要单独的 OAuth 授权。',
          },
          {
            q: '能在代码中使用吗？',
            a: '可以，据 README：核心同时也是一个带类型化嵌入 API 的 Rust 库，并且介绍了终端应用和无界面服务器。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您想要一个带记忆和大量集成的开源桌面智能体，并能接受早期测试版软件，OpenHuman 值得一看。**',
          '从纸面上看，它覆盖面很广：三大桌面系统的安装包、本地和云端模型、MCP、审批关卡和隐私模式。开发十分活跃，2026 年 10 月 9 日有发布，2026 年 11 月 18 日有提交。',
          '取舍是实实在在的。默认路线使用托管服务，语音转文字不在隐私模式范围内，托管服务的价格尚未核实，速度和成本数字来自厂商自己。PromptQuorum 没有测试过该应用。请先用不含敏感数据的账号试用，并在连接真实数据之前配置好本地模型和审批。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[OpenHuman 网站](https://tinyhumans.ai/openhuman) — 厂商的说明、FAQ 和下载页，核查于 2026 年 11 月 18 日。',
          '[OpenHuman GitHub 仓库](https://github.com/tinyhumansai/openhuman) — 许可证、最近一次提交和 README，核查于 2026 年 11 月 18 日。',
          '[发布 v0.64.15](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.15) — 最新发布、日期和安装文件，核查于 2026 年 11 月 18 日。',
          '[入门文档](https://tinyhumans.gitbook.io/openhuman/overview/getting-started) — 安装、首次运行、内存建议，核查于 2026 年 11 月 18 日。',
          '[隐私模式文档](https://tinyhumans.gitbook.io/openhuman/features/privacy-mode) — local_only 限制什么、不限制什么，核查于 2026 年 11 月 18 日。',
          '[本地与 BYOK 模型文档](https://tinyhumans.gitbook.io/openhuman/features/model-routing/local-and-byok-models) — 支持的运行环境和提供商，核查于 2026 年 11 月 18 日。',
          '[隐私政策](https://tinyhumans.ai/privacy) — 公司名称、地址、关于留存的说法，核查于 2026 年 11 月 18 日。',
          '[服务条款](https://tinyhumans.ai/terms) — 公司名称和地址，核查于 2026 年 11 月 18 日。',
          '[TinyHumans 定价](https://tinyhumans.ai/pricing) — 另一款产品的套餐，没有 OpenHuman 的价格，核查于 2026 年 11 月 18 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[OpenClaw 评测](/zh/power-local-llm/openclaw-review) — 开源智能体网关。',
          '[Hermes Agent 评测](/zh/power-local-llm/hermes-agent-review) — 具备持久记忆的自托管智能体。',
          '[Agent Zero 评测](/zh/power-local-llm/agent-zero-review) — 具备编程能力的极简自主智能体。',
          '[Nanobot 评测](/zh/power-local-llm/nanobot-review) — 带 MCP 工具的自托管个人智能体。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openhuman-review-hero-ar.webp',
    title: 'مراجعة OpenHuman: وكيل ذكاء اصطناعي مفتوح المصدر لسطح المكتب بذاكرة مدمجة',
    seoTitle: 'مراجعة OpenHuman: وكيل ذكاء اصطناعي مفتوح المصدر بذاكرة',
    intro:
      'OpenHuman وكيل ذكاء اصطناعي مجاني ومفتوح المصدر لسطح المكتب من TinyHumans يعمل على macOS وWindows وLinux. يجمع بين ذاكرة مدمجة وتكاملات مع التطبيقات وخوادم MCP ومهارات، ويمكنه استخدام نماذج محلية أو نماذج سحابية. تستند هذه المراجعة إلى موقع الجهة المطوِّرة ومستودع GitHub ووثائقه، وقد روجعت في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'OpenHuman وكيل ذكاء اصطناعي لسطح المكتب بترخيص GPL-3.0 مع ذاكرة مدمجة و119 تكاملًا ودعم MCP ونماذج محلية عبر Ollama. التثبيت والخصوصية والحدود.',
    twitterDescription:
      'OpenHuman وكيل ذكاء اصطناعي مفتوح المصدر لسطح المكتب بذاكرة ودعم MCP ونماذج محلية. نسخة تجريبية مبكرة وترخيص GPL-3.0 مع مفاضلات السحابة والخصوصية.',
    audience:
      'أفراد ومطورون يريدون وكيلًا لسطح المكتب بذاكرة وتكاملات مع التطبيقات، ويقارنون بين النماذج المحلية والسحابية',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenHuman',
    targetKeywords: [
      'مراجعة OpenHuman',
      'OpenHuman ذكاء اصطناعي',
      'OpenHuman نماذج محلية',
      'OpenHuman الخصوصية',
      'تثبيت OpenHuman',
      'وكيل ذكاء اصطناعي مفتوح المصدر لسطح المكتب',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenHuman وكيل ذكاء اصطناعي لسطح المكتب بترخيص GPL-3.0 يعمل على macOS وWindows وLinux، ويضيف ذاكرة مدمجة وتكاملات مع التطبيقات وخوادم MCP ومهارات، ويعمل مع نماذج محلية أو بمفاتيحك السحابية الخاصة.** يصف ملف README المشروع بأنه نسخة تجريبية مبكرة. يستخدم الإعداد الافتراضي خدمات TinyHumans المستضافة، فراجع إعدادات الخصوصية إذا أردت استخدامًا محليًا فقط.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو OpenHuman ولمن هو؟',
        answer:
          'OpenHuman وكيل مفتوح المصدر لسطح المكتب يتذكر ما يتعلمه من ملفاتك والتطبيقات المتصلة ويستطيع العمل عبرها. يناسب من يريد تطبيق وكيل بذاكرة وتكاملات ويقبل مشروعًا في مرحلة تجريبية مبكرة.',
        bullets: [
          'المنصات: أجهزة سطح المكتب بنظام macOS وWindows وLinux.',
          'المثبِّتات: ‏.dmg و.exe و.msi و.AppImage و.deb في صفحة الإصدارات على GitHub.',
          'نماذج محلية عبر Ollama أو LM Studio أو MLX؛ ونماذج سحابية بمفاتيحك أو عبر المسار المُدار.',
          'مجاني وبترخيص GPL-3.0؛ أسعار الخدمات المُدارة غير منشورة في الصفحات التي قرأناها.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
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
            text: 'OpenHuman وكيل ذكاء اصطناعي مفتوح المصدر لسطح المكتب بذاكرة مدمجة وتكاملات مع التطبيقات وخوادم MCP ومهارات، ويمكنه العمل بنماذج محلية أو سحابية.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله تطبيقًا واحدًا يحتفظ فيه وكيل ذكاء اصطناعي بذاكرة عن ملفاتك وحساباتك ويستطيع تنفيذ المهام عبر أدواتك. أنت تقرر هل يعمل الذكاء الاصطناعي على جهازك أم في السحابة.',
          },
        ],
        items: [
          'يصف ملف README لدى الجهة المطوِّرة المشروع بأنه نسخة تجريبية مبكرة، فتوقّع بعض الخشونة.',
          'يتوفر تنزيل عادي لكل نظام تشغيل مكتبي؛ وسكربت تثبيت بـ curl أو PowerShell هو البديل في الطرفية.',
          'تعمل النماذج المحلية عبر بيئة تشغيل تثبّتها بنفسك؛ ولا ينزّل التطبيق أوزان النماذج.',
          'يمكن لوضع الخصوصية حصر الاستدلال وأدوات الشبكة في الجهاز، لكن تحويل الكلام إلى نص خارج نطاقه.',
          'لم تختبر PromptQuorum التطبيق، ولم تُعد التحقق من ادعاءات الجهة المطوِّرة عن السرعة والتكلفة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الوكيل المتصل ببريدك وملفاتك ومتصفحك قد يقرأ مواد حساسة ويتصرف بناءً عليها. راجع كل تكامل وكل إعداد موافقة قبل ربط الحسابات. هذه معلومات عامة وليست استشارة قانونية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**OpenHuman وكيل لسطح المكتب يحتفظ بذاكرته الخاصة ويتصل بتطبيقاتك وأدواتك ونماذجك.**',
          'التطبيق من شركة Tiny Human Intelligence Inc ‏(TinyHumans)، وتذكر سياسة الخصوصية لديها عنوانًا في ولاية ديلاوير بالولايات المتحدة. مستودع GitHub مرخّص بـ GPL-3.0. الإصدار 0.64.15، المنشور في 9 أكتوبر 2026، هو أحدث إصدار على GitHub، وسُجّل في المستودع commit بتاريخ 18 نوفمبر 2026، فالتطوير مستمر ولا ينطبق تحذير المشروع المتوقف.',
          'بحسب README، تعمل نواة Rust نفسها تطبيقًا لسطح المكتب وتطبيقًا للطرفية وخادمًا بلا واجهة ومكتبة قابلة للتضمين. ويقول README إن الذاكرة تُستدعى قبل كل دور مع اقتباسات، وإن الوكيل يستطيع تشغيل متصفح Chrome حقيقي وتطبيقات سطح المكتب ويسأل قبل الإجراءات التي لا يمكن التراجع عنها.',
          'وتنشر الجهة المطوِّرة أيضًا اختبارًا من عشر مهام برمجة في SWE-bench يقارن OpenHuman بستة أدوات وكلاء أخرى من حيث الوقت والرموز (tokens) والتكلفة واستهلاك الذاكرة. هذه نتائج الجهة المطوِّرة نفسها؛ ولم تُعدها PromptQuorum ولا تقدّم ادعاءً خاصًا بها عن السرعة أو التكلفة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**تثبّت OpenHuman بتنزيل عادي لكل نظام تشغيل من موقع الجهة المطوِّرة أو من صفحة الإصدارات على GitHub، ويوجد أيضًا سكربت تثبيت للطرفية.**',
          'بحسب README، أسهل طريقة هي تطبيق سطح المكتب. أدرجت صفحة الإصدارات ملف .dmg لأجهزة Mac بمعالج Apple Silicon وIntel، وملفَّي .exe و.msi لنظام Windows، وملف .AppImage وحزم .deb لنظام Linux. توصي الوثائق بذاكرة RAM بسعة 4 GB وتنصح بـ 16 GB أو أكثر عند استيعاب صناديق بريد أو مستودعات ضخمة جدًا أو تشغيل نموذج محلي.',
        ],
        columns: ['المنصة', 'طريقة الحصول عليه'],
        rows: [
          { 'المنصة': '[الموقع](https://tinyhumans.ai/openhuman)', 'طريقة الحصول عليه': 'صفحة التنزيل تتعرف على منصتك' },
          { 'المنصة': '[macOS](https://github.com/tinyhumansai/openhuman/releases/latest)', 'طريقة الحصول عليه': '.dmg (Apple Silicon وIntel)' },
          { 'المنصة': '[Windows](https://github.com/tinyhumansai/openhuman/releases/latest)', 'طريقة الحصول عليه': 'مثبّت .exe أو .msi' },
          { 'المنصة': '[Linux](https://github.com/tinyhumansai/openhuman/releases/latest)', 'طريقة الحصول عليه': '.AppImage أو .deb (x86_64 وARM64)' },
          { 'المنصة': '[الطرفية](https://github.com/tinyhumansai/openhuman#install)', 'طريقة الحصول عليه': 'curl (macOS/Linux) أو سكربت PowerShell' },
          { 'المنصة': '[سياسة الخصوصية](https://tinyhumans.ai/privacy)', 'طريقة الحصول عليه': 'سياسة الخصوصية لدى الجهة المطوِّرة' },
        ],
        note: 'الشاشة الأولى في التطبيق هي شاشة تسجيل الدخول. ولا تذكر الوثائق ما إذا كان يمكن تخطيها.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يجمع OpenHuman بين حلقة وكيل وذاكرة وتكاملات وتوجيه للنماذج.** كل ما يلي ادعاءات من الجهة المطوِّرة مأخوذة من README والوثائق.',
        ],
        items: [
          'ذاكرة مدمجة فوق الملفات والمستودعات والخلاصات والتطبيقات، تُستدعى قبل كل دور مع اقتباسات؛ ويمكن اختيار محرك ذاكرة آخر من الإعدادات.',
          '119 تكاملًا مع التطبيقات عبر Composio مع محفِّزات، إضافة إلى خوادم MCP وحزم المهارات.',
          'نماذج محلية عبر Ollama أو LM Studio أو MLX، ووصول بمفتاحك الخاص إلى 26 مزوِّدًا سحابيًا، مع توجيه لكل مهمة.',
          'أدوات أصلية منها shell والمبرمج وأداة جمع صفحات الويب والمستندات وتوليد الصور والفيديو والمهام المجدولة.',
          'تحكم في المتصفح وسطح المكتب، مع بوابة موافقة قبل الإجراءات التي لا رجعة فيها وتنفيذ معزول (عزل على مستوى نظام التشغيل أو Docker).',
          'مخططات سير عمل دائمة بمحفِّزات cron أو أحداث أو يدوية وخطوات موافقة.',
          '14 قناة مراسلة، مثل Telegram وDiscord وiMessage والبريد الإلكتروني، تعمل واجهات أمامية للوكيل.',
          'وكيل صوتي مباشر مع إملاء وردود منطوقة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**يعتمد تدفق البيانات على المسار الذي تختاره في الإعداد الأولي وعلى تفعيل وضع الخصوصية.**',
          'تقول الوثائق إن الإعداد الافتراضي يستخدم خدمات OpenHuman المستضافة لتسجيل الدخول وتوجيه النماذج وOAuth واستدعاء الأدوات والبحث في الويب. وفي الإعداد الأولي يمكنك بدلًا من ذلك تحديد مفاتيحك الخاصة للنموذج والبحث والتضمينات والموصِّلات. وتقول الأسئلة الشائعة في الموقع إن الذاكرة التي يبنيها التطبيق عنك تبقى على جهازك وإن استدعاءات النموذج تذهب إلى المزوِّد الذي تحدده.',
          'لوضع الخصوصية ثلاث قيم؛ وبحسب الوثائق لا يقيّد شيئًا اليوم سوى local_only. فهو يرفض مزوِّدي الدردشة الخارجيين ويحجب أدوات الشبكة والبحث في الويب والتكاملات والتضمينات السحابية. وتقول الوثائق إن تحويل الكلام إلى نص غير مشمول، فيذهب الإملاء إلى الوكيل الوسيط المستضاف أو إلى المزوِّد الذي أعددته ما لم تعطّل المكوّن الصوتي.',
          'تقول سياسة الخصوصية لدى الجهة المطوِّرة إن الخدمة مصمَّمة على عدم الاحتفاظ بالبيانات افتراضيًا، وإن بيانات المهام المؤقتة تُحذف خلال 30 يومًا كحد أقصى، وإن المعلومات الشخصية لا تُباع ولا تُؤجَّر. ولا تسمّي مزوِّدي النماذج ولا تذكر ما يبقى على الجهاز. لم تدقّق PromptQuorum أيًّا من هذه التصريحات.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب OpenHuman من يريد وكيلًا لسطح المكتب بذاكرة وتكاملات ويتحمّل مشروعًا في مرحلة تجريبية مبكرة.**',
        ],
        items: [
          'من يريد وكيلًا يتذكر السياق من ملفاته والتطبيقات المتصلة.',
          'مستخدمو Ollama أو LM Studio أو MLX الذين يريدون وكيلًا لسطح المكتب فوق نموذج محلي.',
          'المطورون الذين يريدون النواة نفسها مكتبة Rust أو خادمًا بلا واجهة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب OpenHuman من يحتاج إلى منتج مستقر ومدقَّق، وهناك عدة تفاصيل لم يتم التحقق منها.**',
        ],
        items: [
          'لا يناسب: من يحتاج إلى إصدار ناضج؛ فـ README نفسه يصفه بنسخة تجريبية مبكرة.',
          'لا يناسب: من يتوقع استخدامًا محليًا بالكامل افتراضيًا؛ فالمسار الافتراضي يستخدم خدمات مستضافة.',
          'لم يُتحقق منه: سعر خدمات TinyHumans المُدارة الخاصة بـ OpenHuman. تعرض صفحة الأسعار خططًا لمنتج آخر (OpenCompany) ولا تذكر OpenHuman.',
          'لم يُتحقق منه: هل يمكن تخطي تسجيل الدخول. تُظهر الوثائق شاشة تسجيل دخول عند التشغيل الأول دون أن تقول شيئًا في هذا الشأن.',
          'لم يُتحقق منه: أرقام اختبار الأداء لدى الجهة المطوِّرة التي لم تُعدها PromptQuorum، وأعداد المستخدمين من وسائل التواصل الاجتماعي المقتبسة في موقع الجهة المطوِّرة.',
          'لم يُتحقق منه: أي متطلب لوحدة GPU وأي رقم لمساحة القرص؛ فالوثائق لا تذكر أيًّا منهما.',
          'لم يُتحقق منه: القياس عن بُعد والتحليلات داخل التطبيق. لا تتناولها سياسة الخصوصية مباشرة.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenHuman مقابل البدائل',
        itemHeadings: true,
        content: [
          '**يقع OpenHuman بين وكلاء شخصيين مفتوحي المصدر يأتون بذاكرتهم وأدواتهم. لم تقارن PromptQuorum بينها عمليًا.** يستخدم الجدول بيانات الدليل فقط.',
        ],
        columns: ['الأداة', 'الترخيص / الواجهة'],
        rows: [
          { 'الأداة': 'OpenHuman', 'الترخيص / الواجهة': 'GPL-3.0؛ تطبيق سطح مكتب وCLI ومكتبة Rust' },
          { 'الأداة': 'OpenClaw', 'الترخيص / الواجهة': 'MIT؛ مكتبة' },
          { 'الأداة': 'Hermes Agent', 'الترخيص / الواجهة': 'MIT؛ CLI؛ macOS وLinux' },
          { 'الأداة': 'Agent Zero', 'الترخيص / الواجهة': 'MIT؛ CLI وويب' },
          { 'الأداة': 'Nanobot', 'الترخيص / الواجهة': 'MIT؛ ويب وCLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل OpenHuman بالكامل بنماذج محلية؟',
            a: 'بحسب الوثائق يمكنه استخدام Ollama أو LM Studio أو MLX أو خادم محلي متوافق مع OpenAI، ويُبقي وضع الخصوصية local_only الاستدلال على الجهاز. تثبّت بيئة التشغيل وتسحب النماذج بنفسك، وتحويل الكلام إلى نص غير مشمول بـ local_only.',
          },
          {
            q: 'هل OpenHuman مجاني؟',
            a: 'التطبيق بترخيص GPL-3.0 وتصفه الجهة المطوِّرة بأنه مجاني. يعتمد الإعداد الافتراضي على خدمات TinyHumans المستضافة التي لم نجد سعرها الخاص بـ OpenHuman، ويمكنك بدلًا من ذلك استخدام مزوِّديك الخاصين.',
          },
          {
            q: 'ما أنظمة التشغيل المدعومة؟',
            a: 'macOS وWindows وLinux. أدرجت صفحة الإصدارات ملف .dmg وملف .exe وملف .msi وملف .AppImage وحزم .deb لمعماريتَي x86_64 وARM64 حيثما ينطبق.',
          },
          {
            q: 'كيف يتصل OpenHuman بالتطبيقات الأخرى؟',
            a: 'بحسب README، عبر 119 تكامل OAuth من خلال Composio وخوادم MCP وحزم المهارات. وتقول الوثائق إن كل تكامل يحتاج إلى موافقة OAuth خاصة به.',
          },
          {
            q: 'هل يمكنني استخدامه من الشيفرة؟',
            a: 'نعم بحسب README: النواة مكتبة Rust أيضًا بواجهة تضمين مُنمَّطة، ويُوصف تطبيق للطرفية وخادم بلا واجهة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق OpenHuman نظرة إن كنت تريد وكيلًا مفتوح المصدر لسطح المكتب بذاكرة وتكاملات كثيرة وتقبل برمجيات في مرحلة تجريبية مبكرة.**',
          'على الورق يغطي الكثير: مثبّتات لأنظمة سطح المكتب الثلاثة، ونماذج محلية وسحابية، وMCP، وبوابة موافقة، ووضع خصوصية. والتطوير نشط، مع إصدار في 9 أكتوبر 2026 وcommit في 18 نوفمبر 2026.',
          'المفاضلات حقيقية. فالمسار الافتراضي يستخدم خدمات مستضافة، وتحويل الكلام إلى نص خارج وضع الخصوصية، وسعر الخدمات المُدارة لم يُتحقق منه، وأرقام السرعة والتكلفة من الجهة المطوِّرة نفسها. لم تختبر PromptQuorum التطبيق. جرّبه أولًا بحساب لا يحتوي بيانات حساسة، واضبط النماذج المحلية والموافقات قبل ربط بيانات حقيقية.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع OpenHuman](https://tinyhumans.ai/openhuman) — وصف الجهة المطوِّرة والأسئلة الشائعة وصفحة التنزيل، روجع في 18 نوفمبر 2026.',
          '[مستودع OpenHuman على GitHub](https://github.com/tinyhumansai/openhuman) — الترخيص وآخر commit وREADME، روجع في 18 نوفمبر 2026.',
          '[الإصدار v0.64.15](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.15) — أحدث إصدار وتاريخه وملفات التثبيت، روجع في 18 نوفمبر 2026.',
          '[وثائق البدء](https://tinyhumans.gitbook.io/openhuman/overview/getting-started) — التثبيت والتشغيل الأول وتوصية الذاكرة، روجعت في 18 نوفمبر 2026.',
          '[وثائق وضع الخصوصية](https://tinyhumans.gitbook.io/openhuman/features/privacy-mode) — ما يقيّده local_only وما لا يقيّده، روجعت في 18 نوفمبر 2026.',
          '[وثائق النماذج المحلية وBYOK](https://tinyhumans.gitbook.io/openhuman/features/model-routing/local-and-byok-models) — بيئات التشغيل والمزوِّدون المدعومون، روجعت في 18 نوفمبر 2026.',
          '[سياسة الخصوصية](https://tinyhumans.ai/privacy) — اسم الشركة والعنوان وتصريحات الاحتفاظ بالبيانات، روجعت في 18 نوفمبر 2026.',
          '[شروط الخدمة](https://tinyhumans.ai/terms) — اسم الشركة وعنوانها، روجعت في 18 نوفمبر 2026.',
          '[أسعار TinyHumans](https://tinyhumans.ai/pricing) — خطط لمنتج آخر ولا أسعار لـ OpenHuman، روجعت في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة OpenClaw](/ar/power-local-llm/openclaw-review) — بوابة وكلاء مفتوحة المصدر.',
          '[مراجعة Hermes Agent](/ar/power-local-llm/hermes-agent-review) — وكيل مستضاف ذاتيًا بذاكرة دائمة.',
          '[مراجعة Agent Zero](/ar/power-local-llm/agent-zero-review) — وكيل مستقل بسيط قادر على البرمجة.',
          '[مراجعة Nanobot](/ar/power-local-llm/nanobot-review) — وكيل شخصي مستضاف ذاتيًا بأدوات MCP.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/openhuman-review-hero-ko.webp',
    title: 'OpenHuman 리뷰: 메모리를 내장한 오픈소스 데스크톱 AI 에이전트',
    seoTitle: 'OpenHuman 리뷰: 메모리 내장 오픈소스 AI 에이전트',
    intro:
      'OpenHuman은 TinyHumans가 만든 무료 오픈소스 데스크톱 AI 에이전트로, macOS, Windows, Linux에서 사용할 수 있습니다. 내장 메모리, 앱 연동, MCP 서버, 스킬을 결합했으며 로컬 모델과 클라우드 모델을 모두 쓸 수 있습니다. 이 리뷰는 제작사 웹사이트, GitHub 저장소, 문서를 2026년 11월 18일에 확인한 내용을 바탕으로 합니다. PromptQuorum은 이 앱을 직접 사용해 보지 않았습니다.',
    metaDescription:
      'OpenHuman은 GPL-3.0 데스크톱 AI 에이전트로 내장 메모리, 119개 앱 연동, MCP, Ollama 로컬 모델을 지원합니다. 설치, 개인정보, 한계를 정리했습니다.',
    twitterDescription:
      'OpenHuman은 메모리, MCP, 로컬 모델을 지원하는 오픈소스 데스크톱 AI 에이전트입니다. 초기 베타, GPL-3.0, 클라우드와 개인정보 보호 간 절충이 있습니다.',
    audience:
      '메모리와 앱 연동을 갖춘 데스크톱 에이전트를 찾으면서 로컬 모델과 클라우드 모델을 비교하는 개인과 개발자',
    readTime: '6분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenHuman',
    targetKeywords: [
      'OpenHuman 리뷰',
      'OpenHuman AI',
      'OpenHuman 로컬 모델',
      'OpenHuman 개인정보',
      'OpenHuman 설치',
      '오픈소스 데스크톱 AI 에이전트',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**OpenHuman은 macOS, Windows, Linux용 GPL-3.0 데스크톱 AI 에이전트로, 내장 메모리, 앱 연동, MCP 서버, 스킬을 더했으며 로컬 모델 또는 사용자의 클라우드 키로 동작합니다.** README는 이 프로젝트를 초기 베타로 표시합니다. 기본 설정은 TinyHumans의 호스팅 서비스를 사용하므로, 로컬 전용으로 쓰려면 개인정보 설정을 확인하십시오.',
    quickAnswerTop: {
      ko: {
        question: 'OpenHuman은 무엇이며 누구를 위한 것입니까?',
        answer:
          'OpenHuman은 파일과 연결된 앱에서 배운 내용을 기억하고 그 앱들을 넘나들며 작업할 수 있는 오픈소스 데스크톱 에이전트입니다. 메모리와 연동을 갖춘 에이전트 앱을 원하고 초기 베타 프로젝트를 받아들일 수 있는 분께 적합합니다.',
        bullets: [
          '플랫폼: macOS, Windows, Linux 데스크톱.',
          '설치 파일: GitHub 릴리스 페이지에 .dmg, .exe, .msi, .AppImage, .deb가 있습니다.',
          '로컬 모델은 Ollama, LM Studio, MLX를 통해, 클라우드 모델은 사용자 키 또는 관리형 경로를 통해 사용합니다.',
          '무료이며 GPL-3.0입니다. 관리형 서비스의 가격은 확인한 페이지에 게시되어 있지 않습니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '설치 방법', anchor: 'get-it' },
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
            text: 'OpenHuman은 내장 메모리, 앱 연동, MCP 서버, 스킬을 갖추고 로컬 모델이나 클라우드 모델로 실행할 수 있는 오픈소스 데스크톱 AI 에이전트입니다.',
          },
          {
            type: 'plain-terms',
            text: 'AI 에이전트가 파일과 계정에 대한 기억을 유지하면서 여러 도구에 걸쳐 작업을 수행하는 하나의 앱이라고 생각하시면 됩니다. AI를 내 컴퓨터에서 실행할지 클라우드에서 실행할지는 사용자가 선택합니다.',
          },
        ],
        items: [
          '제작사의 README는 이 프로젝트를 초기 베타로 표시하므로 거친 부분이 있을 수 있습니다.',
          '각 데스크톱 OS용 일반 다운로드가 있으며, 터미널에서는 curl 또는 PowerShell 설치 스크립트를 쓸 수 있습니다.',
          '로컬 모델은 사용자가 직접 설치한 런타임을 통해 실행됩니다. 앱은 모델 가중치를 내려받지 않습니다.',
          '개인정보 보호 모드는 추론과 네트워크 도구를 로컬로 제한할 수 있지만, 음성 인식은 그 대상이 아닙니다.',
          'PromptQuorum은 이 앱을 테스트하지 않았으며, 제작사의 속도와 비용 주장도 재현하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이메일, 파일, 브라우저에 연결된 에이전트는 민감한 자료를 읽고 그에 따라 동작할 수 있습니다. 계정을 연결하기 전에 각 연동과 승인 설정을 점검하십시오. 이 내용은 일반 정보이며 법률 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**OpenHuman은 자체 메모리를 유지하면서 앱, 도구, 모델에 연결하는 데스크톱 에이전트입니다.**',
          '이 앱은 Tiny Human Intelligence Inc(TinyHumans)가 만들며, 개인정보 처리방침에는 미국 델라웨어주 주소가 적혀 있습니다. GitHub 저장소의 라이선스는 GPL-3.0입니다. 2026년 10월 9일에 공개된 0.64.15 버전이 GitHub의 최신 릴리스이고, 저장소에는 2026년 11월 18일에 커밋이 있었으므로 개발이 계속되고 있으며 방치 프로젝트 경고는 해당하지 않습니다.',
          'README에 따르면 같은 Rust 코어가 데스크톱 앱, 터미널 앱, 헤드리스 서버, 임베드용 라이브러리로 쓰입니다. README는 메모리가 매 턴 전에 인용과 함께 호출되며, 에이전트가 실제 Chrome 브라우저와 데스크톱 앱을 조작할 수 있고 되돌릴 수 없는 작업 전에는 먼저 묻는다고 설명합니다.',
          '제작사는 또한 SWE-bench 코딩 작업 10개로 OpenHuman을 다른 에이전트 도구 6개와 시간, 토큰, 비용, 메모리 사용량 면에서 비교한 벤치마크를 공개합니다. 이는 제작사 자신의 결과이며, PromptQuorum은 재현하지 않았고 속도나 비용에 대해 자체 주장을 하지 않습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**제작사 웹사이트 또는 GitHub 릴리스 페이지에서 OS별 일반 다운로드로 OpenHuman을 설치할 수 있으며, 터미널용 설치 스크립트도 있습니다.**',
          'README에 따르면 가장 쉬운 방법은 데스크톱 앱입니다. 릴리스 페이지에는 Apple Silicon과 Intel Mac용 .dmg, Windows용 .exe와 .msi, Linux용 .AppImage와 .deb 패키지가 올라와 있었습니다. 문서는 RAM 4 GB를 권장하며, 매우 큰 메일함이나 저장소를 불러오거나 로컬 모델을 실행할 때는 16 GB 이상을 염두에 두라고 안내합니다.',
        ],
        columns: ['플랫폼', '받는 방법'],
        rows: [
          { '플랫폼': '[웹사이트](https://tinyhumans.ai/openhuman)', '받는 방법': '다운로드 페이지가 플랫폼을 자동 감지' },
          { '플랫폼': '[macOS](https://github.com/tinyhumansai/openhuman/releases/latest)', '받는 방법': '.dmg (Apple Silicon 및 Intel)' },
          { '플랫폼': '[Windows](https://github.com/tinyhumansai/openhuman/releases/latest)', '받는 방법': '.exe 설치 프로그램 또는 .msi' },
          { '플랫폼': '[Linux](https://github.com/tinyhumansai/openhuman/releases/latest)', '받는 방법': '.AppImage 또는 .deb (x86_64 및 ARM64)' },
          { '플랫폼': '[터미널](https://github.com/tinyhumansai/openhuman#install)', '받는 방법': 'curl (macOS/Linux) 또는 PowerShell 스크립트' },
          { '플랫폼': '[개인정보 처리방침](https://tinyhumans.ai/privacy)', '받는 방법': '제작사의 개인정보 처리방침' },
        ],
        note: '앱의 첫 화면은 로그인 화면입니다. 건너뛸 수 있는지는 문서에 나와 있지 않습니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**OpenHuman은 에이전트 루프에 메모리, 연동, 모델 라우팅을 결합합니다.** 아래 항목은 모두 README와 문서에 나온 제작사의 주장입니다.',
        ],
        items: [
          '파일, 저장소, 피드, 앱을 아우르는 내장 메모리로, 매 턴 전에 인용과 함께 호출되며 설정에서 다른 메모리 엔진을 고를 수 있습니다.',
          'Composio를 통한 119개 앱 연동(트리거 포함)과 MCP 서버, 스킬 번들.',
          'Ollama, LM Studio, MLX를 통한 로컬 모델과 26개 클라우드 제공업체에 대한 자체 키 접속, 작업별 라우팅.',
          '셸과 코더, 스크레이퍼, 문서, 이미지·동영상 생성, 예약 작업 등 네이티브 도구.',
          '되돌릴 수 없는 작업 전에 승인 단계를 두는 브라우저·데스크톱 제어와 샌드박스 실행(OS 격리 또는 Docker).',
          'cron, 이벤트, 수동 트리거와 승인 단계를 지원하는 지속형 워크플로 그래프.',
          'Telegram, Discord, iMessage, 이메일 등 14개 메시징 채널을 에이전트의 프런트엔드로 사용.',
          '음성 입력과 음성 응답을 갖춘 실시간 음성 에이전트.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**데이터 흐름은 초기 설정에서 고르는 경로와 개인정보 보호 모드 사용 여부에 따라 달라집니다.**',
          '문서에 따르면 기본 설정은 로그인, 모델 라우팅, OAuth, 도구 호출, 웹 검색에 OpenHuman이 호스팅하는 서비스를 사용합니다. 초기 설정에서 대신 사용자의 모델, 검색, 임베딩, 커넥터 키를 지정할 수도 있습니다. 사이트 FAQ는 앱이 만드는 사용자에 대한 메모리가 사용자의 컴퓨터에 있고, 모델 호출은 사용자가 지정한 제공업체로 간다고 설명합니다.',
          '개인정보 보호 모드에는 세 가지 값이 있으며, 문서에 따르면 현재 제한을 거는 것은 local_only뿐입니다. 외부 채팅 제공업체를 거부하고 네트워크 도구, 웹 검색, 연동, 클라우드 임베딩을 차단합니다. 문서는 음성 인식이 대상이 아니라고 설명하므로, 음성 구성 요소를 끄지 않으면 음성 입력은 호스팅 프록시 또는 사용자가 설정한 제공업체로 전달됩니다.',
          '제작사의 개인정보 처리방침은 서비스가 기본적으로 데이터를 보존하지 않도록 설계되었고, 임시 작업 데이터는 최대 30일 이내에 삭제되며, 개인정보를 판매하거나 대여하지 않는다고 밝힙니다. 모델 제공업체의 이름이나 기기에 남는 데이터는 언급하지 않습니다. PromptQuorum은 이러한 진술을 감사하지 않았습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**OpenHuman은 메모리와 연동을 갖춘 데스크톱 에이전트를 원하고 초기 베타 프로젝트를 감수할 수 있는 분께 적합합니다.**',
        ],
        items: [
          '파일과 연결된 앱의 맥락을 기억하는 에이전트를 원하는 분.',
          'Ollama, LM Studio, MLX를 쓰면서 로컬 모델 위에서 동작하는 데스크톱 에이전트를 원하는 분.',
          '같은 코어를 Rust 라이브러리나 헤드리스 서버로 쓰고 싶은 개발자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**안정적이고 감사를 거친 제품이 필요하다면 OpenHuman은 맞지 않으며, 몇 가지 세부 사항은 확인하지 못했습니다.**',
        ],
        items: [
          '적합하지 않음: 성숙한 릴리스가 필요한 분. README 자체가 초기 베타라고 밝히고 있습니다.',
          '적합하지 않음: 기본적으로 완전한 로컬 사용을 기대하는 분. 기본 경로는 호스팅 서비스를 사용합니다.',
          '확인하지 못함: OpenHuman용 관리형 TinyHumans 서비스의 가격. 가격 페이지에는 다른 제품(OpenCompany)의 요금제가 나와 있고 OpenHuman은 언급되지 않습니다.',
          '확인하지 못함: 로그인을 건너뛸 수 있는지 여부. 문서는 첫 실행 시 로그인 화면을 보여 주지만 어느 쪽인지 밝히지 않습니다.',
          '확인하지 못함: 제작사의 벤치마크 수치(PromptQuorum이 재현하지 않았습니다)와 제작사 사이트에 인용된 소셜 미디어상의 사용자 수.',
          '확인하지 못함: GPU 요구 사항과 디스크 용량 수치. 문서에는 둘 다 나와 있지 않습니다.',
          '확인하지 못함: 앱 내 원격 측정과 분석. 개인정보 처리방침은 이를 직접 다루지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'OpenHuman과 대안 비교',
        itemHeadings: true,
        content: [
          '**OpenHuman은 자체 메모리와 도구를 갖춘 오픈소스 개인 에이전트 가운데 하나입니다. PromptQuorum은 이들을 직접 비교해 보지 않았습니다.** 표는 디렉터리 데이터만 사용합니다.',
        ],
        columns: ['도구', '라이선스 / 인터페이스'],
        rows: [
          { '도구': 'OpenHuman', '라이선스 / 인터페이스': 'GPL-3.0; 데스크톱 앱, CLI, Rust 라이브러리' },
          { '도구': 'OpenClaw', '라이선스 / 인터페이스': 'MIT; 라이브러리' },
          { '도구': 'Hermes Agent', '라이선스 / 인터페이스': 'MIT; CLI; macOS 및 Linux' },
          { '도구': 'Agent Zero', '라이선스 / 인터페이스': 'MIT; CLI 및 웹' },
          { '도구': 'Nanobot', '라이선스 / 인터페이스': 'MIT; 웹 및 CLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'OpenHuman을 로컬 모델만으로 실행할 수 있습니까?',
            a: '문서에 따르면 Ollama, LM Studio, MLX 또는 OpenAI 호환 로컬 서버를 쓸 수 있으며, 개인정보 보호 모드 local_only는 추론을 기기 안에 둡니다. 런타임 설치와 모델 내려받기는 사용자가 직접 해야 하고, 음성 인식은 local_only의 대상이 아닙니다.',
          },
          {
            q: 'OpenHuman은 무료입니까?',
            a: '앱은 GPL-3.0이며 제작사는 무료라고 설명합니다. 기본 설정은 TinyHumans 호스팅 서비스에 의존하는데, OpenHuman용 가격은 찾지 못했습니다. 대신 사용자의 제공업체를 연결할 수도 있습니다.',
          },
          {
            q: '어떤 운영체제를 지원합니까?',
            a: 'macOS, Windows, Linux입니다. 릴리스 페이지에는 .dmg, .exe, .msi, .AppImage와, 해당하는 경우 x86_64 및 ARM64용 .deb 패키지가 올라와 있었습니다.',
          },
          {
            q: 'OpenHuman은 다른 앱과 어떻게 연결됩니까?',
            a: 'README에 따르면 Composio를 통한 119개 OAuth 연동, MCP 서버, 스킬 번들로 연결합니다. 문서는 각 연동마다 별도의 OAuth 승인이 필요하다고 설명합니다.',
          },
          {
            q: '코드에서 사용할 수 있습니까?',
            a: '네, README에 따르면 코어는 타입이 지정된 임베딩 API를 갖춘 Rust 라이브러리이기도 하며, 터미널 앱과 헤드리스 서버도 설명되어 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**메모리와 많은 연동을 갖춘 오픈소스 데스크톱 에이전트를 원하고 초기 베타 소프트웨어를 받아들일 수 있다면 OpenHuman은 살펴볼 만합니다.**',
          '문서상으로는 많은 것을 갖췄습니다. 세 데스크톱 OS용 설치 파일, 로컬 및 클라우드 모델, MCP, 승인 단계, 개인정보 보호 모드입니다. 개발은 활발하며 2026년 10월 9일에 릴리스, 2026년 11월 18일에 커밋이 있었습니다.',
          '절충은 현실적입니다. 기본 경로는 호스팅 서비스를 사용하고, 음성 인식은 개인정보 보호 모드 밖에 있으며, 관리형 서비스 가격은 확인되지 않았고, 속도와 비용 수치는 제작사 자신의 것입니다. PromptQuorum은 이 앱을 테스트하지 않았습니다. 먼저 민감하지 않은 계정으로 시험해 보고, 실제 데이터를 연결하기 전에 로컬 모델과 승인 설정을 마치십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[OpenHuman 웹사이트](https://tinyhumans.ai/openhuman) — 제작사의 설명, FAQ, 다운로드 페이지. 2026년 11월 18일 확인.',
          '[OpenHuman GitHub 저장소](https://github.com/tinyhumansai/openhuman) — 라이선스, 최근 커밋, README. 2026년 11월 18일 확인.',
          '[릴리스 v0.64.15](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.15) — 최신 릴리스, 날짜, 설치 파일. 2026년 11월 18일 확인.',
          '[시작하기 문서](https://tinyhumans.gitbook.io/openhuman/overview/getting-started) — 설치, 첫 실행, RAM 권장 사항. 2026년 11월 18일 확인.',
          '[개인정보 보호 모드 문서](https://tinyhumans.gitbook.io/openhuman/features/privacy-mode) — local_only가 제한하는 것과 제한하지 않는 것. 2026년 11월 18일 확인.',
          '[로컬 및 BYOK 모델 문서](https://tinyhumans.gitbook.io/openhuman/features/model-routing/local-and-byok-models) — 지원되는 런타임과 제공업체. 2026년 11월 18일 확인.',
          '[개인정보 처리방침](https://tinyhumans.ai/privacy) — 회사명, 주소, 보존 관련 진술. 2026년 11월 18일 확인.',
          '[이용 약관](https://tinyhumans.ai/terms) — 회사명과 주소. 2026년 11월 18일 확인.',
          '[TinyHumans 가격](https://tinyhumans.ai/pricing) — 다른 제품의 요금제, OpenHuman 가격 없음. 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[OpenClaw 리뷰](/ko/power-local-llm/openclaw-review) — 오픈소스 에이전트 게이트웨이.',
          '[Hermes Agent 리뷰](/ko/power-local-llm/hermes-agent-review) — 지속적인 메모리를 갖춘 셀프 호스팅 에이전트.',
          '[Agent Zero 리뷰](/ko/power-local-llm/agent-zero-review) — 코딩 능력을 갖춘 최소한의 자율 에이전트.',
          '[Nanobot 리뷰](/ko/power-local-llm/nanobot-review) — MCP 도구를 갖춘 셀프 호스팅 개인 에이전트.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}

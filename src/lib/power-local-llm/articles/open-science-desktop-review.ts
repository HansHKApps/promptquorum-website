// Open Science Desktop Review: free MIT desktop AI research workbench (bring your own model provider)
// Slug: open-science-desktop-review
// Companion to: local-deep-research-review, vane-review, cherry-studio-ai-desktop-client-2026, anythingllm-review
// Sources (all read 2026-11-17, no hands-on testing): maker website (home, download, docs, ai4s-research sponsor page, comparison page), GitHub repository
// ai4s-research/open-science (README on master, LICENSE head, Releases API incl. v0.7.3 assets and notes, commits). The request came from the site owner, not from the maker.
// Last upstream update 2026-11-17 (last commit; latest release v0.7.3 on 2026-11-16) => no stale warning.
// Theme: 'Local AI Agents & Tool Use' (agent workbench). HQ: Singapore (sponsor page). No privacy policy page exists on the site.

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
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/open-science-desktop-review-hero-en.webp',
    title: 'Open Science Desktop Review: Free AI Research Workbench for Your Own Files',
    seoTitle: 'Open Science Desktop Review: Free AI Research Workbench',
    intro:
      'Open Science Desktop (formerly Open Science) is a free, MIT-licensed desktop app for macOS, Windows and Linux. It bundles an AI agent workbench for research: literature searches, code, notebooks, figures and reports, with project files and run history kept in local folders. You connect your own model provider, so the model itself usually runs in the cloud unless you point the app at a local endpoint. This review is based on the maker\'s website, the GitHub repository, its README and the release pages. PromptQuorum has not installed or tested the app.',
    metaDescription:
      'Open Science Desktop review: free, MIT-licensed AI research workbench for macOS, Windows and Linux. Your own model, local files, privacy limits.',
    twitterDescription:
      'Open Science Desktop is a free, MIT-licensed AI research workbench with local project folders and your own model provider. Install, privacy limits, alternatives.',
    audience:
      'Researchers, students and developers who want an agent workbench for literature, code and reports on their own computer and are comfortable bringing a model provider key',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Science Desktop',
    targetKeywords: [
      'Open Science Desktop review',
      'Open Science Desktop',
      'AI research workbench',
      'open source AI research desktop app',
      'Open Science Desktop privacy',
      'Open Science Desktop alternatives',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Science Desktop is a free, MIT-licensed desktop app for macOS, Windows and Linux that runs an AI agent over your own project folders to search literature, run code and notebooks, and produce figures and reports.** It does not include a model: you add a provider key or endpoint, so what leaves your machine depends on that choice. The maker calls it beta research tooling.',
    quickAnswerTop: {
      en: {
        question: 'What is Open Science Desktop and who is it for?',
        answer:
          'Open Science Desktop is a desktop workbench in which an AI agent plans and runs research tasks on files in your local workspace and links each output to the code and inputs behind it. It suits people who want that workflow on their own computer and accept that the model provider they choose sees the prompts.',
        bullets: [
          'Platforms: macOS 13+, Windows 10/11 x64, Linux (.deb and .rpm).',
          'Price: the app is free; model-provider usage is billed by the provider.',
          'License: MIT (LICENSE file in the repository).',
          'Bundles an OpenCode agent runtime; bring your own provider or endpoint.',
          'Beta software in active development.',
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
            text: 'Open Science Desktop is a free desktop app in which an AI agent runs literature searches, code and notebooks on your local project folders and traces every figure and report back to its source.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a research workspace on your computer with an agent built in. Your files and history stay in local folders, but the prompts go to whichever model provider you connect.',
          },
        ],
        items: [
          'Installers are published for macOS, Windows and Linux; the latest release is v0.7.3.',
          'The app is free under the MIT license; you pay your model provider for usage.',
          'The agent asks for approval before running commands, deleting files, installing dependencies or using the network.',
          'The maker describes it as beta research tooling and says outputs must be verified before use.',
          'PromptQuorum has not tested the app, so every capability below is a maker statement.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Research outputs from an AI agent can contain wrong numbers and invented citations. Check results yourself before you publish or decide anything. This is general information, not professional advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Open Science Desktop turns a research request into a plan, local execution and a set of linked outputs inside one desktop app.**',
          `The repository belongs to the ai4s-research organisation, which describes itself as sponsored and primarily maintained by APEVON TECHNOLOGIES PTE. LTD. (Singapore). The project was created on GitHub in July 2026, has more than ${ST.en('open-science-desktop', 'bare')} stars and was previously called Open Science. Version 0.7.3 was released on 16 November 2026 and the repository had a commit on 17 November 2026, so development is ongoing and no stale-project warning applies.`,
          'The app is built with Tauri 2 and React and starts a bundled OpenCode runtime in the background, separate from any OpenCode setup you already have. The README says it is a working desktop MVP in active development, and the maker calls it beta research tooling.',
          'The maker describes it as an open-source desktop alternative to Claude Science and similar workbenches, and its README claims first place on the ResearchClawBench leaderboard. PromptQuorum has not compared it with other tools and has not checked that ranking.',
          'A different project called OpenScience, from Synthetic Sciences, is an independent Apache-2.0 command-line tool that opens a browser workspace. The maker\'s own comparison page says the two are separate projects. This review covers only Open Science Desktop.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install Open Science Desktop with a normal installer from GitHub Releases, which the maker\'s download page also links.**',
          'The v0.7.3 release lists .dmg files for Apple Silicon and Intel Macs, a Windows .exe setup file plus an .msi for IT-managed deployment, and .deb and .rpm packages for x86_64 and ARM64 Linux. The README says the macOS packages are signed and notarized, while the Windows and Linux builds are not signed yet. Pick one Windows format and stay on it.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[macOS](https://github.com/ai4s-research/open-science/releases/latest)', 'How to get it': '.dmg (Apple Silicon or Intel), macOS 13+' },
          { 'Platform': '[Windows](https://github.com/ai4s-research/open-science/releases/latest)', 'How to get it': 'x64 setup .exe (or .msi for IT); SmartScreen warning' },
          { 'Platform': '[Linux](https://github.com/ai4s-research/open-science/releases/latest)', 'How to get it': '.deb or .rpm, x86_64 and ARM64' },
          { 'Platform': 'Linux, no root', 'How to get it': 'Install script from the README (terminal)' },
          { 'Platform': '[Website](https://openedscience.com)', 'How to get it': 'Official site with [download page](https://openedscience.com/download/) and [docs](https://openedscience.com/docs/)' },
          { 'Platform': 'Privacy policy', 'How to get it': 'No policy page found; see the Privacy section' },
        ],
        note: 'Normal users should use the installers. Building from source needs Node.js, pnpm, Rust and the Tauri prerequisites. The app needs a model provider key or endpoint before the agent can answer.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The core is an agent that works on files in a local workspace and records where every output came from.** All items below are maker statements from the README, website and release notes.',
        ],
        items: [
          'Research skills that chain exploration, literature survey, experiments and paper writing, plus an integrity-audit skill.',
          'Provenance: figures, tables and reports link to the code, inputs and run that produced them, with append-only run logs.',
          'Real Jupyter notebooks for Python and R with a local kernel, and viewers for PDF, CSV, DOCX, XLSX and other formats.',
          'Runs on remote machines through SSH or Slurm, or on Modal.',
          'One-click connectors for arXiv, PubMed, Crossref, Semantic Scholar and bioRxiv, plus any MCP server you add.',
          'Claude Code, Codex and other agents can run beside the bundled runtime, and the app speaks the Agent Client Protocol in both directions.',
          'Browser control through your own Chrome profile, and computer use of desktop apps through accessibility APIs.',
          'An opt-in gateway that serves the same interface to a browser or phone, and an osd command for headless servers and scripts.',
          'Interface languages: English, Simplified Chinese, Japanese, Spanish, German, French and Korean.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**Workspace files, session history and provenance stay in local folders by default, but prompts and any content the agent reads go to the model provider you select.**',
          'The README says command execution, file deletion, dependency installation and remote connections are approved by the user, and that provider credentials are stored in app-private runtime configuration. It also says Settings contains a plain-language data-flow view of what can be sent to the selected provider. The osd command has a setting called full approval that turns these prompts off, and the maker says it is a deliberate choice, not a default.',
          'Two features widen what the agent can reach. Browser control uses your real Chrome profile with its logins, and computer use can read and operate apps on your screen. The remote-access gateway is off by default and listens on the local machine until you opt in.',
          'No privacy policy, terms or imprint page was found on the maker\'s website. The sponsor page names a contact address for privacy questions, and whether the app sends telemetry or analytics is not stated in the sources read.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Open Science Desktop fits people who want an agent workbench on their own computer and can manage a provider key.**',
        ],
        items: [
          'Researchers and students who want literature, code, figures and reports kept together with traceable sources.',
          'Developers who want to run several coding agents and a research agent in one window.',
          'Teams that need a headless server or a browser-accessible workbench and will configure access themselves.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Open Science Desktop is not a fit for everyone, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who needs a fully offline tool without connecting any model provider.',
          'Not a fit: users who need signed Windows or Linux installers today; the README lists Windows code signing as near-term work.',
          'Unverified: whether a local model works well through the app. The README mentions custom OpenAI-compatible endpoints, but PromptQuorum did not run one.',
          'Unverified: the ResearchClawBench ranking and the quality of generated papers, surveys and citations.',
          'Unverified: hardware requirements beyond the operating system, account requirements and telemetry.',
          'Unverified: a privacy policy. None was found, so the privacy statements here come from the README.',
          'Unverified: the maker\'s website lists v0.7.2 and an unsigned-macOS workaround, while GitHub shows v0.7.3 and signed macOS builds. This review follows GitHub.',
          'Unverified: the repository license shows as Other on GitHub; the MIT text comes from the LICENSE file, and bundled third-party skills keep their own licenses.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Science Desktop vs Alternatives',
        itemHeadings: true,
        content: [
          '**Open Science Desktop is a desktop research workbench with a bundled agent runtime. PromptQuorum has not compared it hands-on with the tools below.** The descriptions come from the directory entries and the maker\'s own comparison page.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'Open Science Desktop', 'Noted in sources': 'MIT desktop workbench; bring your own model' },
          { 'Tool': 'Local Deep Research', 'Noted in sources': 'Self-hosted cited research agent; local or cloud LLMs' },
          { 'Tool': 'Vane', 'Noted in sources': 'Self-hosted answering engine with cited answers' },
          { 'Tool': 'Cherry Studio', 'Noted in sources': 'Agent-based desktop app with many providers and MCP' },
          { 'Tool': 'AnythingLLM', 'Noted in sources': 'RAG and document chat with a built-in vector store' },
          { 'Tool': 'OpenScience (Synthetic Sciences)', 'Noted in sources': 'Independent Apache-2.0 CLI opening a browser workspace' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is Open Science Desktop free?',
            a: 'The app is free under the MIT license. The download page says provider usage may incur charges, so the cost of the model you connect is separate and set by that provider.',
          },
          {
            q: 'Does it run models on my computer?',
            a: 'Not by itself. It bundles an agent runtime, not a model, and you add a provider key or endpoint. The README mentions custom OpenAI-compatible endpoints, but PromptQuorum did not test a local model.',
          },
          {
            q: 'Is it the same as OpenScience from Synthetic Sciences?',
            a: 'No. That is an independent Apache-2.0 command-line project that opens a browser workspace, according to the maker\'s comparison page. Open Science Desktop was previously named Open Science, which is why the names look alike.',
          },
          {
            q: 'Can I use it without a screen or from my phone?',
            a: 'Per the README, the osd command runs the workbench on a machine with no display, and an opt-in gateway serves the same interface to a browser or phone. It is off by default and local-only until you enable it.',
          },
          {
            q: 'How often is it updated?',
            a: 'The releases page shows v0.7.0 on 26 October, v0.7.1 on 29 October, v0.7.2 on 7 November and v0.7.3 on 16 November 2026, so four releases shipped within about three weeks.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Open Science Desktop is worth a look if you want a free, inspectable research workbench on your own computer and already use a model provider.**',
          'On paper it covers a lot: local project folders, provenance links, notebooks, remote runs, connectors, approval prompts and MIT-licensed code. Releases arrive often, which suggests an active project.',
          'The trade-offs are real. It is beta software, the model comes from a provider you choose, the Windows and Linux installers are unsigned, and no privacy policy was found. PromptQuorum has not tested it. Try it on a non-sensitive project, keep the approval prompts on, and check the data-flow view in Settings before you rely on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Open Science Desktop website](https://openedscience.com) — maker\'s description of the app, platforms and latest release.',
          '[Download page](https://openedscience.com/download/) — installers per OS, listed version and the provider-usage note.',
          '[Docs](https://openedscience.com/docs/) — install steps, unsigned-build warnings and first-launch notes.',
          '[ai4s-research page](https://openedscience.com/ai4s-research/) — sponsor APEVON TECHNOLOGIES PTE. LTD. (Singapore) and the open-source organisation.',
          '[Comparison with OpenScience](https://openedscience.com/open-science-desktop-vs-openscience/) — maker\'s note that the two projects are independent.',
          '[GitHub repository](https://github.com/ai4s-research/open-science) — README, capabilities, safety and privacy section, star count and commits.',
          '[LICENSE](https://github.com/ai4s-research/open-science/blob/master/LICENSE) — MIT license text.',
          '[Release v0.7.3](https://github.com/ai4s-research/open-science/releases/tag/v0.7.3) — latest release, assets and release notes.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Deep Research Review](/power-local-llm/local-deep-research-review) — Self-hosted deep-research agent with cited, multi-step research.',
          '[Vane Review](/power-local-llm/vane-review) — Self-hosted AI answering engine with cited answers.',
          '[Cherry Studio Review](/local-llms/cherry-studio-ai-desktop-client) — Agent-based desktop client with many providers and MCP tools.',
          '[AnythingLLM Review](/power-local-llm/anythingllm-review) — Desktop and web app for RAG and document chat.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/open-science-desktop-review-hero-de.webp',
    title: 'Open Science Desktop im Test: kostenlose KI-Forschungsumgebung für Ihre eigenen Dateien',
    seoTitle: 'Open Science Desktop im Test: KI-Forschungsumgebung',
    intro:
      'Open Science Desktop (früher Open Science) ist eine kostenlose Desktop-App unter MIT-Lizenz für macOS, Windows und Linux. Sie bündelt eine Agenten-Arbeitsumgebung für die Forschung: Literatursuche, Code, Notebooks, Abbildungen und Berichte, wobei Projektdateien und Ausführungsverlauf in lokalen Ordnern bleiben. Sie verbinden Ihren eigenen Modellanbieter, daher läuft das Modell meist in der Cloud, sofern Sie die App nicht auf einen lokalen Endpunkt verweisen. Dieser Test stützt sich auf die Website des Herstellers, das GitHub-Repository, die README und die Release-Seiten. PromptQuorum hat die App weder installiert noch getestet.',
    metaDescription:
      'Open Science Desktop im Test: kostenlose KI-Forschungsumgebung (MIT) für macOS, Windows und Linux. Eigenes Modell, lokale Dateien, Datenschutzgrenzen.',
    twitterDescription:
      'Open Science Desktop ist eine kostenlose KI-Forschungsumgebung unter MIT-Lizenz mit lokalen Projektordnern und eigenem Modellanbieter. Installation, Datenschutz, Alternativen.',
    audience:
      'Forschende, Studierende und Entwickler, die eine Agenten-Arbeitsumgebung für Literatur, Code und Berichte auf dem eigenen Rechner möchten und einen Schlüssel für einen Modellanbieter mitbringen',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Science Desktop',
    targetKeywords: [
      'Open Science Desktop Test',
      'Open Science Desktop',
      'KI-Forschungsumgebung',
      'Open-Source-KI-Desktop-App für die Forschung',
      'Open Science Desktop Datenschutz',
      'Open Science Desktop Alternativen',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Science Desktop ist eine kostenlose Desktop-App unter MIT-Lizenz für macOS, Windows und Linux, in der ein KI-Agent auf Ihren Projektordnern Literatur sucht, Code und Notebooks ausführt und Abbildungen sowie Berichte erstellt.** Ein Modell ist nicht enthalten: Sie tragen einen Anbieterschlüssel oder Endpunkt ein, daher hängt es von dieser Wahl ab, was Ihren Rechner verlässt. Der Hersteller nennt die App Beta-Forschungswerkzeug.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Open Science Desktop, und für wen ist es gedacht?',
        answer:
          'Open Science Desktop ist eine Desktop-Arbeitsumgebung, in der ein KI-Agent Forschungsaufgaben auf Dateien Ihres lokalen Arbeitsbereichs plant und ausführt und jedes Ergebnis mit Code und Eingaben verknüpft. Sie eignet sich für Menschen, die diesen Ablauf auf dem eigenen Rechner wollen und akzeptieren, dass der gewählte Modellanbieter die Eingaben sieht.',
        bullets: [
          'Plattformen: macOS 13+, Windows 10/11 x64, Linux (.deb und .rpm).',
          'Preis: Die App ist kostenlos; die Nutzung des Modellanbieters berechnet der Anbieter.',
          'Lizenz: MIT (LICENSE-Datei im Repository).',
          'Enthält eine OpenCode-Agenten-Laufzeit; eigener Anbieter oder Endpunkt nötig.',
          'Beta-Software in aktiver Entwicklung.',
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
            text: 'Open Science Desktop ist eine kostenlose Desktop-App, in der ein KI-Agent Literatursuchen, Code und Notebooks auf Ihren lokalen Projektordnern ausführt und jede Abbildung und jeden Bericht auf die Quelle zurückführt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Forschungsarbeitsplatz auf Ihrem Rechner mit eingebautem Agenten vor. Ihre Dateien und der Verlauf bleiben in lokalen Ordnern, die Eingaben gehen aber an den Modellanbieter, den Sie verbinden.',
          },
        ],
        items: [
          'Installer gibt es für macOS, Windows und Linux; das aktuelle Release ist v0.7.3.',
          'Die App ist unter der MIT-Lizenz kostenlos; die Nutzung bezahlen Sie bei Ihrem Modellanbieter.',
          'Der Agent fragt nach Ihrer Freigabe, bevor er Befehle ausführt, Dateien löscht, Abhängigkeiten installiert oder das Netzwerk nutzt.',
          'Der Hersteller nennt die App ein Beta-Forschungswerkzeug und weist darauf hin, dass Ergebnisse vor der Verwendung zu prüfen sind.',
          'PromptQuorum hat die App nicht getestet, daher sind alle genannten Fähigkeiten Herstellerangaben.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Forschungsergebnisse eines KI-Agenten können falsche Zahlen und erfundene Quellenangaben enthalten. Prüfen Sie Ergebnisse selbst, bevor Sie etwas veröffentlichen oder entscheiden. Dies sind allgemeine Informationen, keine fachliche Beratung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Open Science Desktop macht aus einer Forschungsanfrage einen Plan, lokale Ausführung und verknüpfte Ergebnisse in einer einzigen Desktop-App.**',
          `Das Repository gehört zur Organisation ai4s-research, die sich als gesponsert und hauptsächlich betreut von APEVON TECHNOLOGIES PTE. LTD. (Singapur) beschreibt. Das Projekt wurde im Juli 2026 auf GitHub angelegt, hat mehr als ${ST.de('open-science-desktop', 'bare')} Sterne und hieß früher Open Science. Version 0.7.3 erschien am 16. November 2026, und das Repository hatte am 17. November 2026 einen Commit; die Entwicklung läuft also weiter, und eine Warnung vor einem verwaisten Projekt entfällt.`,
          'Die App basiert auf Tauri 2 und React und startet im Hintergrund eine mitgelieferte OpenCode-Laufzeit, getrennt von einer eventuell vorhandenen OpenCode-Einrichtung. Laut README ist sie ein funktionierendes Desktop-MVP in aktiver Entwicklung, und der Hersteller nennt sie ein Beta-Forschungswerkzeug.',
          'Der Hersteller beschreibt sie als quelloffene Desktop-Alternative zu Claude Science und ähnlichen Arbeitsumgebungen, und die README nimmt Platz eins in der Rangliste ResearchClawBench für sich in Anspruch. PromptQuorum hat sie nicht mit anderen Werkzeugen verglichen und die Platzierung nicht geprüft.',
          'Ein anderes Projekt namens OpenScience von Synthetic Sciences ist ein unabhängiges Kommandozeilenwerkzeug unter Apache-2.0, das einen Browser-Arbeitsbereich öffnet. Laut der Vergleichsseite des Herstellers sind beide Projekte getrennt. Dieser Test behandelt nur Open Science Desktop.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie installieren Open Science Desktop mit einem normalen Installer von GitHub Releases, den auch die Download-Seite des Herstellers verlinkt.**',
          'Das Release v0.7.3 listet .dmg-Dateien für Macs mit Apple Silicon und Intel, eine Windows-Setup-Datei (.exe) sowie eine .msi für IT-verwaltete Rollouts und .deb- und .rpm-Pakete für Linux auf x86_64 und ARM64. Laut README sind die macOS-Pakete signiert und notarisiert, die Windows- und Linux-Builds noch nicht signiert. Wählen Sie ein Windows-Format und bleiben Sie dabei.',
        ],
        columns: ['Plattform', 'So bekommen Sie sie'],
        rows: [
          { 'Plattform': '[macOS](https://github.com/ai4s-research/open-science/releases/latest)', 'So bekommen Sie sie': '.dmg (Apple Silicon oder Intel), macOS 13+' },
          { 'Plattform': '[Windows](https://github.com/ai4s-research/open-science/releases/latest)', 'So bekommen Sie sie': 'x64-Setup .exe (oder .msi für IT); SmartScreen-Warnung' },
          { 'Plattform': '[Linux](https://github.com/ai4s-research/open-science/releases/latest)', 'So bekommen Sie sie': '.deb oder .rpm, x86_64 und ARM64' },
          { 'Plattform': 'Linux, ohne Root', 'So bekommen Sie sie': 'Installationsskript aus der README (Terminal)' },
          { 'Plattform': '[Website](https://openedscience.com)', 'So bekommen Sie sie': 'Offizielle Seite mit [Download-Seite](https://openedscience.com/download/) und [Doku](https://openedscience.com/docs/)' },
          { 'Plattform': 'Datenschutzerklärung', 'So bekommen Sie sie': 'Keine Erklärung gefunden; siehe Abschnitt Datenschutz' },
        ],
        note: 'Normale Nutzer sollten die Installer verwenden. Der Bau aus dem Quellcode erfordert Node.js, pnpm, Rust und die Tauri-Voraussetzungen. Die App braucht einen Anbieterschlüssel oder Endpunkt, bevor der Agent antworten kann.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Kern ist ein Agent, der auf Dateien in einem lokalen Arbeitsbereich arbeitet und festhält, woher jedes Ergebnis stammt.** Alle folgenden Punkte sind Herstellerangaben aus README, Website und Release-Hinweisen.',
        ],
        items: [
          'Forschungs-Skills, die Exploration, Literaturübersicht, Experimente und Paperschreiben verketten, plus ein Skill zur Integritätsprüfung.',
          'Herkunftsnachweis: Abbildungen, Tabellen und Berichte verweisen auf Code, Eingaben und Lauf, die sie erzeugt haben, mit nur anfügbaren Laufprotokollen.',
          'Echte Jupyter-Notebooks für Python und R mit lokalem Kernel sowie Anzeige für PDF, CSV, DOCX, XLSX und weitere Formate.',
          'Ausführung auf entfernten Rechnern über SSH oder Slurm oder auf Modal.',
          'Ein-Klick-Anbindungen für arXiv, PubMed, Crossref, Semantic Scholar und bioRxiv sowie jeden MCP-Server, den Sie hinzufügen.',
          'Claude Code, Codex und andere Agenten laufen neben der mitgelieferten Laufzeit, und die App spricht das Agent Client Protocol in beide Richtungen.',
          'Browsersteuerung über Ihr eigenes Chrome-Profil und Bedienung von Desktop-Apps über Barrierefreiheits-Schnittstellen.',
          'Ein optionales Gateway, das dieselbe Oberfläche an Browser oder Smartphone liefert, und ein Befehl osd für Server ohne Bildschirm und Skripte.',
          'Oberflächensprachen: Englisch, Vereinfachtes Chinesisch, Japanisch, Spanisch, Deutsch, Französisch und Koreanisch.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Arbeitsbereichsdateien, Sitzungsverlauf und Herkunftsnachweise bleiben standardmäßig in lokalen Ordnern, Eingaben und vom Agenten gelesene Inhalte gehen aber an den gewählten Modellanbieter.**',
          'Laut README werden Befehlsausführung, Löschen von Dateien, Installieren von Abhängigkeiten und Verbindungen nach außen vom Nutzer freigegeben, und Zugangsdaten des Anbieters liegen in der App-eigenen Laufzeitkonfiguration. Außerdem enthalte Settings eine verständliche Datenfluss-Ansicht dazu, was an den gewählten Anbieter gehen kann. Der Befehl osd kennt eine Einstellung namens volle Freigabe, die diese Abfragen abschaltet; der Hersteller nennt das eine bewusste Entscheidung, keine Voreinstellung.',
          'Zwei Funktionen erweitern, worauf der Agent zugreifen kann. Die Browsersteuerung nutzt Ihr echtes Chrome-Profil samt Anmeldungen, und die Computersteuerung kann Apps auf Ihrem Bildschirm lesen und bedienen. Das Gateway für Fernzugriff ist standardmäßig aus und lauscht nur auf dem lokalen Rechner, bis Sie es aktivieren.',
          'Auf der Website des Herstellers wurde weder eine Datenschutzerklärung noch Nutzungsbedingungen oder ein Impressum gefunden. Die Sponsorenseite nennt eine Kontaktadresse für Datenschutzfragen, und ob die App Telemetrie oder Analysedaten sendet, steht in den gelesenen Quellen nicht.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Open Science Desktop passt zu Menschen, die eine Agenten-Arbeitsumgebung auf dem eigenen Rechner möchten und einen Anbieterschlüssel verwalten können.**',
        ],
        items: [
          'Forschende und Studierende, die Literatur, Code, Abbildungen und Berichte mit nachvollziehbaren Quellen zusammenhalten möchten.',
          'Entwickler, die mehrere Coding-Agenten und einen Forschungsagenten in einem Fenster betreiben wollen.',
          'Teams, die einen Server ohne Bildschirm oder eine per Browser erreichbare Arbeitsumgebung brauchen und den Zugriff selbst konfigurieren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**Open Science Desktop passt nicht für alle, und mehrere Details sind nicht überprüft.**',
        ],
        items: [
          'Nicht geeignet: wer ein vollständig offlinefähiges Werkzeug ohne Anbindung eines Modellanbieters braucht.',
          'Nicht geeignet: wer heute signierte Windows- oder Linux-Installer benötigt; die README nennt die Windows-Codesignierung als kurzfristige Aufgabe.',
          'Nicht überprüft: ob ein lokales Modell über die App gut funktioniert. Die README erwähnt eigene OpenAI-kompatible Endpunkte, PromptQuorum hat aber keinen ausgeführt.',
          'Nicht überprüft: die Platzierung bei ResearchClawBench und die Qualität erzeugter Paper, Übersichten und Quellenangaben.',
          'Nicht überprüft: Hardwareanforderungen über das Betriebssystem hinaus, Kontopflicht und Telemetrie.',
          'Nicht überprüft: eine Datenschutzerklärung. Es wurde keine gefunden, daher stammen die Datenschutzaussagen hier aus der README.',
          'Nicht überprüft: Die Website des Herstellers nennt v0.7.2 und einen Workaround für unsigniertes macOS, GitHub zeigt dagegen v0.7.3 und signierte macOS-Builds. Dieser Test folgt GitHub.',
          'Nicht überprüft: Die Repository-Lizenz erscheint auf GitHub als Other; der MIT-Text stammt aus der LICENSE-Datei, und mitgelieferte Skills von Dritten behalten ihre eigenen Lizenzen.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Science Desktop im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**Open Science Desktop ist eine Desktop-Forschungsumgebung mit mitgelieferter Agenten-Laufzeit. PromptQuorum hat sie nicht praktisch mit den folgenden Werkzeugen verglichen.** Die Beschreibungen stammen aus den Verzeichniseinträgen und der Vergleichsseite des Herstellers.',
        ],
        columns: ['Werkzeug', 'In den Quellen vermerkt'],
        rows: [
          { 'Werkzeug': 'Open Science Desktop', 'In den Quellen vermerkt': 'MIT-Desktop-Arbeitsumgebung; eigenes Modell nötig' },
          { 'Werkzeug': 'Local Deep Research', 'In den Quellen vermerkt': 'Selbst gehosteter Rechercheagent mit Belegen; lokale oder Cloud-LLMs' },
          { 'Werkzeug': 'Vane', 'In den Quellen vermerkt': 'Selbst gehostete Antwortmaschine mit belegten Antworten' },
          { 'Werkzeug': 'Cherry Studio', 'In den Quellen vermerkt': 'Agentenbasierte Desktop-App, viele Anbieter, MCP' },
          { 'Werkzeug': 'AnythingLLM', 'In den Quellen vermerkt': 'RAG und Dokumenten-Chat mit eingebautem Vektorspeicher' },
          { 'Werkzeug': 'OpenScience (Synthetic Sciences)', 'In den Quellen vermerkt': 'Unabhängiges Apache-2.0-CLI, öffnet Browser-Arbeitsbereich' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist Open Science Desktop kostenlos?',
            a: 'Die App ist unter der MIT-Lizenz kostenlos. Die Download-Seite weist darauf hin, dass die Nutzung beim Anbieter Kosten verursachen kann; die Kosten des verbundenen Modells sind also getrennt und werden vom Anbieter festgelegt.',
          },
          {
            q: 'Laufen Modelle auf meinem Rechner?',
            a: 'Nicht von selbst. Die App bündelt eine Agenten-Laufzeit, kein Modell, und Sie tragen einen Anbieterschlüssel oder Endpunkt ein. Die README erwähnt eigene OpenAI-kompatible Endpunkte, PromptQuorum hat aber kein lokales Modell getestet.',
          },
          {
            q: 'Ist es dasselbe wie OpenScience von Synthetic Sciences?',
            a: 'Nein. Laut Vergleichsseite des Herstellers ist das ein unabhängiges Apache-2.0-Kommandozeilenprojekt, das einen Browser-Arbeitsbereich öffnet. Open Science Desktop hieß früher Open Science, deshalb ähneln sich die Namen.',
          },
          {
            q: 'Kann ich es ohne Bildschirm oder vom Smartphone aus nutzen?',
            a: 'Laut README startet der Befehl osd die Arbeitsumgebung auf einem Rechner ohne Display, und ein optionales Gateway liefert dieselbe Oberfläche an Browser oder Smartphone. Es ist standardmäßig aus und nur lokal erreichbar, bis Sie es aktivieren.',
          },
          {
            q: 'Wie oft wird es aktualisiert?',
            a: 'Die Release-Seite zeigt v0.7.0 am 26. Oktober, v0.7.1 am 29. Oktober, v0.7.2 am 7. November und v0.7.3 am 16. November 2026; vier Releases erschienen also innerhalb von etwa drei Wochen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Open Science Desktop ist einen Blick wert, wenn Sie eine kostenlose, einsehbare Forschungsumgebung auf dem eigenen Rechner möchten und bereits einen Modellanbieter nutzen.**',
          'Auf dem Papier deckt es viel ab: lokale Projektordner, Herkunftsverknüpfungen, Notebooks, Läufe auf entfernten Rechnern, Anbindungen, Freigabeabfragen und Code unter MIT-Lizenz. Releases erscheinen häufig, was auf ein aktives Projekt hindeutet.',
          'Die Kompromisse sind real. Es ist Beta-Software, das Modell stammt von einem Anbieter Ihrer Wahl, die Windows- und Linux-Installer sind nicht signiert, und eine Datenschutzerklärung wurde nicht gefunden. PromptQuorum hat es nicht getestet. Probieren Sie es an einem unkritischen Projekt aus, lassen Sie die Freigabeabfragen eingeschaltet und prüfen Sie die Datenfluss-Ansicht in Settings, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Open Science Desktop](https://openedscience.com) — Herstellerbeschreibung der App, Plattformen und des aktuellen Releases.',
          '[Download-Seite](https://openedscience.com/download/) — Installer je Betriebssystem, angegebene Version und Hinweis zur Anbieternutzung.',
          '[Dokumentation](https://openedscience.com/docs/) — Installationsschritte, Warnungen zu unsignierten Builds und Hinweise zum ersten Start.',
          '[Seite zu ai4s-research](https://openedscience.com/ai4s-research/) — Sponsor APEVON TECHNOLOGIES PTE. LTD. (Singapur) und die Open-Source-Organisation.',
          '[Vergleich mit OpenScience](https://openedscience.com/open-science-desktop-vs-openscience/) — Hinweis des Herstellers, dass beide Projekte unabhängig sind.',
          '[GitHub-Repository](https://github.com/ai4s-research/open-science) — README, Fähigkeiten, Abschnitt zu Sicherheit und Datenschutz, Sternezahl und Commits.',
          '[LICENSE](https://github.com/ai4s-research/open-science/blob/master/LICENSE) — Text der MIT-Lizenz.',
          '[Release v0.7.3](https://github.com/ai4s-research/open-science/releases/tag/v0.7.3) — aktuelles Release, Dateien und Release-Hinweise.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Local Deep Research im Test](/de/power-local-llm/local-deep-research-review) — Selbst gehosteter Deep-Research-Agent mit belegter, mehrstufiger Recherche.',
          '[Vane im Test](/de/power-local-llm/vane-review) — Selbst gehostete KI-Antwortmaschine mit belegten Antworten.',
          '[Cherry Studio im Test](/de/local-llms/cherry-studio-ai-desktop-client) — Agentenbasierter Desktop-Client mit vielen Anbietern und MCP-Werkzeugen.',
          '[AnythingLLM im Test](/de/power-local-llm/anythingllm-review) — Desktop- und Web-App für RAG und Dokumenten-Chat.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/open-science-desktop-review-hero-es.webp',
    title: 'Análisis de Open Science Desktop: banco de trabajo de investigación con IA, gratuito y con tus propios archivos',
    seoTitle: 'Open Science Desktop: análisis del banco de trabajo con IA',
    intro:
      'Open Science Desktop (antes Open Science) es una app de escritorio gratuita, con licencia MIT, para macOS, Windows y Linux. Reúne un banco de trabajo de agentes de IA para investigar: búsquedas bibliográficas, código, cuadernos, figuras e informes, con los archivos del proyecto y el historial de ejecuciones en carpetas locales. Conectas tu propio proveedor de modelos, así que el modelo suele ejecutarse en la nube salvo que apuntes la app a un endpoint local. Este análisis se basa en el sitio web del desarrollador, el repositorio de GitHub, su README y las páginas de versiones. PromptQuorum no ha instalado ni probado la app.',
    metaDescription:
      'Análisis de Open Science Desktop: banco de trabajo de IA para investigar, gratuito y con licencia MIT. Tu modelo, archivos locales y privacidad.',
    twitterDescription:
      'Open Science Desktop es un banco de trabajo de investigación con IA, gratuito y con licencia MIT, con carpetas locales y tu propio proveedor. Instalación, privacidad y alternativas.',
    audience:
      'Investigadores, estudiantes y desarrolladores que quieren un banco de trabajo de agentes para bibliografía, código e informes en su propio equipo y que aportan la clave de un proveedor de modelos',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Science Desktop',
    targetKeywords: [
      'análisis Open Science Desktop',
      'Open Science Desktop',
      'banco de trabajo de investigación con IA',
      'app de escritorio de IA de código abierto para investigar',
      'privacidad de Open Science Desktop',
      'alternativas a Open Science Desktop',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Science Desktop es una app de escritorio gratuita, con licencia MIT, para macOS, Windows y Linux que ejecuta un agente de IA sobre tus carpetas de proyecto para buscar bibliografía, ejecutar código y cuadernos y generar figuras e informes.** No incluye ningún modelo: añades una clave o un endpoint de un proveedor, así que lo que sale de tu equipo depende de esa elección. El desarrollador la describe como una herramienta de investigación en beta.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Open Science Desktop y para quién es?',
        answer:
          'Open Science Desktop es un banco de trabajo de escritorio en el que un agente de IA planifica y ejecuta tareas de investigación sobre archivos de tu espacio de trabajo local y vincula cada resultado con el código y los datos de entrada que lo originaron. Es adecuado para quien quiere ese flujo en su propio equipo y acepta que el proveedor de modelos elegido ve los prompts.',
        bullets: [
          'Plataformas: macOS 13+, Windows 10/11 x64, Linux (.deb y .rpm).',
          'Precio: la app es gratuita; el uso del proveedor de modelos lo factura el proveedor.',
          'Licencia: MIT (archivo LICENSE del repositorio).',
          'Incluye un entorno de agentes OpenCode; hay que aportar proveedor o endpoint.',
          'Software en beta y en desarrollo activo.',
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
            text: 'Open Science Desktop es una app de escritorio gratuita en la que un agente de IA ejecuta búsquedas bibliográficas, código y cuadernos sobre tus carpetas de proyecto locales y rastrea cada figura e informe hasta su origen.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un espacio de investigación en tu equipo con un agente integrado. Tus archivos y tu historial se quedan en carpetas locales, pero los prompts van al proveedor de modelos que conectes.',
          },
        ],
        items: [
          'Hay instaladores para macOS, Windows y Linux; la última versión es la v0.7.3.',
          'La app es gratuita con licencia MIT; el uso lo pagas a tu proveedor de modelos.',
          'El agente pide aprobación antes de ejecutar comandos, borrar archivos, instalar dependencias o usar la red.',
          'El desarrollador la describe como una herramienta de investigación en beta y dice que hay que verificar los resultados antes de usarlos.',
          'PromptQuorum no ha probado la app, así que todas las capacidades de abajo son afirmaciones del desarrollador.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Los resultados de investigación de un agente de IA pueden contener cifras erróneas y citas inventadas. Comprueba los resultados tú mismo antes de publicar o decidir algo. Es información general, no asesoramiento profesional.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Open Science Desktop convierte una petición de investigación en un plan, una ejecución local y un conjunto de resultados vinculados dentro de una sola app de escritorio.**',
          `El repositorio pertenece a la organización ai4s-research, que se describe como patrocinada y mantenida principalmente por APEVON TECHNOLOGIES PTE. LTD. (Singapur). El proyecto se creó en GitHub en julio de 2026, tiene más de ${ST.es('open-science-desktop', 'bare')} estrellas y antes se llamaba Open Science. La versión 0.7.3 salió el 16 de noviembre de 2026 y el repositorio recibió un commit el 17 de noviembre de 2026, así que el desarrollo continúa y no corresponde un aviso de proyecto abandonado.`,
          'La app está hecha con Tauri 2 y React e inicia en segundo plano un entorno OpenCode incluido, separado de cualquier configuración de OpenCode que ya tengas. Según el README, es un MVP de escritorio funcional en desarrollo activo, y el desarrollador lo llama herramienta de investigación en beta.',
          'El desarrollador la describe como una alternativa de escritorio de código abierto a Claude Science y bancos de trabajo similares, y su README afirma ocupar el primer puesto en la clasificación ResearchClawBench. PromptQuorum no la ha comparado con otras herramientas ni ha comprobado esa clasificación.',
          'Otro proyecto llamado OpenScience, de Synthetic Sciences, es una herramienta de línea de comandos independiente con licencia Apache-2.0 que abre un espacio de trabajo en el navegador. La página de comparación del propio desarrollador indica que son proyectos distintos. Este análisis trata solo de Open Science Desktop.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Instalas Open Science Desktop con un instalador normal de GitHub Releases, que también enlaza la página de descargas del desarrollador.**',
          'La versión v0.7.3 incluye archivos .dmg para Mac con Apple Silicon e Intel, un instalador .exe para Windows más un .msi para despliegues gestionados por TI, y paquetes .deb y .rpm para Linux en x86_64 y ARM64. Según el README, los paquetes de macOS están firmados y notarizados, y las compilaciones de Windows y Linux todavía no están firmadas. Elige un formato de Windows y mantenlo.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[macOS](https://github.com/ai4s-research/open-science/releases/latest)', 'Cómo conseguirla': '.dmg (Apple Silicon o Intel), macOS 13+' },
          { 'Plataforma': '[Windows](https://github.com/ai4s-research/open-science/releases/latest)', 'Cómo conseguirla': 'Instalador x64 .exe (o .msi para TI); aviso SmartScreen' },
          { 'Plataforma': '[Linux](https://github.com/ai4s-research/open-science/releases/latest)', 'Cómo conseguirla': '.deb o .rpm, x86_64 y ARM64' },
          { 'Plataforma': 'Linux, sin root', 'Cómo conseguirla': 'Script de instalación del README (terminal)' },
          { 'Plataforma': '[Sitio web](https://openedscience.com)', 'Cómo conseguirla': 'Sitio oficial con [descargas](https://openedscience.com/download/) y [documentación](https://openedscience.com/docs/)' },
          { 'Plataforma': 'Política de privacidad', 'Cómo conseguirla': 'No se encontró; consulta la sección de privacidad' },
        ],
        note: 'Los usuarios normales deben usar los instaladores. Compilar desde el código fuente requiere Node.js, pnpm, Rust y los requisitos de Tauri. La app necesita una clave o un endpoint de proveedor antes de que el agente pueda responder.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El núcleo es un agente que trabaja sobre archivos de un espacio de trabajo local y registra de dónde procede cada resultado.** Todo lo siguiente son afirmaciones del desarrollador tomadas del README, el sitio web y las notas de versión.',
        ],
        items: [
          'Habilidades de investigación que encadenan exploración, revisión bibliográfica, experimentos y redacción de artículos, más una habilidad de auditoría de integridad.',
          'Trazabilidad: figuras, tablas e informes enlazan con el código, los datos de entrada y la ejecución que los produjeron, con registros de ejecución de solo adición.',
          'Cuadernos Jupyter reales para Python y R con kernel local, y visores para PDF, CSV, DOCX, XLSX y otros formatos.',
          'Ejecución en máquinas remotas mediante SSH o Slurm, o en Modal.',
          'Conectores con un clic para arXiv, PubMed, Crossref, Semantic Scholar y bioRxiv, y cualquier servidor MCP que añadas.',
          'Claude Code, Codex y otros agentes pueden ejecutarse junto al entorno incluido, y la app habla el Agent Client Protocol en ambos sentidos.',
          'Control del navegador mediante tu propio perfil de Chrome y uso de apps de escritorio mediante las API de accesibilidad.',
          'Una pasarela opcional que ofrece la misma interfaz a un navegador o al móvil, y un comando osd para servidores sin pantalla y scripts.',
          'Idiomas de la interfaz: inglés, chino simplificado, japonés, español, alemán, francés y coreano.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Los archivos del espacio de trabajo, el historial de sesiones y la trazabilidad se quedan en carpetas locales por defecto, pero los prompts y cualquier contenido que lea el agente van al proveedor de modelos que elijas.**',
          'El README dice que la ejecución de comandos, el borrado de archivos, la instalación de dependencias y las conexiones remotas las aprueba el usuario, y que las credenciales del proveedor se guardan en la configuración privada de la app. También dice que Settings incluye una vista en lenguaje sencillo de lo que puede enviarse al proveedor elegido. El comando osd tiene un ajuste llamado aprobación total que desactiva estas confirmaciones; el desarrollador lo presenta como una decisión deliberada, no como valor por defecto.',
          'Dos funciones amplían lo que el agente puede alcanzar. El control del navegador usa tu perfil real de Chrome con sus sesiones iniciadas, y el uso del equipo puede leer y manejar apps en tu pantalla. La pasarela de acceso remoto viene desactivada y escucha solo en la máquina local hasta que la actives.',
          'No se encontró en el sitio del desarrollador ninguna política de privacidad, términos ni aviso legal. La página del patrocinador indica una dirección de contacto para consultas de privacidad, y las fuentes leídas no dicen si la app envía telemetría o analíticas.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Open Science Desktop encaja con quien quiere un banco de trabajo de agentes en su propio equipo y sabe gestionar la clave de un proveedor.**',
        ],
        items: [
          'Investigadores y estudiantes que quieren reunir bibliografía, código, figuras e informes con fuentes trazables.',
          'Desarrolladores que quieren ejecutar varios agentes de programación y un agente de investigación en una sola ventana.',
          'Equipos que necesitan un servidor sin pantalla o un banco de trabajo accesible desde el navegador y configurarán el acceso por su cuenta.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Open Science Desktop no es para todos y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: quien necesita una herramienta totalmente sin conexión, sin conectar ningún proveedor de modelos.',
          'No encaja: quien necesita hoy instaladores firmados de Windows o Linux; el README menciona la firma de código en Windows como trabajo a corto plazo.',
          'Sin verificar: si un modelo local funciona bien a través de la app. El README menciona endpoints compatibles con OpenAI, pero PromptQuorum no ejecutó ninguno.',
          'Sin verificar: la clasificación en ResearchClawBench y la calidad de los artículos, revisiones y citas generados.',
          'Sin verificar: requisitos de hardware más allá del sistema operativo, necesidad de cuenta y telemetría.',
          'Sin verificar: una política de privacidad. No se encontró ninguna, así que las afirmaciones de privacidad de aquí proceden del README.',
          'Sin verificar: el sitio del desarrollador indica la v0.7.2 y un truco para macOS sin firmar, mientras que GitHub muestra la v0.7.3 y compilaciones de macOS firmadas. Este análisis sigue a GitHub.',
          'Sin verificar: la licencia del repositorio aparece como Other en GitHub; el texto MIT procede del archivo LICENSE, y las habilidades de terceros incluidas conservan sus propias licencias.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Science Desktop frente a las alternativas',
        itemHeadings: true,
        content: [
          '**Open Science Desktop es un banco de trabajo de investigación de escritorio con un entorno de agentes incluido. PromptQuorum no lo ha comparado en la práctica con las herramientas siguientes.** Las descripciones proceden de las fichas del directorio y de la página de comparación del propio desarrollador.',
        ],
        columns: ['Herramienta', 'Indicado en las fuentes'],
        rows: [
          { 'Herramienta': 'Open Science Desktop', 'Indicado en las fuentes': 'Banco de trabajo de escritorio MIT; tu propio modelo' },
          { 'Herramienta': 'Local Deep Research', 'Indicado en las fuentes': 'Agente de investigación autoalojado con citas; LLM locales o en la nube' },
          { 'Herramienta': 'Vane', 'Indicado en las fuentes': 'Motor de respuestas autoalojado con respuestas citadas' },
          { 'Herramienta': 'Cherry Studio', 'Indicado en las fuentes': 'App de escritorio con agentes, muchos proveedores y MCP' },
          { 'Herramienta': 'AnythingLLM', 'Indicado en las fuentes': 'RAG y chat con documentos, almacén vectorial integrado' },
          { 'Herramienta': 'OpenScience (Synthetic Sciences)', 'Indicado en las fuentes': 'CLI independiente Apache-2.0 que abre un espacio en el navegador' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Open Science Desktop es gratuito?',
            a: 'La app es gratuita con licencia MIT. La página de descargas avisa de que el uso del proveedor puede generar cargos, así que el coste del modelo que conectes es aparte y lo fija ese proveedor.',
          },
          {
            q: '¿Ejecuta modelos en mi equipo?',
            a: 'Por sí sola, no. Incluye un entorno de agentes, no un modelo, y tú añades una clave o un endpoint de proveedor. El README menciona endpoints compatibles con OpenAI, pero PromptQuorum no probó un modelo local.',
          },
          {
            q: '¿Es lo mismo que OpenScience de Synthetic Sciences?',
            a: 'No. Según la página de comparación del desarrollador, es un proyecto independiente de línea de comandos con licencia Apache-2.0 que abre un espacio de trabajo en el navegador. Open Science Desktop se llamaba antes Open Science, de ahí que los nombres se parezcan.',
          },
          {
            q: '¿Puedo usarlo sin pantalla o desde el móvil?',
            a: 'Según el README, el comando osd ejecuta el banco de trabajo en una máquina sin pantalla, y una pasarela opcional ofrece la misma interfaz a un navegador o al móvil. Viene desactivada y solo local hasta que la actives.',
          },
          {
            q: '¿Con qué frecuencia se actualiza?',
            a: 'La página de versiones muestra la v0.7.0 el 26 de octubre, la v0.7.1 el 29 de octubre, la v0.7.2 el 7 de noviembre y la v0.7.3 el 16 de noviembre de 2026; cuatro versiones en unas tres semanas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Open Science Desktop merece un vistazo si quieres un banco de trabajo de investigación gratuito e inspeccionable en tu propio equipo y ya usas un proveedor de modelos.**',
          'Sobre el papel cubre mucho: carpetas de proyecto locales, enlaces de trazabilidad, cuadernos, ejecuciones remotas, conectores, confirmaciones de aprobación y código con licencia MIT. Las versiones llegan a menudo, lo que sugiere un proyecto activo.',
          'Las contrapartidas son reales. Es software en beta, el modelo viene de un proveedor que eliges tú, los instaladores de Windows y Linux no están firmados y no se encontró una política de privacidad. PromptQuorum no lo ha probado. Pruébalo con un proyecto no sensible, deja activadas las confirmaciones de aprobación y revisa la vista de flujo de datos en Settings antes de depender de él.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Open Science Desktop](https://openedscience.com) — descripción del desarrollador de la app, las plataformas y la última versión.',
          '[Página de descargas](https://openedscience.com/download/) — instaladores por sistema operativo, versión indicada y nota sobre el uso del proveedor.',
          '[Documentación](https://openedscience.com/docs/) — pasos de instalación, avisos de compilaciones sin firmar y notas del primer inicio.',
          '[Página de ai4s-research](https://openedscience.com/ai4s-research/) — patrocinador APEVON TECHNOLOGIES PTE. LTD. (Singapur) y la organización de código abierto.',
          '[Comparación con OpenScience](https://openedscience.com/open-science-desktop-vs-openscience/) — nota del desarrollador de que ambos proyectos son independientes.',
          '[Repositorio de GitHub](https://github.com/ai4s-research/open-science) — README, capacidades, sección de seguridad y privacidad, número de estrellas y commits.',
          '[LICENSE](https://github.com/ai4s-research/open-science/blob/master/LICENSE) — texto de la licencia MIT.',
          '[Versión v0.7.3](https://github.com/ai4s-research/open-science/releases/tag/v0.7.3) — última versión, archivos y notas de la versión.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Local Deep Research](/es/power-local-llm/local-deep-research-review) — Agente de investigación profunda autoalojado, con investigación citada y de varios pasos.',
          '[Análisis de Vane](/es/power-local-llm/vane-review) — Motor de respuestas con IA autoalojado, con respuestas citadas.',
          '[Análisis de Cherry Studio](/es/local-llms/cherry-studio-ai-desktop-client) — Cliente de escritorio con agentes, muchos proveedores y herramientas MCP.',
          '[Análisis de AnythingLLM](/es/power-local-llm/anythingllm-review) — App de escritorio y web para RAG y chat con documentos.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/open-science-desktop-review-hero-fr.webp',
    title: 'Test d\'Open Science Desktop : poste de recherche IA gratuit pour vos propres fichiers',
    seoTitle: 'Open Science Desktop : test du poste de recherche IA',
    intro:
      'Open Science Desktop (anciennement Open Science) est une application de bureau gratuite, sous licence MIT, pour macOS, Windows et Linux. Elle réunit un poste de travail d\'agents IA pour la recherche : recherches bibliographiques, code, notebooks, figures et rapports, avec les fichiers du projet et l\'historique d\'exécution conservés dans des dossiers locaux. Vous connectez votre propre fournisseur de modèles, donc le modèle tourne en général dans le cloud, sauf si vous pointez l\'application vers un point d\'accès local. Ce test s\'appuie sur le site du mainteneur, le dépôt GitHub, son README et les pages de versions. PromptQuorum n\'a ni installé ni testé l\'application.',
    metaDescription:
      'Test d\'Open Science Desktop : poste de recherche IA gratuit sous licence MIT pour macOS, Windows et Linux. Votre modèle, fichiers locaux, confidentialité.',
    twitterDescription:
      'Open Science Desktop est un poste de recherche IA gratuit sous licence MIT, avec dossiers de projet locaux et votre propre fournisseur. Installation, confidentialité, alternatives.',
    audience:
      'Chercheurs, étudiants et développeurs qui veulent un poste de travail d\'agents pour la bibliographie, le code et les rapports sur leur propre ordinateur et qui apportent une clé de fournisseur de modèles',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Science Desktop',
    targetKeywords: [
      'test Open Science Desktop',
      'Open Science Desktop',
      'poste de recherche IA',
      'application de bureau IA open source pour la recherche',
      'confidentialité Open Science Desktop',
      'alternatives à Open Science Desktop',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Science Desktop est une application de bureau gratuite, sous licence MIT, pour macOS, Windows et Linux, qui fait travailler un agent IA sur vos dossiers de projet pour chercher de la bibliographie, exécuter du code et des notebooks et produire des figures et des rapports.** Elle n\'inclut aucun modèle : vous ajoutez une clé ou un point d\'accès de fournisseur, donc ce qui quitte votre machine dépend de ce choix. Le mainteneur la qualifie d\'outil de recherche en bêta.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce qu\'Open Science Desktop et à qui s\'adresse-t-il ?',
        answer:
          'Open Science Desktop est un poste de travail de bureau où un agent IA planifie et exécute des tâches de recherche sur les fichiers de votre espace de travail local et relie chaque résultat au code et aux entrées qui l\'ont produit. Il convient à ceux qui veulent ce flux sur leur propre ordinateur et acceptent que le fournisseur de modèles choisi voie les prompts.',
        bullets: [
          'Plateformes : macOS 13+, Windows 10/11 x64, Linux (.deb et .rpm).',
          'Prix : l\'application est gratuite ; l\'usage du fournisseur de modèles est facturé par celui-ci.',
          'Licence : MIT (fichier LICENSE du dépôt).',
          'Inclut un environnement d\'agents OpenCode ; fournisseur ou point d\'accès à apporter.',
          'Logiciel en bêta, en développement actif.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l\'obtenir', anchor: 'get-it' },
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
            text: 'Open Science Desktop est une application de bureau gratuite où un agent IA exécute recherches bibliographiques, code et notebooks sur vos dossiers de projet locaux et retrace chaque figure et chaque rapport jusqu\'à sa source.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez un espace de recherche sur votre ordinateur avec un agent intégré. Vos fichiers et votre historique restent dans des dossiers locaux, mais les prompts partent chez le fournisseur de modèles que vous connectez.',
          },
        ],
        items: [
          'Des installateurs existent pour macOS, Windows et Linux ; la dernière version est la v0.7.3.',
          'L\'application est gratuite sous licence MIT ; vous payez l\'usage à votre fournisseur de modèles.',
          'L\'agent demande votre accord avant d\'exécuter des commandes, de supprimer des fichiers, d\'installer des dépendances ou d\'utiliser le réseau.',
          'Le mainteneur la décrit comme un outil de recherche en bêta et précise qu\'il faut vérifier les résultats avant de les utiliser.',
          'PromptQuorum n\'a pas testé l\'application : toutes les capacités ci-dessous sont des déclarations du mainteneur.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Les résultats de recherche d\'un agent IA peuvent contenir des chiffres faux et des citations inventées. Vérifiez les résultats vous-même avant de publier ou de décider. Informations générales, pas un avis professionnel.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Open Science Desktop transforme une demande de recherche en plan, en exécution locale et en résultats reliés entre eux, dans une seule application de bureau.**',
          `Le dépôt appartient à l\'organisation ai4s-research, qui se décrit comme sponsorisée et principalement maintenue par APEVON TECHNOLOGIES PTE. LTD. (Singapour). Le projet a été créé sur GitHub en juillet 2026, compte plus de ${ST.fr('open-science-desktop', 'bare')} étoiles et s\'appelait auparavant Open Science. La version 0.7.3 est sortie le 16 novembre 2026 et le dépôt a reçu un commit le 17 novembre 2026 : le développement se poursuit, aucun avertissement de projet abandonné ne s\'applique.`,
          'L\'application est construite avec Tauri 2 et React et lance en arrière-plan un environnement OpenCode fourni, distinct de toute configuration OpenCode que vous auriez déjà. Selon le README, c\'est un MVP de bureau fonctionnel en développement actif, et le mainteneur le qualifie d\'outil de recherche en bêta.',
          'Le mainteneur la présente comme une alternative de bureau open source à Claude Science et à des postes de travail similaires, et son README revendique la première place du classement ResearchClawBench. PromptQuorum ne l\'a pas comparée à d\'autres outils et n\'a pas vérifié ce classement.',
          'Un autre projet nommé OpenScience, de Synthetic Sciences, est un outil en ligne de commande indépendant sous licence Apache-2.0 qui ouvre un espace de travail dans le navigateur. La page de comparaison du mainteneur indique que les deux projets sont distincts. Ce test ne couvre qu\'Open Science Desktop.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Vous installez Open Science Desktop avec un installateur classique depuis GitHub Releases, que la page de téléchargement du mainteneur référence aussi.**',
          'La version v0.7.3 propose des fichiers .dmg pour les Mac Apple Silicon et Intel, un installateur .exe pour Windows et un .msi pour les déploiements gérés par l\'informatique, ainsi que des paquets .deb et .rpm pour Linux en x86_64 et ARM64. Selon le README, les paquets macOS sont signés et notarisés, tandis que les versions Windows et Linux ne sont pas encore signées. Choisissez un format Windows et conservez-le.',
        ],
        columns: ['Plateforme', 'Comment l\'obtenir'],
        rows: [
          { 'Plateforme': '[macOS](https://github.com/ai4s-research/open-science/releases/latest)', 'Comment l\'obtenir': '.dmg (Apple Silicon ou Intel), macOS 13+' },
          { 'Plateforme': '[Windows](https://github.com/ai4s-research/open-science/releases/latest)', 'Comment l\'obtenir': 'Installateur x64 .exe (ou .msi pour l\'IT) ; alerte SmartScreen' },
          { 'Plateforme': '[Linux](https://github.com/ai4s-research/open-science/releases/latest)', 'Comment l\'obtenir': '.deb ou .rpm, x86_64 et ARM64' },
          { 'Plateforme': 'Linux, sans root', 'Comment l\'obtenir': 'Script d\'installation du README (terminal)' },
          { 'Plateforme': '[Site web](https://openedscience.com)', 'Comment l\'obtenir': 'Site officiel avec [téléchargement](https://openedscience.com/download/) et [documentation](https://openedscience.com/docs/)' },
          { 'Plateforme': 'Politique de confidentialité', 'Comment l\'obtenir': 'Aucune page trouvée ; voir la section confidentialité' },
        ],
        note: 'Les utilisateurs ordinaires devraient utiliser les installateurs. Compiler depuis les sources demande Node.js, pnpm, Rust et les prérequis de Tauri. L\'application a besoin d\'une clé ou d\'un point d\'accès de fournisseur avant que l\'agent puisse répondre.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Le cœur est un agent qui travaille sur des fichiers d\'un espace de travail local et consigne l\'origine de chaque résultat.** Tous les éléments ci-dessous sont des déclarations du mainteneur issues du README, du site et des notes de version.',
        ],
        items: [
          'Des compétences de recherche qui enchaînent exploration, revue de littérature, expériences et rédaction d\'article, plus une compétence d\'audit d\'intégrité.',
          'Traçabilité : figures, tableaux et rapports renvoient au code, aux entrées et à l\'exécution qui les ont produits, avec des journaux d\'exécution en ajout seul.',
          'De vrais notebooks Jupyter pour Python et R avec un noyau local, et des visionneuses pour PDF, CSV, DOCX, XLSX et d\'autres formats.',
          'Exécution sur des machines distantes via SSH ou Slurm, ou sur Modal.',
          'Connecteurs en un clic pour arXiv, PubMed, Crossref, Semantic Scholar et bioRxiv, plus tout serveur MCP que vous ajoutez.',
          'Claude Code, Codex et d\'autres agents peuvent tourner à côté de l\'environnement fourni, et l\'application parle l\'Agent Client Protocol dans les deux sens.',
          'Pilotage du navigateur via votre propre profil Chrome, et utilisation d\'applications de bureau via les API d\'accessibilité.',
          'Une passerelle optionnelle qui sert la même interface à un navigateur ou à un téléphone, et une commande osd pour les serveurs sans écran et les scripts.',
          'Langues de l\'interface : anglais, chinois simplifié, japonais, espagnol, allemand, français et coréen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Les fichiers de l\'espace de travail, l\'historique des sessions et la traçabilité restent par défaut dans des dossiers locaux, mais les prompts et tout contenu lu par l\'agent partent chez le fournisseur de modèles que vous sélectionnez.**',
          'Le README indique que l\'exécution de commandes, la suppression de fichiers, l\'installation de dépendances et les connexions distantes sont approuvées par l\'utilisateur, et que les identifiants du fournisseur sont stockés dans la configuration privée de l\'application. Il précise aussi que Settings contient une vue en langage clair de ce qui peut être envoyé au fournisseur choisi. La commande osd propose un réglage nommé approbation totale qui désactive ces demandes ; le mainteneur parle d\'un choix délibéré, pas d\'une valeur par défaut.',
          'Deux fonctions élargissent ce que l\'agent peut atteindre. Le pilotage du navigateur utilise votre vrai profil Chrome avec ses connexions, et l\'utilisation de l\'ordinateur peut lire et manipuler des applications à l\'écran. La passerelle d\'accès à distance est désactivée par défaut et n\'écoute que sur la machine locale tant que vous ne l\'activez pas.',
          'Aucune politique de confidentialité, aucune condition d\'utilisation ni aucune mention légale n\'ont été trouvées sur le site du mainteneur. La page du sponsor indique une adresse de contact pour les questions de confidentialité, et les sources lues ne disent pas si l\'application envoie de la télémétrie ou des statistiques d\'usage.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**Open Science Desktop convient à ceux qui veulent un poste de travail d\'agents sur leur propre ordinateur et savent gérer une clé de fournisseur.**',
        ],
        items: [
          'Chercheurs et étudiants qui veulent réunir bibliographie, code, figures et rapports avec des sources traçables.',
          'Développeurs qui veulent faire tourner plusieurs agents de code et un agent de recherche dans une seule fenêtre.',
          'Équipes qui ont besoin d\'un serveur sans écran ou d\'un poste accessible par navigateur et configureront l\'accès elles-mêmes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**Open Science Desktop ne convient pas à tout le monde, et plusieurs détails restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : à qui veut un outil entièrement hors ligne, sans connecter de fournisseur de modèles.',
          'Ne convient pas : à qui a besoin dès aujourd\'hui d\'installateurs Windows ou Linux signés ; le README cite la signature de code Windows comme travail à court terme.',
          'Non vérifié : si un modèle local fonctionne bien via l\'application. Le README mentionne des points d\'accès compatibles OpenAI, mais PromptQuorum n\'en a exécuté aucun.',
          'Non vérifié : le classement ResearchClawBench et la qualité des articles, revues et citations générés.',
          'Non vérifié : les exigences matérielles au-delà du système d\'exploitation, l\'obligation de compte et la télémétrie.',
          'Non vérifié : une politique de confidentialité. Aucune n\'a été trouvée, donc les déclarations de confidentialité ici viennent du README.',
          'Non vérifié : le site du mainteneur indique la v0.7.2 et une astuce pour macOS non signé, alors que GitHub affiche la v0.7.3 et des versions macOS signées. Ce test suit GitHub.',
          'Non vérifié : la licence du dépôt apparaît comme Other sur GitHub ; le texte MIT vient du fichier LICENSE, et les compétences tierces incluses gardent leurs propres licences.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Science Desktop face aux alternatives',
        itemHeadings: true,
        content: [
          '**Open Science Desktop est un poste de recherche de bureau avec un environnement d\'agents fourni. PromptQuorum ne l\'a pas comparé en pratique aux outils ci-dessous.** Les descriptions viennent des fiches de l\'annuaire et de la page de comparaison du mainteneur.',
        ],
        columns: ['Outil', 'Noté dans les sources'],
        rows: [
          { 'Outil': 'Open Science Desktop', 'Noté dans les sources': 'Poste de bureau MIT ; votre propre modèle' },
          { 'Outil': 'Local Deep Research', 'Noté dans les sources': 'Agent de recherche auto-hébergé avec citations ; LLM locaux ou cloud' },
          { 'Outil': 'Vane', 'Noté dans les sources': 'Moteur de réponses auto-hébergé, réponses citées' },
          { 'Outil': 'Cherry Studio', 'Noté dans les sources': 'Appli de bureau à agents, nombreux fournisseurs, MCP' },
          { 'Outil': 'AnythingLLM', 'Noté dans les sources': 'RAG et chat documentaire, magasin vectoriel intégré' },
          { 'Outil': 'OpenScience (Synthetic Sciences)', 'Noté dans les sources': 'CLI indépendant Apache-2.0 ouvrant un espace dans le navigateur' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Open Science Desktop est-il gratuit ?',
            a: 'L\'application est gratuite sous licence MIT. La page de téléchargement précise que l\'usage du fournisseur peut entraîner des frais : le coût du modèle que vous connectez est donc distinct et fixé par ce fournisseur.',
          },
          {
            q: 'Exécute-t-il des modèles sur mon ordinateur ?',
            a: 'Pas par lui-même. Il fournit un environnement d\'agents, pas un modèle, et vous ajoutez une clé ou un point d\'accès de fournisseur. Le README mentionne des points d\'accès compatibles OpenAI, mais PromptQuorum n\'a pas testé de modèle local.',
          },
          {
            q: 'Est-ce la même chose qu\'OpenScience de Synthetic Sciences ?',
            a: 'Non. D\'après la page de comparaison du mainteneur, c\'est un projet indépendant en ligne de commande sous licence Apache-2.0 qui ouvre un espace de travail dans le navigateur. Open Science Desktop s\'appelait auparavant Open Science, d\'où la ressemblance des noms.',
          },
          {
            q: 'Puis-je l\'utiliser sans écran ou depuis mon téléphone ?',
            a: 'Selon le README, la commande osd lance le poste de travail sur une machine sans écran, et une passerelle optionnelle sert la même interface à un navigateur ou à un téléphone. Elle est désactivée par défaut et locale tant que vous ne l\'activez pas.',
          },
          {
            q: 'À quelle fréquence est-il mis à jour ?',
            a: 'La page des versions montre la v0.7.0 le 26 octobre, la v0.7.1 le 29 octobre, la v0.7.2 le 7 novembre et la v0.7.3 le 16 novembre 2026, soit quatre versions en environ trois semaines.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Open Science Desktop mérite un coup d\'œil si vous voulez un poste de recherche gratuit et inspectable sur votre propre ordinateur et utilisez déjà un fournisseur de modèles.**',
          'Sur le papier, il couvre beaucoup : dossiers de projet locaux, liens de traçabilité, notebooks, exécutions distantes, connecteurs, demandes d\'approbation et code sous licence MIT. Les versions sortent souvent, ce qui suggère un projet actif.',
          'Les compromis sont réels. C\'est un logiciel en bêta, le modèle vient d\'un fournisseur de votre choix, les installateurs Windows et Linux ne sont pas signés et aucune politique de confidentialité n\'a été trouvée. PromptQuorum ne l\'a pas testé. Essayez-le sur un projet non sensible, laissez les demandes d\'approbation activées et consultez la vue du flux de données dans Settings avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d\'Open Science Desktop](https://openedscience.com) — description par le mainteneur de l\'application, des plateformes et de la dernière version.',
          '[Page de téléchargement](https://openedscience.com/download/) — installateurs par système, version indiquée et note sur l\'usage du fournisseur.',
          '[Documentation](https://openedscience.com/docs/) — étapes d\'installation, avertissements sur les versions non signées et notes de premier lancement.',
          '[Page ai4s-research](https://openedscience.com/ai4s-research/) — sponsor APEVON TECHNOLOGIES PTE. LTD. (Singapour) et organisation open source.',
          '[Comparaison avec OpenScience](https://openedscience.com/open-science-desktop-vs-openscience/) — note du mainteneur indiquant que les deux projets sont indépendants.',
          '[Dépôt GitHub](https://github.com/ai4s-research/open-science) — README, capacités, section sécurité et confidentialité, nombre d\'étoiles et commits.',
          '[LICENSE](https://github.com/ai4s-research/open-science/blob/master/LICENSE) — texte de la licence MIT.',
          '[Version v0.7.3](https://github.com/ai4s-research/open-science/releases/tag/v0.7.3) — dernière version, fichiers et notes de version.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Local Deep Research](/fr/power-local-llm/local-deep-research-review) — Agent de recherche approfondie auto-hébergé, avec recherche citée en plusieurs étapes.',
          '[Test de Vane](/fr/power-local-llm/vane-review) — Moteur de réponses IA auto-hébergé, avec réponses citées.',
          '[Test de Cherry Studio](/fr/local-llms/cherry-studio-ai-desktop-client) — Client de bureau à agents avec de nombreux fournisseurs et outils MCP.',
          '[Test d\'AnythingLLM](/fr/power-local-llm/anythingllm-review) — Appli de bureau et web pour le RAG et le chat documentaire.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/open-science-desktop-review-hero-ja.webp',
    title: 'Open Science Desktop レビュー：自分のファイルで使える無料のAI研究ワークベンチ',
    seoTitle: 'Open Science Desktopレビュー：AI研究ワークベンチ',
    intro:
      'Open Science Desktop（旧称 Open Science）は、macOS、Windows、Linux向けの無料のデスクトップアプリで、MITライセンスです。文献検索、コード、ノートブック、図、レポートまでを扱う研究用のエージェント環境をまとめており、プロジェクトのファイルと実行履歴はローカルのフォルダーに残ります。モデルプロバイダーはご自身で接続するため、ローカルのエンドポイントを指定しない限り、モデル自体は通常クラウドで動きます。このレビューは、開発元のサイト、GitHubリポジトリ、README、リリースページに基づいています。PromptQuorumはこのアプリをインストールしておらず、試用もしていません。',
    metaDescription:
      'Open Science Desktopのレビュー。macOS・Windows・Linux対応の無料MITライセンスAI研究ワークベンチ。モデルは自前、ファイルはローカル、プライバシーの限界も解説。',
    twitterDescription:
      'Open Science Desktopは、ローカルのプロジェクトフォルダーと自前のモデルプロバイダーを使う、無料のMITライセンスAI研究ワークベンチ。導入、プライバシー、代替ツール。',
    audience:
      '文献、コード、レポートのためのエージェント環境を自分のパソコンで使いたく、モデルプロバイダーのキーを用意できる研究者、学生、開発者',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Science Desktop',
    targetKeywords: [
      'Open Science Desktop レビュー',
      'Open Science Desktop',
      'AI研究ワークベンチ',
      '研究向けオープンソースAIデスクトップアプリ',
      'Open Science Desktop プライバシー',
      'Open Science Desktop 代替',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Science Desktopは、macOS、Windows、Linux向けの無料のMITライセンスのデスクトップアプリで、プロジェクトフォルダー上でAIエージェントが文献検索、コードとノートブックの実行、図とレポートの作成を行います。** モデルは付属しません。プロバイダーのキーまたはエンドポイントを追加するため、パソコンの外に出るデータはその選択次第です。開発元はベータ版の研究ツールと位置づけています。',
    quickAnswerTop: {
      ja: {
        question: 'Open Science Desktopとは何で、誰向けですか？',
        answer:
          'Open Science Desktopは、ローカルのワークスペース上のファイルに対してAIエージェントが研究タスクを計画・実行し、各成果物を元のコードと入力に結びつけるデスクトップのワークベンチです。この流れを自分のパソコンで行いたく、選んだモデルプロバイダーにプロンプトが見えることを受け入れられる方に向いています。',
        bullets: [
          '対応：macOS 13以降、Windows 10/11 x64、Linux（.deb／.rpm）。',
          '価格：アプリは無料。モデルプロバイダーの利用料は提供元が請求します。',
          'ライセンス：MIT（リポジトリのLICENSEファイル）。',
          'OpenCodeエージェント実行環境を同梱。プロバイダーまたはエンドポイントは自前。',
          'ベータ版ソフトウェアで、活発に開発中。',
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
            text: 'Open Science Desktopは、ローカルのプロジェクトフォルダー上でAIエージェントが文献検索、コード、ノートブックを実行し、すべての図とレポートを出典まで追跡できる無料のデスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'エージェントを内蔵した、パソコン上の研究用ワークスペースと考えてください。ファイルと履歴はローカルのフォルダーに残りますが、プロンプトは接続したモデルプロバイダーに送られます。',
          },
        ],
        items: [
          'macOS、Windows、Linux向けのインストーラーが公開されており、最新リリースはv0.7.3です。',
          'アプリはMITライセンスで無料です。利用料はモデルプロバイダーに支払います。',
          'コマンドの実行、ファイルの削除、依存関係のインストール、ネットワーク利用の前に、エージェントが承認を求めます。',
          '開発元はベータ版の研究ツールと説明し、出力は利用前に確認するよう述べています。',
          'PromptQuorumはこのアプリを試していないため、以下の機能はすべて開発元の説明です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AIエージェントが出す研究結果には、誤った数値や存在しない引用が含まれることがあります。公開や判断の前に、必ず自分で結果を確認してください。以上は一般的な情報であり、専門的な助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Open Science Desktopは、研究の依頼を計画、ローカルでの実行、相互に結びついた成果物へと変える、ひとつのデスクトップアプリです。**',
          `リポジトリはai4s-researchという組織のもので、同組織はAPEVON TECHNOLOGIES PTE. LTD.（シンガポール）がスポンサーとなり主に保守していると説明しています。プロジェクトは2026年7月にGitHubで作成され、${ST.ja('open-science-desktop', 'bare')}を超えるスターがあり、以前の名称はOpen Scienceでした。バージョン0.7.3は2026年11月16日にリリースされ、リポジトリには2026年11月17日にコミットがあったため、開発は継続しており、放置プロジェクトの警告は該当しません。`,
          'アプリはTauri 2とReactで作られ、バックグラウンドで同梱のOpenCode実行環境を起動します。すでにお使いのOpenCodeの設定とは分離されています。READMEによれば、活発に開発中の動作するデスクトップMVPで、開発元はベータ版の研究ツールと呼んでいます。',
          '開発元は、Claude Scienceなどの研究ワークベンチに代わるオープンソースのデスクトップ版だと説明しており、READMEはResearchClawBenchのランキングで1位だと主張しています。PromptQuorumは他のツールと比較しておらず、この順位も確認していません。',
          'Synthetic Sciencesの「OpenScience」は別のプロジェクトで、ブラウザーのワークスペースを開く独立したApache-2.0のコマンドラインツールです。開発元の比較ページも、両者は別のプロジェクトだと述べています。このレビューが扱うのはOpen Science Desktopのみです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Open Science Desktopは、GitHub Releasesの通常のインストーラーで導入します。開発元のダウンロードページも同じ場所へリンクしています。**',
          'v0.7.3のリリースには、Apple SiliconとIntel Mac向けの.dmg、Windows向けの.exeセットアップと、IT管理の展開向け.msi、x86_64とARM64のLinux向け.debと.rpmが含まれています。READMEによれば、macOS版は署名と公証済みで、WindowsとLinuxのビルドはまだ署名されていません。Windowsの形式はどちらか一方を選び、そのまま使い続けてください。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[macOS](https://github.com/ai4s-research/open-science/releases/latest)', '入手方法': '.dmg（Apple SiliconまたはIntel）、macOS 13以降' },
          { 'プラットフォーム': '[Windows](https://github.com/ai4s-research/open-science/releases/latest)', '入手方法': 'x64セットアップ.exe（IT向けは.msi）、SmartScreen警告あり' },
          { 'プラットフォーム': '[Linux](https://github.com/ai4s-research/open-science/releases/latest)', '入手方法': '.debまたは.rpm、x86_64とARM64' },
          { 'プラットフォーム': 'Linux（root不要）', '入手方法': 'READMEのインストールスクリプト（ターミナル）' },
          { 'プラットフォーム': '[公式サイト](https://openedscience.com)', '入手方法': '公式サイト。[ダウンロード](https://openedscience.com/download/)と[ドキュメント](https://openedscience.com/docs/)あり' },
          { 'プラットフォーム': 'プライバシーポリシー', '入手方法': 'ページは見つからず。プライバシーの項を参照' },
        ],
        note: '通常の利用者はインストーラーを使ってください。ソースからのビルドにはNode.js、pnpm、Rust、Tauriの前提環境が必要です。エージェントが応答するには、先にモデルプロバイダーのキーまたはエンドポイントが必要です。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**中核は、ローカルのワークスペース上のファイルで動き、各成果物の由来を記録するエージェントです。** 以下はすべて、README、サイト、リリースノートにある開発元の説明です。',
        ],
        items: [
          '探索、文献調査、実験、論文執筆をつなぐ研究スキルと、整合性監査スキル。',
          '由来の追跡：図、表、レポートが、それを生んだコード、入力、実行に結びつき、実行ログは追記のみ。',
          'ローカルカーネルで動くPythonとRの本物のJupyterノートブックと、PDF、CSV、DOCX、XLSXなどのビューアー。',
          'SSHまたはSlurm経由のリモートマシン、またはModalでの実行。',
          'arXiv、PubMed、Crossref、Semantic Scholar、bioRxivのワンクリックコネクターと、追加できる任意のMCPサーバー。',
          'Claude CodeやCodexなどのエージェントを同梱の実行環境と並べて動かせ、Agent Client Protocolを双方向で話します。',
          'ご自身のChromeプロファイル経由のブラウザー操作と、アクセシビリティAPI経由のデスクトップアプリ操作。',
          '同じ画面をブラウザーやスマートフォンに提供する任意のゲートウェイと、画面のないサーバーやスクリプト向けのosdコマンド。',
          '表示言語：英語、簡体字中国語、日本語、スペイン語、ドイツ語、フランス語、韓国語。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**ワークスペースのファイル、セッション履歴、由来の記録は既定ではローカルのフォルダーに残りますが、プロンプトとエージェントが読んだ内容は、選んだモデルプロバイダーに送られます。**',
          'READMEによれば、コマンドの実行、ファイルの削除、依存関係のインストール、リモート接続はユーザーが承認する仕組みで、プロバイダーの認証情報はアプリ専用のランタイム設定に保存されます。また、Settingsには、選んだプロバイダーに何が送られうるかを平易に示す画面があるとしています。osdコマンドの「完全承認」という設定はこれらの確認を無効にし、開発元はこれを既定ではなく意図的な選択だと述べています。',
          '2つの機能は、エージェントが届く範囲を広げます。ブラウザー操作はログイン状態を含むご自身のChromeプロファイルを使い、コンピューター操作は画面上のアプリを読み取って操作できます。リモートアクセスのゲートウェイは既定でオフで、有効にするまでローカルマシンでのみ待ち受けます。',
          '開発元のサイトには、プライバシーポリシー、利用規約、運営者情報のページは見つかりませんでした。スポンサーのページにはプライバシーに関する問い合わせ先が記載されており、アプリがテレメトリーや解析データを送るかどうかは、確認した情報源には書かれていません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Open Science Desktopは、自分のパソコンでエージェント型のワークベンチを使いたく、プロバイダーのキーを管理できる方に向いています。**',
        ],
        items: [
          '文献、コード、図、レポートを、追跡できる出典とともにまとめたい研究者と学生。',
          '複数のコーディングエージェントと研究エージェントをひとつのウィンドウで動かしたい開発者。',
          '画面のないサーバーやブラウザーから使えるワークベンチが必要で、アクセス設定を自分で行うチーム。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Open Science Desktopはすべての人に合うわけではなく、いくつかの点は確認できていません。**',
        ],
        items: [
          '向かない方：モデルプロバイダーを一切接続せず、完全にオフラインで使えるツールが必要な方。',
          '向かない方：署名済みのWindowsまたはLinuxインストーラーが今すぐ必要な方。READMEはWindowsのコード署名を近い将来の作業として挙げています。',
          '未確認：ローカルモデルがアプリ経由でうまく動くか。READMEはOpenAI互換のカスタムエンドポイントに触れていますが、PromptQuorumは実行していません。',
          '未確認：ResearchClawBenchでの順位と、生成される論文、サーベイ、引用の品質。',
          '未確認：OS以外のハードウェア要件、アカウントの要否、テレメトリー。',
          '未確認：プライバシーポリシー。見つからなかったため、ここでのプライバシーの説明はREADMEに基づきます。',
          '未確認：開発元のサイトはv0.7.2と未署名macOS向けの回避策を示していますが、GitHubはv0.7.3と署名済みのmacOSビルドを示しています。このレビューはGitHubに従います。',
          '未確認：リポジトリのライセンスはGitHub上でOtherと表示されます。MITの本文はLICENSEファイルに基づき、同梱の第三者スキルはそれぞれ独自のライセンスを保ちます。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Science Desktopと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Open Science Desktopは、エージェント実行環境を同梱したデスクトップの研究ワークベンチです。PromptQuorumは、以下のツールと実際に比較してはいません。** 説明はディレクトリの項目と開発元の比較ページに基づきます。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'Open Science Desktop', '情報源での記載': 'MITのデスクトップ環境。モデルは自前' },
          { 'ツール': 'Local Deep Research', '情報源での記載': '引用付きのセルフホスト研究エージェント。ローカル／クラウドLLM' },
          { 'ツール': 'Vane', '情報源での記載': '引用付き回答のセルフホスト型回答エンジン' },
          { 'ツール': 'Cherry Studio', '情報源での記載': '多数のプロバイダーとMCPを持つエージェント型デスクトップ' },
          { 'ツール': 'AnythingLLM', '情報源での記載': 'RAGと文書チャット、ベクトルストア内蔵' },
          { 'ツール': 'OpenScience（Synthetic Sciences）', '情報源での記載': 'ブラウザー画面を開く独立Apache-2.0のCLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Open Science Desktopは無料ですか？',
            a: 'アプリはMITライセンスで無料です。ダウンロードページには、プロバイダーの利用に料金がかかる場合があると書かれており、接続するモデルの費用は別で、そのプロバイダーが定めます。',
          },
          {
            q: '自分のパソコン上でモデルが動きますか？',
            a: 'それ自体では動きません。同梱されるのはエージェント実行環境で、モデルではなく、プロバイダーのキーまたはエンドポイントを追加します。READMEはOpenAI互換のカスタムエンドポイントに触れていますが、PromptQuorumはローカルモデルを試していません。',
          },
          {
            q: 'Synthetic SciencesのOpenScienceと同じものですか？',
            a: '違います。開発元の比較ページによれば、あちらはブラウザーのワークスペースを開く独立したApache-2.0のコマンドラインプロジェクトです。Open Science Desktopは以前Open Scienceという名称だったため、名前が似ています。',
          },
          {
            q: '画面のないマシンやスマートフォンから使えますか？',
            a: 'READMEによれば、osdコマンドで画面のないマシン上でワークベンチを動かせ、任意のゲートウェイが同じ画面をブラウザーやスマートフォンに提供します。既定ではオフで、有効にするまでローカルのみです。',
          },
          {
            q: 'どのくらいの頻度で更新されますか？',
            a: 'リリースページには、v0.7.0が10月26日、v0.7.1が10月29日、v0.7.2が11月7日、v0.7.3が2026年11月16日と記録されており、約3週間で4回のリリースがありました。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**Open Science Desktopは、自分のパソコンで無料かつ中身を確認できる研究ワークベンチを使いたく、すでにモデルプロバイダーを使っている方なら、試す価値があります。**',
          '仕様上は幅広くカバーしています。ローカルのプロジェクトフォルダー、由来のリンク、ノートブック、リモート実行、コネクター、承認の確認、MITライセンスのコードです。リリースの頻度が高く、活発なプロジェクトであることがうかがえます。',
          'トレードオフは現実的です。ベータ版ソフトウェアで、モデルは選んだプロバイダー由来、WindowsとLinuxのインストーラーは未署名で、プライバシーポリシーは見つかりませんでした。PromptQuorumは試用していません。機密性のないプロジェクトで試し、承認の確認をオンのままにして、頼る前にSettingsのデータフロー画面を確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Open Science Desktop公式サイト](https://openedscience.com) — 開発元によるアプリ、対応プラットフォーム、最新リリースの説明。',
          '[ダウンロードページ](https://openedscience.com/download/) — OSごとのインストーラー、記載バージョン、プロバイダー利用に関する注記。',
          '[ドキュメント](https://openedscience.com/docs/) — インストール手順、未署名ビルドの警告、初回起動の注意。',
          '[ai4s-researchのページ](https://openedscience.com/ai4s-research/) — スポンサーのAPEVON TECHNOLOGIES PTE. LTD.（シンガポール）とオープンソース組織。',
          '[OpenScienceとの比較](https://openedscience.com/open-science-desktop-vs-openscience/) — 両プロジェクトが独立していることを示す開発元の注記。',
          '[GitHubリポジトリ](https://github.com/ai4s-research/open-science) — README、機能、安全とプライバシーの項、スター数、コミット。',
          '[LICENSE](https://github.com/ai4s-research/open-science/blob/master/LICENSE) — MITライセンスの本文。',
          '[リリースv0.7.3](https://github.com/ai4s-research/open-science/releases/tag/v0.7.3) — 最新リリース、アセット、リリースノート。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Local Deep Researchレビュー](/ja/power-local-llm/local-deep-research-review) — 引用付きの多段階リサーチを行うセルフホスト型ディープリサーチエージェント。',
          '[Vaneレビュー](/ja/power-local-llm/vane-review) — 引用付き回答を返すセルフホスト型AI回答エンジン。',
          '[Cherry Studioレビュー](/ja/local-llms/cherry-studio-ai-desktop-client) — 多数のプロバイダーとMCPツールを備えたエージェント型デスクトップクライアント。',
          '[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review) — RAGと文書チャット向けのデスクトップ／Webアプリ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/open-science-desktop-review-hero-pt.webp',
    title: 'Análise do Open Science Desktop: bancada de pesquisa com IA, gratuita e com seus próprios arquivos',
    seoTitle: 'Análise do Open Science Desktop: bancada de pesquisa IA',
    intro:
      'O Open Science Desktop (antes chamado Open Science) é um app de desktop gratuito, com licença MIT, para macOS, Windows e Linux. Ele reúne uma bancada de agentes de IA para pesquisa: buscas bibliográficas, código, notebooks, figuras e relatórios, com os arquivos do projeto e o histórico de execuções em pastas locais. Você conecta o seu próprio provedor de modelos, então o modelo normalmente roda na nuvem, a menos que você aponte o app para um endpoint local. Esta análise se baseia no site do desenvolvedor, no repositório do GitHub, no README e nas páginas de versões. A PromptQuorum não instalou nem testou o app.',
    metaDescription:
      'Análise do Open Science Desktop: bancada de pesquisa com IA gratuita, licença MIT, para macOS, Windows e Linux. Seu modelo e arquivos locais.',
    twitterDescription:
      'O Open Science Desktop é uma bancada de pesquisa com IA gratuita, licença MIT, com pastas de projeto locais e seu próprio provedor. Instalação, privacidade e alternativas.',
    audience:
      'Pesquisadores, estudantes e desenvolvedores que querem uma bancada de agentes para bibliografia, código e relatórios no próprio computador e que trazem a chave de um provedor de modelos',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Science Desktop',
    targetKeywords: [
      'análise Open Science Desktop',
      'Open Science Desktop',
      'bancada de pesquisa com IA',
      'app de desktop de IA de código aberto para pesquisa',
      'privacidade do Open Science Desktop',
      'alternativas ao Open Science Desktop',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Open Science Desktop é um app de desktop gratuito, com licença MIT, para macOS, Windows e Linux que executa um agente de IA sobre as suas pastas de projeto para buscar bibliografia, rodar código e notebooks e gerar figuras e relatórios.** Ele não inclui modelo: você adiciona uma chave ou um endpoint de provedor, então o que sai do seu computador depende dessa escolha. O desenvolvedor o descreve como uma ferramenta de pesquisa em beta.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Open Science Desktop e para quem ele serve?',
        answer:
          'O Open Science Desktop é uma bancada de desktop em que um agente de IA planeja e executa tarefas de pesquisa sobre arquivos do seu espaço de trabalho local e liga cada resultado ao código e às entradas que o geraram. Serve para quem quer esse fluxo no próprio computador e aceita que o provedor de modelos escolhido veja os prompts.',
        bullets: [
          'Plataformas: macOS 13+, Windows 10/11 x64, Linux (.deb e .rpm).',
          'Preço: o app é gratuito; o uso do provedor de modelos é cobrado pelo provedor.',
          'Licença: MIT (arquivo LICENSE do repositório).',
          'Inclui um ambiente de agentes OpenCode; é preciso trazer provedor ou endpoint.',
          'Software em beta, em desenvolvimento ativo.',
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
            text: 'O Open Science Desktop é um app de desktop gratuito em que um agente de IA executa buscas bibliográficas, código e notebooks sobre as suas pastas de projeto locais e rastreia cada figura e relatório até a origem.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um espaço de pesquisa no seu computador com um agente embutido. Seus arquivos e o histórico ficam em pastas locais, mas os prompts vão para o provedor de modelos que você conectar.',
          },
        ],
        items: [
          'Há instaladores para macOS, Windows e Linux; a versão mais recente é a v0.7.3.',
          'O app é gratuito com licença MIT; você paga o uso ao seu provedor de modelos.',
          'O agente pede aprovação antes de executar comandos, apagar arquivos, instalar dependências ou usar a rede.',
          'O desenvolvedor o descreve como ferramenta de pesquisa em beta e diz que os resultados devem ser verificados antes do uso.',
          'A PromptQuorum não testou o app, então todas as capacidades abaixo são afirmações do desenvolvedor.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Resultados de pesquisa de um agente de IA podem conter números errados e citações inventadas. Confira os resultados você mesmo antes de publicar ou decidir algo. São informações gerais, não aconselhamento profissional.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Open Science Desktop transforma um pedido de pesquisa em um plano, execução local e um conjunto de resultados ligados entre si, dentro de um único app de desktop.**',
          `O repositório pertence à organização ai4s-research, que se descreve como patrocinada e mantida principalmente pela APEVON TECHNOLOGIES PTE. LTD. (Singapura). O projeto foi criado no GitHub em julho de 2026, tem mais de ${ST.pt('open-science-desktop', 'bare')} estrelas e antes se chamava Open Science. A versão 0.7.3 foi lançada em 16 de novembro de 2026 e o repositório teve um commit em 17 de novembro de 2026, então o desenvolvimento continua e não se aplica aviso de projeto abandonado.`,
          'O app é feito com Tauri 2 e React e inicia em segundo plano um ambiente OpenCode incluído, separado de qualquer configuração de OpenCode que você já tenha. Segundo o README, é um MVP de desktop funcional em desenvolvimento ativo, e o desenvolvedor o chama de ferramenta de pesquisa em beta.',
          'O desenvolvedor o descreve como uma alternativa de desktop de código aberto ao Claude Science e a bancadas semelhantes, e o README afirma o primeiro lugar no ranking ResearchClawBench. A PromptQuorum não o comparou com outras ferramentas e não verificou essa classificação.',
          'Outro projeto chamado OpenScience, da Synthetic Sciences, é uma ferramenta de linha de comando independente, com licença Apache-2.0, que abre um espaço de trabalho no navegador. A página de comparação do próprio desenvolvedor diz que os dois são projetos separados. Esta análise trata apenas do Open Science Desktop.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o Open Science Desktop com um instalador comum do GitHub Releases, que a página de download do desenvolvedor também indica.**',
          'A versão v0.7.3 traz arquivos .dmg para Macs com Apple Silicon e Intel, um instalador .exe para Windows mais um .msi para implantação gerenciada por TI, e pacotes .deb e .rpm para Linux em x86_64 e ARM64. Segundo o README, os pacotes de macOS são assinados e notarizados, e as versões de Windows e Linux ainda não são assinadas. Escolha um formato de Windows e continue com ele.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[macOS](https://github.com/ai4s-research/open-science/releases/latest)', 'Como obter': '.dmg (Apple Silicon ou Intel), macOS 13+' },
          { 'Plataforma': '[Windows](https://github.com/ai4s-research/open-science/releases/latest)', 'Como obter': 'Instalador x64 .exe (ou .msi para TI); alerta do SmartScreen' },
          { 'Plataforma': '[Linux](https://github.com/ai4s-research/open-science/releases/latest)', 'Como obter': '.deb ou .rpm, x86_64 e ARM64' },
          { 'Plataforma': 'Linux, sem root', 'Como obter': 'Script de instalação do README (terminal)' },
          { 'Plataforma': '[Site](https://openedscience.com)', 'Como obter': 'Site oficial com [download](https://openedscience.com/download/) e [documentação](https://openedscience.com/docs/)' },
          { 'Plataforma': 'Política de privacidade', 'Como obter': 'Não encontrada; veja a seção de privacidade' },
        ],
        note: 'Usuários comuns devem usar os instaladores. Compilar a partir do código-fonte exige Node.js, pnpm, Rust e os pré-requisitos do Tauri. O app precisa de uma chave ou de um endpoint de provedor antes que o agente possa responder.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O núcleo é um agente que trabalha sobre arquivos de um espaço de trabalho local e registra a origem de cada resultado.** Todos os itens abaixo são afirmações do desenvolvedor, tiradas do README, do site e das notas de versão.',
        ],
        items: [
          'Habilidades de pesquisa que encadeiam exploração, revisão da literatura, experimentos e redação de artigos, mais uma habilidade de auditoria de integridade.',
          'Rastreabilidade: figuras, tabelas e relatórios apontam para o código, as entradas e a execução que os produziram, com registros de execução somente de acréscimo.',
          'Notebooks Jupyter reais para Python e R com kernel local, e visualizadores para PDF, CSV, DOCX, XLSX e outros formatos.',
          'Execução em máquinas remotas via SSH ou Slurm, ou no Modal.',
          'Conectores de um clique para arXiv, PubMed, Crossref, Semantic Scholar e bioRxiv, além de qualquer servidor MCP que você adicionar.',
          'Claude Code, Codex e outros agentes podem rodar ao lado do ambiente incluído, e o app fala o Agent Client Protocol nos dois sentidos.',
          'Controle do navegador pelo seu próprio perfil do Chrome e uso de apps de desktop por APIs de acessibilidade.',
          'Um gateway opcional que serve a mesma interface a um navegador ou ao celular, e um comando osd para servidores sem tela e scripts.',
          'Idiomas da interface: inglês, chinês simplificado, japonês, espanhol, alemão, francês e coreano.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Arquivos do espaço de trabalho, histórico de sessões e rastreabilidade ficam em pastas locais por padrão, mas os prompts e qualquer conteúdo que o agente leia vão para o provedor de modelos que você escolher.**',
          'O README diz que a execução de comandos, a exclusão de arquivos, a instalação de dependências e as conexões remotas são aprovadas pelo usuário, e que as credenciais do provedor ficam na configuração privada do app. Diz também que o Settings traz uma visão em linguagem simples do que pode ser enviado ao provedor escolhido. O comando osd tem uma opção chamada aprovação total que desativa essas confirmações; o desenvolvedor a apresenta como escolha deliberada, não como padrão.',
          'Dois recursos ampliam o que o agente pode alcançar. O controle do navegador usa o seu perfil real do Chrome, com logins, e o uso do computador pode ler e operar apps na sua tela. O gateway de acesso remoto vem desativado e escuta apenas na máquina local até você ativá-lo.',
          'Não foram encontrados no site do desenvolvedor política de privacidade, termos ou aviso legal. A página do patrocinador indica um endereço de contato para dúvidas de privacidade, e as fontes lidas não dizem se o app envia telemetria ou análises de uso.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Open Science Desktop combina com quem quer uma bancada de agentes no próprio computador e sabe gerenciar a chave de um provedor.**',
        ],
        items: [
          'Pesquisadores e estudantes que querem reunir bibliografia, código, figuras e relatórios com fontes rastreáveis.',
          'Desenvolvedores que querem rodar vários agentes de programação e um agente de pesquisa em uma só janela.',
          'Equipes que precisam de um servidor sem tela ou de uma bancada acessível pelo navegador e vão configurar o acesso por conta própria.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Open Science Desktop não serve para todos, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: quem precisa de uma ferramenta totalmente offline, sem conectar nenhum provedor de modelos.',
          'Não serve: quem precisa hoje de instaladores assinados para Windows ou Linux; o README cita a assinatura de código do Windows como trabalho de curto prazo.',
          'Não verificado: se um modelo local funciona bem pelo app. O README menciona endpoints compatíveis com OpenAI, mas a PromptQuorum não executou nenhum.',
          'Não verificado: a posição no ResearchClawBench e a qualidade dos artigos, revisões e citações gerados.',
          'Não verificado: requisitos de hardware além do sistema operacional, exigência de conta e telemetria.',
          'Não verificado: uma política de privacidade. Nenhuma foi encontrada, então as afirmações de privacidade aqui vêm do README.',
          'Não verificado: o site do desenvolvedor indica a v0.7.2 e um contorno para macOS sem assinatura, enquanto o GitHub mostra a v0.7.3 e versões assinadas de macOS. Esta análise segue o GitHub.',
          'Não verificado: a licença do repositório aparece como Other no GitHub; o texto MIT vem do arquivo LICENSE, e as habilidades de terceiros incluídas mantêm as próprias licenças.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Science Desktop e as alternativas',
        itemHeadings: true,
        content: [
          '**O Open Science Desktop é uma bancada de pesquisa de desktop com ambiente de agentes incluído. A PromptQuorum não o comparou na prática com as ferramentas abaixo.** As descrições vêm das fichas do diretório e da página de comparação do próprio desenvolvedor.',
        ],
        columns: ['Ferramenta', 'Registrado nas fontes'],
        rows: [
          { 'Ferramenta': 'Open Science Desktop', 'Registrado nas fontes': 'Bancada de desktop MIT; seu próprio modelo' },
          { 'Ferramenta': 'Local Deep Research', 'Registrado nas fontes': 'Agente de pesquisa auto-hospedado com citações; LLMs locais ou na nuvem' },
          { 'Ferramenta': 'Vane', 'Registrado nas fontes': 'Mecanismo de respostas auto-hospedado, respostas citadas' },
          { 'Ferramenta': 'Cherry Studio', 'Registrado nas fontes': 'App de desktop com agentes, muitos provedores e MCP' },
          { 'Ferramenta': 'AnythingLLM', 'Registrado nas fontes': 'RAG e chat com documentos, armazenamento vetorial embutido' },
          { 'Ferramenta': 'OpenScience (Synthetic Sciences)', 'Registrado nas fontes': 'CLI independente Apache-2.0 que abre espaço no navegador' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Open Science Desktop é gratuito?',
            a: 'O app é gratuito com licença MIT. A página de download avisa que o uso do provedor pode gerar cobranças, então o custo do modelo que você conectar é separado e definido por esse provedor.',
          },
          {
            q: 'Ele executa modelos no meu computador?',
            a: 'Por si só, não. Ele inclui um ambiente de agentes, não um modelo, e você adiciona uma chave ou um endpoint de provedor. O README menciona endpoints compatíveis com OpenAI, mas a PromptQuorum não testou um modelo local.',
          },
          {
            q: 'É o mesmo que o OpenScience da Synthetic Sciences?',
            a: 'Não. Segundo a página de comparação do desenvolvedor, é um projeto independente de linha de comando, com licença Apache-2.0, que abre um espaço de trabalho no navegador. O Open Science Desktop se chamava antes Open Science, por isso os nomes se parecem.',
          },
          {
            q: 'Posso usá-lo sem tela ou pelo celular?',
            a: 'Segundo o README, o comando osd executa a bancada em uma máquina sem tela, e um gateway opcional serve a mesma interface a um navegador ou ao celular. Ele vem desativado e apenas local até você ativá-lo.',
          },
          {
            q: 'Com que frequência é atualizado?',
            a: 'A página de versões mostra a v0.7.0 em 26 de outubro, a v0.7.1 em 29 de outubro, a v0.7.2 em 7 de novembro e a v0.7.3 em 16 de novembro de 2026; foram quatro versões em cerca de três semanas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Open Science Desktop vale uma olhada se você quer uma bancada de pesquisa gratuita e inspecionável no próprio computador e já usa um provedor de modelos.**',
          'No papel ele cobre muita coisa: pastas de projeto locais, vínculos de rastreabilidade, notebooks, execuções remotas, conectores, confirmações de aprovação e código com licença MIT. As versões saem com frequência, o que sugere um projeto ativo.',
          'Os compromissos são reais. É software em beta, o modelo vem de um provedor que você escolhe, os instaladores de Windows e Linux não são assinados e não se encontrou política de privacidade. A PromptQuorum não o testou. Experimente em um projeto não sensível, mantenha as confirmações de aprovação ligadas e confira a visão de fluxo de dados no Settings antes de depender dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Open Science Desktop](https://openedscience.com) — descrição do desenvolvedor sobre o app, as plataformas e a versão mais recente.',
          '[Página de download](https://openedscience.com/download/) — instaladores por sistema, versão informada e nota sobre o uso do provedor.',
          '[Documentação](https://openedscience.com/docs/) — passos de instalação, avisos de versões sem assinatura e notas do primeiro uso.',
          '[Página da ai4s-research](https://openedscience.com/ai4s-research/) — patrocinadora APEVON TECHNOLOGIES PTE. LTD. (Singapura) e a organização de código aberto.',
          '[Comparação com o OpenScience](https://openedscience.com/open-science-desktop-vs-openscience/) — nota do desenvolvedor de que os dois projetos são independentes.',
          '[Repositório no GitHub](https://github.com/ai4s-research/open-science) — README, capacidades, seção de segurança e privacidade, número de estrelas e commits.',
          '[LICENSE](https://github.com/ai4s-research/open-science/blob/master/LICENSE) — texto da licença MIT.',
          '[Versão v0.7.3](https://github.com/ai4s-research/open-science/releases/tag/v0.7.3) — versão mais recente, arquivos e notas da versão.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Local Deep Research](/pt/power-local-llm/local-deep-research-review) — Agente de pesquisa profunda auto-hospedado, com pesquisa citada em várias etapas.',
          '[Análise do Vane](/pt/power-local-llm/vane-review) — Mecanismo de respostas com IA auto-hospedado, com respostas citadas.',
          '[Análise do Cherry Studio](/pt/local-llms/cherry-studio-ai-desktop-client) — Cliente de desktop com agentes, muitos provedores e ferramentas MCP.',
          '[Análise do AnythingLLM](/pt/power-local-llm/anythingllm-review) — App de desktop e web para RAG e chat com documentos.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/open-science-desktop-review-hero-zh.webp',
    title: 'Open Science Desktop 评测：用自己文件工作的免费 AI 研究工作台',
    seoTitle: 'Open Science Desktop 评测：AI 研究工作台',
    intro:
      'Open Science Desktop（原名 Open Science）是一款面向 macOS、Windows 和 Linux 的免费桌面应用，采用 MIT 许可证。它把用于研究的智能体工作台整合在一起：文献检索、代码、笔记本、图表和报告，项目文件和运行历史保存在本地文件夹中。模型提供商由您自己接入，因此除非把应用指向本地端点，模型本身通常运行在云端。本评测依据开发方网站、GitHub 仓库、README 和发布页面。PromptQuorum 没有安装或测试过这款应用。',
    metaDescription:
      'Open Science Desktop 评测：免费、MIT 许可的 AI 研究工作台，支持 macOS、Windows 和 Linux。自带模型，文件在本地，并说明隐私边界与替代方案。',
    twitterDescription:
      'Open Science Desktop 是免费、MIT 许可的 AI 研究工作台，项目文件在本地，使用自己的模型提供商。安装、隐私边界与替代方案。',
    audience:
      '希望在自己电脑上用智能体工作台处理文献、代码和报告，并且能自备模型提供商密钥的研究人员、学生和开发者',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Science Desktop',
    targetKeywords: [
      'Open Science Desktop 评测',
      'Open Science Desktop',
      'AI 研究工作台',
      '开源 AI 研究桌面应用',
      'Open Science Desktop 隐私',
      'Open Science Desktop 替代方案',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Science Desktop 是一款免费、MIT 许可的桌面应用，支持 macOS、Windows 和 Linux，让 AI 智能体在您的项目文件夹上检索文献、运行代码和笔记本，并生成图表与报告。** 它不自带模型：您需要添加提供商密钥或端点，因此哪些数据会离开您的电脑取决于这一选择。开发方称其为测试版研究工具。',
    quickAnswerTop: {
      zh: {
        question: 'Open Science Desktop 是什么，适合谁用？',
        answer:
          'Open Science Desktop 是一个桌面工作台，AI 智能体在您本地工作区的文件上规划并执行研究任务，并把每项产出关联到背后的代码和输入。适合希望在自己电脑上完成这一流程、并接受所选模型提供商会看到提示词的人。',
        bullets: [
          '平台：macOS 13+、Windows 10/11 x64、Linux（.deb 和 .rpm）。',
          '价格：应用免费；模型提供商的使用费用由提供商收取。',
          '许可证：MIT（仓库中的 LICENSE 文件）。',
          '内置 OpenCode 智能体运行环境；需自备提供商或端点。',
          '测试版软件，正在积极开发。',
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
            text: 'Open Science Desktop 是一款免费桌面应用，AI 智能体在您的本地项目文件夹上运行文献检索、代码和笔记本，并把每张图表和每份报告追溯到来源。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作内置智能体的电脑端研究空间。文件和历史保存在本地文件夹中，但提示词会发送给您接入的模型提供商。',
          },
        ],
        items: [
          '提供 macOS、Windows 和 Linux 安装包；最新版本为 v0.7.3。',
          '应用采用 MIT 许可证，免费；使用费用付给您的模型提供商。',
          '智能体在运行命令、删除文件、安装依赖或使用网络之前会请求批准。',
          '开发方称其为测试版研究工具，并提醒产出内容在使用前需要核实。',
          'PromptQuorum 没有测试过这款应用，因此下面的所有功能都是开发方的说法。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI 智能体给出的研究结果可能包含错误数字和虚构引用。发表或做决定之前，请自行核对结果。以上为一般性信息，不构成专业建议。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Open Science Desktop 在一个桌面应用中，把研究请求变成计划、本地执行和相互关联的产出。**',
          `该仓库属于 ai4s-research 组织，该组织自称由 APEVON TECHNOLOGIES PTE. LTD.（新加坡）赞助并主要维护。项目于 2026 年 7 月在 GitHub 创建，星标超过 ${ST.zh('open-science-desktop', 'bare')}，此前名为 Open Science。0.7.3 版本于 2026 年 11 月 16 日发布，仓库在 2026 年 11 月 17 日有提交，说明开发仍在继续，不适用项目停更警告。`,
          '应用基于 Tauri 2 和 React 构建，会在后台启动随附的 OpenCode 运行环境，与您已有的 OpenCode 设置相互独立。README 称它是正在积极开发的可用桌面 MVP，开发方称其为测试版研究工具。',
          '开发方称它是 Claude Science 等研究工作台的开源桌面替代品，README 还声称在 ResearchClawBench 排行榜上排名第一。PromptQuorum 没有与其他工具比较过，也没有核实该排名。',
          'Synthetic Sciences 的 OpenScience 是另一个项目，是一个独立的 Apache-2.0 命令行工具，会打开浏览器工作区。开发方自己的对比页面说明两者是不同的项目。本评测只涉及 Open Science Desktop。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**您可以通过 GitHub Releases 上的常规安装包安装 Open Science Desktop，开发方的下载页面也链接到同一处。**',
          'v0.7.3 版本提供适用于 Apple Silicon 和 Intel Mac 的 .dmg 文件、Windows 的 .exe 安装程序以及面向 IT 部署的 .msi，还有 x86_64 和 ARM64 Linux 的 .deb 与 .rpm 包。README 称 macOS 安装包已签名并公证，而 Windows 和 Linux 的构建尚未签名。Windows 的两种格式请选一种并一直使用。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[macOS](https://github.com/ai4s-research/open-science/releases/latest)', '获取方式': '.dmg（Apple Silicon 或 Intel），macOS 13+' },
          { '平台': '[Windows](https://github.com/ai4s-research/open-science/releases/latest)', '获取方式': 'x64 安装程序 .exe（IT 用 .msi）；有 SmartScreen 警告' },
          { '平台': '[Linux](https://github.com/ai4s-research/open-science/releases/latest)', '获取方式': '.deb 或 .rpm，x86_64 和 ARM64' },
          { '平台': 'Linux（无需 root）', '获取方式': 'README 中的安装脚本（终端）' },
          { '平台': '[官方网站](https://openedscience.com)', '获取方式': '官方网站，含[下载页面](https://openedscience.com/download/)和[文档](https://openedscience.com/docs/)' },
          { '平台': '隐私政策', '获取方式': '未找到政策页面；见隐私部分' },
        ],
        note: '普通用户应使用安装包。从源码构建需要 Node.js、pnpm、Rust 和 Tauri 的前置环境。智能体回答之前，应用需要先配置模型提供商密钥或端点。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**核心是一个在本地工作区文件上工作、并记录每项产出来源的智能体。** 以下均为开发方在 README、网站和发布说明中的说法。',
        ],
        items: [
          '把探索、文献综述、实验和论文写作串联起来的研究技能，另有一个完整性审计技能。',
          '来源追溯：图表和报告关联到生成它们的代码、输入和运行，运行日志只增不改。',
          '真正的 Python 和 R Jupyter 笔记本，使用本地内核，并支持 PDF、CSV、DOCX、XLSX 等格式的查看器。',
          '通过 SSH 或 Slurm 在远程机器上运行，或在 Modal 上运行。',
          '一键接入 arXiv、PubMed、Crossref、Semantic Scholar 和 bioRxiv，也可添加任意 MCP 服务器。',
          'Claude Code、Codex 等智能体可与内置运行环境并行运行，应用双向支持 Agent Client Protocol。',
          '通过您自己的 Chrome 配置文件控制浏览器，并通过辅助功能 API 操作桌面应用。',
          '一个可选的网关，把同一界面提供给浏览器或手机，以及用于无屏幕服务器和脚本的 osd 命令。',
          '界面语言：英语、简体中文、日语、西班牙语、德语、法语和韩语。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**工作区文件、会话历史和来源记录默认保存在本地文件夹，但提示词和智能体读取的任何内容会发送给您选择的模型提供商。**',
          'README 称命令执行、文件删除、依赖安装和远程连接都由用户批准，提供商凭据保存在应用私有的运行配置中。它还称 Settings 中有一个通俗易懂的数据流视图，说明哪些内容可能发送给所选提供商。osd 命令中名为完全批准的设置会关闭这些确认；开发方称这是有意的选择，而非默认值。',
          '有两项功能会扩大智能体能触及的范围。浏览器控制使用您真实的 Chrome 配置文件及其登录状态，电脑操控可以读取并操作您屏幕上的应用。远程访问网关默认关闭，在您启用之前只监听本机。',
          '在开发方网站上没有找到隐私政策、服务条款或公司信息页面。赞助方页面给出了隐私问题的联系邮箱，而已阅读的来源没有说明应用是否发送遥测或分析数据。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Open Science Desktop 适合希望在自己电脑上使用智能体工作台、并能管理提供商密钥的人。**',
        ],
        items: [
          '希望把文献、代码、图表和报告与可追溯来源放在一起的研究人员和学生。',
          '想在一个窗口中同时运行多个编程智能体和一个研究智能体的开发者。',
          '需要无屏幕服务器或可通过浏览器访问的工作台，并会自行配置访问权限的团队。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**Open Science Desktop 并不适合所有人，还有若干细节未经核实。**',
        ],
        items: [
          '不适合：需要完全离线、不接入任何模型提供商的工具的人。',
          '不适合：今天就需要已签名的 Windows 或 Linux 安装包的人；README 把 Windows 代码签名列为近期工作。',
          '未核实：本地模型通过该应用是否运行良好。README 提到自定义 OpenAI 兼容端点，但 PromptQuorum 没有运行过。',
          '未核实：ResearchClawBench 排名，以及生成的论文、综述和引用的质量。',
          '未核实：操作系统之外的硬件要求、是否需要账号以及遥测情况。',
          '未核实：隐私政策。没有找到，因此这里的隐私说明来自 README。',
          '未核实：开发方网站列出 v0.7.2 和未签名 macOS 的变通办法，而 GitHub 显示 v0.7.3 和已签名的 macOS 构建。本评测以 GitHub 为准。',
          '未核实：仓库许可证在 GitHub 上显示为 Other；MIT 文本来自 LICENSE 文件，随附的第三方技能保留各自的许可证。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Science Desktop 与替代方案',
        itemHeadings: true,
        content: [
          '**Open Science Desktop 是带有内置智能体运行环境的桌面研究工作台。PromptQuorum 没有与下列工具做过实际比较。** 描述来自目录条目和开发方自己的对比页面。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'Open Science Desktop', '来源中的记载': 'MIT 桌面工作台；自带模型' },
          { '工具': 'Local Deep Research', '来源中的记载': '带引用的自托管研究智能体；本地或云端 LLM' },
          { '工具': 'Vane', '来源中的记载': '自托管答案引擎，答案带引用' },
          { '工具': 'Cherry Studio', '来源中的记载': '基于智能体的桌面应用，多提供商，支持 MCP' },
          { '工具': 'AnythingLLM', '来源中的记载': 'RAG 与文档对话，内置向量库' },
          { '工具': 'OpenScience（Synthetic Sciences）', '来源中的记载': '独立 Apache-2.0 命令行工具，打开浏览器工作区' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Open Science Desktop 免费吗？',
            a: '应用采用 MIT 许可证，免费。下载页面提示使用提供商服务可能产生费用，因此您所接入模型的费用是另外的，由该提供商决定。',
          },
          {
            q: '它会在我的电脑上运行模型吗？',
            a: '它本身不会。它内置的是智能体运行环境，而不是模型，您需要添加提供商密钥或端点。README 提到自定义 OpenAI 兼容端点，但 PromptQuorum 没有测试过本地模型。',
          },
          {
            q: '它和 Synthetic Sciences 的 OpenScience 是一回事吗？',
            a: '不是。根据开发方的对比页面，那是一个独立的 Apache-2.0 命令行项目，会打开浏览器工作区。Open Science Desktop 此前名为 Open Science，所以名字相似。',
          },
          {
            q: '可以在没有屏幕的机器上或用手机使用吗？',
            a: '根据 README，osd 命令可在没有显示器的机器上运行工作台，可选的网关会把同一界面提供给浏览器或手机。该网关默认关闭，启用之前仅限本机。',
          },
          {
            q: '更新频率如何？',
            a: '发布页面显示，v0.7.0 于 10 月 26 日、v0.7.1 于 10 月 29 日、v0.7.2 于 11 月 7 日、v0.7.3 于 2026 年 11 月 16 日发布，约三周内发布了四个版本。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您想在自己的电脑上使用免费、可检查的研究工作台，并且已经在使用模型提供商，Open Science Desktop 值得一试。**',
          '从资料看，它覆盖面很广：本地项目文件夹、来源关联、笔记本、远程运行、连接器、批准确认，以及 MIT 许可的代码。版本发布频繁，说明项目较为活跃。',
          '代价也是实实在在的。它是测试版软件，模型来自您选择的提供商，Windows 和 Linux 安装包未签名，也没有找到隐私政策。PromptQuorum 没有测试过它。请先在不敏感的项目上试用，保持批准确认开启，并在依赖它之前查看 Settings 中的数据流视图。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Open Science Desktop 官方网站](https://openedscience.com) — 开发方对应用、平台和最新版本的说明。',
          '[下载页面](https://openedscience.com/download/) — 各系统的安装包、列出的版本以及关于提供商使用费用的提示。',
          '[文档](https://openedscience.com/docs/) — 安装步骤、未签名构建的警告和首次启动说明。',
          '[ai4s-research 页面](https://openedscience.com/ai4s-research/) — 赞助方 APEVON TECHNOLOGIES PTE. LTD.（新加坡）及该开源组织。',
          '[与 OpenScience 的对比](https://openedscience.com/open-science-desktop-vs-openscience/) — 开发方关于两个项目相互独立的说明。',
          '[GitHub 仓库](https://github.com/ai4s-research/open-science) — README、功能、安全与隐私部分、星标数和提交记录。',
          '[LICENSE](https://github.com/ai4s-research/open-science/blob/master/LICENSE) — MIT 许可证文本。',
          '[v0.7.3 版本](https://github.com/ai4s-research/open-science/releases/tag/v0.7.3) — 最新版本、安装文件和发布说明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Local Deep Research 评测](/zh/power-local-llm/local-deep-research-review) — 自托管深度研究智能体，进行带引用的多步骤研究。',
          '[Vane 评测](/zh/power-local-llm/vane-review) — 自托管 AI 答案引擎，答案带引用。',
          '[Cherry Studio 评测](/zh/local-llms/cherry-studio-ai-desktop-client) — 基于智能体的桌面客户端，支持多提供商和 MCP 工具。',
          '[AnythingLLM 评测](/zh/power-local-llm/anythingllm-review) — 用于 RAG 和文档对话的桌面与网页应用。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/open-science-desktop-review-hero-ar.webp',
    title: 'مراجعة Open Science Desktop: منصة بحث مجانية بالذكاء الاصطناعي تعمل على ملفاتك',
    seoTitle: 'مراجعة Open Science Desktop: منصة بحث بالذكاء الاصطناعي',
    intro:
      'Open Science Desktop (واسمه السابق Open Science) تطبيق مجاني لسطح المكتب بترخيص MIT يعمل على macOS وWindows وLinux. يجمع منصة عمل لوكلاء الذكاء الاصطناعي في البحث: بحث في الأدبيات، وشيفرة، ودفاتر، ورسومًا وتقارير، مع بقاء ملفات المشروع وسجل التشغيل في مجلدات محلية. تربط مزوّد النماذج الخاص بك بنفسك، لذا يعمل النموذج عادةً في السحابة ما لم توجّه التطبيق إلى نقطة اتصال محلية. تستند هذه المراجعة إلى موقع المطوّر ومستودع GitHub وملف README وصفحات الإصدارات. لم تثبّت PromptQuorum التطبيق ولم تختبره.',
    metaDescription:
      'مراجعة Open Science Desktop: منصة بحث مجانية بالذكاء الاصطناعي بترخيص MIT لأنظمة macOS وWindows وLinux. نموذجك الخاص وملفات محلية وحدود الخصوصية.',
    twitterDescription:
      'Open Science Desktop منصة بحث مجانية بترخيص MIT مع مجلدات مشاريع محلية ومزوّد نماذج من اختيارك. التثبيت وحدود الخصوصية والبدائل.',
    audience:
      'باحثون وطلاب ومطورون يريدون منصة وكلاء للأدبيات والشيفرة والتقارير على حاسوبهم الخاص، ويستطيعون توفير مفتاح مزوّد نماذج',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Science Desktop',
    targetKeywords: [
      'مراجعة Open Science Desktop',
      'Open Science Desktop',
      'منصة بحث بالذكاء الاصطناعي',
      'تطبيق مفتوح المصدر للبحث بالذكاء الاصطناعي',
      'خصوصية Open Science Desktop',
      'بدائل Open Science Desktop',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Science Desktop تطبيق مجاني لسطح المكتب بترخيص MIT يعمل على macOS وWindows وLinux، ويشغّل وكيل ذكاء اصطناعي على مجلدات مشروعك للبحث في الأدبيات وتشغيل الشيفرة والدفاتر وإنتاج الرسوم والتقارير.** لا يتضمن نموذجًا: تضيف مفتاح مزوّد أو نقطة اتصال، لذا يعتمد ما يغادر حاسوبك على هذا الاختيار. يصفه المطوّر بأنه أداة بحث تجريبية (بيتا).',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Open Science Desktop ولمن هو؟',
        answer:
          'Open Science Desktop منصة عمل لسطح المكتب يخطط فيها وكيل ذكاء اصطناعي لمهام بحثية وينفذها على ملفات مساحة عملك المحلية، ويربط كل ناتج بالشيفرة والمدخلات التي أنتجته. يناسب من يريد هذا المسار على حاسوبه الخاص ويقبل أن يرى مزوّد النماذج الذي يختاره الأوامر النصية.',
        bullets: [
          'المنصات: macOS 13+ وWindows 10/11 x64 وLinux (‏.deb و.rpm).',
          'السعر: التطبيق مجاني؛ ويحاسب المزوّد على استخدام النموذج.',
          'الترخيص: MIT (ملف LICENSE في المستودع).',
          'يضم بيئة تشغيل وكلاء OpenCode؛ عليك توفير مزوّد أو نقطة اتصال.',
          'برنامج تجريبي (بيتا) قيد التطوير النشط.',
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
            text: 'Open Science Desktop تطبيق مجاني لسطح المكتب يشغّل فيه وكيل ذكاء اصطناعي عمليات البحث في الأدبيات والشيفرة والدفاتر على مجلدات مشروعك المحلية، ويتتبع كل رسم وتقرير إلى مصدره.',
          },
          {
            type: 'plain-terms',
            text: 'تخيله مساحة بحث على حاسوبك فيها وكيل مدمج. تبقى ملفاتك وسجلك في مجلدات محلية، لكن الأوامر النصية تذهب إلى مزوّد النماذج الذي تربطه.',
          },
        ],
        items: [
          'تتوفر برامج تثبيت لأنظمة macOS وWindows وLinux؛ وآخر إصدار هو v0.7.3.',
          'التطبيق مجاني بترخيص MIT؛ وتدفع تكلفة الاستخدام لمزوّد النماذج.',
          'يطلب الوكيل موافقتك قبل تشغيل الأوامر أو حذف الملفات أو تثبيت الاعتماديات أو استخدام الشبكة.',
          'يصفه المطوّر بأنه أداة بحث تجريبية (بيتا) ويقول إن المخرجات يجب التحقق منها قبل استخدامها.',
          'لم تختبر PromptQuorum التطبيق، لذا فكل القدرات أدناه أقوال من المطوّر.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'قد تحتوي نتائج البحث التي ينتجها وكيل ذكاء اصطناعي على أرقام خاطئة ومراجع مختلقة. تحقق من النتائج بنفسك قبل النشر أو اتخاذ أي قرار. هذه معلومات عامة وليست نصيحة مهنية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**يحوّل Open Science Desktop طلبًا بحثيًا إلى خطة وتنفيذ محلي ومخرجات مترابطة داخل تطبيق واحد لسطح المكتب.**',
          `المستودع تابع لمنظمة ai4s-research التي تصف نفسها بأنها برعاية شركة APEVON TECHNOLOGIES PTE. LTD. (سنغافورة) وبصيانة رئيسية منها. أُنشئ المشروع على GitHub في يوليو 2026، وله أكثر من ${ST.ar('open-science-desktop', 'bare')} نجمة، وكان اسمه سابقًا Open Science. صدر الإصدار 0.7.3 في 16 نوفمبر 2026، وسُجّل في المستودع التزام (commit) في 17 نوفمبر 2026، فالتطوير مستمر ولا ينطبق تحذير المشروع المتوقف.`,
          'بُني التطبيق بـ Tauri 2 وReact، ويشغّل في الخلفية بيئة OpenCode مرفقة منفصلة عن أي إعداد OpenCode موجود لديك. يقول README إنه نموذج أولي عملي لسطح المكتب قيد التطوير النشط، ويسميه المطوّر أداة بحث تجريبية (بيتا).',
          'يصفه المطوّر بأنه بديل مفتوح المصدر لسطح المكتب عن Claude Science ومنصات العمل المشابهة، ويزعم README أنه في المركز الأول في لوحة ترتيب ResearchClawBench. لم تقارنه PromptQuorum بأدوات أخرى ولم تتحقق من هذا الترتيب.',
          'مشروع آخر باسم OpenScience من Synthetic Sciences هو أداة سطر أوامر مستقلة بترخيص Apache-2.0 تفتح مساحة عمل في المتصفح. وتقول صفحة المقارنة الخاصة بالمطوّر إن المشروعين منفصلان. تتناول هذه المراجعة Open Science Desktop فقط.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**تثبّت Open Science Desktop ببرنامج تثبيت عادي من GitHub Releases، وتشير إليه أيضًا صفحة التنزيل لدى المطوّر.**',
          'يضم الإصدار v0.7.3 ملفات ‎.dmg لأجهزة Mac بمعالج Apple Silicon وIntel، وملف تثبيت ‎.exe لنظام Windows إضافة إلى ‎.msi للنشر المُدار من قسم تقنية المعلومات، وحزم ‎.deb و‎.rpm لنظام Linux على x86_64 وARM64. يقول README إن حزم macOS موقّعة وموثّقة (notarized)، أما إصدارات Windows وLinux فلم تُوقَّع بعد. اختر صيغة واحدة لنظام Windows والتزم بها.',
        ],
        columns: ['المنصة', 'كيفية الحصول عليه'],
        rows: [
          { 'المنصة': '[macOS](https://github.com/ai4s-research/open-science/releases/latest)', 'كيفية الحصول عليه': '‎.dmg (Apple Silicon أو Intel)، macOS 13+' },
          { 'المنصة': '[Windows](https://github.com/ai4s-research/open-science/releases/latest)', 'كيفية الحصول عليه': 'مثبّت x64 ‎.exe (أو ‎.msi لتقنية المعلومات)؛ تحذير SmartScreen' },
          { 'المنصة': '[Linux](https://github.com/ai4s-research/open-science/releases/latest)', 'كيفية الحصول عليه': '‎.deb أو ‎.rpm، على x86_64 وARM64' },
          { 'المنصة': 'Linux بلا صلاحيات root', 'كيفية الحصول عليه': 'سكربت التثبيت في README (الطرفية)' },
          { 'المنصة': '[الموقع](https://openedscience.com)', 'كيفية الحصول عليه': 'الموقع الرسمي مع [صفحة التنزيل](https://openedscience.com/download/) و[التوثيق](https://openedscience.com/docs/)' },
          { 'المنصة': 'سياسة الخصوصية', 'كيفية الحصول عليه': 'لم نجد صفحة سياسة؛ راجع قسم الخصوصية' },
        ],
        note: 'ينبغي للمستخدمين العاديين استخدام برامج التثبيت. أما البناء من المصدر فيتطلب Node.js وpnpm وRust ومتطلبات Tauri. يحتاج التطبيق إلى مفتاح مزوّد نماذج أو نقطة اتصال قبل أن يتمكن الوكيل من الرد.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**جوهره وكيل يعمل على ملفات في مساحة عمل محلية ويسجّل مصدر كل ناتج.** كل ما يلي أقوال من المطوّر مأخوذة من README والموقع وملاحظات الإصدار.',
        ],
        items: [
          'مهارات بحثية تربط الاستكشاف ومراجعة الأدبيات والتجارب وكتابة الأوراق، إضافة إلى مهارة لتدقيق النزاهة.',
          'تتبّع المصدر: ترتبط الرسوم والجداول والتقارير بالشيفرة والمدخلات والتشغيل الذي أنتجها، مع سجلات تشغيل لا تقبل إلا الإضافة.',
          'دفاتر Jupyter حقيقية لـ Python وR بنواة محلية، وعارضات لملفات PDF وCSV وDOCX وXLSX وصيغ أخرى.',
          'التشغيل على أجهزة بعيدة عبر SSH أو Slurm، أو على Modal.',
          'موصّلات بنقرة واحدة لـ arXiv وPubMed وCrossref وSemantic Scholar وbioRxiv، إضافة إلى أي خادم MCP تضيفه.',
          'يمكن تشغيل Claude Code وCodex ووكلاء آخرين بجانب البيئة المرفقة، ويتحدث التطبيق بروتوكول Agent Client Protocol في الاتجاهين.',
          'التحكم في المتصفح عبر ملف Chrome الخاص بك، وتشغيل تطبيقات سطح المكتب عبر واجهات إمكانية الوصول.',
          'بوابة اختيارية تقدّم الواجهة نفسها إلى المتصفح أو الهاتف، وأمر osd للخوادم بلا شاشة وللسكربتات.',
          'لغات الواجهة: الإنجليزية والصينية المبسطة واليابانية والإسبانية والألمانية والفرنسية والكورية.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**تبقى ملفات مساحة العمل وسجل الجلسات وسجلات المصدر في مجلدات محلية افتراضيًا، لكن الأوامر النصية وأي محتوى يقرؤه الوكيل يذهب إلى مزوّد النماذج الذي تختاره.**',
          'يقول README إن تنفيذ الأوامر وحذف الملفات وتثبيت الاعتماديات والاتصالات البعيدة تتم بموافقة المستخدم، وإن بيانات اعتماد المزوّد تُخزَّن في إعدادات تشغيل خاصة بالتطبيق. ويقول أيضًا إن Settings تتضمن عرضًا بلغة بسيطة لما يمكن إرساله إلى المزوّد المختار. يتضمن الأمر osd إعدادًا يسمى الموافقة الكاملة يوقف هذه الطلبات؛ ويصفه المطوّر بأنه خيار متعمد وليس الإعداد الافتراضي.',
          'ميزتان توسّعان ما يمكن للوكيل الوصول إليه. يستخدم التحكم في المتصفح ملف Chrome الحقيقي الخاص بك مع تسجيلات الدخول، ويستطيع التحكم في الحاسوب قراءة التطبيقات على شاشتك وتشغيلها. أما بوابة الوصول عن بُعد فهي معطّلة افتراضيًا وتستمع على الجهاز المحلي فقط إلى أن تفعّلها.',
          'لم نعثر على سياسة خصوصية أو شروط استخدام أو صفحة بيانات الشركة في موقع المطوّر. وتذكر صفحة الراعي عنوان تواصل لأسئلة الخصوصية، ولا تذكر المصادر التي قرأناها ما إذا كان التطبيق يرسل بيانات قياس أو تحليلات.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Open Science Desktop من يريد منصة وكلاء على حاسوبه الخاص ويستطيع إدارة مفتاح مزوّد.**',
        ],
        items: [
          'باحثون وطلاب يريدون جمع الأدبيات والشيفرة والرسوم والتقارير مع مصادر يمكن تتبعها.',
          'مطورون يريدون تشغيل عدة وكلاء برمجة ووكيل بحث في نافذة واحدة.',
          'فرق تحتاج إلى خادم بلا شاشة أو منصة يمكن الوصول إليها من المتصفح وستضبط الوصول بنفسها.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**Open Science Desktop لا يناسب الجميع، وتبقى عدة تفاصيل غير مؤكدة.**',
        ],
        items: [
          'لا يناسب: من يحتاج إلى أداة تعمل دون اتصال تمامًا ودون ربط أي مزوّد نماذج.',
          'لا يناسب: من يحتاج اليوم إلى برامج تثبيت موقّعة لـ Windows أو Linux؛ إذ يذكر README توقيع الشيفرة في Windows كعمل قريب.',
          'غير متحقق منه: هل يعمل نموذج محلي جيدًا عبر التطبيق. يذكر README نقاط اتصال مخصصة متوافقة مع OpenAI، لكن PromptQuorum لم تشغّل أيًا منها.',
          'غير متحقق منه: الترتيب في ResearchClawBench، وجودة الأوراق والمراجعات والمراجع التي يولّدها.',
          'غير متحقق منه: متطلبات العتاد غير نظام التشغيل، وهل الحساب مطلوب، وبيانات القياس.',
          'غير متحقق منه: سياسة الخصوصية. لم نجد أيًا منها، لذا فإن تصريحات الخصوصية هنا مأخوذة من README.',
          'غير متحقق منه: يعرض موقع المطوّر الإصدار v0.7.2 وحلًّا بديلًا لنظام macOS غير الموقّع، بينما يعرض GitHub الإصدار v0.7.3 وإصدارات macOS موقّعة. تتبع هذه المراجعة GitHub.',
          'غير متحقق منه: يظهر ترخيص المستودع على GitHub بوصفه Other؛ ونص MIT مأخوذ من ملف LICENSE، وتحتفظ المهارات المرفقة من أطراف ثالثة بتراخيصها الخاصة.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Science Desktop مقابل البدائل',
        itemHeadings: true,
        content: [
          '**Open Science Desktop منصة بحث لسطح المكتب مع بيئة تشغيل وكلاء مرفقة. لم تقارنه PromptQuorum عمليًا بالأدوات التالية.** الأوصاف مأخوذة من إدخالات الدليل ومن صفحة المقارنة الخاصة بالمطوّر.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'Open Science Desktop', 'المذكور في المصادر': 'منصة سطح مكتب MIT؛ نموذجك الخاص' },
          { 'الأداة': 'Local Deep Research', 'المذكور في المصادر': 'وكيل بحث مستضاف ذاتيًا مع مراجع؛ نماذج محلية أو سحابية' },
          { 'الأداة': 'Vane', 'المذكور في المصادر': 'محرك إجابات مستضاف ذاتيًا بإجابات موثّقة' },
          { 'الأداة': 'Cherry Studio', 'المذكور في المصادر': 'تطبيق سطح مكتب بوكلاء ومزوّدين كثر ودعم MCP' },
          { 'الأداة': 'AnythingLLM', 'المذكور في المصادر': 'RAG ودردشة مع المستندات، مخزن متجهات مدمج' },
          { 'الأداة': 'OpenScience (Synthetic Sciences)', 'المذكور في المصادر': 'أداة سطر أوامر مستقلة Apache-2.0 تفتح مساحة في المتصفح' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Open Science Desktop مجاني؟',
            a: 'التطبيق مجاني بترخيص MIT. وتنبّه صفحة التنزيل إلى أن استخدام المزوّد قد يترتب عليه رسوم، فتكلفة النموذج الذي تربطه منفصلة ويحددها ذلك المزوّد.',
          },
          {
            q: 'هل يشغّل نماذج على حاسوبي؟',
            a: 'ليس من تلقاء نفسه. فهو يضم بيئة تشغيل وكلاء وليس نموذجًا، وتضيف أنت مفتاح مزوّد أو نقطة اتصال. يذكر README نقاط اتصال مخصصة متوافقة مع OpenAI، لكن PromptQuorum لم تختبر نموذجًا محليًا.',
          },
          {
            q: 'هل هو نفسه OpenScience من Synthetic Sciences؟',
            a: 'لا. بحسب صفحة المقارنة لدى المطوّر، ذلك مشروع سطر أوامر مستقل بترخيص Apache-2.0 يفتح مساحة عمل في المتصفح. وكان اسم Open Science Desktop سابقًا Open Science، ولهذا يتشابه الاسمان.',
          },
          {
            q: 'هل يمكنني استخدامه دون شاشة أو من هاتفي؟',
            a: 'بحسب README، يشغّل الأمر osd المنصة على جهاز بلا شاشة، وتقدّم بوابة اختيارية الواجهة نفسها إلى المتصفح أو الهاتف. وهي معطّلة افتراضيًا ومحلية فقط إلى أن تفعّلها.',
          },
          {
            q: 'ما مدى تكرار تحديثه؟',
            a: 'تعرض صفحة الإصدارات v0.7.0 في 26 أكتوبر، وv0.7.1 في 29 أكتوبر، وv0.7.2 في 7 نوفمبر، وv0.7.3 في 16 نوفمبر 2026؛ أي أربعة إصدارات في نحو ثلاثة أسابيع.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Open Science Desktop النظر إن كنت تريد منصة بحث مجانية وقابلة للفحص على حاسوبك الخاص وتستخدم مزوّد نماذج بالفعل.**',
          'على الورق يغطي الكثير: مجلدات مشاريع محلية، وروابط تتبّع المصدر، ودفاتر، وتشغيلًا عن بُعد، وموصّلات، وطلبات موافقة، وشيفرة بترخيص MIT. وتصدر الإصدارات بوتيرة عالية، ما يوحي بمشروع نشط.',
          'والمقايضات حقيقية. إنه برنامج تجريبي (بيتا)، والنموذج يأتي من مزوّد تختاره، ومثبّتات Windows وLinux غير موقّعة، ولم نجد سياسة خصوصية. لم تختبره PromptQuorum. جرّبه على مشروع غير حساس، وأبقِ طلبات الموافقة مفعّلة، وراجع عرض تدفق البيانات في Settings قبل أن تعتمد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Open Science Desktop](https://openedscience.com) — وصف المطوّر للتطبيق والمنصات وآخر إصدار.',
          '[صفحة التنزيل](https://openedscience.com/download/) — برامج التثبيت لكل نظام والإصدار المذكور وملاحظة استخدام المزوّد.',
          '[التوثيق](https://openedscience.com/docs/) — خطوات التثبيت وتحذيرات الإصدارات غير الموقّعة وملاحظات التشغيل الأول.',
          '[صفحة ai4s-research](https://openedscience.com/ai4s-research/) — الراعي APEVON TECHNOLOGIES PTE. LTD. (سنغافورة) والمنظمة المفتوحة المصدر.',
          '[المقارنة مع OpenScience](https://openedscience.com/open-science-desktop-vs-openscience/) — ملاحظة المطوّر بأن المشروعين مستقلان.',
          '[مستودع GitHub](https://github.com/ai4s-research/open-science) — README والقدرات وقسم الأمان والخصوصية وعدد النجوم والالتزامات.',
          '[LICENSE](https://github.com/ai4s-research/open-science/blob/master/LICENSE) — نص ترخيص MIT.',
          '[الإصدار v0.7.3](https://github.com/ai4s-research/open-science/releases/tag/v0.7.3) — آخر إصدار والملفات وملاحظات الإصدار.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Local Deep Research](/ar/power-local-llm/local-deep-research-review) — وكيل بحث معمّق مستضاف ذاتيًا يجري بحثًا متعدد الخطوات مع مراجع.',
          '[مراجعة Vane](/ar/power-local-llm/vane-review) — محرك إجابات بالذكاء الاصطناعي مستضاف ذاتيًا بإجابات موثّقة.',
          '[مراجعة Cherry Studio](/ar/local-llms/cherry-studio-ai-desktop-client) — عميل سطح مكتب بوكلاء ومزوّدين كثر وأدوات MCP.',
          '[مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review) — تطبيق سطح مكتب وويب لـ RAG والدردشة مع المستندات.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/open-science-desktop-review-hero-ko.webp',
    title: 'Open Science Desktop 리뷰: 내 파일로 작업하는 무료 AI 연구 워크벤치',
    seoTitle: 'Open Science Desktop 리뷰: AI 연구 워크벤치',
    intro:
      'Open Science Desktop(이전 이름 Open Science)은 macOS, Windows, Linux용 무료 데스크톱 앱이며 MIT 라이선스입니다. 문헌 검색, 코드, 노트북, 그림, 보고서까지 다루는 연구용 에이전트 작업 환경을 한데 묶었고, 프로젝트 파일과 실행 기록은 로컬 폴더에 남습니다. 모델 제공업체는 직접 연결하므로, 앱을 로컬 엔드포인트로 지정하지 않는 한 모델 자체는 보통 클라우드에서 실행됩니다. 이 리뷰는 개발 측 웹사이트, GitHub 저장소, README, 릴리스 페이지를 근거로 합니다. PromptQuorum은 이 앱을 설치하거나 테스트하지 않았습니다.',
    metaDescription:
      'Open Science Desktop 리뷰: macOS·Windows·Linux용 무료 MIT 라이선스 AI 연구 워크벤치. 모델은 직접 연결, 파일은 로컬, 개인정보 한계와 대안을 정리했습니다.',
    twitterDescription:
      'Open Science Desktop은 로컬 프로젝트 폴더와 직접 고른 모델 제공업체를 쓰는 무료 MIT 라이선스 AI 연구 워크벤치입니다. 설치, 개인정보 한계, 대안.',
    audience:
      '문헌, 코드, 보고서를 위한 에이전트 작업 환경을 자신의 컴퓨터에서 쓰고 싶고, 모델 제공업체 키를 준비할 수 있는 연구자, 학생, 개발자',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Science Desktop',
    targetKeywords: [
      'Open Science Desktop 리뷰',
      'Open Science Desktop',
      'AI 연구 워크벤치',
      '오픈소스 AI 연구 데스크톱 앱',
      'Open Science Desktop 개인정보',
      'Open Science Desktop 대안',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Science Desktop은 macOS, Windows, Linux용 무료 MIT 라이선스 데스크톱 앱으로, 프로젝트 폴더에서 AI 에이전트가 문헌을 검색하고 코드와 노트북을 실행하며 그림과 보고서를 만듭니다.** 모델은 포함되어 있지 않습니다. 제공업체 키나 엔드포인트를 추가하므로, 컴퓨터 밖으로 나가는 데이터는 그 선택에 달려 있습니다. 개발 측은 베타 연구 도구라고 설명합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Open Science Desktop은 무엇이며 누구를 위한 것입니까?',
        answer:
          'Open Science Desktop은 AI 에이전트가 로컬 작업 공간의 파일에서 연구 작업을 계획하고 실행하며, 각 결과물을 그 바탕이 된 코드와 입력에 연결하는 데스크톱 워크벤치입니다. 이 흐름을 자신의 컴퓨터에서 하고 싶고, 선택한 모델 제공업체가 프롬프트를 볼 수 있다는 점을 받아들이는 분께 맞습니다.',
        bullets: [
          '플랫폼: macOS 13+, Windows 10/11 x64, Linux(.deb 및 .rpm).',
          '가격: 앱은 무료이며, 모델 제공업체 사용료는 제공업체가 청구합니다.',
          '라이선스: MIT(저장소의 LICENSE 파일).',
          'OpenCode 에이전트 런타임이 포함되어 있으며, 제공업체나 엔드포인트는 직접 준비해야 합니다.',
          '활발히 개발 중인 베타 소프트웨어.',
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
            text: 'Open Science Desktop은 AI 에이전트가 로컬 프로젝트 폴더에서 문헌 검색, 코드, 노트북을 실행하고 모든 그림과 보고서를 출처까지 추적해 주는 무료 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '에이전트가 내장된, 컴퓨터 위의 연구 공간이라고 생각하시면 됩니다. 파일과 기록은 로컬 폴더에 남지만, 프롬프트는 연결한 모델 제공업체로 전송됩니다.',
          },
        ],
        items: [
          'macOS, Windows, Linux용 설치 파일이 배포되며 최신 릴리스는 v0.7.3입니다.',
          '앱은 MIT 라이선스로 무료이고, 사용료는 모델 제공업체에 지불합니다.',
          '에이전트는 명령 실행, 파일 삭제, 의존성 설치, 네트워크 사용 전에 승인을 요청합니다.',
          '개발 측은 베타 연구 도구라고 설명하며, 결과물은 사용 전에 검증해야 한다고 밝힙니다.',
          'PromptQuorum은 이 앱을 테스트하지 않았으므로, 아래 기능은 모두 개발 측의 설명입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI 에이전트가 내놓는 연구 결과에는 잘못된 수치와 지어낸 인용이 포함될 수 있습니다. 발표하거나 결정하기 전에 직접 결과를 확인하십시오. 이는 일반적인 정보이며 전문적인 조언이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Open Science Desktop은 연구 요청을 계획, 로컬 실행, 서로 연결된 결과물로 바꿔 주는 하나의 데스크톱 앱입니다.**',
          `저장소는 ai4s-research 조직 소유이며, 이 조직은 APEVON TECHNOLOGIES PTE. LTD.(싱가포르)가 후원하고 주로 유지 관리한다고 설명합니다. 프로젝트는 2026년 7월 GitHub에 만들어졌고, 별이 ${ST.ko('open-science-desktop', 'bare')}개를 넘으며, 이전 이름은 Open Science였습니다. 0.7.3 버전은 2026년 11월 16일에 릴리스되었고 저장소에는 2026년 11월 17일에 커밋이 있어, 개발이 계속되고 있으며 방치된 프로젝트 경고는 해당되지 않습니다.`,
          '앱은 Tauri 2와 React로 만들어졌고, 이미 쓰고 있는 OpenCode 설정과는 별개로 번들된 OpenCode 런타임을 백그라운드에서 시작합니다. README는 활발히 개발 중인 동작하는 데스크톱 MVP라고 밝히고, 개발 측은 베타 연구 도구라고 부릅니다.',
          '개발 측은 Claude Science 같은 연구 워크벤치를 대체하는 오픈소스 데스크톱 앱이라고 설명하며, README는 ResearchClawBench 순위에서 1위라고 주장합니다. PromptQuorum은 다른 도구와 비교하지 않았고 이 순위도 확인하지 않았습니다.',
          'Synthetic Sciences의 OpenScience는 별개의 프로젝트로, 브라우저 작업 공간을 여는 독립적인 Apache-2.0 명령줄 도구입니다. 개발 측의 비교 페이지도 두 프로젝트가 별개라고 밝힙니다. 이 리뷰는 Open Science Desktop만 다룹니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Open Science Desktop은 GitHub Releases의 일반 설치 파일로 설치하며, 개발 측의 다운로드 페이지도 같은 곳을 안내합니다.**',
          'v0.7.3 릴리스에는 Apple Silicon과 Intel Mac용 .dmg, Windows용 .exe 설치 파일과 IT 관리 배포용 .msi, x86_64와 ARM64 Linux용 .deb 및 .rpm 패키지가 있습니다. README에 따르면 macOS 패키지는 서명 및 공증되어 있고, Windows와 Linux 빌드는 아직 서명되지 않았습니다. Windows 형식은 하나를 골라 계속 사용하십시오.',
        ],
        columns: ['플랫폼', '받는 방법'],
        rows: [
          { '플랫폼': '[macOS](https://github.com/ai4s-research/open-science/releases/latest)', '받는 방법': '.dmg(Apple Silicon 또는 Intel), macOS 13+' },
          { '플랫폼': '[Windows](https://github.com/ai4s-research/open-science/releases/latest)', '받는 방법': 'x64 설치 .exe(IT용 .msi), SmartScreen 경고' },
          { '플랫폼': '[Linux](https://github.com/ai4s-research/open-science/releases/latest)', '받는 방법': '.deb 또는 .rpm, x86_64 및 ARM64' },
          { '플랫폼': 'Linux(root 없이)', '받는 방법': 'README의 설치 스크립트(터미널)' },
          { '플랫폼': '[웹사이트](https://openedscience.com)', '받는 방법': '공식 사이트, [다운로드 페이지](https://openedscience.com/download/)와 [문서](https://openedscience.com/docs/)' },
          { '플랫폼': '개인정보 처리방침', '받는 방법': '페이지를 찾지 못함, 개인정보 항목 참조' },
        ],
        note: '일반 사용자는 설치 파일을 사용하십시오. 소스에서 빌드하려면 Node.js, pnpm, Rust, Tauri 사전 요건이 필요합니다. 에이전트가 응답하려면 먼저 모델 제공업체 키나 엔드포인트가 필요합니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**핵심은 로컬 작업 공간의 파일에서 일하며 각 결과물의 출처를 기록하는 에이전트입니다.** 아래 내용은 모두 README, 웹사이트, 릴리스 노트에 나온 개발 측의 설명입니다.',
        ],
        items: [
          '탐색, 문헌 조사, 실험, 논문 작성을 이어 주는 연구 스킬과 무결성 감사 스킬.',
          '출처 추적: 그림, 표, 보고서가 이를 만든 코드, 입력, 실행에 연결되며, 실행 로그는 추가만 가능합니다.',
          '로컬 커널로 동작하는 Python 및 R용 실제 Jupyter 노트북과 PDF, CSV, DOCX, XLSX 등의 뷰어.',
          'SSH 또는 Slurm을 통한 원격 머신 실행, 또는 Modal 실행.',
          'arXiv, PubMed, Crossref, Semantic Scholar, bioRxiv용 원클릭 커넥터와 직접 추가하는 모든 MCP 서버.',
          'Claude Code, Codex 등 다른 에이전트를 번들 런타임 옆에서 실행할 수 있고, 앱은 Agent Client Protocol을 양방향으로 지원합니다.',
          '자신의 Chrome 프로필을 통한 브라우저 제어와 접근성 API를 통한 데스크톱 앱 조작.',
          '같은 화면을 브라우저나 휴대폰에 제공하는 선택형 게이트웨이와, 화면 없는 서버와 스크립트를 위한 osd 명령.',
          '인터페이스 언어: 영어, 중국어 간체, 일본어, 스페인어, 독일어, 프랑스어, 한국어.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**작업 공간 파일, 세션 기록, 출처 기록은 기본적으로 로컬 폴더에 남지만, 프롬프트와 에이전트가 읽은 모든 내용은 선택한 모델 제공업체로 전송됩니다.**',
          'README에 따르면 명령 실행, 파일 삭제, 의존성 설치, 원격 연결은 사용자가 승인하며, 제공업체 자격 증명은 앱 전용 런타임 설정에 저장됩니다. 또한 Settings에는 선택한 제공업체로 무엇이 전송될 수 있는지 쉬운 말로 보여 주는 데이터 흐름 화면이 있다고 합니다. osd 명령의 전체 승인이라는 설정은 이러한 확인을 끄며, 개발 측은 이것이 기본값이 아닌 의도적인 선택이라고 설명합니다.',
          '두 기능은 에이전트가 닿는 범위를 넓힙니다. 브라우저 제어는 로그인 상태가 있는 실제 Chrome 프로필을 사용하고, 컴퓨터 사용 기능은 화면의 앱을 읽고 조작할 수 있습니다. 원격 접속 게이트웨이는 기본적으로 꺼져 있으며, 켜기 전까지는 로컬 머신에서만 대기합니다.',
          '개발 측 웹사이트에서는 개인정보 처리방침, 이용 약관, 사업자 정보 페이지를 찾지 못했습니다. 후원사 페이지에는 개인정보 문의용 연락처가 있으며, 앱이 원격 측정이나 분석 데이터를 보내는지는 읽은 출처에 나와 있지 않습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Open Science Desktop은 자신의 컴퓨터에서 에이전트 작업 환경을 쓰고 싶고 제공업체 키를 관리할 수 있는 분께 맞습니다.**',
        ],
        items: [
          '문헌, 코드, 그림, 보고서를 추적 가능한 출처와 함께 모으고 싶은 연구자와 학생.',
          '여러 코딩 에이전트와 연구 에이전트를 한 창에서 실행하고 싶은 개발자.',
          '화면 없는 서버나 브라우저로 접근할 수 있는 워크벤치가 필요하고 접근 설정을 직접 하는 팀.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Open Science Desktop은 모두에게 맞지는 않으며, 몇 가지 세부 사항은 확인되지 않았습니다.**',
        ],
        items: [
          '맞지 않음: 모델 제공업체를 전혀 연결하지 않고 완전히 오프라인으로 쓸 수 있는 도구가 필요한 분.',
          '맞지 않음: 지금 당장 서명된 Windows 또는 Linux 설치 파일이 필요한 분. README는 Windows 코드 서명을 가까운 시일 내 작업으로 꼽습니다.',
          '확인 못 함: 앱을 통해 로컬 모델이 잘 동작하는지. README는 사용자 지정 OpenAI 호환 엔드포인트를 언급하지만 PromptQuorum은 실행해 보지 않았습니다.',
          '확인 못 함: ResearchClawBench 순위와 생성된 논문, 조사, 인용의 품질.',
          '확인 못 함: 운영 체제 외의 하드웨어 요구 사항, 계정 필요 여부, 원격 측정.',
          '확인 못 함: 개인정보 처리방침. 찾지 못했으므로 여기의 개인정보 관련 설명은 README에서 가져왔습니다.',
          '확인 못 함: 개발 측 웹사이트는 v0.7.2와 서명되지 않은 macOS용 우회 방법을 안내하지만, GitHub에는 v0.7.3과 서명된 macOS 빌드가 나와 있습니다. 이 리뷰는 GitHub를 따릅니다.',
          '확인 못 함: 저장소 라이선스가 GitHub에서는 Other로 표시됩니다. MIT 전문은 LICENSE 파일에서 가져왔고, 함께 제공되는 서드파티 스킬은 각자의 라이선스를 유지합니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Science Desktop과 대안 비교',
        itemHeadings: true,
        content: [
          '**Open Science Desktop은 에이전트 런타임이 번들된 데스크톱 연구 워크벤치입니다. PromptQuorum은 아래 도구와 직접 비교해 보지 않았습니다.** 설명은 디렉터리 항목과 개발 측의 비교 페이지에서 가져왔습니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'Open Science Desktop', '출처에 기재된 내용': 'MIT 데스크톱 워크벤치, 모델은 직접 연결' },
          { '도구': 'Local Deep Research', '출처에 기재된 내용': '인용 포함 자체 호스팅 연구 에이전트, 로컬/클라우드 LLM' },
          { '도구': 'Vane', '출처에 기재된 내용': '인용 있는 답변을 주는 자체 호스팅 답변 엔진' },
          { '도구': 'Cherry Studio', '출처에 기재된 내용': '다수 제공업체와 MCP를 지원하는 에이전트형 데스크톱 앱' },
          { '도구': 'AnythingLLM', '출처에 기재된 내용': 'RAG와 문서 채팅, 내장 벡터 저장소' },
          { '도구': 'OpenScience(Synthetic Sciences)', '출처에 기재된 내용': '브라우저 작업 공간을 여는 독립 Apache-2.0 CLI' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Open Science Desktop은 무료입니까?',
            a: '앱은 MIT 라이선스로 무료입니다. 다운로드 페이지는 제공업체 사용에 요금이 발생할 수 있다고 안내하므로, 연결하는 모델의 비용은 별도이며 해당 제공업체가 정합니다.',
          },
          {
            q: '내 컴퓨터에서 모델이 실행됩니까?',
            a: '그 자체로는 실행되지 않습니다. 포함된 것은 에이전트 런타임이며 모델이 아니고, 제공업체 키나 엔드포인트를 추가해야 합니다. README는 사용자 지정 OpenAI 호환 엔드포인트를 언급하지만, PromptQuorum은 로컬 모델을 테스트하지 않았습니다.',
          },
          {
            q: 'Synthetic Sciences의 OpenScience와 같은 것입니까?',
            a: '아닙니다. 개발 측의 비교 페이지에 따르면 그쪽은 브라우저 작업 공간을 여는 독립적인 Apache-2.0 명령줄 프로젝트입니다. Open Science Desktop의 이전 이름이 Open Science여서 이름이 비슷합니다.',
          },
          {
            q: '화면 없이 또는 휴대폰에서 사용할 수 있습니까?',
            a: 'README에 따르면 osd 명령으로 디스플레이 없는 머신에서 워크벤치를 실행할 수 있고, 선택형 게이트웨이가 같은 화면을 브라우저나 휴대폰에 제공합니다. 기본적으로 꺼져 있으며 켜기 전까지는 로컬 전용입니다.',
          },
          {
            q: '얼마나 자주 업데이트됩니까?',
            a: '릴리스 페이지에는 v0.7.0이 10월 26일, v0.7.1이 10월 29일, v0.7.2가 11월 7일, v0.7.3이 2026년 11월 16일로 나와 있어, 약 3주 사이에 네 번 릴리스되었습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**자신의 컴퓨터에서 무료이고 내용을 확인할 수 있는 연구 워크벤치를 쓰고 싶고 이미 모델 제공업체를 사용 중이라면 Open Science Desktop은 살펴볼 만합니다.**',
          '자료상으로는 폭넓게 다룹니다. 로컬 프로젝트 폴더, 출처 연결, 노트북, 원격 실행, 커넥터, 승인 확인, MIT 라이선스 코드가 그렇습니다. 릴리스가 잦아 활발한 프로젝트로 보입니다.',
          '절충점도 분명합니다. 베타 소프트웨어이고, 모델은 직접 고른 제공업체에서 오며, Windows와 Linux 설치 파일은 서명되지 않았고, 개인정보 처리방침은 찾지 못했습니다. PromptQuorum은 테스트하지 않았습니다. 민감하지 않은 프로젝트로 먼저 써 보고, 승인 확인은 켜 두며, 의존하기 전에 Settings의 데이터 흐름 화면을 확인하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Open Science Desktop 웹사이트](https://openedscience.com) — 앱, 플랫폼, 최신 릴리스에 대한 개발 측 설명.',
          '[다운로드 페이지](https://openedscience.com/download/) — OS별 설치 파일, 표기된 버전, 제공업체 사용에 관한 안내.',
          '[문서](https://openedscience.com/docs/) — 설치 단계, 서명되지 않은 빌드 경고, 첫 실행 안내.',
          '[ai4s-research 페이지](https://openedscience.com/ai4s-research/) — 후원사 APEVON TECHNOLOGIES PTE. LTD.(싱가포르)와 오픈소스 조직.',
          '[OpenScience와의 비교](https://openedscience.com/open-science-desktop-vs-openscience/) — 두 프로젝트가 독립적이라는 개발 측의 안내.',
          '[GitHub 저장소](https://github.com/ai4s-research/open-science) — README, 기능, 안전 및 개인정보 항목, 별 수와 커밋.',
          '[LICENSE](https://github.com/ai4s-research/open-science/blob/master/LICENSE) — MIT 라이선스 전문.',
          '[릴리스 v0.7.3](https://github.com/ai4s-research/open-science/releases/tag/v0.7.3) — 최신 릴리스, 파일, 릴리스 노트.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Local Deep Research 리뷰](/ko/power-local-llm/local-deep-research-review) — 인용이 포함된 다단계 조사를 수행하는 자체 호스팅 딥 리서치 에이전트.',
          '[Vane 리뷰](/ko/power-local-llm/vane-review) — 인용 있는 답변을 주는 자체 호스팅 AI 답변 엔진.',
          '[Cherry Studio 리뷰](/ko/local-llms/cherry-studio-ai-desktop-client) — 다수 제공업체와 MCP 도구를 갖춘 에이전트형 데스크톱 클라이언트.',
          '[AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review) — RAG와 문서 채팅을 위한 데스크톱·웹 앱.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}

// Oleafly Review: Free Open-Source LaTeX and Typst Editor with AI Agents
// Slug: oleafly-review
// Companion to: open-science-desktop-review, papersgpt-review, solomd-review, local-deep-research-review
// Sources (all read 2026-11-18, no hands-on testing): official website (home page, /privacy, /security = Oleafly Server security page), GitHub repository Oleafly/Oleafly
// (API metadata, README, releases v0.4.11 and v0.4.12 with asset lists and the 0.4.12 notes, commits, org profile), Oleafly/oleafly-server (API metadata).
// The request came from the site owner, not from the maker.
// Last upstream update 2026-11-17 (last commit on main; latest release v0.4.12 on 2026-11-13) => no stale warning.
// Theme: 'Local AI Agents & Tool Use' (as open-science-desktop-review). HQ flag: none (country not clear from a primary source; owner decision 2026-11-18).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/oleafly-review-hero-en.webp',
    title: 'Oleafly Review: Free Open-Source LaTeX and Typst Editor with AI Agents',
    seoTitle: 'Oleafly Review: Free LaTeX and Typst Editor with AI Agents',
    intro:
      'Oleafly 0.4.12 is a free, AGPL-3.0 desktop editor for writing research papers in LaTeX, Typst and Markdown. According to its README, it compiles on your own computer, keeps every project in a Git repository, cites from Zotero, lets coauthors edit together through a server you host, and can work with AI agents such as Claude Code and Codex or a local Ollama model. This review is based on the official website, the GitHub repository with its release notes and the Oleafly Server page, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Oleafly is a free AGPL-3.0 desktop editor for LaTeX, Typst and Markdown papers with Git, Zotero, self-hosted collaboration and optional AI agents.',
    twitterDescription:
      'Oleafly: a free open-source desktop editor for LaTeX, Typst and Markdown papers, with Git, Zotero, a self-hosted collaboration server and optional AI agents. Beta. What is confirmed.',
    audience:
      'Researchers and students who write papers or theses in LaTeX, Typst or Markdown, labs that want to host their own collaboration server, and anyone who wants AI help in a document editor without an Oleafly account',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Oleafly review',
    targetKeywords: [
      'Oleafly review',
      'LaTeX editor with AI',
      'open-source LaTeX editor desktop',
      'Typst editor',
      'self-hosted collaborative LaTeX',
      'AI research writing tool',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Oleafly is a free, open-source (AGPL-3.0) desktop editor for LaTeX, Typst and Markdown papers that compiles on your own computer and adds Git, Zotero, self-hosted live collaboration and optional AI agents.** It installs from GitHub release packages for macOS, Windows and Linux and is labelled beta. PromptQuorum has not tested it, and on 18 November 2026 no company, imprint or terms page was found.',
    quickAnswerTop: {
      en: {
        question: 'What is Oleafly and who is it for?',
        answer:
          'Oleafly is a desktop editor for research writing, developed in the open on GitHub. It suits researchers and students who want source, PDF, citations and Git history in one place, with AI as an optional extra.',
        bullets: [
          'Free and AGPL-3.0 licensed; installers for macOS, Windows and Linux; the README labels the project beta.',
          'Writes LaTeX, Typst and Markdown; Tectonic, Typst and Pandoc are built in, so a new project compiles without a separate TeX install.',
          'Live collaboration needs an Oleafly Server that you or your lab host; cloud sync can use Dropbox, Google Drive or S3-compatible storage.',
          'AI is optional: connect agents such as Claude Code or Codex, a hosted provider, any OpenAI-compatible endpoint or a local Ollama model.',
          'Repository created in July 2026; version 0.4.12 was released on 13 November 2026.',
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
            text: 'Oleafly is a free, open-source desktop editor for LaTeX, Typst and Markdown papers that compiles on your computer and adds Git, Zotero, collaboration on your own server and optional AI agents.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a writing workspace for a research paper: the text, the PDF, the references and the version history sit in one app on your computer. You can ask an AI agent for help, but you do not have to, and each change it proposes is shown as a diff.',
          },
        ],
        items: [
          'Download an installer from the GitHub releases page: DMG for macOS, MSI or EXE for Windows, AppImage, DEB or RPM for Linux.',
          'According to the README, writing, compiling, Git and checks run on your computer; features such as cloud sync, hosted AI or literature search use the network when you switch them on, and release builds also check for an update at start-up.',
          'Live collaboration works through an Oleafly Server that your lab or university hosts; PromptQuorum did not test it.',
          'According to the README and the privacy page, AI is optional and stays off until you connect an agent, a provider or a local Ollama model; costs of hosted providers are billed by those providers.',
          'The project calls itself beta, and PromptQuorum has not tested it, so compile quality, collaboration behaviour and AI output are unverified.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The privacy page says the app has no account and no telemetry, while the README adds that release builds check for an update when the app starts. PromptQuorum did not inspect network traffic, so it cannot confirm either statement beyond what the maker writes.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Oleafly is an AGPL-3.0 desktop editor for research writing in LaTeX, Typst and Markdown, released for macOS, Windows and Linux.**',
          'It is developed in the open at [github.com/Oleafly/Oleafly](https://github.com/Oleafly/Oleafly) and described by its repository as an open-source IDE and alternative to online LaTeX editors. The repository was created in July 2026; version 0.4.12 appeared on 13 November 2026 and the last commit on the main branch was on 17 November 2026, so development is active and no stale-project warning applies. The README credits Prajwal Murthy and contributors; PromptQuorum found no company, address or imprint, so it cannot say which country the project is based in.',
          'According to the README, Oleafly puts the source, the PDF, citations, figures, checks and Git history of a project in one place. It lists real-time collaboration through a self-hosted server, cloud sync, Zotero citations, a literature search across scholarly indexes, preflight checks before submission, a diagram composer and a template gallery. The AI part works through agents you sign in to, a chat assistant connected to a provider or a local Ollama model, and optional research tasks that run in a separate copy of the project.',
          'PromptQuorum has not run the app and has not checked compile quality, editor speed, collaboration behaviour or the quality of AI output.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install Oleafly from the packages on its GitHub releases page, which the README links for every platform.**',
          'The v0.4.12 release lists a DMG for macOS on Apple Silicon and Intel, an MSI and an EXE setup for Windows, and AppImage, DEB and RPM packages for Linux on x86_64 and ARM64. Releases also carry signature files for the in-app updater, which the README says checks the signature before it installs anything.',
        ],
        columns: ['Platform', 'Package'],
        rows: [
          { 'Platform': 'macOS (Apple Silicon)', 'Package': 'DMG' },
          { 'Platform': 'macOS (Intel)', 'Package': 'DMG (x64)' },
          { 'Platform': 'Windows (x86_64)', 'Package': 'MSI or EXE setup' },
          { 'Platform': 'Linux (x86_64, ARM64)', 'Package': 'AppImage, DEB or RPM' },
          { 'Platform': '[Source](https://github.com/Oleafly/Oleafly)', 'Package': 'Build from source (see the development guide)' },
        ],
        note: 'Download from the [GitHub releases page](https://github.com/Oleafly/Oleafly/releases/latest). PromptQuorum did not run the installers and did not check whether they are code-signed or notarized by the operating system. The website pages for terms, pricing, about, imprint and contact returned "404" when checked.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**Oleafly needs a recent macOS, Windows or Linux computer; the README publishes no memory or GPU minimum.**',
          'The list comes from the README. Local AI models are optional and are not part of the app; their hardware needs depend on the model you run. PromptQuorum did not measure memory use or compile speed.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'macOS', 'Stated figure': 'Apple Silicon or Intel (DMG)' },
          { 'Item': 'Windows', 'Stated figure': 'x86_64 (MSI or EXE)' },
          { 'Item': 'Linux', 'Stated figure': 'x86_64 or ARM64, glibc 2.35+' },
          { 'Item': 'Compilers', 'Stated figure': 'Tectonic, Typst, Pandoc built in' },
          { 'Item': 'Full TeX', 'Stated figure': 'Optional: TeX Live, MacTeX, MiKTeX, TinyTeX' },
          { 'Item': 'Memory and GPU', 'Stated figure': 'Not published' },
        ],
        note: 'The Linux packages need glibc 2.35 or newer, which the README gives as Ubuntu 22.04 or Debian 12 and later. The README says click-to-jump in Typst projects uses Tinymist and needs Typst 0.13 or newer.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Oleafly is first an editor and compiler for research documents; collaboration, Git and AI sit around it.** All items below are maker claims from the README and release notes.',
        ],
        items: [
          'Editing: LaTeX, Typst and Markdown with completion for labels, citations and commands, live error checking, an outline, Vim and Emacs keys and a visual mode.',
          'Compiling: Tectonic, Typst and Pandoc are built in; click in the PDF to jump to the source and back; the last good PDF stays visible while you fix an error.',
          'Citations: cite from a Zotero library as you type, and search arXiv, Semantic Scholar, Crossref, PubMed and OpenAlex without leaving the editor.',
          'Checks and figures: preflight finds broken references, missing figures, fonts that did not embed and accessibility gaps; a diagram composer writes TikZ, Typst or Mermaid code.',
          'Git and sync: every project is a Git repository you can push to GitHub, GitLab, Gitea, Forgejo, Codeberg or your own server; cloud sync supports Dropbox, Google Drive and S3-compatible storage.',
          'Collaboration: shared cursors, comments, roles and version history through an Oleafly Server you host; Oleafly Server is a separate AGPL-3.0 project.',
          'AI: a catalog of agents such as Claude Code, Codex CLI, Gemini CLI and OpenCode that edit the project as reviewable diffs, a chat assistant for hosted or local models, bundled research skills and a local MCP server for outside AI clients.',
          'Experimental: research tasks that run a literature review or revision pass in a separate project copy are off by default, and the 0.4.12 notes add a Notes knowledge base as an experiment.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**According to the maker, documents stay on your disk and the network is used only for actions you choose; PromptQuorum did not inspect network traffic and cannot confirm this.**',
          'The privacy page states that the app needs no account, has no telemetry and does not phone home, and that AI features stay off until you add your own key, with text going from your machine to the provider you chose. The README adds that release builds check for an update when the app starts, and lists what else uses the network: sharing with your server, cloud sync, literature and DOI lookups, GitHub, hosted AI providers, MCP servers you connect and optional engine, package and template downloads.',
          'If you use a hosted AI provider or a cloud agent, your text goes to that provider under its terms; a local Ollama model keeps AI traffic on your computer, according to the README. If you use a collaboration server, your project files go to the server your organisation runs.',
          'The code is AGPL-3.0 and public, so the data flow can be audited. The Oleafly Server security page is written by the maker and lists planned features separately; PromptQuorum did not verify its security claims or the independent reviews it mentions.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Oleafly fits researchers and students who write in LaTeX or Typst and want one free, open-source desktop workspace.**',
        ],
        items: [
          'Authors of papers and theses who want source, PDF, references and Git history in one app.',
          'Labs and departments that want to host their own collaboration server instead of using a hosted editor.',
          'Writers who want to try AI agents on a document but keep every change reviewable and the AI optional.',
          'Readers who prefer a project whose code and licence are public.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Oleafly is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who needs a finished, stable product today. The README labels the project beta, and the repository was created in July 2026.',
          'Not a fit: anyone without a server to host, since live collaboration needs an Oleafly Server that you or your organisation run.',
          'Unverified: compile quality, editor speed, collaboration behaviour, sync reliability and the quality of AI edits. PromptQuorum has not run the app.',
          'Unverified: the claims of no telemetry and no phoning home next to the update check at start-up; PromptQuorum did not inspect network traffic.',
          'Unverified: whether the macOS and Windows installers are signed or notarized by the operating system, and how the AI agents are set up beyond what the README describes.',
          'Unverified: the maker\'s figures for templates and bundled skills, and the security claims on the server page.',
          'Unverified: who runs the project, which country it is based in and how many people use it. No company, imprint or terms page was found, and PromptQuorum did not look for independent reviews.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Oleafly vs Alternatives',
        itemHeadings: true,
        content: [
          '**Oleafly overlaps with other desktop tools for research writing and AI-assisted research; PromptQuorum has not compared it with them hands-on.** The tools below are in the directory and are described from their own reviews.',
        ],
        columns: ['Tool', 'Noted in sources'],
        rows: [
          { 'Tool': 'Oleafly', 'Noted in sources': 'AGPL-3.0; Mac/Windows/Linux; LaTeX, Typst, Markdown editor' },
          { 'Tool': '[Open Science Desktop](/power-local-llm/open-science-desktop-review)', 'Noted in sources': 'MIT; Mac/Windows/Linux; AI research workbench' },
          { 'Tool': '[PapersGPT](/power-local-llm/papersgpt-review)', 'Noted in sources': 'AGPL-3.0; Zotero plugin; chat with your papers' },
          { 'Tool': '[SoloMD](/power-local-llm/solomd-review)', 'Noted in sources': 'MIT; desktop and mobile; Markdown notes with AI chat' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Do I need an account to use Oleafly?',
            a: 'Not an Oleafly account, according to the README. You can write, compile and use Git without signing in. Live collaboration signs you in to your lab\'s server with GitHub or an OpenID Connect provider, and cloud sync signs in to your cloud storage.',
          },
          {
            q: 'Can several authors edit the same paper at once?',
            a: 'Yes, per the maker, through an Oleafly Server that you or your organisation host, with shared cursors, comments and roles. PromptQuorum did not test collaboration, and the server is a separate project.',
          },
          {
            q: 'Which AI can Oleafly use?',
            a: 'Per the README: coding agents such as Claude Code, Codex CLI, Gemini CLI and OpenCode that you sign in to, a hosted provider, any OpenAI-compatible endpoint or a local Ollama model. AI is optional, and each change it makes is shown as a diff you can review and undo.',
          },
          {
            q: 'Does it work offline?',
            a: 'According to the README, writing, compiling, Git and checks run on your computer, and LaTeX builds work offline once the bundled engine has the packages it needs. Cloud sync, literature lookups and hosted AI need a connection.',
          },
          {
            q: 'How often does Oleafly update?',
            a: 'GitHub lists version 0.4.11 on 8 November 2026 and 0.4.12 on 13 November 2026, with commits on the main branch as recently as 17 November 2026. The README labels the project beta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Oleafly is worth a look if you write papers in LaTeX or Typst and want a free, open-source desktop editor with Git, Zotero and optional AI agents.**',
          'On paper it covers a lot, and development is active: version 0.4.12 on 13 November 2026 and a commit on 17 November 2026. The AI part is optional, and the README says each change appears as a diff you can undo.',
          'The trade-offs are real: the project is beta and only a few months old, no company, imprint or terms page was found, live collaboration needs a server you host, and PromptQuorum has not tested anything. Try it on a copy of a project before you rely on it, and check that your journal template compiles.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Oleafly website](https://oleafly.com) — features and links, checked 18 November 2026.',
          '[Privacy page](https://oleafly.com/privacy) — the maker\'s statements on data and AI, checked 18 November 2026.',
          '[Oleafly Server security page](https://oleafly.com/security) — what the server does and what is planned, checked 18 November 2026.',
          '[GitHub repository](https://github.com/Oleafly/Oleafly) — licence, creation date and last commit, checked 18 November 2026.',
          '[README](https://github.com/Oleafly/Oleafly#readme) — features, platforms and FAQ, checked 18 November 2026.',
          '[GitHub releases](https://github.com/Oleafly/Oleafly/releases) — release dates, packages and the 0.4.12 notes, checked 18 November 2026.',
          '[Oleafly Server repository](https://github.com/Oleafly/oleafly-server) — the separate collaboration server, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Open Science Desktop Review](/power-local-llm/open-science-desktop-review) — a desktop AI research workbench with agent chat and notebooks.',
          '[PapersGPT Review](/power-local-llm/papersgpt-review) — a Zotero plugin for chatting with your paper library.',
          '[SoloMD Review](/power-local-llm/solomd-review) — Markdown notes with AI chat on desktop and mobile.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/oleafly-review-hero-de.webp',
    title: 'Oleafly-Rezension: Kostenloser Open-Source-Editor für LaTeX und Typst mit KI-Agenten',
    seoTitle: 'Oleafly-Rezension: Kostenloser LaTeX- und Typst-Editor',
    intro:
      'Oleafly 0.4.12 ist ein kostenloser, AGPL-3.0-lizenzierter Desktop-Editor zum Schreiben wissenschaftlicher Arbeiten in LaTeX, Typst und Markdown. Laut README kompiliert er auf Ihrem eigenen Rechner, hält jedes Projekt in einem Git-Repository, zitiert aus Zotero, lässt Mitautoren über einen selbst betriebenen Server gemeinsam arbeiten und kann mit KI-Agenten wie Claude Code und Codex oder mit einem lokalen Ollama-Modell zusammenarbeiten. Diese Rezension stützt sich auf die offizielle Website, das GitHub-Repository mit Release-Hinweisen und die Seite zu Oleafly Server, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Oleafly ist ein kostenloser AGPL-3.0-Editor für LaTeX, Typst und Markdown mit Git, Zotero, selbst gehosteter Zusammenarbeit und optionalen KI-Agenten.',
    twitterDescription:
      'Oleafly: kostenloser Open-Source-Desktop-Editor für LaTeX, Typst und Markdown mit Git, Zotero, selbst gehostetem Kollaborationsserver und optionalen KI-Agenten. Beta. Was belegt ist.',
    audience:
      'Forschende und Studierende, die Arbeiten in LaTeX, Typst oder Markdown schreiben, Labore, die einen eigenen Kollaborationsserver betreiben möchten, und alle, die KI-Hilfe in einem Dokumenteditor ohne Oleafly-Konto wollen',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Oleafly Rezension',
    targetKeywords: [
      'Oleafly Rezension',
      'LaTeX-Editor mit KI',
      'Open-Source-LaTeX-Editor Desktop',
      'Typst-Editor',
      'selbst gehostetes kollaboratives LaTeX',
      'KI-Tool für wissenschaftliches Schreiben',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Oleafly ist ein kostenloser, quelloffener (AGPL-3.0) Desktop-Editor für LaTeX-, Typst- und Markdown-Arbeiten, der auf Ihrem eigenen Rechner kompiliert und Git, Zotero, selbst gehostete Live-Zusammenarbeit und optionale KI-Agenten ergänzt.** Er wird über Release-Pakete auf GitHub für macOS, Windows und Linux installiert und ist als Beta gekennzeichnet. PromptQuorum hat ihn nicht getestet; am 18. November 2026 wurde kein Unternehmen, kein Impressum und keine Nutzungsbedingungen-Seite gefunden.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Oleafly, und für wen ist es gedacht?',
        answer:
          'Oleafly ist ein offen auf GitHub entwickelter Desktop-Editor für wissenschaftliches Schreiben. Er eignet sich für Forschende und Studierende, die Quelltext, PDF, Literaturverweise und Git-Verlauf an einem Ort wollen, mit KI als optionaler Zugabe.',
        bullets: [
          'Kostenlos und AGPL-3.0-lizenziert; Installer für macOS, Windows und Linux; das README kennzeichnet das Projekt als Beta.',
          'Schreibt LaTeX, Typst und Markdown; Tectonic, Typst und Pandoc sind eingebaut, ein neues Projekt kompiliert also ohne separate TeX-Installation.',
          'Live-Zusammenarbeit braucht einen Oleafly Server, den Sie oder Ihr Labor betreiben; die Cloud-Synchronisierung kann Dropbox, Google Drive oder S3-kompatiblen Speicher nutzen.',
          'KI ist optional: Verbinden Sie Agenten wie Claude Code oder Codex, einen gehosteten Anbieter, einen OpenAI-kompatiblen Endpunkt oder ein lokales Ollama-Modell.',
          'Repository im Juli 2026 angelegt; Version 0.4.12 erschien am 13. November 2026.',
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
            text: 'Oleafly ist ein kostenloser, quelloffener Desktop-Editor für LaTeX-, Typst- und Markdown-Arbeiten, der auf Ihrem Rechner kompiliert und Git, Zotero, Zusammenarbeit auf dem eigenen Server und optionale KI-Agenten ergänzt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich einen Schreibarbeitsplatz für eine wissenschaftliche Arbeit vor: Text, PDF, Literaturverweise und Versionsverlauf liegen in einer App auf Ihrem Rechner. Sie können einen KI-Agenten um Hilfe bitten, müssen es aber nicht, und jede vorgeschlagene Änderung wird als Diff angezeigt.',
          },
        ],
        items: [
          'Laden Sie einen Installer von der GitHub-Releases-Seite: DMG für macOS, MSI oder EXE für Windows, AppImage, DEB oder RPM für Linux.',
          'Laut README laufen Schreiben, Kompilieren, Git und Prüfungen auf Ihrem Rechner; Funktionen wie Cloud-Synchronisierung, gehostete KI oder Literatursuche nutzen das Netzwerk, wenn Sie sie einschalten, und Release-Builds suchen beim Start zusätzlich nach einem Update.',
          'Live-Zusammenarbeit läuft über einen Oleafly Server, den Ihr Labor oder Ihre Hochschule betreibt; PromptQuorum hat ihn nicht getestet.',
          'Laut README und Datenschutzseite ist KI optional und bleibt aus, bis Sie einen Agenten, einen Anbieter oder ein lokales Ollama-Modell verbinden; Kosten gehosteter Anbieter berechnen diese Anbieter selbst.',
          'Das Projekt nennt sich selbst Beta, und PromptQuorum hat es nicht getestet; Kompilierqualität, Verhalten bei der Zusammenarbeit und KI-Ergebnisse sind daher nicht überprüft.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Datenschutzseite sagt, die App habe kein Konto und keine Telemetrie, während das README ergänzt, dass Release-Builds beim Start nach einem Update suchen. PromptQuorum hat den Netzwerkverkehr nicht untersucht und kann beide Aussagen über die Angaben des Herstellers hinaus nicht bestätigen.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Oleafly ist ein AGPL-3.0-lizenzierter Desktop-Editor für wissenschaftliches Schreiben in LaTeX, Typst und Markdown, veröffentlicht für macOS, Windows und Linux.**',
          'Er wird offen unter [github.com/Oleafly/Oleafly](https://github.com/Oleafly/Oleafly) entwickelt und vom Repository als quelloffene IDE und Alternative zu Online-LaTeX-Editoren beschrieben. Das Repository wurde im Juli 2026 angelegt; Version 0.4.12 erschien am 13. November 2026, und der letzte Commit auf dem Hauptzweig stammt vom 17. November 2026, die Entwicklung ist also aktiv und eine Warnung vor einem verwaisten Projekt entfällt. Das README nennt Prajwal Murthy und weitere Mitwirkende; PromptQuorum fand kein Unternehmen, keine Adresse und kein Impressum und kann daher nicht sagen, in welchem Land das Projekt angesiedelt ist.',
          'Laut README vereint Oleafly Quelltext, PDF, Literaturverweise, Abbildungen, Prüfungen und Git-Verlauf eines Projekts an einem Ort. Genannt werden Echtzeit-Zusammenarbeit über einen selbst gehosteten Server, Cloud-Synchronisierung, Zotero-Zitate, eine Literatursuche über wissenschaftliche Indizes, Vorab-Prüfungen vor der Einreichung, ein Diagramm-Editor und eine Vorlagengalerie. Der KI-Teil funktioniert über Agenten, bei denen Sie sich anmelden, einen Chat-Assistenten mit Anbieter oder lokalem Ollama-Modell und optionale Forschungsaufgaben, die in einer separaten Kopie des Projekts laufen.',
          'PromptQuorum hat die App nicht ausgeführt und weder Kompilierqualität, Editor-Geschwindigkeit, Verhalten bei der Zusammenarbeit noch die Qualität der KI-Ergebnisse geprüft.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie installieren Oleafly aus den Paketen auf der GitHub-Releases-Seite, die das README für jede Plattform verlinkt.**',
          'Das Release v0.4.12 listet ein DMG für macOS auf Apple Silicon und Intel, ein MSI und ein EXE-Setup für Windows sowie AppImage-, DEB- und RPM-Pakete für Linux auf x86_64 und ARM64. Releases enthalten außerdem Signaturdateien für den In-App-Updater, der laut README die Signatur prüft, bevor er etwas installiert.',
        ],
        columns: ['Plattform', 'Paket'],
        rows: [
          { 'Plattform': 'macOS (Apple Silicon)', 'Paket': 'DMG' },
          { 'Plattform': 'macOS (Intel)', 'Paket': 'DMG (x64)' },
          { 'Plattform': 'Windows (x86_64)', 'Paket': 'MSI oder EXE-Setup' },
          { 'Plattform': 'Linux (x86_64, ARM64)', 'Paket': 'AppImage, DEB oder RPM' },
          { 'Plattform': '[Quellcode](https://github.com/Oleafly/Oleafly)', 'Paket': 'Selbst bauen (siehe Entwicklungsanleitung)' },
        ],
        note: 'Laden Sie die Pakete von der [GitHub-Releases-Seite](https://github.com/Oleafly/Oleafly/releases/latest) herunter. PromptQuorum hat die Installer nicht ausgeführt und nicht geprüft, ob sie vom Betriebssystem als signiert oder notarisiert gelten. Die Website-Seiten zu Nutzungsbedingungen, Preisen, „Über uns“, Impressum und Kontakt lieferten bei der Prüfung „404“.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Oleafly braucht einen aktuellen Rechner mit macOS, Windows oder Linux; das README nennt weder Arbeitsspeicher- noch GPU-Mindestwerte.**',
          'Die Liste stammt aus dem README. Lokale KI-Modelle sind optional und nicht Teil der App; ihr Hardwarebedarf hängt vom ausgeführten Modell ab. PromptQuorum hat weder Speicherverbrauch noch Kompiliergeschwindigkeit gemessen.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'macOS', 'Angegebener Wert': 'Apple Silicon oder Intel (DMG)' },
          { 'Punkt': 'Windows', 'Angegebener Wert': 'x86_64 (MSI oder EXE)' },
          { 'Punkt': 'Linux', 'Angegebener Wert': 'x86_64 oder ARM64, glibc 2.35+' },
          { 'Punkt': 'Compiler', 'Angegebener Wert': 'Tectonic, Typst, Pandoc eingebaut' },
          { 'Punkt': 'Volles TeX', 'Angegebener Wert': 'Optional: TeX Live, MacTeX, MiKTeX, TinyTeX' },
          { 'Punkt': 'Speicher und GPU', 'Angegebener Wert': 'Nicht angegeben' },
        ],
        note: 'Die Linux-Pakete brauchen glibc 2.35 oder neuer; das README nennt dafür Ubuntu 22.04 oder Debian 12 und neuer. Laut README nutzt das Springen per Klick in Typst-Projekten Tinymist und setzt Typst 0.13 oder neuer voraus.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Oleafly ist zuerst ein Editor und Compiler für wissenschaftliche Dokumente; Zusammenarbeit, Git und KI ergänzen ihn.** Alle folgenden Punkte sind Herstellerangaben aus dem README und den Release-Hinweisen.',
        ],
        items: [
          'Bearbeiten: LaTeX, Typst und Markdown mit Vervollständigung für Labels, Zitate und Befehle, Live-Fehlerprüfung, Gliederung, Vim- und Emacs-Tasten und einem visuellen Modus.',
          'Kompilieren: Tectonic, Typst und Pandoc sind eingebaut; ein Klick im PDF springt zum Quelltext und zurück; das letzte funktionierende PDF bleibt sichtbar, während Sie einen Fehler beheben.',
          'Zitate: Zitieren Sie beim Tippen aus einer Zotero-Bibliothek und durchsuchen Sie arXiv, Semantic Scholar, Crossref, PubMed und OpenAlex, ohne den Editor zu verlassen.',
          'Prüfungen und Abbildungen: Die Vorab-Prüfung findet fehlerhafte Verweise, fehlende Abbildungen, nicht eingebettete Schriften und Barrierefreiheitslücken; ein Diagramm-Editor schreibt TikZ-, Typst- oder Mermaid-Code.',
          'Git und Synchronisierung: Jedes Projekt ist ein Git-Repository, das Sie zu GitHub, GitLab, Gitea, Forgejo, Codeberg oder Ihrem eigenen Server pushen können; die Cloud-Synchronisierung unterstützt Dropbox, Google Drive und S3-kompatiblen Speicher.',
          'Zusammenarbeit: gemeinsame Cursor, Kommentare, Rollen und Versionsverlauf über einen Oleafly Server, den Sie betreiben; Oleafly Server ist ein eigenes AGPL-3.0-Projekt.',
          'KI: ein Katalog von Agenten wie Claude Code, Codex CLI, Gemini CLI und OpenCode, die das Projekt als prüfbare Diffs bearbeiten, ein Chat-Assistent für gehostete oder lokale Modelle, mitgelieferte Forschungs-Skills und ein lokaler MCP-Server für externe KI-Clients.',
          'Experimentell: Forschungsaufgaben, die eine Literaturübersicht oder Überarbeitung in einer separaten Projektkopie ausführen, sind standardmäßig aus, und die Hinweise zu 0.4.12 ergänzen eine Wissensdatenbank „Notes“ als Experiment.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Hersteller bleiben Dokumente auf Ihrer Festplatte, und das Netzwerk wird nur für Aktionen genutzt, die Sie wählen; PromptQuorum hat den Netzwerkverkehr nicht untersucht und kann das nicht bestätigen.**',
          'Die Datenschutzseite besagt, dass die App kein Konto braucht, keine Telemetrie hat und nicht nach Hause funkt und dass KI-Funktionen aus bleiben, bis Sie einen eigenen Schlüssel hinzufügen, wobei der Text von Ihrem Rechner zum gewählten Anbieter geht. Das README ergänzt, dass Release-Builds beim Start nach einem Update suchen, und nennt weitere Netzwerknutzungen: Teilen mit Ihrem Server, Cloud-Synchronisierung, Literatur- und DOI-Abfragen, GitHub, gehostete KI-Anbieter, verbundene MCP-Server sowie optionale Downloads von Engines, Paketen und Vorlagen.',
          'Wenn Sie einen gehosteten KI-Anbieter oder einen Cloud-Agenten nutzen, geht Ihr Text zu den Bedingungen dieses Anbieters dorthin; ein lokales Ollama-Modell hält den KI-Verkehr laut README auf Ihrem Rechner. Wenn Sie einen Kollaborationsserver nutzen, gehen Ihre Projektdateien an den Server Ihrer Organisation.',
          'Der Code ist AGPL-3.0-lizenziert und öffentlich, der Datenfluss lässt sich also prüfen. Die Sicherheitsseite zu Oleafly Server stammt vom Hersteller und führt geplante Funktionen getrennt auf; PromptQuorum hat ihre Sicherheitsaussagen und die erwähnten unabhängigen Prüfungen nicht verifiziert.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Oleafly passt zu Forschenden und Studierenden, die in LaTeX oder Typst schreiben und einen kostenlosen, quelloffenen Desktop-Arbeitsplatz wollen.**',
        ],
        items: [
          'Autorinnen und Autoren von Aufsätzen und Abschlussarbeiten, die Quelltext, PDF, Literaturverweise und Git-Verlauf in einer App wollen.',
          'Labore und Institute, die lieber einen eigenen Kollaborationsserver betreiben als einen gehosteten Editor zu nutzen.',
          'Schreibende, die KI-Agenten an einem Dokument ausprobieren möchten, aber jede Änderung prüfbar und die KI optional halten wollen.',
          'Leserinnen und Leser, die ein Projekt mit öffentlichem Code und öffentlicher Lizenz bevorzugen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**Oleafly passt in manchen Fällen nicht, und mehrere Details sind nicht überprüft.**',
        ],
        items: [
          'Nicht geeignet: wer heute ein fertiges, stabiles Produkt braucht. Das README kennzeichnet das Projekt als Beta, und das Repository wurde im Juli 2026 angelegt.',
          'Nicht geeignet: wer keinen Server zum Betreiben hat, denn Live-Zusammenarbeit braucht einen Oleafly Server, den Sie oder Ihre Organisation betreiben.',
          'Nicht überprüft: Kompilierqualität, Editor-Geschwindigkeit, Verhalten bei der Zusammenarbeit, Zuverlässigkeit der Synchronisierung und Qualität der KI-Änderungen. PromptQuorum hat die App nicht ausgeführt.',
          'Nicht überprüft: die Aussagen „keine Telemetrie“ und „funkt nicht nach Hause“ neben der Update-Prüfung beim Start; PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          'Nicht überprüft: ob die Installer für macOS und Windows vom Betriebssystem signiert oder notarisiert sind und wie die KI-Agenten über die Beschreibung im README hinaus eingerichtet werden.',
          'Nicht überprüft: die Herstellerangaben zu Vorlagen und mitgelieferten Skills sowie die Sicherheitsaussagen auf der Server-Seite.',
          'Nicht überprüft: wer das Projekt betreibt, in welchem Land es angesiedelt ist und wie viele Menschen es nutzen. Ein Unternehmen, ein Impressum oder eine Nutzungsbedingungen-Seite wurde nicht gefunden, und PromptQuorum hat nicht nach unabhängigen Rezensionen gesucht.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Oleafly im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**Oleafly überschneidet sich mit anderen Desktop-Werkzeugen für wissenschaftliches Schreiben und KI-gestützte Recherche; PromptQuorum hat es nicht praktisch mit ihnen verglichen.** Die folgenden Werkzeuge stehen im Verzeichnis und werden anhand ihrer eigenen Rezensionen beschrieben.',
        ],
        columns: ['Werkzeug', 'In Quellen genannt'],
        rows: [
          { 'Werkzeug': 'Oleafly', 'In Quellen genannt': 'AGPL-3.0; Mac/Windows/Linux; Editor für LaTeX, Typst, Markdown' },
          { 'Werkzeug': '[Open Science Desktop](/de/power-local-llm/open-science-desktop-review)', 'In Quellen genannt': 'MIT; Mac/Windows/Linux; KI-Forschungsarbeitsplatz' },
          { 'Werkzeug': '[PapersGPT](/de/power-local-llm/papersgpt-review)', 'In Quellen genannt': 'AGPL-3.0; Zotero-Plugin; Chat mit Ihren Papers' },
          { 'Werkzeug': '[SoloMD](/de/power-local-llm/solomd-review)', 'In Quellen genannt': 'MIT; Desktop und Mobil; Markdown-Notizen mit KI-Chat' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Brauche ich ein Konto, um Oleafly zu nutzen?',
            a: 'Laut README kein Oleafly-Konto. Sie können schreiben, kompilieren und Git nutzen, ohne sich irgendwo anzumelden. Die Live-Zusammenarbeit meldet Sie mit GitHub oder einem OpenID-Connect-Anbieter am Server Ihres Labors an, und die Cloud-Synchronisierung meldet sich bei Ihrem Cloud-Speicher an.',
          },
          {
            q: 'Können mehrere Autoren gleichzeitig am selben Paper arbeiten?',
            a: 'Ja, laut Hersteller über einen Oleafly Server, den Sie oder Ihre Organisation betreiben, mit gemeinsamen Cursorn, Kommentaren und Rollen. PromptQuorum hat die Zusammenarbeit nicht getestet, und der Server ist ein eigenes Projekt.',
          },
          {
            q: 'Welche KI kann Oleafly nutzen?',
            a: 'Laut README: Coding-Agenten wie Claude Code, Codex CLI, Gemini CLI und OpenCode, bei denen Sie sich anmelden, einen gehosteten Anbieter, jeden OpenAI-kompatiblen Endpunkt oder ein lokales Ollama-Modell. KI ist optional, und jede ihrer Änderungen wird als Diff angezeigt, den Sie prüfen und rückgängig machen können.',
          },
          {
            q: 'Funktioniert es offline?',
            a: 'Laut README laufen Schreiben, Kompilieren, Git und Prüfungen auf Ihrem Rechner, und LaTeX-Builds funktionieren offline, sobald die eingebaute Engine die nötigen Pakete hat. Cloud-Synchronisierung, Literaturabfragen und gehostete KI brauchen eine Verbindung.',
          },
          {
            q: 'Wie oft wird Oleafly aktualisiert?',
            a: 'GitHub listet Version 0.4.11 vom 8. November 2026 und 0.4.12 vom 13. November 2026, mit Commits auf dem Hauptzweig bis zum 17. November 2026. Das README kennzeichnet das Projekt als Beta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Oleafly ist einen Blick wert, wenn Sie Arbeiten in LaTeX oder Typst schreiben und einen kostenlosen, quelloffenen Desktop-Editor mit Git, Zotero und optionalen KI-Agenten wollen.**',
          'Auf dem Papier deckt er viel ab, und die Entwicklung ist aktiv: Version 0.4.12 am 13. November 2026 und ein Commit am 17. November 2026. Der KI-Teil ist optional, und laut README erscheint jede Änderung als Diff, den Sie rückgängig machen können.',
          'Die Nachteile sind real: Das Projekt ist Beta und erst wenige Monate alt, ein Unternehmen, ein Impressum oder eine Nutzungsbedingungen-Seite wurde nicht gefunden, Live-Zusammenarbeit braucht einen Server, den Sie betreiben, und PromptQuorum hat nichts getestet. Probieren Sie es an einer Kopie eines Projekts aus, bevor Sie sich darauf verlassen, und prüfen Sie, ob die Vorlage Ihrer Zeitschrift kompiliert.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Oleafly-Website](https://oleafly.com) — Funktionen und Links, geprüft am 18. November 2026.',
          '[Datenschutzseite](https://oleafly.com/privacy) — die Aussagen des Herstellers zu Daten und KI, geprüft am 18. November 2026.',
          '[Sicherheitsseite zu Oleafly Server](https://oleafly.com/security) — was der Server tut und was geplant ist, geprüft am 18. November 2026.',
          '[GitHub-Repository](https://github.com/Oleafly/Oleafly) — Lizenz, Anlegedatum und letzter Commit, geprüft am 18. November 2026.',
          '[README](https://github.com/Oleafly/Oleafly#readme) — Funktionen, Plattformen und FAQ, geprüft am 18. November 2026.',
          '[GitHub-Releases](https://github.com/Oleafly/Oleafly/releases) — Release-Daten, Pakete und die Hinweise zu 0.4.12, geprüft am 18. November 2026.',
          '[Repository von Oleafly Server](https://github.com/Oleafly/oleafly-server) — der separate Kollaborationsserver, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Open-Science-Desktop-Rezension](/de/power-local-llm/open-science-desktop-review) — ein Desktop-Forschungsarbeitsplatz mit Agenten-Chat und Notebooks.',
          '[PapersGPT-Rezension](/de/power-local-llm/papersgpt-review) — ein Zotero-Plugin zum Chatten mit Ihrer Paper-Bibliothek.',
          '[SoloMD-Rezension](/de/power-local-llm/solomd-review) — Markdown-Notizen mit KI-Chat auf Desktop und Mobilgerät.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/oleafly-review-hero-fr.webp',
    title: 'Avis sur Oleafly : éditeur LaTeX et Typst gratuit et open source avec agents IA',
    seoTitle: 'Avis sur Oleafly : éditeur LaTeX et Typst gratuit et open source',
    intro:
      'Oleafly 0.4.12 est un éditeur de bureau gratuit, sous licence AGPL-3.0, pour rédiger des travaux scientifiques en LaTeX, Typst et Markdown. D\'après son README, il compile sur votre propre ordinateur, garde chaque projet dans un dépôt Git, cite depuis Zotero, permet aux coauteurs de travailler ensemble via un serveur que vous hébergez, et peut fonctionner avec des agents IA comme Claude Code et Codex ou avec un modèle Ollama local. Cet avis s\'appuie sur le site officiel, le dépôt GitHub avec ses notes de version et la page d\'Oleafly Server, consultés le 18 novembre 2026. PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'Oleafly est un éditeur de bureau gratuit (AGPL-3.0) pour LaTeX, Typst et Markdown : Git, Zotero, collaboration auto-hébergée et agents IA facultatifs.',
    twitterDescription:
      'Oleafly : éditeur de bureau gratuit et open source pour LaTeX, Typst et Markdown, avec Git, Zotero, serveur de collaboration auto-hébergé et agents IA facultatifs. Bêta. Ce qui est confirmé.',
    audience:
      'Chercheurs et étudiants qui rédigent en LaTeX, Typst ou Markdown, laboratoires qui souhaitent héberger leur propre serveur de collaboration, et toute personne qui veut une aide IA dans un éditeur de documents sans compte Oleafly',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis Oleafly',
    targetKeywords: [
      'avis Oleafly',
      'éditeur LaTeX avec IA',
      'éditeur LaTeX open source bureau',
      'éditeur Typst',
      'LaTeX collaboratif auto-hébergé',
      'outil IA rédaction scientifique',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Oleafly est un éditeur de bureau gratuit et open source (AGPL-3.0) pour LaTeX, Typst et Markdown, qui compile sur votre ordinateur et ajoute Git, Zotero, la collaboration en direct auto-hébergée et des agents IA facultatifs.** Il s\'installe depuis les paquets des versions GitHub pour macOS, Windows et Linux et se présente comme une bêta. PromptQuorum ne l\'a pas testé, et au 18 novembre 2026 aucune entreprise, mention légale ni page de conditions n\'a été trouvée.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce qu\'Oleafly et à qui s\'adresse-t-il ?',
        answer:
          'Oleafly est un éditeur de bureau pour la rédaction scientifique, développé ouvertement sur GitHub. Il convient aux chercheurs et aux étudiants qui veulent réunir source, PDF, références et historique Git, avec l\'IA en option.',
        bullets: [
          'Gratuit et sous licence AGPL-3.0 ; installateurs pour macOS, Windows et Linux ; le README qualifie le projet de bêta.',
          'Écrit en LaTeX, Typst et Markdown ; Tectonic, Typst et Pandoc sont intégrés, donc un nouveau projet compile sans installation TeX séparée.',
          'La collaboration en direct exige un Oleafly Server que vous ou votre laboratoire hébergez ; la synchronisation cloud peut utiliser Dropbox, Google Drive ou un stockage compatible S3.',
          'L\'IA est facultative : connectez des agents comme Claude Code ou Codex, un fournisseur hébergé, un point d\'accès compatible OpenAI ou un modèle Ollama local.',
          'Dépôt créé en juillet 2026 ; la version 0.4.12 est sortie le 13 novembre 2026.',
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
            text: 'Oleafly est un éditeur de bureau gratuit et open source pour LaTeX, Typst et Markdown, qui compile sur votre ordinateur et ajoute Git, Zotero, la collaboration sur votre propre serveur et des agents IA facultatifs.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-le comme un poste de rédaction pour un article scientifique : le texte, le PDF, les références et l\'historique des versions se trouvent dans une seule application sur votre ordinateur. Vous pouvez demander l\'aide d\'un agent IA, sans y être obligé, et chaque modification proposée s\'affiche sous forme de diff.',
          },
        ],
        items: [
          'Téléchargez un installateur depuis la page des versions GitHub : DMG pour macOS, MSI ou EXE pour Windows, AppImage, DEB ou RPM pour Linux.',
          'D\'après le README, l\'écriture, la compilation, Git et les vérifications s\'exécutent sur votre ordinateur ; des fonctions comme la synchronisation cloud, l\'IA hébergée ou la recherche bibliographique utilisent le réseau lorsque vous les activez, et les versions publiées vérifient aussi la présence d\'une mise à jour au démarrage.',
          'La collaboration en direct passe par un Oleafly Server hébergé par votre laboratoire ou votre université ; PromptQuorum ne l\'a pas testé.',
          'D\'après le README et la page de confidentialité, l\'IA est facultative et reste désactivée tant que vous ne connectez pas un agent, un fournisseur ou un modèle Ollama local ; les coûts des fournisseurs hébergés sont facturés par ces fournisseurs.',
          'Le projet se dit lui-même en bêta et PromptQuorum ne l\'a pas testé : la qualité de compilation, le comportement de la collaboration et les résultats de l\'IA ne sont donc pas vérifiés.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La page de confidentialité indique que l\'application n\'a ni compte ni télémétrie, tandis que le README précise que les versions publiées vérifient la présence d\'une mise à jour au démarrage. PromptQuorum n\'a pas inspecté le trafic réseau et ne peut confirmer aucune des deux affirmations au-delà de ce qu\'écrit l\'éditeur.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Oleafly est un éditeur de bureau sous licence AGPL-3.0 pour la rédaction scientifique en LaTeX, Typst et Markdown, publié pour macOS, Windows et Linux.**',
          'Il est développé ouvertement sur [github.com/Oleafly/Oleafly](https://github.com/Oleafly/Oleafly) et décrit par son dépôt comme un IDE open source et une alternative aux éditeurs LaTeX en ligne. Le dépôt a été créé en juillet 2026 ; la version 0.4.12 est sortie le 13 novembre 2026 et le dernier commit sur la branche principale date du 17 novembre 2026 : le développement est donc actif et aucun avertissement de projet abandonné ne s\'applique. Le README cite Prajwal Murthy et des contributeurs ; PromptQuorum n\'a trouvé ni entreprise, ni adresse, ni mentions légales, et ne peut donc pas dire dans quel pays le projet est établi.',
          'D\'après le README, Oleafly réunit en un seul endroit la source, le PDF, les références, les figures, les vérifications et l\'historique Git d\'un projet. Il cite la collaboration en temps réel via un serveur auto-hébergé, la synchronisation cloud, les citations Zotero, une recherche bibliographique dans des index scientifiques, des contrôles avant soumission, un compositeur de diagrammes et une galerie de modèles. La partie IA passe par des agents auxquels vous vous connectez, un assistant de discussion relié à un fournisseur ou à un modèle Ollama local, et des tâches de recherche facultatives exécutées dans une copie séparée du projet.',
          'PromptQuorum n\'a pas exécuté l\'application et n\'a vérifié ni la qualité de compilation, ni la rapidité de l\'éditeur, ni le comportement de la collaboration, ni la qualité des résultats de l\'IA.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Vous installez Oleafly à partir des paquets de la page des versions GitHub, que le README indique pour chaque plateforme.**',
          'La version v0.4.12 propose un DMG pour macOS sur Apple Silicon et Intel, un MSI et un installateur EXE pour Windows, ainsi que des paquets AppImage, DEB et RPM pour Linux en x86_64 et ARM64. Les versions contiennent aussi des fichiers de signature pour le programme de mise à jour intégré, qui, selon le README, vérifie la signature avant d\'installer quoi que ce soit.',
        ],
        columns: ['Plateforme', 'Paquet'],
        rows: [
          { 'Plateforme': 'macOS (Apple Silicon)', 'Paquet': 'DMG' },
          { 'Plateforme': 'macOS (Intel)', 'Paquet': 'DMG (x64)' },
          { 'Plateforme': 'Windows (x86_64)', 'Paquet': 'MSI ou installateur EXE' },
          { 'Plateforme': 'Linux (x86_64, ARM64)', 'Paquet': 'AppImage, DEB ou RPM' },
          { 'Plateforme': '[Source](https://github.com/Oleafly/Oleafly)', 'Paquet': 'Compilation depuis la source (voir le guide de développement)' },
        ],
        note: 'Téléchargez depuis la [page des versions GitHub](https://github.com/Oleafly/Oleafly/releases/latest). PromptQuorum n\'a pas exécuté les installateurs et n\'a pas vérifié s\'ils sont signés ou notarisés par le système d\'exploitation. Les pages du site consacrées aux conditions, aux tarifs, à la présentation, aux mentions légales et au contact ont renvoyé « 404 » lors de la vérification.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**Oleafly demande un ordinateur récent sous macOS, Windows ou Linux ; le README ne publie aucun minimum de mémoire ni de GPU.**',
          'La liste provient du README. Les modèles d\'IA locaux sont facultatifs et ne font pas partie de l\'application ; leurs besoins matériels dépendent du modèle utilisé. PromptQuorum n\'a mesuré ni l\'utilisation de la mémoire ni la vitesse de compilation.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'macOS', 'Valeur indiquée': 'Apple Silicon ou Intel (DMG)' },
          { 'Élément': 'Windows', 'Valeur indiquée': 'x86_64 (MSI ou EXE)' },
          { 'Élément': 'Linux', 'Valeur indiquée': 'x86_64 ou ARM64, glibc 2.35+' },
          { 'Élément': 'Compilateurs', 'Valeur indiquée': 'Tectonic, Typst, Pandoc intégrés' },
          { 'Élément': 'TeX complet', 'Valeur indiquée': 'Facultatif : TeX Live, MacTeX, MiKTeX, TinyTeX' },
          { 'Élément': 'Mémoire et GPU', 'Valeur indiquée': 'Non publiés' },
        ],
        note: 'Les paquets Linux exigent glibc 2.35 ou plus récent, que le README associe à Ubuntu 22.04 ou Debian 12 et ultérieur. D\'après le README, le saut par clic dans les projets Typst repose sur Tinymist et demande Typst 0.13 ou plus récent.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Oleafly est d\'abord un éditeur et un compilateur de documents scientifiques ; collaboration, Git et IA s\'y ajoutent.** Tous les points ci-dessous sont des affirmations de l\'éditeur tirées du README et des notes de version.',
        ],
        items: [
          'Édition : LaTeX, Typst et Markdown avec complétion des étiquettes, citations et commandes, vérification d\'erreurs en direct, plan du document, raccourcis Vim et Emacs et mode visuel.',
          'Compilation : Tectonic, Typst et Pandoc sont intégrés ; un clic dans le PDF mène à la source et inversement ; le dernier bon PDF reste affiché pendant que vous corrigez une erreur.',
          'Citations : citez depuis une bibliothèque Zotero en tapant, et cherchez dans arXiv, Semantic Scholar, Crossref, PubMed et OpenAlex sans quitter l\'éditeur.',
          'Vérifications et figures : le contrôle préalable repère les références cassées, les figures manquantes, les polices non intégrées et les lacunes d\'accessibilité ; un compositeur de diagrammes écrit du code TikZ, Typst ou Mermaid.',
          'Git et synchronisation : chaque projet est un dépôt Git que vous pouvez pousser vers GitHub, GitLab, Gitea, Forgejo, Codeberg ou votre propre serveur ; la synchronisation cloud prend en charge Dropbox, Google Drive et un stockage compatible S3.',
          'Collaboration : curseurs partagés, commentaires, rôles et historique des versions via un Oleafly Server que vous hébergez ; Oleafly Server est un projet AGPL-3.0 distinct.',
          'IA : un catalogue d\'agents comme Claude Code, Codex CLI, Gemini CLI et OpenCode qui modifient le projet sous forme de diffs vérifiables, un assistant de discussion pour modèles hébergés ou locaux, des compétences de recherche fournies et un serveur MCP local pour des clients IA externes.',
          'Expérimental : les tâches de recherche qui lancent une revue de littérature ou une relecture dans une copie séparée du projet sont désactivées par défaut, et les notes de la version 0.4.12 ajoutent à titre expérimental une base de connaissances « Notes ».',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Selon l\'éditeur, les documents restent sur votre disque et le réseau n\'est utilisé que pour les actions que vous choisissez ; PromptQuorum n\'a pas inspecté le trafic réseau et ne peut pas le confirmer.**',
          'La page de confidentialité indique que l\'application n\'exige aucun compte, n\'a pas de télémétrie et ne contacte pas son éditeur, et que les fonctions d\'IA restent désactivées tant que vous n\'ajoutez pas votre propre clé, le texte allant de votre machine au fournisseur choisi. Le README précise que les versions publiées vérifient la présence d\'une mise à jour au démarrage et énumère les autres usages du réseau : partage avec votre serveur, synchronisation cloud, recherches bibliographiques et DOI, GitHub, fournisseurs d\'IA hébergés, serveurs MCP que vous connectez et téléchargements facultatifs de moteurs, de paquets et de modèles.',
          'Si vous utilisez un fournisseur d\'IA hébergé ou un agent dans le cloud, votre texte lui est envoyé selon ses conditions ; un modèle Ollama local garde le trafic IA sur votre ordinateur, d\'après le README. Si vous utilisez un serveur de collaboration, vos fichiers de projet vont vers le serveur de votre organisation.',
          'Le code est sous licence AGPL-3.0 et public : le flux de données peut donc être audité. La page de sécurité d\'Oleafly Server est rédigée par l\'éditeur et présente les fonctions prévues à part ; PromptQuorum n\'a pas vérifié ses affirmations de sécurité ni les revues indépendantes qu\'elle mentionne.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**Oleafly convient aux chercheurs et aux étudiants qui écrivent en LaTeX ou en Typst et veulent un poste de travail de bureau gratuit et open source.**',
        ],
        items: [
          'Les auteurs d\'articles et de thèses qui veulent réunir source, PDF, références et historique Git dans une seule application.',
          'Les laboratoires et départements qui préfèrent héberger leur propre serveur de collaboration plutôt que d\'utiliser un éditeur hébergé.',
          'Les rédacteurs qui veulent essayer des agents IA sur un document tout en gardant chaque modification vérifiable et l\'IA facultative.',
          'Les lecteurs qui préfèrent un projet dont le code et la licence sont publics.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**Oleafly convient mal dans certains cas, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : à qui a besoin dès aujourd\'hui d\'un produit abouti et stable. Le README qualifie le projet de bêta et le dépôt a été créé en juillet 2026.',
          'Ne convient pas : à qui n\'a pas de serveur à héberger, car la collaboration en direct exige un Oleafly Server que vous ou votre organisation exploitez.',
          'Non vérifié : qualité de compilation, rapidité de l\'éditeur, comportement de la collaboration, fiabilité de la synchronisation et qualité des modifications de l\'IA. PromptQuorum n\'a pas exécuté l\'application.',
          'Non vérifié : les affirmations « pas de télémétrie » et « ne contacte pas son éditeur » face à la vérification de mise à jour au démarrage ; PromptQuorum n\'a pas inspecté le trafic réseau.',
          'Non vérifié : si les installateurs macOS et Windows sont signés ou notarisés par le système d\'exploitation, et comment les agents IA sont configurés au-delà de ce que décrit le README.',
          'Non vérifié : les chiffres de l\'éditeur sur les modèles de documents (templates) et les compétences fournies, ainsi que les affirmations de sécurité de la page du serveur.',
          'Non vérifié : qui dirige le projet, dans quel pays il est établi et combien de personnes l\'utilisent. Aucune entreprise, mention légale ni page de conditions n\'a été trouvée, et PromptQuorum n\'a pas cherché d\'avis indépendants.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Oleafly face aux alternatives',
        itemHeadings: true,
        content: [
          '**Oleafly recoupe d\'autres outils de bureau pour la rédaction scientifique et la recherche assistée par IA ; PromptQuorum ne l\'a pas comparé à eux en pratique.** Les outils ci-dessous figurent dans l\'annuaire et sont décrits d\'après leurs propres articles d\'évaluation, sans test pratique de la part de PromptQuorum.',
        ],
        columns: ['Outil', 'Selon les sources'],
        rows: [
          { 'Outil': 'Oleafly', 'Selon les sources': 'AGPL-3.0 ; Mac/Windows/Linux ; éditeur LaTeX, Typst, Markdown' },
          { 'Outil': '[Open Science Desktop](/fr/power-local-llm/open-science-desktop-review)', 'Selon les sources': 'MIT ; Mac/Windows/Linux ; poste de recherche IA' },
          { 'Outil': '[PapersGPT](/fr/power-local-llm/papersgpt-review)', 'Selon les sources': 'AGPL-3.0 ; extension Zotero ; discussion avec vos articles' },
          { 'Outil': '[SoloMD](/fr/power-local-llm/solomd-review)', 'Selon les sources': 'MIT ; bureau et mobile ; notes Markdown avec chat IA' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Faut-il un compte pour utiliser Oleafly ?',
            a: 'Pas de compte Oleafly, d\'après le README. Vous pouvez écrire, compiler et utiliser Git sans vous connecter nulle part. La collaboration en direct vous connecte au serveur de votre laboratoire avec GitHub ou un fournisseur OpenID Connect, et la synchronisation cloud se connecte à votre stockage cloud.',
          },
          {
            q: 'Plusieurs auteurs peuvent-ils modifier le même article en même temps ?',
            a: 'Oui, selon l\'éditeur, via un Oleafly Server que vous ou votre organisation hébergez, avec curseurs partagés, commentaires et rôles. PromptQuorum n\'a pas testé la collaboration, et le serveur est un projet distinct.',
          },
          {
            q: 'Quelle IA Oleafly peut-il utiliser ?',
            a: 'D\'après le README : des agents de programmation comme Claude Code, Codex CLI, Gemini CLI et OpenCode auxquels vous vous connectez, un fournisseur hébergé, tout point d\'accès compatible OpenAI ou un modèle Ollama local. L\'IA est facultative, et chacune de ses modifications s\'affiche sous forme de diff que vous pouvez examiner et annuler.',
          },
          {
            q: 'Fonctionne-t-il hors ligne ?',
            a: 'D\'après le README, l\'écriture, la compilation, Git et les vérifications s\'exécutent sur votre ordinateur, et les compilations LaTeX fonctionnent hors ligne une fois que le moteur intégré dispose des paquets nécessaires. La synchronisation cloud, les recherches bibliographiques et l\'IA hébergée exigent une connexion.',
          },
          {
            q: 'À quelle fréquence Oleafly est-il mis à jour ?',
            a: 'GitHub liste la version 0.4.11 du 8 novembre 2026 et la 0.4.12 du 13 novembre 2026, avec des commits sur la branche principale jusqu\'au 17 novembre 2026. Le README qualifie le projet de bêta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Oleafly mérite un coup d\'œil si vous rédigez en LaTeX ou en Typst et voulez un éditeur de bureau gratuit et open source avec Git, Zotero et des agents IA facultatifs.**',
          'Sur le papier, il couvre beaucoup, et le développement est actif : version 0.4.12 le 13 novembre 2026 et un commit le 17 novembre 2026. La partie IA est facultative, et le README indique que chaque modification apparaît sous forme de diff que vous pouvez annuler.',
          'Les compromis sont réels : le projet est en bêta et n\'a que quelques mois, aucune entreprise, mention légale ni page de conditions n\'a été trouvée, la collaboration en direct exige un serveur que vous hébergez, et PromptQuorum n\'a rien testé. Essayez-le sur une copie d\'un projet avant de vous y fier, et vérifiez que le modèle de votre revue compile.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d\'Oleafly](https://oleafly.com) — fonctionnalités et liens, consulté le 18 novembre 2026.',
          '[Page de confidentialité](https://oleafly.com/privacy) — les déclarations de l\'éditeur sur les données et l\'IA, consultée le 18 novembre 2026.',
          '[Page de sécurité d\'Oleafly Server](https://oleafly.com/security) — ce que fait le serveur et ce qui est prévu, consultée le 18 novembre 2026.',
          '[Dépôt GitHub](https://github.com/Oleafly/Oleafly) — licence, date de création et dernier commit, consulté le 18 novembre 2026.',
          '[README](https://github.com/Oleafly/Oleafly#readme) — fonctionnalités, plateformes et FAQ, consulté le 18 novembre 2026.',
          '[Versions GitHub](https://github.com/Oleafly/Oleafly/releases) — dates de version, paquets et notes de la 0.4.12, consultées le 18 novembre 2026.',
          '[Dépôt d\'Oleafly Server](https://github.com/Oleafly/oleafly-server) — le serveur de collaboration distinct, consulté le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis sur Open Science Desktop](/fr/power-local-llm/open-science-desktop-review) — un poste de recherche IA de bureau avec chat d\'agent et notebooks.',
          '[Avis sur PapersGPT](/fr/power-local-llm/papersgpt-review) — une extension Zotero pour discuter avec votre bibliothèque d\'articles.',
          '[Avis sur SoloMD](/fr/power-local-llm/solomd-review) — des notes Markdown avec chat IA sur bureau et mobile.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/oleafly-review-hero-es.webp',
    title: 'Reseña de Oleafly: editor gratuito y de código abierto para LaTeX y Typst con agentes de IA',
    seoTitle: 'Reseña de Oleafly: editor gratuito de LaTeX y Typst',
    intro:
      'Oleafly 0.4.12 es un editor de escritorio gratuito, con licencia AGPL-3.0, para escribir trabajos científicos en LaTeX, Typst y Markdown. Según su README, compila en tu propio equipo, guarda cada proyecto en un repositorio Git, cita desde Zotero, permite que los coautores editen juntos a través de un servidor que tú alojas y puede trabajar con agentes de IA como Claude Code y Codex o con un modelo local de Ollama. Esta reseña se basa en el sitio web oficial, el repositorio de GitHub con sus notas de versión y la página de Oleafly Server, consultados el 18 de noviembre de 2026. PromptQuorum no ha probado la aplicación en la práctica.',
    metaDescription:
      'Oleafly es un editor de escritorio gratuito (AGPL-3.0) para LaTeX, Typst y Markdown con Git, Zotero, colaboración autoalojada y agentes de IA opcionales.',
    twitterDescription:
      'Oleafly: editor de escritorio gratuito y de código abierto para LaTeX, Typst y Markdown, con Git, Zotero, servidor de colaboración autoalojado y agentes de IA opcionales. Beta. Qué está confirmado.',
    audience:
      'Investigadores y estudiantes que escriben artículos o tesis en LaTeX, Typst o Markdown, laboratorios que quieren alojar su propio servidor de colaboración y quien busque ayuda de IA en un editor de documentos sin cuenta de Oleafly',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Oleafly',
    targetKeywords: [
      'reseña Oleafly',
      'editor LaTeX con IA',
      'editor LaTeX de código abierto escritorio',
      'editor Typst',
      'LaTeX colaborativo autoalojado',
      'herramienta de IA para escritura científica',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Oleafly es un editor de escritorio gratuito y de código abierto (AGPL-3.0) para LaTeX, Typst y Markdown que compila en tu equipo y añade Git, Zotero, colaboración en vivo autoalojada y agentes de IA opcionales.** Se instala desde los paquetes de las versiones de GitHub para macOS, Windows y Linux y se declara beta. PromptQuorum no lo ha probado y el 18 de noviembre de 2026 no encontró ninguna empresa, aviso legal ni página de condiciones.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Oleafly y para quién es?',
        answer:
          'Oleafly es un editor de escritorio para la escritura científica, desarrollado en abierto en GitHub. Encaja con investigadores y estudiantes que quieren reunir código fuente, PDF, referencias e historial de Git, con la IA como extra opcional.',
        bullets: [
          'Gratuito y con licencia AGPL-3.0; instaladores para macOS, Windows y Linux; el README califica el proyecto de beta.',
          'Escribe LaTeX, Typst y Markdown; Tectonic, Typst y Pandoc vienen integrados, así que un proyecto nuevo compila sin instalar TeX aparte.',
          'La colaboración en vivo necesita un Oleafly Server que tú o tu laboratorio alojéis; la sincronización en la nube puede usar Dropbox, Google Drive o almacenamiento compatible con S3.',
          'La IA es opcional: conecta agentes como Claude Code o Codex, un proveedor alojado, cualquier endpoint compatible con OpenAI o un modelo local de Ollama.',
          'Repositorio creado en julio de 2026; la versión 0.4.12 salió el 13 de noviembre de 2026.',
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
            text: 'Oleafly es un editor de escritorio gratuito y de código abierto para LaTeX, Typst y Markdown que compila en tu equipo y añade Git, Zotero, colaboración en tu propio servidor y agentes de IA opcionales.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en él como un espacio de escritura para un artículo científico: el texto, el PDF, las referencias y el historial de versiones están en una sola aplicación de tu equipo. Puedes pedir ayuda a un agente de IA, pero no es obligatorio, y cada cambio que propone se muestra como un diff.',
          },
        ],
        items: [
          'Descarga un instalador de la página de versiones de GitHub: DMG para macOS, MSI o EXE para Windows, AppImage, DEB o RPM para Linux.',
          'Según el README, escribir, compilar, Git y las comprobaciones se ejecutan en tu equipo; funciones como la sincronización en la nube, la IA alojada o la búsqueda bibliográfica usan la red cuando las activas, y las versiones publicadas también buscan una actualización al arrancar.',
          'La colaboración en vivo funciona mediante un Oleafly Server que aloja tu laboratorio o tu universidad; PromptQuorum no lo probó.',
          'Según el README y la página de privacidad, la IA es opcional y permanece desactivada hasta que conectes un agente, un proveedor o un modelo local de Ollama; los costes de los proveedores alojados los factura cada proveedor.',
          'El proyecto se declara beta y PromptQuorum no lo ha probado, así que la calidad de compilación, el comportamiento de la colaboración y los resultados de la IA no están verificados.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La página de privacidad dice que la aplicación no tiene cuenta ni telemetría, mientras que el README añade que las versiones publicadas buscan una actualización al arrancar. PromptQuorum no inspeccionó el tráfico de red, así que no puede confirmar ninguna de las dos afirmaciones más allá de lo que escribe el fabricante.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Oleafly es un editor de escritorio con licencia AGPL-3.0 para la escritura científica en LaTeX, Typst y Markdown, publicado para macOS, Windows y Linux.**',
          'Se desarrolla en abierto en [github.com/Oleafly/Oleafly](https://github.com/Oleafly/Oleafly) y su repositorio lo describe como un IDE de código abierto y una alternativa a los editores de LaTeX en línea. El repositorio se creó en julio de 2026; la versión 0.4.12 apareció el 13 de noviembre de 2026 y el último commit en la rama principal fue el 17 de noviembre de 2026, así que el desarrollo está activo y no corresponde ninguna advertencia de proyecto abandonado. El README menciona a Prajwal Murthy y a colaboradores; PromptQuorum no encontró empresa, dirección ni aviso legal, por lo que no puede decir en qué país tiene su sede el proyecto.',
          'Según el README, Oleafly reúne en un solo lugar el código fuente, el PDF, las citas, las figuras, las comprobaciones y el historial de Git de un proyecto. Enumera colaboración en tiempo real mediante un servidor autoalojado, sincronización en la nube, citas de Zotero, una búsqueda bibliográfica en índices académicos, comprobaciones previas al envío, un compositor de diagramas y una galería de plantillas. La parte de IA funciona con agentes en los que inicias sesión, un asistente de chat conectado a un proveedor o a un modelo local de Ollama, y tareas de investigación opcionales que se ejecutan en una copia aparte del proyecto.',
          'PromptQuorum no ha ejecutado la aplicación y no ha comprobado la calidad de compilación, la velocidad del editor, el comportamiento de la colaboración ni la calidad de los resultados de la IA.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**Instalas Oleafly desde los paquetes de su página de versiones de GitHub, que el README enlaza para cada plataforma.**',
          'La versión v0.4.12 incluye un DMG para macOS en Apple Silicon e Intel, un MSI y un instalador EXE para Windows, y paquetes AppImage, DEB y RPM para Linux en x86_64 y ARM64. Las versiones también llevan archivos de firma para el actualizador integrado, que según el README comprueba la firma antes de instalar nada.',
        ],
        columns: ['Plataforma', 'Paquete'],
        rows: [
          { 'Plataforma': 'macOS (Apple Silicon)', 'Paquete': 'DMG' },
          { 'Plataforma': 'macOS (Intel)', 'Paquete': 'DMG (x64)' },
          { 'Plataforma': 'Windows (x86_64)', 'Paquete': 'MSI o instalador EXE' },
          { 'Plataforma': 'Linux (x86_64, ARM64)', 'Paquete': 'AppImage, DEB o RPM' },
          { 'Plataforma': '[Código fuente](https://github.com/Oleafly/Oleafly)', 'Paquete': 'Compilar desde el código (ver la guía de desarrollo)' },
        ],
        note: 'Descarga desde la [página de versiones de GitHub](https://github.com/Oleafly/Oleafly/releases/latest). PromptQuorum no ejecutó los instaladores y no comprobó si el sistema operativo los considera firmados o notarizados. Las páginas del sitio sobre condiciones, precios, acerca de, aviso legal y contacto devolvieron «404» al comprobarlas.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Oleafly necesita un equipo reciente con macOS, Windows o Linux; el README no publica un mínimo de memoria ni de GPU.**',
          'La lista procede del README. Los modelos de IA locales son opcionales y no forman parte de la aplicación; sus necesidades de hardware dependen del modelo que ejecutes. PromptQuorum no midió el uso de memoria ni la velocidad de compilación.',
        ],
        columns: ['Elemento', 'Dato indicado'],
        rows: [
          { 'Elemento': 'macOS', 'Dato indicado': 'Apple Silicon o Intel (DMG)' },
          { 'Elemento': 'Windows', 'Dato indicado': 'x86_64 (MSI o EXE)' },
          { 'Elemento': 'Linux', 'Dato indicado': 'x86_64 o ARM64, glibc 2.35+' },
          { 'Elemento': 'Compiladores', 'Dato indicado': 'Tectonic, Typst, Pandoc integrados' },
          { 'Elemento': 'TeX completo', 'Dato indicado': 'Opcional: TeX Live, MacTeX, MiKTeX, TinyTeX' },
          { 'Elemento': 'Memoria y GPU', 'Dato indicado': 'No publicados' },
        ],
        note: 'Los paquetes de Linux necesitan glibc 2.35 o superior, que el README asocia con Ubuntu 22.04 o Debian 12 y posteriores. Según el README, el salto con un clic en proyectos Typst usa Tinymist y requiere Typst 0.13 o superior.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Oleafly es ante todo un editor y compilador de documentos científicos; la colaboración, Git y la IA lo rodean.** Todos los puntos siguientes son afirmaciones del fabricante tomadas del README y de las notas de versión.',
        ],
        items: [
          'Edición: LaTeX, Typst y Markdown con autocompletado de etiquetas, citas y comandos, comprobación de errores en vivo, esquema del documento, teclas de Vim y Emacs y un modo visual.',
          'Compilación: Tectonic, Typst y Pandoc vienen integrados; un clic en el PDF salta al código fuente y viceversa; el último PDF correcto sigue visible mientras corriges un error.',
          'Citas: cita desde una biblioteca de Zotero mientras escribes y busca en arXiv, Semantic Scholar, Crossref, PubMed y OpenAlex sin salir del editor.',
          'Comprobaciones y figuras: la comprobación previa detecta referencias rotas, figuras que faltan, fuentes no incrustadas y carencias de accesibilidad; un compositor de diagramas escribe código TikZ, Typst o Mermaid.',
          'Git y sincronización: cada proyecto es un repositorio Git que puedes subir a GitHub, GitLab, Gitea, Forgejo, Codeberg o a tu propio servidor; la sincronización en la nube admite Dropbox, Google Drive y almacenamiento compatible con S3.',
          'Colaboración: cursores compartidos, comentarios, roles e historial de versiones mediante un Oleafly Server que alojas tú; Oleafly Server es un proyecto AGPL-3.0 aparte.',
          'IA: un catálogo de agentes como Claude Code, Codex CLI, Gemini CLI y OpenCode que editan el proyecto como diffs revisables, un asistente de chat para modelos alojados o locales, habilidades de investigación incluidas y un servidor MCP local para clientes de IA externos.',
          'Experimental: las tareas de investigación que ejecutan una revisión bibliográfica o una pasada de revisión en una copia aparte del proyecto vienen desactivadas, y las notas de la 0.4.12 añaden como experimento una base de conocimiento «Notes».',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Según el fabricante, los documentos se quedan en tu disco y la red solo se usa para las acciones que eliges; PromptQuorum no inspeccionó el tráfico de red y no puede confirmarlo.**',
          'La página de privacidad afirma que la aplicación no necesita cuenta, no tiene telemetría y no se comunica con su fabricante, y que las funciones de IA siguen desactivadas hasta que añades tu propia clave, con el texto yendo de tu equipo al proveedor que elegiste. El README añade que las versiones publicadas buscan una actualización al arrancar y enumera qué más usa la red: compartir con tu servidor, sincronización en la nube, consultas bibliográficas y de DOI, GitHub, proveedores de IA alojados, servidores MCP que conectes y descargas opcionales de motores, paquetes y plantillas.',
          'Si usas un proveedor de IA alojado o un agente en la nube, tu texto va a ese proveedor según sus condiciones; un modelo local de Ollama mantiene el tráfico de IA en tu equipo, según el README. Si usas un servidor de colaboración, los archivos de tu proyecto van al servidor de tu organización.',
          'El código es AGPL-3.0 y público, así que el flujo de datos se puede auditar. La página de seguridad de Oleafly Server la escribe el fabricante y separa las funciones previstas; PromptQuorum no verificó sus afirmaciones de seguridad ni las revisiones independientes que menciona.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Oleafly encaja con investigadores y estudiantes que escriben en LaTeX o Typst y quieren un espacio de trabajo de escritorio gratuito y de código abierto.**',
        ],
        items: [
          'Autores de artículos y tesis que quieren código fuente, PDF, referencias e historial de Git en una sola aplicación.',
          'Laboratorios y departamentos que prefieren alojar su propio servidor de colaboración en lugar de usar un editor alojado.',
          'Quienes escriben y quieren probar agentes de IA en un documento, pero con cada cambio revisable y la IA opcional.',
          'Lectores que prefieren un proyecto con código y licencia públicos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Oleafly no encaja bien en algunos casos, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: quien necesite hoy un producto terminado y estable. El README califica el proyecto de beta y el repositorio se creó en julio de 2026.',
          'No encaja: quien no tenga un servidor que alojar, porque la colaboración en vivo necesita un Oleafly Server que tú o tu organización administráis.',
          'Sin verificar: calidad de compilación, velocidad del editor, comportamiento de la colaboración, fiabilidad de la sincronización y calidad de las ediciones de la IA. PromptQuorum no ejecutó la aplicación.',
          'Sin verificar: las afirmaciones de «sin telemetría» y «no se comunica con su fabricante» junto a la búsqueda de actualizaciones al arrancar; PromptQuorum no inspeccionó el tráfico de red.',
          'Sin verificar: si los instaladores de macOS y Windows están firmados o notarizados por el sistema operativo, y cómo se configuran los agentes de IA más allá de lo que describe el README.',
          'Sin verificar: las cifras del fabricante sobre plantillas y habilidades incluidas, y las afirmaciones de seguridad de la página del servidor.',
          'Sin verificar: quién dirige el proyecto, en qué país tiene su sede y cuánta gente lo usa. No se encontró empresa, aviso legal ni página de condiciones, y PromptQuorum no buscó reseñas independientes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Oleafly frente a las alternativas',
        itemHeadings: true,
        content: [
          '**Oleafly se solapa con otras herramientas de escritorio para la escritura científica y la investigación asistida por IA; PromptQuorum no lo ha comparado con ellas en la práctica.** Las herramientas siguientes están en el directorio y se describen a partir de sus propias reseñas.',
        ],
        columns: ['Herramienta', 'Según las fuentes'],
        rows: [
          { 'Herramienta': 'Oleafly', 'Según las fuentes': 'AGPL-3.0; Mac/Windows/Linux; editor de LaTeX, Typst, Markdown' },
          { 'Herramienta': '[Open Science Desktop](/es/power-local-llm/open-science-desktop-review)', 'Según las fuentes': 'MIT; Mac/Windows/Linux; espacio de investigación con IA' },
          { 'Herramienta': '[PapersGPT](/es/power-local-llm/papersgpt-review)', 'Según las fuentes': 'AGPL-3.0; complemento de Zotero; chat con tus artículos' },
          { 'Herramienta': '[SoloMD](/es/power-local-llm/solomd-review)', 'Según las fuentes': 'MIT; escritorio y móvil; notas Markdown con chat de IA' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesito una cuenta para usar Oleafly?',
            a: 'No una cuenta de Oleafly, según el README. Puedes escribir, compilar y usar Git sin iniciar sesión en nada. La colaboración en vivo te conecta al servidor de tu laboratorio con GitHub o un proveedor OpenID Connect, y la sincronización en la nube inicia sesión en tu almacenamiento en la nube.',
          },
          {
            q: '¿Pueden varios autores editar el mismo artículo a la vez?',
            a: 'Sí, según el fabricante, mediante un Oleafly Server que alojáis tú o tu organización, con cursores compartidos, comentarios y roles. PromptQuorum no probó la colaboración, y el servidor es un proyecto aparte.',
          },
          {
            q: '¿Qué IA puede usar Oleafly?',
            a: 'Según el README: agentes de programación como Claude Code, Codex CLI, Gemini CLI y OpenCode en los que inicias sesión, un proveedor alojado, cualquier endpoint compatible con OpenAI o un modelo local de Ollama. La IA es opcional, y cada cambio suyo se muestra como un diff que puedes revisar y deshacer.',
          },
          {
            q: '¿Funciona sin conexión?',
            a: 'Según el README, escribir, compilar, Git y las comprobaciones se ejecutan en tu equipo, y las compilaciones de LaTeX funcionan sin conexión una vez que el motor integrado tiene los paquetes que necesita. La sincronización en la nube, las consultas bibliográficas y la IA alojada necesitan conexión.',
          },
          {
            q: '¿Con qué frecuencia se actualiza Oleafly?',
            a: 'GitHub lista la versión 0.4.11 del 8 de noviembre de 2026 y la 0.4.12 del 13 de noviembre de 2026, con commits en la rama principal hasta el 17 de noviembre de 2026. El README califica el proyecto de beta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Oleafly merece una mirada si escribes artículos en LaTeX o Typst y quieres un editor de escritorio gratuito y de código abierto con Git, Zotero y agentes de IA opcionales.**',
          'Sobre el papel cubre mucho, y el desarrollo está activo: versión 0.4.12 el 13 de noviembre de 2026 y un commit el 17 de noviembre de 2026. La parte de IA es opcional, y el README dice que cada cambio aparece como un diff que puedes deshacer.',
          'Las contrapartidas son reales: el proyecto está en beta y tiene pocos meses, no se encontró empresa, aviso legal ni página de condiciones, la colaboración en vivo necesita un servidor que alojas tú y PromptQuorum no ha probado nada. Pruébalo con una copia de un proyecto antes de depender de él y comprueba que la plantilla de tu revista compila.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Oleafly](https://oleafly.com) — funciones y enlaces, consultado el 18 de noviembre de 2026.',
          '[Página de privacidad](https://oleafly.com/privacy) — las declaraciones del fabricante sobre datos e IA, consultada el 18 de noviembre de 2026.',
          '[Página de seguridad de Oleafly Server](https://oleafly.com/security) — qué hace el servidor y qué está previsto, consultada el 18 de noviembre de 2026.',
          '[Repositorio de GitHub](https://github.com/Oleafly/Oleafly) — licencia, fecha de creación y último commit, consultado el 18 de noviembre de 2026.',
          '[README](https://github.com/Oleafly/Oleafly#readme) — funciones, plataformas y preguntas frecuentes, consultado el 18 de noviembre de 2026.',
          '[Versiones de GitHub](https://github.com/Oleafly/Oleafly/releases) — fechas de versión, paquetes y notas de la 0.4.12, consultadas el 18 de noviembre de 2026.',
          '[Repositorio de Oleafly Server](https://github.com/Oleafly/oleafly-server) — el servidor de colaboración aparte, consultado el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Open Science Desktop](/es/power-local-llm/open-science-desktop-review) — un espacio de investigación con IA de escritorio con chat de agentes y cuadernos.',
          '[Reseña de PapersGPT](/es/power-local-llm/papersgpt-review) — un complemento de Zotero para chatear con tu biblioteca de artículos.',
          '[Reseña de SoloMD](/es/power-local-llm/solomd-review) — notas Markdown con chat de IA en escritorio y móvil.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/oleafly-review-hero-pt.webp',
    title: 'Análise do Oleafly: editor gratuito e de código aberto para LaTeX e Typst com agentes de IA',
    seoTitle: 'Análise do Oleafly: editor gratuito de LaTeX e Typst',
    intro:
      'O Oleafly 0.4.12 é um editor de desktop gratuito, com licença AGPL-3.0, para escrever trabalhos científicos em LaTeX, Typst e Markdown. Segundo o README, ele compila no seu próprio computador, mantém cada projeto em um repositório Git, cita a partir do Zotero, permite que coautores editem juntos por meio de um servidor que você hospeda e pode trabalhar com agentes de IA como Claude Code e Codex ou com um modelo local do Ollama. Esta análise se baseia no site oficial, no repositório do GitHub com as notas de versão e na página do Oleafly Server, consultados em 18 de novembro de 2026. A PromptQuorum não testou o aplicativo na prática.',
    metaDescription:
      'O Oleafly é um editor de desktop gratuito (AGPL-3.0) para LaTeX, Typst e Markdown com Git, Zotero, colaboração auto-hospedada e agentes de IA opcionais.',
    twitterDescription:
      'Oleafly: editor de desktop gratuito e de código aberto para LaTeX, Typst e Markdown, com Git, Zotero, servidor de colaboração auto-hospedado e agentes de IA opcionais. Beta. O que está confirmado.',
    audience:
      'Pesquisadores e estudantes que escrevem artigos ou teses em LaTeX, Typst ou Markdown, laboratórios que querem hospedar o próprio servidor de colaboração e quem busca ajuda de IA em um editor de documentos sem conta do Oleafly',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise Oleafly',
    targetKeywords: [
      'análise Oleafly',
      'editor LaTeX com IA',
      'editor LaTeX de código aberto desktop',
      'editor Typst',
      'LaTeX colaborativo auto-hospedado',
      'ferramenta de IA para escrita científica',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Oleafly é um editor de desktop gratuito e de código aberto (AGPL-3.0) para LaTeX, Typst e Markdown que compila no seu computador e acrescenta Git, Zotero, colaboração ao vivo auto-hospedada e agentes de IA opcionais.** Ele é instalado a partir dos pacotes das versões do GitHub para macOS, Windows e Linux e se declara beta. A PromptQuorum não o testou e, em 18 de novembro de 2026, não encontrou empresa, aviso legal nem página de termos.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Oleafly e para quem ele serve?',
        answer:
          'O Oleafly é um editor de desktop para escrita científica, desenvolvido abertamente no GitHub. Serve para pesquisadores e estudantes que querem reunir código-fonte, PDF, referências e histórico do Git em um só lugar, com a IA como extra opcional.',
        bullets: [
          'Gratuito e com licença AGPL-3.0; instaladores para macOS, Windows e Linux; o README classifica o projeto como beta.',
          'Escreve LaTeX, Typst e Markdown; Tectonic, Typst e Pandoc vêm integrados, então um projeto novo compila sem instalar o TeX separadamente.',
          'A colaboração ao vivo exige um Oleafly Server que você ou seu laboratório hospedam; a sincronização na nuvem pode usar Dropbox, Google Drive ou armazenamento compatível com S3.',
          'A IA é opcional: conecte agentes como Claude Code ou Codex, um provedor hospedado, qualquer endpoint compatível com a OpenAI ou um modelo local do Ollama.',
          'Repositório criado em julho de 2026; a versão 0.4.12 foi lançada em 13 de novembro de 2026.',
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
            text: 'O Oleafly é um editor de desktop gratuito e de código aberto para LaTeX, Typst e Markdown que compila no seu computador e acrescenta Git, Zotero, colaboração no seu próprio servidor e agentes de IA opcionais.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um espaço de escrita para um artigo científico: o texto, o PDF, as referências e o histórico de versões ficam em um só aplicativo no seu computador. Você pode pedir ajuda a um agente de IA, mas não precisa, e cada alteração que ele propõe aparece como um diff.',
          },
        ],
        items: [
          'Baixe um instalador na página de versões do GitHub: DMG para macOS, MSI ou EXE para Windows, AppImage, DEB ou RPM para Linux.',
          'Segundo o README, escrever, compilar, Git e verificações rodam no seu computador; recursos como a sincronização na nuvem, a IA hospedada ou a busca bibliográfica usam a rede quando você os ativa, e as versões publicadas também verificam se há atualização ao iniciar.',
          'A colaboração ao vivo funciona por um Oleafly Server hospedado pelo seu laboratório ou universidade; a PromptQuorum não o testou.',
          'Segundo o README e a página de privacidade, a IA é opcional e fica desligada até você conectar um agente, um provedor ou um modelo local do Ollama; os custos de provedores hospedados são cobrados por esses provedores.',
          'O projeto se declara beta e a PromptQuorum não o testou, então a qualidade da compilação, o comportamento da colaboração e os resultados da IA não estão verificados.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A página de privacidade diz que o aplicativo não tem conta nem telemetria, enquanto o README acrescenta que as versões publicadas verificam se há atualização ao iniciar. A PromptQuorum não inspecionou o tráfego de rede e não pode confirmar nenhuma das duas afirmações além do que o fabricante escreve.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Oleafly é um editor de desktop com licença AGPL-3.0 para escrita científica em LaTeX, Typst e Markdown, publicado para macOS, Windows e Linux.**',
          'Ele é desenvolvido abertamente em [github.com/Oleafly/Oleafly](https://github.com/Oleafly/Oleafly) e descrito pelo repositório como uma IDE de código aberto e alternativa a editores de LaTeX online. O repositório foi criado em julho de 2026; a versão 0.4.12 saiu em 13 de novembro de 2026 e o último commit no ramo principal foi em 17 de novembro de 2026, então o desenvolvimento está ativo e não se aplica aviso de projeto abandonado. O README cita Prajwal Murthy e colaboradores; a PromptQuorum não encontrou empresa, endereço nem aviso legal e, por isso, não sabe dizer em que país o projeto está sediado.',
          'Segundo o README, o Oleafly reúne em um só lugar o código-fonte, o PDF, as citações, as figuras, as verificações e o histórico do Git de um projeto. Ele lista colaboração em tempo real por um servidor auto-hospedado, sincronização na nuvem, citações do Zotero, uma busca bibliográfica em índices acadêmicos, verificações antes do envio, um compositor de diagramas e uma galeria de modelos. A parte de IA funciona com agentes nos quais você faz login, um assistente de chat ligado a um provedor ou a um modelo local do Ollama e tarefas de pesquisa opcionais executadas em uma cópia separada do projeto.',
          'A PromptQuorum não executou o aplicativo e não verificou a qualidade da compilação, a velocidade do editor, o comportamento da colaboração nem a qualidade dos resultados da IA.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o Oleafly a partir dos pacotes da página de versões do GitHub, que o README indica para cada plataforma.**',
          'A versão v0.4.12 lista um DMG para macOS em Apple Silicon e Intel, um MSI e um instalador EXE para Windows e pacotes AppImage, DEB e RPM para Linux em x86_64 e ARM64. As versões também trazem arquivos de assinatura para o atualizador integrado, que, segundo o README, verifica a assinatura antes de instalar qualquer coisa.',
        ],
        columns: ['Plataforma', 'Pacote'],
        rows: [
          { 'Plataforma': 'macOS (Apple Silicon)', 'Pacote': 'DMG' },
          { 'Plataforma': 'macOS (Intel)', 'Pacote': 'DMG (x64)' },
          { 'Plataforma': 'Windows (x86_64)', 'Pacote': 'MSI ou instalador EXE' },
          { 'Plataforma': 'Linux (x86_64, ARM64)', 'Pacote': 'AppImage, DEB ou RPM' },
          { 'Plataforma': '[Código-fonte](https://github.com/Oleafly/Oleafly)', 'Pacote': 'Compilar do código (veja o guia de desenvolvimento)' },
        ],
        note: 'Baixe na [página de versões do GitHub](https://github.com/Oleafly/Oleafly/releases/latest). A PromptQuorum não executou os instaladores e não verificou se o sistema operacional os considera assinados ou notarizados. As páginas do site sobre termos, preços, sobre, aviso legal e contato retornaram «404» na verificação.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O Oleafly precisa de um computador recente com macOS, Windows ou Linux; o README não publica mínimo de memória nem de GPU.**',
          'A lista vem do README. Os modelos de IA locais são opcionais e não fazem parte do aplicativo; as necessidades de hardware deles dependem do modelo que você executa. A PromptQuorum não mediu o uso de memória nem a velocidade de compilação.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'macOS', 'Valor informado': 'Apple Silicon ou Intel (DMG)' },
          { 'Item': 'Windows', 'Valor informado': 'x86_64 (MSI ou EXE)' },
          { 'Item': 'Linux', 'Valor informado': 'x86_64 ou ARM64, glibc 2.35+' },
          { 'Item': 'Compiladores', 'Valor informado': 'Tectonic, Typst, Pandoc integrados' },
          { 'Item': 'TeX completo', 'Valor informado': 'Opcional: TeX Live, MacTeX, MiKTeX, TinyTeX' },
          { 'Item': 'Memória e GPU', 'Valor informado': 'Não publicados' },
        ],
        note: 'Os pacotes para Linux precisam de glibc 2.35 ou mais nova, que o README associa ao Ubuntu 22.04 ou Debian 12 e posteriores. Segundo o README, o salto por clique em projetos Typst usa o Tinymist e exige Typst 0.13 ou mais novo.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O Oleafly é, antes de tudo, um editor e compilador de documentos científicos; colaboração, Git e IA ficam ao redor.** Todos os itens abaixo são afirmações do fabricante tiradas do README e das notas de versão.',
        ],
        items: [
          'Edição: LaTeX, Typst e Markdown com autocompletar de rótulos, citações e comandos, verificação de erros ao vivo, estrutura do documento, atalhos de Vim e Emacs e um modo visual.',
          'Compilação: Tectonic, Typst e Pandoc vêm integrados; um clique no PDF leva ao código-fonte e vice-versa; o último PDF correto continua visível enquanto você corrige um erro.',
          'Citações: cite a partir de uma biblioteca do Zotero enquanto digita e pesquise no arXiv, Semantic Scholar, Crossref, PubMed e OpenAlex sem sair do editor.',
          'Verificações e figuras: a verificação prévia encontra referências quebradas, figuras ausentes, fontes não incorporadas e falhas de acessibilidade; um compositor de diagramas escreve código TikZ, Typst ou Mermaid.',
          'Git e sincronização: cada projeto é um repositório Git que você pode enviar para GitHub, GitLab, Gitea, Forgejo, Codeberg ou para o seu próprio servidor; a sincronização na nuvem aceita Dropbox, Google Drive e armazenamento compatível com S3.',
          'Colaboração: cursores compartilhados, comentários, papéis e histórico de versões por um Oleafly Server que você hospeda; o Oleafly Server é um projeto AGPL-3.0 à parte.',
          'IA: um catálogo de agentes como Claude Code, Codex CLI, Gemini CLI e OpenCode que editam o projeto como diffs revisáveis, um assistente de chat para modelos hospedados ou locais, habilidades de pesquisa incluídas e um servidor MCP local para clientes de IA externos.',
          'Experimental: as tarefas de pesquisa que rodam uma revisão de literatura ou uma passada de revisão em uma cópia separada do projeto vêm desativadas, e as notas da 0.4.12 acrescentam como experimento uma base de conhecimento «Notes».',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Segundo o fabricante, os documentos ficam no seu disco e a rede só é usada para ações que você escolhe; a PromptQuorum não inspecionou o tráfego de rede e não pode confirmar isso.**',
          'A página de privacidade afirma que o aplicativo não precisa de conta, não tem telemetria e não se comunica com o fabricante, e que os recursos de IA ficam desligados até você adicionar a sua própria chave, com o texto indo do seu computador para o provedor escolhido. O README acrescenta que as versões publicadas verificam se há atualização ao iniciar e lista o que mais usa a rede: compartilhar com o seu servidor, sincronização na nuvem, consultas bibliográficas e de DOI, GitHub, provedores de IA hospedados, servidores MCP que você conecta e downloads opcionais de motores, pacotes e modelos.',
          'Se você usa um provedor de IA hospedado ou um agente na nuvem, o seu texto vai para esse provedor, sob os termos dele; um modelo local do Ollama mantém o tráfego de IA no seu computador, segundo o README. Se você usa um servidor de colaboração, os arquivos do projeto vão para o servidor da sua organização.',
          'O código é AGPL-3.0 e público, então o fluxo de dados pode ser auditado. A página de segurança do Oleafly Server é escrita pelo fabricante e separa os recursos planejados; a PromptQuorum não verificou as afirmações de segurança dela nem as revisões independentes que ela menciona.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Oleafly serve para pesquisadores e estudantes que escrevem em LaTeX ou Typst e querem um espaço de trabalho de desktop gratuito e de código aberto.**',
        ],
        items: [
          'Autores de artigos e teses que querem código-fonte, PDF, referências e histórico do Git em um só aplicativo.',
          'Laboratórios e departamentos que preferem hospedar o próprio servidor de colaboração em vez de usar um editor hospedado.',
          'Quem escreve e quer experimentar agentes de IA em um documento, mantendo cada alteração revisável e a IA opcional.',
          'Leitores que preferem um projeto com código e licença públicos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Oleafly não serve bem em alguns casos, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: para quem precisa hoje de um produto pronto e estável. O README classifica o projeto como beta e o repositório foi criado em julho de 2026.',
          'Não serve: para quem não tem um servidor para hospedar, porque a colaboração ao vivo exige um Oleafly Server que você ou sua organização administram.',
          'Não verificado: qualidade da compilação, velocidade do editor, comportamento da colaboração, confiabilidade da sincronização e qualidade das edições da IA. A PromptQuorum não executou o aplicativo.',
          'Não verificado: as afirmações de «sem telemetria» e «não se comunica com o fabricante» ao lado da verificação de atualização ao iniciar; a PromptQuorum não inspecionou o tráfego de rede.',
          'Não verificado: se os instaladores de macOS e Windows são assinados ou notarizados pelo sistema operacional e como os agentes de IA são configurados além do que o README descreve.',
          'Não verificado: os números do fabricante sobre modelos de documento (templates) e habilidades incluídas e as afirmações de segurança da página do servidor.',
          'Não verificado: quem toca o projeto, em que país ele está sediado e quantas pessoas o usam. Não foi encontrada empresa, aviso legal nem página de termos, e a PromptQuorum não procurou análises independentes.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Oleafly versus alternativas',
        itemHeadings: true,
        content: [
          '**O Oleafly se sobrepõe a outras ferramentas de desktop para escrita científica e pesquisa assistida por IA; a PromptQuorum não o comparou com elas na prática.** As ferramentas abaixo estão no diretório e são descritas a partir das próprias análises.',
        ],
        columns: ['Ferramenta', 'Segundo as fontes'],
        rows: [
          { 'Ferramenta': 'Oleafly', 'Segundo as fontes': 'AGPL-3.0; Mac/Windows/Linux; editor de LaTeX, Typst, Markdown' },
          { 'Ferramenta': '[Open Science Desktop](/pt/power-local-llm/open-science-desktop-review)', 'Segundo as fontes': 'MIT; Mac/Windows/Linux; bancada de pesquisa com IA' },
          { 'Ferramenta': '[PapersGPT](/pt/power-local-llm/papersgpt-review)', 'Segundo as fontes': 'AGPL-3.0; plugin do Zotero; chat com seus artigos' },
          { 'Ferramenta': '[SoloMD](/pt/power-local-llm/solomd-review)', 'Segundo as fontes': 'MIT; desktop e celular; notas Markdown com chat de IA' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso de uma conta para usar o Oleafly?',
            a: 'Não de uma conta do Oleafly, segundo o README. Você pode escrever, compilar e usar o Git sem fazer login em nada. A colaboração ao vivo conecta você ao servidor do seu laboratório com GitHub ou um provedor OpenID Connect, e a sincronização na nuvem faz login no seu armazenamento na nuvem.',
          },
          {
            q: 'Vários autores podem editar o mesmo artigo ao mesmo tempo?',
            a: 'Sim, segundo o fabricante, por um Oleafly Server que você ou sua organização hospedam, com cursores compartilhados, comentários e papéis. A PromptQuorum não testou a colaboração, e o servidor é um projeto à parte.',
          },
          {
            q: 'Que IA o Oleafly pode usar?',
            a: 'Segundo o README: agentes de programação como Claude Code, Codex CLI, Gemini CLI e OpenCode nos quais você faz login, um provedor hospedado, qualquer endpoint compatível com a OpenAI ou um modelo local do Ollama. A IA é opcional, e cada alteração dela aparece como um diff que você pode revisar e desfazer.',
          },
          {
            q: 'Funciona offline?',
            a: 'Segundo o README, escrever, compilar, Git e verificações rodam no seu computador, e as compilações de LaTeX funcionam offline depois que o motor integrado tem os pacotes de que precisa. Sincronização na nuvem, consultas bibliográficas e IA hospedada precisam de conexão.',
          },
          {
            q: 'Com que frequência o Oleafly é atualizado?',
            a: 'O GitHub lista a versão 0.4.11 de 8 de novembro de 2026 e a 0.4.12 de 13 de novembro de 2026, com commits no ramo principal até 17 de novembro de 2026. O README classifica o projeto como beta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Oleafly vale uma olhada se você escreve artigos em LaTeX ou Typst e quer um editor de desktop gratuito e de código aberto com Git, Zotero e agentes de IA opcionais.**',
          'No papel ele cobre muito, e o desenvolvimento está ativo: versão 0.4.12 em 13 de novembro de 2026 e um commit em 17 de novembro de 2026. A parte de IA é opcional, e o README diz que cada alteração aparece como um diff que você pode desfazer.',
          'As contrapartidas são reais: o projeto está em beta e tem poucos meses, não foi encontrada empresa, aviso legal nem página de termos, a colaboração ao vivo exige um servidor que você hospeda e a PromptQuorum não testou nada. Experimente em uma cópia de um projeto antes de depender dele e confira se o modelo da sua revista compila.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Oleafly](https://oleafly.com) — recursos e links, consultado em 18 de novembro de 2026.',
          '[Página de privacidade](https://oleafly.com/privacy) — as declarações do fabricante sobre dados e IA, consultada em 18 de novembro de 2026.',
          '[Página de segurança do Oleafly Server](https://oleafly.com/security) — o que o servidor faz e o que está planejado, consultada em 18 de novembro de 2026.',
          '[Repositório do GitHub](https://github.com/Oleafly/Oleafly) — licença, data de criação e último commit, consultado em 18 de novembro de 2026.',
          '[README](https://github.com/Oleafly/Oleafly#readme) — recursos, plataformas e perguntas frequentes, consultado em 18 de novembro de 2026.',
          '[Versões do GitHub](https://github.com/Oleafly/Oleafly/releases) — datas de versão, pacotes e notas da 0.4.12, consultadas em 18 de novembro de 2026.',
          '[Repositório do Oleafly Server](https://github.com/Oleafly/oleafly-server) — o servidor de colaboração à parte, consultado em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Open Science Desktop](/pt/power-local-llm/open-science-desktop-review) — uma bancada de pesquisa com IA para desktop com chat de agentes e notebooks.',
          '[Análise do PapersGPT](/pt/power-local-llm/papersgpt-review) — um plugin do Zotero para conversar com a sua biblioteca de artigos.',
          '[Análise do SoloMD](/pt/power-local-llm/solomd-review) — notas Markdown com chat de IA no desktop e no celular.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/oleafly-review-hero-ja.webp',
    title: 'Oleaflyレビュー：AI対応の無料LaTeX・Typstエディター',
    seoTitle: 'Oleaflyレビュー：無料のLaTeX・Typstエディター',
    intro:
      'Oleafly 0.4.12は、LaTeX、Typst、Markdownで研究論文を書くための無料のデスクトップエディターで、ライセンスはAGPL-3.0です。READMEによると、自分のパソコン上でコンパイルし、各プロジェクトをGitリポジトリで管理し、Zoteroから引用でき、自分でホストするサーバーを通じて共著者と同時に編集できます。Claude CodeやCodexなどのAIエージェント、またはローカルのOllamaモデルとも組み合わせられます。このレビューは公式サイト、GitHubリポジトリとリリースノート、Oleafly Serverのページに基づき、2026年11月18日に確認しました。PromptQuorumはアプリを実際には試していません。',
    metaDescription:
      'OleaflyはLaTeX・Typst・Markdown向けの無料AGPL-3.0デスクトップエディター。Git、Zotero、自前サーバーでの共同編集、任意のAIエージェントに対応。確認できた内容を整理します。',
    twitterDescription:
      'Oleafly：LaTeX・Typst・Markdown向けの無料オープンソース・デスクトップエディター。Git、Zotero、自前サーバーでの共同編集、任意のAIエージェントに対応。ベータ版。確認できた内容。',
    audience:
      'LaTeX、Typst、Markdownで論文や学位論文を書く研究者と学生、自前の共同編集サーバーを運用したい研究室、OleaflyのアカウントなしでドキュメントエディターにAIの補助を求める人',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Oleafly レビュー',
    targetKeywords: [
      'Oleafly レビュー',
      'AI対応 LaTeX エディター',
      'オープンソース LaTeX エディター デスクトップ',
      'Typst エディター',
      'セルフホスト 共同編集 LaTeX',
      '研究執筆 AIツール',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Oleaflyは、LaTeX・Typst・Markdownの論文向けの無料のオープンソース（AGPL-3.0）デスクトップエディターで、自分のパソコン上でコンパイルし、Git、Zotero、自前サーバーでのリアルタイム共同編集、任意のAIエージェントを加えます。** GitHubのリリースパッケージからmacOS、Windows、Linuxにインストールでき、ベータ版と表示されています。PromptQuorumは試しておらず、2026年11月18日時点で運営会社、運営者情報、利用規約のページは見つかりませんでした。',
    quickAnswerTop: {
      ja: {
        question: 'Oleaflyとは何で、誰に向いていますか？',
        answer:
          'OleaflyはGitHubで公開開発されている研究執筆用のデスクトップエディターです。ソース、PDF、引用、Git履歴を一か所にまとめたい研究者と学生に向いており、AIは任意の追加機能です。',
        bullets: [
          '無料でAGPL-3.0ライセンス。macOS、Windows、Linux向けインストーラーがあり、READMEはプロジェクトをベータ版と表示しています。',
          'LaTeX、Typst、Markdownで書けます。Tectonic、Typst、Pandocが組み込まれており、新規プロジェクトは別途TeXを入れなくてもコンパイルできます。',
          'リアルタイム共同編集には、自分または研究室がホストするOleafly Serverが必要です。クラウド同期はDropbox、Google Drive、S3互換ストレージを使えます。',
          'AIは任意です。Claude CodeやCodexなどのエージェント、ホスト型プロバイダー、OpenAI互換エンドポイント、ローカルのOllamaモデルを接続できます。',
          'リポジトリは2026年7月に作成され、バージョン0.4.12は2026年11月13日に公開されました。',
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
            text: 'Oleaflyは、LaTeX・Typst・Markdownの論文向けの無料のオープンソース・デスクトップエディターで、自分のパソコン上でコンパイルし、Git、Zotero、自前サーバーでの共同編集、任意のAIエージェントを加えます。',
          },
          {
            type: 'plain-terms',
            text: '研究論文の執筆用ワークスペースと考えてください。本文、PDF、参考文献、バージョン履歴が、パソコン上の1つのアプリにまとまります。AIエージェントに手伝いを頼むこともできますが、必須ではなく、提案された変更はすべて差分として表示されます。',
          },
        ],
        items: [
          'GitHubのリリースページからインストーラーを入手します。macOSはDMG、WindowsはMSIまたはEXE、LinuxはAppImage、DEB、RPMです。',
          'READMEによると、執筆、コンパイル、Git、各種チェックはパソコン上で動きます。クラウド同期、ホスト型AI、文献検索などは、オンにするとネットワークを使い、リリースビルドは起動時にも更新を確認します。',
          'リアルタイム共同編集は、研究室や大学がホストするOleafly Server経由で行います。PromptQuorumは試していません。',
          'READMEとプライバシーページによると、AIは任意で、エージェント、プロバイダー、ローカルのOllamaモデルを接続するまでオフです。ホスト型プロバイダーの費用は各プロバイダーが請求します。',
          'プロジェクト自身がベータ版としており、PromptQuorumも試していないため、コンパイルの品質、共同編集の挙動、AIの出力は未検証です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'プライバシーのページにはアカウントもテレメトリーもないと書かれていますが、READMEにはリリースビルドが起動時に更新を確認するとも書かれています。PromptQuorumはネットワーク通信を調べておらず、どちらも提供元の記載以上には確認できません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Oleaflyは、LaTeX・Typst・Markdownによる研究執筆向けのAGPL-3.0デスクトップエディターで、macOS、Windows、Linux向けに公開されています。**',
          '[github.com/Oleafly/Oleafly](https://github.com/Oleafly/Oleafly)で公開開発されており、リポジトリはオンラインLaTeXエディターに代わるオープンソースのIDEと説明しています。リポジトリは2026年7月に作成され、バージョン0.4.12は2026年11月13日に公開、メインブランチの最後のコミットは2026年11月17日なので、開発は活発で、放置プロジェクトの警告は該当しません。READMEにはPrajwal Murthyと貢献者の名前が載っていますが、PromptQuorumは会社、住所、運営者情報を見つけられず、どの国のプロジェクトかは言えません。',
          'READMEによると、Oleaflyはプロジェクトのソース、PDF、引用、図、チェック、Git履歴を一か所にまとめます。自前サーバーでのリアルタイム共同編集、クラウド同期、Zotero引用、学術インデックスにまたがる文献検索、投稿前チェック、図のコンポーザー、テンプレートギャラリーが挙げられています。AI機能は、サインインして使うエージェント、プロバイダーやローカルのOllamaモデルにつなぐチャットアシスタント、プロジェクトの別コピーで動く任意のリサーチタスクで構成されます。',
          'PromptQuorumはアプリを実行しておらず、コンパイルの品質、エディターの速度、共同編集の挙動、AI出力の品質は確認していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Oleaflyは、GitHubのリリースページにあるパッケージからインストールします。READMEが全プラットフォーム分のリンクを載せています。**',
          'リリースv0.4.12には、Apple SiliconとIntel向けのmacOS用DMG、Windows用のMSIとEXEセットアップ、x86_64とARM64向けLinux用のAppImage、DEB、RPMが並んでいます。アプリ内アップデーター用の署名ファイルも含まれ、READMEによれば、アップデーターは署名を確認してからインストールします。',
        ],
        columns: ['プラットフォーム', 'パッケージ'],
        rows: [
          { 'プラットフォーム': 'macOS（Apple Silicon）', 'パッケージ': 'DMG' },
          { 'プラットフォーム': 'macOS（Intel）', 'パッケージ': 'DMG（x64）' },
          { 'プラットフォーム': 'Windows（x86_64）', 'パッケージ': 'MSIまたはEXEセットアップ' },
          { 'プラットフォーム': 'Linux（x86_64、ARM64）', 'パッケージ': 'AppImage、DEB、RPM' },
          { 'プラットフォーム': '[ソース](https://github.com/Oleafly/Oleafly)', 'パッケージ': 'ソースからビルド（開発ガイド参照）' },
        ],
        note: '[GitHubのリリースページ](https://github.com/Oleafly/Oleafly/releases/latest)からダウンロードします。PromptQuorumはインストーラーを実行しておらず、OSによる署名や公証がされているかも確認していません。確認時、サイトの利用規約、料金、概要、運営者情報、問い合わせのページは「404」でした。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**Oleaflyには最近のmacOS、Windows、Linuxのパソコンが必要です。READMEはメモリやGPUの最小要件を公開していません。**',
          '一覧はREADMEに基づきます。ローカルAIモデルは任意でアプリには含まれず、必要なハードウェアは実行するモデルによって異なります。PromptQuorumはメモリ使用量やコンパイル速度を測定していません。',
        ],
        columns: ['項目', '記載されている内容'],
        rows: [
          { '項目': 'macOS', '記載されている内容': 'Apple SiliconまたはIntel（DMG）' },
          { '項目': 'Windows', '記載されている内容': 'x86_64（MSIまたはEXE）' },
          { '項目': 'Linux', '記載されている内容': 'x86_64またはARM64、glibc 2.35以降' },
          { '項目': 'コンパイラー', '記載されている内容': 'Tectonic、Typst、Pandoc内蔵' },
          { '項目': 'フルTeX', '記載されている内容': '任意：TeX Live、MacTeX、MiKTeX、TinyTeX' },
          { '項目': 'メモリとGPU', '記載されている内容': '未公開' },
        ],
        note: 'Linuxパッケージにはglibc 2.35以降が必要で、READMEはUbuntu 22.04またはDebian 12以降としています。READMEによれば、Typstプロジェクトのクリックでのジャンプ機能はTinymistを使い、Typst 0.13以降が必要です。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Oleaflyはまず研究文書のエディターとコンパイラーで、共同編集、Git、AIはその周りに付きます。** 以下はすべて、READMEとリリースノートにある提供元の説明です。',
        ],
        items: [
          '編集：LaTeX、Typst、Markdown。ラベル、引用、コマンドの補完、リアルタイムのエラーチェック、アウトライン、VimとEmacsのキー操作、ビジュアルモードがあります。',
          'コンパイル：Tectonic、Typst、Pandocが内蔵されています。PDFをクリックするとソースへ、ソースからPDFへジャンプでき、エラーの修正中は最後に成功したPDFが表示されたままになります。',
          '引用：入力しながらZoteroライブラリから引用でき、エディターを離れずにarXiv、Semantic Scholar、Crossref、PubMed、OpenAlexを検索できます。',
          'チェックと図：投稿前チェックが壊れた参照、欠けた図、埋め込まれていないフォント、アクセシビリティの不備を見つけます。図のコンポーザーはTikZ、Typst、Mermaidのコードを書き出します。',
          'Gitと同期：各プロジェクトはGitリポジトリで、GitHub、GitLab、Gitea、Forgejo、Codeberg、自前のサーバーにプッシュできます。クラウド同期はDropbox、Google Drive、S3互換ストレージに対応します。',
          '共同編集：自分でホストするOleafly Serverを通じて、共有カーソル、コメント、ロール、バージョン履歴が使えます。Oleafly Serverは別のAGPL-3.0プロジェクトです。',
          'AI：Claude Code、Codex CLI、Gemini CLI、OpenCodeなどのエージェントのカタログがあり、プロジェクトを確認可能な差分として編集します。ホスト型またはローカルモデル用のチャットアシスタント、同梱のリサーチスキル、外部AIクライアント向けのローカルMCPサーバーもあります。',
          '実験的機能：プロジェクトの別コピーで文献レビューや推敲を実行するリサーチタスクは初期設定ではオフで、0.4.12のノートには実験として「Notes」ナレッジベースが追加されています。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**提供元によると、文書はディスクに残り、ネットワークは自分が選んだ操作にだけ使われます。PromptQuorumはネットワーク通信を調べておらず、これを確認できません。**',
          'プライバシーのページには、アプリにアカウントは不要でテレメトリーもなく、提供元へ通信しないこと、AI機能は自分のキーを追加するまでオフで、テキストは自分のマシンから選んだプロバイダーへ送られることが書かれています。READMEには、リリースビルドが起動時に更新を確認すると補足され、ほかにネットワークを使うものとして、サーバーとの共有、クラウド同期、文献とDOIの検索、GitHub、ホスト型AIプロバイダー、接続したMCPサーバー、エンジン・パッケージ・テンプレートの任意ダウンロードが挙げられています。',
          'ホスト型AIプロバイダーやクラウドのエージェントを使うと、テキストはそのプロバイダーの規約のもとで送られます。READMEによれば、ローカルのOllamaモデルならAIの通信は自分のパソコン内にとどまります。共同編集サーバーを使う場合、プロジェクトのファイルは自分の組織が運用するサーバーへ送られます。',
          'コードはAGPL-3.0で公開されているため、データの流れは監査できます。Oleafly Serverのセキュリティのページは提供元が書いたもので、計画中の機能は別に記載されています。PromptQuorumは、その安全性の記述や、言及されている第三者レビューを検証していません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Oleaflyは、LaTeXやTypstで書き、無料のオープンソースのデスクトップワークスペースを求める研究者と学生に向いています。**',
        ],
        items: [
          'ソース、PDF、参考文献、Git履歴を1つのアプリにまとめたい論文・学位論文の執筆者。',
          'ホスト型エディターを使うより、自前の共同編集サーバーを運用したい研究室や学部。',
          '文書でAIエージェントを試したいが、変更はすべて確認でき、AIは任意にしておきたい書き手。',
          'コードとライセンスが公開されているプロジェクトを好む読者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Oleaflyが合わない場面があり、未確認の点もいくつか残っています。**',
        ],
        items: [
          '向かない人：今すぐ完成した安定版が必要な人。READMEはプロジェクトをベータ版と表示しており、リポジトリは2026年7月に作成されました。',
          '向かない人：ホストするサーバーがない人。リアルタイム共同編集には、自分または組織が運用するOleafly Serverが必要です。',
          '未検証：コンパイルの品質、エディターの速度、共同編集の挙動、同期の信頼性、AIによる編集の品質。PromptQuorumはアプリを実行していません。',
          '未検証：起動時の更新確認と並ぶ「テレメトリーなし」「提供元へ通信しない」という記載。PromptQuorumはネットワーク通信を調べていません。',
          '未検証：macOSとWindowsのインストーラーがOSの署名や公証を受けているか、READMEの説明以上にAIエージェントがどう設定されるか。',
          '未検証：提供元によるテンプレートや同梱スキルの数値と、サーバーのページにあるセキュリティの記述。',
          '未検証：誰がプロジェクトを運営しているか、どの国に拠点があるか、何人が使っているか。会社、運営者情報、利用規約のページは見つからず、PromptQuorumは第三者のレビューも探していません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Oleaflyと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Oleaflyは、研究執筆やAI支援リサーチ向けの他のデスクトップツールと重なる部分がありますが、PromptQuorumは実機で比較していません。** 以下のツールはディレクトリに掲載されており、それぞれのレビューに基づいて説明しています。',
        ],
        columns: ['ツール', '情報源での記載'],
        rows: [
          { 'ツール': 'Oleafly', '情報源での記載': 'AGPL-3.0、Mac/Windows/Linux、LaTeX・Typst・Markdownエディター' },
          { 'ツール': '[Open Science Desktop](/ja/power-local-llm/open-science-desktop-review)', '情報源での記載': 'MIT、Mac/Windows/Linux、AI研究ワークベンチ' },
          { 'ツール': '[PapersGPT](/ja/power-local-llm/papersgpt-review)', '情報源での記載': 'AGPL-3.0、Zoteroプラグイン、論文とチャット' },
          { 'ツール': '[SoloMD](/ja/power-local-llm/solomd-review)', '情報源での記載': 'MIT、デスクトップとモバイル、AIチャット付きMarkdownノート' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Oleaflyを使うのにアカウントは必要ですか？',
            a: 'READMEによると、Oleaflyのアカウントは不要です。どこにもサインインせずに、執筆、コンパイル、Gitを使えます。共同編集ではGitHubまたはOpenID Connectプロバイダーで研究室のサーバーにサインインし、クラウド同期ではクラウドストレージにサインインします。',
          },
          {
            q: '複数の著者が同じ論文を同時に編集できますか？',
            a: '提供元によると可能で、自分または組織がホストするOleafly Serverを通じて、共有カーソル、コメント、ロールが使えます。PromptQuorumは共同編集を試しておらず、サーバーは別のプロジェクトです。',
          },
          {
            q: 'OleaflyはどのようなAIを使えますか？',
            a: 'READMEによると、サインインして使うClaude Code、Codex CLI、Gemini CLI、OpenCodeなどのコーディングエージェント、ホスト型プロバイダー、OpenAI互換エンドポイント、ローカルのOllamaモデルです。AIは任意で、AIによる変更はすべて差分として表示され、確認して元に戻せます。',
          },
          {
            q: 'オフラインで動きますか？',
            a: 'READMEによると、執筆、コンパイル、Git、チェックはパソコン上で動き、内蔵エンジンが必要なパッケージを持っていればLaTeXのビルドもオフラインで動きます。クラウド同期、文献検索、ホスト型AIには接続が必要です。',
          },
          {
            q: 'Oleaflyの更新頻度はどのくらいですか？',
            a: 'GitHubには2026年11月8日のバージョン0.4.11と2026年11月13日の0.4.12が載っており、メインブランチには2026年11月17日までコミットがあります。READMEはプロジェクトをベータ版と表示しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**LaTeXやTypstで論文を書き、Git、Zotero、任意のAIエージェントを備えた無料のオープンソース・デスクトップエディターを探しているなら、Oleaflyは一見の価値があります。**',
          '機能は幅広く、開発も活発です。2026年11月13日にバージョン0.4.12、2026年11月17日にコミットがありました。AIは任意で、READMEによれば変更はすべて元に戻せる差分として表示されます。',
          'トレードオフもあります。プロジェクトはベータ版で歴史も数か月です。会社、運営者情報、利用規約のページは見つからず、リアルタイム共同編集には自分でホストするサーバーが必要で、PromptQuorumは何も試していません。頼る前にプロジェクトのコピーで試し、投稿先のテンプレートがコンパイルできるか確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Oleafly公式サイト](https://oleafly.com) — 機能とリンク。2026年11月18日に確認。',
          '[プライバシーのページ](https://oleafly.com/privacy) — データとAIに関する提供元の説明。2026年11月18日に確認。',
          '[Oleafly Serverのセキュリティのページ](https://oleafly.com/security) — サーバーの機能と計画中の機能。2026年11月18日に確認。',
          '[GitHubリポジトリ](https://github.com/Oleafly/Oleafly) — ライセンス、作成日、最後のコミット。2026年11月18日に確認。',
          '[README](https://github.com/Oleafly/Oleafly#readme) — 機能、プラットフォーム、FAQ。2026年11月18日に確認。',
          '[GitHubリリース](https://github.com/Oleafly/Oleafly/releases) — リリース日、パッケージ、0.4.12のノート。2026年11月18日に確認。',
          '[Oleafly Serverのリポジトリ](https://github.com/Oleafly/oleafly-server) — 別プロジェクトの共同編集サーバー。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Open Science Desktopレビュー](/ja/power-local-llm/open-science-desktop-review) — エージェントチャットとノートブックを備えたデスクトップのAI研究ワークベンチ。',
          '[PapersGPTレビュー](/ja/power-local-llm/papersgpt-review) — 論文ライブラリとチャットするためのZoteroプラグイン。',
          '[SoloMDレビュー](/ja/power-local-llm/solomd-review) — デスクトップとモバイルで使える、AIチャット付きのMarkdownノート。',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/oleafly-review-hero-zh.webp',
    title: 'Oleafly 解读：支持 AI 智能体的免费开源 LaTeX 与 Typst 编辑器',
    seoTitle: 'Oleafly 解读：免费的 LaTeX 与 Typst 编辑器',
    intro:
      'Oleafly 0.4.12 是一款免费的桌面编辑器，采用 AGPL-3.0 许可，用于以 LaTeX、Typst 和 Markdown 撰写研究论文。根据其 README，它在你自己的电脑上编译，把每个项目保存在 Git 仓库中，可从 Zotero 引用文献，并让合作者通过你自己托管的服务器共同编辑，还能配合 Claude Code、Codex 等 AI 智能体或本地 Ollama 模型使用。本评测基于官方网站、带发布说明的 GitHub 仓库以及 Oleafly Server 页面，核对日期为 2026 年 11 月 18 日。PromptQuorum 没有实际测试过这款应用。',
    metaDescription:
      'Oleafly 是免费的 AGPL-3.0 桌面编辑器，支持 LaTeX、Typst 和 Markdown，提供 Git、Zotero、自托管协作和可选 AI 智能体。已确认的内容。',
    twitterDescription:
      'Oleafly：面向 LaTeX、Typst 和 Markdown 论文的免费开源桌面编辑器，提供 Git、Zotero、自托管协作服务器和可选 AI 智能体。测试版。已确认的内容。',
    audience:
      '用 LaTeX、Typst 或 Markdown 撰写论文的研究人员和学生，想自建协作服务器的实验室，以及希望在文档编辑器中使用 AI 辅助、又不想注册 Oleafly 账号的人',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Oleafly 解读',
    targetKeywords: [
      'Oleafly 解读',
      '带 AI 的 LaTeX 编辑器',
      '开源 LaTeX 桌面编辑器',
      'Typst 编辑器',
      '自托管协作 LaTeX',
      'AI 科研写作工具',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Oleafly 是免费的开源（AGPL-3.0）桌面编辑器，面向 LaTeX、Typst 和 Markdown 论文，在你自己的电脑上编译，并提供 Git、Zotero、自托管实时协作和可选的 AI 智能体。** 它通过 GitHub 发布页的安装包安装，支持 macOS、Windows 和 Linux，并标注为测试版。PromptQuorum 没有测试过它，2026 年 11 月 18 日也没有找到运营公司、公司信息或服务条款页面。',
    quickAnswerTop: {
      zh: {
        question: 'Oleafly 是什么，适合谁用？',
        answer:
          'Oleafly 是在 GitHub 上公开开发的科研写作桌面编辑器。它适合想把源文件、PDF、引用和 Git 历史放在一处的研究人员和学生，AI 只是可选的附加功能。',
        bullets: [
          '免费，采用 AGPL-3.0 许可；提供 macOS、Windows 和 Linux 安装包；README 把项目标为测试版。',
          '可写 LaTeX、Typst 和 Markdown；内置 Tectonic、Typst 和 Pandoc，新项目无需另装 TeX 即可编译。',
          '实时协作需要你或你的实验室托管的 Oleafly Server；云同步可使用 Dropbox、Google Drive 或兼容 S3 的存储。',
          'AI 为可选：可连接 Claude Code、Codex 等智能体、托管服务商、任何兼容 OpenAI 的端点或本地 Ollama 模型。',
          '仓库创建于 2026 年 7 月；0.4.12 版发布于 2026 年 11 月 13 日。',
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
            text: 'Oleafly 是免费的开源桌面编辑器，面向 LaTeX、Typst 和 Markdown 论文，在你的电脑上编译，并提供 Git、Zotero、自有服务器协作和可选的 AI 智能体。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作论文写作工作台：正文、PDF、参考文献和版本历史都在你电脑上的同一个应用里。你可以请 AI 智能体帮忙，也可以完全不用，它提出的每项修改都会以差异（diff）的形式显示。',
          },
        ],
        items: [
          '从 GitHub 发布页下载安装包：macOS 为 DMG，Windows 为 MSI 或 EXE，Linux 为 AppImage、DEB 或 RPM。',
          '根据 README，写作、编译、Git 和检查都在你的电脑上运行；云同步、托管 AI 或文献检索等功能在你开启后会使用网络，发布版本在启动时还会检查更新。',
          '实时协作通过你的实验室或大学托管的 Oleafly Server 进行；PromptQuorum 没有测试过。',
          '根据 README 和隐私页面，AI 为可选，连接智能体、服务商或本地 Ollama 模型之前保持关闭；托管服务商的费用由这些服务商收取。',
          '项目自称测试版，PromptQuorum 也没有测试过，因此编译质量、协作表现和 AI 输出均未核实。',
        ],
        callouts: [
          {
            type: 'note',
            text: '隐私页面称应用没有账号、没有遥测，而 README 补充说发布版本在启动时会检查更新。PromptQuorum 没有检查网络流量，除厂商的说法之外无法确认这两项表述。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Oleafly 是采用 AGPL-3.0 许可的桌面编辑器，用于以 LaTeX、Typst 和 Markdown 进行科研写作，已发布 macOS、Windows 和 Linux 版本。**',
          '它在 [github.com/Oleafly/Oleafly](https://github.com/Oleafly/Oleafly) 上公开开发，仓库把它描述为开源 IDE 和在线 LaTeX 编辑器的替代品。仓库创建于 2026 年 7 月；0.4.12 版发布于 2026 年 11 月 13 日，主分支最近一次提交在 2026 年 11 月 17 日，因此开发活跃，不适用停更项目警告。README 署名 Prajwal Murthy 和贡献者；PromptQuorum 没有找到公司、地址或公司信息，因此无法说明项目位于哪个国家。',
          '根据 README，Oleafly 把项目的源文件、PDF、引用、图表、检查和 Git 历史放在同一处。它列出了通过自托管服务器的实时协作、云同步、Zotero 引用、跨学术索引的文献检索、投稿前检查、图表编写器和模板库。AI 部分包括你登录使用的智能体、连接服务商或本地 Ollama 模型的聊天助手，以及在项目独立副本中运行的可选研究任务。',
          'PromptQuorum 没有运行这款应用，也没有核实编译质量、编辑器速度、协作表现或 AI 输出质量。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**Oleafly 通过 GitHub 发布页上的安装包安装，README 为每个平台都给出了该页面的链接。**',
          'v0.4.12 版提供适用于 Apple Silicon 和 Intel 的 macOS DMG、Windows 的 MSI 和 EXE 安装程序，以及适用于 x86_64 和 ARM64 的 Linux AppImage、DEB 和 RPM 包。发布页还附带应用内更新器所用的签名文件，README 称更新器会先校验签名再安装。',
        ],
        columns: ['途径', '获取方式'],
        rows: [
          { '途径': 'macOS（Apple Silicon）', '获取方式': 'DMG' },
          { '途径': 'macOS（Intel）', '获取方式': 'DMG（x64）' },
          { '途径': 'Windows（x86_64）', '获取方式': 'MSI 或 EXE 安装程序' },
          { '途径': 'Linux（x86_64、ARM64）', '获取方式': 'AppImage、DEB 或 RPM' },
          { '途径': '[源码](https://github.com/Oleafly/Oleafly)', '获取方式': '从源码构建（见开发指南）' },
        ],
        note: '请从 [GitHub 发布页](https://github.com/Oleafly/Oleafly/releases/latest)下载。PromptQuorum 没有运行这些安装程序，也没有核实它们是否经过操作系统的代码签名或公证。核对时，网站上的条款、定价、关于、公司信息和联系页面返回“404”。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**Oleafly 需要较新的 macOS、Windows 或 Linux 电脑；README 没有公布内存或 GPU 的最低要求。**',
          '以下列表来自 README。本地 AI 模型为可选，不属于应用本身，其硬件需求取决于你运行的模型。PromptQuorum 没有测量内存占用或编译速度。',
        ],
        columns: ['项目', 'README 中的数据'],
        rows: [
          { '项目': 'macOS', 'README 中的数据': 'Apple Silicon 或 Intel（DMG）' },
          { '项目': 'Windows', 'README 中的数据': 'x86_64（MSI 或 EXE）' },
          { '项目': 'Linux', 'README 中的数据': 'x86_64 或 ARM64，glibc 2.35+' },
          { '项目': '编译器', 'README 中的数据': '内置 Tectonic、Typst、Pandoc' },
          { '项目': '完整 TeX', 'README 中的数据': '可选：TeX Live、MacTeX、MiKTeX、TinyTeX' },
          { '项目': '内存与 GPU', 'README 中的数据': '未公布' },
        ],
        note: 'Linux 安装包需要 glibc 2.35 或更新版本，README 将其对应为 Ubuntu 22.04 或 Debian 12 及以后。根据 README，Typst 项目中的点击跳转使用 Tinymist，需要 Typst 0.13 或更新版本。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Oleafly 首先是科研文档的编辑器和编译器，协作、Git 和 AI 围绕它展开。** 以下各项均为 README 和发布说明中的厂商说法。',
        ],
        items: [
          '编辑：支持 LaTeX、Typst 和 Markdown，提供标签、引用和命令补全、实时错误检查、大纲、Vim 与 Emacs 按键以及可视化模式。',
          '编译：内置 Tectonic、Typst 和 Pandoc；在 PDF 中点击可跳转到源文件，反之亦然；修复错误期间，最近一次成功的 PDF 会保持显示。',
          '引用：输入时即可从 Zotero 库引用，无需离开编辑器即可检索 arXiv、Semantic Scholar、Crossref、PubMed 和 OpenAlex。',
          '检查与图表：投稿前检查会找出失效的引用、缺失的图、未嵌入的字体和无障碍缺陷；图表编写器可生成 TikZ、Typst 或 Mermaid 代码。',
          'Git 与同步：每个项目都是 Git 仓库，可推送到 GitHub、GitLab、Gitea、Forgejo、Codeberg 或你自己的服务器；云同步支持 Dropbox、Google Drive 和兼容 S3 的存储。',
          '协作：通过你托管的 Oleafly Server 提供共享光标、批注、角色和版本历史；Oleafly Server 是单独的 AGPL-3.0 项目。',
          'AI：智能体目录包括 Claude Code、Codex CLI、Gemini CLI 和 OpenCode 等，它们以可审阅的差异编辑项目；另有面向托管或本地模型的聊天助手、随附的研究技能，以及供外部 AI 客户端使用的本地 MCP 服务器。',
          '实验性：在项目独立副本中运行文献综述或修订的研究任务默认关闭，0.4.12 的说明还以实验形式加入了“Notes”知识库。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**据厂商称，文档保存在你的磁盘上，网络只用于你选择的操作；PromptQuorum 没有检查网络流量，无法确认这一点。**',
          '隐私页面称，应用无需账号、没有遥测、不会向厂商回传，AI 功能在你添加自己的密钥之前保持关闭，文本从你的电脑发往你选择的服务商。README 补充说，发布版本在启动时会检查更新，并列出了其他使用网络的情形：与你的服务器共享、云同步、文献和 DOI 查询、GitHub、托管 AI 服务商、你连接的 MCP 服务器，以及可选的引擎、软件包和模板下载。',
          '如果你使用托管 AI 服务商或云端智能体，你的文本会按该服务商的条款发送给它；根据 README，本地 Ollama 模型能让 AI 流量留在你的电脑上。如果你使用协作服务器，项目文件会发往你所在组织运行的服务器。',
          '代码采用 AGPL-3.0 许可并公开，因此数据流向可以审计。Oleafly Server 的安全页面由厂商撰写，并把计划中的功能单独列出；PromptQuorum 没有核实其中的安全说法及其提到的独立审查。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Oleafly 适合用 LaTeX 或 Typst 写作、想要免费开源桌面工作台的研究人员和学生。**',
        ],
        items: [
          '希望在一个应用中管理源文件、PDF、参考文献和 Git 历史的论文与学位论文作者。',
          '更愿意自建协作服务器、而不是使用托管编辑器的实验室和院系。',
          '想在文档上试用 AI 智能体，同时希望每项修改都可审阅、AI 保持可选的写作者。',
          '偏好代码和许可证公开的项目的读者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        content: [
          '**Oleafly 在某些情况下并不合适，也有若干细节尚未核实。**',
        ],
        items: [
          '不适合：现在就需要成熟稳定产品的人。README 把项目标为测试版，仓库创建于 2026 年 7 月。',
          '不适合：没有服务器可托管的人，因为实时协作需要你或你的组织运行 Oleafly Server。',
          '未核实：编译质量、编辑器速度、协作表现、同步可靠性和 AI 修改的质量。PromptQuorum 没有运行这款应用。',
          '未核实：“无遥测”“不回传”的说法与启动时检查更新之间的关系；PromptQuorum 没有检查网络流量。',
          '未核实：macOS 和 Windows 安装程序是否经过操作系统签名或公证，以及 AI 智能体在 README 描述之外如何配置。',
          '未核实：厂商给出的模板和随附技能数量，以及服务器页面上的安全说法。',
          '未核实：谁在运营该项目、位于哪个国家、有多少人在使用。没有找到公司、公司信息或服务条款页面，PromptQuorum 也没有查找独立评测。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Oleafly 与替代方案对比',
        itemHeadings: true,
        content: [
          '**Oleafly 与其他用于科研写作和 AI 辅助研究的桌面工具有重叠；PromptQuorum 没有实际对比过它们。** 下列工具都收录在目录中，描述依据各自的评测。',
        ],
        columns: ['工具', '来源中的记载'],
        rows: [
          { '工具': 'Oleafly', '来源中的记载': 'AGPL-3.0；Mac/Windows/Linux；LaTeX、Typst、Markdown 编辑器' },
          { '工具': '[Open Science Desktop](/zh/power-local-llm/open-science-desktop-review)', '来源中的记载': 'MIT；Mac/Windows/Linux；AI 研究工作台' },
          { '工具': '[PapersGPT](/zh/power-local-llm/papersgpt-review)', '来源中的记载': 'AGPL-3.0；Zotero 插件；与论文对话' },
          { '工具': '[SoloMD](/zh/power-local-llm/solomd-review)', '来源中的记载': 'MIT；桌面与移动；带 AI 聊天的 Markdown 笔记' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '使用 Oleafly 需要账号吗？',
            a: '根据 README，不需要 Oleafly 账号。你无需登录任何服务就能写作、编译和使用 Git。实时协作会用 GitHub 或 OpenID Connect 服务商登录你实验室的服务器，云同步则登录你的云存储。',
          },
          {
            q: '多位作者可以同时编辑同一篇论文吗？',
            a: '据厂商称可以，通过你或你的组织托管的 Oleafly Server，提供共享光标、批注和角色。PromptQuorum 没有测试过协作功能，该服务器是单独的项目。',
          },
          {
            q: 'Oleafly 可以使用哪些 AI？',
            a: '根据 README：你登录使用的 Claude Code、Codex CLI、Gemini CLI、OpenCode 等编程智能体、托管服务商、任何兼容 OpenAI 的端点，或本地 Ollama 模型。AI 为可选，它所做的每项修改都以差异形式显示，你可以审阅并撤销。',
          },
          {
            q: '可以离线使用吗？',
            a: '根据 README，写作、编译、Git 和检查都在你的电脑上运行，内置引擎拿到所需软件包后，LaTeX 构建也能离线进行。云同步、文献查询和托管 AI 需要联网。',
          },
          {
            q: 'Oleafly 多久更新一次？',
            a: 'GitHub 列出了 2026 年 11 月 8 日的 0.4.11 版和 2026 年 11 月 13 日的 0.4.12 版，主分支最近的提交在 2026 年 11 月 17 日。README 把项目标为测试版。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你用 LaTeX 或 Typst 写论文，想要带 Git、Zotero 和可选 AI 智能体的免费开源桌面编辑器，Oleafly 值得一看。**',
          '从纸面上看，它覆盖面很广，开发也很活跃：2026 年 11 月 13 日发布 0.4.12 版，2026 年 11 月 17 日有提交。AI 部分为可选，README 称每项修改都以可撤销的差异形式出现。',
          '代价也很实在：项目处于测试版且只有几个月历史，没有找到公司、公司信息或服务条款页面，实时协作需要你托管服务器，PromptQuorum 也没有测试过任何功能。依赖它之前，先在项目副本上试用，并确认你投稿期刊的模板能够编译。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Oleafly 官方网站](https://oleafly.com) — 功能与链接，核对于 2026 年 11 月 18 日。',
          '[隐私页面](https://oleafly.com/privacy) — 厂商关于数据和 AI 的说明，核对于 2026 年 11 月 18 日。',
          '[Oleafly Server 安全页面](https://oleafly.com/security) — 服务器现有功能和计划功能，核对于 2026 年 11 月 18 日。',
          '[GitHub 仓库](https://github.com/Oleafly/Oleafly) — 许可证、创建日期和最近一次提交，核对于 2026 年 11 月 18 日。',
          '[README](https://github.com/Oleafly/Oleafly#readme) — 功能、平台和常见问题，核对于 2026 年 11 月 18 日。',
          '[GitHub 发布页](https://github.com/Oleafly/Oleafly/releases) — 发布日期、安装包和 0.4.12 版说明，核对于 2026 年 11 月 18 日。',
          '[Oleafly Server 仓库](https://github.com/Oleafly/oleafly-server) — 单独的协作服务器，核对于 2026 年 11 月 18 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Open Science Desktop 评测](/zh/power-local-llm/open-science-desktop-review) — 带智能体聊天和笔记本的桌面 AI 研究工作台。',
          '[PapersGPT 评测](/zh/power-local-llm/papersgpt-review) — 用于与论文库对话的 Zotero 插件。',
          '[SoloMD 评测](/zh/power-local-llm/solomd-review) — 桌面与移动端上带 AI 聊天的 Markdown 笔记。',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/oleafly-review-hero-ko.webp',
    title: 'Oleafly 리뷰: AI 에이전트를 지원하는 무료 오픈소스 LaTeX·Typst 편집기',
    seoTitle: 'Oleafly 리뷰: 무료 LaTeX·Typst 편집기',
    intro:
      'Oleafly 0.4.12는 LaTeX, Typst, Markdown으로 연구 논문을 쓰는 무료 데스크톱 편집기이며 라이선스는 AGPL-3.0입니다. README에 따르면 사용자의 컴퓨터에서 직접 컴파일하고, 모든 프로젝트를 Git 저장소로 관리하며, Zotero에서 인용할 수 있고, 직접 호스팅하는 서버를 통해 공저자와 함께 편집할 수 있습니다. Claude Code, Codex 같은 AI 에이전트나 로컬 Ollama 모델과도 함께 쓸 수 있습니다. 이 리뷰는 공식 웹사이트, 릴리스 노트가 있는 GitHub 저장소, Oleafly Server 페이지를 바탕으로 2026년 11월 18일에 확인했습니다. PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Oleafly는 LaTeX·Typst·Markdown용 무료 AGPL-3.0 편집기로 Git, Zotero, 자체 호스팅 공동 작업, 선택형 AI 에이전트를 지원합니다.',
    twitterDescription:
      'Oleafly: LaTeX·Typst·Markdown 논문용 무료 오픈소스 데스크톱 편집기. Git, Zotero, 자체 호스팅 협업 서버, 선택형 AI 에이전트 지원. 베타. 확인된 내용.',
    audience:
      'LaTeX, Typst, Markdown으로 논문이나 학위 논문을 쓰는 연구자와 학생, 자체 협업 서버를 운영하려는 연구실, Oleafly 계정 없이 문서 편집기에서 AI의 도움을 받고 싶은 사람',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Oleafly 리뷰',
    targetKeywords: [
      'Oleafly 리뷰',
      'AI LaTeX 편집기',
      '오픈소스 LaTeX 편집기 데스크톱',
      'Typst 편집기',
      '자체 호스팅 협업 LaTeX',
      'AI 연구 글쓰기 도구',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Oleafly는 LaTeX·Typst·Markdown 논문용 무료 오픈소스(AGPL-3.0) 데스크톱 편집기로, 사용자의 컴퓨터에서 컴파일하고 Git, Zotero, 자체 호스팅 실시간 공동 작업, 선택형 AI 에이전트를 더합니다.** GitHub 릴리스 패키지로 macOS, Windows, Linux에 설치하며 베타로 표기되어 있습니다. PromptQuorum은 테스트하지 않았고, 2026년 11월 18일 기준으로 운영 회사나 사업자 정보, 이용 약관 페이지는 찾지 못했습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Oleafly는 무엇이며 누구에게 적합합니까?',
        answer:
          'Oleafly는 GitHub에서 공개 개발되는 연구 글쓰기용 데스크톱 편집기입니다. 소스, PDF, 인용, Git 기록을 한곳에 모으려는 연구자와 학생에게 적합하며, AI는 선택 사항입니다.',
        bullets: [
          '무료이며 AGPL-3.0 라이선스입니다. macOS, Windows, Linux용 설치 파일이 있고 README는 프로젝트를 베타로 표기합니다.',
          'LaTeX, Typst, Markdown을 지원합니다. Tectonic, Typst, Pandoc이 내장되어 있어 새 프로젝트는 TeX를 따로 설치하지 않아도 컴파일됩니다.',
          '실시간 공동 작업에는 사용자나 연구실이 호스팅하는 Oleafly Server가 필요하며, 클라우드 동기화는 Dropbox, Google Drive, S3 호환 저장소를 쓸 수 있습니다.',
          'AI는 선택 사항입니다. Claude Code나 Codex 같은 에이전트, 호스팅 제공업체, OpenAI 호환 엔드포인트, 로컬 Ollama 모델을 연결할 수 있습니다.',
          '저장소는 2026년 7월에 만들어졌고 버전 0.4.12는 2026년 11월 13일에 공개되었습니다.',
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
            text: 'Oleafly는 LaTeX·Typst·Markdown 논문용 무료 오픈소스 데스크톱 편집기로, 사용자의 컴퓨터에서 컴파일하고 Git, Zotero, 자체 서버 공동 작업, 선택형 AI 에이전트를 더합니다.',
          },
          {
            type: 'plain-terms',
            text: '연구 논문을 위한 글쓰기 작업 공간이라고 생각하시면 됩니다. 본문, PDF, 참고문헌, 버전 기록이 컴퓨터의 앱 하나에 모입니다. AI 에이전트에게 도움을 요청할 수 있지만 필수는 아니며, 제안된 모든 변경은 diff로 표시됩니다.',
          },
        ],
        items: [
          'GitHub 릴리스 페이지에서 설치 파일을 받습니다. macOS는 DMG, Windows는 MSI 또는 EXE, Linux는 AppImage, DEB, RPM입니다.',
          'README에 따르면 글쓰기, 컴파일, Git, 검사는 사용자의 컴퓨터에서 실행되며, 클라우드 동기화, 호스팅 AI, 문헌 검색 같은 기능은 직접 켜면 네트워크를 사용하고, 릴리스 빌드는 시작할 때 업데이트도 확인합니다.',
          '실시간 공동 작업은 연구실이나 대학이 호스팅하는 Oleafly Server를 통해 이루어지며, PromptQuorum은 테스트하지 않았습니다.',
          'README와 개인정보 페이지에 따르면 AI는 선택 사항이며 에이전트, 제공업체, 로컬 Ollama 모델을 연결하기 전까지 꺼져 있습니다. 호스팅 제공업체의 비용은 해당 업체가 청구합니다.',
          '프로젝트 스스로 베타라고 밝히고 있고 PromptQuorum도 테스트하지 않았으므로 컴파일 품질, 공동 작업 동작, AI 출력은 확인되지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '개인정보 페이지는 앱에 계정과 텔레메트리가 없다고 밝히는 반면, README는 릴리스 빌드가 시작할 때 업데이트를 확인한다고 덧붙입니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았으므로 제작사의 설명 이상으로 두 진술을 확인할 수 없습니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Oleafly는 LaTeX, Typst, Markdown으로 연구 글쓰기를 하는 AGPL-3.0 데스크톱 편집기이며 macOS, Windows, Linux용으로 공개되어 있습니다.**',
          '[github.com/Oleafly/Oleafly](https://github.com/Oleafly/Oleafly)에서 공개 개발되며, 저장소는 이를 온라인 LaTeX 편집기를 대체하는 오픈소스 IDE로 설명합니다. 저장소는 2026년 7월에 만들어졌고 버전 0.4.12는 2026년 11월 13일에 공개되었으며 메인 브랜치의 마지막 커밋은 2026년 11월 17일이므로 개발은 활발하고 방치된 프로젝트 경고는 해당하지 않습니다. README에는 Prajwal Murthy와 기여자가 명시되어 있으나, PromptQuorum은 회사, 주소, 사업자 정보를 찾지 못해 프로젝트가 어느 나라에 기반을 두는지 말할 수 없습니다.',
          'README에 따르면 Oleafly는 프로젝트의 소스, PDF, 인용, 그림, 검사, Git 기록을 한곳에 모읍니다. 자체 호스팅 서버를 통한 실시간 공동 작업, 클라우드 동기화, Zotero 인용, 학술 색인 전반의 문헌 검색, 제출 전 검사, 다이어그램 작성기, 템플릿 갤러리가 나열되어 있습니다. AI 부분은 로그인해서 쓰는 에이전트, 제공업체나 로컬 Ollama 모델에 연결하는 채팅 어시스턴트, 프로젝트의 별도 사본에서 실행되는 선택형 연구 작업으로 구성됩니다.',
          'PromptQuorum은 앱을 실행하지 않았으며 컴파일 품질, 편집기 속도, 공동 작업 동작, AI 출력 품질을 확인하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Oleafly는 GitHub 릴리스 페이지의 패키지로 설치하며, README가 모든 플랫폼에 대해 이 페이지를 링크합니다.**',
          'v0.4.12 릴리스에는 Apple Silicon과 Intel용 macOS DMG, Windows용 MSI와 EXE 설치 파일, x86_64와 ARM64용 Linux AppImage, DEB, RPM 패키지가 있습니다. 릴리스에는 앱 내 업데이터가 사용하는 서명 파일도 포함되어 있으며, README에 따르면 업데이터는 설치 전에 서명을 확인합니다.',
        ],
        columns: ['플랫폼', '패키지'],
        rows: [
          { '플랫폼': 'macOS(Apple Silicon)', '패키지': 'DMG' },
          { '플랫폼': 'macOS(Intel)', '패키지': 'DMG(x64)' },
          { '플랫폼': 'Windows(x86_64)', '패키지': 'MSI 또는 EXE 설치 파일' },
          { '플랫폼': 'Linux(x86_64, ARM64)', '패키지': 'AppImage, DEB 또는 RPM' },
          { '플랫폼': '[소스](https://github.com/Oleafly/Oleafly)', '패키지': '소스에서 빌드(개발 가이드 참조)' },
        ],
        note: '[GitHub 릴리스 페이지](https://github.com/Oleafly/Oleafly/releases/latest)에서 내려받습니다. PromptQuorum은 설치 파일을 실행하지 않았으며 운영체제의 코드 서명이나 공증 여부도 확인하지 않았습니다. 확인 당시 웹사이트의 이용 약관, 요금, 소개, 사업자 정보, 문의 페이지는 "404"를 반환했습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**Oleafly에는 비교적 최신의 macOS, Windows, Linux 컴퓨터가 필요하며, README는 메모리나 GPU 최소 사양을 공개하지 않습니다.**',
          '목록은 README에서 가져왔습니다. 로컬 AI 모델은 선택 사항이며 앱에 포함되지 않고, 필요한 하드웨어는 실행하는 모델에 따라 다릅니다. PromptQuorum은 메모리 사용량이나 컴파일 속도를 측정하지 않았습니다.',
        ],
        columns: ['항목', '명시된 내용'],
        rows: [
          { '항목': 'macOS', '명시된 내용': 'Apple Silicon 또는 Intel(DMG)' },
          { '항목': 'Windows', '명시된 내용': 'x86_64(MSI 또는 EXE)' },
          { '항목': 'Linux', '명시된 내용': 'x86_64 또는 ARM64, glibc 2.35+' },
          { '항목': '컴파일러', '명시된 내용': 'Tectonic, Typst, Pandoc 내장' },
          { '항목': '전체 TeX', '명시된 내용': '선택: TeX Live, MacTeX, MiKTeX, TinyTeX' },
          { '항목': '메모리와 GPU', '명시된 내용': '공개되지 않음' },
        ],
        note: 'Linux 패키지에는 glibc 2.35 이상이 필요하며, README는 이를 Ubuntu 22.04 또는 Debian 12 이후로 설명합니다. README에 따르면 Typst 프로젝트의 클릭 이동은 Tinymist를 사용하며 Typst 0.13 이상이 필요합니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Oleafly는 우선 연구 문서용 편집기이자 컴파일러이며, 공동 작업, Git, AI가 그 주변에 놓입니다.** 아래 항목은 모두 README와 릴리스 노트에 있는 제작사의 설명입니다.',
        ],
        items: [
          '편집: LaTeX, Typst, Markdown을 지원하며 레이블, 인용, 명령어 자동 완성, 실시간 오류 검사, 개요, Vim과 Emacs 키, 시각 모드를 제공합니다.',
          '컴파일: Tectonic, Typst, Pandoc이 내장되어 있습니다. PDF를 클릭하면 소스로, 소스에서 PDF로 이동하며, 오류를 고치는 동안 마지막으로 성공한 PDF가 계속 표시됩니다.',
          '인용: 입력하면서 Zotero 라이브러리에서 인용하고, 편집기를 벗어나지 않고 arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex를 검색할 수 있습니다.',
          '검사와 그림: 제출 전 검사가 깨진 참조, 누락된 그림, 임베드되지 않은 글꼴, 접근성 결함을 찾아냅니다. 다이어그램 작성기는 TikZ, Typst, Mermaid 코드를 작성합니다.',
          'Git과 동기화: 모든 프로젝트는 Git 저장소이며 GitHub, GitLab, Gitea, Forgejo, Codeberg 또는 자체 서버로 푸시할 수 있습니다. 클라우드 동기화는 Dropbox, Google Drive, S3 호환 저장소를 지원합니다.',
          '공동 작업: 직접 호스팅하는 Oleafly Server를 통해 공유 커서, 댓글, 역할, 버전 기록을 제공합니다. Oleafly Server는 별도의 AGPL-3.0 프로젝트입니다.',
          'AI: Claude Code, Codex CLI, Gemini CLI, OpenCode 같은 에이전트 목록이 있으며 프로젝트를 검토 가능한 diff로 편집합니다. 호스팅 또는 로컬 모델용 채팅 어시스턴트, 번들 연구 스킬, 외부 AI 클라이언트용 로컬 MCP 서버도 있습니다.',
          '실험 기능: 프로젝트의 별도 사본에서 문헌 검토나 수정 작업을 실행하는 연구 작업은 기본적으로 꺼져 있으며, 0.4.12 노트에는 실험으로 "Notes" 지식 베이스가 추가되었습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**제작사에 따르면 문서는 사용자의 디스크에 남고 네트워크는 사용자가 고른 동작에만 쓰입니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았으므로 이를 확인할 수 없습니다.**',
          '개인정보 페이지는 앱에 계정이 필요 없고 텔레메트리가 없으며 제작사로 연락하지 않는다고, 그리고 AI 기능은 사용자가 자신의 키를 추가하기 전까지 꺼져 있고 텍스트는 사용자의 기기에서 선택한 제공업체로 전달된다고 밝힙니다. README는 릴리스 빌드가 시작할 때 업데이트를 확인한다고 덧붙이며, 그 밖에 네트워크를 쓰는 항목으로 서버와의 공유, 클라우드 동기화, 문헌 및 DOI 조회, GitHub, 호스팅 AI 제공업체, 연결한 MCP 서버, 엔진·패키지·템플릿의 선택적 다운로드를 나열합니다.',
          '호스팅 AI 제공업체나 클라우드 에이전트를 쓰면 텍스트가 해당 업체의 약관에 따라 그쪽으로 전송됩니다. README에 따르면 로컬 Ollama 모델은 AI 트래픽을 사용자의 컴퓨터 안에 둡니다. 공동 작업 서버를 쓰면 프로젝트 파일이 소속 조직이 운영하는 서버로 전송됩니다.',
          '코드는 AGPL-3.0으로 공개되어 있으므로 데이터 흐름을 감사할 수 있습니다. Oleafly Server 보안 페이지는 제작사가 작성했고 계획 중인 기능을 따로 나열합니다. PromptQuorum은 그 보안 관련 주장과 언급된 독립 검토를 검증하지 않았습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Oleafly는 LaTeX나 Typst로 글을 쓰며 무료 오픈소스 데스크톱 작업 공간을 원하는 연구자와 학생에게 적합합니다.**',
        ],
        items: [
          '소스, PDF, 참고문헌, Git 기록을 앱 하나에 모으려는 논문과 학위 논문 저자.',
          '호스팅 편집기 대신 자체 공동 작업 서버를 운영하려는 연구실과 학과.',
          '문서에서 AI 에이전트를 시험해 보고 싶지만 모든 변경을 검토할 수 있고 AI를 선택 사항으로 두고 싶은 작성자.',
          '코드와 라이선스가 공개된 프로젝트를 선호하는 독자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Oleafly가 맞지 않는 경우가 있으며, 확인되지 않은 세부 사항도 여럿 남아 있습니다.**',
        ],
        items: [
          '적합하지 않음: 지금 완성되고 안정적인 제품이 필요한 분. README는 프로젝트를 베타로 표기하며 저장소는 2026년 7월에 만들어졌습니다.',
          '적합하지 않음: 호스팅할 서버가 없는 분. 실시간 공동 작업에는 사용자나 소속 조직이 운영하는 Oleafly Server가 필요합니다.',
          '미확인: 컴파일 품질, 편집기 속도, 공동 작업 동작, 동기화 안정성, AI 편집의 품질. PromptQuorum은 앱을 실행하지 않았습니다.',
          '미확인: 시작 시 업데이트 확인과 함께 나오는 "텔레메트리 없음", "제작사로 연락하지 않음"이라는 설명. PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다.',
          '미확인: macOS와 Windows 설치 파일이 운영체제 기준으로 서명 또는 공증되었는지, 그리고 README의 설명 이상으로 AI 에이전트가 어떻게 설정되는지.',
          '미확인: 템플릿과 번들 스킬에 대한 제작사의 수치, 그리고 서버 페이지의 보안 관련 주장.',
          '미확인: 누가 프로젝트를 운영하는지, 어느 나라에 기반을 두는지, 몇 명이 쓰는지. 회사, 사업자 정보, 이용 약관 페이지는 찾지 못했고 PromptQuorum은 독립적인 리뷰도 찾아보지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Oleafly와 대안 비교',
        itemHeadings: true,
        content: [
          '**Oleafly는 연구 글쓰기와 AI 지원 연구를 위한 다른 데스크톱 도구와 겹치는 부분이 있으나, PromptQuorum은 이들과 직접 비교해 보지 않았습니다.** 아래 도구는 디렉터리에 있으며 각자의 리뷰를 바탕으로 설명합니다.',
        ],
        columns: ['도구', '출처에 기재된 내용'],
        rows: [
          { '도구': 'Oleafly', '출처에 기재된 내용': 'AGPL-3.0, Mac/Windows/Linux, LaTeX·Typst·Markdown 편집기' },
          { '도구': '[Open Science Desktop](/ko/power-local-llm/open-science-desktop-review)', '출처에 기재된 내용': 'MIT, Mac/Windows/Linux, AI 연구 워크벤치' },
          { '도구': '[PapersGPT](/ko/power-local-llm/papersgpt-review)', '출처에 기재된 내용': 'AGPL-3.0, Zotero 플러그인, 논문과 채팅' },
          { '도구': '[SoloMD](/ko/power-local-llm/solomd-review)', '출처에 기재된 내용': 'MIT, 데스크톱과 모바일, AI 채팅이 있는 Markdown 노트' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Oleafly를 쓰려면 계정이 필요합니까?',
            a: 'README에 따르면 Oleafly 계정은 필요하지 않습니다. 어디에도 로그인하지 않고 글쓰기, 컴파일, Git을 사용할 수 있습니다. 공동 작업은 GitHub나 OpenID Connect 제공업체로 연구실 서버에 로그인하고, 클라우드 동기화는 클라우드 저장소에 로그인합니다.',
          },
          {
            q: '여러 저자가 같은 논문을 동시에 편집할 수 있습니까?',
            a: '제작사에 따르면 가능하며, 사용자나 소속 조직이 호스팅하는 Oleafly Server를 통해 공유 커서, 댓글, 역할을 제공합니다. PromptQuorum은 공동 작업을 테스트하지 않았으며 서버는 별도의 프로젝트입니다.',
          },
          {
            q: 'Oleafly는 어떤 AI를 쓸 수 있습니까?',
            a: 'README에 따르면 로그인해서 쓰는 Claude Code, Codex CLI, Gemini CLI, OpenCode 같은 코딩 에이전트, 호스팅 제공업체, OpenAI 호환 엔드포인트, 로컬 Ollama 모델입니다. AI는 선택 사항이며 AI의 모든 변경은 검토하고 되돌릴 수 있는 diff로 표시됩니다.',
          },
          {
            q: '오프라인에서도 작동합니까?',
            a: 'README에 따르면 글쓰기, 컴파일, Git, 검사는 사용자의 컴퓨터에서 실행되며, 내장 엔진이 필요한 패키지를 갖추면 LaTeX 빌드도 오프라인에서 작동합니다. 클라우드 동기화, 문헌 조회, 호스팅 AI에는 연결이 필요합니다.',
          },
          {
            q: 'Oleafly는 얼마나 자주 업데이트됩니까?',
            a: 'GitHub에는 2026년 11월 8일의 버전 0.4.11과 2026년 11월 13일의 0.4.12가 올라와 있고, 메인 브랜치에는 2026년 11월 17일까지 커밋이 있습니다. README는 프로젝트를 베타로 표기합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**LaTeX나 Typst로 논문을 쓰면서 Git, Zotero, 선택형 AI 에이전트를 갖춘 무료 오픈소스 데스크톱 편집기를 원한다면 Oleafly는 살펴볼 만합니다.**',
          '지면상 폭넓게 다루며 개발도 활발합니다. 2026년 11월 13일에 버전 0.4.12, 2026년 11월 17일에 커밋이 있었습니다. AI는 선택 사항이고, README에 따르면 모든 변경은 되돌릴 수 있는 diff로 나타납니다.',
          '절충점도 분명합니다. 프로젝트는 베타이고 몇 달밖에 되지 않았으며, 회사나 사업자 정보, 이용 약관 페이지는 찾지 못했고, 실시간 공동 작업에는 직접 호스팅하는 서버가 필요하며, PromptQuorum은 아무것도 테스트하지 않았습니다. 의존하기 전에 프로젝트 사본으로 먼저 써 보고, 투고할 저널의 템플릿이 컴파일되는지 확인하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Oleafly 웹사이트](https://oleafly.com) — 기능과 링크, 2026년 11월 18일 확인.',
          '[개인정보 페이지](https://oleafly.com/privacy) — 데이터와 AI에 대한 제작사의 설명, 2026년 11월 18일 확인.',
          '[Oleafly Server 보안 페이지](https://oleafly.com/security) — 서버의 현재 기능과 계획, 2026년 11월 18일 확인.',
          '[GitHub 저장소](https://github.com/Oleafly/Oleafly) — 라이선스, 생성일, 마지막 커밋, 2026년 11월 18일 확인.',
          '[README](https://github.com/Oleafly/Oleafly#readme) — 기능, 플랫폼, FAQ, 2026년 11월 18일 확인.',
          '[GitHub 릴리스](https://github.com/Oleafly/Oleafly/releases) — 릴리스 날짜, 패키지, 0.4.12 노트, 2026년 11월 18일 확인.',
          '[Oleafly Server 저장소](https://github.com/Oleafly/oleafly-server) — 별도의 공동 작업 서버, 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Open Science Desktop 리뷰](/ko/power-local-llm/open-science-desktop-review) — 에이전트 채팅과 노트북을 갖춘 데스크톱 AI 연구 워크벤치.',
          '[PapersGPT 리뷰](/ko/power-local-llm/papersgpt-review) — 논문 라이브러리와 채팅하는 Zotero 플러그인.',
          '[SoloMD 리뷰](/ko/power-local-llm/solomd-review) — 데스크톱과 모바일에서 쓰는 AI 채팅 Markdown 노트.',
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
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/oleafly-review-hero-ar.webp',
    title: 'مراجعة Oleafly: محرر LaTeX وTypst مجاني ومفتوح المصدر مع وكلاء ذكاء اصطناعي',
    seoTitle: 'مراجعة Oleafly: محرر LaTeX وTypst مجاني ومفتوح المصدر',
    intro:
      'Oleafly 0.4.12 محرر مكتبي مجاني بترخيص AGPL-3.0 لكتابة الأبحاث العلمية بصيغ LaTeX وTypst وMarkdown. وبحسب ملف README، يجمّع المستند على جهازك، ويحفظ كل مشروع في مستودع Git، ويتيح الاقتباس من Zotero، ويمكّن المؤلفين المشاركين من التحرير معًا عبر خادم تستضيفه بنفسك، ويمكنه العمل مع وكلاء ذكاء اصطناعي مثل Claude Code وCodex أو مع نموذج Ollama محلي. تستند هذه المراجعة إلى الموقع الرسمي ومستودع GitHub مع ملاحظات الإصدار وصفحة Oleafly Server، وقد روجعت في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'Oleafly محرر مكتبي مجاني بترخيص AGPL-3.0 لصيغ LaTeX وTypst وMarkdown مع Git وZotero وتعاون ذاتي الاستضافة ووكلاء ذكاء اصطناعي اختياريين. ما تم تأكيده.',
    twitterDescription:
      'Oleafly: محرر مكتبي مجاني ومفتوح المصدر لأبحاث LaTeX وTypst وMarkdown مع Git وZotero وخادم تعاون ذاتي الاستضافة ووكلاء ذكاء اصطناعي اختياريين. نسخة تجريبية. ما تم تأكيده.',
    audience:
      'الباحثون والطلاب الذين يكتبون الأبحاث أو الرسائل بصيغ LaTeX أو Typst أو Markdown، والمختبرات التي تريد استضافة خادم التعاون الخاص بها، ومن يريد مساعدة الذكاء الاصطناعي في محرر مستندات دون حساب في Oleafly',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Oleafly',
    targetKeywords: [
      'مراجعة Oleafly',
      'محرر LaTeX بالذكاء الاصطناعي',
      'محرر LaTeX مفتوح المصدر لسطح المكتب',
      'محرر Typst',
      'LaTeX تعاوني ذاتي الاستضافة',
      'أداة ذكاء اصطناعي للكتابة البحثية',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Oleafly محرر مكتبي مجاني ومفتوح المصدر (AGPL-3.0) لأبحاث LaTeX وTypst وMarkdown، يجمّع المستند على جهازك ويضيف Git وZotero وتعاونًا مباشرًا ذاتي الاستضافة ووكلاء ذكاء اصطناعي اختياريين.** يُثبَّت من حزم إصدارات GitHub لأنظمة macOS وWindows وLinux، ويُوصَف بأنه نسخة تجريبية. لم تختبره PromptQuorum، ولم تجد شركة مشغِّلة أو بيانات قانونية أو صفحة شروط.',
    quickAnswerTop: {
      ar: {
        question: 'ما Oleafly ولمن هو مناسب؟',
        answer:
          'Oleafly محرر مكتبي للكتابة البحثية يُطوَّر علنًا على GitHub. يناسب الباحثين والطلاب الذين يريدون المصدر وملف PDF والمراجع وسجل Git في مكان واحد، مع الذكاء الاصطناعي كإضافة اختيارية.',
        bullets: [
          'مجاني بترخيص AGPL-3.0؛ تتوفر مثبّتات لأنظمة macOS وWindows وLinux، ويصف ملف README المشروع بأنه تجريبي.',
          'يكتب LaTeX وTypst وMarkdown؛ تأتي Tectonic وTypst وPandoc مدمجة، فيُجمَّع المشروع الجديد دون تثبيت TeX منفصل.',
          'التعاون المباشر يحتاج إلى Oleafly Server تستضيفه أنت أو مختبرك؛ ويمكن للمزامنة السحابية استخدام Dropbox أو Google Drive أو تخزين متوافق مع S3.',
          'الذكاء الاصطناعي اختياري: صِل وكلاء مثل Claude Code أو Codex، أو مزوّدًا مستضافًا، أو أي نقطة اتصال متوافقة مع OpenAI، أو نموذج Ollama محليًا.',
          'أُنشئ المستودع في يوليو 2026، وصدر الإصدار 0.4.12 في 13 نوفمبر 2026.',
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
            text: 'Oleafly محرر مكتبي مجاني ومفتوح المصدر لأبحاث LaTeX وTypst وMarkdown، يجمّع المستند على جهازك ويضيف Git وZotero وتعاونًا على خادمك الخاص ووكلاء ذكاء اصطناعي اختياريين.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله مساحة كتابة لبحث علمي: النص وملف PDF والمراجع وسجل الإصدارات كلها في تطبيق واحد على جهازك. يمكنك طلب المساعدة من وكيل ذكاء اصطناعي، لكن ذلك ليس إلزاميًا، ويظهر كل تعديل يقترحه على هيئة فروقات (diff).',
          },
        ],
        items: [
          'نزّل مثبّتًا من صفحة إصدارات GitHub: ملف DMG لنظام macOS، وMSI أو EXE لنظام Windows، وAppImage أو DEB أو RPM لنظام Linux.',
          'بحسب README، تعمل الكتابة والتجميع وGit والفحوص على جهازك؛ وتستخدم ميزات مثل المزامنة السحابية أو الذكاء الاصطناعي المستضاف أو البحث في الأدبيات الشبكة عند تفعيلها، كما تتحقق نسخ الإصدار من وجود تحديث عند بدء التشغيل.',
          'يعمل التعاون المباشر عبر Oleafly Server يستضيفه مختبرك أو جامعتك؛ ولم تختبره PromptQuorum.',
          'بحسب README وصفحة الخصوصية، الذكاء الاصطناعي اختياري ويبقى متوقفًا حتى تصل وكيلًا أو مزوّدًا أو نموذج Ollama محليًا؛ وتكاليف المزوّدين المستضافين يحاسب عليها هؤلاء المزوّدون.',
          'يصف المشروع نفسه بأنه تجريبي ولم تختبره PromptQuorum، لذا فإن جودة التجميع وسلوك التعاون ونتائج الذكاء الاصطناعي لم يُتحقَّق منها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تذكر صفحة الخصوصية أن التطبيق بلا حساب وبلا قياس عن بُعد، بينما يضيف ملف README أن نسخ الإصدار تتحقق من وجود تحديث عند بدء التشغيل. لم تفحص PromptQuorum حركة الشبكة، ولذلك لا تستطيع تأكيد أي من العبارتين بما يتجاوز ما تكتبه الجهة المطوِّرة.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Oleafly محرر مكتبي بترخيص AGPL-3.0 للكتابة البحثية بصيغ LaTeX وTypst وMarkdown، صدر لأنظمة macOS وWindows وLinux.**',
          'يُطوَّر علنًا على [github.com/Oleafly/Oleafly](https://github.com/Oleafly/Oleafly) ويصفه مستودعه بأنه بيئة تطوير مفتوحة المصدر وبديل لمحررات LaTeX عبر الإنترنت. أُنشئ المستودع في يوليو 2026، وظهر الإصدار 0.4.12 في 13 نوفمبر 2026، وكان آخر إيداع على الفرع الرئيسي في 17 نوفمبر 2026، فالتطوير نشط ولا ينطبق تحذير المشروع المهجور. يذكر ملف README اسم Prajwal Murthy ومساهمين آخرين؛ ولم تجد PromptQuorum شركة أو عنوانًا أو بيانات قانونية، ولذلك لا تستطيع تحديد البلد الذي يقع فيه المشروع.',
          'بحسب ملف README، يجمع Oleafly في مكان واحد مصدر المشروع وملف PDF والاقتباسات والأشكال والفحوص وسجل Git. ويذكر تعاونًا فوريًا عبر خادم ذاتي الاستضافة، ومزامنة سحابية، واقتباسات من Zotero، وبحثًا في الأدبيات عبر فهارس علمية، وفحوصًا قبل التقديم، ومحرر رسوم تخطيطية، ومعرض قوالب. ويعمل جانب الذكاء الاصطناعي عبر وكلاء تسجّل الدخول إليهم، ومساعد دردشة متصل بمزوّد أو بنموذج Ollama محلي، ومهام بحثية اختيارية تُنفَّذ في نسخة منفصلة من المشروع.',
          'لم تشغّل PromptQuorum التطبيق ولم تتحقق من جودة التجميع أو سرعة المحرر أو سلوك التعاون أو جودة مخرجات الذكاء الاصطناعي.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**تثبّت Oleafly من الحزم الموجودة في صفحة إصدارات GitHub، وهي الصفحة التي يربط بها ملف README لكل منصة.**',
          'يعرض الإصدار v0.4.12 ملف DMG لنظام macOS على Apple Silicon وIntel، وملفي MSI وEXE للتثبيت على Windows، وحزم AppImage وDEB وRPM لنظام Linux على x86_64 وARM64. وتتضمن الإصدارات أيضًا ملفات توقيع لأداة التحديث المدمجة، التي يقول README إنها تتحقق من التوقيع قبل تثبيت أي شيء.',
        ],
        columns: ['الطريقة', 'كيف تحصل عليه'],
        rows: [
          { 'الطريقة': 'macOS (Apple Silicon)', 'كيف تحصل عليه': 'DMG' },
          { 'الطريقة': 'macOS (Intel)', 'كيف تحصل عليه': 'DMG (x64)' },
          { 'الطريقة': 'Windows (x86_64)', 'كيف تحصل عليه': 'MSI أو مثبّت EXE' },
          { 'الطريقة': 'Linux (x86_64, ARM64)', 'كيف تحصل عليه': 'AppImage أو DEB أو RPM' },
          { 'الطريقة': '[الشيفرة المصدرية](https://github.com/Oleafly/Oleafly)', 'كيف تحصل عليه': 'البناء من المصدر (راجع دليل التطوير)' },
        ],
        note: 'نزّل من [صفحة إصدارات GitHub](https://github.com/Oleafly/Oleafly/releases/latest). لم تشغّل PromptQuorum المثبّتات ولم تتحقق مما إذا كان نظام التشغيل يعدّها موقَّعة أو موثَّقة. أعادت صفحات الموقع الخاصة بالشروط والأسعار والتعريف والبيانات القانونية والتواصل الرمز «404» عند الفحص.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يحتاج Oleafly إلى جهاز حديث بنظام macOS أو Windows أو Linux؛ ولا ينشر ملف README حدًا أدنى للذاكرة أو لوحدة GPU.**',
          'القائمة مأخوذة من ملف README. نماذج الذكاء الاصطناعي المحلية اختيارية وليست جزءًا من التطبيق، وتعتمد احتياجاتها من العتاد على النموذج الذي تشغّله. لم تقِس PromptQuorum استهلاك الذاكرة ولا سرعة التجميع.',
        ],
        columns: ['البند', 'القيمة المعلنة'],
        rows: [
          { 'البند': 'macOS', 'القيمة المعلنة': 'Apple Silicon أو Intel (DMG)' },
          { 'البند': 'Windows', 'القيمة المعلنة': 'x86_64 (MSI أو EXE)' },
          { 'البند': 'Linux', 'القيمة المعلنة': 'x86_64 أو ARM64، وglibc 2.35+' },
          { 'البند': 'المُجمِّعات', 'القيمة المعلنة': 'Tectonic وTypst وPandoc مدمجة' },
          { 'البند': 'TeX الكامل', 'القيمة المعلنة': 'اختياري: TeX Live أو MacTeX أو MiKTeX أو TinyTeX' },
          { 'البند': 'الذاكرة وGPU', 'القيمة المعلنة': 'غير منشورة' },
        ],
        note: 'تحتاج حزم Linux إلى glibc 2.35 أو أحدث، وهو ما يربطه README بنظامي Ubuntu 22.04 وDebian 12 وما بعدهما. وبحسب README، يستخدم الانتقال بالنقر في مشاريع Typst أداة Tinymist ويتطلب Typst 0.13 أو أحدث.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**Oleafly في الأساس محرر ومصدِّر لوثائق البحث العلمي؛ ويحيط به التعاون وGit والذكاء الاصطناعي.** كل ما يلي ادعاءات من الجهة المطوِّرة مأخوذة من README وملاحظات الإصدار.',
        ],
        items: [
          'التحرير: صيغ LaTeX وTypst وMarkdown مع إكمال تلقائي للتسميات والاقتباسات والأوامر، وفحص فوري للأخطاء، ومخطط للمستند، واختصارات Vim وEmacs، ووضع مرئي.',
          'التجميع: تأتي Tectonic وTypst وPandoc مدمجة؛ والنقر في ملف PDF ينقلك إلى المصدر والعكس؛ ويبقى آخر ملف PDF سليم ظاهرًا أثناء إصلاح الخطأ.',
          'الاقتباسات: اقتبس من مكتبة Zotero أثناء الكتابة، وابحث في arXiv وSemantic Scholar وCrossref وPubMed وOpenAlex دون مغادرة المحرر.',
          'الفحوص والأشكال: يكتشف الفحص المسبق المراجع المكسورة والأشكال المفقودة والخطوط غير المضمَّنة وثغرات إمكانية الوصول؛ ويكتب محرر الرسوم التخطيطية شيفرة TikZ أو Typst أو Mermaid.',
          'Git والمزامنة: كل مشروع مستودع Git يمكنك دفعه إلى GitHub أو GitLab أو Gitea أو Forgejo أو Codeberg أو خادمك الخاص؛ وتدعم المزامنة السحابية Dropbox وGoogle Drive وتخزينًا متوافقًا مع S3.',
          'التعاون: مؤشرات مشتركة وتعليقات وأدوار وسجل إصدارات عبر Oleafly Server الذي تستضيفه؛ وOleafly Server مشروع منفصل بترخيص AGPL-3.0.',
          'الذكاء الاصطناعي: فهرس وكلاء مثل Claude Code وCodex CLI وGemini CLI وOpenCode تعدّل المشروع على هيئة فروقات قابلة للمراجعة، ومساعد دردشة للنماذج المستضافة أو المحلية، ومهارات بحثية مرفقة، وخادم MCP محلي لعملاء الذكاء الاصطناعي الخارجيين.',
          'تجريبي: المهام البحثية التي تُنفّذ مراجعة أدبيات أو جولة تنقيح في نسخة منفصلة من المشروع متوقفة افتراضيًا، وتضيف ملاحظات 0.4.12 قاعدة معرفة «Notes» كتجربة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**بحسب الجهة المطوِّرة، تبقى المستندات على قرصك ولا تُستخدم الشبكة إلا للإجراءات التي تختارها؛ ولم تفحص PromptQuorum حركة الشبكة ولا تستطيع تأكيد ذلك.**',
          'تذكر صفحة الخصوصية أن التطبيق لا يحتاج إلى حساب، وليس فيه قياس عن بُعد، ولا يتصل بالجهة المطوِّرة، وأن ميزات الذكاء الاصطناعي تبقى متوقفة حتى تضيف مفتاحك الخاص، وينتقل النص من جهازك إلى المزوّد الذي اخترته. ويضيف README أن نسخ الإصدار تتحقق من وجود تحديث عند بدء التشغيل، ويسرد ما يستخدم الشبكة أيضًا: المشاركة مع خادمك، والمزامنة السحابية، واستعلامات الأدبيات وDOI، وGitHub، ومزوّدو الذكاء الاصطناعي المستضافون، وخوادم MCP التي تصلها، وتنزيلات اختيارية للمحركات والحزم والقوالب.',
          'إذا استخدمت مزوّد ذكاء اصطناعي مستضافًا أو وكيلًا سحابيًا، فإن نصك يذهب إلى ذلك المزوّد وفق شروطه؛ أما نموذج Ollama المحلي فيُبقي حركة الذكاء الاصطناعي على جهازك بحسب README. وإذا استخدمت خادم تعاون، فإن ملفات مشروعك تذهب إلى الخادم الذي تديره مؤسستك.',
          'الشيفرة بترخيص AGPL-3.0 وعلنية، ولذلك يمكن تدقيق تدفق البيانات. صفحة أمان Oleafly Server كتبتها الجهة المطوِّرة وتفصل الميزات المخطط لها؛ ولم تتحقق PromptQuorum من ادعاءات الأمان فيها ولا من المراجعات المستقلة التي تذكرها.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Oleafly الباحثين والطلاب الذين يكتبون بصيغتي LaTeX وTypst ويريدون مساحة عمل مكتبية مجانية ومفتوحة المصدر.**',
        ],
        items: [
          'مؤلفو الأبحاث والرسائل الذين يريدون المصدر وملف PDF والمراجع وسجل Git في تطبيق واحد.',
          'المختبرات والأقسام التي تفضّل استضافة خادم التعاون الخاص بها بدل استخدام محرر مستضاف.',
          'الكتّاب الذين يريدون تجربة وكلاء الذكاء الاصطناعي على مستند مع إبقاء كل تعديل قابلًا للمراجعة والذكاء الاصطناعي اختياريًا.',
          'القرّاء الذين يفضّلون مشروعًا شيفرته وترخيصه علنيان.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب Oleafly بعض الحالات، وتبقى تفاصيل عدة دون تحقق.**',
        ],
        items: [
          'غير مناسب: من يحتاج اليوم إلى منتج مكتمل ومستقر. يصف README المشروع بأنه تجريبي، وقد أُنشئ المستودع في يوليو 2026.',
          'غير مناسب: من ليس لديه خادم يستضيفه، لأن التعاون المباشر يحتاج إلى Oleafly Server تديره أنت أو مؤسستك.',
          'لم يُتحقَّق منه: جودة التجميع وسرعة المحرر وسلوك التعاون وموثوقية المزامنة وجودة تعديلات الذكاء الاصطناعي. لم تشغّل PromptQuorum التطبيق.',
          'لم يُتحقَّق منه: عبارتا «بلا قياس عن بُعد» و«لا يتصل بالجهة المطوِّرة» إلى جانب التحقق من التحديثات عند البدء؛ ولم تفحص PromptQuorum حركة الشبكة.',
          'لم يُتحقَّق منه: هل مثبّتات macOS وWindows موقَّعة أو موثَّقة من نظام التشغيل، وكيف تُهيَّأ وكلاء الذكاء الاصطناعي بما يتجاوز ما يصفه README.',
          'لم يُتحقَّق منه: أرقام الجهة المطوِّرة عن القوالب والمهارات المرفقة، وادعاءات الأمان في صفحة الخادم.',
          'لم يُتحقَّق منه: من يدير المشروع، وفي أي بلد يقع، وكم شخصًا يستخدمه. لم تُعثر على شركة أو بيانات قانونية أو صفحة شروط، ولم تبحث PromptQuorum عن مراجعات مستقلة.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Oleafly مقابل البدائل',
        itemHeadings: true,
        content: [
          '**يتداخل Oleafly مع أدوات مكتبية أخرى للكتابة البحثية والبحث بمساعدة الذكاء الاصطناعي؛ ولم تقارنه PromptQuorum بها عمليًا.** الأدوات التالية موجودة في الدليل وتُوصَف اعتمادًا على مراجعاتها الخاصة.',
        ],
        columns: ['الأداة', 'المذكور في المصادر'],
        rows: [
          { 'الأداة': 'Oleafly', 'المذكور في المصادر': 'AGPL-3.0؛ Mac/Windows/Linux؛ محرر LaTeX وTypst وMarkdown' },
          { 'الأداة': '[Open Science Desktop](/ar/power-local-llm/open-science-desktop-review)', 'المذكور في المصادر': 'MIT؛ Mac/Windows/Linux؛ منصة بحث بالذكاء الاصطناعي' },
          { 'الأداة': '[PapersGPT](/ar/power-local-llm/papersgpt-review)', 'المذكور في المصادر': 'AGPL-3.0؛ إضافة Zotero؛ دردشة مع أبحاثك' },
          { 'الأداة': '[SoloMD](/ar/power-local-llm/solomd-review)', 'المذكور في المصادر': 'MIT؛ سطح المكتب والجوال؛ ملاحظات Markdown مع دردشة ذكاء اصطناعي' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى حساب لاستخدام Oleafly؟',
            a: 'ليس حسابًا في Oleafly بحسب ملف README. يمكنك الكتابة والتجميع واستخدام Git دون تسجيل الدخول إلى أي خدمة. يسجّل التعاون المباشر دخولك إلى خادم مختبرك عبر GitHub أو مزوّد OpenID Connect، وتسجّل المزامنة السحابية دخولك إلى تخزينك السحابي.',
          },
          {
            q: 'هل يستطيع عدة مؤلفين تحرير البحث نفسه في وقت واحد؟',
            a: 'نعم بحسب الجهة المطوِّرة، عبر Oleafly Server تستضيفه أنت أو مؤسستك، مع مؤشرات مشتركة وتعليقات وأدوار. لم تختبر PromptQuorum التعاون، والخادم مشروع منفصل.',
          },
          {
            q: 'أي ذكاء اصطناعي يستطيع Oleafly استخدامه؟',
            a: 'بحسب README: وكلاء برمجة مثل Claude Code وCodex CLI وGemini CLI وOpenCode تسجّل الدخول إليهم، أو مزوّد مستضاف، أو أي نقطة اتصال متوافقة مع OpenAI، أو نموذج Ollama محلي. الذكاء الاصطناعي اختياري، ويظهر كل تعديل منه على هيئة فروقات يمكنك مراجعتها والتراجع عنها.',
          },
          {
            q: 'هل يعمل دون اتصال بالإنترنت؟',
            a: 'بحسب README، تعمل الكتابة والتجميع وGit والفحوص على جهازك، وتعمل عمليات بناء LaTeX دون اتصال بمجرد أن يملك المحرك المدمج الحزم التي يحتاجها. أما المزامنة السحابية واستعلامات الأدبيات والذكاء الاصطناعي المستضاف فتحتاج إلى اتصال.',
          },
          {
            q: 'كم مرة يُحدَّث Oleafly؟',
            a: 'يعرض GitHub الإصدار 0.4.11 في 8 نوفمبر 2026 والإصدار 0.4.12 في 13 نوفمبر 2026، مع إيداعات على الفرع الرئيسي حتى 17 نوفمبر 2026. ويصف README المشروع بأنه تجريبي.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Oleafly نظرة إذا كنت تكتب أبحاثك بصيغتي LaTeX أو Typst وتريد محررًا مكتبيًا مجانيًا ومفتوح المصدر مع Git وZotero ووكلاء ذكاء اصطناعي اختياريين.**',
          'على الورق يغطي الكثير، والتطوير نشط: الإصدار 0.4.12 في 13 نوفمبر 2026 وإيداع في 17 نوفمبر 2026. جانب الذكاء الاصطناعي اختياري، ويقول README إن كل تعديل يظهر على هيئة فروقات يمكنك التراجع عنها.',
          'المقايضات حقيقية: المشروع تجريبي وعمره بضعة أشهر فقط، ولم تُعثر على شركة أو بيانات قانونية أو صفحة شروط، والتعاون المباشر يحتاج إلى خادم تستضيفه، ولم تختبر PromptQuorum أي شيء. جرّبه على نسخة من مشروع قبل أن تعتمد عليه، وتأكد من أن قالب مجلتك يُجمَّع بنجاح.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Oleafly](https://oleafly.com) — الميزات والروابط، روجع في 18 نوفمبر 2026.',
          '[صفحة الخصوصية](https://oleafly.com/privacy) — تصريحات الجهة المطوِّرة عن البيانات والذكاء الاصطناعي، روجعت في 18 نوفمبر 2026.',
          '[صفحة أمان Oleafly Server](https://oleafly.com/security) — ما يفعله الخادم وما هو مخطط له، روجعت في 18 نوفمبر 2026.',
          '[مستودع GitHub](https://github.com/Oleafly/Oleafly) — الترخيص وتاريخ الإنشاء وآخر إيداع، روجع في 18 نوفمبر 2026.',
          '[README](https://github.com/Oleafly/Oleafly#readme) — الميزات والمنصات والأسئلة الشائعة، روجع في 18 نوفمبر 2026.',
          '[إصدارات GitHub](https://github.com/Oleafly/Oleafly/releases) — تواريخ الإصدارات والحزم وملاحظات 0.4.12، روجعت في 18 نوفمبر 2026.',
          '[مستودع Oleafly Server](https://github.com/Oleafly/oleafly-server) — خادم التعاون المنفصل، روجع في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Open Science Desktop](/ar/power-local-llm/open-science-desktop-review) — منصة بحث مكتبية بالذكاء الاصطناعي مع دردشة وكلاء ودفاتر.',
          '[مراجعة PapersGPT](/ar/power-local-llm/papersgpt-review) — إضافة Zotero للدردشة مع مكتبة أبحاثك.',
          '[مراجعة SoloMD](/ar/power-local-llm/solomd-review) — ملاحظات Markdown مع دردشة ذكاء اصطناعي على سطح المكتب والجوال.',
          '[دليل برامج LLM المحلية](/ar/directory) — الكتالوج الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
}

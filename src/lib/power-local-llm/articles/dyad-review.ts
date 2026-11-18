// Dyad Review: Local Open-Source AI App Builder for Your Desktop
// Slug: dyad-review
// Companion to: cline-review, opencode-review, aider-review (adjacent coding tools; no other prompt-to-app builder has a review yet)
// Sources (all read 2026-11-18, no hands-on testing): maker website (homepage, download page, docs overview, FAQ, quickstart), privacy policy and terms,
// GitHub repository, README, LICENSE and src/pro/LICENSE, GitHub API (repo, releases, commits), release v1.23.0. The request came from the site owner, not from the maker.
// Last upstream update 2026-11-17 (last commit on main; latest stable release 2026-11-09) => no stale warning.
// Theme: 'Coding Assistants' (the closest existing canonical theme for a prompt-to-app builder).
// Third-party review sites from the research package (HostAdvice, scored.tools, TechHarry and others) were NOT fetched and are not cited; only primary sources are used.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Coding Assistants',
    heroImage: '/images/dyad-review-hero-en.webp',
    title: 'Dyad Review: Local Open-Source AI App Builder for Your Desktop',
    seoTitle: 'Dyad Review: Local Open-Source AI App Builder, Pricing',
    intro:
      'Dyad is a desktop app that builds web apps from chat prompts and keeps each project as ordinary files on your computer. You choose the AI model: your own API key, a local Ollama or LM Studio model, or hosted models through the paid Dyad Pro plan. This review is based on the maker\'s pages, privacy policy and GitHub repository, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Dyad is a desktop AI app builder that keeps projects as files on your computer, with your API keys or local models. License, plans, privacy, limits.',
    twitterDescription:
      'Dyad builds web apps from prompts on your desktop, with your own API keys or local Ollama and LM Studio models. Apache 2.0 core, paid Pro plans, privacy notes.',
    audience:
      'Non-developers and developers who want to build web apps from prompts on their own computer, and teams weighing an open-source alternative to hosted app builders',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Dyad',
    targetKeywords: [
      'Dyad review',
      'Dyad AI app builder',
      'local open-source AI app builder',
      'Dyad Ollama',
      'Dyad pricing',
      'Dyad privacy',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Dyad is a free, open-source desktop app for macOS, Windows and Linux that builds web apps from chat prompts and stores each project as ordinary files on your computer.** It works with your own API keys or with local models through Ollama and LM Studio. Its FAQ says it builds JavaScript-based apps only, and the result depends on the model you pick.',
    quickAnswerTop: {
      en: {
        question: 'What is Dyad and who is it for?',
        answer:
          'Dyad is a desktop AI app builder: you describe an app in chat, approve the generated code and see a live preview. It suits people who want to build web apps with AI while keeping the code on their own machine and choosing their own model.',
        bullets: [
          'Platforms: macOS (Apple Silicon and Intel), Windows, Linux (.deb, .rpm, AppImage).',
          'Price: free desktop app with no sign-up; optional Dyad Pro and Dyad Max plans.',
          'License: Apache 2.0, except the src/pro folder under a fair-source license.',
          'Models: your own API keys, local Ollama or LM Studio, or hosted models via Dyad Pro.',
          'Database and deploy: Supabase, Neon, GitHub and Vercel integrations.',
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
      { label: 'Limits and What We Could Not Verify', anchor: 'who-should-not-use' },
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
            text: 'Dyad is a desktop app that turns chat prompts into web apps stored as normal project files on your computer, using the AI model you choose, including local Ollama and LM Studio models.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as an AI app builder that runs on your own machine instead of in a hosted service. Your code stays in a folder you control, and where your prompts go depends on the model you connect.',
          },
        ],
        items: [
          'The download page offers an installer or package for macOS, Windows and Linux; the quickstart says Node.js must be installed separately.',
          'The code outside the src/pro folder is Apache 2.0; src/pro is fair-source under the Functional Source License 1.1.',
          'With your own API key, prompts and code go straight to the model provider; with a local model they stay on your device (privacy policy).',
          'Dyad Pro routes requests through Dyad\'s servers to reach hosted models, and the policy says content may be logged in limited cases.',
          'PromptQuorum has not tested the app. Dyad\'s own FAQ warns that small local models may not follow its instructions.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI-generated code can contain bugs and security flaws. Review what Dyad writes before you publish an app that handles real user data. This is general information, not legal or security advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Dyad is an AI app builder that runs as a desktop program, with the project kept as files on your computer.**',
          'The app is made by Dyad Tech, Inc.; the repository\'s fair-source license file names it as copyright holder, and Will Chen is described on the homepage as the creator. The latest stable release is version 1.23.0, published on 9 November 2026. A beta, 1.24.0-beta.1, followed on 13 November 2026, and the repository\'s last commit on its main branch was on 17 November 2026, so development is ongoing and no stale-project warning applies.',
          'You describe an app in a chat, approve the code Dyad generates and see a preview beside the chat. The README describes it as a local alternative to Lovable, v0 and Bolt, and the homepage says projects can be imported from existing repositories, edited in VS Code and exported as normal code. The homepage graphic mentions standard Next.js, but the quickstart does not say which framework the generated apps use.',
          'These descriptions are maker statements. PromptQuorum has not run the app and has not measured how reliable the generated apps are.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install Dyad with a normal download from the official website, and no sign-up is required for the free app.**',
          'The download page offers a stable channel and a beta channel; the page says the beta gets early features and may be less stable. The quickstart says Node.js, the JavaScript runtime that runs your apps, must be installed separately, and that Windows may show a Microsoft warning where you click "More info" and then "Run anyway". The v1.23.0 GitHub release lists a Windows installer, a .deb, an .rpm, an AppImage and macOS .zip files.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[macOS](https://www.dyad.sh/download)', 'How to get it': 'Download for Apple Silicon (M1+) or Intel' },
          { 'Platform': '[Windows](https://www.dyad.sh/download)', 'How to get it': 'Download and run the installer' },
          { 'Platform': '[Linux](https://www.dyad.sh/download)', 'How to get it': '.deb, .rpm or AppImage' },
          { 'Platform': '[Website](https://www.dyad.sh)', 'How to get it': 'Official site, docs and pricing' },
          { 'Platform': '[Privacy policy](https://www.dyad.sh/docs/policies/privacy-policy)', 'How to get it': 'Maker\'s policy, last updated June 22, 2026' },
          { 'Platform': '[GitHub](https://github.com/dyad-sh/dyad)', 'How to get it': 'Source code and release downloads' },
        ],
        note: 'No hardware figures are stated by the maker; its FAQ says that if you can run Node.js you can use Dyad, and suggests a hosted model if your computer is not powerful.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Dyad combines a chat-driven builder with model choice and a few built-in integrations.** All items below are maker claims from the website, docs and FAQ.',
        ],
        items: [
          'Chat-to-app building with a preview, with the code stored as files you can open in VS Code.',
          'Model choice: OpenAI, Anthropic, Google, Ollama, LM Studio and others, switchable at any time.',
          'Supabase or Neon database connection with schemas, migrations and authentication, set up in a few clicks.',
          'One-click deployment to GitHub and Vercel, or your own cloud.',
          'A built-in security scan that the maker says checks for issues such as injection and misconfiguration.',
          'MCP support, so you can plug in tools such as Chrome DevTools or web browsing.',
          'Dyad Pro adds extra modes for large codebases and Smart Context, per the FAQ.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**Where your data goes depends on how you connect a model, according to the maker\'s privacy policy.**',
          'In the free desktop app you use your own API keys or local models. With an API key, the policy says prompts and code are sent directly to the model provider; with a local model everything stays on your device; in both cases data never passes through Dyad\'s servers.',
          'With Dyad Pro, prompts and code are proxied through Dyad\'s servers to hosted models, and the policy says content may be logged temporarily in limited cases such as abuse or outage investigation. It also says Dyad never uses your data to train its own models and that providers do not train on it, except models labelled in the model interface as allowing provider training.',
          'Telemetry is opt-in, uses PostHog and, per the policy, excludes chat messages, prompts and code. The optional Upload Chat Session feature sends transcripts and parts of your codebase for support and is deleted after about one month. PromptQuorum has not verified these statements.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Dyad fits people who want AI-built web apps without handing the code to a hosted builder.**',
        ],
        items: [
          'Non-developers who want to turn an idea into a working web app and can set up Node.js and an API key.',
          'Developers who want a prompt-to-app tool whose output they can edit in VS Code and push to GitHub.',
          'Anyone who wants to try local Ollama or LM Studio models for app building and accepts that results vary by model.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limits and What We Could Not Verify',
        content: [
          '**Dyad has stated limits, and several details remain unverified.**',
        ],
        items: [
          'Stated limit: per its FAQ, Dyad supports only JavaScript-based apps, including hybrid mobile apps built with web technology such as React. It does not support PHP, Ruby or native Swift and Kotlin apps.',
          'Stated limit: the FAQ says small local models may not follow Dyad\'s instructions and can produce bad output, and free API keys often have low token limits that cause context errors on larger apps.',
          'Not a fit: anyone who needs a hosted service with a preview URL and no local setup; Dyad runs on your machine and needs Node.js.',
          'Unverified: how reliable, secure or maintainable the generated apps are. PromptQuorum has not built apps with Dyad.',
          'Unverified: hardware needs. No RAM or GPU figure is stated, and the demand depends on the model you use.',
          'Unverified: the company\'s street address and city. The privacy policy says Dyad is a U.S. company with infrastructure in the U.S., but gives no address; the terms name no legal entity.',
          'Unverified: the pricing card on the homepage lists macOS and Windows for the free app, while the download page also offers Linux builds.',
          'Not checked: independent reviews and user reports. The maker\'s testimonials on its homepage are its own selection.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Dyad vs Alternatives',
        itemHeadings: true,
        content: [
          '**Dyad\'s own docs and README position it against hosted AI app builders. PromptQuorum has not compared it with them hands-on.** The comparisons below repeat what Dyad\'s documentation says; no other prompt-to-app builder has a PromptQuorum review yet.',
        ],
        columns: ['Tool', 'Noted in Dyad docs'],
        rows: [
          { 'Tool': 'Dyad', 'Noted in Dyad docs': 'Local, open-source, free desktop app' },
          { 'Tool': '[Lovable](https://lovable.dev)', 'Noted in Dyad docs': 'Named as a product Dyad is an alternative to' },
          { 'Tool': '[v0](https://v0.dev)', 'Noted in Dyad docs': 'Named as a product Dyad is an alternative to' },
          { 'Tool': '[Bolt.new](https://bolt.new)', 'Noted in Dyad docs': 'Named as a product Dyad is an alternative to' },
          { 'Tool': '[bolt.diy](https://github.com/stackblitz-labs/bolt.diy)', 'Noted in Dyad docs': 'Described as another open-source builder you run yourself' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is Dyad free?',
            a: 'The desktop app is free and needs no sign-up, per the homepage. You pay your AI provider if you use a paid API key. Optional plans add hosted credits: Dyad Pro is $20/month with 200 AI credits, and Dyad Max is $79/month with 900 credits.',
          },
          {
            q: 'Can Dyad use local models such as Ollama and LM Studio?',
            a: 'Yes, per the maker; both are named on its homepage. The FAQ advises a larger local model if your machine can run it, because small models may not follow instructions.',
          },
          {
            q: 'Do I own the code Dyad generates?',
            a: 'The homepage says you can export clean, runnable code with no lock-in. The terms do not address ownership of generated code, so read them before commercial use. This is not legal advice.',
          },
          {
            q: 'Which operating systems does it support?',
            a: 'macOS on Apple Silicon and Intel, Windows and Linux, according to the download page. Node.js has to be installed separately.',
          },
          {
            q: 'What is the difference between the stable and beta releases?',
            a: 'The download page describes the beta as more frequent updates with early features that may be less stable. Version 1.23.0 is the latest stable release; 1.24.0-beta.1 is a beta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Dyad is worth a look if you want to build web apps with AI while keeping the code and the model choice on your own computer.**',
          'On paper it covers a lot: a free desktop app, an Apache 2.0 core, your own keys or local models, Supabase and Neon, GitHub and Vercel deployment, and MCP. Development is active, with a stable release on 9 November 2026 and a commit on 17 November 2026.',
          'The trade-offs are stated by the maker itself: JavaScript-based apps only, uneven results from small local models, and a Node.js setup. The src/pro folder is fair-source rather than open source. PromptQuorum has not tested the app, so try it on a small project and review the generated code before you rely on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Dyad website](https://www.dyad.sh) — maker\'s description, features, plans and prices, checked 18 November 2026.',
          '[Download page](https://www.dyad.sh/download) — platforms, stable and beta channels, checked 18 November 2026.',
          '[Docs overview](https://www.dyad.sh/docs) — positioning against other builders, checked 18 November 2026.',
          '[FAQ](https://www.dyad.sh/docs/faq) — supported app types, local model advice, Node.js, checked 18 November 2026.',
          '[Quickstart](https://www.dyad.sh/docs/getting-started/quickstart) — install steps and Node.js requirement, checked 18 November 2026.',
          '[Privacy policy](https://www.dyad.sh/docs/policies/privacy-policy) — data flow, telemetry, U.S. company statement, last updated June 22, 2026, checked 18 November 2026.',
          '[Terms of service](https://www.dyad.sh/docs/policies/terms) — ownership wording, checked 18 November 2026.',
          '[Dyad GitHub repository](https://github.com/dyad-sh/dyad) — README, license files and last commit, checked 18 November 2026.',
          '[Release v1.23.0](https://github.com/dyad-sh/dyad/releases/tag/v1.23.0) — latest stable version, date and downloadable assets, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Cline Review](/power-local-llm/cline-review) — Autonomous coding agent for VS Code that can use local models.',
          '[OpenCode Review](/power-local-llm/opencode-review) — Open-source terminal coding agent.',
          '[Aider Review](/power-local-llm/aider-review) — Terminal pair-programming tool that works with local models.',
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
    theme: 'Coding Assistants',
    heroImage: '/images/dyad-review-hero-de.webp',
    title: 'Dyad-Rezension: lokaler Open-Source-KI-App-Builder für Ihren Desktop',
    seoTitle: 'Dyad-Rezension: lokaler Open-Source-KI-App-Builder, Preise',
    intro:
      'Dyad ist eine Desktop-App, die aus Chat-Prompts Web-Apps erstellt und jedes Projekt als gewöhnliche Dateien auf Ihrem Computer speichert. Das KI-Modell wählen Sie selbst: einen eigenen API-Schlüssel, ein lokales Ollama- oder LM-Studio-Modell oder gehostete Modelle über den kostenpflichtigen Tarif Dyad Pro. Diese Rezension stützt sich auf die Seiten des Herstellers, die Datenschutzerklärung und das GitHub-Repository, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Dyad ist ein Desktop-KI-App-Builder: Projekte als Dateien auf Ihrem Rechner, mit eigenen API-Schlüsseln oder lokalen Modellen. Lizenz, Tarife, Datenschutz.',
    twitterDescription:
      'Dyad erstellt Web-Apps aus Prompts auf Ihrem Desktop, mit eigenen API-Schlüsseln oder lokalen Ollama- und LM-Studio-Modellen. Apache-2.0-Kern, kostenpflichtige Pro-Tarife.',
    audience:
      'Laien und Entwickler, die Web-Apps per Prompt auf dem eigenen Computer bauen möchten, sowie Teams, die eine Open-Source-Alternative zu gehosteten App-Buildern prüfen',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Dyad',
    targetKeywords: [
      'Dyad Rezension',
      'Dyad KI-App-Builder',
      'lokaler Open-Source-KI-App-Builder',
      'Dyad Ollama',
      'Dyad Preise',
      'Dyad Datenschutz',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Dyad ist eine kostenlose Open-Source-Desktop-App für macOS, Windows und Linux, die aus Chat-Prompts Web-Apps erstellt und jedes Projekt als gewöhnliche Dateien auf Ihrem Computer speichert.** Sie arbeitet mit Ihren eigenen API-Schlüsseln oder mit lokalen Modellen über Ollama und LM Studio. Laut FAQ erzeugt sie nur JavaScript-basierte Apps, und das Ergebnis hängt vom gewählten Modell ab.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Dyad, und für wen ist es gedacht?',
        answer:
          'Dyad ist ein KI-App-Builder für den Desktop: Sie beschreiben eine App im Chat, bestätigen den erzeugten Code und sehen eine Live-Vorschau. Er eignet sich für Menschen, die Web-Apps mit KI bauen, den Code aber auf dem eigenen Rechner behalten und das Modell selbst wählen möchten.',
        bullets: [
          'Plattformen: macOS (Apple Silicon und Intel), Windows, Linux (.deb, .rpm, AppImage).',
          'Preis: kostenlose Desktop-App ohne Anmeldung; optionale Tarife Dyad Pro und Dyad Max.',
          'Lizenz: Apache 2.0, außer dem Ordner src/pro unter einer Fair-Source-Lizenz.',
          'Modelle: eigene API-Schlüssel, lokal über Ollama oder LM Studio, oder gehostete Modelle über Dyad Pro.',
          'Datenbank und Deployment: Anbindungen an Supabase, Neon, GitHub und Vercel.',
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
      { label: 'Grenzen und was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
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
            text: 'Dyad ist eine Desktop-App, die aus Chat-Prompts Web-Apps erstellt und als normale Projektdateien auf Ihrem Computer speichert, mit dem KI-Modell Ihrer Wahl, auch mit lokalen Ollama- und LM-Studio-Modellen.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich einen KI-App-Builder vor, der auf Ihrem eigenen Rechner läuft statt in einem gehosteten Dienst. Ihr Code bleibt in einem Ordner unter Ihrer Kontrolle, und wohin Ihre Prompts gehen, hängt vom angebundenen Modell ab.',
          },
        ],
        items: [
          'Die Download-Seite bietet ein Installationspaket für macOS, Windows und Linux; laut Schnellstart muss Node.js separat installiert werden.',
          'Der Code außerhalb des Ordners src/pro steht unter Apache 2.0; src/pro ist Fair Source unter der Functional Source License 1.1.',
          'Mit eigenem API-Schlüssel gehen Prompts und Code direkt an den Modellanbieter, mit lokalem Modell bleiben sie auf Ihrem Gerät (Datenschutzerklärung).',
          'Dyad Pro leitet Anfragen über Dyads Server an gehostete Modelle weiter, und laut Erklärung kann Inhalt in begrenzten Fällen protokolliert werden.',
          'PromptQuorum hat die App nicht getestet. Dyads eigene FAQ warnt, dass kleine lokale Modelle seinen Anweisungen eventuell nicht folgen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'KI-generierter Code kann Fehler und Sicherheitslücken enthalten. Prüfen Sie, was Dyad schreibt, bevor Sie eine App veröffentlichen, die echte Nutzerdaten verarbeitet. Das sind allgemeine Informationen, keine Rechts- oder Sicherheitsberatung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Dyad ist ein KI-App-Builder, der als Desktop-Programm läuft; das Projekt liegt als Dateien auf Ihrem Computer.**',
          'Die App stammt von Dyad Tech, Inc.; die Fair-Source-Lizenzdatei im Repository nennt sie als Rechteinhaber, und auf der Startseite wird Will Chen als Schöpfer beschrieben. Die aktuelle stabile Version ist 1.23.0, veröffentlicht am 9. November 2026. Am 13. November 2026 folgte die Beta 1.24.0-beta.1, und der letzte Commit im Hauptzweig des Repositorys stammt vom 17. November 2026. Die Entwicklung läuft also weiter, und es gilt keine Warnung vor einem verwaisten Projekt.',
          'Sie beschreiben eine App in einem Chat, bestätigen den von Dyad erzeugten Code und sehen eine Vorschau neben dem Chat. Die README beschreibt Dyad als lokale Alternative zu Lovable, v0 und Bolt, und laut Startseite lassen sich Projekte aus bestehenden Repositories importieren, in VS Code bearbeiten und als normaler Code exportieren. Die Grafik auf der Startseite erwähnt Standard-Next.js, der Schnellstart nennt aber nicht, welches Framework die erzeugten Apps nutzen.',
          'Diese Beschreibungen sind Herstellerangaben. PromptQuorum hat die App nicht ausgeführt und die Zuverlässigkeit der erzeugten Apps nicht gemessen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie installieren Dyad über einen normalen Download von der offiziellen Website; für die kostenlose App ist keine Anmeldung nötig.**',
          'Die Download-Seite bietet einen stabilen und einen Beta-Kanal; laut Seite erhält die Beta frühe Funktionen und kann weniger stabil sein. Laut Schnellstart muss Node.js, die JavaScript-Laufzeit für Ihre Apps, separat installiert werden, und unter Windows kann eine Microsoft-Warnung erscheinen, bei der Sie auf „Weitere Informationen“ und dann auf „Trotzdem ausführen“ klicken. Das GitHub-Release v1.23.0 listet ein Windows-Installationsprogramm, eine .deb-, eine .rpm- und eine AppImage-Datei sowie macOS-.zip-Dateien auf.',
        ],
        columns: ['Plattform', 'So bekommen Sie sie'],
        rows: [
          { 'Plattform': '[macOS](https://www.dyad.sh/download)', 'So bekommen Sie sie': 'Download für Apple Silicon (M1+) oder Intel' },
          { 'Plattform': '[Windows](https://www.dyad.sh/download)', 'So bekommen Sie sie': 'Download und Installer ausführen' },
          { 'Plattform': '[Linux](https://www.dyad.sh/download)', 'So bekommen Sie sie': '.deb, .rpm oder AppImage' },
          { 'Plattform': '[Website](https://www.dyad.sh)', 'So bekommen Sie sie': 'Offizielle Seite, Doku und Preise' },
          { 'Plattform': '[Datenschutzerklärung](https://www.dyad.sh/docs/policies/privacy-policy)', 'So bekommen Sie sie': 'Erklärung des Herstellers, Stand 22. Juni 2026' },
          { 'Plattform': '[GitHub](https://github.com/dyad-sh/dyad)', 'So bekommen Sie sie': 'Quellcode und Release-Downloads' },
        ],
        note: 'Der Hersteller nennt keine Hardwarewerte; seine FAQ sagt, wer Node.js ausführen kann, kann Dyad nutzen, und empfiehlt ein gehostetes Modell, falls Ihr Computer nicht leistungsstark ist.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Dyad verbindet einen Chat-gesteuerten Builder mit Modellauswahl und einigen eingebauten Integrationen.** Alle folgenden Punkte sind Herstellerangaben von Website, Doku und FAQ.',
        ],
        items: [
          'App-Bau per Chat mit Vorschau; der Code liegt als Dateien vor, die Sie in VS Code öffnen können.',
          'Modellwahl: OpenAI, Anthropic, Google, Ollama, LM Studio und weitere, jederzeit umschaltbar.',
          'Anbindung an eine Supabase- oder Neon-Datenbank mit Schemas, Migrationen und Authentifizierung in wenigen Klicks.',
          'Deployment mit einem Klick zu GitHub und Vercel oder in Ihre eigene Cloud.',
          'Ein eingebauter Sicherheitsscan, der laut Hersteller auf Probleme wie Injection und Fehlkonfiguration prüft.',
          'MCP-Unterstützung, sodass Sie Werkzeuge wie Chrome DevTools oder Websuche einbinden können.',
          'Dyad Pro ergänzt laut FAQ zusätzliche Modi für große Codebasen und Smart Context.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Wohin Ihre Daten gehen, hängt laut Datenschutzerklärung des Herstellers davon ab, wie Sie ein Modell anbinden.**',
          'In der kostenlosen Desktop-App nutzen Sie eigene API-Schlüssel oder lokale Modelle. Mit einem API-Schlüssel gehen Prompts und Code laut Erklärung direkt an den Modellanbieter; mit einem lokalen Modell bleibt alles auf Ihrem Gerät; in beiden Fällen laufen die Daten nicht über Dyads Server.',
          'Bei Dyad Pro werden Prompts und Code über Dyads Server an gehostete Modelle weitergeleitet, und laut Erklärung kann Inhalt in begrenzten Fällen wie der Untersuchung von Missbrauch oder Ausfällen vorübergehend protokolliert werden. Außerdem heißt es, Dyad nutze Ihre Daten nie zum Training eigener Modelle, und Anbieter trainierten nicht damit, außer bei Modellen, die in der Modelloberfläche als Training durch den Anbieter erlaubend gekennzeichnet sind.',
          'Telemetrie ist optional (Opt-in), nutzt PostHog und enthält laut Erklärung keine Chatnachrichten, Prompts oder Code. Die optionale Funktion „Upload Chat Session“ sendet Transkripte und Teile Ihrer Codebasis für den Support und wird nach etwa einem Monat gelöscht. PromptQuorum hat diese Angaben nicht überprüft.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Dyad eignet sich für Menschen, die KI-gebaute Web-Apps wollen, ohne den Code an einen gehosteten Builder zu geben.**',
        ],
        items: [
          'Laien, die eine Idee zu einer funktionierenden Web-App machen möchten und Node.js sowie einen API-Schlüssel einrichten können.',
          'Entwickler, die ein Prompt-zu-App-Werkzeug suchen, dessen Ergebnis sie in VS Code bearbeiten und zu GitHub übertragen können.',
          'Alle, die lokale Ollama- oder LM-Studio-Modelle für den App-Bau ausprobieren möchten und akzeptieren, dass die Ergebnisse je nach Modell schwanken.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Grenzen und was wir nicht überprüfen konnten',
        content: [
          '**Dyad hat genannte Grenzen, und mehrere Angaben bleiben ungeprüft.**',
        ],
        items: [
          'Genannte Grenze: Laut FAQ unterstützt Dyad nur JavaScript-basierte Apps, einschließlich hybrider Mobile-Apps mit Webtechnik wie React. PHP, Ruby und native Swift- und Kotlin-Apps werden nicht unterstützt.',
          'Genannte Grenze: Die FAQ sagt, kleine lokale Modelle folgen Dyads Anweisungen eventuell nicht und liefern schlechte Ergebnisse, und kostenlose API-Schlüssel haben oft niedrige Token-Limits, die bei größeren Apps zu Kontextfehlern führen.',
          'Nicht geeignet: wer einen gehosteten Dienst mit Vorschau-URL und ohne lokale Einrichtung braucht; Dyad läuft auf Ihrem Rechner und benötigt Node.js.',
          'Ungeprüft: wie zuverlässig, sicher oder wartbar die erzeugten Apps sind. PromptQuorum hat mit Dyad keine Apps gebaut.',
          'Ungeprüft: der Hardwarebedarf. Es gibt keine Angabe zu RAM oder GPU, und der Bedarf hängt vom verwendeten Modell ab.',
          'Ungeprüft: Straße und Stadt des Unternehmens. Die Datenschutzerklärung sagt, Dyad sei ein US-Unternehmen mit Infrastruktur in den USA, nennt aber keine Adresse; die Nutzungsbedingungen nennen keine juristische Person.',
          'Ungeprüft: Die Preiskarte auf der Startseite nennt für die kostenlose App macOS und Windows, während die Download-Seite auch Linux-Builds anbietet.',
          'Nicht geprüft: unabhängige Tests und Nutzerberichte. Die Erfahrungsberichte auf der Startseite hat der Hersteller selbst ausgewählt.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Dyad im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**Dyads eigene Doku und README stellen es gehosteten KI-App-Buildern gegenüber. PromptQuorum hat es nicht praktisch mit ihnen verglichen.** Die folgenden Vergleiche geben wieder, was Dyads Dokumentation sagt; für keinen anderen Prompt-zu-App-Builder gibt es bisher eine PromptQuorum-Rezension.',
        ],
        columns: ['Werkzeug', 'Laut Dyad-Doku'],
        rows: [
          { 'Werkzeug': 'Dyad', 'Laut Dyad-Doku': 'Lokale, quelloffene, kostenlose Desktop-App' },
          { 'Werkzeug': '[Lovable](https://lovable.dev)', 'Laut Dyad-Doku': 'Genannt als Produkt, zu dem Dyad eine Alternative ist' },
          { 'Werkzeug': '[v0](https://v0.dev)', 'Laut Dyad-Doku': 'Genannt als Produkt, zu dem Dyad eine Alternative ist' },
          { 'Werkzeug': '[Bolt.new](https://bolt.new)', 'Laut Dyad-Doku': 'Genannt als Produkt, zu dem Dyad eine Alternative ist' },
          { 'Werkzeug': '[bolt.diy](https://github.com/stackblitz-labs/bolt.diy)', 'Laut Dyad-Doku': 'Beschrieben als weiterer Open-Source-Builder zum Selbstbetrieb' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist Dyad kostenlos?',
            a: 'Die Desktop-App ist laut Startseite kostenlos und braucht keine Anmeldung. Bei einem kostenpflichtigen API-Schlüssel zahlen Sie Ihren KI-Anbieter. Optionale Tarife ergänzen gehostete Credits: Dyad Pro kostet $20/Monat (in US-Dollar) mit 200 KI-Credits, Dyad Max $79/Monat mit 900 Credits.',
          },
          {
            q: 'Kann Dyad lokale Modelle wie Ollama und LM Studio nutzen?',
            a: 'Ja, laut Hersteller; beide werden auf der Startseite genannt. Die FAQ rät zu einem größeren lokalen Modell, falls Ihr Rechner es ausführen kann, weil kleine Modelle Anweisungen eventuell nicht befolgen.',
          },
          {
            q: 'Gehört mir der von Dyad erzeugte Code?',
            a: 'Die Startseite sagt, Sie können sauberen, lauffähigen Code ohne Lock-in exportieren. Die Nutzungsbedingungen regeln das Eigentum an erzeugtem Code nicht, lesen Sie sie also vor kommerzieller Nutzung. Das ist keine Rechtsberatung.',
          },
          {
            q: 'Welche Betriebssysteme werden unterstützt?',
            a: 'Laut Download-Seite macOS auf Apple Silicon und Intel, Windows und Linux. Node.js muss separat installiert werden.',
          },
          {
            q: 'Was unterscheidet die stabile von der Beta-Version?',
            a: 'Die Download-Seite beschreibt die Beta als häufigere Updates mit frühen Funktionen, die weniger stabil sein können. Version 1.23.0 ist die aktuelle stabile Version; 1.24.0-beta.1 ist eine Beta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Dyad ist einen Blick wert, wenn Sie Web-Apps mit KI bauen und Code sowie Modellwahl auf dem eigenen Computer behalten möchten.**',
          'Auf dem Papier deckt es viel ab: eine kostenlose Desktop-App, einen Apache-2.0-Kern, eigene Schlüssel oder lokale Modelle, Supabase und Neon, Deployment zu GitHub und Vercel sowie MCP. Die Entwicklung ist aktiv, mit einer stabilen Version am 9. November 2026 und einem Commit am 17. November 2026.',
          'Die Nachteile nennt der Hersteller selbst: nur JavaScript-basierte Apps, schwankende Ergebnisse kleiner lokaler Modelle und eine Node.js-Einrichtung. Der Ordner src/pro ist Fair Source statt Open Source. PromptQuorum hat die App nicht getestet; probieren Sie sie an einem kleinen Projekt aus und prüfen Sie den erzeugten Code, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Dyad-Website](https://www.dyad.sh) — Beschreibung des Herstellers, Funktionen, Tarife und Preise, geprüft am 18. November 2026.',
          '[Download-Seite](https://www.dyad.sh/download) — Plattformen, stabiler und Beta-Kanal, geprüft am 18. November 2026.',
          '[Doku-Überblick](https://www.dyad.sh/docs) — Einordnung gegenüber anderen Buildern, geprüft am 18. November 2026.',
          '[FAQ](https://www.dyad.sh/docs/faq) — unterstützte App-Typen, Hinweis zu lokalen Modellen, Node.js, geprüft am 18. November 2026.',
          '[Schnellstart](https://www.dyad.sh/docs/getting-started/quickstart) — Installationsschritte und Node.js-Anforderung, geprüft am 18. November 2026.',
          '[Datenschutzerklärung](https://www.dyad.sh/docs/policies/privacy-policy) — Datenfluss, Telemetrie, Aussage zum US-Unternehmen, Stand 22. Juni 2026, geprüft am 18. November 2026.',
          '[Nutzungsbedingungen](https://www.dyad.sh/docs/policies/terms) — Formulierung zum Eigentum, geprüft am 18. November 2026.',
          '[Dyad-GitHub-Repository](https://github.com/dyad-sh/dyad) — README, Lizenzdateien und letzter Commit, geprüft am 18. November 2026.',
          '[Release v1.23.0](https://github.com/dyad-sh/dyad/releases/tag/v1.23.0) — aktuelle stabile Version, Datum und herunterladbare Dateien, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Cline-Rezension](/de/power-local-llm/cline-review) — Autonomer Coding-Agent für VS Code, der lokale Modelle nutzen kann.',
          '[OpenCode-Rezension](/de/power-local-llm/opencode-review) — Quelloffener Coding-Agent für das Terminal.',
          '[Aider-Rezension](/de/power-local-llm/aider-review) — Pair-Programming-Werkzeug für das Terminal, das mit lokalen Modellen funktioniert.',
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
    theme: 'Coding Assistants',
    heroImage: '/images/dyad-review-hero-es.webp',
    title: 'Reseña de Dyad: creador de apps con IA de código abierto y local para tu escritorio',
    seoTitle: 'Reseña de Dyad: creador de apps con IA local y abierto',
    intro:
      'Dyad es una app de escritorio que crea apps web a partir de prompts en un chat y guarda cada proyecto como archivos normales en tu ordenador. Tú eliges el modelo de IA: tu propia clave de API, un modelo local de Ollama o LM Studio, o modelos alojados mediante el plan de pago Dyad Pro. Esta reseña se basa en las páginas del fabricante, su política de privacidad y el repositorio de GitHub, comprobados el 18 de noviembre de 2026. PromptQuorum no ha probado la app en persona.',
    metaDescription:
      'Dyad es un creador de apps con IA que guarda proyectos como archivos en tu equipo, con tus claves de API o modelos locales. Licencia y privacidad.',
    twitterDescription:
      'Dyad crea apps web a partir de prompts en tu escritorio, con tus claves de API o modelos locales de Ollama y LM Studio. Núcleo Apache 2.0, planes Pro de pago.',
    audience:
      'Personas sin experiencia y desarrolladores que quieren crear apps web con prompts en su propio ordenador, y equipos que buscan una alternativa abierta a los creadores de apps alojados',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Dyad',
    targetKeywords: [
      'reseña de Dyad',
      'Dyad creador de apps con IA',
      'creador de apps con IA local de código abierto',
      'Dyad Ollama',
      'precios de Dyad',
      'privacidad de Dyad',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Dyad es una app de escritorio gratuita y de código abierto para macOS, Windows y Linux que crea apps web a partir de prompts en un chat y guarda cada proyecto como archivos normales en tu ordenador.** Funciona con tus propias claves de API o con modelos locales mediante Ollama y LM Studio. Según su FAQ, solo crea apps basadas en JavaScript, y el resultado depende del modelo que elijas.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Dyad y para quién es?',
        answer:
          'Dyad es un creador de apps con IA para escritorio: describes una app en el chat, apruebas el código generado y ves una vista previa en directo. Es adecuado para quienes quieren crear apps web con IA, conservar el código en su propio equipo y elegir su modelo.',
        bullets: [
          'Plataformas: macOS (Apple Silicon e Intel), Windows, Linux (.deb, .rpm, AppImage).',
          'Precio: app de escritorio gratuita sin registro; planes opcionales Dyad Pro y Dyad Max.',
          'Licencia: Apache 2.0, salvo la carpeta src/pro, con una licencia de código «fair-source».',
          'Modelos: tus propias claves de API, Ollama o LM Studio en local, o modelos alojados con Dyad Pro.',
          'Base de datos y despliegue: integraciones con Supabase, Neon, GitHub y Vercel.',
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
      { label: 'Límites y lo que no pudimos verificar', anchor: 'who-should-not-use' },
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
            text: 'Dyad es una app de escritorio que convierte prompts de chat en apps web guardadas como archivos de proyecto normales en tu ordenador, con el modelo de IA que elijas, incluidos modelos locales de Ollama y LM Studio.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un creador de apps con IA que se ejecuta en tu propio equipo en lugar de en un servicio alojado. Tu código queda en una carpeta que controlas, y adónde van tus prompts depende del modelo que conectes.',
          },
        ],
        items: [
          'La página de descarga ofrece un instalador o paquete para macOS, Windows y Linux; según la guía de inicio, Node.js se instala por separado.',
          'El código fuera de la carpeta src/pro es Apache 2.0; src/pro es «fair-source» bajo la Functional Source License 1.1.',
          'Con tu propia clave de API, los prompts y el código van directamente al proveedor del modelo; con un modelo local se quedan en tu dispositivo (política de privacidad).',
          'Dyad Pro envía las solicitudes a los modelos alojados a través de los servidores de Dyad, y la política dice que el contenido puede registrarse en casos limitados.',
          'PromptQuorum no ha probado la app. La propia FAQ de Dyad advierte de que los modelos locales pequeños pueden no seguir sus instrucciones.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El código generado por IA puede contener errores y fallos de seguridad. Revisa lo que escribe Dyad antes de publicar una app que maneje datos reales de usuarios. Es información general, no asesoramiento legal ni de seguridad.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Dyad es un creador de apps con IA que funciona como programa de escritorio, con el proyecto guardado como archivos en tu ordenador.**',
          'La app la desarrolla Dyad Tech, Inc.; el archivo de licencia «fair-source» del repositorio la nombra como titular de los derechos, y la página principal describe a Will Chen como su creador. La última versión estable es la 1.23.0, publicada el 9 de noviembre de 2026. El 13 de noviembre de 2026 llegó una beta, 1.24.0-beta.1, y el último commit en la rama principal del repositorio es del 17 de noviembre de 2026, así que el desarrollo continúa y no se aplica ninguna advertencia de proyecto abandonado.',
          'Describes una app en un chat, apruebas el código que genera Dyad y ves una vista previa junto al chat. El README lo describe como una alternativa local a Lovable, v0 y Bolt, y la página principal dice que se pueden importar proyectos de repositorios existentes, editarlos en VS Code y exportarlos como código normal. El gráfico de la página principal menciona Next.js estándar, pero la guía de inicio no dice qué framework usan las apps generadas.',
          'Estas descripciones son afirmaciones del fabricante. PromptQuorum no ha ejecutado la app ni ha medido la fiabilidad de las apps generadas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Instalas Dyad con una descarga normal desde el sitio web oficial, y la app gratuita no requiere registro.**',
          'La página de descarga ofrece un canal estable y uno beta; según la página, la beta recibe funciones anticipadas y puede ser menos estable. La guía de inicio dice que Node.js, el entorno de ejecución de JavaScript que ejecuta tus apps, se instala por separado, y que en Windows puede aparecer una advertencia de Microsoft en la que pulsas «Más información» y luego «Ejecutar de todas formas». La versión v1.23.0 de GitHub incluye un instalador de Windows, un .deb, un .rpm, un AppImage y archivos .zip para macOS.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[macOS](https://www.dyad.sh/download)', 'Cómo conseguirla': 'Descarga para Apple Silicon (M1+) o Intel' },
          { 'Plataforma': '[Windows](https://www.dyad.sh/download)', 'Cómo conseguirla': 'Descarga y ejecuta el instalador' },
          { 'Plataforma': '[Linux](https://www.dyad.sh/download)', 'Cómo conseguirla': '.deb, .rpm o AppImage' },
          { 'Plataforma': '[Sitio web](https://www.dyad.sh)', 'Cómo conseguirla': 'Sitio oficial, documentación y precios' },
          { 'Plataforma': '[Política de privacidad](https://www.dyad.sh/docs/policies/privacy-policy)', 'Cómo conseguirla': 'Política del fabricante, actualizada el 22 de junio de 2026' },
          { 'Plataforma': '[GitHub](https://github.com/dyad-sh/dyad)', 'Cómo conseguirla': 'Código fuente y descargas de versiones' },
        ],
        note: 'El fabricante no indica cifras de hardware; su FAQ dice que si puedes ejecutar Node.js puedes usar Dyad, y sugiere un modelo alojado si tu ordenador no es potente.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Dyad combina un creador guiado por chat con elección de modelo y algunas integraciones incluidas.** Todos los puntos siguientes son afirmaciones del fabricante tomadas de su sitio web, su documentación y su FAQ.',
        ],
        items: [
          'Creación de apps por chat con vista previa; el código se guarda como archivos que puedes abrir en VS Code.',
          'Elección de modelo: OpenAI, Anthropic, Google, Ollama, LM Studio y otros, que puedes cambiar en cualquier momento.',
          'Conexión con una base de datos Supabase o Neon, con esquemas, migraciones y autenticación en pocos clics.',
          'Despliegue con un clic en GitHub y Vercel, o en tu propia nube.',
          'Un análisis de seguridad integrado que, según el fabricante, busca problemas como inyección y errores de configuración.',
          'Compatibilidad con MCP, para conectar herramientas como Chrome DevTools o la navegación web.',
          'Dyad Pro añade, según la FAQ, modos adicionales para bases de código grandes y Smart Context.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Adónde van tus datos depende de cómo conectes un modelo, según la política de privacidad del fabricante.**',
          'En la app de escritorio gratuita usas tus propias claves de API o modelos locales. Con una clave de API, la política dice que los prompts y el código se envían directamente al proveedor del modelo; con un modelo local todo se queda en tu dispositivo; en ambos casos los datos nunca pasan por los servidores de Dyad.',
          'Con Dyad Pro, los prompts y el código pasan por los servidores de Dyad hacia los modelos alojados, y la política dice que el contenido puede registrarse de forma temporal en casos limitados, como la investigación de abusos o caídas del servicio. Añade que Dyad nunca usa tus datos para entrenar sus propios modelos y que los proveedores no entrenan con ellos, salvo los modelos señalados en la interfaz de modelos como que permiten el entrenamiento del proveedor.',
          'La telemetría es opcional (opt-in), usa PostHog y, según la política, excluye mensajes de chat, prompts y código. La función opcional «Upload Chat Session» envía transcripciones y partes de tu código para soporte y se elimina tras aproximadamente un mes. PromptQuorum no ha verificado estas afirmaciones.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Dyad encaja con quienes quieren apps web creadas con IA sin entregar el código a un creador alojado.**',
        ],
        items: [
          'Personas sin experiencia técnica que quieren convertir una idea en una app web funcional y pueden configurar Node.js y una clave de API.',
          'Desarrolladores que buscan una herramienta de prompt a app cuyo resultado puedan editar en VS Code y subir a GitHub.',
          'Quienes quieren probar modelos locales de Ollama o LM Studio para crear apps y aceptan que los resultados varían según el modelo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Límites y lo que no pudimos verificar',
        content: [
          '**Dyad tiene límites declarados y varios detalles siguen sin verificar.**',
        ],
        items: [
          'Límite declarado: según su FAQ, Dyad solo admite apps basadas en JavaScript, incluidas apps móviles híbridas creadas con tecnología web como React. No admite PHP, Ruby ni apps nativas en Swift o Kotlin.',
          'Límite declarado: la FAQ dice que los modelos locales pequeños pueden no seguir las instrucciones de Dyad y producir malos resultados, y que las claves de API gratuitas suelen tener límites bajos de tokens que provocan errores de contexto en apps más grandes.',
          'No encaja: quien necesite un servicio alojado con una URL de vista previa y sin configuración local; Dyad se ejecuta en tu equipo y necesita Node.js.',
          'Sin verificar: la fiabilidad, seguridad o mantenibilidad de las apps generadas. PromptQuorum no ha creado apps con Dyad.',
          'Sin verificar: los requisitos de hardware. No se indica ninguna cifra de RAM ni de GPU, y la exigencia depende del modelo que uses.',
          'Sin verificar: la dirección y la ciudad de la empresa. La política de privacidad dice que Dyad es una empresa estadounidense con infraestructura en EE. UU., pero no da una dirección; los términos no nombran ninguna entidad legal.',
          'Sin verificar: la tarjeta de precios de la página principal indica macOS y Windows para la app gratuita, mientras que la página de descarga ofrece también versiones para Linux.',
          'No comprobado: reseñas independientes e informes de usuarios. Los testimonios de la página principal son una selección del propio fabricante.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Dyad frente a las alternativas',
        itemHeadings: true,
        content: [
          '**La documentación y el README de Dyad lo sitúan frente a creadores de apps con IA alojados. PromptQuorum no lo ha comparado con ellos en la práctica.** Las comparaciones siguientes repiten lo que dice la documentación de Dyad; todavía no hay una reseña de PromptQuorum de ningún otro creador de prompt a app.',
        ],
        columns: ['Herramienta', 'Según la documentación de Dyad'],
        rows: [
          { 'Herramienta': 'Dyad', 'Según la documentación de Dyad': 'App de escritorio local, de código abierto y gratuita' },
          { 'Herramienta': '[Lovable](https://lovable.dev)', 'Según la documentación de Dyad': 'Citado como producto al que Dyad es una alternativa' },
          { 'Herramienta': '[v0](https://v0.dev)', 'Según la documentación de Dyad': 'Citado como producto al que Dyad es una alternativa' },
          { 'Herramienta': '[Bolt.new](https://bolt.new)', 'Según la documentación de Dyad': 'Citado como producto al que Dyad es una alternativa' },
          { 'Herramienta': '[bolt.diy](https://github.com/stackblitz-labs/bolt.diy)', 'Según la documentación de Dyad': 'Descrito como otro creador de código abierto que ejecutas tú mismo' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Dyad es gratis?',
            a: 'La app de escritorio es gratuita y no requiere registro, según la página principal. Si usas una clave de API de pago, pagas a tu proveedor de IA. Los planes opcionales añaden créditos alojados: Dyad Pro cuesta $20/mes (en dólares estadounidenses) con 200 créditos de IA, y Dyad Max $79/mes con 900 créditos.',
          },
          {
            q: '¿Puede Dyad usar modelos locales como Ollama y LM Studio?',
            a: 'Sí, según el fabricante; ambos aparecen en su página principal. La FAQ aconseja un modelo local más grande si tu equipo puede ejecutarlo, porque los modelos pequeños pueden no seguir las instrucciones.',
          },
          {
            q: '¿Soy dueño del código que genera Dyad?',
            a: 'La página principal dice que puedes exportar código limpio y ejecutable sin dependencia del proveedor. Los términos no tratan la titularidad del código generado, así que léelos antes de un uso comercial. No es asesoramiento legal.',
          },
          {
            q: '¿Qué sistemas operativos admite?',
            a: 'Según la página de descarga, macOS en Apple Silicon e Intel, Windows y Linux. Node.js se instala por separado.',
          },
          {
            q: '¿Qué diferencia hay entre la versión estable y la beta?',
            a: 'La página de descarga describe la beta como actualizaciones más frecuentes con funciones anticipadas que pueden ser menos estables. La versión 1.23.0 es la última estable; 1.24.0-beta.1 es una beta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Dyad merece una mirada si quieres crear apps web con IA conservando el código y la elección del modelo en tu propio ordenador.**',
          'Sobre el papel cubre mucho: una app de escritorio gratuita, un núcleo Apache 2.0, tus propias claves o modelos locales, Supabase y Neon, despliegue en GitHub y Vercel, y MCP. El desarrollo está activo, con una versión estable el 9 de noviembre de 2026 y un commit el 17 de noviembre de 2026.',
          'Las contrapartidas las indica el propio fabricante: solo apps basadas en JavaScript, resultados desiguales con modelos locales pequeños y una configuración de Node.js. La carpeta src/pro es «fair-source» y no de código abierto. PromptQuorum no ha probado la app, así que pruébala con un proyecto pequeño y revisa el código generado antes de depender de ella.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Dyad](https://www.dyad.sh) — descripción del fabricante, funciones, planes y precios, comprobado el 18 de noviembre de 2026.',
          '[Página de descarga](https://www.dyad.sh/download) — plataformas, canales estable y beta, comprobado el 18 de noviembre de 2026.',
          '[Resumen de la documentación](https://www.dyad.sh/docs) — posicionamiento frente a otros creadores, comprobado el 18 de noviembre de 2026.',
          '[FAQ](https://www.dyad.sh/docs/faq) — tipos de app admitidos, consejo sobre modelos locales, Node.js, comprobado el 18 de noviembre de 2026.',
          '[Guía de inicio](https://www.dyad.sh/docs/getting-started/quickstart) — pasos de instalación y requisito de Node.js, comprobado el 18 de noviembre de 2026.',
          '[Política de privacidad](https://www.dyad.sh/docs/policies/privacy-policy) — flujo de datos, telemetría, declaración de empresa estadounidense, actualizada el 22 de junio de 2026, comprobado el 18 de noviembre de 2026.',
          '[Términos del servicio](https://www.dyad.sh/docs/policies/terms) — redacción sobre la titularidad, comprobado el 18 de noviembre de 2026.',
          '[Repositorio de Dyad en GitHub](https://github.com/dyad-sh/dyad) — README, archivos de licencia y último commit, comprobado el 18 de noviembre de 2026.',
          '[Versión v1.23.0](https://github.com/dyad-sh/dyad/releases/tag/v1.23.0) — última versión estable, fecha y archivos descargables, comprobado el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Cline](/es/power-local-llm/cline-review) — Agente de programación autónomo para VS Code que puede usar modelos locales.',
          '[Reseña de OpenCode](/es/power-local-llm/opencode-review) — Agente de programación de código abierto para la terminal.',
          '[Reseña de Aider](/es/power-local-llm/aider-review) — Herramienta de programación en pareja para la terminal que funciona con modelos locales.',
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
    theme: 'Coding Assistants',
    heroImage: '/images/dyad-review-hero-fr.webp',
    title: 'Test de Dyad : créateur d’apps IA open source et local pour votre bureau',
    seoTitle: 'Test de Dyad : créateur d’apps IA local et open source',
    intro:
      'Dyad est une application de bureau qui crée des applications web à partir de prompts dans un chat et conserve chaque projet sous forme de fichiers ordinaires sur votre ordinateur. Vous choisissez le modèle d’IA : votre propre clé API, un modèle local Ollama ou LM Studio, ou des modèles hébergés via l’offre payante Dyad Pro. Ce test s’appuie sur les pages de l’éditeur, sa politique de confidentialité et le dépôt GitHub, consultés le 18 novembre 2026. PromptQuorum n’a pas testé l’application en conditions réelles.',
    metaDescription:
      'Dyad est un créateur d’apps IA de bureau : projets en fichiers sur votre ordinateur, clés API ou modèles locaux. Licence, offres, confidentialité.',
    twitterDescription:
      'Dyad crée des apps web à partir de prompts sur votre bureau, avec vos clés API ou des modèles locaux Ollama et LM Studio. Cœur Apache 2.0, offres Pro payantes.',
    audience:
      'Non-développeurs et développeurs qui veulent créer des apps web par prompts sur leur propre ordinateur, et équipes qui étudient une alternative open source aux créateurs d’apps hébergés',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Dyad',
    targetKeywords: [
      'test Dyad',
      'Dyad créateur d’apps IA',
      'créateur d’apps IA local open source',
      'Dyad Ollama',
      'prix Dyad',
      'confidentialité Dyad',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Dyad est une application de bureau gratuite et open source pour macOS, Windows et Linux qui crée des apps web à partir de prompts dans un chat et stocke chaque projet sous forme de fichiers ordinaires sur votre ordinateur.** Elle fonctionne avec vos propres clés API ou avec des modèles locaux via Ollama et LM Studio. Selon sa FAQ, elle ne crée que des apps basées sur JavaScript, et le résultat dépend du modèle choisi.',
    quickAnswerTop: {
      fr: {
        question: 'Qu’est-ce que Dyad et à qui s’adresse-t-il ?',
        answer:
          'Dyad est un créateur d’apps IA de bureau : vous décrivez une app dans le chat, approuvez le code généré et voyez un aperçu en direct. Il convient à ceux qui veulent créer des apps web avec l’IA tout en gardant le code sur leur machine et en choisissant leur modèle.',
        bullets: [
          'Plateformes : macOS (Apple Silicon et Intel), Windows, Linux (.deb, .rpm, AppImage).',
          'Prix : application de bureau gratuite sans inscription ; offres optionnelles Dyad Pro et Dyad Max.',
          'Licence : Apache 2.0, sauf le dossier src/pro sous une licence « fair-source ».',
          'Modèles : vos propres clés API, Ollama ou LM Studio en local, ou modèles hébergés via Dyad Pro.',
          'Base de données et déploiement : intégrations Supabase, Neon, GitHub et Vercel.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l’obtenir', anchor: 'get-it' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Limites et ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'Dyad est une application de bureau qui transforme des prompts de chat en apps web stockées comme de simples fichiers de projet sur votre ordinateur, avec le modèle d’IA de votre choix, y compris des modèles locaux Ollama et LM Studio.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez un créateur d’apps IA qui tourne sur votre propre machine plutôt que dans un service hébergé. Votre code reste dans un dossier que vous contrôlez, et la destination de vos prompts dépend du modèle que vous connectez.',
          },
        ],
        items: [
          'La page de téléchargement propose un installateur ou un paquet pour macOS, Windows et Linux ; selon le guide de démarrage, Node.js s’installe séparément.',
          'Le code hors du dossier src/pro est sous Apache 2.0 ; src/pro est « fair-source » sous la Functional Source License 1.1.',
          'Avec votre propre clé API, prompts et code partent directement chez le fournisseur du modèle ; avec un modèle local, ils restent sur votre appareil (politique de confidentialité).',
          'Dyad Pro fait transiter les requêtes par les serveurs de Dyad pour atteindre des modèles hébergés, et la politique indique que le contenu peut être journalisé dans des cas limités.',
          'PromptQuorum n’a pas testé l’application. La FAQ de Dyad prévient que les petits modèles locaux peuvent ne pas suivre ses instructions.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le code généré par IA peut contenir des bogues et des failles de sécurité. Relisez ce que Dyad écrit avant de publier une app qui traite de vraies données d’utilisateurs. Ce sont des informations générales, pas un conseil juridique ou de sécurité.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Dyad est un créateur d’apps IA qui s’exécute comme un programme de bureau, avec le projet conservé sous forme de fichiers sur votre ordinateur.**',
          'L’application est éditée par Dyad Tech, Inc. ; le fichier de licence « fair-source » du dépôt la désigne comme titulaire des droits, et la page d’accueil présente Will Chen comme son créateur. La dernière version stable est la 1.23.0, publiée le 9 novembre 2026. Une bêta, 1.24.0-beta.1, a suivi le 13 novembre 2026, et le dernier commit sur la branche principale du dépôt date du 17 novembre 2026 : le développement se poursuit et aucun avertissement de projet abandonné ne s’applique.',
          'Vous décrivez une app dans un chat, approuvez le code généré par Dyad et voyez un aperçu à côté du chat. Le README le présente comme une alternative locale à Lovable, v0 et Bolt, et la page d’accueil indique que des projets peuvent être importés depuis des dépôts existants, modifiés dans VS Code et exportés comme du code ordinaire. Le visuel de la page d’accueil mentionne Next.js standard, mais le guide de démarrage ne précise pas quel framework utilisent les apps générées.',
          'Ces descriptions sont des déclarations de l’éditeur. PromptQuorum n’a pas exécuté l’application et n’a pas mesuré la fiabilité des apps générées.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l’obtenir',
        content: [
          '**Vous installez Dyad par un téléchargement classique depuis le site officiel, et aucune inscription n’est requise pour l’application gratuite.**',
          'La page de téléchargement propose un canal stable et un canal bêta ; selon la page, la bêta reçoit des fonctions en avant-première et peut être moins stable. Le guide de démarrage indique que Node.js, l’environnement d’exécution JavaScript qui fait tourner vos apps, s’installe séparément, et que Windows peut afficher un avertissement Microsoft où vous cliquez sur « Informations complémentaires » puis « Exécuter quand même ». La version v1.23.0 sur GitHub liste un installateur Windows, un .deb, un .rpm, un AppImage et des fichiers .zip pour macOS.',
        ],
        columns: ['Plateforme', 'Comment l’obtenir'],
        rows: [
          { 'Plateforme': '[macOS](https://www.dyad.sh/download)', 'Comment l’obtenir': 'Télécharger pour Apple Silicon (M1+) ou Intel' },
          { 'Plateforme': '[Windows](https://www.dyad.sh/download)', 'Comment l’obtenir': 'Télécharger et lancer l’installateur' },
          { 'Plateforme': '[Linux](https://www.dyad.sh/download)', 'Comment l’obtenir': '.deb, .rpm ou AppImage' },
          { 'Plateforme': '[Site web](https://www.dyad.sh)', 'Comment l’obtenir': 'Site officiel, documentation et prix' },
          { 'Plateforme': '[Politique de confidentialité](https://www.dyad.sh/docs/policies/privacy-policy)', 'Comment l’obtenir': 'Politique de l’éditeur, mise à jour le 22 juin 2026' },
          { 'Plateforme': '[GitHub](https://github.com/dyad-sh/dyad)', 'Comment l’obtenir': 'Code source et téléchargements des versions' },
        ],
        note: 'L’éditeur n’indique aucune valeur matérielle ; sa FAQ dit que si vous pouvez exécuter Node.js, vous pouvez utiliser Dyad, et suggère un modèle hébergé si votre ordinateur n’est pas puissant.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Dyad associe un créateur piloté par chat, un choix de modèles et quelques intégrations intégrées.** Tous les points ci-dessous sont des déclarations de l’éditeur tirées du site, de la documentation et de la FAQ.',
        ],
        items: [
          'Création d’apps par chat avec aperçu ; le code est stocké sous forme de fichiers que vous pouvez ouvrir dans VS Code.',
          'Choix du modèle : OpenAI, Anthropic, Google, Ollama, LM Studio et d’autres, modifiable à tout moment.',
          'Connexion à une base Supabase ou Neon avec schémas, migrations et authentification en quelques clics.',
          'Déploiement en un clic vers GitHub et Vercel, ou vers votre propre cloud.',
          'Une analyse de sécurité intégrée qui, selon l’éditeur, recherche des problèmes comme l’injection et les erreurs de configuration.',
          'Prise en charge de MCP, pour brancher des outils comme Chrome DevTools ou la navigation web.',
          'Dyad Pro ajoute, selon la FAQ, des modes supplémentaires pour les grandes bases de code et Smart Context.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**La destination de vos données dépend de la façon dont vous connectez un modèle, selon la politique de confidentialité de l’éditeur.**',
          'Dans l’application de bureau gratuite, vous utilisez vos propres clés API ou des modèles locaux. Avec une clé API, la politique indique que prompts et code sont envoyés directement au fournisseur du modèle ; avec un modèle local, tout reste sur votre appareil ; dans les deux cas, les données ne transitent jamais par les serveurs de Dyad.',
          'Avec Dyad Pro, prompts et code transitent par les serveurs de Dyad vers les modèles hébergés, et la politique indique que le contenu peut être journalisé temporairement dans des cas limités, comme l’examen d’abus ou de pannes. Elle ajoute que Dyad n’utilise jamais vos données pour entraîner ses propres modèles et que les fournisseurs n’entraînent pas dessus, sauf pour les modèles signalés dans l’interface comme autorisant l’entraînement par le fournisseur.',
          'La télémétrie est facultative (opt-in), utilise PostHog et, selon la politique, exclut les messages de chat, les prompts et le code. La fonction facultative « Upload Chat Session » envoie des transcriptions et des parties de votre code pour l’assistance, puis les supprime au bout d’environ un mois. PromptQuorum n’a pas vérifié ces déclarations.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**Dyad convient à ceux qui veulent des apps web créées avec l’IA sans confier le code à un créateur hébergé.**',
        ],
        items: [
          'Les non-développeurs qui veulent transformer une idée en app web fonctionnelle et savent installer Node.js et configurer une clé API.',
          'Les développeurs qui veulent un outil de prompt à app dont ils peuvent modifier le résultat dans VS Code et le pousser vers GitHub.',
          'Ceux qui veulent essayer des modèles locaux Ollama ou LM Studio pour créer des apps et acceptent que les résultats varient selon le modèle.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites et ce que nous n’avons pas pu vérifier',
        content: [
          '**Dyad a des limites déclarées, et plusieurs détails restent non vérifiés.**',
        ],
        items: [
          'Limite déclarée : selon sa FAQ, Dyad ne prend en charge que les apps basées sur JavaScript, y compris des apps mobiles hybrides créées avec une technologie web comme React. PHP, Ruby et les apps natives Swift ou Kotlin ne sont pas pris en charge.',
          'Limite déclarée : la FAQ indique que les petits modèles locaux peuvent ne pas suivre les instructions de Dyad et produire de mauvais résultats, et que les clés API gratuites ont souvent de faibles limites de tokens qui provoquent des erreurs de contexte sur de plus grosses apps.',
          'Ne convient pas : à qui a besoin d’un service hébergé avec une URL d’aperçu et sans installation locale ; Dyad s’exécute sur votre machine et nécessite Node.js.',
          'Non vérifié : la fiabilité, la sécurité ou la maintenabilité des apps générées. PromptQuorum n’a pas créé d’apps avec Dyad.',
          'Non vérifié : la configuration matérielle requise. Aucune valeur de RAM ou de GPU n’est indiquée, et le besoin dépend du modèle utilisé.',
          'Non vérifié : l’adresse et la ville de l’entreprise. La politique de confidentialité dit que Dyad est une entreprise américaine dont l’infrastructure se trouve aux États-Unis, sans donner d’adresse ; les conditions ne nomment aucune entité juridique.',
          'Non vérifié : la carte tarifaire de la page d’accueil cite macOS et Windows pour l’app gratuite, alors que la page de téléchargement propose aussi des versions Linux.',
          'Non vérifié : les avis indépendants et les retours d’utilisateurs. Les témoignages de la page d’accueil sont une sélection de l’éditeur lui-même.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Dyad face aux alternatives',
        itemHeadings: true,
        content: [
          '**La documentation et le README de Dyad le positionnent face à des créateurs d’apps IA hébergés. PromptQuorum ne l’a pas comparé à eux en conditions réelles.** Les comparaisons ci-dessous reprennent ce que dit la documentation de Dyad ; aucun autre créateur de prompt à app n’a encore de test PromptQuorum.',
        ],
        columns: ['Outil', 'Selon la doc de Dyad'],
        rows: [
          { 'Outil': 'Dyad', 'Selon la doc de Dyad': 'App de bureau locale, open source et gratuite' },
          { 'Outil': '[Lovable](https://lovable.dev)', 'Selon la doc de Dyad': 'Cité comme produit dont Dyad est une alternative' },
          { 'Outil': '[v0](https://v0.dev)', 'Selon la doc de Dyad': 'Cité comme produit dont Dyad est une alternative' },
          { 'Outil': '[Bolt.new](https://bolt.new)', 'Selon la doc de Dyad': 'Cité comme produit dont Dyad est une alternative' },
          { 'Outil': '[bolt.diy](https://github.com/stackblitz-labs/bolt.diy)', 'Selon la doc de Dyad': 'Décrit comme un autre créateur open source à héberger soi-même' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Dyad est-il gratuit ?',
            a: 'L’application de bureau est gratuite et sans inscription, selon la page d’accueil. Avec une clé API payante, vous payez votre fournisseur d’IA. Des offres optionnelles ajoutent des crédits hébergés : Dyad Pro coûte $20/mois (en dollars américains) avec 200 crédits d’IA, et Dyad Max $79/mois avec 900 crédits.',
          },
          {
            q: 'Dyad peut-il utiliser des modèles locaux comme Ollama et LM Studio ?',
            a: 'Oui, selon l’éditeur ; les deux figurent sur sa page d’accueil. La FAQ conseille un modèle local plus grand si votre machine peut l’exécuter, car les petits modèles peuvent ne pas suivre les instructions.',
          },
          {
            q: 'Suis-je propriétaire du code généré par Dyad ?',
            a: 'La page d’accueil indique que vous pouvez exporter un code propre et exécutable sans dépendance. Les conditions ne traitent pas la propriété du code généré ; lisez-les avant un usage commercial. Ce n’est pas un conseil juridique.',
          },
          {
            q: 'Quels systèmes d’exploitation sont pris en charge ?',
            a: 'Selon la page de téléchargement, macOS sur Apple Silicon et Intel, Windows et Linux. Node.js doit être installé séparément.',
          },
          {
            q: 'Quelle différence entre la version stable et la bêta ?',
            a: 'La page de téléchargement décrit la bêta comme des mises à jour plus fréquentes avec des fonctions en avant-première, potentiellement moins stables. La version 1.23.0 est la dernière stable ; 1.24.0-beta.1 est une bêta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Dyad mérite un coup d’œil si vous voulez créer des apps web avec l’IA en gardant le code et le choix du modèle sur votre propre ordinateur.**',
          'Sur le papier, il couvre beaucoup : une app de bureau gratuite, un cœur Apache 2.0, vos propres clés ou des modèles locaux, Supabase et Neon, un déploiement vers GitHub et Vercel, et MCP. Le développement est actif, avec une version stable le 9 novembre 2026 et un commit le 17 novembre 2026.',
          'Les compromis sont indiqués par l’éditeur lui-même : apps basées sur JavaScript uniquement, résultats inégaux avec de petits modèles locaux et une installation de Node.js. Le dossier src/pro est « fair-source » et non open source. PromptQuorum n’a pas testé l’application ; essayez-la sur un petit projet et relisez le code généré avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de Dyad](https://www.dyad.sh) — description de l’éditeur, fonctions, offres et prix, consulté le 18 novembre 2026.',
          '[Page de téléchargement](https://www.dyad.sh/download) — plateformes, canaux stable et bêta, consulté le 18 novembre 2026.',
          '[Présentation de la documentation](https://www.dyad.sh/docs) — positionnement face aux autres créateurs, consulté le 18 novembre 2026.',
          '[FAQ](https://www.dyad.sh/docs/faq) — types d’apps pris en charge, conseil sur les modèles locaux, Node.js, consulté le 18 novembre 2026.',
          '[Guide de démarrage](https://www.dyad.sh/docs/getting-started/quickstart) — étapes d’installation et exigence Node.js, consulté le 18 novembre 2026.',
          '[Politique de confidentialité](https://www.dyad.sh/docs/policies/privacy-policy) — flux de données, télémétrie, déclaration d’entreprise américaine, mise à jour le 22 juin 2026, consulté le 18 novembre 2026.',
          '[Conditions d’utilisation](https://www.dyad.sh/docs/policies/terms) — formulation sur la propriété, consulté le 18 novembre 2026.',
          '[Dépôt GitHub de Dyad](https://github.com/dyad-sh/dyad) — README, fichiers de licence et dernier commit, consulté le 18 novembre 2026.',
          '[Version v1.23.0](https://github.com/dyad-sh/dyad/releases/tag/v1.23.0) — dernière version stable, date et fichiers à télécharger, consulté le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Cline](/fr/power-local-llm/cline-review) — Agent de codage autonome pour VS Code pouvant utiliser des modèles locaux.',
          '[Test d’OpenCode](/fr/power-local-llm/opencode-review) — Agent de codage open source pour le terminal.',
          '[Test d’Aider](/fr/power-local-llm/aider-review) — Outil de programmation en binôme pour le terminal, compatible avec les modèles locaux.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    theme: 'Coding Assistants',
    heroImage: '/images/dyad-review-hero-ja.webp',
    title: 'Dyadレビュー：デスクトップで使えるローカル型オープンソースAIアプリビルダー',
    seoTitle: 'Dyadレビュー：ローカル型オープンソースAIアプリビルダー',
    intro:
      'Dyadは、チャットのプロンプトからWebアプリを作り、各プロジェクトを通常のファイルとしてお使いのPCに保存するデスクトップアプリです。AIモデルは自分で選びます。自分のAPIキー、ローカルのOllamaやLM Studioのモデル、有料のDyad Proプランのホスト型モデルのいずれかです。このレビューは、メーカーのページ、プライバシーポリシー、GitHubリポジトリを2026年11月18日に確認した内容に基づいています。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'Dyadはプロジェクトをお使いのPCにファイルとして保存するデスクトップ型AIアプリビルダーです。自分のAPIキーやローカルモデルで使えます。ライセンス、料金、プライバシーを解説。',
    twitterDescription:
      'Dyadはデスクトップ上でプロンプトからWebアプリを作ります。自分のAPIキーやローカルのOllama、LM Studioモデルに対応。コアはApache 2.0、有料Proプランあり。',
    audience:
      '自分のPCでプロンプトからWebアプリを作りたい非開発者と開発者、ホスト型アプリビルダーのオープンソース代替を検討しているチーム',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Dyad',
    targetKeywords: [
      'Dyad レビュー',
      'Dyad AIアプリビルダー',
      'ローカル オープンソース AIアプリビルダー',
      'Dyad Ollama',
      'Dyad 料金',
      'Dyad プライバシー',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Dyadは、macOS、Windows、Linux向けの無料のオープンソース・デスクトップアプリで、チャットのプロンプトからWebアプリを作り、各プロジェクトを通常のファイルとしてお使いのPCに保存します。** 自分のAPIキー、またはOllamaやLM Studioのローカルモデルで動作します。FAQによると作れるのはJavaScriptベースのアプリのみで、結果は選ぶモデルによって変わります。',
    quickAnswerTop: {
      ja: {
        question: 'Dyadとは何で、どんな人向けですか？',
        answer:
          'Dyadはデスクトップ型のAIアプリビルダーです。チャットでアプリを説明し、生成されたコードを承認すると、ライブプレビューが表示されます。AIでWebアプリを作りつつ、コードは自分のPCに置き、モデルも自分で選びたい人に向いています。',
        bullets: [
          '対応プラットフォーム：macOS（Apple SiliconとIntel）、Windows、Linux（.deb、.rpm、AppImage）。',
          '価格：登録不要の無料デスクトップアプリ。任意でDyad ProとDyad Maxのプランあり。',
          'ライセンス：Apache 2.0。ただしsrc/proフォルダーはフェアソース・ライセンス。',
          'モデル：自分のAPIキー、ローカルのOllamaやLM Studio、またはDyad Pro経由のホスト型モデル。',
          'データベースとデプロイ：Supabase、Neon、GitHub、Vercelとの連携。',
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
      { label: '制限事項と確認できなかったこと', anchor: 'who-should-not-use' },
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
            text: 'Dyadは、チャットのプロンプトをWebアプリに変え、通常のプロジェクトファイルとしてPCに保存するデスクトップアプリです。モデルは自由に選べ、ローカルのOllamaやLM Studioも使えます。',
          },
          {
            type: 'plain-terms',
            text: 'ホスト型サービスではなく、自分のマシン上で動くAIアプリビルダーと考えてください。コードは自分が管理するフォルダーに残り、プロンプトの送信先は接続したモデルによって決まります。',
          },
        ],
        items: [
          'ダウンロードページにはmacOS、Windows、Linux向けのインストーラーまたはパッケージがあります。クイックスタートによると、Node.jsは別途インストールが必要です。',
          'src/proフォルダー以外のコードはApache 2.0です。src/proはFunctional Source License 1.1のフェアソースです。',
          '自分のAPIキーを使う場合、プロンプトとコードはモデル提供元へ直接送られます。ローカルモデルなら端末内に留まります（プライバシーポリシー）。',
          'Dyad Proはホスト型モデルへの接続にDyadのサーバーを経由し、ポリシーによると限られた場合に内容が記録されることがあります。',
          'PromptQuorumはこのアプリを試していません。DyadのFAQは、小さなローカルモデルでは指示に従わないことがあると注意しています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AIが生成したコードにはバグやセキュリティ上の欠陥が含まれることがあります。実際のユーザーデータを扱うアプリを公開する前に、Dyadが書いた内容を確認してください。これは一般的な情報であり、法律やセキュリティの助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Dyadはデスクトッププログラムとして動くAIアプリビルダーで、プロジェクトはPC上のファイルとして保持されます。**',
          'アプリを提供しているのはDyad Tech, Inc.です。リポジトリのフェアソース・ライセンスファイルが著作権者として同社を挙げ、ホームページではWill Chen氏が作者として紹介されています。最新の安定版はバージョン1.23.0で、2026年11月9日に公開されました。2026年11月13日にはベータ版1.24.0-beta.1が出ており、リポジトリのメインブランチへの最後のコミットは2026年11月17日です。開発は継続しているため、放置プロジェクトの警告は該当しません。',
          'チャットでアプリを説明し、Dyadが生成したコードを承認すると、チャットの横にプレビューが表示されます。READMEはLovable、v0、Boltのローカル版の代替として紹介しており、ホームページによると既存のリポジトリからのインポート、VS Codeでの編集、通常のコードとしてのエクスポートが可能です。ホームページの図には標準的なNext.jsとありますが、生成アプリがどのフレームワークを使うかはクイックスタートに書かれていません。',
          'これらはメーカーの説明です。PromptQuorumはアプリを実行しておらず、生成されるアプリの信頼性も測定していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Dyadは公式サイトから通常どおりダウンロードしてインストールします。無料アプリの利用に登録は不要です。**',
          'ダウンロードページには安定版チャンネルとベータ版チャンネルがあり、ベータ版は新機能を早く試せる一方、安定性が低い場合があるとされています。クイックスタートによると、アプリを動かすJavaScript実行環境のNode.jsは別途インストールが必要で、Windowsでは「詳細情報」から「実行」を選ぶMicrosoftの警告が出ることがあります。GitHubのv1.23.0リリースには、Windows用インストーラー、.deb、.rpm、AppImage、macOS用の.zipが並んでいます。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[macOS](https://www.dyad.sh/download)', '入手方法': 'Apple Silicon（M1以降）またはIntel向けをダウンロード' },
          { 'プラットフォーム': '[Windows](https://www.dyad.sh/download)', '入手方法': 'ダウンロードしてインストーラーを実行' },
          { 'プラットフォーム': '[Linux](https://www.dyad.sh/download)', '入手方法': '.deb、.rpm、AppImage' },
          { 'プラットフォーム': '[公式サイト](https://www.dyad.sh)', '入手方法': '公式サイト、ドキュメント、料金' },
          { 'プラットフォーム': '[プライバシーポリシー](https://www.dyad.sh/docs/policies/privacy-policy)', '入手方法': 'メーカーのポリシー（2026年6月22日更新）' },
          { 'プラットフォーム': '[GitHub](https://github.com/dyad-sh/dyad)', '入手方法': 'ソースコードとリリースのダウンロード' },
        ],
        note: 'メーカーはハードウェアの数値を示していません。FAQには「Node.jsを実行できればDyadを使える」とあり、PCの性能が低い場合はホスト型モデルを勧めています。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Dyadは、チャット操作のビルダーにモデル選択と内蔵の連携機能を組み合わせています。** 以下はすべて、公式サイト、ドキュメント、FAQにあるメーカーの説明です。',
        ],
        items: [
          'プレビュー付きのチャットによるアプリ作成。コードはVS Codeで開けるファイルとして保存されます。',
          'モデルの選択：OpenAI、Anthropic、Google、Ollama、LM Studioなど。いつでも切り替えられます。',
          'SupabaseまたはNeonのデータベースに接続。スキーマ、マイグレーション、認証を数クリックで設定できます。',
          'GitHubとVercel、または自分のクラウドへのワンクリック・デプロイ。',
          'インジェクションや設定ミスなどの問題を調べるとメーカーが説明する、内蔵のセキュリティスキャン。',
          'MCP対応。Chrome DevToolsやWebブラウジングなどのツールを接続できます。',
          'FAQによると、Dyad Proでは大規模コードベース向けの追加モードとSmart Contextが使えます。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**メーカーのプライバシーポリシーによると、データの送信先はモデルの接続方法によって決まります。**',
          '無料のデスクトップアプリでは、自分のAPIキーまたはローカルモデルを使います。ポリシーによると、APIキーの場合はプロンプトとコードがモデル提供元へ直接送られ、ローカルモデルの場合はすべて端末内に留まり、どちらの場合もデータがDyadのサーバーを通ることはありません。',
          'Dyad Proでは、プロンプトとコードがDyadのサーバーを経由してホスト型モデルに届きます。ポリシーによると、不正利用や障害の調査といった限られた場合に、内容が一時的に記録されることがあります。また、Dyadが自社モデルの学習にデータを使うことはなく、モデル提供元も学習に使わないとされています。ただし、モデル画面で提供元による学習を許可すると表示されているモデルは例外です。',
          'テレメトリーはオプトイン方式でPostHogを使い、ポリシーによるとチャットメッセージ、プロンプト、コードは含まれません。任意の「Upload Chat Session」機能は、サポート用に会話の記録とコードの一部を送信し、約1か月後に削除されます。PromptQuorumはこれらの説明を検証していません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Dyadは、ホスト型ビルダーにコードを預けずにAIでWebアプリを作りたい人に向いています。**',
        ],
        items: [
          'アイデアを動くWebアプリにしたく、Node.jsとAPIキーを設定できる非開発者。',
          '生成物をVS Codeで編集してGitHubにプッシュできる、プロンプトからアプリを作るツールがほしい開発者。',
          'ローカルのOllamaやLM Studioのモデルでアプリ作成を試したく、結果がモデルによって変わることを理解している人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '制限事項と確認できなかったこと',
        content: [
          '**Dyadには明記された制限があり、いくつかの点は未確認のままです。**',
        ],
        items: [
          '明記された制限：FAQによると、DyadがサポートするのはJavaScriptベースのアプリのみで、Reactなどのウェブ技術によるハイブリッドモバイルアプリを含みます。PHP、Ruby、SwiftやKotlinのネイティブアプリには対応していません。',
          '明記された制限：FAQによると、小さなローカルモデルはDyadの指示に従わず不適切な出力になることがあり、無料のAPIキーはトークン上限が低いため、大きめのアプリではコンテキストエラーが起きやすくなります。',
          '向かない人：プレビューURL付きのホスト型サービスをローカル設定なしで使いたい人。DyadはPC上で動き、Node.jsが必要です。',
          '未確認：生成されたアプリの信頼性、安全性、保守しやすさ。PromptQuorumはDyadでアプリを作っていません。',
          '未確認：必要なハードウェア。RAMやGPUの数値は示されておらず、必要量は使うモデルによって変わります。',
          '未確認：会社の住所と市区町村。プライバシーポリシーはDyadが米国の会社でインフラも米国にあるとしていますが、住所は書かれておらず、利用規約にも法人名はありません。',
          '未確認：ホームページの料金カードは無料アプリの対応OSをmacOSとWindowsとしていますが、ダウンロードページにはLinux版もあります。',
          '未確認：独立したレビューやユーザーの報告。ホームページの利用者の声は、メーカー自身が選んだものです。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Dyadと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Dyad自身のドキュメントとREADMEは、ホスト型のAIアプリビルダーと並べて位置づけています。PromptQuorumは実際に比較してはいません。** 以下の比較はDyadのドキュメントの記述を繰り返したものです。他のプロンプトからアプリを作るビルダーには、まだPromptQuorumのレビューがありません。',
        ],
        columns: ['ツール', 'Dyadのドキュメントでの記載'],
        rows: [
          { 'ツール': 'Dyad', 'Dyadのドキュメントでの記載': 'ローカル型、オープンソース、無料のデスクトップアプリ' },
          { 'ツール': '[Lovable](https://lovable.dev)', 'Dyadのドキュメントでの記載': 'Dyadが代替になる製品として記載' },
          { 'ツール': '[v0](https://v0.dev)', 'Dyadのドキュメントでの記載': 'Dyadが代替になる製品として記載' },
          { 'ツール': '[Bolt.new](https://bolt.new)', 'Dyadのドキュメントでの記載': 'Dyadが代替になる製品として記載' },
          { 'ツール': '[bolt.diy](https://github.com/stackblitz-labs/bolt.diy)', 'Dyadのドキュメントでの記載': '自分で動かすもう一つのオープンソースビルダーと説明' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Dyadは無料ですか？',
            a: 'ホームページによると、デスクトップアプリは無料で登録も不要です。有料のAPIキーを使う場合は、AI提供元に料金を支払います。任意のプランでホスト型クレジットを追加できます。Dyad Proは月額$20（米ドル）でAIクレジット200、Dyad Maxは月額$79でクレジット900です。',
          },
          {
            q: 'DyadはOllamaやLM Studioなどのローカルモデルを使えますか？',
            a: 'メーカーによると使えます。どちらもホームページに記載があります。FAQは、小さなモデルは指示に従わないことがあるため、マシンが対応できるなら大きめのローカルモデルを勧めています。',
          },
          {
            q: 'Dyadが生成したコードは自分のものになりますか？',
            a: 'ホームページには、ロックインなしで整ったコードをエクスポートできるとあります。利用規約は生成コードの所有権に触れていないため、商用利用の前にお読みください。これは法的助言ではありません。',
          },
          {
            q: '対応しているOSは何ですか？',
            a: 'ダウンロードページによると、Apple SiliconとIntelのmacOS、Windows、Linuxです。Node.jsは別途インストールが必要です。',
          },
          {
            q: '安定版とベータ版の違いは何ですか？',
            a: 'ダウンロードページはベータ版を、更新頻度が高く新機能を早く試せるが安定性が低い場合があるものと説明しています。バージョン1.23.0が最新の安定版で、1.24.0-beta.1はベータ版です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**コードとモデルの選択を自分のPCに置いたままAIでWebアプリを作りたいなら、Dyadは試す価値があります。**',
          '仕様上は多くをカバーしています。無料のデスクトップアプリ、Apache 2.0のコア、自分のキーまたはローカルモデル、SupabaseとNeon、GitHubとVercelへのデプロイ、MCPです。開発は活発で、2026年11月9日に安定版、2026年11月17日にコミットがあります。',
          'トレードオフはメーカー自身が示しています。JavaScriptベースのアプリのみ、小さなローカルモデルでは結果にばらつきがあること、Node.jsの設定が必要なことです。src/proフォルダーはオープンソースではなくフェアソースです。PromptQuorumはアプリを試していないため、小さなプロジェクトで試し、生成コードを確認してから頼るようにしてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Dyad公式サイト](https://www.dyad.sh) — メーカーの説明、機能、プランと価格。2026年11月18日に確認。',
          '[ダウンロードページ](https://www.dyad.sh/download) — 対応プラットフォーム、安定版とベータ版のチャンネル。2026年11月18日に確認。',
          '[ドキュメント概要](https://www.dyad.sh/docs) — 他のビルダーとの位置づけ。2026年11月18日に確認。',
          '[FAQ](https://www.dyad.sh/docs/faq) — 対応アプリの種類、ローカルモデルの助言、Node.js。2026年11月18日に確認。',
          '[クイックスタート](https://www.dyad.sh/docs/getting-started/quickstart) — インストール手順とNode.jsの要件。2026年11月18日に確認。',
          '[プライバシーポリシー](https://www.dyad.sh/docs/policies/privacy-policy) — データの流れ、テレメトリー、米国企業との記載（2026年6月22日更新）。2026年11月18日に確認。',
          '[利用規約](https://www.dyad.sh/docs/policies/terms) — 所有権に関する記述。2026年11月18日に確認。',
          '[DyadのGitHubリポジトリ](https://github.com/dyad-sh/dyad) — README、ライセンスファイル、最後のコミット。2026年11月18日に確認。',
          '[リリースv1.23.0](https://github.com/dyad-sh/dyad/releases/tag/v1.23.0) — 最新の安定版のバージョン、日付、ダウンロードファイル。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Clineレビュー](/ja/power-local-llm/cline-review) — ローカルモデルも使えるVS Code向けの自律型コーディングエージェント。',
          '[OpenCodeレビュー](/ja/power-local-llm/opencode-review) — オープンソースのターミナル向けコーディングエージェント。',
          '[Aiderレビュー](/ja/power-local-llm/aider-review) — ローカルモデルで動くターミナル向けのペアプログラミングツール。',
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
    theme: 'Coding Assistants',
    heroImage: '/images/dyad-review-hero-pt.webp',
    title: 'Análise do Dyad: criador de apps com IA de código aberto e local para o seu desktop',
    seoTitle: 'Análise do Dyad: criador de apps com IA local e aberto',
    intro:
      'O Dyad é um app de desktop que cria apps web a partir de prompts em um chat e guarda cada projeto como arquivos comuns no seu computador. Você escolhe o modelo de IA: sua própria chave de API, um modelo local do Ollama ou do LM Studio, ou modelos hospedados pelo plano pago Dyad Pro. Esta análise se baseia nas páginas do fabricante, na política de privacidade e no repositório do GitHub, verificados em 18 de novembro de 2026. A PromptQuorum não testou o app na prática.',
    metaDescription:
      'O Dyad é um criador de apps com IA que guarda projetos como arquivos no seu PC, com suas chaves de API ou modelos locais. Licença e privacidade.',
    twitterDescription:
      'O Dyad cria apps web a partir de prompts no seu desktop, com suas chaves de API ou modelos locais do Ollama e do LM Studio. Núcleo Apache 2.0, planos Pro pagos.',
    audience:
      'Pessoas sem experiência técnica e desenvolvedores que querem criar apps web com prompts no próprio computador, e equipes que avaliam uma alternativa aberta aos criadores de apps hospedados',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Dyad',
    targetKeywords: [
      'análise do Dyad',
      'Dyad criador de apps com IA',
      'criador de apps com IA local de código aberto',
      'Dyad Ollama',
      'preços do Dyad',
      'privacidade do Dyad',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Dyad é um app de desktop gratuito e de código aberto para macOS, Windows e Linux que cria apps web a partir de prompts em um chat e guarda cada projeto como arquivos comuns no seu computador.** Ele funciona com suas próprias chaves de API ou com modelos locais por meio do Ollama e do LM Studio. Segundo o FAQ, ele cria apenas apps baseados em JavaScript, e o resultado depende do modelo escolhido.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Dyad e para quem ele serve?',
        answer:
          'O Dyad é um criador de apps com IA para desktop: você descreve um app no chat, aprova o código gerado e vê uma prévia ao vivo. Serve para quem quer criar apps web com IA, mantendo o código na própria máquina e escolhendo o próprio modelo.',
        bullets: [
          'Plataformas: macOS (Apple Silicon e Intel), Windows, Linux (.deb, .rpm, AppImage).',
          'Preço: app de desktop gratuito sem cadastro; planos opcionais Dyad Pro e Dyad Max.',
          'Licença: Apache 2.0, exceto a pasta src/pro, com uma licença «fair-source».',
          'Modelos: suas próprias chaves de API, Ollama ou LM Studio localmente, ou modelos hospedados via Dyad Pro.',
          'Banco de dados e publicação: integrações com Supabase, Neon, GitHub e Vercel.',
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
      { label: 'Limites e o que não conseguimos verificar', anchor: 'who-should-not-use' },
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
            text: 'O Dyad é um app de desktop que transforma prompts de chat em apps web guardados como arquivos de projeto comuns no seu computador, com o modelo de IA que você escolher, inclusive modelos locais do Ollama e do LM Studio.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um criador de apps com IA que roda na sua própria máquina, e não em um serviço hospedado. Seu código fica em uma pasta que você controla, e para onde seus prompts vão depende do modelo que você conectar.',
          },
        ],
        items: [
          'A página de download oferece um instalador ou pacote para macOS, Windows e Linux; segundo o guia de início rápido, o Node.js é instalado separadamente.',
          'O código fora da pasta src/pro é Apache 2.0; src/pro é «fair-source» sob a Functional Source License 1.1.',
          'Com sua própria chave de API, prompts e código vão direto ao provedor do modelo; com um modelo local, ficam no seu dispositivo (política de privacidade).',
          'O Dyad Pro encaminha as solicitações pelos servidores do Dyad até os modelos hospedados, e a política diz que o conteúdo pode ser registrado em casos limitados.',
          'A PromptQuorum não testou o app. O próprio FAQ do Dyad avisa que modelos locais pequenos podem não seguir suas instruções.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Código gerado por IA pode conter erros e falhas de segurança. Revise o que o Dyad escreve antes de publicar um app que trate dados reais de usuários. Isto é informação geral, não aconselhamento jurídico nem de segurança.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Dyad é um criador de apps com IA que roda como programa de desktop, com o projeto guardado como arquivos no seu computador.**',
          'O app é feito pela Dyad Tech, Inc.; o arquivo de licença «fair-source» do repositório a indica como titular dos direitos, e a página inicial descreve Will Chen como o criador. A versão estável mais recente é a 1.23.0, publicada em 9 de novembro de 2026. Uma beta, 1.24.0-beta.1, veio em 13 de novembro de 2026, e o último commit na branch principal do repositório é de 17 de novembro de 2026; portanto o desenvolvimento continua e não se aplica nenhum aviso de projeto abandonado.',
          'Você descreve um app em um chat, aprova o código que o Dyad gera e vê uma prévia ao lado do chat. O README o descreve como uma alternativa local ao Lovable, ao v0 e ao Bolt, e a página inicial diz que é possível importar projetos de repositórios existentes, editá-los no VS Code e exportá-los como código comum. O gráfico da página inicial menciona Next.js padrão, mas o guia de início rápido não diz qual framework os apps gerados usam.',
          'Essas descrições são declarações do fabricante. A PromptQuorum não executou o app e não mediu a confiabilidade dos apps gerados.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o Dyad com um download normal no site oficial, e o app gratuito não exige cadastro.**',
          'A página de download oferece um canal estável e um canal beta; segundo a página, a beta recebe recursos antecipados e pode ser menos estável. O guia de início rápido diz que o Node.js, o ambiente de execução JavaScript que roda seus apps, é instalado separadamente, e que no Windows pode aparecer um aviso da Microsoft em que você clica em «Mais informações» e depois em «Executar assim mesmo». A versão v1.23.0 no GitHub lista um instalador para Windows, um .deb, um .rpm, um AppImage e arquivos .zip para macOS.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[macOS](https://www.dyad.sh/download)', 'Como obter': 'Baixar para Apple Silicon (M1+) ou Intel' },
          { 'Plataforma': '[Windows](https://www.dyad.sh/download)', 'Como obter': 'Baixar e executar o instalador' },
          { 'Plataforma': '[Linux](https://www.dyad.sh/download)', 'Como obter': '.deb, .rpm ou AppImage' },
          { 'Plataforma': '[Site](https://www.dyad.sh)', 'Como obter': 'Site oficial, documentação e preços' },
          { 'Plataforma': '[Política de privacidade](https://www.dyad.sh/docs/policies/privacy-policy)', 'Como obter': 'Política do fabricante, atualizada em 22 de junho de 2026' },
          { 'Plataforma': '[GitHub](https://github.com/dyad-sh/dyad)', 'Como obter': 'Código-fonte e downloads das versões' },
        ],
        note: 'O fabricante não informa valores de hardware; seu FAQ diz que, se você consegue executar o Node.js, consegue usar o Dyad, e sugere um modelo hospedado se o seu computador não for potente.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O Dyad combina um criador guiado por chat com escolha de modelo e algumas integrações embutidas.** Todos os itens abaixo são declarações do fabricante tiradas do site, da documentação e do FAQ.',
        ],
        items: [
          'Criação de apps por chat com prévia; o código fica como arquivos que você pode abrir no VS Code.',
          'Escolha de modelo: OpenAI, Anthropic, Google, Ollama, LM Studio e outros, trocáveis a qualquer momento.',
          'Conexão com um banco de dados Supabase ou Neon, com esquemas, migrações e autenticação em poucos cliques.',
          'Publicação com um clique no GitHub e na Vercel, ou na sua própria nuvem.',
          'Uma verificação de segurança embutida que, segundo o fabricante, procura problemas como injeção e erros de configuração.',
          'Suporte a MCP, para conectar ferramentas como o Chrome DevTools ou a navegação na web.',
          'O Dyad Pro adiciona, segundo o FAQ, modos extras para bases de código grandes e o Smart Context.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Para onde seus dados vão depende de como você conecta um modelo, segundo a política de privacidade do fabricante.**',
          'No app de desktop gratuito, você usa suas próprias chaves de API ou modelos locais. Com uma chave de API, a política diz que prompts e código são enviados diretamente ao provedor do modelo; com um modelo local, tudo fica no seu dispositivo; nos dois casos os dados nunca passam pelos servidores do Dyad.',
          'No Dyad Pro, prompts e código passam pelos servidores do Dyad até os modelos hospedados, e a política diz que o conteúdo pode ser registrado temporariamente em casos limitados, como investigação de abuso ou de quedas do serviço. Ela também diz que o Dyad nunca usa seus dados para treinar os próprios modelos e que os provedores não treinam com eles, exceto os modelos indicados na interface como permitindo o treinamento pelo provedor.',
          'A telemetria é opcional (opt-in), usa o PostHog e, segundo a política, exclui mensagens de chat, prompts e código. O recurso opcional «Upload Chat Session» envia transcrições e partes do seu código para suporte e é apagado após cerca de um mês. A PromptQuorum não verificou essas declarações.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Dyad serve para quem quer apps web criados com IA sem entregar o código a um criador hospedado.**',
        ],
        items: [
          'Pessoas sem experiência técnica que querem transformar uma ideia em um app web funcional e conseguem configurar o Node.js e uma chave de API.',
          'Desenvolvedores que querem uma ferramenta de prompt para app cujo resultado possam editar no VS Code e enviar ao GitHub.',
          'Quem quer experimentar modelos locais do Ollama ou do LM Studio para criar apps e aceita que os resultados variam conforme o modelo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites e o que não conseguimos verificar',
        content: [
          '**O Dyad tem limites declarados, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Limite declarado: segundo o FAQ, o Dyad só aceita apps baseados em JavaScript, incluindo apps móveis híbridos feitos com tecnologia web como React. Não aceita PHP, Ruby nem apps nativos em Swift ou Kotlin.',
          'Limite declarado: o FAQ diz que modelos locais pequenos podem não seguir as instruções do Dyad e gerar resultados ruins, e que chaves de API gratuitas costumam ter limites baixos de tokens, que causam erros de contexto em apps maiores.',
          'Não serve: para quem precisa de um serviço hospedado com URL de prévia e sem configuração local; o Dyad roda na sua máquina e precisa do Node.js.',
          'Não verificado: a confiabilidade, a segurança ou a facilidade de manutenção dos apps gerados. A PromptQuorum não criou apps com o Dyad.',
          'Não verificado: os requisitos de hardware. Não há valor de RAM nem de GPU informado, e a exigência depende do modelo usado.',
          'Não verificado: o endereço e a cidade da empresa. A política de privacidade diz que o Dyad é uma empresa dos EUA com infraestrutura nos EUA, mas não dá endereço; os termos não citam nenhuma entidade jurídica.',
          'Não verificado: o cartão de preços da página inicial cita macOS e Windows para o app gratuito, enquanto a página de download oferece também versões para Linux.',
          'Não verificado: avaliações independentes e relatos de usuários. Os depoimentos da página inicial são uma seleção do próprio fabricante.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Dyad e as alternativas',
        itemHeadings: true,
        content: [
          '**A documentação e o README do Dyad o posicionam diante de criadores de apps com IA hospedados. A PromptQuorum não o comparou com eles na prática.** As comparações abaixo repetem o que a documentação do Dyad diz; ainda não há análise da PromptQuorum de outro criador de prompt para app.',
        ],
        columns: ['Ferramenta', 'Segundo a doc do Dyad'],
        rows: [
          { 'Ferramenta': 'Dyad', 'Segundo a doc do Dyad': 'App de desktop local, de código aberto e gratuito' },
          { 'Ferramenta': '[Lovable](https://lovable.dev)', 'Segundo a doc do Dyad': 'Citado como produto ao qual o Dyad é alternativa' },
          { 'Ferramenta': '[v0](https://v0.dev)', 'Segundo a doc do Dyad': 'Citado como produto ao qual o Dyad é alternativa' },
          { 'Ferramenta': '[Bolt.new](https://bolt.new)', 'Segundo a doc do Dyad': 'Citado como produto ao qual o Dyad é alternativa' },
          { 'Ferramenta': '[bolt.diy](https://github.com/stackblitz-labs/bolt.diy)', 'Segundo a doc do Dyad': 'Descrito como outro criador de código aberto que você mesmo executa' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Dyad é gratuito?',
            a: 'O app de desktop é gratuito e não exige cadastro, segundo a página inicial. Se você usar uma chave de API paga, paga ao seu provedor de IA. Planos opcionais adicionam créditos hospedados: o Dyad Pro custa $20/mês (em dólares americanos) com 200 créditos de IA, e o Dyad Max $79/mês com 900 créditos.',
          },
          {
            q: 'O Dyad pode usar modelos locais como Ollama e LM Studio?',
            a: 'Sim, segundo o fabricante; os dois aparecem na página inicial. O FAQ recomenda um modelo local maior se a sua máquina conseguir executá-lo, porque modelos pequenos podem não seguir as instruções.',
          },
          {
            q: 'O código gerado pelo Dyad é meu?',
            a: 'A página inicial diz que você pode exportar código limpo e executável, sem dependência do fornecedor. Os termos não tratam da titularidade do código gerado, então leia-os antes de usar comercialmente. Isto não é aconselhamento jurídico.',
          },
          {
            q: 'Quais sistemas operacionais ele aceita?',
            a: 'Segundo a página de download, macOS em Apple Silicon e Intel, Windows e Linux. O Node.js precisa ser instalado separadamente.',
          },
          {
            q: 'Qual a diferença entre a versão estável e a beta?',
            a: 'A página de download descreve a beta como atualizações mais frequentes com recursos antecipados que podem ser menos estáveis. A versão 1.23.0 é a estável mais recente; a 1.24.0-beta.1 é uma beta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Dyad vale uma olhada se você quer criar apps web com IA mantendo o código e a escolha do modelo no seu próprio computador.**',
          'No papel, ele cobre bastante: um app de desktop gratuito, um núcleo Apache 2.0, suas próprias chaves ou modelos locais, Supabase e Neon, publicação no GitHub e na Vercel, e MCP. O desenvolvimento está ativo, com uma versão estável em 9 de novembro de 2026 e um commit em 17 de novembro de 2026.',
          'As contrapartidas são indicadas pelo próprio fabricante: apenas apps baseados em JavaScript, resultados desiguais com modelos locais pequenos e uma configuração do Node.js. A pasta src/pro é «fair-source», e não código aberto. A PromptQuorum não testou o app; experimente em um projeto pequeno e revise o código gerado antes de depender dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Dyad](https://www.dyad.sh) — descrição do fabricante, recursos, planos e preços, verificado em 18 de novembro de 2026.',
          '[Página de download](https://www.dyad.sh/download) — plataformas, canais estável e beta, verificado em 18 de novembro de 2026.',
          '[Visão geral da documentação](https://www.dyad.sh/docs) — posicionamento diante de outros criadores, verificado em 18 de novembro de 2026.',
          '[FAQ](https://www.dyad.sh/docs/faq) — tipos de app aceitos, conselho sobre modelos locais, Node.js, verificado em 18 de novembro de 2026.',
          '[Guia de início rápido](https://www.dyad.sh/docs/getting-started/quickstart) — passos de instalação e requisito do Node.js, verificado em 18 de novembro de 2026.',
          '[Política de privacidade](https://www.dyad.sh/docs/policies/privacy-policy) — fluxo de dados, telemetria, declaração de empresa dos EUA, atualizada em 22 de junho de 2026, verificado em 18 de novembro de 2026.',
          '[Termos de serviço](https://www.dyad.sh/docs/policies/terms) — texto sobre titularidade, verificado em 18 de novembro de 2026.',
          '[Repositório do Dyad no GitHub](https://github.com/dyad-sh/dyad) — README, arquivos de licença e último commit, verificado em 18 de novembro de 2026.',
          '[Versão v1.23.0](https://github.com/dyad-sh/dyad/releases/tag/v1.23.0) — versão estável mais recente, data e arquivos para download, verificado em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Cline](/pt/power-local-llm/cline-review) — Agente de programação autônomo para VS Code que pode usar modelos locais.',
          '[Análise do OpenCode](/pt/power-local-llm/opencode-review) — Agente de programação de código aberto para o terminal.',
          '[Análise do Aider](/pt/power-local-llm/aider-review) — Ferramenta de programação em dupla para o terminal que funciona com modelos locais.',
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
    theme: 'Coding Assistants',
    heroImage: '/images/dyad-review-hero-zh.webp',
    title: 'Dyad 评测：可在桌面本地运行的开源 AI 应用构建器',
    seoTitle: 'Dyad 评测：本地开源 AI 应用构建器，许可证与隐私',
    intro:
      'Dyad 是一款桌面应用，可根据聊天提示词生成 Web 应用，并把每个项目以普通文件的形式保存在您的电脑上。AI 模型由您自己选择：自备 API 密钥、本地的 Ollama 或 LM Studio 模型，或通过付费的 Dyad Pro 计划使用托管模型。本评测基于厂商页面、隐私政策和 GitHub 仓库，核查日期为 2026 年 11 月 18 日。PromptQuorum 未亲自实测该应用。',
    metaDescription:
      'Dyad 是桌面端 AI 应用构建器，项目以文件形式保存在您的电脑上，可用自己的 API 密钥或本地模型。涵盖许可证、套餐、隐私与局限，并说明哪些内容我们尚未核实。',
    twitterDescription:
      'Dyad 在桌面端根据提示词构建 Web 应用，支持自备 API 密钥或本地 Ollama、LM Studio 模型。核心为 Apache 2.0，另有付费 Pro 套餐。',
    audience:
      '想在自己电脑上用提示词构建 Web 应用的非开发者和开发者，以及正在评估托管式应用构建器的开源替代方案的团队',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Dyad',
    targetKeywords: [
      'Dyad 评测',
      'Dyad AI 应用构建器',
      '本地开源 AI 应用构建器',
      'Dyad Ollama',
      'Dyad 价格',
      'Dyad 隐私',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Dyad 是适用于 macOS、Windows 和 Linux 的免费开源桌面应用，可根据聊天提示词构建 Web 应用，并把每个项目以普通文件保存在您的电脑上。** 它可使用您自己的 API 密钥，或通过 Ollama 和 LM Studio 使用本地模型。其 FAQ 表示只能构建基于 JavaScript 的应用，效果取决于所选模型。',
    quickAnswerTop: {
      zh: {
        question: 'Dyad 是什么，适合谁用？',
        answer:
          'Dyad 是桌面端 AI 应用构建器：您在聊天中描述应用，确认生成的代码，即可看到实时预览。适合希望用 AI 构建 Web 应用、同时把代码留在自己电脑上并自选模型的人。',
        bullets: [
          '平台：macOS（Apple Silicon 和 Intel）、Windows、Linux（.deb、.rpm、AppImage）。',
          '价格：免费桌面应用，无需注册；另有可选的 Dyad Pro 和 Dyad Max 套餐。',
          '许可证：Apache 2.0，src/pro 文件夹除外，该文件夹采用 fair-source 许可证。',
          '模型：自备 API 密钥、本地 Ollama 或 LM Studio，或通过 Dyad Pro 使用托管模型。',
          '数据库与部署：集成 Supabase、Neon、GitHub 和 Vercel。',
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
      { label: '局限与我们无法核实的内容', anchor: 'who-should-not-use' },
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
            text: 'Dyad 是一款桌面应用，可把聊天提示词变成以普通项目文件保存在您电脑上的 Web 应用，模型由您自选，包括本地的 Ollama 和 LM Studio 模型。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作运行在您自己电脑上、而不是托管服务里的 AI 应用构建器。代码留在您控制的文件夹中，提示词发往何处取决于您连接的模型。',
          },
        ],
        items: [
          '下载页提供 macOS、Windows 和 Linux 的安装程序或安装包；快速入门指南称需要另行安装 Node.js。',
          'src/pro 文件夹以外的代码为 Apache 2.0；src/pro 采用 Functional Source License 1.1 的 fair-source 许可。',
          '使用自己的 API 密钥时，提示词和代码直接发送给模型提供商；使用本地模型时则留在您的设备上（隐私政策）。',
          'Dyad Pro 通过 Dyad 的服务器连接托管模型，政策称在有限情况下内容可能被记录。',
          'PromptQuorum 未实测该应用。Dyad 自己的 FAQ 提醒，较小的本地模型可能无法遵循其指令。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI 生成的代码可能含有错误和安全漏洞。发布处理真实用户数据的应用前，请先审查 Dyad 写出的内容。以上为一般性信息，不构成法律或安全建议。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Dyad 是以桌面程序形式运行的 AI 应用构建器，项目以文件形式保存在您的电脑上。**',
          '该应用由 Dyad Tech, Inc. 开发；仓库中的 fair-source 许可证文件将其列为版权方，官网首页称 Will Chen 为创建者。最新稳定版为 1.23.0，发布于 2026 年 11 月 9 日。测试版 1.24.0-beta.1 随后于 2026 年 11 月 13 日发布，仓库主分支的最近一次提交在 2026 年 11 月 17 日，因此开发仍在进行，不适用项目停更警告。',
          '您在聊天中描述应用，确认 Dyad 生成的代码，预览会显示在聊天旁边。README 将其描述为 Lovable、v0 和 Bolt 的本地替代方案，官网称可从现有仓库导入项目、在 VS Code 中编辑并导出为普通代码。官网首页的图示提到标准 Next.js，但快速入门指南没有说明生成的应用使用哪种框架。',
          '以上均为厂商的说法。PromptQuorum 未运行该应用，也未测量所生成应用的可靠性。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**从官方网站正常下载即可安装 Dyad，使用免费应用无需注册。**',
          '下载页提供稳定版和测试版两个渠道；页面称测试版可提前体验新功能，但可能不够稳定。快速入门指南称，运行您的应用所需的 JavaScript 运行时 Node.js 需要另行安装，Windows 上可能弹出 Microsoft 警告，需点击“更多信息”再点击“仍要运行”。GitHub 的 v1.23.0 版本列出了 Windows 安装程序、.deb、.rpm、AppImage 以及 macOS 的 .zip 文件。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[macOS](https://www.dyad.sh/download)', '获取方式': '下载 Apple Silicon（M1+）或 Intel 版' },
          { '平台': '[Windows](https://www.dyad.sh/download)', '获取方式': '下载并运行安装程序' },
          { '平台': '[Linux](https://www.dyad.sh/download)', '获取方式': '.deb、.rpm 或 AppImage' },
          { '平台': '[官网](https://www.dyad.sh)', '获取方式': '官方网站、文档和价格' },
          { '平台': '[隐私政策](https://www.dyad.sh/docs/policies/privacy-policy)', '获取方式': '厂商政策，更新于 2026 年 6 月 22 日' },
          { '平台': '[GitHub](https://github.com/dyad-sh/dyad)', '获取方式': '源代码和版本下载' },
        ],
        note: '厂商未给出硬件数值；其 FAQ 称只要能运行 Node.js 就能使用 Dyad，并建议电脑性能不足时使用托管模型。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Dyad 把聊天驱动的构建器、模型选择和若干内置集成结合在一起。** 以下各项均为厂商在官网、文档和 FAQ 中的说法。',
        ],
        items: [
          '通过聊天构建应用并带有预览，代码以文件形式保存，可在 VS Code 中打开。',
          '模型选择：OpenAI、Anthropic、Google、Ollama、LM Studio 等，可随时切换。',
          '连接 Supabase 或 Neon 数据库，几次点击即可设置表结构、迁移和身份验证。',
          '一键部署到 GitHub 和 Vercel，或部署到您自己的云。',
          '内置安全扫描，厂商称可检查注入和配置错误等问题。',
          '支持 MCP，可接入 Chrome DevTools 或网页浏览等工具。',
          '据 FAQ，Dyad Pro 增加了面向大型代码库的额外模式和 Smart Context。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**根据厂商的隐私政策，您的数据流向取决于您如何连接模型。**',
          '在免费桌面应用中，您使用自己的 API 密钥或本地模型。政策称，使用 API 密钥时提示词和代码直接发送给模型提供商；使用本地模型时一切都留在您的设备上；两种情况下数据都不会经过 Dyad 的服务器。',
          '使用 Dyad Pro 时，提示词和代码会经由 Dyad 的服务器转发到托管模型，政策称在调查滥用或故障等有限情况下，内容可能被临时记录。政策还称 Dyad 绝不会用您的数据训练自己的模型，模型提供商也不会用其训练，但在模型界面中标明允许提供商训练的模型除外。',
          '遥测为可选加入（opt-in），使用 PostHog，政策称不包含聊天消息、提示词和代码。可选的“Upload Chat Session”功能会为技术支持发送对话记录和部分代码，约一个月后删除。PromptQuorum 未核实这些说法。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Dyad 适合想用 AI 构建 Web 应用、又不想把代码交给托管构建器的人。**',
        ],
        items: [
          '想把创意变成可运行的 Web 应用，并且能设置 Node.js 和 API 密钥的非开发者。',
          '想要一款提示词生成应用的工具，并能在 VS Code 中编辑其输出、推送到 GitHub 的开发者。',
          '想尝试用本地 Ollama 或 LM Studio 模型构建应用，并接受结果因模型而异的人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '局限与我们无法核实的内容',
        content: [
          '**Dyad 有明确说明的局限，另有若干细节尚未核实。**',
        ],
        items: [
          '明确的局限：据其 FAQ，Dyad 仅支持基于 JavaScript 的应用，包括用 React 等 Web 技术构建的混合移动应用。不支持 PHP、Ruby，也不支持 Swift 或 Kotlin 原生应用。',
          '明确的局限：FAQ 称较小的本地模型可能无法遵循 Dyad 的指令并产生糟糕的输出，免费 API 密钥的 token 上限往往较低，会在较大的应用中引发上下文错误。',
          '不适合：需要带预览网址、无需本地配置的托管服务的人；Dyad 在您的电脑上运行，并需要 Node.js。',
          '未核实：所生成应用的可靠性、安全性和可维护性。PromptQuorum 未用 Dyad 构建过应用。',
          '未核实：硬件需求。未给出内存或 GPU 数值，需求取决于您使用的模型。',
          '未核实：公司的街道地址和城市。隐私政策称 Dyad 是一家美国公司，基础设施位于美国，但未给出地址；服务条款也未写明法律实体。',
          '未核实：官网首页的价格卡片列出免费应用支持 macOS 和 Windows，而下载页同时提供 Linux 版本。',
          '未核实：独立评测和用户反馈。官网首页的用户评价是厂商自己挑选的。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Dyad 与替代方案对比',
        itemHeadings: true,
        content: [
          '**Dyad 自己的文档和 README 把它与托管式 AI 应用构建器相提并论。PromptQuorum 未实际与它们对比。** 以下对比只是转述 Dyad 文档的说法；目前尚无其他提示词生成应用的构建器获得 PromptQuorum 评测。',
        ],
        columns: ['工具', 'Dyad 文档中的说法'],
        rows: [
          { '工具': 'Dyad', 'Dyad 文档中的说法': '本地、开源、免费的桌面应用' },
          { '工具': '[Lovable](https://lovable.dev)', 'Dyad 文档中的说法': '被列为 Dyad 可替代的产品' },
          { '工具': '[v0](https://v0.dev)', 'Dyad 文档中的说法': '被列为 Dyad 可替代的产品' },
          { '工具': '[Bolt.new](https://bolt.new)', 'Dyad 文档中的说法': '被列为 Dyad 可替代的产品' },
          { '工具': '[bolt.diy](https://github.com/stackblitz-labs/bolt.diy)', 'Dyad 文档中的说法': '被描述为另一款需自行运行的开源构建器' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Dyad 免费吗？',
            a: '据官网首页，桌面应用免费，无需注册。如果使用付费 API 密钥，则需向 AI 提供商付费。可选套餐增加托管额度：Dyad Pro 每月 $20（美元），含 200 个 AI 额度；Dyad Max 每月 $79，含 900 个额度。',
          },
          {
            q: 'Dyad 能使用 Ollama 和 LM Studio 等本地模型吗？',
            a: '据厂商称可以，官网首页提到了两者。FAQ 建议在电脑能运行时选择更大的本地模型，因为较小的模型可能无法遵循指令。',
          },
          {
            q: 'Dyad 生成的代码归我所有吗？',
            a: '官网首页称您可以导出干净、可运行的代码，没有锁定。服务条款没有涉及所生成代码的所有权，商用前请先阅读。这不是法律建议。',
          },
          {
            q: '支持哪些操作系统？',
            a: '据下载页，支持 Apple Silicon 和 Intel 的 macOS、Windows 以及 Linux。Node.js 需要另行安装。',
          },
          {
            q: '稳定版和测试版有什么区别？',
            a: '下载页将测试版描述为更新更频繁、可提前体验新功能，但可能不够稳定。1.23.0 是最新稳定版，1.24.0-beta.1 是测试版。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您想用 AI 构建 Web 应用，同时把代码和模型选择权留在自己的电脑上，Dyad 值得一试。**',
          '从资料上看，它覆盖面不小：免费桌面应用、Apache 2.0 核心、自备密钥或本地模型、Supabase 和 Neon、部署到 GitHub 和 Vercel，以及 MCP。开发活跃，2026 年 11 月 9 日发布稳定版，2026 年 11 月 17 日仍有提交。',
          '代价由厂商自己说明：仅限基于 JavaScript 的应用，较小的本地模型效果参差，以及需要设置 Node.js。src/pro 文件夹是 fair-source 而非开源。PromptQuorum 未实测该应用，请先用小项目试用，并在依赖之前审查生成的代码。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Dyad 官网](https://www.dyad.sh) — 厂商说明、功能、套餐与价格，2026 年 11 月 18 日核查。',
          '[下载页](https://www.dyad.sh/download) — 平台、稳定版与测试版渠道，2026 年 11 月 18 日核查。',
          '[文档概览](https://www.dyad.sh/docs) — 与其他构建器的定位对比，2026 年 11 月 18 日核查。',
          '[FAQ](https://www.dyad.sh/docs/faq) — 支持的应用类型、本地模型建议、Node.js，2026 年 11 月 18 日核查。',
          '[快速入门](https://www.dyad.sh/docs/getting-started/quickstart) — 安装步骤与 Node.js 要求，2026 年 11 月 18 日核查。',
          '[隐私政策](https://www.dyad.sh/docs/policies/privacy-policy) — 数据流向、遥测、美国公司的表述，更新于 2026 年 6 月 22 日，2026 年 11 月 18 日核查。',
          '[服务条款](https://www.dyad.sh/docs/policies/terms) — 所有权相关表述，2026 年 11 月 18 日核查。',
          '[Dyad GitHub 仓库](https://github.com/dyad-sh/dyad) — README、许可证文件和最近一次提交，2026 年 11 月 18 日核查。',
          '[版本 v1.23.0](https://github.com/dyad-sh/dyad/releases/tag/v1.23.0) — 最新稳定版本、日期和可下载文件，2026 年 11 月 18 日核查。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Cline 评测](/zh/power-local-llm/cline-review) — 适用于 VS Code、可使用本地模型的自主编程智能体。',
          '[OpenCode 评测](/zh/power-local-llm/opencode-review) — 开源的终端编程智能体。',
          '[Aider 评测](/zh/power-local-llm/aider-review) — 可配合本地模型使用的终端结对编程工具。',
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
    theme: 'Coding Assistants',
    heroImage: '/images/dyad-review-hero-ar.webp',
    title: 'مراجعة Dyad: أداة مفتوحة المصدر ومحلية لبناء التطبيقات بالذكاء الاصطناعي على سطح مكتبك',
    seoTitle: 'مراجعة Dyad: بناء تطبيقات بالذكاء الاصطناعي محليًا',
    intro:
      'Dyad تطبيق سطح مكتب يبني تطبيقات ويب من برومبتات المحادثة ويحفظ كل مشروع كملفات عادية على جهازك. أنت تختار نموذج الذكاء الاصطناعي: مفتاح API الخاص بك، أو نموذجًا محليًا من Ollama أو LM Studio، أو نماذج مستضافة عبر خطة Dyad Pro المدفوعة. تستند هذه المراجعة إلى صفحات الشركة المطوّرة وسياسة الخصوصية ومستودع GitHub، وجرى التحقق منها في 18 نوفمبر 2026. لم تجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'Dyad أداة سطح مكتب لبناء التطبيقات بالذكاء الاصطناعي تحفظ المشاريع كملفات على جهازك وتعمل بمفاتيح API الخاصة بك أو بنماذج محلية. الترخيص والخطط والخصوصية.',
    twitterDescription:
      'يبني Dyad تطبيقات ويب من البرومبتات على سطح مكتبك بمفاتيح API الخاصة بك أو بنماذج Ollama وLM Studio المحلية. نواة Apache 2.0 وخطط Pro مدفوعة.',
    audience:
      'غير المطورين والمطورون الذين يريدون بناء تطبيقات ويب من البرومبتات على حاسوبهم، والفرق التي تقيّم بديلًا مفتوح المصدر لأدوات بناء التطبيقات المستضافة',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Dyad',
    targetKeywords: [
      'مراجعة Dyad',
      'Dyad أداة بناء تطبيقات بالذكاء الاصطناعي',
      'أداة محلية مفتوحة المصدر لبناء التطبيقات بالذكاء الاصطناعي',
      'Dyad Ollama',
      'أسعار Dyad',
      'خصوصية Dyad',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Dyad تطبيق سطح مكتب مجاني ومفتوح المصدر لأنظمة macOS وWindows وLinux، يبني تطبيقات ويب من برومبتات المحادثة ويحفظ كل مشروع كملفات عادية على جهازك.** يعمل بمفاتيح API الخاصة بك أو بنماذج محلية عبر Ollama وLM Studio. وتقول الأسئلة الشائعة لديه إنه يبني تطبيقات قائمة على JavaScript فقط، وإن النتيجة تعتمد على النموذج الذي تختاره.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Dyad ولمن هو؟',
        answer:
          'Dyad أداة سطح مكتب لبناء التطبيقات بالذكاء الاصطناعي: تصف التطبيق في المحادثة، وتوافق على الشيفرة المولَّدة، وتشاهد معاينة مباشرة. يناسب من يريد بناء تطبيقات ويب بالذكاء الاصطناعي مع إبقاء الشيفرة على جهازه واختيار نموذجه بنفسه.',
        bullets: [
          'المنصات: macOS (Apple Silicon وIntel) وWindows وLinux (‏.deb وrpm. وAppImage).',
          'السعر: تطبيق سطح مكتب مجاني دون تسجيل؛ وخطتان اختياريتان هما Dyad Pro وDyad Max.',
          'الترخيص: Apache 2.0 باستثناء مجلد src/pro الذي يخضع لترخيص «fair-source».',
          'النماذج: مفاتيح API الخاصة بك، أو Ollama أو LM Studio محليًا، أو نماذج مستضافة عبر Dyad Pro.',
          'قاعدة البيانات والنشر: تكامل مع Supabase وNeon وGitHub وVercel.',
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
      { label: 'الحدود وما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
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
            text: 'Dyad تطبيق سطح مكتب يحوّل برومبتات المحادثة إلى تطبيقات ويب تُحفظ كملفات مشروع عادية على جهازك، بنموذج الذكاء الاصطناعي الذي تختاره، بما في ذلك نماذج Ollama وLM Studio المحلية.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل أداة لبناء التطبيقات بالذكاء الاصطناعي تعمل على جهازك بدلًا من خدمة مستضافة. تبقى شيفرتك في مجلد تتحكم فيه، ووجهة برومبتاتك تعتمد على النموذج الذي تربطه.',
          },
        ],
        items: [
          'توفّر صفحة التنزيل مثبّتًا أو حزمة لأنظمة macOS وWindows وLinux؛ ويقول دليل البدء السريع إن Node.js يُثبَّت بشكل منفصل.',
          'الشيفرة خارج مجلد src/pro مرخّصة بـ Apache 2.0؛ أما src/pro فهو «fair-source» بموجب Functional Source License 1.1.',
          'عند استخدام مفتاح API الخاص بك تذهب البرومبتات والشيفرة مباشرة إلى مزوّد النموذج؛ ومع النموذج المحلي تبقى على جهازك (سياسة الخصوصية).',
          'يمرّر Dyad Pro الطلبات عبر خوادم Dyad للوصول إلى النماذج المستضافة، وتقول السياسة إن المحتوى قد يُسجَّل في حالات محدودة.',
          'لم تجرّب PromptQuorum التطبيق. وتحذّر الأسئلة الشائعة لدى Dyad من أن النماذج المحلية الصغيرة قد لا تتبع تعليماته.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'قد تحتوي الشيفرة المولَّدة بالذكاء الاصطناعي على أخطاء وثغرات أمنية. راجع ما يكتبه Dyad قبل نشر تطبيق يتعامل مع بيانات مستخدمين حقيقية. هذه معلومات عامة وليست استشارة قانونية أو أمنية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Dyad أداة لبناء التطبيقات بالذكاء الاصطناعي تعمل كبرنامج سطح مكتب، ويُحفظ المشروع كملفات على جهازك.**',
          'التطبيق من تطوير شركة Dyad Tech, Inc.؛ ويذكرها ملف الترخيص «fair-source» في المستودع صاحبةً لحقوق النشر، وتصف الصفحة الرئيسية Will Chen بأنه منشئ التطبيق. أحدث إصدار مستقر هو 1.23.0 وقد نُشر في 9 نوفمبر 2026. تبعته نسخة تجريبية 1.24.0-beta.1 في 13 نوفمبر 2026، وكان آخر commit في الفرع الرئيسي للمستودع في 17 نوفمبر 2026، فالتطوير مستمر ولا ينطبق تحذير المشروع المهجور.',
          'تصف تطبيقًا في المحادثة، وتوافق على الشيفرة التي يولّدها Dyad، وترى معاينة بجانب المحادثة. ويصفه ملف README بأنه بديل محلي لـ Lovable وv0 وBolt، وتقول الصفحة الرئيسية إنه يمكن استيراد المشاريع من مستودعات قائمة وتعديلها في VS Code وتصديرها كشيفرة عادية. يذكر رسم الصفحة الرئيسية Next.js القياسي، لكن دليل البدء السريع لا يوضح أي إطار عمل تستخدمه التطبيقات المولَّدة.',
          'هذه الأوصاف تصريحات من الشركة المطوّرة. لم تشغّل PromptQuorum التطبيق ولم تقِس موثوقية التطبيقات المولَّدة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**تثبّت Dyad بتنزيل عادي من الموقع الرسمي، ولا يلزم تسجيل لاستخدام التطبيق المجاني.**',
          'تقدّم صفحة التنزيل قناة مستقرة وقناة تجريبية؛ وتقول الصفحة إن التجريبية تحصل على ميزات مبكرة وقد تكون أقل استقرارًا. ويقول دليل البدء السريع إن Node.js، وهو بيئة تشغيل JavaScript التي تشغّل تطبيقاتك، يُثبَّت بشكل منفصل، وإن Windows قد يعرض تحذيرًا من Microsoft تضغط فيه «مزيد من المعلومات» ثم «تشغيل على أي حال». ويسرد إصدار v1.23.0 على GitHub مثبّتًا لنظام Windows وملف deb. وملف rpm. وملف AppImage وملفات zip. لنظام macOS.',
        ],
        columns: ['المنصة', 'طريقة الحصول عليه'],
        rows: [
          { 'المنصة': '[macOS](https://www.dyad.sh/download)', 'طريقة الحصول عليه': 'تنزيل لـ Apple Silicon (M1+) أو Intel' },
          { 'المنصة': '[Windows](https://www.dyad.sh/download)', 'طريقة الحصول عليه': 'تنزيل وتشغيل المثبّت' },
          { 'المنصة': '[Linux](https://www.dyad.sh/download)', 'طريقة الحصول عليه': 'deb. أو rpm. أو AppImage' },
          { 'المنصة': '[الموقع الإلكتروني](https://www.dyad.sh)', 'طريقة الحصول عليه': 'الموقع الرسمي والوثائق والأسعار' },
          { 'المنصة': '[سياسة الخصوصية](https://www.dyad.sh/docs/policies/privacy-policy)', 'طريقة الحصول عليه': 'سياسة الشركة، آخر تحديث 22 يونيو 2026' },
          { 'المنصة': '[GitHub](https://github.com/dyad-sh/dyad)', 'طريقة الحصول عليه': 'الشيفرة المصدرية وتنزيلات الإصدارات' },
        ],
        note: 'لا تذكر الشركة المطوّرة أي أرقام للعتاد؛ وتقول أسئلتها الشائعة إن من يستطيع تشغيل Node.js يستطيع استخدام Dyad، وتقترح نموذجًا مستضافًا إذا لم يكن حاسوبك قويًا.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يجمع Dyad بين أداة بناء تعمل بالمحادثة واختيار النموذج وبضع تكاملات مدمجة.** كل ما يلي تصريحات من الشركة المطوّرة مأخوذة من موقعها ووثائقها وأسئلتها الشائعة.',
        ],
        items: [
          'بناء التطبيقات بالمحادثة مع معاينة، وتُحفظ الشيفرة كملفات يمكن فتحها في VS Code.',
          'اختيار النموذج: OpenAI وAnthropic وGoogle وOllama وLM Studio وغيرها، مع إمكانية التبديل في أي وقت.',
          'ربط قاعدة بيانات Supabase أو Neon مع المخططات وعمليات الترحيل والمصادقة ببضع نقرات.',
          'نشر بنقرة واحدة إلى GitHub وVercel، أو إلى سحابتك الخاصة.',
          'فحص أمني مدمج تقول الشركة إنه يتحقق من مشكلات مثل الحقن وأخطاء الإعداد.',
          'دعم MCP، فيمكنك ربط أدوات مثل Chrome DevTools أو تصفح الويب.',
          'يضيف Dyad Pro، بحسب الأسئلة الشائعة، أوضاعًا إضافية لقواعد الشيفرة الكبيرة وميزة Smart Context.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**تعتمد وجهة بياناتك على طريقة ربط النموذج، بحسب سياسة الخصوصية لدى الشركة المطوّرة.**',
          'في تطبيق سطح المكتب المجاني تستخدم مفاتيح API الخاصة بك أو نماذج محلية. ومع مفتاح API تقول السياسة إن البرومبتات والشيفرة تُرسَل مباشرة إلى مزوّد النموذج؛ ومع النموذج المحلي يبقى كل شيء على جهازك؛ وفي الحالتين لا تمر البيانات عبر خوادم Dyad.',
          'مع Dyad Pro تمر البرومبتات والشيفرة عبر خوادم Dyad إلى النماذج المستضافة، وتقول السياسة إن المحتوى قد يُسجَّل مؤقتًا في حالات محدودة مثل التحقيق في إساءة الاستخدام أو الأعطال. وتضيف أن Dyad لا تستخدم بياناتك أبدًا لتدريب نماذجها الخاصة وأن المزوّدين لا يدرّبون عليها، باستثناء النماذج الموسومة في واجهة النماذج بأنها تسمح بتدريب المزوّد.',
          'القياس عن بُعد اختياري (opt-in) ويستخدم PostHog، وتقول السياسة إنه لا يشمل رسائل المحادثة أو البرومبتات أو الشيفرة. وتُرسل ميزة «Upload Chat Session» الاختيارية نصوص المحادثة وأجزاء من شيفرتك لأغراض الدعم، وتُحذف بعد نحو شهر. لم تتحقق PromptQuorum من هذه التصريحات.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Dyad من يريد تطبيقات ويب مبنية بالذكاء الاصطناعي دون تسليم الشيفرة إلى أداة بناء مستضافة.**',
        ],
        items: [
          'غير المطورين الذين يريدون تحويل فكرة إلى تطبيق ويب يعمل ويستطيعون إعداد Node.js ومفتاح API.',
          'المطورون الذين يريدون أداة تحوّل البرومبت إلى تطبيق ويمكنهم تعديل ناتجها في VS Code ودفعه إلى GitHub.',
          'من يريد تجربة نماذج Ollama أو LM Studio المحلية لبناء التطبيقات ويقبل أن تتفاوت النتائج بحسب النموذج.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'الحدود وما لم نتمكن من التحقق منه',
        content: [
          '**لدى Dyad حدود معلنة، وتبقى عدة تفاصيل غير متحقق منها.**',
        ],
        items: [
          'حد معلن: بحسب أسئلته الشائعة، يدعم Dyad تطبيقات JavaScript فقط، بما فيها تطبيقات الجوّال الهجينة المبنية بتقنيات الويب مثل React. ولا يدعم PHP أو Ruby أو تطبيقات Swift وKotlin الأصلية.',
          'حد معلن: تقول الأسئلة الشائعة إن النماذج المحلية الصغيرة قد لا تتبع تعليمات Dyad وقد تنتج مخرجات سيئة، وإن مفاتيح API المجانية كثيرًا ما تكون حدود الرموز فيها منخفضة فتسبب أخطاء في السياق مع التطبيقات الأكبر.',
          'لا يناسب: من يحتاج خدمة مستضافة برابط معاينة ودون إعداد محلي؛ فـ Dyad يعمل على جهازك ويحتاج Node.js.',
          'غير متحقق منه: مدى موثوقية التطبيقات المولَّدة وأمانها وسهولة صيانتها. لم تبنِ PromptQuorum تطبيقات باستخدام Dyad.',
          'غير متحقق منه: متطلبات العتاد. لا يوجد رقم للذاكرة أو لوحدة الرسوميات، والمتطلبات تعتمد على النموذج المستخدم.',
          'غير متحقق منه: عنوان الشركة ومدينتها. تقول سياسة الخصوصية إن Dyad شركة أمريكية وبنيتها التحتية في الولايات المتحدة، لكنها لا تذكر عنوانًا؛ ولا تسمّي الشروط أي كيان قانوني.',
          'غير متحقق منه: تذكر بطاقة الأسعار في الصفحة الرئيسية macOS وWindows للتطبيق المجاني، بينما تقدّم صفحة التنزيل إصدارات Linux أيضًا.',
          'لم نتحقق منه: المراجعات المستقلة وتقارير المستخدمين. أما الشهادات في الصفحة الرئيسية فمن اختيار الشركة المطوّرة نفسها.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Dyad مقابل البدائل',
        itemHeadings: true,
        content: [
          '**تضع وثائق Dyad وREADME الخاص به الأداة في مقابل أدوات بناء التطبيقات بالذكاء الاصطناعي المستضافة. لم تقارنها PromptQuorum بها عمليًا.** تكرّر المقارنات التالية ما تقوله وثائق Dyad؛ ولا توجد بعد مراجعة من PromptQuorum لأي أداة أخرى تحوّل البرومبت إلى تطبيق.',
        ],
        columns: ['الأداة', 'بحسب وثائق Dyad'],
        rows: [
          { 'الأداة': 'Dyad', 'بحسب وثائق Dyad': 'تطبيق سطح مكتب محلي ومفتوح المصدر ومجاني' },
          { 'الأداة': '[Lovable](https://lovable.dev)', 'بحسب وثائق Dyad': 'مذكور كمنتج يمثّل Dyad بديلًا عنه' },
          { 'الأداة': '[v0](https://v0.dev)', 'بحسب وثائق Dyad': 'مذكور كمنتج يمثّل Dyad بديلًا عنه' },
          { 'الأداة': '[Bolt.new](https://bolt.new)', 'بحسب وثائق Dyad': 'مذكور كمنتج يمثّل Dyad بديلًا عنه' },
          { 'الأداة': '[bolt.diy](https://github.com/stackblitz-labs/bolt.diy)', 'بحسب وثائق Dyad': 'موصوف بأنه أداة بناء مفتوحة المصدر أخرى تشغّلها بنفسك' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Dyad مجاني؟',
            a: 'تطبيق سطح المكتب مجاني ولا يحتاج تسجيلًا، بحسب الصفحة الرئيسية. وتدفع لمزوّد الذكاء الاصطناعي إذا استخدمت مفتاح API مدفوعًا. وتضيف الخطط الاختيارية أرصدة مستضافة: Dyad Pro بسعر $20 شهريًا (بالدولار الأمريكي) مع 200 رصيد ذكاء اصطناعي، وDyad Max بسعر $79 شهريًا مع 900 رصيد.',
          },
          {
            q: 'هل يستطيع Dyad استخدام نماذج محلية مثل Ollama وLM Studio؟',
            a: 'نعم بحسب الشركة المطوّرة؛ وكلاهما مذكور في صفحتها الرئيسية. وتنصح الأسئلة الشائعة بنموذج محلي أكبر إذا كان جهازك قادرًا على تشغيله، لأن النماذج الصغيرة قد لا تتبع التعليمات.',
          },
          {
            q: 'هل أملك الشيفرة التي يولّدها Dyad؟',
            a: 'تقول الصفحة الرئيسية إنه يمكنك تصدير شيفرة نظيفة قابلة للتشغيل دون ارتباط بمزوّد. ولا تتناول الشروط ملكية الشيفرة المولَّدة، لذا اقرأها قبل الاستخدام التجاري. هذه ليست استشارة قانونية.',
          },
          {
            q: 'ما أنظمة التشغيل المدعومة؟',
            a: 'بحسب صفحة التنزيل: macOS على Apple Silicon وIntel، وWindows، وLinux. ويجب تثبيت Node.js بشكل منفصل.',
          },
          {
            q: 'ما الفرق بين الإصدار المستقر والتجريبي؟',
            a: 'تصف صفحة التنزيل النسخة التجريبية بأنها تحديثات أكثر تكرارًا مع ميزات مبكرة قد تكون أقل استقرارًا. الإصدار 1.23.0 هو أحدث إصدار مستقر؛ أما 1.24.0-beta.1 فنسخة تجريبية.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Dyad نظرة إذا كنت تريد بناء تطبيقات ويب بالذكاء الاصطناعي مع إبقاء الشيفرة واختيار النموذج على حاسوبك.**',
          'على الورق يغطي الكثير: تطبيق سطح مكتب مجاني، ونواة Apache 2.0، ومفاتيحك أو نماذج محلية، وSupabase وNeon، والنشر إلى GitHub وVercel، وMCP. والتطوير نشط، مع إصدار مستقر في 9 نوفمبر 2026 وcommit في 17 نوفمبر 2026.',
          'المقايضات تذكرها الشركة المطوّرة نفسها: تطبيقات JavaScript فقط، ونتائج متفاوتة مع النماذج المحلية الصغيرة، وإعداد Node.js. ومجلد src/pro «fair-source» وليس مفتوح المصدر. لم تجرّب PromptQuorum التطبيق، لذا جرّبه على مشروع صغير وراجع الشيفرة المولَّدة قبل الاعتماد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Dyad](https://www.dyad.sh) — وصف الشركة المطوّرة والميزات والخطط والأسعار، جرى التحقق في 18 نوفمبر 2026.',
          '[صفحة التنزيل](https://www.dyad.sh/download) — المنصات والقناتان المستقرة والتجريبية، جرى التحقق في 18 نوفمبر 2026.',
          '[نظرة عامة على الوثائق](https://www.dyad.sh/docs) — التموضع مقابل أدوات البناء الأخرى، جرى التحقق في 18 نوفمبر 2026.',
          '[الأسئلة الشائعة](https://www.dyad.sh/docs/faq) — أنواع التطبيقات المدعومة ونصيحة النماذج المحلية وNode.js، جرى التحقق في 18 نوفمبر 2026.',
          '[البدء السريع](https://www.dyad.sh/docs/getting-started/quickstart) — خطوات التثبيت ومتطلب Node.js، جرى التحقق في 18 نوفمبر 2026.',
          '[سياسة الخصوصية](https://www.dyad.sh/docs/policies/privacy-policy) — تدفق البيانات والقياس عن بُعد وعبارة الشركة الأمريكية، آخر تحديث 22 يونيو 2026، جرى التحقق في 18 نوفمبر 2026.',
          '[شروط الخدمة](https://www.dyad.sh/docs/policies/terms) — صياغة الملكية، جرى التحقق في 18 نوفمبر 2026.',
          '[مستودع Dyad على GitHub](https://github.com/dyad-sh/dyad) — README وملفات الترخيص وآخر commit، جرى التحقق في 18 نوفمبر 2026.',
          '[الإصدار v1.23.0](https://github.com/dyad-sh/dyad/releases/tag/v1.23.0) — أحدث إصدار مستقر وتاريخه والملفات القابلة للتنزيل، جرى التحقق في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Cline](/ar/power-local-llm/cline-review) — وكيل برمجة مستقل لـ VS Code يمكنه استخدام النماذج المحلية.',
          '[مراجعة OpenCode](/ar/power-local-llm/opencode-review) — وكيل برمجة مفتوح المصدر لسطر الأوامر.',
          '[مراجعة Aider](/ar/power-local-llm/aider-review) — أداة برمجة ثنائية لسطر الأوامر تعمل مع النماذج المحلية.',
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
    theme: 'Coding Assistants',
    heroImage: '/images/dyad-review-hero-ko.webp',
    title: 'Dyad 리뷰: 데스크톱에서 쓰는 로컬 오픈소스 AI 앱 빌더',
    seoTitle: 'Dyad 리뷰: 로컬 오픈소스 AI 앱 빌더, 라이선스',
    intro:
      'Dyad는 채팅 프롬프트로 웹 앱을 만들고 각 프로젝트를 일반 파일로 내 컴퓨터에 저장하는 데스크톱 앱입니다. AI 모델은 직접 고릅니다. 자체 API 키, 로컬 Ollama 또는 LM Studio 모델, 유료 Dyad Pro 요금제의 호스팅 모델 중에서 선택할 수 있습니다. 이 리뷰는 제작사 페이지, 개인정보 처리방침, GitHub 저장소를 2026년 11월 18일에 확인한 내용에 근거합니다. PromptQuorum은 이 앱을 직접 사용해 보지 않았습니다.',
    metaDescription:
      'Dyad는 프로젝트를 내 컴퓨터에 파일로 저장하는 데스크톱 AI 앱 빌더로, 자체 API 키나 로컬 모델과 함께 씁니다. 라이선스, 요금제, 개인정보를 정리했습니다.',
    twitterDescription:
      'Dyad는 데스크톱에서 프롬프트로 웹 앱을 만들며 자체 API 키나 로컬 Ollama, LM Studio 모델을 지원합니다. 핵심은 Apache 2.0, 유료 Pro 요금제도 있습니다.',
    audience:
      '자신의 컴퓨터에서 프롬프트로 웹 앱을 만들려는 비개발자와 개발자, 호스팅형 앱 빌더의 오픈소스 대안을 검토하는 팀',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Dyad',
    targetKeywords: [
      'Dyad 리뷰',
      'Dyad AI 앱 빌더',
      '로컬 오픈소스 AI 앱 빌더',
      'Dyad Ollama',
      'Dyad 가격',
      'Dyad 개인정보',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Dyad는 macOS, Windows, Linux용 무료 오픈소스 데스크톱 앱으로, 채팅 프롬프트로 웹 앱을 만들고 각 프로젝트를 일반 파일로 내 컴퓨터에 저장합니다.** 자체 API 키 또는 Ollama와 LM Studio의 로컬 모델과 함께 작동합니다. FAQ에 따르면 JavaScript 기반 앱만 만들 수 있으며, 결과는 선택한 모델에 따라 달라집니다.',
    quickAnswerTop: {
      ko: {
        question: 'Dyad는 무엇이며 누구를 위한 도구인가요?',
        answer:
          'Dyad는 데스크톱 AI 앱 빌더입니다. 채팅으로 앱을 설명하고 생성된 코드를 승인하면 실시간 미리보기가 나타납니다. AI로 웹 앱을 만들면서 코드는 내 컴퓨터에 두고 모델도 직접 고르려는 분에게 적합합니다.',
        bullets: [
          '플랫폼: macOS(Apple Silicon 및 Intel), Windows, Linux(.deb, .rpm, AppImage).',
          '가격: 가입이 필요 없는 무료 데스크톱 앱, 선택 가능한 Dyad Pro와 Dyad Max 요금제.',
          '라이선스: Apache 2.0이며, src/pro 폴더만 페어소스 라이선스입니다.',
          '모델: 자체 API 키, 로컬 Ollama 또는 LM Studio, 또는 Dyad Pro의 호스팅 모델.',
          '데이터베이스와 배포: Supabase, Neon, GitHub, Vercel 연동.',
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
      { label: '한계와 확인하지 못한 내용', anchor: 'who-should-not-use' },
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
            text: 'Dyad는 채팅 프롬프트를 일반 프로젝트 파일로 컴퓨터에 저장되는 웹 앱으로 바꿔 주는 데스크톱 앱이며, 로컬 Ollama와 LM Studio 모델을 포함해 원하는 AI 모델을 쓸 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '호스팅 서비스가 아니라 내 컴퓨터에서 실행되는 AI 앱 빌더라고 생각하면 됩니다. 코드는 내가 관리하는 폴더에 남고, 프롬프트가 어디로 가는지는 연결한 모델에 따라 달라집니다.',
          },
        ],
        items: [
          '다운로드 페이지는 macOS, Windows, Linux용 설치 프로그램 또는 패키지를 제공하며, 빠른 시작 안내에 따르면 Node.js는 별도로 설치해야 합니다.',
          'src/pro 폴더 밖의 코드는 Apache 2.0이고, src/pro는 Functional Source License 1.1의 페어소스입니다.',
          '자체 API 키를 쓰면 프롬프트와 코드가 모델 제공업체로 직접 전송되고, 로컬 모델을 쓰면 기기 안에 남습니다(개인정보 처리방침).',
          'Dyad Pro는 호스팅 모델에 접근하기 위해 Dyad 서버를 거치며, 방침에 따르면 제한적인 경우 내용이 기록될 수 있습니다.',
          'PromptQuorum은 이 앱을 테스트하지 않았습니다. Dyad의 FAQ는 작은 로컬 모델이 지시를 따르지 못할 수 있다고 경고합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI가 생성한 코드에는 버그와 보안 결함이 있을 수 있습니다. 실제 사용자 데이터를 다루는 앱을 공개하기 전에 Dyad가 작성한 내용을 검토하세요. 이는 일반적인 정보이며 법률이나 보안 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Dyad는 데스크톱 프로그램으로 실행되는 AI 앱 빌더이며, 프로젝트는 내 컴퓨터의 파일로 보관됩니다.**',
          '이 앱은 Dyad Tech, Inc.에서 만듭니다. 저장소의 페어소스 라이선스 파일이 이 회사를 저작권자로 명시하고, 홈페이지는 Will Chen을 제작자로 소개합니다. 최신 안정 버전은 2026년 11월 9일에 공개된 1.23.0입니다. 2026년 11월 13일에 베타 1.24.0-beta.1이 나왔고, 저장소 메인 브랜치의 마지막 커밋은 2026년 11월 17일이어서 개발이 계속되고 있으며 방치된 프로젝트 경고는 해당하지 않습니다.',
          '채팅으로 앱을 설명하고 Dyad가 생성한 코드를 승인하면 채팅 옆에 미리보기가 표시됩니다. README는 Lovable, v0, Bolt의 로컬 대안으로 소개하며, 홈페이지에 따르면 기존 저장소에서 프로젝트를 가져와 VS Code에서 편집하고 일반 코드로 내보낼 수 있습니다. 홈페이지 그림에는 표준 Next.js가 언급되지만, 생성된 앱이 어떤 프레임워크를 쓰는지는 빠른 시작 안내에 나와 있지 않습니다.',
          '이 설명은 제작사의 주장입니다. PromptQuorum은 앱을 실행하지 않았고 생성된 앱의 신뢰성도 측정하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Dyad는 공식 웹사이트에서 일반적인 방식으로 내려받아 설치하며, 무료 앱은 가입이 필요 없습니다.**',
          '다운로드 페이지에는 안정 채널과 베타 채널이 있으며, 베타는 새 기능을 먼저 쓸 수 있지만 덜 안정적일 수 있다고 안내합니다. 빠른 시작 안내에 따르면 앱을 실행하는 JavaScript 런타임인 Node.js는 별도로 설치해야 하고, Windows에서는 Microsoft 경고가 나타나 "추가 정보"를 누른 뒤 "실행"을 선택해야 할 수 있습니다. GitHub의 v1.23.0 릴리스에는 Windows 설치 프로그램, .deb, .rpm, AppImage, macOS용 .zip 파일이 있습니다.',
        ],
        columns: ['플랫폼', '설치 방법'],
        rows: [
          { '플랫폼': '[macOS](https://www.dyad.sh/download)', '설치 방법': 'Apple Silicon(M1 이상) 또는 Intel용 다운로드' },
          { '플랫폼': '[Windows](https://www.dyad.sh/download)', '설치 방법': '다운로드 후 설치 프로그램 실행' },
          { '플랫폼': '[Linux](https://www.dyad.sh/download)', '설치 방법': '.deb, .rpm 또는 AppImage' },
          { '플랫폼': '[웹사이트](https://www.dyad.sh)', '설치 방법': '공식 사이트, 문서, 가격' },
          { '플랫폼': '[개인정보 처리방침](https://www.dyad.sh/docs/policies/privacy-policy)', '설치 방법': '제작사 방침, 2026년 6월 22일 업데이트' },
          { '플랫폼': '[GitHub](https://github.com/dyad-sh/dyad)', '설치 방법': '소스 코드와 릴리스 다운로드' },
        ],
        note: '제작사는 하드웨어 수치를 제시하지 않습니다. FAQ는 Node.js를 실행할 수 있으면 Dyad를 쓸 수 있다고 하며, 컴퓨터 성능이 낮으면 호스팅 모델을 권합니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Dyad는 채팅 기반 빌더에 모델 선택과 몇 가지 내장 연동을 결합했습니다.** 아래 내용은 모두 웹사이트, 문서, FAQ에 있는 제작사의 주장입니다.',
        ],
        items: [
          '미리보기가 있는 채팅 기반 앱 제작. 코드는 VS Code에서 열 수 있는 파일로 저장됩니다.',
          '모델 선택: OpenAI, Anthropic, Google, Ollama, LM Studio 등을 언제든 전환할 수 있습니다.',
          'Supabase 또는 Neon 데이터베이스를 연결해 스키마, 마이그레이션, 인증을 몇 번의 클릭으로 설정합니다.',
          'GitHub와 Vercel 또는 자체 클라우드로 원클릭 배포.',
          '제작사에 따르면 인젝션과 설정 오류 같은 문제를 점검하는 내장 보안 스캔.',
          'MCP 지원으로 Chrome DevTools나 웹 브라우징 같은 도구를 연결할 수 있습니다.',
          'FAQ에 따르면 Dyad Pro는 대규모 코드베이스용 추가 모드와 Smart Context를 제공합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**제작사의 개인정보 처리방침에 따르면 데이터가 어디로 가는지는 모델을 연결하는 방식에 따라 달라집니다.**',
          '무료 데스크톱 앱에서는 자체 API 키 또는 로컬 모델을 사용합니다. 방침에 따르면 API 키를 쓰면 프롬프트와 코드가 모델 제공업체로 직접 전송되고, 로컬 모델을 쓰면 모든 것이 기기 안에 남으며, 두 경우 모두 데이터가 Dyad 서버를 거치지 않습니다.',
          'Dyad Pro에서는 프롬프트와 코드가 Dyad 서버를 거쳐 호스팅 모델로 전달되며, 방침에 따르면 오남용이나 장애 조사 같은 제한적인 경우 내용이 일시적으로 기록될 수 있습니다. 또한 Dyad는 사용자 데이터를 자사 모델 학습에 쓰지 않으며, 모델 화면에서 제공업체의 학습을 허용한다고 표시된 모델을 제외하고는 제공업체도 학습에 쓰지 않는다고 밝힙니다.',
          '텔레메트리는 옵트인 방식이며 PostHog를 사용하고, 방침에 따르면 채팅 메시지, 프롬프트, 코드는 포함되지 않습니다. 선택 기능인 "Upload Chat Session"은 지원을 위해 대화 기록과 코드 일부를 전송하며 약 한 달 뒤 삭제됩니다. PromptQuorum은 이 설명을 검증하지 않았습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Dyad는 호스팅형 빌더에 코드를 맡기지 않고 AI로 웹 앱을 만들려는 분께 맞습니다.**',
        ],
        items: [
          '아이디어를 동작하는 웹 앱으로 만들고 싶고 Node.js와 API 키를 설정할 수 있는 비개발자.',
          '결과물을 VS Code에서 편집하고 GitHub로 푸시할 수 있는, 프롬프트로 앱을 만드는 도구가 필요한 개발자.',
          '앱 제작에 로컬 Ollama나 LM Studio 모델을 시험해 보고 싶고, 결과가 모델마다 다르다는 점을 받아들이는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '한계와 확인하지 못한 내용',
        content: [
          '**Dyad에는 명시된 한계가 있고, 확인하지 못한 세부 사항도 여러 가지 남아 있습니다.**',
        ],
        items: [
          '명시된 한계: FAQ에 따르면 Dyad는 React 같은 웹 기술로 만든 하이브리드 모바일 앱을 포함해 JavaScript 기반 앱만 지원합니다. PHP, Ruby, Swift나 Kotlin 네이티브 앱은 지원하지 않습니다.',
          '명시된 한계: FAQ에 따르면 작은 로컬 모델은 Dyad의 지시를 따르지 못해 나쁜 결과를 낼 수 있고, 무료 API 키는 토큰 한도가 낮아 큰 앱에서 컨텍스트 오류가 생기기 쉽습니다.',
          '맞지 않는 경우: 미리보기 URL이 있고 로컬 설정이 필요 없는 호스팅 서비스가 필요한 분. Dyad는 내 컴퓨터에서 실행되며 Node.js가 필요합니다.',
          '확인하지 못함: 생성된 앱의 신뢰성, 보안성, 유지보수성. PromptQuorum은 Dyad로 앱을 만들어 보지 않았습니다.',
          '확인하지 못함: 하드웨어 요구 사항. RAM이나 GPU 수치가 제시되지 않았고, 필요한 사양은 사용하는 모델에 따라 달라집니다.',
          '확인하지 못함: 회사의 상세 주소와 도시. 개인정보 처리방침은 Dyad가 미국 회사이며 인프라가 미국에 있다고 하지만 주소는 없고, 이용약관에도 법인명이 없습니다.',
          '확인하지 못함: 홈페이지의 가격 카드는 무료 앱을 macOS와 Windows용으로 표시하지만, 다운로드 페이지에는 Linux 빌드도 있습니다.',
          '확인하지 않음: 독립적인 리뷰와 사용자 보고. 홈페이지의 사용자 후기는 제작사가 직접 고른 것입니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Dyad와 대안 비교',
        itemHeadings: true,
        content: [
          '**Dyad의 문서와 README는 이 도구를 호스팅형 AI 앱 빌더와 나란히 놓고 설명합니다. PromptQuorum은 이들과 직접 비교해 보지 않았습니다.** 아래 비교는 Dyad 문서의 설명을 옮긴 것이며, 프롬프트로 앱을 만드는 다른 빌더에 대한 PromptQuorum 리뷰는 아직 없습니다.',
        ],
        columns: ['도구', 'Dyad 문서의 설명'],
        rows: [
          { '도구': 'Dyad', 'Dyad 문서의 설명': '로컬, 오픈소스, 무료 데스크톱 앱' },
          { '도구': '[Lovable](https://lovable.dev)', 'Dyad 문서의 설명': 'Dyad가 대안이 되는 제품으로 언급' },
          { '도구': '[v0](https://v0.dev)', 'Dyad 문서의 설명': 'Dyad가 대안이 되는 제품으로 언급' },
          { '도구': '[Bolt.new](https://bolt.new)', 'Dyad 문서의 설명': 'Dyad가 대안이 되는 제품으로 언급' },
          { '도구': '[bolt.diy](https://github.com/stackblitz-labs/bolt.diy)', 'Dyad 문서의 설명': '직접 실행하는 또 다른 오픈소스 빌더로 설명' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Dyad는 무료인가요?',
            a: '홈페이지에 따르면 데스크톱 앱은 무료이고 가입이 필요 없습니다. 유료 API 키를 쓰면 AI 제공업체에 비용을 냅니다. 선택 요금제는 호스팅 크레딧을 추가합니다. Dyad Pro는 월 $20(미국 달러)에 AI 크레딧 200개, Dyad Max는 월 $79에 크레딧 900개입니다.',
          },
          {
            q: 'Dyad는 Ollama나 LM Studio 같은 로컬 모델을 쓸 수 있나요?',
            a: '제작사에 따르면 쓸 수 있으며, 두 가지 모두 홈페이지에 언급되어 있습니다. FAQ는 작은 모델이 지시를 따르지 못할 수 있으므로 기기가 감당할 수 있다면 더 큰 로컬 모델을 권합니다.',
          },
          {
            q: 'Dyad가 생성한 코드는 제 소유인가요?',
            a: '홈페이지는 종속 없이 깔끔하게 실행되는 코드를 내보낼 수 있다고 합니다. 이용약관은 생성된 코드의 소유권을 다루지 않으므로 상업적으로 쓰기 전에 읽어 보세요. 이는 법률 자문이 아닙니다.',
          },
          {
            q: '어떤 운영체제를 지원하나요?',
            a: '다운로드 페이지에 따르면 Apple Silicon과 Intel의 macOS, Windows, Linux입니다. Node.js는 별도로 설치해야 합니다.',
          },
          {
            q: '안정 버전과 베타 버전은 무엇이 다른가요?',
            a: '다운로드 페이지는 베타를 더 자주 업데이트되고 새 기능을 먼저 쓸 수 있지만 덜 안정적일 수 있는 버전으로 설명합니다. 1.23.0이 최신 안정 버전이고 1.24.0-beta.1은 베타입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**코드와 모델 선택권을 내 컴퓨터에 둔 채 AI로 웹 앱을 만들고 싶다면 Dyad는 살펴볼 만합니다.**',
          '문서상으로는 많은 것을 다룹니다. 무료 데스크톱 앱, Apache 2.0 핵심, 자체 키 또는 로컬 모델, Supabase와 Neon, GitHub와 Vercel 배포, MCP입니다. 개발은 활발해서 2026년 11월 9일에 안정 버전이, 2026년 11월 17일에 커밋이 있었습니다.',
          '단점은 제작사가 직접 밝힙니다. JavaScript 기반 앱만 가능하고, 작은 로컬 모델은 결과가 들쭉날쭉하며, Node.js 설정이 필요합니다. src/pro 폴더는 오픈소스가 아니라 페어소스입니다. PromptQuorum은 앱을 테스트하지 않았으므로 작은 프로젝트로 먼저 시험해 보고, 의존하기 전에 생성된 코드를 검토하세요.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Dyad 웹사이트](https://www.dyad.sh) — 제작사 설명, 기능, 요금제와 가격. 2026년 11월 18일 확인.',
          '[다운로드 페이지](https://www.dyad.sh/download) — 플랫폼, 안정 및 베타 채널. 2026년 11월 18일 확인.',
          '[문서 개요](https://www.dyad.sh/docs) — 다른 빌더와의 위치 설정. 2026년 11월 18일 확인.',
          '[FAQ](https://www.dyad.sh/docs/faq) — 지원 앱 유형, 로컬 모델 조언, Node.js. 2026년 11월 18일 확인.',
          '[빠른 시작](https://www.dyad.sh/docs/getting-started/quickstart) — 설치 단계와 Node.js 요구 사항. 2026년 11월 18일 확인.',
          '[개인정보 처리방침](https://www.dyad.sh/docs/policies/privacy-policy) — 데이터 흐름, 텔레메트리, 미국 회사라는 설명(2026년 6월 22일 업데이트). 2026년 11월 18일 확인.',
          '[이용약관](https://www.dyad.sh/docs/policies/terms) — 소유권 관련 표현. 2026년 11월 18일 확인.',
          '[Dyad GitHub 저장소](https://github.com/dyad-sh/dyad) — README, 라이선스 파일, 마지막 커밋. 2026년 11월 18일 확인.',
          '[릴리스 v1.23.0](https://github.com/dyad-sh/dyad/releases/tag/v1.23.0) — 최신 안정 버전, 날짜, 내려받을 수 있는 파일. 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Cline 리뷰](/ko/power-local-llm/cline-review) — 로컬 모델을 쓸 수 있는 VS Code용 자율 코딩 에이전트.',
          '[OpenCode 리뷰](/ko/power-local-llm/opencode-review) — 오픈소스 터미널 코딩 에이전트.',
          '[Aider 리뷰](/ko/power-local-llm/aider-review) — 로컬 모델과 함께 쓰는 터미널 페어 프로그래밍 도구.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}

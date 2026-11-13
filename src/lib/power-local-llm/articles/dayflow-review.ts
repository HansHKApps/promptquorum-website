// Dayflow Review: open-source automatic work journal for Mac with an on-device AI option
// Slug: dayflow-review
// Companion to: perfect-memory-review, khoj-ai-second-brain-review, hyperlink-nexa-review, ollama-review, lm-studio-review
// Facts verified 2026-11-13 against dayflow.so (home, pricing, privacy) and GitHub JerryZLiu/Dayflow (README, API, Releases v2.9.0 of 2026-11-10).
// Not hands-on tested. Stale-project warning is OFF (3 days since the last update on 2026-11-13).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/dayflow-review-hero-en.webp',
    title: 'Dayflow Review: Open-Source Mac Work Journal with Local AI',
    seoTitle: 'Dayflow Review: Open-Source Mac Work Journal, Local AI',
    intro: "Dayflow is a free, MIT-licensed Mac app that takes low-frequency screenshots of your screen and turns them into a timeline of what you worked on, with daily and weekly summaries and a chat over your own timeline. This review covers what the maker's website and GitHub repository say, which parts can run on your own Mac through Ollama or LM Studio, where screenshots leave the machine, and how Dayflow compares with other tools in the directory.",
    metaDescription: 'Dayflow review: free MIT-licensed Mac work journal that turns screenshots into a timeline and can analyze locally with Ollama or LM Studio. Not tested.',
    twitterDescription: 'Dayflow review: open-source automatic work journal for Mac with an on-device AI option. Price, privacy paths, limits and alternatives.',
    audience: 'Mac users who want an automatic, open-source record of their workday and care where their screenshots are analyzed — covers price, install, local and cloud modes, privacy, limits and alternatives.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Dayflow review',
    targetKeywords: [
      'dayflow review',
      'dayflow mac app',
      'automatic work journal mac',
      'open source time tracker mac',
      'local ai screen activity tracker',
      'ollama lm studio screen timeline',
      'private time tracking app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'macOS 14',
    ],
    leadAnswerBlock: "**Dayflow is a free, MIT-licensed Mac app that records your screen at low frequency and uses AI to turn it into a timeline, and its analysis can run entirely on your own Mac through Ollama or LM Studio.** Cloud analysis is a choice, not a requirement. The newest release is version 2.9.0 from 10 November 2026. This review rests on the maker's website and GitHub repository, not on hands-on testing.",
    quickAnswerTop: {
      en: {
        question: 'Is Dayflow a local app?',
        answer: 'Partly, by your choice: recordings and the database are stored on the Mac, and the README says analysis stays on your machine if you pick local models. If you pick your own cloud key or Dayflow Pro, screenshots go to that provider. The code is open, but PromptQuorum did not inspect network traffic, so the privacy claims remain the maker\'s own.',
        bullets: [
          'Dayflow captures screenshots at low frequency and builds activity cards, a daily standup draft, a weekly review and a chat over your timeline.',
          'Pricing: the app is free with a local model or your own API key; the optional Pro plan with managed AI costs $20 a month.',
          'Local analysis needs Ollama or LM Studio, which you install and run yourself; no model is bundled.',
          'Mac only, macOS 14 or newer; the homepage lists a Windows version as coming.',
          'Anonymous analytics are sent to the maker unless you switch them off in settings.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Dayflow', anchor: 'get-it' },
      { label: 'Dayflow at a Glance', anchor: 'at-a-glance' },
      { label: 'What Dayflow Is', anchor: 'what-is-dayflow' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Local vs. Cloud: Where Screenshots Go', anchor: 'local-vs-cloud' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Dayflow vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Dayflow', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Dayflow', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Dayflow is a free, open-source Mac app that, per its README, turns low-frequency screenshots into a work timeline and can run the AI analysis entirely on your own Mac.',
          },
          {
            type: 'plain-terms',
            text: 'Think of an automatic diary of your workday: instead of starting timers, you let the app watch your screen every so often and write down what you were doing.',
          },
        ],
        items: [
          'Local claim: capture, recordings and the database stay on the Mac; analysis is local only if you connect Ollama or LM Studio.',
          'License and maker: MIT, open code, published by Teleport Labs Inc. per the privacy page.',
          'Price: free with a local model or your own key; managed AI is the paid Pro plan.',
          'Maintenance: version 2.9.0 was released on 10 November 2026 and the repository was updated the same day, so the project is actively developed.',
          'Gaps: macOS 14 or newer only, no bundled model, and cloud paths send screenshots to a provider.',
        ],
      },
      getItDayflow: {
        id: 'get-it',
        title: 'Get Dayflow',
        content: [
          '**Dayflow installs like any Mac app, so no terminal is needed.** Download the disk image from the official site or the GitHub release page, open it, drag Dayflow into Applications and grant the screen recording permission when macOS asks.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Mac',
            'Get It': '[Download for Mac](https://github.com/JerryZLiu/Dayflow/releases/latest) — Dayflow.dmg, macOS 14 or newer; also `brew install --cask dayflow`',
          },
          {
            Platform: 'Release notes',
            'Get It': '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — the 2.9.0 release has no written notes',
          },
          {
            Platform: 'Website',
            'Get It': '[dayflow.so](https://www.dayflow.so/)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[Dayflow privacy policy](https://www.dayflow.so/privacy/)',
          },
          {
            Platform: 'Source code',
            'Get It': '[github.com/JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — MIT license',
          },
        ],
        note: 'The homepage advertises a Windows version as coming; no Windows or Linux build was found.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Dayflow at a Glance',
        columns: ['Attribute', 'Dayflow'],
        rows: [
          { Attribute: 'Platform', Dayflow: 'macOS 14 or newer' },
          { Attribute: 'Price', Dayflow: 'Free; paid Pro plan' },
          { Attribute: 'License', Dayflow: 'MIT, open source' },
          { Attribute: 'Runs', Dayflow: 'Capture on the Mac; analysis local or cloud' },
          { Attribute: 'Works with local LLMs', Dayflow: 'Yes, via Ollama or LM Studio' },
          { Attribute: 'Voice input / output', Dayflow: 'Not stated' },
          { Attribute: 'Persistent memory', Dayflow: 'Timeline database on your Mac' },
          { Attribute: 'Tool use / actions', Dayflow: 'Not stated' },
        ],
        note: 'Attributes follow the personal-assistants comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsDayflow: {
        id: 'what-is-dayflow',
        title: 'What Dayflow Is',
        content: [
          '**Dayflow is an automatic work journal, not a manual timer.** It takes low-frequency screenshots, has an AI model describe what you were doing, and groups the result into activity cards on a timeline, so a block of Cursor or Chrome shows up as, say, debugging or research rather than as an app name.',
          'The homepage names Teleport Labs Inc. as the company, and the GitHub repository is JerryZLiu/Dayflow. The pricing page also lists an Enterprise plan with SSO and data-retention controls; this review covers the Mac app only.',
          'This review draws on the website, the privacy policy and the GitHub repository. It involved no hands-on testing, so the quality of summaries, battery cost and stability are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a permission and an AI choice.** The steps follow the README.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download Dayflow.dmg from the [GitHub release page](https://github.com/JerryZLiu/Dayflow/releases/latest), drag it into Applications, or run `brew install --cask dayflow`.',
          },
          {
            title: 'Grant the permission',
            whyItMatters: 'Allow macOS Screen & System Audio Recording when prompted; without it Dayflow cannot capture anything.',
          },
          {
            title: 'Choose how analysis runs',
            whyItMatters: 'Pick a local model through Ollama or LM Studio, your own Gemini key, or ChatGPT or Claude through their local CLI tools; Pro is the managed alternative.',
          },
          {
            title: 'Let it run, then review',
            whyItMatters: 'Work as usual; open the timeline, the daily view or the weekly review later, or export a date range as Markdown.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on the timeline.** Everything below comes from the README and the website.',
        ],
        items: [
          '**Automatic timeline.** Screen chunks become activity cards with context, such as what you did in an editor or browser.',
          '**Daily standup.** An activity grid plus yesterday\'s highlights, today\'s priorities and blockers.',
          '**Weekly review.** Focus patterns, categories and app usage across the week, with distraction tracking.',
          '**Chat with your journal.** Natural-language questions answered from your own timeline.',
          '**Export and cleanup.** Markdown export for any date range and automatic purging of old recordings against a storage limit.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Local vs. Cloud: Where Screenshots Go',
        content: [
          '**Dayflow offers three analysis paths, and only the first keeps screenshots on the Mac.** The privacy policy lists Local processing, where screenshots never leave the machine; Bring your own AI provider, where screenshots go straight to the provider you configure; and Dayflow cloud for Pro, where screenshots are processed on the maker\'s servers and deleted afterward. It labels the first two "default" and names no single default.',
          'Local processing runs through Ollama or LM Studio, which you install separately. The README also lists ChatGPT and Claude through their local command-line tools; those tools call the vendors\' cloud models, so this path is not on-device inference. The README and the pricing page place recordings and the database on the Mac in every mode.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy says Dayflow does not sell your data, does not store your screenshots and does not let its AI providers train on your data.** It also says anonymous analytics (app launches, feature usage, crash reports) can be switched off in settings, and that basic account information is kept for subscribers. The company is US-based. The code is open and PromptQuorum did not examine network traffic, so these statements are the maker\'s own.',
          'The license is MIT. The free plan covers capture, summaries and your own provider keys or a local model; Pro costs $20 a month for managed AI, with an annual offer shown in the app, and Enterprise is priced on request.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Analysis on your own Mac',
            'What it means in real use': 'Per the README, with Ollama or LM Studio, screenshots stay on the machine.',
            'Limitation / caveat': 'You install and run the model yourself; local inference is demanding on GPU and battery per the homepage.',
          },
          {
            Benefit: 'Free and open source',
            'What it means in real use': 'MIT code, free plan with your own key or a local model.',
            'Limitation / caveat': 'Managed AI needs the paid Pro plan.',
          },
          {
            Benefit: 'Automatic timeline',
            'What it means in real use': 'No timers or manual notes; summaries describe what you did.',
            'Limitation / caveat': 'Summary quality depends on the model you choose; PromptQuorum did not measure it.',
          },
          {
            Benefit: 'Flexible AI choice',
            'What it means in real use': 'Switch between local, your own key and Pro later.',
            'Limitation / caveat': 'Cloud paths send screenshots to a provider.',
          },
          {
            Benefit: 'Active development',
            'What it means in real use': 'Version 2.9.0 shipped on 10 November 2026.',
            'Limitation / caveat': 'Mac only, macOS 14 or newer; Windows is only announced.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Dayflow vs. Alternatives',
        content: [
          'These are the closest tools in the directory: another screen-memory app, a self-hosted second brain and an on-device file search.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'Dayflow',
            Platforms: 'Mac',
            'Price and license': 'Free, Pro paid, MIT',
            Role: 'Automatic work journal',
            'Key difference': 'Open source; local models via Ollama or LM Studio',
          },
          {
            App: '[Perfect Memory AI](/power-local-llm/perfect-memory-review)',
            Platforms: 'Mac, Windows',
            'Price and license': 'Freemium, closed source',
            Role: 'Searchable screen and meeting memory',
            'Key difference': 'Built-in AI uses the maker\'s server unless you connect a local one, per its privacy policy',
          },
          {
            App: '[Khoj](/power-local-llm/khoj-ai-second-brain-review)',
            Platforms: 'Mac, Windows, Linux, web',
            'Price and license': 'Free, AGPL 3.0',
            Role: 'AI second brain over your documents',
            'Key difference': 'Works on notes and files you provide, not on screen activity',
          },
          {
            App: '[Hyperlink (Nexa AI)](/power-local-llm/hyperlink-nexa-review)',
            Platforms: 'Mac, Windows',
            'Price and license': 'Free, proprietary',
            Role: 'On-device file search',
            'Key difference': 'Searches your files rather than recording your day',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Dayflow',
        items: [
          '**Mac users who bill or report their time.** The timeline and Markdown export replace manual notes.',
          '**Developers who write standups.** The daily view drafts yesterday\'s highlights, today\'s tasks and blockers.',
          '**People who keep screen data private.** A local model keeps analysis on the Mac, per the README.',
          '**Open-source users.** The MIT code is public and the app is free.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Dayflow',
        items: [
          '**Windows and Linux users.** Only a Mac app exists; Windows is announced.',
          '**Macs older than macOS 14.** The README requires macOS 14 or newer.',
          '**Anyone unwilling to run a local model.** Without Ollama or LM Studio, analysis uses a cloud provider.',
          '**Anyone who cannot record their screen.** Employer or client rules may forbid periodic screenshots.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Dayflow work offline?',
            a: 'With a local model in Ollama or LM Studio, analysis needs no internet connection, per the README; updates, account sign-in and cloud modes do. PromptQuorum did not test it offline.',
          },
          {
            q: 'Does Dayflow record my screen continuously?',
            a: 'The privacy policy says it captures screenshots at low frequency, and the homepage says the recorder uses around 100 MB of RAM and under 1% CPU. Those are the maker\'s figures; PromptQuorum did not measure them.',
          },
          {
            q: 'Can I use ChatGPT or Claude instead of a local model?',
            a: 'Yes, through their local command-line tools (Codex CLI and Claude Code) or with your own Gemini, OpenAI or Anthropic key. These paths use cloud models, so screenshots reach the provider.',
          },
          {
            q: 'Where are my recordings stored?',
            a: 'In the Dayflow folder inside Application Support on your Mac, per the README. Activity Data is stored on the maker\'s servers only if you subscribe to Pro for cross-device sync.',
          },
          {
            q: 'Is there a Windows version?',
            a: 'Not yet: the homepage says Dayflow for Windows is coming and offers a waitlist, and no Windows build was found.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Dayflow is a good fit if you use a Mac, want an automatic and open-source record of your workday, and are ready to run Ollama or LM Studio so the analysis stays on your machine. It has an MIT license, a free tier and a release on 10 November 2026.',
          'The caveats are scope and verifiability: Mac only, a separate local-model setup, cloud paths that send screenshots away, and privacy and accuracy claims that PromptQuorum could not check. Try the free local setup before considering Pro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Dayflow website](https://www.dayflow.so/) — features, requirements and the Windows notice.',
          '[Pricing page](https://www.dayflow.so/pricing/) — Free, Pro and Enterprise plans and the data-path FAQ.',
          '[Privacy policy](https://www.dayflow.so/privacy/) — local, own-provider and cloud modes, analytics and data handling.',
          '[GitHub repository](https://github.com/JerryZLiu/Dayflow) — README, MIT license and source code.',
          '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — Dayflow.dmg and the release date of version 2.9.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Perfect Memory AI Review](/power-local-llm/perfect-memory-review) — a screen and meeting memory app for Mac and Windows.',
          '[Khoj Review](/power-local-llm/khoj-ai-second-brain-review) — a self-hosted AI second brain over your own documents.',
          '[Hyperlink (Nexa AI) Review](/power-local-llm/hyperlink-nexa-review) — on-device AI search across your files.',
          '[Ollama Review](/power-local-llm/ollama-review) — the local runtime Dayflow can use for on-device analysis.',
          '[LM Studio Review](/power-local-llm/lm-studio-review) — the desktop alternative for running local models.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/dayflow-review-hero-de.webp',
    title: 'Dayflow Rezension: Open-Source-Arbeitsjournal für den Mac mit lokaler KI',
    seoTitle: 'Dayflow Rezension: Open-Source-Arbeitsjournal, lokale KI',
    intro: 'Dayflow ist eine kostenlose, MIT-lizenzierte Mac-App, die in großen Abständen Bildschirmfotos aufnimmt und daraus eine Zeitleiste Ihrer Arbeit erstellt, mit Tages- und Wochenzusammenfassungen und einem Chat über Ihre eigene Zeitleiste. Diese Rezension fasst zusammen, was Website und GitHub-Repository sagen, welche Teile über Ollama oder LM Studio auf Ihrem eigenen Mac laufen können, wo Bildschirmfotos den Rechner verlassen und wie Dayflow im Vergleich zu anderen Werkzeugen im Verzeichnis abschneidet.',
    metaDescription: 'Dayflow Rezension: kostenloses Mac-Arbeitsjournal (MIT), das Bildschirmfotos zur Zeitleiste macht und lokal mit Ollama oder LM Studio läuft. Ungetestet.',
    twitterDescription: 'Dayflow Rezension: automatisches Open-Source-Arbeitsjournal für den Mac mit lokaler KI-Option. Preis, Datenwege, Grenzen und Alternativen.',
    audience: 'Mac-Nutzer, die ihren Arbeitstag automatisch und quelloffen festhalten möchten und darauf achten, wo ihre Bildschirmfotos analysiert werden — behandelt Preis, Installation, lokale und Cloud-Modi, Datenschutz, Grenzen und Alternativen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Dayflow review',
    targetKeywords: [
      'dayflow rezension',
      'dayflow mac app',
      'automatisches arbeitsjournal mac',
      'open-source zeiterfassung mac',
      'lokale ki bildschirmaktivität',
      'ollama lm studio zeitleiste',
      'private zeiterfassung app',
    ],
    current_hardware_mentioned: [
      'Mac',
      'macOS 14',
    ],
    leadAnswerBlock: '**Dayflow ist eine kostenlose, MIT-lizenzierte Mac-App, die Ihren Bildschirm in großen Abständen aufzeichnet und per KI in eine Zeitleiste verwandelt; die Analyse kann vollständig auf Ihrem eigenen Mac über Ollama oder LM Studio laufen.** Cloud-Analyse ist eine Wahlmöglichkeit, keine Pflicht. Die neueste Version ist 2.9.0 vom 10. November 2026. Diese Rezension stützt sich auf Website und GitHub-Repository des Herstellers, nicht auf eigene Tests.',
    quickAnswerTop: {
      de: {
        question: 'Ist Dayflow eine lokale App?',
        answer: 'Teilweise, je nach Ihrer Wahl: Aufnahmen und Datenbank liegen auf dem Mac, und laut README bleibt die Analyse auf Ihrem Rechner, wenn Sie lokale Modelle wählen. Wählen Sie einen eigenen Cloud-Schlüssel oder Dayflow Pro, gehen die Bildschirmfotos an diesen Anbieter. Der Code ist offen, PromptQuorum hat den Netzwerkverkehr aber nicht geprüft; die Datenschutzangaben stammen daher vom Hersteller.',
        bullets: [
          'Dayflow nimmt Bildschirmfotos in großen Abständen auf und erstellt daraus Aktivitätskarten, einen Entwurf für das tägliche Standup, eine Wochenübersicht und einen Chat über Ihre Zeitleiste.',
          'Preise: Die App ist mit einem lokalen Modell oder Ihrem eigenen API-Schlüssel kostenlos; der optionale Pro-Tarif mit verwalteter KI kostet 20 $ im Monat.',
          'Lokale Analyse braucht Ollama oder LM Studio, die Sie selbst installieren und starten; ein Modell wird nicht mitgeliefert.',
          'Nur Mac mit macOS 14 oder neuer; die Startseite kündigt eine Windows-Version als kommend an.',
          'Anonyme Analysedaten gehen an den Hersteller, solange Sie sie nicht in den Einstellungen abschalten.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Dayflow herunterladen', anchor: 'get-it' },
      { label: 'Dayflow im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Dayflow ist', anchor: 'what-is-dayflow' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Lokal oder Cloud: Wohin die Bildschirmfotos gehen', anchor: 'local-vs-cloud' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Dayflow im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Dayflow geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Dayflow nicht geeignet ist', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Dayflow ist eine kostenlose Open-Source-Mac-App, die laut README Bildschirmfotos in großen Abständen zu einer Arbeitszeitleiste verarbeitet und die KI-Analyse vollständig auf Ihrem eigenen Mac ausführen kann.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich ein automatisches Tagebuch Ihres Arbeitstags vor: Statt Timer zu starten, lassen Sie die App von Zeit zu Zeit auf Ihren Bildschirm schauen und notieren, was Sie gerade getan haben.',
          },
        ],
        items: [
          'Lokale Aussage: Aufnahme, Aufzeichnungen und Datenbank bleiben auf dem Mac; die Analyse ist nur lokal, wenn Sie Ollama oder LM Studio anbinden.',
          'Lizenz und Hersteller: MIT, offener Code, laut Datenschutzerklärung von Teleport Labs Inc. veröffentlicht.',
          'Preis: kostenlos mit lokalem Modell oder eigenem Schlüssel; verwaltete KI ist der kostenpflichtige Pro-Tarif.',
          'Pflege: Version 2.9.0 erschien am 10. November 2026 und das Repository wurde am selben Tag aktualisiert, das Projekt wird also aktiv entwickelt.',
          'Lücken: nur macOS 14 oder neuer, kein mitgeliefertes Modell, und Cloud-Wege senden Bildschirmfotos an einen Anbieter.',
        ],
      },
      getItDayflow: {
        id: 'get-it',
        title: 'Dayflow herunterladen',
        content: [
          '**Dayflow wird wie jede Mac-App installiert, ein Terminal ist nicht nötig.** Laden Sie das Disk-Image von der offiziellen Website oder der GitHub-Release-Seite herunter, öffnen Sie es, ziehen Sie Dayflow in den Programme-Ordner und erteilen Sie die Berechtigung zur Bildschirmaufnahme, sobald macOS danach fragt.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Mac',
            'Bezugsquelle': '[Für Mac herunterladen](https://github.com/JerryZLiu/Dayflow/releases/latest) — Dayflow.dmg, macOS 14 oder neuer; auch `brew install --cask dayflow`',
          },
          {
            Plattform: 'Versionshinweise',
            'Bezugsquelle': '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — zur Version 2.9.0 gibt es keine Release-Notizen',
          },
          {
            Plattform: 'Website',
            'Bezugsquelle': '[dayflow.so](https://www.dayflow.so/)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            'Bezugsquelle': '[Datenschutzerklärung von Dayflow](https://www.dayflow.so/privacy/)',
          },
          {
            Plattform: 'Quellcode',
            'Bezugsquelle': '[github.com/JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — MIT-Lizenz',
          },
        ],
        note: 'Die Startseite kündigt eine Windows-Version als kommend an; ein Windows- oder Linux-Build wurde nicht gefunden.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Dayflow im Überblick',
        columns: ['Merkmal', 'Dayflow'],
        rows: [
          { Merkmal: 'Plattform', Dayflow: 'macOS 14 oder neuer' },
          { Merkmal: 'Preis', Dayflow: 'Kostenlos; kostenpflichtiger Pro-Tarif' },
          { Merkmal: 'Lizenz', Dayflow: 'MIT, Open Source' },
          { Merkmal: 'Ausführung', Dayflow: 'Aufnahme auf dem Mac; Analyse lokal oder Cloud' },
          { Merkmal: 'Funktioniert mit lokalen LLMs', Dayflow: 'Ja, über Ollama oder LM Studio' },
          { Merkmal: 'Spracheingabe / -ausgabe', Dayflow: 'Nicht angegeben' },
          { Merkmal: 'Dauerhaftes Gedächtnis', Dayflow: 'Zeitleisten-Datenbank auf Ihrem Mac' },
          { Merkmal: 'Werkzeugnutzung / Aktionen', Dayflow: 'Nicht angegeben' },
        ],
        note: 'Die Merkmale folgen dem Vergleich der persönlichen Assistenten im Local LLM Software Directory. Eine fehlende Angabe auf der Website bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsDayflow: {
        id: 'what-is-dayflow',
        title: 'Was Dayflow ist',
        content: [
          '**Dayflow ist ein automatisches Arbeitsjournal, kein manueller Timer.** Die App nimmt in großen Abständen Bildschirmfotos auf, lässt ein KI-Modell beschreiben, was Sie getan haben, und gruppiert das Ergebnis zu Aktivitätskarten auf einer Zeitleiste; ein Block in Cursor oder Chrome erscheint so etwa als Fehlersuche oder Recherche statt nur als App-Name.',
          'Die Startseite nennt Teleport Labs Inc. als Unternehmen, das GitHub-Repository heißt JerryZLiu/Dayflow. Die Preisseite führt außerdem einen Enterprise-Tarif mit SSO und Aufbewahrungsregeln auf; diese Rezension behandelt nur die Mac-App.',
          'Diese Rezension stützt sich auf Website, Datenschutzerklärung und GitHub-Repository. Es gab keine eigenen Tests, daher werden Qualität der Zusammenfassungen, Akkuverbrauch und Stabilität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, Berechtigung und der Wahl der KI.** Die Schritte folgen dem README.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie Dayflow.dmg von der [GitHub-Release-Seite](https://github.com/JerryZLiu/Dayflow/releases/latest) herunter und ziehen Sie die App in den Programme-Ordner, oder führen Sie `brew install --cask dayflow` aus.',
          },
          {
            title: 'Berechtigung erteilen',
            whyItMatters: 'Erlauben Sie macOS „Bildschirm- und Systemaudioaufnahme“, wenn danach gefragt wird; ohne sie kann Dayflow nichts aufnehmen.',
          },
          {
            title: 'Analyseweg wählen',
            whyItMatters: 'Wählen Sie ein lokales Modell über Ollama oder LM Studio, Ihren eigenen Gemini-Schlüssel oder ChatGPT beziehungsweise Claude über deren lokale Kommandozeilen-Werkzeuge; Pro ist die verwaltete Alternative.',
          },
          {
            title: 'Laufen lassen, dann ansehen',
            whyItMatters: 'Arbeiten Sie wie gewohnt; öffnen Sie später die Zeitleiste, die Tagesansicht oder die Wochenübersicht, oder exportieren Sie einen Zeitraum als Markdown.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang dreht sich um die Zeitleiste.** Alles Folgende stammt aus README und Website.',
        ],
        items: [
          '**Automatische Zeitleiste.** Bildschirmabschnitte werden zu Aktivitätskarten mit Kontext, etwa was Sie in Editor oder Browser getan haben.',
          '**Tägliches Standup.** Ein Aktivitätsraster plus die Höhepunkte von gestern, die Prioritäten von heute und Blockaden.',
          '**Wochenübersicht.** Fokusmuster, Kategorien und App-Nutzung über die Woche, mit Erfassung von Ablenkungen.',
          '**Chat mit Ihrem Journal.** Fragen in natürlicher Sprache, beantwortet aus Ihrer eigenen Zeitleiste.',
          '**Export und Bereinigung.** Markdown-Export für jeden Zeitraum und automatisches Löschen alter Aufnahmen anhand eines Speicherlimits.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Lokal oder Cloud: Wohin die Bildschirmfotos gehen',
        content: [
          '**Dayflow bietet drei Analysewege, und nur der erste hält die Bildschirmfotos auf dem Mac.** Die Datenschutzerklärung nennt die lokale Verarbeitung, bei der Bildschirmfotos den Rechner nie verlassen; „Eigener KI-Anbieter“, bei dem die Bildschirmfotos direkt an den von Ihnen eingerichteten Anbieter gehen; und die Dayflow-Cloud für Pro, bei der sie auf den Servern des Herstellers verarbeitet und danach gelöscht werden. Die ersten beiden sind dort als „Standard“ gekennzeichnet, ein einzelner Standard wird nicht genannt.',
          'Die lokale Verarbeitung läuft über Ollama oder LM Studio, die Sie separat installieren. Das README nennt außerdem ChatGPT und Claude über deren lokale Kommandozeilen-Werkzeuge; diese rufen die Cloud-Modelle der Anbieter auf, dieser Weg ist also keine Inferenz auf dem Gerät. Laut README und Preisseite liegen Aufnahmen und Datenbank in jedem Modus auf dem Mac.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Laut Datenschutzerklärung verkauft Dayflow Ihre Daten nicht, speichert Ihre Bildschirmfotos nicht und erlaubt seinen KI-Anbietern nicht, mit Ihren Daten zu trainieren.** Anonyme Analysedaten (App-Starts, Funktionsnutzung, Absturzberichte) lassen sich in den Einstellungen abschalten, und grundlegende Kontodaten werden für Abonnenten gespeichert. Das Unternehmen sitzt in den USA. Der Code ist offen, und PromptQuorum hat den Netzwerkverkehr nicht untersucht; diese Aussagen stammen also vom Hersteller.',
          'Die Lizenz ist MIT. Der kostenlose Tarif umfasst Aufnahme, Zusammenfassungen und Ihre eigenen Anbieter-Schlüssel oder ein lokales Modell; Pro kostet 20 $ im Monat für verwaltete KI, ein Jahresangebot wird in der App angezeigt, und Enterprise wird auf Anfrage berechnet.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            Vorteil: 'Analyse auf Ihrem eigenen Mac',
            'Was das im Alltag bedeutet': 'Laut README bleiben Bildschirmfotos mit Ollama oder LM Studio auf dem Rechner.',
            'Einschränkung / Hinweis': 'Sie installieren und starten das Modell selbst; lokale Inferenz belastet laut Startseite GPU und Akku stark.',
          },
          {
            Vorteil: 'Kostenlos und Open Source',
            'Was das im Alltag bedeutet': 'MIT-Code, kostenloser Tarif mit eigenem Schlüssel oder lokalem Modell.',
            'Einschränkung / Hinweis': 'Verwaltete KI erfordert den kostenpflichtigen Pro-Tarif.',
          },
          {
            Vorteil: 'Automatische Zeitleiste',
            'Was das im Alltag bedeutet': 'Keine Timer oder manuellen Notizen; Zusammenfassungen beschreiben, was Sie getan haben.',
            'Einschränkung / Hinweis': 'Die Qualität der Zusammenfassungen hängt vom gewählten Modell ab; PromptQuorum hat sie nicht gemessen.',
          },
          {
            Vorteil: 'Flexible KI-Wahl',
            'Was das im Alltag bedeutet': 'Später zwischen lokal, eigenem Schlüssel und Pro wechseln.',
            'Einschränkung / Hinweis': 'Cloud-Wege senden Bildschirmfotos an einen Anbieter.',
          },
          {
            Vorteil: 'Aktive Entwicklung',
            'Was das im Alltag bedeutet': 'Version 2.9.0 erschien am 10. November 2026.',
            'Einschränkung / Hinweis': 'Nur Mac mit macOS 14 oder neuer; Windows ist nur angekündigt.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Dayflow im Vergleich zu Alternativen',
        content: [
          'Das sind die ähnlichsten Werkzeuge im Verzeichnis: eine weitere Bildschirm-Gedächtnis-App, ein selbst gehostetes zweites Gehirn und eine Dateisuche auf dem Gerät.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'Dayflow',
            Plattformen: 'Mac',
            'Preis und Lizenz': 'Kostenlos, Pro kostenpflichtig, MIT',
            Rolle: 'Automatisches Arbeitsjournal',
            'Wichtigster Unterschied': 'Open Source; lokale Modelle über Ollama oder LM Studio',
          },
          {
            App: '[Perfect Memory AI](/de/power-local-llm/perfect-memory-review)',
            Plattformen: 'Mac, Windows',
            'Preis und Lizenz': 'Freemium, Closed Source',
            Rolle: 'Durchsuchbares Bildschirm- und Meeting-Gedächtnis',
            'Wichtigster Unterschied': 'Laut Datenschutzerklärung läuft die eingebaute KI über den Server des Herstellers, solange Sie keine lokale anbinden',
          },
          {
            App: '[Khoj](/de/power-local-llm/khoj-ai-second-brain-review)',
            Plattformen: 'Mac, Windows, Linux, Web',
            'Preis und Lizenz': 'Kostenlos, AGPL 3.0',
            Rolle: 'KI-Zweitgehirn über Ihre Dokumente',
            'Wichtigster Unterschied': 'Arbeitet mit Notizen und Dateien, die Sie bereitstellen, nicht mit Bildschirmaktivität',
          },
          {
            App: '[Hyperlink (Nexa AI)](/de/power-local-llm/hyperlink-nexa-review)',
            Plattformen: 'Mac, Windows',
            'Preis und Lizenz': 'Kostenlos, proprietär',
            Rolle: 'Dateisuche auf dem Gerät',
            'Wichtigster Unterschied': 'Durchsucht Ihre Dateien, statt Ihren Tag aufzuzeichnen',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Details auf der Seite des jeweiligen Projekts, bevor Sie entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Dayflow geeignet ist',
        items: [
          '**Mac-Nutzer, die ihre Zeit abrechnen oder berichten.** Zeitleiste und Markdown-Export ersetzen manuelle Notizen.',
          '**Entwickler, die Standups schreiben.** Die Tagesansicht entwirft die Höhepunkte von gestern, die Aufgaben von heute und Blockaden.',
          '**Menschen, die Bildschirmdaten privat halten.** Ein lokales Modell hält die Analyse laut README auf dem Mac.',
          '**Open-Source-Nutzer.** Der MIT-Code ist öffentlich und die App kostenlos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Dayflow nicht geeignet ist',
        items: [
          '**Windows- und Linux-Nutzer.** Es gibt nur eine Mac-App; Windows ist angekündigt.',
          '**Macs mit älterem macOS als 14.** Das README verlangt macOS 14 oder neuer.',
          '**Alle, die kein lokales Modell betreiben möchten.** Ohne Ollama oder LM Studio nutzt die Analyse einen Cloud-Anbieter.',
          '**Alle, die ihren Bildschirm nicht aufzeichnen dürfen.** Regeln von Arbeitgeber oder Kunden können regelmäßige Bildschirmfotos verbieten.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Dayflow offline?',
            a: 'Mit einem lokalen Modell in Ollama oder LM Studio braucht die Analyse laut README keine Internetverbindung; Updates, Kontoanmeldung und Cloud-Modi schon. PromptQuorum hat es nicht offline getestet.',
          },
          {
            q: 'Zeichnet Dayflow meinen Bildschirm dauerhaft auf?',
            a: 'Laut Datenschutzerklärung nimmt es Bildschirmfotos in großen Abständen auf, und laut Startseite braucht der Recorder etwa 100 MB RAM und unter 1 % CPU. Das sind Herstellerangaben; PromptQuorum hat sie nicht gemessen.',
          },
          {
            q: 'Kann ich ChatGPT oder Claude statt eines lokalen Modells nutzen?',
            a: 'Ja, über deren lokale Kommandozeilen-Werkzeuge (Codex CLI und Claude Code) oder mit Ihrem eigenen Gemini-, OpenAI- oder Anthropic-Schlüssel. Diese Wege nutzen Cloud-Modelle, die Bildschirmfotos erreichen also den Anbieter.',
          },
          {
            q: 'Wo werden meine Aufnahmen gespeichert?',
            a: 'Laut README im Ordner Dayflow innerhalb von Application Support auf Ihrem Mac. Activity Data liegen nur dann auf den Servern des Herstellers, wenn Sie Pro für die Synchronisierung zwischen Geräten abonnieren.',
          },
          {
            q: 'Gibt es eine Windows-Version?',
            a: 'Noch nicht: Die Startseite sagt, Dayflow für Windows komme, und bietet eine Warteliste an; ein Windows-Build wurde nicht gefunden.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Dayflow passt, wenn Sie einen Mac nutzen, Ihren Arbeitstag automatisch und quelloffen festhalten möchten und bereit sind, Ollama oder LM Studio zu betreiben, damit die Analyse auf Ihrem Rechner bleibt. Es hat eine MIT-Lizenz, einen kostenlosen Tarif und ein Release vom 10. November 2026.',
          'Die Vorbehalte sind Umfang und Überprüfbarkeit: nur Mac, eine separate Einrichtung des lokalen Modells, Cloud-Wege, die Bildschirmfotos versenden, und Datenschutz- und Genauigkeitsangaben, die PromptQuorum nicht prüfen konnte. Probieren Sie die kostenlose lokale Einrichtung, bevor Sie Pro erwägen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Dayflow-Website](https://www.dayflow.so/) — Funktionen, Voraussetzungen und der Windows-Hinweis.',
          '[Preisseite](https://www.dayflow.so/pricing/) — Tarife Free, Pro und Enterprise sowie die FAQ zum Datenweg.',
          '[Datenschutzerklärung](https://www.dayflow.so/privacy/) — lokale, eigene und Cloud-Modi, Analysedaten und Datenverarbeitung.',
          '[GitHub-Repository](https://github.com/JerryZLiu/Dayflow) — README, MIT-Lizenz und Quellcode.',
          '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — Dayflow.dmg und das Veröffentlichungsdatum von Version 2.9.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Perfect Memory AI Rezension](/de/power-local-llm/perfect-memory-review) — eine Bildschirm- und Meeting-Gedächtnis-App für Mac und Windows.',
          '[Khoj Rezension](/de/power-local-llm/khoj-ai-second-brain-review) — ein selbst gehostetes KI-Zweitgehirn über Ihre eigenen Dokumente.',
          '[Hyperlink (Nexa AI) Rezension](/de/power-local-llm/hyperlink-nexa-review) — KI-Suche über Ihre Dateien auf dem Gerät.',
          '[Ollama Rezension](/de/power-local-llm/ollama-review) — die lokale Laufzeit, die Dayflow für die Analyse auf dem Gerät nutzen kann.',
          '[LM Studio Rezension](/de/power-local-llm/lm-studio-review) — die Desktop-Alternative zum Betrieb lokaler Modelle.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/dayflow-review-hero-fr.webp',
    title: 'Test de Dayflow : journal de travail open source pour Mac avec IA locale',
    seoTitle: 'Test de Dayflow : journal de travail Mac open source',
    intro: 'Dayflow est une application Mac gratuite sous licence MIT qui prend des captures d’écran espacées et les transforme en chronologie de votre travail, avec des synthèses quotidiennes et hebdomadaires et un chat sur votre propre chronologie. Ce test résume ce que disent le site et le dépôt GitHub, quelles parties peuvent tourner sur votre Mac via Ollama ou LM Studio, où les captures quittent la machine et comment Dayflow se situe face aux autres outils du répertoire.',
    metaDescription: 'Test de Dayflow : journal de travail Mac gratuit (MIT) qui transforme des captures en chronologie, analyse en local avec Ollama ou LM Studio. Non testé.',
    twitterDescription: 'Test de Dayflow : journal de travail automatique open source pour Mac, avec option d’IA sur l’appareil. Prix, circuits de données, limites et alternatives.',
    audience: 'Utilisateurs de Mac qui veulent un suivi automatique et open source de leur journée et qui se soucient de l’endroit où leurs captures sont analysées — couvre prix, installation, modes local et cloud, confidentialité, limites et alternatives.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Dayflow review',
    targetKeywords: [
      'test dayflow',
      'dayflow application mac',
      'journal de travail automatique mac',
      'suivi du temps open source mac',
      'ia locale activité écran',
      'ollama lm studio chronologie',
      'suivi du temps privé',
    ],
    current_hardware_mentioned: [
      'Mac',
      'macOS 14',
    ],
    leadAnswerBlock: '**Dayflow est une application Mac gratuite sous licence MIT qui enregistre votre écran à basse fréquence et le transforme en chronologie grâce à l’IA ; l’analyse peut tourner entièrement sur votre propre Mac via Ollama ou LM Studio.** L’analyse dans le cloud est un choix, pas une obligation. La version la plus récente est la 2.9.0 du 10 novembre 2026. Ce test repose sur le site et le dépôt GitHub de l’éditeur, pas sur des essais pratiques.',
    quickAnswerTop: {
      fr: {
        question: 'Dayflow est-elle une application locale ?',
        answer: 'En partie, selon votre choix : les enregistrements et la base de données sont stockés sur le Mac, et le README indique que l’analyse reste sur votre machine si vous choisissez des modèles locaux. Avec votre propre clé cloud ou Dayflow Pro, les captures partent chez ce fournisseur. Le code est ouvert, mais PromptQuorum n’a pas inspecté le trafic réseau ; les affirmations de confidentialité restent donc celles de l’éditeur.',
        bullets: [
          'Dayflow capture des écrans à basse fréquence et en tire des cartes d’activité, un brouillon de point quotidien, un bilan hebdomadaire et un chat sur votre chronologie.',
          'Tarifs : l’application est gratuite avec un modèle local ou votre propre clé d’API ; l’offre Pro optionnelle avec IA gérée coûte 20 $ par mois.',
          'L’analyse locale demande Ollama ou LM Studio, que vous installez et lancez vous-même ; aucun modèle n’est fourni.',
          'Mac uniquement, macOS 14 ou plus récent ; la page d’accueil annonce une version Windows à venir.',
          'Des statistiques anonymes sont envoyées à l’éditeur, sauf si vous les désactivez dans les réglages.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Dayflow', anchor: 'get-it' },
      { label: 'Dayflow en un coup d’œil', anchor: 'at-a-glance' },
      { label: 'Ce qu’est Dayflow', anchor: 'what-is-dayflow' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Local ou cloud : où vont les captures', anchor: 'local-vs-cloud' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Dayflow face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Dayflow est adaptée', anchor: 'who-should-use' },
      { label: 'Pour qui Dayflow n’est pas adaptée', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Dayflow est une application Mac gratuite et open source qui, d’après son README, transforme des captures d’écran espacées en chronologie de travail et peut exécuter l’analyse IA entièrement sur votre propre Mac.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez un journal automatique de votre journée de travail : au lieu de lancer des minuteurs, vous laissez l’application regarder votre écran de temps en temps et noter ce que vous faisiez.',
          },
        ],
        items: [
          'Affirmation locale : la capture, les enregistrements et la base de données restent sur le Mac ; l’analyse n’est locale que si vous connectez Ollama ou LM Studio.',
          'Licence et éditeur : MIT, code ouvert, publié par Teleport Labs Inc. selon la politique de confidentialité.',
          'Prix : gratuit avec un modèle local ou votre propre clé ; l’IA gérée correspond à l’offre payante Pro.',
          'Maintenance : la version 2.9.0 est sortie le 10 novembre 2026 et le dépôt a été mis à jour le même jour, le projet est donc activement développé.',
          'Lacunes : macOS 14 ou plus récent uniquement, aucun modèle fourni, et les voies cloud envoient les captures à un fournisseur.',
        ],
      },
      getItDayflow: {
        id: 'get-it',
        title: 'Obtenir Dayflow',
        content: [
          '**Dayflow s’installe comme n’importe quelle application Mac, sans terminal.** Téléchargez l’image disque depuis le site officiel ou la page des versions GitHub, ouvrez-la, glissez Dayflow dans Applications et accordez l’autorisation d’enregistrement d’écran quand macOS la demande.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            Plateforme: 'Mac',
            'Où la trouver': '[Télécharger pour Mac](https://github.com/JerryZLiu/Dayflow/releases/latest) — Dayflow.dmg, macOS 14 ou plus récent ; aussi `brew install --cask dayflow`',
          },
          {
            Plateforme: 'Notes de version',
            'Où la trouver': '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — la version 2.9.0 n’a pas de notes rédigées',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[dayflow.so](https://www.dayflow.so/)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité de Dayflow](https://www.dayflow.so/privacy/)',
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': '[github.com/JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — licence MIT',
          },
        ],
        note: 'La page d’accueil annonce une version Windows à venir ; aucune version Windows ou Linux n’a été trouvée.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Dayflow en un coup d’œil',
        columns: ['Attribut', 'Dayflow'],
        rows: [
          { Attribut: 'Plateforme', Dayflow: 'macOS 14 ou plus récent' },
          { Attribut: 'Prix', Dayflow: 'Gratuit ; offre Pro payante' },
          { Attribut: 'Licence', Dayflow: 'MIT, open source' },
          { Attribut: 'Exécution', Dayflow: 'Capture sur le Mac ; analyse locale ou cloud' },
          { Attribut: 'Fonctionne avec des LLM locaux', Dayflow: 'Oui, via Ollama ou LM Studio' },
          { Attribut: 'Entrée / sortie vocale', Dayflow: 'Non précisé' },
          { Attribut: 'Mémoire persistante', Dayflow: 'Base de la chronologie sur votre Mac' },
          { Attribut: 'Usage d’outils / actions', Dayflow: 'Non précisé' },
        ],
        note: 'Les attributs suivent la comparaison des assistants personnels utilisée dans le Répertoire des logiciels de LLM locaux. Une absence de mention sur le site signifie « inconnu », pas « non pris en charge ».',
      },
      whatIsDayflow: {
        id: 'what-is-dayflow',
        title: 'Ce qu’est Dayflow',
        content: [
          '**Dayflow est un journal de travail automatique, pas un minuteur manuel.** Il prend des captures d’écran à basse fréquence, fait décrire par un modèle d’IA ce que vous faisiez, puis regroupe le résultat en cartes d’activité sur une chronologie ; un bloc passé dans Cursor ou Chrome apparaît ainsi comme du débogage ou de la recherche plutôt que comme un simple nom d’application.',
          'La page d’accueil nomme Teleport Labs Inc. comme société et le dépôt GitHub est JerryZLiu/Dayflow. La page des tarifs mentionne aussi une offre Enterprise avec SSO et contrôle de la conservation des données ; ce test ne couvre que l’application Mac.',
          'Ce test s’appuie sur le site, la politique de confidentialité et le dépôt GitHub. Il n’a donné lieu à aucun essai pratique : la qualité des synthèses, la consommation de batterie et la stabilité ne sont donc pas évaluées ici.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          '**La mise en route se résume à une installation, une autorisation et un choix d’IA.** Les étapes suivent le README.',
        ],
        numberedItems: [
          {
            title: 'Installer l’application',
            whyItMatters: 'Téléchargez Dayflow.dmg depuis la [page des versions GitHub](https://github.com/JerryZLiu/Dayflow/releases/latest) et glissez-la dans Applications, ou lancez `brew install --cask dayflow`.',
          },
          {
            title: 'Accorder l’autorisation',
            whyItMatters: 'Autorisez « Enregistrement de l’écran et de l’audio système » dans macOS lorsqu’il le demande ; sans cela, Dayflow ne peut rien capturer.',
          },
          {
            title: 'Choisir le mode d’analyse',
            whyItMatters: 'Choisissez un modèle local via Ollama ou LM Studio, votre propre clé Gemini, ou ChatGPT ou Claude via leurs outils en ligne de commande locaux ; Pro est l’alternative gérée.',
          },
          {
            title: 'Laisser tourner, puis consulter',
            whyItMatters: 'Travaillez normalement ; ouvrez ensuite la chronologie, la vue du jour ou le bilan de la semaine, ou exportez une période en Markdown.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**L’ensemble des fonctions tourne autour de la chronologie.** Tout ce qui suit provient du README et du site.',
        ],
        items: [
          '**Chronologie automatique.** Des segments d’écran deviennent des cartes d’activité avec contexte, par exemple ce que vous avez fait dans un éditeur ou un navigateur.',
          '**Point quotidien.** Une grille d’activité, plus les faits marquants d’hier, les priorités du jour et les blocages.',
          '**Bilan hebdomadaire.** Schémas de concentration, catégories et usage des applications sur la semaine, avec suivi des distractions.',
          '**Chat avec votre journal.** Des questions en langage naturel, avec des réponses tirées de votre propre chronologie.',
          '**Export et nettoyage.** Export Markdown pour n’importe quelle période et suppression automatique des anciens enregistrements selon une limite de stockage.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Local ou cloud : où vont les captures',
        content: [
          '**Dayflow propose trois voies d’analyse, et seule la première garde les captures sur le Mac.** La politique de confidentialité décrit le traitement local, où les captures ne quittent jamais la machine ; « votre propre fournisseur d’IA », où elles partent directement chez le fournisseur que vous configurez ; et le cloud Dayflow pour Pro, où elles sont traitées sur les serveurs de l’éditeur puis supprimées. Elle qualifie les deux premières de « par défaut » sans désigner un défaut unique.',
          'Le traitement local passe par Ollama ou LM Studio, que vous installez séparément. Le README cite aussi ChatGPT et Claude via leurs outils en ligne de commande locaux ; ces outils appellent les modèles cloud des fournisseurs, cette voie n’est donc pas de l’inférence sur l’appareil. D’après le README et la page des tarifs, les enregistrements et la base de données restent sur le Mac dans tous les modes.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          '**La politique de confidentialité affirme que Dayflow ne vend pas vos données, ne conserve pas vos captures d’écran et n’autorise pas ses fournisseurs d’IA à entraîner leurs modèles sur vos données.** Les statistiques anonymes (lancements, usage des fonctions, rapports de plantage) peuvent être désactivées dans les réglages, et les informations de compte de base sont conservées pour les abonnés. La société est basée aux États-Unis. Le code est ouvert et PromptQuorum n’a pas examiné le trafic réseau ; ces affirmations sont donc celles de l’éditeur.',
          'La licence est MIT. L’offre gratuite couvre la capture, les synthèses et vos propres clés de fournisseur ou un modèle local ; Pro coûte 20 $ par mois pour l’IA gérée, avec une offre annuelle affichée dans l’application, et Enterprise est facturée sur demande.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'Ce que cela donne à l’usage', 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Analyse sur votre propre Mac',
            'Ce que cela donne à l’usage': 'Selon le README, avec Ollama ou LM Studio, les captures restent sur la machine.',
            'Limite / réserve': 'Vous installez et lancez le modèle vous-même ; selon la page d’accueil, l’inférence locale sollicite fortement le GPU et la batterie.',
          },
          {
            Avantage: 'Gratuit et open source',
            'Ce que cela donne à l’usage': 'Code MIT, offre gratuite avec votre clé ou un modèle local.',
            'Limite / réserve': 'L’IA gérée nécessite l’offre payante Pro.',
          },
          {
            Avantage: 'Chronologie automatique',
            'Ce que cela donne à l’usage': 'Ni minuteurs ni notes manuelles ; les synthèses décrivent ce que vous avez fait.',
            'Limite / réserve': 'La qualité des synthèses dépend du modèle choisi ; PromptQuorum ne l’a pas mesurée.',
          },
          {
            Avantage: 'Choix d’IA flexible',
            'Ce que cela donne à l’usage': 'Passez plus tard entre local, votre clé et Pro.',
            'Limite / réserve': 'Les voies cloud envoient les captures à un fournisseur.',
          },
          {
            Avantage: 'Développement actif',
            'Ce que cela donne à l’usage': 'La version 2.9.0 est sortie le 10 novembre 2026.',
            'Limite / réserve': 'Mac uniquement, macOS 14 ou plus récent ; Windows n’est qu’annoncé.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Dayflow face aux alternatives',
        content: [
          'Voici les outils les plus proches du répertoire : une autre application de mémoire d’écran, un second cerveau auto-hébergé et une recherche de fichiers sur l’appareil.',
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'Dayflow',
            Plateformes: 'Mac',
            'Prix et licence': 'Gratuit, Pro payant, MIT',
            Rôle: 'Journal de travail automatique',
            'Différence clé': 'Open source ; modèles locaux via Ollama ou LM Studio',
          },
          {
            Application: '[Perfect Memory AI](/fr/power-local-llm/perfect-memory-review)',
            Plateformes: 'Mac, Windows',
            'Prix et licence': 'Freemium, code fermé',
            Rôle: 'Mémoire consultable de l’écran et des réunions',
            'Différence clé': 'Selon sa politique de confidentialité, l’IA intégrée passe par le serveur de l’éditeur, sauf si vous en connectez une locale',
          },
          {
            Application: '[Khoj](/fr/power-local-llm/khoj-ai-second-brain-review)',
            Plateformes: 'Mac, Windows, Linux, web',
            'Prix et licence': 'Gratuit, AGPL 3.0',
            Rôle: 'Second cerveau IA sur vos documents',
            'Différence clé': 'Travaille sur les notes et fichiers que vous fournissez, pas sur l’activité d’écran',
          },
          {
            Application: '[Hyperlink (Nexa AI)](/fr/power-local-llm/hyperlink-nexa-review)',
            Plateformes: 'Mac, Windows',
            'Prix et licence': 'Gratuit, propriétaire',
            Rôle: 'Recherche de fichiers sur l’appareil',
            'Différence clé': 'Cherche dans vos fichiers au lieu d’enregistrer votre journée',
          },
        ],
        note: 'Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Dayflow est adaptée',
        items: [
          '**Utilisateurs de Mac qui facturent ou rapportent leur temps.** La chronologie et l’export Markdown remplacent les notes manuelles.',
          '**Développeurs qui rédigent des points quotidiens.** La vue du jour rédige les faits marquants d’hier, les tâches du jour et les blocages.',
          '**Personnes qui gardent leurs données d’écran privées.** Un modèle local garde l’analyse sur le Mac, selon le README.',
          '**Utilisateurs d’open source.** Le code MIT est public et l’application est gratuite.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui Dayflow n’est pas adaptée',
        items: [
          '**Utilisateurs de Windows et de Linux.** Il n’existe qu’une application Mac ; Windows est annoncé.',
          '**Macs antérieurs à macOS 14.** Le README exige macOS 14 ou plus récent.',
          '**Ceux qui ne veulent pas faire tourner un modèle local.** Sans Ollama ou LM Studio, l’analyse passe par un fournisseur cloud.',
          '**Ceux qui n’ont pas le droit d’enregistrer leur écran.** Les règles d’un employeur ou d’un client peuvent interdire des captures périodiques.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Dayflow fonctionne-t-elle hors ligne ?',
            a: 'Avec un modèle local dans Ollama ou LM Studio, l’analyse n’exige pas de connexion Internet, d’après le README ; les mises à jour, la connexion au compte et les modes cloud, si. PromptQuorum ne l’a pas testée hors ligne.',
          },
          {
            q: 'Dayflow enregistre-t-elle mon écran en continu ?',
            a: 'La politique de confidentialité dit qu’elle capture des écrans à basse fréquence, et la page d’accueil indique que l’enregistreur utilise environ 100 Mo de RAM et moins de 1 % de CPU. Ce sont des chiffres de l’éditeur ; PromptQuorum ne les a pas mesurés.',
          },
          {
            q: 'Puis-je utiliser ChatGPT ou Claude à la place d’un modèle local ?',
            a: 'Oui, via leurs outils en ligne de commande locaux (Codex CLI et Claude Code) ou avec votre propre clé Gemini, OpenAI ou Anthropic. Ces voies utilisent des modèles cloud : les captures arrivent donc chez le fournisseur.',
          },
          {
            q: 'Où sont stockés mes enregistrements ?',
            a: 'Dans le dossier Dayflow d’Application Support sur votre Mac, d’après le README. Les Activity Data ne sont stockées sur les serveurs de l’éditeur que si vous vous abonnez à Pro pour la synchronisation entre appareils.',
          },
          {
            q: 'Existe-t-il une version Windows ?',
            a: 'Pas encore : la page d’accueil indique que Dayflow pour Windows arrive et propose une liste d’attente ; aucune version Windows n’a été trouvée.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Dayflow convient si vous utilisez un Mac, voulez un suivi automatique et open source de votre journée de travail, et êtes prêt à faire tourner Ollama ou LM Studio pour que l’analyse reste sur votre machine. Elle a une licence MIT, une offre gratuite et une version du 10 novembre 2026.',
          'Les réserves tiennent à la portée et à la vérifiabilité : Mac uniquement, une configuration de modèle local à part, des voies cloud qui envoient les captures ailleurs, et des affirmations de confidentialité et de précision que PromptQuorum n’a pas pu vérifier. Essayez la configuration locale gratuite avant d’envisager Pro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Dayflow](https://www.dayflow.so/) — fonctionnalités, prérequis et mention de Windows.',
          '[Page des tarifs](https://www.dayflow.so/pricing/) — offres Free, Pro et Enterprise et FAQ sur le circuit des données.',
          '[Politique de confidentialité](https://www.dayflow.so/privacy/) — modes local, fournisseur personnel et cloud, statistiques et traitement des données.',
          '[Dépôt GitHub](https://github.com/JerryZLiu/Dayflow) — README, licence MIT et code source.',
          '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — Dayflow.dmg et date de sortie de la version 2.9.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Perfect Memory AI](/fr/power-local-llm/perfect-memory-review) — une application de mémoire d’écran et de réunions pour Mac et Windows.',
          '[Test de Khoj](/fr/power-local-llm/khoj-ai-second-brain-review) — un second cerveau IA auto-hébergé sur vos propres documents.',
          '[Test de Hyperlink (Nexa AI)](/fr/power-local-llm/hyperlink-nexa-review) — une recherche IA sur vos fichiers, sur l’appareil.',
          '[Test d’Ollama](/fr/power-local-llm/ollama-review) — l’environnement local que Dayflow peut utiliser pour l’analyse sur l’appareil.',
          '[Test de LM Studio](/fr/power-local-llm/lm-studio-review) — l’alternative de bureau pour faire tourner des modèles locaux.',
          '[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large d’outils d’IA locale, toutes plateformes confondues.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/dayflow-review-hero-ja.webp',
    title: 'Dayflowレビュー：ローカルAI対応のMac向けオープンソース作業日誌',
    seoTitle: 'Dayflowレビュー：ローカルAI対応のMac作業日誌',
    intro: 'Dayflowは、低頻度でスクリーンショットを撮り、仕事の内容を時系列にまとめるMac向けの無料アプリ（MITライセンス）です。日次・週次のまとめと、自分のタイムラインを対象にしたチャットも備えています。このレビューでは、公式サイトとGitHubリポジトリの記載、OllamaやLM Studio経由で自分のMac上で動かせる部分、スクリーンショットがMacの外に出る経路、ディレクトリ内の他のツールとの違いを整理します。',
    metaDescription: 'Dayflowのレビュー。スクリーンショットから作業タイムラインを作るMac向け無料アプリ（MIT）。OllamaやLM Studioでローカル分析も可能。PromptQuorumは実機テストをしていません。',
    twitterDescription: 'Dayflowレビュー：オンデバイスAIを選べるMac向けオープンソース自動作業日誌。価格、データの経路、制限、代替ツールを解説します。',
    audience: '仕事の記録を自動で、しかもオープンソースで残したく、スクリーンショットがどこで分析されるかを気にするMacユーザー向け。価格、インストール、ローカル／クラウドの各モード、プライバシー、制限、代替ツールを扱います。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Dayflow review',
    targetKeywords: [
      'dayflow レビュー',
      'dayflow mac アプリ',
      '自動 作業日誌 mac',
      'オープンソース 時間管理 mac',
      'ローカルai 画面 アクティビティ',
      'ollama lm studio タイムライン',
      'プライバシー 時間管理 アプリ',
    ],
    current_hardware_mentioned: [
      'Mac',
      'macOS 14',
    ],
    leadAnswerBlock: '**Dayflowは、画面を低頻度で記録し、AIで時系列のタイムラインにまとめるMac向けの無料アプリ（MITライセンス）で、分析はOllamaまたはLM Studio経由で自分のMac上だけで実行できます。** クラウド分析は選択肢であり、必須ではありません。最新版は2026年11月10日公開のバージョン2.9.0です。このレビューは公式サイトとGitHubリポジトリの記載に基づいており、実機テストはしていません。',
    quickAnswerTop: {
      ja: {
        question: 'Dayflowはローカルで動くアプリですか？',
        answer: '選択次第で一部がローカルです。録画とデータベースはMacに保存され、READMEによればローカルモデルを選ぶと分析もMac上にとどまります。自分のクラウドAPIキーやDayflow Proを選ぶと、スクリーンショットはそのプロバイダーに送られます。コードは公開されていますが、PromptQuorumはネットワーク通信を検査していないため、プライバシーに関する記載は開発元の主張です。',
        bullets: [
          'Dayflowは低頻度でスクリーンショットを撮り、アクティビティカード、日次スタンドアップの下書き、週次レビュー、タイムラインへのチャットを作ります。',
          '価格：ローカルモデルまたは自分のAPIキーなら無料。マネージドAI付きの任意のProプランは月額$20です。',
          'ローカル分析にはOllamaまたはLM Studioが必要で、自分でインストールして起動します。モデルは同梱されていません。',
          'Mac専用でmacOS 14以降。トップページではWindows版を「近日対応」としています。',
          '設定でオフにしない限り、匿名の利用分析が開発元に送られます。',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Dayflowの入手方法', anchor: 'get-it' },
      { label: 'Dayflowの概要', anchor: 'at-a-glance' },
      { label: 'Dayflowとは', anchor: 'what-is-dayflow' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'ローカルかクラウドか：スクリーンショットの行き先', anchor: 'local-vs-cloud' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'Dayflowと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Dayflowが向いている人', anchor: 'who-should-use' },
      { label: 'Dayflowが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Dayflowは、READMEによれば低頻度のスクリーンショットを作業タイムラインにまとめ、AI分析を自分のMac上だけで実行できる無料のオープンソースMacアプリです。',
          },
          {
            type: 'plain-terms',
            text: '仕事の一日を自動で書き留める日記のようなものです。タイマーを押す代わりに、アプリが時々画面を見て、何をしていたかを記録します。',
          },
        ],
        items: [
          'ローカルに関する記載：キャプチャ、録画、データベースはMacに残ります。分析がローカルになるのは、OllamaまたはLM Studioを接続した場合だけです。',
          'ライセンスと開発元：MIT、コードは公開。プライバシーポリシーによればTeleport Labs Inc.が公開しています。',
          '価格：ローカルモデルまたは自分のキーなら無料。マネージドAIは有料のProプランです。',
          'メンテナンス：バージョン2.9.0は2026年11月10日に公開され、リポジトリも同日に更新されたため、活発に開発されています。',
          '制約：macOS 14以降のみ、モデルは同梱されず、クラウド経路ではスクリーンショットがプロバイダーに送られます。',
        ],
      },
      getItDayflow: {
        id: 'get-it',
        title: 'Dayflowの入手方法',
        content: [
          '**DayflowはふつうのMacアプリと同じようにインストールでき、ターミナルは不要です。** 公式サイトまたはGitHubのリリースページからディスクイメージをダウンロードして開き、DayflowをApplicationsにドラッグして、macOSから求められたら画面収録の権限を許可します。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Mac',
            '入手先': '[Mac版をダウンロード](https://github.com/JerryZLiu/Dayflow/releases/latest) — Dayflow.dmg、macOS 14以降。`brew install --cask dayflow`でも導入可',
          },
          {
            'プラットフォーム': 'リリースノート',
            '入手先': '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — バージョン2.9.0にはリリースノートの記載がありません',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[dayflow.so](https://www.dayflow.so/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Dayflowのプライバシーポリシー](https://www.dayflow.so/privacy/)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[github.com/JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — MITライセンス',
          },
        ],
        note: 'トップページではWindows版を近日対応としていますが、WindowsまたはLinux向けのビルドは見つかりませんでした。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Dayflowの概要',
        columns: ['項目', 'Dayflow'],
        rows: [
          { '項目': 'プラットフォーム', Dayflow: 'macOS 14以降' },
          { '項目': '価格', Dayflow: '無料。Proは有料' },
          { '項目': 'ライセンス', Dayflow: 'MIT、オープンソース' },
          { '項目': '実行場所', Dayflow: 'キャプチャはMac上。分析はローカルまたはクラウド' },
          { '項目': 'ローカルLLMとの連携', Dayflow: 'あり（OllamaまたはLM Studio経由）' },
          { '項目': '音声入出力', Dayflow: '記載なし' },
          { '項目': '永続的なメモリ', Dayflow: 'タイムラインのデータベースをMacに保存' },
          { '項目': 'ツール利用・アクション', Dayflow: '記載なし' },
        ],
        note: '項目は、Local LLM Software Directoryで使われているパーソナルアシスタントの比較に沿っています。サイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsDayflow: {
        id: 'what-is-dayflow',
        title: 'Dayflowとは',
        content: [
          '**Dayflowは自動の作業日誌であり、手動タイマーではありません。** 低頻度でスクリーンショットを撮り、AIモデルに作業内容を説明させ、結果をタイムライン上のアクティビティカードにまとめます。そのためCursorやChromeで過ごした時間も、アプリ名だけでなく、デバッグや調査といった内容で表示されます。',
          'トップページは運営会社としてTeleport Labs Inc.を挙げており、GitHubリポジトリはJerryZLiu/Dayflowです。料金ページにはSSOとデータ保持管理を備えたEnterpriseプランもありますが、このレビューが扱うのはMacアプリだけです。',
          'このレビューは公式サイト、プライバシーポリシー、GitHubリポジトリに基づいています。実機テストは行っていないため、要約の品質、バッテリー消費、安定性は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、権限の許可、AIの選択の3つです。** 手順はREADMEに沿っています。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '[GitHubのリリースページ](https://github.com/JerryZLiu/Dayflow/releases/latest)からDayflow.dmgをダウンロードしてApplicationsにドラッグするか、`brew install --cask dayflow`を実行します。',
          },
          {
            title: '権限を許可する',
            whyItMatters: 'macOSから求められたら「画面とシステムオーディオの収録」を許可します。許可しないとDayflowは何もキャプチャできません。',
          },
          {
            title: '分析方法を選ぶ',
            whyItMatters: 'OllamaまたはLM Studioのローカルモデル、自分のGeminiキー、またはローカルCLIツール経由のChatGPT／Claudeから選びます。マネージドな選択肢がProです。',
          },
          {
            title: '動かしてから見直す',
            whyItMatters: 'いつも通り作業し、あとでタイムライン、日次ビュー、週次レビューを開きます。期間を指定してMarkdownにエクスポートすることもできます。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心はタイムラインです。** 以下はすべてREADMEと公式サイトの記載です。',
        ],
        items: [
          '**自動タイムライン。** 画面の断片が、エディタやブラウザで何をしたかといった文脈つきのアクティビティカードになります。',
          '**日次スタンドアップ。** アクティビティグリッドに加え、昨日のハイライト、今日の優先事項、ブロッカーを表示します。',
          '**週次レビュー。** 1週間の集中パターン、カテゴリ、アプリ使用状況を、脱線の記録とあわせて表示します。',
          '**日誌とのチャット。** 自分のタイムラインを根拠に、自然言語の質問へ回答します。',
          '**エクスポートと自動削除。** 任意の期間をMarkdownで書き出せ、保存容量の上限に合わせて古い録画を自動で削除します。',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'ローカルかクラウドか：スクリーンショットの行き先',
        content: [
          '**Dayflowの分析経路は3つあり、スクリーンショットがMacにとどまるのは最初の1つだけです。** プライバシーポリシーは、スクリーンショットが端末の外に出ないローカル処理、設定したプロバイダーに直接送られる「自分のAIプロバイダー」、開発元のサーバーで処理後に削除されるPro向けのDayflowクラウドを挙げています。最初の2つは「デフォルト」と表示され、単一のデフォルトは示されていません。',
          'ローカル処理は別途インストールするOllamaまたはLM Studioで動きます。READMEにはローカルのコマンドラインツール経由のChatGPTとClaudeも挙げられていますが、これらはベンダーのクラウドモデルを呼び出すため、この経路はオンデバイス推論ではありません。READMEと料金ページによれば、どのモードでも録画とデータベースはMac上にあります。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**プライバシーポリシーによれば、Dayflowはデータを販売せず、スクリーンショットを保存せず、AIプロバイダーによるデータでの学習も認めていません。** 匿名の利用分析（アプリ起動、機能の利用、クラッシュレポート）は設定でオフにでき、購読者にはアカウントの基本情報が保持されます。会社は米国にあります。コードは公開されていますが、PromptQuorumはネットワーク通信を調べていないため、これらは開発元の主張です。',
          'ライセンスはMITです。無料プランにはキャプチャ、要約、自分のプロバイダーキーまたはローカルモデルが含まれ、ProはマネージドAIで月額$20、年額オファーはアプリ内に表示され、Enterpriseは要問い合わせです。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: ['メリット', '実際の使い勝手', '制限・注意点'],
        rows: [
          {
            'メリット': '自分のMac上での分析',
            '実際の使い勝手': 'READMEによると、OllamaまたはLM Studioを使えば、スクリーンショットはMacにとどまります。',
            '制限・注意点': 'モデルは自分で導入して起動します。トップページによれば、ローカル推論はGPUとバッテリーへの負荷が高めです。',
          },
          {
            'メリット': '無料でオープンソース',
            '実際の使い勝手': 'MITライセンスのコードで、自分のキーまたはローカルモデルなら無料です。',
            '制限・注意点': 'マネージドAIには有料のProプランが必要です。',
          },
          {
            'メリット': '自動タイムライン',
            '実際の使い勝手': 'タイマーも手動メモも不要で、要約が作業内容を説明します。',
            '制限・注意点': '要約の品質は選ぶモデル次第で、PromptQuorumは測定していません。',
          },
          {
            'メリット': '柔軟なAI選択',
            '実際の使い勝手': 'ローカル、自分のキー、Proをあとから切り替えられます。',
            '制限・注意点': 'クラウド経路ではスクリーンショットがプロバイダーに送られます。',
          },
          {
            'メリット': '活発な開発',
            '実際の使い勝手': 'バージョン2.9.0が2026年11月10日に公開されました。',
            '制限・注意点': 'Mac専用でmacOS 14以降。Windowsは発表のみです。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Dayflowと代替ツールの比較',
        content: [
          'ディレクトリ内で近いツールは、別の画面記憶アプリ、セルフホスト型のセカンドブレイン、オンデバイスのファイル検索です。',
        ],
        columns: ['アプリ', '対応', '価格とライセンス', '役割', '主な違い'],
        rows: [
          {
            'アプリ': 'Dayflow',
            '対応': 'Mac',
            '価格とライセンス': '無料、Proは有料、MIT',
            '役割': '自動作業日誌',
            '主な違い': 'オープンソース。OllamaやLM Studioでローカルモデルを利用',
          },
          {
            'アプリ': '[Perfect Memory AI](/ja/power-local-llm/perfect-memory-review)',
            '対応': 'Mac、Windows',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            '役割': '検索できる画面・会議の記憶',
            '主な違い': '内蔵AIは、プライバシーポリシーによれば、ローカルAIを接続しない限り開発元のサーバー経由',
          },
          {
            'アプリ': '[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)',
            '対応': 'Mac、Windows、Linux、Web',
            '価格とライセンス': '無料、AGPL 3.0',
            '役割': '手持ちの文書を対象にしたAIセカンドブレイン',
            '主な違い': '自分で渡したメモやファイルが対象で、画面の操作履歴は対象外',
          },
          {
            'アプリ': '[Hyperlink (Nexa AI)](/ja/power-local-llm/hyperlink-nexa-review)',
            '対応': 'Mac、Windows',
            '価格とライセンス': '無料、プロプライエタリ',
            '役割': 'オンデバイスのファイル検索',
            '主な違い': '一日を記録せず、手元のファイルを検索する',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Dayflowが向いている人',
        items: [
          '**作業時間を請求・報告するMacユーザー。** タイムラインとMarkdownエクスポートが手動メモの代わりになります。',
          '**スタンドアップを書く開発者。** 日次ビューが昨日のハイライト、今日のタスク、ブロッカーを下書きします。',
          '**画面データを外に出したくない人。** READMEによれば、ローカルモデルなら分析はMac上にとどまります。',
          '**オープンソースを好む人。** MITライセンスのコードが公開されており、アプリは無料です。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Dayflowが向いていない人',
        items: [
          '**WindowsやLinuxのユーザー。** あるのはMacアプリだけで、Windowsは発表段階です。',
          '**macOS 14より古いMac。** READMEはmacOS 14以降を求めています。',
          '**ローカルモデルを動かしたくない人。** OllamaやLM Studioがなければ、分析はクラウドプロバイダーを使います。',
          '**画面を記録できない人。** 勤務先や顧客の規則で、定期的なスクリーンショットが禁じられている場合があります。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Dayflowはオフラインで動きますか？',
            a: 'READMEによれば、OllamaまたはLM Studioのローカルモデルを使うと分析にインターネット接続は不要です。アップデート、アカウントのサインイン、クラウドモードには必要です。PromptQuorumはオフラインでは試していません。',
          },
          {
            q: 'Dayflowは画面を常時録画しますか？',
            a: 'プライバシーポリシーによれば低頻度でスクリーンショットを撮り、トップページでは記録処理が約100MBのRAMとCPU 1%未満としています。これらは開発元の数値で、PromptQuorumは測定していません。',
          },
          {
            q: 'ローカルモデルの代わりにChatGPTやClaudeを使えますか？',
            a: 'はい。ローカルのコマンドラインツール（Codex CLIとClaude Code）経由か、自分のGemini・OpenAI・Anthropicのキーで使えます。これらの経路はクラウドモデルを使うため、スクリーンショットはプロバイダーに届きます。',
          },
          {
            q: '録画はどこに保存されますか？',
            a: 'READMEによれば、MacのApplication Support内のDayflowフォルダです。Activity Dataが開発元のサーバーに保存されるのは、デバイス間同期のためにProを契約した場合だけです。',
          },
          {
            q: 'Windows版はありますか？',
            a: 'まだありません。トップページはWindows版が近日登場すると述べてウェイトリストを案内していますが、Windows向けのビルドは見つかりませんでした。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'Macを使っていて、仕事の一日を自動かつオープンソースで記録したく、分析を手元にとどめるためにOllamaやLM Studioを動かす用意があるなら、Dayflowは向いています。MITライセンス、無料プラン、2026年11月10日のリリースがあります。',
          '注意点は、対象範囲と検証のしにくさです。Mac専用であること、ローカルモデルを別途用意する必要があること、クラウド経路ではスクリーンショットが外部に送られること、そしてPromptQuorumが確認できなかったプライバシーと精度に関する記載です。Proを検討する前に、無料のローカル構成を試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Dayflow公式サイト](https://www.dayflow.so/) — 機能、動作要件、Windows版の告知。',
          '[料金ページ](https://www.dayflow.so/pricing/) — Free、Pro、Enterpriseの各プランとデータ経路に関するFAQ。',
          '[プライバシーポリシー](https://www.dayflow.so/privacy/) — ローカル、自分のプロバイダー、クラウドの各モード、利用分析、データの扱い。',
          '[GitHubリポジトリ](https://github.com/JerryZLiu/Dayflow) — README、MITライセンス、ソースコード。',
          '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — Dayflow.dmgとバージョン2.9.0の公開日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Perfect Memory AIレビュー](/ja/power-local-llm/perfect-memory-review) — MacとWindows向けの画面・会議の記憶アプリ。',
          '[Khojレビュー](/ja/power-local-llm/khoj-ai-second-brain-review) — 自分の文書を対象にしたセルフホスト型のAIセカンドブレイン。',
          '[Hyperlink (Nexa AI)レビュー](/ja/power-local-llm/hyperlink-nexa-review) — ファイルを対象にしたオンデバイスのAI検索。',
          '[Ollamaレビュー](/ja/power-local-llm/ollama-review) — Dayflowがオンデバイス分析に使えるローカルランタイム。',
          '[LM Studioレビュー](/ja/power-local-llm/lm-studio-review) — ローカルモデルを動かすデスクトップ版の選択肢。',
          '[Local LLM Software Directory 完全版](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/dayflow-review-hero-zh.webp',
    title: 'Dayflow评测：支持本地AI的Mac开源工作日志',
    seoTitle: 'Dayflow评测：支持本地AI的Mac开源自动工作日志',
    intro: 'Dayflow是一款免费的Mac应用（MIT许可证），它以较低频率截取屏幕，并把截图整理成你的工作时间线，还提供每日和每周总结，以及针对你自己时间线的聊天。本评测整理了官网和GitHub仓库的说明：哪些部分可以通过Ollama或LM Studio在你自己的Mac上运行，截图会在哪些情况下离开这台电脑，以及Dayflow与目录中其他工具相比如何。',
    metaDescription: 'Dayflow评测：免费的Mac工作日志应用（MIT许可证），把截图整理成时间线，可通过Ollama或LM Studio在本地分析。PromptQuorum未做实测。',
    twitterDescription: 'Dayflow评测：可选设备端AI的Mac开源自动工作日志。价格、数据路径、局限与替代方案。',
    audience: '想要自动、开源地记录工作日，并关心截图在哪里被分析的Mac用户——涵盖价格、安装、本地与云端模式、隐私、局限和替代方案。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Dayflow review',
    targetKeywords: [
      'dayflow评测',
      'dayflow mac应用',
      '自动工作日志 mac',
      '开源时间追踪 mac',
      '本地ai 屏幕活动',
      'ollama lm studio 时间线',
      '隐私 时间追踪 应用',
    ],
    current_hardware_mentioned: [
      'Mac',
      'macOS 14',
    ],
    leadAnswerBlock: '**Dayflow是一款免费的Mac应用（MIT许可证），以较低频率记录屏幕并用AI整理成时间线，分析可以通过Ollama或LM Studio完全在你自己的Mac上运行。** 云端分析是可选项，并非必需。最新版本是2026年11月10日发布的2.9.0。本评测依据官网和GitHub仓库的说明，没有做实际测试。',
    quickAnswerTop: {
      zh: {
        question: 'Dayflow是本地应用吗？',
        answer: '部分如此，取决于你的选择：录制内容和数据库保存在Mac上，README称选择本地模型时分析会留在你的电脑上。如果选择自己的云端密钥或Dayflow Pro，截图会发送给相应的服务商。代码是开源的，但PromptQuorum没有检查网络流量，因此隐私方面的说法仍属开发者自述。',
        bullets: [
          'Dayflow以较低频率截取屏幕，生成活动卡片、每日站会草稿、每周回顾，以及针对你时间线的聊天。',
          '价格：使用本地模型或你自己的API密钥时免费；带托管AI的可选Pro套餐为每月$20。',
          '本地分析需要Ollama或LM Studio，由你自行安装和运行；应用不附带模型。',
          '仅支持Mac，需要macOS 14或更高版本；官网首页称Windows版即将推出。',
          '除非在设置中关闭，否则会向开发者发送匿名使用数据。',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '获取Dayflow', anchor: 'get-it' },
      { label: 'Dayflow概览', anchor: 'at-a-glance' },
      { label: 'Dayflow是什么', anchor: 'what-is-dayflow' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '本地还是云端：截图去哪了', anchor: 'local-vs-cloud' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'Dayflow与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用Dayflow的人', anchor: 'who-should-use' },
      { label: '不适合使用Dayflow的人', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Dayflow是一款免费的开源Mac应用，根据其README，它把低频率截图整理成工作时间线，并可让AI分析完全在你自己的Mac上运行。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成自动记录工作日的日记：你不用启动计时器，应用会隔一段时间看一眼屏幕，记下你当时在做什么。',
          },
        ],
        items: [
          '本地说法：截取、录制内容和数据库保留在Mac上；只有连接Ollama或LM Studio时，分析才是本地的。',
          '许可与开发方：MIT许可证，代码公开；隐私政策显示发布方为Teleport Labs Inc.。',
          '价格：使用本地模型或自己的密钥时免费；托管AI是付费的Pro套餐。',
          '维护情况：2.9.0版于2026年11月10日发布，仓库当天也有更新，项目仍在积极开发。',
          '缺口：仅限macOS 14或更高版本，不附带模型，云端路径会把截图发送给服务商。',
        ],
      },
      getItDayflow: {
        id: 'get-it',
        title: '获取Dayflow',
        content: [
          '**Dayflow的安装方式和普通Mac应用一样，不需要终端。** 从官网或GitHub发布页下载磁盘映像，打开后把Dayflow拖进“应用程序”，macOS询问时授予屏幕录制权限即可。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Mac',
            '获取方式': '[下载Mac版](https://github.com/JerryZLiu/Dayflow/releases/latest) — Dayflow.dmg，需要macOS 14或更高版本；也可用`brew install --cask dayflow`',
          },
          {
            '平台': '发布说明',
            '获取方式': '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — 2.9.0版没有书面发布说明',
          },
          {
            '平台': '官网',
            '获取方式': '[dayflow.so](https://www.dayflow.so/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[Dayflow隐私政策](https://www.dayflow.so/privacy/)',
          },
          {
            '平台': '源代码',
            '获取方式': '[github.com/JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — MIT许可证',
          },
        ],
        note: '官网首页称Windows版即将推出；未找到Windows或Linux版本。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Dayflow概览',
        columns: ['属性', 'Dayflow'],
        rows: [
          { '属性': '平台', Dayflow: 'macOS 14或更高版本' },
          { '属性': '价格', Dayflow: '免费；Pro套餐付费' },
          { '属性': '许可', Dayflow: 'MIT，开源' },
          { '属性': '运行方式', Dayflow: '在Mac上截取；分析可本地或云端' },
          { '属性': '支持本地LLM', Dayflow: '支持，通过Ollama或LM Studio' },
          { '属性': '语音输入/输出', Dayflow: '未说明' },
          { '属性': '持久记忆', Dayflow: '时间线数据库保存在你的Mac上' },
          { '属性': '工具调用/操作', Dayflow: '未说明' },
        ],
        note: '各属性沿用Local LLM Software Directory中个人助手对比所用的项目。官网未提及，表示未知，而不是不支持。',
      },
      whatIsDayflow: {
        id: 'what-is-dayflow',
        title: 'Dayflow是什么',
        content: [
          '**Dayflow是自动工作日志，而不是手动计时器。** 它以较低频率截取屏幕，让AI模型描述你在做什么，再把结果归并成时间线上的活动卡片；这样在Cursor或Chrome里度过的一段时间，会显示为调试或调研，而不只是应用名称。',
          '官网首页列出的公司是Teleport Labs Inc.，GitHub仓库为JerryZLiu/Dayflow。价格页还列出带SSO和数据保留控制的Enterprise套餐；本评测只涉及Mac应用。',
          '本评测依据官网、隐私政策和GitHub仓库，没有做实际测试，因此这里不评价摘要质量、耗电和稳定性。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置包括安装、授权和选择AI三步。** 步骤依据README。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从[GitHub发布页](https://github.com/JerryZLiu/Dayflow/releases/latest)下载Dayflow.dmg并拖入“应用程序”，或运行`brew install --cask dayflow`。',
          },
          {
            title: '授予权限',
            whyItMatters: 'macOS询问时允许“屏幕与系统音频录制”；没有该权限，Dayflow无法截取任何内容。',
          },
          {
            title: '选择分析方式',
            whyItMatters: '可选择通过Ollama或LM Studio使用本地模型、自己的Gemini密钥，或通过本地命令行工具使用ChatGPT或Claude；Pro是托管方案。',
          },
          {
            title: '让它运行，之后再回顾',
            whyItMatters: '照常工作；之后打开时间线、每日视图或每周回顾，也可以把任意日期范围导出为Markdown。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能围绕时间线展开。** 以下内容均来自README和官网。',
        ],
        items: [
          '**自动时间线。** 屏幕片段变成带上下文的活动卡片，例如你在编辑器或浏览器里做了什么。',
          '**每日站会。** 活动网格，加上昨天的亮点、今天的重点和阻碍事项。',
          '**每周回顾。** 一周内的专注模式、类别和应用使用情况，并记录分心时段。',
          '**与日志聊天。** 用自然语言提问，答案取自你自己的时间线。',
          '**导出与清理。** 可把任意日期范围导出为Markdown，并按存储上限自动清除旧录制内容。',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '本地还是云端：截图去哪了',
        content: [
          '**Dayflow有三条分析路径，只有第一条能让截图留在Mac上。** 隐私政策列出了：本地处理，截图不会离开设备；“自带AI服务商”，截图直接发送给你配置的服务商；以及Pro使用的Dayflow云端，截图在开发方服务器上处理后删除。前两种都标为“默认”，没有指明唯一的默认项。',
          '本地处理通过单独安装的Ollama或LM Studio运行。README还列出了通过本地命令行工具使用ChatGPT和Claude；这些工具会调用厂商的云端模型，所以这条路径不属于设备端推理。根据README和价格页，无论哪种模式，录制内容和数据库都在Mac上。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**隐私政策称，Dayflow不出售你的数据，不保存你的截图，也不允许其AI服务商用你的数据训练模型。** 匿名使用数据（应用启动、功能使用、崩溃报告）可在设置中关闭，订阅用户的基本账户信息会被保留。公司位于美国。代码是公开的，但PromptQuorum没有检查网络流量，所以这些说法属开发者自述。',
          '许可证为MIT。免费套餐包含截取、摘要，以及你自己的服务商密钥或本地模型；Pro托管AI每月$20，应用内会显示年付优惠，Enterprise按需报价。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': '在你自己的Mac上分析',
            '实际使用中的意义': '据README称，使用Ollama或LM Studio时，截图留在本机。',
            '局限 / 注意事项': '模型需要你自己安装和运行；官网称本地推理对GPU和电池要求较高。',
          },
          {
            '优势': '免费且开源',
            '实际使用中的意义': 'MIT代码；用自己的密钥或本地模型即可免费使用。',
            '局限 / 注意事项': '托管AI需要付费的Pro套餐。',
          },
          {
            '优势': '自动时间线',
            '实际使用中的意义': '不用计时器或手动记录；摘要会描述你做了什么。',
            '局限 / 注意事项': '摘要质量取决于所选模型；PromptQuorum未做测量。',
          },
          {
            '优势': '灵活选择AI',
            '实际使用中的意义': '之后可在本地、自己的密钥和Pro之间切换。',
            '局限 / 注意事项': '云端路径会把截图发送给服务商。',
          },
          {
            '优势': '积极开发',
            '实际使用中的意义': '2.9.0版于2026年11月10日发布。',
            '局限 / 注意事项': '仅支持Mac，需要macOS 14或更高版本；Windows版仅为预告。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Dayflow与替代方案对比',
        content: [
          '目录中最接近的工具有：另一款屏幕记忆应用、自托管的第二大脑，以及设备端的文件搜索。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'Dayflow',
            '平台': 'Mac',
            '价格与许可': '免费，Pro付费，MIT',
            '定位': '自动工作日志',
            '主要区别': '开源；可通过Ollama或LM Studio使用本地模型',
          },
          {
            '应用': '[Perfect Memory AI](/zh/power-local-llm/perfect-memory-review)',
            '平台': 'Mac、Windows',
            '价格与许可': '免费增值，闭源',
            '定位': '可搜索的屏幕与会议记忆',
            '主要区别': '据其隐私政策，内置AI经由开发方服务器，除非连接本地AI',
          },
          {
            '应用': '[Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)',
            '平台': 'Mac、Windows、Linux、网页',
            '价格与许可': '免费，AGPL 3.0',
            '定位': '面向你文档的AI第二大脑',
            '主要区别': '处理你提供的笔记和文件，而非屏幕活动',
          },
          {
            '应用': '[Hyperlink (Nexa AI)](/zh/power-local-llm/hyperlink-nexa-review)',
            '平台': 'Mac、Windows',
            '价格与许可': '免费，专有',
            '定位': '设备端文件搜索',
            '主要区别': '搜索你的文件，而不是记录你的一天',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Dayflow的人',
        items: [
          '**需要计费或汇报工时的Mac用户。** 时间线和Markdown导出可以代替手动记录。',
          '**要写站会汇报的开发者。** 每日视图会起草昨天的亮点、今天的任务和阻碍事项。',
          '**希望屏幕数据保持私密的人。** 根据README，本地模型能让分析留在Mac上。',
          '**开源用户。** MIT代码公开，应用免费。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Dayflow的人',
        items: [
          '**Windows和Linux用户。** 目前只有Mac应用；Windows版仅为预告。',
          '**macOS版本低于14的Mac。** README要求macOS 14或更高版本。',
          '**不愿运行本地模型的人。** 没有Ollama或LM Studio时，分析会使用云端服务商。',
          '**不能录制屏幕的人。** 雇主或客户的规定可能禁止定期截屏。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Dayflow可以离线使用吗？',
            a: '根据README，使用Ollama或LM Studio中的本地模型时，分析不需要联网；更新、账户登录和云端模式则需要。PromptQuorum没有在离线状态下测试。',
          },
          {
            q: 'Dayflow会持续录制我的屏幕吗？',
            a: '隐私政策称它以较低频率截取屏幕，官网称录制进程约占100 MB内存、CPU占用低于1%。这些是开发者给出的数字，PromptQuorum没有测量。',
          },
          {
            q: '可以用ChatGPT或Claude代替本地模型吗？',
            a: '可以，通过它们的本地命令行工具（Codex CLI和Claude Code），或使用你自己的Gemini、OpenAI或Anthropic密钥。这些路径使用云端模型，所以截图会到达服务商。',
          },
          {
            q: '我的录制内容存放在哪里？',
            a: '根据README，存放在Mac上Application Support里的Dayflow文件夹。只有为跨设备同步订阅Pro时，Activity Data才会存放在开发方的服务器上。',
          },
          {
            q: '有Windows版吗？',
            a: '还没有：官网首页称Windows版即将推出并提供候补名单，但没有找到Windows版本。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你用Mac，想要自动且开源的工作日记录，并愿意运行Ollama或LM Studio让分析留在本机，Dayflow就很合适。它有MIT许可证、免费套餐，以及2026年11月10日发布的版本。',
          '需要留意的是适用范围和可验证性：仅限Mac，需要另行配置本地模型，云端路径会把截图发送出去，以及PromptQuorum无法核实的隐私和准确性说法。考虑Pro之前，先试试免费的本地方案。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Dayflow官网](https://www.dayflow.so/) — 功能、系统要求和Windows版预告。',
          '[价格页](https://www.dayflow.so/pricing/) — Free、Pro和Enterprise套餐以及数据路径常见问题。',
          '[隐私政策](https://www.dayflow.so/privacy/) — 本地、自带服务商和云端模式、使用数据与数据处理。',
          '[GitHub仓库](https://github.com/JerryZLiu/Dayflow) — README、MIT许可证和源代码。',
          '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — Dayflow.dmg和2.9.0版的发布日期。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Perfect Memory AI评测](/zh/power-local-llm/perfect-memory-review) — 适用于Mac和Windows的屏幕与会议记忆应用。',
          '[Khoj评测](/zh/power-local-llm/khoj-ai-second-brain-review) — 基于你自己文档的自托管AI第二大脑。',
          '[Hyperlink (Nexa AI)评测](/zh/power-local-llm/hyperlink-nexa-review) — 面向你文件的设备端AI搜索。',
          '[Ollama评测](/zh/power-local-llm/ollama-review) — Dayflow可用于设备端分析的本地运行环境。',
          '[LM Studio评测](/zh/power-local-llm/lm-studio-review) — 运行本地模型的桌面端替代方案。',
          '[Local LLM Software Directory完整版](/zh/directory) — 涵盖多个平台的本地AI工具目录。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/dayflow-review-hero-es.webp',
    title: 'Reseña de Dayflow: diario de trabajo de código abierto para Mac con IA local',
    seoTitle: 'Reseña de Dayflow: diario de trabajo para Mac con IA local',
    intro: 'Dayflow es una app gratuita para Mac con licencia MIT que toma capturas de pantalla poco frecuentes y las convierte en una cronología de tu trabajo, con resúmenes diarios y semanales y un chat sobre tu propia cronología. Esta reseña recoge lo que dicen el sitio web y el repositorio de GitHub, qué partes pueden ejecutarse en tu propio Mac con Ollama o LM Studio, dónde salen las capturas del equipo y cómo se compara Dayflow con otras herramientas del directorio.',
    metaDescription: 'Reseña de Dayflow: diario de trabajo gratuito para Mac (MIT) que convierte capturas en cronología y analiza en local con Ollama o LM Studio. Sin probar.',
    twitterDescription: 'Reseña de Dayflow: diario de trabajo automático de código abierto para Mac con opción de IA en el dispositivo. Precio, rutas de datos, límites y alternativas.',
    audience: 'Usuarios de Mac que quieren un registro automático y de código abierto de su jornada y que se preocupan por dónde se analizan sus capturas — cubre precio, instalación, modos local y en la nube, privacidad, límites y alternativas.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Dayflow review',
    targetKeywords: [
      'reseña dayflow',
      'dayflow app mac',
      'diario de trabajo automático mac',
      'control de tiempo código abierto mac',
      'ia local actividad de pantalla',
      'ollama lm studio cronología',
      'app privada de control de tiempo',
    ],
    current_hardware_mentioned: [
      'Mac',
      'macOS 14',
    ],
    leadAnswerBlock: '**Dayflow es una app gratuita para Mac con licencia MIT que graba tu pantalla con poca frecuencia y usa IA para convertirla en una cronología; el análisis puede ejecutarse por completo en tu propio Mac con Ollama o LM Studio.** El análisis en la nube es una opción, no un requisito. La versión más reciente es la 2.9.0, del 10 de noviembre de 2026. Esta reseña se basa en el sitio web y el repositorio de GitHub del fabricante, no en pruebas prácticas.',
    quickAnswerTop: {
      es: {
        question: '¿Es Dayflow una app local?',
        answer: 'En parte, según lo que elijas: las grabaciones y la base de datos se guardan en el Mac, y el README dice que el análisis se queda en tu equipo si eliges modelos locales. Si eliges tu propia clave de la nube o Dayflow Pro, las capturas van a ese proveedor. El código es abierto, pero PromptQuorum no inspeccionó el tráfico de red, así que las afirmaciones de privacidad siguen siendo las del fabricante.',
        bullets: [
          'Dayflow captura pantallas con poca frecuencia y crea tarjetas de actividad, un borrador del standup diario, un repaso semanal y un chat sobre tu cronología.',
          'Precio: la app es gratuita con un modelo local o tu propia clave de API; el plan Pro opcional con IA gestionada cuesta $20 al mes.',
          'El análisis local requiere Ollama o LM Studio, que instalas y ejecutas tú; no incluye ningún modelo.',
          'Solo Mac con macOS 14 o posterior; la página de inicio anuncia una versión para Windows como próxima.',
          'Se envían analíticas anónimas al fabricante salvo que las desactives en los ajustes.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Dayflow', anchor: 'get-it' },
      { label: 'Dayflow de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Dayflow', anchor: 'what-is-dayflow' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Local o nube: adónde van las capturas', anchor: 'local-vs-cloud' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Dayflow frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Dayflow', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Dayflow', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Dayflow es una app gratuita de código abierto para Mac que, según su README, convierte capturas de pantalla poco frecuentes en una cronología de trabajo y puede ejecutar el análisis de IA por completo en tu propio Mac.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un diario automático de tu jornada: en lugar de iniciar temporizadores, dejas que la app mire tu pantalla de vez en cuando y anote lo que estabas haciendo.',
          },
        ],
        items: [
          'Afirmación local: la captura, las grabaciones y la base de datos se quedan en el Mac; el análisis solo es local si conectas Ollama o LM Studio.',
          'Licencia y fabricante: MIT, código abierto, publicado por Teleport Labs Inc. según la política de privacidad.',
          'Precio: gratis con un modelo local o tu propia clave; la IA gestionada es el plan de pago Pro.',
          'Mantenimiento: la versión 2.9.0 salió el 10 de noviembre de 2026 y el repositorio se actualizó ese mismo día, así que el proyecto se desarrolla activamente.',
          'Carencias: solo macOS 14 o posterior, ningún modelo incluido, y las rutas en la nube envían las capturas a un proveedor.',
        ],
      },
      getItDayflow: {
        id: 'get-it',
        title: 'Conseguir Dayflow',
        content: [
          '**Dayflow se instala como cualquier app de Mac, sin necesidad de terminal.** Descarga la imagen de disco desde el sitio oficial o la página de versiones de GitHub, ábrela, arrastra Dayflow a Aplicaciones y concede el permiso de grabación de pantalla cuando macOS lo pida.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': '[Descargar para Mac](https://github.com/JerryZLiu/Dayflow/releases/latest) — Dayflow.dmg, macOS 14 o posterior; también `brew install --cask dayflow`',
          },
          {
            Plataforma: 'Notas de versión',
            'Dónde conseguirla': '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — la versión 2.9.0 no tiene notas escritas',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[dayflow.so](https://www.dayflow.so/)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de Dayflow](https://www.dayflow.so/privacy/)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': '[github.com/JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — licencia MIT',
          },
        ],
        note: 'La página de inicio anuncia una versión para Windows como próxima; no se encontró ninguna compilación para Windows ni Linux.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Dayflow de un vistazo',
        columns: ['Atributo', 'Dayflow'],
        rows: [
          { Atributo: 'Plataforma', Dayflow: 'macOS 14 o posterior' },
          { Atributo: 'Precio', Dayflow: 'Gratis; plan Pro de pago' },
          { Atributo: 'Licencia', Dayflow: 'MIT, código abierto' },
          { Atributo: 'Ejecución', Dayflow: 'Captura en el Mac; análisis local o en la nube' },
          { Atributo: 'Funciona con LLM locales', Dayflow: 'Sí, con Ollama o LM Studio' },
          { Atributo: 'Entrada / salida de voz', Dayflow: 'No indicado' },
          { Atributo: 'Memoria persistente', Dayflow: 'Base de datos de la cronología en tu Mac' },
          { Atributo: 'Uso de herramientas / acciones', Dayflow: 'No indicado' },
        ],
        note: 'Los atributos siguen la comparación de asistentes personales del Local LLM Software Directory. Que la web no mencione algo significa desconocido, no no compatible.',
      },
      whatIsDayflow: {
        id: 'what-is-dayflow',
        title: 'Qué es Dayflow',
        content: [
          '**Dayflow es un diario de trabajo automático, no un cronómetro manual.** Toma capturas de pantalla con poca frecuencia, hace que un modelo de IA describa lo que hacías y agrupa el resultado en tarjetas de actividad sobre una cronología; así, un bloque en Cursor o Chrome aparece como depuración o investigación en lugar de solo el nombre de una app.',
          'La página de inicio nombra a Teleport Labs Inc. como la empresa y el repositorio de GitHub es JerryZLiu/Dayflow. La página de precios también incluye un plan Enterprise con SSO y control de retención de datos; esta reseña cubre solo la app para Mac.',
          'Esta reseña se basa en el sitio web, la política de privacidad y el repositorio de GitHub. No hubo pruebas prácticas, así que aquí no se valoran la calidad de los resúmenes, el consumo de batería ni la estabilidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La configuración consiste en instalar, conceder un permiso y elegir la IA.** Los pasos siguen el README.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga Dayflow.dmg desde la [página de versiones de GitHub](https://github.com/JerryZLiu/Dayflow/releases/latest) y arrástrala a Aplicaciones, o ejecuta `brew install --cask dayflow`.',
          },
          {
            title: 'Concede el permiso',
            whyItMatters: 'Permite «Grabación de pantalla y audio del sistema» en macOS cuando lo solicite; sin él, Dayflow no puede capturar nada.',
          },
          {
            title: 'Elige cómo se analiza',
            whyItMatters: 'Elige un modelo local con Ollama o LM Studio, tu propia clave de Gemini, o ChatGPT o Claude mediante sus herramientas locales de línea de comandos; Pro es la alternativa gestionada.',
          },
          {
            title: 'Déjala funcionar y revisa',
            whyItMatters: 'Trabaja como siempre; abre después la cronología, la vista diaria o el repaso semanal, o exporta un intervalo de fechas a Markdown.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones gira en torno a la cronología.** Todo lo siguiente procede del README y del sitio web.',
        ],
        items: [
          '**Cronología automática.** Los fragmentos de pantalla se convierten en tarjetas de actividad con contexto, por ejemplo lo que hiciste en un editor o un navegador.',
          '**Standup diario.** Una cuadrícula de actividad más lo destacado de ayer, las prioridades de hoy y los bloqueos.',
          '**Repaso semanal.** Patrones de concentración, categorías y uso de apps a lo largo de la semana, con seguimiento de distracciones.',
          '**Chat con tu diario.** Preguntas en lenguaje natural respondidas a partir de tu propia cronología.',
          '**Exportación y limpieza.** Exportación a Markdown de cualquier intervalo y borrado automático de grabaciones antiguas según un límite de almacenamiento.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Local o nube: adónde van las capturas',
        content: [
          '**Dayflow ofrece tres rutas de análisis, y solo la primera mantiene las capturas en el Mac.** La política de privacidad enumera el procesamiento local, donde las capturas nunca salen del equipo; «tu propio proveedor de IA», donde las capturas van directamente al proveedor que configures; y la nube de Dayflow para Pro, donde se procesan en los servidores del fabricante y se borran después. Marca las dos primeras como «predeterminadas» y no nombra un único valor predeterminado.',
          'El procesamiento local funciona con Ollama o LM Studio, que instalas por separado. El README también menciona ChatGPT y Claude mediante sus herramientas locales de línea de comandos; esas herramientas llaman a los modelos en la nube de los proveedores, así que esta ruta no es inferencia en el dispositivo. Según el README y la página de precios, las grabaciones y la base de datos están en el Mac en todos los modos.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**La política de privacidad dice que Dayflow no vende tus datos, no almacena tus capturas de pantalla y no permite que sus proveedores de IA entrenen con tus datos.** Las analíticas anónimas (aperturas de la app, uso de funciones, informes de fallos) se pueden desactivar en los ajustes, y los datos básicos de la cuenta se conservan para los suscriptores. La empresa tiene su sede en Estados Unidos. El código es abierto y PromptQuorum no examinó el tráfico de red, así que estas afirmaciones son las del fabricante.',
          'La licencia es MIT. El plan gratuito cubre la captura, los resúmenes y tus propias claves de proveedor o un modelo local; Pro cuesta $20 al mes por la IA gestionada, con una oferta anual que se muestra en la app, y Enterprise se presupuesta bajo petición.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Análisis en tu propio Mac',
            'Qué significa en el uso real': 'Según el README, con Ollama o LM Studio las capturas se quedan en el equipo.',
            'Limitación / advertencia': 'Instalas y ejecutas el modelo tú; según la página de inicio, la inferencia local exige mucho a la GPU y la batería.',
          },
          {
            Ventaja: 'Gratis y de código abierto',
            'Qué significa en el uso real': 'Código MIT y plan gratuito con tu clave o un modelo local.',
            'Limitación / advertencia': 'La IA gestionada requiere el plan de pago Pro.',
          },
          {
            Ventaja: 'Cronología automática',
            'Qué significa en el uso real': 'Sin temporizadores ni notas manuales; los resúmenes describen lo que hiciste.',
            'Limitación / advertencia': 'La calidad de los resúmenes depende del modelo que elijas; PromptQuorum no la midió.',
          },
          {
            Ventaja: 'Elección flexible de IA',
            'Qué significa en el uso real': 'Cambia más tarde entre local, tu clave y Pro.',
            'Limitación / advertencia': 'Las rutas en la nube envían las capturas a un proveedor.',
          },
          {
            Ventaja: 'Desarrollo activo',
            'Qué significa en el uso real': 'La versión 2.9.0 salió el 10 de noviembre de 2026.',
            'Limitación / advertencia': 'Solo Mac con macOS 14 o posterior; Windows solo está anunciado.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Dayflow frente a alternativas',
        content: [
          'Estas son las herramientas más cercanas del directorio: otra app de memoria de pantalla, un segundo cerebro autoalojado y una búsqueda de archivos en el dispositivo.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'Dayflow',
            Plataformas: 'Mac',
            'Precio y licencia': 'Gratis, Pro de pago, MIT',
            Papel: 'Diario de trabajo automático',
            'Diferencia clave': 'Código abierto; modelos locales con Ollama o LM Studio',
          },
          {
            App: '[Perfect Memory AI](/es/power-local-llm/perfect-memory-review)',
            Plataformas: 'Mac, Windows',
            'Precio y licencia': 'Freemium, código cerrado',
            Papel: 'Memoria consultable de pantalla y reuniones',
            'Diferencia clave': 'Según su política de privacidad, la IA integrada pasa por el servidor del fabricante salvo que conectes una local',
          },
          {
            App: '[Khoj](/es/power-local-llm/khoj-ai-second-brain-review)',
            Plataformas: 'Mac, Windows, Linux, web',
            'Precio y licencia': 'Gratis, AGPL 3.0',
            Papel: 'Segundo cerebro con IA sobre tus documentos',
            'Diferencia clave': 'Trabaja con notas y archivos que tú aportas, no con la actividad de pantalla',
          },
          {
            App: '[Hyperlink (Nexa AI)](/es/power-local-llm/hyperlink-nexa-review)',
            Plataformas: 'Mac, Windows',
            'Precio y licencia': 'Gratis, propietario',
            Papel: 'Búsqueda de archivos en el dispositivo',
            'Diferencia clave': 'Busca en tus archivos en lugar de grabar tu jornada',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Dayflow',
        items: [
          '**Usuarios de Mac que facturan o reportan su tiempo.** La cronología y la exportación a Markdown sustituyen las notas manuales.',
          '**Desarrolladores que escriben standups.** La vista diaria redacta lo destacado de ayer, las tareas de hoy y los bloqueos.',
          '**Personas que mantienen privados los datos de pantalla.** Un modelo local mantiene el análisis en el Mac, según el README.',
          '**Usuarios de código abierto.** El código MIT es público y la app es gratuita.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Dayflow',
        items: [
          '**Usuarios de Windows y Linux.** Solo existe una app para Mac; Windows está anunciado.',
          '**Macs anteriores a macOS 14.** El README exige macOS 14 o posterior.',
          '**Quien no quiera ejecutar un modelo local.** Sin Ollama o LM Studio, el análisis usa un proveedor en la nube.',
          '**Quien no pueda grabar su pantalla.** Las normas de un empleador o cliente pueden prohibir las capturas periódicas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Dayflow sin conexión?',
            a: 'Con un modelo local en Ollama o LM Studio, el análisis no necesita conexión a internet, según el README; las actualizaciones, el inicio de sesión y los modos en la nube sí. PromptQuorum no lo probó sin conexión.',
          },
          {
            q: '¿Dayflow graba mi pantalla de forma continua?',
            a: 'La política de privacidad dice que captura pantallas con poca frecuencia, y la página de inicio indica que el grabador usa unos 100 MB de RAM y menos del 1 % de CPU. Son cifras del fabricante; PromptQuorum no las midió.',
          },
          {
            q: '¿Puedo usar ChatGPT o Claude en lugar de un modelo local?',
            a: 'Sí, mediante sus herramientas locales de línea de comandos (Codex CLI y Claude Code) o con tu propia clave de Gemini, OpenAI o Anthropic. Estas rutas usan modelos en la nube, así que las capturas llegan al proveedor.',
          },
          {
            q: '¿Dónde se guardan mis grabaciones?',
            a: 'En la carpeta Dayflow dentro de Application Support en tu Mac, según el README. Los Activity Data solo se almacenan en los servidores del fabricante si te suscribes a Pro para sincronizar entre dispositivos.',
          },
          {
            q: '¿Hay una versión para Windows?',
            a: 'Todavía no: la página de inicio dice que Dayflow para Windows llegará y ofrece una lista de espera; no se encontró ninguna compilación para Windows.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Dayflow encaja si usas un Mac, quieres un registro automático y de código abierto de tu jornada y estás dispuesto a ejecutar Ollama o LM Studio para que el análisis se quede en tu equipo. Tiene licencia MIT, un plan gratuito y una versión del 10 de noviembre de 2026.',
          'Las reservas son el alcance y la verificabilidad: solo Mac, una configuración aparte del modelo local, rutas en la nube que envían las capturas fuera y afirmaciones de privacidad y precisión que PromptQuorum no pudo comprobar. Prueba la configuración local gratuita antes de plantearte Pro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Dayflow](https://www.dayflow.so/) — funciones, requisitos y el aviso sobre Windows.',
          '[Página de precios](https://www.dayflow.so/pricing/) — planes Free, Pro y Enterprise y las preguntas sobre la ruta de los datos.',
          '[Política de privacidad](https://www.dayflow.so/privacy/) — modos local, proveedor propio y nube, analíticas y tratamiento de datos.',
          '[Repositorio de GitHub](https://github.com/JerryZLiu/Dayflow) — README, licencia MIT y código fuente.',
          '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — Dayflow.dmg y la fecha de publicación de la versión 2.9.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Perfect Memory AI](/es/power-local-llm/perfect-memory-review) — una app de memoria de pantalla y reuniones para Mac y Windows.',
          '[Reseña de Khoj](/es/power-local-llm/khoj-ai-second-brain-review) — un segundo cerebro con IA autoalojado sobre tus propios documentos.',
          '[Reseña de Hyperlink (Nexa AI)](/es/power-local-llm/hyperlink-nexa-review) — búsqueda con IA en tus archivos, en el dispositivo.',
          '[Reseña de Ollama](/es/power-local-llm/ollama-review) — el entorno local que Dayflow puede usar para el análisis en el dispositivo.',
          '[Reseña de LM Studio](/es/power-local-llm/lm-studio-review) — la alternativa de escritorio para ejecutar modelos locales.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local en distintas plataformas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/dayflow-review-hero-pt.webp',
    title: 'Análise do Dayflow: diário de trabalho de código aberto para Mac com IA local',
    seoTitle: 'Análise do Dayflow: diário de trabalho Mac com IA local',
    intro: 'O Dayflow é um app gratuito para Mac, com licença MIT, que tira capturas de tela pouco frequentes e as transforma em uma linha do tempo do seu trabalho, com resumos diários e semanais e um chat sobre a sua própria linha do tempo. Esta análise reúne o que dizem o site e o repositório do GitHub, quais partes podem rodar no seu próprio Mac com Ollama ou LM Studio, onde as capturas saem da máquina e como o Dayflow se compara a outras ferramentas do diretório.',
    metaDescription: 'Análise do Dayflow: diário de trabalho grátis para Mac (MIT) que transforma capturas em linha do tempo e analisa com Ollama ou LM Studio. Não testado.',
    twitterDescription: 'Análise do Dayflow: diário de trabalho automático de código aberto para Mac com opção de IA no dispositivo. Preço, caminhos dos dados, limites e alternativas.',
    audience: 'Usuários de Mac que querem um registro automático e de código aberto do dia de trabalho e se importam com onde as capturas são analisadas — cobre preço, instalação, modos local e na nuvem, privacidade, limites e alternativas.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Dayflow review',
    targetKeywords: [
      'análise dayflow',
      'dayflow app mac',
      'diário de trabalho automático mac',
      'controle de tempo código aberto mac',
      'ia local atividade de tela',
      'ollama lm studio linha do tempo',
      'app privado de controle de tempo',
    ],
    current_hardware_mentioned: [
      'Mac',
      'macOS 14',
    ],
    leadAnswerBlock: '**O Dayflow é um app gratuito para Mac, com licença MIT, que grava a sua tela com pouca frequência e usa IA para transformá-la em uma linha do tempo; a análise pode rodar inteiramente no seu próprio Mac com Ollama ou LM Studio.** A análise na nuvem é uma escolha, não uma exigência. A versão mais recente é a 2.9.0, de 10 de novembro de 2026. Esta análise se baseia no site e no repositório do GitHub do fabricante, não em testes práticos.',
    quickAnswerTop: {
      pt: {
        question: 'O Dayflow é um app local?',
        answer: 'Em parte, conforme a sua escolha: as gravações e o banco de dados ficam no Mac, e o README diz que a análise fica na sua máquina se você escolher modelos locais. Se escolher a sua própria chave de nuvem ou o Dayflow Pro, as capturas vão para esse provedor. O código é aberto, mas o PromptQuorum não inspecionou o tráfego de rede, então as afirmações de privacidade continuam sendo do fabricante.',
        bullets: [
          'O Dayflow captura telas com pouca frequência e monta cartões de atividade, um rascunho do standup diário, uma revisão semanal e um chat sobre a sua linha do tempo.',
          'Preço: o app é gratuito com um modelo local ou a sua própria chave de API; o plano Pro opcional, com IA gerenciada, custa US$ 20 por mês.',
          'A análise local exige Ollama ou LM Studio, que você instala e executa por conta própria; nenhum modelo vem incluído.',
          'Só Mac, com macOS 14 ou mais recente; a página inicial anuncia uma versão para Windows como futura.',
          'Análises anônimas de uso são enviadas ao fabricante, a menos que você as desative nas configurações.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o Dayflow', anchor: 'get-it' },
      { label: 'Dayflow em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Dayflow', anchor: 'what-is-dayflow' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Local ou nuvem: para onde vão as capturas', anchor: 'local-vs-cloud' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Dayflow e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Dayflow serve', anchor: 'who-should-use' },
      { label: 'Para quem o Dayflow não serve', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Dayflow é um app gratuito e de código aberto para Mac que, segundo o README, transforma capturas de tela pouco frequentes em uma linha do tempo de trabalho e pode executar a análise de IA inteiramente no seu próprio Mac.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um diário automático do seu dia de trabalho: em vez de iniciar cronômetros, você deixa o app olhar a sua tela de vez em quando e anotar o que você estava fazendo.',
          },
        ],
        items: [
          'Afirmação local: a captura, as gravações e o banco de dados ficam no Mac; a análise só é local se você conectar Ollama ou LM Studio.',
          'Licença e fabricante: MIT, código aberto, publicado pela Teleport Labs Inc. segundo a política de privacidade.',
          'Preço: grátis com um modelo local ou a sua própria chave; a IA gerenciada é o plano pago Pro.',
          'Manutenção: a versão 2.9.0 saiu em 10 de novembro de 2026 e o repositório foi atualizado no mesmo dia, então o projeto está em desenvolvimento ativo.',
          'Lacunas: só macOS 14 ou mais recente, nenhum modelo incluído, e os caminhos na nuvem enviam as capturas a um provedor.',
        ],
      },
      getItDayflow: {
        id: 'get-it',
        title: 'Obter o Dayflow',
        content: [
          '**O Dayflow se instala como qualquer app de Mac, sem precisar de terminal.** Baixe a imagem de disco no site oficial ou na página de versões do GitHub, abra-a, arraste o Dayflow para Aplicativos e conceda a permissão de gravação de tela quando o macOS pedir.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Mac',
            'Onde obter': '[Baixar para Mac](https://github.com/JerryZLiu/Dayflow/releases/latest) — Dayflow.dmg, macOS 14 ou mais recente; também `brew install --cask dayflow`',
          },
          {
            Plataforma: 'Notas de versão',
            'Onde obter': '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — a versão 2.9.0 não tem notas escritas',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[dayflow.so](https://www.dayflow.so/)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do Dayflow](https://www.dayflow.so/privacy/)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': '[github.com/JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — licença MIT',
          },
        ],
        note: 'A página inicial anuncia uma versão para Windows como futura; nenhuma versão para Windows ou Linux foi encontrada.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Dayflow em resumo',
        columns: ['Atributo', 'Dayflow'],
        rows: [
          { Atributo: 'Plataforma', Dayflow: 'macOS 14 ou mais recente' },
          { Atributo: 'Preço', Dayflow: 'Grátis; plano Pro pago' },
          { Atributo: 'Licença', Dayflow: 'MIT, código aberto' },
          { Atributo: 'Execução', Dayflow: 'Captura no Mac; análise local ou na nuvem' },
          { Atributo: 'Funciona com LLMs locais', Dayflow: 'Sim, via Ollama ou LM Studio' },
          { Atributo: 'Entrada / saída de voz', Dayflow: 'Não informado' },
          { Atributo: 'Memória persistente', Dayflow: 'Banco de dados da linha do tempo no seu Mac' },
          { Atributo: 'Uso de ferramentas / ações', Dayflow: 'Não informado' },
        ],
        note: 'Os atributos seguem a comparação de assistentes pessoais usada no Diretório de Software de LLM Local. Uma informação ausente no site significa desconhecido, não sem suporte.',
      },
      whatIsDayflow: {
        id: 'what-is-dayflow',
        title: 'O que é o Dayflow',
        content: [
          '**O Dayflow é um diário de trabalho automático, não um cronômetro manual.** Ele tira capturas de tela com pouca frequência, pede a um modelo de IA que descreva o que você estava fazendo e agrupa o resultado em cartões de atividade numa linha do tempo; assim, um bloco no Cursor ou no Chrome aparece como depuração ou pesquisa, e não apenas como o nome de um app.',
          'A página inicial cita a Teleport Labs Inc. como a empresa, e o repositório do GitHub é JerryZLiu/Dayflow. A página de preços também lista um plano Enterprise com SSO e controles de retenção de dados; esta análise cobre apenas o app para Mac.',
          'Esta análise se baseia no site, na política de privacidade e no repositório do GitHub. Não houve testes práticos, então a qualidade dos resumos, o consumo de bateria e a estabilidade não são avaliados aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação, uma permissão e a escolha da IA.** Os passos seguem o README.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe o Dayflow.dmg na [página de versões do GitHub](https://github.com/JerryZLiu/Dayflow/releases/latest) e arraste-o para Aplicativos, ou execute `brew install --cask dayflow`.',
          },
          {
            title: 'Conceda a permissão',
            whyItMatters: 'Permita "Gravação de tela e áudio do sistema" no macOS quando ele pedir; sem isso, o Dayflow não consegue capturar nada.',
          },
          {
            title: 'Escolha como a análise roda',
            whyItMatters: 'Escolha um modelo local com Ollama ou LM Studio, a sua própria chave do Gemini, ou ChatGPT ou Claude por meio das ferramentas locais de linha de comando deles; o Pro é a alternativa gerenciada.',
          },
          {
            title: 'Deixe rodar e depois revise',
            whyItMatters: 'Trabalhe como de costume; depois abra a linha do tempo, a visão diária ou a revisão semanal, ou exporte um intervalo de datas em Markdown.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno da linha do tempo.** Tudo abaixo vem do README e do site.',
        ],
        items: [
          '**Linha do tempo automática.** Trechos da tela viram cartões de atividade com contexto, como o que você fez em um editor ou navegador.',
          '**Standup diário.** Uma grade de atividade mais os destaques de ontem, as prioridades de hoje e os bloqueios.',
          '**Revisão semanal.** Padrões de foco, categorias e uso de apps ao longo da semana, com acompanhamento de distrações.',
          '**Chat com o seu diário.** Perguntas em linguagem natural respondidas a partir da sua própria linha do tempo.',
          '**Exportação e limpeza.** Exportação em Markdown de qualquer intervalo e remoção automática de gravações antigas conforme um limite de armazenamento.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Local ou nuvem: para onde vão as capturas',
        content: [
          '**O Dayflow oferece três caminhos de análise, e só o primeiro mantém as capturas no Mac.** A política de privacidade lista o processamento local, em que as capturas nunca saem da máquina; "seu próprio provedor de IA", em que as capturas vão direto ao provedor que você configurar; e a nuvem do Dayflow para o Pro, em que elas são processadas nos servidores do fabricante e apagadas depois. Os dois primeiros aparecem como "padrão", sem que um único padrão seja indicado.',
          'O processamento local roda por Ollama ou LM Studio, que você instala à parte. O README também lista ChatGPT e Claude por meio das ferramentas locais de linha de comando deles; essas ferramentas chamam os modelos em nuvem dos provedores, então esse caminho não é inferência no dispositivo. Segundo o README e a página de preços, as gravações e o banco de dados ficam no Mac em todos os modos.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**A política de privacidade diz que o Dayflow não vende os seus dados, não armazena as suas capturas de tela e não permite que os seus provedores de IA treinem com os seus dados.** As análises anônimas (aberturas do app, uso de recursos, relatórios de falhas) podem ser desativadas nas configurações, e os dados básicos da conta são mantidos para assinantes. A empresa fica nos Estados Unidos. O código é aberto e o PromptQuorum não examinou o tráfego de rede, então essas afirmações são do fabricante.',
          'A licença é MIT. O plano gratuito cobre a captura, os resumos e as suas próprias chaves de provedor ou um modelo local; o Pro custa US$ 20 por mês pela IA gerenciada, com uma oferta anual exibida no app, e o Enterprise é cotado sob consulta.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Análise no seu próprio Mac',
            'O que significa na prática': 'Segundo o README, com Ollama ou LM Studio as capturas ficam na máquina.',
            'Limitação / ressalva': 'Você instala e executa o modelo; segundo a página inicial, a inferência local exige bastante da GPU e da bateria.',
          },
          {
            Vantagem: 'Grátis e de código aberto',
            'O que significa na prática': 'Código MIT e plano gratuito com a sua chave ou um modelo local.',
            'Limitação / ressalva': 'A IA gerenciada exige o plano pago Pro.',
          },
          {
            Vantagem: 'Linha do tempo automática',
            'O que significa na prática': 'Sem cronômetros nem anotações manuais; os resumos descrevem o que você fez.',
            'Limitação / ressalva': 'A qualidade dos resumos depende do modelo escolhido; o PromptQuorum não a mediu.',
          },
          {
            Vantagem: 'Escolha flexível de IA',
            'O que significa na prática': 'Troque depois entre local, a sua chave e o Pro.',
            'Limitação / ressalva': 'Os caminhos na nuvem enviam as capturas a um provedor.',
          },
          {
            Vantagem: 'Desenvolvimento ativo',
            'O que significa na prática': 'A versão 2.9.0 saiu em 10 de novembro de 2026.',
            'Limitação / ressalva': 'Só Mac, com macOS 14 ou mais recente; o Windows é apenas anunciado.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Dayflow e as alternativas',
        content: [
          'Estas são as ferramentas mais próximas do diretório: outro app de memória de tela, um segundo cérebro auto-hospedado e uma busca de arquivos no dispositivo.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'Dayflow',
            Plataformas: 'Mac',
            'Preço e licença': 'Grátis, Pro pago, MIT',
            Função: 'Diário de trabalho automático',
            'Diferença principal': 'Código aberto; modelos locais com Ollama ou LM Studio',
          },
          {
            App: '[Perfect Memory AI](/pt/power-local-llm/perfect-memory-review)',
            Plataformas: 'Mac, Windows',
            'Preço e licença': 'Freemium, código fechado',
            Função: 'Memória pesquisável de tela e reuniões',
            'Diferença principal': 'Segundo a política de privacidade, a IA embutida passa pelo servidor do fabricante, a menos que você conecte uma local',
          },
          {
            App: '[Khoj](/pt/power-local-llm/khoj-ai-second-brain-review)',
            Plataformas: 'Mac, Windows, Linux, web',
            'Preço e licença': 'Grátis, AGPL 3.0',
            Função: 'Segundo cérebro com IA sobre os seus documentos',
            'Diferença principal': 'Trabalha com notas e arquivos que você fornece, não com a atividade da tela',
          },
          {
            App: '[Hyperlink (Nexa AI)](/pt/power-local-llm/hyperlink-nexa-review)',
            Plataformas: 'Mac, Windows',
            'Preço e licença': 'Grátis, proprietário',
            Função: 'Busca de arquivos no dispositivo',
            'Diferença principal': 'Pesquisa os seus arquivos em vez de gravar o seu dia',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Dayflow serve',
        items: [
          '**Usuários de Mac que cobram ou reportam o próprio tempo.** A linha do tempo e a exportação em Markdown substituem anotações manuais.',
          '**Desenvolvedores que escrevem standups.** A visão diária rascunha os destaques de ontem, as tarefas de hoje e os bloqueios.',
          '**Pessoas que mantêm os dados de tela privados.** Um modelo local mantém a análise no Mac, segundo o README.',
          '**Usuários de código aberto.** O código MIT é público e o app é gratuito.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Dayflow não serve',
        items: [
          '**Usuários de Windows e Linux.** Só existe um app para Mac; o Windows é anunciado.',
          '**Macs com macOS anterior ao 14.** O README exige macOS 14 ou mais recente.',
          '**Quem não quer rodar um modelo local.** Sem Ollama ou LM Studio, a análise usa um provedor na nuvem.',
          '**Quem não pode gravar a tela.** Regras de empregador ou cliente podem proibir capturas periódicas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Dayflow funciona offline?',
            a: 'Com um modelo local no Ollama ou no LM Studio, a análise não precisa de conexão com a internet, segundo o README; atualizações, login na conta e modos na nuvem precisam. O PromptQuorum não testou offline.',
          },
          {
            q: 'O Dayflow grava a minha tela continuamente?',
            a: 'A política de privacidade diz que ele captura telas com pouca frequência, e a página inicial informa que o gravador usa cerca de 100 MB de RAM e menos de 1% de CPU. São números do fabricante; o PromptQuorum não os mediu.',
          },
          {
            q: 'Posso usar ChatGPT ou Claude em vez de um modelo local?',
            a: 'Sim, por meio das ferramentas locais de linha de comando deles (Codex CLI e Claude Code) ou com a sua própria chave do Gemini, da OpenAI ou da Anthropic. Esses caminhos usam modelos na nuvem, então as capturas chegam ao provedor.',
          },
          {
            q: 'Onde ficam armazenadas as minhas gravações?',
            a: 'Na pasta Dayflow dentro de Application Support no seu Mac, segundo o README. Os Activity Data só ficam nos servidores do fabricante se você assinar o Pro para sincronizar entre dispositivos.',
          },
          {
            q: 'Existe uma versão para Windows?',
            a: 'Ainda não: a página inicial diz que o Dayflow para Windows está chegando e oferece uma lista de espera; nenhuma versão para Windows foi encontrada.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Dayflow é uma boa opção se você usa um Mac, quer um registro automático e de código aberto do seu dia de trabalho e está disposto a rodar Ollama ou LM Studio para que a análise fique na sua máquina. Tem licença MIT, um plano gratuito e uma versão de 10 de novembro de 2026.',
          'As ressalvas são o escopo e a verificabilidade: só Mac, uma configuração à parte do modelo local, caminhos na nuvem que enviam as capturas para fora e afirmações de privacidade e de precisão que o PromptQuorum não pôde verificar. Experimente a configuração local gratuita antes de considerar o Pro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Dayflow](https://www.dayflow.so/) — recursos, requisitos e o aviso sobre o Windows.',
          '[Página de preços](https://www.dayflow.so/pricing/) — planos Free, Pro e Enterprise e as perguntas sobre o caminho dos dados.',
          '[Política de privacidade](https://www.dayflow.so/privacy/) — modos local, provedor próprio e nuvem, análises e tratamento de dados.',
          '[Repositório no GitHub](https://github.com/JerryZLiu/Dayflow) — README, licença MIT e código-fonte.',
          '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — Dayflow.dmg e a data de lançamento da versão 2.9.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do Perfect Memory AI](/pt/power-local-llm/perfect-memory-review) — um app de memória de tela e reuniões para Mac e Windows.',
          '[Análise do Khoj](/pt/power-local-llm/khoj-ai-second-brain-review) — um segundo cérebro com IA auto-hospedado sobre os seus próprios documentos.',
          '[Análise do Hyperlink (Nexa AI)](/pt/power-local-llm/hyperlink-nexa-review) — busca com IA nos seus arquivos, no dispositivo.',
          '[Análise do Ollama](/pt/power-local-llm/ollama-review) — o ambiente local que o Dayflow pode usar para a análise no dispositivo.',
          '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review) — a alternativa de desktop para rodar modelos locais.',
          '[O Diretório de Software de LLM Local completo](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/dayflow-review-hero-ar.webp',
    title: 'مراجعة Dayflow: سجل عمل مفتوح المصدر لجهاز Mac مع ذكاء اصطناعي محلي',
    seoTitle: 'مراجعة Dayflow: سجل عمل لـ Mac بذكاء اصطناعي محلي',
    intro: 'Dayflow تطبيق Mac مجاني بترخيص MIT يلتقط لقطات شاشة متباعدة ويحوّلها إلى جدول زمني لما عملته، مع ملخصات يومية وأسبوعية ومحادثة حول جدولك الزمني الخاص. تلخّص هذه المراجعة ما يقوله الموقع الرسمي ومستودع GitHub، والأجزاء التي يمكن تشغيلها على جهاز Mac الخاص بك عبر Ollama أو LM Studio، وأين تغادر لقطات الشاشة جهازك، وكيف يقارن Dayflow بالأدوات الأخرى في الدليل.',
    metaDescription: 'مراجعة Dayflow: سجل عمل مجاني لـ Mac بترخيص MIT يحوّل لقطات الشاشة إلى جدول زمني ويمكنه التحليل محليًا عبر Ollama أو LM Studio. لم تُجرَّب عمليًا.',
    twitterDescription: 'مراجعة Dayflow: سجل عمل تلقائي مفتوح المصدر لـ Mac مع خيار ذكاء اصطناعي على الجهاز. السعر ومسارات البيانات والقيود والبدائل.',
    audience: 'مستخدمو Mac الذين يريدون سجلًا تلقائيًا ومفتوح المصدر ليوم عملهم ويهتمون بمكان تحليل لقطات الشاشة — تشمل المراجعة السعر والتثبيت والوضعين المحلي والسحابي والخصوصية والقيود والبدائل.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Dayflow review',
    targetKeywords: [
      'مراجعة dayflow',
      'تطبيق dayflow لنظام mac',
      'سجل عمل تلقائي mac',
      'تتبع الوقت مفتوح المصدر mac',
      'ذكاء اصطناعي محلي نشاط الشاشة',
      'ollama lm studio جدول زمني',
      'تطبيق تتبع الوقت بخصوصية',
    ],
    current_hardware_mentioned: [
      'Mac',
      'macOS 14',
    ],
    leadAnswerBlock: '**Dayflow تطبيق Mac مجاني بترخيص MIT يسجّل شاشتك بوتيرة منخفضة ويستخدم الذكاء الاصطناعي لتحويلها إلى جدول زمني، ويمكن تشغيل تحليله بالكامل على جهاز Mac الخاص بك عبر Ollama أو LM Studio.** التحليل السحابي خيار وليس شرطًا. أحدث إصدار هو 2.9.0 الصادر في 10 نوفمبر 2026. تستند هذه المراجعة إلى موقع الجهة المطوّرة ومستودع GitHub، لا إلى تجربة عملية.',
    quickAnswerTop: {
      ar: {
        question: 'هل Dayflow تطبيق محلي؟',
        answer: 'جزئيًا بحسب اختيارك: تُحفظ التسجيلات وقاعدة البيانات على جهاز Mac، ويقول README إن التحليل يبقى على جهازك إذا اخترت النماذج المحلية. وإذا اخترت مفتاحك السحابي الخاص أو Dayflow Pro، تُرسل لقطات الشاشة إلى ذلك المزوّد. الشيفرة مفتوحة، لكن PromptQuorum لم تفحص حركة الشبكة، لذا تبقى ادعاءات الخصوصية ادعاءات الجهة المطوّرة.',
        bullets: [
          'يلتقط Dayflow لقطات شاشة بوتيرة منخفضة ويبني منها بطاقات نشاط ومسودة اجتماع يومي قصير ومراجعة أسبوعية ومحادثة حول جدولك الزمني.',
          'السعر: التطبيق مجاني مع نموذج محلي أو مفتاح API الخاص بك؛ وخطة Pro الاختيارية مع ذكاء اصطناعي مُدار بسعر 20 دولارًا شهريًا.',
          'يتطلب التحليل المحلي Ollama أو LM Studio، وتثبّتهما وتشغّلهما بنفسك؛ ولا يأتي أي نموذج مع التطبيق.',
          'لأجهزة Mac فقط بنظام macOS 14 أو أحدث؛ وتذكر الصفحة الرئيسية أن إصدار Windows قادم.',
          'تُرسل تحليلات مجهولة الهوية إلى الجهة المطوّرة ما لم توقفها من الإعدادات.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على Dayflow', anchor: 'get-it' },
      { label: 'Dayflow في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Dayflow', anchor: 'what-is-dayflow' },
      { label: 'البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'محلي أم سحابي: إلى أين تذهب لقطات الشاشة', anchor: 'local-vs-cloud' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'Dayflow مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Dayflow', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Dayflow', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Dayflow تطبيق Mac مجاني ومفتوح المصدر يحوّل، بحسب README، لقطات شاشة متباعدة إلى جدول زمني للعمل ويمكنه تشغيل تحليل الذكاء الاصطناعي بالكامل على جهاز Mac الخاص بك.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل يوميات تلقائية ليوم عملك: بدلًا من تشغيل المؤقتات، تترك التطبيق ينظر إلى شاشتك من حين لآخر ويدوّن ما كنت تفعله.',
          },
        ],
        items: [
          'الادعاء المحلي: يبقى الالتقاط والتسجيلات وقاعدة البيانات على جهاز Mac؛ ويكون التحليل محليًا فقط إذا ربطت Ollama أو LM Studio.',
          'الترخيص والجهة المطوّرة: MIT، وشيفرة مفتوحة، ونشرتها Teleport Labs Inc. بحسب سياسة الخصوصية.',
          'السعر: مجاني مع نموذج محلي أو مفتاحك الخاص؛ والذكاء الاصطناعي المُدار هو خطة Pro المدفوعة.',
          'الصيانة: صدر الإصدار 2.9.0 في 10 نوفمبر 2026 وحُدّث المستودع في اليوم نفسه، لذا فالمشروع قيد التطوير النشط.',
          'الثغرات: macOS 14 أو أحدث فقط، ولا يوجد نموذج مرفق، والمسارات السحابية ترسل لقطات الشاشة إلى مزوّد.',
        ],
      },
      getItDayflow: {
        id: 'get-it',
        title: 'الحصول على Dayflow',
        content: [
          '**يُثبَّت Dayflow مثل أي تطبيق Mac، دون حاجة إلى الطرفية.** نزّل صورة القرص من الموقع الرسمي أو من صفحة الإصدارات على GitHub، وافتحها، واسحب Dayflow إلى مجلد التطبيقات، وامنح إذن تسجيل الشاشة عندما يطلبه macOS.',
        ],
        columns: ['المنصة', 'مصدر الحصول'],
        rows: [
          {
            'المنصة': 'Mac',
            'مصدر الحصول': '[التنزيل لنظام Mac](https://github.com/JerryZLiu/Dayflow/releases/latest) — Dayflow.dmg، macOS 14 أو أحدث؛ ويمكن أيضًا `brew install --cask dayflow`',
          },
          {
            'المنصة': 'ملاحظات الإصدار',
            'مصدر الحصول': '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — لا توجد ملاحظات مكتوبة للإصدار 2.9.0',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[dayflow.so](https://www.dayflow.so/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية Dayflow](https://www.dayflow.so/privacy/)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': '[github.com/JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — ترخيص MIT',
          },
        ],
        note: 'تذكر الصفحة الرئيسية أن إصدار Windows قادم؛ ولم يُعثر على إصدار لـ Windows أو Linux.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Dayflow في لمحة',
        columns: ['الخاصية', 'Dayflow'],
        rows: [
          { 'الخاصية': 'المنصة', Dayflow: 'macOS 14 أو أحدث' },
          { 'الخاصية': 'السعر', Dayflow: 'مجاني؛ خطة Pro مدفوعة' },
          { 'الخاصية': 'الترخيص', Dayflow: 'MIT، مفتوح المصدر' },
          { 'الخاصية': 'مكان التشغيل', Dayflow: 'الالتقاط على Mac؛ التحليل محلي أو سحابي' },
          { 'الخاصية': 'يعمل مع نماذج LLM المحلية', Dayflow: 'نعم، عبر Ollama أو LM Studio' },
          { 'الخاصية': 'إدخال / إخراج صوتي', Dayflow: 'غير مذكور' },
          { 'الخاصية': 'ذاكرة دائمة', Dayflow: 'قاعدة بيانات الجدول الزمني على جهاز Mac' },
          { 'الخاصية': 'استخدام الأدوات / الإجراءات', Dayflow: 'غير مذكور' },
        ],
        note: 'تتبع الخصائص مقارنة المساعدين الشخصيين المستخدمة في Local LLM Software Directory. غياب الذكر في الموقع يعني غير معروف، لا غير مدعوم.',
      },
      whatIsDayflow: {
        id: 'what-is-dayflow',
        title: 'ما هو Dayflow',
        content: [
          '**Dayflow سجل عمل تلقائي وليس مؤقتًا يدويًا.** يلتقط لقطات شاشة بوتيرة منخفضة، ويجعل نموذج ذكاء اصطناعي يصف ما كنت تفعله، ثم يجمع النتيجة في بطاقات نشاط على جدول زمني؛ فتظهر فترة في Cursor أو Chrome مثلًا كتصحيح أخطاء أو بحث، لا كاسم تطبيق فقط.',
          'تذكر الصفحة الرئيسية شركة Teleport Labs Inc. بوصفها الجهة المطوّرة، ومستودع GitHub هو JerryZLiu/Dayflow. وتعرض صفحة الأسعار أيضًا خطة Enterprise مع SSO وضوابط الاحتفاظ بالبيانات؛ وتغطي هذه المراجعة تطبيق Mac فقط.',
          'تستند هذه المراجعة إلى الموقع وسياسة الخصوصية ومستودع GitHub. ولم تُجرَ تجربة عملية، لذا لا تُقيَّم هنا جودة الملخصات واستهلاك البطارية والاستقرار.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد يتكوّن من تثبيت وإذن واختيار للذكاء الاصطناعي.** تتبع الخطوات ملف README.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل Dayflow.dmg من [صفحة الإصدارات على GitHub](https://github.com/JerryZLiu/Dayflow/releases/latest) واسحبه إلى مجلد التطبيقات، أو نفّذ `brew install --cask dayflow`.',
          },
          {
            title: 'امنح الإذن',
            whyItMatters: 'اسمح بـ "تسجيل الشاشة وصوت النظام" في macOS عندما يطلبه؛ ودونه لا يستطيع Dayflow التقاط أي شيء.',
          },
          {
            title: 'اختر طريقة التحليل',
            whyItMatters: 'اختر نموذجًا محليًا عبر Ollama أو LM Studio، أو مفتاح Gemini الخاص بك، أو ChatGPT أو Claude عبر أدوات سطر الأوامر المحلية الخاصة بهما؛ وPro هو البديل المُدار.',
          },
          {
            title: 'اتركه يعمل ثم راجع',
            whyItMatters: 'اعمل كالمعتاد؛ ثم افتح الجدول الزمني أو العرض اليومي أو المراجعة الأسبوعية لاحقًا، أو صدّر نطاقًا زمنيًا إلى Markdown.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تدور الميزات حول الجدول الزمني.** كل ما يلي مأخوذ من README والموقع.',
        ],
        items: [
          '**جدول زمني تلقائي.** تتحول مقاطع الشاشة إلى بطاقات نشاط ذات سياق، مثل ما فعلته في محرر أو متصفح.',
          '**اجتماع يومي قصير.** شبكة نشاط إضافة إلى أبرز ما أُنجز أمس وأولويات اليوم والعوائق.',
          '**مراجعة أسبوعية.** أنماط التركيز والفئات واستخدام التطبيقات على مدار الأسبوع، مع تتبع مصادر التشتت.',
          '**محادثة مع سجلك.** أسئلة بلغة طبيعية تُجاب من جدولك الزمني الخاص.',
          '**التصدير والتنظيف.** تصدير إلى Markdown لأي نطاق زمني وحذف تلقائي للتسجيلات القديمة وفق حد للتخزين.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'محلي أم سحابي: إلى أين تذهب لقطات الشاشة',
        content: [
          '**يوفّر Dayflow ثلاثة مسارات للتحليل، والأول وحده يُبقي لقطات الشاشة على جهاز Mac.** تذكر سياسة الخصوصية المعالجة المحلية حيث لا تغادر لقطات الشاشة الجهاز؛ و"مزوّد الذكاء الاصطناعي الخاص بك" حيث تُرسل اللقطات مباشرة إلى المزوّد الذي تضبطه؛ وسحابة Dayflow لمشتركي Pro حيث تُعالج على خوادم الجهة المطوّرة ثم تُحذف. وتصف الأولين بأنهما "افتراضيان" دون تحديد افتراضي واحد.',
          'تعمل المعالجة المحلية عبر Ollama أو LM Studio، وتثبّتهما بشكل منفصل. ويذكر README أيضًا ChatGPT وClaude عبر أدوات سطر الأوامر المحلية الخاصة بهما؛ وهذه الأدوات تستدعي النماذج السحابية للشركات، لذا فهذا المسار ليس استدلالًا على الجهاز. بحسب README وصفحة الأسعار، تبقى التسجيلات وقاعدة البيانات على جهاز Mac في كل الأوضاع.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**تقول سياسة الخصوصية إن Dayflow لا يبيع بياناتك ولا يخزّن لقطات شاشتك ولا يسمح لمزوّدي الذكاء الاصطناعي لديه بالتدريب على بياناتك.** ويمكن إيقاف التحليلات المجهولة (فتح التطبيق واستخدام الميزات وتقارير الأعطال) من الإعدادات، وتُحفظ بيانات الحساب الأساسية للمشتركين. الشركة مقرها الولايات المتحدة. الشيفرة مفتوحة ولم تفحص PromptQuorum حركة الشبكة، لذا فهذه الأقوال هي أقوال الجهة المطوّرة.',
          'الترخيص هو MIT. تشمل الخطة المجانية الالتقاط والملخصات ومفاتيح المزوّد الخاصة بك أو نموذجًا محليًا؛ وتبلغ تكلفة Pro 20 دولارًا شهريًا للذكاء الاصطناعي المُدار مع عرض سنوي يظهر في التطبيق، أما Enterprise فيُسعَّر عند الطلب.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / تنبيه'],
        rows: [
          {
            'الميزة': 'التحليل على جهاز Mac الخاص بك',
            'ما تعنيه في الاستخدام الفعلي': 'بحسب README، مع Ollama أو LM Studio تبقى لقطات الشاشة على الجهاز.',
            'القيد / تنبيه': 'تثبّت النموذج وتشغّله بنفسك؛ وبحسب الصفحة الرئيسية فإن الاستدلال المحلي يرهق وحدة GPU والبطارية.',
          },
          {
            'الميزة': 'مجاني ومفتوح المصدر',
            'ما تعنيه في الاستخدام الفعلي': 'شيفرة MIT وخطة مجانية مع مفتاحك أو نموذج محلي.',
            'القيد / تنبيه': 'يتطلب الذكاء الاصطناعي المُدار خطة Pro المدفوعة.',
          },
          {
            'الميزة': 'جدول زمني تلقائي',
            'ما تعنيه في الاستخدام الفعلي': 'لا مؤقتات ولا ملاحظات يدوية؛ والملخصات تصف ما فعلته.',
            'القيد / تنبيه': 'تعتمد جودة الملخصات على النموذج الذي تختاره؛ ولم تقسها PromptQuorum.',
          },
          {
            'الميزة': 'اختيار مرن للذكاء الاصطناعي',
            'ما تعنيه في الاستخدام الفعلي': 'يمكنك التبديل لاحقًا بين المحلي ومفتاحك وPro.',
            'القيد / تنبيه': 'المسارات السحابية ترسل لقطات الشاشة إلى مزوّد.',
          },
          {
            'الميزة': 'تطوير نشط',
            'ما تعنيه في الاستخدام الفعلي': 'صدر الإصدار 2.9.0 في 10 نوفمبر 2026.',
            'القيد / تنبيه': 'لأجهزة Mac فقط بنظام macOS 14 أو أحدث؛ وWindows مُعلن عنه فقط.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Dayflow مقابل البدائل',
        content: [
          'هذه أقرب الأدوات في الدليل: تطبيق آخر لذاكرة الشاشة، و"عقل ثانٍ" مستضاف ذاتيًا، وبحث في الملفات على الجهاز.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'الدور', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Dayflow',
            'المنصات': 'Mac',
            'السعر والترخيص': 'مجاني، وPro مدفوع، MIT',
            'الدور': 'سجل عمل تلقائي',
            'الفرق الرئيسي': 'مفتوح المصدر؛ نماذج محلية عبر Ollama أو LM Studio',
          },
          {
            'التطبيق': '[Perfect Memory AI](/ar/power-local-llm/perfect-memory-review)',
            'المنصات': 'Mac وWindows',
            'السعر والترخيص': 'مجاني جزئيًا، مغلق المصدر',
            'الدور': 'ذاكرة قابلة للبحث للشاشة والاجتماعات',
            'الفرق الرئيسي': 'بحسب سياسة خصوصيته، يمر الذكاء الاصطناعي المدمج عبر خادم الجهة المطوّرة ما لم تربط ذكاءً محليًا',
          },
          {
            'التطبيق': '[Khoj](/ar/power-local-llm/khoj-ai-second-brain-review)',
            'المنصات': 'Mac وWindows وLinux والويب',
            'السعر والترخيص': 'مجاني، AGPL 3.0',
            'الدور': 'عقل ثانٍ بالذكاء الاصطناعي لمستنداتك',
            'الفرق الرئيسي': 'يعمل على الملاحظات والملفات التي تقدمها، لا على نشاط الشاشة',
          },
          {
            'التطبيق': '[Hyperlink (Nexa AI)](/ar/power-local-llm/hyperlink-nexa-review)',
            'المنصات': 'Mac وWindows',
            'السعر والترخيص': 'مجاني، مملوك',
            'الدور': 'بحث في الملفات على الجهاز',
            'الفرق الرئيسي': 'يبحث في ملفاتك بدل تسجيل يومك',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Dayflow',
        items: [
          '**مستخدمو Mac الذين يحاسبون على وقتهم أو يرفعون تقارير عنه.** يغني الجدول الزمني وتصدير Markdown عن الملاحظات اليدوية.',
          '**المطورون الذين يكتبون تقارير الاجتماع اليومي.** يصوغ العرض اليومي أبرز ما أُنجز أمس ومهام اليوم والعوائق.',
          '**من يريدون إبقاء بيانات الشاشة خاصة.** يُبقي النموذج المحلي التحليل على جهاز Mac بحسب README.',
          '**مستخدمو المصادر المفتوحة.** شيفرة MIT علنية والتطبيق مجاني.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Dayflow',
        items: [
          '**مستخدمو Windows وLinux.** لا يوجد سوى تطبيق Mac؛ وWindows مُعلن عنه فقط.',
          '**أجهزة Mac الأقدم من macOS 14.** يشترط README نظام macOS 14 أو أحدث.',
          '**من لا يريد تشغيل نموذج محلي.** دون Ollama أو LM Studio يستخدم التحليل مزوّدًا سحابيًا.',
          '**من لا يستطيع تسجيل شاشته.** قد تمنع قواعد جهة العمل أو العميل لقطات الشاشة الدورية.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Dayflow دون اتصال بالإنترنت؟',
            a: 'مع نموذج محلي في Ollama أو LM Studio لا يحتاج التحليل إلى اتصال بالإنترنت بحسب README؛ أما التحديثات وتسجيل الدخول إلى الحساب والأوضاع السحابية فتحتاج إليه. لم تجرّبه PromptQuorum دون اتصال.',
          },
          {
            q: 'هل يسجّل Dayflow شاشتي باستمرار؟',
            a: 'تقول سياسة الخصوصية إنه يلتقط لقطات شاشة بوتيرة منخفضة، وتذكر الصفحة الرئيسية أن المسجّل يستخدم نحو 100 MB من الذاكرة وأقل من 1% من المعالج. هذه أرقام الجهة المطوّرة؛ ولم تقسها PromptQuorum.',
          },
          {
            q: 'هل يمكنني استخدام ChatGPT أو Claude بدل نموذج محلي؟',
            a: 'نعم، عبر أدوات سطر الأوامر المحلية الخاصة بهما (Codex CLI وClaude Code) أو بمفتاح Gemini أو OpenAI أو Anthropic الخاص بك. هذه المسارات تستخدم نماذج سحابية، لذا تصل لقطات الشاشة إلى المزوّد.',
          },
          {
            q: 'أين تُخزَّن تسجيلاتي؟',
            a: 'في مجلد Dayflow داخل Application Support على جهاز Mac بحسب README. ولا تُخزَّن Activity Data على خوادم الجهة المطوّرة إلا إذا اشتركت في Pro للمزامنة بين الأجهزة.',
          },
          {
            q: 'هل يوجد إصدار لـ Windows؟',
            a: 'ليس بعد: تقول الصفحة الرئيسية إن Dayflow لنظام Windows قادم وتعرض قائمة انتظار، ولم يُعثر على إصدار لـ Windows.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب Dayflow من يستخدم جهاز Mac ويريد سجلًا تلقائيًا ومفتوح المصدر ليوم عمله ومستعدًا لتشغيل Ollama أو LM Studio كي يبقى التحليل على جهازه. له ترخيص MIT وخطة مجانية وإصدار بتاريخ 10 نوفمبر 2026.',
          'التحفظات تتعلق بالنطاق وإمكانية التحقق: لأجهزة Mac فقط، وإعداد منفصل للنموذج المحلي، ومسارات سحابية ترسل لقطات الشاشة إلى الخارج، وادعاءات خصوصية ودقة لم تستطع PromptQuorum التحقق منها. جرّب الإعداد المحلي المجاني قبل التفكير في Pro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Dayflow](https://www.dayflow.so/) — الميزات والمتطلبات وإشعار Windows.',
          '[صفحة الأسعار](https://www.dayflow.so/pricing/) — خطط Free وPro وEnterprise وأسئلة مسار البيانات.',
          '[سياسة الخصوصية](https://www.dayflow.so/privacy/) — الأوضاع المحلية ومزوّدك الخاص والسحابية، والتحليلات ومعالجة البيانات.',
          '[مستودع GitHub](https://github.com/JerryZLiu/Dayflow) — README وترخيص MIT والشيفرة المصدرية.',
          '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — Dayflow.dmg وتاريخ إصدار النسخة 2.9.0.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Perfect Memory AI](/ar/power-local-llm/perfect-memory-review) — تطبيق لذاكرة الشاشة والاجتماعات لنظامي Mac وWindows.',
          '[مراجعة Khoj](/ar/power-local-llm/khoj-ai-second-brain-review) — عقل ثانٍ بالذكاء الاصطناعي مستضاف ذاتيًا لمستنداتك.',
          '[مراجعة Hyperlink (Nexa AI)](/ar/power-local-llm/hyperlink-nexa-review) — بحث بالذكاء الاصطناعي في ملفاتك على الجهاز.',
          '[مراجعة Ollama](/ar/power-local-llm/ollama-review) — بيئة التشغيل المحلية التي يمكن لـ Dayflow استخدامها للتحليل على الجهاز.',
          '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review) — بديل سطح المكتب لتشغيل النماذج المحلية.',
          '[دليل Local LLM Software Directory الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/dayflow-review-hero-ko.webp',
    title: 'Dayflow 리뷰: 로컬 AI를 지원하는 Mac용 오픈소스 업무 일지',
    seoTitle: 'Dayflow 리뷰: 로컬 AI 지원 Mac 업무 일지',
    intro: 'Dayflow는 드문 간격으로 화면을 캡처해 업무 내용을 타임라인으로 정리하는 Mac용 무료 앱(MIT 라이선스)입니다. 일간·주간 요약과 내 타임라인을 대상으로 한 채팅도 제공합니다. 이 리뷰에서는 공식 사이트와 GitHub 저장소의 설명, Ollama나 LM Studio를 통해 내 Mac에서 실행할 수 있는 부분, 스크린샷이 기기 밖으로 나가는 경로, 디렉터리의 다른 도구와의 차이를 정리합니다.',
    metaDescription: 'Dayflow 리뷰: 스크린샷을 업무 타임라인으로 만드는 Mac용 무료 앱(MIT). Ollama나 LM Studio로 로컬 분석 가능. PromptQuorum은 직접 테스트하지 않았습니다.',
    twitterDescription: 'Dayflow 리뷰: 온디바이스 AI를 고를 수 있는 Mac용 오픈소스 자동 업무 일지. 가격, 데이터 경로, 한계, 대안을 정리합니다.',
    audience: '업무일을 자동으로, 그리고 오픈소스로 기록하고 싶으며 스크린샷이 어디서 분석되는지 신경 쓰는 Mac 사용자를 위한 글입니다. 가격, 설치, 로컬·클라우드 모드, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Dayflow review',
    targetKeywords: [
      'dayflow 리뷰',
      'dayflow mac 앱',
      '자동 업무 일지 mac',
      '오픈소스 시간 추적 mac',
      '로컬 ai 화면 활동',
      'ollama lm studio 타임라인',
      '개인정보 보호 시간 추적 앱',
    ],
    current_hardware_mentioned: [
      'Mac',
      'macOS 14',
    ],
    leadAnswerBlock: '**Dayflow는 화면을 드문 간격으로 기록하고 AI로 타임라인을 만드는 Mac용 무료 앱(MIT 라이선스)이며, 분석은 Ollama나 LM Studio를 통해 내 Mac에서만 실행할 수 있습니다.** 클라우드 분석은 선택 사항이며 필수가 아닙니다. 최신 버전은 2026년 11월 10일에 나온 2.9.0입니다. 이 리뷰는 공식 사이트와 GitHub 저장소의 설명에 근거하며 직접 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Dayflow는 로컬 앱입니까?',
        answer: '선택에 따라 일부는 그렇습니다. 녹화 파일과 데이터베이스는 Mac에 저장되며, README에 따르면 로컬 모델을 고르면 분석도 내 컴퓨터에 머뭅니다. 내 클라우드 API 키나 Dayflow Pro를 고르면 스크린샷이 해당 제공자에게 전송됩니다. 코드는 공개되어 있지만 PromptQuorum은 네트워크 트래픽을 검사하지 않았으므로 개인정보 보호에 관한 설명은 개발사의 주장입니다.',
        bullets: [
          'Dayflow는 드문 간격으로 스크린샷을 찍어 활동 카드, 일간 스탠드업 초안, 주간 리뷰, 내 타임라인에 대한 채팅을 만듭니다.',
          '가격: 로컬 모델이나 내 API 키를 쓰면 무료이고, 관리형 AI가 포함된 선택형 Pro 플랜은 월 $20입니다.',
          '로컬 분석에는 Ollama 또는 LM Studio가 필요하며 직접 설치해 실행해야 합니다. 모델은 포함되어 있지 않습니다.',
          'Mac 전용이며 macOS 14 이상이 필요합니다. 홈페이지는 Windows 버전을 출시 예정으로 안내합니다.',
          '설정에서 끄지 않는 한 익명 사용 분석 데이터가 개발사로 전송됩니다.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Dayflow 받기', anchor: 'get-it' },
      { label: 'Dayflow 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Dayflow란', anchor: 'what-is-dayflow' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '로컬 vs 클라우드: 스크린샷이 가는 곳', anchor: 'local-vs-cloud' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Dayflow와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Dayflow를 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'Dayflow를 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Dayflow는 README에 따르면 드문 간격의 스크린샷을 업무 타임라인으로 만들고 AI 분석을 내 Mac에서만 실행할 수 있는 무료 오픈소스 Mac 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '업무일을 자동으로 적어 주는 일기라고 생각하면 됩니다. 타이머를 켜는 대신 앱이 가끔 화면을 보고 무엇을 하고 있었는지 기록합니다.',
          },
        ],
        items: [
          '로컬 관련 설명: 캡처, 녹화 파일, 데이터베이스는 Mac에 남습니다. 분석은 Ollama나 LM Studio를 연결할 때만 로컬입니다.',
          '라이선스와 개발사: MIT, 공개 코드이며 개인정보 처리방침에 따르면 Teleport Labs Inc.가 공개했습니다.',
          '가격: 로컬 모델이나 내 키를 쓰면 무료이고, 관리형 AI는 유료 Pro 플랜입니다.',
          '유지보수: 버전 2.9.0이 2026년 11월 10일에 출시되었고 저장소도 같은 날 업데이트되어 활발히 개발되고 있습니다.',
          '한계: macOS 14 이상만 지원하고, 모델이 포함되어 있지 않으며, 클라우드 경로에서는 스크린샷이 제공자에게 전송됩니다.',
        ],
      },
      getItDayflow: {
        id: 'get-it',
        title: 'Dayflow 받기',
        content: [
          '**Dayflow는 일반 Mac 앱처럼 설치하므로 터미널이 필요 없습니다.** 공식 사이트나 GitHub 릴리스 페이지에서 디스크 이미지를 내려받아 열고, Dayflow를 응용 프로그램 폴더로 끌어다 놓은 뒤 macOS가 요청하면 화면 녹화 권한을 허용하십시오.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Mac',
            '받는 곳': '[Mac용 다운로드](https://github.com/JerryZLiu/Dayflow/releases/latest) — Dayflow.dmg, macOS 14 이상. `brew install --cask dayflow`도 가능',
          },
          {
            '플랫폼': '릴리스 노트',
            '받는 곳': '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — 버전 2.9.0에는 릴리스 노트가 없습니다',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[dayflow.so](https://www.dayflow.so/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Dayflow 개인정보 처리방침](https://www.dayflow.so/privacy/)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[github.com/JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — MIT 라이선스',
          },
        ],
        note: '홈페이지는 Windows 버전을 출시 예정으로 안내하지만, Windows나 Linux용 빌드는 찾지 못했습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Dayflow 한눈에 보기',
        columns: ['항목', 'Dayflow'],
        rows: [
          { '항목': '플랫폼', Dayflow: 'macOS 14 이상' },
          { '항목': '가격', Dayflow: '무료, Pro는 유료' },
          { '항목': '라이선스', Dayflow: 'MIT, 오픈소스' },
          { '항목': '실행 위치', Dayflow: '캡처는 Mac에서, 분석은 로컬 또는 클라우드' },
          { '항목': '로컬 LLM 연동', Dayflow: '예, Ollama 또는 LM Studio 경유' },
          { '항목': '음성 입력/출력', Dayflow: '언급 없음' },
          { '항목': '지속적 메모리', Dayflow: '타임라인 데이터베이스가 내 Mac에 저장됨' },
          { '항목': '도구 사용/액션', Dayflow: '언급 없음' },
        ],
        note: '항목은 Local LLM Software Directory에서 사용하는 개인 비서 비교를 따릅니다. 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsDayflow: {
        id: 'what-is-dayflow',
        title: 'Dayflow란',
        content: [
          '**Dayflow는 수동 타이머가 아니라 자동 업무 일지입니다.** 드문 간격으로 스크린샷을 찍고, AI 모델이 무엇을 하고 있었는지 설명하게 한 뒤, 결과를 타임라인의 활동 카드로 묶습니다. 그래서 Cursor나 Chrome에서 보낸 시간이 앱 이름만이 아니라 디버깅이나 조사처럼 표시됩니다.',
          '홈페이지는 운영 회사로 Teleport Labs Inc.를 밝히고 있으며 GitHub 저장소는 JerryZLiu/Dayflow입니다. 가격 페이지에는 SSO와 데이터 보존 제어를 갖춘 Enterprise 플랜도 있지만, 이 리뷰는 Mac 앱만 다룹니다.',
          '이 리뷰는 공식 사이트, 개인정보 처리방침, GitHub 저장소에 근거합니다. 직접 테스트하지 않았으므로 요약 품질, 배터리 소모, 안정성은 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 권한 허용, AI 선택의 세 단계입니다.** 단계는 README를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '[GitHub 릴리스 페이지](https://github.com/JerryZLiu/Dayflow/releases/latest)에서 Dayflow.dmg를 내려받아 응용 프로그램 폴더로 끌어다 놓거나, `brew install --cask dayflow`를 실행합니다.',
          },
          {
            title: '권한 허용',
            whyItMatters: 'macOS가 요청하면 "화면 및 시스템 오디오 녹화"를 허용하십시오. 허용하지 않으면 Dayflow가 아무것도 캡처할 수 없습니다.',
          },
          {
            title: '분석 방식 선택',
            whyItMatters: 'Ollama나 LM Studio의 로컬 모델, 내 Gemini 키, 또는 로컬 명령줄 도구를 통한 ChatGPT나 Claude 중에서 고릅니다. 관리형 대안은 Pro입니다.',
          },
          {
            title: '실행해 두고 나중에 확인',
            whyItMatters: '평소처럼 작업하고, 나중에 타임라인, 일간 보기, 주간 리뷰를 열거나 원하는 기간을 Markdown으로 내보냅니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 타임라인을 중심으로 구성됩니다.** 아래 내용은 모두 README와 공식 사이트에서 가져왔습니다.',
        ],
        items: [
          '**자동 타임라인.** 화면 조각이 편집기나 브라우저에서 무엇을 했는지 같은 맥락을 담은 활동 카드가 됩니다.',
          '**일간 스탠드업.** 활동 그리드와 함께 어제의 하이라이트, 오늘의 우선순위, 막힌 점을 보여 줍니다.',
          '**주간 리뷰.** 한 주 동안의 집중 패턴, 카테고리, 앱 사용 현황을 방해 요소 추적과 함께 보여 줍니다.',
          '**일지와의 채팅.** 내 타임라인을 근거로 자연어 질문에 답합니다.',
          '**내보내기와 정리.** 원하는 기간을 Markdown으로 내보낼 수 있고, 저장 용량 한도에 맞춰 오래된 녹화를 자동으로 삭제합니다.',
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '로컬 vs 클라우드: 스크린샷이 가는 곳',
        content: [
          '**Dayflow의 분석 경로는 세 가지이며, 스크린샷이 Mac에 머무는 것은 첫 번째뿐입니다.** 개인정보 처리방침은 스크린샷이 기기를 떠나지 않는 로컬 처리, 설정한 제공자에게 스크린샷을 바로 보내는 "내 AI 제공자", 개발사 서버에서 처리한 뒤 삭제하는 Pro용 Dayflow 클라우드를 나열합니다. 앞의 두 가지는 "기본값"으로 표시되어 있으며 단일 기본값은 명시되지 않습니다.',
          '로컬 처리는 별도로 설치하는 Ollama나 LM Studio로 실행됩니다. README에는 로컬 명령줄 도구를 통한 ChatGPT와 Claude도 나와 있는데, 이 도구들은 각 업체의 클라우드 모델을 호출하므로 이 경로는 온디바이스 추론이 아닙니다. README와 가격 페이지에 따르면 어떤 모드에서든 녹화 파일과 데이터베이스는 Mac에 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**개인정보 처리방침에 따르면 Dayflow는 데이터를 판매하지 않고, 스크린샷을 저장하지 않으며, AI 제공자가 내 데이터로 학습하는 것을 허용하지 않습니다.** 익명 사용 분석(앱 실행, 기능 사용, 충돌 보고서)은 설정에서 끌 수 있고, 구독자의 기본 계정 정보는 보관됩니다. 회사는 미국에 있습니다. 코드는 공개되어 있지만 PromptQuorum은 네트워크 트래픽을 조사하지 않았으므로 이 설명은 개발사의 주장입니다.',
          '라이선스는 MIT입니다. 무료 플랜에는 캡처, 요약, 내 제공자 키 또는 로컬 모델이 포함되며, Pro는 관리형 AI에 월 $20이고 연간 결제 혜택은 앱 안에 표시되며, Enterprise는 문의 시 견적을 받습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '내 Mac에서 분석',
            '실제 사용에서의 의미': 'README에 따르면 Ollama나 LM Studio를 쓰면 스크린샷이 기기에 머뭅니다.',
            '한계 / 주의점': '모델은 직접 설치해 실행해야 하며, 홈페이지에 따르면 로컬 추론은 GPU와 배터리 부담이 큽니다.',
          },
          {
            '장점': '무료 오픈소스',
            '실제 사용에서의 의미': 'MIT 코드이며 내 키나 로컬 모델로 무료 사용이 가능합니다.',
            '한계 / 주의점': '관리형 AI에는 유료 Pro 플랜이 필요합니다.',
          },
          {
            '장점': '자동 타임라인',
            '실제 사용에서의 의미': '타이머나 수동 메모 없이 요약이 한 일을 설명해 줍니다.',
            '한계 / 주의점': '요약 품질은 고른 모델에 달려 있으며 PromptQuorum은 측정하지 않았습니다.',
          },
          {
            '장점': '유연한 AI 선택',
            '실제 사용에서의 의미': '나중에 로컬, 내 키, Pro 사이를 바꿀 수 있습니다.',
            '한계 / 주의점': '클라우드 경로에서는 스크린샷이 제공자에게 전송됩니다.',
          },
          {
            '장점': '활발한 개발',
            '실제 사용에서의 의미': '버전 2.9.0이 2026년 11월 10일에 출시되었습니다.',
            '한계 / 주의점': 'Mac 전용이며 macOS 14 이상이 필요합니다. Windows는 발표만 되었습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Dayflow와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 도구는 다른 화면 기억 앱, 셀프 호스팅 세컨드 브레인, 온디바이스 파일 검색입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'Dayflow',
            '플랫폼': 'Mac',
            '가격과 라이선스': '무료, Pro 유료, MIT',
            '역할': '자동 업무 일지',
            '주요 차이': '오픈소스. Ollama나 LM Studio로 로컬 모델 사용',
          },
          {
            '앱': '[Perfect Memory AI](/ko/power-local-llm/perfect-memory-review)',
            '플랫폼': 'Mac, Windows',
            '가격과 라이선스': '프리미엄, 비공개 소스',
            '역할': '검색 가능한 화면·회의 기억',
            '주요 차이': '내장 AI는 개인정보 처리방침에 따르면 로컬 AI를 연결하지 않으면 개발사 서버를 거침',
          },
          {
            '앱': '[Khoj](/ko/power-local-llm/khoj-ai-second-brain-review)',
            '플랫폼': 'Mac, Windows, Linux, 웹',
            '가격과 라이선스': '무료, AGPL 3.0',
            '역할': '내 문서를 대상으로 한 AI 세컨드 브레인',
            '주요 차이': '직접 제공한 메모와 파일을 다루며 화면 활동은 대상이 아님',
          },
          {
            '앱': '[Hyperlink (Nexa AI)](/ko/power-local-llm/hyperlink-nexa-review)',
            '플랫폼': 'Mac, Windows',
            '가격과 라이선스': '무료, 독점',
            '역할': '온디바이스 파일 검색',
            '주요 차이': '하루를 기록하지 않고 내 파일을 검색함',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Dayflow를 쓰면 좋은 사용자',
        items: [
          '**작업 시간을 청구하거나 보고하는 Mac 사용자.** 타임라인과 Markdown 내보내기가 수동 메모를 대신합니다.',
          '**스탠드업을 작성하는 개발자.** 일간 보기가 어제의 하이라이트, 오늘의 할 일, 막힌 점을 초안으로 작성합니다.',
          '**화면 데이터를 비공개로 유지하려는 사람.** README에 따르면 로컬 모델을 쓰면 분석이 Mac에 머뭅니다.',
          '**오픈소스 사용자.** MIT 코드가 공개되어 있고 앱은 무료입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Dayflow를 쓰지 말아야 할 사용자',
        items: [
          '**Windows와 Linux 사용자.** Mac 앱만 있으며 Windows는 발표 단계입니다.',
          '**macOS 14보다 오래된 Mac.** README는 macOS 14 이상을 요구합니다.',
          '**로컬 모델을 실행하고 싶지 않은 사람.** Ollama나 LM Studio가 없으면 분석에 클라우드 제공자를 사용합니다.',
          '**화면을 녹화할 수 없는 사람.** 고용주나 고객의 규정이 주기적인 스크린샷을 금지할 수 있습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Dayflow는 오프라인에서 작동합니까?',
            a: 'README에 따르면 Ollama나 LM Studio의 로컬 모델을 쓰면 분석에 인터넷 연결이 필요 없습니다. 업데이트, 계정 로그인, 클라우드 모드에는 필요합니다. PromptQuorum은 오프라인에서 테스트하지 않았습니다.',
          },
          {
            q: 'Dayflow는 내 화면을 계속 녹화합니까?',
            a: '개인정보 처리방침에 따르면 드문 간격으로 스크린샷을 캡처하며, 홈페이지는 녹화 프로세스가 약 100MB의 RAM과 1% 미만의 CPU를 쓴다고 밝힙니다. 이는 개발사가 제시한 수치이며 PromptQuorum은 측정하지 않았습니다.',
          },
          {
            q: '로컬 모델 대신 ChatGPT나 Claude를 쓸 수 있습니까?',
            a: '예, 로컬 명령줄 도구(Codex CLI와 Claude Code)를 통하거나 내 Gemini, OpenAI, Anthropic 키로 가능합니다. 이 경로는 클라우드 모델을 쓰므로 스크린샷이 제공자에게 전달됩니다.',
          },
          {
            q: '녹화 파일은 어디에 저장됩니까?',
            a: 'README에 따르면 Mac의 Application Support 안에 있는 Dayflow 폴더입니다. Activity Data는 기기 간 동기화를 위해 Pro를 구독한 경우에만 개발사 서버에 저장됩니다.',
          },
          {
            q: 'Windows 버전이 있습니까?',
            a: '아직 없습니다. 홈페이지는 Windows용 Dayflow가 곧 나온다고 하며 대기자 명단을 안내하지만, Windows 빌드는 찾지 못했습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Mac을 사용하고, 업무일을 자동으로 그리고 오픈소스로 기록하고 싶으며, 분석을 내 기기에 두기 위해 Ollama나 LM Studio를 실행할 준비가 되어 있다면 Dayflow가 잘 맞습니다. MIT 라이선스, 무료 플랜, 2026년 11월 10일의 릴리스가 있습니다.',
          '주의할 점은 범위와 검증 가능성입니다. Mac 전용이고, 로컬 모델을 따로 설정해야 하며, 클라우드 경로에서는 스크린샷이 외부로 전송되고, PromptQuorum이 확인하지 못한 개인정보 보호와 정확도에 관한 주장이 있습니다. Pro를 고려하기 전에 무료 로컬 구성을 먼저 사용해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Dayflow 공식 사이트](https://www.dayflow.so/) — 기능, 요구 사항, Windows 버전 안내.',
          '[가격 페이지](https://www.dayflow.so/pricing/) — Free, Pro, Enterprise 플랜과 데이터 경로 FAQ.',
          '[개인정보 처리방침](https://www.dayflow.so/privacy/) — 로컬, 내 제공자, 클라우드 모드, 사용 분석, 데이터 처리.',
          '[GitHub 저장소](https://github.com/JerryZLiu/Dayflow) — README, MIT 라이선스, 소스 코드.',
          '[GitHub Releases](https://github.com/JerryZLiu/Dayflow/releases) — Dayflow.dmg와 버전 2.9.0의 출시일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Perfect Memory AI 리뷰](/ko/power-local-llm/perfect-memory-review) — Mac과 Windows용 화면·회의 기억 앱.',
          '[Khoj 리뷰](/ko/power-local-llm/khoj-ai-second-brain-review) — 내 문서를 대상으로 한 셀프 호스팅 AI 세컨드 브레인.',
          '[Hyperlink (Nexa AI) 리뷰](/ko/power-local-llm/hyperlink-nexa-review) — 내 파일을 대상으로 한 온디바이스 AI 검색.',
          '[Ollama 리뷰](/ko/power-local-llm/ollama-review) — Dayflow가 온디바이스 분석에 쓸 수 있는 로컬 런타임.',
          '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review) — 로컬 모델을 실행하는 데스크톱 대안.',
          '[전체 Local LLM Software Directory](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
        ],
      },
    },
  },
}

// Argos Translate Review: free, open-source offline translation library for Python and the command line
// Slug: argos-translate-review
// Companion to: on-device-ai-translator-review, translate-books-with-llms-review, sablate-review
// Facts verified 2026-11-13 against argosopentech.com, GitHub argosopentech/argos-translate (README, API, commits), PyPI argostranslate 1.11.0 (2026-02-02), argospm-index and the argos-translate-gui repo.
// Not hands-on tested. Stale-project warning is ON (last upstream update 2026-08-08, 97 days before 2026-11-13); keep it until a newer upstream update is verified.

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
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/argos-translate-review-hero-en.webp',
    title: 'Argos Translate Review: Free Offline Translation for Python and the Command Line',
    seoTitle: 'Argos Translate Review: Free Offline Translation Tool',
    intro: "Argos Translate is a free, MIT-licensed translation library that runs on your own computer: you install it with pip, download a language package once and then translate text from Python or the command line without sending it to an online service. This review covers what the maker's website, documentation, PyPI page and GitHub repository say, what the install really involves, where the network is still used and how Argos Translate compares with other translation tools in the directory.",
    metaDescription: 'Argos Translate review: free MIT-licensed offline translation for Python and the command line, installed with pip. Maintenance warning. Not tested.',
    twitterDescription: 'Argos Translate review: free open-source offline translation library for Python and the command line. Install, language packages, privacy, limits and alternatives.',
    audience: 'Developers and technical users who want free, open-source translation that runs on their own computer instead of a cloud service — covers install, language packages, privacy, maintenance, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Argos Translate review',
    targetKeywords: [
      'argos translate review',
      'argos translate offline',
      'offline translation python',
      'open source offline translator',
      'argostranslate pip install',
      'local machine translation',
      'libretranslate alternative offline',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: "**Argos Translate is a free, MIT-licensed, open-source translation library for Python and the command line that, per its README, translates offline once you have downloaded the language packages you need.** The newest release is version 1.11.0 from 2 February 2026. This review rests on the maker's website, documentation, PyPI page and GitHub repository, not on hands-on testing.",
    quickAnswerTop: {
      en: {
        question: 'Is Argos Translate a local translation tool?',
        answer: 'Yes: the README calls it an open-source offline translation library, and it runs OpenNMT models through CTranslate2 on your own computer. The network is used to install it, to fetch the package index and to download each language package; after that, translation needs no connection. PromptQuorum did not inspect network traffic, so this stays the maker\'s description.',
        bullets: [
          'It is a library and command-line tool, not a polished app: you install it with pip and install one language package per direction, for example English to German.',
          'Languages without a direct package are translated by pivoting through an intermediate language, which the documentation says costs some quality.',
          'GPU use is optional and switched on with an environment variable; CPU is the default.',
          'The desktop GUI is a separate package, last released in 2023.',
          'LibreTranslate, the web app and API built on Argos Translate, is a separate project and not covered here.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Argos Translate', anchor: 'get-it' },
      { label: 'Argos Translate at a Glance', anchor: 'at-a-glance' },
      { label: 'What Argos Translate Is', anchor: 'what-is-argos-translate' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Language Packages and Hardware', anchor: 'packages-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Argos Translate vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Argos Translate', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Argos Translate', anchor: 'who-should-not-use' },
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
            text: 'Argos Translate is a free, open-source translation library that, per its README, runs offline on your own computer after you download the language packages you need.',
          },
          {
            type: 'plain-terms',
            text: 'Think of a dictionary you install once for each language pair: after that, your computer translates text by itself, from a small script or a terminal command.',
          },
        ],
        items: [
          'Local claim: translation runs on the device with OpenNMT models; installing, updating the package index and downloading language packages use the internet.',
          `License and maker: MIT, open code published by Argos Open Tech on GitHub, with ${ST.en('argos-translate')} stars.`,
          'Install: one pip command for the library, then one package per language direction; it is a terminal tool, not a double-click app.',
          'Maintenance: the last release is version 1.11.0 from 2 February 2026; the repository itself was last changed on 8 August 2026.',
          'Gaps: no installer, a separate and older GUI, and no benchmark of translation quality in this review.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No update since 8 August 2026. The newest change to the repository is from that date and the last release, version 1.11.0, is from 2 February 2026, so the project may be unmaintained. Check the GitHub repository for newer activity before relying on it. Everything on this page is the maker\'s own description; PromptQuorum has not tested the tool.',
          },
        ],
      },
      getItArgos: {
        id: 'get-it',
        title: 'Get Argos Translate',
        content: [
          '**Argos Translate has no installer: it is a Python package, so a terminal and a working Python installation are required.** One command installs the library, and the language packages are downloaded afterwards with the included `argospm` tool.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Library and command line',
            'Get It': '`pip install argostranslate` — see the [PyPI page](https://pypi.org/project/argostranslate/) for version 1.11.0',
          },
          {
            Platform: 'Language packages',
            'Get It': '`argospm update`, then `argospm install translate-en_de` (one package per direction); [browse the package index](https://www.argosopentech.com/argospm/index/)',
          },
          {
            Platform: 'Desktop GUI',
            'Get It': '`pip install argostranslategui` — [separate repository](https://github.com/argosopentech/argos-translate-gui), last release 2023',
          },
          {
            Platform: 'Documentation',
            'Get It': '[Argos Translate documentation](https://argos-translate.readthedocs.io/en/latest/)',
          },
          {
            Platform: 'Website',
            'Get It': '[argosopentech.com](https://www.argosopentech.com)',
          },
          {
            Platform: 'Source code',
            'Get It': '[github.com/argosopentech/argos-translate](https://github.com/argosopentech/argos-translate) — MIT license',
          },
        ],
        note: 'A terminal and a Python installation are required; PromptQuorum found no .dmg, .exe or store listing. PromptQuorum found no privacy-policy page on the website, so the pages cited under Sources are the only statements available.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Argos Translate at a Glance',
        columns: ['Attribute', 'Argos Translate'],
        rows: [
          { Attribute: 'Platform', 'Argos Translate': 'Python library for macOS, Windows and Linux (maker lists no OS)' },
          { Attribute: 'Price', 'Argos Translate': 'Free' },
          { Attribute: 'License', 'Argos Translate': 'MIT, open source' },
          { Attribute: 'Runs', 'Argos Translate': 'On your computer with OpenNMT and CTranslate2, offline after package download' },
          { Attribute: 'Interfaces', 'Argos Translate': 'Python, command line, separate GUI' },
          { Attribute: 'Languages', 'Argos Translate': '100 language-pair packages in the index' },
          { Attribute: 'GPU', 'Argos Translate': 'Optional, via an environment variable' },
          { Attribute: 'Local API server', 'Argos Translate': 'Not part of it; LibreTranslate is a separate project' },
        ],
        note: 'The package count was read from the project\'s package index; the number of languages and pairs changes when packages are added. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsArgos: {
        id: 'what-is-argos-translate',
        title: 'What Argos Translate Is',
        content: [
          '**Argos Translate is a translation engine for developers, not a text box in an app.** The README describes it as an open-source offline translation library written in Python that uses OpenNMT for translation and can be used from Python, the command line or a GUI. Language models come as `.argosmodel` archives, one per direction.',
          'When no direct package exists, it pivots through an intermediate language: with Spanish to English and English to French installed, it can translate Spanish to French, at the cost of some quality, according to the documentation.',
          'The project is published under the name Argos Open Tech. LibreTranslate, a web app and API built on top of Argos Translate, is a different project with its own repository and is not reviewed here. The maker also sells custom-trained language models at $1000 per language (negotiable), per the README. This review draws on the website, documentation, PyPI and GitHub; it involved no hands-on testing, so translation quality and speed are not rated.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is a pip install, one or more language packages and a command.** The steps follow the README.',
        ],
        numberedItems: [
          {
            title: 'Install the library',
            whyItMatters: 'Run `pip install argostranslate` in a Python environment of your choice.',
          },
          {
            title: 'Download a language package',
            whyItMatters: 'Run `argospm update`, then `argospm install translate-en_de` for English to German; install the reverse direction separately if you need it.',
          },
          {
            title: 'Translate from the command line',
            whyItMatters: 'Run `argos-translate --from en --to de "Hello World!"`; the README shows the answer "Hallo Welt!".',
          },
          {
            title: 'Or call it from Python',
            whyItMatters: 'Import `argostranslate.translate` and call `translate("Hello World", "en", "es")`; the site\'s example installs the package with `argostranslate.package` first.',
          },
        ],
      },
      packagesHardware: {
        id: 'packages-hardware',
        title: 'Language Packages and Hardware',
        content: [
          '**Each language direction is its own download, so the disk space depends on how many pairs you install.** The package index linked from the website lists 100 packages covering 50 language codes, including Arabic, Chinese, Japanese, Korean, German and Portuguese; the README says "and more". PromptQuorum did not measure package sizes or translation quality.',
          'Inference runs through CTranslate2. No RAM or GPU requirement is stated; the README says GPU acceleration is switched on by setting `ARGOS_DEVICE_TYPE` to `cuda` or `auto`, so CPU is the default. Related libraries from the same maker translate HTML and files, but each is its own project.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The README calls Argos Translate an offline library, and the text you translate does not need to leave your computer.** The network is used by pip, by `argospm update` for the package index and to download each `.argosmodel` file. Dependencies such as Stanza and SentencePiece are installed with it; the newest repository commit makes Stanza optional, but PyPI 1.11.0 still lists it as required. The code is open and PromptQuorum did not examine network traffic or what the dependencies fetch at run time, so the privacy claims are the maker\'s own.',
          'The license is MIT and the software is free. The project accepts donations and lists a sponsor on its README; it makes no claim about the license of the individual language packages, which PromptQuorum did not check.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Translation on your computer',
            'What it means in real use': 'Text can be translated without an online service once packages are installed.',
            'Limitation / caveat': 'Install and package downloads need the network; traffic was not inspected.',
          },
          {
            Benefit: 'Free and open source',
            'What it means in real use': 'MIT code, no account and no per-word fee.',
            'Limitation / caveat': 'Package licenses were not checked; custom models are a paid service.',
          },
          {
            Benefit: 'Python and command line',
            'What it means in real use': 'Easy to script, batch and embed in your own tools.',
            'Limitation / caveat': 'Requires a terminal and Python; no installer.',
          },
          {
            Benefit: 'Many language packages',
            'What it means in real use': 'The index lists 100 packages across 50 language codes.',
            'Limitation / caveat': 'One download per direction; pivoting through English costs some quality.',
          },
          {
            Benefit: 'Optional GPU use',
            'What it means in real use': 'Set one variable to speed up supported hardware.',
            'Limitation / caveat': 'No speed or quality figures are published here.',
          },
          {
            Benefit: 'Established project',
            'What it means in real use': 'Release 1.11.0 is on PyPI and the repository has thousands of stars.',
            'Limitation / caveat': 'No update since 8 August 2026; the GUI is older still.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Argos Translate vs. Alternatives',
        content: [
          'These are the closest translation tools in the directory: an iPhone app, a book-translation pipeline and a subtitle app that builds on Argos Translate itself.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'Argos Translate',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Offline translation library',
            'Key difference': 'Python and command line; one package per language pair',
          },
          {
            App: '[On-Device AI Translator](/power-local-llm/on-device-ai-translator-review)',
            Platforms: 'iPhone',
            'Price and license': 'Freemium, closed source',
            Role: 'Phone translation app',
            'Key difference': 'Runs language models on the device; an app, not a library',
          },
          {
            App: '[TranslateBooksWithLLMs](/power-local-llm/translate-books-with-llms-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, AGPL-3.0',
            Role: 'Book and document translation',
            'Key difference': 'Uses a local or cloud language model rather than a dedicated translation engine',
          },
          {
            App: '[Sablate](/power-local-llm/sablate-review)',
            Platforms: 'Windows, Mac',
            'Price and license': 'Freemium, closed source',
            Role: 'Subtitle app',
            'Key difference': 'Translates subtitles with Argos, plus transcription; not a general translator',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Argos Translate',
        items: [
          '**Developers.** The Python API and command line suit scripts, pipelines and your own tools.',
          '**People who avoid online translators.** Translation runs on the computer once packages are installed, per the README.',
          '**Open-source users.** The MIT code is public and the software costs nothing.',
          '**Tinkerers with GPUs.** One environment variable enables GPU use.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Argos Translate',
        items: [
          '**Anyone who wants a double-click app.** There is no installer, and the GUI is a separate, older package.',
          '**Readers who need proven quality.** PromptQuorum did not test accuracy or speed.',
          '**Anyone who needs a maintained project.** The last repository change is dated 8 August 2026.',
          '**Phone users.** Look at On-Device AI Translator for iPhone instead.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Argos Translate work offline?',
            a: 'The README calls it an offline translation library, and translation uses installed language packages. You need a connection to install the library and download each package; PromptQuorum did not test it with the network disconnected.',
          },
          {
            q: 'How is Argos Translate different from LibreTranslate?',
            a: 'LibreTranslate is a web app and API built on top of Argos Translate, per the README. Argos Translate is the translation library itself, with a command line and a Python API; LibreTranslate is its own project and not covered here.',
          },
          {
            q: 'Can it translate between any two languages?',
            a: 'Only pairs with an installed package, directly or through an intermediate language. The documentation says pivoting, for example Spanish to English to French, works at the cost of some quality.',
          },
          {
            q: 'Does it have a graphical interface?',
            a: 'Yes, but as a separate package, argostranslategui, whose PyPI release is from 2023 and whose repository was last changed in March 2025. The main library is built for Python and the command line.',
          },
          {
            q: 'Can I get a custom language model?',
            a: 'The README offers custom models trained on your own data for $1000 per language (negotiable). PromptQuorum did not evaluate that service.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Argos Translate is a good fit if you want free, open-source translation that, per its README, runs on your own computer and that you can script from Python or a terminal. It has an MIT license, regular PyPI releases (1.10.0 in October 2025, 1.11.0 in February 2026) and a large package index.',
          'The caveats are scope and maintenance: no installer, a separate and older GUI, one download per language direction, no update since 8 August 2026, and quality and privacy claims that PromptQuorum could not check. Try one language pair on a small text before building anything on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Argos Open Tech website](https://www.argosopentech.com) — product overview, install and examples.',
          '[Documentation](https://argos-translate.readthedocs.io/en/latest/) — settings, command line and GUI pages.',
          '[GitHub repository](https://github.com/argosopentech/argos-translate) — README, MIT license and commit history.',
          '[PyPI project page](https://pypi.org/project/argostranslate/) — version 1.11.0 and release date.',
          '[Package index repository](https://github.com/argosopentech/argospm-index) — language packages and download links.',
          '[Argos Translate GUI repository](https://github.com/argosopentech/argos-translate-gui) — the separate desktop interface.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[On-Device AI Translator Review](/power-local-llm/on-device-ai-translator-review) — offline language-model translation for iPhone.',
          '[TranslateBooksWithLLMs Review](/power-local-llm/translate-books-with-llms-review) — translating whole books with a local or cloud model.',
          '[Sablate Review](/power-local-llm/sablate-review) — a subtitle app that uses Argos for offline translation.',
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
    heroImage: '/images/argos-translate-review-hero-de.webp',
    title: 'Argos Translate Rezension: Kostenlose Offline-Übersetzung für Python und die Kommandozeile',
    seoTitle: 'Argos Translate Rezension: Kostenlose Offline-Übersetzung',
    intro: 'Argos Translate ist eine kostenlose, MIT-lizenzierte Übersetzungsbibliothek, die auf Ihrem eigenen Computer läuft: Sie installieren sie mit pip, laden einmal ein Sprachpaket herunter und übersetzen Texte danach aus Python oder von der Kommandozeile, ohne sie an einen Online-Dienst zu schicken. Diese Rezension fasst zusammen, was Website, Dokumentation, PyPI-Seite und GitHub-Repository des Herstellers sagen, was die Installation tatsächlich bedeutet, wo weiterhin das Netzwerk genutzt wird und wie Argos Translate im Vergleich zu anderen Übersetzungswerkzeugen im Verzeichnis abschneidet.',
    metaDescription: 'Argos Translate Rezension: kostenlose, MIT-lizenzierte Offline-Übersetzung für Python und Kommandozeile, Installation mit pip. Wartungshinweis. Nicht getestet.',
    twitterDescription: 'Argos Translate Rezension: kostenlose Open-Source-Bibliothek für Offline-Übersetzung mit Python und Kommandozeile. Installation, Sprachpakete, Datenschutz, Grenzen, Alternativen.',
    audience: 'Entwickler und technisch versierte Nutzer, die kostenlos und quelloffen auf dem eigenen Computer statt in einem Cloud-Dienst übersetzen möchten — behandelt Installation, Sprachpakete, Datenschutz, Wartung, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Argos Translate review',
    targetKeywords: [
      'argos translate rezension',
      'argos translate offline',
      'offline übersetzung python',
      'open-source offline übersetzer',
      'argostranslate pip install',
      'lokale maschinelle übersetzung',
      'libretranslate alternative offline',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**Argos Translate ist eine kostenlose, MIT-lizenzierte Open-Source-Übersetzungsbibliothek für Python und die Kommandozeile, die laut README offline übersetzt, sobald Sie die benötigten Sprachpakete heruntergeladen haben.** Die neueste Version ist 1.11.0 vom 2. Februar 2026. Diese Rezension stützt sich auf Website, Dokumentation, PyPI-Seite und GitHub-Repository des Herstellers, nicht auf eigene Tests.',
    quickAnswerTop: {
      de: {
        question: 'Ist Argos Translate ein lokales Übersetzungswerkzeug?',
        answer: 'Ja: Das README nennt es eine quelloffene Offline-Übersetzungsbibliothek, und sie führt OpenNMT-Modelle über CTranslate2 auf Ihrem eigenen Computer aus. Das Netzwerk wird für die Installation, den Paketindex und den Download jedes Sprachpakets genutzt; danach braucht die Übersetzung keine Verbindung. PromptQuorum hat den Netzwerkverkehr nicht geprüft, daher bleibt dies die Darstellung des Herstellers.',
        bullets: [
          'Es ist eine Bibliothek und ein Kommandozeilenwerkzeug, keine ausgefeilte App: Sie installieren es mit pip und pro Richtung ein Sprachpaket, zum Beispiel Englisch nach Deutsch.',
          'Sprachen ohne direktes Paket werden über eine Zwischensprache übersetzt, was laut Dokumentation etwas Qualität kostet.',
          'Die GPU-Nutzung ist optional und wird per Umgebungsvariable eingeschaltet; standardmäßig läuft es auf der CPU.',
          'Die grafische Oberfläche ist ein eigenes Paket, zuletzt 2023 veröffentlicht.',
          'LibreTranslate, die auf Argos Translate aufbauende Web-App mit API, ist ein eigenes Projekt und wird hier nicht behandelt.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Argos Translate herunterladen', anchor: 'get-it' },
      { label: 'Argos Translate im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Argos Translate ist', anchor: 'what-is-argos-translate' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Sprachpakete und Hardware', anchor: 'packages-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Argos Translate im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Argos Translate geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Argos Translate nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'Argos Translate ist eine kostenlose Open-Source-Übersetzungsbibliothek, die laut README offline auf Ihrem eigenen Computer läuft, nachdem Sie die benötigten Sprachpakete heruntergeladen haben.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich ein Wörterbuch vor, das Sie einmal pro Sprachpaar installieren: Danach übersetzt Ihr Computer Texte selbst, aus einem kleinen Skript oder mit einem Terminalbefehl.',
          },
        ],
        items: [
          'Lokal-Aussage: Die Übersetzung läuft mit OpenNMT-Modellen auf dem Gerät; Installation, Aktualisierung des Paketindex und Download der Sprachpakete nutzen das Internet.',
          `Lizenz und Hersteller: MIT, offener Code von Argos Open Tech auf GitHub, mit ${ST.de('argos-translate')} Sternen.`,
          'Installation: ein pip-Befehl für die Bibliothek, danach ein Paket pro Sprachrichtung; es ist ein Terminalwerkzeug, keine App zum Doppelklicken.',
          'Wartung: Die letzte Version ist 1.11.0 vom 2. Februar 2026; das Repository selbst wurde zuletzt am 8. August 2026 geändert.',
          'Lücken: kein Installationsprogramm, eine eigene und ältere Oberfläche und kein Qualitätsvergleich in dieser Rezension.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Kein Update seit dem 8. August 2026. Die jüngste Änderung am Repository stammt von diesem Datum und die letzte Version 1.11.0 vom 2. Februar 2026, daher könnte das Projekt nicht mehr gepflegt werden. Prüfen Sie im GitHub-Repository auf neuere Aktivität, bevor Sie sich darauf verlassen. Alles auf dieser Seite ist die eigene Beschreibung des Herstellers; PromptQuorum hat das Werkzeug nicht getestet.',
          },
        ],
      },
      getItArgos: {
        id: 'get-it',
        title: 'Argos Translate herunterladen',
        content: [
          '**Argos Translate hat kein Installationsprogramm: Es ist ein Python-Paket, daher sind ein Terminal und eine funktionierende Python-Installation nötig.** Ein Befehl installiert die Bibliothek, die Sprachpakete laden Sie anschließend mit dem mitgelieferten Werkzeug `argospm` herunter.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Bibliothek und Kommandozeile',
            Bezugsquelle: '`pip install argostranslate` — siehe die [PyPI-Seite](https://pypi.org/project/argostranslate/) für Version 1.11.0',
          },
          {
            Plattform: 'Sprachpakete',
            Bezugsquelle: '`argospm update`, dann `argospm install translate-en_de` (ein Paket pro Richtung); [Paketindex durchsuchen](https://www.argosopentech.com/argospm/index/)',
          },
          {
            Plattform: 'Grafische Oberfläche',
            Bezugsquelle: '`pip install argostranslategui` — [eigenes Repository](https://github.com/argosopentech/argos-translate-gui), letzte Veröffentlichung 2023',
          },
          {
            Plattform: 'Dokumentation',
            Bezugsquelle: '[Argos-Translate-Dokumentation](https://argos-translate.readthedocs.io/en/latest/)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[argosopentech.com](https://www.argosopentech.com)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: '[github.com/argosopentech/argos-translate](https://github.com/argosopentech/argos-translate) — MIT-Lizenz',
          },
        ],
        note: 'Ein Terminal und eine Python-Installation sind erforderlich; PromptQuorum hat weder .dmg, .exe noch einen Store-Eintrag gefunden. PromptQuorum hat auf der Website keine Datenschutzerklärung gefunden, daher sind die unter Quellen genannten Seiten die einzigen verfügbaren Aussagen.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Argos Translate im Überblick',
        columns: ['Merkmal', 'Argos Translate'],
        rows: [
          { Merkmal: 'Plattform', 'Argos Translate': 'Python-Bibliothek für macOS, Windows und Linux (der Hersteller nennt kein Betriebssystem)' },
          { Merkmal: 'Preis', 'Argos Translate': 'Kostenlos' },
          { Merkmal: 'Lizenz', 'Argos Translate': 'MIT, Open Source' },
          { Merkmal: 'Läuft', 'Argos Translate': 'Auf Ihrem Computer mit OpenNMT und CTranslate2, nach dem Paket-Download offline' },
          { Merkmal: 'Schnittstellen', 'Argos Translate': 'Python, Kommandozeile, separate grafische Oberfläche' },
          { Merkmal: 'Sprachen', 'Argos Translate': '100 Sprachpaar-Pakete im Index' },
          { Merkmal: 'GPU', 'Argos Translate': 'Optional, per Umgebungsvariable' },
          { Merkmal: 'Lokaler API-Server', 'Argos Translate': 'Nicht enthalten; LibreTranslate ist ein eigenes Projekt' },
        ],
        note: 'Die Paketzahl wurde aus dem Paketindex des Projekts gelesen; die Zahl der Sprachen und Paare ändert sich, wenn Pakete hinzukommen. Eine fehlende Angabe auf der Website bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsArgos: {
        id: 'what-is-argos-translate',
        title: 'Was Argos Translate ist',
        content: [
          '**Argos Translate ist eine Übersetzungs-Engine für Entwickler, kein Textfeld in einer App.** Das README beschreibt sie als quelloffene Offline-Übersetzungsbibliothek in Python, die OpenNMT für die Übersetzung nutzt und aus Python, von der Kommandozeile oder über eine grafische Oberfläche bedient werden kann. Die Sprachmodelle kommen als `.argosmodel`-Archive, eines pro Richtung.',
          'Gibt es kein direktes Paket, übersetzt sie über eine Zwischensprache: Sind Spanisch–Englisch und Englisch–Französisch installiert, kann sie laut Dokumentation Spanisch nach Französisch übersetzen, allerdings mit etwas Qualitätsverlust.',
          'Das Projekt erscheint unter dem Namen Argos Open Tech. LibreTranslate, eine auf Argos Translate aufbauende Web-App mit API, ist ein anderes Projekt mit eigenem Repository und wird hier nicht besprochen. Laut README verkauft der Hersteller außerdem individuell trainierte Sprachmodelle für 1.000 $ pro Sprache (verhandelbar). Diese Rezension stützt sich auf Website, Dokumentation, PyPI und GitHub; es gab keinen eigenen Test, daher werden Übersetzungsqualität und Geschwindigkeit nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus einer pip-Installation, einem oder mehreren Sprachpaketen und einem Befehl.** Die Schritte folgen dem README.',
        ],
        numberedItems: [
          {
            title: 'Bibliothek installieren',
            whyItMatters: 'Führen Sie `pip install argostranslate` in einer Python-Umgebung Ihrer Wahl aus.',
          },
          {
            title: 'Sprachpaket herunterladen',
            whyItMatters: 'Führen Sie `argospm update` aus, dann `argospm install translate-en_de` für Englisch nach Deutsch; die Gegenrichtung installieren Sie bei Bedarf separat.',
          },
          {
            title: 'Auf der Kommandozeile übersetzen',
            whyItMatters: 'Führen Sie `argos-translate --from en --to de "Hello World!"` aus; das README zeigt als Ergebnis „Hallo Welt!“.',
          },
          {
            title: 'Oder aus Python aufrufen',
            whyItMatters: 'Importieren Sie `argostranslate.translate` und rufen Sie `translate("Hello World", "en", "es")` auf; das Beispiel der Website installiert das Paket vorher mit `argostranslate.package`.',
          },
        ],
      },
      packagesHardware: {
        id: 'packages-hardware',
        title: 'Sprachpakete und Hardware',
        content: [
          '**Jede Sprachrichtung ist ein eigener Download, der Speicherbedarf hängt also davon ab, wie viele Paare Sie installieren.** Der auf der Website verlinkte Paketindex listet 100 Pakete mit 50 Sprachcodes, darunter Arabisch, Chinesisch, Japanisch, Koreanisch, Deutsch und Portugiesisch; laut README gibt es „und mehr“. PromptQuorum hat weder Paketgrößen noch Übersetzungsqualität gemessen.',
          'Die Inferenz läuft über CTranslate2. Eine RAM- oder GPU-Anforderung wird nicht genannt; laut README schaltet man die GPU-Beschleunigung ein, indem man `ARGOS_DEVICE_TYPE` auf `cuda` oder `auto` setzt, die CPU ist also der Standard. Verwandte Bibliotheken desselben Herstellers übersetzen HTML und Dateien, sind aber jeweils eigene Projekte.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Das README nennt Argos Translate eine Offline-Bibliothek, und der zu übersetzende Text muss Ihren Computer nicht verlassen.** Das Netzwerk nutzen pip, `argospm update` für den Paketindex und der Download jeder `.argosmodel`-Datei. Abhängigkeiten wie Stanza und SentencePiece werden mitinstalliert; der neueste Commit im Repository macht Stanza optional, PyPI 1.11.0 führt es aber weiterhin als Pflicht auf. Der Code ist offen, und PromptQuorum hat weder den Netzwerkverkehr noch das, was die Abhängigkeiten zur Laufzeit laden, untersucht; die Datenschutzaussagen stammen daher vom Hersteller.',
          'Die Lizenz ist MIT, die Software ist kostenlos. Das Projekt nimmt Spenden an und nennt im README einen Sponsor; zur Lizenz der einzelnen Sprachpakete macht es keine Aussage, und PromptQuorum hat sie nicht geprüft.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Vorbehalt'],
        rows: [
          {
            Vorteil: 'Übersetzung auf Ihrem Computer',
            'Was das im Alltag bedeutet': 'Texte lassen sich nach der Paketinstallation ohne Online-Dienst übersetzen.',
            'Einschränkung / Vorbehalt': 'Installation und Paket-Downloads brauchen das Netzwerk; der Verkehr wurde nicht geprüft.',
          },
          {
            Vorteil: 'Kostenlos und quelloffen',
            'Was das im Alltag bedeutet': 'MIT-Code, kein Konto und keine Gebühr pro Wort.',
            'Einschränkung / Vorbehalt': 'Paketlizenzen wurden nicht geprüft; eigene Modelle sind eine kostenpflichtige Leistung.',
          },
          {
            Vorteil: 'Python und Kommandozeile',
            'Was das im Alltag bedeutet': 'Leicht zu skripten, im Stapel zu verarbeiten und in eigene Werkzeuge einzubauen.',
            'Einschränkung / Vorbehalt': 'Erfordert Terminal und Python; kein Installationsprogramm.',
          },
          {
            Vorteil: 'Viele Sprachpakete',
            'Was das im Alltag bedeutet': 'Der Index listet 100 Pakete mit 50 Sprachcodes.',
            'Einschränkung / Vorbehalt': 'Ein Download pro Richtung; der Umweg über Englisch kostet etwas Qualität.',
          },
          {
            Vorteil: 'Optionale GPU-Nutzung',
            'Was das im Alltag bedeutet': 'Eine Variable setzen, um unterstützte Hardware zu nutzen.',
            'Einschränkung / Vorbehalt': 'Hier werden keine Geschwindigkeits- oder Qualitätswerte genannt.',
          },
          {
            Vorteil: 'Etabliertes Projekt',
            'Was das im Alltag bedeutet': 'Version 1.11.0 liegt auf PyPI, das Repository hat Tausende Sterne.',
            'Einschränkung / Vorbehalt': 'Kein Update seit dem 8. August 2026; die Oberfläche ist noch älter.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Argos Translate im Vergleich zu Alternativen',
        content: [
          'Das sind die nächsten Übersetzungswerkzeuge im Verzeichnis: eine iPhone-App, eine Pipeline zum Übersetzen von Büchern und eine Untertitel-App, die selbst auf Argos Translate aufbaut.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'Argos Translate',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Offline-Übersetzungsbibliothek',
            'Wichtigster Unterschied': 'Python und Kommandozeile; ein Paket pro Sprachpaar',
          },
          {
            App: '[On-Device AI Translator](/de/power-local-llm/on-device-ai-translator-review)',
            Plattformen: 'iPhone',
            'Preis und Lizenz': 'Freemium, Closed Source',
            Rolle: 'Übersetzungs-App fürs Handy',
            'Wichtigster Unterschied': 'Führt Sprachmodelle auf dem Gerät aus; eine App, keine Bibliothek',
          },
          {
            App: '[TranslateBooksWithLLMs](/de/power-local-llm/translate-books-with-llms-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, AGPL-3.0',
            Rolle: 'Übersetzung von Büchern und Dokumenten',
            'Wichtigster Unterschied': 'Nutzt ein lokales oder Cloud-Sprachmodell statt einer eigenen Übersetzungs-Engine',
          },
          {
            App: '[Sablate](/de/power-local-llm/sablate-review)',
            Plattformen: 'Windows, Mac',
            'Preis und Lizenz': 'Freemium, Closed Source',
            Rolle: 'Untertitel-App',
            'Wichtigster Unterschied': 'Übersetzt Untertitel mit Argos, dazu Transkription; kein allgemeiner Übersetzer',
          },
        ],
        note: 'Plattformen, Preise und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Angaben auf der Seite des jeweiligen Projekts, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Argos Translate geeignet ist',
        items: [
          '**Entwickler.** Python-API und Kommandozeile passen zu Skripten, Pipelines und eigenen Werkzeugen.',
          '**Menschen, die Online-Übersetzer meiden.** Nach der Paketinstallation läuft die Übersetzung laut README auf dem Computer.',
          '**Open-Source-Nutzer.** Der MIT-Code ist öffentlich, die Software kostet nichts.',
          '**Tüftler mit GPU.** Eine Umgebungsvariable schaltet die GPU-Nutzung ein.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Argos Translate nicht geeignet ist',
        items: [
          '**Alle, die eine App zum Doppelklicken wollen.** Es gibt kein Installationsprogramm, und die Oberfläche ist ein eigenes, älteres Paket.',
          '**Leser, die erwiesene Qualität brauchen.** PromptQuorum hat Genauigkeit und Geschwindigkeit nicht getestet.',
          '**Alle, die ein gepflegtes Projekt brauchen.** Die letzte Änderung am Repository ist auf den 8. August 2026 datiert.',
          '**Handy-Nutzer.** Schauen Sie stattdessen auf On-Device AI Translator für das iPhone.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Argos Translate offline?',
            a: 'Das README nennt es eine Offline-Übersetzungsbibliothek, und die Übersetzung nutzt installierte Sprachpakete. Für die Installation der Bibliothek und den Download jedes Pakets brauchen Sie eine Verbindung; PromptQuorum hat es nicht ohne Netzwerk getestet.',
          },
          {
            q: 'Worin unterscheidet sich Argos Translate von LibreTranslate?',
            a: 'LibreTranslate ist laut README eine auf Argos Translate aufbauende Web-App mit API. Argos Translate ist die Übersetzungsbibliothek selbst, mit Kommandozeile und Python-API; LibreTranslate ist ein eigenes Projekt und wird hier nicht behandelt.',
          },
          {
            q: 'Kann es zwischen beliebigen zwei Sprachen übersetzen?',
            a: 'Nur zwischen Paaren mit installiertem Paket, direkt oder über eine Zwischensprache. Laut Dokumentation funktioniert der Umweg, etwa Spanisch–Englisch–Französisch, mit etwas Qualitätsverlust.',
          },
          {
            q: 'Gibt es eine grafische Oberfläche?',
            a: 'Ja, aber als eigenes Paket namens argostranslategui, dessen PyPI-Version von 2023 stammt und dessen Repository zuletzt im März 2025 geändert wurde. Die Hauptbibliothek ist für Python und die Kommandozeile gebaut.',
          },
          {
            q: 'Kann ich ein eigenes Sprachmodell bekommen?',
            a: 'Das README bietet auf Ihren Daten trainierte eigene Modelle für 1.000 $ pro Sprache (verhandelbar) an. PromptQuorum hat dieses Angebot nicht bewertet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Argos Translate passt, wenn Sie kostenlose, quelloffene Übersetzung wollen, die laut README auf Ihrem eigenen Computer läuft und sich aus Python oder dem Terminal skripten lässt. Es hat eine MIT-Lizenz, regelmäßige PyPI-Versionen (1.10.0 im Oktober 2025, 1.11.0 im Februar 2026) und einen großen Paketindex.',
          'Die Vorbehalte betreffen Umfang und Wartung: kein Installationsprogramm, eine eigene und ältere Oberfläche, ein Download pro Sprachrichtung, kein Update seit dem 8. August 2026 und Qualitäts- und Datenschutzaussagen, die PromptQuorum nicht prüfen konnte. Probieren Sie ein Sprachpaar an einem kleinen Text aus, bevor Sie etwas darauf aufbauen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Argos Open Tech](https://www.argosopentech.com) — Produktüberblick, Installation und Beispiele.',
          '[Dokumentation](https://argos-translate.readthedocs.io/en/latest/) — Einstellungen, Kommandozeile und Seiten zur Oberfläche.',
          '[GitHub-Repository](https://github.com/argosopentech/argos-translate) — README, MIT-Lizenz und Commit-Verlauf.',
          '[PyPI-Projektseite](https://pypi.org/project/argostranslate/) — Version 1.11.0 und Veröffentlichungsdatum.',
          '[Repository des Paketindex](https://github.com/argosopentech/argospm-index) — Sprachpakete und Download-Links.',
          '[Repository der Argos-Translate-Oberfläche](https://github.com/argosopentech/argos-translate-gui) — die separate Desktop-Oberfläche.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[On-Device AI Translator Rezension](/de/power-local-llm/on-device-ai-translator-review) — Offline-Übersetzung mit Sprachmodellen für das iPhone.',
          '[TranslateBooksWithLLMs Rezension](/de/power-local-llm/translate-books-with-llms-review) — ganze Bücher mit einem lokalen oder Cloud-Modell übersetzen.',
          '[Sablate Rezension](/de/power-local-llm/sablate-review) — eine Untertitel-App, die Argos für die Offline-Übersetzung nutzt.',
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
    heroImage: '/images/argos-translate-review-hero-fr.webp',
    title: 'Test d’Argos Translate : traduction hors ligne gratuite pour Python et la ligne de commande',
    seoTitle: 'Test d’Argos Translate : traduction hors ligne gratuite',
    intro: 'Argos Translate est une bibliothèque de traduction gratuite sous licence MIT qui fonctionne sur votre propre ordinateur : vous l’installez avec pip, téléchargez une fois un paquet de langue, puis traduisez du texte depuis Python ou la ligne de commande sans l’envoyer à un service en ligne. Ce test résume ce que disent le site, la documentation, la page PyPI et le dépôt GitHub de l’éditeur, ce que l’installation implique réellement, où le réseau reste utilisé et comment Argos Translate se compare aux autres outils de traduction du répertoire.',
    metaDescription: 'Test d’Argos Translate : traduction hors ligne gratuite sous licence MIT pour Python et la ligne de commande, installée avec pip. Avertissement de maintenance. Non testé.',
    twitterDescription: 'Test d’Argos Translate : bibliothèque open source gratuite de traduction hors ligne pour Python et la ligne de commande. Installation, paquets de langues, confidentialité, limites, alternatives.',
    audience: 'Développeurs et utilisateurs techniques qui veulent une traduction gratuite et open source sur leur propre ordinateur plutôt que dans un service cloud — couvre l’installation, les paquets de langues, la confidentialité, la maintenance, les limites et les alternatives.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Argos Translate review',
    targetKeywords: [
      'test argos translate',
      'argos translate hors ligne',
      'traduction hors ligne python',
      'traducteur open source hors ligne',
      'argostranslate pip install',
      'traduction automatique locale',
      'alternative libretranslate hors ligne',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**Argos Translate est une bibliothèque de traduction open source gratuite, sous licence MIT, pour Python et la ligne de commande, qui traduit hors ligne selon son README dès que vous avez téléchargé les paquets de langues nécessaires.** La version la plus récente est la 1.11.0, du 2 février 2026. Ce test s’appuie sur le site, la documentation, la page PyPI et le dépôt GitHub de l’éditeur, pas sur des essais pratiques.',
    quickAnswerTop: {
      fr: {
        question: 'Argos Translate est-il un outil de traduction local ?',
        answer: 'Oui : le README le présente comme une bibliothèque de traduction open source hors ligne, et elle exécute des modèles OpenNMT via CTranslate2 sur votre propre ordinateur. Le réseau sert à l’installer, à récupérer l’index des paquets et à télécharger chaque paquet de langue ; ensuite, la traduction n’exige aucune connexion. PromptQuorum n’a pas inspecté le trafic réseau : il s’agit donc de la description de l’éditeur.',
        bullets: [
          'C’est une bibliothèque et un outil en ligne de commande, pas une application peaufinée : vous l’installez avec pip et un paquet de langue par sens de traduction, par exemple anglais vers allemand.',
          'Les langues sans paquet direct passent par une langue intermédiaire, ce qui coûte un peu de qualité selon la documentation.',
          'L’usage du GPU est facultatif et s’active par une variable d’environnement ; le CPU est le réglage par défaut.',
          'L’interface graphique est un paquet distinct, dont la dernière publication date de 2023.',
          'LibreTranslate, l’application web et l’API construites sur Argos Translate, est un projet distinct et n’est pas traité ici.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Argos Translate', anchor: 'get-it' },
      { label: 'Argos Translate en un coup d’œil', anchor: 'at-a-glance' },
      { label: 'Ce qu’est Argos Translate', anchor: 'what-is-argos-translate' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Paquets de langues et matériel', anchor: 'packages-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Argos Translate face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Argos Translate est adapté', anchor: 'who-should-use' },
      { label: 'Pour qui Argos Translate n’est pas adapté', anchor: 'who-should-not-use' },
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
            text: 'Argos Translate est une bibliothèque de traduction open source gratuite qui, selon son README, fonctionne hors ligne sur votre propre ordinateur une fois les paquets de langues nécessaires téléchargés.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez un dictionnaire que vous installez une fois par paire de langues : ensuite, votre ordinateur traduit seul le texte, depuis un petit script ou une commande de terminal.',
          },
        ],
        items: [
          'Affirmation locale : la traduction s’exécute sur l’appareil avec des modèles OpenNMT ; l’installation, la mise à jour de l’index des paquets et le téléchargement des paquets de langues utilisent Internet.',
          `Licence et éditeur : MIT, code ouvert publié par Argos Open Tech sur GitHub, avec ${ST.fr('argos-translate')} étoiles.`,
          'Installation : une commande pip pour la bibliothèque, puis un paquet par sens de traduction ; c’est un outil de terminal, pas une application à double-clic.',
          'Maintenance : la dernière version est la 1.11.0 du 2 février 2026 ; le dépôt lui-même a été modifié pour la dernière fois le 8 août 2026.',
          'Lacunes : pas d’installateur, une interface distincte et plus ancienne, et aucune mesure de la qualité de traduction dans ce test.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Aucune mise à jour depuis le 8 août 2026. La modification la plus récente du dépôt date de ce jour et la dernière version, la 1.11.0, du 2 février 2026 ; le projet pourrait donc ne plus être maintenu. Vérifiez l’activité récente sur le dépôt GitHub avant de vous y fier. Tout ce que contient cette page est la description de l’éditeur ; PromptQuorum n’a pas testé l’outil.',
          },
        ],
      },
      getItArgos: {
        id: 'get-it',
        title: 'Obtenir Argos Translate',
        content: [
          '**Argos Translate n’a pas d’installateur : c’est un paquet Python, il faut donc un terminal et une installation Python fonctionnelle.** Une commande installe la bibliothèque, puis les paquets de langues se téléchargent avec l’outil `argospm` fourni.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            Plateforme: 'Bibliothèque et ligne de commande',
            'Où la trouver': '`pip install argostranslate` — voir la [page PyPI](https://pypi.org/project/argostranslate/) pour la version 1.11.0',
          },
          {
            Plateforme: 'Paquets de langues',
            'Où la trouver': '`argospm update`, puis `argospm install translate-en_de` (un paquet par sens) ; [parcourir l’index des paquets](https://www.argosopentech.com/argospm/index/)',
          },
          {
            Plateforme: 'Interface graphique',
            'Où la trouver': '`pip install argostranslategui` — [dépôt distinct](https://github.com/argosopentech/argos-translate-gui), dernière publication en 2023',
          },
          {
            Plateforme: 'Documentation',
            'Où la trouver': '[Documentation d’Argos Translate](https://argos-translate.readthedocs.io/en/latest/)',
          },
          {
            Plateforme: 'Site web',
            'Où la trouver': '[argosopentech.com](https://www.argosopentech.com)',
          },
          {
            Plateforme: 'Code source',
            'Où la trouver': '[github.com/argosopentech/argos-translate](https://github.com/argosopentech/argos-translate) — licence MIT',
          },
        ],
        note: 'Un terminal et une installation Python sont nécessaires ; PromptQuorum n’a trouvé ni .dmg, ni .exe, ni fiche de boutique. PromptQuorum n’a trouvé aucune page de politique de confidentialité sur le site : les pages citées dans Sources sont les seules déclarations disponibles.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Argos Translate en un coup d’œil',
        columns: ['Attribut', 'Argos Translate'],
        rows: [
          { Attribut: 'Plateforme', 'Argos Translate': 'Bibliothèque Python pour macOS, Windows et Linux (l’éditeur n’indique aucun système)' },
          { Attribut: 'Prix', 'Argos Translate': 'Gratuit' },
          { Attribut: 'Licence', 'Argos Translate': 'MIT, open source' },
          { Attribut: 'Exécution', 'Argos Translate': 'Sur votre ordinateur avec OpenNMT et CTranslate2, hors ligne après le téléchargement des paquets' },
          { Attribut: 'Interfaces', 'Argos Translate': 'Python, ligne de commande, interface graphique distincte' },
          { Attribut: 'Langues', 'Argos Translate': '100 paquets de paires de langues dans l’index' },
          { Attribut: 'GPU', 'Argos Translate': 'Facultatif, via une variable d’environnement' },
          { Attribut: 'Serveur API local', 'Argos Translate': 'Non inclus ; LibreTranslate est un projet distinct' },
        ],
        note: 'Le nombre de paquets a été lu dans l’index des paquets du projet ; le nombre de langues et de paires évolue à mesure que des paquets s’ajoutent. Une information absente du site signifie inconnue, pas non prise en charge.',
      },
      whatIsArgos: {
        id: 'what-is-argos-translate',
        title: 'Ce qu’est Argos Translate',
        content: [
          '**Argos Translate est un moteur de traduction pour développeurs, pas un champ de texte dans une application.** Le README le décrit comme une bibliothèque de traduction open source hors ligne écrite en Python, qui s’appuie sur OpenNMT et s’utilise depuis Python, la ligne de commande ou une interface graphique. Les modèles de langue se présentent sous forme d’archives `.argosmodel`, une par sens de traduction.',
          'En l’absence de paquet direct, il passe par une langue intermédiaire : avec espagnol vers anglais et anglais vers français installés, il peut traduire de l’espagnol vers le français, au prix d’une certaine perte de qualité selon la documentation.',
          'Le projet est publié sous le nom Argos Open Tech. LibreTranslate, une application web et une API construites sur Argos Translate, est un autre projet avec son propre dépôt et n’est pas évalué ici. Selon le README, l’éditeur vend aussi des modèles de langue entraînés sur mesure à 1 000 $ par langue (négociable). Ce test s’appuie sur le site, la documentation, PyPI et GitHub ; il n’a donné lieu à aucun essai pratique, de sorte que la qualité et la vitesse de traduction ne sont pas évaluées.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          '**La mise en route se résume à une installation pip, un ou plusieurs paquets de langues et une commande.** Les étapes suivent le README.',
        ],
        numberedItems: [
          {
            title: 'Installer la bibliothèque',
            whyItMatters: 'Exécutez `pip install argostranslate` dans l’environnement Python de votre choix.',
          },
          {
            title: 'Télécharger un paquet de langue',
            whyItMatters: 'Exécutez `argospm update`, puis `argospm install translate-en_de` pour l’anglais vers l’allemand ; installez le sens inverse séparément si nécessaire.',
          },
          {
            title: 'Traduire en ligne de commande',
            whyItMatters: 'Exécutez `argos-translate --from en --to de "Hello World!"` ; le README affiche la réponse « Hallo Welt! ».',
          },
          {
            title: 'Ou l’appeler depuis Python',
            whyItMatters: 'Importez `argostranslate.translate` et appelez `translate("Hello World", "en", "es")` ; l’exemple du site installe d’abord le paquet avec `argostranslate.package`.',
          },
        ],
      },
      packagesHardware: {
        id: 'packages-hardware',
        title: 'Paquets de langues et matériel',
        content: [
          '**Chaque sens de traduction est un téléchargement distinct : l’espace disque dépend donc du nombre de paires installées.** L’index des paquets lié depuis le site répertorie 100 paquets couvrant 50 codes de langue, dont l’arabe, le chinois, le japonais, le coréen, l’allemand et le portugais ; le README ajoute « et plus ». PromptQuorum n’a mesuré ni la taille des paquets ni la qualité de traduction.',
          'L’inférence passe par CTranslate2. Aucune exigence de RAM ou de GPU n’est indiquée ; selon le README, l’accélération GPU s’active en définissant `ARGOS_DEVICE_TYPE` sur `cuda` ou `auto`, le CPU est donc le réglage par défaut. Des bibliothèques voisines du même éditeur traduisent le HTML et les fichiers, mais chacune est un projet à part.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          '**Le README qualifie Argos Translate de bibliothèque hors ligne, et le texte à traduire n’a pas besoin de quitter votre ordinateur.** Le réseau est utilisé par pip, par `argospm update` pour l’index des paquets et pour télécharger chaque fichier `.argosmodel`. Des dépendances comme Stanza et SentencePiece sont installées avec lui ; le commit le plus récent du dépôt rend Stanza facultatif, mais PyPI 1.11.0 le liste toujours comme obligatoire. Le code est ouvert et PromptQuorum n’a examiné ni le trafic réseau ni ce que les dépendances récupèrent à l’exécution ; les affirmations de confidentialité sont donc celles de l’éditeur.',
          'La licence est MIT et le logiciel est gratuit. Le projet accepte les dons et cite un sponsor dans son README ; il ne dit rien de la licence de chaque paquet de langue, que PromptQuorum n’a pas vérifiée.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'Ce que cela donne à l’usage', 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Traduction sur votre ordinateur',
            'Ce que cela donne à l’usage': 'Le texte peut être traduit sans service en ligne une fois les paquets installés.',
            'Limite / réserve': 'L’installation et les téléchargements de paquets exigent le réseau ; le trafic n’a pas été inspecté.',
          },
          {
            Avantage: 'Gratuit et open source',
            'Ce que cela donne à l’usage': 'Code MIT, pas de compte, pas de frais au mot.',
            'Limite / réserve': 'Les licences des paquets n’ont pas été vérifiées ; les modèles sur mesure sont un service payant.',
          },
          {
            Avantage: 'Python et ligne de commande',
            'Ce que cela donne à l’usage': 'Facile à scripter, à traiter par lots et à intégrer à vos propres outils.',
            'Limite / réserve': 'Exige un terminal et Python ; pas d’installateur.',
          },
          {
            Avantage: 'Nombreux paquets de langues',
            'Ce que cela donne à l’usage': 'L’index répertorie 100 paquets pour 50 codes de langue.',
            'Limite / réserve': 'Un téléchargement par sens ; passer par l’anglais coûte un peu de qualité.',
          },
          {
            Avantage: 'Usage du GPU en option',
            'Ce que cela donne à l’usage': 'Une variable à définir pour exploiter le matériel pris en charge.',
            'Limite / réserve': 'Aucune mesure de vitesse ou de qualité n’est publiée ici.',
          },
          {
            Avantage: 'Projet établi',
            'Ce que cela donne à l’usage': 'La version 1.11.0 est sur PyPI et le dépôt compte des milliers d’étoiles.',
            'Limite / réserve': 'Aucune mise à jour depuis le 8 août 2026 ; l’interface graphique est plus ancienne encore.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Argos Translate face aux alternatives',
        content: [
          'Voici les outils de traduction les plus proches du répertoire : une application iPhone, un pipeline de traduction de livres et une application de sous-titres qui s’appuie elle-même sur Argos Translate.',
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'Argos Translate',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, MIT',
            Rôle: 'Bibliothèque de traduction hors ligne',
            'Différence clé': 'Python et ligne de commande ; un paquet par paire de langues',
          },
          {
            Application: '[On-Device AI Translator](/fr/power-local-llm/on-device-ai-translator-review)',
            Plateformes: 'iPhone',
            'Prix et licence': 'Freemium, code fermé',
            Rôle: 'Application de traduction pour téléphone',
            'Différence clé': 'Exécute des modèles de langage sur l’appareil ; une application, pas une bibliothèque',
          },
          {
            Application: '[TranslateBooksWithLLMs](/fr/power-local-llm/translate-books-with-llms-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            Rôle: 'Traduction de livres et de documents',
            'Différence clé': 'S’appuie sur un modèle de langage local ou cloud plutôt que sur un moteur de traduction dédié',
          },
          {
            Application: '[Sablate](/fr/power-local-llm/sablate-review)',
            Plateformes: 'Windows, Mac',
            'Prix et licence': 'Freemium, code fermé',
            Rôle: 'Application de sous-titres',
            'Différence clé': 'Traduit les sous-titres avec Argos, plus la transcription ; pas un traducteur généraliste',
          },
        ],
        note: 'Les plateformes, prix et fonctionnalités des applications tierces changent souvent. Vérifiez les détails actuels sur la page de chaque projet avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Argos Translate est adapté',
        items: [
          '**Les développeurs.** L’API Python et la ligne de commande conviennent aux scripts, aux pipelines et à vos propres outils.',
          '**Ceux qui évitent les traducteurs en ligne.** La traduction s’exécute sur l’ordinateur une fois les paquets installés, selon le README.',
          '**Les adeptes de l’open source.** Le code MIT est public et le logiciel ne coûte rien.',
          '**Les bricoleurs équipés d’un GPU.** Une variable d’environnement active l’usage du GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui Argos Translate n’est pas adapté',
        items: [
          '**Ceux qui veulent une application à double-clic.** Il n’y a pas d’installateur et l’interface graphique est un paquet distinct, plus ancien.',
          '**Les lecteurs qui exigent une qualité prouvée.** PromptQuorum n’a testé ni la précision ni la vitesse.',
          '**Ceux qui ont besoin d’un projet maintenu.** La dernière modification du dépôt date du 8 août 2026.',
          '**Les utilisateurs de téléphone.** Regardez plutôt On-Device AI Translator pour iPhone.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Argos Translate fonctionne-t-il hors ligne ?',
            a: 'Le README le présente comme une bibliothèque de traduction hors ligne, et la traduction s’appuie sur les paquets de langues installés. Il faut une connexion pour installer la bibliothèque et télécharger chaque paquet ; PromptQuorum ne l’a pas testé sans réseau.',
          },
          {
            q: 'En quoi Argos Translate diffère-t-il de LibreTranslate ?',
            a: 'Selon le README, LibreTranslate est une application web et une API construites sur Argos Translate. Argos Translate est la bibliothèque de traduction elle-même, avec une ligne de commande et une API Python ; LibreTranslate est un projet distinct et n’est pas traité ici.',
          },
          {
            q: 'Peut-il traduire entre deux langues quelconques ?',
            a: 'Seulement entre des paires dont un paquet est installé, directement ou via une langue intermédiaire. La documentation indique que ce détour, par exemple espagnol vers anglais puis français, fonctionne au prix d’une certaine perte de qualité.',
          },
          {
            q: 'Existe-t-il une interface graphique ?',
            a: 'Oui, mais sous forme d’un paquet distinct, argostranslategui, dont la version PyPI date de 2023 et dont le dépôt a été modifié pour la dernière fois en mars 2025. La bibliothèque principale est conçue pour Python et la ligne de commande.',
          },
          {
            q: 'Puis-je obtenir un modèle de langue sur mesure ?',
            a: 'Le README propose des modèles entraînés sur vos propres données pour 1 000 $ par langue (négociable). PromptQuorum n’a pas évalué ce service.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Argos Translate convient si vous voulez une traduction gratuite et open source qui, selon son README, s’exécute sur votre propre ordinateur et que vous pouvez scripter depuis Python ou un terminal. Il offre une licence MIT, des versions PyPI régulières (1.10.0 en octobre 2025, 1.11.0 en février 2026) et un vaste index de paquets.',
          'Les réserves tiennent au périmètre et à la maintenance : pas d’installateur, une interface distincte et plus ancienne, un téléchargement par sens de traduction, aucune mise à jour depuis le 8 août 2026, et des affirmations de qualité et de confidentialité que PromptQuorum n’a pas pu vérifier. Essayez une paire de langues sur un petit texte avant de bâtir quoi que ce soit dessus.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d’Argos Open Tech](https://www.argosopentech.com) — présentation du produit, installation et exemples.',
          '[Documentation](https://argos-translate.readthedocs.io/en/latest/) — réglages, ligne de commande et pages sur l’interface graphique.',
          '[Dépôt GitHub](https://github.com/argosopentech/argos-translate) — README, licence MIT et historique des commits.',
          '[Page du projet sur PyPI](https://pypi.org/project/argostranslate/) — version 1.11.0 et date de publication.',
          '[Dépôt de l’index des paquets](https://github.com/argosopentech/argospm-index) — paquets de langues et liens de téléchargement.',
          '[Dépôt de l’interface graphique d’Argos Translate](https://github.com/argosopentech/argos-translate-gui) — l’interface de bureau distincte.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’On-Device AI Translator](/fr/power-local-llm/on-device-ai-translator-review) — traduction hors ligne par modèles de langage pour iPhone.',
          '[Test de TranslateBooksWithLLMs](/fr/power-local-llm/translate-books-with-llms-review) — traduire des livres entiers avec un modèle local ou cloud.',
          '[Test de Sablate](/fr/power-local-llm/sablate-review) — une application de sous-titres qui utilise Argos pour la traduction hors ligne.',
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
    heroImage: '/images/argos-translate-review-hero-ja.webp',
    title: 'Argos Translateレビュー：Pythonとコマンドラインでのオフライン無料翻訳',
    seoTitle: 'Argos Translateレビュー：無料のオフライン翻訳ツール',
    intro: 'Argos Translateは、お使いのPC上で動くMITライセンスの無料翻訳ライブラリです。pipでインストールし、言語パッケージを一度ダウンロードすれば、テキストをオンラインサービスに送らずに、PythonやコマンドラインからPC上で翻訳できます。このレビューでは、開発元のWebサイト、ドキュメント、PyPIのページ、GitHubリポジトリが述べている内容、インストールの実際の手間、ネットワークがどこで使われるか、ディレクトリ内の他の翻訳ツールとの違いをまとめます。',
    metaDescription: 'Argos Translateレビュー：PythonとコマンドラインのMIT無料オフライン翻訳。pipでインストール。保守に関する注意あり。未テスト。',
    twitterDescription: 'Argos Translateレビュー：Pythonとコマンドラインのオープンソースオフライン翻訳ライブラリ。インストール、言語パッケージ、プライバシー、制限、代替ツール。',
    audience: 'クラウドサービスではなく自分のPC上で、無料のオープンソース翻訳を使いたい開発者や技術に詳しい方向けです。インストール、言語パッケージ、プライバシー、保守状況、制限、代替ツールを扱います。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Argos Translate review',
    targetKeywords: [
      'argos translate レビュー',
      'argos translate オフライン',
      'python オフライン翻訳',
      'オープンソース オフライン翻訳',
      'argostranslate pip install',
      'ローカル機械翻訳',
      'libretranslate 代替 オフライン',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**Argos Translateは、Pythonとコマンドライン向けのMITライセンスの無料オープンソース翻訳ライブラリで、READMEによれば、必要な言語パッケージをダウンロードしたあとはオフラインで翻訳できます。**最新リリースは2026年2月2日のバージョン1.11.0です。このレビューは、開発元のWebサイト、ドキュメント、PyPIのページ、GitHubリポジトリに基づいており、実機での検証は行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'Argos Translateはローカルで動く翻訳ツールですか？',
        answer: 'はい。READMEはオープンソースのオフライン翻訳ライブラリと説明しており、OpenNMTのモデルをCTranslate2経由でお使いのPC上で実行します。ネットワークが使われるのは、インストール、パッケージ索引の取得、各言語パッケージのダウンロードのときで、その後の翻訳に接続は不要です。PromptQuorumはネットワーク通信を調べていないため、これは開発元の説明にとどまります。',
        bullets: [
          '完成されたアプリではなく、ライブラリとコマンドラインツールです。pipでインストールし、英語からドイツ語のように、方向ごとに言語パッケージを1つずつ入れます。',
          '直接のパッケージがない言語は、中間言語を経由して翻訳され、ドキュメントによると多少品質が下がります。',
          'GPUの利用は任意で、環境変数で有効にします。既定はCPUです。',
          'デスクトップ用GUIは別パッケージで、最後の公開は2023年です。',
          'Argos Translateを土台にしたWebアプリとAPIのLibreTranslateは別プロジェクトで、ここでは扱いません。',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Argos Translateの入手方法', anchor: 'get-it' },
      { label: 'Argos Translateの概要', anchor: 'at-a-glance' },
      { label: 'Argos Translateとは', anchor: 'what-is-argos-translate' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '言語パッケージとハードウェア', anchor: 'packages-hardware' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'Argos Translateと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Argos Translateが向いている人', anchor: 'who-should-use' },
      { label: 'Argos Translateが向いていない人', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'Argos Translateは無料のオープンソース翻訳ライブラリで、READMEによれば、必要な言語パッケージをダウンロードしたあとはお使いのPC上でオフライン動作します。',
          },
          {
            type: 'plain-terms',
            text: '言語の組み合わせごとに一度インストールする辞書のようなものです。そのあとは、小さなスクリプトやターミナルのコマンドから、PCが自分でテキストを翻訳します。',
          },
        ],
        items: [
          'ローカル動作：翻訳はOpenNMTのモデルで端末上で実行されます。インストール、パッケージ索引の更新、言語パッケージのダウンロードにはインターネットを使います。',
          `ライセンスと開発元：MIT。Argos Open TechがGitHubで公開するオープンなコードで、スターは${ST.ja('argos-translate')}です。`,
          'インストール：ライブラリはpipコマンド1つ、そのあと翻訳の方向ごとにパッケージを1つ入れます。ダブルクリックのアプリではなく、ターミナルで使うツールです。',
          '保守：最後のリリースは2026年2月2日のバージョン1.11.0で、リポジトリ自体の最終変更は2026年8月8日です。',
          '不足点：インストーラーがないこと、GUIが別で古いこと、このレビューでは翻訳品質を測っていないことです。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年8月8日以降、更新がありません。リポジトリの最新の変更はこの日付で、最後のリリースであるバージョン1.11.0は2026年2月2日のものです。そのため、プロジェクトは保守されていない可能性があります。利用を決める前に、GitHubリポジトリで新しい動きがないかご確認ください。このページの内容はすべて開発元自身の説明であり、PromptQuorumはこのツールをテストしていません。',
          },
        ],
      },
      getItArgos: {
        id: 'get-it',
        title: 'Argos Translateの入手方法',
        content: [
          '**Argos Translateにはインストーラーがありません。Pythonパッケージなので、ターミナルと動作するPython環境が必要です。**コマンド1つでライブラリをインストールし、言語パッケージはそのあと付属の`argospm`ツールでダウンロードします。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'ライブラリとコマンドライン',
            '入手先': '`pip install argostranslate` — バージョン1.11.0は[PyPIのページ](https://pypi.org/project/argostranslate/)を参照',
          },
          {
            'プラットフォーム': '言語パッケージ',
            '入手先': '`argospm update`のあと`argospm install translate-en_de`（方向ごとに1パッケージ）。[パッケージ索引を見る](https://www.argosopentech.com/argospm/index/)',
          },
          {
            'プラットフォーム': 'デスクトップGUI',
            '入手先': '`pip install argostranslategui` — [別リポジトリ](https://github.com/argosopentech/argos-translate-gui)、最後の公開は2023年',
          },
          {
            'プラットフォーム': 'ドキュメント',
            '入手先': '[Argos Translateのドキュメント](https://argos-translate.readthedocs.io/en/latest/)',
          },
          {
            'プラットフォーム': 'Webサイト',
            '入手先': '[argosopentech.com](https://www.argosopentech.com)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[github.com/argosopentech/argos-translate](https://github.com/argosopentech/argos-translate) — MITライセンス',
          },
        ],
        note: 'ターミナルとPython環境が必要です。PromptQuorumは.dmg、.exe、ストアの掲載ページを見つけられませんでした。PromptQuorumはWebサイトでプライバシーポリシーのページを見つけられなかったため、情報源に挙げたページが唯一の記述です。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Argos Translateの概要',
        columns: ['項目', 'Argos Translate'],
        rows: [
          { '項目': 'プラットフォーム', 'Argos Translate': 'macOS・Windows・Linux向けPythonライブラリ（開発元はOSを明記していません）' },
          { '項目': '価格', 'Argos Translate': '無料' },
          { '項目': 'ライセンス', 'Argos Translate': 'MIT、オープンソース' },
          { '項目': '動作場所', 'Argos Translate': 'お使いのPC上でOpenNMTとCTranslate2を使用。パッケージのダウンロード後はオフライン' },
          { '項目': 'インターフェース', 'Argos Translate': 'Python、コマンドライン、別パッケージのGUI' },
          { '項目': '言語', 'Argos Translate': '索引に100の言語ペアパッケージ' },
          { '項目': 'GPU', 'Argos Translate': '任意。環境変数で有効化' },
          { '項目': 'ローカルAPIサーバー', 'Argos Translate': '含まれません。LibreTranslateは別プロジェクト' },
        ],
        note: 'パッケージ数はプロジェクトのパッケージ索引から読み取った値で、パッケージが追加されると言語数やペア数は変わります。サイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsArgos: {
        id: 'what-is-argos-translate',
        title: 'Argos Translateとは',
        content: [
          '**Argos Translateは開発者向けの翻訳エンジンで、アプリの中のテキストボックスではありません。**READMEは、Pythonで書かれたオープンソースのオフライン翻訳ライブラリと説明しており、翻訳にOpenNMTを使い、Python、コマンドライン、GUIから利用できます。言語モデルは方向ごとに1つの`.argosmodel`アーカイブとして提供されます。',
          '直接のパッケージがない場合は中間言語を経由します。ドキュメントによると、スペイン語から英語、英語からフランス語がインストールされていれば、スペイン語からフランス語へも翻訳できますが、多少品質が下がります。',
          'プロジェクトはArgos Open Techの名前で公開されています。Argos Translateを土台にしたWebアプリとAPIのLibreTranslateは、独自のリポジトリを持つ別プロジェクトで、ここでは扱いません。READMEによると、開発元は自分のデータで学習したカスタム言語モデルを1言語あたり1,000ドル（交渉可）で提供しています。このレビューはWebサイト、ドキュメント、PyPI、GitHubに基づいており、実機での検証は行っていないため、翻訳品質と速度は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**手順は、pipでのインストール、言語パッケージの追加、コマンドの実行です。**READMEの手順に沿っています。',
        ],
        numberedItems: [
          {
            title: 'ライブラリをインストールする',
            whyItMatters: '好きなPython環境で`pip install argostranslate`を実行します。',
          },
          {
            title: '言語パッケージをダウンロードする',
            whyItMatters: '`argospm update`を実行し、英語からドイツ語なら`argospm install translate-en_de`を実行します。逆方向が必要なら別途インストールします。',
          },
          {
            title: 'コマンドラインで翻訳する',
            whyItMatters: '`argos-translate --from en --to de "Hello World!"`を実行します。READMEでは「Hallo Welt!」という結果が示されています。',
          },
          {
            title: 'またはPythonから呼び出す',
            whyItMatters: '`argostranslate.translate`をインポートして`translate("Hello World", "en", "es")`を呼び出します。サイトの例では、先に`argostranslate.package`でパッケージをインストールしています。',
          },
        ],
      },
      packagesHardware: {
        id: 'packages-hardware',
        title: '言語パッケージとハードウェア',
        content: [
          '**言語の方向ごとに別のダウンロードになるため、ディスク容量はインストールするペアの数しだいです。**Webサイトからリンクされているパッケージ索引には、アラビア語、中国語、日本語、韓国語、ドイツ語、ポルトガル語を含む50の言語コードにわたる100のパッケージが載っています。READMEには「ほかにも」とあります。PromptQuorumはパッケージのサイズも翻訳品質も測っていません。',
          '推論はCTranslate2で実行されます。RAMやGPUの要件は示されていません。READMEによると、`ARGOS_DEVICE_TYPE`を`cuda`または`auto`に設定するとGPU高速化が有効になるため、既定はCPUです。同じ開発元の関連ライブラリにはHTMLやファイルを翻訳するものがありますが、それぞれ別プロジェクトです。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**READMEはArgos Translateをオフラインのライブラリと説明しており、翻訳するテキストがPCの外に出る必要はありません。**ネットワークを使うのは、pip、パッケージ索引のための`argospm update`、各`.argosmodel`ファイルのダウンロードです。StanzaやSentencePieceなどの依存ライブラリも一緒にインストールされます。リポジトリの最新コミットではStanzaが任意になりましたが、PyPIの1.11.0では今も必須として載っています。コードは公開されていますが、PromptQuorumはネットワーク通信や、依存ライブラリが実行時に取得するものを調べていないため、プライバシーに関する記述は開発元自身のものです。',
          'ライセンスはMITで、ソフトウェアは無料です。プロジェクトは寄付を受け付け、READMEにスポンサーを掲載しています。個々の言語パッケージのライセンスについては記載がなく、PromptQuorumも確認していません。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: ['メリット', '実際の使い勝手', '制限・注意点'],
        rows: [
          {
            'メリット': 'お使いのPC上での翻訳',
            '実際の使い勝手': 'パッケージをインストールしたあとは、オンラインサービスなしでテキストを翻訳できます。',
            '制限・注意点': 'インストールとパッケージのダウンロードにはネットワークが必要で、通信は調べていません。',
          },
          {
            'メリット': '無料でオープンソース',
            '実際の使い勝手': 'MITライセンスのコードで、アカウントも単語ごとの料金も不要です。',
            '制限・注意点': 'パッケージのライセンスは確認しておらず、カスタムモデルは有料サービスです。',
          },
          {
            'メリット': 'Pythonとコマンドライン',
            '実際の使い勝手': 'スクリプト化、一括処理、自作ツールへの組み込みが簡単です。',
            '制限・注意点': 'ターミナルとPythonが必要で、インストーラーはありません。',
          },
          {
            'メリット': '多くの言語パッケージ',
            '実際の使い勝手': '索引には50の言語コードにわたる100のパッケージが載っています。',
            '制限・注意点': '方向ごとに1回のダウンロードが必要で、英語経由だと多少品質が下がります。',
          },
          {
            'メリット': 'GPUの任意利用',
            '実際の使い勝手': '変数を1つ設定するだけで、対応ハードウェアを使えます。',
            '制限・注意点': '速度や品質の数値は、ここでは示していません。',
          },
          {
            'メリット': '実績のあるプロジェクト',
            '実際の使い勝手': 'バージョン1.11.0がPyPIにあり、リポジトリのスターは数千あります。',
            '制限・注意点': '2026年8月8日以降は更新がなく、GUIはさらに古いです。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Argos Translateと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い翻訳ツールは、iPhoneアプリ、書籍翻訳パイプライン、そしてArgos Translate自体を使う字幕アプリです。',
        ],
        columns: ['アプリ', '対応', '価格とライセンス', '役割', '主な違い'],
        rows: [
          {
            'アプリ': 'Argos Translate',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': 'オフライン翻訳ライブラリ',
            '主な違い': 'Pythonとコマンドライン。言語ペアごとに1パッケージ',
          },
          {
            'アプリ': '[On-Device AI Translator](/ja/power-local-llm/on-device-ai-translator-review)',
            '対応': 'iPhone',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            '役割': 'スマートフォン向け翻訳アプリ',
            '主な違い': '言語モデルを端末上で実行。ライブラリではなくアプリ',
          },
          {
            'アプリ': '[TranslateBooksWithLLMs](/ja/power-local-llm/translate-books-with-llms-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、AGPL-3.0',
            '役割': '書籍・文書の翻訳',
            '主な違い': '専用の翻訳エンジンではなく、ローカルまたはクラウドの言語モデルを使用',
          },
          {
            'アプリ': '[Sablate](/ja/power-local-llm/sablate-review)',
            '対応': 'Windows、Mac',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            '役割': '字幕アプリ',
            '主な違い': 'Argosで字幕を翻訳し、文字起こしもできる。汎用の翻訳ツールではない',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Argos Translateが向いている人',
        items: [
          '**開発者。**PythonのAPIとコマンドラインは、スクリプトやパイプライン、自作ツールに向いています。',
          '**オンライン翻訳を避けたい人。**READMEによれば、パッケージをインストールしたあとの翻訳はPC上で動きます。',
          '**オープンソースを好む人。**MITのコードが公開されていて、ソフトウェアは無料です。',
          '**GPUを使って試したい人。**環境変数を1つ設定するとGPUを使えます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Argos Translateが向いていない人',
        items: [
          '**ダブルクリックで使えるアプリがほしい人。**インストーラーはなく、GUIは別の古いパッケージです。',
          '**実証済みの品質が必要な人。**PromptQuorumは精度も速度もテストしていません。',
          '**保守されているプロジェクトが必要な人。**リポジトリの最終変更は2026年8月8日です。',
          '**スマートフォンで使いたい人。**代わりにiPhone向けのOn-Device AI Translatorをご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Argos Translateはオフラインで動きますか？',
            a: 'READMEはオフライン翻訳ライブラリと説明しており、翻訳にはインストール済みの言語パッケージを使います。ライブラリのインストールと各パッケージのダウンロードには接続が必要です。PromptQuorumはネットワークを切った状態では試していません。',
          },
          {
            q: 'Argos TranslateとLibreTranslateはどう違いますか？',
            a: 'READMEによれば、LibreTranslateはArgos Translateを土台にしたWebアプリとAPIです。Argos Translateは翻訳ライブラリそのもので、コマンドラインとPython APIがあります。LibreTranslateは別プロジェクトで、ここでは扱いません。',
          },
          {
            q: '任意の2言語間で翻訳できますか？',
            a: 'パッケージがインストールされているペアに限られ、直接または中間言語を経由します。ドキュメントによると、スペイン語から英語、フランス語のような経由は、多少品質が下がるものの機能します。',
          },
          {
            q: 'グラフィカルなインターフェースはありますか？',
            a: 'ありますが、別パッケージのargostranslateguiで、PyPIの公開は2023年、リポジトリの最終変更は2025年3月です。メインのライブラリはPythonとコマンドライン向けに作られています。',
          },
          {
            q: 'カスタム言語モデルは入手できますか？',
            a: 'READMEでは、自分のデータで学習したカスタムモデルを1言語あたり1,000ドル（交渉可）で提供しています。PromptQuorumはこのサービスを評価していません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'Argos Translateは、READMEによればPC上で動き、Pythonやターミナルからスクリプト化できる、無料のオープンソース翻訳がほしい人に向いています。MITライセンス、定期的なPyPIリリース（2025年10月の1.10.0、2026年2月の1.11.0）、大きなパッケージ索引があります。',
          '注意点は範囲と保守です。インストーラーがないこと、GUIが別で古いこと、方向ごとにダウンロードが必要なこと、2026年8月8日以降は更新がないこと、そしてPromptQuorumが確認できなかった品質とプライバシーの主張です。何かを組み上げる前に、1つの言語ペアを短いテキストで試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Argos Open TechのWebサイト](https://www.argosopentech.com) — 製品概要、インストール、例。',
          '[ドキュメント](https://argos-translate.readthedocs.io/en/latest/) — 設定、コマンドライン、GUIのページ。',
          '[GitHubリポジトリ](https://github.com/argosopentech/argos-translate) — README、MITライセンス、コミット履歴。',
          '[PyPIのプロジェクトページ](https://pypi.org/project/argostranslate/) — バージョン1.11.0と公開日。',
          '[パッケージ索引のリポジトリ](https://github.com/argosopentech/argospm-index) — 言語パッケージとダウンロードリンク。',
          '[Argos Translate GUIのリポジトリ](https://github.com/argosopentech/argos-translate-gui) — 別パッケージのデスクトップ用インターフェース。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[On-Device AI Translatorレビュー](/ja/power-local-llm/on-device-ai-translator-review) — iPhone向けの言語モデルによるオフライン翻訳。',
          '[TranslateBooksWithLLMsレビュー](/ja/power-local-llm/translate-books-with-llms-review) — ローカルまたはクラウドのモデルで書籍を丸ごと翻訳。',
          '[Sablateレビュー](/ja/power-local-llm/sablate-review) — オフライン翻訳にArgosを使う字幕アプリ。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
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
    heroImage: '/images/argos-translate-review-hero-zh.webp',
    title: 'Argos Translate评测：适用于Python和命令行的免费离线翻译',
    seoTitle: 'Argos Translate评测：免费离线翻译工具',
    intro: 'Argos Translate是一个采用MIT许可证的免费翻译库，在你自己的电脑上运行：用pip安装，下载一次语言包，之后就可以从Python或命令行翻译文本，而无需把文本发送到在线服务。本评测梳理了开发方的官网、文档、PyPI页面和GitHub仓库的说法，安装实际要做什么，哪些环节仍会用到网络，以及Argos Translate与目录中其他翻译工具的对比。',
    metaDescription: 'Argos Translate评测：适用于Python和命令行的免费MIT许可离线翻译，用pip安装。含维护警告。未经测试。',
    twitterDescription: 'Argos Translate评测：适用于Python和命令行的免费开源离线翻译库。安装、语言包、隐私、局限与替代方案。',
    audience: '希望在自己的电脑上而不是云服务中使用免费开源翻译的开发者和技术用户——涵盖安装、语言包、隐私、维护状况、局限与替代方案。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Argos Translate review',
    targetKeywords: [
      'argos translate 评测',
      'argos translate 离线',
      'python 离线翻译',
      '开源离线翻译',
      'argostranslate pip install',
      '本地机器翻译',
      'libretranslate 离线替代',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**Argos Translate是一个适用于Python和命令行的免费开源翻译库，采用MIT许可证；据其README，下载所需语言包后即可离线翻译。**最新版本是2026年2月2日发布的1.11.0。本评测依据开发方的官网、文档、PyPI页面和GitHub仓库，而非亲自上手测试。',
    quickAnswerTop: {
      zh: {
        question: 'Argos Translate是本地翻译工具吗？',
        answer: '是。README将其称为开源的离线翻译库，它通过CTranslate2在你自己的电脑上运行OpenNMT模型。联网只用于安装、获取软件包索引和下载每个语言包；之后翻译不需要连接。PromptQuorum没有检查网络流量，因此这仍是开发方自己的说法。',
        bullets: [
          '它是库和命令行工具，而不是打磨好的应用：用pip安装，每个翻译方向装一个语言包，例如英语到德语。',
          '没有直接语言包的语言，会经由中间语言翻译，据文档说明会损失一些质量。',
          'GPU是可选的，通过环境变量开启；默认使用CPU。',
          '桌面GUI是单独的软件包，最近一次发布在2023年。',
          'LibreTranslate是基于Argos Translate构建的网页应用和API，属于独立项目，此处不作介绍。',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: '获取Argos Translate', anchor: 'get-it' },
      { label: 'Argos Translate概览', anchor: 'at-a-glance' },
      { label: 'Argos Translate是什么', anchor: 'what-is-argos-translate' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '语言包与硬件', anchor: 'packages-hardware' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'Argos Translate与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用Argos Translate的人', anchor: 'who-should-use' },
      { label: '不适合使用Argos Translate的人', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'Argos Translate是一个免费的开源翻译库，据其README，下载所需语言包后即可在你自己的电脑上离线运行。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成每个语言对只需安装一次的词典：之后电脑自己翻译文本，用一个小脚本或一条终端命令即可。',
          },
        ],
        items: [
          '本地说法：翻译在设备上用OpenNMT模型运行；安装、更新软件包索引和下载语言包需要联网。',
          `许可与开发方：MIT，由Argos Open Tech在GitHub上发布的开放代码，有${ST.zh('argos-translate')}个星标。`,
          '安装：库只需一条pip命令，之后每个翻译方向装一个包；这是终端工具，不是双击即用的应用。',
          '维护：最近一次发布是2026年2月2日的1.11.0版；仓库本身最后一次改动在2026年8月8日。',
          '不足：没有安装程序，GUI独立且较旧，本评测也没有衡量翻译质量。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '自2026年8月8日以来没有更新。仓库的最新改动就在这一天，最近一次发布（1.11.0版）是2026年2月2日，因此该项目可能已无人维护。依赖它之前，请到GitHub仓库查看是否有更新的动态。本页所有内容均为开发方自己的描述；PromptQuorum没有测试过该工具。',
          },
        ],
      },
      getItArgos: {
        id: 'get-it',
        title: '获取Argos Translate',
        content: [
          '**Argos Translate没有安装程序：它是Python软件包，因此需要终端和可用的Python环境。**一条命令即可安装库，语言包随后用附带的`argospm`工具下载。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': '库与命令行',
            '获取方式': '`pip install argostranslate` — 1.11.0版见[PyPI页面](https://pypi.org/project/argostranslate/)',
          },
          {
            '平台': '语言包',
            '获取方式': '`argospm update`，然后`argospm install translate-en_de`（每个方向一个包）；[浏览软件包索引](https://www.argosopentech.com/argospm/index/)',
          },
          {
            '平台': '桌面GUI',
            '获取方式': '`pip install argostranslategui` — [独立仓库](https://github.com/argosopentech/argos-translate-gui)，最近一次发布在2023年',
          },
          {
            '平台': '文档',
            '获取方式': '[Argos Translate文档](https://argos-translate.readthedocs.io/en/latest/)',
          },
          {
            '平台': '官网',
            '获取方式': '[argosopentech.com](https://www.argosopentech.com)',
          },
          {
            '平台': '源代码',
            '获取方式': '[github.com/argosopentech/argos-translate](https://github.com/argosopentech/argos-translate) — MIT许可证',
          },
        ],
        note: '需要终端和Python环境；PromptQuorum没有找到.dmg、.exe或应用商店页面。PromptQuorum没有在官网找到隐私政策页面，因此“资料来源”中列出的页面是仅有的说明。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Argos Translate概览',
        columns: ['属性', 'Argos Translate'],
        rows: [
          { '属性': '平台', 'Argos Translate': '适用于macOS、Windows和Linux的Python库（开发方未列出操作系统）' },
          { '属性': '价格', 'Argos Translate': '免费' },
          { '属性': '许可', 'Argos Translate': 'MIT，开源' },
          { '属性': '运行位置', 'Argos Translate': '在你的电脑上使用OpenNMT和CTranslate2，下载语言包后可离线' },
          { '属性': '界面', 'Argos Translate': 'Python、命令行、独立的GUI' },
          { '属性': '语言', 'Argos Translate': '索引中有100个语言对软件包' },
          { '属性': 'GPU', 'Argos Translate': '可选，通过环境变量开启' },
          { '属性': '本地API服务器', 'Argos Translate': '不包含；LibreTranslate是独立项目' },
        ],
        note: '软件包数量读取自该项目的软件包索引；新增软件包后，语言和语言对的数量会变化。官网未提及，表示未知，而不是不支持。',
      },
      whatIsArgos: {
        id: 'what-is-argos-translate',
        title: 'Argos Translate是什么',
        content: [
          '**Argos Translate是面向开发者的翻译引擎，而不是应用里的一个文本框。**README将其描述为用Python编写的开源离线翻译库，使用OpenNMT进行翻译，可通过Python、命令行或GUI使用。语言模型以`.argosmodel`压缩包的形式提供，每个方向一个。',
          '没有直接语言包时，它会经由中间语言翻译：据文档，装有西班牙语到英语、英语到法语后，就能翻译西班牙语到法语，但会损失一些质量。',
          '该项目以Argos Open Tech的名义发布。LibreTranslate是基于Argos Translate构建的网页应用和API，拥有自己的仓库，属于另一个项目，此处不作评测。据README，开发方还提供按你的数据训练的定制语言模型，每种语言1,000美元（可议价）。本评测依据官网、文档、PyPI和GitHub，没有亲自上手测试，因此不评价翻译质量和速度。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置过程就是一次pip安装、一个或多个语言包和一条命令。**步骤依据README。',
        ],
        numberedItems: [
          {
            title: '安装库',
            whyItMatters: '在你选择的Python环境中运行`pip install argostranslate`。',
          },
          {
            title: '下载语言包',
            whyItMatters: '运行`argospm update`，然后用`argospm install translate-en_de`安装英语到德语；需要反方向时另行安装。',
          },
          {
            title: '在命令行中翻译',
            whyItMatters: '运行`argos-translate --from en --to de "Hello World!"`；README给出的结果是“Hallo Welt!”。',
          },
          {
            title: '或从Python调用',
            whyItMatters: '导入`argostranslate.translate`并调用`translate("Hello World", "en", "es")`；官网的示例会先用`argostranslate.package`安装语言包。',
          },
        ],
      },
      packagesHardware: {
        id: 'packages-hardware',
        title: '语言包与硬件',
        content: [
          '**每个语言方向都是单独的下载，所以占用的磁盘空间取决于你安装多少个语言对。**官网链接的软件包索引列出了100个软件包，覆盖50个语言代码，包括阿拉伯语、中文、日语、韩语、德语和葡萄牙语；README还写着“以及更多”。PromptQuorum没有测量软件包大小，也没有测量翻译质量。',
          '推理通过CTranslate2运行。文档未说明RAM或GPU要求；据README，把`ARGOS_DEVICE_TYPE`设为`cuda`或`auto`即可开启GPU加速，因此默认使用CPU。同一开发方的相关库可以翻译HTML和文件，但它们各自是独立项目。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**README称Argos Translate是离线库，你要翻译的文本不必离开你的电脑。**pip、用于更新软件包索引的`argospm update`以及每个`.argosmodel`文件的下载都会用到网络。Stanza和SentencePiece等依赖项会一同安装；仓库最新提交已把Stanza改为可选，但PyPI上的1.11.0仍把它列为必需。代码是开放的，PromptQuorum没有检查网络流量，也没有检查依赖项在运行时会获取什么，因此隐私方面的说法来自开发方自己。',
          '许可证是MIT，软件免费。项目接受捐赠，并在README中列出一家赞助商；它没有说明各个语言包的许可，PromptQuorum也没有核实。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': '在你的电脑上翻译',
            '实际使用中的意义': '安装语言包后，无需在线服务即可翻译文本。',
            '局限 / 注意事项': '安装和下载语言包需要联网；未检查网络流量。',
          },
          {
            '优势': '免费且开源',
            '实际使用中的意义': 'MIT代码，无需账号，也没有按字数计费。',
            '局限 / 注意事项': '未核实语言包的许可；定制模型是付费服务。',
          },
          {
            '优势': 'Python和命令行',
            '实际使用中的意义': '易于编写脚本、批量处理，并嵌入你自己的工具。',
            '局限 / 注意事项': '需要终端和Python；没有安装程序。',
          },
          {
            '优势': '大量语言包',
            '实际使用中的意义': '索引列出了覆盖50个语言代码的100个软件包。',
            '局限 / 注意事项': '每个方向需单独下载；经由英语中转会损失一些质量。',
          },
          {
            '优势': '可选的GPU加速',
            '实际使用中的意义': '设置一个变量即可利用受支持的硬件。',
            '局限 / 注意事项': '此处未提供速度或质量数据。',
          },
          {
            '优势': '成熟的项目',
            '实际使用中的意义': '1.11.0版已在PyPI上，仓库有数千个星标。',
            '局限 / 注意事项': '2026年8月8日以来没有更新；GUI更旧。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Argos Translate与替代方案对比',
        content: [
          '以下是目录中最接近的翻译工具：一款iPhone应用、一个书籍翻译流程，以及一款自己就基于Argos Translate的字幕应用。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'Argos Translate',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，MIT',
            '定位': '离线翻译库',
            '主要区别': 'Python和命令行；每个语言对一个包',
          },
          {
            '应用': '[On-Device AI Translator](/zh/power-local-llm/on-device-ai-translator-review)',
            '平台': 'iPhone',
            '价格与许可': '免费增值，闭源',
            '定位': '手机翻译应用',
            '主要区别': '在设备上运行语言模型；是应用而不是库',
          },
          {
            '应用': '[TranslateBooksWithLLMs](/zh/power-local-llm/translate-books-with-llms-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，AGPL-3.0',
            '定位': '书籍和文档翻译',
            '主要区别': '使用本地或云端语言模型，而不是专用翻译引擎',
          },
          {
            '应用': '[Sablate](/zh/power-local-llm/sablate-review)',
            '平台': 'Windows、Mac',
            '价格与许可': '免费增值，闭源',
            '定位': '字幕应用',
            '主要区别': '用Argos翻译字幕，并支持转写；不是通用翻译工具',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Argos Translate的人',
        items: [
          '**开发者。**Python API和命令行适合脚本、流水线和你自己的工具。',
          '**不想用在线翻译的人。**据README，装好语言包后，翻译在电脑上运行。',
          '**开源用户。**MIT代码公开，软件免费。',
          '**有GPU的爱好者。**设置一个环境变量即可启用GPU。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Argos Translate的人',
        items: [
          '**想要双击即用的应用的人。**没有安装程序，GUI是独立且较旧的软件包。',
          '**需要已验证质量的读者。**PromptQuorum没有测试准确度和速度。',
          '**需要持续维护的项目的人。**仓库最后一次改动是2026年8月8日。',
          '**手机用户。**请改看适用于iPhone的On-Device AI Translator。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Argos Translate可以离线使用吗？',
            a: 'README将其称为离线翻译库，翻译使用已安装的语言包。安装库和下载每个语言包需要联网；PromptQuorum没有在断网状态下测试。',
          },
          {
            q: 'Argos Translate和LibreTranslate有什么区别？',
            a: '据README，LibreTranslate是基于Argos Translate构建的网页应用和API。Argos Translate是翻译库本身，带有命令行和Python API；LibreTranslate是独立项目，此处不作介绍。',
          },
          {
            q: '它能在任意两种语言之间翻译吗？',
            a: '只能在已安装语言包的语言对之间翻译，可以是直接的，也可以经由中间语言。文档说明，这种中转（例如西班牙语到英语再到法语）可行，但会损失一些质量。',
          },
          {
            q: '它有图形界面吗？',
            a: '有，但是以单独的软件包argostranslategui提供，其PyPI版本发布于2023年，仓库最后一次改动在2025年3月。主库是为Python和命令行设计的。',
          },
          {
            q: '我能获得定制语言模型吗？',
            a: 'README提供用你自己的数据训练的定制模型，每种语言1,000美元（可议价）。PromptQuorum没有评估这项服务。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想要免费的开源翻译，据README可在自己的电脑上运行，并且能用Python或终端编写脚本，Argos Translate是合适的选择。它采用MIT许可证，PyPI发布较为规律（2025年10月的1.10.0、2026年2月的1.11.0），软件包索引也很大。',
          '需要注意的是范围和维护：没有安装程序，GUI独立且较旧，每个语言方向要单独下载，2026年8月8日以来没有更新，质量和隐私方面的说法PromptQuorum无法核实。在基于它构建任何东西之前，先用一小段文本试一个语言对。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Argos Open Tech官网](https://www.argosopentech.com) — 产品概述、安装和示例。',
          '[文档](https://argos-translate.readthedocs.io/en/latest/) — 设置、命令行和GUI页面。',
          '[GitHub仓库](https://github.com/argosopentech/argos-translate) — README、MIT许可证和提交历史。',
          '[PyPI项目页面](https://pypi.org/project/argostranslate/) — 1.11.0版及发布日期。',
          '[软件包索引仓库](https://github.com/argosopentech/argospm-index) — 语言包和下载链接。',
          '[Argos Translate GUI仓库](https://github.com/argosopentech/argos-translate-gui) — 独立的桌面界面。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[On-Device AI Translator评测](/zh/power-local-llm/on-device-ai-translator-review) — 适用于iPhone的语言模型离线翻译。',
          '[TranslateBooksWithLLMs评测](/zh/power-local-llm/translate-books-with-llms-review) — 用本地或云端模型翻译整本书。',
          '[Sablate评测](/zh/power-local-llm/sablate-review) — 使用Argos进行离线翻译的字幕应用。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
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
    heroImage: '/images/argos-translate-review-hero-es.webp',
    title: 'Reseña de Argos Translate: traducción sin conexión gratuita para Python y la línea de comandos',
    seoTitle: 'Reseña de Argos Translate: traducción sin conexión gratis',
    intro: 'Argos Translate es una biblioteca de traducción gratuita con licencia MIT que funciona en tu propio ordenador: la instalas con pip, descargas una vez un paquete de idioma y luego traduces texto desde Python o la línea de comandos sin enviarlo a un servicio en línea. Esta reseña resume lo que dicen el sitio web, la documentación, la página de PyPI y el repositorio de GitHub del creador, qué implica realmente la instalación, dónde se sigue usando la red y cómo se compara Argos Translate con otras herramientas de traducción del directorio.',
    metaDescription: 'Reseña de Argos Translate: traducción sin conexión gratuita con licencia MIT para Python y la línea de comandos, instalada con pip. Aviso de mantenimiento. Sin probar.',
    twitterDescription: 'Reseña de Argos Translate: biblioteca gratuita de código abierto para traducir sin conexión con Python y la línea de comandos. Instalación, paquetes de idiomas, privacidad, límites y alternativas.',
    audience: 'Desarrolladores y usuarios técnicos que quieren traducir gratis y con código abierto en su propio ordenador en lugar de en un servicio en la nube — cubre instalación, paquetes de idiomas, privacidad, mantenimiento, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Argos Translate review',
    targetKeywords: [
      'reseña argos translate',
      'argos translate sin conexión',
      'traducción sin conexión python',
      'traductor offline de código abierto',
      'argostranslate pip install',
      'traducción automática local',
      'alternativa libretranslate sin conexión',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**Argos Translate es una biblioteca de traducción de código abierto, gratuita y con licencia MIT, para Python y la línea de comandos que, según su README, traduce sin conexión una vez que has descargado los paquetes de idiomas que necesitas.** La versión más reciente es la 1.11.0, del 2 de febrero de 2026. Esta reseña se basa en el sitio web, la documentación, la página de PyPI y el repositorio de GitHub del creador, no en pruebas propias.',
    quickAnswerTop: {
      es: {
        question: '¿Es Argos Translate una herramienta de traducción local?',
        answer: 'Sí: el README la describe como una biblioteca de traducción de código abierto que funciona sin conexión, y ejecuta modelos OpenNMT mediante CTranslate2 en tu propio ordenador. La red se usa para instalarla, para obtener el índice de paquetes y para descargar cada paquete de idioma; después, traducir no requiere conexión. PromptQuorum no inspeccionó el tráfico de red, así que esta sigue siendo la descripción del creador.',
        bullets: [
          'Es una biblioteca y una herramienta de línea de comandos, no una app pulida: la instalas con pip y un paquete de idioma por dirección, por ejemplo de inglés a alemán.',
          'Los idiomas sin paquete directo se traducen pasando por un idioma intermedio, lo que según la documentación cuesta algo de calidad.',
          'El uso de la GPU es opcional y se activa con una variable de entorno; por defecto se usa la CPU.',
          'La interfaz gráfica es un paquete aparte, cuya última publicación es de 2023.',
          'LibreTranslate, la app web y la API construidas sobre Argos Translate, es un proyecto aparte y no se trata aquí.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Argos Translate', anchor: 'get-it' },
      { label: 'Argos Translate de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Argos Translate', anchor: 'what-is-argos-translate' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Paquetes de idiomas y hardware', anchor: 'packages-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Argos Translate frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Argos Translate', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Argos Translate', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'Argos Translate es una biblioteca de traducción gratuita y de código abierto que, según su README, funciona sin conexión en tu propio ordenador una vez descargados los paquetes de idiomas que necesitas.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un diccionario que instalas una vez por cada par de idiomas: después, tu ordenador traduce el texto por sí solo, desde un pequeño script o con un comando de terminal.',
          },
        ],
        items: [
          'Afirmación local: la traducción se ejecuta en el dispositivo con modelos OpenNMT; la instalación, la actualización del índice de paquetes y la descarga de los paquetes de idiomas usan internet.',
          `Licencia y creador: MIT, código abierto publicado por Argos Open Tech en GitHub, con ${ST.es('argos-translate')} estrellas.`,
          'Instalación: un comando pip para la biblioteca y luego un paquete por dirección de idioma; es una herramienta de terminal, no una app de doble clic.',
          'Mantenimiento: la última versión es la 1.11.0 del 2 de febrero de 2026; el propio repositorio se modificó por última vez el 8 de agosto de 2026.',
          'Carencias: sin instalador, una interfaz aparte y más antigua, y ninguna medición de la calidad de traducción en esta reseña.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sin actualizaciones desde el 8 de agosto de 2026. El cambio más reciente del repositorio es de esa fecha y la última versión, la 1.11.0, del 2 de febrero de 2026, así que el proyecto podría estar sin mantenimiento. Comprueba en el repositorio de GitHub si hay actividad más reciente antes de depender de él. Todo lo que figura en esta página es la descripción del propio creador; PromptQuorum no ha probado la herramienta.',
          },
        ],
      },
      getItArgos: {
        id: 'get-it',
        title: 'Conseguir Argos Translate',
        content: [
          '**Argos Translate no tiene instalador: es un paquete de Python, así que hacen falta un terminal y una instalación de Python que funcione.** Un comando instala la biblioteca y los paquetes de idiomas se descargan después con la herramienta `argospm` incluida.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Biblioteca y línea de comandos',
            'Dónde conseguirla': '`pip install argostranslate` — consulta la [página de PyPI](https://pypi.org/project/argostranslate/) para la versión 1.11.0',
          },
          {
            Plataforma: 'Paquetes de idiomas',
            'Dónde conseguirla': '`argospm update` y `argospm install translate-en_de` (uno por dirección); [explora el índice](https://www.argosopentech.com/argospm/index/)',
          },
          {
            Plataforma: 'Interfaz gráfica',
            'Dónde conseguirla': '`pip install argostranslategui` — [repositorio aparte](https://github.com/argosopentech/argos-translate-gui), última publicación en 2023',
          },
          {
            Plataforma: 'Documentación',
            'Dónde conseguirla': '[Documentación de Argos Translate](https://argos-translate.readthedocs.io/en/latest/)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[argosopentech.com](https://www.argosopentech.com)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': '[github.com/argosopentech/argos-translate](https://github.com/argosopentech/argos-translate) — licencia MIT',
          },
        ],
        note: 'Hacen falta un terminal y una instalación de Python; PromptQuorum no encontró ningún .dmg, .exe ni ficha de tienda. PromptQuorum no encontró ninguna página de política de privacidad en el sitio web, así que las páginas citadas en Fuentes son las únicas declaraciones disponibles.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Argos Translate de un vistazo',
        columns: ['Atributo', 'Argos Translate'],
        rows: [
          { Atributo: 'Plataforma', 'Argos Translate': 'Biblioteca de Python para macOS, Windows y Linux (el creador no indica ningún sistema)' },
          { Atributo: 'Precio', 'Argos Translate': 'Gratis' },
          { Atributo: 'Licencia', 'Argos Translate': 'MIT, código abierto' },
          { Atributo: 'Se ejecuta', 'Argos Translate': 'En tu ordenador con OpenNMT y CTranslate2, sin conexión tras descargar los paquetes' },
          { Atributo: 'Interfaces', 'Argos Translate': 'Python, línea de comandos, interfaz gráfica aparte' },
          { Atributo: 'Idiomas', 'Argos Translate': '100 paquetes de pares de idiomas en el índice' },
          { Atributo: 'GPU', 'Argos Translate': 'Opcional, mediante una variable de entorno' },
          { Atributo: 'Servidor de API local', 'Argos Translate': 'No incluido; LibreTranslate es un proyecto aparte' },
        ],
        note: 'El número de paquetes se leyó en el índice de paquetes del proyecto; la cantidad de idiomas y pares cambia cuando se añaden paquetes. Que la web no mencione algo significa desconocido, no no compatible.',
      },
      whatIsArgos: {
        id: 'what-is-argos-translate',
        title: 'Qué es Argos Translate',
        content: [
          '**Argos Translate es un motor de traducción para desarrolladores, no un cuadro de texto dentro de una app.** El README lo describe como una biblioteca de traducción de código abierto y sin conexión, escrita en Python, que usa OpenNMT para traducir y se puede utilizar desde Python, la línea de comandos o una interfaz gráfica. Los modelos de idioma llegan como archivos `.argosmodel`, uno por dirección.',
          'Cuando no existe un paquete directo, pasa por un idioma intermedio: con español a inglés e inglés a francés instalados, puede traducir de español a francés, a costa de cierta calidad, según la documentación.',
          'El proyecto se publica con el nombre Argos Open Tech. LibreTranslate, una app web y una API construidas sobre Argos Translate, es otro proyecto con su propio repositorio y no se analiza aquí. Según el README, el creador también vende modelos de idioma entrenados a medida por 1.000 $ por idioma (negociable). Esta reseña se basa en el sitio web, la documentación, PyPI y GitHub; no incluyó pruebas propias, así que no se valoran la calidad ni la velocidad de traducción.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha es una instalación con pip, uno o varios paquetes de idiomas y un comando.** Los pasos siguen el README.',
        ],
        numberedItems: [
          {
            title: 'Instala la biblioteca',
            whyItMatters: 'Ejecuta `pip install argostranslate` en el entorno de Python que prefieras.',
          },
          {
            title: 'Descarga un paquete de idioma',
            whyItMatters: 'Ejecuta `argospm update` y luego `argospm install translate-en_de` para inglés a alemán; instala la dirección inversa por separado si la necesitas.',
          },
          {
            title: 'Traduce desde la línea de comandos',
            whyItMatters: 'Ejecuta `argos-translate --from en --to de "Hello World!"`; el README muestra la respuesta «Hallo Welt!».',
          },
          {
            title: 'O llámalo desde Python',
            whyItMatters: 'Importa `argostranslate.translate` y llama a `translate("Hello World", "en", "es")`; el ejemplo del sitio instala antes el paquete con `argostranslate.package`.',
          },
        ],
      },
      packagesHardware: {
        id: 'packages-hardware',
        title: 'Paquetes de idiomas y hardware',
        content: [
          '**Cada dirección de idioma es una descarga propia, así que el espacio en disco depende de cuántos pares instales.** El índice de paquetes enlazado desde el sitio web lista 100 paquetes que cubren 50 códigos de idioma, entre ellos árabe, chino, japonés, coreano, alemán y portugués; el README añade «y más». PromptQuorum no midió el tamaño de los paquetes ni la calidad de traducción.',
          'La inferencia se ejecuta mediante CTranslate2. No se indica ningún requisito de RAM ni de GPU; según el README, la aceleración por GPU se activa definiendo `ARGOS_DEVICE_TYPE` como `cuda` o `auto`, de modo que la CPU es la opción por defecto. Bibliotecas relacionadas del mismo creador traducen HTML y archivos, pero cada una es un proyecto aparte.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**El README llama a Argos Translate una biblioteca sin conexión, y el texto que traduces no necesita salir de tu ordenador.** La red la usan pip, `argospm update` para el índice de paquetes y la descarga de cada archivo `.argosmodel`. Dependencias como Stanza y SentencePiece se instalan con ella; el commit más reciente del repositorio hace opcional Stanza, pero PyPI 1.11.0 todavía lo lista como obligatorio. El código es abierto y PromptQuorum no examinó el tráfico de red ni lo que las dependencias descargan en tiempo de ejecución, así que las afirmaciones de privacidad son del propio creador.',
          'La licencia es MIT y el software es gratuito. El proyecto acepta donaciones y menciona un patrocinador en su README; no dice nada sobre la licencia de cada paquete de idioma, que PromptQuorum no comprobó.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'Traducción en tu ordenador',
            'Qué significa en el uso real': 'El texto se puede traducir sin un servicio en línea una vez instalados los paquetes.',
            'Limitación / advertencia': 'La instalación y las descargas de paquetes necesitan red; no se inspeccionó el tráfico.',
          },
          {
            Ventaja: 'Gratis y de código abierto',
            'Qué significa en el uso real': 'Código MIT, sin cuenta y sin tarifa por palabra.',
            'Limitación / advertencia': 'No se comprobaron las licencias de los paquetes; los modelos a medida son un servicio de pago.',
          },
          {
            Ventaja: 'Python y línea de comandos',
            'Qué significa en el uso real': 'Fácil de automatizar, de procesar por lotes y de integrar en tus propias herramientas.',
            'Limitación / advertencia': 'Requiere terminal y Python; sin instalador.',
          },
          {
            Ventaja: 'Muchos paquetes de idiomas',
            'Qué significa en el uso real': 'El índice lista 100 paquetes para 50 códigos de idioma.',
            'Limitación / advertencia': 'Una descarga por dirección; pasar por inglés cuesta algo de calidad.',
          },
          {
            Ventaja: 'Uso opcional de la GPU',
            'Qué significa en el uso real': 'Basta definir una variable para aprovechar el hardware compatible.',
            'Limitación / advertencia': 'Aquí no se publican cifras de velocidad ni de calidad.',
          },
          {
            Ventaja: 'Proyecto consolidado',
            'Qué significa en el uso real': 'La versión 1.11.0 está en PyPI y el repositorio tiene miles de estrellas.',
            'Limitación / advertencia': 'Sin actualizaciones desde el 8 de agosto de 2026; la interfaz gráfica es aún más antigua.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Argos Translate frente a alternativas',
        content: [
          'Estas son las herramientas de traducción más cercanas del directorio: una app para iPhone, un flujo para traducir libros y una app de subtítulos que se apoya en el propio Argos Translate.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'Argos Translate',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Biblioteca de traducción sin conexión',
            'Diferencia clave': 'Python y línea de comandos; un paquete por par de idiomas',
          },
          {
            App: '[On-Device AI Translator](/es/power-local-llm/on-device-ai-translator-review)',
            Plataformas: 'iPhone',
            'Precio y licencia': 'Freemium, código cerrado',
            Papel: 'App de traducción para el móvil',
            'Diferencia clave': 'Ejecuta modelos de lenguaje en el dispositivo; una app, no una biblioteca',
          },
          {
            App: '[TranslateBooksWithLLMs](/es/power-local-llm/translate-books-with-llms-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            Papel: 'Traducción de libros y documentos',
            'Diferencia clave': 'Usa un modelo de lenguaje local o en la nube en lugar de un motor de traducción específico',
          },
          {
            App: '[Sablate](/es/power-local-llm/sablate-review)',
            Plataformas: 'Windows, Mac',
            'Precio y licencia': 'Freemium, código cerrado',
            Papel: 'App de subtítulos',
            'Diferencia clave': 'Traduce subtítulos con Argos, además de transcribir; no es un traductor general',
          },
        ],
        note: 'Las plataformas, precios y funciones de las apps de terceros cambian con frecuencia. Verifica los detalles actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Argos Translate',
        items: [
          '**Desarrolladores.** La API de Python y la línea de comandos encajan en scripts, flujos y tus propias herramientas.',
          '**Quien evita los traductores en línea.** Una vez instalados los paquetes, la traducción se ejecuta en el ordenador, según el README.',
          '**Usuarios de código abierto.** El código MIT es público y el software no cuesta nada.',
          '**Aficionados con GPU.** Una variable de entorno activa el uso de la GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Argos Translate',
        items: [
          '**Quien quiera una app de doble clic.** No hay instalador y la interfaz gráfica es un paquete aparte y más antiguo.',
          '**Lectores que necesitan una calidad demostrada.** PromptQuorum no probó la precisión ni la velocidad.',
          '**Quien necesite un proyecto mantenido.** El último cambio del repositorio es del 8 de agosto de 2026.',
          '**Usuarios de móvil.** Mira mejor On-Device AI Translator para iPhone.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Argos Translate sin conexión?',
            a: 'El README lo describe como una biblioteca de traducción sin conexión, y la traducción usa los paquetes de idiomas instalados. Necesitas conexión para instalar la biblioteca y descargar cada paquete; PromptQuorum no lo probó con la red desconectada.',
          },
          {
            q: '¿En qué se diferencia Argos Translate de LibreTranslate?',
            a: 'Según el README, LibreTranslate es una app web y una API construidas sobre Argos Translate. Argos Translate es la propia biblioteca de traducción, con línea de comandos y API de Python; LibreTranslate es un proyecto aparte y no se trata aquí.',
          },
          {
            q: '¿Puede traducir entre dos idiomas cualesquiera?',
            a: 'Solo entre pares con un paquete instalado, de forma directa o a través de un idioma intermedio. La documentación dice que ese rodeo, por ejemplo de español a inglés y a francés, funciona a costa de cierta calidad.',
          },
          {
            q: '¿Tiene interfaz gráfica?',
            a: 'Sí, pero como paquete aparte, argostranslategui, cuya versión en PyPI es de 2023 y cuyo repositorio se modificó por última vez en marzo de 2025. La biblioteca principal está pensada para Python y la línea de comandos.',
          },
          {
            q: '¿Puedo conseguir un modelo de idioma a medida?',
            a: 'El README ofrece modelos entrenados con tus propios datos por 1.000 $ por idioma (negociable). PromptQuorum no evaluó ese servicio.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Argos Translate es una buena opción si quieres traducción gratuita y de código abierto que, según su README, se ejecuta en tu propio ordenador y que puedes automatizar desde Python o un terminal. Tiene licencia MIT, versiones regulares en PyPI (1.10.0 en octubre de 2025, 1.11.0 en febrero de 2026) y un amplio índice de paquetes.',
          'Las salvedades son el alcance y el mantenimiento: sin instalador, una interfaz aparte y más antigua, una descarga por dirección de idioma, sin actualizaciones desde el 8 de agosto de 2026 y afirmaciones de calidad y privacidad que PromptQuorum no pudo comprobar. Prueba un par de idiomas con un texto pequeño antes de construir nada sobre ella.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Argos Open Tech](https://www.argosopentech.com) — resumen del producto, instalación y ejemplos.',
          '[Documentación](https://argos-translate.readthedocs.io/en/latest/) — ajustes, línea de comandos y páginas de la interfaz gráfica.',
          '[Repositorio de GitHub](https://github.com/argosopentech/argos-translate) — README, licencia MIT e historial de commits.',
          '[Página del proyecto en PyPI](https://pypi.org/project/argostranslate/) — versión 1.11.0 y fecha de publicación.',
          '[Repositorio del índice de paquetes](https://github.com/argosopentech/argospm-index) — paquetes de idiomas y enlaces de descarga.',
          '[Repositorio de la interfaz gráfica de Argos Translate](https://github.com/argosopentech/argos-translate-gui) — la interfaz de escritorio aparte.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de On-Device AI Translator](/es/power-local-llm/on-device-ai-translator-review) — traducción sin conexión con modelos de lenguaje para iPhone.',
          '[Reseña de TranslateBooksWithLLMs](/es/power-local-llm/translate-books-with-llms-review) — traducir libros enteros con un modelo local o en la nube.',
          '[Reseña de Sablate](/es/power-local-llm/sablate-review) — una app de subtítulos que usa Argos para traducir sin conexión.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
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
    heroImage: '/images/argos-translate-review-hero-pt.webp',
    title: 'Análise do Argos Translate: tradução offline gratuita para Python e linha de comando',
    seoTitle: 'Análise do Argos Translate: tradução offline gratuita',
    intro: 'O Argos Translate é uma biblioteca de tradução gratuita, com licença MIT, que roda no seu próprio computador: você a instala com pip, baixa um pacote de idioma uma vez e depois traduz textos pelo Python ou pela linha de comando sem enviá-los a um serviço online. Esta análise resume o que dizem o site, a documentação, a página do PyPI e o repositório do GitHub do criador, o que a instalação realmente envolve, onde a rede ainda é usada e como o Argos Translate se compara a outras ferramentas de tradução do diretório.',
    metaDescription: 'Análise do Argos Translate: tradução offline gratuita com licença MIT para Python e linha de comando, instalada com pip. Aviso de manutenção. Não testado.',
    twitterDescription: 'Análise do Argos Translate: biblioteca gratuita e de código aberto para tradução offline com Python e linha de comando. Instalação, pacotes de idiomas, privacidade, limites e alternativas.',
    audience: 'Desenvolvedores e usuários técnicos que querem traduzir de graça e com código aberto no próprio computador, em vez de em um serviço na nuvem — cobre instalação, pacotes de idiomas, privacidade, manutenção, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Argos Translate review',
    targetKeywords: [
      'análise argos translate',
      'argos translate offline',
      'tradução offline python',
      'tradutor offline de código aberto',
      'argostranslate pip install',
      'tradução automática local',
      'alternativa libretranslate offline',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**O Argos Translate é uma biblioteca de tradução de código aberto, gratuita e com licença MIT, para Python e linha de comando que, segundo o README, traduz offline depois que você baixa os pacotes de idiomas de que precisa.** A versão mais recente é a 1.11.0, de 2 de fevereiro de 2026. Esta análise se baseia no site, na documentação, na página do PyPI e no repositório do GitHub do criador, não em testes próprios.',
    quickAnswerTop: {
      pt: {
        question: 'O Argos Translate é uma ferramenta de tradução local?',
        answer: 'Sim: o README o descreve como uma biblioteca de tradução de código aberto que funciona offline, e ele executa modelos OpenNMT via CTranslate2 no seu próprio computador. A rede é usada para instalá-lo, para buscar o índice de pacotes e para baixar cada pacote de idioma; depois disso, traduzir não exige conexão. O PromptQuorum não inspecionou o tráfego de rede, então esta continua sendo a descrição do criador.',
        bullets: [
          'É uma biblioteca e uma ferramenta de linha de comando, não um app polido: você a instala com pip e um pacote de idioma por direção, por exemplo de inglês para alemão.',
          'Idiomas sem pacote direto são traduzidos passando por um idioma intermediário, o que, segundo a documentação, custa um pouco de qualidade.',
          'O uso da GPU é opcional e ativado por uma variável de ambiente; o padrão é a CPU.',
          'A interface gráfica é um pacote separado, publicado pela última vez em 2023.',
          'O LibreTranslate, o app web e a API construídos sobre o Argos Translate, é um projeto separado e não é abordado aqui.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o Argos Translate', anchor: 'get-it' },
      { label: 'Argos Translate em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Argos Translate', anchor: 'what-is-argos-translate' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Pacotes de idiomas e hardware', anchor: 'packages-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Argos Translate e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Argos Translate serve', anchor: 'who-should-use' },
      { label: 'Para quem o Argos Translate não serve', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'O Argos Translate é uma biblioteca de tradução gratuita e de código aberto que, segundo o README, roda offline no seu próprio computador depois que você baixa os pacotes de idiomas de que precisa.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um dicionário que você instala uma vez para cada par de idiomas: depois disso, o computador traduz o texto sozinho, a partir de um pequeno script ou de um comando de terminal.',
          },
        ],
        items: [
          'Alegação local: a tradução roda no dispositivo com modelos OpenNMT; a instalação, a atualização do índice de pacotes e o download dos pacotes de idiomas usam a internet.',
          `Licença e criador: MIT, código aberto publicado pela Argos Open Tech no GitHub, com ${ST.pt('argos-translate')} estrelas.`,
          'Instalação: um comando pip para a biblioteca e depois um pacote por direção de idioma; é uma ferramenta de terminal, não um app de clique duplo.',
          'Manutenção: a última versão é a 1.11.0, de 2 de fevereiro de 2026; o próprio repositório foi alterado pela última vez em 8 de agosto de 2026.',
          'Lacunas: sem instalador, uma interface separada e mais antiga, e nenhuma medição da qualidade de tradução nesta análise.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sem atualização desde 8 de agosto de 2026. A alteração mais recente do repositório é dessa data e a última versão, a 1.11.0, é de 2 de fevereiro de 2026; por isso o projeto pode estar sem manutenção. Verifique no repositório do GitHub se há atividade mais recente antes de depender dele. Tudo nesta página é a descrição do próprio criador; o PromptQuorum não testou a ferramenta.',
          },
        ],
      },
      getItArgos: {
        id: 'get-it',
        title: 'Obter o Argos Translate',
        content: [
          '**O Argos Translate não tem instalador: é um pacote Python, então são necessários um terminal e uma instalação de Python funcionando.** Um comando instala a biblioteca e os pacotes de idiomas são baixados depois com a ferramenta `argospm` que a acompanha.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Biblioteca e linha de comando',
            'Onde obter': '`pip install argostranslate` — veja a [página do PyPI](https://pypi.org/project/argostranslate/) para a versão 1.11.0',
          },
          {
            Plataforma: 'Pacotes de idiomas',
            'Onde obter': '`argospm update` e `argospm install translate-en_de` (um por direção); [explore o índice](https://www.argosopentech.com/argospm/index/)',
          },
          {
            Plataforma: 'Interface gráfica',
            'Onde obter': '`pip install argostranslategui` — [repositório separado](https://github.com/argosopentech/argos-translate-gui), última publicação em 2023',
          },
          {
            Plataforma: 'Documentação',
            'Onde obter': '[Documentação do Argos Translate](https://argos-translate.readthedocs.io/en/latest/)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[argosopentech.com](https://www.argosopentech.com)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': '[github.com/argosopentech/argos-translate](https://github.com/argosopentech/argos-translate) — licença MIT',
          },
        ],
        note: 'São necessários um terminal e uma instalação de Python; o PromptQuorum não encontrou .dmg, .exe nem página em loja de apps. O PromptQuorum não encontrou página de política de privacidade no site, então as páginas citadas em Fontes são as únicas declarações disponíveis.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Argos Translate em resumo',
        columns: ['Atributo', 'Argos Translate'],
        rows: [
          { Atributo: 'Plataforma', 'Argos Translate': 'Biblioteca Python para macOS, Windows e Linux (o criador não lista sistema operacional)' },
          { Atributo: 'Preço', 'Argos Translate': 'Grátis' },
          { Atributo: 'Licença', 'Argos Translate': 'MIT, código aberto' },
          { Atributo: 'Executa', 'Argos Translate': 'No seu computador com OpenNMT e CTranslate2, offline após baixar os pacotes' },
          { Atributo: 'Interfaces', 'Argos Translate': 'Python, linha de comando, interface gráfica separada' },
          { Atributo: 'Idiomas', 'Argos Translate': '100 pacotes de pares de idiomas no índice' },
          { Atributo: 'GPU', 'Argos Translate': 'Opcional, por variável de ambiente' },
          { Atributo: 'Servidor de API local', 'Argos Translate': 'Não incluso; o LibreTranslate é um projeto separado' },
        ],
        note: 'O número de pacotes foi lido no índice de pacotes do projeto; a quantidade de idiomas e pares muda quando pacotes são adicionados. Uma informação ausente no site significa desconhecido, não sem suporte.',
      },
      whatIsArgos: {
        id: 'what-is-argos-translate',
        title: 'O que é o Argos Translate',
        content: [
          '**O Argos Translate é um motor de tradução para desenvolvedores, não uma caixa de texto dentro de um app.** O README o descreve como uma biblioteca de tradução de código aberto e offline, escrita em Python, que usa o OpenNMT para traduzir e pode ser usada pelo Python, pela linha de comando ou por uma interface gráfica. Os modelos de idioma vêm como arquivos `.argosmodel`, um por direção.',
          'Quando não existe pacote direto, ele passa por um idioma intermediário: com espanhol para inglês e inglês para francês instalados, ele consegue traduzir de espanhol para francês, com alguma perda de qualidade, segundo a documentação.',
          'O projeto é publicado com o nome Argos Open Tech. O LibreTranslate, um app web e uma API construídos sobre o Argos Translate, é outro projeto, com repositório próprio, e não é analisado aqui. Segundo o README, o criador também vende modelos de idioma treinados sob medida por US$ 1.000 por idioma (negociável). Esta análise se baseia no site, na documentação, no PyPI e no GitHub; não houve testes próprios, então a qualidade e a velocidade de tradução não são avaliadas.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação com pip, um ou mais pacotes de idiomas e um comando.** Os passos seguem o README.',
        ],
        numberedItems: [
          {
            title: 'Instale a biblioteca',
            whyItMatters: 'Execute `pip install argostranslate` em um ambiente Python de sua escolha.',
          },
          {
            title: 'Baixe um pacote de idioma',
            whyItMatters: 'Execute `argospm update` e depois `argospm install translate-en_de` para inglês para alemão; instale a direção inversa separadamente, se precisar.',
          },
          {
            title: 'Traduza pela linha de comando',
            whyItMatters: 'Execute `argos-translate --from en --to de "Hello World!"`; o README mostra a resposta “Hallo Welt!”.',
          },
          {
            title: 'Ou chame pelo Python',
            whyItMatters: 'Importe `argostranslate.translate` e chame `translate("Hello World", "en", "es")`; o exemplo do site instala antes o pacote com `argostranslate.package`.',
          },
        ],
      },
      packagesHardware: {
        id: 'packages-hardware',
        title: 'Pacotes de idiomas e hardware',
        content: [
          '**Cada direção de idioma é um download próprio, então o espaço em disco depende de quantos pares você instala.** O índice de pacotes ligado a partir do site lista 100 pacotes que cobrem 50 códigos de idioma, entre eles árabe, chinês, japonês, coreano, alemão e português; o README acrescenta “e mais”. O PromptQuorum não mediu o tamanho dos pacotes nem a qualidade de tradução.',
          'A inferência roda pelo CTranslate2. Nenhum requisito de RAM ou de GPU é informado; segundo o README, a aceleração por GPU é ativada definindo `ARGOS_DEVICE_TYPE` como `cuda` ou `auto`, então a CPU é o padrão. Bibliotecas relacionadas do mesmo criador traduzem HTML e arquivos, mas cada uma é um projeto à parte.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**O README chama o Argos Translate de biblioteca offline, e o texto que você traduz não precisa sair do seu computador.** A rede é usada pelo pip, pelo `argospm update` para o índice de pacotes e para baixar cada arquivo `.argosmodel`. Dependências como Stanza e SentencePiece são instaladas junto; o commit mais recente do repositório torna o Stanza opcional, mas o PyPI 1.11.0 ainda o lista como obrigatório. O código é aberto e o PromptQuorum não examinou o tráfego de rede nem o que as dependências baixam em tempo de execução, então as afirmações de privacidade são do próprio criador.',
          'A licença é MIT e o software é gratuito. O projeto aceita doações e cita um patrocinador no README; não diz nada sobre a licença de cada pacote de idioma, que o PromptQuorum não verificou.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Tradução no seu computador',
            'O que significa na prática': 'Dá para traduzir texto sem um serviço online depois de instalar os pacotes.',
            'Limitação / ressalva': 'A instalação e os downloads de pacotes precisam de rede; o tráfego não foi inspecionado.',
          },
          {
            Vantagem: 'Gratuito e de código aberto',
            'O que significa na prática': 'Código MIT, sem conta e sem cobrança por palavra.',
            'Limitação / ressalva': 'As licenças dos pacotes não foram verificadas; modelos sob medida são um serviço pago.',
          },
          {
            Vantagem: 'Python e linha de comando',
            'O que significa na prática': 'Fácil de automatizar, processar em lote e embutir nas suas próprias ferramentas.',
            'Limitação / ressalva': 'Exige terminal e Python; sem instalador.',
          },
          {
            Vantagem: 'Muitos pacotes de idiomas',
            'O que significa na prática': 'O índice lista 100 pacotes para 50 códigos de idioma.',
            'Limitação / ressalva': 'Um download por direção; passar pelo inglês custa um pouco de qualidade.',
          },
          {
            Vantagem: 'Uso opcional da GPU',
            'O que significa na prática': 'Basta definir uma variável para aproveitar o hardware compatível.',
            'Limitação / ressalva': 'Aqui não são publicados números de velocidade nem de qualidade.',
          },
          {
            Vantagem: 'Projeto estabelecido',
            'O que significa na prática': 'A versão 1.11.0 está no PyPI e o repositório tem milhares de estrelas.',
            'Limitação / ressalva': 'Sem atualização desde 8 de agosto de 2026; a interface gráfica é ainda mais antiga.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Argos Translate e as alternativas',
        content: [
          'Estas são as ferramentas de tradução mais próximas do diretório: um app para iPhone, um pipeline de tradução de livros e um app de legendas que usa o próprio Argos Translate.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'Argos Translate',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, MIT',
            Função: 'Biblioteca de tradução offline',
            'Diferença principal': 'Python e linha de comando; um pacote por par de idiomas',
          },
          {
            App: '[On-Device AI Translator](/pt/power-local-llm/on-device-ai-translator-review)',
            Plataformas: 'iPhone',
            'Preço e licença': 'Freemium, código fechado',
            Função: 'App de tradução para celular',
            'Diferença principal': 'Executa modelos de linguagem no aparelho; um app, não uma biblioteca',
          },
          {
            App: '[TranslateBooksWithLLMs](/pt/power-local-llm/translate-books-with-llms-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, AGPL-3.0',
            Função: 'Tradução de livros e documentos',
            'Diferença principal': 'Usa um modelo de linguagem local ou na nuvem, em vez de um motor de tradução dedicado',
          },
          {
            App: '[Sablate](/pt/power-local-llm/sablate-review)',
            Plataformas: 'Windows, Mac',
            'Preço e licença': 'Freemium, código fechado',
            Função: 'App de legendas',
            'Diferença principal': 'Traduz legendas com o Argos, além de transcrever; não é um tradutor geral',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Argos Translate serve',
        items: [
          '**Desenvolvedores.** A API Python e a linha de comando servem para scripts, pipelines e suas próprias ferramentas.',
          '**Quem evita tradutores online.** Depois de instalados os pacotes, a tradução roda no computador, segundo o README.',
          '**Usuários de código aberto.** O código MIT é público e o software não custa nada.',
          '**Entusiastas com GPU.** Uma variável de ambiente ativa o uso da GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Argos Translate não serve',
        items: [
          '**Quem quer um app de clique duplo.** Não há instalador, e a interface gráfica é um pacote separado e mais antigo.',
          '**Leitores que precisam de qualidade comprovada.** O PromptQuorum não testou precisão nem velocidade.',
          '**Quem precisa de um projeto mantido.** A última alteração do repositório é de 8 de agosto de 2026.',
          '**Usuários de celular.** Veja o On-Device AI Translator para iPhone.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Argos Translate funciona offline?',
            a: 'O README o descreve como uma biblioteca de tradução offline, e a tradução usa os pacotes de idiomas instalados. É preciso conexão para instalar a biblioteca e baixar cada pacote; o PromptQuorum não o testou com a rede desligada.',
          },
          {
            q: 'Em que o Argos Translate difere do LibreTranslate?',
            a: 'Segundo o README, o LibreTranslate é um app web e uma API construídos sobre o Argos Translate. O Argos Translate é a própria biblioteca de tradução, com linha de comando e API Python; o LibreTranslate é um projeto separado e não é abordado aqui.',
          },
          {
            q: 'Ele traduz entre quaisquer dois idiomas?',
            a: 'Só entre pares com pacote instalado, direto ou por um idioma intermediário. A documentação diz que esse desvio, por exemplo de espanhol para inglês e para francês, funciona com alguma perda de qualidade.',
          },
          {
            q: 'Tem interface gráfica?',
            a: 'Tem, mas como pacote separado, o argostranslategui, cuja versão no PyPI é de 2023 e cujo repositório foi alterado pela última vez em março de 2025. A biblioteca principal foi feita para Python e linha de comando.',
          },
          {
            q: 'Posso conseguir um modelo de idioma sob medida?',
            a: 'O README oferece modelos treinados com os seus próprios dados por US$ 1.000 por idioma (negociável). O PromptQuorum não avaliou esse serviço.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Argos Translate é uma boa escolha se você quer tradução gratuita e de código aberto que, segundo o README, roda no seu próprio computador e pode ser automatizada pelo Python ou pelo terminal. Tem licença MIT, versões regulares no PyPI (1.10.0 em outubro de 2025, 1.11.0 em fevereiro de 2026) e um amplo índice de pacotes.',
          'As ressalvas são escopo e manutenção: sem instalador, uma interface separada e mais antiga, um download por direção de idioma, sem atualização desde 8 de agosto de 2026 e afirmações de qualidade e privacidade que o PromptQuorum não conseguiu verificar. Teste um par de idiomas com um texto pequeno antes de construir qualquer coisa em cima dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site da Argos Open Tech](https://www.argosopentech.com) — visão geral do produto, instalação e exemplos.',
          '[Documentação](https://argos-translate.readthedocs.io/en/latest/) — configurações, linha de comando e páginas da interface gráfica.',
          '[Repositório do GitHub](https://github.com/argosopentech/argos-translate) — README, licença MIT e histórico de commits.',
          '[Página do projeto no PyPI](https://pypi.org/project/argostranslate/) — versão 1.11.0 e data de publicação.',
          '[Repositório do índice de pacotes](https://github.com/argosopentech/argospm-index) — pacotes de idiomas e links de download.',
          '[Repositório da interface gráfica do Argos Translate](https://github.com/argosopentech/argos-translate-gui) — a interface de desktop separada.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do On-Device AI Translator](/pt/power-local-llm/on-device-ai-translator-review) — tradução offline com modelos de linguagem para iPhone.',
          '[Análise do TranslateBooksWithLLMs](/pt/power-local-llm/translate-books-with-llms-review) — traduzir livros inteiros com um modelo local ou na nuvem.',
          '[Análise do Sablate](/pt/power-local-llm/sablate-review) — um app de legendas que usa o Argos para tradução offline.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
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
    heroImage: '/images/argos-translate-review-hero-ar.webp',
    title: 'مراجعة Argos Translate: ترجمة مجانية دون اتصال لـ Python وسطر الأوامر',
    seoTitle: 'مراجعة Argos Translate: أداة ترجمة مجانية دون اتصال',
    intro: 'Argos Translate مكتبة ترجمة مجانية بترخيص MIT تعمل على حاسوبك: تثبّتها بواسطة pip وتنزّل حزمة لغة مرة واحدة، ثم تترجم النصوص من Python أو من سطر الأوامر دون إرسالها إلى خدمة عبر الإنترنت. تلخّص هذه المراجعة ما يقوله موقع المطوّر ووثائقه وصفحة PyPI ومستودع GitHub، وما يعنيه التثبيت فعليًا، وأين لا تزال الشبكة مستخدمة، وكيف تقارن Argos Translate بأدوات الترجمة الأخرى في الدليل.',
    metaDescription: 'مراجعة Argos Translate: ترجمة مجانية دون اتصال بترخيص MIT لـ Python وسطر الأوامر، تُثبَّت بـ pip. تنبيه صيانة. لم تُختبر.',
    twitterDescription: 'مراجعة Argos Translate: مكتبة مجانية مفتوحة المصدر للترجمة دون اتصال لـ Python وسطر الأوامر. التثبيت وحزم اللغات والخصوصية والقيود والبدائل.',
    audience: 'للمطوّرين والمستخدمين التقنيين الذين يريدون ترجمة مجانية ومفتوحة المصدر على حاسوبهم بدل خدمة سحابية — تغطي التثبيت وحزم اللغات والخصوصية والصيانة والقيود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Argos Translate review',
    targetKeywords: [
      'مراجعة argos translate',
      'argos translate دون اتصال',
      'ترجمة دون اتصال python',
      'مترجم مفتوح المصدر دون اتصال',
      'argostranslate pip install',
      'ترجمة آلية محلية',
      'بديل libretranslate دون اتصال',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**Argos Translate مكتبة ترجمة مجانية ومفتوحة المصدر بترخيص MIT لـ Python وسطر الأوامر، وتترجم دون اتصال بحسب ملف README بعد تنزيل حزم اللغات التي تحتاجها.** أحدث إصدار هو 1.11.0 بتاريخ 2 فبراير 2026. تستند هذه المراجعة إلى موقع المطوّر ووثائقه وصفحة PyPI ومستودع GitHub، لا إلى اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل Argos Translate أداة ترجمة محلية؟',
        answer: 'نعم: يصفها README بأنها مكتبة ترجمة مفتوحة المصدر تعمل دون اتصال، وهي تشغّل نماذج OpenNMT عبر CTranslate2 على حاسوبك. تُستخدم الشبكة للتثبيت ولجلب فهرس الحزم ولتنزيل كل حزمة لغة؛ وبعد ذلك لا تحتاج الترجمة إلى اتصال. لم تفحص PromptQuorum حركة الشبكة، لذا يبقى هذا وصف المطوّر نفسه.',
        bullets: [
          'هي مكتبة وأداة لسطر الأوامر، لا تطبيق مصقول: تثبّتها بـ pip وتثبّت حزمة لغة واحدة لكل اتجاه، مثل الإنجليزية إلى الألمانية.',
          'اللغات التي ليست لها حزمة مباشرة تُترجم عبر لغة وسيطة، وتقول الوثائق إن ذلك يكلّف بعض الجودة.',
          'استخدام GPU اختياري ويُفعَّل بمتغير بيئة؛ والافتراضي هو CPU.',
          'الواجهة الرسومية حزمة منفصلة، وآخر إصدار لها كان عام 2023.',
          'LibreTranslate، تطبيق الويب وواجهة API المبنيان على Argos Translate، مشروع منفصل ولا تغطيه هذه المراجعة.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على Argos Translate', anchor: 'get-it' },
      { label: 'Argos Translate في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Argos Translate', anchor: 'what-is-argos-translate' },
      { label: 'البدء', anchor: 'how-to-get-started' },
      { label: 'حزم اللغات والعتاد', anchor: 'packages-hardware' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'Argos Translate مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Argos Translate', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Argos Translate', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'Argos Translate مكتبة ترجمة مجانية ومفتوحة المصدر تعمل بحسب README دون اتصال على حاسوبك بعد تنزيل حزم اللغات التي تحتاجها.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل قاموسًا تثبّته مرة واحدة لكل زوج لغات: بعد ذلك يترجم حاسوبك النصوص بنفسه، من نص برمجي صغير أو من أمر في الطرفية.',
          },
        ],
        items: [
          'الادعاء المحلي: تعمل الترجمة على الجهاز بنماذج OpenNMT؛ أما التثبيت وتحديث فهرس الحزم وتنزيل حزم اللغات فتستخدم الإنترنت.',
          `الترخيص والمطوّر: MIT، وشيفرة مفتوحة تنشرها Argos Open Tech على GitHub، ولها ${ST.ar('argos-translate')} نجمة.`,
          'التثبيت: أمر pip واحد للمكتبة، ثم حزمة واحدة لكل اتجاه لغة؛ وهي أداة طرفية لا تطبيق يُشغَّل بنقرتين.',
          'الصيانة: آخر إصدار هو 1.11.0 بتاريخ 2 فبراير 2026؛ وآخر تعديل على المستودع نفسه كان في 8 أغسطس 2026.',
          'الثغرات: لا مثبّت، وواجهة رسومية منفصلة وأقدم، ولا قياس لجودة الترجمة في هذه المراجعة.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تحديث منذ 8 أغسطس 2026. أحدث تعديل على المستودع بهذا التاريخ، وآخر إصدار 1.11.0 بتاريخ 2 فبراير 2026، لذا قد يكون المشروع غير مُصان. تحقق من مستودع GitHub بحثًا عن نشاط أحدث قبل الاعتماد عليه. كل ما في هذه الصفحة هو وصف المطوّر نفسه؛ ولم تختبر PromptQuorum الأداة.',
          },
        ],
      },
      getItArgos: {
        id: 'get-it',
        title: 'الحصول على Argos Translate',
        content: [
          '**لا يوجد مثبّت لـ Argos Translate: فهو حزمة Python، لذا يلزم طرفية وتثبيت Python يعمل.** يثبّت أمر واحد المكتبة، ثم تُنزَّل حزم اللغات بالأداة المرفقة `argospm`.',
        ],
        columns: [
          'المنصة',
          'مصدر الحصول',
        ],
        rows: [
          {
            'المنصة': 'المكتبة وسطر الأوامر',
            'مصدر الحصول': '`pip install argostranslate` — راجع [صفحة PyPI](https://pypi.org/project/argostranslate/) للإصدار 1.11.0',
          },
          {
            'المنصة': 'حزم اللغات',
            'مصدر الحصول': '`argospm update` ثم `argospm install translate-en_de` (حزمة لكل اتجاه)؛ [تصفح فهرس الحزم](https://www.argosopentech.com/argospm/index/)',
          },
          {
            'المنصة': 'الواجهة الرسومية لسطح المكتب',
            'مصدر الحصول': '`pip install argostranslategui` — [مستودع منفصل](https://github.com/argosopentech/argos-translate-gui)، وآخر إصدار عام 2023',
          },
          {
            'المنصة': 'الوثائق',
            'مصدر الحصول': '[وثائق Argos Translate](https://argos-translate.readthedocs.io/en/latest/)',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[argosopentech.com](https://www.argosopentech.com)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': '[github.com/argosopentech/argos-translate](https://github.com/argosopentech/argos-translate) — ترخيص MIT',
          },
        ],
        note: 'يلزم وجود طرفية وتثبيت Python؛ ولم تجد PromptQuorum ملف .dmg أو .exe أو صفحة في متجر تطبيقات. لم تجد PromptQuorum صفحة سياسة خصوصية على الموقع، لذا فالصفحات المذكورة في المصادر هي التصريحات الوحيدة المتاحة.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Argos Translate في لمحة',
        columns: [
          'الخاصية',
          'Argos Translate',
        ],
        rows: [
          { 'الخاصية': 'المنصة', 'Argos Translate': 'مكتبة Python لأنظمة macOS وWindows وLinux (لا يذكر المطوّر نظام تشغيل)' },
          { 'الخاصية': 'السعر', 'Argos Translate': 'مجاني' },
          { 'الخاصية': 'الترخيص', 'Argos Translate': 'MIT، مفتوح المصدر' },
          { 'الخاصية': 'مكان التشغيل', 'Argos Translate': 'على حاسوبك بـ OpenNMT وCTranslate2، ودون اتصال بعد تنزيل الحزم' },
          { 'الخاصية': 'الواجهات', 'Argos Translate': 'Python وسطر الأوامر وواجهة رسومية منفصلة' },
          { 'الخاصية': 'اللغات', 'Argos Translate': '100 حزمة أزواج لغات في الفهرس' },
          { 'الخاصية': 'GPU', 'Argos Translate': 'اختياري، بمتغير بيئة' },
          { 'الخاصية': 'خادم API محلي', 'Argos Translate': 'غير مضمَّن؛ LibreTranslate مشروع منفصل' },
        ],
        note: 'قُرئ عدد الحزم من فهرس حزم المشروع؛ ويتغير عدد اللغات والأزواج عند إضافة حزم. غياب الذكر في الموقع يعني غير معروف، لا غير مدعوم.',
      },
      whatIsArgos: {
        id: 'what-is-argos-translate',
        title: 'ما هو Argos Translate',
        content: [
          '**Argos Translate محرك ترجمة للمطوّرين، لا مربع نص داخل تطبيق.** يصفه README بأنه مكتبة ترجمة مفتوحة المصدر تعمل دون اتصال ومكتوبة بلغة Python، وتستخدم OpenNMT في الترجمة ويمكن استخدامها من Python أو من سطر الأوامر أو من واجهة رسومية. تأتي نماذج اللغات في أرشيفات `.argosmodel`، أرشيف لكل اتجاه.',
          'عندما لا توجد حزمة مباشرة يمرّ عبر لغة وسيطة: فإذا ثُبّتت الإسبانية إلى الإنجليزية والإنجليزية إلى الفرنسية أمكنه الترجمة من الإسبانية إلى الفرنسية، مع بعض فقدان الجودة بحسب الوثائق.',
          'يُنشر المشروع باسم Argos Open Tech. أما LibreTranslate، وهو تطبيق ويب وواجهة API مبنيان على Argos Translate، فمشروع آخر له مستودعه الخاص ولا تقيّمه هذه المراجعة. وبحسب README يبيع المطوّر أيضًا نماذج لغات مدرَّبة خصيصًا بسعر 1000 دولار للغة الواحدة (قابل للتفاوض). تستند هذه المراجعة إلى الموقع والوثائق وPyPI وGitHub؛ ولم يُجرَ اختبار عملي، لذا لا تُقيَّم جودة الترجمة ولا سرعتها.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد هو تثبيت بـ pip وحزمة لغة واحدة أو أكثر وأمر واحد.** وتتبع الخطوات ملف README.',
        ],
        numberedItems: [
          {
            title: 'ثبّت المكتبة',
            whyItMatters: 'شغّل `pip install argostranslate` في بيئة Python التي تختارها.',
          },
          {
            title: 'نزّل حزمة لغة',
            whyItMatters: 'شغّل `argospm update` ثم `argospm install translate-en_de` للترجمة من الإنجليزية إلى الألمانية؛ وثبّت الاتجاه المعاكس بشكل منفصل إن احتجته.',
          },
          {
            title: 'ترجم من سطر الأوامر',
            whyItMatters: 'شغّل `argos-translate --from en --to de "Hello World!"`؛ ويُظهر README الناتج «Hallo Welt!».',
          },
          {
            title: 'أو استدعِها من Python',
            whyItMatters: 'استورد `argostranslate.translate` واستدعِ `translate("Hello World", "en", "es")`؛ ويثبّت مثال الموقع الحزمة أولًا بـ `argostranslate.package`.',
          },
        ],
      },
      packagesHardware: {
        id: 'packages-hardware',
        title: 'حزم اللغات والعتاد',
        content: [
          '**كل اتجاه لغة تنزيل مستقل، لذا تتوقف المساحة المطلوبة على عدد الأزواج التي تثبّتها.** يسرد فهرس الحزم المرتبط من الموقع 100 حزمة تغطي 50 رمز لغة، منها العربية والصينية واليابانية والكورية والألمانية والبرتغالية؛ ويضيف README عبارة «والمزيد». لم تقِس PromptQuorum أحجام الحزم ولا جودة الترجمة.',
          'يجري الاستدلال عبر CTranslate2. لا يُذكر متطلب للذاكرة العشوائية أو GPU؛ وبحسب README يُفعَّل تسريع GPU بضبط `ARGOS_DEVICE_TYPE` على `cuda` أو `auto`، فالافتراضي هو CPU. وتترجم مكتبات ذات صلة من المطوّر نفسه ملفات HTML والملفات، لكن كلًّا منها مشروع مستقل.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**يسمّي README مكتبة Argos Translate مكتبة تعمل دون اتصال، ولا يلزم أن يغادر النص الذي تترجمه حاسوبك.** تستخدم الشبكةَ أداة pip والأمر `argospm update` لفهرس الحزم وتنزيل كل ملف `.argosmodel`. وتُثبَّت معها تبعيات مثل Stanza وSentencePiece؛ وأحدث commit في المستودع يجعل Stanza اختياريًا، لكن PyPI 1.11.0 ما زال يدرجها إلزامية. الشيفرة مفتوحة، ولم تفحص PromptQuorum حركة الشبكة ولا ما تجلبه التبعيات أثناء التشغيل، لذا فادعاءات الخصوصية من المطوّر نفسه.',
          'الترخيص هو MIT والبرنامج مجاني. يقبل المشروع التبرعات ويذكر راعيًا في README؛ ولا يقول شيئًا عن ترخيص كل حزمة لغة، ولم تتحقق منه PromptQuorum.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: [
          'الميزة',
          'ما تعنيه في الاستخدام الفعلي',
          'القيد / تنبيه',
        ],
        rows: [
          {
            'الميزة': 'الترجمة على حاسوبك',
            'ما تعنيه في الاستخدام الفعلي': 'يمكن ترجمة النصوص دون خدمة عبر الإنترنت بعد تثبيت الحزم.',
            'القيد / تنبيه': 'التثبيت وتنزيل الحزم يحتاجان إلى الشبكة؛ ولم تُفحص الحركة.',
          },
          {
            'الميزة': 'مجاني ومفتوح المصدر',
            'ما تعنيه في الاستخدام الفعلي': 'شيفرة MIT دون حساب ودون رسوم لكل كلمة.',
            'القيد / تنبيه': 'لم تُفحص تراخيص الحزم؛ والنماذج المخصصة خدمة مدفوعة.',
          },
          {
            'الميزة': 'Python وسطر الأوامر',
            'ما تعنيه في الاستخدام الفعلي': 'سهل الأتمتة والمعالجة الدفعية والدمج في أدواتك.',
            'القيد / تنبيه': 'يتطلب طرفية وPython؛ ولا مثبّت.',
          },
          {
            'الميزة': 'حزم لغات كثيرة',
            'ما تعنيه في الاستخدام الفعلي': 'يسرد الفهرس 100 حزمة تغطي 50 رمز لغة.',
            'القيد / تنبيه': 'تنزيل لكل اتجاه؛ والمرور عبر الإنجليزية يكلّف بعض الجودة.',
          },
          {
            'الميزة': 'استخدام GPU اختياري',
            'ما تعنيه في الاستخدام الفعلي': 'يكفي ضبط متغير واحد للاستفادة من العتاد المدعوم.',
            'القيد / تنبيه': 'لا تُنشر هنا أرقام للسرعة أو الجودة.',
          },
          {
            'الميزة': 'مشروع راسخ',
            'ما تعنيه في الاستخدام الفعلي': 'الإصدار 1.11.0 على PyPI ولمستودعه آلاف النجوم.',
            'القيد / تنبيه': 'لا تحديث منذ 8 أغسطس 2026؛ والواجهة الرسومية أقدم.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Argos Translate مقابل البدائل',
        content: [
          'هذه أقرب أدوات الترجمة في الدليل: تطبيق لـ iPhone، ومسار لترجمة الكتب، وتطبيق ترجمات مرئية يعتمد على Argos Translate نفسه.',
        ],
        columns: [
          'التطبيق',
          'المنصات',
          'السعر والترخيص',
          'الدور',
          'الفرق الرئيسي',
        ],
        rows: [
          {
            'التطبيق': 'Argos Translate',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'مكتبة ترجمة دون اتصال',
            'الفرق الرئيسي': 'Python وسطر الأوامر؛ حزمة لكل زوج لغات',
          },
          {
            'التطبيق': '[On-Device AI Translator](/ar/power-local-llm/on-device-ai-translator-review)',
            'المنصات': 'iPhone',
            'السعر والترخيص': 'مجاني جزئيًا، مغلق المصدر',
            'الدور': 'تطبيق ترجمة للهاتف',
            'الفرق الرئيسي': 'يشغّل نماذج لغوية على الجهاز؛ تطبيق لا مكتبة',
          },
          {
            'التطبيق': '[TranslateBooksWithLLMs](/ar/power-local-llm/translate-books-with-llms-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'الدور': 'ترجمة الكتب والمستندات',
            'الفرق الرئيسي': 'يستخدم نموذجًا لغويًا محليًا أو سحابيًا بدل محرك ترجمة مخصص',
          },
          {
            'التطبيق': '[Sablate](/ar/power-local-llm/sablate-review)',
            'المنصات': 'Windows وMac',
            'السعر والترخيص': 'مجاني جزئيًا، مغلق المصدر',
            'الدور': 'تطبيق ترجمات مرئية',
            'الفرق الرئيسي': 'يترجم الترجمات المرئية بـ Argos مع تفريغ صوتي؛ وليس مترجمًا عامًا',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Argos Translate',
        items: [
          '**المطوّرون.** تناسب واجهة Python البرمجية وسطر الأوامر النصوص البرمجية والمسارات وأدواتك الخاصة.',
          '**من يتجنبون المترجمات عبر الإنترنت.** بعد تثبيت الحزم تعمل الترجمة على الحاسوب بحسب README.',
          '**مستخدمو المصادر المفتوحة.** شيفرة MIT علنية والبرنامج لا يكلّف شيئًا.',
          '**الهواة الذين يملكون GPU.** يكفي متغير بيئة واحد لتفعيل GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Argos Translate',
        items: [
          '**من يريدون تطبيقًا يُشغَّل بنقرتين.** لا يوجد مثبّت، والواجهة الرسومية حزمة منفصلة وأقدم.',
          '**القراء الذين يحتاجون إلى جودة مثبتة.** لم تختبر PromptQuorum الدقة ولا السرعة.',
          '**من يحتاجون إلى مشروع مُصان.** آخر تعديل على المستودع بتاريخ 8 أغسطس 2026.',
          '**مستخدمو الهاتف.** انظر بدلًا من ذلك إلى On-Device AI Translator لـ iPhone.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Argos Translate دون اتصال؟',
            a: 'يصفه README بأنه مكتبة ترجمة تعمل دون اتصال، وتستخدم الترجمة حزم اللغات المثبّتة. تحتاج إلى اتصال لتثبيت المكتبة وتنزيل كل حزمة؛ ولم تختبره PromptQuorum والشبكة مقطوعة.',
          },
          {
            q: 'ما الفرق بين Argos Translate وLibreTranslate؟',
            a: 'بحسب README، LibreTranslate تطبيق ويب وواجهة API مبنيان على Argos Translate. أما Argos Translate فهو مكتبة الترجمة نفسها، بسطر أوامر وواجهة Python برمجية؛ وLibreTranslate مشروع منفصل ولا تغطيه هذه المراجعة.',
          },
          {
            q: 'هل يترجم بين أي لغتين؟',
            a: 'فقط بين الأزواج التي لها حزمة مثبّتة، مباشرة أو عبر لغة وسيطة. تقول الوثائق إن هذا المرور، مثل الإسبانية إلى الإنجليزية إلى الفرنسية، يعمل مع بعض فقدان الجودة.',
          },
          {
            q: 'هل له واجهة رسومية؟',
            a: 'نعم، لكن كحزمة منفصلة اسمها argostranslategui، وإصدارها على PyPI يعود إلى 2023 وآخر تعديل على مستودعها كان في مارس 2025. أما المكتبة الرئيسية فمصممة لـ Python وسطر الأوامر.',
          },
          {
            q: 'هل يمكنني الحصول على نموذج لغة مخصص؟',
            a: 'يعرض README نماذج مدرَّبة على بياناتك بسعر 1000 دولار للغة الواحدة (قابل للتفاوض). ولم تقيّم PromptQuorum هذه الخدمة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسبك Argos Translate إذا كنت تريد ترجمة مجانية ومفتوحة المصدر تعمل بحسب README على حاسوبك ويمكن أتمتتها من Python أو الطرفية. له ترخيص MIT وإصدارات منتظمة على PyPI (1.10.0 في أكتوبر 2025 و1.11.0 في فبراير 2026) وفهرس حزم كبير.',
          'التحفظات تخص النطاق والصيانة: لا مثبّت، وواجهة رسومية منفصلة وأقدم، وتنزيل لكل اتجاه لغة، ولا تحديث منذ 8 أغسطس 2026، وادعاءات للجودة والخصوصية لم تستطع PromptQuorum التحقق منها. جرّب زوج لغات واحدًا على نص صغير قبل أن تبني عليه أي شيء.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Argos Open Tech](https://www.argosopentech.com) — نظرة عامة على المنتج والتثبيت والأمثلة.',
          '[الوثائق](https://argos-translate.readthedocs.io/en/latest/) — الإعدادات وسطر الأوامر وصفحات الواجهة الرسومية.',
          '[مستودع GitHub](https://github.com/argosopentech/argos-translate) — README وترخيص MIT وسجل commits.',
          '[صفحة المشروع على PyPI](https://pypi.org/project/argostranslate/) — الإصدار 1.11.0 وتاريخ الإصدار.',
          '[مستودع فهرس الحزم](https://github.com/argosopentech/argospm-index) — حزم اللغات وروابط التنزيل.',
          '[مستودع واجهة Argos Translate الرسومية](https://github.com/argosopentech/argos-translate-gui) — واجهة سطح المكتب المنفصلة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة On-Device AI Translator](/ar/power-local-llm/on-device-ai-translator-review) — ترجمة دون اتصال بنماذج لغوية لـ iPhone.',
          '[مراجعة TranslateBooksWithLLMs](/ar/power-local-llm/translate-books-with-llms-review) — ترجمة كتب كاملة بنموذج محلي أو سحابي.',
          '[مراجعة Sablate](/ar/power-local-llm/sablate-review) — تطبيق ترجمات مرئية يستخدم Argos للترجمة دون اتصال.',
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
    heroImage: '/images/argos-translate-review-hero-ko.webp',
    title: 'Argos Translate 리뷰: Python과 명령줄용 무료 오프라인 번역',
    seoTitle: 'Argos Translate 리뷰: 무료 오프라인 번역 도구',
    intro: 'Argos Translate는 내 컴퓨터에서 실행되는 MIT 라이선스의 무료 번역 라이브러리입니다. pip로 설치하고 언어 패키지를 한 번 내려받으면, 텍스트를 온라인 서비스로 보내지 않고 Python이나 명령줄에서 번역할 수 있습니다. 이 리뷰는 개발사의 웹사이트, 문서, PyPI 페이지, GitHub 저장소가 밝히는 내용, 설치에 실제로 필요한 작업, 네트워크가 여전히 쓰이는 지점, 디렉터리의 다른 번역 도구와의 비교를 정리합니다.',
    metaDescription: 'Argos Translate 리뷰: Python과 명령줄용 MIT 무료 오프라인 번역, pip로 설치. 유지보수 경고 있음. 직접 테스트하지 않았습니다.',
    twitterDescription: 'Argos Translate 리뷰: Python과 명령줄용 무료 오픈 소스 오프라인 번역 라이브러리. 설치, 언어 패키지, 개인정보 보호, 한계, 대안을 정리했습니다.',
    audience: '클라우드 서비스가 아니라 자신의 컴퓨터에서 무료 오픈 소스 번역을 하려는 개발자와 기술 사용자를 위한 글입니다. 설치, 언어 패키지, 개인정보 보호, 유지보수, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Argos Translate review',
    targetKeywords: [
      'argos translate 리뷰',
      'argos translate 오프라인',
      'python 오프라인 번역',
      '오픈 소스 오프라인 번역기',
      'argostranslate pip install',
      '로컬 기계 번역',
      'libretranslate 오프라인 대안',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**Argos Translate는 Python과 명령줄용 MIT 라이선스 무료 오픈 소스 번역 라이브러리로, README에 따르면 필요한 언어 패키지를 내려받은 뒤에는 오프라인으로 번역합니다.** 최신 릴리스는 2026년 2월 2일의 버전 1.11.0입니다. 이 리뷰는 개발사의 웹사이트, 문서, PyPI 페이지, GitHub 저장소에 근거하며 직접 테스트한 결과는 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Argos Translate는 로컬 번역 도구인가요?',
        answer: '그렇습니다. README는 오픈 소스 오프라인 번역 라이브러리라고 설명하며, CTranslate2를 통해 OpenNMT 모델을 내 컴퓨터에서 실행합니다. 네트워크는 설치, 패키지 색인 가져오기, 각 언어 패키지 다운로드에 쓰이고, 그 뒤의 번역에는 연결이 필요 없습니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았으므로 이는 개발사의 설명에 머뭅니다.',
        bullets: [
          '다듬어진 앱이 아니라 라이브러리와 명령줄 도구입니다. pip로 설치하고, 영어에서 독일어처럼 방향마다 언어 패키지를 하나씩 설치합니다.',
          '직접 패키지가 없는 언어는 중간 언어를 거쳐 번역되며, 문서에 따르면 품질이 다소 떨어집니다.',
          'GPU 사용은 선택 사항이며 환경 변수로 켭니다. 기본값은 CPU입니다.',
          '데스크톱 GUI는 별도 패키지이며 마지막 배포는 2023년입니다.',
          'Argos Translate를 기반으로 만든 웹 앱과 API인 LibreTranslate는 별도 프로젝트이므로 여기서 다루지 않습니다.',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Argos Translate 받기', anchor: 'get-it' },
      { label: 'Argos Translate 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Argos Translate란', anchor: 'what-is-argos-translate' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '언어 패키지와 하드웨어', anchor: 'packages-hardware' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Argos Translate와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Argos Translate를 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'Argos Translate를 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'Argos Translate는 무료 오픈 소스 번역 라이브러리로, README에 따르면 필요한 언어 패키지를 내려받은 뒤에는 내 컴퓨터에서 오프라인으로 실행됩니다.',
          },
          {
            type: 'plain-terms',
            text: '언어 쌍마다 한 번 설치하는 사전과 같습니다. 그 뒤에는 컴퓨터가 작은 스크립트나 터미널 명령으로 텍스트를 스스로 번역합니다.',
          },
        ],
        items: [
          '로컬 주장: 번역은 OpenNMT 모델로 기기에서 실행되며, 설치, 패키지 색인 업데이트, 언어 패키지 다운로드에는 인터넷을 사용합니다.',
          `라이선스와 개발사: MIT, Argos Open Tech가 GitHub에 공개한 오픈 코드이며 별은 ${ST.ko('argos-translate')}개입니다.`,
          '설치: 라이브러리는 pip 명령 하나, 그다음 번역 방향마다 패키지 하나입니다. 더블클릭으로 쓰는 앱이 아니라 터미널 도구입니다.',
          '유지보수: 마지막 릴리스는 2026년 2월 2일의 버전 1.11.0이고, 저장소 자체의 마지막 변경은 2026년 8월 8일입니다.',
          '부족한 점: 설치 프로그램이 없고, GUI는 별도이며 더 오래되었고, 이 리뷰에서는 번역 품질을 측정하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026년 8월 8일 이후 업데이트가 없습니다. 저장소의 가장 최근 변경이 이 날짜이고 마지막 릴리스인 버전 1.11.0은 2026년 2월 2일이므로, 프로젝트가 더 이상 관리되지 않을 수 있습니다. 의존하기 전에 GitHub 저장소에서 더 최근의 활동이 있는지 확인하십시오. 이 페이지의 모든 내용은 개발사 자체의 설명이며, PromptQuorum은 이 도구를 테스트하지 않았습니다.',
          },
        ],
      },
      getItArgos: {
        id: 'get-it',
        title: 'Argos Translate 받기',
        content: [
          '**Argos Translate에는 설치 프로그램이 없습니다. Python 패키지이므로 터미널과 정상 작동하는 Python 설치가 필요합니다.** 명령 하나로 라이브러리를 설치하고, 언어 패키지는 이후 함께 제공되는 `argospm` 도구로 내려받습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': '라이브러리와 명령줄',
            '받는 곳': '`pip install argostranslate` — 버전 1.11.0은 [PyPI 페이지](https://pypi.org/project/argostranslate/) 참고',
          },
          {
            '플랫폼': '언어 패키지',
            '받는 곳': '`argospm update` 다음에 `argospm install translate-en_de`(방향마다 패키지 하나), [패키지 색인 둘러보기](https://www.argosopentech.com/argospm/index/)',
          },
          {
            '플랫폼': '데스크톱 GUI',
            '받는 곳': '`pip install argostranslategui` — [별도 저장소](https://github.com/argosopentech/argos-translate-gui), 마지막 배포는 2023년',
          },
          {
            '플랫폼': '문서',
            '받는 곳': '[Argos Translate 문서](https://argos-translate.readthedocs.io/en/latest/)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[argosopentech.com](https://www.argosopentech.com)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[github.com/argosopentech/argos-translate](https://github.com/argosopentech/argos-translate) — MIT 라이선스',
          },
        ],
        note: '터미널과 Python 설치가 필요하며, PromptQuorum은 .dmg, .exe, 스토어 등록 페이지를 찾지 못했습니다. PromptQuorum은 웹사이트에서 개인정보 처리방침 페이지를 찾지 못했으므로, 출처에 나열한 페이지가 유일한 설명입니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Argos Translate 한눈에 보기',
        columns: ['항목', 'Argos Translate'],
        rows: [
          { '항목': '플랫폼', 'Argos Translate': 'macOS, Windows, Linux용 Python 라이브러리(개발사는 운영체제를 명시하지 않음)' },
          { '항목': '가격', 'Argos Translate': '무료' },
          { '항목': '라이선스', 'Argos Translate': 'MIT, 오픈 소스' },
          { '항목': '실행 위치', 'Argos Translate': '내 컴퓨터에서 OpenNMT와 CTranslate2 사용, 패키지 다운로드 후 오프라인' },
          { '항목': '인터페이스', 'Argos Translate': 'Python, 명령줄, 별도 GUI' },
          { '항목': '언어', 'Argos Translate': '색인에 언어 쌍 패키지 100개' },
          { '항목': 'GPU', 'Argos Translate': '선택 사항, 환경 변수로 켬' },
          { '항목': '로컬 API 서버', 'Argos Translate': '포함되지 않음, LibreTranslate는 별도 프로젝트' },
        ],
        note: '패키지 수는 프로젝트의 패키지 색인에서 읽은 값이며, 패키지가 추가되면 언어와 쌍의 수는 달라집니다. 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsArgos: {
        id: 'what-is-argos-translate',
        title: 'Argos Translate란',
        content: [
          '**Argos Translate는 개발자를 위한 번역 엔진이며, 앱 안의 텍스트 상자가 아닙니다.** README는 Python으로 작성된 오픈 소스 오프라인 번역 라이브러리라고 설명하며, 번역에 OpenNMT를 사용하고 Python, 명령줄, GUI에서 쓸 수 있습니다. 언어 모델은 방향마다 하나씩 `.argosmodel` 아카이브로 제공됩니다.',
          '직접 패키지가 없으면 중간 언어를 거칩니다. 문서에 따르면 스페인어에서 영어, 영어에서 프랑스어가 설치되어 있을 때 스페인어에서 프랑스어로 번역할 수 있지만 품질이 다소 떨어집니다.',
          '프로젝트는 Argos Open Tech라는 이름으로 공개됩니다. Argos Translate를 기반으로 만든 웹 앱과 API인 LibreTranslate는 자체 저장소를 가진 다른 프로젝트이며 여기서는 리뷰하지 않습니다. README에 따르면 개발사는 사용자의 데이터로 학습시킨 맞춤 언어 모델도 언어당 1,000달러(협의 가능)에 판매합니다. 이 리뷰는 웹사이트, 문서, PyPI, GitHub에 근거하며 직접 테스트하지 않았으므로 번역 품질과 속도는 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 pip 설치, 언어 패키지 하나 이상, 명령 하나로 이루어집니다.** 단계는 README를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '라이브러리 설치',
            whyItMatters: '원하는 Python 환경에서 `pip install argostranslate`를 실행합니다.',
          },
          {
            title: '언어 패키지 내려받기',
            whyItMatters: '`argospm update`를 실행한 뒤 영어에서 독일어는 `argospm install translate-en_de`로 설치합니다. 반대 방향이 필요하면 따로 설치합니다.',
          },
          {
            title: '명령줄에서 번역',
            whyItMatters: '`argos-translate --from en --to de "Hello World!"`를 실행합니다. README는 “Hallo Welt!”라는 결과를 보여 줍니다.',
          },
          {
            title: '또는 Python에서 호출',
            whyItMatters: '`argostranslate.translate`를 가져와 `translate("Hello World", "en", "es")`를 호출합니다. 사이트의 예제는 먼저 `argostranslate.package`로 패키지를 설치합니다.',
          },
        ],
      },
      packagesHardware: {
        id: 'packages-hardware',
        title: '언어 패키지와 하드웨어',
        content: [
          '**언어 방향마다 별도 다운로드이므로, 디스크 사용량은 설치하는 언어 쌍의 수에 달려 있습니다.** 웹사이트에서 연결되는 패키지 색인에는 아랍어, 중국어, 일본어, 한국어, 독일어, 포르투갈어를 포함해 50개 언어 코드에 걸친 패키지 100개가 있으며, README는 “그 밖에도 더 있다”고 적습니다. PromptQuorum은 패키지 크기도 번역 품질도 측정하지 않았습니다.',
          '추론은 CTranslate2를 통해 실행됩니다. RAM이나 GPU 요구 사항은 명시되어 있지 않으며, README에 따르면 `ARGOS_DEVICE_TYPE`을 `cuda` 또는 `auto`로 설정하면 GPU 가속이 켜지므로 기본값은 CPU입니다. 같은 개발사의 관련 라이브러리 중에는 HTML과 파일을 번역하는 것도 있지만, 각각 별도 프로젝트입니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**README는 Argos Translate를 오프라인 라이브러리라고 부르며, 번역할 텍스트가 내 컴퓨터를 떠날 필요는 없습니다.** 네트워크는 pip, 패키지 색인을 위한 `argospm update`, 각 `.argosmodel` 파일 다운로드에 쓰입니다. Stanza와 SentencePiece 같은 의존 라이브러리가 함께 설치되며, 저장소의 최신 커밋은 Stanza를 선택 사항으로 바꿨지만 PyPI의 1.11.0은 여전히 필수로 표시합니다. 코드는 공개되어 있으나 PromptQuorum은 네트워크 트래픽이나 의존 라이브러리가 실행 중에 가져오는 내용을 점검하지 않았으므로, 개인정보 보호에 관한 설명은 개발사 자체의 것입니다.',
          '라이선스는 MIT이며 소프트웨어는 무료입니다. 프로젝트는 기부를 받고 README에 후원사를 표시합니다. 개별 언어 패키지의 라이선스에 대한 언급은 없으며, PromptQuorum도 확인하지 않았습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '내 컴퓨터에서 번역',
            '실제 사용에서의 의미': '패키지를 설치한 뒤에는 온라인 서비스 없이 텍스트를 번역할 수 있습니다.',
            '한계 / 주의점': '설치와 패키지 다운로드에는 네트워크가 필요하며, 트래픽은 점검하지 않았습니다.',
          },
          {
            '장점': '무료 오픈 소스',
            '실제 사용에서의 의미': 'MIT 코드이며 계정도, 단어당 요금도 없습니다.',
            '한계 / 주의점': '패키지 라이선스는 확인하지 않았고, 맞춤 모델은 유료 서비스입니다.',
          },
          {
            '장점': 'Python과 명령줄',
            '실제 사용에서의 의미': '스크립트 작성, 일괄 처리, 자체 도구에 넣기가 쉽습니다.',
            '한계 / 주의점': '터미널과 Python이 필요하며 설치 프로그램은 없습니다.',
          },
          {
            '장점': '많은 언어 패키지',
            '실제 사용에서의 의미': '색인에 50개 언어 코드에 걸친 패키지 100개가 있습니다.',
            '한계 / 주의점': '방향마다 한 번씩 내려받아야 하며, 영어를 거치면 품질이 다소 떨어집니다.',
          },
          {
            '장점': '선택형 GPU 사용',
            '실제 사용에서의 의미': '변수 하나만 설정하면 지원 하드웨어를 활용할 수 있습니다.',
            '한계 / 주의점': '속도나 품질 수치는 여기서 제공하지 않습니다.',
          },
          {
            '장점': '자리 잡은 프로젝트',
            '실제 사용에서의 의미': '버전 1.11.0이 PyPI에 있고 저장소의 별은 수천 개입니다.',
            '한계 / 주의점': '2026년 8월 8일 이후 업데이트가 없으며 GUI는 더 오래되었습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Argos Translate와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 번역 도구는 iPhone 앱, 도서 번역 파이프라인, 그리고 Argos Translate 자체를 사용하는 자막 앱입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'Argos Translate',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '오프라인 번역 라이브러리',
            '주요 차이': 'Python과 명령줄, 언어 쌍마다 패키지 하나',
          },
          {
            '앱': '[On-Device AI Translator](/ko/power-local-llm/on-device-ai-translator-review)',
            '플랫폼': 'iPhone',
            '가격과 라이선스': '부분 무료, 비공개 소스',
            '역할': '휴대폰 번역 앱',
            '주요 차이': '언어 모델을 기기에서 실행, 라이브러리가 아니라 앱',
          },
          {
            '앱': '[TranslateBooksWithLLMs](/ko/power-local-llm/translate-books-with-llms-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, AGPL-3.0',
            '역할': '도서와 문서 번역',
            '주요 차이': '전용 번역 엔진 대신 로컬 또는 클라우드 언어 모델 사용',
          },
          {
            '앱': '[Sablate](/ko/power-local-llm/sablate-review)',
            '플랫폼': 'Windows, Mac',
            '가격과 라이선스': '부분 무료, 비공개 소스',
            '역할': '자막 앱',
            '주요 차이': 'Argos로 자막을 번역하고 전사도 제공, 범용 번역기는 아님',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Argos Translate를 쓰면 좋은 사용자',
        items: [
          '**개발자.** Python API와 명령줄은 스크립트, 파이프라인, 자체 도구에 적합합니다.',
          '**온라인 번역기를 피하려는 사람.** README에 따르면 패키지를 설치한 뒤의 번역은 컴퓨터에서 실행됩니다.',
          '**오픈 소스 사용자.** MIT 코드가 공개되어 있고 소프트웨어는 무료입니다.',
          '**GPU로 실험하려는 사람.** 환경 변수 하나로 GPU를 켤 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Argos Translate를 쓰지 말아야 할 사용자',
        items: [
          '**더블클릭으로 쓰는 앱을 원하는 사람.** 설치 프로그램이 없고 GUI는 별도의 더 오래된 패키지입니다.',
          '**검증된 품질이 필요한 독자.** PromptQuorum은 정확도와 속도를 테스트하지 않았습니다.',
          '**관리되는 프로젝트가 필요한 사람.** 저장소의 마지막 변경은 2026년 8월 8일입니다.',
          '**휴대폰 사용자.** 대신 iPhone용 On-Device AI Translator를 살펴보십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Argos Translate는 오프라인으로 작동하나요?',
            a: 'README는 오프라인 번역 라이브러리라고 설명하며, 번역에는 설치된 언어 패키지를 사용합니다. 라이브러리 설치와 각 패키지 다운로드에는 연결이 필요하며, PromptQuorum은 네트워크를 끊은 상태에서는 테스트하지 않았습니다.',
          },
          {
            q: 'Argos Translate와 LibreTranslate는 어떻게 다른가요?',
            a: 'README에 따르면 LibreTranslate는 Argos Translate를 기반으로 만든 웹 앱과 API입니다. Argos Translate는 명령줄과 Python API를 갖춘 번역 라이브러리 자체이며, LibreTranslate는 별도 프로젝트이므로 여기서 다루지 않습니다.',
          },
          {
            q: '임의의 두 언어 사이를 번역할 수 있나요?',
            a: '패키지가 설치된 쌍만 가능하며, 직접 또는 중간 언어를 거칩니다. 문서에 따르면 스페인어에서 영어를 거쳐 프랑스어로 가는 식의 우회는 품질이 다소 떨어지지만 작동합니다.',
          },
          {
            q: '그래픽 인터페이스가 있나요?',
            a: '있지만 별도 패키지인 argostranslategui로, PyPI 배포는 2023년이고 저장소의 마지막 변경은 2025년 3월입니다. 메인 라이브러리는 Python과 명령줄용으로 만들어졌습니다.',
          },
          {
            q: '맞춤 언어 모델을 받을 수 있나요?',
            a: 'README는 사용자의 데이터로 학습시킨 맞춤 모델을 언어당 1,000달러(협의 가능)에 제공한다고 밝힙니다. PromptQuorum은 이 서비스를 평가하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Argos Translate는 README에 따르면 내 컴퓨터에서 실행되고 Python이나 터미널에서 스크립트로 쓸 수 있는 무료 오픈 소스 번역을 원할 때 적합합니다. MIT 라이선스, 규칙적인 PyPI 릴리스(2025년 10월의 1.10.0, 2026년 2월의 1.11.0), 큰 패키지 색인을 갖추고 있습니다.',
          '주의할 점은 범위와 유지보수입니다. 설치 프로그램이 없고, GUI는 별도이며 더 오래되었고, 언어 방향마다 내려받아야 하며, 2026년 8월 8일 이후 업데이트가 없고, PromptQuorum이 확인하지 못한 품질과 개인정보 보호 주장이 있습니다. 무언가를 만들기 전에 작은 텍스트로 언어 쌍 하나를 먼저 시험해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Argos Open Tech 웹사이트](https://www.argosopentech.com) — 제품 개요, 설치, 예제.',
          '[문서](https://argos-translate.readthedocs.io/en/latest/) — 설정, 명령줄, GUI 페이지.',
          '[GitHub 저장소](https://github.com/argosopentech/argos-translate) — README, MIT 라이선스, 커밋 기록.',
          '[PyPI 프로젝트 페이지](https://pypi.org/project/argostranslate/) — 버전 1.11.0과 배포 날짜.',
          '[패키지 색인 저장소](https://github.com/argosopentech/argospm-index) — 언어 패키지와 다운로드 링크.',
          '[Argos Translate GUI 저장소](https://github.com/argosopentech/argos-translate-gui) — 별도의 데스크톱 인터페이스.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[On-Device AI Translator 리뷰](/ko/power-local-llm/on-device-ai-translator-review) — iPhone용 언어 모델 오프라인 번역.',
          '[TranslateBooksWithLLMs 리뷰](/ko/power-local-llm/translate-books-with-llms-review) — 로컬 또는 클라우드 모델로 책 전체 번역.',
          '[Sablate 리뷰](/ko/power-local-llm/sablate-review) — 오프라인 번역에 Argos를 사용하는 자막 앱.',
          '[전체 Local LLM Software Directory](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
        ],
      },
    },
  },
}

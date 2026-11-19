// LibreTranslate Review: free, open-source (AGPL-3.0) self-hosted machine translation server with a web interface and REST API, powered by Argos Translate
// Slug: libretranslate-review
// Companion to: argos-translate-review, translate-books-with-llms-review, on-device-ai-translator-review
// Facts verified 2026-11-19 against libretranslate.com, docs.libretranslate.com (quickstart, installation, API usage), GitHub LibreTranslate/LibreTranslate (README, TRADEMARK.md, API: stars, releases, commits), PyPI libretranslate 1.9.6 (2026-05-26), portal.libretranslate.com (plans, FAQ, privacy.html last updated 2025-09-23) and the third-party Localhosted listing.
// Not hands-on tested. Stale-project warning is OFF: last upstream update 2026-11-14 (newest push, translation commit; newest code change 2026-10-26; latest release 1.9.6 on 2026-05-26), 5 days before 2026-11-19.
// HQ flag US: postal address in St Petersburg, Florida, in the privacy policy (hqCountrySource on the tile).
// geo-translation: applied to all 8 non-EN blocks (docs/geo-translation.md read in full). Prices stay in USD as listed on the portal (no conversion).

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
    publishDate: '2026-11-19',
    dateModified: '2026-11-19',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/libretranslate-review-hero-en.webp',
    title: 'LibreTranslate Review: Free Self-Hosted Translation API and Web Interface',
    seoTitle: 'LibreTranslate Review: Free Self-Hosted Translator',
    intro: 'LibreTranslate is an AGPL-3.0 machine translation server that you run yourself: you install it with pip or Docker, it serves a web interface and a REST API on your own machine, and its translation engine is the Argos Translate library, so text is translated by models you download rather than by Google or Azure. The project also runs a paid hosted API at [libretranslate.com](https://libretranslate.com). This review covers what the website, documentation, PyPI page, GitHub repository and hosted-service privacy policy say, what the install involves and how LibreTranslate compares with other translation tools in the directory.',
    metaDescription: 'LibreTranslate review: free AGPL-3.0 translation API and web UI you host yourself, powered by Argos Translate. Pip or Docker install. Not tested.',
    twitterDescription: 'LibreTranslate review: free open-source translation server with a web interface and REST API. Install, privacy, hosted plans, limits and alternatives.',
    audience: 'Developers and teams who want a free, open-source translation server they host themselves instead of a cloud translation service — covers install, languages, privacy, hosted plans, maintenance, limits and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreTranslate review',
    targetKeywords: [
      'libretranslate review',
      'libretranslate self-hosted',
      'libretranslate docker',
      'libretranslate api',
      'self-hosted translation api',
      'open source translation server',
      'libretranslate vs argos translate',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**LibreTranslate is a free, open-source (AGPL-3.0) translation server with a web interface and a REST API that, per its README, is entirely self-hosted and uses the Argos Translate engine instead of proprietary services such as Google or Azure.** The newest release is version 1.9.6 from 26 May 2026, and the repository was last changed on 14 November 2026. This review rests on the project\'s website, documentation, PyPI page, GitHub repository and hosted-service privacy policy, not on hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is LibreTranslate a local translation tool?',
        answer: 'Yes, when you host it yourself: the README calls it entirely self-hosted, and the documentation runs it on your own machine with Argos Translate models, so text stays on your server. The public site and the paid API are the project\'s hosted service instead, where text goes to that service. PromptQuorum did not inspect network traffic or test either, so this is the project\'s own description.',
        bullets: [
          'It is a server, not a desktop app: install it with `pip install libretranslate` or Docker, start it, then open `http://localhost:5000`.',
          'The REST API offers translation, language detection, file translation and a language list; no API key is needed unless you switch key checks on.',
          'Languages are models loaded at start-up: all available ones by default, fewer with `--load-only`.',
          'The hosted API is a separate paid service with no free keys.',
          'The last release is from May 2026 and the documentation states no hardware requirements.',
        ],
        updatedDate: '2026-11-19',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get LibreTranslate', anchor: 'get-it' },
      { label: 'LibreTranslate at a Glance', anchor: 'at-a-glance' },
      { label: 'What LibreTranslate Is', anchor: 'what-is-libretranslate' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Languages, Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'LibreTranslate vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use LibreTranslate', anchor: 'who-should-use' },
      { label: 'Who Should Not Use LibreTranslate', anchor: 'who-should-not-use' },
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
            text: 'LibreTranslate is a translation service you host yourself, with a web interface and a REST API, and per its README it translates with the open-source Argos Translate engine.',
          },
          {
            type: 'plain-terms',
            text: 'Think of running your own small translation website on your computer or server: you install it once, language models are loaded, and your apps or browser send text to it instead of to an online service.',
          },
        ],
        items: [
          'Local claim: a self-hosted install translates with Argos Translate models on your own server; installing it uses the internet, and the documentation does not say when models are first downloaded.',
          `License and project: AGPL-3.0, open code published by LibreTranslate Contributors on GitHub, with ${ST.en('libretranslate')} stars.`,
          'Install: one pip command or a Docker script, then a browser at port 5000; it is a terminal tool, not a double-click app.',
          'Maintenance: version 1.9.6 is from 26 May 2026, and the repository was last changed on 14 November 2026 (translation updates; the newest code change is from 26 October 2026).',
          'Gaps: no stated hardware requirement, no installer and no benchmark of translation quality in this review.',
        ],
      },
      getItLibreTranslate: {
        id: 'get-it',
        title: 'Get LibreTranslate',
        content: [
          '**LibreTranslate has no installer: you run it as a Python package or in Docker, so a terminal is required.** The quickstart is `pip install libretranslate` followed by `libretranslate`, which serves the web interface at `http://localhost:5000`.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Python package (pip)',
            'Get It': '`pip install libretranslate`, then `libretranslate` — see the [PyPI page](https://pypi.org/project/libretranslate/)',
          },
          {
            Platform: 'Docker',
            'Get It': 'Clone the repository, then run `./run.sh` (Linux and macOS) or `run.bat` (Windows)',
          },
          {
            Platform: 'Docker with NVIDIA GPU',
            'Get It': '`docker compose -f docker-compose.cuda.yml up -d --build` (CUDA 12.4.1)',
          },
          {
            Platform: 'Gunicorn and Kubernetes',
            'Get It': 'Gunicorn command and Helm chart in the [installation guide](https://docs.libretranslate.com/guides/installation/)',
          },
          {
            Platform: 'Documentation',
            'Get It': '[docs.libretranslate.com](https://docs.libretranslate.com)',
          },
          {
            Platform: 'Website',
            'Get It': '[libretranslate.com](https://libretranslate.com) — also the hosted web interface (text goes to that service)',
          },
          {
            Platform: 'Hosted API keys',
            'Get It': '[portal.libretranslate.com](https://portal.libretranslate.com) — paid plans',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[Hosted-service privacy policy](https://portal.libretranslate.com/privacy.html)',
          },
          {
            Platform: 'Source code',
            'Get It': '[github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) — AGPL-3.0',
          },
        ],
        note: 'Current version **1.9.6**, released 26 May 2026; the repository\'s newest push is from 14 November 2026 (checked 19 November 2026, [GitHub releases](https://github.com/LibreTranslate/LibreTranslate/releases)). A terminal, Python or Docker is required; PromptQuorum found no .dmg, .exe, store listing or release assets. The privacy policy covers the hosted service, not your own server.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'LibreTranslate at a Glance',
        columns: ['Attribute', 'LibreTranslate'],
        rows: [
          {
            Attribute: 'Platform',
            LibreTranslate: 'Python or Docker on macOS, Windows and Linux; Helm chart for Kubernetes',
          },
          {
            Attribute: 'Price',
            LibreTranslate: 'Free software; the hosted API is paid',
          },
          {
            Attribute: 'License',
            LibreTranslate: 'AGPL-3.0, open source',
          },
          {
            Attribute: 'Runs',
            LibreTranslate: 'On your own server with Argos Translate models; a hosted service also exists',
          },
          {
            Attribute: 'Interfaces',
            LibreTranslate: 'Web interface, REST API, command line',
          },
          {
            Attribute: 'Languages',
            LibreTranslate: 'The models you load; the public site listed 51 language codes',
          },
          {
            Attribute: 'Last update',
            LibreTranslate: 'Release 1.9.6 on 26 May 2026; repository changed 14 November 2026',
          },
          {
            Attribute: 'Local API server',
            LibreTranslate: 'Yes: the REST API is the product',
          },
          {
            Attribute: 'GPU',
            LibreTranslate: 'Optional, through a CUDA Docker Compose file',
          },
        ],
        note: 'The language count comes from the public site\'s language list, read on 19 November 2026, and changes as models are added; a self-hosted server offers the languages you load. A missing statement means unknown, not unsupported.',
      },
      whatIsLibreTranslate: {
        id: 'what-is-libretranslate',
        title: 'What LibreTranslate Is',
        content: [
          '**LibreTranslate is a translation service you run yourself, not a translation model of its own.** The README describes it as a free and open-source machine translation API that is entirely self-hosted and, unlike other APIs, does not rely on proprietary software such as Google or Azure; the engine is the open-source [Argos Translate](https://github.com/argosopentech/argos-translate) library, reviewed separately in the [Argos Translate review](/power-local-llm/argos-translate-review). LibreTranslate adds a web interface, a REST API and request limits on top.',
          'The API documentation lists endpoints for translation, language detection, file translation, the language list, suggestions and a health check. A source language of `auto` detects the language, `format` set to `html` keeps markup and `alternatives` returns extra candidates. Optional settings include character limits, rate limits per client, API keys, a switch to turn the web interface off and a translation cache.',
          'The project is community-built: the website credits LibreTranslate Contributors, and the interface is translated through Weblate. The name is also used for a paid hosted API run from the project\'s own site. The listing on [Localhosted](https://localhosted.com/libretranslate), an independent directory, is unclaimed by the project. This review draws on written sources only; it involved no hands-on testing, so translation quality and speed are not rated.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is a pip install, one command to start the server and a browser tab.** The steps follow the quickstart in the documentation.',
        ],
        numberedItems: [
          {
            title: 'Install the package',
            whyItMatters: 'Run `pip install libretranslate` in an environment with Python 3.8 or later.',
          },
          {
            title: 'Start the server',
            whyItMatters: 'Run `libretranslate`; it listens on 127.0.0.1, port 5000, by default. Add `--load-only en,es,fr` to load fewer languages and start faster.',
          },
          {
            title: 'Open the web interface',
            whyItMatters: 'Browse to `http://localhost:5000` to translate text or files.',
          },
          {
            title: 'Call the API',
            whyItMatters: 'Send `curl -X POST http://localhost:5000/translate -d q="Hello" -d source=en -d target=es`; the quickstart shows the answer `{"translatedText":"Hola"}`.',
          },
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Languages, Models and Hardware',
        content: [
          '**By default a self-hosted server installs support for all available languages, and `--load-only` limits which ones load.** The public site\'s language list had 51 language codes on 19 November 2026; the models behind them come from Argos Translate. PromptQuorum did not measure model sizes, start-up time or translation quality.',
          'The documentation states no RAM, disk or CPU requirement. GPU acceleration is documented through a separate Docker Compose file for CUDA 12.4.1 and the NVIDIA Docker runtime, so the pip quickstart runs without a GPU. Defaults worth knowing: the server listens on 127.0.0.1 only, uses 4 threads and has no character or request limit until you set one.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**According to the README, LibreTranslate runs entirely on your own server and translates with its own engine, so text goes only where you send it.** An independent listing on Localhosted notes the difference: text typed into the public website goes to the hosted service, while a self-hosted deployment processes it on your server. PromptQuorum did not examine network traffic or what the dependencies fetch, so this is the project\'s own description.',
          'For the hosted service, the [privacy policy](https://portal.libretranslate.com/privacy.html), last updated 23 September 2025, says it does not store or log translation texts, records IP addresses together with API keys for 2 days to prevent abuse, uses Stripe for payments and uses no tracking technologies, although cookies may hold authentication or fraud-detection data. It gives a postal address in St Petersburg, Florida, United States. These are the project\'s statements; PromptQuorum could not verify them.',
          'The software is free under the AGPL-3.0, which carries obligations if you modify it and offer it to others over a network, so read the license text first; a separate [trademark policy](https://github.com/LibreTranslate/LibreTranslate/blob/main/TRADEMARK.md) governs use of the name. Hosted API keys are paid: the portal lists three plans at $14, $29 and $58 per month, no free keys, a 7-day money-back guarantee and a limit of 2,000 characters per call. Its FAQ says you do not have to pay and can host your own server, though running one at the same performance may cost more than a key.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'You host it',
            'What it means in real use': 'Text can stay on your own server.',
            'Limitation / caveat': 'Needs a terminal, Python or Docker; the privacy policy covers only the hosted service.',
          },
          {
            Benefit: 'Free and open source',
            'What it means in real use': 'AGPL-3.0 code and no per-word fee.',
            'Limitation / caveat': 'Modified versions offered over a network carry AGPL obligations.',
          },
          {
            Benefit: 'REST API plus web interface',
            'What it means in real use': 'One server serves your apps and a browser page.',
            'Limitation / caveat': 'You configure API keys, limits and the interface yourself.',
          },
          {
            Benefit: 'Open engine',
            'What it means in real use': 'Argos Translate models instead of Google or Azure.',
            'Limitation / caveat': 'Translation quality was not tested.',
          },
          {
            Benefit: 'Optional GPU',
            'What it means in real use': 'A CUDA Compose file is provided.',
            'Limitation / caveat': 'No speed figures are published here.',
          },
          {
            Benefit: 'Active repository',
            'What it means in real use': 'Commits continue through 14 November 2026.',
            'Limitation / caveat': 'Last release 1.9.6 is from 26 May 2026; many recent commits are interface translations.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LibreTranslate vs. Alternatives',
        content: [
          'These are the closest translation tools in the directory: the engine LibreTranslate is built on, a book-translation pipeline and an iPhone app.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'LibreTranslate',
            Platforms: 'Mac, Windows, Linux, self-hosted',
            'Price and license': 'Free, AGPL-3.0',
            Role: 'Translation server and API',
            'Key difference': 'Web interface and REST API on your own server',
          },
          {
            App: '[Argos Translate](/power-local-llm/argos-translate-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, MIT',
            Role: 'Offline translation library',
            'Key difference': 'Its engine; Python and command line only',
          },
          {
            App: '[TranslateBooksWithLLMs](/power-local-llm/translate-books-with-llms-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price and license': 'Free, AGPL-3.0',
            Role: 'Book and document translation',
            'Key difference': 'Local or cloud language model, not a translation engine',
          },
          {
            App: '[On-Device AI Translator](/power-local-llm/on-device-ai-translator-review)',
            Platforms: 'iPhone',
            'Price and license': 'Freemium, closed source',
            Role: 'Phone translation app',
            'Key difference': 'Runs language models on the device; an app, not a server',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project\'s own page before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use LibreTranslate',
        items: [
          '**Developers.** The REST API suits scripts, apps and pipelines that need translation under your control.',
          '**Teams that keep text in-house.** A self-hosted server processes text on your own machine, per the README.',
          '**Open-source users.** The AGPL-3.0 code is public and the software costs nothing.',
          '**Homelab and Docker users.** Docker, Compose and Helm paths are documented.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use LibreTranslate',
        items: [
          '**Anyone who wants a double-click app.** There is no installer; setup uses pip or Docker.',
          '**Readers who need proven quality.** PromptQuorum did not test accuracy or speed.',
          '**Anyone who wants a free hosted API.** The portal offers paid plans and no free keys.',
          '**Phone users.** Look at On-Device AI Translator for iPhone instead.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does LibreTranslate work offline?',
            a: 'The README describes it as entirely self-hosted and the website says offline capable, so a server you run translates with installed models. Installation needs the network, and PromptQuorum did not test it disconnected.',
          },
          {
            q: 'Is LibreTranslate the same as Argos Translate?',
            a: 'No. Argos Translate is the open-source translation library that powers LibreTranslate\'s engine; LibreTranslate adds the web interface, REST API and limits. Each is its own project.',
          },
          {
            q: 'Do I need an API key?',
            a: 'Not for a server you run yourself: API key checks are off by default and can be switched on with `--api-keys`. The hosted API on the project\'s portal requires a paid key.',
          },
          {
            q: 'Can it translate files and detect languages?',
            a: 'The API reference lists `/translate_file` and `/detect`, and setting the source to `auto` detects the language. The documentation page PromptQuorum read does not list supported file formats.',
          },
          {
            q: 'Does it need a GPU?',
            a: 'No requirement is stated. GPU use is documented through a separate Docker Compose file for CUDA 12.4.1; the pip quickstart does not mention a GPU.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'LibreTranslate is a good fit if you want a free, open-source translation server you can host yourself, with a web interface for people and a REST API for software. It has an AGPL-3.0 license, a PyPI package (1.9.6 from May 2026), Docker, Compose and Helm paths and a repository that was still receiving changes in November 2026.',
          'The caveats are scope and verification: no installer, no stated hardware requirement, a last release from May 2026, and quality and privacy claims that PromptQuorum could not check. Hosted API plans are separate and paid. Try one language pair on a small text before building anything on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LibreTranslate website](https://libretranslate.com) — product overview, language list and web interface.',
          '[Documentation](https://docs.libretranslate.com) — quickstart, installation, arguments and API usage.',
          '[GitHub repository](https://github.com/LibreTranslate/LibreTranslate) — README, AGPL-3.0 license, trademark policy and commit history.',
          '[PyPI project page](https://pypi.org/project/libretranslate/) — version 1.9.6 and release date.',
          '[API portal](https://portal.libretranslate.com) — hosted plans, prices and FAQ.',
          '[Hosted-service privacy policy](https://portal.libretranslate.com/privacy.html) — data handling and postal address, last updated 23 September 2025.',
          '[Localhosted listing](https://localhosted.com/libretranslate) — independent listing, unclaimed by the project.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Argos Translate Review](/power-local-llm/argos-translate-review) — the open-source offline translation library behind LibreTranslate\'s engine.',
          '[TranslateBooksWithLLMs Review](/power-local-llm/translate-books-with-llms-review) — translating whole books with a local or cloud model.',
          '[On-Device AI Translator Review](/power-local-llm/on-device-ai-translator-review) — offline language-model translation for iPhone.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-19',
    dateModified: '2026-11-19',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/libretranslate-review-hero-de.webp',
    title: 'LibreTranslate Rezension: Kostenlose selbst gehostete Übersetzungs-API mit Weboberfläche',
    seoTitle: 'LibreTranslate Rezension: Kostenloser Übersetzer',
    intro: 'LibreTranslate ist ein kostenloser, quelloffener (AGPL-3.0) Server für maschinelle Übersetzung: Sie installieren ihn mit pip oder Docker, er stellt auf Ihrem eigenen Rechner eine Weboberfläche und eine REST-API bereit, und seine Übersetzungs-Engine ist die Bibliothek Argos Translate. Texte werden also von Modellen übersetzt, die Sie herunterladen, und nicht von Google oder Azure. Das Projekt betreibt außerdem eine kostenpflichtige gehostete API unter [libretranslate.com](https://libretranslate.com). Diese Rezension fasst zusammen, was Website, Dokumentation, PyPI-Seite, GitHub-Repository und Datenschutzerklärung des gehosteten Dienstes sagen, was die Installation erfordert und wie sich LibreTranslate zu anderen Übersetzungswerkzeugen im Verzeichnis verhält.',
    metaDescription: 'LibreTranslate Rezension: kostenlose AGPL-3.0-Übersetzungs-API mit Weboberfläche zum Selbsthosten, auf Basis von Argos Translate. Nicht getestet.',
    twitterDescription: 'LibreTranslate Rezension: kostenloser Open-Source-Übersetzungsserver mit Weboberfläche und REST-API. Installation, Datenschutz, gehostete Tarife, Grenzen, Alternativen.',
    audience: 'Entwickler und Teams, die statt eines Cloud-Übersetzungsdienstes einen kostenlosen, quelloffenen Übersetzungsserver selbst hosten möchten — behandelt Installation, Sprachen, Datenschutz, gehostete Tarife, Wartung, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreTranslate review',
    targetKeywords: [
      'libretranslate rezension',
      'libretranslate selbst hosten',
      'libretranslate docker',
      'libretranslate api',
      'selbst gehostete übersetzungs-api',
      'open-source übersetzungsserver',
      'libretranslate vs argos translate',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**LibreTranslate ist ein kostenloser, quelloffener (AGPL-3.0) Übersetzungsserver mit Weboberfläche und REST-API, der laut README vollständig selbst gehostet wird und die Engine Argos Translate statt proprietärer Dienste wie Google oder Azure nutzt.** Die neueste Version ist 1.9.6 vom 26. Mai 2026, das Repository wurde zuletzt am 14. November 2026 geändert. Diese Rezension stützt sich auf Website, Dokumentation, PyPI-Seite, GitHub-Repository und die Datenschutzerklärung des gehosteten Dienstes, nicht auf eigene Tests.',
    quickAnswerTop: {
      de: {
        question: 'Ist LibreTranslate ein lokales Übersetzungswerkzeug?',
        answer: 'Ja, wenn Sie es selbst hosten: Das README nennt es vollständig selbst gehostet, und die Dokumentation betreibt es auf Ihrem eigenen Rechner mit Argos-Translate-Modellen, sodass der Text auf Ihrem Server bleibt. Die öffentliche Website und die kostenpflichtige API sind dagegen der gehostete Dienst des Projekts, bei dem der Text an diesen Dienst geht. PromptQuorum hat weder den Netzwerkverkehr geprüft noch eines von beiden getestet; dies ist die Darstellung des Projekts.',
        bullets: [
          'Es ist ein Server, keine Desktop-App: Sie installieren es mit `pip install libretranslate` oder Docker, starten es und öffnen dann `http://localhost:5000`.',
          'Die REST-API bietet Übersetzung, Spracherkennung, Dateiübersetzung und eine Sprachliste; ein API-Schlüssel ist nur nötig, wenn Sie die Schlüsselprüfung einschalten.',
          'Sprachen sind Modelle, die beim Start geladen werden: standardmäßig alle verfügbaren, mit `--load-only` weniger.',
          'Die gehostete API ist ein eigener kostenpflichtiger Dienst ohne kostenlose Schlüssel.',
          'Die letzte Version stammt vom Mai 2026, und die Dokumentation nennt keine Hardware-Anforderungen.',
        ],
        updatedDate: '2026-11-19',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'LibreTranslate herunterladen', anchor: 'get-it' },
      { label: 'LibreTranslate im Überblick', anchor: 'at-a-glance' },
      { label: 'Was LibreTranslate ist', anchor: 'what-is-libretranslate' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Sprachen, Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'LibreTranslate im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen LibreTranslate geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen LibreTranslate nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'LibreTranslate ist ein kostenloser, quelloffener Übersetzungsserver mit Weboberfläche und REST-API, den Sie laut README selbst hosten und der mit der Open-Source-Engine Argos Translate übersetzt.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich vor, Sie betreiben eine kleine eigene Übersetzungswebsite auf Ihrem Computer oder Server: Sie installieren sie einmal, die Sprachmodelle werden geladen, und Ihre Apps oder Ihr Browser schicken Text dorthin statt an einen Online-Dienst.',
          },
        ],
        items: [
          'Lokal-Aussage: Eine selbst gehostete Installation übersetzt mit Argos-Translate-Modellen auf Ihrem eigenen Server; die Installation nutzt das Internet, und die Dokumentation sagt nicht, wann die Modelle erstmals heruntergeladen werden.',
          `Lizenz und Projekt: AGPL-3.0, offener Code von LibreTranslate Contributors auf GitHub, mit ${ST.de('libretranslate')} Sternen.`,
          'Installation: ein pip-Befehl oder ein Docker-Skript, dann ein Browser auf Port 5000; es ist ein Terminal-Werkzeug, keine App zum Doppelklicken.',
          'Wartung: Version 1.9.6 stammt vom 26. Mai 2026, das Repository wurde zuletzt am 14. November 2026 geändert (Übersetzungsupdates; die jüngste Code-Änderung ist vom 26. Oktober 2026).',
          'Lücken: keine genannte Hardware-Anforderung, kein Installationsprogramm und kein Maßstab für die Übersetzungsqualität in dieser Rezension.',
        ],
      },
      getItLibreTranslate: {
        id: 'get-it',
        title: 'LibreTranslate herunterladen',
        content: [
          '**LibreTranslate hat kein Installationsprogramm: Sie betreiben es als Python-Paket oder in Docker, daher ist ein Terminal nötig.** Der Schnellstart lautet `pip install libretranslate` und danach `libretranslate`; das stellt die Weboberfläche unter `http://localhost:5000` bereit.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Python-Paket (pip)',
            Bezugsquelle: '`pip install libretranslate`, dann `libretranslate` — siehe [PyPI-Seite](https://pypi.org/project/libretranslate/)',
          },
          {
            Plattform: 'Docker',
            Bezugsquelle: 'Repository klonen, dann `./run.sh` (Linux und macOS) oder `run.bat` (Windows) ausführen',
          },
          {
            Plattform: 'Docker mit NVIDIA-GPU',
            Bezugsquelle: '`docker compose -f docker-compose.cuda.yml up -d --build` (CUDA 12.4.1)',
          },
          {
            Plattform: 'Gunicorn und Kubernetes',
            Bezugsquelle: 'Gunicorn-Befehl und Helm-Chart in der [Installationsanleitung](https://docs.libretranslate.com/guides/installation/)',
          },
          {
            Plattform: 'Dokumentation',
            Bezugsquelle: '[docs.libretranslate.com](https://docs.libretranslate.com)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[libretranslate.com](https://libretranslate.com) — zugleich gehostete Weboberfläche (Text geht an diesen Dienst)',
          },
          {
            Plattform: 'Gehostete API-Schlüssel',
            Bezugsquelle: '[portal.libretranslate.com](https://portal.libretranslate.com) — kostenpflichtige Tarife',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung des gehosteten Dienstes](https://portal.libretranslate.com/privacy.html)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: '[github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) — AGPL-3.0',
          },
        ],
        note: 'Aktuelle Version **1.9.6**, veröffentlicht am 26. Mai 2026; die jüngste Änderung am Repository ist vom 14. November 2026 (geprüft am 19. November 2026, [GitHub-Releases](https://github.com/LibreTranslate/LibreTranslate/releases)). Ein Terminal, Python oder Docker ist erforderlich; PromptQuorum hat weder .dmg, .exe, Store-Eintrag noch Release-Dateien gefunden. Die Datenschutzerklärung betrifft den gehosteten Dienst, nicht Ihren eigenen Server.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'LibreTranslate im Überblick',
        columns: ['Merkmal', 'LibreTranslate'],
        rows: [
          {
            Merkmal: 'Plattform',
            LibreTranslate: 'Python oder Docker unter macOS, Windows und Linux; Helm-Chart für Kubernetes',
          },
          {
            Merkmal: 'Preis',
            LibreTranslate: 'Kostenlose Software; die gehostete API ist kostenpflichtig',
          },
          {
            Merkmal: 'Lizenz',
            LibreTranslate: 'AGPL-3.0, Open Source',
          },
          {
            Merkmal: 'Läuft',
            LibreTranslate: 'Auf Ihrem eigenen Server mit Argos-Translate-Modellen; zusätzlich gibt es einen gehosteten Dienst',
          },
          {
            Merkmal: 'Oberflächen',
            LibreTranslate: 'Weboberfläche, REST-API, Kommandozeile',
          },
          {
            Merkmal: 'Sprachen',
            LibreTranslate: 'Die geladenen Modelle; die öffentliche Website listete 51 Sprachcodes',
          },
          {
            Merkmal: 'Letzte Aktualisierung',
            LibreTranslate: 'Version 1.9.6 am 26. Mai 2026; Repository geändert am 14. November 2026',
          },
          {
            Merkmal: 'Lokaler API-Server',
            LibreTranslate: 'Ja: die REST-API ist das Produkt',
          },
          {
            Merkmal: 'GPU',
            LibreTranslate: 'Optional, über eine CUDA-Docker-Compose-Datei',
          },
        ],
        note: 'Die Sprachanzahl stammt aus der Sprachliste der öffentlichen Website (gelesen am 19. November 2026) und ändert sich, wenn Modelle hinzukommen; ein selbst gehosteter Server bietet die Sprachen, die Sie laden. Eine fehlende Angabe bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsLibreTranslate: {
        id: 'what-is-libretranslate',
        title: 'Was LibreTranslate ist',
        content: [
          '**LibreTranslate ist ein Übersetzungsdienst, den Sie selbst betreiben, kein eigenes Übersetzungsmodell.** Das README beschreibt es als kostenlose, quelloffene API für maschinelle Übersetzung, die vollständig selbst gehostet wird und sich anders als andere APIs nicht auf proprietäre Software wie Google oder Azure stützt; die Engine ist die Open-Source-Bibliothek [Argos Translate](https://github.com/argosopentech/argos-translate), die separat in der [Rezension zu Argos Translate](/de/power-local-llm/argos-translate-review) behandelt wird. LibreTranslate ergänzt eine Weboberfläche, eine REST-API und Anfragelimits.',
          'Die API-Dokumentation nennt Endpunkte für Übersetzung, Spracherkennung, Dateiübersetzung, die Sprachliste, Vorschläge und eine Statusabfrage. Mit der Quellsprache `auto` wird die Sprache erkannt, `format` auf `html` erhält Markup, und `alternatives` liefert weitere Kandidaten. Optionale Einstellungen sind Zeichenlimits, Anfragelimits pro Client, API-Schlüssel, ein Schalter zum Abschalten der Weboberfläche und ein Übersetzungs-Cache.',
          'Das Projekt wird von einer Community getragen: Die Website nennt LibreTranslate Contributors, und die Oberfläche wird über Weblate übersetzt. Der Name steht außerdem für eine kostenpflichtige gehostete API auf der Website des Projekts. Der Eintrag bei [Localhosted](https://localhosted.com/libretranslate), einem unabhängigen Verzeichnis, wird vom Projekt nicht betreut. Diese Rezension stützt sich nur auf schriftliche Quellen und umfasste keine eigenen Tests; Übersetzungsqualität und Geschwindigkeit werden daher nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus einer pip-Installation, einem Befehl zum Starten des Servers und einem Browser-Tab.** Die Schritte folgen dem Schnellstart der Dokumentation.',
        ],
        numberedItems: [
          {
            title: 'Paket installieren',
            whyItMatters: 'Führen Sie `pip install libretranslate` in einer Umgebung mit Python 3.8 oder neuer aus.',
          },
          {
            title: 'Server starten',
            whyItMatters: 'Führen Sie `libretranslate` aus; standardmäßig lauscht es auf 127.0.0.1, Port 5000. Mit `--load-only en,es,fr` laden Sie weniger Sprachen und starten schneller.',
          },
          {
            title: 'Weboberfläche öffnen',
            whyItMatters: 'Rufen Sie `http://localhost:5000` im Browser auf, um Text oder Dateien zu übersetzen.',
          },
          {
            title: 'API aufrufen',
            whyItMatters: 'Senden Sie `curl -X POST http://localhost:5000/translate -d q="Hello" -d source=en -d target=es`; der Schnellstart zeigt die Antwort `{"translatedText":"Hola"}`.',
          },
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Sprachen, Modelle und Hardware',
        content: [
          '**Standardmäßig installiert ein selbst gehosteter Server die Unterstützung für alle verfügbaren Sprachen, und `--load-only` begrenzt, welche geladen werden.** Die Sprachliste der öffentlichen Website enthielt am 19. November 2026 51 Sprachcodes; die Modelle dahinter stammen von Argos Translate. PromptQuorum hat weder Modellgrößen noch Startzeit oder Übersetzungsqualität gemessen.',
          'Die Dokumentation nennt keine Anforderung an RAM, Speicherplatz oder CPU. GPU-Beschleunigung ist über eine eigene Docker-Compose-Datei für CUDA 12.4.1 und die NVIDIA-Docker-Laufzeit dokumentiert, sodass der pip-Schnellstart ohne GPU läuft. Gut zu wissen: Der Server lauscht standardmäßig nur auf 127.0.0.1, nutzt 4 Threads und hat kein Zeichen- oder Anfragelimit, bis Sie eines setzen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Laut README ist LibreTranslate vollständig selbst gehostet und übersetzt mit einer eigenen Engine, sodass Text auf Ihrem eigenen Server nur dorthin gelangt, wohin Sie ihn senden.** Ein unabhängiger Eintrag bei Localhosted weist auf den Unterschied hin: Text, der auf der öffentlichen Website eingegeben wird, geht an den gehosteten Dienst, während eine selbst gehostete Installation ihn auf Ihrem Server verarbeitet. PromptQuorum hat weder den Netzwerkverkehr noch das geprüft, was die Abhängigkeiten abrufen; dies ist die Darstellung des Projekts.',
          'Zum gehosteten Dienst sagt die [Datenschutzerklärung](https://portal.libretranslate.com/privacy.html), zuletzt aktualisiert am 23. September 2025, dass Übersetzungstexte weder gespeichert noch protokolliert werden, IP-Adressen zusammen mit API-Schlüsseln zur Missbrauchsabwehr 2 Tage lang erfasst werden, Stripe für Zahlungen genutzt wird und keine Tracking-Technologien zum Einsatz kommen; Cookies können jedoch Authentifizierungs- oder Betrugserkennungsdaten enthalten. Sie nennt eine Postanschrift in St. Petersburg, Florida, USA. Das sind Aussagen des Projekts; PromptQuorum konnte sie nicht überprüfen.',
          'Die Software ist unter der AGPL-3.0 kostenlos; diese Lizenz verpflichtet, wenn Sie sie ändern und anderen über ein Netzwerk anbieten, lesen Sie daher zuerst den Lizenztext. Eine eigene [Markenrichtlinie](https://github.com/LibreTranslate/LibreTranslate/blob/main/TRADEMARK.md) regelt die Verwendung des Namens. Gehostete API-Schlüssel kosten Geld: Das Portal führt drei Tarife zu 14, 29 und 58 US-Dollar pro Monat auf, keine kostenlosen Schlüssel, eine 7-tägige Geld-zurück-Garantie und ein Limit von 2.000 Zeichen pro Aufruf. Die FAQ dort sagt, dass Sie nichts bezahlen müssen und einen eigenen Server betreiben können, auch wenn ein Server mit gleicher Leistung teurer sein kann als ein Schlüssel.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Vorbehalt'],
        rows: [
          {
            Vorteil: 'Sie hosten es selbst',
            'Was das im Alltag bedeutet': 'Text kann auf Ihrem eigenen Server bleiben.',
            'Einschränkung / Vorbehalt': 'Erfordert Terminal, Python oder Docker; die Datenschutzerklärung betrifft nur den gehosteten Dienst.',
          },
          {
            Vorteil: 'Kostenlos und quelloffen',
            'Was das im Alltag bedeutet': 'AGPL-3.0-Code und keine Gebühr pro Wort.',
            'Einschränkung / Vorbehalt': 'Geänderte, über ein Netzwerk angebotene Versionen unterliegen AGPL-Pflichten.',
          },
          {
            Vorteil: 'REST-API plus Weboberfläche',
            'Was das im Alltag bedeutet': 'Ein Server bedient Ihre Apps und eine Browserseite.',
            'Einschränkung / Vorbehalt': 'API-Schlüssel, Limits und Oberfläche richten Sie selbst ein.',
          },
          {
            Vorteil: 'Offene Engine',
            'Was das im Alltag bedeutet': 'Argos-Translate-Modelle statt Google oder Azure.',
            'Einschränkung / Vorbehalt': 'Die Übersetzungsqualität wurde nicht getestet.',
          },
          {
            Vorteil: 'Optionale GPU',
            'Was das im Alltag bedeutet': 'Eine CUDA-Compose-Datei ist vorhanden.',
            'Einschränkung / Vorbehalt': 'Hier sind keine Geschwindigkeitswerte veröffentlicht.',
          },
          {
            Vorteil: 'Aktives Repository',
            'Was das im Alltag bedeutet': 'Commits laufen bis zum 14. November 2026.',
            'Einschränkung / Vorbehalt': 'Letzte Version 1.9.6 vom 26. Mai 2026; viele neue Commits sind Oberflächenübersetzungen.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LibreTranslate im Vergleich zu Alternativen',
        content: [
          'Das sind die nächsten Übersetzungswerkzeuge im Verzeichnis: die Engine, auf der LibreTranslate aufbaut, eine Pipeline zum Übersetzen von Büchern und eine iPhone-App.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'LibreTranslate',
            Plattformen: 'Mac, Windows, Linux, selbst gehostet',
            'Preis und Lizenz': 'Kostenlos, AGPL-3.0',
            Rolle: 'Übersetzungsserver und API',
            'Wichtigster Unterschied': 'Weboberfläche und REST-API auf Ihrem Server',
          },
          {
            App: '[Argos Translate](/de/power-local-llm/argos-translate-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, MIT',
            Rolle: 'Offline-Übersetzungsbibliothek',
            'Wichtigster Unterschied': 'Die Engine; nur Python und Kommandozeile',
          },
          {
            App: '[TranslateBooksWithLLMs](/de/power-local-llm/translate-books-with-llms-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis und Lizenz': 'Kostenlos, AGPL-3.0',
            Rolle: 'Buch- und Dokumentübersetzung',
            'Wichtigster Unterschied': 'Lokales oder Cloud-Sprachmodell, keine Übersetzungs-Engine',
          },
          {
            App: '[On-Device AI Translator](/de/power-local-llm/on-device-ai-translator-review)',
            Plattformen: 'iPhone',
            'Preis und Lizenz': 'Freemium, Closed Source',
            Rolle: 'Übersetzungs-App fürs Telefon',
            'Wichtigster Unterschied': 'Führt Sprachmodelle auf dem Gerät aus; eine App, kein Server',
          },
        ],
        note: 'Angaben zu Plattform, Preis und Funktionen von Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Einzelheiten vor einer Entscheidung auf der Seite des jeweiligen Projekts.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen LibreTranslate geeignet ist',
        items: [
          '**Entwickler.** Die REST-API eignet sich für Skripte, Apps und Pipelines, die Übersetzung unter Ihrer Kontrolle brauchen.',
          '**Teams, die Text im Haus behalten.** Ein selbst gehosteter Server verarbeitet Text laut README auf Ihrem eigenen Rechner.',
          '**Open-Source-Nutzer.** Der AGPL-3.0-Code ist öffentlich und die Software kostet nichts.',
          '**Homelab- und Docker-Nutzer.** Wege über Docker, Compose und Helm sind dokumentiert.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen LibreTranslate nicht geeignet ist',
        items: [
          '**Wer eine App zum Doppelklicken möchte.** Es gibt kein Installationsprogramm; die Einrichtung nutzt pip oder Docker.',
          '**Leser, die belegte Qualität brauchen.** PromptQuorum hat Genauigkeit und Geschwindigkeit nicht getestet.',
          '**Wer eine kostenlose gehostete API sucht.** Das Portal bietet kostenpflichtige Tarife und keine kostenlosen Schlüssel.',
          '**Smartphone-Nutzer.** Schauen Sie stattdessen auf den On-Device AI Translator für das iPhone.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert LibreTranslate offline?',
            a: 'Das README beschreibt es als vollständig selbst gehostet, und die Website nennt es offlinefähig, daher übersetzt ein von Ihnen betriebener Server mit installierten Modellen. Die Installation braucht das Netzwerk, und PromptQuorum hat es nicht ohne Verbindung getestet.',
          },
          {
            q: 'Ist LibreTranslate dasselbe wie Argos Translate?',
            a: 'Nein. Argos Translate ist die Open-Source-Übersetzungsbibliothek, die die Engine von LibreTranslate antreibt; LibreTranslate ergänzt Weboberfläche, REST-API und Limits. Jedes ist ein eigenes Projekt.',
          },
          {
            q: 'Brauche ich einen API-Schlüssel?',
            a: 'Nicht für einen Server, den Sie selbst betreiben: Die Schlüsselprüfung ist standardmäßig aus und lässt sich mit `--api-keys` einschalten. Die gehostete API im Portal des Projekts verlangt einen kostenpflichtigen Schlüssel.',
          },
          {
            q: 'Kann es Dateien übersetzen und Sprachen erkennen?',
            a: 'Die API-Referenz nennt `/translate_file` und `/detect`, und die Quellsprache `auto` erkennt die Sprache. Die von PromptQuorum gelesene Dokumentationsseite nennt keine unterstützten Dateiformate.',
          },
          {
            q: 'Braucht es eine GPU?',
            a: 'Eine Anforderung wird nicht genannt. GPU-Nutzung ist über eine eigene Docker-Compose-Datei für CUDA 12.4.1 dokumentiert; der pip-Schnellstart erwähnt keine GPU.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'LibreTranslate passt, wenn Sie einen kostenlosen, quelloffenen Übersetzungsserver selbst hosten möchten, mit einer Weboberfläche für Menschen und einer REST-API für Software. Es hat eine AGPL-3.0-Lizenz, ein PyPI-Paket (1.9.6 vom Mai 2026), Wege über Docker, Compose und Helm und ein Repository, das im November 2026 noch Änderungen erhielt.',
          'Die Vorbehalte betreffen Umfang und Überprüfbarkeit: kein Installationsprogramm, keine genannte Hardware-Anforderung, eine letzte Version vom Mai 2026 sowie Qualitäts- und Datenschutzaussagen, die PromptQuorum nicht prüfen konnte. Gehostete API-Tarife sind separat und kostenpflichtig. Testen Sie ein Sprachpaar an einem kleinen Text, bevor Sie etwas darauf aufbauen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LibreTranslate-Website](https://libretranslate.com) — Produktüberblick, Sprachliste und Weboberfläche.',
          '[Dokumentation](https://docs.libretranslate.com) — Schnellstart, Installation, Argumente und API-Nutzung.',
          '[GitHub-Repository](https://github.com/LibreTranslate/LibreTranslate) — README, AGPL-3.0-Lizenz, Markenrichtlinie und Commit-Verlauf.',
          '[PyPI-Projektseite](https://pypi.org/project/libretranslate/) — Version 1.9.6 und Veröffentlichungsdatum.',
          '[API-Portal](https://portal.libretranslate.com) — gehostete Tarife, Preise und FAQ.',
          '[Datenschutzerklärung des gehosteten Dienstes](https://portal.libretranslate.com/privacy.html) — Datenverarbeitung und Postanschrift, zuletzt aktualisiert am 23. September 2025.',
          '[Eintrag bei Localhosted](https://localhosted.com/libretranslate) — unabhängiger Eintrag, vom Projekt nicht betreut.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Argos Translate Rezension](/de/power-local-llm/argos-translate-review) — die quelloffene Offline-Übersetzungsbibliothek hinter der Engine von LibreTranslate.',
          '[TranslateBooksWithLLMs Rezension](/de/power-local-llm/translate-books-with-llms-review) — ganze Bücher mit einem lokalen oder Cloud-Modell übersetzen.',
          '[On-Device AI Translator Rezension](/de/power-local-llm/on-device-ai-translator-review) — Offline-Übersetzung mit Sprachmodellen für das iPhone.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-19',
    dateModified: '2026-11-19',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/libretranslate-review-hero-fr.webp',
    title: 'Test de LibreTranslate : API de traduction gratuite à héberger soi-même, avec interface web',
    seoTitle: 'Test de LibreTranslate : traducteur gratuit auto-hébergé',
    intro: 'LibreTranslate est un serveur de traduction automatique gratuit et open source (AGPL-3.0) : vous l\'installez avec pip ou Docker, il fournit une interface web et une API REST sur votre propre machine, et son moteur de traduction est la bibliothèque Argos Translate. Le texte est donc traduit par des modèles que vous téléchargez, et non par Google ou Azure. Le projet exploite aussi une API hébergée payante sur [libretranslate.com](https://libretranslate.com). Ce test résume ce que disent le site, la documentation, la page PyPI, le dépôt GitHub et la politique de confidentialité du service hébergé, ce que l\'installation implique et comment LibreTranslate se situe par rapport aux autres outils de traduction de l\'annuaire.',
    metaDescription: 'Test de LibreTranslate : API de traduction AGPL-3.0 gratuite avec interface web à héberger soi-même, basée sur Argos Translate. pip ou Docker. Non testé.',
    twitterDescription: 'Test de LibreTranslate : serveur de traduction open source gratuit avec interface web et API REST. Installation, confidentialité, offres hébergées, limites, alternatives.',
    audience: 'Développeurs et équipes qui veulent héberger eux-mêmes un serveur de traduction gratuit et open source plutôt qu\'utiliser un service de traduction cloud — couvre l\'installation, les langues, la confidentialité, les offres hébergées, la maintenance, les limites et les alternatives.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreTranslate review',
    targetKeywords: [
      'test libretranslate',
      'libretranslate auto-hébergé',
      'libretranslate docker',
      'api libretranslate',
      'api de traduction auto-hébergée',
      'serveur de traduction open source',
      'libretranslate vs argos translate',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**LibreTranslate est un serveur de traduction gratuit et open source (AGPL-3.0), avec interface web et API REST, qui est, selon son README, entièrement auto-hébergé et utilise le moteur Argos Translate plutôt que des services propriétaires comme Google ou Azure.** La dernière version est la 1.9.6 du 26 mai 2026, et le dépôt a été modifié pour la dernière fois le 14 novembre 2026. Ce test s\'appuie sur le site, la documentation, la page PyPI, le dépôt GitHub et la politique de confidentialité du service hébergé, et non sur des essais pratiques.',
    quickAnswerTop: {
      fr: {
        question: 'LibreTranslate est-il un outil de traduction local ?',
        answer: 'Oui, si vous l\'hébergez vous-même : le README le décrit comme entièrement auto-hébergé, et la documentation le fait tourner sur votre propre machine avec des modèles Argos Translate, de sorte que le texte reste sur votre serveur. Le site public et l\'API payante constituent en revanche le service hébergé du projet, auquel le texte est envoyé. PromptQuorum n\'a pas inspecté le trafic réseau ni testé l\'un ou l\'autre ; il s\'agit de la description du projet.',
        bullets: [
          'C\'est un serveur, pas une application de bureau : installez-le avec `pip install libretranslate` ou Docker, lancez-le, puis ouvrez `http://localhost:5000`.',
          'L\'API REST propose la traduction, la détection de langue, la traduction de fichiers et une liste des langues ; aucune clé d\'API n\'est nécessaire tant que vous n\'activez pas la vérification des clés.',
          'Les langues sont des modèles chargés au démarrage : tous ceux disponibles par défaut, moins avec `--load-only`.',
          'L\'API hébergée est un service payant distinct, sans clé gratuite.',
          'La dernière version date de mai 2026 et la documentation n\'indique aucune exigence matérielle.',
        ],
        updatedDate: '2026-11-19',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir LibreTranslate', anchor: 'get-it' },
      { label: 'LibreTranslate en bref', anchor: 'at-a-glance' },
      { label: 'Ce qu\'est LibreTranslate', anchor: 'what-is-libretranslate' },
      { label: 'Pour commencer', anchor: 'how-to-get-started' },
      { label: 'Langues, modèles et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'LibreTranslate face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser LibreTranslate', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser LibreTranslate', anchor: 'who-should-not-use' },
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
            text: 'LibreTranslate est un serveur de traduction gratuit et open source, avec interface web et API REST, que vous hébergez vous-même selon son README et qui traduit avec le moteur open source Argos Translate.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez que vous faites tourner votre propre petit site de traduction sur votre ordinateur ou votre serveur : vous l\'installez une fois, les modèles de langue sont chargés, et vos applications ou votre navigateur lui envoient le texte au lieu d\'un service en ligne.',
          },
        ],
        items: [
          'Affirmation locale : une installation auto-hébergée traduit avec des modèles Argos Translate sur votre propre serveur ; l\'installation utilise Internet, et la documentation ne précise pas quand les modèles sont téléchargés pour la première fois.',
          `Licence et projet : AGPL-3.0, code ouvert publié par LibreTranslate Contributors sur GitHub, avec ${ST.fr('libretranslate')} étoiles.`,
          'Installation : une commande pip ou un script Docker, puis un navigateur sur le port 5000 ; c\'est un outil de terminal, pas une application à double-cliquer.',
          'Maintenance : la version 1.9.6 date du 26 mai 2026, et le dépôt a été modifié pour la dernière fois le 14 novembre 2026 (mises à jour de traductions ; la modification de code la plus récente date du 26 octobre 2026).',
          'Lacunes : aucune exigence matérielle indiquée, pas d\'installeur et aucune mesure de la qualité de traduction dans ce test.',
        ],
      },
      getItLibreTranslate: {
        id: 'get-it',
        title: 'Obtenir LibreTranslate',
        content: [
          '**LibreTranslate n\'a pas d\'installeur : vous l\'exécutez comme paquet Python ou dans Docker, un terminal est donc nécessaire.** Le démarrage rapide consiste à exécuter `pip install libretranslate` puis `libretranslate`, ce qui sert l\'interface web à l\'adresse `http://localhost:5000`.',
        ],
        columns: ['Plateforme', 'Où le trouver'],
        rows: [
          {
            Plateforme: 'Paquet Python (pip)',
            'Où le trouver': '`pip install libretranslate`, puis `libretranslate` — voir la [page PyPI](https://pypi.org/project/libretranslate/)',
          },
          {
            Plateforme: 'Docker',
            'Où le trouver': 'Clonez le dépôt, puis exécutez `./run.sh` (Linux et macOS) ou `run.bat` (Windows)',
          },
          {
            Plateforme: 'Docker avec GPU NVIDIA',
            'Où le trouver': '`docker compose -f docker-compose.cuda.yml up -d --build` (CUDA 12.4.1)',
          },
          {
            Plateforme: 'Gunicorn et Kubernetes',
            'Où le trouver': 'Commande Gunicorn et chart Helm dans le [guide d\'installation](https://docs.libretranslate.com/guides/installation/)',
          },
          {
            Plateforme: 'Documentation',
            'Où le trouver': '[docs.libretranslate.com](https://docs.libretranslate.com)',
          },
          {
            Plateforme: 'Site web',
            'Où le trouver': '[libretranslate.com](https://libretranslate.com) — aussi l\'interface web hébergée (le texte va à ce service)',
          },
          {
            Plateforme: 'Clés d\'API hébergées',
            'Où le trouver': '[portal.libretranslate.com](https://portal.libretranslate.com) — offres payantes',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où le trouver': '[Politique de confidentialité du service hébergé](https://portal.libretranslate.com/privacy.html)',
          },
          {
            Plateforme: 'Code source',
            'Où le trouver': '[github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) — AGPL-3.0',
          },
        ],
        note: 'Version actuelle **1.9.6**, publiée le 26 mai 2026 ; le dernier push du dépôt date du 14 novembre 2026 (vérifié le 19 novembre 2026, [versions GitHub](https://github.com/LibreTranslate/LibreTranslate/releases)). Un terminal, Python ou Docker est nécessaire ; PromptQuorum n\'a trouvé ni .dmg, ni .exe, ni fiche de boutique, ni fichiers de version. La politique de confidentialité concerne le service hébergé, pas votre propre serveur.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'LibreTranslate en bref',
        columns: ['Attribut', 'LibreTranslate'],
        rows: [
          {
            Attribut: 'Plateforme',
            LibreTranslate: 'Python ou Docker sous macOS, Windows et Linux ; chart Helm pour Kubernetes',
          },
          {
            Attribut: 'Prix',
            LibreTranslate: 'Logiciel gratuit ; l\'API hébergée est payante',
          },
          {
            Attribut: 'Licence',
            LibreTranslate: 'AGPL-3.0, open source',
          },
          {
            Attribut: 'Exécution',
            LibreTranslate: 'Sur votre propre serveur avec des modèles Argos Translate ; un service hébergé existe aussi',
          },
          {
            Attribut: 'Interfaces',
            LibreTranslate: 'Interface web, API REST, ligne de commande',
          },
          {
            Attribut: 'Langues',
            LibreTranslate: 'Les modèles que vous chargez ; le site public listait 51 codes de langue',
          },
          {
            Attribut: 'Dernière mise à jour',
            LibreTranslate: 'Version 1.9.6 le 26 mai 2026 ; dépôt modifié le 14 novembre 2026',
          },
          {
            Attribut: 'Serveur d\'API local',
            LibreTranslate: 'Oui : l\'API REST est le produit',
          },
          {
            Attribut: 'GPU',
            LibreTranslate: 'Facultatif, via un fichier Docker Compose CUDA',
          },
        ],
        note: 'Le nombre de langues provient de la liste des langues du site public, lue le 19 novembre 2026, et évolue avec l\'ajout de modèles ; un serveur auto-hébergé propose les langues que vous chargez. Une absence d\'information signifie inconnu, pas non pris en charge.',
      },
      whatIsLibreTranslate: {
        id: 'what-is-libretranslate',
        title: 'Ce qu\'est LibreTranslate',
        content: [
          '**LibreTranslate est un service de traduction que vous exploitez vous-même, et non un modèle de traduction à part entière.** Le README le décrit comme une API de traduction automatique gratuite et open source, entièrement auto-hébergée et qui, contrairement à d\'autres API, ne repose pas sur des logiciels propriétaires comme Google ou Azure ; le moteur est la bibliothèque open source [Argos Translate](https://github.com/argosopentech/argos-translate), traitée séparément dans le [test d\'Argos Translate](/fr/power-local-llm/argos-translate-review). LibreTranslate y ajoute une interface web, une API REST et des limites de requêtes.',
          'La documentation de l\'API répertorie des points d\'accès pour la traduction, la détection de langue, la traduction de fichiers, la liste des langues, les suggestions et un contrôle d\'état. Une langue source `auto` détecte la langue, `format` défini sur `html` conserve le balisage et `alternatives` renvoie des candidats supplémentaires. Les réglages facultatifs comprennent des limites de caractères, des limites de débit par client, des clés d\'API, un interrupteur pour désactiver l\'interface web et un cache de traduction.',
          'Le projet est porté par une communauté : le site cite LibreTranslate Contributors, et l\'interface est traduite via Weblate. Le nom désigne aussi une API hébergée payante exploitée depuis le site du projet. La fiche sur [Localhosted](https://localhosted.com/libretranslate), un annuaire indépendant, n\'est pas revendiquée par le projet. Ce test s\'appuie uniquement sur des sources écrites et n\'a comporté aucun essai pratique ; la qualité de traduction et la vitesse ne sont donc pas évaluées.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Pour commencer',
        content: [
          '**La mise en place se résume à une installation pip, une commande pour démarrer le serveur et un onglet de navigateur.** Les étapes suivent le démarrage rapide de la documentation.',
        ],
        numberedItems: [
          {
            title: 'Installer le paquet',
            whyItMatters: 'Exécutez `pip install libretranslate` dans un environnement avec Python 3.8 ou ultérieur.',
          },
          {
            title: 'Démarrer le serveur',
            whyItMatters: 'Exécutez `libretranslate` ; il écoute par défaut sur 127.0.0.1, port 5000. Ajoutez `--load-only en,es,fr` pour charger moins de langues et démarrer plus vite.',
          },
          {
            title: 'Ouvrir l\'interface web',
            whyItMatters: 'Rendez-vous sur `http://localhost:5000` pour traduire du texte ou des fichiers.',
          },
          {
            title: 'Appeler l\'API',
            whyItMatters: 'Envoyez `curl -X POST http://localhost:5000/translate -d q="Hello" -d source=en -d target=es` ; le démarrage rapide montre la réponse `{"translatedText":"Hola"}`.',
          },
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Langues, modèles et matériel',
        content: [
          '**Par défaut, un serveur auto-hébergé installe la prise en charge de toutes les langues disponibles, et `--load-only` limite celles qui sont chargées.** La liste des langues du site public comptait 51 codes de langue le 19 novembre 2026 ; les modèles correspondants proviennent d\'Argos Translate. PromptQuorum n\'a mesuré ni la taille des modèles, ni le temps de démarrage, ni la qualité de traduction.',
          'La documentation n\'indique aucune exigence en RAM, en espace disque ou en processeur. L\'accélération GPU est documentée via un fichier Docker Compose distinct pour CUDA 12.4.1 et l\'environnement d\'exécution Docker de NVIDIA ; le démarrage rapide avec pip fonctionne donc sans GPU. À savoir : le serveur n\'écoute par défaut que sur 127.0.0.1, utilise 4 threads et n\'a aucune limite de caractères ou de requêtes tant que vous n\'en définissez pas.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          '**Selon le README, LibreTranslate est entièrement auto-hébergé et traduit avec son propre moteur : sur votre serveur, le texte ne va que là où vous l\'envoyez.** Une fiche indépendante sur Localhosted souligne la différence : le texte saisi sur le site public est envoyé au service hébergé, alors qu\'un déploiement auto-hébergé le traite sur votre serveur. PromptQuorum n\'a examiné ni le trafic réseau ni ce que récupèrent les dépendances ; il s\'agit de la description du projet.',
          'Pour le service hébergé, la [politique de confidentialité](https://portal.libretranslate.com/privacy.html), mise à jour le 23 septembre 2025, indique qu\'il ne stocke ni ne journalise les textes traduits, qu\'il enregistre les adresses IP avec les clés d\'API pendant 2 jours pour prévenir les abus, qu\'il utilise Stripe pour les paiements et aucune technologie de suivi, même si des cookies peuvent contenir des données d\'authentification ou de détection de fraude. Elle donne une adresse postale à Saint-Pétersbourg, en Floride, aux États-Unis. Ce sont des déclarations du projet ; PromptQuorum n\'a pas pu les vérifier.',
          'Le logiciel est gratuit sous AGPL-3.0, licence qui impose des obligations si vous le modifiez et le proposez à d\'autres via un réseau : lisez donc d\'abord le texte de la licence ; une [politique de marque](https://github.com/LibreTranslate/LibreTranslate/blob/main/TRADEMARK.md) distincte encadre l\'usage du nom. Les clés d\'API hébergées sont payantes : le portail affiche trois offres à 14, 29 et 58 dollars US par mois, aucune clé gratuite, une garantie de remboursement de 7 jours et une limite de 2 000 caractères par appel. Sa FAQ indique que vous n\'avez rien à payer et pouvez héberger votre propre serveur, même si en exploiter un de performance équivalente peut coûter plus cher qu\'une clé.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'Ce que cela donne en pratique', 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Vous l\'hébergez',
            'Ce que cela donne en pratique': 'Le texte peut rester sur votre propre serveur.',
            'Limite / réserve': 'Exige un terminal, Python ou Docker ; la politique de confidentialité ne couvre que le service hébergé.',
          },
          {
            Avantage: 'Gratuit et open source',
            'Ce que cela donne en pratique': 'Code AGPL-3.0 et aucun tarif au mot.',
            'Limite / réserve': 'Les versions modifiées proposées via un réseau impliquent des obligations AGPL.',
          },
          {
            Avantage: 'API REST et interface web',
            'Ce que cela donne en pratique': 'Un serveur sert vos applications et une page de navigateur.',
            'Limite / réserve': 'Vous configurez vous-même les clés d\'API, les limites et l\'interface.',
          },
          {
            Avantage: 'Moteur ouvert',
            'Ce que cela donne en pratique': 'Modèles Argos Translate plutôt que Google ou Azure.',
            'Limite / réserve': 'La qualité de traduction n\'a pas été testée.',
          },
          {
            Avantage: 'GPU facultatif',
            'Ce que cela donne en pratique': 'Un fichier Compose CUDA est fourni.',
            'Limite / réserve': 'Aucune mesure de vitesse n\'est publiée ici.',
          },
          {
            Avantage: 'Dépôt actif',
            'Ce que cela donne en pratique': 'Les commits continuent jusqu\'au 14 novembre 2026.',
            'Limite / réserve': 'Dernière version 1.9.6 du 26 mai 2026 ; beaucoup de commits récents sont des traductions de l\'interface.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LibreTranslate face aux alternatives',
        content: [
          'Voici les outils de traduction les plus proches de l\'annuaire : le moteur sur lequel repose LibreTranslate, un pipeline de traduction de livres et une application iPhone.',
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'LibreTranslate',
            Plateformes: 'Mac, Windows, Linux, auto-hébergé',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            'Rôle': 'Serveur de traduction et API',
            'Différence clé': 'Interface web et API REST sur votre serveur',
          },
          {
            Application: '[Argos Translate](/fr/power-local-llm/argos-translate-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, MIT',
            'Rôle': 'Bibliothèque de traduction hors ligne',
            'Différence clé': 'Son moteur ; Python et ligne de commande seulement',
          },
          {
            Application: '[TranslateBooksWithLLMs](/fr/power-local-llm/translate-books-with-llms-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            'Rôle': 'Traduction de livres et documents',
            'Différence clé': 'Modèle de langage local ou cloud, pas un moteur de traduction',
          },
          {
            Application: '[On-Device AI Translator](/fr/power-local-llm/on-device-ai-translator-review)',
            Plateformes: 'iPhone',
            'Prix et licence': 'Freemium, code fermé',
            'Rôle': 'Application de traduction mobile',
            'Différence clé': 'Exécute des modèles de langage sur l\'appareil ; une appli, pas un serveur',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment. Vérifiez les informations actuelles sur la page de chaque projet avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser LibreTranslate',
        items: [
          '**Les développeurs.** L\'API REST convient aux scripts, applications et pipelines qui ont besoin d\'une traduction sous votre contrôle.',
          '**Les équipes qui gardent le texte en interne.** Un serveur auto-hébergé traite le texte sur votre propre machine, selon le README.',
          '**Les utilisateurs d\'open source.** Le code AGPL-3.0 est public et le logiciel ne coûte rien.',
          '**Les adeptes du homelab et de Docker.** Les voies Docker, Compose et Helm sont documentées.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser LibreTranslate',
        items: [
          '**Ceux qui veulent une application à double-cliquer.** Il n\'y a pas d\'installeur ; la mise en place passe par pip ou Docker.',
          '**Les lecteurs qui ont besoin d\'une qualité démontrée.** PromptQuorum n\'a testé ni la précision ni la vitesse.',
          '**Ceux qui cherchent une API hébergée gratuite.** Le portail propose des offres payantes et aucune clé gratuite.',
          '**Les utilisateurs de téléphone.** Voyez plutôt On-Device AI Translator pour iPhone.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'LibreTranslate fonctionne-t-il hors ligne ?',
            a: 'Le README le décrit comme entièrement auto-hébergé et le site le dit capable de fonctionner hors ligne ; un serveur que vous exploitez traduit donc avec les modèles installés. L\'installation nécessite le réseau, et PromptQuorum ne l\'a pas testé déconnecté.',
          },
          {
            q: 'LibreTranslate est-il identique à Argos Translate ?',
            a: 'Non. Argos Translate est la bibliothèque de traduction open source qui alimente le moteur de LibreTranslate ; LibreTranslate y ajoute l\'interface web, l\'API REST et les limites. Chacun est un projet distinct.',
          },
          {
            q: 'Ai-je besoin d\'une clé d\'API ?',
            a: 'Pas pour un serveur que vous exploitez vous-même : la vérification des clés est désactivée par défaut et peut être activée avec `--api-keys`. L\'API hébergée du portail du projet exige une clé payante.',
          },
          {
            q: 'Peut-il traduire des fichiers et détecter les langues ?',
            a: 'La référence de l\'API répertorie `/translate_file` et `/detect`, et une source définie sur `auto` détecte la langue. La page de documentation lue par PromptQuorum ne précise pas les formats de fichier pris en charge.',
          },
          {
            q: 'A-t-il besoin d\'un GPU ?',
            a: 'Aucune exigence n\'est indiquée. L\'usage du GPU est documenté via un fichier Docker Compose distinct pour CUDA 12.4.1 ; le démarrage rapide avec pip ne mentionne aucun GPU.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'LibreTranslate convient si vous voulez un serveur de traduction gratuit et open source à héberger vous-même, avec une interface web pour les personnes et une API REST pour les logiciels. Il offre une licence AGPL-3.0, un paquet PyPI (1.9.6 de mai 2026), des voies Docker, Compose et Helm, et un dépôt qui recevait encore des modifications en novembre 2026.',
          'Les réserves tiennent à la portée et à la vérification : pas d\'installeur, aucune exigence matérielle indiquée, une dernière version de mai 2026, et des affirmations sur la qualité et la confidentialité que PromptQuorum n\'a pas pu vérifier. Les offres d\'API hébergée sont distinctes et payantes. Essayez une paire de langues sur un petit texte avant de construire quoi que ce soit dessus.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de LibreTranslate](https://libretranslate.com) — présentation du produit, liste des langues et interface web.',
          '[Documentation](https://docs.libretranslate.com) — démarrage rapide, installation, arguments et utilisation de l\'API.',
          '[Dépôt GitHub](https://github.com/LibreTranslate/LibreTranslate) — README, licence AGPL-3.0, politique de marque et historique des commits.',
          '[Page du projet sur PyPI](https://pypi.org/project/libretranslate/) — version 1.9.6 et date de publication.',
          '[Portail de l\'API](https://portal.libretranslate.com) — offres hébergées, prix et FAQ.',
          '[Politique de confidentialité du service hébergé](https://portal.libretranslate.com/privacy.html) — traitement des données et adresse postale, mise à jour le 23 septembre 2025.',
          '[Fiche Localhosted](https://localhosted.com/libretranslate) — fiche indépendante, non revendiquée par le projet.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d\'Argos Translate](/fr/power-local-llm/argos-translate-review) — la bibliothèque de traduction hors ligne open source derrière le moteur de LibreTranslate.',
          '[Test de TranslateBooksWithLLMs](/fr/power-local-llm/translate-books-with-llms-review) — traduire des livres entiers avec un modèle local ou cloud.',
          '[Test d\'On-Device AI Translator](/fr/power-local-llm/on-device-ai-translator-review) — traduction hors ligne par modèle de langage pour iPhone.',
          '[L\'annuaire complet des logiciels de LLM locaux](/fr/directory) — un annuaire plus large d\'outils d\'IA locale, toutes plateformes confondues.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-19',
    dateModified: '2026-11-19',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/libretranslate-review-hero-ja.webp',
    title: 'LibreTranslateレビュー：自分でホストできる無料の翻訳APIとWebインターフェース',
    seoTitle: 'LibreTranslateレビュー：無料のセルフホスト翻訳',
    intro: 'LibreTranslateは、無料のオープンソース（AGPL-3.0）機械翻訳サーバーです。pipまたはDockerでインストールすると、自分のマシン上でWebインターフェースとREST APIが動き、翻訳エンジンにはArgos Translateライブラリが使われます。つまり、GoogleやAzureではなく、ダウンロードしたモデルがテキストを翻訳します。プロジェクトは[libretranslate.com](https://libretranslate.com)で有料のホスト型APIも運営しています。このレビューでは、公式サイト、ドキュメント、PyPIページ、GitHubリポジトリ、ホスト型サービスのプライバシーポリシーの記載、インストールの手間、ディレクトリ内の他の翻訳ツールとの比較をまとめます。',
    metaDescription: 'LibreTranslateのレビュー：Argos Translateを使う、自分でホストできる無料のAGPL-3.0翻訳APIとWeb UI。pipまたはDockerで導入、有料のホスト型プランあり。未テスト。',
    twitterDescription: 'LibreTranslateのレビュー：WebインターフェースとREST APIを備えた無料のオープンソース翻訳サーバー。導入、プライバシー、ホスト型プラン、制約、代替ツール。',
    audience: 'クラウド翻訳サービスの代わりに、無料のオープンソース翻訳サーバーを自分でホストしたい開発者やチーム向け。導入、言語、プライバシー、ホスト型プラン、メンテナンス、制約、代替ツールを扱います。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreTranslate review',
    targetKeywords: [
      'libretranslate レビュー',
      'libretranslate セルフホスト',
      'libretranslate docker',
      'libretranslate api',
      'セルフホスト 翻訳api',
      'オープンソース 翻訳サーバー',
      'libretranslate argos translate 違い',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**LibreTranslateは、WebインターフェースとREST APIを備えた無料のオープンソース（AGPL-3.0）翻訳サーバーで、READMEによれば完全にセルフホスト型であり、GoogleやAzureのような独自サービスではなくArgos Translateエンジンを使います。** 最新リリースは2026年5月26日のバージョン1.9.6で、リポジトリの最終更新は2026年11月14日です。このレビューは、プロジェクトの公式サイト、ドキュメント、PyPIページ、GitHubリポジトリ、ホスト型サービスのプライバシーポリシーに基づいており、実機での検証には基づいていません。',
    quickAnswerTop: {
      ja: {
        question: 'LibreTranslateはローカルで動く翻訳ツールですか？',
        answer: '自分でホストする場合はそうです。READMEは完全なセルフホスト型と説明し、ドキュメントでも自分のマシン上でArgos Translateのモデルを使って動かすため、テキストは自分のサーバーに留まります。一方、公開サイトと有料APIはプロジェクトのホスト型サービスで、テキストはそのサービスに送られます。PromptQuorumはネットワーク通信を調べておらず、どちらも試していないため、これはプロジェクト自身の説明です。',
        bullets: [
          'デスクトップアプリではなくサーバーです。`pip install libretranslate`またはDockerでインストールして起動し、`http://localhost:5000`を開きます。',
          'REST APIは翻訳、言語検出、ファイル翻訳、言語一覧を提供します。キー検査を有効にしない限りAPIキーは不要です。',
          '言語は起動時に読み込まれるモデルで、既定では利用可能なすべてが対象です。`--load-only`で絞り込めます。',
          'ホスト型APIは別の有料サービスで、無料キーはありません。',
          '最新リリースは2026年5月で、ドキュメントにハードウェア要件の記載はありません。',
        ],
        updatedDate: '2026-11-19',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'LibreTranslateの入手方法', anchor: 'get-it' },
      { label: 'LibreTranslateの概要', anchor: 'at-a-glance' },
      { label: 'LibreTranslateとは', anchor: 'what-is-libretranslate' },
      { label: '使い始める', anchor: 'how-to-get-started' },
      { label: '言語、モデル、ハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー、ライセンス、費用', anchor: 'privacy' },
      { label: 'トレードオフ：利点と制約', anchor: 'tradeoffs' },
      { label: 'LibreTranslateと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'LibreTranslateが向いている人', anchor: 'who-should-use' },
      { label: 'LibreTranslateが向かない人', anchor: 'who-should-not-use' },
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
            text: 'LibreTranslateは、WebインターフェースとREST APIを備えた無料のオープンソース翻訳サーバーで、READMEによれば自分でホストし、オープンソースのArgos Translateエンジンで翻訳します。',
          },
          {
            type: 'plain-terms',
            text: '自分のパソコンやサーバーで小さな翻訳サイトを動かすイメージです。一度インストールして言語モデルを読み込めば、アプリやブラウザはオンラインサービスの代わりにそこへテキストを送ります。',
          },
        ],
        items: [
          'ローカルに関する記載：セルフホスト型の導入では、自分のサーバー上でArgos Translateのモデルを使って翻訳します。インストールにはインターネットが必要で、モデルを最初にダウンロードする時期はドキュメントに記載がありません。',
          `ライセンスとプロジェクト：AGPL-3.0。LibreTranslate ContributorsがGitHubでコードを公開しており、スターは${ST.ja('libretranslate')}件です。`,
          '導入：pipコマンド1つかDockerスクリプトで済み、その後ブラウザでポート5000を開きます。ダブルクリックで入れるアプリではなく、ターミナルで使うツールです。',
          'メンテナンス：バージョン1.9.6は2026年5月26日付で、リポジトリの最終更新は2026年11月14日です（翻訳の更新で、直近のコード変更は2026年10月26日）。',
          '不明な点：ハードウェア要件の記載がなく、インストーラーもなく、このレビューでは翻訳品質の測定もしていません。',
        ],
      },
      getItLibreTranslate: {
        id: 'get-it',
        title: 'LibreTranslateの入手方法',
        content: [
          '**LibreTranslateにはインストーラーがなく、PythonパッケージまたはDockerで動かすため、ターミナルが必要です。** クイックスタートは`pip install libretranslate`を実行してから`libretranslate`を実行する方法で、Webインターフェースが`http://localhost:5000`で起動します。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Pythonパッケージ（pip）',
            '入手先': '`pip install libretranslate`の後に`libretranslate`を実行。[PyPIページ](https://pypi.org/project/libretranslate/)を参照',
          },
          {
            'プラットフォーム': 'Docker',
            '入手先': 'リポジトリをクローンし、`./run.sh`（LinuxとmacOS）または`run.bat`（Windows）を実行',
          },
          {
            'プラットフォーム': 'NVIDIA GPU対応のDocker',
            '入手先': '`docker compose -f docker-compose.cuda.yml up -d --build`（CUDA 12.4.1）',
          },
          {
            'プラットフォーム': 'GunicornとKubernetes',
            '入手先': 'GunicornのコマンドとHelmチャートは[インストールガイド](https://docs.libretranslate.com/guides/installation/)に記載',
          },
          {
            'プラットフォーム': 'ドキュメント',
            '入手先': '[docs.libretranslate.com](https://docs.libretranslate.com)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[libretranslate.com](https://libretranslate.com)。ホスト型Webインターフェースも兼ねる（テキストは同サービスへ送信）',
          },
          {
            'プラットフォーム': 'ホスト型APIキー',
            '入手先': '[portal.libretranslate.com](https://portal.libretranslate.com)。有料プラン',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[ホスト型サービスのプライバシーポリシー](https://portal.libretranslate.com/privacy.html)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate)。AGPL-3.0',
          },
        ],
        note: '現行バージョンは**1.9.6**（2026年5月26日公開）で、リポジトリの最新のプッシュは2026年11月14日です（2026年11月19日確認、[GitHubリリース](https://github.com/LibreTranslate/LibreTranslate/releases)）。ターミナルとPythonまたはDockerが必要です。PromptQuorumは.dmg、.exe、ストア掲載、リリース資産を見つけられませんでした。プライバシーポリシーはホスト型サービス向けで、自分のサーバーには当てはまりません。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'LibreTranslateの概要',
        columns: ['項目', 'LibreTranslate'],
        rows: [
          {
            '項目': 'プラットフォーム',
            LibreTranslate: 'macOS、Windows、LinuxでPythonまたはDocker。KubernetesはHelmチャート',
          },
          {
            '項目': '価格',
            LibreTranslate: 'ソフトウェアは無料。ホスト型APIは有料',
          },
          {
            '項目': 'ライセンス',
            LibreTranslate: 'AGPL-3.0（オープンソース）',
          },
          {
            '項目': '動作場所',
            LibreTranslate: '自分のサーバー上でArgos Translateのモデルを使用。ホスト型サービスもあり',
          },
          {
            '項目': 'インターフェース',
            LibreTranslate: 'Webインターフェース、REST API、コマンドライン',
          },
          {
            '項目': '対応言語',
            LibreTranslate: '読み込んだモデル。公開サイトの言語コードは51件',
          },
          {
            '項目': '最終更新',
            LibreTranslate: '2026年5月26日にバージョン1.9.6、リポジトリは2026年11月14日に更新',
          },
          {
            '項目': 'ローカルAPIサーバー',
            LibreTranslate: 'あり。REST APIが製品そのもの',
          },
          {
            '項目': 'GPU',
            LibreTranslate: '任意。CUDA用のDocker Composeファイルで利用',
          },
        ],
        note: '言語数は2026年11月19日に確認した公開サイトの言語一覧によるもので、モデルの追加で変わります。セルフホストのサーバーでは読み込んだ言語が使えます。記載がない項目は未確認であり、非対応を意味しません。',
      },
      whatIsLibreTranslate: {
        id: 'what-is-libretranslate',
        title: 'LibreTranslateとは',
        content: [
          '**LibreTranslateは自分で運用する翻訳サービスであり、独自の翻訳モデルではありません。** READMEは、完全にセルフホスト型の無料オープンソース機械翻訳APIであり、他のAPIと違ってGoogleやAzureのような独自ソフトウェアに依存しないと説明しています。エンジンはオープンソースの[Argos Translate](https://github.com/argosopentech/argos-translate)ライブラリで、[Argos Translateのレビュー](/ja/power-local-llm/argos-translate-review)で別途取り上げています。LibreTranslateはその上にWebインターフェース、REST API、リクエスト制限を加えています。',
          'APIドキュメントには、翻訳、言語検出、ファイル翻訳、言語一覧、提案、ヘルスチェックのエンドポイントが載っています。ソース言語に`auto`を指定すると言語を検出し、`format`を`html`にするとマークアップを保持し、`alternatives`で追加の候補を返します。任意の設定として、文字数制限、クライアントごとのレート制限、APIキー、Webインターフェースを無効にするスイッチ、翻訳キャッシュがあります。',
          'プロジェクトはコミュニティによって作られており、サイトにはLibreTranslate Contributorsと記載され、インターフェースはWeblateで翻訳されています。この名前は、プロジェクト自身のサイトから運営される有料のホスト型APIにも使われています。独立したディレクトリ[Localhosted](https://localhosted.com/libretranslate)の掲載は、プロジェクトが管理しているものではありません。このレビューは文書化された情報源のみに基づき、実機での検証は行っていないため、翻訳品質と速度は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '使い始める',
        content: [
          '**セットアップは、pipでのインストール、サーバーを起動するコマンド1つ、ブラウザのタブ1つです。** 手順はドキュメントのクイックスタートに沿っています。',
        ],
        numberedItems: [
          {
            title: 'パッケージをインストールする',
            whyItMatters: 'Python 3.8以降の環境で`pip install libretranslate`を実行します。',
          },
          {
            title: 'サーバーを起動する',
            whyItMatters: '`libretranslate`を実行します。既定では127.0.0.1のポート5000で待ち受けます。`--load-only en,es,fr`を付けると読み込む言語が減り、起動が速くなります。',
          },
          {
            title: 'Webインターフェースを開く',
            whyItMatters: 'ブラウザで`http://localhost:5000`を開き、テキストやファイルを翻訳します。',
          },
          {
            title: 'APIを呼び出す',
            whyItMatters: '`curl -X POST http://localhost:5000/translate -d q="Hello" -d source=en -d target=es`を送信します。クイックスタートには応答として`{"translatedText":"Hola"}`が示されています。',
          },
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '言語、モデル、ハードウェア',
        content: [
          '**既定では、セルフホストのサーバーは利用可能なすべての言語への対応をインストールし、`--load-only`で読み込む言語を絞れます。** 公開サイトの言語一覧には2026年11月19日時点で51の言語コードがあり、その背後のモデルはArgos Translateのものです。PromptQuorumは、モデルのサイズ、起動時間、翻訳品質を測定していません。',
          'ドキュメントにはRAM、ディスク、CPUの要件が記載されていません。GPU高速化は、CUDA 12.4.1とNVIDIA Dockerランタイム向けの別のDocker Composeファイルで説明されており、pipのクイックスタートはGPUなしで動きます。知っておきたい既定値：サーバーは127.0.0.1のみで待ち受け、スレッド数は4で、設定するまで文字数やリクエストの制限はありません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー、ライセンス、費用',
        content: [
          '**READMEによれば、LibreTranslateは完全にセルフホスト型で、独自のエンジンで翻訳するため、自分のサーバーではテキストは送信先として指定した場所にしか行きません。** 独立した掲載であるLocalhostedは違いを指摘しています。公開サイトに入力したテキストはホスト型サービスに送られ、セルフホストの導入では自分のサーバーで処理されます。PromptQuorumはネットワーク通信や依存ライブラリが取得する内容を調べていないため、これはプロジェクト自身の説明です。',
          'ホスト型サービスについて、[プライバシーポリシー](https://portal.libretranslate.com/privacy.html)（2025年9月23日更新）は、翻訳テキストを保存もログ記録もしないこと、不正利用防止のためIPアドレスをAPIキーとともに2日間記録すること、決済にStripeを使うこと、トラッキング技術を使わないこと（ただしCookieに認証や不正検知のデータが含まれる場合があること）を述べています。住所として米国フロリダ州セントピーターズバーグの郵送先が記載されています。これらはプロジェクト自身の記載で、PromptQuorumは検証できていません。',
          'ソフトウェアはAGPL-3.0で無料です。このライセンスは、改変してネットワーク経由で他者に提供する場合に義務を伴うため、事前にライセンス本文を読んでください。名称の使用には別の[商標ポリシー](https://github.com/LibreTranslate/LibreTranslate/blob/main/TRADEMARK.md)があります。ホスト型APIキーは有料で、ポータルには月額14ドル、29ドル、58ドルの3つのプラン、無料キーなし、7日間の返金保証、1回の呼び出しにつき2,000文字の上限が記載されています。ポータルのFAQは、料金を払う必要はなく自分のサーバーをホストできるとしつつ、同等の性能のサーバーを運用するほうがキーより高くつく場合があるとも述べています。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ：利点と制約',
        columns: ['利点', '実際の使用では', '制約・注意点'],
        rows: [
          {
            '利点': '自分でホストする',
            '実際の使用では': 'テキストを自分のサーバーに留められる。',
            '制約・注意点': 'ターミナルとPythonまたはDockerが必要。プライバシーポリシーはホスト型のみが対象。',
          },
          {
            '利点': '無料でオープンソース',
            '実際の使用では': 'AGPL-3.0のコードで、単語ごとの料金はない。',
            '制約・注意点': '改変版をネットワーク経由で提供するとAGPLの義務が生じる。',
          },
          {
            '利点': 'REST APIとWebインターフェース',
            '実際の使用では': '1台のサーバーでアプリとブラウザ画面の両方に対応。',
            '制約・注意点': 'APIキー、制限、インターフェースは自分で設定する。',
          },
          {
            '利点': 'オープンなエンジン',
            '実際の使用では': 'GoogleやAzureではなくArgos Translateのモデル。',
            '制約・注意点': '翻訳品質は未テスト。',
          },
          {
            '利点': '任意のGPU',
            '実際の使用では': 'CUDA用のComposeファイルが用意されている。',
            '制約・注意点': 'ここでは速度の数値を公表していない。',
          },
          {
            '利点': '活発なリポジトリ',
            '実際の使用では': '2026年11月14日までコミットが続いている。',
            '制約・注意点': '最新リリース1.9.6は2026年5月26日付。最近のコミットの多くはインターフェースの翻訳。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LibreTranslateと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近い翻訳ツールは、LibreTranslateのエンジン、書籍翻訳パイプライン、iPhoneアプリです。',
        ],
        columns: ['アプリ', '対応', '価格とライセンス', '役割', '主な違い'],
        rows: [
          {
            'アプリ': 'LibreTranslate',
            '対応': 'Mac、Windows、Linux、セルフホスト',
            '価格とライセンス': '無料、AGPL-3.0',
            '役割': '翻訳サーバーとAPI',
            '主な違い': '自分のサーバーでWeb UIとREST API',
          },
          {
            'アプリ': '[Argos Translate](/ja/power-local-llm/argos-translate-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、MIT',
            '役割': 'オフライン翻訳ライブラリ',
            '主な違い': 'エンジン本体。PythonとCLIのみ',
          },
          {
            'アプリ': '[TranslateBooksWithLLMs](/ja/power-local-llm/translate-books-with-llms-review)',
            '対応': 'Mac、Windows、Linux',
            '価格とライセンス': '無料、AGPL-3.0',
            '役割': '書籍・文書の翻訳',
            '主な違い': '翻訳エンジンではなくローカル/クラウドLLM',
          },
          {
            'アプリ': '[On-Device AI Translator](/ja/power-local-llm/on-device-ai-translator-review)',
            '対応': 'iPhone',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            '役割': 'スマホ向け翻訳アプリ',
            '主な違い': '端末上で言語モデルを実行。サーバーではなくアプリ',
          },
        ],
        note: 'サードパーティ製アプリのプラットフォーム、価格、機能は頻繁に変わります。決める前に各プロジェクトのページで最新情報を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'LibreTranslateが向いている人',
        items: [
          '**開発者。** REST APIは、自分で管理できる翻訳が必要なスクリプト、アプリ、パイプラインに向いています。',
          '**テキストを社内に留めたいチーム。** READMEによれば、セルフホストのサーバーは自分のマシン上でテキストを処理します。',
          '**オープンソース利用者。** AGPL-3.0のコードは公開されており、ソフトウェアは無料です。',
          '**ホームラボやDockerのユーザー。** Docker、Compose、Helmの手順が文書化されています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'LibreTranslateが向かない人',
        items: [
          '**ダブルクリックで使えるアプリが欲しい人。** インストーラーはなく、セットアップはpipかDockerです。',
          '**実証された品質が必要な人。** PromptQuorumは精度と速度をテストしていません。',
          '**無料のホスト型APIが欲しい人。** ポータルは有料プランのみで、無料キーはありません。',
          '**スマホで使いたい人。** 代わりにiPhone向けのOn-Device AI Translatorを検討してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'LibreTranslateはオフラインで動きますか？',
            a: 'READMEは完全なセルフホスト型と説明し、サイトもオフライン対応と述べているため、自分で運用するサーバーはインストール済みのモデルで翻訳します。インストールにはネットワークが必要で、PromptQuorumは切断状態では試していません。',
          },
          {
            q: 'LibreTranslateはArgos Translateと同じものですか？',
            a: 'いいえ。Argos TranslateはLibreTranslateのエンジンを支えるオープンソースの翻訳ライブラリで、LibreTranslateはWebインターフェース、REST API、制限機能を加えたものです。それぞれ別のプロジェクトです。',
          },
          {
            q: 'APIキーは必要ですか？',
            a: '自分で運用するサーバーでは不要です。キー検査は既定で無効で、`--api-keys`で有効にできます。プロジェクトのポータルのホスト型APIには有料キーが必要です。',
          },
          {
            q: 'ファイル翻訳や言語検出はできますか？',
            a: 'APIリファレンスには`/translate_file`と`/detect`があり、ソースを`auto`にすると言語を検出します。PromptQuorumが読んだドキュメントのページには、対応ファイル形式の記載がありません。',
          },
          {
            q: 'GPUは必要ですか？',
            a: '要件は記載されていません。GPUの利用はCUDA 12.4.1向けの別のDocker Composeファイルで説明されており、pipのクイックスタートにGPUへの言及はありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'LibreTranslateは、人向けのWebインターフェースとソフトウェア向けのREST APIを備えた、無料でオープンソースの翻訳サーバーを自分でホストしたい場合に適しています。AGPL-3.0ライセンス、PyPIパッケージ（2026年5月の1.9.6）、Docker、Compose、Helmの手順があり、リポジトリは2026年11月にも変更が続いていました。',
          '注意点は範囲と検証の難しさです。インストーラーがなく、ハードウェア要件の記載がなく、最新リリースは2026年5月で、品質とプライバシーに関する記載はPromptQuorumが確認できていません。ホスト型APIのプランは別で有料です。何かを構築する前に、小さなテキストで1つの言語ペアを試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[LibreTranslate公式サイト](https://libretranslate.com)：製品概要、言語一覧、Webインターフェース。',
          '[ドキュメント](https://docs.libretranslate.com)：クイックスタート、インストール、引数、APIの使い方。',
          '[GitHubリポジトリ](https://github.com/LibreTranslate/LibreTranslate)：README、AGPL-3.0ライセンス、商標ポリシー、コミット履歴。',
          '[PyPIのプロジェクトページ](https://pypi.org/project/libretranslate/)：バージョン1.9.6と公開日。',
          '[APIポータル](https://portal.libretranslate.com)：ホスト型プラン、価格、FAQ。',
          '[ホスト型サービスのプライバシーポリシー](https://portal.libretranslate.com/privacy.html)：データの扱いと郵送先住所（2025年9月23日更新）。',
          '[Localhostedの掲載](https://localhosted.com/libretranslate)：プロジェクトが管理していない独立した掲載。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Argos Translateレビュー](/ja/power-local-llm/argos-translate-review)：LibreTranslateのエンジンを支えるオープンソースのオフライン翻訳ライブラリ。',
          '[TranslateBooksWithLLMsレビュー](/ja/power-local-llm/translate-books-with-llms-review)：ローカルまたはクラウドのモデルで書籍を丸ごと翻訳する。',
          '[On-Device AI Translatorレビュー](/ja/power-local-llm/on-device-ai-translator-review)：iPhone向けのオフライン言語モデル翻訳。',
          '[ローカルLLMソフトウェア総合ディレクトリ](/ja/directory)：プラットフォームをまたいだローカルAIツールの幅広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-19',
    dateModified: '2026-11-19',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/libretranslate-review-hero-zh.webp',
    title: 'LibreTranslate评测：可自行托管的免费翻译API与网页界面',
    seoTitle: 'LibreTranslate评测：免费自托管的翻译服务器',
    intro: 'LibreTranslate 是一个免费、开源（AGPL-3.0）的机器翻译服务器：你可以用 pip 或 Docker 安装，它会在你自己的机器上提供网页界面和 REST API，翻译引擎是 Argos Translate 库，因此文本由你下载的模型翻译，而不是由 Google 或 Azure 翻译。该项目还在 [libretranslate.com](https://libretranslate.com) 运营一项付费托管 API。本评测汇总官网、文档、PyPI 页面、GitHub 仓库和托管服务隐私政策的说明，介绍安装需要做什么，并与目录中的其他翻译工具作比较。',
    metaDescription: 'LibreTranslate评测：基于 Argos Translate、可自行托管的免费 AGPL-3.0 翻译 API 与网页界面，pip 或 Docker 安装，另有付费托管方案。未做实测。',
    twitterDescription: 'LibreTranslate评测：带网页界面和 REST API 的免费开源翻译服务器。安装、隐私、托管方案、局限与替代品。',
    audience: '希望自行托管免费开源翻译服务器、而不是使用云翻译服务的开发者和团队——涵盖安装、语言、隐私、托管方案、维护、局限和替代品。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreTranslate review',
    targetKeywords: [
      'libretranslate 评测',
      'libretranslate 自托管',
      'libretranslate docker',
      'libretranslate api',
      '自托管翻译 api',
      '开源翻译服务器',
      'libretranslate 对比 argos translate',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**LibreTranslate 是一个免费、开源（AGPL-3.0）的翻译服务器，带网页界面和 REST API，据其 README 称完全可自行托管，并使用 Argos Translate 引擎，而不是 Google 或 Azure 之类的专有服务。** 最新版本是 2026 年 5 月 26 日发布的 1.9.6，仓库最近一次变更在 2026 年 11 月 14 日。本评测依据该项目的官网、文档、PyPI 页面、GitHub 仓库和托管服务的隐私政策，而非亲自实测。',
    quickAnswerTop: {
      zh: {
        question: 'LibreTranslate 是本地翻译工具吗？',
        answer: '自行托管时是：README 称它完全自托管，文档也是在你自己的机器上用 Argos Translate 模型运行，因此文本留在你的服务器上。公开网站和付费 API 则是该项目的托管服务，文本会发送到该服务。PromptQuorum 没有检查网络流量，也没有测试其中任何一种，所以这是项目自己的说法。',
        bullets: [
          '它是服务器，不是桌面应用：用 `pip install libretranslate` 或 Docker 安装并启动，然后打开 `http://localhost:5000`。',
          'REST API 提供翻译、语言检测、文件翻译和语言列表；除非你开启密钥检查，否则不需要 API 密钥。',
          '语言就是启动时加载的模型：默认加载所有可用模型，用 `--load-only` 可以少加载一些。',
          '托管 API 是另外的付费服务，没有免费密钥。',
          '最近一次发布在 2026 年 5 月，文档没有写明硬件要求。',
        ],
        updatedDate: '2026-11-19',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: '获取 LibreTranslate', anchor: 'get-it' },
      { label: 'LibreTranslate 概览', anchor: 'at-a-glance' },
      { label: 'LibreTranslate 是什么', anchor: 'what-is-libretranslate' },
      { label: '如何开始', anchor: 'how-to-get-started' },
      { label: '语言、模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '取舍：优点与局限', anchor: 'tradeoffs' },
      { label: 'LibreTranslate 与替代品对比', anchor: 'vs-alternatives' },
      { label: '适合使用 LibreTranslate 的人', anchor: 'who-should-use' },
      { label: '不适合使用 LibreTranslate 的人', anchor: 'who-should-not-use' },
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
            text: 'LibreTranslate 是带网页界面和 REST API 的免费开源翻译服务器，据 README 称由你自行托管，并用开源的 Argos Translate 引擎翻译。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成在你自己的电脑或服务器上运行一个小型翻译网站：安装一次，加载语言模型，之后你的应用或浏览器把文本发给它，而不是发给在线服务。',
          },
        ],
        items: [
          '本地说法：自托管安装会在你自己的服务器上用 Argos Translate 模型翻译；安装需要联网，文档没有说明模型何时首次下载。',
          `许可与项目：AGPL-3.0，代码由 LibreTranslate Contributors 在 GitHub 上公开，共有 ${ST.zh('libretranslate')} 个星标。`,
          '安装：一条 pip 命令或一个 Docker 脚本，然后在浏览器打开 5000 端口；它是终端工具，不是双击安装的应用。',
          '维护：1.9.6 版发布于 2026 年 5 月 26 日，仓库最近一次变更在 2026 年 11 月 14 日（翻译更新；最近一次代码变更在 2026 年 10 月 26 日）。',
          '空白：没有写明硬件要求，没有安装程序，本评测也没有对翻译质量做基准测试。',
        ],
      },
      getItLibreTranslate: {
        id: 'get-it',
        title: '获取 LibreTranslate',
        content: [
          '**LibreTranslate 没有安装程序：你需要以 Python 包或 Docker 方式运行，因此必须使用终端。** 快速入门是先运行 `pip install libretranslate`，再运行 `libretranslate`，网页界面会在 `http://localhost:5000` 提供。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Python 包（pip）',
            '获取方式': '`pip install libretranslate`，然后运行 `libretranslate`——见 [PyPI 页面](https://pypi.org/project/libretranslate/)',
          },
          {
            '平台': 'Docker',
            '获取方式': '克隆仓库，然后运行 `./run.sh`（Linux 和 macOS）或 `run.bat`（Windows）',
          },
          {
            '平台': '带 NVIDIA GPU 的 Docker',
            '获取方式': '`docker compose -f docker-compose.cuda.yml up -d --build`（CUDA 12.4.1）',
          },
          {
            '平台': 'Gunicorn 与 Kubernetes',
            '获取方式': 'Gunicorn 命令和 Helm chart 见[安装指南](https://docs.libretranslate.com/guides/installation/)',
          },
          {
            '平台': '文档',
            '获取方式': '[docs.libretranslate.com](https://docs.libretranslate.com)',
          },
          {
            '平台': '官网',
            '获取方式': '[libretranslate.com](https://libretranslate.com)——同时是托管网页界面（文本会发送到该服务）',
          },
          {
            '平台': '托管 API 密钥',
            '获取方式': '[portal.libretranslate.com](https://portal.libretranslate.com)——付费方案',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[托管服务的隐私政策](https://portal.libretranslate.com/privacy.html)',
          },
          {
            '平台': '源代码',
            '获取方式': '[github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate)——AGPL-3.0',
          },
        ],
        note: '当前版本 **1.9.6**，发布于 2026 年 5 月 26 日；仓库最近一次推送在 2026 年 11 月 14 日（2026 年 11 月 19 日核对，见 [GitHub 发布页](https://github.com/LibreTranslate/LibreTranslate/releases)）。需要终端以及 Python 或 Docker；PromptQuorum 没有找到 .dmg、.exe、应用商店页面或发布附件。隐私政策针对托管服务，不适用于你自己的服务器。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'LibreTranslate 概览',
        columns: ['属性', 'LibreTranslate'],
        rows: [
          {
            '属性': '平台',
            LibreTranslate: 'macOS、Windows 和 Linux 上的 Python 或 Docker；Kubernetes 提供 Helm chart',
          },
          {
            '属性': '价格',
            LibreTranslate: '软件免费；托管 API 付费',
          },
          {
            '属性': '许可',
            LibreTranslate: 'AGPL-3.0，开源',
          },
          {
            '属性': '运行位置',
            LibreTranslate: '在你自己的服务器上使用 Argos Translate 模型；另有托管服务',
          },
          {
            '属性': '界面',
            LibreTranslate: '网页界面、REST API、命令行',
          },
          {
            '属性': '语言',
            LibreTranslate: '你加载的模型；公开网站列出 51 个语言代码',
          },
          {
            '属性': '最近更新',
            LibreTranslate: '2026 年 5 月 26 日发布 1.9.6；仓库 2026 年 11 月 14 日有变更',
          },
          {
            '属性': '本地 API 服务器',
            LibreTranslate: '是：REST API 就是产品本身',
          },
          {
            '属性': 'GPU',
            LibreTranslate: '可选，通过 CUDA 版 Docker Compose 文件',
          },
        ],
        note: '语言数量来自公开网站的语言列表（2026 年 11 月 19 日读取），会随模型增加而变化；自托管服务器提供你加载的语言。没有说明的项目表示未知，而不是不支持。',
      },
      whatIsLibreTranslate: {
        id: 'what-is-libretranslate',
        title: 'LibreTranslate 是什么',
        content: [
          '**LibreTranslate 是你自己运行的翻译服务，本身不是一个翻译模型。** README 称它是免费开源的机器翻译 API，完全自托管，并且与其他 API 不同，不依赖 Google 或 Azure 之类的专有软件；引擎是开源的 [Argos Translate](https://github.com/argosopentech/argos-translate) 库，我们在 [Argos Translate 评测](/zh/power-local-llm/argos-translate-review)中单独介绍。LibreTranslate 在其上增加了网页界面、REST API 和请求限制。',
          'API 文档列出了翻译、语言检测、文件翻译、语言列表、建议和健康检查等接口。把源语言设为 `auto` 可自动检测语言，把 `format` 设为 `html` 可保留标记，`alternatives` 会返回更多候选译文。可选设置包括字符数限制、按客户端的速率限制、API 密钥、关闭网页界面的开关和翻译缓存。',
          '该项目由社区共建：网站署名为 LibreTranslate Contributors，界面通过 Weblate 翻译。这个名称也用于项目自己网站运营的付费托管 API。独立目录 [Localhosted](https://localhosted.com/libretranslate) 上的条目并非由项目方认领。本评测只依据书面资料，没有亲自实测，因此不评价翻译质量和速度。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始',
        content: [
          '**设置过程就是一次 pip 安装、一条启动服务器的命令和一个浏览器标签页。** 步骤依据文档中的快速入门。',
        ],
        numberedItems: [
          {
            title: '安装软件包',
            whyItMatters: '在 Python 3.8 或更高版本的环境中运行 `pip install libretranslate`。',
          },
          {
            title: '启动服务器',
            whyItMatters: '运行 `libretranslate`；默认监听 127.0.0.1 的 5000 端口。加上 `--load-only en,es,fr` 可以少加载语言，启动更快。',
          },
          {
            title: '打开网页界面',
            whyItMatters: '在浏览器中访问 `http://localhost:5000`，翻译文本或文件。',
          },
          {
            title: '调用 API',
            whyItMatters: '发送 `curl -X POST http://localhost:5000/translate -d q="Hello" -d source=en -d target=es`；快速入门给出的返回结果是 `{"translatedText":"Hola"}`。',
          },
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '语言、模型与硬件',
        content: [
          '**默认情况下，自托管服务器会安装所有可用语言的支持，`--load-only` 可限制加载哪些语言。** 公开网站的语言列表在 2026 年 11 月 19 日有 51 个语言代码；背后的模型来自 Argos Translate。PromptQuorum 没有测量模型大小、启动时间或翻译质量。',
          '文档没有写明内存、磁盘或 CPU 要求。GPU 加速通过另一个面向 CUDA 12.4.1 和 NVIDIA Docker 运行时的 Docker Compose 文件说明，因此 pip 快速入门不需要 GPU。值得了解的默认值：服务器只监听 127.0.0.1，使用 4 个线程，在你设置之前没有字符数或请求数限制。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**据 README，LibreTranslate 完全自托管并使用自己的引擎翻译，因此在你自己的服务器上，文本只会发送到你指定的地方。** 独立目录 Localhosted 指出了区别：在公开网站输入的文本会发送到托管服务，而自托管部署在你的服务器上处理文本。PromptQuorum 没有检查网络流量，也没有检查依赖项会获取什么，所以这是项目自己的说法。',
          '关于托管服务，[隐私政策](https://portal.libretranslate.com/privacy.html)（2025 年 9 月 23 日更新）称其不存储也不记录翻译文本，会把 IP 地址与 API 密钥一起记录 2 天以防滥用，使用 Stripe 处理付款，不使用跟踪技术，但 Cookie 可能包含身份验证或欺诈检测数据。政策中给出了美国佛罗里达州圣彼得堡的邮寄地址。这些是项目自己的声明，PromptQuorum 无法验证。',
          '软件在 AGPL-3.0 下免费；如果你修改后通过网络提供给他人，该许可证会带来相应义务，请先阅读许可证文本；名称的使用另有[商标政策](https://github.com/LibreTranslate/LibreTranslate/blob/main/TRADEMARK.md)。托管 API 密钥需要付费：门户列出三个方案，每月 $14、$29 和 $58，没有免费密钥，提供 7 天退款保证，每次调用限 2,000 个字符。门户的 FAQ 称你无需付费，可以自己托管服务器，但要达到同等性能，自建服务器的成本可能高于购买一个密钥。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '取舍：优点与局限',
        columns: ['优点', '实际使用中意味着什么', '局限 / 注意事项'],
        rows: [
          {
            '优点': '自行托管',
            '实际使用中意味着什么': '文本可以留在你自己的服务器上。',
            '局限 / 注意事项': '需要终端、Python 或 Docker；隐私政策只涵盖托管服务。',
          },
          {
            '优点': '免费且开源',
            '实际使用中意味着什么': 'AGPL-3.0 代码，没有按字数收费。',
            '局限 / 注意事项': '通过网络提供修改版需承担 AGPL 义务。',
          },
          {
            '优点': 'REST API 加网页界面',
            '实际使用中意味着什么': '一台服务器同时服务你的应用和浏览器页面。',
            '局限 / 注意事项': 'API 密钥、限制和界面都要自己配置。',
          },
          {
            '优点': '开放引擎',
            '实际使用中意味着什么': '使用 Argos Translate 模型，而非 Google 或 Azure。',
            '局限 / 注意事项': '翻译质量未经测试。',
          },
          {
            '优点': '可选 GPU',
            '实际使用中意味着什么': '提供 CUDA 版 Compose 文件。',
            '局限 / 注意事项': '此处没有公布速度数据。',
          },
          {
            '优点': '仓库活跃',
            '实际使用中意味着什么': '提交持续到 2026 年 11 月 14 日。',
            '局限 / 注意事项': '最新版 1.9.6 发布于 2026 年 5 月 26 日；近期许多提交是界面翻译。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LibreTranslate 与替代品对比',
        content: [
          '以下是目录中最接近的翻译工具：LibreTranslate 所基于的引擎、一个图书翻译流水线和一款 iPhone 应用。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'LibreTranslate',
            '平台': 'Mac、Windows、Linux、自托管',
            '价格与许可': '免费，AGPL-3.0',
            '定位': '翻译服务器与 API',
            '主要区别': '在自己服务器上提供网页界面和 REST API',
          },
          {
            '应用': '[Argos Translate](/zh/power-local-llm/argos-translate-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，MIT',
            '定位': '离线翻译库',
            '主要区别': '即其引擎；仅限 Python 和命令行',
          },
          {
            '应用': '[TranslateBooksWithLLMs](/zh/power-local-llm/translate-books-with-llms-review)',
            '平台': 'Mac、Windows、Linux',
            '价格与许可': '免费，AGPL-3.0',
            '定位': '图书与文档翻译',
            '主要区别': '本地或云端语言模型，不是翻译引擎',
          },
          {
            '应用': '[On-Device AI Translator](/zh/power-local-llm/on-device-ai-translator-review)',
            '平台': 'iPhone',
            '价格与许可': '免费增值，闭源',
            '定位': '手机翻译应用',
            '主要区别': '在设备上运行语言模型；是应用，不是服务器',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化。决定之前，请到各项目自己的页面核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用 LibreTranslate 的人',
        items: [
          '**开发者。** REST API 适合需要自主掌控翻译的脚本、应用和流水线。',
          '**希望文本留在内部的团队。** 据 README，自托管服务器在你自己的机器上处理文本。',
          '**开源用户。** AGPL-3.0 代码公开，软件免费。',
          '**家庭实验室和 Docker 用户。** Docker、Compose 和 Helm 的部署方式均有文档。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用 LibreTranslate 的人',
        items: [
          '**想要双击即用应用的人。** 没有安装程序，安装需要 pip 或 Docker。',
          '**需要经过验证的质量的读者。** PromptQuorum 没有测试准确度或速度。',
          '**想要免费托管 API 的人。** 门户只有付费方案，没有免费密钥。',
          '**手机用户。** 请改看适用于 iPhone 的 On-Device AI Translator。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'LibreTranslate 可以离线使用吗？',
            a: 'README 称它完全自托管，网站也说可离线运行，因此你自己运行的服务器使用已安装的模型翻译。安装需要联网，PromptQuorum 没有在断网状态下测试。',
          },
          {
            q: 'LibreTranslate 和 Argos Translate 一样吗？',
            a: '不一样。Argos Translate 是为 LibreTranslate 引擎提供支持的开源翻译库；LibreTranslate 在其上增加了网页界面、REST API 和限制功能。两者是各自独立的项目。',
          },
          {
            q: '需要 API 密钥吗？',
            a: '自己运行的服务器不需要：密钥检查默认关闭，可用 `--api-keys` 开启。项目门户上的托管 API 需要付费密钥。',
          },
          {
            q: '能翻译文件和检测语言吗？',
            a: 'API 参考列出了 `/translate_file` 和 `/detect`，把源语言设为 `auto` 即可检测语言。PromptQuorum 读到的文档页面没有列出支持的文件格式。',
          },
          {
            q: '需要 GPU 吗？',
            a: '没有写明要求。GPU 的使用通过面向 CUDA 12.4.1 的另一个 Docker Compose 文件说明；pip 快速入门没有提到 GPU。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想自行托管一个免费开源的翻译服务器，既有给人用的网页界面，又有给软件用的 REST API，LibreTranslate 是合适的选择。它采用 AGPL-3.0 许可，有 PyPI 包（2026 年 5 月的 1.9.6），提供 Docker、Compose 和 Helm 部署方式，仓库在 2026 年 11 月仍有变更。',
          '需要注意的是范围和可验证性：没有安装程序，没有写明硬件要求，最近一次发布在 2026 年 5 月，质量和隐私方面的说法 PromptQuorum 无法核实。托管 API 方案是另外的付费服务。在基于它构建任何东西之前，先用一小段文本试一个语言对。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[LibreTranslate 官网](https://libretranslate.com)——产品概览、语言列表和网页界面。',
          '[文档](https://docs.libretranslate.com)——快速入门、安装、参数和 API 用法。',
          '[GitHub 仓库](https://github.com/LibreTranslate/LibreTranslate)——README、AGPL-3.0 许可证、商标政策和提交历史。',
          '[PyPI 项目页面](https://pypi.org/project/libretranslate/)——1.9.6 版及发布日期。',
          '[API 门户](https://portal.libretranslate.com)——托管方案、价格和 FAQ。',
          '[托管服务隐私政策](https://portal.libretranslate.com/privacy.html)——数据处理方式和邮寄地址，2025 年 9 月 23 日更新。',
          '[Localhosted 条目](https://localhosted.com/libretranslate)——独立目录条目，并非由项目方认领。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Argos Translate 评测](/zh/power-local-llm/argos-translate-review)——LibreTranslate 引擎背后的开源离线翻译库。',
          '[TranslateBooksWithLLMs 评测](/zh/power-local-llm/translate-books-with-llms-review)——用本地或云端模型翻译整本书。',
          '[On-Device AI Translator 评测](/zh/power-local-llm/on-device-ai-translator-review)——适用于 iPhone 的离线语言模型翻译。',
          '[本地 LLM 软件完整目录](/zh/directory)——涵盖各平台的更广泛的本地 AI 工具目录。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-19',
    dateModified: '2026-11-19',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/libretranslate-review-hero-es.webp',
    title: 'Reseña de LibreTranslate: API de traducción gratuita y autoalojada con interfaz web',
    seoTitle: 'Reseña de LibreTranslate: traductor gratis autoalojado',
    intro: 'LibreTranslate es un servidor de traducción automática gratuito y de código abierto (AGPL-3.0): lo instalas con pip o Docker, ofrece una interfaz web y una API REST en tu propia máquina, y su motor de traducción es la biblioteca Argos Translate. Es decir, el texto lo traducen modelos que descargas tú, no Google ni Azure. El proyecto también ofrece una API alojada de pago en [libretranslate.com](https://libretranslate.com). Esta reseña resume lo que dicen el sitio web, la documentación, la página de PyPI, el repositorio de GitHub y la política de privacidad del servicio alojado, qué implica la instalación y cómo se compara LibreTranslate con otras herramientas de traducción del directorio.',
    metaDescription: 'Reseña de LibreTranslate: API de traducción AGPL-3.0 gratuita con interfaz web que alojas tú, basada en Argos Translate. Con pip o Docker. Sin probar.',
    twitterDescription: 'Reseña de LibreTranslate: servidor de traducción gratuito y de código abierto con interfaz web y API REST. Instalación, privacidad, planes alojados, límites y alternativas.',
    audience: 'Desarrolladores y equipos que quieren alojar ellos mismos un servidor de traducción gratuito y de código abierto en lugar de usar un servicio de traducción en la nube: cubre instalación, idiomas, privacidad, planes alojados, mantenimiento, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreTranslate review',
    targetKeywords: [
      'reseña libretranslate',
      'libretranslate autoalojado',
      'libretranslate docker',
      'api libretranslate',
      'api de traducción autoalojada',
      'servidor de traducción de código abierto',
      'libretranslate vs argos translate',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**LibreTranslate es un servidor de traducción gratuito y de código abierto (AGPL-3.0), con interfaz web y API REST, que según su README está totalmente autoalojado y usa el motor Argos Translate en lugar de servicios propietarios como Google o Azure.** La versión más reciente es la 1.9.6, del 26 de mayo de 2026, y el repositorio se modificó por última vez el 14 de noviembre de 2026. Esta reseña se basa en el sitio web, la documentación, la página de PyPI, el repositorio de GitHub y la política de privacidad del servicio alojado, no en pruebas propias.',
    quickAnswerTop: {
      es: {
        question: '¿Es LibreTranslate una herramienta de traducción local?',
        answer: 'Sí, si lo alojas tú: el README lo describe como totalmente autoalojado, y la documentación lo ejecuta en tu propia máquina con modelos de Argos Translate, de modo que el texto se queda en tu servidor. El sitio público y la API de pago son, en cambio, el servicio alojado del proyecto, al que se envía el texto. PromptQuorum no inspeccionó el tráfico de red ni probó ninguno de los dos, así que esta es la descripción del propio proyecto.',
        bullets: [
          'Es un servidor, no una aplicación de escritorio: instálalo con `pip install libretranslate` o Docker, ponlo en marcha y abre `http://localhost:5000`.',
          'La API REST ofrece traducción, detección de idioma, traducción de archivos y una lista de idiomas; no hace falta clave de API salvo que actives la comprobación de claves.',
          'Los idiomas son modelos que se cargan al iniciar: todos los disponibles por defecto, menos con `--load-only`.',
          'La API alojada es un servicio de pago aparte, sin claves gratuitas.',
          'La última versión es de mayo de 2026 y la documentación no indica requisitos de hardware.',
        ],
        updatedDate: '2026-11-19',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Dónde conseguir LibreTranslate', anchor: 'get-it' },
      { label: 'LibreTranslate de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es LibreTranslate', anchor: 'what-is-libretranslate' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Idiomas, modelos y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y costes', anchor: 'privacy' },
      { label: 'Compromisos: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'LibreTranslate frente a las alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar LibreTranslate', anchor: 'who-should-use' },
      { label: 'Quién no debería usar LibreTranslate', anchor: 'who-should-not-use' },
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
            text: 'LibreTranslate es un servidor de traducción gratuito y de código abierto, con interfaz web y API REST, que según su README alojas tú mismo y que traduce con el motor de código abierto Argos Translate.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en tener tu propia pequeña web de traducción en tu ordenador o servidor: la instalas una vez, se cargan los modelos de idioma y tus aplicaciones o tu navegador le envían el texto en lugar de enviarlo a un servicio en línea.',
          },
        ],
        items: [
          'Afirmación local: una instalación autoalojada traduce con modelos de Argos Translate en tu propio servidor; la instalación usa internet y la documentación no dice cuándo se descargan por primera vez los modelos.',
          `Licencia y proyecto: AGPL-3.0, código abierto publicado por LibreTranslate Contributors en GitHub, con ${ST.es('libretranslate')} estrellas.`,
          'Instalación: un comando de pip o un script de Docker y luego un navegador en el puerto 5000; es una herramienta de terminal, no una aplicación de doble clic.',
          'Mantenimiento: la versión 1.9.6 es del 26 de mayo de 2026 y el repositorio se modificó por última vez el 14 de noviembre de 2026 (actualizaciones de traducciones; el cambio de código más reciente es del 26 de octubre de 2026).',
          'Lagunas: no se indica ningún requisito de hardware, no hay instalador y esta reseña no incluye ninguna medición de la calidad de traducción.',
        ],
      },
      getItLibreTranslate: {
        id: 'get-it',
        title: 'Dónde conseguir LibreTranslate',
        content: [
          '**LibreTranslate no tiene instalador: se ejecuta como paquete de Python o en Docker, así que hace falta una terminal.** El inicio rápido es `pip install libretranslate` seguido de `libretranslate`, que sirve la interfaz web en `http://localhost:5000`.',
        ],
        columns: ['Plataforma', 'Dónde conseguirlo'],
        rows: [
          {
            Plataforma: 'Paquete de Python (pip)',
            'Dónde conseguirlo': '`pip install libretranslate` y después `libretranslate`: consulta la [página de PyPI](https://pypi.org/project/libretranslate/)',
          },
          {
            Plataforma: 'Docker',
            'Dónde conseguirlo': 'Clona el repositorio y ejecuta `./run.sh` (Linux y macOS) o `run.bat` (Windows)',
          },
          {
            Plataforma: 'Docker con GPU NVIDIA',
            'Dónde conseguirlo': '`docker compose -f docker-compose.cuda.yml up -d --build` (CUDA 12.4.1)',
          },
          {
            Plataforma: 'Gunicorn y Kubernetes',
            'Dónde conseguirlo': 'Comando de Gunicorn y chart de Helm en la [guía de instalación](https://docs.libretranslate.com/guides/installation/)',
          },
          {
            Plataforma: 'Documentación',
            'Dónde conseguirlo': '[docs.libretranslate.com](https://docs.libretranslate.com)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirlo': '[libretranslate.com](https://libretranslate.com): también la interfaz web alojada (el texto va a ese servicio)',
          },
          {
            Plataforma: 'Claves de la API alojada',
            'Dónde conseguirlo': '[portal.libretranslate.com](https://portal.libretranslate.com): planes de pago',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirlo': '[Política de privacidad del servicio alojado](https://portal.libretranslate.com/privacy.html)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirlo': '[github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate): AGPL-3.0',
          },
        ],
        note: 'Versión actual **1.9.6**, publicada el 26 de mayo de 2026; el último push del repositorio es del 14 de noviembre de 2026 (comprobado el 19 de noviembre de 2026, [versiones de GitHub](https://github.com/LibreTranslate/LibreTranslate/releases)). Hacen falta una terminal y Python o Docker; PromptQuorum no encontró ningún .dmg, .exe, ficha de tienda ni archivos de versión. La política de privacidad cubre el servicio alojado, no tu propio servidor.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'LibreTranslate de un vistazo',
        columns: ['Atributo', 'LibreTranslate'],
        rows: [
          {
            Atributo: 'Plataforma',
            LibreTranslate: 'Python o Docker en macOS, Windows y Linux; chart de Helm para Kubernetes',
          },
          {
            Atributo: 'Precio',
            LibreTranslate: 'Software gratuito; la API alojada es de pago',
          },
          {
            Atributo: 'Licencia',
            LibreTranslate: 'AGPL-3.0, código abierto',
          },
          {
            Atributo: 'Se ejecuta',
            LibreTranslate: 'En tu propio servidor con modelos de Argos Translate; también existe un servicio alojado',
          },
          {
            Atributo: 'Interfaces',
            LibreTranslate: 'Interfaz web, API REST, línea de comandos',
          },
          {
            Atributo: 'Idiomas',
            LibreTranslate: 'Los modelos que cargues; el sitio público listaba 51 códigos de idioma',
          },
          {
            Atributo: 'Última actualización',
            LibreTranslate: 'Versión 1.9.6 el 26 de mayo de 2026; repositorio modificado el 14 de noviembre de 2026',
          },
          {
            Atributo: 'Servidor de API local',
            LibreTranslate: 'Sí: la API REST es el producto',
          },
          {
            Atributo: 'GPU',
            LibreTranslate: 'Opcional, mediante un archivo de Docker Compose para CUDA',
          },
        ],
        note: 'El número de idiomas procede de la lista de idiomas del sitio público, leída el 19 de noviembre de 2026, y cambia al añadirse modelos; un servidor autoalojado ofrece los idiomas que cargues. Una afirmación ausente significa desconocido, no no compatible.',
      },
      whatIsLibreTranslate: {
        id: 'what-is-libretranslate',
        title: 'Qué es LibreTranslate',
        content: [
          '**LibreTranslate es un servicio de traducción que ejecutas tú mismo, no un modelo de traducción propio.** El README lo describe como una API de traducción automática gratuita y de código abierto, totalmente autoalojada y que, a diferencia de otras API, no depende de software propietario como Google o Azure; el motor es la biblioteca de código abierto [Argos Translate](https://github.com/argosopentech/argos-translate), que se analiza aparte en la [reseña de Argos Translate](/es/power-local-llm/argos-translate-review). LibreTranslate añade una interfaz web, una API REST y límites de solicitudes.',
          'La documentación de la API enumera endpoints para traducción, detección de idioma, traducción de archivos, la lista de idiomas, sugerencias y una comprobación de estado. Un idioma de origen `auto` detecta el idioma, `format` con valor `html` conserva el marcado y `alternatives` devuelve candidatos adicionales. Entre los ajustes opcionales figuran límites de caracteres, límites de solicitudes por cliente, claves de API, un interruptor para desactivar la interfaz web y una caché de traducciones.',
          'El proyecto lo hace la comunidad: el sitio web cita a LibreTranslate Contributors y la interfaz se traduce a través de Weblate. El nombre también se usa para una API alojada de pago que se ofrece desde el propio sitio del proyecto. La ficha en [Localhosted](https://localhosted.com/libretranslate), un directorio independiente, no está reclamada por el proyecto. Esta reseña se basa solo en fuentes escritas y no incluyó pruebas propias, por lo que no se valoran la calidad ni la velocidad de traducción.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha es una instalación con pip, un comando para iniciar el servidor y una pestaña del navegador.** Los pasos siguen el inicio rápido de la documentación.',
        ],
        numberedItems: [
          {
            title: 'Instala el paquete',
            whyItMatters: 'Ejecuta `pip install libretranslate` en un entorno con Python 3.8 o posterior.',
          },
          {
            title: 'Inicia el servidor',
            whyItMatters: 'Ejecuta `libretranslate`; por defecto escucha en 127.0.0.1, puerto 5000. Añade `--load-only en,es,fr` para cargar menos idiomas y arrancar más rápido.',
          },
          {
            title: 'Abre la interfaz web',
            whyItMatters: 'Entra en `http://localhost:5000` para traducir texto o archivos.',
          },
          {
            title: 'Llama a la API',
            whyItMatters: 'Envía `curl -X POST http://localhost:5000/translate -d q="Hello" -d source=en -d target=es`; el inicio rápido muestra la respuesta `{"translatedText":"Hola"}`.',
          },
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Idiomas, modelos y hardware',
        content: [
          '**Por defecto, un servidor autoalojado instala la compatibilidad con todos los idiomas disponibles, y `--load-only` limita cuáles se cargan.** La lista de idiomas del sitio público tenía 51 códigos de idioma el 19 de noviembre de 2026; los modelos que hay detrás proceden de Argos Translate. PromptQuorum no midió el tamaño de los modelos, el tiempo de arranque ni la calidad de traducción.',
          'La documentación no indica ningún requisito de RAM, disco ni CPU. La aceleración por GPU se documenta mediante un archivo de Docker Compose aparte para CUDA 12.4.1 y el entorno de ejecución de Docker de NVIDIA, así que el inicio rápido con pip funciona sin GPU. Valores por defecto que conviene conocer: el servidor escucha solo en 127.0.0.1, usa 4 hilos y no tiene límite de caracteres ni de solicitudes hasta que lo configures.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y costes',
        content: [
          '**Según el README, LibreTranslate está totalmente autoalojado y traduce con su propio motor, de modo que en tu propio servidor el texto solo va adonde tú lo envíes.** Una ficha independiente en Localhosted señala la diferencia: el texto escrito en el sitio público va al servicio alojado, mientras que una instalación autoalojada lo procesa en tu servidor. PromptQuorum no examinó el tráfico de red ni lo que obtienen las dependencias, así que esta es la descripción del propio proyecto.',
          'Sobre el servicio alojado, la [política de privacidad](https://portal.libretranslate.com/privacy.html), actualizada el 23 de septiembre de 2025, dice que no almacena ni registra los textos traducidos, que registra las direcciones IP junto con las claves de API durante 2 días para evitar abusos, que usa Stripe para los pagos y que no usa tecnologías de seguimiento, aunque las cookies pueden contener datos de autenticación o de detección de fraude. Indica una dirección postal en San Petersburgo, Florida, Estados Unidos. Son declaraciones del proyecto; PromptQuorum no pudo verificarlas.',
          'El software es gratuito bajo la AGPL-3.0, que impone obligaciones si lo modificas y lo ofreces a otros por red, así que lee primero el texto de la licencia; una [política de marcas](https://github.com/LibreTranslate/LibreTranslate/blob/main/TRADEMARK.md) aparte regula el uso del nombre. Las claves de la API alojada son de pago: el portal enumera tres planes a 14, 29 y 58 dólares estadounidenses al mes, sin claves gratuitas, con garantía de devolución de 7 días y un límite de 2.000 caracteres por llamada. Sus preguntas frecuentes dicen que no tienes que pagar y que puedes alojar tu propio servidor, aunque mantener uno con el mismo rendimiento puede costar más que una clave.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromisos: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / salvedad'],
        rows: [
          {
            Ventaja: 'Lo alojas tú',
            'Qué significa en el uso real': 'El texto puede quedarse en tu propio servidor.',
            'Limitación / salvedad': 'Requiere terminal, Python o Docker; la política de privacidad solo cubre el servicio alojado.',
          },
          {
            Ventaja: 'Gratis y de código abierto',
            'Qué significa en el uso real': 'Código AGPL-3.0 y sin tarifa por palabra.',
            'Limitación / salvedad': 'Las versiones modificadas ofrecidas por red conllevan obligaciones de la AGPL.',
          },
          {
            Ventaja: 'API REST más interfaz web',
            'Qué significa en el uso real': 'Un servidor atiende tus aplicaciones y una página del navegador.',
            'Limitación / salvedad': 'Tú configuras las claves de API, los límites y la interfaz.',
          },
          {
            Ventaja: 'Motor abierto',
            'Qué significa en el uso real': 'Modelos de Argos Translate en lugar de Google o Azure.',
            'Limitación / salvedad': 'No se probó la calidad de traducción.',
          },
          {
            Ventaja: 'GPU opcional',
            'Qué significa en el uso real': 'Se proporciona un archivo de Compose para CUDA.',
            'Limitación / salvedad': 'Aquí no se publican cifras de velocidad.',
          },
          {
            Ventaja: 'Repositorio activo',
            'Qué significa en el uso real': 'Los commits continúan hasta el 14 de noviembre de 2026.',
            'Limitación / salvedad': 'La última versión 1.9.6 es del 26 de mayo de 2026; muchos commits recientes son traducciones de la interfaz.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LibreTranslate frente a las alternativas',
        content: [
          'Estas son las herramientas de traducción más cercanas del directorio: el motor en el que se basa LibreTranslate, un flujo para traducir libros y una app para iPhone.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'LibreTranslate',
            Plataformas: 'Mac, Windows, Linux, autoalojado',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            Papel: 'Servidor de traducción y API',
            'Diferencia clave': 'Interfaz web y API REST en tu servidor',
          },
          {
            App: '[Argos Translate](/es/power-local-llm/argos-translate-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, MIT',
            Papel: 'Biblioteca de traducción sin conexión',
            'Diferencia clave': 'Su motor; solo Python y línea de comandos',
          },
          {
            App: '[TranslateBooksWithLLMs](/es/power-local-llm/translate-books-with-llms-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            Papel: 'Traducción de libros y documentos',
            'Diferencia clave': 'Modelo de lenguaje local o en la nube, no un motor de traducción',
          },
          {
            App: '[On-Device AI Translator](/es/power-local-llm/on-device-ai-translator-review)',
            Plataformas: 'iPhone',
            'Precio y licencia': 'Freemium, código cerrado',
            Papel: 'App de traducción para el móvil',
            'Diferencia clave': 'Ejecuta modelos de lenguaje en el dispositivo; una app, no un servidor',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de las apps de terceros cambian con frecuencia. Comprueba los datos actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar LibreTranslate',
        items: [
          '**Desarrolladores.** La API REST encaja con scripts, aplicaciones y flujos que necesitan traducción bajo tu control.',
          '**Equipos que mantienen el texto en casa.** Un servidor autoalojado procesa el texto en tu propia máquina, según el README.',
          '**Usuarios de código abierto.** El código AGPL-3.0 es público y el software no cuesta nada.',
          '**Usuarios de homelab y Docker.** Están documentadas las vías con Docker, Compose y Helm.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar LibreTranslate',
        items: [
          '**Quien quiera una app de doble clic.** No hay instalador; la puesta en marcha usa pip o Docker.',
          '**Lectores que necesiten calidad demostrada.** PromptQuorum no probó la precisión ni la velocidad.',
          '**Quien busque una API alojada gratuita.** El portal ofrece planes de pago y ninguna clave gratuita.',
          '**Usuarios de móvil.** Mira mejor On-Device AI Translator para iPhone.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona LibreTranslate sin conexión?',
            a: 'El README lo describe como totalmente autoalojado y el sitio web dice que puede funcionar sin conexión, así que un servidor que ejecutas tú traduce con los modelos instalados. La instalación necesita red y PromptQuorum no lo probó desconectado.',
          },
          {
            q: '¿Es LibreTranslate lo mismo que Argos Translate?',
            a: 'No. Argos Translate es la biblioteca de traducción de código abierto que impulsa el motor de LibreTranslate; LibreTranslate añade la interfaz web, la API REST y los límites. Cada uno es un proyecto independiente.',
          },
          {
            q: '¿Necesito una clave de API?',
            a: 'No para un servidor que ejecutas tú: la comprobación de claves está desactivada por defecto y se activa con `--api-keys`. La API alojada del portal del proyecto exige una clave de pago.',
          },
          {
            q: '¿Puede traducir archivos y detectar idiomas?',
            a: 'La referencia de la API enumera `/translate_file` y `/detect`, y poner el origen en `auto` detecta el idioma. La página de documentación que leyó PromptQuorum no enumera los formatos de archivo compatibles.',
          },
          {
            q: '¿Necesita una GPU?',
            a: 'No se indica ningún requisito. El uso de GPU se documenta mediante un archivo de Docker Compose aparte para CUDA 12.4.1; el inicio rápido con pip no menciona ninguna GPU.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'LibreTranslate encaja si quieres alojar tú mismo un servidor de traducción gratuito y de código abierto, con una interfaz web para personas y una API REST para software. Tiene licencia AGPL-3.0, un paquete en PyPI (1.9.6, de mayo de 2026), vías con Docker, Compose y Helm y un repositorio que seguía recibiendo cambios en noviembre de 2026.',
          'Las salvedades son el alcance y la verificación: no hay instalador, no se indica ningún requisito de hardware, la última versión es de mayo de 2026 y PromptQuorum no pudo comprobar las afirmaciones sobre calidad y privacidad. Los planes de la API alojada son aparte y de pago. Prueba un par de idiomas con un texto pequeño antes de construir nada encima.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de LibreTranslate](https://libretranslate.com): descripción del producto, lista de idiomas e interfaz web.',
          '[Documentación](https://docs.libretranslate.com): inicio rápido, instalación, argumentos y uso de la API.',
          '[Repositorio de GitHub](https://github.com/LibreTranslate/LibreTranslate): README, licencia AGPL-3.0, política de marcas e historial de commits.',
          '[Página del proyecto en PyPI](https://pypi.org/project/libretranslate/): versión 1.9.6 y fecha de publicación.',
          '[Portal de la API](https://portal.libretranslate.com): planes alojados, precios y preguntas frecuentes.',
          '[Política de privacidad del servicio alojado](https://portal.libretranslate.com/privacy.html): tratamiento de datos y dirección postal, actualizada el 23 de septiembre de 2025.',
          '[Ficha de Localhosted](https://localhosted.com/libretranslate): ficha independiente, no reclamada por el proyecto.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Argos Translate](/es/power-local-llm/argos-translate-review): la biblioteca de traducción sin conexión de código abierto que hay detrás del motor de LibreTranslate.',
          '[Reseña de TranslateBooksWithLLMs](/es/power-local-llm/translate-books-with-llms-review): traducir libros enteros con un modelo local o en la nube.',
          '[Reseña de On-Device AI Translator](/es/power-local-llm/on-device-ai-translator-review): traducción sin conexión con modelos de lenguaje para iPhone.',
          '[El directorio completo de software de LLM locales](/es/directory): un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-19',
    dateModified: '2026-11-19',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/libretranslate-review-hero-pt.webp',
    title: 'Análise do LibreTranslate: API de tradução gratuita e auto-hospedada com interface web',
    seoTitle: 'Análise do LibreTranslate: tradutor grátis auto-hospedado',
    intro: 'O LibreTranslate é um servidor de tradução automática gratuito e de código aberto (AGPL-3.0): você o instala com pip ou Docker, ele oferece uma interface web e uma API REST na sua própria máquina, e seu mecanismo de tradução é a biblioteca Argos Translate. Ou seja, o texto é traduzido por modelos que você baixa, não pelo Google nem pelo Azure. O projeto também mantém uma API hospedada paga em [libretranslate.com](https://libretranslate.com). Esta análise resume o que dizem o site, a documentação, a página do PyPI, o repositório do GitHub e a política de privacidade do serviço hospedado, o que a instalação envolve e como o LibreTranslate se compara a outras ferramentas de tradução do diretório.',
    metaDescription: 'Análise do LibreTranslate: API de tradução AGPL-3.0 gratuita com interface web que você hospeda, baseada no Argos Translate. Pip ou Docker. Não testado.',
    twitterDescription: 'Análise do LibreTranslate: servidor de tradução gratuito e de código aberto com interface web e API REST. Instalação, privacidade, planos hospedados, limites e alternativas.',
    audience: 'Desenvolvedores e equipes que querem hospedar por conta própria um servidor de tradução gratuito e de código aberto em vez de usar um serviço de tradução na nuvem — cobre instalação, idiomas, privacidade, planos hospedados, manutenção, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreTranslate review',
    targetKeywords: [
      'análise libretranslate',
      'libretranslate auto-hospedado',
      'libretranslate docker',
      'api libretranslate',
      'api de tradução auto-hospedada',
      'servidor de tradução de código aberto',
      'libretranslate vs argos translate',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**O LibreTranslate é um servidor de tradução gratuito e de código aberto (AGPL-3.0), com interface web e API REST, que segundo o README é totalmente auto-hospedado e usa o mecanismo Argos Translate em vez de serviços proprietários como Google ou Azure.** A versão mais recente é a 1.9.6, de 26 de maio de 2026, e o repositório foi alterado pela última vez em 14 de novembro de 2026. Esta análise se baseia no site, na documentação, na página do PyPI, no repositório do GitHub e na política de privacidade do serviço hospedado, não em testes próprios.',
    quickAnswerTop: {
      pt: {
        question: 'O LibreTranslate é uma ferramenta de tradução local?',
        answer: 'Sim, se você mesmo o hospedar: o README o descreve como totalmente auto-hospedado, e a documentação o executa na sua própria máquina com modelos do Argos Translate, então o texto fica no seu servidor. O site público e a API paga, por outro lado, são o serviço hospedado do projeto, para onde o texto é enviado. O PromptQuorum não inspecionou o tráfego de rede nem testou nenhum dos dois, então esta é a descrição do próprio projeto.',
        bullets: [
          'É um servidor, não um aplicativo de desktop: instale com `pip install libretranslate` ou Docker, inicie e abra `http://localhost:5000`.',
          'A API REST oferece tradução, detecção de idioma, tradução de arquivos e uma lista de idiomas; não é preciso chave de API, a menos que você ative a verificação de chaves.',
          'Os idiomas são modelos carregados na inicialização: todos os disponíveis por padrão, menos com `--load-only`.',
          'A API hospedada é um serviço pago à parte, sem chaves gratuitas.',
          'A última versão é de maio de 2026 e a documentação não informa requisitos de hardware.',
        ],
        updatedDate: '2026-11-19',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Onde obter o LibreTranslate', anchor: 'get-it' },
      { label: 'LibreTranslate em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o LibreTranslate', anchor: 'what-is-libretranslate' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Idiomas, modelos e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custos', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'LibreTranslate frente às alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deve usar o LibreTranslate', anchor: 'who-should-use' },
      { label: 'Quem não deve usar o LibreTranslate', anchor: 'who-should-not-use' },
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
            text: 'O LibreTranslate é um servidor de tradução gratuito e de código aberto, com interface web e API REST, que segundo o README você hospeda por conta própria e que traduz com o mecanismo de código aberto Argos Translate.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em manter um pequeno site de tradução só seu no seu computador ou servidor: você instala uma vez, os modelos de idioma são carregados e seus aplicativos ou seu navegador enviam o texto para ele, em vez de enviar a um serviço online.',
          },
        ],
        items: [
          'Afirmação local: uma instalação auto-hospedada traduz com modelos do Argos Translate no seu próprio servidor; a instalação usa a internet, e a documentação não diz quando os modelos são baixados pela primeira vez.',
          `Licença e projeto: AGPL-3.0, código aberto publicado por LibreTranslate Contributors no GitHub, com ${ST.pt('libretranslate')} estrelas.`,
          'Instalação: um comando do pip ou um script do Docker e depois um navegador na porta 5000; é uma ferramenta de terminal, não um aplicativo de clique duplo.',
          'Manutenção: a versão 1.9.6 é de 26 de maio de 2026 e o repositório foi alterado pela última vez em 14 de novembro de 2026 (atualizações de tradução; a alteração de código mais recente é de 26 de outubro de 2026).',
          'Lacunas: nenhum requisito de hardware informado, nenhum instalador e nenhuma medição da qualidade de tradução nesta análise.',
        ],
      },
      getItLibreTranslate: {
        id: 'get-it',
        title: 'Onde obter o LibreTranslate',
        content: [
          '**O LibreTranslate não tem instalador: você o executa como pacote Python ou no Docker, então é preciso um terminal.** O início rápido é `pip install libretranslate` seguido de `libretranslate`, que serve a interface web em `http://localhost:5000`.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Pacote Python (pip)',
            'Onde obter': '`pip install libretranslate` e depois `libretranslate` — veja a [página do PyPI](https://pypi.org/project/libretranslate/)',
          },
          {
            Plataforma: 'Docker',
            'Onde obter': 'Clone o repositório e execute `./run.sh` (Linux e macOS) ou `run.bat` (Windows)',
          },
          {
            Plataforma: 'Docker com GPU NVIDIA',
            'Onde obter': '`docker compose -f docker-compose.cuda.yml up -d --build` (CUDA 12.4.1)',
          },
          {
            Plataforma: 'Gunicorn e Kubernetes',
            'Onde obter': 'Comando do Gunicorn e chart do Helm no [guia de instalação](https://docs.libretranslate.com/guides/installation/)',
          },
          {
            Plataforma: 'Documentação',
            'Onde obter': '[docs.libretranslate.com](https://docs.libretranslate.com)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[libretranslate.com](https://libretranslate.com) — também a interface web hospedada (o texto vai para esse serviço)',
          },
          {
            Plataforma: 'Chaves da API hospedada',
            'Onde obter': '[portal.libretranslate.com](https://portal.libretranslate.com) — planos pagos',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do serviço hospedado](https://portal.libretranslate.com/privacy.html)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': '[github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) — AGPL-3.0',
          },
        ],
        note: 'Versão atual **1.9.6**, publicada em 26 de maio de 2026; o último push do repositório é de 14 de novembro de 2026 (verificado em 19 de novembro de 2026, [versões do GitHub](https://github.com/LibreTranslate/LibreTranslate/releases)). São necessários um terminal e Python ou Docker; o PromptQuorum não encontrou .dmg, .exe, página em loja de aplicativos nem arquivos de versão. A política de privacidade cobre o serviço hospedado, não o seu próprio servidor.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'LibreTranslate em resumo',
        columns: ['Atributo', 'LibreTranslate'],
        rows: [
          {
            Atributo: 'Plataforma',
            LibreTranslate: 'Python ou Docker em macOS, Windows e Linux; chart do Helm para Kubernetes',
          },
          {
            Atributo: 'Preço',
            LibreTranslate: 'Software gratuito; a API hospedada é paga',
          },
          {
            Atributo: 'Licença',
            LibreTranslate: 'AGPL-3.0, código aberto',
          },
          {
            Atributo: 'Execução',
            LibreTranslate: 'No seu próprio servidor com modelos do Argos Translate; também existe um serviço hospedado',
          },
          {
            Atributo: 'Interfaces',
            LibreTranslate: 'Interface web, API REST, linha de comando',
          },
          {
            Atributo: 'Idiomas',
            LibreTranslate: 'Os modelos que você carregar; o site público listava 51 códigos de idioma',
          },
          {
            Atributo: 'Última atualização',
            LibreTranslate: 'Versão 1.9.6 em 26 de maio de 2026; repositório alterado em 14 de novembro de 2026',
          },
          {
            Atributo: 'Servidor de API local',
            LibreTranslate: 'Sim: a API REST é o produto',
          },
          {
            Atributo: 'GPU',
            LibreTranslate: 'Opcional, por meio de um arquivo do Docker Compose para CUDA',
          },
        ],
        note: 'O número de idiomas vem da lista de idiomas do site público, lida em 19 de novembro de 2026, e muda conforme modelos são adicionados; um servidor auto-hospedado oferece os idiomas que você carregar. Uma informação ausente significa desconhecido, não sem suporte.',
      },
      whatIsLibreTranslate: {
        id: 'what-is-libretranslate',
        title: 'O que é o LibreTranslate',
        content: [
          '**O LibreTranslate é um serviço de tradução que você mesmo executa, não um modelo de tradução próprio.** O README o descreve como uma API de tradução automática gratuita e de código aberto, totalmente auto-hospedada e que, ao contrário de outras APIs, não depende de software proprietário como Google ou Azure; o mecanismo é a biblioteca de código aberto [Argos Translate](https://github.com/argosopentech/argos-translate), analisada à parte na [análise do Argos Translate](/pt/power-local-llm/argos-translate-review). O LibreTranslate acrescenta uma interface web, uma API REST e limites de requisições.',
          'A documentação da API lista endpoints para tradução, detecção de idioma, tradução de arquivos, a lista de idiomas, sugestões e uma verificação de saúde. Um idioma de origem `auto` detecta o idioma, `format` definido como `html` preserva a marcação e `alternatives` retorna candidatos adicionais. Entre as configurações opcionais estão limites de caracteres, limites de requisições por cliente, chaves de API, um interruptor para desativar a interface web e um cache de traduções.',
          'O projeto é feito pela comunidade: o site cita LibreTranslate Contributors e a interface é traduzida pelo Weblate. O nome também é usado para uma API hospedada paga operada a partir do site do próprio projeto. A página no [Localhosted](https://localhosted.com/libretranslate), um diretório independente, não foi reivindicada pelo projeto. Esta análise se baseia apenas em fontes escritas e não envolveu testes próprios, por isso a qualidade e a velocidade de tradução não são avaliadas.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração é uma instalação com pip, um comando para iniciar o servidor e uma aba do navegador.** Os passos seguem o início rápido da documentação.',
        ],
        numberedItems: [
          {
            title: 'Instale o pacote',
            whyItMatters: 'Execute `pip install libretranslate` em um ambiente com Python 3.8 ou posterior.',
          },
          {
            title: 'Inicie o servidor',
            whyItMatters: 'Execute `libretranslate`; por padrão ele escuta em 127.0.0.1, porta 5000. Adicione `--load-only en,es,fr` para carregar menos idiomas e iniciar mais rápido.',
          },
          {
            title: 'Abra a interface web',
            whyItMatters: 'Acesse `http://localhost:5000` para traduzir texto ou arquivos.',
          },
          {
            title: 'Chame a API',
            whyItMatters: 'Envie `curl -X POST http://localhost:5000/translate -d q="Hello" -d source=en -d target=es`; o início rápido mostra a resposta `{"translatedText":"Hola"}`.',
          },
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Idiomas, modelos e hardware',
        content: [
          '**Por padrão, um servidor auto-hospedado instala suporte a todos os idiomas disponíveis, e `--load-only` limita quais são carregados.** A lista de idiomas do site público tinha 51 códigos de idioma em 19 de novembro de 2026; os modelos por trás deles vêm do Argos Translate. O PromptQuorum não mediu o tamanho dos modelos, o tempo de inicialização nem a qualidade da tradução.',
          'A documentação não informa nenhum requisito de RAM, disco ou CPU. A aceleração por GPU é documentada por meio de um arquivo do Docker Compose separado para CUDA 12.4.1 e o ambiente de execução do Docker da NVIDIA, então o início rápido com pip roda sem GPU. Padrões que vale conhecer: o servidor escuta apenas em 127.0.0.1, usa 4 threads e não tem limite de caracteres nem de requisições até você definir um.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custos',
        content: [
          '**Segundo o README, o LibreTranslate é totalmente auto-hospedado e traduz com seu próprio mecanismo, de modo que, no seu próprio servidor, o texto só vai para onde você o enviar.** Uma página independente no Localhosted aponta a diferença: o texto digitado no site público vai para o serviço hospedado, enquanto uma instalação auto-hospedada o processa no seu servidor. O PromptQuorum não examinou o tráfego de rede nem o que as dependências buscam, então esta é a descrição do próprio projeto.',
          'Sobre o serviço hospedado, a [política de privacidade](https://portal.libretranslate.com/privacy.html), atualizada em 23 de setembro de 2025, diz que ele não armazena nem registra os textos traduzidos, registra endereços IP junto com chaves de API por 2 dias para evitar abusos, usa o Stripe para pagamentos e não usa tecnologias de rastreamento, embora cookies possam conter dados de autenticação ou de detecção de fraude. Ela informa um endereço postal em São Petersburgo, Flórida, Estados Unidos. São declarações do projeto; o PromptQuorum não pôde verificá-las.',
          'O software é gratuito sob a AGPL-3.0, que impõe obrigações se você o modificar e o oferecer a outras pessoas por rede, então leia primeiro o texto da licença; uma [política de marca](https://github.com/LibreTranslate/LibreTranslate/blob/main/TRADEMARK.md) à parte regula o uso do nome. As chaves da API hospedada são pagas: o portal lista três planos a 14, 29 e 58 dólares americanos por mês, sem chaves gratuitas, com garantia de reembolso de 7 dias e limite de 2.000 caracteres por chamada. O FAQ do portal diz que você não precisa pagar e pode hospedar seu próprio servidor, embora manter um com o mesmo desempenho possa custar mais do que uma chave.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'Você hospeda',
            'O que significa no uso real': 'O texto pode ficar no seu próprio servidor.',
            'Limitação / ressalva': 'Exige terminal, Python ou Docker; a política de privacidade cobre só o serviço hospedado.',
          },
          {
            Vantagem: 'Gratuito e de código aberto',
            'O que significa no uso real': 'Código AGPL-3.0 e sem tarifa por palavra.',
            'Limitação / ressalva': 'Versões modificadas oferecidas por rede trazem obrigações da AGPL.',
          },
          {
            Vantagem: 'API REST e interface web',
            'O que significa no uso real': 'Um servidor atende seus aplicativos e uma página do navegador.',
            'Limitação / ressalva': 'Você configura chaves de API, limites e interface.',
          },
          {
            Vantagem: 'Mecanismo aberto',
            'O que significa no uso real': 'Modelos do Argos Translate em vez de Google ou Azure.',
            'Limitação / ressalva': 'A qualidade da tradução não foi testada.',
          },
          {
            Vantagem: 'GPU opcional',
            'O que significa no uso real': 'Há um arquivo do Compose para CUDA.',
            'Limitação / ressalva': 'Aqui não são publicados números de velocidade.',
          },
          {
            Vantagem: 'Repositório ativo',
            'O que significa no uso real': 'Os commits continuam até 14 de novembro de 2026.',
            'Limitação / ressalva': 'A última versão 1.9.6 é de 26 de maio de 2026; muitos commits recentes são traduções da interface.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LibreTranslate frente às alternativas',
        content: [
          'Estas são as ferramentas de tradução mais próximas do diretório: o mecanismo em que o LibreTranslate se baseia, um fluxo para traduzir livros e um app para iPhone.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'LibreTranslate',
            Plataformas: 'Mac, Windows, Linux, auto-hospedado',
            'Preço e licença': 'Grátis, AGPL-3.0',
            'Função': 'Servidor de tradução e API',
            'Diferença principal': 'Interface web e API REST no seu servidor',
          },
          {
            App: '[Argos Translate](/pt/power-local-llm/argos-translate-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, MIT',
            'Função': 'Biblioteca de tradução offline',
            'Diferença principal': 'Seu mecanismo; só Python e linha de comando',
          },
          {
            App: '[TranslateBooksWithLLMs](/pt/power-local-llm/translate-books-with-llms-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço e licença': 'Grátis, AGPL-3.0',
            'Função': 'Tradução de livros e documentos',
            'Diferença principal': 'Modelo de linguagem local ou na nuvem, não um mecanismo de tradução',
          },
          {
            App: '[On-Device AI Translator](/pt/power-local-llm/on-device-ai-translator-review)',
            Plataformas: 'iPhone',
            'Preço e licença': 'Freemium, código fechado',
            'Função': 'App de tradução para celular',
            'Diferença principal': 'Roda modelos de linguagem no aparelho; um app, não um servidor',
          },
        ],
        note: 'Detalhes de plataforma, preço e recursos de apps de terceiros mudam com frequência. Confira as informações atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deve usar o LibreTranslate',
        items: [
          '**Desenvolvedores.** A API REST serve para scripts, aplicativos e fluxos que precisam de tradução sob o seu controle.',
          '**Equipes que mantêm o texto em casa.** Um servidor auto-hospedado processa o texto na sua própria máquina, segundo o README.',
          '**Usuários de código aberto.** O código AGPL-3.0 é público e o software não custa nada.',
          '**Usuários de homelab e Docker.** Os caminhos com Docker, Compose e Helm estão documentados.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deve usar o LibreTranslate',
        items: [
          '**Quem quer um app de clique duplo.** Não há instalador; a configuração usa pip ou Docker.',
          '**Leitores que precisam de qualidade comprovada.** O PromptQuorum não testou precisão nem velocidade.',
          '**Quem quer uma API hospedada gratuita.** O portal oferece planos pagos e nenhuma chave gratuita.',
          '**Usuários de celular.** Veja o On-Device AI Translator para iPhone.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O LibreTranslate funciona offline?',
            a: 'O README o descreve como totalmente auto-hospedado e o site diz que ele pode funcionar offline, então um servidor que você executa traduz com os modelos instalados. A instalação precisa de rede, e o PromptQuorum não o testou desconectado.',
          },
          {
            q: 'O LibreTranslate é o mesmo que o Argos Translate?',
            a: 'Não. O Argos Translate é a biblioteca de tradução de código aberto que alimenta o mecanismo do LibreTranslate; o LibreTranslate acrescenta a interface web, a API REST e os limites. Cada um é um projeto próprio.',
          },
          {
            q: 'Preciso de uma chave de API?',
            a: 'Não para um servidor que você mesmo executa: a verificação de chaves vem desativada e pode ser ativada com `--api-keys`. A API hospedada no portal do projeto exige uma chave paga.',
          },
          {
            q: 'Ele traduz arquivos e detecta idiomas?',
            a: 'A referência da API lista `/translate_file` e `/detect`, e definir a origem como `auto` detecta o idioma. A página de documentação que o PromptQuorum leu não lista os formatos de arquivo compatíveis.',
          },
          {
            q: 'Precisa de GPU?',
            a: 'Nenhum requisito é informado. O uso de GPU é documentado por meio de um arquivo do Docker Compose separado para CUDA 12.4.1; o início rápido com pip não menciona GPU.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O LibreTranslate é uma boa opção se você quer hospedar por conta própria um servidor de tradução gratuito e de código aberto, com interface web para pessoas e API REST para software. Ele tem licença AGPL-3.0, pacote no PyPI (1.9.6, de maio de 2026), caminhos com Docker, Compose e Helm e um repositório que ainda recebia alterações em novembro de 2026.',
          'As ressalvas são escopo e verificação: sem instalador, sem requisito de hardware informado, última versão de maio de 2026 e afirmações de qualidade e privacidade que o PromptQuorum não pôde conferir. Os planos da API hospedada são separados e pagos. Teste um par de idiomas com um texto pequeno antes de construir qualquer coisa em cima dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do LibreTranslate](https://libretranslate.com) — visão geral do produto, lista de idiomas e interface web.',
          '[Documentação](https://docs.libretranslate.com) — início rápido, instalação, argumentos e uso da API.',
          '[Repositório do GitHub](https://github.com/LibreTranslate/LibreTranslate) — README, licença AGPL-3.0, política de marca e histórico de commits.',
          '[Página do projeto no PyPI](https://pypi.org/project/libretranslate/) — versão 1.9.6 e data de publicação.',
          '[Portal da API](https://portal.libretranslate.com) — planos hospedados, preços e FAQ.',
          '[Política de privacidade do serviço hospedado](https://portal.libretranslate.com/privacy.html) — tratamento de dados e endereço postal, atualizada em 23 de setembro de 2025.',
          '[Página no Localhosted](https://localhosted.com/libretranslate) — página independente, não reivindicada pelo projeto.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do Argos Translate](/pt/power-local-llm/argos-translate-review) — a biblioteca de tradução offline de código aberto por trás do mecanismo do LibreTranslate.',
          '[Análise do TranslateBooksWithLLMs](/pt/power-local-llm/translate-books-with-llms-review) — traduzir livros inteiros com um modelo local ou na nuvem.',
          '[Análise do On-Device AI Translator](/pt/power-local-llm/on-device-ai-translator-review) — tradução offline com modelos de linguagem para iPhone.',
          '[O diretório completo de software de LLM locais](/pt/directory) — um diretório mais amplo de ferramentas de IA local para várias plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-19',
    dateModified: '2026-11-19',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/libretranslate-review-hero-ar.webp',
    title: 'مراجعة LibreTranslate: واجهة ترجمة مجانية تستضيفها بنفسك مع واجهة ويب',
    seoTitle: 'مراجعة LibreTranslate: أداة ترجمة مجانية تستضيفها',
    intro: 'LibreTranslate خادم ترجمة آلية مجاني ومفتوح المصدر (AGPL-3.0): تثبّته عبر pip أو Docker، فيقدّم واجهة ويب وواجهة REST API على جهازك، ومحرك الترجمة فيه هو مكتبة Argos Translate، أي أن النص تترجمه نماذج تنزّلها أنت لا Google ولا Azure. ويشغّل المشروع أيضًا واجهة API مستضافة مدفوعة على [libretranslate.com](https://libretranslate.com). تلخّص هذه المراجعة ما يقوله الموقع والوثائق وصفحة PyPI ومستودع GitHub وسياسة خصوصية الخدمة المستضافة، وما يتطلبه التثبيت، وكيف يقارن LibreTranslate بأدوات الترجمة الأخرى في الدليل.',
    metaDescription: 'مراجعة LibreTranslate: واجهة ترجمة مجانية AGPL-3.0 مع واجهة ويب تستضيفها بنفسك، مبنية على Argos Translate. تثبيت بـ pip أو Docker. لم تُختبر.',
    twitterDescription: 'مراجعة LibreTranslate: خادم ترجمة مجاني ومفتوح المصدر بواجهة ويب وREST API. التثبيت والخصوصية والخطط المستضافة والحدود والبدائل.',
    audience: 'المطورون والفرق الذين يريدون استضافة خادم ترجمة مجاني ومفتوح المصدر بأنفسهم بدلًا من خدمة ترجمة سحابية — تغطي التثبيت واللغات والخصوصية والخطط المستضافة والصيانة والحدود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreTranslate review',
    targetKeywords: [
      'مراجعة libretranslate',
      'libretranslate استضافة ذاتية',
      'libretranslate docker',
      'libretranslate api',
      'واجهة ترجمة ذاتية الاستضافة',
      'خادم ترجمة مفتوح المصدر',
      'libretranslate مقابل argos translate',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**LibreTranslate خادم ترجمة مجاني ومفتوح المصدر (AGPL-3.0) بواجهة ويب وREST API، وهو بحسب ملف README مستضاف ذاتيًا بالكامل ويستخدم محرك Argos Translate بدلًا من خدمات مملوكة مثل Google أو Azure.** أحدث إصدار هو 1.9.6 بتاريخ 26 مايو 2026، وآخر تعديل على المستودع كان في 14 نوفمبر 2026. تعتمد هذه المراجعة على موقع المشروع ووثائقه وصفحة PyPI ومستودع GitHub وسياسة خصوصية الخدمة المستضافة، لا على تجربة عملية.',
    quickAnswerTop: {
      ar: {
        question: 'هل LibreTranslate أداة ترجمة محلية؟',
        answer: 'نعم، عندما تستضيفه بنفسك: يصفه ملف README بأنه مستضاف ذاتيًا بالكامل، وتشغّله الوثائق على جهازك بنماذج Argos Translate، فيبقى النص على خادمك. أما الموقع العام وواجهة API المدفوعة فهما الخدمة المستضافة للمشروع، ويُرسل إليها النص. لم يفحص PromptQuorum حركة الشبكة ولم يختبر أيًّا منهما، لذلك هذا وصف المشروع نفسه.',
        bullets: [
          'هو خادم لا تطبيق سطح مكتب: ثبّته بـ `pip install libretranslate` أو Docker، وشغّله، ثم افتح `http://localhost:5000`.',
          'تقدّم REST API الترجمة وكشف اللغة وترجمة الملفات وقائمة اللغات؛ ولا حاجة إلى مفتاح API ما لم تفعّل التحقق من المفاتيح.',
          'اللغات نماذج تُحمَّل عند البدء: كل المتاح افتراضيًا، وأقل منها عبر `--load-only`.',
          'واجهة API المستضافة خدمة مدفوعة منفصلة بلا مفاتيح مجانية.',
          'آخر إصدار صدر في مايو 2026، ولا تذكر الوثائق أي متطلبات عتادية.',
        ],
        updatedDate: '2026-11-19',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على LibreTranslate', anchor: 'get-it' },
      { label: 'LibreTranslate في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو LibreTranslate', anchor: 'what-is-libretranslate' },
      { label: 'كيف تبدأ', anchor: 'how-to-get-started' },
      { label: 'اللغات والنماذج والعتاد', anchor: 'models-hardware' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'المفاضلات: المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'LibreTranslate مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من ينبغي أن يستخدم LibreTranslate', anchor: 'who-should-use' },
      { label: 'من لا ينبغي أن يستخدم LibreTranslate', anchor: 'who-should-not-use' },
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
            text: 'LibreTranslate خادم ترجمة مجاني ومفتوح المصدر بواجهة ويب وREST API، تستضيفه بنفسك بحسب README، ويترجم بمحرك Argos Translate المفتوح المصدر.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل أنك تشغّل موقع ترجمة صغيرًا خاصًا بك على حاسوبك أو خادمك: تثبّته مرة واحدة، وتُحمَّل نماذج اللغات، ثم ترسل تطبيقاتك أو متصفحك النص إليه بدلًا من خدمة على الإنترنت.',
          },
        ],
        items: [
          'الادعاء المحلي: يترجم التثبيت الذاتي بنماذج Argos Translate على خادمك؛ ويحتاج التثبيت إلى الإنترنت، ولا تذكر الوثائق متى تُنزَّل النماذج أول مرة.',
          `الترخيص والمشروع: AGPL-3.0، وشيفرته مفتوحة ينشرها LibreTranslate Contributors على GitHub، وله ${ST.ar('libretranslate')} نجمة.`,
          'التثبيت: أمر pip واحد أو سكربت Docker، ثم متصفح على المنفذ 5000؛ وهو أداة طرفية لا تطبيق بنقرتين.',
          'الصيانة: الإصدار 1.9.6 بتاريخ 26 مايو 2026، وآخر تعديل على المستودع في 14 نوفمبر 2026 (تحديثات ترجمة؛ وأحدث تغيير في الشيفرة بتاريخ 26 أكتوبر 2026).',
          'الثغرات: لا متطلبات عتادية معلنة، ولا مثبّت، ولا قياس لجودة الترجمة في هذه المراجعة.',
        ],
      },
      getItLibreTranslate: {
        id: 'get-it',
        title: 'الحصول على LibreTranslate',
        content: [
          '**لا يملك LibreTranslate مثبّتًا: تشغّله كحزمة Python أو داخل Docker، لذا يلزم طرفية.** البدء السريع هو `pip install libretranslate` ثم `libretranslate`، فتُقدَّم واجهة الويب على `http://localhost:5000`.',
        ],
        columns: ['المنصة', 'مصدر الحصول'],
        rows: [
          {
            'المنصة': 'حزمة Python (pip)',
            'مصدر الحصول': '`pip install libretranslate` ثم `libretranslate` — راجع [صفحة PyPI](https://pypi.org/project/libretranslate/)',
          },
          {
            'المنصة': 'Docker',
            'مصدر الحصول': 'انسخ المستودع ثم شغّل `./run.sh` (Linux وmacOS) أو `run.bat` (Windows)',
          },
          {
            'المنصة': 'Docker مع معالج NVIDIA',
            'مصدر الحصول': '`docker compose -f docker-compose.cuda.yml up -d --build` (CUDA 12.4.1)',
          },
          {
            'المنصة': 'Gunicorn وKubernetes',
            'مصدر الحصول': 'أمر Gunicorn ومخطط Helm في [دليل التثبيت](https://docs.libretranslate.com/guides/installation/)',
          },
          {
            'المنصة': 'الوثائق',
            'مصدر الحصول': '[docs.libretranslate.com](https://docs.libretranslate.com)',
          },
          {
            'المنصة': 'الموقع الإلكتروني',
            'مصدر الحصول': '[libretranslate.com](https://libretranslate.com) — وهو أيضًا واجهة الويب المستضافة (يُرسل النص إلى تلك الخدمة)',
          },
          {
            'المنصة': 'مفاتيح API المستضافة',
            'مصدر الحصول': '[portal.libretranslate.com](https://portal.libretranslate.com) — خطط مدفوعة',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية الخدمة المستضافة](https://portal.libretranslate.com/privacy.html)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول': '[github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) — AGPL-3.0',
          },
        ],
        note: 'الإصدار الحالي **1.9.6**، صدر في 26 مايو 2026؛ وآخر دفع إلى المستودع في 14 نوفمبر 2026 (جرى التحقق في 19 نوفمبر 2026، [إصدارات GitHub](https://github.com/LibreTranslate/LibreTranslate/releases)). يلزم طرفية مع Python أو Docker؛ ولم يجد PromptQuorum ملف .dmg أو .exe أو صفحة متجر أو ملفات إصدار. تغطي سياسة الخصوصية الخدمة المستضافة، لا خادمك الخاص.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'LibreTranslate في لمحة',
        columns: ['الخاصية', 'LibreTranslate'],
        rows: [
          {
            'الخاصية': 'المنصة',
            LibreTranslate: 'Python أو Docker على macOS وWindows وLinux؛ مخطط Helm لـ Kubernetes',
          },
          {
            'الخاصية': 'السعر',
            LibreTranslate: 'البرنامج مجاني؛ واجهة API المستضافة مدفوعة',
          },
          {
            'الخاصية': 'الترخيص',
            LibreTranslate: 'AGPL-3.0، مفتوح المصدر',
          },
          {
            'الخاصية': 'مكان التشغيل',
            LibreTranslate: 'على خادمك بنماذج Argos Translate؛ وتوجد أيضًا خدمة مستضافة',
          },
          {
            'الخاصية': 'الواجهات',
            LibreTranslate: 'واجهة ويب، REST API، سطر أوامر',
          },
          {
            'الخاصية': 'اللغات',
            LibreTranslate: 'النماذج التي تحمّلها؛ وعرض الموقع العام 51 رمز لغة',
          },
          {
            'الخاصية': 'آخر تحديث',
            LibreTranslate: 'الإصدار 1.9.6 في 26 مايو 2026؛ وعُدّل المستودع في 14 نوفمبر 2026',
          },
          {
            'الخاصية': 'خادم API محلي',
            LibreTranslate: 'نعم: REST API هي المنتج نفسه',
          },
          {
            'الخاصية': 'معالج الرسوميات',
            LibreTranslate: 'اختياري، عبر ملف Docker Compose خاص بـ CUDA',
          },
        ],
        note: 'عدد اللغات مأخوذ من قائمة اللغات في الموقع العام (قُرئت في 19 نوفمبر 2026) ويتغير بإضافة النماذج؛ ويقدّم الخادم الذاتي الاستضافة اللغات التي تحمّلها. غياب المعلومة يعني أنها غير معروفة، لا أنها غير مدعومة.',
      },
      whatIsLibreTranslate: {
        id: 'what-is-libretranslate',
        title: 'ما هو LibreTranslate',
        content: [
          '**LibreTranslate خدمة ترجمة تشغّلها بنفسك، وليس نموذج ترجمة خاصًا به.** يصفه README بأنه واجهة ترجمة آلية مجانية ومفتوحة المصدر ومستضافة ذاتيًا بالكامل، ولا تعتمد، خلافًا لواجهات أخرى، على برمجيات مملوكة مثل Google أو Azure؛ والمحرك هو مكتبة [Argos Translate](https://github.com/argosopentech/argos-translate) المفتوحة المصدر، التي نتناولها منفصلة في [مراجعة Argos Translate](/ar/power-local-llm/argos-translate-review). ويضيف LibreTranslate واجهة ويب وREST API وحدودًا للطلبات.',
          'تسرد وثائق API نقاط وصول للترجمة وكشف اللغة وترجمة الملفات وقائمة اللغات والاقتراحات وفحص الحالة. ضبط لغة المصدر على `auto` يكشف اللغة، وضبط `format` على `html` يحافظ على الوسوم، و`alternatives` يعيد مرشحات إضافية. ومن الإعدادات الاختيارية حدود عدد الأحرف، وحدود معدل الطلبات لكل عميل، ومفاتيح API، ومفتاح لإيقاف واجهة الويب، وذاكرة مؤقتة للترجمات.',
          'المشروع مجتمعي: يذكر الموقع LibreTranslate Contributors، وتُترجم الواجهة عبر Weblate. ويُستخدم الاسم أيضًا لواجهة API مستضافة مدفوعة تُشغَّل من موقع المشروع نفسه. أما إدراج المشروع في [Localhosted](https://localhosted.com/libretranslate)، وهو دليل مستقل، فلم يطالب به المشروع. تعتمد هذه المراجعة على مصادر مكتوبة فقط ولم تتضمن تجربة عملية، لذلك لا تُقيَّم جودة الترجمة ولا سرعتها.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيف تبدأ',
        content: [
          '**الإعداد هو تثبيت بـ pip وأمر واحد لتشغيل الخادم وتبويب في المتصفح.** تتبع الخطوات البدء السريع في الوثائق.',
        ],
        numberedItems: [
          {
            title: 'ثبّت الحزمة',
            whyItMatters: 'شغّل `pip install libretranslate` في بيئة تحوي Python 3.8 أو أحدث.',
          },
          {
            title: 'شغّل الخادم',
            whyItMatters: 'شغّل `libretranslate`؛ يستمع افتراضيًا على 127.0.0.1 والمنفذ 5000. أضف `--load-only en,es,fr` لتحميل لغات أقل وبدء أسرع.',
          },
          {
            title: 'افتح واجهة الويب',
            whyItMatters: 'تصفّح `http://localhost:5000` لترجمة النصوص أو الملفات.',
          },
          {
            title: 'استدعِ API',
            whyItMatters: 'أرسل `curl -X POST http://localhost:5000/translate -d q="Hello" -d source=en -d target=es`؛ ويعرض البدء السريع الرد `{"translatedText":"Hola"}`.',
          },
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'اللغات والنماذج والعتاد',
        content: [
          '**افتراضيًا يثبّت الخادم الذاتي الاستضافة دعم كل اللغات المتاحة، ويحدّ `--load-only` اللغات التي تُحمَّل.** احتوت قائمة اللغات في الموقع العام على 51 رمز لغة في 19 نوفمبر 2026؛ والنماذج وراءها من Argos Translate. لم يقس PromptQuorum أحجام النماذج ولا زمن البدء ولا جودة الترجمة.',
          'لا تذكر الوثائق أي متطلب للذاكرة أو القرص أو المعالج. ويُوثَّق تسريع GPU عبر ملف Docker Compose منفصل لـ CUDA 12.4.1 وبيئة Docker من NVIDIA، لذا يعمل البدء السريع بـ pip دون GPU. قيم افتراضية تستحق المعرفة: يستمع الخادم على 127.0.0.1 فقط، ويستخدم 4 خيوط، ولا يفرض حدًّا للأحرف أو الطلبات حتى تضبطه.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**بحسب README، LibreTranslate مستضاف ذاتيًا بالكامل ويترجم بمحركه الخاص، لذا على خادمك لا يذهب النص إلا إلى حيث ترسله.** ويشير إدراج مستقل في Localhosted إلى الفرق: النص المكتوب في الموقع العام يذهب إلى الخدمة المستضافة، بينما يعالجه النشر الذاتي على خادمك. لم يفحص PromptQuorum حركة الشبكة ولا ما تجلبه الاعتماديات، لذلك هذا وصف المشروع نفسه.',
          'وبالنسبة للخدمة المستضافة، تقول [سياسة الخصوصية](https://portal.libretranslate.com/privacy.html)، المحدّثة في 23 سبتمبر 2025، إنها لا تخزّن نصوص الترجمة ولا تسجّلها، وتسجّل عناوين IP مع مفاتيح API لمدة يومين لمنع إساءة الاستخدام، وتستخدم Stripe للمدفوعات، ولا تستخدم تقنيات تتبع، وإن كان يمكن أن تحمل ملفات تعريف الارتباط بيانات مصادقة أو كشف احتيال. وتذكر عنوانًا بريديًا في سانت بطرسبرغ بولاية فلوريدا في الولايات المتحدة. هذه تصريحات المشروع، ولم يستطع PromptQuorum التحقق منها.',
          'البرنامج مجاني بترخيص AGPL-3.0، وهو يفرض التزامات إذا عدّلته وقدّمته للآخرين عبر الشبكة، لذا اقرأ نص الترخيص أولًا؛ وتنظّم [سياسة علامة تجارية](https://github.com/LibreTranslate/LibreTranslate/blob/main/TRADEMARK.md) منفصلة استخدام الاسم. أما مفاتيح API المستضافة فمدفوعة: تعرض البوابة ثلاث خطط بسعر 14 و29 و58 دولارًا أمريكيًا شهريًا، بلا مفاتيح مجانية، مع ضمان استرداد خلال 7 أيام وحدّ 2,000 حرف لكل استدعاء. وتقول أسئلتها الشائعة إنك لست مضطرًا للدفع ويمكنك استضافة خادمك الخاص، وإن كان تشغيل خادم بالأداء نفسه قد يكلّف أكثر من مفتاح.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا والقيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / تنبيه'],
        rows: [
          {
            'الميزة': 'تستضيفه بنفسك',
            'ما تعنيه في الاستخدام الفعلي': 'يمكن أن يبقى النص على خادمك.',
            'القيد / تنبيه': 'يتطلب طرفية وPython أو Docker؛ وتغطي سياسة الخصوصية الخدمة المستضافة فقط.',
          },
          {
            'الميزة': 'مجاني ومفتوح المصدر',
            'ما تعنيه في الاستخدام الفعلي': 'شيفرة AGPL-3.0 ولا رسوم لكل كلمة.',
            'القيد / تنبيه': 'النسخ المعدّلة المقدَّمة عبر الشبكة تترتب عليها التزامات AGPL.',
          },
          {
            'الميزة': 'REST API مع واجهة ويب',
            'ما تعنيه في الاستخدام الفعلي': 'خادم واحد يخدم تطبيقاتك وصفحة متصفح.',
            'القيد / تنبيه': 'أنت من يضبط مفاتيح API والحدود والواجهة.',
          },
          {
            'الميزة': 'محرك مفتوح',
            'ما تعنيه في الاستخدام الفعلي': 'نماذج Argos Translate بدلًا من Google أو Azure.',
            'القيد / تنبيه': 'لم تُختبر جودة الترجمة.',
          },
          {
            'الميزة': 'GPU اختياري',
            'ما تعنيه في الاستخدام الفعلي': 'يتوفر ملف Compose خاص بـ CUDA.',
            'القيد / تنبيه': 'لا تُنشر هنا أرقام للسرعة.',
          },
          {
            'الميزة': 'مستودع نشط',
            'ما تعنيه في الاستخدام الفعلي': 'تستمر الإيداعات حتى 14 نوفمبر 2026.',
            'القيد / تنبيه': 'آخر إصدار 1.9.6 بتاريخ 26 مايو 2026؛ وكثير من الإيداعات الأخيرة ترجمات للواجهة.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LibreTranslate مقابل البدائل',
        content: [
          'هذه أقرب أدوات الترجمة في الدليل: المحرك الذي يقوم عليه LibreTranslate، ومسار لترجمة الكتب، وتطبيق iPhone.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'الدور', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'LibreTranslate',
            'المنصات': 'Mac وWindows وLinux، ذاتي الاستضافة',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'الدور': 'خادم ترجمة وAPI',
            'الفرق الرئيسي': 'واجهة ويب وREST API على خادمك',
          },
          {
            'التطبيق': '[Argos Translate](/ar/power-local-llm/argos-translate-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، MIT',
            'الدور': 'مكتبة ترجمة دون اتصال',
            'الفرق الرئيسي': 'محركه؛ Python وسطر الأوامر فقط',
          },
          {
            'التطبيق': '[TranslateBooksWithLLMs](/ar/power-local-llm/translate-books-with-llms-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'الدور': 'ترجمة الكتب والمستندات',
            'الفرق الرئيسي': 'نموذج لغوي محلي أو سحابي لا محرك ترجمة',
          },
          {
            'التطبيق': '[On-Device AI Translator](/ar/power-local-llm/on-device-ai-translator-review)',
            'المنصات': 'iPhone',
            'السعر والترخيص': 'مجاني جزئيًا، مغلق المصدر',
            'الدور': 'تطبيق ترجمة للهاتف',
            'الفرق الرئيسي': 'يشغّل نماذج لغوية على الجهاز؛ تطبيق لا خادم',
          },
        ],
        note: 'تتغير تفاصيل المنصات والأسعار والميزات في تطبيقات الجهات الأخرى كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من ينبغي أن يستخدم LibreTranslate',
        items: [
          '**المطورون.** تناسب REST API السكربتات والتطبيقات ومسارات العمل التي تحتاج ترجمة تحت سيطرتك.',
          '**الفرق التي تُبقي النص داخليًا.** يعالج الخادم الذاتي الاستضافة النص على جهازك، بحسب README.',
          '**مستخدمو المصادر المفتوحة.** شيفرة AGPL-3.0 علنية والبرنامج بلا تكلفة.',
          '**مستخدمو homelab وDocker.** مسارات Docker وCompose وHelm موثقة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا ينبغي أن يستخدم LibreTranslate',
        items: [
          '**من يريد تطبيقًا بنقرتين.** لا يوجد مثبّت؛ ويستخدم الإعداد pip أو Docker.',
          '**القراء الذين يحتاجون جودة مثبتة.** لم يختبر PromptQuorum الدقة ولا السرعة.',
          '**من يريد واجهة API مستضافة مجانية.** تقدّم البوابة خططًا مدفوعة ولا مفاتيح مجانية.',
          '**مستخدمو الهواتف.** انظر إلى On-Device AI Translator لـ iPhone بدلًا من ذلك.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل LibreTranslate دون اتصال؟',
            a: 'يصفه README بأنه مستضاف ذاتيًا بالكامل ويقول الموقع إنه قادر على العمل دون اتصال، لذا يترجم الخادم الذي تشغّله بالنماذج المثبتة. يحتاج التثبيت إلى الشبكة، ولم يختبره PromptQuorum وهو مقطوع الاتصال.',
          },
          {
            q: 'هل LibreTranslate هو نفسه Argos Translate؟',
            a: 'لا. Argos Translate هو مكتبة الترجمة المفتوحة المصدر التي تشغّل محرك LibreTranslate؛ ويضيف LibreTranslate واجهة الويب وREST API والحدود. وكلٌّ منهما مشروع مستقل.',
          },
          {
            q: 'هل أحتاج إلى مفتاح API؟',
            a: 'ليس لخادم تشغّله بنفسك: التحقق من المفاتيح معطّل افتراضيًا ويمكن تفعيله بـ `--api-keys`. أما واجهة API المستضافة على بوابة المشروع فتتطلب مفتاحًا مدفوعًا.',
          },
          {
            q: 'هل يترجم الملفات ويكشف اللغات؟',
            a: 'يسرد مرجع API النقطتين `/translate_file` و`/detect`، وضبط المصدر على `auto` يكشف اللغة. ولا تذكر صفحة الوثائق التي قرأها PromptQuorum صيغ الملفات المدعومة.',
          },
          {
            q: 'هل يحتاج إلى GPU؟',
            a: 'لا يُذكر أي متطلب. ويُوثَّق استخدام GPU عبر ملف Docker Compose منفصل لـ CUDA 12.4.1؛ ولا يذكر البدء السريع بـ pip أي GPU.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يناسب LibreTranslate من يريد استضافة خادم ترجمة مجاني ومفتوح المصدر بنفسه، بواجهة ويب للأشخاص وREST API للبرمجيات. له ترخيص AGPL-3.0 وحزمة على PyPI (1.9.6 من مايو 2026) ومسارات Docker وCompose وHelm ومستودع كان لا يزال يتلقى تعديلات في نوفمبر 2026.',
          'التحفظات تتعلق بالنطاق والتحقق: لا مثبّت، ولا متطلبات عتادية معلنة، وآخر إصدار من مايو 2026، وادعاءات عن الجودة والخصوصية لم يستطع PromptQuorum التحقق منها. وخطط API المستضافة منفصلة ومدفوعة. جرّب زوج لغات واحدًا على نص صغير قبل أن تبني عليه أي شيء.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع LibreTranslate](https://libretranslate.com) — نظرة عامة على المنتج وقائمة اللغات وواجهة الويب.',
          '[الوثائق](https://docs.libretranslate.com) — البدء السريع والتثبيت والمعاملات واستخدام API.',
          '[مستودع GitHub](https://github.com/LibreTranslate/LibreTranslate) — README وترخيص AGPL-3.0 وسياسة العلامة التجارية وسجل الإيداعات.',
          '[صفحة المشروع على PyPI](https://pypi.org/project/libretranslate/) — الإصدار 1.9.6 وتاريخ الصدور.',
          '[بوابة API](https://portal.libretranslate.com) — الخطط المستضافة والأسعار والأسئلة الشائعة.',
          '[سياسة خصوصية الخدمة المستضافة](https://portal.libretranslate.com/privacy.html) — التعامل مع البيانات والعنوان البريدي، محدّثة في 23 سبتمبر 2025.',
          '[إدراج Localhosted](https://localhosted.com/libretranslate) — إدراج مستقل لم يطالب به المشروع.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Argos Translate](/ar/power-local-llm/argos-translate-review) — مكتبة الترجمة المفتوحة المصدر دون اتصال التي تقف وراء محرك LibreTranslate.',
          '[مراجعة TranslateBooksWithLLMs](/ar/power-local-llm/translate-books-with-llms-review) — ترجمة كتب كاملة بنموذج محلي أو سحابي.',
          '[مراجعة On-Device AI Translator](/ar/power-local-llm/on-device-ai-translator-review) — ترجمة دون اتصال بنماذج لغوية على iPhone.',
          '[الدليل الكامل لبرمجيات النماذج اللغوية المحلية](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلية عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-19',
    dateModified: '2026-11-19',
    next_refresh_due: '2027-05-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/libretranslate-review-hero-ko.webp',
    title: 'LibreTranslate 리뷰: 직접 호스팅하는 무료 번역 API와 웹 인터페이스',
    seoTitle: 'LibreTranslate 리뷰: 무료 셀프 호스팅 번역기',
    intro: 'LibreTranslate는 무료 오픈소스(AGPL-3.0) 기계 번역 서버입니다. pip나 Docker로 설치하면 내 컴퓨터에서 웹 인터페이스와 REST API를 제공하고, 번역 엔진은 Argos Translate 라이브러리입니다. 즉 Google이나 Azure가 아니라 직접 내려받은 모델이 텍스트를 번역합니다. 이 프로젝트는 [libretranslate.com](https://libretranslate.com)에서 유료 호스팅 API도 운영합니다. 이 리뷰는 공식 사이트, 문서, PyPI 페이지, GitHub 저장소, 호스팅 서비스의 개인정보처리방침이 말하는 내용과 설치 과정, 디렉터리의 다른 번역 도구와의 비교를 정리합니다.',
    metaDescription: 'LibreTranslate 리뷰: Argos Translate 기반, 직접 호스팅하는 무료 AGPL-3.0 번역 API와 웹 UI. 직접 테스트하지 않음.',
    twitterDescription: 'LibreTranslate 리뷰: 웹 인터페이스와 REST API를 갖춘 무료 오픈소스 번역 서버. 설치, 개인정보, 호스팅 요금제, 한계, 대안.',
    audience: '클라우드 번역 서비스 대신 무료 오픈소스 번역 서버를 직접 호스팅하려는 개발자와 팀을 위한 글입니다. 설치, 언어, 개인정보, 호스팅 요금제, 유지보수, 한계, 대안을 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LibreTranslate review',
    targetKeywords: [
      'libretranslate 리뷰',
      'libretranslate 셀프 호스팅',
      'libretranslate docker',
      'libretranslate api',
      '셀프 호스팅 번역 api',
      '오픈소스 번역 서버',
      'libretranslate argos translate 차이',
    ],
    current_hardware_mentioned: [
      'Mac',
      'Windows PC',
      'Linux',
    ],
    leadAnswerBlock: '**LibreTranslate는 웹 인터페이스와 REST API를 갖춘 무료 오픈소스(AGPL-3.0) 번역 서버로, README에 따르면 완전히 셀프 호스팅이며 Google이나 Azure 같은 독점 서비스 대신 Argos Translate 엔진을 사용합니다.** 최신 릴리스는 2026년 5월 26일의 1.9.6 버전이고, 저장소는 2026년 11월 14일에 마지막으로 변경되었습니다. 이 리뷰는 프로젝트의 공식 사이트, 문서, PyPI 페이지, GitHub 저장소, 호스팅 서비스의 개인정보처리방침에 근거하며 직접 테스트한 결과가 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'LibreTranslate는 로컬 번역 도구입니까?',
        answer: '직접 호스팅하면 그렇습니다. README는 완전한 셀프 호스팅이라고 설명하고, 문서도 내 컴퓨터에서 Argos Translate 모델로 실행하므로 텍스트가 내 서버에 머뭅니다. 반면 공개 사이트와 유료 API는 프로젝트의 호스팅 서비스이며 텍스트가 해당 서비스로 전송됩니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았고 둘 중 어느 쪽도 테스트하지 않았으므로, 이는 프로젝트 자체의 설명입니다.',
        bullets: [
          '데스크톱 앱이 아니라 서버입니다. `pip install libretranslate` 또는 Docker로 설치해 실행한 뒤 `http://localhost:5000`을 엽니다.',
          'REST API는 번역, 언어 감지, 파일 번역, 언어 목록을 제공합니다. 키 검사를 켜지 않으면 API 키가 필요 없습니다.',
          '언어는 시작할 때 불러오는 모델이며 기본값은 사용 가능한 전부입니다. `--load-only`로 줄일 수 있습니다.',
          '호스팅 API는 별도의 유료 서비스이며 무료 키는 없습니다.',
          '마지막 릴리스는 2026년 5월이고 문서에는 하드웨어 요구 사항이 없습니다.',
        ],
        updatedDate: '2026-11-19',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'LibreTranslate 받기', anchor: 'get-it' },
      { label: 'LibreTranslate 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'LibreTranslate란', anchor: 'what-is-libretranslate' },
      { label: '시작하기', anchor: 'how-to-get-started' },
      { label: '언어, 모델, 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보, 라이선스, 비용', anchor: 'privacy' },
      { label: '장단점', anchor: 'tradeoffs' },
      { label: 'LibreTranslate와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'LibreTranslate가 적합한 사람', anchor: 'who-should-use' },
      { label: 'LibreTranslate가 맞지 않는 사람', anchor: 'who-should-not-use' },
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
            text: 'LibreTranslate는 웹 인터페이스와 REST API를 갖춘 무료 오픈소스 번역 서버로, README에 따르면 직접 호스팅하며 오픈소스 Argos Translate 엔진으로 번역합니다.',
          },
          {
            type: 'plain-terms',
            text: '내 컴퓨터나 서버에서 작은 번역 웹사이트를 직접 운영한다고 생각하면 됩니다. 한 번 설치하고 언어 모델을 불러오면, 앱이나 브라우저가 온라인 서비스 대신 그곳으로 텍스트를 보냅니다.',
          },
        ],
        items: [
          '로컬 관련 설명: 셀프 호스팅 설치는 내 서버에서 Argos Translate 모델로 번역합니다. 설치에는 인터넷이 필요하고, 모델을 처음 내려받는 시점은 문서에 나와 있지 않습니다.',
          `라이선스와 프로젝트: AGPL-3.0이며 LibreTranslate Contributors가 GitHub에 코드를 공개했고 별은 ${ST.ko('libretranslate')}개입니다.`,
          '설치: pip 명령 하나 또는 Docker 스크립트 후 브라우저에서 5000번 포트를 엽니다. 더블클릭 앱이 아니라 터미널 도구입니다.',
          '유지보수: 1.9.6 버전은 2026년 5월 26일자이고 저장소는 2026년 11월 14일에 마지막으로 변경되었습니다(번역 업데이트이며, 가장 최근의 코드 변경은 2026년 10월 26일).',
          '공백: 하드웨어 요구 사항 언급이 없고, 설치 프로그램이 없으며, 이 리뷰에는 번역 품질 벤치마크가 없습니다.',
        ],
      },
      getItLibreTranslate: {
        id: 'get-it',
        title: 'LibreTranslate 받기',
        content: [
          '**LibreTranslate에는 설치 프로그램이 없고 Python 패키지나 Docker로 실행하므로 터미널이 필요합니다.** 빠른 시작은 `pip install libretranslate`를 실행한 뒤 `libretranslate`를 실행하는 것이며, 웹 인터페이스가 `http://localhost:5000`에서 제공됩니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Python 패키지(pip)',
            '받는 곳': '`pip install libretranslate` 후 `libretranslate` 실행 — [PyPI 페이지](https://pypi.org/project/libretranslate/) 참조',
          },
          {
            '플랫폼': 'Docker',
            '받는 곳': '저장소를 클론한 뒤 `./run.sh`(Linux, macOS) 또는 `run.bat`(Windows) 실행',
          },
          {
            '플랫폼': 'NVIDIA GPU용 Docker',
            '받는 곳': '`docker compose -f docker-compose.cuda.yml up -d --build` (CUDA 12.4.1)',
          },
          {
            '플랫폼': 'Gunicorn과 Kubernetes',
            '받는 곳': 'Gunicorn 명령과 Helm 차트는 [설치 가이드](https://docs.libretranslate.com/guides/installation/)에 있음',
          },
          {
            '플랫폼': '문서',
            '받는 곳': '[docs.libretranslate.com](https://docs.libretranslate.com)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[libretranslate.com](https://libretranslate.com) — 호스팅 웹 인터페이스이기도 함(텍스트는 해당 서비스로 전송)',
          },
          {
            '플랫폼': '호스팅 API 키',
            '받는 곳': '[portal.libretranslate.com](https://portal.libretranslate.com) — 유료 요금제',
          },
          {
            '플랫폼': '개인정보처리방침',
            '받는 곳': '[호스팅 서비스 개인정보처리방침](https://portal.libretranslate.com/privacy.html)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) — AGPL-3.0',
          },
        ],
        note: '현재 버전은 **1.9.6**이며 2026년 5월 26일에 릴리스되었습니다. 저장소의 가장 최근 푸시는 2026년 11월 14일입니다(2026년 11월 19일 확인, [GitHub 릴리스](https://github.com/LibreTranslate/LibreTranslate/releases)). 터미널과 Python 또는 Docker가 필요합니다. PromptQuorum은 .dmg, .exe, 스토어 등록 정보, 릴리스 자산을 찾지 못했습니다. 개인정보처리방침은 호스팅 서비스에 관한 것이며 내 서버에는 적용되지 않습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'LibreTranslate 한눈에 보기',
        columns: ['항목', 'LibreTranslate'],
        rows: [
          {
            '항목': '플랫폼',
            LibreTranslate: 'macOS, Windows, Linux에서 Python 또는 Docker. Kubernetes용 Helm 차트',
          },
          {
            '항목': '가격',
            LibreTranslate: '소프트웨어는 무료, 호스팅 API는 유료',
          },
          {
            '항목': '라이선스',
            LibreTranslate: 'AGPL-3.0, 오픈소스',
          },
          {
            '항목': '실행 위치',
            LibreTranslate: '내 서버에서 Argos Translate 모델 사용. 호스팅 서비스도 별도로 존재',
          },
          {
            '항목': '인터페이스',
            LibreTranslate: '웹 인터페이스, REST API, 명령줄',
          },
          {
            '항목': '언어',
            LibreTranslate: '불러온 모델에 따름. 공개 사이트에는 언어 코드 51개가 표시됨',
          },
          {
            '항목': '최근 업데이트',
            LibreTranslate: '2026년 5월 26일 1.9.6 릴리스, 저장소는 2026년 11월 14일 변경',
          },
          {
            '항목': '로컬 API 서버',
            LibreTranslate: '예: REST API가 제품 자체',
          },
          {
            '항목': 'GPU',
            LibreTranslate: '선택 사항, CUDA용 Docker Compose 파일 사용',
          },
        ],
        note: '언어 수는 2026년 11월 19일에 읽은 공개 사이트의 언어 목록 기준이며 모델이 추가되면 달라집니다. 셀프 호스팅 서버는 불러온 언어를 제공합니다. 언급이 없는 항목은 지원 안 함이 아니라 알 수 없음을 뜻합니다.',
      },
      whatIsLibreTranslate: {
        id: 'what-is-libretranslate',
        title: 'LibreTranslate란',
        content: [
          '**LibreTranslate는 직접 운영하는 번역 서비스이며, 자체 번역 모델이 아닙니다.** README는 이를 완전히 셀프 호스팅하는 무료 오픈소스 기계 번역 API로 설명하며, 다른 API와 달리 Google이나 Azure 같은 독점 소프트웨어에 의존하지 않는다고 밝힙니다. 엔진은 오픈소스 [Argos Translate](https://github.com/argosopentech/argos-translate) 라이브러리이며, 이는 [Argos Translate 리뷰](/ko/power-local-llm/argos-translate-review)에서 따로 다룹니다. LibreTranslate는 그 위에 웹 인터페이스, REST API, 요청 제한을 더합니다.',
          'API 문서에는 번역, 언어 감지, 파일 번역, 언어 목록, 제안, 상태 점검용 엔드포인트가 나와 있습니다. 원본 언어를 `auto`로 두면 언어를 감지하고, `format`을 `html`로 두면 마크업을 유지하며, `alternatives`는 추가 후보를 돌려줍니다. 선택 설정으로는 글자 수 제한, 클라이언트별 요청 제한, API 키, 웹 인터페이스를 끄는 스위치, 번역 캐시가 있습니다.',
          '이 프로젝트는 커뮤니티가 만듭니다. 웹사이트에는 LibreTranslate Contributors가 표기되어 있고 인터페이스는 Weblate로 번역됩니다. 같은 이름이 프로젝트 자체 사이트에서 운영하는 유료 호스팅 API에도 쓰입니다. 독립 디렉터리 [Localhosted](https://localhosted.com/libretranslate)의 등록 정보는 프로젝트가 인수하지 않았습니다. 이 리뷰는 문서화된 자료만 바탕으로 했고 직접 테스트하지 않았으므로 번역 품질과 속도는 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하기',
        content: [
          '**설정은 pip 설치, 서버를 시작하는 명령 하나, 브라우저 탭 하나로 이뤄집니다.** 단계는 문서의 빠른 시작을 따릅니다.',
        ],
        numberedItems: [
          {
            title: '패키지 설치',
            whyItMatters: 'Python 3.8 이상 환경에서 `pip install libretranslate`를 실행합니다.',
          },
          {
            title: '서버 시작',
            whyItMatters: '`libretranslate`를 실행합니다. 기본적으로 127.0.0.1의 5000번 포트에서 대기합니다. `--load-only en,es,fr`를 붙이면 불러오는 언어가 줄어 더 빨리 시작합니다.',
          },
          {
            title: '웹 인터페이스 열기',
            whyItMatters: '브라우저에서 `http://localhost:5000`에 접속해 텍스트나 파일을 번역합니다.',
          },
          {
            title: 'API 호출',
            whyItMatters: '`curl -X POST http://localhost:5000/translate -d q="Hello" -d source=en -d target=es`를 보냅니다. 빠른 시작에는 응답으로 `{"translatedText":"Hola"}`가 나와 있습니다.',
          },
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: '언어, 모델, 하드웨어',
        content: [
          '**기본적으로 셀프 호스팅 서버는 사용 가능한 모든 언어의 지원을 설치하며, `--load-only`로 불러올 언어를 제한할 수 있습니다.** 공개 사이트의 언어 목록에는 2026년 11월 19일 기준 언어 코드가 51개 있었고, 그 뒤의 모델은 Argos Translate에서 옵니다. PromptQuorum은 모델 크기, 시작 시간, 번역 품질을 측정하지 않았습니다.',
          '문서에는 RAM, 디스크, CPU 요구 사항이 없습니다. GPU 가속은 CUDA 12.4.1과 NVIDIA Docker 런타임용 별도 Docker Compose 파일로 설명되어 있어, pip 빠른 시작은 GPU 없이 실행됩니다. 알아 둘 기본값: 서버는 127.0.0.1에서만 대기하고, 스레드 4개를 사용하며, 설정하기 전에는 글자 수나 요청 수 제한이 없습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보, 라이선스, 비용',
        content: [
          '**README에 따르면 LibreTranslate는 완전히 셀프 호스팅이며 자체 엔진으로 번역하므로, 내 서버에서는 텍스트가 내가 보낸 곳으로만 갑니다.** 독립 등록 정보인 Localhosted는 그 차이를 짚습니다. 공개 웹사이트에 입력한 텍스트는 호스팅 서비스로 가고, 셀프 호스팅 배포는 내 서버에서 처리합니다. PromptQuorum은 네트워크 트래픽이나 의존성이 가져오는 내용을 검사하지 않았으므로 이는 프로젝트 자체의 설명입니다.',
          '호스팅 서비스에 대해 [개인정보처리방침](https://portal.libretranslate.com/privacy.html)(2025년 9월 23일 갱신)은 번역 텍스트를 저장하거나 기록하지 않고, 악용을 막기 위해 IP 주소를 API 키와 함께 2일간 기록하며, 결제에 Stripe를 쓰고, 추적 기술을 쓰지 않는다고 밝힙니다. 다만 쿠키에 인증이나 사기 탐지 데이터가 담길 수 있습니다. 미국 플로리다주 세인트피터즈버그의 우편 주소도 제시합니다. 이는 프로젝트의 진술이며 PromptQuorum은 검증하지 못했습니다.',
          '소프트웨어는 AGPL-3.0에 따라 무료이며, 수정해서 네트워크로 다른 사람에게 제공하면 의무가 따르므로 먼저 라이선스 전문을 읽어야 합니다. 이름 사용은 별도의 [상표 정책](https://github.com/LibreTranslate/LibreTranslate/blob/main/TRADEMARK.md)이 규정합니다. 호스팅 API 키는 유료입니다. 포털에는 월 14달러, 29달러, 58달러의 세 요금제, 무료 키 없음, 7일 환불 보장, 호출당 2,000자 제한이 나와 있습니다. 포털 FAQ는 돈을 낼 필요 없이 직접 서버를 호스팅할 수 있다고 하면서도, 같은 성능의 서버를 운영하는 비용이 키 하나보다 클 수 있다고 말합니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의'],
        rows: [
          {
            '장점': '직접 호스팅',
            '실제 사용에서의 의미': '텍스트가 내 서버에 머물 수 있음.',
            '한계 / 주의': '터미널과 Python 또는 Docker 필요. 개인정보처리방침은 호스팅 서비스만 다룸.',
          },
          {
            '장점': '무료 오픈소스',
            '실제 사용에서의 의미': 'AGPL-3.0 코드, 단어당 요금 없음.',
            '한계 / 주의': '수정본을 네트워크로 제공하면 AGPL 의무가 따름.',
          },
          {
            '장점': 'REST API와 웹 인터페이스',
            '실제 사용에서의 의미': '서버 한 대가 앱과 브라우저 페이지를 함께 처리.',
            '한계 / 주의': 'API 키, 제한, 인터페이스는 직접 설정.',
          },
          {
            '장점': '개방형 엔진',
            '실제 사용에서의 의미': 'Google이나 Azure 대신 Argos Translate 모델 사용.',
            '한계 / 주의': '번역 품질은 테스트하지 않음.',
          },
          {
            '장점': '선택적 GPU',
            '실제 사용에서의 의미': 'CUDA용 Compose 파일 제공.',
            '한계 / 주의': '여기서는 속도 수치를 게시하지 않음.',
          },
          {
            '장점': '활발한 저장소',
            '실제 사용에서의 의미': '2026년 11월 14일까지 커밋이 이어짐.',
            '한계 / 주의': '최신 릴리스 1.9.6은 2026년 5월 26일자. 최근 커밋 중 다수는 인터페이스 번역.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'LibreTranslate와 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 번역 도구는 LibreTranslate가 기반으로 삼는 엔진, 책 번역 파이프라인, iPhone 앱입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'LibreTranslate',
            '플랫폼': 'Mac, Windows, Linux, 셀프 호스팅',
            '가격과 라이선스': '무료, AGPL-3.0',
            '역할': '번역 서버와 API',
            '주요 차이': '내 서버에서 웹 UI와 REST API 제공',
          },
          {
            '앱': '[Argos Translate](/ko/power-local-llm/argos-translate-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, MIT',
            '역할': '오프라인 번역 라이브러리',
            '주요 차이': '그 엔진. Python과 명령줄만 지원',
          },
          {
            '앱': '[TranslateBooksWithLLMs](/ko/power-local-llm/translate-books-with-llms-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격과 라이선스': '무료, AGPL-3.0',
            '역할': '책과 문서 번역',
            '주요 차이': '번역 엔진이 아닌 로컬/클라우드 언어 모델',
          },
          {
            '앱': '[On-Device AI Translator](/ko/power-local-llm/on-device-ai-translator-review)',
            '플랫폼': 'iPhone',
            '가격과 라이선스': '프리미엄, 비공개 소스',
            '역할': '휴대폰 번역 앱',
            '주요 차이': '기기에서 언어 모델 실행. 서버가 아닌 앱',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능 세부 사항은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'LibreTranslate가 적합한 사람',
        items: [
          '**개발자.** REST API는 직접 통제하는 번역이 필요한 스크립트, 앱, 파이프라인에 적합합니다.',
          '**텍스트를 사내에 두려는 팀.** README에 따르면 셀프 호스팅 서버는 내 컴퓨터에서 텍스트를 처리합니다.',
          '**오픈소스 사용자.** AGPL-3.0 코드는 공개되어 있고 소프트웨어는 무료입니다.',
          '**홈랩과 Docker 사용자.** Docker, Compose, Helm 경로가 문서화되어 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'LibreTranslate가 맞지 않는 사람',
        items: [
          '**더블클릭 앱을 원하는 사람.** 설치 프로그램이 없고, 설정에는 pip 또는 Docker를 씁니다.',
          '**검증된 품질이 필요한 독자.** PromptQuorum은 정확도와 속도를 테스트하지 않았습니다.',
          '**무료 호스팅 API를 원하는 사람.** 포털에는 유료 요금제만 있고 무료 키는 없습니다.',
          '**휴대폰 사용자.** 대신 iPhone용 On-Device AI Translator를 살펴보십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'LibreTranslate는 오프라인에서 작동합니까?',
            a: 'README는 완전한 셀프 호스팅이라고 설명하고 웹사이트는 오프라인 사용이 가능하다고 하므로, 직접 운영하는 서버는 설치된 모델로 번역합니다. 설치에는 네트워크가 필요하며 PromptQuorum은 연결을 끊은 상태에서 테스트하지 않았습니다.',
          },
          {
            q: 'LibreTranslate는 Argos Translate와 같은 것입니까?',
            a: '아닙니다. Argos Translate는 LibreTranslate의 엔진을 구동하는 오픈소스 번역 라이브러리이고, LibreTranslate는 웹 인터페이스, REST API, 제한 기능을 더합니다. 각각 별도의 프로젝트입니다.',
          },
          {
            q: 'API 키가 필요합니까?',
            a: '직접 운영하는 서버에는 필요 없습니다. 키 검사는 기본적으로 꺼져 있으며 `--api-keys`로 켤 수 있습니다. 프로젝트 포털의 호스팅 API에는 유료 키가 필요합니다.',
          },
          {
            q: '파일을 번역하고 언어를 감지할 수 있습니까?',
            a: 'API 레퍼런스에는 `/translate_file`과 `/detect`가 있고, 원본을 `auto`로 설정하면 언어를 감지합니다. PromptQuorum이 읽은 문서 페이지에는 지원하는 파일 형식이 나와 있지 않습니다.',
          },
          {
            q: 'GPU가 필요합니까?',
            a: '요구 사항은 나와 있지 않습니다. GPU 사용은 CUDA 12.4.1용 별도 Docker Compose 파일로 설명되어 있으며, pip 빠른 시작에는 GPU 언급이 없습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '사람을 위한 웹 인터페이스와 소프트웨어를 위한 REST API를 갖춘 무료 오픈소스 번역 서버를 직접 호스팅하고 싶다면 LibreTranslate가 적합합니다. AGPL-3.0 라이선스, PyPI 패키지(2026년 5월의 1.9.6), Docker, Compose, Helm 경로가 있고, 저장소는 2026년 11월에도 변경이 이어지고 있었습니다.',
          '주의할 점은 범위와 검증입니다. 설치 프로그램이 없고, 하드웨어 요구 사항이 없으며, 마지막 릴리스는 2026년 5월이고, 품질과 개인정보에 관한 주장은 PromptQuorum이 확인하지 못했습니다. 호스팅 API 요금제는 별도의 유료입니다. 무언가를 구축하기 전에 작은 텍스트로 언어 쌍 하나를 먼저 시험해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[LibreTranslate 웹사이트](https://libretranslate.com) — 제품 개요, 언어 목록, 웹 인터페이스.',
          '[문서](https://docs.libretranslate.com) — 빠른 시작, 설치, 인수, API 사용법.',
          '[GitHub 저장소](https://github.com/LibreTranslate/LibreTranslate) — README, AGPL-3.0 라이선스, 상표 정책, 커밋 기록.',
          '[PyPI 프로젝트 페이지](https://pypi.org/project/libretranslate/) — 1.9.6 버전과 릴리스 날짜.',
          '[API 포털](https://portal.libretranslate.com) — 호스팅 요금제, 가격, FAQ.',
          '[호스팅 서비스 개인정보처리방침](https://portal.libretranslate.com/privacy.html) — 데이터 처리와 우편 주소, 2025년 9월 23일 갱신.',
          '[Localhosted 등록 정보](https://localhosted.com/libretranslate) — 프로젝트가 인수하지 않은 독립 등록 정보.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Argos Translate 리뷰](/ko/power-local-llm/argos-translate-review) — LibreTranslate 엔진 뒤의 오픈소스 오프라인 번역 라이브러리.',
          '[TranslateBooksWithLLMs 리뷰](/ko/power-local-llm/translate-books-with-llms-review) — 로컬 또는 클라우드 모델로 책 전체를 번역.',
          '[On-Device AI Translator 리뷰](/ko/power-local-llm/on-device-ai-translator-review) — iPhone용 오프라인 언어 모델 번역.',
          '[로컬 LLM 소프트웨어 종합 디렉터리](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 아우르는 더 넓은 디렉터리.',
        ],
      },
    },
  },
}

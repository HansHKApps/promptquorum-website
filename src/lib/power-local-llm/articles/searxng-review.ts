// SearXNG Review: Self-Hosted Search Backend for Local LLMs
// Slug: searxng-review
// Companion to: vane-review, farfalle-review, local-deep-research-review, web-search-mcp-review
// Sources: docs.searxng.org (front page, user/about, admin/installation-docker, dev/search_api), the GitHub repo searxng/searxng
// (GitHub API licence/push date, searx/settings.yml, container/docker-compose.yml, CHANGELOG.rst), Docker Hub searxng/searxng tags and the
// Open WebUI SearXNG guide, all checked 2026-10-24 — no hands-on testing. SearXNG is not an AI app: it is the search backend that LLM
// front ends call. Rolling release: the version is the newest dated container tag.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'RAG & Document Chat',
    heroImage: '/images/searxng-review-hero-en.webp',
    title: 'SearXNG Review: Self-Hosted Search Backend for Local LLMs',
    seoTitle: 'SearXNG Review: Self-Hosted Search Backend for Local LLMs',
    intro: 'SearXNG is a free, open-source metasearch engine that you run yourself, and local LLM front ends such as Open WebUI can call it as their web-search backend. This review covers it in that role only: it is not an AI app and contains no language model. It is based on the project documentation, the GitHub repository and the Docker Hub tag list, checked on 24 October 2026; PromptQuorum has not run it hands-on.',
    metaDescription: 'SearXNG review: self-hosted privacy metasearch engine that local LLM front ends such as Open WebUI use for web search. AGPL-3.0, Docker setup; untested.',
    twitterDescription: 'SearXNG review: the self-hosted search backend behind many local LLM web-search setups, and what the docs confirm about privacy, setup and the JSON switch.',
    audience: 'Local LLM users who want web search in Open WebUI or a similar front end through a service they host, and need to know what SearXNG does and does not guarantee.',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'SearXNG review',
    targetKeywords: [
      'searxng review',
      'searxng local llm web search',
      'searxng open webui',
      'self-hosted metasearch engine',
      'private web search for local llm',
      'searxng docker setup',
      'searxng json api',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**SearXNG (build 2026.10.24-ef0ec03da, updated on 24 October 2026) is a self-hosted metasearch engine that a local LLM front end can query for live web results.** It is free under the AGPL-3.0 licence, contains no AI model of its own and runs as a container. Every statement here comes from the project\'s documentation, its repository and its Docker Hub tags.',
    quickAnswerTop: {
      en: {
        question: 'Does SearXNG make web search for a local LLM private?',
        answer: 'Partly. Per the project, it does not track or profile its users and never shares anything with a third party, and on your own machine no outside operator sees your queries. Each query is still forwarded to the upstream search engines it aggregates, so those engines still receive it.',
        bullets: [
          'It returns results as JSON for a front end to hand to a model, and also has a browser interface.',
          'It aggregates up to 261 search services.',
          'The JSON format is off by default and must be enabled by hand.',
          'It runs as a Docker or Podman container; no desktop installer exists.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is SearXNG?',
        anchor: 'what-is-searxng',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'How to Get Started',
        anchor: 'getting-started',
      },
      {
        label: 'Data Flow and Privacy',
        anchor: 'privacy',
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use',
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Frequently Asked Questions',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SearXNG is an open-source metasearch engine that you host yourself and that local LLM front ends can use as a web-search backend.',
          },
          {
            type: 'plain-terms',
            text: 'It asks many search engines for results on your behalf and hands them back as a web page or as JSON, so your local model can read live web results through a service you host.',
          },
        ],
        items: [
          'Maintenance: a rolling release whose commits and container builds are as recent as 24 October 2026; the repository has no GitHub releases, so no stale-project warning applies.',
          'Licence and cost: AGPL-3.0, free.',
          'Role: not an AI app. It supplies search results; the model and the chat interface come from other software.',
          'Setup: Docker or Podman plus edits to a YAML settings file, so a terminal is required.',
          'Maker: a community project that began in mid-2021 as a fork of searx.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the documentation, the repository and the container tags, checked on 24 October 2026. PromptQuorum has not installed SearXNG or measured result quality, so the privacy statements are the project\'s own.',
          },
        ],
      },
      overview: {
        id: 'what-is-searxng',
        title: 'What Is SearXNG?',
        content: [
          '**SearXNG is a free metasearch engine: it sends your query to many search services at once and merges the answers into one result list.** The documentation describes it as search without being tracked, lists about 70 public instances on [searx.space](https://searx.space) and says it began in mid-2021 as a fork of the searx project.',
          'For local AI its value is the search API: a front end requests `/search?q=...&format=json` and gets structured results it can pass to a model. The software contains no model and no answer generation, which is why answer engines such as Vane and Farfalle, which can use it as their search step, add the model on top.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**SearXNG is distributed as a container image and as install scripts; there is no desktop installer, so a terminal is required.**',
        ],
        columns: [
          'Option',
          'How to get it',
        ],
        rows: [
          {
            Option: 'Container image',
            'How to get it': '[searxng/searxng on Docker Hub](https://hub.docker.com/r/searxng/searxng), mirror `ghcr.io/searxng/searxng`',
          },
          {
            Option: 'Docker Compose (recommended)',
            'How to get it': '[Container installation guide](https://docs.searxng.org/admin/installation-docker.html): `docker compose up -d`',
          },
          {
            Option: 'Website',
            'How to get it': '[docs.searxng.org](https://docs.searxng.org)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': '[About page with the privacy statements](https://docs.searxng.org/user/about.html); no separate policy document found',
          },
          {
            Option: 'Source code',
            'How to get it': '[github.com/searxng/searxng](https://github.com/searxng/searxng), AGPL-3.0',
          },
          {
            Option: 'Public instances',
            'How to get it': '[searx.space](https://searx.space) lists them; many disable the JSON format',
          },
        ],
        note: 'Version reviewed: 2026.10.24-ef0ec03da, the newest Docker Hub tag on 24 October 2026. SearXNG is a rolling release whose version number is based on the git commit, and the repository has no GitHub releases. The documentation lists no hardware requirement and no host operating systems.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow the project\'s container guide and the Open WebUI documentation for SearXNG; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Start the container',
            whyItMatters: 'Download the compose file and `.env.example` from the repository, copy the second to `.env` and run `docker compose up -d`; the stack also starts a Valkey database and uses port 8080 by default.',
          },
          {
            title: 'Enable the JSON format',
            whyItMatters: 'The default `search.formats` list in `settings.yml` contains only `html`; add `json` and restart. A request for a format that is not enabled returns 403 Forbidden.',
          },
          {
            title: 'Test the API',
            whyItMatters: 'Request `/search?q=searxng&format=json` on your instance, for example with curl, and check that structured results come back.',
          },
          {
            title: 'Connect the front end',
            whyItMatters: 'In Open WebUI, set the web-search engine to searxng and the query URL to your instance\'s `/search` address. That guide is a community contribution that the Open WebUI team does not officially support, and it notes that web search must be switched on per chat.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The documentation says SearXNG does not store information about its users, does not generate a profile and never shares anything with a third party.** Those are the project\'s statements; the About page does not describe what an instance operator can see, and its answer for readers who care is to run the software yourself.',
          'On a self-hosted instance the operator is you, so the open question is the outbound side: the About page says queries are mixed with searches on other platforms, meaning the upstream engines still receive them. The default settings file also names DuckDuckGo as the autocomplete backend; leaving that setting blank turns it off.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s declarations, not audit results. PromptQuorum has not inspected network traffic or logs, and which queries leave your machine depends on the engines you enable.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Open WebUI and similar front-end users** who want web search for a local model from an instance they control.',
          '**Self-hosters already running Docker** who are comfortable editing a YAML file.',
          '**Developers building agents** who need a JSON search endpoint they can call from code.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Privacy in practice.** The no-tracking and no-sharing statements are unaudited, and which upstream engines see your queries depends on the engines you leave enabled.',
          '**Result quality for LLMs.** PromptQuorum did not compare SearXNG results with other search providers or measure whether a model answers better with them.',
          '**Resistance to blocking.** The default settings suspend an engine for a period after a CAPTCHA or an access-denied reply (24 hours for a CAPTCHA), so engines can drop out of the results; how often that happens was not measured.',
          '**Hardware and operating systems.** The documentation states no RAM or CPU requirement and lists no host operating systems; the platforms on the directory tile are inferred from the container route.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: [
          'App',
          'Platforms',
          'Price / license',
          'Key difference',
        ],
        rows: [
          {
            App: '[Vane](/power-local-llm/vane-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Answer engine that adds LLM-written, cited answers; its directory entry describes a self-hosted SearXNG backend, so it builds on SearXNG instead of replacing it',
          },
          {
            App: '[Farfalle](/power-local-llm/farfalle-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / Apache-2.0',
            'Key difference': 'Perplexity-style search app whose search step can use SearXNG, Tavily, Serper or Bing, per its review',
          },
          {
            App: '[Local Deep Research](/power-local-llm/local-deep-research-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Multi-step research agent across arXiv, PubMed, the web and your own documents; a research tool, not a search backend',
          },
          {
            App: '[Web Search MCP](/power-local-llm/web-search-mcp-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'MCP server that gives local LLMs live web search and page content in tools such as LM Studio',
          },
        ],
        note: 'Vane and Farfalle can use SearXNG as their search step rather than compete with it; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I use a public SearXNG instance instead of hosting one?',
            a: 'Often not: the API documentation notes that many public instances disable the JSON format and answer 403, and a public instance routes your queries through its operator, about whom the About page gives no details. The [searx.space](https://searx.space) list is the place to look.',
          },
          {
            q: 'Does SearXNG need a GPU or a language model?',
            a: 'No. It contains no model and the documentation states no hardware requirement; any GPU is used by the separate LLM that reads the results.',
          },
          {
            q: 'How do I update it or pin a version?',
            a: 'Pull a new image and restart the stack; the guide advises reviewing changes to the compose template first. The compose file reads the image tag from a `SEARXNG_VERSION` variable that defaults to latest, so setting a dated tag pins a build.',
          },
          {
            q: 'Do I need the limiter on a personal instance?',
            a: 'Not necessarily: it is off by default and needs a Valkey database, which the recommended compose file already starts. The compose file publishes the port on all interfaces unless `SEARXNG_HOST` is set, so check that setting before exposing the instance beyond your machine.',
          },
          {
            q: 'Does it work over Tor or without JavaScript?',
            a: 'The documentation says it can be used over Tor and that JavaScript and cookies are optional; PromptQuorum tested neither.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'SearXNG is a long-running, actively maintained way to give a local LLM front end live web results from a service you host, at no cost. Against that, it is a container-and-YAML setup rather than an installer, its JSON output must be switched on by hand, queries still reach the upstream engines, and its privacy and quality claims could not be checked here. It suits people who already run Open WebUI or a similar tool and are comfortable with Docker; anyone who needs strict privacy guarantees should read the configuration and the engines in use rather than rely on the project\'s summary.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[SearXNG documentation](https://docs.searxng.org) — project description, supported services and instances, checked 24 October 2026.',
          '[About SearXNG](https://docs.searxng.org/user/about.html) — the privacy statements, checked 24 October 2026.',
          '[Container installation guide](https://docs.searxng.org/admin/installation-docker.html) — image names, compose setup and updating, checked 24 October 2026.',
          '[Search API documentation](https://docs.searxng.org/dev/search_api.html) — the format parameter and the 403 for formats that are not enabled, checked 24 October 2026.',
          '[SearXNG on GitHub](https://github.com/searxng/searxng) — licence, default settings and compose file, last push on 24 October 2026.',
          '[searxng/searxng on Docker Hub](https://hub.docker.com/r/searxng/searxng/tags) — dated container tags, newest 2026.10.24-ef0ec03da.',
          '[Open WebUI guide for SearXNG](https://docs.openwebui.com/features/chat-conversations/web-search/providers/searxng) — json requirement and query URL, checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Vane Review](/power-local-llm/vane-review) — an answer engine that can sit on a SearXNG backend.',
          '[Farfalle Review](/power-local-llm/farfalle-review) — an open-source AI search app with SearXNG as a search provider.',
          '[Local Deep Research Review](/power-local-llm/local-deep-research-review) — a multi-step research agent for local models.',
          '[Web Search MCP Review](/power-local-llm/web-search-mcp-review) — live web search for local LLMs through MCP.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SearXNG Review: Self-Hosted Search Backend for Local LLMs',
      description: 'SearXNG review: a self-hosted metasearch engine that local LLM front ends use for web search. Setup, the JSON switch, privacy statements and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/searxng-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'Local LLM users evaluating a self-hosted web-search backend',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'SearXNG',
        },
        {
          '@type': 'Thing',
          name: 'Metasearch engine',
        },
        {
          '@type': 'Thing',
          name: 'Web search for local LLMs',
        },
        {
          '@type': 'Thing',
          name: 'Self-hosting',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/searxng-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'SearXNG Review',
          item: 'https://www.promptquorum.com/power-local-llm/searxng-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'RAG & Document Chat',
    heroImage: '/images/searxng-review-hero-de.webp',
    title: 'SearXNG-Rezension: selbst gehostetes Such-Backend für lokale LLMs',
    seoTitle: 'SearXNG-Rezension: selbst gehostetes Such-Backend für LLMs',
    intro: 'SearXNG ist eine kostenlose, quelloffene Metasuchmaschine, die Sie selbst betreiben und die lokale LLM-Oberflächen wie Open WebUI als Websuche-Backend ansprechen können. Diese Rezension betrachtet es nur in dieser Rolle: Es ist keine KI-App und enthält kein Sprachmodell. Sie stützt sich auf die Projektdokumentation, das GitHub-Repository und die Tag-Liste auf Docker Hub, geprüft am 24. Oktober 2026; PromptQuorum hat es nicht selbst ausprobiert.',
    metaDescription: 'SearXNG-Rezension: selbst gehostete Metasuchmaschine, die lokale LLM-Oberflächen wie Open WebUI für die Websuche nutzen. AGPL-3.0, Docker; ungetestet.',
    twitterDescription: 'SearXNG-Rezension: das selbst gehostete Such-Backend hinter vielen Websuche-Setups für lokale LLMs – und was die Doku zu Datenschutz, Einrichtung und JSON-Schalter bestätigt.',
    audience: 'Nutzer lokaler LLMs, die in Open WebUI oder einer ähnlichen Oberfläche Websuche über einen selbst betriebenen Dienst wollen und wissen müssen, was SearXNG garantiert und was nicht.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'SearXNG Rezension',
    targetKeywords: [
      'searxng rezension',
      'searxng lokales llm websuche',
      'searxng open webui',
      'selbst gehostete metasuchmaschine',
      'private websuche für lokale llm',
      'searxng docker einrichtung',
      'searxng json api',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**SearXNG (Build 2026.10.24-ef0ec03da, aktualisiert am 24. Oktober 2026) ist eine selbst gehostete Metasuchmaschine, die eine lokale LLM-Oberfläche nach aktuellen Webergebnissen fragen kann.** Sie ist unter der AGPL-3.0 kostenlos, enthält kein eigenes KI-Modell und läuft als Container. Jede Aussage hier stammt aus der Dokumentation des Projekts, seinem Repository und seinen Docker-Hub-Tags.',
    quickAnswerTop: {
      de: {
        question: 'Macht SearXNG die Websuche für ein lokales LLM privat?',
        answer: 'Teilweise. Laut Projekt verfolgt und profiliert es seine Nutzer nicht und gibt nichts an Dritte weiter; auf Ihrem eigenen Rechner sieht kein fremder Betreiber Ihre Anfragen. Jede Anfrage wird dennoch an die Suchmaschinen im Hintergrund weitergeleitet, die es bündelt, sodass diese sie weiterhin erhalten.',
        bullets: [
          'Es liefert Ergebnisse als JSON, die eine Oberfläche an ein Modell weiterreicht, und hat auch eine Browser-Oberfläche.',
          'Es bündelt bis zu 261 Suchdienste.',
          'Das JSON-Format ist standardmäßig aus und muss von Hand aktiviert werden.',
          'Es läuft als Docker- oder Podman-Container; einen Desktop-Installer gibt es nicht.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist SearXNG?',
        anchor: 'what-is-searxng',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'So gelingt der Einstieg',
        anchor: 'getting-started',
      },
      {
        label: 'Datenfluss und Datenschutz',
        anchor: 'privacy',
      },
      {
        label: 'Für wen sich SearXNG eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Wettbewerber und Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq',
      },
      {
        label: 'Fazit',
        anchor: 'verdict',
      },
      {
        label: 'Quellen',
        anchor: 'sources',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SearXNG ist eine quelloffene Metasuchmaschine, die Sie selbst hosten und die lokale LLM-Oberflächen als Websuche-Backend nutzen können.',
          },
          {
            type: 'plain-terms',
            text: 'Sie fragt in Ihrem Auftrag viele Suchmaschinen ab und liefert die Ergebnisse als Webseite oder als JSON zurück, sodass Ihr lokales Modell aktuelle Webergebnisse über einen selbst betriebenen Dienst lesen kann.',
          },
        ],
        items: [
          'Pflege: eine Rolling-Release-Software, deren Commits und Container-Builds bis zum 24. Oktober 2026 reichen; das Repository hat keine GitHub-Releases, daher gilt keine Warnung vor einem veralteten Projekt.',
          'Lizenz und Kosten: AGPL-3.0, kostenlos.',
          'Rolle: keine KI-App. Es liefert Suchergebnisse; Modell und Chat-Oberfläche kommen von anderer Software.',
          'Einrichtung: Docker oder Podman plus Änderungen an einer YAML-Konfigurationsdatei, also ist ein Terminal nötig.',
          'Herausgeber: ein Community-Projekt, das Mitte 2021 als Fork von searx begann.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Dokumentation, das Repository und die Container-Tags, geprüft am 24. Oktober 2026. PromptQuorum hat SearXNG weder installiert noch die Ergebnisqualität gemessen; die Datenschutzaussagen sind daher die des Projekts selbst.',
          },
        ],
      },
      overview: {
        id: 'what-is-searxng',
        title: 'Was ist SearXNG?',
        content: [
          '**SearXNG ist eine kostenlose Metasuchmaschine: Sie schickt Ihre Anfrage gleichzeitig an viele Suchdienste und führt die Antworten in einer Ergebnisliste zusammen.** Die Dokumentation beschreibt sie als Suche ohne Tracking, nennt rund 70 öffentliche Instanzen auf [searx.space](https://searx.space) und gibt an, dass sie Mitte 2021 als Fork des Projekts searx entstand.',
          'Für lokale KI liegt der Nutzen in der Such-API: Eine Oberfläche ruft `/search?q=...&format=json` ab und erhält strukturierte Ergebnisse, die sie an ein Modell weitergeben kann. Die Software enthält weder ein Modell noch eine Antworterzeugung; deshalb setzen Antwortmaschinen wie Vane und Farfalle, die sie als Suchschritt verwenden können, das Modell obendrauf.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**SearXNG wird als Container-Image und als Installationsskripte ausgeliefert; einen Desktop-Installer gibt es nicht, ein Terminal ist also nötig.**',
        ],
        columns: [
          'Option',
          'Bezug',
        ],
        rows: [
          {
            Option: 'Container-Image',
            Bezug: '[searxng/searxng auf Docker Hub](https://hub.docker.com/r/searxng/searxng), Mirror `ghcr.io/searxng/searxng`',
          },
          {
            Option: 'Docker Compose (empfohlen)',
            Bezug: '[Anleitung zur Container-Installation](https://docs.searxng.org/admin/installation-docker.html): `docker compose up -d`',
          },
          {
            Option: 'Website',
            Bezug: '[docs.searxng.org](https://docs.searxng.org)',
          },
          {
            Option: 'Datenschutzerklärung',
            Bezug: '[Seite „About“ mit Datenschutzaussagen](https://docs.searxng.org/user/about.html); kein eigenes Dokument gefunden',
          },
          {
            Option: 'Quellcode',
            Bezug: '[github.com/searxng/searxng](https://github.com/searxng/searxng), AGPL-3.0',
          },
          {
            Option: 'Öffentliche Instanzen',
            Bezug: '[searx.space](https://searx.space) listet sie auf; viele deaktivieren das JSON-Format',
          },
        ],
        note: 'Geprüfte Version: 2026.10.24-ef0ec03da, der neueste Docker-Hub-Tag am 24. Oktober 2026. SearXNG ist ein Rolling Release, dessen Versionsnummer auf dem Git-Commit beruht; das Repository hat keine GitHub-Releases. Die Dokumentation nennt weder eine Hardwareanforderung noch Host-Betriebssysteme.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Diese Schritte folgen der Container-Anleitung des Projekts und der Open-WebUI-Dokumentation zu SearXNG; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Container starten',
            whyItMatters: 'Laden Sie die Compose-Datei und `.env.example` aus dem Repository, kopieren Sie die zweite nach `.env` und führen Sie `docker compose up -d` aus; der Stack startet auch eine Valkey-Datenbank und nutzt standardmäßig Port 8080.',
          },
          {
            title: 'JSON-Format aktivieren',
            whyItMatters: 'Die Standardliste `search.formats` in `settings.yml` enthält nur `html`; fügen Sie `json` hinzu und starten Sie neu. Eine Anfrage nach einem nicht aktivierten Format liefert 403 Forbidden.',
          },
          {
            title: 'API testen',
            whyItMatters: 'Rufen Sie auf Ihrer Instanz `/search?q=searxng&format=json` ab, etwa mit curl, und prüfen Sie, ob strukturierte Ergebnisse zurückkommen.',
          },
          {
            title: 'Oberfläche verbinden',
            whyItMatters: 'Stellen Sie in Open WebUI die Websuche-Engine auf searxng und die Abfrage-URL auf die `/search`-Adresse Ihrer Instanz. Diese Anleitung ist ein Community-Beitrag, den das Open-WebUI-Team nicht offiziell unterstützt, und sie weist darauf hin, dass die Websuche pro Chat eingeschaltet werden muss.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Laut Dokumentation speichert SearXNG keine Informationen über seine Nutzer, erstellt kein Profil und gibt nichts an Dritte weiter.** Das sind Aussagen des Projekts; die Seite „About“ beschreibt nicht, was ein Instanzbetreiber sehen kann, und rät Interessierten, die Software selbst zu betreiben.',
          'Auf einer selbst gehosteten Instanz sind Sie der Betreiber, offen bleibt also die ausgehende Seite: Die Seite „About“ sagt, Anfragen würden mit Suchen auf anderen Plattformen vermischt, die Suchmaschinen im Hintergrund erhalten sie also weiterhin. In der Standardkonfiguration ist zudem DuckDuckGo als Autovervollständigungs-Backend eingetragen; bleibt die Einstellung leer, ist sie abgeschaltet.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben des Projekts, keine Prüfergebnisse. PromptQuorum hat weder Netzwerkverkehr noch Protokolle untersucht; welche Anfragen Ihren Rechner verlassen, hängt von den aktivierten Suchmaschinen ab.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich SearXNG eignet',
        items: [
          '**Nutzer von Open WebUI und ähnlichen Oberflächen**, die Websuche für ein lokales Modell über eine Instanz unter eigener Kontrolle wollen.',
          '**Selbsthoster mit Docker**, die eine YAML-Datei bearbeiten können.',
          '**Entwickler von Agenten**, die einen JSON-Suchendpunkt aus Code aufrufen möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Datenschutz in der Praxis.** Die Aussagen zu Tracking und Weitergabe sind ungeprüft, und welche Suchmaschinen Ihre Anfragen sehen, hängt von den aktivierten Engines ab.',
          '**Ergebnisqualität für LLMs.** PromptQuorum hat die SearXNG-Ergebnisse nicht mit anderen Suchanbietern verglichen und nicht gemessen, ob ein Modell damit besser antwortet.',
          '**Robustheit gegen Sperren.** Die Standardeinstellungen setzen eine Engine nach einem CAPTCHA oder einer Zugriffsverweigerung für eine Weile aus (24 Stunden bei einem CAPTCHA), sodass Engines aus den Ergebnissen verschwinden können; wie oft das vorkommt, wurde nicht gemessen.',
          '**Hardware und Betriebssysteme.** Die Dokumentation nennt keine RAM- oder CPU-Anforderung und keine Host-Betriebssysteme; die Plattformen im Verzeichniseintrag sind aus dem Container-Weg abgeleitet.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Wichtigster Unterschied',
        ],
        rows: [
          {
            App: '[Vane](/de/power-local-llm/vane-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Antwortmaschine, die LLM-Antworten mit Quellen ergänzt; ihr Verzeichniseintrag beschreibt ein selbst gehostetes SearXNG-Backend, sie baut also auf SearXNG auf, statt es zu ersetzen',
          },
          {
            App: '[Farfalle](/de/power-local-llm/farfalle-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache-2.0',
            'Wichtigster Unterschied': 'KI-Suche im Perplexity-Stil, deren Suchschritt laut Rezension SearXNG, Tavily, Serper oder Bing nutzen kann',
          },
          {
            App: '[Local Deep Research](/de/power-local-llm/local-deep-research-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Mehrstufiger Recherche-Agent über arXiv, PubMed, das Web und eigene Dokumente; ein Recherchewerkzeug, kein Such-Backend',
          },
          {
            App: '[Web Search MCP](/de/power-local-llm/web-search-mcp-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'MCP-Server, der lokalen LLMs in Werkzeugen wie LM Studio Live-Websuche und Seiteninhalte liefert',
          },
        ],
        note: 'Vane und Farfalle können SearXNG als Suchschritt nutzen, statt mit ihm zu konkurrieren; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich eine öffentliche SearXNG-Instanz nutzen, statt selbst zu hosten?',
            a: 'Oft nicht: Laut API-Dokumentation deaktivieren viele öffentliche Instanzen das JSON-Format und antworten mit 403, und eine öffentliche Instanz leitet Ihre Anfragen über ihren Betreiber, zu dem die Seite „About“ keine Angaben macht. Die Liste auf [searx.space](https://searx.space) ist die richtige Anlaufstelle.',
          },
          {
            q: 'Braucht SearXNG eine GPU oder ein Sprachmodell?',
            a: 'Nein. Es enthält kein Modell, und die Dokumentation nennt keine Hardwareanforderung; eine GPU nutzt allenfalls das getrennte LLM, das die Ergebnisse liest.',
          },
          {
            q: 'Wie aktualisiere ich es oder fixiere eine Version?',
            a: 'Neues Image ziehen und den Stack neu starten; die Anleitung rät, zuvor Änderungen an der Compose-Vorlage zu prüfen. Die Compose-Datei liest den Image-Tag aus der Variable `SEARXNG_VERSION`, die standardmäßig auf latest steht; ein datierter Tag fixiert einen Build.',
          },
          {
            q: 'Brauche ich den Limiter auf einer privaten Instanz?',
            a: 'Nicht unbedingt: Er ist standardmäßig aus und braucht eine Valkey-Datenbank, die die empfohlene Compose-Datei bereits startet. Die Compose-Datei veröffentlicht den Port auf allen Schnittstellen, sofern `SEARXNG_HOST` nicht gesetzt ist; prüfen Sie das, bevor Sie die Instanz über Ihren Rechner hinaus erreichbar machen.',
          },
          {
            q: 'Funktioniert es über Tor oder ohne JavaScript?',
            a: 'Laut Dokumentation lässt es sich über Tor nutzen, und JavaScript sowie Cookies sind optional; PromptQuorum hat beides nicht getestet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'SearXNG ist ein altbewährter, aktiv gepflegter und kostenloser Weg, einer lokalen LLM-Oberfläche aktuelle Webergebnisse von einem selbst betriebenen Dienst zu liefern. Dagegen steht: Es ist eine Container-und-YAML-Einrichtung statt eines Installers, die JSON-Ausgabe muss von Hand eingeschaltet werden, Anfragen erreichen weiterhin die Suchmaschinen im Hintergrund, und die Aussagen zu Datenschutz und Qualität ließen sich hier nicht prüfen. Es passt zu Nutzern, die bereits Open WebUI oder ein ähnliches Werkzeug betreiben und mit Docker vertraut sind; wer strenge Datenschutzgarantien braucht, sollte Konfiguration und genutzte Engines prüfen, statt sich auf die Zusammenfassung des Projekts zu verlassen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[SearXNG-Dokumentation](https://docs.searxng.org) — Projektbeschreibung, unterstützte Dienste und Instanzen, geprüft am 24. Oktober 2026.',
          '[About SearXNG](https://docs.searxng.org/user/about.html) — die Datenschutzaussagen, geprüft am 24. Oktober 2026.',
          '[Anleitung zur Container-Installation](https://docs.searxng.org/admin/installation-docker.html) — Image-Namen, Compose-Einrichtung und Aktualisierung, geprüft am 24. Oktober 2026.',
          '[Dokumentation der Such-API](https://docs.searxng.org/dev/search_api.html) — der Parameter format und der 403-Fehler bei nicht aktivierten Formaten, geprüft am 24. Oktober 2026.',
          '[SearXNG auf GitHub](https://github.com/searxng/searxng) — Lizenz, Standardeinstellungen und Compose-Datei, letzter Push am 24. Oktober 2026.',
          '[searxng/searxng auf Docker Hub](https://hub.docker.com/r/searxng/searxng/tags) — datierte Container-Tags, neuester 2026.10.24-ef0ec03da.',
          '[Open-WebUI-Anleitung für SearXNG](https://docs.openwebui.com/features/chat-conversations/web-search/providers/searxng) — json-Voraussetzung und Abfrage-URL, geprüft am 24. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Vane-Rezension](/de/power-local-llm/vane-review) — eine Antwortmaschine, die auf einem SearXNG-Backend aufsetzen kann.',
          '[Farfalle-Rezension](/de/power-local-llm/farfalle-review) — eine quelloffene KI-Suche mit SearXNG als Suchanbieter.',
          '[Local-Deep-Research-Rezension](/de/power-local-llm/local-deep-research-review) — ein mehrstufiger Recherche-Agent für lokale Modelle.',
          '[Web-Search-MCP-Rezension](/de/power-local-llm/web-search-mcp-review) — Live-Websuche für lokale LLMs über MCP.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'RAG & Document Chat',
    heroImage: '/images/searxng-review-hero-es.webp',
    title: 'Reseña de SearXNG: backend de búsqueda autoalojado para LLM locales',
    seoTitle: 'Reseña de SearXNG: backend de búsqueda para LLM locales',
    intro: 'SearXNG es un metabuscador gratuito y de código abierto que usted mismo aloja y que interfaces de LLM locales como Open WebUI pueden llamar como backend de búsqueda web. Esta reseña lo analiza solo en ese papel: no es una app de IA y no contiene ningún modelo de lenguaje. Se basa en la documentación del proyecto, el repositorio de GitHub y la lista de etiquetas de Docker Hub, consultados el 24 de octubre de 2026; PromptQuorum no lo ha probado en la práctica.',
    metaDescription: 'Reseña de SearXNG: metabuscador autoalojado que interfaces de LLM locales como Open WebUI usan para buscar en la web. AGPL-3.0, Docker; sin probar.',
    twitterDescription: 'Reseña de SearXNG: el backend de búsqueda autoalojado detrás de muchas configuraciones de búsqueda web para LLM locales, y lo que la documentación confirma sobre privacidad, instalación y el ajuste JSON.',
    audience: 'Usuarios de LLM locales que quieren búsqueda web en Open WebUI o una interfaz similar mediante un servicio que alojan ellos mismos y necesitan saber qué garantiza SearXNG y qué no.',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña SearXNG',
    targetKeywords: [
      'reseña searxng',
      'searxng búsqueda web llm local',
      'searxng open webui',
      'metabuscador autoalojado',
      'búsqueda web privada para llm local',
      'instalar searxng con docker',
      'searxng api json',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**SearXNG (compilación 2026.10.24-ef0ec03da, actualizada el 24 de octubre de 2026) es un metabuscador autoalojado que una interfaz de LLM local puede consultar para obtener resultados web actuales.** Es gratuito bajo la licencia AGPL-3.0, no incluye ningún modelo de IA propio y se ejecuta como contenedor. Todas las afirmaciones de aquí proceden de la documentación del proyecto, de su repositorio y de sus etiquetas de Docker Hub.',
    quickAnswerTop: {
      es: {
        question: '¿Hace SearXNG privada la búsqueda web de un LLM local?',
        answer: 'En parte. Según el proyecto, no rastrea ni perfila a sus usuarios y no comparte nada con terceros, y en tu propia máquina ningún operador externo ve tus consultas. Aun así, cada consulta se reenvía a los motores de búsqueda de origen que agrega, así que esos motores siguen recibiéndola.',
        bullets: [
          'Devuelve los resultados en JSON para que una interfaz los pase a un modelo, y además tiene una interfaz de navegador.',
          'Agrega hasta 261 servicios de búsqueda.',
          'El formato JSON viene desactivado por defecto y hay que activarlo a mano.',
          'Se ejecuta como contenedor de Docker o Podman; no existe un instalador de escritorio.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es SearXNG?',
        anchor: 'what-is-searxng',
      },
      {
        label: 'Dónde conseguirlo',
        anchor: 'get-it',
      },
      {
        label: 'Cómo empezar',
        anchor: 'getting-started',
      },
      {
        label: 'Flujo de datos y privacidad',
        anchor: 'privacy',
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use',
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fuentes',
        anchor: 'sources',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SearXNG es un metabuscador de código abierto que alojas tú mismo y que las interfaces de LLM locales pueden usar como backend de búsqueda web.',
          },
          {
            type: 'plain-terms',
            text: 'Consulta por ti a muchos motores de búsqueda y devuelve los resultados como página web o como JSON, de modo que tu modelo local pueda leer resultados web actuales a través de un servicio que alojas tú.',
          },
        ],
        items: [
          'Mantenimiento: un lanzamiento continuo cuyos commits y compilaciones de contenedor llegan al 24 de octubre de 2026; el repositorio no tiene releases en GitHub, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Licencia y coste: AGPL-3.0, gratuito.',
          'Papel: no es una app de IA. Aporta resultados de búsqueda; el modelo y la interfaz de chat vienen de otro software.',
          'Instalación: Docker o Podman y ediciones en un archivo de ajustes YAML, así que hace falta una terminal.',
          'Autoría: un proyecto comunitario que nació a mediados de 2021 como fork de searx.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la documentación, el repositorio y las etiquetas de contenedor, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado SearXNG ni ha medido la calidad de los resultados, así que las declaraciones de privacidad son las del propio proyecto.',
          },
        ],
      },
      overview: {
        id: 'what-is-searxng',
        title: '¿Qué es SearXNG?',
        content: [
          '**SearXNG es un metabuscador gratuito: envía tu consulta a muchos servicios de búsqueda a la vez y fusiona las respuestas en una sola lista.** La documentación lo describe como búsqueda sin rastreo, enumera unas 70 instancias públicas en [searx.space](https://searx.space) y señala que nació a mediados de 2021 como fork del proyecto searx.',
          'Para la IA local, su valor está en la API de búsqueda: una interfaz solicita `/search?q=...&format=json` y obtiene resultados estructurados que puede pasar a un modelo. El software no contiene ningún modelo ni genera respuestas; por eso los motores de respuestas como Vane y Farfalle, que pueden usarlo como paso de búsqueda, añaden el modelo por encima.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**SearXNG se distribuye como imagen de contenedor y como scripts de instalación; no hay instalador de escritorio, así que hace falta una terminal.**',
        ],
        columns: [
          'Opción',
          'Cómo conseguirlo',
        ],
        rows: [
          {
            'Opción': 'Imagen de contenedor',
            'Cómo conseguirlo': '[searxng/searxng en Docker Hub](https://hub.docker.com/r/searxng/searxng), réplica `ghcr.io/searxng/searxng`',
          },
          {
            'Opción': 'Docker Compose (recomendado)',
            'Cómo conseguirlo': '[Guía de instalación](https://docs.searxng.org/admin/installation-docker.html): `docker compose up -d`',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[docs.searxng.org](https://docs.searxng.org)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': '[Página «About»](https://docs.searxng.org/user/about.html); no se halló un documento de política aparte',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[github.com/searxng/searxng](https://github.com/searxng/searxng), AGPL-3.0',
          },
          {
            'Opción': 'Instancias públicas',
            'Cómo conseguirlo': '[searx.space](https://searx.space) las enumera; muchas desactivan el formato JSON',
          },
        ],
        note: 'Versión revisada: 2026.10.24-ef0ec03da, la etiqueta más reciente de Docker Hub el 24 de octubre de 2026. SearXNG es un lanzamiento continuo cuyo número de versión se basa en el commit de git, y el repositorio no tiene releases en GitHub. La documentación no indica ningún requisito de hardware ni sistemas operativos anfitriones.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen la guía de contenedores del proyecto y la documentación de Open WebUI sobre SearXNG; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Iniciar el contenedor',
            whyItMatters: 'Descarga el archivo compose y `.env.example` del repositorio, copia el segundo como `.env` y ejecuta `docker compose up -d`; la pila también arranca una base de datos Valkey y usa el puerto 8080 por defecto.',
          },
          {
            title: 'Activar el formato JSON',
            whyItMatters: 'La lista `search.formats` por defecto en `settings.yml` solo contiene `html`; añade `json` y reinicia. Una petición de un formato no activado devuelve 403 Forbidden.',
          },
          {
            title: 'Probar la API',
            whyItMatters: 'Solicita `/search?q=searxng&format=json` en tu instancia, por ejemplo con curl, y comprueba que llegan resultados estructurados.',
          },
          {
            title: 'Conectar la interfaz',
            whyItMatters: 'En Open WebUI, fija el motor de búsqueda web en searxng y la URL de consulta en la dirección `/search` de tu instancia. Esa guía es una contribución de la comunidad que el equipo de Open WebUI no respalda oficialmente, y indica que la búsqueda web debe activarse en cada chat.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La documentación afirma que SearXNG no almacena información sobre sus usuarios, no genera un perfil y nunca comparte nada con terceros.** Son declaraciones del proyecto; la página «About» no describe qué puede ver el operador de una instancia, y a quien le importe le responde que ejecute el software por su cuenta.',
          'En una instancia autoalojada el operador eres tú, así que la cuestión abierta es la salida: la página «About» dice que las consultas se mezclan con búsquedas en otras plataformas, es decir, los motores de origen siguen recibiéndolas. El archivo de ajustes por defecto también nombra a DuckDuckGo como backend de autocompletado; dejar ese ajuste en blanco lo desactiva.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del proyecto, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red ni los registros, y qué consultas salen de tu máquina depende de los motores que actives.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Open WebUI y de interfaces similares** que quieren búsqueda web para un modelo local desde una instancia que controlan.',
          '**Autoalojadores que ya usan Docker** y no tienen problema en editar un archivo YAML.',
          '**Desarrolladores de agentes** que necesitan un punto de acceso de búsqueda JSON al que llamar desde código.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**La privacidad en la práctica.** Las declaraciones de no rastreo y no compartición no están auditadas, y qué motores de origen ven tus consultas depende de los que dejes activados.',
          '**La calidad de los resultados para LLM.** PromptQuorum no comparó los resultados de SearXNG con los de otros proveedores ni midió si un modelo responde mejor con ellos.',
          '**La resistencia a los bloqueos.** Los ajustes por defecto suspenden un motor durante un tiempo tras un CAPTCHA o una denegación de acceso (24 horas en el caso de un CAPTCHA), por lo que algunos motores pueden desaparecer de los resultados; no se midió con qué frecuencia ocurre.',
          '**Hardware y sistemas operativos.** La documentación no indica requisitos de RAM o CPU ni sistemas anfitriones; las plataformas de la ficha del directorio se deducen de la vía por contenedor.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: [
          'App',
          'Plataformas',
          'Precio / licencia',
          'Diferencia clave',
        ],
        rows: [
          {
            App: '[Vane](/es/power-local-llm/vane-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Motor de respuestas que añade respuestas redactadas por un LLM con fuentes; su ficha del directorio describe un backend SearXNG autoalojado, así que se apoya en SearXNG en lugar de sustituirlo',
          },
          {
            App: '[Farfalle](/es/power-local-llm/farfalle-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / Apache-2.0',
            'Diferencia clave': 'App de búsqueda con IA al estilo Perplexity cuyo paso de búsqueda puede usar SearXNG, Tavily, Serper o Bing, según su reseña',
          },
          {
            App: '[Local Deep Research](/es/power-local-llm/local-deep-research-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Agente de investigación en varios pasos sobre arXiv, PubMed, la web y tus documentos; una herramienta de investigación, no un backend de búsqueda',
          },
          {
            App: '[Web Search MCP](/es/power-local-llm/web-search-mcp-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Servidor MCP que da a los LLM locales búsqueda web en vivo y contenido de páginas en herramientas como LM Studio',
          },
        ],
        note: 'Vane y Farfalle pueden usar SearXNG como paso de búsqueda en lugar de competir con él; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usar una instancia pública de SearXNG en lugar de alojar la mía?',
            a: 'A menudo no: la documentación de la API señala que muchas instancias públicas desactivan el formato JSON y responden 403, y una instancia pública hace pasar tus consultas por su operador, sobre el cual la página «About» no da detalles. La lista de [searx.space](https://searx.space) es el lugar donde mirar.',
          },
          {
            q: '¿Necesita SearXNG una GPU o un modelo de lenguaje?',
            a: 'No. No contiene ningún modelo y la documentación no indica requisitos de hardware; si hay GPU, la usa el LLM aparte que lee los resultados.',
          },
          {
            q: '¿Cómo lo actualizo o fijo una versión?',
            a: 'Descarga una imagen nueva y reinicia la pila; la guía aconseja revisar antes los cambios de la plantilla compose. El archivo compose lee la etiqueta de la imagen de la variable `SEARXNG_VERSION`, que vale latest por defecto, así que indicar una etiqueta con fecha fija una compilación.',
          },
          {
            q: '¿Necesito el limitador en una instancia personal?',
            a: 'No necesariamente: viene desactivado y requiere una base de datos Valkey, que el archivo compose recomendado ya arranca. El archivo compose publica el puerto en todas las interfaces salvo que se defina `SEARXNG_HOST`; revisa ese ajuste antes de exponer la instancia más allá de tu máquina.',
          },
          {
            q: '¿Funciona a través de Tor o sin JavaScript?',
            a: 'La documentación dice que puede usarse a través de Tor y que JavaScript y las cookies son opcionales; PromptQuorum no probó ninguna de las dos cosas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'SearXNG es una forma veterana, mantenida de forma activa y gratuita de dar a una interfaz de LLM local resultados web actuales desde un servicio que alojas tú. En contra, se instala con contenedor y YAML en lugar de un instalador, su salida JSON hay que activarla a mano, las consultas siguen llegando a los motores de origen y sus afirmaciones sobre privacidad y calidad no pudieron comprobarse aquí. Encaja con quien ya usa Open WebUI o una herramienta similar y maneja Docker con soltura; quien necesite garantías estrictas de privacidad debería revisar la configuración y los motores en uso en lugar de fiarse del resumen del proyecto.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Documentación de SearXNG](https://docs.searxng.org) — descripción del proyecto, servicios e instancias compatibles, consultada el 24 de octubre de 2026.',
          '[Acerca de SearXNG](https://docs.searxng.org/user/about.html) — las declaraciones de privacidad, consultadas el 24 de octubre de 2026.',
          '[Guía de instalación en contenedor](https://docs.searxng.org/admin/installation-docker.html) — nombres de imagen, instalación con compose y actualización, consultada el 24 de octubre de 2026.',
          '[Documentación de la API de búsqueda](https://docs.searxng.org/dev/search_api.html) — el parámetro format y el 403 para formatos no activados, consultada el 24 de octubre de 2026.',
          '[SearXNG en GitHub](https://github.com/searxng/searxng) — licencia, ajustes por defecto y archivo compose, último push el 24 de octubre de 2026.',
          '[searxng/searxng en Docker Hub](https://hub.docker.com/r/searxng/searxng/tags) — etiquetas de contenedor con fecha, la más reciente 2026.10.24-ef0ec03da.',
          '[Guía de Open WebUI para SearXNG](https://docs.openwebui.com/features/chat-conversations/web-search/providers/searxng) — requisito json y URL de consulta, consultada el 24 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Vane](/es/power-local-llm/vane-review) — un motor de respuestas que puede apoyarse en un backend SearXNG.',
          '[Reseña de Farfalle](/es/power-local-llm/farfalle-review) — una app de búsqueda con IA de código abierto con SearXNG como proveedor de búsqueda.',
          '[Reseña de Local Deep Research](/es/power-local-llm/local-deep-research-review) — un agente de investigación en varios pasos para modelos locales.',
          '[Reseña de Web Search MCP](/es/power-local-llm/web-search-mcp-review) — búsqueda web en vivo para LLM locales mediante MCP.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'RAG & Document Chat',
    heroImage: '/images/searxng-review-hero-fr.webp',
    title: 'Test de SearXNG : backend de recherche auto-hébergé pour LLM locaux',
    seoTitle: 'Test SearXNG : backend de recherche auto-hébergé pour LLM',
    intro: 'SearXNG est un métamoteur de recherche gratuit et open source que vous hébergez vous-même et que des interfaces de LLM locaux comme Open WebUI peuvent appeler comme backend de recherche web. Ce test ne l\'examine que dans ce rôle : ce n\'est pas une application d\'IA et il ne contient aucun modèle de langage. Il s\'appuie sur la documentation du projet, le dépôt GitHub et la liste des tags Docker Hub, consultés le 24 octobre 2026 ; PromptQuorum ne l\'a pas essayé lui-même.',
    metaDescription: 'Test SearXNG : métamoteur auto-hébergé que des interfaces de LLM locaux comme Open WebUI utilisent pour la recherche web. AGPL-3.0, Docker ; non testé.',
    twitterDescription: 'Test SearXNG : le backend de recherche auto-hébergé derrière de nombreuses installations de recherche web pour LLM locaux, et ce que la documentation confirme sur la confidentialité, l\'installation et le réglage JSON.',
    audience: 'Utilisateurs de LLM locaux qui veulent la recherche web dans Open WebUI ou une interface similaire via un service qu\'ils hébergent, et doivent savoir ce que SearXNG garantit ou non.',
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test SearXNG',
    targetKeywords: [
      'test searxng',
      'searxng recherche web llm local',
      'searxng open webui',
      'métamoteur de recherche auto-hébergé',
      'recherche web privée pour llm local',
      'installer searxng avec docker',
      'searxng api json',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**SearXNG (build 2026.10.24-ef0ec03da, mis à jour le 24 octobre 2026) est un métamoteur de recherche auto-hébergé qu\'une interface de LLM local peut interroger pour obtenir des résultats web actuels.** Il est gratuit sous licence AGPL-3.0, ne contient aucun modèle d\'IA et s\'exécute dans un conteneur. Chaque affirmation ici provient de la documentation du projet, de son dépôt et de ses tags Docker Hub.',
    quickAnswerTop: {
      fr: {
        question: 'SearXNG rend-il la recherche web privée pour un LLM local ?',
        answer: 'En partie. Selon le projet, il ne suit ni ne profile ses utilisateurs et ne partage rien avec des tiers, et sur votre propre machine aucun opérateur extérieur ne voit vos requêtes. Chaque requête est toutefois transmise aux moteurs de recherche en amont qu\'il agrège, qui la reçoivent donc toujours.',
        bullets: [
          'Il renvoie les résultats en JSON pour qu’une interface les transmette à un modèle, et propose aussi une interface de navigateur.',
          'Il agrège jusqu\'à 261 services de recherche.',
          'Le format JSON est désactivé par défaut et doit être activé à la main.',
          'Il s\'exécute comme conteneur Docker ou Podman ; il n\'existe pas d\'installateur de bureau.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu’est-ce que SearXNG ?',
        anchor: 'what-is-searxng',
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Premiers pas',
        anchor: 'getting-started',
      },
      {
        label: 'Flux de données et confidentialité',
        anchor: 'privacy',
      },
      {
        label: 'À qui il s’adresse',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n’avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Lectures associées',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SearXNG est un métamoteur open source que vous hébergez vous-même et que des interfaces de LLM locaux peuvent utiliser comme backend de recherche web.',
          },
          {
            type: 'plain-terms',
            text: 'Il interroge pour vous de nombreux moteurs de recherche et renvoie les résultats sous forme de page web ou de JSON, afin que votre modèle local lise des résultats web actuels via un service que vous hébergez.',
          },
        ],
        items: [
          'Maintenance : une publication continue dont les commits et les builds de conteneur datent du 24 octobre 2026 ; le dépôt n\'a pas de releases GitHub, donc aucun avertissement de projet abandonné ne s\'applique.',
          'Licence et coût : AGPL-3.0, gratuit.',
          'Rôle : ce n\'est pas une application d\'IA. Il fournit des résultats de recherche ; le modèle et l\'interface de chat viennent d\'autres logiciels.',
          'Installation : Docker ou Podman et des modifications d\'un fichier de réglages YAML, donc un terminal est nécessaire.',
          'Éditeur : un projet communautaire né mi-2021 comme fork de searx.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur la documentation, le dépôt et les tags de conteneur, consultés le 24 octobre 2026. PromptQuorum n\'a ni installé SearXNG ni mesuré la qualité des résultats ; les déclarations de confidentialité sont donc celles du projet.',
          },
        ],
      },
      overview: {
        id: 'what-is-searxng',
        title: 'Qu’est-ce que SearXNG ?',
        content: [
          '**SearXNG est un métamoteur de recherche gratuit : il envoie votre requête à de nombreux services de recherche à la fois et fusionne les réponses en une seule liste.** La documentation le décrit comme une recherche sans suivi, recense environ 70 instances publiques sur [searx.space](https://searx.space) et indique qu\'il est né mi-2021 comme fork du projet searx.',
          'Pour l\'IA locale, son intérêt est l\'API de recherche : une interface demande `/search?q=...&format=json` et obtient des résultats structurés qu\'elle peut transmettre à un modèle. Le logiciel ne contient ni modèle ni génération de réponses ; c\'est pourquoi les moteurs de réponses comme Vane et Farfalle, qui peuvent l\'utiliser comme étape de recherche, ajoutent le modèle par-dessus.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**SearXNG est distribué sous forme d\'image de conteneur et de scripts d\'installation ; il n\'existe pas d\'installateur de bureau, un terminal est donc nécessaire.**',
        ],
        columns: [
          'Option',
          'Comment l’obtenir',
        ],
        rows: [
          {
            Option: 'Image de conteneur',
            'Comment l’obtenir': '[searxng/searxng sur Docker Hub](https://hub.docker.com/r/searxng/searxng), miroir `ghcr.io/searxng/searxng`',
          },
          {
            Option: 'Docker Compose (recommandé)',
            'Comment l’obtenir': '[Guide d\'installation](https://docs.searxng.org/admin/installation-docker.html) : `docker compose up -d`',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[docs.searxng.org](https://docs.searxng.org)',
          },
          {
            Option: 'Confidentialité',
            'Comment l’obtenir': '[Page « About »](https://docs.searxng.org/user/about.html) ; aucun document de politique distinct trouvé',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[github.com/searxng/searxng](https://github.com/searxng/searxng), AGPL-3.0',
          },
          {
            Option: 'Instances publiques',
            'Comment l’obtenir': '[searx.space](https://searx.space) les recense ; beaucoup désactivent le format JSON',
          },
        ],
        note: 'Version testée : 2026.10.24-ef0ec03da, le tag Docker Hub le plus récent le 24 octobre 2026. SearXNG est une publication continue dont le numéro de version repose sur le commit git, et le dépôt n\'a pas de releases GitHub. La documentation n\'indique ni configuration matérielle requise ni systèmes d\'exploitation hôtes.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent le guide de conteneur du projet et la documentation d\'Open WebUI sur SearXNG ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Démarrer le conteneur',
            whyItMatters: 'Téléchargez le fichier compose et `.env.example` depuis le dépôt, copiez le second en `.env` et lancez `docker compose up -d` ; la pile démarre aussi une base Valkey et utilise le port 8080 par défaut.',
          },
          {
            title: 'Activer le format JSON',
            whyItMatters: 'La liste `search.formats` par défaut dans `settings.yml` ne contient que `html` ; ajoutez `json` et redémarrez. Une requête pour un format non activé renvoie 403 Forbidden.',
          },
          {
            title: 'Tester l\'API',
            whyItMatters: 'Appelez `/search?q=searxng&format=json` sur votre instance, par exemple avec curl, et vérifiez que des résultats structurés reviennent.',
          },
          {
            title: 'Connecter l\'interface',
            whyItMatters: 'Dans Open WebUI, réglez le moteur de recherche web sur searxng et l\'URL de requête sur l\'adresse `/search` de votre instance. Ce guide est une contribution de la communauté que l\'équipe d\'Open WebUI ne prend pas en charge officiellement, et il précise que la recherche web doit être activée pour chaque conversation.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La documentation indique que SearXNG ne stocke aucune information sur ses utilisateurs, ne crée pas de profil et ne partage rien avec des tiers.** Ce sont les déclarations du projet ; la page « About » ne décrit pas ce qu\'un opérateur d\'instance peut voir et répond à ceux que cela préoccupe d\'héberger le logiciel eux-mêmes.',
          'Sur une instance auto-hébergée, l\'opérateur, c\'est vous ; la question ouverte concerne donc le trafic sortant : la page « About » dit que les requêtes sont mélangées à des recherches sur d\'autres plateformes, ce qui signifie que les moteurs en amont les reçoivent toujours. Le fichier de réglages par défaut désigne aussi DuckDuckGo comme backend d\'autocomplétion ; laisser ce réglage vide le désactive.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du projet, non des résultats d\'audit. PromptQuorum n\'a inspecté ni le trafic réseau ni les journaux, et les requêtes qui quittent votre machine dépendent des moteurs que vous activez.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les utilisateurs d\'Open WebUI et d\'interfaces similaires** qui veulent la recherche web pour un modèle local depuis une instance qu\'ils contrôlent.',
          '**Les auto-hébergeurs qui utilisent déjà Docker** et savent modifier un fichier YAML.',
          '**Les développeurs d’agents** qui ont besoin d’un point d’accès de recherche JSON appelable depuis du code.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**La confidentialité en pratique.** Les déclarations d\'absence de suivi et de partage ne sont pas auditées, et les moteurs en amont qui voient vos requêtes dépendent de ceux que vous laissez activés.',
          '**La qualité des résultats pour les LLM.** PromptQuorum n\'a pas comparé les résultats de SearXNG à ceux d\'autres fournisseurs ni mesuré si un modèle répond mieux avec eux.',
          '**La résistance aux blocages.** Les réglages par défaut suspendent un moteur pendant un certain temps après un CAPTCHA ou un refus d\'accès (24 heures pour un CAPTCHA), si bien que des moteurs peuvent disparaître des résultats ; la fréquence n\'a pas été mesurée.',
          '**Matériel et systèmes d\'exploitation.** La documentation n\'indique aucune exigence de RAM ou de processeur ni de système hôte ; les plateformes de la fiche du répertoire sont déduites de la voie par conteneur.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'Application',
          'Plateformes',
          'Prix / licence',
          'Différence clé',
        ],
        rows: [
          {
            Application: '[Vane](/fr/power-local-llm/vane-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Moteur de réponses qui ajoute des réponses rédigées par un LLM avec sources ; sa fiche du répertoire décrit un backend SearXNG auto-hébergé, il s\'appuie donc sur SearXNG au lieu de le remplacer',
          },
          {
            Application: '[Farfalle](/fr/power-local-llm/farfalle-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / Apache-2.0',
            'Différence clé': 'Application de recherche IA façon Perplexity dont l\'étape de recherche peut utiliser SearXNG, Tavily, Serper ou Bing, selon son test',
          },
          {
            Application: '[Local Deep Research](/fr/power-local-llm/local-deep-research-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Agent de recherche en plusieurs étapes sur arXiv, PubMed, le web et vos documents ; un outil de recherche, pas un backend de recherche',
          },
          {
            Application: '[Web Search MCP](/fr/power-local-llm/web-search-mcp-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Serveur MCP qui donne aux LLM locaux, dans des outils comme LM Studio, la recherche web en direct et le contenu des pages',
          },
        ],
        note: 'Vane et Farfalle peuvent utiliser SearXNG comme étape de recherche plutôt que de le concurrencer ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je utiliser une instance SearXNG publique au lieu d’héberger la mienne ?',
            a: 'Souvent non : la documentation de l\'API note que de nombreuses instances publiques désactivent le format JSON et répondent 403, et une instance publique fait transiter vos requêtes par son opérateur, sur lequel la page « About » ne donne aucun détail. La liste de [searx.space](https://searx.space) est l\'endroit où chercher.',
          },
          {
            q: 'SearXNG a-t-il besoin d’un GPU ou d’un modèle de langage ?',
            a: 'Non. Il ne contient aucun modèle et la documentation n\'indique aucune exigence matérielle ; un éventuel GPU est utilisé par le LLM distinct qui lit les résultats.',
          },
          {
            q: 'Comment le mettre à jour ou figer une version ?',
            a: 'Tirez une nouvelle image et redémarrez la pile ; le guide conseille de relire d\'abord les changements du modèle compose. Le fichier compose lit le tag d\'image dans la variable `SEARXNG_VERSION`, qui vaut latest par défaut ; indiquer un tag daté fige un build.',
          },
          {
            q: 'Ai-je besoin du limiteur sur une instance personnelle ?',
            a: 'Pas forcément : il est désactivé par défaut et nécessite une base Valkey, que le fichier compose recommandé démarre déjà. Le fichier compose publie le port sur toutes les interfaces tant que `SEARXNG_HOST` n\'est pas défini ; vérifiez ce réglage avant d\'exposer l\'instance au-delà de votre machine.',
          },
          {
            q: 'Fonctionne-t-il via Tor ou sans JavaScript ?',
            a: 'La documentation indique qu\'il peut être utilisé via Tor et que JavaScript et les cookies sont facultatifs ; PromptQuorum n\'a testé ni l\'un ni l\'autre.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'SearXNG est un moyen ancien, activement maintenu et gratuit de fournir à une interface de LLM local des résultats web actuels depuis un service que vous hébergez. En contrepartie, il s\'installe avec un conteneur et du YAML plutôt qu\'un installateur, sa sortie JSON doit être activée à la main, les requêtes atteignent toujours les moteurs en amont, et ses affirmations sur la confidentialité et la qualité n\'ont pas pu être vérifiées ici. Il convient à ceux qui font déjà tourner Open WebUI ou un outil similaire et sont à l\'aise avec Docker ; qui exige des garanties strictes de confidentialité devrait examiner la configuration et les moteurs utilisés plutôt que de se fier au résumé du projet.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Documentation de SearXNG](https://docs.searxng.org) — description du projet, services et instances pris en charge, consultée le 24 octobre 2026.',
          '[À propos de SearXNG](https://docs.searxng.org/user/about.html) — les déclarations de confidentialité, consultées le 24 octobre 2026.',
          '[Guide d\'installation en conteneur](https://docs.searxng.org/admin/installation-docker.html) — noms d\'images, installation avec compose et mises à jour, consulté le 24 octobre 2026.',
          '[Documentation de l\'API de recherche](https://docs.searxng.org/dev/search_api.html) — le paramètre format et l\'erreur 403 pour les formats non activés, consultée le 24 octobre 2026.',
          '[SearXNG sur GitHub](https://github.com/searxng/searxng) — licence, réglages par défaut et fichier compose, dernier push le 24 octobre 2026.',
          '[searxng/searxng sur Docker Hub](https://hub.docker.com/r/searxng/searxng/tags) — tags de conteneur datés, le plus récent 2026.10.24-ef0ec03da.',
          '[Guide Open WebUI pour SearXNG](https://docs.openwebui.com/features/chat-conversations/web-search/providers/searxng) — exigence json et URL de requête, consulté le 24 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Vane](/fr/power-local-llm/vane-review) — un moteur de réponses qui peut reposer sur un backend SearXNG.',
          '[Test de Farfalle](/fr/power-local-llm/farfalle-review) — une application de recherche IA open source avec SearXNG comme fournisseur de recherche.',
          '[Test de Local Deep Research](/fr/power-local-llm/local-deep-research-review) — un agent de recherche en plusieurs étapes pour modèles locaux.',
          '[Test de Web Search MCP](/fr/power-local-llm/web-search-mcp-review) — la recherche web en direct pour LLM locaux via MCP.',
          '[Répertoire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'RAG & Document Chat',
    heroImage: '/images/searxng-review-hero-ja.webp',
    title: 'SearXNGレビュー：ローカルLLM向けセルフホスト検索バックエンド',
    seoTitle: 'SearXNGレビュー：ローカルLLM向けセルフホスト検索基盤',
    intro: 'SearXNGは自分で運用する無料のオープンソース・メタ検索エンジンで、Open WebUIなどのローカルLLMフロントエンドがWeb検索のバックエンドとして呼び出せます。本レビューはその役割に限って扱います。AIアプリではなく、言語モデルは含まれていません。プロジェクトのドキュメント、GitHubリポジトリ、Docker Hubのタグ一覧に基づき、2026年10月24日に確認しました。PromptQuorumは実機での動作確認を行っていません。',
    metaDescription: 'SearXNGのレビュー。Open WebUIなどのローカルLLMフロントエンドがWeb検索に使える、プライバシー重視のセルフホスト型メタ検索エンジン。AGPL-3.0、Docker構成。未検証。',
    twitterDescription: 'SearXNGレビュー：ローカルLLMのWeb検索構成を支えるセルフホスト型検索バックエンド。プライバシー、導入手順、JSON設定について公式ドキュメントが確認していること。',
    audience: '自分でホストするサービスを通じてOpen WebUIなどでWeb検索を使いたいローカルLLMユーザーで、SearXNGが何を保証し何を保証しないかを知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'SearXNG レビュー',
    targetKeywords: [
      'searxng レビュー',
      'searxng ローカルllm web検索',
      'searxng open webui',
      'セルフホスト メタ検索エンジン',
      'ローカルllm プライベート web検索',
      'searxng docker 導入',
      'searxng json api',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**SearXNG（ビルド2026.10.24-ef0ec03da、2026年10月24日更新）は、ローカルLLMフロントエンドが最新のWeb検索結果を問い合わせられるセルフホスト型メタ検索エンジンです。** AGPL-3.0ライセンスで無料、独自のAIモデルは含まず、コンテナとして動作します。ここに書かれた内容はすべて、プロジェクトのドキュメント、リポジトリ、Docker Hubのタグに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'SearXNGを使えばローカルLLMのWeb検索はプライベートになりますか？',
        answer: '部分的にそうです。プロジェクトによれば、利用者を追跡・プロファイリングせず、第三者には何も共有しません。自分のマシンで動かせば外部の運営者に検索語は見えません。ただし各クエリは集約元の検索エンジンへ転送されるため、それらのエンジンには引き続き届きます。',
        bullets: [
          '結果をJSONで返し、フロントエンドがモデルへ渡せます。ブラウザ用の画面もあります。',
          '最大261の検索サービスを集約します。',
          'JSON形式は初期状態で無効で、手動で有効化する必要があります。',
          'DockerまたはPodmanのコンテナとして動作し、デスクトップ用インストーラーはありません。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'SearXNGとは',
        anchor: 'what-is-searxng',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '始め方',
        anchor: 'getting-started',
      },
      {
        label: 'データの流れとプライバシー',
        anchor: 'privacy',
      },
      {
        label: '向いている人',
        anchor: 'who-should-use',
      },
      {
        label: '確認できなかった点',
        anchor: 'who-should-not-use',
      },
      {
        label: '競合と代替ツール',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '総評',
        anchor: 'verdict',
      },
      {
        label: '情報源',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SearXNGは自分でホストするオープンソースのメタ検索エンジンで、ローカルLLMフロントエンドがWeb検索のバックエンドとして使えます。',
          },
          {
            type: 'plain-terms',
            text: '多数の検索エンジンに代わって問い合わせ、結果をWebページまたはJSONで返すため、ローカルモデルが自前のサービス経由で最新のWeb結果を読めます。',
          },
        ],
        items: [
          'メンテナンス：ローリングリリースで、コミットとコンテナビルドは2026年10月24日まで更新されています。GitHub上のリリースはないため、停滞プロジェクトの警告は該当しません。',
          'ライセンスと費用：AGPL-3.0、無料。',
          '役割：AIアプリではありません。検索結果を提供するだけで、モデルとチャット画面は別のソフトウェアが担います。',
          '導入：DockerまたはPodmanに加え、YAML設定ファイルの編集が必要で、ターミナルを使います。',
          '開発元：2021年半ばにsearxのフォークとして始まったコミュニティプロジェクトです。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューはドキュメント、リポジトリ、コンテナタグに基づき、2026年10月24日に確認しました。PromptQuorumはSearXNGを導入しておらず、結果の品質も測定していないため、プライバシーに関する記述はプロジェクト自身の説明です。',
          },
        ],
      },
      overview: {
        id: 'what-is-searxng',
        title: 'SearXNGとは',
        content: [
          '**SearXNGは無料のメタ検索エンジンで、1つのクエリを多数の検索サービスへ同時に送り、回答を1つの結果リストにまとめます。** ドキュメントでは追跡されない検索と説明され、[searx.space](https://searx.space)に約70の公開インスタンスが載っており、2021年半ばにsearxプロジェクトのフォークとして始まったとされています。',
          'ローカルAIにとっての価値は検索APIです。フロントエンドが`/search?q=...&format=json`を要求すると、モデルへ渡せる構造化結果が返ります。ソフトウェア自体にはモデルも回答生成も含まれないため、検索ステップとして利用できるVaneやFarfalleのような回答エンジンが、その上にモデルを載せています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**SearXNGはコンテナイメージとインストールスクリプトで配布されており、デスクトップ用インストーラーはないため、ターミナルが必要です。**',
        ],
        columns: [
          '項目',
          '入手方法',
        ],
        rows: [
          {
            '項目': 'コンテナイメージ',
            '入手方法': '[Docker HubのSearXNG](https://hub.docker.com/r/searxng/searxng)、ミラーは`ghcr.io/searxng/searxng`',
          },
          {
            '項目': 'Docker Compose（推奨）',
            '入手方法': '[導入ガイド](https://docs.searxng.org/admin/installation-docker.html)：`docker compose up -d`を実行',
          },
          {
            '項目': '公式サイト',
            '入手方法': '[docs.searxng.org](https://docs.searxng.org)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '[「About」ページ](https://docs.searxng.org/user/about.html)。独立した方針文書は見つかりませんでした',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[github.com/searxng/searxng](https://github.com/searxng/searxng)、AGPL-3.0',
          },
          {
            '項目': '公開インスタンス',
            '入手方法': '[searx.space](https://searx.space)に一覧があります。多くはJSON形式を無効にしています',
          },
        ],
        note: '確認したバージョン：2026.10.24-ef0ec03da（2026年10月24日時点でDocker Hubの最新タグ）。SearXNGはローリングリリースで、バージョン番号はgitコミットに基づき、GitHub上のリリースはありません。ドキュメントにはハードウェア要件もホストOSも記載がありません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はプロジェクトのコンテナガイドとOpen WebUIのSearXNG向けドキュメントに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'コンテナを起動する',
            whyItMatters: 'リポジトリからcomposeファイルと`.env.example`を取得し、後者を`.env`にコピーして`docker compose up -d`を実行します。このスタックはValkeyデータベースも起動し、初期設定ではポート8080を使います。',
          },
          {
            title: 'JSON形式を有効にする',
            whyItMatters: '`settings.yml`の初期の`search.formats`には`html`しか含まれていません。`json`を追加して再起動します。有効でない形式を要求すると403 Forbiddenが返ります。',
          },
          {
            title: 'APIを試す',
            whyItMatters: '自分のインスタンスに対し、たとえばcurlで`/search?q=searxng&format=json`を要求し、構造化結果が返ることを確認します。',
          },
          {
            title: 'フロントエンドに接続する',
            whyItMatters: 'Open WebUIでは、Web検索エンジンをsearxngに、クエリURLを自分のインスタンスの`/search`アドレスに設定します。このガイドはコミュニティの投稿で、Open WebUIチームの公式サポート対象ではなく、Web検索はチャットごとにオンにする必要があるとも書かれています。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**ドキュメントによれば、SearXNGは利用者の情報を保存せず、プロファイルを作らず、第三者に何も共有しません。** これらはプロジェクト自身の説明です。「About」ページはインスタンス運営者に何が見えるかを説明しておらず、気になる人には自分で運用することを勧めています。',
          'セルフホストではあなたが運営者なので、残る問題は外向きの通信です。「About」ページによればクエリは他のプラットフォームでの検索と混ぜられるため、集約元の検索エンジンには引き続き届きます。初期設定ファイルでは、オートコンプリートのバックエンドにDuckDuckGoが指定されており、この設定を空にすると無効になります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクトの申告であり、監査結果ではありません。PromptQuorumはネットワーク通信もログも検査しておらず、どのクエリがマシンの外へ出るかは有効にした検索エンジン次第です。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**Open WebUIなどのフロントエンド利用者**で、自分が管理するインスタンスからローカルモデル用のWeb検索を使いたい人。',
          '**すでにDockerを使っているセルフホスト派**で、YAMLファイルの編集に抵抗がない人。',
          '**エージェントを開発する人**で、コードから呼び出せるJSON検索エンドポイントが必要な人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際のプライバシー。** 追跡なし・共有なしという記述は監査されておらず、どの集約元エンジンにクエリが見えるかは有効にしたエンジン次第です。',
          '**LLM向けの結果品質。** SearXNGの結果を他の検索プロバイダーと比較しておらず、モデルの回答が良くなるかも測定していません。',
          '**ブロックへの耐性。** 初期設定では、CAPTCHAやアクセス拒否の後にエンジンを一定時間停止します（CAPTCHAは24時間）。そのため結果からエンジンが外れることがありますが、頻度は測定していません。',
          '**ハードウェアとOS。** ドキュメントにはRAMやCPUの要件もホストOSの記載もなく、ディレクトリのタイルにあるプラットフォームはコンテナ経由であることからの推定です。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: [
          'アプリ',
          '対応プラットフォーム',
          '価格／ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[Vane](/ja/power-local-llm/vane-review)',
            '対応プラットフォーム': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'LLMが出典付きの回答を書く回答エンジン。ディレクトリの記載ではセルフホストのSearXNGバックエンドを使うため、SearXNGの代わりではなくその上に構築されています',
          },
          {
            'アプリ': '[Farfalle](/ja/power-local-llm/farfalle-review)',
            '対応プラットフォーム': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料／Apache-2.0',
            '主な違い': 'Perplexity風のAI検索アプリ。レビューによれば、検索ステップにSearXNG、Tavily、Serper、Bingを使えます',
          },
          {
            'アプリ': '[Local Deep Research](/ja/power-local-llm/local-deep-research-review)',
            '対応プラットフォーム': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'arXiv、PubMed、Web、自分の文書を横断する多段階のリサーチエージェント。検索バックエンドではなく調査ツールです',
          },
          {
            'アプリ': '[Web Search MCP](/ja/power-local-llm/web-search-mcp-review)',
            '対応プラットフォーム': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'LM StudioなどのツールでローカルLLMにリアルタイムのWeb検索とページ内容を提供するMCPサーバー',
          },
        ],
        note: 'VaneとFarfalleはSearXNGと競合するのではなく、検索ステップとして使えます。各アプリの最新の価格・ライセンス・対応プラットフォームは、それぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '自分でホストせず、公開のSearXNGインスタンスを使えますか？',
            a: '多くの場合は難しいです。APIドキュメントによれば、多くの公開インスタンスはJSON形式を無効にして403を返します。また公開インスタンスではクエリが運営者を経由しますが、「About」ページに運営者の詳細はありません。探すなら[searx.space](https://searx.space)の一覧です。',
          },
          {
            q: 'SearXNGにGPUや言語モデルは必要ですか？',
            a: '不要です。モデルは含まれず、ドキュメントにもハードウェア要件はありません。GPUを使うとすれば、結果を読む別のLLMです。',
          },
          {
            q: '更新やバージョン固定はどうしますか？',
            a: '新しいイメージを取得してスタックを再起動します。ガイドは先にcomposeテンプレートの変更内容を確認するよう勧めています。composeファイルはイメージタグを`SEARXNG_VERSION`変数から読み、初期値はlatestなので、日付付きタグを指定するとビルドを固定できます。',
          },
          {
            q: '個人用インスタンスにリミッターは必要ですか？',
            a: '必ずしも必要ではありません。初期状態で無効で、Valkeyデータベースが必要ですが、推奨のcomposeファイルがすでに起動します。composeファイルは`SEARXNG_HOST`を設定しない限りポートをすべてのインターフェースに公開するので、自分のマシンの外へ公開する前にこの設定を確認してください。',
          },
          {
            q: 'Torや、JavaScriptなしでも動きますか？',
            a: 'ドキュメントによれば、Tor経由で使え、JavaScriptとCookieは任意です。PromptQuorumはどちらも試していません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'SearXNGは、自分でホストするサービスからローカルLLMフロントエンドへ最新のWeb結果を無料で届ける、長く続く活発に保守された手段です。一方で、導入はインストーラーではなくコンテナとYAMLで、JSON出力は手動で有効にする必要があり、クエリは依然として集約元のエンジンに届き、プライバシーと品質に関する主張は本レビューでは確認できませんでした。すでにOpen WebUIなどを使っていてDockerに慣れた人に向いています。厳格なプライバシー保証が必要な場合は、プロジェクトの要約に頼らず、設定と使用するエンジンを自分で確認してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[SearXNGドキュメント](https://docs.searxng.org) — プロジェクトの説明、対応サービスとインスタンス。2026年10月24日確認。',
          '[SearXNGについて](https://docs.searxng.org/user/about.html) — プライバシーに関する記述。2026年10月24日確認。',
          '[コンテナ導入ガイド](https://docs.searxng.org/admin/installation-docker.html) — イメージ名、composeによる構成、更新方法。2026年10月24日確認。',
          '[検索APIドキュメント](https://docs.searxng.org/dev/search_api.html) — formatパラメータと、有効でない形式への403。2026年10月24日確認。',
          '[GitHubのSearXNG](https://github.com/searxng/searxng) — ライセンス、初期設定、composeファイル。最終プッシュは2026年10月24日。',
          '[Docker Hubのsearxng/searxng](https://hub.docker.com/r/searxng/searxng/tags) — 日付付きコンテナタグ。最新は2026.10.24-ef0ec03da。',
          '[Open WebUIのSearXNGガイド](https://docs.openwebui.com/features/chat-conversations/web-search/providers/searxng) — jsonの要件とクエリURL。2026年10月24日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Vaneレビュー](/ja/power-local-llm/vane-review) — SearXNGバックエンドの上に構築できる回答エンジン。',
          '[Farfalleレビュー](/ja/power-local-llm/farfalle-review) — SearXNGを検索プロバイダーに使えるオープンソースのAI検索アプリ。',
          '[Local Deep Researchレビュー](/ja/power-local-llm/local-deep-research-review) — ローカルモデル向けの多段階リサーチエージェント。',
          '[Web Search MCPレビュー](/ja/power-local-llm/web-search-mcp-review) — MCP経由でローカルLLMにリアルタイムのWeb検索を提供。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'RAG & Document Chat',
    heroImage: '/images/searxng-review-hero-pt.webp',
    title: 'Análise do SearXNG: backend de busca auto-hospedado para LLMs locais',
    seoTitle: 'Análise do SearXNG: backend de busca para LLMs locais',
    intro: 'O SearXNG é um metabuscador gratuito e de código aberto que você mesmo hospeda e que interfaces de LLM locais, como o Open WebUI, podem chamar como backend de busca na web. Esta análise o examina apenas nesse papel: ele não é um app de IA e não contém nenhum modelo de linguagem. Baseia-se na documentação do projeto, no repositório do GitHub e na lista de tags do Docker Hub, consultados em 24 de outubro de 2026; a PromptQuorum não o testou na prática.',
    metaDescription: 'Análise do SearXNG: metabuscador auto-hospedado que interfaces de LLM locais, como o Open WebUI, usam para buscar na web. AGPL-3.0, Docker; não testado.',
    twitterDescription: 'Análise do SearXNG: o backend de busca auto-hospedado por trás de muitas configurações de busca na web para LLMs locais, e o que a documentação confirma sobre privacidade, instalação e a opção JSON.',
    audience: 'Usuários de LLMs locais que querem busca na web no Open WebUI ou em uma interface parecida por meio de um serviço que hospedam e precisam saber o que o SearXNG garante e o que não garante.',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise SearXNG',
    targetKeywords: [
      'análise searxng',
      'searxng busca na web llm local',
      'searxng open webui',
      'metabuscador auto-hospedado',
      'busca privada na web para llm local',
      'instalar searxng com docker',
      'searxng api json',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**O SearXNG (build 2026.10.24-ef0ec03da, atualizado em 24 de outubro de 2026) é um metabuscador auto-hospedado que uma interface de LLM local pode consultar para obter resultados atuais da web.** É gratuito sob a licença AGPL-3.0, não contém nenhum modelo de IA próprio e roda como contêiner. Toda afirmação aqui vem da documentação do projeto, do repositório e das tags do Docker Hub.',
    quickAnswerTop: {
      pt: {
        question: 'O SearXNG torna privada a busca na web de um LLM local?',
        answer: 'Em parte. Segundo o projeto, ele não rastreia nem cria perfis dos usuários e não compartilha nada com terceiros, e na sua própria máquina nenhum operador externo vê as suas consultas. Ainda assim, cada consulta é encaminhada aos mecanismos de busca de origem que ele agrega, que portanto continuam a recebê-la.',
        bullets: [
          'Ele devolve os resultados em JSON para uma interface repassar a um modelo e também tem uma interface de navegador.',
          'Agrega até 261 serviços de busca.',
          'O formato JSON vem desativado por padrão e precisa ser ativado manualmente.',
          'Roda como contêiner Docker ou Podman; não existe instalador para desktop.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o SearXNG?',
        anchor: 'what-is-searxng',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'Como começar',
        anchor: 'getting-started',
      },
      {
        label: 'Fluxo de dados e privacidade',
        anchor: 'privacy',
      },
      {
        label: 'Para quem serve',
        anchor: 'who-should-use',
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fontes',
        anchor: 'sources',
      },
      {
        label: 'Leituras relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O SearXNG é um metabuscador de código aberto que você hospeda e que interfaces de LLM locais podem usar como backend de busca na web.',
          },
          {
            type: 'plain-terms',
            text: 'Ele consulta muitos mecanismos de busca em seu nome e devolve os resultados como página web ou JSON, para que o seu modelo local leia resultados atuais da web por meio de um serviço que você hospeda.',
          },
        ],
        items: [
          'Manutenção: um lançamento contínuo cujos commits e builds de contêiner chegam a 24 de outubro de 2026; o repositório não tem releases no GitHub, então nenhum aviso de projeto parado se aplica.',
          'Licença e custo: AGPL-3.0, gratuito.',
          'Papel: não é um app de IA. Ele fornece resultados de busca; o modelo e a interface de chat vêm de outros softwares.',
          'Instalação: Docker ou Podman e edições em um arquivo de configuração YAML, portanto é preciso um terminal.',
          'Autoria: um projeto comunitário que começou em meados de 2021 como fork do searx.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise baseia-se na documentação, no repositório e nas tags de contêiner, consultados em 24 de outubro de 2026. A PromptQuorum não instalou o SearXNG nem mediu a qualidade dos resultados, então as declarações de privacidade são as do próprio projeto.',
          },
        ],
      },
      overview: {
        id: 'what-is-searxng',
        title: 'O que é o SearXNG?',
        content: [
          '**O SearXNG é um metabuscador gratuito: envia a sua consulta a vários serviços de busca ao mesmo tempo e reúne as respostas em uma única lista.** A documentação o descreve como busca sem rastreamento, lista cerca de 70 instâncias públicas em [searx.space](https://searx.space) e diz que ele nasceu em meados de 2021 como fork do projeto searx.',
          'Para a IA local, o valor está na API de busca: uma interface solicita `/search?q=...&format=json` e recebe resultados estruturados que pode repassar a um modelo. O software não contém nenhum modelo nem gera respostas; por isso os mecanismos de respostas como Vane e Farfalle, que podem usá-lo como etapa de busca, adicionam o modelo por cima.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O SearXNG é distribuído como imagem de contêiner e como scripts de instalação; não há instalador para desktop, então é preciso um terminal.**',
        ],
        columns: [
          'Opção',
          'Onde obter',
        ],
        rows: [
          {
            'Opção': 'Imagem de contêiner',
            'Onde obter': '[searxng/searxng no Docker Hub](https://hub.docker.com/r/searxng/searxng), espelho `ghcr.io/searxng/searxng`',
          },
          {
            'Opção': 'Docker Compose (recomendado)',
            'Onde obter': '[Guia de instalação](https://docs.searxng.org/admin/installation-docker.html): `docker compose up -d`',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[docs.searxng.org](https://docs.searxng.org)',
          },
          {
            'Opção': 'Política de privacidade',
            'Onde obter': '[Página “About”](https://docs.searxng.org/user/about.html); não foi achado um documento de política separado',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[github.com/searxng/searxng](https://github.com/searxng/searxng), AGPL-3.0',
          },
          {
            'Opção': 'Instâncias públicas',
            'Onde obter': '[searx.space](https://searx.space) as lista; muitas desativam o formato JSON',
          },
        ],
        note: 'Versão analisada: 2026.10.24-ef0ec03da, a tag mais recente do Docker Hub em 24 de outubro de 2026. O SearXNG é um lançamento contínuo cujo número de versão se baseia no commit do git, e o repositório não tem releases no GitHub. A documentação não indica requisito de hardware nem sistemas operacionais hospedeiros.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estes passos seguem o guia de contêiner do projeto e a documentação do Open WebUI sobre o SearXNG; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Iniciar o contêiner',
            whyItMatters: 'Baixe o arquivo compose e o `.env.example` do repositório, copie o segundo para `.env` e execute `docker compose up -d`; a pilha também inicia um banco Valkey e usa a porta 8080 por padrão.',
          },
          {
            title: 'Ativar o formato JSON',
            whyItMatters: 'A lista `search.formats` padrão em `settings.yml` contém apenas `html`; adicione `json` e reinicie. Uma requisição de um formato não ativado retorna 403 Forbidden.',
          },
          {
            title: 'Testar a API',
            whyItMatters: 'Solicite `/search?q=searxng&format=json` na sua instância, por exemplo com curl, e verifique se voltam resultados estruturados.',
          },
          {
            title: 'Conectar a interface',
            whyItMatters: 'No Open WebUI, defina o mecanismo de busca na web como searxng e a URL de consulta como o endereço `/search` da sua instância. Esse guia é uma contribuição da comunidade que a equipe do Open WebUI não oferece suporte oficial, e ele observa que a busca na web precisa ser ativada em cada chat.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A documentação diz que o SearXNG não armazena informações sobre seus usuários, não gera perfil e nunca compartilha nada com terceiros.** São declarações do projeto; a página “About” não descreve o que o operador de uma instância pode ver e responde a quem se importa que rode o software por conta própria.',
          'Em uma instância auto-hospedada o operador é você, então a questão em aberto é a saída: a página “About” diz que as consultas são misturadas a buscas em outras plataformas, ou seja, os mecanismos de origem continuam a recebê-las. O arquivo de configuração padrão também indica o DuckDuckGo como backend de preenchimento automático; deixar essa opção em branco o desativa.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do projeto, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede nem os logs, e quais consultas saem da sua máquina depende dos mecanismos que você ativar.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Usuários do Open WebUI e de interfaces parecidas** que querem busca na web para um modelo local a partir de uma instância sob seu controle.',
          '**Quem já hospeda com Docker** e se sente à vontade para editar um arquivo YAML.',
          '**Desenvolvedores de agentes** que precisam de um endpoint de busca JSON para chamar a partir de código.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Privacidade na prática.** As declarações de não rastreamento e não compartilhamento não foram auditadas, e quais mecanismos de origem veem as suas consultas depende dos que você deixar ativados.',
          '**Qualidade dos resultados para LLMs.** A PromptQuorum não comparou os resultados do SearXNG com os de outros provedores nem mediu se um modelo responde melhor com eles.',
          '**Resistência a bloqueios.** As configurações padrão suspendem um mecanismo por um período após um CAPTCHA ou uma negação de acesso (24 horas no caso de um CAPTCHA), de modo que mecanismos podem sumir dos resultados; a frequência disso não foi medida.',
          '**Hardware e sistemas operacionais.** A documentação não indica requisitos de RAM ou CPU nem sistemas hospedeiros; as plataformas da ficha no diretório são deduzidas da via por contêiner.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: [
          'App',
          'Plataformas',
          'Preço / licença',
          'Diferença principal',
        ],
        rows: [
          {
            App: '[Vane](/pt/power-local-llm/vane-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Mecanismo de respostas que adiciona respostas escritas por um LLM com fontes; a ficha no diretório descreve um backend SearXNG auto-hospedado, então ele se apoia no SearXNG em vez de substituí-lo',
          },
          {
            App: '[Farfalle](/pt/power-local-llm/farfalle-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / Apache-2.0',
            'Diferença principal': 'App de busca com IA no estilo Perplexity cuja etapa de busca pode usar SearXNG, Tavily, Serper ou Bing, segundo a análise dele',
          },
          {
            App: '[Local Deep Research](/pt/power-local-llm/local-deep-research-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Agente de pesquisa em várias etapas sobre arXiv, PubMed, a web e os seus documentos; uma ferramenta de pesquisa, não um backend de busca',
          },
          {
            App: '[Web Search MCP](/pt/power-local-llm/web-search-mcp-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Servidor MCP que dá a LLMs locais busca na web ao vivo e conteúdo de páginas em ferramentas como o LM Studio',
          },
        ],
        note: 'Vane e Farfalle podem usar o SearXNG como etapa de busca em vez de competir com ele; confirme preço, licença e plataformas atuais de cada app na própria ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar uma instância pública do SearXNG em vez de hospedar a minha?',
            a: 'Muitas vezes não: a documentação da API observa que muitas instâncias públicas desativam o formato JSON e respondem 403, e uma instância pública faz as suas consultas passarem pelo operador, sobre o qual a página “About” não dá detalhes. A lista do [searx.space](https://searx.space) é o lugar para olhar.',
          },
          {
            q: 'O SearXNG precisa de GPU ou de um modelo de linguagem?',
            a: 'Não. Ele não contém nenhum modelo e a documentação não indica requisito de hardware; uma eventual GPU é usada pelo LLM separado que lê os resultados.',
          },
          {
            q: 'Como atualizo ou fixo uma versão?',
            a: 'Baixe uma imagem nova e reinicie a pilha; o guia aconselha revisar antes as mudanças no modelo compose. O arquivo compose lê a tag da imagem da variável `SEARXNG_VERSION`, que por padrão vale latest, então indicar uma tag datada fixa um build.',
          },
          {
            q: 'Preciso do limitador em uma instância pessoal?',
            a: 'Não necessariamente: ele vem desativado e exige um banco Valkey, que o arquivo compose recomendado já inicia. O arquivo compose publica a porta em todas as interfaces, a menos que `SEARXNG_HOST` seja definido; confira essa opção antes de expor a instância além da sua máquina.',
          },
          {
            q: 'Funciona via Tor ou sem JavaScript?',
            a: 'A documentação diz que pode ser usado via Tor e que JavaScript e cookies são opcionais; a PromptQuorum não testou nenhum dos dois.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O SearXNG é um jeito veterano, ativamente mantido e gratuito de dar a uma interface de LLM local resultados atuais da web a partir de um serviço que você hospeda. Em contrapartida, a instalação é com contêiner e YAML em vez de um instalador, a saída JSON precisa ser ativada manualmente, as consultas ainda chegam aos mecanismos de origem e as afirmações sobre privacidade e qualidade não puderam ser verificadas aqui. Serve a quem já usa o Open WebUI ou uma ferramenta parecida e se sente à vontade com Docker; quem precisa de garantias estritas de privacidade deve examinar a configuração e os mecanismos em uso em vez de confiar no resumo do projeto.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Documentação do SearXNG](https://docs.searxng.org) — descrição do projeto, serviços e instâncias compatíveis, consultada em 24 de outubro de 2026.',
          '[Sobre o SearXNG](https://docs.searxng.org/user/about.html) — as declarações de privacidade, consultadas em 24 de outubro de 2026.',
          '[Guia de instalação em contêiner](https://docs.searxng.org/admin/installation-docker.html) — nomes de imagem, instalação com compose e atualização, consultado em 24 de outubro de 2026.',
          '[Documentação da API de busca](https://docs.searxng.org/dev/search_api.html) — o parâmetro format e o 403 para formatos não ativados, consultada em 24 de outubro de 2026.',
          '[SearXNG no GitHub](https://github.com/searxng/searxng) — licença, configurações padrão e arquivo compose, último push em 24 de outubro de 2026.',
          '[searxng/searxng no Docker Hub](https://hub.docker.com/r/searxng/searxng/tags) — tags de contêiner datadas, a mais recente 2026.10.24-ef0ec03da.',
          '[Guia do Open WebUI para o SearXNG](https://docs.openwebui.com/features/chat-conversations/web-search/providers/searxng) — requisito json e URL de consulta, consultado em 24 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Vane](/pt/power-local-llm/vane-review) — um mecanismo de respostas que pode se apoiar em um backend SearXNG.',
          '[Análise do Farfalle](/pt/power-local-llm/farfalle-review) — um app de busca com IA de código aberto com o SearXNG como provedor de busca.',
          '[Análise do Local Deep Research](/pt/power-local-llm/local-deep-research-review) — um agente de pesquisa em várias etapas para modelos locais.',
          '[Análise do Web Search MCP](/pt/power-local-llm/web-search-mcp-review) — busca na web ao vivo para LLMs locais via MCP.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'RAG & Document Chat',
    heroImage: '/images/searxng-review-hero-ar.webp',
    title: 'مراجعة SearXNG: خلفية بحث مستضافة ذاتيًا لنماذج LLM المحلية',
    seoTitle: 'مراجعة SearXNG: خلفية بحث مستضافة ذاتيًا لنماذج LLM',
    intro: 'SearXNG محرك بحث وصفي (Metasearch) مجاني ومفتوح المصدر تشغّله بنفسك، ويمكن لواجهات نماذج LLM المحلية مثل Open WebUI استدعاؤه كخلفية للبحث في الويب. تتناوله هذه المراجعة في هذا الدور فقط: فهو ليس تطبيق ذكاء اصطناعي ولا يحتوي على أي نموذج لغوي. تستند المراجعة إلى وثائق المشروع ومستودع GitHub وقائمة وسوم Docker Hub، وقد رُوجعت في 24 أكتوبر 2026؛ ولم تجرّبه PromptQuorum عمليًا.',
    metaDescription: 'مراجعة SearXNG: محرك بحث وصفي مستضاف ذاتيًا يركّز على الخصوصية تستخدمه واجهات LLM المحلية مثل Open WebUI للبحث في الويب. AGPL-3.0 وDocker؛ لم نجرّبه.',
    twitterDescription: 'مراجعة SearXNG: خلفية البحث المستضافة ذاتيًا وراء كثير من إعدادات البحث في الويب لنماذج LLM المحلية، وما تؤكده الوثائق عن الخصوصية والإعداد وخيار JSON.',
    audience: 'مستخدمو نماذج LLM المحلية الذين يريدون البحث في الويب داخل Open WebUI أو واجهة مشابهة عبر خدمة يستضيفونها بأنفسهم، ويحتاجون إلى معرفة ما يضمنه SearXNG وما لا يضمنه.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة SearXNG',
    targetKeywords: [
      'مراجعة searxng',
      'searxng بحث في الويب llm محلي',
      'searxng open webui',
      'محرك بحث وصفي مستضاف ذاتيًا',
      'بحث خاص في الويب لنموذج llm محلي',
      'تثبيت searxng باستخدام docker',
      'searxng واجهة json',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**SearXNG (الإصدار 2026.10.24-ef0ec03da، حُدِّث في 24 أكتوبر 2026) محرك بحث وصفي مستضاف ذاتيًا يمكن لواجهة نموذج LLM محلي أن تستعلم منه عن نتائج حديثة من الويب.** وهو مجاني بموجب رخصة AGPL-3.0، ولا يحتوي على نموذج ذكاء اصطناعي خاص به، ويعمل كحاوية. كل ما يرد هنا مصدره وثائق المشروع ومستودعه ووسوم Docker Hub.',
    quickAnswerTop: {
      ar: {
        question: 'هل يجعل SearXNG البحث في الويب لنموذج LLM محلي خاصًا؟',
        answer: 'جزئيًا. وفق المشروع، لا يتتبع مستخدميه ولا يبني لهم ملفات تعريف ولا يشارك أي شيء مع طرف ثالث، وعلى جهازك لا يرى أي مشغّل خارجي استعلاماتك. ومع ذلك يُعاد توجيه كل استعلام إلى محركات البحث المصدرية التي يجمع نتائجها، فتظل هذه المحركات تتلقاه.',
        bullets: [
          'يعيد النتائج بصيغة JSON لتمررها واجهة إلى نموذج، وله كذلك واجهة متصفح.',
          'يجمع نتائج ما يصل إلى 261 خدمة بحث.',
          'صيغة JSON معطّلة افتراضيًا ويجب تفعيلها يدويًا.',
          'يعمل كحاوية Docker أو Podman؛ ولا يوجد مثبّت لسطح المكتب.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'ما هو SearXNG؟',
        anchor: 'what-is-searxng',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'كيف تبدأ',
        anchor: 'getting-started',
      },
      {
        label: 'تدفق البيانات والخصوصية',
        anchor: 'privacy',
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use',
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
        anchor: 'who-should-not-use',
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq',
      },
      {
        label: 'الخلاصة',
        anchor: 'verdict',
      },
      {
        label: 'المصادر',
        anchor: 'sources',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SearXNG محرك بحث وصفي مفتوح المصدر تستضيفه بنفسك، ويمكن لواجهات نماذج LLM المحلية استخدامه كخلفية للبحث في الويب.',
          },
          {
            type: 'plain-terms',
            text: 'يستعلم نيابةً عنك من محركات بحث كثيرة ويعيد النتائج كصفحة ويب أو بصيغة JSON، فيستطيع نموذجك المحلي قراءة نتائج حديثة من الويب عبر خدمة تستضيفها أنت.',
          },
        ],
        items: [
          'الصيانة: إصدار متجدد باستمرار تصل التزاماته (commits) وبنى حاوياته إلى 24 أكتوبر 2026؛ ولا توجد إصدارات (releases) على GitHub، لذا لا ينطبق تحذير المشروع المتوقف.',
          'الرخصة والتكلفة: AGPL-3.0، مجاني.',
          'الدور: ليس تطبيق ذكاء اصطناعي. يوفّر نتائج البحث، أما النموذج وواجهة المحادثة فتأتيان من برامج أخرى.',
          'الإعداد: Docker أو Podman مع تعديلات على ملف إعدادات YAML، لذا يلزم طرفية (Terminal).',
          'الجهة المطوّرة: مشروع مجتمعي بدأ في منتصف 2021 كتفرّع (fork) من searx.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى الوثائق والمستودع ووسوم الحاويات، وقد رُوجعت في 24 أكتوبر 2026. لم تثبّت PromptQuorum المشروع ولم تقِس جودة نتائجه، لذا فإن تصريحات الخصوصية هي تصريحات المشروع نفسه.',
          },
        ],
      },
      overview: {
        id: 'what-is-searxng',
        title: 'ما هو SearXNG؟',
        content: [
          '**SearXNG محرك بحث وصفي مجاني: يرسل استعلامك إلى خدمات بحث كثيرة في وقت واحد ويدمج الإجابات في قائمة نتائج واحدة.** تصفه الوثائق بأنه بحث دون تتبع، وتذكر نحو 70 نسخة عامة على [searx.space](https://searx.space)، وتقول إنه بدأ في منتصف 2021 كتفرّع من مشروع searx.',
          'قيمته للذكاء الاصطناعي المحلي في واجهة البحث (API): تطلب الواجهة `/search?q=...&format=json` فتتلقى نتائج منظّمة يمكنها تمريرها إلى نموذج. لا يحتوي البرنامج على نموذج ولا على توليد إجابات؛ ولذلك تضيف محركات الإجابات مثل Vane وFarfalle، التي يمكنها استخدامه كخطوة بحث، النموذج فوقه.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُوزَّع SearXNG كصورة حاوية وكسكربتات تثبيت؛ ولا يوجد مثبّت لسطح المكتب، لذا يلزم استخدام طرفية.**',
        ],
        columns: [
          'الخيار',
          'مصدر الحصول عليه',
        ],
        rows: [
          {
            'الخيار': 'صورة الحاوية',
            'مصدر الحصول عليه': '[searxng/searxng على Docker Hub](https://hub.docker.com/r/searxng/searxng)، ونسخة مرآة `ghcr.io/searxng/searxng`',
          },
          {
            'الخيار': 'Docker Compose (موصى به)',
            'مصدر الحصول عليه': '[دليل التثبيت](https://docs.searxng.org/admin/installation-docker.html): `docker compose up -d`',
          },
          {
            'الخيار': 'الموقع',
            'مصدر الحصول عليه': '[docs.searxng.org](https://docs.searxng.org)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'مصدر الحصول عليه': '[صفحة «About»](https://docs.searxng.org/user/about.html)؛ ولم نجد وثيقة سياسة مستقلة',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[github.com/searxng/searxng](https://github.com/searxng/searxng)، رخصة AGPL-3.0',
          },
          {
            'الخيار': 'النسخ العامة',
            'مصدر الحصول عليه': '[searx.space](https://searx.space) تسردها؛ وكثير منها يعطّل صيغة JSON',
          },
        ],
        note: 'الإصدار الذي رُوجع: 2026.10.24-ef0ec03da، وهو أحدث وسم على Docker Hub في 24 أكتوبر 2026. SearXNG إصدار متجدد باستمرار يعتمد رقم إصداره على التزام git، ولا توجد إصدارات (releases) على GitHub. ولا تذكر الوثائق أي متطلبات عتادية ولا أنظمة تشغيل مضيفة.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات دليل الحاويات الخاص بالمشروع ووثائق Open WebUI عن SearXNG؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'شغّل الحاوية',
            whyItMatters: 'نزّل ملف compose وملف `.env.example` من المستودع، وانسخ الثاني إلى `.env`، ثم شغّل `docker compose up -d`؛ وتشغّل الحزمة أيضًا قاعدة بيانات Valkey وتستخدم المنفذ 8080 افتراضيًا.',
          },
          {
            title: 'فعّل صيغة JSON',
            whyItMatters: 'قائمة `search.formats` الافتراضية في `settings.yml` لا تحتوي إلا على `html`؛ أضف `json` وأعد التشغيل. طلب صيغة غير مفعّلة يعيد الخطأ 403 Forbidden.',
          },
          {
            title: 'اختبر الواجهة',
            whyItMatters: 'اطلب `/search?q=searxng&format=json` من نسختك، مثلًا باستخدام curl، وتحقق من عودة نتائج منظّمة.',
          },
          {
            title: 'اربط الواجهة الأمامية',
            whyItMatters: 'في Open WebUI اضبط محرك البحث في الويب على searxng وعنوان الاستعلام على عنوان `/search` الخاص بنسختك. هذا الدليل مساهمة من المجتمع لا يدعمها فريق Open WebUI رسميًا، وينبه إلى وجوب تشغيل البحث في الويب لكل محادثة على حدة.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول الوثائق إن SearXNG لا يخزّن معلومات عن مستخدميه ولا يبني ملف تعريف عنهم ولا يشارك أي شيء مع طرف ثالث.** هذه تصريحات المشروع؛ ولا تصف صفحة «About» ما يستطيع مشغّل النسخة رؤيته، وجوابها لمن يهمه الأمر أن يشغّل البرنامج بنفسه.',
          'في النسخة المستضافة ذاتيًا يكون المشغّل هو أنت، فيبقى السؤال المفتوح عن الجانب الصادر: تقول صفحة «About» إن الاستعلامات تُخلط مع عمليات بحث على منصات أخرى، أي أن المحركات المصدرية تظل تتلقاها. كما يذكر ملف الإعدادات الافتراضي DuckDuckGo كخلفية للإكمال التلقائي؛ وترك هذا الإعداد فارغًا يعطّله.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات المشروع وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة ولا السجلات، وتعتمد الاستعلامات التي تغادر جهازك على المحركات التي تفعّلها.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Open WebUI وواجهات مشابهة** ممن يريدون البحث في الويب لنموذج محلي من نسخة تحت سيطرتهم.',
          '**من يستضيفون بأنفسهم ويستخدمون Docker أصلًا** ولا يجدون صعوبة في تعديل ملف YAML.',
          '**مطوّرو الوكلاء (Agents)** الذين يحتاجون إلى نقطة بحث بصيغة JSON يستدعونها من الشيفرة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الخصوصية عمليًا.** تصريحات عدم التتبع وعدم المشاركة لم تخضع لتدقيق، وتعتمد المحركات المصدرية التي ترى استعلاماتك على ما تتركه مفعّلًا منها.',
          '**جودة النتائج لنماذج LLM.** لم تقارن PromptQuorum نتائج SearXNG بنتائج مزوّدي بحث آخرين ولم تقِس هل يجيب النموذج بشكل أفضل معها.',
          '**مقاومة الحظر.** تعلّق الإعدادات الافتراضية محركًا ما لفترة بعد CAPTCHA أو رفض وصول (24 ساعة في حالة CAPTCHA)، فقد تختفي محركات من النتائج؛ ولم نقِس مدى تكرار ذلك.',
          '**العتاد وأنظمة التشغيل.** لا تذكر الوثائق متطلبات RAM أو المعالج ولا أنظمة مضيفة؛ والمنصات الواردة في بطاقة الدليل مستنتجة من مسار الحاويات.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الرخصة',
          'الفرق الأبرز',
        ],
        rows: [
          {
            'التطبيق': '[Vane](/ar/power-local-llm/vane-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'محرك إجابات يضيف إجابات يكتبها LLM مع مصادرها؛ وتصف بطاقته في الدليل خلفية SearXNG مستضافة ذاتيًا، فهو يبني على SearXNG ولا يحل محله',
          },
          {
            'التطبيق': '[Farfalle](/ar/power-local-llm/farfalle-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / Apache-2.0',
            'الفرق الأبرز': 'تطبيق بحث بالذكاء الاصطناعي على غرار Perplexity يمكن لخطوة البحث فيه استخدام SearXNG أو Tavily أو Serper أو Bing، بحسب مراجعته',
          },
          {
            'التطبيق': '[Local Deep Research](/ar/power-local-llm/local-deep-research-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'وكيل بحث متعدد الخطوات عبر arXiv وPubMed والويب ومستنداتك؛ أداة بحث وليست خلفية بحث',
          },
          {
            'التطبيق': '[Web Search MCP](/ar/power-local-llm/web-search-mcp-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'خادم MCP يمنح نماذج LLM المحلية بحثًا حيًا في الويب ومحتوى الصفحات داخل أدوات مثل LM Studio',
          },
        ],
        note: 'يمكن لـ Vane وFarfalle استخدام SearXNG كخطوة بحث بدل منافسته؛ تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني استخدام نسخة SearXNG عامة بدل استضافة نسخة خاصة بي؟',
            a: 'غالبًا لا: تشير وثائق الواجهة البرمجية إلى أن كثيرًا من النسخ العامة تعطّل صيغة JSON وترد بالخطأ 403، كما تمرّ استعلاماتك في النسخة العامة عبر مشغّلها الذي لا تقدّم صفحة «About» أي تفاصيل عنه. قائمة [searx.space](https://searx.space) هي المكان المناسب للبحث.',
          },
          {
            q: 'هل يحتاج SearXNG إلى بطاقة رسوميات أو نموذج لغوي؟',
            a: 'لا. فهو لا يحتوي على نموذج ولا تذكر الوثائق أي متطلبات عتادية؛ وإن وُجدت بطاقة رسوميات فيستخدمها نموذج LLM المنفصل الذي يقرأ النتائج.',
          },
          {
            q: 'كيف أحدّثه أو أثبّت إصدارًا بعينه؟',
            a: 'اسحب صورة جديدة وأعد تشغيل الحزمة؛ وينصح الدليل بمراجعة تغييرات قالب compose أولًا. يقرأ ملف compose وسم الصورة من المتغير `SEARXNG_VERSION` الذي قيمته الافتراضية latest، لذا فإن تحديد وسم مؤرخ يثبّت بناءً بعينه.',
          },
          {
            q: 'هل أحتاج إلى المحدِّد (limiter) في نسخة شخصية؟',
            a: 'ليس بالضرورة: فهو معطّل افتراضيًا ويحتاج إلى قاعدة بيانات Valkey، وملف compose الموصى به يشغّلها أصلًا. وينشر ملف compose المنفذ على جميع الواجهات ما لم يُضبط `SEARXNG_HOST`؛ فتحقق من هذا الإعداد قبل إتاحة النسخة خارج جهازك.',
          },
          {
            q: 'هل يعمل عبر Tor أو دون JavaScript؟',
            a: 'تقول الوثائق إنه يمكن استخدامه عبر Tor وإن JavaScript وملفات تعريف الارتباط اختيارية؛ ولم تختبر PromptQuorum أيًّا منهما.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'SearXNG وسيلة قديمة العهد وتُصان بنشاط ومجانية لمنح واجهة نموذج LLM محلي نتائج حديثة من الويب عبر خدمة تستضيفها أنت. في المقابل، يعتمد على إعداد بالحاويات وملف YAML لا على مثبّت، ويجب تفعيل مخرجات JSON يدويًا، وما زالت الاستعلامات تصل إلى المحركات المصدرية، ولم نتمكن هنا من التحقق من ادعاءات الخصوصية والجودة. يناسب من يشغّلون Open WebUI أو أداة مشابهة ويرتاحون إلى Docker؛ ومن يحتاج إلى ضمانات خصوصية صارمة عليه فحص الإعدادات والمحركات المستخدمة بدل الاعتماد على ملخص المشروع.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[وثائق SearXNG](https://docs.searxng.org) — وصف المشروع والخدمات والنسخ المدعومة، روجعت في 24 أكتوبر 2026.',
          '[حول SearXNG](https://docs.searxng.org/user/about.html) — تصريحات الخصوصية، روجعت في 24 أكتوبر 2026.',
          '[دليل التثبيت بالحاويات](https://docs.searxng.org/admin/installation-docker.html) — أسماء الصور والإعداد بـ compose والتحديث، روجع في 24 أكتوبر 2026.',
          '[وثائق واجهة البحث](https://docs.searxng.org/dev/search_api.html) — معامل format والخطأ 403 للصيغ غير المفعّلة، روجعت في 24 أكتوبر 2026.',
          '[SearXNG على GitHub](https://github.com/searxng/searxng) — الرخصة والإعدادات الافتراضية وملف compose، وآخر دفع في 24 أكتوبر 2026.',
          '[searxng/searxng على Docker Hub](https://hub.docker.com/r/searxng/searxng/tags) — وسوم الحاويات المؤرخة، وأحدثها 2026.10.24-ef0ec03da.',
          '[دليل Open WebUI لـ SearXNG](https://docs.openwebui.com/features/chat-conversations/web-search/providers/searxng) — اشتراط json وعنوان الاستعلام، روجع في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Vane](/ar/power-local-llm/vane-review) — محرك إجابات يمكنه الاعتماد على خلفية SearXNG.',
          '[مراجعة Farfalle](/ar/power-local-llm/farfalle-review) — تطبيق بحث بالذكاء الاصطناعي مفتوح المصدر يستخدم SearXNG كمزوّد بحث.',
          '[مراجعة Local Deep Research](/ar/power-local-llm/local-deep-research-review) — وكيل بحث متعدد الخطوات للنماذج المحلية.',
          '[مراجعة Web Search MCP](/ar/power-local-llm/web-search-mcp-review) — بحث حي في الويب لنماذج LLM المحلية عبر MCP.',
          '[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'RAG & Document Chat',
    heroImage: '/images/searxng-review-hero-zh.webp',
    title: 'SearXNG 评测：面向本地大模型的自托管搜索后端',
    seoTitle: 'SearXNG 评测：面向本地大模型的自托管搜索后端服务',
    intro: 'SearXNG 是一款免费开源、由你自己运行的元搜索引擎，Open WebUI 等本地 LLM 前端可以把它当作网页搜索后端来调用。本文只在这一角色下评测它：它不是 AI 应用，也不包含任何语言模型。内容依据项目文档、GitHub 仓库和 Docker Hub 标签列表，核查日期为 2026 年 10 月 24 日；PromptQuorum 没有亲自实测。',
    metaDescription: 'SearXNG 评测：Open WebUI 等本地 LLM 前端用于网页搜索的自托管、注重隐私的元搜索引擎。AGPL-3.0 许可，Docker 部署；未经实测。',
    twitterDescription: 'SearXNG 评测：许多本地 LLM 网页搜索方案背后的自托管搜索后端，以及文档对隐私、部署和 JSON 开关的确认内容。',
    audience: '希望通过自己托管的服务在 Open WebUI 或类似前端中使用网页搜索的本地 LLM 用户，需要了解 SearXNG 保证什么、不保证什么。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'SearXNG 评测',
    targetKeywords: [
      'searxng 评测',
      'searxng 本地 llm 网页搜索',
      'searxng open webui',
      '自托管元搜索引擎',
      '本地 llm 私密网页搜索',
      'searxng docker 部署',
      'searxng json api',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**SearXNG（构建版本 2026.10.24-ef0ec03da，2026 年 10 月 24 日更新）是一款自托管的元搜索引擎，本地 LLM 前端可以向它查询最新的网页结果。** 它以 AGPL-3.0 许可免费提供，自身不含任何 AI 模型，以容器方式运行。本文所有陈述均来自项目文档、代码仓库和 Docker Hub 标签。',
    quickAnswerTop: {
      zh: {
        question: 'SearXNG 能让本地 LLM 的网页搜索变得私密吗？',
        answer: '部分可以。据项目称，它不会跟踪或画像用户，也不会向第三方共享任何信息；在你自己的机器上运行时，没有外部运营者能看到你的查询。不过每次查询仍会转发给它所聚合的上游搜索引擎，所以这些引擎依然会收到查询。',
        bullets: [
          '它以 JSON 返回结果，供前端交给模型，同时也有浏览器界面。',
          '它最多聚合 261 个搜索服务。',
          'JSON 格式默认关闭，必须手动启用。',
          '它以 Docker 或 Podman 容器方式运行，没有桌面安装程序。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer',
      },
      {
        label: 'SearXNG 是什么？',
        anchor: 'what-is-searxng',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '上手步骤',
        anchor: 'getting-started',
      },
      {
        label: '数据流向与隐私',
        anchor: 'privacy',
      },
      {
        label: '适合哪些人',
        anchor: 'who-should-use',
      },
      {
        label: '我们未能核实的内容',
        anchor: 'who-should-not-use',
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives',
      },
      {
        label: '常见问题',
        anchor: 'faq',
      },
      {
        label: '结论',
        anchor: 'verdict',
      },
      {
        label: '来源',
        anchor: 'sources',
      },
      {
        label: '相关阅读',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SearXNG 是一款由你自己托管的开源元搜索引擎，本地 LLM 前端可以把它用作网页搜索后端。',
          },
          {
            type: 'plain-terms',
            text: '它代你向众多搜索引擎查询，并以网页或 JSON 形式返回结果，让你的本地模型通过自己托管的服务读取最新网页结果。',
          },
        ],
        items: [
          '维护情况：滚动发布，提交和容器构建最新到 2026 年 10 月 24 日；仓库没有 GitHub Releases，因此不适用“项目停滞”警告。',
          '许可与费用：AGPL-3.0，免费。',
          '角色：不是 AI 应用。它只提供搜索结果，模型和聊天界面来自其他软件。',
          '部署：需要 Docker 或 Podman，并要编辑 YAML 设置文件，因此需要终端。',
          '维护方：2021 年中期作为 searx 分支起步的社区项目。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本文依据文档、仓库和容器标签，核查日期为 2026 年 10 月 24 日。PromptQuorum 没有安装 SearXNG，也没有测量结果质量，因此隐私方面的说法均为项目自述。',
          },
        ],
      },
      overview: {
        id: 'what-is-searxng',
        title: 'SearXNG 是什么？',
        content: [
          '**SearXNG 是一款免费的元搜索引擎：它把你的查询同时发送给众多搜索服务，再把答案合并成一个结果列表。** 文档将其描述为“不被跟踪的搜索”，在 [searx.space](https://searx.space) 上列出约 70 个公开实例，并称它于 2021 年中期作为 searx 项目的分支起步。',
          '对本地 AI 来说，它的价值在于搜索 API：前端请求 `/search?q=...&format=json`，即可得到能交给模型的结构化结果。软件本身不含模型，也不生成答案，所以可把它用作搜索步骤的 Vane、Farfalle 等答案引擎，会在其上再叠加模型。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**SearXNG 以容器镜像和安装脚本的形式分发，没有桌面安装程序，因此需要终端。**',
        ],
        columns: [
          '选项',
          '获取方式',
        ],
        rows: [
          {
            '选项': '容器镜像',
            '获取方式': '[Docker Hub 上的 searxng/searxng](https://hub.docker.com/r/searxng/searxng)，镜像源 `ghcr.io/searxng/searxng`',
          },
          {
            '选项': 'Docker Compose（推荐）',
            '获取方式': '[安装指南](https://docs.searxng.org/admin/installation-docker.html)：运行 `docker compose up -d`',
          },
          {
            '选项': '官网',
            '获取方式': '[docs.searxng.org](https://docs.searxng.org)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '[“About”页面](https://docs.searxng.org/user/about.html)；未找到独立的政策文件',
          },
          {
            '选项': '源代码',
            '获取方式': '[github.com/searxng/searxng](https://github.com/searxng/searxng)，AGPL-3.0',
          },
          {
            '选项': '公开实例',
            '获取方式': '[searx.space](https://searx.space) 列有公开实例；许多实例关闭了 JSON 格式',
          },
        ],
        note: '核查的版本：2026.10.24-ef0ec03da，为 2026 年 10 月 24 日 Docker Hub 上最新的标签。SearXNG 是滚动发布，版本号基于 git 提交，仓库没有 GitHub Releases。文档未列出硬件要求，也未列出宿主操作系统。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据项目的容器指南和 Open WebUI 关于 SearXNG 的文档；PromptQuorum 没有实际执行。**',
        ],
        numberedItems: [
          {
            title: '启动容器',
            whyItMatters: '从仓库下载 compose 文件和 `.env.example`，把后者复制为 `.env`，然后运行 `docker compose up -d`；该组合还会启动 Valkey 数据库，默认使用 8080 端口。',
          },
          {
            title: '启用 JSON 格式',
            whyItMatters: '`settings.yml` 中默认的 `search.formats` 列表只有 `html`；添加 `json` 后重启。请求未启用的格式会返回 403 Forbidden。',
          },
          {
            title: '测试 API',
            whyItMatters: '在你的实例上请求 `/search?q=searxng&format=json`，例如用 curl，确认能返回结构化结果。',
          },
          {
            title: '连接前端',
            whyItMatters: '在 Open WebUI 中，把网页搜索引擎设为 searxng，把查询 URL 设为你实例的 `/search` 地址。该指南是社区贡献，Open WebUI 团队并未提供官方支持，并提醒网页搜索需要在每个聊天中单独开启。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**文档称，SearXNG 不存储用户信息，不生成用户画像，也不向任何第三方共享任何内容。** 这些是项目自己的说法；“About”页面没有说明实例运营者能看到什么，对在意这一点的人，它的回答是自己运行该软件。',
          '在自托管实例上，运营者就是你，所以悬而未决的是出站一侧：“About”页面称查询会与其他平台上的搜索混合，也就是说上游引擎仍会收到。默认设置文件还把 DuckDuckGo 设为自动补全后端；把该项留空即可关闭。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是项目的声明，而非审计结果。PromptQuorum 没有检查网络流量或日志，哪些查询会离开你的机器取决于你启用的引擎。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**Open WebUI 及类似前端的用户**，想通过自己掌控的实例为本地模型提供网页搜索。',
          '**已在用 Docker 的自托管用户**，能自如编辑 YAML 文件。',
          '**开发智能体的开发者**，需要一个可在代码中调用的 JSON 搜索端点。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际隐私表现。** “不跟踪、不共享”的说法未经审计，哪些上游引擎能看到你的查询取决于你保持启用的引擎。',
          '**对 LLM 的结果质量。** PromptQuorum 没有把 SearXNG 的结果与其他搜索服务比较，也没有测量模型使用它们后是否回答得更好。',
          '**抗封锁能力。** 默认设置会在出现验证码或拒绝访问后暂停某个引擎一段时间（验证码为 24 小时），因此引擎可能从结果中消失；发生频率未测量。',
          '**硬件与操作系统。** 文档没有给出内存或 CPU 要求，也未列出宿主操作系统；目录条目中的平台是根据容器方式推断的。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: [
          '应用',
          '平台',
          '价格 / 许可证',
          '主要区别',
        ],
        rows: [
          {
            '应用': '[Vane](/zh/power-local-llm/vane-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '由 LLM 撰写带引用答案的答案引擎；其目录条目描述了自托管的 SearXNG 后端，因此它建立在 SearXNG 之上，而不是取代它',
          },
          {
            '应用': '[Farfalle](/zh/power-local-llm/farfalle-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / Apache-2.0',
            '主要区别': '类 Perplexity 的 AI 搜索应用，据其评测，搜索步骤可使用 SearXNG、Tavily、Serper 或 Bing',
          },
          {
            '应用': '[Local Deep Research](/zh/power-local-llm/local-deep-research-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '跨 arXiv、PubMed、网页和你自己文档的多步骤研究智能体；是研究工具，不是搜索后端',
          },
          {
            '应用': '[Web Search MCP](/zh/power-local-llm/web-search-mcp-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '在 LM Studio 等工具中为本地 LLM 提供实时网页搜索和页面内容的 MCP 服务器',
          },
        ],
        note: 'Vane 和 Farfalle 可以把 SearXNG 用作搜索步骤，而不是与之竞争；请在各应用自己的条目中确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '可以用公开的 SearXNG 实例，而不是自己托管吗？',
            a: '往往不行：API 文档指出，许多公开实例关闭了 JSON 格式并返回 403，而且公开实例会让你的查询经过其运营者，“About”页面没有提供运营者的任何细节。可到 [searx.space](https://searx.space) 的列表中查找。',
          },
          {
            q: 'SearXNG 需要 GPU 或语言模型吗？',
            a: '不需要。它不含模型，文档也没有给出硬件要求；如果用到 GPU，那是读取结果的另一个独立 LLM 在用。',
          },
          {
            q: '如何更新或固定版本？',
            a: '拉取新镜像并重启，指南建议先查看 compose 模板的变更。compose 文件从 `SEARXNG_VERSION` 变量读取镜像标签，默认值为 latest，因此指定带日期的标签即可固定某个构建。',
          },
          {
            q: '个人实例需要启用限流器吗？',
            a: '不一定：它默认关闭，并需要 Valkey 数据库，而推荐的 compose 文件已经会启动它。除非设置了 `SEARXNG_HOST`，否则 compose 文件会在所有网络接口上发布端口；把实例暴露到本机之外前，请先检查这一设置。',
          },
          {
            q: '能通过 Tor 使用，或在没有 JavaScript 时使用吗？',
            a: '文档称它可通过 Tor 使用，JavaScript 和 Cookie 都是可选的；PromptQuorum 两者都未测试。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'SearXNG 是一种历史较长、维护活跃且免费的方式，可让本地 LLM 前端通过你自己托管的服务获取最新网页结果。另一方面，它靠容器加 YAML 部署而非安装程序，JSON 输出需要手动开启，查询仍会到达上游引擎，其隐私和质量方面的说法在此无法核实。它适合已在运行 Open WebUI 或类似工具、熟悉 Docker 的用户；需要严格隐私保证的人，应自行检查配置和所用引擎，而不是依赖项目的概述。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[SearXNG 文档](https://docs.searxng.org) — 项目介绍、支持的服务与实例，2026 年 10 月 24 日核查。',
          '[关于 SearXNG](https://docs.searxng.org/user/about.html) — 隐私相关说明，2026 年 10 月 24 日核查。',
          '[容器安装指南](https://docs.searxng.org/admin/installation-docker.html) — 镜像名称、compose 部署与更新，2026 年 10 月 24 日核查。',
          '[搜索 API 文档](https://docs.searxng.org/dev/search_api.html) — format 参数以及未启用格式返回的 403，2026 年 10 月 24 日核查。',
          '[GitHub 上的 SearXNG](https://github.com/searxng/searxng) — 许可证、默认设置和 compose 文件，最近一次推送为 2026 年 10 月 24 日。',
          '[Docker Hub 上的 searxng/searxng](https://hub.docker.com/r/searxng/searxng/tags) — 带日期的容器标签，最新为 2026.10.24-ef0ec03da。',
          '[Open WebUI 的 SearXNG 指南](https://docs.openwebui.com/features/chat-conversations/web-search/providers/searxng) — json 要求与查询 URL，2026 年 10 月 24 日核查。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Vane 评测](/zh/power-local-llm/vane-review) — 可建立在 SearXNG 后端之上的答案引擎。',
          '[Farfalle 评测](/zh/power-local-llm/farfalle-review) — 可把 SearXNG 作为搜索提供方的开源 AI 搜索应用。',
          '[Local Deep Research 评测](/zh/power-local-llm/local-deep-research-review) — 面向本地模型的多步骤研究智能体。',
          '[Web Search MCP 评测](/zh/power-local-llm/web-search-mcp-review) — 通过 MCP 为本地 LLM 提供实时网页搜索。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'RAG & Document Chat',
    heroImage: '/images/searxng-review-hero-ko.webp',
    title: 'SearXNG 리뷰: 로컬 LLM용 셀프호스팅 검색 백엔드',
    seoTitle: 'SearXNG 리뷰: 로컬 LLM용 셀프호스팅 검색 백엔드',
    intro: 'SearXNG는 직접 운영하는 무료 오픈소스 메타 검색 엔진으로, Open WebUI 같은 로컬 LLM 프런트엔드가 웹 검색 백엔드로 호출할 수 있습니다. 이 리뷰는 그 역할만 다룹니다. AI 앱이 아니며 언어 모델도 포함하지 않습니다. 프로젝트 문서, GitHub 저장소, Docker Hub 태그 목록을 바탕으로 2026년 10월 24일에 확인했으며, PromptQuorum이 직접 실행해 보지는 않았습니다.',
    metaDescription: 'SearXNG 리뷰: Open WebUI 같은 로컬 LLM 프런트엔드가 웹 검색에 쓰는 프라이버시 중심 셀프호스팅 메타 검색 엔진. AGPL-3.0, Docker 구성, 직접 테스트하지 않음.',
    twitterDescription: 'SearXNG 리뷰: 많은 로컬 LLM 웹 검색 구성의 바탕이 되는 셀프호스팅 검색 백엔드와, 프라이버시·설치·JSON 설정에 대해 문서가 확인해 주는 내용.',
    audience: '직접 호스팅하는 서비스를 통해 Open WebUI 등에서 웹 검색을 쓰고 싶으며, SearXNG가 무엇을 보장하고 보장하지 않는지 알아야 하는 로컬 LLM 사용자.',
    readTime: '6분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'SearXNG 리뷰',
    targetKeywords: [
      'searxng 리뷰',
      'searxng 로컬 llm 웹 검색',
      'searxng open webui',
      '셀프호스팅 메타 검색 엔진',
      '로컬 llm 비공개 웹 검색',
      'searxng docker 설치',
      'searxng json api',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**SearXNG(빌드 2026.10.24-ef0ec03da, 2026년 10월 24일 업데이트)는 로컬 LLM 프런트엔드가 최신 웹 결과를 조회할 수 있는 셀프호스팅 메타 검색 엔진입니다.** AGPL-3.0 라이선스로 무료이며, 자체 AI 모델은 없고 컨테이너로 실행됩니다. 여기 적힌 모든 내용은 프로젝트 문서, 저장소, Docker Hub 태그에서 나왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'SearXNG를 쓰면 로컬 LLM의 웹 검색이 비공개가 됩니까?',
        answer: '부분적으로 그렇습니다. 프로젝트에 따르면 사용자를 추적하거나 프로파일링하지 않고 제3자와 아무것도 공유하지 않으며, 내 컴퓨터에서 실행하면 외부 운영자가 검색어를 볼 수 없습니다. 다만 각 쿼리는 SearXNG가 모으는 상위 검색 엔진으로 전달되므로 그 엔진들은 여전히 쿼리를 받습니다.',
        bullets: [
          '결과를 JSON으로 반환해 프런트엔드가 모델에 전달할 수 있고, 브라우저 화면도 있습니다.',
          '최대 261개의 검색 서비스를 모아 보여 줍니다.',
          'JSON 형식은 기본적으로 꺼져 있어 직접 켜야 합니다.',
          'Docker 또는 Podman 컨테이너로 실행되며 데스크톱 설치 프로그램은 없습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'SearXNG란?',
        anchor: 'what-is-searxng',
      },
      {
        label: '입수 방법',
        anchor: 'get-it',
      },
      {
        label: '시작하는 방법',
        anchor: 'getting-started',
      },
      {
        label: '데이터 흐름과 개인정보',
        anchor: 'privacy',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 사항',
        anchor: 'who-should-not-use',
      },
      {
        label: '경쟁 제품과 대안',
        anchor: 'vs-alternatives',
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq',
      },
      {
        label: '결론',
        anchor: 'verdict',
      },
      {
        label: '출처',
        anchor: 'sources',
      },
      {
        label: '관련 글',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SearXNG는 직접 호스팅하는 오픈소스 메타 검색 엔진으로, 로컬 LLM 프런트엔드가 웹 검색 백엔드로 사용할 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '여러 검색 엔진에 사용자를 대신해 질의하고 결과를 웹 페이지나 JSON으로 돌려주므로, 로컬 모델이 직접 호스팅한 서비스를 통해 최신 웹 결과를 읽을 수 있습니다.',
          },
        ],
        items: [
          '유지 관리: 롤링 릴리스이며 커밋과 컨테이너 빌드가 2026년 10월 24일까지 이어집니다. 저장소에는 GitHub 릴리스가 없어 방치 프로젝트 경고는 해당되지 않습니다.',
          '라이선스와 비용: AGPL-3.0, 무료.',
          '역할: AI 앱이 아닙니다. 검색 결과를 제공할 뿐이며 모델과 채팅 화면은 다른 소프트웨어가 맡습니다.',
          '설치: Docker 또는 Podman과 YAML 설정 파일 편집이 필요해 터미널을 사용합니다.',
          '개발 주체: 2021년 중반 searx의 포크로 시작한 커뮤니티 프로젝트입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 문서, 저장소, 컨테이너 태그를 바탕으로 2026년 10월 24일에 확인했습니다. PromptQuorum은 SearXNG를 설치하지 않았고 결과 품질도 측정하지 않았으므로, 개인정보 관련 내용은 프로젝트 자체의 설명입니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-searxng',
        title: 'SearXNG란?',
        content: [
          '**SearXNG는 무료 메타 검색 엔진으로, 하나의 쿼리를 여러 검색 서비스에 동시에 보내고 답변을 하나의 결과 목록으로 합칩니다.** 문서는 추적 없는 검색이라고 설명하고, [searx.space](https://searx.space)에 약 70개의 공개 인스턴스가 있다고 하며, 2021년 중반 searx 프로젝트의 포크로 시작했다고 밝힙니다.',
          '로컬 AI에서의 가치는 검색 API입니다. 프런트엔드가 `/search?q=...&format=json`을 요청하면 모델에 넘길 수 있는 구조화된 결과를 받습니다. 소프트웨어 자체에는 모델도 답변 생성 기능도 없으므로, 이를 검색 단계로 쓸 수 있는 Vane이나 Farfalle 같은 답변 엔진이 그 위에 모델을 얹습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**SearXNG는 컨테이너 이미지와 설치 스크립트로 배포되며 데스크톱 설치 프로그램이 없으므로 터미널이 필요합니다.**',
        ],
        columns: [
          '옵션',
          '입수 방법',
        ],
        rows: [
          {
            '옵션': '컨테이너 이미지',
            '입수 방법': '[Docker Hub의 searxng/searxng](https://hub.docker.com/r/searxng/searxng), 미러는 `ghcr.io/searxng/searxng`',
          },
          {
            '옵션': 'Docker Compose(권장)',
            '입수 방법': '[설치 가이드](https://docs.searxng.org/admin/installation-docker.html): `docker compose up -d` 실행',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[docs.searxng.org](https://docs.searxng.org)',
          },
          {
            '옵션': '개인정보 처리방침',
            '입수 방법': '["About" 페이지](https://docs.searxng.org/user/about.html). 별도 방침 문서는 찾지 못했습니다',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[github.com/searxng/searxng](https://github.com/searxng/searxng), AGPL-3.0',
          },
          {
            '옵션': '공개 인스턴스',
            '입수 방법': '[searx.space](https://searx.space)에 목록이 있으며, 상당수는 JSON 형식을 꺼 두었습니다',
          },
        ],
        note: '확인한 버전: 2026.10.24-ef0ec03da로, 2026년 10월 24일 기준 Docker Hub의 최신 태그입니다. SearXNG는 롤링 릴리스로 버전 번호가 git 커밋을 기준으로 하며, 저장소에는 GitHub 릴리스가 없습니다. 문서에는 하드웨어 요구 사항도 호스트 운영체제도 나와 있지 않습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 프로젝트의 컨테이너 가이드와 SearXNG에 관한 Open WebUI 문서를 따른 것이며, PromptQuorum이 직접 실행하지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '컨테이너 시작',
            whyItMatters: '저장소에서 compose 파일과 `.env.example`을 받아 후자를 `.env`로 복사한 뒤 `docker compose up -d`를 실행합니다. 이 스택은 Valkey 데이터베이스도 함께 띄우며 기본 포트는 8080입니다.',
          },
          {
            title: 'JSON 형식 켜기',
            whyItMatters: '`settings.yml`의 기본 `search.formats` 목록에는 `html`만 있습니다. `json`을 추가하고 재시작하세요. 켜지지 않은 형식을 요청하면 403 Forbidden이 반환됩니다.',
          },
          {
            title: 'API 테스트',
            whyItMatters: '내 인스턴스에서 예를 들어 curl로 `/search?q=searxng&format=json`을 요청해 구조화된 결과가 오는지 확인합니다.',
          },
          {
            title: '프런트엔드 연결',
            whyItMatters: 'Open WebUI에서 웹 검색 엔진을 searxng로, 쿼리 URL을 내 인스턴스의 `/search` 주소로 설정합니다. 이 가이드는 커뮤니티 기여물로 Open WebUI 팀이 공식 지원하지 않으며, 웹 검색은 채팅마다 켜야 한다고 안내합니다.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**문서에 따르면 SearXNG는 사용자 정보를 저장하지 않고, 프로필을 만들지 않으며, 제3자와 아무것도 공유하지 않습니다.** 이는 프로젝트 자체의 설명입니다. "About" 페이지는 인스턴스 운영자가 무엇을 볼 수 있는지 설명하지 않으며, 신경 쓰이는 사람에게는 직접 운영하라고 답합니다.',
          '셀프호스팅 인스턴스에서는 운영자가 본인이므로 남는 문제는 외부로 나가는 쪽입니다. "About" 페이지는 쿼리가 다른 플랫폼의 검색과 섞인다고 하므로 상위 엔진은 여전히 쿼리를 받습니다. 기본 설정 파일은 자동 완성 백엔드로 DuckDuckGo를 지정하고 있으며, 이 설정을 비워 두면 꺼집니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트의 선언일 뿐 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽이나 로그를 점검하지 않았으며, 어떤 쿼리가 내 컴퓨터를 벗어나는지는 활성화한 엔진에 달려 있습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Open WebUI 등 프런트엔드 사용자**로, 직접 관리하는 인스턴스에서 로컬 모델용 웹 검색을 쓰고 싶은 분.',
          '**이미 Docker를 쓰는 셀프호스팅 사용자**로, YAML 파일 편집이 부담스럽지 않은 분.',
          '**에이전트를 만드는 개발자**로, 코드에서 호출할 JSON 검색 엔드포인트가 필요한 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 개인정보 보호 수준.** 추적·공유 없음이라는 설명은 감사되지 않았으며, 어떤 상위 엔진이 쿼리를 보는지는 켜 둔 엔진에 달려 있습니다.',
          '**LLM용 결과 품질.** PromptQuorum은 SearXNG 결과를 다른 검색 제공자와 비교하지 않았고, 모델이 더 잘 답하는지도 측정하지 않았습니다.',
          '**차단에 대한 내성.** 기본 설정은 CAPTCHA나 접근 거부 후 엔진을 일정 시간 중지합니다(CAPTCHA는 24시간). 그래서 엔진이 결과에서 빠질 수 있으나 빈도는 측정하지 않았습니다.',
          '**하드웨어와 운영체제.** 문서에는 RAM·CPU 요구 사항도 호스트 운영체제도 없으며, 디렉터리 항목의 플랫폼은 컨테이너 방식에서 추정한 것입니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '핵심 차이점',
        ],
        rows: [
          {
            '앱': '[Vane](/ko/power-local-llm/vane-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이점': 'LLM이 출처가 달린 답변을 써 주는 답변 엔진. 디렉터리 항목은 셀프호스팅 SearXNG 백엔드를 설명하므로 SearXNG를 대체하지 않고 그 위에 구축됩니다',
          },
          {
            '앱': '[Farfalle](/ko/power-local-llm/farfalle-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / Apache-2.0',
            '핵심 차이점': '리뷰에 따르면 검색 단계에 SearXNG, Tavily, Serper, Bing을 쓸 수 있는 Perplexity 스타일 AI 검색 앱',
          },
          {
            '앱': '[Local Deep Research](/ko/power-local-llm/local-deep-research-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이점': 'arXiv, PubMed, 웹, 내 문서를 가로지르는 다단계 리서치 에이전트. 검색 백엔드가 아닌 리서치 도구',
          },
          {
            '앱': '[Web Search MCP](/ko/power-local-llm/web-search-mcp-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이점': 'LM Studio 같은 도구에서 로컬 LLM에 실시간 웹 검색과 페이지 내용을 제공하는 MCP 서버',
          },
        ],
        note: 'Vane과 Farfalle은 SearXNG와 경쟁하기보다 검색 단계로 쓸 수 있습니다. 각 앱의 최신 가격·라이선스·플랫폼은 해당 앱의 항목에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '직접 호스팅하는 대신 공개 SearXNG 인스턴스를 써도 되나요?',
            a: '대개는 어렵습니다. API 문서에 따르면 많은 공개 인스턴스가 JSON 형식을 꺼 두고 403을 반환하며, 공개 인스턴스에서는 쿼리가 운영자를 거치는데 "About" 페이지에는 운영자에 대한 세부 정보가 없습니다. 찾아볼 곳은 [searx.space](https://searx.space) 목록입니다.',
          },
          {
            q: 'SearXNG에 GPU나 언어 모델이 필요합니까?',
            a: '아니요. 모델이 포함되어 있지 않고 문서에도 하드웨어 요구 사항이 없습니다. GPU를 쓴다면 결과를 읽는 별도의 LLM이 씁니다.',
          },
          {
            q: '업데이트나 버전 고정은 어떻게 하나요?',
            a: '새 이미지를 받아 스택을 다시 시작합니다. 가이드는 먼저 compose 템플릿의 변경 사항을 검토하라고 권합니다. compose 파일은 이미지 태그를 `SEARXNG_VERSION` 변수에서 읽고 기본값은 latest이므로, 날짜가 붙은 태그를 지정하면 빌드를 고정할 수 있습니다.',
          },
          {
            q: '개인용 인스턴스에도 리미터가 필요합니까?',
            a: '꼭 그렇지는 않습니다. 기본적으로 꺼져 있고 Valkey 데이터베이스가 필요한데, 권장 compose 파일이 이미 이를 띄웁니다. compose 파일은 `SEARXNG_HOST`를 설정하지 않으면 모든 인터페이스에 포트를 공개하므로, 내 컴퓨터 밖으로 노출하기 전에 이 설정을 확인하세요.',
          },
          {
            q: 'Tor나 JavaScript 없이도 동작합니까?',
            a: '문서에 따르면 Tor로 사용할 수 있고 JavaScript와 쿠키는 선택 사항입니다. PromptQuorum은 둘 다 테스트하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'SearXNG는 직접 호스팅하는 서비스로 로컬 LLM 프런트엔드에 최신 웹 결과를 무료로 제공하는, 오래 이어져 온 활발히 관리되는 방법입니다. 반면 설치는 설치 프로그램이 아니라 컨테이너와 YAML 편집이고, JSON 출력은 직접 켜야 하며, 쿼리는 여전히 상위 엔진에 도달하고, 개인정보와 품질에 관한 주장은 여기서 확인하지 못했습니다. 이미 Open WebUI 같은 도구를 쓰고 Docker에 익숙한 사용자에게 적합하며, 엄격한 개인정보 보장이 필요하다면 프로젝트의 요약에 의존하지 말고 설정과 사용 중인 엔진을 직접 살펴보시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[SearXNG 문서](https://docs.searxng.org) — 프로젝트 설명, 지원 서비스와 인스턴스, 2026년 10월 24일 확인.',
          '[SearXNG 소개](https://docs.searxng.org/user/about.html) — 개인정보 관련 설명, 2026년 10월 24일 확인.',
          '[컨테이너 설치 가이드](https://docs.searxng.org/admin/installation-docker.html) — 이미지 이름, compose 구성, 업데이트 방법, 2026년 10월 24일 확인.',
          '[검색 API 문서](https://docs.searxng.org/dev/search_api.html) — format 매개변수와 켜지지 않은 형식에 대한 403, 2026년 10월 24일 확인.',
          '[GitHub의 SearXNG](https://github.com/searxng/searxng) — 라이선스, 기본 설정, compose 파일, 마지막 푸시는 2026년 10월 24일.',
          '[Docker Hub의 searxng/searxng](https://hub.docker.com/r/searxng/searxng/tags) — 날짜가 붙은 컨테이너 태그, 최신은 2026.10.24-ef0ec03da.',
          '[SearXNG용 Open WebUI 가이드](https://docs.openwebui.com/features/chat-conversations/web-search/providers/searxng) — json 요구 사항과 쿼리 URL, 2026년 10월 24일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Vane 리뷰](/ko/power-local-llm/vane-review) — SearXNG 백엔드 위에 구축할 수 있는 답변 엔진.',
          '[Farfalle 리뷰](/ko/power-local-llm/farfalle-review) — SearXNG를 검색 제공자로 쓸 수 있는 오픈소스 AI 검색 앱.',
          '[Local Deep Research 리뷰](/ko/power-local-llm/local-deep-research-review) — 로컬 모델을 위한 다단계 리서치 에이전트.',
          '[Web Search MCP 리뷰](/ko/power-local-llm/web-search-mcp-review) — MCP를 통한 로컬 LLM용 실시간 웹 검색.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}

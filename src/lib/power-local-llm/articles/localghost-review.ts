// LocalGhost Review: A Personal AI Server You Host Yourself
// Slug: localghost-review
// Companion to: odysseus-review, khoj-ai-second-brain-review, second-me-review-2026
// Sources: localghost.ai (about, setup and privacy pages), the LocalGhostDao/localghost GitHub repository (README, SECURITY.md,
// RELEASES.md) and its v0.0.7 release page and asset list, all checked 2026-10-24 — no hands-on testing.
// An official website exists (www.localghost.ai) and has a privacy page, so the Get It table carries Website and Privacy policy rows.
// Prices: the software is free; the only figure is the project's own GBP parts estimate for its reference box, quoted as the project's
// figure in every locale and never converted. No founder badge, no founder quote, no hands-on test.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/localghost-review-hero-en.webp',
    title: 'LocalGhost Review: A Personal AI Server You Host Yourself',
    seoTitle: 'LocalGhost Review: A Private Personal AI You Host',
    intro: 'LocalGhost is an MIT-licensed personal AI system: a set of server programs on a Debian machine you own that keep your photos, notes, voice notes and health data and read them with local models, plus an Android app as the only way in. This review reflects the project\'s website, GitHub repository and v0.0.7 release as checked on 24 October 2026.',
    metaDescription: 'LocalGhost review: free, MIT-licensed personal AI server for a Debian box you own, with an Android app. Setup needs, privacy claims, open gaps.',
    twitterDescription: 'LocalGhost review: an open-source personal AI that runs on a Debian machine you own and is used from an Android phone. Needs, claims and open questions.',
    audience: 'Self-hosters and homelab owners who want to know what LocalGhost needs, what it costs, how hard it is to set up and which of its privacy and memory claims the sources leave unconfirmed.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalGhost review',
    targetKeywords: [
      'localghost review',
      'self-hosted personal ai',
      'private ai memory on your own hardware',
      'localghost android app',
      'open source personal ai server',
      'localghost vs khoj'
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX GPU',
      'Debian 13 PC with TPM 2.0',
      'Android 15 phone'
    ],
    leadAnswerBlock: '**LocalGhost is a free personal AI that runs as a group of server programs on your own Debian computer and is used only through an Android app.** It is a very young one-person project, its first release is from 2 October 2026, and PromptQuorum has not installed or tested it.',
    quickAnswerTop: {
      en: {
        question: 'What does LocalGhost actually do?',
        answer: 'Per the project, it collects your photos, videos, location trail, notes, voice notes and health data on your own box and turns them into captions, daily stories, memories and chat answers.',
        bullets: [
          'The language and vision model is Gemma 4 12B served by llama.cpp; voice notes are transcribed with whisper.cpp.',
          'The Android app is the only client: there is no iPhone app, no desktop app and no web interface.',
          'There is no account, no analytics and no cloud service that holds your data, according to the README.',
          'Hardware is not for sale yet; you install it yourself on a machine you already have.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer'
      },
      {
        label: 'What Is LocalGhost?',
        anchor: 'what-is-localghost'
      },
      {
        label: 'Get It',
        anchor: 'get-it'
      },
      {
        label: 'What You Need',
        anchor: 'requirements'
      },
      {
        label: 'Pricing',
        anchor: 'pricing'
      },
      {
        label: 'How to Get Started',
        anchor: 'getting-started'
      },
      {
        label: 'What Wisp 0.0.7 Includes',
        anchor: 'key-features'
      },
      {
        label: 'Privacy and Network Use',
        anchor: 'privacy'
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use'
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use'
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives'
      },
      {
        label: 'Frequently Asked Questions',
        anchor: 'faq'
      },
      {
        label: 'Verdict',
        anchor: 'verdict'
      },
      {
        label: 'Sources',
        anchor: 'sources'
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalGhost is an open-source personal AI that keeps a private memory of your life on hardware you control.'
          },
          {
            type: 'plain-terms',
            text: 'You set up the server yourself, install an Android app, scan a QR code, and the phone then talks only to your own box.'
          }
        ],
        items: [
          'Maintenance: seven releases (0.0.1 to 0.0.7) appeared between 2 and 23 October 2026 and the repository dates from December 2025, so it is active; no stale-project warning applies.',
          'License: MIT; the software is free and has no subscription.',
          'Setup: a multi-step terminal procedure on Debian 13, not a double-click installer.',
          'Maturity: the maker lists a decoy volume, peer-to-peer backup and hardware as not built.',
          'Basis: the website, README and release page, read on 24 October 2026, with no hands-on testing.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not installed, tested or benchmarked LocalGhost. Statements about privacy, memory quality and speed below are the project\'s own.'
          }
        ]
      },
      overview: {
        id: 'what-is-localghost',
        title: 'What Is LocalGhost?',
        content: [
          '**LocalGhost is a personal AI system made of eleven small Go programs, called daemons, that each do one job on your own machine, with an Android app as the only way in.** It is published by LocalGhost.ai Ltd, a company registered in England and Wales, and built by its founder Vlad Cealicu; the project began in December 2025.',
          'The daemons take in photos, videos, location, notes, voice notes and health data, describe and index them with local models, write a short story for each day and distil memories from them. A separate daemon is meant to argue with you, and one handles encryption and the unlock. The model engine is llama.cpp, the README names Gemma 4 12B for language and vision and EmbeddingGemma for search, and the code is at [LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost).'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**LocalGhost has two parts you download from GitHub Releases: a signed APK for the phone and a Linux server archive for the box.** There is no app store listing and no hosted version.'
        ],
        columns: [
          'Part',
          'Where to get it'
        ],
        rows: [
          {
            'Part': 'Android app (phone)',
            'Where to get it': '[localghost-app-0.0.7.apk](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-app-0.0.7.apk) (signed; Android 15 or newer)'
          },
          {
            'Part': 'Server (Debian 13, x86-64)',
            'Where to get it': '[localghost-server-0.0.7-linux-amd64.tar.gz](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-server-0.0.7-linux-amd64.tar.gz) plus [SHA256SUMS](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/SHA256SUMS) and its signature'
          },
          {
            'Part': 'Setup guide',
            'Where to get it': '[localghost.ai/setup](https://www.localghost.ai/setup) (step by step, with a five-move short version)'
          },
          {
            'Part': 'Website',
            'Where to get it': '[www.localghost.ai](https://www.localghost.ai)'
          },
          {
            'Part': 'Privacy policy',
            'Where to get it': '[localghost.ai/privacy](https://www.localghost.ai/privacy) (updated 23 October 2026)'
          },
          {
            'Part': 'Source code',
            'Where to get it': '[github.com/LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)'
          },
          {
            'Part': 'Security reports',
            'Where to get it': '[SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md) (PGP-encrypted email)'
          }
        ],
        note: 'Version reviewed: 0.0.7 ("wisp"), published on 23 October 2026 per the GitHub release page, which is the latest upstream update at the time of checking. The server is a terminal setup on Debian 13 that needs a TPM switched on in the BIOS and takes an hour or two per the guide; the phone app is installed from the APK file, not from Google Play.'
      },
      requirements: {
        id: 'requirements',
        title: 'What You Need',
        content: [
          '**LocalGhost needs an x86-64 computer running Debian 13 with a TPM 2.0 chip, an empty disk or a 20 GB file for the encrypted volume, and an Android 15 or newer phone.** An NVIDIA graphics card is optional but speeds up the models.'
        ],
        columns: [
          'Item',
          'Requirement per the setup guide'
        ],
        rows: [
          {
            'Item': 'Computer',
            'Requirement per the setup guide': 'x86-64, Debian 13, terminal at least 57 by 35 characters'
          },
          {
            'Item': 'TPM',
            'Requirement per the setup guide': 'TPM 2.0 (firmware TPM is fine); a software tier exists without one'
          },
          {
            'Item': 'Volume',
            'Requirement per the setup guide': 'Empty disk, or a file of 20 GB or more; not a network share'
          },
          {
            'Item': 'Graphics card',
            'Requirement per the setup guide': 'Optional NVIDIA card; the project\'s box has 12 GB'
          },
          {
            'Item': 'Phone',
            'Requirement per the setup guide': 'Android 15 or newer; Google Play services not needed'
          },
          {
            'Item': 'Network',
            'Requirement per the setup guide': 'Internet during setup (about 12 GB from the project\'s mirror)'
          }
        ],
        note: 'The guide says the same box describes about 24 photos an hour on the CPU alone and that overnight memory work on a heavy day takes about two hours on a 12 GB card against more than a day on the CPU; the maker reports about 53 tokens per second for Gemma 4 12B on that card. PromptQuorum has not reproduced these figures. Reaching the box away from home also needs a domain and a forwarded port.'
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**The software is free: the project states an MIT license, no subscription, no account and no license server.**'
        ],
        columns: [
          'Item',
          'Cost'
        ],
        rows: [
          {
            'Item': 'Server and Android app',
            'Cost': 'Free (MIT license)'
          },
          {
            'Item': 'Your own hardware',
            'Cost': 'Whatever the machine costs you'
          },
          {
            'Item': 'Reference build (project\'s estimate)',
            'Cost': 'About £1,130 in parts, June 2026'
          },
          {
            'Item': 'Pre-built boxes',
            'Cost': 'Not on sale; price not set'
          }
        ],
        note: 'Read from the About page on 24 October 2026. The project says a future box would be sold at parts and assembly plus a 30 percent margin, and that optional future daemons may be sold as one-time packages; none of this exists yet. The repository also lists a cryptocurrency address for donations.'
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the project\'s setup guide; PromptQuorum has not run them.**'
        ],
        numberedItems: [
          {
            title: 'Prepare the Debian machine',
            whyItMatters: 'Install Debian 13, switch the TPM on in the BIOS and install sudo, nginx, curl and gpg. If there is an NVIDIA card, install its driver and CUDA yourself first.'
          },
          {
            title: 'Install the app on the phone first',
            whyItMatters: 'The guide says to do this before the box draws its enrolment QR code, because the code holds the phone\'s certificate and should be scanned the moment it appears.'
          },
          {
            title: 'Download and verify the server release',
            whyItMatters: 'Fetch the archive, SHA256SUMS and its signature, import the project\'s PGP key and check the signature and hashes before unpacking.'
          },
          {
            title: 'Run the installer on the box',
            whyItMatters: 'The install script asks for a disk or a file for the volume, the TPM seal and your PINs (a main PIN and an optional wipe PIN), then draws a QR code.'
          },
          {
            title: 'Scan the QR code and unlock',
            whyItMatters: 'Scanning is the enrolment. Then run the update script to fetch Wikipedia and anything newer; a large photo library takes the box a few days to index.'
          }
        ]
      },
      features: {
        id: 'key-features',
        title: 'What Wisp 0.0.7 Includes',
        content: [
          '**The project lists eleven daemons in this release, and every item below comes from its README or About page.**'
        ],
        items: [
          '**Capture.** Photos and videos are archived as they are and captioned and tagged by the model; notes, an evening check-in and voice notes become journal entries, with voice transcribed on the box.',
          '**Memory.** Chats, notes and voice notes are distilled into memories you can edit or delete, and a daily story is written from photos, trail, health data and the check-in.',
          '**Search and chat.** A search index covers the archive, and the chat answers from your own context; when it cannot, the phone runs a web search and names its sources.',
          '**Recall.** A morning reflection on an old memory and a suggestion for a nearby place.',
          '**Critic.** One of a planned 28 detectors runs: it says when you are talking to the box twice as much as before.',
          '**Security.** A LUKS2 encrypted volume sealed to the TPM, a phone certificate renewed while in use, a wipe PIN that destroys the key and a lock-out after wrong PINs.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The project says your data stays on the box, with no account, no analytics, no crash reporting and no server of its own that holds anything of yours.** The README adds that if a request exists that its list does not name, that is a bug and a security report.',
          'Per the privacy page, the box asks the internet only for public data such as prices, news, weather model files and updates from the project\'s signed mirror, with nothing of yours in the request. When a chat question needs the web, the phone sends the question\'s words to DuckDuckGo, or to Brave with your own key. The website and mirror keep no access logs, and a mail relay for the optional box address keeps messages sealed to the box\'s key until fetched.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s statements. PromptQuorum has not audited the code or the network traffic, and the README says the box certificate authority key sits on the system disk in this release.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Homelab and NAS owners** with a Debian machine, comfortable with a terminal and a TPM setting.',
          '**Android users** who want photos, notes and health data held on a box they control.',
          '**Self-hosters and Go developers** who want to read, test or extend the code.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run LocalGhost, so memory quality, captions, speed and battery or storage impact are untested.',
          '**Privacy and security.** The no-telemetry statement, the signed-update chain and the security audit the README mentions were not checked against code or traffic.',
          '**Maturity.** The README says one box runs it with one phone and no outside users are listed; a decoy volume, peer-to-peer backup and a hardware product are not built.',
          '**Platform reach.** There is no iPhone, desktop or web client, and the server runs only on Linux with Debian 13 documented.',
          '**Team.** The About page says it is one founder building with AI tooling and gives no response-time promise for support.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: [
          'App',
          'Platforms',
          'Price / license',
          'Key difference'
        ],
        rows: [
          {
            'App': '[Odysseus](/power-local-llm/odysseus-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'Self-hosted AI workspace for chat, agents, research and documents, used from a desktop app or the browser'
          },
          {
            'App': '[Khoj](/power-local-llm/khoj-ai-second-brain-review)',
            'Platforms': 'Windows, macOS, Linux, web',
            'Price / license': 'Free / AGPL 3.0',
            'Key difference': 'Second brain that searches your notes and documents and syncs with tools such as Obsidian'
          },
          {
            'App': '[Second Me](/power-local-llm/second-me-review-2026)',
            'Platforms': 'Windows, macOS, Linux',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Trains a personalised model on your own data instead of building a phone-fed archive'
          }
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.'
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I run LocalGhost without a graphics card?',
            a: 'The setup guide says yes, everything then runs on the CPU, but slowly: it quotes about 24 photos described per hour.'
          },
          {
            q: 'What happens if the company disappears?',
            a: 'The project says the box keeps running the installed version because there is no license server or remote kill switch, and anyone can fork the MIT code. PromptQuorum cannot verify how that would play out.'
          },
          {
            q: 'Can an AI agent or another app reach my box?',
            a: 'The README says there is no API or MCP server for other callers on purpose, and the box answers them as if it were down. It adds that an agent surface may come later.'
          },
          {
            q: 'Where does hardware stand?',
            a: 'No hardware is on sale; the maker says a box built by the company is planned for a later release line called specter and gives no date.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Per its maker, LocalGhost keeps photos, notes, voice and health data on your own Debian computer and shows them back through an Android app, all under the MIT license, with seven releases in its first three weeks. Against that, it is a one-person project with a first release on 2 October 2026, setup is a multi-step terminal job, the only client is Android, several promised parts are not built and every privacy and quality statement is the maker\'s own. It suits technically confident self-hosters who want to follow an early project; readers who want a desktop-based personal assistant today can compare [Odysseus](/power-local-llm/odysseus-review) or [Khoj](/power-local-llm/khoj-ai-second-brain-review).'
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[About LocalGhost](https://www.localghost.ai/about) — what it does, key facts, pricing and the roadmap, checked 24 October 2026.',
          '[Set Up a LocalGhost Box](https://www.localghost.ai/setup) — requirements and the install steps.',
          '[LocalGhost privacy page](https://www.localghost.ai/privacy) — the list of outbound requests and what the website, mirror and mail relay keep.',
          '[LocalGhost on GitHub](https://github.com/LocalGhostDao/localghost) — README, MIT license and [SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md).',
          '[wisp 0.0.7 release](https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7) — release date and the asset list.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Odysseus Review](/power-local-llm/odysseus-review) — a self-hosted, local-first AI workspace.',
          '[Khoj Review](/power-local-llm/khoj-ai-second-brain-review) — an AI second brain over your own notes.',
          '[Second Me Review](/power-local-llm/second-me-review-2026) — a personalised AI trained on your own data.',
          '[Local LLM Chat & Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison for chat clients and personal assistants.'
        ]
      }
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LocalGhost Review: A Personal AI Server You Host Yourself',
      description: 'LocalGhost review: a free, MIT-licensed personal AI server for a Debian machine you own, used from an Android app. Requirements, setup, privacy claims and what is not built yet.',
      url: 'https://promptquorum.com/power-local-llm/localghost-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/'
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com'
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'Self-hosters evaluating a private, self-hosted personal AI'
      },
      about: [
        {
          '@type': 'Thing',
          name: 'LocalGhost'
        },
        {
          '@type': 'Thing',
          name: 'Self-hosted personal AI'
        },
        {
          '@type': 'Thing',
          name: 'Local LLM inference'
        },
        {
          '@type': 'Thing',
          name: 'Personal memory'
        }
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://promptquorum.com/power-local-llm/localghost-review'
      }
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://promptquorum.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://promptquorum.com/power-local-llm'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'LocalGhost Review',
          item: 'https://promptquorum.com/power-local-llm/localghost-review'
        }
      ]
    }
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/localghost-review-hero-de.webp',
    title: 'LocalGhost-Rezension: Ein persönlicher KI-Server zum Selbsthosten',
    seoTitle: 'LocalGhost-Rezension: Private persönliche KI selbst hosten',
    intro: 'LocalGhost ist ein unter MIT lizenziertes persönliches KI-System: mehrere Serverprogramme auf einem Debian-Rechner in Ihrem Besitz, die Ihre Fotos, Notizen, Sprachnotizen und Gesundheitsdaten speichern und mit lokalen Modellen auswerten, dazu eine Android-App als einziger Zugang. Diese Rezension beruht auf Website, GitHub-Repository und Version 0.0.7 des Projekts, geprüft am 24. Oktober 2026.',
    metaDescription: 'LocalGhost-Rezension: kostenloser persönlicher KI-Server (MIT) für einen eigenen Debian-Rechner mit Android-App. Einrichtung, Datenschutz, offene Punkte.',
    twitterDescription: 'LocalGhost-Rezension: eine quelloffene persönliche KI auf einem eigenen Debian-Rechner, bedient per Android-Smartphone. Bedarf, Angaben und offene Fragen.',
    audience: 'Selbsthoster und Homelab-Besitzer, die wissen möchten, was LocalGhost benötigt, was es kostet, wie aufwendig die Einrichtung ist und welche Datenschutz- und Gedächtnisangaben die Quellen unbestätigt lassen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalGhost Rezension',
    targetKeywords: [
      'localghost rezension',
      'selbst gehostete persönliche ki',
      'private ki mit gedächtnis auf eigener hardware',
      'localghost android app',
      'open source persönlicher ki server',
      'localghost vs khoj'
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX GPU',
      'Debian 13 PC with TPM 2.0',
      'Android 15 phone'
    ],
    leadAnswerBlock: '**LocalGhost ist eine kostenlose persönliche KI, die als Gruppe von Serverprogrammen auf Ihrem eigenen Debian-Rechner läuft und ausschließlich über eine Android-App bedient wird.** Es ist ein sehr junges Ein-Personen-Projekt, die erste Version stammt vom 2. Oktober 2026, und PromptQuorum hat es weder installiert noch getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was macht LocalGhost eigentlich?',
        answer: 'Laut Projekt sammelt es Ihre Fotos, Videos, Ihren Standortverlauf, Notizen, Sprachnotizen und Gesundheitsdaten auf Ihrem eigenen Rechner und macht daraus Bildbeschreibungen, Tagesgeschichten, Erinnerungen und Chat-Antworten.',
        bullets: [
          'Das Sprach- und Bildmodell ist Gemma 4 12B, bereitgestellt über llama.cpp; Sprachnotizen werden mit whisper.cpp transkribiert.',
          'Die Android-App ist der einzige Client: Es gibt keine iPhone-App, keine Desktop-App und keine Weboberfläche.',
          'Laut README gibt es kein Konto, keine Analyse und keinen Cloud-Dienst, der Ihre Daten hält.',
          'Hardware ist noch nicht erhältlich; Sie installieren es selbst auf einem vorhandenen Rechner.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer'
      },
      {
        label: 'Was ist LocalGhost?',
        anchor: 'what-is-localghost'
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it'
      },
      {
        label: 'Das brauchen Sie',
        anchor: 'requirements'
      },
      {
        label: 'Preise',
        anchor: 'pricing'
      },
      {
        label: 'So gelingt der Einstieg',
        anchor: 'getting-started'
      },
      {
        label: 'Was Wisp 0.0.7 enthält',
        anchor: 'key-features'
      },
      {
        label: 'Datenschutz und Netzwerknutzung',
        anchor: 'privacy'
      },
      {
        label: 'Für wen sich die App eignet',
        anchor: 'who-should-use'
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use'
      },
      {
        label: 'Wettbewerber und Alternativen',
        anchor: 'vs-alternatives'
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq'
      },
      {
        label: 'Fazit',
        anchor: 'verdict'
      },
      {
        label: 'Quellen',
        anchor: 'sources'
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalGhost ist eine quelloffene persönliche KI, die auf Hardware unter Ihrer Kontrolle ein privates Gedächtnis Ihres Lebens führt.'
          },
          {
            type: 'plain-terms',
            text: 'Sie richten den Server selbst ein, installieren eine Android-App, scannen einen QR-Code, und das Smartphone spricht danach nur noch mit Ihrem eigenen Rechner.'
          }
        ],
        items: [
          'Pflege: Zwischen dem 2. und 23. Oktober 2026 erschienen sieben Versionen (0.0.1 bis 0.0.7), das Repository stammt vom Dezember 2025; das Projekt ist aktiv, eine Warnung vor einem veralteten Projekt entfällt.',
          'Lizenz: MIT; die Software ist kostenlos und ohne Abonnement.',
          'Einrichtung: ein mehrstufiges Terminal-Verfahren unter Debian 13, kein Installer per Doppelklick.',
          'Reifegrad: Der Entwickler nennt ein Täuschungsvolume, Peer-to-Peer-Backup und Hardware als noch nicht gebaut.',
          'Grundlage: Website, README und Release-Seite, gelesen am 24. Oktober 2026, ohne eigenen Praxistest.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat LocalGhost weder installiert noch getestet oder gemessen. Aussagen zu Datenschutz, Gedächtnisqualität und Geschwindigkeit unten sind die des Projekts.'
          }
        ]
      },
      overview: {
        id: 'what-is-localghost',
        title: 'Was ist LocalGhost?',
        content: [
          '**LocalGhost ist ein persönliches KI-System aus elf kleinen Go-Programmen, sogenannten Daemons, die jeweils eine Aufgabe auf Ihrem eigenen Rechner erledigen; einziger Zugang ist eine Android-App.** Herausgeber ist die LocalGhost.ai Ltd, eine in England und Wales eingetragene Gesellschaft, entwickelt von ihrem Gründer Vlad Cealicu; das Projekt begann im Dezember 2025.',
          'Die Daemons nehmen Fotos, Videos, Standort, Notizen, Sprachnotizen und Gesundheitsdaten auf, beschreiben und indexieren sie mit lokalen Modellen, schreiben für jeden Tag eine kurze Geschichte und leiten daraus Erinnerungen ab. Ein eigener Daemon soll Ihnen widersprechen, ein weiterer übernimmt Verschlüsselung und Entsperrung. Als Modell-Engine dient llama.cpp, das README nennt Gemma 4 12B für Sprache und Bild sowie EmbeddingGemma für die Suche, und der Code liegt unter [LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost).'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**LocalGhost besteht aus zwei Teilen, die Sie von GitHub Releases laden: eine signierte APK für das Smartphone und ein Linux-Serverarchiv für den Rechner.** Es gibt weder einen App-Store-Eintrag noch eine gehostete Version.'
        ],
        columns: [
          'Teil',
          'Bezugsquelle'
        ],
        rows: [
          {
            'Teil': 'Android-App (Smartphone)',
            'Bezugsquelle': '[localghost-app-0.0.7.apk](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-app-0.0.7.apk) (signiert; Android 15 oder neuer)'
          },
          {
            'Teil': 'Server (Debian 13, x86-64)',
            'Bezugsquelle': '[localghost-server-0.0.7-linux-amd64.tar.gz](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-server-0.0.7-linux-amd64.tar.gz) plus [SHA256SUMS](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/SHA256SUMS) und Signatur'
          },
          {
            'Teil': 'Einrichtungsanleitung',
            'Bezugsquelle': '[localghost.ai/setup](https://www.localghost.ai/setup) (Schritt für Schritt, mit Kurzfassung in fünf Zügen)'
          },
          {
            'Teil': 'Website',
            'Bezugsquelle': '[www.localghost.ai](https://www.localghost.ai)'
          },
          {
            'Teil': 'Datenschutzerklärung',
            'Bezugsquelle': '[localghost.ai/privacy](https://www.localghost.ai/privacy) (Stand 23. Oktober 2026)'
          },
          {
            'Teil': 'Quellcode',
            'Bezugsquelle': '[github.com/LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)'
          },
          {
            'Teil': 'Sicherheitsmeldungen',
            'Bezugsquelle': '[SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md) (PGP-verschlüsselte E-Mail)'
          }
        ],
        note: 'Geprüfte Version: 0.0.7 („wisp“), laut GitHub-Release-Seite am 23. Oktober 2026 veröffentlicht; das ist zum Zeitpunkt der Prüfung das letzte Upstream-Update. Der Server wird per Terminal unter Debian 13 eingerichtet, braucht ein im BIOS aktiviertes TPM und dauert laut Anleitung ein bis zwei Stunden; die Smartphone-App wird aus der APK-Datei installiert, nicht über Google Play.'
      },
      requirements: {
        id: 'requirements',
        title: 'Das brauchen Sie',
        content: [
          '**LocalGhost benötigt einen x86-64-Rechner mit Debian 13 und TPM-2.0-Chip, eine leere Festplatte oder eine 20-GB-Datei für das verschlüsselte Volume sowie ein Android-Smartphone ab Version 15.** Eine NVIDIA-Grafikkarte ist optional, beschleunigt aber die Modelle.'
        ],
        columns: [
          'Posten',
          'Anforderung laut Einrichtungsanleitung'
        ],
        rows: [
          {
            'Posten': 'Rechner',
            'Anforderung laut Einrichtungsanleitung': 'x86-64, Debian 13, Terminal mit mindestens 57 mal 35 Zeichen'
          },
          {
            'Posten': 'TPM',
            'Anforderung laut Einrichtungsanleitung': 'TPM 2.0 (Firmware-TPM genügt); ohne TPM gibt es eine Software-Stufe'
          },
          {
            'Posten': 'Volume',
            'Anforderung laut Einrichtungsanleitung': 'Leere Festplatte oder Datei ab 20 GB; kein Netzwerkspeicher'
          },
          {
            'Posten': 'Grafikkarte',
            'Anforderung laut Einrichtungsanleitung': 'Optionale NVIDIA-Karte; der Rechner des Projekts hat 12 GB'
          },
          {
            'Posten': 'Smartphone',
            'Anforderung laut Einrichtungsanleitung': 'Android 15 oder neuer; Google Play Services nicht nötig'
          },
          {
            'Posten': 'Netzwerk',
            'Anforderung laut Einrichtungsanleitung': 'Internet bei der Einrichtung (etwa 12 GB vom Mirror des Projekts)'
          }
        ],
        note: 'Laut Anleitung beschreibt derselbe Rechner allein mit der CPU etwa 24 Fotos pro Stunde, und die nächtliche Gedächtnisarbeit nach einem ausgefüllten Tag dauert auf einer 12-GB-Karte etwa zwei Stunden, auf der CPU mehr als einen Tag; der Entwickler nennt für Gemma 4 12B auf dieser Karte rund 53 Tokens pro Sekunde. PromptQuorum hat diese Werte nicht nachgemessen. Für den Zugriff von unterwegs braucht es zusätzlich eine Domain und eine weitergeleitete Portfreigabe.'
      },
      pricing: {
        id: 'pricing',
        title: 'Preise',
        content: [
          '**Die Software ist kostenlos: Das Projekt nennt eine MIT-Lizenz, kein Abonnement, kein Konto und keinen Lizenzserver.**'
        ],
        columns: [
          'Posten',
          'Kosten'
        ],
        rows: [
          {
            'Posten': 'Server und Android-App',
            'Kosten': 'Kostenlos (MIT-Lizenz)'
          },
          {
            'Posten': 'Ihre eigene Hardware',
            'Kosten': 'Was der Rechner Sie kostet'
          },
          {
            'Posten': 'Referenzaufbau (Schätzung des Projekts)',
            'Kosten': 'Etwa 1.130 £ an Teilen, Juni 2026'
          },
          {
            'Posten': 'Fertig gebaute Geräte',
            'Kosten': 'Nicht im Verkauf; Preis nicht festgelegt'
          }
        ],
        note: 'Gelesen auf der About-Seite am 24. Oktober 2026; der Betrag ist die Angabe des Projekts in britischen Pfund und nicht umgerechnet. Laut Projekt würde ein künftiges Gerät zu Teile- und Montagekosten plus 30 Prozent Marge verkauft, und optionale künftige Daemons könnten als Einmalpakete verkauft werden; beides gibt es noch nicht. Das Repository nennt außerdem eine Kryptowährungsadresse für Spenden.'
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der Einrichtungsanleitung des Projekts; PromptQuorum hat sie nicht ausgeführt.**'
        ],
        numberedItems: [
          {
            title: 'Den Debian-Rechner vorbereiten',
            whyItMatters: 'Debian 13 installieren, das TPM im BIOS aktivieren und sudo, nginx, curl und gpg installieren. Bei einer NVIDIA-Karte zuvor Treiber und CUDA selbst installieren.'
          },
          {
            title: 'Zuerst die App auf dem Smartphone installieren',
            whyItMatters: 'Die Anleitung verlangt das, bevor der Rechner seinen Anmelde-QR-Code zeigt, denn der Code enthält das Zertifikat des Smartphones und sollte sofort gescannt werden.'
          },
          {
            title: 'Server-Release laden und prüfen',
            whyItMatters: 'Archiv, SHA256SUMS und Signatur laden, den PGP-Schlüssel des Projekts importieren und Signatur und Prüfsummen vor dem Entpacken kontrollieren.'
          },
          {
            title: 'Den Installer auf dem Rechner ausführen',
            whyItMatters: 'Das Installationsskript fragt nach einer Festplatte oder Datei für das Volume, dem TPM-Siegel und Ihren PINs (Haupt-PIN und optionale Lösch-PIN) und zeigt dann einen QR-Code.'
          },
          {
            title: 'QR-Code scannen und entsperren',
            whyItMatters: 'Das Scannen ist die Anmeldung. Danach das Update-Skript ausführen, um Wikipedia und Neueres zu holen; eine große Fotobibliothek braucht einige Tage zum Indexieren.'
          }
        ]
      },
      features: {
        id: 'key-features',
        title: 'Was Wisp 0.0.7 enthält',
        content: [
          '**Das Projekt nennt in dieser Version elf Daemons, und jeder Punkt unten stammt aus dem README oder der About-Seite.**'
        ],
        items: [
          '**Erfassung.** Fotos und Videos werden unverändert archiviert und vom Modell beschrieben und verschlagwortet; Notizen, ein abendlicher Check-in und Sprachnotizen werden zu Tagebucheinträgen, die Sprache wird auf dem Rechner transkribiert.',
          '**Gedächtnis.** Chats, Notizen und Sprachnotizen werden zu Erinnerungen verdichtet, die Sie bearbeiten oder löschen können; aus Fotos, Standortverlauf, Gesundheitsdaten und Check-in entsteht eine Tagesgeschichte.',
          '**Suche und Chat.** Ein Suchindex deckt das Archiv ab, und der Chat antwortet aus Ihrem eigenen Kontext; wenn das nicht reicht, startet das Smartphone eine Websuche und nennt seine Quellen.',
          '**Erinnern.** Eine Morgenreflexion zu einer alten Erinnerung und ein Vorschlag für einen Ort in der Nähe.',
          '**Kritiker.** Einer von geplanten 28 Detektoren läuft: Er meldet, wenn Sie doppelt so viel mit dem Rechner sprechen wie zuvor.',
          '**Sicherheit.** Ein LUKS2-verschlüsseltes Volume mit TPM-Siegel, ein Smartphone-Zertifikat, das sich während der Nutzung erneuert, eine Lösch-PIN, die den Schlüssel vernichtet, und eine Sperre nach falschen PINs.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Das Projekt sagt, Ihre Daten bleiben auf dem Rechner, ohne Konto, ohne Analyse, ohne Absturzberichte und ohne eigenen Server, der etwas von Ihnen hält.** Das README ergänzt, dass eine Anfrage, die seine Liste nicht nennt, ein Fehler und eine Sicherheitsmeldung wäre.',
          'Laut Datenschutzseite fragt der Rechner das Internet nur nach öffentlichen Daten wie Kursen, Nachrichten, Wettermodelldateien und Updates vom signierten Mirror des Projekts, ohne dass etwas von Ihnen in der Anfrage steckt. Braucht eine Chatfrage das Web, sendet das Smartphone die Wörter der Frage an DuckDuckGo oder, mit Ihrem eigenen Schlüssel, an Brave. Website und Mirror führen keine Zugriffsprotokolle, und ein Mail-Relay für die optionale Rechneradresse hält Nachrichten mit dem Schlüssel des Rechners versiegelt, bis dieser sie abholt.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Aussagen des Entwicklers. PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft, und laut README liegt der Schlüssel der Zertifizierungsstelle des Rechners in dieser Version auf der Systemfestplatte.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Homelab- und NAS-Besitzer** mit einem Debian-Rechner, die mit Terminal und TPM-Einstellung zurechtkommen.',
          '**Android-Nutzer,** die Fotos, Notizen und Gesundheitsdaten auf einem Gerät unter eigener Kontrolle halten möchten.',
          '**Selbsthoster und Go-Entwickler,** die den Code lesen, testen oder erweitern möchten.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praxisqualität.** PromptQuorum hat LocalGhost nicht ausgeführt; Gedächtnisqualität, Bildbeschreibungen, Geschwindigkeit sowie Akku- und Speicherbedarf sind ungetestet.',
          '**Datenschutz und Sicherheit.** Die Aussage zu fehlender Telemetrie, die Kette signierter Updates und das im README genannte Sicherheitsaudit wurden nicht an Code oder Datenverkehr geprüft.',
          '**Reifegrad.** Laut README läuft es auf einem Rechner mit einem Smartphone und externe Nutzer sind nicht genannt; ein Täuschungsvolume, Peer-to-Peer-Backup und ein Hardwareprodukt sind nicht gebaut.',
          '**Plattformen.** Es gibt keinen iPhone-, Desktop- oder Web-Client, und der Server läuft nur unter Linux, dokumentiert ist Debian 13.',
          '**Team.** Die About-Seite nennt einen Gründer, der mit KI-Werkzeugen baut, und verspricht keine Antwortzeit für Support.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Hauptunterschied'
        ],
        rows: [
          {
            'App': '[Odysseus](/de/power-local-llm/odysseus-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / AGPL-3.0',
            'Hauptunterschied': 'Selbst gehosteter KI-Arbeitsbereich für Chat, Agenten, Recherche und Dokumente, per Desktop-App oder Browser bedient'
          },
          {
            'App': '[Khoj](/de/power-local-llm/khoj-ai-second-brain-review)',
            'Plattformen': 'Windows, macOS, Linux, Web',
            'Preis / Lizenz': 'Kostenlos / AGPL 3.0',
            'Hauptunterschied': 'Zweitgehirn, das Notizen und Dokumente durchsucht und sich mit Werkzeugen wie Obsidian abgleicht'
          },
          {
            'App': '[Second Me](/de/power-local-llm/second-me-review-2026)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Hauptunterschied': 'Trainiert ein personalisiertes Modell mit Ihren Daten, statt ein vom Smartphone gespeistes Archiv aufzubauen'
          }
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag.'
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich LocalGhost ohne Grafikkarte betreiben?',
            a: 'Laut Einrichtungsanleitung ja, dann läuft alles auf der CPU, aber langsam: Genannt werden etwa 24 beschriebene Fotos pro Stunde.'
          },
          {
            q: 'Was passiert, wenn das Unternehmen verschwindet?',
            a: 'Das Projekt sagt, der Rechner läuft mit der installierten Version weiter, weil es keinen Lizenzserver und keinen Fernabschalter gibt, und jeder kann den MIT-Code forken. PromptQuorum kann nicht überprüfen, wie das in der Praxis ausginge.'
          },
          {
            q: 'Können ein KI-Agent oder eine andere App meinen Rechner erreichen?',
            a: 'Laut README gibt es absichtlich keine API und keinen MCP-Server für andere Aufrufer, und der Rechner antwortet ihnen, als wäre er nicht erreichbar. Eine Agentenschnittstelle könne später kommen.'
          },
          {
            q: 'Wie steht es um die Hardware?',
            a: 'Hardware ist nicht im Verkauf; laut Entwickler ist ein vom Unternehmen gebautes Gerät für eine spätere Release-Linie namens specter geplant, ohne Termin.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'LocalGhost ist eine kostenlose persönliche KI unter MIT-Lizenz, die laut Entwickler Fotos, Notizen, Sprache und Gesundheitsdaten auf Ihrem eigenen Debian-Rechner hält und über eine Android-App wiedergibt, mit sieben Versionen in den ersten drei Wochen. Dagegen steht: ein Ein-Personen-Projekt mit erster Version am 2. Oktober 2026, eine mehrstufige Einrichtung im Terminal, Android als einziger Client, mehrere angekündigte Teile fehlen noch, und jede Aussage zu Datenschutz und Qualität stammt vom Entwickler selbst. Es eignet sich für technisch versierte Selbsthoster, die ein frühes Projekt begleiten möchten; wer heute einen desktopbasierten persönlichen Assistenten sucht, kann [Odysseus](/de/power-local-llm/odysseus-review) oder [Khoj](/de/power-local-llm/khoj-ai-second-brain-review) vergleichen.'
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[About LocalGhost](https://www.localghost.ai/about) — Funktionsumfang, Eckdaten, Preise und Roadmap, geprüft am 24. Oktober 2026.',
          '[Set Up a LocalGhost Box](https://www.localghost.ai/setup) — Anforderungen und Installationsschritte.',
          '[Datenschutzseite von LocalGhost](https://www.localghost.ai/privacy) — die Liste ausgehender Anfragen und was Website, Mirror und Mail-Relay speichern.',
          '[LocalGhost auf GitHub](https://github.com/LocalGhostDao/localghost) — README, MIT-Lizenz und [SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md).',
          '[Release wisp 0.0.7](https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7) — Veröffentlichungsdatum und Dateiliste.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Odysseus Review](/de/power-local-llm/odysseus-review) — ein selbst gehosteter, lokal orientierter KI-Arbeitsbereich.',
          '[Khoj-Rezension](/de/power-local-llm/khoj-ai-second-brain-review) — ein KI-Zweitgehirn für Ihre eigenen Notizen.',
          '[Second Me Review](/de/power-local-llm/second-me-review-2026) — eine personalisierte KI, mit Ihren Daten trainiert.',
          '[Lokale Chat-Apps und Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich für Chat-Clients und persönliche Assistenten.'
        ]
      }
    }
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/localghost-review-hero-es.webp',
    title: 'Reseña de LocalGhost: un servidor de IA personal que alojas tú',
    seoTitle: 'Reseña de LocalGhost: IA personal privada que alojas tú',
    intro: 'LocalGhost es un sistema de IA personal con licencia MIT: varios programas de servidor en un equipo Debian de tu propiedad que guardan tus fotos, notas, notas de voz y datos de salud y los analizan con modelos locales, más una app de Android como única forma de acceso. Esta reseña refleja el sitio web, el repositorio de GitHub y la versión 0.0.7 del proyecto, revisados el 24 de octubre de 2026.',
    metaDescription: 'Reseña de LocalGhost: servidor de IA personal gratuito (MIT) para un equipo Debian propio, con app de Android. Instalación, privacidad y lo que falta.',
    twitterDescription: 'Reseña de LocalGhost: una IA personal de código abierto en un equipo Debian propio, que se usa desde un móvil Android. Requisitos, afirmaciones y dudas abiertas.',
    audience: 'Personas que alojan sus propios servicios y dueños de homelabs que quieren saber qué necesita LocalGhost, cuánto cuesta, lo difícil que es instalarlo y qué afirmaciones de privacidad y memoria dejan sin confirmar las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña LocalGhost',
    targetKeywords: [
      'reseña localghost',
      'ia personal autoalojada',
      'memoria privada con ia en tu propio hardware',
      'localghost app android',
      'servidor de ia personal de código abierto',
      'localghost vs khoj'
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX GPU',
      'Debian 13 PC with TPM 2.0',
      'Android 15 phone'
    ],
    leadAnswerBlock: '**LocalGhost es una IA personal gratuita que funciona como un grupo de programas de servidor en tu propio equipo Debian y se usa solo mediante una app de Android.** Es un proyecto muy joven de una sola persona, su primera versión es del 2 de octubre de 2026 y PromptQuorum no lo ha instalado ni probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué hace exactamente LocalGhost?',
        answer: 'Según el proyecto, reúne tus fotos, vídeos, recorrido de ubicación, notas, notas de voz y datos de salud en tu propio equipo y los convierte en descripciones, historias diarias, recuerdos y respuestas de chat.',
        bullets: [
          'El modelo de lenguaje y visión es Gemma 4 12B servido con llama.cpp; las notas de voz se transcriben con whisper.cpp.',
          'La app de Android es el único cliente: no hay app para iPhone, ni de escritorio, ni interfaz web.',
          'Según el README, no hay cuenta, ni analítica, ni servicio en la nube que guarde tus datos.',
          'Todavía no se vende hardware; lo instalas tú en un equipo que ya tengas.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer'
      },
      {
        label: '¿Qué es LocalGhost?',
        anchor: 'what-is-localghost'
      },
      {
        label: 'Dónde conseguirla',
        anchor: 'get-it'
      },
      {
        label: 'Qué necesitas',
        anchor: 'requirements'
      },
      {
        label: 'Precios',
        anchor: 'pricing'
      },
      {
        label: 'Cómo empezar',
        anchor: 'getting-started'
      },
      {
        label: 'Qué incluye wisp 0.0.7',
        anchor: 'key-features'
      },
      {
        label: 'Privacidad y uso de la red',
        anchor: 'privacy'
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use'
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use'
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives'
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq'
      },
      {
        label: 'Veredicto',
        anchor: 'verdict'
      },
      {
        label: 'Fuentes',
        anchor: 'sources'
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalGhost es una IA personal de código abierto que guarda una memoria privada de tu vida en hardware bajo tu control.'
          },
          {
            type: 'plain-terms',
            text: 'Tú montas el servidor, instalas una app de Android, escaneas un código QR y, a partir de ahí, el móvil habla solo con tu propio equipo.'
          }
        ],
        items: [
          'Mantenimiento: entre el 2 y el 23 de octubre de 2026 aparecieron siete versiones (0.0.1 a 0.0.7) y el repositorio es de diciembre de 2025; está activo y no corresponde un aviso de proyecto abandonado.',
          'Licencia: MIT; el software es gratuito y no tiene suscripción.',
          'Instalación: un procedimiento de varios pasos en la terminal con Debian 13, no un instalador de doble clic.',
          'Madurez: el autor indica que un volumen señuelo, la copia de seguridad entre pares y el hardware aún no están construidos.',
          'Base: el sitio web, el README y la página de la versión, leídos el 24 de octubre de 2026, sin pruebas prácticas.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha instalado, probado ni medido LocalGhost. Las afirmaciones sobre privacidad, calidad de la memoria y velocidad que siguen son las del propio proyecto.'
          }
        ]
      },
      overview: {
        id: 'what-is-localghost',
        title: '¿Qué es LocalGhost?',
        content: [
          '**LocalGhost es un sistema de IA personal formado por once pequeños programas en Go, llamados daemons, que hacen cada uno una tarea en tu propio equipo; la única forma de acceso es una app de Android.** Lo publica LocalGhost.ai Ltd, una sociedad registrada en Inglaterra y Gales, y lo desarrolla su fundador, Vlad Cealicu; el proyecto empezó en diciembre de 2025.',
          'Los daemons recogen fotos, vídeos, ubicación, notas, notas de voz y datos de salud, los describen e indexan con modelos locales, escriben una breve historia de cada día y destilan recuerdos. Un daemon aparte está pensado para llevarte la contraria y otro se ocupa del cifrado y el desbloqueo. El motor de modelos es llama.cpp, el README nombra Gemma 4 12B para lenguaje y visión y EmbeddingGemma para la búsqueda, y el código está en [LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost).'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**LocalGhost tiene dos partes que se descargan de GitHub Releases: un APK firmado para el móvil y un archivo de servidor para Linux.** No hay ficha en una tienda de apps ni versión alojada.'
        ],
        columns: [
          'Parte',
          'Dónde conseguirla'
        ],
        rows: [
          {
            'Parte': 'App de Android (móvil)',
            'Dónde conseguirla': '[localghost-app-0.0.7.apk](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-app-0.0.7.apk) (firmado; Android 15 o superior)'
          },
          {
            'Parte': 'Servidor (Debian 13, x86-64)',
            'Dónde conseguirla': '[localghost-server-0.0.7-linux-amd64.tar.gz](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-server-0.0.7-linux-amd64.tar.gz) más [SHA256SUMS](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/SHA256SUMS) y su firma'
          },
          {
            'Parte': 'Guía de instalación',
            'Dónde conseguirla': '[localghost.ai/setup](https://www.localghost.ai/setup) (paso a paso, con una versión corta en cinco movimientos)'
          },
          {
            'Parte': 'Sitio web',
            'Dónde conseguirla': '[www.localghost.ai](https://www.localghost.ai)'
          },
          {
            'Parte': 'Política de privacidad',
            'Dónde conseguirla': '[localghost.ai/privacy](https://www.localghost.ai/privacy) (actualizada el 23 de octubre de 2026)'
          },
          {
            'Parte': 'Código fuente',
            'Dónde conseguirla': '[github.com/LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)'
          },
          {
            'Parte': 'Avisos de seguridad',
            'Dónde conseguirla': '[SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md) (correo cifrado con PGP)'
          }
        ],
        note: 'Versión revisada: 0.0.7 («wisp»), publicada el 23 de octubre de 2026 según la página de versiones de GitHub, que es la última actualización del proyecto en el momento de la revisión. El servidor se instala por terminal en Debian 13, necesita un TPM activado en la BIOS y, según la guía, lleva una o dos horas; la app del móvil se instala desde el archivo APK, no desde Google Play.'
      },
      requirements: {
        id: 'requirements',
        title: 'Qué necesitas',
        content: [
          '**LocalGhost necesita un equipo x86-64 con Debian 13 y chip TPM 2.0, un disco vacío o un archivo de 20 GB para el volumen cifrado y un móvil con Android 15 o superior.** Una tarjeta gráfica NVIDIA es opcional, pero acelera los modelos.'
        ],
        columns: [
          'Elemento',
          'Requisito según la guía de instalación'
        ],
        rows: [
          {
            'Elemento': 'Equipo',
            'Requisito según la guía de instalación': 'x86-64, Debian 13, terminal de al menos 57 por 35 caracteres'
          },
          {
            'Elemento': 'TPM',
            'Requisito según la guía de instalación': 'TPM 2.0 (vale el de firmware); sin él hay un nivel por software'
          },
          {
            'Elemento': 'Volumen',
            'Requisito según la guía de instalación': 'Disco vacío o archivo de 20 GB o más; nunca en red'
          },
          {
            'Elemento': 'Tarjeta gráfica',
            'Requisito según la guía de instalación': 'NVIDIA opcional; el equipo del proyecto tiene 12 GB'
          },
          {
            'Elemento': 'Móvil',
            'Requisito según la guía de instalación': 'Android 15 o superior; sin Google Play Services'
          },
          {
            'Elemento': 'Red',
            'Requisito según la guía de instalación': 'Internet durante la instalación (unos 12 GB del mirror del proyecto)'
          }
        ],
        note: 'Según la guía, el mismo equipo describe unas 24 fotos por hora solo con la CPU, y el trabajo nocturno de memoria tras un día intenso lleva unas dos horas con una tarjeta de 12 GB frente a más de un día con la CPU; el autor indica unos 53 tokens por segundo con Gemma 4 12B en esa tarjeta. PromptQuorum no ha reproducido estas cifras. Para llegar al equipo fuera de casa también hacen falta un dominio y un puerto redirigido.'
      },
      pricing: {
        id: 'pricing',
        title: 'Precios',
        content: [
          '**El software es gratuito: el proyecto declara licencia MIT, sin suscripción, sin cuenta y sin servidor de licencias.**'
        ],
        columns: [
          'Elemento',
          'Coste'
        ],
        rows: [
          {
            'Elemento': 'Servidor y app de Android',
            'Coste': 'Gratis (licencia MIT)'
          },
          {
            'Elemento': 'Tu propio hardware',
            'Coste': 'Lo que te cueste el equipo'
          },
          {
            'Elemento': 'Montaje de referencia (estimación del proyecto)',
            'Coste': 'Unos £1,130 en piezas, junio de 2026'
          },
          {
            'Elemento': 'Equipos ya montados',
            'Coste': 'No están a la venta; precio sin fijar'
          }
        ],
        note: 'Leído en la página About el 24 de octubre de 2026; la cifra es la del proyecto en libras esterlinas y no se ha convertido. Según el proyecto, un futuro equipo se vendería a precio de piezas y montaje más un 30 % de margen, y los futuros daemons opcionales podrían venderse como paquetes de pago único; nada de esto existe aún. El repositorio también indica una dirección de criptomoneda para donaciones.'
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen la guía de instalación del proyecto; PromptQuorum no los ha ejecutado.**'
        ],
        numberedItems: [
          {
            title: 'Prepara el equipo Debian',
            whyItMatters: 'Instala Debian 13, activa el TPM en la BIOS e instala sudo, nginx, curl y gpg. Si hay una tarjeta NVIDIA, instala antes tú mismo el controlador y CUDA.'
          },
          {
            title: 'Instala primero la app en el móvil',
            whyItMatters: 'La guía lo pide antes de que el equipo muestre su código QR de inscripción, porque el código contiene el certificado del móvil y conviene escanearlo en cuanto aparece.'
          },
          {
            title: 'Descarga y verifica la versión del servidor',
            whyItMatters: 'Descarga el archivo, SHA256SUMS y su firma, importa la clave PGP del proyecto y comprueba la firma y los hashes antes de descomprimir.'
          },
          {
            title: 'Ejecuta el instalador en el equipo',
            whyItMatters: 'El script de instalación pide un disco o un archivo para el volumen, el sello del TPM y tus PIN (un PIN principal y otro opcional de borrado) y luego muestra un código QR.'
          },
          {
            title: 'Escanea el código QR y desbloquea',
            whyItMatters: 'Escanear es la inscripción. Después ejecuta el script de actualización para traer Wikipedia y lo más nuevo; una biblioteca grande de fotos tarda unos días en indexarse.'
          }
        ]
      },
      features: {
        id: 'key-features',
        title: 'Qué incluye wisp 0.0.7',
        content: [
          '**El proyecto enumera once daemons en esta versión, y cada punto siguiente procede de su README o de la página About.**'
        ],
        items: [
          '**Captura.** Las fotos y los vídeos se archivan tal cual y el modelo los describe y etiqueta; las notas, un registro vespertino y las notas de voz pasan a ser entradas de diario, y la voz se transcribe en el equipo.',
          '**Memoria.** Los chats, notas y notas de voz se destilan en recuerdos que puedes editar o borrar, y a partir de las fotos, el recorrido, los datos de salud y el registro se escribe una historia diaria.',
          '**Búsqueda y chat.** Un índice de búsqueda cubre el archivo y el chat responde con tu propio contexto; cuando no puede, el móvil hace una búsqueda web e indica sus fuentes.',
          '**Recuerdo.** Una reflexión matinal sobre un recuerdo antiguo y una sugerencia de un lugar cercano.',
          '**Crítico.** Funciona uno de los 28 detectores previstos: avisa cuando hablas con el equipo el doble que antes.',
          '**Seguridad.** Un volumen cifrado LUKS2 sellado al TPM, un certificado del móvil que se renueva mientras se usa, un PIN de borrado que destruye la clave y un bloqueo tras varios PIN erróneos.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**El proyecto afirma que tus datos se quedan en el equipo, sin cuenta, sin analítica, sin informes de fallos y sin servidor propio que guarde nada tuyo.** El README añade que una petición que su lista no nombre sería un error y un aviso de seguridad.',
          'Según la página de privacidad, el equipo solo pide a internet datos públicos, como cotizaciones, noticias, archivos de modelos meteorológicos y actualizaciones del mirror firmado del proyecto, sin nada tuyo en la petición. Cuando una pregunta del chat necesita la web, el móvil envía las palabras de la pregunta a DuckDuckGo o, con tu propia clave, a Brave. El sitio web y el mirror no guardan registros de acceso, y un relé de correo para la dirección opcional del equipo conserva los mensajes sellados con la clave del equipo hasta que este los recoge.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son afirmaciones del autor. PromptQuorum no ha auditado el código ni el tráfico de red, y según el README, en esta versión la clave de la autoridad de certificación del equipo está en el disco del sistema.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Dueños de homelabs y NAS** con un equipo Debian que se manejen con la terminal y un ajuste de TPM.',
          '**Usuarios de Android** que quieran guardar fotos, notas y datos de salud en un equipo bajo su control.',
          '**Quienes alojan sus servicios y desarrolladores de Go** que quieran leer, probar o ampliar el código.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en la práctica.** PromptQuorum no ejecutó LocalGhost, así que la calidad de la memoria, las descripciones, la velocidad y el consumo de batería o almacenamiento no están probados.',
          '**Privacidad y seguridad.** La afirmación de que no hay telemetría, la cadena de actualizaciones firmadas y la auditoría de seguridad que menciona el README no se contrastaron con el código ni con el tráfico.',
          '**Madurez.** Según el README, lo ejecuta un equipo con un móvil y no se citan usuarios externos; un volumen señuelo, la copia de seguridad entre pares y un producto de hardware no están construidos.',
          '**Plataformas.** No hay cliente para iPhone, escritorio ni web, y el servidor solo funciona en Linux, con Debian 13 documentado.',
          '**Equipo.** La página About habla de un fundador que construye con herramientas de IA y no promete plazo de respuesta para el soporte.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: [
          'App',
          'Plataformas',
          'Precio / licencia',
          'Diferencia clave'
        ],
        rows: [
          {
            'App': '[Odysseus](/es/power-local-llm/odysseus-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia clave': 'Espacio de trabajo de IA autoalojado para chat, agentes, investigación y documentos, que se usa desde una app de escritorio o el navegador'
          },
          {
            'App': '[Khoj](/es/power-local-llm/khoj-ai-second-brain-review)',
            'Plataformas': 'Windows, macOS, Linux, web',
            'Precio / licencia': 'Gratis / AGPL 3.0',
            'Diferencia clave': 'Segundo cerebro que busca en tus notas y documentos y se sincroniza con herramientas como Obsidian'
          },
          {
            'App': '[Second Me](/es/power-local-llm/second-me-review-2026)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Entrena un modelo personalizado con tus datos en lugar de construir un archivo alimentado desde el móvil'
          }
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.'
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usar LocalGhost sin tarjeta gráfica?',
            a: 'Según la guía de instalación, sí: todo se ejecuta entonces en la CPU, pero despacio; cita unas 24 fotos descritas por hora.'
          },
          {
            q: '¿Qué pasa si la empresa desaparece?',
            a: 'El proyecto dice que el equipo sigue funcionando con la versión instalada porque no hay servidor de licencias ni interruptor remoto, y que cualquiera puede bifurcar el código MIT. PromptQuorum no puede verificar cómo sería en la práctica.'
          },
          {
            q: '¿Puede un agente de IA u otra app acceder a mi equipo?',
            a: 'El README dice que, a propósito, no hay API ni servidor MCP para otros usuarios, y que el equipo les responde como si estuviera caído. Añade que más adelante podría llegar una interfaz para agentes.'
          },
          {
            q: '¿Cómo está lo del hardware?',
            a: 'No se vende hardware; el autor dice que un equipo construido por la empresa está previsto para una línea de versiones posterior llamada specter y no da fecha.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'LocalGhost es una IA personal gratuita con licencia MIT que, según su autor, guarda fotos, notas, voz y datos de salud en tu propio equipo Debian y te los devuelve a través de una app de Android, con siete versiones en sus tres primeras semanas. En contra: es un proyecto de una sola persona con primera versión el 2 de octubre de 2026, la instalación son varios pasos en la terminal, el único cliente es Android, varias piezas anunciadas aún no existen y toda afirmación sobre privacidad y calidad es del propio autor. Encaja con quienes alojan sus servicios y tienen soltura técnica y quieren seguir un proyecto temprano; quien busque hoy un asistente personal de escritorio puede comparar [Odysseus](/es/power-local-llm/odysseus-review) o [Khoj](/es/power-local-llm/khoj-ai-second-brain-review).'
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[About LocalGhost](https://www.localghost.ai/about) — qué hace, datos clave, precios y hoja de ruta, revisado el 24 de octubre de 2026.',
          '[Set Up a LocalGhost Box](https://www.localghost.ai/setup) — requisitos y pasos de instalación.',
          '[Página de privacidad de LocalGhost](https://www.localghost.ai/privacy) — la lista de peticiones salientes y lo que guardan el sitio web, el mirror y el relé de correo.',
          '[LocalGhost en GitHub](https://github.com/LocalGhostDao/localghost) — README, licencia MIT y [SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md).',
          '[Versión wisp 0.0.7](https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7) — fecha de publicación y lista de archivos.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Odysseus Review](/es/power-local-llm/odysseus-review) — un espacio de trabajo de IA autoalojado y orientado a lo local.',
          '[Khoj](/es/power-local-llm/khoj-ai-second-brain-review) — un segundo cerebro de IA sobre tus propias notas.',
          '[Second Me Review](/es/power-local-llm/second-me-review-2026) — una IA personalizada entrenada con tus propios datos.',
          '[Apps de chat y asistentes locales, comparados](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de la categoría de clientes de chat y asistentes personales.'
        ]
      }
    }
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/localghost-review-hero-fr.webp',
    title: 'LocalGhost : un serveur d’IA personnelle que vous hébergez vous-même',
    seoTitle: 'LocalGhost : test d’une IA personnelle privée à héberger',
    intro: 'LocalGhost est un système d’IA personnelle sous licence MIT : plusieurs programmes serveur sur une machine Debian qui vous appartient, qui conservent vos photos, notes, notes vocales et données de santé et les analysent avec des modèles locaux, avec une application Android pour seul accès. Ce test reflète le site web, le dépôt GitHub et la version 0.0.7 du projet, consultés le 24 octobre 2026.',
    metaDescription: 'Test de LocalGhost : serveur d’IA personnelle gratuit (MIT) pour une machine Debian à vous, avec appli Android. Installation, vie privée, limites.',
    twitterDescription: 'Test de LocalGhost : une IA personnelle open source sur une machine Debian à vous, utilisée depuis un téléphone Android. Prérequis, affirmations et questions ouvertes.',
    audience: 'Les auto-hébergeurs et propriétaires de homelab qui veulent savoir ce que LocalGhost exige, ce qu’il coûte, quelle est la difficulté de l’installation et quelles affirmations sur la vie privée et la mémoire les sources laissent non confirmées.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test LocalGhost',
    targetKeywords: [
      'test localghost',
      'ia personnelle auto-hébergée',
      'mémoire ia privée sur votre propre matériel',
      'localghost application android',
      'serveur d’ia personnelle open source',
      'localghost vs khoj'
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX GPU',
      'Debian 13 PC with TPM 2.0',
      'Android 15 phone'
    ],
    leadAnswerBlock: '**LocalGhost est une IA personnelle gratuite qui tourne sous la forme d’un groupe de programmes serveur sur votre propre machine Debian et s’utilise uniquement par une application Android.** C’est un projet très jeune, porté par une seule personne, dont la première version date du 2 octobre 2026, et PromptQuorum ne l’a ni installé ni testé.',
    quickAnswerTop: {
      fr: {
        question: 'Que fait concrètement LocalGhost ?',
        answer: 'Selon le projet, il rassemble vos photos, vidéos, trajets, notes, notes vocales et données de santé sur votre propre machine et en tire des légendes, des récits de journée, des souvenirs et des réponses de chat.',
        bullets: [
          'Le modèle de langage et de vision est Gemma 4 12B servi par llama.cpp ; les notes vocales sont transcrites avec whisper.cpp.',
          'L’application Android est le seul client : il n’existe ni application iPhone, ni application de bureau, ni interface web.',
          'D’après le README, il n’y a ni compte, ni outil d’analyse, ni service cloud qui conserve vos données.',
          'Aucun matériel n’est encore en vente ; vous l’installez vous-même sur une machine que vous possédez déjà.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer'
      },
      {
        label: 'Qu’est-ce que LocalGhost ?',
        anchor: 'what-is-localghost'
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it'
      },
      {
        label: 'Ce qu’il vous faut',
        anchor: 'requirements'
      },
      {
        label: 'Tarifs',
        anchor: 'pricing'
      },
      {
        label: 'Premiers pas',
        anchor: 'getting-started'
      },
      {
        label: 'Ce que contient wisp 0.0.7',
        anchor: 'key-features'
      },
      {
        label: 'Confidentialité et usage du réseau',
        anchor: 'privacy'
      },
      {
        label: 'À qui il s’adresse',
        anchor: 'who-should-use'
      },
      {
        label: 'Ce que nous n’avons pas pu vérifier',
        anchor: 'who-should-not-use'
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives'
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq'
      },
      {
        label: 'Verdict',
        anchor: 'verdict'
      },
      {
        label: 'Sources',
        anchor: 'sources'
      },
      {
        label: 'Lectures associées',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalGhost est une IA personnelle open source qui garde une mémoire privée de votre vie sur du matériel que vous contrôlez.'
          },
          {
            type: 'plain-terms',
            text: 'Vous installez vous-même le serveur, mettez en place une application Android, scannez un code QR, et le téléphone ne parle plus ensuite qu’à votre propre machine.'
          }
        ],
        items: [
          'Maintenance : sept versions (0.0.1 à 0.0.7) sont sorties entre le 2 et le 23 octobre 2026 et le dépôt date de décembre 2025 ; le projet est actif et aucun avertissement de projet abandonné ne s’applique.',
          'Licence : MIT ; le logiciel est gratuit et sans abonnement.',
          'Installation : une procédure en plusieurs étapes dans le terminal sous Debian 13, pas un installateur à double-clic.',
          'Maturité : le concepteur indique qu’un volume leurre, la sauvegarde pair à pair et le matériel ne sont pas encore construits.',
          'Base : le site web, le README et la page de version, lus le 24 octobre 2026, sans test pratique.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n’a ni installé, ni testé, ni mesuré LocalGhost. Les affirmations sur la confidentialité, la qualité de la mémoire et la vitesse ci-dessous sont celles du projet.'
          }
        ]
      },
      overview: {
        id: 'what-is-localghost',
        title: 'Qu’est-ce que LocalGhost ?',
        content: [
          '**LocalGhost est un système d’IA personnelle composé de onze petits programmes en Go, appelés daemons, qui accomplissent chacun une tâche sur votre propre machine, avec une application Android pour seul accès.** Il est publié par LocalGhost.ai Ltd, société enregistrée en Angleterre et au pays de Galles, et développé par son fondateur, Vlad Cealicu ; le projet a démarré en décembre 2025.',
          'Les daemons ingèrent photos, vidéos, position, notes, notes vocales et données de santé, les décrivent et les indexent avec des modèles locaux, rédigent un court récit de chaque journée et en tirent des souvenirs. Un daemon distinct est censé vous contredire, et un autre gère le chiffrement et le déverrouillage. Le moteur de modèles est llama.cpp, le README cite Gemma 4 12B pour le langage et la vision et EmbeddingGemma pour la recherche, et le code se trouve sur [LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost).'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**LocalGhost comprend deux éléments à télécharger depuis GitHub Releases : un APK signé pour le téléphone et une archive serveur pour Linux.** Il n’existe ni fiche sur une boutique d’applications ni version hébergée.'
        ],
        columns: [
          'Élément',
          'Où l’obtenir'
        ],
        rows: [
          {
            'Élément': 'Application Android (téléphone)',
            'Où l’obtenir': '[localghost-app-0.0.7.apk](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-app-0.0.7.apk) (signé ; Android 15 ou plus récent)'
          },
          {
            'Élément': 'Serveur (Debian 13, x86-64)',
            'Où l’obtenir': '[localghost-server-0.0.7-linux-amd64.tar.gz](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-server-0.0.7-linux-amd64.tar.gz) plus [SHA256SUMS](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/SHA256SUMS) et sa signature'
          },
          {
            'Élément': 'Guide d’installation',
            'Où l’obtenir': '[localghost.ai/setup](https://www.localghost.ai/setup) (pas à pas, avec une version courte en cinq étapes)'
          },
          {
            'Élément': 'Site web',
            'Où l’obtenir': '[www.localghost.ai](https://www.localghost.ai)'
          },
          {
            'Élément': 'Politique de confidentialité',
            'Où l’obtenir': '[localghost.ai/privacy](https://www.localghost.ai/privacy) (mise à jour le 23 octobre 2026)'
          },
          {
            'Élément': 'Code source',
            'Où l’obtenir': '[github.com/LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)'
          },
          {
            'Élément': 'Signalement de failles',
            'Où l’obtenir': '[SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md) (e-mail chiffré avec PGP)'
          }
        ],
        note: 'Version testée : 0.0.7 (« wisp »), publiée le 23 octobre 2026 d’après la page de version GitHub, ce qui correspond à la dernière mise à jour du projet au moment de la vérification. Le serveur s’installe dans le terminal sous Debian 13, exige un TPM activé dans le BIOS et prend une à deux heures selon le guide ; l’application du téléphone s’installe depuis le fichier APK, pas depuis Google Play.'
      },
      requirements: {
        id: 'requirements',
        title: 'Ce qu’il vous faut',
        content: [
          '**LocalGhost exige un ordinateur x86-64 sous Debian 13 avec une puce TPM 2.0, un disque vide ou un fichier de 20 Go pour le volume chiffré et un téléphone Android 15 ou plus récent.** Une carte graphique NVIDIA est facultative mais accélère les modèles.'
        ],
        columns: [
          'Élément',
          'Exigence selon le guide'
        ],
        rows: [
          {
            'Élément': 'Ordinateur',
            'Exigence selon le guide': 'x86-64, Debian 13, terminal d’au moins 57 sur 35 caractères'
          },
          {
            'Élément': 'TPM',
            'Exigence selon le guide': 'TPM 2.0 (un TPM micrologiciel suffit) ; un niveau logiciel existe sans lui'
          },
          {
            'Élément': 'Volume',
            'Exigence selon le guide': 'Disque vide ou fichier de 20 Go ou plus ; pas de partage réseau'
          },
          {
            'Élément': 'Carte graphique',
            'Exigence selon le guide': 'NVIDIA facultative ; la machine du projet a 12 Go'
          },
          {
            'Élément': 'Téléphone',
            'Exigence selon le guide': 'Android 15 ou plus récent ; Google Play Services inutiles'
          },
          {
            'Élément': 'Réseau',
            'Exigence selon le guide': 'Internet pendant l’installation (environ 12 Go depuis le miroir du projet)'
          }
        ],
        note: 'Selon le guide, la même machine décrit environ 24 photos par heure avec le seul processeur, et le travail de mémoire nocturne après une journée chargée prend environ deux heures sur une carte de 12 Go contre plus d’une journée sur le processeur ; le concepteur indique environ 53 tokens par seconde pour Gemma 4 12B sur cette carte. PromptQuorum n’a pas reproduit ces chiffres. Pour joindre la machine hors de chez soi, il faut aussi un nom de domaine et un port redirigé.'
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs',
        content: [
          '**Le logiciel est gratuit : le projet indique une licence MIT, aucun abonnement, aucun compte et aucun serveur de licences.**'
        ],
        columns: [
          'Élément',
          'Coût'
        ],
        rows: [
          {
            'Élément': 'Serveur et application Android',
            'Coût': 'Gratuit (licence MIT)'
          },
          {
            'Élément': 'Votre propre matériel',
            'Coût': 'Le prix de votre machine'
          },
          {
            'Élément': 'Configuration de référence (estimation du projet)',
            'Coût': 'Environ 1 130 £ de pièces, juin 2026'
          },
          {
            'Élément': 'Boîtiers prêts à l’emploi',
            'Coût': 'Pas en vente ; prix non fixé'
          }
        ],
        note: 'Lu sur la page About le 24 octobre 2026 ; le montant est celui du projet en livres sterling, sans conversion. Selon le projet, un futur boîtier serait vendu au prix des pièces et de l’assemblage plus 30 % de marge, et de futurs daemons facultatifs pourraient être vendus en paquets à paiement unique ; rien de tout cela n’existe encore. Le dépôt indique aussi une adresse de cryptomonnaie pour les dons.'
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent le guide d’installation du projet ; PromptQuorum ne les a pas exécutées.**'
        ],
        numberedItems: [
          {
            title: 'Préparer la machine Debian',
            whyItMatters: 'Installez Debian 13, activez le TPM dans le BIOS et installez sudo, nginx, curl et gpg. Avec une carte NVIDIA, installez d’abord vous-même le pilote et CUDA.'
          },
          {
            title: 'Installer d’abord l’application sur le téléphone',
            whyItMatters: 'Le guide l’exige avant que la machine affiche son code QR d’enrôlement, car ce code contient le certificat du téléphone et doit être scanné dès son apparition.'
          },
          {
            title: 'Télécharger et vérifier la version serveur',
            whyItMatters: 'Récupérez l’archive, SHA256SUMS et sa signature, importez la clé PGP du projet et contrôlez la signature et les empreintes avant de décompresser.'
          },
          {
            title: 'Lancer l’installateur sur la machine',
            whyItMatters: 'Le script d’installation demande un disque ou un fichier pour le volume, le scellement TPM et vos codes PIN (un code principal et un code d’effacement facultatif), puis affiche un code QR.'
          },
          {
            title: 'Scanner le code QR et déverrouiller',
            whyItMatters: 'Le scan vaut enrôlement. Lancez ensuite le script de mise à jour pour récupérer Wikipédia et les nouveautés ; une grande photothèque met quelques jours à être indexée.'
          }
        ]
      },
      features: {
        id: 'key-features',
        title: 'Ce que contient wisp 0.0.7',
        content: [
          '**Le projet liste onze daemons dans cette version, et chaque point ci-dessous provient de son README ou de la page About.**'
        ],
        items: [
          '**Capture.** Photos et vidéos sont archivées telles quelles, puis légendées et étiquetées par le modèle ; notes, bilan du soir et notes vocales deviennent des entrées de journal, la voix étant transcrite sur la machine.',
          '**Mémoire.** Discussions, notes et notes vocales sont condensées en souvenirs que vous pouvez modifier ou supprimer, et un récit de la journée est rédigé à partir des photos, du trajet, des données de santé et du bilan.',
          '**Recherche et chat.** Un index de recherche couvre l’archive et le chat répond à partir de votre propre contexte ; quand il ne le peut pas, le téléphone lance une recherche web et nomme ses sources.',
          '**Rappel.** Une réflexion matinale sur un ancien souvenir et la suggestion d’un lieu proche.',
          '**Critique.** Un des 28 détecteurs prévus fonctionne : il signale que vous parlez deux fois plus à la machine qu’auparavant.',
          '**Sécurité.** Un volume chiffré LUKS2 scellé au TPM, un certificat du téléphone renouvelé pendant l’usage, un code d’effacement qui détruit la clé et un blocage après des codes erronés.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Le projet affirme que vos données restent sur la machine, sans compte, sans outil d’analyse, sans rapport de plantage et sans serveur propre qui détienne quoi que ce soit de vous.** Le README ajoute qu’une requête que sa liste ne mentionne pas serait un bogue et un signalement de sécurité.',
          'D’après la page de confidentialité, la machine ne demande à internet que des données publiques, comme des cours, des actualités, des fichiers de modèles météo et des mises à jour depuis le miroir signé du projet, sans rien de vous dans la requête. Quand une question du chat exige le web, le téléphone envoie les mots de la question à DuckDuckGo ou, avec votre propre clé, à Brave. Le site et le miroir ne conservent aucun journal d’accès, et un relais de messagerie pour l’adresse facultative de la machine garde les messages scellés avec la clé de la machine jusqu’à leur récupération.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du concepteur. PromptQuorum n’a audité ni le code ni le trafic réseau, et selon le README la clé de l’autorité de certification de la machine se trouve sur le disque système dans cette version.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Propriétaires de homelab ou de NAS** disposant d’une machine Debian et à l’aise avec le terminal et un réglage TPM.',
          '**Utilisateurs Android** qui veulent garder photos, notes et données de santé sur une machine qu’ils contrôlent.',
          '**Auto-hébergeurs et développeurs Go** qui veulent lire, tester ou étendre le code.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité à l’usage.** PromptQuorum n’a pas exécuté LocalGhost : la qualité de la mémoire, des légendes, la vitesse et l’impact sur la batterie ou le stockage ne sont pas testés.',
          '**Confidentialité et sécurité.** L’absence de télémétrie, la chaîne de mises à jour signées et l’audit de sécurité cité par le README n’ont pas été confrontés au code ni au trafic.',
          '**Maturité.** Selon le README, une machine l’exécute avec un téléphone et aucun utilisateur externe n’est cité ; un volume leurre, la sauvegarde pair à pair et un produit matériel ne sont pas construits.',
          '**Plateformes.** Il n’existe pas de client iPhone, de bureau ou web, et le serveur ne tourne que sous Linux, Debian 13 étant la seule version documentée.',
          '**Équipe.** La page About évoque un fondateur qui construit avec des outils d’IA et ne promet aucun délai de réponse pour l’assistance.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'Application',
          'Plateformes',
          'Prix / licence',
          'Différence clé'
        ],
        rows: [
          {
            'Application': '[Odysseus](/fr/power-local-llm/odysseus-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence clé': 'Espace de travail IA auto-hébergé pour le chat, les agents, la recherche et les documents, utilisé depuis une application de bureau ou le navigateur'
          },
          {
            'Application': '[Khoj](/fr/power-local-llm/khoj-ai-second-brain-review)',
            'Plateformes': 'Windows, macOS, Linux, web',
            'Prix / licence': 'Gratuit / AGPL 3.0',
            'Différence clé': 'Second cerveau qui interroge vos notes et documents et se synchronise avec des outils comme Obsidian'
          },
          {
            'Application': '[Second Me](/fr/power-local-llm/second-me-review-2026)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Entraîne un modèle personnalisé sur vos données au lieu de bâtir une archive alimentée par le téléphone'
          }
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez prix, licence et plateformes sur la fiche de chaque application.'
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je utiliser LocalGhost sans carte graphique ?',
            a: 'Selon le guide d’installation, oui : tout tourne alors sur le processeur, mais lentement ; il cite environ 24 photos décrites par heure.'
          },
          {
            q: 'Que se passe-t-il si l’entreprise disparaît ?',
            a: 'Le projet affirme que la machine continue de faire tourner la version installée, faute de serveur de licences ou d’interrupteur à distance, et que chacun peut dupliquer le code MIT. PromptQuorum ne peut pas vérifier ce que cela donnerait en pratique.'
          },
          {
            q: 'Un agent d’IA ou une autre application peut-il joindre ma machine ?',
            a: 'Le README indique qu’il n’existe volontairement ni API ni serveur MCP pour d’autres appelants, et que la machine leur répond comme si elle était hors service. Il ajoute qu’une interface pour agents pourrait venir plus tard.'
          },
          {
            q: 'Où en est le matériel ?',
            a: 'Aucun matériel n’est en vente ; le concepteur indique qu’un boîtier construit par l’entreprise est prévu pour une ligne de versions ultérieure appelée specter, sans date.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'LocalGhost est une IA personnelle gratuite sous licence MIT qui, selon son concepteur, garde photos, notes, voix et données de santé sur votre propre machine Debian et les restitue par une application Android, avec sept versions en ses trois premières semaines. En face : un projet porté par une seule personne, dont la première version date du 2 octobre 2026, une installation en plusieurs étapes dans le terminal, Android pour seul client, plusieurs éléments annoncés pas encore construits, et des affirmations sur la confidentialité et la qualité qui viennent toutes du concepteur. Il convient aux auto-hébergeurs à l’aise techniquement qui veulent suivre un projet naissant ; qui cherche dès aujourd’hui un assistant personnel de bureau peut comparer [Odysseus](/fr/power-local-llm/odysseus-review) ou [Khoj](/fr/power-local-llm/khoj-ai-second-brain-review).'
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[About LocalGhost](https://www.localghost.ai/about) — fonctions, données clés, tarifs et feuille de route, consultés le 24 octobre 2026.',
          '[Set Up a LocalGhost Box](https://www.localghost.ai/setup) — prérequis et étapes d’installation.',
          '[Page de confidentialité de LocalGhost](https://www.localghost.ai/privacy) — la liste des requêtes sortantes et ce que conservent le site, le miroir et le relais de messagerie.',
          '[LocalGhost sur GitHub](https://github.com/LocalGhostDao/localghost) — README, licence MIT et [SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md).',
          '[Version wisp 0.0.7](https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7) — date de publication et liste des fichiers.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Odysseus Review](/fr/power-local-llm/odysseus-review) — un espace de travail IA auto-hébergé et orienté local.',
          '[Khoj](/fr/power-local-llm/khoj-ai-second-brain-review) — un second cerveau IA sur vos propres notes.',
          '[Second Me Review](/fr/power-local-llm/second-me-review-2026) — une IA personnalisée entraînée sur vos propres données.',
          '[Applications de chat IA locales et assistants : comparatif](/fr/power-local-llm/local-llm-chat-assistants-compared) — le comparatif de catégorie des clients de chat et assistants personnels.'
        ]
      }
    }
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/localghost-review-hero-ja.webp',
    title: 'LocalGhostレビュー：自分でホストするパーソナルAIサーバー',
    seoTitle: 'LocalGhostレビュー：自宅で動かす私的なパーソナルAI',
    intro: 'LocalGhostはMITライセンスのパーソナルAIシステムです。自分で所有するDebianマシン上の複数のサーバープログラムが、写真・メモ・音声メモ・健康データを保存してローカルモデルで読み取り、操作はAndroidアプリだけで行います。このレビューは、2026年10月24日に確認したプロジェクトのウェブサイト、GitHubリポジトリ、バージョン0.0.7に基づいています。',
    metaDescription: 'LocalGhostのレビュー。自分のDebianマシンで動かす無料のMITライセンス製パーソナルAIサーバーとAndroidアプリ。セットアップ、プライバシーの主張、未実装の点を整理しました。',
    twitterDescription: 'LocalGhostレビュー：自分のDebianマシンで動き、Androidスマホから使うオープンソースのパーソナルAI。必要環境、主張、残る疑問点を整理しました。',
    audience: 'LocalGhostに何が必要か、費用はいくらか、セットアップはどれほど大変か、プライバシーや記憶に関するどの主張が情報源では未確認なのかを知りたい、セルフホスト派やホームラボの所有者向けです。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalGhost レビュー',
    targetKeywords: [
      'localghost レビュー',
      'セルフホスト パーソナルai',
      '自分のハードウェアで動く プライベートai メモリ',
      'localghost android アプリ',
      'オープンソース パーソナルai サーバー',
      'localghost vs khoj'
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX GPU',
      'Debian 13 PC with TPM 2.0',
      'Android 15 phone'
    ],
    leadAnswerBlock: '**LocalGhostは、自分で所有するDebianマシン上のサーバープログラム群として動き、Androidアプリからのみ使う、無料のMITライセンス製パーソナルAIです。** 開発は一人で、最初のリリースは2026年10月2日というごく新しいプロジェクトで、PromptQuorumはインストールもテストもしていません。',
    quickAnswerTop: {
      ja: {
        question: 'LocalGhostは具体的に何をするのですか？',
        answer: 'プロジェクトによると、写真、動画、位置の軌跡、メモ、音声メモ、健康データを自分のマシンに集め、キャプション、一日の物語、記憶、チャットの回答に変えます。',
        bullets: [
          '言語・画像モデルはllama.cppで動かすGemma 4 12Bで、音声メモはwhisper.cppで文字起こしします。',
          'クライアントはAndroidアプリのみで、iPhoneアプリ、デスクトップアプリ、Webインターフェースはありません。',
          'READMEによると、アカウントも分析ツールもなく、データを保持するクラウドサービスもありません。',
          'ハードウェアはまだ販売されておらず、手持ちのマシンに自分でインストールします。'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer'
      },
      {
        label: 'LocalGhostとは',
        anchor: 'what-is-localghost'
      },
      {
        label: '入手方法',
        anchor: 'get-it'
      },
      {
        label: '必要な環境',
        anchor: 'requirements'
      },
      {
        label: '料金',
        anchor: 'pricing'
      },
      {
        label: '始め方',
        anchor: 'getting-started'
      },
      {
        label: 'wisp 0.0.7の内容',
        anchor: 'key-features'
      },
      {
        label: 'プライバシーとネットワーク利用',
        anchor: 'privacy'
      },
      {
        label: '向いている人',
        anchor: 'who-should-use'
      },
      {
        label: '確認できなかった点',
        anchor: 'who-should-not-use'
      },
      {
        label: '競合と代替ツール',
        anchor: 'vs-alternatives'
      },
      {
        label: 'よくある質問',
        anchor: 'faq'
      },
      {
        label: '総評',
        anchor: 'verdict'
      },
      {
        label: '情報源',
        anchor: 'sources'
      },
      {
        label: '関連記事',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalGhostは、自分で所有するDebianマシン上に生活の私的な記憶を築く、オープンソースのパーソナルAIです。'
          },
          {
            type: 'plain-terms',
            text: 'サーバーを自分でセットアップし、Androidアプリを入れ、QRコードを読み取ると、以後スマホは自分のマシンとだけやり取りします。'
          }
        ],
        items: [
          '保守状況：2026年10月2日から23日の間に7つのバージョン（0.0.1〜0.0.7）が公開され、リポジトリは2025年12月からあります。活動中のため、放置プロジェクトの警告は該当しません。',
          'ライセンス：MIT。ソフトウェアは無料でサブスクリプションはありません。',
          'セットアップ：Debian 13での複数手順のターミナル作業で、ダブルクリックのインストーラーではありません。',
          '成熟度：開発者は、デコイボリューム、ピアツーピアのバックアップ、ハードウェアが未完成だと明記しています。',
          '根拠：2026年10月24日に読んだウェブサイト、README、リリースページ。実機での検証はしていません。'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはLocalGhostをインストールも、テストも、計測もしていません。以下のプライバシー、記憶の質、速度に関する記述はプロジェクト側のものです。'
          }
        ]
      },
      overview: {
        id: 'what-is-localghost',
        title: 'LocalGhostとは',
        content: [
          '**LocalGhostは、自分で所有するマシン上でそれぞれ一つの役割を担う11個の小さなGoプログラム（デーモン）で構成されるパーソナルAIシステムで、入り口はAndroidアプリだけです。** 発行元はイングランド・ウェールズ登録の企業LocalGhost.ai Ltdで、創業者のVlad Cealicu氏が開発しています。プロジェクトは2025年12月に始まりました。',
          'デーモンは写真、動画、位置情報、メモ、音声メモ、健康データを取り込み、ローカルモデルで説明・索引化し、一日ごとの短い物語を書き、記憶を抽出します。別のデーモンはユーザーに異を唱える役割で、もう一つが暗号化とロック解除を担当します。モデルエンジンはllama.cppで、READMEは言語と画像にGemma 4 12B、検索にEmbeddingGemmaを挙げており、コードは[LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)にあります。'
        ]
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**LocalGhostはGitHub Releasesから入手する2つの部品で構成されます。スマホ用の署名付きAPKと、マシン用のLinuxサーバーアーカイブです。** アプリストアの掲載もホスト版もありません。'
        ],
        columns: [
          '部品',
          '入手先'
        ],
        rows: [
          {
            '部品': 'Androidアプリ（スマホ）',
            '入手先': '[localghost-app-0.0.7.apk](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-app-0.0.7.apk)（署名付き、Android 15以降）'
          },
          {
            '部品': 'サーバー（Debian 13、x86-64）',
            '入手先': '[localghost-server-0.0.7-linux-amd64.tar.gz](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-server-0.0.7-linux-amd64.tar.gz)と[SHA256SUMS](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/SHA256SUMS)およびその署名'
          },
          {
            '部品': 'セットアップガイド',
            '入手先': '[localghost.ai/setup](https://www.localghost.ai/setup)（手順ごとの解説と5手順の短縮版）'
          },
          {
            '部品': '公式サイト',
            '入手先': '[www.localghost.ai](https://www.localghost.ai)'
          },
          {
            '部品': 'プライバシーポリシー',
            '入手先': '[localghost.ai/privacy](https://www.localghost.ai/privacy)（2026年10月23日更新）'
          },
          {
            '部品': 'ソースコード',
            '入手先': '[github.com/LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)'
          },
          {
            '部品': 'セキュリティ報告',
            '入手先': '[SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md)（PGP暗号化メール）'
          }
        ],
        note: '確認したバージョン：0.0.7（「wisp」）。GitHubのリリースページによると2026年10月23日の公開で、確認時点でのプロジェクト最新の更新です。サーバーはDebian 13でのターミナルセットアップで、BIOSでTPMを有効にする必要があり、ガイドによると1〜2時間かかります。スマホアプリはGoogle PlayではなくAPKファイルからインストールします。'
      },
      requirements: {
        id: 'requirements',
        title: '必要な環境',
        content: [
          '**LocalGhostには、Debian 13とTPM 2.0チップを備えたx86-64のPC、暗号化ボリューム用の空のディスクまたは20 GBのファイル、Android 15以降のスマホが必要です。** NVIDIAのグラフィックスカードは任意ですが、モデルが速くなります。'
        ],
        columns: [
          '項目',
          'セットアップガイドの要件'
        ],
        rows: [
          {
            '項目': 'PC',
            'セットアップガイドの要件': 'x86-64、Debian 13、57×35文字以上のターミナル'
          },
          {
            '項目': 'TPM',
            'セットアップガイドの要件': 'TPM 2.0（ファームウェアTPMで可）。なくてもソフトウェア方式がある'
          },
          {
            '項目': 'ボリューム',
            'セットアップガイドの要件': '空のディスクまたは20 GB以上のファイル。ネットワーク共有は不可'
          },
          {
            '項目': 'グラフィックスカード',
            'セットアップガイドの要件': 'NVIDIAは任意。プロジェクトの機材は12 GB'
          },
          {
            '項目': 'スマホ',
            'セットアップガイドの要件': 'Android 15以降。Google Play開発者サービスは不要'
          },
          {
            '項目': 'ネットワーク',
            'セットアップガイドの要件': 'セットアップ中はインターネット接続（プロジェクトのミラーから約12 GB）'
          }
        ],
        note: 'ガイドによると、同じマシンはCPUだけで1時間に約24枚の写真を説明し、忙しい一日の夜間の記憶処理は12 GBカードで約2時間、CPUでは1日以上かかります。開発者はそのカードでのGemma 4 12Bを毎秒約53トークンと述べています。PromptQuorumはこれらの数値を再現していません。外出先からマシンに接続するには、ドメインとポート転送も必要です。'
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**ソフトウェアは無料です。プロジェクトはMITライセンスで、サブスクリプション、アカウント、ライセンスサーバーはないと述べています。**'
        ],
        columns: [
          '項目',
          '費用'
        ],
        rows: [
          {
            '項目': 'サーバーとAndroidアプリ',
            '費用': '無料（MITライセンス）'
          },
          {
            '項目': 'ご自身のハードウェア',
            '費用': 'マシンの購入費用'
          },
          {
            '項目': '参考構成（プロジェクトの見積もり）',
            '費用': '部品代で約£1,130（2026年6月）'
          },
          {
            '項目': '完成品ボックス',
            '費用': '未発売、価格未定'
          }
        ],
        note: '2026年10月24日にAboutページで確認しました。金額はプロジェクトが英ポンドで示した数値で、換算していません。プロジェクトによると、将来のボックスは部品代と組み立て費に30％の利幅を上乗せして販売され、将来のオプションのデーモンは買い切りパッケージとして販売される可能性がありますが、どちらもまだ存在しません。リポジトリには寄付用の暗号資産アドレスも記載されています。'
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**手順はプロジェクトのセットアップガイドに沿っています。PromptQuorumは実行していません。**'
        ],
        numberedItems: [
          {
            title: 'Debianマシンを準備する',
            whyItMatters: 'Debian 13をインストールし、BIOSでTPMを有効にして、sudo、nginx、curl、gpgを入れます。NVIDIAカードがある場合は、先にドライバーとCUDAを自分で入れてください。'
          },
          {
            title: '先にスマホへアプリを入れる',
            whyItMatters: 'ガイドは、マシンが登録用QRコードを表示する前に行うよう求めています。コードにはスマホの証明書が含まれるため、表示されたらすぐ読み取るべきだからです。'
          },
          {
            title: 'サーバーのリリースをダウンロードして検証する',
            whyItMatters: 'アーカイブ、SHA256SUMS、その署名を取得し、プロジェクトのPGP鍵をインポートして、展開する前に署名とハッシュを確認します。'
          },
          {
            title: 'マシンでインストーラーを実行する',
            whyItMatters: 'インストールスクリプトがボリューム用のディスクまたはファイル、TPMでの封印、PIN（メインPINと任意の消去PIN）を尋ね、その後QRコードを表示します。'
          },
          {
            title: 'QRコードを読み取ってロックを解除する',
            whyItMatters: '読み取りが登録になります。その後アップデートスクリプトを実行してWikipediaや新しいデータを取得します。写真が多い場合、索引化に数日かかります。'
          }
        ]
      },
      features: {
        id: 'key-features',
        title: 'wisp 0.0.7の内容',
        content: [
          '**プロジェクトはこのリリースに11個のデーモンがあるとしており、以下の項目はすべてREADMEまたはAboutページに基づきます。**'
        ],
        items: [
          '**取り込み。** 写真と動画は原本のまま保管され、モデルがキャプションとタグを付けます。メモ、夜のチェックイン、音声メモは日記の項目になり、音声はマシン上で文字起こしされます。',
          '**記憶。** チャット、メモ、音声メモは、編集や削除ができる記憶にまとめられ、写真、位置の軌跡、健康データ、チェックインから一日の物語が書かれます。',
          '**検索とチャット。** 検索インデックスがアーカイブを対象とし、チャットは自分の文脈から回答します。答えられない場合は、スマホがWeb検索を行い、出典を示します。',
          '**想起。** 古い記憶についての朝の振り返りと、近くの場所の提案です。',
          '**批評役。** 予定されている28個の検出器のうち1つが動作し、以前の2倍マシンと話していると知らせます。',
          '**セキュリティ。** TPMで封印されたLUKS2暗号化ボリューム、使用中に更新されるスマホ証明書、鍵を破棄する消去PIN、誤ったPINの後のロックアウトです。'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**プロジェクトは、データはマシンの中にとどまり、アカウント、分析、クラッシュレポートはなく、ユーザーの情報を保持する自前のサーバーもないと述べています。** READMEは、一覧にない通信があればそれはバグであり、セキュリティ報告の対象だと付け加えています。',
          'プライバシーページによると、マシンがインターネットに求めるのは、相場、ニュース、天気モデルのファイル、プロジェクトの署名付きミラーからの更新といった公開データだけで、リクエストにユーザーの情報は含まれません。チャットの質問にWebが必要な場合、スマホは質問の語句をDuckDuckGoに、または自分のキーを使ってBraveに送ります。ウェブサイトとミラーはアクセスログを残さず、任意のマシン用メールアドレスのためのメールリレーは、マシンが取得するまでメッセージをマシンの鍵で封印したまま保持します。'
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者の説明です。PromptQuorumはコードもネットワーク通信も監査しておらず、READMEによると、このリリースではマシンの認証局の鍵がシステムディスク上にあります。'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**ホームラボやNASの所有者**で、Debianマシンがあり、ターミナルとTPMの設定に抵抗がない人。',
          '**Androidユーザー**で、写真、メモ、健康データを自分の管理下にあるマシンに置きたい人。',
          '**セルフホスト派とGo開発者**で、コードを読み、検証し、拡張したい人。'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の品質。** PromptQuorumはLocalGhostを実行していないため、記憶の質、キャプション、速度、バッテリーやストレージへの影響は未検証です。',
          '**プライバシーとセキュリティ。** テレメトリーがないという説明、署名付き更新の連鎖、READMEが述べるセキュリティ監査は、コードや通信と照合していません。',
          '**成熟度。** READMEによると1台のマシンと1台のスマホで動かしており、外部ユーザーの記載はありません。デコイボリューム、ピアツーピアのバックアップ、ハードウェア製品は未完成です。',
          '**対応環境。** iPhone、デスクトップ、Webのクライアントはなく、サーバーはLinuxのみで、ドキュメントがあるのはDebian 13です。',
          '**体制。** Aboutページは、創業者一人がAIツールを使って開発していると述べており、サポートの返信時間は約束していません。'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: [
          'アプリ',
          '対応プラットフォーム',
          '価格／ライセンス',
          '主な違い'
        ],
        rows: [
          {
            'アプリ': '[Odysseus](/ja/power-local-llm/odysseus-review)',
            '対応プラットフォーム': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料／AGPL-3.0',
            '主な違い': 'チャット、エージェント、リサーチ、ドキュメント向けのセルフホスト型AIワークスペースで、デスクトップアプリまたはブラウザから使う'
          },
          {
            'アプリ': '[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)',
            '対応プラットフォーム': 'Windows、macOS、Linux、Web',
            '価格／ライセンス': '無料／AGPL 3.0',
            '主な違い': 'ノートやドキュメントを検索し、Obsidianなどと同期するセカンドブレイン'
          },
          {
            'アプリ': '[Second Me](/ja/power-local-llm/second-me-review-2026)',
            '対応プラットフォーム': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料／Apache 2.0',
            '主な違い': 'スマホから蓄積するアーカイブではなく、自分のデータで個人向けモデルを訓練する'
          }
        ],
        note: '競合の情報は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリの掲載ページでご確認ください。'
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'グラフィックスカードなしでLocalGhostを動かせますか？',
            a: 'セットアップガイドによると動かせますが、すべてCPUで処理するため遅く、1時間に約24枚の写真を説明する程度とされています。'
          },
          {
            q: '運営会社がなくなったらどうなりますか？',
            a: 'プロジェクトによると、ライセンスサーバーやリモートの停止機能がないため、インストール済みのバージョンはそのまま動き続け、誰でもMITコードをフォークできます。実際にどうなるかはPromptQuorumでは確認できません。'
          },
          {
            q: 'AIエージェントや他のアプリは私のマシンにアクセスできますか？',
            a: 'READMEによると、他の呼び出し元向けのAPIやMCPサーバーは意図的に用意されておらず、マシンはそれらに対して停止しているかのように応答します。将来、エージェント向けの窓口が加わる可能性があるとも書かれています。'
          },
          {
            q: 'ハードウェアの状況は？',
            a: 'ハードウェアは販売されていません。開発者は、同社が作るボックスをspecterという後のリリースラインで予定していると述べ、日付は示していません。'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'LocalGhostは、開発者によれば、写真、メモ、音声、健康データを自分で所有するDebianマシンに保管し、Androidアプリで見せてくれる無料のMITライセンス製パーソナルAIで、最初の3週間で7回リリースされました。一方で、最初のリリースが2026年10月2日の一人開発のプロジェクトであり、セットアップは複数手順のターミナル作業、クライアントはAndroidのみ、予告された部品の一部は未完成で、プライバシーと品質に関する説明はすべて開発者自身のものです。初期のプロジェクトを見守りたい技術に明るいセルフホスト派に向いています。今すぐデスクトップ型のパーソナルアシスタントを探す方は、[Odysseus](/ja/power-local-llm/odysseus-review)や[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)と比較できます。'
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[About LocalGhost](https://www.localghost.ai/about)：機能、基本情報、料金、ロードマップ。2026年10月24日に確認。',
          '[Set Up a LocalGhost Box](https://www.localghost.ai/setup)：必要環境とインストール手順。',
          '[LocalGhostのプライバシーページ](https://www.localghost.ai/privacy)：外部への通信の一覧と、ウェブサイト・ミラー・メールリレーが保持する内容。',
          '[GitHubのLocalGhost](https://github.com/LocalGhostDao/localghost)：README、MITライセンス、[SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md)。',
          '[wisp 0.0.7リリース](https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7)：公開日とファイル一覧。'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Odysseusレビュー](/ja/power-local-llm/odysseus-review)：セルフホスト型でローカル優先のAIワークスペース。',
          '[Khoj レビュー](/ja/power-local-llm/khoj-ai-second-brain-review)：自分のノートを対象にしたAIセカンドブレイン。',
          '[Second Meレビュー](/ja/power-local-llm/second-me-review-2026)：自分のデータで訓練するパーソナライズAI。',
          '[ローカルチャットアプリとAIアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared)：チャットクライアントとパーソナルアシスタントのカテゴリ比較。'
        ]
      }
    }
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/localghost-review-hero-pt.webp',
    title: 'Análise do LocalGhost: um servidor de IA pessoal que você hospeda',
    seoTitle: 'Análise do LocalGhost: IA pessoal privada que você hospeda',
    intro: 'O LocalGhost é um sistema de IA pessoal com licença MIT: vários programas de servidor em uma máquina Debian que é sua, que guardam suas fotos, anotações, notas de voz e dados de saúde e os analisam com modelos locais, com um app Android como único acesso. Esta análise reflete o site, o repositório do GitHub e a versão 0.0.7 do projeto, verificados em 24 de outubro de 2026.',
    metaDescription: 'Análise do LocalGhost: servidor de IA pessoal gratuito (MIT) para uma máquina Debian sua, com app Android. Instalação, privacidade e o que falta.',
    twitterDescription: 'Análise do LocalGhost: uma IA pessoal de código aberto em uma máquina Debian sua, usada pelo celular Android. Requisitos, afirmações e dúvidas em aberto.',
    audience: 'Quem hospeda os próprios serviços e donos de homelab que querem saber o que o LocalGhost exige, quanto custa, quão difícil é instalar e quais afirmações de privacidade e memória as fontes deixam sem confirmação.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise LocalGhost',
    targetKeywords: [
      'análise localghost',
      'ia pessoal auto-hospedada',
      'memória privada de ia no seu próprio hardware',
      'localghost app android',
      'servidor de ia pessoal de código aberto',
      'localghost vs khoj'
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX GPU',
      'Debian 13 PC with TPM 2.0',
      'Android 15 phone'
    ],
    leadAnswerBlock: '**O LocalGhost é uma IA pessoal gratuita que roda como um grupo de programas de servidor na sua própria máquina Debian e é usada somente por um app Android.** É um projeto muito jovem, de uma pessoa só, com a primeira versão de 2 de outubro de 2026, e o PromptQuorum não o instalou nem testou.',
    quickAnswerTop: {
      pt: {
        question: 'O que o LocalGhost faz, afinal?',
        answer: 'Segundo o projeto, ele reúne suas fotos, vídeos, trilha de localização, anotações, notas de voz e dados de saúde na sua própria máquina e os transforma em legendas, histórias do dia, memórias e respostas de chat.',
        bullets: [
          'O modelo de linguagem e visão é o Gemma 4 12B servido pelo llama.cpp; as notas de voz são transcritas com o whisper.cpp.',
          'O app Android é o único cliente: não há app para iPhone, app de desktop nem interface web.',
          'Segundo o README, não há conta, análise de uso nem serviço em nuvem que guarde seus dados.',
          'Ainda não há hardware à venda; você instala por conta própria em uma máquina que já tenha.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer'
      },
      {
        label: 'O que é o LocalGhost?',
        anchor: 'what-is-localghost'
      },
      {
        label: 'Onde obter',
        anchor: 'get-it'
      },
      {
        label: 'O que você precisa',
        anchor: 'requirements'
      },
      {
        label: 'Preços',
        anchor: 'pricing'
      },
      {
        label: 'Como começar',
        anchor: 'getting-started'
      },
      {
        label: 'O que o wisp 0.0.7 inclui',
        anchor: 'key-features'
      },
      {
        label: 'Privacidade e uso da rede',
        anchor: 'privacy'
      },
      {
        label: 'Para quem serve',
        anchor: 'who-should-use'
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use'
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives'
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq'
      },
      {
        label: 'Veredicto',
        anchor: 'verdict'
      },
      {
        label: 'Fontes',
        anchor: 'sources'
      },
      {
        label: 'Leituras relacionadas',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O LocalGhost é uma IA pessoal de código aberto que mantém uma memória privada da sua vida em um hardware sob seu controle.'
          },
          {
            type: 'plain-terms',
            text: 'Você monta o servidor por conta própria, instala um app Android, escaneia um código QR e, daí em diante, o celular fala apenas com a sua própria máquina.'
          }
        ],
        items: [
          'Manutenção: sete versões (0.0.1 a 0.0.7) saíram entre 2 e 23 de outubro de 2026 e o repositório é de dezembro de 2025; o projeto está ativo e não se aplica aviso de projeto parado.',
          'Licença: MIT; o software é gratuito e não tem assinatura.',
          'Instalação: um procedimento de várias etapas no terminal com Debian 13, não um instalador de duplo clique.',
          'Maturidade: o autor lista volume isca, backup ponto a ponto e hardware como ainda não construídos.',
          'Base: o site, o README e a página da versão, lidos em 24 de outubro de 2026, sem teste prático.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'O PromptQuorum não instalou, testou nem mediu o LocalGhost. As afirmações sobre privacidade, qualidade da memória e velocidade abaixo são do próprio projeto.'
          }
        ]
      },
      overview: {
        id: 'what-is-localghost',
        title: 'O que é o LocalGhost?',
        content: [
          '**O LocalGhost é um sistema de IA pessoal formado por onze pequenos programas em Go, chamados daemons, que fazem cada um uma tarefa na sua própria máquina, com um app Android como único acesso.** É publicado pela LocalGhost.ai Ltd, empresa registrada na Inglaterra e no País de Gales, e desenvolvido pelo fundador, Vlad Cealicu; o projeto começou em dezembro de 2025.',
          'Os daemons recebem fotos, vídeos, localização, anotações, notas de voz e dados de saúde, descrevem e indexam tudo com modelos locais, escrevem uma breve história de cada dia e extraem memórias. Um daemon separado deve contrariar você, e outro cuida da criptografia e do desbloqueio. O motor de modelos é o llama.cpp, o README cita o Gemma 4 12B para linguagem e visão e o EmbeddingGemma para busca, e o código está em [LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost).'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O LocalGhost tem duas partes que você baixa do GitHub Releases: um APK assinado para o celular e um arquivo de servidor para Linux.** Não há página em loja de apps nem versão hospedada.'
        ],
        columns: [
          'Parte',
          'Onde obter'
        ],
        rows: [
          {
            'Parte': 'App Android (celular)',
            'Onde obter': '[localghost-app-0.0.7.apk](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-app-0.0.7.apk) (assinado; Android 15 ou superior)'
          },
          {
            'Parte': 'Servidor (Debian 13, x86-64)',
            'Onde obter': '[localghost-server-0.0.7-linux-amd64.tar.gz](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-server-0.0.7-linux-amd64.tar.gz) mais [SHA256SUMS](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/SHA256SUMS) e sua assinatura'
          },
          {
            'Parte': 'Guia de instalação',
            'Onde obter': '[localghost.ai/setup](https://www.localghost.ai/setup) (passo a passo, com uma versão curta em cinco etapas)'
          },
          {
            'Parte': 'Site oficial',
            'Onde obter': '[www.localghost.ai](https://www.localghost.ai)'
          },
          {
            'Parte': 'Política de privacidade',
            'Onde obter': '[localghost.ai/privacy](https://www.localghost.ai/privacy) (atualizada em 23 de outubro de 2026)'
          },
          {
            'Parte': 'Código-fonte',
            'Onde obter': '[github.com/LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)'
          },
          {
            'Parte': 'Relatos de segurança',
            'Onde obter': '[SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md) (e-mail criptografado com PGP)'
          }
        ],
        note: 'Versão analisada: 0.0.7 («wisp»), publicada em 23 de outubro de 2026 segundo a página de versões do GitHub, que é a última atualização do projeto no momento da verificação. O servidor é instalado pelo terminal no Debian 13, exige um TPM ativado na BIOS e leva de uma a duas horas segundo o guia; o app do celular é instalado a partir do arquivo APK, não pelo Google Play.'
      },
      requirements: {
        id: 'requirements',
        title: 'O que você precisa',
        content: [
          '**O LocalGhost exige um computador x86-64 com Debian 13 e chip TPM 2.0, um disco vazio ou um arquivo de 20 GB para o volume criptografado e um celular com Android 15 ou superior.** Uma placa de vídeo NVIDIA é opcional, mas acelera os modelos.'
        ],
        columns: [
          'Item',
          'Requisito segundo o guia de instalação'
        ],
        rows: [
          {
            'Item': 'Computador',
            'Requisito segundo o guia de instalação': 'x86-64, Debian 13, terminal de pelo menos 57 por 35 caracteres'
          },
          {
            'Item': 'TPM',
            'Requisito segundo o guia de instalação': 'TPM 2.0 (o de firmware serve); sem ele há um nível por software'
          },
          {
            'Item': 'Volume',
            'Requisito segundo o guia de instalação': 'Disco vazio ou arquivo de 20 GB ou mais; nunca em rede'
          },
          {
            'Item': 'Placa de vídeo',
            'Requisito segundo o guia de instalação': 'NVIDIA opcional; a máquina do projeto tem 12 GB'
          },
          {
            'Item': 'Celular',
            'Requisito segundo o guia de instalação': 'Android 15 ou superior; sem Google Play Services'
          },
          {
            'Item': 'Rede',
            'Requisito segundo o guia de instalação': 'Internet durante a instalação (cerca de 12 GB do espelho do projeto)'
          }
        ],
        note: 'Segundo o guia, a mesma máquina descreve cerca de 24 fotos por hora só com a CPU, e o trabalho noturno de memória após um dia cheio leva cerca de duas horas com uma placa de 12 GB contra mais de um dia na CPU; o autor informa cerca de 53 tokens por segundo com o Gemma 4 12B nessa placa. O PromptQuorum não reproduziu esses números. Para acessar a máquina fora de casa também são necessários um domínio e uma porta redirecionada.'
      },
      pricing: {
        id: 'pricing',
        title: 'Preços',
        content: [
          '**O software é gratuito: o projeto declara licença MIT, sem assinatura, sem conta e sem servidor de licenças.**'
        ],
        columns: [
          'Item',
          'Custo'
        ],
        rows: [
          {
            'Item': 'Servidor e app Android',
            'Custo': 'Grátis (licença MIT)'
          },
          {
            'Item': 'Seu próprio hardware',
            'Custo': 'O que a máquina custar para você'
          },
          {
            'Item': 'Montagem de referência (estimativa do projeto)',
            'Custo': 'Cerca de £1,130 em peças, junho de 2026'
          },
          {
            'Item': 'Caixas prontas',
            'Custo': 'Não estão à venda; preço não definido'
          }
        ],
        note: 'Lido na página About em 24 de outubro de 2026; o valor é o do projeto em libras esterlinas e não foi convertido. Segundo o projeto, uma futura caixa seria vendida a preço de peças e montagem mais 30% de margem, e futuros daemons opcionais poderiam ser vendidos como pacotes de pagamento único; nada disso existe ainda. O repositório também lista um endereço de criptomoeda para doações.'
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem o guia de instalação do projeto; o PromptQuorum não os executou.**'
        ],
        numberedItems: [
          {
            title: 'Prepare a máquina Debian',
            whyItMatters: 'Instale o Debian 13, ative o TPM na BIOS e instale sudo, nginx, curl e gpg. Se houver uma placa NVIDIA, instale antes, por conta própria, o driver e o CUDA.'
          },
          {
            title: 'Instale primeiro o app no celular',
            whyItMatters: 'O guia pede isso antes de a máquina mostrar o código QR de cadastro, pois o código contém o certificado do celular e deve ser escaneado assim que aparecer.'
          },
          {
            title: 'Baixe e verifique a versão do servidor',
            whyItMatters: 'Baixe o arquivo, o SHA256SUMS e sua assinatura, importe a chave PGP do projeto e confira a assinatura e os hashes antes de descompactar.'
          },
          {
            title: 'Execute o instalador na máquina',
            whyItMatters: 'O script de instalação pede um disco ou arquivo para o volume, o selo do TPM e seus PINs (um PIN principal e um de apagamento opcional) e depois mostra um código QR.'
          },
          {
            title: 'Escaneie o código QR e desbloqueie',
            whyItMatters: 'Escanear é o cadastro. Depois execute o script de atualização para trazer a Wikipédia e novidades; uma biblioteca grande de fotos leva alguns dias para ser indexada.'
          }
        ]
      },
      features: {
        id: 'key-features',
        title: 'O que o wisp 0.0.7 inclui',
        content: [
          '**O projeto lista onze daemons nesta versão, e cada item abaixo vem do README ou da página About.**'
        ],
        items: [
          '**Captura.** Fotos e vídeos são arquivados como estão e legendados e etiquetados pelo modelo; anotações, um registro noturno e notas de voz viram entradas de diário, com a voz transcrita na máquina.',
          '**Memória.** Chats, anotações e notas de voz são condensados em memórias que você pode editar ou apagar, e uma história do dia é escrita a partir das fotos, da trilha, dos dados de saúde e do registro.',
          '**Busca e chat.** Um índice de busca cobre o arquivo e o chat responde com seu próprio contexto; quando não consegue, o celular faz uma busca na web e cita as fontes.',
          '**Lembrança.** Uma reflexão matinal sobre uma memória antiga e a sugestão de um lugar próximo.',
          '**Crítico.** Um dos 28 detectores previstos funciona: avisa quando você conversa com a máquina o dobro de antes.',
          '**Segurança.** Um volume criptografado LUKS2 selado ao TPM, um certificado do celular renovado durante o uso, um PIN de apagamento que destrói a chave e um bloqueio após PINs errados.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**O projeto diz que seus dados ficam na máquina, sem conta, sem análise de uso, sem relatórios de falha e sem servidor próprio que guarde algo seu.** O README acrescenta que uma requisição que sua lista não cite seria um bug e um relato de segurança.',
          'Segundo a página de privacidade, a máquina pede à internet apenas dados públicos, como cotações, notícias, arquivos de modelos meteorológicos e atualizações do espelho assinado do projeto, sem nada seu na requisição. Quando uma pergunta do chat precisa da web, o celular envia as palavras da pergunta ao DuckDuckGo ou, com sua própria chave, ao Brave. O site e o espelho não mantêm registros de acesso, e um relé de e-mail para o endereço opcional da máquina guarda as mensagens seladas com a chave da máquina até que ela as busque.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do autor. O PromptQuorum não auditou o código nem o tráfego de rede, e segundo o README a chave da autoridade certificadora da máquina fica no disco do sistema nesta versão.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Donos de homelab e NAS** com uma máquina Debian, à vontade com o terminal e com um ajuste de TPM.',
          '**Usuários de Android** que querem manter fotos, anotações e dados de saúde em uma máquina sob seu controle.',
          '**Quem hospeda os próprios serviços e desenvolvedores Go** que querem ler, testar ou estender o código.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade na prática.** O PromptQuorum não executou o LocalGhost; qualidade da memória, legendas, velocidade e impacto em bateria ou armazenamento não foram testados.',
          '**Privacidade e segurança.** A afirmação de que não há telemetria, a cadeia de atualizações assinadas e a auditoria de segurança citada no README não foram conferidas com o código nem com o tráfego.',
          '**Maturidade.** Segundo o README, uma máquina o executa com um celular e não há usuários externos citados; volume isca, backup ponto a ponto e um produto de hardware não estão construídos.',
          '**Plataformas.** Não há cliente para iPhone, desktop ou web, e o servidor roda só em Linux, com o Debian 13 documentado.',
          '**Equipe.** A página About fala de um fundador que constrói com ferramentas de IA e não promete prazo de resposta para o suporte.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: [
          'App',
          'Plataformas',
          'Preço / licença',
          'Diferença principal'
        ],
        rows: [
          {
            'App': '[Odysseus](/pt/power-local-llm/odysseus-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal': 'Espaço de trabalho de IA auto-hospedado para chat, agentes, pesquisa e documentos, usado em um app de desktop ou no navegador'
          },
          {
            'App': '[Khoj](/pt/power-local-llm/khoj-ai-second-brain-review)',
            'Plataformas': 'Windows, macOS, Linux, web',
            'Preço / licença': 'Grátis / AGPL 3.0',
            'Diferença principal': 'Segundo cérebro que pesquisa suas anotações e documentos e sincroniza com ferramentas como o Obsidian'
          },
          {
            'App': '[Second Me](/pt/power-local-llm/second-me-review-2026)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Treina um modelo personalizado com seus dados em vez de montar um arquivo alimentado pelo celular'
          }
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.'
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar o LocalGhost sem placa de vídeo?',
            a: 'Segundo o guia de instalação, sim: tudo roda então na CPU, mas devagar; ele cita cerca de 24 fotos descritas por hora.'
          },
          {
            q: 'O que acontece se a empresa desaparecer?',
            a: 'O projeto diz que a máquina continua rodando a versão instalada porque não há servidor de licenças nem chave de desligamento remoto, e que qualquer pessoa pode bifurcar o código MIT. O PromptQuorum não consegue verificar como isso funcionaria na prática.'
          },
          {
            q: 'Um agente de IA ou outro app pode acessar minha máquina?',
            a: 'O README diz que, de propósito, não há API nem servidor MCP para outros chamadores, e que a máquina responde a eles como se estivesse fora do ar. Acrescenta que uma interface para agentes pode vir depois.'
          },
          {
            q: 'Como está o hardware?',
            a: 'Não há hardware à venda; o autor diz que uma caixa montada pela empresa está prevista para uma linha de versões posterior chamada specter e não dá data.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O LocalGhost é uma IA pessoal gratuita, com licença MIT, que, segundo o autor, guarda fotos, anotações, voz e dados de saúde na sua própria máquina Debian e os devolve por um app Android, com sete versões nas três primeiras semanas. Em contrapartida, é um projeto de uma pessoa só, com primeira versão em 2 de outubro de 2026, a instalação é um trabalho de várias etapas no terminal, o único cliente é Android, várias partes prometidas não existem e toda afirmação sobre privacidade e qualidade é do próprio autor. Serve a quem hospeda os próprios serviços, tem segurança técnica e quer acompanhar um projeto inicial; quem procura hoje um assistente pessoal para desktop pode comparar o [Odysseus](/pt/power-local-llm/odysseus-review) ou o [Khoj](/pt/power-local-llm/khoj-ai-second-brain-review).'
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[About LocalGhost](https://www.localghost.ai/about) — o que faz, dados principais, preços e roteiro, verificados em 24 de outubro de 2026.',
          '[Set Up a LocalGhost Box](https://www.localghost.ai/setup) — requisitos e passos de instalação.',
          '[Página de privacidade do LocalGhost](https://www.localghost.ai/privacy) — a lista de requisições de saída e o que o site, o espelho e o relé de e-mail guardam.',
          '[LocalGhost no GitHub](https://github.com/LocalGhostDao/localghost) — README, licença MIT e [SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md).',
          '[Versão wisp 0.0.7](https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7) — data de publicação e lista de arquivos.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Odysseus Review](/pt/power-local-llm/odysseus-review) — um espaço de trabalho de IA auto-hospedado e voltado ao local.',
          '[Khoj](/pt/power-local-llm/khoj-ai-second-brain-review) — um segundo cérebro de IA sobre suas próprias anotações.',
          '[Second Me Review](/pt/power-local-llm/second-me-review-2026) — uma IA personalizada treinada com seus próprios dados.',
          '[Apps de chat locais e assistentes comparados](/pt/power-local-llm/local-llm-chat-assistants-compared) — a comparação da categoria de clientes de chat e assistentes pessoais.'
        ]
      }
    }
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/localghost-review-hero-ar.webp',
    title: 'مراجعة LocalGhost: خادم ذكاء اصطناعي شخصي تستضيفه بنفسك',
    seoTitle: 'مراجعة LocalGhost: ذكاء اصطناعي شخصي خاص تستضيفه',
    intro: 'LocalGhost نظام ذكاء اصطناعي شخصي بترخيص MIT: عدة برامج خادم على جهاز Debian تملكه، تحفظ صورك وملاحظاتك ومذكراتك الصوتية وبياناتك الصحية وتقرؤها بنماذج محلية، مع تطبيق Android بوصفه المدخل الوحيد. تعكس هذه المراجعة موقع المشروع ومستودعه على GitHub والإصدار 0.0.7 كما جرى فحصها في 24 أكتوبر 2026.',
    metaDescription: 'مراجعة LocalGhost: خادم ذكاء اصطناعي شخصي مجاني بترخيص MIT لجهاز Debian تملكه، مع تطبيق Android. متطلبات الإعداد وادعاءات الخصوصية وما لم يُنجز بعد.',
    twitterDescription: 'مراجعة LocalGhost: ذكاء اصطناعي شخصي مفتوح المصدر يعمل على جهاز Debian تملكه ويُستخدم من هاتف Android. المتطلبات والادعاءات والأسئلة المفتوحة.',
    audience: 'مستضيفو الخدمات بأنفسهم ومالكو المختبرات المنزلية الذين يريدون معرفة ما يحتاجه LocalGhost وتكلفته ومدى صعوبة إعداده وأي ادعاءات عن الخصوصية والذاكرة تتركها المصادر دون تأكيد.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة LocalGhost',
    targetKeywords: [
      'مراجعة localghost',
      'ذكاء اصطناعي شخصي ذاتي الاستضافة',
      'ذاكرة ذكاء اصطناعي خاصة على جهازك',
      'تطبيق localghost لنظام android',
      'خادم ذكاء اصطناعي شخصي مفتوح المصدر',
      'localghost vs khoj'
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX GPU',
      'Debian 13 PC with TPM 2.0',
      'Android 15 phone'
    ],
    leadAnswerBlock: '**LocalGhost ذكاء اصطناعي شخصي مجاني بترخيص MIT يعمل على شكل مجموعة برامج خادم على جهاز Debian تملكه ولا يُستخدم إلا عبر تطبيق Android.** وهو مشروع شاب جدًا يقوده شخص واحد، وإصداره الأول بتاريخ 2 أكتوبر 2026، ولم تثبّته PromptQuorum ولم تختبره.',
    quickAnswerTop: {
      ar: {
        question: 'ماذا يفعل LocalGhost بالضبط؟',
        answer: 'بحسب المشروع، يجمع صورك ومقاطع الفيديو ومسار موقعك وملاحظاتك ومذكراتك الصوتية وبياناتك الصحية على جهازك، ويحوّلها إلى وصف للصور وقصص يومية وذكريات وإجابات دردشة.',
        bullets: [
          'نموذج اللغة والرؤية هو Gemma 4 12B الذي يقدّمه llama.cpp، وتُفرَّغ المذكرات الصوتية بواسطة whisper.cpp.',
          'تطبيق Android هو العميل الوحيد: لا يوجد تطبيق iPhone ولا تطبيق سطح مكتب ولا واجهة ويب.',
          'بحسب ملف README، لا حساب ولا تحليلات ولا خدمة سحابية تحتفظ ببياناتك.',
          'لا تُباع أجهزة بعد؛ تثبّته بنفسك على جهاز لديك.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer'
      },
      {
        label: 'ما هو LocalGhost؟',
        anchor: 'what-is-localghost'
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it'
      },
      {
        label: 'ما تحتاجه',
        anchor: 'requirements'
      },
      {
        label: 'الأسعار',
        anchor: 'pricing'
      },
      {
        label: 'كيف تبدأ',
        anchor: 'getting-started'
      },
      {
        label: 'ما يتضمنه wisp 0.0.7',
        anchor: 'key-features'
      },
      {
        label: 'الخصوصية واستخدام الشبكة',
        anchor: 'privacy'
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use'
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
        anchor: 'who-should-not-use'
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives'
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq'
      },
      {
        label: 'الخلاصة',
        anchor: 'verdict'
      },
      {
        label: 'المصادر',
        anchor: 'sources'
      },
      {
        label: 'قراءات ذات صلة',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalGhost ذكاء اصطناعي شخصي مفتوح المصدر يحتفظ بذاكرة خاصة لحياتك على جهاز Debian تملكه.'
          },
          {
            type: 'plain-terms',
            text: 'تُعدّ الخادم بنفسك، وتثبّت تطبيق Android، وتمسح رمز QR، ثم لا يتحدث الهاتف بعد ذلك إلا مع جهازك.'
          }
        ],
        items: [
          'الصيانة: صدرت سبعة إصدارات (من 0.0.1 إلى 0.0.7) بين 2 و23 أكتوبر 2026 ويعود المستودع إلى ديسمبر 2025؛ المشروع نشط ولا ينطبق تحذير المشروع المتوقف.',
          'الترخيص: MIT؛ البرنامج مجاني وبلا اشتراك.',
          'الإعداد: إجراء متعدد الخطوات عبر الطرفية على Debian 13، وليس مثبّتًا بنقرتين.',
          'النضج: يذكر المطوّر أن وحدة التخزين الخادعة والنسخ الاحتياطي بين الأجهزة والعتاد لم تُبنَ بعد.',
          'الأساس: الموقع وملف README وصفحة الإصدار، قُرئت في 24 أكتوبر 2026، دون اختبار عملي.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تثبّت PromptQuorum برنامج LocalGhost ولم تختبره ولم تقِس أداءه. العبارات الواردة أدناه عن الخصوصية وجودة الذاكرة والسرعة هي عبارات المشروع نفسه.'
          }
        ]
      },
      overview: {
        id: 'what-is-localghost',
        title: 'ما هو LocalGhost؟',
        content: [
          '**LocalGhost نظام ذكاء اصطناعي شخصي يتألف من أحد عشر برنامجًا صغيرًا بلغة Go تُسمى daemons، يؤدي كل منها مهمة واحدة على جهاز تملكه، ومدخله الوحيد تطبيق Android.** تنشره شركة LocalGhost.ai Ltd المسجلة في إنجلترا وويلز، ويبنيه مؤسسها Vlad Cealicu؛ وبدأ المشروع في ديسمبر 2025.',
          'تستقبل هذه البرامج الصور ومقاطع الفيديو والموقع والملاحظات والمذكرات الصوتية والبيانات الصحية، وتصفها وتفهرسها بنماذج محلية، وتكتب قصة قصيرة لكل يوم وتستخلص منها ذكريات. وهناك برنامج مستقل يُفترض أن يعارضك، وآخر يتولى التشفير وفتح القفل. محرك النماذج هو llama.cpp، ويذكر README نموذج Gemma 4 12B للغة والرؤية وEmbeddingGemma للبحث، والشيفرة في [LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost).'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**لدى LocalGhost جزآن تنزّلهما من GitHub Releases: ملف APK موقّع للهاتف وأرشيف خادم لنظام Linux.** لا توجد صفحة في متجر تطبيقات ولا نسخة مستضافة.'
        ],
        columns: [
          'الجزء',
          'مصدر الحصول عليه'
        ],
        rows: [
          {
            'الجزء': 'تطبيق Android (الهاتف)',
            'مصدر الحصول عليه': '[localghost-app-0.0.7.apk](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-app-0.0.7.apk) (موقّع؛ Android 15 أو أحدث)'
          },
          {
            'الجزء': 'الخادم (Debian 13، x86-64)',
            'مصدر الحصول عليه': '[localghost-server-0.0.7-linux-amd64.tar.gz](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-server-0.0.7-linux-amd64.tar.gz) مع [SHA256SUMS](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/SHA256SUMS) وتوقيعه'
          },
          {
            'الجزء': 'دليل الإعداد',
            'مصدر الحصول عليه': '[localghost.ai/setup](https://www.localghost.ai/setup) (خطوة بخطوة، مع نسخة مختصرة من خمس خطوات)'
          },
          {
            'الجزء': 'الموقع الرسمي',
            'مصدر الحصول عليه': '[www.localghost.ai](https://www.localghost.ai)'
          },
          {
            'الجزء': 'سياسة الخصوصية',
            'مصدر الحصول عليه': '[localghost.ai/privacy](https://www.localghost.ai/privacy) (حُدّثت في 23 أكتوبر 2026)'
          },
          {
            'الجزء': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[github.com/LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)'
          },
          {
            'الجزء': 'الإبلاغ عن الثغرات',
            'مصدر الحصول عليه': '[SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md) (بريد مشفّر بـ PGP)'
          }
        ],
        note: 'الإصدار الذي رُوجع: 0.0.7 («wisp»)، نُشر في 23 أكتوبر 2026 بحسب صفحة الإصدار على GitHub، وهو آخر تحديث للمشروع وقت الفحص. يُعدّ الخادم عبر الطرفية على Debian 13 ويحتاج إلى TPM مفعّل في BIOS ويستغرق ساعة إلى ساعتين بحسب الدليل؛ ويُثبَّت تطبيق الهاتف من ملف APK لا من Google Play.'
      },
      requirements: {
        id: 'requirements',
        title: 'ما تحتاجه',
        content: [
          '**يحتاج LocalGhost إلى حاسوب x86-64 يعمل بنظام Debian 13 ومزوّد برقاقة TPM 2.0، وقرص فارغ أو ملف بحجم 20 GB للوحدة المشفّرة، وهاتف Android 15 أو أحدث.** بطاقة الرسوميات من NVIDIA اختيارية لكنها تسرّع النماذج.'
        ],
        columns: [
          'البند',
          'المتطلب بحسب دليل الإعداد'
        ],
        rows: [
          {
            'البند': 'الحاسوب',
            'المتطلب بحسب دليل الإعداد': 'x86-64 وDebian 13 وطرفية لا تقل عن 57 في 35 حرفًا'
          },
          {
            'البند': 'TPM',
            'المتطلب بحسب دليل الإعداد': 'TPM 2.0 (يكفي TPM البرمجي في الفيرموير)؛ ويوجد مستوى برمجي بدونه'
          },
          {
            'البند': 'وحدة التخزين',
            'المتطلب بحسب دليل الإعداد': 'قرص فارغ أو ملف 20 GB فأكثر؛ وليس على مشاركة شبكية'
          },
          {
            'البند': 'بطاقة الرسوميات',
            'المتطلب بحسب دليل الإعداد': 'NVIDIA اختيارية؛ وجهاز المشروع بسعة 12 GB'
          },
          {
            'البند': 'الهاتف',
            'المتطلب بحسب دليل الإعداد': 'Android 15 أو أحدث؛ دون حاجة إلى Google Play Services'
          },
          {
            'البند': 'الشبكة',
            'المتطلب بحسب دليل الإعداد': 'إنترنت أثناء الإعداد (نحو 12 GB من مرآة المشروع)'
          }
        ],
        note: 'بحسب الدليل، يصف الجهاز نفسه نحو 24 صورة في الساعة بالمعالج وحده، ويستغرق عمل الذاكرة الليلي بعد يوم حافل نحو ساعتين على بطاقة 12 GB مقابل أكثر من يوم على المعالج؛ ويذكر المطوّر نحو 53 رمزًا في الثانية لنموذج Gemma 4 12B على تلك البطاقة. لم تعِد PromptQuorum إنتاج هذه الأرقام. والوصول إلى الجهاز خارج المنزل يتطلب أيضًا نطاقًا ومنفذًا موجَّهًا.'
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار',
        content: [
          '**البرنامج مجاني: يصرّح المشروع بترخيص MIT وبلا اشتراك ولا حساب ولا خادم تراخيص.**'
        ],
        columns: [
          'البند',
          'التكلفة'
        ],
        rows: [
          {
            'البند': 'الخادم وتطبيق Android',
            'التكلفة': 'مجاني (ترخيص MIT)'
          },
          {
            'البند': 'العتاد الخاص بك',
            'التكلفة': 'ما يكلّفك الجهاز'
          },
          {
            'البند': 'التجميعة المرجعية (تقدير المشروع)',
            'التكلفة': 'نحو £1,130 للقطع، يونيو 2026'
          },
          {
            'البند': 'الصناديق الجاهزة',
            'التكلفة': 'غير معروضة للبيع؛ السعر غير محدد'
          }
        ],
        note: 'قُرئ من صفحة About في 24 أكتوبر 2026؛ والمبلغ هو رقم المشروع بالجنيه الإسترليني دون تحويل. يقول المشروع إن صندوقًا مستقبليًا سيُباع بسعر القطع والتجميع مضافًا إليه هامش 30 في المئة، وإن برامج daemons اختيارية مستقبلية قد تُباع كحزم بدفعة واحدة؛ ولا شيء من هذا موجود بعد. ويذكر المستودع كذلك عنوان عملة مشفّرة للتبرعات.'
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات دليل إعداد المشروع؛ ولم تنفّذها PromptQuorum.**'
        ],
        numberedItems: [
          {
            title: 'جهّز جهاز Debian',
            whyItMatters: 'ثبّت Debian 13 وفعّل TPM في BIOS وثبّت sudo وnginx وcurl وgpg. وإن وُجدت بطاقة NVIDIA فثبّت برنامج التشغيل وCUDA بنفسك أولًا.'
          },
          {
            title: 'ثبّت التطبيق على الهاتف أولًا',
            whyItMatters: 'يطلب الدليل ذلك قبل أن يعرض الجهاز رمز QR للتسجيل، لأن الرمز يحمل شهادة الهاتف وينبغي مسحه فور ظهوره.'
          },
          {
            title: 'نزّل إصدار الخادم وتحقق منه',
            whyItMatters: 'نزّل الأرشيف وSHA256SUMS وتوقيعه، واستورد مفتاح PGP الخاص بالمشروع، وافحص التوقيع وبصمات الملفات قبل فك الضغط.'
          },
          {
            title: 'شغّل المثبّت على الجهاز',
            whyItMatters: 'يسألك سكربت التثبيت عن قرص أو ملف للوحدة وعن ختم TPM وعن أرقام PIN (رقم رئيسي ورقم مسح اختياري)، ثم يعرض رمز QR.'
          },
          {
            title: 'امسح رمز QR وافتح القفل',
            whyItMatters: 'المسح هو التسجيل. ثم شغّل سكربت التحديث لجلب ويكيبيديا وما هو أحدث؛ ومكتبة الصور الكبيرة تحتاج إلى أيام لتُفهرس.'
          }
        ]
      },
      features: {
        id: 'key-features',
        title: 'ما يتضمنه wisp 0.0.7',
        content: [
          '**يسرد المشروع أحد عشر daemon في هذا الإصدار، وكل بند أدناه مأخوذ من README أو صفحة About.**'
        ],
        items: [
          '**الالتقاط.** تُؤرشف الصور ومقاطع الفيديو كما هي ويضيف النموذج وصفًا ووسومًا؛ وتصير الملاحظات وتسجيل المساء والمذكرات الصوتية مدخلات يوميات، ويُفرَّغ الصوت على الجهاز.',
          '**الذاكرة.** تُلخَّص الدردشات والملاحظات والمذكرات الصوتية في ذكريات يمكنك تعديلها أو حذفها، وتُكتب قصة يومية من الصور والمسار والبيانات الصحية وتسجيل المساء.',
          '**البحث والدردشة.** يغطي فهرس بحث الأرشيف، وتجيب الدردشة من سياقك الخاص؛ وحين لا تستطيع يجري الهاتف بحثًا على الويب ويذكر مصادره.',
          '**التذكير.** تأمل صباحي في ذكرى قديمة واقتراح مكان قريب.',
          '**الناقد.** يعمل كاشف واحد من 28 كاشفًا مخططًا: ينبّهك حين تتحدث إلى الجهاز ضعف ما كنت تفعل سابقًا.',
          '**الأمان.** وحدة مشفّرة LUKS2 مختومة بـ TPM، وشهادة هاتف تتجدد أثناء الاستخدام، ورقم PIN للمسح يُتلف المفتاح، وإغلاق بعد أرقام PIN خاطئة.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**يقول المشروع إن بياناتك تبقى على الجهاز، بلا حساب ولا تحليلات ولا تقارير أعطال ولا خادم خاص به يحتفظ بأي شيء منك.** ويضيف README أن أي طلب لا تذكره قائمته يُعدّ خطأً وبلاغًا أمنيًا.',
          'بحسب صفحة الخصوصية، لا يطلب الجهاز من الإنترنت إلا بيانات عامة مثل الأسعار والأخبار وملفات نماذج الطقس والتحديثات من المرآة الموقّعة الخاصة بالمشروع، دون أن يتضمن الطلب شيئًا منك. وحين يحتاج سؤال الدردشة إلى الويب، يرسل الهاتف كلمات السؤال إلى DuckDuckGo أو إلى Brave بمفتاحك الخاص. لا يحتفظ الموقع والمرآة بسجلات وصول، ويبقي مُرحِّل بريد لعنوان الجهاز الاختياري الرسائل مختومة بمفتاح الجهاز إلى أن يجلبها.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه عبارات المطوّر. لم تدقّق PromptQuorum الشيفرة ولا حركة الشبكة، وبحسب README يقع مفتاح مرجع الشهادات الخاص بالجهاز على قرص النظام في هذا الإصدار.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مالكو المختبرات المنزلية وأجهزة NAS** ممن لديهم جهاز Debian ويرتاحون إلى الطرفية وإعداد TPM.',
          '**مستخدمو Android** الذين يريدون إبقاء الصور والملاحظات والبيانات الصحية على جهاز تحت سيطرتهم.',
          '**مستضيفو الخدمات بأنفسهم ومطورو Go** الذين يريدون قراءة الشيفرة أو اختبارها أو توسيعها.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة عمليًا.** لم تشغّل PromptQuorum برنامج LocalGhost، فجودة الذاكرة والأوصاف والسرعة وأثره في البطارية أو التخزين غير مختبرة.',
          '**الخصوصية والأمان.** لم يُقارَن غياب التتبع، ولا سلسلة التحديثات الموقّعة، ولا التدقيق الأمني الذي يذكره README، بالشيفرة أو بحركة الشبكة.',
          '**النضج.** بحسب README يعمل على جهاز واحد مع هاتف واحد، ولا يُذكر مستخدمون من خارجه؛ ولم تُبنَ وحدة التخزين الخادعة ولا النسخ الاحتياطي بين الأجهزة ولا منتج العتاد.',
          '**المنصات.** لا يوجد عميل لـ iPhone أو سطح المكتب أو الويب، ويعمل الخادم على Linux فقط مع توثيق Debian 13.',
          '**الفريق.** تذكر صفحة About مؤسسًا واحدًا يبني بأدوات الذكاء الاصطناعي ولا تعد بمدة استجابة للدعم.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الرخصة',
          'الفرق الأبرز'
        ],
        rows: [
          {
            'التطبيق': '[Odysseus](/ar/power-local-llm/odysseus-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / AGPL-3.0',
            'الفرق الأبرز': 'مساحة عمل ذكاء اصطناعي ذاتية الاستضافة للدردشة والوكلاء والبحث والمستندات، تُستخدم من تطبيق سطح المكتب أو المتصفح'
          },
          {
            'التطبيق': '[Khoj](/ar/power-local-llm/khoj-ai-second-brain-review)',
            'المنصات': 'Windows وmacOS وLinux وويب',
            'السعر / الرخصة': 'مجاني / AGPL 3.0',
            'الفرق الأبرز': 'دماغ ثانٍ يبحث في ملاحظاتك ومستنداتك ويتزامن مع أدوات مثل Obsidian'
          },
          {
            'التطبيق': '[Second Me](/ar/power-local-llm/second-me-review-2026)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / Apache 2.0',
            'الفرق الأبرز': 'يدرّب نموذجًا مخصصًا على بياناتك بدل بناء أرشيف يغذّيه الهاتف'
          }
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.'
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني تشغيل LocalGhost دون بطاقة رسوميات؟',
            a: 'بحسب دليل الإعداد، نعم؛ يعمل كل شيء حينئذ على المعالج لكن ببطء، إذ يذكر نحو 24 صورة موصوفة في الساعة.'
          },
          {
            q: 'ماذا يحدث إذا اختفت الشركة؟',
            a: 'يقول المشروع إن الجهاز يواصل تشغيل الإصدار المثبّت لأنه لا يوجد خادم تراخيص ولا مفتاح إيقاف عن بُعد، ويمكن لأي شخص تفريع شيفرة MIT. ولا تستطيع PromptQuorum التحقق من كيفية سير ذلك عمليًا.'
          },
          {
            q: 'هل يستطيع وكيل ذكاء اصطناعي أو تطبيق آخر الوصول إلى جهازي؟',
            a: 'يقول README إنه لا توجد عمدًا واجهة API ولا خادم MCP لأي جهة أخرى، وإن الجهاز يرد عليها كما لو كان متوقفًا. ويضيف أن واجهة للوكلاء قد تأتي لاحقًا.'
          },
          {
            q: 'ما وضع العتاد؟',
            a: 'لا يُباع عتاد؛ ويقول المطوّر إن صندوقًا تبنيه الشركة مخطط لخط إصدارات لاحق اسمه specter، دون تحديد موعد.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'LocalGhost ذكاء اصطناعي شخصي مجاني بترخيص MIT يحتفظ، بحسب مطوّره، بالصور والملاحظات والصوت والبيانات الصحية على جهاز Debian تملكه ويعيدها إليك عبر تطبيق Android، مع سبعة إصدارات في أسابيعه الثلاثة الأولى. في المقابل هو مشروع يقوده شخص واحد وإصداره الأول في 2 أكتوبر 2026، وإعداده عمل متعدد الخطوات في الطرفية، وعميله الوحيد Android، وعدة أجزاء موعودة لم تُبنَ بعد، وكل ما يُقال عن الخصوصية والجودة صادر عن المطوّر نفسه. يناسب مستضيفي الخدمات بأنفسهم ذوي الخبرة التقنية الراغبين في متابعة مشروع في بدايته؛ ومن يبحث اليوم عن مساعد شخصي لسطح المكتب يمكنه مقارنة [Odysseus](/ar/power-local-llm/odysseus-review) أو [Khoj](/ar/power-local-llm/khoj-ai-second-brain-review).'
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[About LocalGhost](https://www.localghost.ai/about) — ما يفعله والحقائق الأساسية والأسعار وخارطة الطريق، فُحصت في 24 أكتوبر 2026.',
          '[Set Up a LocalGhost Box](https://www.localghost.ai/setup) — المتطلبات وخطوات التثبيت.',
          '[صفحة خصوصية LocalGhost](https://www.localghost.ai/privacy) — قائمة الطلبات الصادرة وما يحتفظ به الموقع والمرآة ومُرحِّل البريد.',
          '[LocalGhost على GitHub](https://github.com/LocalGhostDao/localghost) — README وترخيص MIT وملف [SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md).',
          '[إصدار wisp 0.0.7](https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7) — تاريخ النشر وقائمة الملفات.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Odysseus](/ar/power-local-llm/odysseus-review) — مساحة عمل ذكاء اصطناعي ذاتية الاستضافة تعطي الأولوية للمحلي.',
          '[مراجعة Khoj](/ar/power-local-llm/khoj-ai-second-brain-review) — دماغ ثانٍ بالذكاء الاصطناعي فوق ملاحظاتك الخاصة.',
          '[مراجعة Second Me](/ar/power-local-llm/second-me-review-2026) — ذكاء اصطناعي مخصص مدرَّب على بياناتك الخاصة.',
          '[مقارنة تطبيقات الدردشة والمساعدات المحلية](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة الفئة لعملاء الدردشة والمساعدين الشخصيين.'
        ]
      }
    }
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/localghost-review-hero-zh.webp',
    title: 'LocalGhost 评测：自己托管的个人 AI 服务器',
    seoTitle: 'LocalGhost 评测：自托管的私人个人 AI 服务器',
    intro: 'LocalGhost 是采用 MIT 许可证的个人 AI 系统：由运行在你自己的 Debian 设备上的多个服务器程序保存你的照片、笔记、语音备忘和健康数据，并用本地模型读取，唯一入口是 Android 应用。本评测基于 2026 年 10 月 24 日核查的项目网站、GitHub 仓库和 0.0.7 版本。',
    metaDescription: 'LocalGhost 评测：免费的 MIT 许可个人 AI 服务器，运行在自有 Debian 设备上，配 Android 应用。部署要求、隐私声明和尚未完成的部分。',
    twitterDescription: 'LocalGhost 评测：运行在自有 Debian 设备上、通过 Android 手机使用的开源个人 AI。配置要求、项目声明与待解问题。',
    audience: '想了解 LocalGhost 需要什么、价格如何、部署有多麻烦，以及哪些隐私与记忆方面的声明在来源中无法证实的自托管用户和家庭实验室玩家。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalGhost 评测',
    targetKeywords: [
      'localghost 评测',
      '自托管个人ai',
      '在自有硬件上的私人ai记忆',
      'localghost android 应用',
      '开源个人ai服务器',
      'localghost vs khoj'
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX GPU',
      'Debian 13 PC with TPM 2.0',
      'Android 15 phone'
    ],
    leadAnswerBlock: '**LocalGhost 是一款免费的 MIT 许可个人 AI，以一组服务器程序的形式运行在你自己的 Debian 设备上，只能通过 Android 应用使用。** 它是一个由一个人开发的非常年轻的项目，首个版本发布于 2026 年 10 月 2 日，PromptQuorum 没有安装或测试过它。',
    quickAnswerTop: {
      zh: {
        question: 'LocalGhost 到底做什么？',
        answer: '据项目介绍，它把你的照片、视频、位置轨迹、笔记、语音备忘和健康数据收集到你自己的设备上，并转化为图片说明、每日故事、记忆和聊天回答。',
        bullets: [
          '语言与视觉模型是由 llama.cpp 提供服务的 Gemma 4 12B；语音备忘用 whisper.cpp 转写。',
          'Android 应用是唯一的客户端：没有 iPhone 应用、桌面应用或网页界面。',
          '据 README，没有账号、没有统计分析，也没有保存你数据的云服务。',
          '尚未销售硬件；需要你自己安装在已有的设备上。'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer'
      },
      {
        label: 'LocalGhost 是什么？',
        anchor: 'what-is-localghost'
      },
      {
        label: '获取方式',
        anchor: 'get-it'
      },
      {
        label: '配置要求',
        anchor: 'requirements'
      },
      {
        label: '定价',
        anchor: 'pricing'
      },
      {
        label: '上手步骤',
        anchor: 'getting-started'
      },
      {
        label: 'wisp 0.0.7 包含什么',
        anchor: 'key-features'
      },
      {
        label: '隐私与网络使用',
        anchor: 'privacy'
      },
      {
        label: '适合哪些人',
        anchor: 'who-should-use'
      },
      {
        label: '我们未能核实的内容',
        anchor: 'who-should-not-use'
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives'
      },
      {
        label: '常见问题',
        anchor: 'faq'
      },
      {
        label: '结论',
        anchor: 'verdict'
      },
      {
        label: '来源',
        anchor: 'sources'
      },
      {
        label: '相关阅读',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalGhost 是一款开源个人 AI，在你自己的 Debian 设备上保存关于你生活的私人记忆。'
          },
          {
            type: 'plain-terms',
            text: '你自己部署服务器、安装 Android 应用、扫描二维码，此后手机只与你自己的设备通信。'
          }
        ],
        items: [
          '维护情况：2026 年 10 月 2 日至 23 日发布了七个版本（0.0.1 至 0.0.7），仓库创建于 2025 年 12 月；项目仍在更新，不适用停更警告。',
          '许可证：MIT；软件免费，没有订阅。',
          '部署：在 Debian 13 上通过终端分多步完成，不是双击安装。',
          '成熟度：开发者列出诱饵卷、点对点备份和硬件尚未完成。',
          '依据：2026 年 10 月 24 日阅读的网站、README 和发布页面，未做实际测试。'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 没有安装、测试或评测 LocalGhost。下文关于隐私、记忆质量和速度的说法均来自项目方。'
          }
        ]
      },
      overview: {
        id: 'what-is-localghost',
        title: 'LocalGhost 是什么？',
        content: [
          '**LocalGhost 是由十一个 Go 语言小程序（称为 daemon）组成的个人 AI 系统，每个程序在你自己的设备上负责一项工作，唯一入口是 Android 应用。** 它由在英格兰和威尔士注册的 LocalGhost.ai Ltd 发布，由创始人 Vlad Cealicu 开发；项目始于 2025 年 12 月。',
          '这些 daemon 接收照片、视频、位置、笔记、语音备忘和健康数据，用本地模型为其生成描述并建立索引，为每一天写一段简短的故事，并提炼出记忆。另有一个独立的 daemon 负责反驳你，还有一个负责加密与解锁。模型引擎是 llama.cpp，README 提到语言与视觉使用 Gemma 4 12B、搜索使用 EmbeddingGemma，代码位于 [LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)。'
        ]
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**LocalGhost 有两部分需要从 GitHub Releases 下载：手机用的已签名 APK，以及设备用的 Linux 服务器压缩包。** 没有应用商店页面，也没有托管版本。'
        ],
        columns: [
          '部分',
          '获取位置'
        ],
        rows: [
          {
            '部分': 'Android 应用（手机）',
            '获取位置': '[localghost-app-0.0.7.apk](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-app-0.0.7.apk)（已签名；Android 15 或更高）'
          },
          {
            '部分': '服务器（Debian 13，x86-64）',
            '获取位置': '[localghost-server-0.0.7-linux-amd64.tar.gz](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-server-0.0.7-linux-amd64.tar.gz)，另有 [SHA256SUMS](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/SHA256SUMS) 及其签名'
          },
          {
            '部分': '部署指南',
            '获取位置': '[localghost.ai/setup](https://www.localghost.ai/setup)（分步说明，附五步简版）'
          },
          {
            '部分': '官方网站',
            '获取位置': '[www.localghost.ai](https://www.localghost.ai)'
          },
          {
            '部分': '隐私政策',
            '获取位置': '[localghost.ai/privacy](https://www.localghost.ai/privacy)（2026 年 10 月 23 日更新）'
          },
          {
            '部分': '源代码',
            '获取位置': '[github.com/LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)'
          },
          {
            '部分': '安全问题上报',
            '获取位置': '[SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md)（PGP 加密邮件）'
          }
        ],
        note: '评测版本：0.0.7（“wisp”），据 GitHub 发布页面于 2026 年 10 月 23 日发布，是核查时项目的最新更新。服务器需要在 Debian 13 上通过终端部署，要求在 BIOS 中启用 TPM，据指南耗时一到两小时；手机应用通过 APK 文件安装，而不是 Google Play。'
      },
      requirements: {
        id: 'requirements',
        title: '配置要求',
        content: [
          '**LocalGhost 需要一台运行 Debian 13 且带 TPM 2.0 芯片的 x86-64 电脑、一块空磁盘或一个 20 GB 的文件用作加密卷，以及一部 Android 15 或更高版本的手机。** NVIDIA 显卡为可选项，但可加快模型运行。'
        ],
        columns: [
          '项目',
          '部署指南中的要求'
        ],
        rows: [
          {
            '项目': '电脑',
            '部署指南中的要求': 'x86-64、Debian 13，终端至少 57 乘 35 个字符'
          },
          {
            '项目': 'TPM',
            '部署指南中的要求': 'TPM 2.0（固件 TPM 即可）；没有时有软件方案'
          },
          {
            '项目': '加密卷',
            '部署指南中的要求': '空磁盘或 20 GB 以上文件；不能放在网络共享上'
          },
          {
            '项目': '显卡',
            '部署指南中的要求': 'NVIDIA 可选；项目自己的机器为 12 GB'
          },
          {
            '项目': '手机',
            '部署指南中的要求': 'Android 15 或更高；无需 Google Play 服务'
          },
          {
            '项目': '网络',
            '部署指南中的要求': '部署时需联网（从项目镜像下载约 12 GB）'
          }
        ],
        note: '据指南，同一台机器仅用 CPU 每小时可描述约 24 张照片；繁忙一天后的夜间记忆处理在 12 GB 显卡上约需两小时，在 CPU 上则超过一天；开发者称 Gemma 4 12B 在该显卡上约为每秒 53 个 token。PromptQuorum 没有复现这些数字。若要在外出时访问设备，还需要域名和端口转发。'
      },
      pricing: {
        id: 'pricing',
        title: '定价',
        content: [
          '**软件免费：项目声明采用 MIT 许可证，没有订阅、账号或许可证服务器。**'
        ],
        columns: [
          '项目',
          '费用'
        ],
        rows: [
          {
            '项目': '服务器与 Android 应用',
            '费用': '免费（MIT 许可证）'
          },
          {
            '项目': '你自己的硬件',
            '费用': '取决于所用设备的价格'
          },
          {
            '项目': '参考配置（项目方估算）',
            '费用': '零件约 £1,130，2026 年 6 月'
          },
          {
            '项目': '预装整机',
            '费用': '尚未销售；价格未定'
          }
        ],
        note: '于 2026 年 10 月 24 日读自 About 页面；金额为项目方给出的英镑数字，未作换算。项目称，未来的整机将按零件和组装成本加 30% 利润出售，未来的可选 daemon 可能以一次性套餐出售；目前两者都不存在。仓库还列出了用于捐赠的加密货币地址。'
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据项目的部署指南；PromptQuorum 没有运行过。**'
        ],
        numberedItems: [
          {
            title: '准备 Debian 设备',
            whyItMatters: '安装 Debian 13，在 BIOS 中启用 TPM，并安装 sudo、nginx、curl 和 gpg。若有 NVIDIA 显卡，请先自行安装驱动和 CUDA。'
          },
          {
            title: '先在手机上安装应用',
            whyItMatters: '指南要求在设备显示注册二维码之前完成，因为二维码包含手机的证书，应在出现后立即扫描。'
          },
          {
            title: '下载并校验服务器版本',
            whyItMatters: '下载压缩包、SHA256SUMS 及其签名，导入项目的 PGP 密钥，并在解压前核对签名和哈希值。'
          },
          {
            title: '在设备上运行安装程序',
            whyItMatters: '安装脚本会询问用作加密卷的磁盘或文件、TPM 封存和你的 PIN（一个主 PIN 和一个可选的擦除 PIN），然后显示二维码。'
          },
          {
            title: '扫描二维码并解锁',
            whyItMatters: '扫描即完成注册。之后运行更新脚本获取维基百科和更新内容；照片库较大时，设备需要几天来建立索引。'
          }
        ]
      },
      features: {
        id: 'key-features',
        title: 'wisp 0.0.7 包含什么',
        content: [
          '**项目列出本版本有十一个 daemon，以下每一项均来自其 README 或 About 页面。**'
        ],
        items: [
          '**采集。** 照片和视频按原样归档，由模型生成说明和标签；笔记、晚间签到和语音备忘成为日记条目，语音在设备上转写。',
          '**记忆。** 聊天、笔记和语音备忘被提炼为可编辑或删除的记忆，并根据照片、轨迹、健康数据和签到写出每日故事。',
          '**搜索与聊天。** 搜索索引覆盖整个归档，聊天基于你自己的上下文作答；无法作答时，由手机进行网页搜索并注明来源。',
          '**回想。** 对一段旧记忆的晨间回顾，以及附近地点的建议。',
          '**批评者。** 计划中的 28 个检测器有一个已运行：当你与设备交谈的次数是以往的两倍时会提示你。',
          '**安全。** 由 TPM 封存的 LUKS2 加密卷、使用中自动续期的手机证书、会销毁密钥的擦除 PIN，以及多次输错 PIN 后的锁定。'
        ]
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**项目称你的数据留在设备上，没有账号、没有统计分析、没有崩溃报告，也没有任何保存你数据的自有服务器。** README 补充说，若出现其清单中没有列出的请求，那就是一个缺陷和安全报告。',
          '据隐私页面，设备只向互联网请求公开数据，如行情、新闻、天气模型文件，以及来自项目签名镜像的更新，请求中不含你的任何信息。当聊天问题需要联网时，手机会把问题的文字发送给 DuckDuckGo，或使用你自己的密钥发送给 Brave。网站和镜像不保留访问日志；为设备可选邮箱地址服务的邮件中继会将邮件用设备的密钥封存，直到设备取走。'
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发者的说法。PromptQuorum 没有审计代码或网络流量，据 README，在此版本中设备的证书颁发机构密钥存放在系统盘上。'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**家庭实验室和 NAS 玩家**：有 Debian 设备，并能熟练使用终端和 TPM 设置。',
          '**Android 用户**：希望把照片、笔记和健康数据放在自己掌控的设备上。',
          '**自托管用户和 Go 开发者**：想阅读、测试或扩展代码。'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际质量。** PromptQuorum 没有运行 LocalGhost，因此记忆质量、图片说明、速度以及对电量或存储的影响均未经测试。',
          '**隐私与安全。** 无遥测的说法、签名更新链以及 README 提到的安全审计，都没有与代码或网络流量对照核实。',
          '**成熟度。** 据 README，目前是一台设备配一部手机在运行；未列出外部用户；诱饵卷、点对点备份和硬件产品尚未完成。',
          '**平台范围。** 没有 iPhone、桌面或网页客户端，服务器只能在 Linux 上运行，文档涵盖的是 Debian 13。',
          '**团队。** About 页面称这是一位创始人借助 AI 工具开发的项目，并未承诺支持的响应时间。'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: [
          '应用',
          '平台',
          '价格 / 许可证',
          '主要区别'
        ],
        rows: [
          {
            '应用': '[Odysseus](/zh/power-local-llm/odysseus-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / AGPL-3.0',
            '主要区别': '面向聊天、智能体、研究和文档的自托管 AI 工作空间，通过桌面应用或浏览器使用'
          },
          {
            '应用': '[Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)',
            '平台': 'Windows、macOS、Linux、网页',
            '价格 / 许可证': '免费 / AGPL 3.0',
            '主要区别': '可搜索笔记和文档的第二大脑，并能与 Obsidian 等工具同步'
          },
          {
            '应用': '[Second Me](/zh/power-local-llm/second-me-review-2026)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '用你的数据训练个性化模型，而不是建立由手机供数据的归档'
          }
        ],
        note: '竞品信息变化较快；请在各应用自己的页面上确认当前价格、许可证和平台。'
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '没有显卡也能运行 LocalGhost 吗？',
            a: '据部署指南，可以，此时全部在 CPU 上运行，但速度很慢：指南给出的是每小时约描述 24 张照片。'
          },
          {
            q: '如果公司消失了会怎样？',
            a: '项目称，由于没有许可证服务器或远程关停开关，设备会继续运行已安装的版本，任何人都可以分叉 MIT 代码。PromptQuorum 无法核实实际情况会如何。'
          },
          {
            q: 'AI 智能体或其他应用能访问我的设备吗？',
            a: 'README 称，出于有意设计，没有面向其他调用方的 API 或 MCP 服务器，设备会像宕机一样回应它们。同时补充说，以后可能会推出面向智能体的接口。'
          },
          {
            q: '硬件进展如何？',
            a: '目前没有硬件出售；开发者称，由公司制作的整机计划在名为 specter 的后续版本线推出，但没有给出日期。'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'LocalGhost 是一款免费的 MIT 许可个人 AI，据开发者介绍，它把照片、笔记、语音和健康数据保存在你自己的 Debian 设备上，并通过 Android 应用呈现，前三周内发布了七个版本。不利之处在于：这是一个由一人开发、首个版本发布于 2026 年 10 月 2 日的项目，部署需要在终端分多步完成，唯一的客户端是 Android，若干承诺的部分尚未完成，而且所有关于隐私和质量的说法都来自开发者本人。它适合技术上有把握、想关注早期项目的自托管用户；如果现在就需要桌面端的个人助手，可以对比 [Odysseus](/zh/power-local-llm/odysseus-review) 或 [Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)。'
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[About LocalGhost](https://www.localghost.ai/about)：功能、基本信息、定价和路线图，2026 年 10 月 24 日核查。',
          '[Set Up a LocalGhost Box](https://www.localghost.ai/setup)：配置要求与安装步骤。',
          '[LocalGhost 隐私页面](https://www.localghost.ai/privacy)：对外请求清单，以及网站、镜像和邮件中继保留的内容。',
          '[GitHub 上的 LocalGhost](https://github.com/LocalGhostDao/localghost)：README、MIT 许可证和 [SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md)。',
          '[wisp 0.0.7 发布页](https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7)：发布日期和文件列表。'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Odysseus评测](/zh/power-local-llm/odysseus-review)：自托管、本地优先的 AI 工作空间。',
          '[Khoj 评测](/zh/power-local-llm/khoj-ai-second-brain-review)：基于你自己笔记的 AI 第二大脑。',
          '[Second Me评测](/zh/power-local-llm/second-me-review-2026)：用你自己的数据训练的个性化 AI。',
          '[本地聊天应用与助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared)：聊天客户端与个人助手的分类对比。'
        ]
      }
    }
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/localghost-review-hero-ko.webp',
    title: 'LocalGhost 리뷰: 직접 호스팅하는 개인 AI 서버',
    seoTitle: 'LocalGhost 리뷰: 직접 호스팅하는 개인 AI',
    intro: 'LocalGhost는 MIT 라이선스의 개인 AI 시스템입니다. 직접 소유한 Debian 장비에서 여러 서버 프로그램이 사진, 메모, 음성 메모, 건강 데이터를 보관하고 로컬 모델로 읽으며, 유일한 접근 수단은 Android 앱입니다. 이 리뷰는 2026년 10월 24일에 확인한 프로젝트 웹사이트, GitHub 저장소, 0.0.7 버전을 바탕으로 합니다.',
    metaDescription: 'LocalGhost 리뷰: 직접 소유한 Debian 장비에서 쓰는 무료 MIT 라이선스 개인 AI 서버와 Android 앱. 설치 조건, 개인정보 주장, 아직 없는 기능을 정리했습니다.',
    twitterDescription: 'LocalGhost 리뷰: 직접 소유한 Debian 장비에서 동작하고 Android 폰으로 쓰는 오픈소스 개인 AI. 요구 사양, 주장, 남은 의문점을 정리했습니다.',
    audience: 'LocalGhost에 무엇이 필요한지, 비용은 얼마인지, 설치가 얼마나 번거로운지, 개인정보와 기억에 관한 어떤 주장이 출처로 확인되지 않는지 알고 싶은 셀프 호스팅 사용자와 홈랩 소유자를 위한 글입니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LocalGhost 리뷰',
    targetKeywords: [
      'localghost 리뷰',
      '셀프 호스팅 개인 ai',
      '내 하드웨어의 프라이빗 ai 기억',
      'localghost android 앱',
      '오픈소스 개인 ai 서버',
      'localghost vs khoj'
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX GPU',
      'Debian 13 PC with TPM 2.0',
      'Android 15 phone'
    ],
    leadAnswerBlock: '**LocalGhost는 직접 소유한 Debian 장비에서 서버 프로그램 묶음으로 동작하며 Android 앱으로만 사용하는 무료 MIT 라이선스 개인 AI입니다.** 한 사람이 만드는 매우 젊은 프로젝트로 첫 릴리스는 2026년 10월 2일이며, PromptQuorum은 설치하거나 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'LocalGhost는 정확히 무엇을 합니까?',
        answer: '프로젝트에 따르면 사진, 동영상, 위치 이동 경로, 메모, 음성 메모, 건강 데이터를 내 장비에 모아 캡션, 하루 이야기, 기억, 채팅 답변으로 바꿉니다.',
        bullets: [
          '언어·비전 모델은 llama.cpp가 제공하는 Gemma 4 12B이며, 음성 메모는 whisper.cpp로 받아 적습니다.',
          'Android 앱이 유일한 클라이언트입니다. iPhone 앱, 데스크톱 앱, 웹 인터페이스는 없습니다.',
          'README에 따르면 계정, 분석 도구, 데이터를 보관하는 클라우드 서비스가 없습니다.',
          '하드웨어는 아직 판매하지 않으며, 이미 가진 장비에 직접 설치합니다.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer'
      },
      {
        label: 'LocalGhost란?',
        anchor: 'what-is-localghost'
      },
      {
        label: '입수 방법',
        anchor: 'get-it'
      },
      {
        label: '필요한 사양',
        anchor: 'requirements'
      },
      {
        label: '요금',
        anchor: 'pricing'
      },
      {
        label: '시작하는 방법',
        anchor: 'getting-started'
      },
      {
        label: 'wisp 0.0.7에 포함된 것',
        anchor: 'key-features'
      },
      {
        label: '개인정보 보호와 네트워크 사용',
        anchor: 'privacy'
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use'
      },
      {
        label: '확인하지 못한 사항',
        anchor: 'who-should-not-use'
      },
      {
        label: '경쟁 제품과 대안',
        anchor: 'vs-alternatives'
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq'
      },
      {
        label: '결론',
        anchor: 'verdict'
      },
      {
        label: '출처',
        anchor: 'sources'
      },
      {
        label: '관련 글',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalGhost는 직접 소유한 Debian 장비에 내 삶의 사적인 기억을 쌓아 두는 오픈소스 개인 AI입니다.'
          },
          {
            type: 'plain-terms',
            text: '서버를 직접 설치하고 Android 앱을 깐 뒤 QR 코드를 스캔하면, 이후 폰은 내 장비하고만 통신합니다.'
          }
        ],
        items: [
          '유지 관리: 2026년 10월 2일부터 23일 사이에 일곱 개 버전(0.0.1~0.0.7)이 나왔고 저장소는 2025년 12월에 만들어졌습니다. 활발히 진행 중이므로 방치 프로젝트 경고는 해당하지 않습니다.',
          '라이선스: MIT. 소프트웨어는 무료이며 구독이 없습니다.',
          '설치: Debian 13에서 여러 단계를 터미널로 진행하는 방식이며, 더블클릭 설치 프로그램이 아닙니다.',
          '성숙도: 개발자는 디코이 볼륨, 피어 투 피어 백업, 하드웨어가 아직 만들어지지 않았다고 밝힙니다.',
          '근거: 2026년 10월 24일에 읽은 웹사이트, README, 릴리스 페이지이며 직접 테스트는 하지 않았습니다.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 LocalGhost를 설치하거나 테스트하거나 측정하지 않았습니다. 아래의 개인정보, 기억 품질, 속도에 관한 설명은 프로젝트 측의 주장입니다.'
          }
        ]
      },
      overview: {
        id: 'what-is-localghost',
        title: 'LocalGhost란?',
        content: [
          '**LocalGhost는 직접 소유한 장비에서 각각 한 가지 일을 맡는 열한 개의 작은 Go 프로그램(데몬)으로 이루어진 개인 AI 시스템이며, 접근 수단은 Android 앱뿐입니다.** 잉글랜드·웨일스에 등록된 LocalGhost.ai Ltd가 배포하고 창업자 Vlad Cealicu가 개발하며, 프로젝트는 2025년 12월에 시작되었습니다.',
          '데몬들은 사진, 동영상, 위치, 메모, 음성 메모, 건강 데이터를 받아 로컬 모델로 설명하고 색인하며, 하루마다 짧은 이야기를 쓰고 기억을 추려 냅니다. 별도의 데몬은 사용자에게 반론을 펴도록 설계되었고, 또 다른 데몬은 암호화와 잠금 해제를 맡습니다. 모델 엔진은 llama.cpp이고, README는 언어와 비전에 Gemma 4 12B, 검색에 EmbeddingGemma를 언급하며, 코드는 [LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)에 있습니다.'
        ]
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**LocalGhost는 GitHub Releases에서 받는 두 부분으로 이루어집니다. 폰용 서명된 APK와 장비용 Linux 서버 압축 파일입니다.** 앱 스토어 등록이나 호스팅 버전은 없습니다.'
        ],
        columns: [
          '구성 요소',
          '입수처'
        ],
        rows: [
          {
            '구성 요소': 'Android 앱(폰)',
            '입수처': '[localghost-app-0.0.7.apk](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-app-0.0.7.apk) (서명됨, Android 15 이상)'
          },
          {
            '구성 요소': '서버(Debian 13, x86-64)',
            '입수처': '[localghost-server-0.0.7-linux-amd64.tar.gz](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/localghost-server-0.0.7-linux-amd64.tar.gz)와 [SHA256SUMS](https://github.com/LocalGhostDao/localghost/releases/download/v0.0.7/SHA256SUMS) 및 그 서명'
          },
          {
            '구성 요소': '설치 가이드',
            '입수처': '[localghost.ai/setup](https://www.localghost.ai/setup) (단계별 설명과 다섯 단계 요약 포함)'
          },
          {
            '구성 요소': '공식 웹사이트',
            '입수처': '[www.localghost.ai](https://www.localghost.ai)'
          },
          {
            '구성 요소': '개인정보 처리방침',
            '입수처': '[localghost.ai/privacy](https://www.localghost.ai/privacy) (2026년 10월 23일 업데이트)'
          },
          {
            '구성 요소': '소스 코드',
            '입수처': '[github.com/LocalGhostDao/localghost](https://github.com/LocalGhostDao/localghost)'
          },
          {
            '구성 요소': '보안 취약점 신고',
            '입수처': '[SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md) (PGP 암호화 이메일)'
          }
        ],
        note: '확인한 버전: 0.0.7("wisp"). GitHub 릴리스 페이지에 따르면 2026년 10월 23일에 공개되었으며, 확인 시점의 프로젝트 최신 업데이트입니다. 서버는 Debian 13에서 터미널로 설치하고, BIOS에서 TPM을 켜야 하며, 가이드에 따르면 한두 시간이 걸립니다. 폰 앱은 Google Play가 아니라 APK 파일로 설치합니다.'
      },
      requirements: {
        id: 'requirements',
        title: '필요한 사양',
        content: [
          '**LocalGhost에는 Debian 13이 설치되고 TPM 2.0 칩이 있는 x86-64 컴퓨터, 암호화 볼륨용 빈 디스크 또는 20 GB 파일, Android 15 이상의 폰이 필요합니다.** NVIDIA 그래픽카드는 선택 사항이지만 모델 속도를 높여 줍니다.'
        ],
        columns: [
          '항목',
          '설치 가이드의 요구 사항'
        ],
        rows: [
          {
            '항목': '컴퓨터',
            '설치 가이드의 요구 사항': 'x86-64, Debian 13, 57×35자 이상 터미널'
          },
          {
            '항목': 'TPM',
            '설치 가이드의 요구 사항': 'TPM 2.0(펌웨어 TPM 가능), 없으면 소프트웨어 방식 존재'
          },
          {
            '항목': '볼륨',
            '설치 가이드의 요구 사항': '빈 디스크 또는 20 GB 이상 파일, 네트워크 공유 불가'
          },
          {
            '항목': '그래픽카드',
            '설치 가이드의 요구 사항': 'NVIDIA 선택 사항, 프로젝트 장비는 12 GB'
          },
          {
            '항목': '폰',
            '설치 가이드의 요구 사항': 'Android 15 이상, Google Play 서비스 불필요'
          },
          {
            '항목': '네트워크',
            '설치 가이드의 요구 사항': '설치 중 인터넷 필요(프로젝트 미러에서 약 12 GB)'
          }
        ],
        note: '가이드에 따르면 같은 장비는 CPU만으로 한 시간에 약 24장의 사진을 설명하며, 바쁜 하루 뒤의 야간 기억 처리는 12 GB 카드에서 약 두 시간, CPU에서는 하루 넘게 걸립니다. 개발자는 그 카드에서 Gemma 4 12B가 초당 약 53토큰이라고 밝힙니다. PromptQuorum은 이 수치를 재현하지 않았습니다. 집 밖에서 장비에 접속하려면 도메인과 포트 포워딩도 필요합니다.'
      },
      pricing: {
        id: 'pricing',
        title: '요금',
        content: [
          '**소프트웨어는 무료입니다. 프로젝트는 MIT 라이선스이며 구독, 계정, 라이선스 서버가 없다고 밝힙니다.**'
        ],
        columns: [
          '항목',
          '비용'
        ],
        rows: [
          {
            '항목': '서버와 Android 앱',
            '비용': '무료(MIT 라이선스)'
          },
          {
            '항목': '본인 하드웨어',
            '비용': '장비 구입 비용'
          },
          {
            '항목': '기준 구성(프로젝트 추정)',
            '비용': '부품값 약 £1,130, 2026년 6월'
          },
          {
            '항목': '완제품 박스',
            '비용': '판매 전, 가격 미정'
          }
        ],
        note: '2026년 10월 24일 About 페이지에서 확인했습니다. 금액은 프로젝트가 영국 파운드로 제시한 수치이며 환산하지 않았습니다. 프로젝트에 따르면 향후 박스는 부품·조립 비용에 30% 마진을 붙여 판매하고, 향후 선택형 데몬은 일회성 패키지로 판매될 수 있으나 둘 다 아직 존재하지 않습니다. 저장소에는 후원용 암호화폐 주소도 적혀 있습니다.'
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 프로젝트의 설치 가이드를 따랐으며, PromptQuorum은 직접 실행하지 않았습니다.**'
        ],
        numberedItems: [
          {
            title: 'Debian 장비를 준비합니다',
            whyItMatters: 'Debian 13을 설치하고 BIOS에서 TPM을 켠 뒤 sudo, nginx, curl, gpg를 설치합니다. NVIDIA 카드가 있다면 먼저 드라이버와 CUDA를 직접 설치합니다.'
          },
          {
            title: '먼저 폰에 앱을 설치합니다',
            whyItMatters: '가이드는 장비가 등록용 QR 코드를 표시하기 전에 설치하라고 합니다. 이 코드에는 폰의 인증서가 들어 있어 나타나자마자 스캔해야 하기 때문입니다.'
          },
          {
            title: '서버 릴리스를 내려받아 검증합니다',
            whyItMatters: '압축 파일, SHA256SUMS, 그 서명을 받고 프로젝트의 PGP 키를 가져온 뒤, 압축을 풀기 전에 서명과 해시를 확인합니다.'
          },
          {
            title: '장비에서 설치 프로그램을 실행합니다',
            whyItMatters: '설치 스크립트가 볼륨용 디스크 또는 파일, TPM 봉인, PIN(주 PIN과 선택형 삭제 PIN)을 묻고 이어서 QR 코드를 표시합니다.'
          },
          {
            title: 'QR 코드를 스캔하고 잠금을 해제합니다',
            whyItMatters: '스캔이 곧 등록입니다. 이후 업데이트 스크립트를 실행해 위키백과와 최신 내용을 받습니다. 사진 라이브러리가 크면 색인에 며칠이 걸립니다.'
          }
        ]
      },
      features: {
        id: 'key-features',
        title: 'wisp 0.0.7에 포함된 것',
        content: [
          '**프로젝트는 이 릴리스에 열한 개의 데몬이 있다고 밝히며, 아래 항목은 모두 README 또는 About 페이지에서 가져왔습니다.**'
        ],
        items: [
          '**수집.** 사진과 동영상은 원본 그대로 보관되고 모델이 캡션과 태그를 붙입니다. 메모, 저녁 체크인, 음성 메모는 일기 항목이 되며 음성은 장비에서 받아 적습니다.',
          '**기억.** 채팅, 메모, 음성 메모는 편집하거나 삭제할 수 있는 기억으로 정리되고, 사진, 이동 경로, 건강 데이터, 체크인으로 하루 이야기가 작성됩니다.',
          '**검색과 채팅.** 검색 색인이 보관 자료를 다루고 채팅은 내 맥락에서 답합니다. 답하지 못하면 폰이 웹 검색을 하고 출처를 밝힙니다.',
          '**상기.** 오래된 기억에 대한 아침 회고와 근처 장소 제안입니다.',
          '**비평가.** 계획된 28개 탐지기 중 하나가 동작하며, 장비와 이전보다 두 배 많이 대화할 때 알려 줍니다.',
          '**보안.** TPM에 봉인된 LUKS2 암호화 볼륨, 사용 중 갱신되는 폰 인증서, 키를 파기하는 삭제 PIN, 잘못된 PIN 이후의 잠금입니다.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 네트워크 사용',
        content: [
          '**프로젝트는 데이터가 장비에 남으며, 계정, 분석, 오류 보고가 없고 사용자 정보를 보관하는 자체 서버도 없다고 밝힙니다.** README는 목록에 없는 요청이 있다면 그것은 버그이자 보안 신고 대상이라고 덧붙입니다.',
          '개인정보 페이지에 따르면 장비는 시세, 뉴스, 날씨 모델 파일, 프로젝트의 서명된 미러에서 받는 업데이트처럼 공개 데이터만 인터넷에 요청하며, 요청에 사용자 정보는 들어가지 않습니다. 채팅 질문에 웹이 필요하면 폰이 질문의 단어를 DuckDuckGo로, 또는 본인의 키로 Brave로 보냅니다. 웹사이트와 미러는 접속 로그를 남기지 않고, 선택형 장비 주소를 위한 메일 릴레이는 장비가 가져갈 때까지 메시지를 장비의 키로 봉인한 채 보관합니다.'
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 설명입니다. PromptQuorum은 코드나 네트워크 트래픽을 감사하지 않았으며, README에 따르면 이 릴리스에서는 장비의 인증 기관 키가 시스템 디스크에 있습니다.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**홈랩과 NAS 소유자** 중 Debian 장비가 있고 터미널과 TPM 설정이 익숙한 분.',
          '**Android 사용자** 중 사진, 메모, 건강 데이터를 직접 통제하는 장비에 두고 싶은 분.',
          '**셀프 호스팅 사용자와 Go 개발자** 중 코드를 읽고 테스트하거나 확장하고 싶은 분.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 품질.** PromptQuorum은 LocalGhost를 실행하지 않았으므로 기억 품질, 캡션, 속도, 배터리나 저장 공간에 미치는 영향은 검증되지 않았습니다.',
          '**개인정보와 보안.** 텔레메트리가 없다는 설명, 서명된 업데이트 체계, README가 언급하는 보안 감사는 코드나 트래픽과 대조하지 않았습니다.',
          '**성숙도.** README에 따르면 장비 한 대와 폰 한 대에서 구동 중이며, 외부 사용자는 언급되지 않습니다. 디코이 볼륨, 피어 투 피어 백업, 하드웨어 제품은 만들어지지 않았습니다.',
          '**플랫폼 범위.** iPhone, 데스크톱, 웹 클라이언트가 없고 서버는 Linux에서만 동작하며 문서화된 것은 Debian 13입니다.',
          '**팀.** About 페이지는 창업자 한 명이 AI 도구로 개발한다고 밝히며 지원 응답 시간은 약속하지 않습니다.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '핵심 차이'
        ],
        rows: [
          {
            '앱': '[Odysseus](/ko/power-local-llm/odysseus-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / AGPL-3.0',
            '핵심 차이': '채팅, 에이전트, 리서치, 문서를 위한 셀프 호스팅 AI 워크스페이스로 데스크톱 앱 또는 브라우저에서 사용'
          },
          {
            '앱': '[Khoj](/ko/power-local-llm/khoj-ai-second-brain-review)',
            '플랫폼': 'Windows, macOS, Linux, 웹',
            '가격 / 라이선스': '무료 / AGPL 3.0',
            '핵심 차이': '노트와 문서를 검색하고 Obsidian 같은 도구와 동기화하는 세컨드 브레인'
          },
          {
            '앱': '[Second Me](/ko/power-local-llm/second-me-review-2026)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': '폰이 채워 주는 보관소를 만드는 대신 내 데이터로 개인화 모델을 훈련'
          }
        ],
        note: '경쟁 제품의 세부 정보는 자주 바뀝니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 공식 페이지에서 확인하십시오.'
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '그래픽카드 없이 LocalGhost를 쓸 수 있습니까?',
            a: '설치 가이드에 따르면 가능하지만 모든 처리가 CPU에서 이루어져 느리며, 한 시간에 약 24장의 사진을 설명하는 수준이라고 합니다.'
          },
          {
            q: '회사가 사라지면 어떻게 됩니까?',
            a: '프로젝트는 라이선스 서버나 원격 정지 기능이 없으므로 설치된 버전이 계속 동작하고 누구나 MIT 코드를 포크할 수 있다고 밝힙니다. 실제로 어떻게 될지는 PromptQuorum이 확인할 수 없습니다.'
          },
          {
            q: 'AI 에이전트나 다른 앱이 내 장비에 접근할 수 있습니까?',
            a: 'README에 따르면 다른 호출자를 위한 API나 MCP 서버는 의도적으로 없으며, 장비는 이들에게 중단된 것처럼 응답합니다. 에이전트용 창구가 나중에 생길 수 있다고도 덧붙입니다.'
          },
          {
            q: '하드웨어는 어떻게 되고 있습니까?',
            a: '판매 중인 하드웨어는 없습니다. 개발자는 회사가 만드는 박스를 specter라는 이후 릴리스 라인에서 계획하고 있으며 일정은 밝히지 않았다고 말합니다.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'LocalGhost는 개발자에 따르면 사진, 메모, 음성, 건강 데이터를 직접 소유한 Debian 장비에 보관하고 Android 앱으로 보여 주는 무료 MIT 라이선스 개인 AI이며, 첫 3주 동안 일곱 번 릴리스되었습니다. 반면 첫 릴리스가 2026년 10월 2일인 한 사람 프로젝트이고, 설치는 터미널에서 여러 단계를 거쳐야 하며, 클라이언트는 Android뿐이고, 예고된 일부 구성 요소는 아직 없으며, 개인정보와 품질에 관한 모든 설명은 개발자 본인의 것입니다. 초기 프로젝트를 지켜보고 싶은 기술에 능숙한 셀프 호스팅 사용자에게 적합하며, 지금 바로 데스크톱 기반 개인 비서를 찾는다면 [Odysseus](/ko/power-local-llm/odysseus-review)나 [Khoj](/ko/power-local-llm/khoj-ai-second-brain-review)를 비교해 볼 수 있습니다.'
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[About LocalGhost](https://www.localghost.ai/about): 기능, 핵심 정보, 요금, 로드맵. 2026년 10월 24일 확인.',
          '[Set Up a LocalGhost Box](https://www.localghost.ai/setup): 요구 사항과 설치 단계.',
          '[LocalGhost 개인정보 페이지](https://www.localghost.ai/privacy): 외부로 나가는 요청 목록과 웹사이트, 미러, 메일 릴레이가 보관하는 내용.',
          '[GitHub의 LocalGhost](https://github.com/LocalGhostDao/localghost): README, MIT 라이선스, [SECURITY.md](https://github.com/LocalGhostDao/localghost/blob/main/SECURITY.md).',
          '[wisp 0.0.7 릴리스](https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7): 공개일과 파일 목록.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Odysseus 리뷰](/ko/power-local-llm/odysseus-review): 셀프 호스팅, 로컬 우선 AI 워크스페이스.',
          '[Khoj 리뷰](/ko/power-local-llm/khoj-ai-second-brain-review): 내 노트 위에서 동작하는 AI 세컨드 브레인.',
          '[Second Me 리뷰](/ko/power-local-llm/second-me-review-2026): 내 데이터로 훈련하는 개인화 AI.',
          '[로컬 채팅 앱·AI 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared): 채팅 클라이언트와 개인 비서 카테고리 비교.'
        ]
      }
    }
  }
}
